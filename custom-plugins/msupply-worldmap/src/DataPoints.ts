import { DataFrame, Field } from '@grafana/data';
import { IDataPoint, WorldMapOptions } from './types';
import { DataPoint } from './DataPoint';
import { PathOptions } from 'leaflet';

interface ILimits {
  max: number;
  min: number;
}

export class DataPoints {
  readonly _dataPoints: IDataPoint[];
  readonly _maxCircleSize: number;
  readonly _metricFieldName: string;
  readonly _minCircleSize: number;
  readonly _latitudeFieldName: string;
  readonly _longitudeFieldName: string;
  readonly _nameFieldName: string;

  constructor(series: DataFrame[], options: WorldMapOptions) {
    this._latitudeFieldName = 'latitude';
    this._longitudeFieldName = 'longitude';
    this._maxCircleSize = options.maxCircleSize || 30;
    this._metricFieldName = 'metric';
    this._minCircleSize = options.minCircleSize || 2;
    this._nameFieldName = 'name';
    this._dataPoints = this.parseFrames(series);
  }
  private parseFrames = (series: DataFrame[]): IDataPoint[] => {
    const dataPoints: IDataPoint[] = [];

    series.forEach(series => {
      const metricField = series.fields.find(x => x.name === this._metricFieldName);
      const latitudeField = series.fields.find(x => x.name === this._latitudeFieldName);
      const longitudeField = series.fields.find(x => x.name === this._longitudeFieldName);
      const nameField = series.fields.find(x => x.name === this._nameFieldName);
      const limits = this.getLimits(metricField?.values?.toArray() || []);

      for (let index = 0; index < series.length; index++) {
        const latitude: number = latitudeField?.values?.get(index) || 0;
        const longitude: number = longitudeField?.values?.get(index) || 0;

        if (!latitude || !longitude) continue;
        const name: string = nameField?.values?.get(index) || '';
        const metric: number = metricField?.values?.get(index) || 0;
        const radius = this.calculateRadius(metric, limits);
        const pathOptions = this.getPathOptions(metric, metricField);
        const dataPoint = new DataPoint(index.toString(), name, latitude, longitude, radius, metric, pathOptions);

        dataPoints.push(dataPoint);
      }
    });
    return dataPoints;
  };

  get values(): IDataPoint[] {
    return this._dataPoints;
  }

  private calculateRadius(value: number, limits: ILimits): number {
    const radiusMinimum = this._minCircleSize;
    const radiusMaximum = this._maxCircleSize;

    if (limits.max === 0) {
      return radiusMaximum;
    }

    const dataFactor = (value - limits.min) / limits.max;
    const radiusSizeRange = radiusMaximum - radiusMinimum;

    return radiusSizeRange * dataFactor + radiusMinimum;
  }

  private getLimits(values: number[]): ILimits {
    return values.reduce(
      (acc, value) => ({
        max: Math.max(value, acc.max),
        min: Math.min(value, acc.min),
      }),
      { min: 0, max: 0 }
    );
  }

  private getPathOptions(value: number, metricField?: Field): PathOptions {
    const displayField = metricField?.display && metricField?.display(value);
    if (!displayField) return {};

    return { color: displayField.color };
  }
}
