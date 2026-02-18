"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["BookmarksPage"],{

/***/ "./public/app/features/bookmarks/BookmarksPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookmarksPage: () => (/* binding */ BookmarksPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_AppChrome_MegaMenu_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/AppChrome/MegaMenu/hooks.ts");
/* harmony import */ var app_core_components_AppChrome_MegaMenu_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/AppChrome/MegaMenu/utils.ts");
/* harmony import */ var app_core_components_NavLandingPage_NavLandingPageCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/NavLandingPage/NavLandingPageCard.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/types/store.ts");










function BookmarksPage() {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const pinnedItems = (0,app_core_components_AppChrome_MegaMenu_hooks__WEBPACK_IMPORTED_MODULE_5__.usePinnedItems)();
  const navTree = (0,app_types_store__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state) => state.navBarTree);
  const validItems = pinnedItems.reduce((acc, url) => {
    const item = (0,app_core_components_AppChrome_MegaMenu_utils__WEBPACK_IMPORTED_MODULE_6__.findByUrl)(navTree, url);
    if (item) {
      acc.push(item);
    }
    return acc;
  }, []);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_8__.Page, { navId: "bookmarks", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_8__.Page.Contents, { children: validItems.length === 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.EmptyState,
    {
      variant: "call-to-action",
      message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bookmarks-page.empty.message", "It looks like you haven\u2019t created any bookmarks yet"),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "bookmarks-page.empty.tip", children: "Hover over any item in the nav menu and click on the bookmark icon to add it here." })
    }
  ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", { className: styles.grid, children: validItems.map((item) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      app_core_components_NavLandingPage_NavLandingPageCard__WEBPACK_IMPORTED_MODULE_7__.NavLandingPageCard,
      {
        description: item.subTitle,
        text: item.text,
        url: item.url ?? ""
      },
      item.id || item.url
    );
  }) }) }) });
}
const getStyles = (theme) => ({
  grid: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "grid",
    gap: theme.spacing(3),
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gridAutoRows: "138px",
    padding: theme.spacing(2, 0)
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookmarksPage);


/***/ })

}]);
//# sourceMappingURL=BookmarksPage.07d88d852bf80ec5b67f.js.map