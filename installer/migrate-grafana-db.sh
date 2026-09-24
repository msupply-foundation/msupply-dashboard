#!/usr/bin/env bash
#
# Migrate a legacy grafana.db (Grafana 8.x) up to the version shipped in
# installer/grafana.url, by running that Grafana binary against a copy of the
# database and letting its own migrator do the work.
#
# Grafana migrates forward automatically on startup and supports jumping
# straight from 8.x to 13.x -- no intermediate 9/10/11/12 hop is required.
# There is no downgrade path, so this script never writes to the source file:
# it produces a new, migrated copy and leaves the original untouched.
#
# Usage:
#   ./migrate-grafana-db.sh <source-grafana.db> [output-dir]
#
# Example:
#   ./migrate-grafana-db.sh ../release/data/grafana.db ./migrated
#
set -euo pipefail

SRC="${1:-}"
OUT_DIR="${2:-./migrated}"

if [[ -z "$SRC" ]]; then
  echo "usage: $0 <source-grafana.db> [output-dir]" >&2
  exit 2
fi
if [[ ! -f "$SRC" ]]; then
  echo "ERROR: source database not found: $SRC" >&2
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
GRAFANA_URL="$(tr -d '[:space:]' < "$SCRIPT_DIR/grafana.url")"

# The URL in grafana.url is the Windows build (that is what the installer
# ships). Derive the matching build for whatever platform we are migrating on.
VERSION="$(sed -E 's|.*/grafana-([0-9]+\.[0-9]+\.[0-9]+)\..*|\1|' <<<"$GRAFANA_URL")"
case "$(uname -s)" in
  Darwin) PLAT="darwin-$([[ "$(uname -m)" == "arm64" ]] && echo arm64 || echo amd64)" ;;
  Linux)  PLAT="linux-$([[ "$(uname -m)" == "aarch64" ]] && echo arm64 || echo amd64)" ;;
  *)      echo "ERROR: unsupported platform $(uname -s)" >&2; exit 1 ;;
esac
DL_URL="https://dl.grafana.com/oss/release/grafana-${VERSION}.${PLAT}.tar.gz"

echo "### Target Grafana version: $VERSION ($PLAT)"

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

echo "### Downloading Grafana $VERSION"
curl -fL# "$DL_URL" -o "$WORK/grafana.tar.gz"
tar -xzf "$WORK/grafana.tar.gz" -C "$WORK"
HOMEPATH="$WORK/grafana-$VERSION"
[[ -x "$HOMEPATH/bin/grafana" ]] || { echo "ERROR: grafana binary not found" >&2; exit 1; }

mkdir -p "$OUT_DIR/data" "$OUT_DIR/conf" "$OUT_DIR/logs" "$OUT_DIR/plugins"
cp "$SRC" "$OUT_DIR/data/grafana.db"
cp "$SRC" "$OUT_DIR/grafana.db.backup-pre-${VERSION}"

BEFORE="$(sqlite3 "$OUT_DIR/data/grafana.db" 'SELECT COUNT(*) FROM migration_log;')"
echo "### Migrations already applied in source: $BEFORE"

# Minimal config: we only want the migrator to run. Disable the background
# plugin installer so startup stays offline and fast.
# Pick a free high port so we never collide with a Grafana already running on
# this machine -- a collision would kill our server instantly and we could
# mistake someone else's healthy server for a successful migration.
PORT="$(python3 -c 'import socket;s=socket.socket();s.bind(("127.0.0.1",0));print(s.getsockname()[1]);s.close()')"

cat > "$OUT_DIR/conf/migrate.ini" <<INI
[server]
http_port = $PORT
[database]
type = sqlite3
[plugins]
preinstall_disabled = true
[analytics]
reporting_enabled = false
check_for_updates = false
INI

echo "### Running migrations (starting Grafana briefly)"
"$HOMEPATH/bin/grafana" server \
  --homepath "$HOMEPATH" \
  --config "$OUT_DIR/conf/migrate.ini" \
  cfg:default.paths.data="$OUT_DIR/data" \
  cfg:default.paths.logs="$OUT_DIR/logs" \
  cfg:default.paths.plugins="$OUT_DIR/plugins" \
  > "$OUT_DIR/migrate.log" 2>&1 &
PID=$!

# Wait until *our* process reports the HTTP server listening, which happens
# after migrations complete. Watch the log rather than probing the port: an
# unrelated Grafana could answer the probe and mask a failed run.
READY=""
for _ in $(seq 1 90); do
  if grep -q "HTTP Server Listen" "$OUT_DIR/migrate.log" 2>/dev/null; then
    READY=1
    break
  fi
  if ! kill -0 "$PID" 2>/dev/null; then
    echo "ERROR: Grafana exited during migration. Log:" >&2
    tail -40 "$OUT_DIR/migrate.log" >&2
    exit 1
  fi
  sleep 2
done

kill "$PID" 2>/dev/null || true
wait "$PID" 2>/dev/null || true

if [[ -z "$READY" ]]; then
  echo "ERROR: timed out waiting for Grafana to finish migrating. Log:" >&2
  tail -40 "$OUT_DIR/migrate.log" >&2
  exit 1
fi

if grep -qiE "migration failed|failed to migrate" "$OUT_DIR/migrate.log"; then
  echo "ERROR: migration reported failures:" >&2
  grep -iE "migration failed|failed to migrate" "$OUT_DIR/migrate.log" >&2
  exit 1
fi

AFTER="$(sqlite3 "$OUT_DIR/data/grafana.db" 'SELECT COUNT(*) FROM migration_log;')"
FAILED="$(sqlite3 "$OUT_DIR/data/grafana.db" 'SELECT COUNT(*) FROM migration_log WHERE success=0;')"
INTEGRITY="$(sqlite3 "$OUT_DIR/data/grafana.db" 'PRAGMA integrity_check;')"

echo
echo "### Done"
echo "  migrations: $BEFORE -> $AFTER (failed: $FAILED)"
echo "  integrity:  $INTEGRITY"
printf '  users: %s  dashboards: %s  datasources: %s  oauth identities: %s\n' \
  "$(sqlite3 "$OUT_DIR/data/grafana.db" 'SELECT COUNT(*) FROM user;')" \
  "$(sqlite3 "$OUT_DIR/data/grafana.db" 'SELECT COUNT(*) FROM dashboard WHERE is_folder=0;')" \
  "$(sqlite3 "$OUT_DIR/data/grafana.db" 'SELECT COUNT(*) FROM data_source;')" \
  "$(sqlite3 "$OUT_DIR/data/grafana.db" 'SELECT COUNT(*) FROM user_auth;')"
echo
echo "  migrated db: $OUT_DIR/data/grafana.db"
echo "  backup:      $OUT_DIR/grafana.db.backup-pre-${VERSION}"

if [[ "$FAILED" != "0" || "$INTEGRITY" != "ok" ]]; then
  echo "ERROR: post-migration checks did not pass" >&2
  exit 1
fi
if [[ "$AFTER" -le "$BEFORE" ]]; then
  echo "ERROR: no migrations were applied ($BEFORE -> $AFTER)." >&2
  echo "       The database was already current, or Grafana never ran." >&2
  exit 1
fi
