/* eslint import/no-extraneous-dependencies: 0 */
import { loadPluginCss } from 'grafana/app/plugins/sdk';
import RegionMapCtrl from './regionmap_ctrl';

loadPluginCss({
  dark: 'plugins/grafana-region-map-panel/css/region-map.dark.css',
  light: 'plugins/grafana-region-map-panel/css/region-map.light.css',
});

export { RegionMapCtrl as PanelCtrl };
