"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["tablePanel"],{

/***/ "./node_modules/react-data-grid/lib/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cell: () => (/* binding */ Cell_default),
/* harmony export */   DataGrid: () => (/* binding */ DataGrid),
/* harmony export */   DataGridDefaultRenderersContext: () => (/* binding */ DataGridDefaultRenderersContext),
/* harmony export */   Row: () => (/* binding */ Row_default),
/* harmony export */   SELECT_COLUMN_KEY: () => (/* binding */ SELECT_COLUMN_KEY),
/* harmony export */   SelectCellFormatter: () => (/* binding */ SelectCellFormatter),
/* harmony export */   SelectColumn: () => (/* binding */ SelectColumn),
/* harmony export */   ToggleGroup: () => (/* binding */ ToggleGroup),
/* harmony export */   TreeDataGrid: () => (/* binding */ TreeDataGrid),
/* harmony export */   renderCheckbox: () => (/* binding */ renderCheckbox),
/* harmony export */   renderHeaderCell: () => (/* binding */ renderHeaderCell),
/* harmony export */   renderSortIcon: () => (/* binding */ renderSortIcon),
/* harmony export */   renderSortPriority: () => (/* binding */ renderSortPriority),
/* harmony export */   renderToggleGroup: () => (/* binding */ renderToggleGroup),
/* harmony export */   renderValue: () => (/* binding */ renderValue),
/* harmony export */   textEditor: () => (/* binding */ textEditor),
/* harmony export */   useHeaderRowSelection: () => (/* binding */ useHeaderRowSelection),
/* harmony export */   useRowSelection: () => (/* binding */ useRowSelection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/jsx-runtime.js");





//#region src/utils/colSpanUtils.ts
function getColSpan(column, lastFrozenColumnIndex, args) {
	const colSpan = typeof column.colSpan === "function" ? column.colSpan(args) : 1;
	if (Number.isInteger(colSpan) && colSpan > 1 && (!column.frozen || column.idx + colSpan - 1 <= lastFrozenColumnIndex)) return colSpan;
	return void 0;
}

//#endregion
//#region src/utils/domUtils.ts
function stopPropagation(event) {
	event.stopPropagation();
}
function scrollIntoView(element, behavior = "instant") {
	element?.scrollIntoView({
		inline: "nearest",
		block: "nearest",
		behavior
	});
}

//#endregion
//#region src/utils/eventUtils.ts
function createCellEvent(event) {
	let defaultPrevented = false;
	const cellEvent = {
		...event,
		preventGridDefault() {
			defaultPrevented = true;
		},
		isGridDefaultPrevented() {
			return defaultPrevented;
		}
	};
	Object.setPrototypeOf(cellEvent, Object.getPrototypeOf(event));
	return cellEvent;
}

//#endregion
//#region src/utils/keyboardUtils.ts
const nonInputKeys = new Set([
	"Unidentified",
	"Alt",
	"AltGraph",
	"CapsLock",
	"Control",
	"Fn",
	"FnLock",
	"Meta",
	"NumLock",
	"ScrollLock",
	"Shift",
	"Tab",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"End",
	"Home",
	"PageDown",
	"PageUp",
	"Insert",
	"ContextMenu",
	"Escape",
	"Pause",
	"Play",
	"PrintScreen",
	"F1",
	"F3",
	"F4",
	"F5",
	"F6",
	"F7",
	"F8",
	"F9",
	"F10",
	"F11",
	"F12"
]);
function isCtrlKeyHeldDown(e) {
	return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
const vKey = 86;
function isDefaultCellInput(event, isUserHandlingPaste) {
	if (isCtrlKeyHeldDown(event) && (event.keyCode !== vKey || isUserHandlingPaste)) return false;
	return !nonInputKeys.has(event.key);
}
/**
* By default, the following navigation keys are enabled while an editor is open, under specific conditions:
* - Tab:
*   - The editor must be an <input>, a <textarea>, or a <select> element.
*   - The editor element must be the only immediate child of the editor container/a label.
*/
function onEditorNavigation({ key, target }) {
	if (key === "Tab" && (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement)) return target.closest(".rdg-editor-container")?.querySelectorAll("input, textarea, select").length === 1;
	return false;
}
function getLeftRightKey(direction) {
	const isRtl = direction === "rtl";
	return {
		leftKey: isRtl ? "ArrowRight" : "ArrowLeft",
		rightKey: isRtl ? "ArrowLeft" : "ArrowRight"
	};
}

//#endregion
//#region src/utils/renderMeasuringCells.tsx
const measuringCellClassname = "mlln6zg7-0-0-beta-56";
function renderMeasuringCells(viewportColumns) {
	return viewportColumns.map(({ key, idx, minWidth, maxWidth }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
		className: measuringCellClassname,
		style: {
			gridColumnStart: idx + 1,
			minWidth,
			maxWidth
		},
		"data-measuring-cell-key": key
	}, key));
}

//#endregion
//#region src/utils/selectedCellUtils.ts
function isSelectedCellEditable({ selectedPosition, columns, rows }) {
	const column = columns[selectedPosition.idx];
	const row$1 = rows[selectedPosition.rowIdx];
	return isCellEditableUtil(column, row$1);
}
function isCellEditableUtil(column, row$1) {
	return column.renderEditCell != null && (typeof column.editable === "function" ? column.editable(row$1) : column.editable) !== false;
}
function getSelectedCellColSpan({ rows, topSummaryRows, bottomSummaryRows, rowIdx, mainHeaderRowIdx, lastFrozenColumnIndex, column }) {
	const topSummaryRowsCount = topSummaryRows?.length ?? 0;
	if (rowIdx === mainHeaderRowIdx) return getColSpan(column, lastFrozenColumnIndex, { type: "HEADER" });
	if (topSummaryRows && rowIdx > mainHeaderRowIdx && rowIdx <= topSummaryRowsCount + mainHeaderRowIdx) return getColSpan(column, lastFrozenColumnIndex, {
		type: "SUMMARY",
		row: topSummaryRows[rowIdx + topSummaryRowsCount]
	});
	if (rowIdx >= 0 && rowIdx < rows.length) {
		const row$1 = rows[rowIdx];
		return getColSpan(column, lastFrozenColumnIndex, {
			type: "ROW",
			row: row$1
		});
	}
	if (bottomSummaryRows) return getColSpan(column, lastFrozenColumnIndex, {
		type: "SUMMARY",
		row: bottomSummaryRows[rowIdx - rows.length]
	});
	return void 0;
}
function getNextSelectedCellPosition({ moveUp, moveNext, cellNavigationMode, columns, colSpanColumns, rows, topSummaryRows, bottomSummaryRows, minRowIdx, mainHeaderRowIdx, maxRowIdx, currentPosition: { idx: currentIdx, rowIdx: currentRowIdx }, nextPosition, lastFrozenColumnIndex, isCellWithinBounds }) {
	let { idx: nextIdx, rowIdx: nextRowIdx } = nextPosition;
	const columnsCount = columns.length;
	const setColSpan = (moveNext$1) => {
		for (const column of colSpanColumns) {
			const colIdx = column.idx;
			if (colIdx > nextIdx) break;
			const colSpan = getSelectedCellColSpan({
				rows,
				topSummaryRows,
				bottomSummaryRows,
				rowIdx: nextRowIdx,
				mainHeaderRowIdx,
				lastFrozenColumnIndex,
				column
			});
			if (colSpan && nextIdx > colIdx && nextIdx < colSpan + colIdx) {
				nextIdx = colIdx + (moveNext$1 ? colSpan : 0);
				break;
			}
		}
	};
	const getParentRowIdx = (parent) => {
		return parent.level + mainHeaderRowIdx;
	};
	const setHeaderGroupColAndRowSpan = () => {
		if (moveNext) {
			const nextColumn = columns[nextIdx];
			let parent = nextColumn.parent;
			while (parent !== void 0) {
				const parentRowIdx = getParentRowIdx(parent);
				if (nextRowIdx === parentRowIdx) {
					nextIdx = parent.idx + parent.colSpan;
					break;
				}
				parent = parent.parent;
			}
		} else if (moveUp) {
			const nextColumn = columns[nextIdx];
			let parent = nextColumn.parent;
			let found = false;
			while (parent !== void 0) {
				const parentRowIdx = getParentRowIdx(parent);
				if (nextRowIdx >= parentRowIdx) {
					nextIdx = parent.idx;
					nextRowIdx = parentRowIdx;
					found = true;
					break;
				}
				parent = parent.parent;
			}
			if (!found) {
				nextIdx = currentIdx;
				nextRowIdx = currentRowIdx;
			}
		}
	};
	if (isCellWithinBounds(nextPosition)) {
		setColSpan(moveNext);
		if (nextRowIdx < mainHeaderRowIdx) setHeaderGroupColAndRowSpan();
	}
	if (cellNavigationMode === "CHANGE_ROW") {
		const isAfterLastColumn = nextIdx === columnsCount;
		const isBeforeFirstColumn = nextIdx === -1;
		if (isAfterLastColumn) {
			const isLastRow = nextRowIdx === maxRowIdx;
			if (!isLastRow) {
				nextIdx = 0;
				nextRowIdx += 1;
			}
		} else if (isBeforeFirstColumn) {
			const isFirstRow = nextRowIdx === minRowIdx;
			if (!isFirstRow) {
				nextRowIdx -= 1;
				nextIdx = columnsCount - 1;
			}
			setColSpan(false);
		}
	}
	if (nextRowIdx < mainHeaderRowIdx && nextIdx > -1 && nextIdx < columnsCount) {
		const nextColumn = columns[nextIdx];
		let parent = nextColumn.parent;
		const nextParentRowIdx = nextRowIdx;
		nextRowIdx = mainHeaderRowIdx;
		while (parent !== void 0) {
			const parentRowIdx = getParentRowIdx(parent);
			if (parentRowIdx >= nextParentRowIdx) {
				nextRowIdx = parentRowIdx;
				nextIdx = parent.idx;
			}
			parent = parent.parent;
		}
	}
	return {
		idx: nextIdx,
		rowIdx: nextRowIdx
	};
}
function canExitGrid({ maxColIdx, minRowIdx, maxRowIdx, selectedPosition: { rowIdx, idx }, shiftKey }) {
	const atLastCellInRow = idx === maxColIdx;
	const atFirstCellInRow = idx === 0;
	const atLastRow = rowIdx === maxRowIdx;
	const atFirstRow = rowIdx === minRowIdx;
	return shiftKey ? atFirstCellInRow && atFirstRow : atLastCellInRow && atLastRow;
}

//#endregion
//#region src/style/cell.ts
const cell = "cj343x07-0-0-beta-56";
const cellClassname = `rdg-cell ${cell}`;
const cellFrozen = "csofj7r7-0-0-beta-56";
const cellFrozenClassname = `rdg-cell-frozen ${cellFrozen}`;
const cellDragHandle = "ch2wcw87-0-0-beta-56";
const cellDragHandleFrozenClassname = "c1wvphzh7-0-0-beta-56";
const cellDragHandleClassname = `rdg-cell-drag-handle ${cellDragHandle}`;

//#endregion
//#region src/utils/styleUtils.ts
function getRowStyle(rowIdx) {
	return { "--rdg-grid-row-start": rowIdx };
}
function getHeaderCellStyle(column, rowIdx, rowSpan) {
	const gridRowEnd = rowIdx + 1;
	const paddingBlockStart = `calc(${rowSpan - 1} * var(--rdg-header-row-height))`;
	if (column.parent === void 0) return {
		insetBlockStart: 0,
		gridRowStart: 1,
		gridRowEnd,
		paddingBlockStart
	};
	return {
		insetBlockStart: `calc(${rowIdx - rowSpan} * var(--rdg-header-row-height))`,
		gridRowStart: gridRowEnd - rowSpan,
		gridRowEnd,
		paddingBlockStart
	};
}
function getCellStyle(column, colSpan = 1) {
	const index = column.idx + 1;
	return {
		gridColumnStart: index,
		gridColumnEnd: index + colSpan,
		insetInlineStart: column.frozen ? `var(--rdg-frozen-left-${column.idx})` : void 0
	};
}
function getCellClassname(column, ...extraClasses) {
	return (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(cellClassname, { [cellFrozenClassname]: column.frozen }, ...extraClasses);
}

//#endregion
//#region src/utils/index.ts
const { min, max, floor, sign, abs } = Math;
function assertIsValidKeyGetter(keyGetter) {
	if (typeof keyGetter !== "function") throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function clampColumnWidth(width, { minWidth, maxWidth }) {
	width = max(width, minWidth);
	if (typeof maxWidth === "number" && maxWidth >= minWidth) return min(width, maxWidth);
	return width;
}
function getHeaderCellRowSpan(column, rowIdx) {
	return column.parent === void 0 ? rowIdx : column.level - column.parent.level;
}

//#endregion
//#region src/cellRenderers/renderCheckbox.tsx
const checkbox = "c1bn88vv7-0-0-beta-56";
const checkboxClassname = `rdg-checkbox-input ${checkbox}`;
function renderCheckbox({ onChange, indeterminate,...props }) {
	function handleChange(e) {
		onChange(e.target.checked, e.nativeEvent.shiftKey);
	}
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
		ref: (el) => {
			if (el) el.indeterminate = indeterminate === true;
		},
		type: "checkbox",
		className: checkboxClassname,
		onChange: handleChange,
		...props
	});
}

//#endregion
//#region src/cellRenderers/renderToggleGroup.tsx
const groupCellContent = "g1s9ylgp7-0-0-beta-56";
const groupCellContentClassname = `rdg-group-cell-content ${groupCellContent}`;
const caret = "cz54e4y7-0-0-beta-56";
const caretClassname = `rdg-caret ${caret}`;
function renderToggleGroup(props) {
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ToggleGroup, { ...props });
}
function ToggleGroup({ groupKey, isExpanded, tabIndex, toggleGroup }) {
	function handleKeyDown({ key }) {
		if (key === "Enter") toggleGroup();
	}
	const d = isExpanded ? "M1 1 L 7 7 L 13 1" : "M1 7 L 7 1 L 13 7";
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
		className: groupCellContentClassname,
		tabIndex,
		onKeyDown: handleKeyDown,
		children: [groupKey, /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
			viewBox: "0 0 14 8",
			width: "14",
			height: "8",
			className: caretClassname,
			"aria-hidden": true,
			children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", { d })
		})]
	});
}

//#endregion
//#region src/cellRenderers/renderValue.tsx
function renderValue(props) {
	try {
		return props.row[props.column.key];
	} catch {
		return null;
	}
}

//#endregion
//#region src/DataGridDefaultRenderersContext.ts
const DataGridDefaultRenderersContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);
function useDefaultRenderers() {
	return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DataGridDefaultRenderersContext);
}

//#endregion
//#region src/cellRenderers/SelectCellFormatter.tsx
function SelectCellFormatter({ value, tabIndex, indeterminate, disabled, onChange, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy }) {
	const renderCheckbox$1 = useDefaultRenderers().renderCheckbox;
	return renderCheckbox$1({
		"aria-label": ariaLabel,
		"aria-labelledby": ariaLabelledBy,
		tabIndex,
		indeterminate,
		disabled,
		checked: value,
		onChange
	});
}

//#endregion
//#region src/hooks/useRowSelection.ts
const RowSelectionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);
const RowSelectionChangeContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);
function useRowSelection() {
	const rowSelectionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RowSelectionContext);
	const rowSelectionChangeContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RowSelectionChangeContext);
	if (rowSelectionContext === void 0 || rowSelectionChangeContext === void 0) throw new Error("useRowSelection must be used within renderCell");
	return {
		isRowSelectionDisabled: rowSelectionContext.isRowSelectionDisabled,
		isRowSelected: rowSelectionContext.isRowSelected,
		onRowSelectionChange: rowSelectionChangeContext
	};
}
const HeaderRowSelectionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);
const HeaderRowSelectionChangeContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);
function useHeaderRowSelection() {
	const headerRowSelectionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(HeaderRowSelectionContext);
	const headerRowSelectionChangeContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(HeaderRowSelectionChangeContext);
	if (headerRowSelectionContext === void 0 || headerRowSelectionChangeContext === void 0) throw new Error("useHeaderRowSelection must be used within renderHeaderCell");
	return {
		isIndeterminate: headerRowSelectionContext.isIndeterminate,
		isRowSelected: headerRowSelectionContext.isRowSelected,
		onRowSelectionChange: headerRowSelectionChangeContext
	};
}

//#endregion
//#region src/Columns.tsx
const SELECT_COLUMN_KEY = "rdg-select-column";
function HeaderRenderer(props) {
	const { isIndeterminate, isRowSelected, onRowSelectionChange } = useHeaderRowSelection();
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SelectCellFormatter, {
		"aria-label": "Select All",
		tabIndex: props.tabIndex,
		indeterminate: isIndeterminate,
		value: isRowSelected,
		onChange: (checked) => {
			onRowSelectionChange({ checked: isIndeterminate ? false : checked });
		}
	});
}
function SelectFormatter(props) {
	const { isRowSelectionDisabled, isRowSelected, onRowSelectionChange } = useRowSelection();
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SelectCellFormatter, {
		"aria-label": "Select",
		tabIndex: props.tabIndex,
		disabled: isRowSelectionDisabled,
		value: isRowSelected,
		onChange: (checked, isShiftClick) => {
			onRowSelectionChange({
				row: props.row,
				checked,
				isShiftClick
			});
		}
	});
}
function SelectGroupFormatter(props) {
	const { isRowSelected, onRowSelectionChange } = useRowSelection();
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SelectCellFormatter, {
		"aria-label": "Select Group",
		tabIndex: props.tabIndex,
		value: isRowSelected,
		onChange: (checked) => {
			onRowSelectionChange({
				row: props.row,
				checked,
				isShiftClick: false
			});
		}
	});
}
const SelectColumn = {
	key: SELECT_COLUMN_KEY,
	name: "",
	width: 35,
	minWidth: 35,
	maxWidth: 35,
	resizable: false,
	sortable: false,
	frozen: true,
	renderHeaderCell(props) {
		return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(HeaderRenderer, { ...props });
	},
	renderCell(props) {
		return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SelectFormatter, { ...props });
	},
	renderGroupCell(props) {
		return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SelectGroupFormatter, { ...props });
	}
};

//#endregion
//#region src/renderHeaderCell.tsx
const headerSortCellClassname = "h44jtk67-0-0-beta-56";
const headerSortName = "hcgkhxz7-0-0-beta-56";
const headerSortNameClassname = `rdg-header-sort-name ${headerSortName}`;
function renderHeaderCell({ column, sortDirection, priority }) {
	if (!column.sortable) return column.name;
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SortableHeaderCell, {
		sortDirection,
		priority,
		children: column.name
	});
}
function SortableHeaderCell({ sortDirection, priority, children }) {
	const renderSortStatus$1 = useDefaultRenderers().renderSortStatus;
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
		className: headerSortCellClassname,
		children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
			className: headerSortNameClassname,
			children
		}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", { children: renderSortStatus$1({
			sortDirection,
			priority
		}) })]
	});
}

//#endregion
//#region src/hooks/useCalculatedColumns.ts
const DEFAULT_COLUMN_WIDTH = "auto";
const DEFAULT_COLUMN_MIN_WIDTH = 50;
function useCalculatedColumns({ rawColumns, defaultColumnOptions, getColumnWidth, viewportWidth, scrollLeft, enableVirtualization }) {
	const defaultWidth = defaultColumnOptions?.width ?? DEFAULT_COLUMN_WIDTH;
	const defaultMinWidth = defaultColumnOptions?.minWidth ?? DEFAULT_COLUMN_MIN_WIDTH;
	const defaultMaxWidth = defaultColumnOptions?.maxWidth ?? void 0;
	const defaultRenderCell$1 = defaultColumnOptions?.renderCell ?? renderValue;
	const defaultRenderHeaderCell = defaultColumnOptions?.renderHeaderCell ?? renderHeaderCell;
	const defaultSortable = defaultColumnOptions?.sortable ?? false;
	const defaultResizable = defaultColumnOptions?.resizable ?? false;
	const defaultDraggable = defaultColumnOptions?.draggable ?? false;
	const { columns, colSpanColumns, lastFrozenColumnIndex, headerRowsCount } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
		let lastFrozenColumnIndex$1 = -1;
		let headerRowsCount$1 = 1;
		const columns$1 = [];
		collectColumns(rawColumns, 1);
		function collectColumns(rawColumns$1, level, parent) {
			for (const rawColumn of rawColumns$1) {
				if ("children" in rawColumn) {
					const calculatedColumnParent = {
						name: rawColumn.name,
						parent,
						idx: -1,
						colSpan: 0,
						level: 0,
						headerCellClass: rawColumn.headerCellClass
					};
					collectColumns(rawColumn.children, level + 1, calculatedColumnParent);
					continue;
				}
				const frozen = rawColumn.frozen ?? false;
				const column = {
					...rawColumn,
					parent,
					idx: 0,
					level: 0,
					frozen,
					width: rawColumn.width ?? defaultWidth,
					minWidth: rawColumn.minWidth ?? defaultMinWidth,
					maxWidth: rawColumn.maxWidth ?? defaultMaxWidth,
					sortable: rawColumn.sortable ?? defaultSortable,
					resizable: rawColumn.resizable ?? defaultResizable,
					draggable: rawColumn.draggable ?? defaultDraggable,
					renderCell: rawColumn.renderCell ?? defaultRenderCell$1,
					renderHeaderCell: rawColumn.renderHeaderCell ?? defaultRenderHeaderCell
				};
				columns$1.push(column);
				if (frozen) lastFrozenColumnIndex$1++;
				if (level > headerRowsCount$1) headerRowsCount$1 = level;
			}
		}
		columns$1.sort(({ key: aKey, frozen: frozenA }, { key: bKey, frozen: frozenB }) => {
			if (aKey === SELECT_COLUMN_KEY) return -1;
			if (bKey === SELECT_COLUMN_KEY) return 1;
			if (frozenA) {
				if (frozenB) return 0;
				return -1;
			}
			if (frozenB) return 1;
			return 0;
		});
		const colSpanColumns$1 = [];
		columns$1.forEach((column, idx) => {
			column.idx = idx;
			updateColumnParent(column, idx, 0);
			if (column.colSpan != null) colSpanColumns$1.push(column);
		});
		return {
			columns: columns$1,
			colSpanColumns: colSpanColumns$1,
			lastFrozenColumnIndex: lastFrozenColumnIndex$1,
			headerRowsCount: headerRowsCount$1
		};
	}, [
		rawColumns,
		defaultWidth,
		defaultMinWidth,
		defaultMaxWidth,
		defaultRenderCell$1,
		defaultRenderHeaderCell,
		defaultResizable,
		defaultSortable,
		defaultDraggable
	]);
	const { templateColumns, layoutCssVars, totalFrozenColumnWidth, columnMetrics } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
		const columnMetrics$1 = /* @__PURE__ */ new Map();
		let left = 0;
		let totalFrozenColumnWidth$1 = 0;
		const templateColumns$1 = [];
		for (const column of columns) {
			let width = getColumnWidth(column);
			if (typeof width === "number") width = clampColumnWidth(width, column);
			else width = column.minWidth;
			templateColumns$1.push(`${width}px`);
			columnMetrics$1.set(column, {
				width,
				left
			});
			left += width;
		}
		if (lastFrozenColumnIndex !== -1) {
			const columnMetric = columnMetrics$1.get(columns[lastFrozenColumnIndex]);
			totalFrozenColumnWidth$1 = columnMetric.left + columnMetric.width;
		}
		const layoutCssVars$1 = {};
		for (let i = 0; i <= lastFrozenColumnIndex; i++) {
			const column = columns[i];
			layoutCssVars$1[`--rdg-frozen-left-${column.idx}`] = `${columnMetrics$1.get(column).left}px`;
		}
		return {
			templateColumns: templateColumns$1,
			layoutCssVars: layoutCssVars$1,
			totalFrozenColumnWidth: totalFrozenColumnWidth$1,
			columnMetrics: columnMetrics$1
		};
	}, [
		getColumnWidth,
		columns,
		lastFrozenColumnIndex
	]);
	const [colOverscanStartIdx, colOverscanEndIdx] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
		if (!enableVirtualization) return [0, columns.length - 1];
		const viewportLeft = scrollLeft + totalFrozenColumnWidth;
		const viewportRight = scrollLeft + viewportWidth;
		const lastColIdx = columns.length - 1;
		const firstUnfrozenColumnIdx = min(lastFrozenColumnIndex + 1, lastColIdx);
		if (viewportLeft >= viewportRight) return [firstUnfrozenColumnIdx, firstUnfrozenColumnIdx];
		let colVisibleStartIdx = firstUnfrozenColumnIdx;
		while (colVisibleStartIdx < lastColIdx) {
			const { left, width } = columnMetrics.get(columns[colVisibleStartIdx]);
			if (left + width > viewportLeft) break;
			colVisibleStartIdx++;
		}
		let colVisibleEndIdx = colVisibleStartIdx;
		while (colVisibleEndIdx < lastColIdx) {
			const { left, width } = columnMetrics.get(columns[colVisibleEndIdx]);
			if (left + width >= viewportRight) break;
			colVisibleEndIdx++;
		}
		const colOverscanStartIdx$1 = max(firstUnfrozenColumnIdx, colVisibleStartIdx - 1);
		const colOverscanEndIdx$1 = min(lastColIdx, colVisibleEndIdx + 1);
		return [colOverscanStartIdx$1, colOverscanEndIdx$1];
	}, [
		columnMetrics,
		columns,
		lastFrozenColumnIndex,
		scrollLeft,
		totalFrozenColumnWidth,
		viewportWidth,
		enableVirtualization
	]);
	return {
		columns,
		colSpanColumns,
		colOverscanStartIdx,
		colOverscanEndIdx,
		templateColumns,
		layoutCssVars,
		headerRowsCount,
		lastFrozenColumnIndex,
		totalFrozenColumnWidth
	};
}
function updateColumnParent(column, index, level) {
	if (level < column.level) column.level = level;
	if (column.parent !== void 0) {
		const { parent } = column;
		if (parent.idx === -1) parent.idx = index;
		parent.colSpan += 1;
		updateColumnParent(parent, index, level - 1);
	}
}

//#endregion
//#region src/hooks/useLayoutEffect.ts
const useLayoutEffect$1 = typeof window === "undefined" ? react__WEBPACK_IMPORTED_MODULE_0__.useEffect : react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;

//#endregion
//#region src/hooks/useColumnWidths.ts
function useColumnWidths(columns, viewportColumns, templateColumns, gridRef, gridWidth, columnWidths, onColumnWidthsChange, onColumnResize, setColumnResizing) {
	const [columnToAutoResize, setColumnToAutoResize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
	const [columnsToMeasureOnResize, setColumnsToMeasureOnResize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
	const [prevGridWidth, setPreviousGridWidth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(gridWidth);
	const columnsCanFlex = columns.length === viewportColumns.length;
	const ignorePreviouslyMeasuredColumnsOnGridWidthChange = columnsCanFlex && gridWidth !== prevGridWidth;
	const newTemplateColumns = [...templateColumns];
	const columnsToMeasure = [];
	for (const { key, idx, width } of viewportColumns) {
		const columnWidth = columnWidths.get(key);
		if (key === columnToAutoResize?.key) {
			newTemplateColumns[idx] = columnToAutoResize.width === "max-content" ? columnToAutoResize.width : `${columnToAutoResize.width}px`;
			columnsToMeasure.push(key);
		} else if (typeof width === "string" && columnWidth?.type !== "resized" && (ignorePreviouslyMeasuredColumnsOnGridWidthChange || columnsToMeasureOnResize?.has(key) === true || columnWidth === void 0)) {
			newTemplateColumns[idx] = width;
			columnsToMeasure.push(key);
		}
	}
	const gridTemplateColumns = newTemplateColumns.join(" ");
	useLayoutEffect$1(updateMeasuredAndResizedWidths);
	function updateMeasuredAndResizedWidths() {
		setPreviousGridWidth(gridWidth);
		if (columnsToMeasure.length === 0) return;
		const newColumnWidths = new Map(columnWidths);
		let hasChanges = false;
		for (const key of columnsToMeasure) {
			const measuredWidth = measureColumnWidth(gridRef, key);
			hasChanges ||= measuredWidth !== columnWidths.get(key)?.width;
			if (measuredWidth === void 0) newColumnWidths.delete(key);
			else newColumnWidths.set(key, {
				type: "measured",
				width: measuredWidth
			});
		}
		if (columnToAutoResize !== null) {
			const resizingKey = columnToAutoResize.key;
			const oldWidth = columnWidths.get(resizingKey)?.width;
			const newWidth = measureColumnWidth(gridRef, resizingKey);
			if (newWidth !== void 0 && oldWidth !== newWidth) {
				hasChanges = true;
				newColumnWidths.set(resizingKey, {
					type: "resized",
					width: newWidth
				});
			}
			setColumnToAutoResize(null);
		}
		if (hasChanges) onColumnWidthsChange(newColumnWidths);
	}
	function handleColumnResize(column, nextWidth) {
		const { key: resizingKey } = column;
		(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(() => {
			if (columnsCanFlex) {
				const columnsToRemeasure = /* @__PURE__ */ new Set();
				for (const { key, width } of viewportColumns) if (resizingKey !== key && typeof width === "string" && columnWidths.get(key)?.type !== "resized") columnsToRemeasure.add(key);
				setColumnsToMeasureOnResize(columnsToRemeasure);
			}
			setColumnToAutoResize({
				key: resizingKey,
				width: nextWidth
			});
			setColumnResizing(typeof nextWidth === "number");
		});
		setColumnsToMeasureOnResize(null);
		if (onColumnResize) {
			const previousWidth = columnWidths.get(resizingKey)?.width;
			const newWidth = typeof nextWidth === "number" ? nextWidth : measureColumnWidth(gridRef, resizingKey);
			if (newWidth !== void 0 && newWidth !== previousWidth) onColumnResize(column, newWidth);
		}
	}
	return {
		gridTemplateColumns,
		handleColumnResize
	};
}
function measureColumnWidth(gridRef, key) {
	const selector = `[data-measuring-cell-key="${CSS.escape(key)}"]`;
	const measuringCell = gridRef.current?.querySelector(selector);
	return measuringCell?.getBoundingClientRect().width;
}

//#endregion
//#region src/hooks/useGridDimensions.ts
function useGridDimensions() {
	const gridRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
	const [inlineSize, setInlineSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
	const [blockSize, setBlockSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
	const [horizontalScrollbarHeight, setHorizontalScrollbarHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
	useLayoutEffect$1(() => {
		const { ResizeObserver } = window;
		if (ResizeObserver == null) return;
		const { clientWidth, clientHeight, offsetWidth, offsetHeight } = gridRef.current;
		const { width, height } = gridRef.current.getBoundingClientRect();
		const initialHorizontalScrollbarHeight = offsetHeight - clientHeight;
		const initialWidth = width - offsetWidth + clientWidth;
		const initialHeight = height - initialHorizontalScrollbarHeight;
		setInlineSize(initialWidth);
		setBlockSize(initialHeight);
		setHorizontalScrollbarHeight(initialHorizontalScrollbarHeight);
		const resizeObserver = new ResizeObserver((entries) => {
			const size = entries[0].contentBoxSize[0];
			const { clientHeight: clientHeight$1, offsetHeight: offsetHeight$1 } = gridRef.current;
			(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(() => {
				setInlineSize(size.inlineSize);
				setBlockSize(size.blockSize);
				setHorizontalScrollbarHeight(offsetHeight$1 - clientHeight$1);
			});
		});
		resizeObserver.observe(gridRef.current);
		return () => {
			resizeObserver.disconnect();
		};
	}, []);
	return [
		gridRef,
		inlineSize,
		blockSize,
		horizontalScrollbarHeight
	];
}

//#endregion
//#region src/hooks/useLatestFunc.ts
function useLatestFunc(fn) {
	const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fn);
	(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
		ref.current = fn;
	});
	const callbackFn = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...args) => {
		ref.current(...args);
	}, []);
	return fn ? callbackFn : fn;
}

//#endregion
//#region src/hooks/useRovingTabIndex.ts
function useRovingTabIndex(isSelected) {
	const [isChildFocused, setIsChildFocused] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
	if (isChildFocused && !isSelected) setIsChildFocused(false);
	function onFocus(event) {
		if (event.target === event.currentTarget) {
			const elementToFocus = event.currentTarget.querySelector("[tabindex=\"0\"]");
			if (elementToFocus !== null) {
				elementToFocus.focus({ preventScroll: true });
				setIsChildFocused(true);
			} else setIsChildFocused(false);
		} else setIsChildFocused(true);
	}
	const isFocusable = isSelected && !isChildFocused;
	return {
		tabIndex: isFocusable ? 0 : -1,
		childTabIndex: isSelected ? 0 : -1,
		onFocus: isSelected ? onFocus : void 0
	};
}

//#endregion
//#region src/hooks/useViewportColumns.ts
function useViewportColumns({ columns, colSpanColumns, rows, topSummaryRows, bottomSummaryRows, colOverscanStartIdx, colOverscanEndIdx, lastFrozenColumnIndex, rowOverscanStartIdx, rowOverscanEndIdx }) {
	const startIdx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
		if (colOverscanStartIdx === 0) return 0;
		let startIdx$1 = colOverscanStartIdx;
		const updateStartIdx = (colIdx, colSpan) => {
			if (colSpan !== void 0 && colIdx + colSpan > colOverscanStartIdx) {
				startIdx$1 = colIdx;
				return true;
			}
			return false;
		};
		for (const column of colSpanColumns) {
			const colIdx = column.idx;
			if (colIdx >= startIdx$1) break;
			if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, { type: "HEADER" }))) break;
			for (let rowIdx = rowOverscanStartIdx; rowIdx <= rowOverscanEndIdx; rowIdx++) {
				const row$1 = rows[rowIdx];
				if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
					type: "ROW",
					row: row$1
				}))) break;
			}
			if (topSummaryRows != null) {
				for (const row$1 of topSummaryRows) if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
					type: "SUMMARY",
					row: row$1
				}))) break;
			}
			if (bottomSummaryRows != null) {
				for (const row$1 of bottomSummaryRows) if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
					type: "SUMMARY",
					row: row$1
				}))) break;
			}
		}
		return startIdx$1;
	}, [
		rowOverscanStartIdx,
		rowOverscanEndIdx,
		rows,
		topSummaryRows,
		bottomSummaryRows,
		colOverscanStartIdx,
		lastFrozenColumnIndex,
		colSpanColumns
	]);
	return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
		const viewportColumns = [];
		for (let colIdx = 0; colIdx <= colOverscanEndIdx; colIdx++) {
			const column = columns[colIdx];
			if (colIdx < startIdx && !column.frozen) continue;
			viewportColumns.push(column);
		}
		return viewportColumns;
	}, [
		startIdx,
		colOverscanEndIdx,
		columns
	]);
}

//#endregion
//#region src/hooks/useViewportRows.ts
function useViewportRows({ element, rows, rowHeight, clientHeight, scrollTop, enableVirtualization, gridHeight }) {
	const { totalRowHeight, gridTemplateRows, getRowTop, getRowHeight, findRowIdx } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
		if (typeof rowHeight === "number") return {
			totalRowHeight: rowHeight * rows.length,
			gridTemplateRows: ` repeat(${rows.length}, ${rowHeight}px)`,
			getRowTop: (rowIdx) => rowIdx * rowHeight,
			getRowHeight: () => rowHeight,
			findRowIdx: (offset) => floor(offset / rowHeight)
		};
		if (typeof rowHeight === "string") {
			const getRowElementFirstCell = (element$1, rowIdx) => {
				const nth = element$1.querySelector(".rdg-header-row") ? rowIdx + 2 : rowIdx + 1;
				return element$1.querySelector(`[role="row"][aria-rowindex="${nth}"] > [role="gridcell"]`);
			};
			const getRowYTop = (element$1, rowIdx) => {
				const cell$1 = getRowElementFirstCell(element$1, rowIdx);
				if (!cell$1) return -1;
				return cell$1.getBoundingClientRect().top + element$1.scrollTop;
			};
			return {
				totalRowHeight: element?.scrollHeight ?? gridHeight,
				gridTemplateRows: ` repeat(${rows.length}, ${rowHeight})`,
				getRowTop(rowIdx) {
					if (!element) return -1;
					const cell$1 = getRowElementFirstCell(element, rowIdx);
					if (!cell$1) return -1;
					return cell$1.getBoundingClientRect().top + element.scrollTop;
				},
				getRowHeight(rowIdx) {
					if (!element) return -1;
					const cell$1 = getRowElementFirstCell(element, rowIdx);
					if (!cell$1) return -1;
					return cell$1.clientHeight;
				},
				findRowIdx(offset) {
					if (!element) return -1;
					let start = 0;
					let end = rows.length - 1;
					while (start <= end) {
						const middle = start + floor((end - start) / 2);
						const currentScrollTop = getRowYTop(element, middle);
						const prevScrollTop = getRowYTop(element, middle - 1);
						if (currentScrollTop >= offset && prevScrollTop < offset) return middle;
						if (currentScrollTop < offset) start = middle + 1;
						else if (currentScrollTop > offset) end = middle - 1;
						if (start > end) return end;
					}
					return -1;
				}
			};
		}
		let totalRowHeight$1 = 0;
		let gridTemplateRows$1 = " ";
		const rowPositions = rows.map((row$1) => {
			const currentRowHeight = rowHeight(row$1);
			const position = {
				top: totalRowHeight$1,
				height: currentRowHeight
			};
			gridTemplateRows$1 += `${currentRowHeight}px `;
			totalRowHeight$1 += currentRowHeight;
			return position;
		});
		const validateRowIdx = (rowIdx) => {
			return max(0, min(rows.length - 1, rowIdx));
		};
		return {
			totalRowHeight: totalRowHeight$1,
			gridTemplateRows: gridTemplateRows$1,
			getRowTop: (rowIdx) => rowPositions[validateRowIdx(rowIdx)].top,
			getRowHeight: (rowIdx) => rowPositions[validateRowIdx(rowIdx)].height,
			findRowIdx(offset) {
				let start = 0;
				let end = rowPositions.length - 1;
				while (start <= end) {
					const middle = start + floor((end - start) / 2);
					const currentOffset = rowPositions[middle].top;
					if (currentOffset === offset) return middle;
					if (currentOffset < offset) start = middle + 1;
					else if (currentOffset > offset) end = middle - 1;
					if (start > end) return end;
				}
				return 0;
			}
		};
	}, [
		element,
		gridHeight,
		rowHeight,
		rows
	]);
	let rowOverscanStartIdx = 0;
	let rowOverscanEndIdx = rows.length - 1;
	if (enableVirtualization) {
		const overscanThreshold = 4;
		const rowVisibleStartIdx = findRowIdx(scrollTop);
		const rowVisibleEndIdx = findRowIdx(scrollTop + clientHeight);
		rowOverscanStartIdx = max(0, rowVisibleStartIdx - overscanThreshold);
		rowOverscanEndIdx = min(rows.length - 1, rowVisibleEndIdx + overscanThreshold);
	}
	return {
		rowOverscanStartIdx,
		rowOverscanEndIdx,
		totalRowHeight,
		gridTemplateRows,
		getRowTop,
		getRowHeight,
		findRowIdx
	};
}

//#endregion
//#region src/Cell.tsx
const cellDraggedOver = "c6ra8a37-0-0-beta-56";
const cellDraggedOverClassname = `rdg-cell-dragged-over ${cellDraggedOver}`;
function Cell({ column, colSpan, isCellSelected, isDraggedOver, row: row$1, rowIdx, className, onMouseDown, onCellMouseDown, onClick, onCellClick, onDoubleClick, onCellDoubleClick, onContextMenu, onCellContextMenu, onRowChange, selectCell, style,...props }, ref) {
	const { tabIndex, childTabIndex, onFocus } = useRovingTabIndex(isCellSelected);
	const { cellClass } = column;
	className = getCellClassname(column, { [cellDraggedOverClassname]: isDraggedOver }, typeof cellClass === "function" ? cellClass(row$1) : cellClass, className);
	const isEditable = isCellEditableUtil(column, row$1);
	function selectCellWrapper(enableEditor) {
		selectCell({
			rowIdx,
			idx: column.idx
		}, { enableEditor });
	}
	function handleMouseEvent(event, eventHandler) {
		let eventHandled = false;
		if (eventHandler) {
			const cellEvent = createCellEvent(event);
			eventHandler({
				rowIdx,
				row: row$1,
				column,
				selectCell: selectCellWrapper
			}, cellEvent);
			eventHandled = cellEvent.isGridDefaultPrevented();
		}
		return eventHandled;
	}
	function handleMouseDown(event) {
		onMouseDown?.(event);
		if (!handleMouseEvent(event, onCellMouseDown)) selectCellWrapper();
	}
	function handleClick(event) {
		onClick?.(event);
		handleMouseEvent(event, onCellClick);
	}
	function handleDoubleClick(event) {
		onDoubleClick?.(event);
		if (!handleMouseEvent(event, onCellDoubleClick)) selectCellWrapper(true);
	}
	function handleContextMenu(event) {
		onContextMenu?.(event);
		handleMouseEvent(event, onCellContextMenu);
	}
	function handleRowChange(newRow) {
		onRowChange(column, newRow);
	}
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
		role: "gridcell",
		"aria-colindex": column.idx + 1,
		"aria-colspan": colSpan,
		"aria-selected": isCellSelected,
		"aria-readonly": !isEditable || void 0,
		ref,
		tabIndex,
		className,
		style: {
			...getCellStyle(column, colSpan),
			...style
		},
		onClick: handleClick,
		onMouseDown: handleMouseDown,
		onDoubleClick: handleDoubleClick,
		onContextMenu: handleContextMenu,
		onFocus,
		...props,
		children: column.renderCell({
			column,
			row: row$1,
			rowIdx,
			isCellEditable: isEditable,
			tabIndex: childTabIndex,
			onRowChange: handleRowChange
		})
	});
}
const CellComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Cell));
var Cell_default = CellComponent;
function defaultRenderCell(key, props) {
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CellComponent, { ...props }, key);
}

//#endregion
//#region src/EditCell.tsx
const canUsePostTask = typeof scheduler === "object" && typeof scheduler.postTask === "function";
const cellEditing = "cis5rrm7-0-0-beta-56";
function EditCell({ column, colSpan, row: row$1, rowIdx, onRowChange, closeEditor, onKeyDown, navigate }) {
	const captureEventRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0);
	const abortControllerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0);
	const frameRequestRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0);
	const commitOnOutsideClick = column.editorOptions?.commitOnOutsideClick ?? true;
	const commitOnOutsideMouseDown = useLatestFunc(() => {
		onClose(true, false);
	});
	(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
		if (!commitOnOutsideClick) return;
		function onWindowCaptureMouseDown(event) {
			captureEventRef.current = event;
			if (canUsePostTask) {
				const abortController = new AbortController();
				const { signal } = abortController;
				abortControllerRef.current = abortController;
				scheduler.postTask(commitOnOutsideMouseDown, {
					priority: "user-blocking",
					signal
				}).catch(() => {});
			} else frameRequestRef.current = requestAnimationFrame(commitOnOutsideMouseDown);
		}
		function onWindowMouseDown(event) {
			if (captureEventRef.current === event) commitOnOutsideMouseDown();
		}
		addEventListener("mousedown", onWindowCaptureMouseDown, { capture: true });
		addEventListener("mousedown", onWindowMouseDown);
		return () => {
			removeEventListener("mousedown", onWindowCaptureMouseDown, { capture: true });
			removeEventListener("mousedown", onWindowMouseDown);
			cancelTask();
		};
	}, [commitOnOutsideClick, commitOnOutsideMouseDown]);
	function cancelTask() {
		captureEventRef.current = void 0;
		if (abortControllerRef.current !== void 0) {
			abortControllerRef.current.abort();
			abortControllerRef.current = void 0;
		}
		if (frameRequestRef.current !== void 0) {
			cancelAnimationFrame(frameRequestRef.current);
			frameRequestRef.current = void 0;
		}
	}
	function handleKeyDown(event) {
		if (onKeyDown) {
			const cellEvent = createCellEvent(event);
			onKeyDown({
				mode: "EDIT",
				row: row$1,
				column,
				rowIdx,
				navigate() {
					navigate(event);
				},
				onClose
			}, cellEvent);
			if (cellEvent.isGridDefaultPrevented()) return;
		}
		if (event.key === "Escape") onClose();
		else if (event.key === "Enter") onClose(true);
		else if (onEditorNavigation(event)) navigate(event);
	}
	function onClose(commitChanges = false, shouldFocusCell = true) {
		if (commitChanges) onRowChange(row$1, true, shouldFocusCell);
		else closeEditor(shouldFocusCell);
	}
	function onEditorRowChange(row$2, commitChangesAndFocus = false) {
		onRowChange(row$2, commitChangesAndFocus, commitChangesAndFocus);
	}
	const { cellClass } = column;
	const className = getCellClassname(column, "rdg-editor-container", !column.editorOptions?.displayCellContent && cellEditing, typeof cellClass === "function" ? cellClass(row$1) : cellClass);
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
		role: "gridcell",
		"aria-colindex": column.idx + 1,
		"aria-colspan": colSpan,
		"aria-selected": true,
		className,
		style: getCellStyle(column, colSpan),
		onKeyDown: handleKeyDown,
		onMouseDownCapture: cancelTask,
		children: column.renderEditCell != null && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, { children: [column.renderEditCell({
			column,
			row: row$1,
			rowIdx,
			onRowChange: onEditorRowChange,
			onClose
		}), column.editorOptions?.displayCellContent && column.renderCell({
			column,
			row: row$1,
			rowIdx,
			isCellEditable: true,
			tabIndex: -1,
			onRowChange: onEditorRowChange
		})] })
	});
}

//#endregion
//#region src/GroupedColumnHeaderCell.tsx
function GroupedColumnHeaderCell({ column, rowIdx, isCellSelected, selectCell }) {
	const { tabIndex, onFocus } = useRovingTabIndex(isCellSelected);
	const { colSpan } = column;
	const rowSpan = getHeaderCellRowSpan(column, rowIdx);
	const index = column.idx + 1;
	function onMouseDown() {
		selectCell({
			idx: column.idx,
			rowIdx
		});
	}
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
		role: "columnheader",
		"aria-colindex": index,
		"aria-colspan": colSpan,
		"aria-rowspan": rowSpan,
		"aria-selected": isCellSelected,
		tabIndex,
		className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(cellClassname, column.headerCellClass),
		style: {
			...getHeaderCellStyle(column, rowIdx, rowSpan),
			gridColumnStart: index,
			gridColumnEnd: index + colSpan
		},
		onFocus,
		onMouseDown,
		children: column.name
	});
}

//#endregion
//#region src/HeaderCell.tsx
const cellSortableClassname = "c6l2wv17-0-0-beta-56";
const cellResizable = "c1kqdw7y7-0-0-beta-56";
const cellResizableClassname = `rdg-cell-resizable ${cellResizable}`;
const resizeHandleClassname = "r1y6ywlx7-0-0-beta-56";
const cellDraggableClassname = "rdg-cell-draggable";
const cellDragging = "c1bezg5o7-0-0-beta-56";
const cellDraggingClassname = `rdg-cell-dragging ${cellDragging}`;
const cellOver = "c1vc96037-0-0-beta-56";
const cellOverClassname = `rdg-cell-drag-over ${cellOver}`;
const dragImageClassname = "d8rwc9w7-0-0-beta-56";
function HeaderCell({ column, colSpan, rowIdx, isCellSelected, onColumnResize, onColumnResizeEnd, onColumnsReorder, sortColumns, onSortColumnsChange, selectCell, shouldFocusGrid, direction, draggedColumnKey, setDraggedColumnKey }) {
	const [isOver, setIsOver] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
	const dragImageRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
	const isDragging = draggedColumnKey === column.key;
	const rowSpan = getHeaderCellRowSpan(column, rowIdx);
	const { tabIndex, childTabIndex, onFocus } = useRovingTabIndex(shouldFocusGrid || isCellSelected);
	const sortIndex = sortColumns?.findIndex((sort) => sort.columnKey === column.key);
	const sortColumn = sortIndex !== void 0 && sortIndex > -1 ? sortColumns[sortIndex] : void 0;
	const sortDirection = sortColumn?.direction;
	const priority = sortColumn !== void 0 && sortColumns.length > 1 ? sortIndex + 1 : void 0;
	const ariaSort = sortDirection && !priority ? sortDirection === "ASC" ? "ascending" : "descending" : void 0;
	const { sortable, resizable, draggable } = column;
	const className = getCellClassname(column, column.headerCellClass, {
		[cellSortableClassname]: sortable,
		[cellResizableClassname]: resizable,
		[cellDraggableClassname]: draggable,
		[cellDraggingClassname]: isDragging,
		[cellOverClassname]: isOver
	});
	function onSort(ctrlClick) {
		if (onSortColumnsChange == null) return;
		const { sortDescendingFirst } = column;
		if (sortColumn === void 0) {
			const nextSort = {
				columnKey: column.key,
				direction: sortDescendingFirst ? "DESC" : "ASC"
			};
			onSortColumnsChange(sortColumns && ctrlClick ? [...sortColumns, nextSort] : [nextSort]);
		} else {
			let nextSortColumn;
			if (sortDescendingFirst === true && sortDirection === "DESC" || sortDescendingFirst !== true && sortDirection === "ASC") nextSortColumn = {
				columnKey: column.key,
				direction: sortDirection === "ASC" ? "DESC" : "ASC"
			};
			if (ctrlClick) {
				const nextSortColumns = [...sortColumns];
				if (nextSortColumn) nextSortColumns[sortIndex] = nextSortColumn;
				else nextSortColumns.splice(sortIndex, 1);
				onSortColumnsChange(nextSortColumns);
			} else onSortColumnsChange(nextSortColumn ? [nextSortColumn] : []);
		}
	}
	function handleFocus(event) {
		onFocus?.(event);
		if (shouldFocusGrid) selectCell({
			idx: 0,
			rowIdx
		});
	}
	function onMouseDown() {
		selectCell({
			idx: column.idx,
			rowIdx
		});
	}
	function onClick(event) {
		if (sortable) onSort(event.ctrlKey || event.metaKey);
	}
	function onKeyDown(event) {
		const { key } = event;
		if (sortable && (key === " " || key === "Enter")) {
			event.preventDefault();
			onSort(event.ctrlKey || event.metaKey);
		} else if (resizable && isCtrlKeyHeldDown(event) && (key === "ArrowLeft" || key === "ArrowRight")) {
			event.stopPropagation();
			const { width } = event.currentTarget.getBoundingClientRect();
			const { leftKey } = getLeftRightKey(direction);
			const offset = key === leftKey ? -10 : 10;
			const newWidth = clampColumnWidth(width + offset, column);
			if (newWidth !== width) onColumnResize(column, newWidth);
		}
	}
	function onDragStart(event) {
		(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(() => {
			setDraggedColumnKey(column.key);
		});
		event.dataTransfer.setDragImage(dragImageRef.current, 0, 0);
		event.dataTransfer.dropEffect = "move";
	}
	function onDragEnd() {
		setDraggedColumnKey(void 0);
	}
	function onDragOver(event) {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
	}
	function onDrop(event) {
		setIsOver(false);
		event.preventDefault();
		onColumnsReorder?.(draggedColumnKey, column.key);
	}
	function onDragEnter(event) {
		if (isEventPertinent(event)) setIsOver(true);
	}
	function onDragLeave(event) {
		if (isEventPertinent(event)) setIsOver(false);
	}
	let dragTargetProps;
	let dropTargetProps;
	if (draggable) {
		dragTargetProps = {
			draggable: true,
			onDragStart,
			onDragEnd
		};
		if (draggedColumnKey !== void 0 && draggedColumnKey !== column.key) dropTargetProps = {
			onDragOver,
			onDragEnter,
			onDragLeave,
			onDrop
		};
	}
	const style = {
		...getHeaderCellStyle(column, rowIdx, rowSpan),
		...getCellStyle(column, colSpan)
	};
	const content = column.renderHeaderCell({
		column,
		sortDirection,
		priority,
		tabIndex: childTabIndex
	});
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, { children: [isDragging && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
		ref: dragImageRef,
		style,
		className: getCellClassname(column, column.headerCellClass, dragImageClassname),
		children: content
	}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
		role: "columnheader",
		"aria-colindex": column.idx + 1,
		"aria-colspan": colSpan,
		"aria-rowspan": rowSpan,
		"aria-selected": isCellSelected,
		"aria-sort": ariaSort,
		tabIndex,
		className,
		style,
		onMouseDown,
		onFocus: handleFocus,
		onClick,
		onKeyDown,
		...dragTargetProps,
		...dropTargetProps,
		children: [content, resizable && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ResizeHandle, {
			direction,
			column,
			onColumnResize,
			onColumnResizeEnd
		})]
	})] });
}
function ResizeHandle({ direction, column, onColumnResize, onColumnResizeEnd }) {
	const resizingOffsetRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0);
	const isRtl = direction === "rtl";
	function onPointerDown(event) {
		if (event.pointerType === "mouse" && event.buttons !== 1) return;
		event.preventDefault();
		const { currentTarget, pointerId } = event;
		currentTarget.setPointerCapture(pointerId);
		const headerCell = currentTarget.parentElement;
		const { right, left } = headerCell.getBoundingClientRect();
		resizingOffsetRef.current = isRtl ? event.clientX - left : right - event.clientX;
	}
	function onPointerMove(event) {
		const offset = resizingOffsetRef.current;
		if (offset === void 0) return;
		const { width, right, left } = event.currentTarget.parentElement.getBoundingClientRect();
		let newWidth = isRtl ? right + offset - event.clientX : event.clientX + offset - left;
		newWidth = clampColumnWidth(newWidth, column);
		if (width > 0 && newWidth !== width) onColumnResize(column, newWidth);
	}
	function onLostPointerCapture() {
		onColumnResizeEnd();
		resizingOffsetRef.current = void 0;
	}
	function onDoubleClick() {
		onColumnResize(column, "max-content");
	}
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
		className: resizeHandleClassname,
		onClick: stopPropagation,
		onPointerDown,
		onPointerMove,
		onLostPointerCapture,
		onDoubleClick
	});
}
function isEventPertinent(event) {
	const relatedTarget = event.relatedTarget;
	return !event.currentTarget.contains(relatedTarget);
}

//#endregion
//#region src/style/row.ts
const row = "r1upfr807-0-0-beta-56";
const rowClassname = `rdg-row ${row}`;
const rowSelected = "r190mhd37-0-0-beta-56";
const rowSelectedClassname = "rdg-row-selected";
const rowSelectedWithFrozenCell = "r139qu9m7-0-0-beta-56";
const topSummaryRowClassname = "rdg-top-summary-row";
const bottomSummaryRowClassname = "rdg-bottom-summary-row";

//#endregion
//#region src/HeaderRow.tsx
const headerRow = "h10tskcx7-0-0-beta-56";
const headerRowClassname = `rdg-header-row ${headerRow}`;
function HeaderRow({ headerRowClass, rowIdx, columns, onColumnResize, onColumnResizeEnd, onColumnsReorder, sortColumns, onSortColumnsChange, lastFrozenColumnIndex, selectedCellIdx, selectCell, shouldFocusGrid, direction }) {
	const [draggedColumnKey, setDraggedColumnKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
	const cells = [];
	for (let index = 0; index < columns.length; index++) {
		const column = columns[index];
		const colSpan = getColSpan(column, lastFrozenColumnIndex, { type: "HEADER" });
		if (colSpan !== void 0) index += colSpan - 1;
		cells.push(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(HeaderCell, {
			column,
			colSpan,
			rowIdx,
			isCellSelected: selectedCellIdx === column.idx,
			onColumnResize,
			onColumnResizeEnd,
			onColumnsReorder,
			onSortColumnsChange,
			sortColumns,
			selectCell,
			shouldFocusGrid: shouldFocusGrid && index === 0,
			direction,
			draggedColumnKey,
			setDraggedColumnKey
		}, column.key));
	}
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
		role: "row",
		"aria-rowindex": rowIdx,
		className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(headerRowClassname, { [rowSelectedClassname]: selectedCellIdx === -1 }, headerRowClass),
		children: cells
	});
}
var HeaderRow_default = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(HeaderRow);

//#endregion
//#region src/GroupedColumnHeaderRow.tsx
function GroupedColumnHeaderRow({ rowIdx, level, columns, selectedCellIdx, selectCell }) {
	const cells = [];
	const renderedParents = /* @__PURE__ */ new Set();
	for (const column of columns) {
		let { parent } = column;
		if (parent === void 0) continue;
		while (parent.level > level) {
			if (parent.parent === void 0) break;
			parent = parent.parent;
		}
		if (parent.level === level && !renderedParents.has(parent)) {
			renderedParents.add(parent);
			const { idx } = parent;
			cells.push(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(GroupedColumnHeaderCell, {
				column: parent,
				rowIdx,
				isCellSelected: selectedCellIdx === idx,
				selectCell
			}, idx));
		}
	}
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
		role: "row",
		"aria-rowindex": rowIdx,
		className: headerRowClassname,
		children: cells
	});
}
var GroupedColumnHeaderRow_default = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(GroupedColumnHeaderRow);

//#endregion
//#region src/Row.tsx
function Row({ className, rowIdx, gridRowStart, selectedCellIdx, isRowSelectionDisabled, isRowSelected, draggedOverCellIdx, lastFrozenColumnIndex, row: row$1, viewportColumns, selectedCellEditor, onCellMouseDown, onCellClick, onCellDoubleClick, onCellContextMenu, rowClass, onRowChange, selectCell, style,...props }, ref) {
	const renderCell = useDefaultRenderers().renderCell;
	const handleRowChange = useLatestFunc((column, newRow) => {
		onRowChange(column, rowIdx, newRow);
	});
	className = (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(rowClassname, `rdg-row-${rowIdx % 2 === 0 ? "even" : "odd"}`, { [rowSelectedClassname]: selectedCellIdx === -1 }, rowClass?.(row$1, rowIdx), className);
	const cells = [];
	for (let index = 0; index < viewportColumns.length; index++) {
		const column = viewportColumns[index];
		const { idx } = column;
		const colSpan = getColSpan(column, lastFrozenColumnIndex, {
			type: "ROW",
			row: row$1
		});
		if (colSpan !== void 0) index += colSpan - 1;
		const isCellSelected = selectedCellIdx === idx;
		if (isCellSelected && selectedCellEditor) cells.push(selectedCellEditor);
		else cells.push(renderCell(column.key, {
			column,
			colSpan,
			row: row$1,
			rowIdx,
			isDraggedOver: draggedOverCellIdx === idx,
			isCellSelected,
			onCellMouseDown,
			onCellClick,
			onCellDoubleClick,
			onCellContextMenu,
			onRowChange: handleRowChange,
			selectCell
		}));
	}
	const selectionValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
		isRowSelected,
		isRowSelectionDisabled
	}), [isRowSelectionDisabled, isRowSelected]);
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(RowSelectionContext.Provider, {
		value: selectionValue,
		children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
			role: "row",
			ref,
			className,
			style: {
				...getRowStyle(gridRowStart),
				...style
			},
			...props,
			children: cells
		})
	});
}
const RowComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Row));
var Row_default = RowComponent;
function defaultRenderRow(key, props) {
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(RowComponent, { ...props }, key);
}

//#endregion
//#region src/ScrollToCell.tsx
function ScrollToCell({ scrollToPosition: { idx, rowIdx }, gridRef, setScrollToCellPosition }) {
	const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
	useLayoutEffect$1(() => {
		scrollIntoView(ref.current, "auto");
	});
	useLayoutEffect$1(() => {
		function removeScrollToCell() {
			setScrollToCellPosition(null);
		}
		const observer = new IntersectionObserver(removeScrollToCell, {
			root: gridRef.current,
			threshold: 1
		});
		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	}, [gridRef, setScrollToCellPosition]);
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
		ref,
		style: {
			gridColumn: idx === void 0 ? "1/-1" : idx + 1,
			gridRow: rowIdx === void 0 ? "1/-1" : rowIdx + 2
		}
	});
}

//#endregion
//#region src/sortStatus.tsx
const arrow = "a3ejtar7-0-0-beta-56";
const arrowClassname = `rdg-sort-arrow ${arrow}`;
function renderSortStatus({ sortDirection, priority }) {
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, { children: [renderSortIcon({ sortDirection }), renderSortPriority({ priority })] });
}
function renderSortIcon({ sortDirection }) {
	if (sortDirection === void 0) return null;
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
		viewBox: "0 0 12 8",
		width: "12",
		height: "8",
		className: arrowClassname,
		"aria-hidden": true,
		children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", { d: sortDirection === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0" })
	});
}
function renderSortPriority({ priority }) {
	return priority;
}

//#endregion
//#region src/style/core.ts
const root = "rnvodz57-0-0-beta-56";
const rootClassname = `rdg ${root}`;
const viewportDragging = "vlqv91k7-0-0-beta-56";
const viewportDraggingClassname = `rdg-viewport-dragging ${viewportDragging}`;
const focusSinkClassname = "f1lsfrzw7-0-0-beta-56";
const focusSinkHeaderAndSummaryClassname = "f1cte0lg7-0-0-beta-56";

//#endregion
//#region src/SummaryCell.tsx
const summaryCellClassname = "s8wc6fl7-0-0-beta-56";
function SummaryCell({ column, colSpan, row: row$1, rowIdx, isCellSelected, selectCell }) {
	const { tabIndex, childTabIndex, onFocus } = useRovingTabIndex(isCellSelected);
	const { summaryCellClass } = column;
	const className = getCellClassname(column, summaryCellClassname, typeof summaryCellClass === "function" ? summaryCellClass(row$1) : summaryCellClass);
	function onMouseDown() {
		selectCell({
			rowIdx,
			idx: column.idx
		});
	}
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
		role: "gridcell",
		"aria-colindex": column.idx + 1,
		"aria-colspan": colSpan,
		"aria-selected": isCellSelected,
		tabIndex,
		className,
		style: getCellStyle(column, colSpan),
		onMouseDown,
		onFocus,
		children: column.renderSummaryCell?.({
			column,
			row: row$1,
			tabIndex: childTabIndex
		})
	});
}
var SummaryCell_default = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SummaryCell);

//#endregion
//#region src/SummaryRow.tsx
const summaryRow = "skuhp557-0-0-beta-56";
const topSummaryRow = "tf8l5ub7-0-0-beta-56";
const summaryRowClassname = `rdg-summary-row ${summaryRow}`;
function SummaryRow({ rowIdx, gridRowStart, row: row$1, viewportColumns, top, bottom, lastFrozenColumnIndex, selectedCellIdx, isTop, selectCell, "aria-rowindex": ariaRowIndex }) {
	const cells = [];
	for (let index = 0; index < viewportColumns.length; index++) {
		const column = viewportColumns[index];
		const colSpan = getColSpan(column, lastFrozenColumnIndex, {
			type: "SUMMARY",
			row: row$1
		});
		if (colSpan !== void 0) index += colSpan - 1;
		const isCellSelected = selectedCellIdx === column.idx;
		cells.push(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SummaryCell_default, {
			column,
			colSpan,
			row: row$1,
			rowIdx,
			isCellSelected,
			selectCell
		}, column.key));
	}
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
		role: "row",
		"aria-rowindex": ariaRowIndex,
		className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(rowClassname, `rdg-row-${rowIdx % 2 === 0 ? "even" : "odd"}`, summaryRowClassname, {
			[rowSelectedClassname]: selectedCellIdx === -1,
			[`${topSummaryRowClassname} ${topSummaryRow}`]: isTop,
			[bottomSummaryRowClassname]: !isTop
		}),
		style: {
			...getRowStyle(gridRowStart),
			"--rdg-summary-row-top": top !== void 0 ? `${top}px` : void 0,
			"--rdg-summary-row-bottom": bottom !== void 0 ? `${bottom}px` : void 0
		},
		children: cells
	});
}
var SummaryRow_default = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SummaryRow);

//#endregion
//#region src/DataGrid.tsx
/**
* Main API Component to render a data grid of rows and columns
*
* @example
*
* <DataGrid columns={columns} rows={rows} />
*/
function DataGridBase(props, ref) {
	const { columns: rawColumns, rows, topSummaryRows, bottomSummaryRows, rowKeyGetter, onRowsChange, rowHeight: rawRowHeight, headerRowHeight: rawHeaderRowHeight, summaryRowHeight: rawSummaryRowHeight, columnWidths: columnWidthsRaw, onColumnWidthsChange: onColumnWidthsChangeRaw, selectedRows, isRowSelectionDisabled, onSelectedRowsChange, sortColumns, onSortColumnsChange, defaultColumnOptions, onCellMouseDown, onCellClick, onCellDoubleClick, onCellContextMenu, onCellKeyDown, onSelectedCellChange, onScroll, onColumnResize, onColumnsReorder, onFill, onCellCopy, onCellPaste, enableVirtualization: rawEnableVirtualization, renderers, className, style, rowClass, headerRowClass, direction: rawDirection, role: rawRole, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-description": ariaDescription, "aria-describedby": ariaDescribedBy, "aria-rowcount": rawAriaRowCount, "data-testid": testId, "data-cy": dataCy } = props;
	/**
	* defaults
	*/
	const defaultRenderers = useDefaultRenderers();
	const role = rawRole ?? "grid";
	const rowHeight = rawRowHeight ?? 35;
	const headerRowHeight = rawHeaderRowHeight ?? (typeof rowHeight === "number" ? rowHeight : 35);
	const summaryRowHeight = rawSummaryRowHeight ?? (typeof rowHeight === "number" ? rowHeight : 35);
	const renderRow = renderers?.renderRow ?? defaultRenderers?.renderRow ?? defaultRenderRow;
	const renderCell = renderers?.renderCell ?? defaultRenderers?.renderCell ?? defaultRenderCell;
	const renderSortStatus$1 = renderers?.renderSortStatus ?? defaultRenderers?.renderSortStatus ?? renderSortStatus;
	const renderCheckbox$1 = renderers?.renderCheckbox ?? defaultRenderers?.renderCheckbox ?? renderCheckbox;
	const noRowsFallback = renderers?.noRowsFallback ?? defaultRenderers?.noRowsFallback;
	const enableVirtualization = rawEnableVirtualization ?? typeof rawRowHeight !== "string";
	const direction = rawDirection ?? "ltr";
	if (enableVirtualization && typeof rowHeight === "string") throw new Error("`rowHeight` cannot be a string when `enableVirtualization` is true.");
	/**
	* states
	*/
	const [scrollTop, setScrollTop] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
	const [scrollLeft, setScrollLeft] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
	const [columnWidthsInternal, setColumnWidthsInternal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => columnWidthsRaw ?? /* @__PURE__ */ new Map());
	const [isColumnResizing, setColumnResizing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
	const [isDragging, setDragging] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
	const [draggedOverRowIdx, setDraggedOverRowIdx] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0);
	const [scrollToPosition, setScrollToPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
	const [shouldFocusCell, setShouldFocusCell] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
	const [previousRowIdx, setPreviousRowIdx] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1);
	const isColumnWidthsControlled = columnWidthsRaw != null && onColumnWidthsChangeRaw != null && !isColumnResizing;
	const columnWidths = isColumnWidthsControlled ? columnWidthsRaw : columnWidthsInternal;
	const onColumnWidthsChange = isColumnWidthsControlled ? (columnWidths$1) => {
		setColumnWidthsInternal(columnWidths$1);
		onColumnWidthsChangeRaw(columnWidths$1);
	} : setColumnWidthsInternal;
	const getColumnWidth = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((column) => {
		return columnWidths.get(column.key)?.width ?? column.width;
	}, [columnWidths]);
	const [gridRef, gridWidth, gridHeight, horizontalScrollbarHeight] = useGridDimensions();
	const { columns, colSpanColumns, lastFrozenColumnIndex, headerRowsCount, colOverscanStartIdx, colOverscanEndIdx, templateColumns, layoutCssVars, totalFrozenColumnWidth } = useCalculatedColumns({
		rawColumns,
		defaultColumnOptions,
		getColumnWidth,
		scrollLeft,
		viewportWidth: gridWidth,
		enableVirtualization
	});
	const topSummaryRowsCount = topSummaryRows?.length ?? 0;
	const bottomSummaryRowsCount = bottomSummaryRows?.length ?? 0;
	const summaryRowsCount = topSummaryRowsCount + bottomSummaryRowsCount;
	const headerAndTopSummaryRowsCount = headerRowsCount + topSummaryRowsCount;
	const groupedColumnHeaderRowsCount = headerRowsCount - 1;
	const minRowIdx = -headerAndTopSummaryRowsCount;
	const mainHeaderRowIdx = minRowIdx + groupedColumnHeaderRowsCount;
	const maxRowIdx = rows.length + bottomSummaryRowsCount - 1;
	const [selectedPosition, setSelectedPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => ({
		idx: -1,
		rowIdx: minRowIdx - 1,
		mode: "SELECT"
	}));
	/**
	* refs
	*/
	const focusSinkRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
	/**
	* computed values
	*/
	const isTreeGrid = role === "treegrid";
	const headerRowsHeight = headerRowsCount * headerRowHeight;
	const summaryRowsHeight = summaryRowsCount * summaryRowHeight;
	const clientHeight = gridHeight - headerRowsHeight - summaryRowsHeight;
	const isSelectable = selectedRows != null && onSelectedRowsChange != null;
	const { leftKey, rightKey } = getLeftRightKey(direction);
	const ariaRowCount = rawAriaRowCount ?? headerRowsCount + rows.length + summaryRowsCount;
	const defaultGridComponents = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
		renderCheckbox: renderCheckbox$1,
		renderSortStatus: renderSortStatus$1,
		renderCell
	}), [
		renderCheckbox$1,
		renderSortStatus$1,
		renderCell
	]);
	const headerSelectionValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
		let hasSelectedRow = false;
		let hasUnselectedRow = false;
		if (rowKeyGetter != null && selectedRows != null && selectedRows.size > 0) for (const row$1 of rows) {
			if (selectedRows.has(rowKeyGetter(row$1))) hasSelectedRow = true;
			else hasUnselectedRow = true;
			if (hasSelectedRow && hasUnselectedRow) break;
		}
		return {
			isRowSelected: hasSelectedRow && !hasUnselectedRow,
			isIndeterminate: hasSelectedRow && hasUnselectedRow
		};
	}, [
		rows,
		selectedRows,
		rowKeyGetter
	]);
	const { rowOverscanStartIdx, rowOverscanEndIdx, totalRowHeight, gridTemplateRows, getRowTop, getRowHeight, findRowIdx } = useViewportRows({
		element: gridRef.current,
		rows,
		rowHeight,
		clientHeight,
		scrollTop,
		enableVirtualization,
		gridHeight
	});
	const viewportColumns = useViewportColumns({
		columns,
		colSpanColumns,
		colOverscanStartIdx,
		colOverscanEndIdx,
		lastFrozenColumnIndex,
		rowOverscanStartIdx,
		rowOverscanEndIdx,
		rows,
		topSummaryRows,
		bottomSummaryRows
	});
	const { gridTemplateColumns, handleColumnResize } = useColumnWidths(columns, viewportColumns, templateColumns, gridRef, gridWidth, columnWidths, onColumnWidthsChange, onColumnResize, setColumnResizing);
	const minColIdx = isTreeGrid ? -1 : 0;
	const maxColIdx = columns.length - 1;
	const selectedCellIsWithinSelectionBounds = isCellWithinSelectionBounds(selectedPosition);
	const selectedCellIsWithinViewportBounds = isCellWithinViewportBounds(selectedPosition);
	const scrollHeight = headerRowHeight + totalRowHeight + summaryRowsHeight + horizontalScrollbarHeight;
	/**
	* The identity of the wrapper function is stable so it won't break memoization
	*/
	const handleColumnResizeLatest = useLatestFunc(handleColumnResize);
	const handleColumnResizeEndLatest = useLatestFunc(handleColumnResizeEnd);
	const onColumnsReorderLastest = useLatestFunc(onColumnsReorder);
	const onSortColumnsChangeLatest = useLatestFunc(onSortColumnsChange);
	const onCellMouseDownLatest = useLatestFunc(onCellMouseDown);
	const onCellClickLatest = useLatestFunc(onCellClick);
	const onCellDoubleClickLatest = useLatestFunc(onCellDoubleClick);
	const onCellContextMenuLatest = useLatestFunc(onCellContextMenu);
	const selectHeaderRowLatest = useLatestFunc(selectHeaderRow);
	const selectRowLatest = useLatestFunc(selectRow);
	const handleFormatterRowChangeLatest = useLatestFunc(updateRow);
	const selectCellLatest = useLatestFunc(selectCell);
	const selectHeaderCellLatest = useLatestFunc(selectHeaderCell);
	/**
	* callbacks
	*/
	const focusCell = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((shouldScroll = true) => {
		const cell$1 = getCellToScroll(gridRef.current);
		if (cell$1 === null) return;
		if (shouldScroll) scrollIntoView(cell$1);
		cell$1.focus({ preventScroll: true });
	}, [gridRef]);
	/**
	* effects
	*/
	useLayoutEffect$1(() => {
		if (shouldFocusCell) {
			if (focusSinkRef.current !== null && selectedPosition.idx === -1) {
				focusSinkRef.current.focus({ preventScroll: true });
				scrollIntoView(focusSinkRef.current);
			} else focusCell();
			setShouldFocusCell(false);
		}
	}, [
		shouldFocusCell,
		focusCell,
		selectedPosition.idx
	]);
	(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
		element: gridRef.current,
		scrollToCell({ idx, rowIdx }) {
			const scrollToIdx = idx !== void 0 && idx > lastFrozenColumnIndex && idx < columns.length ? idx : void 0;
			const scrollToRowIdx = rowIdx !== void 0 && isRowIdxWithinViewportBounds(rowIdx) ? rowIdx : void 0;
			if (scrollToIdx !== void 0 || scrollToRowIdx !== void 0) setScrollToPosition({
				idx: scrollToIdx,
				rowIdx: scrollToRowIdx
			});
		},
		selectCell
	}));
	/**
	* event handlers
	*/
	function selectHeaderRow(args) {
		if (!onSelectedRowsChange) return;
		assertIsValidKeyGetter(rowKeyGetter);
		const newSelectedRows = new Set(selectedRows);
		for (const row$1 of rows) {
			if (isRowSelectionDisabled?.(row$1) === true) continue;
			const rowKey = rowKeyGetter(row$1);
			if (args.checked) newSelectedRows.add(rowKey);
			else newSelectedRows.delete(rowKey);
		}
		onSelectedRowsChange(newSelectedRows);
	}
	function selectRow(args) {
		if (!onSelectedRowsChange) return;
		assertIsValidKeyGetter(rowKeyGetter);
		const { row: row$1, checked, isShiftClick } = args;
		if (isRowSelectionDisabled?.(row$1) === true) return;
		const newSelectedRows = new Set(selectedRows);
		const rowKey = rowKeyGetter(row$1);
		const rowIdx = rows.indexOf(row$1);
		setPreviousRowIdx(rowIdx);
		if (checked) newSelectedRows.add(rowKey);
		else newSelectedRows.delete(rowKey);
		if (isShiftClick && previousRowIdx !== -1 && previousRowIdx !== rowIdx && previousRowIdx < rows.length) {
			const step = sign(rowIdx - previousRowIdx);
			for (let i = previousRowIdx + step; i !== rowIdx; i += step) {
				const row$2 = rows[i];
				if (isRowSelectionDisabled?.(row$2) === true) continue;
				if (checked) newSelectedRows.add(rowKeyGetter(row$2));
				else newSelectedRows.delete(rowKeyGetter(row$2));
			}
		}
		onSelectedRowsChange(newSelectedRows);
	}
	function handleKeyDown(event) {
		const { idx, rowIdx, mode } = selectedPosition;
		if (mode === "EDIT") return;
		if (onCellKeyDown && isRowIdxWithinViewportBounds(rowIdx)) {
			const row$1 = rows[rowIdx];
			const cellEvent = createCellEvent(event);
			onCellKeyDown({
				mode: "SELECT",
				row: row$1,
				column: columns[idx],
				rowIdx,
				selectCell
			}, cellEvent);
			if (cellEvent.isGridDefaultPrevented()) return;
		}
		if (!(event.target instanceof Element)) return;
		const isCellEvent = event.target.closest(".rdg-cell") !== null;
		const isRowEvent = isTreeGrid && event.target === focusSinkRef.current;
		if (!isCellEvent && !isRowEvent) return;
		switch (event.key) {
			case "ArrowUp":
			case "ArrowDown":
			case "ArrowLeft":
			case "ArrowRight":
			case "Tab":
			case "Home":
			case "End":
			case "PageUp":
			case "PageDown":
				navigate(event);
				break;
			default:
				handleCellInput(event);
				break;
		}
	}
	function handleScroll(event) {
		const { scrollTop: scrollTop$1, scrollLeft: scrollLeft$1 } = event.currentTarget;
		(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(() => {
			setScrollTop(scrollTop$1);
			setScrollLeft(abs(scrollLeft$1));
		});
		onScroll?.(event);
	}
	function updateRow(column, rowIdx, row$1) {
		if (typeof onRowsChange !== "function") return;
		if (row$1 === rows[rowIdx]) return;
		const updatedRows = rows.with(rowIdx, row$1);
		onRowsChange(updatedRows, {
			indexes: [rowIdx],
			column
		});
	}
	function commitEditorChanges() {
		if (selectedPosition.mode !== "EDIT") return;
		updateRow(columns[selectedPosition.idx], selectedPosition.rowIdx, selectedPosition.row);
	}
	function handleCellCopy(event) {
		if (!selectedCellIsWithinViewportBounds) return;
		const { idx, rowIdx } = selectedPosition;
		onCellCopy?.({
			row: rows[rowIdx],
			column: columns[idx]
		}, event);
	}
	function handleCellPaste(event) {
		if (!onCellPaste || !onRowsChange || !isCellEditable(selectedPosition)) return;
		const { idx, rowIdx } = selectedPosition;
		const column = columns[idx];
		const updatedRow = onCellPaste({
			row: rows[rowIdx],
			column
		}, event);
		updateRow(column, rowIdx, updatedRow);
	}
	function handleCellInput(event) {
		if (!selectedCellIsWithinViewportBounds) return;
		const row$1 = rows[selectedPosition.rowIdx];
		const { key, shiftKey } = event;
		if (isSelectable && shiftKey && key === " ") {
			assertIsValidKeyGetter(rowKeyGetter);
			const rowKey = rowKeyGetter(row$1);
			selectRow({
				row: row$1,
				checked: !selectedRows.has(rowKey),
				isShiftClick: false
			});
			event.preventDefault();
			return;
		}
		if (isCellEditable(selectedPosition) && isDefaultCellInput(event, onCellPaste != null)) setSelectedPosition(({ idx, rowIdx }) => ({
			idx,
			rowIdx,
			mode: "EDIT",
			row: row$1,
			originalRow: row$1
		}));
	}
	function handleColumnResizeEnd() {
		if (isColumnResizing) {
			onColumnWidthsChangeRaw?.(columnWidths);
			setColumnResizing(false);
		}
	}
	function handleDragHandlePointerDown(event) {
		event.preventDefault();
		if (event.pointerType === "mouse" && event.buttons !== 1) return;
		setDragging(true);
		event.currentTarget.setPointerCapture(event.pointerId);
	}
	function handleDragHandlePointerMove(event) {
		const gridEl = gridRef.current;
		const headerAndTopSummaryRowsHeight = headerRowsHeight + topSummaryRowsCount * summaryRowHeight;
		const offset = scrollTop - headerAndTopSummaryRowsHeight + event.clientY - gridEl.getBoundingClientRect().top;
		const overRowIdx = findRowIdx(offset);
		setDraggedOverRowIdx(overRowIdx);
		const ariaRowIndex = headerAndTopSummaryRowsCount + overRowIdx + 1;
		const el = gridEl.querySelector(`:scope > [aria-rowindex="${ariaRowIndex}"] > [aria-colindex="${selectedPosition.idx + 1}"]`);
		scrollIntoView(el);
	}
	function handleDragHandleLostPointerCapture() {
		setDragging(false);
		if (draggedOverRowIdx === void 0) return;
		const { rowIdx } = selectedPosition;
		const [startRowIndex, endRowIndex] = rowIdx < draggedOverRowIdx ? [rowIdx + 1, draggedOverRowIdx + 1] : [draggedOverRowIdx, rowIdx];
		updateRows(startRowIndex, endRowIndex);
		setDraggedOverRowIdx(void 0);
	}
	function handleDragHandleClick() {
		focusCell(false);
	}
	function handleDragHandleDoubleClick(event) {
		event.stopPropagation();
		updateRows(selectedPosition.rowIdx + 1, rows.length);
	}
	function updateRows(startRowIdx, endRowIdx) {
		if (onRowsChange == null) return;
		const { rowIdx, idx } = selectedPosition;
		const column = columns[idx];
		const sourceRow = rows[rowIdx];
		const updatedRows = [...rows];
		const indexes = [];
		for (let i = startRowIdx; i < endRowIdx; i++) if (isCellEditable({
			rowIdx: i,
			idx
		})) {
			const updatedRow = onFill({
				columnKey: column.key,
				sourceRow,
				targetRow: rows[i]
			});
			if (updatedRow !== rows[i]) {
				updatedRows[i] = updatedRow;
				indexes.push(i);
			}
		}
		if (indexes.length > 0) onRowsChange(updatedRows, {
			indexes,
			column
		});
	}
	/**
	* utils
	*/
	function isColIdxWithinSelectionBounds(idx) {
		return idx >= minColIdx && idx <= maxColIdx;
	}
	function isRowIdxWithinViewportBounds(rowIdx) {
		return rowIdx >= 0 && rowIdx < rows.length;
	}
	function isCellWithinSelectionBounds({ idx, rowIdx }) {
		return rowIdx >= minRowIdx && rowIdx <= maxRowIdx && isColIdxWithinSelectionBounds(idx);
	}
	function isCellWithinEditBounds({ idx, rowIdx }) {
		return isRowIdxWithinViewportBounds(rowIdx) && idx >= 0 && idx <= maxColIdx;
	}
	function isCellWithinViewportBounds({ idx, rowIdx }) {
		return isRowIdxWithinViewportBounds(rowIdx) && isColIdxWithinSelectionBounds(idx);
	}
	function isCellEditable(position) {
		return isCellWithinEditBounds(position) && isSelectedCellEditable({
			columns,
			rows,
			selectedPosition: position
		});
	}
	function selectCell(position, options) {
		if (!isCellWithinSelectionBounds(position)) return;
		commitEditorChanges();
		const samePosition = isSamePosition(selectedPosition, position);
		if (options?.enableEditor && isCellEditable(position)) {
			const row$1 = rows[position.rowIdx];
			setSelectedPosition({
				...position,
				mode: "EDIT",
				row: row$1,
				originalRow: row$1
			});
		} else if (samePosition) scrollIntoView(getCellToScroll(gridRef.current));
		else {
			setShouldFocusCell(options?.shouldFocusCell === true);
			setSelectedPosition({
				...position,
				mode: "SELECT"
			});
		}
		if (onSelectedCellChange && !samePosition) onSelectedCellChange({
			rowIdx: position.rowIdx,
			row: isRowIdxWithinViewportBounds(position.rowIdx) ? rows[position.rowIdx] : void 0,
			column: columns[position.idx]
		});
	}
	function selectHeaderCell({ idx, rowIdx }) {
		selectCell({
			rowIdx: minRowIdx + rowIdx - 1,
			idx
		});
	}
	function getNextPosition(key, ctrlKey, shiftKey) {
		const { idx, rowIdx } = selectedPosition;
		const isRowSelected = selectedCellIsWithinSelectionBounds && idx === -1;
		switch (key) {
			case "ArrowUp": return {
				idx,
				rowIdx: rowIdx - 1
			};
			case "ArrowDown": return {
				idx,
				rowIdx: rowIdx + 1
			};
			case leftKey: return {
				idx: idx - 1,
				rowIdx
			};
			case rightKey: return {
				idx: idx + 1,
				rowIdx
			};
			case "Tab": return {
				idx: idx + (shiftKey ? -1 : 1),
				rowIdx
			};
			case "Home":
				if (isRowSelected) return {
					idx,
					rowIdx: minRowIdx
				};
				return {
					idx: 0,
					rowIdx: ctrlKey ? minRowIdx : rowIdx
				};
			case "End":
				if (isRowSelected) return {
					idx,
					rowIdx: maxRowIdx
				};
				return {
					idx: maxColIdx,
					rowIdx: ctrlKey ? maxRowIdx : rowIdx
				};
			case "PageUp": {
				if (selectedPosition.rowIdx === minRowIdx) return selectedPosition;
				const nextRowY = getRowTop(rowIdx) + getRowHeight(rowIdx) - clientHeight;
				return {
					idx,
					rowIdx: nextRowY > 0 ? findRowIdx(nextRowY) : 0
				};
			}
			case "PageDown": {
				if (selectedPosition.rowIdx >= rows.length) return selectedPosition;
				const nextRowY = getRowTop(rowIdx) + clientHeight;
				return {
					idx,
					rowIdx: nextRowY < totalRowHeight ? findRowIdx(nextRowY) : rows.length - 1
				};
			}
			default: return selectedPosition;
		}
	}
	function navigate(event) {
		const { key, shiftKey } = event;
		let cellNavigationMode = "NONE";
		if (key === "Tab") {
			if (canExitGrid({
				shiftKey,
				maxColIdx,
				minRowIdx,
				maxRowIdx,
				selectedPosition
			})) {
				commitEditorChanges();
				return;
			}
			cellNavigationMode = "CHANGE_ROW";
		}
		event.preventDefault();
		const ctrlKey = isCtrlKeyHeldDown(event);
		const nextPosition = getNextPosition(key, ctrlKey, shiftKey);
		if (isSamePosition(selectedPosition, nextPosition)) return;
		const nextSelectedCellPosition = getNextSelectedCellPosition({
			moveUp: key === "ArrowUp",
			moveNext: key === rightKey || key === "Tab" && !shiftKey,
			columns,
			colSpanColumns,
			rows,
			topSummaryRows,
			bottomSummaryRows,
			minRowIdx,
			mainHeaderRowIdx,
			maxRowIdx,
			lastFrozenColumnIndex,
			cellNavigationMode,
			currentPosition: selectedPosition,
			nextPosition,
			isCellWithinBounds: isCellWithinSelectionBounds
		});
		selectCell(nextSelectedCellPosition, { shouldFocusCell: true });
	}
	function getDraggedOverCellIdx(currentRowIdx) {
		if (draggedOverRowIdx === void 0) return;
		const { rowIdx } = selectedPosition;
		const isDraggedOver = rowIdx < draggedOverRowIdx ? rowIdx < currentRowIdx && currentRowIdx <= draggedOverRowIdx : rowIdx > currentRowIdx && currentRowIdx >= draggedOverRowIdx;
		return isDraggedOver ? selectedPosition.idx : void 0;
	}
	function getDragHandle() {
		if (onFill == null || selectedPosition.mode === "EDIT" || !isCellWithinViewportBounds(selectedPosition)) return;
		const { idx, rowIdx } = selectedPosition;
		const column = columns[idx];
		if (column.renderEditCell == null || column.editable === false) return;
		const isLastRow = rowIdx === maxRowIdx;
		const columnWidth = getColumnWidth(column);
		const colSpan = column.colSpan?.({
			type: "ROW",
			row: rows[rowIdx]
		}) ?? 1;
		const { insetInlineStart,...style$1 } = getCellStyle(column, colSpan);
		const marginEnd = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)";
		const isLastColumn = column.idx + colSpan - 1 === maxColIdx;
		const dragHandleStyle = {
			...style$1,
			gridRowStart: headerAndTopSummaryRowsCount + rowIdx + 1,
			marginInlineEnd: isLastColumn ? void 0 : marginEnd,
			marginBlockEnd: isLastRow ? void 0 : marginEnd,
			insetInlineStart: insetInlineStart ? `calc(${insetInlineStart} + ${columnWidth}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
		};
		return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
			style: dragHandleStyle,
			className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(cellDragHandleClassname, column.frozen && cellDragHandleFrozenClassname),
			onPointerDown: handleDragHandlePointerDown,
			onPointerMove: isDragging ? handleDragHandlePointerMove : void 0,
			onLostPointerCapture: isDragging ? handleDragHandleLostPointerCapture : void 0,
			onClick: handleDragHandleClick,
			onDoubleClick: handleDragHandleDoubleClick
		});
	}
	function getCellEditor(rowIdx) {
		if (selectedPosition.rowIdx !== rowIdx || selectedPosition.mode === "SELECT") return;
		const { idx, row: row$1 } = selectedPosition;
		const column = columns[idx];
		const colSpan = getColSpan(column, lastFrozenColumnIndex, {
			type: "ROW",
			row: row$1
		});
		const closeOnExternalRowChange = column.editorOptions?.closeOnExternalRowChange ?? true;
		const closeEditor = (shouldFocusCell$1) => {
			setShouldFocusCell(shouldFocusCell$1);
			setSelectedPosition(({ idx: idx$1, rowIdx: rowIdx$1 }) => ({
				idx: idx$1,
				rowIdx: rowIdx$1,
				mode: "SELECT"
			}));
		};
		const onRowChange = (row$2, commitChanges, shouldFocusCell$1) => {
			if (commitChanges) (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(() => {
				updateRow(column, selectedPosition.rowIdx, row$2);
				closeEditor(shouldFocusCell$1);
			});
			else setSelectedPosition((position) => ({
				...position,
				row: row$2
			}));
		};
		if (closeOnExternalRowChange && rows[selectedPosition.rowIdx] !== selectedPosition.originalRow) closeEditor(false);
		return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(EditCell, {
			column,
			colSpan,
			row: row$1,
			rowIdx,
			onRowChange,
			closeEditor,
			onKeyDown: onCellKeyDown,
			navigate
		}, column.key);
	}
	function getRowViewportColumns(rowIdx) {
		const selectedColumn = selectedPosition.idx === -1 ? void 0 : columns[selectedPosition.idx];
		if (selectedColumn !== void 0 && selectedPosition.rowIdx === rowIdx && !viewportColumns.includes(selectedColumn)) return selectedPosition.idx > colOverscanEndIdx ? [...viewportColumns, selectedColumn] : [
			...viewportColumns.slice(0, lastFrozenColumnIndex + 1),
			selectedColumn,
			...viewportColumns.slice(lastFrozenColumnIndex + 1)
		];
		return viewportColumns;
	}
	function getViewportRows() {
		const rowElements = [];
		const { idx: selectedIdx, rowIdx: selectedRowIdx } = selectedPosition;
		const startRowIdx = selectedCellIsWithinViewportBounds && selectedRowIdx < rowOverscanStartIdx ? rowOverscanStartIdx - 1 : rowOverscanStartIdx;
		const endRowIdx = selectedCellIsWithinViewportBounds && selectedRowIdx > rowOverscanEndIdx ? rowOverscanEndIdx + 1 : rowOverscanEndIdx;
		for (let viewportRowIdx = startRowIdx; viewportRowIdx <= endRowIdx; viewportRowIdx++) {
			const isRowOutsideViewport = viewportRowIdx === rowOverscanStartIdx - 1 || viewportRowIdx === rowOverscanEndIdx + 1;
			const rowIdx = isRowOutsideViewport ? selectedRowIdx : viewportRowIdx;
			let rowColumns = viewportColumns;
			const selectedColumn = selectedIdx === -1 ? void 0 : columns[selectedIdx];
			if (selectedColumn !== void 0) if (isRowOutsideViewport) rowColumns = [selectedColumn];
			else rowColumns = getRowViewportColumns(rowIdx);
			const row$1 = rows[rowIdx];
			const gridRowStart = headerAndTopSummaryRowsCount + rowIdx + 1;
			let key = rowIdx;
			let isRowSelected = false;
			if (typeof rowKeyGetter === "function") {
				key = rowKeyGetter(row$1);
				isRowSelected = selectedRows?.has(key) ?? false;
			}
			rowElements.push(renderRow(key, {
				"aria-rowindex": headerAndTopSummaryRowsCount + rowIdx + 1,
				"aria-selected": isSelectable ? isRowSelected : void 0,
				rowIdx,
				row: row$1,
				viewportColumns: rowColumns,
				isRowSelectionDisabled: isRowSelectionDisabled?.(row$1) ?? false,
				isRowSelected,
				onCellMouseDown: onCellMouseDownLatest,
				onCellClick: onCellClickLatest,
				onCellDoubleClick: onCellDoubleClickLatest,
				onCellContextMenu: onCellContextMenuLatest,
				rowClass,
				gridRowStart,
				selectedCellIdx: selectedRowIdx === rowIdx ? selectedIdx : void 0,
				draggedOverCellIdx: getDraggedOverCellIdx(rowIdx),
				lastFrozenColumnIndex,
				onRowChange: handleFormatterRowChangeLatest,
				selectCell: selectCellLatest,
				selectedCellEditor: getCellEditor(rowIdx)
			}));
		}
		return rowElements;
	}
	if (selectedPosition.idx > maxColIdx || selectedPosition.rowIdx > maxRowIdx) {
		setSelectedPosition({
			idx: -1,
			rowIdx: minRowIdx - 1,
			mode: "SELECT"
		});
		setDraggedOverRowIdx(void 0);
	}
	if (isColumnWidthsControlled && columnWidthsInternal !== columnWidthsRaw) setColumnWidthsInternal(columnWidthsRaw);
	let templateRows = `repeat(${headerRowsCount}, ${headerRowHeight}px)`;
	if (topSummaryRowsCount > 0) templateRows += ` repeat(${topSummaryRowsCount}, ${summaryRowHeight}px)`;
	if (rows.length > 0) templateRows += gridTemplateRows;
	if (bottomSummaryRowsCount > 0) templateRows += ` repeat(${bottomSummaryRowsCount}, ${summaryRowHeight}px)`;
	const isGroupRowFocused = selectedPosition.idx === -1 && selectedPosition.rowIdx !== minRowIdx - 1;
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
		role,
		"aria-label": ariaLabel,
		"aria-labelledby": ariaLabelledBy,
		"aria-description": ariaDescription,
		"aria-describedby": ariaDescribedBy,
		"aria-multiselectable": isSelectable ? true : void 0,
		"aria-colcount": columns.length,
		"aria-rowcount": ariaRowCount,
		tabIndex: -1,
		className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(rootClassname, { [viewportDraggingClassname]: isDragging }, className),
		style: {
			...style,
			scrollPaddingInlineStart: selectedPosition.idx > lastFrozenColumnIndex || scrollToPosition?.idx !== void 0 ? `${totalFrozenColumnWidth}px` : void 0,
			scrollPaddingBlock: isRowIdxWithinViewportBounds(selectedPosition.rowIdx) || scrollToPosition?.rowIdx !== void 0 ? `${headerRowsHeight + topSummaryRowsCount * summaryRowHeight}px ${bottomSummaryRowsCount * summaryRowHeight}px` : void 0,
			gridTemplateColumns,
			gridTemplateRows: templateRows,
			"--rdg-header-row-height": `${headerRowHeight}px`,
			"--rdg-scroll-height": `${scrollHeight}px`,
			...layoutCssVars
		},
		dir: direction,
		ref: gridRef,
		onScroll: handleScroll,
		onKeyDown: handleKeyDown,
		onCopy: handleCellCopy,
		onPaste: handleCellPaste,
		"data-testid": testId,
		"data-cy": dataCy,
		children: [
			/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DataGridDefaultRenderersContext.Provider, {
				value: defaultGridComponents,
				children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(HeaderRowSelectionChangeContext.Provider, {
					value: selectHeaderRowLatest,
					children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(HeaderRowSelectionContext.Provider, {
						value: headerSelectionValue,
						children: [Array.from({ length: groupedColumnHeaderRowsCount }, (_, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(GroupedColumnHeaderRow_default, {
							rowIdx: index + 1,
							level: -groupedColumnHeaderRowsCount + index,
							columns: getRowViewportColumns(minRowIdx + index),
							selectedCellIdx: selectedPosition.rowIdx === minRowIdx + index ? selectedPosition.idx : void 0,
							selectCell: selectHeaderCellLatest
						}, index)), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(HeaderRow_default, {
							headerRowClass,
							rowIdx: headerRowsCount,
							columns: getRowViewportColumns(mainHeaderRowIdx),
							onColumnResize: handleColumnResizeLatest,
							onColumnResizeEnd: handleColumnResizeEndLatest,
							onColumnsReorder: onColumnsReorderLastest,
							sortColumns,
							onSortColumnsChange: onSortColumnsChangeLatest,
							lastFrozenColumnIndex,
							selectedCellIdx: selectedPosition.rowIdx === mainHeaderRowIdx ? selectedPosition.idx : void 0,
							selectCell: selectHeaderCellLatest,
							shouldFocusGrid: !selectedCellIsWithinSelectionBounds,
							direction
						})]
					})
				}), rows.length === 0 && noRowsFallback ? noRowsFallback : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, { children: [
					topSummaryRows?.map((row$1, rowIdx) => {
						const gridRowStart = headerRowsCount + 1 + rowIdx;
						const summaryRowIdx = mainHeaderRowIdx + 1 + rowIdx;
						const isSummaryRowSelected = selectedPosition.rowIdx === summaryRowIdx;
						const top = headerRowsHeight + summaryRowHeight * rowIdx;
						return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SummaryRow_default, {
							"aria-rowindex": gridRowStart,
							rowIdx: summaryRowIdx,
							gridRowStart,
							row: row$1,
							top,
							bottom: void 0,
							viewportColumns: getRowViewportColumns(summaryRowIdx),
							lastFrozenColumnIndex,
							selectedCellIdx: isSummaryRowSelected ? selectedPosition.idx : void 0,
							isTop: true,
							selectCell: selectCellLatest
						}, rowIdx);
					}),
					/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(RowSelectionChangeContext.Provider, {
						value: selectRowLatest,
						children: getViewportRows()
					}),
					bottomSummaryRows?.map((row$1, rowIdx) => {
						const gridRowStart = headerAndTopSummaryRowsCount + rows.length + rowIdx + 1;
						const summaryRowIdx = rows.length + rowIdx;
						const isSummaryRowSelected = selectedPosition.rowIdx === summaryRowIdx;
						const top = clientHeight > totalRowHeight ? gridHeight - summaryRowHeight * (bottomSummaryRows.length - rowIdx) : void 0;
						const bottom = top === void 0 ? summaryRowHeight * (bottomSummaryRows.length - 1 - rowIdx) : void 0;
						return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SummaryRow_default, {
							"aria-rowindex": ariaRowCount - bottomSummaryRowsCount + rowIdx + 1,
							rowIdx: summaryRowIdx,
							gridRowStart,
							row: row$1,
							top,
							bottom,
							viewportColumns: getRowViewportColumns(summaryRowIdx),
							lastFrozenColumnIndex,
							selectedCellIdx: isSummaryRowSelected ? selectedPosition.idx : void 0,
							isTop: false,
							selectCell: selectCellLatest
						}, rowIdx);
					})
				] })]
			}),
			getDragHandle(),
			renderMeasuringCells(viewportColumns),
			isTreeGrid && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
				ref: focusSinkRef,
				tabIndex: isGroupRowFocused ? 0 : -1,
				className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(focusSinkClassname, {
					[focusSinkHeaderAndSummaryClassname]: !isRowIdxWithinViewportBounds(selectedPosition.rowIdx),
					[rowSelected]: isGroupRowFocused,
					[rowSelectedWithFrozenCell]: isGroupRowFocused && lastFrozenColumnIndex !== -1
				}),
				style: { gridRowStart: selectedPosition.rowIdx + headerAndTopSummaryRowsCount + 1 }
			}),
			scrollToPosition !== null && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ScrollToCell, {
				scrollToPosition,
				setScrollToCellPosition: setScrollToPosition,
				gridRef
			})
		]
	});
}
const DataGrid = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(DataGridBase);
function getCellToScroll(gridEl) {
	return gridEl.querySelector(":scope > [role=\"row\"] > [tabindex=\"0\"]");
}
function isSamePosition(p1, p2) {
	return p1.idx === p2.idx && p1.rowIdx === p2.rowIdx;
}

//#endregion
//#region src/GroupCell.tsx
function GroupCell({ id, groupKey, childRows, isExpanded, isCellSelected, column, row: row$1, groupColumnIndex, isGroupByColumn, toggleGroup: toggleGroupWrapper }) {
	const { tabIndex, childTabIndex, onFocus } = useRovingTabIndex(isCellSelected);
	function toggleGroup() {
		toggleGroupWrapper(id);
	}
	const isLevelMatching = isGroupByColumn && groupColumnIndex === column.idx;
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
		role: "gridcell",
		"aria-colindex": column.idx + 1,
		"aria-selected": isCellSelected,
		tabIndex,
		className: getCellClassname(column),
		style: {
			...getCellStyle(column),
			cursor: isLevelMatching ? "pointer" : "default"
		},
		onMouseDown: (event) => {
			event.preventDefault();
		},
		onClick: isLevelMatching ? toggleGroup : void 0,
		onFocus,
		children: (!isGroupByColumn || isLevelMatching) && column.renderGroupCell?.({
			groupKey,
			childRows,
			column,
			row: row$1,
			isExpanded,
			tabIndex: childTabIndex,
			toggleGroup
		})
	}, column.key);
}
var GroupCell_default = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(GroupCell);

//#endregion
//#region src/GroupRow.tsx
const groupRow = "g1yxluv37-0-0-beta-56";
const groupRowClassname = `rdg-group-row ${groupRow}`;
function GroupedRow({ className, row: row$1, rowIdx, viewportColumns, selectedCellIdx, isRowSelected, selectCell, gridRowStart, groupBy, toggleGroup, isRowSelectionDisabled,...props }) {
	const idx = viewportColumns[0].key === SELECT_COLUMN_KEY ? row$1.level + 1 : row$1.level;
	function handleSelectGroup() {
		selectCell({
			rowIdx,
			idx: -1
		}, { shouldFocusCell: true });
	}
	const selectionValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
		isRowSelectionDisabled: false,
		isRowSelected
	}), [isRowSelected]);
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(RowSelectionContext.Provider, {
		value: selectionValue,
		children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
			role: "row",
			"aria-level": row$1.level + 1,
			"aria-setsize": row$1.setSize,
			"aria-posinset": row$1.posInSet + 1,
			"aria-expanded": row$1.isExpanded,
			className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(rowClassname, groupRowClassname, `rdg-row-${rowIdx % 2 === 0 ? "even" : "odd"}`, selectedCellIdx === -1 && rowSelectedClassname, className),
			onMouseDown: handleSelectGroup,
			style: getRowStyle(gridRowStart),
			...props,
			children: viewportColumns.map((column) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(GroupCell_default, {
				id: row$1.id,
				groupKey: row$1.groupKey,
				childRows: row$1.childRows,
				isExpanded: row$1.isExpanded,
				isCellSelected: selectedCellIdx === column.idx,
				column,
				row: row$1,
				groupColumnIndex: idx,
				toggleGroup,
				isGroupByColumn: groupBy.includes(column.key)
			}, column.key))
		})
	});
}
var GroupRow_default = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(GroupedRow);

//#endregion
//#region src/TreeDataGrid.tsx
function TreeDataGrid({ columns: rawColumns, rows: rawRows, rowHeight: rawRowHeight, rowKeyGetter: rawRowKeyGetter, onCellKeyDown: rawOnCellKeyDown, onCellCopy: rawOnCellCopy, onCellPaste: rawOnCellPaste, onRowsChange, selectedRows: rawSelectedRows, onSelectedRowsChange: rawOnSelectedRowsChange, renderers, groupBy: rawGroupBy, rowGrouper, expandedGroupIds, onExpandedGroupIdsChange, groupIdGetter: rawGroupIdGetter,...props }) {
	const defaultRenderers = useDefaultRenderers();
	const rawRenderRow = renderers?.renderRow ?? defaultRenderers?.renderRow ?? defaultRenderRow;
	const headerAndTopSummaryRowsCount = 1 + (props.topSummaryRows?.length ?? 0);
	const { leftKey, rightKey } = getLeftRightKey(props.direction);
	const toggleGroupLatest = useLatestFunc(toggleGroup);
	const groupIdGetter = rawGroupIdGetter ?? defaultGroupIdGetter;
	const { columns, groupBy } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
		const columns$1 = rawColumns.toSorted(({ key: aKey }, { key: bKey }) => {
			if (aKey === SELECT_COLUMN_KEY) return -1;
			if (bKey === SELECT_COLUMN_KEY) return 1;
			if (rawGroupBy.includes(aKey)) {
				if (rawGroupBy.includes(bKey)) return rawGroupBy.indexOf(aKey) - rawGroupBy.indexOf(bKey);
				return -1;
			}
			if (rawGroupBy.includes(bKey)) return 1;
			return 0;
		});
		const groupBy$1 = [];
		for (const [index, column] of columns$1.entries()) if (rawGroupBy.includes(column.key)) {
			groupBy$1.push(column.key);
			columns$1[index] = {
				...column,
				frozen: true,
				renderCell: () => null,
				renderGroupCell: column.renderGroupCell ?? renderToggleGroup,
				editable: false
			};
		}
		return {
			columns: columns$1,
			groupBy: groupBy$1
		};
	}, [rawColumns, rawGroupBy]);
	const [groupedRows, rowsCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
		if (groupBy.length === 0) return [void 0, rawRows.length];
		const groupRows = (rows$1, [groupByKey, ...remainingGroupByKeys], startRowIndex) => {
			let groupRowsCount = 0;
			const groups = {};
			for (const [key, childRows] of Object.entries(rowGrouper(rows$1, groupByKey))) {
				const [childGroups, childRowsCount] = remainingGroupByKeys.length === 0 ? [childRows, childRows.length] : groupRows(childRows, remainingGroupByKeys, startRowIndex + groupRowsCount + 1);
				groups[key] = {
					childRows,
					childGroups,
					startRowIndex: startRowIndex + groupRowsCount
				};
				groupRowsCount += childRowsCount + 1;
			}
			return [groups, groupRowsCount];
		};
		return groupRows(rawRows, groupBy, 0);
	}, [
		groupBy,
		rowGrouper,
		rawRows
	]);
	const [rows, isGroupRow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
		const allGroupRows = /* @__PURE__ */ new Set();
		if (!groupedRows) return [rawRows, isGroupRow$1];
		const flattenedRows = [];
		const expandGroup = (rows$1, parentId, level) => {
			if (isReadonlyArray(rows$1)) {
				flattenedRows.push(...rows$1);
				return;
			}
			Object.keys(rows$1).forEach((groupKey, posInSet, keys) => {
				const id = groupIdGetter(groupKey, parentId);
				const isExpanded = expandedGroupIds.has(id);
				const { childRows, childGroups, startRowIndex } = rows$1[groupKey];
				const groupRow$1 = {
					id,
					parentId,
					groupKey,
					isExpanded,
					childRows,
					level,
					posInSet,
					startRowIndex,
					setSize: keys.length
				};
				flattenedRows.push(groupRow$1);
				allGroupRows.add(groupRow$1);
				if (isExpanded) expandGroup(childGroups, id, level + 1);
			});
		};
		expandGroup(groupedRows, void 0, 0);
		return [flattenedRows, isGroupRow$1];
		function isGroupRow$1(row$1) {
			return allGroupRows.has(row$1);
		}
	}, [
		expandedGroupIds,
		groupedRows,
		rawRows,
		groupIdGetter
	]);
	const rowHeight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
		if (typeof rawRowHeight === "function") return (row$1) => {
			if (isGroupRow(row$1)) return rawRowHeight({
				type: "GROUP",
				row: row$1
			});
			return rawRowHeight({
				type: "ROW",
				row: row$1
			});
		};
		return rawRowHeight;
	}, [isGroupRow, rawRowHeight]);
	const getParentRowAndIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((row$1) => {
		const rowIdx = rows.indexOf(row$1);
		for (let i = rowIdx - 1; i >= 0; i--) {
			const parentRow = rows[i];
			if (isGroupRow(parentRow) && (!isGroupRow(row$1) || row$1.parentId === parentRow.id)) return [parentRow, i];
		}
		return void 0;
	}, [isGroupRow, rows]);
	const rowKeyGetter = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((row$1) => {
		if (isGroupRow(row$1)) return row$1.id;
		if (typeof rawRowKeyGetter === "function") return rawRowKeyGetter(row$1);
		const parentRowAndIndex = getParentRowAndIndex(row$1);
		if (parentRowAndIndex !== void 0) {
			const { startRowIndex, childRows } = parentRowAndIndex[0];
			const groupIndex = childRows.indexOf(row$1);
			return startRowIndex + groupIndex + 1;
		}
		return rows.indexOf(row$1);
	}, [
		getParentRowAndIndex,
		isGroupRow,
		rawRowKeyGetter,
		rows
	]);
	const selectedRows = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
		if (rawSelectedRows == null) return null;
		assertIsValidKeyGetter(rawRowKeyGetter);
		const selectedRows$1 = new Set(rawSelectedRows);
		for (const row$1 of rows) if (isGroupRow(row$1)) {
			const isGroupRowSelected = row$1.childRows.every((cr) => rawSelectedRows.has(rawRowKeyGetter(cr)));
			if (isGroupRowSelected) selectedRows$1.add(row$1.id);
		}
		return selectedRows$1;
	}, [
		isGroupRow,
		rawRowKeyGetter,
		rawSelectedRows,
		rows
	]);
	function onSelectedRowsChange(newSelectedRows) {
		if (!rawOnSelectedRowsChange) return;
		assertIsValidKeyGetter(rawRowKeyGetter);
		const newRawSelectedRows = new Set(rawSelectedRows);
		for (const row$1 of rows) {
			const key = rowKeyGetter(row$1);
			if (selectedRows?.has(key) && !newSelectedRows.has(key)) if (isGroupRow(row$1)) for (const cr of row$1.childRows) newRawSelectedRows.delete(rawRowKeyGetter(cr));
			else newRawSelectedRows.delete(key);
			else if (!selectedRows?.has(key) && newSelectedRows.has(key)) if (isGroupRow(row$1)) for (const cr of row$1.childRows) newRawSelectedRows.add(rawRowKeyGetter(cr));
			else newRawSelectedRows.add(key);
		}
		rawOnSelectedRowsChange(newRawSelectedRows);
	}
	function handleKeyDown(args, event) {
		rawOnCellKeyDown?.(args, event);
		if (event.isGridDefaultPrevented()) return;
		if (args.mode === "EDIT") return;
		const { column, rowIdx, selectCell } = args;
		const idx = column?.idx ?? -1;
		const row$1 = rows[rowIdx];
		if (!isGroupRow(row$1)) return;
		if (idx === -1 && (event.key === leftKey && row$1.isExpanded || event.key === rightKey && !row$1.isExpanded)) {
			event.preventDefault();
			event.preventGridDefault();
			toggleGroup(row$1.id);
		}
		if (idx === -1 && event.key === leftKey && !row$1.isExpanded && row$1.level !== 0) {
			const parentRowAndIndex = getParentRowAndIndex(row$1);
			if (parentRowAndIndex !== void 0) {
				event.preventGridDefault();
				selectCell({
					idx,
					rowIdx: parentRowAndIndex[1]
				});
			}
		}
	}
	function handleCellCopy({ row: row$1, column }, event) {
		if (!isGroupRow(row$1)) rawOnCellCopy?.({
			row: row$1,
			column
		}, event);
	}
	function handleCellPaste({ row: row$1, column }, event) {
		return isGroupRow(row$1) ? row$1 : rawOnCellPaste({
			row: row$1,
			column
		}, event);
	}
	function handleRowsChange(updatedRows, { indexes, column }) {
		if (!onRowsChange) return;
		const updatedRawRows = [...rawRows];
		const rawIndexes = [];
		for (const index of indexes) {
			const rawIndex = rawRows.indexOf(rows[index]);
			updatedRawRows[rawIndex] = updatedRows[index];
			rawIndexes.push(rawIndex);
		}
		onRowsChange(updatedRawRows, {
			indexes: rawIndexes,
			column
		});
	}
	function toggleGroup(groupId) {
		const newExpandedGroupIds = new Set(expandedGroupIds);
		if (newExpandedGroupIds.has(groupId)) newExpandedGroupIds.delete(groupId);
		else newExpandedGroupIds.add(groupId);
		onExpandedGroupIdsChange(newExpandedGroupIds);
	}
	function renderRow(key, { row: row$1, rowClass, onCellMouseDown, onCellClick, onCellDoubleClick, onCellContextMenu, onRowChange, lastFrozenColumnIndex, draggedOverCellIdx, selectedCellEditor,...rowProps }) {
		if (isGroupRow(row$1)) {
			const { startRowIndex } = row$1;
			return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(GroupRow_default, {
				...rowProps,
				"aria-rowindex": headerAndTopSummaryRowsCount + startRowIndex + 1,
				row: row$1,
				groupBy,
				toggleGroup: toggleGroupLatest
			}, key);
		}
		let ariaRowIndex = rowProps["aria-rowindex"];
		const parentRowAndIndex = getParentRowAndIndex(row$1);
		if (parentRowAndIndex !== void 0) {
			const { startRowIndex, childRows } = parentRowAndIndex[0];
			const groupIndex = childRows.indexOf(row$1);
			ariaRowIndex = startRowIndex + headerAndTopSummaryRowsCount + groupIndex + 2;
		}
		return rawRenderRow(key, {
			...rowProps,
			"aria-rowindex": ariaRowIndex,
			row: row$1,
			rowClass,
			onCellMouseDown,
			onCellClick,
			onCellDoubleClick,
			onCellContextMenu,
			onRowChange,
			lastFrozenColumnIndex,
			draggedOverCellIdx,
			selectedCellEditor
		});
	}
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DataGrid, {
		...props,
		role: "treegrid",
		"aria-rowcount": rowsCount + 1 + (props.topSummaryRows?.length ?? 0) + (props.bottomSummaryRows?.length ?? 0),
		columns,
		rows,
		rowHeight,
		rowKeyGetter,
		onRowsChange: handleRowsChange,
		selectedRows,
		onSelectedRowsChange,
		onCellKeyDown: handleKeyDown,
		onCellCopy: handleCellCopy,
		onCellPaste: rawOnCellPaste ? handleCellPaste : void 0,
		renderers: {
			...renderers,
			renderRow
		}
	});
}
function defaultGroupIdGetter(groupKey, parentId) {
	return parentId !== void 0 ? `${parentId}__${groupKey}` : groupKey;
}
function isReadonlyArray(arr) {
	return Array.isArray(arr);
}

//#endregion
//#region src/editors/textEditor.tsx
const textEditorInternalClassname = "t7vyx3i7-0-0-beta-56";
const textEditorClassname = `rdg-text-editor ${textEditorInternalClassname}`;
function autoFocusAndSelect(input) {
	input?.focus();
	input?.select();
}
function textEditor({ row: row$1, column, onRowChange, onClose }) {
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
		className: textEditorClassname,
		ref: autoFocusAndSelect,
		value: row$1[column.key],
		onChange: (event) => onRowChange({
			...row$1,
			[column.key]: event.target.value
		}),
		onBlur: () => onClose(true, false)
	});
}

//#endregion

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-data-grid/lib/styles.css":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/uwrap/dist/uWrap.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   varPreLine: () => (/* binding */ varPreLine)
/* harmony export */ });
/**
* Copyright (c) 2025, Leon Sorokin
* All rights reserved. (MIT Licensed)
*
* uWrap.js
* A small, fast line wrapping thing for Canvas2D
* https://github.com/leeoniya/uWrap (v0.1.2)
*/

// BREAKS
const D = "-".charCodeAt(0);
const S = " ".charCodeAt(0);
const N = "\n".charCodeAt(0);
// const R = "\r".charCodeAt(0); (TODO: support \r\n breaks)
// const T = "\t".charCodeAt(0);
const SYMBS = `\`~!@#$%^&*()_+-=[]\\{}|;':",./<>? \t`;
const NUMS = "1234567890";
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const CHARS = `${UPPER}${LOWER}${NUMS}${SYMBS}`;
function supportsLetterSpacing(ctx) {
    const _w = ctx.measureText('W').width;
    const _letterSpacing = ctx.letterSpacing;
    ctx.letterSpacing = '101px';
    const w = ctx.measureText('W').width;
    ctx.letterSpacing = _letterSpacing;
    return w > _w;
}
function varPreLine(ctx) {
    // Safari pre-18.4 does not support Canvas letterSpacing, and measureText() does not account for it
    // so we have to add it manually. https://caniuse.com/mdn-api_canvasrenderingcontext2d_letterspacing
    const fauxLetterSpacing = !supportsLetterSpacing(ctx) ? parseFloat(ctx.letterSpacing) : 0;
    // single-char widths in isolation
    const WIDTHS = {};
    for (let i = 0; i < CHARS.length; i++)
        WIDTHS[CHARS.charCodeAt(i)] = ctx.measureText(CHARS[i]).width + fauxLetterSpacing;
    const wordSpacing = parseFloat(ctx.wordSpacing);
    if (wordSpacing > 0)
        WIDTHS[S] = wordSpacing;
    // build kerning/spacing LUT of upper+lower, upper+sym, upper+upper pairs. (this includes letterSpacing)
    // holds kerning-adjusted width of the uppers
    const PAIRS = {};
    for (let i = 0; i < UPPER.length; i++) {
        let uc = UPPER.charCodeAt(i);
        PAIRS[uc] = {};
        for (let j = 0; j < CHARS.length; j++) {
            let ch = CHARS.charCodeAt(j);
            let wid = ctx.measureText(`${UPPER[i]}${CHARS[j]}`).width - WIDTHS[ch] + fauxLetterSpacing;
            PAIRS[uc][ch] = wid;
        }
    }
    const eachLine = () => { };
    function each(text, width, cb = eachLine) {
        let fr = 0;
        while (text.charCodeAt(fr) === S)
            fr++;
        let to = text.length - 1;
        while (text.charCodeAt(to) === S)
            to--;
        let headIdx = fr;
        let headEnd = 0;
        let headWid = 0;
        let tailIdx = -1; // wrap candidate
        let tailWid = 0;
        let inWS = false;
        for (let i = fr; i <= to; i++) {
            let c = text.charCodeAt(i);
            let w = 0;
            if (c in PAIRS) {
                let n = text.charCodeAt(i + 1);
                if (n in PAIRS[c])
                    w = PAIRS[c][n];
            }
            if (w === 0)
                w = WIDTHS[c] ?? (WIDTHS[c] = ctx.measureText(text[i]).width);
            if (c === S) { //  || c === T || c === N || c === R
                // set possible wrap point
                if (text.charCodeAt(i + 1) !== c) {
                    tailIdx = i + 1;
                    tailWid = 0;
                }
                if (!inWS && headWid > 0) {
                    headWid += w;
                    headEnd = i;
                }
                inWS = true;
            }
            else if (c === N) {
                if (cb(headIdx, i) === false)
                    return;
                headIdx = headEnd = i + 1;
                headWid = tailWid = 0;
                tailWid = 0;
                tailIdx = -1;
            }
            else {
                if (headEnd > headIdx && headWid + w > width) {
                    if (cb(headIdx, headEnd) === false)
                        return;
                    headWid = tailWid + w;
                    headIdx = headEnd = tailIdx;
                    tailWid = 0;
                    tailIdx = -1;
                }
                else {
                    if (c === D) {
                        // set possible wrap point
                        if (text.charCodeAt(i + 1) !== c) {
                            tailIdx = headEnd = i + 1;
                            tailWid = 0;
                        }
                    }
                    headWid += w;
                    tailWid += w;
                }
                inWS = false;
            }
        }
        cb(headIdx, to + 1);
    }
    let mayWrap = /\s|-/;
    return {
        each,
        split: (text, width, limit = Infinity) => {
            let out = [];
            if (mayWrap.test(text)) {
                each(text, width, (idx0, idx1) => {
                    out.push(text.slice(idx0, idx1));
                    if (out.length === limit)
                        return false;
                });
            }
            else {
                out.push(text);
            }
            return out;
        },
        count: (text, width) => {
            let count = 0;
            if (mayWrap.test(text)) {
                each(text, width, () => { count++; });
            }
            else {
                count = 1;
            }
            return count;
        },
        test: (text, width) => {
            let count = 0;
            if (mayWrap.test(text)) {
                each(text, width, () => {
                    if (++count === 2)
                        return false;
                });
            }
            else {
                count = 1;
            }
            return count === 2;
        },
    };
}
/*
function isMonospace(ctx: CanvasRenderingContext2D) {
  let w = ctx.measureText('.').width;
  return ctx.measureText('i').width === w && ctx.measureText('.').width === w;
}
*/




/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/Cells/ActionsCell.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionsCell: () => (/* binding */ ActionsCell),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _Actions_ActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Actions/ActionButton.tsx");




const ActionsCell = ({ field, rowIdx, getActions }) => {
  const actions = getActions(field, rowIdx);
  if (actions.length === 0) {
    return null;
  }
  return actions.map((action, i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Actions_ActionButton__WEBPACK_IMPORTED_MODULE_2__.ActionButton, { action, variant: "secondary" }, i));
};
const getStyles = (theme) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({ gap: theme.spacing(0.75) });


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/Cells/AutoCell.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoCell: () => (/* binding */ AutoCell),
/* harmony export */   getJsonCellStyles: () => (/* binding */ getJsonCellStyles),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _components_MaybeWrapWithLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/components/MaybeWrapWithLink.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/constants.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/styles.ts");







function AutoCell({ value, field, rowIdx }) {
  const displayValue = field.display(value);
  const formattedValue = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.formattedValueToString)(displayValue);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MaybeWrapWithLink__WEBPACK_IMPORTED_MODULE_3__.MaybeWrapWithLink, { field, rowIdx, children: formattedValue });
}
const getStyles = (_theme, { textWrap, shouldOverflow, maxHeight }) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  ...textWrap && { whiteSpace: "pre-line" },
  ...shouldOverflow && {
    [(0,_styles__WEBPACK_IMPORTED_MODULE_5__.getActiveCellSelector)(Boolean(maxHeight))]: {
      whiteSpace: "pre-line"
    }
  },
  ...maxHeight != null && textWrap && {
    height: "auto",
    overflowY: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: Math.floor(maxHeight / _constants__WEBPACK_IMPORTED_MODULE_4__.TABLE.LINE_HEIGHT),
    [(0,_styles__WEBPACK_IMPORTED_MODULE_5__.getActiveCellSelector)(true)]: {
      display: "flex",
      WebkitLineClamp: "none",
      WebkitBoxOrient: "unset",
      overflowY: "auto",
      height: "fit-content"
    }
  }
});
const getJsonCellStyles = (_theme, { textWrap, shouldOverflow, maxHeight }) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  fontFamily: "monospace",
  ...textWrap && { whiteSpace: "pre" },
  ...shouldOverflow && {
    [(0,_styles__WEBPACK_IMPORTED_MODULE_5__.getActiveCellSelector)(Boolean(maxHeight))]: {
      whiteSpace: "pre"
    }
  }
});


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/Cells/BarGaugeCell.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarGaugeCell: () => (/* binding */ BarGaugeCell)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/field/scale.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/thresholds.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/panel.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _BarGauge_BarGauge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/BarGauge/BarGauge.tsx");
/* harmony import */ var _components_MaybeWrapWithLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/components/MaybeWrapWithLink.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/utils.ts");








const defaultScale = {
  mode: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ThresholdsMode.Absolute,
  steps: [
    {
      color: "blue",
      value: -Infinity
    },
    {
      color: "green",
      value: 20
    }
  ]
};
const BarGaugeCell = ({ value, field, theme, height, width, rowIdx }) => {
  const displayValue = field.display(value);
  const cellOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getCellOptions)(field);
  const heightOffset = _constants__WEBPACK_IMPORTED_MODULE_7__.TABLE.CELL_PADDING * 2;
  let config = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getFieldConfigWithMinMax)(field, false);
  if (!config.thresholds) {
    config = {
      ...config,
      thresholds: defaultScale
    };
  }
  let barGaugeMode = _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.BarGaugeDisplayMode.Gradient;
  let valueDisplayMode = void 0;
  if (cellOptions.type === _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.TableCellDisplayMode.Gauge) {
    barGaugeMode = cellOptions.mode ?? _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.BarGaugeDisplayMode.Gradient;
    valueDisplayMode = cellOptions.valueDisplayMode !== void 0 ? cellOptions.valueDisplayMode : _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.BarGaugeValueMode.Text;
  }
  const alignmentFactors = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getAlignmentFactor)(field, displayValue, rowIdx);
  const renderedHeight = Math.min(height - heightOffset, _constants__WEBPACK_IMPORTED_MODULE_7__.TABLE.MAX_CELL_HEIGHT);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MaybeWrapWithLink__WEBPACK_IMPORTED_MODULE_6__.MaybeWrapWithLink, { field, rowIdx, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _BarGauge_BarGauge__WEBPACK_IMPORTED_MODULE_5__.BarGauge,
    {
      width,
      height: renderedHeight,
      field: config,
      display: field.display,
      text: { valueSize: 14 },
      value: displayValue,
      orientation: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.VizOrientation.Horizontal,
      theme,
      alignmentFactors,
      itemSpacing: 1,
      lcdCellWidth: 8,
      displayMode: barGaugeMode,
      valueDisplayMode
    }
  ) });
};


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/Cells/DataLinksCell.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataLinksCell: () => (/* binding */ DataLinksCell),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/utils.ts");




const DataLinksCell = ({ field, rowIdx }) => {
  const links = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getCellLinks)(field, rowIdx);
  if (!links?.length) {
    return null;
  }
  return links.map((link, idx) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { onClick: link.onClick, href: link.href, target: link.target, children: link.title }, idx));
};
const getStyles = (theme, { textWrap, textAlign }) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  ...textWrap && {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: `${(0,_utils__WEBPACK_IMPORTED_MODULE_2__.getJustifyContent)(textAlign)} !important`
    // we can't guarantee order, and alignItems is set on a sibling class.
  },
  "> a": {
    flexWrap: "nowrap",
    ...!textWrap && {
      paddingInline: theme.spacing(0.5),
      borderRight: `2px solid ${theme.colors.border.medium}`,
      "&:first-child": {
        paddingInlineStart: 0
      },
      "&:last-child": {
        paddingInlineEnd: 0,
        borderRight: "none"
      }
    }
  }
});


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/Cells/GeoCell.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeoCell: () => (/* binding */ GeoCell),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var ol_format_WKT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/ol/format/WKT.js");
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/ol/geom/Geometry.js");




function GeoCell({ value }) {
  let disp = null;
  if (value instanceof ol_geom__WEBPACK_IMPORTED_MODULE_2__["default"]) {
    disp = new ol_format_WKT__WEBPACK_IMPORTED_MODULE_1__["default"]().writeGeometry(value, {
      featureProjection: "EPSG:3857",
      dataProjection: "EPSG:4326"
    });
  } else if (value != null) {
    disp = `${value}`;
  }
  return disp;
}
const getStyles = () => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  fontFamily: "monospace",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
});


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/Cells/ImageCell.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageCell: () => (/* binding */ ImageCell),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _components_MaybeWrapWithLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/components/MaybeWrapWithLink.tsx");






const ImageCell = ({ cellOptions, field, value, rowIdx }) => {
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const { text } = field.display(value);
  const { alt, title } = cellOptions.type === _types__WEBPACK_IMPORTED_MODULE_3__.TableCellDisplayMode.Image ? cellOptions : { alt: void 0, title: void 0 };
  if (!text) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MaybeWrapWithLink__WEBPACK_IMPORTED_MODULE_4__.MaybeWrapWithLink, { field, rowIdx, children: error ? text : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { alt, src: text, title, onError: () => setError(true) }) });
};
const getStyles = () => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  "&, a, img": {
    width: "100%",
    height: "100%"
  },
  img: {
    objectFit: "contain"
  }
});


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/Cells/MarkdownCell.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownCell: () => (/* binding */ MarkdownCell),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/text/markdown.ts");
/* harmony import */ var _components_MaybeWrapWithLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/components/MaybeWrapWithLink.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/styles.ts");






function MarkdownCell({ field, rowIdx, disableSanitizeHtml }) {
  const rawValue = field.values[rowIdx];
  if (rawValue == null) {
    return null;
  }
  const renderValue = field.display(rawValue);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MaybeWrapWithLink__WEBPACK_IMPORTED_MODULE_3__.MaybeWrapWithLink, { field, rowIdx, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "div",
    {
      className: "markdown-container",
      dangerouslySetInnerHTML: {
        __html: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.renderMarkdown)(renderValue.text, { noSanitize: disableSanitizeHtml }).trim()
      }
    }
  ) });
}
const getStyles = (theme, { maxHeight }) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  [`&, ${(0,_styles__WEBPACK_IMPORTED_MODULE_4__.getActiveCellSelector)(Boolean(maxHeight))}`]: {
    whiteSpace: "normal"
  },
  ".markdown-container": {
    width: "100%",
    // for elements like `p`, `h*`, etc. which have an inherent margin,
    // we want to remove the bottom margin for the last one in the container.
    "> *:last-child": {
      marginBottom: 0
    }
  },
  "ol, ul": {
    paddingLeft: theme.spacing(2.5)
  },
  p: {
    whiteSpace: "pre-line"
  }
});


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/Cells/PillCell.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PillCell: () => (/* binding */ PillCell),
/* harmony export */   getStyles: () => (/* binding */ getStyles),
/* harmony export */   inferPills: () => (/* binding */ inferPills)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/field/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/utils/namedColorsPalette.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-schema/src/raw/dashboard/x/dashboard_types.gen.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/styles.ts");







function PillCell({ rowIdx, field, theme, getTextColorForBackground }) {
  const value = field.values[rowIdx];
  const pills = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const pillValues = inferPills(value);
    return pillValues.length > 0 ? pillValues.map((pill, index) => {
      const renderedValue = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.formattedValueToString)(field.display(pill));
      const bgColor = getPillColor(renderedValue, field, theme);
      const textColor = getTextColorForBackground(bgColor);
      return {
        value: renderedValue,
        key: `${pill}-${index}`,
        bgColor,
        color: textColor
      };
    }) : [];
  }, [value, field, theme, getTextColorForBackground]);
  if (pills.length === 0) {
    return null;
  }
  return pills.map((pill) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "span",
    {
      style: {
        backgroundColor: pill.bgColor,
        color: pill.color,
        border: pill.bgColor === TRANSPARENT ? `1px solid ${theme.colors.border.strong}` : void 0
      },
      children: pill.value
    },
    pill.key
  ));
}
const SPLIT_RE = /\s*,\s*/;
const TRANSPARENT = "rgba(0,0,0,0)";
function inferPills(rawValue) {
  if (rawValue === "" || rawValue == null) {
    return [];
  }
  if (Array.isArray(rawValue)) {
    return rawValue.filter((v) => v != null).map((v) => String(v).trim());
  }
  const value = String(rawValue);
  if (value[0] === "[") {
    try {
      return JSON.parse(value);
    } catch {
      return value.trim().split(SPLIT_RE);
    }
  }
  return value.trim().split(SPLIT_RE);
}
function getPillColor(value, field, theme) {
  const cfg = field.config;
  if (cfg.mappings?.length ?? 0 > 0) {
    return field.display(value).color ?? _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FALLBACK_COLOR;
  }
  if (cfg.color?.mode === _grafana_schema__WEBPACK_IMPORTED_MODULE_7__.FieldColorModeId.Fixed) {
    return theme.visualization.getColorByName(cfg.color?.fixedColor ?? _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FALLBACK_COLOR);
  }
  let colors = _grafana_data__WEBPACK_IMPORTED_MODULE_4__.classicColors;
  const configuredColor = cfg.color;
  if (configuredColor) {
    const mode = _grafana_data__WEBPACK_IMPORTED_MODULE_3__.fieldColorModeRegistry.get(configuredColor.mode);
    if (typeof mode?.getColors === "function") {
      colors = mode.getColors(theme);
    }
  }
  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getColorByStringHash)(colors, String(value));
}
const getStyles = (theme, { textWrap, shouldOverflow, maxHeight }) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  display: "inline-flex",
  gap: theme.spacing(0.5),
  flexWrap: textWrap ? "wrap" : "nowrap",
  ...shouldOverflow && {
    [(0,_styles__WEBPACK_IMPORTED_MODULE_8__.getActiveCellSelector)(Boolean(maxHeight))]: {
      flexWrap: "wrap"
    }
  },
  "> span": {
    display: "flex",
    padding: theme.spacing(0.25, 0.75),
    borderRadius: theme.shape.radius.default,
    fontSize: theme.typography.bodySmall.fontSize,
    lineHeight: theme.typography.bodySmall.lineHeight,
    whiteSpace: "nowrap"
  }
});


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/Cells/SparklineCell.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SparklineCell: () => (/* binding */ SparklineCell),
/* harmony export */   defaultSparklineCellConfig: () => (/* binding */ defaultSparklineCellConfig),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/dataframe/processDataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/field/scale.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _utils_measureText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/utils/measureText.ts");
/* harmony import */ var _FormattedValueDisplay_FormattedValueDisplay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/FormattedValueDisplay/FormattedValueDisplay.tsx");
/* harmony import */ var _Sparkline_Sparkline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Sparkline/Sparkline.tsx");
/* harmony import */ var _components_MaybeWrapWithLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/components/MaybeWrapWithLink.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/utils.ts");











const defaultSparklineCellConfig = {
  type: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.Sparkline,
  drawStyle: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.GraphDrawStyle.Line,
  lineInterpolation: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.LineInterpolation.Smooth,
  lineWidth: 1,
  fillOpacity: 17,
  gradientMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.GraphGradientMode.Hue,
  pointSize: 2,
  barAlignment: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.BarAlignment.Center,
  showPoints: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.VisibilityMode.Never,
  hideValue: false
};
const SparklineCell = (props) => {
  const { field, value, theme, timeRange, rowIdx, width } = props;
  const sparkline = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.prepareSparklineValue)(value, field);
  if (!sparkline) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MaybeWrapWithLink__WEBPACK_IMPORTED_MODULE_9__.MaybeWrapWithLink, { field, rowIdx, children: field.config.noValue || (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("grafana-ui.table.sparkline.no-data", "no data") });
  }
  if (sparkline.x && !sparkline.x.config.interval && sparkline.x.values.length > 1) {
    sparkline.x.config.interval = sparkline.x.values[1] - sparkline.x.values[0];
  }
  sparkline.y.values = sparkline.y.values.map((v) => {
    if (!Number.isFinite(v)) {
      return null;
    } else {
      return v;
    }
  });
  const range = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getMinMaxAndDelta)(sparkline.y);
  sparkline.y.config.min = range.min;
  sparkline.y.config.max = range.max;
  sparkline.y.state = { range };
  sparkline.timeRange = timeRange;
  const cellOptions = getTableSparklineCellOptions(field);
  const config = {
    color: field.config.color,
    custom: {
      ...defaultSparklineCellConfig,
      ...cellOptions
    }
  };
  const hideValue = cellOptions.hideValue;
  let valueWidth = 0;
  let valueElement = null;
  if (!hideValue) {
    const newValue = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.isDataFrameWithValue)(value) ? value.value : null;
    const displayValue = field.display(newValue);
    const alignmentFactor = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.getAlignmentFactor)(field, displayValue, rowIdx);
    valueWidth = (0,_utils_measureText__WEBPACK_IMPORTED_MODULE_6__.measureText)(`${alignmentFactor.prefix ?? ""}${alignmentFactor.text}${alignmentFactor.suffix ?? ""}`, 16).width + theme.spacing.gridSize;
    valueElement = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FormattedValueDisplay_FormattedValueDisplay__WEBPACK_IMPORTED_MODULE_7__.FormattedValueDisplay, { style: { width: valueWidth }, value: displayValue });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_MaybeWrapWithLink__WEBPACK_IMPORTED_MODULE_9__.MaybeWrapWithLink, { field, rowIdx, children: [
    valueElement,
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Sparkline_Sparkline__WEBPACK_IMPORTED_MODULE_8__.Sparkline, { width: width - valueWidth, height: 25, sparkline, config, theme })
  ] });
};
function getTableSparklineCellOptions(field) {
  let options = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.getCellOptions)(field);
  if (options.type === _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.Auto) {
    options = { ...options, type: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.Sparkline };
  }
  if (options.type === _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.Sparkline) {
    return options;
  }
  throw new Error(`Expected options type ${_grafana_schema__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.Sparkline} but got ${options.type}`);
}
const getStyles = (theme, { textAlign }) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  "&, & > a": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing(1),
    ...textAlign === "right" && { flexDirection: "row-reverse" }
  }
});


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/Cells/renderers.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoCellRenderer: () => (/* binding */ AutoCellRenderer),
/* harmony export */   getAutoRendererDisplayMode: () => (/* binding */ getAutoRendererDisplayMode),
/* harmony export */   getAutoRendererStyles: () => (/* binding */ getAutoRendererStyles),
/* harmony export */   getCellRenderer: () => (/* binding */ getCellRenderer),
/* harmony export */   getCellSpecificStyles: () => (/* binding */ getCellSpecificStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/dataframe/processDataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/dataframe/utils.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/utils.ts");
/* harmony import */ var _ActionsCell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/Cells/ActionsCell.tsx");
/* harmony import */ var _AutoCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/Cells/AutoCell.tsx");
/* harmony import */ var _BarGaugeCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/Cells/BarGaugeCell.tsx");
/* harmony import */ var _DataLinksCell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/Cells/DataLinksCell.tsx");
/* harmony import */ var _GeoCell__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/Cells/GeoCell.tsx");
/* harmony import */ var _ImageCell__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/Cells/ImageCell.tsx");
/* harmony import */ var _MarkdownCell__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/Cells/MarkdownCell.tsx");
/* harmony import */ var _PillCell__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/Cells/PillCell.tsx");
/* harmony import */ var _SparklineCell__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/Cells/SparklineCell.tsx");
















const AutoCellRenderer = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AutoCell__WEBPACK_IMPORTED_MODULE_9__.AutoCell, { value: props.value, field: props.field, rowIdx: props.rowIdx }));
AutoCellRenderer.displayName = "AutoCellRenderer";
function isCustomCellOptions(options) {
  return options.type === _types__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.Custom;
}
function mixinAutoCellStyles(fn) {
  return (theme, options) => {
    const styles = fn(theme, options);
    return (0,clsx__WEBPACK_IMPORTED_MODULE_1__.clsx)(styles, (0,_AutoCell__WEBPACK_IMPORTED_MODULE_9__.getStyles)(theme, options));
  };
}
const CELL_REGISTRY = {
  [_types__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.Auto]: {
    renderer: AutoCellRenderer,
    getStyles: _AutoCell__WEBPACK_IMPORTED_MODULE_9__.getStyles
  },
  [_types__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.ColorBackground]: {
    renderer: AutoCellRenderer,
    getStyles: _AutoCell__WEBPACK_IMPORTED_MODULE_9__.getStyles
  },
  [_types__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.ColorText]: {
    renderer: AutoCellRenderer,
    getStyles: _AutoCell__WEBPACK_IMPORTED_MODULE_9__.getStyles
  },
  [_types__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.JSONView]: {
    renderer: AutoCellRenderer,
    getStyles: mixinAutoCellStyles(_AutoCell__WEBPACK_IMPORTED_MODULE_9__.getJsonCellStyles)
  },
  [_types__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.Actions]: {
    // eslint-disable-next-line react/display-name
    renderer: (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ActionsCell__WEBPACK_IMPORTED_MODULE_8__.ActionsCell, { field: props.field, rowIdx: props.rowIdx, getActions: props.getActions ?? (() => []) })),
    getStyles: _ActionsCell__WEBPACK_IMPORTED_MODULE_8__.getStyles
  },
  [_types__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.DataLinks]: {
    // eslint-disable-next-line react/display-name
    renderer: (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DataLinksCell__WEBPACK_IMPORTED_MODULE_11__.DataLinksCell, { field: props.field, rowIdx: props.rowIdx })),
    getStyles: _DataLinksCell__WEBPACK_IMPORTED_MODULE_11__.getStyles
  },
  [_types__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.Gauge]: {
    // eslint-disable-next-line react/display-name
    renderer: (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _BarGaugeCell__WEBPACK_IMPORTED_MODULE_10__.BarGaugeCell,
      {
        field: props.field,
        value: props.value,
        theme: props.theme,
        height: props.height,
        width: props.width,
        rowIdx: props.rowIdx
      }
    ))
  },
  [_types__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.Sparkline]: {
    // eslint-disable-next-line react/display-name
    renderer: (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _SparklineCell__WEBPACK_IMPORTED_MODULE_16__.SparklineCell,
      {
        value: props.value,
        field: props.field,
        timeRange: props.timeRange,
        rowIdx: props.rowIdx,
        theme: props.theme,
        width: props.width
      }
    )),
    getStyles: _SparklineCell__WEBPACK_IMPORTED_MODULE_16__.getStyles
  },
  [_types__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.Geo]: {
    // eslint-disable-next-line react/display-name
    renderer: (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GeoCell__WEBPACK_IMPORTED_MODULE_12__.GeoCell, { value: props.value, height: props.height })),
    getStyles: _GeoCell__WEBPACK_IMPORTED_MODULE_12__.getStyles
  },
  [_types__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.Image]: {
    // eslint-disable-next-line react/display-name
    renderer: (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ImageCell__WEBPACK_IMPORTED_MODULE_13__.ImageCell, { cellOptions: props.cellOptions, field: props.field, value: props.value, rowIdx: props.rowIdx })),
    getStyles: _ImageCell__WEBPACK_IMPORTED_MODULE_13__.getStyles
  },
  [_types__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.Pill]: {
    // eslint-disable-next-line react/display-name
    renderer: (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _PillCell__WEBPACK_IMPORTED_MODULE_15__.PillCell,
      {
        rowIdx: props.rowIdx,
        field: props.field,
        theme: props.theme,
        getTextColorForBackground: props.getTextColorForBackground
      }
    )),
    getStyles: _PillCell__WEBPACK_IMPORTED_MODULE_15__.getStyles,
    testField: (field) => field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.string || field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.other && field.values.some((val) => Array.isArray(val))
  },
  [_types__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.Markdown]: {
    // eslint-disable-next-line react/display-name
    renderer: (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MarkdownCell__WEBPACK_IMPORTED_MODULE_14__.MarkdownCell, { field: props.field, rowIdx: props.rowIdx, disableSanitizeHtml: props.disableSanitizeHtml })),
    getStyles: _MarkdownCell__WEBPACK_IMPORTED_MODULE_14__.getStyles,
    testField: (field) => field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.string
  },
  [_types__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.Custom]: {
    // eslint-disable-next-line react/display-name
    renderer: (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props) => {
      if (!isCustomCellOptions(props.cellOptions) || !props.cellOptions.cellComponent) {
        return null;
      }
      const CustomCellComponent = props.cellOptions.cellComponent;
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomCellComponent, { field: props.field, rowIndex: props.rowIdx, frame: props.frame, value: props.value });
    })
  }
};
function getCellRenderer(field, cellOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getCellOptions)(field)) {
  const cellType = cellOptions?.type ?? _types__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.Auto;
  if (cellType === _types__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.Auto) {
    return CELL_REGISTRY[getAutoRendererDisplayMode(field)].renderer;
  }
  if (CELL_REGISTRY[cellType]?.testField && CELL_REGISTRY[cellType].testField(field) !== true) {
    return AutoCellRenderer;
  }
  return CELL_REGISTRY[cellType]?.renderer ?? AutoCellRenderer;
}
function getCellSpecificStyles(cellType, field, theme, options) {
  if (cellType === _types__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.Auto) {
    return getAutoRendererStyles(theme, options, field);
  }
  return CELL_REGISTRY[cellType]?.getStyles?.(theme, options);
}
function getAutoRendererStyles(theme, options, field) {
  const impliedDisplayMode = getAutoRendererDisplayMode(field);
  if (impliedDisplayMode !== _types__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.Auto) {
    return CELL_REGISTRY[impliedDisplayMode]?.getStyles?.(theme, options);
  }
  return (0,_AutoCell__WEBPACK_IMPORTED_MODULE_9__.getStyles)(theme, options);
}
function getAutoRendererDisplayMode(field) {
  if (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.geo) {
    return _types__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.Geo;
  }
  if (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.frame) {
    const firstValue = field.values[0];
    if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.isDataFrame)(firstValue) && (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.isTimeSeriesFrame)(firstValue)) {
      return _types__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.Sparkline;
    }
  }
  return _types__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.Auto;
}


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/Filter/Filter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Filter: () => (/* binding */ Filter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _themes_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _Tooltip_Popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Popover.tsx");
/* harmony import */ var _FilterList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/Filter/FilterList.tsx");
/* harmony import */ var _FilterPopup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/Filter/FilterPopup.tsx");










const Filter = ({
  name,
  rows,
  filter,
  setFilter,
  field,
  crossFilterOrder,
  crossFilterRows,
  iconClassName
}) => {
  const filterValue = filter[name]?.filtered;
  const filterIndex = crossFilterOrder.indexOf(name);
  let filteredRows;
  if (filterIndex > 0) {
    const previousFilterName = crossFilterOrder[filterIndex - 1];
    filteredRows = crossFilterRows[previousFilterName];
  } else if (filterIndex === -1 && crossFilterOrder.length > 0) {
    const previousFilterName = crossFilterOrder[crossFilterOrder.length - 1];
    filteredRows = crossFilterRows[previousFilterName];
  } else {
    filteredRows = rows;
  }
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const [isPopoverVisible, setPopoverVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const styles = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const filterEnabled = Boolean(filterValue);
  const [searchFilter, setSearchFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(filter[name]?.searchFilter || "");
  const [operator, setOperator] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(filter[name]?.operator || _FilterList__WEBPACK_IMPORTED_MODULE_7__.REGEX_OPERATOR);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    "button",
    {
      className: styles.headerFilter,
      ref,
      type: "button",
      "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.Panels.Visualization.TableNG.Filters.HeaderButton,
      onClick: (ev) => {
        setPopoverVisible(true);
        ev.stopPropagation();
      },
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "filter", className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(iconClassName, { [styles.filterIconEnabled]: filterEnabled }) }),
        isPopoverVisible && ref.current && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _Tooltip_Popover__WEBPACK_IMPORTED_MODULE_6__.Popover,
          {
            content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _FilterPopup__WEBPACK_IMPORTED_MODULE_8__.FilterPopup,
              {
                name,
                rows: filteredRows,
                filterValue,
                setFilter,
                field,
                onClose: () => setPopoverVisible(false),
                searchFilter,
                setSearchFilter,
                operator,
                setOperator
              }
            ),
            onKeyDown: (event) => {
              if (event.key === " ") {
                event.stopPropagation();
              }
            },
            placement: "bottom-start",
            referenceElement: ref.current,
            show: true
          }
        )
      ]
    }
  );
};
const getStyles = (theme) => ({
  headerFilter: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    background: "transparent",
    border: "none",
    label: "headerFilter",
    padding: 0,
    alignSelf: "flex-end"
  }),
  filterIconEnabled: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    label: "filterIconEnabled",
    color: theme.colors.primary.text
  })
});


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/Filter/FilterList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterList: () => (/* binding */ FilterList),
/* harmony export */   REGEX_OPERATOR: () => (/* binding */ REGEX_OPERATOR)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _themes_ThemeContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Forms_Checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Checkbox.tsx");
/* harmony import */ var _Forms_Label__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _Layout_Stack_Stack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _FilterPopup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/Filter/FilterPopup.tsx");













const ITEM_HEIGHT = 28;
const MIN_HEIGHT = ITEM_HEIGHT * 5;
const REGEX_OPERATOR = _FilterPopup__WEBPACK_IMPORTED_MODULE_11__.operatorSelectableValues["Contains"];
const XPR_OPERATOR = _FilterPopup__WEBPACK_IMPORTED_MODULE_11__.operatorSelectableValues["Expression"];
const comparableValue = (value) => {
  value = value.trim().replace(/\\/g, "");
  if (/^(\d{4}-\d{2}-\d{2}|\d{4}\/\d{2}\/\d{2})/.test(value)) {
    const date = new Date(value);
    if (!isNaN(date.getTime())) {
      const fmt = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.getValueFormat)("dateTimeAsIso");
      return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.formattedValueToString)(fmt(date.getTime()));
    }
  }
  const num = parseFloat(value);
  if (!isNaN(num)) {
    return num;
  }
  const lvalue = value.toLowerCase();
  if (lvalue === "true" || lvalue === "false") {
    return lvalue === "true";
  }
  return value;
};
const FilterList = ({ options, values, caseSensitive, onChange, searchFilter, operator }) => {
  const regex = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => new RegExp(searchFilter, caseSensitive ? void 0 : "i"), [searchFilter, caseSensitive]);
  const items = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => options.filter((option) => {
      if (!searchFilter || operator.value === REGEX_OPERATOR.value) {
        if (option.label === void 0) {
          return false;
        }
        return regex.test(option.label);
      } else if (operator.value === XPR_OPERATOR.value) {
        if (option.value === void 0) {
          return false;
        }
        try {
          const xpr = searchFilter.replace(/\\/g, "");
          const fnc = new Function("$", `'use strict'; return ${xpr};`);
          const val = comparableValue(option.value);
          return fnc(val);
        } catch (_) {
        }
        return false;
      } else {
        if (option.value === void 0) {
          return false;
        }
        const value1 = comparableValue(option.value);
        const value2 = comparableValue(searchFilter);
        switch (operator.value) {
          case "=":
            return value1 === value2;
          case "!=":
            return value1 !== value2;
          case ">":
            return value1 > value2;
          case ">=":
            return value1 >= value2;
          case "<":
            return value1 < value2;
          case "<=":
            return value1 <= value2;
        }
        return false;
      }
    }),
    [options, regex, operator, searchFilter]
  );
  const selectedItems = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => items.filter((item) => values.includes(item)), [items, values]);
  const selectCheckValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => items.length === selectedItems.length, [items, selectedItems]);
  const selectCheckIndeterminate = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => selectedItems.length > 0 && items.length > selectedItems.length,
    [items, selectedItems]
  );
  const selectCheckLabel = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => selectedItems.length ? `${selectedItems.length} selected` : `Select all`,
    [selectedItems]
  );
  const selectCheckDescription = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => items.length !== selectedItems.length ? "Add all displayed values to the filter" : "Remove all displayed values from the filter",
    [items, selectedItems]
  );
  const styles = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const theme = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_7__.useTheme2)();
  const gutter = theme.spacing.gridSize;
  const height = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => Math.min(items.length * ITEM_HEIGHT, MIN_HEIGHT) + gutter, [gutter, items.length]);
  const onCheckedChanged = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (option) => (event) => {
      const newValues = event.currentTarget.checked ? values.concat(option) : values.filter((c) => c.value !== option.value);
      onChange(newValues);
    },
    [onChange, values]
  );
  const onSelectChanged = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    if (items.length === selectedItems.length) {
      const newValues = values.filter((item) => !items.includes(item));
      onChange(newValues);
    } else {
      const newValues = [.../* @__PURE__ */ new Set([...values, ...items])];
      onChange(newValues);
    }
  }, [onChange, values, items, selectedItems]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Layout_Stack_Stack__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "column", children: items.length > 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_window__WEBPACK_IMPORTED_MODULE_3__.FixedSizeList,
      {
        height,
        itemCount: items.length,
        itemSize: ITEM_HEIGHT,
        itemData: { items, values: selectedItems, onCheckedChanged, className: styles.filterListRow },
        width: "100%",
        className: styles.filterList,
        children: ItemRenderer
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "div",
      {
        className: styles.filterListRow,
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.components.Panels.Visualization.TableNG.Filters.SelectAll,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _Forms_Checkbox__WEBPACK_IMPORTED_MODULE_8__.Checkbox,
          {
            value: selectCheckValue,
            indeterminate: selectCheckIndeterminate,
            label: selectCheckLabel,
            description: selectCheckDescription,
            onChange: onSelectChanged
          }
        )
      }
    )
  ] }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_Label__WEBPACK_IMPORTED_MODULE_9__.Label, { className: styles.noValuesLabel, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "grafana-ui.table.no-values-label", children: "No values" }) }) });
};
function ItemRenderer({ index, style, data: { onCheckedChanged, items, values, className } }) {
  const option = items[index];
  const { value, label } = option;
  const isChecked = values.find((s) => s.value === value) !== void 0;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className, style, title: label, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_Checkbox__WEBPACK_IMPORTED_MODULE_8__.Checkbox, { value: isChecked, label, onChange: onCheckedChanged(option) }) });
}
const getStyles = (theme) => ({
  filterList: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    label: "filterList",
    backgroundColor: theme.components.input.background,
    border: `1px solid ${theme.colors.border.medium}`,
    borderRadius: theme.shape.radius.default
  }),
  filterListRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    label: "filterListRow",
    cursor: "pointer",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    padding: theme.spacing(0.5),
    ":hover": {
      backgroundColor: theme.colors.action.hover
    }
  }),
  selectDivider: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    label: "selectDivider",
    width: "100%",
    borderTop: `1px solid ${theme.colors.border.medium}`,
    padding: theme.spacing(0.5, 2)
  }),
  noValuesLabel: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    paddingTop: theme.spacing(1)
  })
});


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/Filter/FilterPopup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterPopup: () => (/* binding */ FilterPopup),
/* harmony export */   operatorSelectableValues: () => (/* binding */ operatorSelectableValues)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _themes_ThemeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _ClickOutsideWrapper_ClickOutsideWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx");
/* harmony import */ var _Dropdown_ButtonSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Dropdown/ButtonSelect.tsx");
/* harmony import */ var _FilterInput_FilterInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/FilterInput/FilterInput.tsx");
/* harmony import */ var _Forms_Label__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _Layout_Stack_Stack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/utils.ts");
/* harmony import */ var _FilterList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/Filter/FilterList.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/Filter/utils.ts");
















const operatorSelectableValues = {
  Contains: { label: "Contains", value: "Contains", description: "Contains" },
  "=": { label: "=", value: "=", description: "Equals" },
  "!=": { label: "!=", value: "!=", description: "Not equals" },
  ">": { label: ">", value: ">", description: "Greater" },
  ">=": { label: ">=", value: ">=", description: "Greater or Equal" },
  "<": { label: "<", value: "<", description: "Less" },
  "<=": { label: "<=", value: "<=", description: "Less or Equal" },
  Expression: {
    label: "Expression",
    value: "Expression",
    description: 'Bool Expression (Char $ represents the column value in the expression, e.g. "$ >= 10 && $ <= 12")'
  }
};
const OPERATORS = Object.values(operatorSelectableValues);
const FilterPopup = ({
  name,
  rows,
  filterValue,
  setFilter,
  onClose,
  field,
  searchFilter,
  setSearchFilter,
  operator,
  setOperator
}) => {
  const theme = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_5__.useTheme2)();
  const uniqueValues = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_14__.calculateUniqueFieldValues)(rows, field), [rows, field]);
  const options = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_14__.valuesToOptions)(uniqueValues), [uniqueValues]);
  const filteredOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_14__.getFilteredOptions)(options, filterValue), [options, filterValue]);
  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(filteredOptions);
  const [matchCase, setMatchCase] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const onCancel = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event) => onClose(), [onClose]);
  const onFilter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (event) => {
      if (values.length !== 0) {
        const filteredSet = new Set(values.map((item) => item.value));
        setFilter((filter) => ({
          ...filter,
          [name]: { filtered: values, filteredSet, searchFilter, operator }
        }));
      } else {
        setFilter((filter) => {
          const newFilter = { ...filter };
          delete newFilter[name];
          return newFilter;
        });
      }
      onClose();
    },
    [setFilter, values, onClose]
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  const onClearFilter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (event) => {
      setFilter((filter) => {
        const newFilter = { ...filter };
        delete newFilter[name];
        return newFilter;
      });
      onClose();
    },
    [setFilter, onClose]
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  const filterInputPlaceholder = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("grafana-ui.table.filter-popup-input-placeholder", "Filter values");
  const clearFilterVisible = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => filterValue !== void 0, [filterValue]);
  const styles = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ClickOutsideWrapper_ClickOutsideWrapper__WEBPACK_IMPORTED_MODULE_7__.ClickOutsideWrapper, { onClick: onCancel, useCapture: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "div",
    {
      className: styles.filterContainer,
      onClick: stopPropagation,
      "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.Panels.Visualization.TableNG.Filters.Container,
      ref: containerRef,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Stack_Stack__WEBPACK_IMPORTED_MODULE_11__.Stack, { direction: "column", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Stack_Stack__WEBPACK_IMPORTED_MODULE_11__.Stack, { alignItems: "center", children: [
          field && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_Label__WEBPACK_IMPORTED_MODULE_10__.Label, { className: styles.label, children: (0,_utils__WEBPACK_IMPORTED_MODULE_12__.getDisplayName)(field) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _Dropdown_ButtonSelect__WEBPACK_IMPORTED_MODULE_8__.ButtonSelect,
            {
              variant: "canvas",
              options: OPERATORS,
              onChange: setOperator,
              value: operator,
              tooltip: operator.description,
              root: containerRef.current ?? void 0
            }
          )
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.listDivider }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Stack_Stack__WEBPACK_IMPORTED_MODULE_11__.Stack, { gap: 1, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _FilterInput_FilterInput__WEBPACK_IMPORTED_MODULE_9__.FilterInput,
            {
              placeholder: filterInputPlaceholder,
              title: filterInputPlaceholder,
              onChange: setSearchFilter,
              value: searchFilter
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _Button_Button__WEBPACK_IMPORTED_MODULE_6__.Button,
            {
              tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("grafana-ui.table.filter-popup-aria-label-match-case", "Match case"),
              variant: "secondary",
              style: { color: matchCase ? theme.colors.text.link : theme.colors.text.disabled },
              onClick: () => {
                setMatchCase((s) => !s);
              },
              icon: "text-fields"
            }
          )
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _FilterList__WEBPACK_IMPORTED_MODULE_13__.FilterList,
          {
            onChange: setValues,
            values,
            options,
            caseSensitive: matchCase,
            searchFilter,
            operator
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Stack_Stack__WEBPACK_IMPORTED_MODULE_11__.Stack, { gap: 3, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Stack_Stack__WEBPACK_IMPORTED_MODULE_11__.Stack, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_6__.Button, { size: "sm", onClick: onFilter, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "grafana-ui.table.filter-popup-apply", children: "Ok" }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_6__.Button, { size: "sm", variant: "secondary", onClick: onCancel, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "grafana-ui.table.filter-popup-cancel", children: "Cancel" }) })
          ] }),
          clearFilterVisible && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Layout_Stack_Stack__WEBPACK_IMPORTED_MODULE_11__.Stack, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_6__.Button, { fill: "text", size: "sm", onClick: onClearFilter, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "grafana-ui.table.filter-popup-clear", children: "Clear filter" }) }) })
        ] })
      ] })
    }
  ) });
};
const getStyles = (theme) => ({
  filterContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    label: "filterContainer",
    width: "100%",
    minWidth: "250px",
    height: "100%",
    backgroundColor: theme.colors.background.primary,
    border: `1px solid ${theme.colors.border.weak}`,
    padding: theme.spacing(2),
    boxShadow: theme.shadows.z3,
    borderRadius: theme.shape.radius.default
  }),
  listDivider: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    label: "listDivider",
    width: "100%",
    borderTop: `1px solid ${theme.colors.border.medium}`
  }),
  label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: 0
  })
});
const stopPropagation = (event) => {
  event.stopPropagation();
};


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/Filter/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateUniqueFieldValues: () => (/* binding */ calculateUniqueFieldValues),
/* harmony export */   getFilteredOptions: () => (/* binding */ getFilteredOptions),
/* harmony export */   valuesToOptions: () => (/* binding */ valuesToOptions)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/utils.ts");



function calculateUniqueFieldValues(rows, field) {
  if (!field || rows.length === 0) {
    return {};
  }
  const set = {};
  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];
    const fieldValue = row[(0,_utils__WEBPACK_IMPORTED_MODULE_1__.getDisplayName)(field)];
    const value = field.display ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.formattedValueToString)(field.display(fieldValue)) : String(fieldValue);
    set[value || "(Blanks)"] = value;
  }
  return set;
}
function getFilteredOptions(options, filterValues) {
  if (!filterValues) {
    return [];
  }
  return options.filter((option) => filterValues.some((filtered) => filtered.value === option.value));
}
function valuesToOptions(unique) {
  return Object.keys(unique).map((key) => ({ value: unique[key], label: key })).sort(sortOptions);
}
function sortOptions(a, b) {
  if (a.label === void 0 && b.label === void 0) {
    return 0;
  }
  if (a.label === void 0 && b.label !== void 0) {
    return -1;
  }
  if (a.label !== void 0 && b.label === void 0) {
    return 1;
  }
  if (a.label < b.label) {
    return -1;
  }
  if (a.label > b.label) {
    return 1;
  }
  return 0;
}


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/TableNG.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableNG: () => (/* binding */ TableNG)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_data_grid_lib_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-data-grid/lib/styles.css");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var micro_memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/micro-memoize/dist/micro-memoize.js");
/* harmony import */ var micro_memoize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(micro_memoize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_data_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-data-grid/lib/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/events/common.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/field/displayProcessor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-schema/src/raw/dashboard/x/dashboard_types.gen.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _themes_ThemeContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/utils/colors.ts");
/* harmony import */ var _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Pagination/Pagination.tsx");
/* harmony import */ var _PanelChrome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/PanelContext.ts");
/* harmony import */ var _DataLinksActionsTooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/components/Table/DataLinksActionsTooltip.tsx");
/* harmony import */ var _TableCellInspector__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableCellInspector.tsx");
/* harmony import */ var _Cells_renderers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/Cells/renderers.tsx");
/* harmony import */ var _components_HeaderCell__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/components/HeaderCell.tsx");
/* harmony import */ var _components_RowExpander__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/components/RowExpander.tsx");
/* harmony import */ var _components_SummaryCell__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/components/SummaryCell.tsx");
/* harmony import */ var _components_TableCellActions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/components/TableCellActions.tsx");
/* harmony import */ var _components_TableCellTooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/components/TableCellTooltip.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/constants.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/hooks.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/styles.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/utils.ts");



























const EXPANDED_COLUMN_KEY = "expanded";
function TableNG(props) {
  const {
    cellHeight,
    data,
    disableSanitizeHtml,
    enablePagination = false,
    enableSharedCrosshair = false,
    enableVirtualization,
    frozenColumns = 0,
    getActions = () => [],
    height,
    initialSortBy,
    maxRowHeight: _maxRowHeight,
    noHeader,
    onCellFilterAdded,
    onColumnResize,
    onSortByChange,
    showTypeIcons,
    structureRev,
    timeRange,
    transparent,
    width
  } = props;
  const theme = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_13__.useTheme2)();
  const styles = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_13__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_27__.getGridStyles, enablePagination, transparent);
  const panelContext = (0,_PanelChrome__WEBPACK_IMPORTED_MODULE_16__.usePanelContext)();
  const userCanExecuteActions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => panelContext.canExecuteActions?.() ?? false, [panelContext]);
  const getCellActions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(
    (field, rowIdx) => {
      if (!userCanExecuteActions) {
        return [];
      }
      return getActions(data, field, rowIdx);
    },
    [getActions, data, userCanExecuteActions]
  );
  const visibleFields = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_28__.getVisibleFields)(data.fields), [data.fields]);
  const hasHeader = !noHeader;
  const hasFooter = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(
    () => visibleFields.some((field) => Boolean(field.config.custom?.footer?.reducers?.length)),
    [visibleFields]
  );
  const footerHeight = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(
    () => hasFooter ? (0,_utils__WEBPACK_IMPORTED_MODULE_28__.calculateFooterHeight)(visibleFields) : 0,
    [hasFooter, visibleFields]
  );
  const resizeHandler = (0,_hooks__WEBPACK_IMPORTED_MODULE_26__.useColumnResize)(onColumnResize);
  const rows = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_28__.frameToRecords)(data), [data]);
  const hasNestedFrames = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_28__.getIsNestedTable)(data.fields), [data]);
  const getTextColorForBackground = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => micro_memoize__WEBPACK_IMPORTED_MODULE_3___default()(_utils_colors__WEBPACK_IMPORTED_MODULE_14__.getTextColorForBackground, { maxSize: 1e3 }), []);
  const {
    rows: filteredRows,
    filter,
    setFilter,
    crossFilterOrder,
    crossFilterRows
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_26__.useFilteredRows)(rows, data.fields, { hasNestedFrames });
  const {
    rows: sortedRows,
    sortColumns,
    setSortColumns
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_26__.useSortedRows)(filteredRows, data.fields, { hasNestedFrames, initialSortBy });
  const [inspectCell, setInspectCell] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
  const [tooltipState, setTooltipState] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
  const [expandedRows, setExpandedRows] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(() => /* @__PURE__ */ new Set());
  const defaultRowHeight = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(
    () => (0,_utils__WEBPACK_IMPORTED_MODULE_28__.getDefaultRowHeight)(theme, visibleFields, cellHeight),
    [theme, visibleFields, cellHeight]
  );
  const gridRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const scrollbarWidth = (0,_hooks__WEBPACK_IMPORTED_MODULE_26__.useScrollbarWidth)(gridRef, height);
  const availableWidth = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(
    () => (hasNestedFrames ? width - _constants__WEBPACK_IMPORTED_MODULE_25__.COLUMN.EXPANDER_WIDTH : width) - scrollbarWidth,
    [width, hasNestedFrames, scrollbarWidth]
  );
  const getCellColorInlineStyles = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_28__.getCellColorInlineStylesFactory)(theme), [theme]);
  const applyToRowBgFn = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(
    () => (0,_utils__WEBPACK_IMPORTED_MODULE_28__.getApplyToRowBgFn)(data.fields, getCellColorInlineStyles) ?? void 0,
    [data.fields, getCellColorInlineStyles]
  );
  const typographyCtx = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(
    () => (0,_utils__WEBPACK_IMPORTED_MODULE_28__.createTypographyContext)(
      theme.typography.fontSize,
      theme.typography.fontFamily,
      (0,_utils__WEBPACK_IMPORTED_MODULE_28__.extractPixelValue)(theme.typography.body.letterSpacing) * theme.typography.fontSize
    ),
    [theme]
  );
  const [widths, numFrozenColsFullyInView] = (0,_hooks__WEBPACK_IMPORTED_MODULE_26__.useColWidths)(visibleFields, availableWidth, frozenColumns);
  const headerHeight = (0,_hooks__WEBPACK_IMPORTED_MODULE_26__.useHeaderHeight)({
    columnWidths: widths,
    fields: visibleFields,
    enabled: hasHeader,
    sortColumns,
    showTypeIcons: showTypeIcons ?? false,
    typographyCtx
  });
  const maxRowHeight = _maxRowHeight != null ? Math.max(_constants__WEBPACK_IMPORTED_MODULE_25__.TABLE.LINE_HEIGHT, _maxRowHeight) : void 0;
  const rowHeight = (0,_hooks__WEBPACK_IMPORTED_MODULE_26__.useRowHeight)({
    columnWidths: widths,
    fields: visibleFields,
    hasNestedFrames,
    defaultHeight: defaultRowHeight,
    expandedRows,
    typographyCtx,
    maxHeight: maxRowHeight
  });
  const {
    rows: paginatedRows,
    page,
    setPage,
    numPages,
    pageRangeStart,
    pageRangeEnd,
    smallPagination
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_26__.usePaginatedRows)(sortedRows, {
    enabled: enablePagination,
    width: availableWidth,
    height,
    footerHeight,
    headerHeight: hasHeader ? _constants__WEBPACK_IMPORTED_MODULE_25__.TABLE.HEADER_ROW_HEIGHT : 0,
    rowHeight
  });
  const [footers, isUniformFooter] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    const footers2 = [];
    let isUniformFooter2 = true;
    let firstReducers;
    for (const field of visibleFields) {
      const footer = field.config?.custom?.footer;
      footers2.push(footer);
      if (firstReducers === void 0 && (footer?.reducers?.length ?? 0) > 0) {
        firstReducers = footer?.reducers;
      } else if (firstReducers !== void 0) {
        const reducers = footer?.reducers;
        if (reducers?.length ?? 0 > 0) {
          if (reducers.length !== firstReducers.length || reducers.some((r, idx) => firstReducers?.[idx] !== r)) {
            isUniformFooter2 = false;
            break;
          }
        }
      }
    }
    return [footers2, isUniformFooter2];
  }, [visibleFields]);
  const rowHeightFn = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    if (typeof rowHeight === "function") {
      return rowHeight;
    }
    if (typeof rowHeight === "string") {
      return () => _constants__WEBPACK_IMPORTED_MODULE_25__.TABLE.MAX_CELL_HEIGHT;
    }
    return () => rowHeight;
  }, [rowHeight]);
  const renderRow = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(
    () => renderRowFactory(data.fields, panelContext, expandedRows, enableSharedCrosshair),
    [data, enableSharedCrosshair, expandedRows, panelContext]
  );
  const commonDataGridProps = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(
    () => ({
      enableVirtualization: !_utils__WEBPACK_IMPORTED_MODULE_28__.IS_SAFARI_26 && enableVirtualization !== false && rowHeight !== "auto",
      defaultColumnOptions: {
        minWidth: 50,
        resizable: true,
        sortable: true
        // draggable: true,
      },
      onColumnResize: resizeHandler,
      onSortColumnsChange: (newSortColumns) => {
        setSortColumns(newSortColumns);
        onSortByChange?.(
          newSortColumns.map(({ columnKey, direction }) => ({
            displayName: columnKey,
            desc: direction === "DESC"
          }))
        );
      },
      sortColumns,
      rowHeight,
      bottomSummaryRows: hasFooter ? [{}] : void 0,
      summaryRowHeight: footerHeight,
      headerRowClass: styles.headerRow,
      headerRowHeight: noHeader ? 0 : _constants__WEBPACK_IMPORTED_MODULE_25__.TABLE.HEADER_ROW_HEIGHT
    }),
    [
      enableVirtualization,
      hasFooter,
      resizeHandler,
      sortColumns,
      rowHeight,
      styles.headerRow,
      noHeader,
      setSortColumns,
      onSortByChange,
      footerHeight
    ]
  );
  const buildNestedTableExpanderColumn = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(
    (nestedColumns, hasNestedHeaders, renderers) => ({
      key: EXPANDED_COLUMN_KEY,
      name: "",
      field: {
        name: "",
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_9__.FieldType.other,
        config: {},
        values: []
      },
      cellClass(row) {
        if (row.__depth !== 0) {
          return styles.cellNested;
        }
        return;
      },
      colSpan(args) {
        return args.type === "ROW" && args.row.__depth === 1 ? data.fields.length : 1;
      },
      renderCell: ({ row }) => {
        if (row.__depth === 0) {
          const rowIdx = row.__index;
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _components_RowExpander__WEBPACK_IMPORTED_MODULE_21__.RowExpander,
            {
              isExpanded: expandedRows.has(rowIdx),
              onCellExpand: () => {
                if (expandedRows.has(rowIdx)) {
                  expandedRows.delete(rowIdx);
                } else {
                  expandedRows.add(rowIdx);
                }
                setExpandedRows(new Set(expandedRows));
              }
            }
          );
        }
        const nestedData = row.data;
        if (!nestedData) {
          return null;
        }
        const expandedRecords = (0,_utils__WEBPACK_IMPORTED_MODULE_28__.applySort)((0,_utils__WEBPACK_IMPORTED_MODULE_28__.frameToRecords)(nestedData), nestedData.fields, sortColumns);
        if (!expandedRecords.length) {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.noDataNested, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_10__.Trans, { i18nKey: "grafana-ui.table.nested-table.no-data", children: "No data" }) });
        }
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          react_data_grid__WEBPACK_IMPORTED_MODULE_5__.DataGrid,
          {
            ...commonDataGridProps,
            className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.clsx)(styles.grid, styles.gridNested),
            headerRowClass: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.clsx)(styles.headerRow, { [styles.displayNone]: !hasNestedHeaders }),
            headerRowHeight: hasNestedHeaders ? _constants__WEBPACK_IMPORTED_MODULE_25__.TABLE.HEADER_HEIGHT : 0,
            columns: nestedColumns,
            rows: expandedRecords,
            renderers
          }
        );
      },
      width: _constants__WEBPACK_IMPORTED_MODULE_25__.COLUMN.EXPANDER_WIDTH,
      minWidth: _constants__WEBPACK_IMPORTED_MODULE_25__.COLUMN.EXPANDER_WIDTH
    }),
    [commonDataGridProps, data.fields.length, expandedRows, sortColumns, styles]
  );
  const fromFields = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(
    (f, widths2) => {
      const result = {
        columns: [],
        cellRootRenderers: {}
      };
      let lastRowIdx = -1;
      let rowCellStyle = {
        color: void 0,
        background: void 0
      };
      f.forEach((field, i) => {
        const cellOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_28__.getCellOptions)(field);
        const cellType = cellOptions.type;
        if (cellType === _grafana_schema__WEBPACK_IMPORTED_MODULE_12__.TableCellDisplayMode.Pill && (field.config.mappings?.length ?? 0 > 0)) {
          field = {
            ...field,
            config: {
              ...field.config,
              color: {
                ...field.config.color,
                mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_11__.FieldColorModeId.Fixed,
                fixedColor: field.config.color?.fixedColor ?? _grafana_data__WEBPACK_IMPORTED_MODULE_8__.FALLBACK_COLOR
              }
            }
          };
          field.display = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.getDisplayProcessor)({ field, theme });
        }
        if (cellType === _grafana_schema__WEBPACK_IMPORTED_MODULE_12__.TableCellDisplayMode.JSONView || field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_9__.FieldType.other) {
          field.display = (0,_utils__WEBPACK_IMPORTED_MODULE_28__.displayJsonValue)(field);
        }
        const textAlign = (0,_utils__WEBPACK_IMPORTED_MODULE_28__.getAlignment)(field);
        const justifyContent = (0,_utils__WEBPACK_IMPORTED_MODULE_28__.getJustifyContent)(textAlign);
        const displayName = (0,_utils__WEBPACK_IMPORTED_MODULE_28__.getDisplayName)(field);
        const headerCellClass = (0,_styles__WEBPACK_IMPORTED_MODULE_27__.getHeaderCellStyles)(theme, justifyContent);
        const CellType = (0,_Cells_renderers__WEBPACK_IMPORTED_MODULE_19__.getCellRenderer)(field, cellOptions);
        const cellInspect = (0,_utils__WEBPACK_IMPORTED_MODULE_28__.isCellInspectEnabled)(field);
        const showFilters = Boolean(field.config.filterable && onCellFilterAdded != null);
        const showActions = cellInspect || showFilters;
        const width2 = widths2[i];
        const cellActionClassName = showActions ? (0,clsx__WEBPACK_IMPORTED_MODULE_2__.clsx)("table-cell-actions", (0,_styles__WEBPACK_IMPORTED_MODULE_27__.getCellActionStyles)(theme, textAlign)) : void 0;
        const shouldOverflow = !_utils__WEBPACK_IMPORTED_MODULE_28__.IS_SAFARI_26 && rowHeight !== "auto" && ((0,_utils__WEBPACK_IMPORTED_MODULE_28__.shouldTextOverflow)(field) || Boolean(maxRowHeight));
        const textWrap = rowHeight === "auto" || (0,_utils__WEBPACK_IMPORTED_MODULE_28__.shouldTextWrap)(field);
        const canBeColorized = (0,_utils__WEBPACK_IMPORTED_MODULE_28__.canFieldBeColorized)(cellType, applyToRowBgFn);
        const cellStyleOptions = {
          textAlign,
          textWrap,
          shouldOverflow,
          maxHeight: maxRowHeight
        };
        const defaultCellStyles = (0,_styles__WEBPACK_IMPORTED_MODULE_27__.getDefaultCellStyles)(theme, cellStyleOptions);
        const cellSpecificStyles = (0,_Cells_renderers__WEBPACK_IMPORTED_MODULE_19__.getCellSpecificStyles)(cellType, field, theme, cellStyleOptions);
        const linkStyles = (0,_styles__WEBPACK_IMPORTED_MODULE_27__.getLinkStyles)(theme, canBeColorized);
        const cellParentStyles = (0,clsx__WEBPACK_IMPORTED_MODULE_2__.clsx)(defaultCellStyles, linkStyles);
        const maxHeightClassName = maxRowHeight ? (0,_styles__WEBPACK_IMPORTED_MODULE_27__.getMaxHeightCellStyles)(theme, cellStyleOptions) : void 0;
        const styleFieldValue = field.config.custom?.styleField;
        const styleField = styleFieldValue ? data.fields.find((0,_utils__WEBPACK_IMPORTED_MODULE_28__.predicateByName)(styleFieldValue)) : void 0;
        const styleFieldName = styleField ? (0,_utils__WEBPACK_IMPORTED_MODULE_28__.getDisplayName)(styleField) : void 0;
        const hasValidStyleField = Boolean(styleFieldName);
        const renderCellRoot2 = (key, props2) => {
          const rowIdx = props2.row.__index;
          if (rowIdx !== lastRowIdx) {
            lastRowIdx = rowIdx;
            rowCellStyle.color = void 0;
            rowCellStyle.background = void 0;
            if (applyToRowBgFn != null) {
              rowCellStyle = { ...rowCellStyle, ...applyToRowBgFn(rowIdx) };
            }
          }
          let style = { ...rowCellStyle };
          if (canBeColorized) {
            const value = props2.row[props2.column.key];
            const displayValue = field.display(value);
            const cellColorStyles = getCellColorInlineStyles(cellOptions, displayValue, applyToRowBgFn != null);
            Object.assign(style, cellColorStyles);
          }
          if (hasValidStyleField) {
            style = { ...style, ...(0,_utils__WEBPACK_IMPORTED_MODULE_28__.parseStyleJson)(props2.row[styleFieldName]) };
          }
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            react_data_grid__WEBPACK_IMPORTED_MODULE_5__.Cell,
            {
              ...props2,
              className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.clsx)(
                props2.className,
                cellParentStyles,
                cellSpecificStyles != null && { [cellSpecificStyles]: maxRowHeight == null }
              ),
              style
            },
            key
          );
        };
        result.cellRootRenderers[displayName] = renderCellRoot2;
        const renderBasicCellContent = (props2) => {
          const rowIdx = props2.row.__index;
          const value = props2.row[props2.column.key];
          const height2 = rowHeightFn(props2.row);
          const frame = data;
          let result2 = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              CellType,
              {
                cellOptions,
                frame,
                field,
                height: height2,
                rowIdx,
                theme,
                value,
                width: width2,
                timeRange,
                cellInspect,
                showFilters,
                getActions: getCellActions,
                disableSanitizeHtml,
                getTextColorForBackground
              }
            ),
            showActions && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _components_TableCellActions__WEBPACK_IMPORTED_MODULE_23__.TableCellActions,
              {
                field,
                value,
                displayName,
                cellInspect,
                showFilters,
                className: cellActionClassName,
                setInspectCell,
                onCellFilterAdded
              }
            )
          ] });
          if (maxRowHeight != null) {
            result2 = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.clsx)(maxHeightClassName, cellSpecificStyles), children: result2 });
          }
          return result2;
        };
        let renderCellContent = renderBasicCellContent;
        const tooltipFieldName = field.config.custom?.tooltip?.field;
        if (tooltipFieldName) {
          const tooltipField = data.fields.find((0,_utils__WEBPACK_IMPORTED_MODULE_28__.predicateByName)(tooltipFieldName));
          if (tooltipField) {
            const tooltipDisplayName = (0,_utils__WEBPACK_IMPORTED_MODULE_28__.getDisplayName)(tooltipField);
            const tooltipCellOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_28__.getCellOptions)(tooltipField);
            const tooltipFieldRenderer = (0,_Cells_renderers__WEBPACK_IMPORTED_MODULE_19__.getCellRenderer)(tooltipField, tooltipCellOptions);
            const tooltipCellStyleOptions = {
              textAlign: (0,_utils__WEBPACK_IMPORTED_MODULE_28__.getAlignment)(tooltipField),
              textWrap: (0,_utils__WEBPACK_IMPORTED_MODULE_28__.shouldTextWrap)(tooltipField),
              shouldOverflow: false,
              maxHeight: maxRowHeight
            };
            const tooltipCanBeColorized = (0,_utils__WEBPACK_IMPORTED_MODULE_28__.canFieldBeColorized)(tooltipCellOptions.type, applyToRowBgFn);
            const tooltipDefaultStyles = (0,_styles__WEBPACK_IMPORTED_MODULE_27__.getDefaultCellStyles)(theme, tooltipCellStyleOptions);
            const tooltipSpecificStyles = (0,_Cells_renderers__WEBPACK_IMPORTED_MODULE_19__.getCellSpecificStyles)(
              tooltipCellOptions.type,
              tooltipField,
              theme,
              tooltipCellStyleOptions
            );
            const tooltipLinkStyles = (0,_styles__WEBPACK_IMPORTED_MODULE_27__.getLinkStyles)(theme, tooltipCanBeColorized);
            const tooltipClasses = (0,_styles__WEBPACK_IMPORTED_MODULE_27__.getTooltipStyles)(theme, textAlign);
            const placement = field.config.custom?.tooltip?.placement ?? _grafana_schema__WEBPACK_IMPORTED_MODULE_12__.TableCellTooltipPlacement.Auto;
            const tooltipWidth = placement === _grafana_schema__WEBPACK_IMPORTED_MODULE_12__.TableCellTooltipPlacement.Left || placement === _grafana_schema__WEBPACK_IMPORTED_MODULE_12__.TableCellTooltipPlacement.Right ? tooltipField.config.custom?.width : width2;
            const tooltipProps = {
              cellOptions: tooltipCellOptions,
              classes: tooltipClasses,
              className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.clsx)(
                tooltipClasses.tooltipContent,
                tooltipDefaultStyles,
                tooltipSpecificStyles,
                tooltipLinkStyles
              ),
              data,
              disableSanitizeHtml,
              field: tooltipField,
              getActions: getCellActions,
              getTextColorForBackground,
              gridRef,
              placement,
              renderer: tooltipFieldRenderer,
              tooltipField,
              theme,
              width: tooltipWidth
            };
            renderCellContent = (props2) => {
              const tooltipHeight = rowHeightFn(props2.row);
              let tooltipStyle = { ...rowCellStyle };
              if (tooltipCanBeColorized) {
                const tooltipDisplayValue = tooltipField.display(props2.row[tooltipDisplayName]);
                const tooltipCellColorStyles = getCellColorInlineStyles(
                  tooltipCellOptions,
                  tooltipDisplayValue,
                  applyToRowBgFn != null
                );
                Object.assign(tooltipStyle, tooltipCellColorStyles);
              }
              return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _components_TableCellTooltip__WEBPACK_IMPORTED_MODULE_24__.TableCellTooltip,
                {
                  ...tooltipProps,
                  height: tooltipHeight,
                  rowIdx: props2.row.__index,
                  style: tooltipStyle,
                  children: renderBasicCellContent(props2)
                }
              );
            };
          }
        }
        result.columns.push({
          field,
          key: displayName,
          name: displayName,
          width: width2,
          headerCellClass,
          frozen: Math.min(frozenColumns, numFrozenColsFullyInView) > i,
          renderCell: renderCellContent,
          renderHeaderCell: ({ column, sortDirection }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _components_HeaderCell__WEBPACK_IMPORTED_MODULE_20__.HeaderCell,
            {
              column,
              rows,
              field,
              filter,
              setFilter,
              crossFilterOrder,
              crossFilterRows,
              direction: sortDirection,
              showTypeIcons
            }
          ),
          renderSummaryCell: () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _components_SummaryCell__WEBPACK_IMPORTED_MODULE_22__.SummaryCell,
            {
              rows: sortedRows,
              footers,
              field,
              colIdx: i,
              textAlign: (0,_utils__WEBPACK_IMPORTED_MODULE_28__.getSummaryCellTextAlign)(textAlign, cellType),
              rowLabel: isUniformFooter && i === 0,
              hideLabel: isUniformFooter && i !== 0
            }
          )
        });
      });
      return result;
    },
    [
      applyToRowBgFn,
      crossFilterOrder,
      crossFilterRows,
      data,
      disableSanitizeHtml,
      filter,
      footers,
      frozenColumns,
      getCellActions,
      getCellColorInlineStyles,
      getTextColorForBackground,
      isUniformFooter,
      maxRowHeight,
      numFrozenColsFullyInView,
      onCellFilterAdded,
      rows,
      rowHeight,
      rowHeightFn,
      setFilter,
      sortedRows,
      showTypeIcons,
      theme,
      timeRange
    ]
  );
  const firstRowNestedData = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(
    () => hasNestedFrames ? rows.find((r) => r.data)?.data : void 0,
    [hasNestedFrames, rows]
  );
  const [nestedFieldWidths] = (0,_hooks__WEBPACK_IMPORTED_MODULE_26__.useColWidths)(firstRowNestedData?.fields ?? [], availableWidth);
  const { columns, cellRootRenderers } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    const result = fromFields(visibleFields, widths);
    if (!firstRowNestedData) {
      return result;
    }
    const hasNestedHeaders = firstRowNestedData.meta?.custom?.noHeader !== true;
    const renderRow2 = renderRowFactory(firstRowNestedData.fields, panelContext, expandedRows, enableSharedCrosshair);
    const { columns: nestedColumns, cellRootRenderers: nestedCellRootRenderers } = fromFields(
      firstRowNestedData.fields,
      nestedFieldWidths
    );
    const expanderCellRenderer = (key, props2) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_data_grid__WEBPACK_IMPORTED_MODULE_5__.Cell, { ...props2 }, key);
    result.cellRootRenderers[EXPANDED_COLUMN_KEY] = expanderCellRenderer;
    result.columns.unshift(
      buildNestedTableExpanderColumn(nestedColumns, hasNestedHeaders, {
        renderRow: renderRow2,
        renderCell: (key, props2) => nestedCellRootRenderers[props2.column.key](key, props2)
      })
    );
    return result;
  }, [
    buildNestedTableExpanderColumn,
    enableSharedCrosshair,
    expandedRows,
    firstRowNestedData,
    fromFields,
    nestedFieldWidths,
    panelContext,
    visibleFields,
    widths
  ]);
  const structureRevColumns = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => columns, [columns, structureRev]);
  const renderCellRoot = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(
    (key, props2) => cellRootRenderers[props2.column.key](key, props2),
    [cellRootRenderers]
  );
  const itemsRangeStart = pageRangeStart;
  const displayedEnd = pageRangeEnd;
  const numRows = sortedRows.length;
  let rendered = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_data_grid__WEBPACK_IMPORTED_MODULE_5__.DataGrid,
      {
        ...commonDataGridProps,
        ref: gridRef,
        className: styles.grid,
        columns: structureRevColumns,
        rows: paginatedRows,
        headerRowClass: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.clsx)(styles.headerRow, { [styles.displayNone]: noHeader }),
        headerRowHeight: headerHeight,
        onCellClick: ({ column, row }, { clientX, clientY, preventGridDefault, target }) => {
          const field = columns[column.idx].field;
          if (target instanceof HTMLElement && // this walks up the tree to find either a faux link wrapper or the cell root
          // it then only proceeds if we matched the faux link wrapper
          target.closest("a[aria-haspopup], .rdg-cell")?.matches("a")) {
            const rowIdx = row.__index;
            setTooltipState({
              coords: {
                clientX,
                clientY
              },
              links: (0,_utils__WEBPACK_IMPORTED_MODULE_28__.getCellLinks)(field, rowIdx),
              actions: getCellActions(field, rowIdx)
            });
            preventGridDefault();
          }
        },
        onCellKeyDown: hasNestedFrames ? (_, event) => {
          if (event.isDefaultPrevented()) {
            event.preventGridDefault();
          }
        } : null,
        renderers: { renderRow, renderCell: renderCellRoot }
      }
    ),
    enablePagination && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.paginationContainer, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_15__.Pagination,
        {
          className: "table-ng-pagination",
          currentPage: page + 1,
          numberOfPages: numPages,
          showSmallVersion: smallPagination,
          onNavigate: (toPage) => {
            setPage(toPage - 1);
          }
        }
      ),
      !smallPagination && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.paginationSummary, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_10__.Trans, { i18nKey: "grafana-ui.table.pagination-summary", children: [
        { itemsRangeStart },
        " - ",
        { displayedEnd },
        " of ",
        { numRows },
        " rows"
      ] }) })
    ] }),
    tooltipState && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _DataLinksActionsTooltip__WEBPACK_IMPORTED_MODULE_17__.DataLinksActionsTooltip,
      {
        links: tooltipState.links ?? [],
        actions: tooltipState.actions,
        coords: tooltipState.coords,
        onTooltipClose: () => setTooltipState(void 0)
      }
    ),
    inspectCell && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _TableCellInspector__WEBPACK_IMPORTED_MODULE_18__.TableCellInspector,
      {
        mode: inspectCell.mode ?? _TableCellInspector__WEBPACK_IMPORTED_MODULE_18__.TableCellInspectorMode.text,
        value: inspectCell.value,
        onDismiss: () => setInspectCell(null)
      }
    )
  ] });
  if (_utils__WEBPACK_IMPORTED_MODULE_28__.IS_SAFARI_26) {
    rendered = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.safariWrapper, children: rendered });
  }
  return rendered;
}
const renderRowFactory = (fields, panelContext, expandedRows, enableSharedCrosshair) => (
  // eslint-disable-next-line react/display-name
  (key, props) => {
    const { row } = props;
    const rowIdx = row.__index;
    const isExpanded = expandedRows.has(rowIdx);
    if (row.__depth === 1 && !isExpanded) {
      return null;
    }
    if (row.data) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_data_grid__WEBPACK_IMPORTED_MODULE_5__.Row, { ...props, "aria-expanded": isExpanded }, key);
    }
    const handlers = {};
    if (enableSharedCrosshair) {
      const timeField = fields.find((f) => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_9__.FieldType.time);
      if (timeField) {
        handlers.onMouseEnter = () => {
          panelContext.eventBus.publish(
            new _grafana_data__WEBPACK_IMPORTED_MODULE_6__.DataHoverEvent({
              point: {
                time: timeField?.values[rowIdx]
              }
            })
          );
        };
        handlers.onMouseLeave = () => {
          panelContext.eventBus.publish(new _grafana_data__WEBPACK_IMPORTED_MODULE_6__.DataHoverClearEvent());
        };
      }
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_data_grid__WEBPACK_IMPORTED_MODULE_5__.Row, { ...props, ...handlers }, key);
  }
);


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/components/HeaderCell.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderCell: () => (/* binding */ HeaderCell)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _themes_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _types_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/types/icon.ts");
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _Filter_Filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/Filter/Filter.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/utils.ts");









const HeaderCell = ({
  column,
  rows,
  field,
  direction,
  filter,
  setFilter,
  crossFilterOrder,
  crossFilterRows,
  showTypeIcons
}) => {
  const headerCellWrap = field.config.custom?.wrapHeaderText ?? false;
  const styles = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles, headerCellWrap);
  const displayName = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getDisplayName)(field);
  const filterable = field.config.custom?.filterable ?? false;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!filterable && filter[displayName]) {
      setFilter((filter2) => {
        const newFilter = { ...filter2 };
        delete newFilter[displayName];
        return newFilter;
      });
    }
  }, [filterable, displayName, filter, setFilter]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    showTypeIcons && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__.Icon, { className: styles.headerCellIcon, name: (0,_types_icon__WEBPACK_IMPORTED_MODULE_4__.getFieldTypeIcon)(field), title: field?.type, size: "sm" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.headerCellLabel, children: (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getDisplayName)(field) }),
    direction && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _Icon_Icon__WEBPACK_IMPORTED_MODULE_5__.Icon,
      {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.headerCellIcon, styles.headerSortIcon),
        size: "lg",
        name: direction === "ASC" ? "arrow-up" : "arrow-down"
      }
    ),
    filterable && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _Filter_Filter__WEBPACK_IMPORTED_MODULE_6__.Filter,
      {
        name: column.key,
        rows,
        filter,
        setFilter,
        field,
        crossFilterOrder,
        crossFilterRows,
        iconClassName: styles.headerCellIcon
      }
    )
  ] });
};
const getStyles = (theme, headerTextWrap) => ({
  headerCellLabel: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    cursor: "pointer",
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.colors.text.secondary,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: headerTextWrap ? "pre-line" : "nowrap",
    "&:hover": {
      textDecoration: "underline"
    },
    "&::selection": {
      backgroundColor: "var(--rdg-background-color)",
      color: theme.colors.text.secondary
    }
  }),
  headerCellIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: theme.spacing(0.5),
    alignSelf: "flex-end",
    color: theme.colors.text.secondary
  }),
  headerSortIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: theme.spacing(0.25)
  })
});



/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/components/MaybeWrapWithLink.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaybeWrapWithLink: () => (/* binding */ MaybeWrapWithLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _DataLinksActionsTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Table/DataLinksActionsTooltip.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/utils.ts");






const MaybeWrapWithLink = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ field, rowIdx, children }) => {
  const linksCount = field.config.links?.length ?? 0;
  const actionsCount = field.config.actions?.length ?? 0;
  if (linksCount === 1 && actionsCount === 0) {
    let link = ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.getCellLinks)(field, rowIdx) ?? [])[0];
    return link != null ? (0,_DataLinksActionsTooltip__WEBPACK_IMPORTED_MODULE_3__.renderSingleLink)(link, children) : children;
  } else if (linksCount + actionsCount > 0) {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("table.link-wrapper.menu", "view data links and actions"), "aria-haspopup": "menu", children })
    );
  }
  return children;
});
MaybeWrapWithLink.displayName = "MaybeWrapWithLink";


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/components/RowExpander.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RowExpander: () => (/* binding */ RowExpander)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _themes_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");






function RowExpander({ onCellExpand, isExpanded }) {
  const styles = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  function handleKeyDown(e) {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      onCellExpand(e);
    }
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { role: "button", tabIndex: 0, className: styles.expanderCell, onClick: onCellExpand, onKeyDown: handleKeyDown, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _Icon_Icon__WEBPACK_IMPORTED_MODULE_4__.Icon,
    {
      "aria-label": isExpanded ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("grafana-ui.row-expander-ng.aria-label-collapse", "Collapse row") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("grafana-ui.row-expander.aria-label-expand", "Expand row"),
      name: isExpanded ? "angle-down" : "angle-right",
      size: "lg"
    }
  ) });
}
const getStyles = (_theme) => ({
  expanderCell: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer"
  })
});


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/components/SummaryCell.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryCell: () => (/* binding */ SummaryCell),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/transformations/fieldReducer.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _themes_ThemeContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/hooks.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/styles.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/utils.ts");












const getReducerName = (reducerId) => {
  if (reducerId === _grafana_data__WEBPACK_IMPORTED_MODULE_4__.ReducerID.countAll) {
    return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("grafana-ui.table.footer.reducer.count", "Count");
  }
  return _grafana_data__WEBPACK_IMPORTED_MODULE_4__.fieldReducers.get(reducerId)?.name || reducerId;
};
const SummaryCell = ({
  rows,
  footers,
  field,
  colIdx,
  hideLabel = false,
  rowLabel = false,
  textAlign
}) => {
  const styles = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles, textAlign, hideLabel);
  const theme = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_7__.useTheme2)();
  const defaultFooterCellStyles = (0,_styles__WEBPACK_IMPORTED_MODULE_9__.getDefaultCellStyles)(theme, {
    textAlign: "left",
    // alignment is set in footerItem
    shouldOverflow: true,
    textWrap: false
  });
  const displayName = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.getDisplayName)(field);
  const reducerResultsEntries = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__.useReducerEntries)(field, rows, displayName, colIdx);
  const cellClass = (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(styles.footerCell, defaultFooterCellStyles);
  const firstFooterReducers = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    for (const footer of footers) {
      if (footer?.reducers?.length ?? 0 > 0) {
        return footer.reducers;
      }
    }
    return;
  }, [footers]);
  const renderRowLabel = rowLabel && reducerResultsEntries.length === 0 && Boolean(firstFooterReducers);
  const SummaryCellItem = ({ children }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.footerItem, children });
  const SummaryCellLabel = ({ children }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "div",
    {
      "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.components.Panels.Visualization.TableNG.Footer.ReducerLabel,
      className: styles.footerItemLabel,
      children
    }
  );
  const SummaryCellValue = ({ children }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "div",
    {
      "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.components.Panels.Visualization.TableNG.Footer.Value,
      className: styles.footerItemValue,
      children
    }
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    "div",
    {
      className: cellClass,
      "data-testid": reducerResultsEntries.length === 0 && !renderRowLabel ? "summary-cell-empty" : void 0,
      children: [
        reducerResultsEntries.map(([reducerId, reducerResult]) => {
          if (reducerResult === null) {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SummaryCellItem, { children: rowLabel ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SummaryCellLabel, { children: getReducerName(reducerId) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: "\xA0" }) }, reducerId);
          }
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SummaryCellItem, { children: [
            !hideLabel && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SummaryCellLabel, { children: getReducerName(reducerId) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SummaryCellValue, { children: reducerResult })
          ] }, reducerId);
        }),
        renderRowLabel && firstFooterReducers.map((reducerId) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SummaryCellItem, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SummaryCellLabel, { children: getReducerName(reducerId) }) }, reducerId))
      ]
    }
  );
};
const getStyles = (theme, textAlign, hideLabel) => ({
  footerCell: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    flexDirection: "column",
    minHeight: "100%",
    width: "100%"
  }),
  footerItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    justifyContent: hideLabel ? (0,_utils__WEBPACK_IMPORTED_MODULE_10__.getJustifyContent)(textAlign) : "space-between",
    alignItems: "flex-start",
    width: "100%",
    gap: theme.spacing(0.5)
  }),
  footerItemLabel: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    flexShrink: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: theme.colors.text.secondary,
    fontSize: theme.typography.bodySmall.fontSize,
    fontWeight: theme.typography.fontWeightLight,
    textTransform: "uppercase",
    lineHeight: "22px"
  }),
  footerItemValue: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontWeight: theme.typography.fontWeightMedium
  })
});


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/components/TableCellActions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableCellActions: () => (/* binding */ TableCellActions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _IconButton_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/utils.ts");







const TableCellActions = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(
  ({ field, value, setInspectCell, onCellFilterAdded, className, cellInspect, showFilters }) => (
    // stopping propagation to prevent clicks within the actions menu from triggering the cell click events
    // for things like the data links tooltip.
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className, onClick: (ev) => ev.stopPropagation(), children: [
      cellInspect && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _IconButton_IconButton__WEBPACK_IMPORTED_MODULE_3__.IconButton,
        {
          name: "eye",
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("grafana-ui.table.cell-inspect-tooltip", "Inspect value"),
          onClick: () => {
            const [inspectValue, mode] = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.buildInspectValue)(value, field);
            setInspectCell({ value: inspectValue, mode });
          }
        }
      ),
      showFilters && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _IconButton_IconButton__WEBPACK_IMPORTED_MODULE_3__.IconButton,
          {
            name: "filter-plus",
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("grafana-ui.table.cell-filter-on", "Filter for value"),
            onClick: () => {
              onCellFilterAdded?.({
                key: field.name,
                operator: _types__WEBPACK_IMPORTED_MODULE_4__.FILTER_FOR_OPERATOR,
                value: String(value ?? "")
              });
            }
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _IconButton_IconButton__WEBPACK_IMPORTED_MODULE_3__.IconButton,
          {
            name: "filter-minus",
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("grafana-ui.table.cell-filter-out", "Filter out value"),
            onClick: () => {
              onCellFilterAdded?.({
                key: field.name,
                operator: _types__WEBPACK_IMPORTED_MODULE_4__.FILTER_OUT_OPERATOR,
                value: String(value ?? "")
              });
            }
          }
        )
      ] })
    ] })
  )
);
TableCellActions.displayName = "TableCellActions";


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/components/TableCellTooltip.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableCellTooltip: () => (/* binding */ TableCellTooltip)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _Tooltip_Popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Popover.tsx");





const TableCellTooltip = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(
  ({
    cellOptions,
    children,
    classes,
    className,
    data,
    disableSanitizeHtml,
    field,
    getActions,
    getTextColorForBackground,
    gridRef,
    height,
    placement,
    renderer: CellRenderer,
    rowIdx,
    style,
    theme,
    tooltipField,
    width = 300
  }) => {
    const rawValue = field.values[rowIdx];
    const tooltipCaretRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [pinned, setPinned] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const show = hovered || pinned;
    const dynamicHeight = tooltipField.config.custom?.cellOptions?.dynamicHeight;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
      if (pinned) {
        const gridRoot = gridRef.current?.element;
        const windowListener = (ev) => {
          if (ev.target === tooltipCaretRef.current) {
            return;
          }
          setPinned(false);
          window.removeEventListener("click", windowListener);
        };
        window.addEventListener("click", windowListener);
        const scrollListener = () => {
          setPinned(false);
        };
        gridRoot?.addEventListener("scroll", scrollListener, { once: true });
        return () => {
          window.removeEventListener("click", windowListener);
          gridRoot?.removeEventListener("scroll", scrollListener);
        };
      }
      return;
    }, [pinned, gridRef]);
    const rendererProps = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
      () => ({
        cellInspect: false,
        cellOptions,
        disableSanitizeHtml,
        field,
        frame: data,
        getActions,
        getTextColorForBackground,
        height,
        rowIdx,
        showFilters: false,
        theme,
        value: rawValue,
        width
      }),
      [
        cellOptions,
        data,
        disableSanitizeHtml,
        field,
        getActions,
        getTextColorForBackground,
        height,
        rawValue,
        rowIdx,
        theme,
        width
      ]
    );
    const cellElement = tooltipCaretRef.current?.closest(".rdg-cell");
    if (rawValue === null || rawValue === void 0) {
      return children;
    }
    const onMouseLeave = () => setHovered(false);
    const onMouseEnter = () => setHovered(true);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      cellElement && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _Tooltip_Popover__WEBPACK_IMPORTED_MODULE_3__.Popover,
        {
          content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CellRenderer, { ...rendererProps }),
          show,
          placement,
          wrapperClassName: classes.tooltipWrapper,
          className,
          style: { ...style, width, ...!dynamicHeight && { height } },
          referenceElement: cellElement,
          onMouseLeave,
          onMouseEnter,
          onClick: (ev) => ev.stopPropagation(),
          "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.Panels.Visualization.TableNG.Tooltip.Wrapper
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        "div",
        {
          className: classes.tooltipCaret,
          ref: tooltipCaretRef,
          "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.Panels.Visualization.TableNG.Tooltip.Caret,
          "aria-pressed": pinned,
          onClick: () => setPinned((prev) => !prev),
          onMouseLeave,
          onMouseEnter,
          onBlur: onMouseLeave,
          onFocus: onMouseEnter
        }
      ),
      children
    ] });
  }
);
TableCellTooltip.displayName = "TableCellTooltip";


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLUMN: () => (/* binding */ COLUMN),
/* harmony export */   TABLE: () => (/* binding */ TABLE)
/* harmony export */ });

const COLUMN = {
  DEFAULT_WIDTH: 150,
  EXPANDER_WIDTH: 50,
  // This will need to eventually change to 36
  MIN_WIDTH: 50
};
const TABLE = {
  CELL_PADDING: 6,
  LINE_HEIGHT: 22,
  HEADER_ROW_HEIGHT: 28,
  MAX_CELL_HEIGHT: 48,
  PAGINATION_LIMIT: 750,
  SCROLL_BAR_WIDTH: 8,
  SCROLL_BAR_MARGIN: 2,
  HEADER_HEIGHT: 28,
  NESTED_NO_DATA_HEIGHT: 60,
  BORDER_RIGHT: 1
};


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/hooks.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useColWidths: () => (/* binding */ useColWidths),
/* harmony export */   useColumnResize: () => (/* binding */ useColumnResize),
/* harmony export */   useFilteredRows: () => (/* binding */ useFilteredRows),
/* harmony export */   useHeaderHeight: () => (/* binding */ useHeaderHeight),
/* harmony export */   usePaginatedRows: () => (/* binding */ usePaginatedRows),
/* harmony export */   useReducerEntries: () => (/* binding */ useReducerEntries),
/* harmony export */   useRowHeight: () => (/* binding */ useRowHeight),
/* harmony export */   useScrollbarWidth: () => (/* binding */ useScrollbarWidth),
/* harmony export */   useSortedRows: () => (/* binding */ useSortedRows)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/dataframe/frameComparisons.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/transformations/fieldReducer.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/utils.ts");





const getDisplayedValue = (row, key, fields) => {
  const field = fields.find((field2) => (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getDisplayName)(field2) === key);
  if (!field || !field.display) {
    return "";
  }
  const displayedValue = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.formattedValueToString)(field.display(row[key]));
  return displayedValue;
};
function useFilteredRows(rows, fields, { hasNestedFrames }) {
  const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const filterValues = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => Object.entries(filter), [filter]);
  const crossFilterOrder = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
    () => Array.from(new Set(filterValues.map(([key]) => key))),
    [filterValues]
  );
  const [filteredRows, crossFilterRows] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const crossFilterRows2 = {};
    const filterRows = (row) => {
      for (const [key, value] of filterValues) {
        const displayedValue = getDisplayedValue(row, key, fields);
        if (!value.filteredSet.has(displayedValue)) {
          return false;
        }
        crossFilterRows2[key] = crossFilterRows2[key] ?? [];
        crossFilterRows2[key].push(row);
      }
      return true;
    };
    const filteredRows2 = hasNestedFrames ? (0,_utils__WEBPACK_IMPORTED_MODULE_6__.processNestedTableRows)(rows, (parents) => parents.filter(filterRows)) : rows.filter(filterRows);
    return [filteredRows2, crossFilterRows2];
  }, [filterValues, rows, fields, hasNestedFrames]);
  return {
    rows: filteredRows,
    filter,
    setFilter,
    crossFilterOrder,
    crossFilterRows
  };
}
function useSortedRows(rows, fields, { initialSortBy, hasNestedFrames }) {
  const initialSortColumns = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
    () => initialSortBy?.flatMap(({ displayName, desc }) => {
      if (!fields.some((f) => (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getDisplayName)(f) === displayName)) {
        return [];
      }
      return [
        {
          columnKey: displayName,
          direction: desc ? "DESC" : "ASC"
        }
      ];
    }) ?? [],
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  const [sortColumns, setSortColumns] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialSortColumns);
  const columnTypes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getColumnTypes)(fields), [fields]);
  const sortedRows = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
    () => (0,_utils__WEBPACK_IMPORTED_MODULE_6__.applySort)(rows, fields, sortColumns, columnTypes, hasNestedFrames),
    [rows, fields, sortColumns, hasNestedFrames, columnTypes]
  );
  return {
    rows: sortedRows,
    sortColumns,
    setSortColumns
  };
}
const PAGINATION_HEIGHT = 38;
function usePaginatedRows(rows, { height, width, headerHeight, footerHeight, rowHeight, enabled }) {
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const numRows = rows.length;
  const avgRowHeight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!enabled) {
      return 0;
    }
    if (typeof rowHeight === "number") {
      return rowHeight;
    }
    if (typeof rowHeight === "string") {
      return _constants__WEBPACK_IMPORTED_MODULE_5__.TABLE.MAX_CELL_HEIGHT;
    }
    return rows.slice(0, 100).reduce((avg, row, _, { length }) => avg + rowHeight(row) / length, 0);
  }, [rows, rowHeight, enabled]);
  const smallPagination = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => enabled && width < _constants__WEBPACK_IMPORTED_MODULE_5__.TABLE.PAGINATION_LIMIT, [enabled, width]);
  const { numPages, rowsPerPage, pageRangeStart, pageRangeEnd } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!enabled) {
      return { numPages: 0, rowsPerPage: 0, pageRangeStart: 1, pageRangeEnd: numRows };
    }
    const rowAreaHeight = height - headerHeight - footerHeight - PAGINATION_HEIGHT;
    const heightPerRow = Math.floor(rowAreaHeight / (avgRowHeight || 1));
    let rowsPerPage2 = heightPerRow > 1 ? heightPerRow : 1;
    const pageRangeStart2 = page * rowsPerPage2 + 1;
    let pageRangeEnd2 = pageRangeStart2 + rowsPerPage2 - 1;
    if (pageRangeEnd2 > numRows) {
      pageRangeEnd2 = numRows;
    }
    const numPages2 = Math.ceil(numRows / rowsPerPage2);
    return {
      numPages: numPages2,
      rowsPerPage: rowsPerPage2,
      pageRangeStart: pageRangeStart2,
      pageRangeEnd: pageRangeEnd2
    };
  }, [height, headerHeight, footerHeight, avgRowHeight, enabled, numRows, page]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (!enabled) {
      return;
    }
    if (page > numPages) {
      setPage(numPages - 1);
    }
  }, [numPages, enabled, page, setPage]);
  const paginatedRows = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!enabled) {
      return rows;
    }
    const pageOffset = page * rowsPerPage;
    return rows.slice(pageOffset, pageOffset + rowsPerPage);
  }, [page, rowsPerPage, rows, enabled]);
  return {
    rows: paginatedRows,
    page: enabled ? page : -1,
    setPage,
    numPages,
    rowsPerPage,
    pageRangeStart,
    pageRangeEnd,
    smallPagination
  };
}
const ICON_WIDTH = 16;
const ICON_GAP = 4;
function useHeaderHeight({
  fields,
  enabled,
  columnWidths,
  sortColumns,
  typographyCtx,
  showTypeIcons = false
}) {
  const perIconSpace = ICON_WIDTH + ICON_GAP;
  const measurers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_6__.buildHeaderHeightMeasurers)(fields, typographyCtx), [fields, typographyCtx]);
  const columnAvailableWidths = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
    () => columnWidths.map((c, idx) => {
      if (idx >= fields.length) {
        return 0;
      }
      let width = c - 2 * _constants__WEBPACK_IMPORTED_MODULE_5__.TABLE.CELL_PADDING - _constants__WEBPACK_IMPORTED_MODULE_5__.TABLE.BORDER_RIGHT;
      const field = fields[idx];
      if (field.config?.custom?.filterable) {
        width -= perIconSpace;
      }
      if (sortColumns.some((col) => col.columnKey === (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getDisplayName)(field))) {
        width -= perIconSpace;
      }
      if (showTypeIcons) {
        width -= perIconSpace;
      }
      return Math.floor(width) - 1;
    }),
    [fields, columnWidths, sortColumns, showTypeIcons, perIconSpace]
  );
  const headerHeight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!enabled) {
      return 0;
    }
    return (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getRowHeight)(
      fields,
      -1,
      columnAvailableWidths,
      _constants__WEBPACK_IMPORTED_MODULE_5__.TABLE.HEADER_HEIGHT,
      measurers,
      _constants__WEBPACK_IMPORTED_MODULE_5__.TABLE.LINE_HEIGHT,
      _constants__WEBPACK_IMPORTED_MODULE_5__.TABLE.CELL_PADDING
    );
  }, [fields, enabled, columnAvailableWidths, measurers]);
  return headerHeight;
}
function useRowHeight({
  columnWidths,
  fields,
  hasNestedFrames,
  defaultHeight,
  expandedRows,
  typographyCtx,
  maxHeight
}) {
  const measurers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
    () => (0,_utils__WEBPACK_IMPORTED_MODULE_6__.buildCellHeightMeasurers)(fields, typographyCtx, maxHeight),
    [fields, typographyCtx, maxHeight]
  );
  const hasWrappedCols = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => measurers?.length ?? 0 > 0, [measurers]);
  const colWidths = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const columnWidthAffordance = 2 * _constants__WEBPACK_IMPORTED_MODULE_5__.TABLE.CELL_PADDING + _constants__WEBPACK_IMPORTED_MODULE_5__.TABLE.BORDER_RIGHT;
    return columnWidths.map((c) => c - columnWidthAffordance);
  }, [columnWidths]);
  const rowHeight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!hasNestedFrames && !hasWrappedCols || typeof defaultHeight === "string") {
      return defaultHeight;
    }
    const cache = Array(fields[0].values.length);
    return (row) => {
      if (row.__depth > 0) {
        if (!expandedRows.has(row.__index)) {
          return 0;
        }
        const rowCount = row.data?.length ?? 0;
        if (rowCount === 0) {
          return _constants__WEBPACK_IMPORTED_MODULE_5__.TABLE.NESTED_NO_DATA_HEIGHT + _constants__WEBPACK_IMPORTED_MODULE_5__.TABLE.CELL_PADDING * 2;
        }
        const nestedHeaderHeight = row.data?.meta?.custom?.noHeader ? 0 : defaultHeight;
        return defaultHeight * rowCount + nestedHeaderHeight + _constants__WEBPACK_IMPORTED_MODULE_5__.TABLE.CELL_PADDING * 2;
      }
      let result = cache[row.__index];
      if (!result) {
        result = cache[row.__index] = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getRowHeight)(fields, row.__index, colWidths, defaultHeight, measurers);
      }
      return result;
    };
  }, [hasNestedFrames, hasWrappedCols, defaultHeight, fields, colWidths, measurers, expandedRows]);
  return rowHeight;
}
const INITIAL_COL_RESIZE_STATE = Object.freeze({ columnKey: void 0, width: 0 });
function useColumnResize(onColumnResize = () => {
}) {
  const colResizeState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({ ...INITIAL_COL_RESIZE_STATE });
  const pointerIsDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    function pointerDown(_event) {
      pointerIsDown.current = true;
    }
    function pointerUp(_event) {
      pointerIsDown.current = false;
    }
    window.addEventListener("pointerdown", pointerDown);
    window.addEventListener("pointerup", pointerUp);
    return () => {
      window.removeEventListener("pointerdown", pointerDown);
      window.removeEventListener("pointerup", pointerUp);
    };
  });
  const dispatchEvent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (colResizeState.current.columnKey) {
      onColumnResize(colResizeState.current.columnKey, Math.floor(colResizeState.current.width));
      colResizeState.current = { ...INITIAL_COL_RESIZE_STATE };
    }
    window.removeEventListener("click", dispatchEvent, { capture: true });
  }, [onColumnResize]);
  const dataGridResizeHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (column, width) => {
      if (!colResizeState.current.columnKey) {
        window.addEventListener("click", dispatchEvent, { capture: true });
      }
      colResizeState.current.columnKey = column.key;
      colResizeState.current.width = width;
      if (!pointerIsDown.current) {
        dispatchEvent();
      }
    },
    [dispatchEvent]
  );
  return dataGridResizeHandler;
}
function useScrollbarWidth(ref, height) {
  const [scrollbarWidth, setScrollbarWidth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const el = ref.current?.element;
    if (!el || _utils__WEBPACK_IMPORTED_MODULE_6__.IS_SAFARI_26) {
      return;
    }
    const updateScrollbarDimensions = () => {
      setScrollbarWidth(el.offsetWidth - el.clientWidth);
    };
    updateScrollbarDimensions();
    const resizeObserver = new ResizeObserver(updateScrollbarDimensions);
    resizeObserver.observe(el);
    return () => {
      resizeObserver.disconnect();
    };
  }, [ref, height]);
  return scrollbarWidth;
}
const numIsEqual = (a, b) => a === b;
function useColWidths(visibleFields, availableWidth, frozenColumns) {
  const [widths, setWidths] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utils__WEBPACK_IMPORTED_MODULE_6__.computeColWidths)(visibleFields, availableWidth));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const newWidths = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.computeColWidths)(visibleFields, availableWidth);
    if (!(0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.compareArrayValues)(widths, newWidths, numIsEqual)) {
      setWidths(newWidths);
    }
  }, [availableWidth, widths, visibleFields]);
  const numFrozenColsFullyInView = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!frozenColumns || frozenColumns <= 0) {
      return -1;
    }
    const fullyVisibleCols = widths.reduce(
      ([count, remainingWidth], nextWidth) => {
        if (remainingWidth - nextWidth >= 0) {
          return [count + 1, remainingWidth - nextWidth];
        }
        return [count, 0];
      },
      [0, availableWidth]
    )[0];
    return Math.min(fullyVisibleCols, frozenColumns);
  }, [widths, availableWidth, frozenColumns]);
  return [widths, numFrozenColsFullyInView];
}
const isReducer = (maybeReducer) => maybeReducer in _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ReducerID;
const nonMathReducers = /* @__PURE__ */ new Set([
  _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ReducerID.allValues,
  _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ReducerID.changeCount,
  _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ReducerID.count,
  _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ReducerID.countAll,
  _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ReducerID.distinctCount,
  _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ReducerID.first,
  _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ReducerID.firstNotNull,
  _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ReducerID.last,
  _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ReducerID.lastNotNull,
  _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ReducerID.uniqueValues
]);
const isNonMathReducer = (reducer) => isReducer(reducer) && nonMathReducers.has(reducer);
const noFormattingReducers = /* @__PURE__ */ new Set([_grafana_data__WEBPACK_IMPORTED_MODULE_2__.ReducerID.count, _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ReducerID.countAll]);
const shouldReducerSkipFormatting = (reducer) => isReducer(reducer) && noFormattingReducers.has(reducer);
const useReducerEntries = (field, rows, displayName, colIdx) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const reducers = field.config.custom?.footer?.reducers ?? [];
    if (reducers.length === 0 || field.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.number && reducers.every((reducerId) => !isNonMathReducer(reducerId))) {
      return [];
    }
    const newState = {
      lastProcessedRowCount: 0,
      ...field.state || {}
      // Preserve any existing state properties
    };
    field.state = newState;
    const currentRowCount = rows.length;
    const lastRowCount = newState.lastProcessedRowCount;
    if (lastRowCount !== currentRowCount) {
      if (newState.calcs) {
        delete newState.calcs;
      }
      newState.lastProcessedRowCount = currentRowCount;
    }
    const results = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.reduceField)({
      field: {
        ...field,
        values: rows.map((row) => row[displayName])
      },
      reducers
    });
    return reducers.map((reducerId) => {
      if (results[reducerId] === void 0 || // For non-number fields, only show special count reducers
      field.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.number && !isNonMathReducer(reducerId) || // for countAll, only show the reducer in the first column
      reducerId === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ReducerID.countAll && colIdx !== 0) {
        return [reducerId, null];
      }
      const value = results[reducerId];
      let result = null;
      if (!shouldReducerSkipFormatting(reducerId) && field.display) {
        result = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.formattedValueToString)(field.display(value));
      } else if (value != null) {
        result = String(value);
      }
      return [reducerId, result];
    });
  }, [field, rows, displayName, colIdx]);
};


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/styles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getActiveCellSelector: () => (/* binding */ getActiveCellSelector),
/* harmony export */   getCellActionStyles: () => (/* binding */ getCellActionStyles),
/* harmony export */   getDefaultCellStyles: () => (/* binding */ getDefaultCellStyles),
/* harmony export */   getGridStyles: () => (/* binding */ getGridStyles),
/* harmony export */   getHeaderCellStyles: () => (/* binding */ getHeaderCellStyles),
/* harmony export */   getHoverOnlyCellSelector: () => (/* binding */ getHoverOnlyCellSelector),
/* harmony export */   getLinkStyles: () => (/* binding */ getLinkStyles),
/* harmony export */   getMaxHeightCellStyles: () => (/* binding */ getMaxHeightCellStyles),
/* harmony export */   getTooltipStyles: () => (/* binding */ getTooltipStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var micro_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/micro-memoize/dist/micro-memoize.js");
/* harmony import */ var micro_memoize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(micro_memoize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/themes/colorManipulator.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/utils.ts");






const getGridStyles = (theme, enablePagination, transparent) => {
  const bgColor = transparent ? theme.colors.background.canvas : theme.colors.background.primary;
  const borderColor = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.colorManipulator.onBackground(theme.colors.border.weak, bgColor).toHexString();
  return {
    grid: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      "--rdg-background-color": bgColor,
      "--rdg-header-background-color": bgColor,
      "--rdg-border-color": borderColor,
      "--rdg-color": theme.colors.text.primary,
      "--rdg-summary-border-color": borderColor,
      "--rdg-summary-border-width": "1px",
      "--rdg-selection-color": theme.colors.info.transparent,
      // note: this cannot have any transparency since default cells that
      // overlay/overflow on hover inherit this background and need to occlude cells below
      "--rdg-row-background-color": bgColor,
      "--rdg-row-hover-background-color": transparent ? theme.colors.background.primary : theme.colors.background.secondary,
      // TODO: magic 32px number is unfortunate. it would be better to have the content
      // flow using flexbox rather than hard-coding this size via a calc
      blockSize: enablePagination ? "calc(100% - 32px)" : "100%",
      scrollbarWidth: "thin",
      scrollbarColor: theme.isDark ? "#fff5 #fff1" : "#0005 #0001",
      border: "none",
      ".rdg-cell": {
        padding: _constants__WEBPACK_IMPORTED_MODULE_3__.TABLE.CELL_PADDING,
        "&:last-child": {
          borderInlineEnd: "none"
        }
      },
      // add a box shadow on hover and selection for all body cells
      "& > :not(.rdg-summary-row, .rdg-header-row) > .rdg-cell": {
        [getActiveCellSelector()]: { boxShadow: theme.shadows.z2 },
        // selected cells should appear below hovered cells.
        ...!_utils__WEBPACK_IMPORTED_MODULE_4__.IS_SAFARI_26 && { "&:hover": { zIndex: theme.zIndex.tooltip - 7 } },
        "&[aria-selected=true]": { zIndex: theme.zIndex.tooltip - 6 }
      },
      ".rdg-cell.rdg-cell-frozen": {
        backgroundColor: "var(--rdg-row-background-color)",
        zIndex: theme.zIndex.tooltip - 4,
        ...!_utils__WEBPACK_IMPORTED_MODULE_4__.IS_SAFARI_26 && { "&:hover": { zIndex: theme.zIndex.tooltip - 2 } },
        "&[aria-selected=true]": { zIndex: theme.zIndex.tooltip - 3 }
      },
      ".rdg-header-row, .rdg-summary-row": {
        ".rdg-cell": {
          zIndex: theme.zIndex.tooltip - 5,
          "&.rdg-cell-frozen": {
            zIndex: theme.zIndex.tooltip - 1
          }
        }
      },
      ".rdg-summary-row >": {
        ".rdg-cell": {
          // 0.75 padding causes "jumping" on hover.
          paddingBlock: theme.spacing(0.625)
        },
        [getActiveCellSelector()]: {
          whiteSpace: "pre-line",
          height: "100%",
          minHeight: "fit-content",
          overflowY: "visible",
          boxShadow: theme.shadows.z2
        }
      }
    }),
    gridNested: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      height: "100%",
      width: `calc(100% - ${_constants__WEBPACK_IMPORTED_MODULE_3__.COLUMN.EXPANDER_WIDTH - _constants__WEBPACK_IMPORTED_MODULE_3__.TABLE.CELL_PADDING * 2 - 1}px)`,
      overflowX: "scroll",
      overflowY: "hidden",
      marginLeft: _constants__WEBPACK_IMPORTED_MODULE_3__.COLUMN.EXPANDER_WIDTH - _constants__WEBPACK_IMPORTED_MODULE_3__.TABLE.CELL_PADDING - 1,
      marginBlock: _constants__WEBPACK_IMPORTED_MODULE_3__.TABLE.CELL_PADDING
    }),
    cellNested: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({ "&[aria-selected=true]": { outline: "none" } }),
    noDataNested: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      height: _constants__WEBPACK_IMPORTED_MODULE_3__.TABLE.NESTED_NO_DATA_HEIGHT,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.colors.text.secondary,
      fontSize: theme.typography.h4.fontSize
    }),
    headerRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      paddingBlockStart: 0,
      fontWeight: "normal",
      "& .rdg-cell": { height: "100%", alignItems: "flex-end" }
    }),
    displayNone: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({ display: "none" }),
    paginationContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      marginTop: "8px",
      width: "100%"
    }),
    paginationSummary: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      color: theme.colors.text.secondary,
      fontSize: theme.typography.bodySmall.fontSize,
      display: "flex",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1, 0, 2)
    }),
    menuItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({ maxWidth: "200px" }),
    safariWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({ contain: "strict", height: "100%" })
  };
};
const getHeaderCellStyles = (theme, justifyContent) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  display: "flex",
  gap: theme.spacing(0.5),
  zIndex: theme.zIndex.tooltip - 1,
  paddingInline: _constants__WEBPACK_IMPORTED_MODULE_3__.TABLE.CELL_PADDING,
  paddingBlockEnd: _constants__WEBPACK_IMPORTED_MODULE_3__.TABLE.CELL_PADDING,
  justifyContent,
  "&:last-child": { borderInlineEnd: "none" }
});
const getDefaultCellStyles = (theme, { textAlign, shouldOverflow, maxHeight }) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  display: "flex",
  alignItems: "center",
  textAlign,
  justifyContent: Boolean(maxHeight) ? "flex-start" : (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getJustifyContent)(textAlign),
  ...maxHeight && { overflowY: "hidden" },
  ...shouldOverflow && { minHeight: "100%" },
  [getActiveCellSelector()]: {
    ...shouldOverflow && {
      zIndex: theme.zIndex.tooltip - 2,
      height: "fit-content",
      minWidth: "fit-content"
    }
  },
  [getHoverOnlyCellSelector()]: {
    ".table-cell-actions": { display: "flex" }
  }
});
const getMaxHeightCellStyles = (_theme, { textAlign, maxHeight }) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  display: "flex",
  alignItems: "center",
  textAlign,
  justifyContent: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getJustifyContent)(textAlign),
  maxHeight,
  width: "100%",
  overflowY: "hidden",
  [getActiveCellSelector(true)]: {
    maxHeight: "none",
    minHeight: "100%"
  }
});
const getCellActionStyles = (theme, textAlign) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  display: "none",
  position: "absolute",
  top: 0,
  margin: "auto",
  height: "100%",
  color: theme.colors.text.primary,
  background: theme.isDark ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.7)",
  padding: theme.spacing.x0_5,
  paddingInlineStart: theme.spacing.x1,
  [textAlign === "right" ? "left" : "right"]: 0
});
const getLinkStyles = (theme, canBeColorized) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  a: {
    cursor: "pointer",
    ...canBeColorized ? {
      color: "inherit",
      textDecoration: "underline"
    } : {
      color: theme.colors.text.link,
      textDecoration: "none",
      "&:hover": { textDecoration: "underline" }
    }
  }
});
const caretTriangle = (direction, bgColor) => `linear-gradient(to top ${direction}, transparent 62.5%, ${bgColor} 50%)`;
const getTooltipStyles = (theme, textAlign) => ({
  tooltipContent: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center"
  }),
  tooltipWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    background: theme.colors.background.primary,
    border: `1px solid ${theme.colors.border.weak}`,
    borderRadius: theme.shape.radius.default,
    boxShadow: theme.shadows.z3,
    overflow: "hidden",
    padding: theme.spacing(1),
    width: "inherit"
  }),
  tooltipCaret: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    cursor: "pointer",
    position: "absolute",
    top: theme.spacing(0.25),
    [textAlign === "right" ? "right" : "left"]: theme.spacing(0.25),
    width: theme.spacing(1.75),
    height: theme.spacing(1.75),
    background: caretTriangle(textAlign === "right" ? "right" : "left", theme.colors.border.strong)
  })
});
const ACTIVE_CELL_SELECTORS = {
  hover: {
    nested: ".rdg-cell:hover &",
    normal: "&:hover"
  },
  selected: {
    nested: "[aria-selected=true] &",
    normal: "&[aria-selected=true]"
  }
};
const getActiveCellSelector = micro_memoize__WEBPACK_IMPORTED_MODULE_1___default()((isNested) => {
  const selectors = [];
  selectors.push(ACTIVE_CELL_SELECTORS.selected[isNested ? "nested" : "normal"]);
  if (!_utils__WEBPACK_IMPORTED_MODULE_4__.IS_SAFARI_26) {
    selectors.push(ACTIVE_CELL_SELECTORS.hover[isNested ? "nested" : "normal"]);
  }
  return selectors.join(", ");
});
const getHoverOnlyCellSelector = micro_memoize__WEBPACK_IMPORTED_MODULE_1___default()((isNested) => {
  if (_utils__WEBPACK_IMPORTED_MODULE_4__.IS_SAFARI_26) {
    return "";
  }
  return ACTIVE_CELL_SELECTORS.hover[isNested ? "nested" : "normal"];
});


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FILTER_FOR_OPERATOR: () => (/* binding */ FILTER_FOR_OPERATOR),
/* harmony export */   FILTER_OUT_OPERATOR: () => (/* binding */ FILTER_OUT_OPERATOR)
/* harmony export */ });

const FILTER_FOR_OPERATOR = "=";
const FILTER_OUT_OPERATOR = "!=";


/***/ }),

/***/ "./packages/grafana-ui/src/components/Table/TableNG/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IS_SAFARI_26: () => (/* binding */ IS_SAFARI_26),
/* harmony export */   SINGLE_LINE_ESTIMATE_THRESHOLD: () => (/* binding */ SINGLE_LINE_ESTIMATE_THRESHOLD),
/* harmony export */   applySort: () => (/* binding */ applySort),
/* harmony export */   buildCellHeightMeasurers: () => (/* binding */ buildCellHeightMeasurers),
/* harmony export */   buildHeaderHeightMeasurers: () => (/* binding */ buildHeaderHeightMeasurers),
/* harmony export */   buildInspectValue: () => (/* binding */ buildInspectValue),
/* harmony export */   calculateFooterHeight: () => (/* binding */ calculateFooterHeight),
/* harmony export */   canFieldBeColorized: () => (/* binding */ canFieldBeColorized),
/* harmony export */   computeColWidths: () => (/* binding */ computeColWidths),
/* harmony export */   createTypographyContext: () => (/* binding */ createTypographyContext),
/* harmony export */   displayJsonValue: () => (/* binding */ displayJsonValue),
/* harmony export */   extractPixelValue: () => (/* binding */ extractPixelValue),
/* harmony export */   frameToRecords: () => (/* binding */ frameToRecords),
/* harmony export */   getAlignment: () => (/* binding */ getAlignment),
/* harmony export */   getAlignmentFactor: () => (/* binding */ getAlignmentFactor),
/* harmony export */   getApplyToRowBgFn: () => (/* binding */ getApplyToRowBgFn),
/* harmony export */   getCellColorInlineStylesFactory: () => (/* binding */ getCellColorInlineStylesFactory),
/* harmony export */   getCellLinks: () => (/* binding */ getCellLinks),
/* harmony export */   getCellOptions: () => (/* binding */ getCellOptions),
/* harmony export */   getColumnTypes: () => (/* binding */ getColumnTypes),
/* harmony export */   getComparator: () => (/* binding */ getComparator),
/* harmony export */   getDataLinksHeightMeasurer: () => (/* binding */ getDataLinksHeightMeasurer),
/* harmony export */   getDefaultRowHeight: () => (/* binding */ getDefaultRowHeight),
/* harmony export */   getDisplayName: () => (/* binding */ getDisplayName),
/* harmony export */   getIsNestedTable: () => (/* binding */ getIsNestedTable),
/* harmony export */   getJustifyContent: () => (/* binding */ getJustifyContent),
/* harmony export */   getPillCellHeightMeasurer: () => (/* binding */ getPillCellHeightMeasurer),
/* harmony export */   getRowHeight: () => (/* binding */ getRowHeight),
/* harmony export */   getSummaryCellTextAlign: () => (/* binding */ getSummaryCellTextAlign),
/* harmony export */   getTextHeightEstimator: () => (/* binding */ getTextHeightEstimator),
/* harmony export */   getTextHeightMeasurerFromUwrapCount: () => (/* binding */ getTextHeightMeasurerFromUwrapCount),
/* harmony export */   getVisibleFields: () => (/* binding */ getVisibleFields),
/* harmony export */   isCellInspectEnabled: () => (/* binding */ isCellInspectEnabled),
/* harmony export */   migrateTableDisplayModeToCellOptions: () => (/* binding */ migrateTableDisplayModeToCellOptions),
/* harmony export */   parseStyleJson: () => (/* binding */ parseStyleJson),
/* harmony export */   predicateByName: () => (/* binding */ predicateByName),
/* harmony export */   prepareSparklineValue: () => (/* binding */ prepareSparklineValue),
/* harmony export */   processNestedTableRows: () => (/* binding */ processNestedTableRows),
/* harmony export */   shouldTextOverflow: () => (/* binding */ shouldTextOverflow),
/* harmony export */   shouldTextWrap: () => (/* binding */ shouldTextWrap)
/* harmony export */ });
/* harmony import */ var micro_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/micro-memoize/dist/micro-memoize.js");
/* harmony import */ var micro_memoize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(micro_memoize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ol_format_WKT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/ol/format/WKT.js");
/* harmony import */ var ol_geom_Geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/ol/geom/Geometry.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/tinycolor2/esm/tinycolor.js");
/* harmony import */ var uwrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/uwrap/dist/uWrap.mjs");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/dataframe/processDataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/utils/colors.ts");
/* harmony import */ var _TableCellInspector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableCellInspector.tsx");
/* harmony import */ var _Cells_PillCell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/Cells/PillCell.tsx");
/* harmony import */ var _Cells_renderers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/Cells/renderers.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/constants.ts");













function getDefaultRowHeight(theme, fields, cellHeight) {
  if (fields?.some((field) => field.config?.custom?.cellOptions?.dynamicHeight)) {
    return "auto";
  }
  switch (cellHeight) {
    case _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellHeight.Sm:
      return 36;
    case _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellHeight.Md:
      return 42;
    case _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellHeight.Lg:
      return _constants__WEBPACK_IMPORTED_MODULE_13__.TABLE.MAX_CELL_HEIGHT;
  }
  return _constants__WEBPACK_IMPORTED_MODULE_13__.TABLE.CELL_PADDING * 2 + theme.typography.fontSize * theme.typography.body.lineHeight;
}
function isCellInspectEnabled(field) {
  return field.config?.custom?.inspect ?? false;
}
function shouldTextWrap(field) {
  return Boolean(field.config.custom?.wrapText);
}
function clampByMaxHeight(measurer, maxHeight = Infinity) {
  return (value, width, field, rowIdx, lineHeight) => {
    const rawHeight = measurer(value, width, field, rowIdx, lineHeight);
    return Math.min(rawHeight, maxHeight);
  };
}
function createTypographyContext(fontSize, fontFamily, letterSpacing = 0.15) {
  const font = `${fontSize}px ${fontFamily}`;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.letterSpacing = `${letterSpacing}px`;
  ctx.font = font;
  const txt = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 1234567890 ALL CAPS TO HELP WITH MEASUREMENT.";
  const txtWidth = ctx.measureText(txt).width;
  const avgCharWidth = txtWidth / txt.length + letterSpacing;
  const { count } = (0,uwrap__WEBPACK_IMPORTED_MODULE_4__.varPreLine)(ctx);
  return {
    ctx,
    fontFamily,
    letterSpacing,
    avgCharWidth,
    estimateHeight: getTextHeightEstimator(avgCharWidth),
    measureHeight: getTextHeightMeasurerFromUwrapCount(count)
  };
}
function getTextHeightMeasurerFromUwrapCount(count) {
  return (value, width, _field, _rowIdx, lineHeight) => {
    if (value == null) {
      return lineHeight;
    }
    const lines = count(String(value), width);
    return lines * lineHeight;
  };
}
function getTextHeightEstimator(avgCharWidth) {
  return (value, width, _field, _rowIdx, lineHeight) => {
    if (!value) {
      return -1;
    }
    const strValue = String(value);
    if (!spaceRegex.test(strValue)) {
      return -1;
    }
    const charsPerLine = width / avgCharWidth;
    const lines = Math.ceil(strValue.length / charsPerLine);
    return lines * lineHeight;
  };
}
function getDataLinksHeightMeasurer() {
  const linksCountCache = {};
  return (_value, _width, field, _rowIdx, lineHeight) => {
    const cacheKey = getDisplayName(field);
    if (linksCountCache[cacheKey] === void 0) {
      let count = 0;
      for (const l of field.config?.links ?? []) {
        if (l.onClick || l.url) {
          count += 1;
        }
      }
      linksCountCache[cacheKey] = count;
    }
    return linksCountCache[cacheKey] * lineHeight;
  };
}
const PILLS_FONT_SIZE = 12;
const PILLS_SPACING = 12;
const PILLS_GAP = 4;
function getPillCellHeightMeasurer(measureWidth) {
  const widthCache = {};
  return (value, width, _field, _rowIdx, lineHeight) => {
    if (value == null) {
      return 0;
    }
    const pillValues = (0,_Cells_PillCell__WEBPACK_IMPORTED_MODULE_11__.inferPills)(String(value));
    if (pillValues.length === 0) {
      return 0;
    }
    let lines = 0;
    let currentLineUse = width;
    for (const pillValue of pillValues) {
      const strPill = String(pillValue);
      let rawWidth = widthCache[strPill];
      if (rawWidth === void 0) {
        rawWidth = measureWidth(strPill);
        widthCache[strPill] = rawWidth;
      }
      const pillWidth = rawWidth + PILLS_SPACING;
      if (currentLineUse + pillWidth + PILLS_GAP > width) {
        lines++;
        currentLineUse = pillWidth;
      } else {
        currentLineUse += pillWidth + PILLS_GAP;
      }
    }
    return lines * lineHeight + (lines - 1) * PILLS_GAP;
  };
}
function buildHeaderHeightMeasurers(fields, typographyCtx) {
  const wrappedColIdxs = fields.reduce((acc, field, idx) => {
    if (field.config?.custom?.wrapHeaderText) {
      acc.push(idx);
    }
    return acc;
  }, []);
  if (wrappedColIdxs.length === 0) {
    return void 0;
  }
  return [{ measure: typographyCtx.measureHeight, fieldIdxs: wrappedColIdxs }];
}
const spaceRegex = /[\s-]/;
function buildCellHeightMeasurers(fields, typographyCtx, maxHeight) {
  const result = {};
  let wrappedFields = 0;
  const measurerFactory = {
    // for string fields, we estimate the length of a line using `avgCharWidth` to limit expensive calls `count`.
    [_grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.Auto]: () => [typographyCtx.measureHeight, typographyCtx.estimateHeight],
    [_grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.DataLinks]: () => [getDataLinksHeightMeasurer(), void 0],
    // pills use a different font size, so they require their own typography context.
    [_grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.Pill]: () => {
      const pillTypographyCtx = createTypographyContext(
        PILLS_FONT_SIZE,
        typographyCtx.fontFamily,
        typographyCtx.letterSpacing
      );
      return [
        getPillCellHeightMeasurer((value) => pillTypographyCtx.ctx.measureText(value).width),
        getPillCellHeightMeasurer((value) => value.length * pillTypographyCtx.avgCharWidth)
      ];
    }
  };
  const setupMeasurerForIdx = (measurerFactoryKey, fieldIdx) => {
    if (!result[measurerFactoryKey]) {
      const [measure, estimate] = measurerFactory[measurerFactoryKey]();
      result[measurerFactoryKey] = {
        measure: clampByMaxHeight(measure, maxHeight),
        estimate: estimate != null ? clampByMaxHeight(estimate, maxHeight) : void 0,
        fieldIdxs: []
      };
    }
    result[measurerFactoryKey].fieldIdxs.push(fieldIdx);
  };
  for (let fieldIdx = 0; fieldIdx < fields.length; fieldIdx++) {
    const field = fields[fieldIdx];
    if (shouldTextWrap(field)) {
      wrappedFields++;
      const cellType = getCellOptions(field).type;
      if (cellType === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.DataLinks) {
        setupMeasurerForIdx(_grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.DataLinks, fieldIdx);
      } else if (cellType === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.Pill) {
        setupMeasurerForIdx(_grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.Pill, fieldIdx);
      } else if (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.string && (0,_Cells_renderers__WEBPACK_IMPORTED_MODULE_12__.getCellRenderer)(field, getCellOptions(field)) === _Cells_renderers__WEBPACK_IMPORTED_MODULE_12__.AutoCellRenderer) {
        setupMeasurerForIdx(_grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.Auto, fieldIdx);
      } else {
        wrappedFields--;
      }
    }
  }
  if (wrappedFields === 0) {
    return void 0;
  }
  return Object.values(result);
}
const SINGLE_LINE_ESTIMATE_THRESHOLD = 18.5;
function getRowHeight(fields, rowIdx, columnWidths, defaultHeight, measurers, lineHeight = _constants__WEBPACK_IMPORTED_MODULE_13__.TABLE.LINE_HEIGHT, verticalPadding = _constants__WEBPACK_IMPORTED_MODULE_13__.TABLE.CELL_PADDING * 2) {
  if (!measurers?.length) {
    return defaultHeight;
  }
  let maxHeight = -1;
  let maxValue = "";
  let maxWidth = 0;
  let maxField;
  let preciseMeasurer;
  for (const { estimate, measure, fieldIdxs } of measurers) {
    const measurer = estimate ?? measure;
    const isEstimating = estimate !== void 0;
    for (const fieldIdx of fieldIdxs) {
      const field = fields[fieldIdx];
      const cellValueRaw = rowIdx === -1 ? getDisplayName(field) : field.values[rowIdx];
      if (cellValueRaw != null) {
        const colWidth = columnWidths[fieldIdx];
        const estimatedHeight = measurer(cellValueRaw, colWidth, field, rowIdx, lineHeight);
        if (estimatedHeight > maxHeight) {
          maxHeight = estimatedHeight;
          maxValue = cellValueRaw;
          maxWidth = colWidth;
          maxField = field;
          preciseMeasurer = isEstimating ? measure : void 0;
        }
      }
    }
  }
  if (maxField === void 0 || maxHeight < SINGLE_LINE_ESTIMATE_THRESHOLD) {
    return defaultHeight;
  }
  if (preciseMeasurer !== void 0) {
    maxHeight = preciseMeasurer(maxValue, maxWidth, maxField, rowIdx, lineHeight);
  }
  return Math.max(maxHeight + verticalPadding, defaultHeight);
}
function shouldTextOverflow(field) {
  const cellOptions = getCellOptions(field);
  const eligibleCellType = (
    // Tech debt: Technically image cells are of type string, which is misleading (kinda?)
    // so we need to ensurefield.type === FieldType.string we don't apply overflow hover states for type image
    field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.string && cellOptions.type !== _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.Image || // regardless of the underlying cell type, data links cells have text overflow.
    cellOptions.type === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.DataLinks
  );
  return eligibleCellType && !shouldTextWrap(field) && !isCellInspectEnabled(field);
}
const TEXT_CELL_TYPES = /* @__PURE__ */ new Set([
  _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.Auto,
  _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.ColorText,
  _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.ColorBackground
]);
function getAlignment(field) {
  const align = field.config.custom?.align;
  if (!align || align === "auto") {
    if (TEXT_CELL_TYPES.has(getCellOptions(field).type) && field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.number) {
      return "right";
    }
    return "left";
  }
  return align;
}
function getJustifyContent(textAlign) {
  return textAlign === "center" ? "center" : textAlign === "right" ? "flex-end" : "flex-start";
}
const DEFAULT_CELL_OPTIONS = { type: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.Auto };
function getCellOptions(field) {
  if (field.config.custom?.displayMode) {
    return migrateTableDisplayModeToCellOptions(field.config.custom?.displayMode);
  }
  return field.config.custom?.cellOptions ?? DEFAULT_CELL_OPTIONS;
}
function getAlignmentFactor(field, displayValue, rowIndex) {
  let alignmentFactor = field.state?.alignmentFactors;
  if (alignmentFactor) {
    if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.formattedValueToString)(alignmentFactor).length < (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.formattedValueToString)(displayValue).length) {
      alignmentFactor = { ...displayValue };
      field.state.alignmentFactors = alignmentFactor;
    }
    return alignmentFactor;
  } else {
    alignmentFactor = { ...displayValue };
    const maxIndex = Math.min(field.values.length, rowIndex + 1e3);
    for (let i = rowIndex + 1; i < maxIndex; i++) {
      const nextDisplayValue = field.display?.(field.values[i]) ?? field.values[i];
      if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.formattedValueToString)(alignmentFactor).length > (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.formattedValueToString)(nextDisplayValue).length) {
        alignmentFactor.text = displayValue.text;
      }
    }
    if (field.state) {
      field.state.alignmentFactors = alignmentFactor;
    } else {
      field.state = { alignmentFactors: alignmentFactor };
    }
    return alignmentFactor;
  }
}
const CELL_COLOR_DARKENING_MULTIPLIER = 10;
const CELL_GRADIENT_HUE_ROTATION_DEGREES = 5;
function getCellColorInlineStylesFactory(theme) {
  const bgCellTextColor = micro_memoize__WEBPACK_IMPORTED_MODULE_0___default()((color) => (0,_utils_colors__WEBPACK_IMPORTED_MODULE_9__.getTextColorForAlphaBackground)(color, theme.isDark), {
    maxSize: 1e3
  });
  const darkeningFactor = theme.isDark ? 1 : -0.7;
  const gradientBg = micro_memoize__WEBPACK_IMPORTED_MODULE_0___default()(
    (color) => (0,tinycolor2__WEBPACK_IMPORTED_MODULE_3__["default"])(color).darken(CELL_COLOR_DARKENING_MULTIPLIER * darkeningFactor).spin(CELL_GRADIENT_HUE_ROTATION_DEGREES).toRgbString(),
    { maxSize: 1e3 }
  );
  const isTransparent = micro_memoize__WEBPACK_IMPORTED_MODULE_0___default()(
    (color) => {
      if (color[0] === "#") {
        return color.length === 9 && color.endsWith("00");
      }
      return (0,tinycolor2__WEBPACK_IMPORTED_MODULE_3__["default"])(color).getAlpha() === 0;
    },
    { maxSize: 1e3 }
  );
  return (cellOptions, displayValue, hasApplyToRow) => {
    const result = {};
    const displayValueColor = displayValue.color;
    if (!displayValueColor) {
      return result;
    }
    if (cellOptions.type === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.ColorText) {
      result.color = displayValueColor;
    } else if (cellOptions.type === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.ColorBackground) {
      if (hasApplyToRow && isTransparent(displayValueColor)) {
        return result;
      }
      const mode = cellOptions.mode ?? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellBackgroundDisplayMode.Gradient;
      result.color = bgCellTextColor(displayValueColor);
      result.background = mode === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellBackgroundDisplayMode.Gradient ? `linear-gradient(120deg, ${gradientBg(displayValueColor)}, ${displayValueColor})` : displayValueColor;
    }
    return result;
  };
}
const extractPixelValue = (spacing) => {
  return typeof spacing === "number" ? spacing : parseFloat(spacing) || 0;
};
const getCellLinks = (field, rowIdx) => {
  let links;
  if (field.getLinks) {
    links = field.getLinks({
      valueRowIndex: rowIdx
    });
  }
  if (!links) {
    return;
  }
  for (let i = 0; i < links?.length; i++) {
    if (links[i].onClick) {
      const origOnClick = links[i].onClick;
      links[i].onClick = (event) => {
        if (!(event.ctrlKey || event.metaKey || event.shiftKey)) {
          event.preventDefault();
          origOnClick(event, {
            field,
            rowIndex: rowIdx
          });
        }
      };
    }
  }
  return links.filter((link) => link.href || link.onClick != null);
};
function applySort(rows, fields, sortColumns, columnTypes = getColumnTypes(fields), hasNestedFrames = getIsNestedTable(fields)) {
  if (sortColumns.length === 0) {
    return rows;
  }
  const sortNanos = sortColumns.map(
    (c) => fields.find((f) => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.time && getDisplayName(f) === c.columnKey)?.nanos
  );
  const compareRows = (a, b) => {
    let result = 0;
    for (let i = 0; i < sortColumns.length; i++) {
      const { columnKey, direction } = sortColumns[i];
      const compare2 = getComparator(columnTypes[columnKey]);
      const sortDir = direction === "ASC" ? 1 : -1;
      result = sortDir * compare2(a[columnKey], b[columnKey]);
      if (result === 0) {
        const nanos = sortNanos[i];
        if (nanos !== void 0) {
          result = sortDir * (nanos[a.__index] - nanos[b.__index]);
        }
      }
      if (result !== 0) {
        break;
      }
    }
    return result;
  };
  if (hasNestedFrames) {
    return processNestedTableRows(rows, (parents) => [...parents].sort(compareRows));
  }
  return [...rows].sort(compareRows);
}
const frameToRecords = (frame) => {
  const fnBody = `
    const rows = Array(frame.length);
    const values = frame.fields.map(f => f.values);
    let rowCount = 0;
    for (let i = 0; i < frame.length; i++) {
      rows[rowCount] = {
        __depth: 0,
        __index: i,
        ${frame.fields.map((field, fieldIdx) => `${JSON.stringify(getDisplayName(field))}: values[${fieldIdx}][i]`).join(",")}
      };
      rowCount += 1;
      if (rows[rowCount-1]['__nestedFrames']){
        const childFrame = rows[rowCount-1]['__nestedFrames'];
        rows[rowCount] = {__depth: 1, __index: i, data: childFrame[0]}
        rowCount += 1;
      }
    }
    return rows;
  `;
  const convert = new Function("frame", fnBody);
  return convert(frame);
};
const compare = new Intl.Collator("en", { sensitivity: "base", numeric: true }).compare;
const strCompare = (a, b) => compare(String(a ?? ""), String(b ?? ""));
const numCompare = (a, b) => {
  if (a === b) {
    return 0;
  }
  if (a == null) {
    return -1;
  }
  if (b == null) {
    return 1;
  }
  return Number(a) - Number(b);
};
const frameCompare = (a, b) => {
  return (a?.value ?? 0) - (b?.value ?? 0);
};
function getComparator(sortColumnType) {
  switch (sortColumnType) {
    // Handle sorting for frame type fields (sparklines)
    case _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.frame:
      return frameCompare;
    case _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.time:
    case _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.number:
    case _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.boolean:
      return numCompare;
    case _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.string:
    case _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.enum:
    default:
      return strCompare;
  }
}
const TABLE_CELL_GAUGE_DISPLAY_MODES_TO_DISPLAY_MODES = {
  [_grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.BasicGauge]: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.BarGaugeDisplayMode.Basic,
  [_grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.GradientGauge]: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.BarGaugeDisplayMode.Gradient,
  [_grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.LcdGauge]: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.BarGaugeDisplayMode.Lcd
};
const TABLE_CELL_COLOR_BACKGROUND_DISPLAY_MODES_TO_DISPLAY_MODES = {
  [_grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.ColorBackground]: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellBackgroundDisplayMode.Gradient,
  [_grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.ColorBackgroundSolid]: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellBackgroundDisplayMode.Basic
};
function migrateTableDisplayModeToCellOptions(displayMode) {
  switch (displayMode) {
    // In the case of the gauge we move to a different option
    case _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.BasicGauge:
    case _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.GradientGauge:
    case _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.LcdGauge:
      return {
        type: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.Gauge,
        mode: TABLE_CELL_GAUGE_DISPLAY_MODES_TO_DISPLAY_MODES[displayMode]
      };
    // Also true in the case of the color background
    case _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.ColorBackground:
    case _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.ColorBackgroundSolid:
      return {
        type: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.ColorBackground,
        mode: TABLE_CELL_COLOR_BACKGROUND_DISPLAY_MODES_TO_DISPLAY_MODES[displayMode]
      };
    // catching a nonsense case: `displayMode`: 'custom' should pre-date the CustomCell.
    // if it doesn't, we need to just nope out and return an auto cell.
    case _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.Custom:
      return {
        type: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.Auto
      };
    default:
      return {
        type: displayMode
      };
  }
}
const getIsNestedTable = (fields) => fields.some(({ type }) => type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.nestedFrames);
const processNestedTableRows = (rows, processParents) => {
  const parentRows = [];
  const childRows = /* @__PURE__ */ new Map();
  for (const row of rows) {
    if (row.__depth === 0) {
      parentRows.push(row);
    } else {
      childRows.set(row.__index, row);
    }
  }
  const processedParents = processParents(parentRows);
  const result = [];
  processedParents.forEach((row) => {
    result.push(row);
    const childRow = childRows.get(row.__index);
    if (childRow) {
      result.push(childRow);
    }
  });
  return result;
};
const calculateFooterHeight = (fields) => {
  let maxReducerCount = 0;
  for (const field of fields) {
    maxReducerCount = Math.max(maxReducerCount, field.config.custom?.footer?.reducers?.length ?? 0);
  }
  return maxReducerCount > 0 ? maxReducerCount * _constants__WEBPACK_IMPORTED_MODULE_13__.TABLE.LINE_HEIGHT + _constants__WEBPACK_IMPORTED_MODULE_13__.TABLE.CELL_PADDING * 2 : 0;
};
const getDisplayName = (field) => {
  return field.state?.displayName ?? field.name;
};
const predicateByName = (name) => (f) => f.name === name || getDisplayName(f) === name;
function getVisibleFields(fields) {
  return fields.filter((field) => field.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.nestedFrames && field.config.custom?.hideFrom?.viz !== true);
}
function getColumnTypes(fields) {
  return fields.reduce((acc, field) => {
    switch (field.type) {
      case _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.nestedFrames:
        return { ...acc, ...getColumnTypes(field.values[0]?.[0]?.fields ?? []) };
      default:
        return { ...acc, [getDisplayName(field)]: field.type };
    }
  }, {});
}
function computeColWidths(fields, availWidth) {
  let autoCount = 0;
  let definedWidth = 0;
  return fields.map((field) => {
    const width = field.config.custom?.width ?? 0;
    if (width === 0) {
      autoCount++;
    } else {
      definedWidth += width;
    }
    return width;
  }).map(
    (width, i) => width || Math.max(fields[i].config.custom?.minWidth ?? _constants__WEBPACK_IMPORTED_MODULE_13__.COLUMN.DEFAULT_WIDTH, (availWidth - definedWidth) / autoCount)
  );
}
function getApplyToRowBgFn(fields, getCellColorInlineStyles) {
  for (const field of fields) {
    const cellOptions = getCellOptions(field);
    const fieldDisplay = field.display;
    if (fieldDisplay !== void 0 && cellOptions.type === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.ColorBackground && cellOptions.applyToRow === true) {
      return (rowIndex) => getCellColorInlineStyles(cellOptions, fieldDisplay(field.values[rowIndex]), true);
    }
  }
}
function canFieldBeColorized(cellType, applyToRowBgFn) {
  return cellType === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.ColorBackground || cellType === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.ColorText || Boolean(applyToRowBgFn);
}
const displayJsonValue = (field, decimals) => {
  const origDisplay = field.display;
  return (value) => {
    const displayValue = origDisplay(value, decimals);
    let jsonText;
    if (!Array.isArray(value) && !isPlainObject(value)) {
      const formattedValue = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.formattedValueToString)(displayValue);
      try {
        const parsed = JSON.parse(formattedValue);
        jsonText = JSON.stringify(parsed, null, " ");
      } catch {
        jsonText = formattedValue;
      }
    } else {
      jsonText = JSON.stringify(value, null, " ");
    }
    return { ...displayValue, text: jsonText };
  };
};
function prepareSparklineValue(value, field) {
  if (Array.isArray(value)) {
    return {
      y: {
        name: `${field.name}-sparkline`,
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.number,
        values: value,
        config: {}
      }
    };
  }
  if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.isDataFrame)(value)) {
    const timeField = value.fields.find((x) => x.type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.time);
    const numberField = value.fields.find((x) => x.type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.number);
    if (timeField && numberField) {
      return { x: timeField, y: numberField };
    }
  }
  return;
}
function isPlainObject(value) {
  return typeof value === "object" && value != null && !Array.isArray(value);
}
function buildInspectValue(value, field) {
  const cellOptions = getCellOptions(field);
  let inspectValue;
  let mode = _TableCellInspector__WEBPACK_IMPORTED_MODULE_10__.TableCellInspectorMode.text;
  if (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.geo && value instanceof ol_geom_Geometry__WEBPACK_IMPORTED_MODULE_2__["default"]) {
    inspectValue = new ol_format_WKT__WEBPACK_IMPORTED_MODULE_1__["default"]().writeGeometry(value, {
      featureProjection: "EPSG:3857",
      dataProjection: "EPSG:4326"
    });
    mode = _TableCellInspector__WEBPACK_IMPORTED_MODULE_10__.TableCellInspectorMode.code;
  } else if (cellOptions.type === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.Sparkline || (0,_Cells_renderers__WEBPACK_IMPORTED_MODULE_12__.getAutoRendererDisplayMode)(field) === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.Sparkline) {
    const fieldSparkline = prepareSparklineValue(value, field);
    inspectValue = "[";
    if (fieldSparkline != null) {
      const buildValString = fieldSparkline.x != null ? (idx) => `[${fieldSparkline.x.values[idx] ?? "null"}, ${fieldSparkline.y.values[idx] ?? "null"}]` : (idx) => `${fieldSparkline.y.values[idx] ?? "null"}`;
      for (let i = 0; i < fieldSparkline.y.values.length; i++) {
        inspectValue += `
  ${buildValString(i)}${i === fieldSparkline.y.values.length - 1 ? "\n" : ","}`;
      }
    }
    inspectValue += "]";
    mode = _TableCellInspector__WEBPACK_IMPORTED_MODULE_10__.TableCellInspectorMode.code;
  } else if (cellOptions.type === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.JSONView || Array.isArray(value) || isPlainObject(value)) {
    let toStringify = value;
    if (typeof value === "string") {
      try {
        toStringify = JSON.parse(value);
      } catch {
      }
    }
    inspectValue = JSON.stringify(toStringify, null, "  ");
    mode = _TableCellInspector__WEBPACK_IMPORTED_MODULE_10__.TableCellInspectorMode.code;
  } else {
    inspectValue = String(value ?? "");
  }
  return [inspectValue, mode];
}
function getSummaryCellTextAlign(textAlign, cellType) {
  if (cellType === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TableCellDisplayMode.Gauge) {
    return {
      left: "right",
      right: "left",
      center: "center"
    }[textAlign];
  }
  return textAlign;
}
let warnedAboutStyleJsonSet = /* @__PURE__ */ new Set();
function parseStyleJson(rawValue) {
  if (typeof rawValue === "string") {
    try {
      const parsedJsonValue = JSON.parse(rawValue);
      if (parsedJsonValue != null && typeof parsedJsonValue === "object" && !Array.isArray(parsedJsonValue)) {
        return parsedJsonValue;
      }
    } catch (e) {
      if (!warnedAboutStyleJsonSet.has(rawValue)) {
        console.error(`encountered invalid cell style JSON: ${rawValue}`, e);
        warnedAboutStyleJsonSet.add(rawValue);
      }
    }
  }
}
const IS_SAFARI_26 = (() => {
  if (navigator == null) {
    return false;
  }
  const userAgent = navigator.userAgent;
  const safariVersionMatch = userAgent.match(/Version\/(\d+)\./);
  return safariVersionMatch && parseInt(safariVersionMatch[1], 10) === 26;
})();


/***/ }),

/***/ "./public/app/plugins/panel/table/PaginationEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginationEditor: () => (/* binding */ PaginationEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");




function PaginationEditor({ onChange, value, id }) {
  const changeValue = (event) => {
    onChange(event?.currentTarget.checked);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Switch,
    {
      id,
      label: _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.components.PanelEditor.OptionsPane.fieldLabel(`Enable pagination`),
      value: Boolean(value),
      onChange: changeValue
    }
  );
}


/***/ }),

/***/ "./public/app/plugins/panel/table/TableCellOptionEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableCellOptionEditor: () => (/* binding */ TableCellOptionEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Combobox/Combobox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _cells_BarGaugeCellOptionsEditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/table/cells/BarGaugeCellOptionsEditor.tsx");
/* harmony import */ var _cells_ColorBackgroundCellOptionsEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/table/cells/ColorBackgroundCellOptionsEditor.tsx");
/* harmony import */ var _cells_ImageCellOptionsEditor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/panel/table/cells/ImageCellOptionsEditor.tsx");
/* harmony import */ var _cells_MarkdownCellOptionsEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/panel/table/cells/MarkdownCellOptionsEditor.tsx");
/* harmony import */ var _cells_SparklineCellOptionsEditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/panel/table/cells/SparklineCellOptionsEditor.tsx");












const TableCellOptionEditor = ({ value, onChange, id }) => {
  const cellType = value.type;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const cellDisplayModeOptions = [
    { value: _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.Auto, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.cell-types.auto", "Auto") },
    { value: _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.ColorText, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.cell-types.color-text", "Colored text") },
    {
      value: _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.ColorBackground,
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.cell-types.color-background", "Colored background")
    },
    { value: _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.DataLinks, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.cell-types.data-links", "Data links") },
    { value: _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.Gauge, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.cell-types.gauge", "Gauge") },
    { value: _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.Sparkline, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.cell-types.sparkline", "Sparkline") },
    { value: _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.JSONView, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.cell-types.json", "JSON View") },
    { value: _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.Pill, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.cell-types.pill", "Pill") },
    { value: _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.Markdown, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.cell-types.markdown", "Markdown + HTML") },
    { value: _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.Image, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.cell-types.image", "Image") },
    { value: _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.Actions, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.cell-types.actions", "Actions") }
  ];
  const currentMode = cellDisplayModeOptions.find((o) => o.value === cellType);
  let [settingCache, setSettingCache] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});
  const onCellTypeChange = (v) => {
    if (v !== null) {
      value = { type: v.value };
      if (settingCache[value.type] !== void 0 && Object.keys(settingCache[value.type]).length > 1) {
        value = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.merge)({}, value, settingCache[value.type]);
      }
      onChange(value);
    }
  };
  const onCellOptionsChange = (options) => {
    settingCache[value.type] = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.merge)({}, value, options);
    setSettingCache(settingCache);
    onChange(settingCache[value.type]);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.fixBottomMargin, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Combobox, { id, options: cellDisplayModeOptions, value: currentMode, onChange: onCellTypeChange }) }),
    cellType === _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.Gauge && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_cells_BarGaugeCellOptionsEditor__WEBPACK_IMPORTED_MODULE_9__.BarGaugeCellOptionsEditor, { cellOptions: value, onChange: onCellOptionsChange }),
    cellType === _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.ColorBackground && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_cells_ColorBackgroundCellOptionsEditor__WEBPACK_IMPORTED_MODULE_10__.ColorBackgroundCellOptionsEditor, { cellOptions: value, onChange: onCellOptionsChange }),
    cellType === _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.Sparkline && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_cells_SparklineCellOptionsEditor__WEBPACK_IMPORTED_MODULE_13__.SparklineCellOptionsEditor, { cellOptions: value, onChange: onCellOptionsChange }),
    cellType === _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.Image && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_cells_ImageCellOptionsEditor__WEBPACK_IMPORTED_MODULE_11__.ImageCellOptionsEditor, { cellOptions: value, onChange: onCellOptionsChange }),
    cellType === _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.Markdown && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_cells_MarkdownCellOptionsEditor__WEBPACK_IMPORTED_MODULE_12__.MarkdownCellOptionsEditor, { cellOptions: value, onChange: onCellOptionsChange })
  ] });
};
const getStyles = (theme) => ({
  fixBottomMargin: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "relative",
    marginBottom: theme.spacing(-2)
  })
});


/***/ }),

/***/ "./public/app/plugins/panel/table/TablePanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TablePanel: () => (/* binding */ TablePanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/dashboard.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/components/PanelDataErrorView.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/PanelContext.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_unstable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableNG/TableNG.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _features_actions_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/actions/utils.ts");
/* harmony import */ var _migrations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/panel/table/migrations.ts");











function TablePanel(props) {
  const { data, height, width, options, fieldConfig, id, timeRange, replaceVariables, transparent } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.cacheFieldDisplayNames)(data.series);
  }, [data.series]);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useTheme2)();
  const panelContext = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.usePanelContext)();
  const userCanExecuteActions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => panelContext.canExecuteActions?.() ?? false, [panelContext]);
  const _getActions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (frame, field, rowIndex) => userCanExecuteActions ? getCellActions(frame, field, rowIndex, replaceVariables) : [],
    [replaceVariables, userCanExecuteActions]
  );
  const frames = (0,_migrations__WEBPACK_IMPORTED_MODULE_14__.hasDeprecatedParentRowIndex)(data.series) ? (0,_migrations__WEBPACK_IMPORTED_MODULE_14__.migrateFromParentRowIndexToNestedFrames)(data.series) : data.series;
  const count = frames?.length;
  const hasFields = frames.some((frame) => frame.fields.length > 0);
  const currentIndex = getCurrentFrameIndex(frames, options);
  const main = frames[currentIndex];
  let tableHeight = height;
  if (!count || !hasFields) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.PanelDataErrorView, { panelId: id, fieldConfig, data });
  }
  if (count > 1) {
    const inputHeight = theme.spacing.gridSize * theme.components.height.md;
    const padding = theme.spacing.gridSize;
    tableHeight = height - inputHeight - padding;
  }
  const enableSharedCrosshair = panelContext.sync && panelContext.sync() !== _grafana_data__WEBPACK_IMPORTED_MODULE_5__.DashboardCursorSync.Off;
  const disableSanitizeHtml = (0,app_core_config__WEBPACK_IMPORTED_MODULE_12__.getConfig)().disableSanitizeHtml;
  const tableElement = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui_unstable__WEBPACK_IMPORTED_MODULE_11__.TableNG,
    {
      height: tableHeight,
      width,
      data: main,
      noHeader: !options.showHeader,
      showTypeIcons: options.showTypeIcons,
      resizable: true,
      initialSortBy: options.sortBy,
      onSortByChange: (sortBy) => onSortByChange(sortBy, props),
      onColumnResize: (displayName, resizedWidth) => onColumnResize(displayName, resizedWidth, props),
      onCellFilterAdded: panelContext.onAddAdHocFilter,
      frozenColumns: options.frozenColumns?.left,
      enablePagination: options.enablePagination,
      cellHeight: options.cellHeight,
      maxRowHeight: options.maxRowHeight,
      timeRange,
      enableSharedCrosshair: _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.config.featureToggles.tableSharedCrosshair && enableSharedCrosshair,
      fieldConfig,
      getActions: _getActions,
      structureRev: data.structureRev,
      transparent,
      disableSanitizeHtml
    }
  );
  if (count === 1) {
    return tableElement;
  }
  const names = frames.map((frame, index) => {
    return {
      label: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getFrameDisplayName)(frame),
      value: index
    };
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: tableStyles.wrapper, children: [
    tableElement,
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: tableStyles.selectWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Select, { options: names, value: names[currentIndex], onChange: (val) => onChangeTableSelection(val, props) }) })
  ] });
}
function getCurrentFrameIndex(frames, options) {
  return options.frameIndex > 0 && options.frameIndex < frames.length ? options.frameIndex : 0;
}
function onColumnResize(fieldDisplayName, width, props) {
  const { fieldConfig } = props;
  const { overrides } = fieldConfig;
  const matcherId = _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldMatcherID.byName;
  const propId = "custom.width";
  const override = overrides.find((o) => o.matcher.id === matcherId && o.matcher.options === fieldDisplayName);
  if (override) {
    const property = override.properties.find((prop) => prop.id === propId);
    if (property) {
      property.value = width;
    } else {
      override.properties.push({ id: propId, value: width });
    }
  } else {
    overrides.push({
      matcher: { id: matcherId, options: fieldDisplayName },
      properties: [{ id: propId, value: width }]
    });
  }
  props.onFieldConfigChange({
    ...fieldConfig,
    overrides
  });
}
function onSortByChange(sortBy, props) {
  props.onOptionsChange({
    ...props.options,
    sortBy
  });
}
function onChangeTableSelection(val, props) {
  props.onOptionsChange({
    ...props.options,
    frameIndex: val.value || 0
  });
}
const replaceVars = (value) => value;
const getCellActions = (dataFrame, field, rowIndex, replaceVariables) => {
  const numActions = field.config.actions?.length ?? 0;
  if (numActions > 0) {
    const actions = (0,_features_actions_utils__WEBPACK_IMPORTED_MODULE_13__.getActions)(
      dataFrame,
      field,
      field.state.scopedVars,
      replaceVariables ?? replaceVars,
      field.config.actions ?? [],
      { valueRowIndex: rowIndex },
      "table"
    );
    if (actions.length === 1) {
      return actions;
    } else {
      const actionsOut = [];
      const actionLookup = /* @__PURE__ */ new Set();
      actions.forEach((action) => {
        const key = action.title;
        if (!actionLookup.has(key)) {
          actionsOut.push(action);
          actionLookup.add(key);
        }
      });
      return actionsOut;
    }
  }
  return [];
};
const tableStyles = {
  wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%"
  }),
  selectWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: "8px 8px 0px 8px"
  })
};


/***/ }),

/***/ "./public/app/plugins/panel/table/cells/BarGaugeCellOptionsEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarGaugeCellOptionsEditor: () => (/* binding */ BarGaugeCellOptionsEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");





function BarGaugeCellOptionsEditor({ cellOptions, onChange }) {
  const onCellOptionsChange = (v) => {
    cellOptions.mode = v;
    onChange(cellOptions);
  };
  const onValueModeChange = (v) => {
    cellOptions.valueDisplayMode = v;
    onChange(cellOptions);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { direction: "column", gap: 0, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("table.bar-gauge-cell-options-editor.label-gauge-display-mode", "Gauge display mode"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.RadioButtonGroup,
      {
        value: cellOptions?.mode ?? _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BarGaugeDisplayMode.Gradient,
        onChange: onCellOptionsChange,
        options: barGaugeOpts
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("table.bar-gauge-cell-options-editor.label-value-display", "Value display"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.RadioButtonGroup,
      {
        value: cellOptions?.valueDisplayMode ?? _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BarGaugeValueMode.Text,
        onChange: onValueModeChange,
        options: valueModes
      }
    ) })
  ] });
}
const barGaugeOpts = [
  { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BarGaugeDisplayMode.Basic, label: "Basic" },
  { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BarGaugeDisplayMode.Gradient, label: "Gradient" },
  { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BarGaugeDisplayMode.Lcd, label: "Retro LCD" }
];
const valueModes = [
  { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BarGaugeValueMode.Color, label: "Value color" },
  { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BarGaugeValueMode.Text, label: "Text color" },
  { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BarGaugeValueMode.Hidden, label: "Hidden" }
];


/***/ }),

/***/ "./public/app/plugins/panel/table/cells/ColorBackgroundCellOptionsEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorBackgroundCellOptionsEditor: () => (/* binding */ ColorBackgroundCellOptionsEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");







const colorBackgroundOpts = [
  { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.TableCellBackgroundDisplayMode.Basic, label: "Basic" },
  { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.TableCellBackgroundDisplayMode.Gradient, label: "Gradient" }
];
const ColorBackgroundCellOptionsEditor = ({
  cellOptions,
  onChange
}) => {
  const onCellOptionsChange = (v) => {
    cellOptions.mode = v;
    onChange(cellOptions);
  };
  const onColorRowChange = () => {
    cellOptions.applyToRow = !cellOptions.applyToRow;
    onChange(cellOptions);
  };
  const applyToRowSwitchId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("table.color-background-cell-options-editor.label-background-display-mode", "Background display mode"),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.RadioButtonGroup,
          {
            "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.PanelEditor.OptionsPane.fieldLabel(`Background display mode`),
            value: cellOptions?.mode ?? _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.TableCellBackgroundDisplayMode.Gradient,
            onChange: onCellOptionsChange,
            options: colorBackgroundOpts
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("table.color-background-cell-options-editor.label-apply-to-entire-row", "Apply to entire row"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "table.color-background-cell-options-editor.description-apply-to-entire-row",
          "If selected the entire row will be colored as this cell would be."
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Switch,
          {
            id: applyToRowSwitchId,
            label: _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.PanelEditor.OptionsPane.fieldLabel(`Apply to entire row`),
            value: cellOptions.applyToRow,
            onChange: onColorRowChange
          }
        )
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/plugins/panel/table/cells/ImageCellOptionsEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageCellOptionsEditor: () => (/* binding */ ImageCellOptionsEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");





const ImageCellOptionsEditor = ({ cellOptions, onChange }) => {
  const onAltChange = (e) => {
    cellOptions.alt = e.currentTarget.value;
    onChange(cellOptions);
  };
  const onTitleChange = (e) => {
    cellOptions.title = e.currentTarget.value;
    onChange(cellOptions);
  };
  const altTextInputId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
  const titleTextInputId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("table.image-cell-options-editor.label-alt-text", "Alt text"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "table.image-cell-options-editor.description-alt-text",
          "Alternative text that will be displayed if an image can't be displayed or for users who use a screen reader"
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, { id: altTextInputId, onChange: onAltChange, defaultValue: cellOptions.alt })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("table.image-cell-options-editor.label-title-text", "Title text"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "table.image-cell-options-editor.description-title-text",
          "Text that will be displayed when the image is hovered by a cursor"
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, { id: titleTextInputId, onChange: onTitleChange, defaultValue: cellOptions.title })
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/plugins/panel/table/cells/MarkdownCellOptionsEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownCellOptionsEditor: () => (/* binding */ MarkdownCellOptionsEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");




const MarkdownCellOptionsEditor = ({
  cellOptions,
  onChange
}) => {
  const onDynamicHeightChange = (e) => {
    cellOptions.dynamicHeight = e.currentTarget.checked;
    onChange(cellOptions);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field,
    {
      label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Label,
        {
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
            "table.markdown-cell-options-editor.description-dynamic-height",
            "We recommend enabling pagination with this option to avoid performance issues."
          ),
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "table.markdown-cell-options-editor.label-dynamic-height", children: "Dynamic height" }),
            " ",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Badge,
              {
                text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("table.markdown-cell-options-editor.label.text-alpha", "Alpha"),
                color: "blue",
                style: { fontSize: "11px", marginLeft: "5px", lineHeight: "1.2" }
              }
            )
          ]
        }
      ),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Switch, { onChange: onDynamicHeightChange, value: cellOptions.dynamicHeight })
    }
  );
};


/***/ }),

/***/ "./public/app/plugins/panel/table/cells/SparklineCellOptionsEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SparklineCellOptionsEditor: () => (/* binding */ SparklineCellOptionsEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/panel/registryFactories.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Table/Cells/SparklineCell.tsx");
/* harmony import */ var _timeseries_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/timeseries/config.ts");








const optionIds = [
  "hideValue",
  "drawStyle",
  "lineInterpolation",
  "barAlignment",
  "lineWidth",
  "fillOpacity",
  "gradientMode",
  "lineStyle",
  "spanNulls",
  "showPoints",
  "pointSize"
];
function getChartCellConfig(cfg) {
  const graphFieldConfig = (0,_timeseries_config__WEBPACK_IMPORTED_MODULE_8__.getGraphFieldConfig)(cfg);
  return {
    ...graphFieldConfig,
    useCustomConfig: (builder) => {
      graphFieldConfig.useCustomConfig?.(builder);
      builder.addBooleanSwitch({
        path: "hideValue",
        name: "Hide value"
      });
    }
  };
}
const SparklineCellOptionsEditor = (props) => {
  const { cellOptions, onChange } = props;
  const registry = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const config = getChartCellConfig(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_7__.defaultSparklineCellConfig);
    return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.createFieldConfigRegistry)(config, "ChartCell");
  }, []);
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  const values = { ..._grafana_ui_internal__WEBPACK_IMPORTED_MODULE_7__.defaultSparklineCellConfig, ...cellOptions };
  const htmlIdBase = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "column", children: registry.list(optionIds.map((id) => `custom.${id}`)).map((item) => {
    if (item.showIf && !item.showIf(values)) {
      return null;
    }
    const Editor = item.editor;
    const path = item.path;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, { label: item.name, className: style.field, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      Editor,
      {
        onChange: (val) => onChange({ ...cellOptions, [path]: val }),
        value: (isOptionKey(path, values) ? values[path] : void 0) ?? item.defaultValue,
        item,
        context: { data: [] },
        id: `${htmlIdBase}${item.id}`
      }
    ) }, item.id);
  }) });
};
function isOptionKey(key, options) {
  return key in options;
}
const getStyles = () => ({
  field: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "100%",
    // @TODO don't show "scheme" option for custom gradient mode.
    // it needs thresholds to work, which are not supported
    // for area chart cell right now
    "[title='Use color scheme to define gradient']": {
      display: "none"
    }
  })
});


/***/ }),

/***/ "./public/app/plugins/panel/table/img/icn-table-panel.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/icn-table-panel.3ee1d0cc.svg";

/***/ }),

/***/ "./public/app/plugins/panel/table/migrations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasDeprecatedParentRowIndex: () => (/* binding */ hasDeprecatedParentRowIndex),
/* harmony export */   migrateFooterV2: () => (/* binding */ migrateFooterV2),
/* harmony export */   migrateFromParentRowIndexToNestedFrames: () => (/* binding */ migrateFromParentRowIndexToNestedFrames),
/* harmony export */   migrateHiddenFields: () => (/* binding */ migrateHiddenFields),
/* harmony export */   migrateTextWrapToFieldLevel: () => (/* binding */ migrateTextWrapToFieldLevel),
/* harmony export */   tableMigrationHandler: () => (/* binding */ tableMigrationHandler),
/* harmony export */   tablePanelChangedHandler: () => (/* binding */ tablePanelChangedHandler)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/nameMatcher.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/thresholds.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");



const tableMigrationHandler = (panel) => {
  if (!panel.pluginVersion && "columns" in panel) {
    console.log("Was angular table", panel);
  }
  migrateTextWrapToFieldLevel(panel);
  migrateHiddenFields(panel);
  migrateFooterV2(panel);
  return panel.options;
};
const transformsMap = {
  timeseries_to_rows: "seriesToRows",
  timeseries_to_columns: "seriesToColumns",
  timeseries_aggregations: "reduce",
  table: "merge"
};
const columnsMap = {
  avg: "mean",
  min: "min",
  max: "max",
  total: "sum",
  current: "lastNotNull",
  count: "count"
};
const colorModeMap = {
  cell: "color-background",
  row: "color-background",
  value: "color-text"
};
const generateThresholds = (thresholds, colors) => {
  return [-Infinity, ...thresholds].map((threshold, idx) => ({
    color: colors[idx],
    value: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(threshold) ? threshold : parseInt(threshold, 10)
  }));
};
const migrateTransformations = (panel, oldOpts) => {
  const transformations = panel.transformations ?? [];
  if (Object.keys(transformsMap).includes(oldOpts.transform)) {
    const opts = {
      reducers: []
    };
    if (oldOpts.transform === "timeseries_aggregations") {
      opts.includeTimeField = false;
      opts.reducers = oldOpts.columns.map((column) => columnsMap[column.value]);
    }
    transformations.push({
      id: transformsMap[oldOpts.transform],
      options: opts
    });
  }
  return transformations;
};
const migrateTableStyleToOverride = (style) => {
  const fieldMatcherId = /^\/.*\/$/.test(style.pattern) ? _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldMatcherID.byRegexp : _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldMatcherID.byName;
  const override = {
    matcher: {
      id: fieldMatcherId,
      options: style.pattern
    },
    properties: []
  };
  if (style.alias) {
    override.properties.push({
      id: "displayName",
      value: style.alias
    });
  }
  if (style.unit) {
    override.properties.push({
      id: "unit",
      value: style.unit
    });
  }
  if (style.decimals !== void 0) {
    override.properties.push({
      id: "decimals",
      value: style.decimals
    });
  }
  if (style.type === "date") {
    override.properties.push({
      id: "unit",
      value: `time: ${style.dateFormat}`
    });
  }
  if (style.type === "hidden") {
    override.properties.push({
      id: "custom.hidden",
      value: true
    });
  }
  if (style.link) {
    override.properties.push({
      id: "links",
      value: [
        {
          title: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.defaultTo)(style.linkTooltip, ""),
          url: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.defaultTo)(style.linkUrl, ""),
          targetBlank: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.defaultTo)(style.linkTargetBlank, false)
        }
      ]
    });
  }
  if (style.colorMode) {
    override.properties.push({
      id: "custom.cellOptions",
      value: {
        type: colorModeMap[style.colorMode]
      }
    });
  }
  if (style.align) {
    override.properties.push({
      id: "custom.align",
      value: style.align === "auto" ? null : style.align
    });
  }
  if (style.thresholds?.length && style.colors?.length) {
    override.properties.push({
      id: "thresholds",
      value: {
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.ThresholdsMode.Absolute,
        steps: generateThresholds(style.thresholds, style.colors)
      }
    });
  }
  return override;
};
const migrateDefaults = (prevDefaults) => {
  let defaults = {
    custom: {}
  };
  if (prevDefaults) {
    defaults = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(
      {
        unit: prevDefaults.unit,
        decimals: prevDefaults.decimals,
        displayName: prevDefaults.alias,
        custom: {
          align: prevDefaults.align === "auto" ? null : prevDefaults.align
        }
      },
      lodash__WEBPACK_IMPORTED_MODULE_0__.isNil
    );
    if (prevDefaults.thresholds && prevDefaults.thresholds.length) {
      const thresholds = {
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.ThresholdsMode.Absolute,
        steps: generateThresholds(prevDefaults.thresholds, prevDefaults.colors)
      };
      defaults.thresholds = thresholds;
    }
    if (prevDefaults.colorMode) {
      defaults.custom.cellOptions = {
        type: colorModeMap[prevDefaults.colorMode]
      };
    }
  }
  return defaults;
};
const tablePanelChangedHandler = (panel, prevPluginId, prevOptions) => {
  if (prevPluginId === "table-old" && prevOptions.angular) {
    const oldOpts = prevOptions.angular;
    const transformations = migrateTransformations(panel, oldOpts);
    const prevDefaults = oldOpts.styles.find((style) => style.pattern === "/.*/");
    const defaults = migrateDefaults(prevDefaults);
    const overrides = oldOpts.styles.filter((style) => style.pattern !== "/.*/").map(migrateTableStyleToOverride);
    panel.transformations = transformations;
    panel.fieldConfig = {
      defaults,
      overrides
    };
  }
  return {};
};
const getMainFrames = (frames) => {
  return frames?.filter((df) => df.meta?.custom?.parentRowIndex === void 0) || [frames?.[0]];
};
const migrateFromParentRowIndexToNestedFrames = (frames) => {
  const migratedFrames = [];
  const mainFrames = getMainFrames(frames).filter(
    (frame) => !!frame && frame.length !== 0
  );
  mainFrames?.forEach((frame) => {
    const subFrames = frames?.filter((df) => frame.refId === df.refId && df.meta?.custom?.parentRowIndex !== void 0);
    const subFramesGrouped = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(subFrames, (frame2) => frame2.meta?.custom?.parentRowIndex);
    const subFramesByIndex = Object.keys(subFramesGrouped).map((key) => subFramesGrouped[key]);
    const migratedFrame = { ...frame };
    if (subFrames && subFrames.length > 0) {
      migratedFrame.fields.push({
        name: "nested",
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.nestedFrames,
        config: {},
        values: subFramesByIndex
      });
    }
    migratedFrames.push(migratedFrame);
  });
  return migratedFrames;
};
const hasDeprecatedParentRowIndex = (frames) => {
  return frames?.some((df) => df.meta?.custom?.parentRowIndex !== void 0);
};
const migrateTextWrapToFieldLevel = (panel) => {
  if (panel.fieldConfig?.defaults.custom?.wrapText !== void 0) {
    return;
  }
  const legacyDefaultWrapText = panel.fieldConfig?.defaults.custom?.cellOptions?.wrapText;
  panel.fieldConfig.overrides = panel.fieldConfig.overrides.map((override) => {
    if (override.properties) {
      override.properties = override.properties.flatMap((property) => {
        if (property.id === "custom.cellOptions" && property.value && property.value.wrapText !== void 0) {
          return [
            { ...property, value: { ...(0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(property.value, "wrapText") } },
            { id: "custom.wrapText", value: property.value.wrapText }
          ];
        }
        return [property];
      });
    }
    return override;
  });
  panel.fieldConfig.defaults.custom = panel.fieldConfig.defaults.custom ?? {};
  panel.fieldConfig.defaults.custom.wrapText = legacyDefaultWrapText;
  delete panel.fieldConfig.defaults.custom.cellOptions?.wrapText;
  return panel;
};
const migrateHiddenFields = (panel) => {
  panel.fieldConfig.overrides = panel.fieldConfig.overrides.map((override) => {
    if (override.properties) {
      override.properties = override.properties.map((property) => {
        if (property.id === "custom.hidden") {
          return { ...property, id: "custom.hideFrom.viz" };
        }
        return property;
      });
    }
    return override;
  });
  return panel;
};
const migrateFooterV2 = (panel) => {
  if (panel.options && "footer" in panel.options) {
    const oldFooter = panel.options.footer;
    if (oldFooter.show) {
      const reducers = oldFooter.reducer;
      panel.fieldConfig.defaults.custom = {
        ...panel.fieldConfig.defaults.custom,
        footer: {
          reducers
        }
      };
      if (oldFooter.countRows && reducers[0] === "count") {
        panel.fieldConfig.defaults.custom.footer.reducers = ["countAll"];
      } else if (oldFooter.fields && oldFooter.fields.length > 1) {
        delete panel.fieldConfig.defaults.custom.footer;
        panel.fieldConfig.overrides.push({
          matcher: {
            id: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldMatcherID.byNames,
            options: {
              mode: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ByNamesMatcherMode.include,
              names: oldFooter.fields
            }
          },
          properties: [{ id: "custom.footer.reducers", value: reducers }]
        });
      } else if (oldFooter.fields && oldFooter.fields.length === 1) {
        delete panel.fieldConfig.defaults.custom.footer;
        panel.fieldConfig.overrides.push({
          matcher: {
            id: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldMatcherID.byName,
            options: oldFooter.fields[0]
          },
          properties: [{ id: "custom.footer.reducers", value: reducers }]
        });
      }
    }
    if (oldFooter.enablePagination != null) {
      panel.options.enablePagination = oldFooter.enablePagination;
    }
    delete panel.options.footer;
  }
};


/***/ }),

/***/ "./public/app/plugins/panel/table/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/field/standardFieldConfigEditorRegistry.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/field/overrides/processors.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/fieldOverrides.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-schema/src/veneer/common.types.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _PaginationEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/table/PaginationEditor.tsx");
/* harmony import */ var _TableCellOptionEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/table/TableCellOptionEditor.tsx");
/* harmony import */ var _TablePanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/table/TablePanel.tsx");
/* harmony import */ var _migrations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/table/migrations.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/panel/table/panelcfg.gen.ts");
/* harmony import */ var _suggestions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/panel/table/suggestions.ts");










const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PanelPlugin(_TablePanel__WEBPACK_IMPORTED_MODULE_9__.TablePanel).setPanelChangeHandler(_migrations__WEBPACK_IMPORTED_MODULE_10__.tablePanelChangedHandler).setMigrationHandler(_migrations__WEBPACK_IMPORTED_MODULE_10__.tableMigrationHandler).useFieldConfig({
  standardOptions: {
    [_grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldConfigProperty.Actions]: {
      hideFromDefaults: false
    }
  },
  useCustomConfig: (builder) => {
    const category = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.category-table", "Table")];
    const cellCategory = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.category-cell-options", "Cell options")];
    builder.addNumberInput({
      path: "minWidth",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.name-min-column-width", "Minimum column width"),
      category,
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.description-min-column-width", "The minimum width for column auto resizing"),
      settings: {
        placeholder: "150",
        min: 50,
        max: 500
      },
      shouldApply: () => true,
      defaultValue: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.defaultTableFieldOptions.minWidth
    }).addNumberInput({
      path: "width",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.name-column-width", "Column width"),
      category,
      settings: {
        placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.placeholder-column-width", "auto"),
        min: 20
      },
      shouldApply: () => true,
      defaultValue: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.defaultTableFieldOptions.width
    }).addRadio({
      path: "align",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.name-column-alignment", "Column alignment"),
      category,
      settings: {
        options: [
          { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.column-alignment-options.label-auto", "Auto"), value: "auto" },
          { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.column-alignment-options.label-left", "Left"), value: "left" },
          { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.column-alignment-options.label-center", "Center"), value: "center" },
          { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.column-alignment-options.label-right", "Right"), value: "right" }
        ]
      },
      defaultValue: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.defaultTableFieldOptions.align
    }).addBooleanSwitch({
      path: "filterable",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.name-column-filter", "Column filter"),
      category,
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.description-column-filter", "Enables/disables field filters in table"),
      defaultValue: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.defaultTableFieldOptions.filterable
    }).addBooleanSwitch({
      path: "wrapText",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.name-wrap-text", "Wrap text"),
      category
    }).addBooleanSwitch({
      path: "wrapHeaderText",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.name-wrap-header-text", "Wrap header text"),
      category
    }).addBooleanSwitch({
      path: "hideFrom.viz",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.name-hide-in-table", "Hide in table"),
      category,
      defaultValue: void 0,
      hideFromDefaults: true
    }).addCustomEditor({
      id: "footer.reducers",
      category: [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.category-table-footer", "Table footer")],
      path: "footer.reducers",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.name-calculation", "Calculation"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.description-calculation", "Choose a reducer function / calculation"),
      editor: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.standardEditorsRegistry.get("stats-picker").editor,
      override: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.standardEditorsRegistry.get("stats-picker").editor,
      defaultValue: [],
      process: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.identityOverrideProcessor,
      shouldApply: () => true,
      settings: {
        allowMultiple: true
      }
    }).addCustomEditor({
      id: "cellOptions",
      path: "cellOptions",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.name-cell-type", "Cell type"),
      editor: _TableCellOptionEditor__WEBPACK_IMPORTED_MODULE_8__.TableCellOptionEditor,
      override: _TableCellOptionEditor__WEBPACK_IMPORTED_MODULE_8__.TableCellOptionEditor,
      defaultValue: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.defaultTableFieldOptions.cellOptions,
      process: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.identityOverrideProcessor,
      category: cellCategory,
      shouldApply: () => true
    }).addBooleanSwitch({
      path: "inspect",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.name-cell-value-inspect", "Cell value inspect"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.description-cell-value-inspect", "Enable cell value inspection in a modal window"),
      defaultValue: false,
      category: cellCategory,
      showIf: (cfg) => {
        return cfg.cellOptions.type === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.Auto || cfg.cellOptions.type === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.JSONView || cfg.cellOptions.type === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.ColorText || cfg.cellOptions.type === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.TableCellDisplayMode.ColorBackground;
      }
    }).addFieldNamePicker({
      path: "tooltip.field",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.name-tooltip-from-field", "Tooltip from field"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "table.description-tooltip-from-field",
        "Render a cell from a field (hidden or visible) in a tooltip"
      ),
      category: cellCategory
    }).addSelect({
      path: "tooltip.placement",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.name-tooltip-placement", "Tooltip placement"),
      category: cellCategory,
      settings: {
        options: [
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.tooltip-placement-options.label-auto", "Auto"),
            value: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.TableCellTooltipPlacement.Auto
          },
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.tooltip-placement-options.label-top", "Top"),
            value: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.TableCellTooltipPlacement.Top
          },
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.tooltip-placement-options.label-right", "Right"),
            value: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.TableCellTooltipPlacement.Right
          },
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.tooltip-placement-options.label-bottom", "Bottom"),
            value: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.TableCellTooltipPlacement.Bottom
          },
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.tooltip-placement-options.label-left", "Left"),
            value: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.TableCellTooltipPlacement.Left
          }
        ]
      },
      showIf: (cfg) => cfg.tooltip?.field !== void 0
    }).addFieldNamePicker({
      path: "styleField",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.name-styling-from-field", "Styling from field"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.description-styling-from-field", "A field containing JSON objects with CSS properties"),
      category: cellCategory
    });
  }
}).setPanelOptions((builder) => {
  const category = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.category-table", "Table")];
  builder.addBooleanSwitch({
    path: "showHeader",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.name-show-table-header", "Show table header"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_11__.defaultOptions.showHeader
  }).addNumberInput({
    path: "frozenColumns.left",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.name-frozen-columns", "Frozen columns"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.description-frozen-columns", "Columns are frozen from the left side of the table"),
    settings: {
      placeholder: "none"
    },
    category
  }).addRadio({
    path: "cellHeight",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.name-cell-height", "Cell height"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_11__.defaultOptions.cellHeight,
    settings: {
      options: [
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.TableCellHeight.Sm, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.cell-height-options.label-small", "Small") },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.TableCellHeight.Md, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.cell-height-options.label-medium", "Medium") },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.TableCellHeight.Lg, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.cell-height-options.label-large", "Large") }
      ]
    }
  }).addNumberInput({
    path: "maxRowHeight",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.name-max-height", "Max row height"),
    category,
    settings: {
      placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.placeholder-max-height", "none"),
      min: 0
    }
  }).addCustomEditor({
    id: "enablePagination",
    path: "enablePagination",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("table.name-enable-pagination", "Enable pagination"),
    category,
    editor: _PaginationEditor__WEBPACK_IMPORTED_MODULE_7__.PaginationEditor,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_11__.defaultOptions?.enablePagination
  });
}).setSuggestionsSupplier(new _suggestions__WEBPACK_IMPORTED_MODULE_12__.TableSuggestionsSupplier());


/***/ }),

/***/ "./public/app/plugins/panel/table/panelcfg.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");


const defaultOptions = {
  cellHeight: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.TableCellHeight.Sm,
  frameIndex: 0,
  showHeader: true,
  showTypeIcons: false,
  sortBy: []
};


/***/ }),

/***/ "./public/app/plugins/panel/table/suggestions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableSuggestionsSupplier: () => (/* binding */ TableSuggestionsSupplier)
/* harmony export */ });
/* harmony import */ var app_plugins_panel_table_img_icn_table_panel_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/panel/table/img/icn-table-panel.svg");
/* harmony import */ var app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/suggestions.ts");



class TableSuggestionsSupplier {
  getSuggestionsForData(builder) {
    const list = builder.getListAppender({
      name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionName.Table,
      pluginId: "table",
      options: {},
      fieldConfig: {
        defaults: {
          custom: {}
        },
        overrides: []
      },
      cardOptions: {
        previewModifier: (s) => {
          s.fieldConfig.defaults.custom.minWidth = 50;
        }
      }
    });
    if (builder.dataSummary.fieldCount === 0) {
      list.append({
        cardOptions: {
          imgSrc: app_plugins_panel_table_img_icn_table_panel_svg__WEBPACK_IMPORTED_MODULE_0__
        }
      });
    } else {
      list.append({});
    }
  }
}


/***/ }),

/***/ "./public/app/types/suggestions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuggestionName: () => (/* binding */ SuggestionName)
/* harmony export */ });

var SuggestionName = /* @__PURE__ */ ((SuggestionName2) => {
  SuggestionName2["LineChart"] = "Line chart";
  SuggestionName2["LineChartSmooth"] = "Line chart smooth";
  SuggestionName2["LineChartGradientColorScheme"] = "Line chart with gradient color scheme";
  SuggestionName2["AreaChart"] = "Area chart";
  SuggestionName2["AreaChartStacked"] = "Area chart stacked";
  SuggestionName2["AreaChartStackedPercent"] = "Area chart 100% stacked";
  SuggestionName2["BarChart"] = "Bar chart";
  SuggestionName2["BarChartGradientColorScheme"] = "Bar chart with gradient color scheme";
  SuggestionName2["BarChartStacked"] = "Bar chart stacked";
  SuggestionName2["BarChartStackedPercent"] = "Bar chart 100% stacked";
  SuggestionName2["BarChartHorizontal"] = "Bar chart horizontal";
  SuggestionName2["BarChartHorizontalStacked"] = "Bar chart horizontal stacked";
  SuggestionName2["BarChartHorizontalStackedPercent"] = "Bar chart horizontal 100% stacked";
  SuggestionName2["Candlestick"] = "Candlestick";
  SuggestionName2["PieChart"] = "Pie chart";
  SuggestionName2["PieChartDonut"] = "Pie chart donut";
  SuggestionName2["Stat"] = "Stat";
  SuggestionName2["StatColoredBackground"] = "Stat colored background";
  SuggestionName2["Gauge"] = "Gauge";
  SuggestionName2["GaugeCircular"] = "Circular gauge";
  SuggestionName2["GaugeNoThresholds"] = "Gauge no thresholds";
  SuggestionName2["BarGaugeBasic"] = "Bar gauge basic";
  SuggestionName2["BarGaugeLCD"] = "Bar gauge LCD";
  SuggestionName2["Table"] = "Table";
  SuggestionName2["StateTimeline"] = "State timeline";
  SuggestionName2["StatusHistory"] = "Status history";
  SuggestionName2["TextPanel"] = "Text";
  SuggestionName2["DashboardList"] = "Dashboard list";
  SuggestionName2["Logs"] = "Logs";
  SuggestionName2["FlameGraph"] = "Flame graph";
  SuggestionName2["Trace"] = "Trace";
  SuggestionName2["NodeGraph"] = "Node graph";
  return SuggestionName2;
})(SuggestionName || {});


/***/ })

}]);
//# sourceMappingURL=tablePanel.fbb46b184af8d380e27a.js.map