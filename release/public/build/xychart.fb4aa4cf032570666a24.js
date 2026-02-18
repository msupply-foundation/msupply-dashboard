"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["xychart"],{

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

/***/ "./public/app/core/components/Layers/LayerName.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayerName: () => (/* binding */ LayerName)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldValidationMessage.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");






const LayerName = ({ name, onChange, verifyLayerNameUniqueness, overrideStyles }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [validationError, setValidationError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const onEditLayer = (event) => {
    setIsEditing(true);
  };
  const onEndEditName = (newName) => {
    setIsEditing(false);
    if (validationError) {
      setValidationError(null);
      return;
    }
    if (name !== newName) {
      onChange(newName);
    }
  };
  const onInputChange = (event) => {
    const newName = event.currentTarget.value.trim();
    if (newName.length === 0) {
      setValidationError("An empty layer name is not allowed");
      return;
    }
    if (verifyLayerNameUniqueness && !verifyLayerNameUniqueness(newName) && newName !== name) {
      setValidationError("Layer name already exists");
      return;
    }
    if (validationError) {
      setValidationError(null);
    }
  };
  const onEditLayerBlur = (event) => {
    onEndEditName(event.currentTarget.value.trim());
  };
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      onEndEditName(event.currentTarget.value);
    }
  };
  const onFocus = (event) => {
    event.target.select();
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.wrapper, children: [
    !isEditing && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      "button",
      {
        className: styles.layerNameWrapper,
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("layers.layer-name.edit-layer-title", "Edit layer name"),
        onClick: onEditLayer,
        "data-testid": "layer-name-div",
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: overrideStyles ? "" : styles.layerName, children: name }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { name: "pen", className: styles.layerEditIcon, size: "sm" })
        ]
      }
    ),
    isEditing && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input,
        {
          type: "text",
          defaultValue: name,
          onBlur: onEditLayerBlur,
          autoFocus: true,
          onKeyDown,
          onFocus,
          invalid: validationError !== null,
          onChange: onInputChange,
          className: styles.layerNameInput,
          "data-testid": "layer-name-input"
        }
      ),
      validationError && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.FieldValidationMessage, { horizontal: true, children: validationError })
    ] })
  ] }) });
};
const getStyles = (theme) => {
  return {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "Wrapper",
      display: "flex",
      alignItems: "center",
      marginLeft: theme.spacing(0.5)
    }),
    layerNameWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      cursor: "pointer",
      border: "1px solid transparent",
      borderRadius: theme.shape.radius.default,
      alignItems: "center",
      padding: `0 0 0 ${theme.spacing(0.5)}`,
      margin: 0,
      background: "transparent",
      "&:hover": {
        background: theme.colors.action.hover,
        border: `1px dashed ${theme.colors.border.strong}`
      },
      "&:focus": {
        border: `2px solid ${theme.colors.primary.border}`
      },
      "&:hover, &:focus": {
        ".query-name-edit-icon": {
          visibility: "visible"
        }
      }
    }),
    layerName: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.colors.primary.text,
      cursor: "pointer",
      overflow: "hidden",
      marginLeft: theme.spacing(0.5)
    }),
    layerEditIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(
      (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        marginLeft: theme.spacing(2),
        visibility: "hidden"
      }),
      "query-name-edit-icon"
    ),
    layerNameInput: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      maxWidth: "300px",
      margin: "-4px 0"
    })
  };
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

/***/ "./public/app/plugins/panel/heatmap/panelcfg.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeatmapColorMode: () => (/* binding */ HeatmapColorMode),
/* harmony export */   HeatmapColorScale: () => (/* binding */ HeatmapColorScale),
/* harmony export */   HeatmapSelectionMode: () => (/* binding */ HeatmapSelectionMode),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");


var HeatmapColorMode = /* @__PURE__ */ ((HeatmapColorMode2) => {
  HeatmapColorMode2["Opacity"] = "opacity";
  HeatmapColorMode2["Scheme"] = "scheme";
  return HeatmapColorMode2;
})(HeatmapColorMode || {});
var HeatmapColorScale = /* @__PURE__ */ ((HeatmapColorScale2) => {
  HeatmapColorScale2["Exponential"] = "exponential";
  HeatmapColorScale2["Linear"] = "linear";
  return HeatmapColorScale2;
})(HeatmapColorScale || {});
var HeatmapSelectionMode = /* @__PURE__ */ ((HeatmapSelectionMode2) => {
  HeatmapSelectionMode2["X"] = "x";
  HeatmapSelectionMode2["Xy"] = "xy";
  HeatmapSelectionMode2["Y"] = "y";
  return HeatmapSelectionMode2;
})(HeatmapSelectionMode || {});
const defaultOptions = {
  calculate: false,
  cellGap: 1,
  cellValues: {},
  color: {
    /**
     * mode:     HeatmapColorMode // TODO: fix after remove when https://github.com/grafana/cuetsy/issues/74 is fixed
     */
    scheme: "Oranges",
    fill: "dark-orange",
    /**
     * scale:    HeatmapColorScale // TODO: fix after remove when https://github.com/grafana/cuetsy/issues/74 is fixed
     */
    reverse: false,
    exponent: 0.5,
    steps: 64
  },
  exemplars: {
    color: "rgba(255,0,255,0.7)"
  },
  filterValues: {
    le: 1e-9
  },
  legend: {
    show: true
  },
  selectionMode: "x" /* X */,
  showValue: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.VisibilityMode.Auto,
  tooltip: {
    mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.TooltipDisplayMode.Single,
    yHistogram: false,
    showColorScale: false
  }
};


/***/ }),

/***/ "./public/app/plugins/panel/heatmap/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeatmapColorMode: () => (/* reexport safe */ _panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.HeatmapColorMode),
/* harmony export */   HeatmapColorScale: () => (/* reexport safe */ _panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.HeatmapColorScale),
/* harmony export */   HeatmapSelectionMode: () => (/* reexport safe */ _panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.HeatmapSelectionMode),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/panel/heatmap/panelcfg.gen.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");




const defaultOptions = {
  ..._panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.defaultOptions,
  color: { ..._panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.defaultOptions.color, mode: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.HeatmapColorMode.Scheme, scale: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.HeatmapColorScale.Exponential },
  yAxis: { ..._panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.defaultOptions.yAxis, axisPlacement: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.AxisPlacement.Left },
  rowsFrame: { ..._panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.defaultOptions.rowsFrame, layout: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.HeatmapCellLayout.auto }
};


/***/ }),

/***/ "./public/app/plugins/panel/heatmap/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boundedMinMax: () => (/* binding */ boundedMinMax),
/* harmony export */   heatmapPathsDense: () => (/* binding */ heatmapPathsDense),
/* harmony export */   heatmapPathsPoints: () => (/* binding */ heatmapPathsPoints),
/* harmony export */   heatmapPathsSparse: () => (/* binding */ heatmapPathsSparse),
/* harmony export */   prepConfig: () => (/* binding */ prepConfig),
/* harmony export */   valuesToFills: () => (/* binding */ valuesToFills)
/* harmony export */ });
/* harmony import */ var uplot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/uplot/dist/uPlot.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/field/displayProcessor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/histogram.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/dataFrameTypes.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/config/UPlotConfigBuilder.ts");
/* harmony import */ var app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/transformers/calculateHeatmap/heatmap.ts");
/* harmony import */ var _barchart_quadtree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/barchart/quadtree.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/heatmap/types.ts");








function prepConfig(opts) {
  const {
    dataRef,
    theme,
    timeZone,
    getTimeRange,
    cellGap,
    hideLE,
    hideGE,
    yAxisConfig,
    ySizeDivisor,
    selectionMode = _types__WEBPACK_IMPORTED_MODULE_10__.HeatmapSelectionMode.X
  } = opts;
  const xScaleKey = "x";
  let isTime = true;
  if (dataRef.current?.heatmap?.fields[0].type !== _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.time) {
    isTime = false;
  }
  const pxRatio = devicePixelRatio;
  let heatmapType = dataRef.current?.heatmap?.meta?.type;
  const exemplarFillColor = theme.visualization.getColorByName(opts.exemplarColor);
  let qt;
  let hRect;
  let builder = new _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.UPlotConfigBuilder(timeZone);
  builder.addHook("init", (u) => {
    u.root.querySelectorAll(".u-cursor-pt").forEach((el) => {
      Object.assign(el.style, {
        borderRadius: "0",
        border: "1px solid white",
        background: "transparent"
      });
    });
  });
  if (isTime) {
    builder.addHook("setData", (u) => {
      let { min: xMin, max: xMax } = u.scales.x;
      let min = getTimeRange().from.valueOf();
      let max = getTimeRange().to.valueOf();
      if (xMin !== min || xMax !== max) {
        queueMicrotask(() => {
          u.setScale(xScaleKey, { min, max });
        });
      }
    });
  }
  builder.addHook("drawClear", (u) => {
    qt = qt || new _barchart_quadtree__WEBPACK_IMPORTED_MODULE_9__.Quadtree(0, 0, u.bbox.width, u.bbox.height);
    qt.clear();
    u.series.forEach((s, i) => {
      if (i > 0) {
        s._paths = null;
      }
    });
  });
  builder.setMode(2);
  builder.addScale({
    scaleKey: xScaleKey,
    isTime,
    orientation: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleOrientation.Horizontal,
    direction: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleDirection.Right,
    // TODO: expand by x bucket size and layout
    range: (u, dataMin, dataMax) => {
      if (isTime) {
        return [getTimeRange().from.valueOf(), getTimeRange().to.valueOf()];
      } else {
        if (dataRef.current?.xLayout === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.le) {
          return [dataMin - dataRef.current?.xBucketSize, dataMax];
        } else if (dataRef.current?.xLayout === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.ge) {
          return [dataMin, dataMax + dataRef.current?.xBucketSize];
        } else {
          let offset = dataRef.current?.xBucketSize / 2;
          return [dataMin - offset, dataMax + offset];
        }
      }
    }
  });
  let incrs;
  if (!isTime) {
    incrs = [];
    for (let i = 0; i < 10; i++) {
      incrs.push(i * dataRef.current?.xBucketSize);
    }
  }
  let xField = dataRef.current?.heatmap?.fields[0];
  xField.display ??= (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getDisplayProcessor)({
    field: xField,
    theme,
    timeZone
  });
  builder.addAxis({
    scaleKey: xScaleKey,
    placement: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.AxisPlacement.Bottom,
    incrs,
    isTime,
    theme,
    timeZone,
    formatValue: isTime && xField.config.unit?.startsWith("time:") ? (v, decimals) => xField.display(v, decimals).text : void 0
  });
  const yField = dataRef.current?.heatmap?.fields[1];
  if (!yField) {
    return builder;
  }
  const yFieldConfig = yField.config?.custom;
  const yScale = yFieldConfig?.scaleDistribution ?? { type: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleDistribution.Linear };
  const yAxisReverse = Boolean(yAxisConfig.reverse);
  const isSparseHeatmap = heatmapType === _grafana_data__WEBPACK_IMPORTED_MODULE_4__.DataFrameType.HeatmapCells && !(0,app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_8__.isHeatmapCellsDense)(dataRef.current?.heatmap);
  const shouldUseLogScale = yScale.type !== _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleDistribution.Linear || isSparseHeatmap;
  const isOrdinalY = (0,app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_8__.readHeatmapRowsCustomMeta)(dataRef.current?.heatmap).yOrdinalDisplay != null;
  const yScaleKey = "y_" + (Math.random() + 1).toString(36).substring(7);
  builder.addScale({
    scaleKey: yScaleKey,
    isTime: false,
    // distribution: ScaleDistribution.Ordinal, // does not work with facets/scatter yet
    orientation: _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleOrientation.Vertical,
    direction: yAxisReverse ? _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleDirection.Down : _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleDirection.Up,
    // should be tweakable manually
    distribution: shouldUseLogScale ? _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleDistribution.Log : _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.ScaleDistribution.Linear,
    log: yScale.log ?? 2,
    range: (
      // sparse already accounts for le/ge by explicit yMin & yMax cell bounds, so no need to expand y range
      isSparseHeatmap ? (u, dataMin, dataMax) => {
        let bucketFactor = u.data[1][2][0] / u.data[1][1][0];
        dataMax *= bucketFactor;
        let scaleMin, scaleMax;
        [scaleMin, scaleMax] = shouldUseLogScale ? uplot__WEBPACK_IMPORTED_MODULE_0__["default"].rangeLog(dataMin, dataMax, yScale.log ?? 2, true) : [dataMin, dataMax];
        if (shouldUseLogScale && !isOrdinalY) {
          let yExp = u.scales[yScaleKey].log;
          let log = yExp === 2 ? Math.log2 : Math.log10;
          let { min: explicitMin, max: explicitMax } = yAxisConfig;
          if (explicitMin != null && explicitMin > 0) {
            let minLog = log(explicitMin);
            scaleMin = yExp ** (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.incrRoundDn)(minLog, 1);
          }
          if (explicitMax != null && explicitMax > 0) {
            let maxLog = log(explicitMax);
            scaleMax = yExp ** (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.incrRoundUp)(maxLog, 1);
          }
        }
        return [scaleMin, scaleMax];
      } : (
        // dense and ordinal only have one of yMin|yMax|y, so expand range by one cell in the direction of le/ge/unknown
        (u, dataMin, dataMax) => {
          let scaleMin = dataMin, scaleMax = dataMax;
          let { min: explicitMin, max: explicitMax } = yAxisConfig;
          if (shouldUseLogScale) {
            let yExp = u.scales[yScaleKey].log;
            let minExpanded = false;
            let maxExpanded = false;
            let log = yExp === 2 ? Math.log2 : Math.log10;
            if (ySizeDivisor !== 1) {
              let minLog = log(dataMin);
              let maxLog = log(dataMax);
              if (!Number.isInteger(minLog)) {
                scaleMin = yExp ** (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.incrRoundDn)(minLog, 1);
                minExpanded = true;
              }
              if (!Number.isInteger(maxLog)) {
                scaleMax = yExp ** (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.incrRoundUp)(maxLog, 1);
                maxExpanded = true;
              }
            }
            if (dataRef.current?.yLayout === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.le) {
              if (!minExpanded) {
                scaleMin /= yExp;
              }
            } else if (dataRef.current?.yLayout === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.ge) {
              if (!maxExpanded) {
                scaleMax *= yExp;
              }
            } else {
              scaleMin /= yExp / 2;
              scaleMax *= yExp / 2;
            }
            if (!isOrdinalY) {
              if (explicitMin != null && explicitMin > 0) {
                let minLog = log(explicitMin);
                scaleMin = yExp ** (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.incrRoundDn)(minLog, 1);
              }
              if (explicitMax != null && explicitMax > 0) {
                let maxLog = log(explicitMax);
                scaleMax = yExp ** (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.incrRoundUp)(maxLog, 1);
              }
            }
          } else {
            let bucketSize = dataRef.current?.yBucketSize;
            if (bucketSize === 0) {
              bucketSize = 1;
            }
            if (bucketSize) {
              if (dataRef.current?.yLayout === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.le) {
                scaleMin -= bucketSize;
              } else if (dataRef.current?.yLayout === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.ge) {
                scaleMax += bucketSize;
              } else {
                scaleMin -= bucketSize / 2;
                scaleMax += bucketSize / 2;
              }
            } else {
            }
            if (!isOrdinalY) {
              scaleMin = explicitMin ?? scaleMin;
              scaleMax = explicitMax ?? scaleMax;
            }
          }
          return [scaleMin, scaleMax];
        }
      )
    )
  });
  const dispY = yField.display ?? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getValueFormat)("short");
  builder.addAxis({
    scaleKey: yScaleKey,
    show: yAxisConfig.axisPlacement !== _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.AxisPlacement.Hidden,
    placement: yAxisConfig.axisPlacement || _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.AxisPlacement.Left,
    size: yAxisConfig.axisWidth || null,
    label: yAxisConfig.axisLabel,
    theme,
    formatValue: (v, decimals) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.formattedValueToString)(dispY(v, decimals)),
    splits: isOrdinalY ? (self) => {
      const meta = (0,app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_8__.readHeatmapRowsCustomMeta)(dataRef.current?.heatmap);
      if (!meta.yOrdinalDisplay) {
        return [0, 1];
      }
      let splits = meta.yOrdinalDisplay.map((v, idx) => idx);
      switch (dataRef.current?.yLayout) {
        case _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.le:
          splits.unshift(-1);
          break;
        case _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.ge:
          splits.push(splits.length);
          break;
      }
      if (self.height < 60) {
        splits = [splits[0], splits[splits.length - 1]];
      } else {
        while (splits.length > 3 && (self.height - 15) / splits.length < 10) {
          splits = splits.filter((v, idx) => idx % 2 === 0);
        }
      }
      return splits;
    } : void 0,
    values: isOrdinalY ? (self, splits) => {
      const meta = (0,app_features_transformers_calculateHeatmap_heatmap__WEBPACK_IMPORTED_MODULE_8__.readHeatmapRowsCustomMeta)(dataRef.current?.heatmap);
      if (meta.yOrdinalDisplay) {
        return splits.map(
          (v) => v < 0 ? meta.yMinDisplay ?? "" : meta.yOrdinalDisplay[v] ?? ""
        );
      }
      return splits;
    } : void 0
  });
  const pathBuilder = isSparseHeatmap ? heatmapPathsSparse : heatmapPathsDense;
  builder.addSeries({
    facets: [
      {
        scale: xScaleKey,
        auto: true,
        sorted: 1
      },
      {
        scale: yScaleKey,
        auto: true
      }
    ],
    pathBuilder: pathBuilder({
      each: (u, seriesIdx, dataIdx, x, y, xSize, ySize) => {
        qt.add({
          x: x - u.bbox.left,
          y: y - u.bbox.top,
          w: xSize,
          h: ySize,
          sidx: seriesIdx,
          didx: dataIdx
        });
      },
      gap: cellGap,
      hideLE,
      hideGE,
      xAlign: dataRef.current?.xLayout === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.le ? -1 : dataRef.current?.xLayout === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.ge ? 1 : 0,
      yAlign: (() => {
        const yAlign = dataRef.current?.yLayout === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.le ? -1 : dataRef.current?.yLayout === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.ge ? 1 : 0;
        return yAxisReverse ? yAlign === -1 ? 1 : yAlign === 1 ? -1 : 0 : yAlign;
      })(),
      ySizeDivisor,
      disp: {
        fill: {
          values: (u, seriesIdx) => dataRef.current?.heatmapColors?.values,
          index: dataRef.current?.heatmapColors?.palette
        }
      }
    }),
    theme,
    scaleKey: ""
    // facets' scales used (above)
  });
  builder.addSeries({
    facets: [
      {
        scale: xScaleKey,
        auto: true,
        sorted: 1
      },
      {
        scale: yScaleKey,
        auto: true
      }
    ],
    pathBuilder: heatmapPathsPoints(
      {
        each: (u, seriesIdx, dataIdx, x, y, xSize, ySize) => {
          qt.add({
            x: x - u.bbox.left,
            y: y - u.bbox.top,
            w: xSize,
            h: ySize,
            sidx: seriesIdx,
            didx: dataIdx
          });
        }
      },
      exemplarFillColor,
      dataRef.current.yLayout
    ),
    theme,
    scaleKey: ""
    // facets' scales used (above)
  });
  const dragX = selectionMode === _types__WEBPACK_IMPORTED_MODULE_10__.HeatmapSelectionMode.X || selectionMode === _types__WEBPACK_IMPORTED_MODULE_10__.HeatmapSelectionMode.Xy;
  const dragY = selectionMode === _types__WEBPACK_IMPORTED_MODULE_10__.HeatmapSelectionMode.Y || selectionMode === _types__WEBPACK_IMPORTED_MODULE_10__.HeatmapSelectionMode.Xy;
  const cursor = {
    drag: {
      x: dragX,
      y: dragY,
      setScale: false
    },
    dataIdx: (u, seriesIdx) => {
      if (seriesIdx === 1) {
        hRect = null;
        let cx = u.cursor.left * pxRatio;
        let cy = u.cursor.top * pxRatio;
        qt.get(cx, cy, 1, 1, (o) => {
          if ((0,_barchart_quadtree__WEBPACK_IMPORTED_MODULE_9__.pointWithin)(cx, cy, o.x, o.y, o.x + o.w, o.y + o.h)) {
            hRect = o;
          }
        });
      }
      return hRect && seriesIdx === hRect.sidx ? hRect.didx : null;
    },
    focus: {
      prox: 1e3,
      dist: (u, seriesIdx) => hRect?.sidx === seriesIdx ? 0 : Infinity
    },
    points: {
      fill: "rgba(255,255,255, 0.3)",
      bbox: (u, seriesIdx) => {
        let isHovered = hRect && seriesIdx === hRect.sidx;
        return {
          left: isHovered ? hRect.x / pxRatio : -10,
          top: isHovered ? hRect.y / pxRatio : -10,
          width: isHovered ? hRect.w / pxRatio : 0,
          height: isHovered ? hRect.h / pxRatio : 0
        };
      }
    }
  };
  builder.setCursor(cursor);
  return builder;
}
const CRISP_EDGES_GAP_MIN = 4;
function heatmapPathsDense(opts) {
  const { disp, each, gap = 1, hideLE = -Infinity, hideGE = Infinity, xAlign = 1, yAlign = 1, ySizeDivisor = 1 } = opts;
  const pxRatio = devicePixelRatio;
  const round = gap >= CRISP_EDGES_GAP_MIN ? Math.round : (v) => v;
  const cellGap = Math.round(gap * pxRatio);
  return (u, seriesIdx) => {
    uplot__WEBPACK_IMPORTED_MODULE_0__["default"].orient(
      u,
      seriesIdx,
      (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim, moveTo, lineTo, rect, arc) => {
        let d = u.data[seriesIdx];
        const xs = d[0];
        const ys = d[1];
        const counts = d[2];
        const dlen = xs.length;
        let fills = disp.fill.values(u, seriesIdx);
        let fillPalette = disp.fill.index ?? [...new Set(fills)];
        let fillPaths = fillPalette.map((color) => new Path2D());
        let yBinQty = dlen - ys.lastIndexOf(ys[0]);
        let xBinQty = dlen / yBinQty;
        let yBinIncr = ys[1] - ys[0] || scaleY.max - scaleY.min;
        let xBinIncr = xs[yBinQty] - xs[0];
        let xSize;
        let ySize;
        if (scaleX.distr === 3) {
          xSize = Math.abs(valToPosX(xs[0] * scaleX.log, scaleX, xDim, xOff) - valToPosX(xs[0], scaleX, xDim, xOff));
        } else {
          xSize = Math.abs(valToPosX(xBinIncr, scaleX, xDim, xOff) - valToPosX(0, scaleX, xDim, xOff));
        }
        if (scaleY.distr === 3) {
          ySize = Math.abs(valToPosY(ys[0] * scaleY.log, scaleY, yDim, yOff) - valToPosY(ys[0], scaleY, yDim, yOff)) / ySizeDivisor;
        } else {
          ySize = Math.abs(valToPosY(yBinIncr, scaleY, yDim, yOff) - valToPosY(0, scaleY, yDim, yOff)) / ySizeDivisor;
        }
        xSize = Math.max(1, round(xSize - cellGap));
        ySize = Math.max(1, round(ySize - cellGap));
        let xOffset = xAlign === -1 ? -xSize : xAlign === 0 ? -xSize / 2 : 0;
        let yOffset = yAlign === 1 ? -ySize : yAlign === 0 ? -ySize / 2 : 0;
        let cys = ys.slice(0, yBinQty).map((y) => round(valToPosY(y, scaleY, yDim, yOff) + yOffset));
        let cxs = Array.from(
          { length: xBinQty },
          (v, i) => round(valToPosX(xs[i * yBinQty], scaleX, xDim, xOff) + xOffset)
        );
        for (let i = 0; i < dlen; i++) {
          if (counts[i] != null && counts[i] > hideLE && counts[i] < hideGE) {
            let cx = cxs[~~(i / yBinQty)];
            let cy = cys[i % yBinQty];
            let fillPath = fillPaths[fills[i]];
            rect(fillPath, cx, cy, xSize, ySize);
            each(u, 1, i, cx, cy, xSize, ySize);
          }
        }
        u.ctx.save();
        u.ctx.rect(u.bbox.left, u.bbox.top, u.bbox.width, u.bbox.height);
        u.ctx.clip();
        fillPaths.forEach((p, i) => {
          u.ctx.fillStyle = fillPalette[i];
          u.ctx.fill(p);
        });
        u.ctx.restore();
        return null;
      }
    );
    return null;
  };
}
function heatmapPathsPoints(opts, exemplarColor, yLayout) {
  return (u, seriesIdx) => {
    uplot__WEBPACK_IMPORTED_MODULE_0__["default"].orient(
      u,
      seriesIdx,
      (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim, moveTo, lineTo, rect, arc) => {
        let points = new Path2D();
        let fillPaths = [points];
        let fillPalette = [exemplarColor ?? "rgba(255,0,255,0.7)"];
        let yShift = yLayout === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.le ? -0.5 : yLayout === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.HeatmapCellLayout.ge ? 0.5 : 0;
        for (let i = 0; i < dataX.length; i++) {
          let yVal = dataY[i];
          let isSparseHeatmap = scaleY.distr === 3 && scaleY.log === 2;
          if (!isSparseHeatmap) {
            yVal += yShift;
          }
          let x = valToPosX(dataX[i], scaleX, xDim, xOff);
          let y = valToPosY(yVal, scaleY, yDim, yOff);
          let w = 8;
          let h = 8;
          rect(points, x - w / 2, y - h / 2, w, h);
          opts.each(u, seriesIdx, i, x - w / 2, y - h / 2, w, h);
        }
        u.ctx.save();
        u.ctx.rect(u.bbox.left, u.bbox.top, u.bbox.width, u.bbox.height);
        u.ctx.clip();
        fillPaths.forEach((p, i) => {
          u.ctx.fillStyle = fillPalette[i];
          u.ctx.fill(p);
        });
        u.ctx.restore();
      }
    );
    return null;
  };
}
function heatmapPathsSparse(opts) {
  const { disp, each, gap = 1, hideLE = -Infinity, hideGE = Infinity } = opts;
  const pxRatio = devicePixelRatio;
  const round = gap >= CRISP_EDGES_GAP_MIN ? Math.round : (v) => v;
  const cellGap = Math.round(gap * pxRatio);
  return (u, seriesIdx) => {
    uplot__WEBPACK_IMPORTED_MODULE_0__["default"].orient(
      u,
      seriesIdx,
      (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim, moveTo, lineTo, rect, arc) => {
        let d = u.data[seriesIdx];
        const xMaxs = d[0];
        const yMins = d[1];
        const yMaxs = d[2];
        const counts = d[3];
        const dlen = xMaxs.length;
        let fills = disp.fill.values(u, seriesIdx);
        let fillPalette = disp.fill.index ?? [...new Set(fills)];
        let fillPaths = fillPalette.map((color) => new Path2D());
        let xOffs = /* @__PURE__ */ new Map();
        let yOffs = /* @__PURE__ */ new Map();
        for (let i = 0; i < xMaxs.length; i++) {
          let xMax = xMaxs[i];
          let yMin = yMins[i];
          let yMax = yMaxs[i];
          if (!xOffs.has(xMax)) {
            xOffs.set(xMax, round(valToPosX(xMax, scaleX, xDim, xOff)));
          }
          if (!yOffs.has(yMin)) {
            yOffs.set(yMin, round(valToPosY(yMin, scaleY, yDim, yOff)));
          }
          if (!yOffs.has(yMax)) {
            yOffs.set(yMax, round(valToPosY(yMax, scaleY, yDim, yOff)));
          }
        }
        let xSizeUniform = xOffs.get(xMaxs.find((v) => v !== xMaxs[0])) - xOffs.get(xMaxs[0]);
        for (let i = 0; i < dlen; i++) {
          if (counts[i] <= hideLE || counts[i] >= hideGE) {
            continue;
          }
          let xMax = xMaxs[i];
          let yMin = yMins[i];
          let yMax = yMaxs[i];
          let xMaxPx = xOffs.get(xMax);
          let yMinPx = yOffs.get(yMin);
          let yMaxPx = yOffs.get(yMax);
          let xSize = xSizeUniform;
          let ySize = yMinPx - yMaxPx;
          xSize = Math.max(1, xSize - cellGap);
          ySize = Math.max(1, ySize - cellGap);
          let x = xMaxPx - cellGap / 2 - xSize;
          let y = yMaxPx + cellGap / 2;
          let fillPath = fillPaths[fills[i]];
          rect(fillPath, x, y, xSize, ySize);
          each(u, 1, i, x, y, xSize, ySize);
        }
        u.ctx.save();
        u.ctx.rect(u.bbox.left, u.bbox.top, u.bbox.width, u.bbox.height);
        u.ctx.clip();
        fillPaths.forEach((p, i) => {
          u.ctx.fillStyle = fillPalette[i];
          u.ctx.fill(p);
        });
        u.ctx.restore();
      }
    );
    return null;
  };
}
const boundedMinMax = (values, minValue, maxValue, hideLE = -Infinity, hideGE = Infinity) => {
  if (minValue == null) {
    minValue = Infinity;
    for (let i = 0; i < values.length; i++) {
      if (values[i] != null && values[i] > hideLE && values[i] < hideGE) {
        minValue = Math.min(minValue, values[i]);
      }
    }
  }
  if (maxValue == null) {
    maxValue = -Infinity;
    for (let i = 0; i < values.length; i++) {
      if (values[i] != null && values[i] > hideLE && values[i] < hideGE) {
        maxValue = Math.max(maxValue, values[i]);
      }
    }
  }
  return [minValue, maxValue];
};
const valuesToFills = (values, palette, minValue, maxValue) => {
  let range = maxValue - minValue || 1;
  let paletteSize = palette.length;
  let indexedFills = Array(values.length);
  for (let i = 0; i < values.length; i++) {
    indexedFills[i] = values[i] < minValue ? 0 : values[i] > maxValue ? paletteSize - 1 : Math.min(paletteSize - 1, Math.floor(paletteSize * (values[i] - minValue) / range));
  }
  return indexedFills;
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

/***/ "./public/app/plugins/panel/xychart/SeriesEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeriesEditor: () => (/* binding */ SeriesEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/field/overrides/processors.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/MatchersUI/FieldNamePicker.tsx");
/* harmony import */ var app_core_components_Layers_LayerName__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/core/components/Layers/LayerName.tsx");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/panel/xychart/panelcfg.gen.ts");











const SeriesEditor = ({
  value: seriesCfg,
  onChange,
  context
}) => {
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.useStyles2)(getStyles);
  const mapping = context.options?.mapping;
  const prevMapping = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(mapping);
  const mappingChanged = prevMapping != null && mapping !== prevMapping;
  const defaultFrame = { frame: { matcher: { id: _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FrameMatcherID.byIndex, options: 0 } } };
  const [selectedIdx, setSelectedIdx] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  if (mappingChanged || seriesCfg == null) {
    seriesCfg = [{ ...defaultFrame }];
    onChange([...seriesCfg]);
    if (selectedIdx > 0) {
      setSelectedIdx(0);
    }
  }
  const addSeries = () => {
    seriesCfg = seriesCfg.concat({ ...defaultFrame });
    setSelectedIdx(seriesCfg.length - 1);
    onChange([...seriesCfg]);
  };
  const deleteSeries = (index) => {
    seriesCfg = seriesCfg.filter((s, i) => i !== index);
    setSelectedIdx(0);
    onChange([...seriesCfg]);
  };
  const series = seriesCfg[selectedIdx];
  const formKey = `${mapping}${selectedIdx}`;
  const baseNameMode = mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_16__.SeriesMapping.Manual ? _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldNamePickerBaseNameMode.ExcludeBaseNames : context.data.length === 1 ? _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldNamePickerBaseNameMode.IncludeAll : _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldNamePickerBaseNameMode.OnlyBaseNames;
  context.data.forEach((frame, frameIndex) => {
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
  const frameInputId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const xFieldInputId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const yFieldInputId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const sizeFieldInputId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const colorFieldInputId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_16__.SeriesMapping.Manual && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button, { icon: "plus", size: "sm", variant: "secondary", onClick: addSeries, className: style.marginBot, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.Trans, { i18nKey: "xychart.series-editor.add-series", children: "Add series" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: style.marginBot, children: seriesCfg.map((series2, index) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          "div",
          {
            className: index === selectedIdx ? `${style.row} ${style.sel}` : style.row,
            onClick: () => setSelectedIdx(index),
            role: "button",
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("xychart.series-editor.aria-label-select-series", "Select series {{seriesNum}}", {
              seriesNum: index + 1
            }),
            tabIndex: 0,
            onKeyPress: (e) => {
              if (e.key === "Enter") {
                setSelectedIdx(index);
              }
            },
            children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                app_core_components_Layers_LayerName__WEBPACK_IMPORTED_MODULE_15__.LayerName,
                {
                  name: series2.name?.fixed ?? `Series ${index + 1}`,
                  onChange: (v) => {
                    series2.name = {
                      fixed: v === "" || v === `Series ${index + 1}` ? void 0 : v
                    };
                    onChange([...seriesCfg]);
                  }
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.IconButton,
                {
                  name: "trash-alt",
                  className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(style.actionIcon),
                  onClick: () => deleteSeries(index),
                  tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("xychart.series-editor.tooltip-delete-series", "Delete series")
                }
              )
            ]
          },
          `series/${index}`
        );
      }) })
    ] }),
    selectedIdx >= 0 && series != null && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("xychart.series-editor.label-frame", "Frame"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Select,
        {
          inputId: frameInputId,
          placeholder: mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_16__.SeriesMapping.Auto ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("xychart.series-editor.placeholder-all-frames", "All frames") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("xychart.series-editor.placeholder-select-frame", "Select frame"),
          isClearable: true,
          options: context.data.map((frame, index) => ({
            value: index,
            label: `${(0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.getFrameDisplayName)(frame, index)} (index: ${index}, rows: ${frame.length})`
          })),
          value: series.frame?.matcher.options,
          onChange: (opt) => {
            if (opt == null) {
              delete series.frame;
            } else {
              series.frame = {
                matcher: {
                  id: _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FrameMatcherID.byIndex,
                  options: Number(opt.value)
                }
              };
            }
            onChange([...seriesCfg]);
          }
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("xychart.series-editor.label-x-field", "X field"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_14__.FieldNamePicker,
        {
          id: xFieldInputId,
          value: series.x?.matcher.options,
          context,
          onChange: (fieldName) => {
            if (fieldName == null) {
              delete series.x;
            } else {
              series.x = {
                matcher: {
                  id: _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FieldMatcherID.byName,
                  options: fieldName
                }
              };
            }
            onChange([...seriesCfg]);
          },
          item: {
            id: "x",
            name: "x",
            settings: {
              filter: (field) => (mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_16__.SeriesMapping.Auto || field.state?.origin?.frameIndex === series.frame?.matcher.options) && (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.number || field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.time) && !field.config.custom?.hideFrom?.viz,
              baseNameMode,
              placeholderText: mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_16__.SeriesMapping.Auto ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("xychart.series-editor.placeholder-x-field", "First number or time field in each frame") : void 0
            }
          }
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("xychart.series-editor.label-y-field", "Y field"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_14__.FieldNamePicker,
        {
          id: yFieldInputId,
          value: series.y?.matcher?.options,
          context,
          onChange: (fieldName) => {
            if (fieldName == null) {
              delete series.y;
            } else {
              series.y = {
                matcher: {
                  id: _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FieldMatcherID.byName,
                  options: fieldName
                }
              };
            }
            onChange([...seriesCfg]);
          },
          item: {
            id: "y",
            name: "y",
            settings: {
              // TODO: filter out series.y?.exclude.options, series.size.matcher.options, series.color.matcher.options
              filter: (field) => (mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_16__.SeriesMapping.Auto || field.state?.origin?.frameIndex === series.frame?.matcher.options) && field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.number && !field.config.custom?.hideFrom?.viz,
              baseNameMode,
              placeholderText: mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_16__.SeriesMapping.Auto ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("xychart.series-editor.placeholder-y-field", "Remaining number fields in each frame") : void 0
            }
          }
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("xychart.series-editor.label-size-field", "Size field"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_14__.FieldNamePicker,
        {
          id: sizeFieldInputId,
          value: series.size?.matcher?.options,
          context,
          onChange: (fieldName) => {
            if (fieldName == null) {
              delete series.size;
            } else {
              series.size = {
                matcher: {
                  id: _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FieldMatcherID.byName,
                  options: fieldName
                }
              };
            }
            onChange([...seriesCfg]);
          },
          item: {
            id: "size",
            name: "size",
            settings: {
              // TODO: filter out series.y?.exclude.options, series.size.matcher.options, series.color.matcher.options
              filter: (field) => (mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_16__.SeriesMapping.Auto || field.state?.origin?.frameIndex === series.frame?.matcher.options) && field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.number && !field.config.custom?.hideFrom?.viz,
              baseNameMode,
              placeholderText: ""
            }
          }
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("xychart.series-editor.label-color-field", "Color field"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_14__.FieldNamePicker,
        {
          id: colorFieldInputId,
          value: series.color?.matcher?.options,
          context,
          onChange: (fieldName) => {
            if (fieldName == null) {
              delete series.color;
            } else {
              series.color = {
                matcher: {
                  id: _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FieldMatcherID.byName,
                  options: fieldName
                }
              };
            }
            onChange([...seriesCfg]);
          },
          item: {
            id: "color",
            name: "color",
            settings: {
              // TODO: filter out series.y?.exclude.options, series.size.matcher.options, series.color.matcher.options
              filter: (field) => (mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_16__.SeriesMapping.Auto || field.state?.origin?.frameIndex === series.frame?.matcher.options) && field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldType.number && !field.config.custom?.hideFrom?.viz,
              baseNameMode,
              placeholderText: ""
            }
          }
        }
      ) })
    ] }, formKey)
  ] });
};
const getStyles = (theme) => ({
  marginBot: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: "20px"
  }),
  row: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: `${theme.spacing(0.5, 1)}`,
    borderRadius: `${theme.shape.radius.default}`,
    background: `${theme.colors.background.secondary}`,
    minHeight: `${theme.spacing(4)}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "3px",
    cursor: "pointer",
    border: `1px solid ${theme.components.input.borderColor}`,
    "&:hover": {
      border: `1px solid ${theme.components.input.borderHover}`
    }
  }),
  sel: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    border: `1px solid ${theme.colors.primary.border}`,
    "&:hover": {
      border: `1px solid ${theme.colors.primary.border}`
    }
  }),
  actionIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: `${theme.colors.text.secondary}`,
    "&:hover": {
      color: `${theme.colors.text}`
    }
  })
});


/***/ }),

/***/ "./public/app/plugins/panel/xychart/XYChartPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XYChartPanel2: () => (/* binding */ XYChartPanel2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/themes/colorManipulator.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/PanelContext.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/VizLayout/VizLayout.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/VizLegend/VizLegend.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/Plot.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/plugins/TooltipPlugin2.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/utils.ts");
/* harmony import */ var _status_history_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/panel/status-history/utils.ts");
/* harmony import */ var _XYChartTooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/panel/xychart/XYChartTooltip.tsx");
/* harmony import */ var _scatter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/panel/xychart/scatter.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/plugins/panel/xychart/utils.ts");












const XYChartPanel2 = (props) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useStyles2)(getStyles);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useTheme2)();
  const { canExecuteActions } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.usePanelContext)();
  const userCanExecuteActions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => canExecuteActions?.() ?? false, [canExecuteActions]);
  let { mapping, series: mappedSeries } = props.options;
  let series = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => (0,_utils__WEBPACK_IMPORTED_MODULE_17__.prepSeries)(mapping, mappedSeries, props.data.series, props.fieldConfig),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mapping, mappedSeries, props.data.series, props.fieldConfig]
  );
  let { builder, prepData } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => (0,_scatter__WEBPACK_IMPORTED_MODULE_16__.prepConfig)(series, _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.theme2),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mapping, mappedSeries, props.data.structureRev, props.fieldConfig, props.options.tooltip]
  );
  let data = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => prepData(series),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [series]
  );
  let error = builder == null || data.length === 0 ? "Err" : "";
  const renderLegend = () => {
    if (!props.options.legend.showLegend) {
      return null;
    }
    const items = [];
    series.forEach((s, idx) => {
      let yField = s.y.field;
      let config2 = yField.config;
      let custom = config2.custom;
      if (!custom.hideFrom?.legend) {
        items.push({
          yAxis: 1,
          // TODO: pull from y field
          label: s.name.value,
          color: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.colorManipulator.alpha(s.color.fixed ?? _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FALLBACK_COLOR, 1),
          getItemKey: () => `${idx}-${s.name.value}`,
          fieldName: yField.state?.displayName ?? yField.name,
          disabled: yField.state?.hideFrom?.viz ?? false,
          getDisplayValues: () => (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_13__.getDisplayValuesForCalcs)(props.options.legend.calcs, yField, theme)
        });
      }
    });
    const { placement, displayMode, width, sortBy, sortDesc } = props.options.legend;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.VizLayout.Legend, { placement, width, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.VizLegend,
      {
        className: styles.legend,
        placement,
        items,
        displayMode,
        sortBy,
        sortDesc,
        isSortable: true
      }
    ) });
  };
  if (error) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "panel-empty", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: error }) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.VizLayout, { width: props.width, height: props.height, legend: renderLegend(), children: (vizWidth, vizHeight) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.UPlotChart, { config: builder, data, width: vizWidth, height: vizHeight, children: props.options.tooltip.mode !== _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TooltipDisplayMode.None && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.TooltipPlugin2,
    {
      config: builder,
      hoverMode: _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.TooltipHoverMode.xyOne,
      getDataLinks: (seriesIdx, dataIdx) => {
        const xySeries = series[seriesIdx - 1];
        return (0,_status_history_utils__WEBPACK_IMPORTED_MODULE_14__.getDataLinks)(xySeries.y.field, dataIdx);
      },
      render: (u, dataIdxs, seriesIdx, isPinned, dismiss, timeRange2, viaSync, dataLinks) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _XYChartTooltip__WEBPACK_IMPORTED_MODULE_15__.XYChartTooltip,
          {
            data: props.data.series,
            dataIdxs,
            xySeries: series,
            dismiss,
            isPinned,
            seriesIdx,
            replaceVariables: props.replaceVariables,
            dataLinks,
            canExecuteActions: userCanExecuteActions
          }
        );
      },
      maxWidth: props.options.tooltip.maxWidth
    }
  ) }) });
};
const getStyles = () => ({
  legend: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    div: {
      justifyContent: "flex-start"
    }
  })
});


/***/ }),

/***/ "./public/app/plugins/panel/xychart/XYChartTooltip.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XYChartTooltip: () => (/* binding */ XYChartTooltip)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/themes/colorManipulator.ts");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipContent.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipFooter.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipHeader.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/VizTooltipWrapper.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/types.ts");
/* harmony import */ var _status_history_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/status-history/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/xychart/utils.ts");






function stripSeriesName(fieldName, seriesName) {
  if (fieldName !== seriesName && fieldName.includes(" ")) {
    fieldName = fieldName.replace(seriesName, "").trim();
  }
  return fieldName;
}
function hideFromTooltip(field) {
  return field.config.custom.hideFrom?.tooltip ?? false;
}
function getFieldName(field) {
  return field.state?.displayName ?? field.name;
}
const XYChartTooltip = ({
  dataIdxs,
  seriesIdx,
  data,
  xySeries,
  dismiss,
  isPinned,
  replaceVariables,
  dataLinks,
  canExecuteActions
}) => {
  const rowIndex = dataIdxs.find((idx) => idx !== null);
  const series = xySeries[seriesIdx - 1];
  const xField = series.x.field;
  const yField = series.y.field;
  const sizeField = series.size.field;
  const colorField = series.color.field;
  let label = series.name.value;
  let seriesColor = colorField?.display?.(colorField.values[rowIndex]).color ?? series.color.fixed ?? "#fff";
  let fillOpacity = colorField?.config.custom?.fillOpacity;
  if (fillOpacity != null) {
    seriesColor = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.colorManipulator.alpha(seriesColor, fillOpacity / 100);
  }
  const headerItem = {
    label,
    value: "",
    color: seriesColor,
    colorIndicator: _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_6__.ColorIndicator.marker_md
  };
  const contentItems = [];
  const addedFields = /* @__PURE__ */ new Set();
  if (!hideFromTooltip(xField)) {
    contentItems.push({
      label: stripSeriesName(getFieldName(xField), label),
      value: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.fmt)(xField, xField.values[rowIndex])
    });
    addedFields.add(xField);
  }
  if (!hideFromTooltip(yField)) {
    contentItems.push({
      label: stripSeriesName(getFieldName(yField), label),
      value: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.fmt)(yField, yField.values[rowIndex])
    });
    addedFields.add(yField);
  }
  if (sizeField != null && !addedFields.has(sizeField) && !hideFromTooltip(sizeField)) {
    contentItems.push({
      label: stripSeriesName(getFieldName(sizeField), label),
      value: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.fmt)(sizeField, sizeField.values[rowIndex])
    });
    addedFields.add(sizeField);
  }
  if (colorField != null && !addedFields.has(colorField) && !hideFromTooltip(colorField)) {
    contentItems.push({
      label: stripSeriesName(getFieldName(colorField), label),
      value: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.fmt)(colorField, colorField.values[rowIndex])
    });
    addedFields.add(colorField);
  }
  series._rest.forEach((field) => {
    if (!hideFromTooltip(field)) {
      contentItems.push({
        label: stripSeriesName(field.state?.displayName ?? field.name, label),
        value: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.fmt)(field, field.values[rowIndex])
      });
    }
  });
  let footer;
  if (seriesIdx != null) {
    const hasOneClickLink = dataLinks?.some((dataLink) => dataLink.oneClick === true);
    if (isPinned || hasOneClickLink) {
      const yFieldFrame = data.find((frame) => frame.fields.includes(yField));
      const actions = canExecuteActions ? (0,_status_history_utils__WEBPACK_IMPORTED_MODULE_7__.getFieldActions)(yFieldFrame, yField, replaceVariables, rowIndex, "xychart") : [];
      footer = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_3__.VizTooltipFooter, { dataLinks, actions });
    }
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_5__.VizTooltipWrapper, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_4__.VizTooltipHeader, { item: headerItem, isPinned }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_2__.VizTooltipContent, { items: contentItems, isPinned }),
    footer
  ] });
};


/***/ }),

/***/ "./public/app/plugins/panel/xychart/config.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_POINT_SIZE: () => (/* binding */ DEFAULT_POINT_SIZE),
/* harmony export */   getScatterFieldConfig: () => (/* binding */ getScatterFieldConfig)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/field/overrides/processors.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/fieldOverrides.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/options/builder/axis.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/options/builder/hideSeries.tsx");
/* harmony import */ var _timeseries_LineStyleEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/timeseries/LineStyleEditor.tsx");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/xychart/panelcfg.gen.ts");






const DEFAULT_POINT_SIZE = 5;
function getScatterFieldConfig(cfg) {
  return {
    standardOptions: {
      [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldConfigProperty.Min]: {
        hideFromDefaults: true
      },
      [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldConfigProperty.Max]: {
        hideFromDefaults: true
      },
      [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldConfigProperty.Unit]: {
        hideFromDefaults: true
      },
      [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldConfigProperty.Decimals]: {
        hideFromDefaults: true
      },
      [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldConfigProperty.NoValue]: {
        hideFromDefaults: true
      },
      [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldConfigProperty.DisplayName]: {
        hideFromDefaults: true
      },
      // TODO: this still leaves Color series by: [ Last | Min | Max ]
      // because item.settings?.bySeriesSupport && colorMode.isByValue
      [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldConfigProperty.Color]: {
        settings: {
          byValueSupport: true,
          bySeriesSupport: true,
          preferThresholdsMode: false
        },
        defaultValue: {
          mode: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldColorModeId.PaletteClassic
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
      const category = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("xychart.category-xychart", "XY Chart")];
      builder.addRadio({
        path: "show",
        name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("xychart.name-show", "Show"),
        category,
        defaultValue: cfg.show,
        settings: {
          options: [
            { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("xychart.show-options.label-points", "Points"), value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.XYShowMode.Points },
            { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("xychart.show-options.label-lines", "Lines"), value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.XYShowMode.Lines },
            { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("xychart.show-options.label-both", "Both"), value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.XYShowMode.PointsAndLines }
          ]
        }
      }).addSliderInput({
        path: "pointSize.fixed",
        name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("xychart.name-point-size", "Point size"),
        category,
        defaultValue: cfg.pointSize?.fixed ?? DEFAULT_POINT_SIZE,
        settings: {
          min: 1,
          max: 100,
          step: 1
        },
        showIf: (c) => c.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.XYShowMode.Lines
      }).addNumberInput({
        path: "pointSize.min",
        name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("xychart.name-min-point-size", "Min point size"),
        category,
        showIf: (c) => c.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.XYShowMode.Lines
      }).addNumberInput({
        path: "pointSize.max",
        name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("xychart.name-max-point-size", "Max point size"),
        category,
        showIf: (c) => c.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.XYShowMode.Lines
      }).addRadio({
        path: "pointShape",
        name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("xychart.name-point-shape", "Point shape"),
        category,
        defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.PointShape.Circle,
        settings: {
          options: [
            { value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.PointShape.Circle, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("xychart.point-shape-options.label-circle", "Circle") },
            { value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.PointShape.Square, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("xychart.point-shape-options.label-square", "Square") }
          ]
        },
        showIf: (c) => c.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.XYShowMode.Lines
      }).addSliderInput({
        path: "pointStrokeWidth",
        name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("xychart.name-point-stroke-width", "Point stroke width"),
        category,
        defaultValue: 1,
        settings: {
          min: 0,
          max: 10
        },
        showIf: (c) => c.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.XYShowMode.Lines
      }).addSliderInput({
        path: "fillOpacity",
        name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("xychart.name-fill-opacity", "Fill opacity"),
        category,
        defaultValue: 50,
        settings: {
          min: 0,
          max: 100,
          step: 1
        },
        showIf: (c) => c.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.XYShowMode.Lines
      }).addCustomEditor({
        id: "lineStyle",
        path: "lineStyle",
        name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("xychart.name-line-style", "Line style"),
        category,
        showIf: (c) => c.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.XYShowMode.Points,
        editor: _timeseries_LineStyleEditor__WEBPACK_IMPORTED_MODULE_7__.LineStyleEditor,
        override: _timeseries_LineStyleEditor__WEBPACK_IMPORTED_MODULE_7__.LineStyleEditor,
        process: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.identityOverrideProcessor,
        shouldApply: (f) => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.number
      }).addSliderInput({
        path: "lineWidth",
        name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("xychart.name-line-width", "Line width"),
        category,
        defaultValue: cfg.lineWidth,
        settings: {
          min: 0,
          max: 10,
          step: 1
        },
        showIf: (c) => c.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.XYShowMode.Points
      });
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.addAxisConfig(builder, cfg);
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.addHideFrom(builder);
    }
  };
}


/***/ }),

/***/ "./public/app/plugins/panel/xychart/migrations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   xyChartMigrationHandler: () => (/* binding */ xyChartMigrationHandler)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");
/* harmony import */ var _panelcfgold_gen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/xychart/panelcfgold.gen.ts");



const xyChartMigrationHandler = (panel) => {
  const pluginVersion = panel?.pluginVersion ?? "";
  if (pluginVersion === "" || parseFloat(pluginVersion) < 11.1) {
    return migrateOptions(panel);
  }
  return panel.options;
};
function migrateOptions(panel) {
  const { dims, seriesMapping, series: oldSeries, ...cleanedOpts } = panel.options;
  const { exclude = [], frame: frameShared, x: xShared } = dims ?? {};
  const custDefaults = panel.fieldConfig.defaults.custom;
  let oldSeries2 = oldSeries;
  if (seriesMapping === _panelcfgold_gen__WEBPACK_IMPORTED_MODULE_1__.SeriesMapping.Auto) {
    oldSeries2 = [
      {
        x: void 0,
        y: void 0
      }
    ];
  }
  let i = 0;
  const newSeries = oldSeries2.map(({ x, y, pointColor, pointSize, frame }) => {
    const { fixed: colorFixed, field: colorField } = pointColor ?? {};
    const { fixed: sizeFixed, field: sizeField, min: sizeMin, max: sizeMax } = pointSize ?? {};
    let xMatcherConfig;
    let yMatcherConfig;
    if (x == null && xShared == null) {
      xMatcherConfig = {
        id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byType,
        options: "number"
      };
    } else {
      xMatcherConfig = {
        id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byName,
        options: x ?? xShared
      };
    }
    if (y == null) {
      yMatcherConfig = {
        id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byType,
        options: "number"
      };
    } else {
      yMatcherConfig = {
        id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byName,
        options: y
      };
    }
    if (colorField == null && colorFixed && custDefaults.pointColor?.fixed !== colorFixed) {
      let hasOverride = panel.fieldConfig.overrides.some(
        (o) => o.matcher.id === yMatcherConfig.id && o.matcher.options === yMatcherConfig.options && o.properties.some((p) => p.id === "color")
      );
      if (!hasOverride) {
        panel.fieldConfig.overrides.push({
          matcher: yMatcherConfig,
          properties: [
            {
              id: "color",
              value: {
                mode: "fixed",
                fixedColor: colorFixed
              }
            }
          ]
        });
      }
    }
    if (sizeField == null && sizeFixed && custDefaults.pointSize?.fixed !== sizeFixed) {
      let hasOverride = panel.fieldConfig.overrides.some(
        (o) => o.matcher.id === yMatcherConfig.id && o.matcher.options === yMatcherConfig.options && o.properties.some((p) => p.id === "custom.pointSize.fixed")
      );
      if (!hasOverride) {
        panel.fieldConfig.overrides.push({
          matcher: yMatcherConfig,
          properties: [
            {
              id: "custom.pointSize.fixed",
              value: sizeFixed
            }
          ]
        });
      }
    }
    if (sizeField != null) {
      if (sizeMin && custDefaults.pointSize?.min !== sizeMin) {
        let hasOverride = panel.fieldConfig.overrides.some(
          (o) => o.matcher.id === yMatcherConfig.id && o.matcher.options === yMatcherConfig.options && o.properties.some((p) => p.id === "custom.pointSize.min")
        );
        if (!hasOverride) {
          panel.fieldConfig.overrides.push({
            matcher: {
              id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byName,
              options: sizeField
            },
            properties: [
              {
                id: "custom.pointSize.min",
                value: sizeMin
              }
            ]
          });
        }
      }
      if (sizeMax && custDefaults.pointSize?.max !== sizeMax) {
        let hasOverride = panel.fieldConfig.overrides.some(
          (o) => o.matcher.id === yMatcherConfig.id && o.matcher.options === yMatcherConfig.options && o.properties.some((p) => p.id === "custom.pointSize.max")
        );
        if (!hasOverride) {
          panel.fieldConfig.overrides.push({
            matcher: {
              id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byName,
              options: sizeField
            },
            properties: [
              {
                id: "custom.pointSize.max",
                value: sizeMax
              }
            ]
          });
        }
      }
    }
    return {
      frame: {
        matcher: {
          id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FrameMatcherID.byIndex,
          options: frame ?? (seriesMapping === _panelcfgold_gen__WEBPACK_IMPORTED_MODULE_1__.SeriesMapping.Manual ? i++ : frameShared ?? 0)
        }
      },
      x: {
        matcher: xMatcherConfig
      },
      y: {
        matcher: yMatcherConfig,
        ...exclude.length && {
          exclude: {
            id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byNames,
            options: exclude
          }
        }
      },
      ...colorField && {
        color: {
          matcher: {
            id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byName,
            options: colorField
          }
        }
      },
      ...sizeField && {
        size: {
          matcher: {
            id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byName,
            options: sizeField
          }
        }
      }
    };
  });
  const newOptions = {
    ...cleanedOpts,
    mapping: seriesMapping === _panelcfgold_gen__WEBPACK_IMPORTED_MODULE_1__.SeriesMapping.Auto ? _panelcfgold_gen__WEBPACK_IMPORTED_MODULE_1__.SeriesMapping.Auto : _panelcfgold_gen__WEBPACK_IMPORTED_MODULE_1__.SeriesMapping.Manual,
    series: newSeries
  };
  return newOptions;
}


/***/ }),

/***/ "./public/app/plugins/panel/xychart/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/options/builder/tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/options/builder/legend.tsx");
/* harmony import */ var _SeriesEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/xychart/SeriesEditor.tsx");
/* harmony import */ var _XYChartPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/xychart/XYChartPanel.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/xychart/config.ts");
/* harmony import */ var _migrations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/xychart/migrations.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/xychart/panelcfg.gen.ts");









const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_XYChartPanel__WEBPACK_IMPORTED_MODULE_5__.XYChartPanel2).setMigrationHandler(_migrations__WEBPACK_IMPORTED_MODULE_7__.xyChartMigrationHandler).useFieldConfig((0,_config__WEBPACK_IMPORTED_MODULE_6__.getScatterFieldConfig)(_panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.defaultFieldConfig)).setPanelOptions((builder) => {
  const category = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("xychart.category-xychart", "XY Chart")];
  builder.addRadio({
    path: "mapping",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("xychart.name-series-mapping", "Series mapping"),
    category,
    defaultValue: "auto",
    settings: {
      options: [
        { value: "auto", label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("xychart.series-mapping-options.label-auto", "Auto") },
        { value: "manual", label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("xychart.series-mapping-options.label-manual", "Manual") }
      ]
    }
  }).addCustomEditor({
    id: "series",
    path: "series",
    name: "",
    category,
    editor: _SeriesEditor__WEBPACK_IMPORTED_MODULE_4__.SeriesEditor,
    defaultValue: [{}]
  });
  _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.addTooltipOptions(builder, true);
  _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.addLegendOptions(builder);
});


/***/ }),

/***/ "./public/app/plugins/panel/xychart/panelcfg.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointShape: () => (/* binding */ PointShape),
/* harmony export */   SeriesMapping: () => (/* binding */ SeriesMapping),
/* harmony export */   XYShowMode: () => (/* binding */ XYShowMode),
/* harmony export */   defaultFieldConfig: () => (/* binding */ defaultFieldConfig),
/* harmony export */   defaultMatcherConfig: () => (/* binding */ defaultMatcherConfig),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });

var PointShape = /* @__PURE__ */ ((PointShape2) => {
  PointShape2["Circle"] = "circle";
  PointShape2["Square"] = "square";
  return PointShape2;
})(PointShape || {});
var SeriesMapping = /* @__PURE__ */ ((SeriesMapping2) => {
  SeriesMapping2["Auto"] = "auto";
  SeriesMapping2["Manual"] = "manual";
  return SeriesMapping2;
})(SeriesMapping || {});
var XYShowMode = /* @__PURE__ */ ((XYShowMode2) => {
  XYShowMode2["Lines"] = "lines";
  XYShowMode2["Points"] = "points";
  XYShowMode2["PointsAndLines"] = "points+lines";
  return XYShowMode2;
})(XYShowMode || {});
const defaultMatcherConfig = {
  id: ""
};
const defaultFieldConfig = {
  fillOpacity: 50,
  show: "points" /* Points */
};
const defaultOptions = {
  series: []
};


/***/ }),

/***/ "./public/app/plugins/panel/xychart/panelcfgold.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScatterShow: () => (/* binding */ ScatterShow),
/* harmony export */   SeriesMapping: () => (/* binding */ SeriesMapping),
/* harmony export */   defaultFieldConfig: () => (/* binding */ defaultFieldConfig),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions),
/* harmony export */   defaultXYDimensionConfig: () => (/* binding */ defaultXYDimensionConfig)
/* harmony export */ });
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");


var SeriesMapping = /* @__PURE__ */ ((SeriesMapping2) => {
  SeriesMapping2["Auto"] = "auto";
  SeriesMapping2["Manual"] = "manual";
  return SeriesMapping2;
})(SeriesMapping || {});
var ScatterShow = /* @__PURE__ */ ((ScatterShow2) => {
  ScatterShow2["Lines"] = "lines";
  ScatterShow2["Points"] = "points";
  ScatterShow2["PointsAndLines"] = "points+lines";
  return ScatterShow2;
})(ScatterShow || {});
const defaultXYDimensionConfig = {
  exclude: []
};
const defaultFieldConfig = {
  label: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.VisibilityMode.Auto,
  show: "points" /* Points */
};
const defaultOptions = {
  series: []
};


/***/ }),

/***/ "./public/app/plugins/panel/xychart/scatter.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prepConfig: () => (/* binding */ prepConfig)
/* harmony export */ });
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tinycolor2/esm/tinycolor.js");
/* harmony import */ var uplot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/uplot/dist/uPlot.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/field/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/themes/colorManipulator.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/types/thresholds.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/types/valueMapping.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-schema/src/raw/dashboard/x/dashboard_types.gen.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/config/UPlotConfigBuilder.ts");
/* harmony import */ var _barchart_quadtree__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/panel/barchart/quadtree.ts");
/* harmony import */ var _heatmap_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/panel/heatmap/utils.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/panel/xychart/panelcfg.gen.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/panel/xychart/utils.ts");










const prepConfig = (xySeries, theme) => {
  if (xySeries.length === 0) {
    return { builder: null, prepData: () => [] };
  }
  let qt;
  let hRect;
  function drawBubblesFactory(opts) {
    const drawBubbles2 = (u, seriesIdx, idx0, idx1) => {
      uplot__WEBPACK_IMPORTED_MODULE_1__["default"].orient(
        u,
        seriesIdx,
        (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim, moveTo, lineTo, rect, arc) => {
          const pxRatio = uplot__WEBPACK_IMPORTED_MODULE_1__["default"].pxRatio;
          const scatterInfo = xySeries[seriesIdx - 1];
          let d = u.data[seriesIdx];
          let showLine = scatterInfo.showLine;
          let showPoints = scatterInfo.showPoints === _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.VisibilityMode.Always;
          let strokeWidth = scatterInfo.pointStrokeWidth ?? 0;
          u.ctx.save();
          u.ctx.rect(u.bbox.left, u.bbox.top, u.bbox.width, u.bbox.height);
          u.ctx.clip();
          let pointAlpha = scatterInfo.fillOpacity / 100;
          u.ctx.fillStyle = _grafana_data__WEBPACK_IMPORTED_MODULE_3__.colorManipulator.alpha(series.fill(), pointAlpha);
          u.ctx.strokeStyle = _grafana_data__WEBPACK_IMPORTED_MODULE_3__.colorManipulator.alpha(series.stroke(), 1);
          u.ctx.lineWidth = strokeWidth;
          let deg360 = 2 * Math.PI;
          let xKey = scaleX.key;
          let yKey = scaleY.key;
          const pointSize = scatterInfo.y.field.config.custom.pointSize;
          const colorByValue = scatterInfo.color.field != null;
          let maxSize = (pointSize.max ?? pointSize.fixed) * pxRatio;
          let filtLft = u.posToVal(-maxSize / 2, xKey);
          let filtRgt = u.posToVal(u.bbox.width / pxRatio + maxSize / 2, xKey);
          let filtBtm = u.posToVal(u.bbox.height / pxRatio + maxSize / 2, yKey);
          let filtTop = u.posToVal(-maxSize / 2, yKey);
          let sizes = opts.disp.size.values(u, seriesIdx);
          let pointColors = dispColors[seriesIdx - 1].values;
          let pointPalette = dispColors[seriesIdx - 1].index;
          let paletteHasAlpha = dispColors[seriesIdx - 1].hasAlpha;
          let isSquare = scatterInfo.pointShape === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_14__.PointShape.Square;
          let linePath = showLine ? new Path2D() : null;
          let curColorIdx = -1;
          for (let i = 0; i < d[0].length; i++) {
            let xVal = d[0][i];
            let yVal = d[1][i];
            if (xVal >= filtLft && xVal <= filtRgt && yVal >= filtBtm && yVal <= filtTop) {
              let size = Math.round(sizes[i] * pxRatio);
              let cx = valToPosX(xVal, scaleX, xDim, xOff);
              let cy = valToPosY(yVal, scaleY, yDim, yOff);
              if (showLine) {
                linePath.lineTo(cx, cy);
              }
              if (showPoints) {
                if (colorByValue) {
                  if (pointColors[i] !== curColorIdx) {
                    curColorIdx = pointColors[i];
                    let c = curColorIdx === -1 ? _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FALLBACK_COLOR : pointPalette[curColorIdx];
                    u.ctx.fillStyle = paletteHasAlpha ? c : _grafana_data__WEBPACK_IMPORTED_MODULE_3__.colorManipulator.alpha(c, pointAlpha);
                    u.ctx.strokeStyle = _grafana_data__WEBPACK_IMPORTED_MODULE_3__.colorManipulator.alpha(c, 1);
                  }
                }
                if (isSquare) {
                  let x = Math.round(cx - size / 2);
                  let y = Math.round(cy - size / 2);
                  if (colorByValue || pointAlpha > 0) {
                    u.ctx.fillRect(x, y, size, size);
                  }
                  if (strokeWidth > 0) {
                    u.ctx.strokeRect(x, y, size, size);
                  }
                } else {
                  u.ctx.beginPath();
                  u.ctx.arc(cx, cy, size / 2, 0, deg360);
                  if (colorByValue || pointAlpha > 0) {
                    u.ctx.fill();
                  }
                  if (strokeWidth > 0) {
                    u.ctx.stroke();
                  }
                }
                opts.each(
                  u,
                  seriesIdx,
                  i,
                  cx - size / 2 - strokeWidth / 2,
                  cy - size / 2 - strokeWidth / 2,
                  size + strokeWidth,
                  size + strokeWidth
                );
              }
            }
          }
          if (showLine) {
            u.ctx.strokeStyle = scatterInfo.color.fixed;
            u.ctx.lineWidth = scatterInfo.lineWidth * pxRatio;
            const { lineStyle } = scatterInfo;
            if (lineStyle && lineStyle.fill !== "solid") {
              if (lineStyle.fill === "dot") {
                u.ctx.lineCap = "round";
              }
              u.ctx.setLineDash(lineStyle.dash ?? [10, 10]);
            }
            u.ctx.stroke(linePath);
          }
          u.ctx.restore();
        }
      );
      return null;
    };
    return drawBubbles2;
  }
  let drawBubbles = drawBubblesFactory({
    disp: {
      size: {
        //unit: 3, // raw CSS pixels
        values: (u, seriesIdx) => {
          return u.data[seriesIdx][2];
        }
      },
      color: {
        // string values
        values: (u, seriesIdx) => {
          return u.data[seriesIdx][3];
        }
      }
    },
    each: (u, seriesIdx, dataIdx, lft, top, wid, hgt) => {
      lft -= u.bbox.left;
      top -= u.bbox.top;
      qt.add({ x: lft, y: top, w: wid, h: hgt, sidx: seriesIdx, didx: dataIdx });
    }
  });
  const builder = new _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.UPlotConfigBuilder();
  builder.setCursor({
    drag: { setScale: true },
    dataIdx: (u, seriesIdx) => {
      if (seriesIdx === 1) {
        const pxRatio = uplot__WEBPACK_IMPORTED_MODULE_1__["default"].pxRatio;
        hRect = null;
        let dist = Infinity;
        let cx = u.cursor.left * pxRatio;
        let cy = u.cursor.top * pxRatio;
        qt.get(cx, cy, 1, 1, (o) => {
          if ((0,_barchart_quadtree__WEBPACK_IMPORTED_MODULE_12__.pointWithin)(cx, cy, o.x, o.y, o.x + o.w, o.y + o.h)) {
            let ocx = o.x + o.w / 2;
            let ocy = o.y + o.h / 2;
            let dx = ocx - cx;
            let dy = ocy - cy;
            let d = Math.sqrt(dx ** 2 + dy ** 2);
            if (d <= o.w / 2) {
              if (d <= dist) {
                dist = d;
                hRect = o;
              }
            }
          }
        });
      }
      return hRect && seriesIdx === hRect.sidx ? hRect.didx : null;
    },
    points: {
      size: (u, seriesIdx) => {
        return hRect && seriesIdx === hRect.sidx ? hRect.w / uplot__WEBPACK_IMPORTED_MODULE_1__["default"].pxRatio : 0;
      },
      fill: (u, seriesIdx) => "rgba(255,255,255,0.4)"
    }
  });
  builder.addHook("init", (u, r) => {
    u.over.style.overflow = "hidden";
  });
  builder.addHook("drawClear", (u) => {
    qt = qt || new _barchart_quadtree__WEBPACK_IMPORTED_MODULE_12__.Quadtree(0, 0, u.bbox.width, u.bbox.height);
    qt.clear();
    u.series.forEach((s, i) => {
      if (i > 0) {
        s._paths = null;
      }
    });
  });
  builder.setMode(2);
  let xField = xySeries[0].x.field;
  let xIsTime = xField.type === _grafana_data__WEBPACK_IMPORTED_MODULE_8__.FieldType.time;
  let fieldConfig = xField.config;
  let customConfig = fieldConfig.custom;
  let scaleDistr = customConfig?.scaleDistribution;
  builder.addScale({
    scaleKey: "x",
    isTime: xIsTime,
    auto: true,
    orientation: _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.ScaleOrientation.Horizontal,
    direction: _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.ScaleDirection.Right,
    distribution: scaleDistr?.type,
    log: scaleDistr?.log,
    linearThreshold: scaleDistr?.linearThreshold,
    min: fieldConfig.min,
    max: fieldConfig.max,
    softMin: customConfig?.axisSoftMin,
    softMax: customConfig?.axisSoftMax,
    centeredZero: customConfig?.axisCenteredZero,
    decimals: fieldConfig.decimals,
    range: xIsTime ? (u, min, max) => [min, max] : void 0
  });
  let xAxisLabel = customConfig.axisLabel;
  if (xAxisLabel == null || xAxisLabel === "") {
    let dispNames = xySeries.map((s) => s.x.field.state?.displayName ?? "");
    let xAxisAutoLabel = xySeries.length === 1 ? xField.state?.displayName ?? xField.name : new Set(dispNames).size === 1 ? dispNames[0] : (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getCommonPrefixSuffix)(dispNames);
    if (xAxisAutoLabel !== "") {
      xAxisLabel = xAxisAutoLabel;
    }
  }
  builder.addAxis({
    scaleKey: "x",
    isTime: xIsTime,
    placement: customConfig?.axisPlacement !== _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.AxisPlacement.Hidden ? _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.AxisPlacement.Bottom : _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.AxisPlacement.Hidden,
    show: customConfig?.axisPlacement !== _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.AxisPlacement.Hidden,
    grid: { show: customConfig?.axisGridShow },
    border: { show: customConfig?.axisBorderShow },
    theme,
    label: xAxisLabel,
    formatValue: xIsTime ? void 0 : (v, decimals) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.formattedValueToString)(xField.display(v, decimals))
  });
  xySeries.forEach((s, si) => {
    let field = s.y.field;
    const lineColor = s.color.fixed;
    const pointColor = s.color.fixed;
    let scaleKey = field.config.unit ?? "y";
    let config = field.config;
    let customConfig2 = config.custom;
    let scaleDistr2 = customConfig2?.scaleDistribution;
    builder.addScale({
      scaleKey,
      orientation: _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.ScaleOrientation.Vertical,
      direction: _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.ScaleDirection.Up,
      distribution: scaleDistr2?.type,
      log: scaleDistr2?.log,
      linearThreshold: scaleDistr2?.linearThreshold,
      min: config.min,
      max: config.max,
      softMin: customConfig2?.axisSoftMin,
      softMax: customConfig2?.axisSoftMax,
      centeredZero: customConfig2?.axisCenteredZero,
      decimals: config.decimals
    });
    let yAxisLabel = customConfig2.axisLabel;
    if (yAxisLabel == null || yAxisLabel === "") {
      let dispNames = xySeries.map((s2) => s2.y.field.state?.displayName ?? "");
      let yAxisAutoLabel = xySeries.length === 1 ? field.state?.displayName ?? field.name : new Set(dispNames).size === 1 ? dispNames[0] : (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getCommonPrefixSuffix)(dispNames);
      if (yAxisAutoLabel !== "") {
        yAxisLabel = yAxisAutoLabel;
      }
    }
    builder.addAxis({
      scaleKey,
      theme,
      placement: customConfig2?.axisPlacement === _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.AxisPlacement.Auto ? _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.AxisPlacement.Left : customConfig2?.axisPlacement,
      show: customConfig2?.axisPlacement !== _grafana_schema__WEBPACK_IMPORTED_MODULE_10__.AxisPlacement.Hidden,
      grid: { show: customConfig2?.axisGridShow },
      border: { show: customConfig2?.axisBorderShow },
      size: customConfig2?.axisWidth,
      // label: yAxisLabel == null || yAxisLabel === '' ? fieldDisplayName : yAxisLabel,
      label: yAxisLabel,
      formatValue: (v, decimals) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.formattedValueToString)(field.display(v, decimals))
    });
    builder.addSeries({
      facets: [
        {
          scale: "x",
          auto: true
        },
        {
          scale: scaleKey,
          auto: true
        }
      ],
      pathBuilder: drawBubbles,
      // drawBubbles({disp: {size: {values: () => }}})
      theme,
      scaleKey: "",
      // facets' scales used (above)
      lineColor: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.colorManipulator.alpha(lineColor ?? "#ffff", 1),
      fillColor: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.colorManipulator.alpha(pointColor ?? "#ffff", 0.5),
      show: !field.state?.hideFrom?.viz
    });
  });
  const dispColors = xySeries.map((s) => {
    const cfg = {
      index: [],
      getAll: () => [],
      getOne: () => -1,
      // cache for renderer, refreshed in prepData()
      values: [],
      hasAlpha: false
    };
    const f = s.color.field;
    if (f != null) {
      Object.assign(cfg, fieldValueColors(f, theme));
      cfg.hasAlpha = cfg.index.some((v) => !v.endsWith("ff"));
    }
    return cfg;
  });
  function prepData(xySeries2) {
    const { size: sizeRange, color: colorRange } = getGlobalRanges(xySeries2);
    xySeries2.forEach((s, i) => {
      dispColors[i].values = dispColors[i].getAll(s.color.field?.values ?? [], colorRange.min, colorRange.max);
    });
    return [
      null,
      ...xySeries2.map((s, idx) => {
        let len = s.x.field.values.length;
        let diams;
        if (s.size.field != null) {
          let { min, max } = s.size;
          let minPx = min ** 2;
          let maxPx = max ** 2;
          let pxRange = maxPx - minPx;
          let vals = s.size.field.values;
          let minVal = sizeRange.min;
          let maxVal = sizeRange.max;
          let valRange = maxVal - minVal;
          diams = Array(len);
          for (let i = 0; i < vals.length; i++) {
            let val = vals[i];
            let valPct = (val - minVal) / valRange;
            let pxArea = minPx + valPct * pxRange;
            diams[i] = pxArea ** 0.5;
          }
        } else {
          diams = Array(len).fill(s.size.fixed);
        }
        return [
          s.x.field.values,
          // X
          s.y.field.values,
          // Y
          diams,
          Array(len).fill(s.color.fixed)
          // TODO: fails for by value
        ];
      })
    ];
  }
  return { builder, prepData };
};
const getGlobalRanges = (xySeries) => {
  const ranges = {
    size: {
      min: Infinity,
      max: -Infinity
    },
    color: {
      min: Infinity,
      max: -Infinity
    }
  };
  xySeries.forEach((series) => {
    [series.size, series.color].forEach((facet, fi) => {
      if (facet.field != null) {
        let range = fi === 0 ? ranges.size : ranges.color;
        const vals = facet.field.values;
        for (let i = 0; i < vals.length; i++) {
          const v = vals[i];
          if (v != null) {
            if (v < range.min) {
              range.min = v;
            }
            if (v > range.max) {
              range.max = v;
            }
          }
        }
      }
    });
  });
  return ranges;
};
function getHex8Color(color, theme) {
  return (0,tinycolor2__WEBPACK_IMPORTED_MODULE_0__["default"])(theme.visualization.getColorByName(color)).toHex8String();
}
function fieldValueColors(f, theme) {
  let index = [];
  let getAll = () => [];
  let getOne = () => -1;
  let conds = "";
  if (f.config.mappings?.length ?? 0 > 0) {
    let mappings = f.config.mappings;
    for (let i = 0; i < mappings.length; i++) {
      let m = mappings[i];
      if (m.type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.MappingType.ValueToText) {
        for (let k in m.options) {
          let { color } = m.options[k];
          if (color != null) {
            let rhs = f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_8__.FieldType.string ? JSON.stringify(k) : Number(k);
            conds += `v === ${rhs} ? ${index.length} : `;
            index.push(getHex8Color(color, theme));
          }
        }
      } else if (m.options.result.color != null) {
        let { color } = m.options.result;
        if (m.type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.MappingType.RangeToText) {
          let range = [];
          if (m.options.from != null) {
            range.push(`v >= ${Number(m.options.from)}`);
          }
          if (m.options.to != null) {
            range.push(`v <= ${Number(m.options.to)}`);
          }
          if (range.length > 0) {
            conds += `${range.join(" && ")} ? ${index.length} : `;
            index.push(getHex8Color(color, theme));
          }
        } else if (m.type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.MappingType.SpecialValue) {
          let spl = m.options.match;
          if (spl === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.SpecialValueMatch.NaN) {
            conds += `isNaN(v)`;
          } else if (spl === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.SpecialValueMatch.NullAndNaN) {
            conds += `v == null || isNaN(v)`;
          } else {
            conds += `v ${spl === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.SpecialValueMatch.True ? "=== true" : spl === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.SpecialValueMatch.False ? "=== false" : spl === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.SpecialValueMatch.Null ? "== null" : spl === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.SpecialValueMatch.Empty ? '=== ""' : "== null"}`;
          }
          conds += ` ? ${index.length} : `;
          index.push(getHex8Color(color, theme));
        } else if (m.type === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.MappingType.RegexToText) {
        }
      }
    }
    conds += "-1";
  } else if (f.config.color?.mode === _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.FieldColorModeId.Thresholds) {
    if (f.config.thresholds?.mode === _grafana_data__WEBPACK_IMPORTED_MODULE_6__.ThresholdsMode.Absolute) {
      let steps = f.config.thresholds.steps;
      let lasti = steps.length - 1;
      for (let i = lasti; i > 0; i--) {
        let rhs = Number(steps[i].value);
        conds += `v >= ${rhs} ? ${i} : `;
      }
      conds += "0";
      index = steps.map((s) => getHex8Color(s.color, theme));
    } else {
    }
  } else if (f.config.color?.mode?.startsWith("continuous")) {
    let calc = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getFieldColorModeForField)(f).getCalculator(f, theme);
    index = Array(32);
    for (let i = 0; i < index.length; i++) {
      let pct = i / (index.length - 1);
      index[i] = getHex8Color(calc(pct, pct), theme);
    }
    getAll = (vals, min, max) => (0,_heatmap_utils__WEBPACK_IMPORTED_MODULE_13__.valuesToFills)(vals, index, min, max);
  }
  if (conds !== "") {
    getOne = new Function("v", `return ${conds};`);
    getAll = new Function(
      "vals",
      `
      let idxs = Array(vals.length);

      for (let i = 0; i < vals.length; i++) {
        let v = vals[i];
        idxs[i] = ${conds};
      }

      return idxs;
    `
    );
  }
  return {
    index,
    getOne,
    getAll
  };
}


/***/ }),

/***/ "./public/app/plugins/panel/xychart/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fmt: () => (/* binding */ fmt),
/* harmony export */   getCommonPrefixSuffix: () => (/* binding */ getCommonPrefixSuffix),
/* harmony export */   prepSeries: () => (/* binding */ prepSeries)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/xychart/panelcfg.gen.ts");






function fmt(field, val) {
  if (field.display) {
    return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.formattedValueToString)(field.display(val));
  }
  return `${val}`;
}
function getFrameMatcher2(config2) {
  if (config2.id === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FrameMatcherID.byIndex) {
    return (frame, index) => index === config2.options;
  }
  return () => false;
}
function prepSeries(mapping, mappedSeries, frames, fieldConfig) {
  (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.cacheFieldDisplayNames)(frames);
  (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.decoupleHideFromState)(frames, fieldConfig);
  let series = [];
  if (mappedSeries.length === 0) {
    mappedSeries = [{}];
  }
  const { palette, getColorByName } = _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.config.theme2.visualization;
  mappedSeries.forEach((seriesCfg, seriesIdx) => {
    if (mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.SeriesMapping.Manual) {
      if (seriesCfg.frame?.matcher == null || seriesCfg.x?.matcher == null || seriesCfg.y?.matcher == null) {
        return;
      }
    }
    let xMatcher = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getFieldMatcher)(
      seriesCfg.x?.matcher ?? {
        id: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldMatcherID.byType,
        options: "number"
      }
    );
    let yMatcher = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getFieldMatcher)(
      seriesCfg.y?.matcher ?? {
        id: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldMatcherID.byType,
        options: "number"
      }
    );
    let colorMatcher = seriesCfg.color ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getFieldMatcher)(seriesCfg.color.matcher) : null;
    let sizeMatcher = seriesCfg.size ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getFieldMatcher)(seriesCfg.size.matcher) : null;
    let frameMatcher = seriesCfg.frame ? getFrameMatcher2(seriesCfg.frame.matcher) : null;
    frames.forEach((frame, frameIdx) => {
      if (frameMatcher != null && !frameMatcher(frame, frameIdx)) {
        return;
      }
      let restFields = [];
      let frameSeries = [];
      let onlyNumTimeFields = frame.fields.filter(
        (field) => field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.number || field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.time
      );
      let x = onlyNumTimeFields.find((field) => xMatcher(field, frame, frames));
      let onlyNumFields = onlyNumTimeFields.filter((field) => field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.number);
      let color = colorMatcher != null ? onlyNumFields.find((field) => colorMatcher(field, frame, frames)) : void 0;
      let size = sizeMatcher != null ? onlyNumFields.find((field) => sizeMatcher(field, frame, frames)) : void 0;
      if (x != null) {
        onlyNumFields.forEach((field) => {
          if (field === x) {
            return;
          }
          if (mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.SeriesMapping.Auto && (field === color || field === size)) {
            return;
          }
          if (mapping === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.SeriesMapping.Manual && frameSeries.length > 0) {
            return;
          }
          if (yMatcher(field, frame, frames) && !field.config.custom?.hideFrom?.viz) {
            let y = field;
            let name = seriesCfg.name?.fixed ?? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getFieldDisplayName)(y, frame, frames);
            let ser = {
              // these typically come from y field
              name: {
                value: name
              },
              showPoints: y.config.custom.show === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.XYShowMode.Lines ? _grafana_schema__WEBPACK_IMPORTED_MODULE_7__.VisibilityMode.Never : _grafana_schema__WEBPACK_IMPORTED_MODULE_7__.VisibilityMode.Always,
              pointShape: y.config.custom.pointShape,
              pointStrokeWidth: y.config.custom.pointStrokeWidth,
              fillOpacity: y.config.custom.fillOpacity,
              showLine: y.config.custom.show !== _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.XYShowMode.Points,
              lineWidth: y.config.custom.lineWidth ?? 2,
              lineStyle: y.config.custom.lineStyle,
              x: {
                field: x
              },
              y: {
                field: y
              },
              color: {},
              size: {},
              _rest: restFields
            };
            if (color != null) {
              ser.color.field = color;
            }
            if (size != null) {
              ser.size.field = size;
              ser.size.min = size.config.custom.pointSize?.min ?? 5;
              ser.size.max = size.config.custom.pointSize?.max ?? 100;
            }
            frameSeries.push(ser);
          }
        });
        if (frameSeries.length === 0) {
        }
        frame.fields.forEach((field) => {
          let isUsedField = frameSeries.some(
            ({ x: x2, y, color: color2, size: size2 }) => x2.field === field || y.field === field || color2.field === field || size2.field === field
          );
          if (!isUsedField) {
            restFields.push(field);
          }
        });
        series.push(...frameSeries);
      } else {
      }
    });
  });
  if (series.length === 0) {
  } else {
    let paletteIdx = 0;
    series.forEach((s, i) => {
      if (s.color.field == null) {
        let colorCfg = s.y.field.config.color ?? { mode: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldColorModeId.PaletteClassic };
        let value = "";
        if (colorCfg.mode === _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldColorModeId.PaletteClassic) {
          value = getColorByName(palette[paletteIdx++ % palette.length]);
        } else if (colorCfg.mode === _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldColorModeId.Fixed) {
          value = getColorByName(colorCfg.fixedColor);
        }
        s.color.fixed = value;
      }
      if (s.size.field == null) {
        s.size.fixed = s.y.field.config.custom.pointSize?.fixed ?? 5;
      }
    });
    autoNameSeries(series);
  }
  return series;
}
function autoNameSeries(series) {
  let names = series.map((s) => s.name.value.split(/\s+/g));
  const { prefix, suffix } = findCommonPrefixSuffixLengths(names);
  if (prefix < Infinity || suffix < Infinity) {
    series.forEach((s, i) => {
      s.name.value = names[i].slice(prefix, names[i].length - suffix).join(" ");
    });
  }
}
function getCommonPrefixSuffix(strs) {
  let names = strs.map((s) => s.split(/\s+/g));
  let { prefix, suffix } = findCommonPrefixSuffixLengths(names);
  let n = names[0];
  if (n.length === 1 && prefix === 1 && suffix === 1) {
    return "";
  }
  let parts = [];
  if (prefix > 0) {
    parts.push(...n.slice(0, prefix));
  }
  if (suffix > 0) {
    parts.push(...n.slice(-suffix));
  }
  return parts.join(" ");
}
function findCommonPrefixSuffixLengths(names) {
  let commonPrefixLen = Infinity;
  let commonSuffixLen = Infinity;
  let segs0 = names[0];
  for (let i = 1; i < names.length; i++) {
    if (names[i].length < segs0.length) {
      segs0 = names[i];
    }
  }
  for (let i = 1; i < names.length; i++) {
    let segs = names[i];
    if (segs !== segs0) {
      let preLen = 0;
      for (let j = 0; j < segs0.length; j++) {
        if (segs[j] === segs0[j]) {
          preLen++;
        } else {
          break;
        }
      }
      if (preLen < commonPrefixLen) {
        commonPrefixLen = preLen;
      }
      let sufLen = 0;
      for (let j = segs0.length - 1; j >= 0; j--) {
        if (segs[j] === segs0[j]) {
          sufLen++;
        } else {
          break;
        }
      }
      if (sufLen < commonSuffixLen) {
        commonSuffixLen = sufLen;
      }
    }
  }
  return {
    prefix: commonPrefixLen,
    suffix: commonSuffixLen
  };
}


/***/ })

}]);
//# sourceMappingURL=xychart.fb4aa4cf032570666a24.js.map