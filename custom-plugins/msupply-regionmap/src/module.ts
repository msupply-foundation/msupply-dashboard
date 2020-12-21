import { FieldConfigProperty, PanelPlugin } from '@grafana/data';
import { loadPluginCss } from '@grafana/runtime';

import { RegionMapOptions } from './types';
import { RegionMap } from './RegionMap';

export const plugin = new PanelPlugin<RegionMapOptions>(RegionMap)
  .setPanelOptions(builder => {
    const cssPath = 'plugins/m-supply-foundation-msupply-regionmap/static/';

    loadPluginCss({
      light: `${cssPath}regionmap.light.css`,
      dark: `${cssPath}regionmap.dark.css`,
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
        path: 'labelTemplate',
        name: 'Label Template',
        description: 'An optional template to use for the label',
        settings: { placeholder: '${name}: ${value} ${unit}' },
      })
      .addTextInput({
        path: 'linkedVariable',
        name: 'Linked Variable',
        description: 'Specify the name of a variable to update when an item on the map is clicked',
      })
      .addNumberInput({
        path: 'decimals',
        name: 'Decimals',
        description: 'The number of decimal places to show for values',
        settings: {
          min: 0,
        },
        defaultValue: 0,
      })
      .addTextInput({
        path: 'geoJSONField',
        name: 'geoJSON Field',
        defaultValue: 'geojson',
      })
      .addTextInput({
        path: 'metricField',
        name: 'Metric Field',
        defaultValue: 'metric',
      })
      .addTextInput({
        path: 'nameField',
        name: 'Location Name Field',
        defaultValue: 'name',
      });
  })
  .useFieldConfig({
    standardOptions: [FieldConfigProperty.Thresholds, FieldConfigProperty.Links, FieldConfigProperty.Unit],
  });
