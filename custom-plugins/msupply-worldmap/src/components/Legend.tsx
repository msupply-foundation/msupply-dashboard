import * as grafanaData from '@grafana/data';
import { FieldConfigSource, Threshold } from '@grafana/data';
import { config } from '@grafana/runtime';
import { useTheme } from '@grafana/ui';
import React from 'react';

// getColorForTheme no longer exists in @grafana/data on current Grafana
// versions, and calling it crashed the panel whenever the legend was shown.
// Use theme2.visualization.getColorByName where it exists (Grafana 8 and
// later), fall back to getColorForTheme on Grafana 7, and otherwise use the
// threshold colour as it is.
const resolveColor = (color: string, theme: any): string => {
  const visualization = (config as any).theme2?.visualization;
  if (visualization && typeof visualization.getColorByName === 'function') {
    return visualization.getColorByName(color);
  }
  const legacy = (grafanaData as any).getColorForTheme;
  if (typeof legacy === 'function') {
    return legacy(color, theme);
  }
  return color;
};

const POSITION_CLASSES = {
  bottomleft: 'leaflet-bottom leaflet-left',
  bottomright: 'leaflet-bottom leaflet-right',
  topleft: 'leaflet-top leaflet-left',
  topright: 'leaflet-top leaflet-right',
};

interface LegendProps {
  fieldConfig: FieldConfigSource;
  position?: 'bottomleft' | 'bottomright' | 'topleft' | 'topright';
  visible?: boolean;
}

export const Legend: React.FC<LegendProps> = ({ fieldConfig, position = 'bottomleft', visible = true }) => {
  const theme = useTheme();
  const steps = fieldConfig.defaults?.thresholds?.steps || [];
  const positionClass = (position && POSITION_CLASSES[position]) || POSITION_CLASSES.bottomleft;
  const renderLabel = (step: Threshold, index: number) => {
    const nextStep = steps[index + 1];

    switch (index) {
      case 0:
        return `< ${nextStep.value}`;
      case steps.length - 1:
        return `${step.value}+`;
      default:
        return `${step.value}–${nextStep.value}`;
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <div className={positionClass}>
      <div className="info legend leaflet-control">
        {steps.map((step, index) => (
          <div key={`${step.value}_${step.color}`} className="legend-item">
            <i style={{ background: resolveColor(step.color, theme) }} />
            {renderLabel(step, index)}
          </div>
        ))}
      </div>
    </div>
  );
};
