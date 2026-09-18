import React from "react";
import { FieldType, PanelProps, applyFieldOverrides, getFieldDisplayName } from "@grafana/data";
import { Table, useTheme2 } from "@grafana/ui";
import ExcelJS from "exceljs";
import { saveAs } from 'file-saver';
import { getTemplateSrv } from "@grafana/runtime";
import { Options } from "../types";

export const TablePanel: React.FC<PanelProps<Options>> = ({
  data,
  options,
  width,
  height,
  title,
  fieldConfig,
  replaceVariables,
  timeZone,
}) => {
  const theme = useTheme2();

  // data.series is the raw query result - field config (units, decimals, value
  // mappings, thresholds, cell display mode) is only attached once overrides
  // are applied. Without this the table renders plain text and cell colouring
  // from thresholds never appears.
  const frames = React.useMemo(
    () =>
      applyFieldOverrides({
        data: data.series,
        fieldConfig,
        theme,
        replaceVariables,
        timeZone,
      }),
    [data.series, fieldConfig, theme, replaceVariables, timeZone]
  );

  const frame = frames?.[0];

  if (!frame) {
    return <div>No data</div>;
  }

  // Use Grafana's display name so column overrides / renames are respected.
  const columns = frame.fields.map((f) => getFieldDisplayName(f, frame, data.series));

  // Grafana colours come back as named theme colours, #rgb/#rrggbb or
  // rgb()/rgba() depending on how they were configured; ExcelJS wants 8-digit
  // AARRGGBB. Returns undefined when it can't be resolved, so the cell is just
  // left unstyled rather than getting a wrong colour.
  const toArgb = (color?: string): string | undefined => {
    if (!color) {
      return undefined;
    }

    const resolved = theme.visualization.getColorByName(color);

    const hex = resolved.replace(/^#/, "");
    if (/^[0-9a-f]{6}$/i.test(hex)) {
      return `FF${hex.toUpperCase()}`;
    }
    if (/^[0-9a-f]{3}$/i.test(hex)) {
      return `FF${hex
        .split("")
        .map((c) => c + c)
        .join("")
        .toUpperCase()}`;
    }

    const rgb = resolved.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
    if (rgb) {
      const [, r, g, bl] = rgb;
      return `FF${[r, g, bl]
        .map((n) => Number(n).toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase()}`;
    }

    return undefined;
  };

  // The colour Grafana would paint this cell with (from thresholds, value
  // mappings or a fixed colour), so the export can match the panel.
  const cellColor = (field: (typeof frame.fields)[number], rowIndex: number): string | undefined => {
    if (field.type === FieldType.time) {
      return undefined;
    }
    const values = field.values;
    const raw = Array.isArray(values) ? values[rowIndex] : (values as any)?.get?.(rowIndex);
    if (raw === null || raw === undefined) {
      return undefined;
    }
    return toArgb(field.display?.(raw)?.color);
  };

  // Read a cell the way the on-screen table does, rather than the raw value:
  // raw values give epoch millis for times, the numeric code instead of the
  // mapped text for enums, and full float precision. field.display applies the
  // unit, decimals and value mappings configured on the panel.
  const cellValue = (field: (typeof frame.fields)[number], rowIndex: number) => {
    const values = field.values;
    const raw = Array.isArray(values) ? values[rowIndex] : (values as any)?.get?.(rowIndex);

    if (raw === null || raw === undefined) {
      return "";
    }

    // Times go in as real Dates so Excel can sort/filter them as dates.
    if (field.type === FieldType.time) {
      const d = new Date(raw);
      return isNaN(d.getTime()) ? raw : d;
    }

    // Numbers stay numeric (so Excel can sum them) unless a value mapping or
    // unit turns them into text.
    const display = field.display?.(raw);
    if (display) {
      const hasText = display.text !== undefined && display.text !== "";
      const isPlainNumber = !display.suffix && !display.prefix && String(display.numeric) === display.text;
      if (field.type === FieldType.number && isPlainNumber) {
        return display.numeric;
      }
      if (hasText) {
        return display.suffix || display.prefix
          ? `${display.prefix ?? ""}${display.text}${display.suffix ?? ""}`
          : display.text;
      }
    }

    return raw;
  };

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

    // ---------- MAIN HEADER ----------
    // Left-aligned and not merged across every column: with a wide table the
    // merge spanned all columns (e.g. A1:BV1) and centring pushed the title to
    // the middle, out of view when the file is opened.
    if (options.headerText) {
      const headerCell = sheet.getCell(1, 1);
      headerCell.value = resolvedHeader;
      headerCell.font = { bold: true, size: 16 };
      headerCell.alignment = { horizontal: "left" };
    }

    // ---------- SUB HEADER ----------
    if (options.subHeaderText) {
      const subHeaderCell = sheet.getCell(2, 1);
      subHeaderCell.value = resolvedSubHeader;
      subHeaderCell.font = { size: 12 };
      subHeaderCell.alignment = { horizontal: "left" };
    }

    // ---------- EMPTY ROW ----------
    const startRow = 4;

    // ---------- COLUMN HEADERS ----------
    const headerRow = sheet.getRow(startRow);
    headerRow.values = columns;
    headerRow.height = 20;

    // Light grey grid on every cell (header and data) - bordering only the
    // header row left the data looking detached and hard to follow across
    // wide tables.
    const gridBorder: Partial<ExcelJS.Borders> = {
      top: { style: "thin", color: { argb: "FFBFBFBF" } },
      bottom: { style: "thin", color: { argb: "FFBFBFBF" } },
      left: { style: "thin", color: { argb: "FFBFBFBF" } },
      right: { style: "thin", color: { argb: "FFBFBFBF" } },
    };

    headerRow.eachCell((cell) => {
      cell.font = { bold: true, size: 12 };
      cell.alignment = { horizontal: "center", vertical: "middle" };
      cell.border = gridBorder;
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFF2F2F2" },
      };
    });

    // Freeze header row
    sheet.views = [{ state: "frozen", ySplit: startRow }];

    // ---------- DATA ROWS ----------
    for (let i = 0; i < frame.length; i++) {
      const row = sheet.addRow(frame.fields.map((f) => cellValue(f, i)));

      frame.fields.forEach((f, colIndex) => {
        const cell = row.getCell(colIndex + 1);
        cell.border = gridBorder;

        // Give time cells a readable date format instead of Excel's serial number.
        if (f.type === FieldType.time) {
          cell.numFmt = "yyyy-mm-dd hh:mm:ss";
          cell.alignment = { horizontal: "left" };
        } else if (typeof cell.value === "number") {
          cell.alignment = { horizontal: "right" };
        } else {
          cell.alignment = { horizontal: "left" };
        }

        // Carry the panel's colouring into the sheet. Which of fill/text gets
        // the colour follows the column's cell display mode, so the export
        // looks like what's on screen.
        const argb = cellColor(f, i);
        if (argb) {
          const mode = String(
            (f.config.custom?.cellOptions?.type ?? f.config.custom?.displayMode ?? "") as string
          );

          if (mode.includes("background")) {
            cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb } };
            // Keep the text readable on a saturated fill.
            cell.font = { color: { argb: "FFFFFFFF" }, bold: true };
          } else {
            cell.font = { color: { argb } };
          }
        }
      });
    }

    // ---------- AUTO WIDTH ----------
    // Measure the formatted values that were actually written, not the raw
    // ones - otherwise a time column is sized for "1789610000000" and a mapped
    // enum for "2" rather than the text the user sees.
    sheet.columns.forEach((col, index) => {
      const field = frame.fields[index];
      const isTime = field.type === FieldType.time;

      let widest = columns[index]?.length || 0;

      for (let i = 0; i < frame.length; i++) {
        const value = cellValue(field, i);
        const rendered =
          value instanceof Date
            ? "yyyy-mm-dd hh:mm:ss".length
            : value === null || value === undefined
              ? 0
              : String(value).length;
        widest = Math.max(widest, rendered);
      }

      // Header/sub-header lengths are deliberately excluded: they live in
      // column A only, so including them would stretch that one column to fit
      // the whole title.
      col.width = Math.min(Math.max(widest + 2, isTime ? 20 : 10), 50);
    });

    // ---------- TIMESTAMP ----------
    const now = new Date();
    const timestamp = now
      .toISOString()
      .replace(/[:]/g, "-")
      .replace(/\..+/, "");

    // ---------- SAVE FILE ----------
    // Name the file after the Excel header, falling back to the panel title,
    // so downloads are identifiable instead of all being "report_<date>".
    const baseName = resolvedHeader || title || "report";
    const safeName =
      baseName
        // Strip characters that are invalid in filenames on Windows/macOS.
        .replace(/[\\/:*?"<>|]/g, "")
        .replace(/\s+/g, "_")
        .replace(/_+/g, "_")
        .replace(/^_|_$/g, "")
        .slice(0, 100) || "report";

    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), `${safeName}_${timestamp}.xlsx`);
  };

  // ---------- RENDER PANEL ----------
  return (
    <div style={{ width, height, display: "flex", flexDirection: "column" }}>
      <div style={{ flexGrow: 1 }}>
        <Table data={frame} width={width} height={height - 50} />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: 6 }}>
        <button onClick={exportExcel}>{options.exportTitle || "Export Excel"}</button>
      </div>
    </div>
  );
};
