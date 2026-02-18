"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SupportBundles"],{

/***/ "./public/app/features/support-bundles/SupportBundles.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/datetime/formatter.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/support-bundles/state/actions.ts");











const NewBundleButton = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.LinkButton, { icon: "plus", href: "support-bundles/create", variant: "primary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "support-bundles.new-bundle-button.new-support-bundle", children: "New support bundle" }) });
const mapStateToProps = (state) => {
  return {
    supportBundles: state.supportBundles.supportBundles,
    isLoading: state.supportBundles.isLoading
  };
};
const mapDispatchToProps = {
  loadBundles: _state_actions__WEBPACK_IMPORTED_MODULE_11__.loadBundles,
  removeBundle: _state_actions__WEBPACK_IMPORTED_MODULE_11__.removeBundle,
  checkBundles: _state_actions__WEBPACK_IMPORTED_MODULE_11__.checkBundles
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);
const SupportBundlesUnconnected = ({ supportBundles, isLoading, loadBundles: loadBundles2, removeBundle: removeBundle2, checkBundles: checkBundles2 }) => {
  const isPending = supportBundles.some((b) => b.state === "pending");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    loadBundles2();
  }, [loadBundles2]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isPending) {
      checkBundles2();
    }
  });
  const hasAccess = app_core_core__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.ActionSupportBundlesCreate);
  const hasDeleteAccess = app_core_core__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.ActionSupportBundlesDelete);
  const actions = hasAccess ? NewBundleButton : void 0;
  const subTitle = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "support-bundles.support-bundles-unconnected.sub-title", children: "Support bundles allow you to easily collect and share Grafana logs, configuration, and data with the Grafana Labs team." }) });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_8__.Page, { navId: "support-bundles", subTitle, actions, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_8__.Page.Contents, { isLoading, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: "filter-table form-inline", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "support-bundles.support-bundles-unconnected.created-on", children: "Created on" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "support-bundles.support-bundles-unconnected.requested-by", children: "Requested by" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "support-bundles.support-bundles-unconnected.expires", children: "Expires" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { width: "32px" } }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { width: "1%" } }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { width: "1%" } })
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: supportBundles?.map((bundle) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTimeFormat)(bundle.createdAt * 1e3) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: bundle.creator }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTimeFormat)(bundle.expiresAt * 1e3) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: bundle.state === "pending" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Spinner, {}) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.LinkButton,
        {
          fill: "outline",
          disabled: bundle.state !== "complete",
          target: "_self",
          href: `/api/support-bundles/${bundle.uid}`,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "support-bundles.support-bundles-unconnected.download", children: "Download" })
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: hasDeleteAccess && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.IconButton,
        {
          onClick: () => removeBundle2(bundle.uid),
          name: "trash-alt",
          variant: "destructive",
          tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("support-bundles.support-bundles-unconnected.tooltip-remove-bundle", "Remove bundle")
        }
      ) })
    ] }, bundle.uid)) })
  ] }) }) });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(SupportBundlesUnconnected));


/***/ }),

/***/ "./public/app/features/support-bundles/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkBundles: () => (/* binding */ checkBundles),
/* harmony export */   createSupportBundle: () => (/* binding */ createSupportBundle),
/* harmony export */   loadBundles: () => (/* binding */ loadBundles),
/* harmony export */   loadSupportBundleCollectors: () => (/* binding */ loadSupportBundleCollectors),
/* harmony export */   removeBundle: () => (/* binding */ removeBundle)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/support-bundles/state/reducers.ts");




function loadBundles(skipPageRefresh = false) {
  return async (dispatch) => {
    try {
      if (!skipPageRefresh) {
        dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.fetchBegin)());
      }
      const result = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get("/api/support-bundles");
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.supportBundlesLoaded)(result));
    } finally {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.fetchEnd)());
    }
  };
}
const checkBundlesStatusThrottled = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.throttle)(async (dispatch) => {
  const result = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get("/api/support-bundles");
  dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.supportBundlesLoaded)(result));
}, 1e3);
function checkBundles() {
  return async (dispatch) => {
    dispatch(checkBundlesStatusThrottled);
  };
}
function removeBundle(uid) {
  return async (dispatch) => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().delete(`/api/support-bundles/${uid}`);
    dispatch(loadBundles(true));
  };
}
function loadSupportBundleCollectors() {
  return async (dispatch) => {
    try {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.collectorsFetchBegin)());
      const result = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get("/api/support-bundles/collectors");
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.supportBundleCollectorsLoaded)(result));
    } catch (err) {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.setLoadBundleError)("Error loading support bundles data collectors"));
    } finally {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.collectorsFetchEnd)());
    }
  };
}
function createSupportBundle(data) {
  return async (dispatch) => {
    try {
      await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().post("/api/support-bundles", data);
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.push("/support-bundles");
    } catch (err) {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.setCreateBundleError)("Error creating support bundle"));
    }
  };
}


/***/ })

}]);
//# sourceMappingURL=SupportBundles.2552d80c41afa2920174.js.map