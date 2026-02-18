"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertingGroupDetails"],{

/***/ "./packages/grafana-alerting/src/grafana/rules/components/state/StateIcon.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateIcon: () => (/* binding */ StateIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");






const icons = {
  normal: "check-circle",
  pending: "circle",
  recovering: "exclamation-circle",
  firing: "exclamation-circle",
  unknown: "question-circle"
};
const color = {
  normal: "success",
  pending: "warning",
  recovering: "warning",
  firing: "error",
  unknown: "secondary"
};
const stateNames = {
  normal: "Normal",
  pending: "Pending",
  firing: "Firing",
  recovering: "Recovering",
  unknown: "Unknown"
};
const operationIcons = {
  creating: "plus-circle",
  deleting: "minus-circle"
};
const ICON_SIZE = 15;
const StateIcon = (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(function StateIcon2({
  state,
  health,
  type = "alerting",
  isPaused = false,
  operation
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useTheme2)();
  let iconName = state ? icons[state] : "circle";
  let iconColor = state ? color[state] : "secondary";
  let stateName = state ? stateNames[state] : "unknown";
  if (type === "recording") {
    iconName = "record-audio";
    iconColor = "success";
    stateName = "Recording";
  }
  if (health === "nodata") {
    iconName = "exclamation-triangle";
    iconColor = "warning";
    stateName = "Insufficient data";
  }
  if (health === "error") {
    iconName = "times-circle";
    iconColor = "error";
    stateName = "Failed to evaluate rule";
  }
  if (isPaused) {
    iconName = "pause-circle";
    iconColor = "warning";
    stateName = "Paused";
  }
  if (operation) {
    iconName = operationIcons[operation];
    iconColor = "secondary";
    stateName = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.upperFirst)(operation);
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tooltip, { content: stateName, placement: "right", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { color: iconColor, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.iconsContainer, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { name: iconName, width: ICON_SIZE, height: ICON_SIZE, "aria-label": stateName }),
    operation && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "svg",
      {
        width: ICON_SIZE,
        height: ICON_SIZE,
        viewBox: "0 0 20 20",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        className: styles.spinning,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          "circle",
          {
            r: ICON_SIZE / 2,
            cx: "10",
            cy: "10",
            stroke: theme.colors.background.primary,
            strokeWidth: "2",
            strokeLinecap: "round",
            fill: "transparent",
            strokeOpacity: 0.85,
            strokeDasharray: "20px"
          }
        )
      }
    )
  ] }) }) }) });
});
const spin = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.keyframes)({
  "0%": {
    transform: "rotate(0deg)"
  },
  "50%": {
    transform: "rotate(180deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
const getStyles = (theme) => ({
  iconsContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "relative",
    width: ICON_SIZE,
    height: ICON_SIZE,
    "> *": {
      position: "absolute"
    }
  }),
  spinning: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    [theme.transitions.handleMotion("no-preference")]: {
      animationName: spin,
      animationIterationCount: "infinite",
      animationDuration: "1s",
      animationTimingFunction: "linear"
    }
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/api/prometheusApi.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prometheusApi: () => (/* binding */ prometheusApi),
/* harmony export */   usePopulateGrafanaPrometheusApiCache: () => (/* binding */ usePopulateGrafanaPrometheusApiCache)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _alertingApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/api/alertingApi.ts");
/* harmony import */ var _prometheus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/api/prometheus.ts");






const prometheusApi = _alertingApi__WEBPACK_IMPORTED_MODULE_3__.alertingApi.injectEndpoints({
  endpoints: (build) => ({
    getGroups: build.query({
      query: ({
        ruleSource,
        namespace,
        groupName,
        ruleName,
        groupLimit,
        excludeAlerts,
        groupNextToken,
        notificationOptions
      }) => {
        if (ruleSource.uid === _utils_datasource__WEBPACK_IMPORTED_MODULE_2__.GRAFANA_RULES_SOURCE_NAME) {
          throw new Error("Please use getGrafanaGroups endpoint for grafana rules");
        }
        return {
          url: `api/prometheus/${ruleSource.uid}/api/v1/rules`,
          params: {
            file: namespace,
            // Mimir
            "file[]": namespace,
            // Prometheus
            rule_group: groupName,
            // Mimir
            "rule_group[]": groupName,
            // Prometheus
            rule_name: ruleName,
            // Mimir
            "rule_name[]": ruleName,
            // Prometheus
            exclude_alerts: excludeAlerts?.toString(),
            group_limit: groupLimit?.toFixed(0),
            group_next_token: groupNextToken
          },
          notificationOptions
        };
      },
      transformResponse: (response) => {
        return { ...response, data: { ...response.data, groups: response.data.groups.map(_prometheus__WEBPACK_IMPORTED_MODULE_4__.normalizeRuleGroup) } };
      }
    }),
    getGrafanaGroups: build.query({
      query: ({
        folderUid,
        groupName,
        ruleName,
        contactPoint,
        health,
        state,
        groupLimit,
        limitAlerts,
        groupNextToken
      }) => ({
        url: `api/prometheus/grafana/api/v1/rules`,
        params: {
          folder_uid: folderUid,
          rule_group: groupName,
          rule_name: ruleName,
          receiver_name: contactPoint,
          health,
          state,
          limit_alerts: limitAlerts,
          group_limit: groupLimit?.toFixed(0),
          group_next_token: groupNextToken
        }
      }),
      providesTags: (_result, _error, { folderUid, groupName, ruleName }) => {
        const folderKey = folderUid ?? "__any__";
        const groupKey = groupName ?? "__any__";
        const ruleKey = ruleName ?? "__any__";
        return [{ type: "GrafanaPrometheusGroups", id: `grafana/${folderKey}/${groupKey}/${ruleKey}` }];
      }
    })
  })
});
function usePopulateGrafanaPrometheusApiCache() {
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const populateGroupsResponseCache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (groups) => {
      dispatch(
        prometheusApi.util.upsertQueryEntries(
          groups.map((group) => ({
            endpointName: "getGrafanaGroups",
            arg: { folderUid: group.folderUid, groupName: group.name, limitAlerts: 0 },
            value: { data: { groups: [group] }, status: "success" }
          }))
        )
      );
    },
    [dispatch]
  );
  return { populateGroupsResponseCache };
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/export/GrafanaRuleGroupExporter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrafanaRuleGroupExporter: () => (/* binding */ GrafanaRuleGroupExporter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");
/* harmony import */ var _FileExportPreview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/export/FileExportPreview.tsx");
/* harmony import */ var _GrafanaExportDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/export/GrafanaExportDrawer.tsx");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/export/providers.ts");









function GrafanaRuleGroupExporter({ folderUid, groupName, onClose }) {
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("yaml");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _GrafanaExportDrawer__WEBPACK_IMPORTED_MODULE_6__.GrafanaExportDrawer,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.grafana-rule-group-exporter.title-drawer", "Export {{groupName}} rules", { groupName }),
      activeTab,
      onTabChange: setActiveTab,
      onClose,
      formatProviders: Object.values(_providers__WEBPACK_IMPORTED_MODULE_7__.allGrafanaExportProviders),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        GrafanaRuleGroupExportPreview,
        {
          folderUid,
          groupName,
          exportFormat: activeTab,
          onClose
        }
      )
    }
  );
}
function GrafanaRuleGroupExportPreview({
  folderUid,
  groupName,
  exportFormat,
  onClose
}) {
  const { currentData: ruleGroupTextDefinition = "", isFetching } = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_4__.alertRuleApi.endpoints.exportRules.useQuery({
    folderUid,
    group: groupName,
    format: exportFormat
  });
  if (isFetching) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.grafana-rule-group-export-preview.text-loading", "Loading....") });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _FileExportPreview__WEBPACK_IMPORTED_MODULE_5__.FileExportPreview,
    {
      format: exportFormat,
      textDefinition: ruleGroupTextDefinition,
      downloadFileName: groupName,
      onClose
    }
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/group-details/GroupDetailsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/Menu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/ErrorBoundary/ErrorBoundary.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Dropdown/Dropdown.tsx");
/* harmony import */ var app_core_components_PageNotFound_EntityNotFound__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/components/PageNotFound/EntityNotFound.tsx");
/* harmony import */ var app_types_unified_alerting__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/types/unified-alerting.ts");
/* harmony import */ var _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");
/* harmony import */ var _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/api/featureDiscoveryApi.ts");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_export_GrafanaRuleGroupExporter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/export/GrafanaRuleGroupExporter.tsx");
/* harmony import */ var _hooks_useFolder__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFolder.ts");
/* harmony import */ var _rule_editor_formDefaults__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/rule-editor/formDefaults.ts");
/* harmony import */ var _rule_list_DataSourceGroupLoader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/DataSourceGroupLoader.tsx");
/* harmony import */ var _rule_list_GrafanaGroupLoader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/GrafanaGroupLoader.tsx");
/* harmony import */ var _utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/utils/accessControlHooks.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/utils/navigation.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/alerting/unified/group-details/Title.tsx");
























const { useDiscoverDsFeaturesQuery } = _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_15__.featureDiscoveryApi;
const { usePrometheusRuleNamespacesQuery, useGetRuleGroupForNamespaceQuery } = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_14__.alertRuleApi;
function GroupDetailsPage() {
  const { dataSourceUid = "", namespaceId = "", groupName = "" } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__.useParams)();
  const isGrafanaRuleGroup = dataSourceUid === _utils_datasource__WEBPACK_IMPORTED_MODULE_23__.GRAFANA_RULES_SOURCE_NAME;
  const { folder, loading: isFolderLoading } = (0,_hooks_useFolder__WEBPACK_IMPORTED_MODULE_18__.useFolder)(isGrafanaRuleGroup ? namespaceId : "");
  const {
    data: dsFeatures,
    isLoading: isDsFeaturesLoading,
    error: dsFeaturesError
  } = useDiscoverDsFeaturesQuery({ uid: isGrafanaRuleGroup ? app_types_unified_alerting__WEBPACK_IMPORTED_MODULE_13__.GrafanaRulesSourceSymbol : dataSourceUid });
  const {
    data: promGroup,
    isLoading: isRuleNamespacesLoading,
    error: ruleNamespacesError
  } = usePrometheusRuleNamespacesQuery(
    dsFeatures && !dsFeatures.rulerConfig ? { ruleSourceName: dsFeatures?.name ?? "", namespace: namespaceId, groupName } : _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__.skipToken,
    {
      selectFromResult: (result) => ({
        ...result,
        data: result.data?.[0]?.groups.find((g) => g.name === groupName)
      })
    }
  );
  const {
    data: rulerGroup,
    isLoading: isRuleGroupLoading,
    error: ruleGroupError
  } = useGetRuleGroupForNamespaceQuery(
    dsFeatures?.rulerConfig ? { rulerConfig: dsFeatures?.rulerConfig, namespace: namespaceId, group: groupName } : _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__.skipToken
  );
  const ruleSourceName = isGrafanaRuleGroup ? _utils_datasource__WEBPACK_IMPORTED_MODULE_23__.GRAFANA_RULES_SOURCE_NAME : (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_23__.getDataSourceByUid)(dataSourceUid)?.name;
  const isLoading = isFolderLoading || isDsFeaturesLoading || isRuleNamespacesLoading || isRuleGroupLoading;
  const groupInterval = promGroup?.interval ? (0,_utils_time__WEBPACK_IMPORTED_MODULE_27__.formatPrometheusDuration)(promGroup.interval * 1e3) : rulerGroup?.interval ?? _rule_editor_formDefaults__WEBPACK_IMPORTED_MODULE_19__.DEFAULT_GROUP_EVALUATION_INTERVAL;
  const namespaceName = folder?.title ?? namespaceId;
  const namespaceUrl = (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_25__.createListFilterLink)([["namespace", namespaceName]]);
  const namespaceLabel = isGrafanaRuleGroup ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.group-details.folder", "Folder") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.group-details.namespace", "Namespace");
  const namespaceValue = folder ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.TextLink, { href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_24__.makeFolderLink)(folder.uid), inline: false, children: folder.title }) : namespaceId;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_16__.AlertingPageWrapper,
    {
      pageNav: {
        text: groupName,
        parentItem: {
          text: namespaceName,
          url: namespaceUrl
        }
      },
      renderTitle: (title) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Title__WEBPACK_IMPORTED_MODULE_28__.Title, { name: title }),
      subTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.titles.group-view.subtitle", "Manage alert rules, recording rules and evaluation interval"),
      info: [
        { label: namespaceLabel, value: namespaceValue },
        { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.group-details.interval", "Interval"), value: groupInterval }
      ],
      navId: "alert-list",
      isLoading,
      actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: dsFeatures && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        GroupActions,
        {
          dsFeatures,
          namespaceId,
          groupName,
          folder,
          rulerGroup
        }
      ) }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        Boolean(dsFeaturesError) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert,
          {
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.group-details.ds-features-error", "Error loading data source details"),
            bottomSpacing: 0,
            topSpacing: 2,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_24__.stringifyErrorLike)(dsFeaturesError) })
          }
        ),
        Boolean(ruleNamespacesError || ruleGroupError) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert,
          {
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.group-details.group-loading-error", "Error loading the group"),
            bottomSpacing: 0,
            topSpacing: 2,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_24__.stringifyErrorLike)(ruleNamespacesError || ruleGroupError) })
          }
        ),
        !promGroup && !rulerGroup && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_PageNotFound_EntityNotFound__WEBPACK_IMPORTED_MODULE_12__.EntityNotFound, { entity: `${namespaceId}/${groupName}` }),
        ruleSourceName && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { role: "tree", children: isGrafanaRuleGroup ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _rule_list_GrafanaGroupLoader__WEBPACK_IMPORTED_MODULE_21__.GrafanaGroupLoader,
          {
            groupIdentifier: { groupName, groupOrigin: "grafana", namespace: { uid: namespaceId } },
            namespaceName
          }
        ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _rule_list_DataSourceGroupLoader__WEBPACK_IMPORTED_MODULE_20__.DataSourceGroupLoader,
          {
            groupIdentifier: {
              groupName,
              groupOrigin: "datasource",
              namespace: {
                name: namespaceName
              },
              rulesSource: {
                name: ruleSourceName,
                uid: dataSourceUid,
                ruleSourceType: "datasource"
              }
            }
          }
        ) })
      ] })
    }
  );
}
function GroupActions({ dsFeatures, namespaceId, groupName, folder, rulerGroup }) {
  const { canEditRules } = (0,_utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_22__.useRulesAccess)();
  const [isExporting, setIsExporting] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const isGrafanaSource = dsFeatures.uid === _utils_datasource__WEBPACK_IMPORTED_MODULE_23__.GRAFANA_RULES_SOURCE_NAME;
  const canSaveInFolder = isGrafanaSource ? Boolean(folder?.canSave) : true;
  const isFederated = rulerGroup ? (0,_utils_rules__WEBPACK_IMPORTED_MODULE_26__.isFederatedRuleGroup)(rulerGroup) : false;
  const isProvisioned = rulerGroup ? (0,_utils_rules__WEBPACK_IMPORTED_MODULE_26__.isProvisionedRuleGroup)(rulerGroup) : false;
  const canEdit = Boolean(dsFeatures.rulerConfig) && canEditRules(dsFeatures.name) && canSaveInFolder && !isFederated && !isProvisioned;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    isGrafanaSource && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button, { onClick: () => setIsExporting(true), icon: "file-download", variant: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.group-details.export", children: "Export" }) }),
    canEdit && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.LinkButton,
        {
          icon: "pen",
          href: _utils_navigation__WEBPACK_IMPORTED_MODULE_25__.groups.editPageLink(dsFeatures.uid, namespaceId, groupName, { includeReturnTo: true }),
          variant: "secondary",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.group-details.edit", children: "Edit" })
        }
      ),
      isGrafanaSource && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Dropdown,
        {
          overlay: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Menu, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Menu.Item,
              {
                icon: "bell",
                url: _utils_navigation__WEBPACK_IMPORTED_MODULE_25__.groups.newAlertRuleLink(folder?.title, folder?.uid, groupName),
                label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.alert-rule.term", "Alert rule")
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Menu.Item,
              {
                icon: "record-audio",
                url: _utils_navigation__WEBPACK_IMPORTED_MODULE_25__.groups.newRecordingRuleLink(folder?.title, folder?.uid, groupName),
                label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.recording-rule.term", "Recording rule")
              }
            )
          ] }),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button, { variant: "primary", children: [
            (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.group-details.new", "New"),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "angle-down" })
          ] })
        }
      )
    ] }),
    folder && isExporting && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_export_GrafanaRuleGroupExporter__WEBPACK_IMPORTED_MODULE_17__.GrafanaRuleGroupExporter, { folderUid: folder.uid, groupName, onClose: () => setIsExporting(false) })
  ] });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.withErrorBoundary)(GroupDetailsPage, { style: "page" }));


/***/ }),

/***/ "./public/app/features/alerting/unified/group-details/Title.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Title: () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _hooks_useReturnTo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useReturnTo.ts");





const Title = ({ name }) => {
  const { returnTo } = (0,_hooks_useReturnTo__WEBPACK_IMPORTED_MODULE_5__.useReturnTo)("/alerting/list");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "row", gap: 1, minWidth: 0, alignItems: "center", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton,
      {
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.group-details.title.back", "Back to alerting"),
        variant: "secondary",
        icon: "angle-left",
        href: returnTo
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { element: "h1", truncate: true, children: name })
  ] });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/DataSourceGroupLoader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataSourceGroupLoader: () => (/* binding */ DataSourceGroupLoader),
/* harmony export */   RulerBasedGroupRules: () => (/* binding */ RulerBasedGroupRules)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");
/* harmony import */ var _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/api/featureDiscoveryApi.ts");
/* harmony import */ var _api_prometheusApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/api/prometheusApi.ts");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/hooks/usePagination.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _DataSourceRuleListItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/DataSourceRuleListItem.tsx");
/* harmony import */ var _components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/AlertRuleListItem.tsx");
/* harmony import */ var _components_AlertRuleListItemLoader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/AlertRuleListItemLoader.tsx");
/* harmony import */ var _components_LoadMoreButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/LoadMoreButton.tsx");
/* harmony import */ var _components_RuleActionsButtons_V2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/RuleActionsButtons.V2.tsx");
/* harmony import */ var _ruleMatching__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/ruleMatching.ts");





















const { useDiscoverDsFeaturesQuery } = _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_9__.featureDiscoveryApi;
const { useGetGroupsQuery } = _api_prometheusApi__WEBPACK_IMPORTED_MODULE_10__.prometheusApi;
const { useGetRuleGroupForNamespaceQuery } = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_8__.alertRuleApi;
function DataSourceGroupLoader({ groupIdentifier, expectedRulesCount = 3 }) {
  const { namespace, groupName } = groupIdentifier;
  const namespaceName = namespace.name;
  const {
    data: promResponse,
    isLoading: isPromResponseLoading,
    isError: isPromResponseError
  } = useGetGroupsQuery(
    {
      ruleSource: { uid: groupIdentifier.rulesSource.uid },
      namespace: namespaceName,
      groupName
    },
    { pollingInterval: _utils_constants__WEBPACK_IMPORTED_MODULE_12__.RULE_LIST_POLL_INTERVAL_MS }
  );
  const {
    data: dsFeatures,
    isLoading: isDsFeaturesLoading,
    isError: isDsFeaturesError
  } = useDiscoverDsFeaturesQuery({
    uid: groupIdentifier.rulesSource.uid
  });
  const {
    data: rulerGroup,
    error: rulerGroupError,
    isFetching: isRulerGroupFetching,
    isError: isRulerGroupError
  } = useGetRuleGroupForNamespaceQuery(
    dsFeatures?.rulerConfig ? {
      rulerConfig: dsFeatures?.rulerConfig,
      namespace: namespaceName,
      group: groupName
    } : _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_2__.skipToken
  );
  const isLoading = isPromResponseLoading || isDsFeaturesLoading || isRulerGroupFetching;
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: Array.from({ length: expectedRulesCount }).map((_, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertRuleListItemLoader__WEBPACK_IMPORTED_MODULE_17__.AlertRuleListItemSkeleton, {}, index)) });
  }
  const isError = isPromResponseError || isDsFeaturesError || isRulerGroupError;
  if (isError) {
    if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.isFetchError)(rulerGroupError) && rulerGroupError.status === 404) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert, { severity: "warning", title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.ds-group-loader.group-deleting", "The group is being deleted") });
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "alerting.ds-group-loader.group-load-failed",
          "Failed to load rules from group {{ groupName }} in {{ namespaceName }}",
          { groupName, namespaceName }
        ),
        severity: "error"
      }
    );
  }
  const promGroup = promResponse?.data.groups.find((g) => g.file === namespaceName && g.name === groupName);
  if (dsFeatures?.rulerConfig && rulerGroup && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_14__.isCloudRulerGroup)(rulerGroup) && promGroup) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      RulerBasedGroupRules,
      {
        groupIdentifier,
        promGroup,
        rulerGroup,
        application: dsFeatures.application
      }
    );
  }
  if (promGroup) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: promGroup.rules.map((rule) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _DataSourceRuleListItem__WEBPACK_IMPORTED_MODULE_15__.DataSourceRuleListItem,
      {
        rule,
        groupIdentifier,
        application: dsFeatures?.application,
        showLocation: false
      },
      (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_13__.hashRule)(rule)
    )) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "alerting.ds-group-loader.group-load-failed",
        "Failed to load rules from group {{ groupName }} in {{ namespaceName }}",
        { groupName, namespaceName }
      ),
      severity: "warning"
    }
  );
}
function RulerBasedGroupRules({
  groupIdentifier,
  application,
  promGroup,
  rulerGroup
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const { namespace, groupName } = groupIdentifier;
  const { matches, promOnlyRules } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return (0,_ruleMatching__WEBPACK_IMPORTED_MODULE_20__.matchRulesGroup)(rulerGroup, promGroup);
  }, [promGroup, rulerGroup]);
  const { pageItems, hasMore, loadMore } = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_11__.useContinuousPagination)(
    rulerGroup.rules,
    _utils_constants__WEBPACK_IMPORTED_MODULE_12__.DEFAULT_PER_PAGE_PAGINATION_RULES_PER_GROUP
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    pageItems.map((rulerRule, index) => {
      const promRule = matches.get(rulerRule);
      if (promRule) {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _DataSourceRuleListItem__WEBPACK_IMPORTED_MODULE_15__.DataSourceRuleListItem,
          {
            rule: promRule,
            rulerRule,
            groupIdentifier,
            application,
            actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_RuleActionsButtons_V2__WEBPACK_IMPORTED_MODULE_19__.RuleActionsButtons, { rule: rulerRule, promRule, groupIdentifier, compact: true }),
            showLocation: false
          },
          `${(0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_13__.hashRule)(promRule)}-${index}`
        );
      }
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_16__.RuleOperationListItem,
        {
          name: (0,_utils_rules__WEBPACK_IMPORTED_MODULE_14__.getRuleName)(rulerRule),
          namespace: namespace.name,
          group: groupName,
          rulesSource: groupIdentifier.rulesSource,
          application,
          operation: "creating",
          showLocation: false
        },
        `${(0,_utils_rules__WEBPACK_IMPORTED_MODULE_14__.getRuleName)(rulerRule)}-${index}`
      );
    }),
    promOnlyRules.map((rule, index) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_16__.RuleOperationListItem,
        {
          name: rule.name,
          namespace: namespace.name,
          group: groupName,
          rulesSource: groupIdentifier.rulesSource,
          application,
          operation: "deleting",
          showLocation: false
        },
        `${rule.name}-${index}`
      );
    }),
    hasMore && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { "aria-selected": "false", role: "treeitem", className: styles.loadMoreWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_LoadMoreButton__WEBPACK_IMPORTED_MODULE_18__.LoadMoreButton, { onClick: loadMore }) })
  ] });
}
const getStyles = (theme) => ({
  loadMoreWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    listStyle: "none",
    paddingTop: theme.spacing(1)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/DataSourceRuleListItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataSourceRuleListItem: () => (/* binding */ DataSourceRuleListItem),
/* harmony export */   createViewLinkFromIdentifier: () => (/* binding */ createViewLinkFromIdentifier)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _hooks_useReturnTo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useReturnTo.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/navigation.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");
/* harmony import */ var _components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/AlertRuleListItem.tsx");










function DataSourceRuleListItem({
  rule,
  rulerRule,
  groupIdentifier,
  application,
  actions,
  showLocation = true
}) {
  const returnTo = (0,_hooks_useReturnTo__WEBPACK_IMPORTED_MODULE_2__.createReturnTo)();
  const { rulesSource, namespace, groupName } = groupIdentifier;
  const ruleIdentifier = rulerRule ? (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_5__.fromRulerRule)(rulesSource.name, namespace.name, groupName, rulerRule) : (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_5__.fromRule)(rulesSource.name, namespace.name, groupName, rule);
  const href = createViewLinkFromIdentifier(ruleIdentifier, returnTo);
  const originMeta = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_6__.getRulePluginOrigin)(rule);
  const ruleName = rulerRule ? (0,_utils_rules__WEBPACK_IMPORTED_MODULE_6__.getRuleName)(rulerRule) : rule.name;
  const labels = rulerRule ? rulerRule.labels : rule.labels;
  const groupUrl = _utils_navigation__WEBPACK_IMPORTED_MODULE_4__.groups.detailsPageLink(rulesSource.uid, namespace.name, groupName);
  const commonProps = {
    name: ruleName,
    rulesSource,
    application,
    group: groupName,
    groupUrl,
    namespace: namespace.name,
    href,
    health: rule.health,
    error: rule.lastError,
    labels,
    actions,
    origin: originMeta,
    showLocation
  };
  switch (rule.type) {
    case app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.PromRuleType.Alerting:
      const annotations = (_utils_rules__WEBPACK_IMPORTED_MODULE_6__.rulerRuleType.any.alertingRule(rulerRule) ? rulerRule.annotations : rule.annotations) ?? {};
      const summary = annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_3__.Annotation.summary];
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_8__.AlertRuleListItem, { ...commonProps, summary, state: rule.state, instancesCount: rule.alerts?.length });
    case app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.PromRuleType.Recording:
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_8__.RecordingRuleListItem, { ...commonProps });
    default:
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_8__.UnknownRuleListItem, { ruleName, groupIdentifier, ruleDefinition: rule });
  }
}
function createViewLinkFromIdentifier(identifier, returnTo) {
  const paramId = encodeURIComponent((0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_5__.stringifyIdentifier)(identifier));
  const paramSource = encodeURIComponent(identifier.ruleSourceName);
  return (0,_utils_url__WEBPACK_IMPORTED_MODULE_7__.createRelativeUrl)(`/alerting/${paramSource}/${paramId}/view`, returnTo ? { returnTo } : {});
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/GrafanaGroupLoader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrafanaGroupLoader: () => (/* binding */ GrafanaGroupLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _api_prometheusApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/api/prometheusApi.ts");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/hooks/usePagination.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _GrafanaRuleListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/GrafanaRuleListItem.tsx");
/* harmony import */ var _components_AlertRuleListItemLoader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/AlertRuleListItemLoader.tsx");
/* harmony import */ var _components_LoadMoreButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/LoadMoreButton.tsx");












const { useGetGrafanaGroupsQuery } = _api_prometheusApi__WEBPACK_IMPORTED_MODULE_7__.prometheusApi;
function GrafanaGroupLoader({
  groupIdentifier,
  namespaceName,
  expectedRulesCount = 3
  // 3 is a random number. Usually we get the number of rules from Prometheus response
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  const { data: promResponse, isLoading: isPromResponseLoading } = useGetGrafanaGroupsQuery(
    {
      folderUid: groupIdentifier.namespace.uid,
      groupName: groupIdentifier.groupName,
      limitAlerts: 0
    },
    { pollingInterval: _utils_constants__WEBPACK_IMPORTED_MODULE_9__.RULE_LIST_POLL_INTERVAL_MS }
  );
  const rules = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return promResponse?.data.groups.at(0)?.rules ?? [];
  }, [promResponse]);
  const { pageItems, hasMore, loadMore } = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_8__.useContinuousPagination)(rules, _utils_constants__WEBPACK_IMPORTED_MODULE_9__.DEFAULT_PER_PAGE_PAGINATION_RULES_PER_GROUP);
  if (isPromResponseLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: Array.from({ length: expectedRulesCount }).map((_, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertRuleListItemLoader__WEBPACK_IMPORTED_MODULE_11__.AlertRuleListItemSkeleton, {}, index)) });
  }
  if (!promResponse) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "alerting.group-loader.group-load-failed",
          "Failed to load rules from group {{ groupName }} in {{ namespaceName }}",
          { groupName: groupIdentifier.groupName, namespaceName }
        ),
        severity: "error"
      }
    );
  }
  if (rules.length === 0) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.group-loader.no-rules", "No rules found in this group"), severity: "info" });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", gap: 0, children: [
    pageItems.map((promRule) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _GrafanaRuleListItem__WEBPACK_IMPORTED_MODULE_10__.GrafanaRuleListItem,
        {
          rule: promRule,
          groupIdentifier,
          namespaceName,
          showLocation: false
        },
        promRule.uid
      );
    }),
    hasMore && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { "aria-selected": "false", role: "treeitem", className: styles.loadMoreWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_LoadMoreButton__WEBPACK_IMPORTED_MODULE_12__.LoadMoreButton, { onClick: loadMore }) })
  ] });
}
const getStyles = (theme) => ({
  loadMoreWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    listStyle: "none",
    paddingTop: theme.spacing(1)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/GrafanaRuleListItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrafanaRuleListItem: () => (/* binding */ GrafanaRuleListItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/navigation.ts");
/* harmony import */ var _utils_ruleStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/ruleStats.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");
/* harmony import */ var _components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/AlertRuleListItem.tsx");
/* harmony import */ var _components_RuleActionsButtons_V2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/RuleActionsButtons.V2.tsx");










function GrafanaRuleListItem({
  rule,
  groupIdentifier,
  namespaceName,
  operation,
  showLocation = true
}) {
  const { name, uid, labels, provenance } = rule;
  const groupUrl = _utils_navigation__WEBPACK_IMPORTED_MODULE_3__.groups.detailsPageLink(
    _utils_datasource__WEBPACK_IMPORTED_MODULE_2__.GRAFANA_RULES_SOURCE_NAME,
    groupIdentifier.namespace.uid,
    groupIdentifier.groupName
  );
  const commonProps = {
    name,
    rulesSource: _utils_datasource__WEBPACK_IMPORTED_MODULE_2__.GrafanaRulesSource,
    group: groupIdentifier.groupName,
    groupUrl,
    namespace: namespaceName,
    href: (0,_utils_url__WEBPACK_IMPORTED_MODULE_6__.createRelativeUrl)(`/alerting/grafana/${uid}/view`),
    health: rule?.health,
    error: rule?.lastError,
    labels,
    isProvisioned: Boolean(provenance),
    isPaused: rule?.isPaused,
    application: "grafana",
    actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_RuleActionsButtons_V2__WEBPACK_IMPORTED_MODULE_8__.RuleActionsButtons, { promRule: rule, groupIdentifier, compact: true }),
    querySourceUIDs: rule?.queriedDatasourceUIDs
  };
  if (_utils_rules__WEBPACK_IMPORTED_MODULE_5__.prometheusRuleType.grafana.alertingRule(rule)) {
    const promAlertingRule = rule && rule.type === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.PromRuleType.Alerting ? rule : void 0;
    const instancesCount = (0,_utils_ruleStats__WEBPACK_IMPORTED_MODULE_4__.totalFromStats)(promAlertingRule?.totals ?? {});
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_7__.AlertRuleListItem,
      {
        ...commonProps,
        summary: rule.annotations?.summary,
        state: promAlertingRule?.state,
        instancesCount,
        operation,
        showLocation
      }
    );
  }
  if (_utils_rules__WEBPACK_IMPORTED_MODULE_5__.prometheusRuleType.grafana.recordingRule(rule)) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_7__.RecordingRuleListItem, { ...commonProps, showLocation });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_7__.UnknownRuleListItem, { ruleName: name, groupIdentifier, ruleDefinition: rule });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/components/AlertRuleListItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertRuleListItem: () => (/* binding */ AlertRuleListItem),
/* harmony export */   RecordingRuleListItem: () => (/* binding */ RecordingRuleListItem),
/* harmony export */   RuleOperationListItem: () => (/* binding */ RuleOperationListItem),
/* harmony export */   UnknownRuleListItem: () => (/* binding */ UnknownRuleListItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-alerting/src/grafana/rules/components/state/StateIcon.tsx");
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-alerting/src/grafana/rules/components/labels/AlertLabels.tsx");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _components_ConditionalWrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/ConditionalWrap.tsx");
/* harmony import */ var _components_MetaText__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/MetaText.tsx");
/* harmony import */ var _components_Provisioning__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/Provisioning.tsx");
/* harmony import */ var _plugins_PluginOriginBadge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/plugins/PluginOriginBadge.tsx");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_groupIdentifier__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/utils/groupIdentifier.ts");
/* harmony import */ var _utils_labels__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/utils/labels.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/ListItem.tsx");
/* harmony import */ var _RuleLocation__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/RuleLocation.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/util.ts");





















const AlertRuleListItem = (props) => {
  const {
    name,
    summary,
    state,
    health,
    error,
    href,
    isProvisioned,
    lastEvaluation,
    evaluationInterval,
    isPaused = false,
    instancesCount = 0,
    namespace,
    group,
    groupUrl,
    rulesSource,
    application,
    contactPoint,
    labels,
    origin,
    actions = null,
    operation,
    showLocation = true,
    querySourceUIDs = []
  } = props;
  const listItemAriaId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useId)();
  const metadata = [];
  if (namespace && group && showLocation) {
    metadata.push(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Text, { color: "secondary", variant: "bodySmall", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _RuleLocation__WEBPACK_IMPORTED_MODULE_24__.RuleLocation,
        {
          namespace,
          group,
          groupUrl,
          rulesSource,
          application
        }
      ) })
    );
  }
  if (querySourceUIDs.length > 0) {
    metadata.push(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(QuerySourceIcons, { queriedDatasourceUIDs: querySourceUIDs }));
  }
  if (!isPaused) {
    if (lastEvaluation && evaluationInterval) {
      metadata.push(
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EvaluationMetadata, { lastEvaluation, evaluationInterval, state })
      );
    }
    if (instancesCount) {
      metadata.push(
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MetaText__WEBPACK_IMPORTED_MODULE_16__.MetaText, { icon: "layers-alt", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.TextLink, { href: href + "?tab=instances", variant: "bodySmall", color: "primary", inline: false, children: pluralize__WEBPACK_IMPORTED_MODULE_2___default()("instance", instancesCount, true) }) })
      );
    }
  }
  if (labels && (0,_utils_labels__WEBPACK_IMPORTED_MODULE_21__.labelsSize)(labels) > 0) {
    metadata.push(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MetaText__WEBPACK_IMPORTED_MODULE_16__.MetaText, { icon: "tag-alt", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RuleLabels, { labels }) })
    );
  }
  if (!isPaused && contactPoint) {
    metadata.push(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_MetaText__WEBPACK_IMPORTED_MODULE_16__.MetaText, { icon: "at", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.contact-points.delivered-to", children: "Delivered to" }),
        " ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.TextLink,
          {
            href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_22__.createContactPointSearchLink)(contactPoint, _utils_datasource__WEBPACK_IMPORTED_MODULE_19__.GRAFANA_RULES_SOURCE_NAME),
            variant: "bodySmall",
            color: "primary",
            inline: false,
            children: contactPoint
          }
        )
      ] })
    );
  }
  const ruleHealth = (0,_util__WEBPACK_IMPORTED_MODULE_25__.normalizeHealth)(health);
  const ruleState = (0,_util__WEBPACK_IMPORTED_MODULE_25__.normalizeState)(state);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _ListItem__WEBPACK_IMPORTED_MODULE_23__.ListItem,
    {
      "aria-labelledby": listItemAriaId,
      title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { direction: "row", alignItems: "center", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.TextLink, { href, color: "primary", inline: false, id: listItemAriaId, children: name }),
        origin && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_plugins_PluginOriginBadge__WEBPACK_IMPORTED_MODULE_18__.PluginOriginBadge, { pluginId: origin.pluginId, size: "sm" }),
        isProvisioned && !origin && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Provisioning__WEBPACK_IMPORTED_MODULE_17__.ProvisioningBadge, {})
      ] }),
      description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Summary, { content: summary, error }),
      icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_4__.StateIcon, { type: "alerting", state: ruleState, health: ruleHealth, isPaused, operation }),
      actions,
      meta: metadata
    }
  );
};
function RecordingRuleListItem({
  name,
  namespace,
  group,
  groupUrl,
  rulesSource,
  application,
  href,
  health,
  isProvisioned,
  error,
  isPaused,
  origin,
  actions,
  showLocation = true,
  querySourceUIDs = []
}) {
  const metadata = [];
  if (namespace && group && showLocation) {
    metadata.push(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Text, { color: "secondary", variant: "bodySmall", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _RuleLocation__WEBPACK_IMPORTED_MODULE_24__.RuleLocation,
        {
          namespace,
          group,
          groupUrl,
          rulesSource,
          application
        }
      ) })
    );
  }
  if (querySourceUIDs.length > 0) {
    metadata.push(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(QuerySourceIcons, { queriedDatasourceUIDs: querySourceUIDs }));
  }
  const ruleHealth = (0,_util__WEBPACK_IMPORTED_MODULE_25__.normalizeHealth)(health);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _ListItem__WEBPACK_IMPORTED_MODULE_23__.ListItem,
    {
      title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { direction: "row", alignItems: "center", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.TextLink, { color: "primary", href, inline: false, children: name }),
        origin && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_plugins_PluginOriginBadge__WEBPACK_IMPORTED_MODULE_18__.PluginOriginBadge, { pluginId: origin.pluginId, size: "sm" }),
        isProvisioned && !origin && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Provisioning__WEBPACK_IMPORTED_MODULE_17__.ProvisioningBadge, {})
      ] }),
      description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Summary, { error }),
      icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_4__.StateIcon, { type: "recording", health: ruleHealth, isPaused }),
      actions,
      meta: metadata
    }
  );
}
function RuleOperationListItem({
  name,
  namespace,
  group,
  groupUrl,
  rulesSource,
  application,
  operation,
  showLocation = true
}) {
  const listItemAriaId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useId)();
  const metadata = [];
  if (namespace && group && showLocation) {
    metadata.push(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Text, { color: "secondary", variant: "bodySmall", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _RuleLocation__WEBPACK_IMPORTED_MODULE_24__.RuleLocation,
        {
          namespace,
          group,
          groupUrl,
          rulesSource,
          application
        }
      ) })
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _ListItem__WEBPACK_IMPORTED_MODULE_23__.ListItem,
    {
      "aria-labelledby": listItemAriaId,
      title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { direction: "row", alignItems: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Text, { id: listItemAriaId, children: name }) }),
      icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_4__.StateIcon, { operation }),
      meta: metadata
    }
  );
}
function Summary({ content, error }) {
  if (error) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Text, { variant: "bodySmall", color: "error", weight: "light", truncate: true, element: "p", children: error });
  }
  if (content) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Text, { variant: "bodySmall", color: "secondary", truncate: true, children: content });
  }
  return null;
}
const QuerySourceIcons = (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(function QuerySourceIcons2({ queriedDatasourceUIDs }) {
  const dataSources = Array.from(new Set(queriedDatasourceUIDs)).map(_utils_datasource__WEBPACK_IMPORTED_MODULE_19__.getDataSourceByUid).filter((ds) => ds !== void 0);
  const firstSource = dataSources[0];
  const singleSource = dataSources.length === 1;
  const label = singleSource ? firstSource.name : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.alert-rules.multiple-sources", "{{numSources}} data sources", { numSources: dataSources.length });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { direction: "row", alignItems: "center", gap: 0.5, children: [
    dataSources.map((dataSource) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _components_ConditionalWrap__WEBPACK_IMPORTED_MODULE_15__["default"],
      {
        shouldWrap: !singleSource,
        wrap: (children) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tooltip, { content: dataSource.name, children }),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DataSourceLogo, { dataSource })
      },
      dataSource.uid
    )),
    singleSource ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.TextLink, { variant: "bodySmall", inline: false, color: "primary", href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_22__.makeDataSourceLink)(firstSource.uid), children: label }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Text, { variant: "bodySmall", color: "primary", children: label })
  ] });
});
function RuleLabels({ labels }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tooltip,
    {
      content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.ruleLabels.tooltip, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_5__.AlertLabels, { labels, size: "sm" }) }),
      placement: "right",
      interactive: true,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Text, { variant: "bodySmall", color: "primary", children: pluralize__WEBPACK_IMPORTED_MODULE_2___default()("label", (0,_utils_labels__WEBPACK_IMPORTED_MODULE_21__.labelsSize)(labels), true) }) })
    }
  );
}
function EvaluationMetadata({ lastEvaluation, evaluationInterval, state }) {
  const nextEvaluation = (0,_util__WEBPACK_IMPORTED_MODULE_25__.calculateNextEvaluationEstimate)(lastEvaluation, evaluationInterval);
  if (state === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_13__.PromAlertingRuleState.Firing && nextEvaluation) {
    const firingFor = "2m 34s";
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_MetaText__WEBPACK_IMPORTED_MODULE_16__.MetaText, { icon: "clock-nine", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.alert-rules.firing-for", children: "Firing for" }),
      " ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Text, { color: "primary", children: firingFor }),
      nextEvaluation && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        "\xB7 ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.alert-rules.next-evaluation-in", children: "next evaluation in" }),
        " ",
        nextEvaluation.humanized
      ] })
    ] });
  }
  if (nextEvaluation) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_MetaText__WEBPACK_IMPORTED_MODULE_16__.MetaText, { icon: "clock-nine", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.alert-rules.next-evaluation", children: "Next evaluation" }),
      " ",
      nextEvaluation.humanized
    ] });
  }
  return null;
}
const UnknownRuleListItem = ({ ruleName, groupIdentifier, ruleDefinition }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useStyles2)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const { namespace, groupName } = groupIdentifier;
    const ruleContext = {
      name: ruleName,
      groupName,
      namespace: JSON.stringify(namespace),
      rulesSource: (0,_utils_groupIdentifier__WEBPACK_IMPORTED_MODULE_20__.getGroupOriginName)(groupIdentifier)
    };
    (0,_Analytics__WEBPACK_IMPORTED_MODULE_14__.logError)(new Error("unknown rule type"), ruleContext);
  }, [ruleName, groupIdentifier]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Alert,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.unknown-rule-list-item.title-unknown-rule-type", "Unknown rule type"),
      className: styles.resetMargin,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("summary", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.alert-rules.rule-definition", children: "Rule definition" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: JSON.stringify(ruleDefinition, null, 2) }) })
      ] })
    }
  );
};
const getStyles = (theme) => ({
  alertListItemContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "relative",
    listStyle: "none",
    background: theme.colors.background.primary,
    borderBottom: `solid 1px ${theme.colors.border.weak}`,
    padding: theme.spacing(1, 1, 1, 1.5)
  }),
  resetMargin: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    margin: 0
  }),
  ruleLabels: {
    tooltip: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: theme.spacing(1)
    }),
    text: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      cursor: "pointer"
    })
  }
});
const DataSourceLogo = (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(({ dataSource }, ref) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useStyles2)(dataSourceLogoStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "img",
    {
      ref,
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.logo, {
        [styles.filter]: dataSource.meta.builtIn
      }),
      alt: `${dataSource.meta.name} logo`,
      src: dataSource.meta.info.logos.small
    }
  );
});
DataSourceLogo.displayName = "DataSourceLogo";
const dataSourceLogoStyles = (theme) => ({
  logo: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    height: "12px",
    width: "12px",
    borderRadius: theme.shape.radius.default
  }),
  filter: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    filter: `invert(${theme.isLight ? 1 : 0})`
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/components/AlertRuleListItemLoader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertRuleListItemSkeleton: () => (/* binding */ AlertRuleListItemSkeleton),
/* harmony export */   RulerRuleLoadingError: () => (/* binding */ RulerRuleLoadingError)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-loading-skeleton/dist/index.js");
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-alerting/src/grafana/rules/components/state/StateIcon.tsx");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/ListItem.tsx");
/* harmony import */ var _RuleActionsSkeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/RuleActionsSkeleton.tsx");








function AlertRuleListItemSkeleton() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _ListItem__WEBPACK_IMPORTED_MODULE_5__.ListItem,
    {
      title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], { width: 64 }),
      icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_2__.StateIcon, { isPaused: false }),
      description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], { width: 256 }),
      actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RuleActionsSkeleton__WEBPACK_IMPORTED_MODULE_6__.RuleActionsSkeleton, {}),
      "data-testid": "alert-rule-list-item-loader",
      "aria-disabled": true
    }
  );
}
function RulerRuleLoadingError({
  ruleIdentifier,
  error
}) {
  const errorMessage = error ? (0,_utils_misc__WEBPACK_IMPORTED_MODULE_4__.stringifyErrorLike)(error) : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.rule-list.rulerrule-loading-error", "Failed to load the rule");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ListItem__WEBPACK_IMPORTED_MODULE_5__.ListItem, { title: ruleIdentifier.uid, description: errorMessage, "data-testid": "ruler-rule-loading-error" });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/components/DataSourceIcon.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataSourceIcon: () => (/* binding */ DataSourceIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var app_plugins_datasource_loki_img_loki_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/img/loki_icon.svg");
/* harmony import */ var app_plugins_datasource_prometheus_img_mimir_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/img/mimir_logo.svg");
/* harmony import */ var app_plugins_datasource_prometheus_img_prometheus_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/img/prometheus_logo.svg");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");







const DataSourceIcon = ({ application, size = 16 }) => {
  switch (application) {
    case app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_5__.PromApplication.Prometheus:
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { width: size, height: size, src: app_plugins_datasource_prometheus_img_prometheus_logo_svg__WEBPACK_IMPORTED_MODULE_4__, alt: "Prometheus" });
    case app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_5__.PromApplication.Mimir:
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { width: size, height: size, src: app_plugins_datasource_prometheus_img_mimir_logo_svg__WEBPACK_IMPORTED_MODULE_3__, alt: "Mimir" });
    case "Loki":
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { width: size, height: size, src: app_plugins_datasource_loki_img_loki_icon_svg__WEBPACK_IMPORTED_MODULE_2__, alt: "Loki" });
    case "grafana":
    default:
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { name: "grafana" });
  }
};


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/components/ListItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListItem: () => (/* binding */ ListItem),
/* harmony export */   SkeletonListItem: () => (/* binding */ SkeletonListItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-loading-skeleton/dist/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");






const ListItem = (props) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  const { icon = null, title, description, meta, metaRight, actions, "data-testid": testId, ...ariaAttributes } = props;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "li",
    {
      className: styles.alertListItemContainer,
      role: "treeitem",
      "aria-selected": "false",
      "data-testid": testId,
      ...ariaAttributes,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "row", alignItems: "start", gap: 1, wrap: false, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.statusIcon, children: icon }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", gap: 0.5, flex: "1", minWidth: 0, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", gap: 0, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.textOverflow, children: title }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.textOverflow, children: description })
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "row", gap: 1, alignItems: "center", children: meta?.map((item, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), { children: [
            index > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Separator, {}),
            item
          ] }, index)) })
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "row", alignItems: "center", gap: 1, wrap: false, children: [
          metaRight,
          actions
        ] })
      ] })
    }
  );
};
const SkeletonListItem = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    ListItem,
    {
      icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], { width: 16, height: 16, circle: true }),
      title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], { height: 16, width: 350 }),
      actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], { height: 10, width: 200 })
    }
  );
};
const Separator = () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { color: "secondary", variant: "bodySmall", children: "|" });
const getStyles = (theme) => ({
  alertListItemContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "relative",
    listStyle: "none",
    padding: theme.spacing(1),
    "&:hover": {
      background: theme.colors.action.hover
    }
  }),
  textOverflow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "inherit"
  }),
  // this will line up the icon with the title of the rule
  statusIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: theme.spacing(0.5)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/components/LoadMoreButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadMoreButton: () => (/* binding */ LoadMoreButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");




function LoadMoreButton({ onClick, loading = false }) {
  const label = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.rule-list.pagination.next-page", "Show more\u2026");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button,
    {
      "data-testid": "load-more-rule-groups",
      "aria-label": label,
      fill: "text",
      size: "sm",
      variant: "secondary",
      onClick,
      disabled: loading,
      children: loading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.rule-list.loading-more-groups", children: "Loading more groups\u2026" }) : label
    }
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/components/RuleActionsButtons.V2.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuleActionsButtons: () => (/* binding */ RuleActionsButtons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_features_alerting_unified_components_rule_list_extensions_EnrichmentDrawerExtension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-list/extensions/EnrichmentDrawerExtension.tsx");
/* harmony import */ var app_features_alerting_unified_components_rule_viewer_AlertRuleMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/AlertRuleMenu.tsx");
/* harmony import */ var app_features_alerting_unified_components_rule_viewer_DeleteModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/DeleteModal.tsx");
/* harmony import */ var app_features_alerting_unified_components_rules_CloneRule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/CloneRule.tsx");
/* harmony import */ var app_features_alerting_unified_components_silences_SilenceGrafanaRuleDrawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilenceGrafanaRuleDrawer.tsx");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");
















function RuleActionsButtons({ compact, rule, promRule, groupIdentifier }) {
  const redirectToListView = compact ? false : true;
  const [deleteModal, showDeleteModal] = (0,app_features_alerting_unified_components_rule_viewer_DeleteModal__WEBPACK_IMPORTED_MODULE_8__.useDeleteModal)(redirectToListView);
  const [showSilenceDrawer, setShowSilenceDrawer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [showEnrichmentDrawer, setShowEnrichmentDrawer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [redirectToClone, setRedirectToClone] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(void 0);
  const isProvisioned = getIsProvisioned(rule, promRule);
  const [editRuleSupported, editRuleAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__.useRulerRuleAbility)(rule, groupIdentifier, _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__.AlertRuleAction.Update);
  const [grafanaEditRuleSupported, grafanaEditRuleAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__.useGrafanaPromRuleAbility)(
    _utils_rules__WEBPACK_IMPORTED_MODULE_14__.prometheusRuleType.grafana.rule(promRule) ? promRule : _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__.skipToken,
    _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__.AlertRuleAction.Update
  );
  const canEditRule = editRuleSupported && editRuleAllowed || grafanaEditRuleSupported && grafanaEditRuleAllowed;
  const buttons = [];
  const buttonSize = compact ? "sm" : "md";
  const identifier = getEditableIdentifier(groupIdentifier, rule, promRule);
  if (!identifier) {
    return null;
  }
  const ruleUid = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_14__.getRuleUID)(rule ?? promRule);
  const silenceableRule = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isString)(ruleUid) && (_utils_rules__WEBPACK_IMPORTED_MODULE_14__.rulerRuleType.grafana.alertingRule(rule) || _utils_rules__WEBPACK_IMPORTED_MODULE_14__.prometheusRuleType.grafana.alertingRule(promRule));
  if (canEditRule) {
    const editURL = (0,_utils_url__WEBPACK_IMPORTED_MODULE_15__.createRelativeUrl)(`/alerting/${encodeURIComponent(_utils_rule_id__WEBPACK_IMPORTED_MODULE_13__.stringifyIdentifier(identifier))}/edit`);
    buttons.push(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.rule-actions-buttons.title-edit", "Edit"),
          size: buttonSize,
          variant: "secondary",
          fill: "text",
          href: editURL,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "common.edit", children: "Edit" })
        },
        "edit"
      )
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { gap: 0, alignItems: "center", wrap: "nowrap", children: [
    buttons,
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      app_features_alerting_unified_components_rule_viewer_AlertRuleMenu__WEBPACK_IMPORTED_MODULE_7__["default"],
      {
        buttonSize,
        fill: "text",
        rulerRule: rule,
        promRule,
        groupIdentifier,
        identifier,
        handleDelete: (identifier2, groupIdentifier2) => showDeleteModal(identifier2, groupIdentifier2),
        handleSilence: () => setShowSilenceDrawer(true),
        handleManageEnrichments: () => setShowEnrichmentDrawer(true),
        handleDuplicateRule: () => setRedirectToClone({ identifier, isProvisioned })
      }
    ),
    deleteModal,
    silenceableRule && showSilenceDrawer && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_alerting_unified_components_silences_SilenceGrafanaRuleDrawer__WEBPACK_IMPORTED_MODULE_10__["default"], { ruleUid, onClose: () => setShowSilenceDrawer(false) }),
    ruleUid && showEnrichmentDrawer && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_alerting_unified_components_rule_list_extensions_EnrichmentDrawerExtension__WEBPACK_IMPORTED_MODULE_6__.EnrichmentDrawerExtension, { ruleUid, onClose: () => setShowEnrichmentDrawer(false) }),
    redirectToClone?.identifier && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      app_features_alerting_unified_components_rules_CloneRule__WEBPACK_IMPORTED_MODULE_9__.RedirectToCloneRule,
      {
        identifier: redirectToClone.identifier,
        isProvisioned: redirectToClone.isProvisioned,
        onDismiss: () => setRedirectToClone(void 0)
      }
    )
  ] });
}
function getIsProvisioned(rule, promRule) {
  if (rule) {
    return (0,_utils_rules__WEBPACK_IMPORTED_MODULE_14__.isProvisionedRule)(rule);
  }
  if (promRule) {
    return (0,_utils_rules__WEBPACK_IMPORTED_MODULE_14__.isProvisionedPromRule)(promRule);
  }
  return false;
}
function getEditableIdentifier(groupIdentifier, rule, promRule) {
  if (rule) {
    return _utils_rule_id__WEBPACK_IMPORTED_MODULE_13__.fromRulerRuleAndGroupIdentifierV2(groupIdentifier, rule);
  }
  if (_utils_rules__WEBPACK_IMPORTED_MODULE_14__.prometheusRuleType.grafana.rule(promRule)) {
    return {
      ruleSourceName: "grafana",
      uid: promRule.uid
    };
  }
  (0,_Analytics__WEBPACK_IMPORTED_MODULE_11__.logWarning)("Unable to construct an editable rule identifier");
  return void 0;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/components/RuleActionsSkeleton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuleActionsSkeleton: () => (/* binding */ RuleActionsSkeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-loading-skeleton/dist/index.js");



function RuleActionsSkeleton() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], { width: 50, height: 16 });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/components/RuleLocation.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuleLocation: () => (/* binding */ RuleLocation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _DataSourceIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/DataSourceIcon.tsx");




function RuleLocation({ namespace, group, groupUrl, rulesSource, application }) {
  const isGrafanaApp = application === "grafana";
  const isDataSourceApp = !!rulesSource && !!application && !isGrafanaApp;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "row", alignItems: "center", gap: 0.5, children: [
    isGrafanaApp && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { size: "xs", name: "folder" }),
    isDataSourceApp && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, { content: rulesSource.name, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DataSourceIcon__WEBPACK_IMPORTED_MODULE_5__.DataSourceIcon, { application, size: 14 }) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "row", alignItems: "center", gap: 0, children: [
      namespace,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { size: "sm", name: "angle-right" }),
      groupUrl ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TextLink, { href: groupUrl, color: "secondary", variant: "bodySmall", inline: false, children: group }) : group
    ] })
  ] });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/ruleMatching.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMatchingPromRule: () => (/* binding */ getMatchingPromRule),
/* harmony export */   getMatchingRulerRule: () => (/* binding */ getMatchingRulerRule),
/* harmony export */   matchRulesGroup: () => (/* binding */ matchRulesGroup)
/* harmony export */ });
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _rulePositionHash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/rulePositionHash.ts");




function getMatchingRulerRule(rulerRuleGroup, promRuleWithOrigin) {
  const { rule, rulePositionHash } = promRuleWithOrigin;
  const rulesByName = rulerRuleGroup.rules.filter((r) => (0,_utils_rules__WEBPACK_IMPORTED_MODULE_1__.getRuleName)(r) === rule.name);
  if (rulesByName.length === 1) {
    return rulesByName[0];
  }
  const rulesByLabelsAndAnnotations = rulesByName.filter((r) => {
    return (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_0__.getRulerRuleFingerprint)(r, false).join("-") === (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_0__.getPromRuleFingerprint)(rule, false).join("-");
  });
  if (rulesByLabelsAndAnnotations.length === 1) {
    return rulesByLabelsAndAnnotations[0];
  }
  const rulesByLabelsAndAnnotationsAndQuery = rulesByName.filter((r) => {
    return (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_0__.getRulerRuleFingerprint)(r, true).join("-") === (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_0__.getPromRuleFingerprint)(rule, true).join("-");
  });
  if (rulesByLabelsAndAnnotationsAndQuery.length === 1) {
    return rulesByLabelsAndAnnotationsAndQuery[0];
  }
  if (rulesByLabelsAndAnnotationsAndQuery.length > 1 && rulePositionHash) {
    for (const candidateRule of rulesByLabelsAndAnnotationsAndQuery) {
      const rulerRuleIndex = rulerRuleGroup.rules.indexOf(candidateRule);
      const rulerPositionHash = (0,_rulePositionHash__WEBPACK_IMPORTED_MODULE_2__.createRulePositionHash)(rulerRuleIndex, rulerRuleGroup.rules.length);
      if (rulerPositionHash === rulePositionHash) {
        return candidateRule;
      }
    }
  }
  return void 0;
}
function getMatchingPromRule(promRuleGroup, rulerRuleWithPosition) {
  const { rulePositionHash, ...rule } = rulerRuleWithPosition;
  const rulesByName = promRuleGroup.rules.filter((r) => r.name === (0,_utils_rules__WEBPACK_IMPORTED_MODULE_1__.getRuleName)(rule));
  if (rulesByName.length === 1) {
    return rulesByName[0];
  }
  const rulesByLabelsAndAnnotations = rulesByName.filter((r) => {
    return (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_0__.getPromRuleFingerprint)(r, false).join("-") === (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_0__.getRulerRuleFingerprint)(rule, false).join("-");
  });
  if (rulesByLabelsAndAnnotations.length === 1) {
    return rulesByLabelsAndAnnotations[0];
  }
  const rulesByLabelsAndAnnotationsAndQuery = rulesByName.filter((r) => {
    return (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_0__.getPromRuleFingerprint)(r, true).join("-") === (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_0__.getRulerRuleFingerprint)(rule, true).join("-");
  });
  if (rulesByLabelsAndAnnotationsAndQuery.length === 1) {
    return rulesByLabelsAndAnnotationsAndQuery[0];
  }
  if (rulesByLabelsAndAnnotationsAndQuery.length > 1 && rulePositionHash) {
    for (const candidateRule of rulesByLabelsAndAnnotationsAndQuery) {
      const promRuleIndex = promRuleGroup.rules.indexOf(candidateRule);
      const promPositionHash = (0,_rulePositionHash__WEBPACK_IMPORTED_MODULE_2__.createRulePositionHash)(promRuleIndex, promRuleGroup.rules.length);
      if (promPositionHash === rulePositionHash) {
        return candidateRule;
      }
    }
  }
  return void 0;
}
function matchRulesGroup(rulerGroup, promGroup) {
  const matchingResult = rulerGroup.rules.reduce(
    (acc, rulerRule, index) => {
      const { matches, unmatchedPromRules } = acc;
      const rulerRuleWithPosition = {
        ...rulerRule,
        rulePositionHash: (0,_rulePositionHash__WEBPACK_IMPORTED_MODULE_2__.createRulePositionHash)(index, rulerGroup.rules.length)
      };
      const promRule = getMatchingPromRule(promGroup, rulerRuleWithPosition);
      if (promRule) {
        matches.set(rulerRule, promRule);
        unmatchedPromRules.delete(promRule);
      }
      return acc;
    },
    { matches: /* @__PURE__ */ new Map(), unmatchedPromRules: new Set(promGroup.rules) }
  );
  return { matches: matchingResult.matches, promOnlyRules: Array.from(matchingResult.unmatchedPromRules) };
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/rulePositionHash.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRulePositionHash: () => (/* binding */ createRulePositionHash)
/* harmony export */ });

function createRulePositionHash(ruleIndex, totalRules) {
  return `${ruleIndex}:${totalRules}`;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/utils/accessControlHooks.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRulesAccess: () => (/* binding */ useRulesAccess)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");



function useRulesAccess() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_access_control__WEBPACK_IMPORTED_MODULE_1__.getRulesAccess)(), []);
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/img/loki_icon.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/loki_icon.abc01135.svg";

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/img/mimir_logo.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/mimir_logo.ac01ecbc.svg";

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/img/prometheus_logo.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/prometheus_logo.3e9d4662.svg";

/***/ })

}]);
//# sourceMappingURL=AlertingGroupDetails.ebd2fb189f8d57fc7486.js.map