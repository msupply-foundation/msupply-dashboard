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

**a. Stop the dashboard**

1. Press `Windows` + `R`, type `services.msc`, press Enter
2. Find **mSupply Dashboard** in the list
3. Right-click it → **Stop**

Leave the Services window open — you will need it again later.

> If there is no **mSupply Dashboard** in the list, this is a **new server** —
> skip to section 4.

**b. Back up the old dashboard**

Right-click the `C:\Program Files\mSupply Dashboard` folder →
**Send to** → **Compressed (zipped) folder**, and move that zip somewhere safe.

Then copy these two files into a separate folder on the Desktop, because you
will need to put them back after installing:

| File | Found in | What it holds |
| --- | --- | --- |
| `grafana.db` | the `data` folder | every dashboard, user and saved setting |
| `custom.ini` | the `conf` folder | the web address and mSupply login settings |

Check both files really are in that folder before going any further. If
anything goes wrong later, these are the only way back.

**c. Note these down**

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

3. **Stop the dashboard again**

   In the Services window: right-click **mSupply Dashboard** → **Stop**.

   > Do this **before** the next step. Replacing the database while the
   > dashboard is running will damage it.

4. **Put the customer's two files back**

   Copy them from your Desktop folder into the new installation, replacing the
   ones the installer put there:

   - `grafana.db` → into `C:\Program Files\mSupply Dashboard\data`
   - `custom.ini` → into `C:\Program Files\mSupply Dashboard\conf`

   Windows asks what to do about the existing files — choose **Replace the
   files in the destination**.

5. **Start the dashboard**

   In the Services window: right-click **mSupply Dashboard** → **Start**.

   This first start is slow — up to several minutes — because the dashboard is
   bringing the customer's old database up to date. **Wait for it.** Do not
   stop it or restart the server. If it will not start, see *Troubleshooting*.

6. **Fix the user logins** — section 5. **Required.** Without it, customers
   cannot log in with their mSupply username and password.

7. **Update the plugin names** — section 5b. **Required.** Without it the
   mSupply table and region map panels will not load.

8. **Check everything works** — section 6.

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

4. **Allow the mSupply panels to load.** Still in `custom.ini`, add these two
   lines at the end of the file:

   ```ini
   [plugins]
   allow_loading_unsigned_plugins = msupplyfoundation-table,msupplyfoundation-msupply-regionmap
   ```

   Without them the mSupply table and region map panels will not appear.

5. **Save and close**, then restart **mSupply Dashboard** from `services.msc`
   so the settings apply

6. **Sections 5 and 5b are not needed** — a new server has no existing users
   or old plugin names to fix.

7. **Check everything works** — section 6.

---

## 5. Fix the user logins (EXISTING CUSTOMERS ONLY)

**Why:** version 13 identifies people by an ID number from mSupply. Older
versions matched on email address. Existing users have no ID stored yet, so
until this runs they **cannot log in**.

Do this **after** the dashboard has started successfully — it reads the
updated database.

This is the one step with no window to click through; it is a script you have
to run.

**1. Open a Command Prompt as administrator**

Click Start, type `cmd`, then right-click **Command Prompt** → **Run as
administrator**.

**2. Type these two lines**, pressing Enter after each:

```
cd /d "C:\Program Files\mSupply Dashboard\conf\provisioning"
```

```
grafanadb-update.bat <postgres-password> postgres 5432 dashboard localhost <postgres-version>
```

Put in the password and version you noted in section 2c. For PostgreSQL 17
with the password `secret123`, the second line would be:

```
grafanadb-update.bat secret123 postgres 5432 dashboard localhost 17
```

> The **password comes first**, then the word `postgres` (the username). It is
> easy to type these the wrong way round.

**3. Read the result**

The script shows nothing on screen — it writes a log file. In File Explorer,
open `C:\Program Files\mSupply Dashboard\conf\provisioning` and open the
newest `migration_....log` file in Notepad.

Scroll to the **Result** section at the bottom:

```
OAuth identities:    132
Still missing authid: 0
Default datasource: PostgreSQL
```

- **`Still missing authid: 0`** — everyone can log in. Done.
- **Any other number** — that many people still cannot. See *Troubleshooting*.
- **`Default datasource:`** — should name a real data connection, e.g.
  `PostgreSQL`. If it is blank, see *Troubleshooting*.

The same script also repairs the customer's data connections, which version 13
would otherwise refuse to use.

Safe to run more than once. It backs up the database each time.

---

## 5b. Update the plugin names (EXISTING CUSTOMERS ONLY)

The mSupply panels were renamed in version 13. The customer's old
`custom.ini` — the one you copied back — still lists the old names, so those
panels will not load and their dashboards will show an error instead of a
chart.

1. Open `C:\Program Files\mSupply Dashboard\conf\custom.ini` in Notepad (as
   administrator)
2. Find the line starting `allow_loading_unsigned_plugins`
3. Make sure **both** of these names appear in the list:

   ```
   msupplyfoundation-table
   msupplyfoundation-msupply-regionmap
   ```

   The names are comma-separated with no spaces. Leave any old names in place
   — they do no harm. A finished line looks like this:

   ```ini
   [plugins]
   allow_loading_unsigned_plugins = msupplyfoundation-datasource,msupply-horizontal-bar,msupplyfoundation-table,msupplyfoundation-msupply-regionmap
   ```

4. Save, then restart **mSupply Dashboard** from `services.msc`

> Watch the spelling. The old regionmap name was
> `m-supply-foundation-msupply-regionmap` (with hyphens after `m`); the new one
> is `msupplyfoundation-msupply-regionmap`. They look alike and only the new
> one works.

---

## 6. Things to verify afterwards

Work down the list. Stop and investigate at the first failure.

**1. The dashboard service is running**

In `services.msc`, **mSupply Dashboard** should show **Running**.

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

**6. The mSupply panels load**

Open a dashboard that uses the **mSupply table** and the **region map**. Both
should draw normally.

A panel showing *"Panel plugin not found"* means the plugin names in
`custom.ini` still need updating — go back to section 5b.

**7. There is a default data connection**

Go to the gear icon → **Data sources**. One entry should be marked
**default**. If none is, see *Troubleshooting*.

**8. Check the log for login and data errors**

Open `C:\Program Files\mSupply Dashboard\data\log\grafana.log` in Notepad and
press `Ctrl` + `F` to search for `error`.

Errors about missing `provisioning\plugins` and `provisioning\alerting`
folders are normal and harmless. Anything mentioning **login**, **oauth** or
**datasource** is worth looking into.

---

## 7. Troubleshooting

### The dashboard will not start

The Services window hides the real reason. To see it, open a Command Prompt as
administrator (Start → type `cmd` → right-click **Command Prompt** → **Run as
administrator**) and type these two lines:

```
cd /d "C:\Program Files\mSupply Dashboard"
```

```
bin\grafana.exe server
```

The error appears on screen. Press `Ctrl` + `C` to stop it, fix the cause,
then start the service from `services.msc` as usual.

### Windows says "the service did not return an error"

The service is pointing at the wrong program. In a Command Prompt opened as
administrator, type these lines one at a time:

```
cd /d "C:\Program Files\mSupply Dashboard\bin"
```

```
nssm remove "mSupply Dashboard" confirm
```

```
nssm install "mSupply Dashboard" "C:\Program Files\mSupply Dashboard\bin\grafana.exe" server
```

```
nssm set "mSupply Dashboard" AppDirectory "C:\Program Files\mSupply Dashboard"
```

```
nssm set "mSupply Dashboard" start SERVICE_DELAYED_START
```

Then start **mSupply Dashboard** from `services.msc`.

If `nssm install` reports *"marked for deletion"*, close the Services window
and Task Manager, then run that line again. If it still refuses, restart the
server.

### Users cannot log in

Section 5 has not been run, or did not match everyone. Open the newest
`migration_....log` in
`C:\Program Files\mSupply Dashboard\conf\provisioning` and look at the
**Result** section at the bottom — it says how many people are still missing.

A number higher than 0 means those people were not found in mSupply. Usually
they are old test accounts, which is harmless. If real users are affected,
check that mSupply and the dashboard hold the same email address for them.

### Logins go to the wrong web address

Open `C:\Program Files\mSupply Dashboard\conf\custom.ini` in Notepad and check
`root_url` and the three `auth_url` / `token_url` / `api_url` lines. If any of
them say `localhost`, the wrong `custom.ini` was put back — copy the
customer's saved one over it again.

### A panel says the datasource is missing, or no data connection is marked default

Run section 5 again — it repairs the customer's data connections and sets the
default. Restart the dashboard afterwards, then check under the gear icon →
**Data sources** that one is marked **default**.

If a single panel is still wrong, open that panel and choose the correct data
connection by hand.

### A panel says "Panel plugin not found"

The plugin names in `custom.ini` are the old ones. Go to section 5b and make
sure both `msupplyfoundation-table` and `msupplyfoundation-msupply-regionmap`
are listed, then restart the dashboard.

The error message names the plugin it could not find, which tells you which
name is missing or misspelled.

### The dashboards are empty after installing

The customer's `grafana.db` was not copied back, or was copied while the
dashboard was running. Redo section 3 steps 3 to 5, making sure the service is
stopped before you copy the file.

### An image or logo is missing from a dashboard

Version 13 replaced the dashboard's built-in files, so a custom image added to
the old installation may have gone. Copy it back into
`C:\Program Files\mSupply Dashboard\public\img`.

---

## 8. If you need to go back

1. Stop **mSupply Dashboard** in `services.msc`
2. Copy `grafana.db` and `custom.ini` from your Desktop folder back into the
   `data` and `conf` folders, replacing what is there
3. Start **mSupply Dashboard** again

Note: **once version 13 has started on a database, an older version cannot use
it again.** To go back to the old version you must reinstall that version
*and* copy the saved files back — that is what the zip from section 2b is for.

Keep the zip and the two saved files until the customer confirms everything
works.
