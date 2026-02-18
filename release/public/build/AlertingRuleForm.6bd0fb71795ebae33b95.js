"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertingRuleForm"],{

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

/***/ "./public/app/features/alerting/unified/AlertWarning.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertWarning: () => (/* binding */ AlertWarning)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





function AlertWarning({ title, children }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, { className: (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(warningStyles).warning, severity: "warning", title, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, { href: "alerting/list", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.alert-warning.to-rule-list", children: "To rule list" }) })
  ] });
}
const warningStyles = (theme) => ({
  warning: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    margin: theme.spacing(4)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/api/alertRuleModel.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isCloudGroupUpdatedResponse: () => (/* binding */ isCloudGroupUpdatedResponse),
/* harmony export */   isGrafanaGroupUpdatedResponse: () => (/* binding */ isGrafanaGroupUpdatedResponse)
/* harmony export */ });

function isGrafanaGroupUpdatedResponse(response) {
  return "message" in response;
}
function isCloudGroupUpdatedResponse(response) {
  return "status" in response;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/api/labelsApi.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   labelsApi: () => (/* binding */ labelsApi)
/* harmony export */ });
/* harmony import */ var _types_pluginBridges__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/types/pluginBridges.ts");
/* harmony import */ var _alertingApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/api/alertingApi.ts");



const labelsApi = _alertingApi__WEBPACK_IMPORTED_MODULE_1__.alertingApi.injectEndpoints({
  endpoints: (build) => ({
    getLabels: build.query({
      query: () => ({
        url: `/api/plugins/${_types_pluginBridges__WEBPACK_IMPORTED_MODULE_0__.SupportedPlugin.Labels}/resources/v1/labels/keys`
      }),
      providesTags: ["GrafanaLabels"]
    }),
    getLabelValues: build.query({
      query: ({ key }) => ({
        url: `/api/plugins/${_types_pluginBridges__WEBPACK_IMPORTED_MODULE_0__.SupportedPlugin.Labels}/resources/v1/labels/name/${key}`
      }),
      providesTags: ["GrafanaLabels"]
    })
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/api/preview.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   previewAlertRule: () => (/* binding */ previewAlertRule)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/share.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/dataframe/DataFrameJSON.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/utils/withLoadingIndicator.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/types/time.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-runtime/src/utils/toDataQueryError.ts");
/* harmony import */ var _types_preview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/types/preview.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");








function previewAlertRule(request) {
  if ((0,_types_preview__WEBPACK_IMPORTED_MODULE_10__.isCloudPreviewRequest)(request)) {
    return fetchAlertRulePreview(request, request.dataSourceUid, _types_rule_form__WEBPACK_IMPORTED_MODULE_11__.RuleFormType.cloudAlerting);
  }
  if ((0,_types_preview__WEBPACK_IMPORTED_MODULE_10__.isGrafanaPreviewRequest)(request)) {
    return fetchAlertRulePreview(request, _utils_datasource__WEBPACK_IMPORTED_MODULE_12__.GRAFANA_RULES_SOURCE_NAME, _types_rule_form__WEBPACK_IMPORTED_MODULE_11__.RuleFormType.grafana);
  }
  throw new Error("unsupported preview rule request");
}
function fetchAlertRulePreview(request, dataSourceUid, ruleType) {
  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.withLoadingIndicator)({
    whileLoading: createResponse(ruleType),
    source: (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.getBackendSrv)().fetch({
      method: "POST",
      url: `/api/v1/rule/test/${dataSourceUid}`,
      data: request
    }).pipe(
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({ data }) => {
        return createResponse(ruleType, {
          state: _grafana_data__WEBPACK_IMPORTED_MODULE_7__.LoadingState.Done,
          series: data.instances.map(_grafana_data__WEBPACK_IMPORTED_MODULE_4__.dataFrameFromJSON)
        });
      }),
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(
          createResponse(ruleType, {
            state: _grafana_data__WEBPACK_IMPORTED_MODULE_7__.LoadingState.Error,
            error: (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_9__.toDataQueryError)(error)
          })
        );
      }),
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.share)()
    )
  });
}
function createResponse(ruleType, data = {}) {
  return {
    ruleType,
    data: {
      state: _grafana_data__WEBPACK_IMPORTED_MODULE_7__.LoadingState.Loading,
      series: [],
      timeRange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.getDefaultTimeRange)(),
      ...data
    }
  };
}


/***/ }),

/***/ "./public/app/features/alerting/unified/api/timeIntervalsApi.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeIntervalsApi: () => (/* binding */ timeIntervalsApi)
/* harmony export */ });
/* harmony import */ var app_features_alerting_unified_openapi_timeIntervalsApi_gen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/openapi/timeIntervalsApi.gen.ts");


const timeIntervalsApi = app_features_alerting_unified_openapi_timeIntervalsApi_gen__WEBPACK_IMPORTED_MODULE_0__.generatedTimeIntervalsApi;


/***/ }),

/***/ "./public/app/features/alerting/unified/components/AlertLabelDropdown.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Combobox/Combobox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");






const AlertLabelDropdown = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(
  function LabelPicker({ onChange, options, defaultValue, type, onOpenMenu = () => {
  }, isLoading = false }, ref) {
    const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
    const handleChange = (option) => {
      if (option) {
        onChange({
          label: option.label || option.value,
          value: option.value,
          description: option.description
        });
      }
    };
    const currentValue = defaultValue ? {
      label: defaultValue.label || defaultValue.value,
      value: defaultValue.value,
      description: defaultValue.description
    } : void 0;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, { disabled: false, "data-testid": `alertlabel-${type}-picker`, className: styles.resetMargin, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Combobox,
      {
        placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.alert-label-dropdown.placeholder-select", "Choose {{type}}", { type }),
        width: 25,
        options,
        value: currentValue,
        onChange: handleChange,
        createCustomValue: true,
        "data-testid": `alertlabel-${type}-combobox`
      }
    ) }) });
  }
);
const getStyles = () => ({
  resetMargin: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({ marginBottom: 0 })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertLabelDropdown);


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

/***/ "./public/app/features/alerting/unified/components/alertmanager-entities/MuteTimingsSelector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var app_features_alerting_unified_components_mute_timings_useMuteTimings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/mute-timings/useMuteTimings.tsx");
/* harmony import */ var app_features_alerting_unified_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");






const mapTimeInterval = ({ name, time_intervals }) => ({
  value: name,
  label: name,
  description: time_intervals.map((interval) => (0,app_features_alerting_unified_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.timeIntervalToString)(interval)).join(", AND ")
});
const TimeIntervalSelector = ({
  alertmanager,
  selectProps
}) => {
  const { data } = (0,app_features_alerting_unified_components_mute_timings_useMuteTimings__WEBPACK_IMPORTED_MODULE_3__.useMuteTimings)({ alertmanager, skip: selectProps.disabled });
  const timeIntervalOptions = data?.map((value) => mapTimeInterval(value)) || [];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MultiSelect,
    {
      "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.time-intervals-selector.aria-label-time-intervals", "Time intervals"),
      options: timeIntervalOptions,
      placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.time-intervals-selector.placeholder-select-time-intervals", "Select time intervals..."),
      ...selectProps
    }
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimeIntervalSelector);


/***/ }),

/***/ "./public/app/features/alerting/unified/components/create-folder/CreateNewFolder.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateNewFolder: () => (/* binding */ CreateNewFolder)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_api_clients_folder_v1beta1_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/api/clients/folder/v1beta1/hooks.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/types/accessControl.ts");











const CreateNewFolder = ({ onCreate }) => {
  const [isCreatingFolder, setIsCreatingFolder] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const handleCreate = (folder) => {
    onCreate(folder);
    setIsCreatingFolder(false);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
      {
        onClick: () => setIsCreatingFolder(true),
        type: "button",
        icon: "plus",
        fill: "outline",
        variant: "secondary",
        disabled: !app_core_core__WEBPACK_IMPORTED_MODULE_14__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_15__.AccessControlAction.FoldersCreate),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.create-new-folder.new-folder", children: "New folder" })
      }
    ),
    isCreatingFolder && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FolderCreationModal, { onCreate: handleCreate, onClose: () => setIsCreatingFolder(false) })
  ] });
};
function FolderCreationModal({
  onClose,
  onCreate
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_13__.useAppNotification)();
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const [isCreatingFolder, setIsCreatingFolder] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [createFolder] = (0,app_api_clients_folder_v1beta1_hooks__WEBPACK_IMPORTED_MODULE_12__.useCreateFolder)();
  const onSubmit = async () => {
    setIsCreatingFolder(true);
    const { data, error } = await createFolder({ title });
    if (error) {
      notifyApp.error("Failed to create folder");
    } else if (data) {
      onCreate({ title: data.title, uid: data.uid });
      notifyApp.success("Folder created");
    }
    setIsCreatingFolder(false);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal,
    {
      className: styles.modal,
      isOpen: true,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.create-new-folder.title-new-folder", "New folder"),
      onDismiss: onClose,
      onClickBackdrop: onClose,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "column", gap: 2, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field,
          {
            label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Label, { htmlFor: "folder", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.create-new-folder.folder.name", children: "Folder name" }) }),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Input,
              {
                "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.AlertRules.newFolderNameField,
                autoFocus: true,
                id: "folderName",
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.create-new-folder.placeholder-enter-a-name", "Enter a name"),
                value: title,
                onChange: (e) => setTitle(e.currentTarget.value)
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal.ButtonRow, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { variant: "secondary", type: "button", onClick: onClose, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.create-new-folder.folder.cancel", children: "Cancel" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
            {
              onClick: onSubmit,
              disabled: !title || isCreatingFolder,
              "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.AlertRules.newFolderNameCreateButton,
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.create-new-folder.folder.create", children: "Create" })
            }
          )
        ] })
      ] })
    }
  );
}
const getStyles = (theme) => ({
  modal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: `${theme.breakpoints.values.sm}px`
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/export/ExportNewGrafanaRule.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/withPageErrorBoundary.tsx");
/* harmony import */ var _AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _rule_editor_alert_rule_form_ModifyExportRuleForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/alert-rule-form/ModifyExportRuleForm.tsx");






function ExportNewGrafanaRulePage() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_3__.AlertingPageWrapper,
    {
      navId: "alert-list",
      pageNav: {
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.export-new-grafana-rule-page.text.export-new-grafana-rule", "Export new Grafana rule"),
        subTitle: "Export a new rule definition in Terraform(HCL) format. Any changes you make will not be saved."
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rule_editor_alert_rule_form_ModifyExportRuleForm__WEBPACK_IMPORTED_MODULE_4__.ModifyExportRuleForm, {})
    }
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_2__.withPageErrorBoundary)(ExportNewGrafanaRulePage));


/***/ }),

/***/ "./public/app/features/alerting/unified/components/export/GrafanaModifyExport.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRule.ts");
/* harmony import */ var _rule_editor_formDefaults__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/rule-editor/formDefaults.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");
/* harmony import */ var _withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/withPageErrorBoundary.tsx");
/* harmony import */ var _AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _rule_editor_alert_rule_form_ModifyExportRuleForm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/alert-rule-form/ModifyExportRuleForm.tsx");
















function GrafanaModifyExport() {
  const { id } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_2__.useParams)();
  const ruleIdentifier = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return _utils_rule_id__WEBPACK_IMPORTED_MODULE_10__.tryParse(id, true);
  }, [id]);
  if (!ruleIdentifier) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.grafana-modify-export.title-invalid-rule-id", "Invalid rule ID"), severity: "error", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.grafana-modify-export.body-invalid-rule-id", children: "The rule UID in the page URL is invalid. Please check the URL and try again." }) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RuleModifyExport, { ruleIdentifier });
}
function RuleModifyExport({ ruleIdentifier }) {
  const { loading, error, result: rulerRule } = (0,_hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_7__.useRuleWithLocation)({ ruleIdentifier });
  if (loading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.rule-modify-export.text-loading-the-rule", "Loading the rule...") });
  }
  if (error) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.rule-modify-export.title-cannot-load-modify-export", "Cannot load modify export"),
        severity: "error",
        children: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_9__.stringifyErrorLike)(error)
      }
    );
  }
  if (!rulerRule && !loading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.rule-modify-export.title-cannot-exist", "Cannot load the rule. The rule does not exist"),
        buttonContent: "Go back to alert list",
        onRemove: () => _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.locationService.replace((0,_utils_url__WEBPACK_IMPORTED_MODULE_12__.createRelativeUrl)("/alerting/list"))
      }
    );
  }
  if (rulerRule && !_utils_rules__WEBPACK_IMPORTED_MODULE_11__.rulerRuleType.grafana.rule(rulerRule.rule)) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "alerting.rule-modify-export.title-grafanamanaged-alert",
          "This rule is not a Grafana-managed alert rule"
        ),
        buttonContent: "Go back to alert list",
        onRemove: () => _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.locationService.replace((0,_utils_url__WEBPACK_IMPORTED_MODULE_12__.createRelativeUrl)("/alerting/list"))
      }
    );
  }
  if (rulerRule && _utils_rules__WEBPACK_IMPORTED_MODULE_11__.rulerRuleType.grafana.rule(rulerRule.rule)) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _rule_editor_alert_rule_form_ModifyExportRuleForm__WEBPACK_IMPORTED_MODULE_15__.ModifyExportRuleForm,
      {
        ruleForm: (0,_rule_editor_formDefaults__WEBPACK_IMPORTED_MODULE_8__.formValuesFromExistingRule)(rulerRule),
        alertUid: rulerRule.rule.grafana_alert.uid
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.rule-modify-export.title-unknown-error", "Unknown error") });
}
function GrafanaModifyExportPage() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_14__.AlertingPageWrapper,
    {
      navId: "alert-list",
      pageNav: {
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.grafana-modify-export-page.text.modify-export", "Modify export"),
        subTitle: "Modify the current alert rule and export the rule definition in the format of your choice. Any changes you make will not be saved."
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GrafanaModifyExport, {})
    }
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_13__.withPageErrorBoundary)(GrafanaModifyExportPage));


/***/ }),

/***/ "./public/app/features/alerting/unified/components/export/GrafanaRuleExporter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrafanaRuleExporter: () => (/* binding */ GrafanaRuleExporter)
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









const GrafanaRuleExportPreview = ({ alertUid, exportFormat, onClose }) => {
  const { currentData: ruleTextDefinition = "", isFetching } = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_4__.alertRuleApi.endpoints.exportRules.useQuery({
    ruleUid: alertUid,
    format: exportFormat
  });
  const downloadFileName = `${alertUid}-${(/* @__PURE__ */ new Date()).getTime()}`;
  if (isFetching) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.grafana-rule-export-preview.text-loading", "Loading....") });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _FileExportPreview__WEBPACK_IMPORTED_MODULE_5__.FileExportPreview,
    {
      format: exportFormat,
      textDefinition: ruleTextDefinition,
      downloadFileName,
      onClose
    }
  );
};
const GrafanaRuleExporter = ({ onClose, alertUid }) => {
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("yaml");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _GrafanaExportDrawer__WEBPACK_IMPORTED_MODULE_6__.GrafanaExportDrawer,
    {
      activeTab,
      onTabChange: setActiveTab,
      onClose,
      formatProviders: Object.values(_providers__WEBPACK_IMPORTED_MODULE_7__.allGrafanaExportProviders),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GrafanaRuleExportPreview, { alertUid, exportFormat: activeTab, onClose })
    }
  );
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/extensions/AlertingRuleExtensionPointMenu.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertingRuleExtensionPointMenu: () => (/* binding */ AlertingRuleExtensionPointMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/Menu.tsx");




function AlertingRuleExtensionPointMenu({ extensions, onSelect }) {
  const { categorised, uncategorised } = useExtensionLinksByCategory(extensions);
  const showDivider = uncategorised.length > 0 && Object.keys(categorised).length > 0;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Menu, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    Object.keys(categorised).map((category) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Menu.Group, { label: category, children: renderItems(categorised[category], onSelect) }, category)),
    showDivider && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Menu.Divider, {}, "divider"),
    renderItems(uncategorised, onSelect)
  ] }) });
}
function renderItems(extensions, onSelect) {
  return extensions.map((extension) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Menu.Item,
    {
      ariaLabel: extension.title,
      icon: extension?.icon || "plug",
      label: extension.title,
      onClick: (event) => {
        if (extension.path) {
          return onSelect(extension);
        }
        extension.onClick?.(event);
      }
    },
    extension.id
  ));
}
function useExtensionLinksByCategory(extensions) {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const uncategorised = [];
    const categorised = {};
    for (const link of extensions) {
      if (!link.category) {
        uncategorised.push(link);
        continue;
      }
      if (!Array.isArray(categorised[link.category])) {
        categorised[link.category] = [];
      }
      categorised[link.category].push(link);
      continue;
    }
    return {
      uncategorised,
      categorised
    };
  }, [extensions]);
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/extensions/AlertingRuleQueryExtensionPoint.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertingRuleQueryExtensionPoint: () => (/* binding */ AlertingRuleQueryExtensionPoint)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/pluginExtensions.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/pluginExtensions/usePluginLinks.ts");
/* harmony import */ var _ConfirmationNavigationModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/extensions/ConfirmationNavigationModal.tsx");
/* harmony import */ var _QuerylessAppExtensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/extensions/QuerylessAppExtensions.tsx");







const QUERYLESS_APPS = [
  "grafana-pyroscope-app",
  "grafana-lokiexplore-app",
  "grafana-exploretraces-app",
  "grafana-metricsdrilldown-app"
];
const DATASOURCE_TO_QUERYLESS_APP = {
  prometheus: ["grafana-metricsdrilldown-app"]
  // todo: add more data source types here
  // 'pyroscope': ['grafana-pyroscope-app'],
  // 'loki': ['grafana-lokiexplore-app'],
  // 'tempo': ['grafana-exploretraces-app'],
};
function AlertingRuleQueryExtensionPoint({ extensionsToShow, query }) {
  const [selectedExtension, setSelectedExtension] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const context = {
    targets: [query]
  };
  const { links } = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.usePluginLinks)({
    extensionPointId: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginExtensionPoints.AlertingRuleQueryEditor,
    context,
    limitPerPlugin: 3
  });
  const querylessLinks = links.filter((link) => {
    if (!QUERYLESS_APPS.includes(link.pluginId)) {
      return false;
    }
    const datasourceType = query.datasource?.type;
    if (!datasourceType) {
      return false;
    }
    const compatibleApps = DATASOURCE_TO_QUERYLESS_APP[datasourceType.toLowerCase()] || [];
    return compatibleApps.includes(link.pluginId);
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    extensionsToShow === "queryless" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _QuerylessAppExtensions__WEBPACK_IMPORTED_MODULE_5__.QuerylessAppsExtensions,
      {
        links: querylessLinks,
        setSelectedExtension: (extension) => {
          setSelectedExtension(extension);
        },
        setIsModalOpen,
        isModalOpen
      }
    ),
    !!selectedExtension && !!selectedExtension.path && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _ConfirmationNavigationModal__WEBPACK_IMPORTED_MODULE_4__.ConfirmNavigationModal,
      {
        path: selectedExtension.path,
        title: selectedExtension.title,
        onDismiss: () => setSelectedExtension(void 0)
      }
    )
  ] });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/extensions/ConfirmationNavigationModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmNavigationModal: () => (/* binding */ ConfirmNavigationModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/utils/location.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");






function ConfirmNavigationModal(props) {
  const { onDismiss, path, title } = props;
  const openInNewTab = () => {
    __webpack_require__.g.open(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.locationUtil.assureBaseUrl(path), "_blank");
    onDismiss();
  };
  const openInCurrentTab = () => _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.push(path);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Modal, { title, isOpen: true, onDismiss, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "column", gap: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "explore.confirm-navigation-modal.new-tab", children: "Do you want to proceed in the current tab or open a new tab?" }) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Modal.ButtonRow, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: onDismiss, fill: "outline", variant: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "explore.confirm-navigation-modal.cancel", children: "Cancel" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { type: "submit", variant: "secondary", onClick: openInNewTab, icon: "external-link-alt", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "explore.confirm-navigation-modal.open-in-new-tab", children: "Open in new tab" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { type: "submit", variant: "primary", onClick: openInCurrentTab, icon: "apps", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "explore.confirm-navigation-modal.open", children: "Open" }) })
    ] })
  ] });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/extensions/QuerylessAppExtensions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuerylessAppsExtensions: () => (/* binding */ QuerylessAppsExtensions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/ToolbarButton/ToolbarButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Dropdown/Dropdown.tsx");
/* harmony import */ var _AlertingRuleExtensionPointMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/extensions/AlertingRuleExtensionPointMenu.tsx");






function QuerylessAppsExtensions(props) {
  const { links, setSelectedExtension, setIsModalOpen, isModalOpen } = props;
  if (links.length === 0) {
    return void 0;
  }
  const menu = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertingRuleExtensionPointMenu__WEBPACK_IMPORTED_MODULE_5__.AlertingRuleExtensionPointMenu, { extensions: links, onSelect: setSelectedExtension });
  if (links.length === 1) {
    const link = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.first)(links);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, { variant: "canvas", icon: link.icon, onClick: () => setSelectedExtension(link), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "explore.toolbar.add-to-queryless-extensions", children: "Go queryless" }) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Dropdown, { onVisibleChange: setIsModalOpen, placement: "bottom-start", overlay: menu, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton,
    {
      "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("explore.queryless-apps-extensions.aria-label-go-queryless", "Go queryless"),
      variant: "canvas",
      isOpen: isModalOpen,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "explore.toolbar.add-to-queryless-extensions", children: "Go queryless" })
    }
  ) });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/mute-timings/useMuteTimings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCreateMuteTiming: () => (/* binding */ useCreateMuteTiming),
/* harmony export */   useDeleteMuteTiming: () => (/* binding */ useDeleteMuteTiming),
/* harmony export */   useGetMuteTiming: () => (/* binding */ useGetMuteTiming),
/* harmony export */   useMuteTimings: () => (/* binding */ useMuteTimings),
/* harmony export */   useUpdateMuteTiming: () => (/* binding */ useUpdateMuteTiming),
/* harmony export */   useValidateMuteTiming: () => (/* binding */ useValidateMuteTiming)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_alerting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-alerting/src/grafana/api/util.ts");
/* harmony import */ var app_features_alerting_unified_api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/api/alertmanagerApi.ts");
/* harmony import */ var app_features_alerting_unified_api_timeIntervalsApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/api/timeIntervalsApi.ts");
/* harmony import */ var app_features_alerting_unified_components_mute_timings_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/mute-timings/util.tsx");
/* harmony import */ var app_features_alerting_unified_utils_k8s_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/k8s/constants.ts");
/* harmony import */ var app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/k8s/utils.ts");
/* harmony import */ var _api_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/api/utils.ts");
/* harmony import */ var _hooks_useAsync__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAsync.tsx");
/* harmony import */ var _hooks_useProduceNewAlertmanagerConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useProduceNewAlertmanagerConfig.ts");
/* harmony import */ var _reducers_alertmanager_muteTimings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/reducers/alertmanager/muteTimings.ts");












const { useLazyGetAlertmanagerConfigurationQuery } = app_features_alerting_unified_api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_2__.alertmanagerApi;
const {
  useLazyListNamespacedTimeIntervalQuery,
  useCreateNamespacedTimeIntervalMutation,
  useReplaceNamespacedTimeIntervalMutation,
  useDeleteNamespacedTimeIntervalMutation
} = app_features_alerting_unified_api_timeIntervalsApi__WEBPACK_IMPORTED_MODULE_3__.timeIntervalsApi;
const parseK8sTimeInterval = (item) => {
  const { metadata, spec } = item;
  return {
    ...spec,
    id: spec.name,
    metadata,
    provisioned: (0,app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_6__.isK8sEntityProvisioned)(item)
  };
};
const parseAmTimeInterval = (interval, provenance) => {
  return {
    ...interval,
    id: interval.name,
    provisioned: Boolean(provenance && provenance !== app_features_alerting_unified_utils_k8s_constants__WEBPACK_IMPORTED_MODULE_5__.PROVENANCE_NONE)
  };
};
const useAlertmanagerIntervals = () => useLazyGetAlertmanagerConfigurationQuery({
  selectFromResult: ({ data, ...rest }) => {
    if (!data) {
      return { data, ...rest };
    }
    const { alertmanager_config } = data;
    const muteTimingsProvenances = alertmanager_config.muteTimeProvenances ?? {};
    const intervals = (0,app_features_alerting_unified_components_mute_timings_util__WEBPACK_IMPORTED_MODULE_4__.mergeTimeIntervals)(alertmanager_config);
    const timeIntervals = intervals.map(
      (interval) => parseAmTimeInterval(interval, muteTimingsProvenances[interval.name])
    );
    return {
      data: timeIntervals,
      ...rest
    };
  }
});
const useGrafanaAlertmanagerIntervals = () => useLazyListNamespacedTimeIntervalQuery({
  selectFromResult: ({ data, ...rest }) => {
    return {
      data: data?.items.map((item) => parseK8sTimeInterval(item)),
      ...rest
    };
  }
});
const useMuteTimings = ({ alertmanager, skip }) => {
  const useK8sApi = (0,app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_6__.shouldUseK8sApi)(alertmanager);
  const [getGrafanaTimeIntervals, intervalsResponse] = useGrafanaAlertmanagerIntervals();
  const [getAlertmanagerTimeIntervals, configApiResponse] = useAlertmanagerIntervals();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (skip) {
      return;
    }
    if (useK8sApi) {
      const namespace = (0,_api_utils__WEBPACK_IMPORTED_MODULE_7__.getAPINamespace)();
      getGrafanaTimeIntervals({ namespace });
    } else {
      getAlertmanagerTimeIntervals(alertmanager);
    }
  }, [alertmanager, getAlertmanagerTimeIntervals, getGrafanaTimeIntervals, skip, useK8sApi]);
  return useK8sApi ? intervalsResponse : configApiResponse;
};
const useCreateMuteTiming = ({ alertmanager }) => {
  const useK8sApi = (0,app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_6__.shouldUseK8sApi)(alertmanager);
  const [createGrafanaTimeInterval] = useCreateNamespacedTimeIntervalMutation();
  const [updateConfiguration] = (0,_hooks_useProduceNewAlertmanagerConfig__WEBPACK_IMPORTED_MODULE_9__.useProduceNewAlertmanagerConfiguration)();
  const addToK8sAPI = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_8__.useAsync)(({ interval }) => {
    const namespace = (0,_api_utils__WEBPACK_IMPORTED_MODULE_7__.getAPINamespace)();
    return createGrafanaTimeInterval({
      namespace,
      comGithubGrafanaGrafanaPkgApisAlertingNotificationsV0Alpha1TimeInterval: { metadata: {}, spec: interval }
    }).unwrap();
  });
  const addToAlertmanagerConfiguration = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_8__.useAsync)(({ interval }) => {
    const action = (0,_reducers_alertmanager_muteTimings__WEBPACK_IMPORTED_MODULE_10__.addMuteTimingAction)({ interval });
    return updateConfiguration(action);
  });
  return useK8sApi ? addToK8sAPI : addToAlertmanagerConfiguration;
};
const useGetMuteTiming = ({ alertmanager, name: nameToFind }) => {
  const useK8sApi = (0,app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_6__.shouldUseK8sApi)(alertmanager);
  const [getGrafanaTimeInterval, k8sResponse] = useLazyListNamespacedTimeIntervalQuery({
    selectFromResult: ({ data, ...rest }) => {
      if (!data) {
        return { data, ...rest };
      }
      if (data.items.length === 0) {
        return { ...rest, data: void 0, isError: true };
      }
      return {
        data: parseK8sTimeInterval(data.items[0]),
        ...rest
      };
    }
  });
  const [getAlertmanagerTimeInterval, amConfigApiResponse] = useLazyGetAlertmanagerConfigurationQuery({
    selectFromResult: ({ data, ...rest }) => {
      if (!data) {
        return { data, ...rest };
      }
      const alertmanager_config = data?.alertmanager_config ?? {};
      const timeIntervals = (0,app_features_alerting_unified_components_mute_timings_util__WEBPACK_IMPORTED_MODULE_4__.mergeTimeIntervals)(alertmanager_config);
      const timing = timeIntervals.find(({ name }) => name === nameToFind);
      if (timing) {
        const muteTimingsProvenances = alertmanager_config?.muteTimeProvenances ?? {};
        return {
          data: parseAmTimeInterval(timing, muteTimingsProvenances[timing.name]),
          ...rest
        };
      }
      return { ...rest, data: void 0, isError: true };
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (useK8sApi) {
      const namespace = (0,_api_utils__WEBPACK_IMPORTED_MODULE_7__.getAPINamespace)();
      getGrafanaTimeInterval(
        { namespace, fieldSelector: (0,app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_6__.stringifyFieldSelector)([["metadata.name", (0,_grafana_alerting__WEBPACK_IMPORTED_MODULE_1__.base64UrlEncode)(nameToFind)]]) },
        true
      );
    } else {
      getAlertmanagerTimeInterval(alertmanager, true);
    }
  }, [alertmanager, getAlertmanagerTimeInterval, getGrafanaTimeInterval, nameToFind, useK8sApi]);
  return useK8sApi ? k8sResponse : amConfigApiResponse;
};
const useUpdateMuteTiming = ({ alertmanager }) => {
  const useK8sApi = (0,app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_6__.shouldUseK8sApi)(alertmanager);
  const [replaceGrafanaTimeInterval] = useReplaceNamespacedTimeIntervalMutation();
  const [updateConfiguration] = (0,_hooks_useProduceNewAlertmanagerConfig__WEBPACK_IMPORTED_MODULE_9__.useProduceNewAlertmanagerConfiguration)();
  const updateToK8sAPI = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_8__.useAsync)(
    async ({ interval, originalName }) => {
      const namespace = (0,_api_utils__WEBPACK_IMPORTED_MODULE_7__.getAPINamespace)();
      return replaceGrafanaTimeInterval({
        name: originalName,
        namespace,
        comGithubGrafanaGrafanaPkgApisAlertingNotificationsV0Alpha1TimeInterval: {
          spec: interval,
          metadata: { name: originalName }
        }
      }).unwrap();
    }
  );
  const updateToAlertmanagerConfiguration = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_8__.useAsync)(
    async ({ interval, originalName }) => {
      const action = (0,_reducers_alertmanager_muteTimings__WEBPACK_IMPORTED_MODULE_10__.updateMuteTimingAction)({ interval, originalName });
      return updateConfiguration(action);
    }
  );
  return useK8sApi ? updateToK8sAPI : updateToAlertmanagerConfiguration;
};
const useDeleteMuteTiming = ({ alertmanager }) => {
  const useK8sApi = (0,app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_6__.shouldUseK8sApi)(alertmanager);
  const [updateConfiguration, _updateConfigurationRequestState] = (0,_hooks_useProduceNewAlertmanagerConfig__WEBPACK_IMPORTED_MODULE_9__.useProduceNewAlertmanagerConfiguration)();
  const [deleteGrafanaTimeInterval] = useDeleteNamespacedTimeIntervalMutation();
  const deleteFromAlertmanagerAPI = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_8__.useAsync)(async ({ name }) => {
    const action = (0,_reducers_alertmanager_muteTimings__WEBPACK_IMPORTED_MODULE_10__.deleteMuteTimingAction)({ name });
    return updateConfiguration(action);
  });
  const deleteFromK8sAPI = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_8__.useAsync)(async ({ name }) => {
    const namespace = (0,_api_utils__WEBPACK_IMPORTED_MODULE_7__.getAPINamespace)();
    await deleteGrafanaTimeInterval({
      name,
      namespace,
      ioK8SApimachineryPkgApisMetaV1DeleteOptions: {}
    }).unwrap();
  });
  return useK8sApi ? deleteFromK8sAPI : deleteFromAlertmanagerAPI;
};
const useValidateMuteTiming = ({ alertmanager }) => {
  const useK8sApi = (0,app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_6__.shouldUseK8sApi)(alertmanager);
  const [getIntervals] = useAlertmanagerIntervals();
  if (useK8sApi) {
    return () => void 0;
  }
  return async (value, skipValidation) => {
    if (skipValidation) {
      return;
    }
    return getIntervals(alertmanager).unwrap().then((config) => {
      const intervals = (0,app_features_alerting_unified_components_mute_timings_util__WEBPACK_IMPORTED_MODULE_4__.mergeTimeIntervals)(config.alertmanager_config);
      const duplicatedInterval = Boolean(intervals?.find((interval) => interval.name === value));
      return duplicatedInterval ? `Mute timing already exists with name "${value}"` : void 0;
    });
  };
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/mute-timings/util.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidStartAndEndTime: () => (/* binding */ isValidStartAndEndTime),
/* harmony export */   isvalidTimeFormat: () => (/* binding */ isvalidTimeFormat),
/* harmony export */   mergeTimeIntervals: () => (/* binding */ mergeTimeIntervals),
/* harmony export */   renderTimeIntervals: () => (/* binding */ renderTimeIntervals)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");






const TIME_RANGE_REGEX = /^((([01][0-9])|(2[0-3])):[0-5][0-9])$|(^24:00$)/;
const isvalidTimeFormat = (timeString) => {
  return timeString ? TIME_RANGE_REGEX.test(timeString) : true;
};
const mergeTimeIntervals = (alertManagerConfig) => {
  return [...alertManagerConfig.mute_time_intervals ?? [], ...alertManagerConfig.time_intervals ?? []];
};
const isValidStartAndEndTime = (startTime, endTime) => {
  if (!startTime && !endTime) {
    return true;
  }
  if (!startTime && endTime || startTime && !endTime) {
    return false;
  }
  const timeUnit = "HH:mm";
  const startDate = moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf("day").add(startTime, timeUnit);
  const endDate = moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf("day").add(endTime, timeUnit);
  if (startTime && endTime && startDate.isBefore(endDate)) {
    return true;
  }
  if (startTime && endTime && endDate.isAfter(startDate)) {
    return true;
  }
  return false;
};
function renderTimeIntervals(muteTiming) {
  const timeIntervals = muteTiming.time_intervals;
  const intervals = timeIntervals.map((interval, index) => {
    const { times, weekdays, days_of_month, months, years, location } = interval;
    const timeString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.getTimeString)(times, location);
    const weekdayString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.getWeekdayString)(weekdays);
    const daysString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.getDaysOfMonthString)(days_of_month);
    const monthsString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.getMonthsString)(months);
    const yearsString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.getYearsString)(years);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
      `${timeString} ${weekdayString}`,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
      [daysString, monthsString, yearsString].join(" | "),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})
    ] }) }, JSON.stringify(interval) + index);
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { direction: "column", gap: 1, children: intervals });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/notification-policies/PromDurationDocs.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PromDurationDocs: () => (/* binding */ PromDurationDocs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _types_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/types/time.ts");






function PromDurationDocs() {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getPromDurationStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.prom-duration-docs.explanation", children: "Prometheus duration format consist of a number followed by a time unit." }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.prom-duration-docs.different-units", children: "Different units can be combined for more granularity." }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.list, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.header, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.prom-duration-docs.symbol", children: "Symbol" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.prom-duration-docs.time-unit", children: "Time unit" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.prom-duration-docs.example", children: "Example" }) })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PromDurationDocsTimeUnit, { unit: _types_time__WEBPACK_IMPORTED_MODULE_4__.TimeOptions.seconds, name: "seconds", example: "20s" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PromDurationDocsTimeUnit, { unit: _types_time__WEBPACK_IMPORTED_MODULE_4__.TimeOptions.minutes, name: "minutes", example: "10m" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PromDurationDocsTimeUnit, { unit: _types_time__WEBPACK_IMPORTED_MODULE_4__.TimeOptions.hours, name: "hours", example: "4h" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PromDurationDocsTimeUnit, { unit: _types_time__WEBPACK_IMPORTED_MODULE_4__.TimeOptions.days, name: "days", example: "3d" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PromDurationDocsTimeUnit, { unit: _types_time__WEBPACK_IMPORTED_MODULE_4__.TimeOptions.weeks, name: "weeks", example: "2w" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.examples, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.prom-duration-docs.multiple-units-combined", children: "Multiple units combined" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: "1m30s, 2h30m20s, 1w2d" })
      ] })
    ] })
  ] });
}
function PromDurationDocsTimeUnit({ unit, name, example }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getPromDurationStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.unit, children: unit }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: name }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: example })
  ] });
}
const getPromDurationStyles = (theme) => ({
  unit: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontWeight: theme.typography.fontWeightBold
  }),
  list: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "grid",
    gridTemplateColumns: "max-content 1fr 2fr",
    gap: theme.spacing(1, 3)
  }),
  header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "contents",
    fontWeight: theme.typography.fontWeightBold
  }),
  examples: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "contents",
    "& > div": {
      gridColumn: "1 / span 2"
    }
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/notification-policies/PromDurationInput.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PromDurationInput: () => (/* binding */ PromDurationInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _HoverCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/HoverCard.tsx");
/* harmony import */ var _PromDurationDocs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/PromDurationDocs.tsx");






const PromDurationInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input,
    {
      suffix: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HoverCard__WEBPACK_IMPORTED_MODULE_4__.PopupCard, { content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PromDurationDocs__WEBPACK_IMPORTED_MODULE_5__.PromDurationDocs, {}), disabled: false, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { name: "info-circle", size: "lg" }) }),
      ...props,
      ref
    }
  );
});
PromDurationInput.displayName = "PromDurationInput";


/***/ }),

/***/ "./public/app/features/alerting/unified/components/notification-policies/formStyles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFormStyles: () => (/* binding */ getFormStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");


const getFormStyles = (theme) => {
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      alignItems: "center",
      display: "flex",
      flexFlow: "row nowrap",
      "& > * + *": {
        marginLeft: theme.spacing(1)
      }
    }),
    input: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      flex: 1
    }),
    promDurationInput: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      maxWidth: theme.spacing(32)
    }),
    timingFormContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      padding: theme.spacing(1)
    }),
    linkText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      textDecoration: "underline"
    }),
    collapse: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      border: "none",
      background: "none",
      color: theme.colors.text.primary
    })
  };
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/notification-policies/routeTimingsFields.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routeTimingsFields: () => (/* binding */ routeTimingsFields)
/* harmony export */ });

const routeTimingsFields = {
  groupWait: {
    label: "Group wait",
    description: "The wait time before sending the first notification for a new group of alerts. If empty, it is inherited from the parent policy.",
    ariaLabel: "Group wait value"
  },
  groupInterval: {
    label: "Group interval",
    description: "The wait time before sending a notification about changes in the alert group after the first notification has been sent. If empty, it is inherited from the parent policy.",
    ariaLabel: "Group interval value"
  },
  repeatInterval: {
    label: "Repeat interval",
    description: "The wait time before resending a notification that has already been sent successfully.",
    ariaLabel: "Repeat interval value"
  }
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/notification-policies/timingOptions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TIMING_OPTIONS_DEFAULTS: () => (/* binding */ TIMING_OPTIONS_DEFAULTS)
/* harmony export */ });

const TIMING_OPTIONS_DEFAULTS = {
  group_wait: "30s",
  group_interval: "5m",
  repeat_interval: "4h"
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/AlertRuleNameInput.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertRuleNameAndMetric: () => (/* binding */ AlertRuleNameAndMetric)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var app_features_datasources_components_picker_DataSourcePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/datasources/components/picker/DataSourcePicker.tsx");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _RuleEditorSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx");











const recordingRuleNameValidationPattern = (type) => ({
  message: (0,_utils_rules__WEBPACK_IMPORTED_MODULE_11__.isGrafanaRecordingRuleByType)(type) ? "Recording rule metric must be valid metric name. It may only contain letters, numbers, and colons. It may not contain whitespace." : "Recording rule name must be valid metric name. It may only contain letters, numbers, and colons. It may not contain whitespace.",
  value: /^[a-zA-Z_:][a-zA-Z0-9_:]*$/
});
const AlertRuleNameAndMetric = () => {
  const {
    control,
    register,
    watch,
    formState: { errors },
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  const ruleFormType = watch("type");
  if (!ruleFormType) {
    return null;
  }
  const isRecording = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_11__.isRecordingRuleByType)(ruleFormType);
  const isGrafanaRecordingRule = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_11__.isGrafanaRecordingRuleByType)(ruleFormType);
  const isCloudRecordingRule = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_11__.isCloudRecordingRuleByType)(ruleFormType);
  const recordingLabel = isGrafanaRecordingRule ? "recording rule and metric" : "recording rule";
  const namePlaceholder = isRecording ? "recording rule" : "alert rule";
  const entityName = isRecording ? recordingLabel : "alert rule";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _RuleEditorSection__WEBPACK_IMPORTED_MODULE_12__.RuleEditorSection,
    {
      stepNo: 1,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.alert-rule-name-and-metric.title-section", "Enter {{entityName}} name", { entityName }),
      description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "bodySmall", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.alert-rule-name-and-metric.description-section", children: [
        "Enter a name to identify your ",
        { entityName },
        "."
      ] }) }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.alert-rule-name-and-metric.label-name", "Name"),
            error: errors?.name?.message,
            invalid: !!errors.name?.message,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Input,
              {
                "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.AlertRules.ruleNameField,
                id: "name",
                width: 38,
                ...register("name", {
                  required: {
                    value: true,
                    message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.alert-rule-name-and-metric.message.must-enter-a-name", "Must enter a name")
                  },
                  pattern: isCloudRecordingRule ? recordingRuleNameValidationPattern(_types_rule_form__WEBPACK_IMPORTED_MODULE_9__.RuleFormType.cloudRecording) : void 0
                }),
                "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.alert-rule-name-and-metric.aria-label-name", "name"),
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
                  "alerting.alert-rule-name-and-metric.placeholder-name",
                  "Give your {{namePlaceholder}} a name",
                  { namePlaceholder }
                )
              }
            )
          }
        ),
        isGrafanaRecordingRule && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.alert-rule-name-and-metric.label-metric", "Metric"),
            error: errors?.metric?.message,
            invalid: !!errors.metric?.message,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Input,
              {
                id: "metric",
                width: 38,
                ...register("metric", {
                  required: {
                    value: true,
                    message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
                      "alerting.alert-rule-name-and-metric.message.must-enter-a-metric-name",
                      "Must enter a metric name"
                    )
                  },
                  pattern: recordingRuleNameValidationPattern(_types_rule_form__WEBPACK_IMPORTED_MODULE_9__.RuleFormType.grafanaRecording)
                }),
                "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.alert-rule-name-and-metric.metric-aria-label-metric", "metric"),
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
                  "alerting.alert-rule-name-and-metric.metric-placeholder-recorded-metric",
                  "Give the name of the new recorded metric"
                )
              }
            )
          }
        ),
        isGrafanaRecordingRule && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
          {
            id: "target-data-source",
            "data-testid": "target-data-source",
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.recording-rules.label-target-data-source", "Target data source"),
            description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
              "alerting.recording-rules.description-target-data-source",
              "The Prometheus data source to store recording rules in"
            ),
            error: errors.targetDatasourceUid?.message,
            invalid: !!errors.targetDatasourceUid?.message,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              react_hook_form__WEBPACK_IMPORTED_MODULE_1__.Controller,
              {
                render: ({ field: { onChange, ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  app_features_datasources_components_picker_DataSourcePicker__WEBPACK_IMPORTED_MODULE_8__.DataSourcePicker,
                  {
                    ...field,
                    current: field.value,
                    noDefault: true,
                    filter: _utils_datasource__WEBPACK_IMPORTED_MODULE_10__.isValidRecordingRulesTarget,
                    onChange: (ds) => {
                      setValue("targetDatasourceUid", ds.uid);
                    }
                  }
                ),
                name: "targetDatasourceUid",
                control,
                rules: {
                  required: {
                    value: true,
                    message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
                      "alerting.alert-rule-name-and-metric.message.please-select-a-data-source",
                      "Please select a data source"
                    )
                  }
                }
              }
            )
          }
        )
      ] })
    }
  );
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/AnnotationHeaderField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _CustomAnnotationHeaderField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/CustomAnnotationHeaderField.tsx");







const AnnotationHeaderField = ({
  annotationField,
  annotations,
  annotation,
  index,
  labelId
}) => {
  const { control } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "column", gap: 0, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { htmlFor: labelId, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_hook_form__WEBPACK_IMPORTED_MODULE_1__.Controller,
      {
        name: `annotations.${index}.key`,
        defaultValue: annotationField.key,
        render: ({ field: { ref, ...field } }) => {
          if (!_utils_constants__WEBPACK_IMPORTED_MODULE_5__.annotationLabels[annotation]) {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CustomAnnotationHeaderField__WEBPACK_IMPORTED_MODULE_6__["default"], { field });
          }
          let label;
          switch (annotationField.key) {
            case _utils_constants__WEBPACK_IMPORTED_MODULE_5__.Annotation.dashboardUID:
              label = "Dashboard and panel";
              break;
            case _utils_constants__WEBPACK_IMPORTED_MODULE_5__.Annotation.panelID:
              label = "";
              break;
            default:
              label = _utils_constants__WEBPACK_IMPORTED_MODULE_5__.annotationLabels[annotation] && _utils_constants__WEBPACK_IMPORTED_MODULE_5__.annotationLabels[annotation] + " (optional)";
          }
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { "data-testid": `annotation-key-${index}`, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "primary", variant: "bodySmall", children: label }) });
        },
        control,
        rules: {
          required: {
            value: !!annotations[index]?.value,
            message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.annotation-header-field.message.required", "Required.")
          }
        }
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { variant: "bodySmall", color: "secondary", children: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.annotationDescriptions[annotation] })
  ] });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnnotationHeaderField);


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/AnnotationsStep.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/immer/dist/immer.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-use/esm/useToggle.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/TextArea/TextArea.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _enterprise_components_AI_AIGenImproveAnnotationsButton_addAIImproveAnnotationsButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/enterprise-components/AI/AIGenImproveAnnotationsButton/addAIImproveAnnotationsButton.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _AnnotationHeaderField__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AnnotationHeaderField.tsx");
/* harmony import */ var _DashboardAnnotationField__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/DashboardAnnotationField.tsx");
/* harmony import */ var _DashboardPicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/DashboardPicker.tsx");
/* harmony import */ var _NeedHelpInfo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/NeedHelpInfo.tsx");
/* harmony import */ var _RuleEditorSection__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx");
/* harmony import */ var _useDashboardQuery__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/useDashboardQuery.ts");


















const AnnotationsStep = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.useStyles2)(getStyles);
  const [showPanelSelector, setShowPanelSelector] = (0,react_use__WEBPACK_IMPORTED_MODULE_5__["default"])(false);
  const {
    control,
    register,
    watch,
    formState: { errors },
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
  const annotations = watch("annotations");
  const type = watch("type");
  const { fields, append, remove } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFieldArray)({ control, name: "annotations" });
  const selectedDashboardUid = annotations.find((annotation) => annotation.key === _utils_constants__WEBPACK_IMPORTED_MODULE_15__.Annotation.dashboardUID)?.value;
  const selectedPanelId = Number(annotations.find((annotation) => annotation.key === _utils_constants__WEBPACK_IMPORTED_MODULE_15__.Annotation.panelID)?.value);
  const [selectedDashboard, setSelectedDashboard] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(void 0);
  const [selectedPanel, setSelectedPanel] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(void 0);
  const { dashboardModel, isFetching: isDashboardFetching } = (0,_useDashboardQuery__WEBPACK_IMPORTED_MODULE_22__.useDashboardQuery)(selectedDashboardUid);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (isDashboardFetching || !dashboardModel) {
      return;
    }
    setSelectedDashboard(dashboardModel);
    const allPanels = (0,_DashboardPicker__WEBPACK_IMPORTED_MODULE_19__.getVisualPanels)(dashboardModel);
    const currentPanel = allPanels.find((panel) => panel.id === selectedPanelId);
    setSelectedPanel(currentPanel);
  }, [selectedPanelId, dashboardModel, isDashboardFetching]);
  const setSelectedDashboardAndPanelId = (dashboardUid, panelId) => {
    const updatedAnnotations = (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(annotations, (draft) => {
      const dashboardAnnotation = draft.find((a) => a.key === _utils_constants__WEBPACK_IMPORTED_MODULE_15__.Annotation.dashboardUID);
      const panelAnnotation = draft.find((a) => a.key === _utils_constants__WEBPACK_IMPORTED_MODULE_15__.Annotation.panelID);
      if (dashboardAnnotation) {
        dashboardAnnotation.value = dashboardUid;
      } else {
        draft.push({ key: _utils_constants__WEBPACK_IMPORTED_MODULE_15__.Annotation.dashboardUID, value: dashboardUid });
      }
      if (panelAnnotation) {
        panelAnnotation.value = panelId.toString();
      } else {
        draft.push({ key: _utils_constants__WEBPACK_IMPORTED_MODULE_15__.Annotation.panelID, value: panelId.toString() });
      }
    });
    setValue("annotations", updatedAnnotations);
    setShowPanelSelector(false);
  };
  const handleDeleteDashboardAnnotation = () => {
    const updatedAnnotations = annotations.filter(
      (a) => a.key !== _utils_constants__WEBPACK_IMPORTED_MODULE_15__.Annotation.dashboardUID && a.key !== _utils_constants__WEBPACK_IMPORTED_MODULE_15__.Annotation.panelID
    );
    setValue("annotations", updatedAnnotations);
    setSelectedDashboard(void 0);
    setSelectedPanel(void 0);
  };
  const handleEditDashboardAnnotation = () => {
    setShowPanelSelector(true);
  };
  function getAnnotationsSectionDescription() {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "row", gap: 0.5, alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Text, { variant: "bodySmall", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.annotations.description", children: "Add more context to your alert notifications." }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _NeedHelpInfo__WEBPACK_IMPORTED_MODULE_20__.NeedHelpInfo,
        {
          externalLink: "https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rules/annotation-label/#annotations",
          linkText: `Read about annotations`,
          contentText: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
              "alerting.rule-form.annotations.description1",
              "Annotations add additional information to alerts, helping alert responders identify and address potential issues."
            ) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
              "alerting.rule-form.annotations.description2",
              "For example, add a Summary annotation to tell you which value caused the alert to fire or which server it happened on."
            ) }),
            (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
              "alerting.rule-form.annotations.description3",
              "Annotations can contain a combination of text and template code, which is used to include data from queries."
            )
          ] }),
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.annotations-step.get-annotations-section-description.title-annotations", "Annotations")
        }
      )
    ] });
  }
  const step = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_16__.isGrafanaManagedRuleByType)(type) ? 6 : 5;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _RuleEditorSection__WEBPACK_IMPORTED_MODULE_21__.RuleEditorSection,
    {
      stepNo: step,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.annotations.title", "Configure notification message"),
      description: getAnnotationsSectionDescription(),
      fullWidth: true,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "column", gap: 1, children: [
        (0,_utils_rules__WEBPACK_IMPORTED_MODULE_16__.isGrafanaManagedRuleByType)(type) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_enterprise_components_AI_AIGenImproveAnnotationsButton_addAIImproveAnnotationsButton__WEBPACK_IMPORTED_MODULE_14__.AIImproveAnnotationsButtonComponent, {}),
        fields.map((annotationField, index) => {
          const isUrl = annotations[index]?.key?.toLocaleLowerCase().endsWith("url");
          const ValueInputComponent = isUrl ? _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Input : _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.TextArea;
          const annotation = annotationField.key;
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.flexRow, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _AnnotationHeaderField__WEBPACK_IMPORTED_MODULE_17__["default"],
              {
                annotationField,
                annotations,
                annotation,
                index,
                labelId: `annotation-${index}`
              }
            ),
            selectedDashboardUid && selectedPanelId && annotationField.key === _utils_constants__WEBPACK_IMPORTED_MODULE_15__.Annotation.dashboardUID && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _DashboardAnnotationField__WEBPACK_IMPORTED_MODULE_18__["default"],
              {
                dashboard: selectedDashboard,
                panel: selectedPanel,
                dashboardUid: selectedDashboardUid.toString(),
                panelId: selectedPanelId.toString(),
                onEditClick: handleEditDashboardAnnotation,
                onDeleteClick: handleDeleteDashboardAnnotation
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.annotationValueContainer, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field,
                {
                  hidden: annotationField.key === _utils_constants__WEBPACK_IMPORTED_MODULE_15__.Annotation.dashboardUID || annotationField.key === _utils_constants__WEBPACK_IMPORTED_MODULE_15__.Annotation.panelID,
                  className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.flexRowItemMargin, styles.field),
                  invalid: !!errors.annotations?.[index]?.value?.message,
                  error: errors.annotations?.[index]?.value?.message,
                  noMargin: true,
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    ValueInputComponent,
                    {
                      "data-testid": `annotation-value-${index}`,
                      id: `annotation-${index}`,
                      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.annotationValueInput, { [styles.textarea]: !isUrl }),
                      ...register(`annotations.${index}.value`),
                      placeholder: isUrl ? (
                        // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
                        "https://"
                      ) : annotationField.key && (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.annotations-step.placeholder-value-input", "Enter a {{key}}...", {
                        key: annotationField.key
                      }) || (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
                        "alerting.annotations-step.placeholder-value-input-default",
                        "Enter custom annotation content..."
                      ),
                      defaultValue: annotationField.value
                    }
                  )
                }
              ),
              !_utils_constants__WEBPACK_IMPORTED_MODULE_15__.annotationLabels[annotation] && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
                {
                  type: "button",
                  className: styles.deleteAnnotationButton,
                  "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.annotations-step.aria-label-delete-annotation", "delete annotation"),
                  icon: "trash-alt",
                  variant: "secondary",
                  onClick: () => remove(index)
                }
              )
            ] })
          ] }) }, annotationField.id);
        }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "row", gap: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.addAnnotationsButtonContainer, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
            {
              icon: "plus",
              type: "button",
              variant: "secondary",
              onClick: () => {
                append({ key: "", value: "" });
              },
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.annotations-step.add-custom-annotation", children: "Add custom annotation" })
            }
          ),
          !selectedDashboard && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { type: "button", variant: "secondary", icon: "dashboard", onClick: () => setShowPanelSelector(true), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.annotations-step.link-dashboard-and-panel", children: "Link dashboard and panel" }) })
        ] }) }),
        showPanelSelector && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _DashboardPicker__WEBPACK_IMPORTED_MODULE_19__.DashboardPicker,
          {
            isOpen: true,
            dashboardUid: selectedDashboardUid,
            panelId: selectedPanelId,
            onChange: setSelectedDashboardAndPanelId,
            onDismiss: () => setShowPanelSelector(false)
          }
        )
      ] })
    }
  );
};
const getStyles = (theme) => ({
  annotationValueInput: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "394px"
  }),
  textarea: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    height: "76px"
  }),
  addAnnotationsButtonContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: theme.spacing(1),
    gap: theme.spacing(1),
    display: "flex"
  }),
  field: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: theme.spacing(0.5)
  }),
  flexRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start"
  }),
  flexRowItemMargin: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: theme.spacing(1)
  }),
  deleteAnnotationButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "inline-block",
    marginTop: "10px",
    marginLeft: "10px"
  }),
  annotationTitle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.primary,
    marginBottom: "3px"
  }),
  annotationContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: "5px"
  }),
  annotationDescription: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.secondary
  }),
  annotationValueContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnnotationsStep);


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/CloudAlertPreview.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudAlertPreview: () => (/* binding */ CloudAlertPreview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Tags/TagList.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _utils_labels__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/labels.ts");
/* harmony import */ var _rules_AlertStateTag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/preview.ts");








function CloudAlertPreview({ preview }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  const alertPreview = (0,_preview__WEBPACK_IMPORTED_MODULE_9__.mapDataFrameToAlertPreview)(preview);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: styles.table, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("caption", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.cloud-alert-preview.alerts-preview", children: "Alerts preview" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.cloud-alert-preview.running-query-preview", children: "Preview based on the result of running the query for this moment." }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.cloud-alert-preview.state", children: "State" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.cloud-alert-preview.labels", children: "Labels" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.cloud-alert-preview.info", children: "Info" }) })
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: alertPreview.instances.map(({ state, info, labels }, index) => {
      const instanceTags = (0,_utils_labels__WEBPACK_IMPORTED_MODULE_7__.labelsToTags)(labels);
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rules_AlertStateTag__WEBPACK_IMPORTED_MODULE_8__.AlertStateTag, { state }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TagList, { tags: instanceTags, className: styles.tagList }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: info && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip, { content: info, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "info-circle" }) }) })
      ] }, index);
    }) })
  ] });
}
const getStyles = (theme) => ({
  table: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "100%",
    margin: theme.spacing(2, 0),
    caption: {
      captionSide: "top",
      color: theme.colors.text.primary,
      "& > span": {
        fontSize: theme.typography.bodySmall.fontSize,
        color: theme.colors.text.secondary
      }
    },
    "td, th": {
      padding: theme.spacing(1, 1)
    },
    "td + td, th + th": {
      paddingLeft: theme.spacing(3)
    },
    "thead th": {
      "&:nth-child(1)": {
        width: "80px"
      },
      "&:nth-child(2)": {
        width: "auto"
      },
      "&:nth-child(3)": {
        width: "40px"
      }
    },
    "td:nth-child(3)": {
      textAlign: "center"
    },
    "tbody tr:nth-child(2n + 1)": {
      backgroundColor: theme.colors.background.secondary
    }
  }),
  tagList: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    justifyContent: "flex-start"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/CloudEvaluationBehavior.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudEvaluationBehavior: () => (/* binding */ CloudEvaluationBehavior)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
/* harmony import */ var _GroupAndNamespaceFields__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/GroupAndNamespaceFields.tsx");
/* harmony import */ var _PreviewRule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/PreviewRule.tsx");
/* harmony import */ var _RuleEditorSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx");











const CloudEvaluationBehavior = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const {
    register,
    control,
    watch,
    formState: { errors }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const type = watch("type");
  const dataSourceName = watch("dataSourceName");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _RuleEditorSection__WEBPACK_IMPORTED_MODULE_12__.RuleEditorSection,
    {
      stepNo: 3,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.cloud-evaluation-behavior.title-set-evaluation-behavior", "Set evaluation behavior"),
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.cloud-evaluation-behavior.label-pending-period", "Pending period"),
            description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
              "alerting.cloud-evaluation-behavior.description-pending-period",
              'Period during which the threshold condition must be met to trigger an alert. Selecting "None" triggers the alert immediately once the condition is met.'
            ),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.flexRow, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, { invalid: !!errors.forTime?.message, error: errors.forTime?.message, className: styles.inlineField, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input,
                {
                  ...register("forTime", {
                    pattern: {
                      value: /^\d+$/,
                      message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
                        "alerting.cloud-evaluation-behavior.message.must-be-a-positive-integer",
                        "Must be a positive integer."
                      )
                    }
                  }),
                  width: 8
                }
              ) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
                {
                  name: "forTimeUnit",
                  render: ({ field: { onChange, ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Select,
                    {
                      ...field,
                      options: _utils_time__WEBPACK_IMPORTED_MODULE_9__.timeOptions,
                      onChange: (value) => onChange(value?.value),
                      width: 15,
                      className: styles.timeUnit
                    }
                  ),
                  control
                }
              )
            ] })
          }
        ),
        type === _types_rule_form__WEBPACK_IMPORTED_MODULE_8__.RuleFormType.cloudAlerting && dataSourceName && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GroupAndNamespaceFields__WEBPACK_IMPORTED_MODULE_10__.GroupAndNamespaceFields, { rulesSourceName: dataSourceName }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PreviewRule__WEBPACK_IMPORTED_MODULE_11__.PreviewRule, {})
      ]
    }
  );
};
const getStyles = (theme) => ({
  inlineField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: 0
  }),
  flexRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }),
  timeUnit: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginLeft: theme.spacing(0.5)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/CloudRulesSourcePicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudRulesSourcePicker: () => (/* binding */ CloudRulesSourcePicker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_features_datasources_components_picker_DataSourcePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/datasources/components/picker/DataSourcePicker.tsx");
/* harmony import */ var _hooks_useRuleSourcesWithRuler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useRuleSourcesWithRuler.ts");





function CloudRulesSourcePicker({ value, disabled, ...props }) {
  const { rulesSourcesWithRuler: dataSourcesWithRuler, isLoading } = (0,_hooks_useRuleSourcesWithRuler__WEBPACK_IMPORTED_MODULE_3__.useRulesSourcesWithRuler)();
  const dataSourceFilter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (ds) => {
      return dataSourcesWithRuler.some(({ uid }) => uid === ds.uid);
    },
    [dataSourcesWithRuler]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_features_datasources_components_picker_DataSourcePicker__WEBPACK_IMPORTED_MODULE_2__.DataSourcePicker,
    {
      disabled: isLoading || disabled,
      noDefault: true,
      alerting: true,
      filter: dataSourceFilter,
      current: value,
      ...props
    }
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/CustomAnnotationHeaderField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





const CustomAnnotationHeaderField = ({ field }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.annotationTitle, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.custom-annotation-header-field.custom-annotation-name-and-content", children: "Custom annotation name and content" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input,
      {
        placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "alerting.custom-annotation-header-field.placeholder-enter-custom-annotation-name",
          "Enter custom annotation name..."
        ),
        width: 18,
        ...field,
        className: styles.customAnnotationInput
      }
    )
  ] });
};
const getStyles = (theme) => ({
  annotationTitle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.primary,
    marginBottom: "3px"
  }),
  customAnnotationInput: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: "5px",
    width: "100%"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomAnnotationHeaderField);


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/DashboardAnnotationField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");






const DashboardAnnotationField = ({
  dashboard,
  panel,
  dashboardUid,
  panelId,
  onEditClick,
  onDeleteClick
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const dashboardLink = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_6__.makeDashboardLink)(dashboard?.uid || dashboardUid);
  const panelLink = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_6__.makePanelLink)(dashboard?.uid || dashboardUid, panel?.id?.toString() || panelId);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
    dashboard && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      "a",
      {
        href: dashboardLink,
        className: styles.link,
        target: "_blank",
        rel: "noreferrer",
        "data-testid": "dashboard-annotation",
        children: [
          dashboard.title,
          " ",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "external-link-alt" })
        ]
      }
    ),
    !dashboard && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.annotations.dashboard-annotation-field.dashboard", values: { dashboardUid }, children: [
      "Dashboard ",
      { dashboardUid }
    ] }) }),
    panel && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", { href: panelLink, className: styles.link, target: "_blank", rel: "noreferrer", "data-testid": "panel-annotation", children: [
      panel.title || "<No title>",
      " ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "external-link-alt" })
    ] }),
    !panel && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: " - " }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.annotations.dashboard-annotation-field.panel", values: { panelId }, children: [
        "Panel ",
        { panelId }
      ] }) })
    ] }),
    (dashboard || panel) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "pen", onClick: onEditClick, className: styles.icon }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "trash-alt", onClick: onDeleteClick, className: styles.icon })
    ] })
  ] });
};
const getStyles = (theme) => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: "5px"
  }),
  noLink: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.secondary
  }),
  link: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.link,
    marginRight: theme.spacing(1.5)
  }),
  icon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginRight: theme.spacing(1),
    cursor: "pointer"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardAnnotationField);


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/DashboardPicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardPicker: () => (/* binding */ DashboardPicker),
/* harmony export */   getVisualPanels: () => (/* binding */ getVisualPanels)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/FilterInput/FilterInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_search_service_searcher__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/search/service/searcher.ts");
/* harmony import */ var _useDashboardQuery__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/useDashboardQuery.ts");












const collator = new Intl.Collator();
function panelSort(a, b) {
  if (a.title && b.title) {
    return collator.compare(a.title, b.title);
  }
  if (a.title && !b.title) {
    return 1;
  } else if (!a.title && b.title) {
    return -1;
  }
  return 0;
}
const useFilteredDashboards = (dashboardFilter) => {
  return (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(async () => {
    const results = await (0,app_features_search_service_searcher__WEBPACK_IMPORTED_MODULE_17__.getGrafanaSearcher)().search({
      query: dashboardFilter,
      kind: ["dashboard"]
    });
    const locationInfo = await (0,app_features_search_service_searcher__WEBPACK_IMPORTED_MODULE_17__.getGrafanaSearcher)().getLocationInfo();
    return { dashboards: results.view.toArray(), locationInfo };
  }, [dashboardFilter]);
};
const DashboardPicker = ({ dashboardUid, panelId, isOpen, onChange, onDismiss }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.useStyles2)(getPickerStyles);
  const [selectedDashboardUid, setSelectedDashboardUid] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(dashboardUid);
  const [selectedPanelId, setSelectedPanelId] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(panelId);
  const [dashboardFilter, setDashboardFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const [debouncedDashboardFilter, setDebouncedDashboardFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const [panelFilter, setPanelFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const { value, loading: isDashSearchFetching } = useFilteredDashboards(debouncedDashboardFilter);
  const { dashboardModel, isFetching: isDashboardFetching } = (0,_useDashboardQuery__WEBPACK_IMPORTED_MODULE_18__.useDashboardQuery)(selectedDashboardUid);
  const handleDashboardChange = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((dashboardUid2) => {
    setSelectedDashboardUid(dashboardUid2);
    setSelectedPanelId(void 0);
  }, []);
  const { dashboards: filteredDashboards = [], locationInfo = {} } = value || {};
  const allDashboardPanels = getVisualPanels(dashboardModel);
  const filteredPanels = allDashboardPanels.filter((panel) => panel.title?.toLowerCase().includes(panelFilter.toLowerCase())).sort(panelSort) ?? [];
  const currentPanel = allDashboardPanels.find(
    (panel) => isValidPanel(panel) && panel.id?.toString() === selectedPanelId
  );
  const selectedDashboardIndex = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return filteredDashboards.map((dashboard) => dashboard.uid).indexOf(selectedDashboardUid ?? "");
  }, [filteredDashboards, selectedDashboardUid]);
  const isDefaultSelection = dashboardUid && dashboardUid === selectedDashboardUid;
  const selectedDashboardIsInPageResult = selectedDashboardIndex >= 0;
  const scrollToItem = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(
    (node) => {
      const canScroll = selectedDashboardIndex >= 0;
      if (isDefaultSelection && canScroll) {
        node?.scrollToItem(selectedDashboardIndex, "smart");
      }
    },
    [isDefaultSelection, selectedDashboardIndex]
  );
  (0,react_use__WEBPACK_IMPORTED_MODULE_5__["default"])(
    () => {
      setDebouncedDashboardFilter(dashboardFilter);
    },
    500,
    [dashboardFilter]
  );
  const DashboardRow = ({ index, style }) => {
    const dashboard = filteredDashboards[index];
    const isSelected = selectedDashboardUid === dashboard.uid;
    const folderTitle = locationInfo?.[dashboard.location]?.name ?? "Dashboards";
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      "button",
      {
        type: "button",
        title: dashboard.name,
        style,
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.rowButton, { [styles.rowOdd]: index % 2 === 1, [styles.rowSelected]: isSelected }),
        onClick: () => handleDashboardChange(dashboard.uid),
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.dashboardTitle, styles.rowButtonTitle), children: dashboard.name }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.dashboardFolder, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Icon, { name: "folder" }),
            " ",
            folderTitle
          ] })
        ]
      }
    );
  };
  const PanelRow = ({ index, style }) => {
    const panel = filteredPanels[index];
    const panelTitle = panel.title || "<No title>";
    const isSelected = Boolean(panel.id) && selectedPanelId === panel.id;
    const isAlertingCompatible = panel.type === "graph" || panel.type === "timeseries";
    const disabled = !isValidPanel(panel);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      "button",
      {
        type: "button",
        style,
        disabled,
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.rowButton, styles.panelButton, {
          [styles.rowOdd]: index % 2 === 1,
          [styles.rowSelected]: isSelected
        }),
        onClick: () => disabled ? lodash__WEBPACK_IMPORTED_MODULE_2__.noop : setSelectedPanelId(panel.id),
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.rowButtonTitle, title: panelTitle, children: panelTitle }),
          !isAlertingCompatible && !disabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Tooltip,
            {
              content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)(
                "alerting.dashboard-picker.panel-row.tooltip-alert-tab-support",
                "The alert tab and alert annotations are only supported on graph and timeseries panels."
              ),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Icon, { name: "exclamation-triangle", className: styles.warnIcon, "data-testid": "warning-icon" })
            }
          ),
          disabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Tooltip,
            {
              content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)(
                "alerting.dashboard-picker.panel-row.content-panel-valid-identifier",
                "This panel does not have a valid identifier."
              ),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Icon, { name: "info-circle", "data-testid": "info-icon" })
            }
          )
        ]
      }
    );
  };
  const fallbackDashboardsString = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("alerting.dashboard-picker.fallback-dashboards-string", "Dashboards");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Modal,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("alerting.dashboard-picker.title-select-dashboard-and-panel", "Select dashboard and panel"),
      closeOnEscape: true,
      isOpen,
      onDismiss,
      className: styles.modal,
      contentClassName: styles.modalContent,
      children: [
        !selectedDashboardIsInPageResult && dashboardUid && dashboardModel && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Alert,
          {
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("alerting.dashboard-picker.title-current-selection", "Current selection"),
            severity: "info",
            topSpacing: 0,
            bottomSpacing: 1,
            className: styles.modalAlert,
            children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.Trans,
                {
                  i18nKey: "alerting.dashboard-picker.current-selection-dashboard",
                  values: {
                    dashboardTitle: dashboardModel.title,
                    dashboardUid: dashboardModel.uid,
                    folderTitle: dashboardModel.meta?.folderTitle ?? fallbackDashboardsString
                  },
                  children: [
                    "Dashboard: ",
                    "{{dashboardTitle}}",
                    " (",
                    "{{ dashboardUid }}",
                    ") in folder ",
                    "{{ folderTitle }}"
                  ]
                }
              ) }),
              currentPanel && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.Trans,
                {
                  i18nKey: "alerting.dashboard-picker.current-selection-panel",
                  values: { panelTitle: currentPanel.title, panelId: currentPanel.id },
                  children: [
                    "Panel: ",
                    "{{ panelTitle }}",
                    " (",
                    "{{ panelId }}",
                    ")"
                  ]
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.FilterInput,
            {
              value: dashboardFilter,
              onChange: setDashboardFilter,
              title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("alerting.dashboard-picker.title-search-dashboard", "Search dashboard"),
              placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("alerting.dashboard-picker.placeholder-search-dashboard", "Search dashboard"),
              autoFocus: true
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.FilterInput,
            {
              value: panelFilter,
              onChange: setPanelFilter,
              title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("alerting.dashboard-picker.title-search-panel", "Search panel"),
              placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("alerting.dashboard-picker.placeholder-search-panel", "Search panel")
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.column, children: [
            isDashSearchFetching && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.LoadingPlaceholder,
              {
                text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("alerting.dashboard-picker.text-loading-dashboards", "Loading dashboards..."),
                className: styles.loadingPlaceholder
              }
            ),
            !isDashSearchFetching && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__["default"], { children: ({ height, width }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              react_window__WEBPACK_IMPORTED_MODULE_7__.FixedSizeList,
              {
                ref: scrollToItem,
                itemSize: 50,
                height,
                width,
                itemCount: filteredDashboards.length,
                children: DashboardRow
              }
            ) })
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.column, children: [
            !selectedDashboardUid && !isDashboardFetching && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.selectDashboardPlaceholder, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.Trans, { i18nKey: "alerting.dashboard-picker.select-dashboard-available-panels", children: "Select a dashboard to get a list of available panels" }) }) }),
            isDashboardFetching && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.LoadingPlaceholder,
              {
                text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("alerting.dashboard-picker.text-loading-dashboard", "Loading dashboard..."),
                className: styles.loadingPlaceholder
              }
            ),
            selectedDashboardUid && !isDashboardFetching && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__["default"], { children: ({ width, height }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_window__WEBPACK_IMPORTED_MODULE_7__.FixedSizeList, { itemSize: 32, height, width, itemCount: filteredPanels.length, children: PanelRow }) })
          ] })
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Modal.ButtonRow, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Button, { type: "button", variant: "secondary", onClick: onDismiss, fill: "text", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.Trans, { i18nKey: "alerting.common.cancel", children: "Cancel" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Button,
            {
              type: "button",
              variant: "primary",
              disabled: !(selectedDashboardUid && selectedPanelId),
              onClick: () => {
                if (selectedDashboardUid && selectedPanelId) {
                  onChange(selectedDashboardUid, selectedPanelId);
                }
              },
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.Trans, { i18nKey: "alerting.dashboard-picker.confirm", children: "Confirm" })
            }
          )
        ] })
      ]
    }
  );
};
function getVisualPanels(dashboardModel) {
  if (!dashboardModel) {
    return [];
  }
  const panelsWithoutRows = dashboardModel.panels.filter((panel) => panel.type !== "row");
  const panelsNestedInRows = dashboardModel.panels.filter((rowPanel) => rowPanel.collapsed).flatMap((collapsedRow) => collapsedRow.panels ?? []);
  const allDashboardPanels = [...panelsWithoutRows, ...panelsNestedInRows];
  return allDashboardPanels;
}
const isValidPanel = (panel) => {
  const hasValidID = typeof panel.id === "number";
  const isValidPanelType = typeof panel.type === "string";
  const isLibraryPanel = "libraryPanel" in panel;
  return hasValidID && (isValidPanelType || isLibraryPanel);
};
const getPickerStyles = (theme) => {
  const clearButton = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.clearButtonStyles)(theme);
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "min-content auto",
      gap: theme.spacing(2),
      flex: 1
    }),
    column: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flex: "1 1 auto"
    }),
    dashboardTitle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "22px",
      fontWeight: theme.typography.fontWeightBold
    }),
    dashboardFolder: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "20px",
      fontSize: theme.typography.bodySmall.fontSize,
      color: theme.colors.text.secondary,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      columnGap: theme.spacing(1),
      alignItems: "center"
    }),
    rowButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)(clearButton, {
      padding: theme.spacing(0.5),
      overflow: "hidden",
      textOverflow: "ellipsis",
      textAlign: "left",
      whiteSpace: "nowrap",
      cursor: "pointer",
      border: "2px solid transparent",
      "&:disabled": {
        cursor: "not-allowed",
        color: theme.colors.text.disabled
      }
    }),
    rowButtonTitle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      textOverflow: "ellipsis",
      overflow: "hidden"
    }),
    rowSelected: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      borderColor: theme.colors.primary.border
    }),
    rowOdd: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      backgroundColor: theme.colors.background.secondary
    }),
    panelButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      gap: theme.spacing(1),
      justifyContent: "space-between",
      alignItems: "center"
    }),
    loadingPlaceholder: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }),
    selectDashboardPlaceholder: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
      fontWeight: theme.typography.fontWeightBold
    }),
    modal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "100%"
    }),
    modalContent: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flex: 1,
      display: "flex",
      flexDirection: "column"
    }),
    modalAlert: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flexGrow: 0
    }),
    warnIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      fill: theme.colors.warning.main
    })
  };
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/DurationQuickPick.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DurationQuickPick: () => (/* binding */ DurationQuickPick),
/* harmony export */   getPendingPeriodQuickOptions: () => (/* binding */ getPendingPeriodQuickOptions),
/* harmony export */   stringifyPendingPeriod: () => (/* binding */ stringifyPendingPeriod)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");





function getPendingPeriodQuickOptions(groupEvaluationInterval) {
  const groupEvaluationIntervalMillis = (0,_utils_time__WEBPACK_IMPORTED_MODULE_4__.safeParsePrometheusDuration)(groupEvaluationInterval);
  const options = [
    0,
    groupEvaluationIntervalMillis * 1,
    groupEvaluationIntervalMillis * 2,
    groupEvaluationIntervalMillis * 3,
    groupEvaluationIntervalMillis * 4,
    groupEvaluationIntervalMillis * 5
  ];
  return options.map(_utils_time__WEBPACK_IMPORTED_MODULE_4__.formatPrometheusDuration);
}
function DurationQuickPick({ selectedDuration, groupEvaluationInterval, onSelect }) {
  const isQuickSelectionActive = (duration) => selectedDuration === duration;
  const options = getPendingPeriodQuickOptions(groupEvaluationInterval);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { direction: "row", gap: 0.5, role: "listbox", children: options.map((duration) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button,
    {
      role: "option",
      "aria-selected": isQuickSelectionActive(duration),
      variant: isQuickSelectionActive(duration) ? "primary" : "secondary",
      size: "sm",
      onClick: () => {
        onSelect(duration);
      },
      children: stringifyPendingPeriod(duration)
    },
    duration
  )) });
}
function stringifyPendingPeriod(duration) {
  return duration === "0s" ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.duration-quick-pick.none", "None") : duration;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/EvaluationGroupQuickPick.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EvaluationGroupQuickPick: () => (/* binding */ EvaluationGroupQuickPick),
/* harmony export */   QUICK_PICK_OPTIONS: () => (/* binding */ QUICK_PICK_OPTIONS),
/* harmony export */   getEvaluationGroupOptions: () => (/* binding */ getEvaluationGroupOptions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");






const MIN_INTERVAl = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.unifiedAlerting.minInterval ?? "10s";
const getEvaluationGroupOptions = (minInterval = MIN_INTERVAl) => {
  const MIN_OPTIONS_TO_SHOW = 8;
  const DEFAULT_INTERVAL_OPTIONS = [
    (0,_utils_time__WEBPACK_IMPORTED_MODULE_5__.parsePrometheusDuration)("10s"),
    (0,_utils_time__WEBPACK_IMPORTED_MODULE_5__.parsePrometheusDuration)("30s"),
    (0,_utils_time__WEBPACK_IMPORTED_MODULE_5__.parsePrometheusDuration)("1m"),
    (0,_utils_time__WEBPACK_IMPORTED_MODULE_5__.parsePrometheusDuration)("5m"),
    (0,_utils_time__WEBPACK_IMPORTED_MODULE_5__.parsePrometheusDuration)("10m"),
    (0,_utils_time__WEBPACK_IMPORTED_MODULE_5__.parsePrometheusDuration)("15m"),
    (0,_utils_time__WEBPACK_IMPORTED_MODULE_5__.parsePrometheusDuration)("30m"),
    (0,_utils_time__WEBPACK_IMPORTED_MODULE_5__.parsePrometheusDuration)("1h")
  ];
  const minEvaluationIntervalMillis = (0,_utils_time__WEBPACK_IMPORTED_MODULE_5__.safeParsePrometheusDuration)(minInterval);
  const head = DEFAULT_INTERVAL_OPTIONS.filter((millis) => minEvaluationIntervalMillis <= millis);
  const tail = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.times)(MIN_OPTIONS_TO_SHOW - head.length, (index) => {
    const lastInterval = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.last)(head) ?? minEvaluationIntervalMillis;
    const multiplier = head.length === 0 ? 1 : 2;
    return lastInterval * multiplier * (index + 1);
  });
  return [...head, ...tail].map(_utils_time__WEBPACK_IMPORTED_MODULE_5__.formatPrometheusDuration);
};
const QUICK_PICK_OPTIONS = getEvaluationGroupOptions(MIN_INTERVAl);
const EvaluationGroupQuickPick = ({ currentInterval, onSelect }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "row", gap: 0.5, role: "listbox", children: QUICK_PICK_OPTIONS.map((interval) => {
  const isActive = currentInterval === interval;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button,
    {
      role: "option",
      "aria-selected": isActive,
      variant: isActive ? "primary" : "secondary",
      size: "sm",
      onClick: () => onSelect(interval),
      children: interval
    },
    interval
  );
}) });


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/ExpressionEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpressionEditor: () => (/* binding */ ExpressionEditor),
/* harmony export */   useQueryMappers: () => (/* binding */ useQueryMappers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/context/plugins/DataSourcePluginContextProvider.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/types/app.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-runtime/src/services/dataSourceSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _CloudAlertPreview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/CloudAlertPreview.tsx");
/* harmony import */ var _PreviewRule__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/PreviewRule.tsx");













const ExpressionEditor = ({
  value,
  onChange,
  dataSourceName,
  showPreviewAlertsButton = true
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useStyles2)(getStyles);
  const { mapToValue, mapToQuery } = useQueryMappers(dataSourceName);
  const dataQuery = mapToQuery({ refId: "A", hide: false }, value);
  const {
    error,
    loading,
    value: dataSource
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_9__.getDataSourceSrv)().get(dataSourceName);
  }, [dataSourceName]);
  const onChangeQuery = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(
    (query) => {
      onChange(mapToValue(query));
    },
    [onChange, mapToValue]
  );
  const [alertPreview, onPreview] = (0,_PreviewRule__WEBPACK_IMPORTED_MODULE_15__.usePreview)();
  const onRunQueriesClick = async () => {
    onPreview();
  };
  if (loading || dataSource?.name !== dataSourceName) {
    return null;
  }
  const dsi = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_9__.getDataSourceSrv)().getInstanceSettings(dataSourceName);
  if (error || !dataSource || !dataSource?.components?.QueryEditor || !dsi) {
    const errorMessage = error?.message || (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)(
      "alerting.expression-editor.error-no-component",
      "Data source plugin does not export any Query Editor component"
    );
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.Trans, { i18nKey: "alerting.expression-editor.could-not-load-editor", children: [
      "Could not load query editor due to: ",
      { errorMessage }
    ] }) });
  }
  const previewLoaded = alertPreview?.data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.LoadingState.Done;
  const QueryEditor = dataSource?.components?.QueryEditor;
  const previewDataFrame = alertPreview?.data?.series?.find((s) => s.name === "evaluation results");
  const previewHasAlerts = previewDataFrame && previewDataFrame.fields.some((field) => field.values.length > 0);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_data__WEBPACK_IMPORTED_MODULE_5__.DataSourcePluginContextProvider, { instanceSettings: dsi, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      QueryEditor,
      {
        query: dataQuery,
        queries: [dataQuery],
        app: _grafana_data__WEBPACK_IMPORTED_MODULE_6__.CoreApp.CloudAlerting,
        onChange: onChangeQuery,
        onRunQuery: lodash__WEBPACK_IMPORTED_MODULE_2__.noop,
        datasource: dataSource
      }
    ) }),
    showPreviewAlertsButton && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.preview, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Button,
        {
          type: "button",
          onClick: onRunQueriesClick,
          disabled: alertPreview?.data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.LoadingState.Loading,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.Trans, { i18nKey: "alerting.expression-editor.preview-alerts", children: "Preview alerts" })
        }
      ),
      previewLoaded && !previewHasAlerts && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Alert,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("alerting.expression-editor.title-alerts-preview", "Alerts preview"),
          severity: "info",
          className: styles.previewAlert,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.Trans, { i18nKey: "alerting.expression-editor.there-firing-alerts-query", children: "There are no firing alerts for your query." })
        }
      ),
      previewHasAlerts && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CloudAlertPreview__WEBPACK_IMPORTED_MODULE_14__.CloudAlertPreview, { preview: previewDataFrame })
    ] })
  ] });
};
const getStyles = (theme) => ({
  preview: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(2, 0),
    maxWidth: `${theme.breakpoints.values.xl}px`
  }),
  previewAlert: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    margin: theme.spacing(1, 0)
  })
});
function useQueryMappers(dataSourceName) {
  return (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    const settings = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_9__.getDataSourceSrv)().getInstanceSettings(dataSourceName);
    if (!settings) {
      throw new Error(`Datasource ${dataSourceName} not found`);
    }
    if (!(0,_utils_datasource__WEBPACK_IMPORTED_MODULE_13__.isSupportedExternalRulesSourceType)(settings.type)) {
      throw new Error(`${settings.type} is not supported as an expression editor`);
    }
    return {
      mapToValue: (query) => query.expr,
      mapToQuery: (existing, value) => ({ ...existing, expr: value })
    };
  }, [dataSourceName]);
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/ExpressionsEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpressionsEditor: () => (/* binding */ ExpressionsEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/expressions/guards.ts");
/* harmony import */ var _expressions_Expression__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/expressions/Expression.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/util.ts");








const ExpressionsEditor = ({
  condition,
  onSetCondition,
  queries,
  panelData,
  onUpdateRefId,
  onRemoveExpression,
  onUpdateExpressionType,
  onUpdateQueryExpression
}) => {
  const expressionQueries = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return queries.reduce((acc, query) => {
      return (0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_4__.isExpressionQuery)(query.model) ? acc.concat(query.model) : acc;
    }, []);
  }, [queries]);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.wrapper, children: expressionQueries.map((query) => {
    const data = panelData[query.refId];
    const isAlertCondition = condition === query.refId;
    const errorFromCondition = data && isAlertCondition ? (0,_util__WEBPACK_IMPORTED_MODULE_6__.errorFromCurrentCondition)(data) : void 0;
    const errorFromPreview = data ? (0,_util__WEBPACK_IMPORTED_MODULE_6__.errorFromPreviewData)(data) : void 0;
    const error = errorFromPreview || errorFromCondition;
    const warning = data ? (0,_util__WEBPACK_IMPORTED_MODULE_6__.warningFromSeries)(data.series) : void 0;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _expressions_Expression__WEBPACK_IMPORTED_MODULE_5__.Expression,
      {
        isAlertCondition,
        data,
        error,
        warning,
        queries,
        query,
        onSetCondition,
        onRemoveExpression,
        onUpdateRefId,
        onUpdateExpressionType,
        onChangeQuery: onUpdateQueryExpression
      },
      query.refId
    );
  }) });
};
const getStyles = (theme) => ({
  wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    gap: theme.spacing(2),
    alignContent: "stretch",
    flexWrap: "wrap"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/FolderSelector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FolderSelector: () => (/* binding */ FolderSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var app_core_components_NestedFolderPicker_NestedFolderPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/NestedFolderPicker/NestedFolderPicker.tsx");
/* harmony import */ var _create_folder_CreateNewFolder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/create-folder/CreateNewFolder.tsx");








function FolderSelector() {
  const {
    formState: { errors },
    setValue,
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const resetGroup = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setValue("group", "");
  }, [setValue]);
  const folder = watch("folder");
  const handleFolderCreation = (folder2) => {
    resetGroup();
    setValue("folder", folder2);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { alignItems: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
    {
      label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Label,
        {
          htmlFor: "folder",
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
            "alerting.folder-selector.description-select-folder",
            "Select a folder to store your rule in."
          ),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.rule-form.folder.label", children: "Folder" })
        }
      ),
      error: errors.folder?.message,
      "data-testid": "folder-picker",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "row", alignItems: "center", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
          {
            render: ({ field: { ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: 420 }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              app_core_components_NestedFolderPicker_NestedFolderPicker__WEBPACK_IMPORTED_MODULE_7__.NestedFolderPicker,
              {
                permission: "view",
                showRootFolder: false,
                invalid: !!errors.folder?.message,
                ...field,
                value: folder?.uid,
                onChange: (uid, title) => {
                  if (uid && title) {
                    setValue("folder", { title, uid });
                  } else {
                    setValue("folder", void 0);
                  }
                  resetGroup();
                }
              }
            ) }),
            name: "folder",
            rules: {
              required: {
                value: true,
                message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.folder-selector.message.select-a-folder", "Select a folder")
              }
            }
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_create_folder_CreateNewFolder__WEBPACK_IMPORTED_MODULE_8__.CreateNewFolder, { onCreate: handleFolderCreation })
      ] })
    }
  ) });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/GrafanaAlertStatePicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrafanaAlertStatePicker: () => (/* binding */ GrafanaAlertStatePicker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");





const options = [
  { value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_3__.GrafanaAlertStateDecision.Alerting, label: "Alerting" },
  { value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_3__.GrafanaAlertStateDecision.NoData, label: "No Data" },
  { value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_3__.GrafanaAlertStateDecision.OK, label: "Normal" },
  { value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_3__.GrafanaAlertStateDecision.Error, label: "Error" },
  { value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_3__.GrafanaAlertStateDecision.KeepLast, label: "Keep Last State" }
];
const GrafanaAlertStatePicker = ({ includeNoData, includeError, ...props }) => {
  const opts = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!includeNoData) {
      return options.filter((opt) => opt.value !== app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_3__.GrafanaAlertStateDecision.NoData);
    }
    if (!includeError) {
      return options.filter((opt) => opt.value !== app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_3__.GrafanaAlertStateDecision.Error);
    }
    return options;
  }, [includeNoData, includeError]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { options: opts, ...props });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/GrafanaEvaluationBehavior.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForInput: () => (/* binding */ ForInput),
/* harmony export */   GrafanaEvaluationBehaviorStep: () => (/* binding */ GrafanaEvaluationBehaviorStep),
/* harmony export */   MAX_GROUP_RESULTS: () => (/* binding */ MAX_GROUP_RESULTS),
/* harmony export */   MIN_TIME_RANGE_STEP_S: () => (/* binding */ MIN_TIME_RANGE_STEP_S)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./packages/grafana-ui/src/components/Divider/Divider.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _group_details_validation__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/group-details/validation.ts");
/* harmony import */ var _hooks_useFetchGroupsForFolder__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFetchGroupsForFolder.ts");
/* harmony import */ var _rule_editor_formDefaults__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/rule-editor/formDefaults.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _Provisioning__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/alerting/unified/components/Provisioning.tsx");
/* harmony import */ var _DurationQuickPick__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/DurationQuickPick.tsx");
/* harmony import */ var _EvaluationGroupQuickPick__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/EvaluationGroupQuickPick.tsx");
/* harmony import */ var _GrafanaAlertStatePicker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/GrafanaAlertStatePicker.tsx");
/* harmony import */ var _NeedHelpInfo__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/NeedHelpInfo.tsx");
/* harmony import */ var _RuleEditorSection__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx");





















const MIN_TIME_RANGE_STEP_S = 10;
const MAX_GROUP_RESULTS = 1e3;
const namespaceToGroupOptions = (rulerNamespace, enableProvisionedGroups) => {
  const folderGroups = Object.values(rulerNamespace).flat();
  return folderGroups.map((group) => {
    const isProvisioned = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_24__.isProvisionedRuleGroup)(group);
    return {
      label: group.name,
      value: group.name,
      description: group.interval ?? _rule_editor_formDefaults__WEBPACK_IMPORTED_MODULE_23__.DEFAULT_GROUP_EVALUATION_INTERVAL,
      // we include provisioned folders, but disable the option to select them
      isDisabled: !enableProvisionedGroups ? isProvisioned : false,
      isProvisioned
    };
  }).sort(sortByLabel);
};
const sortByLabel = (a, b) => {
  return a.label?.localeCompare(b.label ?? "") || 0;
};
const forValidationOptions = (evaluateEvery) => ({
  required: {
    value: true,
    message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.for-validation-options.message.required", "Required.")
  },
  validate: (value) => {
    if (value === "0") {
      return true;
    }
    try {
      const millisFor = (0,_utils_time__WEBPACK_IMPORTED_MODULE_25__.parsePrometheusDuration)(value);
      if (millisFor === 0) {
        return true;
      }
      try {
        const millisEvery = (0,_utils_time__WEBPACK_IMPORTED_MODULE_25__.parsePrometheusDuration)(evaluateEvery);
        return millisFor >= millisEvery ? true : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
          "alerting.rule-form.evaluation-behaviour-for.validation",
          "Pending period must be greater than or equal to the evaluation interval."
        );
      } catch (err) {
        return true;
      }
    } catch (error) {
      return error instanceof Error ? error.message : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.rule-form.evaluation-behaviour-for.error-parsing", "Failed to parse duration");
    }
  }
});
function GrafanaEvaluationBehaviorStep({
  existing,
  enableProvisionedGroups
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_20__.useStyles2)(getStyles);
  const [showErrorHandling, setShowErrorHandling] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    watch,
    setValue,
    getValues,
    formState: { errors },
    control,
    register
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
  const [group, type, isPaused, folder, evaluateEvery] = watch([
    "group",
    "type",
    "isPaused",
    "folder",
    "evaluateEvery",
    "keepFiringFor"
  ]);
  const isGrafanaAlertingRule = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_24__.isGrafanaAlertingRuleByType)(type);
  const isGrafanaRecordingRule = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_24__.isGrafanaRecordingRuleByType)(type);
  const { currentData: rulerNamespace, isLoading: loadingGroups } = (0,_hooks_useFetchGroupsForFolder__WEBPACK_IMPORTED_MODULE_22__.useFetchGroupsForFolder)(folder?.uid ?? "");
  const groupOptions = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return rulerNamespace ? namespaceToGroupOptions(rulerNamespace, enableProvisionedGroups) : [];
  }, [enableProvisionedGroups, rulerNamespace]);
  const existingGroup = Object.values(rulerNamespace ?? {}).flat().find((ruleGroup) => ruleGroup.name === group);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (existingGroup) {
      setValue("evaluateEvery", existingGroup.interval ?? _rule_editor_formDefaults__WEBPACK_IMPORTED_MODULE_23__.DEFAULT_GROUP_EVALUATION_INTERVAL);
    }
  }, [existingGroup, setValue]);
  const [isCreatingEvaluationGroup, setIsCreatingEvaluationGroup] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const handleEvalGroupCreation = (groupName, evaluationInterval) => {
    setValue("group", groupName);
    setValue("evaluateEvery", evaluationInterval);
    setIsCreatingEvaluationGroup(false);
  };
  const defaultGroupValue = group ? { value: group, label: group } : void 0;
  const pauseContentText = isGrafanaRecordingRule ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.rule-form.evaluation.pause.recording", "Turn on to pause evaluation for this recording rule.") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.rule-form.evaluation.pause.alerting", "Turn on to pause evaluation for this alert rule.");
  const onOpenEvaluationGroupCreationModal = () => setIsCreatingEvaluationGroup(true);
  const step = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_24__.isGrafanaManagedRuleByType)(type) ? 4 : 3;
  const label = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_24__.isGrafanaManagedRuleByType)(type) && !folder?.uid ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
    "alerting.rule-form.evaluation.select-folder-before",
    "Select a folder before setting evaluation group and interval"
  ) : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.rule-form.evaluation.evaluation-group-and-interval", "Evaluation group and interval");
  return (
    // TODO remove "and alert condition" for recording rules
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _RuleEditorSection__WEBPACK_IMPORTED_MODULE_32__.RuleEditorSection,
      {
        stepNo: step,
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.grafana-evaluation-behavior-step.title-set-evaluation-behavior", "Set evaluation behavior"),
        description: getDescription(isGrafanaRecordingRule),
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { direction: "column", "justify-content": "flex-start", "align-items": "flex-start", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { alignItems: "center", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: 420 }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
                {
                  label,
                  "data-testid": "group-picker",
                  className: styles.formInput,
                  error: errors.group?.message,
                  invalid: !!errors.group?.message,
                  htmlFor: "group",
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    react_hook_form__WEBPACK_IMPORTED_MODULE_4__.Controller,
                    {
                      render: ({ field: { ref, ...field }, fieldState }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Select,
                        {
                          disabled: !folder?.uid || loadingGroups,
                          inputId: "group",
                          ...field,
                          onChange: (group2) => {
                            field.onChange(group2.label ?? "");
                          },
                          isLoading: loadingGroups,
                          invalid: Boolean(folder?.uid) && !group && Boolean(fieldState.error),
                          cacheOptions: true,
                          loadingMessage: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
                            "alerting.grafana-evaluation-behavior-step.loadingMessage-loading-groups",
                            "Loading groups..."
                          ),
                          defaultValue: defaultGroupValue,
                          options: groupOptions,
                          getOptionLabel: (option) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
                            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: option.label }),
                            option.isProvisioned && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
                              " ",
                              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Provisioning__WEBPACK_IMPORTED_MODULE_27__.ProvisioningBadge, {})
                            ] })
                          ] }),
                          placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
                            "alerting.grafana-evaluation-behavior-step.placeholder-select-an-evaluation-group",
                            "Select an evaluation group..."
                          )
                        },
                        (0,lodash__WEBPACK_IMPORTED_MODULE_2__.uniqueId)()
                      ),
                      name: "group",
                      control,
                      rules: {
                        required: {
                          value: true,
                          message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
                            "alerting.grafana-evaluation-behavior-step.message.must-enter-a-group-name",
                            "Must enter a group name"
                          )
                        }
                      }
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Box, { gap: 1, display: "flex", alignItems: "center", children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.grafana-evaluation-behavior-step.or", children: "or" }) }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button,
                  {
                    onClick: onOpenEvaluationGroupCreationModal,
                    type: "button",
                    icon: "plus",
                    fill: "outline",
                    variant: "secondary",
                    disabled: !folder?.uid,
                    "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.components.AlertRules.newEvaluationGroupButton,
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.rule-form.evaluation.new-group", children: "New evaluation group" })
                  }
                )
              ] }),
              isCreatingEvaluationGroup && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                EvaluationGroupCreationModal,
                {
                  onCreate: handleEvalGroupCreation,
                  onClose: () => setIsCreatingEvaluationGroup(false),
                  groupfoldersForGrafana: rulerNamespace
                }
              )
            ] }),
            folder?.title && group && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.evaluationContainer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { direction: "column", gap: 0, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.marginTop, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { direction: "column", gap: 1, children: getValues("group") && getValues("evaluateEvery") && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.rule-form.evaluation.group-text", values: { evaluateEvery }, children: [
              "All rules in the selected group are evaluated every ",
              { evaluateEvery },
              "."
            ] }) }) }) }) }),
            isGrafanaAlertingRule && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ForInput, { evaluateEvery }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_19__.Divider, {}),
            isGrafanaAlertingRule && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(KeepFiringFor, { evaluateEvery }),
            existing && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field, { htmlFor: "pause-alert-switch", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              react_hook_form__WEBPACK_IMPORTED_MODULE_4__.Controller,
              {
                render: () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { gap: 1, direction: "row", alignItems: "center", children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _grafana_ui__WEBPACK_IMPORTED_MODULE_18__.Switch,
                    {
                      id: "pause-alert",
                      onChange: (value) => {
                        setValue("isPaused", value.currentTarget.checked);
                      },
                      value: Boolean(isPaused)
                    }
                  ),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { htmlFor: "pause-alert", className: styles.switchLabel, children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.rule-form.pause.label", children: "Pause evaluation" }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Tooltip, { placement: "top", content: pauseContentText, theme: "info", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Icon, { tabIndex: 0, name: "info-circle", size: "sm", className: styles.infoIcon }) })
                  ] })
                ] }),
                name: "isPaused"
              }
            ) })
          ] }),
          isGrafanaAlertingRule && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _CollapseToggle__WEBPACK_IMPORTED_MODULE_26__.CollapseToggle,
              {
                isCollapsed: !showErrorHandling,
                onToggle: (collapsed) => setShowErrorHandling(!collapsed),
                text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
                  "alerting.grafana-evaluation-behavior-step.text-configure-no-data-and-error-handling",
                  "Configure no data and error handling"
                )
              }
            ),
            showErrorHandling && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NeedHelpInfoForConfigureNoDataError, {}),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
                {
                  htmlFor: "no-data-state-input",
                  label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.alert.state-no-data", "Alert state if no data or all values are null"),
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    react_hook_form__WEBPACK_IMPORTED_MODULE_4__.Controller,
                    {
                      render: ({ field: { onChange, ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _GrafanaAlertStatePicker__WEBPACK_IMPORTED_MODULE_30__.GrafanaAlertStatePicker,
                        {
                          ...field,
                          inputId: "no-data-state-input",
                          width: 42,
                          includeNoData: true,
                          includeError: false,
                          onChange: (value) => onChange(value?.value)
                        }
                      ),
                      name: "noDataState"
                    }
                  )
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
                {
                  htmlFor: "exec-err-state-input",
                  label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.alert.state-error-timeout", "Alert state if execution error or timeout"),
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    react_hook_form__WEBPACK_IMPORTED_MODULE_4__.Controller,
                    {
                      render: ({ field: { onChange, ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _GrafanaAlertStatePicker__WEBPACK_IMPORTED_MODULE_30__.GrafanaAlertStatePicker,
                        {
                          ...field,
                          inputId: "exec-err-state-input",
                          width: 42,
                          includeNoData: false,
                          includeError: true,
                          onChange: (value) => onChange(value?.value)
                        }
                      ),
                      name: "execErrState"
                    }
                  )
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
                {
                  label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.alert.missing-series-resolve", "Missing series evaluations to resolve"),
                  description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
                    "alerting.alert.description-missing-series-evaluations",
                    "The number of consecutive evaluation intervals a dimension must be missing before the alert instance becomes stale, and is then automatically resolved and evicted. Defaults to 2 if empty."
                  ),
                  invalid: !!errors.missingSeriesEvalsToResolve?.message,
                  error: errors.missingSeriesEvalsToResolve?.message,
                  className: styles.inlineField,
                  htmlFor: "missing-series-resolve",
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { direction: "row", gap: 0.5, alignItems: "center", children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input,
                      {
                        placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
                          "alerting.grafana-evaluation-behavior-step.missing-series-resolve-placeholder",
                          "Default: 2"
                        ),
                        id: "missing-series-resolve",
                        ...register("missingSeriesEvalsToResolve", {
                          pattern: {
                            value: /^\d+$/,
                            message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
                              "alerting.grafana-evaluation-behavior-step.message.must-be-a-positive-integer",
                              "Must be a positive integer."
                            )
                          }
                        }),
                        width: 21
                      }
                    ),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _NeedHelpInfo__WEBPACK_IMPORTED_MODULE_31__.NeedHelpInfo,
                      {
                        contentText: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
                          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
                            "alerting.alert-missing-evaluations-to-stale.help-info.text1",
                            "An alert instance is considered stale if the alert rule query returns data, but the specific dimension (or series) for that alert instance is missing for several consecutive evaluation intervals."
                          ) }),
                          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
                            "alerting.alert-missing-evaluations-to-stale.help-info.text2",
                            "A stale alert instance is resolved and then evicted."
                          ) }),
                          (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
                            "alerting.alert-missing-evaluations-to-stale.help-info.text3",
                            "This setting defines how many consecutive evaluation intervals must pass without data before an alert instance is considered stale. Defaults to 2 if empty."
                          )
                        ] }),
                        externalLink: "https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/stale-alert-instances/",
                        linkText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
                          "alerting.alert-missing-evaluations-to-stale.help-info.link-text",
                          `Read more about stale alert instances`
                        ),
                        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.alert-missing-evaluations-to-stale.help-info.title", "Stale alert instances")
                      }
                    )
                  ] })
                }
              )
            ] })
          ] })
        ]
      }
    )
  );
}
function EvaluationGroupCreationModal({
  onClose,
  onCreate,
  groupfoldersForGrafana
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_20__.useStyles2)(getStyles);
  const { watch } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
  const evaluateEveryId = "eval-every-input";
  const evaluationGroupNameId = "new-eval-group-name";
  const [groupName, folderName, type] = watch(["group", "folder.title", "type"]);
  const isGrafanaRecordingRule = type ? (0,_utils_rules__WEBPACK_IMPORTED_MODULE_24__.isGrafanaRecordingRuleByType)(type) : false;
  const formAPI = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
    defaultValues: { group: "", evaluateEvery: _rule_editor_formDefaults__WEBPACK_IMPORTED_MODULE_23__.DEFAULT_GROUP_EVALUATION_INTERVAL },
    mode: "onChange",
    shouldFocusError: true
  });
  const { register, handleSubmit, formState, setValue, getValues, watch: watchGroupFormValues } = formAPI;
  const evaluationInterval = watchGroupFormValues("evaluateEvery");
  const groupRules = (groupfoldersForGrafana && groupfoldersForGrafana[folderName]?.find((g) => g.name === groupName)?.rules) ?? [];
  const onSubmit = () => {
    onCreate(getValues("group"), getValues("evaluateEvery"));
  };
  const onCancel = () => {
    onClose();
  };
  const setEvaluationInterval = (interval) => {
    setValue("evaluateEvery", interval, { shouldValidate: true });
  };
  const modalTitle = isGrafanaRecordingRule ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
    "alerting.folderAndGroup.evaluation.modal.text.recording",
    "Create a new evaluation group to use for this recording rule."
  ) : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
    "alerting.folderAndGroup.evaluation.modal.text.alerting",
    "Create a new evaluation group to use for this alert rule."
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Modal,
    {
      className: styles.modal,
      isOpen: true,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.evaluation-group-creation-modal.title-new-evaluation-group", "New evaluation group"),
      onDismiss: onCancel,
      onClickBackdrop: onCancel,
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.modalTitle, children: modalTitle }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_4__.FormProvider, { ...formAPI, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit(() => onSubmit()), children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
            {
              label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Label,
                {
                  htmlFor: evaluationGroupNameId,
                  description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
                    "alerting.evaluation-group-creation-modal.description-group-name",
                    "A group evaluates all its rules over the same evaluation interval."
                  ),
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.rule-form.evaluation.group-name", children: "Evaluation group name" })
                }
              ),
              error: formState.errors.group?.message,
              invalid: Boolean(formState.errors.group),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input,
                {
                  "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.components.AlertRules.newEvaluationGroupName,
                  className: styles.formInput,
                  autoFocus: true,
                  id: evaluationGroupNameId,
                  placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.evaluation-group-creation-modal.placeholder-enter-a-name", "Enter a name"),
                  ...register("group", {
                    required: {
                      value: true,
                      message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.evaluation-group-creation-modal.message.required", "Required.")
                    }
                  })
                }
              )
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
            {
              error: formState.errors.evaluateEvery?.message,
              label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Label,
                {
                  htmlFor: evaluateEveryId,
                  description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
                    "alerting.evaluation-group-creation-modal.description-often-rules-group-evaluated",
                    "How often all rules in the group are evaluated."
                  ),
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.rule-form.evaluation.group.interval", children: "Evaluation interval" })
                }
              ),
              invalid: Boolean(formState.errors.evaluateEvery),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input,
                {
                  "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.components.AlertRules.newEvaluationGroupInterval,
                  className: styles.formInput,
                  id: evaluateEveryId,
                  placeholder: _rule_editor_formDefaults__WEBPACK_IMPORTED_MODULE_23__.DEFAULT_GROUP_EVALUATION_INTERVAL,
                  ...register(
                    "evaluateEvery",
                    (0,_group_details_validation__WEBPACK_IMPORTED_MODULE_21__.evaluateEveryValidationOptions)(groupRules)
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_EvaluationGroupQuickPick__WEBPACK_IMPORTED_MODULE_29__.EvaluationGroupQuickPick, { currentInterval: evaluationInterval, onSelect: setEvaluationInterval }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Modal.ButtonRow, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button, { variant: "secondary", type: "button", onClick: onCancel, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.rule-form.evaluation.group.cancel", children: "Cancel" }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button,
              {
                type: "submit",
                disabled: !formState.isValid,
                "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.components.AlertRules.newEvaluationGroupCreate,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.rule-form.evaluation.group.create", children: "Create" })
              }
            )
          ] })
        ] }) })
      ]
    }
  );
}
function ForInput({ evaluateEvery }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_20__.useStyles2)(getStyles);
  const {
    register,
    formState: { errors },
    setValue,
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
  const evaluateForId = "eval-for-input";
  const currentPendingPeriod = watch("evaluateFor");
  const setPendingPeriod = (pendingPeriod) => {
    setValue("evaluateFor", pendingPeriod);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { direction: "column", "justify-content": "flex-start", "align-items": "flex-start", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
      {
        label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Label,
          {
            htmlFor: evaluateForId,
            description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
              "alerting.for-input.description-pending",
              'Period during which the threshold condition must be met to trigger an alert. Selecting "None" triggers the alert immediately once the condition is met.'
            ),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.rule-form.evaluation-behaviour.pending-period", children: "Pending period" })
          }
        ),
        className: styles.inlineField,
        error: errors.evaluateFor?.message,
        invalid: Boolean(errors.evaluateFor?.message) ? true : void 0,
        validationMessageHorizontalOverflow: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input, { id: evaluateForId, width: 8, ...register("evaluateFor", forValidationOptions(evaluateEvery)) })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _DurationQuickPick__WEBPACK_IMPORTED_MODULE_28__.DurationQuickPick,
      {
        selectedDuration: currentPendingPeriod,
        groupEvaluationInterval: evaluateEvery,
        onSelect: setPendingPeriod
      }
    )
  ] });
}
function KeepFiringFor({ evaluateEvery }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_20__.useStyles2)(getStyles);
  const {
    register,
    formState: { errors },
    setValue,
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
  const currentKeepFiringFor = watch("keepFiringFor");
  const keepFiringForId = "keep-firing-for-input";
  const setKeepFiringFor = (keepFiringFor) => {
    setValue("keepFiringFor", keepFiringFor);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { direction: "column", "justify-content": "flex-start", "align-items": "flex-start", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
      {
        label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Label,
          {
            htmlFor: keepFiringForId,
            description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
              "alerting.rule-form.evaluation-behaviour.keep-firing-for.label-description",
              'Period during which the alert will continue to show up as firing even though the threshold condition is no longer breached. Selecting "None" means the alert will be back to normal immediately.'
            ),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.rule-form.evaluation-behaviour.keep-firing-for.label-text", children: "Keep firing for" })
          }
        ),
        className: styles.inlineField,
        error: errors.keepFiringFor?.message,
        invalid: Boolean(errors.keepFiringFor?.message) ? true : void 0,
        validationMessageHorizontalOverflow: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input, { id: keepFiringForId, width: 8, ...register("keepFiringFor") })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _DurationQuickPick__WEBPACK_IMPORTED_MODULE_28__.DurationQuickPick,
      {
        selectedDuration: currentKeepFiringFor,
        groupEvaluationInterval: evaluateEvery,
        onSelect: setKeepFiringFor
      }
    )
  ] });
}
function NeedHelpInfoForConfigureNoDataError() {
  const docsLink = "https://grafana.com/docs/grafana/latest/alerting/alerting-rules/create-grafana-managed-rule/#configure-no-data-and-error-handling";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { direction: "row", gap: 0.5, alignItems: "center", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Text, { variant: "bodySmall", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.rule-form.evaluation-behaviour.info-help.text", children: "Define the alert behavior when the evaluation fails or the query returns no data." }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _NeedHelpInfo__WEBPACK_IMPORTED_MODULE_31__.NeedHelpInfo,
      {
        contentText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
          "alerting.rule-form.evaluation-behaviour.info-help.content",
          "These settings can help mitigate temporary data source issues, preventing alerts from unintentionally firing due to lack of data, errors, or timeouts."
        ),
        externalLink: docsLink,
        linkText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.rule-form.evaluation-behaviour.info-help.link-text", `Read more about this option`),
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
          "alerting.rule-form.evaluation-behaviour.info-help.link-title",
          "Configure no data and error handling"
        )
      }
    )
  ] });
}
function getDescription(isGrafanaRecordingRule) {
  const docsLink = "https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rules/rule-evaluation/";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { direction: "row", gap: 0.5, alignItems: "center", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Text, { variant: "bodySmall", color: "secondary", children: isGrafanaRecordingRule ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.alert-recording-rule-form.evaluation-behaviour.description.text", children: "Define how the recording rule is evaluated." }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.rule-form.evaluation-behaviour.description.text", children: "Define how the alert rule is evaluated." }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _NeedHelpInfo__WEBPACK_IMPORTED_MODULE_31__.NeedHelpInfo,
      {
        contentText: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.rule-form.evaluation-behaviour-description1", children: "Evaluation groups are containers for evaluating alert and recording rules." }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.rule-form.evaluation-behaviour-description2", children: "An evaluation group defines an evaluation interval - how often a rule is evaluated. Alert rules within the same evaluation group are evaluated over the same evaluation interval." }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.rule-form.evaluation-behaviour-description3", children: "Pending period specifies how long the threshold condition must be met before the alert starts firing. This option helps prevent alerts from being triggered by temporary issues." }) })
        ] }),
        externalLink: docsLink,
        linkText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
          "alerting.rule-form.evaluation-behaviour.info-help2.link-text",
          `Read about evaluation and alert states`
        ),
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.rule-form.evaluation-behaviour.info-help2.link-title", "Alert rule evaluation")
      }
    )
  ] });
}
const getStyles = (theme) => ({
  inlineField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: 0
  }),
  evaluationContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.secondary,
    maxWidth: `${theme.breakpoints.values.sm}px`,
    fontSize: theme.typography.size.sm
  }),
  infoIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginLeft: "10px"
  }),
  marginTop: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: theme.spacing(1)
  }),
  switchLabel: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.primary,
    cursor: "pointer",
    fontSize: theme.typography.bodySmall.fontSize
  }),
  formInput: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    flexGrow: 1
  }),
  modal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: `${theme.breakpoints.values.sm}px`
  }),
  modalTitle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing(2)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/GrafanaFolderAndLabelsStep.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrafanaFolderAndLabelsStep: () => (/* binding */ GrafanaFolderAndLabelsStep)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");
/* harmony import */ var _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/api/featureDiscoveryApi.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _FolderSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/FolderSelector.tsx");
/* harmony import */ var _NeedHelpInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/NeedHelpInfo.tsx");
/* harmony import */ var _RuleEditorSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx");
/* harmony import */ var _labels_LabelsEditorModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/labels/LabelsEditorModal.tsx");
/* harmony import */ var _labels_LabelsFieldInForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/labels/LabelsFieldInForm.tsx");














const { usePrefetch } = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_6__.alertRuleApi;
function GrafanaFolderAndLabelsStep() {
  const { setValue, getValues } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const [showLabelsEditor, setShowLabelsEditor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const prefechRulerRules = usePrefetch("rulerRules");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    prefechRulerRules({ rulerConfig: _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_7__.GRAFANA_RULER_CONFIG });
  }, [prefechRulerRules]);
  function onCloseLabelsEditor(labelsToUpdate) {
    if (labelsToUpdate) {
      setValue("labels", labelsToUpdate);
    }
    setShowLabelsEditor(false);
  }
  function SectionDescription() {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "row", gap: 0.5, alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "bodySmall", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.rule-form.folder-and-labels", children: "Organize your alert rule with a folder and set of labels." }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _NeedHelpInfo__WEBPACK_IMPORTED_MODULE_10__.NeedHelpInfo,
        {
          contentText: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
              "alerting.rule-form.folders.help-info",
              "Folders are used for storing alert rules. You can extend the access provided by a role to alert rules and assign permissions to individual folders."
            ) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
              "alerting.rule-form.labels.help-info",
              "Labels are used to differentiate an alert from all other alerts.You can use them for searching, silencing, and routing notifications."
            ) })
          ] })
        }
      )
    ] });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _RuleEditorSection__WEBPACK_IMPORTED_MODULE_11__.RuleEditorSection,
    {
      stepNo: 3,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.grafana-folder-and-labels-step.title-add-folder-and-labels", "Add folder and labels"),
      description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SectionDescription, {}),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", "justify-content": "flex-start", "align-items": "flex-start", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FolderSelector__WEBPACK_IMPORTED_MODULE_9__.FolderSelector, {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_labels_LabelsFieldInForm__WEBPACK_IMPORTED_MODULE_13__.LabelsFieldInForm, { onEditClick: () => setShowLabelsEditor(true) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _labels_LabelsEditorModal__WEBPACK_IMPORTED_MODULE_12__.LabelsEditorModal,
          {
            isOpen: showLabelsEditor,
            onClose: onCloseLabelsEditor,
            dataSourceName: _utils_datasource__WEBPACK_IMPORTED_MODULE_8__.GRAFANA_RULES_SOURCE_NAME,
            initialLabels: getValues("labels")
          }
        )
      ] })
    }
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/GroupAndNamespaceFields.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupAndNamespaceFields: () => (/* binding */ GroupAndNamespaceFields)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _useAlertRuleSuggestions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/useAlertRuleSuggestions.tsx");








const GroupAndNamespaceFields = ({ rulesSourceName }) => {
  const {
    control,
    watch,
    formState: { errors },
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyle);
  const { namespaceGroups, isLoading } = (0,_useAlertRuleSuggestions__WEBPACK_IMPORTED_MODULE_8__.useGetNameSpacesByDatasourceName)(rulesSourceName);
  const namespace = watch("namespace");
  const namespaceOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => Array.from(namespaceGroups.keys()).map((namespace2) => ({
      label: namespace2,
      value: namespace2
    })),
    [namespaceGroups]
  );
  const groupOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => namespace && namespaceGroups.get(namespace)?.map((group) => ({ label: group, value: group })) || [],
    [namespace, namespaceGroups]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: style.flexRow, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field,
      {
        "data-testid": "namespace-picker",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.group-and-namespace-fields.namespace-picker-label-namespace", "Namespace"),
        description: "Type to search for an existing namespace or create a new one",
        error: errors.namespace?.message,
        invalid: !!errors.namespace?.message,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
          {
            render: ({ field: { onChange, ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.VirtualizedSelect,
              {
                ...field,
                allowCustomValue: true,
                className: style.input,
                onChange: (value) => {
                  setValue("group", "");
                  onChange(value.value);
                },
                options: namespaceOptions,
                width: 42,
                isLoading,
                disabled: isLoading
              }
            ),
            name: "namespace",
            control,
            rules: {
              required: { value: true, message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.group-and-namespace-fields.message.required", "Required.") }
            }
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field,
      {
        "data-testid": "group-picker",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.group-and-namespace-fields.group-picker-label-group", "Group"),
        description: "Type to search for an existing group or create a new one",
        error: errors.group?.message,
        invalid: !!errors.group?.message,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
          {
            render: ({ field: { ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.VirtualizedSelect,
              {
                ...field,
                allowCustomValue: true,
                options: groupOptions,
                width: 42,
                onChange: (value) => {
                  setValue("group", value.value ?? "");
                },
                className: style.input,
                isLoading,
                disabled: isLoading
              }
            ),
            name: "group",
            control,
            rules: {
              required: { value: true, message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.group-and-namespace-fields.message.required", "Required.") }
            }
          }
        )
      }
    )
  ] });
};
const getStyle = (theme) => ({
  flexRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    "& > * + *": {
      marginLeft: theme.spacing(3)
    }
  }),
  input: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "330px !important"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/NeedHelpInfo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NeedHelpInfo: () => (/* binding */ NeedHelpInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Toggletip/Toggletip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





function NeedHelpInfo({ contentText, externalLink, linkText, title = "Need help?" }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Toggletip,
    {
      content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.mutedText, children: contentText }),
      title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { gap: 0.5, direction: "row", alignItems: "center", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "question-circle" }),
        title
      ] }),
      footer: externalLink ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: externalLink, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "row", gap: 0.5, alignItems: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { color: "link", children: [
        linkText,
        " ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { size: "sm", name: "external-link-alt" })
      ] }) }) }) : void 0,
      closeButton: true,
      placement: "bottom-start",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.helpInfo, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "row", alignItems: "center", gap: 0.5, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "question-circle", size: "sm" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { variant: "bodySmall", color: "primary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.need-help-info.need-help", children: "Need help?" }) })
      ] }) })
    }
  );
}
const getStyles = (theme) => ({
  mutedText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.secondary,
    fontSize: theme.typography.size.sm
  }),
  helpInfo: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    cursor: "pointer",
    textDecoration: "underline"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/NotificationsStep.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsStep: () => (/* binding */ NotificationsStep),
/* harmony export */   RoutingOptionDescription: () => (/* binding */ RoutingOptionDescription)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/api/alertmanagerApi.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _NeedHelpInfo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/NeedHelpInfo.tsx");
/* harmony import */ var _RuleEditorSection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx");
/* harmony import */ var _alert_rule_form_simplifiedRouting_SimplifiedRouting__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/alert-rule-form/simplifiedRouting/SimplifiedRouting.tsx");
/* harmony import */ var _labels_LabelsEditorModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/labels/LabelsEditorModal.tsx");
/* harmony import */ var _labels_LabelsFieldInForm__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/labels/LabelsFieldInForm.tsx");
/* harmony import */ var _notificaton_preview_NotificationPreview__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/notificaton-preview/NotificationPreview.tsx");



















var RoutingOptions = /* @__PURE__ */ ((RoutingOptions2) => {
  RoutingOptions2["NotificationPolicy"] = "notification policy";
  RoutingOptions2["ContactPoint"] = "contact point";
  return RoutingOptions2;
})(RoutingOptions || {});
function useHasInternalAlertmanagerEnabled() {
  const { useGetGrafanaAlertingConfigurationStatusQuery } = _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_12__.alertmanagerApi;
  const { currentData: amChoiceStatus } = useGetGrafanaAlertingConfigurationStatusQuery(void 0);
  return amChoiceStatus?.alertmanagersChoice === app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_11__.AlertmanagerChoice.Internal || amChoiceStatus?.alertmanagersChoice === app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_11__.AlertmanagerChoice.All;
}
const NotificationsStep = ({ alertUid }) => {
  const { watch, getValues, setValue } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useStyles2)(getStyles);
  const [type, manualRouting] = watch(["type", "manualRouting"]);
  const [showLabelsEditor, setShowLabelsEditor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const dataSourceName = watch("dataSourceName") ?? _utils_datasource__WEBPACK_IMPORTED_MODULE_14__.GRAFANA_RULES_SOURCE_NAME;
  const isGrafanaManaged = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_15__.isGrafanaManagedRuleByType)(type);
  const simplifiedModeInNotificationsStepEnabled = _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.featureToggles.alertingNotificationsStepMode ?? false;
  const shouldRenderpreview = type === _types_rule_form__WEBPACK_IMPORTED_MODULE_13__.RuleFormType.grafana;
  const hasInternalAlertmanagerEnabled = useHasInternalAlertmanagerEnabled();
  const shouldAllowSimplifiedRouting = type === _types_rule_form__WEBPACK_IMPORTED_MODULE_13__.RuleFormType.grafana && hasInternalAlertmanagerEnabled;
  function onCloseLabelsEditor(labelsToUpdate) {
    if (labelsToUpdate) {
      setValue("labels", labelsToUpdate);
    }
    setShowLabelsEditor(false);
  }
  if ((0,_utils_rules__WEBPACK_IMPORTED_MODULE_15__.isGrafanaRecordingRuleByType)(type)) {
    return null;
  }
  const step = !isGrafanaManaged ? 4 : 5;
  const switchMode = isGrafanaManaged && simplifiedModeInNotificationsStepEnabled ? {
    isAdvancedMode: !manualRouting,
    setAdvancedMode: (isAdvanced) => {
      setValue("editorSettings.simplifiedNotificationEditor", !isAdvanced);
      setValue("manualRouting", !isAdvanced);
    }
  } : void 0;
  const title = (() => {
    if ((0,_utils_rules__WEBPACK_IMPORTED_MODULE_15__.isRecordingRuleByType)(type)) {
      return "Add labels";
    }
    if (isGrafanaManaged) {
      return "Configure notifications";
    }
    return "Configure labels and notifications";
  })();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _RuleEditorSection__WEBPACK_IMPORTED_MODULE_17__.RuleEditorSection,
    {
      stepNo: step,
      title,
      description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "row", gap: 0.5, alignItems: "center", children: (0,_utils_rules__WEBPACK_IMPORTED_MODULE_15__.isRecordingRuleByType)(type) ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { variant: "bodySmall", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.notifications-step.labels-better-manage-recording-rules", children: "Add labels to help you better manage your recording rules." }) }) : shouldAllowSimplifiedRouting && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { variant: "bodySmall", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.notifications-step.recipient-notification-fires", children: "Select who should receive a notification when an alert rule fires." }) }) }),
      switchMode,
      fullWidth: true,
      children: [
        !isGrafanaManaged && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_labels_LabelsFieldInForm__WEBPACK_IMPORTED_MODULE_20__.LabelsFieldInForm, { onEditClick: () => setShowLabelsEditor(true) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _labels_LabelsEditorModal__WEBPACK_IMPORTED_MODULE_19__.LabelsEditorModal,
            {
              isOpen: showLabelsEditor,
              onClose: onCloseLabelsEditor,
              dataSourceName,
              initialLabels: getValues("labels")
            }
          )
        ] }),
        shouldAllowSimplifiedRouting && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.configureNotifications, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { element: "h5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.notifications-step.recipient", children: "Recipient" }) }) }),
        shouldAllowSimplifiedRouting && simplifiedModeInNotificationsStepEnabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ManualAndAutomaticRoutingSimplified, { alertUid }),
        shouldAllowSimplifiedRouting && !simplifiedModeInNotificationsStepEnabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ManualAndAutomaticRouting, { alertUid }),
        !shouldAllowSimplifiedRouting && shouldRenderpreview && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AutomaticRooting, { alertUid })
      ]
    }
  );
};
function ManualAndAutomaticRouting({ alertUid }) {
  const { watch, setValue } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useStyles2)(getStyles);
  const [manualRouting] = watch(["manualRouting"]);
  const routingOptions = [
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "alerting.manual-and-automatic-routing.routing-options.label.select-contact-point",
        "Select contact point"
      ),
      value: "contact point" /* ContactPoint */
    },
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "alerting.manual-and-automatic-routing.routing-options.label.use-notification-policy",
        "Use notification policy"
      ),
      value: "notification policy" /* NotificationPolicy */
    }
  ];
  const onRoutingOptionChange = (option) => {
    setValue("manualRouting", option === "contact point" /* ContactPoint */);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.RadioButtonGroup,
      {
        "data-testid": manualRouting ? "routing-options-contact-point" : "routing-options-notification-policy",
        options: routingOptions,
        value: manualRouting ? "contact point" /* ContactPoint */ : "notification policy" /* NotificationPolicy */,
        onChange: onRoutingOptionChange,
        className: styles.routingOptions
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RoutingOptionDescription, { manualRouting }),
    manualRouting ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_alert_rule_form_simplifiedRouting_SimplifiedRouting__WEBPACK_IMPORTED_MODULE_18__.SimplifiedRouting, {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AutomaticRooting, { alertUid })
  ] });
}
function ManualAndAutomaticRoutingSimplified({ alertUid }) {
  const { watch } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const [manualRouting] = watch(["manualRouting"]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RoutingOptionDescription, { manualRouting }),
    manualRouting ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_alert_rule_form_simplifiedRouting_SimplifiedRouting__WEBPACK_IMPORTED_MODULE_18__.SimplifiedRouting, {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AutomaticRooting, { alertUid })
  ] });
}
function AutomaticRooting({ alertUid }) {
  const { watch } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const [labels, queries, condition, folder, alertName] = watch([
    "labels",
    "queries",
    "condition",
    "folder",
    "name",
    "manualRouting"
  ]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _notificaton_preview_NotificationPreview__WEBPACK_IMPORTED_MODULE_21__.NotificationPreview,
    {
      alertQueries: queries,
      customLabels: labels,
      condition,
      folder,
      alertName,
      alertUid
    }
  );
}
function NeedHelpInfoForNotificationPolicy() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _NeedHelpInfo__WEBPACK_IMPORTED_MODULE_16__.NeedHelpInfo,
    {
      contentText: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { gap: 1, direction: "column", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 0, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.need-help-info-for-notification-policy.notification-policies", children: "Firing alert instances are routed to notification policies based on matching labels. The default notification policy matches all alert instances." }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 0, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.need-help-info-for-notification-policy.custom-labels", children: "Custom labels change the way your notifications are routed. First, add labels to your alert rule and then connect them to your notification policy by adding label matchers." }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TextLink,
            {
              href: `https://grafana.com/docs/grafana/latest/alerting/fundamentals/notifications/notification-policies/`,
              external: true,
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.need-help-info-for-notification-policy.read-more", children: "Read about notification policies." })
            }
          )
        ] })
      ] }),
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.need-help-info-for-notification-policy.title-notification-routing", "Notification routing")
    }
  );
}
function NeedHelpInfoForContactpoint() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _NeedHelpInfo__WEBPACK_IMPORTED_MODULE_16__.NeedHelpInfo,
    {
      contentText: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.need-help-info-for-contactpoint.select-contact-point", children: "Select a contact point to notify all recipients in it." }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.need-help-info-for-contactpoint.customize-notifications", children: "Muting, grouping, and timings options allow you to customize how notifications are sent." }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.need-help-info-for-contactpoint.notification-policies", children: [
          "Alternatively, toggle the ",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { children: "Advanced options" }),
          " button to route notifications using notification policies for greater flexibility."
        ] })
      ] }),
      externalLink: "https://grafana.com/docs/grafana/latest/alerting/fundamentals/notifications/",
      linkText: "Read more about notifications",
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "alerting.need-help-info-for-contactpoint.title-notify-by-selecting-a-contact-point",
        "Notify by selecting a contact point"
      )
    }
  );
}
const RoutingOptionDescription = ({ manualRouting }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { alignItems: "center", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { variant: "bodySmall", color: "secondary", children: manualRouting ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
      "alerting.routing-option-description.manual",
      "Notifications for firing alerts are routed to a selected contact point."
    ) : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
      "alerting.routing-option-description.matching-labels",
      "Notifications for firing alerts are routed to contact points based on matching labels and the notification policy tree."
    ) }),
    manualRouting ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NeedHelpInfoForContactpoint, {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NeedHelpInfoForNotificationPolicy, {})
  ] });
};
const getStyles = (theme) => ({
  routingOptions: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "fit-content"
  }),
  configureNotifications: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(2)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/PreviewRule.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreviewRule: () => (/* binding */ PreviewRule),
/* harmony export */   usePreview: () => (/* binding */ usePreview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/datetime/formatter.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-runtime/src/services/dataSourceSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _api_preview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/api/preview.ts");
/* harmony import */ var _hooks_useAlertQueriesStatus__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertQueriesStatus.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _PreviewRuleResult__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/PreviewRuleResult.tsx");
















const fields = ["type", "dataSourceName", "condition", "queries", "expression"];
function PreviewRule() {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.useStyles2)(getStyles);
  const [preview, onPreview] = usePreview();
  const { watch } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const [type, condition, queries] = watch(["type", "condition", "queries"]);
  const { allDataSourcesAvailable } = (0,_hooks_useAlertQueriesStatus__WEBPACK_IMPORTED_MODULE_15__.useAlertQueriesStatus)(queries);
  if (!type || (0,_utils_rules__WEBPACK_IMPORTED_MODULE_17__.isDataSourceManagedRuleByType)(type)) {
    return null;
  }
  const isPreviewAvailable = Boolean(condition) && allDataSourcesAvailable;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { children: [
      allDataSourcesAvailable && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Button, { disabled: !isPreviewAvailable, type: "button", variant: "primary", onClick: onPreview, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.Trans, { i18nKey: "alerting.preview-rule.preview-alerts", children: "Preview alerts" }) }),
      !allDataSourcesAvailable && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Alert,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("alerting.preview-rule.title-preview-is-not-available", "Preview is not available"),
          severity: "warning",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.Trans, { i18nKey: "alerting.preview-rule.body-preview-is-not-available", children: "Cannot display the query preview. Some of the data sources used in the queries are not available." })
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PreviewRuleResult__WEBPACK_IMPORTED_MODULE_18__.PreviewRuleResult, { preview })
  ] });
}
function usePreview() {
  const [preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const { getValues } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const isMounted = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const onPreview = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    const values = getValues(fields);
    const request = createPreviewRequest(values);
    (0,_api_preview__WEBPACK_IMPORTED_MODULE_14__.previewAlertRule)(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeWhile)((response) => !isCompleted(response), true)).subscribe((response) => {
      if (!isMounted()) {
        return;
      }
      setPreview(response);
    });
  }, [getValues, isMounted]);
  return [preview, onPreview];
}
function createPreviewRequest(values) {
  const [type, dataSourceName, condition, queries, expression] = values;
  const dsSettings = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_9__.getDataSourceSrv)().getInstanceSettings(dataSourceName);
  if (!dsSettings) {
    throw new Error(`Cannot find data source settings for ${dataSourceName}`);
  }
  switch (type) {
    case _types_rule_form__WEBPACK_IMPORTED_MODULE_16__.RuleFormType.cloudAlerting:
      return {
        dataSourceUid: dsSettings.uid,
        dataSourceName,
        expr: expression
      };
    case _types_rule_form__WEBPACK_IMPORTED_MODULE_16__.RuleFormType.grafana:
      return {
        grafana_condition: {
          condition,
          data: queries,
          now: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.dateTimeFormatISO)(Date.now())
        }
      };
    default:
      throw new Error(`Alert type ${type} not supported by preview.`);
  }
}
function isCompleted(response) {
  switch (response.data.state) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_7__.LoadingState.Done:
    case _grafana_data__WEBPACK_IMPORTED_MODULE_7__.LoadingState.Error:
      return true;
    default:
      return false;
  }
}
function getStyles(theme) {
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginTop: theme.spacing(2),
      maxWidth: `${theme.breakpoints.values.xxl}px`
    })
  };
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/PreviewRuleResult.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreviewRuleResult: () => (/* binding */ PreviewRuleResult)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/components/PanelRenderer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");










function PreviewRuleResult(props) {
  const { preview } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const fieldConfig = {
    defaults: {},
    overrides: [
      {
        matcher: { id: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldMatcherID.byName, options: "Info" },
        properties: [{ id: "custom.displayMode", value: _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.TableCellDisplayMode.JSONView }]
      }
    ]
  };
  if (!preview) {
    return null;
  }
  const { data, ruleType } = preview;
  if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_4__.LoadingState.Loading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.container, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.preview-rule-result.loading-preview", children: "Loading preview..." }) }) });
  }
  if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_4__.LoadingState.Error) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.container, children: data.error ? (0,_utils_redux__WEBPACK_IMPORTED_MODULE_10__.messageFromError)(data.error) : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.preview-rule-result.preview-failed", "Failed to preview alert rule") });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.preview-rule-result.preview-based-on-query-result", children: "Preview based on the result of running the query, for this moment." }),
    ruleType === _types_rule_form__WEBPACK_IMPORTED_MODULE_9__.RuleFormType.grafana && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.preview-rule-result.no-data-error-handling-not-applied", children: "Configuration for `no data` and `error handling` is not applied." }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.table, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__["default"], { children: ({ width, height }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: `${width}px`, height: `${height}px` }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.PanelRenderer,
      {
        title: "",
        width,
        height,
        pluginId: "table",
        data,
        fieldConfig
      }
    ) }) }) })
  ] });
}
function getStyles(theme) {
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      margin: `${theme.spacing(2)} 0`
    }),
    table: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flex: "1 1 auto",
      height: "135px",
      marginTop: theme.spacing(2),
      border: `1px solid ${theme.colors.border.medium}`,
      borderRadius: theme.shape.radius.default
    })
  };
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryEditor: () => (/* binding */ QueryEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _QueryRows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/QueryRows.tsx");





const QueryEditor = ({
  queries,
  expressions,
  panelData,
  onRunQueries,
  onChangeQueries,
  onDuplicateQuery,
  condition,
  onSetCondition
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.container, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _QueryRows__WEBPACK_IMPORTED_MODULE_3__.QueryRows,
    {
      data: panelData,
      queries,
      expressions,
      onRunQueries,
      onQueriesChange: onChangeQueries,
      onDuplicateQuery,
      condition,
      onSetCondition
    }
  ) });
};
const getStyles = (theme) => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    backgroundColor: theme.colors.background.primary,
    height: "100%"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/QueryOptions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryOptions: () => (/* binding */ QueryOptions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/time.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Toggletip/Toggletip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/DateTimePickers/RelativeTimeRangePicker/RelativeTimeRangePicker.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _TimeRangeLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/TimeRangeLabel.tsx");
/* harmony import */ var _QueryWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/QueryWrapper.tsx");









const QueryOptions = ({
  query,
  queryOptions,
  onChangeTimeRange,
  onChangeQueryOptions,
  index
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useStyles2)(getStyles);
  const [showOptions, setShowOptions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const separator = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: ", " });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Toggletip,
      {
        content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.queryOptions, children: [
          onChangeTimeRange && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineField, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.query-options.label-time-range", "Time Range"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.RelativeTimeRangePicker,
            {
              timeRange: query.relativeTimeRange ?? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getDefaultRelativeTimeRange)(),
              onChange: (range) => onChangeTimeRange(range, index)
            }
          ) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_QueryWrapper__WEBPACK_IMPORTED_MODULE_12__.MaxDataPointsOption, { options: queryOptions, onChange: (options) => onChangeQueryOptions(options, index) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_QueryWrapper__WEBPACK_IMPORTED_MODULE_12__.MinIntervalOption, { options: queryOptions, onChange: (options) => onChangeQueryOptions(options, index) })
        ] }),
        closeButton: true,
        placement: "bottom-start",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { type: "button", className: styles.actionLink, onClick: () => setShowOptions(!showOptions), children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.query-options.button-options", children: "Options" }),
          " ",
          showOptions ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "angle-right" }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "angle-down" })
        ] })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.staticValues, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TimeRangeLabel__WEBPACK_IMPORTED_MODULE_11__.TimeRangeLabel, { relativeTimeRange: query.relativeTimeRange ?? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getDefaultRelativeTimeRange)() }) }),
      queryOptions.maxDataPoints && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        separator,
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans,
          {
            i18nKey: "alerting.query-options.max-data-points",
            values: { maxDataPoints: queryOptions.maxDataPoints },
            children: [
              "MD = ",
              "{{maxDataPoints}}"
            ]
          }
        )
      ] }),
      queryOptions.minInterval && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        separator,
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.query-options.min-interval", values: { minInterval: queryOptions.minInterval }, children: [
          "Min. Interval = ",
          "{{minInterval}}"
        ] })
      ] })
    ] })
  ] });
};
const getStyles = (theme) => {
  const clearButton = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.clearButtonStyles)(theme);
  return {
    queryOptions: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      "> div": {
        justifyContent: "space-between"
      }
    }),
    staticValues: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.text.secondary,
      marginRight: theme.spacing(1)
    }),
    actionLink: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)(clearButton, {
      color: theme.colors.text.link,
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline"
      }
    })
  };
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/QueryRows.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryRows: () => (/* binding */ QueryRows)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@hello-pangea/dnd/dist/dnd.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/datetime/rangeutil.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-runtime/src/services/dataSourceSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var app_core_components_QueryOperationRow_QueryOperationRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/components/QueryOperationRow/QueryOperationRow.tsx");
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/expressions/guards.ts");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var _utils_rule_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-form.ts");
/* harmony import */ var _QueryWrapper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/QueryWrapper.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/util.ts");















class QueryRows extends react__WEBPACK_IMPORTED_MODULE_3__.PureComponent {
  constructor(props) {
    super(props);
    this.onRemoveQuery = (query) => {
      const { queries, onQueriesChange } = this.props;
      onQueriesChange(queries.filter((q) => q.refId !== query.refId));
    };
    this.onChangeTimeRange = (timeRange, index) => {
      const { queries, onQueriesChange } = this.props;
      onQueriesChange(
        queries.map((item, itemIndex) => {
          if (itemIndex !== index) {
            return item;
          }
          return {
            ...item,
            relativeTimeRange: timeRange
          };
        })
      );
    };
    this.onChangeQueryOptions = (options, index) => {
      const { queries, onQueriesChange } = this.props;
      onQueriesChange(
        queries.map((item, itemIndex) => {
          if (itemIndex !== index) {
            return item;
          }
          return {
            ...item,
            model: {
              ...item.model,
              maxDataPoints: options.maxDataPoints,
              intervalMs: options.minInterval ? _grafana_data__WEBPACK_IMPORTED_MODULE_5__.intervalToMs(options.minInterval) : void 0
            }
          };
        })
      );
    };
    this.onChangeDataSource = (settings, index) => {
      const { queries, onQueriesChange } = this.props;
      const updatedQueries = queries.map((item, itemIndex) => {
        if (itemIndex !== index) {
          return item;
        }
        const previousSettings = this.getDataSourceSettings(item);
        if (settings.type === previousSettings?.type) {
          return copyModel(item, settings);
        }
        return newModel(item, settings);
      });
      onQueriesChange(updatedQueries);
    };
    this.onChangeQuery = (query, index) => {
      const { queries, onQueriesChange } = this.props;
      onQueriesChange(
        queries.map((item, itemIndex) => {
          if (itemIndex !== index) {
            return item;
          }
          return {
            ...item,
            refId: query.refId,
            queryType: item.model.queryType ?? "",
            model: {
              ...item.model,
              ...query,
              datasource: query.datasource
            }
          };
        })
      );
    };
    this.onDragEnd = (result) => {
      const { queries, onQueriesChange } = this.props;
      if (!result || !result.destination) {
        return;
      }
      const startIndex = result.source.index;
      const endIndex = result.destination.index;
      if (startIndex === endIndex) {
        return;
      }
      const update = Array.from(queries);
      const [removed] = update.splice(startIndex, 1);
      update.splice(endIndex, 0, removed);
      onQueriesChange(update);
    };
    this.getDataSourceSettings = (query) => {
      return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.getDataSourceSrv)().getInstanceSettings(query.datasourceUid);
    };
  }
  render() {
    const { queries, expressions, condition } = this.props;
    const thresholdByRefId = (0,_util__WEBPACK_IMPORTED_MODULE_18__.getThresholdsForQueries)([...queries, ...expressions], condition);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_1__.DragDropContext, { onDragEnd: this.onDragEnd, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_1__.Droppable, { droppableId: "alerting-queries", direction: "vertical", children: (provided) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: provided.innerRef, ...provided.droppableProps, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { direction: "column", children: [
        queries.map((query, index) => {
          const isCondition = this.props.condition === query.refId;
          const data = this.props.data?.[query.refId] ?? {
            series: [],
            state: _grafana_data__WEBPACK_IMPORTED_MODULE_6__.LoadingState.NotStarted
          };
          const dsSettings = this.getDataSourceSettings(query);
          let error = void 0;
          if (data && isCondition) {
            error = (0,_util__WEBPACK_IMPORTED_MODULE_18__.errorFromCurrentCondition)(data);
          } else if (data) {
            error = (0,_util__WEBPACK_IMPORTED_MODULE_18__.errorFromPreviewData)(data);
          }
          if (!dsSettings) {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              DatasourceNotFound,
              {
                index,
                model: query.model,
                onUpdateDatasource: () => {
                  const defaultDataSource = (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_15__.getDatasourceSrv)().getInstanceSettings(null);
                  if (defaultDataSource) {
                    this.onChangeDataSource(defaultDataSource, index);
                  }
                },
                onRemoveQuery: () => {
                  this.onRemoveQuery(query);
                }
              },
              `${query.refId}-${index}`
            );
          }
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _QueryWrapper__WEBPACK_IMPORTED_MODULE_17__.QueryWrapper,
            {
              index,
              dsSettings,
              data,
              error,
              query,
              onChangeQuery: this.onChangeQuery,
              onRemoveQuery: this.onRemoveQuery,
              queries: [...queries, ...expressions],
              onChangeDataSource: this.onChangeDataSource,
              onDuplicateQuery: this.props.onDuplicateQuery,
              onChangeTimeRange: this.onChangeTimeRange,
              onChangeQueryOptions: this.onChangeQueryOptions,
              thresholds: thresholdByRefId[query.refId]?.config,
              thresholdsType: thresholdByRefId[query.refId]?.mode,
              onRunQueries: this.props.onRunQueries,
              condition: this.props.condition,
              onSetCondition: this.props.onSetCondition
            },
            query.refId
          );
        }),
        provided.placeholder
      ] }) });
    } }) });
  }
}
function copyModel(item, settings) {
  return {
    ...item,
    model: {
      ...(0,lodash__WEBPACK_IMPORTED_MODULE_2__.omit)(item.model, "datasource"),
      datasource: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.getDataSourceRef)(settings)
    },
    datasourceUid: settings.uid
  };
}
function newModel(item, settings) {
  const isExpression = (0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_14__.isExpressionQuery)(item);
  const isInstant = isExpression ? false : (0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_16__.getInstantFromDataQuery)(item);
  const newQuery = {
    refId: item.refId,
    relativeTimeRange: item.relativeTimeRange,
    queryType: "",
    datasourceUid: settings.uid,
    model: {
      refId: item.refId,
      hide: false,
      datasource: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.getDataSourceRef)(settings)
    }
  };
  if (isInstant && !(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_14__.isExpressionQuery)(item)) {
    newQuery.model.instant = isInstant;
  }
  return newQuery;
}
const DatasourceNotFound = ({ index, onUpdateDatasource, onRemoveQuery, model }) => {
  const refId = model.refId;
  const [showDetails, setShowDetails] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const toggleDetails = () => {
    setShowDetails((show) => !show);
  };
  const handleUpdateDatasource = () => {
    onUpdateDatasource();
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_QueryWrapper__WEBPACK_IMPORTED_MODULE_17__.EmptyQueryWrapper, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_QueryOperationRow_QueryOperationRow__WEBPACK_IMPORTED_MODULE_13__.QueryOperationRow, { title: refId, draggable: true, index, id: refId, isOpen: true, collapsable: false, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Card, { noMargin: true, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Card.Heading, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.datasource-not-found.this-datasource-has-been-removed", children: "This datasource has been removed" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Card.Description, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.datasource-not-found.card-description", children: "The datasource for this query was not found, it was either removed or is not installed correctly." }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Card.Figure, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Icon, { name: "question-circle" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Card.Actions, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button, { variant: "secondary", onClick: handleUpdateDatasource, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.datasource-not-found.update-datasource", children: "Update datasource" }) }, "update"),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button, { variant: "destructive", onClick: onRemoveQuery, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.datasource-not-found.remove-query", children: "Remove query" }) }, "remove")
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Card.SecondaryActions, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button,
        {
          onClick: toggleDetails,
          icon: showDetails ? "angle-up" : "angle-down",
          fill: "text",
          size: "sm",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.datasource-not-found.show-details", children: "Show details" })
        },
        "details"
      ) })
    ] }),
    showDetails && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: JSON.stringify(model, null, 2) }) }) })
  ] }) });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/QueryWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_MAX_DATA_POINTS: () => (/* binding */ DEFAULT_MAX_DATA_POINTS),
/* harmony export */   DEFAULT_MIN_INTERVAL: () => (/* binding */ DEFAULT_MIN_INTERVAL),
/* harmony export */   EmptyQueryWrapper: () => (/* binding */ EmptyQueryWrapper),
/* harmony export */   MaxDataPointsOption: () => (/* binding */ MaxDataPointsOption),
/* harmony export */   MinIntervalOption: () => (/* binding */ MinIntervalOption),
/* harmony export */   QueryWrapper: () => (/* binding */ QueryWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/datetime/rangeutil.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/types/app.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/types/time.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_alerting_unified_Analytics__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var app_features_query_components_QueryEditorRow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/query/components/QueryEditorRow.tsx");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
/* harmony import */ var _expressions_ExpressionStatusIndicator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/components/expressions/ExpressionStatusIndicator.tsx");
/* harmony import */ var _extensions_AlertingRuleQueryExtensionPoint__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/components/extensions/AlertingRuleQueryExtensionPoint.tsx");
/* harmony import */ var _QueryOptions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/QueryOptions.tsx");
/* harmony import */ var _VizWrapper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/VizWrapper.tsx");

















const DEFAULT_MAX_DATA_POINTS = 43200;
const DEFAULT_MIN_INTERVAL = "1s";
const QueryWrapper = ({
  data,
  error,
  dsSettings,
  index,
  onChangeDataSource,
  onChangeQuery,
  onChangeTimeRange,
  onRunQueries,
  onRemoveQuery,
  onDuplicateQuery,
  query,
  queries,
  thresholds,
  thresholdsType,
  onChangeThreshold,
  condition,
  onSetCondition,
  onChangeQueryOptions
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.useStyles2)(getStyles);
  const [dsInstance, setDsInstance] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
  const defaults = dsInstance?.getDefaultQuery ? dsInstance.getDefaultQuery(_grafana_data__WEBPACK_IMPORTED_MODULE_6__.CoreApp.UnifiedAlerting) : {};
  const { getValues } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
  const isSwitchModeEnabled = _grafana_runtime__WEBPACK_IMPORTED_MODULE_10__.config.featureToggles.alertingQueryAndExpressionsStepMode ?? false;
  const isAdvancedMode = isSwitchModeEnabled ? getValues("editorSettings.simplifiedQueryEditor") !== true : true;
  const queryWithDefaults = {
    ...defaults,
    ...(0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(query.model)
  };
  if (queryWithDefaults.datasource && queryWithDefaults.datasource?.uid !== query.datasourceUid) {
    (0,app_features_alerting_unified_Analytics__WEBPACK_IMPORTED_MODULE_17__.logInfo)("rule query datasource and datasourceUid mismatch", {
      queryModelDatasourceUid: queryWithDefaults.datasource?.uid || "",
      queryDatasourceUid: query.datasourceUid,
      datasourceType: query.model.datasource?.type || "unknown type"
    });
    if (typeof queryWithDefaults.datasource === "object" && Boolean(queryWithDefaults.datasource)) {
      queryWithDefaults.datasource.uid = query.datasourceUid;
    } else {
      queryWithDefaults.datasource = {};
      queryWithDefaults.datasource.uid = query.datasourceUid;
      queryWithDefaults.datasource.type = query.model.datasource?.type;
      queryWithDefaults.datasource.apiVersion = query.model.datasource?.apiVersion;
    }
  }
  function SelectingDataSourceTooltip() {
    const styles2 = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.useStyles2)(getStyles);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles2.dsTooltip, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Tooltip,
      {
        content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.Trans, { i18nKey: "alerting.selecting-data-source-tooltip.tooltip-content", children: "Not finding the data source you want? Some data sources are not supported for alerting. Click on the icon for more information." }),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Icon,
          {
            name: "info-circle",
            onClick: () => window.open(
              " https://grafana.com/docs/grafana/latest/alerting/fundamentals/data-source-alerting/",
              "_blank"
            )
          }
        )
      }
    ) });
  }
  function HeaderExtras({
    query: query2,
    error: error2,
    index: index2,
    isAdvancedMode: isAdvancedMode2 = true
  }) {
    const queryOptions = {
      maxDataPoints: query2.model.maxDataPoints,
      minInterval: query2.model.intervalMs ? (0,_utils_time__WEBPACK_IMPORTED_MODULE_19__.msToSingleUnitDuration)(query2.model.intervalMs) : void 0
    };
    const alertQueryOptions = {
      maxDataPoints: queryOptions.maxDataPoints,
      minInterval: queryOptions.minInterval
    };
    const isAlertCondition = condition === query2.refId;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { direction: "row", alignItems: "center", gap: 1, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectingDataSourceTooltip, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extensions_AlertingRuleQueryExtensionPoint__WEBPACK_IMPORTED_MODULE_21__.AlertingRuleQueryExtensionPoint, { query: Object.assign({}, query2.model), extensionsToShow: "queryless" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _QueryOptions__WEBPACK_IMPORTED_MODULE_22__.QueryOptions,
        {
          onChangeTimeRange,
          query: query2,
          queryOptions: alertQueryOptions,
          onChangeQueryOptions,
          index: index2
        }
      ),
      isAdvancedMode2 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _expressions_ExpressionStatusIndicator__WEBPACK_IMPORTED_MODULE_20__.ExpressionStatusIndicator,
        {
          onSetCondition: () => onSetCondition(query2.refId),
          isCondition: isAlertCondition
        }
      )
    ] });
  }
  const showVizualisation = data.state !== _grafana_data__WEBPACK_IMPORTED_MODULE_8__.LoadingState.NotStarted;
  const editorQueries = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(queries.map((query2) => query2.model));
  const range = _grafana_data__WEBPACK_IMPORTED_MODULE_5__.relativeToTimeRange(query.relativeTimeRange ?? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.getDefaultRelativeTimeRange)());
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { direction: "column", gap: 0.5, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.wrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      app_features_query_components_QueryEditorRow__WEBPACK_IMPORTED_MODULE_18__.QueryEditorRow,
      {
        hideRefId: !isAdvancedMode,
        hideActionButtons: !isAdvancedMode,
        collapsable: false,
        dataSource: dsSettings,
        onDataSourceLoaded: setDsInstance,
        onChangeDataSource: (settings) => onChangeDataSource(settings, index),
        id: query.refId,
        index,
        data,
        query: queryWithDefaults,
        onChange: (query2) => onChangeQuery(query2, index),
        onRemoveQuery,
        onAddQuery: () => onDuplicateQuery((0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(query)),
        onRunQuery: onRunQueries,
        queries: editorQueries,
        range,
        renderHeaderExtras: () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeaderExtras, { query, index, error, isAdvancedMode }),
        app: _grafana_data__WEBPACK_IMPORTED_MODULE_6__.CoreApp.UnifiedAlerting,
        hideHideQueryButton: true
      },
      query.refId
    ) }),
    showVizualisation && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VizWrapper__WEBPACK_IMPORTED_MODULE_23__.VizWrapper, { data, thresholds, thresholdsType })
  ] });
};
const EmptyQueryWrapper = ({ children }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.wrapper, children });
};
function MaxDataPointsOption({
  options,
  onChange
}) {
  const value = options.maxDataPoints ?? "";
  const onMaxDataPointsBlur = (event) => {
    const maxDataPointsNumber = parseInt(event.target.value, 10);
    const maxDataPoints = isNaN(maxDataPointsNumber) || maxDataPointsNumber === 0 ? void 0 : maxDataPointsNumber;
    if (maxDataPoints !== options.maxDataPoints) {
      onChange({
        ...options,
        maxDataPoints
      });
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.InlineField,
    {
      labelWidth: 24,
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.t)("alerting.max-data-points-option.label-max-data-points", "Max data points"),
      tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.t)(
        "alerting.max-data-points-option.tooltip-max-data-points",
        "The maximum data points per series. Used directly by some data sources and used in calculation of auto interval. With streaming data this value is used for the rolling buffer."
      ),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Input,
        {
          type: "number",
          width: 10,
          placeholder: DEFAULT_MAX_DATA_POINTS.toString(),
          spellCheck: false,
          onBlur: onMaxDataPointsBlur,
          defaultValue: value
        }
      )
    }
  );
}
function MinIntervalOption({
  options,
  onChange
}) {
  const value = options.minInterval ?? "";
  const onMinIntervalBlur = (event) => {
    const minInterval = event.target.value;
    if (minInterval !== value) {
      onChange({
        ...options,
        minInterval
      });
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.InlineField,
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.t)("alerting.min-interval-option.label-interval", "Interval"),
      labelWidth: 24,
      tooltip: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.Trans, { i18nKey: "alerting.min-interval-option.tooltip-interval", children: [
        "Interval sent to the data source. Recommended to be set to write frequency, for example ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: "1m" }),
        " if your data is written every minute."
      ] }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Input,
        {
          type: "text",
          width: 10,
          placeholder: DEFAULT_MIN_INTERVAL,
          spellCheck: false,
          onBlur: onMinIntervalBlur,
          defaultValue: value
        }
      )
    }
  );
}
const getStyles = (theme) => ({
  wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    label: "AlertingQueryWrapper",
    marginBottom: theme.spacing(1),
    border: `1px solid ${theme.colors.border.weak}`,
    borderRadius: theme.shape.radius.default,
    button: {
      overflow: "visible"
    }
  }),
  dsTooltip: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    alignItems: "center",
    "&:hover": {
      opacity: 0.85,
      cursor: "pointer"
    }
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/RecordingRuleEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecordingRuleEditor: () => (/* binding */ RecordingRuleEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/app.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/services/dataSourceSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var app_features_query_components_QueryErrorAlert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/query/components/QueryErrorAlert.tsx");
/* harmony import */ var app_plugins_datasource_loki_dataquery_gen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/loki/dataquery.gen.ts");
/* harmony import */ var _utils_rule_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-form.ts");
/* harmony import */ var _VizWrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/VizWrapper.tsx");















const RecordingRuleEditor = ({
  queries,
  onChangeQuery,
  runQueries,
  panelData,
  dataSourceName
}) => {
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    series: [],
    state: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.LoadingState.NotStarted,
    timeRange: (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_10__.getTimeSrv)().timeRange()
  });
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setData(panelData?.[queries[0]?.refId]);
  }, [panelData, queries]);
  const {
    error,
    loading,
    value: dataSource
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.getDataSourceSrv)().get(dataSourceName);
  }, [dataSourceName]);
  const handleChangedQuery = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (changedQuery) => {
      if (!(0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_13__.isPromOrLokiQuery)(changedQuery) || !dataSource) {
        return;
      }
      const [query] = queries;
      const { uid: dataSourceId, type } = dataSource;
      const isLoki = type === app_features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_9__.DataSourceType.Loki;
      const expr = changedQuery.expr;
      const merged = {
        ...query,
        ...changedQuery,
        datasourceUid: dataSourceId,
        expr,
        model: {
          expr,
          datasource: changedQuery.datasource,
          refId: changedQuery.refId,
          editorMode: changedQuery.editorMode,
          // Instant and range are used by Prometheus queries
          instant: changedQuery.instant,
          range: changedQuery.range,
          // Query type is used by Loki queries
          // On first render/when creating a recording rule, the query type is not set
          // unless the user has changed it betwee range/instant. The cleanest way to handle this
          // is to default to instant, or whatever the changed type is
          queryType: isLoki ? changedQuery.queryType || app_plugins_datasource_loki_dataquery_gen__WEBPACK_IMPORTED_MODULE_12__.LokiQueryType.Instant : changedQuery.queryType,
          legendFormat: changedQuery.legendFormat
        }
      };
      onChangeQuery([merged]);
    },
    [dataSource, queries, onChangeQuery]
  );
  if (loading || dataSource?.name !== dataSourceName) {
    return null;
  }
  const dsi = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.getDataSourceSrv)().getInstanceSettings(dataSourceName);
  if (error || !dataSource || !dataSource?.components?.QueryEditor || !dsi) {
    const errorMessage = error?.message || "Data source plugin does not export any Query Editor component";
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.recording-rule-editor.error-no-query-editor", children: [
      "Could not load query editor due to: ",
      { errorMessage }
    ] }) });
  }
  const QueryEditor = dataSource.components.QueryEditor;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    queries.length && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        QueryEditor,
        {
          query: queries[0],
          queries,
          app: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.CoreApp.UnifiedAlerting,
          onChange: handleChangedQuery,
          onRunQuery: runQueries,
          datasource: dataSource
        }
      ),
      (data?.errors || []).map((err) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_query_components_QueryErrorAlert__WEBPACK_IMPORTED_MODULE_11__.QueryErrorAlert, { error: err }, err.message);
      })
    ] }),
    data && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.vizWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VizWrapper__WEBPACK_IMPORTED_MODULE_14__.VizWrapper, { data }) })
  ] });
};
const getStyles = (theme) => ({
  vizWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    margin: theme.spacing(1, 0)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/RecordingRulesNameSpaceAndGroupStep.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecordingRulesNameSpaceAndGroupStep: () => (/* binding */ RecordingRulesNameSpaceAndGroupStep)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _GroupAndNamespaceFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/GroupAndNamespaceFields.tsx");
/* harmony import */ var _RuleEditorSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx");






function RecordingRulesNameSpaceAndGroupStep() {
  const { watch } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  const dataSourceName = watch("dataSourceName");
  if (!dataSourceName) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _RuleEditorSection__WEBPACK_IMPORTED_MODULE_4__.RuleEditorSection,
    {
      stepNo: 3,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "alerting.recording-rules-name-space-and-group-step.title-add-namespace-and-group",
        "Add namespace and group"
      ),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "alerting.recording-rules-name-space-and-group-step.description-select-namespace-group-recording",
        "Select the Namespace and Group for your recording rule."
      ),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GroupAndNamespaceFields__WEBPACK_IMPORTED_MODULE_3__.GroupAndNamespaceFields, { rulesSourceName: dataSourceName })
    }
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuleEditorSection: () => (/* binding */ RuleEditorSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldSet.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");






const RuleEditorSection = ({
  title,
  stepNo,
  children,
  fullWidth = false,
  description,
  switchMode
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const AlertRuleSelectors = _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.AlertRules;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.parent, "data-testid": AlertRuleSelectors.step(stepNo.toString()), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.FieldSet,
    {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(fullWidth && styles.fullWidth),
      label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "h3", children: [
          stepNo,
          ". ",
          title
        ] }),
        switchMode && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "bodySmall", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineSwitch,
          {
            "data-testid": AlertRuleSelectors.stepAdvancedModeSwitch(stepNo.toString()),
            value: switchMode.isAdvancedMode,
            onChange: (event) => {
              switchMode.setAdvancedMode(event.currentTarget.checked);
            },
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.rule-editor-section.label-advanced-options", "Advanced options"),
            showLabel: true,
            transparent: true,
            className: styles.reverse
          }
        ) })
      ] }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", children: [
        description && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.description, children: description }),
        children
      ] })
    }
  ) });
};
const getStyles = (theme) => ({
  parent: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    border: `solid 1px ${theme.colors.border.weak}`,
    borderRadius: theme.shape.radius.lg,
    padding: `${theme.spacing(2)} ${theme.spacing(3)}`
  }),
  description: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: `-${theme.spacing(2)}`
  }),
  fullWidth: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "100%"
  }),
  reverse: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    flexDirection: "row-reverse",
    gap: theme.spacing(1)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/alert-rule-form/AlertRuleForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertRuleForm: () => (/* binding */ AlertRuleForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_features_alerting_unified_components_InfoPausedRule__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/InfoPausedRule.tsx");
/* harmony import */ var app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/expressions/guards.ts");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _api_alertRuleModel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleModel.ts");
/* harmony import */ var _hooks_ruleGroup_useUpsertRuleFromRuleGroup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/hooks/ruleGroup/useUpsertRuleFromRuleGroup.ts");
/* harmony import */ var _rule_editor_formDefaults__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/rule-editor/formDefaults.ts");
/* harmony import */ var _rule_editor_formProcessing__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/rule-editor/formProcessing.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/utils/navigation.ts");
/* harmony import */ var _utils_rule_form__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-form.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _export_GrafanaRuleExporter__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/alerting/unified/components/export/GrafanaRuleExporter.tsx");
/* harmony import */ var _AlertRuleNameInput__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AlertRuleNameInput.tsx");
/* harmony import */ var _AnnotationsStep__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AnnotationsStep.tsx");
/* harmony import */ var _CloudEvaluationBehavior__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/CloudEvaluationBehavior.tsx");
/* harmony import */ var _GrafanaEvaluationBehavior__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/GrafanaEvaluationBehavior.tsx");
/* harmony import */ var _GrafanaFolderAndLabelsStep__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/GrafanaFolderAndLabelsStep.tsx");
/* harmony import */ var _NotificationsStep__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/NotificationsStep.tsx");
/* harmony import */ var _RecordingRulesNameSpaceAndGroupStep__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RecordingRulesNameSpaceAndGroupStep.tsx");
/* harmony import */ var _RuleInspector__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleInspector.tsx");
/* harmony import */ var _query_and_alert_condition_QueryAndExpressionsStep__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/QueryAndExpressionsStep.tsx");

































const AlertRuleForm = ({ existing, prefill, isManualRestore }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_12__.useAppNotification)();
  const routeParams = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_4__.useParams)();
  const uidFromParams = routeParams.id;
  const { redirectToDetailsPage } = useRedirectToDetailsPage(uidFromParams);
  const [showEditYaml, setShowEditYaml] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [addRuleToRuleGroup] = (0,_hooks_ruleGroup_useUpsertRuleFromRuleGroup__WEBPACK_IMPORTED_MODULE_19__.useAddRuleToRuleGroup)();
  const [updateRuleInRuleGroup] = (0,_hooks_ruleGroup_useUpsertRuleFromRuleGroup__WEBPACK_IMPORTED_MODULE_19__.useUpdateRuleInRuleGroup)();
  const ruleType = (0,_rule_editor_formDefaults__WEBPACK_IMPORTED_MODULE_20__.translateRouteParamToRuleType)(routeParams.type);
  const defaultValues = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (existing && prefill) {
      return { ...(0,_rule_editor_formDefaults__WEBPACK_IMPORTED_MODULE_20__.formValuesFromExistingRule)(existing), ...(0,_rule_editor_formDefaults__WEBPACK_IMPORTED_MODULE_20__.formValuesFromPrefill)(prefill) };
    }
    if (existing) {
      return (0,_rule_editor_formDefaults__WEBPACK_IMPORTED_MODULE_20__.formValuesFromExistingRule)(existing);
    }
    if (prefill) {
      return (0,_rule_editor_formDefaults__WEBPACK_IMPORTED_MODULE_20__.formValuesFromPrefill)(prefill);
    }
    return (0,_rule_editor_formDefaults__WEBPACK_IMPORTED_MODULE_20__.defaultFormValuesForRuleType)(ruleType);
  }, [existing, prefill, ruleType]);
  const formAPI = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    mode: "onSubmit",
    defaultValues,
    shouldFocusError: true
  });
  const {
    handleSubmit,
    watch,
    formState: { isSubmitting },
    trigger
  } = formAPI;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (isManualRestore) {
      trigger();
    }
  }, [isManualRestore, trigger]);
  const type = watch("type");
  const grafanaTypeRule = (0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_15__.isGrafanaManagedRuleByType)(type ?? _types_rule_form__WEBPACK_IMPORTED_MODULE_22__.RuleFormType.grafana);
  const dataSourceName = watch("dataSourceName");
  const showDataSourceDependantStep = Boolean(type && ((0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_15__.isGrafanaManagedRuleByType)(type) || !!dataSourceName));
  const [conditionErrorMsg, setConditionErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const checkAlertCondition = (msg = "") => {
    setConditionErrorMsg(msg);
  };
  const submit = async (values) => {
    const { type: type2, evaluateEvery } = values;
    if (conditionErrorMsg !== "") {
      notifyApp.error(conditionErrorMsg);
      if (!existing && grafanaTypeRule) {
        (0,_Analytics__WEBPACK_IMPORTED_MODULE_17__.trackNewGrafanaAlertRuleFormError)();
      }
      return;
    }
    (0,_Analytics__WEBPACK_IMPORTED_MODULE_17__.trackAlertRuleFormSaved)({ formAction: existing ? "update" : "create", ruleType: type2 });
    const ruleDefinition = grafanaTypeRule ? (0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_24__.formValuesToRulerGrafanaRuleDTO)(values) : (0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_24__.formValuesToRulerRuleDTO)(values);
    const ruleGroupIdentifier = existing ? (0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_15__.getRuleGroupLocationFromRuleWithLocation)(existing) : (0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_15__.getRuleGroupLocationFromFormValues)(values);
    const targetRuleGroupIdentifier = (0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_15__.getRuleGroupLocationFromFormValues)(values);
    let saveResult;
    if (!existing) {
      storeInLocalStorageValues(values);
      saveResult = await addRuleToRuleGroup.execute(ruleGroupIdentifier, ruleDefinition, evaluateEvery);
      if (grafanaTypeRule) {
        const dataQueries = values.queries.filter((query) => !(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_16__.isExpressionQuery)(query.model));
        const expressionQueries = values.queries.filter((query) => (0,_rule_editor_formProcessing__WEBPACK_IMPORTED_MODULE_21__.isExpressionQueryInAlert)(query));
        (0,_Analytics__WEBPACK_IMPORTED_MODULE_17__.trackNewGrafanaAlertRuleFormSavedSuccess)({
          simplifiedQueryEditor: values.editorSettings?.simplifiedQueryEditor ?? false,
          simplifiedNotificationEditor: values.editorSettings?.simplifiedNotificationEditor ?? false,
          canBeTransformedToSimpleQuery: (0,_rule_editor_formProcessing__WEBPACK_IMPORTED_MODULE_21__.areQueriesTransformableToSimpleCondition)(dataQueries, expressionQueries)
        });
      }
    } else {
      const ruleIdentifier = (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_25__.fromRulerRuleAndRuleGroupIdentifier)(ruleGroupIdentifier, existing.rule);
      saveResult = await updateRuleInRuleGroup.execute(
        ruleGroupIdentifier,
        ruleIdentifier,
        ruleDefinition,
        targetRuleGroupIdentifier,
        evaluateEvery
      );
    }
    redirectToDetailsPage(ruleDefinition, targetRuleGroupIdentifier, saveResult);
    return;
  };
  const onInvalid = (errors) => {
    (0,_Analytics__WEBPACK_IMPORTED_MODULE_17__.trackAlertRuleFormError)({
      grafana_version: _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.config.buildInfo.version,
      org_id: app_core_core__WEBPACK_IMPORTED_MODULE_13__.contextSrv.user.orgId,
      user_id: app_core_core__WEBPACK_IMPORTED_MODULE_13__.contextSrv.user.id,
      error: Object.keys(errors).toString(),
      formAction: existing ? "update" : "create"
    });
    notifyApp.error("There are errors in the form. Please correct them and try again!");
  };
  const cancelRuleCreation = () => {
    (0,_Analytics__WEBPACK_IMPORTED_MODULE_17__.logInfo)(_Analytics__WEBPACK_IMPORTED_MODULE_17__.LogMessages.cancelSavingAlertRule);
    (0,_Analytics__WEBPACK_IMPORTED_MODULE_17__.trackAlertRuleFormCancelled)({ formAction: existing ? "update" : "create" });
    if (!existing && grafanaTypeRule) {
      (0,_Analytics__WEBPACK_IMPORTED_MODULE_17__.trackNewGrafanaAlertRuleFormCancelled)();
    }
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.locationService.getHistory().goBack();
  };
  if (!type) {
    return null;
  }
  const isPaused = app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_15__.rulerRuleType.grafana.rule(existing?.rule) && (0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_15__.isPausedRule)(existing?.rule);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.FormProvider, { ...formAPI, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", { onSubmit: (e) => e.preventDefault(), className: styles.form, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.contentOuter, children: [
      isManualRestore && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Alert,
        {
          severity: "warning",
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.alertVersionHistory.warning-restore-manually-title", "Restoring rule manually"),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.alertVersionHistory.warning-restore-manually", children: "You are manually restoring an old version of this alert rule. Please review the changes carefully before saving the rule definition." })
        }
      ),
      isPaused && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_alerting_unified_components_InfoPausedRule__WEBPACK_IMPORTED_MODULE_14__["default"], {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "column", gap: 3, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertRuleNameInput__WEBPACK_IMPORTED_MODULE_27__.AlertRuleNameAndMetric, {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_query_and_alert_condition_QueryAndExpressionsStep__WEBPACK_IMPORTED_MODULE_35__.QueryAndExpressionsStep, { editingExistingRule: !!existing, onDataChange: checkAlertCondition, mode: "edit" }),
        showDataSourceDependantStep && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          (0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_15__.isGrafanaManagedRuleByType)(type) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GrafanaFolderAndLabelsStep__WEBPACK_IMPORTED_MODULE_31__.GrafanaFolderAndLabelsStep, {}),
          (0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_15__.isCloudAlertingRuleByType)(type) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CloudEvaluationBehavior__WEBPACK_IMPORTED_MODULE_29__.CloudEvaluationBehavior, {}),
          (0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_15__.isCloudRecordingRuleByType)(type) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RecordingRulesNameSpaceAndGroupStep__WEBPACK_IMPORTED_MODULE_33__.RecordingRulesNameSpaceAndGroupStep, {}),
          (0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_15__.isGrafanaManagedRuleByType)(type) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GrafanaEvaluationBehavior__WEBPACK_IMPORTED_MODULE_30__.GrafanaEvaluationBehaviorStep, { existing: Boolean(existing), enableProvisionedGroups: false }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NotificationsStep__WEBPACK_IMPORTED_MODULE_32__.NotificationsStep, { alertUid: uidFromParams }),
          !(0,app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_15__.isRecordingRuleByType)(type) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AnnotationsStep__WEBPACK_IMPORTED_MODULE_28__["default"], {})
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "row", alignItems: "center", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button,
            {
              "data-testid": "save-rule",
              variant: "primary",
              type: "button",
              onClick: handleSubmit((values) => submit(values), onInvalid),
              disabled: isSubmitting,
              icon: isSubmitting ? "spinner" : void 0,
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.alert-rule-form.action-buttons.save", children: "Save" })
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button, { variant: "secondary", disabled: isSubmitting, type: "button", onClick: cancelRuleCreation, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.common.cancel", children: "Cancel" }) }),
          existing && isCortexLokiOrRecordingRule(watch) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button, { variant: "secondary", type: "button", onClick: () => setShowEditYaml(true), disabled: isSubmitting, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.alert-rule-form.action-buttons.edit-yaml", children: "Edit YAML" }) })
        ] })
      ] })
    ] }) }),
    showEditYaml && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      grafanaTypeRule && uidFromParams && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_export_GrafanaRuleExporter__WEBPACK_IMPORTED_MODULE_26__.GrafanaRuleExporter, { alertUid: uidFromParams, onClose: () => setShowEditYaml(false) }),
      !grafanaTypeRule && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RuleInspector__WEBPACK_IMPORTED_MODULE_34__.RuleInspector, { onClose: () => setShowEditYaml(false) })
    ] })
  ] });
};
function useRedirectToDetailsPage(existingUid) {
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_12__.useAppNotification)();
  const redirectGrafanaRule = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (saveResult) => {
      const newOrUpdatedRuleUid = (saveResult.created?.at(0) || saveResult.updated?.at(0)) ?? existingUid;
      if (newOrUpdatedRuleUid) {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.locationService.replace(
          _utils_navigation__WEBPACK_IMPORTED_MODULE_23__.rulesNav.detailsPageLink("grafana", { uid: newOrUpdatedRuleUid, ruleSourceName: "grafana" }, void 0, {
            skipSubPath: true
          })
        );
      } else {
        notifyApp.error(
          "Cannot navigate to the new rule details page.",
          "The rule was created but the UID is missing."
        );
        (0,_Analytics__WEBPACK_IMPORTED_MODULE_17__.logWarning)("Cannot navigate to the new rule details page. The rule was created but the UID is missing.");
      }
    },
    [existingUid, notifyApp]
  );
  const redirectCloudRulerRule = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((rule, groupId) => {
    const { dataSourceName, namespaceName, groupName } = groupId;
    const updatedRuleIdentifier = (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_25__.fromRulerRule)(dataSourceName, namespaceName, groupName, rule);
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.locationService.replace(
      _utils_navigation__WEBPACK_IMPORTED_MODULE_23__.rulesNav.detailsPageLink(updatedRuleIdentifier.ruleSourceName, updatedRuleIdentifier, void 0, {
        skipSubPath: true
      })
    );
  }, []);
  const redirectToDetailsPage = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (rule, groupId, saveResult) => {
      if ((0,_api_alertRuleModel__WEBPACK_IMPORTED_MODULE_18__.isGrafanaGroupUpdatedResponse)(saveResult)) {
        redirectGrafanaRule(saveResult);
        return;
      } else if (app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_15__.rulerRuleType.dataSource.rule(rule)) {
        redirectCloudRulerRule(rule, groupId);
        return;
      }
      (0,_Analytics__WEBPACK_IMPORTED_MODULE_17__.logWarning)(
        "Cannot navigate to the new rule details page. The response is not a GrafanaGroupUpdatedResponse and ruleDefinition is not a Cloud Ruler rule.",
        { ruleFormType: app_features_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_15__.rulerRuleType.dataSource.rule(rule) ? "datasource" : "grafana" }
      );
    },
    [redirectGrafanaRule, redirectCloudRulerRule]
  );
  return { redirectToDetailsPage };
}
const isCortexLokiOrRecordingRule = (watch) => {
  const [ruleType, dataSourceName] = watch(["type", "dataSourceName"]);
  return (ruleType === _types_rule_form__WEBPACK_IMPORTED_MODULE_22__.RuleFormType.cloudAlerting || ruleType === _types_rule_form__WEBPACK_IMPORTED_MODULE_22__.RuleFormType.cloudRecording) && dataSourceName !== "";
};
function storeInLocalStorageValues(values) {
  const { manualRouting, editorSettings } = values;
  if (manualRouting) {
    localStorage.setItem(_utils_rule_form__WEBPACK_IMPORTED_MODULE_24__.MANUAL_ROUTING_KEY, "true");
  } else {
    localStorage.setItem(_utils_rule_form__WEBPACK_IMPORTED_MODULE_24__.MANUAL_ROUTING_KEY, "false");
  }
  if (editorSettings) {
    if (editorSettings.simplifiedQueryEditor) {
      localStorage.setItem(_utils_rule_form__WEBPACK_IMPORTED_MODULE_24__.SIMPLIFIED_QUERY_EDITOR_KEY, "true");
    } else {
      localStorage.setItem(_utils_rule_form__WEBPACK_IMPORTED_MODULE_24__.SIMPLIFIED_QUERY_EDITOR_KEY, "false");
    }
  }
}
const getStyles = (theme) => ({
  form: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column"
  }),
  contentOuter: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    background: theme.colors.background.primary,
    overflow: "hidden",
    maxWidth: theme.breakpoints.values.xl,
    flex: 1
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/alert-rule-form/ModifyExportRuleForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrafanaRuleDesignExporter: () => (/* binding */ GrafanaRuleDesignExporter),
/* harmony export */   ModifyExportRuleForm: () => (/* binding */ ModifyExportRuleForm),
/* harmony export */   getPayloadToExport: () => (/* binding */ getPayloadToExport)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");
/* harmony import */ var _api_ruler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/api/ruler.ts");
/* harmony import */ var _hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRule.ts");
/* harmony import */ var _hooks_useReturnTo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useReturnTo.ts");
/* harmony import */ var _rule_editor_formDefaults__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/rule-editor/formDefaults.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rule_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-form.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _export_FileExportPreview__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/export/FileExportPreview.tsx");
/* harmony import */ var _export_GrafanaExportDrawer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/components/export/GrafanaExportDrawer.tsx");
/* harmony import */ var _export_providers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/components/export/providers.ts");
/* harmony import */ var _AlertRuleNameInput__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AlertRuleNameInput.tsx");
/* harmony import */ var _AnnotationsStep__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AnnotationsStep.tsx");
/* harmony import */ var _GrafanaEvaluationBehavior__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/GrafanaEvaluationBehavior.tsx");
/* harmony import */ var _GrafanaFolderAndLabelsStep__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/GrafanaFolderAndLabelsStep.tsx");
/* harmony import */ var _NotificationsStep__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/NotificationsStep.tsx");
/* harmony import */ var _query_and_alert_condition_QueryAndExpressionsStep__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/QueryAndExpressionsStep.tsx");


























function ModifyExportRuleForm({ ruleForm, alertUid }) {
  const defaultValuesForNewRule = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const defaultRuleType = _types_rule_form__WEBPACK_IMPORTED_MODULE_14__.RuleFormType.grafana;
    return {
      ...(0,_rule_editor_formDefaults__WEBPACK_IMPORTED_MODULE_13__.getDefaultFormValues)(),
      condition: "C",
      queries: (0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_16__.getDefaultQueries)(false),
      type: defaultRuleType,
      evaluateEvery: _rule_editor_formDefaults__WEBPACK_IMPORTED_MODULE_13__.DEFAULT_GROUP_EVALUATION_INTERVAL
    };
  }, []);
  const formAPI = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    mode: "onSubmit",
    defaultValues: ruleForm ?? defaultValuesForNewRule,
    shouldFocusError: true
  });
  const existing = Boolean(ruleForm);
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_8__.useAppNotification)();
  const { returnTo } = (0,_hooks_useReturnTo__WEBPACK_IMPORTED_MODULE_12__.useReturnTo)("/alerting/list");
  const [exportData, setExportData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(void 0);
  const [conditionErrorMsg, setConditionErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const onInvalid = () => {
    notifyApp.error("There are errors in the form. Please correct them and try again!");
  };
  const checkAlertCondition = (msg = "") => {
    setConditionErrorMsg(msg);
  };
  const submit = (exportData2) => {
    if (conditionErrorMsg !== "") {
      notifyApp.error(conditionErrorMsg);
      return;
    }
    setExportData(exportData2);
  };
  const onClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setExportData(void 0);
  }, [setExportData]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, { ...formAPI, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "column", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", { onSubmit: (e) => e.preventDefault(), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "column", gap: 3, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertRuleNameInput__WEBPACK_IMPORTED_MODULE_21__.AlertRuleNameAndMetric, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_query_and_alert_condition_QueryAndExpressionsStep__WEBPACK_IMPORTED_MODULE_26__.QueryAndExpressionsStep, { editingExistingRule: existing, onDataChange: checkAlertCondition, mode: "draft" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GrafanaFolderAndLabelsStep__WEBPACK_IMPORTED_MODULE_24__.GrafanaFolderAndLabelsStep, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GrafanaEvaluationBehavior__WEBPACK_IMPORTED_MODULE_23__.GrafanaEvaluationBehaviorStep, { existing: Boolean(existing), enableProvisionedGroups: true }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NotificationsStep__WEBPACK_IMPORTED_MODULE_25__.NotificationsStep, { alertUid }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AnnotationsStep__WEBPACK_IMPORTED_MODULE_22__["default"], {})
    ] }) }) }),
    exportData && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GrafanaRuleDesignExporter, { exportValues: exportData, onClose, uid: alertUid }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "row", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { onClick: formAPI.handleSubmit((formValues) => submit(formValues), onInvalid), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.modify-export-rule-form.action-buttons.export", children: "Export" }) }, "export-rule"),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LinkButton, { href: returnTo, variant: "secondary", onClick: () => submit(void 0), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.common.cancel", children: "Cancel" }) }, "cancel")
    ] })
  ] }) });
}
const useGetGroup = (nameSpaceUID, group) => {
  const { dsFeatures } = (0,_hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_11__.useDataSourceFeatures)(_utils_datasource__WEBPACK_IMPORTED_MODULE_15__.GRAFANA_RULES_SOURCE_NAME);
  const rulerConfig = dsFeatures?.rulerConfig;
  const targetGroup = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(async () => {
    return rulerConfig ? await (0,_api_ruler__WEBPACK_IMPORTED_MODULE_10__.fetchRulerRulesGroup)(rulerConfig, nameSpaceUID, group) : void 0;
  }, [rulerConfig, nameSpaceUID, group]);
  return targetGroup;
};
const getPayloadToExport = (formValues, existingGroup, ruleUid) => {
  const grafanaRuleDto = (0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_16__.formValuesToRulerGrafanaRuleDTO)(formValues);
  const updatedRule = { ...grafanaRuleDto, grafana_alert: { ...grafanaRuleDto.grafana_alert, uid: ruleUid } };
  if (existingGroup?.rules) {
    let alreadyExistsInGroup = false;
    const updatedRules = existingGroup.rules.map((rule) => {
      if (_utils_rules__WEBPACK_IMPORTED_MODULE_17__.rulerRuleType.grafana.rule(rule) && rule.grafana_alert.uid === ruleUid) {
        alreadyExistsInGroup = true;
        return updatedRule;
      } else {
        return rule;
      }
    });
    if (!alreadyExistsInGroup) {
      updatedRules.push(updatedRule);
    }
    return {
      ...existingGroup,
      rules: updatedRules
    };
  } else {
    return {
      name: existingGroup?.name ?? formValues.group,
      rules: [updatedRule]
    };
  }
};
const useGetPayloadToExport = (values, ruleUid) => {
  const rulerGroupDto = useGetGroup(values.folder?.uid ?? "", values.group);
  const payload = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return getPayloadToExport(values, rulerGroupDto?.value, ruleUid);
  }, [ruleUid, rulerGroupDto, values]);
  return { payload, loadingGroup: rulerGroupDto.loading };
};
const GrafanaRuleDesignExportPreview = ({
  exportFormat,
  exportValues,
  onClose,
  uid
}) => {
  const [getExport, exportData] = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_9__.alertRuleApi.endpoints.exportModifiedRuleGroup.useMutation();
  const { loadingGroup, payload } = useGetPayloadToExport(exportValues, uid);
  const nameSpaceUID = exportValues.folder?.uid ?? "";
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    !loadingGroup && payload.name && getExport({ payload, format: exportFormat, nameSpaceUID });
  }, [nameSpaceUID, exportFormat, payload, getExport, loadingGroup]);
  if (exportData.isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.grafana-rule-design-export-preview.text-loading", "Loading....") });
  }
  const downloadFileName = `modify-export-${payload.name}-${uid}-${(/* @__PURE__ */ new Date()).getTime()}`;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _export_FileExportPreview__WEBPACK_IMPORTED_MODULE_18__.FileExportPreview,
    {
      format: exportFormat,
      textDefinition: exportData.data ?? "",
      downloadFileName,
      onClose
    }
  );
};
const GrafanaRuleDesignExporter = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ onClose, exportValues, uid }) => {
  const exportingNewRule = !uid;
  const initialTab = exportingNewRule ? "hcl" : "yaml";
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialTab);
  const formatProviders = exportingNewRule ? [_export_providers__WEBPACK_IMPORTED_MODULE_20__.HclExportProvider] : Object.values(_export_providers__WEBPACK_IMPORTED_MODULE_20__.allGrafanaExportProviders);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _export_GrafanaExportDrawer__WEBPACK_IMPORTED_MODULE_19__.GrafanaExportDrawer,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.grafana-rule-design-exporter.title-export-group", "Export Group"),
      activeTab,
      onTabChange: setActiveTab,
      onClose,
      formatProviders,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        GrafanaRuleDesignExportPreview,
        {
          exportFormat: activeTab,
          onClose,
          exportValues,
          uid
        }
      )
    }
  );
});
GrafanaRuleDesignExporter.displayName = "GrafanaRuleDesignExporter";


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/alert-rule-form/simplifiedRouting/AlertManagerRouting.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertManagerManualRouting: () => (/* binding */ AlertManagerManualRouting)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Collapse/CollapsableSection.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _NeedHelpInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/NeedHelpInfo.tsx");
/* harmony import */ var _contactPoint_ContactPointSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/alert-rule-form/simplifiedRouting/contactPoint/ContactPointSelector.tsx");
/* harmony import */ var _route_settings_ActiveTimingFields__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/alert-rule-form/simplifiedRouting/route-settings/ActiveTimingFields.tsx");
/* harmony import */ var _route_settings_MuteTimingFields__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/alert-rule-form/simplifiedRouting/route-settings/MuteTimingFields.tsx");
/* harmony import */ var _route_settings_RouteSettings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/alert-rule-form/simplifiedRouting/route-settings/RouteSettings.tsx");











function AlertManagerManualRouting({ alertManager }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const alertManagerName = alertManager.name;
  const { watch } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const hasRouteSettings = watch(`contactPoints.${alertManagerName}.overrideGrouping`) || watch(`contactPoints.${alertManagerName}.overrideTimings`) || watch(`contactPoints.${alertManagerName}.muteTimeIntervals`)?.length > 0;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "column", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "row", alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.firstAlertManagerLine }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.alertManagerName, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.rule-form.simple-routing.alertmanager-label", children: "Alertmanager:" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: alertManager.imgUrl, alt: "Alert manager logo", className: styles.img }),
        alertManagerName
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.secondAlertManagerLine })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "row", gap: 1, alignItems: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_contactPoint_ContactPointSelector__WEBPACK_IMPORTED_MODULE_9__.ContactPointSelector, { alertManager: alertManagerName }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.routingSection, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.CollapsableSection,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "alerting.alert-manager-manual-routing.label-muting-grouping-and-timings-optional",
          "Muting, grouping and timings (optional)"
        ),
        isOpen: hasRouteSettings,
        className: styles.collapsableSection,
        contentClassName: styles.collapsableSectionContent,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "column", gap: 1, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "row", gap: 0.5, alignItems: "center", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { variant: "bodySmall", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.rule-form.simple-routing.optional-settings.description", children: "Configure how notifications for this alert rule are sent." }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _NeedHelpInfo__WEBPACK_IMPORTED_MODULE_8__.NeedHelpInfo,
              {
                title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
                  "alerting.alert-manager-manual-routing.title-muting-grouping-and-timings",
                  "Muting, grouping, and timings"
                ),
                linkText: "Read about notification grouping",
                externalLink: "https://grafana.com/docs/grafana/latest/alerting/fundamentals/notifications/group-alert-notifications/",
                contentText: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
                    "alerting.rule-form.simple-routing.optional-settings.help-info1",
                    "Mute timings allows you to temporarily pause notifications for a specific recurring period, such as a regular maintenance window or weekends."
                  ) }),
                  (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
                    "alerting.rule-form.simple-routing.optional-settings.help-info2",
                    "Grouping and timing options combine multiple alerts within a specific period into a single notification, allowing you to customize default options."
                  )
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_route_settings_MuteTimingFields__WEBPACK_IMPORTED_MODULE_11__.MuteTimingFields, { alertmanager: alertManagerName }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_route_settings_ActiveTimingFields__WEBPACK_IMPORTED_MODULE_10__.ActiveTimingFields, { alertmanager: alertManagerName }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_route_settings_RouteSettings__WEBPACK_IMPORTED_MODULE_12__.RoutingSettings, { alertManager: alertManagerName })
        ] })
      }
    ) })
  ] });
}
const getStyles = (theme) => ({
  firstAlertManagerLine: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    height: 1,
    width: theme.spacing(4),
    backgroundColor: theme.colors.secondary.main
  }),
  alertManagerName: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    with: "fit-content"
  }),
  secondAlertManagerLine: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    height: "1px",
    width: "100%",
    flex: 1,
    backgroundColor: theme.colors.secondary.main
  }),
  img: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginLeft: theme.spacing(2),
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1)
  }),
  collapsableSection: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "fit-content",
    fontSize: theme.typography.body.fontSize
  }),
  collapsableSectionContent: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: "0"
  }),
  routingSection: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "column",
    maxWidth: theme.breakpoints.values.xl,
    border: `solid 1px ${theme.colors.border.weak}`,
    borderRadius: theme.shape.radius.default,
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    marginTop: theme.spacing(2)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/alert-rule-form/simplifiedRouting/SimplifiedRouting.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimplifiedRouting: () => (/* binding */ SimplifiedRouting)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var app_features_alerting_unified_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertmanagerContext.tsx");
/* harmony import */ var app_features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _AlertManagerRouting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/alert-rule-form/simplifiedRouting/AlertManagerRouting.tsx");







function SimplifiedRouting() {
  const { getValues } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const contactPointsInAlert = getValues("contactPoints");
  const allAlertManagersByPermission = (0,app_features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_4__.getAlertManagerDataSourcesByPermission)("notification");
  const alertManagersDataSources = allAlertManagersByPermission.availableInternalDataSources;
  const alertManagersDataSourcesWithConfigAPI = alertManagersDataSources.filter((am) => am.hasConfigurationAPI);
  const alertManagersWithSelectedContactPoints = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => alertManagersDataSourcesWithConfigAPI.map((am) => {
      const selectedContactPoint = contactPointsInAlert ? contactPointsInAlert[am.name] : void 0;
      return {
        alertManager: am,
        selectedContactPoint: selectedContactPoint?.selectedContactPoint ?? "",
        routeSettings: {
          muteTimeIntervals: selectedContactPoint?.muteTimeIntervals ?? [],
          activeTimeIntervals: selectedContactPoint?.activeTimeIntervals ?? [],
          overrideGrouping: selectedContactPoint?.overrideGrouping ?? false,
          groupBy: selectedContactPoint?.groupBy ?? [],
          overrideTimings: selectedContactPoint?.overrideTimings ?? false,
          groupWaitValue: selectedContactPoint?.groupWaitValue ?? "",
          groupIntervalValue: selectedContactPoint?.groupIntervalValue ?? "",
          repeatIntervalValue: selectedContactPoint?.repeatIntervalValue ?? ""
        }
      };
    }),
    [alertManagersDataSourcesWithConfigAPI, contactPointsInAlert]
  );
  return alertManagersWithSelectedContactPoints.map((alertManagerContactPoint, index) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      app_features_alerting_unified_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_3__.AlertmanagerProvider,
      {
        accessType: "notification",
        alertmanagerSourceName: alertManagerContactPoint.alertManager.name,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertManagerRouting__WEBPACK_IMPORTED_MODULE_5__.AlertManagerManualRouting, { alertManager: alertManagerContactPoint.alertManager })
      },
      alertManagerContactPoint.alertManager.name + index
    );
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/alert-rule-form/simplifiedRouting/contactPoint/ContactPointSelector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactPointSelector: () => (/* binding */ ContactPointSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_alerting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-alerting/src/grafana/api/util.ts");
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-alerting/src/grafana/contactPoints/components/ContactPointSelector/ContactPointSelector.tsx");
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-alerting/src/grafana/api/notifications/v0alpha1/notifications.api.gen.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldValidationMessage.tsx");
/* harmony import */ var app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/k8s/utils.ts");
/* harmony import */ var app_features_alerting_unified_utils_url__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");












function ContactPointSelector({ alertManager }) {
  const { control, watch, trigger } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
  const selectedContactPointField = `contactPoints.${alertManager}.selectedContactPoint`;
  const contactPointInForm = watch(selectedContactPointField);
  const encodedContactPoint = contactPointInForm ? (0,_grafana_alerting__WEBPACK_IMPORTED_MODULE_5__.base64UrlEncode)(contactPointInForm) : "";
  const { currentData, status } = _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_7__.notificationsAPI.endpoints.listReceiver.useQuery(
    {
      fieldSelector: (0,app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_13__.stringifyFieldSelector)([["metadata.name", encodedContactPoint]])
    },
    { skip: !contactPointInForm }
  );
  const contactPointNotFound = contactPointInForm && status === _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__.QueryStatus.fulfilled && (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(currentData?.items);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (contactPointInForm && status === _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__.QueryStatus.fulfilled) {
      trigger(selectedContactPointField, { shouldFocus: true });
    }
  }, [contactPointInForm, selectedContactPointField, status, trigger]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "row", alignItems: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Field,
    {
      noMargin: true,
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("alerting.contact-point-selector.contact-point-picker-label-contact-point", "Contact point"),
      "data-testid": "contact-point-picker",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.Controller,
        {
          name: selectedContactPointField,
          render: ({ field: { onChange }, fieldState: { error } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_6__.ContactPointSelector,
                {
                  isClearable: false,
                  onChange: (contactPoint) => onChange(contactPoint.spec.title),
                  width: 50,
                  value: contactPointInForm
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LinkToContactPoints, {})
            ] }),
            error && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.FieldValidationMessage, { children: error?.message })
          ] }),
          rules: {
            validate: () => {
              if (contactPointNotFound) {
                return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)(
                  "alerting.contactPoints.validation.notFound",
                  `Contact point "{{contactPoint}}" could not be found`,
                  {
                    contactPoint: contactPointInForm
                  }
                );
              }
              return true;
            },
            required: {
              value: true,
              message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)(
                "alerting.contact-point-selector.message.contact-point-is-required",
                "Contact point is required."
              )
            }
          },
          control
        }
      )
    }
  ) });
}
function LinkToContactPoints() {
  const hrefToContactPoints = "/alerting/notifications";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.TextLink,
    {
      external: true,
      href: (0,app_features_alerting_unified_utils_url__WEBPACK_IMPORTED_MODULE_14__.createRelativeUrl)(hrefToContactPoints),
      "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)(
        "alerting.link-to-contact-points.aria-label-view-or-create-contact-points",
        "View or create contact points"
      ),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.Trans, { i18nKey: "alerting.link-to-contact-points.view-or-create-contact-points", children: "View or create contact points" })
    }
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/alert-rule-form/simplifiedRouting/route-settings/ActiveTimingFields.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveTimingFields: () => (/* binding */ ActiveTimingFields)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_alerting_unified_components_alertmanager_entities_MuteTimingsSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/alertmanager-entities/MuteTimingsSelector.tsx");
/* harmony import */ var app_features_alerting_unified_utils_amroutes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");








function ActiveTimingFields({ alertmanager }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const {
    control,
    formState: { errors }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field,
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.active-timing-fields.am-active-timing-select-label-active-timings", "Active timings"),
      "data-testid": "am-active-timing-select",
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
        "alerting.mute-timing-fields.am-active-timing-select-description-active-timings",
        "Select a time interval to define when to only send notifications for this alert rule"
      ),
      className: styles.muteTimingField,
      invalid: !!errors.contactPoints?.[alertmanager]?.activeTimeIntervals,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
        {
          render: ({ field: { onChange, ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            app_features_alerting_unified_components_alertmanager_entities_MuteTimingsSelector__WEBPACK_IMPORTED_MODULE_6__["default"],
            {
              alertmanager,
              selectProps: {
                ...field,
                onChange: (value) => onChange((0,app_features_alerting_unified_utils_amroutes__WEBPACK_IMPORTED_MODULE_7__.mapMultiSelectValueToStrings)(value))
              }
            }
          ),
          control,
          name: `contactPoints.${alertmanager}.activeTimeIntervals`
        }
      )
    }
  );
}
const getStyles = (theme) => ({
  muteTimingField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: theme.spacing(1)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/alert-rule-form/simplifiedRouting/route-settings/MuteTimingFields.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MuteTimingFields: () => (/* binding */ MuteTimingFields)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_alerting_unified_components_alertmanager_entities_MuteTimingsSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/alertmanager-entities/MuteTimingsSelector.tsx");
/* harmony import */ var app_features_alerting_unified_utils_amroutes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");








function MuteTimingFields({ alertmanager }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const {
    control,
    formState: { errors }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field,
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.mute-timing-fields.am-mute-timing-select-label-mute-timings", "Mute timings"),
      "data-testid": "am-mute-timing-select",
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
        "alerting.mute-timing-fields.am-mute-timing-select-description-mute-timings",
        "Select a mute timing to define when not to send notifications for this alert rule"
      ),
      className: styles.muteTimingField,
      invalid: !!errors.contactPoints?.[alertmanager]?.muteTimeIntervals,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
        {
          render: ({ field: { onChange, ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            app_features_alerting_unified_components_alertmanager_entities_MuteTimingsSelector__WEBPACK_IMPORTED_MODULE_6__["default"],
            {
              alertmanager,
              selectProps: {
                ...field,
                onChange: (value) => onChange((0,app_features_alerting_unified_utils_amroutes__WEBPACK_IMPORTED_MODULE_7__.mapMultiSelectValueToStrings)(value))
              }
            }
          ),
          control,
          name: `contactPoints.${alertmanager}.muteTimeIntervals`
        }
      )
    }
  );
}
const getStyles = (theme) => ({
  muteTimingField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: theme.spacing(1)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/alert-rule-form/simplifiedRouting/route-settings/RouteSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoutingSettings: () => (/* binding */ RoutingSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldValidationMessage.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Select/MultiValue.tsx");
/* harmony import */ var app_features_alerting_unified_utils_amroutes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");
/* harmony import */ var _notification_policies_formStyles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/formStyles.ts");
/* harmony import */ var _notification_policies_timingOptions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/timingOptions.ts");
/* harmony import */ var _RouteTimings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/alert-rule-form/simplifiedRouting/route-settings/RouteTimings.tsx");












const REQUIRED_FIELDS_IN_GROUPBY = ["grafana_folder", "alertname"];
const DEFAULTS_TIMINGS = {
  groupWaitValue: _notification_policies_timingOptions__WEBPACK_IMPORTED_MODULE_16__.TIMING_OPTIONS_DEFAULTS.group_wait,
  groupIntervalValue: _notification_policies_timingOptions__WEBPACK_IMPORTED_MODULE_16__.TIMING_OPTIONS_DEFAULTS.group_interval,
  repeatIntervalValue: _notification_policies_timingOptions__WEBPACK_IMPORTED_MODULE_16__.TIMING_OPTIONS_DEFAULTS.repeat_interval
};
const DISABLE_GROUPING = "...";
const RoutingSettings = ({ alertManager }) => {
  const formStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useStyles2)(_notification_policies_formStyles__WEBPACK_IMPORTED_MODULE_15__.getFormStyles);
  const {
    control,
    watch,
    register,
    setValue,
    formState: { errors }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const [groupByOptions, setGroupByOptions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((0,app_features_alerting_unified_utils_amroutes__WEBPACK_IMPORTED_MODULE_14__.stringsToSelectableValues)([]));
  const { groupIntervalValue, groupWaitValue, repeatIntervalValue } = DEFAULTS_TIMINGS;
  const overrideGrouping = watch(`contactPoints.${alertManager}.overrideGrouping`);
  const overrideTimings = watch(`contactPoints.${alertManager}.overrideTimings`);
  const groupByCount = watch(`contactPoints.${alertManager}.groupBy`)?.length ?? 0;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useStyles2)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (overrideGrouping && groupByCount === 0) {
      setValue(`contactPoints.${alertManager}.groupBy`, REQUIRED_FIELDS_IN_GROUPBY);
    }
  }, [overrideGrouping, setValue, alertManager, groupByCount]);
  const separator = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: ", " });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "column", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "row", gap: 1, alignItems: "center", justifyContent: "space-between", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.InlineField,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.routing-settings.label-override-grouping", "Override grouping"),
          transparent: true,
          className: styles.switchElement,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Switch, { id: "override-grouping-toggle", ...register(`contactPoints.${alertManager}.overrideGrouping`) })
        }
      ),
      !overrideGrouping && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { variant: "body", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans,
        {
          i18nKey: "alerting.routing-settings.grouping",
          values: { fields: REQUIRED_FIELDS_IN_GROUPBY.join(", ") },
          children: [
            "Grouping: ",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "{{fields}}" })
          ]
        }
      ) })
    ] }),
    overrideGrouping && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.routing-settings.label-group-by", "Group by"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "alerting.routing-settings.description-group-by",
          "Combine multiple alerts into a single notification by grouping them by the same label values. If empty, it is inherited from the default notification policy."
        ),
        ...register(`contactPoints.${alertManager}.groupBy`),
        invalid: !!errors.contactPoints?.[alertManager]?.groupBy,
        className: styles.optionalContent,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
          {
            rules: {
              validate: (value) => {
                if (!value || value.length === 0) {
                  return "At least one group by option is required.";
                }
                if (value.length === 1 && value[0] === DISABLE_GROUPING) {
                  return true;
                }
                const requiredFieldsIncluded = REQUIRED_FIELDS_IN_GROUPBY.every((field) => value.includes(field));
                if (!requiredFieldsIncluded) {
                  return `Group by must include ${REQUIRED_FIELDS_IN_GROUPBY.join(", ")}`;
                }
                return true;
              }
            },
            render: ({ field: { onChange, ref, ...field }, fieldState: { error } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.MultiSelect,
                {
                  "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.routing-settings.aria-label-group-by", "Group by"),
                  ...field,
                  allowCustomValue: true,
                  className: formStyles.input,
                  onCreateOption: (opt) => {
                    setGroupByOptions((opts) => [...opts, (0,app_features_alerting_unified_utils_amroutes__WEBPACK_IMPORTED_MODULE_14__.stringToSelectableValue)(opt)]);
                    setValue(`contactPoints.${alertManager}.groupBy`, [...field.value, opt]);
                  },
                  onChange: (value) => {
                    return onChange((0,app_features_alerting_unified_utils_amroutes__WEBPACK_IMPORTED_MODULE_14__.mapMultiSelectValueToStrings)(value));
                  },
                  options: [...app_features_alerting_unified_utils_amroutes__WEBPACK_IMPORTED_MODULE_14__.commonGroupByOptions, ...groupByOptions],
                  components: {
                    MultiValueRemove(props) {
                      const { data } = props;
                      if (data.isFixed) {
                        return null;
                      }
                      return (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_13__.MultiValueRemove)(props);
                    }
                  }
                }
              ),
              error && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.FieldValidationMessage, { children: error.message })
            ] }),
            name: `contactPoints.${alertManager}.groupBy`,
            control
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "row", gap: 1, alignItems: "center", justifyContent: "space-between", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.InlineField,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.routing-settings.label-override-timings", "Override timings"),
          transparent: true,
          className: styles.switchElement,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Switch, { id: "override-timings-toggle", ...register(`contactPoints.${alertManager}.overrideTimings`) })
        }
      ),
      !overrideTimings && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { variant: "body", color: "secondary", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.routing-settings.group-wait", values: { groupWaitValue }, children: [
          "Group wait: ",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "{{groupWaitValue}}" })
        ] }),
        separator,
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.routing-settings.group-interval", values: { groupIntervalValue }, children: [
          "Group interval: ",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "{{groupIntervalValue}}" })
        ] }),
        separator,
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.routing-settings.repeat-interval", values: { repeatIntervalValue }, children: [
          "Repeat interval: ",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "{{repeatIntervalValue}}" })
        ] })
      ] })
    ] }),
    overrideTimings && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.optionalContent, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RouteTimings__WEBPACK_IMPORTED_MODULE_17__.RouteTimings, { alertManager }) })
  ] });
};
const getStyles = (theme) => ({
  switchElement: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    flexFlow: "row-reverse",
    gap: theme.spacing(1),
    alignItems: "center"
  }),
  optionalContent: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginLeft: "49px",
    marginBottom: theme.spacing(1)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/alert-rule-form/simplifiedRouting/route-settings/RouteTimings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RouteTimings: () => (/* binding */ RouteTimings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_alerting_unified_utils_amroutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");
/* harmony import */ var _notification_policies_PromDurationInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/PromDurationInput.tsx");
/* harmony import */ var _notification_policies_formStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/formStyles.ts");
/* harmony import */ var _notification_policies_routeTimingsFields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/routeTimingsFields.ts");
/* harmony import */ var _notification_policies_timingOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/timingOptions.ts");









function RouteTimings({ alertManager }) {
  const formStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(_notification_policies_formStyles__WEBPACK_IMPORTED_MODULE_6__.getFormStyles);
  const {
    register,
    formState: { errors },
    getValues
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field,
      {
        label: _notification_policies_routeTimingsFields__WEBPACK_IMPORTED_MODULE_7__.routeTimingsFields.groupWait.label,
        description: _notification_policies_routeTimingsFields__WEBPACK_IMPORTED_MODULE_7__.routeTimingsFields.groupWait.description,
        invalid: !!errors.contactPoints?.[alertManager]?.groupWaitValue,
        error: errors.contactPoints?.[alertManager]?.groupWaitValue?.message,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _notification_policies_PromDurationInput__WEBPACK_IMPORTED_MODULE_5__.PromDurationInput,
          {
            ...register(`contactPoints.${alertManager}.groupWaitValue`, { validate: app_features_alerting_unified_utils_amroutes__WEBPACK_IMPORTED_MODULE_4__.promDurationValidator }),
            "aria-label": _notification_policies_routeTimingsFields__WEBPACK_IMPORTED_MODULE_7__.routeTimingsFields.groupWait.ariaLabel,
            className: formStyles.promDurationInput,
            placeholder: _notification_policies_timingOptions__WEBPACK_IMPORTED_MODULE_8__.TIMING_OPTIONS_DEFAULTS.group_wait
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field,
      {
        label: _notification_policies_routeTimingsFields__WEBPACK_IMPORTED_MODULE_7__.routeTimingsFields.groupInterval.label,
        description: _notification_policies_routeTimingsFields__WEBPACK_IMPORTED_MODULE_7__.routeTimingsFields.groupInterval.description,
        invalid: !!errors.contactPoints?.[alertManager]?.groupIntervalValue,
        error: errors.contactPoints?.[alertManager]?.groupIntervalValue?.message,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _notification_policies_PromDurationInput__WEBPACK_IMPORTED_MODULE_5__.PromDurationInput,
          {
            ...register(`contactPoints.${alertManager}.groupIntervalValue`, {
              validate: app_features_alerting_unified_utils_amroutes__WEBPACK_IMPORTED_MODULE_4__.promDurationValidator
            }),
            "aria-label": _notification_policies_routeTimingsFields__WEBPACK_IMPORTED_MODULE_7__.routeTimingsFields.groupInterval.ariaLabel,
            className: formStyles.promDurationInput,
            placeholder: _notification_policies_timingOptions__WEBPACK_IMPORTED_MODULE_8__.TIMING_OPTIONS_DEFAULTS.group_interval
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field,
      {
        label: _notification_policies_routeTimingsFields__WEBPACK_IMPORTED_MODULE_7__.routeTimingsFields.repeatInterval.label,
        description: _notification_policies_routeTimingsFields__WEBPACK_IMPORTED_MODULE_7__.routeTimingsFields.repeatInterval.description,
        invalid: !!errors.contactPoints?.[alertManager]?.repeatIntervalValue,
        error: errors.contactPoints?.[alertManager]?.repeatIntervalValue?.message,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _notification_policies_PromDurationInput__WEBPACK_IMPORTED_MODULE_5__.PromDurationInput,
          {
            ...register(`contactPoints.${alertManager}.repeatIntervalValue`, {
              validate: (value) => {
                const groupInterval = getValues(`contactPoints.${alertManager}.repeatIntervalValue`);
                return (0,app_features_alerting_unified_utils_amroutes__WEBPACK_IMPORTED_MODULE_4__.repeatIntervalValidator)(value, groupInterval);
              }
            }),
            "aria-label": _notification_policies_routeTimingsFields__WEBPACK_IMPORTED_MODULE_7__.routeTimingsFields.repeatInterval.ariaLabel,
            className: formStyles.promDurationInput,
            placeholder: _notification_policies_timingOptions__WEBPACK_IMPORTED_MODULE_8__.TIMING_OPTIONS_DEFAULTS.repeat_interval
          }
        )
      }
    )
  ] });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/labels/LabelsButtons.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddButton: () => (/* binding */ AddButton),
/* harmony export */   RemoveButton: () => (/* binding */ RemoveButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");




function RemoveButton({ remove, index }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button,
    {
      "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.remove-button.aria-label-delete-label", "delete label"),
      icon: "trash-alt",
      "data-testid": `delete-label-${index}`,
      variant: "secondary",
      onClick: () => {
        remove(index);
      }
    }
  );
}
function AddButton({ append }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { icon: "plus", type: "button", variant: "secondary", onClick: append, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.add-button.add-more", children: "Add more" }) });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/labels/LabelsEditorModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LabelsEditorModal: () => (/* binding */ LabelsEditorModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _LabelsField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/labels/LabelsField.tsx");





function LabelsEditorModal({ isOpen, onClose, dataSourceName, initialLabels }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Modal,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.labels-editor-modal.title-edit-labels", "Edit labels"),
      closeOnEscape: true,
      isOpen,
      onDismiss: () => onClose(),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LabelsField__WEBPACK_IMPORTED_MODULE_3__.LabelsSubForm, { dataSourceName, onClose, initialLabels })
    }
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/labels/LabelsField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LabelsInRule: () => (/* binding */ LabelsInRule),
/* harmony export */   LabelsSubForm: () => (/* binding */ LabelsSubForm),
/* harmony export */   LabelsWithSuggestions: () => (/* binding */ LabelsWithSuggestions),
/* harmony export */   LabelsWithoutSuggestions: () => (/* binding */ LabelsWithoutSuggestions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useCombinedLabels: () => (/* binding */ useCombinedLabels)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-alerting/src/grafana/rules/components/labels/AlertLabels.tsx");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Space.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _api_labelsApi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/api/labelsApi.ts");
/* harmony import */ var _hooks_usePluginBridge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/hooks/usePluginBridge.ts");
/* harmony import */ var _types_pluginBridges__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/types/pluginBridges.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _utils_labels__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/utils/labels.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _AlertLabelDropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabelDropdown.tsx");
/* harmony import */ var _NeedHelpInfo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/NeedHelpInfo.tsx");
/* harmony import */ var _useAlertRuleSuggestions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/useAlertRuleSuggestions.tsx");
/* harmony import */ var _LabelsButtons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/labels/LabelsButtons.tsx");


















const useGetOpsLabelsKeys = (skip) => {
  const { currentData, isLoading: isloadingLabels } = _api_labelsApi__WEBPACK_IMPORTED_MODULE_14__.labelsApi.endpoints.getLabels.useQuery(void 0, {
    skip
  });
  return { loading: isloadingLabels, labelsOpsKeys: currentData };
};
function mapLabelsToOptions(items = [], labelsInSubForm) {
  const existingKeys = new Set(labelsInSubForm ? labelsInSubForm.map((label) => label.key) : []);
  return Array.from(items, (item) => ({
    label: item,
    value: item,
    disabled: existingKeys.has(item)
  }));
}
const LabelsInRule = ({ labels }) => {
  const labelsObj = labels.reduce((acc, label) => {
    if (label.key) {
      acc[label.key] = label.value;
    }
    return acc;
  }, {});
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_4__.AlertLabels, { labels: labelsObj });
};
function LabelsSubForm({ dataSourceName, onClose, initialLabels }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.useStyles2)(getStyles);
  const { watch } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const type = watch("type") ?? _types_rule_form__WEBPACK_IMPORTED_MODULE_17__.RuleFormType.grafana;
  const onSave = (labels) => {
    onClose(labels.labelsInSubform);
  };
  const onCancel = () => {
    onClose();
  };
  const defaultValues = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return { labelsInSubform: initialLabels };
  }, [initialLabels]);
  const formAPI = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({ defaultValues });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.FormProvider, { ...formAPI, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", { onSubmit: formAPI.handleSubmit(onSave), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 1, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { children: getLabelText(type) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { variant: "bodySmall", color: "secondary", children: getDescriptionText() })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 1, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LabelsWithSuggestions, { dataSourceName }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Space, { v: 2 }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LabelsInRule, { labels: formAPI.watch("labelsInSubform") }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Space, { v: 1 }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.confirmButton, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { type: "button", variant: "secondary", onClick: onCancel, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.common.cancel", children: "Cancel" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { type: "submit", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.labels-sub-form.save", children: "Save" }) })
      ] })
    ] })
  ] }) }) });
}
const isKeyAllowed = (labelKey) => !(0,_utils_labels__WEBPACK_IMPORTED_MODULE_18__.isPrivateLabelKey)(labelKey);
function useCombinedLabels(dataSourceName, labelsPluginInstalled, loadingLabelsPlugin, labelsInSubform, selectedKey) {
  const { labels: labelsByKeyFromExisingAlerts, isLoading } = (0,_useAlertRuleSuggestions__WEBPACK_IMPORTED_MODULE_22__.useGetLabelsFromDataSourceName)(dataSourceName);
  const { loading: isLoadingLabels, labelsOpsKeys = [] } = useGetOpsLabelsKeys(
    !labelsPluginInstalled || loadingLabelsPlugin
  );
  const labelsByKeyOps = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return labelsOpsKeys.reduce((acc, label) => {
      acc[label.name] = /* @__PURE__ */ new Set();
      return acc;
    }, {});
  }, [labelsOpsKeys]);
  const keysFromGopsLabels = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return mapLabelsToOptions(Object.keys(labelsByKeyOps).filter(isKeyAllowed), labelsInSubform);
  }, [labelsByKeyOps, labelsInSubform]);
  const keysFromExistingAlerts = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return mapLabelsToOptions(Array.from(labelsByKeyFromExisingAlerts.keys()).filter(isKeyAllowed), labelsInSubform);
  }, [labelsByKeyFromExisingAlerts, labelsInSubform]);
  const groupedOptions = [
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.use-combined-labels.grouped-options.label.from-alerts", "From alerts"),
      options: keysFromExistingAlerts,
      expanded: true
    },
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.use-combined-labels.grouped-options.label.from-system", "From system"),
      options: keysFromGopsLabels,
      expanded: true
    }
  ];
  const selectedKeyIsFromAlerts = labelsByKeyFromExisingAlerts.has(selectedKey);
  const selectedKeyIsFromOps = labelsByKeyOps[selectedKey] !== void 0 && labelsByKeyOps[selectedKey]?.size > 0;
  const selectedKeyDoesNotExist = !selectedKeyIsFromAlerts && !selectedKeyIsFromOps;
  const valuesAlreadyFetched = !selectedKeyIsFromAlerts && labelsByKeyOps[selectedKey]?.size > 0;
  const {
    currentData: valuesData,
    isLoading: isLoadingValues = false,
    error
  } = _api_labelsApi__WEBPACK_IMPORTED_MODULE_14__.labelsApi.endpoints.getLabelValues.useQuery(
    { key: selectedKey },
    {
      skip: !labelsPluginInstalled || !selectedKey || selectedKeyIsFromAlerts || valuesAlreadyFetched || selectedKeyDoesNotExist
    }
  );
  const valuesFromSelectedGopsKey = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (selectedKeyIsFromAlerts) {
      return [];
    }
    const valuesForSelectedKey = labelsByKeyOps[selectedKey];
    const valuesAlreadyFetched2 = valuesForSelectedKey?.size > 0;
    if (valuesAlreadyFetched2) {
      return mapLabelsToOptions(valuesForSelectedKey);
    }
    if (!isLoadingValues && valuesData?.values?.length && !error) {
      const values = valuesData?.values.map((value) => value.name);
      labelsByKeyOps[selectedKey] = new Set(values);
      return mapLabelsToOptions(values);
    }
    return [];
  }, [selectedKeyIsFromAlerts, labelsByKeyOps, selectedKey, isLoadingValues, valuesData, error]);
  const getValuesForLabel = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (key) => {
      if (!isKeyAllowed(key)) {
        return [];
      }
      if (selectedKeyIsFromAlerts || !labelsPluginInstalled) {
        return mapLabelsToOptions(labelsByKeyFromExisingAlerts.get(key));
      }
      return valuesFromSelectedGopsKey;
    },
    [labelsByKeyFromExisingAlerts, labelsPluginInstalled, valuesFromSelectedGopsKey, selectedKeyIsFromAlerts]
  );
  return {
    loading: isLoading || isLoadingLabels,
    keysFromExistingAlerts,
    groupedOptions,
    getValuesForLabel
  };
}
function LabelsWithSuggestions({ dataSourceName }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.useStyles2)(getStyles);
  const {
    control,
    watch,
    formState: { errors }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const labelsInSubform = watch("labelsInSubform");
  const { fields, remove, append } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFieldArray)({ control, name: "labelsInSubform" });
  const appendLabel = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    append({ key: "", value: "" });
  }, [append]);
  const [selectedKey, setSelectedKey] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const { installed: labelsPluginInstalled = false, loading: loadingLabelsPlugin } = (0,_hooks_usePluginBridge__WEBPACK_IMPORTED_MODULE_15__.usePluginBridge)(
    _types_pluginBridges__WEBPACK_IMPORTED_MODULE_16__.SupportedPlugin.Labels
  );
  const { loading, keysFromExistingAlerts, groupedOptions, getValuesForLabel } = useCombinedLabels(
    dataSourceName,
    labelsPluginInstalled,
    loadingLabelsPlugin,
    labelsInSubform,
    selectedKey
  );
  const values = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return getValuesForLabel(selectedKey);
  }, [selectedKey, getValuesForLabel]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 2, alignItems: "flex-start", children: [
    fields.map((field, index) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.flexRow, styles.centerAlignRow), id: "hola", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field,
          {
            className: styles.labelInput,
            invalid: Boolean(errors.labelsInSubform?.[index]?.key?.message),
            error: errors.labelsInSubform?.[index]?.key?.message,
            "data-testid": `labelsInSubform-key-${index}`,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
              {
                name: `labelsInSubform.${index}.key`,
                control,
                rules: { required: Boolean(labelsInSubform[index]?.value) ? "Required." : false },
                render: ({ field: { onChange, value, ref, ...rest } }) => {
                  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _AlertLabelDropdown__WEBPACK_IMPORTED_MODULE_20__["default"],
                    {
                      ...rest,
                      defaultValue: value ? { label: value, value } : void 0,
                      options: labelsPluginInstalled ? groupedOptions.flatMap((group) => group.options) : keysFromExistingAlerts,
                      isLoading: loading,
                      onChange: (newValue) => {
                        if (newValue) {
                          onChange(newValue.value || newValue.label || "");
                          setSelectedKey(newValue.value);
                        }
                      },
                      type: "key"
                    }
                  );
                }
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.InlineLabel, { className: styles.equalSign, children: "=" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field,
          {
            className: styles.labelInput,
            invalid: Boolean(errors.labelsInSubform?.[index]?.value?.message),
            error: errors.labelsInSubform?.[index]?.value?.message,
            "data-testid": `labelsInSubform-value-${index}`,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
              {
                control,
                name: `labelsInSubform.${index}.value`,
                rules: { required: Boolean(labelsInSubform[index]?.value) ? "Required." : false },
                render: ({ field: { onChange, value, ref, ...rest } }) => {
                  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _AlertLabelDropdown__WEBPACK_IMPORTED_MODULE_20__["default"],
                    {
                      ...rest,
                      defaultValue: value ? { label: value, value } : void 0,
                      options: values,
                      isLoading: loading,
                      onChange: (newValue) => {
                        if (newValue) {
                          onChange(newValue.value || newValue.label || "");
                        }
                      },
                      onOpenMenu: () => {
                        setSelectedKey(labelsInSubform[index].key);
                      },
                      type: "value"
                    }
                  );
                }
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LabelsButtons__WEBPACK_IMPORTED_MODULE_23__.RemoveButton, { index, remove })
      ] }, field.id);
    }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LabelsButtons__WEBPACK_IMPORTED_MODULE_23__.AddButton, { append: appendLabel })
  ] });
}
const LabelsWithoutSuggestions = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.useStyles2)(getStyles);
  const {
    register,
    control,
    watch,
    formState: { errors }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const labels = watch("labels");
  const { fields, remove, append } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFieldArray)({ control, name: "labels" });
  const appendLabel = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    append({ key: "", value: "" });
  }, [append]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    fields.map((field, index) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.flexRow, styles.centerAlignRow), "data-testid": "alertlabel-input-wrapper", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field,
          {
            className: styles.labelInput,
            invalid: !!errors.labels?.[index]?.key?.message,
            error: errors.labels?.[index]?.key?.message,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Input,
              {
                ...register(`labels.${index}.key`, {
                  required: {
                    value: !!labels[index]?.value,
                    message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.labels-without-suggestions.message.required", "Required.")
                  }
                }),
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.labels-without-suggestions.placeholder-key", "key"),
                "data-testid": `label-key-${index}`,
                defaultValue: field.key
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.InlineLabel, { className: styles.equalSign, children: "=" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field,
          {
            className: styles.labelInput,
            invalid: !!errors.labels?.[index]?.value?.message,
            error: errors.labels?.[index]?.value?.message,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Input,
              {
                ...register(`labels.${index}.value`, {
                  required: {
                    value: !!labels[index]?.key,
                    message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.labels-without-suggestions.message.required", "Required.")
                  }
                }),
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.labels-without-suggestions.placeholder-value", "value"),
                "data-testid": `label-value-${index}`,
                defaultValue: field.value
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LabelsButtons__WEBPACK_IMPORTED_MODULE_23__.RemoveButton, { index, remove })
      ] }) }, field.id);
    }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LabelsButtons__WEBPACK_IMPORTED_MODULE_23__.AddButton, { append: appendLabel })
  ] });
};
function LabelsField() {
  const { watch } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const type = watch("type") ?? _types_rule_form__WEBPACK_IMPORTED_MODULE_17__.RuleFormType.grafana;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 1, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { element: "h5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.labels-field.labels", children: "Labels" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "row", gap: 1, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { variant: "bodySmall", color: "secondary", children: getLabelText(type) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _NeedHelpInfo__WEBPACK_IMPORTED_MODULE_21__.NeedHelpInfo,
          {
            externalLink: "https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rules/annotation-label/",
            linkText: `Read about labels`,
            contentText: "The dropdown only displays labels that you have previously used for alerts.\n            Select a label from the options below or type in a new one.",
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.labels-field.title-labels", "Labels")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LabelsWithoutSuggestions, {})
  ] });
}
function getLabelText(type) {
  const isRecordingRule = type ? (0,_utils_rules__WEBPACK_IMPORTED_MODULE_19__.isRecordingRuleByType)(type) : false;
  const text = isRecordingRule ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.alertform.labels.recording", "Add labels to your rule.") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
    "alerting.alertform.labels.alerting",
    "Add labels to your rule for searching, silencing, or routing to a notification policy."
  );
  return text;
}
function getDescriptionText() {
  return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
    "alerting.labels-sub-form.description",
    "Select a label key/value from the options below, or type a new one and press Enter."
  );
}
const getStyles = (theme) => {
  return {
    flexColumn: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "column"
    }),
    flexRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start"
    }),
    centerAlignRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      alignItems: "center",
      gap: theme.spacing(0.5)
    }),
    equalSign: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      alignSelf: "flex-start",
      width: "28px",
      justifyContent: "center",
      margin: 0
    }),
    labelInput: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "215px",
      margin: 0
    }),
    confirmButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "row",
      gap: theme.spacing(1),
      marginLeft: "auto"
    })
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LabelsField);


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/labels/LabelsFieldInForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LabelsFieldInForm: () => (/* binding */ LabelsFieldInForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _enterprise_components_AI_AIGenImproveLabelsButton_addAIImproveLabelsButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/enterprise-components/AI/AIGenImproveLabelsButton/addAIImproveLabelsButton.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _NeedHelpInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/NeedHelpInfo.tsx");
/* harmony import */ var _LabelsField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/labels/LabelsField.tsx");









function LabelsFieldInForm({ onEditClick }) {
  const { watch } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  const labels = watch("labels");
  const type = watch("type");
  const isRecordingRule = type ? (0,_utils_rules__WEBPACK_IMPORTED_MODULE_7__.isRecordingRuleByType)(type) : false;
  const isGrafanaManaged = type ? (0,_utils_rules__WEBPACK_IMPORTED_MODULE_7__.isGrafanaManagedRuleByType)(type) : false;
  const text = isRecordingRule ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.alertform.labels.recording", "Add labels to your rule.") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
    "alerting.alertform.labels.alerting",
    "Add labels to your rule for searching, silencing, or routing to a notification policy."
  );
  const hasLabels = Object.keys(labels).length > 0 && labels.some((label) => label.key || label.value);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", gap: 1, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { element: "h5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.labels-field-in-form.labels", children: "Labels" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", gap: 1, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "row", gap: 1, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "bodySmall", color: "secondary", children: text }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _NeedHelpInfo__WEBPACK_IMPORTED_MODULE_8__.NeedHelpInfo,
            {
              externalLink: "https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rules/annotation-label/",
              linkText: `Read about labels`,
              contentText: "The dropdown only displays labels that you have previously used for alerts.\n              Select a label from the options below or type in a new one.",
              title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.labels-field-in-form.title-labels", "Labels")
            }
          )
        ] }),
        isGrafanaManaged && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_enterprise_components_AI_AIGenImproveLabelsButton_addAIImproveLabelsButton__WEBPACK_IMPORTED_MODULE_6__.AIImproveLabelsButtonComponent, {})
      ] })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "row", gap: 1, alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LabelsField__WEBPACK_IMPORTED_MODULE_9__.LabelsInRule, { labels }),
      hasLabels ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { variant: "secondary", type: "button", onClick: onEditClick, size: "sm", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.labels-field-in-form.edit-labels", children: "Edit labels" }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "row", gap: 2, alignItems: "center", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.labels-field-in-form.no-labels-selected", children: "No labels selected" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button,
          {
            icon: "plus",
            type: "button",
            variant: "secondary",
            onClick: onEditClick,
            size: "sm",
            "data-testid": "add-labels-button",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.labels-field-in-form.add-labels", children: "Add labels" })
          }
        )
      ] })
    ] })
  ] });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/notificaton-preview/NotificationPreview.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationPreview: () => (/* binding */ NotificationPreview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_alerting_unified_api_alertRuleApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");









const NotificationPreviewByAlertManager = (0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(() => __webpack_require__.e(/* import() */ "public_app_features_alerting_unified_components_rule-editor_notificaton-preview_NotificationP-01f770").then(__webpack_require__.bind(__webpack_require__, "./public/app/features/alerting/unified/components/rule-editor/notificaton-preview/NotificationPreviewByAlertManager.tsx")));
const NotificationPreviewForGrafanaManaged = (0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(() => __webpack_require__.e(/* import() */ "public_app_features_alerting_unified_components_rule-editor_notificaton-preview_NotificationP-f23dab").then(__webpack_require__.bind(__webpack_require__, "./public/app/features/alerting/unified/components/rule-editor/notificaton-preview/NotificationPreviewGrafanaManaged.tsx")));
const { preview } = app_features_alerting_unified_api_alertRuleApi__WEBPACK_IMPORTED_MODULE_10__.alertRuleApi.endpoints;
const NotificationPreview = ({
  alertQueries,
  customLabels,
  condition,
  folder,
  alertName,
  alertUid
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  const disabled = !condition || !folder;
  const [trigger, { data = [], isLoading, isUninitialized: previewUninitialized }] = preview.useMutation();
  const potentialInstances = data.reduce((acc = [], instance) => {
    if (instance.labels) {
      acc.push(instance.labels);
    }
    return acc;
  }, []);
  const onPreview = () => {
    if (!folder || !condition) {
      return;
    }
    trigger({
      alertQueries,
      condition,
      customLabels,
      folder,
      alertName,
      alertUid
    });
  };
  (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
    onPreview();
  });
  const alertManagerDataSources = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_11__.useGetAlertManagerDataSourcesByPermissionAndConfig)("notification");
  const singleAlertManagerConfigured = alertManagerDataSources.length === 1;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "row", alignItems: "flex-start", justifyContent: "space-between", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 1, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { element: "h5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.notification-preview.title", children: "Alert instance routing preview" }) }),
        isLoading && previewUninitialized && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { color: "secondary", variant: "bodySmall", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.common.loading", children: "Loading..." }) }),
        previewUninitialized ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { color: "secondary", variant: "bodySmall", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.notification-preview.uninitialized", children: 'When you have your folder selected and your query and labels are configured, click "Preview routing" to see the results here.' }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { color: "secondary", variant: "bodySmall", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.notification-preview.initialized", children: "Based on the labels added, alert instances are routed to the following notification policies. Expand each notification policy below to view more details." }) })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { icon: "sync", variant: "secondary", type: "button", onClick: onPreview, disabled, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.notification-preview.preview-routing", children: "Preview routing" }) })
    ] }),
    potentialInstances.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react__WEBPACK_IMPORTED_MODULE_2__.Suspense,
      {
        fallback: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.notification-preview.text-loading-preview", "Loading preview...") }),
        children: alertManagerDataSources.map((alertManagerSource) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, { children: [
          !singleAlertManagerConfigured && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "row", alignItems: "center", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.firstAlertManagerLine }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.alertManagerName, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.notification-preview.alertmanager", children: "Alertmanager:" }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: alertManagerSource.imgUrl, alt: "", className: styles.img }),
              alertManagerSource.name
            ] }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.secondAlertManagerLine })
          ] }),
          alertManagerSource.name === "grafana" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            NotificationPreviewForGrafanaManaged,
            {
              alertManagerSource,
              instances: potentialInstances
            }
          ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            NotificationPreviewByAlertManager,
            {
              alertManagerSource,
              instances: potentialInstances
            }
          )
        ] }, alertManagerSource.name))
      }
    )
  ] });
};
const getStyles = (theme) => ({
  firstAlertManagerLine: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    height: "1px",
    width: theme.spacing(4),
    backgroundColor: theme.colors.secondary.main
  }),
  alertManagerName: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "fit-content"
  }),
  secondAlertManagerLine: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    height: "1px",
    width: "100%",
    flex: 1,
    backgroundColor: theme.colors.secondary.main
  }),
  img: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginLeft: theme.spacing(2),
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/preview.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapDataFrameToAlertPreview: () => (/* binding */ mapDataFrameToAlertPreview)
/* harmony export */ });
/* harmony import */ var _types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");


function mapDataFrameToAlertPreview({ fields }) {
  const labelFields = fields.filter((field) => !["State", "Info"].includes(field.name));
  const stateFieldIndex = fields.findIndex((field) => field.name === "State");
  const infoFieldIndex = fields.findIndex((field) => field.name === "Info");
  const labelIndexes = labelFields.map((labelField) => fields.indexOf(labelField));
  const instanceStatusCount = fields[stateFieldIndex]?.values.length ?? 0;
  const instances = [];
  for (let index = 0; index < instanceStatusCount; index++) {
    const labelValues = labelIndexes.map((labelIndex) => [fields[labelIndex].name, fields[labelIndex].values[index]]);
    const state = fields[stateFieldIndex]?.values?.[index];
    const info = fields[infoFieldIndex]?.values?.[index];
    if ((0,_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_0__.isGrafanaAlertState)(state)) {
      instances.push({
        state,
        info,
        labels: Object.fromEntries(labelValues)
      });
    }
  }
  return { instances };
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/CloudDataSourceSelector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudDataSourceSelector: () => (/* binding */ CloudDataSourceSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _CloudRulesSourcePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/CloudRulesSourcePicker.tsx");








const CloudDataSourceSelector = ({ disabled, onChangeCloudDatasource }) => {
  const {
    control,
    formState: { errors },
    setValue,
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const ruleFormType = watch("type");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.flexRow, children: (ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudAlerting || ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudRecording) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field,
    {
      className: styles.formInput,
      label: disabled ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.cloud-data-source-selector.label-disabled", "Data source") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.cloud-data-source-selector.label", "Select data source"),
      error: errors.dataSourceName?.message,
      invalid: !!errors.dataSourceName?.message,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
        {
          render: ({ field: { onChange, ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _CloudRulesSourcePicker__WEBPACK_IMPORTED_MODULE_7__.CloudRulesSourcePicker,
            {
              ...field,
              disabled,
              onChange: (ds) => {
                setValue("expression", "");
                onChange(ds?.name ?? null);
                onChangeCloudDatasource(ds?.uid ?? null);
              }
            }
          ),
          name: "dataSourceName",
          control,
          rules: {
            required: {
              value: true,
              message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
                "alerting.cloud-data-source-selector.message.please-select-a-data-source",
                "Please select a data source"
              )
            }
          }
        }
      )
    }
  ) });
};
const getStyles = (theme) => ({
  formInput: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "330px",
    "& + &": {
      marginLeft: theme.spacing(3)
    }
  }),
  flexRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/QueryAndExpressionsStep.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryAndExpressionsStep: () => (/* binding */ QueryAndExpressionsStep)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-runtime/src/services/dataSourceSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/Menu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/MenuItem.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./packages/grafana-ui/src/components/Dropdown/Dropdown.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./packages/grafana-ui/src/components/Divider/Divider.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/expressions/guards.ts");
/* harmony import */ var app_features_expressions_types__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/expressions/types.ts");
/* harmony import */ var _rule_editor_formProcessing__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/rule-editor/formProcessing.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rule_form__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-form.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _ExpressionEditor__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/ExpressionEditor.tsx");
/* harmony import */ var _ExpressionsEditor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/ExpressionsEditor.tsx");
/* harmony import */ var _NeedHelpInfo__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/NeedHelpInfo.tsx");
/* harmony import */ var _QueryEditor__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/QueryEditor.tsx");
/* harmony import */ var _RecordingRuleEditor__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RecordingRuleEditor.tsx");
/* harmony import */ var _RuleEditorSection__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/util.ts");
/* harmony import */ var _CloudDataSourceSelector__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/CloudDataSourceSelector.tsx");
/* harmony import */ var _SimpleCondition__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/SimpleCondition.tsx");
/* harmony import */ var _SmartAlertTypeDetector__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/SmartAlertTypeDetector.tsx");
/* harmony import */ var _descriptions__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/descriptions.tsx");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/reducer.ts");
/* harmony import */ var _useAdvancedMode__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/useAdvancedMode.ts");
/* harmony import */ var _useAlertQueryRunner__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/useAlertQueryRunner.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/utils.ts");

































const QueryAndExpressionsStep = ({ editingExistingRule, onDataChange, mode }) => {
  const {
    setValue,
    getValues,
    watch,
    formState: { errors },
    control
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
  const { queryPreviewData, runQueries, cancelQueries, isPreviewLoading } = (0,_useAlertQueryRunner__WEBPACK_IMPORTED_MODULE_42__.useAlertQueryRunner)();
  const isSwitchModeEnabled = _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.config.featureToggles.alertingQueryAndExpressionsStepMode ?? false;
  const initialState = {
    queries: getValues("queries")
  };
  const [{ queries }, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_40__.queriesAndExpressionsReducer, initialState);
  const isOptimizeReducerEnabled = _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.config.featureToggles.alertingUIOptimizeReducer ?? false;
  const dataQueries = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return queries.filter((query) => !(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_22__.isExpressionQuery)(query.model));
  }, [queries]);
  const expressionQueries = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return queries.filter((query) => (0,_rule_editor_formProcessing__WEBPACK_IMPORTED_MODULE_24__.isExpressionQueryInAlert)(query));
  }, [queries]);
  (0,react_use__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    if (!editingExistingRule && isOptimizeReducerEnabled) {
      dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_40__.optimizeReduceExpression)({ updatedQueries: dataQueries, expressionQueries }));
    }
  });
  const [type, condition, dataSourceName, editorSettings] = watch([
    "type",
    "condition",
    "dataSourceName",
    "editorSettings"
  ]);
  const isGrafanaAlertingType = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_28__.isGrafanaAlertingRuleByType)(type);
  const isRecordingRuleType = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_28__.isCloudRecordingRuleByType)(type);
  const isCloudAlertRuleType = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_28__.isCloudAlertingRuleByType)(type);
  const [showResetModeModal, setShowResetModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const simplifiedQueryInForm = editorSettings?.simplifiedQueryEditor;
  const { simpleCondition, setSimpleCondition } = (0,_useAdvancedMode__WEBPACK_IMPORTED_MODULE_41__.useAdvancedMode)(
    simplifiedQueryInForm,
    isGrafanaAlertingType,
    dataQueries,
    expressionQueries
  );
  const simplifiedQueryStep = isSwitchModeEnabled && isGrafanaAlertingType ? editorSettings?.simplifiedQueryEditor : false;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (simplifiedQueryStep && isGrafanaAlertingType) {
      setSimpleCondition((0,_SimpleCondition__WEBPACK_IMPORTED_MODULE_37__.getSimpleConditionFromExpressions)(expressionQueries));
    }
  }, [simplifiedQueryStep, expressionQueries, isGrafanaAlertingType, setSimpleCondition]);
  const runQueriesPreview = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(
    (condition2) => {
      if (isCloudAlertRuleType) {
        return;
      }
      if (simplifiedQueryStep) {
        const lastExpression = expressionQueries.at(-1);
        if (!lastExpression) {
          return;
        }
        const condition3 = lastExpression.refId;
        setValue("condition", condition3);
        runQueries(getValues("queries"), condition3);
      } else {
        runQueries(getValues("queries"), condition2 || (getValues("condition") ?? ""));
      }
    },
    [isCloudAlertRuleType, expressionQueries, simplifiedQueryStep, setValue, runQueries, getValues]
  );
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setValue("queries", queries, { shouldValidate: false });
  }, [queries, runQueries, setValue]);
  const noCompatibleDataSources = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_26__.getDefaultOrFirstCompatibleDataSource)() === void 0;
  const emptyQueries = queries.length === 0;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (type && !(0,_utils_rules__WEBPACK_IMPORTED_MODULE_28__.isGrafanaManagedRuleByType)(type)) {
      return;
    }
    const currentCondition = getValues("condition");
    if (!currentCondition) {
      return;
    }
    const previewData = queryPreviewData[currentCondition];
    if (!previewData) {
      return;
    }
    const error = (0,_util__WEBPACK_IMPORTED_MODULE_35__.errorFromPreviewData)(previewData) ?? (0,_util__WEBPACK_IMPORTED_MODULE_35__.errorFromCurrentCondition)(previewData);
    onDataChange(error?.message || "");
  }, [queryPreviewData, getValues, onDataChange, type]);
  const handleSetCondition = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(
    (refId) => {
      if (!refId) {
        return;
      }
      runQueriesPreview(refId);
      setValue("condition", refId);
    },
    [runQueriesPreview, setValue]
  );
  const onUpdateRefId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(
    (oldRefId, newRefId) => {
      const newRefIdExists = (0,_util__WEBPACK_IMPORTED_MODULE_35__.refIdExists)(queries, newRefId);
      if (newRefIdExists) {
        return;
      }
      dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_40__.updateExpressionRefId)({ oldRefId, newRefId }));
      if (condition === oldRefId) {
        setValue("condition", newRefId);
      }
    },
    [condition, queries, setValue]
  );
  const updateExpressionAndDatasource = useSetExpressionAndDataSource();
  const onChangeQueries = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(
    (updatedQueries) => {
      const previousQueries = getValues("queries");
      const expressionQueries2 = previousQueries.filter(_rule_editor_formProcessing__WEBPACK_IMPORTED_MODULE_24__.isExpressionQueryInAlert);
      setValue("queries", [...updatedQueries, ...expressionQueries2], { shouldValidate: false });
      updateExpressionAndDatasource(updatedQueries);
      if (!editingExistingRule && isOptimizeReducerEnabled) {
        dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_40__.optimizeReduceExpression)({ updatedQueries, expressionQueries: expressionQueries2 }));
      }
      dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_40__.setDataQueries)(updatedQueries));
      dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_40__.updateExpressionTimeRange)());
      const [oldRefId, newRefId] = (0,_util__WEBPACK_IMPORTED_MODULE_35__.findRenamedDataQueryReferences)(queries, updatedQueries);
      if (oldRefId && newRefId) {
        dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_40__.rewireExpressions)({ oldRefId, newRefId }));
      }
    },
    [queries, updateExpressionAndDatasource, getValues, setValue, editingExistingRule, isOptimizeReducerEnabled]
  );
  const onChangeRecordingRulesQueries = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(
    (updatedQueries) => {
      const query = updatedQueries[0];
      if (!(0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_27__.isPromOrLokiQuery)(query.model)) {
        return;
      }
      const expression = query.model.expr;
      setValue("queries", updatedQueries, { shouldValidate: false });
      updateExpressionAndDatasource(updatedQueries);
      dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_40__.setRecordingRulesQueries)({ recordingRuleQueries: updatedQueries, expression }));
      runQueriesPreview();
    },
    [runQueriesPreview, setValue, updateExpressionAndDatasource]
  );
  const onDuplicateQuery = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((query) => {
    dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_40__.duplicateQuery)(query));
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!(0,_util__WEBPACK_IMPORTED_MODULE_35__.refIdExists)(queries, condition)) {
      const lastRefId = queries.at(-1)?.refId ?? null;
      handleSetCondition(lastRefId);
    }
  }, [condition, queries, handleSetCondition]);
  const onClickType = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(
    (type2) => {
      dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_40__.addNewExpression)(type2));
    },
    [dispatch]
  );
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_21__.useStyles2)(getStyles);
  const onChangeCloudDatasource = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(
    (datasourceUid) => {
      const newQueries = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(queries);
      newQueries[0].datasourceUid = datasourceUid;
      setValue("queries", newQueries, { shouldValidate: false });
      updateExpressionAndDatasource(newQueries);
      dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_40__.setDataQueries)(newQueries));
    },
    [queries, setValue, updateExpressionAndDatasource, dispatch]
  );
  const onChangeExpression = (value) => {
    const newQueries = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(queries);
    if (newQueries[0].model) {
      if ((0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_27__.isPromOrLokiQuery)(newQueries[0].model)) {
        newQueries[0].model.expr = value;
      } else {
        const promLoki = {
          ...(0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(newQueries[0].model),
          expr: value
        };
        newQueries[0].model = promLoki;
      }
    }
    setValue("queries", newQueries, { shouldValidate: false });
    updateExpressionAndDatasource(newQueries);
    dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_40__.setDataQueries)(newQueries));
    runQueriesPreview();
  };
  const removeExpressionsInQueries = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_40__.removeExpressions)()), [dispatch]);
  const addExpressionsInQueries = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(
    (expressions) => dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_40__.addExpressions)(expressions)),
    [dispatch]
  );
  const [prevExpressions, setPrevExpressions] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const [prevCondition, setPrevCondition] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const restoreExpressionsInQueries = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    addExpressionsInQueries(prevExpressions);
  }, [prevExpressions, addExpressionsInQueries]);
  const onClickSwitch = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    const typeInForm = getValues("type");
    if (typeInForm === _types_rule_form__WEBPACK_IMPORTED_MODULE_25__.RuleFormType.cloudAlerting) {
      setValue("type", _types_rule_form__WEBPACK_IMPORTED_MODULE_25__.RuleFormType.grafana);
      setValue("dataSourceName", _utils_datasource__WEBPACK_IMPORTED_MODULE_26__.GRAFANA_RULES_SOURCE_NAME);
      prevExpressions.length > 0 && restoreExpressionsInQueries();
      prevCondition && setValue("condition", prevCondition);
    } else {
      setValue("type", _types_rule_form__WEBPACK_IMPORTED_MODULE_25__.RuleFormType.cloudAlerting);
      const newDsName = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_9__.getDataSourceSrv)().getInstanceSettings(queries[0].datasourceUid)?.name;
      if (newDsName) {
        setValue("dataSourceName", newDsName);
      }
      updateExpressionAndDatasource(queries);
      const expressions = queries.filter((query) => query.datasourceUid === app_features_expressions_types__WEBPACK_IMPORTED_MODULE_23__.ExpressionDatasourceUID);
      setPrevExpressions(expressions);
      removeExpressionsInQueries();
      setPrevCondition(condition);
    }
  }, [
    getValues,
    setValue,
    prevExpressions.length,
    restoreExpressionsInQueries,
    prevCondition,
    updateExpressionAndDatasource,
    queries,
    removeExpressionsInQueries,
    condition
  ]);
  const { sectionTitle, helpLabel, helpContent, helpLink } = _descriptions__WEBPACK_IMPORTED_MODULE_39__.DESCRIPTIONS[type ?? _types_rule_form__WEBPACK_IMPORTED_MODULE_25__.RuleFormType.grafana];
  if (!type) {
    return null;
  }
  const switchMode = isGrafanaAlertingType && isSwitchModeEnabled ? {
    isAdvancedMode: !simplifiedQueryStep,
    setAdvancedMode: (isAdvanced) => {
      if (!getValues("editorSettings.simplifiedQueryEditor")) {
        if (!(0,_rule_editor_formProcessing__WEBPACK_IMPORTED_MODULE_24__.areQueriesTransformableToSimpleCondition)(dataQueries, expressionQueries)) {
          setShowResetModal(true);
          return;
        }
      }
      setValue("editorSettings.simplifiedQueryEditor", !isAdvanced);
    }
  } : void 0;
  const canSelectDataSourceManaged = (0,_utils__WEBPACK_IMPORTED_MODULE_43__.onlyOneDSInQueries)(queries);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _RuleEditorSection__WEBPACK_IMPORTED_MODULE_34__.RuleEditorSection,
      {
        stepNo: 2,
        title: sectionTitle,
        fullWidth: true,
        description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Stack, { direction: "row", gap: 0.5, alignItems: "center", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Text, { variant: "bodySmall", color: "secondary", children: helpLabel }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _NeedHelpInfo__WEBPACK_IMPORTED_MODULE_31__.NeedHelpInfo,
            {
              contentText: helpContent,
              externalLink: helpLink,
              linkText: "Read more on our documentation website",
              title: helpLabel
            }
          )
        ] }),
        switchMode,
        children: [
          (0,_utils_rules__WEBPACK_IMPORTED_MODULE_28__.isDataSourceManagedRuleByType)(type) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CloudDataSourceSelector__WEBPACK_IMPORTED_MODULE_36__.CloudDataSourceSelector, { onChangeCloudDatasource, disabled: editingExistingRule }),
          isRecordingRuleType && dataSourceName && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.Field, { error: errors.expression?.message, invalid: !!errors.expression?.message, noMargin: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _RecordingRuleEditor__WEBPACK_IMPORTED_MODULE_33__.RecordingRuleEditor,
            {
              dataSourceName,
              queries,
              runQueries: () => runQueriesPreview(),
              onChangeQuery: onChangeRecordingRulesQueries,
              panelData: queryPreviewData
            }
          ) }),
          isCloudAlertRuleType && dataSourceName && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Stack, { direction: "column", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.Field, { error: errors.expression?.message, invalid: !!errors.expression?.message, noMargin: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              react_hook_form__WEBPACK_IMPORTED_MODULE_4__.Controller,
              {
                name: "expression",
                render: ({ field: { ref, ...field } }) => {
                  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _ExpressionEditor__WEBPACK_IMPORTED_MODULE_29__.ExpressionEditor,
                    {
                      ...field,
                      dataSourceName,
                      showPreviewAlertsButton: !isRecordingRuleType,
                      onChange: onChangeExpression
                    }
                  );
                },
                control,
                rules: {
                  required: {
                    value: true,
                    message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)(
                      "alerting.query-and-expressions-step.message.a-valid-expression-is-required",
                      "A valid expression is required"
                    )
                  }
                }
              }
            ) }),
            mode === "edit" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_20__.Divider, {}),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _SmartAlertTypeDetector__WEBPACK_IMPORTED_MODULE_38__.SmartAlertTypeDetector,
                {
                  editingExistingRule,
                  queries,
                  onClickSwitch
                }
              )
            ] })
          ] }),
          (0,_utils_rules__WEBPACK_IMPORTED_MODULE_28__.isGrafanaManagedRuleByType)(type) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Stack, { direction: "column", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _QueryEditor__WEBPACK_IMPORTED_MODULE_32__.QueryEditor,
              {
                queries: dataQueries,
                expressions: expressionQueries,
                onRunQueries: () => runQueriesPreview(),
                onChangeQueries,
                onDuplicateQuery,
                panelData: queryPreviewData,
                condition,
                onSetCondition: handleSetCondition
              }
            ),
            !simplifiedQueryStep && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Tooltip,
              {
                content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)(
                  "alerting.query-and-expressions-step.no-compatible-sources",
                  "You appear to have no compatible data sources"
                ),
                show: noCompatibleDataSources,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Button,
                  {
                    type: "button",
                    onClick: () => {
                      dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_40__.addNewDataQuery)());
                    },
                    variant: "secondary",
                    "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_6__.selectors.components.QueryTab.addQuery,
                    disabled: noCompatibleDataSources,
                    className: styles.addQueryButton,
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.query-and-expressions-step.add-query", children: "Add query" })
                  }
                )
              }
            ),
            canSelectDataSourceManaged && isGrafanaAlertingType && !simplifiedQueryStep && mode === "edit" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_20__.Divider, {}),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _SmartAlertTypeDetector__WEBPACK_IMPORTED_MODULE_38__.SmartAlertTypeDetector,
                {
                  editingExistingRule,
                  queries,
                  onClickSwitch
                }
              )
            ] }),
            !simplifiedQueryStep && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_20__.Divider, {}),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Stack, { direction: "column", gap: 0, children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Text, { element: "h5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.query-and-expressions-step.expressions", children: "Expressions" }) }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Text, { variant: "bodySmall", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.query-and-expressions-step.manipulate-returned-queries-other-operations", children: "Manipulate data returned from queries with math and other operations." }) })
              ] }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _ExpressionsEditor__WEBPACK_IMPORTED_MODULE_30__.ExpressionsEditor,
                {
                  queries,
                  panelData: queryPreviewData,
                  condition,
                  onSetCondition: handleSetCondition,
                  onRemoveExpression: (refId) => {
                    dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_40__.removeExpression)(refId));
                  },
                  onUpdateRefId,
                  onUpdateExpressionType: (refId, type2) => {
                    dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_40__.updateExpressionType)({ refId, type: type2 }));
                  },
                  onUpdateQueryExpression: (model) => {
                    dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_40__.updateExpression)(model));
                  }
                }
              )
            ] }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Stack, { direction: "column", children: [
              simplifiedQueryStep && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _SimpleCondition__WEBPACK_IMPORTED_MODULE_37__.SimpleConditionEditor,
                {
                  simpleCondition,
                  onChange: setSimpleCondition,
                  expressionQueriesList: expressionQueries,
                  dispatch,
                  previewData: queryPreviewData[condition ?? ""]
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Stack, { direction: "row", children: [
                !simplifiedQueryStep && _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.config.expressionsEnabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TypeSelectorButton, { onClickType }),
                isPreviewLoading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Button, { icon: "spinner", type: "button", variant: "destructive", onClick: cancelQueries, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.common.cancel", children: "Cancel" }) }),
                !isPreviewLoading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Button,
                  {
                    "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_6__.selectors.components.AlertRules.previewButton,
                    icon: "sync",
                    type: "button",
                    onClick: () => runQueriesPreview(),
                    disabled: emptyQueries,
                    children: !simplifiedQueryStep ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("alerting.queryAndExpressionsStep.preview", "Preview") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("alerting.queryAndExpressionsStep.previewCondition", "Preview alert rule condition")
                  }
                )
              ] })
            ] }),
            emptyQueries && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Alert,
              {
                title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)(
                  "alerting.query-and-expressions-step.title-queries-expressions-configured",
                  "No queries or expressions have been configured"
                ),
                severity: "warning",
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.query-and-expressions-step.body-queries-expressions-configured", children: "Create at least one query or expression to be alerted on" })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.ConfirmModal,
      {
        isOpen: showResetModeModal,
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)(
          "alerting.query-and-expressions-step.title-deactivate-advanced-options",
          "Deactivate advanced options"
        ),
        body: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Text, { element: "p", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.queryAndExpressionsStep.disableAdvancedOptions.text", children: "The selected queries and expressions cannot be converted to default. If you deactivate advanced options, your query and condition will be reset to default settings." }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})
        ] }),
        confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("alerting.query-and-expressions-step.confirmText-deactivate", "Deactivate"),
        icon: "exclamation-triangle",
        onConfirm: () => {
          setValue("editorSettings.simplifiedQueryEditor", true);
          setShowResetModal(false);
          dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_40__.resetToSimpleCondition)());
        },
        onDismiss: () => setShowResetModal(false)
      }
    )
  ] });
};
function TypeSelectorButton({ onClickType }) {
  const newMenu = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Menu, { children: app_features_expressions_types__WEBPACK_IMPORTED_MODULE_23__.expressionTypes.map((type) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Tooltip, { content: type.description ?? "", placement: "right", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.MenuItem,
    {
      onClick: () => onClickType(type.value ?? app_features_expressions_types__WEBPACK_IMPORTED_MODULE_23__.ExpressionQueryType.math),
      label: type.label ?? ""
    },
    type.value
  ) }, type.value)) });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_19__.Dropdown, { overlay: newMenu, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Button, { variant: "secondary", "data-testid": "add-expression-button", icon: "angle-down", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.type-selector-button.add-expression", children: "Add expression" }) }) });
}
const getStyles = (theme) => ({
  addQueryButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "fit-content"
  }),
  helpInfo: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "fit-content",
    fontWeight: theme.typography.fontWeightMedium,
    marginLeft: theme.spacing(1),
    fontSize: theme.typography.size.sm,
    cursor: "pointer"
  }),
  helpInfoText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginLeft: theme.spacing(0.5),
    textDecoration: "underline"
  }),
  infoLink: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.link
  })
});
const useSetExpressionAndDataSource = () => {
  const { setValue } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
  return (updatedQueries) => {
    const query = updatedQueries[0];
    if (!query) {
      return;
    }
    const dataSourceSettings = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_9__.getDataSourceSrv)().getInstanceSettings(query.datasourceUid);
    if (!dataSourceSettings) {
      throw new Error("The Data source has not been defined.");
    }
    if ((0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_27__.isPromOrLokiQuery)(query.model)) {
      const expression = query.model.expr;
      setValue("expression", expression);
    }
  };
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/SimpleCondition.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleConditionEditor: () => (/* binding */ SimpleConditionEditor),
/* harmony export */   getSimpleConditionFromExpressions: () => (/* binding */ getSimpleConditionFromExpressions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/immer/dist/immer.mjs");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/transformations/fieldReducer.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_alerting_state_alertDef__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/state/alertDef.ts");
/* harmony import */ var app_features_expressions_components_ThresholdSelect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/expressions/components/ThresholdSelect.tsx");
/* harmony import */ var app_features_expressions_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/expressions/types.ts");
/* harmony import */ var app_features_expressions_utils_expressionTypes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/expressions/utils/expressionTypes.ts");
/* harmony import */ var _expressions_components_ToLabel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/expressions/components/ToLabel.tsx");
/* harmony import */ var _expressions_Expression__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/expressions/Expression.tsx");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/reducer.ts");














const SimpleConditionEditor = ({
  simpleCondition,
  onChange,
  expressionQueriesList,
  dispatch,
  previewData
}) => {
  const onReducerTypeChange = (value) => {
    onChange({ ...simpleCondition, whenField: value.value ?? _grafana_data__WEBPACK_IMPORTED_MODULE_3__.ReducerID.last });
    updateReduceExpression(value.value ?? _grafana_data__WEBPACK_IMPORTED_MODULE_3__.ReducerID.last, expressionQueriesList, dispatch);
  };
  const isRange = (0,app_features_expressions_utils_expressionTypes__WEBPACK_IMPORTED_MODULE_15__.isRangeEvaluator)(simpleCondition.evaluator.type);
  const thresholdFunction = app_features_expressions_types__WEBPACK_IMPORTED_MODULE_14__.thresholdFunctions.find((fn) => fn.value === simpleCondition.evaluator?.type);
  const onEvalFunctionChange = (value) => {
    onChange({
      ...simpleCondition,
      evaluator: { ...simpleCondition.evaluator, type: value.value ?? app_features_alerting_state_alertDef__WEBPACK_IMPORTED_MODULE_12__.EvalFunction.IsAbove }
    });
    updateThresholdFunction(value.value ?? app_features_alerting_state_alertDef__WEBPACK_IMPORTED_MODULE_12__.EvalFunction.IsAbove, expressionQueriesList, dispatch);
  };
  const onEvaluateValueChange = (event, index = 0) => {
    const value = event.currentTarget.value;
    const numericValue = parseFloat(value) || 0;
    onChange(
      (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(simpleCondition, (draftCondition) => {
        draftCondition.evaluator.params[index] = numericValue;
      })
    );
    updateThresholdValue(numericValue, index, expressionQueriesList, dispatch);
  };
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.condition.wrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "column", gap: 0, width: "100%", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("header", { className: styles.condition.header, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { variant: "body", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.simpleCondition.alertCondition", children: "Alert condition" }) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineFieldRow, { className: styles.condition.container, children: [
      simpleCondition.whenField && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineField, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.simple-condition-editor.label-when", "WHEN"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Select,
        {
          options: app_features_expressions_types__WEBPACK_IMPORTED_MODULE_14__.reducerTypes,
          value: app_features_expressions_types__WEBPACK_IMPORTED_MODULE_14__.reducerTypes.find((o) => o.value === simpleCondition.whenField),
          onChange: onReducerTypeChange,
          width: 20
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineField,
        {
          label: simpleCondition.whenField ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.simple-condition-editor.label-of-query", "OF QUERY") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.simple-condition-editor.label-when-query", "WHEN QUERY"),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "row", gap: 1, alignItems: "center", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_expressions_components_ThresholdSelect__WEBPACK_IMPORTED_MODULE_13__.ThresholdSelect, { onChange: onEvalFunctionChange, value: thresholdFunction }),
            isRange ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Input,
                {
                  type: "number",
                  width: 10,
                  defaultValue: simpleCondition.evaluator.params[0] ?? "",
                  onBlur: (event) => {
                    onEvaluateValueChange(event, 0);
                  }
                },
                simpleCondition.evaluator.params[0]
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_expressions_components_ToLabel__WEBPACK_IMPORTED_MODULE_16__.ToLabel, {}),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Input,
                {
                  type: "number",
                  width: 10,
                  defaultValue: simpleCondition.evaluator.params[1] ?? "",
                  onBlur: (event) => {
                    onEvaluateValueChange(event, 1);
                  }
                },
                simpleCondition.evaluator.params[1]
              )
            ] }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Input,
              {
                type: "number",
                width: 10,
                defaultValue: simpleCondition.evaluator.params[0] ?? "",
                onBlur: (event) => {
                  onEvaluateValueChange(event, 0);
                }
              },
              simpleCondition.evaluator.params[0]
            )
          ] })
        }
      )
    ] }),
    previewData?.series && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_expressions_Expression__WEBPACK_IMPORTED_MODULE_17__.ExpressionResult, { series: previewData?.series, isAlertCondition: true })
  ] }) });
};
function updateReduceExpression(reducer, expressionQueriesList, dispatch) {
  const reduceExpression = expressionQueriesList.find((query) => query.model.type === app_features_expressions_types__WEBPACK_IMPORTED_MODULE_14__.ExpressionQueryType.reduce);
  const newReduceExpression = reduceExpression ? (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(reduceExpression?.model, (draft) => {
    if (draft && draft.conditions) {
      draft.reducer = reducer;
      draft.conditions[0].reducer.type = (0,app_features_expressions_utils_expressionTypes__WEBPACK_IMPORTED_MODULE_15__.getReducerType)(reducer) ?? _grafana_data__WEBPACK_IMPORTED_MODULE_3__.ReducerID.last;
    }
  }) : void 0;
  newReduceExpression && dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_18__.updateExpression)(newReduceExpression));
}
function updateThresholdFunction(evaluator, expressionQueriesList, dispatch) {
  const thresholdExpression = expressionQueriesList.find((query) => query.model.type === app_features_expressions_types__WEBPACK_IMPORTED_MODULE_14__.ExpressionQueryType.threshold);
  const newThresholdExpression = (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(thresholdExpression, (draft) => {
    if (draft && draft.model.conditions) {
      draft.model.conditions[0].evaluator.type = evaluator;
    }
  });
  newThresholdExpression && dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_18__.updateExpression)(newThresholdExpression.model));
}
function updateThresholdValue(value, index, expressionQueriesList, dispatch) {
  const thresholdExpression = expressionQueriesList.find((query) => query.model.type === app_features_expressions_types__WEBPACK_IMPORTED_MODULE_14__.ExpressionQueryType.threshold);
  const newThresholdExpression = (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(thresholdExpression, (draft) => {
    if (draft && draft.model.conditions) {
      draft.model.conditions[0].evaluator.params[index] = value;
    }
  });
  newThresholdExpression && dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_18__.updateExpression)(newThresholdExpression.model));
}
function getSimpleConditionFromExpressions(expressions) {
  const reduceExpression = expressions.find((query) => query.model.type === app_features_expressions_types__WEBPACK_IMPORTED_MODULE_14__.ExpressionQueryType.reduce);
  const thresholdExpression = expressions.find((query) => query.model.type === app_features_expressions_types__WEBPACK_IMPORTED_MODULE_14__.ExpressionQueryType.threshold);
  const conditionsFromThreshold = thresholdExpression?.model.conditions ?? [];
  const whenField = reduceExpression?.model.reducer;
  const params = conditionsFromThreshold[0]?.evaluator?.params ? [...conditionsFromThreshold[0]?.evaluator?.params] : [0];
  const type = conditionsFromThreshold[0]?.evaluator?.type ?? app_features_alerting_state_alertDef__WEBPACK_IMPORTED_MODULE_12__.EvalFunction.IsAbove;
  return {
    whenField,
    evaluator: {
      params,
      type
    }
  };
}
const getStyles = (theme) => ({
  buttonSelectText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.primary.text,
    fontSize: theme.typography.bodySmall.fontSize,
    textTransform: "uppercase",
    padding: `0 ${theme.spacing(1)}`
  }),
  condition: {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      border: `solid 1px ${theme.colors.border.medium}`,
      flex: 1,
      height: "fit-content",
      borderRadius: theme.shape.radius.default
    }),
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "row",
      padding: theme.spacing(1),
      flex: 1,
      width: "100%"
    }),
    header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      background: theme.colors.background.secondary,
      padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
      borderBottom: `solid 1px ${theme.colors.border.weak}`,
      flex: 1
    })
  }
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/SmartAlertTypeDetector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmartAlertTypeDetector: () => (/* binding */ SmartAlertTypeDetector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _NeedHelpInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/NeedHelpInfo.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/utils.ts");








function SmartAlertTypeDetector({ editingExistingRule, queries, onClickSwitch }) {
  const { getValues } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  const [ruleFormType] = getValues(["type"]);
  const canSwitch = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.useGetCanSwitch)({ queries, ruleFormType });
  const options = [
    { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.smart-alert-type-detector.grafana-managed", "Grafana-managed"), value: _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.grafana },
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.smart-alert-type-detector.data-source-managed", "Data source-managed"),
      value: _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudAlerting
    }
  ];
  const disabledOptions = canSwitch ? [] : [_types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudAlerting];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "column", gap: 1, alignItems: "flex-start", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "column", gap: 0, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { variant: "h5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.smart-alert-type-detector.rule-type", children: "Rule type" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "row", gap: 0.5, alignItems: "center", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { variant: "bodySmall", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.smart-alert-type-detector.select-where-alert-managed", children: "Select where the alert rule will be managed." }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _NeedHelpInfo__WEBPACK_IMPORTED_MODULE_7__.NeedHelpInfo,
          {
            contentText: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "primary", variant: "h6", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.smart-alert-type-detector.grafanamanaged-alert-rules", children: "Grafana-managed alert rules" }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.smart-alert-type-detector.grafanamanaged-alert-rules-description", children: "Grafana-managed alert rules allow you to create alerts that can act on data from any of our supported data sources, including having multiple data sources in the same rule. You can also add expressions to transform your data and set alert conditions. Using images in alert notifications is also supported." }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "primary", variant: "h6", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.smart-alert-type-detector.data-sourcemanaged-alert-rules", children: "Data source-managed alert rules" }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.smart-alert-type-detector.data-sourcemanaged-alert-rules-description", children: "Data source-managed alert rules can be used for Grafana Mimir or Grafana Loki data sources which have been configured to support rule creation. The use of expressions or multiple queries is not supported." }) })
            ] }),
            externalLink: "https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rules/alert-rule-types/",
            linkText: "Read about alert rule types",
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.smart-alert-type-detector.title-alert-rule-types", "Alert rule types")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.RadioButtonGroup,
      {
        options,
        disabled: editingExistingRule,
        disabledOptions,
        value: ruleFormType,
        onChange: onClickSwitch,
        "data-testid": "rule-type-radio-group"
      }
    ),
    editingExistingRule && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.smart-alert-type-detector.rule-type-cannot-be-changed", children: "The alert rule type cannot be changed for an existing rule." }) }),
    !editingExistingRule && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: canSwitch ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "secondary", children: ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.grafana ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
      "alerting.smart-alert-type-detector.switch-to-data-source-managed",
      "The data source selected in your query supports alert rule management. Switch to data source-managed if you want the alert rule to be managed by the data source instead of Grafana."
    ) : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
      "alerting.smart-alert-type-detector.switch-to-grafana-managed",
      "Switch to Grafana-managed to use expressions, multiple queries, images in notifications and various other features."
    ) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.smart-alert-type-detector.rule-type-grafana-managed", children: "Based on the selected data sources this alert rule will be Grafana-managed." }) }) })
  ] });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/descriptions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DESCRIPTIONS: () => (/* binding */ DESCRIPTIONS)
/* harmony export */ });
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");


const DESCRIPTIONS = {
  [_types_rule_form__WEBPACK_IMPORTED_MODULE_0__.RuleFormType.cloudRecording]: {
    sectionTitle: "Define recording rule",
    helpLabel: "Define your recording rule",
    helpContent: "Pre-compute frequently needed or computationally expensive expressions and save their result as a new set of time series.",
    helpLink: "https://grafana.com/docs/grafana/latest/alerting/alerting-rules/create-recording-rules/"
  },
  [_types_rule_form__WEBPACK_IMPORTED_MODULE_0__.RuleFormType.grafanaRecording]: {
    sectionTitle: "Define recording rule",
    helpLabel: "Define your recording rule",
    helpContent: "Pre-compute frequently needed or computationally expensive expressions and save their result as a new set of time series.",
    helpLink: "https://grafana.com/docs/grafana/latest/alerting/alerting-rules/create-recording-rules/"
  },
  [_types_rule_form__WEBPACK_IMPORTED_MODULE_0__.RuleFormType.grafana]: {
    sectionTitle: "Define query and alert condition",
    helpLabel: "Define query and alert condition",
    helpContent: "An alert rule consists of one or more queries and expressions that select the data you want to measure. Define queries and/or expressions and then choose one of them as the alert rule condition. This is the threshold that an alert rule must meet or exceed in order to fire. For more information on queries and expressions, see Query and transform data.",
    helpLink: "https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/"
  },
  [_types_rule_form__WEBPACK_IMPORTED_MODULE_0__.RuleFormType.cloudAlerting]: {
    sectionTitle: "Define query and alert condition",
    helpLabel: "Define query and alert condition",
    helpContent: "An alert rule consists of one or more queries and expressions that select the data you want to measure. Define queries and/or expressions and then choose one of them as the alert rule condition. This is the threshold that an alert rule must meet or exceed in order to fire. For more information on queries and expressions, see Query and transform data.",
    helpLink: "https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/"
  }
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/reducer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NEW_REDUCER_REF: () => (/* binding */ NEW_REDUCER_REF),
/* harmony export */   addExpressions: () => (/* binding */ addExpressions),
/* harmony export */   addNewDataQuery: () => (/* binding */ addNewDataQuery),
/* harmony export */   addNewExpression: () => (/* binding */ addNewExpression),
/* harmony export */   duplicateQuery: () => (/* binding */ duplicateQuery),
/* harmony export */   optimizeReduceExpression: () => (/* binding */ optimizeReduceExpression),
/* harmony export */   queriesAndExpressionsReducer: () => (/* binding */ queriesAndExpressionsReducer),
/* harmony export */   removeExpression: () => (/* binding */ removeExpression),
/* harmony export */   removeExpressions: () => (/* binding */ removeExpressions),
/* harmony export */   resetToSimpleCondition: () => (/* binding */ resetToSimpleCondition),
/* harmony export */   rewireExpressions: () => (/* binding */ rewireExpressions),
/* harmony export */   setDataQueries: () => (/* binding */ setDataQueries),
/* harmony export */   setRecordingRulesQueries: () => (/* binding */ setRecordingRulesQueries),
/* harmony export */   updateExpression: () => (/* binding */ updateExpression),
/* harmony export */   updateExpressionRefId: () => (/* binding */ updateExpressionRefId),
/* harmony export */   updateExpressionTimeRange: () => (/* binding */ updateExpressionTimeRange),
/* harmony export */   updateExpressionType: () => (/* binding */ updateExpressionType),
/* harmony export */   updateMaxDataPoints: () => (/* binding */ updateMaxDataPoints),
/* harmony export */   updateMinInterval: () => (/* binding */ updateMinInterval)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/immer/dist/immer.mjs");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/query/refId.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/transformations/fieldReducer.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/datetime/rangeutil.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/types/time.ts");
/* harmony import */ var app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/expressions/ExpressionDatasource.ts");
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/expressions/guards.ts");
/* harmony import */ var app_features_expressions_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/expressions/types.ts");
/* harmony import */ var app_features_expressions_utils_expressionTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/expressions/utils/expressionTypes.ts");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rule_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-form.ts");
/* harmony import */ var _dag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/dag.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/util.ts");












const NEW_REDUCER_REF = "reducer";
const findDataSourceFromExpression = (queries, refId) => {
  const dag = (0,_dag__WEBPACK_IMPORTED_MODULE_14__.createDagFromQueries)(queries);
  const dataSource = (0,_dag__WEBPACK_IMPORTED_MODULE_14__.getOriginOfRefId)(refId, dag)[0];
  if (!dataSource) {
    return;
  }
  const originQuery = queries.find((query) => query.refId === dataSource);
  if (originQuery && "relativeTimeRange" in originQuery) {
    return originQuery;
  }
  return;
};
const initialState = {
  queries: []
};
const duplicateQuery = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("duplicateQuery");
const addNewDataQuery = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("addNewDataQuery");
const setDataQueries = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("setDataQueries");
const addNewExpression = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("addNewExpression");
const removeExpression = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("removeExpression");
const removeExpressions = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("removeExpressions");
const addExpressions = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("addExpressions");
const updateExpression = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("updateExpression");
const updateExpressionRefId = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("updateExpressionRefId");
const rewireExpressions = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("rewireExpressions");
const updateExpressionType = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("updateExpressionType");
const updateExpressionTimeRange = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("updateExpressionTimeRange");
const updateMaxDataPoints = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("updateMaxDataPoints");
const updateMinInterval = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("updateMinInterval");
const resetToSimpleCondition = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("resetToSimpleCondition");
const optimizeReduceExpression = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("optimizeReduceExpression");
const setRecordingRulesQueries = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)(
  "setRecordingRulesQueries"
);
const queriesAndExpressionsReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, (builder) => {
  builder.addCase(resetToSimpleCondition, (state) => {
    state.queries = (0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_13__.getDefaultQueries)();
  }).addCase(duplicateQuery, (state, { payload }) => {
    state.queries = addQuery(state.queries, payload);
  }).addCase(addNewDataQuery, (state) => {
    const datasource = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_12__.getDefaultOrFirstCompatibleDataSource)();
    if (!datasource) {
      return;
    }
    state.queries = addQuery(state.queries, {
      datasourceUid: datasource.uid,
      model: {
        refId: "",
        datasource: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getDataSourceRef)(datasource)
      }
    });
  }).addCase(setDataQueries, (state, { payload }) => {
    const expressionQueries = state.queries.filter((query) => (0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_8__.isExpressionQuery)(query.model));
    state.queries = [...payload, ...expressionQueries];
  }).addCase(setRecordingRulesQueries, (state, { payload }) => {
    const query = payload.recordingRuleQueries[0];
    const recordingRuleQuery = {
      ...query,
      ...{ expr: payload.expression, model: query?.model }
    };
    state.queries = [recordingRuleQuery];
  }).addCase(updateMaxDataPoints, (state, action) => {
    state.queries = state.queries.map((query) => {
      return query.refId === action.payload.refId ? {
        ...query,
        model: {
          ...query.model,
          maxDataPoints: action.payload.maxDataPoints
        }
      } : query;
    });
  }).addCase(updateMinInterval, (state, action) => {
    state.queries = state.queries.map((query) => {
      return query.refId === action.payload.refId ? {
        ...query,
        model: {
          ...query.model,
          intervalMs: action.payload.minInterval ? _grafana_data__WEBPACK_IMPORTED_MODULE_5__.intervalToMs(action.payload.minInterval) : void 0
        }
      } : query;
    });
  });
  builder.addCase(addNewExpression, (state, { payload }) => {
    state.queries = addQuery(state.queries, {
      datasourceUid: app_features_expressions_types__WEBPACK_IMPORTED_MODULE_9__.ExpressionDatasourceUID,
      model: app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_7__.dataSource.newQuery({
        type: payload,
        conditions: [{ ...app_features_expressions_utils_expressionTypes__WEBPACK_IMPORTED_MODULE_10__.defaultCondition, query: { params: [] } }],
        expression: ""
      })
    });
  }).addCase(removeExpression, (state, { payload }) => {
    state.queries = state.queries.filter((query) => query.refId !== payload);
  }).addCase(removeExpressions, (state) => {
    state.queries = state.queries.filter((query) => !(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_8__.isExpressionQuery)(query.model));
  }).addCase(addExpressions, (state, { payload }) => {
    state.queries = [...state.queries, ...payload];
  }).addCase(updateExpression, (state, { payload }) => {
    const queryToUpdate = state.queries.find((query) => query.refId === payload.refId);
    if (!queryToUpdate) {
      return;
    }
    queryToUpdate.model = payload;
    if (payload.type === app_features_expressions_types__WEBPACK_IMPORTED_MODULE_9__.ExpressionQueryType.resample && payload.expression) {
      const originalQueries = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.original)(state)?.queries ?? [];
      let relativeTimeRange = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.getDefaultRelativeTimeRange)();
      try {
        const dataSourceAlertQuery = findDataSourceFromExpression(originalQueries, payload.expression);
        if (dataSourceAlertQuery?.relativeTimeRange) {
          relativeTimeRange = dataSourceAlertQuery.relativeTimeRange;
        }
      } catch (error) {
        if (error instanceof Error) {
          (0,_Analytics__WEBPACK_IMPORTED_MODULE_11__.logError)(error);
        } else {
          (0,_Analytics__WEBPACK_IMPORTED_MODULE_11__.logError)(new Error("Error while trying to find data source from expression"));
        }
      }
      queryToUpdate.relativeTimeRange = relativeTimeRange;
    }
  }).addCase(updateExpressionTimeRange, (state) => {
    state.queries.forEach((query) => {
      if ((0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_8__.isExpressionQuery)(query.model) && query.model.type === app_features_expressions_types__WEBPACK_IMPORTED_MODULE_9__.ExpressionQueryType.resample && query.model.expression) {
        const originalQueries = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.original)(state)?.queries ?? [];
        const dataSource = findDataSourceFromExpression(originalQueries, query.model.expression);
        const relativeTimeRange = dataSource ? dataSource.relativeTimeRange : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.getDefaultRelativeTimeRange)();
        query.relativeTimeRange = relativeTimeRange;
      }
    });
  }).addCase(updateExpressionRefId, (state, { payload }) => {
    const { newRefId, oldRefId } = payload;
    const newRefIdExists = (0,_util__WEBPACK_IMPORTED_MODULE_15__.refIdExists)(state.queries, newRefId);
    if (newRefIdExists) {
      return;
    }
    const updatedQueries = (0,_util__WEBPACK_IMPORTED_MODULE_15__.queriesWithUpdatedReferences)(state.queries, oldRefId, newRefId);
    state.queries = updatedQueries.map((query) => {
      if (query.refId === oldRefId) {
        return {
          ...query,
          refId: newRefId,
          model: {
            ...query.model,
            refId: newRefId
          }
        };
      }
      return query;
    });
  }).addCase(rewireExpressions, (state, { payload }) => {
    state.queries = (0,_util__WEBPACK_IMPORTED_MODULE_15__.queriesWithUpdatedReferences)(state.queries, payload.oldRefId, payload.newRefId);
  }).addCase(optimizeReduceExpression, (state, { payload }) => {
    const { updatedQueries, expressionQueries } = payload;
    if (updatedQueries.length !== 1) {
      return;
    }
    const dataQuery = updatedQueries.at(0);
    const isInstantDataQuery = dataQuery ? (0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_13__.getInstantFromDataQuery)(dataQuery) : false;
    const hasReducer = expressionQueries.some((q) => (0,app_features_expressions_utils_expressionTypes__WEBPACK_IMPORTED_MODULE_10__.isReducerExpression)(q.model));
    const shouldRemoveReducer = isInstantDataQuery && expressionQueries.length === 2 && hasReducer;
    if (shouldRemoveReducer) {
      const reduceExpressionIndex = state.queries.findIndex(
        (query) => (0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_8__.isExpressionQuery)(query.model) && (0,app_features_expressions_utils_expressionTypes__WEBPACK_IMPORTED_MODULE_10__.isReducerExpression)(query.model) && query.model.expression === dataQuery?.refId
      );
      state.queries.splice(reduceExpressionIndex, 1);
      state.queries[1].model.expression = dataQuery?.refId;
    }
    const shouldAddReduceExpression = !isInstantDataQuery && expressionQueries.length === 1 && (0,app_features_expressions_utils_expressionTypes__WEBPACK_IMPORTED_MODULE_10__.isThresholdExpression)(expressionQueries[0].model);
    if (shouldAddReduceExpression) {
      state.queries[1].model.expression = NEW_REDUCER_REF;
      state.queries.splice(1, 0, {
        datasourceUid: app_features_expressions_types__WEBPACK_IMPORTED_MODULE_9__.ExpressionDatasourceUID,
        model: app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_7__.dataSource.newQuery({
          type: app_features_expressions_types__WEBPACK_IMPORTED_MODULE_9__.ExpressionQueryType.reduce,
          reducer: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.ReducerID.last,
          conditions: [{ ...app_features_expressions_utils_expressionTypes__WEBPACK_IMPORTED_MODULE_10__.defaultCondition, query: { params: [] } }],
          expression: dataQuery?.refId,
          refId: NEW_REDUCER_REF
        }),
        refId: NEW_REDUCER_REF,
        queryType: "expression"
      });
    }
  }).addCase(updateExpressionType, (state, action) => {
    state.queries = state.queries.map((query) => {
      return query.refId === action.payload.refId ? {
        ...query,
        model: {
          ...app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_7__.dataSource.newQuery({
            type: action.payload.type,
            conditions: [{ ...app_features_expressions_utils_expressionTypes__WEBPACK_IMPORTED_MODULE_10__.defaultCondition, query: { params: [] } }],
            expression: ""
          }),
          refId: action.payload.refId
        }
      } : query;
    });
  });
});
const addQuery = (queries, queryToAdd) => {
  const refId = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getNextRefId)(queries);
  const query = {
    ...queryToAdd,
    refId,
    queryType: "",
    model: {
      ...queryToAdd.model,
      hide: false,
      refId
    },
    relativeTimeRange: queryToAdd.relativeTimeRange ?? defaultTimeRange(queryToAdd.model)
  };
  return [...queries, query];
};
const defaultTimeRange = (model) => {
  if ((0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_8__.isExpressionQuery)(model)) {
    return;
  }
  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.getDefaultRelativeTimeRange)();
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/useAdvancedMode.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   determineAdvancedMode: () => (/* binding */ determineAdvancedMode),
/* harmony export */   useAdvancedMode: () => (/* binding */ useAdvancedMode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/fieldReducer.ts");
/* harmony import */ var app_features_alerting_state_alertDef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/state/alertDef.ts");
/* harmony import */ var _rule_editor_formProcessing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/rule-editor/formProcessing.ts");
/* harmony import */ var _SimpleCondition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/SimpleCondition.tsx");






function initializeSimpleCondition(isGrafanaAlertingType, dataQueries, expressionQueries) {
  if (isGrafanaAlertingType && (0,_rule_editor_formProcessing__WEBPACK_IMPORTED_MODULE_3__.areQueriesTransformableToSimpleCondition)(dataQueries, expressionQueries)) {
    return (0,_SimpleCondition__WEBPACK_IMPORTED_MODULE_4__.getSimpleConditionFromExpressions)(expressionQueries);
  } else {
    return {
      whenField: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.ReducerID.last,
      evaluator: {
        params: [0],
        type: app_features_alerting_state_alertDef__WEBPACK_IMPORTED_MODULE_2__.EvalFunction.IsAbove
      }
    };
  }
}
function determineAdvancedMode(simplifiedQueryEditor, isGrafanaAlertingType) {
  return simplifiedQueryEditor === false || !isGrafanaAlertingType;
}
const useAdvancedMode = (simplifiedQueryEditor, isGrafanaAlertingType, dataQueries, expressionQueries) => {
  const isAdvancedMode = determineAdvancedMode(simplifiedQueryEditor, isGrafanaAlertingType);
  const [simpleCondition, setSimpleCondition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(
    initializeSimpleCondition(isGrafanaAlertingType, dataQueries, expressionQueries)
  );
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isGrafanaAlertingType && !isAdvancedMode) {
      setSimpleCondition((0,_SimpleCondition__WEBPACK_IMPORTED_MODULE_4__.getSimpleConditionFromExpressions)(expressionQueries));
    }
  }, [isAdvancedMode, expressionQueries, isGrafanaAlertingType]);
  return { simpleCondition, setSimpleCondition };
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onlyOneDSInQueries: () => (/* binding */ onlyOneDSInQueries),
/* harmony export */   useGetCanSwitch: () => (/* binding */ useGetCanSwitch)
/* harmony export */ });
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_features_expressions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/expressions/types.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _hooks_useHasRuler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useHasRuler.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");






const onlyOneDSInQueries = (queries) => {
  return queries.filter((q) => q.datasourceUid !== app_features_expressions_types__WEBPACK_IMPORTED_MODULE_1__.ExpressionDatasourceUID).length === 1;
};
function getAvailableRuleTypes() {
  const canCreateGrafanaRules = app_core_core__WEBPACK_IMPORTED_MODULE_0__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_2__.AccessControlAction.AlertingRuleCreate);
  const canCreateCloudRules = app_core_core__WEBPACK_IMPORTED_MODULE_0__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_2__.AccessControlAction.AlertingRuleExternalWrite);
  const defaultRuleType = canCreateGrafanaRules ? _types_rule_form__WEBPACK_IMPORTED_MODULE_4__.RuleFormType.grafana : _types_rule_form__WEBPACK_IMPORTED_MODULE_4__.RuleFormType.cloudAlerting;
  const enabledRuleTypes = [];
  if (canCreateGrafanaRules) {
    enabledRuleTypes.push(_types_rule_form__WEBPACK_IMPORTED_MODULE_4__.RuleFormType.grafana);
  }
  if (canCreateCloudRules) {
    enabledRuleTypes.push(_types_rule_form__WEBPACK_IMPORTED_MODULE_4__.RuleFormType.cloudAlerting, _types_rule_form__WEBPACK_IMPORTED_MODULE_4__.RuleFormType.cloudRecording);
  }
  return { enabledRuleTypes, defaultRuleType };
}
const useGetCanSwitch = ({
  queries,
  ruleFormType
}) => {
  const availableRuleTypes = getAvailableRuleTypes();
  const onlyOneDS = onlyOneDSInQueries(queries);
  const isRecordingRuleType = ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_4__.RuleFormType.cloudRecording;
  const dataSourceIdFromQueries = queries[0]?.datasourceUid ?? "";
  const { hasRuler } = (0,_hooks_useHasRuler__WEBPACK_IMPORTED_MODULE_3__.useHasRulerV2)(dataSourceIdFromQueries);
  const canSwitchToCloudRule = !isRecordingRuleType && onlyOneDS && hasRuler;
  const canSwitchToGrafanaRule = !isRecordingRuleType;
  const grafanaTypeEnabled = availableRuleTypes.enabledRuleTypes.includes(_types_rule_form__WEBPACK_IMPORTED_MODULE_4__.RuleFormType.grafana);
  const cloudTypeEnabled = availableRuleTypes.enabledRuleTypes.includes(_types_rule_form__WEBPACK_IMPORTED_MODULE_4__.RuleFormType.cloudAlerting);
  const canSwitchFromCloudToGrafana = ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_4__.RuleFormType.cloudAlerting && grafanaTypeEnabled && canSwitchToGrafanaRule;
  const canSwitchFromGrafanaToCloud = ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_4__.RuleFormType.grafana && canSwitchToCloudRule && cloudTypeEnabled && canSwitchToCloudRule;
  return canSwitchFromCloudToGrafana || canSwitchFromGrafanaToCloud;
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/useAlertRuleSuggestions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rulerRulesToNamespaceGroups: () => (/* binding */ rulerRulesToNamespaceGroups),
/* harmony export */   useGetLabelsFromDataSourceName: () => (/* binding */ useGetLabelsFromDataSourceName),
/* harmony export */   useGetNameSpacesByDatasourceName: () => (/* binding */ useGetNameSpacesByDatasourceName),
/* harmony export */   useGetRulerRules: () => (/* binding */ useGetRulerRules)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");
/* harmony import */ var _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/api/featureDiscoveryApi.ts");
/* harmony import */ var _featureToggles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/featureToggles.ts");






const { usePrometheusRuleNamespacesQuery, useLazyRulerRulesQuery, useRulerRulesQuery } = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_2__.alertRuleApi;
const { useDiscoverDsFeaturesQuery } = _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_3__.featureDiscoveryApi;
const emptyRulerConfig = {};
const prometheusRulesPrimary = (0,_featureToggles__WEBPACK_IMPORTED_MODULE_4__.shouldUsePrometheusRulesPrimary)();
function useGetLabelsFromDataSourceName(rulesSourceName) {
  const { data: features, isLoading: isFeaturesLoading } = useDiscoverDsFeaturesQuery({ rulesSourceName });
  const [fetchRulerRules, { data: rulerRules = emptyRulerConfig, isLoading: isRulerRulesLoading }] = useLazyRulerRulesQuery();
  const { data: promNamespaces = [], isLoading: isPrometheusRulesLoading } = usePrometheusRuleNamespacesQuery(
    { ruleSourceName: rulesSourceName },
    { skip: !prometheusRulesPrimary }
  );
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (features?.rulerConfig && !prometheusRulesPrimary) {
      fetchRulerRules({ rulerConfig: features.rulerConfig }, true);
    }
  }, [features?.rulerConfig, fetchRulerRules]);
  const labels = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (isPrometheusRulesLoading || isRulerRulesLoading) {
      return /* @__PURE__ */ new Map();
    }
    if (prometheusRulesPrimary) {
      return promNamespacesToLabels(promNamespaces);
    }
    return rulerRulesToLabels(rulerRules);
  }, [promNamespaces, rulerRules, isPrometheusRulesLoading, isRulerRulesLoading]);
  return { labels, isLoading: isPrometheusRulesLoading || isRulerRulesLoading || isFeaturesLoading };
}
function useGetNameSpacesByDatasourceName(rulesSourceName) {
  const { data: features, isLoading: isFeaturesLoading } = useDiscoverDsFeaturesQuery(
    rulesSourceName ? { rulesSourceName } : _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_0__.skipToken,
    { skip: !rulesSourceName }
  );
  const [fetchRulerRules, { data: rulerRules = emptyRulerConfig, isLoading: isRulerRulesLoading }] = useLazyRulerRulesQuery();
  const { data: promNamespaces = [], isLoading: isPrometheusRulesLoading } = usePrometheusRuleNamespacesQuery(
    rulesSourceName && prometheusRulesPrimary ? { ruleSourceName: rulesSourceName } : _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_0__.skipToken
  );
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (features?.rulerConfig && !prometheusRulesPrimary) {
      fetchRulerRules({ rulerConfig: features.rulerConfig });
    }
  }, [features?.rulerConfig, fetchRulerRules]);
  const namespaceGroups = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (isPrometheusRulesLoading || isRulerRulesLoading) {
      return /* @__PURE__ */ new Map();
    }
    if (prometheusRulesPrimary) {
      return promNamespacesToNamespaceGroups(promNamespaces);
    }
    return rulerRulesToNamespaceGroups(rulerRules);
  }, [promNamespaces, rulerRules, isPrometheusRulesLoading, isRulerRulesLoading]);
  return {
    namespaceGroups,
    isLoading: isPrometheusRulesLoading || isRulerRulesLoading || isFeaturesLoading,
    promNamespaces
  };
}
function useGetRulerRules(rulesSourceName) {
  const { data: features, isLoading: isFeaturesLoading } = useDiscoverDsFeaturesQuery(
    rulesSourceName ? { rulesSourceName } : _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_0__.skipToken
  );
  const { data: rulerRules = emptyRulerConfig, isLoading: isRulerRulesLoading } = useRulerRulesQuery(
    features?.rulerConfig ? { rulerConfig: features.rulerConfig } : _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_0__.skipToken
  );
  return {
    isLoading: isRulerRulesLoading || isFeaturesLoading,
    rulerRules
  };
}
function promNamespacesToNamespaceGroups(promNamespaces) {
  const groups = /* @__PURE__ */ new Map();
  promNamespaces.forEach((namespace) => {
    groups.set(
      namespace.name,
      namespace.groups.map((group) => group.name)
    );
  });
  return groups;
}
function rulerRulesToNamespaceGroups(rulerConfig) {
  const result = /* @__PURE__ */ new Map();
  Object.entries(rulerConfig).forEach(([namespace, groups]) => {
    result.set(
      namespace,
      groups.map((group) => group.name)
    );
  });
  return result;
}
function promNamespacesToLabels(promNamespace) {
  const rules = promNamespace.flatMap((namespace) => namespace.groups).flatMap((group) => group.rules);
  return rules.reduce((result, rule) => {
    if (!rule.labels) {
      return result;
    }
    Object.entries(rule.labels).forEach(([labelKey, labelValue]) => {
      if (!labelKey || !labelValue) {
        return;
      }
      const labelEntry = result.get(labelKey);
      if (labelEntry) {
        labelEntry.add(labelValue);
      } else {
        result.set(labelKey, /* @__PURE__ */ new Set([labelValue]));
      }
    });
    return result;
  }, /* @__PURE__ */ new Map());
}
function rulerRulesToLabels(rulerConfig) {
  const result = /* @__PURE__ */ new Map();
  const rules = Object.entries(rulerConfig).flatMap(([_, groups]) => groups).flatMap((group) => group.rules);
  return rules.reduce((result2, rule) => {
    if (!rule.labels) {
      return result2;
    }
    Object.entries(rule.labels).forEach(([labelKey, labelValue]) => {
      if (!labelKey || !labelValue) {
        return;
      }
      const labelEntry = result2.get(labelKey);
      if (labelEntry) {
        labelEntry.add(labelValue);
      } else {
        result2.set(labelKey, /* @__PURE__ */ new Set([labelValue]));
      }
    });
    return result2;
  }, result);
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/useDashboardQuery.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDashboardQuery: () => (/* binding */ useDashboardQuery)
/* harmony export */ });
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_features_dashboard_api_dashboard_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/api/dashboard_api.ts");
/* harmony import */ var _dashboard_state_DashboardModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/state/DashboardModel.ts");





const convertToDashboardModel = (0,memoize_one__WEBPACK_IMPORTED_MODULE_0__["default"])((dashboardDTO) => {
  const { dashboard, meta } = structuredClone(dashboardDTO);
  return new _dashboard_state_DashboardModel__WEBPACK_IMPORTED_MODULE_3__.DashboardModel(dashboard, meta);
});
function useDashboardQuery(dashboardUid) {
  const [dashboardModel, setDashboardModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [isFetching, setIsFetching] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (dashboardUid) {
      setIsFetching(true);
      (0,app_features_dashboard_api_dashboard_api__WEBPACK_IMPORTED_MODULE_2__.getDashboardAPI)().getDashboardDTO(dashboardUid).then((dashboard) => {
        if (!("dashboard" in dashboard)) {
          console.error("Something went wrong, unexpected dashboard format");
        } else {
          setDashboardModel(convertToDashboardModel(dashboard));
        }
        setIsFetching(false);
      });
    }
  }, [dashboardUid]);
  return { dashboardModel, isFetching };
}


/***/ }),

/***/ "./public/app/features/alerting/unified/enterprise-components/AI/AIGenImproveAnnotationsButton/addAIImproveAnnotationsButton.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIImproveAnnotationsButtonComponent: () => (/* binding */ AIImproveAnnotationsButtonComponent),
/* harmony export */   addAIImproveAnnotationsButton: () => (/* binding */ addAIImproveAnnotationsButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/ErrorBoundary/ErrorBoundary.tsx");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");





let InternalAIImproveAnnotationsButtonComponent = null;
const AIImproveAnnotationsButtonComponent = (props) => {
  if (!InternalAIImproveAnnotationsButtonComponent) {
    return null;
  }
  const WrappedComponent = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.withErrorBoundary)(InternalAIImproveAnnotationsButtonComponent, {
    title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.ai.error-boundary.improve-annotations-button", "AI Improve Annotations Button failed to load"),
    style: "alertbox",
    errorLogger: _Analytics__WEBPACK_IMPORTED_MODULE_3__.logError
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, props);
};
function addAIImproveAnnotationsButton(component) {
  InternalAIImproveAnnotationsButtonComponent = component;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/enterprise-components/AI/AIGenImproveLabelsButton/addAIImproveLabelsButton.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIImproveLabelsButtonComponent: () => (/* binding */ AIImproveLabelsButtonComponent),
/* harmony export */   addAIImproveLabelsButton: () => (/* binding */ addAIImproveLabelsButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/ErrorBoundary/ErrorBoundary.tsx");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");





let InternalAIImproveLabelsButtonComponent = null;
const AIImproveLabelsButtonComponent = (props) => {
  if (!InternalAIImproveLabelsButtonComponent) {
    return null;
  }
  const WrappedComponent = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.withErrorBoundary)(InternalAIImproveLabelsButtonComponent, {
    title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.ai.error-boundary.improve-labels-button", "AI Improve Labels Button failed to load"),
    style: "alertbox",
    errorLogger: _Analytics__WEBPACK_IMPORTED_MODULE_3__.logError
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, props);
};
function addAIImproveLabelsButton(component) {
  InternalAIImproveLabelsButtonComponent = component;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/group-details/validation.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateEveryValidationOptions: () => (/* binding */ evaluateEveryValidationOptions)
/* harmony export */ });
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _components_rule_editor_GrafanaEvaluationBehavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/GrafanaEvaluationBehavior.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");






const evaluateEveryValidationOptions = (rules) => ({
  required: {
    value: true,
    message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("alerting.evaluate-every-validation-options.message.required", "Required.")
  },
  validate: (evaluateEvery) => {
    try {
      const duration = (0,_utils_time__WEBPACK_IMPORTED_MODULE_4__.parsePrometheusDuration)(evaluateEvery);
      if (duration < _components_rule_editor_GrafanaEvaluationBehavior__WEBPACK_IMPORTED_MODULE_1__.MIN_TIME_RANGE_STEP_S * 1e3) {
        return `Cannot be less than ${_components_rule_editor_GrafanaEvaluationBehavior__WEBPACK_IMPORTED_MODULE_1__.MIN_TIME_RANGE_STEP_S} seconds.`;
      }
      if (duration % (_components_rule_editor_GrafanaEvaluationBehavior__WEBPACK_IMPORTED_MODULE_1__.MIN_TIME_RANGE_STEP_S * 1e3) !== 0) {
        return `Must be a multiple of ${_components_rule_editor_GrafanaEvaluationBehavior__WEBPACK_IMPORTED_MODULE_1__.MIN_TIME_RANGE_STEP_S} seconds.`;
      }
      if ((0,_state_actions__WEBPACK_IMPORTED_MODULE_2__.rulesInSameGroupHaveInvalidFor)(rules, evaluateEvery).length === 0) {
        return true;
      } else {
        const rulePendingPeriods = rules.map((rule) => {
          const { forDuration } = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_3__.getAlertInfo)(rule, evaluateEvery);
          return forDuration ? (0,_utils_time__WEBPACK_IMPORTED_MODULE_4__.safeParsePrometheusDuration)(forDuration) : null;
        });
        const smallestPendingPeriod = Math.min(
          ...rulePendingPeriods.filter((period) => period !== null && period !== 0)
        );
        return `Evaluation interval should be smaller or equal to "pending period" values for existing rules in this rule group. Choose a value smaller than or equal to "${(0,_utils_time__WEBPACK_IMPORTED_MODULE_4__.formatPrometheusDuration)(smallestPendingPeriod)}".`;
      }
    } catch (error) {
      return error instanceof Error ? error.message : "Failed to parse duration";
    }
  }
});


/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useFetchGroupsForFolder.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFetchGroupsForFolder: () => (/* binding */ useFetchGroupsForFolder)
/* harmony export */ });
/* harmony import */ var _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");
/* harmony import */ var _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/api/featureDiscoveryApi.ts");



const useFetchGroupsForFolder = (folderUid) => {
  return _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_0__.alertRuleApi.endpoints.rulerNamespace.useQuery(
    {
      namespace: folderUid,
      rulerConfig: _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_1__.GRAFANA_RULER_CONFIG
    },
    {
      refetchOnMountOrArgChange: true,
      skip: !folderUid
    }
  );
};


/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useRuleSourcesWithRuler.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRulesSourcesWithRuler: () => (/* binding */ useRulesSourcesWithRuler)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/api/featureDiscoveryApi.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");




const { useLazyDiscoverDsFeaturesQuery } = _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_1__.featureDiscoveryApi;
function useRulesSourcesWithRuler() {
  const [rulesSourcesWithRuler, setRulesSourcesWithRuler] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [discoverDsFeatures, { isLoading }] = useLazyDiscoverDsFeaturesQuery();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const dataSources = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_2__.getRulesDataSources)();
    dataSources.forEach(async (ds) => {
      const { data: dsFeatures } = await discoverDsFeatures({ uid: ds.uid }, true);
      if (dsFeatures?.rulerConfig) {
        setRulesSourcesWithRuler((prev) => [...prev, ds]);
      }
    });
  }, [discoverDsFeatures]);
  return { rulesSourcesWithRuler, isLoading };
}


/***/ }),

/***/ "./public/app/features/alerting/unified/openapi/timeIntervalsApi.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTagTypes: () => (/* binding */ addTagTypes),
/* harmony export */   generatedTimeIntervalsApi: () => (/* binding */ injectedRtkApi)
/* harmony export */ });
/* harmony import */ var _api_alertingApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/api/alertingApi.ts");


const addTagTypes = ["TimeInterval"];
const injectedRtkApi = _api_alertingApi__WEBPACK_IMPORTED_MODULE_0__.alertingApi.enhanceEndpoints({
  addTagTypes
}).injectEndpoints({
  endpoints: (build) => ({
    listNamespacedTimeInterval: build.query({
      query: (queryArg) => ({
        url: `/apis/notifications.alerting.grafana.app/v0alpha1/namespaces/${queryArg["namespace"]}/timeintervals`,
        params: {
          pretty: queryArg.pretty,
          allowWatchBookmarks: queryArg.allowWatchBookmarks,
          continue: queryArg["continue"],
          fieldSelector: queryArg.fieldSelector,
          labelSelector: queryArg.labelSelector,
          limit: queryArg.limit,
          resourceVersion: queryArg.resourceVersion,
          resourceVersionMatch: queryArg.resourceVersionMatch,
          sendInitialEvents: queryArg.sendInitialEvents,
          timeoutSeconds: queryArg.timeoutSeconds,
          watch: queryArg.watch
        }
      }),
      providesTags: ["TimeInterval"]
    }),
    createNamespacedTimeInterval: build.mutation({
      query: (queryArg) => ({
        url: `/apis/notifications.alerting.grafana.app/v0alpha1/namespaces/${queryArg["namespace"]}/timeintervals`,
        method: "POST",
        body: queryArg.comGithubGrafanaGrafanaPkgApisAlertingNotificationsV0Alpha1TimeInterval,
        params: {
          pretty: queryArg.pretty,
          dryRun: queryArg.dryRun,
          fieldManager: queryArg.fieldManager,
          fieldValidation: queryArg.fieldValidation
        }
      }),
      invalidatesTags: ["TimeInterval"]
    }),
    replaceNamespacedTimeInterval: build.mutation({
      query: (queryArg) => ({
        url: `/apis/notifications.alerting.grafana.app/v0alpha1/namespaces/${queryArg["namespace"]}/timeintervals/${queryArg.name}`,
        method: "PUT",
        body: queryArg.comGithubGrafanaGrafanaPkgApisAlertingNotificationsV0Alpha1TimeInterval,
        params: {
          pretty: queryArg.pretty,
          dryRun: queryArg.dryRun,
          fieldManager: queryArg.fieldManager,
          fieldValidation: queryArg.fieldValidation
        }
      }),
      invalidatesTags: ["TimeInterval"]
    }),
    deleteNamespacedTimeInterval: build.mutation({
      query: (queryArg) => ({
        url: `/apis/notifications.alerting.grafana.app/v0alpha1/namespaces/${queryArg["namespace"]}/timeintervals/${queryArg.name}`,
        method: "DELETE",
        body: queryArg.ioK8SApimachineryPkgApisMetaV1DeleteOptions,
        params: {
          pretty: queryArg.pretty,
          dryRun: queryArg.dryRun,
          gracePeriodSeconds: queryArg.gracePeriodSeconds,
          orphanDependents: queryArg.orphanDependents,
          propagationPolicy: queryArg.propagationPolicy
        }
      }),
      invalidatesTags: ["TimeInterval"]
    })
  }),
  overrideExisting: false
});



/***/ }),

/***/ "./public/app/features/alerting/unified/rule-editor/ExistingRuleEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExistingRuleEditor: () => (/* binding */ ExistingRuleEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _AlertWarning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/AlertWarning.tsx");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_rule_editor_alert_rule_form_AlertRuleForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/alert-rule-form/AlertRuleForm.tsx");
/* harmony import */ var _components_rule_viewer_FederatedRuleWarning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/FederatedRuleWarning.tsx");
/* harmony import */ var _hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRule.ts");
/* harmony import */ var _hooks_useIsRuleEditable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_rule_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-form.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _RuleEditor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/rule-editor/RuleEditor.tsx");
/* harmony import */ var _clone_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/rule-editor/clone.utils.ts");

















function ExistingRuleEditor({
  identifier,
  prefill,
  isManualRestore = false,
  clone = false
}) {
  const ruleSourceName = _utils_rule_id__WEBPACK_IMPORTED_MODULE_13__.ruleIdentifierToRuleSourceName(identifier);
  const {
    loading: loadingAlertRule,
    result: ruleWithLocation,
    error: fetchRuleError
  } = (0,_hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_8__.useRuleWithLocation)({ ruleIdentifier: identifier });
  const {
    isEditable,
    loading: loadingEditable,
    error: errorEditable
  } = (0,_hooks_useIsRuleEditable__WEBPACK_IMPORTED_MODULE_9__.useIsRuleEditable)(ruleSourceName, ruleWithLocation?.rule);
  if (fetchRuleError || errorEditable) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_5__.AlertingPageWrapper, { navId: "alert-list", pageNav: getPageNav(), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert,
      {
        severity: "error",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.existing-rule-editor.title-failed-to-load-rule", "Failed to load rule"),
        children: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_11__.stringifyErrorLike)(errorEditable ?? fetchRuleError)
      }
    ) });
  }
  const loading = loadingAlertRule || loadingEditable;
  if (loading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_5__.AlertingPageWrapper, { navId: "alert-list", pageNav: getPageNav(), isLoading: true, children: null });
  }
  if (!ruleWithLocation && !loading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_5__.AlertingPageWrapper, { navId: "alert-list", pageNav: getPageNav(), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertWarning__WEBPACK_IMPORTED_MODULE_4__.AlertWarning, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.existing-rule-editor.title-rule-not-found", "Rule not found"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.existing-rule-editor.sorry-this-rule-does-not-exist", children: "Sorry! This rule does not exist." }) }) });
  }
  if (isEditable === false) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_5__.AlertingPageWrapper, { navId: "alert-list", pageNav: getPageNav(), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertWarning__WEBPACK_IMPORTED_MODULE_4__.AlertWarning, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.existing-rule-editor.title-cannot-edit-rule", "Cannot edit rule"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.existing-rule-editor.sorry-permission", children: "Sorry! You do not have permission to edit this rule." }) }) });
  }
  if (!ruleWithLocation) {
    return null;
  }
  const rulerRule = ruleWithLocation.rule;
  const summary = _utils_rules__WEBPACK_IMPORTED_MODULE_14__.rulerRuleType.any.alertingRule(rulerRule) ? rulerRule.annotations?.[_utils_constants__WEBPACK_IMPORTED_MODULE_10__.Annotation.summary] : null;
  const isFederatedRule = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_14__.isFederatedRuleGroup)(ruleWithLocation.group);
  const isRecordingRule = _utils_rules__WEBPACK_IMPORTED_MODULE_14__.rulerRuleType.any.recordingRule(rulerRule);
  const pageTitle = isRecordingRule ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.editor.edit-recording-rule", "Edit recording rule") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.editor.edit-alert-rule", "Edit alert rule");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_5__.AlertingPageWrapper,
    {
      navId: "alert-list",
      subTitle: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { direction: "column", children: [
        summary,
        isFederatedRule && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rule_viewer_FederatedRuleWarning__WEBPACK_IMPORTED_MODULE_7__.FederatedRuleWarning, {})
      ] }),
      pageNav: getPageNav({ text: pageTitle }),
      children: clone ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rule_editor_alert_rule_form_AlertRuleForm__WEBPACK_IMPORTED_MODULE_6__.AlertRuleForm, { prefill: (0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_12__.rulerRuleToFormValues)((0,_clone_utils__WEBPACK_IMPORTED_MODULE_16__.cloneRuleDefinition)(ruleWithLocation)) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rule_editor_alert_rule_form_AlertRuleForm__WEBPACK_IMPORTED_MODULE_6__.AlertRuleForm, { existing: ruleWithLocation, prefill, isManualRestore })
    }
  );
}
const getPageNav = (pageNavOptions) => {
  return { ..._RuleEditor__WEBPACK_IMPORTED_MODULE_15__.defaultPageNav, id: "alert-rule-edit", text: "", ...pageNavOptions };
};


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-editor/RuleEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RECORDING_TYPE: () => (/* binding */ RECORDING_TYPE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaultPageNav: () => (/* binding */ defaultPageNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _AlertWarning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/AlertWarning.tsx");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_rule_editor_alert_rule_form_AlertRuleForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/alert-rule-form/AlertRuleForm.tsx");
/* harmony import */ var _hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useURLSearchParams.ts");
/* harmony import */ var _utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/accessControlHooks.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/withPageErrorBoundary.tsx");
/* harmony import */ var _ExistingRuleEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/rule-editor/ExistingRuleEditor.tsx");
/* harmony import */ var _formDefaults__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/rule-editor/formDefaults.ts");













const defaultPageNav = {
  id: "alert-rule-view"
};
const RuleEditor = () => {
  const { identifier } = useRuleEditorPathParams();
  const cloneIdentifier = useIdentifierFromCopy();
  const isManualRestore = useManualRestore();
  const { canCreateGrafanaRules, canCreateCloudRules, canEditRules } = (0,_utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_7__.useRulesAccess)();
  if (!identifier && !canCreateGrafanaRules && !canCreateCloudRules) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertWarning__WEBPACK_IMPORTED_MODULE_3__.AlertWarning, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.rule-editor.get-content.title-cannot-create-rules", "Cannot create rules"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.rule-editor.get-content.sorry-allowed-create-rules", children: "Sorry! You are not allowed to create rules." }) });
  }
  if (identifier && !canEditRules(identifier.ruleSourceName)) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertWarning__WEBPACK_IMPORTED_MODULE_3__.AlertWarning, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.rule-editor.get-content.title-cannot-edit-rules", "Cannot edit rules"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.rule-editor.get-content.sorry-allowed-rules", children: "Sorry! You are not allowed to edit rules." }) });
  }
  if (identifier) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ExistingRuleEditor__WEBPACK_IMPORTED_MODULE_10__.ExistingRuleEditor, { identifier, isManualRestore }, JSON.stringify(identifier));
  }
  if (cloneIdentifier) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _ExistingRuleEditor__WEBPACK_IMPORTED_MODULE_10__.ExistingRuleEditor,
      {
        identifier: cloneIdentifier,
        clone: true,
        isManualRestore
      },
      JSON.stringify(identifier)
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NewRuleEditor, {});
};
const RECORDING_TYPE = ["grafana-recording", "recording"];
function NewRuleEditor() {
  const prefill = useDefaultsFromQuery();
  const isManualRestore = useManualRestore();
  const { type = "", identifier = "" } = useRuleEditorPathParams();
  const isExisting = Boolean(identifier);
  const isRecordingRule = RECORDING_TYPE.includes(type);
  const newText = isRecordingRule ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.editor.new-recording-rule", "New recording rule") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.editor.new-alert-rule", "New alert rule");
  const editText = isRecordingRule ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.editor.edit-recording-rule", "Edit recording rule") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.editor.edit-alert-rule", "Edit alert rule");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_4__.AlertingPageWrapper,
    {
      navId: "alert-list",
      pageNav: {
        id: "alert-rule-add",
        text: isExisting ? editText : newText
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rule_editor_alert_rule_form_AlertRuleForm__WEBPACK_IMPORTED_MODULE_5__.AlertRuleForm, { prefill, isManualRestore })
    }
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_9__.withPageErrorBoundary)(RuleEditor));
function useRuleEditorPathParams() {
  const params = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__.useParams)();
  const { type } = params;
  const id = _utils_rule_id__WEBPACK_IMPORTED_MODULE_8__.getRuleIdFromPathname(params);
  const identifier = _utils_rule_id__WEBPACK_IMPORTED_MODULE_8__.tryParse(id, true);
  return { identifier, type };
}
function useIdentifierFromCopy() {
  const [searchParams] = (0,_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_6__.useURLSearchParams)();
  const copyFromId = searchParams.get("copyFrom") ?? void 0;
  return _utils_rule_id__WEBPACK_IMPORTED_MODULE_8__.tryParse(copyFromId);
}
function useDefaultsFromQuery() {
  const { type } = useRuleEditorPathParams();
  const [searchParams] = (0,_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_6__.useURLSearchParams)();
  const ruleType = (0,_formDefaults__WEBPACK_IMPORTED_MODULE_11__.translateRouteParamToRuleType)(type);
  const queryDefaults = searchParams.has("defaults") ? (0,_formDefaults__WEBPACK_IMPORTED_MODULE_11__.formValuesFromQueryParams)(searchParams.get("defaults") ?? "", ruleType) : void 0;
  return queryDefaults;
}
function useManualRestore() {
  const [searchParams] = (0,_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_6__.useURLSearchParams)();
  const isManualRestore = searchParams.has("isManualRestore");
  return isManualRestore;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-editor/clone.utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeRuleName: () => (/* binding */ changeRuleName),
/* harmony export */   cloneRuleDefinition: () => (/* binding */ cloneRuleDefinition)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_duplicate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/duplicate.ts");
/* harmony import */ var _utils_labels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/labels.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");





function changeRuleName(rule, newName) {
  if (_utils_rules__WEBPACK_IMPORTED_MODULE_3__.rulerRuleType.grafana.rule(rule)) {
    rule.grafana_alert.title = newName;
  }
  if (_utils_rules__WEBPACK_IMPORTED_MODULE_3__.rulerRuleType.dataSource.alertingRule(rule)) {
    rule.alert = newName;
  }
  if (_utils_rules__WEBPACK_IMPORTED_MODULE_3__.rulerRuleType.dataSource.recordingRule(rule)) {
    rule.record = newName;
  }
}
function cloneRuleDefinition(rule) {
  const ruleClone = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(rule);
  changeRuleName(
    ruleClone.rule,
    (0,_utils_duplicate__WEBPACK_IMPORTED_MODULE_1__.generateCopiedName)((0,_utils_rules__WEBPACK_IMPORTED_MODULE_3__.getRuleName)(ruleClone.rule), ruleClone.group.rules.map(_utils_rules__WEBPACK_IMPORTED_MODULE_3__.getRuleName))
  );
  if (_utils_rules__WEBPACK_IMPORTED_MODULE_3__.rulerRuleType.grafana.rule(ruleClone.rule)) {
    ruleClone.rule.grafana_alert.uid = "";
    if (Boolean(ruleClone.rule.grafana_alert.provenance)) {
      ruleClone.group = { name: "", rules: ruleClone.group.rules };
    }
  }
  if (_utils_rules__WEBPACK_IMPORTED_MODULE_3__.rulerRuleType.any.rule(ruleClone.rule) && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_3__.isPluginProvidedRule)(ruleClone.rule)) {
    delete ruleClone.rule.labels?.[_utils_labels__WEBPACK_IMPORTED_MODULE_2__.GRAFANA_ORIGIN_LABEL];
  }
  return ruleClone;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/types/preview.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isCloudPreviewRequest: () => (/* binding */ isCloudPreviewRequest),
/* harmony export */   isGrafanaPreviewRequest: () => (/* binding */ isGrafanaPreviewRequest)
/* harmony export */ });

function isCloudPreviewRequest(request) {
  return "expr" in request;
}
function isGrafanaPreviewRequest(request) {
  return "grafana_condition" in request;
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

/***/ "./public/app/features/alerting/unified/utils/duplicate.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateCopiedName: () => (/* binding */ generateCopiedName)
/* harmony export */ });

function generateCopiedName(originalName, exisitingNames) {
  const nonDuplicateName = originalName.replace(/\(copy( [0-9]+)?\)$/, "").trim();
  let newName = `${nonDuplicateName} (copy)`;
  for (let i = 2; exisitingNames.includes(newName); i++) {
    newName = `${nonDuplicateName} (copy ${i})`;
  }
  return newName;
}


/***/ })

}]);
//# sourceMappingURL=AlertingRuleForm.6bd0fb71795ebae33b95.js.map