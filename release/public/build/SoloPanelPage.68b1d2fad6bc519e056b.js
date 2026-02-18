"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SoloPanelPage"],{

/***/ "./public/app/features/dashboard-scene/solo/SoloPanelPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SoloPanelPage: () => (/* binding */ SoloPanelPage),
/* harmony export */   SoloPanelRenderer: () => (/* binding */ SoloPanelRenderer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/PageLoader/PageLoader.tsx");
/* harmony import */ var app_core_components_PageNotFound_EntityNotFound__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/PageNotFound/EntityNotFound.tsx");
/* harmony import */ var app_types_dashboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/types/dashboard.ts");
/* harmony import */ var _pages_DashboardScenePageStateManager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/dashboard-scene/pages/DashboardScenePageStateManager.ts");
/* harmony import */ var _scene_SoloPanelContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/dashboard-scene/scene/SoloPanelContext.tsx");













function SoloPanelPage({ queryParams }) {
  const stateManager = (0,_pages_DashboardScenePageStateManager__WEBPACK_IMPORTED_MODULE_12__.getDashboardScenePageStateManager)();
  const { dashboard, loadError } = stateManager.useState();
  const { uid = "", type, slug } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__.useParams)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    stateManager.loadDashboard({ uid, type, slug, route: app_types_dashboard__WEBPACK_IMPORTED_MODULE_11__.DashboardRoutes.Embedded });
    return () => stateManager.clearState();
  }, [stateManager, queryParams, uid, type, slug]);
  if (!queryParams.panelId) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_PageNotFound_EntityNotFound__WEBPACK_IMPORTED_MODULE_10__.EntityNotFound, { entity: "Panel" });
  }
  if (loadError) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Box, { justifyContent: "center", alignItems: "center", display: "flex", height: "100%", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert, { severity: "error", title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("dashboard.errors.failed-to-load", "Failed to load dashboard"), children: loadError.message }) });
  }
  if (!dashboard) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_9__["default"], {});
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.UrlSyncContextProvider, { scene: dashboard, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SoloPanelRenderer, { dashboard, panelId: queryParams.panelId }) });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SoloPanelPage);
function SoloPanelRenderer({ dashboard, panelId }) {
  const { controls, body } = dashboard.useState();
  const refreshPicker = controls?.useState()?.refreshPicker;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const soloPanelContext = (0,_scene_SoloPanelContext__WEBPACK_IMPORTED_MODULE_13__.useDefineSoloPanelContext)(panelId);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const dashDeactivate = dashboard.activate();
    const refreshDeactivate = refreshPicker?.activate();
    return () => {
      dashDeactivate();
      refreshDeactivate?.();
    };
  }, [dashboard, refreshPicker]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
    renderHiddenVariables(dashboard),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_scene_SoloPanelContext__WEBPACK_IMPORTED_MODULE_13__.SoloPanelContextProvider, { value: soloPanelContext, dashboard, singleMatch: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(body.Component, { model: body }) })
  ] });
}
function renderHiddenVariables(dashboard) {
  if (!dashboard.state.$variables) {
    return null;
  }
  const variables = dashboard.state.$variables.state.variables;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: variables.map((variable) => {
    if (variable.UNSAFE_renderAsHidden) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(variable.Component, { model: variable }, variable.state.key);
    }
    return null;
  }) });
}
const getStyles = (theme) => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "fixed",
    bottom: 0,
    right: 0,
    margin: 0,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%"
  })
});


/***/ })

}]);
//# sourceMappingURL=SoloPanelPage.68b1d2fad6bc519e056b.js.map