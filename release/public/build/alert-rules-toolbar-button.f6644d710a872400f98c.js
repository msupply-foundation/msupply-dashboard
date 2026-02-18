"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["alert-rules-toolbar-button"],{

/***/ "./public/app/features/alerting/unified/integration/AlertRulesDrawer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertRulesDrawer: () => (/* binding */ AlertRulesDrawer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Drawer/Drawer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");






const AlertRulesDrawerContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(
  () => __webpack_require__.e(/* import() | alert-rules-drawer-content */ "alert-rules-drawer-content").then(__webpack_require__.bind(__webpack_require__, "./public/app/features/alerting/unified/integration/AlertRulesDrawerContent.tsx"))
);
function AlertRulesDrawer({ dashboardUid, onDismiss }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Drawer,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.alert-rules-drawer.title-alert-rules", "Alert rules"),
      subtitle: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DrawerSubtitle, { dashboardUid }),
      onClose: onDismiss,
      size: "lg",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        react__WEBPACK_IMPORTED_MODULE_1__.Suspense,
        {
          fallback: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.alert-rules-drawer.text-loading-alert-rules", "Loading alert rules") }),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertRulesDrawerContent, { dashboardUid })
        }
      )
    }
  );
}
function DrawerSubtitle({ dashboardUid }) {
  const searchParams = new URLSearchParams({ search: `dashboard:${dashboardUid}` });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashboard.alert-rules-drawer.subtitle", "Alert rules related to this dashboard") }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TextLink, { href: (0,_utils_url__WEBPACK_IMPORTED_MODULE_7__.createRelativeUrl)(`/alerting/list/?${searchParams.toString()}`), children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashboard.alert-rules-drawer.redirect-link", "List in Grafana Alerting") })
  ] });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/integration/AlertRulesToolbarButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AlertRulesToolbarButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/ModalsContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/ToolbarButton/ToolbarButton.tsx");
/* harmony import */ var _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _AlertRulesDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/integration/AlertRulesDrawer.tsx");








function AlertRulesToolbarButton({ dashboardUid }) {
  const { showModal, hideModal } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ModalsContext);
  const { data: namespaces = [] } = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_5__.alertRuleApi.endpoints.prometheusRuleNamespaces.useQuery({
    ruleSourceName: _utils_datasource__WEBPACK_IMPORTED_MODULE_6__.GRAFANA_RULES_SOURCE_NAME,
    dashboardUid
  });
  if (namespaces.length === 0) {
    return null;
  }
  const onShowDrawer = () => {
    showModal(_AlertRulesDrawer__WEBPACK_IMPORTED_MODULE_7__.AlertRulesDrawer, {
      dashboardUid,
      onDismiss: hideModal
    });
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton,
    {
      tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashboard.toolbar.alert-rules", "Alert rules"),
      icon: "bell",
      onClick: onShowDrawer
    },
    "button-alerting"
  );
}


/***/ })

}]);
//# sourceMappingURL=alert-rules-toolbar-button.f6644d710a872400f98c.js.map