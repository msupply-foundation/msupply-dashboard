"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["alert-rules-drawer-content"],{

/***/ "./public/app/features/alerting/unified/integration/AlertRulesDrawerContent.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AlertRulesDrawerContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _components_rules_RulesTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesTable.tsx");
/* harmony import */ var _hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");






function AlertRulesDrawerContent({ dashboardUid }) {
  const { loading, result: grafanaNamespaces } = (0,_hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_4__.useCombinedRules)(dashboardUid);
  const rules = grafanaNamespaces ? grafanaNamespaces.flatMap((ns) => ns.groups).flatMap((g) => g.rules) : [];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: loading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder,
    {
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.alert-rules-drawer-content.text-loading-alert-rules", "Loading alert rules")
    }
  ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rules_RulesTable__WEBPACK_IMPORTED_MODULE_3__.RulesTable, { rules, showNextEvaluationColumn: false, showGroupColumn: false }) });
}


/***/ })

}]);
//# sourceMappingURL=alert-rules-drawer-content.5e4002393ac1020a881d.js.map