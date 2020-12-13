import { DataFrame,  ScopedVar } from '@grafana/data';
import { GeoJSON } from 'geojson';
import { Iregion, RegionMapOptions } from '../types';
import { Region } from './Region';


export class Regions {
  readonly _values: Iregion[];
  readonly _dataFieldName: string;
  readonly _metricFieldName: string;
  readonly _nameFieldName: string;
  readonly _selectedLinkedVariable?: ScopedVar;

  constructor(series: DataFrame[], options: RegionMapOptions, selectedLinkedVariable?: ScopedVar) {
    const { geoJSONField, metricField, nameField } = options;
    this._dataFieldName = geoJSONField || 'gejson';
    this._metricFieldName = metricField || 'metric';
    this._nameFieldName = nameField || 'name';
    this._selectedLinkedVariable = selectedLinkedVariable;

    this._values = this.parseFrames(series);
  }
  private parseFrames = (series: DataFrame[]): Iregion[] => {
    const regions: Iregion[] = [];

    series.forEach(series => {
      const metricField = series.fields.find(x => x.name === this._metricFieldName);
      const dataField = series.fields.find(x => x.name === this._dataFieldName);
      const nameField = series.fields.find(x => x.name === this._nameFieldName);

      for (let index = 0; index < series.length; index++) {
        const data: GeoJSON = JSON.parse(dataField?.values?.get(index)) || {};
        
        if (!data) {
          continue;
        }

        const name: string = nameField?.values?.get(index) || '';
        const metric: number = metricField?.values?.get(index) || 0;
        const isSelected = this._selectedLinkedVariable?.text === name;
        const region = new Region(
          index.toString(),
          name,
          metric,
          data,
          metricField,
          isSelected
        );

        regions.push(region);
      }
    });
    return regions;
  };

  get values(): Iregion[] {
    return this._values;
  }
}
