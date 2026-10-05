"""msupply update-grafanadb: fix a client's grafana.db after it moved to Grafana 13.
Linux port of release/conf/provisioning/grafanadb-update.bat (msupply-dashboard), plus two reports.

Grafana must be stopped, and the grafana.db must already be on the Grafana 13 schema
(start Grafana on it once). Run from the install folder:
    docker compose stop dashboard
    docker compose run --rm dashboard msupply update-grafanadb
    docker compose up -d

Fixes, all in grafana.db (backed up first to data/backups/):
  1. user_auth.auth_id for OAuth users, matched to [user]ID in public.user of the dashboard database.
     Without it Grafana 13 cannot log those users in through mSupply.
  2. Data sources still typed 'postgres' become 'grafana-postgresql-datasource'.
  3. jsonData.database filled from the old top-level database column where it is missing.
  4. Exactly one default data source per org.
Reports (nothing changed): data sources that point at localhost, and panel types with no plugin.
Running it again is safe.
"""
import csv
import datetime
import glob
import json
import os
import shutil
import sqlite3
import subprocess
import sys
import tempfile
import urllib.request

DATA = os.environ.get("GF_PATHS_DATA", "/var/lib/grafana")
DB = os.path.join(DATA, "grafana.db")
SQL = "/usr/share/msupply/lib/grafanadb-update.sql"
# Angular panel types that Grafana 13 converts by itself when the dashboard opens.
AUTO_MIGRATED = {"graph": "time series", "singlestat": "stat", "grafana-singlestat-panel": "stat",
                 "table-old": "table", "grafana-piechart-panel": "pie chart", "grafana-worldmap-panel": "geomap"}


def step(t):
    print(f"\n== {t}")


def fail(t):
    print(f"ERROR: {t}", file=sys.stderr)
    sys.exit(1)


def answering(url):
    try:
        with urllib.request.urlopen(url + "/api/health", timeout=3):
            return True
    except Exception:
        return False


step("Check")
if answering("http://localhost:3000") or answering("http://dashboard:3000"):
    fail("Grafana is running. Stop it first: docker compose stop dashboard, "
         "then: docker compose run --rm dashboard msupply update-grafanadb")
if not os.path.exists(DB):
    fail(f"{DB} not found. Copy the client's grafana.db to data/grafana.db first.")
c = sqlite3.connect(DB)
migrated = c.execute("select count(*) from migration_log where migration_id = "
                     "'update login and email fields to lowercase' and success = 1").fetchone()[0]
if migrated != 1:
    fail("grafana.db is not on the Grafana 13 schema yet. Start Grafana on it once "
         "(docker compose up -d, wait for the login page), stop it, and run this again.")
print("grafana.db is on the Grafana 13 schema; Grafana is stopped")
c.close()

step("Back up")
os.makedirs(os.path.join(DATA, "backups"), exist_ok=True)
backup = os.path.join(DATA, "backups", "grafana_" + datetime.datetime.now().strftime("%Y%m%d%H%M%S") + ".db")
shutil.copy2(DB, backup)
print("data/backups/" + os.path.basename(backup))

c = sqlite3.connect(DB)
step("1/4 OAuth users: auth_id")
rows = c.execute("select u.id, u.name, u.email from user u join user_auth ua on u.id = ua.user_id "
                 "where u.is_disabled = 0 and ua.auth_module = 'oauth_generic_oauth'").fetchall()
print(f"OAuth users in grafana.db: {len(rows)}")
if rows:
    with tempfile.TemporaryDirectory() as work:
        with open(os.path.join(work, "users.csv"), "w", newline="") as f:
            w = csv.writer(f, lineterminator="\n")
            w.writerow(["user_id", "name", "email"])
            w.writerows(rows)
        env = dict(os.environ, PGPASSWORD=os.environ.get("PG_PASSWORD", ""), PGCONNECT_TIMEOUT="10")
        r = subprocess.run(["psql", "-h", os.environ["PG_HOST"], "-p", os.environ.get("PG_PORT", "5432"),
                            "-U", os.environ["PG_USER"], "-d", os.environ["PG_DATABASE"], "-X", "-q", "-t", "-A",
                            "-v", "ON_ERROR_STOP=1", "-v", f"csv={work}/users.csv", "-f", SQL],
                           capture_output=True, text=True, env=env)
        if r.returncode:
            fail("psql: " + r.stderr.strip())
        updates = [l for l in r.stdout.splitlines() if l.startswith("UPDATE")]
    if not updates:
        fail(f"No Grafana user matched public.user in {os.environ['PG_DATABASE']}, so no auth_id can be written. "
             "Check that this database holds the mSupply users (the export ran at least once).")
    with c:
        for u in updates:
            c.execute(u)
    print(f"applied {len(updates)} updates")

step("2-4/4 Data sources: type, database, default")
with c:
    n = c.execute("update data_source set type = 'grafana-postgresql-datasource' where type = 'postgres'").rowcount
    # Grafana 8 kept the database name in the top-level column; the Grafana 13 PostgreSQL plugin reads only
    # jsonData.database and refuses every query without it ("no default database configured").
    d = c.execute("update data_source set json_data = json_set(coalesce(nullif(json_data, ''), '{}'), "
                  "'$.database', database) where type = 'grafana-postgresql-datasource' "
                  "and coalesce(database, '') <> '' "
                  "and coalesce(json_extract(nullif(json_data, ''), '$.database'), '') = ''").rowcount
    # is_default has no unique constraint: keep the lowest-id default per org, or promote one where none is set.
    c.execute("update data_source set is_default = 0 where is_default = 1 and id not in "
              "(select min(id) from data_source where is_default = 1 group by org_id)")
    c.execute("update data_source set is_default = 1 where id in (select min(id) from data_source where org_id "
              "not in (select org_id from data_source where is_default = 1) group by org_id)")
print(f"data sources moved off the 'postgres' type: {n}")
print(f"data sources given jsonData.database: {d}")
for org, name, typ in c.execute("select org_id, name, type from data_source where is_default = 1 order by org_id"):
    print(f"default data source (org {org}): {name} [{typ}]")

step("Report: data sources that point at this machine")
local = [(name, url) for name, url in c.execute("select name, url from data_source")
         if (url or "").split("://")[-1].split(":")[0].split("/")[0] in ("localhost", "127.0.0.1", "::1")]
# "PostgreSQL" is rewritten from .env on every start by the provisioning file, so it is not listed.
local = [x for x in local if x[0] != "PostgreSQL"]
if local:
    for name, url in local:
        print(f"WARNING: '{name}' points at {url}. Inside the container that is the container itself.")
    print("         Change each one in Grafana (Connections > Data sources): host host.docker.internal:<port> for")
    print("         a database on this server, or the real address of the other server. INSTALL-LINUX.md,")
    print("         section 'Other data sources'.")
else:
    print("none")

step("Report: panel types with no plugin in this image")
builtin = {os.path.basename(p) for p in glob.glob("/usr/share/grafana/public/app/plugins/panel/*")}
ours = {json.load(open(p)).get("id") for p in glob.glob("/usr/share/msupply/plugins/*/plugin.json")
        + glob.glob(os.path.join(os.environ.get("GF_PATHS_PLUGINS", DATA + "/plugins"), "*", "plugin.json"))}
installed = builtin | ours | {"row"}
missing = {}
for title, data in c.execute("select title, data from dashboard where is_folder = 0"):
    stack = list(json.loads(data).get("panels", []))
    while stack:
        p = stack.pop()
        stack.extend(p.get("panels", []) or [])
        t = p.get("type")
        if t and t not in installed:
            missing.setdefault(t, set()).add(title)
converted = {t: v for t, v in missing.items() if t in AUTO_MIGRATED}
missing = {t: v for t, v in missing.items() if t not in AUTO_MIGRATED}
for t, titles in sorted(converted.items()):
    print(f"NOTE: '{t}' panels in {len(titles)} dashboard(s) are converted to {AUTO_MIGRATED[t]} when the "
          "dashboard opens. Open one and save it to keep the conversion.")
for t, titles in sorted(missing.items()):
    print(f"WARNING: panel type '{t}' is used in {len(titles)} dashboard(s) and has no plugin; "
          f"those panels will show 'Panel plugin not found' until it is installed from the Grafana screen.")
if not converted and not missing:
    print("none")

step("Search index")
# Grafana 13 keeps a search index in data/unified-search. After grafana.db is replaced it still lists the
# old dashboards; Grafana rebuilds it on start when the folder is gone.
shutil.rmtree(os.path.join(DATA, "unified-search"), ignore_errors=True)
print("cleared; Grafana rebuilds it on start")

step("Result")
q = "select count(*) from user_auth where auth_module = 'oauth_generic_oauth'"
total = c.execute(q).fetchone()[0]
miss = c.execute(q + " and (auth_id is null or auth_id = '')").fetchone()[0]
c.close()
print(f"OAuth identities:     {total}")
print(f"Still missing authid: {miss}")
if miss:
    print(f"\nNOTE: {miss} OAuth user(s) were not found in public.user of {os.environ['PG_DATABASE']} "
          "(matched by e-mail, or by name when the e-mail is empty).")
    print("      They cannot log in through mSupply until they exist there. If they should, run the mSupply")
    print("      export once and run this command again.")
print("\nDone. Start Grafana: docker compose up -d")
