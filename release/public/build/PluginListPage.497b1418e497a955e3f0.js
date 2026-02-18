"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PluginListPage"],{

/***/ "./public/app/features/connections/components/AdvisorRedirectNotice/AdvisorRedirectNotice.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvisorRedirectNotice: () => (/* binding */ AdvisorRedirectNotice)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/utils/userStorage.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/core.ts");









const getStyles = (theme) => ({
  alertContent: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    padding: 0,
    justifyContent: "space-between",
    alignItems: "center"
  }),
  alertParagraph: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    margin: theme.spacing(0, 1, 0, 0),
    lineHeight: theme.spacing(theme.components.height.sm)
  })
});
const userStorage = new _grafana_runtime_internal__WEBPACK_IMPORTED_MODULE_5__.UserStorage("advisor-redirect-notice");
function AdvisorRedirectNotice() {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const hasAdminRights = app_core_core__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasRole("Admin") || app_core_core__WEBPACK_IMPORTED_MODULE_9__.contextSrv.isGrafanaAdmin;
  const [showNotice, setShowNotice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const canUseAdvisor = hasAdminRights && _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.featureToggles.grafanaAdvisor && !!_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.apps["grafana-advisor-app"];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (canUseAdvisor) {
      userStorage.getItem("showNotice").then((showNotice2) => {
        if (showNotice2 !== "false") {
          setShowNotice(true);
        }
      });
    }
  }, [canUseAdvisor]);
  return showNotice ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert,
    {
      severity: "info",
      title: "",
      onRemove: () => {
        userStorage.setItem("showNotice", "false");
        setShowNotice(false);
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.alertContent, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: styles.alertParagraph, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "connections.advisor-redirect-notice.body", children: "Try the new Advisor to uncover potential issues with your data sources and plugins." }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.LinkButton,
          {
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("connections.advisor-redirect-notice.aria-label-link-to-advisor", "Link to Advisor"),
            icon: "arrow-right",
            href: "/a/grafana-advisor-app",
            fill: "text",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "connections.advisor-redirect-notice.go-to-advisor", children: "Go to Advisor" })
          }
        )
      ] })
    }
  ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
}


/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginDeprecatedBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PluginDeprecatedBadge: () => (/* binding */ PluginDeprecatedBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");




function PluginDeprecatedBadge() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Badge,
    {
      icon: "exclamation-triangle",
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("plugins.plugin-deprecated-badge.text-deprecated", "Deprecated"),
      color: "orange",
      tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "plugins.plugin-deprecated-badge.tooltip-plugin-deprecated-longer-receives-updates",
        "This plugin is deprecated and no longer receives updates."
      )
    }
  );
}


/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginDisabledBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PluginDisabledBadge: () => (/* binding */ PluginDisabledBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/plugin.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");





function PluginDisabledBadge({ error }) {
  const tooltip = errorCodeToTooltip(error);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Badge,
    {
      icon: "exclamation-triangle",
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("plugins.plugin-disabled-badge.text-disabled", "Disabled"),
      color: "red",
      tooltip
    }
  );
}
function errorCodeToTooltip(error) {
  switch (error) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.modifiedSignature:
      return "Plugin disabled due to modified content";
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.invalidSignature:
      return "Plugin disabled due to invalid plugin signature";
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.missingSignature:
      return "Plugin disabled due to missing plugin signature";
    case null:
    case void 0:
      return "Plugin disabled";
    default:
      return `Plugin disabled due to unknown error${error ? `: ${error}` : ""}`;
  }
}


/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginEnterpriseBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PluginEnterpriseBadge: () => (/* binding */ PluginEnterpriseBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/utils/licensing.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/PluginSignatureBadge/PluginSignatureBadge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/sharedStyles.ts");






function PluginEnterpriseBadge({ plugin }) {
  const customBadgeStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(_sharedStyles__WEBPACK_IMPORTED_MODULE_7__.getBadgeColor);
  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.featureEnabled)("enterprise.plugins")) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Badge, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("plugins.plugin-enterprise-badge.text-enterprise", "Enterprise"), color: "blue" });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { wrap: "wrap", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.PluginSignatureBadge, { status: plugin.signature }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Badge,
      {
        icon: "lock",
        role: "img",
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("plugins.plugin-enterprise-badge.aria-label-enterprise", "Enterprise"),
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("plugins.plugin-enterprise-badge.text-enterprise", "Enterprise"),
        color: "blue",
        className: customBadgeStyles,
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
          "plugins.plugin-enterprise-badge.title-requires-a-grafana-enterprise-license",
          "Requires a Grafana Enterprise license"
        )
      }
    )
  ] });
}


/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginInstallBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PluginInstalledBadge: () => (/* binding */ PluginInstalledBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/sharedStyles.ts");





function PluginInstalledBadge() {
  const customBadgeStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(_sharedStyles__WEBPACK_IMPORTED_MODULE_4__.getBadgeColor);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Badge,
    {
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("plugins.plugin-installed-badge.text-installed", "Installed"),
      color: "orange",
      className: customBadgeStyles
    }
  );
}


/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginUpdateAvailableBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PluginUpdateAvailableBadge: () => (/* binding */ PluginUpdateAvailableBadge),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





function PluginUpdateAvailableBadge({ plugin }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: styles.hasUpdate, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "plugins.plugin-update-available-badge.update-available", children: "Update available!" }) });
}
const getStyles = (theme) => {
  return {
    hasUpdate: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.text.secondary,
      fontSize: theme.typography.bodySmall.fontSize,
      marginBottom: 0
    })
  };
};


/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/sharedStyles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBadgeColor: () => (/* binding */ getBadgeColor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");


const getBadgeColor = (theme) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  background: theme.colors.background.primary,
  borderColor: theme.colors.border.strong,
  color: theme.colors.text.secondary
});


/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PluginList: () => (/* binding */ PluginList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Grid/Grid.tsx");
/* harmony import */ var _PluginListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginListItem.tsx");







const PluginList = ({ plugins, isLoading }) => {
  const { pathname } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  const [searchParams] = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();
  const pathName = _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.appSubUrl + (pathname.endsWith("/") ? pathname.slice(0, -1) : pathname);
  if (searchParams.get("filterBy") === "has-update" && !isLoading && plugins.length === 0) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.EmptyState,
      {
        variant: "not-found",
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("plugins.no-updates-available.message", "All plugins are up to date")
      }
    );
  }
  if (!isLoading && plugins.length === 0) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.EmptyState, { variant: "not-found", message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("plugins.empty-state.message", "No plugins found") });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Grid, { gap: 3, ...{ minColumnWidth: 34 }, "data-testid": "plugin-list", children: isLoading ? new Array(50).fill(null).map((_, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PluginListItem__WEBPACK_IMPORTED_MODULE_7__.PluginListItem.Skeleton, {}, index)) : plugins.map((plugin) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PluginListItem__WEBPACK_IMPORTED_MODULE_7__.PluginListItem, { plugin, pathName }, plugin.id)) });
};


/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginListItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOGO_SIZE: () => (/* binding */ LOGO_SIZE),
/* harmony export */   PluginListItem: () => (/* binding */ PluginListItem),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-loading-skeleton/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_unstable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/utils/skeleton.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var _PluginListItemBadges__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginListItemBadges.tsx");
/* harmony import */ var _PluginLogo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginLogo.tsx");











const LOGO_SIZE = "48px";
function PluginListItemComponent({ plugin, pathName }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  const reportUserClickInteraction = () => {
    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.locationService.getSearchObject()?.q) {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)("plugins_search_user_click", {
        plugin_id: plugin.id,
        creator_team: "grafana_plugins_catalog",
        schema_version: "1.0.0"
      });
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", { href: `${pathName}/${plugin.id}`, className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.container), onClick: reportUserClickInteraction, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PluginLogo__WEBPACK_IMPORTED_MODULE_13__.PluginLogo, { src: plugin.info.logos.small, className: styles.pluginLogo, height: LOGO_SIZE, alt: "" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.name, "plugin-name"), children: plugin.name }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.content, "plugin-content"), children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "plugins.plugin-list-item.label-author", values: { author: plugin.orgName }, children: [
        "By ",
        "{{author}}"
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PluginListItemBadges__WEBPACK_IMPORTED_MODULE_12__.PluginListItemBadges, { plugin })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.pluginType, children: plugin.type && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon,
      {
        name: _types__WEBPACK_IMPORTED_MODULE_11__.PluginIconName[plugin.type],
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("plugins.plugin-list-item.title-icon-plugin-type", "{{pluginType}} plugin", {
          pluginType: plugin.type
        })
      }
    ) })
  ] });
}
const PluginListItemSkeleton = ({ rootProps }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.container), ...rootProps, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"],
      {
        containerClassName: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(
          styles.pluginLogo,
          (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
            lineHeight: 1
          })
        ),
        width: LOGO_SIZE,
        height: LOGO_SIZE
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { className: styles.name, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], { width: 100 }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.content, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], { width: 120 }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "row", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Badge.Skeleton, {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Badge.Skeleton, {})
      ] })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.pluginType, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], { width: 16, height: 16 }) })
  ] });
};
const PluginListItem = (0,_grafana_ui_unstable__WEBPACK_IMPORTED_MODULE_10__.attachSkeleton)(PluginListItemComponent, PluginListItemSkeleton);
const getStyles = (theme) => {
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "grid",
      gridTemplateColumns: `${LOGO_SIZE} 1fr ${theme.spacing(3)}`,
      gridTemplateRows: "auto",
      gap: theme.spacing(2),
      gridAutoFlow: "row",
      background: theme.colors.background.secondary,
      borderRadius: theme.shape.radius.default,
      padding: theme.spacing(3),
      [theme.transitions.handleMotion("no-preference", "reduce")]: {
        transition: theme.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
          duration: theme.transitions.duration.short
        })
      },
      "&:hover": {
        background: theme.colors.emphasize(theme.colors.background.secondary, 0.03)
      }
    }),
    pluginType: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      gridArea: "1 / 3 / 2 / 4",
      color: theme.colors.text.secondary
    }),
    pluginLogo: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      gridArea: "1 / 1 / 3 / 2",
      maxWidth: "100%",
      alignSelf: "center",
      objectFit: "contain"
    }),
    content: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      gridArea: "3 / 1 / 4 / 3",
      color: theme.colors.text.secondary
    }),
    name: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      gridArea: "1 / 2 / 3 / 3",
      alignSelf: "center",
      fontSize: theme.typography.h4.fontSize,
      color: theme.colors.text.primary,
      margin: 0,
      wordBreak: "normal",
      overflowWrap: "anywhere"
    })
  };
};


/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginListItemBadges.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PluginListItemBadges: () => (/* binding */ PluginListItemBadges)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/PluginSignatureBadge/PluginSignatureBadge.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
/* harmony import */ var _Badges_PluginDeprecatedBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginDeprecatedBadge.tsx");
/* harmony import */ var _Badges_PluginDisabledBadge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginDisabledBadge.tsx");
/* harmony import */ var _Badges_PluginEnterpriseBadge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginEnterpriseBadge.tsx");
/* harmony import */ var _Badges_PluginInstallBadge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginInstallBadge.tsx");
/* harmony import */ var _Badges_PluginUpdateAvailableBadge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginUpdateAvailableBadge.tsx");









function PluginListItemBadges({ plugin }) {
  const canUpdate = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isPluginUpdatable)(plugin);
  if (plugin.isEnterprise) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Stack, { height: "auto", wrap: "wrap", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Badges_PluginEnterpriseBadge__WEBPACK_IMPORTED_MODULE_6__.PluginEnterpriseBadge, { plugin }),
      plugin.isDisabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Badges_PluginDisabledBadge__WEBPACK_IMPORTED_MODULE_5__.PluginDisabledBadge, { error: plugin.error }),
      canUpdate && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Badges_PluginUpdateAvailableBadge__WEBPACK_IMPORTED_MODULE_8__.PluginUpdateAvailableBadge, { plugin })
    ] });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Stack, { height: "auto", wrap: "wrap", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.PluginSignatureBadge, { status: plugin.signature }),
    plugin.isDisabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Badges_PluginDisabledBadge__WEBPACK_IMPORTED_MODULE_5__.PluginDisabledBadge, { error: plugin.error }),
    plugin.isDeprecated && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Badges_PluginDeprecatedBadge__WEBPACK_IMPORTED_MODULE_4__.PluginDeprecatedBadge, {}),
    plugin.isInstalled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Badges_PluginInstallBadge__WEBPACK_IMPORTED_MODULE_7__.PluginInstalledBadge, {}),
    canUpdate && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Badges_PluginUpdateAvailableBadge__WEBPACK_IMPORTED_MODULE_8__.PluginUpdateAvailableBadge, { plugin })
  ] });
}


/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginLogo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PluginLogo: () => (/* binding */ PluginLogo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");


function PluginLogo({ alt, className, src, height }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src, className, alt, loading: "lazy", height });
}


/***/ }),

/***/ "./public/app/features/plugins/admin/components/RoadmapLinks.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoadmapLinks: () => (/* binding */ RoadmapLinks)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Space.tsx");





const RoadmapLinks = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Space, { v: 2 }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TextLink,
      {
        href: "https://github.com/grafana/grafana/issues/new?assignees=&labels=area%2Fdatasource%2Ctype%2Fnew-plugin-request&projects=&template=3-data_source_request.yaml&title=%5BNew+Data+Source%5D%3A+%3Cname-of-service%3E",
        onClick: () => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.reportInteraction)("connections_data_source_request_clicked"),
        external: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "connections.connect-data.request-data-source", children: "Request a new data source" })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TextLink,
      {
        href: "https://github.com/orgs/grafana/projects/619/views/1?pane=info",
        onClick: () => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.reportInteraction)("connections_data_source_roadmap_clicked"),
        external: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "connections.connect-data.roadmap", children: "View roadmap" })
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/features/plugins/admin/components/SearchField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchField: () => (/* binding */ SearchField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/FilterInput/FilterInput.tsx");






const useDebounceWithoutFirstRender = (callBack, delay = 0, deps = []) => {
  const isFirstRender = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
  const debounceDeps = [...deps, isFirstRender];
  return (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(
    () => {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }
      return callBack();
    },
    delay,
    debounceDeps
  );
};
const SearchField = ({ value, onSearch }) => {
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value);
  useDebounceWithoutFirstRender(() => onSearch(query ?? ""), 500, [query]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.FilterInput,
    {
      value: query,
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.keyCode === 13) {
          onSearch(e.currentTarget.value);
        }
      },
      placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("plugins.search-field.placeholder-search-grafana-plugins", "Search Grafana plugins"),
      onChange: (value2) => {
        setQuery(value2);
      },
      width: 46
    }
  );
};


/***/ }),

/***/ "./public/app/features/plugins/admin/components/UpdateAllButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");




const UpdateAllButton = ({ disabled, onUpdateAll, updatablePluginsLength }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { disabled, onClick: onUpdateAll, children: disabled ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "plugins.catalog.no-updates-available", children: "No updates available" }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "plugins.catalog.update-all.button", values: { length: updatablePluginsLength }, children: [
    "Update all (",
    "{{length}}",
    ")"
  ] }) });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateAllButton);


/***/ }),

/***/ "./public/app/features/plugins/admin/components/UpdateAllModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateAllModal: () => (/* binding */ UpdateAllModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/admin/state/hooks.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var _UpdateAllModalBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/plugins/admin/components/UpdateAllModalBody.tsx");









const PLUGINS_UPDATE_ALL_INTERACTION_EVENT_NAME = "plugins_update_all_clicked";
const UpdateAllModal = ({ isOpen, onDismiss, isLoading, plugins }) => {
  const install = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_6__.useInstall)();
  const { error } = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_6__.useInstallStatus)();
  const [errorMap, setErrorMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(/* @__PURE__ */ new Map());
  const [inProgress, setInProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [selectedPlugins, setSelectedPlugins] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const initialPluginsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(plugins);
  const pluginsSet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => new Set(plugins.map((plugin) => plugin.id)), [plugins]);
  const installsRemaining = plugins.length;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (initialPluginsRef.current.length === 0) {
      initialPluginsRef.current = [...plugins];
    }
  }, [plugins]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (inProgress) {
      selectedPlugins?.forEach((id) => {
        if (!pluginsSet.has(id)) {
          setSelectedPlugins((prevSelectedPlugins) => {
            const newSelectedPlugins = new Set(prevSelectedPlugins);
            newSelectedPlugins.delete(id);
            return newSelectedPlugins;
          });
        }
      });
      if (selectedPlugins?.size === 0) {
        setInProgress(false);
      }
    }
  }, [inProgress, pluginsSet, selectedPlugins]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (selectedPlugins === void 0 && plugins.length > 0 && !isLoading) {
      const initialSelectedPlugins = new Set(plugins.map((plugin) => plugin.id));
      setSelectedPlugins(initialSelectedPlugins);
    }
  }, [isLoading, plugins, selectedPlugins]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (inProgress && error && !errorMap.has(error.id) && selectedPlugins?.has(error.id)) {
      setErrorMap((prevErrorMap) => {
        const newErrorMap = new Map(prevErrorMap);
        newErrorMap.set(error.id, error);
        return newErrorMap;
      });
      setSelectedPlugins((prevSelectedPlugins) => {
        const newSelectedPlugins = new Set(prevSelectedPlugins);
        newSelectedPlugins.delete(error.id);
        return newSelectedPlugins;
      });
    }
  }, [error, errorMap, inProgress, selectedPlugins]);
  const onConfirm = async () => {
    if (!inProgress) {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)(PLUGINS_UPDATE_ALL_INTERACTION_EVENT_NAME, {
        path: window.location.pathname,
        count: selectedPlugins?.size,
        creator_team: "grafana_plugins_catalog",
        schema_version: "1.0.0"
      });
      setInProgress(true);
      if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.pluginAdminExternalManageEnabled) {
        for (let plugin of plugins) {
          if (selectedPlugins?.has(plugin.id)) {
            await install(plugin.id, plugin.latestVersion, _types__WEBPACK_IMPORTED_MODULE_7__.PluginStatus.UPDATE);
          }
        }
      } else {
        plugins.forEach((plugin) => {
          if (selectedPlugins?.has(plugin.id)) {
            install(plugin.id, plugin.latestVersion, _types__WEBPACK_IMPORTED_MODULE_7__.PluginStatus.UPDATE);
          }
        });
      }
    }
  };
  const onDismissClick = () => {
    initialPluginsRef.current = [];
    setErrorMap(/* @__PURE__ */ new Map());
    setInProgress(false);
    setSelectedPlugins(void 0);
    onDismiss();
  };
  const onCheckboxChange = (id) => {
    setSelectedPlugins((prevSelectedPlugins) => {
      const newSelectedPlugins = new Set(prevSelectedPlugins);
      if (newSelectedPlugins.has(id)) {
        newSelectedPlugins.delete(id);
      } else {
        newSelectedPlugins.add(id);
      }
      return newSelectedPlugins;
    });
    if (errorMap.has(id)) {
      setErrorMap((prevErrorMap) => {
        const newErrorMap = new Map(prevErrorMap);
        newErrorMap.delete(id);
        return newErrorMap;
      });
    }
  };
  const pluginsSelected = selectedPlugins?.size || 0;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ConfirmModal,
    {
      isOpen,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("plugins.catalog.update-all.modal-title", "Update Plugins"),
      body: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _UpdateAllModalBody__WEBPACK_IMPORTED_MODULE_8__.UpdateModalBody,
        {
          plugins: initialPluginsRef.current,
          pluginsNotInstalled: pluginsSet,
          inProgress,
          errorMap,
          onCheckboxChange,
          selectedPlugins
        }
      ),
      onConfirm: installsRemaining > 0 ? onConfirm : onDismissClick,
      onDismiss: onDismissClick,
      disabled: shouldDisableConfirm(inProgress, installsRemaining, pluginsSelected),
      confirmText: getConfirmationText(installsRemaining, inProgress, pluginsSelected),
      confirmButtonVariant: "primary"
    }
  );
};
function getConfirmationText(installsRemaining, inProgress, pluginsSelected) {
  if (inProgress) {
    return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("plugins.catalog.update-all.modal-in-progress", "Updating...");
  }
  if (installsRemaining > 0) {
    return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("plugins.catalog.update-all.modal-confirmation", "Update") + ` (${pluginsSelected})`;
  }
  return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("plugins.catalog.update-all.modal-dismiss", "Close");
}
function shouldDisableConfirm(inProgress, installsRemaining, pluginsSelected) {
  if (inProgress) {
    return true;
  }
  if (installsRemaining > 0 && pluginsSelected === 0) {
    return true;
  }
  return false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateAllModal);


/***/ }),

/***/ "./public/app/features/plugins/admin/components/UpdateAllModalBody.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateModalBody: () => (/* binding */ UpdateModalBody)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Checkbox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");






const getStyles = (theme) => ({
  table: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: theme.spacing(2),
    width: "100%",
    borderCollapse: "collapse"
  }),
  tableRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    borderBottom: `1px solid ${theme.colors.border.weak}`,
    td: {
      paddingRight: theme.spacing(1)
    }
  }),
  icon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }),
  header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    textAlign: "left",
    padding: theme.spacing(1),
    borderBottom: `2px solid ${theme.colors.border.strong}`,
    th: {
      paddingRight: theme.spacing(1)
    }
  }),
  data: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: "10px"
  }),
  footer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontSize: theme.typography.bodySmall.fontSize,
    marginTop: theme.spacing(3)
  }),
  noPluginsMessage: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  }),
  tableContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: theme.spacing(41),
    marginBottom: theme.spacing(2)
  }),
  errorIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.error.main
  }),
  successIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.success.main
  }),
  pluginsInstalled: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    svg: {
      marginRight: theme.spacing(1)
    }
  })
});
const StatusIcon = ({
  id,
  inProgress,
  isSelected,
  isInstalled,
  errorMap
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  if (errorMap && errorMap.has(id)) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
      {
        content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("plugins.catalog.update-all.error", "Error updating plugin: {{errorMessage}}", {
          errorMessage: errorMap.get(id)?.message
        }),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { className: styles.errorIcon, size: "xl", name: "exclamation-triangle" })
      }
    );
  }
  if (isInstalled) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { className: styles.successIcon, size: "xl", name: "check" });
  }
  if (inProgress && isSelected) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Spinner, {});
  }
  return "";
};
const UpdateModalBody = ({
  plugins,
  pluginsNotInstalled,
  inProgress,
  selectedPlugins,
  onCheckboxChange,
  errorMap
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  const numberInstalled = plugins.length - pluginsNotInstalled.size;
  const installationFinished = plugins.length !== pluginsNotInstalled.size && !inProgress;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: plugins.length === 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.EmptyState,
    {
      variant: "completed",
      message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("plugins.catalog.update-all.all-plugins-updated", "All plugins updated!")
    }
  ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "plugins.catalog.update-all.header", children: "The following plugins have update available" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.tableContainer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: styles.table, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { className: styles.header, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "plugins.catalog.update-all.update-header", children: "Update" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "plugins.catalog.update-all.name-header", children: "Name" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "plugins.catalog.update-all.installed-header", children: "Installed" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "plugins.catalog.update-all.available-header", children: "Available" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {})
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: plugins.map(({ id, name, installedVersion, latestVersion }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { className: styles.tableRow, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Checkbox,
          {
            onChange: () => onCheckboxChange(id),
            value: selectedPlugins?.has(id),
            disabled: !pluginsNotInstalled.has(id)
          }
        ) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: name }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: installedVersion }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: latestVersion }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: styles.icon, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          StatusIcon,
          {
            id,
            inProgress,
            isSelected: selectedPlugins?.has(id) ?? false,
            isInstalled: !pluginsNotInstalled.has(id),
            errorMap
          }
        ) })
      ] }, id)) })
    ] }) }),
    numberInstalled > 0 && installationFinished && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.pluginsInstalled, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { className: styles.successIcon, size: "lg", name: "check" }),
      `${numberInstalled} ${(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("plugins.catalog.update-all.update-status-text", "plugins updated")}`
    ] }),
    errorMap.size > 0 && installationFinished && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.pluginsInstalled, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { className: styles.errorIcon, size: "lg", name: "exclamation-triangle" }),
      `${errorMap.size} ${(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("plugins.catalog.update-all.error-status-text", "failed - see error messages")}`
    ] }),
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.pluginAdminExternalManageEnabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("footer", { className: styles.footer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "plugins.catalog.update-all.cloud-update-message", children: "* It may take a few minutes for the plugins to be available for usage." }) })
  ] }) });
};


/***/ }),

/***/ "./public/app/features/plugins/admin/hooks/useHistory.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useHistory: () => (/* binding */ useHistory)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");


const useHistory = () => {
  return {
    push: ({ query }) => {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.partial(query);
    }
  };
};


/***/ }),

/***/ "./public/app/features/plugins/admin/pages/Browse.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Browse)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_features_connections_components_AdvisorRedirectNotice_AdvisorRedirectNotice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/connections/components/AdvisorRedirectNotice/AdvisorRedirectNotice.tsx");
/* harmony import */ var app_features_connections_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/connections/constants.ts");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _components_HorizontalGroup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/plugins/admin/components/HorizontalGroup.tsx");
/* harmony import */ var _components_PluginList__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginList.tsx");
/* harmony import */ var _components_RoadmapLinks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/plugins/admin/components/RoadmapLinks.tsx");
/* harmony import */ var _components_SearchField__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/plugins/admin/components/SearchField.tsx");
/* harmony import */ var _components_UpdateAllButton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/plugins/admin/components/UpdateAllButton.tsx");
/* harmony import */ var _components_UpdateAllModal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/plugins/admin/components/UpdateAllModal.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
/* harmony import */ var _hooks_useHistory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/plugins/admin/hooks/useHistory.tsx");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/plugins/admin/state/hooks.ts");






















function Browse() {
  const location = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  const locationSearch = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.locationSearchToObject)(location.search);
  const navModel = (0,app_types_store__WEBPACK_IMPORTED_MODULE_16__.useSelector)((state) => (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_13__.getNavModel)(state.navIndex, "plugins"));
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  const history = (0,_hooks_useHistory__WEBPACK_IMPORTED_MODULE_24__.useHistory)();
  const remotePluginsAvailable = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_25__.useIsRemotePluginsAvailable)();
  const keyword = locationSearch.q?.toString() || "";
  const filterBy = locationSearch.filterBy?.toString() || "all";
  const filterByType = locationSearch.filterByType || "all";
  const sortBy = locationSearch.sortBy || _helpers__WEBPACK_IMPORTED_MODULE_23__.Sorters.nameAsc;
  const { isLoading, error, plugins } = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_25__.useGetAll)(
    {
      keyword,
      type: filterByType !== "all" ? filterByType : void 0,
      isInstalled: filterBy === "installed" ? true : void 0,
      hasUpdate: filterBy === "has-update" ? true : void 0
    },
    sortBy
  );
  const filterByOptions = [
    { value: "all", label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("plugins.browse.filter-by-options.label.all", "All") },
    { value: "installed", label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("plugins.browse.filter-by-options.label.installed", "Installed") },
    { value: "has-update", label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("plugins.browse.filter-by-options.label.new-updates", "New Updates") }
  ];
  const { isLoading: areUpdatesLoading, updatablePlugins } = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_25__.useGetUpdatable)();
  const [showUpdateModal, setShowUpdateModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const disableUpdateAllButton = updatablePlugins.length <= 0 || areUpdatesLoading;
  const onFilterByChange = (value) => {
    history.push({ query: { filterBy: value } });
  };
  const onFilterByTypeChange = (value) => {
    history.push({ query: { filterByType: value.value } });
  };
  const onSearch = (q) => {
    history.push({ query: { filterBy, filterByType, q } });
  };
  const onUpdateAll = () => {
    setShowUpdateModal(true);
  };
  if (error) {
    console.error(error.message);
    return null;
  }
  const subTitle = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "plugins.browse.subtitle", children: [
    "Extend the Grafana experience with panel plugins and apps. To find more data sources go to",
    " ",
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.TextLink, { href: `${app_features_connections_constants__WEBPACK_IMPORTED_MODULE_15__.ROUTES.AddNewConnection}?cat=data-source`, children: "Connections" }),
    "."
  ] }) });
  const updateAllButton = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _components_UpdateAllButton__WEBPACK_IMPORTED_MODULE_21__["default"],
    {
      disabled: disableUpdateAllButton,
      onUpdateAll,
      updatablePluginsLength: updatablePlugins.length
    }
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__.Page, { navModel, actions: updateAllButton, subTitle, className: styles.pageContainer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__.Page.Contents, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_connections_components_AdvisorRedirectNotice_AdvisorRedirectNotice__WEBPACK_IMPORTED_MODULE_14__.AdvisorRedirectNotice, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.searchContainer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_HorizontalGroup__WEBPACK_IMPORTED_MODULE_17__.HorizontalGroup, { wrap: true, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("plugins.browse.label-search", "Search"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SearchField__WEBPACK_IMPORTED_MODULE_20__.SearchField, { value: keyword, onSearch }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_HorizontalGroup__WEBPACK_IMPORTED_MODULE_17__.HorizontalGroup, { wrap: true, className: styles.actionBar, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("plugins.browse.label-type", "Type"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Select,
          {
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("plugins.browse.aria-label-plugin-type-filter", "Plugin type filter"),
            value: filterByType,
            onChange: onFilterByTypeChange,
            width: 18,
            options: [
              { value: "all", label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("plugins.browse.label.all", "All") },
              { value: "datasource", label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("plugins.browse.label.data-sources", "Data sources") },
              { value: "panel", label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("plugins.browse.label.panels", "Panels") },
              { value: "app", label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("plugins.browse.label.applications", "Applications") }
            ]
          }
        ) }),
        remotePluginsAvailable ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("plugins.browse.label-state", "State"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.RadioButtonGroup, { value: filterBy, onChange: onFilterByChange, options: filterByOptions }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Tooltip,
          {
            content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
              "plugins.browse.tooltip-filter-disabled",
              "This filter has been disabled because the Grafana server cannot access grafana.com"
            ),
            placement: "top",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("plugins.browse.label-state", "State"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.RadioButtonGroup,
              {
                disabled: true,
                value: filterBy,
                onChange: onFilterByChange,
                options: filterByOptions
              }
            ) }) })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.listWrap, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PluginList__WEBPACK_IMPORTED_MODULE_18__.PluginList, { plugins, isLoading }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_RoadmapLinks__WEBPACK_IMPORTED_MODULE_19__.RoadmapLinks, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _components_UpdateAllModal__WEBPACK_IMPORTED_MODULE_22__.UpdateAllModal,
      {
        isOpen: showUpdateModal,
        isLoading: areUpdatesLoading,
        onDismiss: () => setShowUpdateModal(false),
        plugins: updatablePlugins
      }
    )
  ] }) });
}
const getStyles = (theme) => ({
  pageContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    height: "100vh",
    overflow: "hidden"
  }),
  searchContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(1),
    borderBottom: `1px solid ${theme.colors.border.weak}`,
    marginBottom: theme.spacing(3)
  }),
  listWrap: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    height: "calc(100vh - 350px)",
    overflowY: "auto"
  }),
  actionBar: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    [theme.breakpoints.up("xl")]: {
      marginLeft: "auto"
    }
  }),
  displayAs: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    svg: {
      marginRight: 0
    }
  })
});


/***/ }),

/***/ "./public/app/features/plugins/admin/state/hooks.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFetchAll: () => (/* binding */ useFetchAll),
/* harmony export */   useFetchAllLocal: () => (/* binding */ useFetchAllLocal),
/* harmony export */   useFetchDetails: () => (/* binding */ useFetchDetails),
/* harmony export */   useFetchDetailsLazy: () => (/* binding */ useFetchDetailsLazy),
/* harmony export */   useFetchDetailsStatus: () => (/* binding */ useFetchDetailsStatus),
/* harmony export */   useFetchStatus: () => (/* binding */ useFetchStatus),
/* harmony export */   useGetAll: () => (/* binding */ useGetAll),
/* harmony export */   useGetErrors: () => (/* binding */ useGetErrors),
/* harmony export */   useGetSingle: () => (/* binding */ useGetSingle),
/* harmony export */   useGetSingleLocalWithoutDetails: () => (/* binding */ useGetSingleLocalWithoutDetails),
/* harmony export */   useGetUpdatable: () => (/* binding */ useGetUpdatable),
/* harmony export */   useInstall: () => (/* binding */ useInstall),
/* harmony export */   useInstallStatus: () => (/* binding */ useInstallStatus),
/* harmony export */   useIsRemotePluginsAvailable: () => (/* binding */ useIsRemotePluginsAvailable),
/* harmony export */   useLocalFetchStatus: () => (/* binding */ useLocalFetchStatus),
/* harmony export */   useUninstall: () => (/* binding */ useUninstall),
/* harmony export */   useUninstallStatus: () => (/* binding */ useUninstallStatus),
/* harmony export */   useUnsetInstall: () => (/* binding */ useUnsetInstall)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/state/actions.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/state/selectors.ts");






const useGetAll = (filters, sortBy = _helpers__WEBPACK_IMPORTED_MODULE_2__.Sorters.nameAsc) => {
  useFetchAll();
  const selector = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPlugins)(filters), [filters]);
  const plugins = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)(selector);
  const { isLoading, error } = useLocalFetchStatus();
  const sortedPlugins = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sortPlugins)(plugins, sortBy);
  return {
    isLoading,
    error,
    plugins: sortedPlugins
  };
};
const useGetUpdatable = () => {
  const { isLoading } = useFetchStatus();
  const { plugins: installed } = useGetAll({ isInstalled: true });
  const updatablePlugins = installed.filter(_helpers__WEBPACK_IMPORTED_MODULE_2__.isPluginUpdatable);
  return {
    isLoading,
    updatablePlugins
  };
};
const useGetSingle = (id) => {
  useFetchAll();
  useFetchDetails(id);
  return (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state) => (0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectById)(state, id));
};
const useGetSingleLocalWithoutDetails = (id) => {
  useFetchAllLocal();
  return (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state) => (0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectById)(state, id));
};
const useGetErrors = (filterByPluginType) => {
  useFetchAll();
  return (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPluginErrors)(filterByPluginType));
};
const useInstall = () => {
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return (id, version, installType) => dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.install)({ id, version, installType }));
};
const useUnsetInstall = () => {
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return () => dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.unsetInstall)());
};
const useUninstall = () => {
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return (id) => dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.uninstall)(id));
};
const useIsRemotePluginsAvailable = () => {
  const error = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchRemotePlugins.typePrefix));
  return error === null;
};
const useLocalFetchStatus = () => {
  const isLoading = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsRequestPending)("plugins/fetchLocal"));
  const error = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectRequestError)("plugins/fetchLocal"));
  return { isLoading, error };
};
const useFetchStatus = () => {
  const isAllLoading = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll.typePrefix));
  const isLocalLoading = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsRequestPending)("plugins/fetchLocal"));
  const isRemoteLoading = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsRequestPending)("plugins/fetchRemote"));
  const isLoading = isAllLoading || isLocalLoading || isRemoteLoading;
  const error = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll.typePrefix));
  return { isLoading, error };
};
const useFetchDetailsStatus = () => {
  const isLoading = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails.typePrefix));
  const error = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails.typePrefix));
  return { isLoading, error };
};
const useInstallStatus = () => {
  const isInstalling = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.install.typePrefix));
  const error = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.install.typePrefix));
  return { isInstalling, error };
};
const useUninstallStatus = () => {
  const isUninstalling = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.uninstall.typePrefix));
  const error = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.uninstall.typePrefix));
  return { isUninstalling, error };
};
const useFetchAll = () => {
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const isNotFetched = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsRequestNotFetched)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll.typePrefix));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    isNotFetched && dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll)());
  }, []);
};
const useFetchAllLocal = () => {
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const isNotFetched = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsRequestNotFetched)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAllLocal.typePrefix));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    isNotFetched && dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAllLocal)());
  }, []);
};
const useFetchDetails = (id) => {
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const plugin = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state) => (0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectById)(state, id));
  const isNotFetching = !(0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails.typePrefix));
  const shouldFetch = isNotFetching && plugin && !plugin.details;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    shouldFetch && dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails)(id));
  }, [plugin]);
};
const useFetchDetailsLazy = () => {
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return (id) => dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails)(id));
};


/***/ }),

/***/ "./public/app/features/plugins/admin/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectAll: () => (/* binding */ selectAll),
/* harmony export */   selectById: () => (/* binding */ selectById),
/* harmony export */   selectIsRequestNotFetched: () => (/* binding */ selectIsRequestNotFetched),
/* harmony export */   selectIsRequestPending: () => (/* binding */ selectIsRequestPending),
/* harmony export */   selectItems: () => (/* binding */ selectItems),
/* harmony export */   selectPluginErrors: () => (/* binding */ selectPluginErrors),
/* harmony export */   selectPlugins: () => (/* binding */ selectPlugins),
/* harmony export */   selectRequest: () => (/* binding */ selectRequest),
/* harmony export */   selectRequestError: () => (/* binding */ selectRequestError),
/* harmony export */   selectRoot: () => (/* binding */ selectRoot)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/reselect/dist/reselect.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/text/string.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/admin/state/reducer.ts");








const selectRoot = (state) => state.plugins;
const selectItems = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectRoot, ({ items }) => items);
const { selectAll, selectById } = _reducer__WEBPACK_IMPORTED_MODULE_6__.pluginsAdapter.getSelectors(selectItems);
const debouncedTrackSearch = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)((count) => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.reportInteraction)("plugins_search", {
    resultsCount: count,
    creator_team: "grafana_plugins_catalog",
    schema_version: "1.0.0"
  });
}, 300);
const selectPlugins = (filters) => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAll, (plugins) => {
  const keyword = filters.keyword ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.unEscapeStringFromRegex)(filters.keyword.toLowerCase()) : "";
  const filteredPluginIds = keyword !== "" ? (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.filterByKeyword)(plugins, keyword) : null;
  const filteredPlugins = plugins.filter((plugin) => {
    if (keyword && filteredPluginIds == null) {
      return false;
    }
    if (keyword && !filteredPluginIds?.includes(plugin.id)) {
      return false;
    }
    if (filters.type && plugin.type !== filters.type) {
      return false;
    }
    if (filters.isInstalled !== void 0 && plugin.isInstalled !== filters.isInstalled) {
      return false;
    }
    if (filters.isEnterprise !== void 0 && plugin.isEnterprise !== filters.isEnterprise) {
      return false;
    }
    if (filters.hasUpdate !== void 0 && (plugin.hasUpdate !== filters.hasUpdate || !(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isPluginUpdatable)(plugin))) {
      return false;
    }
    return true;
  });
  if (keyword) {
    debouncedTrackSearch(filteredPlugins.length);
  }
  return filteredPlugins;
});
const selectPluginErrors = (filterByPluginType) => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAll, (plugins) => {
  const pluginErrors = [];
  for (const plugin of plugins) {
    if (plugin.error && (!filterByPluginType || plugin.type === filterByPluginType)) {
      pluginErrors.push({
        pluginId: plugin.id,
        errorCode: plugin.error,
        pluginType: plugin.type
      });
    }
  }
  return pluginErrors;
});
const selectRequest = (actionType) => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectRoot, ({ requests = {} }) => requests[actionType]);
const selectIsRequestPending = (actionType) => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectRequest(actionType), (request) => request?.status === _types__WEBPACK_IMPORTED_MODULE_5__.RequestStatus.Pending);
const selectRequestError = (actionType) => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)(
  selectRequest(actionType),
  (request) => request?.status === _types__WEBPACK_IMPORTED_MODULE_5__.RequestStatus.Rejected ? request?.error : null
);
const selectIsRequestNotFetched = (actionType) => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectRequest(actionType), (request) => request === void 0);


/***/ })

}]);
//# sourceMappingURL=PluginListPage.497b1418e497a955e3f0.js.map