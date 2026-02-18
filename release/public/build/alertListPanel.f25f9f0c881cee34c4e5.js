"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["alertListPanel"],{

/***/ "./public/app/features/alerting/unified/components/AlertLabel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertLabel: () => (/* binding */ AlertLabel),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





const AlertLabel = ({ labelKey, value, operator = "=", onRemoveLabel }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.wrapper, children: [
    labelKey,
    operator,
    value,
    !!onRemoveLabel && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton,
      {
        name: "times",
        size: "xs",
        onClick: onRemoveLabel,
        tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.alert-label.tooltip-remove-label", "Remove label")
      }
    )
  ] });
};
const getStyles = (theme) => ({
  wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(0.5, 1),
    borderRadius: theme.shape.radius.default,
    border: `solid 1px ${theme.colors.border.medium}`,
    fontSize: theme.typography.bodySmall.fontSize,
    backgroundColor: theme.colors.background.secondary,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.colors.text.primary,
    display: "inline-block",
    lineHeight: "1.2"
  })
});


/***/ }),

/***/ "./public/app/plugins/panel/alertlist/AlertInstances.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertInstances: () => (/* binding */ AlertInstances)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_alerting_unified_components_rules_AlertInstancesTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertInstancesTable.tsx");
/* harmony import */ var app_features_alerting_unified_components_rules_RuleDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetails.tsx");
/* harmony import */ var app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/panel/alertlist/types.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/panel/alertlist/util.ts");













const AlertInstances = ({
  rule,
  alerts,
  options,
  grafanaTotalInstances,
  handleInstancesLimit,
  limitInstances,
  grafanaFilteredInstancesTotal
}) => {
  const defaultShowInstances = options.groupMode === _types__WEBPACK_IMPORTED_MODULE_12__.GroupMode.Custom ? true : options.showInstances;
  const [displayInstances, setDisplayInstances] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(defaultShowInstances);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const clearButton = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.clearButtonStyles);
  const toggleDisplayInstances = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => {
    setDisplayInstances((display) => !display);
  }, []);
  const filteredAlerts = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(
    () => (0,_util__WEBPACK_IMPORTED_MODULE_13__.filterAlerts)(options, (0,app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_10__.sortAlerts)(options.sortOrder, alerts)) ?? [],
    [alerts, options]
  );
  const isGrafanaAlert = grafanaTotalInstances !== void 0;
  const hiddenInstancesForGrafanaAlerts = grafanaTotalInstances && grafanaFilteredInstancesTotal ? grafanaTotalInstances - grafanaFilteredInstancesTotal : 0;
  const hiddenInstancesForNonGrafanaAlerts = alerts.length - filteredAlerts.length;
  const hiddenInstances = isGrafanaAlert ? hiddenInstancesForGrafanaAlerts : hiddenInstancesForNonGrafanaAlerts;
  const uncollapsible = filteredAlerts.length > 0;
  const toggleShowInstances = uncollapsible ? toggleDisplayInstances : lodash__WEBPACK_IMPORTED_MODULE_2__.noop;
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (filteredAlerts.length === 0) {
      setDisplayInstances(false);
    }
  }, [filteredAlerts]);
  const onShowAllClick = async () => {
    if (!handleInstancesLimit) {
      return;
    }
    handleInstancesLimit(false);
    setDisplayInstances(true);
  };
  const onShowLimitedClick = async () => {
    if (!handleInstancesLimit) {
      return;
    }
    handleInstancesLimit(true);
    setDisplayInstances(true);
  };
  const totalInstancesGrafana = limitInstances ? grafanaFilteredInstancesTotal : filteredAlerts.length;
  const totalInstancesNotGrafana = filteredAlerts.length;
  const totalInstancesNumber = isGrafanaAlert ? totalInstancesGrafana : totalInstancesNotGrafana;
  const limitStatus = limitInstances ? `Showing ${app_features_alerting_unified_components_rules_RuleDetails__WEBPACK_IMPORTED_MODULE_9__.INSTANCES_DISPLAY_LIMIT} of ${grafanaTotalInstances} instances` : `Showing all ${grafanaTotalInstances} instances`;
  const limitButtonLabel = limitInstances ? "View all instances" : `Limit the result to ${app_features_alerting_unified_components_rules_RuleDetails__WEBPACK_IMPORTED_MODULE_9__.INSTANCES_DISPLAY_LIMIT} instances`;
  const instancesLimitedAndOverflowed = grafanaTotalInstances && app_features_alerting_unified_components_rules_RuleDetails__WEBPACK_IMPORTED_MODULE_9__.INSTANCES_DISPLAY_LIMIT === filteredAlerts.length && grafanaTotalInstances > filteredAlerts.length;
  const instancesNotLimitedAndoverflowed = grafanaTotalInstances && app_features_alerting_unified_components_rules_RuleDetails__WEBPACK_IMPORTED_MODULE_9__.INSTANCES_DISPLAY_LIMIT < filteredAlerts.length && !limitInstances;
  const footerRow = instancesLimitedAndOverflowed || instancesNotLimitedAndoverflowed ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.footerRow, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: limitStatus }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { size: "sm", variant: "secondary", onClick: limitInstances ? onShowAllClick : onShowLimitedClick, children: limitButtonLabel })
  ] }) : void 0;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    options.groupMode === _types__WEBPACK_IMPORTED_MODULE_12__.GroupMode.Default && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      "button",
      {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(clearButton, uncollapsible ? styles.clickable : ""),
        onClick: () => toggleShowInstances(),
        children: [
          uncollapsible && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: displayInstances ? "angle-down" : "angle-right", size: "md" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: `${totalInstancesNumber} ${pluralize__WEBPACK_IMPORTED_MODULE_3___default()("instance", totalInstancesNumber)}` }),
          hiddenInstances > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [
            ", ",
            `${hiddenInstances} hidden by filters`
          ] })
        ]
      }
    ),
    displayInstances && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      app_features_alerting_unified_components_rules_AlertInstancesTable__WEBPACK_IMPORTED_MODULE_8__.AlertInstancesTable,
      {
        rule,
        instances: filteredAlerts,
        pagination: { itemsPerPage: 2 * _core_constants__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_PER_PAGE_PAGINATION },
        footerRow
      }
    )
  ] });
};
const getStyles = (theme) => ({
  clickable: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    cursor: "pointer"
  }),
  footerRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  })
});


/***/ }),

/***/ "./public/app/plugins/panel/alertlist/GroupByWithLoading.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupBy: () => (/* binding */ GroupBy)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var app_features_alerting_unified_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var app_features_alerting_unified_state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var app_features_alerting_unified_utils_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _features_alerting_unified_utils_labels__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/labels.ts");













const GroupBy = (props) => {
  const { onChange, id, defaultValue, dataSource } = props;
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (dataSource) {
      dataSource && dispatch((0,app_features_alerting_unified_state_actions__WEBPACK_IMPORTED_MODULE_7__.fetchPromRulesAction)({ rulesSourceName: dataSource }));
    } else {
      dispatch((0,app_features_alerting_unified_state_actions__WEBPACK_IMPORTED_MODULE_7__.fetchAllPromRulesAction)());
    }
  }, [dispatch, dataSource]);
  const promRulesByDatasource = (0,app_features_alerting_unified_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__.useUnifiedAlertingSelector)((state) => state.promRules);
  const allRequestsReady = (0,app_features_alerting_unified_utils_redux__WEBPACK_IMPORTED_MODULE_8__.isAsyncRequestMapSliceSettled)(promRulesByDatasource);
  const loading = (0,app_features_alerting_unified_utils_redux__WEBPACK_IMPORTED_MODULE_8__.isAsyncRequestMapSlicePending)(promRulesByDatasource);
  const labels = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(promRulesByDatasource)) {
      return [];
    }
    if (!allRequestsReady) {
      return [];
    }
    const allLabels = Object.keys(promRulesByDatasource).flatMap((datasource) => promRulesByDatasource[datasource].result ?? []).flatMap((rules) => rules.groups).flatMap((group) => group.rules.filter((rule) => rule.type === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_10__.PromRuleType.Alerting)).flatMap((rule) => rule.alerts ?? []).map((alert) => Object.keys(alert.labels ?? {})).flatMap((labels2) => labels2.filter((label) => !(0,_features_alerting_unified_utils_labels__WEBPACK_IMPORTED_MODULE_11__.isPrivateLabelKey)(label)));
    return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniq)(allLabels);
  }, [allRequestsReady, promRulesByDatasource]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.MultiSelect,
    {
      id,
      isLoading: loading,
      defaultValue,
      "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alertlist.group-by.aria-label-group-by-label-keys", "group by label keys"),
      placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alertlist.group-by.placeholder-group-by", "Group by"),
      prefix: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { name: "tag-alt" }),
      onChange: (items) => {
        onChange(items.map((item) => item.value ?? ""));
      },
      options: labels.map((key) => ({
        label: key,
        value: key
      }))
    }
  );
};


/***/ }),

/***/ "./public/app/plugins/panel/alertlist/UnifiedAlertList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnifiedAlertListPanel: () => (/* binding */ UnifiedAlertListPanel),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-use/esm/useToggle.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/BigValue/BigValue.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/ScrollContainer/ScrollContainer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_features_alerting_state_alertDef__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/state/alertDef.ts");
/* harmony import */ var app_features_alerting_unified_api_alertRuleApi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");
/* harmony import */ var app_features_alerting_unified_components_rules_RuleDetails__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetails.tsx");
/* harmony import */ var app_features_alerting_unified_hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
/* harmony import */ var app_features_alerting_unified_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var app_features_alerting_unified_state_actions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var app_features_alerting_unified_utils_constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var app_features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var app_features_alerting_unified_utils_matchers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/utils/matchers.ts");
/* harmony import */ var app_features_alerting_unified_utils_redux__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/plugins/panel/alertlist/types.ts");
/* harmony import */ var _unified_alerting_GroupedView__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/plugins/panel/alertlist/unified-alerting/GroupedView.tsx");
/* harmony import */ var _unified_alerting_UngroupedView__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./public/app/plugins/panel/alertlist/unified-alerting/UngroupedView.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./public/app/plugins/panel/alertlist/util.ts");






























function getStateList(state) {
  const reducer = (list, [stateKey, value]) => {
    if (Boolean(value)) {
      return [...list, stateKey];
    } else {
      return list;
    }
  };
  return Object.entries(state).reduce(reducer, []);
}
const fetchPromAndRuler = ({
  dispatch,
  limitInstances,
  matcherList,
  dataSourceName,
  stateList
}) => {
  if (dataSourceName) {
    dispatch(
      (0,app_features_alerting_unified_state_actions__WEBPACK_IMPORTED_MODULE_19__.fetchPromAndRulerRulesAction)({
        rulesSourceName: dataSourceName,
        limitAlerts: limitInstances ? app_features_alerting_unified_components_rules_RuleDetails__WEBPACK_IMPORTED_MODULE_16__.INSTANCES_DISPLAY_LIMIT : void 0,
        matcher: matcherList,
        state: stateList
      })
    );
  } else {
    dispatch(
      (0,app_features_alerting_unified_state_actions__WEBPACK_IMPORTED_MODULE_19__.fetchAllPromAndRulerRulesAction)(false, {
        limitAlerts: limitInstances ? app_features_alerting_unified_components_rules_RuleDetails__WEBPACK_IMPORTED_MODULE_16__.INSTANCES_DISPLAY_LIMIT : void 0,
        matcher: matcherList,
        state: stateList
      })
    );
  }
};
function UnifiedAlertList(props) {
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_26__.useDispatch)();
  const [limitInstances, toggleLimit] = (0,react_use__WEBPACK_IMPORTED_MODULE_5__["default"])(true);
  const [, gmaViewAllowed] = (0,_features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_28__.useAlertingAbility)(_features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_28__.AlertingAction.ViewAlertRule);
  const { usePrometheusRulesByNamespaceQuery } = app_features_alerting_unified_api_alertRuleApi__WEBPACK_IMPORTED_MODULE_15__.alertRuleApi;
  const promRulesRequests = (0,app_features_alerting_unified_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_18__.useUnifiedAlertingSelector)((state) => state.promRules);
  const rulerRulesRequests = (0,app_features_alerting_unified_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_18__.useUnifiedAlertingSelector)((state) => state.rulerRules);
  const somePromRulesDispatched = (0,app_features_alerting_unified_utils_redux__WEBPACK_IMPORTED_MODULE_23__.isAsyncRequestMapSlicePartiallyDispatched)(promRulesRequests);
  const hideViewRuleLinkText = props.width < 320;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (props.options.stateFilter.inactive === true) {
      props.options.stateFilter.normal = true;
    }
    props.options.stateFilter.inactive = void 0;
  }, [props.options.stateFilter]);
  let dashboard = void 0;
  (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    dashboard = (0,app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_25__.getDashboardSrv)().getCurrent();
  });
  const stateList = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => getStateList(props.options.stateFilter), [props.options.stateFilter]);
  const { options, replaceVariables } = props;
  const dataSourceName = options.datasource === app_features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_21__.GRAFANA_DATASOURCE_NAME ? app_features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_21__.GRAFANA_RULES_SOURCE_NAME : options.datasource;
  const parsedOptions = {
    ...props.options,
    alertName: replaceVariables(options.alertName),
    alertInstanceLabelFilter: replaceVariables(options.alertInstanceLabelFilter)
  };
  const matcherList = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(
    () => (0,app_features_alerting_unified_utils_matchers__WEBPACK_IMPORTED_MODULE_22__.parsePromQLStyleMatcherLooseSafe)(parsedOptions.alertInstanceLabelFilter),
    [parsedOptions.alertInstanceLabelFilter]
  );
  const shouldFetchGrafanaRules = (!dataSourceName || dataSourceName === app_features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_21__.GRAFANA_RULES_SOURCE_NAME) && gmaViewAllowed;
  const {
    currentData: grafanaPromRules = [],
    isLoading: grafanaRulesLoading,
    refetch: refetchGrafanaPromRules
  } = usePrometheusRulesByNamespaceQuery(
    {
      limitAlerts: limitInstances ? app_features_alerting_unified_components_rules_RuleDetails__WEBPACK_IMPORTED_MODULE_16__.INSTANCES_DISPLAY_LIMIT : void 0,
      matcher: matcherList,
      state: stateList
    },
    { skip: !shouldFetchGrafanaRules }
  );
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!promRulesRequests.loading) {
      fetchPromAndRuler({ dispatch, limitInstances, matcherList, dataSourceName, stateList });
    }
    const sub = dashboard?.events.subscribe(_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.TimeRangeUpdatedEvent, () => {
      if (shouldFetchGrafanaRules) {
        refetchGrafanaPromRules();
      }
      if (!dataSourceName || dataSourceName !== app_features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_21__.GRAFANA_RULES_SOURCE_NAME) {
        fetchPromAndRuler({ dispatch, limitInstances, matcherList, dataSourceName, stateList });
      }
    });
    return () => {
      sub?.unsubscribe();
    };
  }, [
    dispatch,
    dashboard,
    matcherList,
    stateList,
    limitInstances,
    dataSourceName,
    refetchGrafanaPromRules,
    shouldFetchGrafanaRules,
    promRulesRequests.loading
  ]);
  const handleInstancesLimit = (limit) => {
    if (limit) {
      fetchPromAndRuler({ dispatch, limitInstances, matcherList, dataSourceName, stateList });
      toggleLimit(true);
    } else {
      fetchPromAndRuler({ dispatch, limitInstances: false, matcherList, dataSourceName, stateList });
      toggleLimit(false);
    }
  };
  const combinedRules = (0,app_features_alerting_unified_hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_17__.useCombinedRuleNamespaces)(void 0, grafanaPromRules);
  const someRulerRulesDispatched = (0,app_features_alerting_unified_utils_redux__WEBPACK_IMPORTED_MODULE_23__.isAsyncRequestMapSlicePartiallyDispatched)(rulerRulesRequests);
  const haveResults = (0,app_features_alerting_unified_utils_redux__WEBPACK_IMPORTED_MODULE_23__.isAsyncRequestMapSlicePartiallyFulfilled)(promRulesRequests);
  const dispatched = somePromRulesDispatched || someRulerRulesDispatched;
  const loading = (0,app_features_alerting_unified_utils_redux__WEBPACK_IMPORTED_MODULE_23__.isAsyncRequestMapSlicePending)(promRulesRequests);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useStyles2)(getStyles);
  const flattenedCombinedRules = (0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_24__.flattenCombinedRules)(combinedRules);
  const order = props.options.sortOrder;
  const rules = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(
    () => filterRules(props, sortRules(order, flattenedCombinedRules)),
    [flattenedCombinedRules, order, props]
  );
  const noAlertsMessage = rules.length === 0 ? "No alerts matching filters" : void 0;
  const renderLoading = grafanaRulesLoading || dispatched && loading && !haveResults;
  const havePreviousResults = Object.values(promRulesRequests).some((state) => state.result);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.ScrollContainer, { minHeight: "100%", children: [
    havePreviousResults && noAlertsMessage && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.noAlertsMessage, children: noAlertsMessage }),
    havePreviousResults && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", { children: [
      props.options.viewMode === _types__WEBPACK_IMPORTED_MODULE_29__.ViewMode.Stat && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.BigValue,
        {
          colorMode: _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.BigValueColorMode.None,
          width: props.width,
          height: props.height,
          graphMode: _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.BigValueGraphMode.None,
          textMode: _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.BigValueTextMode.Auto,
          justifyMode: _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.BigValueJustifyMode.Auto,
          theme: app_core_config__WEBPACK_IMPORTED_MODULE_13__.config.theme2,
          value: { text: `${rules.length}`, numeric: rules.length }
        }
      ),
      props.options.viewMode === _types__WEBPACK_IMPORTED_MODULE_29__.ViewMode.List && props.options.groupMode === _types__WEBPACK_IMPORTED_MODULE_29__.GroupMode.Custom && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_unified_alerting_GroupedView__WEBPACK_IMPORTED_MODULE_30__["default"], { rules, options: parsedOptions }),
      props.options.viewMode === _types__WEBPACK_IMPORTED_MODULE_29__.ViewMode.List && props.options.groupMode === _types__WEBPACK_IMPORTED_MODULE_29__.GroupMode.Default && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _unified_alerting_UngroupedView__WEBPACK_IMPORTED_MODULE_31__["default"],
        {
          rules,
          options: parsedOptions,
          handleInstancesLimit,
          limitInstances,
          hideViewRuleLinkText
        }
      )
    ] }),
    renderLoading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alertlist.unified-alert-list.text-loading", "Loading...") })
  ] });
}
function sortRules(sortOrder, rules) {
  if (sortOrder === _types__WEBPACK_IMPORTED_MODULE_29__.SortOrder.Importance) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.sortBy)(rules, (rule) => app_features_alerting_state_alertDef__WEBPACK_IMPORTED_MODULE_14__["default"].alertStateSortScore[rule.state]);
  } else if (sortOrder === _types__WEBPACK_IMPORTED_MODULE_29__.SortOrder.TimeAsc) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.sortBy)(rules, (rule) => {
      const alertingRule = (0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_24__.getAlertingRule)(rule) ?? void 0;
      return (0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_24__.getFirstActiveAt)(alertingRule) || /* @__PURE__ */ new Date();
    });
  } else if (sortOrder === _types__WEBPACK_IMPORTED_MODULE_29__.SortOrder.TimeDesc) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.sortBy)(rules, (rule) => {
      const alertingRule = (0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_24__.getAlertingRule)(rule) ?? void 0;
      return (0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_24__.getFirstActiveAt)(alertingRule) || /* @__PURE__ */ new Date();
    }).reverse();
  }
  const result = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.sortBy)(rules, (rule) => rule.name.toLowerCase());
  if (sortOrder === _types__WEBPACK_IMPORTED_MODULE_29__.SortOrder.AlphaDesc) {
    result.reverse();
  }
  return result;
}
function filterRules(props, rules) {
  const { options, replaceVariables } = props;
  let filteredRules = [...rules];
  if (options.dashboardAlerts) {
    const dashboardUid = (0,app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_25__.getDashboardSrv)().getCurrent()?.uid;
    filteredRules = filteredRules.filter(
      ({ annotations = {} }) => Object.entries(annotations).some(([key, value]) => key === app_features_alerting_unified_utils_constants__WEBPACK_IMPORTED_MODULE_20__.Annotation.dashboardUID && value === dashboardUid)
    );
  }
  if (options.alertName) {
    const replacedName = replaceVariables(options.alertName);
    filteredRules = filteredRules.filter(
      ({ name }) => name.toLocaleLowerCase().includes(replacedName.toLocaleLowerCase())
    );
  }
  filteredRules = filteredRules.filter((rule) => {
    const alertingRule = (0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_24__.getAlertingRule)(rule);
    if (!alertingRule) {
      return false;
    }
    return options.stateFilter.firing && alertingRule.state === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_27__.PromAlertingRuleState.Firing || options.stateFilter.pending && alertingRule.state === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_27__.PromAlertingRuleState.Pending || options.stateFilter.normal && alertingRule.state === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_27__.PromAlertingRuleState.Inactive || options.stateFilter.recovering && alertingRule.state === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_27__.PromAlertingRuleState.Recovering;
  });
  if (options.folder && options.folder.uid) {
    filteredRules = filteredRules.filter((rule) => {
      return rule.namespace.uid === options.folder.uid;
    });
  }
  if (options.datasource) {
    const isGrafanaDS = options.datasource === app_features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_21__.GRAFANA_DATASOURCE_NAME;
    filteredRules = filteredRules.filter(
      isGrafanaDS ? ({ dataSourceName }) => dataSourceName === app_features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_21__.GRAFANA_RULES_SOURCE_NAME : ({ dataSourceName }) => dataSourceName === options.datasource
    );
  }
  filteredRules = filteredRules.reduce((rules2, rule) => {
    const alertingRule = (0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_24__.getAlertingRule)(rule);
    const filteredAlerts = alertingRule ? (0,_util__WEBPACK_IMPORTED_MODULE_32__.filterAlerts)(
      {
        stateFilter: options.stateFilter,
        alertInstanceLabelFilter: replaceVariables(options.alertInstanceLabelFilter)
      },
      alertingRule.alerts ?? []
    ) : [];
    if (filteredAlerts.length || alertingRule?.state === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_27__.PromAlertingRuleState.Inactive && options.showInactiveAlerts && !options.alertInstanceLabelFilter.length) {
      rules2.push(rule);
    }
    return rules2;
  }, []);
  return filteredRules;
}
const getStyles = (theme) => ({
  cardContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(0.5, 0, 0.25, 0),
    lineHeight: theme.typography.body.lineHeight,
    marginBottom: 0
  }),
  alertRuleList: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    listStyleType: "none"
  }),
  alertRuleItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    background: theme.colors.background.secondary,
    padding: theme.spacing(0.5, 1),
    borderRadius: theme.shape.radius.default,
    marginBottom: theme.spacing(0.5),
    gap: theme.spacing(2)
  }),
  alertName: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }),
  alertNameWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flex: 1,
    flexWrap: "nowrap",
    flexDirection: "column",
    minWidth: "100px"
  }),
  alertLabels: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    "> *": {
      marginRight: theme.spacing(0.5)
    }
  }),
  alertDuration: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontSize: theme.typography.bodySmall.fontSize
  }),
  alertRuleItemText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.bodySmall.fontSize,
    margin: 0
  }),
  alertRuleItemTime: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.secondary,
    fontWeight: "normal",
    whiteSpace: "nowrap"
  }),
  alertRuleItemInfo: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontWeight: "normal",
    flexGrow: 2,
    display: "flex",
    alignItems: "flex-end"
  }),
  noAlertsMessage: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  }),
  alertIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginRight: theme.spacing(0.5)
  }),
  instanceDetails: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    minWidth: "1px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }),
  customGroupDetails: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: theme.spacing(0.5)
  }),
  link: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    wordBreak: "break-all",
    color: theme.colors.primary.text,
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1)
  }),
  hidden: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "none"
  })
});
function UnifiedAlertListPanel(props) {
  const [, gmaReadAllowed] = (0,_features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_28__.useAlertingAbility)(_features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_28__.AlertingAction.ViewAlertRule);
  const [, externalReadAllowed] = (0,_features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_28__.useAlertingAbility)(_features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_28__.AlertingAction.ViewExternalAlertRule);
  if (!gmaReadAllowed && !externalReadAllowed) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Alert, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alertlist.unified-alert-list-panel.title-permission-required", "Permission required"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alertlist.unified-alert-list-panel.body-permission-required", children: "Sorry, you do not have the required permissions to read alert rules." }) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UnifiedAlertList, { ...props });
}


/***/ }),

/***/ "./public/app/plugins/panel/alertlist/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_core_components_NestedFolderPicker_NestedFolderPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/NestedFolderPicker/NestedFolderPicker.tsx");
/* harmony import */ var app_features_datasources_components_picker_DataSourcePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/datasources/components/picker/DataSourcePicker.tsx");
/* harmony import */ var _features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _GroupByWithLoading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/alertlist/GroupByWithLoading.tsx");
/* harmony import */ var _UnifiedAlertList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/alertlist/UnifiedAlertList.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/alertlist/types.ts");











const unifiedAlertList = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelPlugin(_UnifiedAlertList__WEBPACK_IMPORTED_MODULE_9__.UnifiedAlertListPanel).setPanelOptions((builder) => {
  const optionsCategory = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.category-options", "Options")];
  const filterCategory = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.category-filter", "Filter")];
  const alertStateCategory = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.category-alert-state-filter", "Alert state filter")];
  builder.addRadio({
    path: "viewMode",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.name-view-mode", "View mode"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.description-view-mode", "Toggle between list view and stat view"),
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_10__.ViewMode.List,
    settings: {
      options: [
        { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.view-mode-options.label-list", "List"), value: _types__WEBPACK_IMPORTED_MODULE_10__.ViewMode.List },
        { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.view-mode-options.label-stat", "Stat"), value: _types__WEBPACK_IMPORTED_MODULE_10__.ViewMode.Stat }
      ]
    },
    category: optionsCategory
  }).addRadio({
    path: "groupMode",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.name-group-mode", "Group mode"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.description-group-mode", "How alert instances should be grouped"),
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_10__.GroupMode.Default,
    settings: {
      options: [
        {
          value: _types__WEBPACK_IMPORTED_MODULE_10__.GroupMode.Default,
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.group-mode-options.label-default-grouping", "Default grouping")
        },
        {
          value: _types__WEBPACK_IMPORTED_MODULE_10__.GroupMode.Custom,
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.group-mode-options.label-custom-grouping", "Custom grouping")
        }
      ]
    },
    category: optionsCategory
  }).addCustomEditor({
    path: "groupBy",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.name-group-by", "Group by"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.description-group-by", "Filter alerts using label querying"),
    id: "groupBy",
    defaultValue: [],
    showIf: (options) => options.groupMode === _types__WEBPACK_IMPORTED_MODULE_10__.GroupMode.Custom,
    category: optionsCategory,
    editor: (props) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _GroupByWithLoading__WEBPACK_IMPORTED_MODULE_8__.GroupBy,
        {
          id: props.id ?? "groupBy",
          defaultValue: props.value.map((value) => ({ label: value, value })),
          onChange: props.onChange,
          dataSource: props.context.options.datasource
        }
      );
    }
  }).addNumberInput({
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.name-max-items", "Max items"),
    path: "maxItems",
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.description-max-items", "Maximum alerts to display"),
    defaultValue: 20,
    category: optionsCategory
  }).addSelect({
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.name-sort-order", "Sort order"),
    path: "sortOrder",
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.description-sort-order", "Sort order of alerts and alert instances"),
    settings: {
      options: [
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.sort-order-options.label-alphabetical-asc", "Alphabetical (asc)"),
          value: _types__WEBPACK_IMPORTED_MODULE_10__.SortOrder.AlphaAsc
        },
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.sort-order-options.label-alphabetical-desc", "Alphabetical (desc)"),
          value: _types__WEBPACK_IMPORTED_MODULE_10__.SortOrder.AlphaDesc
        },
        { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.sort-order-options.label-importance", "Importance"), value: _types__WEBPACK_IMPORTED_MODULE_10__.SortOrder.Importance },
        { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.sort-order-options.label-time-asc", "Time (asc)"), value: _types__WEBPACK_IMPORTED_MODULE_10__.SortOrder.TimeAsc },
        { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.sort-order-options.label-time-desc", "Time (desc)"), value: _types__WEBPACK_IMPORTED_MODULE_10__.SortOrder.TimeDesc }
      ]
    },
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_10__.SortOrder.AlphaAsc,
    category: optionsCategory
  }).addBooleanSwitch({
    path: "dashboardAlerts",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.name-alerts-linked-to-dashboard", "Alerts linked to this dashboard"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.descriptino-alerts-linked-to-dashboard", "Only show alerts linked to this dashboard"),
    defaultValue: false,
    category: optionsCategory
  }).addTextInput({
    path: "alertName",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.name-alert-name", "Alert name"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.description-alert-name", "Filter for alerts containing this text"),
    defaultValue: "",
    category: filterCategory
  }).addTextInput({
    path: "alertInstanceLabelFilter",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.name-alert-instance-label", "Alert instance label"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
      "alertlist.description-alert-instance-label",
      'Filter alert instances using label querying, ex: {severity="critical", instance=~"cluster-us-.+"}'
    ),
    defaultValue: "",
    category: filterCategory
  }).addCustomEditor({
    path: "datasource",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.name-datasource", "Datasource"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.description-datasource", "Filter from alert source"),
    id: "datasource",
    defaultValue: null,
    editor: function RenderDatasourcePicker({ id, ...props }) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { gap: 1, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          app_features_datasources_components_picker_DataSourcePicker__WEBPACK_IMPORTED_MODULE_6__.DataSourcePicker,
          {
            ...props,
            inputId: id,
            type: _features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_7__.SUPPORTED_RULE_SOURCE_TYPES,
            noDefault: true,
            current: props.value,
            onChange: (ds) => {
              if (ds.uid !== "grafana") {
                props.context.options.folder = null;
              }
              return props.onChange(ds.name);
            }
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { variant: "secondary", onClick: () => props.onChange(null), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alertlist.unified-alert-list.clear", children: "Clear" }) })
      ] });
    },
    category: filterCategory
  }).addCustomEditor({
    showIf: (options) => options.datasource === _features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_7__.GRAFANA_DATASOURCE_NAME || !Boolean(options.datasource),
    path: "folder",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.name-folder", "Folder"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
      "alertlist.description-folder",
      "Filter for alerts in the selected folder (for Grafana-managed alert rules only)"
    ),
    id: "folder",
    defaultValue: null,
    editor: function RenderFolderPicker(props) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        app_core_components_NestedFolderPicker_NestedFolderPicker__WEBPACK_IMPORTED_MODULE_5__.NestedFolderPicker,
        {
          clearable: true,
          showRootFolder: false,
          ...props,
          onChange: (uid, title) => props.onChange({ uid, title }),
          value: props.value?.uid,
          permission: "view"
        }
      );
    },
    category: filterCategory
  }).addBooleanSwitch({
    path: "showInactiveAlerts",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.name-show-inactive-alerts", "Show alerts with 0 instances"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
      "alertlist.description-show-inactive-alerts",
      "Include alert rules which have 0 (zero) instances. Because these rules have no instances, they remain hidden if the Alert instance label filter is configured."
    ),
    defaultValue: false,
    category: filterCategory
  }).addBooleanSwitch({
    path: "stateFilter.firing",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.name-firing", "Alerting / Firing"),
    defaultValue: true,
    category: alertStateCategory
  }).addBooleanSwitch({
    path: "stateFilter.pending",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.name-pending", "Pending"),
    defaultValue: true,
    category: alertStateCategory
  }).addBooleanSwitch({
    path: "stateFilter.recovering",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.name-recovering", "Recovering"),
    defaultValue: true,
    category: alertStateCategory
  }).addBooleanSwitch({
    path: "stateFilter.noData",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.name-no-data", "No Data"),
    defaultValue: false,
    category: alertStateCategory
  }).addBooleanSwitch({
    path: "stateFilter.normal",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.name-normal", "Normal"),
    defaultValue: false,
    category: alertStateCategory
  }).addBooleanSwitch({
    path: "stateFilter.error",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alertlist.name-error", "Error"),
    defaultValue: true,
    category: alertStateCategory
  });
});
const plugin = unifiedAlertList;


/***/ }),

/***/ "./public/app/plugins/panel/alertlist/unified-alerting/GroupedView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UNGROUPED_KEY: () => (/* binding */ UNGROUPED_KEY),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_alerting_unified_components_AlertLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabel.tsx");
/* harmony import */ var app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _AlertInstances__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/alertlist/AlertInstances.tsx");
/* harmony import */ var _UnifiedAlertList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/alertlist/UnifiedAlertList.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/alertlist/util.ts");









const UNGROUPED_KEY = "__ungrouped__";
const GroupedModeView = ({ rules, options }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_UnifiedAlertList__WEBPACK_IMPORTED_MODULE_6__.getStyles);
  const groupBy = options.groupBy;
  const groupedRules = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const groupedRules2 = /* @__PURE__ */ new Map();
    const hasInstancesWithMatchingLabels = (rule) => groupBy ? alertHasEveryLabelForCombinedRules(rule, groupBy) : true;
    rules.forEach((rule) => {
      const alertingRule = (0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_4__.getAlertingRule)(rule);
      const hasInstancesMatching = hasInstancesWithMatchingLabels(rule);
      (alertingRule?.alerts ?? []).forEach((alert) => {
        const mapKey = hasInstancesMatching ? createMapKey(groupBy, alert.labels) : UNGROUPED_KEY;
        const existingAlerts = groupedRules2.get(mapKey)?.alerts ?? [];
        groupedRules2.set(mapKey, { rule, alerts: [...existingAlerts, alert] });
      });
    });
    const ungrouped = groupedRules2.get(UNGROUPED_KEY)?.alerts ?? [];
    groupedRules2.delete(UNGROUPED_KEY);
    groupedRules2.set(UNGROUPED_KEY, { alerts: ungrouped });
    const filteredGroupedRules = Array.from(groupedRules2.entries()).reduce(
      (acc, [groupKey, { rule, alerts: groupAlerts }]) => {
        const filteredAlerts = (0,_util__WEBPACK_IMPORTED_MODULE_7__.filterAlerts)(options, groupAlerts);
        if (filteredAlerts.length > 0) {
          acc.set(groupKey, { rule, alerts: filteredAlerts });
        }
        return acc;
      },
      /* @__PURE__ */ new Map()
    );
    return filteredGroupedRules;
  }, [groupBy, rules, options]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: Array.from(groupedRules).map(([key, { rule, alerts }]) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { className: styles.alertRuleItem, "data-testid": key, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.customGroupDetails, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.alertLabels, children: [
      key !== UNGROUPED_KEY && parseMapKey(key).map(([key2, value]) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_alerting_unified_components_AlertLabel__WEBPACK_IMPORTED_MODULE_3__.AlertLabel, { labelKey: key2, value }, key2)),
      key === UNGROUPED_KEY && "No grouping"
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertInstances__WEBPACK_IMPORTED_MODULE_5__.AlertInstances, { rule, alerts, options })
  ] }) }, key)) });
};
function createMapKey(groupBy, labels) {
  return new URLSearchParams(groupBy.map((key) => [key, labels[key]])).toString();
}
function parseMapKey(key) {
  return [...new URLSearchParams(key)];
}
function alertHasEveryLabelForCombinedRules(rule, groupByKeys) {
  const alertingRule = (0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_4__.getAlertingRule)(rule);
  return groupByKeys.every((key) => {
    return (alertingRule?.alerts ?? []).some((alert) => alert.labels[key]);
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GroupedModeView);


/***/ }),

/***/ "./public/app/plugins/panel/alertlist/unified-alerting/UngroupedView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useLocation.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/datetime/durationutil.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_alerting_state_alertDef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/state/alertDef.ts");
/* harmony import */ var app_features_alerting_unified_components_Spacer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/Spacer.tsx");
/* harmony import */ var app_features_alerting_unified_utils_rule_id__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var app_features_alerting_unified_utils_url__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _AlertInstances__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/panel/alertlist/AlertInstances.tsx");
/* harmony import */ var _UnifiedAlertList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/panel/alertlist/UnifiedAlertList.tsx");
















function getGrafanaInstancesTotal(totals) {
  return Object.values(totals).filter((total) => total !== void 0).reduce((total, currentTotal) => total + currentTotal, 0);
}
const UngroupedModeView = ({ rules, options, handleInstancesLimit, limitInstances, hideViewRuleLinkText }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(_UnifiedAlertList__WEBPACK_IMPORTED_MODULE_16__.getStyles);
  const stateStyle = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStateTagStyles);
  const { href: returnTo } = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const rulesToDisplay = rules.length <= options.maxItems ? rules : rules.slice(0, options.maxItems);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ol", { className: styles.alertRuleList, children: rulesToDisplay.map((ruleWithLocation, index) => {
    const { namespaceName, groupName, dataSourceName } = ruleWithLocation;
    const alertingRule = app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_11__.prometheusRuleType.alertingRule(ruleWithLocation.promRule) ? ruleWithLocation.promRule : void 0;
    const firstActiveAt = (0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_11__.getFirstActiveAt)(alertingRule);
    const indentifier = (0,app_features_alerting_unified_utils_rule_id__WEBPACK_IMPORTED_MODULE_10__.fromCombinedRule)(ruleWithLocation.dataSourceName, ruleWithLocation);
    const strIndentifier = (0,app_features_alerting_unified_utils_rule_id__WEBPACK_IMPORTED_MODULE_10__.stringifyIdentifier)(indentifier);
    const grafanaInstancesTotal = ruleWithLocation.dataSourceName === _features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.GRAFANA_RULES_SOURCE_NAME ? getGrafanaInstancesTotal(ruleWithLocation.instanceTotals) : void 0;
    const grafanaFilteredInstancesTotal = ruleWithLocation.dataSourceName === _features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.GRAFANA_RULES_SOURCE_NAME ? getGrafanaInstancesTotal(ruleWithLocation.filteredInstanceTotals) : void 0;
    const href = (0,app_features_alerting_unified_utils_url__WEBPACK_IMPORTED_MODULE_12__.createRelativeUrl)(
      `/alerting/${encodeURIComponent(dataSourceName)}/${encodeURIComponent(strIndentifier)}/view`,
      { returnTo: returnTo ?? "" }
    );
    if (alertingRule) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        "li",
        {
          className: styles.alertRuleItem,
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: stateStyle.icon, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon,
              {
                name: app_features_alerting_state_alertDef__WEBPACK_IMPORTED_MODULE_8__["default"].getStateDisplayModel(alertingRule.state).iconClass,
                className: stateStyle[(0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_11__.alertStateToState)(alertingRule.state)],
                size: "lg"
              }
            ) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.alertNameWrapper, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.instanceDetails, children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "row", gap: 1, children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.alertName, title: ruleWithLocation.name, children: ruleWithLocation.name }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_alerting_unified_components_Spacer__WEBPACK_IMPORTED_MODULE_9__.Spacer, {}),
                  href && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    "a",
                    {
                      href,
                      target: "__blank",
                      className: styles.link,
                      rel: "noopener",
                      "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alertlist.ungrouped-mode-view.aria-label-view-alert-rule", "View alert rule"),
                      children: [
                        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)({ [styles.hidden]: hideViewRuleLinkText }), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alertlist.ungrouped-mode-view.view-alert-rule", children: "View alert rule" }) }),
                        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "external-link-alt", size: "sm" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.alertDuration, children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: stateStyle[(0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_11__.alertStateToState)(alertingRule.state)], children: (0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_11__.alertStateToReadable)(alertingRule.state) }),
                  " ",
                  firstActiveAt && alertingRule.state !== app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_13__.PromAlertingRuleState.Inactive && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans,
                    {
                      i18nKey: "alertlist.ungrouped-mode-view.active-for",
                      values: {
                        duration: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.intervalToAbbreviatedDurationString)({ start: firstActiveAt, end: Date.now() })
                      },
                      children: [
                        "for ",
                        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "{{duration}}" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _AlertInstances__WEBPACK_IMPORTED_MODULE_15__.AlertInstances,
                {
                  rule: ruleWithLocation,
                  alerts: alertingRule.alerts ?? [],
                  options,
                  grafanaTotalInstances: grafanaInstancesTotal,
                  grafanaFilteredInstancesTotal,
                  handleInstancesLimit,
                  limitInstances
                }
              )
            ] })
          ]
        },
        `alert-${namespaceName}-${groupName}-${ruleWithLocation.name}-${index}`
      );
    } else {
      return null;
    }
  }) }) });
};
const getStateTagStyles = (theme) => ({
  icon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: theme.spacing(2.5),
    alignSelf: "flex-start"
  }),
  good: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.success.main
  }),
  bad: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.error.main
  }),
  warning: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.warning.main
  }),
  neutral: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.secondary.main
  }),
  info: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.primary.main
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UngroupedModeView);


/***/ }),

/***/ "./public/app/plugins/panel/alertlist/util.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterAlerts: () => (/* binding */ filterAlerts)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_features_alerting_unified_utils_alertmanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var app_features_alerting_unified_utils_matchers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/matchers.ts");
/* harmony import */ var app_types_unified_alerting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/unified-alerting.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");






function hasLabelFilter(alertInstanceLabelFilter, labels) {
  const matchers = (0,app_features_alerting_unified_utils_matchers__WEBPACK_IMPORTED_MODULE_2__.parsePromQLStyleMatcherLooseSafe)(alertInstanceLabelFilter);
  return (0,app_features_alerting_unified_utils_alertmanager__WEBPACK_IMPORTED_MODULE_1__.labelsMatchMatchers)(labels, matchers);
}
function filterAlerts(options, alerts) {
  const { stateFilter, alertInstanceLabelFilter } = options;
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(stateFilter)) {
    return alerts;
  }
  return alerts.filter((alert) => {
    return (stateFilter.firing && ((0,app_types_unified_alerting__WEBPACK_IMPORTED_MODULE_3__.hasAlertState)(alert, app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__.GrafanaAlertState.Alerting) || (0,app_types_unified_alerting__WEBPACK_IMPORTED_MODULE_3__.hasAlertState)(alert, app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__.PromAlertingRuleState.Firing)) || stateFilter.pending && ((0,app_types_unified_alerting__WEBPACK_IMPORTED_MODULE_3__.hasAlertState)(alert, app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__.GrafanaAlertState.Pending) || (0,app_types_unified_alerting__WEBPACK_IMPORTED_MODULE_3__.hasAlertState)(alert, app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__.PromAlertingRuleState.Pending)) || stateFilter.recovering && ((0,app_types_unified_alerting__WEBPACK_IMPORTED_MODULE_3__.hasAlertState)(alert, app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__.GrafanaAlertState.Recovering) || (0,app_types_unified_alerting__WEBPACK_IMPORTED_MODULE_3__.hasAlertState)(alert, app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__.PromAlertingRuleState.Recovering)) || stateFilter.noData && (0,app_types_unified_alerting__WEBPACK_IMPORTED_MODULE_3__.hasAlertState)(alert, app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__.GrafanaAlertState.NoData) || stateFilter.normal && (0,app_types_unified_alerting__WEBPACK_IMPORTED_MODULE_3__.hasAlertState)(alert, app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__.GrafanaAlertState.Normal) || stateFilter.error && (0,app_types_unified_alerting__WEBPACK_IMPORTED_MODULE_3__.hasAlertState)(alert, app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__.GrafanaAlertState.Error) || stateFilter.inactive && (0,app_types_unified_alerting__WEBPACK_IMPORTED_MODULE_3__.hasAlertState)(alert, app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__.PromAlertingRuleState.Inactive)) && (alertInstanceLabelFilter ? hasLabelFilter(options.alertInstanceLabelFilter, alert.labels) : true);
  });
}


/***/ })

}]);
//# sourceMappingURL=alertListPanel.f25f9f0c881cee34c4e5.js.map