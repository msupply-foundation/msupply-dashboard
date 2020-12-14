import React from 'react';
import { GeoJSON, Tooltip } from 'react-leaflet';
import { PanelData, ScopedVar, VariableModel } from '@grafana/data';
import { getLocationSrv, getTemplateSrv } from '@grafana/runtime';
import { Iregion, RegionMapOptions } from '../types';

import { Regions } from '../classes/Regions';

interface RegionLayerProps {
  data: PanelData;
  options: RegionMapOptions;
}

interface ScopedVariable extends VariableModel {
  options: ScopedVar[];
}
export const RegionLayer: React.FC<RegionLayerProps> = ({ options, data }) => {
  const { decimals, labelTemplate, linkedVariable } = options;

  const setVariable = (value: string) => {
    if (!linkedVariable) {
      return;
    }
    getLocationSrv().update({
      query: {
        [`var-${linkedVariable}`]: value,
      },
      partial: true,
      replace: true,
    });
  };

  const renderLabel = (region: Iregion) => {
    const { name, prefix = '', suffix = '', value } = region;
    const displayValue = value.toFixed(decimals);

    return !!labelTemplate
      ? labelTemplate
          .replace('${name}', name)
          .replace('${value}', displayValue)
          .replace('${unit}', suffix)
      : `${prefix}${name}: ${displayValue}${suffix}`.trim();
  };

  const variables = getTemplateSrv().getVariables() as ScopedVariable[];
  const selectedLinkedVariable = variables.find(v => v.name === linkedVariable)?.options.find(o => o.selected);
  const regions = new Regions(data.series, options, selectedLinkedVariable);

  return (
    <>
      {regions.values.map(region => (
        <GeoJSON
          data={region.data}
          pathOptions={region.pathOptions}
          eventHandlers={{
            click: () => setVariable(region.name),
          }}
        >
          <Tooltip>{renderLabel(region)}</Tooltip>
        </GeoJSON>
      ))}
    </>
  );
};
