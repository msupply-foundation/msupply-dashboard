"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["ThemePlayground"],{

/***/ "./packages/grafana-ui/src/components/ThemeDemos/ThemeDemo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionsDemo: () => (/* binding */ ActionsDemo),
/* harmony export */   RichColorDemo: () => (/* binding */ RichColorDemo),
/* harmony export */   ShadowDemo: () => (/* binding */ ShadowDemo),
/* harmony export */   TextColors: () => (/* binding */ TextColors),
/* harmony export */   ThemeDemo: () => (/* binding */ ThemeDemo),
/* harmony export */   VizHuesDemo: () => (/* binding */ VizHuesDemo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/themes/colorManipulator.ts");
/* harmony import */ var _themes_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var _Collapse_CollapsableSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Collapse/CollapsableSection.tsx");
/* harmony import */ var _Combobox_Combobox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Combobox/Combobox.tsx");
/* harmony import */ var _Forms_Field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _Forms_InlineField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _Forms_InlineFieldRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _Forms_RadioButtonGroup_RadioButtonGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _Layout_Box_Box__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _Layout_Stack_Stack__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _ScrollContainer_ScrollContainer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/components/ScrollContainer/ScrollContainer.tsx");
/* harmony import */ var _Switch_Switch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _Text_Text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");






















const DemoBox = ({ bg, border, children, shadow, scrollable }) => {
  const MaybeScroll = scrollable ? _ScrollContainer_ScrollContainer__WEBPACK_IMPORTED_MODULE_17__.ScrollContainer : react__WEBPACK_IMPORTED_MODULE_2__.Fragment;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _Layout_Box_Box__WEBPACK_IMPORTED_MODULE_15__.Box,
    {
      backgroundColor: bg ? bg : void 0,
      padding: 2,
      borderStyle: border ? "solid" : void 0,
      borderColor: border,
      boxShadow: shadow,
      borderRadius: "lg",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaybeScroll, { children })
    }
  );
};
const DemoText = ({
  color,
  bold,
  children
}) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Layout_Box_Box__WEBPACK_IMPORTED_MODULE_15__.Box, { padding: 0.5, children: children && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_19__.Text, { color: color ? color : void 0, weight: bold ? "bold" : void 0, children }) });
};
const ThemeDemo = () => {
  const [radioValue, setRadioValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("v");
  const [boolValue, setBoolValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [selectValue, setSelectValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Item 2");
  const t = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.useTheme2)();
  const inputId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const disabledInputId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const comboboxId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const radioId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const switchId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const switchTrueId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const switchDisabledId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const inlineId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const inlineDisabledId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const richColors = [
    t.colors.primary,
    t.colors.secondary,
    t.colors.success,
    t.colors.error,
    t.colors.warning,
    t.colors.info
  ];
  const vizColors = t.visualization.hues;
  const selectOptions = [
    { label: "Item 1", value: "Item 1" },
    { label: "Item 2", value: "Item 2" },
    { label: "Item 3", value: "Item 3" },
    { label: "Item 4", value: "Item 4" }
  ];
  const radioOptions = [
    { value: "h", label: "Horizontal" },
    { value: "v", label: "Vertical" },
    { value: "a", label: "Auto" }
  ];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "div",
    {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        width: "100%",
        color: t.colors.text.primary
      }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DemoBox, { bg: "canvas", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Collapse_CollapsableSection__WEBPACK_IMPORTED_MODULE_7__.CollapsableSection, { label: "Layers", isOpen: true, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DemoText, { children: "t.colors.background.canvas" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DemoBox, { bg: "primary", border: "weak", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DemoText, { children: "t.colors.background.primary is the main & preferred content " }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DemoBox, { bg: "secondary", border: "weak", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DemoText, { children: "t.colors.background.secondary (Used for cards)" }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Box_Box__WEBPACK_IMPORTED_MODULE_15__.Box, { padding: 4, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DemoText, { children: "t.colors.background.elevated" }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DemoBox, { bg: "elevated", border: "weak", shadow: "z3", children: "This elevated color should be used for menus and popovers." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Collapse_CollapsableSection__WEBPACK_IMPORTED_MODULE_7__.CollapsableSection, { label: "Text colors", isOpen: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Stack_Stack__WEBPACK_IMPORTED_MODULE_16__.Stack, { justifyContent: "flex-start", wrap: "wrap", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DemoBox, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TextColors, { t }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DemoBox, { bg: "primary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TextColors, { t }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DemoBox, { bg: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TextColors, { t }) })
        ] }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Collapse_CollapsableSection__WEBPACK_IMPORTED_MODULE_7__.CollapsableSection, { label: "Rich colors", isOpen: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DemoBox, { bg: "primary", scrollable: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: colorsTableStyle(t), children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "name" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "main" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "shade (used for hover)" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "transparent" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "border & text" })
          ] }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: richColors.map((color) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RichColorDemo, { color, theme: t }, color.name)) })
        ] }) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Collapse_CollapsableSection__WEBPACK_IMPORTED_MODULE_7__.CollapsableSection, { label: "Viz hues", isOpen: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DemoBox, { bg: "primary", scrollable: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: colorsTableStyle(t), children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "name" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "super-light" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "light" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "primary" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "semi-dark" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: "dark" })
          ] }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: vizColors.map((color) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(VizHuesDemo, { color, theme: t }, color.name)) })
        ] }) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Collapse_CollapsableSection__WEBPACK_IMPORTED_MODULE_7__.CollapsableSection, { label: "Forms", isOpen: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DemoBox, { bg: "primary", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_Field__WEBPACK_IMPORTED_MODULE_9__.Field, { label: "Input label", description: "Field description", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input_Input__WEBPACK_IMPORTED_MODULE_14__.Input, { id: inputId, placeholder: "Placeholder" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_Field__WEBPACK_IMPORTED_MODULE_9__.Field, { label: "Input disabled", disabled: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input_Input__WEBPACK_IMPORTED_MODULE_14__.Input, { id: disabledInputId, placeholder: "Placeholder", value: "Disabled value" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_Field__WEBPACK_IMPORTED_MODULE_9__.Field, { label: "Combobox", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _Combobox_Combobox__WEBPACK_IMPORTED_MODULE_8__.Combobox,
            {
              id: comboboxId,
              options: selectOptions,
              value: selectValue,
              onChange: (v) => setSelectValue(v?.value)
            }
          ) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_Field__WEBPACK_IMPORTED_MODULE_9__.Field, { label: "Radio label", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_RadioButtonGroup_RadioButtonGroup__WEBPACK_IMPORTED_MODULE_12__.RadioButtonGroup, { id: radioId, options: radioOptions, value: radioValue, onChange: setRadioValue }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Stack_Stack__WEBPACK_IMPORTED_MODULE_16__.Stack, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_Field__WEBPACK_IMPORTED_MODULE_9__.Field, { label: "Switch", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Switch_Switch__WEBPACK_IMPORTED_MODULE_18__.Switch, { id: switchId, value: boolValue, onChange: (e) => setBoolValue(e.currentTarget.checked) }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_Field__WEBPACK_IMPORTED_MODULE_9__.Field, { label: "Switch true", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Switch_Switch__WEBPACK_IMPORTED_MODULE_18__.Switch, { id: switchTrueId, value: true }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_Field__WEBPACK_IMPORTED_MODULE_9__.Field, { label: "Switch false disabled", disabled: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Switch_Switch__WEBPACK_IMPORTED_MODULE_18__.Switch, { id: switchDisabledId, value: false }) })
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Stack_Stack__WEBPACK_IMPORTED_MODULE_16__.Stack, { direction: "column", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "Inline forms" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Forms_InlineFieldRow__WEBPACK_IMPORTED_MODULE_11__.InlineFieldRow, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_InlineField__WEBPACK_IMPORTED_MODULE_10__.InlineField, { label: "Label", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input_Input__WEBPACK_IMPORTED_MODULE_14__.Input, { id: inlineId, placeholder: "Placeholder" }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_InlineField__WEBPACK_IMPORTED_MODULE_10__.InlineField, { label: "Another Label", disabled: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input_Input__WEBPACK_IMPORTED_MODULE_14__.Input, { id: inlineDisabledId, placeholder: "Disabled" }) })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Collapse_CollapsableSection__WEBPACK_IMPORTED_MODULE_7__.CollapsableSection, { label: "Shadows", isOpen: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DemoBox, { bg: "primary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Layout_Stack_Stack__WEBPACK_IMPORTED_MODULE_16__.Stack, { children: Object.entries(t.shadows).map(([key, value]) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ShadowDemo, { name: key, shadow: value }, key)) }) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Collapse_CollapsableSection__WEBPACK_IMPORTED_MODULE_7__.CollapsableSection, { label: "Buttons", isOpen: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DemoBox, { bg: "primary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Stack_Stack__WEBPACK_IMPORTED_MODULE_16__.Stack, { direction: "column", gap: 3, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Stack_Stack__WEBPACK_IMPORTED_MODULE_16__.Stack, { wrap: "wrap", children: [
            _Button_Button__WEBPACK_IMPORTED_MODULE_5__.allButtonVariants.map((variant) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_5__.Button, { variant, children: variant }, variant)),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_5__.Button, { variant: "primary", disabled: true, children: "Disabled" })
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Card_Card__WEBPACK_IMPORTED_MODULE_6__.Card, { noMargin: true, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Card_Card__WEBPACK_IMPORTED_MODULE_6__.Card.Heading, { children: "Button inside card" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Card_Card__WEBPACK_IMPORTED_MODULE_6__.Card.Actions, { children: [
              _Button_Button__WEBPACK_IMPORTED_MODULE_5__.allButtonVariants.map((variant) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_5__.Button, { variant, children: variant }, variant)),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_5__.Button, { variant: "primary", disabled: true, children: "Disabled" })
            ] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Collapse_CollapsableSection__WEBPACK_IMPORTED_MODULE_7__.CollapsableSection, { label: "Actions", isOpen: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionsDemo, {}) })
      ] })
    }
  );
};
function VizHuesDemo({ theme, color }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: color.name }),
    color.shades.map((shade, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "div",
      {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
          background: shade.color,
          borderRadius: theme.shape.radius.default,
          color: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.colorManipulator.getContrastRatio("#FFFFFF", shade.color) >= 4.5 ? "#FFFFFF" : "#000000",
          padding: theme.spacing(1)
        }),
        children: shade.color
      }
    ) }, index))
  ] });
}
function RichColorDemo({ theme, color }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: color.name }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "div",
      {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
          background: color.main,
          borderRadius: theme.shape.radius.default,
          color: color.contrastText,
          padding: theme.spacing(1),
          fontWeight: 500
        }),
        children: color.main
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "div",
      {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
          background: color.shade,
          color: theme.colors.getContrastText(color.shade, 4.5),
          borderRadius: theme.shape.radius.default,
          padding: theme.spacing(1)
        }),
        children: color.shade
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "div",
      {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
          background: color.transparent,
          borderRadius: theme.shape.radius.default,
          padding: theme.spacing(1)
        }),
        children: color.shade
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "div",
      {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
          border: `1px solid ${color.border}`,
          color: color.text,
          borderRadius: theme.shape.radius.default,
          padding: theme.spacing(1)
        }),
        children: color.text
      }
    ) })
  ] });
}
const colorsTableStyle = (theme) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  textAlign: "center",
  overflow: "auto",
  td: {
    padding: theme.spacing(1),
    textAlign: "center"
  }
});
function TextColors({ t }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DemoText, { color: "primary", children: [
      "text.primary ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_13__.Icon, { name: "trash-alt" })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DemoText, { color: "secondary", children: [
      "text.secondary ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_13__.Icon, { name: "trash-alt" })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DemoText, { color: "disabled", children: [
      "text.disabled ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_13__.Icon, { name: "trash-alt" })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DemoText, { color: "primary", children: [
      "primary.text ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_13__.Icon, { name: "trash-alt" })
    ] })
  ] });
}
function ShadowDemo({ name, shadow }) {
  const t = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.useTheme2)();
  const style = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: t.spacing(2),
    borderRadius: t.shape.radius.default,
    boxShadow: shadow
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: style, children: name });
}
function ActionsDemo() {
  const t = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.useTheme2)();
  const item = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    borderRadius: t.shape.radius.default,
    padding: t.spacing(1),
    ":hover": {
      background: t.colors.action.hover
    }
  });
  const hover = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    background: t.colors.action.hover
  });
  const selected = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    background: t.colors.action.selected
  });
  const focused = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    background: t.colors.action.focus
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Stack_Stack__WEBPACK_IMPORTED_MODULE_16__.Stack, { justifyContent: "flex-start", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DemoBox, { bg: "canvas", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Stack_Stack__WEBPACK_IMPORTED_MODULE_16__.Stack, { direction: "column", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: item, children: "item" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: item, children: "item" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(item, hover), children: "item hover" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(item, selected), children: "item selected" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(item, focused), children: "item focused" })
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DemoBox, { bg: "primary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Stack_Stack__WEBPACK_IMPORTED_MODULE_16__.Stack, { direction: "column", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: item, children: "item" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: item, children: "item" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(item, hover), children: "item hover" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(item, selected), children: "item selected" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(item, focused), children: "item focused" })
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DemoBox, { bg: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Stack_Stack__WEBPACK_IMPORTED_MODULE_16__.Stack, { direction: "column", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: item, children: "item" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: item, children: "item" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(item, hover), children: "item hover" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(item, selected), children: "item selected" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(item, focused), children: "item focused" })
    ] }) })
  ] });
}


/***/ }),

/***/ "./public/app/features/theme-playground/ThemePlayground.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ThemePlayground)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/themes/createTheme.ts");
/* harmony import */ var _grafana_data_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/themes/themeDefinitions/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/utils/chromeHeaderHeight.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Combobox/Combobox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/ThemeDemos/ThemeDemo.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _core_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var _core_copy_appNotification__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _core_reducers_navModel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/core/reducers/navModel.ts");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _core_utils_ConfigProvider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/core/utils/ConfigProvider.tsx");
/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _schema_generated_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/theme-playground/schema.generated.json");


















const themeMap = {
  dark: {
    name: "Dark",
    colors: {
      mode: "dark"
    }
  },
  light: {
    name: "Light",
    colors: {
      mode: "light"
    }
  },
  ..._grafana_data_internal__WEBPACK_IMPORTED_MODULE_4__
};
const themeOptions = Object.entries(themeMap).map(([key, theme]) => ({
  label: theme.name,
  value: key
}));
function ThemePlayground() {
  const navIndex = (0,_types_store__WEBPACK_IMPORTED_MODULE_19__.useSelector)((state) => state.navIndex);
  const homeNav = (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_17__.getNavModel)(navIndex, _core_reducers_navModel__WEBPACK_IMPORTED_MODULE_16__.HOME_NAV_ID).main;
  const navModel = {
    text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("theme-playground.title", "Theme playground"),
    parentItem: homeNav
  };
  const baseId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const chromeHeaderHeight = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.useChromeHeaderHeight)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles, chromeHeaderHeight);
  const dispatch = (0,_types_store__WEBPACK_IMPORTED_MODULE_19__.useDispatch)();
  const [baseThemeId, setBaseThemeId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Object.keys(themeMap)[0]);
  const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.createTheme)(themeMap[baseThemeId]));
  const updateThemePreview = (themeInput) => {
    try {
      const theme2 = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.createTheme)(themeInput);
      setTheme(theme2);
    } catch (error) {
      dispatch((0,_core_actions__WEBPACK_IMPORTED_MODULE_14__.notifyApp)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_15__.createErrorNotification)(`Failed to create theme: ${error}`)));
    }
  };
  const onEditorBlur = (value) => {
    try {
      const themeInput = JSON.parse(value);
      updateThemePreview(themeInput);
    } catch (error) {
      dispatch((0,_core_actions__WEBPACK_IMPORTED_MODULE_14__.notifyApp)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_15__.createErrorNotification)(`Failed to parse JSON: ${error}`)));
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_13__.Page,
    {
      navModel: {
        node: navModel,
        main: navModel
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack,
        {
          direction: {
            xs: "column",
            md: "row"
          },
          columnGap: 2,
          rowGap: 1,
          height: "100%",
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.left, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field, { noMargin: true, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("theme-playground.label-base-theme", "Base theme"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Combobox,
                {
                  value: baseThemeId,
                  onChange: (option) => {
                    setBaseThemeId(option.value);
                    updateThemePreview(themeMap[option.value]);
                  },
                  options: themeOptions,
                  id: baseId
                }
              ) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.CodeEditor,
                {
                  width: "100%",
                  value: JSON.stringify(themeMap[baseThemeId], null, 2),
                  language: "json",
                  showLineNumbers: true,
                  showMiniMap: true,
                  containerStyles: styles.codeEditor,
                  onBlur: onEditorBlur,
                  onBeforeEditorMount: (monaco) => {
                    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
                      validate: true,
                      schemas: [
                        {
                          uri: "theme-schema",
                          fileMatch: ["*"],
                          schema: _schema_generated_json__WEBPACK_IMPORTED_MODULE_20__
                        }
                      ]
                    });
                  },
                  monacoOptions: {
                    alwaysConsumeMouseWheel: true,
                    minimap: {
                      enabled: false
                    }
                  }
                }
              )
            ] }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_core_utils_ConfigProvider__WEBPACK_IMPORTED_MODULE_18__.ThemeProvider, { value: theme, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_12__.ThemeDemo, {}) })
          ]
        }
      )
    }
  );
}
const getStyles = (theme, chromeHeaderHeight) => ({
  left: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    background: theme.colors.background.primary,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    height: "40vh",
    minWidth: "300px",
    padding: theme.spacing(2, 0),
    position: "sticky",
    top: chromeHeaderHeight ?? 0,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      height: `calc(90vh - ${chromeHeaderHeight ?? 0}px - ${theme.spacing(2)})`,
      width: "70%"
    },
    zIndex: theme.zIndex.activePanel
  }),
  codeEditor: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    flex: 1
  })
});


/***/ }),

/***/ "./public/app/features/theme-playground/schema.generated.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","definitions":{"DeepPartial<ThemeColorsBase<ThemeRichColor>>":{"properties":{"action":{"$ref":"#/definitions/DeepPartial<{selected:string;selectedBorder:string;hover:string;hoverOpacity:number;focus:string;disabledBackground:string;disabledText:string;disabledOpacity:number;}>"},"background":{"$ref":"#/definitions/DeepPartial<{canvas:string;primary:string;secondary:string;elevated:string;}>"},"border":{"$ref":"#/definitions/DeepPartial<{weak:string;medium:string;strong:string;}>"},"contrastThreshold":{"type":"number"},"error":{"$ref":"#/definitions/DeepPartial<ThemeRichColor>"},"gradients":{"$ref":"#/definitions/DeepPartial<{brandVertical:string;brandHorizontal:string;}>"},"hoverFactor":{"type":"number"},"info":{"$ref":"#/definitions/DeepPartial<ThemeRichColor>"},"mode":{"enum":["dark","light"],"type":"string"},"primary":{"$ref":"#/definitions/DeepPartial<ThemeRichColor>"},"secondary":{"$ref":"#/definitions/DeepPartial<ThemeRichColor>"},"success":{"$ref":"#/definitions/DeepPartial<ThemeRichColor>"},"text":{"$ref":"#/definitions/DeepPartial<{primary:string;secondary:string;disabled:string;link:string;maxContrast:string;}>"},"tonalOffset":{"type":"number"},"warning":{"$ref":"#/definitions/DeepPartial<ThemeRichColor>"}},"type":"object"},"DeepPartial<ThemeRichColor>":{"properties":{"border":{"description":"Used for borders","type":"string"},"borderTransparent":{"description":"Used for weak colored borders like larger alert/banner boxes and smaller badges and tags","type":"string"},"contrastText":{"description":"Text color for text ontop of main","type":"string"},"main":{"description":"Main color","type":"string"},"name":{"description":"color intent (primary, secondary, info, error, etc)","type":"string"},"shade":{"description":"Used for hover","type":"string"},"text":{"description":"Used for text","type":"string"},"transparent":{"description":"Used subtly colored backgrounds","type":"string"}},"type":"object"},"DeepPartial<{brandVertical:string;brandHorizontal:string;}>":{"properties":{"brandHorizontal":{"type":"string"},"brandVertical":{"type":"string"}},"type":"object"},"DeepPartial<{canvas:string;primary:string;secondary:string;elevated:string;}>":{"properties":{"canvas":{"description":"Dashboard and body background","type":"string"},"elevated":{"description":"For popovers and menu backgrounds. This is the same color as primary in most light themes but in dark\\nthemes it has a brighter shade to help give it contrast against the primary background.","type":"string"},"primary":{"description":"Primary content pane background (panels etc)","type":"string"},"secondary":{"description":"Cards and elements that need to stand out on the primary background","type":"string"}},"type":"object"},"DeepPartial<{primary:string;secondary:string;disabled:string;link:string;maxContrast:string;}>":{"properties":{"disabled":{"type":"string"},"link":{"type":"string"},"maxContrast":{"description":"Used for auto white or dark text on colored backgrounds","type":"string"},"primary":{"type":"string"},"secondary":{"type":"string"}},"type":"object"},"DeepPartial<{selected:string;selectedBorder:string;hover:string;hoverOpacity:number;focus:string;disabledBackground:string;disabledText:string;disabledOpacity:number;}>":{"properties":{"disabledBackground":{"description":"Used for disabled buttons and inputs","type":"string"},"disabledOpacity":{"description":"Disablerd opacity","type":"number"},"disabledText":{"description":"Disabled text","type":"string"},"focus":{"description":"Used focused menu item / select option","type":"string"},"hover":{"description":"Used for hovered menu item / select option","type":"string"},"hoverOpacity":{"description":"Used for button/colored background hover opacity","type":"number"},"selected":{"description":"Used for selected menu item / select option","type":"string"},"selectedBorder":{"type":"string"}},"type":"object"},"DeepPartial<{weak:string;medium:string;strong:string;}>":{"properties":{"medium":{"type":"string"},"strong":{"type":"string"},"weak":{"type":"string"}},"type":"object"},"ThemeShapeInput":{"properties":{"borderRadius":{"type":"number"}},"type":"object"},"ThemeTypographyInput":{"properties":{"fontFamily":{"type":"string"},"fontFamilyMonospace":{"type":"string"},"fontSize":{"type":"number"},"fontWeightBold":{"type":"number"},"fontWeightLight":{"type":"number"},"fontWeightMedium":{"type":"number"},"fontWeightRegular":{"type":"number"},"htmlFontSize":{"type":"number"}},"type":"object"},"ThemeVizColor<\\"blue\\">":{"properties":{"aliases":{"items":{"type":"string"},"type":"array"},"color":{"type":"string"},"name":{"$ref":"#/definitions/ThemeVizColorShadeName_4"},"primary":{"type":"boolean"}},"type":"object"},"ThemeVizColor<\\"green\\">":{"properties":{"aliases":{"items":{"type":"string"},"type":"array"},"color":{"type":"string"},"name":{"$ref":"#/definitions/ThemeVizColorShadeName_3"},"primary":{"type":"boolean"}},"type":"object"},"ThemeVizColor<\\"orange\\">":{"properties":{"aliases":{"items":{"type":"string"},"type":"array"},"color":{"type":"string"},"name":{"$ref":"#/definitions/ThemeVizColorShadeName_1"},"primary":{"type":"boolean"}},"type":"object"},"ThemeVizColor<\\"purple\\">":{"properties":{"aliases":{"items":{"type":"string"},"type":"array"},"color":{"type":"string"},"name":{"$ref":"#/definitions/ThemeVizColorShadeName_5"},"primary":{"type":"boolean"}},"type":"object"},"ThemeVizColor<\\"red\\">":{"properties":{"aliases":{"items":{"type":"string"},"type":"array"},"color":{"type":"string"},"name":{"$ref":"#/definitions/ThemeVizColorShadeName"},"primary":{"type":"boolean"}},"type":"object"},"ThemeVizColor<\\"yellow\\">":{"properties":{"aliases":{"items":{"type":"string"},"type":"array"},"color":{"type":"string"},"name":{"$ref":"#/definitions/ThemeVizColorShadeName_2"},"primary":{"type":"boolean"}},"type":"object"},"ThemeVizColorShadeName":{"enum":["dark-red","light-red","red","semi-dark-red","super-light-red"],"type":"string"},"ThemeVizColorShadeName_1":{"enum":["dark-orange","light-orange","orange","semi-dark-orange","super-light-orange"],"type":"string"},"ThemeVizColorShadeName_2":{"enum":["dark-yellow","light-yellow","semi-dark-yellow","super-light-yellow","yellow"],"type":"string"},"ThemeVizColorShadeName_3":{"enum":["dark-green","green","light-green","semi-dark-green","super-light-green"],"type":"string"},"ThemeVizColorShadeName_4":{"enum":["blue","dark-blue","light-blue","semi-dark-blue","super-light-blue"],"type":"string"},"ThemeVizColorShadeName_5":{"enum":["dark-purple","light-purple","purple","semi-dark-purple","super-light-purple"],"type":"string"},"ThemeVizHue":{"anyOf":[{"properties":{"name":{"const":"red","type":"string"},"shades":{"items":{"$ref":"#/definitions/ThemeVizColor<\\"red\\">"},"type":"array"}},"type":"object"},{"properties":{"name":{"const":"orange","type":"string"},"shades":{"items":{"$ref":"#/definitions/ThemeVizColor<\\"orange\\">"},"type":"array"}},"type":"object"},{"properties":{"name":{"const":"yellow","type":"string"},"shades":{"items":{"$ref":"#/definitions/ThemeVizColor<\\"yellow\\">"},"type":"array"}},"type":"object"},{"properties":{"name":{"const":"green","type":"string"},"shades":{"items":{"$ref":"#/definitions/ThemeVizColor<\\"green\\">"},"type":"array"}},"type":"object"},{"properties":{"name":{"const":"blue","type":"string"},"shades":{"items":{"$ref":"#/definitions/ThemeVizColor<\\"blue\\">"},"type":"array"}},"type":"object"},{"properties":{"name":{"const":"purple","type":"string"},"shades":{"items":{"$ref":"#/definitions/ThemeVizColor<\\"purple\\">"},"type":"array"}},"type":"object"}]}},"properties":{"colors":{"$ref":"#/definitions/DeepPartial<ThemeColorsBase<ThemeRichColor>>"},"name":{"type":"string"},"shape":{"$ref":"#/definitions/ThemeShapeInput"},"spacing":{"properties":{"gridSize":{"type":"number"}},"type":"object"},"typography":{"$ref":"#/definitions/ThemeTypographyInput"},"visualization":{"properties":{"hues":{"items":{"$ref":"#/definitions/ThemeVizHue"},"type":"array"},"palette":{"items":{"type":"string"},"type":"array"}},"type":"object"}},"type":"object"}');

/***/ })

}]);
//# sourceMappingURL=ThemePlayground.bda09c460e407745c5a8.js.map