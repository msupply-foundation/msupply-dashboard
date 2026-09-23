import { DisplayValue, Field, ThresholdsConfig, Vector, getActiveThreshold } from '@grafana/data';
import { PathOptions } from 'leaflet';
import { GeoJSON } from 'geojson';
import { Iregion } from '../types';

export class Region implements Iregion {
  readonly _data: GeoJSON;
  readonly _key: string;
  readonly _name: string;
  readonly _pathOptions: PathOptions;
  readonly _prefix?: string;
  readonly _suffix?: string;
  readonly _value: number;

  constructor(
    key: string,
    name: string,
    value: number,
    data: GeoJSON,
    dataField?: Field<any, Vector<any>>,
    isSelected?: boolean
  ) {
    const displayField = dataField?.display && dataField?.display(value);
    this._pathOptions = this.getPathOptions(displayField, isSelected, value, dataField?.config?.thresholds);

    this._key = key;
    this._name = name;
    this._data = data;
    this._prefix = displayField?.prefix;
    this._suffix = displayField?.suffix;
    this._value = value;
  }

  get data(): GeoJSON {
    return this._data;
  }

  get key(): string {
    return this._key;
  }

  get pathOptions(): PathOptions {
    return this._pathOptions;
  }

  get name(): string {
    return this._name;
  }

  get prefix(): string {
    return this._prefix || '';
  }

  get suffix(): string {
    return this._suffix || '';
  }

  get value(): number {
    return this._value;
  }

  private getPathOptions(
    displayValue?: DisplayValue,
    isSelected?: boolean,
    value?: number,
    thresholds?: ThresholdsConfig
  ): PathOptions {
    // Resolve the threshold colour from the value directly. Grafana only
    // attaches a threshold colour to display() output for *numeric* fields,
    // and CSV/JSON datasources commonly type numeric columns as strings - so
    // relying on displayValue.color alone left every region on the base
    // colour. Falls back to display()'s colour when there are no thresholds.
    const thresholdColor =
      thresholds && value !== undefined && Number.isFinite(value)
        ? getActiveThreshold(value, thresholds.steps)?.color
        : undefined;

    const color = thresholdColor ?? displayValue?.color;

    if (!color) {
      return {};
    }

    const fillOpacity = isSelected ? 0.5 : 0.2;
    const weight = isSelected ? 3 : 1;

    return { color, fillColor: color, fillOpacity, weight };
  }
}
