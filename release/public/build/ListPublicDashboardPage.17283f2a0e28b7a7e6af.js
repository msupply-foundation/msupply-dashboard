"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["ListPublicDashboardPage"],{

/***/ "./public/app/features/manage-dashboards/PublicDashboardListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListPublicDashboardPage: () => (/* binding */ ListPublicDashboardPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _components_PublicDashboardListTable_PublicDashboardListTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/manage-dashboards/components/PublicDashboardListTable/PublicDashboardListTable.tsx");



const ListPublicDashboardPage = ({}) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PublicDashboardListTable_PublicDashboardListTable__WEBPACK_IMPORTED_MODULE_1__.PublicDashboardListTable, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListPublicDashboardPage);


/***/ }),

/***/ "./public/app/features/manage-dashboards/components/PublicDashboardListTable/DeletePublicDashboardButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeletePublicDashboardButton: () => (/* binding */ DeletePublicDashboardButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/ModalsContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var app_features_dashboard_api_publicDashboardApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/api/publicDashboardApi.ts");
/* harmony import */ var _DeletePublicDashboardModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/manage-dashboards/components/PublicDashboardListTable/DeletePublicDashboardModal.tsx");






const DeletePublicDashboardButton = ({
  dashboard,
  publicDashboard,
  loader,
  children,
  onDismiss,
  ...rest
}) => {
  const [deletePublicDashboard, { isLoading }] = (0,app_features_dashboard_api_publicDashboardApi__WEBPACK_IMPORTED_MODULE_4__.useDeletePublicDashboardMutation)();
  const onDeletePublicDashboardClick = (pd, onDelete) => {
    deletePublicDashboard({
      dashboard,
      uid: pd.uid,
      dashboardUid: pd.dashboardUid
    });
    onDelete();
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ModalsController, { children: ({ showModal, hideModal }) => {
    const translatedRevocationButtonText = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("shared-dashboard-list.button.revoke-button-text", "Revoke access");
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button,
      {
        "aria-label": translatedRevocationButtonText,
        title: translatedRevocationButtonText,
        onClick: () => showModal(_DeletePublicDashboardModal__WEBPACK_IMPORTED_MODULE_5__.DeletePublicDashboardModal, {
          onConfirm: () => onDeletePublicDashboardClick(publicDashboard, hideModal),
          onDismiss: () => {
            onDismiss ? onDismiss() : hideModal();
          }
        }),
        ...rest,
        children: isLoading && loader ? loader : children
      }
    );
  } });
};


/***/ }),

/***/ "./public/app/features/manage-dashboards/components/PublicDashboardListTable/PublicDashboardListTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublicDashboardListTable: () => (/* binding */ PublicDashboardListTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useMedia.js");
/* harmony import */ var _grafana_e2e_selectors_src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Pagination/Pagination.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_features_dashboard_api_publicDashboardApi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/dashboard/api/publicDashboardApi.ts");
/* harmony import */ var app_features_dashboard_components_ShareModal_SharePublicDashboard_SharePublicDashboardUtils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/dashboard/components/ShareModal/SharePublicDashboard/SharePublicDashboardUtils.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _DeletePublicDashboardButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/manage-dashboards/components/PublicDashboardListTable/DeletePublicDashboardButton.tsx");















const PublicDashboardCard = ({ pd }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.useStyles2)(getStyles);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.useTheme2)();
  const isMobile = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(`(max-width: ${theme.breakpoints.values.sm}px)`);
  const [update, { isLoading: isUpdateLoading }] = (0,app_features_dashboard_api_publicDashboardApi__WEBPACK_IMPORTED_MODULE_17__.useUpdatePublicDashboardMutation)();
  const selectors = _grafana_e2e_selectors_src__WEBPACK_IMPORTED_MODULE_4__.selectors.pages.PublicDashboards;
  const hasWritePermissions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_16__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_19__.AccessControlAction.DashboardsPublicWrite);
  const onTogglePause = (pd2, isPaused) => {
    const req = {
      dashboard: { uid: pd2.dashboardUid },
      payload: {
        uid: pd2.uid,
        isEnabled: !isPaused
      }
    };
    update(req);
  };
  const CardActions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => isMobile ? _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Card.Actions : _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Card.SecondaryActions, [isMobile]);
  const translatedPauseSharingText = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("shared-dashboard-list.toggle.pause-sharing-toggle-text", "Pause access");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Card, { noMargin: true, className: styles.card, href: `/d/${pd.dashboardUid}`, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Card.Heading, { className: styles.heading, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: pd.title }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CardActions, { className: styles.actions, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.pauseSwitch, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Switch,
          {
            value: !pd.isEnabled,
            label: translatedPauseSharingText,
            disabled: isUpdateLoading,
            onChange: (e) => {
              (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.reportInteraction)("grafana_dashboards_public_enable_clicked", {
                action: e.currentTarget.checked ? "disable" : "enable"
              });
              onTogglePause(pd, e.currentTarget.checked);
            },
            "data-testid": selectors.ListItem.pauseSwitch
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: translatedPauseSharingText })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.LinkButton,
        {
          fill: "text",
          icon: "external-link-alt",
          variant: "secondary",
          target: "_blank",
          color: theme.colors.warning.text,
          href: (0,app_features_dashboard_components_ShareModal_SharePublicDashboard_SharePublicDashboardUtils__WEBPACK_IMPORTED_MODULE_18__.generatePublicDashboardUrl)(pd.accessToken),
          tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("shared-dashboard-list.button.view-button-tooltip", "View shared dashboard"),
          "data-testid": selectors.ListItem.linkButton
        },
        "public-dashboard-url"
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.LinkButton,
        {
          fill: "text",
          icon: "cog",
          variant: "secondary",
          color: theme.colors.warning.text,
          href: (0,app_features_dashboard_components_ShareModal_SharePublicDashboard_SharePublicDashboardUtils__WEBPACK_IMPORTED_MODULE_18__.generatePublicDashboardConfigUrl)(pd.dashboardUid, pd.slug),
          tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("shared-dashboard-list.button.config-button-tooltip", "Configure shared dashboard"),
          "data-testid": selectors.ListItem.configButton
        },
        "public-dashboard-config-url"
      ),
      hasWritePermissions && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _DeletePublicDashboardButton__WEBPACK_IMPORTED_MODULE_20__.DeletePublicDashboardButton,
        {
          fill: "text",
          icon: "trash-alt",
          variant: "secondary",
          publicDashboard: pd,
          tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("shared-dashboard-list.button.revoke-button-tooltip", "Revoke access"),
          loader: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Spinner, {}),
          "data-testid": selectors.ListItem.trashcanButton
        }
      )
    ] })
  ] });
};
const PublicDashboardListTable = () => {
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.useStyles2)(getStyles);
  const { data: paginatedPublicDashboards, isLoading, isError } = (0,app_features_dashboard_api_publicDashboardApi__WEBPACK_IMPORTED_MODULE_17__.useListPublicDashboardsQuery)(page);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_15__.Page, { navId: "dashboards/public", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_15__.Page.Contents, { isLoading, children: !isLoading && !isError && !!paginatedPublicDashboards && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: paginatedPublicDashboards.publicDashboards.length === 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.EmptyState,
    {
      variant: "call-to-action",
      message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
        "shared-dashboard-list.empty-state.message",
        "You haven't created any shared dashboards yet"
      ),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "shared-dashboard-list.empty-state.more-info", children: [
        "Create a shared dashboard from any existing dashboard through the ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { children: "Share" }),
        " modal.",
        " ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.TextLink,
          {
            external: true,
            href: "https://grafana.com/docs/grafana/latest/dashboards/share-dashboards-panels/shared-dashboards",
            children: "Learn more"
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { className: styles.list, children: paginatedPublicDashboards.publicDashboards.map((pd) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PublicDashboardCard, { pd }) }, pd.uid)) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Pagination,
      {
        onNavigate: setPage,
        currentPage: paginatedPublicDashboards.page,
        numberOfPages: paginatedPublicDashboards.totalPages,
        hideWhenSinglePage: true
      }
    )
  ] }) }) }) });
};
const getStyles = (theme) => ({
  list: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    listStyleType: "none",
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1)
  }),
  card: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  }),
  heading: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    flex: 1
  }),
  orphanedTitle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1)
  }),
  actions: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    alignItems: "center",
    position: "relative",
    gap: theme.spacing(0.5),
    [theme.breakpoints.up("sm")]: {
      gap: theme.spacing(1)
    }
  }),
  pauseSwitch: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    gap: theme.spacing(1),
    alignItems: "center",
    fontSize: theme.typography.bodySmall.fontSize,
    marginBottom: 0,
    flex: 1,
    [theme.breakpoints.up("sm")]: {
      paddingRight: theme.spacing(2)
    }
  })
});


/***/ })

}]);
//# sourceMappingURL=ListPublicDashboardPage.17283f2a0e28b7a7e6af.js.map