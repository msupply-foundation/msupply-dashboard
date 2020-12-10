import { FieldConfigProperty, PanelPlugin } from '@grafana/data';
import { loadPluginCss } from '@grafana/runtime';

import { RegionMapOptions } from './types';
import { RegionMap } from './RegionMap';

export const plugin = new PanelPlugin<RegionMapOptions>(RegionMap)
  .setPanelOptions(builder => {
    const cssPath = 'plugins/grafana-RegionMap-panel-msupply/css/';

    loadPluginCss({
      light: `${cssPath}/RegionMap.light.css`,
      dark: `${cssPath}/RegionMap.dark.css`,
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
      .addNumberInput({
        path: 'minCircleSize',
        name: 'Min Circle Size',
        description: 'Minimum circle size',
        defaultValue: 2,
        settings: { min: 0 },
      })
      .addNumberInput({
        path: 'maxCircleSize',
        name: 'Max Circle Size',
        description: 'Maximum circle size',
        defaultValue: 30,
        settings: { min: 0 },
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
        settings: { placeholder: '${name: ${value} ${unit}' },
      })
      .addTextInput({
        path: 'geoJSON',
        name: 'Geo JSON',
        description: 'Enter GeoJSON as text to display on the map if required - for example a country outline',
        settings: { useTextarea: true, rows: 3 },
      })
      .addColorPicker({
        path: 'geoJSONOutlineColour',
        name: 'Geo JSON Outline Colour',
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
        path: 'latitudeField',
        name: 'Latitude Field',
        defaultValue: 'latitude',
      })
      .addTextInput({
        path: 'longitudeField',
        name: 'Longitude Field',
        defaultValue: 'longitude',
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
