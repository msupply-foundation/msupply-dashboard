"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["FileStatusPage"],{

/***/ "./public/app/features/provisioning/File/FileStatusPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FileStatusPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/utils/url.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmButton/DeleteButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabsBar.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/Tab.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabContent.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/provisioning/constants.ts");
/* harmony import */ var _hooks_useGetResourceRepositoryView__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/provisioning/hooks/useGetResourceRepositoryView.ts");
/* harmony import */ var _hooks_usePRBranch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/provisioning/hooks/usePRBranch.ts");
















var TabSelection = /* @__PURE__ */ ((TabSelection2) => {
  TabSelection2["File"] = "file";
  TabSelection2["Existing"] = "existing";
  TabSelection2["DryRun"] = "dryRun";
  return TabSelection2;
})(TabSelection || {});
function isTabSelection(value) {
  return value === "file" /* File */ || value === "existing" /* Existing */ || value === "dryRun" /* DryRun */;
}
function FileStatusPage() {
  const params = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__.useParams)();
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_18__.useQueryParams)();
  const ref = (0,_hooks_usePRBranch__WEBPACK_IMPORTED_MODULE_21__.usePRBranch)();
  const tabParam = queryParams["tab"];
  const tab = isTabSelection(tabParam) ? tabParam : "file" /* File */;
  const name = params["name"] ?? "";
  const path = params["*"] ?? "";
  const file = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_16__.useGetRepositoryFilesWithPathQuery)({ name, path, ref });
  const { isReadOnlyRepo } = (0,_hooks_useGetResourceRepositoryView__WEBPACK_IMPORTED_MODULE_20__.useGetResourceRepositoryView)({ name });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_17__.Page,
    {
      navId: "provisioning",
      pageNav: {
        text: `File: ${path} ${ref ? `(@${ref})` : ""}`
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_17__.Page.Contents, { isLoading: file.isLoading, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.isFetchError)(file.error) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Alert, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.file-status-page.title-error-loading-file", "Error loading file"), children: file.error.message }),
        file.isSuccess && file.data && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ResourceView, { wrap: file.data, repo: name, repoRef: ref, tab, isReadOnlyRepo })
      ] }) })
    }
  );
}
function ResourceView({ wrap, repo, repoRef, tab, isReadOnlyRepo }) {
  const isDashboard = wrap.resource?.type?.kind === "Dashboard";
  const existingName = wrap.resource?.existing?.metadata?.name;
  const location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_18__.useQueryParams)();
  const [replaceFile, replaceFileStatus] = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_16__.useReplaceRepositoryFilesWithPathMutation)();
  const [deleteFile, deleteFileStatus] = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_16__.useDeleteRepositoryFilesWithPathMutation)();
  const [jsonView, setJsonView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    switch (tab) {
      case "existing" /* Existing */:
        setJsonView(JSON.stringify(wrap.resource.existing, null, 2));
        return;
      case "dryRun" /* DryRun */:
        setJsonView(JSON.stringify(wrap.resource.dryRun, null, 2));
        return;
      case "file" /* File */:
        setJsonView(JSON.stringify(wrap.resource.file, null, 2));
        return;
    }
  }, [wrap, tab, setJsonView]);
  const tabInfo = [
    {
      value: "file" /* File */,
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.resource-view.tab-info.label.file-from-repository", "File (from repository)")
    },
    {
      value: "existing" /* Existing */,
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.resource-view.tab-info.label.existing-from-grafana", "Existing (from Grafana)")
    },
    {
      value: "dryRun" /* DryRun */,
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.resource-view.tab-info.label.dry-run-result-after-apply", "Dry run (result after apply)")
    }
  ];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { children: [
      isDashboard && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.LinkButton, { target: "_blank", href: `${_constants__WEBPACK_IMPORTED_MODULE_19__.PROVISIONING_URL}/${repo}/dashboard/preview/${wrap.path}`, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "provisioning.resource-view.dashboard-preview", children: "Dashboard Preview" }) }),
      isDashboard && existingName && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.LinkButton, { target: "_blank", href: `d/${wrap.resource.existing?.metadata.name}`, variant: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "provisioning.resource-view.existing-dashboard", children: "Existing dashboard" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.LinkButton, { href: `${_constants__WEBPACK_IMPORTED_MODULE_19__.PROVISIONING_URL}/${repo}`, variant: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "provisioning.resource-view.repository", children: "Repository" }) }),
      repoRef && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.LinkButton, { href: `${_constants__WEBPACK_IMPORTED_MODULE_19__.PROVISIONING_URL}/${repo}/file/${wrap.path}`, variant: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "provisioning.resource-view.base", children: "Base" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.LinkButton, { href: `${_constants__WEBPACK_IMPORTED_MODULE_19__.PROVISIONING_URL}/${repo}/history/${wrap.path}`, variant: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "provisioning.resource-view.history", children: "History" }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.TabsBar, { children: tabInfo.map((t2) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Tab,
      {
        href: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.urlUtil.renderUrl(location.pathname, { ...queryParams, tab: t2.value }),
        label: t2.label,
        active: tab === t2.value
      },
      t2.value
    )) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.TabContent, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { height: 700, marginBottom: 10 }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__["default"], { disableWidth: true, children: ({ height }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.CodeEditor,
        {
          width: "100%",
          height,
          language: "json",
          showLineNumbers: true,
          showMiniMap: true,
          value: jsonView,
          onBlur: setJsonView,
          onSave: setJsonView
        }
      ) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { alignItems: "flex-end", justifyContent: "end", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Button,
          {
            tooltip: isReadOnlyRepo ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.resource-view.read-only-repo-tooltip", "This is a read-only repository") : "",
            variant: "primary",
            disabled: replaceFileStatus.isLoading || isReadOnlyRepo,
            onClick: () => {
              replaceFile({
                name: repo,
                path: wrap.path,
                body: JSON.parse(jsonView),
                message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
                  "provisioning.resource-view.message.updated-from-repo-test-ui",
                  "updated from repo test UI"
                )
              });
            },
            children: replaceFileStatus.isLoading ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.file-status-page.saving", "Saving") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.file-status-page.save", "Save")
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.DeleteButton,
          {
            size: "md",
            disabled: deleteFileStatus.isLoading || isReadOnlyRepo,
            onConfirm: () => {
              deleteFile({
                name: repo,
                path: wrap.path,
                message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
                  "provisioning.resource-view.message.removed-from-repo-test-ui",
                  "removed from repo test UI"
                )
              });
            }
          }
        )
      ] }),
      replaceFileStatus.isError && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Alert, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.resource-view.title-error-saving-file", "Error saving file"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: JSON.stringify(replaceFileStatus.error) }) })
    ] }) })
  ] });
}


/***/ })

}]);
//# sourceMappingURL=FileStatusPage.8130a1af183b3bb77475.js.map