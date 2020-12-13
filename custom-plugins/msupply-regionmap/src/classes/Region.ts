import { DisplayValue, Field, Vector } from '@grafana/data';
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
    this._pathOptions = this.getPathOptions(displayField, isSelected);

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

  private getPathOptions(displayValue?: DisplayValue, isSelected?: boolean): PathOptions {
    if (!displayValue) {
      return {};
    }

    const color = isSelected ? 'grey' : displayValue.color;
    const fillColor = displayValue.color;
    const fillOpacity = isSelected ? 0.5 : 0.2;
    const weight = isSelected ? 5 : 3;

    return { color, fillColor, fillOpacity, weight };
  }
}
