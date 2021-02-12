import { TableSortByFieldState } from '@grafana/ui';

export interface Options {
  frameIndex: number;
  showHeader: boolean;
  sortBy?: TableSortByFieldState[];
}

export interface TableSortBy {
  displayName: string;
  desc: boolean;
}

export interface CustomFieldConfig {
  width: number;
  displayMode: string;
}

export type FieldTextAlignment = 'auto' | 'left' | 'right' | 'center';

export interface TableFieldOptions {
  width: number;
  align: FieldTextAlignment;
  displayMode: TableCellDisplayMode;
  hidden?: boolean;
}

export enum TableCellDisplayMode {
  Auto = 'auto',
  ColorText = 'color-text',
  ColorBackground = 'color-background',
  GradientGauge = 'gradient-gauge',
  LcdGauge = 'lcd-gauge',
  JSONView = 'json-view',
  BasicGauge = 'basic',
  Image = 'image',
}
