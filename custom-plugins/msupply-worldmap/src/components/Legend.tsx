import { FieldConfigSource } from '@grafana/data';
import React from 'react';

const POSITION_CLASSES = {
  bottomleft: 'leaflet-bottom leaflet-left',
  bottomright: 'leaflet-bottom leaflet-right',
  topleft: 'leaflet-top leaflet-left',
  topright: 'leaflet-top leaflet-right',
};

interface LegendProps {
  fieldConfig: FieldConfigSource<any>;
  position?: 'bottomleft' | 'bottomright' | 'topleft' | 'topright';
  visible?: boolean;
}

export const Legend: React.FC<LegendProps> = ({ fieldConfig, position = 'bottomleft', visible = true }) => {
  const steps = fieldConfig.defaults?.thresholds?.steps || [];
  const positionClass = (position && POSITION_CLASSES[position]) || POSITION_CLASSES.bottomleft;
  const renderLabel = (step: any, index: number) => {
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

  if (!visible) return null;

  return (
    <div className={positionClass}>
      <div className="info legend leaflet-control">
        {steps.map((step, index) => (
          <div key={`${step.value}_${step.color}`} className="legend-item">
            <i style={{ background: step.color }} />
            {renderLabel(step, index)}
          </div>
        ))}
      </div>
    </div>
  );
};
