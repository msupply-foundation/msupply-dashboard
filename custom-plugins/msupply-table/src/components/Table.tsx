import React, { FC, memo, useCallback, useMemo } from 'react';
import { DataFrame, Field, getFieldDisplayName, Vector } from '@grafana/data';
import {
  Cell,
  Column,
  HeaderGroup,
  Row,
  useAbsoluteLayout,
  useFilters,
  UseFiltersState,
  useResizeColumns,
  UseResizeColumnsState,
  useSortBy,
  UseSortByState,
  useTable,
} from 'react-table';
import { FixedSizeList } from 'react-window';
import { CustomScrollbar, Icon, useTheme } from '@grafana/ui';
import { getLocationSrv } from '@grafana/runtime';

import {
  TableColumnResizeActionCallback,
  TableFilterActionCallback,
  TableSortByActionCallback,
  TableSortByFieldState,
} from '@grafana/ui/components/Table/types';
import { getTableStyles, TableStyles } from '../styles';
import { getColumns } from '../utils';
import { TableCell } from './TableCell';

const COLUMN_MIN_WIDTH = 150;
type FieldAction = (row: Row<object>) => void;

export interface TableProps {
  ariaLabel?: string;
  data: DataFrame;
  width: number;
  height: number;
  /** Minimal column width specified in pixels */
  columnMinWidth?: number;
  noHeader?: boolean;
  resizable?: boolean;
  initialSortBy?: TableSortByFieldState[];
  onColumnResize?: TableColumnResizeActionCallback;
  onSortByChange?: TableSortByActionCallback;
  onCellFilterAdded?: TableFilterActionCallback;
}

interface ReactTableInternalState extends UseResizeColumnsState<{}>, UseSortByState<{}>, UseFiltersState<{}> {}

function useTableStateReducer(props: TableProps) {
  return useCallback(
    (newState: ReactTableInternalState, action: any) => {
      switch (action.type) {
        case 'columnDoneResizing':
          if (props.onColumnResize) {
            const { data } = props;
            const info = (newState.columnResizing.headerIdWidths as any)[0];
            const columnIdString = info[0];
            const fieldIndex = parseInt(columnIdString, 10);
            const width = Math.round(newState.columnResizing.columnWidths[columnIdString] as number);

            const field = data.fields[fieldIndex];
            if (!field) {
              return newState;
            }

            const fieldDisplayName = getFieldDisplayName(field, data);
            props.onColumnResize(fieldDisplayName, width);
          }
        case 'toggleSortBy':
          if (props.onSortByChange) {
            const { data } = props;
            const sortByFields: TableSortByFieldState[] = [];

            for (const sortItem of newState.sortBy) {
              const field = data.fields[parseInt(sortItem.id, 10)];
              if (!field) {
                continue;
              }

              sortByFields.push({
                displayName: getFieldDisplayName(field, data),
                desc: sortItem.desc,
              });
            }

            props.onSortByChange(sortByFields);
          }
          break;
      }

      return newState;
    },
    [props]
  );
}

function getInitialState(props: TableProps, columns: Column[]): Partial<ReactTableInternalState> {
  const state: Partial<ReactTableInternalState> = {};

  if (props.initialSortBy) {
    state.sortBy = [];

    for (const sortBy of props.initialSortBy) {
      for (const col of columns) {
        if (col.Header === sortBy.displayName) {
          state.sortBy.push({ id: col.id as string, desc: sortBy.desc });
        }
      }
    }
  }

  return state;
}

export const Table: FC<TableProps> = memo((props: TableProps) => {
  const { ariaLabel, data, height, width, columnMinWidth = COLUMN_MIN_WIDTH, noHeader, resizable = true } = props;
  const theme = useTheme();
  const tableStyles = getTableStyles(theme);

  // React table data array. This data acts just like a dummy array to let react-table know how many rows exist
  // The cells use the field to look up values
  const memoizedData = useMemo(() => {
    if (!data.fields.length) {
      return [];
    }
    // as we only use this to fake the length of our data set for react-table we need to make sure we always return an array
    // filled with values at each index otherwise we'll end up trying to call accessRow for null|undefined value in
    // https://github.com/tannerlinsley/react-table/blob/7be2fc9d8b5e223fc998af88865ae86a88792fdb/src/hooks/useTable.js#L585
    return Array(data.length).fill(0);
  }, [data]);

  // React-table column definitions
  const memoizedColumns = useMemo(() => getColumns(data, width, columnMinWidth), [data, width, columnMinWidth]);

  // Internal react table state reducer
  const stateReducer = useTableStateReducer(props);

  const options: any = useMemo(
    () => ({
      columns: memoizedColumns,
      data: memoizedData,
      disableResizing: !resizable,
      stateReducer: stateReducer,
      initialState: getInitialState(props, memoizedColumns),
    }),
    [props, memoizedColumns, memoizedData, stateReducer, resizable]
  );

  const { getTableProps, headerGroups, rows, prepareRow, totalColumnsWidth } = useTable(
    options,
    useFilters,
    useSortBy,
    useAbsoluteLayout,
    useResizeColumns
  );

  const setVariable = (value: string | number, field: Field<any, Vector>) => {
    const linkedVariable = field.config?.custom?.linkedVariable;

    if (!linkedVariable || !value) {
      return;
    }

    getLocationSrv().update({
      query: {
        [`var-${linkedVariable}`]: value,
      },
      partial: true,
      replace: true,
    });
  };

  const RenderRow = React.useCallback(
    ({ index, style }) => {
      const row = rows[index];
      prepareRow(row);
      return (
        <div {...row.getRowProps({ style })} className={tableStyles.row}>
          {row.cells.map((cell: Cell, index: number) => {
            const field = data.fields[index];
            return (
              <TableCell
                key={index}
                field={field}
                tableStyles={tableStyles}
                cell={cell}
                row={row}
                column={cell.column}
                onClick={() => setVariable(cell.value, field)}
              />
            );
          })}
        </div>
      );
    },
    [prepareRow, rows, data.fields, tableStyles]
  );

  const headerHeight = noHeader ? 0 : tableStyles.cellHeight;

  return (
    <div {...getTableProps()} className={tableStyles.table} aria-label={ariaLabel}>
      <CustomScrollbar hideVerticalTrack={true}>
        <div style={{ width: `${totalColumnsWidth}px` }}>
          {!noHeader && (
            <div>
              {headerGroups.map((headerGroup: HeaderGroup) => {
                return (
                  <div className={tableStyles.thead} {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column: Column, index: number) =>
                      renderHeaderCell(column, tableStyles, data.fields[index])
                    )}
                  </div>
                );
              })}
            </div>
          )}
          <FixedSizeList
            height={height - headerHeight}
            itemCount={rows.length}
            itemSize={tableStyles.rowHeight}
            width={'100%'}
            style={{ overflow: 'hidden auto' }}
          >
            {RenderRow}
          </FixedSizeList>
        </div>
      </CustomScrollbar>
    </div>
  );
});

Table.displayName = 'Table';

function renderHeaderCell(column: any, tableStyles: TableStyles, field?: Field) {
  const headerProps = column.getHeaderProps();

  if (column.canResize) {
    headerProps.style.userSelect = column.isResizing ? 'none' : 'auto'; // disables selecting text while resizing
  }

  headerProps.style.position = 'absolute';
  headerProps.style.justifyContent = (column as any).justifyContent;

  return (
    <div className={tableStyles.headerCell} {...headerProps}>
      {column.canSort && (
        <>
          <div
            {...column.getSortByToggleProps()}
            className={tableStyles.headerCellLabel}
            title={column.render('Header')}
          >
            <div>{column.render('Header')}</div>
            <div>
              {column.isSorted && (column.isSortedDesc ? <Icon name="arrow-down" /> : <Icon name="arrow-up" />)}
            </div>
          </div>
        </>
      )}
      {!column.canSort && column.render('Header')}
      {column.canResize && <div {...column.getResizerProps()} className={tableStyles.resizeHandle} />}
    </div>
  );
}
