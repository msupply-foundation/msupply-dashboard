"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_admin_UpgradePage_tsx"],{

/***/ "./public/app/features/admin/LicenseChrome.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Circle: () => (/* binding */ Circle),
/* harmony export */   LicenseChrome: () => (/* binding */ LicenseChrome)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var img_grafana_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/img/grafana_icon.svg");
/* harmony import */ var img_licensing_header_dark_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/img/licensing/header_dark.svg");
/* harmony import */ var img_licensing_header_light_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/img/licensing/header_light.svg");







const title = { fontWeight: 500, fontSize: "26px", lineHeight: "123%" };
const getStyles = (theme) => {
  const backgroundUrl = theme.isDark ? img_licensing_header_dark_svg__WEBPACK_IMPORTED_MODULE_4__ : img_licensing_header_light_svg__WEBPACK_IMPORTED_MODULE_5__;
  const footerBg = theme.isDark ? theme.v1.palette.dark9 : theme.v1.palette.gray6;
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: theme.spacing(4),
      background: theme.components.panel.background
    }),
    footer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      textAlign: "center",
      padding: theme.spacing(2),
      background: footerBg,
      borderRadius: theme.shape.radius.lg
    }),
    header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "137px",
      padding: theme.spacing(4, 0, 0, 4),
      position: "relative",
      background: `url('${backgroundUrl}') right`,
      borderRadius: theme.shape.radius.lg
    })
  };
};
function LicenseChrome({ header, editionNotice, subheader, children }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.header, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { style: title, children: header }),
      subheader && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: subheader }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        Circle,
        {
          size: "128px",
          style: {
            boxShadow: "0px 0px 24px rgba(24, 58, 110, 0.45)",
            background: "#0A1C36",
            position: "absolute",
            top: "19px",
            right: "5%"
          },
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "img",
            {
              src: img_grafana_icon_svg__WEBPACK_IMPORTED_MODULE_3__,
              alt: "Grafana",
              width: "80px",
              style: { position: "absolute", left: "23px", top: "20px" }
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.container, children }),
    editionNotice && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.footer, children: editionNotice })
  ] });
}
const Circle = ({ size, style, children }) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "div",
    {
      style: {
        width: size,
        height: size,
        position: "absolute",
        bottom: 0,
        right: 0,
        borderRadius: theme.shape.radius.circle,
        ...style
      },
      children
    }
  );
};


/***/ }),

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

/***/ "./public/app/features/admin/UpgradePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpgradeInfo: () => (/* binding */ UpgradeInfo),
/* harmony export */   UpgradePage: () => (/* binding */ UpgradePage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var img_licensing_checkmark_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/img/licensing/checkmark.svg");
/* harmony import */ var img_licensing_customer_support_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/img/licensing/customer_support.svg");
/* harmony import */ var img_licensing_handinhand_support_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/img/licensing/handinhand_support.svg");
/* harmony import */ var img_licensing_plugin_enterprise_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/img/licensing/plugin_enterprise.svg");
/* harmony import */ var img_licensing_sla_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/img/licensing/sla.svg");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _LicenseChrome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/admin/LicenseChrome.tsx");
/* harmony import */ var _ServerStats__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/admin/ServerStats.tsx");















function UpgradePage({ navModel }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__.Page, { navModel, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__.Page.Contents, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ServerStats__WEBPACK_IMPORTED_MODULE_14__.ServerStats, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      UpgradeInfo,
      {
        editionNotice: "You are running the open-source version of Grafana.\n        You have to install the Enterprise edition in order enable Enterprise features."
      }
    )
  ] }) });
}
const titleStyles = { fontWeight: 500, fontSize: "26px", lineHeight: "123%" };
const UpgradeInfo = ({ editionNotice }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { className: styles.title, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.upgrade-info.title", children: "Enterprise license" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LicenseChrome__WEBPACK_IMPORTED_MODULE_13__.LicenseChrome, { header: "Grafana Enterprise", subheader: "Get your free trial", editionNotice, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.column, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FeatureInfo, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ServiceInfo, {})
    ] }) })
  ] });
};
const getStyles = (theme) => {
  return {
    column: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "grid",
      gridTemplateColumns: "100%",
      columnGap: "20px",
      rowGap: "40px",
      "@media (min-width: 1050px)": {
        gridTemplateColumns: "50% 50%"
      }
    }),
    title: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      margin: theme.spacing(4, 0)
    })
  };
};
const GetEnterprise = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginTop: "40px", marginBottom: "30px" }, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { style: titleStyles, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.get-enterprise.title", children: "Get Grafana Enterprise" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CallToAction, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { style: { paddingTop: "12px" }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.get-enterprise.description", children: "You can use the trial version for free for 30 days. We will remind you about it five days before the trial period ends." }) })
  ] });
};
const CallToAction = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton,
    {
      variant: "primary",
      size: "lg",
      href: "https://grafana.com/contact?about=grafana-enterprise&utm_source=grafana-upgrade-page",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.get-enterprise.contact-us", children: "Contact us and get a free trial" })
    }
  );
};
const ServiceInfo = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.get-enterprise.service-title", children: "At your service" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(List, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        Item,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.service-info.title-enterprise-plugins", "Enterprise Plugins"),
          image: img_licensing_plugin_enterprise_svg__WEBPACK_IMPORTED_MODULE_10__
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.service-info.title-critical-sla-hours", "Critical SLA: 2 hours"), image: img_licensing_sla_svg__WEBPACK_IMPORTED_MODULE_11__ }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        Item,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.service-info.title-unlimited-expert-support", "Unlimited Expert Support"),
          image: img_licensing_customer_support_svg__WEBPACK_IMPORTED_MODULE_8__,
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.service-info.year-round-support", children: "24 \xD7 7 \xD7 365 support via" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(List, { nested: true, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.service-info.title-email", "Email") }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.service-info.title-private-slack-channel", "Private Slack channel") }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.service-info.title-phone", "Phone") })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        Item,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
            "admin.service-info.title-handinhand-support-in-the-upgrade-process",
            "Hand-in-hand support in the upgrade process"
          ),
          image: img_licensing_handinhand_support_svg__WEBPACK_IMPORTED_MODULE_9__
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.get-enterprise.included-heading", children: "Also included:" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.get-enterprise.included-description", children: "Indemnification, working with Grafana Labs on future prioritization, and training from the core Grafana team." })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GetEnterprise, {})
  ] });
};
const FeatureInfo = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { paddingRight: "11px" }, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.get-enterprise.features-heading", children: "Enhanced functionality" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FeatureListing, {})
  ] });
};
const FeatureListing = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(List, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.feature-listing.title-data-source-permissions", "Data source permissions") }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.feature-listing.title-reporting", "Reporting") }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.feature-listing.title-saml-authentication", "SAML authentication") }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.feature-listing.title-enhanced-ldap-integration", "Enhanced LDAP integration") }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.feature-listing.title-team-sync", "Team Sync"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.get-enterprise.team-sync-details", children: "LDAP, GitHub OAuth, Auth Proxy, Okta" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.feature-listing.title-custom-branding", "Custom branding") }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.feature-listing.title-auditing", "Auditing") }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.feature-listing.title-settings-updates-at-runtime", "Settings updates at runtime") }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.feature-listing.title-grafana-usage-insights", "Grafana usage insights"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(List, { nested: true, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        Item,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
            "admin.feature-listing.title-sort-dashboards-by-popularity-in-search",
            "Sort dashboards by popularity in search"
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.feature-listing.title-find-unused-dashboards", "Find unused dashboards") }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.feature-listing.title-dashboard-usage-stats-drawer", "Dashboard usage stats drawer") }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        Item,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.feature-listing.title-dashboard-presence-indicators", "Dashboard presence indicators")
        }
      )
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.feature-listing.title-enterprise-plugins", "Enterprise plugins"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(List, { nested: true, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: "Oracle" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: "Splunk" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: "Service Now" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: "Dynatrace" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: "New Relic" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: "DataDog" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: "AppDynamics" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: "SAP HANA\xAE" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: "Gitlab" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: "Honeycomb" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: "Jira" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: "MongoDB" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: "Salesforce" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: "Snowflake" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, { title: "Wavefront" })
    ] }) })
  ] });
};
const List = ({ children, nested }) => {
  const listStyle = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "column",
    paddingTop: "8px",
    "> div": {
      marginBottom: `${nested ? 0 : 8}px`
    }
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: listStyle, children });
};
const Item = ({ children, title, image }) => {
  const imageUrl = image ? image : img_licensing_checkmark_svg__WEBPACK_IMPORTED_MODULE_7__;
  const itemStyle = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    "> img": {
      display: "block",
      height: "22px",
      flexGrow: 0,
      paddingRight: "12px"
    }
  });
  const titleStyle = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontWeight: 500,
    lineHeight: 1.7
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: itemStyle, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: imageUrl, alt: "" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: titleStyle, children: title }),
      children
    ] })
  ] });
};
const mapStateToProps = (state) => ({
  navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_12__.getNavModel)(state.navIndex, "upgrading")
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(UpgradePage));


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


/***/ }),

/***/ "./public/img/licensing/checkmark.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/checkmark.11cfbd26.svg";

/***/ }),

/***/ "./public/img/licensing/customer_support.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/customer_support.b2555cc6.svg";

/***/ }),

/***/ "./public/img/licensing/handinhand_support.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/handinhand_support.98337dc4.svg";

/***/ }),

/***/ "./public/img/licensing/header_dark.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/header_dark.d16bbe6b.svg";

/***/ }),

/***/ "./public/img/licensing/header_light.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/header_light.3642d03b.svg";

/***/ }),

/***/ "./public/img/licensing/plugin_enterprise.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/plugin_enterprise.0f5e92ef.svg";

/***/ }),

/***/ "./public/img/licensing/sla.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/sla.6f96d275.svg";

/***/ })

}]);
//# sourceMappingURL=public_app_features_admin_UpgradePage_tsx.d6bfba7dc024a6efefd1.js.map