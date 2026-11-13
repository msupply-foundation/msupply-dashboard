"""msupply check: read-only checks of a running installation. Run inside the dashboard container:
    docker compose exec dashboard msupply check
Exit code 0 when nothing FAILs. WARN lines need a look but do not stop the dashboard from working.
"""
import base64
import json
import os
import re
import subprocess
import sys
import urllib.error
import urllib.request

URL = "http://localhost:3000"
USER = os.environ.get("GF_SECURITY_ADMIN_USER", "admin")
PASSWORD = os.environ.get("GF_SECURITY_ADMIN_PASSWORD", "")
OWN_PLUGINS = ["msupplyfoundation-table", "msupplyfoundation-msupply-regionmap"]
LOG = os.path.join(os.environ.get("GF_PATHS_LOGS", "/var/log/grafana"), "grafana.log")
results = []
# Angular panel types that Grafana 13 converts by itself when the dashboard opens.
AUTO_MIGRATED = {"graph": "time series", "singlestat": "stat", "grafana-singlestat-panel": "stat",
                 "table-old": "table", "grafana-piechart-panel": "pie chart", "grafana-worldmap-panel": "geomap"}


def report(status, name, detail=""):
    results.append(status)
    print(f"{status:5} {name:40} {detail}")


def api(path, auth=True, timeout=30):
    req = urllib.request.Request(URL + path)
    if auth:
        token = base64.b64encode(f"{USER}:{PASSWORD}".encode()).decode()
        req.add_header("Authorization", "Basic " + token)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.loads(r.read())


def psql(sql):
    env = dict(os.environ, PGPASSWORD=os.environ.get("PG_PASSWORD", ""), PGCONNECT_TIMEOUT="10")
    cmd = ["psql", "-h", os.environ.get("PG_HOST", ""), "-p", os.environ.get("PG_PORT", "5432"),
           "-U", os.environ.get("PG_USER", ""), "-d", os.environ.get("PG_DATABASE", ""),
           "-X", "-q", "-t", "-A", "-v", "ON_ERROR_STOP=1", "-c", sql]
    r = subprocess.run(cmd, capture_output=True, text=True, env=env)
    if r.returncode:
        raise RuntimeError(r.stderr.strip().splitlines()[-1] if r.stderr.strip() else "psql failed")
    return r.stdout.strip()


# 1-2. Grafana is up, and the admin login works
try:
    h = api("/api/health", auth=False)
    report("PASS" if h.get("database") == "ok" else "FAIL", "Grafana is up", h.get("version", ""))
except Exception as e:
    report("FAIL", "Grafana is up", str(e))
    sys.exit(1)
try:
    report("PASS", "Admin login", api("/api/user")["login"])
except urllib.error.HTTPError as e:
    report("FAIL", "Admin login", f"HTTP {e.code}: check GF_SECURITY_ADMIN_PASSWORD in .env")
    sys.exit(1)

# 3. Where the browser goes after logout must be a real address
try:
    so = api("/api/admin/settings").get("auth", {}).get("signout_redirect_url", "") or ""
    if so and (re.search(r"[<>\s]", so) or not re.match(r"^https?://[^/]+", so)):
        report("FAIL", "Logout address", f"invalid: {so}. Check MSUPPLY_SERVER_URL and GF_AUTH_SIGNOUT_REDIRECT_URL in .env")
    else:
        report("PASS", "Logout address", so or "Grafana login page")
except Exception as e:
    report("WARN", "Logout address", f"could not read the settings: {e}")

# 4-5. Data sources: one default PostgreSQL, and every data source connects
sources = api("/api/datasources")
defaults = [d for d in sources if d.get("isDefault")]
if len(defaults) == 1 and defaults[0]["type"] == "grafana-postgresql-datasource":
    report("PASS", "Default data source", defaults[0]["name"])
else:
    report("FAIL", "Default data source", f"{len(defaults)} default(s): run msupply update-grafanadb")
for d in sources:
    try:
        r = api(f"/api/datasources/uid/{d['uid']}/health", timeout=20)
        ok = r.get("status") == "OK"
        msg = r.get("message", "")
    except urllib.error.HTTPError as e:
        ok, msg = False, json.loads(e.read() or b"{}").get("message", f"HTTP {e.code}")
    except Exception as e:  # timeout: usually a firewall dropping the connection
        ok, msg = False, f"no answer ({e.__class__.__name__}): check the firewall and pg_hba.conf"
    detail = f"{d.get('url', '')} db={d.get('jsonData', {}).get('database', '')}"
    report("PASS" if ok else "FAIL", f"Data source connects: {d['name']}"[:40], detail if ok else f"{detail}: {msg[:90]}")

# 6. mSupply plugins
for p in OWN_PLUGINS:
    try:
        report("PASS", f"Plugin {p}"[:40], api(f"/api/plugins/{p}/settings")["info"]["version"])
    except Exception:
        report("FAIL", f"Plugin {p}"[:40], "not loaded")

# 7-8. Dashboards, and panel types that no installed plugin provides
dash = api("/api/search?type=dash-db&limit=5000")
report("PASS" if dash else "FAIL", "Dashboards present", str(len(dash)))
installed = {p["id"] for p in api("/api/plugins?type=panel")} | {"row"}
missing = {}
for item in dash:
    d = api(f"/api/dashboards/uid/{item['uid']}")["dashboard"]
    stack = list(d.get("panels", []))
    while stack:
        p = stack.pop()
        stack.extend(p.get("panels", []) or [])
        t = p.get("type")
        if t and t not in installed:
            missing.setdefault(t, set()).add(item["title"])
for t in [t for t in missing if t in AUTO_MIGRATED]:
    report("PASS", f"Panel type {t}"[:40], f"converted to {AUTO_MIGRATED[t]} on open ({len(missing.pop(t))} dashboard(s))")
if missing:
    for t, titles in sorted(missing.items()):
        report("WARN", f"Panel plugin missing: {t}"[:40], f"{len(titles)} dashboard(s), e.g. {sorted(titles)[0][:50]}")
else:
    report("PASS", "Panel plugins", "every panel type is installed")

# 9. Dashboard database: reachable, has the tables and the procedure mSupply calls after an export
try:
    tables = int(psql("select count(*) from information_schema.tables where table_schema = 'public'"))
    has_post = psql("select count(*) from pg_proc where proname = 'post_export'") != "0"
    # Every table and procedure that db-init.sql of this image creates must exist; an older database lacks some.
    src = open("/usr/share/msupply/db/db-init.sql", errors="replace").read()
    # Only what the script itself creates: drop procedure bodies ($$...$$) and comments first.
    src = re.sub(r"\$(\w*)\$.*?\$\1\$", " ", src, flags=re.S)
    src = re.sub(r"/\*.*?\*/", " ", src, flags=re.S)
    src = re.sub(r"--[^\n]*", " ", src)
    names = set(m.lower() for m in re.findall(
        r"(?im)^\s*create\s+(?:table\s+(?:if\s+not\s+exists\s+)?|or\s+replace\s+procedure\s+)(?:public\.)?\"?([a-z_][a-z0-9_]*)", src))
    present = set(psql("select lower(table_name) from information_schema.tables where table_schema = 'public' "
                       "union select lower(proname) from pg_proc p join pg_namespace n on n.oid = p.pronamespace "
                       "where nspname = 'public'").split())
    absent = sorted(names - present)
    if tables and has_post and absent:
        report("FAIL", "Dashboard database",
               f"older than this version: {len(absent)} missing (e.g. {', '.join(absent[:3])}). Run msupply update-db")
    elif tables and has_post:
        report("PASS", "Dashboard database", f"{tables} tables, post_export() present, up to date")
    elif not tables:
        report("FAIL", "Dashboard database", "empty: run msupply init-db before the first mSupply export")
    else:
        report("FAIL", "Dashboard database", "post_export() missing: mSupply exports will not build the aggregates")
except Exception as e:
    report("FAIL", "Dashboard database", str(e)[:120])

# 10. No plugin downloads on boot
report("PASS" if os.environ.get("GF_PLUGINS_PREINSTALL_DISABLED") == "true" else "FAIL",
       "Plugin downloads disabled", os.environ.get("GF_PLUGINS_PREINSTALL_DISABLED", "unset"))

# 11. Errors in Grafana's log since the last start. Two kinds are left out on purpose:
#  - query errors coming from the database (statusSource=downstream): they belong to a dashboard's SQL,
#    not to the installation, and are counted separately;
#  - "database is locked" (SQLITE_BUSY) on the first start, which Grafana retries by itself.
try:
    lines = open(LOG, errors="replace").read().splitlines()
    start = max((i for i, l in enumerate(lines) if 'msg="Starting Grafana"' in l), default=0)
    errs = [l for l in lines[start:] if "level=error" in l]
    query = [l for l in errs if "statusSource=downstream" in l or "plugin.grafana-postgresql-datasource" in l]
    busy = [l for l in errs if "SQLITE_BUSY" in l]
    other = [l for l in errs if l not in query and l not in busy]
    if other:
        first = re.sub(r"\s+", " ", other[0])[:120]
        report("FAIL", "No errors since Grafana started", f"{len(other)}; first: {first}")
    else:
        report("PASS", "No errors since Grafana started", "0")
    if query:
        report("WARN", "Dashboard query errors", f"{len(query)} log lines: a dashboard's SQL failed on the database")
except FileNotFoundError:
    report("WARN", "No errors since Grafana started", f"{LOG} not found")

print()
fails, warns = results.count("FAIL"), results.count("WARN")
print(f"{fails} FAIL, {warns} WARN." if fails or warns else "All checks passed.")
sys.exit(1 if fails else 0)
