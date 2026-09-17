import React from 'react';
import { MapContainer } from 'react-leaflet';
import { PanelProps, applyFieldOverrides } from '@grafana/data';
import { RegionMapOptions } from 'types';

import { BaseMapLayer, Legend, RegionLayer } from './components';
import { useTheme } from '@grafana/ui';
import { LatLngTuple } from 'leaflet';

import './leaflet.css';
import './regionmap-panel.css';

interface Props extends PanelProps<RegionMapOptions> {}

export const RegionMap: React.FC<Props> = ({
  options,
  data,
  fieldConfig,
  height,
  width,
  replaceVariables,
  timeZone,
}) => {
  const { initialZoom, mouseWheelZoom, showLegend } = options;
  const theme = useTheme();

  // data.series is the raw query result - thresholds/unit only reach
  // field.display() once overrides are applied. Without this every region got
  // the base threshold colour regardless of its value.
  const dataWithOverrides = React.useMemo(
    () => ({
      ...data,
      series: applyFieldOverrides({
        data: data.series,
        fieldConfig,
        theme: theme as any,
        replaceVariables,
        timeZone,
      }),
    }),
    [data, fieldConfig, theme, replaceVariables, timeZone]
  );
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
      <RegionLayer options={options} data={dataWithOverrides} />
      <BaseMapLayer isLight={theme.isLight} />
    </MapContainer>
  );
};
