import React, { CSSProperties, FC } from 'react';
import { Cell, ColumnInstance, Row } from 'react-table';
import { Field } from '@grafana/data';
import { TableStyles } from '@grafana/ui/components/Table/styles';

export interface TableCellProps {
  cell: Cell;
  cellProps?: CellProps;
  column: ColumnInstance<any>;
  field: Field;
  row: Row<any>;
  tableStyles: TableStyles;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

interface CellProps {
  style?: CSSProperties;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export const TableCell: FC<TableCellProps> = ({ cell, field, onClick, tableStyles }) => {
  if (!field.display) {
    return null;
  }
  const cellProps: CellProps = { ...cell.getCellProps(), onClick };

  if (cellProps.style) {
    cellProps.style.minWidth = cellProps.style.width;
    cellProps.style.justifyContent = (cell.column as any).justifyContent;
  }

  if (cellProps.onClick) {
    if (field.config?.custom?.linkedVariable) {
      cellProps.style = { ...cellProps.style, cursor: 'pointer' };
    }
  }

  return (
    <>
      {cell.render('Cell', {
        field,
        tableStyles,
        cellProps,
      })}
    </>
  );
};
