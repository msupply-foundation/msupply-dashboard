"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertingDisabled"],{

/***/ "./public/app/features/alerting/unified/AlertingNotEnabled.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/withPageErrorBoundary.tsx");





function FeatureTogglePage() {
  const navModel = {
    node: {
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.feature-toggle-page.nav-model.text.alerting-is-not-enabled", "Alerting is not enabled"),
      hideFromBreadcrumbs: true,
      subTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "alerting.feature-toggle-page.nav-model.subTitle.enable-alerting-grafana-config",
        "To enable alerting, enable it in the Grafana config"
      )
    },
    main: {
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.feature-toggle-page.nav-model.text.alerting-is-not-enabled", "Alerting is not enabled")
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__.Page, { navModel, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__.Page.Contents, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: `[unified_alerting]
enabled = true
` }) }) });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_3__.withPageErrorBoundary)(FeatureTogglePage));


/***/ })

}]);
//# sourceMappingURL=AlertingDisabled.26f0e006bdb9815eade0.js.map