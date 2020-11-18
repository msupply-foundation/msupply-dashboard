import React from 'react';
import { CircleMarker, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { PanelProps } from '@grafana/data';
import { IDataPoint, WorldMapOptions } from 'types';

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

  const { initialZoom, mouseWheelZoom } = options;
  const centre: LatLngTuple = [0, 0];
  options.centre.split(',').forEach((value, index) => {
    const l = parseFloat(value);
    if (isNaN(l)) return;
    if (index > 1) return;
    centre[index] = l;
  });

  const dataPoints: IDataPoint[] = [];
  data.series.forEach(series => {
    const metricField = series.fields.find(x => x.name === 'metric'); // TODO: take from options
    const latitudeField = series.fields.find(x => x.name === 'latitude'); // TODO: take from options
    const longitudeField = series.fields.find(x => x.name === 'longitude'); // TODO: take from options
    const nameField = series.fields.find(x => x.name === 'name'); // TODO: take from options
    const fieldLength = metricField?.values?.length || 0;
    for (let index = 0; index < fieldLength; index++) {
      const name: string = nameField?.values?.get(index) || '';
      const latitude: number = latitudeField?.values?.get(index) || 0;
      const longitude: number = longitudeField?.values?.get(index) || 0;
      const metric: number = metricField?.values?.get(index) || '';

      if (!latitude || !longitude) continue;

      const dataPoint: IDataPoint = {
        key: index.toString(),
        name,
        marker: {
          center: [latitude, longitude],
          radius: metric,
        },
      };
      dataPoints.push(dataPoint);
    }
  });

  return (
    <MapContainer center={centre} zoom={initialZoom} scrollWheelZoom={mouseWheelZoom} style={{ height, width }}>
      <TileLayer {...(theme.isLight ? tileServers.light : tileServers.dark)} />
      {dataPoints.map(dataPoint => (
        <CircleMarker {...dataPoint.marker}>
          <Popup>{dataPoint.name}</Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};
