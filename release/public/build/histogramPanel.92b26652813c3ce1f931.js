"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["histogramPanel"],{

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

/***/ "./public/app/plugins/panel/histogram/Histogram.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Histogram: () => (/* binding */ Histogram),
/* harmony export */   getBucketSize: () => (/* binding */ getBucketSize),
/* harmony export */   getBucketSize1: () => (/* binding */ getBucketSize1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uplot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/uplot/dist/uPlot.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/field/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/utils/numbers.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/histogram.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/VizLayout/VizLayout.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/config/UPlotConfigBuilder.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/config/UPlotAxisBuilder.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/Plot.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/PlotLegend.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/utils/measureText.ts");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/utils.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/panel/histogram/panelcfg.gen.ts");









function incrRoundDn(num, incr) {
  return Math.floor(num / incr) * incr;
}
function incrRoundUp(num, incr) {
  return Math.ceil(num / incr) * incr;
}
function getBucketSize(frame) {
  return frame.fields[0].type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.string ? 1 : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.roundDecimals)(frame.fields[1].values[0] - frame.fields[0].values[0], 9);
}
function getBucketSize1(frame) {
  return frame.fields[0].type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.string ? 1 : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.roundDecimals)(frame.fields[1].values[1] - frame.fields[0].values[1], 9);
}
const prepConfig = (frame, theme) => {
  let { min: xScaleMin, max: xScaleMax } = frame.fields[2].config;
  let builder = new _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.UPlotConfigBuilder();
  let isOrdinalX = frame.fields[0].type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.string;
  let bucketSize = getBucketSize(frame);
  let bucketSize1 = getBucketSize1(frame);
  let bucketFactor = bucketSize1 / bucketSize;
  let useLogScale = bucketSize1 !== bucketSize;
  let xSplits = (u, axisIdx, scaleMin, scaleMax, foundIncr, foundSpace) => {
    let minSpace = u.axes[axisIdx]._space;
    let bucketWidth = u.valToPos(u.data[0][0] + bucketSize, "x") - u.valToPos(u.data[0][0], "x");
    let firstSplit = incrRoundDn(xScaleMin ?? u.data[0][0], bucketSize);
    let lastSplit = incrRoundUp(xScaleMax ?? u.data[0][u.data[0].length - 1] + bucketSize, bucketSize);
    let splits = [];
    let skip = Math.ceil(minSpace / bucketWidth);
    for (let i = 0, s = firstSplit; s <= lastSplit; i++, s += bucketSize) {
      !(i % skip) && splits.push(s);
    }
    return splits;
  };
  builder.addScale({
    scaleKey: "x",
    // bukkits
    isTime: false,
    distribution: isOrdinalX ? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.ScaleDistribution.Ordinal : useLogScale ? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.ScaleDistribution.Log : _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.ScaleDistribution.Linear,
    log: 2,
    orientation: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.ScaleOrientation.Horizontal,
    direction: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.ScaleDirection.Right,
    range: useLogScale ? (u, wantedMin, wantedMax) => {
      return uplot__WEBPACK_IMPORTED_MODULE_2__["default"].rangeLog(wantedMin, wantedMax * bucketFactor, 2, true);
    } : (u, wantedMin, wantedMax) => {
      if (xScaleMin != null) {
        wantedMin = xScaleMin;
      }
      if (xScaleMax != null) {
        wantedMax = xScaleMax;
      }
      let fullRangeMax = u.data[0][u.data[0].length - 1];
      wantedMin = incrRoundUp(wantedMin, bucketSize);
      wantedMax = !isOrdinalX && wantedMax === fullRangeMax ? wantedMax + bucketSize : incrRoundDn(wantedMax, bucketSize);
      return [wantedMin, wantedMax];
    }
  });
  builder.addScale({
    scaleKey: "y",
    // counts
    isTime: false,
    distribution: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.ScaleDistribution.Linear,
    orientation: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.ScaleOrientation.Vertical,
    direction: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.ScaleDirection.Up,
    softMin: 0
  });
  const fmt = frame.fields[0].display;
  const xAxisFormatter = (v) => {
    return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.formattedValueToString)(fmt(v));
  };
  builder.addAxis({
    scaleKey: "x",
    isTime: false,
    placement: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.AxisPlacement.Bottom,
    incrs: isOrdinalX ? [1] : useLogScale ? void 0 : _grafana_data__WEBPACK_IMPORTED_MODULE_5__.histogramBucketSizes,
    splits: useLogScale || isOrdinalX ? void 0 : xSplits,
    values: isOrdinalX ? (u, splits) => splits : (u, splits) => {
      const tickLabels = splits.map(xAxisFormatter);
      const maxWidth = tickLabels.reduce(
        (curMax, label) => Math.max((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.measureText)(label, _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.UPLOT_AXIS_FONT_SIZE).width, curMax),
        0
      );
      const labelSpacing = 10;
      const maxCount = u.bbox.width / ((maxWidth + labelSpacing) * devicePixelRatio);
      const keepMod = Math.ceil(tickLabels.length / maxCount);
      return tickLabels.map((label, i) => i % keepMod === 0 ? label : null);
    },
    //incrs: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((mult) => mult * bucketSize),
    //splits: config.xSplits,
    //values: config.xValues,
    //grid: false,
    //ticks: false,
    //gap: 15,
    theme
  });
  let countField = frame.fields[2];
  let dispY = countField.display;
  builder.addAxis({
    scaleKey: "y",
    isTime: false,
    placement: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.AxisPlacement.Left,
    formatValue: (v, decimals) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.formattedValueToString)(dispY(v, decimals)),
    //splits: config.xSplits,
    //values: config.xValues,
    //grid: false,
    //ticks: false,
    //gap: 15,
    theme
  });
  builder.setCursor({
    points: { show: false },
    drag: {
      x: true,
      y: false,
      setScale: true
    },
    dataIdx: (u, _, closestIdx, xValue) => isOrdinalX ? Math.floor(xValue) : xValue < u.data[0][closestIdx] ? closestIdx - 1 : closestIdx,
    focus: {
      prox: 1e6,
      bias: 1
    }
  });
  let stackingGroups = (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_15__.getStackingGroups)(xMinOnlyFrame(frame));
  builder.setStackingGroups(stackingGroups);
  let pathBuilder = uplot__WEBPACK_IMPORTED_MODULE_2__["default"].paths.bars({ align: 1, size: [1, Infinity] });
  let seriesIndex = 0;
  for (let i = 2; i < frame.fields.length; i++) {
    const field = frame.fields[i];
    field.state = field.state ?? {};
    field.state.seriesIndex = seriesIndex++;
    const customConfig = { ..._panelcfg_gen__WEBPACK_IMPORTED_MODULE_16__.defaultFieldConfig, ...field.config.custom };
    const scaleKey = "y";
    const colorMode = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getFieldColorModeForField)(field);
    const scaleColor = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getFieldSeriesColor)(field, theme);
    const seriesColor = scaleColor.color;
    builder.addSeries({
      scaleKey,
      lineWidth: customConfig.lineWidth,
      lineColor: seriesColor,
      //lineStyle: customConfig.lineStyle,
      fillOpacity: customConfig.fillOpacity,
      theme,
      colorMode,
      pathBuilder,
      //pointsBuilder: config.drawPoints,
      show: !customConfig.hideFrom?.viz,
      gradientMode: customConfig.gradientMode,
      thresholds: field.config.thresholds,
      hardMin: field.config.min,
      hardMax: field.config.max,
      softMin: customConfig.axisSoftMin,
      softMax: customConfig.axisSoftMax,
      // The following properties are not used in the uPlot config, but are utilized as transport for legend config
      dataFrameFieldIndex: field.state.origin
    });
  }
  return builder;
};
const xMinOnlyFrame = (frame) => ({
  ...frame,
  fields: frame.fields.filter((f) => f.name !== _grafana_data__WEBPACK_IMPORTED_MODULE_5__.histogramFrameBucketMaxFieldName)
});
const preparePlotData = (builder, xMinOnlyFrame2) => {
  for (let i = 1; i < xMinOnlyFrame2.fields.length; i++) {
    let counts = xMinOnlyFrame2.fields[i].values;
    for (let j = 0; j < counts.length; j++) {
      if (counts[j] === 0) {
        counts[j] = null;
      }
    }
  }
  return (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_15__.preparePlotData2)(xMinOnlyFrame2, builder.getStackingGroups());
};
class Histogram extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = this.prepState(props);
  }
  prepState(props, withConfig = true) {
    const { alignedFrame } = props;
    const config = withConfig ? prepConfig(alignedFrame, this.props.theme) : this.state.config;
    const xMinOnly = xMinOnlyFrame(alignedFrame);
    const alignedData = preparePlotData(config, xMinOnly);
    return {
      alignedFrame,
      alignedData,
      config,
      xMinOnlyFrame: xMinOnly
    };
  }
  renderLegend(config) {
    const { legend } = this.props;
    if (!config || legend.showLegend === false) {
      return null;
    }
    const frames = this.props.options.combine ? [this.props.alignedFrame] : this.props.rawSeries;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.PlotLegend, { data: frames, config, maxHeight: "35%", maxWidth: "60%", ...legend });
  }
  componentDidUpdate(prevProps) {
    const { structureRev, alignedFrame, bucketSize, bucketCount } = this.props;
    if (alignedFrame !== prevProps.alignedFrame) {
      const shouldReconfig = this.state.config == null || bucketCount !== prevProps.bucketCount || bucketSize !== prevProps.bucketSize || this.props.options !== prevProps.options || this.state.config === void 0 || structureRev !== prevProps.structureRev || !structureRev;
      const newState = this.prepState(this.props, shouldReconfig);
      this.setState(newState);
    }
  }
  render() {
    const { width, height, children, alignedFrame } = this.props;
    const { config } = this.state;
    if (!config) {
      return null;
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.VizLayout, { width, height, legend: this.renderLegend(config), children: (vizWidth, vizHeight) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.UPlotChart, { config: this.state.config, data: this.state.alignedData, width: vizWidth, height: vizHeight, children: children ? children(config, alignedFrame, this.state.xMinOnlyFrame) : null }) });
  }
}


/***/ }),

/***/ "./public/app/plugins/panel/histogram/HistogramPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistogramPanel: () => (/* binding */ HistogramPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/histogram.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/dataFrameTypes.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/plugins/TooltipPlugin2.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Histogram__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/histogram/Histogram.tsx");
/* harmony import */ var _HistogramTooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/histogram/HistogramTooltip.tsx");









const HistogramPanel = ({ data, options, width, height }) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useTheme2)();
  const histogram = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!data.series.length) {
      return void 0;
    }
    data.series.forEach((frame, frameIndex) => {
      frame.fields.forEach((field, fieldIndex) => {
        field.state = {
          ...field.state,
          origin: {
            frameIndex,
            fieldIndex
          }
        };
      });
    });
    (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.cacheFieldDisplayNames)(data.series);
    if (data.series.length === 1 || data.series.every(
      (frame) => frame.meta?.type === _grafana_data__WEBPACK_IMPORTED_MODULE_4__.DataFrameType.HeatmapCells || frame.meta?.type === _grafana_data__WEBPACK_IMPORTED_MODULE_4__.DataFrameType.HeatmapRows
    )) {
      const histograms = data.series.map((frame) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getHistogramFields)(frame)).filter((hist2) => hist2 != null);
      if (histograms.length) {
        return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.histogramFieldsToFrame)((0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.joinHistograms)(histograms), theme);
      }
    }
    const hist = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.buildHistogram)(data.series, options, theme);
    if (!hist) {
      return void 0;
    }
    return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.histogramFieldsToFrame)(hist, theme);
  }, [data.series, options, theme]);
  if (!histogram || !histogram.fields.length) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "panel-empty", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "histogram.histogram-panel.no-histogram-found-in-response", children: "No histogram found in response" }) }) });
  }
  const bucketSize = (0,_Histogram__WEBPACK_IMPORTED_MODULE_9__.getBucketSize)(histogram);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _Histogram__WEBPACK_IMPORTED_MODULE_9__.Histogram,
    {
      options,
      theme,
      legend: options.legend,
      rawSeries: data.series,
      structureRev: data.structureRev,
      width,
      height,
      alignedFrame: histogram,
      bucketSize,
      bucketCount: options.bucketCount,
      children: (builder, alignedFrame, xMinOnlyFrame) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: options.tooltip.mode !== _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TooltipDisplayMode.None && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.TooltipPlugin2,
          {
            config: builder,
            hoverMode: options.tooltip.mode === _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TooltipDisplayMode.Single ? _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.TooltipHoverMode.xOne : _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.TooltipHoverMode.xAll,
            render: (u, dataIdxs, seriesIdx, isPinned = false) => {
              return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _HistogramTooltip__WEBPACK_IMPORTED_MODULE_10__.HistogramTooltip,
                {
                  series: histogram,
                  xMinOnlyFrame,
                  dataIdxs,
                  seriesIdx,
                  mode: options.tooltip.mode,
                  sortOrder: options.tooltip.sort,
                  isPinned,
                  maxHeight: options.tooltip.maxHeight
                }
              );
            },
            maxWidth: options.tooltip.maxWidth
          }
        ) });
      }
    }
  );
};


/***/ }),

/***/ "./public/app/plugins/panel/histogram/HistogramTooltip.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistogramTooltip: () => (/* binding */ HistogramTooltip)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_schema_dist_esm_common_common_gen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipContent.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipFooter.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipHeader.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipWrapper.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/utils.ts");
/* harmony import */ var _status_history_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/status-history/utils.ts");
/* harmony import */ var _timeseries_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/timeseries/utils.ts");








const HistogramTooltip = ({
  series,
  xMinOnlyFrame,
  dataIdxs,
  seriesIdx,
  mode = _grafana_schema_dist_esm_common_common_gen__WEBPACK_IMPORTED_MODULE_3__.TooltipDisplayMode.Single,
  sortOrder = _grafana_schema_dist_esm_common_common_gen__WEBPACK_IMPORTED_MODULE_3__.SortOrder.None,
  isPinned,
  maxHeight
}) => {
  const xMinField = series.fields[0];
  const xMaxField = series.fields[1];
  const { display: xMinDisp } = xMinField.config.unit != null ? xMinField : xMaxField;
  const { display: xMaxDisp } = xMaxField.config.unit != null ? xMaxField : xMinField;
  const xMinVal = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.formattedValueToString)(xMinDisp(xMinField.values[dataIdxs[0]]));
  const xMaxVal = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.formattedValueToString)(xMaxDisp(xMaxField.values[dataIdxs[1]]));
  const headerItem = {
    label: "Bucket",
    value: `${xMinVal} - ${xMaxVal}`
  };
  const contentItems = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__.getContentItems)(xMinOnlyFrame.fields, xMinField, dataIdxs, seriesIdx, mode, sortOrder),
    [xMinOnlyFrame.fields, xMinField, dataIdxs, seriesIdx, mode, sortOrder]
  );
  let footer;
  if (isPinned && seriesIdx != null) {
    const field = series.fields[seriesIdx];
    const dataIdx = dataIdxs[seriesIdx];
    const links = (0,_status_history_utils__WEBPACK_IMPORTED_MODULE_9__.getDataLinks)(field, dataIdx);
    footer = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_5__.VizTooltipFooter, { dataLinks: links });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_7__.VizTooltipWrapper, { children: [
    headerItem != null && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_6__.VizTooltipHeader, { item: headerItem, isPinned }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_4__.VizTooltipContent,
      {
        items: contentItems,
        isPinned,
        scrollable: (0,_timeseries_utils__WEBPACK_IMPORTED_MODULE_10__.isTooltipScrollable)({ mode, maxHeight }),
        maxHeight
      }
    ),
    footer
  ] });
};


/***/ }),

/***/ "./public/app/plugins/panel/histogram/config.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultHistogramConfig: () => (/* binding */ defaultHistogramConfig)
/* harmony export */ });
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");


const defaultHistogramConfig = {
  stacking: {
    mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.StackingMode.None,
    group: "A"
  }
};


/***/ }),

/***/ "./public/app/plugins/panel/histogram/migrations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeToHistogramPanelMigrationHandler: () => (/* binding */ changeToHistogramPanelMigrationHandler)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_schema_dist_esm_common_common_gen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/histogram/config.ts");




const changeToHistogramPanelMigrationHandler = (panel, prevPluginId, prevOptions, prevFieldConfig) => {
  if (prevPluginId === "graph") {
    const graphOptions = prevOptions.angular;
    if (graphOptions.xaxis?.mode === "histogram") {
      const { fieldConfig, options } = graphToHistogramOptions({
        ...prevOptions.angular,
        fieldConfig: prevFieldConfig
      });
      panel.fieldConfig = fieldConfig;
      return options;
    }
  }
  return {};
};
function graphToHistogramOptions(graphOptions) {
  let histogramFieldConfig = {};
  const options = {
    legend: {
      displayMode: _grafana_schema_dist_esm_common_common_gen__WEBPACK_IMPORTED_MODULE_1__.LegendDisplayMode.List,
      showLegend: true,
      placement: "bottom",
      calcs: []
    },
    tooltip: {
      mode: _grafana_schema_dist_esm_common_common_gen__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Single,
      sort: _grafana_schema_dist_esm_common_common_gen__WEBPACK_IMPORTED_MODULE_1__.SortOrder.None
    },
    combine: false
  };
  if (graphOptions.stack) {
    histogramFieldConfig.stacking = {
      mode: graphOptions.percentage ? _grafana_schema_dist_esm_common_common_gen__WEBPACK_IMPORTED_MODULE_1__.StackingMode.Percent : _grafana_schema_dist_esm_common_common_gen__WEBPACK_IMPORTED_MODULE_1__.StackingMode.Normal,
      group: _config__WEBPACK_IMPORTED_MODULE_2__.defaultHistogramConfig.stacking.group
    };
    options.combine = false;
  }
  return {
    fieldConfig: {
      defaults: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(
        {
          custom: histogramFieldConfig
        },
        lodash__WEBPACK_IMPORTED_MODULE_0__.isNil
      ),
      overrides: []
    },
    options
  };
}


/***/ }),

/***/ "./public/app/plugins/panel/histogram/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/field/overrides/processors.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/histogram.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/fieldOverrides.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/options/builder/tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/options/builder/legend.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/options/builder/hideSeries.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/config.ts");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/options/builder/stacking.tsx");
/* harmony import */ var _HistogramPanel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/panel/histogram/HistogramPanel.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/panel/histogram/config.ts");
/* harmony import */ var _migrations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/panel/histogram/migrations.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/panel/histogram/panelcfg.gen.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/panel/histogram/utils.ts");










const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PanelPlugin(_HistogramPanel__WEBPACK_IMPORTED_MODULE_12__.HistogramPanel).setPanelChangeHandler(_migrations__WEBPACK_IMPORTED_MODULE_14__.changeToHistogramPanelMigrationHandler).setPanelOptions((builder) => {
  const category = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("histogram.category-histogram", "Histogram")];
  builder.addCustomEditor({
    id: "__calc__",
    path: "__calc__",
    name: "Values",
    category,
    description: "Showing frequencies that are calculated in the query",
    editor: () => null,
    // empty editor
    showIf: (opts, data) => (0,_utils__WEBPACK_IMPORTED_MODULE_16__.originalDataHasHistogram)(data)
  }).addNumberInput({
    path: "bucketCount",
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.histogramFieldInfo.bucketCount.name,
    category,
    description: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.histogramFieldInfo.bucketCount.description,
    settings: {
      placeholder: `Default: ${_panelcfg_gen__WEBPACK_IMPORTED_MODULE_15__.defaultOptions.bucketCount}`,
      min: 0
    },
    showIf: (opts, data) => !(0,_utils__WEBPACK_IMPORTED_MODULE_16__.originalDataHasHistogram)(data)
  }).addNumberInput({
    path: "bucketSize",
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.histogramFieldInfo.bucketSize.name,
    category,
    description: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.histogramFieldInfo.bucketSize.description,
    settings: {
      placeholder: "Auto",
      min: 0
    },
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_15__.defaultOptions.bucketSize,
    showIf: (opts, data) => !(0,_utils__WEBPACK_IMPORTED_MODULE_16__.originalDataHasHistogram)(data)
  }).addNumberInput({
    path: "bucketOffset",
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.histogramFieldInfo.bucketOffset.name,
    category,
    description: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.histogramFieldInfo.bucketOffset.description,
    settings: {
      placeholder: `Default: ${_panelcfg_gen__WEBPACK_IMPORTED_MODULE_15__.defaultOptions.bucketOffset}`,
      min: 0
    },
    showIf: (opts, data) => !(0,_utils__WEBPACK_IMPORTED_MODULE_16__.originalDataHasHistogram)(data)
  }).addBooleanSwitch({
    path: "combine",
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.histogramFieldInfo.combine.name,
    category,
    description: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.histogramFieldInfo.combine.description,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_15__.defaultOptions.combine,
    showIf: (opts, data) => !(0,_utils__WEBPACK_IMPORTED_MODULE_16__.originalDataHasHistogram)(data)
  });
  _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.addTooltipOptions(builder);
  _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.addLegendOptions(builder);
}).useFieldConfig({
  standardOptions: {
    [_grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldConfigProperty.Color]: {
      settings: {
        byValueSupport: false,
        bySeriesSupport: true,
        preferThresholdsMode: false
      },
      defaultValue: {
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldColorModeId.PaletteClassic
      }
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldConfigProperty.Links]: {
      settings: {
        showOneClick: true
      }
    }
  },
  useCustomConfig: (builder) => {
    const cfg = _panelcfg_gen__WEBPACK_IMPORTED_MODULE_15__.defaultFieldConfig;
    const graphFieldOptions = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.getGraphFieldOptions)();
    const category = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("histogram.category-histogram", "Histogram")];
    builder.addCustomEditor({
      id: "stacking",
      path: "stacking",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("histogram.name-stacking", "Stacking"),
      category,
      defaultValue: _config__WEBPACK_IMPORTED_MODULE_13__.defaultHistogramConfig.stacking,
      editor: _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_11__.StackingEditor,
      override: _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_11__.StackingEditor,
      settings: {
        options: graphFieldOptions.stacking
      },
      process: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.identityOverrideProcessor,
      shouldApply: (f) => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.number,
      showIf: (opts, data) => !(0,_utils__WEBPACK_IMPORTED_MODULE_16__.originalDataHasHistogram)(data)
    }).addSliderInput({
      path: "lineWidth",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("histogram.name-line-width", "Line width"),
      category,
      defaultValue: cfg.lineWidth,
      settings: {
        min: 0,
        max: 10,
        step: 1
      }
    }).addSliderInput({
      path: "fillOpacity",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("histogram.name-fill-opacity", "Fill opacity"),
      category,
      defaultValue: cfg.fillOpacity,
      settings: {
        min: 0,
        max: 100,
        step: 1
      }
    }).addRadio({
      path: "gradientMode",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("histogram.name-gradient-mode", "Gradient mode"),
      category,
      defaultValue: graphFieldOptions.fillGradient[0].value,
      settings: {
        options: graphFieldOptions.fillGradient
      }
    });
    _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.addHideFrom(builder);
  }
});


/***/ }),

/***/ "./public/app/plugins/panel/histogram/panelcfg.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultFieldConfig: () => (/* binding */ defaultFieldConfig),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");


const defaultOptions = {
  bucketCount: 30,
  bucketOffset: 0
};
const defaultFieldConfig = {
  fillOpacity: 80,
  gradientMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.GraphGradientMode.None,
  lineWidth: 1
};


/***/ }),

/***/ "./public/app/plugins/panel/histogram/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   originalDataHasHistogram: () => (/* binding */ originalDataHasHistogram)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/histogram.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");


function originalDataHasHistogram(frames) {
  if (frames?.length !== 1) {
    return false;
  }
  const frame = frames[0];
  if (frame.fields.length < 3) {
    return false;
  }
  if (!(0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.isHistogramFrameBucketMinFieldName)(frame.fields[0].name) || !(0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.isHistogramFrameBucketMaxFieldName)(frame.fields[1].name)) {
    return false;
  }
  for (const field of frame.fields) {
    if (field.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number) {
      return false;
    }
  }
  return true;
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


/***/ })

}]);
//# sourceMappingURL=histogramPanel.92b26652813c3ce1f931.js.map