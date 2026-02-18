"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["timeseriesPanel"],{

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

/***/ "./public/app/core/components/Form/Form.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Form: () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");





function Form({
  defaultValues,
  onSubmit,
  validateOnMount = false,
  validateFieldsOnMount,
  children,
  validateOn = "onSubmit",
  maxWidth = 600,
  ...htmlProps
}) {
  const { handleSubmit, trigger, formState, ...rest } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    mode: validateOn,
    defaultValues
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (validateOnMount) {
      trigger(validateFieldsOnMount);
    }
  }, [trigger, validateFieldsOnMount, validateOnMount]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "form",
    {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        maxWidth: maxWidth !== "none" ? maxWidth + "px" : maxWidth,
        width: "100%"
      }),
      onSubmit: handleSubmit(onSubmit),
      ...htmlProps,
      children: children({ errors: formState.errors, formState, trigger, ...rest })
    }
  );
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

/***/ "./public/app/features/visualization/data-hover/ExemplarTooltip.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExemplarTooltip: () => (/* binding */ ExemplarTooltip)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipContent.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipFooter.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipHeader.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipWrapper.tsx");




const ExemplarTooltip = ({ items, links, isPinned, maxHeight }) => {
  const timeItem = items.find((val) => val.label === "Time");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_5__.VizTooltipWrapper, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_4__.VizTooltipHeader,
      {
        item: {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("exemplar-tooltip-header", "Exemplar"),
          value: timeItem?.value ?? ""
        },
        isPinned
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_2__.VizTooltipContent,
      {
        items: items.filter((item) => item !== timeItem),
        isPinned,
        maxHeight,
        scrollable: maxHeight != null
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_3__.VizTooltipFooter, { dataLinks: links ?? [] })
  ] });
};


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

/***/ "./public/app/plugins/panel/timeseries/TimeSeriesPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeSeriesPanel: () => (/* binding */ TimeSeriesPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/dataframe/utils.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/field/fieldOverrides.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/dashboard.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/dataFrameTypes.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/components/PanelDataErrorView.tsx");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/PanelContext.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/plugins/TooltipPlugin2.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/plugins/EventBusPlugin.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/plugins/KeyboardPlugin.tsx");
/* harmony import */ var app_core_components_TimeSeries_TimeSeries__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/components/TimeSeries/TimeSeries.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _TimeSeriesTooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/panel/timeseries/TimeSeriesTooltip.tsx");
/* harmony import */ var _plugins_AnnotationsPlugin2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/panel/timeseries/plugins/AnnotationsPlugin2.tsx");
/* harmony import */ var _plugins_ExemplarsPlugin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/plugins/panel/timeseries/plugins/ExemplarsPlugin.tsx");
/* harmony import */ var _plugins_OutsideRangePlugin__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/plugins/panel/timeseries/plugins/OutsideRangePlugin.tsx");
/* harmony import */ var _plugins_ThresholdControlsPlugin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/plugins/panel/timeseries/plugins/ThresholdControlsPlugin.tsx");
/* harmony import */ var _suggestions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/plugins/panel/timeseries/suggestions.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/plugins/panel/timeseries/utils.ts");

















const TimeSeriesPanel = ({
  data,
  timeRange,
  timeZone,
  width,
  height,
  options,
  fieldConfig,
  onChangeTimeRange,
  replaceVariables,
  id
}) => {
  const {
    sync,
    eventsScope,
    canAddAnnotations,
    onThresholdsChange,
    canEditThresholds,
    showThresholds,
    eventBus,
    canExecuteActions
  } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.usePanelContext)();
  const { dataLinkPostProcessor } = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.useDataLinksContext)();
  const userCanExecuteActions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => canExecuteActions?.() ?? false, [canExecuteActions]);
  const isVerticallyOriented = options.orientation === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.VizOrientation.Vertical;
  const { frames, compareDiffMs } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    let frames2 = (0,_utils__WEBPACK_IMPORTED_MODULE_21__.prepareGraphableFields)(data.series, app_core_config__WEBPACK_IMPORTED_MODULE_14__.config.theme2, timeRange);
    if (frames2 != null) {
      let compareDiffMs2 = [0];
      frames2.forEach((frame) => {
        const diffMs = frame.meta?.timeCompare?.diffMs ?? 0;
        frame.fields.forEach((field) => {
          if (field.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FieldType.time) {
            compareDiffMs2.push(diffMs);
          }
        });
        if (diffMs !== 0) {
          const needsAlignment = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.shouldAlignTimeCompare)(frame, frames2, timeRange);
          if (needsAlignment) {
            (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.alignTimeRangeCompareData)(frame, diffMs, app_core_config__WEBPACK_IMPORTED_MODULE_14__.config.theme2);
          }
        }
      });
      return { frames: frames2, compareDiffMs: compareDiffMs2 };
    }
    return { frames: frames2 };
  }, [data.series, timeRange]);
  const timezones = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_21__.getTimezones)(options.timezone, timeZone), [options.timezone, timeZone]);
  const suggestions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (frames?.length && frames.every((df) => df.meta?.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.DataFrameType.TimeSeriesLong)) {
      const s = (0,_suggestions__WEBPACK_IMPORTED_MODULE_20__.getPrepareTimeseriesSuggestion)(id);
      return {
        message: "Long data must be converted to wide",
        suggestions: s ? [s] : void 0
      };
    }
    return void 0;
  }, [frames, id]);
  const enableAnnotationCreation = Boolean(canAddAnnotations && canAddAnnotations());
  const [newAnnotationRange, setNewAnnotationRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const cursorSync = sync?.() ?? _grafana_data__WEBPACK_IMPORTED_MODULE_4__.DashboardCursorSync.Off;
  if (!frames || suggestions) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.PanelDataErrorView,
      {
        panelId: id,
        message: suggestions?.message,
        fieldConfig,
        data,
        needsTimeField: true,
        needsNumberField: true,
        suggestions: suggestions?.suggestions
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_TimeSeries_TimeSeries__WEBPACK_IMPORTED_MODULE_13__.TimeSeries,
    {
      frames,
      structureRev: data.structureRev,
      timeRange,
      timeZone: timezones,
      width,
      height,
      legend: options.legend,
      options,
      replaceVariables,
      dataLinkPostProcessor,
      cursorSync,
      children: (uplotConfig, alignedFrame) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.KeyboardPlugin, { config: uplotConfig }),
          cursorSync !== _grafana_data__WEBPACK_IMPORTED_MODULE_4__.DashboardCursorSync.Off && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.EventBusPlugin, { config: uplotConfig, eventBus, frame: alignedFrame }),
          options.tooltip.mode !== _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TooltipDisplayMode.None && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.TooltipPlugin2,
            {
              config: uplotConfig,
              hoverMode: options.tooltip.mode === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TooltipDisplayMode.Single ? _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.TooltipHoverMode.xOne : _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.TooltipHoverMode.xAll,
              queryZoom: onChangeTimeRange,
              clientZoom: true,
              syncMode: cursorSync,
              syncScope: eventsScope,
              getDataLinks: (seriesIdx, dataIdx) => alignedFrame.fields[seriesIdx].getLinks?.({ valueRowIndex: dataIdx }) ?? [],
              render: (u, dataIdxs, seriesIdx, isPinned = false, dismiss, timeRange2, viaSync, dataLinks) => {
                if (enableAnnotationCreation && timeRange2 != null) {
                  setNewAnnotationRange(timeRange2);
                  dismiss();
                  return;
                }
                const annotate = () => {
                  let xVal = u.posToVal(u.cursor.left, "x");
                  setNewAnnotationRange({ from: xVal, to: xVal });
                  dismiss();
                };
                return (
                  // not sure it header time here works for annotations, since it's taken from nearest datapoint index
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _TimeSeriesTooltip__WEBPACK_IMPORTED_MODULE_15__.TimeSeriesTooltip,
                    {
                      series: alignedFrame,
                      dataIdxs,
                      seriesIdx,
                      mode: viaSync ? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TooltipDisplayMode.Multi : options.tooltip.mode,
                      sortOrder: options.tooltip.sort,
                      hideZeros: options.tooltip.hideZeros,
                      isPinned,
                      annotate: enableAnnotationCreation ? annotate : void 0,
                      maxHeight: options.tooltip.maxHeight,
                      replaceVariables,
                      dataLinks,
                      canExecuteActions: userCanExecuteActions,
                      compareDiffMs
                    }
                  )
                );
              },
              maxWidth: options.tooltip.maxWidth
            }
          ),
          !isVerticallyOriented && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _plugins_AnnotationsPlugin2__WEBPACK_IMPORTED_MODULE_16__.AnnotationsPlugin2,
              {
                replaceVariables,
                annotations: data.annotations ?? [],
                config: uplotConfig,
                timeZone,
                newRange: newAnnotationRange,
                setNewRange: setNewAnnotationRange
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_plugins_OutsideRangePlugin__WEBPACK_IMPORTED_MODULE_18__.OutsideRangePlugin, { config: uplotConfig, onChangeTimeRange }),
            data.annotations && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _plugins_ExemplarsPlugin__WEBPACK_IMPORTED_MODULE_17__.ExemplarsPlugin,
              {
                visibleSeries: (0,_plugins_ExemplarsPlugin__WEBPACK_IMPORTED_MODULE_17__.getVisibleLabels)(uplotConfig, frames),
                config: uplotConfig,
                exemplars: data.annotations,
                timeZone,
                maxHeight: options.tooltip.maxHeight,
                maxWidth: options.tooltip.maxWidth
              }
            ),
            (canEditThresholds && onThresholdsChange || showThresholds) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _plugins_ThresholdControlsPlugin__WEBPACK_IMPORTED_MODULE_19__.ThresholdControlsPlugin,
              {
                config: uplotConfig,
                fieldConfig,
                onThresholdsChange: canEditThresholds ? onThresholdsChange : void 0
              }
            )
          ] })
        ] });
      }
    }
  );
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

/***/ "./public/app/plugins/panel/timeseries/TimezonesEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimezonesEditor: () => (/* binding */ TimezonesEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/datetime/timezones.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/DateTimePickers/TimeZonePicker.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");






const TimezonesEditor = ({ value, onChange }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  if (!value || value.length < 1) {
    value = [""];
  }
  const addTimezone = () => {
    onChange([...value, _grafana_data__WEBPACK_IMPORTED_MODULE_2__.InternalTimeZones.default]);
  };
  const removeTimezone = (idx) => {
    const copy = value.slice();
    copy.splice(idx, 1);
    onChange(copy);
  };
  const setTimezone = (idx, tz) => {
    const copy = value.slice();
    copy[idx] = tz ?? _grafana_data__WEBPACK_IMPORTED_MODULE_2__.InternalTimeZones.default;
    if (copy.length === 0 || copy.length === 1 && copy[0] === "") {
      onChange(void 0);
    } else {
      onChange(copy);
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { className: styles.list, children: value.map((tz, idx) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { className: styles.listItem, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TimeZonePicker,
      {
        onChange: (v) => setTimezone(idx, v),
        includeInternal: true,
        value: tz ?? _grafana_data__WEBPACK_IMPORTED_MODULE_2__.InternalTimeZones.default
      }
    ),
    idx === value.length - 1 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.IconButton,
      {
        name: "plus",
        onClick: addTimezone,
        tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("timeseries.timezones-editor.tooltip-add-timezone", "Add timezone")
      }
    ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.IconButton,
      {
        name: "times",
        onClick: () => removeTimezone(idx),
        tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("timeseries.timezones-editor.tooltip-remove-timezone", "Remove timezone")
      }
    )
  ] }, `${idx}.${tz}`)) });
};
const getStyles = (theme) => ({
  list: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(0.5)
  }),
  listItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    gap: theme.spacing(1)
  })
});


/***/ }),

/***/ "./public/app/plugins/panel/timeseries/migrations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   graphPanelChangedHandler: () => (/* binding */ graphPanelChangedHandler),
/* harmony export */   graphToTimeseriesOptions: () => (/* binding */ graphToTimeseriesOptions)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/transformations/fieldReducer.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/thresholds.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/fieldOverrides.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var app_features_dashboard_scene_scene_DashboardAnnotationsDataLayer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/dashboard-scene/scene/DashboardAnnotationsDataLayer.ts");
/* harmony import */ var app_features_dashboard_scene_scene_DashboardScene__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/dashboard-scene/scene/DashboardScene.tsx");
/* harmony import */ var app_features_dashboard_scene_utils_dashboardSceneGraph__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/dashboard-scene/utils/dashboardSceneGraph.ts");
/* harmony import */ var app_plugins_datasource_grafana_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/grafana/types.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/panel/timeseries/config.ts");











let dashboardRefreshDebouncer = null;
const graphPanelChangedHandler = (panel, prevPluginId, prevOptions, prevFieldConfig) => {
  if (prevPluginId === "graph" && prevOptions.angular) {
    const { fieldConfig, options, annotations } = graphToTimeseriesOptions({
      ...prevOptions.angular,
      fieldConfig: prevFieldConfig,
      panel
    });
    if (annotations?.length > 0) {
      addAnnotationsToDashboard(annotations);
    }
    panel.fieldConfig = fieldConfig;
    panel.alert = prevOptions.angular.alert;
    return options;
  }
  migrateHideFrom(panel);
  return {};
};
function graphToTimeseriesOptions(angular) {
  let annotations = [];
  const overrides = angular.fieldConfig?.overrides ?? [];
  const yaxes = angular.yaxes ?? [];
  let y1 = getFieldConfigFromOldAxis(yaxes[0]);
  if (angular.fieldConfig?.defaults) {
    y1 = {
      ...angular.fieldConfig?.defaults,
      ...y1
      // Keep the y-axis unit and custom
    };
  }
  const dash = {
    fill: angular.dashes ? "dash" : "solid",
    dash: [angular.dashLength ?? 10, angular.spaceLength ?? 10]
  };
  if (angular.aliasColors) {
    for (const alias of Object.keys(angular.aliasColors)) {
      const color = angular.aliasColors[alias];
      if (color) {
        overrides.push({
          matcher: {
            id: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldMatcherID.byName,
            options: alias
          },
          properties: [
            {
              id: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldConfigProperty.Color,
              value: {
                mode: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldColorModeId.Fixed,
                fixedColor: color
              }
            }
          ]
        });
      }
    }
  }
  let hasFillBelowTo = false;
  if (angular.seriesOverrides?.length) {
    for (const seriesOverride of angular.seriesOverrides) {
      if (!seriesOverride.alias) {
        continue;
      }
      const aliasIsRegex = /^([/~@;%#'])(.*?)\1([gimsuy]*)$/.test(seriesOverride.alias);
      const rule = {
        matcher: {
          id: aliasIsRegex ? _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldMatcherID.byRegexp : _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldMatcherID.byName,
          options: seriesOverride.alias
        },
        properties: []
      };
      let dashOverride = void 0;
      for (const p of Object.keys(seriesOverride)) {
        const v = seriesOverride[p];
        switch (p) {
          // Ignore
          case "alias":
          case "$$hashKey":
            break;
          // Link to y axis settings
          case "yaxis":
            if (2 === v) {
              const y2 = getFieldConfigFromOldAxis(yaxes[1]);
              fillY2DynamicValues(y1, y2, rule.properties);
            }
            break;
          case "fill":
            rule.properties.push({
              id: "custom.fillOpacity",
              value: v * 10
              // was 0-10, new graph is 0 - 100
            });
            break;
          case "fillBelowTo":
            hasFillBelowTo = true;
            rule.properties.push({
              id: "custom.fillBelowTo",
              value: v
            });
            break;
          case "fillGradient":
            if (v) {
              rule.properties.push({
                id: "custom.fillGradient",
                value: "opacity"
                // was 0-10
              });
              rule.properties.push({
                id: "custom.fillOpacity",
                value: v * 10
                // was 0-10, new graph is 0 - 100
              });
            }
            break;
          case "points":
            rule.properties.push({
              id: "custom.showPoints",
              value: v ? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.VisibilityMode.Always : _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.VisibilityMode.Never
            });
            break;
          case "bars":
            if (v) {
              rule.properties.push({
                id: "custom.drawStyle",
                value: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.GraphDrawStyle.Bars
              });
              rule.properties.push({
                id: "custom.fillOpacity",
                value: 100
                // solid bars
              });
            } else {
              rule.properties.push({
                id: "custom.drawStyle",
                value: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.GraphDrawStyle.Line
                // Change from bars
              });
            }
            break;
          case "lines":
            if (v) {
              rule.properties.push({
                id: "custom.drawStyle",
                value: "line"
              });
            } else {
              rule.properties.push({
                id: "custom.lineWidth",
                value: 0
              });
            }
            break;
          case "linewidth":
            rule.properties.push({
              id: "custom.lineWidth",
              value: v
            });
            break;
          case "pointradius":
            rule.properties.push({
              id: "custom.pointSize",
              value: 2 + v * 2
            });
            break;
          case "dashLength":
          case "spaceLength":
          case "dashes":
            if (!dashOverride) {
              dashOverride = {
                fill: dash.fill,
                dash: [...dash.dash]
              };
            }
            switch (p) {
              case "dashLength":
                dashOverride.dash[0] = v;
                break;
              case "spaceLength":
                dashOverride.dash[1] = v;
                break;
              case "dashes":
                dashOverride.fill = v ? "dash" : "solid";
                break;
            }
            break;
          case "stack":
            rule.properties.push({
              id: "custom.stacking",
              value: getStackingFromOverrides(v)
            });
            break;
          case "color":
            rule.properties.push({
              id: "color",
              value: {
                fixedColor: v,
                mode: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldColorModeId.Fixed
              }
            });
            break;
          case "transform":
            rule.properties.push({
              id: "custom.transform",
              value: v === "negative-Y" ? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.GraphTransform.NegativeY : _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.GraphTransform.Constant
            });
            break;
          default:
            console.log("Ignore override migration:", seriesOverride.alias, p, v);
        }
      }
      if (dashOverride) {
        rule.properties.push({
          id: "custom.lineStyle",
          value: dashOverride
        });
      }
      if (rule.properties.length) {
        overrides.push(rule);
      }
    }
  }
  const graph = y1.custom ?? {};
  graph.drawStyle = angular.bars ? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.GraphDrawStyle.Bars : angular.lines ? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.GraphDrawStyle.Line : _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.GraphDrawStyle.Points;
  if (angular.points) {
    graph.showPoints = _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.VisibilityMode.Always;
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(angular.pointradius)) {
      graph.pointSize = 2 + angular.pointradius * 2;
    }
  } else if (graph.drawStyle !== _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.GraphDrawStyle.Points) {
    graph.showPoints = _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.VisibilityMode.Never;
  }
  graph.lineWidth = angular.linewidth;
  if (dash.fill !== "solid") {
    graph.lineStyle = dash;
  }
  if (hasFillBelowTo) {
    graph.fillOpacity = 35;
  } else if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(angular.fill)) {
    graph.fillOpacity = angular.fill * 10;
  }
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(angular.fillGradient) && angular.fillGradient > 0) {
    graph.gradientMode = _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.GraphGradientMode.Opacity;
    graph.fillOpacity = angular.fillGradient * 10;
  }
  graph.spanNulls = angular.nullPointMode === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.NullValueMode.Ignore;
  if (angular.steppedLine) {
    graph.lineInterpolation = _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.LineInterpolation.StepAfter;
  }
  if (graph.drawStyle === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.GraphDrawStyle.Bars) {
    graph.fillOpacity = 100;
  }
  if (angular.stack) {
    graph.stacking = {
      mode: angular.percentage ? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.StackingMode.Percent : _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.StackingMode.Normal,
      group: _config__WEBPACK_IMPORTED_MODULE_15__.defaultGraphConfig.stacking.group
    };
    if (angular.percentage) {
      if (angular.yaxis) {
        delete y1.min;
        delete y1.max;
        if (y1.decimals === 0) {
          delete y1.decimals;
        }
      }
    }
  }
  y1.custom = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(graph, lodash__WEBPACK_IMPORTED_MODULE_0__.isNil);
  y1.nullValueMode = angular.nullPointMode;
  const options = {
    legend: {
      displayMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.LegendDisplayMode.List,
      showLegend: true,
      placement: "bottom",
      calcs: []
    },
    tooltip: {
      mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TooltipDisplayMode.Single,
      sort: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.SortOrder.None
    }
  };
  const legendConfig = angular.legend;
  if (legendConfig) {
    if (legendConfig.show) {
      options.legend.displayMode = legendConfig.alignAsTable ? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.LegendDisplayMode.Table : _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.LegendDisplayMode.List;
    } else {
      options.legend.showLegend = false;
    }
    if (legendConfig.rightSide) {
      options.legend.placement = "right";
    }
    if (angular.legend.values) {
      const enabledLegendValues = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pickBy)(angular.legend);
      options.legend.calcs = getReducersFromLegend(enabledLegendValues);
    }
    if (angular.legend.sideWidth) {
      options.legend.width = angular.legend.sideWidth;
    }
    if (legendConfig.hideZero) {
      overrides.push(getLegendHideFromOverride(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.ReducerID.allIsZero));
    }
    if (legendConfig.hideEmpty) {
      overrides.push(getLegendHideFromOverride(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.ReducerID.allIsNull));
    }
  }
  if (angular.timeRegions?.length) {
    let regions = angular.timeRegions.map((old, idx) => ({
      name: `T${idx}`,
      color: old.colorMode !== "custom" ? old.colorMode : old.fillColor,
      line: old.line,
      fill: old.fill,
      fromDayOfWeek: old.fromDayOfWeek,
      toDayOfWeek: old.toDayOfWeek,
      from: old.from,
      to: old.to
    }));
    regions.forEach((region, idx) => {
      const anno = {
        datasource: {
          type: "datasource",
          uid: "grafana"
        },
        enable: true,
        hide: true,
        // don't show the toggle at the top of the dashboard
        filter: {
          exclude: false,
          ids: [angular.panel.id]
        },
        iconColor: region.fillColor ?? region.color,
        name: `Time region for panel ${angular.panel.title}${idx > 0 ? ` ${idx}` : ""}`,
        target: {
          queryType: app_plugins_datasource_grafana_types__WEBPACK_IMPORTED_MODULE_14__.GrafanaQueryType.TimeRegions,
          refId: "Anno",
          timeRegion: {
            fromDayOfWeek: region.fromDayOfWeek,
            toDayOfWeek: region.toDayOfWeek,
            from: region.from,
            to: region.to,
            timezone: "utc"
            // graph panel was always UTC
          }
        }
      };
      if (region.fill) {
        annotations.push(anno);
      } else if (region.line) {
        anno.iconColor = region.lineColor ?? "white";
        annotations.push(anno);
      }
    });
  }
  const tooltipConfig = angular.tooltip;
  if (tooltipConfig) {
    if (tooltipConfig.shared !== void 0) {
      options.tooltip.mode = tooltipConfig.shared ? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TooltipDisplayMode.Multi : _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.TooltipDisplayMode.Single;
    }
    if (tooltipConfig.sort !== void 0 && tooltipConfig.shared) {
      switch (tooltipConfig.sort) {
        case 1:
          options.tooltip.sort = _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.SortOrder.Ascending;
          break;
        case 2:
          options.tooltip.sort = _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.SortOrder.Descending;
          break;
        default:
          options.tooltip.sort = _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.SortOrder.None;
      }
    }
  }
  if (angular.thresholds && angular.thresholds.length > 0) {
    let steps = [];
    let area = false;
    let line = false;
    const sorted = angular.thresholds.sort((a, b) => a.value > b.value ? 1 : -1);
    for (let idx = 0; idx < sorted.length; idx++) {
      const threshold = sorted[idx];
      const next = sorted.length > idx + 1 ? sorted[idx + 1] : null;
      if (threshold.fill) {
        area = true;
      }
      if (threshold.line) {
        line = true;
      }
      if (threshold.op === "gt") {
        steps.push({
          value: threshold.value,
          color: getThresholdColor(threshold)
        });
      }
      if (threshold.op === "lt") {
        if (steps.length === 0) {
          steps.push({
            value: -Infinity,
            color: getThresholdColor(threshold)
          });
        }
        if (next && next.op === "gt" && next.value > threshold.value) {
          steps.push({
            value: threshold.value,
            color: "transparent"
          });
        } else if (next && next.op === "lt") {
          steps.push({
            value: threshold.value,
            color: getThresholdColor(next)
          });
        } else {
          steps.push({
            value: threshold.value,
            color: "transparent"
          });
        }
      }
    }
    if (steps.length > 0 && steps[0].value !== -Infinity) {
      steps.unshift({
        color: "transparent",
        value: -Infinity
      });
    }
    let displayMode = area ? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.GraphThresholdsStyleMode.Area : _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.GraphThresholdsStyleMode.Line;
    if (line && area) {
      displayMode = _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.GraphThresholdsStyleMode.LineAndArea;
    }
    y1.custom.thresholdsStyle = { mode: displayMode };
    y1.thresholds = {
      mode: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.ThresholdsMode.Absolute,
      steps
    };
  }
  if (angular.xaxis && angular.xaxis.show === false && angular.xaxis.mode === "time") {
    overrides.push({
      matcher: {
        id: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldMatcherID.byType,
        options: _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FieldType.time
      },
      properties: [
        {
          id: "custom.axisPlacement",
          value: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.AxisPlacement.Hidden
        }
      ]
    });
  }
  return {
    fieldConfig: {
      defaults: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(y1, lodash__WEBPACK_IMPORTED_MODULE_0__.isNil),
      overrides
    },
    options,
    annotations
  };
}
function getThresholdColor(threshold) {
  if (threshold.colorMode === "critical") {
    return "red";
  }
  if (threshold.colorMode === "warning") {
    return "orange";
  }
  if (threshold.colorMode === "custom") {
    return threshold.fillColor || threshold.lineColor;
  }
  return "red";
}
function getFieldConfigFromOldAxis(obj) {
  if (!obj) {
    return {};
  }
  const graph = {
    axisPlacement: obj.show ? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.AxisPlacement.Auto : _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.AxisPlacement.Hidden
  };
  if (obj.label) {
    graph.axisLabel = obj.label;
  }
  if (obj.logBase) {
    const log = obj.logBase;
    if (log === 2 || log === 10) {
      graph.scaleDistribution = {
        type: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.ScaleDistribution.Log,
        log
      };
    }
  }
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(
    {
      unit: obj.format,
      decimals: validNumber(obj.decimals),
      min: validNumber(obj.min),
      max: validNumber(obj.max),
      custom: graph
    },
    lodash__WEBPACK_IMPORTED_MODULE_0__.isNil
  );
}
function fillY2DynamicValues(y1, y2, props) {
  for (const [key, value] of Object.entries(y2)) {
    if (key !== "custom" && value !== y1[key]) {
      props.push({
        id: key,
        value
      });
    }
  }
  props.push({
    id: `custom.axisPlacement`,
    value: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.AxisPlacement.Right
  });
  const y1G = y1.custom ?? {};
  const y2G = y2.custom ?? {};
  for (const [key, value] of Object.entries(y2G)) {
    if (value !== y1G[key]) {
      props.push({
        id: `custom.${key}`,
        value
      });
    }
  }
}
function validNumber(val) {
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(val)) {
    return val;
  }
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(val)) {
    const num = Number(val);
    if (!isNaN(num)) {
      return num;
    }
  }
  return void 0;
}
function getReducersFromLegend(obj) {
  const ids = [];
  for (const key in obj) {
    const r = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.fieldReducers.getIfExists(key);
    if (r) {
      ids.push(r.id);
    }
  }
  return ids;
}
function migrateHideFrom(panel) {
  if (panel.fieldConfig?.defaults?.custom?.hideFrom?.graph !== void 0) {
    panel.fieldConfig.defaults.custom.hideFrom.viz = panel.fieldConfig.defaults.custom.hideFrom.graph;
    delete panel.fieldConfig.defaults.custom.hideFrom.graph;
  }
  if (panel.fieldConfig?.overrides) {
    panel.fieldConfig.overrides = panel.fieldConfig.overrides.map((fr) => {
      fr.properties = fr.properties.map((p) => {
        if (p.id === "custom.hideFrom" && p.value.graph) {
          p.value.viz = p.value.graph;
          delete p.value.graph;
        }
        return p;
      });
      return fr;
    });
  }
}
function getLegendHideFromOverride(reducer) {
  return {
    matcher: {
      id: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldMatcherID.byValue,
      options: {
        reducer,
        op: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.ComparisonOperation.GTE,
        value: 0
      }
    },
    properties: [
      {
        id: "custom.hideFrom",
        value: {
          tooltip: true,
          viz: false,
          legend: true
        }
      }
    ]
  };
}
function getStackingFromOverrides(value) {
  const defaultGroupName = _config__WEBPACK_IMPORTED_MODULE_15__.defaultGraphConfig.stacking?.group;
  return {
    mode: value ? _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.StackingMode.Normal : _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.StackingMode.None,
    group: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(value) ? value : defaultGroupName
  };
}
function addAnnotationsToDashboard(annotations) {
  const scene = window.__grafanaSceneContext;
  if (scene instanceof app_features_dashboard_scene_scene_DashboardScene__WEBPACK_IMPORTED_MODULE_12__.DashboardScene) {
    const dataLayers = app_features_dashboard_scene_utils_dashboardSceneGraph__WEBPACK_IMPORTED_MODULE_13__.dashboardSceneGraph.getDataLayers(scene);
    const annotationLayers = [...dataLayers.state.annotationLayers];
    for (let annotation of annotations) {
      const newAnnotation = new app_features_dashboard_scene_scene_DashboardAnnotationsDataLayer__WEBPACK_IMPORTED_MODULE_11__.DashboardAnnotationsDataLayer({
        key: `annotations-${annotation.name}`,
        query: annotation,
        name: annotation.name,
        isEnabled: annotation.enable,
        isHidden: annotation.hide
      });
      annotationLayers.push(newAnnotation);
    }
    dataLayers.setState({ annotationLayers });
    return;
  }
  const dashboard = (0,app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_9__.getDashboardSrv)().getCurrent();
  if (dashboard) {
    dashboard.annotations.list = [...dashboard.annotations.list, ...annotations];
    if (dashboardRefreshDebouncer == null) {
      dashboardRefreshDebouncer = setTimeout(() => {
        dashboardRefreshDebouncer = null;
        (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_10__.getTimeSrv)().refreshTimeModel();
      });
    }
  }
}


/***/ }),

/***/ "./public/app/plugins/panel/timeseries/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/options/builder/tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/options/builder/legend.tsx");
/* harmony import */ var _TimeSeriesPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/timeseries/TimeSeriesPanel.tsx");
/* harmony import */ var _TimezonesEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/timeseries/TimezonesEditor.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/timeseries/config.ts");
/* harmony import */ var _migrations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/timeseries/migrations.ts");
/* harmony import */ var _suggestions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/timeseries/suggestions.ts");










const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_TimeSeriesPanel__WEBPACK_IMPORTED_MODULE_4__.TimeSeriesPanel).setPanelChangeHandler(_migrations__WEBPACK_IMPORTED_MODULE_7__.graphPanelChangedHandler).useFieldConfig((0,_config__WEBPACK_IMPORTED_MODULE_6__.getGraphFieldConfig)(_config__WEBPACK_IMPORTED_MODULE_6__.defaultGraphConfig)).setPanelOptions((builder) => {
  _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.addTooltipOptions(builder, false, true, _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.optsWithHideZeros);
  _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.addLegendOptions(builder);
  builder.addCustomEditor({
    id: "timezone",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("timeseries.name-time-zone", "Time zone"),
    path: "timezone",
    category: [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("timeseries.category-axis", "Axis")],
    editor: _TimezonesEditor__WEBPACK_IMPORTED_MODULE_5__.TimezonesEditor,
    defaultValue: void 0
  });
}).setSuggestionsSupplier(new _suggestions__WEBPACK_IMPORTED_MODULE_8__.TimeSeriesSuggestionsSupplier()).setDataSupport({ annotations: true, alertStates: true });


/***/ }),

/***/ "./public/app/plugins/panel/timeseries/plugins/AnnotationsPlugin2.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnotationsPlugin2: () => (/* binding */ AnnotationsPlugin2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/tinycolor2/esm/tinycolor.js");
/* harmony import */ var uplot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/uplot/dist/uPlot.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/dataframe/ArrayDataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/themes/colorManipulator.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/PanelContext.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Portal/Portal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/utils/colors.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _annotations2_AnnotationMarker2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/panel/timeseries/plugins/annotations2/AnnotationMarker2.tsx");










const renderLine = (ctx, y0, y1, x, color) => {
  ctx.beginPath();
  ctx.moveTo(x, y0);
  ctx.lineTo(x, y1);
  ctx.strokeStyle = color;
  ctx.stroke();
};
const DEFAULT_ANNOTATION_COLOR_HEX8 = (0,tinycolor2__WEBPACK_IMPORTED_MODULE_4__["default"])(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_ANNOTATION_COLOR).toHex8String();
function getVals(frame) {
  let vals = {};
  frame.fields.forEach((f) => {
    vals[f.name] = f.values;
  });
  return vals;
}
const AnnotationsPlugin2 = ({
  annotations,
  timeZone,
  config,
  newRange,
  setNewRange,
  replaceVariables,
  canvasRegionRendering = true
}) => {
  const [plot, setPlot] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const [portalRoot] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(() => (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.getPortalContainer)());
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useStyles2)(getStyles);
  const getColorByName = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useTheme2)().visualization.getColorByName;
  const [_, forceUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)((x) => x + 1, 0);
  const { canExecuteActions } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.usePanelContext)();
  const userCanExecuteActions = canExecuteActions?.() ?? false;
  const annos = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    let annos2 = annotations.filter(
      (frame) => frame.name !== "exemplar" && frame.length > 0 && frame.fields.some((f) => f.name === "time")
    );
    if (newRange) {
      let isRegion = newRange.to > newRange.from;
      const wipAnnoFrame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.arrayToDataFrame)([
        {
          time: newRange.from,
          timeEnd: isRegion ? newRange.to : null,
          isRegion,
          color: DEFAULT_ANNOTATION_COLOR_HEX8
        }
      ]);
      wipAnnoFrame.meta = {
        dataTopic: _grafana_data__WEBPACK_IMPORTED_MODULE_6__.DataTopic.Annotations,
        custom: {
          isWip: true
        }
      };
      annos2.push(wipAnnoFrame);
    }
    return annos2;
  }, [annotations, newRange]);
  const exitWipEdit = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    setNewRange(null);
  }, [setNewRange]);
  const annoRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(annos);
  annoRef.current = annos;
  const newRangeRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(newRange);
  newRangeRef.current = newRange;
  const xAxisRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(() => {
    config.addHook("ready", (u) => {
      let xAxisEl = u.root.querySelector(".u-axis");
      xAxisRef.current = xAxisEl;
      setPlot(u);
    });
    config.addHook("draw", (u) => {
      let annos2 = annoRef.current;
      const ctx = u.ctx;
      ctx.save();
      ctx.beginPath();
      ctx.rect(u.bbox.left, u.bbox.top, u.bbox.width, u.bbox.height);
      ctx.clip();
      annos2.forEach((frame) => {
        let vals = getVals(frame);
        if (frame.name === "xymark") {
          let xKey = config.scales[0].props.scaleKey;
          let yKey = config.scales[1].props.scaleKey;
          for (let i = 0; i < frame.length; i++) {
            let color = getColorByName(vals.color?.[i] || DEFAULT_ANNOTATION_COLOR_HEX8);
            let x0 = u.valToPos(vals.xMin[i], xKey, true);
            let x1 = u.valToPos(vals.xMax[i], xKey, true);
            let y0 = u.valToPos(vals.yMax[i], yKey, true);
            let y1 = u.valToPos(vals.yMin[i], yKey, true);
            ctx.fillStyle = _grafana_data__WEBPACK_IMPORTED_MODULE_8__.colorManipulator.alpha(color, vals.fillOpacity[i]);
            ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
            ctx.lineWidth = Math.round(vals.lineWidth[i] * uplot__WEBPACK_IMPORTED_MODULE_5__["default"].pxRatio);
            if (vals.lineStyle[i] === "dash") {
              ctx.setLineDash([5, 5]);
            } else {
              ctx.setLineDash([]);
            }
            ctx.strokeStyle = color;
            ctx.strokeRect(x0, y0, x1 - x0, y1 - y0);
          }
        } else {
          let y0 = u.bbox.top;
          let y1 = y0 + u.bbox.height;
          ctx.lineWidth = 2;
          ctx.setLineDash([5, 5]);
          for (let i = 0; i < vals.time.length; i++) {
            let color = getColorByName(vals.color?.[i] || DEFAULT_ANNOTATION_COLOR_HEX8);
            let x0 = u.valToPos(vals.time[i], "x", true);
            renderLine(ctx, y0, y1, x0, color);
            if (vals.isRegion?.[i]) {
              let x1 = u.valToPos(vals.timeEnd[i], "x", true);
              renderLine(ctx, y0, y1, x1, color);
              if (canvasRegionRendering) {
                ctx.fillStyle = _grafana_data__WEBPACK_IMPORTED_MODULE_8__.colorManipulator.alpha(color, 0.1);
                ctx.fillRect(x0, y0, x1 - x0, u.bbox.height);
              }
            }
          }
        }
      });
      ctx.restore();
    });
  }, [config, canvasRegionRendering, getColorByName]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (plot) {
      plot.redraw();
      setTimeout(() => {
        forceUpdate();
      }, 0);
    }
  }, [annos, plot]);
  if (plot) {
    let markers = annos.flatMap((frame, frameIdx) => {
      let vals = getVals(frame);
      let markers2 = [];
      for (let i = 0; i < vals.time.length; i++) {
        let color = getColorByName(vals.color?.[i] || _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_ANNOTATION_COLOR);
        let left = Math.round(plot.valToPos(vals.time[i], "x")) || 0;
        let style = null;
        let className = "";
        let isVisible = true;
        if (vals.isRegion?.[i]) {
          let right = Math.round(plot.valToPos(vals.timeEnd?.[i], "x")) || 0;
          isVisible = left < plot.rect.width && right > 0;
          if (isVisible) {
            let clampedLeft = Math.max(0, left);
            let clampedRight = Math.min(plot.rect.width, right);
            style = { left: clampedLeft, background: color, width: clampedRight - clampedLeft };
            className = styles.annoRegion;
          }
        } else {
          isVisible = left >= 0 && left <= plot.rect.width;
          if (isVisible) {
            style = { left, borderBottomColor: color };
            className = styles.annoMarker;
          }
        }
        if (isVisible) {
          let isWip = frame.meta?.custom?.isWip;
          markers2.push(
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _annotations2_AnnotationMarker2__WEBPACK_IMPORTED_MODULE_13__.AnnotationMarker2,
              {
                frame,
                annoIdx: i,
                annoVals: vals,
                className,
                style,
                timeZone,
                exitWipEdit: isWip ? exitWipEdit : null,
                portalRoot,
                canExecuteActions: userCanExecuteActions,
                replaceVariables
              },
              `${frameIdx}:${i}`
            )
          );
        }
      }
      return markers2;
    });
    return (0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal)(markers, xAxisRef.current);
  }
  return null;
};
const getStyles = () => ({
  annoMarker: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "absolute",
    width: 0,
    height: 0,
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderBottomWidth: "5px",
    borderBottomStyle: "solid",
    transform: "translateX(-50%)",
    cursor: "pointer",
    zIndex: 1
  }),
  annoRegion: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "absolute",
    height: "5px",
    cursor: "pointer",
    zIndex: 1
  })
});


/***/ }),

/***/ "./public/app/plugins/panel/timeseries/plugins/ExemplarMarker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExemplarMarker: () => (/* binding */ ExemplarMarker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _floating_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.mjs");
/* harmony import */ var _floating_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/utils/floating.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Portal/Portal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/CloseButton/CloseButton.tsx");
/* harmony import */ var app_features_visualization_data_hover_ExemplarTooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/visualization/data-hover/ExemplarTooltip.tsx");
/* harmony import */ var _status_history_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/panel/status-history/utils.ts");











const ExemplarMarker = ({
  timeZone,
  dataFrame,
  frameIndex,
  rowIndex,
  config,
  exemplarColor,
  clickedRowIndex,
  setClickedRowIndex,
  maxHeight,
  maxWidth
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getExemplarMarkerStyles, maxWidth);
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [isLocked, setIsLocked] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const placement = "bottom";
  const middleware = _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.getPositioningMiddleware(placement);
  const { context, refs, floatingStyles } = (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_2__.useFloating)({
    open: isOpen,
    placement,
    onOpenChange: setIsOpen,
    middleware,
    whileElementsMounted: _floating_ui_react__WEBPACK_IMPORTED_MODULE_3__.autoUpdate,
    strategy: "fixed"
  });
  const dismiss = (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDismiss)(context);
  const hover = (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_2__.useHover)(context, {
    handleClose: (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_2__.safePolygon)(),
    enabled: clickedRowIndex === void 0
  });
  const { getReferenceProps, getFloatingProps } = (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_2__.useInteractions)([dismiss, hover]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (clickedRowIndex !== rowIndex) {
      setIsLocked(false);
    }
  }, [clickedRowIndex, rowIndex]);
  const getSymbol = () => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "rect",
      {
        fill: exemplarColor,
        x: "3.38672",
        width: "4.78985",
        height: "4.78985",
        transform: "rotate(45 3.38672 0)"
      },
      "diamond"
    );
  };
  const lockExemplarModal = () => {
    setIsLocked(true);
  };
  const renderMarker = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => {
    const onClose = () => {
      setIsLocked(false);
      setIsOpen(false);
      setClickedRowIndex(void 0);
    };
    let items = [];
    let links = [];
    dataFrame.fields.forEach((field) => {
      const value = field.values[rowIndex];
      links.push(...(0,_status_history_utils__WEBPACK_IMPORTED_MODULE_12__.getDataLinks)(field, rowIndex));
      const fieldDisplay = field.display?.(value) ?? { text: `${value}`, numeric: +value };
      items.push({
        label: field.state?.displayName ?? field.name,
        value: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.formattedValueToString)(fieldDisplay)
      });
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      "div",
      {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.tooltipWrapper, isLocked && styles.pinned),
        ref: refs.setFloating,
        style: floatingStyles,
        ...getFloatingProps(),
        children: [
          isLocked && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_10__.CloseButton, { onClick: onClose }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_visualization_data_hover_ExemplarTooltip__WEBPACK_IMPORTED_MODULE_11__.ExemplarTooltip, { items, links, isPinned: isLocked, maxHeight })
        ]
      }
    );
  }, [
    dataFrame.fields,
    rowIndex,
    styles,
    isLocked,
    setClickedRowIndex,
    floatingStyles,
    getFloatingProps,
    refs.setFloating,
    maxHeight
  ]);
  const seriesColor = config.getSeries().find((s) => s.props.dataFrameFieldIndex?.frameIndex === frameIndex)?.props.lineColor;
  const onExemplarClick = () => {
    setClickedRowIndex(rowIndex);
    lockExemplarModal();
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "div",
      {
        ref: refs.setReference,
        className: styles.markerWrapper,
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_6__.selectors.components.DataSource.Prometheus.exemplarMarker,
        role: "button",
        tabIndex: 0,
        ...getReferenceProps(),
        onClick: onExemplarClick,
        onKeyDown: (e) => {
          if (e.key === "Enter") {
            onExemplarClick();
          }
        },
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          "svg",
          {
            viewBox: "0 0 7 7",
            width: "7",
            height: "7",
            style: { fill: seriesColor },
            className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.marble, (isOpen || isLocked) && styles.activeMarble),
            children: getSymbol()
          }
        )
      }
    ),
    (isOpen || isLocked) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Portal, { children: renderMarker() })
  ] });
};
const getExemplarMarkerStyles = (theme, maxWidth) => {
  return {
    markerWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: "0 4px 4px 4px",
      width: "8px",
      height: "8px",
      boxSizing: "content-box",
      transform: "translate3d(-50%, 0, 0)",
      "&:hover": {
        "> svg": {
          transform: "scale(1.3)",
          opacity: 1,
          filter: "drop-shadow(0 0 8px rgba(0, 0, 0, 0.5))"
        }
      }
    }),
    marker: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: 0,
      height: 0,
      borderLeft: "4px solid transparent",
      borderRight: "4px solid transparent",
      borderBottom: `4px solid ${theme.v1.palette.red}`,
      pointerEvents: "none"
    }),
    marble: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "block",
      opacity: 0.5,
      [theme.transitions.handleMotion("no-preference")]: {
        transition: "transform 0.15s ease-out"
      }
    }),
    activeMarble: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      transform: "scale(1.3)",
      opacity: 1,
      filter: "drop-shadow(0 0 8px rgba(0, 0, 0, 0.5))"
    }),
    tooltipWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      background: theme.colors.background.elevated,
      maxWidth: maxWidth ?? "none",
      whiteSpace: "pre",
      borderRadius: theme.shape.radius.default,
      position: "fixed",
      border: `1px solid ${theme.colors.border.weak}`,
      boxShadow: theme.shadows.z2,
      userSelect: "text"
    }),
    pinned: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      boxShadow: theme.shadows.z3
    })
  };
};


/***/ }),

/***/ "./public/app/plugins/panel/timeseries/plugins/ExemplarsPlugin.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExemplarsPlugin: () => (/* binding */ ExemplarsPlugin),
/* harmony export */   getVisibleLabels: () => (/* binding */ getVisibleLabels)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/geometries/EventsCanvas.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/types.ts");
/* harmony import */ var _ExemplarMarker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/timeseries/plugins/ExemplarMarker.tsx");






const ExemplarsPlugin = ({
  exemplars,
  timeZone,
  config,
  visibleSeries,
  maxHeight,
  maxWidth
}) => {
  const plotInstance = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const [lockedExemplarRowIndex, setLockedExemplarRowIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => {
    config.addHook("init", (u) => {
      plotInstance.current = u;
    });
  }, [config]);
  const mapExemplarToXYCoords = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((dataFrame, rowIndex) => {
    const time = dataFrame.fields.find((f) => f.name === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.TIME_SERIES_TIME_FIELD_NAME);
    const value = dataFrame.fields.find((f) => f.name === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.TIME_SERIES_VALUE_FIELD_NAME);
    if (!time || !value || !plotInstance.current) {
      return void 0;
    }
    const yScale = Object.keys(plotInstance.current.scales).find((scale) => !["x", "y"].some((key) => key === scale)) ?? _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.FIXED_UNIT;
    const yMin = plotInstance.current.scales[yScale].min;
    const yMax = plotInstance.current.scales[yScale].max;
    let y = value.values[rowIndex];
    if (yMin != null && y < yMin) {
      y = yMin;
    }
    if (yMax != null && y > yMax) {
      y = yMax;
    }
    return {
      x: plotInstance.current.valToPos(time.values[rowIndex], "x"),
      y: plotInstance.current.valToPos(y, yScale)
    };
  }, []);
  const renderMarker = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (dataFrame, rowIndex) => {
      const showMarker = visibleSeries !== void 0 ? showExemplarMarker(visibleSeries, dataFrame, rowIndex) : true;
      const markerColor = visibleSeries !== void 0 ? getExemplarColor(dataFrame, rowIndex, visibleSeries) : void 0;
      if (!showMarker) {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
      }
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _ExemplarMarker__WEBPACK_IMPORTED_MODULE_5__.ExemplarMarker,
        {
          setClickedRowIndex: setLockedExemplarRowIndex,
          clickedRowIndex: lockedExemplarRowIndex,
          timeZone,
          dataFrame,
          frameIndex: 0,
          rowIndex,
          config,
          exemplarColor: markerColor,
          maxHeight,
          maxWidth
        }
      );
    },
    [visibleSeries, lockedExemplarRowIndex, timeZone, config, maxHeight, maxWidth]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.EventsCanvas,
    {
      config,
      id: "exemplars",
      events: exemplars,
      renderEventMarker: renderMarker,
      mapEventToXYCoords: mapExemplarToXYCoords
    }
  );
};
const getVisibleLabels = (config, frames) => {
  const visibleSeries = config.series.filter((series) => series.props.show);
  const visibleLabels = [];
  if (frames?.length) {
    visibleSeries.forEach((plotInstance) => {
      const frameIndex = plotInstance.props?.dataFrameFieldIndex?.frameIndex;
      const fieldIndex = plotInstance.props?.dataFrameFieldIndex?.fieldIndex;
      if (frameIndex !== void 0 && fieldIndex !== void 0) {
        const field = frames[frameIndex]?.fields[fieldIndex];
        if (field?.labels) {
          visibleLabels.push({
            labels: field.labels,
            color: plotInstance.props?.lineColor ?? ""
          });
        }
      }
    });
  }
  return { labels: visibleLabels, totalSeriesCount: config.series.length };
};
const getExemplarColor = (dataFrame, rowIndex, visibleLabels) => {
  let exemplarColor;
  visibleLabels.labels.some((visibleLabel) => {
    const labelKeys = Object.keys(visibleLabel.labels);
    const fields = dataFrame.fields.filter((field) => {
      return labelKeys.find((labelKey) => labelKey === field.name);
    });
    if (fields.length) {
      const hasMatch = fields.every((field, index, fields2) => {
        const value = field.values[rowIndex];
        return visibleLabel.labels[field.name] === value;
      });
      if (hasMatch) {
        exemplarColor = visibleLabel.color;
        return true;
      }
    }
    return false;
  });
  return exemplarColor;
};
const showExemplarMarker = (visibleSeries, dataFrame, rowIndex) => {
  let showMarker = false;
  if (visibleSeries.labels.length === visibleSeries.totalSeriesCount) {
    showMarker = true;
  } else {
    visibleSeries.labels.some((visibleLabel) => {
      const labelKeys = Object.keys(visibleLabel.labels);
      if (Object.keys(visibleLabel.labels).length === 0) {
        showMarker = true;
      } else {
        const fields = dataFrame.fields.filter((field) => {
          return labelKeys.find((labelKey) => labelKey === field.name);
        });
        if (fields.length) {
          showMarker = visibleSeries.labels.some((series) => {
            return Object.keys(series.labels).every((label) => {
              const value = series.labels[label];
              return fields.find((field) => field.values[rowIndex] === value);
            });
          });
        }
      }
      return showMarker;
    });
  }
  return showMarker;
};


/***/ }),

/***/ "./public/app/plugins/panel/timeseries/plugins/OutsideRangePlugin.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutsideRangePlugin: () => (/* binding */ OutsideRangePlugin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");





const OutsideRangePlugin = ({ config, onChangeTimeRange }) => {
  const plotInstance = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const [timevalues, setTimeValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [timeRange, setTimeRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => {
    config.addHook("init", (u) => {
      plotInstance.current = u;
    });
    config.addHook("setScale", (u) => {
      setTimeValues(u.data?.[0] ?? []);
      setTimeRange(u.scales["x"] ?? void 0);
    });
  }, [config]);
  if (timevalues.length < 2 || !onChangeTimeRange) {
    return null;
  }
  if (!timeRange || !timeRange.time || !timeRange.min || !timeRange.max) {
    return null;
  }
  let i = 0, j = timevalues.length - 1;
  while (i <= j && timevalues[i] == null) {
    i++;
  }
  while (j >= 0 && timevalues[j] == null) {
    j--;
  }
  const first = timevalues[i];
  const last = timevalues[j];
  const fromX = timeRange.min;
  const toX = timeRange.max;
  if (first == null || last == null) {
    return null;
  }
  if (first <= toX && last >= fromX) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "div",
    {
      style: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: "100%",
        textAlign: "center"
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "timeseries.outside-range-plugin.data-outside-time-range", children: "Data outside time range" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button,
          {
            onClick: (v) => onChangeTimeRange({ from: first, to: last }),
            variant: "secondary",
            "data-testid": "time-series-zoom-to-data",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "timeseries.outside-range-plugin.zoom-to-data", children: "Zoom to data" })
          }
        )
      ] })
    }
  );
};
OutsideRangePlugin.displayName = "OutsideRangePlugin";


/***/ }),

/***/ "./public/app/plugins/panel/timeseries/plugins/ThresholdControlsPlugin.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThresholdControlsPlugin: () => (/* binding */ ThresholdControlsPlugin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/internal.ts");
/* harmony import */ var _ThresholdDragHandle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/timeseries/plugins/ThresholdDragHandle.tsx");






const GUTTER_SIZE = 60;
const ThresholdControlsPlugin = ({ config, fieldConfig, onThresholdsChange }) => {
  const plotInstance = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const [renderToken, setRenderToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => {
    config.setPadding([0, GUTTER_SIZE, 0, 0]);
    config.addHook("init", (u) => {
      plotInstance.current = u;
    });
    config.addHook("draw", () => {
      setRenderToken((s) => s + 1);
    });
  }, [config]);
  const thresholdHandles = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const plot = plotInstance.current;
    if (!plot) {
      return null;
    }
    const thresholds = fieldConfig.defaults.thresholds;
    if (!thresholds) {
      return null;
    }
    const scale = (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_4__.buildScaleKey)(fieldConfig.defaults, _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.number);
    const decimals = fieldConfig.defaults.decimals;
    const handles = [];
    for (let i = 0; i < thresholds.steps.length; i++) {
      const step = thresholds.steps[i];
      const yPos = plot.valToPos(step.value, scale);
      if (Number.isNaN(yPos) || !Number.isFinite(yPos)) {
        continue;
      }
      const height = plot.bbox.height / window.devicePixelRatio;
      const isEditable = typeof onThresholdsChange === "function";
      const onChange = isEditable ? (value) => {
        const nextSteps = [
          ...thresholds.steps.slice(0, i),
          ...thresholds.steps.slice(i + 1),
          { ...thresholds.steps[i], value }
        ].sort((a, b) => a.value - b.value);
        onThresholdsChange({
          ...thresholds,
          steps: nextSteps
        });
      } : void 0;
      const handle = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _ThresholdDragHandle__WEBPACK_IMPORTED_MODULE_5__.ThresholdDragHandle,
        {
          step,
          y: yPos,
          dragBounds: { top: 0, bottom: height },
          mapPositionToValue: (y) => plot.posToVal(y, scale),
          formatValue: (v) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getValueFormat)(scale)(v, decimals).text,
          onChange
        },
        `${step.value}-${i}`
      );
      handles.push(handle);
    }
    return handles;
  }, [renderToken, fieldConfig, onThresholdsChange]);
  if (!plotInstance.current) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "div",
    {
      style: {
        position: "absolute",
        overflow: "visible",
        left: `${(plotInstance.current.bbox.left + plotInstance.current.bbox.width) / window.devicePixelRatio}px`,
        top: `${plotInstance.current.bbox.top / window.devicePixelRatio}px`,
        width: `${GUTTER_SIZE}px`,
        height: `${plotInstance.current.bbox.height / window.devicePixelRatio}px`
      },
      children: thresholdHandles
    }
  );
};
ThresholdControlsPlugin.displayName = "ThresholdControlsPlugin";


/***/ }),

/***/ "./public/app/plugins/panel/timeseries/plugins/ThresholdDragHandle.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThresholdDragHandle: () => (/* binding */ ThresholdDragHandle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-draggable/build/cjs/cjs.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");







const ThresholdDragHandle = ({
  step,
  y,
  dragBounds,
  mapPositionToValue,
  formatValue,
  onChange
}) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useTheme2)();
  let yPos = y;
  let outOfBounds = "none";
  if (y < (dragBounds.top ?? 0)) {
    outOfBounds = "top";
  }
  if (y > (dragBounds.bottom ?? 0) + 22) {
    outOfBounds = "bottom";
  }
  if (outOfBounds === "bottom") {
    yPos = dragBounds.bottom ?? y;
  }
  if (outOfBounds === "top") {
    yPos = dragBounds.top ?? y;
  }
  const disabled = typeof onChange !== "function";
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles, step, outOfBounds, disabled);
  const [currentValue, setCurrentValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(step.value);
  const textColor = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return theme.colors.getContrastText(theme.visualization.getColorByName(step.color));
  }, [step.color, theme]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    (react_draggable__WEBPACK_IMPORTED_MODULE_4___default()),
    {
      axis: "y",
      grid: [1, 1],
      disabled,
      onStop: disabled ? lodash__WEBPACK_IMPORTED_MODULE_2__.noop : (_e, d) => {
        onChange(mapPositionToValue(d.lastY));
        return false;
      },
      onDrag: (_e, d) => setCurrentValue(mapPositionToValue(d.lastY)),
      position: { x: 0, y: yPos },
      bounds: dragBounds,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.handle, style: { color: textColor }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.handleText, children: formatValue(currentValue) }) })
    }
  );
};
ThresholdDragHandle.displayName = "ThresholdDragHandle";
const getStyles = (theme, step, outOfBounds, disabled) => {
  const mainColor = theme.visualization.getColorByName(step.color);
  const arrowStyles = getArrowStyles(outOfBounds);
  const isOutOfBounds = outOfBounds !== "none";
  return {
    handle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)(
      {
        display: "flex",
        alignItems: "center",
        position: "absolute",
        left: 0,
        width: "calc(100% - 9px)",
        height: "18px",
        marginTop: "-9px",
        borderColor: mainColor,
        cursor: disabled ? "initial" : "grab",
        borderTopRightRadius: theme.shape.radius.default,
        borderBottomRightRadius: theme.shape.radius.default,
        background: mainColor,
        fontSize: theme.typography.bodySmall.fontSize,
        "&:before": arrowStyles
      },
      isOutOfBounds && {
        marginTop: 0,
        borderRadius: theme.shape.radius.default
      }
    ),
    handleText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      textAlign: "center",
      width: "100%",
      display: "block",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    })
  };
};
function getArrowStyles(outOfBounds) {
  const inBounds = outOfBounds === "none";
  const triangle = (size) => ({
    content: "''",
    position: "absolute",
    bottom: 0,
    top: 0,
    width: 0,
    height: 0,
    left: 0,
    borderRightStyle: "solid",
    borderRightWidth: `${size}px`,
    borderRightColor: "inherit",
    borderTop: `${size}px solid transparent`,
    borderBottom: `${size}px solid transparent`
  });
  if (inBounds) {
    return (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      ...triangle(9),
      left: "-9px"
    });
  }
  if (outOfBounds === "top") {
    return (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      ...triangle(5),
      left: "calc(50% - 2.5px)",
      top: "-7px",
      transform: "rotate(90deg)"
    });
  }
  if (outOfBounds === "bottom") {
    return (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      ...triangle(5),
      left: "calc(50% - 2.5px)",
      top: "calc(100% - 2.5px)",
      transform: "rotate(-90deg)"
    });
  }
  return "";
}


/***/ }),

/***/ "./public/app/plugins/panel/timeseries/plugins/annotations2/AnnotationEditor2.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnotationEditor2: () => (/* binding */ AnnotationEditor2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-use/esm/useClickAway.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/datetime/formats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/datetime/formatter.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/PanelContext.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/TextArea/TextArea.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/core/components/Form/Form.tsx");
/* harmony import */ var app_core_components_TagFilter_TagFilter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/core/components/TagFilter/TagFilter.tsx");
/* harmony import */ var app_features_annotations_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/annotations/api.ts");












const AnnotationEditor2 = ({ annoVals, annoIdx, dismiss, timeZone, ...otherProps }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.useStyles2)(getStyles);
  const { onAnnotationCreate, onAnnotationUpdate } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.usePanelContext)();
  const clickAwayRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  (0,react_use__WEBPACK_IMPORTED_MODULE_5__["default"])(clickAwayRef, dismiss);
  const [createAnnotationState, createAnnotation] = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(async (event) => {
    const result = await onAnnotationCreate(event);
    dismiss();
    return result;
  });
  const [updateAnnotationState, updateAnnotation] = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(async (event) => {
    const result = await onAnnotationUpdate(event);
    dismiss();
    return result;
  });
  const timeFormatter = (value) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.dateTimeFormat)(value, {
    format: _grafana_data__WEBPACK_IMPORTED_MODULE_6__.systemDateFormats.fullDate,
    timeZone
  });
  const isUpdatingAnnotation = annoVals.id?.[annoIdx] != null;
  const isRegionAnnotation = annoVals.isRegion?.[annoIdx];
  const operation = isUpdatingAnnotation ? updateAnnotation : createAnnotation;
  const stateIndicator = isUpdatingAnnotation ? updateAnnotationState : createAnnotationState;
  const time = isRegionAnnotation ? `${timeFormatter(annoVals.time[annoIdx])} - ${timeFormatter(annoVals.timeEnd[annoIdx])}` : timeFormatter(annoVals.time[annoIdx]);
  const onSubmit = ({ tags, description }) => {
    operation({
      id: annoVals.id?.[annoIdx] ?? void 0,
      tags,
      description,
      from: Math.round(annoVals.time[annoIdx]),
      to: Math.round(annoVals.timeEnd?.[annoIdx] ?? annoVals.time[annoIdx])
    });
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { ref: clickAwayRef, className: styles.editor, ...otherProps, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.header, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { justifyContent: "space-between", alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: isUpdatingAnnotation ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("timeseries.annotation-editor2.edit-annotation", "Edit annotation") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("timeseries.annotation-editor2.add-annotation", "Add annotation") }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: time })
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_15__.Form,
      {
        onSubmit,
        defaultValues: { description: annoVals.text?.[annoIdx], tags: annoVals.tags?.[annoIdx] || [] },
        children: ({ register, errors, control }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.content, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Field,
                {
                  label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("timeseries.annotation-editor2.label-description", "Description"),
                  invalid: !!errors.description,
                  error: errors?.description?.message,
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.TextArea,
                    {
                      className: styles.textarea,
                      ...register("description", {
                        required: "Annotation description is required"
                      })
                    }
                  )
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("timeseries.annotation-editor2.label-tags", "Tags"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
                {
                  control,
                  name: "tags",
                  render: ({ field: { ref, onChange, ...field } }) => {
                    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      app_core_components_TagFilter_TagFilter__WEBPACK_IMPORTED_MODULE_16__.TagFilter,
                      {
                        allowCustomValue: true,
                        placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("timeseries.annotation-editor2.placeholder-add-tags", "Add tags"),
                        onChange,
                        tagOptions: (0,app_features_annotations_api__WEBPACK_IMPORTED_MODULE_17__.annotationServer)().tags,
                        tags: field.value
                      }
                    );
                  }
                }
              ) })
            ] }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.footer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { justifyContent: "flex-end", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button, { size: "sm", variant: "secondary", onClick: dismiss, fill: "outline", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.Trans, { i18nKey: "timeseries.annotation-editor2.cancel", children: "Cancel" }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button, { size: "sm", type: "submit", disabled: stateIndicator?.loading, children: stateIndicator?.loading ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("timeseries.annotation-editor2.saving", "Saving") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("timeseries.annotation-editor2.save", "Save") })
            ] }) })
          ] });
        }
      }
    )
  ] });
};
const getStyles = (theme) => {
  return {
    editor: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      background: theme.colors.background.elevated,
      border: `1px solid ${theme.colors.border.weak}`,
      borderRadius: theme.shape.radius.default,
      boxShadow: theme.shadows.z3,
      userSelect: "text",
      width: "460px"
    }),
    content: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: theme.spacing(1)
    }),
    header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      borderBottom: `1px solid ${theme.colors.border.weak}`,
      padding: theme.spacing(0.5, 1),
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.fontSize,
      color: theme.colors.text.primary
    }),
    footer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      borderTop: `1px solid ${theme.colors.border.weak}`,
      padding: theme.spacing(1, 1)
    }),
    textarea: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.text.secondary,
      fontSize: theme.typography.bodySmall.fontSize
    })
  };
};


/***/ }),

/***/ "./public/app/plugins/panel/timeseries/plugins/annotations2/AnnotationMarker2.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnotationMarker2: () => (/* binding */ AnnotationMarker2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");
/* harmony import */ var _floating_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/utils/floating.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_plugins_panel_status_history_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/status-history/utils.ts");
/* harmony import */ var _AnnotationEditor2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/timeseries/plugins/annotations2/AnnotationEditor2.tsx");
/* harmony import */ var _AnnotationTooltip2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/panel/timeseries/plugins/annotations2/AnnotationTooltip2.tsx");












const STATE_DEFAULT = 0;
const STATE_EDITING = 1;
const STATE_HOVERED = 2;
const AnnotationMarker2 = ({
  frame,
  annoVals,
  annoIdx,
  className,
  style,
  exitWipEdit,
  timeZone,
  portalRoot,
  replaceVariables,
  canExecuteActions
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const placement = "bottom";
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(exitWipEdit != null ? STATE_EDITING : STATE_DEFAULT);
  const { refs, floatingStyles } = (0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_3__.useFloating)({
    open: true,
    placement,
    middleware: _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.getPositioningMiddleware(placement),
    whileElementsMounted: _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.autoUpdate,
    strategy: "fixed"
  });
  const links = [];
  const actions = [];
  if (STATE_HOVERED) {
    frame.fields.forEach((field) => {
      links.push(...(0,app_plugins_panel_status_history_utils__WEBPACK_IMPORTED_MODULE_9__.getDataLinks)(field, annoIdx));
      if (canExecuteActions) {
        actions.push(...(0,app_plugins_panel_status_history_utils__WEBPACK_IMPORTED_MODULE_9__.getFieldActions)(frame, field, replaceVariables, annoIdx));
      }
    });
  }
  const contents = state === STATE_HOVERED ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _AnnotationTooltip2__WEBPACK_IMPORTED_MODULE_11__.AnnotationTooltip2,
    {
      annoIdx,
      annoVals,
      timeZone,
      onEdit: () => setState(STATE_EDITING),
      links,
      actions
    }
  ) : state === STATE_EDITING ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _AnnotationEditor2__WEBPACK_IMPORTED_MODULE_10__.AnnotationEditor2,
    {
      annoIdx,
      annoVals,
      timeZone,
      dismiss: () => {
        exitWipEdit?.();
        setState(STATE_DEFAULT);
      }
    }
  ) : null;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "div",
    {
      ref: refs.setReference,
      className,
      style,
      onMouseEnter: () => state !== STATE_EDITING && setState(STATE_HOVERED),
      onMouseLeave: () => state !== STATE_EDITING && setState(STATE_DEFAULT),
      "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_6__.selectors.pages.Dashboard.Annotations.marker,
      children: contents && (0,react_dom__WEBPACK_IMPORTED_MODULE_5__.createPortal)(
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: refs.setFloating, className: styles.annoBox, style: floatingStyles, "data-testid": "annotation-marker", children: contents }),
        portalRoot
      )
    }
  );
};
const getStyles = (theme) => ({
  // NOTE: shares much with TooltipPlugin2
  annoBox: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    top: 0,
    left: 0,
    zIndex: theme.zIndex.tooltip,
    borderRadius: theme.shape.radius.default,
    position: "absolute",
    background: theme.colors.background.primary,
    border: `1px solid ${theme.colors.border.weak}`,
    boxShadow: theme.shadows.z2,
    userSelect: "text",
    minWidth: "300px"
  })
});


/***/ }),

/***/ "./public/app/plugins/panel/timeseries/plugins/annotations2/AnnotationTooltip2.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnotationTooltip2: () => (/* binding */ AnnotationTooltip2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/text/sanitize.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/datetime/formats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/datetime/formatter.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/PanelContext.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Tags/Tag.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipFooter.tsx");
/* harmony import */ var app_features_alerting_state_alertDef__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/state/alertDef.ts");








const retFalse = () => false;
const AnnotationTooltip2 = ({ annoVals, annoIdx, timeZone, onEdit, links = [], actions = [] }) => {
  const annoId = annoVals.id?.[annoIdx];
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useStyles2)(getStyles);
  const { canEditAnnotations = retFalse, canDeleteAnnotations = retFalse, onAnnotationDelete } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.usePanelContext)();
  const dashboardUID = annoVals.dashboardUID?.[annoIdx];
  const canEdit = annoId !== 0 && canEditAnnotations(dashboardUID);
  const canDelete = annoId !== 0 && canDeleteAnnotations(dashboardUID) && onAnnotationDelete != null;
  const timeFormatter = (value) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.dateTimeFormat)(value, {
    format: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.systemDateFormats.fullDate,
    timeZone
  });
  let time = timeFormatter(annoVals.time[annoIdx]);
  let text = annoVals.text?.[annoIdx] ?? "";
  if (annoVals.isRegion?.[annoIdx]) {
    time += " - " + timeFormatter(annoVals.timeEnd[annoIdx]);
  }
  let avatar;
  if (annoVals.login?.[annoIdx] && annoVals.avatarUrl?.[annoIdx]) {
    avatar = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: styles.avatar, alt: "Annotation avatar", src: annoVals.avatarUrl[annoIdx] });
  }
  let state = null;
  let alertText = "";
  if (annoVals.alertId?.[annoIdx] !== void 0 && annoVals.newState?.[annoIdx]) {
    const stateModel = app_features_alerting_state_alertDef__WEBPACK_IMPORTED_MODULE_12__["default"].getStateDisplayModel(annoVals.newState[annoIdx]);
    state = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.alertState, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { className: stateModel.stateClass, children: stateModel.text }) });
    alertText = annoVals.data?.[annoIdx] ? app_features_alerting_state_alertDef__WEBPACK_IMPORTED_MODULE_12__["default"].getAlertAnnotationText(annoVals.data[annoIdx]) : "";
  } else if (annoVals.title?.[annoIdx]) {
    text = annoVals.title[annoIdx] + (text ? `<br />${text}` : "");
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.wrapper, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.header, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { gap: 2, basis: "100%", justifyContent: "space-between", alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.meta, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [
          avatar,
          state
        ] }),
        time
      ] }),
      (canEdit || canDelete) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.editControls, children: [
        canEdit && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.IconButton,
          {
            name: "pen",
            size: "sm",
            onClick: onEdit,
            tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("timeseries.annotation-tooltip2.tooltip-edit", "Edit")
          }
        ),
        canDelete && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.IconButton,
          {
            name: "trash-alt",
            size: "sm",
            onClick: () => onAnnotationDelete(annoId),
            tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("timeseries.annotation-tooltip2.tooltip-delete", "Delete")
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.body, children: [
      text && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.text, dangerouslySetInnerHTML: { __html: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.textUtil.sanitize(text) } }),
      alertText,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { gap: 0.5, wrap: true, children: annoVals.tags?.[annoIdx]?.map((t2, i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Tag, { name: t2 }, `${t2}-${i}`)) }) })
    ] }),
    (links.length > 0 || actions.length > 0) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_11__.VizTooltipFooter, { dataLinks: links, actions })
  ] });
};
const getStyles = (theme) => ({
  wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    zIndex: theme.zIndex.tooltip,
    whiteSpace: "initial",
    borderRadius: theme.shape.radius.default,
    background: theme.colors.background.elevated,
    border: `1px solid ${theme.colors.border.weak}`,
    boxShadow: theme.shadows.z3,
    userSelect: "text"
  }),
  header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(0.5, 1),
    borderBottom: `1px solid ${theme.colors.border.weak}`,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize,
    color: theme.colors.text.primary,
    display: "flex"
  }),
  meta: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    color: theme.colors.text.primary,
    fontWeight: 400
  }),
  editControls: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    "> :last-child": {
      marginLeft: 0
    }
  }),
  body: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(1),
    fontSize: theme.typography.bodySmall.fontSize,
    color: theme.colors.text.secondary,
    fontWeight: 400,
    a: {
      color: theme.colors.text.link,
      "&:hover": {
        textDecoration: "underline"
      }
    }
  }),
  text: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    paddingBottom: theme.spacing(1)
  }),
  avatar: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    borderRadius: theme.shape.radius.circle,
    width: 16,
    height: 16,
    marginRight: theme.spacing(1)
  }),
  alertState: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium
  })
});


/***/ }),

/***/ "./public/app/plugins/panel/timeseries/suggestions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeSeriesSuggestionsSupplier: () => (/* binding */ TimeSeriesSuggestionsSupplier),
/* harmony export */   getPrepareTimeseriesSuggestion: () => (/* binding */ getPrepareTimeseriesSuggestion)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/ids.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var app_types_suggestions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/suggestions.ts");





class TimeSeriesSuggestionsSupplier {
  getSuggestionsForData(builder) {
    const { dataSummary } = builder;
    if (!dataSummary.hasTimeField || !dataSummary.hasNumberField || dataSummary.rowCountTotal < 2) {
      return;
    }
    const list = builder.getListAppender({
      name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_4__.SuggestionName.LineChart,
      pluginId: "timeseries",
      options: {
        legend: {
          calcs: [],
          displayMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.LegendDisplayMode.Hidden,
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
          if (s.fieldConfig?.defaults.custom?.drawStyle !== _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.GraphDrawStyle.Bars) {
            s.fieldConfig.defaults.custom.lineWidth = Math.max(s.fieldConfig.defaults.custom.lineWidth ?? 1, 2);
          }
        }
      }
    });
    const maxBarsCount = 100;
    list.append({
      name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_4__.SuggestionName.LineChart
    });
    if (dataSummary.rowCountMax < 200) {
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_4__.SuggestionName.LineChartSmooth,
        fieldConfig: {
          defaults: {
            custom: {
              lineInterpolation: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.LineInterpolation.Smooth
            }
          },
          overrides: []
        }
      });
    }
    if (dataSummary.numberFieldCount === 1) {
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_4__.SuggestionName.AreaChart,
        fieldConfig: {
          defaults: {
            custom: {
              fillOpacity: 25
            }
          },
          overrides: []
        }
      });
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_4__.SuggestionName.LineChartGradientColorScheme,
        fieldConfig: {
          defaults: {
            color: {
              mode: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldColorModeId.ContinuousGrYlRd
            },
            custom: {
              gradientMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.GraphGradientMode.Scheme,
              lineInterpolation: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.LineInterpolation.Smooth,
              lineWidth: 3,
              fillOpacity: 20
            }
          },
          overrides: []
        }
      });
      if (dataSummary.rowCountMax < maxBarsCount) {
        list.append({
          name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_4__.SuggestionName.BarChart,
          fieldConfig: {
            defaults: {
              custom: {
                drawStyle: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.GraphDrawStyle.Bars,
                fillOpacity: 100,
                lineWidth: 1,
                gradientMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.GraphGradientMode.Hue
              }
            },
            overrides: []
          }
        });
        list.append({
          name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_4__.SuggestionName.BarChartGradientColorScheme,
          fieldConfig: {
            defaults: {
              color: {
                mode: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldColorModeId.ContinuousGrYlRd
              },
              custom: {
                drawStyle: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.GraphDrawStyle.Bars,
                fillOpacity: 90,
                lineWidth: 1,
                gradientMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.GraphGradientMode.Scheme
              }
            },
            overrides: []
          }
        });
      }
      return;
    }
    list.append({
      name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_4__.SuggestionName.AreaChartStacked,
      fieldConfig: {
        defaults: {
          custom: {
            fillOpacity: 25,
            stacking: {
              mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.StackingMode.Normal,
              group: "A"
            }
          }
        },
        overrides: []
      }
    });
    list.append({
      name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_4__.SuggestionName.AreaChartStackedPercent,
      fieldConfig: {
        defaults: {
          custom: {
            fillOpacity: 25,
            stacking: {
              mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.StackingMode.Percent,
              group: "A"
            }
          }
        },
        overrides: []
      }
    });
    if (dataSummary.rowCountTotal / dataSummary.numberFieldCount < maxBarsCount) {
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_4__.SuggestionName.BarChartStacked,
        fieldConfig: {
          defaults: {
            custom: {
              drawStyle: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.GraphDrawStyle.Bars,
              fillOpacity: 100,
              lineWidth: 1,
              gradientMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.GraphGradientMode.Hue,
              stacking: {
                mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.StackingMode.Normal,
                group: "A"
              }
            }
          },
          overrides: []
        }
      });
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_4__.SuggestionName.BarChartStackedPercent,
        fieldConfig: {
          defaults: {
            custom: {
              drawStyle: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.GraphDrawStyle.Bars,
              fillOpacity: 100,
              lineWidth: 1,
              gradientMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.GraphGradientMode.Hue,
              stacking: {
                mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.StackingMode.Percent,
                group: "A"
              }
            }
          },
          overrides: []
        }
      });
    }
  }
}
function getPrepareTimeseriesSuggestion(panelId) {
  const panel = (0,app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_3__.getDashboardSrv)().getCurrent()?.getPanelById(panelId);
  if (panel) {
    const transformations = panel.transformations ? [...panel.transformations] : [];
    transformations.push({
      id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataTransformerID.prepareTimeSeries,
      options: {
        format: "wide"
      }
    });
    return {
      name: "Transform to wide time series format",
      pluginId: "timeseries",
      transformations
    };
  }
  return void 0;
}


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
//# sourceMappingURL=timeseriesPanel.00a1420bb077030abead.js.map