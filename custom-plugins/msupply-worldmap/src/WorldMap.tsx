import React from 'react';
import { MapContainer, Pane, TileLayer } from 'react-leaflet';
import { PanelProps } from '@grafana/data';
import { WorldMapOptions } from 'types';

import { DataPointLayer, GeoJSONLayer, Legend } from './components';
import { useTheme } from '@grafana/ui';
import { LatLngTuple } from 'leaflet';
import { tileServers } from './tiles';

import './leaflet.css';
import './worldmap-panel.css';

interface Props extends PanelProps<WorldMapOptions> {}

export const WorldMap: React.FC<Props> = ({ options, data, fieldConfig, height, width }) => {
  const { geoJSON, geoJSONOutlineColour, initialZoom, mouseWheelZoom, showLegend } = options;
  const theme = useTheme();
  const tiles = theme.isLight ? tileServers.light : tileServers.dark;
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
      <DataPointLayer options={options} data={data} />
      <Pane name="background-pane" style={{ zIndex: 1 }}>
        <TileLayer {...tiles.base} />
        <TileLayer {...tiles.labels} />
        <GeoJSONLayer geoJSON={geoJSON} color={geoJSONOutlineColour} />
      </Pane>
    </MapContainer>
  );
};
