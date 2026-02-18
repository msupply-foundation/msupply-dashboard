"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["TestStuffPage"],{

/***/ "./public/app/features/sandbox/TestStuffPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestStuffPage: () => (/* binding */ TestStuffPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/pluginExtensions/usePluginLinks.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/copy/appNotification.ts");






const TestStuffPage = () => {
  const node = {
    id: "test-page",
    text: "Test page",
    icon: "dashboard",
    subTitle: "FOR TESTING!",
    url: "sandbox/test"
  };
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_6__.useAppNotification)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__.Page, { navModel: { node, main: node }, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LinkToBasicApp, { extensionPointId: "grafana/sandbox/testing" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { variant: "h5", children: "Application notifications (toasts) testing" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { onClick: () => notifyApp.success("Success toast", "some more text goes here"), variant: "primary", children: "Success" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button,
        {
          onClick: () => notifyApp.warning("Warning toast", "some more text goes here", "bogus-trace-99999"),
          variant: "secondary",
          children: "Warning"
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button,
        {
          onClick: () => notifyApp.error("Error toast", "some more text goes here", "bogus-trace-fdsfdfsfds"),
          variant: "destructive",
          children: "Error"
        }
      )
    ] })
  ] });
};
function LinkToBasicApp({ extensionPointId }) {
  const { links } = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.usePluginLinks)({ extensionPointId });
  if (links.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: links.map((link, i) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, { href: link.path, title: link.description, children: link.title }, link.id);
  }) });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestStuffPage);


/***/ })

}]);
//# sourceMappingURL=TestStuffPage.a64706359f37b68982e2.js.map