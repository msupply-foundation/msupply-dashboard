"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_explore_extensions_AddToDashboard_index_tsx"],{

/***/ "./public/app/features/explore/extensions/AddToDashboard/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddToDashboard: () => (/* binding */ AddToDashboard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/ToolbarButton/ToolbarButton.tsx");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/explore/state/selectors.ts");
/* harmony import */ var _ExploreToDashboardPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/explore/extensions/AddToDashboard/ExploreToDashboardPanel.tsx");
/* harmony import */ var _getAddToDashboardTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/explore/extensions/AddToDashboard/getAddToDashboardTitle.ts");









const AddToDashboard = ({ exploreId }) => {
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const selectExploreItem = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getExploreItemSelector)(exploreId);
  const explorePaneHasQueries = !!(0,app_types_store__WEBPACK_IMPORTED_MODULE_5__.useSelector)(selectExploreItem)?.queries?.length;
  const onClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => setIsOpen(false), []);
  const addToDashboardLabel = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("explore.add-to-dashboard", "Add to dashboard");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton,
      {
        icon: "apps",
        variant: "canvas",
        onClick: () => setIsOpen(true),
        "aria-label": addToDashboardLabel,
        disabled: !explorePaneHasQueries,
        children: addToDashboardLabel
      }
    ),
    isOpen && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal, { title: (0,_getAddToDashboardTitle__WEBPACK_IMPORTED_MODULE_8__.getAddToDashboardTitle)(), onDismiss: onClose, isOpen: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ExploreToDashboardPanel__WEBPACK_IMPORTED_MODULE_7__.ExploreToDashboardPanel, { onClose, exploreId }) })
  ] });
};


/***/ })

}]);
//# sourceMappingURL=public_app_features_explore_extensions_AddToDashboard_index_tsx.1576ab354a8e853c4c3a.js.map