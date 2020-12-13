import { GeoJsonObject} from 'geojson';
import { PathOptions } from 'leaflet';

export interface RegionMapOptions {
  centre: string;
  data: any[];
  decimals: number;
  geoJSONField: string;
  initialZoom: number;
  labelTemplate: string;
  linkedVariable: string;
  metricField: string;
  mouseWheelZoom: boolean;
  nameField: string;
  showLegend: boolean;
}

export interface Iregion {
  data: GeoJsonObject;
  key: string;
  name: string;
  pathOptions: PathOptions;
  prefix?: string;
  suffix?: string;
  value: number;
}
