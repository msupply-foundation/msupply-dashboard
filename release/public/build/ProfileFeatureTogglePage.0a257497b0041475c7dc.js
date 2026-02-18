"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["ProfileFeatureTogglePage"],{

/***/ "./public/app/features/profile/FeatureTogglePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FeatureTogglePage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/hooks/useNavModel.ts");





function FeatureTogglePage() {
  const navModel = (0,app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_3__.useNavModel)("profile-settings");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__.Page, { navModel, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__.Page.Contents, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "profile.feature-toggle-page.profile-not-enabled", children: "Profile is not enabled." }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "profile.feature-toggles-age.enable-in-config", children: "Enable profile in the Grafana config file." }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: `[profile]
enable = true
` }) })
  ] }) });
}


/***/ })

}]);
//# sourceMappingURL=ProfileFeatureTogglePage.0a257497b0041475c7dc.js.map