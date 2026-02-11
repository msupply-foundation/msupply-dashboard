import React from "react";
import { PanelProps } from "@grafana/data";
import { Table } from "@grafana/ui";
import ExcelJS from "exceljs";
import { saveAs } from 'file-saver';
import { getTemplateSrv } from "@grafana/runtime";

interface Options {
  headerText?: string;
  subHeaderText?: string;
}

export const TablePanel: React.FC<PanelProps<Options>> = ({
  data,
  options,
  width,
  height,
}) => {
  const frame = data.series?.[0];

  if (!frame) {
    return <div>No data</div>;
  }

  const columns = frame.fields.map((f) => f.name);

  // ---------- EXPORT EXCEL FUNCTION ----------
  const exportExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Report");

    const resolvedHeader = options.headerText
      ? getTemplateSrv().replace(options.headerText)
      : "";

    const resolvedSubHeader = options.subHeaderText
      ? getTemplateSrv().replace(options.subHeaderText)
      : "";

    const columnCount = columns.length;

    // ---------- MAIN HEADER ----------
    if (options.headerText) {
      sheet.mergeCells(1, 1, 1, columnCount);
      const headerCell = sheet.getCell(1, 1);
      headerCell.value = resolvedHeader;
      headerCell.font = { bold: true, size: 16 };
      headerCell.alignment = { horizontal: "center" };
    }

    // ---------- SUB HEADER ----------
    if (options.subHeaderText) {
      sheet.mergeCells(2, 1, 2, columnCount); // FIXED
      const subHeaderCell = sheet.getCell(2, 1);
      subHeaderCell.value = resolvedSubHeader;
      subHeaderCell.font = { size: 12 };
      subHeaderCell.alignment = { horizontal: "center" };
    }

    // ---------- EMPTY ROW ----------
    const startRow = 4;

    // ---------- COLUMN HEADERS ----------
    const headerRow = sheet.getRow(startRow);
    headerRow.values = columns;
    headerRow.height = 20;

    headerRow.eachCell((cell) => {
      cell.font = { bold: true, size: 12 };
      cell.alignment = { horizontal: "center", vertical: "middle" };

      cell.border = {
        top: { style: "thin" },
        bottom: { style: "thin" },
        left: { style: "thin" },
        right: { style: "thin" },
      };
    });

    // Freeze header row
    sheet.views = [{ state: "frozen", ySplit: startRow }];

    // ---------- DATA ROWS ----------
    for (let i = 0; i < frame.length; i++) {
      const row = frame.fields.map((f) => {
        const v = f.values;
        return Array.isArray(v) ? v[i] : v?.get?.(i);
      });
      sheet.addRow(row);
    }

    // ---------- AUTO WIDTH ----------
    sheet.columns.forEach((col, index) => {

      const values = frame.fields[index].values;
      let fieldValues: any[] = [];
      if (Array.isArray(values)) {
        fieldValues = values;
        } else if (values && typeof (values as any).get === "function") {
        const vector = values as { get: (i: number) => any; length: number };
        fieldValues = Array.from({ length: vector.length }, (_, i) => vector.get(i));
        }

      const maxLength = [
        resolvedHeader.length || 0,
        resolvedSubHeader.length || 0,
        columns[index]?.length || 0,
        ...fieldValues,
      ].reduce(
        (max, val) =>
          Math.max(max, val ? val.toString().length : 0),
        10
      );

      col.width = Math.min(Math.max(maxLength + 2, 10), 50);
    });

    // ---------- TIMESTAMP ----------
    const now = new Date();
    const timestamp = now
      .toISOString()
      .replace(/[:]/g, "-")
      .replace(/\..+/, "");

    // ---------- SAVE FILE ----------
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), `report_${timestamp}.xlsx`);
  };

  // ---------- RENDER PANEL ----------
  return (
    <div style={{ width, height, display: "flex", flexDirection: "column" }}>
      <div style={{ flexGrow: 1 }}>
        <Table data={frame} width={width} height={height - 50} />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: 6 }}>
        <button onClick={exportExcel}>Export Excel</button>
      </div>
    </div>
  );
};
