import { LatLngTuple, PathOptions } from 'leaflet';

export interface WorldMapOptions {
  centre: string;
  data: any[];
  decimals: number;
  geoJSON: string;
  geoJSONOutlineColour: string;
  initialZoom: number;
  labelTemplate: string;
  latitudeField: string;
  linkedVariable: string;
  longitudeField: string;
  maxCircleSize: number;
  metricField: string;
  minCircleSize: number;
  mouseWheelZoom: boolean;
  nameField: string;
  showLegend: boolean;
}
export interface Imarker {
  center: LatLngTuple;
  pathOptions?: PathOptions;
  radius: number;
}

export interface IdataPoint {
  key: string;
  marker: Imarker;
  name: string;
  prefix?: string;
  suffix?: string;
  value: number;
}
