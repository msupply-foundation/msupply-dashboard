"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_alerting_unified_components_rules_state-history_LokiStateHistory_tsx"],{

/***/ "./packages/grafana-data/src/transformations/transformers/nulls/nullToUndefThreshold.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nullToUndefThreshold: () => (/* binding */ nullToUndefThreshold)
/* harmony export */ });

function nullToUndefThreshold(refValues, fieldValues, maxThreshold) {
  let prevRef;
  let nullIdx;
  for (let i = 0; i < fieldValues.length; i++) {
    let fieldVal = fieldValues[i];
    if (fieldVal == null) {
      if (nullIdx == null && prevRef != null) {
        nullIdx = i;
      }
    } else {
      if (nullIdx != null && prevRef != null) {
        if (refValues[i] - prevRef < maxThreshold) {
          while (nullIdx < i) {
            fieldValues[nullIdx++] = void 0;
          }
        }
        nullIdx = null;
      }
      prevRef = refValues[i];
    }
  }
  return fieldValues;
}


/***/ }),

/***/ "./public/app/core/components/GraphNG/GraphNG.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphNG: () => (/* binding */ GraphNG)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/field/fieldOverrides.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/VizLayout/VizLayout.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/Plot.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/GraphNG/utils.ts");








function sameProps(prevProps, nextProps, propsToDiff = []) {
  for (const propName of propsToDiff) {
    if (typeof propName === "function") {
      if (!propName(prevProps, nextProps)) {
        return false;
      }
    } else if (nextProps[propName] !== prevProps[propName]) {
      return false;
    }
  }
  return true;
}
const defaultMatchers = {
  x: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.fieldMatchers.get(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldMatcherID.firstTimeField).get({}),
  y: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.fieldMatchers.get(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldMatcherID.byTypes).get(/* @__PURE__ */ new Set([_grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.number, _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.enum]))
};
class GraphNG extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.getTimeRange = () => this.props.timeRange;
    let state = this.prepState(props);
    state.alignedData = state.config.prepData([state.alignedFrame]);
    this.state = state;
    this.plotInstance = react__WEBPACK_IMPORTED_MODULE_1__.createRef();
  }
  prepState(props, withConfig = true) {
    let state = null;
    const { frames, fields = defaultMatchers, preparePlotFrame, replaceVariables, dataLinkPostProcessor } = props;
    const preparePlotFrameFn = preparePlotFrame ?? _utils__WEBPACK_IMPORTED_MODULE_9__.preparePlotFrame;
    const withLinks = frames.some((frame) => frame.fields.some((field) => (field.config.links?.length ?? 0) > 0));
    const alignedFrame = preparePlotFrameFn(
      frames,
      {
        ...fields,
        // if there are data links, keep all fields during join so they're index-matched
        y: withLinks ? () => true : fields.y
      },
      props.timeRange
    );
    (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__.pluginLog)("GraphNG", false, "data aligned", alignedFrame);
    if (alignedFrame) {
      let alignedFrameFinal = alignedFrame;
      if (withLinks) {
        const timeZone = Array.isArray(this.props.timeZone) ? this.props.timeZone[0] : this.props.timeZone;
        let linkFrames = frames.map((frame, frameIdx) => ({
          ...frame,
          fields: alignedFrame.fields.filter(
            (field, fieldIdx) => fieldIdx === 0 || field.state?.origin?.frameIndex === frameIdx
          ),
          length: alignedFrame.length
        }));
        linkFrames.forEach((linkFrame, frameIndex) => {
          linkFrame.fields.forEach((field) => {
            field.getLinks = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.getLinksSupplier)(
              linkFrame,
              field,
              {
                ...field.state?.scopedVars,
                __dataContext: {
                  value: {
                    data: linkFrames,
                    field,
                    frame: linkFrame,
                    frameIndex
                  }
                }
              },
              replaceVariables,
              timeZone,
              dataLinkPostProcessor
            );
          });
        });
        alignedFrameFinal = {
          ...alignedFrame,
          fields: alignedFrame.fields.filter((field, i) => i === 0 || fields.y(field, alignedFrame, [alignedFrame]))
        };
      }
      if (props.omitHideFromViz) {
        const nonHiddenFields = alignedFrameFinal.fields.filter((field) => field.config.custom?.hideFrom?.viz !== true);
        alignedFrameFinal = {
          ...alignedFrameFinal,
          fields: nonHiddenFields,
          length: nonHiddenFields.length
        };
      }
      let config = this.state?.config;
      if (withConfig) {
        config = props.prepConfig(alignedFrameFinal, this.props.frames, this.getTimeRange);
        (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__.pluginLog)("GraphNG", false, "config prepared", config);
      }
      state = {
        alignedFrame: alignedFrameFinal,
        config
      };
      (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__.pluginLog)("GraphNG", false, "data prepared", state.alignedData);
    }
    return state;
  }
  componentDidUpdate(prevProps) {
    const { frames, structureRev, timeZone, cursorSync, propsToDiff } = this.props;
    const propsChanged = !sameProps(prevProps, this.props, propsToDiff);
    if (frames !== prevProps.frames || propsChanged || timeZone !== prevProps.timeZone || cursorSync !== prevProps.cursorSync) {
      let newState = this.prepState(this.props, false);
      if (newState) {
        const shouldReconfig = this.state.config === void 0 || timeZone !== prevProps.timeZone || cursorSync !== prevProps.cursorSync || structureRev !== prevProps.structureRev || !structureRev || propsChanged;
        if (shouldReconfig) {
          newState.config = this.props.prepConfig(newState.alignedFrame, this.props.frames, this.getTimeRange);
          (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__.pluginLog)("GraphNG", false, "config recreated", newState.config);
        }
        newState.alignedData = newState.config.prepData([newState.alignedFrame]);
        this.setState(newState);
      }
    }
  }
  render() {
    const { width, height, children, renderLegend } = this.props;
    const { config, alignedFrame, alignedData } = this.state;
    if (!config) {
      return null;
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.VizLayout, { width, height, legend: renderLegend(config), children: (vizWidth, vizHeight) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_7__.UPlotChart,
      {
        config,
        data: alignedData,
        width: vizWidth,
        height: vizHeight,
        plotRef: (u) => this.plotInstance.current = u,
        children: children ? children(config, alignedFrame) : null
      }
    ) });
  }
}


/***/ }),

/***/ "./public/app/core/components/GraphNG/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRefField: () => (/* binding */ getRefField),
/* harmony export */   preparePlotFrame: () => (/* binding */ preparePlotFrame)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/utils/numbers.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/joinDataFrames.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/nulls/nullInsertThreshold.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/nulls/nullToUndefThreshold.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");




function isVisibleBarField(f) {
  return f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.number && f.config.custom?.drawStyle === _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.GraphDrawStyle.Bars && !f.config.custom?.hideFrom?.viz;
}
function getRefField(frame, refFieldName) {
  return frame.fields.find((field) => {
    return refFieldName != null ? field.name === refFieldName : field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.time;
  });
}
function applySpanNullsThresholds(frame, refFieldName) {
  const refField = getRefField(frame, refFieldName);
  let refValues = refField?.values;
  for (let i = 0; i < frame.fields.length; i++) {
    let field = frame.fields[i];
    if (field === refField || isVisibleBarField(field)) {
      continue;
    }
    let spanNulls = field.config.custom?.spanNulls;
    if (typeof spanNulls === "number") {
      if (spanNulls !== -1 && refValues) {
        field.values = (0,_grafana_data_internal__WEBPACK_IMPORTED_MODULE_4__.nullToUndefThreshold)(refValues, field.values, spanNulls);
      }
    }
  }
  return frame;
}
function getXField(dimFields, frame, frames) {
  for (let field of frame.fields) {
    if (dimFields.x(field, frame, frames)) {
      return field;
    }
  }
  return;
}
function preparePlotFrame(frames, dimFields, timeRange) {
  frames = frames.map((frame) => {
    const xField = getXField(dimFields, frame, frames);
    if (xField != null && !xField.state?.nullThresholdApplied) {
      return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.applyNullInsertThreshold)({
        frame,
        refFieldName: xField.name,
        refFieldPseudoMin: timeRange?.from.valueOf(),
        refFieldPseudoMax: timeRange?.to.valueOf()
      });
    } else {
      return frame;
    }
  });
  let numBarSeries = frames.reduce(
    (acc, frame) => acc + frame.fields.reduce((acc2, field) => acc2 + (isVisibleBarField(field) ? 1 : 0), 0),
    0
  );
  let minXDeltaGlobal = null;
  if (numBarSeries > 1) {
    const minXDeltas = /* @__PURE__ */ new Set();
    frames.forEach((frame) => {
      if (!frame.fields.some(isVisibleBarField)) {
        return;
      }
      const xField = getXField(dimFields, frame, frames);
      if (xField == null) {
        return;
      }
      let minXDeltaFrame = Infinity;
      const xVals = xField.values;
      for (let i = 0; i < xVals.length; i++) {
        if (i > 0) {
          minXDeltaFrame = Math.min(minXDeltaFrame, xVals[i] - xVals[i - 1]);
        }
      }
      if (minXDeltaFrame !== Infinity) {
        if (!Number.isInteger(minXDeltaFrame)) {
          minXDeltaFrame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.roundDecimals)(minXDeltaFrame, 6);
        }
        minXDeltas.add(minXDeltaFrame);
      }
    });
    if (minXDeltas.size > 1) {
      minXDeltaGlobal = Math.min(...minXDeltas);
    }
  }
  let alignedFrame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.joinDataFrames)({
    frames,
    joinBy: dimFields.x,
    keep: dimFields.y,
    keepOriginIndices: true,
    // the join transformer force-deletes our state.displayName cache unless keepDisplayNames: true
    // https://github.com/grafana/grafana/pull/31121
    // https://github.com/grafana/grafana/pull/71806
    keepDisplayNames: true,
    // prevent minesweeper-expansion of nulls (gaps) when joining bars
    // since bar width is determined from the minimum distance between non-undefined values
    // (this strategy will still retain any original pre-join nulls, though)
    nullMode: (field) => {
      if (isVisibleBarField(field)) {
        return _grafana_data__WEBPACK_IMPORTED_MODULE_1__.NULL_RETAIN;
      }
      let spanNulls = field.config.custom?.spanNulls;
      return spanNulls === true ? _grafana_data__WEBPACK_IMPORTED_MODULE_1__.NULL_REMOVE : spanNulls === -1 ? _grafana_data__WEBPACK_IMPORTED_MODULE_1__.NULL_RETAIN : _grafana_data__WEBPACK_IMPORTED_MODULE_1__.NULL_EXPAND;
    }
  });
  if (alignedFrame) {
    alignedFrame = applySpanNullsThresholds(alignedFrame, alignedFrame.fields[0].name);
    if (minXDeltaGlobal != null) {
      alignedFrame.fields.forEach((f, fi) => {
        let vals = f.values;
        if (fi === 0) {
          let lastVal = vals[vals.length - 1];
          vals.push(lastVal + minXDeltaGlobal, lastVal + 2 * minXDeltaGlobal);
        } else if (isVisibleBarField(f)) {
          vals.push(null, null);
        } else {
          vals.push(void 0, void 0);
        }
      });
      alignedFrame.length += 2;
    }
    return alignedFrame;
  }
  return null;
}


/***/ }),

/***/ "./public/app/core/components/TimelineChart/TimelineChart.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimelineChart: () => (/* binding */ TimelineChart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/VizLayout/VizLayout.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/VizLegend/VizLegend.tsx");
/* harmony import */ var _GraphNG_GraphNG__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/GraphNG/GraphNG.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/components/TimelineChart/utils.ts");








const propsToDiff = ["rowHeight", "colWidth", "showValue", "mergeValues", "alignValue", "tooltip", "paginationRev"];
const TimelineChart = (props) => {
  const { frames, timeZone, rowHeight, tooltip, legend, legendItems } = props;
  const getValueColor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (frameIdx, fieldIdx, value) => {
      const field = frames[frameIdx]?.fields[fieldIdx];
      if (field?.display) {
        const disp = field.display(value);
        if (disp.color) {
          return disp.color;
        }
      }
      return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FALLBACK_COLOR;
    },
    [frames]
  );
  const prepConfig = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (alignedFrame, allFrames, getTimeRange) => {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_8__.preparePlotConfigBuilder)({
        frame: alignedFrame,
        getTimeRange,
        allFrames: frames,
        ...props,
        // Ensure timezones is passed as an array
        timeZones: Array.isArray(timeZone) ? timeZone : [timeZone],
        // When there is only one row, use the full space
        rowHeight: alignedFrame.fields.length > 2 ? rowHeight : 1,
        getValueColor,
        hoverMulti: tooltip?.mode === _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.TooltipDisplayMode.Multi
      });
    },
    [frames, props, timeZone, rowHeight, getValueColor, tooltip]
  );
  const renderLegend = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (config) => {
      if (!config || !legendItems || !legend || legend.showLegend === false) {
        return null;
      }
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.VizLayout.Legend, { placement: legend.placement, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.VizLegend, { placement: legend.placement, items: legendItems, displayMode: legend.displayMode, readonly: true }) });
    },
    [legend, legendItems]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _GraphNG_GraphNG__WEBPACK_IMPORTED_MODULE_7__.GraphNG,
    {
      ...props,
      fields: {
        x: (f) => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.time,
        y: (f) => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.number || f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.boolean || f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.string || f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.enum
      },
      prepConfig,
      propsToDiff,
      renderLegend,
      omitHideFromViz: true
    }
  );
};


/***/ }),

/***/ "./public/app/core/components/TimelineChart/timeline.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getConfig: () => (/* binding */ getConfig),
/* harmony export */   shouldDrawYValue: () => (/* binding */ shouldDrawYValue)
/* harmony export */ });
/* harmony import */ var uplot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/uplot/dist/uPlot.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/themes/colorManipulator.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/types.ts");
/* harmony import */ var app_plugins_panel_barchart_distribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/barchart/distribute.ts");
/* harmony import */ var app_plugins_panel_barchart_quadtree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/barchart/quadtree.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/TimelineChart/utils.ts");








const { round, min, ceil } = Math;
const textPadding = 2;
let pxPerChar = 6;
const laneDistr = app_plugins_panel_barchart_distribute__WEBPACK_IMPORTED_MODULE_4__.SPACE_BETWEEN;
function walk(rowHeight, yIdx, count, dim, draw) {
  (0,app_plugins_panel_barchart_distribute__WEBPACK_IMPORTED_MODULE_4__.distribute)(count, rowHeight, laneDistr, yIdx, (i, offPct, dimPct) => {
    let laneOffPx = dim * offPct;
    let laneWidPx = dim * dimPct;
    draw(i, laneOffPx, laneWidPx);
  });
}
function shouldDrawYValue(yValue, mappedNull, mappedNaN) {
  if (typeof yValue === "boolean") {
    return true;
  }
  if (typeof yValue === "string") {
    return true;
  }
  if (typeof yValue === "number" && !Number.isNaN(yValue)) {
    return true;
  }
  if (yValue === null && mappedNull) {
    return true;
  }
  if (Number.isNaN(yValue) && mappedNaN) {
    return true;
  }
  return !!yValue;
}
function getConfig(opts) {
  const {
    mode,
    numSeries,
    isDiscrete,
    hasMappedNull,
    hasMappedNaN,
    rowHeight = 0,
    colWidth = 0,
    showValue,
    mergeValues = false,
    theme,
    label,
    formatValue,
    alignValue = "left",
    getTimeRange,
    getValueColor,
    getFieldConfig,
    hoverMulti
  } = opts;
  let qt;
  let boxRectsBySeries;
  const resetBoxRectsBySeries = (count) => {
    boxRectsBySeries = Array(numSeries).fill(null).map((v) => Array(count).fill(null));
  };
  const font = `500 ${Math.round(12 * devicePixelRatio)}px ${theme.typography.fontFamily}`;
  const hovered = Array(numSeries).fill(null);
  let hoveredAtCursor = null;
  const size = [colWidth, Infinity];
  const gapFactor = 1 - size[0];
  const maxWidth = (size[1] ?? Infinity) * uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio;
  const fillPaths = /* @__PURE__ */ new Map();
  const strokePaths = /* @__PURE__ */ new Map();
  function drawBoxes(ctx) {
    fillPaths.forEach((fillPath, fillStyle) => {
      ctx.fillStyle = fillStyle;
      ctx.fill(fillPath);
    });
    strokePaths.forEach((strokePath, strokeStyle) => {
      ctx.strokeStyle = strokeStyle;
      ctx.stroke(strokePath);
    });
    fillPaths.clear();
    strokePaths.clear();
  }
  function putBox(ctx, rect, xOff, yOff, left, top, boxWidth, boxHeight, strokeWidth, seriesIdx, valueIdx, value, discrete) {
    boxWidth = Math.max(1, boxWidth);
    const valueColor = getValueColor(seriesIdx + 1, value);
    const fieldConfig = getFieldConfig(seriesIdx);
    const fillColor = getFillColor(fieldConfig, valueColor);
    boxRectsBySeries[seriesIdx][valueIdx] = {
      x: round(left - xOff),
      y: round(top - yOff),
      w: boxWidth,
      h: boxHeight,
      sidx: seriesIdx + 1,
      didx: valueIdx,
      // for computing label contrast
      fillColor
    };
    if (discrete) {
      let fillStyle = fillColor;
      let fillPath = fillPaths.get(fillStyle);
      if (fillPath == null) {
        fillPaths.set(fillStyle, fillPath = new Path2D());
      }
      rect(fillPath, left, top, boxWidth, boxHeight);
      if (strokeWidth) {
        let strokeStyle = valueColor;
        let strokePath = strokePaths.get(strokeStyle);
        if (strokePath == null) {
          strokePaths.set(strokeStyle, strokePath = new Path2D());
        }
        rect(
          strokePath,
          left + strokeWidth / 2,
          top + strokeWidth / 2,
          boxWidth - strokeWidth,
          boxHeight - strokeWidth
        );
      }
    } else {
      ctx.beginPath();
      rect(ctx, left, top, boxWidth, boxHeight);
      ctx.fillStyle = fillColor;
      ctx.fill();
      if (strokeWidth) {
        ctx.beginPath();
        rect(ctx, left + strokeWidth / 2, top + strokeWidth / 2, boxWidth - strokeWidth, boxHeight - strokeWidth);
        ctx.strokeStyle = valueColor;
        ctx.lineWidth = strokeWidth;
        ctx.stroke();
      }
    }
  }
  const drawPaths = (u, sidx, idx0, idx1) => {
    uplot__WEBPACK_IMPORTED_MODULE_0__["default"].orient(
      u,
      sidx,
      (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim, moveTo, lineTo, rect) => {
        let strokeWidth = round((series.width || 0) * uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio);
        const discrete = isDiscrete(sidx);
        const mappedNull = discrete && hasMappedNull(sidx);
        const mappedNaN = discrete && hasMappedNaN(sidx);
        u.ctx.save();
        rect(u.ctx, u.bbox.left, u.bbox.top, u.bbox.width, u.bbox.height);
        u.ctx.clip();
        walk(rowHeight, sidx - 1, numSeries, yDim, (iy, y0, height) => {
          if (mode === _utils__WEBPACK_IMPORTED_MODULE_6__.TimelineMode.Changes) {
            for (let ix = 0; ix < dataY.length; ix++) {
              let yVal = dataY[ix];
              const shouldDrawY = shouldDrawYValue(yVal, mappedNull, mappedNaN);
              if (shouldDrawY) {
                let left = Math.round(valToPosX(dataX[ix], scaleX, xDim, xOff));
                let nextIx = ix;
                while (++nextIx < dataY.length && (dataY[nextIx] === void 0 || mergeValues && dataY[nextIx] === yVal)) {
                }
                let right = nextIx === dataY.length ? xOff + xDim + strokeWidth : Math.round(valToPosX(dataX[nextIx], scaleX, xDim, xOff));
                putBox(
                  u.ctx,
                  rect,
                  xOff,
                  yOff,
                  left,
                  round(yOff + y0),
                  right - left,
                  round(height),
                  strokeWidth,
                  iy,
                  ix,
                  yVal,
                  discrete
                );
                ix = nextIx - 1;
              }
            }
          } else if (mode === _utils__WEBPACK_IMPORTED_MODULE_6__.TimelineMode.Samples) {
            let colWid = valToPosX(dataX[1], scaleX, xDim, xOff) - valToPosX(dataX[0], scaleX, xDim, xOff);
            let gapWid = colWid * gapFactor;
            let barWid = round(min(maxWidth, colWid - gapWid) - strokeWidth);
            let xShift = barWid / 2;
            for (let ix = idx0; ix <= idx1; ix++) {
              let yVal = dataY[ix];
              const shouldDrawY = shouldDrawYValue(yVal, mappedNull, mappedNaN);
              if (shouldDrawY) {
                let left = valToPosX(dataX[ix], scaleX, xDim, xOff);
                putBox(
                  u.ctx,
                  rect,
                  xOff,
                  yOff,
                  round(left - xShift),
                  round(yOff + y0),
                  barWid,
                  round(height),
                  strokeWidth,
                  iy,
                  ix,
                  yVal,
                  discrete
                );
              }
            }
          }
        });
        if (discrete) {
          u.ctx.lineWidth = strokeWidth;
          drawBoxes(u.ctx);
        }
        u.ctx.restore();
      }
    );
    return null;
  };
  const drawPoints = formatValue == null || showValue === _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.VisibilityMode.Never ? false : (u, sidx, i0, i1) => {
    u.ctx.save();
    u.ctx.rect(u.bbox.left, u.bbox.top, u.bbox.width, u.bbox.height);
    u.ctx.clip();
    u.ctx.font = font;
    u.ctx.textAlign = mode === _utils__WEBPACK_IMPORTED_MODULE_6__.TimelineMode.Changes ? alignValue : "center";
    u.ctx.textBaseline = "middle";
    uplot__WEBPACK_IMPORTED_MODULE_0__["default"].orient(
      u,
      sidx,
      (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim) => {
        let strokeWidth = round((series.width || 0) * uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio);
        let y = round(valToPosY(ySplits[sidx - 1], scaleY, yDim, yOff));
        const discrete = isDiscrete(sidx);
        const mappedNull = discrete && hasMappedNull(sidx);
        const mappedNaN = discrete && hasMappedNaN(sidx);
        for (let ix = 0; ix < dataY.length; ix++) {
          const yVal = dataY[ix];
          const shouldDrawY = shouldDrawYValue(yVal, mappedNull, mappedNaN);
          if (shouldDrawY) {
            const boxRect = boxRectsBySeries[sidx - 1][ix];
            if (!boxRect || boxRect.x >= xDim) {
              continue;
            }
            const displayedBoxWidth = boxRect.x < 0 ? boxRect?.w + boxRect.x : boxRect?.w;
            let maxChars = Math.floor(displayedBoxWidth / pxPerChar);
            if (showValue === _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.VisibilityMode.Auto && maxChars < 2) {
              continue;
            }
            let txt = formatValue(sidx, dataY[ix]);
            let x = round(boxRect.x + xOff + boxRect.w / 2);
            if (mode === _utils__WEBPACK_IMPORTED_MODULE_6__.TimelineMode.Changes) {
              if (alignValue === "left") {
                x = round(Math.max(boxRect.x, 0) + xOff + strokeWidth + textPadding);
              } else if (alignValue === "right") {
                x = round(boxRect.x + xOff + boxRect.w - strokeWidth - textPadding);
              }
            }
            u.ctx.fillStyle = theme.colors.getContrastText(boxRect.fillColor, 3);
            u.ctx.fillText(txt.slice(0, maxChars), x, y);
          }
        }
      }
    );
    u.ctx.restore();
    return false;
  };
  const init = (u) => {
    let chars = "";
    for (let i = 32; i <= 126; i++) {
      chars += String.fromCharCode(i);
    }
    pxPerChar = Math.ceil(u.ctx.measureText(chars).width / chars.length * uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio);
    pxPerChar += 2.5;
    u.root.querySelectorAll(".u-cursor-pt").forEach((el) => {
      el.style.borderRadius = "0";
    });
  };
  const drawClear = (u) => {
    qt = qt || new app_plugins_panel_barchart_quadtree__WEBPACK_IMPORTED_MODULE_5__.Quadtree(0, 0, u.bbox.width, u.bbox.height);
    qt.clear();
    resetBoxRectsBySeries(u.data[0].length);
    u.series.forEach((s) => {
      s._paths = null;
    });
  };
  function setHovered(cx, cy, viaSync = false) {
    hovered.fill(null);
    hoveredAtCursor = null;
    if (cx < 0) {
      return;
    }
    qt.get(cx, 0, uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio, 1e4, (o) => {
      if (cx >= o.x && cx <= o.x + o.w) {
        if (cy >= o.y && cy <= o.y + o.h) {
          hovered[o.sidx] = hoveredAtCursor = o;
        } else if (hoverMulti || viaSync) {
          hovered[o.sidx] = o;
        }
      }
    });
  }
  const cursor = {
    x: mode === _utils__WEBPACK_IMPORTED_MODULE_6__.TimelineMode.Changes,
    y: false,
    dataIdx: (u, seriesIdx) => {
      if (seriesIdx === 1) {
        if (qt.o.length === 0 && qt.q == null) {
          for (const seriesRects of boxRectsBySeries) {
            for (const rect of seriesRects) {
              rect && qt.add(rect);
            }
          }
        }
        let cx = u.cursor.left * uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio;
        let cy = u.cursor.top * uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio;
        setHovered(cx, cy, u.cursor.event == null);
      }
      return hovered[seriesIdx]?.didx;
    },
    focus: {
      prox: 1e3,
      dist: (u, seriesIdx) => hoveredAtCursor?.sidx === seriesIdx ? 0 : Infinity
    },
    points: {
      fill: "rgba(255,255,255,0.2)",
      bbox: (u, seriesIdx) => {
        let hRect = hovered[seriesIdx];
        let isHovered = hRect != null;
        return {
          left: isHovered ? hRect.x / uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio : -10,
          top: isHovered ? hRect.y / uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio : -10,
          width: isHovered ? hRect.w / uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio : 0,
          height: isHovered ? hRect.h / uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio : 0
        };
      }
    }
  };
  const ySplits = Array(numSeries).fill(0);
  const yRange = [0, 1];
  return {
    cursor,
    xSplits: mode === _utils__WEBPACK_IMPORTED_MODULE_6__.TimelineMode.Samples ? (u, axisIdx, scaleMin, scaleMax, foundIncr, foundSpace) => {
      let splits = [];
      let dataIncr = u.data[0][1] - u.data[0][0];
      let skipFactor = ceil(foundIncr / dataIncr);
      for (let i = 0; i < u.data[0].length; i += skipFactor) {
        let v = u.data[0][i];
        if (v >= scaleMin && v <= scaleMax) {
          splits.push(v);
        }
      }
      return splits;
    } : null,
    xRange: (u) => {
      const r = getTimeRange();
      let min2 = r.from.valueOf();
      let max = r.to.valueOf();
      if (mode === _utils__WEBPACK_IMPORTED_MODULE_6__.TimelineMode.Samples) {
        let colWid = u.data[0][1] - u.data[0][0];
        let scalePad = colWid / 2;
        if (min2 <= u.data[0][0]) {
          min2 = u.data[0][0] - scalePad;
        }
        let lastIdx = u.data[0].length - 1;
        if (max >= u.data[0][lastIdx]) {
          max = u.data[0][lastIdx] + scalePad;
        }
      }
      const result = [min2, max];
      return result;
    },
    ySplits: (u) => {
      walk(rowHeight, null, numSeries, u.bbox.height, (iy, y0, hgt) => {
        let yMid = round(y0 + hgt / 2);
        ySplits[iy] = u.posToVal(yMid / uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio, _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FIXED_UNIT);
      });
      return ySplits;
    },
    yValues: (u, splits) => splits.map((v, i) => label(i + 1)),
    yRange,
    // pathbuilders
    drawPaths,
    drawPoints,
    // hooks
    init,
    drawClear
  };
}
function getFillColor(fieldConfig, color) {
  if (color[0] === "#" && color.length === 9) {
    return color;
  }
  const opacityPercent = (fieldConfig.fillOpacity ?? 100) / 100;
  return _grafana_data__WEBPACK_IMPORTED_MODULE_1__.colorManipulator.alpha(color, opacityPercent);
}


/***/ }),

/***/ "./public/app/core/components/TimelineChart/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimelineMode: () => (/* binding */ TimelineMode),
/* harmony export */   findNextStateIndex: () => (/* binding */ findNextStateIndex),
/* harmony export */   fmtDuration: () => (/* binding */ fmtDuration),
/* harmony export */   getFieldLegendItem: () => (/* binding */ getFieldLegendItem),
/* harmony export */   getThresholdItems: () => (/* binding */ getThresholdItems),
/* harmony export */   getValueMappingItems: () => (/* binding */ getValueMappingItems),
/* harmony export */   hasSpecialMappedValue: () => (/* binding */ hasSpecialMappedValue),
/* harmony export */   makeFramePerSeries: () => (/* binding */ makeFramePerSeries),
/* harmony export */   mergeThresholdValues: () => (/* binding */ mergeThresholdValues),
/* harmony export */   preparePlotConfigBuilder: () => (/* binding */ preparePlotConfigBuilder),
/* harmony export */   prepareTimelineFields: () => (/* binding */ prepareTimelineFields),
/* harmony export */   prepareTimelineLegendItems: () => (/* binding */ prepareTimelineLegendItems)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/field/thresholds.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/field/scale.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/joinDataFrames.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/nulls/nullInsertThreshold.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/nulls/nullToValue.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/types/thresholds.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-data/src/types/valueMapping.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-schema/src/raw/dashboard/x/dashboard_types.gen.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/config/UPlotConfigBuilder.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/types.ts");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/utils.ts");
/* harmony import */ var _timeline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/core/components/TimelineChart/timeline.ts");








var TimelineMode = /* @__PURE__ */ ((TimelineMode2) => {
  TimelineMode2["Changes"] = "changes";
  TimelineMode2["Samples"] = "samples";
  return TimelineMode2;
})(TimelineMode || {});
const defaultConfig = {
  lineWidth: 0,
  fillOpacity: 80
};
const hasSpecialMappedValue = (field, match) => field.config.mappings?.some(
  (mapping) => mapping.type === _grafana_schema__WEBPACK_IMPORTED_MODULE_12__.MappingType.SpecialValue && mapping.options.match === match
) || false;
const preparePlotConfigBuilder = ({
  frame,
  theme,
  timeZones,
  getTimeRange,
  mode,
  rowHeight,
  colWidth,
  showValue,
  alignValue,
  mergeValues,
  getValueColor,
  hoverMulti
}) => {
  const builder = new _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.UPlotConfigBuilder(timeZones[0]);
  const xScaleKey = "x";
  const isDiscrete = (field) => {
    const mode2 = field.config?.color?.mode;
    return !(mode2 && field.display && mode2.startsWith("continuous-"));
  };
  const getValueColorFn = (seriesIdx, value) => {
    const field = frame.fields[seriesIdx];
    if (field.state?.origin?.fieldIndex !== void 0 && field.state?.origin?.frameIndex !== void 0 && getValueColor) {
      return getValueColor(field.state?.origin?.frameIndex, field.state?.origin?.fieldIndex, value);
    }
    return _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FALLBACK_COLOR;
  };
  const opts = {
    mode,
    numSeries: frame.fields.length - 1,
    isDiscrete: (seriesIdx) => isDiscrete(frame.fields[seriesIdx]),
    hasMappedNull: (seriesIdx) => hasSpecialMappedValue(frame.fields[seriesIdx], _grafana_data__WEBPACK_IMPORTED_MODULE_9__.SpecialValueMatch.Null) || hasSpecialMappedValue(frame.fields[seriesIdx], _grafana_data__WEBPACK_IMPORTED_MODULE_9__.SpecialValueMatch.NullAndNaN),
    hasMappedNaN: (seriesIdx) => hasSpecialMappedValue(frame.fields[seriesIdx], _grafana_data__WEBPACK_IMPORTED_MODULE_9__.SpecialValueMatch.NaN) || hasSpecialMappedValue(frame.fields[seriesIdx], _grafana_data__WEBPACK_IMPORTED_MODULE_9__.SpecialValueMatch.NullAndNaN),
    mergeValues,
    rowHeight,
    colWidth,
    showValue,
    alignValue,
    theme,
    label: (seriesIdx) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getFieldDisplayName)(frame.fields[seriesIdx], frame),
    getFieldConfig: (seriesIdx) => frame.fields[seriesIdx].config.custom,
    getValueColor: getValueColorFn,
    getTimeRange,
    // hardcoded formatter for state values
    formatValue: (seriesIdx, value) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.formattedValueToString)(frame.fields[seriesIdx].display(value)),
    hoverMulti
  };
  const coreConfig = (0,_timeline__WEBPACK_IMPORTED_MODULE_17__.getConfig)(opts);
  builder.addHook("init", coreConfig.init);
  builder.addHook("drawClear", coreConfig.drawClear);
  builder.setPrepData((frames) => (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_16__.preparePlotData2)(frames[0], (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_16__.getStackingGroups)(frames[0])));
  builder.setCursor(coreConfig.cursor);
  builder.addScale({
    scaleKey: xScaleKey,
    isTime: true,
    orientation: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.ScaleOrientation.Horizontal,
    direction: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.ScaleDirection.Right,
    range: coreConfig.xRange
  });
  builder.addScale({
    scaleKey: _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.FIXED_UNIT,
    // y
    isTime: false,
    orientation: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.ScaleOrientation.Vertical,
    direction: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.ScaleDirection.Up,
    range: coreConfig.yRange
  });
  const xField = frame.fields[0];
  const xAxisHidden = xField.config.custom.axisPlacement === _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.AxisPlacement.Hidden;
  builder.addAxis({
    show: !xAxisHidden,
    scaleKey: xScaleKey,
    isTime: true,
    splits: coreConfig.xSplits,
    placement: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.AxisPlacement.Bottom,
    timeZone: timeZones[0],
    theme,
    formatValue: xField.config.unit?.startsWith("time:") ? (v, decimals) => xField.display(v, decimals).text : void 0
  });
  const yCustomConfig = frame.fields[1].config.custom;
  const yAxisWidth = yCustomConfig.axisWidth;
  const yAxisHidden = yCustomConfig.axisPlacement === _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.AxisPlacement.Hidden;
  builder.addAxis({
    scaleKey: _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.FIXED_UNIT,
    // y
    isTime: false,
    placement: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.AxisPlacement.Left,
    splits: coreConfig.ySplits,
    values: yAxisHidden ? (u, splits) => splits.map((v) => null) : coreConfig.yValues,
    grid: { show: false },
    ticks: { show: false },
    gap: yAxisHidden ? 0 : 16,
    size: yAxisHidden ? 0 : yAxisWidth,
    theme
  });
  let seriesIndex = 0;
  for (let i = 0; i < frame.fields.length; i++) {
    if (i === 0) {
      continue;
    }
    const field = frame.fields[i];
    const config = field.config;
    const customConfig = {
      ...defaultConfig,
      ...config.custom
    };
    field.state.seriesIndex = seriesIndex++;
    builder.addSeries({
      scaleKey: _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.FIXED_UNIT,
      pathBuilder: coreConfig.drawPaths,
      pointsBuilder: coreConfig.drawPoints,
      //colorMode,
      lineWidth: customConfig.lineWidth,
      fillOpacity: customConfig.fillOpacity,
      theme,
      show: !customConfig.hideFrom?.viz,
      thresholds: config.thresholds,
      // The following properties are not used in the uPlot config, but are utilized as transport for legend config
      dataFrameFieldIndex: field.state?.origin
    });
  }
  return builder;
};
function getSpanNulls(field) {
  let spanNulls = field.config.custom?.spanNulls;
  return !spanNulls ? -1 : spanNulls === true ? Infinity : spanNulls;
}
function mergeThresholdValues(field, theme) {
  const thresholds = field.config.thresholds;
  if (field.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_10__.FieldType.number || !thresholds || !thresholds.steps.length) {
    return void 0;
  }
  const items = getThresholdItems(field.config, theme);
  if (items.length !== thresholds.steps.length) {
    return void 0;
  }
  const thresholdToText = /* @__PURE__ */ new Map();
  const textToColor = /* @__PURE__ */ new Map();
  for (let i = 0; i < items.length; i++) {
    thresholdToText.set(thresholds.steps[i], items[i].label);
    textToColor.set(items[i].label, items[i].color);
  }
  let input = field.values;
  const vals = new Array(field.values.length);
  if (thresholds.mode === _grafana_data__WEBPACK_IMPORTED_MODULE_8__.ThresholdsMode.Percentage) {
    const { min, max } = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getFieldConfigWithMinMax)(field);
    const delta = max - min;
    input = input.map((v) => {
      if (v == null) {
        return v;
      }
      return (v - min) / delta * 100;
    });
  }
  for (let i = 0; i < vals.length; i++) {
    const v = input[i];
    if (v == null) {
      vals[i] = v;
    } else {
      vals[i] = thresholdToText.get((0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getActiveThreshold)(v, thresholds.steps));
    }
  }
  return {
    ...field,
    config: {
      ...field.config,
      custom: {
        ...field.config.custom,
        spanNulls: getSpanNulls(field)
      }
    },
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_10__.FieldType.string,
    values: vals,
    display: (value) => ({
      text: String(value),
      color: textToColor.get(String(value)),
      numeric: NaN
    })
  };
}
function prepareTimelineFields(series, mergeValues, timeRange, theme) {
  if (!series?.length) {
    return { warn: "" };
  }
  (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.cacheFieldDisplayNames)(series);
  let hasTimeseries = false;
  const frames = [];
  for (let frame of series) {
    let startFieldIdx = -1;
    let endFieldIdx = -1;
    for (let i = 0; i < frame.fields.length; i++) {
      let f = frame.fields[i];
      if (f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_10__.FieldType.time && typeof f.values[0] === "number") {
        if (startFieldIdx === -1) {
          startFieldIdx = i;
        } else if (endFieldIdx === -1) {
          endFieldIdx = i;
          break;
        }
      }
    }
    let isTimeseries = startFieldIdx !== -1;
    let changed = false;
    frame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.maybeSortFrame)(frame, startFieldIdx);
    if (endFieldIdx !== -1) {
      let startFrame = {
        ...frame,
        fields: frame.fields.filter((f, i) => i !== endFieldIdx)
      };
      let endFrame = {
        length: frame.length,
        fields: [frame.fields[endFieldIdx]]
      };
      frame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.joinDataFrames)({
        frames: [startFrame, endFrame],
        keepDisplayNames: true,
        nullMode: () => _grafana_data__WEBPACK_IMPORTED_MODULE_3__.NULL_RETAIN
      });
      frame.fields.forEach((f, i) => {
        if (i > 0) {
          let vals = f.values;
          for (let i2 = 0; i2 < vals.length; i2++) {
            if (vals[i2] == null) {
              vals[i2] = null;
            }
          }
        }
      });
      changed = true;
    }
    let nulledFrame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.applyNullInsertThreshold)({
      frame,
      refFieldPseudoMin: timeRange.from.valueOf(),
      refFieldPseudoMax: timeRange.to.valueOf()
    });
    if (nulledFrame !== frame) {
      changed = true;
    }
    frame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.nullToValue)(nulledFrame);
    const fields = [];
    for (let field of frame.fields) {
      switch (field.type) {
        case _grafana_data__WEBPACK_IMPORTED_MODULE_10__.FieldType.time:
          if (typeof field.values[0] === "number") {
            isTimeseries = true;
            hasTimeseries = true;
            fields.push(field);
          }
          break;
        case _grafana_data__WEBPACK_IMPORTED_MODULE_10__.FieldType.enum:
        case _grafana_data__WEBPACK_IMPORTED_MODULE_10__.FieldType.number:
          if (mergeValues && field.config.color?.mode === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldColorModeId.Thresholds) {
            const f = mergeThresholdValues(field, theme);
            if (f) {
              fields.push(f);
              changed = true;
              continue;
            }
          }
        case _grafana_data__WEBPACK_IMPORTED_MODULE_10__.FieldType.boolean:
        case _grafana_data__WEBPACK_IMPORTED_MODULE_10__.FieldType.string:
          field = {
            ...field,
            config: {
              ...field.config,
              custom: {
                ...field.config.custom,
                spanNulls: getSpanNulls(field)
              }
            }
          };
          changed = true;
          fields.push(field);
          break;
        default:
          changed = true;
      }
    }
    if (isTimeseries && fields.length > 1) {
      hasTimeseries = true;
      if (changed) {
        frames.push({
          ...frame,
          fields
        });
      } else {
        frames.push(frame);
      }
    }
  }
  if (!hasTimeseries) {
    return { warn: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_11__.t)("timeline.missing-field.time", "Data does not have a time field") };
  }
  if (!frames.length) {
    return { warn: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_11__.t)("timeline.missing-field.all", "No graphable fields") };
  }
  return { frames };
}
function makeFramePerSeries(frames) {
  const outFrames = [];
  for (let frame of frames) {
    const timeFields = frame.fields.filter((field) => field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_10__.FieldType.time);
    if (timeFields.length > 0) {
      for (let field of frame.fields) {
        if (field.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_10__.FieldType.time) {
          outFrames.push({ fields: [...timeFields, field], length: frame.length });
        }
      }
    }
  }
  return outFrames;
}
function getThresholdItems(fieldConfig, theme, thresholdItems) {
  const items = [];
  const thresholds = thresholdItems ? thresholdItems : fieldConfig.thresholds;
  if (!thresholds || !thresholds.steps.length) {
    return items;
  }
  const steps = thresholds.steps;
  const getDisplay = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.getValueFormat)(
    thresholds.mode === _grafana_data__WEBPACK_IMPORTED_MODULE_8__.ThresholdsMode.Percentage ? "percent" : fieldConfig.unit ?? ""
  );
  const format = (value) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.formattedValueToString)(getDisplay(value, fieldConfig.decimals ?? void 0));
  for (let i = 0; i < steps.length; i++) {
    let step = steps[i];
    let value = step.value;
    let pre = "";
    let suf = "";
    if (value === -Infinity && i < steps.length - 1) {
      value = steps[i + 1].value;
      pre = "< ";
    } else {
      suf = "+";
    }
    items.push({
      label: `${pre}${format(value)}${suf}`,
      color: theme.visualization.getColorByName(step.color),
      yAxis: 1
    });
  }
  return items;
}
function getValueMappingItems(mappings, theme) {
  const items = [];
  if (!mappings) {
    return items;
  }
  for (let mapping of mappings) {
    const { options, type } = mapping;
    if (type === _grafana_schema__WEBPACK_IMPORTED_MODULE_12__.MappingType.ValueToText) {
      for (let [label, value] of Object.entries(options)) {
        const color = value.color;
        items.push({
          label,
          color: theme.visualization.getColorByName(color ?? _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FALLBACK_COLOR),
          yAxis: 1
        });
      }
    }
    if (type === _grafana_schema__WEBPACK_IMPORTED_MODULE_12__.MappingType.RangeToText) {
      const { from, result, to } = options;
      const { text, color } = result;
      const label = text ? `[${from} - ${to}] ${text}` : `[${from} - ${to}]`;
      items.push({
        label,
        color: theme.visualization.getColorByName(color ?? _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FALLBACK_COLOR),
        yAxis: 1
      });
    }
    if (type === _grafana_schema__WEBPACK_IMPORTED_MODULE_12__.MappingType.RegexToText) {
      const { pattern, result } = options;
      const { text, color } = result;
      const label = `${text || pattern}`;
      items.push({
        label,
        color: theme.visualization.getColorByName(color ?? _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FALLBACK_COLOR),
        yAxis: 1
      });
    }
    if (type === _grafana_schema__WEBPACK_IMPORTED_MODULE_12__.MappingType.SpecialValue) {
      const { match, result } = options;
      const { text, color } = result;
      const label = `${text || match}`;
      items.push({
        label,
        color: theme.visualization.getColorByName(color ?? _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FALLBACK_COLOR),
        yAxis: 1
      });
    }
  }
  return items;
}
function prepareTimelineLegendItems(frames, options, theme) {
  if (!frames || options.showLegend === false) {
    return void 0;
  }
  return getFieldLegendItem(allNonTimeFields(frames), theme);
}
function getFieldLegendItem(fields, theme) {
  if (!fields.length) {
    return void 0;
  }
  const items = [];
  const fieldConfig = fields[0].config;
  const colorMode = fieldConfig.color?.mode ?? _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldColorModeId.Fixed;
  const thresholds = fieldConfig.thresholds;
  if (colorMode === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldColorModeId.Thresholds && thresholds?.steps && thresholds.steps.length > 1) {
    return getThresholdItems(fieldConfig, theme);
  }
  if (colorMode.startsWith("continuous")) {
    return void 0;
  }
  const stateColors = /* @__PURE__ */ new Map();
  fields.forEach((field) => {
    if (!field.config.custom?.hideFrom?.legend) {
      field.values.forEach((v) => {
        let state = field.display(v);
        if (state.color) {
          stateColors.set(state.text, state.color);
        }
      });
    }
  });
  stateColors.forEach((color, label) => {
    if (label.length > 0) {
      items.push({
        label,
        color: theme.visualization.getColorByName(color ?? _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FALLBACK_COLOR),
        yAxis: 1
      });
    }
  });
  return items;
}
function allNonTimeFields(frames) {
  const fields = [];
  for (const frame of frames) {
    for (const field of frame.fields) {
      if (field.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_10__.FieldType.time) {
        fields.push(field);
      }
    }
  }
  return fields;
}
function findNextStateIndex(field, datapointIdx) {
  let end;
  let rightPointer = datapointIdx + 1;
  if (rightPointer >= field.values.length) {
    return null;
  }
  const startValue = field.values[datapointIdx];
  while (end === void 0) {
    if (rightPointer >= field.values.length) {
      return null;
    }
    const rightValue = field.values[rightPointer];
    if (rightValue === void 0 || rightValue === startValue) {
      rightPointer++;
    } else {
      end = rightPointer;
    }
  }
  return end;
}
function fmtDuration(milliSeconds) {
  if (milliSeconds < 0 || Number.isNaN(milliSeconds)) {
    return "";
  }
  let yr, mo, wk, d, h, m, s, ms;
  s = Math.floor(milliSeconds / 1e3);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  yr = Math.floor(d / 365);
  if (yr > 0) {
    d = d % 365;
  }
  mo = Math.floor(d / 30);
  if (mo > 0) {
    d = d % 30;
  }
  wk = Math.floor(d / 7);
  if (wk > 0) {
    d = d % 7;
  }
  ms = Math.round(milliSeconds % 1e3 * 1e3) / 1e3;
  return (yr > 0 ? yr + "y " + (mo > 0 ? mo + "mo " : "") + (wk > 0 ? wk + "w " : "") + (d > 0 ? d + "d " : "") : mo > 0 ? mo + "mo " + (wk > 0 ? wk + "w " : "") + (d > 0 ? d + "d " : "") : wk > 0 ? wk + "w " + (d > 0 ? d + "d " : "") : d > 0 ? d + "d " + (h > 0 ? h + "h " : "") : h > 0 ? h + "h " + (m > 0 ? m + "m " : "") : m > 0 ? m + "m " + (s > 0 ? s + "s " : "") : s > 0 ? s + "s " + (ms > 0 ? ms + "ms " : "") : ms > 0 ? ms + "ms " : "0").trim();
}


/***/ }),

/***/ "./public/app/features/alerting/unified/api/stateHistoryApi.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stateHistoryApi: () => (/* binding */ stateHistoryApi)
/* harmony export */ });
/* harmony import */ var _alertingApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/api/alertingApi.ts");


const stateHistoryApi = _alertingApi__WEBPACK_IMPORTED_MODULE_0__.alertingApi.injectEndpoints({
  endpoints: (build) => ({
    getRuleHistory: build.query({
      query: ({ ruleUid, from, to, limit = 100, labels, previous, current }) => {
        const params = {
          ruleUID: ruleUid,
          from,
          to,
          limit,
          previous,
          current
        };
        if (labels) {
          Object.entries(labels).forEach(([key, value]) => {
            params[`labels_${key}`] = value;
          });
        }
        return {
          url: "/api/v1/rules/history",
          params
        };
      }
    })
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/state-history/ErrorMessageRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorMessageRow: () => (/* binding */ ErrorMessageRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");




function ErrorMessageRow({ message }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { "data-testid": "state-history-error", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Box,
    {
      display: "block",
      backgroundColor: "secondary",
      borderStyle: "solid",
      borderColor: "weak",
      borderRadius: "default",
      paddingY: 1,
      paddingX: 2,
      marginTop: 0.5,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "row", alignItems: "center", gap: 2, wrap: false, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Box, { shrink: 0, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Text, { variant: "bodySmall", weight: "medium", element: "span", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.state-history.error-message-prefix", "Error message:") }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Box, { grow: 1, shrink: 1, minWidth: 0, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Text, { variant: "bodySmall", truncate: true, element: "p", children: message }) })
      ] })
    }
  ) });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/state-history/LogRecordViewer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogRecordViewerByInstance: () => (/* binding */ LogRecordViewerByInstance),
/* harmony export */   LogRecordViewerByTimestamp: () => (/* binding */ LogRecordViewerByTimestamp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/date-fns/formatDistanceToNowStrict.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-alerting/src/grafana/rules/components/labels/AlertLabel.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/datetime/formatter.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Tags/TagList.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _AlertStateTag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx");
/* harmony import */ var _ErrorMessageRow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/ErrorMessageRow.tsx");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/common.ts");














function groupRecordsByTimestamp(records) {
  const groupedLines = records.reduce((acc, current) => {
    const tsGroup = acc.get(current.timestamp);
    if (tsGroup) {
      tsGroup.push(current);
    } else {
      acc.set(current.timestamp, [current]);
    }
    return acc;
  }, /* @__PURE__ */ new Map());
  return new Map([...groupedLines].sort((a, b) => b[0] - a[0]));
}
const LogRecordViewerByTimestamp = (0,react__WEBPACK_IMPORTED_MODULE_4__.memo)(
  ({
    records,
    commonLabels,
    onLabelClick,
    onRecordsRendered
  }) => {
    const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
    const groupedLines = groupRecordsByTimestamp(records);
    const timestampRefs = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(/* @__PURE__ */ new Map());
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
      onRecordsRendered && onRecordsRendered(timestampRefs.current);
    }, [onRecordsRendered, records]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "ul",
      {
        className: styles.logsScrollable,
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)(
          "alerting.log-record-viewer-by-timestamp.aria-label-state-history-by-timestamp",
          "State history by timestamp"
        ),
        children: Array.from(groupedLines.entries()).map(([key, records2]) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "li",
            {
              id: key.toString(10),
              "data-testid": key,
              ref: (element) => {
                if (element) {
                  timestampRefs.current.set(key, element);
                } else {
                  timestampRefs.current.delete(key);
                }
              },
              className: styles.listItemWrapper,
              children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Timestamp, { time: key }),
                records2.map(({ line }, idx) => {
                  const id = line.fingerprint ?? `${key}-${idx}`;
                  const isErrorRow = (0,app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_12__.mapStateWithReasonToBaseState)(line.current) === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_12__.GrafanaAlertState.Error && Boolean(line.error);
                  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, { children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.logsContainer, children: [
                      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertStateTag__WEBPACK_IMPORTED_MODULE_13__.AlertStateTag, { state: line.previous, size: "sm", muted: true }),
                      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { name: "arrow-right", size: "sm" }),
                      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertStateTag__WEBPACK_IMPORTED_MODULE_13__.AlertStateTag, { state: line.current }),
                      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { children: line.values && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertInstanceValues, { record: line.values }) }),
                      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: line.labels && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.TagList,
                        {
                          tags: (0,_common__WEBPACK_IMPORTED_MODULE_15__.omitLabels)(Object.entries(line.labels), commonLabels).map(
                            ([key2, value]) => `${key2}=${value}`
                          ),
                          onClick: onLabelClick
                        }
                      ) })
                    ] }),
                    isErrorRow && line.error && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ErrorMessageRow__WEBPACK_IMPORTED_MODULE_14__.ErrorMessageRow, { message: line.error })
                  ] }, id);
                })
              ]
            },
            key
          );
        })
      }
    );
  }
);
LogRecordViewerByTimestamp.displayName = "LogRecordViewerByTimestamp";
function LogRecordViewerByInstance({ records, commonLabels }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  const groupedLines = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.groupBy)(records, (record) => {
    return JSON.stringify(record.line.labels);
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: Object.entries(groupedLines).map(([key, records2]) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "column", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.TagList,
        {
          tags: (0,_common__WEBPACK_IMPORTED_MODULE_15__.omitLabels)(Object.entries(records2[0].line.labels ?? {}), commonLabels).map(
            ([key2, value]) => `${key2}=${value}`
          )
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.logsContainer, children: records2.map(({ line, timestamp }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertStateTag__WEBPACK_IMPORTED_MODULE_13__.AlertStateTag, { state: line.previous, size: "sm", muted: true }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { name: "arrow-right", size: "sm" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertStateTag__WEBPACK_IMPORTED_MODULE_13__.AlertStateTag, { state: line.current }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { children: line.values && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertInstanceValues, { record: line.values }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.dateTimeFormat)(timestamp) })
      ] }, (0,lodash__WEBPACK_IMPORTED_MODULE_3__.uniqueId)())) })
    ] }, key);
  }) });
}
const Timestamp = ({ time }) => {
  const dateTime = new Date(time);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.timestampWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { name: "clock-nine", size: "sm" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.timestampText, children: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.dateTimeFormat)(dateTime) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.timestamp.time-ago", values: { time: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.formatDistanceToNowStrict)(dateTime) }, children: [
      "(",
      "{{time}}",
      " ago)"
    ] }) })
  ] }) });
};
const AlertInstanceValues = (0,react__WEBPACK_IMPORTED_MODULE_4__.memo)(({ record }) => {
  const values = Object.entries(record);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: values.map(([key, value]) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_5__.AlertLabel, { labelKey: key, value: String(value) }, key)) });
});
AlertInstanceValues.displayName = "AlertInstanceValues";
const getStyles = (theme) => ({
  logsContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "grid",
    gridTemplateColumns: "max-content max-content max-content auto max-content",
    gap: theme.spacing(2, 1),
    alignItems: "center"
  }),
  logsScrollable: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    height: "500px",
    overflow: "scroll",
    flex: 1
  }),
  timestampWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.secondary
  }),
  timestampText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.primary,
    fontSize: theme.typography.bodySmall.fontSize,
    fontWeight: theme.typography.fontWeightBold
  }),
  listItemWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    background: "transparent",
    outline: "1px solid transparent",
    padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
    [theme.transitions.handleMotion("no-preference", "reduce")]: {
      transition: "background 150ms, outline 150ms"
    }
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/state-history/LogTimelineViewer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogTimelineViewer: () => (/* binding */ LogTimelineViewer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_TimelineChart_TimelineChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/TimelineChart/TimelineChart.tsx");
/* harmony import */ var app_core_components_TimelineChart_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/TimelineChart/utils.ts");









const replaceVariables = (v) => v;
const LogTimelineViewer = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ frames, timeRange }) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useTheme2)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__["default"], { disableHeight: true, children: ({ width }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_TimelineChart_TimelineChart__WEBPACK_IMPORTED_MODULE_6__.TimelineChart,
    {
      frames,
      timeRange,
      timeZone: "browser",
      mode: app_core_components_TimelineChart_utils__WEBPACK_IMPORTED_MODULE_7__.TimelineMode.Changes,
      height: 18 * frames.length + 50,
      width,
      showValue: _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.VisibilityMode.Never,
      theme,
      rowHeight: 0.8,
      legend: {
        calcs: [],
        displayMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.LegendDisplayMode.List,
        placement: "bottom",
        showLegend: true
      },
      legendItems: [
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.log-timeline-viewer.label.normal", "Normal"),
          color: theme.colors.success.main,
          yAxis: 1
        },
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.log-timeline-viewer.label.pending", "Pending"),
          color: theme.colors.warning.main,
          yAxis: 1
        },
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.log-timeline-viewer.label.recovering", "Recovering"),
          color: theme.colors.warning.main,
          yAxis: 1
        },
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.log-timeline-viewer.label.firing", "Firing"),
          color: theme.colors.error.main,
          yAxis: 1
        },
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.log-timeline-viewer.label.no-data", "No Data"),
          color: theme.colors.info.main,
          yAxis: 1
        },
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.log-timeline-viewer.label.mixed", "Mixed"),
          color: theme.colors.text.secondary,
          yAxis: 1
        }
      ],
      replaceVariables
    }
  ) });
});
LogTimelineViewer.displayName = "LogTimelineViewer";


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/state-history/LokiStateHistory.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getStyles: () => (/* binding */ getStyles),
/* harmony export */   useFrameSubset: () => (/* binding */ useFrameSubset)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-alerting/src/grafana/rules/components/labels/AlertLabels.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/datetime/moment_wrapper.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _api_stateHistoryApi__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/api/stateHistoryApi.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _HoverCard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/components/HoverCard.tsx");
/* harmony import */ var _LogRecordViewer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/LogRecordViewer.tsx");
/* harmony import */ var _LogTimelineViewer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/LogTimelineViewer.tsx");
/* harmony import */ var _useRuleHistoryRecords__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/useRuleHistoryRecords.tsx");

















const STATE_HISTORY_POLLING_INTERVAL = 10 * 1e3;
const MAX_TIMELINE_SERIES = 12;
const LokiStateHistory = ({ ruleUID }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.useStyles2)(getStyles);
  const [instancesFilter, setInstancesFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const logsRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(/* @__PURE__ */ new Map());
  const { getValues, setValue, register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({ defaultValues: { query: "" } });
  const { useGetRuleHistoryQuery } = _api_stateHistoryApi__WEBPACK_IMPORTED_MODULE_18__.stateHistoryApi;
  const queryTimeRange = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => getDefaultTimeRange(), []);
  const {
    currentData: stateHistory,
    isLoading,
    isError,
    error
  } = useGetRuleHistoryQuery(
    {
      ruleUid: ruleUID,
      from: queryTimeRange.from.unix(),
      to: queryTimeRange.to.unix(),
      limit: 250
    },
    {
      refetchOnFocus: true,
      refetchOnReconnect: true,
      pollingInterval: STATE_HISTORY_POLLING_INTERVAL
    }
  );
  const { dataFrames, historyRecords, commonLabels, totalRecordsCount } = (0,_useRuleHistoryRecords__WEBPACK_IMPORTED_MODULE_23__.useRuleHistoryRecords)(
    stateHistory,
    instancesFilter
  );
  const { frameSubset, frameTimeRange } = useFrameSubset(dataFrames);
  const onLogRecordLabelClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(
    (label) => {
      const matcherString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_19__.combineMatcherStrings)(getValues("query"), label);
      setInstancesFilter(matcherString);
      setValue("query", matcherString);
    },
    [setInstancesFilter, setValue, getValues]
  );
  const onFilterCleared = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    setInstancesFilter("");
    setValue("query", "");
  }, [setInstancesFilter, setValue]);
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.loki-state-history.loading", children: "Loading..." }) });
  }
  if (isError) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)(
          "alerting.loki-state-history.title-error-fetching-the-state-history",
          "Error fetching the state history"
        ),
        severity: "error",
        children: error instanceof Error ? error.message : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("alerting.loki-state-history.error-unable-to-fetch", "Unable to fetch alert state history")
      }
    );
  }
  const hasMoreInstances = frameSubset.length < dataFrames.length;
  const emptyStateMessage = totalRecordsCount > 0 ? `No matches were found for the given filters among the ${totalRecordsCount} instances` : "No state transitions have occurred in the last 30 days";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.fullSize, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit((data) => setInstancesFilter(data.query)), children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        SearchFieldInput,
        {
          ...register("query"),
          showClearFilterSuffix: !!instancesFilter,
          onClearFilterClick: onFilterCleared
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "submit", hidden: true })
    ] }),
    !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(commonLabels) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { gap: 1, alignItems: "center", wrap: "wrap", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { gap: 0.5, alignItems: "center", minWidth: "fit-content", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Text, { variant: "bodySmall", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.loki-state-history.common-labels", children: "Common labels" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Tooltip,
          {
            content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)(
              "alerting.loki-state-history.tooltip-common-labels",
              "Common labels are the ones attached to all of the alert instances"
            ),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { name: "info-circle", size: "sm" })
          }
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_5__.AlertLabels, { labels: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.fromPairs)(commonLabels), size: "sm" })
    ] }),
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(frameSubset) ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.emptyState, children: [
      emptyStateMessage,
      totalRecordsCount > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Button, { variant: "secondary", type: "button", onClick: onFilterCleared, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.loki-state-history.clear-filters", children: "Clear filters" }) })
    ] }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.graphWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LogTimelineViewer__WEBPACK_IMPORTED_MODULE_22__.LogTimelineViewer, { frames: frameSubset, timeRange: frameTimeRange }) }),
      hasMoreInstances && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.moreInstancesWarning, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { direction: "row", alignItems: "center", gap: 1, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { name: "exclamation-triangle", size: "sm" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small", { children: `Only showing ${frameSubset.length} out of ${dataFrames.length} instances. Click on the labels to narrow down the results` })
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _LogRecordViewer__WEBPACK_IMPORTED_MODULE_21__.LogRecordViewerByTimestamp,
        {
          records: historyRecords,
          commonLabels,
          onRecordsRendered: (recordRefs) => logsRef.current = recordRefs,
          onLabelClick: onLogRecordLabelClick
        }
      )
    ] })
  ] });
};
function useFrameSubset(frames) {
  return (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    const frameSubset = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.take)(frames, MAX_TIMELINE_SERIES);
    const frameSubsetTimestamps = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.sortBy)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.uniq)(frameSubset.flatMap((frame) => frame.fields[0].values)));
    const minTs = Math.min(...frameSubsetTimestamps);
    const maxTs = Math.max(...frameSubsetTimestamps);
    const rangeStart = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.dateTime)(minTs);
    const rangeStop = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.dateTime)(maxTs);
    const frameTimeRange = {
      from: rangeStart,
      to: rangeStop,
      raw: {
        from: rangeStart,
        to: rangeStop
      }
    };
    return { frameSubset, frameSubsetTimestamps, frameTimeRange };
  }, [frames]);
}
const SearchFieldInput = react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(
  ({ showClearFilterSuffix, onClearFilterClick, ...rest }, ref) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
      {
        label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Label, { htmlFor: "instancesSearchInput", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { gap: 0.5, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.search-field-input.filter-instances", children: "Filter instances" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _HoverCard__WEBPACK_IMPORTED_MODULE_20__.PopupCard,
            {
              content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.search-field-input.filter-instances-tooltip", children: "Use label matcher expression or click on an instance label to filter instances, for example:" }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: "{foo=bar}" }) })
              ] }),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { name: "info-circle", size: "sm" })
            }
          )
        ] }) }),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Input,
          {
            id: "instancesSearchInput",
            prefix: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { name: "search" }),
            suffix: showClearFilterSuffix && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Button, { fill: "text", icon: "times", size: "sm", onClick: onClearFilterClick, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.search-field-input.clear", children: "Clear" }) }),
            placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)(
              "alerting.search-field-input.instancesSearchInput-placeholder-filter-instances",
              "Filter instances"
            ),
            ref,
            ...rest
          }
        )
      }
    );
  }
);
SearchFieldInput.displayName = "SearchFieldInput";
function getDefaultTimeRange() {
  const fromDateTime = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.dateTime)().subtract(30, "days");
  const toDateTime = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.dateTime)();
  return {
    from: fromDateTime,
    to: toDateTime,
    raw: { from: fromDateTime, to: toDateTime }
  };
}
const getStyles = (theme) => ({
  fullSize: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    minWidth: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column"
  }),
  graphWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: `${theme.spacing()} 0`
  }),
  emptyState: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.secondary,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    alignItems: "center",
    margin: "auto auto"
  }),
  moreInstancesWarning: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.warning.text,
    padding: theme.spacing()
  }),
  // we need !important here to override the list item default styles
  highlightedLogRecord: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    background: `${theme.colors.primary.transparent} !important`,
    outline: `1px solid ${theme.colors.primary.shade} !important`
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LokiStateHistory);


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/state-history/common.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractCommonLabels: () => (/* binding */ extractCommonLabels),
/* harmony export */   historyDataFrameToLogRecords: () => (/* binding */ historyDataFrameToLogRecords),
/* harmony export */   isLine: () => (/* binding */ isLine),
/* harmony export */   isNumbers: () => (/* binding */ isNumbers),
/* harmony export */   omitLabels: () => (/* binding */ omitLabels)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


function omitLabels(labels, common) {
  return labels.filter((label) => {
    return !common.find((commonLabel) => JSON.stringify(commonLabel) === JSON.stringify(label));
  });
}
function extractCommonLabels(labels) {
  const flatLabels = labels.flatMap((label) => label);
  const commonLabels = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqBy)(
    flatLabels.filter((label) => {
      const count = flatLabels.filter((l) => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(label, l)).length;
      return count === Object.keys(labels).length;
    }),
    (label) => JSON.stringify(label)
  );
  return commonLabels;
}
function historyDataFrameToLogRecords(stateHistory) {
  if (!stateHistory?.data || !stateHistory.data.values || !Array.isArray(stateHistory.data.values)) {
    return [];
  }
  const [tsValues, lines] = stateHistory.data.values;
  if (!Array.isArray(tsValues) || !Array.isArray(lines) || tsValues.length !== lines.length) {
    return [];
  }
  const timestamps = isNumbers(tsValues) ? tsValues : [];
  const logRecords = timestamps.reduce((acc, timestamp, index) => {
    const line = lines[index];
    if (!isLine(line)) {
      return acc;
    }
    acc.push({ timestamp, line });
    return acc;
  }, []);
  return logRecords;
}
function isNumbers(value) {
  return value.every((v) => typeof v === "number");
}
function isLine(value) {
  return typeof value === "object" && value !== null && "current" in value && "previous" in value;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/state-history/useRuleHistoryRecords.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logRecordsToDataFrame: () => (/* binding */ logRecordsToDataFrame),
/* harmony export */   useRuleHistoryRecords: () => (/* binding */ useRuleHistoryRecords)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/field/displayProcessor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/field/fieldComparers.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-schema/src/raw/dashboard/x/dashboard_types.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_matchers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/matchers.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/common.ts");










function useRuleHistoryRecords(stateHistory, filter) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useTheme2)();
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const logRecords = (0,_common__WEBPACK_IMPORTED_MODULE_9__.historyDataFrameToLogRecords)(stateHistory);
    const logRecordsByInstance = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(logRecords, (record) => {
      return JSON.stringify(record.line.labels);
    });
    const groupLabels = Object.keys(logRecordsByInstance);
    const groupLabelsArray = groupLabels.map((label) => {
      return Object.entries(JSON.parse(label));
    });
    const commonLabels = (0,_common__WEBPACK_IMPORTED_MODULE_9__.extractCommonLabels)(groupLabelsArray);
    const filterMatchers = filter ? (0,_utils_matchers__WEBPACK_IMPORTED_MODULE_8__.parsePromQLStyleMatcherLooseSafe)(filter) : [];
    const filteredGroupedLines = Object.entries(logRecordsByInstance).filter(([key]) => {
      const labels = JSON.parse(key);
      return (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_7__.labelsMatchMatchers)(labels, filterMatchers);
    });
    const dataFrames = filteredGroupedLines.map(([key, records]) => {
      return logRecordsToDataFrame(key, records, commonLabels, theme);
    });
    return {
      historyRecords: logRecords.filter(({ line }) => line.labels && (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_7__.labelsMatchMatchers)(line.labels, filterMatchers)),
      dataFrames,
      commonLabels,
      totalRecordsCount: logRecords.length
    };
  }, [stateHistory, filter, theme]);
}
function logRecordsToDataFrame(instanceLabels, records, commonLabels, theme) {
  const parsedInstanceLabels = Object.entries(JSON.parse(instanceLabels));
  const timeField = {
    name: "time",
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.time,
    values: [...records.map((record) => record.timestamp), Date.now()],
    config: { displayName: "Time", custom: { fillOpacity: 100 } }
  };
  const timeIndex = timeField.values.map((_, index) => index);
  timeIndex.sort((0,_grafana_data_internal__WEBPACK_IMPORTED_MODULE_4__.fieldIndexComparer)(timeField));
  const stateValues = [...records.map((record) => record.line.current), records.at(-1)?.line.current];
  const frame = {
    fields: [
      {
        ...timeField,
        values: timeField.values.map((_, i) => timeField.values[timeIndex[i]])
      },
      {
        name: "State",
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.string,
        values: stateValues.map((_, i) => stateValues[timeIndex[i]]),
        config: {
          displayName: (0,_common__WEBPACK_IMPORTED_MODULE_9__.omitLabels)(parsedInstanceLabels, commonLabels).map(([key, label]) => `${key}=${label}`).join(", "),
          color: { mode: "thresholds" },
          custom: { fillOpacity: 100 },
          mappings: [
            {
              type: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.MappingType.RegexToText,
              options: {
                //  Map as a regex so we capture `Normal`, and `Normal (Updated)`
                pattern: "/^normal/i",
                result: { color: theme.colors.success.main }
              }
            },
            {
              type: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.MappingType.RegexToText,
              options: {
                pattern: "/Alerting/",
                result: { color: theme.colors.error.main }
              }
            },
            {
              type: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.MappingType.ValueToText,
              options: {
                Pending: {
                  color: theme.colors.warning.main
                },
                Recovering: {
                  color: theme.colors.warning.main
                },
                NoData: {
                  color: theme.colors.info.main
                }
              }
            }
          ],
          thresholds: {
            mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.ThresholdsMode.Absolute,
            steps: []
          }
        }
      }
    ],
    length: timeField.values.length,
    name: instanceLabels
  };
  frame.fields.forEach((field) => {
    field.display = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getDisplayProcessor)({ field, theme });
  });
  return frame;
}


/***/ }),

/***/ "./public/app/plugins/panel/barchart/distribute.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SPACE_AROUND: () => (/* binding */ SPACE_AROUND),
/* harmony export */   SPACE_BETWEEN: () => (/* binding */ SPACE_BETWEEN),
/* harmony export */   SPACE_EVENLY: () => (/* binding */ SPACE_EVENLY),
/* harmony export */   distribute: () => (/* binding */ distribute)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/utils/numbers.ts");


const SPACE_BETWEEN = 1;
const SPACE_AROUND = 2;
const SPACE_EVENLY = 3;
const coord = (i, offs, iwid, gap) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.roundDecimals)(offs + i * (iwid + gap), 6);
function distribute(numItems, sizeFactor, justify, onlyIdx, each) {
  let space = 1 - sizeFactor;
  let gap = justify === SPACE_BETWEEN ? space / (numItems - 1) : justify === SPACE_AROUND ? space / numItems : justify === SPACE_EVENLY ? space / (numItems + 1) : 0;
  if (isNaN(gap) || gap === Infinity) {
    gap = 0;
  }
  let offs = justify === SPACE_BETWEEN ? 0 : justify === SPACE_AROUND ? gap / 2 : justify === SPACE_EVENLY ? gap : 0;
  let iwid = sizeFactor / numItems;
  let _iwid = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.roundDecimals)(iwid, 6);
  if (onlyIdx == null) {
    for (let i = 0; i < numItems; i++) {
      each(i, coord(i, offs, iwid, gap), _iwid);
    }
  } else {
    each(onlyIdx, coord(onlyIdx, offs, iwid, gap), _iwid);
  }
}


/***/ }),

/***/ "./public/app/plugins/panel/barchart/quadtree.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Quadtree: () => (/* binding */ Quadtree),
/* harmony export */   findRects: () => (/* binding */ findRects),
/* harmony export */   intersects: () => (/* binding */ intersects),
/* harmony export */   pointWithin: () => (/* binding */ pointWithin)
/* harmony export */ });

const MAX_OBJECTS = 10;
const MAX_LEVELS = 4;
function pointWithin(px, py, rlft, rtop, rrgt, rbtm) {
  return px >= rlft && px <= rrgt && py >= rtop && py <= rbtm;
}
function findRects(qt, sidx, didx) {
  let rects = [];
  if (qt.o.length) {
    rects.push(...qt.o.filter((rect) => (sidx == null || rect.sidx === sidx) && (didx == null || rect.didx === didx)));
  }
  if (qt.q) {
    for (let i = 0; i < qt.q.length; i++) {
      rects.push(...findRects(qt.q[i], sidx, didx));
    }
  }
  return rects;
}
function intersects(r1, r2) {
  return r1.x <= r2.x + r2.w && r1.x + r1.w >= r2.x && r1.y + r1.h >= r2.y && r1.y <= r2.y + r2.h;
}
class Quadtree {
  constructor(x, y, w, h, l = 0) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.l = l;
    this.o = [];
    this.q = null;
  }
  split() {
    let t = this, x = t.x, y = t.y, w = t.w / 2, h = t.h / 2, l = t.l + 1;
    t.q = [
      // top right
      new Quadtree(x + w, y, w, h, l),
      // top left
      new Quadtree(x, y, w, h, l),
      // bottom left
      new Quadtree(x, y + h, w, h, l),
      // bottom right
      new Quadtree(x + w, y + h, w, h, l)
    ];
  }
  // invokes callback with index of each overlapping quad
  quads(x, y, w, h, cb) {
    let t = this, q = t.q, hzMid = t.x + t.w / 2, vtMid = t.y + t.h / 2, startIsNorth = y < vtMid, startIsWest = x < hzMid, endIsEast = x + w > hzMid, endIsSouth = y + h > vtMid;
    startIsNorth && endIsEast && cb(q[0]);
    startIsWest && startIsNorth && cb(q[1]);
    startIsWest && endIsSouth && cb(q[2]);
    endIsEast && endIsSouth && cb(q[3]);
  }
  add(o) {
    let t = this;
    if (t.q != null) {
      t.quads(o.x, o.y, o.w, o.h, (q) => {
        q.add(o);
      });
    } else {
      let os = t.o;
      os.push(o);
      if (os.length > MAX_OBJECTS && t.l < MAX_LEVELS) {
        t.split();
        for (let i = 0; i < os.length; i++) {
          let oi = os[i];
          t.quads(oi.x, oi.y, oi.w, oi.h, (q) => {
            q.add(oi);
          });
        }
        t.o.length = 0;
      }
    }
  }
  get(x, y, w, h, cb) {
    let t = this;
    let os = t.o;
    for (let i = 0; i < os.length; i++) {
      cb(os[i]);
    }
    if (t.q != null) {
      t.quads(x, y, w, h, (q) => {
        q.get(x, y, w, h, cb);
      });
    }
  }
  clear() {
    this.o.length = 0;
    this.q = null;
  }
}


/***/ })

}]);
//# sourceMappingURL=public_app_features_alerting_unified_components_rules_state-history_LokiStateHistory_tsx.481de12c2c536b645b48.js.map