import { Column, Row } from 'react-table';
import memoizeOne from 'memoize-one';
import { DataFrame, Field, FieldType, getFieldDisplayName, SelectableValue } from '@grafana/data';
import { TableCellDisplayMode, TableFieldOptions } from '../types';
import { BarGaugeCell, DefaultCell, ImageCell, JSONViewCell } from '../components';

type ContentPosition = 'center' | 'end' | 'flex-end' | 'flex-start' | 'start';

export function filterByValue(rows: Row[], id: string, filterValues?: SelectableValue[]) {
  if (rows.length === 0) {
    return rows;
  }

  if (!filterValues) {
    return rows;
  }

  return rows.filter((row) => {
    if (!row.values.hasOwnProperty(id)) {
      return false;
    }

    const value = row.values[id];
    return filterValues.find((filter) => filter.value === value) !== undefined;
  });
}

export function getColumns(data: DataFrame, availableWidth: number, columnMinWidth: number): Column[] {
  const columns: any[] = [];
  let fieldCountWithoutWidth = data.fields.length;

  for (const [fieldIndex, field] of data.fields.entries()) {
    const fieldTableOptions = (field.config.custom || {}) as TableFieldOptions;

    if (fieldTableOptions.hidden) {
      continue;
    }

    if (fieldTableOptions.width) {
      availableWidth -= fieldTableOptions.width;
      fieldCountWithoutWidth -= 1;
    }

    const selectSortType = (type: FieldType): string => {
      switch (type) {
        case FieldType.number:
        case FieldType.time:
          return 'basic';
        default:
          return 'alphanumeric';
      }
    };

    const Cell = getCellComponent(fieldTableOptions.displayMode, field);
    columns.push({
      Cell,
      id: fieldIndex.toString(),
      Header: getFieldDisplayName(field, data),
      accessor: (row: any, i: number) => {
        return field.values.get(i);
      },
      sortType: selectSortType(field.type),
      width: fieldTableOptions.width,
      minWidth: 50,
      filter: memoizeOne(filterByValue),
      justifyContent: getTextAlign(field),
    });
  }

  // divide up the rest of the space
  const sharedWidth = availableWidth / fieldCountWithoutWidth;
  for (const column of columns) {
    if (!column.width) {
      column.width = Math.max(sharedWidth, columnMinWidth);
    }
  }

  return columns;
}

export function getTextAlign(field?: Field): ContentPosition {
  if (!field) {
    return 'flex-start';
  }

  if (field.config.custom) {
    const custom = field.config.custom as TableFieldOptions;

    switch (custom.align) {
      case 'right':
        return 'flex-end';
      case 'left':
        return 'flex-start';
      case 'center':
        return 'center';
    }
  }

  if (field.type === FieldType.number) {
    return 'flex-end';
  }

  return 'flex-start';
}

function getCellComponent(displayMode: TableCellDisplayMode, field: Field) {
  switch (displayMode) {
    case TableCellDisplayMode.ColorText:
    case TableCellDisplayMode.ColorBackground:
      return DefaultCell;
    case TableCellDisplayMode.Image:
      return ImageCell;
    case TableCellDisplayMode.LcdGauge:
    case TableCellDisplayMode.BasicGauge:
    case TableCellDisplayMode.GradientGauge:
      return BarGaugeCell;
    case TableCellDisplayMode.JSONView:
      return JSONViewCell;
  }

  // Default or Auto
  if (field.type === FieldType.other) {
    return JSONViewCell;
  }
  return DefaultCell;
}
