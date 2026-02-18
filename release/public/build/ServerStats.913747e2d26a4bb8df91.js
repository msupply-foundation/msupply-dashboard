"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["ServerStats"],{

/***/ "./public/app/features/admin/ServerStats.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerStats: () => (/* binding */ ServerStats)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _ServerStatsCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/admin/ServerStatsCard.tsx");
/* harmony import */ var _state_apis__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/admin/state/apis.tsx");











const ServerStats = () => {
  const [stats, setStats] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const hasAccessToDataSources = _core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_8__.AccessControlAction.DataSourcesRead);
  const hasAccessToAdminUsers = _core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_8__.AccessControlAction.UsersRead);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_8__.AccessControlAction.ActionServerStatsRead)) {
      (0,_state_apis__WEBPACK_IMPORTED_MODULE_11__.getServerStats)().then((stats2) => {
        setStats(stats2);
        setIsLoading(false);
      });
    }
  }, []);
  if (!_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_8__.AccessControlAction.ActionServerStatsRead)) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { className: styles.title, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.server-settings.title", children: "Instance statistics" }) }),
    !isLoading && !stats ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: styles.notFound, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.server-settings.not-found", children: "No stats found." }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack,
      {
        gap: 2,
        direction: {
          xs: "column",
          md: "row"
        },
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _ServerStatsCard__WEBPACK_IMPORTED_MODULE_10__.ServerStatsCard,
            {
              isLoading,
              content: [
                { name: "Dashboards (starred)", value: `${stats?.dashboards} (${stats?.stars})` },
                { name: "Tags", value: stats?.tags },
                { name: "Playlists", value: stats?.playlists },
                { name: "Snapshots", value: stats?.snapshots }
              ],
              footer: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, { href: "/dashboards", variant: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.server-settings.dashboards-button", children: "Manage dashboards" }) })
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "column", gap: 2, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _ServerStatsCard__WEBPACK_IMPORTED_MODULE_10__.ServerStatsCard,
              {
                isLoading,
                content: [{ name: "Data sources", value: stats?.datasources }],
                footer: hasAccessToDataSources && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, { href: "/datasources", variant: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.server-settings.data-sources-button", children: "Manage data sources" }) })
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _ServerStatsCard__WEBPACK_IMPORTED_MODULE_10__.ServerStatsCard,
              {
                isLoading,
                content: [{ name: "Alerts", value: stats?.alerts }],
                footer: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, { href: "/alerting/list", variant: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.server-settings.alerts-button", children: "Manage alerts" }) })
              }
            )
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _ServerStatsCard__WEBPACK_IMPORTED_MODULE_10__.ServerStatsCard,
            {
              isLoading,
              content: [
                { name: "Organisations", value: stats?.orgs },
                { name: "Users total", value: stats?.users },
                { name: "Active sessions", value: stats?.activeSessions },
                { name: "Active users in last 30 days", value: stats?.activeUsers },
                ...getAnonymousStatsContent(stats, _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config)
              ],
              footer: hasAccessToAdminUsers && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, { href: "/admin/users", variant: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.server-settings.users-button", children: "Manage users" }) })
            }
          )
        ]
      }
    )
  ] });
};
const getAnonymousStatsContent = (stats, config2) => {
  if (!config2.anonymousEnabled || !stats?.activeDevices) {
    return [];
  }
  if (!config2.anonymousDeviceLimit) {
    return [
      {
        name: "Active anonymous devices",
        value: `${stats.activeDevices}`,
        tooltip: "Detected devices that are not logged in, in last 30 days."
      }
    ];
  } else {
    return [
      {
        name: "Active anonymous devices",
        value: `${stats.activeDevices} / ${config2.anonymousDeviceLimit}`,
        tooltip: "Detected devices that are not logged in, in last 30 days.",
        highlight: stats.activeDevices > config2.anonymousDeviceLimit
      }
    ];
  }
};
const getStyles = (theme) => {
  return {
    title: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginBottom: theme.spacing(4)
    }),
    notFound: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      fontSize: theme.typography.h6.fontSize,
      textAlign: "center",
      height: "290px"
    })
  };
};


/***/ }),

/***/ "./public/app/features/admin/ServerStatsCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerStatsCard: () => (/* binding */ ServerStatsCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-loading-skeleton/dist/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





const ServerStatsCard = ({ content, footer, isLoading }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card, { noMargin: true, className: styles.container, children: [
    content.map((item, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { justifyContent: "space-between", alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { alignItems: "center", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)({ [styles.indent]: !!item.indent }), children: item.name }),
        item.tooltip && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip, { content: String(item.tooltip), placement: "auto-start", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "info-circle", className: styles.tooltip }) })
      ] }),
      isLoading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], { width: 60 }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: item.highlight ? styles.highlight : "", children: item.value })
    ] }, index)),
    footer && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: footer })
  ] });
};
const getStyles = (theme) => {
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(2),
      padding: theme.spacing(2)
    }),
    indent: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginLeft: theme.spacing(2)
    }),
    tooltip: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.secondary.text
    }),
    highlight: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.warning.text,
      padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
      marginRight: `-${theme.spacing(1)}`
    })
  };
};


/***/ }),

/***/ "./public/app/features/admin/state/apis.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getServerStats: () => (/* binding */ getServerStats)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");


const getServerStats = async () => {
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get("api/admin/stats").catch((err) => {
    console.error(err);
    return null;
  });
};


/***/ })

}]);
//# sourceMappingURL=ServerStats.913747e2d26a4bb8df91.js.map