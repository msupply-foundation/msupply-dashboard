# mSupply Dashboard Install Assistant

`dashboard-install-assistant.exe` runs the procedure in [`INSTALL-13.2.md`](../INSTALL-13.2.md) on a Windows server. It uses the same official `dashboard-setup-<version>.exe`, the same `grafanadb-update.bat` and `db-init.sql`, the same files and the same order. It does not change the setup, the database scripts or the release.

What it adds is control. Before it changes anything, it reads the server and makes a plan. Each step waits for the person who installs. Each fix counts first, and the data fixes count again after and stop the run if anything is left. A full backup comes first, and a rollback button puts it back.

## Why

The setup is one of about 15 steps in an upgrade. The other steps are done by hand: stop the service, back up, put back `grafana.db` and `custom.ini`, run `grafanadb-update.bat` with six parameters in the right order, edit `custom.ini`, read logs. Most problems in the upgrades done so far came from these manual steps. A step was done in the wrong order, was forgotten, or was done on a server where it did not apply. Some problems were not in the guide at all and were found on real servers (see "Checks not in the guide").

The assistant does the same steps every time, on every server, and it shows its reasons on the screen.

## Based on INSTALL-13.2.md

| INSTALL-13.2.md | Assistant step | What the assistant checks |
|---|---|---|
| Before you start 1: use `dashboard-setup`, not `dashboard-upgrade` | Check and plan | Stops if the file is `dashboard-upgrade-*.exe`. |
| Before you start 5: PostgreSQL password and version | Check and plan | Connects with the password before any change. Uses the newest PostgreSQL in `C:\Program Files\PostgreSQL`, the same rule as `grafanadb-update.bat`. |
| 1. Stop the dashboard | Backup | Stops the service and waits until Windows reports `Stopped` (max 3 min). |
| 2. Back up | Backup | Copies the whole install folder with robocopy, checks `grafana.db` and `custom.ini` by md5, saves the service settings and the PostgreSQL code (`pg_dump --schema-only`, no rows). No backup, no next step. |
| 3. Run the installer | Official setup | Opens the same setup and waits until it closes. Checks that `bin\grafana.exe` exists. Stops the service, which the setup started on an empty database. |
| Troubleshooting: "The service did not return an error" | Official setup | Checks that the service runs `bin\grafana.exe server` from the install folder. If it still points to the old `bin\grafana-server.exe`, it fixes the three service values. |
| 4. Stop, put the two files back | Put back grafana.db and custom.ini | Copies them from the backup with the service stopped and checks by md5. Keeps the setup's empty copies as `*.from-setup`. |
| 5. Start and wait | First start (database migration) | Starts the service and waits for `/api/health` (max 30 min). Checks that the major version is the setup's. |
| 6. Fix the user logins | Datasources and OAuth logins | Reads the counts from `grafana.db`: legacy `postgres` datasources, datasources without a database name, OAuth users without auth id. Runs `grafanadb-update.bat` in `conf\provisioning`, with the guide's parameter order, only when a count is not 0. Reads the counts again after it. Copies `migration_*.log` to the backup. |
| 7. Update the plugin names and the new settings | Add missing custom.ini keys | Adds the three ids to `allow_loading_unsigned_plugins` and the `[plugins]`, `[news]`, `[analytics]` keys, only the ones that are missing. Uses an existing section if there is one. The rest of the file stays as it was. |
| New customer 3: real addresses in `custom.ini` | Final start and checks | Warns if `domain`, `root_url` or an OAuth URL still says `localhost`. |
| Troubleshooting: "Panel plugin not found" | Old panel types -> new | Changes `msupply-table` and the old region map id to the new ids in dashboards and library panels, before the first start. Counts again after it. |
| Troubleshooting: "no default database configured" | Datasources and OAuth logins | The "without database name" count must be 0, or the run stops. |
| Verify 1, 2, 6 | Final start and checks | Service running, `/api/health` answers (version and database state go to the log), the three mSupply plugins are in the log as registered. |
| Verify 3, 4, 5, 7 | Browser, by the person | The assistant asks for them at the end: a real mSupply login, a table and its export, a region map, the world map. |
| Rolling back | Rollback... | Puts back the whole install folder (old version included) and the service settings, then checks that the dashboard answers. |

## Checks not in the guide

These come from upgrades on real servers. Each one caused an error or a broken panel there.

| Problem | What the assistant does |
|---|---|
| The setup does not delete old files. Old copies of the built-in datasources stay in `public\` and `data\plugins-bundled\`, and Grafana 13 logs "Could not start plugin backend" at each start. | Moves the old `public` and `data\plugins-bundled` to the backup before the setup. On REPAIR it finds old copies and moves them. |
| Old folders of the mSupply plugins in `data\plugins` load instead of the new ones. | Moves every folder with an mSupply plugin id to the backup before the setup. |
| `conf\provisioning\plugins` and `alerting` are missing, and Grafana logs an error at each start. | Creates them empty. |
| OAuth users that `grafanadb-update.bat` cannot match cannot log in. | Asks if it should turn on `oauth_allow_insecure_email_lookup`, so they are linked by email at their first login. A later REPAIR run offers to turn it off when all are linked. |
| `db-init.bat` has `PostgreSQL\11` in its path. On a server with another version it does not run, and on a server with 11 it can replace customer functions. | Existing install: compares an md5 of each function, procedure and view before and after, and marks the step `failed` if one changed. New install: if db-init did not run, runs `db-init.sql` with the PostgreSQL that is installed. |
| The report scheduler app (`msupplyfoundation-datasource`) is not in the 13 build, but the table export uses it. | Keeps it when it is enabled, and says why in the plan. |
| Third-party plugins built with Angular do not load in Grafana 12 and 13. | Lists them in the plan as a warning, before the upgrade. |
| Errors in the log after the upgrade look new, but many were already there. | Reads the last start of the old version first. Shows old errors in gray and new ones in red. |

## Paths and values

The assistant uses the paths of the official installer. It does not ask for them.

| What | Where |
|---|---|
| Install folder | `C:\Program Files\mSupply Dashboard` (also fixed inside `grafanadb-update.bat` and `db-init.bat`) |
| Service | `mSupply Dashboard`, nssm settings in `HKLM:\SYSTEM\CurrentControlSet\Services\mSupply Dashboard\Parameters` |
| Dashboard database | `data\grafana.db`, read with `bin\sqlite3.exe` from the installer |
| Settings | `conf\custom.ini` |
| Plugins | `data\plugins` |
| Grafana log | `data\log\grafana.log` |
| Scripts | `conf\provisioning\grafanadb-update.bat`, `db-init.sql` |
| PostgreSQL | newest folder in `C:\Program Files\PostgreSQL` that has `bin\psql.exe` |
| PostgreSQL connection | `postgres` / `5432` / `dashboard` / `localhost`, as in the guide (parameters can change them) |
| Health check | `http://127.0.0.1:3000/api/health`, with protocol and port from `custom.ini` |
| Backups | `C:\mSupply-upgrade-backup\<date_time>` |
| Setup file | found in the same folder as the assistant (`dashboard-setup-*.exe`, the newest one), or chosen with Browse |

## Rules it follows

- Check and plan only read. Nothing changes until Start.
- Nothing runs by itself after Start. Each step waits for Run step, Skip step or Stop.
- The backup is first. If it fails or the md5 check fails, nothing else runs.
- It stops before any change if: the setup is older than the installed version, PostgreSQL is not found, the password does not connect, C: has less than 5 GB free, or the file is `dashboard-upgrade-*.exe`.
- A fix runs only when its count is not 0. Otherwise the step ends as `no change`.
- The password stays in memory. psql gets it through `PGPASSWORD`, which is removed at the end. `grafanadb-update.bat` gets it on the command line, as in the guide.
- The log has counts, versions, plugin ids and key names. No user names, data rows or addresses.

## How to use it

1. Put `dashboard-install-assistant.exe` and `dashboard-setup-<version>.exe` in the same folder.
2. Double-click the assistant. Windows asks for Administrator rights.
3. Type the PostgreSQL password and click **Check and plan**.
4. Read the scenario and the plan, then click **Start**.
5. For each step, click **Run step**, **Skip step** or **Stop**.
6. When the setup opens: the same PostgreSQL password, and do not tick "Install Postgres Database".
7. At the end, do the browser checks from the list, then click **Close**.

## The window

| Part | What it does |
|---|---|
| Setup file | Filled in by itself. Empty means REPAIR: check and fix, no setup. |
| Check and plan | Reads the server and shows the scenario and the plan. |
| Step list | All steps with DO or SKIP and the reason. During the run: `running`, `done`, `no change`, `skipped` or `failed`. |
| Log | Each action and result, with the time. Saved as `run.log` in the backup folder. |
| Run step, Skip step, Stop | The person decides each step. Stop keeps the backup and the rollback. |
| Rollback... | Puts back a backup folder. |
| Open backup folder | Opens the backup of this run. |
| Close | Active when no step is running. |

## Scenarios

| Scenario | When | Steps |
|---|---|---|
| NEW | No dashboard installed | Setup, database code (db-init), start and checks. No backup: there is nothing to back up yet. |
| MIGRATE | The setup has a newer major version (8.5 or 12 to 13) | All steps in the table above. |
| UPDATE | Same major version, newer build | As MIGRATE, without the panel type change and the long first start. |
| REPAIR | No setup file, or the same version | Only the checks and the fixes they need. On a healthy server most steps end as `no change`. |

## Backup and rollback

Each run writes `C:\mSupply-upgrade-backup\<date_time>\`:

| File or folder | Content |
|---|---|
| `install\` | The whole install folder before the run, with `grafana.db` and `custom.ini` |
| `service.json` | Service program, parameters and folder |
| `og_schema_before.sql` | PostgreSQL code of schema `public` (no rows) |
| `pg_fingerprint_before.txt`, `pg_fingerprint_after.txt` | md5 of each function, procedure and view |
| `run.log` | Everything the assistant did |
| `plugins_old\`, `plugins_obsolete\`, `grafana_old\`, `public_datasource_old\` | Folders it moved out |
| `migration_*.log` | Log of `grafanadb-update.bat`, if it ran |

**Rollback...** stops the service, mirrors `install\` back to `C:\Program Files\mSupply Dashboard`, writes back the service settings from `service.json`, starts the service and checks `/api/health`. It works after a run that stopped with an error and after a run that finished. It also works for an upgrade: it puts back the old Grafana version, not only the two files.

Rollback does not change PostgreSQL. If the database code changed, the step "Database code (db-init)" is `failed` and `og_schema_before.sql` has the old code. Rollback puts back `grafana.db` from before the run, so dashboard changes made after the upgrade are lost.

## Text mode

The same script runs without the window:

```powershell
powershell -ExecutionPolicy Bypass -File .\dashboard-install-assistant.ps1 -Console -Setup .\dashboard-setup-v13.2.2.build.1.exe -PlanOnly
powershell -ExecutionPolicy Bypass -File .\dashboard-install-assistant.ps1 -Console -Rollback -BackupDir C:\mSupply-upgrade-backup\<date_time>
```

Parameters: `-DbUser` (postgres), `-DbPort` (5432), `-DbName` (dashboard), `-DbHost` (localhost), `-BackupRoot`, `-MigrationTimeoutMin` (30).

## Build

The release workflow builds the exe with ps2exe, like `Sign mSupply Plugins.exe`, and signs it with the installers. Local build:

```powershell
Invoke-ps2exe .\dashboard-install-assistant.ps1 .\dashboard-install-assistant.exe -noConsole -STA -requireAdmin -title "mSupply Dashboard Install Assistant"
```

## Tested

| Case | Result |
|---|---|
| MIGRATE 12.3.1 to 13.2.2 (window) | ok: no new errors in the log; login, table and export, region map and world map ok in the browser |
| REPAIR on 13.2.2 (window and exe) | ok: all fixes `no change`, no new errors |
| Rollback 13.2.2 to 12.3.1 (window) | ok |
| MIGRATE 8.5 to 13.2.2 | in progress |
| NEW install | in progress |

## Not covered

- Signing the plugins: that is the `Sign mSupply Plugins.exe` app in `data\plugins\_sign`, after the install.
- Panel content changes after the upgrade (for example a gauge that shows `?column?`, or a custom logo in `public\img`): see the INSTALL-13.2.md troubleshooting.
- Servers that use the report scheduler for schedules: on Grafana 13 new schedules cannot be created. These servers need their own plan.
- A PostgreSQL password with `& | < > ^ % "` or a space: `grafanadb-update.bat` cannot get it. The assistant stops at that step and says so.
