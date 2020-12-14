import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { PanelProps } from '@grafana/data';
import { RegionMapOptions } from 'types';

import { Legend, RegionLayer } from './components';
import { useTheme } from '@grafana/ui';
import { LatLngTuple } from 'leaflet';

import './css/leaflet.css';
import './css/regionmap-panel.css';

interface Props extends PanelProps<RegionMapOptions> {}

export const RegionMap: React.FC<Props> = ({ options, data, fieldConfig, height, width }) => {
  const { initialZoom, mouseWheelZoom, showLegend } = options;
  const theme = useTheme();
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

  const centre: LatLngTuple = [0, 0];
  options.centre.split(',').forEach((value, index) => {
    const l = parseFloat(value);
    if (isNaN(l)) {
      return;
    }
    if (index > 1) {
      return;
    }
    centre[index] = l;
  });

  return (
    <MapContainer center={centre} zoom={initialZoom} scrollWheelZoom={mouseWheelZoom} style={{ height, width }}>
      <Legend fieldConfig={fieldConfig} visible={showLegend} />
      <RegionLayer options={options} data={data} />
      <TileLayer {...(theme.isLight ? tileServers.light : tileServers.dark)} />
    </MapContainer>
  );
};
