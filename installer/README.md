# Building the installers

The installers are built by Setup Factory from the `.suf` projects in this
folder, packaging the committed `release/` folder. Builds run on the
self-hosted Windows runner via the
[build-windows-installers](../.github/workflows/build-windows-installers.yaml)
workflow — triggered by pushing a `v*` tag, or manually from the Actions tab
(workflow_dispatch, with an optional `skip_signing` input for dry runs).

The workflow mirrors `release/` to a short path first (Setup Factory crashes
on long source paths), stamps version and paths into the `.suf` projects with
`adjustSUFs.js`, builds both installers headlessly, signs them with the
eToken, uploads them as a workflow artifact, and attaches them to the tag's
GitHub release if one exists (drafts count).

`theme/mSupply/` holds the Setup Factory installer theme referenced by the
`.suf` projects; the workflow installs it into Setup Factory's machine-wide
theme directory each run, so a rebuilt runner self-provisions.

If using https on a server that does not have mSupply installed then after an
install add key.pem and cert.pem to the root of the dashboard directory e.g.
`c:\program files\msupply dashboard` and then update the `/conf/custom.ini`
file to reflect the correct location.
