import React from 'react';
import { VictoryTooltipProps, VictoryBrushContainerProps, DomainPropType } from 'victory';

export interface SimpleOptions {
  text: string;
}

export const defaults: SimpleOptions = {
  text: 'The default text!',
};

export interface VictoryTooltipPropsEx extends VictoryTooltipProps {
  /**
   * The constrainToVisibleArea prop determines whether to coerce tooltips so that they fit within the visible area of the chart.
   * When this prop is set to true, tooltip pointers will still point to the correct data point,
   * but the center of the tooltip will be shifted to fit within the overall width and height of the svg Victory renders.
   */
  constrainToVisibleArea?: boolean;
}

export interface VictoryBrushContainerPropsEx extends VictoryBrushContainerProps {
  /**
   * The optional onBrushDomainChangeEnd prop accepts an function to be called only on mouse up events.
   * The function accepts the parameters of domain (the updated domain), and props (the props used by VictoryBrushContainer).
   */
  onBrushDomainChangeEnd?: (domain: DomainPropType, props: VictoryBrushContainerProps) => void;
}

export class VictoryTooltipEx extends React.Component<VictoryTooltipPropsEx, any> {}
export class VictoryBrushContainerEx extends React.Component<VictoryBrushContainerPropsEx, any> {}
