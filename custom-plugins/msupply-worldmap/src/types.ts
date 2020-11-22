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
export interface IMarker {
  center: LatLngTuple;
  pathOptions?: PathOptions;
  radius: number;
}

export interface IDataPoint {
  key: string;
  marker: IMarker;
  name: string;
  prefix?: string;
  suffix?: string;
  value: number;
}
