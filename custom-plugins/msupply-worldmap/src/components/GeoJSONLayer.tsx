import React from 'react';
import { GeoJSON } from 'react-leaflet';
import { PathOptions } from 'leaflet';

export interface GeoJSONLayerProps {
  geoJSON?: string;
  color?: string;
}

export const GeoJSONLayer: React.FC<GeoJSONLayerProps> = ({ geoJSON, color }) => {
  if (!geoJSON) return null;

  const geoJSONData = JSON.parse(geoJSON);
  const pathOptions = !!color ? ({ color } as PathOptions) : undefined;

  return <GeoJSON data={geoJSONData} pathOptions={pathOptions} />;
};
