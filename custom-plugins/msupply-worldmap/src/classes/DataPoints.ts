import { DataFrame, ScopedVar } from '@grafana/data';
import { IDataPoint, WorldMapOptions } from '../types';
import { DataPoint } from './DataPoint';

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
  readonly _selectedLinkedVariable?: ScopedVar;

  constructor(series: DataFrame[], options: WorldMapOptions, selectedLinkedVariable?: ScopedVar) {
    const { latitudeField, longitudeField, maxCircleSize, metricField, minCircleSize, nameField } = options;
    this._latitudeFieldName = latitudeField || 'latitude';
    this._longitudeFieldName = longitudeField || 'longitude';
    this._maxCircleSize = maxCircleSize || 30;
    this._metricFieldName = metricField || 'metric';
    this._minCircleSize = minCircleSize || 2;
    this._nameFieldName = nameField || 'name';
    this._selectedLinkedVariable = selectedLinkedVariable;

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
        const isSelected = this._selectedLinkedVariable?.text === name;
        const dataPoint = new DataPoint(
          index.toString(),
          name,
          latitude,
          longitude,
          radius,
          metric,
          metricField,
          isSelected
        );

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
}
