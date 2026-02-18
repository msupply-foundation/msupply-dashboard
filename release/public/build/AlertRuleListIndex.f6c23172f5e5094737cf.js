"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertRuleListIndex"],{

/***/ "./node_modules/react-use/esm/useInterval.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useInterval = function (callback, delay) {
    var savedCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(function () { });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        savedCallback.current = callback;
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (delay !== null) {
            var interval_1 = setInterval(function () { return savedCallback.current(); }, delay || 0);
            return function () { return clearInterval(interval_1); };
        }
        return undefined;
    }, [delay]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInterval);


/***/ }),

/***/ "./packages/grafana-alerting/src/grafana/contactPoints/components/ContactPointSelector/ContactPointSelector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactPointSelector: () => (/* binding */ ContactPointSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Combobox/Combobox.tsx");
/* harmony import */ var _hooks_v0alpha1_useContactPoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-alerting/src/grafana/contactPoints/hooks/v0alpha1/useContactPoints.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-alerting/src/grafana/contactPoints/utils.ts");






const collator = new Intl.Collator("en", { sensitivity: "accent" });
function ContactPointSelector(props) {
  const { currentData: contactPoints, isLoading } = (0,_hooks_v0alpha1_useContactPoints__WEBPACK_IMPORTED_MODULE_3__.useListContactPoints)(
    {},
    { refetchOnFocus: true, refetchOnMountOrArgChange: true }
  );
  const contactPointOptions = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.chain)(contactPoints?.items).toArray().map((contactPoint) => ({
    option: {
      label: contactPoint.spec.title,
      value: contactPoint.metadata.uid ?? contactPoint.spec.title,
      description: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getContactPointDescription)(contactPoint)
    },
    contactPoint
  })).value().sort((a, b) => collator.compare(a.option.label, b.option.label));
  const options = contactPointOptions.map((item) => item.option);
  const handleChange = (selectedOption) => {
    if (selectedOption == null && props.isClearable) {
      props.onChange(null);
      return;
    }
    if (selectedOption) {
      const matchedOption = contactPointOptions.find(({ option }) => option.value === selectedOption.value);
      if (!matchedOption) {
        return;
      }
      props.onChange(matchedOption.contactPoint);
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Combobox, { ...props, loading: isLoading, options, onChange: handleChange });
}



/***/ }),

/***/ "./packages/grafana-alerting/src/grafana/contactPoints/hooks/v0alpha1/useContactPoints.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCreateContactPoint: () => (/* binding */ useCreateContactPoint),
/* harmony export */   useListContactPoints: () => (/* binding */ useListContactPoints)
/* harmony export */ });
/* harmony import */ var _api_notifications_v0alpha1_notifications_api_gen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-alerting/src/grafana/api/notifications/v0alpha1/notifications.api.gen.ts");


function useListContactPoints(queryArgs = {}, queryOptions = {}) {
  return _api_notifications_v0alpha1_notifications_api_gen__WEBPACK_IMPORTED_MODULE_0__.notificationsAPI.useListReceiverQuery(queryArgs, queryOptions);
}
function useCreateContactPoint(options) {
  const [updateFn, result] = _api_notifications_v0alpha1_notifications_api_gen__WEBPACK_IMPORTED_MODULE_0__.notificationsAPI.endpoints.createReceiver.useMutation(options);
  const typedUpdateFn = (args) => {
    const response = updateFn(args);
    return response;
  };
  return [typedUpdateFn, result];
}


/***/ }),

/***/ "./packages/grafana-alerting/src/grafana/contactPoints/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContactPointDescription: () => (/* binding */ getContactPointDescription)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


function getContactPointDescription(contactPoint) {
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(contactPoint.spec.integrations)) {
    return "<empty contact point>";
  }
  const integrationCounts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.countBy)(contactPoint.spec.integrations, (integration) => integration.type);
  const description = Object.entries(integrationCounts).map(([type, count]) => {
    return count > 1 ? `${type} (${count})` : type;
  }).join(", ");
  return description;
}


/***/ }),

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

/***/ "./public/app/features/alerting/unified/RuleList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _featureToggles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/featureToggles.ts");
/* harmony import */ var _rule_list_RuleList_v1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/RuleList.v1.tsx");
/* harmony import */ var _withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/withPageErrorBoundary.tsx");






const RuleListV2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/* import() */ "public_app_features_alerting_unified_rule-list_RuleList_v2_tsx").then(__webpack_require__.bind(__webpack_require__, "./public/app/features/alerting/unified/rule-list/RuleList.v2.tsx")));
const RuleList = () => {
  const newView = (0,_featureToggles__WEBPACK_IMPORTED_MODULE_2__.shouldUseAlertingListViewV2)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, { children: newView ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RuleListV2, {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rule_list_RuleList_v1__WEBPACK_IMPORTED_MODULE_3__["default"], {}) });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_4__.withPageErrorBoundary)(RuleList));


/***/ }),

/***/ "./public/app/features/alerting/unified/api/alertingFolderActionsApi.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alertingFolderActionsApi: () => (/* binding */ alertingFolderActionsApi)
/* harmony export */ });
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _alertingApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/api/alertingApi.ts");
/* harmony import */ var _featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/api/featureDiscoveryApi.ts");
/* harmony import */ var _ruler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/api/ruler.ts");





const alertingFolderActionsApi = _alertingApi__WEBPACK_IMPORTED_MODULE_1__.alertingApi.injectEndpoints({
  endpoints: (build) => ({
    pauseFolder: build.mutation({
      query: ({ namespace, notificationOptions }) => {
        const successMessage = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
          "alerting.bulk-actions.pause.success",
          "Rules evaluation successfully paused for folder"
        );
        const { path, params } = (0,_ruler__WEBPACK_IMPORTED_MODULE_3__.rulerUrlBuilder)(_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_2__.GRAFANA_RULER_CONFIG).namespace(namespace);
        return {
          url: path,
          params,
          body: {
            is_paused: true
          },
          method: "PATCH",
          notificationOptions: {
            successMessage,
            ...notificationOptions
          }
        };
      }
    }),
    unpauseFolder: build.mutation({
      query: ({ namespace, notificationOptions }) => {
        const successMessage = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
          "alerting.bulk-actions.unpause.success",
          "Rules successfully unpaused for this folder"
        );
        const { path, params } = (0,_ruler__WEBPACK_IMPORTED_MODULE_3__.rulerUrlBuilder)(_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_2__.GRAFANA_RULER_CONFIG).namespace(namespace);
        return {
          url: path,
          params,
          body: {
            is_paused: false
          },
          method: "PATCH",
          notificationOptions: {
            successMessage,
            ...notificationOptions
          }
        };
      }
    }),
    deleteGrafanaRulesFromFolder: build.mutation({
      query: ({ namespace, notificationOptions }) => {
        const successMessage = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("alerting.bulk-actions.delete.success", "Rules successfully deleted from folder");
        const { path, params } = (0,_ruler__WEBPACK_IMPORTED_MODULE_3__.rulerUrlBuilder)(_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_2__.GRAFANA_RULER_CONFIG).namespace(namespace);
        return {
          url: path,
          params,
          method: "DELETE",
          notificationOptions: {
            successMessage,
            ...notificationOptions
          }
        };
      }
    })
  })
});


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

/***/ "./public/app/features/alerting/unified/components/export/GrafanaRuleFolderExporter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrafanaRuleFolderExporter: () => (/* binding */ GrafanaRuleFolderExporter)
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









function GrafanaRuleFolderExporter({ folder, onClose }) {
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("yaml");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _GrafanaExportDrawer__WEBPACK_IMPORTED_MODULE_6__.GrafanaExportDrawer,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.grafana-rule-folder-exporter.title-drawer", "Export {{folderName}} rules", {
        folderName: folder.title
      }),
      activeTab,
      onTabChange: setActiveTab,
      onClose,
      formatProviders: Object.values(_providers__WEBPACK_IMPORTED_MODULE_7__.allGrafanaExportProviders),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GrafanaRuleFolderExportPreview, { folder, exportFormat: activeTab, onClose })
    }
  );
}
function GrafanaRuleFolderExportPreview({ folder, exportFormat, onClose }) {
  const { currentData: exportFolderDefinition = "", isFetching } = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_4__.alertRuleApi.endpoints.exportRules.useQuery({
    folderUid: folder.uid,
    format: exportFormat
  });
  if (isFetching) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.grafana-rule-folder-export-preview.text-loading", "Loading....") });
  }
  const downloadFileName = `${folder.title}-${folder.uid}`;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _FileExportPreview__WEBPACK_IMPORTED_MODULE_5__.FileExportPreview,
    {
      format: exportFormat,
      textDefinition: exportFolderDefinition,
      downloadFileName,
      onClose
    }
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/export/GrafanaRulesExporter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrafanaRulesExporter: () => (/* binding */ GrafanaRulesExporter)
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









function GrafanaRulesExporter({ onClose }) {
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("yaml");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _GrafanaExportDrawer__WEBPACK_IMPORTED_MODULE_6__.GrafanaExportDrawer,
    {
      activeTab,
      onTabChange: setActiveTab,
      onClose,
      formatProviders: Object.values(_providers__WEBPACK_IMPORTED_MODULE_7__.allGrafanaExportProviders),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GrafanaRulesExportPreview, { exportFormat: activeTab, onClose })
    }
  );
}
function GrafanaRulesExportPreview({ exportFormat, onClose }) {
  const { currentData: rulesDefinition = "", isFetching } = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_4__.alertRuleApi.endpoints.exportRules.useQuery({
    format: exportFormat
  });
  const downloadFileName = `alert-rules-${(/* @__PURE__ */ new Date()).getTime()}`;
  if (isFetching) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.grafana-rules-export-preview.text-loading", "Loading....") });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _FileExportPreview__WEBPACK_IMPORTED_MODULE_5__.FileExportPreview,
    {
      format: exportFormat,
      textDefinition: rulesDefinition,
      downloadFileName,
      onClose
    }
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/folder-actions/DeleteModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteModal: () => (/* binding */ DeleteModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Space.tsx");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");






const DeleteModal = react__WEBPACK_IMPORTED_MODULE_1___default().memo(({ onConfirm, onDismiss, isOpen, folderName }) => {
  const [isDeleting, setIsDeleting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const onDeleteConfirm = async () => {
    setIsDeleting(true);
    try {
      await onConfirm();
      (0,_Analytics__WEBPACK_IMPORTED_MODULE_6__.trackFolderBulkActionsDeleteSuccess)();
      onDismiss();
    } catch {
      (0,_Analytics__WEBPACK_IMPORTED_MODULE_6__.trackFolderBulkActionsDeleteFail)();
    } finally {
      setIsDeleting(false);
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ConfirmModal,
    {
      body: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { element: "p", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.folder-bulk-actions.delete-modal-text", values: { folderName }, children: [
          "This action will delete all alert rules in the ",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: "{{folderName}}" }),
          " folder. Nested folders will not be affected."
        ] }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Space, { v: 2 })
      ] }),
      confirmationText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.folder-bulk-actions.delete-modal-confirmation-text", "Delete"),
      confirmText: isDeleting ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.folder-bulk-actions.delete-modal-deleting", "Deleting...") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.folder-bulk-actions.delete-modal-delete-button", "Delete"),
      onDismiss,
      onConfirm: onDeleteConfirm,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.folder-bulk-actions.delete-modal-title", "Delete"),
      isOpen
    }
  );
});
DeleteModal.displayName = "DeleteModal";


/***/ }),

/***/ "./public/app/features/alerting/unified/components/folder-actions/FolderActionsButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FolderActionsButton: () => (/* binding */ FolderActionsButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/Menu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Dropdown/Dropdown.tsx");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _api_alertingFolderActionsApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/api/alertingFolderActionsApi.ts");
/* harmony import */ var _featureToggles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/featureToggles.ts");
/* harmony import */ var _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var _hooks_useFolder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFolder.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");
/* harmony import */ var _MoreButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/MoreButton.tsx");
/* harmony import */ var _export_GrafanaRuleFolderExporter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/export/GrafanaRuleFolderExporter.tsx");
/* harmony import */ var _DeleteModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/folder-actions/DeleteModal.tsx");
/* harmony import */ var _PauseUnpauseActionMenuItem__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/components/folder-actions/PauseUnpauseActionMenuItem.tsx");



















const FolderActionsButton = ({ folderUID }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isExporting, setIsExporting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const bulkActionsEnabled = _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.featureToggles.alertingBulkActionsInUI;
  const listView2Enabled = (0,_featureToggles__WEBPACK_IMPORTED_MODULE_9__.shouldUseAlertingListViewV2)();
  const [exportRulesSupported, exportRulesAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_10__.useAlertingAbility)(_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_10__.AlertingAction.ExportGrafanaManagedRules);
  const canExportRules = exportRulesSupported && exportRulesAllowed;
  const [deleteGrafanaRulesFromFolder, deleteState] = _api_alertingFolderActionsApi__WEBPACK_IMPORTED_MODULE_8__.alertingFolderActionsApi.endpoints.deleteGrafanaRulesFromFolder.useMutation();
  const { folder } = (0,_hooks_useFolder__WEBPACK_IMPORTED_MODULE_11__.useFolder)(folderUID);
  const folderName = folder?.title || "unknown folder";
  const folderUrl = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_14__.makeFolderLink)(folderUID);
  const viewComponent = listView2Enabled ? "list" : "grouped";
  const redirectToListView = useRedirectToListView(viewComponent);
  if (!folder) {
    return null;
  }
  const onConfirmDelete = async () => {
    await deleteGrafanaRulesFromFolder({ namespace: folderUID }).unwrap();
    await redirectToListView();
  };
  const menuItems = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Menu.Item,
      {
        url: folderUrl,
        icon: "eye",
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.list-view.folder-actions.view.aria-label", "View folder"),
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.list-view.folder-actions.view.label", "View folder")
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BulkActions, { folderUID, onClickDelete: setIsDeleteModalOpen, isLoading: deleteState.isLoading }),
    canExportRules && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      bulkActionsEnabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Menu.Divider, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ExportFolderButton, { onClickExport: () => setIsExporting(true) })
    ] })
  ] });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Dropdown, { placement: "bottom", overlay: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Menu, { children: menuItems }), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _MoreButton__WEBPACK_IMPORTED_MODULE_16__["default"],
      {
        fill: "text",
        size: "sm",
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.list-view.folder-actions.button.aria-label", "Folder actions"),
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.list-view.folder-actions.button.title", "Actions")
      }
    ) }),
    isExporting && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_export_GrafanaRuleFolderExporter__WEBPACK_IMPORTED_MODULE_17__.GrafanaRuleFolderExporter, { folder, onClose: () => setIsExporting(false) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _DeleteModal__WEBPACK_IMPORTED_MODULE_18__.DeleteModal,
      {
        isOpen: isDeleteModalOpen,
        onConfirm: onConfirmDelete,
        onDismiss: () => setIsDeleteModalOpen(false),
        folderName
      }
    )
  ] });
};
function useRedirectToListView(view) {
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  const prometheusRulesPrimary = (0,_featureToggles__WEBPACK_IMPORTED_MODULE_9__.shouldUsePrometheusRulesPrimary)();
  const redirectToListView = async () => {
    if (prometheusRulesPrimary) {
      await dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_12__.fetchRulerRulesAction)({ rulesSourceName: _utils_datasource__WEBPACK_IMPORTED_MODULE_13__.GRAFANA_RULES_SOURCE_NAME }));
      await dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_12__.fetchAllPromRulesAction)(false));
    } else {
      await dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_12__.fetchAllPromAndRulerRulesAction)(false));
    }
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.locationService.push((0,_utils_url__WEBPACK_IMPORTED_MODULE_15__.createRelativeUrl)("/alerting/list", { view }, { skipSubPath: true }));
  };
  return redirectToListView;
}
function ExportFolderButton({ onClickExport }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Menu.Item,
    {
      "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.list-view.folder-actions.export.aria-label", "Export rules folder"),
      "data-testid": "export-folder",
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.list-view.folder-actions.export.label", "Export rules folder"),
      icon: "download-alt",
      onClick: onClickExport
    },
    "export-folder"
  );
}
function BulkActions({
  folderUID,
  onClickDelete,
  isLoading
}) {
  const listView2Enabled = (0,_featureToggles__WEBPACK_IMPORTED_MODULE_9__.shouldUseAlertingListViewV2)();
  const bulkActionsEnabled = _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.featureToggles.alertingBulkActionsInUI;
  const [pauseSupported, pauseAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_10__.useFolderBulkActionAbility)(_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_10__.FolderBulkAction.Pause);
  const [deleteSupported, deleteAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_10__.useFolderBulkActionAbility)(_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_10__.FolderBulkAction.Delete);
  const canPause = pauseSupported && pauseAllowed;
  const canDelete = deleteSupported && deleteAllowed;
  const [pauseFolder, updateState] = _api_alertingFolderActionsApi__WEBPACK_IMPORTED_MODULE_8__.alertingFolderActionsApi.endpoints.pauseFolder.useMutation();
  const [unpauseFolder, unpauseState] = _api_alertingFolderActionsApi__WEBPACK_IMPORTED_MODULE_8__.alertingFolderActionsApi.endpoints.unpauseFolder.useMutation();
  const viewComponent = listView2Enabled ? "list" : "grouped";
  const redirectToListView = useRedirectToListView(viewComponent);
  if (!bulkActionsEnabled) {
    return null;
  }
  if (!canPause && !canDelete) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Menu.Divider, {}),
    canPause && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _PauseUnpauseActionMenuItem__WEBPACK_IMPORTED_MODULE_19__.PauseUnpauseActionMenuItem,
        {
          folderUID,
          action: "pause",
          executeAction: async (folderUID2) => {
            await pauseFolder({ namespace: folderUID2 }).unwrap();
            await redirectToListView();
          },
          isLoading: updateState.isLoading
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _PauseUnpauseActionMenuItem__WEBPACK_IMPORTED_MODULE_19__.PauseUnpauseActionMenuItem,
        {
          folderUID,
          action: "unpause",
          executeAction: async (folderUID2) => {
            await unpauseFolder({ namespace: folderUID2 }).unwrap();
            await redirectToListView();
          },
          isLoading: unpauseState.isLoading
        }
      )
    ] }),
    canDelete && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Menu.Item,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.folder-bulk-actions.delete.button.label", "Delete all rules"),
        icon: "trash-alt",
        onClick: () => onClickDelete(true),
        disabled: isLoading
      }
    )
  ] });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/folder-actions/PauseUnpauseActionMenuItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PauseUnpauseActionMenuItem: () => (/* binding */ PauseUnpauseActionMenuItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/Menu.tsx");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");







function PauseUnpauseActionMenuItem({ folderUID, executeAction, isLoading, action }) {
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__.useAppNotification)();
  const label = action === "pause" ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.folder-bulk-actions.pause.button.label", "Pause all rules") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.folder-bulk-actions.unpause.button.label", "Resume all rules");
  const icon = action === "pause" ? "pause" : "play";
  const trackActionSuccess = action === "pause" ? _Analytics__WEBPACK_IMPORTED_MODULE_4__.trackFolderBulkActionsPauseSuccess : _Analytics__WEBPACK_IMPORTED_MODULE_4__.trackFolderBulkActionsUnpauseSuccess;
  const trackActionFail = action === "pause" ? _Analytics__WEBPACK_IMPORTED_MODULE_4__.trackFolderBulkActionsPauseFail : _Analytics__WEBPACK_IMPORTED_MODULE_4__.trackFolderBulkActionsUnpauseFail;
  const onActionClick = async () => {
    try {
      await executeAction(folderUID);
      trackActionSuccess();
    } catch (error) {
      trackActionFail();
      notifyApp.error(
        (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.folder-bulk-actions.error", "Failed to execute action for folder: {{error}}", {
          error: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_5__.stringifyErrorLike)(error)
        })
      );
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, { label, icon, disabled: isLoading, onClick: onActionClick });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/ActionIcon.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionIcon: () => (/* binding */ ActionIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");



const ActionIcon = ({
  tooltip,
  icon,
  to,
  target,
  onClick,
  className,
  tooltipPlacement = "top",
  ...rest
}) => {
  const ariaLabel = typeof tooltip === "string" ? tooltip : void 0;
  return to ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton,
    {
      tooltip,
      tooltipPlacement,
      variant: "secondary",
      fill: "text",
      icon,
      href: to,
      size: "sm",
      target,
      ...rest,
      "aria-label": ariaLabel
    }
  ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button,
    {
      tooltip,
      tooltipPlacement,
      className,
      variant: "secondary",
      fill: "text",
      size: "sm",
      icon,
      type: "button",
      onClick,
      ...rest,
      "aria-label": ariaLabel
    }
  );
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/CloudRules.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudRules: () => (/* binding */ CloudRules),
/* harmony export */   CreateRecordingRuleButton: () => (/* binding */ CreateRecordingRuleButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/utils/url.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Pagination/Pagination.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/hooks/usePagination.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _styles_pagination__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/styles/pagination.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");
/* harmony import */ var _RulesGroup__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesGroup.tsx");
/* harmony import */ var _useCombinedGroupNamespace__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/useCombinedGroupNamespace.tsx");





















const CloudRules = ({ namespaces, expandAll }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.useStyles2)(getStyles);
  const promRules = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_20__.useUnifiedAlertingSelector)((state) => state.promRules);
  const rulesDataSources = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(_utils_datasource__WEBPACK_IMPORTED_MODULE_22__.getRulesDataSources, []);
  const groupsWithNamespaces = (0,_useCombinedGroupNamespace__WEBPACK_IMPORTED_MODULE_26__.useCombinedGroupNamespace)(namespaces);
  const dataSourcesLoading = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => rulesDataSources.filter((ds) => (0,_utils_redux__WEBPACK_IMPORTED_MODULE_23__.isAsyncRequestStatePending)(promRules[ds.name])),
    [promRules, rulesDataSources]
  );
  const hasSomeResults = rulesDataSources.some((ds) => Boolean(promRules[ds.name]?.result?.length));
  const hasDataSourcesConfigured = rulesDataSources.length > 0;
  const hasDataSourcesLoading = dataSourcesLoading.length > 0;
  const hasNamespaces = namespaces.length > 0;
  const { numberOfPages, onPageChange, page, pageItems } = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_19__.usePagination)(
    groupsWithNamespaces,
    1,
    _core_constants__WEBPACK_IMPORTED_MODULE_17__.DEFAULT_PER_PAGE_PAGINATION
  );
  const canMigrateToGMA = hasDataSourcesConfigured && _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.config.featureToggles.alertingMigrationUI && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_15__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_16__.AccessControlAction.AlertingRuleCreate) && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_15__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_16__.AccessControlAction.AlertingProvisioningSetStatus);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", { className: styles.wrapper, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { gap: 2, direction: "column", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.sectionHeader, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.headerRow, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Text, { element: "h2", variant: "h5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.list-view.section.dataSourceManaged.title", children: "Data source-managed" }) }),
      dataSourcesLoading.length ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.LoadingPlaceholder,
        {
          className: styles.loader,
          text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.list-view.section.loading-rules", "Loading rules from {{count}} sources", {
            count: dataSourcesLoading.length
          })
        }
      ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { gap: 1, children: [
        canMigrateToGMA && hasSomeResults && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MigrateToGMAButton, {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CreateRecordingRuleButton, {})
      ] })
    ] }) }) }),
    pageItems.map(({ group, namespace }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _RulesGroup__WEBPACK_IMPORTED_MODULE_25__.RulesGroup,
      {
        group,
        namespace,
        expandAll,
        viewMode: "grouped"
      },
      `${(0,_utils_datasource__WEBPACK_IMPORTED_MODULE_22__.getRulesSourceUid)(namespace.rulesSource)}-${namespace.name}-${group.name}`
    )),
    !hasDataSourcesConfigured && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.list-view.no-prom-or-loki-rules", children: "There are no Prometheus or Loki data sources configured" }) }),
    hasDataSourcesConfigured && !hasDataSourcesLoading && !hasNamespaces && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.list-view.no-rules", children: "No rules found." }) }),
    !hasSomeResults && hasDataSourcesLoading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Spinner, { size: "xl", className: styles.spinner }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Pagination,
      {
        className: styles.pagination,
        currentPage: page,
        numberOfPages,
        onNavigate: onPageChange,
        hideWhenSinglePage: true
      }
    )
  ] });
};
const getStyles = (theme) => ({
  loader: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: 0
  }),
  sectionHeader: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    justifyContent: "space-between"
  }),
  wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: theme.spacing(4)
  }),
  spinner: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    textAlign: "center",
    padding: theme.spacing(2)
  }),
  pagination: (0,_styles_pagination__WEBPACK_IMPORTED_MODULE_21__.getPaginationStyles)(theme),
  headerRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: theme.spacing(1)
  })
});
function CreateRecordingRuleButton() {
  const [createCloudRuleSupported, createCloudRuleAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_18__.useAlertingAbility)(_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_18__.AlertingAction.CreateExternalAlertRule);
  const location = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  const canCreateCloudRules = createCloudRuleSupported && createCloudRuleAllowed;
  if (canCreateCloudRules) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.LinkButton,
      {
        href: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.urlUtil.renderUrl(`alerting/new/recording`, {
          returnTo: location.pathname + location.search
        }),
        icon: "plus",
        variant: "secondary",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.list-view.empty.new-ds-managed-recording-rule", children: "New data source-managed recording rule" })
      },
      "new-recording-rule"
    );
  }
  return null;
}
function MigrateToGMAButton() {
  const importUrl = (0,_utils_url__WEBPACK_IMPORTED_MODULE_24__.createRelativeUrl)("/alerting/import-datasource-managed-rules");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.LinkButton, { variant: "secondary", href: importUrl, icon: "arrow-up", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { direction: "row", gap: 1, alignItems: "center", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.rule-list.import-to-gma.text", children: "Import to Grafana-managed rules" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Badge,
      {
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rule-list.import-to-gma.new-badge", "New!"),
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.migrate-to-gmabutton.aria-label-new", "new"),
        color: "blue",
        icon: "rocket"
      }
    )
  ] }) });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/Filter/RulesFilter.v1.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-alerting/src/grafana/contactPoints/components/ContactPointSelector/ContactPointSelector.tsx");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_Select_DashboardPicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/core/components/Select/DashboardPicker.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _hooks_useFilteredRules__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFilteredRules.ts");
/* harmony import */ var _plugins_useAlertingHomePageExtensions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/plugins/useAlertingHomePageExtensions.ts");
/* harmony import */ var _search_rulesSearchParser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/search/rulesSearchParser.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _HoverCard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/components/HoverCard.tsx");
/* harmony import */ var _MultipleDataSourcePicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/MultipleDataSourcePicker.tsx");
/* harmony import */ var _RulesViewModeSelector__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/Filter/RulesViewModeSelector.tsx");




















const RuleTypeOptions = [
  { label: "Alert ", value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_18__.PromRuleType.Alerting },
  { label: "Recording ", value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_18__.PromRuleType.Recording }
];
const RuleHealthOptions = [
  { label: "Ok", value: _search_rulesSearchParser__WEBPACK_IMPORTED_MODULE_22__.RuleHealth.Ok },
  { label: "No Data", value: _search_rulesSearchParser__WEBPACK_IMPORTED_MODULE_22__.RuleHealth.NoData },
  { label: "Error", value: _search_rulesSearchParser__WEBPACK_IMPORTED_MODULE_22__.RuleHealth.Error }
];
const canRenderContactPointSelector = app_core_core__WEBPACK_IMPORTED_MODULE_16__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_17__.AccessControlAction.AlertingReceiversRead);
const RuleStateOptions = Object.entries(app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_18__.PromAlertingRuleState).filter(([key, value]) => value !== app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_18__.PromAlertingRuleState.Unknown).map(([key, value]) => ({
  label: (0,_utils_rules__WEBPACK_IMPORTED_MODULE_23__.alertStateToReadable)(value),
  value
}));
const RulesFilter = ({ onClear = () => void 0, viewMode, onViewModeChange }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.useStyles2)(getStyles);
  const { pluginsFilterEnabled } = usePluginsFilterStatus();
  const { filterState, hasActiveFilters, searchQuery, setSearchQuery, updateFilters } = (0,_hooks_useFilteredRules__WEBPACK_IMPORTED_MODULE_20__.useRulesFilter)();
  const [filterKey, setFilterKey] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Math.floor(Math.random() * 100));
  const dataSourceKey = `dataSource-${filterKey}`;
  const queryStringKey = `queryString-${filterKey}`;
  const searchQueryRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const { handleSubmit, register, setValue } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    defaultValues: { searchQuery }
  });
  const { ref, ...rest } = register("searchQuery");
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setValue("searchQuery", searchQuery);
  }, [searchQuery, setValue]);
  const handleDataSourceChange = (dataSourceValue, action) => {
    const dataSourceNames = action === "add" ? [...filterState.dataSourceNames].concat([dataSourceValue.name]) : filterState.dataSourceNames.filter((name) => name !== dataSourceValue.name);
    updateFilters({
      ...filterState,
      dataSourceNames
    });
    setFilterKey((key) => key + 1);
    (0,_Analytics__WEBPACK_IMPORTED_MODULE_19__.trackAlertRuleFilterEvent)({ filterMethod: "filter-component", filter: "dataSourceNames", filterVariant: "v1" });
  };
  const updateAndTrack = (key) => (value) => {
    updateFilters({ ...filterState, [key]: value });
    (0,_Analytics__WEBPACK_IMPORTED_MODULE_19__.trackAlertRuleFilterEvent)({ filterMethod: "filter-component", filter: key, filterVariant: "v1" });
  };
  const clearDataSource = () => {
    updateFilters({ ...filterState, dataSourceNames: [] });
    setFilterKey((key) => key + 1);
  };
  const handleAlertStateChange = (value) => {
    (0,_Analytics__WEBPACK_IMPORTED_MODULE_19__.logInfo)(_Analytics__WEBPACK_IMPORTED_MODULE_19__.LogMessages.clickingAlertStateFilters);
    updateAndTrack("ruleState")(value);
  };
  const handleClearFiltersClick = () => {
    setSearchQuery(void 0);
    onClear();
    setTimeout(() => setFilterKey(filterKey + 1), 100);
  };
  const handleContactPointChange = (contactPoint) => {
    updateAndTrack("contactPoint")(contactPoint);
  };
  const searchIcon = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { name: "search" });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "column", gap: 0, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "row", gap: 1, wrap: "wrap", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Field,
        {
          className: styles.dsPickerContainer,
          label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Label, { htmlFor: "data-source-picker", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { gap: 0.5, alignItems: "center", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.rules-filter.search-by-data-sources", children: "Search by data sources" }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tooltip,
              {
                content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.rules-filter.configured-alert-rules", children: "Data sources containing configured alert rules are Mimir or Loki data sources where alert rules are stored and evaluated in the data source itself." }) }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.rules-filter.manage-alerts", children: "In these data sources, you can select Manage alerts via Alerting UI to be able to manage these alert rules in the Grafana UI as well as in the data source where they were configured." }) })
                ] }),
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon,
                  {
                    id: "data-source-picker-inline-help",
                    name: "info-circle",
                    size: "sm",
                    title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
                      "alerting.rules-filter.data-source-picker-inline-help-title-search-by-data-sources-help",
                      "Search by data sources help"
                    )
                  }
                )
              }
            )
          ] }) }),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _MultipleDataSourcePicker__WEBPACK_IMPORTED_MODULE_25__.MultipleDataSourcePicker,
            {
              alerting: true,
              noDefault: true,
              placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules-filter.placeholder-all-data-sources", "All data sources"),
              current: filterState.dataSourceNames,
              onChange: handleDataSourceChange,
              onClear: clearDataSource
            },
            dataSourceKey
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Field,
        {
          className: styles.dashboardPickerContainer,
          label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Label, { htmlFor: "filters-dashboard-picker", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.rules-filter.dashboard", children: "Dashboard" }) }),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            app_core_components_Select_DashboardPicker__WEBPACK_IMPORTED_MODULE_15__.DashboardPicker,
            {
              inputId: "filters-dashboard-picker",
              value: filterState.dashboardUid,
              onChange: (value) => updateAndTrack("dashboardUid")(value?.uid),
              isClearable: true,
              cacheOptions: true
            },
            filterState.dashboardUid ? "dashboard-defined" : "dashboard-not-defined"
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Label, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.rules-filter.state", children: "State" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.RadioButtonGroup,
          {
            options: RuleStateOptions,
            value: filterState.ruleState,
            onChange: handleAlertStateChange
          }
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Label, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.rules-filter.rule-type", children: "Rule type" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.RadioButtonGroup,
          {
            options: RuleTypeOptions,
            value: filterState.ruleType,
            onChange: updateAndTrack("ruleType")
          }
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Label, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.rules-filter.health", children: "Health" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.RadioButtonGroup,
          {
            options: RuleHealthOptions,
            value: filterState.ruleHealth,
            onChange: updateAndTrack("ruleHealth")
          }
        )
      ] }),
      canRenderContactPointSelector && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "column", gap: 0, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Field,
        {
          label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Label, { htmlFor: "contactPointFilter", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.contactPointFilter.label", children: "Contact point" }) }),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_4__.ContactPointSelector,
            {
              id: "contactPointFilter",
              value: filterState.contactPoint ?? null,
              width: 40,
              placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
                "alerting.notification-policies-filter.placeholder-search-by-contact-point",
                "Choose a contact point"
              ),
              isClearable: true,
              onChange: (contactPoint) => {
                handleContactPointChange(contactPoint?.spec.title ?? "");
              }
            }
          )
        }
      ) }),
      pluginsFilterEnabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Label, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.rules-filter.plugin-rules", children: "Plugin rules" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.RadioButtonGroup,
          {
            options: [
              { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules-filter.label.show", "Show"), value: void 0 },
              { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules-filter.label.hide", "Hide"), value: "hide" }
            ],
            value: filterState.plugins,
            onChange: (value) => updateFilters({ ...filterState, plugins: value })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "column", gap: 0, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "row", gap: 1, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          "form",
          {
            className: styles.searchInput,
            onSubmit: handleSubmit((data) => {
              setSearchQuery(data.searchQuery);
              searchQueryRef.current?.blur();
              (0,_Analytics__WEBPACK_IMPORTED_MODULE_19__.trackAlertRuleFilterEvent)({
                filterMethod: "search-input",
                filter: (0,_search_rulesSearchParser__WEBPACK_IMPORTED_MODULE_22__.getSearchFilterFromQuery)(data.searchQuery),
                filterVariant: "v1"
              });
            }),
            children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Field,
                {
                  label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Label, { htmlFor: "rulesSearchInput", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { gap: 0.5, alignItems: "center", children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.rules-filter.search", children: "Search" }) }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HoverCard__WEBPACK_IMPORTED_MODULE_24__.PopupCard, { content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SearchQueryHelp, {}), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon,
                      {
                        name: "info-circle",
                        size: "sm",
                        tabIndex: 0,
                        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules-filter.title-search-help", "Search help")
                      }
                    ) })
                  ] }) }),
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Input,
                    {
                      id: "rulesSearchInput",
                      prefix: searchIcon,
                      ref: (e) => {
                        ref(e);
                        searchQueryRef.current = e;
                      },
                      ...rest,
                      placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules-filter.rulesSearchInput-placeholder-search", "Search"),
                      "data-testid": "search-query-input"
                    },
                    queryStringKey
                  )
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "submit", hidden: true })
            ]
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Label, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.rules-filter.view-as", children: "View as" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RulesViewModeSelector__WEBPACK_IMPORTED_MODULE_26__.RulesViewModeSelector, { viewMode, onViewModeChange })
        ] })
      ] }),
      hasActiveFilters && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button, { fullWidth: false, icon: "times", variant: "secondary", onClick: handleClearFiltersClick, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.rules-filter.clear-filters", children: "Clear filters" }) }) })
    ] })
  ] });
};
const getStyles = (theme) => {
  return {
    dsPickerContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: theme.spacing(60),
      flexGrow: 0,
      margin: 0
    }),
    dashboardPickerContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      minWidth: theme.spacing(50)
    }),
    searchInput: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flex: 1,
      margin: 0
    })
  };
};
function SearchQueryHelp() {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.useStyles2)(helpStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.search-query-help.search-syntax", children: "Search syntax allows to query alert rules by the parameters defined below." }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.grid, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.search-query-help.filter-type", children: "Filter type" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.search-query-help.expression", children: "Expression" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        HelpRow,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.search-query-help.title-datasources", "Datasources"),
          expr: "datasource:mimir datasource:prometheus"
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        HelpRow,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.search-query-help.title-folder-namespace", "Folder/Namespace"),
          expr: "namespace:global"
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HelpRow, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.search-query-help.title-group", "Group"), expr: "group:cpu-usage" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HelpRow, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.search-query-help.title-rule", "Rule"), expr: 'rule:"cpu 80%"' }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        HelpRow,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.search-query-help.title-labels", "Labels"),
          expr: 'label:team=A label:"cluster=new york"'
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HelpRow, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.search-query-help.title-state", "State"), expr: "state:firing|normal|pending" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HelpRow, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.search-query-help.title-type", "Type"), expr: "type:alerting|recording" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HelpRow, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.search-query-help.title-health", "Health"), expr: "health:ok|nodata|error" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        HelpRow,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.search-query-help.title-dashboard-uid", "Dashboard UID"),
          expr: "dashboard:eadde4c7-54e6-4964-85c0-484ab852fd04"
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        HelpRow,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.search-query-help.title-contact-point", "Contact point"),
          expr: "contactPoint:slack"
        }
      )
    ] })
  ] });
}
function HelpRow({ title, expr }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.useStyles2)(helpStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: title }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { className: styles.code, children: expr })
  ] });
}
const helpStyles = (theme) => ({
  grid: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "grid",
    gridTemplateColumns: "max-content auto",
    gap: theme.spacing(1),
    alignItems: "center"
  }),
  code: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "block",
    textAlign: "center"
  })
});
function usePluginsFilterStatus() {
  const { components } = (0,_plugins_useAlertingHomePageExtensions__WEBPACK_IMPORTED_MODULE_21__.useAlertingHomePageExtensions)();
  return { pluginsFilterEnabled: components.length > 0 };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RulesFilter);


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/Filter/RulesViewModeSelector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RulesViewModeSelector: () => (/* binding */ RulesViewModeSelector),
/* harmony export */   useListViewMode: () => (/* binding */ useListViewMode)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _featureToggles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/featureToggles.ts");
/* harmony import */ var _hooks_useFilteredRules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFilteredRules.ts");
/* harmony import */ var _hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useURLSearchParams.ts");








const ViewOptions = [
  { icon: "folder", value: "grouped", label: "Grouped" },
  { icon: "list-ul", value: "list", label: "List" }
];
function RulesViewModeSelectorV2({ viewMode, onViewModeChange }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, { options: ViewOptions, value: viewMode, onChange: onViewModeChange });
}
function useListViewMode() {
  const [queryParams, updateQueryParams] = (0,_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_6__.useURLSearchParams)();
  const { activeFilters } = (0,_hooks_useFilteredRules__WEBPACK_IMPORTED_MODULE_5__.useRulesFilter)();
  const queryStringView = queryParams.get("view") === "list" ? "list" : "grouped";
  const areFiltersGroupedViewCompatible = activeFilters.every(
    (filter) => filter === "groupName" || filter === "namespace"
  );
  const showListView = areFiltersGroupedViewCompatible === false || queryStringView === "list";
  const handleViewChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (view) => {
      if (view === "grouped") {
        if (areFiltersGroupedViewCompatible) {
          updateQueryParams({ view: void 0 });
        } else {
          updateQueryParams({ view: void 0, search: void 0 });
        }
      } else {
        updateQueryParams({ view });
      }
      (0,_Analytics__WEBPACK_IMPORTED_MODULE_3__.trackRulesListViewChange)({ view });
    },
    [updateQueryParams, areFiltersGroupedViewCompatible]
  );
  const viewMode = showListView ? "list" : "grouped";
  return {
    viewMode,
    handleViewChange
  };
}
const LegacyViewOptions = [
  { label: "Grouped", value: "grouped" },
  { label: "List", value: "list" },
  { label: "State", value: "state" }
];
function RulesViewModeSelectorV1() {
  const [queryParams, updateQueryParams] = (0,_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_6__.useURLSearchParams)();
  const viewParam = queryParams.get("view");
  const currentView = viewParamToLegacyView(viewParam);
  const handleViewChange = (view) => {
    updateQueryParams({ view });
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, { options: LegacyViewOptions, value: currentView, onChange: handleViewChange });
}
function viewParamToLegacyView(viewParam) {
  if (viewParam === "list") {
    return "list";
  }
  if (viewParam === "state") {
    return "state";
  }
  return "grouped";
}
function RulesViewModeSelector({ viewMode, onViewModeChange }) {
  if ((0,_featureToggles__WEBPACK_IMPORTED_MODULE_4__.shouldUseAlertingListViewV2)()) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RulesViewModeSelectorV2, { viewMode, onViewModeChange });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RulesViewModeSelectorV1, {});
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/GrafanaRules.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrafanaRules: () => (/* binding */ GrafanaRules)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useToggle.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Pagination/Pagination.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var _hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/hooks/usePagination.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _styles_pagination__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/styles/pagination.ts");
/* harmony import */ var _utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/utils/accessControlHooks.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");
/* harmony import */ var _export_GrafanaRulesExporter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/components/export/GrafanaRulesExporter.tsx");
/* harmony import */ var _RulesGroup__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesGroup.tsx");
/* harmony import */ var _useCombinedGroupNamespace__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/useCombinedGroupNamespace.tsx");






















const GrafanaRules = ({ namespaces, expandAll }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_12__.useQueryParams)();
  const { prom, ruler } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_18__.useUnifiedAlertingSelector)((state) => ({
    prom: state.promRules[_utils_datasource__WEBPACK_IMPORTED_MODULE_21__.GRAFANA_RULES_SOURCE_NAME] || _utils_redux__WEBPACK_IMPORTED_MODULE_22__.initialAsyncRequestState,
    ruler: state.rulerRules[_utils_datasource__WEBPACK_IMPORTED_MODULE_21__.GRAFANA_RULES_SOURCE_NAME] || _utils_redux__WEBPACK_IMPORTED_MODULE_22__.initialAsyncRequestState
  }));
  const loading = prom.loading || ruler.loading;
  const hasResult = !!prom.result || !!ruler.result;
  const wantsListView = queryParams.view === "list";
  const namespacesFormat = wantsListView ? (0,_hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_16__.flattenGrafanaManagedRules)(namespaces) : namespaces;
  const groupsWithNamespaces = (0,_useCombinedGroupNamespace__WEBPACK_IMPORTED_MODULE_26__.useCombinedGroupNamespace)(namespacesFormat);
  const { numberOfPages, onPageChange, page, pageItems } = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_17__.usePagination)(
    groupsWithNamespaces,
    1,
    _core_constants__WEBPACK_IMPORTED_MODULE_13__.DEFAULT_PER_PAGE_PAGINATION
  );
  const [exportRulesSupported, exportRulesAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_15__.useAlertingAbility)(_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_15__.AlertingAction.ExportGrafanaManagedRules);
  const canExportRules = exportRulesSupported && exportRulesAllowed;
  const [showExportDrawer, toggleShowExportDrawer] = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(false);
  const hasGrafanaAlerts = namespaces.length > 0;
  const { canCreateGrafanaRules } = (0,_utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_20__.useRulesAccess)();
  const grafanaRecordingRulesEnabled = _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.unifiedAlerting.recordingRulesEnabled && canCreateGrafanaRules;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", { className: styles.wrapper, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.sectionHeader, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.headerRow, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Text, { element: "h2", variant: "h5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.list-view.section.grafanaManaged.title", children: "Grafana-managed" }) }),
      loading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LoadingPlaceholder,
        {
          className: styles.loader,
          text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.list-view.section.grafanaManaged.loading", "Loading...")
        }
      ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "row", alignItems: "center", justifyContent: "flex-end", children: [
        hasGrafanaAlerts && canExportRules && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button,
          {
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
              "alerting.grafana-rules.export-all-grafana-rules-aria-label-export-all-grafana-rules",
              "export all grafana rules"
            ),
            "data-testid": "export-all-grafana-rules",
            icon: "download-alt",
            tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
              "alerting.grafana-rules.export-all-grafana-rules-tooltip-export-all-grafanamanaged-rules",
              "Export all Grafana-managed rules"
            ),
            onClick: toggleShowExportDrawer,
            variant: "secondary",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.list-view.section.grafanaManaged.export-rules", children: "Export rules" })
          }
        ),
        grafanaRecordingRulesEnabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.LinkButton,
          {
            href: (0,_utils_url__WEBPACK_IMPORTED_MODULE_23__.createRelativeUrl)("/alerting/new/grafana-recording", {
              returnTo: "/alerting/list" + window.location.search
            }),
            icon: "plus",
            variant: "secondary",
            tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
              "alerting.grafana-rules.tooltip-create-new-grafanamanaged-recording-rule",
              "Create new Grafana-managed recording rule"
            ),
            onClick: () => (0,_Analytics__WEBPACK_IMPORTED_MODULE_14__.logInfo)(_Analytics__WEBPACK_IMPORTED_MODULE_14__.LogMessages.grafanaRecording),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.list-view.section.grafanaManaged.new-recording-rule", children: "New recording rule" })
          }
        )
      ] })
    ] }) }),
    pageItems.map(({ group, namespace }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _RulesGroup__WEBPACK_IMPORTED_MODULE_25__.RulesGroup,
      {
        group,
        namespace,
        expandAll,
        viewMode: wantsListView ? "list" : "grouped"
      },
      `${namespace.name}-${group.name}`
    )),
    hasResult && namespacesFormat?.length === 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.grafana-rules.no-rules-found", children: "No rules found." }) }),
    !hasResult && loading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Spinner, { size: "xl", className: styles.spinner }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Pagination,
      {
        className: styles.pagination,
        currentPage: page,
        numberOfPages,
        onNavigate: onPageChange,
        hideWhenSinglePage: true
      }
    ),
    canExportRules && showExportDrawer && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_export_GrafanaRulesExporter__WEBPACK_IMPORTED_MODULE_24__.GrafanaRulesExporter, { onClose: toggleShowExportDrawer })
  ] });
};
const getStyles = (theme) => ({
  loader: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: 0
  }),
  sectionHeader: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1)
  }),
  wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: theme.spacing(4)
  }),
  spinner: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    textAlign: "center",
    padding: theme.spacing(2)
  }),
  pagination: (0,_styles_pagination__WEBPACK_IMPORTED_MODULE_19__.getPaginationStyles)(theme),
  headerRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/MultipleDataSourcePicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultipleDataSourcePicker: () => (/* binding */ MultipleDataSourcePicker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/pluginSignature.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/services/dataSourceSrv.ts");
/* harmony import */ var _grafana_runtime_internal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/PluginSignatureBadge/PluginSignatureBadge.tsx");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");










const MultipleDataSourcePicker = (props) => {
  const dataSourceSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.getDataSourceSrv)();
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const onChange = (items, actionMeta) => {
    if (actionMeta.action === "clear" && props.onClear) {
      props.onClear();
      return;
    }
    const selectedItem = items[items.length - 1];
    let dataSourceName, action;
    if (actionMeta.action === "pop-value" || actionMeta.action === "remove-value") {
      const castedActionMeta = actionMeta;
      dataSourceName = castedActionMeta.removedValue?.value;
      action = "remove";
    } else {
      dataSourceName = selectedItem.value;
      action = "add";
    }
    const dsSettings = dataSourceSrv.getInstanceSettings(dataSourceName);
    if (dsSettings) {
      props.onChange(dsSettings, action);
      setState({ error: void 0 });
    }
  };
  const getCurrentValue = () => {
    const { current, hideTextValue, noDefault } = props;
    if (!current && noDefault) {
      return;
    }
    return current?.map((dataSourceName) => {
      const ds = dataSourceSrv.getInstanceSettings(dataSourceName);
      if (ds) {
        return {
          label: ds.name.slice(0, 37),
          value: ds.name,
          imgUrl: ds.meta.info.logos.small,
          hideText: hideTextValue,
          meta: ds.meta
        };
      }
      const uid = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getDataSourceUID)(dataSourceName);
      if (uid === _grafana_runtime_internal__WEBPACK_IMPORTED_MODULE_7__.ExpressionDatasourceRef.uid || uid === _grafana_runtime_internal__WEBPACK_IMPORTED_MODULE_7__.ExpressionDatasourceRef.name) {
        return { label: uid, value: uid, hideText: hideTextValue };
      }
      return {
        label: (uid ?? "no name") + " - not found",
        value: uid ?? void 0,
        imgUrl: "",
        hideText: hideTextValue
      };
    });
  };
  const getDataSourceOptions = () => {
    const { alerting, tracing, metrics, mixed, dashboard, variables, annotations, pluginId, type, filter, logs } = props;
    const dataSources = dataSourceSrv.getList({
      alerting,
      tracing,
      metrics,
      logs,
      dashboard,
      mixed,
      variables,
      annotations,
      pluginId,
      filter,
      type
    });
    const alertManagingDs = dataSources.filter(_utils_datasource__WEBPACK_IMPORTED_MODULE_11__.isDataSourceManagingAlerts).map((ds) => ({
      value: ds.name,
      label: `${ds.name}${ds.isDefault ? " (default)" : ""}`,
      imgUrl: ds.meta.info.logos.small,
      meta: ds.meta
    }));
    const nonAlertManagingDs = dataSources.filter((ds) => !(0,_utils_datasource__WEBPACK_IMPORTED_MODULE_11__.isDataSourceManagingAlerts)(ds)).map((ds) => ({
      value: ds.name,
      label: `${ds.name}${ds.isDefault ? " (default)" : ""}`,
      imgUrl: ds.meta.info.logos.small,
      meta: ds.meta
    }));
    const groupedOptions = [
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "alerting.multiple-data-source-picker.get-data-source-options.grouped-options.label.data-sources-with-configured-alert-rules",
          "Data sources with configured alert rules"
        ),
        options: alertManagingDs,
        expanded: true
      },
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "alerting.multiple-data-source-picker.get-data-source-options.grouped-options.label.other-data-sources",
          "Other data sources"
        ),
        options: nonAlertManagingDs,
        expanded: true
      }
    ];
    return groupedOptions;
  };
  const {
    autoFocus,
    onBlur,
    onClear,
    openMenuOnFocus,
    placeholder,
    width,
    inputId,
    disabled = false,
    isLoading = false
  } = props;
  const options = getDataSourceOptions();
  const value = getCurrentValue();
  const isClearable = typeof onClear === "function";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.DataSourcePicker.container, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.MultiSelect,
    {
      isLoading,
      disabled,
      "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.DataSourcePicker.inputV2,
      inputId: inputId || "data-source-picker",
      className: "ds-picker select-container",
      isClearable,
      backspaceRemovesValue: true,
      onChange,
      options,
      autoFocus,
      onBlur,
      width,
      openMenuOnFocus,
      maxMenuHeight: 500,
      placeholder,
      noOptionsMessage: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
        "alerting.multiple-data-source-picker.noOptionsMessage-no-datasources-found",
        "No datasources found"
      ),
      value: value ?? [],
      invalid: Boolean(state?.error) || Boolean(props.invalid),
      getOptionLabel: (o) => {
        if (o.meta && (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.isUnsignedPluginSignature)(o.meta.signature) && o !== value) {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { alignItems: "center", justifyContent: "space-between", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: o.label }),
            " ",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.PluginSignatureBadge, { status: o.meta.signature })
          ] });
        }
        return o.label || "";
      }
    }
  ) });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/NoRulesCTA.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudNoRulesCTA: () => (/* binding */ CloudNoRulesCTA),
/* harmony export */   GrafanaNoRulesCTA: () => (/* binding */ GrafanaNoRulesCTA),
/* harmony export */   NoRulesSplash: () => (/* binding */ NoRulesSplash)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/Menu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/MenuItem.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Dropdown/Dropdown.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/accessControlHooks.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");









const RecordingRulesButtons = () => {
  const { canCreateGrafanaRules, canCreateCloudRules } = (0,_utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_14__.useRulesAccess)();
  const grafanaRecordingRulesEnabled = _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.unifiedAlerting.recordingRulesEnabled && canCreateGrafanaRules;
  const canCreateAll = canCreateGrafanaRules && canCreateCloudRules && grafanaRecordingRulesEnabled;
  if (canCreateAll) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Dropdown,
      {
        overlay: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Menu, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.MenuItem,
            {
              url: "alerting/new/grafana-recording",
              icon: "plus",
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.list-view.empty.new-grafana-recording-rule", "New recording rule")
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.MenuItem,
            {
              url: "alerting/new/recording",
              icon: "plus",
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
                "alerting.list-view.empty.new-ds-managed-recording-rule",
                "New data source-managed recording rule"
              )
            }
          )
        ] }),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.LinkButton, { variant: "primary", icon: "plus", size: "lg", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.list-view.empty.new-recording-rule", children: "New recording rule" }) })
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    canCreateGrafanaRules && grafanaRecordingRulesEnabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.LinkButton, { variant: "primary", icon: "plus", size: "lg", href: "alerting/new/grafana-recording", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.list-view.empty.new-grafana-recording-rule", children: "New recording rule" }) }),
    canCreateCloudRules && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.LinkButton, { variant: "primary", icon: "plus", size: "lg", href: "alerting/new/recording", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.list-view.empty.new-ds-managed-recording-rule", children: "New data source-managed recording rule" }) })
  ] });
};
const NoRulesSplash = () => {
  const { canCreateGrafanaRules, canCreateCloudRules } = (0,_utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_14__.useRulesAccess)();
  const canCreateAnything = canCreateGrafanaRules || canCreateCloudRules;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.EmptyState,
    {
      message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.list-view.empty.no-rules-created", "You haven't created any rules yet"),
      variant: "call-to-action",
      button: canCreateAnything ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "column", alignItems: "center", justifyContent: "center", children: [
        canCreateAnything && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.LinkButton, { variant: "primary", icon: "plus", size: "lg", href: "alerting/new/alerting", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.list-view.empty.new-alert-rule", children: "New alert rule" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RecordingRulesButtons, {})
      ] }) : null,
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.list-view.empty.provisioning", children: "You can also define rules through file provisioning or Terraform" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.TextLink, { href: "https://grafana.com/docs/grafana/latest/alerting/set-up/provision-alerting-resources/", external: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.common.learn-more", children: "Learn more" }) })
      ]
    }
  ) });
};
function GrafanaNoRulesCTA() {
  const { canCreateGrafanaRules } = (0,_utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_14__.useRulesAccess)();
  const grafanaRecordingRulesEnabled = _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.unifiedAlerting.recordingRulesEnabled && canCreateGrafanaRules;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.EmptyState,
    {
      message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.list-view.empty.no-rules-created", "You haven't created any rules yet"),
      variant: "call-to-action",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "column", alignItems: "center", justifyContent: "center", gap: 2, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "row", alignItems: "center", justifyContent: "center", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.list-view.empty.provisioning", children: "You can also define rules through file provisioning or Terraform" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.TextLink,
            {
              href: "https://grafana.com/docs/grafana/latest/alerting/set-up/provision-alerting-resources/",
              external: true,
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.common.learn-more", children: "Learn more" })
            }
          )
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "row", alignItems: "center", justifyContent: "center", children: [
          canCreateGrafanaRules && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.LinkButton, { variant: "primary", icon: "plus", href: "alerting/new/alerting", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.list-view.empty.new-grafana-alerting-rule", children: "New alert rule" }) }),
          canCreateGrafanaRules && grafanaRecordingRulesEnabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.LinkButton, { variant: "primary", icon: "plus", href: "alerting/new/grafana-recording", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.list-view.empty.new-grafana-recording-rule", children: "New recording rule" }) })
        ] })
      ] })
    }
  );
}
function CloudNoRulesCTA({ dataSourceName }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useStyles2)(getCloudNoRulesStyles);
  const { canCreateCloudRules } = (0,_utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_14__.useRulesAccess)();
  const newAlertingRuleUrl = getNewDataSourceRuleUrl(dataSourceName, _types_rule_form__WEBPACK_IMPORTED_MODULE_13__.RuleFormType.cloudAlerting);
  const newRecordingRuleUrl = getNewDataSourceRuleUrl(dataSourceName, _types_rule_form__WEBPACK_IMPORTED_MODULE_13__.RuleFormType.cloudRecording);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Text, { variant: "h5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.list-view.empty.ds-no-rules", children: "This data source has no rules configured" }) }),
    canCreateCloudRules && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "row", alignItems: "center", justifyContent: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.LinkButton, { variant: "secondary", size: "sm", icon: "plus", href: newAlertingRuleUrl, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.list-view.empty.new-ds-managed-alerting-rule", children: "New data source-managed alerting rule" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.LinkButton, { variant: "secondary", size: "sm", icon: "plus", href: newRecordingRuleUrl, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.list-view.empty.new-ds-managed-recording-rule", children: "New data source-managed recording rule" }) })
    ] })
  ] });
}
function getNewDataSourceRuleUrl(dataSourceName, type) {
  const urlRuleType = type === _types_rule_form__WEBPACK_IMPORTED_MODULE_13__.RuleFormType.cloudAlerting ? "alerting" : "recording";
  const formDefaults = {
    dataSourceName,
    editorSettings: {
      simplifiedQueryEditor: false,
      simplifiedNotificationEditor: false
    },
    type
  };
  return (0,_utils_url__WEBPACK_IMPORTED_MODULE_15__.createRelativeUrl)(`/alerting/new/${urlRuleType}`, { defaults: JSON.stringify(formDefaults) });
}
const getCloudNoRulesStyles = (theme) => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    gap: theme.spacing(1),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2, 1)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleListErrors.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuleListErrors: () => (/* binding */ RuleListErrors)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useLocalStorage.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");











function RuleListErrors() {
  const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [closed, setClosed] = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])("grafana.unifiedalerting.hideErrors", false);
  const promRuleRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_9__.useUnifiedAlertingSelector)((state) => state.promRules);
  const rulerRuleRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_9__.useUnifiedAlertingSelector)((state) => state.rulerRules);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const errors = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const [promRequestErrors, rulerRequestErrors] = [promRuleRequests, rulerRuleRequests].map(
      (requests) => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_10__.getRulesDataSources)().reduce(
        (result2, dataSource) => {
          const error = requests[dataSource.name]?.error;
          if (requests[dataSource.name] && error && !(0,_utils_rules__WEBPACK_IMPORTED_MODULE_12__.isRulerNotSupportedResponse)(requests[dataSource.name])) {
            return [...result2, { dataSource, error }];
          }
          return result2;
        },
        []
      )
    );
    const grafanaPromError = promRuleRequests[_utils_datasource__WEBPACK_IMPORTED_MODULE_10__.GRAFANA_RULES_SOURCE_NAME]?.error;
    const grafanaRulerError = rulerRuleRequests[_utils_datasource__WEBPACK_IMPORTED_MODULE_10__.GRAFANA_RULES_SOURCE_NAME]?.error;
    const result = [];
    const unknownError = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.rule-list-errors.unknown-error", "Unknown error.");
    if (grafanaPromError) {
      result.push(
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.rule-list-errors.failed-to-load-grafana-rules-state", children: "Failed to load Grafana rules state:" }),
          " ",
          grafanaPromError.message || unknownError
        ] })
      );
    }
    if (grafanaRulerError) {
      result.push(
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.rule-list-errors.failed-to-load-grafana-rules-config", children: "Failed to load Grafana rules config:" }),
          " ",
          grafanaRulerError?.message || unknownError
        ] })
      );
    }
    promRequestErrors.forEach(
      ({ dataSource, error }) => result.push(
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans,
            {
              i18nKey: "alerting.rule-list-errors.failed-to-load-rules-state",
              values: { dataSource: dataSource.name },
              children: [
                "Failed to load rules state from",
                " ",
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_11__.makeDataSourceLink)(dataSource.uid), className: styles.dsLink, children: "{{dataSource}}" })
              ]
            }
          ),
          ": ",
          error.message || unknownError
        ] })
      )
    );
    rulerRequestErrors.forEach(
      ({ dataSource, error }) => result.push(
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans,
            {
              i18nKey: "alerting.rule-list-errors.failed-to-load-rules-config",
              values: { dataSource: dataSource.name },
              children: [
                "Failed to load rules config from",
                " ",
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_11__.makeDataSourceLink)(dataSource.uid), className: styles.dsLink, children: "{{dataSource}}" })
              ]
            }
          ),
          ": ",
          error.message || unknownError
        ] })
      )
    );
    return result;
  }, [promRuleRequests, rulerRuleRequests, styles.dsLink]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    !!errors.length && closed && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ErrorSummaryButton, { count: errors.length, onClick: () => setClosed((closed2) => !closed2) }),
    !!errors.length && !closed && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert,
      {
        "data-testid": "cloud-rulessource-errors",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "alerting.rule-list-errors.cloud-rulessource-errors-title-errors-loading-rules",
          "Errors loading rules"
        ),
        severity: "error",
        onRemove: () => setClosed(true),
        children: [
          expanded && errors.map((item, idx) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: item }, idx)),
          !expanded && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: errors[0] }),
            errors.length >= 2 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
              {
                className: styles.moreButton,
                fill: "text",
                icon: "angle-right",
                size: "sm",
                onClick: () => setExpanded(true),
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.rule-list-errors.more-errors", count: errors.length - 1, children: [
                  "{{count}}",
                  " more errors"
                ] })
              }
            )
          ] })
        ]
      }
    )
  ] });
}
const ErrorSummaryButton = ({ count, onClick }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.floatRight, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
    {
      content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.error-summary-button.content-show-all-errors", "Show all errors"),
      placement: "bottom",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { fill: "text", variant: "destructive", icon: "exclamation-triangle", onClick, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.rule-list-errors.button-errors", count, children: [
        "{{count}}",
        " errors"
      ] }) })
    }
  ) });
};
const getStyles = (theme) => ({
  moreButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: 0
  }),
  floatRight: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    justifyContent: "flex-end"
  }),
  dsLink: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontWeight: theme.typography.fontWeightBold,
    color: theme.colors.text.link
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleListGroupView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuleListGroupView: () => (/* binding */ RuleListGroupView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _Authorize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _CloudRules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/CloudRules.tsx");
/* harmony import */ var _GrafanaRules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/GrafanaRules.tsx");









const RuleListGroupView = ({ namespaces, expandAll }) => {
  const [grafanaNamespaces, cloudNamespaces] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const sorted = namespaces.map((namespace) => ({
      ...namespace,
      groups: namespace.groups.sort((a, b) => a.name.localeCompare(b.name))
    })).sort((a, b) => a.name.localeCompare(b.name));
    return [
      sorted.filter((ns) => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_4__.isGrafanaRulesSource)(ns.rulesSource)),
      sorted.filter((ns) => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_4__.isCloudRulesSource)(ns.rulesSource))
    ];
  }, [namespaces]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_Analytics__WEBPACK_IMPORTED_MODULE_2__.logInfo)(_Analytics__WEBPACK_IMPORTED_MODULE_2__.LogMessages.loadedList);
  }, []);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_5__.Authorize, { actions: [_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_3__.AlertingAction.ViewAlertRule], children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GrafanaRules__WEBPACK_IMPORTED_MODULE_7__.GrafanaRules, { namespaces: grafanaNamespaces, expandAll }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_5__.Authorize, { actions: [_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_3__.AlertingAction.ViewExternalAlertRule], children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CloudRules__WEBPACK_IMPORTED_MODULE_6__.CloudRules, { namespaces: cloudNamespaces, expandAll }) })
  ] });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleListStateView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuleListStateView: () => (/* binding */ RuleListStateView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useMeasure.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingBar/LoadingBar.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Pagination/Pagination.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/Counter.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_core_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/hooks/usePagination.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _rule_list_components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/AlertRuleListItem.tsx");
/* harmony import */ var _rule_list_components_ListSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/ListSection.tsx");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _rule_viewer_RuleViewer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/RuleViewer.tsx");
/* harmony import */ var _RuleActionsButtons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleActionsButtons.tsx");


















const RuleListStateView = ({ namespaces }) => {
  const [ref, { width }] = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const isLoading = useDataSourcesLoadingState();
  const groupedRules = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const result = /* @__PURE__ */ new Map([
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_8__.PromAlertingRuleState.Firing, []],
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_8__.PromAlertingRuleState.Pending, []],
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_8__.PromAlertingRuleState.Recovering, []],
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_8__.PromAlertingRuleState.Inactive, []],
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_8__.PromAlertingRuleState.Unknown, []]
    ]);
    namespaces.forEach(
      (namespace) => namespace.groups.forEach(
        (group) => group.rules.forEach((rule) => {
          if (_utils_rules__WEBPACK_IMPORTED_MODULE_17__.prometheusRuleType.alertingRule(rule.promRule) && rule.promRule.state) {
            result.get(rule.promRule.state)?.push(rule);
          }
        })
      )
    );
    result.forEach((rules) => rules.sort((a, b) => a.name.localeCompare(b.name)));
    return result;
  }, [namespaces]);
  const entries = groupedRules.entries();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", { role: "tree", ref, children: [
    isLoading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingBar, { width }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "column", children: Array.from(entries).map(([state, rules]) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RulesByState, { state, rules }, state)) })
  ] });
};
const STATE_TITLES = {
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_8__.PromAlertingRuleState.Firing]: "Firing",
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_8__.PromAlertingRuleState.Pending]: "Pending",
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_8__.PromAlertingRuleState.Inactive]: "Normal",
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_8__.PromAlertingRuleState.Recovering]: "Recovering",
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_8__.PromAlertingRuleState.Unknown]: "Unknown"
};
const RulesByState = ({ state, rules }) => {
  const { page, pageItems, numberOfPages, onPageChange } = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_9__.usePagination)(rules, 1, app_core_constants__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_PER_PAGE_PAGINATION);
  const isFiringState = state !== app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_8__.PromAlertingRuleState.Firing;
  const hasRulesMatchingState = rules.length > 0;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _rule_list_components_ListSection__WEBPACK_IMPORTED_MODULE_12__.ListSection,
    {
      title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { alignItems: "center", gap: 0, children: [
        STATE_TITLES[state] ?? "Unknown",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Counter, { value: rules.length })
      ] }),
      collapsed: isFiringState || hasRulesMatchingState,
      pagination: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Pagination,
        {
          currentPage: page,
          numberOfPages,
          onNavigate: onPageChange,
          hideWhenSinglePage: true
        }
      ),
      children: pageItems.map((rule) => {
        const { rulerRule, promRule } = rule;
        const isProvisioned = rulerRule ? (0,_utils_rules__WEBPACK_IMPORTED_MODULE_17__.isProvisionedRule)(rulerRule) : false;
        const instancesCount = _utils_rules__WEBPACK_IMPORTED_MODULE_17__.prometheusRuleType.alertingRule(rule.promRule) ? (0,_rule_viewer_RuleViewer__WEBPACK_IMPORTED_MODULE_18__.calculateTotalInstances)(rule.instanceTotals) : void 0;
        if (!promRule) {
          return null;
        }
        const originMeta = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_17__.getRulePluginOrigin)(rule.promRule);
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _rule_list_components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_11__.AlertRuleListItem,
          {
            name: rule.name,
            href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_14__.createViewLink)(rule.namespace.rulesSource, rule),
            summary: rule.annotations.summary,
            state,
            health: rule.promRule?.health,
            error: rule.promRule?.lastError,
            labels: rule.promRule?.labels,
            isProvisioned,
            instancesCount,
            namespace: rule.namespace.name,
            group: rule.group.name,
            actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RuleActionsButtons__WEBPACK_IMPORTED_MODULE_19__.RuleActionsButtons, { compact: true, rule, rulesSource: rule.namespace.rulesSource }),
            origin: originMeta
          },
          (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_16__.hashRule)(promRule)
        );
      })
    }
  );
};
function useDataSourcesLoadingState() {
  const promRules = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_10__.useUnifiedAlertingSelector)((state) => state.promRules);
  const rulesDataSources = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(_utils_datasource__WEBPACK_IMPORTED_MODULE_13__.getRulesDataSources, []);
  const grafanaLoading = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_10__.useUnifiedAlertingSelector)((state) => {
    const promLoading = (0,_utils_redux__WEBPACK_IMPORTED_MODULE_15__.isAsyncRequestStatePending)(state.promRules[_utils_datasource__WEBPACK_IMPORTED_MODULE_13__.GRAFANA_RULES_SOURCE_NAME]);
    const rulerLoading = (0,_utils_redux__WEBPACK_IMPORTED_MODULE_15__.isAsyncRequestStatePending)(state.rulerRules[_utils_datasource__WEBPACK_IMPORTED_MODULE_13__.GRAFANA_RULES_SOURCE_NAME]);
    return promLoading || rulerLoading;
  });
  const externalDataSourcesLoading = rulesDataSources.some((ds) => (0,_utils_redux__WEBPACK_IMPORTED_MODULE_15__.isAsyncRequestStatePending)(promRules[ds.name]));
  const loading = grafanaLoading || externalDataSourcesLoading;
  return loading;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RulesGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RulesGroup: () => (/* binding */ RulesGroup),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _hooks_useFolder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFolder.ts");
/* harmony import */ var _hooks_useHasRuler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useHasRuler.ts");
/* harmony import */ var _utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/accessControlHooks.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/utils/navigation.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _RuleLocation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/components/RuleLocation.tsx");
/* harmony import */ var _export_GrafanaRuleFolderExporter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/components/export/GrafanaRuleFolderExporter.tsx");
/* harmony import */ var _expressions_util__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/components/expressions/util.ts");
/* harmony import */ var _folder_actions_FolderActionsButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/components/folder-actions/FolderActionsButton.tsx");
/* harmony import */ var _ActionIcon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var _RuleStats__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleStats.tsx");
/* harmony import */ var _RulesTable__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesTable.tsx");






















const RulesGroup = react__WEBPACK_IMPORTED_MODULE_2___default().memo(({ group, namespace, expandAll, viewMode }) => {
  const { rulesSource } = namespace;
  const rulesSourceName = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.getRulesSourceName)(rulesSource);
  const rulerRulesLoaded = (0,_RulesTable__WEBPACK_IMPORTED_MODULE_25__.useIsRulesLoading)(rulesSource);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useStyles2)(getStyles);
  const [isExporting, setIsExporting] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(void 0);
  const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!expandAll);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setIsCollapsed(!expandAll);
  }, [expandAll]);
  const { hasRuler } = (0,_hooks_useHasRuler__WEBPACK_IMPORTED_MODULE_12__.useHasRuler)(namespace.rulesSource);
  const rulerRule = group.rules[0]?.rulerRule;
  const folderUID = rulerRule && _utils_rules__WEBPACK_IMPORTED_MODULE_17__.rulerRuleType.grafana.rule(rulerRule) && rulerRule.grafana_alert.namespace_uid || void 0;
  const { folder } = (0,_hooks_useFolder__WEBPACK_IMPORTED_MODULE_11__.useFolder)(folderUID);
  const { canEditRules } = (0,_utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_13__.useRulesAccess)();
  const isDeleting = hasRuler && rulerRulesLoaded && !group.rules.find((rule) => !!rule.rulerRule);
  const isFederated = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_17__.isFederatedRuleGroup)(group);
  const isProvisioned = group.rules.some((rule) => {
    return _utils_rules__WEBPACK_IMPORTED_MODULE_17__.rulerRuleType.grafana.rule(rule.rulerRule) && rule.rulerRule.grafana_alert.provenance;
  });
  const isPluginProvided = group.rules.some((rule) => (0,_utils_rules__WEBPACK_IMPORTED_MODULE_17__.isPluginProvidedRule)(rule.rulerRule ?? rule.promRule));
  const canEditGroup = hasRuler && !isProvisioned && !isFederated && !isPluginProvided && canEditRules(rulesSourceName);
  const isListView = viewMode === "list";
  const isGroupView = viewMode === "grouped";
  const actionIcons = [];
  if (isDeleting) {
    actionIcons.push(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Spinner, {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.rules-group.deleting", children: "Deleting" })
      ] }, "is-deleting")
    );
  } else if (rulesSource === _utils_datasource__WEBPACK_IMPORTED_MODULE_14__.GRAFANA_RULES_SOURCE_NAME) {
    if (folderUID) {
      const baseUrl = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_15__.makeFolderLink)(folderUID);
      if (isGroupView) {
        actionIcons.push(
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _ActionIcon__WEBPACK_IMPORTED_MODULE_23__.ActionIcon,
            {
              "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.rule-group-action.details", "rule group details"),
              icon: "info-circle",
              tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.rule-group-action.details", "rule group details"),
              to: _utils_navigation__WEBPACK_IMPORTED_MODULE_16__.groups.detailsPageLink("grafana", folderUID, group.name, { includeReturnTo: true })
            },
            "rule-group-details"
          )
        );
        if (folder?.canSave && canEditGroup) {
          actionIcons.push(
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _ActionIcon__WEBPACK_IMPORTED_MODULE_23__.ActionIcon,
              {
                "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.rule-group-action.edit", "edit rule group"),
                icon: "pen",
                tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.rule-group-action.edit", "edit rule group"),
                to: _utils_navigation__WEBPACK_IMPORTED_MODULE_16__.groups.editPageLink("grafana", folderUID, group.name, { includeReturnTo: true })
              },
              "rule-group-edit"
            )
          );
        }
      }
      if (folder?.canSave) {
        if (isListView) {
          actionIcons.push(
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _ActionIcon__WEBPACK_IMPORTED_MODULE_23__.ActionIcon,
              {
                "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.rule-group-action.go-to-folder", "go to folder"),
                icon: "folder-open",
                tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.rule-group-action.go-to-folder", "go to folder"),
                to: baseUrl,
                target: "__blank"
              },
              "goto"
            )
          );
          if (folder?.canAdmin) {
            actionIcons.push(
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _ActionIcon__WEBPACK_IMPORTED_MODULE_23__.ActionIcon,
                {
                  "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.rule-group-action.manage-permissions", "manage permissions"),
                  icon: "lock",
                  tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.rule-group-action.manage-permissions", "manage permissions"),
                  to: baseUrl + "/permissions",
                  target: "__blank"
                },
                "manage-perms"
              )
            );
          }
        }
      }
      if (folder) {
        if (isListView) {
          actionIcons.push(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_folder_actions_FolderActionsButton__WEBPACK_IMPORTED_MODULE_22__.FolderActionsButton, { folderUID }, "folder-bulk-actions"));
        }
      }
    }
  } else {
    actionIcons.push(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _ActionIcon__WEBPACK_IMPORTED_MODULE_23__.ActionIcon,
        {
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.rule-group-action.details", "rule group details"),
          icon: "info-circle",
          tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.rule-group-action.details", "rule group details"),
          to: _utils_navigation__WEBPACK_IMPORTED_MODULE_16__.groups.detailsPageLink(rulesSource.uid, namespace.name, group.name, { includeReturnTo: true })
        },
        "rule-group-details"
      )
    );
    if (canEditGroup) {
      actionIcons.push(
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _ActionIcon__WEBPACK_IMPORTED_MODULE_23__.ActionIcon,
          {
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.rule-group-action.edit", "edit rule group"),
            icon: "pen",
            tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.rule-group-action.edit", "edit rule group"),
            to: _utils_navigation__WEBPACK_IMPORTED_MODULE_16__.groups.editPageLink(rulesSource.uid, namespace.name, group.name, { includeReturnTo: true })
          },
          "rule-group-edit"
        )
      );
    }
  }
  const groupName = isListView ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RuleLocation__WEBPACK_IMPORTED_MODULE_19__.RuleLocation, { namespace: (0,_expressions_util__WEBPACK_IMPORTED_MODULE_21__.decodeGrafanaNamespace)(namespace).name }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RuleLocation__WEBPACK_IMPORTED_MODULE_19__.RuleLocation, { namespace: (0,_expressions_util__WEBPACK_IMPORTED_MODULE_21__.decodeGrafanaNamespace)(namespace).name, group: group.name });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.wrapper, "data-testid": "rule-group", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.header, "data-testid": "rule-group-header", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _CollapseToggle__WEBPACK_IMPORTED_MODULE_18__.CollapseToggle,
        {
          size: "sm",
          className: styles.collapseToggle,
          isCollapsed,
          onToggle: setIsCollapsed,
          "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.AlertRules.groupToggle
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FolderIcon, { isCollapsed }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CloudSourceLogo, { rulesSource }),
      // eslint-disable-next-line
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.groupName, onClick: () => setIsCollapsed(!isCollapsed), children: [
        isFederated && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Badge, { color: "purple", text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.rules-group.text-federated", "Federated") }),
        " ",
        groupName
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.spacer }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.headerStats, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RuleStats__WEBPACK_IMPORTED_MODULE_24__.RuleGroupStats, { group }) }),
      isProvisioned && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.actionsSeparator, children: "|" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.actionIcons, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Badge, { color: "purple", text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.rules-group.text-provisioned", "Provisioned") }) })
      ] }),
      !!actionIcons.length && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.actionsSeparator, children: "|" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.actionIcons, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { gap: 0.5, children: actionIcons }) })
      ] })
    ] }),
    !isCollapsed && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _RulesTable__WEBPACK_IMPORTED_MODULE_25__.RulesTable,
      {
        showSummaryColumn: true,
        className: styles.rulesTable,
        showGuidelines: true,
        showNextEvaluationColumn: Boolean(group.interval),
        rules: group.rules
      }
    ),
    folder && isExporting === "folder" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_export_GrafanaRuleFolderExporter__WEBPACK_IMPORTED_MODULE_20__.GrafanaRuleFolderExporter, { folder, onClose: () => setIsExporting(void 0) })
  ] });
});
RulesGroup.displayName = "RulesGroup";
const CloudSourceLogo = react__WEBPACK_IMPORTED_MODULE_2___default().memo(({ rulesSource }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useStyles2)(getStyles);
  if ((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.isCloudRulesSource)(rulesSource)) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Tooltip, { content: rulesSource.name, placement: "top", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { alt: rulesSource.meta.name, className: styles.dataSourceIcon, src: rulesSource.meta.info.logos.small }) });
  }
  return null;
});
CloudSourceLogo.displayName = "CloudSourceLogo";
const FolderIcon = react__WEBPACK_IMPORTED_MODULE_2___default().memo(({ isCollapsed }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: isCollapsed ? "folder" : "folder-open" });
});
FolderIcon.displayName = "FolderIcon";
const getStyles = (theme) => {
  return {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({}),
    header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: `${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(1)} 0`,
      flexWrap: "nowrap",
      borderBottom: `1px solid ${theme.colors.border.weak}`,
      "&:hover": {
        backgroundColor: theme.components.table.rowHoverBackground
      }
    }),
    headerStats: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flexShrink: 0,
      span: {
        verticalAlign: "middle"
      },
      [theme.breakpoints.down("sm")]: {
        order: 2,
        width: "100%",
        paddingLeft: theme.spacing(1)
      }
    }),
    groupName: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginLeft: theme.spacing(1),
      marginBottom: 0,
      cursor: "pointer",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }),
    spacer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flex: 1
    }),
    collapseToggle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      background: "none",
      border: "none",
      marginTop: `-${theme.spacing(1)}`,
      marginBottom: `-${theme.spacing(1)}`,
      svg: {
        marginBottom: 0
      }
    }),
    dataSourceIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: theme.spacing(2),
      height: theme.spacing(2),
      marginLeft: theme.spacing(2)
    }),
    dataSourceOrigin: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginRight: "1em",
      color: theme.colors.text.disabled
    }),
    actionsSeparator: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      margin: `0 ${theme.spacing(2)}`
    }),
    actionIcons: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "120px",
      alignItems: "center",
      flexShrink: 0
    }),
    rulesTable: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      margin: theme.spacing(2, 0)
    }),
    rotate90: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      transform: "rotate(90deg)"
    })
  };
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/useCombinedGroupNamespace.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCombinedGroupNamespace: () => (/* binding */ useCombinedGroupNamespace)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useCombinedGroupNamespace(namespaces) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
    () => namespaces.flatMap(
      (ns) => ns.groups.map((g) => ({
        namespace: ns,
        group: g
      }))
    ),
    [namespaces]
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/enterprise-components/AI/AIGenAlertRuleButton/addAIAlertRuleButton.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIAlertRuleButtonComponent: () => (/* binding */ AIAlertRuleButtonComponent),
/* harmony export */   addAIAlertRuleButton: () => (/* binding */ addAIAlertRuleButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/ErrorBoundary/ErrorBoundary.tsx");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");





let InternalAIAlertRuleButtonComponent = null;
const AIAlertRuleButtonComponent = (props) => {
  if (!InternalAIAlertRuleButtonComponent) {
    return null;
  }
  const WrappedComponent = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.withErrorBoundary)(InternalAIAlertRuleButtonComponent, {
    title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.ai.error-boundary.alert-rule-button", "AI Alert Rule Button failed to load"),
    style: "alertbox",
    errorLogger: _Analytics__WEBPACK_IMPORTED_MODULE_3__.logError
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, props);
};
function addAIAlertRuleButton(component) {
  InternalAIAlertRuleButtonComponent = component;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/plugins/useAlertingHomePageExtensions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAlertingHomePageExtensions: () => (/* binding */ useAlertingHomePageExtensions)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/pluginExtensions.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/pluginExtensions/usePluginComponents.ts");



function useAlertingHomePageExtensions() {
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.usePluginComponents)({
    extensionPointId: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginExtensionPoints.AlertingHomePage,
    limitPerPlugin: 1
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/RuleList.v1.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useInterval.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_rules_Filter_RulesFilter_v1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/Filter/RulesFilter.v1.tsx");
/* harmony import */ var _components_rules_NoRulesCTA__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/NoRulesCTA.tsx");
/* harmony import */ var _components_rules_RuleDetails__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetails.tsx");
/* harmony import */ var _components_rules_RuleListErrors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleListErrors.tsx");
/* harmony import */ var _components_rules_RuleListGroupView__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleListGroupView.tsx");
/* harmony import */ var _components_rules_RuleListStateView__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleListStateView.tsx");
/* harmony import */ var _components_rules_RuleStats__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleStats.tsx");
/* harmony import */ var _featureToggles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/featureToggles.ts");
/* harmony import */ var _hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
/* harmony import */ var _hooks_useFilteredRules__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFilteredRules.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _RuleListPageTitle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/RuleListPageTitle.tsx");
/* harmony import */ var _components_RuleListActionButtons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/RuleListActionButtons.tsx");


























const VIEWS = {
  groups: _components_rules_RuleListGroupView__WEBPACK_IMPORTED_MODULE_15__.RuleListGroupView,
  state: _components_rules_RuleListStateView__WEBPACK_IMPORTED_MODULE_16__.RuleListStateView
};
const LIMIT_ALERTS = _components_rules_RuleDetails__WEBPACK_IMPORTED_MODULE_13__.INSTANCES_DISPLAY_LIMIT + 1;
const prometheusRulesPrimary = (0,_featureToggles__WEBPACK_IMPORTED_MODULE_18__.shouldUsePrometheusRulesPrimary)();
const RuleListV1 = () => {
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  const rulesDataSourceNames = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(_utils_datasource__WEBPACK_IMPORTED_MODULE_24__.getAllRulesSourceNames, []);
  const [expandAll, setExpandAll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const onFilterCleared = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => setExpandAll(false), []);
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_7__.useQueryParams)();
  const { filterState, hasActiveFilters } = (0,_hooks_useFilteredRules__WEBPACK_IMPORTED_MODULE_20__.useRulesFilter)();
  const hasActiveLabelsFilter = filterState.labels.length > 0;
  const queryParamView = queryParams.view;
  const viewType = queryParamView === "state" || queryParamView === "groups" ? queryParamView : "groups";
  const view = VIEWS[viewType] ? viewType : "groups";
  const ViewComponent = VIEWS[view];
  const promRuleRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_21__.useUnifiedAlertingSelector)((state) => state.promRules);
  const rulerRuleRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_21__.useUnifiedAlertingSelector)((state) => state.rulerRules);
  const loading = rulesDataSourceNames.some(
    (name) => promRuleRequests[name]?.loading || rulerRuleRequests[name]?.loading
  );
  const promRequests = Object.entries(promRuleRequests);
  const rulerRequests = Object.entries(rulerRuleRequests);
  const allPromLoaded = promRequests.every(
    ([_2, state]) => state.dispatched && (state?.result !== void 0 || state?.error !== void 0)
  );
  const allRulerLoaded = rulerRequests.every(
    ([_2, state]) => state.dispatched && (state?.result !== void 0 || state?.error !== void 0)
  );
  const allPromEmpty = promRequests.every(([_2, state]) => state.dispatched && state?.result?.length === 0);
  const allRulerEmpty = rulerRequests.every(([_2, state]) => {
    const rulerRules = Object.entries(state?.result ?? {});
    const noRules = rulerRules.every(([_3, result]) => result?.length === 0);
    return noRules && state.dispatched;
  });
  const limitAlerts = hasActiveLabelsFilter ? void 0 : LIMIT_ALERTS;
  const [_, fetchRules] = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(async () => {
    if (!loading) {
      if (prometheusRulesPrimary) {
        await dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_22__.fetchRulerRulesAction)({ rulesSourceName: _utils_datasource__WEBPACK_IMPORTED_MODULE_24__.GRAFANA_RULES_SOURCE_NAME }));
        await dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_22__.fetchAllPromRulesAction)(false, { limitAlerts }));
      } else {
        await dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_22__.fetchAllPromAndRulerRulesAction)(false, { limitAlerts }));
      }
    }
  }, [loading, limitAlerts, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_Analytics__WEBPACK_IMPORTED_MODULE_9__.trackRuleListNavigation)().catch(() => {
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (prometheusRulesPrimary) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_22__.fetchRulerRulesAction)({ rulesSourceName: _utils_datasource__WEBPACK_IMPORTED_MODULE_24__.GRAFANA_RULES_SOURCE_NAME }));
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_22__.fetchAllPromRulesAction)(false, { limitAlerts }));
    } else {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_22__.fetchAllPromAndRulerRulesAction)(false, { limitAlerts }));
    }
  }, [dispatch, limitAlerts]);
  (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(fetchRules, _utils_constants__WEBPACK_IMPORTED_MODULE_23__.RULE_LIST_POLL_INTERVAL_MS);
  const hasNoAlertRulesCreatedYet = allPromLoaded && allPromEmpty && promRequests.length > 0 && allRulerEmpty && allRulerLoaded;
  const hasAlertRulesCreated = !hasNoAlertRulesCreatedYet;
  const combinedNamespaces = (0,_hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_19__.useCombinedRuleNamespaces)();
  const filteredNamespaces = (0,_hooks_useFilteredRules__WEBPACK_IMPORTED_MODULE_20__.useFilteredRules)(combinedNamespaces, filterState);
  return (
    // We don't want to show the Loading... indicator for the whole page.
    // We show separate indicators for Grafana-managed and Cloud rules
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_10__.AlertingPageWrapper,
      {
        navId: "alert-list",
        isLoading: false,
        renderTitle: (title) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RuleListPageTitle__WEBPACK_IMPORTED_MODULE_25__.RuleListPageTitle, { title }),
        actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_RuleListActionButtons__WEBPACK_IMPORTED_MODULE_26__.RuleListActionButtons, { hasAlertRulesCreated }),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "column", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rules_RuleListErrors__WEBPACK_IMPORTED_MODULE_14__.RuleListErrors, {}),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rules_Filter_RulesFilter_v1__WEBPACK_IMPORTED_MODULE_11__["default"], { onClear: onFilterCleared }),
          hasAlertRulesCreated && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "row", alignItems: "center", children: view === "groups" && hasActiveFilters && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button,
            {
              icon: expandAll ? "angle-double-up" : "angle-double-down",
              variant: "secondary",
              onClick: () => setExpandAll(!expandAll),
              children: expandAll ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.rule-list-v1.collapse-all", "Collapse all") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.rule-list-v1.expand-all", "Expand all")
            }
          ) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rules_RuleStats__WEBPACK_IMPORTED_MODULE_17__.RuleStats, { namespaces: filteredNamespaces }),
          hasNoAlertRulesCreatedYet && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rules_NoRulesCTA__WEBPACK_IMPORTED_MODULE_12__.NoRulesSplash, {}),
          hasAlertRulesCreated && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ViewComponent, { expandAll, namespaces: filteredNamespaces })
        ] })
      }
    )
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RuleListV1);


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/RuleListPageTitle.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuleListPageTitle: () => (/* binding */ RuleListPageTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _featureToggles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/featureToggles.ts");
/* harmony import */ var _previewToggles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/previewToggles.ts");







function RuleListPageTitle({ title }) {
  const shouldShowV2Toggle = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.alertingListViewV2PreviewToggle ?? false;
  const listViewV2Enabled = (0,_featureToggles__WEBPACK_IMPORTED_MODULE_6__.shouldUseAlertingListViewV2)();
  const toggleListView = () => {
    if (listViewV2Enabled) {
      (0,_previewToggles__WEBPACK_IMPORTED_MODULE_7__.setPreviewToggle)("alertingListViewV2", false);
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.reportInteraction)("alerting.list_view.v2.disabled");
    } else {
      (0,_previewToggles__WEBPACK_IMPORTED_MODULE_7__.setPreviewToggle)("alertingListViewV2", true);
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.reportInteraction)("alerting.list_view.v2.enabled");
    }
    window.location.reload();
  };
  const configToUse = listViewV2Enabled ? {
    variant: "secondary",
    icon: void 0,
    children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.rule-list.toggle.go-back-to-old-look", "Go back to the old look"),
    "data-testid": "alerting-list-view-toggle-v1"
  } : {
    variant: "primary",
    icon: "rocket",
    children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.rule-list.toggle.try-out-the-new-look", "Try out the new look!"),
    "data-testid": "alerting-list-view-toggle-v2"
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", { children: title }),
    shouldShowV2Toggle && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { size: "sm", fill: "outline", ...configToUse, onClick: toggleListView, className: "fs-unmask" }) })
  ] });
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

/***/ "./public/app/features/alerting/unified/rule-list/components/ListSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListSection: () => (/* binding */ ListSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useToggle.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _components_Spacer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/Spacer.tsx");








const ListSection = ({
  children,
  title,
  collapsed = false,
  actions = null,
  pagination = null
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const [isCollapsed, toggleCollapsed] = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(collapsed);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { className: styles.wrapper, role: "treeitem", "aria-selected": "false", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.sectionTitle, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { alignItems: "center", gap: 0.5, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.IconButton,
          {
            name: isCollapsed ? "angle-right" : "angle-down",
            onClick: toggleCollapsed,
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("common.collapse", "Collapse")
          }
        ),
        title
      ] }),
      actions && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Spacer__WEBPACK_IMPORTED_MODULE_8__.Spacer, {}),
        actions
      ] })
    ] }) }),
    !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(children) && !isCollapsed && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { role: "group", className: styles.groupItemsWrapper, children }),
      pagination
    ] })
  ] });
};
const getStyles = (theme) => ({
  groupItemsWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "relative",
    // unfortunately we have to resort to this since we can't overwrite the styles of the list items individually
    // unless we clone the React Elements and modify className
    "li[role=treeitem]": {
      listStyle: "none",
      position: "relative",
      paddingLeft: theme.spacing(6.5),
      "&:before": {
        content: "''",
        position: "absolute",
        height: "100%",
        marginLeft: theme.spacing(-1.5),
        marginTop: theme.spacing(-1),
        borderLeft: `solid 1px ${theme.colors.border.weak}`
      }
    }
  }),
  wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "column"
  }),
  sectionTitle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(1, 1.5),
    "&:hover": {
      background: theme.colors.action.hover
    }
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/components/RuleListActionButtons.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuleListActionButtons: () => (/* binding */ RuleListActionButtons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/utils/logging.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _enterprise_components_AI_AIGenAlertRuleButton_addAIAlertRuleButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/enterprise-components/AI/AIGenAlertRuleButton/addAIAlertRuleButton.ts");
/* harmony import */ var _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var _hooks_useReturnTo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useReturnTo.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");











const RuleListActionButtons = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ hasAlertRulesCreated }) => {
  if (!hasAlertRulesCreated) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { gap: 1, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CreateAlertButtons, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ExportNewRuleButton, {})
  ] });
});
RuleListActionButtons.displayName = "RuleListActionButtons";
function CreateAlertButtons() {
  const [createRuleSupported, createRuleAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_8__.useAlertingAbility)(_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_8__.AlertingAction.CreateAlertRule);
  const [createCloudRuleSupported, createCloudRuleAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_8__.useAlertingAbility)(_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_8__.AlertingAction.CreateExternalAlertRule);
  const returnTo = (0,_hooks_useReturnTo__WEBPACK_IMPORTED_MODULE_9__.createReturnTo)();
  const canCreateCloudRules = createCloudRuleSupported && createCloudRuleAllowed;
  const canCreateGrafanaRules = createRuleSupported && createRuleAllowed;
  if (canCreateGrafanaRules || canCreateCloudRules) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "row", gap: 1, children: [
      canCreateGrafanaRules && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_enterprise_components_AI_AIGenAlertRuleButton_addAIAlertRuleButton__WEBPACK_IMPORTED_MODULE_7__.AIAlertRuleButtonComponent, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton,
        {
          href: (0,_utils_url__WEBPACK_IMPORTED_MODULE_10__.createRelativeUrl)("/alerting/new/alerting", { returnTo }),
          icon: "plus",
          onClick: () => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.logInfo)(_Analytics__WEBPACK_IMPORTED_MODULE_6__.LogMessages.alertRuleFromScratch),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.rule-list.new-alert-rule", children: "New alert rule" })
        }
      )
    ] });
  }
  return null;
}
function ExportNewRuleButton() {
  const returnTo = (0,_hooks_useReturnTo__WEBPACK_IMPORTED_MODULE_9__.createReturnTo)();
  const url = (0,_utils_url__WEBPACK_IMPORTED_MODULE_10__.createRelativeUrl)(`/alerting/export-new-rule`, {
    returnTo
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton,
    {
      href: url,
      icon: "download-alt",
      variant: "secondary",
      tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.export-new-rule-button.tooltip-export-new-grafana-rule", "Export new grafana rule"),
      onClick: () => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.logInfo)(_Analytics__WEBPACK_IMPORTED_MODULE_6__.LogMessages.exportNewGrafanaRule),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.list-view.section.grafanaManaged.export-new-rule", children: "Export rule definition" })
    }
  );
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
//# sourceMappingURL=AlertRuleListIndex.f6c23172f5e5094737cf.js.map