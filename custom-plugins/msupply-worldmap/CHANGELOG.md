# Change Log

All notable changes to this project will be documented in this file.

## v1.0.3

- Legend no longer calls `getColorForTheme`, which current Grafana versions removed. The panel failed to render on Grafana 13 whenever the legend was shown.
- Basemap tiles come from Esri Canvas (light and dark, with place labels) and need no API key. The previous CARTO address no longer serves tiles.
- `sass` pinned to 1.27.0 so the build does not need `node-sass`.

## v1.0.0

Initial Release
