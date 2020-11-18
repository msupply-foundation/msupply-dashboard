import { PanelPlugin } from '@grafana/data';
import { loadPluginCss } from '@grafana/runtime';

import { WorldMapOptions } from './types';
import { WorldMap } from './WorldMap';

export const plugin = new PanelPlugin<WorldMapOptions>(WorldMap).setPanelOptions(builder => {
  const cssPath = 'plugins/grafana-worldmap-panel-msupply/css/';

  loadPluginCss({
    light: `${cssPath}/worldmap.light.css`,
    dark: `${cssPath}/worldmap.dark.css`,
  });

  return builder
    .addTextInput({
      path: 'centre',
      name: 'Centre',
      description: 'The latitude and longitude of the centre of the map',
      defaultValue: '27.7063723,85.2990098',
    })
    .addNumberInput({
      path: 'initialZoom',
      name: 'Initial Zoom',
      description: 'The initial value of zoom on the map',
      settings: {
        min: 0,
        max: 20,
      },
      defaultValue: 4,
    })
    .addTextInput({
      path: 'minCircleSize',
      name: 'Min Circle Size',
      description: 'Minimum circle size',
      defaultValue: '2',
    })
    .addTextInput({
      path: 'maxCircleSize',
      name: 'Max Circle Size',
      description: 'Maximum circle size',
      defaultValue: '30',
    })
    .addBooleanSwitch({
      path: 'stickyLabels',
      name: 'Sticky Labels',
      defaultValue: false,
    })
    .addBooleanSwitch({
      path: 'showLegend',
      name: 'Show Legend',
      defaultValue: true,
    })
    .addBooleanSwitch({
      path: 'mouseWheelZoom',
      name: 'Mouse Wheel Zoom',
      defaultValue: false,
    })
    .addTextInput({
      path: 'labeltemplate',
      name: 'Label Template',
      description: 'An optional template to use for the label',
      settings: { placeholder: '${name: ${value} ${unit}', useTextarea: true, rows: 2 },
    })
    .addColorPicker({
      path: 'geoJSONOutlineColour',
      name: 'Geo JSON Outline Colour',
    });
});
