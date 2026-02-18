"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AdminListOrgsPage"],{

/***/ "./public/app/features/admin/AdminListOrgsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdminListOrgsPages)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use_lib_useAsyncFn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/lib/useAsyncFn.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _AdminOrgsTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/admin/AdminOrgsTable.tsx");











const deleteOrg = async (orgId) => {
  return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getBackendSrv)().delete("/api/orgs/" + orgId);
};
const getOrgs = async () => {
  return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getBackendSrv)().get("/api/orgs");
};
const getErrorMessage = (error) => {
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.isFetchError)(error) ? error?.data?.message : "An unexpected error happened.";
};
function AdminListOrgsPages() {
  const [state, fetchOrgs] = (0,react_use_lib_useAsyncFn__WEBPACK_IMPORTED_MODULE_2__["default"])(async () => await getOrgs(), []);
  const canCreateOrg = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_8__.AccessControlAction.OrgsCreate);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchOrgs();
  }, [fetchOrgs]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__.Page,
    {
      navId: "global-orgs",
      actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, { icon: "plus", href: "org/new", disabled: !canCreateOrg, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.orgs.new-org-button", children: "New org" }) }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__.Page.Contents, { children: [
        state.error && getErrorMessage(state.error),
        state.loading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AdminOrgsTable__WEBPACK_IMPORTED_MODULE_9__.AdminOrgsTable.Skeleton, {}),
        state.value && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _AdminOrgsTable__WEBPACK_IMPORTED_MODULE_9__.AdminOrgsTable,
          {
            orgs: state.value,
            onDelete: (orgId) => {
              deleteOrg(orgId).then(() => fetchOrgs());
            }
          }
        )
      ] })
    }
  );
}


/***/ }),

/***/ "./public/app/features/admin/AdminOrgsTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminOrgsTable: () => (/* binding */ AdminOrgsTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-loading-skeleton/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_unstable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/utils/skeleton.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/accessControl.ts");










const getTableHeader = () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "admin.orgs.id-header", children: "ID" }) }),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "admin.orgs.name-header", children: "Name" }) }),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { width: "1%" } })
] }) });
function AdminOrgsTableComponent({ orgs, onDelete }) {
  const canDeleteOrgs = app_core_core__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.OrgsDelete);
  const [deleteOrg, setDeleteOrg] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const deleteOrgName = deleteOrg?.name;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: "filter-table form-inline filter-table--hover", children: [
    getTableHeader(),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: orgs.map((org) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: "link-td", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: `admin/orgs/edit/${org.id}`, children: org.id }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: "link-td", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: `admin/orgs/edit/${org.id}`, children: org.name }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: "text-right", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
        {
          variant: "destructive",
          size: "sm",
          icon: "times",
          onClick: () => setDeleteOrg(org),
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("admin.admin-orgs-table.aria-label-delete-org", "Delete org"),
          disabled: !canDeleteOrgs
        }
      ) })
    ] }, `${org.id}-${org.name}`)) }),
    deleteOrg && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ConfirmModal,
      {
        isOpen: true,
        icon: "trash-alt",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("admin.admin-orgs-table.title-delete", "Delete"),
        body: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "admin.orgs.delete-body", children: [
          "Are you sure you want to delete '",
          { deleteOrgName },
          "'?",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
          " ",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small", { children: "All dashboards for this organization will be removed!" })
        ] }) }),
        confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("admin.admin-orgs-table.confirmText-delete", "Delete"),
        onDismiss: () => setDeleteOrg(void 0),
        onConfirm: () => {
          onDelete(deleteOrg.id);
          setDeleteOrg(void 0);
        }
      }
    )
  ] });
}
const AdminOrgsTableSkeleton = ({ rootProps }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getSkeletonStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: "filter-table", ...rootProps, children: [
    getTableHeader(),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: new Array(3).fill(null).map((_, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], { width: 16 }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], { width: 240 }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], { containerClassName: styles.deleteButton, width: 22, height: 24 }) })
    ] }, index)) })
  ] });
};
const AdminOrgsTable = (0,_grafana_ui_unstable__WEBPACK_IMPORTED_MODULE_8__.attachSkeleton)(AdminOrgsTableComponent, AdminOrgsTableSkeleton);
const getSkeletonStyles = (theme) => ({
  deleteButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    alignItems: "center",
    display: "flex",
    height: 30,
    lineHeight: 1
  })
});


/***/ })

}]);
//# sourceMappingURL=AdminListOrgsPage.3196b4dc893954c35b6d.js.map