"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_alerting_unified_components_rule-viewer_tabs_Query_LokiQueryPreview_tsx"],{

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/VisualQueryBuilder/components/RawQuery.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RawQuery: () => (/* binding */ RawQuery)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/prismjs/prism.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/text/sanitize.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");






function RawQuery({ query, language, className }) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme2)();
  const styles = getStyles(theme);
  const highlighted = prismjs__WEBPACK_IMPORTED_MODULE_1__.highlight(query, language.grammar, language.name);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2__.createElement(
    "div",
    {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.editorField, "prism-syntax-highlight", className),
      "aria-label": "selector",
      dangerouslySetInnerHTML: { __html: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.textUtil.sanitize(highlighted) }
    }
  );
}
const getStyles = (theme) => {
  return {
    editorField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      fontFamily: theme.typography.fontFamilyMonospace,
      fontSize: theme.typography.bodySmall.fontSize
    })
  };
};


//# sourceMappingURL=RawQuery.js.map


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-viewer/tabs/Query/LokiQueryPreview.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/VisualQueryBuilder/components/RawQuery.js");
/* harmony import */ var app_plugins_datasource_loki_syntax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/syntax.ts");




const LokiQueryPreview = ({ query }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.RawQuery, { query, language: { grammar: app_plugins_datasource_loki_syntax__WEBPACK_IMPORTED_MODULE_2__["default"], name: "promql" } }) });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LokiQueryPreview);


/***/ })

}]);
//# sourceMappingURL=public_app_features_alerting_unified_components_rule-viewer_tabs_Query_LokiQueryPreview_tsx.e2000131bf7029de2a82.js.map