# Installing mSupply Dashboard 13.2 (Grafana 13.2.2)

Do this on the Windows server, signed in as an **Administrator**.

---

## Before you start — read this

**1. Use `dashboard-setup-<version>.exe`, the full installer.**
For a new server *and* for an existing customer.

**Do not use `dashboard-upgrade-<version>.exe`.** It does not work for this
release — it leaves the dashboard unable to start.

**2. The customer's whole dashboard is two files.**

| File | Folder |
| --- | --- |
| `grafana.db` | `C:\Program Files\mSupply Dashboard\data` |
| `custom.ini` | `C:\Program Files\mSupply Dashboard\conf` |

`grafana.db` holds every dashboard, user and setting. `custom.ini` holds the
web address and mSupply login settings. Back them up, and nothing is lost.

**3. There is no going back.** Once version 13 starts on a database, older
versions cannot read it. Your backup is the only way back.

**4. Existing customers need two manual fixes afterwards** (steps 6 and 7).
Skip them and users cannot log in and two panels stop working.

**5. Have these ready:**

- The PostgreSQL password — ask whoever set the server up
- The PostgreSQL version — the folder name in `C:\Program Files\PostgreSQL`,
  e.g. `17`. Only needed if the server has more than one; otherwise step 6
  finds it
- The customer's web address, e.g. `https://customer.msupply.org:3000`

Allow **30–60 minutes offline**, and keep users out until you finish step 7.

---

## Installing — existing customer

**1. Stop the dashboard**

`Windows`+`R` → `services.msc` → right-click **mSupply Dashboard** → **Stop**.
Leave this window open.

**2. Back up**

Zip the `C:\Program Files\mSupply Dashboard` folder and move it somewhere safe.
Then copy `grafana.db` and `custom.ini` into a folder on the Desktop — check
they are really there.

**3. Run the installer**

Right-click `dashboard-setup-<version>.exe` → **Run as administrator**. Give it
the PostgreSQL password; leave everything else as it is.

It starts the dashboard at the end. That is normal — it is running on an empty
database, which is why the next step stops it again.

**4. Stop the dashboard, put the two files back**

Stop it in Services **first** — copying over a running database damages it.

Copy `grafana.db` and `custom.ini` from your Desktop folder back into the
`data` and `conf` folders, choosing **Replace the files in the destination**.

**5. Start the dashboard**

Right-click **mSupply Dashboard** → **Start**.

This first start takes several minutes — it is updating the customer's
database. **Wait for it.**

**6. Fix the user logins** — the one step with no window to click through.

Open a Command Prompt as administrator (Start → type `cmd` → right-click →
**Run as administrator**) and type these two lines:

```
cd /d "C:\Program Files\mSupply Dashboard\conf\provisioning"
```

```
grafanadb-update.bat <password> postgres 5432 dashboard localhost <version>
```

Use the PostgreSQL password from step 5 above. For password `secret123` and
version 17:

```
grafanadb-update.bat secret123 postgres 5432 dashboard localhost 17
```

> **Password first**, then the word `postgres`. Easy to reverse.

The version at the end can be left out: the newest PostgreSQL installed in
`C:\Program Files\PostgreSQL` is used.

It prints nothing. Open the newest `migration_....log` in that folder. Check
these lines:

```
Datasources still using the legacy 'postgres' type: 0
PostgreSQL datasources without a database name: 0
Default datasource: PostgreSQL
OAuth identities:    132
Still missing authid: 0
```

The datasource lines must be `0`, or the panels show *"no default database
configured"*. They are fixed even when the login part below fails.

`Still missing authid: 0` means everyone can log in. Users are matched by the
email mSupply sends at login: their mSupply email, or `<username>@sussol.net`
when they have none. Safe to run again.

**7. Update the plugin names**

Open `conf\custom.ini` in Notepad (as administrator), find
`allow_loading_unsigned_plugins`, and make sure these are in the list:

```
msupplyfoundation-table
msupplyfoundation-msupply-regionmap
m-supply-foundation-msupply-worldmap
```

Comma-separated, no spaces. Leave any old names in place.

The `custom.ini` you put back in step 4 is the old one, so it also misses the
settings this version adds. Add these at the end of the file:

```ini
[plugins]
preinstall_disabled = true

[news]
news_feed_enabled = false

[analytics]
reporting_enabled = false
feedback_links_enabled = false
```

If the file already has a `[plugins]` section, put `preinstall_disabled = true`
inside it instead of adding a second one. Save, then restart **mSupply
Dashboard** in Services.

> Dashboards still pointing at the old plugin names show *"Panel plugin not
> found"*. See **Troubleshooting**.

---

## Installing — new customer

**1.** Check `C:\Program Files\PostgreSQL` exists. If not, install PostgreSQL
first.

**2.** Right-click `dashboard-setup-<version>.exe` → **Run as administrator**.
Give it the PostgreSQL password.

**3.** Open `conf\custom.ini` in Notepad (as administrator) and set the
customer's real addresses — leaving these as `localhost` is the usual reason
logins go wrong:

```ini
[server]
domain = customer.msupply.org
root_url = https://customer.msupply.org:3000

[auth.generic_oauth]
auth_url  = https://customer.msupply.org:2048/api/v4/oauth/
token_url = https://customer.msupply.org:2048/api/v4/oauth_access_token/
api_url   = https://customer.msupply.org:2048/api/v4/oauth_userinfo/
```

**4.** Save, then restart **mSupply Dashboard** in Services.

Steps 6 and 7 of the existing-customer list do not apply — there are no old
users or plugin names to fix.

---

## Signing the plugins (optional)

The mSupply plugins work unsigned, because `allow_loading_unsigned_plugins`
lists them. To sign them for the customer's web address:

1. Open `C:\Program Files\mSupply Dashboard\data\plugins\_sign` and run
   **Sign mSupply Plugins.exe**. Windows asks for administrator rights.
2. Check the link. It comes from `root_url` in `custom.ini` and must be the
   same address users open.
3. Paste a grafana.com Access Policy token (it starts with `glc_`, scope
   `plugins:write`). The app does not save it.
4. Click **Sign**. The app signs the ticked plugins, restarts the dashboard
   and shows any signature errors from the Grafana log.

The server needs internet access only while it signs. If the customer's web
address changes later, run the app again with the new link, or click
**Remove signature** to go back to unsigned plugins.

---

## Verify

Stop at the first failure.

| # | Check | Where |
| --- | --- | --- |
| 1 | Service shows **Running** | `services.msc` |
| 2 | Login page appears | the customer's web address |
| 3 | **A real mSupply user can log in** | click *Sign in with OAuth* |
| 4 | All the customer's dashboards are listed | dashboard list |
| 5 | Panels draw charts, no red boxes | open 2–3 dashboards |
| 6 | mSupply table, region map and world map panels work | a dashboard using them |
| 7 | One data connection is marked **default** | gear icon → Data sources |

**Check 3 matters most.** Use a genuine mSupply username and password, not the
local admin account — admin works even when mSupply login is completely
broken, so it proves nothing.

**Check 4 matters next.** An empty or unfamiliar dashboard list means the file
copy in step 4 did not work.

---

## Troubleshooting

**The dashboard will not start**

Run it by hand to see the real reason — Services hides it. In a Command Prompt
as administrator:

```
cd /d "C:\Program Files\mSupply Dashboard"
```

```
bin\grafana.exe server
```

The error appears on screen. `Ctrl`+`C` to stop.

**"The service did not return an error"**

The service points at the wrong program. In a Command Prompt as administrator,
one line at a time:

```
cd /d "C:\Program Files\mSupply Dashboard\bin"
nssm remove "mSupply Dashboard" confirm
nssm install "mSupply Dashboard" "C:\Program Files\mSupply Dashboard\bin\grafana.exe" server
nssm set "mSupply Dashboard" AppDirectory "C:\Program Files\mSupply Dashboard"
nssm set "mSupply Dashboard" start SERVICE_DELAYED_START
```

Then start it in Services. If `nssm install` says *"marked for deletion"*,
close Services and Task Manager and run that line again; if it still refuses,
restart the server.

**Users cannot log in**

Step 6 was not run, or did not match everyone. Read the newest
`migration_....log` — the **Result** section says how many are still missing.
A number above 0 means those people were not found in mSupply; usually old
test accounts, which is harmless. If real users are affected, check mSupply
and the dashboard hold the same email address for them.

If **every** user is missing, the mSupply server that signs users in does not
keep its users in the database given in step 6, so nobody can be matched. Ask
the dashboard team before changing anything.

**Logins go to the wrong web address**

Check `root_url` and the three `auth_url` / `token_url` / `api_url` lines in
`custom.ini`. If any say `localhost`, the wrong `custom.ini` was put back.

**"Panel plugin not found"**

The panel was saved with an old plugin name. The message names it.

| Old name | Fix |
| --- | --- |
| `msupply-table` | Change the panel type to `msupplyfoundation-table` |
| `m-supply-foundation-msupply-regionmap` | Change the panel type to `msupplyfoundation-msupply-regionmap` |

The panel options are the same in both versions, so only the type changes:
open the dashboard → **Edit** → **Settings** → **JSON Model**, replace the old
name in `"type": "..."` with the new one, then **Save dashboard**.

The world map keeps its name (`m-supply-foundation-msupply-worldmap`), so its
panels need no change. A world map copied in by hand from an older build fails
on version 13 with *"Object(...) is not a function"* whenever the legend is
shown; the installer's copy (1.0.3 or later) does not.

**Every panel says "no default database configured"**

The data connections still keep the database name in the old place. Run step 6
again and check that `PostgreSQL datasources without a database name` is `0`.
Restart afterwards.

**A datasource is missing, or none is marked default**

Run step 6 again; it repairs the data connections and the default. Restart
afterwards. If one panel is still wrong, set its connection by hand.

**A gauge shows "?column?" under the number**

Version 13 shows the field name where version 8 showed nothing. Edit the
panel, and in **Standard options** → **Display name** type a single space.
Save.

**Dashboards are empty**

`grafana.db` was not copied back, or was copied while the dashboard was
running. Redo steps 4 and 5.

**An image or logo is missing**

Version 13 replaced the built-in files, so a custom image may have gone. Copy
it back into `C:\Program Files\mSupply Dashboard\public\img`.

---

## Rolling back

1. Stop **mSupply Dashboard** in Services
2. Copy `grafana.db` and `custom.ini` from your Desktop folder back
3. Start it again

If you need the old *version* back, reinstall it and then restore those files —
that is what the zip from step 2 is for. Keep the zip and both files until the
customer confirms everything works.
