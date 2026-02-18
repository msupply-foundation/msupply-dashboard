"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["barChartPanel"],{

/***/ "./packages/grafana-ui/src/components/VizTooltip/VizTooltipColorIndicator.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorIndicatorPosition: () => (/* binding */ ColorIndicatorPosition),
/* harmony export */   VizTooltipColorIndicator: () => (/* binding */ VizTooltipColorIndicator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _themes_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _VizLegend_SeriesIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/VizLegend/SeriesIcon.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/utils.ts");








var ColorIndicatorPosition = /* @__PURE__ */ ((ColorIndicatorPosition2) => {
  ColorIndicatorPosition2[ColorIndicatorPosition2["Leading"] = 0] = "Leading";
  ColorIndicatorPosition2[ColorIndicatorPosition2["Trailing"] = 1] = "Trailing";
  return ColorIndicatorPosition2;
})(ColorIndicatorPosition || {});
const VizTooltipColorIndicator = ({
  color = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FALLBACK_COLOR,
  colorIndicator = _types__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_COLOR_INDICATOR,
  position = 0 /* Leading */,
  lineStyle,
  isHollow
}) => {
  const styles = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  if (colorIndicator === _types__WEBPACK_IMPORTED_MODULE_5__.ColorIndicator.series && !isHollow) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _VizLegend_SeriesIcon__WEBPACK_IMPORTED_MODULE_4__.SeriesIcon,
      {
        color,
        lineStyle,
        noMargin: true,
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(
          position === 0 /* Leading */ ? styles.leading : styles.trailing,
          styles.seriesIndicator
        )
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "div",
    {
      style: isHollow ? { border: `1px solid ${color}` } : { backgroundColor: color },
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(
        position === 0 /* Leading */ ? styles.leading : styles.trailing,
        (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getColorIndicatorClass)(colorIndicator, styles)
      )
    }
  );
};
const getStyles = (theme) => ({
  leading: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginRight: theme.spacing(0.5)
  }),
  trailing: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginLeft: theme.spacing(0.5)
  }),
  seriesIndicator: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "relative",
    top: -2
    // half the height of the color indicator, since the top is aligned with flex center.
  }),
  series: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "14px",
    height: "4px",
    borderRadius: theme.shape.radius.pill,
    minWidth: "14px"
  }),
  value: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "12px",
    height: "12px",
    borderRadius: theme.shape.radius.default,
    fontWeight: 500,
    minWidth: "12px"
  }),
  hexagon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({}),
  pie_1_4: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({}),
  pie_2_4: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({}),
  pie_3_4: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({}),
  marker_sm: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "4px",
    height: "4px",
    borderRadius: theme.shape.radius.circle,
    minWidth: "4px"
  }),
  marker_md: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "8px",
    height: "8px",
    borderRadius: theme.shape.radius.circle,
    minWidth: "8px"
  }),
  marker_lg: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "12px",
    height: "12px",
    borderRadius: theme.shape.radius.circle,
    minWidth: "12px"
  })
});


/***/ }),

/***/ "./packages/grafana-ui/src/components/VizTooltip/VizTooltipContent.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VizTooltipContent: () => (/* binding */ VizTooltipContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _themes_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _VizTooltipRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipRow.tsx");





const VizTooltipContent = ({
  items,
  children,
  isPinned,
  scrollable = false,
  maxHeight
}) => {
  const styles = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const scrollableStyle = scrollable ? {
    maxHeight,
    overflowY: "auto"
  } : {};
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.wrapper, style: scrollableStyle, children: [
    items.map(({ label, value, color, colorIndicator, colorPlacement, isActive, lineStyle, isHiddenFromViz }, i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _VizTooltipRow__WEBPACK_IMPORTED_MODULE_3__.VizTooltipRow,
      {
        label,
        value,
        color,
        colorIndicator,
        colorPlacement,
        isActive,
        isPinned,
        lineStyle,
        showValueScroll: !scrollable,
        isHiddenFromViz
      },
      i
    )),
    children
  ] });
};
const getStyles = (theme) => ({
  wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: 2,
    borderTop: `1px solid ${theme.colors.border.weak}`,
    padding: theme.spacing(1)
  })
});


/***/ }),

/***/ "./packages/grafana-ui/src/components/VizTooltip/VizTooltipHeader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VizTooltipHeader: () => (/* binding */ VizTooltipHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _themes_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _VizTooltipRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipRow.tsx");





const VizTooltipHeader = ({ item: { label, value, color, colorIndicator }, isPinned }) => {
  const styles = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _VizTooltipRow__WEBPACK_IMPORTED_MODULE_3__.VizTooltipRow,
    {
      label,
      value,
      color,
      colorIndicator,
      marginRight: "22px",
      isPinned
    }
  ) });
};
const getStyles = (theme) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  padding: theme.spacing(1),
  lineHeight: 1
});


/***/ }),

/***/ "./packages/grafana-ui/src/components/VizTooltip/VizTooltipRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VizTooltipRow: () => (/* binding */ VizTooltipRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _themes_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _InlineToast_InlineToast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/InlineToast/InlineToast.tsx");
/* harmony import */ var _Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _VizTooltipColorIndicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipColorIndicator.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/types.ts");










var LabelValueTypes = /* @__PURE__ */ ((LabelValueTypes2) => {
  LabelValueTypes2["label"] = "label";
  LabelValueTypes2["value"] = "value";
  return LabelValueTypes2;
})(LabelValueTypes || {});
const SUCCESSFULLY_COPIED_TEXT = "Copied to clipboard";
const SHOW_SUCCESS_DURATION = 2 * 1e3;
const HORIZONTAL_PX_PER_CHAR = 7;
const CAN_COPY = Boolean(navigator.clipboard && window.isSecureContext);
const VizTooltipRow = ({
  label,
  value,
  color,
  colorIndicator,
  colorPlacement = _types__WEBPACK_IMPORTED_MODULE_8__.ColorPlacement.first,
  justify,
  isActive = false,
  marginRight,
  isPinned,
  lineStyle,
  showValueScroll,
  isHiddenFromViz
}) => {
  const styles = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles, justify, marginRight);
  const innerValueScrollStyle = showValueScroll ? {
    maxHeight: 55,
    whiteSpace: "wrap",
    wordBreak: "break-word",
    overflowY: "auto"
  } : {
    whiteSpace: "pre-line",
    wordBreak: "break-word",
    lineHeight: 1.2
  };
  const [showLabelTooltip, setShowLabelTooltip] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [copiedText, setCopiedText] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const [showCopySuccess, setShowCopySuccess] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const labelRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const valueRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    let timeoutId;
    if (showCopySuccess) {
      timeoutId = setTimeout(() => {
        setShowCopySuccess(false);
      }, SHOW_SUCCESS_DURATION);
    }
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [showCopySuccess]);
  const copyToClipboard = async (text, type) => {
    if (!CAN_COPY) {
      fallbackCopyToClipboard(text, type);
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText({ [`${type}`]: text });
      setShowCopySuccess(true);
    } catch (error) {
      setCopiedText(null);
    }
  };
  const fallbackCopyToClipboard = (text, type) => {
    const textarea = document.createElement("textarea");
    labelRef.current?.appendChild(textarea);
    textarea.value = text;
    textarea.focus();
    textarea.select();
    try {
      const successful = document.execCommand("copy");
      if (successful) {
        setCopiedText({ [`${type}`]: text });
        setShowCopySuccess(true);
      }
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
    textarea.remove();
  };
  const onMouseEnterLabel = (event) => {
    if (event.currentTarget.offsetWidth < event.currentTarget.scrollWidth) {
      setShowLabelTooltip(true);
    }
  };
  const onMouseLeaveLabel = () => setShowLabelTooltip(false);
  if (label.length * HORIZONTAL_PX_PER_CHAR > window.innerWidth / 2) {
    label = label.replaceAll("{", "{\n  ").replaceAll("}", "\n}").replaceAll(", ", ",\n  ");
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.contentWrapper, children: [
    color && colorPlacement === _types__WEBPACK_IMPORTED_MODULE_8__.ColorPlacement.first && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.colorWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _VizTooltipColorIndicator__WEBPACK_IMPORTED_MODULE_7__.VizTooltipColorIndicator,
      {
        color,
        colorIndicator,
        lineStyle,
        isHollow: isHiddenFromViz
      }
    ) }),
    label && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.labelWrapper, children: !isPinned ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(styles.label, isActive ? styles.activeSeries : ""), children: label }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_6__.Tooltip, { content: label, interactive: false, show: showLabelTooltip, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      showCopySuccess && copiedText?.label && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InlineToast_InlineToast__WEBPACK_IMPORTED_MODULE_5__.InlineToast, { placement: "top", referenceElement: labelRef.current, children: SUCCESSFULLY_COPIED_TEXT }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        "div",
        {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(styles.label, isActive ? styles.activeSeries : "", CAN_COPY ? styles.copy : ""),
          onMouseEnter: onMouseEnterLabel,
          onMouseLeave: onMouseLeaveLabel,
          onClick: () => copyToClipboard(label, "label" /* label */),
          ref: labelRef,
          children: label
        }
      )
    ] }) }) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.valueWrapper, children: [
      color && colorPlacement === _types__WEBPACK_IMPORTED_MODULE_8__.ColorPlacement.leading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _VizTooltipColorIndicator__WEBPACK_IMPORTED_MODULE_7__.VizTooltipColorIndicator,
        {
          color,
          colorIndicator,
          position: _VizTooltipColorIndicator__WEBPACK_IMPORTED_MODULE_7__.ColorIndicatorPosition.Leading,
          lineStyle
        }
      ),
      !isPinned ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.value, style: innerValueScrollStyle, children: value }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        showCopySuccess && copiedText?.value && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InlineToast_InlineToast__WEBPACK_IMPORTED_MODULE_5__.InlineToast, { placement: "top", referenceElement: valueRef.current, children: SUCCESSFULLY_COPIED_TEXT }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          "div",
          {
            className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(styles.value, CAN_COPY ? styles.copy : ""),
            style: innerValueScrollStyle,
            onClick: () => copyToClipboard(value ? value.toString() : "", "value" /* value */),
            ref: valueRef,
            children: value
          }
        )
      ] }),
      color && colorPlacement === _types__WEBPACK_IMPORTED_MODULE_8__.ColorPlacement.trailing && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _VizTooltipColorIndicator__WEBPACK_IMPORTED_MODULE_7__.VizTooltipColorIndicator,
        {
          color,
          colorIndicator,
          position: _VizTooltipColorIndicator__WEBPACK_IMPORTED_MODULE_7__.ColorIndicatorPosition.Trailing,
          lineStyle
        }
      )
    ] })
  ] });
};
const getStyles = (theme, justify = "start", marginRight) => ({
  contentWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    maxWidth: "100%",
    alignItems: "start",
    justifyContent: justify,
    columnGap: theme.spacing(0.75)
  }),
  label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({ display: "inline" }),
  value: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontWeight: 500,
    textOverflow: "ellipsis",
    overflow: "hidden"
  }),
  colorWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    alignSelf: "center",
    flexShrink: 0
  }),
  labelWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    flexGrow: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: theme.colors.text.secondary,
    fontWeight: 400
  }),
  valueWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    alignSelf: "center",
    marginRight
  }),
  activeSeries: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontWeight: theme.typography.fontWeightBold,
    color: theme.colors.text.maxContrast
  }),
  copy: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    cursor: "pointer"
  })
});


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

/***/ "./public/app/plugins/panel/barchart/BarChartLegend.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarChartLegend: () => (/* binding */ BarChartLegend),
/* harmony export */   hasVisibleLegendSeries: () => (/* binding */ hasVisibleLegendSeries)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/field/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/thresholds.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/VizLayout/VizLayout.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/VizLegend/VizLegend.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/utils.ts");
/* harmony import */ var app_core_components_TimelineChart_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/components/TimelineChart/utils.ts");









function hasVisibleLegendSeries(config, data) {
  return data[0].fields.slice(1).some((field) => !Boolean(field.config.custom?.hideFrom?.legend));
}
const BarChartLegend = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(
  ({ data, placement, calcs, displayMode, colorField, ...vizLayoutLegendProps }) => {
    const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useTheme2)();
    const fieldConfig = data[0].fields[0].config;
    const colorMode = fieldConfig.color?.mode;
    const thresholdItems = [];
    if (colorMode === _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldColorModeId.Thresholds) {
      const thresholdsAbsolute = { mode: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.ThresholdsMode.Absolute, steps: [] };
      const thresholdsPercent = { mode: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.ThresholdsMode.Percentage, steps: [] };
      for (let i = 1; i < data[0].fields.length; i++) {
        const field = data[0].fields[i];
        if (field.config.thresholds && field.config.thresholds.steps.length > 1) {
          if (field.config.thresholds.mode === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.ThresholdsMode.Absolute) {
            for (const step of field.config.thresholds.steps) {
              if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.includes)(thresholdsAbsolute.steps, step)) {
                thresholdsAbsolute.steps.push(step);
              }
            }
          } else {
            for (const step of field.config.thresholds.steps) {
              if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.includes)(thresholdsPercent.steps, step)) {
                thresholdsPercent.steps.push(step);
              }
            }
          }
        }
      }
      const thresholdAbsoluteItems = (0,app_core_components_TimelineChart_utils__WEBPACK_IMPORTED_MODULE_11__.getThresholdItems)(fieldConfig, theme, thresholdsAbsolute);
      const thresholdPercentItems = (0,app_core_components_TimelineChart_utils__WEBPACK_IMPORTED_MODULE_11__.getThresholdItems)(fieldConfig, theme, thresholdsPercent);
      thresholdItems.push(...thresholdAbsoluteItems, ...thresholdPercentItems);
    }
    const valueMappings = [];
    for (let i = 1; i < data[0].fields.length; i++) {
      const mappings = data[0].fields[i].config.mappings;
      if (mappings) {
        for (const mapping of mappings) {
          if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.includes)(valueMappings, mapping)) {
            valueMappings.push(mapping);
          }
        }
      }
    }
    const valueMappingItems = (0,app_core_components_TimelineChart_utils__WEBPACK_IMPORTED_MODULE_11__.getValueMappingItems)(valueMappings, theme);
    const legendItems = data[0].fields.slice(1).map((field, i) => {
      const frameIndex = 0;
      const fieldIndex = i + 1;
      if (!field || field.config.custom?.hideFrom?.legend) {
        return void 0;
      }
      const label = field.state?.displayName ?? field.name;
      const color = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getFieldSeriesColor)(field, theme).color;
      const item = {
        disabled: field.state?.hideFrom?.viz,
        color,
        label,
        yAxis: field.config.custom?.axisPlacement === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.AxisPlacement.Right ? 2 : 1,
        getDisplayValues: () => (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_10__.getDisplayValuesForCalcs)(calcs, field, theme),
        getItemKey: () => `${label}-${frameIndex}-${fieldIndex}`
      };
      return item;
    }).filter((i) => i !== void 0);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.VizLayout.Legend, { placement, ...vizLayoutLegendProps, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.VizLegend,
      {
        placement,
        items: legendItems,
        thresholdItems,
        mappingItems: valueMappingItems,
        displayMode,
        sortBy: vizLayoutLegendProps.sortBy,
        sortDesc: vizLayoutLegendProps.sortDesc,
        isSortable: true
      }
    ) });
  }
);
BarChartLegend.displayName = "BarChartLegend";


/***/ }),

/***/ "./public/app/plugins/panel/barchart/BarChartPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarChartPanel: () => (/* binding */ BarChartPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/panel.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/components/PanelDataErrorView.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/PanelContext.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/VizLayout/VizLayout.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/config/UPlotAxisBuilder.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/Plot.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/plugins/TooltipPlugin2.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/utils/measureText.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Table/types.ts");
/* harmony import */ var _timeseries_TimeSeriesTooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/panel/timeseries/TimeSeriesTooltip.tsx");
/* harmony import */ var _BarChartLegend__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/panel/barchart/BarChartLegend.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/panel/barchart/utils.ts");










const charWidth = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.measureText)("M", _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.UPLOT_AXIS_FONT_SIZE).width;
const toRads = Math.PI / 180;
const BarChartPanel = (props) => {
  const { data, options, fieldConfig, width, height, timeZone, id, replaceVariables } = props;
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useTheme2)();
  const { onAddAdHocFilter, canExecuteActions } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.usePanelContext)();
  const userCanExecuteActions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => canExecuteActions?.() ?? false, [canExecuteActions]);
  const {
    barWidth,
    barRadius = 0,
    showValue,
    groupWidth,
    stacking,
    legend,
    tooltip,
    text,
    xTickLabelRotation,
    xTickLabelSpacing,
    fullHighlight,
    xField,
    colorByField
  } = options;
  let { orientation, xTickLabelMaxLength = 0 } = options;
  orientation = orientation === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.VizOrientation.Auto ? width < height ? _grafana_data__WEBPACK_IMPORTED_MODULE_2__.VizOrientation.Horizontal : _grafana_data__WEBPACK_IMPORTED_MODULE_2__.VizOrientation.Vertical : orientation;
  xTickLabelMaxLength = xTickLabelRotation === 0 ? Infinity : xTickLabelMaxLength || // auto max length clamps to half viz height, subracts 3 chars for ... ellipsis
  Math.floor(height / 2 / Math.sin(Math.abs(xTickLabelRotation * toRads)) / charWidth - 3);
  const info = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => (0,_utils__WEBPACK_IMPORTED_MODULE_16__.prepSeries)(data.series, fieldConfig, stacking, theme, xField, colorByField),
    [data.series, fieldConfig, stacking, theme, xField, colorByField]
  );
  const vizSeries = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => info.series.map((frame) => ({
      ...frame,
      fields: frame.fields.filter((field, i) => i === 0 || !field.state?.hideFrom?.viz)
    })),
    [info.series]
  );
  const xGroupsCount = vizSeries[0]?.length ?? 0;
  const seriesCount = vizSeries[0]?.fields.length ?? 0;
  const totalSeries = Math.max(0, (info.series[0]?.fields.length ?? 0) - 1);
  let { builder, prepData } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => {
      return xGroupsCount === 0 ? { builder: null, prepData: null } : (0,_utils__WEBPACK_IMPORTED_MODULE_16__.prepConfig)({ series: vizSeries, totalSeries, color: info.color, orientation, options, timeZone, theme });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      orientation,
      timeZone,
      props.data.structureRev,
      totalSeries,
      seriesCount,
      xGroupsCount,
      barWidth,
      barRadius,
      showValue,
      groupWidth,
      stacking,
      legend,
      tooltip,
      text?.valueSize,
      // cause text obj is re-created each time?
      xTickLabelRotation,
      xTickLabelSpacing,
      fullHighlight,
      xField,
      colorByField,
      xTickLabelMaxLength
      // maybe not?
      // props.fieldConfig, // usePrevious hideFrom on all fields?
    ]
  );
  const plotData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => prepData == null ? [] : prepData(vizSeries, info.color),
    [prepData, vizSeries, info.color]
  );
  if (info.warn != null || builder == null) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.PanelDataErrorView,
      {
        panelId: id,
        fieldConfig,
        data,
        message: info.warn ?? "",
        needsNumberField: true
      }
    );
  }
  const legendComp = legend.showLegend && (0,_BarChartLegend__WEBPACK_IMPORTED_MODULE_15__.hasVisibleLegendSeries)(builder, info.series) ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_BarChartLegend__WEBPACK_IMPORTED_MODULE_15__.BarChartLegend, { data: info.series, colorField: info.color, ...legend }) : null;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.VizLayout,
    {
      width: props.width,
      height: props.height,
      legend: legendComp,
      children: (vizWidth, vizHeight) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.UPlotChart, { config: builder, data: plotData, width: vizWidth, height: vizHeight, children: props.options.tooltip.mode !== _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TooltipDisplayMode.None && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.TooltipPlugin2,
        {
          config: builder,
          maxWidth: options.tooltip.maxWidth,
          hoverMode: options.tooltip.mode === _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TooltipDisplayMode.Single ? _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.TooltipHoverMode.xOne : _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.TooltipHoverMode.xAll,
          getDataLinks: (seriesIdx, dataIdx) => vizSeries[0].fields[seriesIdx].getLinks?.({ valueRowIndex: dataIdx }) ?? [],
          getAdHocFilters: (_seriesIdx, dataIdx) => {
            const xField2 = vizSeries[0].fields[0];
            if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.featureToggles.adhocFiltersInTooltips && xField2.config.filterable && onAddAdHocFilter != null) {
              const adHocFilterItem = {
                key: xField2.name,
                operator: _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_13__.FILTER_FOR_OPERATOR,
                value: String(xField2.values[dataIdx])
              };
              const adHocFilters = [
                {
                  ...adHocFilterItem,
                  onClick: () => onAddAdHocFilter(adHocFilterItem)
                }
              ];
              return adHocFilters;
            }
            return [];
          },
          render: (u, dataIdxs, seriesIdx, isPinned, dismiss, timeRange2, viaSync, dataLinks, adHocFilters) => {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _timeseries_TimeSeriesTooltip__WEBPACK_IMPORTED_MODULE_14__.TimeSeriesTooltip,
              {
                series: vizSeries[0],
                _rest: info._rest,
                dataIdxs,
                seriesIdx,
                mode: options.tooltip.mode,
                sortOrder: options.tooltip.sort,
                isPinned,
                maxHeight: options.tooltip.maxHeight,
                replaceVariables,
                dataLinks,
                adHocFilters,
                hideZeros: options.tooltip.hideZeros,
                canExecuteActions: userCanExecuteActions
              }
            );
          }
        }
      ) })
    }
  );
};


/***/ }),

/***/ "./public/app/plugins/panel/barchart/TickSpacingEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TickSpacingEditor: () => (/* binding */ TickSpacingEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Checkbox.tsx");




const TickSpacingEditor = (props) => {
  const GAPS_OPTIONS = [
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("barchart.tick-spacing-editor.gaps-options.label-none", "None"),
      value: 0,
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("barchart.tick-spacing-editor.gaps-options.description-none", "Show all tick marks")
    },
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("barchart.tick-spacing-editor.gaps-options.label-small", "Small"),
      value: 100,
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("barchart.tick-spacing-editor.gaps-options.description-small", "Require {{spacing}} spacing", {
        spacing: "100px"
      })
    },
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("barchart.tick-spacing-editor.gaps-options.label-medium", "Medium"),
      value: 200,
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("barchart.tick-spacing-editor.gaps-options.description-medium", "Require {{spacing}} spacing", {
        spacing: "200px"
      })
    },
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("barchart.tick-spacing-editor.gaps-options.label-large", "Large"),
      value: 300,
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("barchart.tick-spacing-editor.gaps-options.description-large", "Require {{spacing}} spacing", {
        spacing: "300px"
      })
    }
  ];
  let value = props.value ?? 0;
  const isRTL = value < 0;
  if (isRTL) {
    value *= -1;
  }
  let gap = GAPS_OPTIONS[0];
  for (const v of GAPS_OPTIONS) {
    gap = v;
    if (value <= gap.value) {
      break;
    }
  }
  const onSpacingChange = (val) => {
    props.onChange(val * (isRTL ? -1 : 1));
  };
  const onRTLChange = () => {
    props.onChange(props.value * -1);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.RadioButtonGroup, { value: gap.value, options: GAPS_OPTIONS, onChange: onSpacingChange }),
    value !== 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip,
      {
        content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
          "barchart.tick-spacing-editor.content-require-space-from-the-right-side",
          "Require space from the right side"
        ),
        placement: "top",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Checkbox, { value: isRTL, onChange: onRTLChange, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("barchart.tick-spacing-editor.label-rtl", "RTL") }) })
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/plugins/panel/barchart/bars.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getConfig: () => (/* binding */ getConfig)
/* harmony export */ });
/* harmony import */ var uplot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/uplot/dist/uPlot.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/themes/colorManipulator.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/datetime/formats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/datetime/formatter.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/utils/measureText.ts");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/config/UPlotAxisBuilder.ts");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/utils.ts");
/* harmony import */ var _distribute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/barchart/distribute.ts");
/* harmony import */ var _quadtree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/barchart/quadtree.ts");






const intervals = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.systemDateFormats.interval;


const groupDistr = _distribute__WEBPACK_IMPORTED_MODULE_8__.SPACE_BETWEEN;
const barDistr = _distribute__WEBPACK_IMPORTED_MODULE_8__.SPACE_BETWEEN;
const VALUE_MIN_FONT_SIZE = 8;
const VALUE_MAX_FONT_SIZE = 30;
const BAR_FONT_SIZE_RATIO = 0.65;
const LABEL_OFFSET_FACTOR_VT = 0.1;
const LABEL_OFFSET_FACTOR_HZ = 0.15;
const LABEL_OFFSET_MAX_VT = 5;
const LABEL_OFFSET_MAX_HZ = 10;
const MIDDLE_BASELINE_SHIFT = 0.1;
function calculateFontSizeWithMetrics(text, width, height, lineHeight, maxSize) {
  const textSize = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.measureText)(text, 14);
  const fontSizeBasedOnWidth = width / (textSize.width + 2) * 14;
  const fontSizeBasedOnHeight = height / lineHeight;
  const optimalSize = Math.min(fontSizeBasedOnHeight, fontSizeBasedOnWidth);
  return {
    fontSize: Math.min(optimalSize, maxSize ?? optimalSize),
    textMetrics: textSize
  };
}
function getConfig(opts, theme) {
  const {
    xOri,
    xDir: dir,
    rawValue,
    getColor,
    formatValue,
    formatShortValue,
    fillOpacity = 1,
    showValue,
    xSpacing = 0,
    hoverMulti = false,
    timeZone = "browser"
  } = opts;
  const isXHorizontal = xOri === _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.ScaleOrientation.Horizontal;
  const hasAutoValueSize = !Boolean(opts.text?.valueSize);
  const isStacked = opts.stacking !== _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.StackingMode.None;
  const pctStacked = opts.stacking === _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.StackingMode.Percent;
  let { groupWidth, barWidth, barRadius = 0 } = opts;
  if (isStacked) {
    [groupWidth, barWidth] = [barWidth, groupWidth];
  }
  let qt;
  const numSeries = 30;
  const hovered = Array(numSeries).fill(null);
  let hRect;
  const xSplits = (u) => Array.from(u.data[0].map((v, i) => i));
  const hFilter = xSpacing === 0 ? void 0 : (u, splits) => {
    const dim = u.bbox.width;
    const _dir = dir * (isXHorizontal ? 1 : -1);
    let dataLen = splits.length;
    let lastIdx = dataLen - 1;
    let skipMod = 0;
    let cssDim = dim / uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio;
    let maxTicks = Math.abs(Math.floor(cssDim / xSpacing));
    skipMod = dataLen < maxTicks ? 0 : Math.ceil(dataLen / maxTicks);
    let splits2 = splits.map((v, i) => {
      let shouldSkip = skipMod !== 0 && (xSpacing > 0 ? i : lastIdx - i) % skipMod > 0;
      return shouldSkip ? null : v;
    });
    return _dir === 1 ? splits2 : splits2.reverse();
  };
  const xValues = (u, splits, axisIdx, foundSpace, foundIncr) => {
    if (opts.xTimeAuto) {
      let format = intervals.year;
      if (foundIncr < _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_6__.timeUnitSize.second) {
        format = intervals.millisecond;
      } else if (foundIncr < _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_6__.timeUnitSize.minute) {
        format = intervals.second;
      } else if (foundIncr < _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_6__.timeUnitSize.hour) {
        format = intervals.minute;
      } else if (foundIncr < _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_6__.timeUnitSize.day) {
        format = intervals.hour;
      } else if (foundIncr < _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_6__.timeUnitSize.month) {
        format = intervals.day;
      } else if (foundIncr < _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_6__.timeUnitSize.year) {
        format = intervals.month;
      } else {
        format = intervals.year;
      }
      return splits.map((v) => v == null ? "" : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTimeFormat)(v, { format, timeZone }));
    }
    return splits.map((v) => isXHorizontal ? formatShortValue(0, v) : formatValue(0, v));
  };
  const xRange = (u, min, max) => {
    min = 0;
    max = Math.max(1, u.data[0].length - 1);
    let pctOffset = 0;
    (0,_distribute__WEBPACK_IMPORTED_MODULE_8__.distribute)(u.data[0].length, groupWidth, groupDistr, 0, (di, lftPct, widPct) => {
      pctOffset = lftPct + widPct / 2;
    });
    let rn = max - min;
    if (pctOffset === 0.5) {
      min -= rn;
    } else {
      let upScale = 1 / (1 - pctOffset * 2);
      let offset = (upScale * rn - rn) / 2;
      min -= offset;
      max += offset;
    }
    return [min, max];
  };
  let distrTwo = (groupCount, barCount) => {
    let out = Array.from({ length: barCount }, () => ({
      offs: Array(groupCount).fill(0),
      size: Array(groupCount).fill(0)
    }));
    (0,_distribute__WEBPACK_IMPORTED_MODULE_8__.distribute)(groupCount, groupWidth, groupDistr, null, (groupIdx, groupOffPct, groupDimPct) => {
      (0,_distribute__WEBPACK_IMPORTED_MODULE_8__.distribute)(barCount, barWidth, barDistr, null, (barIdx, barOffPct, barDimPct) => {
        out[barIdx].offs[groupIdx] = groupOffPct + groupDimPct * barOffPct;
        out[barIdx].size[groupIdx] = groupDimPct * barDimPct;
      });
    });
    return out;
  };
  let distrOne = (groupCount, barCount) => {
    let out = Array.from({ length: barCount }, () => ({
      offs: Array(groupCount).fill(0),
      size: Array(groupCount).fill(0)
    }));
    (0,_distribute__WEBPACK_IMPORTED_MODULE_8__.distribute)(groupCount, groupWidth, groupDistr, null, (groupIdx, groupOffPct, groupDimPct) => {
      (0,_distribute__WEBPACK_IMPORTED_MODULE_8__.distribute)(barCount, barWidth, barDistr, null, (barIdx, barOffPct, barDimPct) => {
        out[barIdx].offs[groupIdx] = groupOffPct;
        out[barIdx].size[groupIdx] = groupDimPct;
      });
    });
    return out;
  };
  const LABEL_OFFSET_FACTOR = isXHorizontal ? LABEL_OFFSET_FACTOR_VT : LABEL_OFFSET_FACTOR_HZ;
  const LABEL_OFFSET_MAX = isXHorizontal ? LABEL_OFFSET_MAX_VT : LABEL_OFFSET_MAX_HZ;
  let barsPctLayout = [];
  let barsColors = [];
  let scaleFactor = 1;
  let labels;
  let fontSize = opts.text?.valueSize ?? VALUE_MAX_FONT_SIZE;
  let labelOffset = LABEL_OFFSET_MAX;
  let vSpace = Infinity;
  let hSpace = Infinity;
  let useMappedColors = getColor != null;
  let mappedColorDisp = useMappedColors ? {
    fill: {
      unit: 3,
      values: (u, seriesIdx) => barsColors[seriesIdx].fill
    },
    stroke: {
      unit: 3,
      values: (u, seriesIdx) => barsColors[seriesIdx].stroke
    }
  } : {};
  let barsBuilder = uplot__WEBPACK_IMPORTED_MODULE_0__["default"].paths.bars({
    radius: pctStacked ? 0 : !isStacked ? barRadius : (u, seriesIdx) => {
      let isTopmostSeries = seriesIdx === u.data.length - 1;
      return isTopmostSeries ? [barRadius, 0] : [0, 0];
    },
    disp: {
      x0: {
        unit: 2,
        values: (u, seriesIdx) => barsPctLayout[seriesIdx].offs
      },
      size: {
        unit: 2,
        values: (u, seriesIdx) => barsPctLayout[seriesIdx].size
      },
      ...mappedColorDisp
    },
    // collect rendered bar geometry
    each: (u, seriesIdx, dataIdx, lft, top, wid, hgt) => {
      lft -= u.bbox.left;
      top -= u.bbox.top;
      let val = u.data[seriesIdx][dataIdx];
      if (isXHorizontal) {
        vSpace = Math.min(vSpace, val < 0 ? u.bbox.height - (top + hgt) : top);
        hSpace = wid;
      } else {
        vSpace = hgt;
        hSpace = Math.min(hSpace, val < 0 ? lft : u.bbox.width - (lft + wid));
      }
      let barRect = { x: lft, y: top, w: wid, h: hgt, sidx: seriesIdx, didx: dataIdx };
      if (!isStacked && opts.fullHighlight) {
        if (opts.xOri === _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.ScaleOrientation.Horizontal) {
          barRect.y = 0;
          barRect.h = u.bbox.height;
        } else {
          barRect.x = 0;
          barRect.w = u.bbox.width;
        }
      }
      qt.add(barRect);
      if (showValue !== _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.VisibilityMode.Never) {
        const raw = rawValue(seriesIdx, dataIdx);
        let divider = 1;
        if (pctStacked && alignedTotals[seriesIdx][dataIdx]) {
          divider = alignedTotals[seriesIdx][dataIdx];
        }
        const v = divider === 0 ? 0 : raw / divider;
        const text = formatValue(seriesIdx, v);
        labelOffset = Math.min(labelOffset, Math.round(LABEL_OFFSET_FACTOR * (isXHorizontal ? wid : hgt)));
        if (labels[dataIdx] === void 0) {
          labels[dataIdx] = {};
        }
        labels[dataIdx][seriesIdx] = { text, value: rawValue(seriesIdx, dataIdx), hidden: false };
        if (hasAutoValueSize) {
          const { fontSize: calculatedSize, textMetrics } = calculateFontSizeWithMetrics(
            labels[dataIdx][seriesIdx].text,
            hSpace * (isXHorizontal ? BAR_FONT_SIZE_RATIO : 1) - (isXHorizontal ? 0 : labelOffset),
            vSpace * (isXHorizontal ? 1 : BAR_FONT_SIZE_RATIO) - (isXHorizontal ? labelOffset : 0),
            1
          );
          labels[dataIdx][seriesIdx].textMetrics = textMetrics;
          let autoFontSize = Math.round(Math.min(fontSize, VALUE_MAX_FONT_SIZE, calculatedSize));
          scaleFactor = autoFontSize / fontSize * (autoFontSize / 14);
          fontSize = autoFontSize;
        } else {
          labels[dataIdx][seriesIdx].textMetrics = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.measureText)(labels[dataIdx][seriesIdx].text, fontSize);
        }
        let middleShift = isXHorizontal ? 0 : -Math.round(MIDDLE_BASELINE_SHIFT * fontSize);
        let value = rawValue(seriesIdx, dataIdx);
        if (opts.negY?.[seriesIdx] && value != null) {
          value *= -1;
        }
        if (value != null) {
          const x = u.bbox.left + (isXHorizontal ? lft + wid / 2 : value < 0 ? lft - labelOffset : lft + wid + labelOffset);
          let y = u.bbox.top + (isXHorizontal ? value < 0 ? top + hgt + labelOffset : top - labelOffset : top + hgt / 2 - middleShift);
          const {
            textMetrics = {
              width: 1,
              actualBoundingBoxAscent: 1,
              actualBoundingBoxDescent: 1
            }
          } = labels[dataIdx][seriesIdx];
          let xAdjust = 0, yAdjust = 0;
          if (isXHorizontal) {
            xAdjust = textMetrics.width * scaleFactor / 2;
            yAdjust = value > 0 ? (textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent) * scaleFactor : 0;
          } else {
            yAdjust = (textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent) * scaleFactor / 2;
            xAdjust = value < 0 ? textMetrics.width * scaleFactor : 0;
          }
          if (y - yAdjust < 0) {
            y = yAdjust;
          }
          labels[dataIdx][seriesIdx].x = x;
          labels[dataIdx][seriesIdx].y = y;
          labels[dataIdx][seriesIdx].bbox = {
            x: x - xAdjust,
            y: y - yAdjust,
            w: textMetrics.width * scaleFactor,
            h: (textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent) * scaleFactor
          };
        }
      }
    }
  });
  const init = (u) => {
    u.root.querySelectorAll(".u-cursor-pt").forEach((el) => {
      el.style.borderRadius = "0";
      if (opts.fullHighlight) {
        el.style.zIndex = "-1";
      }
    });
  };
  const cursor = {
    x: false,
    y: false,
    drag: {
      x: false,
      y: false
    },
    dataIdx: (u, seriesIdx) => {
      if (seriesIdx === 0) {
        hovered.fill(null);
        hRect = null;
        let cx = u.cursor.left * uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio;
        let cy = u.cursor.top * uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio;
        qt.get(cx, cy, 1, 1, (o) => {
          if ((0,_quadtree__WEBPACK_IMPORTED_MODULE_9__.pointWithin)(cx, cy, o.x, o.y, o.x + o.w, o.y + o.h)) {
            hRect = hovered[0] = o;
            hovered[hRect.sidx] = hRect;
            hoverMulti && (0,_quadtree__WEBPACK_IMPORTED_MODULE_9__.findRects)(qt, void 0, hRect.didx).forEach((r) => {
              hovered[r.sidx] = r;
            });
          }
        });
      }
      return hovered[seriesIdx]?.didx;
    },
    points: {
      fill: "rgba(255,255,255,0.4)",
      bbox: (u, seriesIdx) => {
        let hRect2 = hovered[seriesIdx];
        let isHovered = hRect2 != null;
        return {
          left: isHovered ? hRect2.x / uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio : -10,
          top: isHovered ? hRect2.y / uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio : -10,
          width: isHovered ? hRect2.w / uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio : 0,
          height: isHovered ? hRect2.h / uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio : 0
        };
      }
    },
    focus: {
      prox: 1e3,
      dist: (u, seriesIdx) => hRect?.sidx === seriesIdx ? 0 : Infinity
    }
  };
  const drawClear = (u) => {
    qt = qt || new _quadtree__WEBPACK_IMPORTED_MODULE_9__.Quadtree(0, 0, u.bbox.width, u.bbox.height);
    qt.clear();
    u.series.forEach((s) => {
      s._paths = null;
    });
    if (isStacked) {
      barsPctLayout = [null, ...distrOne(u.data[0].length, u.data.length - 1)];
    } else {
      barsPctLayout = [null, ...distrTwo(u.data[0].length, u.data.length - 1)];
    }
    if (useMappedColors) {
      barsColors = [null];
      for (let i = 1; i < u.data.length; i++) {
        let colors = u.data[i].map((value, valueIdx) => {
          if (value != null) {
            return getColor(i, valueIdx, value);
          }
          return null;
        });
        barsColors.push({
          fill: fillOpacity < 1 ? colors.map((c) => c != null ? _grafana_data__WEBPACK_IMPORTED_MODULE_1__.colorManipulator.alpha(c, fillOpacity) : null) : colors,
          stroke: colors
        });
      }
    }
    labels = {};
    fontSize = opts.text?.valueSize ?? VALUE_MAX_FONT_SIZE;
    labelOffset = LABEL_OFFSET_MAX;
    vSpace = hSpace = Infinity;
  };
  const draw = (u) => {
    if (showValue === _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.VisibilityMode.Never || fontSize < VALUE_MIN_FONT_SIZE) {
      return;
    }
    u.ctx.save();
    u.ctx.fillStyle = theme.colors.text.primary;
    u.ctx.font = `${fontSize}px ${theme.typography.fontFamily}`;
    let curAlign = void 0, curBaseline = void 0;
    for (const didx in labels) {
      let first = true;
      for (const sidx in labels[didx]) {
        const label = labels[didx][sidx];
        const { text, x = 0, y = 0 } = label;
        let { value } = label;
        if (opts.negY?.[sidx] && value != null) {
          value *= -1;
        }
        let align = isXHorizontal ? "center" : value !== null && value < 0 ? "right" : "left";
        let baseline = isXHorizontal ? value !== null && value < 0 ? "top" : "alphabetic" : "middle";
        if (align !== curAlign) {
          u.ctx.textAlign = curAlign = align;
        }
        if (baseline !== curBaseline) {
          u.ctx.textBaseline = curBaseline = baseline;
        }
        if (showValue === _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.VisibilityMode.Always) {
          u.ctx.fillText(text, x, y);
        } else if (showValue === _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.VisibilityMode.Auto) {
          let { bbox } = label;
          let intersectsLabel = false;
          if (bbox == null) {
            intersectsLabel = true;
            label.hidden = true;
          } else if (!first) {
            for (const subsidx in labels[didx]) {
              if (subsidx === sidx) {
                continue;
              }
              const label2 = labels[didx][subsidx];
              const { bbox: bbox2, hidden } = label2;
              if (!hidden && bbox2 && (0,_quadtree__WEBPACK_IMPORTED_MODULE_9__.intersects)(bbox, bbox2)) {
                intersectsLabel = true;
                label.hidden = true;
                break;
              }
            }
          }
          first = false;
          !intersectsLabel && u.ctx.fillText(text, x, y);
        }
      }
    }
    u.ctx.restore();
  };
  let alignedTotals = null;
  function prepData(frames, stackingGroups) {
    alignedTotals = null;
    return (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_7__.preparePlotData2)(frames[0], stackingGroups, ({ totals }) => {
      alignedTotals = totals;
    });
  }
  return {
    cursor,
    // scale & axis opts
    xRange,
    xValues,
    xSplits,
    hFilter,
    barsBuilder,
    // hooks
    init,
    drawClear,
    draw,
    prepData
  };
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

/***/ "./public/app/plugins/panel/barchart/migrations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeToBarChartPanelMigrationHandler: () => (/* binding */ changeToBarChartPanelMigrationHandler)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/fieldReducer.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");



const changeToBarChartPanelMigrationHandler = (panel, prevPluginId, prevOptions) => {
  if (prevPluginId === "graph") {
    const graphOptions = prevOptions.angular;
    const fieldConfig = panel.fieldConfig ?? { defaults: {}, overrides: [] };
    if (graphOptions.xaxis?.mode === "series") {
      const transformations = panel.transformations || [];
      transformations.push(
        {
          id: "reduce",
          options: {
            reducers: getReducer(graphOptions.xaxis?.values)
          }
        },
        {
          id: "transpose",
          options: {}
        }
      );
      panel.transformations = transformations;
      fieldConfig.overrides.push({
        matcher: {
          id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byName,
          options: "Field"
        },
        properties: [
          {
            id: "custom.axisPlacement",
            value: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.AxisPlacement.Hidden
          }
        ]
      });
      panel.fieldConfig = fieldConfig;
      panel.options = {
        ...panel.options,
        groupWidth: 1
      };
    }
  }
  return {};
};
const getReducer = (reducers) => {
  const transformReducers = [];
  reducers?.forEach((reducer) => {
    if (!Object.values(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.ReducerID).includes(reducer)) {
      if (reducer === "current") {
        transformReducers.push(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.ReducerID.lastNotNull);
      } else if (reducer === "total") {
        transformReducers.push(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.ReducerID.sum);
      } else if (reducer === "avg") {
        transformReducers.push(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.ReducerID.mean);
      }
    } else {
      transformReducers.push(reducer);
    }
  });
  return reducers ? transformReducers : [_grafana_data__WEBPACK_IMPORTED_MODULE_1__.ReducerID.sum];
};


/***/ }),

/***/ "./public/app/plugins/panel/barchart/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/field/overrides/processors.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/panel.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/fieldOverrides.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/options/builder/axis.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/options/builder/hideSeries.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/options/builder/tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/options/builder/legend.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/options/builder/text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/config.ts");
/* harmony import */ var _timeseries_ThresholdsStyleEditor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/panel/timeseries/ThresholdsStyleEditor.tsx");
/* harmony import */ var _BarChartPanel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/panel/barchart/BarChartPanel.tsx");
/* harmony import */ var _TickSpacingEditor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/panel/barchart/TickSpacingEditor.tsx");
/* harmony import */ var _migrations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/plugins/panel/barchart/migrations.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/plugins/panel/barchart/panelcfg.gen.ts");
/* harmony import */ var _suggestions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/plugins/panel/barchart/suggestions.ts");












const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelPlugin(_BarChartPanel__WEBPACK_IMPORTED_MODULE_15__.BarChartPanel).setPanelChangeHandler(_migrations__WEBPACK_IMPORTED_MODULE_17__.changeToBarChartPanelMigrationHandler).useFieldConfig({
  standardOptions: {
    [_grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldConfigProperty.Color]: {
      settings: {
        byValueSupport: true,
        preferThresholdsMode: false
      },
      defaultValue: {
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldColorModeId.PaletteClassic
      }
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldConfigProperty.Links]: {
      settings: {
        showOneClick: true
      }
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldConfigProperty.Actions]: {
      hideFromDefaults: false
    }
  },
  useCustomConfig: (builder) => {
    const cfg = _panelcfg_gen__WEBPACK_IMPORTED_MODULE_18__.defaultFieldConfig;
    builder.addSliderInput({
      path: "lineWidth",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.name-line-width", "Line width"),
      defaultValue: cfg.lineWidth,
      settings: {
        min: 0,
        max: 10,
        step: 1
      }
    }).addSliderInput({
      path: "fillOpacity",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.name-fill-opacity", "Fill opacity"),
      defaultValue: cfg.fillOpacity,
      settings: {
        min: 0,
        max: 100,
        step: 1
      }
    }).addRadio({
      path: "gradientMode",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.name-gradient-mode", "Gradient mode"),
      defaultValue: (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.getGraphFieldOptions)().fillGradient[0].value,
      settings: {
        options: (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.getGraphFieldOptions)().fillGradient
      }
    });
    builder.addSelect({
      category: ["Graph styles"],
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.name-transform", "Transform"),
      path: "transform",
      settings: {
        options: [
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.transform-options.label-constant", "Constant"),
            value: _grafana_schema__WEBPACK_IMPORTED_MODULE_7__.GraphTransform.Constant,
            description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
              "barchart.config.transform-options.description-constant",
              "The first value will be shown as a constant line"
            )
          },
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.transform-options.label-negative-y", "Negative Y"),
            value: _grafana_schema__WEBPACK_IMPORTED_MODULE_7__.GraphTransform.NegativeY,
            description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
              "barchart.config.transform-options.description-negative-y",
              "Flip the results to negative values on the y axis"
            )
          }
        ],
        isClearable: true
      },
      hideFromDefaults: true
    });
    builder.addCustomEditor({
      id: "thresholdsStyle",
      path: "thresholdsStyle",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.name-show-thresholds", "Show thresholds"),
      category: [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.category-thresholds", "Thresholds")],
      defaultValue: { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_7__.GraphThresholdsStyleMode.Off },
      settings: {
        options: (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.getGraphFieldOptions)().thresholdsDisplayModes
      },
      editor: _timeseries_ThresholdsStyleEditor__WEBPACK_IMPORTED_MODULE_14__.ThresholdsStyleEditor,
      override: _timeseries_ThresholdsStyleEditor__WEBPACK_IMPORTED_MODULE_14__.ThresholdsStyleEditor,
      process: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.identityOverrideProcessor,
      shouldApply: () => true
    });
    _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.addAxisConfig(builder, cfg);
    _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.addHideFrom(builder);
  }
}).setPanelOptions((builder) => {
  builder.addFieldNamePicker({
    path: "xField",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.name-x-axis", "X Axis"),
    settings: {
      placeholderText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.placeholder-x-axis", "First string or time field")
    }
  }).addRadio({
    path: "orientation",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.name-orientation", "Orientation"),
    settings: {
      options: [
        { value: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.VizOrientation.Auto, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.orientation-options.label-auto", "Auto") },
        {
          value: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.VizOrientation.Horizontal,
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.orientation-options.label-horizontal", "Horizontal")
        },
        {
          value: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.VizOrientation.Vertical,
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.orientation-options.label-line-vertical", "Vertical")
        }
      ]
    },
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_18__.defaultOptions.orientation
  }).addSliderInput({
    path: "xTickLabelRotation",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.name-rotate-x-labels", "Rotate x-axis tick labels"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_18__.defaultOptions.xTickLabelRotation,
    settings: {
      min: -90,
      max: 90,
      step: 15,
      marks: { "-90": "-90\xB0", "-45": "-45\xB0", 0: "0\xB0", 45: "45\xB0", 90: "90\xB0" },
      included: false
    }
  }).addNumberInput({
    path: "xTickLabelMaxLength",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.name-x-label-max-length", "X-axis tick label max length"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
      "barchart.config.description-x-label-max-length",
      "X-axis labels will be truncated to the length provided"
    ),
    settings: {
      placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.placeholder-x-label-max-length", "None"),
      min: 0
    },
    showIf: (opts) => opts.xTickLabelRotation !== 0
  }).addCustomEditor({
    id: "xTickLabelSpacing",
    path: "xTickLabelSpacing",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.name-x-label-min-spacing", "X-axis labels minimum spacing"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_18__.defaultOptions.xTickLabelSpacing,
    editor: _TickSpacingEditor__WEBPACK_IMPORTED_MODULE_16__.TickSpacingEditor
  }).addRadio({
    path: "showValue",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.name-show-values", "Show values"),
    settings: {
      options: [
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_7__.VisibilityMode.Auto, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.show-values-options.label-auto", "Auto") },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_7__.VisibilityMode.Always, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.show-values-options.label-always", "Always") },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_7__.VisibilityMode.Never, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.show-values-options.label-never", "Never") }
      ]
    },
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_18__.defaultOptions.showValue
  }).addRadio({
    path: "stacking",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.name-stacking", "Stacking"),
    settings: {
      options: (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.getGraphFieldOptions)().stacking
    },
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_18__.defaultOptions.stacking
  }).addSliderInput({
    path: "groupWidth",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.name-group-width", "Group width"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_18__.defaultOptions.groupWidth,
    settings: {
      min: 0,
      max: 1,
      step: 0.01
    },
    showIf: (c, data) => {
      if (c.stacking && c.stacking !== _grafana_schema__WEBPACK_IMPORTED_MODULE_7__.StackingMode.None) {
        return false;
      }
      return countNumberFields(data) !== 1;
    }
  }).addSliderInput({
    path: "barWidth",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.name-bar-width", "Bar width"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_18__.defaultOptions.barWidth,
    settings: {
      min: 0,
      max: 1,
      step: 0.01
    }
  }).addSliderInput({
    path: "barRadius",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.name-bar-radius", "Bar radius"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_18__.defaultOptions.barRadius,
    settings: {
      min: 0,
      max: 0.5,
      step: 0.05
    }
  }).addBooleanSwitch({
    path: "fullHighlight",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.name-full-highlight", "Highlight full area on hover"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_18__.defaultOptions.fullHighlight,
    showIf: (c) => c.stacking === _grafana_schema__WEBPACK_IMPORTED_MODULE_7__.StackingMode.None
  });
  builder.addFieldNamePicker({
    path: "colorByField",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("barchart.config.name-color-by-field", "Color by field"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
      "barchart.config.description-color-by-field",
      "Use the color value for a sibling field to color each bar value."
    )
  });
  _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.addTooltipOptions(builder, false, false, _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.optsWithHideZeros);
  _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.addLegendOptions(builder);
  _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.addTextSizeOptions(builder, { withValue: true });
}).setSuggestionsSupplier(new _suggestions__WEBPACK_IMPORTED_MODULE_19__.BarChartSuggestionsSupplier());
function countNumberFields(data) {
  let count = 0;
  if (data) {
    for (const frame of data) {
      for (const field of frame.fields) {
        if (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.number) {
          count++;
        }
      }
    }
  }
  return count;
}


/***/ }),

/***/ "./public/app/plugins/panel/barchart/panelcfg.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultFieldConfig: () => (/* binding */ defaultFieldConfig),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");


const defaultOptions = {
  barRadius: 0,
  barWidth: 0.97,
  fullHighlight: false,
  groupWidth: 0.7,
  orientation: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.VizOrientation.Auto,
  showValue: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.VisibilityMode.Auto,
  stacking: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.StackingMode.None,
  xTickLabelRotation: 0,
  xTickLabelSpacing: 0
};
const defaultFieldConfig = {
  fillOpacity: 80,
  gradientMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.GraphGradientMode.None,
  lineWidth: 1
};


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


/***/ }),

/***/ "./public/app/plugins/panel/barchart/suggestions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarChartSuggestionsSupplier: () => (/* binding */ BarChartSuggestionsSupplier)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/panel.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var app_types_suggestions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/types/suggestions.ts");




class BarChartSuggestionsSupplier {
  getListWithDefaults(builder) {
    return builder.getListAppender({
      name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_2__.SuggestionName.BarChart,
      pluginId: "barchart",
      options: {
        showValue: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.VisibilityMode.Never,
        legend: {
          calcs: [],
          displayMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.LegendDisplayMode.List,
          showLegend: true,
          placement: "right"
        }
      },
      fieldConfig: {
        defaults: {
          unit: "short",
          custom: {}
        },
        overrides: []
      },
      cardOptions: {
        previewModifier: (s) => {
          s.options.barWidth = 0.8;
        }
      }
    });
  }
  getSuggestionsForData(builder) {
    const list = this.getListWithDefaults(builder);
    const { dataSummary } = builder;
    if (dataSummary.frameCount !== 1) {
      return;
    }
    if (!dataSummary.hasNumberField || !dataSummary.hasStringField) {
      return;
    }
    if (dataSummary.rowCountTotal > 50) {
      return;
    }
    list.append({
      name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_2__.SuggestionName.BarChart
    });
    if (dataSummary.numberFieldCount > 1) {
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_2__.SuggestionName.BarChartStacked,
        options: {
          stacking: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.StackingMode.Normal
        }
      });
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_2__.SuggestionName.BarChartStackedPercent,
        options: {
          stacking: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.StackingMode.Percent
        }
      });
    }
    list.append({
      name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_2__.SuggestionName.BarChartHorizontal,
      options: {
        orientation: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.VizOrientation.Horizontal
      }
    });
    if (dataSummary.numberFieldCount > 1) {
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_2__.SuggestionName.BarChartHorizontalStacked,
        options: {
          stacking: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.StackingMode.Normal,
          orientation: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.VizOrientation.Horizontal
        }
      });
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_2__.SuggestionName.BarChartHorizontalStackedPercent,
        options: {
          orientation: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.VizOrientation.Horizontal,
          stacking: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.StackingMode.Percent
        }
      });
    }
  }
}


/***/ }),

/***/ "./public/app/plugins/panel/barchart/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prepConfig: () => (/* binding */ prepConfig),
/* harmony export */   prepSeries: () => (/* binding */ prepSeries)
/* harmony export */ });
/* harmony import */ var uplot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/uplot/dist/uPlot.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/field/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/field/displayProcessor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/joinDataFrames.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-schema/src/raw/dashboard/x/dashboard_types.gen.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/config/UPlotConfigBuilder.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/types.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/utils/measureText.ts");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/config/UPlotAxisBuilder.ts");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/utils.ts");
/* harmony import */ var _timeseries_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/panel/timeseries/utils.ts");
/* harmony import */ var _bars__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/panel/barchart/bars.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/plugins/panel/barchart/panelcfg.gen.ts");











function prepSeries(frames, fieldConfig, stacking, theme, xFieldName, colorFieldName) {
  if (frames.length === 0 || frames.every((fr) => fr.length === 0)) {
    return {
      warn: "",
      series: [],
      _rest: []
    };
  }
  (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.cacheFieldDisplayNames)(frames);
  (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.decoupleHideFromState)(frames, fieldConfig);
  let frame = { ...frames[0] };
  const timeFieldIdx = frame.fields.findIndex((f) => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FieldType.time);
  if (timeFieldIdx >= 0 && frames.length > 1) {
    frame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.joinDataFrames)({ frames, keepDisplayNames: true }) ?? frame;
  }
  const xField = (
    // TODO: use matcher
    frame.fields.find((field) => field.state?.displayName === xFieldName || field.name === xFieldName) ?? frame.fields.find((field) => field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FieldType.string) ?? frame.fields[timeFieldIdx]
  );
  if (xField != null) {
    const fields = [xField];
    const _rest = [];
    const colorField = colorFieldName == null ? void 0 : frame.fields.find(
      // TODO: use matcher
      (field) => field.state?.displayName === colorFieldName || field.name === colorFieldName
    );
    frame.fields.forEach((field) => {
      if (field !== xField) {
        if (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FieldType.number && !field.config.custom?.hideFrom?.viz) {
          const field2 = {
            ...field,
            values: field.values.map((v) => Number.isFinite(v) ? v : null),
            // TODO: stacking should be moved from panel opts to fieldConfig (like TimeSeries) so we dont have to do this
            config: {
              ...field.config,
              custom: {
                ...field.config.custom,
                stacking: {
                  group: "_",
                  mode: stacking
                }
              }
            }
          };
          fields.push(field2);
        } else {
          _rest.push(field);
        }
      }
    });
    let warn = null;
    if (fields.length === 1) {
      warn = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("bar-chart.warn.missing-numeric", "No numeric fields found");
    }
    frame.fields = fields;
    const series = [frame];
    (0,_timeseries_utils__WEBPACK_IMPORTED_MODULE_15__.setClassicPaletteIdxs)(series, theme, 0);
    return {
      series,
      _rest,
      color: colorField,
      warn
    };
  }
  return {
    series: [],
    _rest: [],
    color: null,
    warn: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("bar-chart.warn.missing-series", "Bar charts require a string or time field")
  };
}
const prepConfig = ({ series, totalSeries, color, orientation, options, timeZone, theme }) => {
  let {
    showValue,
    groupWidth,
    barWidth,
    barRadius = 0,
    stacking,
    text,
    tooltip,
    xTickLabelRotation,
    xTickLabelMaxLength,
    xTickLabelSpacing = 0,
    legend,
    fullHighlight
  } = options;
  let frame = series[0];
  const builder = new _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.UPlotConfigBuilder();
  const formatters = frame.fields.map((f, i) => {
    if (stacking === _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.StackingMode.Percent) {
      return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getDisplayProcessor)({
        field: {
          ...f,
          config: {
            ...f.config,
            unit: "percentunit"
          }
        },
        theme
      });
    }
    return f.display;
  });
  const formatValue = (seriesIdx, value) => {
    return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.formattedValueToString)(formatters[seriesIdx](value));
  };
  const formatShortValue = (seriesIdx, value) => {
    return shortenValue(formatValue(seriesIdx, value), xTickLabelMaxLength);
  };
  const vizOrientation = getScaleOrientation(orientation);
  if (frame.fields.length === 2 && stacking === _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.StackingMode.None) {
    if (totalSeries === 1) {
      groupWidth = barWidth;
    }
    barWidth = 1;
  }
  const rawValue = (seriesIdx, valueIdx) => {
    return frame.fields[seriesIdx].values[valueIdx];
  };
  let getColor = void 0;
  let fillOpacity = 1;
  if (color != null) {
    const disp = color.display;
    fillOpacity = (color.config.custom.fillOpacity ?? 100) / 100;
    getColor = (seriesIdx, valueIdx) => disp(color.values[valueIdx]).color;
  } else {
    const hasPerBarColor = frame.fields.some((f) => {
      const fromThresholds = f.config.color?.mode === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.FieldColorModeId.Thresholds;
      return fromThresholds || f.config.mappings?.some((m) => {
        if (m.type === "value") {
          return Object.values(m.options).some((result) => result.color != null);
        }
        return m.options.result.color != null;
      });
    });
    if (hasPerBarColor) {
      let opacityField = frame.fields.find((f) => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FieldType.number);
      fillOpacity = (opacityField?.config?.custom?.fillOpacity ?? 100) / 100;
      getColor = (seriesIdx, valueIdx) => {
        let field = frame.fields[seriesIdx];
        return field.display(field.values[valueIdx]).color;
      };
    }
  }
  const opts = {
    xOri: vizOrientation.xOri,
    xDir: vizOrientation.xDir,
    groupWidth,
    barWidth,
    barRadius,
    stacking,
    rawValue,
    getColor,
    fillOpacity,
    formatValue,
    formatShortValue,
    timeZone,
    text,
    showValue,
    legend,
    xSpacing: xTickLabelSpacing,
    xTimeAuto: frame.fields[0]?.type === _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FieldType.time && !frame.fields[0].config.unit?.startsWith("time:"),
    negY: frame.fields.map((f) => f.config.custom?.transform === _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.GraphTransform.NegativeY),
    fullHighlight,
    hoverMulti: tooltip.mode === _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.TooltipDisplayMode.Multi
  };
  const config = (0,_bars__WEBPACK_IMPORTED_MODULE_16__.getConfig)(opts, theme);
  builder.setCursor(config.cursor);
  builder.addHook("init", config.init);
  builder.addHook("drawClear", config.drawClear);
  builder.addHook("draw", config.draw);
  if (xTickLabelRotation !== 0) {
    let lftSpace = 50;
    let btmSpace = vizOrientation.xOri === _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.ScaleOrientation.Horizontal ? 14 : 5;
    builder.setPadding(getRotationPadding(frame, xTickLabelRotation, xTickLabelMaxLength, lftSpace, btmSpace));
  }
  builder.setPrepData(config.prepData);
  builder.addScale({
    scaleKey: "x",
    isTime: false,
    range: config.xRange,
    distribution: _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.ScaleDistribution.Ordinal,
    orientation: vizOrientation.xOri,
    direction: vizOrientation.xDir
  });
  const xFieldAxisPlacement = frame.fields[0]?.config.custom?.axisPlacement !== _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.AxisPlacement.Hidden ? vizOrientation.xOri === _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.ScaleOrientation.Horizontal ? _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.AxisPlacement.Bottom : _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.AxisPlacement.Left : _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.AxisPlacement.Hidden;
  const xFieldAxisShow = frame.fields[0]?.config.custom?.axisPlacement !== _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.AxisPlacement.Hidden;
  builder.addAxis({
    scaleKey: "x",
    isTime: false,
    placement: xFieldAxisPlacement,
    label: frame.fields[0]?.config.custom?.axisLabel,
    splits: config.xSplits,
    filter: vizOrientation.xOri === 0 ? config.hFilter : void 0,
    values: config.xValues,
    timeZone,
    grid: { show: false },
    ticks: { show: false },
    gap: 15,
    tickLabelRotation: vizOrientation.xOri === 0 ? xTickLabelRotation * -1 : 0,
    theme,
    show: xFieldAxisShow
  });
  for (let i = 1; i < frame.fields.length; i++) {
    const field = frame.fields[i];
    const customConfig = { ..._panelcfg_gen__WEBPACK_IMPORTED_MODULE_17__.defaultFieldConfig, ...field.config.custom };
    const scaleKey = field.config.unit || _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.FIXED_UNIT;
    const colorMode = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getFieldColorModeForField)(field);
    const scaleColor = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getFieldSeriesColor)(field, theme);
    const seriesColor = scaleColor.color;
    let softMin = customConfig.axisSoftMin;
    let softMax = customConfig.axisSoftMax;
    if (softMin == null && field.config.min == null) {
      softMin = 0;
    }
    if (softMax == null && field.config.max == null) {
      softMax = 0;
    }
    if (customConfig.thresholdsStyle && field.config.thresholds) {
      const thresholdDisplay = customConfig.thresholdsStyle.mode ?? _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.GraphThresholdsStyleMode.Off;
      if (thresholdDisplay !== _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.GraphThresholdsStyleMode.Off) {
        builder.addThresholds({
          config: customConfig.thresholdsStyle,
          thresholds: field.config.thresholds,
          scaleKey,
          theme,
          hardMin: field.config.min,
          hardMax: field.config.max,
          softMin: customConfig.axisSoftMin,
          softMax: customConfig.axisSoftMax
        });
      }
    }
    builder.addSeries({
      scaleKey,
      pxAlign: true,
      lineWidth: customConfig.lineWidth,
      lineColor: seriesColor,
      fillOpacity: customConfig.fillOpacity,
      theme,
      colorMode,
      pathBuilder: config.barsBuilder,
      show: !customConfig.hideFrom?.viz,
      gradientMode: customConfig.gradientMode,
      thresholds: field.config.thresholds,
      hardMin: field.config.min,
      hardMax: field.config.max,
      softMin: customConfig.axisSoftMin,
      softMax: customConfig.axisSoftMax
      // The following properties are not used in the uPlot config, but are utilized as transport for legend config
      // PlotLegend currently gets unfiltered DataFrame[], so index must be into that field array, not the prepped frame's which we're iterating here
      // dataFrameFieldIndex: {
      //   fieldIndex: legendOrdered
      //     ? i
      //     : allFrames[0].fields.findIndex(
      //         (f) => f.type === FieldType.number && f.state?.seriesIndex === seriesIndex - 1
      //       ),
      //   frameIndex: 0,
      // },
    });
    builder.addScale({
      scaleKey,
      min: field.config.min,
      max: field.config.max,
      softMin,
      softMax,
      centeredZero: customConfig.axisCenteredZero,
      orientation: vizOrientation.yOri,
      direction: vizOrientation.yDir,
      distribution: customConfig.scaleDistribution?.type,
      log: customConfig.scaleDistribution?.log,
      decimals: field.config.decimals
    });
    if (customConfig.axisPlacement !== _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.AxisPlacement.Hidden) {
      let placement = customConfig.axisPlacement;
      if (!placement || placement === _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.AxisPlacement.Auto) {
        placement = _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.AxisPlacement.Left;
      }
      if (vizOrientation.xOri === 1) {
        if (placement === _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.AxisPlacement.Left) {
          placement = _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.AxisPlacement.Bottom;
        }
        if (placement === _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.AxisPlacement.Right) {
          placement = _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.AxisPlacement.Top;
        }
      }
      let axisOpts = {
        scaleKey,
        label: customConfig.axisLabel,
        size: customConfig.axisWidth,
        placement,
        formatValue: (v, decimals) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.formattedValueToString)(field.display(v, decimals)),
        filter: vizOrientation.yOri === 0 ? config.hFilter : void 0,
        tickLabelRotation: vizOrientation.xOri === 1 ? xTickLabelRotation * -1 : 0,
        theme,
        grid: { show: customConfig.axisGridShow },
        decimals: field.config.decimals
      };
      if (customConfig.axisBorderShow) {
        axisOpts.border = {
          show: true
        };
      }
      if (customConfig.axisColorMode === _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.AxisColorMode.Series) {
        axisOpts.color = seriesColor;
      }
      builder.addAxis(axisOpts);
    }
  }
  let stackingGroups = (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_14__.getStackingGroups)(frame);
  builder.setStackingGroups(stackingGroups);
  return {
    builder,
    prepData: (_series, _color) => {
      series = _series;
      frame = series[0];
      color = _color;
      return builder.prepData(series);
    }
  };
};
function shortenValue(value, length) {
  if (value.length > length) {
    return value.substring(0, length).concat("...");
  } else {
    return value;
  }
}
function getRotationPadding(frame, rotateLabel, valueMaxLength, lftSpace = 0, btmSpace = 0) {
  const values = frame.fields[0].values;
  const fontSize = _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_13__.UPLOT_AXIS_FONT_SIZE;
  const displayProcessor = frame.fields[0].display;
  const getProcessedValue = (i) => {
    return displayProcessor ? displayProcessor(values[i]) : values[i];
  };
  let maxLength = 0;
  for (let i = 0; i < values.length; i++) {
    let size = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.measureText)(shortenValue((0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.formattedValueToString)(getProcessedValue(i)), valueMaxLength), fontSize);
    maxLength = size.width > maxLength ? size.width : maxLength;
  }
  const paddingRight = rotateLabel > 0 ? Math.cos(rotateLabel * Math.PI / 180) * (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.measureText)(
    shortenValue((0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.formattedValueToString)(getProcessedValue(values.length - 1)), valueMaxLength),
    fontSize
  ).width : 0;
  const paddingLeft = rotateLabel < 0 ? Math.cos(rotateLabel * -1 * Math.PI / 180) * (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.measureText)(shortenValue((0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.formattedValueToString)(getProcessedValue(0)), valueMaxLength), fontSize).width : 0;
  const paddingBottom = Math.sin((rotateLabel >= 0 ? rotateLabel : rotateLabel * -1) * Math.PI / 180) * maxLength - btmSpace;
  return [
    Math.round(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_13__.UPLOT_AXIS_FONT_SIZE * uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio),
    paddingRight,
    paddingBottom,
    Math.max(0, paddingLeft - lftSpace)
  ];
}
function getScaleOrientation(orientation) {
  if (orientation === _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.VizOrientation.Vertical) {
    return {
      xOri: _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.ScaleOrientation.Horizontal,
      xDir: _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.ScaleDirection.Right,
      yOri: _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.ScaleOrientation.Vertical,
      yDir: _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.ScaleDirection.Up
    };
  }
  return {
    xOri: _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.ScaleOrientation.Vertical,
    xDir: _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.ScaleDirection.Down,
    yOri: _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.ScaleOrientation.Horizontal,
    yDir: _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.ScaleDirection.Right
  };
}


/***/ }),

/***/ "./public/app/plugins/panel/status-history/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDataLinks: () => (/* binding */ getDataLinks),
/* harmony export */   getFieldActions: () => (/* binding */ getFieldActions)
/* harmony export */ });
/* harmony import */ var app_features_actions_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/actions/utils.ts");


const getDataLinks = (field, rowIdx) => {
  const links = [];
  if ((field.config.links?.length ?? 0) > 0 && field.getLinks != null) {
    const v = field.values[rowIdx];
    const disp = field.display ? field.display(v) : { text: `${v}`, numeric: +v };
    const linkLookup = /* @__PURE__ */ new Set();
    field.getLinks({ calculatedValue: disp, valueRowIndex: rowIdx }).forEach((link) => {
      const key = `${link.title}/${link.href}`;
      if (!linkLookup.has(key)) {
        links.push(link);
        linkLookup.add(key);
      }
    });
  }
  return links;
};
const getFieldActions = (dataFrame, field, replaceVars, rowIndex, visualizationType) => {
  const actions = [];
  if (field.state?.scopedVars) {
    const actionLookup = /* @__PURE__ */ new Set();
    const actionsModel = (0,app_features_actions_utils__WEBPACK_IMPORTED_MODULE_0__.getActions)(
      dataFrame,
      field,
      field.state.scopedVars,
      replaceVars,
      field.config.actions ?? [],
      {
        valueRowIndex: rowIndex
      },
      visualizationType
    );
    actionsModel.forEach((action) => {
      const key = `${action.title}`;
      if (!actionLookup.has(key)) {
        actions.push(action);
        actionLookup.add(key);
      }
    });
  }
  return actions;
};


/***/ }),

/***/ "./public/app/plugins/panel/timeseries/TimeSeriesTooltip.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeSeriesTooltip: () => (/* binding */ TimeSeriesTooltip)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/context/plugins/usePluginContext.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipContent.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipFooter.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipHeader.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipWrapper.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/utils.ts");
/* harmony import */ var _status_history_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/status-history/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/panel/timeseries/utils.ts");







const TimeSeriesTooltip = ({
  series,
  _rest,
  dataIdxs,
  seriesIdx,
  mode = _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.TooltipDisplayMode.Single,
  sortOrder = _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.SortOrder.None,
  isPinned,
  annotate,
  maxHeight,
  replaceVariables = (str) => str,
  dataLinks,
  hideZeros,
  adHocFilters,
  canExecuteActions,
  compareDiffMs
}) => {
  const pluginContext = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.usePluginContext)();
  const xField = series.fields[0];
  let xVal = xField.values[dataIdxs[0]];
  if (compareDiffMs != null && xField.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.time) {
    xVal += compareDiffMs[seriesIdx ?? 1];
  }
  const xDisp = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.formattedValueToString)(xField.display(xVal));
  const contentItems = (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_9__.getContentItems)(
    series.fields,
    xField,
    dataIdxs,
    seriesIdx,
    mode,
    sortOrder,
    (field) => field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.number || field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.enum,
    hideZeros,
    _rest
  );
  let footer;
  if (seriesIdx != null) {
    const field = series.fields[seriesIdx];
    const hasOneClickLink = dataLinks.some((dataLink) => dataLink.oneClick === true);
    if (isPinned || hasOneClickLink) {
      const visualizationType = pluginContext?.meta?.id ?? "timeseries";
      const dataIdx = dataIdxs[seriesIdx];
      const actions = canExecuteActions ? (0,_status_history_utils__WEBPACK_IMPORTED_MODULE_10__.getFieldActions)(series, field, replaceVariables, dataIdx, visualizationType) : [];
      footer = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_6__.VizTooltipFooter, { dataLinks, actions, annotate, adHocFilters });
    }
  }
  const headerItem = {
    label: xField.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.time ? "" : xField.state?.displayName ?? xField.name,
    value: xDisp
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__.VizTooltipWrapper, { children: [
    headerItem != null && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_7__.VizTooltipHeader, { item: headerItem, isPinned }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_5__.VizTooltipContent,
      {
        items: contentItems,
        isPinned,
        scrollable: (0,_utils__WEBPACK_IMPORTED_MODULE_11__.isTooltipScrollable)({ mode, maxHeight }),
        maxHeight
      }
    ),
    footer
  ] });
};


/***/ }),

/***/ "./public/app/plugins/panel/timeseries/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezones: () => (/* binding */ getTimezones),
/* harmony export */   isTooltipScrollable: () => (/* binding */ isTooltipScrollable),
/* harmony export */   prepareGraphableFields: () => (/* binding */ prepareGraphableFields),
/* harmony export */   setClassicPaletteIdxs: () => (/* binding */ setClassicPaletteIdxs)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/field/displayProcessor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/nulls/nullInsertThreshold.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/nulls/nullToValue.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data_internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/convertFieldType.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/internal.ts");





function reEnumFields(frames) {
  let allTextsByKey = /* @__PURE__ */ new Map();
  let frames2 = frames.map((frame) => {
    return {
      ...frame,
      fields: frame.fields.map((field) => {
        if (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.enum) {
          let scaleKey = (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__.buildScaleKey)(field.config, field.type);
          let allTexts = allTextsByKey.get(scaleKey);
          if (!allTexts) {
            allTexts = [];
            allTextsByKey.set(scaleKey, allTexts);
          }
          let idxs = field.values.toArray().slice();
          let txts = field.config.type.enum.text;
          if (allTexts.length > 0) {
            for (let i = 0; i < idxs.length; i++) {
              idxs[i] += allTexts.length;
            }
          }
          allTexts.push(...txts);
          field.config.type.enum.text = allTexts;
          return {
            ...field,
            values: idxs
          };
        }
        return field;
      })
    };
  });
  return frames2;
}
function prepareGraphableFields(series, theme, timeRange, xNumFieldIdx) {
  if (!series?.length) {
    return null;
  }
  (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.cacheFieldDisplayNames)(series);
  let useNumericX = xNumFieldIdx != null;
  if (xNumFieldIdx != null && xNumFieldIdx > 0) {
    series = [
      {
        ...series[0],
        fields: [series[0].fields[xNumFieldIdx], ...series[0].fields.filter((f, i) => i !== xNumFieldIdx)]
      }
    ];
  }
  for (let frame of series) {
    for (let field of frame.fields) {
      if (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.time && typeof field.values[0] !== "number") {
        field.values = (0,_grafana_data_internal__WEBPACK_IMPORTED_MODULE_6__.convertFieldType)(field, { destinationType: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.time }).values;
      }
    }
  }
  let enumFieldsCount = 0;
  loopy: for (let frame of series) {
    for (let field of frame.fields) {
      if (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.enum && ++enumFieldsCount > 1) {
        series = reEnumFields(series);
        break loopy;
      }
    }
  }
  let copy;
  const frames = [];
  for (let frame of series) {
    const fields = [];
    let hasTimeField = false;
    let hasValueField = false;
    let nulledFrame = useNumericX ? frame : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.applyNullInsertThreshold)({
      frame,
      refFieldPseudoMin: timeRange?.from.valueOf(),
      refFieldPseudoMax: timeRange?.to.valueOf()
    });
    const frameFields = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.nullToValue)(nulledFrame).fields;
    for (let fieldIdx = 0; fieldIdx < (frameFields?.length || 0); fieldIdx++) {
      const field = frameFields[fieldIdx];
      switch (field.type) {
        case _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.time:
          hasTimeField = true;
          fields.push(field);
          break;
        case _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.number:
          hasValueField = useNumericX ? fieldIdx > 0 : true;
          copy = {
            ...field,
            values: field.values.map((v) => {
              if (!(Number.isFinite(v) || v == null)) {
                return null;
              }
              return v;
            })
          };
          fields.push(copy);
          break;
        // ok
        case _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.enum:
          hasValueField = true;
        case _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.string:
          copy = {
            ...field,
            values: field.values
          };
          fields.push(copy);
          break;
        // ok
        case _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.boolean:
          hasValueField = true;
          const custom = field.config?.custom ?? {};
          const config = {
            ...field.config,
            max: 1,
            min: 0,
            custom: { ...custom }
          };
          if (config.custom.lineInterpolation !== _grafana_schema__WEBPACK_IMPORTED_MODULE_7__.LineInterpolation.StepBefore) {
            config.custom.lineInterpolation = _grafana_schema__WEBPACK_IMPORTED_MODULE_7__.LineInterpolation.StepAfter;
          }
          copy = {
            ...field,
            config,
            type: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.number,
            values: field.values.map((v) => {
              if (v == null) {
                return v;
              }
              return Boolean(v) ? 1 : 0;
            })
          };
          if (!(0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.isBooleanUnit)(config.unit)) {
            config.unit = "bool";
            copy.display = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getDisplayProcessor)({ field: copy, theme });
          }
          fields.push(copy);
          break;
      }
    }
    if ((useNumericX || hasTimeField) && hasValueField) {
      frames.push({
        ...frame,
        length: nulledFrame.length,
        fields
      });
    }
  }
  if (frames.length) {
    setClassicPaletteIdxs(frames, theme, 0);
    matchEnumColorToSeriesColor(frames, theme);
    return frames;
  }
  return null;
}
const matchEnumColorToSeriesColor = (frames, theme) => {
  const { palette } = theme.visualization;
  for (const frame of frames) {
    for (const field of frame.fields) {
      if (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.enum) {
        const namedColor = palette[field.state?.seriesIndex % palette.length];
        const hexColor = theme.visualization.getColorByName(namedColor);
        const enumConfig = field.config.type.enum;
        enumConfig.color = Array(enumConfig.text.length).fill(hexColor);
        field.display = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getDisplayProcessor)({ field, theme });
      }
    }
  }
};
const setClassicPaletteIdxs = (frames, theme, skipFieldIdx) => {
  let seriesIndex = 0;
  const updateFieldDisplay = (field, idx) => {
    field.state = { ...field.state, seriesIndex: idx };
    field.display = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getDisplayProcessor)({ field, theme });
  };
  const shouldProcessField = (field, fieldIdx) => {
    return fieldIdx !== skipFieldIdx && (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.number || field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.boolean || field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.enum);
  };
  const mainFramesByRefId = /* @__PURE__ */ new Map();
  for (const frame of frames) {
    if (!frame.meta?.timeCompare?.isTimeShiftQuery && frame.refId) {
      if (!mainFramesByRefId.has(frame.refId)) {
        mainFramesByRefId.set(frame.refId, []);
      }
      mainFramesByRefId.get(frame.refId).push(frame);
    }
  }
  const compareIndicesByRefId = /* @__PURE__ */ new Map();
  for (const frame of frames) {
    const isCompareFrame = frame.meta?.timeCompare?.isTimeShiftQuery;
    if (isCompareFrame) {
      const baseRefId = frame.refId?.replace("-compare", "");
      if (baseRefId) {
        let compareIndex = compareIndicesByRefId.get(baseRefId) ?? 0;
        compareIndicesByRefId.set(baseRefId, compareIndex + 1);
        const mainFrames = mainFramesByRefId.get(baseRefId);
        const mainFrame = mainFrames?.[compareIndex];
        if (mainFrame && mainFrame.fields.length === frame.fields.length) {
          frame.fields.forEach((field, fieldIdx) => {
            if (shouldProcessField(field, fieldIdx)) {
              const mainField = mainFrame.fields[fieldIdx];
              updateFieldDisplay(field, mainField.state?.seriesIndex ?? seriesIndex++);
            }
          });
        } else {
          frame.fields.forEach((field, fieldIdx) => {
            if (shouldProcessField(field, fieldIdx)) {
              updateFieldDisplay(field, seriesIndex++);
            }
          });
        }
      } else {
        frame.fields.forEach((field, fieldIdx) => {
          if (shouldProcessField(field, fieldIdx)) {
            updateFieldDisplay(field, seriesIndex++);
          }
        });
      }
    } else {
      frame.fields.forEach((field, fieldIdx) => {
        if (shouldProcessField(field, fieldIdx)) {
          updateFieldDisplay(field, seriesIndex++);
        }
      });
    }
  }
};
function getTimezones(timezones, defaultTimezone) {
  if (!timezones || !timezones.length) {
    return [defaultTimezone];
  }
  return timezones.map((v) => v?.length ? v : defaultTimezone);
}
const isTooltipScrollable = (tooltipOptions) => {
  return tooltipOptions.mode === _grafana_schema__WEBPACK_IMPORTED_MODULE_7__.TooltipDisplayMode.Multi && tooltipOptions.maxHeight != null;
};


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
//# sourceMappingURL=barChartPanel.d53374b93d835222a1c8.js.map