import React, { CSSProperties, FC } from 'react';
import { Cell, ColumnInstance, Row } from 'react-table';
import { Field } from '@grafana/data';
import { TableStyles } from '@grafana/ui/components/Table/styles';

export interface TableCellProps {
  cell: Cell;
  cellProps?: { style?: CSSProperties; onClick?: () => null };
  column: ColumnInstance<any>;
  field: Field;
  row: Row<any>;
  tableStyles: TableStyles;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onCellClicked?: React.MouseEventHandler<HTMLElement>;
}

export const TableCell: FC<TableCellProps> = ({ cell, field, tableStyles, onCellClicked }) => {
  const cellProps = cell.getCellProps();

  if (!field.display) {
    return null;
  }

  if (cellProps.style) {
    cellProps.style.minWidth = cellProps.style.width;
    cellProps.style.justifyContent = (cell.column as any).justifyContent;
  }

  return (
    <>
      {cell.render('Cell', {
        field,
        tableStyles,
        cellProps,
        onCellClicked,
        onClick: () => console.warn('click'),
      })}
    </>
  );
};
