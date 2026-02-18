"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["MetricsDrilldownRedirect"],{

/***/ "./public/app/features/trails/RedirectToDrilldownApp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var app_features_plugins_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/routes.tsx");




const RedirectToDrilldownApp = () => {
  const { "*": remainingPath } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__.useParams)();
  const location = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  const appPath = (0,app_features_plugins_routes__WEBPACK_IMPORTED_MODULE_2__.getRouteForAppPlugin)("grafana-metricsdrilldown-app").path.replaceAll("*", "");
  const newPath = `${appPath}${remainingPath}${location.search}`;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__.Navigate, { replace: true, to: newPath });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RedirectToDrilldownApp);


/***/ })

}]);
//# sourceMappingURL=MetricsDrilldownRedirect.c4a3e7cd95432f6ab1aa.js.map