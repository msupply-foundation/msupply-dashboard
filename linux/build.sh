#!/usr/bin/env bash
# Build the mSupply Dashboard image from a msupply-dashboard checkout.
#   ./build.sh <path to msupply-dashboard checkout> <tag>
# The checkout must have the plugins built (custom-plugins/<id>/dist) and the LFS files pulled.
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
SRC="$(cd "${1:?checkout path}" && pwd)"
TAG="${2:?tag, e.g. 13.2.2}"
IMAGE="${IMAGE:-msupplyfoundation/msupply-dashboard-linux}"
CTX="$(mktemp -d)"
trap 'rm -rf "$CTX"' EXIT

COMMIT=$(git -C "$SRC" rev-parse --short HEAD)
BRANCH=$(git -C "$SRC" rev-parse --abbrev-ref HEAD)
[ -z "$(git -C "$SRC" status --porcelain --untracked-files=no)" ] || { echo "checkout has local changes" >&2; exit 1; }
head -c 15 "$SRC/release/data/grafana.db" | grep -q "SQLite format" || { echo "grafana.db is an LFS pointer: git lfs pull" >&2; exit 1; }

cp -r "$HERE/bin" "$HERE/lib" "$HERE/provisioning" "$HERE/Dockerfile" "$CTX/"
mkdir -p "$CTX/plugins" "$CTX/seed" "$CTX/db"
for p in msupplyfoundation-table msupplyfoundation-msupply-regionmap; do
  d="$SRC/custom-plugins/$p/dist"
  [ -f "$d/module.js" ] && [ -f "$d/plugin.json" ] || { echo "$p is not built ($d)" >&2; exit 1; }
  cp -r "$d" "$CTX/plugins/$p"
done
cp "$SRC/release/data/grafana.db" "$CTX/seed/grafana.db"
cp "$SRC/release/conf/provisioning/db-init.sql" "$CTX/db/db-init.sql"
find "$CTX" -name '._*' -delete

docker build --build-arg SOURCE_COMMIT="$COMMIT" --build-arg SOURCE_BRANCH="$BRANCH" -t "$IMAGE:$TAG" "$CTX"
echo "built $IMAGE:$TAG from $BRANCH $COMMIT"
