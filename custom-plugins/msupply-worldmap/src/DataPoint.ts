import { PathOptions } from 'leaflet';
import { IDataPoint, IMarker } from './types';

export class DataPoint implements IDataPoint {
  readonly _key: string;
  readonly _name: string;
  readonly _marker: IMarker;
  readonly _value: number;

  constructor(
    key: string,
    name: string,
    latitude: number,
    longitude: number,
    metric: number,
    value: number,
    pathOptions: PathOptions
  ) {
    this._key = key;
    this._name = name;
    this._marker = this.createMarker(latitude, longitude, metric, pathOptions);
    this._value = value;
  }

  get key(): string {
    return this._key;
  }

  get name(): string {
    return this._name;
  }

  get marker(): IMarker {
    return this._marker;
  }

  get value(): number {
      return this._value;
  }

  private createMarker(latitude: number, longitude: number, radius: number, pathOptions: PathOptions): IMarker {
    return { center: [latitude, longitude], radius, pathOptions };
  }
}
