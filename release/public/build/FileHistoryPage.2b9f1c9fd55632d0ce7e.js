"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["FileHistoryPage"],{

/***/ "./public/app/features/provisioning/File/FileHistoryPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FileHistoryPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/UsersIndicator/UserIcon.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_navigation_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/navigation/hooks.ts");
/* harmony import */ var app_features_alerting_unified_api_util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/api/util.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/provisioning/constants.ts");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/provisioning/utils/time.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/provisioning/File/utils.ts");













function FileHistoryPage() {
  const params = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_2__.useParams)();
  const name = params["name"] ?? "";
  const path = params["*"] ?? "";
  const [urlParams] = (0,app_core_navigation_hooks__WEBPACK_IMPORTED_MODULE_13__.useUrlParams)();
  const repoType = urlParams.get("repo_type");
  const historyNotSupported = !(0,_utils__WEBPACK_IMPORTED_MODULE_17__.isFileHistorySupported)(repoType);
  const query = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_11__.useGetRepositoryStatusQuery)({ name });
  const history = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_11__.useGetRepositoryHistoryWithPathQuery)(historyNotSupported ? _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__.skipToken : { name, path });
  const notFound = query.isError && (0,app_features_alerting_unified_api_util__WEBPACK_IMPORTED_MODULE_14__.isNotFoundError)(query.error) || historyNotSupported;
  const notFoundErrorMsg = historyNotSupported ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.file-history-page.history-not-supported", "File history is not supported for this repository") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.file-history-page.repository-not-found", "Repository not found");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__.Page,
    {
      navId: "provisioning",
      pageNav: {
        text: `History: ${path}`,
        subTitle: query.data?.spec?.title ?? "Repository"
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__.Page.Contents, { isLoading: false, children: notFound ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.EmptyState, { message: notFoundErrorMsg, variant: "not-found", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { element: "p", children: repoType !== "git" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.file-history-page.repository-config-exists-configuration", children: "Make sure the repository config exists in the configuration file." }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TextLink, { href: _constants__WEBPACK_IMPORTED_MODULE_15__.PROVISIONING_URL, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.file-history-page.back-to-repositories", children: "Back to repositories" }) })
      ] }) : (
        //@ts-expect-error TODO fix history response types
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: history.data ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HistoryView, { history: history.data, path, repo: name }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Spinner, {}) })
      ) })
    }
  );
}
function HistoryView({ history, path, repo }) {
  if (!history.items) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.history-view.not-found", children: "Not found" });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", children: history.items.map((item) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Card, { noMargin: true, href: `${_constants__WEBPACK_IMPORTED_MODULE_15__.PROVISIONING_URL}/${repo}/file/${path}?ref=${item.ref}`, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Card.Heading, { children: item.message }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Card.Meta, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: (0,_utils_time__WEBPACK_IMPORTED_MODULE_16__.formatTimestamp)(item.createdAt) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Card.Description, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { children: item.authors.map((a) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
      a.avatarURL && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.UserIcon,
        {
          userView: {
            user: { name: a.name, avatarUrl: a.avatarURL },
            lastActiveAt: (/* @__PURE__ */ new Date()).toISOString()
          },
          showTooltip: false
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: `https://github.com/${a.username}`, children: a.name })
    ] }, a.username)) }) })
  ] }, item.ref)) });
}


/***/ }),

/***/ "./public/app/features/provisioning/File/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFileHistorySupported: () => (/* binding */ isFileHistorySupported)
/* harmony export */ });

function isFileHistorySupported(repoType) {
  const supportedRepoTypes = /* @__PURE__ */ new Set(["github", "gitlab", "bitbucket"]);
  return !!repoType && supportedRepoTypes.has(repoType);
}


/***/ }),

/***/ "./public/app/features/provisioning/utils/time.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatTimestamp: () => (/* binding */ formatTimestamp)
/* harmony export */ });

function formatTimestamp(timestamp) {
  if (!timestamp) {
    return "N/A";
  }
  return new Date(timestamp).toLocaleString();
}


/***/ })

}]);
//# sourceMappingURL=FileHistoryPage.2b9f1c9fd55632d0ce7e.js.map