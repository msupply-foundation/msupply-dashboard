import React from 'react';
import { CircleMarker, GeoJSON, MapContainer, Tooltip, TileLayer } from 'react-leaflet';
import { PanelProps } from '@grafana/data';
import { getLocationSrv, getTemplateSrv } from '@grafana/runtime';
import { IDataPoint, WorldMapOptions } from 'types';

import { DataPoints } from './DataPoints';
import { useTheme } from '@grafana/ui';
import { LatLngTuple, PathOptions } from 'leaflet';

import './css/leaflet.css';
import './css/worldmap-panel.css';

interface Props extends PanelProps<WorldMapOptions> {}

export const WorldMap: React.FC<Props> = ({ options, data, width, height }) => {
  const {
    decimals,
    geoJSON,
    geoJSONOutlineColour,
    initialZoom,
    labelTemplate,
    linkedVariable,
    mouseWheelZoom,
  } = options;
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

  const renderLabel = (dataPoint: IDataPoint) => {
    const { name, prefix = '', suffix = '', value } = dataPoint;
    const displayValue = value.toFixed(decimals);

    return !!labelTemplate
      ? labelTemplate
          .replace('${name}', name)
          .replace('${value}', displayValue)
          .replace('${unit}', suffix)
      : `${prefix}${name}: ${displayValue}${suffix}`.trim();
  };

  const renderGeoJSONLayer = () => {
    if (!geoJSON) return null;
    const geoJSONData = JSON.parse(geoJSON);
    const pathOptions = !!geoJSONOutlineColour ? ({ color: geoJSONOutlineColour } as PathOptions) : undefined;

    return <GeoJSON data={geoJSONData} pathOptions={pathOptions} />;
  };

  const variables = getTemplateSrv().getVariables();
  const selectedLinkedVariable = variables.find(v => v.name === linkedVariable)?.options.find(o => o.selected);
  const dataPoints = new DataPoints(data.series, options, selectedLinkedVariable);

  return (
    <MapContainer center={centre} zoom={initialZoom} scrollWheelZoom={mouseWheelZoom} style={{ height, width }}>
      <TileLayer {...(theme.isLight ? tileServers.light : tileServers.dark)} />
      {renderGeoJSONLayer()}
      {dataPoints.values.map(dataPoint => (
        <CircleMarker
          {...dataPoint.marker}
          eventHandlers={{
            click: () => setVariable(dataPoint.name),
          }}
        >
          <Tooltip>{renderLabel(dataPoint)}</Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};
