"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SelectOrgPage"],{

/***/ "./public/app/features/org/SelectOrgPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectOrgPage: () => (/* binding */ SelectOrgPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/org/state/actions.ts");









const navModel = {
  main: {
    icon: "grafana",
    subTitle: "Preferences",
    text: "Select active organization"
  },
  node: {
    text: "Select active organization"
  }
};
const mapStateToProps = (state) => {
  return {
    userOrgs: state.organization.userOrgs
  };
};
const mapDispatchToProps = {
  setUserOrganization: _state_actions__WEBPACK_IMPORTED_MODULE_8__.setUserOrganization,
  getUserOrganizations: _state_actions__WEBPACK_IMPORTED_MODULE_8__.getUserOrganizations
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const SelectOrgPage = ({ setUserOrganization: setUserOrganization2, getUserOrganizations: getUserOrganizations2, userOrgs }) => {
  const setUserOrg = async (org) => {
    await setUserOrganization2(org.orgId);
    window.location.href = _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.appSubUrl + "/";
  };
  (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(() => {
    getUserOrganizations2();
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__.Page, { navModel, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__.Page.Contents, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "org.select-org-page.description", children: "You have been invited to another organization! Please select which organization that you want to use right now. You can change this later at any time." }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { wrap: "wrap", children: userOrgs && userOrgs.map((org) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { icon: "signin", onClick: () => setUserOrg(org), children: org.name }, org.orgId)) })
  ] }) }) });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(SelectOrgPage));


/***/ })

}]);
//# sourceMappingURL=SelectOrgPage.859a3e07f288b7956275.js.map