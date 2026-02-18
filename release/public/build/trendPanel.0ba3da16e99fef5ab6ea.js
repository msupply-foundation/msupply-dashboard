"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["trendPanel"],{

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

/***/ "./public/app/core/components/TimeSeries/TimeSeries.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeSeries: () => (/* binding */ TimeSeries),
/* harmony export */   UnthemedTimeSeries: () => (/* binding */ UnthemedTimeSeries)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/PlotLegend.tsx");
/* harmony import */ var _GraphNG_GraphNG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/GraphNG/GraphNG.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/TimeSeries/utils.ts");







const propsToDiff = ["legend", "options", "theme"];
class UnthemedTimeSeries extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor() {
    super(...arguments);
    this.prepConfig = (alignedFrame, allFrames, getTimeRange) => {
      const { theme, timeZone, options, renderers, tweakAxis, tweakScale } = this.props;
      return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.preparePlotConfigBuilder)({
        frame: alignedFrame,
        theme,
        timeZones: Array.isArray(timeZone) ? timeZone : [timeZone],
        getTimeRange,
        allFrames,
        renderers,
        tweakScale,
        tweakAxis,
        hoverProximity: options?.tooltip?.hoverProximity,
        orientation: options?.orientation
      });
    };
    this.renderLegend = (config) => {
      const { legend, frames } = this.props;
      if (!config || legend && !legend.showLegend || !(0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_3__.hasVisibleLegendSeries)(config, frames)) {
        return null;
      }
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_3__.PlotLegend, { data: frames, config, ...legend });
    };
  }
  render() {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _GraphNG_GraphNG__WEBPACK_IMPORTED_MODULE_4__.GraphNG,
      {
        ...this.props,
        prepConfig: this.prepConfig,
        propsToDiff,
        renderLegend: this.renderLegend
      }
    );
  }
}
const TimeSeries = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.withTheme2)(UnthemedTimeSeries);
TimeSeries.displayName = "TimeSeries";


/***/ }),

/***/ "./public/app/core/components/TimeSeries/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   preparePlotConfigBuilder: () => (/* binding */ preparePlotConfigBuilder)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uplot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/uplot/dist/uPlot.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/field/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/field/displayProcessor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/config/UPlotConfigBuilder.ts");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/utils.ts");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/config/gradientFills.ts");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/internal.ts");





const IEC_UNITS = /* @__PURE__ */ new Set([
  "bytes",
  "bits",
  "kbytes",
  "mbytes",
  "gbytes",
  "tbytes",
  "pbytes",
  "binBps",
  "binbps",
  "KiBs",
  "Kibits",
  "MiBs",
  "Mibits",
  "GiBs",
  "Gibits",
  "TiBs",
  "Tibits",
  "PiBs",
  "Pibits"
]);
const BIN_INCRS = Array(53);
for (let i = 0; i < BIN_INCRS.length; i++) {
  BIN_INCRS[i] = 2 ** i;
}


const defaultFormatter = (v, decimals = 1) => v == null ? "-" : v.toFixed(decimals);
const defaultConfig = {
  drawStyle: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.GraphDrawStyle.Line,
  showPoints: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.VisibilityMode.Auto,
  axisPlacement: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.AxisPlacement.Auto,
  showValues: false
};
const preparePlotConfigBuilder = ({
  frame,
  theme,
  timeZones,
  getTimeRange,
  allFrames,
  renderers,
  tweakScale = (opts) => opts,
  tweakAxis = (opts) => opts,
  hoverProximity,
  orientation = _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.VizOrientation.Horizontal
}) => {
  const isHorizontal = orientation !== _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.VizOrientation.Vertical;
  const builder = new _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_9__.UPlotConfigBuilder(timeZones[0]);
  let alignedFrame;
  builder.setPrepData((frames) => {
    alignedFrame = frames[0];
    return (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_10__.preparePlotData2)(frames[0], builder.getStackingGroups());
  });
  const xField = frame.fields[0];
  if (!xField) {
    return builder;
  }
  const xScaleKey = "x";
  let yScaleKey = "";
  const xFieldAxisPlacement = xField.config.custom?.axisPlacement === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.AxisPlacement.Hidden ? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.AxisPlacement.Hidden : isHorizontal ? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.AxisPlacement.Bottom : _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.AxisPlacement.Left;
  const xFieldAxisShow = xField.config.custom?.axisPlacement !== _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.AxisPlacement.Hidden;
  if (xField.type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.time) {
    builder.addScale({
      scaleKey: xScaleKey,
      orientation: isHorizontal ? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.ScaleOrientation.Horizontal : _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.ScaleOrientation.Vertical,
      direction: isHorizontal ? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.ScaleDirection.Right : _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.ScaleDirection.Up,
      isTime: true,
      range: () => {
        const r = getTimeRange();
        return [r.from.valueOf(), r.to.valueOf()];
      }
    });
    const filterTicks = timeZones.length > 1 ? (u, splits) => {
      if (isHorizontal) {
        return splits.map((v, i) => i < 2 ? null : v);
      }
      return splits;
    } : void 0;
    for (let i = 0; i < timeZones.length; i++) {
      const timeZone = timeZones[i];
      builder.addAxis({
        scaleKey: xScaleKey,
        isTime: true,
        placement: xFieldAxisPlacement,
        show: xFieldAxisShow,
        label: xField.config.custom?.axisLabel,
        timeZone,
        theme,
        grid: { show: i === 0 && xField.config.custom?.axisGridShow },
        filter: filterTicks,
        formatValue: xField.config.unit?.startsWith("time:") ? (v, decimals) => xField.display(v, decimals).text : void 0
      });
    }
    if (timeZones.length > 1) {
      builder.addHook("drawAxes", (u) => {
        u.ctx.save();
        let i = 0;
        u.axes.forEach((a) => {
          if (isHorizontal && a.side === 2) {
            u.ctx.fillStyle = theme.colors.text.primary;
            u.ctx.textAlign = "left";
            u.ctx.textBaseline = "bottom";
            let cssBaseline = a._pos + a._size;
            u.ctx.fillText(timeZones[i], u.bbox.left, cssBaseline * uplot__WEBPACK_IMPORTED_MODULE_1__["default"].pxRatio);
            i++;
          }
        });
        u.ctx.restore();
      });
    }
  } else {
    let custom = xField.config.custom;
    let scaleDistr = { ...custom?.scaleDistribution };
    builder.addScale({
      scaleKey: xScaleKey,
      orientation: isHorizontal ? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.ScaleOrientation.Horizontal : _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.ScaleOrientation.Vertical,
      direction: isHorizontal ? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.ScaleDirection.Right : _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.ScaleDirection.Up,
      distribution: scaleDistr?.type,
      log: scaleDistr?.log,
      linearThreshold: scaleDistr?.linearThreshold,
      min: xField.config.min,
      max: xField.config.max,
      softMin: custom?.axisSoftMin,
      softMax: custom?.axisSoftMax,
      centeredZero: custom?.axisCenteredZero,
      decimals: xField.config.decimals,
      padMinBy: 0,
      padMaxBy: 0
    });
    builder.addAxis({
      scaleKey: xScaleKey,
      placement: xFieldAxisPlacement,
      show: xFieldAxisShow,
      label: custom?.axisLabel,
      theme,
      grid: { show: custom?.axisGridShow },
      formatValue: (v, decimals) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.formattedValueToString)(xField.display(v, decimals))
    });
  }
  let customRenderedFields = renderers?.flatMap((r) => Object.values(r.fieldMap).filter((name) => r.indicesOnly.indexOf(name) === -1)) ?? [];
  let indexByName;
  for (let i = 1; i < frame.fields.length; i++) {
    const field = frame.fields[i];
    const config = {
      ...field.config,
      custom: {
        ...defaultConfig,
        ...field.config.custom
      }
    };
    const customConfig = config.custom;
    if (field === xField || field.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.number && field.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.enum) {
      continue;
    }
    let fmt = field.display ?? defaultFormatter;
    if (field.config.custom?.stacking?.mode === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.StackingMode.Percent) {
      fmt = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.getDisplayProcessor)({
        field: {
          ...field,
          config: {
            ...field.config,
            unit: "percentunit"
          }
        },
        theme
      });
    }
    const scaleKey = (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_12__.buildScaleKey)(config, field.type);
    const colorMode = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getFieldColorModeForField)(field);
    const scaleColor = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getFieldSeriesColor)(field, theme);
    const seriesColor = scaleColor.color;
    builder.addScale(
      tweakScale(
        {
          scaleKey,
          orientation: isHorizontal ? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.ScaleOrientation.Vertical : _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.ScaleOrientation.Horizontal,
          direction: isHorizontal ? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.ScaleDirection.Up : _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.ScaleDirection.Right,
          distribution: customConfig.scaleDistribution?.type,
          log: customConfig.scaleDistribution?.log,
          linearThreshold: customConfig.scaleDistribution?.linearThreshold,
          min: field.config.min,
          max: field.config.max,
          softMin: customConfig.axisSoftMin,
          softMax: customConfig.axisSoftMax,
          centeredZero: customConfig.axisCenteredZero,
          stackingMode: customConfig.stacking?.mode,
          range: field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.enum ? (u, dataMin, dataMax) => {
            let len = field.config.type.enum.text.length;
            return [-1, len];
          } : void 0,
          decimals: field.config.decimals
        },
        field
      )
    );
    if (!yScaleKey) {
      yScaleKey = scaleKey;
    }
    if (customConfig.axisPlacement !== _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.AxisPlacement.Hidden) {
      let axisColor;
      if (customConfig.axisColorMode === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.AxisColorMode.Series) {
        if (colorMode.isByValue && field.config.custom?.gradientMode === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.GraphGradientMode.Scheme && colorMode.id === _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FieldColorModeId.Thresholds) {
          axisColor = (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_11__.getScaleGradientFn)(1, theme, colorMode, field.config.thresholds);
        } else {
          axisColor = seriesColor;
        }
      }
      const axisDisplayOptions = {
        border: {
          show: customConfig.axisBorderShow || false,
          width: 1 / devicePixelRatio,
          stroke: axisColor || theme.colors.text.primary
        },
        ticks: {
          show: customConfig.axisBorderShow || false,
          stroke: axisColor || theme.colors.text.primary
        },
        color: axisColor || theme.colors.text.primary
      };
      let incrs;
      let values;
      let splits;
      if (IEC_UNITS.has(config.unit)) {
        incrs = BIN_INCRS;
      } else if (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.enum) {
        let text = field.config.type.enum.text;
        splits = text.map((v, i2) => i2);
        values = text;
      }
      builder.addAxis(
        tweakAxis(
          {
            scaleKey,
            label: customConfig.axisLabel,
            size: customConfig.axisWidth,
            placement: isHorizontal ? customConfig.axisPlacement ?? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.AxisPlacement.Auto : _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.AxisPlacement.Bottom,
            formatValue: (v, decimals) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.formattedValueToString)(fmt(v, decimals)),
            theme,
            grid: { show: customConfig.axisGridShow },
            decimals: field.config.decimals,
            distr: customConfig.scaleDistribution?.type,
            splits,
            values,
            incrs,
            ...axisDisplayOptions
          },
          field
        )
      );
    }
    const showPoints = customConfig.drawStyle === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.GraphDrawStyle.Points ? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.VisibilityMode.Always : customConfig.showPoints;
    let pointsFilter = () => null;
    if (customConfig.spanNulls !== true && showPoints === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.VisibilityMode.Auto) {
      pointsFilter = (u, seriesIdx, show, gaps) => {
        let filtered = [];
        if (!show) {
          const yData = u.data[seriesIdx];
          if (gaps && gaps.length) {
            const firstIdx = u.posToIdx(gaps[0][0], true);
            if (yData[firstIdx - 1] == null) {
              filtered.push(firstIdx);
            }
            for (let i2 = 0; i2 < gaps.length; i2++) {
              let thisGap = gaps[i2];
              let nextGap = gaps[i2 + 1];
              if (nextGap && thisGap[1] === nextGap[0]) {
                let approxIdx = u.posToIdx(thisGap[1], true);
                if (yData[approxIdx] == null) {
                  for (let j = 1; j < 100; j++) {
                    if (yData[approxIdx + j] != null) {
                      approxIdx += j;
                      break;
                    }
                    if (yData[approxIdx - j] != null) {
                      approxIdx -= j;
                      break;
                    }
                  }
                }
                filtered.push(approxIdx);
              }
            }
            const lastIdx = u.posToIdx(gaps[gaps.length - 1][1], true);
            if (yData[lastIdx + 1] == null) {
              filtered.push(lastIdx);
            }
          } else {
            let leftIdx = 0;
            while (yData[leftIdx] === null) {
              leftIdx++;
            }
            let rightIdx = yData.length - 1;
            while (rightIdx >= leftIdx && yData[rightIdx] === null) {
              rightIdx--;
            }
            if (leftIdx === rightIdx) {
              filtered.push(leftIdx);
            }
          }
        }
        return filtered.length ? filtered : null;
      };
    }
    let { fillOpacity } = customConfig;
    let pathBuilder = null;
    let pointsBuilder = null;
    if (field.state?.origin) {
      if (!indexByName) {
        indexByName = getNamesToFieldIndex(frame, allFrames);
      }
      const originFrame = allFrames[field.state.origin.frameIndex];
      const originField = originFrame?.fields[field.state.origin.fieldIndex];
      const dispName = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getFieldDisplayName)(originField ?? field, originFrame, allFrames);
      if (customRenderedFields.indexOf(dispName) >= 0) {
        pathBuilder = () => null;
        pointsBuilder = () => void 0;
      } else if (customConfig.transform === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.GraphTransform.Constant) {
        const defaultBuilder = uplot__WEBPACK_IMPORTED_MODULE_1__["default"].paths.linear();
        pathBuilder = (u, seriesIdx) => {
          const _data = u._data;
          const r = getTimeRange();
          let xData = [r.from.valueOf(), r.to.valueOf()];
          let firstY = _data[seriesIdx].find((v) => v != null);
          let yData = [firstY, firstY];
          let fauxData = _data.slice();
          fauxData[0] = xData;
          fauxData[seriesIdx] = yData;
          return defaultBuilder(
            {
              ...u,
              _data: fauxData
            },
            seriesIdx,
            0,
            1
          );
        };
      }
      if (customConfig.fillBelowTo) {
        const fillBelowToField = frame.fields.find(
          (f) => customConfig.fillBelowTo === f.name || customConfig.fillBelowTo === f.config?.displayNameFromDS || customConfig.fillBelowTo === (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getFieldDisplayName)(f, frame, allFrames)
        );
        const fillBelowDispName = fillBelowToField ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getFieldDisplayName)(fillBelowToField, frame, allFrames) : customConfig.fillBelowTo;
        const t = indexByName.get(dispName);
        const b = indexByName.get(fillBelowDispName);
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(b) && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(t)) {
          builder.addBand({
            series: [t, b],
            fill: void 0
            // using null will have the band use fill options from `t`
          });
          if (!fillOpacity) {
            fillOpacity = 35;
          }
        } else {
          fillOpacity = 0;
        }
      }
    }
    let dynamicSeriesColor = void 0;
    if (colorMode.id === _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FieldColorModeId.Thresholds) {
      dynamicSeriesColor = (seriesIdx) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getFieldSeriesColor)(alignedFrame.fields[seriesIdx], theme).color;
    }
    builder.addSeries({
      pathBuilder,
      pointsBuilder,
      scaleKey,
      showPoints,
      pointsFilter,
      colorMode,
      fillOpacity,
      theme,
      dynamicSeriesColor,
      drawStyle: customConfig.drawStyle,
      lineColor: customConfig.lineColor ?? seriesColor,
      lineWidth: customConfig.lineWidth,
      lineInterpolation: customConfig.lineInterpolation,
      lineStyle: customConfig.lineStyle,
      barAlignment: customConfig.barAlignment,
      barWidthFactor: customConfig.barWidthFactor,
      barMaxWidth: customConfig.barMaxWidth,
      pointSize: customConfig.pointSize,
      spanNulls: customConfig.spanNulls || false,
      show: !customConfig.hideFrom?.viz,
      gradientMode: customConfig.gradientMode,
      thresholds: config.thresholds,
      hardMin: field.config.min,
      hardMax: field.config.max,
      softMin: customConfig.axisSoftMin,
      softMax: customConfig.axisSoftMax,
      // The following properties are not used in the uPlot config, but are utilized as transport for legend config
      dataFrameFieldIndex: field.state?.origin,
      showValues: customConfig.showValues
    });
    if (customConfig.thresholdsStyle && config.thresholds) {
      const thresholdDisplay = customConfig.thresholdsStyle.mode ?? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.GraphThresholdsStyleMode.Off;
      if (thresholdDisplay !== _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.GraphThresholdsStyleMode.Off) {
        builder.addThresholds({
          config: customConfig.thresholdsStyle,
          thresholds: config.thresholds,
          scaleKey,
          theme,
          hardMin: field.config.min,
          hardMax: field.config.max,
          softMin: customConfig.axisSoftMin,
          softMax: customConfig.axisSoftMax
        });
      }
    }
  }
  let stackingGroups = (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_10__.getStackingGroups)(frame);
  builder.setStackingGroups(stackingGroups);
  const mightShowValues = frame.fields.some((field, i) => {
    if (i === 0) {
      return false;
    }
    const customConfig = field.config.custom ?? {};
    return customConfig.showValues && (customConfig.drawStyle === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.GraphDrawStyle.Points || customConfig.showPoints !== _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.VisibilityMode.Never);
  });
  if (mightShowValues) {
    const barsShowValues = (u) => {
      let width = u.bbox.width / uplot__WEBPACK_IMPORTED_MODULE_1__["default"].pxRatio;
      let count = u.data[0].length;
      return width / count >= 30;
    };
    builder.addHook("draw", (u) => {
      const baseFontSize = 12;
      const font = `${baseFontSize * uplot__WEBPACK_IMPORTED_MODULE_1__["default"].pxRatio}px ${theme.typography.fontFamily}`;
      const { ctx } = u;
      ctx.save();
      ctx.fillStyle = theme.colors.text.primary;
      ctx.font = font;
      ctx.textAlign = "center";
      for (let seriesIdx = 1; seriesIdx < u.data.length; seriesIdx++) {
        const series = u.series[seriesIdx];
        const field = frame.fields[seriesIdx];
        if (field.config.custom?.showValues && // @ts-ignore points.show() is always callable on the instance (but may be boolean when passed to uPlot as init option)
        (series.points?.show?.(u, seriesIdx) || field.config.custom?.drawStyle === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.GraphDrawStyle.Bars && barsShowValues(u))) {
          const xData = u.data[0];
          const yData = u.data[seriesIdx];
          const yScale = series.scale;
          for (let dataIdx = 0; dataIdx < yData.length; dataIdx++) {
            const yVal = yData[dataIdx];
            if (yVal != null) {
              const text = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.formattedValueToString)(field.display(yVal));
              const isNegative = yVal < 0;
              const textOffset = isNegative ? 15 : -5;
              ctx.textBaseline = isNegative ? "top" : "bottom";
              const xVal = xData[dataIdx];
              const x = u.valToPos(xVal, "x", true);
              const y = u.valToPos(yVal, yScale, true);
              ctx.fillText(text, x, y + textOffset);
            }
          }
        }
      }
      ctx.restore();
    });
  }
  renderers?.forEach((r) => {
    if (!indexByName) {
      indexByName = getNamesToFieldIndex(frame, allFrames);
    }
    let fieldIndices = {};
    for (let key in r.fieldMap) {
      let dispName = r.fieldMap[key];
      fieldIndices[key] = indexByName.get(dispName);
    }
    r.init(builder, fieldIndices);
  });
  const DEFAULT_HOVER_NULL_PROXIMITY = 15;
  const DEFAULT_FOCUS_PROXIMITY = 30;
  let cursor = {
    // horizontal proximity / point hover behavior
    hover: {
      prox: (self, seriesIdx, hoveredIdx) => {
        if (hoverProximity != null) {
          return hoverProximity;
        }
        const yVal = self.data[seriesIdx][hoveredIdx];
        if (yVal === null) {
          return DEFAULT_HOVER_NULL_PROXIMITY;
        }
        return null;
      },
      skip: [null]
    },
    // vertical proximity / series focus behavior
    focus: {
      prox: hoverProximity ?? DEFAULT_FOCUS_PROXIMITY
    },
    points: { one: true }
  };
  builder.setCursor(cursor);
  return builder;
};
function getNamesToFieldIndex(frame, allFrames) {
  const originNames = /* @__PURE__ */ new Map();
  frame.fields.forEach((field, i) => {
    const origin = field.state?.origin;
    if (origin) {
      const origField = allFrames[origin.frameIndex]?.fields[origin.fieldIndex];
      if (origField) {
        originNames.set((0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getFieldDisplayName)(origField, allFrames[origin.frameIndex], allFrames), i);
      }
    }
  });
  return originNames;
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

/***/ "./public/app/plugins/panel/trend/TrendPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrendPanel: () => (/* binding */ TrendPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/field/fieldOverrides.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/joinDataFrames.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-runtime/src/components/PanelDataErrorView.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/PanelContext.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/plugins/TooltipPlugin2.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/plugins/KeyboardPlugin.tsx");
/* harmony import */ var app_core_components_GraphNG_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/components/GraphNG/utils.ts");
/* harmony import */ var app_core_components_TimeSeries_TimeSeries__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/core/components/TimeSeries/TimeSeries.tsx");
/* harmony import */ var app_features_dimensions_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/dimensions/utils.ts");
/* harmony import */ var _timeseries_TimeSeriesTooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/panel/timeseries/TimeSeriesTooltip.tsx");
/* harmony import */ var _timeseries_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/plugins/panel/timeseries/utils.ts");












const TrendPanel = ({
  data,
  timeRange,
  timeZone,
  width,
  height,
  options,
  fieldConfig,
  replaceVariables,
  id
}) => {
  const { dataLinkPostProcessor } = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.useDataLinksContext)();
  const { canExecuteActions } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.usePanelContext)();
  const userCanExecuteActions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => canExecuteActions?.() ?? false, [canExecuteActions]);
  const trendXFieldName = options.xField ?? data.series[0]?.fields.find((field) => field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FieldType.number)?.name;
  const preparePlotFrameTimeless = (frames, dimFields, timeRange2) => {
    dimFields = {
      ...dimFields,
      x: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.fieldMatchers.get(_grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldMatcherID.byName).get(trendXFieldName)
    };
    return (0,app_core_components_GraphNG_utils__WEBPACK_IMPORTED_MODULE_13__.preparePlotFrame)(frames, dimFields);
  };
  const info = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (data.series.length > 1) {
      return {
        warning: "Only one frame is supported, consider adding a join transformation",
        frames: data.series
      };
    }
    let frames = data.series;
    let xFieldIdx;
    if (options.xField) {
      xFieldIdx = (0,app_features_dimensions_utils__WEBPACK_IMPORTED_MODULE_15__.findFieldIndex)(options.xField, frames[0]);
      if (xFieldIdx == null) {
        return {
          warning: "Unable to find field: " + options.xField,
          frames: data.series
        };
      }
    } else {
      xFieldIdx = frames[0] ? frames[0].fields.findIndex((f) => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FieldType.number) : -1;
      if (xFieldIdx === -1) {
        return {
          warning: "No numeric fields found for X axis",
          frames
        };
      }
    }
    if (xFieldIdx != null) {
      const field = frames[0].fields[xFieldIdx];
      if (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FieldType.number && !(0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.isLikelyAscendingVector)(field.values)) {
        return {
          warning: `Values must be in ascending order`,
          frames
        };
      }
    }
    return { frames: (0,_timeseries_utils__WEBPACK_IMPORTED_MODULE_17__.prepareGraphableFields)(frames, _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.theme2, void 0, xFieldIdx) };
  }, [data.series, options.xField]);
  if (info.warning || !info.frames) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.PanelDataErrorView,
      {
        panelId: id,
        fieldConfig,
        data,
        message: info.warning,
        needsNumberField: true
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_TimeSeries_TimeSeries__WEBPACK_IMPORTED_MODULE_14__.TimeSeries,
    {
      frames: info.frames,
      structureRev: data.structureRev,
      timeRange,
      timeZone,
      width,
      height,
      legend: options.legend,
      options,
      preparePlotFrame: preparePlotFrameTimeless,
      replaceVariables,
      dataLinkPostProcessor,
      children: (uPlotConfig, alignedDataFrame) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.KeyboardPlugin, { config: uPlotConfig }),
          options.tooltip.mode !== _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.TooltipDisplayMode.None && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.TooltipPlugin2,
            {
              config: uPlotConfig,
              hoverMode: options.tooltip.mode === _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.TooltipDisplayMode.Single ? _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.TooltipHoverMode.xOne : _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.TooltipHoverMode.xAll,
              getDataLinks: (seriesIdx, dataIdx) => alignedDataFrame.fields[seriesIdx].getLinks?.({ valueRowIndex: dataIdx }) ?? [],
              render: (u, dataIdxs, seriesIdx, isPinned = false, dismiss, timeRange2, viaSync, dataLinks) => {
                return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _timeseries_TimeSeriesTooltip__WEBPACK_IMPORTED_MODULE_16__.TimeSeriesTooltip,
                  {
                    series: alignedDataFrame,
                    dataIdxs,
                    seriesIdx,
                    mode: options.tooltip.mode,
                    sortOrder: options.tooltip.sort,
                    isPinned,
                    maxHeight: options.tooltip.maxHeight,
                    replaceVariables,
                    dataLinks,
                    hideZeros: options.tooltip.hideZeros,
                    canExecuteActions: userCanExecuteActions
                  }
                );
              },
              maxWidth: options.tooltip.maxWidth
            }
          )
        ] });
      }
    }
  );
};


/***/ }),

/***/ "./public/app/plugins/panel/trend/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/options/builder/tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/options/builder/legend.tsx");
/* harmony import */ var _timeseries_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/timeseries/config.ts");
/* harmony import */ var _TrendPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/trend/TrendPanel.tsx");
/* harmony import */ var _suggestions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/trend/suggestions.ts");








const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_TrendPanel__WEBPACK_IMPORTED_MODULE_6__.TrendPanel).useFieldConfig((0,_timeseries_config__WEBPACK_IMPORTED_MODULE_5__.getGraphFieldConfig)(_timeseries_config__WEBPACK_IMPORTED_MODULE_5__.defaultGraphConfig, false)).setPanelOptions((builder) => {
  const category = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("trend.category-x-axis", "X axis")];
  builder.addFieldNamePicker({
    path: "xField",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("trend.name-x-field", "X field"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("trend.description-x-field", "An increasing numeric value"),
    category,
    defaultValue: void 0,
    settings: {
      isClearable: true,
      placeholderText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("trend.placeholder-x-field", "First numeric value"),
      filter: (field) => field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number
    }
  });
  _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.addTooltipOptions(builder, false, true, _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.optsWithHideZeros);
  _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.addLegendOptions(builder);
}).setSuggestionsSupplier(new _suggestions__WEBPACK_IMPORTED_MODULE_7__.TrendSuggestionsSupplier());


/***/ }),

/***/ "./public/app/plugins/panel/trend/suggestions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrendSuggestionsSupplier: () => (/* binding */ TrendSuggestionsSupplier)
/* harmony export */ });
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/suggestions.ts");



class TrendSuggestionsSupplier {
  getSuggestionsForData(builder) {
    const { dataSummary } = builder;
    if (dataSummary.numberFieldCount < 2 || dataSummary.rowCountTotal < 2 || dataSummary.rowCountTotal < 2) {
      return;
    }
    const list = builder.getListAppender({
      name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionName.LineChart,
      pluginId: "trend",
      options: {
        legend: {
          calcs: [],
          displayMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.LegendDisplayMode.Hidden,
          placement: "right",
          showLegend: false
        }
      },
      fieldConfig: {
        defaults: {
          custom: {}
        },
        overrides: []
      },
      cardOptions: {
        previewModifier: (s) => {
          if (s.fieldConfig?.defaults.custom?.drawStyle !== _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.GraphDrawStyle.Bars) {
            s.fieldConfig.defaults.custom.lineWidth = Math.max(s.fieldConfig.defaults.custom.lineWidth ?? 1, 2);
          }
        }
      }
    });
    return list;
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
//# sourceMappingURL=trendPanel.0ba3da16e99fef5ab6ea.js.map