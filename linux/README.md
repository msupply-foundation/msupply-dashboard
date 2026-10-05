# mSupply Dashboard for Linux (Docker image)

This folder builds the `msupplyfoundation/msupply-dashboard` image: Grafana 13.2.2 with the mSupply
plugins, the default `grafana.db` from `release/data/` and the `msupply` command (`init-db`, `update-db`,
`check`, `update-grafanadb`, `import-dashboards`, `version`). PostgreSQL is not in the image; it runs on
the server.

To install the image on a server, follow [INSTALL-LINUX.md](INSTALL-LINUX.md).

## Files

| File | What it is |
|---|---|
| `Dockerfile` | The image, on top of `grafana/grafana` |
| `build.sh` | Assembles the build context from this checkout and runs `docker build` |
| `bin/msupply-entrypoint` | Runs on every start: checks `.env`, copies the default `grafana.db` on a new install, refreshes the mSupply plugins, builds the OAuth URLs, sets the admin password |
| `bin/msupply` | The `msupply` command |
| `lib/` | Python tools behind `msupply check`, `update-grafanadb` and `import-dashboards` |
| `provisioning/` | The `PostgreSQL` data source, filled from `.env` |
| `compose.yaml`, `.env.example` | What goes to the server |

## Build

The checkout needs Git LFS (for `release/data/grafana.db`) and Docker. The plugins are built with
`npm ci` and `npm run build`, as in `.github/workflows/build.yml`, in a `node:22` container that runs as
your user, so the files it writes are not owned by root:

```bash
git lfs pull
for p in msupplyfoundation-table msupplyfoundation-msupply-regionmap; do
  docker run --rm -u "$(id -u):$(id -g)" -e HOME=/tmp -v "$PWD/custom-plugins/$p":/src -w /src \
    node:22 sh -c 'npm ci && npm run build'
done
linux/build.sh . 13.2.2
```

`build.sh` stops if the checkout has uncommitted changes, if `grafana.db` is still an LFS pointer, or if a
plugin has no `dist/module.js`. The image is labelled with the branch and commit it was built from;
`msupply version` prints them.
