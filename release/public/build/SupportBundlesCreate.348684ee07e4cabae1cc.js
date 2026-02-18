"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SupportBundlesCreate"],{

/***/ "./public/app/core/components/Form/Form.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Form: () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");





function Form({
  defaultValues,
  onSubmit,
  validateOnMount = false,
  validateFieldsOnMount,
  children,
  validateOn = "onSubmit",
  maxWidth = 600,
  ...htmlProps
}) {
  const { handleSubmit, trigger, formState, ...rest } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    mode: validateOn,
    defaultValues
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (validateOnMount) {
      trigger(validateFieldsOnMount);
    }
  }, [trigger, validateFieldsOnMount, validateOnMount]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "form",
    {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        maxWidth: maxWidth !== "none" ? maxWidth + "px" : maxWidth,
        width: "100%"
      }),
      onSubmit: handleSubmit(onSubmit),
      ...htmlProps,
      children: children({ errors: formState.errors, formState, trigger, ...rest })
    }
  );
}


/***/ }),

/***/ "./public/app/features/support-bundles/SupportBundlesCreate.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportBundlesCreateUnconnected: () => (/* binding */ SupportBundlesCreateUnconnected),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Checkbox.tsx");
/* harmony import */ var app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/Form/Form.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/support-bundles/state/actions.ts");









const mapStateToProps = (state) => {
  return {
    collectors: state.supportBundles.supportBundleCollectors,
    isLoading: state.supportBundles.createBundlePageLoading,
    loadCollectorsError: state.supportBundles.loadBundlesError,
    createBundleError: state.supportBundles.createBundleError
  };
};
const mapDispatchToProps = {
  loadSupportBundleCollectors: _state_actions__WEBPACK_IMPORTED_MODULE_11__.loadSupportBundleCollectors,
  createSupportBundle: _state_actions__WEBPACK_IMPORTED_MODULE_11__.createSupportBundle
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);
const SupportBundlesCreateUnconnected = ({
  collectors,
  isLoading,
  loadCollectorsError,
  createBundleError,
  loadSupportBundleCollectors: loadSupportBundleCollectors2,
  createSupportBundle: createSupportBundle2
}) => {
  const onSubmit = (data) => {
    const selectedLabelsArray = Object.keys(data).filter((key) => data[key]);
    createSupportBundle2({ collectors: selectedLabelsArray });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    loadSupportBundleCollectors2();
  }, [loadSupportBundleCollectors2]);
  const values = collectors.reduce((acc, curr) => {
    return { ...acc, [curr.uid]: curr.default };
  }, {});
  const subTitle = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "support-bundles.support-bundles-create-unconnected.sub-title", children: "Choose the components for the support bundle. The support bundle will be available for 3 days after creation." }) });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_10__.Page,
    {
      navId: "support-bundles",
      pageNav: {
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "support-bundles.support-bundles-create-unconnected.text.create-support-bundle",
          "Create support bundle"
        )
      },
      subTitle,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_10__.Page.Contents, { isLoading, children: [
        loadCollectorsError && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, { title: loadCollectorsError, severity: "error" }),
        createBundleError && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, { title: createBundleError, severity: "error" }),
        !!collectors.length && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_9__.Form, { defaultValues: values, onSubmit, validateOn: "onSubmit", children: ({ register }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            [...collectors].sort((a, b) => a.displayName.localeCompare(b.displayName)).map((component) => {
              return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Checkbox,
                {
                  ...register(component.uid),
                  label: component.displayName,
                  id: component.uid,
                  description: component.description,
                  defaultChecked: component.default,
                  disabled: component.includedByDefault
                }
              ) }, component.uid);
            }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { type: "submit", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "support-bundles.support-bundles-create-unconnected.create", children: "Create" }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, { href: "/support-bundles", variant: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "support-bundles.support-bundles-create-unconnected.cancel", children: "Cancel" }) })
            ] })
          ] });
        } })
      ] })
    }
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(SupportBundlesCreateUnconnected));


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
//# sourceMappingURL=SupportBundlesCreate.348684ee07e4cabae1cc.js.map