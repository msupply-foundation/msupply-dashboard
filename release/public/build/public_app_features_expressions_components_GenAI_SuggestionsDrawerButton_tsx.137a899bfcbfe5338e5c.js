"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_expressions_components_GenAI_SuggestionsDrawerButton_tsx"],{

/***/ "./public/app/features/expressions/components/GenAI/SuggestionsDrawerButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuggestionsDrawerButton: () => (/* binding */ SuggestionsDrawerButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





const SuggestionsDrawerButton = ({ suggestions, handleOpenDrawer }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.buttonWrapper, "data-testid": "suggestions-badge", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { variant: "secondary", fill: "outline", size: "sm", onClick: handleOpenDrawer, icon: "list-ol", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "row", gap: 1, alignItems: "center", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "sql-expressions.suggestions", children: "Suggestions" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.countBadge, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "bodySmall", weight: "bold", children: suggestions.length }) })
  ] }) }) });
};
const getStyles = (theme) => ({
  countBadge: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.primary.text,
    fontWeight: "bold"
  }),
  buttonWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "relative",
    display: "inline-block"
  })
});


/***/ })

}]);
//# sourceMappingURL=public_app_features_expressions_components_GenAI_SuggestionsDrawerButton_tsx.137a899bfcbfe5338e5c.js.map