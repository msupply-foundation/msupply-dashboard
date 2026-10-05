# mSupply Dashboard on Linux

The dashboard runs in Docker. Its database is PostgreSQL on the same server.

Pick the job and follow its steps in order:

- **A. [Install](#a-install)**: a server where the dashboard does not run yet.
- **B. [Move a client from Windows](#b-move-a-client-from-windows)**: keep the client's users and dashboards.
- **C. [Update to a new version](#c-update-to-a-new-version)**: a server that already runs the dashboard on Linux.

**How to follow the steps**

- Run one command at a time. Copy only what is inside a grey box.
- After each command, compare with **Expected**. Many commands show nothing when they work.
- If you see something else, look it up in [Problems](#problems).
- Passwords go only in the terminal, never in notes or chats.

## Before you start

You need Ubuntu with Docker, the Docker Compose plugin and PostgreSQL 13 or later. Check:

```bash
docker compose version
```

**Expected:** `Docker Compose version ...`

```bash
docker ps
```

**Expected:** a line starting with `CONTAINER ID`, and no `permission denied`.

```bash
sudo -u postgres psql -p 5432 -Atc "select version()"
```

**Expected:** a line starting with `PostgreSQL` and a version of 13 or more. If it fails with
`could not connect`, PostgreSQL uses another port: ask the server's administrator, and use that port
everywhere this guide says `5432`.

Fill in this table. The steps use these values where you see `<...>`.

| Value | What it is |
|---|---|
| `<server-address>` | Address users type to open the dashboard (IP or name), without `http://` |
| `<pg-password>` | Password of the database user `dashboard` |
| `<admin-password>` | Team's standard password for the Grafana `admin` user |
| `<msupply-ip>` | IP address of the mSupply server |
| `<version>` | Dashboard version to install, for example `13.2.2`. The versions are on the [tags page](https://hub.docker.com/r/msupplyfoundation/msupply-dashboard-linux/tags) |

---

## A. Install

### Step A1 of 10: does this server already have the dashboard database?

*If mSupply already exports to this server, the database exists and must be kept. The answer decides
which steps to do.*

```bash
sudo -u postgres psql -p 5432 -Atc "select count(*) from pg_database where datname = 'dashboard'"
```

**Expected:** `0` or `1`.

- `0`: the database does not exist. Do every step.
- `1`: the database already exists (mSupply already exports into it). **Skip step A2.** Do not change the
  password of the `dashboard` user: the mSupply export uses it. Use that same password as `<pg-password>`.

### Step A2 of 10: create the database user and the database

Only if step A1 printed `0`. *mSupply writes into this database and the dashboard reads from it, both as
the user `dashboard`.*

```bash
sudo -u postgres psql -p 5432 -c "create role dashboard login"
```

**Expected:** `CREATE ROLE`

```bash
sudo -u postgres psql -p 5432 -c "\password dashboard"
```

**Expected:** it asks for the new password twice. Type `<pg-password>`.

```bash
sudo -u postgres psql -p 5432 -c "create database dashboard owner dashboard"
```

**Expected:** `CREATE DATABASE`

### Step A3 of 10: let PostgreSQL accept connections from Docker

*The dashboard runs inside Docker. By default, PostgreSQL accepts only its own machine.*

Find the PostgreSQL folder:

```bash
sudo -u postgres psql -p 5432 -Atc 'show config_file'
```

**Expected:** a path like `/etc/postgresql/17/main/postgresql.conf`. The number (`17`) is the version. Use
it in place of `17` below.

```bash
echo "listen_addresses = '*'" | sudo tee /etc/postgresql/17/main/conf.d/10-msupply-dashboard.conf
```

**Expected:** `listen_addresses = '*'`. The next two commands apply and check it.

```bash
sudo systemctl restart postgresql
```

```bash
sudo -u postgres psql -p 5432 -Atc 'show listen_addresses'
```

**Expected:** `*`

### Step A4 of 10: allow the dashboard and the mSupply server into the database

*PostgreSQL keeps a list of who may log in to each database.*

See what is already on the list:

```bash
sudo -u postgres psql -p 5432 -Atc "select address from pg_hba_file_rules where database = '{dashboard}'"
```

If the result already shows `172.30.0.0` and `<msupply-ip>`, go to step A5. Otherwise open the list (same
folder as in step A3):

```bash
sudo nano /etc/postgresql/17/main/pg_hba.conf
```

Add the missing lines at the end:

```
host    dashboard    dashboard    172.30.0.0/24       scram-sha-256
host    dashboard    dashboard    <msupply-ip>/32     scram-sha-256
```

Save with `Ctrl+O` then `Enter`, close with `Ctrl+X`. Apply:

```bash
sudo systemctl reload postgresql
```

Check again with the first command of this step. **Expected:** `172.30.0.0` and `<msupply-ip>`.

If mSupply runs on this same server, leave out the `<msupply-ip>` line here and in step A5.

### Step A5 of 10: firewall

*If the firewall is on, it also blocks the dashboard and the mSupply server from reaching PostgreSQL.*

```bash
sudo ufw status
```

**Expected:** `Status: inactive` or `Status: active`. If inactive, go to step A6. If active, run both:

```bash
sudo ufw allow from 172.30.0.0/24 to any port 5432 proto tcp
```

```bash
sudo ufw allow from <msupply-ip> to any port 5432 proto tcp
```

**Expected:** `Rule added` each time.

### Step A6 of 10: create the install folder

*This folder is the installation: the settings, the Grafana data and the file that starts the dashboard
all live here.*

```bash
sudo mkdir -p /opt/msupply-dashboard
```

```bash
sudo chown $USER: /opt/msupply-dashboard
```

```bash
cd /opt/msupply-dashboard
```

```bash
mkdir -p data import certs
```

These four show nothing. Now download the two files the dashboard needs:

```bash
curl -fsSLO https://raw.githubusercontent.com/msupply-foundation/msupply-dashboard/develop/linux/compose.yaml
```

```bash
curl -fsSLO https://raw.githubusercontent.com/msupply-foundation/msupply-dashboard/develop/linux/.env.example
```

**Expected:** both show nothing. If one fails with `Could not resolve host`, the server has no internet: copy
the two files from the `linux/` folder of the repository by USB drive or a shared folder instead.

```bash
ls -A
```

**Expected:** `certs  compose.yaml  data  .env.example  import`

Every step from here runs in `/opt/msupply-dashboard`.

### Step A7 of 10: fill in the settings

*`.env` holds everything that changes from one server to another.*

```bash
cp .env.example .env
```

```bash
chmod 600 .env
```

Fill in the version, the address and the port. Replace only `<version>` and `<server-address>`, keep the
rest exactly:

```bash
sed -i 's|^DASHBOARD_VERSION=.*|DASHBOARD_VERSION=<version>|' .env
```

```bash
sed -i 's|^GF_SERVER_ROOT_URL=.*|GF_SERVER_ROOT_URL=http://<server-address>:3000/|' .env
```

```bash
sed -i 's|^PG_PORT=.*|PG_PORT=5432|' .env
```

And the Linux user that owns this folder:

```bash
sed -i "s|^GRAFANA_UID=.*|GRAFANA_UID=$(id -u)|" .env
```

Now the two passwords:

```bash
nano .env
```

Find these two lines and replace the text after `=`, including `<` and `>`:

| Line | Put |
|---|---|
| `PG_PASSWORD=<database password>` | `<pg-password>`: the password **of the database** |
| `GF_SECURITY_ADMIN_PASSWORD=<admin password>` | `<admin-password>`: the password **of the Grafana screen** |

If a password has a `$`, write it twice (`$$`): `.env` reads a single `$` as the start of a variable. Do
not put a space in a password.

Save with `Ctrl+O` then `Enter`, close with `Ctrl+X`. Check, without showing the passwords:

```bash
grep -E "^(DASHBOARD_VERSION|GF_SERVER_ROOT_URL|PG_PORT|GRAFANA_UID|PG_PASSWORD|GF_SECURITY_ADMIN_PASSWORD)=" .env | sed -E 's/(PASSWORD=).+/\1(filled)/'
```

**Expected,** with your values:

```
DASHBOARD_VERSION=<version>
GF_SERVER_ROOT_URL=http://<server-address>:3000/
GRAFANA_UID=<a number, often 1000>
PG_PORT=5432
PG_PASSWORD=(filled)
GF_SECURITY_ADMIN_PASSWORD=(filled)
```

### Step A8 of 10: download the dashboard

*Downloads Grafana with the mSupply plugins and dashboards. Nothing starts yet.*

```bash
docker compose pull
```

**Expected:** ends with `Pulled`.

### Step A9 of 10: create or update the dashboard tables

*Creates the tables that mSupply exports into, or adds what this version needs to an existing database.*

If step A1 printed `0` (new database):

```bash
docker compose run --rm dashboard msupply init-db
```

**Expected,** at the end: `Done. Point the mSupply export at this database now.` Errors like
`must be able to SET ROLE "postgres"` (or `must be member of role "postgres"` on older PostgreSQL) are
normal. If it prints `other errors:`, see [Problems](#problems).

If step A1 printed `1` (existing database). This adds what this version needs and keeps the data:

```bash
docker compose run --rm dashboard msupply update-db
```

**Expected,** at the end: `The database is up to date.` The errors it counts (`already exists` and
ownership changes to "postgres") are normal.

### Step A10 of 10: start and check

*Starts the dashboard, then checks the login, the database, the plugins and the dashboards.*

```bash
docker compose up -d
```

**Expected:** ends with `Started`. Wait 30 seconds, then:

```bash
docker compose exec dashboard msupply check
```

**Expected:** every line starts with `PASS`, and the last line is `All checks passed.`

Open `http://<server-address>:3000/` in the browser and log in as `admin` with `<admin-password>`.

The install is done. If users log in with their mSupply account, continue with
[Login through mSupply](#login-through-msupply).

---

## B. Move a client from Windows

Do all of [A. Install](#a-install) first, on the database that mSupply exports into. Then:

### Step B1 of 7: copy two files from the Windows server

*`grafana.db` holds the client's users, dashboards and data sources. `custom.ini` holds its settings.*

On the Windows server, stop the dashboard (Command Prompt as administrator):

```
net stop "mSupply Dashboard"
```

Copy these two files to a USB drive or a shared folder:

- `C:\Program Files\mSupply Dashboard\data\grafana.db`
- `C:\Program Files\mSupply Dashboard\conf\custom.ini`

If the Windows dashboard must keep running: `net start "mSupply Dashboard"`.

### Step B2 of 7: copy the settings from custom.ini to .env

*On Linux, `.env` does the job of `custom.ini`.*

Open `custom.ini` in a text editor, and `.env` on the Linux server:

```bash
nano .env
```

For each line on the left that has a value in `custom.ini`, copy the value to the line on the right. Lines
that start with `;` are notes in `custom.ini`: skip them.

| In custom.ini | In .env |
|---|---|
| `[panels]` `disable_sanitize_html` | `GF_PANELS_DISABLE_SANITIZE_HTML` |
| `[security]` `secret_key` | `GF_SECURITY_SECRET_KEY` (remove the `#` in front) |
| `[auth.generic_oauth]` `enabled` | `GF_AUTH_GENERIC_OAUTH_ENABLED` |
| `[auth.generic_oauth]` `client_id` | `GF_AUTH_GENERIC_OAUTH_CLIENT_ID` |
| `[auth.generic_oauth]` `client_secret` | `GF_AUTH_GENERIC_OAUTH_CLIENT_SECRET` |
| `[auth.generic_oauth]` `auth_url`, only the part before `/api/v4/` | `MSUPPLY_SERVER_URL` |

Save and close.

### Step B3 of 7: put the client's grafana.db in place

*Replaces the empty `grafana.db` of the new install with the client's.*

Copy `grafana.db` to the server, then stop the dashboard:

```bash
docker compose stop dashboard
```

Keep the new install's file as a backup:

```bash
cp data/grafana.db data/grafana.db.new-install
```

Put the client's file in its place, readable only by the dashboard:

```bash
cp <path to the client's grafana.db> data/grafana.db
```

```bash
chmod 640 data/grafana.db
```

Remove the search index of the old file. Grafana builds a new one when it starts:

```bash
rm -rf data/unified-search
```

### Step B4 of 7: let Grafana update the file

*On the first start, Grafana converts the client's file from its old version to 13.*

```bash
docker compose up -d
```

Wait until the login page opens in the browser. A large file can take several minutes. To follow it:

```bash
docker compose logs -f dashboard
```

It is ready when a line shows `HTTP Server Listen`. Close the log with `Ctrl+C` (the dashboard keeps
running). If it stops with `level=error` lines instead, see [Problems](#problems).

### Step B5 of 7: fix the logins and data sources

*Links each user to their mSupply account, so the mSupply login keeps working, and fixes the data
sources for Grafana 13. It backs up `grafana.db` first, in `data/backups/`.*

```bash
docker compose stop dashboard
```

```bash
docker compose run --rm dashboard msupply update-grafanadb
```

**Expected,** near the end: `Still missing authid: 0`. A number above 0, or lines starting with `WARNING`,
are explained in [Problems](#problems).

```bash
docker compose up -d
```

### Step B6 of 7: fix the data sources that point at localhost

Only if step B5 printed `WARNING: '<name>' points at localhost`. *Inside Docker, `localhost` is the
dashboard itself, not this server, so these data sources cannot connect.* For each `<name>`:

1. In Grafana, open **Connections > Data sources > `<name>`**.
2. Set **Host URL** to `host.docker.internal:5432`.
3. Set **Username** to `dashboard` and **Password** to `<pg-password>`. Leave **Database name** as it is.
4. Click **Save & test**. **Expected:** `Database Connection OK`.

If the test says `no pg_hba.conf entry`, add a line for that database as in step A4, with its name in place
of the first `dashboard`. The user `dashboard` may also need read access to that database: ask its
administrator.

### Step B7 of 7: check

```bash
docker compose exec dashboard msupply check
```

**Expected:** no line starts with `FAIL`. `WARN` lines about panel plugins are explained in
[Problems](#problems). The move is done.

---

## C. Update to a new version

### Step C1 of 4: back up

*A copy of `data/` and of the database lets you go back to the current version if the new one has a problem.*

```bash
cd /opt/msupply-dashboard
```

Check the current version first, and note the result to compare after the update:

```bash
docker compose exec dashboard msupply check
```

```bash
docker compose stop dashboard
```

```bash
cp -a data data.before-update
```

```bash
sudo -u postgres pg_dump -p 5432 -Fc dashboard > dashboard-before-update.dump
```

**Expected:** the last three show nothing.

### Step C2 of 4: set the new version

Replace `<new-version>`:

```bash
sed -i 's|^DASHBOARD_VERSION=.*|DASHBOARD_VERSION=<new-version>|' .env
```

### Step C3 of 4: start the new version

Download the new version, then add what it needs to the database:

```bash
docker compose pull
```

```bash
docker compose run --rm dashboard msupply update-db
```

**Expected,** at the end: `The database is up to date.`

```bash
docker compose up -d
```

### Step C4 of 4: check

Wait 30 seconds, then:

```bash
docker compose exec dashboard msupply check
```

**Expected:** the same result as in step C1. The update is done. When you are satisfied, remove the
backups:

```bash
rm -rf data.before-update dashboard-before-update.dump
```

**To go back to the previous version** (replace `<previous-version>`):

```bash
docker compose stop dashboard
```

```bash
rm -rf data && mv data.before-update data
```

```bash
sed -i 's|^DASHBOARD_VERSION=.*|DASHBOARD_VERSION=<previous-version>|' .env
```

```bash
docker compose up -d
```

The database keeps the update. If the previous version shows database errors, ask a database administrator
to restore `dashboard-before-update.dump` from step C1.

---

## Extras

### Login through mSupply

Open `.env` (`nano .env`) and set:

```
GF_AUTH_GENERIC_OAUTH_ENABLED=true
MSUPPLY_SERVER_URL=https://<msupply-server>:2048
GF_AUTH_GENERIC_OAUTH_CLIENT_ID=<client id>
GF_AUTH_GENERIC_OAUTH_CLIENT_SECRET=<client secret>
```

Then `docker compose up -d`. The login page shows an **OAuth** button.

In mSupply, open the **Dashboard** window and set the dashboard redirect URL to `<server-address>:3000`
(no `http://`). Without it, after logging in, users land on the mSupply server's address instead of the
dashboard.

### HTTPS

1. Copy the certificate and key to `certs/cert.pem` and `certs/key.pem`.
2. `sudo chown $USER: certs/*.pem`
3. In `.env`, remove the `#` from the `GF_SERVER_PROTOCOL`, `GF_SERVER_CERT_FILE` and `GF_SERVER_CERT_KEY`
   lines, and change `GF_SERVER_ROOT_URL` to `https://...`.
4. `docker compose up -d`

With a reverse proxy (nginx, Caddy) in front instead, point the proxy at `<server-address>:3000` and set
`GF_SERVER_ROOT_URL` to the address users type in the proxy.

### Install other plugins

The mSupply table and map plugins come with the dashboard. To add another one, the server needs internet:

1. In Grafana, open **Administration > Plugins and data > Plugins**.
2. Search for the plugin, open it and click **Install**.

Installed plugins are kept in `data/plugins` and stay there after an update. A plugin made for an older
Grafana can stop working after an update; check it after step C4.

### Import client dashboards

Put the JSON files in `import/`, then:

```bash
docker compose exec dashboard msupply import-dashboards --folder-uid <folder uid> --dry-run
```

It lists what would change. Run it again without `--dry-run` to import, and add `--overwrite` to replace
dashboards that already exist.

### Daily commands

| Task | Command (in `/opt/msupply-dashboard`) |
|---|---|
| Stop | `docker compose stop` |
| Start | `docker compose up -d` |
| Status | `docker compose ps` |
| Log | `docker compose logs --tail 100 dashboard` |
| Check | `docker compose exec dashboard msupply check` |
| Version | `docker compose run --rm dashboard msupply version` |

Back up `data/` (with the dashboard stopped), `.env`, and the database (`pg_dump -Fc`).

### Server without internet

On a computer with internet:

```bash
docker pull msupplyfoundation/msupply-dashboard-linux:<version>
```

```bash
docker save msupplyfoundation/msupply-dashboard-linux:<version> | gzip > msupply-dashboard-linux-<version>.tar.gz
```

Copy the file to the server, then:

```bash
gunzip -c msupply-dashboard-linux-<version>.tar.gz | docker load
```

Skip `docker compose pull` in the steps.

### Two installs on one server

Give each install its own folder, port (`GRAFANA_PORT`), network (`DOCKER_SUBNET`) and a first line in its
`.env` with `COMPOSE_PROJECT_NAME=<unique name>`.

### Data sources that read another database through postgres_fdw

*Advanced. Only for a dashboard database that reads tables from another database (for example the
Open mSupply database) through a `foreign_schema` schema. Ask a database administrator if unsure.*

If the dashboard database has a `foreign_schema` schema, list its links:

```bash
sudo -u postgres psql -p 5432 -d dashboard -c '\des+'
```

For each link (`<fdw-server>` is the name in the first column), open `psql`:

```bash
sudo -u postgres psql -p 5432 -d dashboard
```

and run, one line at a time:

```sql
alter server <fdw-server> options (set host 'localhost', set port '5432');
grant usage on foreign server <fdw-server> to dashboard;
create user mapping for dashboard server <fdw-server> options (user '<remote-user>', password '<remote-password>');
\q
```

### Restore the dashboard database from a Windows backup

*Advanced.* Only when mSupply cannot export into the new database. A `pg_dumpall` file has one section per
database.

1. Find the dashboard section. It starts on the line after `\connect dashboard` and ends on the line before
   the next `-- Database "`:
   ```bash
   grep -n -E '^\\connect |^-- Database "' <backup>.sql
   ```
2. Cut it out (`<first>` and `<last>` are those two line numbers):
   ```bash
   sed -n '<first>,<last>p' <backup>.sql > dashboard-section.sql
   ```
3. Restore it into a new, empty database:
   ```bash
   sudo -u postgres psql -p 5432 -c "drop database if exists dashboard"
   ```
   ```bash
   sudo -u postgres psql -p 5432 -c "create database dashboard template template0 encoding 'UTF8' locale 'en_US.UTF-8'"
   ```
   ```bash
   sudo -u postgres psql -p 5432 -d dashboard -f dashboard-section.sql > restore.log 2> restore.err
   ```
   ```bash
   grep ERROR restore.err | grep -v -c 'role .* does not exist'
   ```
   **Expected:** `0`.
4. Give the `dashboard` user ownership of everything:
   ```bash
   sudo -u postgres psql -p 5432 -d dashboard -c "alter database dashboard owner to dashboard"
   ```
   ```bash
   sudo -u postgres psql -p 5432 -d dashboard -Atc "
     select format('alter %s %I.%I owner to dashboard;',
       case c.relkind when 'v' then 'view' when 'm' then 'materialized view' when 'f' then 'foreign table'
                      when 'S' then 'sequence' else 'table' end, n.nspname, c.relname)
     from pg_class c join pg_namespace n on n.oid = c.relnamespace
     where c.relkind in ('r','p','v','m','f','S') and n.nspname not in ('pg_catalog','information_schema')
       and n.nspname not like 'pg_toast%'
     union all
     select format('alter schema %I owner to dashboard;', nspname)
     from pg_namespace
     where nspowner = 'postgres'::regrole and nspname not like 'pg\_%' and nspname <> 'information_schema'
     union all
     select format('alter routine %s owner to dashboard;', p.oid::regprocedure)
     from pg_proc p join pg_namespace n on n.oid = p.pronamespace
     where n.nspname not in ('pg_catalog','information_schema')
       and not exists (select 1 from pg_depend d where d.objid = p.oid and d.deptype = 'e')" \
     | sudo -u postgres psql -p 5432 -d dashboard -q
   ```
5. `docker compose exec dashboard msupply check`. **Expected:** `PASS  Dashboard database`.

Do not run the whole `pg_dumpall` file: it replaces the `postgres` user and fails on the Windows language
settings.

---

## Problems

| You see | Do this |
|---|---|
| `role "dashboard" already exists` | The server already has the dashboard database: see step A1. Do not change its password. |
| `docker compose logs dashboard` shows `fill in these settings in .env: ...` | Fill in the listed lines in `.env`, then `docker compose up -d`. |
| `docker compose logs dashboard` shows `GF_SERVER_ROOT_URL in .env is not a valid address` | Run the `GF_SERVER_ROOT_URL` command of step A7 again, replacing only `<server-address>`. Then `docker compose up -d`. |
| After logging in, the login page comes back | Same as the line above. If the address is right, the browser has a cookie from another dashboard on the same address: use a private window, or clear the cookies of that address. |
| `... is not writable by uid ...` | In `.env`, set `GRAFANA_UID` to the number printed by `id -u`. |
| `permission denied ... docker.sock` | The Linux user is not in the `docker` group, or has not logged in again since being added. |
| `no pg_hba.conf entry` | A line is missing in the list of step A4. Add it, then `sudo systemctl reload postgresql`. |
| `Connection refused` from PostgreSQL | Step A3 was not done, or `PG_PORT` in `.env` is wrong. |
| `password authentication failed` | `PG_PASSWORD` in `.env` is wrong. |
| A check waits a long time, then fails with `no answer` | The firewall blocks the database: step A5. |
| `The database already has N tables` | The database is not empty. In step A9, run `update-db` instead of `init-db`. |
| `FAIL Dashboard database ... older than this version` | `docker compose run --rm dashboard msupply update-db`, then check again. |
| `The database is empty. Use init-db` | Step A9 with `init-db`. |
| `FAIL Admin login` | `GF_SECURITY_ADMIN_PASSWORD` in `.env` is wrong. Fix it and run `docker compose up -d`. |
| `FAIL Data source connects: <name>` | Step B6 for that data source. |
| `FAIL Dashboard database ... post_export() missing` | The database was not created by step A9. mSupply exports will not build the dashboard data. |
| `Still missing authid: N` (step B5) | N users exist in the dashboard but not in mSupply's user list. After mSupply exports again, run step B5 again. Users who no longer exist in mSupply stay in this count. |
| `No Grafana user matched public.user` (step B5) | mSupply has not exported its users into this database yet. After it does, run step B5 again. |
| `other errors:` after `init-db` or `update-db` | The listed lines are real problems in the database script. Nothing else in this guide fixes them: send them to the dashboard team. |
| `WARNING: panel type '<type>' ... has no plugin` | Those panels show "Panel plugin not found". Install the plugin from the Grafana screen: see [Install other plugins](#install-other-plugins). |
| `NOTE: 'graph' panels ... are converted` | Nothing to do. |
| `Grafana is running. Stop it first` | `docker compose stop dashboard`, then the command again. |
| `network ... has active endpoints` | Another install on the same server: see [Two installs on one server](#two-installs-on-one-server). |
| A panel shows `relation "<name>" does not exist` | That dashboard uses a table this database does not have. It is about the dashboard, not the install. |
| After the mSupply login, the browser lands on the wrong address | See [Login through mSupply](#login-through-msupply), the redirect URL. |
| The proxy shows `502` | The proxy points at the wrong address or port. It must point at `<server-address>:3000`. |
