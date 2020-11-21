import { LatLngTuple, PathOptions } from 'leaflet';

export interface WorldMapOptions {
  centre: string;
  data: any[];
  geoJSON: string;
  geoJSONOutlineColour: string;
  initialZoom: number;
  labelTemplate: string;
  linkedVariable: string;
  maxCircleSize: number;
  minCircleSize: number;
  mouseWheelZoom: boolean;
  showLegend: boolean;
  stickyLabels: boolean;
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
  numeric: number;
  string: string;
  value: number;
}
