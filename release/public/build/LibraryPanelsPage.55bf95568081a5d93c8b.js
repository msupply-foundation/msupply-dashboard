"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["LibraryPanelsPage"],{

/***/ "./public/app/features/library-panels/LibraryPanelsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LibraryPanelsPage: () => (/* binding */ LibraryPanelsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _components_LibraryPanelsSearch_LibraryPanelsSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx");
/* harmony import */ var _components_OpenLibraryPanelModal_OpenLibraryPanelModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/library-panels/components/OpenLibraryPanelModal/OpenLibraryPanelModal.tsx");






const LibraryPanelsPage = () => {
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(void 0);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__.Page, { navId: "dashboards/library-panels", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__.Page.Contents, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_LibraryPanelsSearch_LibraryPanelsSearch__WEBPACK_IMPORTED_MODULE_3__.LibraryPanelsSearch, { onClick: setSelected, showSecondaryActions: true, showSort: true, showPanelFilter: true, showFolderFilter: true }),
    selected ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_OpenLibraryPanelModal_OpenLibraryPanelModal__WEBPACK_IMPORTED_MODULE_4__.OpenLibraryPanelModal, { onDismiss: () => setSelected(void 0), libraryPanel: selected }) : null
  ] }) });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LibraryPanelsPage);


/***/ }),

/***/ "./public/app/features/library-panels/components/OpenLibraryPanelModal/OpenLibraryPanelModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpenLibraryPanelModal: () => (/* binding */ OpenLibraryPanelModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/debounce-promise/dist/index.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/utils/url.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _state_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/library-panels/state/api.ts");









function OpenLibraryPanelModal({ libraryPanel, onDismiss }) {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [connected, setConnected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const [option, setOption] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(void 0);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const getConnected = async () => {
      const connectedDashboards = await (0,_state_api__WEBPACK_IMPORTED_MODULE_9__.getLibraryPanelConnectedDashboards)(libraryPanel.uid);
      setConnected(connectedDashboards.length);
    };
    getConnected();
  }, [libraryPanel.uid]);
  const loadOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (searchString) => loadOptionsAsync(libraryPanel.uid, searchString, setLoading),
    [libraryPanel.uid]
  );
  const debouncedLoadOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => debounce_promise__WEBPACK_IMPORTED_MODULE_1___default()(loadOptions, 300, { leading: true }), [loadOptions]);
  const onViewPanel = (e) => {
    e.preventDefault();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.locationService.push(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.urlUtil.renderUrl(`/d/${option?.value?.uid}`, {}));
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Modal,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("library-panels.modal.title", "View panel in dashboard"),
      onDismiss,
      onClickBackdrop: onDismiss,
      isOpen: true,
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
          connected === 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "library-panels.modal.panel-not-linked", children: "Panel is not linked to a dashboard. Add the panel to a dashboard and retry." }) }) : null,
          connected > 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "library-panels.modal.body", count: connected, children: [
              "This panel is being used in ",
              { count: connected },
              " dashboard. Please choose which dashboard to view the panel in:"
            ] }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.AsyncSelect,
              {
                isClearable: true,
                isLoading: loading,
                defaultOptions: true,
                loadOptions: debouncedLoadOptions,
                onChange: setOption,
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("library-panels.modal.select-placeholder", "Start typing to search for dashboard"),
                noOptionsMessage: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("library-panels.modal.select-no-options-message", "No dashboards found")
              }
            )
          ] }) : null
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Modal.ButtonRow, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { variant: "secondary", onClick: onDismiss, fill: "outline", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "library-panels.modal.button-cancel", children: "Cancel" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { onClick: onViewPanel, disabled: !Boolean(option), children: option ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("library-panels.modal.button-view-panel1", "View panel in {{label}}...", { label: option?.label }) : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("library-panels.modal.button-view-panel2", "View panel in dashboard...") })
        ] })
      ]
    }
  );
}
async function loadOptionsAsync(uid, searchString, setLoading) {
  setLoading(true);
  const searchHits = await (0,_state_api__WEBPACK_IMPORTED_MODULE_9__.getConnectedDashboards)(uid);
  const options = searchHits?.filter((d) => d.name.toLowerCase().includes(searchString.toLowerCase())).map((d) => ({ label: d.name, value: d }));
  setLoading(false);
  return options || [];
}


/***/ })

}]);
//# sourceMappingURL=LibraryPanelsPage.55bf95568081a5d93c8b.js.map