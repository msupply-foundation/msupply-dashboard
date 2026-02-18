"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["NewSilencePage"],{

/***/ "./public/app/features/alerting/unified/NewSilencePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var app_features_alerting_unified_components_silences_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/utils.ts");
/* harmony import */ var app_features_alerting_unified_utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var app_features_alerting_unified_utils_matchers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/matchers.ts");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_GrafanaAlertmanagerWarning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/GrafanaAlertmanagerWarning.tsx");
/* harmony import */ var _components_silences_SilencesEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilencesEditor.tsx");
/* harmony import */ var _state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertmanagerContext.tsx");
/* harmony import */ var _withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/withPageErrorBoundary.tsx");












const SilencesEditorComponent = () => {
  const location = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  const queryParams = new URLSearchParams(location.search);
  const { selectedAlertmanager = "" } = (0,_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_9__.useAlertmanager)();
  const potentialAlertRuleMatcher = (0,app_features_alerting_unified_utils_matchers__WEBPACK_IMPORTED_MODULE_5__.parseQueryParamMatchers)(queryParams.getAll("matcher")).find(
    (m) => m.name === app_features_alerting_unified_utils_constants__WEBPACK_IMPORTED_MODULE_4__.MATCHER_ALERT_RULE_UID
  );
  const potentialRuleUid = potentialAlertRuleMatcher?.value;
  const formValues = (0,app_features_alerting_unified_components_silences_utils__WEBPACK_IMPORTED_MODULE_3__.getDefaultSilenceFormValues)((0,app_features_alerting_unified_components_silences_utils__WEBPACK_IMPORTED_MODULE_3__.defaultsFromQuery)(queryParams));
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_GrafanaAlertmanagerWarning__WEBPACK_IMPORTED_MODULE_7__.GrafanaAlertmanagerWarning, { currentAlertmanager: selectedAlertmanager }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _components_silences_SilencesEditor__WEBPACK_IMPORTED_MODULE_8__.SilencesEditor,
      {
        formValues,
        alertManagerSourceName: selectedAlertmanager,
        ruleUid: potentialRuleUid
      }
    )
  ] });
};
function NewSilencePage() {
  const pageNav = {
    id: "silence-new",
    text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.new-silence-page.page-nav.text.silence-alert-rule", "Silence alert rule"),
    subTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
      "alerting.new-silence-page.page-nav.subTitle.configure-silences-notifications-particular-alert",
      "Configure silences to stop notifications from a particular alert rule"
    )
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_6__.AlertmanagerPageWrapper, { navId: "silences", pageNav, accessType: "instance", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SilencesEditorComponent, {}) });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_10__.withPageErrorBoundary)(NewSilencePage));


/***/ })

}]);
//# sourceMappingURL=NewSilencePage.e754889ec23d0f52c02f.js.map