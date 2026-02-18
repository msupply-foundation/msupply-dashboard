"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SnapshotListPage"],{

/***/ "./public/app/features/manage-dashboards/SnapshotListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnapshotListPage: () => (/* binding */ SnapshotListPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _components_SnapshotListTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/manage-dashboards/components/SnapshotListTable.tsx");




const SnapshotListPage = ({}) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__.Page, { navId: "dashboards/snapshots", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__.Page.Contents, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SnapshotListTable__WEBPACK_IMPORTED_MODULE_2__.SnapshotListTable, {}) }) });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SnapshotListPage);


/***/ }),

/***/ "./public/app/features/manage-dashboards/components/SnapshotListTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnapshotListTable: () => (/* binding */ SnapshotListTable),
/* harmony export */   getSnapshots: () => (/* binding */ getSnapshots)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/lib/useAsync.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/ScrollContainer/ScrollContainer.tsx");
/* harmony import */ var app_features_dashboard_services_SnapshotSrv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/services/SnapshotSrv.ts");
/* harmony import */ var _SnapshotListTableRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/manage-dashboards/components/SnapshotListTableRow.tsx");









async function getSnapshots() {
  return (0,app_features_dashboard_services_SnapshotSrv__WEBPACK_IMPORTED_MODULE_9__.getDashboardSnapshotSrv)().getSnapshots().then((result) => {
    return result.map((snapshot) => ({
      ...snapshot,
      url: `${_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.appUrl}dashboard/snapshot/${snapshot.key}`
    }));
  });
}
const SnapshotListTable = () => {
  const [snapshots, setSnapshots] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [isFetching, setIsFetching] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [removeSnapshot, setRemoveSnapshot] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  (0,react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_2__["default"])(async () => {
    setIsFetching(true);
    const response = await getSnapshots();
    setIsFetching(false);
    setSnapshots(response);
  }, [setSnapshots]);
  const doRemoveSnapshot = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    async (snapshot) => {
      const filteredSnapshots = snapshots.filter((ss) => ss.key !== snapshot.key);
      setSnapshots(filteredSnapshots);
      await (0,app_features_dashboard_services_SnapshotSrv__WEBPACK_IMPORTED_MODULE_9__.getDashboardSnapshotSrv)().deleteSnapshot(snapshot.key).catch(() => {
        setSnapshots(snapshots);
      });
    },
    [snapshots]
  );
  if (!isFetching && snapshots.length === 0) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.EmptyState,
      {
        variant: "call-to-action",
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("snapshot.empty-state.message", "You haven't created any snapshots yet"),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "snapshot.empty-state.more-info", children: [
          "You can create a snapshot of any dashboard through the ",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { children: "Share" }),
          " modal.",
          " ",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.TextLink,
            {
              external: true,
              href: "https://grafana.com/docs/grafana/latest/dashboards/share-dashboards-panels/#share-a-snapshot",
              children: "Learn more"
            }
          )
        ] })
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.ScrollContainer, { overflowY: "visible", overflowX: "auto", width: "100%", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: "filter-table", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "snapshot.name-column-header", children: "Name" }) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "snapshot.url-column-header", children: "Snapshot url" }) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { width: "70px" } }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { width: "30px" } }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { width: "25px" } })
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: isFetching ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SnapshotListTableRow__WEBPACK_IMPORTED_MODULE_10__.SnapshotListTableRow.Skeleton, {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SnapshotListTableRow__WEBPACK_IMPORTED_MODULE_10__.SnapshotListTableRow.Skeleton, {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SnapshotListTableRow__WEBPACK_IMPORTED_MODULE_10__.SnapshotListTableRow.Skeleton, {})
      ] }) : snapshots.map((snapshot) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _SnapshotListTableRow__WEBPACK_IMPORTED_MODULE_10__.SnapshotListTableRow,
        {
          snapshot,
          onRemove: () => setRemoveSnapshot(snapshot)
        },
        snapshot.key
      )) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ConfirmModal,
      {
        isOpen: !!removeSnapshot,
        icon: "trash-alt",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("manage-dashboards.snapshot-list-table.title-delete", "Delete"),
        body: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "manage-dashboards.snapshot-list-table.body-delete",
          "Are you sure you want to delete '{{snapshotToRemove}}'?",
          { snapshotToRemove: removeSnapshot?.name }
        ),
        confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("manage-dashboards.snapshot-list-table.confirmText-delete", "Delete"),
        onDismiss: () => setRemoveSnapshot(void 0),
        onConfirm: () => {
          doRemoveSnapshot(removeSnapshot);
          setRemoveSnapshot(void 0);
        }
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/features/manage-dashboards/components/SnapshotListTableRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnapshotListTableRow: () => (/* binding */ SnapshotListTableRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-loading-skeleton/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_unstable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/utils/skeleton.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/types/accessControl.ts");









const SnapshotListTableRowComponent = ({ snapshot, onRemove }) => {
  const url = snapshot.externalUrl || snapshot.url;
  const hasDeletePermission = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_8__.AccessControlAction.SnapshotsDelete);
  const deleteTooltip = hasDeletePermission ? "" : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("snapshot.share.delete-permission-tooltip", "You don't have permission to delete snapshots");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: url, children: snapshot.name }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: url, children: url }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: snapshot.external && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "query-keyword", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "snapshot.external-badge", children: "External" }) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: "text-center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, { href: url, variant: "secondary", size: "sm", icon: "eye", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "snapshot.view-button", children: "View" }) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: "text-right", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button,
      {
        variant: "destructive",
        size: "sm",
        icon: "times",
        onClick: onRemove,
        disabled: !hasDeletePermission,
        tooltip: deleteTooltip
      }
    ) })
  ] });
};
const SnapshotListTableRowSkeleton = ({ rootProps }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getSkeletonStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { ...rootProps, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], { width: 80 }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], { width: 240 }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], { width: 63, height: 24, containerClassName: styles.blockSkeleton }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], { width: 22, height: 24, containerClassName: styles.blockSkeleton }) })
  ] });
};
const SnapshotListTableRow = (0,_grafana_ui_unstable__WEBPACK_IMPORTED_MODULE_6__.attachSkeleton)(SnapshotListTableRowComponent, SnapshotListTableRowSkeleton);
const getSkeletonStyles = () => ({
  blockSkeleton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    // needed to align correctly in the table
    display: "block",
    lineHeight: 1
  })
});


/***/ })

}]);
//# sourceMappingURL=SnapshotListPage.a8d2686e8c3e371cdb5c.js.map