# mSupply modifications to Grafana core

Targets **Grafana v13.2.2**.

The mSupply Dashboard ships a Grafana built from source with one small patch
applied, so that the login page and nav bar carry the mSupply mark instead of
Grafana's.

## Applying

```bash
git clone --depth 1 --branch v13.2.2 https://github.com/grafana/grafana.git
cd grafana

# adds public/img/msupply_icon.svg and msupply_light_icon.svg
cp -r ../msupply-dashboard/modifications/public/. public/

git apply ../msupply-dashboard/modifications/changes.patch
```

## What the patch does

One hunk, against `public/app/core/components/Branding/Branding.tsx`:

- `LoginLogo` uses `msupply_icon.svg` (the dark mark, on the light login page)
- `MenuLogo` uses `msupply_light_icon.svg` (the light mark, on the dark nav bar)

Webpack imports these, so they end up content-hashed under
`public/build/static/img/`. Overwriting `public/img/grafana_icon.svg` on its own
would *not* change these two logos — hence the patch.

Three hunks that used to be here were dropped for v13:

| Dropped hunk | Why |
|---|---|
| `public/sass/base/_icons.scss` | The `.gicon-branding` rule no longer exists. |
| `public/views/index-template.html` | Renamed to `index.html`. The loading logo comes from `[[.LoadingLogo]]`, which resolves out of `public/img/` at request time, so no patch is needed. |
| `packages/grafana-ui/src/components/DateTimePickers/options.ts` | Dropped — we now ship Grafana's stock time picker instead of trimming the sub-hour ranges. `quickOptions` also became the i18n'd `getQuickOptions()`, so the old hunk could not apply. To trim them again, set `[time_picker] quick_ranges` in `conf/custom.ini` rather than patching. |

The favicon and Apple touch icon are also served from `public/img/` at request
time (`[[.FavIcon]]`, `[[.AppleTouchIcon]]`), so copying
`modifications/public/` over `public/` is enough for those.

## Build dependencies

Read from `go.mod` and `package.json` at tag v13.2.2 — check them again on the
next Grafana bump, these move every release.

| Tool | Version |
|---|---|
| Go | 1.26.6+ |
| Node.js | >= 22, < 25 |
| Yarn | 4.17.1 (via corepack — do **not** `npm i -g yarn`) |

## Building

Only the frontend is built here — that is where the branding lives:

```bash
corepack enable
yarn install --immutable
yarn build          # frontend -> public/build
```

For a Windows release, copy `public/` and Grafana's own four conf files
(`defaults.ini`, `sample.ini`, `ldap.toml`, `ldap_multiple.toml`) into this
repo's `release/`, then build the installers with
`installer/build-installers.bat`. Do not copy `conf/` wholesale — it would
overwrite our `release/conf/custom.ini`. See the table in
`installer/README.md` §1 for the exact mapping and the list of mSupply-owned
files to keep.

Do **not** build or copy the backend: `build-installers.bat` downloads the
official `grafana.exe` from the URL in `installer/grafana.url`, and that URL
must name the same version as the tag cloned above.

## Checking the result

After building, confirm the branding actually landed:

```bash
ls public/build/static/img/ | grep msupply
# expect msupply_icon.<hash>.svg and msupply_light_icon.<hash>.svg
```

If those are missing, the patch did not apply or `modifications/public` was not
copied first, and the release will ship with Grafana's own logo.
