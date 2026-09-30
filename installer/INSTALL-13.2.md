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
  e.g. `17`
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

Use the PostgreSQL password and version from step 5 above. For version 17 with
password `secret123`:

```
grafanadb-update.bat secret123 postgres 5432 dashboard localhost 17
```

> **Password first**, then the word `postgres`. Easy to reverse.

It prints nothing. Open the newest `migration_....log` in that folder and read
the **Result** at the bottom:

```
OAuth identities:    132
Still missing authid: 0
Default datasource: PostgreSQL
```

`Still missing authid: 0` means everyone can log in. Safe to run again.

**7. Update the plugin names**

Open `conf\custom.ini` in Notepad (as administrator), find
`allow_loading_unsigned_plugins`, and make sure both of these are in the list:

```
msupplyfoundation-table
msupplyfoundation-msupply-regionmap
```

Comma-separated, no spaces. Leave any old names in place. Save, then restart
**mSupply Dashboard** in Services.

> The old regionmap name was `m-supply-foundation-msupply-regionmap`. The new
> one looks almost the same but only the new one works.

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

**4.** Add these two lines at the end of the same file, or the mSupply panels
will not load:

```ini
[plugins]
allow_loading_unsigned_plugins = msupplyfoundation-table,msupplyfoundation-msupply-regionmap
```

**5.** Save, then restart **mSupply Dashboard** in Services.

Steps 6 and 7 of the existing-customer list do not apply — there are no old
users or plugin names to fix.

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
| 6 | mSupply table and region map panels work | a dashboard using them |
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

**Logins go to the wrong web address**

Check `root_url` and the three `auth_url` / `token_url` / `api_url` lines in
`custom.ini`. If any say `localhost`, the wrong `custom.ini` was put back.

**"Panel plugin not found"**

Old plugin names — see step 7. The message names the plugin it could not find.

**A datasource is missing, or none is marked default**

Run step 6 again; it repairs the data connections and the default. Restart
afterwards. If one panel is still wrong, set its connection by hand.

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
