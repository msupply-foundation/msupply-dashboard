"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertGroups"],{

/***/ "./public/app/features/alerting/unified/AlertGroups.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/api/alertmanagerApi.ts");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_alert_groups_AlertGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertGroup.tsx");
/* harmony import */ var _components_alert_groups_AlertGroupFilter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertGroupFilter.tsx");
/* harmony import */ var _hooks_useFilteredAmGroups__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFilteredAmGroups.ts");
/* harmony import */ var _hooks_useGroupedAlerts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useGroupedAlerts.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertmanagerContext.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/withPageErrorBoundary.tsx");






















const AlertGroups = () => {
  const { selectedAlertmanager } = (0,_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_17__.useAlertmanager)();
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_7__.useQueryParams)();
  const { groupBy = [] } = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_21__.getFiltersFromUrlParams)(queryParams);
  const { currentData: amConfigStatus } = _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_10__.alertmanagerApi.endpoints.getGrafanaAlertingConfigurationStatus.useQuery();
  const alertGroups = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_16__.useUnifiedAlertingSelector)((state) => state.amAlertGroups);
  const { loading, error, result: results = [] } = alertGroups[selectedAlertmanager || ""] ?? _utils_redux__WEBPACK_IMPORTED_MODULE_22__.initialAsyncRequestState;
  const groupedAlerts = (0,_hooks_useGroupedAlerts__WEBPACK_IMPORTED_MODULE_15__.useGroupedAlerts)(results, groupBy);
  const filteredAlertGroups = (0,_hooks_useFilteredAmGroups__WEBPACK_IMPORTED_MODULE_14__.useFilteredAmGroups)(groupedAlerts);
  const grafanaAmDeliveryDisabled = selectedAlertmanager === _utils_datasource__WEBPACK_IMPORTED_MODULE_20__.GRAFANA_RULES_SOURCE_NAME && amConfigStatus?.alertmanagersChoice === _plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_9__.AlertmanagerChoice.External;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    function fetchNotifications() {
      if (selectedAlertmanager) {
        dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_18__.fetchAlertGroupsAction)(selectedAlertmanager));
      }
    }
    fetchNotifications();
    const interval = setInterval(fetchNotifications, _utils_constants__WEBPACK_IMPORTED_MODULE_19__.NOTIFICATIONS_POLL_INTERVAL_MS);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, selectedAlertmanager]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_alert_groups_AlertGroupFilter__WEBPACK_IMPORTED_MODULE_13__.AlertGroupFilter, { groups: results }),
    loading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.alert-groups.text-loading-notifications", "Loading notifications") }),
    error && !loading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.alert-groups.title-error-loading-notifications", "Error loading notifications"),
        severity: "error",
        children: error.message || "Unknown error"
      }
    ),
    grafanaAmDeliveryDisabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "alerting.alert-groups.title-grafana-alerts-delivered-alertmanager",
          "Grafana alerts are not delivered to Grafana Alertmanager"
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.alert-groups.body-grafana-alerted-delivered", children: "Grafana is configured to send alerts to external alertmanagers only. No alerts are expected to be available here for the selected Alertmanager." })
      }
    ),
    results && filteredAlertGroups.map((group, index) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: [
        (index === 1 && Object.keys(filteredAlertGroups[0].labels).length === 0 || index === 0 && Object.keys(group.labels).length > 0) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Box, { paddingY: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { element: "h2", variant: "body", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans,
          {
            i18nKey: "alerting.alert-groups.grouped-by",
            values: { labels: Object.keys(group.labels).join(", ") },
            children: [
              "Grouped by: ",
              "{{labels}}"
            ]
          }
        ) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_alert_groups_AlertGroup__WEBPACK_IMPORTED_MODULE_12__.AlertGroup, { alertManagerSourceName: selectedAlertmanager || "", group })
      ] }, `${JSON.stringify(group.labels)}-group-${index}`);
    }),
    results && !filteredAlertGroups.length && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.alert-groups.no-results", children: "No results." }) })
  ] });
};
function AlertGroupsPage() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_11__.AlertmanagerPageWrapper, { navId: "groups", accessType: "instance", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertGroups, {}) });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_23__.withPageErrorBoundary)(AlertGroupsPage));


/***/ }),

/***/ "./public/app/features/alerting/unified/components/CollapseToggle.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapseToggle: () => (/* binding */ CollapseToggle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");



const CollapseToggle = ({
  isCollapsed,
  onToggle,
  idControlled,
  className,
  text,
  size = "xl",
  ...restOfProps
}) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button,
    {
      type: "button",
      fill: "text",
      variant: "secondary",
      "aria-expanded": !isCollapsed,
      "aria-controls": idControlled,
      className,
      icon: isCollapsed ? "angle-right" : "angle-down",
      onClick: () => onToggle(!isCollapsed),
      ...restOfProps,
      children: text
    }
  );
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/AlertDetails.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertDetails: () => (/* binding */ AlertDetails)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _AnnotationDetailsField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx");
/* harmony import */ var _Authorize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");













const AlertDetails = ({ alert, alertManagerSourceName }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const isGrafanaSource = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_9__.isGrafanaRulesSource)(alertManagerSourceName);
  const isSeeSourceButtonEnabled = isGrafanaSource ? app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.AlertingRuleRead) : true;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.actionsRow, children: [
      alert.status.state === app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_6__.AlertState.Suppressed && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_12__.Authorize, { actions: [_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_8__.AlertmanagerAction.CreateSilence, _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_8__.AlertmanagerAction.UpdateSilence], children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton,
        {
          href: `${(0,_utils_misc__WEBPACK_IMPORTED_MODULE_10__.makeAMLink)(
            "/alerting/silences",
            alertManagerSourceName
          )}&silenceIds=${alert.status.silencedBy.join(",")}`,
          className: styles.button,
          icon: "bell",
          size: "sm",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.alert-details.manage-silences", children: "Manage silences" })
        }
      ) }),
      alert.status.state === app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_6__.AlertState.Active && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_12__.Authorize, { actions: [_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_8__.AlertmanagerAction.CreateSilence], children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton,
        {
          href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_10__.makeLabelBasedSilenceLink)(alertManagerSourceName, alert.labels),
          className: styles.button,
          icon: "bell-slash",
          size: "sm",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.alert-details.silence", children: "Silence" })
        }
      ) }),
      isSeeSourceButtonEnabled && alert.generatorURL && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, { className: styles.button, href: alert.generatorURL, icon: "chart-line", size: "sm", children: isGrafanaSource ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.alert-details.button-see-rule", "See alert rule") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.alert-details.button-see-source", "See source") })
    ] }),
    Object.entries(alert.annotations).map(([annotationKey, annotationValue]) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AnnotationDetailsField__WEBPACK_IMPORTED_MODULE_11__.AnnotationDetailsField, { annotationKey, value: annotationValue }, annotationKey)),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.receivers, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans,
      {
        i18nKey: "alerting.alert-details.receivers-list",
        values: {
          receivers: alert.receivers.map(({ name }) => name).filter((name) => !!name).join(", ")
        },
        children: [
          "Receivers: ",
          "{{receivers}}"
        ]
      }
    ) })
  ] });
};
const getStyles = (theme) => ({
  button: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    "& + &": {
      marginLeft: theme.spacing(1)
    }
  }),
  actionsRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: `${theme.spacing(2, 0)} !important`,
    borderBottom: `1px solid ${theme.colors.border.medium}`
  }),
  receivers: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(1, 0)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/AlertGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertGroup: () => (/* binding */ AlertGroup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-alerting/src/grafana/rules/components/labels/AlertLabels.tsx");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _MetaText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/MetaText.tsx");
/* harmony import */ var _AlertGroupAlertsTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertGroupAlertsTable.tsx");
/* harmony import */ var _AlertGroupHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertGroupHeader.tsx");












const AlertGroup = ({ alertManagerSourceName, group }) => {
  const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const receiverInGroup = group.receiver.name !== "NONE";
  const contactPoint = group.receiver.name;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.wrapper, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.header, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.group, "data-testid": "alert-group", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _CollapseToggle__WEBPACK_IMPORTED_MODULE_9__.CollapseToggle,
          {
            size: "sm",
            isCollapsed,
            onToggle: () => setIsCollapsed(!isCollapsed),
            "data-testid": "alert-group-collapse-toggle"
          }
        ),
        Object.keys(group.labels).length ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "row", alignItems: "center", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_3__.AlertLabels, { labels: group.labels, size: "sm" }),
          receiverInGroup && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MetaText__WEBPACK_IMPORTED_MODULE_10__.MetaText, { icon: "at", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.alert-group.delivered-to", values: { name: group.receiver.name }, children: [
            "Delivered to",
            " ",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TextLink,
              {
                href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.createContactPointSearchLink)(contactPoint, alertManagerSourceName),
                variant: "bodySmall",
                color: "primary",
                inline: false,
                children: "{{name}}"
              }
            )
          ] }) })
        ] }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.alert-group.no-grouping", children: "No grouping" }) })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertGroupHeader__WEBPACK_IMPORTED_MODULE_12__.AlertGroupHeader, { group })
    ] }),
    !isCollapsed && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertGroupAlertsTable__WEBPACK_IMPORTED_MODULE_11__.AlertGroupAlertsTable, { alertManagerSourceName, alerts: group.alerts })
  ] });
};
const getStyles = (theme) => ({
  wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    "& + &": {
      marginTop: theme.spacing(2)
    }
  }),
  header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: theme.shape.radius.default,
    padding: theme.spacing(1),
    backgroundColor: theme.colors.background.secondary,
    width: "100%"
  }),
  group: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/AlertGroupAlertsTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertGroupAlertsTable: () => (/* binding */ AlertGroupAlertsTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-alerting/src/grafana/rules/components/labels/AlertLabels.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/datetime/durationutil.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _DynamicTableWithGuidelines__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx");
/* harmony import */ var _silences_AmAlertStateTag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx");
/* harmony import */ var _AlertDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertDetails.tsx");











const AlertGroupAlertsTable = ({ alerts, alertManagerSourceName }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  const columns = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => [
      {
        id: "state",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.alert-group-alerts-table.columns.label.notification-state", "Notification state"),
        // eslint-disable-next-line react/display-name
        renderCell: ({ data: alert }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_silences_AmAlertStateTag__WEBPACK_IMPORTED_MODULE_8__.AmAlertStateTag, { state: alert.status.state }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.duration, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans,
            {
              i18nKey: "alerting.alert-group-alerts-table.duration",
              values: {
                time: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.intervalToAbbreviatedDurationString)({
                  start: new Date(alert.startsAt),
                  end: new Date(alert.endsAt)
                })
              },
              children: [
                "for ",
                "{{time}}"
              ]
            }
          ) })
        ] }),
        size: "220px"
      },
      {
        id: "labels",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.alert-group-alerts-table.columns.label.instance-labels", "Instance labels"),
        // eslint-disable-next-line react/display-name
        renderCell: ({ data: { labels } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_3__.AlertLabels, { labels, size: "sm" }),
        size: 1
      }
    ],
    [styles]
  );
  const items = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => alerts.map((alert) => ({
      id: alert.fingerprint,
      data: alert
    })),
    [alerts]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.tableWrapper, "data-testid": "alert-group-table", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _DynamicTableWithGuidelines__WEBPACK_IMPORTED_MODULE_7__.DynamicTableWithGuidelines,
    {
      cols: columns,
      items,
      isExpandable: true,
      renderExpandedContent: ({ data: alert }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertDetails__WEBPACK_IMPORTED_MODULE_9__.AlertDetails, { alert, alertManagerSourceName })
    }
  ) });
};
const getStyles = (theme) => ({
  tableWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(4.5)
    }
  }),
  duration: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginLeft: theme.spacing(1),
    fontSize: theme.typography.bodySmall.fontSize
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/AlertGroupFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertGroupFilter: () => (/* binding */ AlertGroupFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _AlertStateFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertStateFilter.tsx");
/* harmony import */ var _GroupBy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/GroupBy.tsx");
/* harmony import */ var _MatcherFilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx");
/* harmony import */ var _ReceiverFilter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/ReceiverFilter.tsx");












const AlertGroupFilter = ({ groups }) => {
  const [filterKey, setFilterKey] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Math.floor(Math.random() * 100));
  const [queryParams, setQueryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_6__.useQueryParams)();
  const { groupBy = [], queryString, alertState, receivers = [] } = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_7__.getFiltersFromUrlParams)(queryParams);
  const matcherFilterKey = `matcher-${filterKey}`;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const clearFilters = () => {
    setQueryParams({
      groupBy: null,
      queryString: null,
      alertState: null,
      contactPoint: null,
      receivers: null
    });
    setTimeout(() => setFilterKey(filterKey + 1), 100);
  };
  const showClearButton = !!(groupBy.length > 0 || queryString || alertState || receivers.length > 0);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.wrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.filterSection, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _MatcherFilter__WEBPACK_IMPORTED_MODULE_10__.MatcherFilter,
      {
        defaultQueryString: queryString,
        onFilterChange: (value) => setQueryParams({ queryString: value ? value : null })
      },
      matcherFilterKey
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _GroupBy__WEBPACK_IMPORTED_MODULE_9__.GroupBy,
      {
        groups,
        groupBy,
        onGroupingChange: (keys) => setQueryParams({ groupBy: keys.length ? keys.join(",") : null })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _ReceiverFilter__WEBPACK_IMPORTED_MODULE_11__.ReceiverFilter,
      {
        groups,
        receivers,
        onReceiversChange: (receivers2) => setQueryParams({ receivers: receivers2.length ? receivers2.join(",") : null })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _AlertStateFilter__WEBPACK_IMPORTED_MODULE_8__.AlertStateFilter,
      {
        stateFilter: alertState,
        onStateFilterChange: (value) => setQueryParams({ alertState: value ? value : null })
      }
    ),
    showClearButton && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { className: styles.clearButton, variant: "secondary", icon: "times", onClick: clearFilters, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.alert-group-filter.clear-filters", children: "Clear filters" }) })
  ] }) });
};
const getStyles = (theme) => ({
  wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    borderBottom: `1px solid ${theme.colors.border.medium}`,
    marginBottom: theme.spacing(3)
  }),
  filterSection: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    marginBottom: theme.spacing(3),
    gap: theme.spacing(1)
  }),
  clearButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginLeft: theme.spacing(1),
    marginTop: "19px"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/AlertGroupHeader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertGroupHeader: () => (/* binding */ AlertGroupHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _styles_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/styles/notifications.ts");





const AlertGroupHeader = ({ group }) => {
  const textStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_styles_notifications__WEBPACK_IMPORTED_MODULE_3__.getNotificationsTextColors);
  const total = group.alerts.length;
  const countByStatus = group.alerts.reduce(
    (statusObj, alert) => {
      if (statusObj[alert.status.state]) {
        statusObj[alert.status.state] += 1;
      } else {
        statusObj[alert.status.state] = 1;
      }
      return statusObj;
    },
    {}
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    `${total} ${pluralize__WEBPACK_IMPORTED_MODULE_1___default()("alert", total)}: `,
    Object.entries(countByStatus).map(([state, count], index) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        "span",
        {
          className: textStyles[state],
          children: [
            index > 0 && ", ",
            `${count} ${state}`
          ]
        },
        `${JSON.stringify(group.labels)}-notifications-${index}`
      );
    })
  ] });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/AlertStateFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertStateFilter: () => (/* binding */ AlertStateFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");





const AlertStateFilter = ({ onStateFilterChange, stateFilter }) => {
  const alertStateOptions = Object.entries(app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_6__.AlertState).sort(([labelA], [labelB]) => labelA < labelB ? -1 : 1).map(([label, state]) => ({
    label,
    value: state
  }));
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Label, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.alert-state-filter.notification-state", children: "Notification state" }),
        "\xA0"
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip,
        {
          content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.alert-state-filter.active-the-alert-is-firing", children: "Active: The alert notification has been handled. The alert is still firing and continues to be managed." }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.alert-state-filter.suppressed-the-alert-has-been-silenced", children: "Suppressed: The alert has been silenced." }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.alert-state-filter.unprocessed-the-alert-is-received", children: "Unprocessed: The alert is received but its notification has not been processed yet." }) })
          ] }) }),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { name: "info-circle", size: "sm" })
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.RadioButtonGroup, { options: alertStateOptions, value: stateFilter, onChange: onStateFilterChange })
  ] });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/GroupBy.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupBy: () => (/* binding */ GroupBy)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _utils_labels__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/labels.ts");






const GroupBy = ({ groups, groupBy, onGroupingChange }) => {
  const labelKeyOptions = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniq)(groups.flatMap((group) => group.alerts).flatMap(({ labels }) => Object.keys(labels))).filter((label) => !(0,_utils_labels__WEBPACK_IMPORTED_MODULE_7__.isPrivateLabelKey)(label)).map((key) => ({
    label: key,
    value: key
  }));
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { "data-testid": "group-by-container", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Label, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.group-by.custom-group-by", children: "Custom group by" }),
        "\xA0"
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip,
        {
          content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.group-by.tooltip-group-by", children: "Group notifications using a different combination of labels. This option can help validate the grouping settings of your notification policies." }) }),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "info-circle", size: "sm" })
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.MultiSelect,
      {
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.group-by.aria-label-group-by-label-keys", "Group by label keys"),
        value: groupBy,
        placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.group-by.placeholder-group-by", "Group by"),
        prefix: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "tag-alt" }),
        onChange: (items) => {
          onGroupingChange(items.map(({ value }) => value));
        },
        options: labelKeyOptions,
        width: 34
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/ReceiverFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReceiverFilter: () => (/* binding */ ReceiverFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");





const collator = new Intl.Collator("en", { sensitivity: "accent" });
const ReceiverFilter = ({ groups, receivers, onReceiversChange }) => {
  const receiverOptions = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniq)(groups.map((group) => group.receiver.name)).map((receiverName) => ({
    label: receiverName === "NONE" ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.receiver-filter.no-grouping", "No grouping") : receiverName,
    value: receiverName
  })).sort((a, b) => collator.compare(a.label || "", b.label || ""));
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { "data-testid": "receiver-filter-container", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Label, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.receiver-filter.contact-point", children: "Contact point" }),
        "\xA0"
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip,
        {
          content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.receiver-filter.tooltip-contact-point", children: "Filter notifications by the contact point they are being delivered to." }),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "info-circle", size: "sm" })
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.MultiSelect,
      {
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.receiver-filter.aria-label-contact-points", "Filter by contact points"),
        value: receivers,
        placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.receiver-filter.placeholder-contact-point", "Filter by contact point"),
        prefix: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "at" }),
        onChange: (items) => {
          onReceiversChange(items.map(({ value }) => value).filter((v) => v !== void 0));
        },
        options: receiverOptions,
        width: 34
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useFilteredAmGroups.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFilteredAmGroups: () => (/* binding */ useFilteredAmGroups)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_matchers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/matchers.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");






const useFilteredAmGroups = (groups) => {
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_1__.useQueryParams)();
  const { queryString, alertState, receivers } = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_4__.getFiltersFromUrlParams)(queryParams);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const matchers = queryString ? (0,_utils_matchers__WEBPACK_IMPORTED_MODULE_3__.parsePromQLStyleMatcherLooseSafe)(queryString) : [];
    return groups.reduce((filteredGroup, group) => {
      const receiverMatches = receivers && receivers.length > 0 ? receivers.includes(group.receiver.name) : true;
      if (!receiverMatches) {
        return filteredGroup;
      }
      const alerts = group.alerts.filter(({ labels, status }) => {
        const labelsMatch = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_2__.labelsMatchMatchers)(labels, matchers);
        const filtersMatch = alertState ? status.state === alertState : true;
        return labelsMatch && filtersMatch;
      });
      if (alerts.length > 0) {
        if (Object.keys(group.labels).length === 0) {
          filteredGroup.unshift({ ...group, alerts });
        } else {
          filteredGroup.push({ ...group, alerts });
        }
      }
      return filteredGroup;
    }, []);
  }, [queryString, groups, alertState, receivers]);
};


/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useGroupedAlerts.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useGroupedAlerts: () => (/* binding */ useGroupedAlerts)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const useGroupedAlerts = (groups, groupBy) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (groupBy.length === 0) {
      const emptyGroupings = groups.filter((group) => Object.keys(group.labels).length === 0);
      if (emptyGroupings.length > 1) {
        return groups.reduce((combinedGroups, group) => {
          if (Object.keys(group.labels).length === 0) {
            const noGroupingGroup = combinedGroups.find(({ labels }) => Object.keys(labels));
            if (!noGroupingGroup) {
              combinedGroups.push({ alerts: group.alerts, labels: {}, receiver: { name: "NONE" } });
            } else {
              noGroupingGroup.alerts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqBy)([...noGroupingGroup.alerts, ...group.alerts], "labels");
            }
          } else {
            combinedGroups.push(group);
          }
          return combinedGroups;
        }, []);
      } else {
        return groups;
      }
    }
    const alerts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqBy)(
      groups.flatMap(({ alerts: alerts2 }) => alerts2),
      (alert) => alert.fingerprint
    );
    return alerts.reduce((groupings, alert) => {
      const alertContainsGroupings = groupBy.every((groupByLabel) => Object.keys(alert.labels).includes(groupByLabel));
      if (alertContainsGroupings) {
        const receiverAlertGroups = alert.receivers.map((receiver) => ({
          alerts: [alert],
          labels: groupBy.reduce((acc, key) => {
            acc = { ...acc, [key]: alert.labels[key] };
            return acc;
          }, {}),
          receiver
        }));
        receiverAlertGroups.forEach((receiverAlertGroup) => {
          const existingGroup = groupings.find((grouping) => {
            return Object.keys(receiverAlertGroup.labels).every(
              (key) => grouping.labels[key] === receiverAlertGroup.labels[key]
            ) && grouping.receiver.name === receiverAlertGroup.receiver.name;
          });
          if (existingGroup) {
            existingGroup.alerts.push(alert);
          } else {
            groupings.push(receiverAlertGroup);
          }
        });
      } else {
        const noGroupingGroup = groupings.find((group) => Object.keys(group.labels).length === 0);
        if (!noGroupingGroup) {
          groupings.push({ alerts: [alert], labels: {}, receiver: { name: "NONE" } });
        } else {
          noGroupingGroup.alerts.push(alert);
        }
      }
      return groupings;
    }, []);
  }, [groups, groupBy]);
};


/***/ }),

/***/ "./public/app/features/alerting/unified/styles/notifications.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNotificationsTextColors: () => (/* binding */ getNotificationsTextColors)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");



const getNotificationsTextColors = (theme) => ({
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__.AlertState.Active]: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    color: theme.colors.error.text
  }),
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__.AlertState.Suppressed]: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    color: theme.colors.primary.text
  }),
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__.AlertState.Unprocessed]: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    color: theme.colors.secondary.text
  })
});


/***/ })

}]);
//# sourceMappingURL=AlertGroups.56a7e68bc0106b159044.js.map