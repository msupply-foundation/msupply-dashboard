"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["EmbeddedDashboard"],{

/***/ "./public/app/features/dashboard-scene/embedding/EmbeddedDashboard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmbeddedDashboard: () => (/* binding */ EmbeddedDashboard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/utils/url.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_utils_errors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/utils/errors.ts");
/* harmony import */ var app_types_dashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/dashboard.ts");
/* harmony import */ var _pages_DashboardScenePageStateManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/dashboard-scene/pages/DashboardScenePageStateManager.ts");











function EmbeddedDashboard(props) {
  const stateManager = (0,_pages_DashboardScenePageStateManager__WEBPACK_IMPORTED_MODULE_11__.getDashboardScenePageStateManager)();
  const { dashboard, loadError } = stateManager.useState();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    stateManager.loadDashboard({ uid: props.uid, route: app_types_dashboard__WEBPACK_IMPORTED_MODULE_10__.DashboardRoutes.Embedded });
    return () => {
      stateManager.clearState();
    };
  }, [stateManager, props.uid]);
  if (loadError) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert, { severity: "error", title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("dashboard.errors.failed-to-load", "Failed to load dashboard"), children: (0,app_core_utils_errors__WEBPACK_IMPORTED_MODULE_9__.getMessageFromError)(loadError) });
  }
  if (!dashboard) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Spinner, {});
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EmbeddedDashboardRenderer, { model: dashboard, ...props });
}
function EmbeddedDashboardRenderer({ model, initialState, onStateChange }) {
  const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const { controls, body } = model.useState();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setIsActive(true);
    if (initialState) {
      const searchParms = new URLSearchParams(initialState);
      _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.sceneUtils.syncStateFromSearchParams(model, searchParms);
    }
    return model.activate();
  }, [model]);
  useSubscribeToEmbeddedUrlState(onStateChange, model);
  if (!isActive) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.canvas, controls && styles.canvasWithControls), children: [
    controls && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.controlsWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(controls.Component, { model: controls }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.body, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(body.Component, { model: body }) })
  ] });
}
function useSubscribeToEmbeddedUrlState(onStateChange, model) {
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!onStateChange) {
      return;
    }
    let lastState = "";
    const sub = model.subscribeToEvent(_grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.SceneObjectStateChangedEvent, (evt) => {
      if (evt.payload.changedObject.urlSync) {
        const state = _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.sceneUtils.getUrlState(model);
        const stateAsString = _grafana_data__WEBPACK_IMPORTED_MODULE_3__.urlUtil.renderUrl("", state);
        if (lastState !== stateAsString) {
          lastState = stateAsString;
          onStateChange(stateAsString);
        }
      }
    });
    return () => sub.unsubscribe();
  }, [model, onStateChange]);
}
function getStyles(theme) {
  return {
    canvas: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "canvas-content",
      display: "grid",
      gridTemplateAreas: `
        "panels"`,
      gridTemplateColumns: `1fr`,
      gridTemplateRows: "1fr",
      flexBasis: "100%",
      flexGrow: 1
    }),
    canvasWithControls: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      gridTemplateAreas: `
        "controls"
        "panels"`,
      gridTemplateRows: "auto 1fr"
    }),
    body: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "body",
      flexGrow: 1,
      display: "flex",
      gap: "8px",
      gridArea: "panels",
      marginBottom: theme.spacing(2)
    }),
    controlsWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "column",
      flexGrow: 0,
      gridArea: "controls",
      padding: theme.spacing(2, 0, 2, 2)
    })
  };
}


/***/ })

}]);
//# sourceMappingURL=EmbeddedDashboard.f829ddfc8f04510a0aba.js.map