import { DisplayValue, Field, Vector } from '@grafana/data';
import { PathOptions } from 'leaflet';
import { IDataPoint, IMarker } from '../types';

export class DataPoint implements IDataPoint {
  readonly _key: string;
  readonly _name: string;
  readonly _marker: IMarker;
  readonly _prefix?: string;
  readonly _suffix?: string;
  readonly _value: number;

  constructor(
    key: string,
    name: string,
    latitude: number,
    longitude: number,
    radius: number,
    value: number,
    dataField?: Field<any, Vector<any>>,
    isSelected?: boolean
  ) {
    const displayField = dataField?.display && dataField?.display(value);
    const pathOptions = this.getPathOptions(displayField, isSelected);
    const adjustedRadius = isSelected ? radius * 1.5 : radius;

    this._key = key;
    this._name = name;
    this._marker = this.createMarker(latitude, longitude, adjustedRadius, pathOptions);
    this._prefix = displayField?.prefix;
    this._suffix = displayField?.suffix;
    this._value = value;
  }

  get key(): string {
    return this._key;
  }

  get marker(): IMarker {
    return this._marker;
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

  private createMarker(latitude: number, longitude: number, radius: number, pathOptions: PathOptions): IMarker {
    return { center: [latitude, longitude], radius, pathOptions };
  }

  private getPathOptions(displayValue?: DisplayValue, isSelected?: boolean): PathOptions {
    if (!displayValue) return {};

    const color = isSelected ? 'grey' : displayValue.color;
    const fillColor = displayValue.color;
    const fillOpacity = isSelected ? 0.5 : 0.2;
    const weight = isSelected ? 5 : 3;

    return { color, fillColor, fillOpacity, weight };
  }
}
