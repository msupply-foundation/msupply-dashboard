import { LatLngTuple } from 'leaflet';

export interface WorldMapOptions {
  data: any[];
  stickyLabels: boolean;
  minCircleSize: string;
  maxCircleSize: string;
  initialZoom: number;
  centre: string;
  showLegend: boolean;
  mouseWheelZoom: boolean;
  labeltemplate: string;
  geoJSONOutlineColour: string;
}

export interface IDataPoint {
  key: string;
  name: string;
  marker: {
    center: LatLngTuple;
    radius: number;
    pathOptions?: {
      color: string;
    };
  };
}
