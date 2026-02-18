"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["CorrelationsFeatureToggle"],{

/***/ "./public/app/features/correlations/CorrelationsFeatureToggle.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FeatureTogglePage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");




function FeatureTogglePage() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__.Page, { navId: "correlations", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__.Page.Contents, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "correlations.page-heading", children: "Correlations are disabled" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "correlations.page-content", children: "To enable Correlations, add it in the Grafana config:" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: `[feature_toggles]
correlations = true
` }) })
  ] }) });
}


/***/ })

}]);
//# sourceMappingURL=CorrelationsFeatureToggle.ba18c2f36b87774525e1.js.map