# Installing mSupply Dashboard 13.2 (Grafana 13.2.2)

A guide for support staff. No Grafana or database knowledge assumed.

Everything here happens on the **Windows server** that runs the dashboard,
signed in as an **Administrator**.

---

## 1. Which installer do I use?

There are two `.exe` files. Picking the wrong one is the most common mistake.

| Situation | Use this |
| --- | --- |
| The server has **never** had mSupply Dashboard | `dashboard-setup-<version>.exe` |
| The server **already runs** mSupply Dashboard | `dashboard-upgrade-<version>.exe` |

The difference in one sentence: **setup creates a brand-new dashboard
database, upgrade keeps the one that is already there.**

> ### Do NOT run `dashboard-setup` on an existing server
>
> It runs the database setup script, which can wipe the customer's dashboards,
> users and saved settings. If the server already has a dashboard on it, use
> the upgrade installer. If you are unsure, check whether this folder exists:
>
> `C:\Program Files\mSupply Dashboard`
>
> If it exists, the dashboard is already installed — use the **upgrade**.

---

## 2. Before you start (both cases)

**Take a backup.** This is not optional. The upgrade changes the database in a
way that cannot be undone, so the backup is the only way back.

```cmd
copy "C:\Program Files\mSupply Dashboard\data\grafana.db" "%USERPROFILE%\grafana.db.backup"
copy "C:\Program Files\mSupply Dashboard\conf\custom.ini" "%USERPROFILE%\custom.ini.backup"
```

- `grafana.db` holds every dashboard, user and setting. Irreplaceable.
- `custom.ini` holds the site's web address and mSupply login settings.

Also note down, because you may need them later:

- The web address users visit, e.g. `https://customer.msupply.org:3000`
- The PostgreSQL password (ask the person who set the server up)
- The PostgreSQL version — check `C:\Program Files\PostgreSQL` and note the
  folder name, e.g. `17`

Tell the customer the dashboard will be **offline for about 15–30 minutes**,
and that **nobody should log in until you have finished section 5**.

---

## 3. Case A — Existing customer (upgrade)

1. **Back up** — section 2 above. Do not skip.

2. **Stop the dashboard**
   ```cmd
   net stop "mSupply Dashboard"
   ```

3. **Run `dashboard-upgrade-<version>.exe`** — right-click, *Run as
   administrator*. Accept the defaults.

4. **Start the dashboard**
   ```cmd
   net start "mSupply Dashboard"
   ```
   The first start is slow — up to a few minutes — because the dashboard is
   upgrading its own database. **Do not interrupt it.** If it fails to start,
   go to *Troubleshooting* below.

5. **Fix the user logins** — see section 5. On an upgrade this step is
   **required**. Skip it and customers cannot log in with their mSupply
   username and password.

6. **Check everything works** — section 6.

---

## 4. Case B — New customer (fresh install)

1. **Check PostgreSQL is installed** — `C:\Program Files\PostgreSQL` should
   exist. If not, install it first; the dashboard cannot work without it.

2. **Run `dashboard-setup-<version>.exe`** — right-click, *Run as
   administrator*. It will ask for the PostgreSQL password; the rest can stay
   at defaults.

3. **Set the web address.** Open
   `C:\Program Files\mSupply Dashboard\conf\custom.ini` in Notepad (as
   administrator) and set these to the customer's real address:

   ```ini
   [server]
   domain = customer.msupply.org
   root_url = https://customer.msupply.org:3000
   ```

   And in the `[auth.generic_oauth]` section, point the three URLs at the
   customer's mSupply server:

   ```ini
   auth_url  = https://customer.msupply.org:2048/api/v4/oauth/
   token_url = https://customer.msupply.org:2048/api/v4/oauth_access_token/
   api_url   = https://customer.msupply.org:2048/api/v4/oauth_userinfo/
   ```

   Getting these wrong is the usual reason logins bounce to the wrong place.

4. **Restart the dashboard** so the settings take effect:
   ```cmd
   net stop "mSupply Dashboard"
   net start "mSupply Dashboard"
   ```

5. **Section 5 is not needed** on a brand-new server — there are no existing
   users to fix.

6. **Check everything works** — section 6.

---

## 5. Fix the user logins (UPGRADES ONLY)

**Why:** version 13 identifies people by an ID number from mSupply. Older
versions matched on email address. Existing users have no ID stored yet, so
until this runs they **cannot log in**.

Run it **after** the dashboard has started successfully — it reads the
upgraded database.

```cmd
cd /d "C:\Program Files\mSupply Dashboard\conf\provisioning"
grafanadb-update.bat <postgres-password> postgres 5432 dashboard localhost <postgres-version>
```

Real example, for PostgreSQL 17 with password `secret123`:

```cmd
grafanadb-update.bat secret123 postgres 5432 dashboard localhost 17
```

> The **password comes first**, not the username. Both are easy to mix up.
> The version is the folder name under `C:\Program Files\PostgreSQL`.

The script prints nothing to the screen — it writes a log. Read the result:

```cmd
type migration_*.log
```

Scroll to the bottom for the **Result** section:

```
OAuth identities:    132
Still missing authid: 0
```

- **`Still missing authid: 0`** — everyone can log in. Done.
- **Any other number** — that many people still cannot log in. See
  *Troubleshooting*.

It is safe to run this more than once. It backs up the database each time.

---

## 6. Things to verify after installing

Work down the list. Stop and investigate at the first failure.

**1. The service is running**
```cmd
sc query "mSupply Dashboard"
```
Look for `STATE : 4 RUNNING`.

**2. The dashboard answers**

Open the customer's web address in a browser. You should see the login page.

**3. A real user can log in with mSupply**

Click **Sign in with OAuth** and log in with a genuine mSupply username and
password — not the local admin account. This is the single most important
check on an upgrade, because it tests the whole chain.

**4. Dashboards still show data**

Open two or three dashboards. Panels should draw charts, not red error boxes.
A red "datasource not found" error means the data connection needs attention.

**5. The customer's own dashboards are still there**

Check the dashboard list looks like it did before. Nothing should be missing.

**6. No login errors in the log**
```cmd
findstr /i "error" "C:\Program Files\mSupply Dashboard\data\log\grafana.log"
```
Some errors are normal and harmless — missing `provisioning\plugins` and
`provisioning\alerting` folders, for example. Anything mentioning
**login**, **oauth** or **datasource** is worth looking into.

---

## 7. Troubleshooting

### The service will not start

Run the dashboard by hand to see the real error — the Services window hides it:

```cmd
cd /d "C:\Program Files\mSupply Dashboard"
bin\grafana.exe server
```

The error appears on screen. Press `Ctrl+C` to stop, fix the cause, then start
the service normally.

### Windows says "the service did not return an error"

The service is pointing at the wrong program. Re-register it:

```cmd
cd /d "C:\Program Files\mSupply Dashboard\bin"
nssm remove "mSupply Dashboard" confirm
nssm install "mSupply Dashboard" "C:\Program Files\mSupply Dashboard\bin\grafana.exe" server
nssm set "mSupply Dashboard" AppDirectory "C:\Program Files\mSupply Dashboard"
nssm set "mSupply Dashboard" start SERVICE_DELAYED_START
net start "mSupply Dashboard"
```

If `nssm install` says *"marked for deletion"*, close the **Services** window
and Task Manager, then try again. If it still refuses, restart the server.

### Users cannot log in after an upgrade

Section 5 has not been run, or did not match everyone. Check how many are
affected:

```cmd
"C:\Program Files\mSupply Dashboard\bin\sqlite3.exe" "C:\Program Files\mSupply Dashboard\data\grafana.db" "SELECT COUNT(*) FROM user_auth WHERE auth_module='oauth_generic_oauth' AND (auth_id IS NULL OR auth_id='');"
```

`0` means logins should work. A higher number means those people were not
found in mSupply. Usually they are old test accounts that no longer exist in
mSupply, which is harmless. If real users are affected, check that mSupply and
the dashboard hold the same email address for them.

### Logins go to the wrong web address

Check the three `auth_url` / `token_url` / `api_url` lines and `root_url` in
`custom.ini` (section 4, step 3). If they say `localhost`, they were never set
to the customer's real address.

### A panel says the datasource is missing

Usually an older data connection that version 13 no longer recognises.
Re-running the section 5 script repairs it, or set the correct connection on
the panel by hand.

### Charts look broken or an image is missing

Version 13 replaced the dashboard's built-in files, so a custom image added to
the old installation may be gone. Copy it back into
`C:\Program Files\mSupply Dashboard\public\img\`.

---

## 8. If you need to go back

Reinstall the previous version, then restore the backup:

```cmd
net stop "mSupply Dashboard"
copy "%USERPROFILE%\grafana.db.backup" "C:\Program Files\mSupply Dashboard\data\grafana.db"
copy "%USERPROFILE%\custom.ini.backup" "C:\Program Files\mSupply Dashboard\conf\custom.ini"
net start "mSupply Dashboard"
```

An upgraded database **cannot** be used by an older version, so restoring the
backup is the only way back. This is why section 2 matters.
