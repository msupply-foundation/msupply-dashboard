"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["statusHistoryPanel"],{

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


/***/ }),

/***/ "./public/app/plugins/panel/state-timeline/StateTimelineTooltip.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateTimelineTooltip: () => (/* binding */ StateTimelineTooltip)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/context/plugins/usePluginContext.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_schema_dist_esm_common_common_gen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipContent.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipFooter.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipHeader.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipWrapper.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/utils.ts");
/* harmony import */ var app_core_components_TimelineChart_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/TimelineChart/utils.ts");
/* harmony import */ var _status_history_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/status-history/utils.ts");
/* harmony import */ var _timeseries_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/panel/timeseries/utils.ts");









const StateTimelineTooltip = ({
  series,
  dataIdxs,
  seriesIdx,
  mode = _grafana_schema_dist_esm_common_common_gen__WEBPACK_IMPORTED_MODULE_3__.TooltipDisplayMode.Single,
  sortOrder = _grafana_schema_dist_esm_common_common_gen__WEBPACK_IMPORTED_MODULE_3__.SortOrder.None,
  isPinned,
  annotate,
  timeRange,
  withDuration,
  maxHeight,
  replaceVariables,
  dataLinks
}) => {
  const pluginContext = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.usePluginContext)();
  const xField = series.fields[0];
  const dataIdx = seriesIdx != null ? dataIdxs[seriesIdx] : dataIdxs.find((idx) => idx != null);
  const xVal = xField.display(xField.values[dataIdx]).text;
  mode = isPinned ? _grafana_schema_dist_esm_common_common_gen__WEBPACK_IMPORTED_MODULE_3__.TooltipDisplayMode.Single : mode;
  const contentItems = (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__.getContentItems)(series.fields, xField, dataIdxs, seriesIdx, mode, sortOrder);
  let endTime = null;
  if (withDuration && mode === _grafana_schema_dist_esm_common_common_gen__WEBPACK_IMPORTED_MODULE_3__.TooltipDisplayMode.Single) {
    const field = series.fields[seriesIdx];
    const nextStateIdx = (0,app_core_components_TimelineChart_utils__WEBPACK_IMPORTED_MODULE_9__.findNextStateIndex)(field, dataIdx);
    let nextStateTs;
    if (nextStateIdx != null) {
      nextStateTs = xField.values[nextStateIdx];
    }
    const stateTs = xField.values[dataIdx];
    let duration;
    if (nextStateTs) {
      duration = nextStateTs && (0,app_core_components_TimelineChart_utils__WEBPACK_IMPORTED_MODULE_9__.fmtDuration)(nextStateTs - stateTs);
      endTime = nextStateTs;
    } else {
      const to = timeRange.to.valueOf();
      duration = (0,app_core_components_TimelineChart_utils__WEBPACK_IMPORTED_MODULE_9__.fmtDuration)(to - stateTs);
      endTime = to;
    }
    contentItems.push({ label: "Duration", value: duration });
  }
  let footer;
  if (seriesIdx != null) {
    const field = series.fields[seriesIdx];
    const hasOneClickLink = dataLinks.some((dataLink) => dataLink.oneClick === true);
    if (isPinned || hasOneClickLink) {
      const visualizationType = pluginContext?.meta?.id ?? "state-timeline";
      const dataIdx2 = dataIdxs[seriesIdx];
      const actions = (0,_status_history_utils__WEBPACK_IMPORTED_MODULE_10__.getFieldActions)(series, field, replaceVariables, dataIdx2, visualizationType);
      footer = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_5__.VizTooltipFooter, { dataLinks, actions, annotate });
    }
  }
  const headerItem = {
    label: xField.type === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.time ? "" : xField.state?.displayName ?? xField.name,
    value: endTime ? xVal + " - \n" + xField.display(endTime).text : xVal
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_7__.VizTooltipWrapper, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_6__.VizTooltipHeader, { item: headerItem, isPinned }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_4__.VizTooltipContent,
      {
        items: contentItems,
        isPinned,
        scrollable: (0,_timeseries_utils__WEBPACK_IMPORTED_MODULE_11__.isTooltipScrollable)({ mode, maxHeight }),
        maxHeight
      }
    ),
    footer
  ] });
};


/***/ }),

/***/ "./public/app/plugins/panel/state-timeline/hooks.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePagination: () => (/* binding */ usePagination)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useMeasure.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Pagination/Pagination.tsx");
/* harmony import */ var app_core_components_TimelineChart_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/TimelineChart/utils.ts");







const paginationStyles = {
  paginationContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    justifyContent: "center",
    width: "100%"
  }),
  paginationElement: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: "8px"
  })
};
function usePagination(frames, perPage) {
  const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
  const [paginationWrapperRef, { height: paginationHeight, width: paginationWidth }] = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const pagedFrames = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => !perPage || frames == null ? frames : (0,app_core_components_TimelineChart_utils__WEBPACK_IMPORTED_MODULE_5__.makeFramePerSeries)(frames),
    [frames, perPage]
  );
  if (!perPage || pagedFrames == null) {
    return {
      paginatedFrames: pagedFrames,
      paginationRev: "disabled",
      paginationElement: void 0,
      paginationHeight: 0
    };
  }
  const numberOfPages = Math.ceil(pagedFrames.length / perPage);
  const currentPageCapped = Math.min(currentPage, numberOfPages);
  const pageOffset = (currentPageCapped - 1) * perPage;
  const currentPageFrames = pagedFrames.slice(pageOffset, pageOffset + perPage);
  const paginationRev = `${currentPageCapped}/${perPage}`;
  const showSmallVersion = paginationWidth < 550;
  const paginationElement = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: paginationStyles.paginationContainer, ref: paginationWrapperRef, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Pagination,
    {
      className: paginationStyles.paginationElement,
      currentPage: currentPageCapped,
      numberOfPages,
      showSmallVersion,
      onNavigate: setCurrentPage
    }
  ) });
  return { paginatedFrames: currentPageFrames, paginationRev, paginationElement, paginationHeight };
}


/***/ }),

/***/ "./public/app/plugins/panel/state-timeline/styles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   containerStyles: () => (/* binding */ containerStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");


const containerStyles = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  display: "flex",
  flexDirection: "column"
});


/***/ }),

/***/ "./public/app/plugins/panel/status-history/StatusHistoryPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatusHistoryPanel: () => (/* binding */ StatusHistoryPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/field/fieldOverrides.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/dashboard.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/components/PanelDataErrorView.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/PanelContext.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/plugins/TooltipPlugin2.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/plugins/EventBusPlugin.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_TimelineChart_TimelineChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/components/TimelineChart/TimelineChart.tsx");
/* harmony import */ var app_core_components_TimelineChart_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/components/TimelineChart/utils.ts");
/* harmony import */ var _state_timeline_StateTimelineTooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/panel/state-timeline/StateTimelineTooltip.tsx");
/* harmony import */ var _state_timeline_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/panel/state-timeline/hooks.tsx");
/* harmony import */ var _state_timeline_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/panel/state-timeline/styles.ts");
/* harmony import */ var _timeseries_plugins_AnnotationsPlugin2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/panel/timeseries/plugins/AnnotationsPlugin2.tsx");
/* harmony import */ var _timeseries_plugins_OutsideRangePlugin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/plugins/panel/timeseries/plugins/OutsideRangePlugin.tsx");
/* harmony import */ var _timeseries_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/plugins/panel/timeseries/utils.ts");
















const StatusHistoryPanel = ({
  data,
  timeRange,
  timeZone,
  options,
  width,
  height,
  fieldConfig,
  replaceVariables,
  onChangeTimeRange,
  id: panelId
}) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useTheme2)();
  const [newAnnotationRange, setNewAnnotationRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const { sync, eventsScope, canAddAnnotations, eventBus, canExecuteActions } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.usePanelContext)();
  const { dataLinkPostProcessor } = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.useDataLinksContext)();
  const cursorSync = sync?.() ?? _grafana_data__WEBPACK_IMPORTED_MODULE_3__.DashboardCursorSync.Off;
  const enableAnnotationCreation = Boolean(canAddAnnotations && canAddAnnotations());
  const userCanExecuteActions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => canExecuteActions?.() ?? false, [canExecuteActions]);
  const { frames, warn } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => (0,app_core_components_TimelineChart_utils__WEBPACK_IMPORTED_MODULE_12__.prepareTimelineFields)(data.series, false, timeRange, theme),
    [data.series, timeRange, theme]
  );
  const { paginatedFrames, paginationRev, paginationElement, paginationHeight } = (0,_state_timeline_hooks__WEBPACK_IMPORTED_MODULE_14__.usePagination)(
    frames,
    options.perPage
  );
  const legendItems = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => (0,app_core_components_TimelineChart_utils__WEBPACK_IMPORTED_MODULE_12__.prepareTimelineLegendItems)(paginatedFrames, options.legend, theme),
    [paginatedFrames, options.legend, theme]
  );
  const timezones = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_timeseries_utils__WEBPACK_IMPORTED_MODULE_18__.getTimezones)(options.timezone, timeZone), [options.timezone, timeZone]);
  if (!paginatedFrames || typeof warn === "string") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.PanelDataErrorView, { panelId, fieldConfig, data, message: warn, needsTimeField: true });
  }
  if (paginatedFrames[0].length > width / 2) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "panel-empty", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "status-history.status-history-panel.too-many-points", count: paginatedFrames[0].length, children: [
      "Too many points to visualize properly. ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
      "Update the query to return fewer points. ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
      "(",
      "{{count}}",
      " points received)"
    ] }) }) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: _state_timeline_styles__WEBPACK_IMPORTED_MODULE_15__.containerStyles, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      app_core_components_TimelineChart_TimelineChart__WEBPACK_IMPORTED_MODULE_11__.TimelineChart,
      {
        theme,
        frames: paginatedFrames,
        structureRev: data.structureRev,
        paginationRev,
        timeRange,
        timeZone: timezones,
        width,
        height: height - paginationHeight,
        legendItems,
        ...options,
        mode: app_core_components_TimelineChart_utils__WEBPACK_IMPORTED_MODULE_12__.TimelineMode.Samples,
        replaceVariables,
        dataLinkPostProcessor,
        cursorSync,
        children: (builder, alignedFrame) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            cursorSync !== _grafana_data__WEBPACK_IMPORTED_MODULE_3__.DashboardCursorSync.Off && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.EventBusPlugin, { config: builder, eventBus, frame: alignedFrame }),
            options.tooltip.mode !== _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TooltipDisplayMode.None && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.TooltipPlugin2,
              {
                config: builder,
                hoverMode: options.tooltip.mode === _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TooltipDisplayMode.Multi ? _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.TooltipHoverMode.xAll : _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.TooltipHoverMode.xOne,
                queryZoom: onChangeTimeRange,
                syncMode: cursorSync,
                syncScope: eventsScope,
                getDataLinks: (seriesIdx, dataIdx) => alignedFrame.fields[seriesIdx].getLinks?.({ valueRowIndex: dataIdx }) ?? [],
                render: (u, dataIdxs, seriesIdx, isPinned, dismiss, timeRange2, viaSync, dataLinks) => {
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
                  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _state_timeline_StateTimelineTooltip__WEBPACK_IMPORTED_MODULE_13__.StateTimelineTooltip,
                    {
                      series: alignedFrame,
                      dataIdxs,
                      seriesIdx,
                      mode: viaSync ? _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TooltipDisplayMode.Multi : options.tooltip.mode,
                      sortOrder: options.tooltip.sort,
                      isPinned,
                      timeRange,
                      annotate: enableAnnotationCreation ? annotate : void 0,
                      withDuration: false,
                      maxHeight: options.tooltip.maxHeight,
                      replaceVariables,
                      dataLinks,
                      canExecuteActions: userCanExecuteActions
                    }
                  );
                },
                maxWidth: options.tooltip.maxWidth
              }
            ),
            alignedFrame.fields[0].config.custom?.axisPlacement !== _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.AxisPlacement.Hidden && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _timeseries_plugins_AnnotationsPlugin2__WEBPACK_IMPORTED_MODULE_16__.AnnotationsPlugin2,
              {
                replaceVariables,
                annotations: data.annotations ?? [],
                config: builder,
                timeZone,
                newRange: newAnnotationRange,
                setNewRange: setNewAnnotationRange,
                canvasRegionRendering: false
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_timeseries_plugins_OutsideRangePlugin__WEBPACK_IMPORTED_MODULE_17__.OutsideRangePlugin, { config: builder, onChangeTimeRange })
          ] });
        }
      }
    ),
    paginationElement
  ] });
};


/***/ }),

/***/ "./public/app/plugins/panel/status-history/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/fieldOverrides.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/options/builder/hideSeries.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/options/builder/axis.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/options/builder/legend.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/options/builder/tooltip.tsx");
/* harmony import */ var _StatusHistoryPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/status-history/StatusHistoryPanel.tsx");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/status-history/panelcfg.gen.ts");
/* harmony import */ var _suggestions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/panel/status-history/suggestions.ts");








const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_StatusHistoryPanel__WEBPACK_IMPORTED_MODULE_9__.StatusHistoryPanel).useFieldConfig({
  standardOptions: {
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldConfigProperty.Color]: {
      settings: {
        byValueSupport: true
      },
      defaultValue: {
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldColorModeId.Thresholds
      }
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldConfigProperty.Links]: {
      settings: {
        showOneClick: true
      }
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldConfigProperty.Actions]: {
      hideFromDefaults: false
    }
  },
  useCustomConfig: (builder) => {
    const category = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("status-history.category-status-history", "Status history")];
    builder.addSliderInput({
      path: "lineWidth",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("status-history.name-line-width", "Line width"),
      category,
      defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_10__.defaultFieldConfig.lineWidth,
      settings: {
        min: 0,
        max: 10,
        step: 1
      }
    }).addSliderInput({
      path: "fillOpacity",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("status-history.name-fill-opacity", "Fill opacity"),
      category,
      defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_10__.defaultFieldConfig.fillOpacity,
      settings: {
        min: 0,
        max: 100,
        step: 1
      }
    });
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.addHideFrom(builder);
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.addAxisPlacement(
      builder,
      (placement) => placement === _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.AxisPlacement.Auto || placement === _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.AxisPlacement.Hidden
    );
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.addAxisWidth(builder);
  }
}).setPanelOptions((builder) => {
  const category = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("status-history.category-status-history", "Status history")];
  builder.addRadio({
    path: "showValue",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("status-history.name-show-values", "Show values"),
    category,
    settings: {
      options: [
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.VisibilityMode.Auto, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("status-history.show-values-options.label-auto", "Auto") },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.VisibilityMode.Always, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("status-history.show-values-options.label-always", "Always") },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.VisibilityMode.Never, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("status-history.show-values-options.label-never", "Never") }
      ]
    },
    defaultValue: _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.VisibilityMode.Auto
  }).addSliderInput({
    path: "rowHeight",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("status-history.name-row-height", "Row height"),
    category,
    defaultValue: 0.9,
    settings: {
      min: 0,
      max: 1,
      step: 0.01
    }
  }).addSliderInput({
    path: "colWidth",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("status-history.name-column-width", "Column width"),
    category,
    defaultValue: 0.9,
    settings: {
      min: 0,
      max: 1,
      step: 0.01
    }
  }).addNumberInput({
    path: "perPage",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("status-history.name-page-size", "Page size (enable pagination)"),
    category,
    settings: {
      min: 1,
      step: 1,
      integer: true
    }
  });
  _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.addLegendOptions(builder, false);
  _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.addTooltipOptions(builder);
}).setSuggestionsSupplier(new _suggestions__WEBPACK_IMPORTED_MODULE_11__.StatusHistorySuggestionsSupplier()).setDataSupport({ annotations: true });


/***/ }),

/***/ "./public/app/plugins/panel/status-history/panelcfg.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultFieldConfig: () => (/* binding */ defaultFieldConfig),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");


const defaultOptions = {
  colWidth: 0.9,
  perPage: 20,
  rowHeight: 0.9,
  showValue: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.VisibilityMode.Auto
};
const defaultFieldConfig = {
  fillOpacity: 70,
  lineWidth: 1
};


/***/ }),

/***/ "./public/app/plugins/panel/status-history/suggestions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatusHistorySuggestionsSupplier: () => (/* binding */ StatusHistorySuggestionsSupplier)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/suggestions.ts");



class StatusHistorySuggestionsSupplier {
  getSuggestionsForData(builder) {
    const { dataSummary: ds } = builder;
    if (!ds.hasData) {
      return;
    }
    if (!ds.hasTimeField || !ds.hasStringField && !ds.hasNumberField) {
      return;
    }
    if (ds.numberFieldCount >= 30) {
      return;
    }
    if (ds.rowCountMax > 100) {
      return;
    }
    if (ds.preferredVisualisationType === "logs") {
      return;
    }
    const list = builder.getListAppender({
      name: "",
      pluginId: "status-history",
      options: {},
      fieldConfig: {
        defaults: {
          color: {
            mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.ContinuousGrYlRd
          },
          custom: {}
        },
        overrides: []
      },
      cardOptions: {
        previewModifier: (s) => {
          s.options.colWidth = 0.7;
        }
      }
    });
    list.append({ name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionName.StatusHistory });
  }
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
//# sourceMappingURL=statusHistoryPanel.8a0cf6968c1a7cd02887.js.map