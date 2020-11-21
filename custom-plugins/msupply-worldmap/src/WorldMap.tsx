import React from 'react';
import { CircleMarker, MapContainer, Tooltip, TileLayer } from 'react-leaflet';
import { PanelProps } from '@grafana/data';
import { getLocationSrv } from '@grafana/runtime';
import { WorldMapOptions } from 'types';

import { DataPoints } from './DataPoints';
import { useTheme } from '@grafana/ui';
import { LatLngTuple } from 'leaflet';

import './css/leaflet.css';
import './css/worldmap-panel.css';

interface Props extends PanelProps<WorldMapOptions> {}

export const WorldMap: React.FC<Props> = ({ options, data, width, height }) => {
  const theme = useTheme();
  //const styles = getStyles();
  // const radii = data.series
  //   .map(series => series.fields.find(field => field.type === 'number'))
  //   .map(field => field?.values.get(field.values.length - 1));
  //const color = `${theme.isLight ? theme.palette.greenBase : theme.palette.blue95}`;

  const tileServers = {
    light: {
      url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> ' +
        '&copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
      subdomains: 'abcd',
    },
    dark: {
      url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> ' +
        '&copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
      subdomains: 'abcd',
    },
  };

  const { initialZoom, linkedVariable, mouseWheelZoom } = options;
  const centre: LatLngTuple = [0, 0];
  options.centre.split(',').forEach((value, index) => {
    const l = parseFloat(value);
    if (isNaN(l)) return;
    if (index > 1) return;
    centre[index] = l;
  });

  const setVariable = (value: string) => {
    if (!linkedVariable) return;
    getLocationSrv().update({
      query: {
        [`var-${linkedVariable}`]: value,
      },
      partial: true,
      replace: true,
    });
  };

  // const label = useTemplate
  //     ? this.ctrl.panel.labelTemplate
  //         .replace('${name}', locationName)
  //         .replace('${value}', value)
  //         .replace('${unit}', unit)
  //     : (locationName + ': ' + value + ' ' + (unit || '')).trim();

  // TODO: memoize
  // TODO: set weight if selectedFacility
  // TODO: set colour if selectedFacility
  const dataPoints = new DataPoints(data.series, options);

  return (
    <MapContainer center={centre} zoom={initialZoom} scrollWheelZoom={mouseWheelZoom} style={{ height, width }}>
      <TileLayer {...(theme.isLight ? tileServers.light : tileServers.dark)} />
      {dataPoints.values.map(dataPoint => (
        <CircleMarker
          {...dataPoint.marker}
          eventHandlers={{
            click: () => setVariable(dataPoint.name),
          }}
        >
          <Tooltip>
            {dataPoint.name}: {dataPoint.value}
          </Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};
