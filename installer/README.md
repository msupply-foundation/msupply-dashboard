# Building and installing the mSupply Dashboard

Target: **Grafana v13.2.2**.

---

## 1. Build the Grafana release

`release/` holds a Grafana build with the mSupply branding patch applied. It
must be rebuilt for each Grafana version — the version currently committed is
**12.3.x**, so it needs redoing for 13.2.2.

Toolchain (read from `go.mod` and `package.json` at tag v13.2.2 — these move
every release, check them again on the next bump):

| Tool | Version |
|---|---|
| Go | 1.26.6+ |
| Node.js | >= 22, < 25 |
| Yarn | 4.17.1, via corepack — do **not** `npm i -g yarn` |

```bash
git clone --depth 1 --branch v13.2.2 https://github.com/grafana/grafana.git
cd grafana

# adds public/img/msupply_icon.svg and msupply_light_icon.svg, which the
# patch below imports
cp -r ../msupply-dashboard/modifications/public/. public/
git apply ../msupply-dashboard/modifications/changes.patch

corepack enable
yarn install --immutable
yarn build                                    # frontend -> public/build
```

No `make build-go` is needed: the backend is the official download (see below).

Confirm the branding landed before packaging — if it silently did not, the
release ships Grafana's own logo:

```bash
ls public/build/static/img/ | grep msupply
# expect msupply_icon.<hash>.svg and msupply_light_icon.<hash>.svg
```

Then copy into this repo's `release/`, keeping the mSupply-owned files:

| Copy from the build | Into |
|---|---|
| `conf/defaults.ini`, `sample.ini`, `ldap.toml`, `ldap_multiple.toml` | `release/conf/` |
| `public/` | `release/` |

Only the **frontend** is built here. The backend `grafana.exe` is **not**
committed and must not be copied in by hand — `build-installers.bat` downloads
the official Windows amd64 build from the URL in `installer/grafana.url` and
drops it into `release/bin/` at build time. Keeping one source of truth for the
backend is what stops `grafana.url` and `release/` drifting to different
versions, which is how this repo ended up shipping a 12.x frontend against a
13.x pin.

So `installer/grafana.url` and the tag cloned above **must name the same
version**. Check that first on every bump.

**Keep** `release/bin/nssm.exe`, `release/conf/custom.ini`,
`release/conf/provisioning/` and `release/data/grafana.db` — those are ours,
not Grafana's. Do not copy Grafana's own `conf/custom.ini` over ours.

Grafana 13 ships **only `bin/grafana.exe`**; the `grafana-server.exe` and
`grafana-cli.exe` wrappers are gone, and so is `tools/`. `release/bin/` should
hold nothing but `nssm.exe` in git.

## 2. Build the installers

```bat
set WORKSPACE=%CD%
installer\build-installers.bat
```

Needs Setup Factory 9 and a `version.txt` in the repo root holding the version
tag (Jenkins writes it from the git tag). Produces
`installer\dashboard-setup-<version>.exe` and
`installer\dashboard-upgrade-<version>.exe`.

---

## 3. Fresh install at a client

This is the supported path for clients coming from 8.5, and the one to use when
carrying over a previous database. It gives a clean v13 file tree; the upgrade
installer only adds and overwrites files, so across five major versions it
would leave a lot of orphaned ones behind.

### Before you start

- **Save the client's existing `conf\custom.ini`.** The fresh installer writes
  a new one and only templates the domain, ports and OAuth URLs into it.
  Anything else that was hand-edited — certificate paths, `client_secret`,
  non-default ports — has to be re-applied afterwards.
- **Take a copy of `data\grafana.db`.**
- Check for legacy alerts. Grafana 10.4 was the last version that could migrate
  them; v13 cannot, and they are lost:
  ```sh
  sqlite3 grafana.db "select count(*) from alert; select count(*) from alert_notification;"
  ```
  Both zero is fine. Non-zero means passing the database through a Grafana
  <= 10.4 first, or accepting the loss and rebuilding in unified alerting.

### Steps

1. `net stop "mSupply Dashboard"`, then copy `data\grafana.db` somewhere safe.
2. Run `dashboard-setup-<version>.exe`. It lays down the files, templates
   `custom.ini` and the provisioning files, runs `db-init.bat` against Postgres,
   registers the service as `grafana.exe server`, and starts it.
3. Re-apply anything from the old `custom.ini` that the installer does not set.
4. Carry the old database over:
   ```bat
   net stop "mSupply Dashboard"
   copy /Y D:\backup\grafana.db "C:\Program Files\mSupply Dashboard\data\grafana.db"
   net start "mSupply Dashboard"
   ```
   Do this **after** installing, not before: the installer copies the whole
   `release\` tree with overwrite enabled, which includes the seed
   `data\grafana.db`.
5. Grafana runs its schema migrations on this first start. Watch them:
   ```bat
   type "C:\Program Files\mSupply Dashboard\data\log\grafana.log"
   type "C:\Program Files\mSupply Dashboard\data\log\service-stderr.log"
   ```
6. Restore OAuth logins for users created before the upgrade. Grafana 10
   changed OAuth user lookup from email to the IdP's unique ID, so accounts
   created under an older version have no `user_auth.auth_id` and fail to log
   in. There are two ways to fix that — **prefer the first.**

   **a. Let Grafana link the accounts itself.** In `conf\custom.ini`, uncomment:
   ```ini
   [auth]
   oauth_allow_insecure_email_lookup = true
   ```
   and restart the service. Grafana then falls back to matching on email, links
   the account and writes the `auth_id` on each user's first login. Nothing to
   install and nothing to run. Turn it back off once everyone has logged in at
   least once.

   It matches on **email only**, so check for OAuth users who have none before
   relying on it:
   ```sql
   select count(*) from user u join user_auth ua on u.id = ua.user_id
   where ua.auth_module = 'oauth_generic_oauth'
     and (u.email is null or u.email = '' or u.email not like '%@%');
   ```
   Zero means option (a) covers everyone.

   **b. `conf\provisioning\grafanadb-update.bat`** — needed only if that count
   is non-zero, because it also falls back to matching on mSupply user *name*.
   It fixes every user in one pass, before anyone logs in. Double-click it
   rather than calling it from a terminal: it reads `grafanadb-update.sql` by
   relative path, so it only works with the working directory set to its own
   folder. It writes `migration_<timestamp>.log` next to itself — check that,
   since the window closes without showing anything.

   It needs `sqlite3.exe` on `PATH` (not shipped, and not present on Windows by
   default), `psql` at `C:\Program Files\PostgreSQL\<version>\bin\psql`
   (defaults to major **17** — pass a 6th argument otherwise), and the default
   install path, which is hardcoded at the top of the script.

### Checks, in this order

- [ ] the service is running, and `https://<domain>:3000` loads
- [ ] the mSupply logo shows on the login page **and** in the nav bar
- [ ] an OAuth login works, for a user who existed before the upgrade
- [ ] a pre-existing Admin user still has Admin
- [ ] dashboards render, and the Postgres datasource resolves

### What will look wrong, and is expected

- Panels that used the removed mSupply plugins (`msupplyfoundation-table`,
  `msupply-horizontal-bar`, the world and region maps) render as **"panel
  plugin not found"**. The plugin IDs are still in the saved dashboard JSON.
  They have to be swapped to core visualisations — Table, Bar chart, Geomap —
  by editing each panel.
- Core AngularJS panels (`graph`, `singlestat`, the old `table`) migrate
  themselves to Time series, Stat and Table when a dashboard loads, but the
  change only persists once someone saves that dashboard.

---

## 4. Upgrading an existing v13 install

Use `dashboard-upgrade-<version>.exe`. It stops the service, copies
`data\grafana.db` to `grafana.db.before-<version>.bak`, replaces `bin`,
`public`, `scripts`, `tools` and Grafana's own `conf` files, re-points the
service at `grafana.exe`, and starts it again. It leaves `conf\custom.ini`,
`conf\provisioning\` and `data\` alone.

## Notes

- HTTPS: `custom.ini` sets `protocol = https`, and leaves `cert_file` /
  `cert_key` commented out. They have to be filled in per server — pointed at
  the mSupply Server's certificate, or at a `cert.pem` / `key.pem` placed in
  the dashboard folder. Grafana exits at startup while they are empty, so this
  is part of installing, not an optional step. `data\log\service-stderr.log`
  is where that failure shows up.
- The Postgres datasource lives in `data\grafana.db`, not in
  `conf\provisioning\datasources\datasource.yaml` (that file is a commented
  template). A restored database brings the client's own datasource with it.
- The seed `release/data/grafana.db` is committed **un-migrated**, as Grafana
  last wrote it, and Grafana migrates it on first start. That has been verified
  end to end against 13.2.2: `migration_log` goes 689 → 731 rows, all 12
  dashboards and 6 folders migrate into unified storage, the single user, org
  and datasource are preserved, the datasource resolves as
  `grafana-postgresql-datasource`, and all 11 panel types in use
  (`text stat table gauge timeseries barchart bargauge dashlist piechart geomap
  state-timeline`) resolve to core plugins — no "panel plugin not found".

  Do **not** commit a pre-migrated copy in its place. Migrating inflates the
  file from 3.8 MB to 6.8 MB and bakes in runtime artifacts (`resource_history`
  rows, `advisor.grafana.app` check types) that Grafana regenerates anyway, and
  the seed never needs the rollback that a client database does. To re-run this
  check after a Grafana bump, point a throwaway instance at a **copy**:

  ```bash
  curl -fLO https://dl.grafana.com/oss/release/grafana-<version>.darwin-arm64.tar.gz
  tar -xzf grafana-<version>.darwin-arm64.tar.gz && cd grafana-<version>
  mkdir -p /tmp/gtest/data && cp .../release/data/grafana.db /tmp/gtest/data/
  ./bin/grafana server --homepath . --config /tmp/gtest/custom.ini
  ```

  Note `grafana cli admin reset-admin-password` is needed to reach the HTTP API,
  which is itself a reason to run against a copy and throw it away.
