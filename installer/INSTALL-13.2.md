# Installing mSupply Dashboard 13.2 (Grafana 13.2.2)


Everything here happens on the **Windows server** that runs the dashboard,
signed in as an **Administrator**.

---

## 1. Which installer do I use?

Use **`dashboard-setup-<version>.exe`** — the full installer — in both cases:
a brand-new server *and* an existing customer.

> ### Do not use `dashboard-upgrade-<version>.exe`
>
> The upgrade installer does not work for this release. It leaves the Windows
> service pointing at a program that no longer exists, so the dashboard will
> not start afterwards. Use the full installer instead.

The full installer is safe on an existing customer **as long as you follow
section 3**. It brings its own empty dashboard database; section 3 backs up
the customer's real one first and puts it back afterwards.

---

## 2. Before you start

**Take a backup. This is the whole job — everything else can be redone.**

```cmd
net stop "mSupply Dashboard"

copy "C:\Program Files\mSupply Dashboard\data\grafana.db" "%USERPROFILE%\grafana.db.backup"
copy "C:\Program Files\mSupply Dashboard\conf\custom.ini" "%USERPROFILE%\custom.ini.backup"
```

These two files **are** the customer's dashboard:

- `grafana.db` — every dashboard, user and saved setting
- `custom.ini` — the site's web address and mSupply login settings

Check both copies exist before going any further:

```cmd
dir "%USERPROFILE%\grafana.db.backup" "%USERPROFILE%\custom.ini.backup"
```

If `net stop` said the service does not exist, this is a **new server** — skip
to section 4.

Also note down:

- The web address users visit, e.g. `https://customer.msupply.org:3000`
- The PostgreSQL password (ask whoever set the server up)
- The PostgreSQL version — look at `C:\Program Files\PostgreSQL` and note the
  folder name, e.g. `17`

Tell the customer the dashboard will be **offline for 30–60 minutes**, and
that **nobody should log in until you have finished section 5**.

---

## 3. Existing customer

Follow these in order. The order matters.

1. **Back up and stop the service** — section 2. Do not skip.

2. **Run `dashboard-setup-<version>.exe`** — right-click, *Run as
   administrator*. It asks for the PostgreSQL password; the rest can stay at
   defaults.

   The installer starts the dashboard when it finishes. That is expected — it
   is running on an empty database at this point, which is why the next step
   stops it again.

3. **Stop the dashboard, then put the customer's data back**

   ```cmd
   net stop "mSupply Dashboard"

   copy /Y "%USERPROFILE%\grafana.db.backup" "C:\Program Files\mSupply Dashboard\data\grafana.db"
   copy /Y "%USERPROFILE%\custom.ini.backup" "C:\Program Files\mSupply Dashboard\conf\custom.ini"
   ```

   > The service **must** be stopped first. Copying over the database while the
   > dashboard is running will damage it.

4. **Start the dashboard**

   ```cmd
   net start "mSupply Dashboard"
   ```

   This first start is slow — up to several minutes — because the dashboard is
   bringing the customer's old database up to date. **Do not interrupt it.**
   If it does not start, see *Troubleshooting*.

5. **Fix the user logins** — section 5. **Required.** Without it, customers
   cannot log in with their mSupply username and password.

6. **Check everything works** — section 6.

---

## 4. New customer

1. **Check PostgreSQL is installed** — `C:\Program Files\PostgreSQL` must
   exist. If not, install it first; the dashboard cannot work without it.

2. **Run `dashboard-setup-<version>.exe`** as administrator. Give it the
   PostgreSQL password.

3. **Set the web address.** Open
   `C:\Program Files\mSupply Dashboard\conf\custom.ini` in Notepad (as
   administrator) and set the customer's real address:

   ```ini
   [server]
   domain = customer.msupply.org
   root_url = https://customer.msupply.org:3000
   ```

   Then point the three login URLs at the customer's mSupply server:

   ```ini
   [auth.generic_oauth]
   auth_url  = https://customer.msupply.org:2048/api/v4/oauth/
   token_url = https://customer.msupply.org:2048/api/v4/oauth_access_token/
   api_url   = https://customer.msupply.org:2048/api/v4/oauth_userinfo/
   ```

   Leaving these as `localhost` is the usual reason logins go to the wrong
   place.

4. **Restart so the settings apply**

   ```cmd
   net stop "mSupply Dashboard"
   net start "mSupply Dashboard"
   ```

5. **Section 5 is not needed** — a new server has no existing users to fix.

6. **Check everything works** — section 6.

---

## 5. Fix the user logins (EXISTING CUSTOMERS ONLY)

**Why:** version 13 identifies people by an ID number from mSupply. Older
versions matched on email address. Existing users have no ID stored yet, so
until this runs they **cannot log in**.

Run it **after** the dashboard has started successfully — it reads the
updated database.

```cmd
cd /d "C:\Program Files\mSupply Dashboard\conf\provisioning"
grafanadb-update.bat <postgres-password> postgres 5432 dashboard localhost <postgres-version>
```

Real example — PostgreSQL 17, password `secret123`:

```cmd
grafanadb-update.bat secret123 postgres 5432 dashboard localhost 17
```

> The **password comes first**, then the username. Easy to reverse by mistake.
> The version is the folder name under `C:\Program Files\PostgreSQL`.

The script prints nothing on screen — it writes a log:

```cmd
type migration_*.log
```

Scroll to the **Result** section at the bottom:

```
OAuth identities:    132
Still missing authid: 0
Default datasource: PostgreSQL
```

- **`Still missing authid: 0`** — everyone can log in. Done.
- **Any other number** — that many people still cannot. See *Troubleshooting*.

Safe to run more than once. It backs up the database each time.

---

## 6. Things to verify afterwards

Work down the list. Stop and investigate at the first failure.

**1. The service is running**
```cmd
sc query "mSupply Dashboard"
```
Look for `STATE : 4 RUNNING`.

**2. The dashboard answers** — open the customer's web address. You should see
the login page.

**3. A real user can log in with mSupply**

Click **Sign in with OAuth** and use a genuine mSupply username and password —
**not** the local admin account. Admin login works even when mSupply login is
completely broken, so it proves nothing on its own. This is the most important
check.

**4. The customer's dashboards are all still there**

Compare against what they had before. Nothing should be missing. If the list
looks empty or unfamiliar, the database restore in section 3 did not take —
stop and redo it.

**5. Dashboards show data** — open two or three. Panels should draw charts,
not red error boxes.

**6. No login or data errors in the log**
```cmd
findstr /i "error" "C:\Program Files\mSupply Dashboard\data\log\grafana.log"
```
Errors about missing `provisioning\plugins` and `provisioning\alerting`
folders are normal and harmless. Anything mentioning **login**, **oauth** or
**datasource** is worth looking into.

---

## 7. Troubleshooting

### The service will not start

Run the dashboard by hand to see the real reason — the Services window hides
it:

```cmd
cd /d "C:\Program Files\mSupply Dashboard"
bin\grafana.exe server
```

The error appears on screen. Press `Ctrl+C` to stop, fix it, then start the
service normally.

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

If `nssm install` reports *"marked for deletion"*, close the **Services**
window and Task Manager, then try again. If it still refuses, restart the
server.

### Users cannot log in

Section 5 has not run, or did not match everyone. Check how many are affected:

```cmd
"C:\Program Files\mSupply Dashboard\bin\sqlite3.exe" "C:\Program Files\mSupply Dashboard\data\grafana.db" "SELECT COUNT(*) FROM user_auth WHERE auth_module='oauth_generic_oauth' AND (auth_id IS NULL OR auth_id='');"
```

`0` means logins should work. A higher number means those people were not
found in mSupply — usually old test accounts, which is harmless. If real users
are affected, check that mSupply and the dashboard hold the same email address
for them.

### Logins go to the wrong web address

Check `root_url` and the three `auth_url` / `token_url` / `api_url` lines in
`custom.ini`. If any say `localhost`, the wrong `custom.ini` was restored —
put the customer's backup back (section 3, step 3).

### A panel says the datasource is missing, or there is no default datasource

Re-run section 5 — it repairs old data connections and the default datasource.
If a single panel is still wrong, set its connection by hand.

### The dashboards are empty after installing

The database restore did not happen, or happened while the service was
running. Redo section 3 steps 3 and 4, making sure the service is stopped
before copying.

### An image or logo is missing from a dashboard

Version 13 replaced the dashboard's built-in files, so a custom image added to
the old installation may have gone. Copy it back into
`C:\Program Files\mSupply Dashboard\public\img\`.

---

## 8. If you need to go back

```cmd
net stop "mSupply Dashboard"
copy /Y "%USERPROFILE%\grafana.db.backup" "C:\Program Files\mSupply Dashboard\data\grafana.db"
copy /Y "%USERPROFILE%\custom.ini.backup" "C:\Program Files\mSupply Dashboard\conf\custom.ini"
net start "mSupply Dashboard"
```

Note: **once version 13 has started on a database, an older version cannot use
it again.** To return to the old version you must reinstall that version *and*
restore the backup.

Keep both backup files until the customer confirms everything works.
