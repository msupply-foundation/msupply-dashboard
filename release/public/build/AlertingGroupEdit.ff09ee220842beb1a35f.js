"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertingGroupEdit"],{

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

/***/ "./public/app/features/alerting/unified/group-details/GroupEditPage.tsx":
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
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/ErrorBoundary/ErrorBoundary.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_PageNotFound_EntityNotFound__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/core/components/PageNotFound/EntityNotFound.tsx");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var app_types_unified_alerting__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/types/unified-alerting.ts");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");
/* harmony import */ var _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/api/featureDiscoveryApi.ts");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_rule_editor_EvaluationGroupQuickPick__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/EvaluationGroupQuickPick.tsx");
/* harmony import */ var _hooks_ruleGroup_useDeleteRuleGroup__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/hooks/ruleGroup/useDeleteRuleGroup.ts");
/* harmony import */ var _hooks_ruleGroup_useUpdateRuleGroup__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/alerting/unified/hooks/ruleGroup/useUpdateRuleGroup.ts");
/* harmony import */ var _hooks_useAsync__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAsync.tsx");
/* harmony import */ var _hooks_useFolder__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFolder.ts");
/* harmony import */ var _hooks_usePrometheusConsistencyCheck__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/alerting/unified/hooks/usePrometheusConsistencyCheck.ts");
/* harmony import */ var _hooks_useReturnTo__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useReturnTo.ts");
/* harmony import */ var _rule_editor_formDefaults__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./public/app/features/alerting/unified/rule-editor/formDefaults.ts");
/* harmony import */ var _utils_groupIdentifier__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./public/app/features/alerting/unified/utils/groupIdentifier.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./public/app/features/alerting/unified/utils/navigation.ts");
/* harmony import */ var _components_DraggableRulesTable__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("./public/app/features/alerting/unified/group-details/components/DraggableRulesTable.tsx");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("./public/app/features/alerting/unified/group-details/validation.ts");































const { useDiscoverDsFeaturesQuery } = _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_22__.featureDiscoveryApi;
function GroupEditPage() {
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_18__.useDispatch)();
  const { dataSourceUid = "", namespaceId = "", groupName = "" } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_5__.useParams)();
  const { folder, loading: isFolderLoading } = (0,_hooks_useFolder__WEBPACK_IMPORTED_MODULE_28__.useFolder)(dataSourceUid === "grafana" ? namespaceId : "");
  const ruleSourceUid = dataSourceUid === "grafana" ? app_types_unified_alerting__WEBPACK_IMPORTED_MODULE_19__.GrafanaRulesSourceSymbol : dataSourceUid;
  const {
    data: dsFeatures,
    isLoading: isDsFeaturesLoading,
    error: dsFeaturesError
  } = useDiscoverDsFeaturesQuery({ uid: ruleSourceUid });
  const [getGroupAction, groupRequestState] = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_27__.useAsync)(async (rulerConfig) => {
    return dispatch(
      _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_21__.alertRuleApi.endpoints.getRuleGroupForNamespace.initiate({
        rulerConfig,
        namespace: namespaceId,
        group: groupName
      })
    ).unwrap();
  });
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (namespaceId && groupName && dsFeatures?.rulerConfig) {
      getGroupAction.execute(dsFeatures.rulerConfig);
    }
  }, [namespaceId, groupName, dsFeatures?.rulerConfig, getGroupAction]);
  const isLoadingGroup = isFolderLoading || isDsFeaturesLoading || (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_27__.isLoading)(groupRequestState);
  const { result: rulerGroup, error: ruleGroupError } = groupRequestState;
  const pageNav = {
    text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.group-edit.page-title", "Edit rule group"),
    parentItem: {
      text: folder?.title ?? namespaceId,
      url: (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_34__.createListFilterLink)([
        ["namespace", folder?.title ?? namespaceId],
        ["group", groupName]
      ])
    }
  };
  if (!!dsFeatures && !dsFeatures.rulerConfig) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_23__.AlertingPageWrapper, { pageNav, navId: "alert-list", isLoading: isLoadingGroup, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Alert, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.group-edit.group-not-editable", "Selected group cannot be edited"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.group-edit.group-not-editable-description", children: "This group belongs to a data source that does not support editing." }) }) });
  }
  const groupIdentifier = dataSourceUid === "grafana" ? {
    namespace: { uid: namespaceId },
    groupName,
    groupOrigin: "grafana"
  } : {
    rulesSource: { uid: dataSourceUid, name: dsFeatures?.name ?? "", ruleSourceType: "datasource" },
    namespace: { name: namespaceId },
    groupName,
    groupOrigin: "datasource"
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_23__.AlertingPageWrapper, { pageNav, navId: "alert-list", isLoading: isLoadingGroup, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      Boolean(dsFeaturesError) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Alert,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.group-edit.ds-error", "Error loading data source details"),
          bottomSpacing: 0,
          topSpacing: 2,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_33__.stringifyErrorLike)(dsFeaturesError) })
        }
      ),
      Boolean(ruleGroupError) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Alert,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.group-edit.rule-group-error", "Error loading rule group"),
          bottomSpacing: 0,
          topSpacing: 2,
          children: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_33__.stringifyErrorLike)(ruleGroupError)
        }
      )
    ] }),
    rulerGroup && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GroupEditForm, { rulerGroup, groupIdentifier }),
    !rulerGroup && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_PageNotFound_EntityNotFound__WEBPACK_IMPORTED_MODULE_16__.EntityNotFound, { entity: `${namespaceId}/${groupName}` })
  ] });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.withErrorBoundary)(GroupEditPage, { style: "page" }));
function GroupEditForm({ rulerGroup, groupIdentifier }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.useStyles2)(getStyles);
  const appInfo = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_17__.useAppNotification)();
  const { returnTo } = (0,_hooks_useReturnTo__WEBPACK_IMPORTED_MODULE_30__.useReturnTo)(_utils_navigation__WEBPACK_IMPORTED_MODULE_34__.groups.detailsPageLinkFromGroupIdentifier(groupIdentifier));
  const { folder } = (0,_hooks_useFolder__WEBPACK_IMPORTED_MODULE_28__.useFolder)(groupIdentifier.groupOrigin === "grafana" ? groupIdentifier.namespace.uid : "");
  const { waitForGroupConsistency } = (0,_hooks_usePrometheusConsistencyCheck__WEBPACK_IMPORTED_MODULE_29__.useRuleGroupConsistencyCheck)();
  const [updateRuleGroup] = (0,_hooks_ruleGroup_useUpdateRuleGroup__WEBPACK_IMPORTED_MODULE_26__.useUpdateRuleGroup)();
  const [deleteRuleGroup] = (0,_hooks_ruleGroup_useDeleteRuleGroup__WEBPACK_IMPORTED_MODULE_25__.useDeleteRuleGroup)();
  const [operations, setOperations] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const [confirmDeleteOpened, setConfirmDeleteOpened] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const groupIntervalOrDefault = rulerGroup?.interval ?? _rule_editor_formDefaults__WEBPACK_IMPORTED_MODULE_31__.DEFAULT_GROUP_EVALUATION_INTERVAL;
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, dirtyFields, isSubmitting }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
    mode: "onBlur",
    shouldFocusError: true,
    defaultValues: {
      name: rulerGroup.name,
      interval: rulerGroup.interval,
      namespace: groupIdentifier.groupOrigin === "datasource" ? groupIdentifier.namespace.name : void 0
    }
  });
  const onSwap = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((swapOperation) => {
    setOperations((prevOperations) => {
      return (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(prevOperations, (draft) => {
        draft.push(swapOperation);
      });
    });
  }, []);
  const onSubmit = async (data) => {
    try {
      const changeDelta = {
        namespaceName: dirtyFields.namespace ? data.namespace : void 0,
        groupName: dirtyFields.name ? data.name : void 0,
        interval: dirtyFields.interval ? data.interval : void 0,
        ruleSwaps: operations.length ? operations : void 0
      };
      const updatedGroupIdentifier = await updateRuleGroup.execute(
        (0,_utils_groupIdentifier__WEBPACK_IMPORTED_MODULE_32__.ruleGroupIdentifierV2toV1)(groupIdentifier),
        changeDelta
      );
      const shouldWaitForPromConsistency = !!changeDelta.namespaceName || !!changeDelta.groupName;
      if (shouldWaitForPromConsistency) {
        await waitForGroupConsistency(updatedGroupIdentifier);
      }
      const successMessage = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.group-edit.form.update-success", "Successfully updated the rule group");
      appInfo.success(successMessage);
      setMatchingGroupPageUrl(updatedGroupIdentifier);
    } catch (error) {
      (0,_Analytics__WEBPACK_IMPORTED_MODULE_20__.logError)(error instanceof Error ? error : new Error("Failed to update rule group"));
      appInfo.error(
        (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.group-edit.form.update-error", "Failed to update rule group"),
        (0,_utils_misc__WEBPACK_IMPORTED_MODULE_33__.stringifyErrorLike)(error)
      );
    }
  };
  const onDelete = async () => {
    await deleteRuleGroup.execute((0,_utils_groupIdentifier__WEBPACK_IMPORTED_MODULE_32__.ruleGroupIdentifierV2toV1)(groupIdentifier));
    await waitForGroupConsistency(groupIdentifier);
    redirectToListPage();
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit(onSubmit), children: [
      groupIdentifier.groupOrigin === "datasource" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Field,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.group-edit.form.namespace-label", "Namespace"),
          required: true,
          invalid: !!errors.namespace,
          error: errors.namespace?.message,
          className: styles.input,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Input,
            {
              id: "namespace",
              ...register("namespace", {
                required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.group-edit.form.namespace-required", "Namespace is required")
              })
            }
          )
        }
      ),
      groupIdentifier.groupOrigin === "grafana" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.group-edit.form.folder-label", "Folder"), required: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Input, { id: "folder", value: folder?.title ?? "", readOnly: true }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Field,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.group-edit.form.group-name-label", "Evaluation group name"),
          required: true,
          invalid: !!errors.name,
          error: errors.name?.message,
          className: styles.input,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Input,
            {
              id: "group-name",
              ...register("name", {
                required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.group-edit.form.group-name-required", "Group name is required")
              })
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Field,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.group-edit.form.interval-label", "Evaluation interval"),
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.group-edit.form.interval-description", "How often is the group evaluated"),
          invalid: !!errors.interval,
          error: errors.interval?.message,
          className: styles.input,
          htmlFor: "interval",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Input,
              {
                id: "interval",
                ...register("interval", (0,_validation__WEBPACK_IMPORTED_MODULE_36__.evaluateEveryValidationOptions)(rulerGroup.rules)),
                className: styles.intervalInput
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _components_rule_editor_EvaluationGroupQuickPick__WEBPACK_IMPORTED_MODULE_24__.EvaluationGroupQuickPick,
              {
                currentInterval: getValues("interval"),
                onSelect: (value) => setValue("interval", value, { shouldValidate: true, shouldDirty: true })
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Field,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.group-edit.form.rules-label", "Alerting and recording rules"),
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.group-edit.form.rules-description", "Drag rules to reorder"),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_DraggableRulesTable__WEBPACK_IMPORTED_MODULE_35__.DraggableRulesTable, { rules: rulerGroup.rules, groupInterval: groupIntervalOrDefault, onSwap })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Button, { type: "submit", disabled: isSubmitting, icon: isSubmitting ? "spinner" : void 0, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.group-edit.form.save", children: "Save" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.LinkButton, { variant: "secondary", disabled: isSubmitting, href: returnTo, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.common.cancel", children: "Cancel" }) })
      ] })
    ] }),
    groupIdentifier.groupOrigin === "datasource" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { direction: "row", justifyContent: "flex-end", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Button,
        {
          type: "button",
          variant: "destructive",
          onClick: () => setConfirmDeleteOpened(true),
          disabled: isSubmitting,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.group-edit.form.delete", children: "Delete" })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.ConfirmModal,
        {
          isOpen: confirmDeleteOpened,
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.group-edit.form.delete-title", "Delete rule group"),
          body: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.group-edit.form.delete-body", "Are you sure you want to delete this rule group?"),
          confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.group-edit.form.delete-confirm", "Delete"),
          onConfirm: onDelete,
          onDismiss: () => setConfirmDeleteOpened(false)
        }
      )
    ] })
  ] });
}
const getStyles = (theme) => ({
  intervalInput: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: theme.spacing(0.5)
  }),
  input: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    maxWidth: "600px"
  })
});
function setMatchingGroupPageUrl(groupIdentifier) {
  if (groupIdentifier.groupOrigin === "datasource") {
    const { rulesSource, namespace, groupName } = groupIdentifier;
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.locationService.replace(_utils_navigation__WEBPACK_IMPORTED_MODULE_34__.groups.editPageLink(rulesSource.uid, namespace.name, groupName, { skipSubPath: true }));
  } else {
    const { namespace, groupName } = groupIdentifier;
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.locationService.replace(_utils_navigation__WEBPACK_IMPORTED_MODULE_34__.groups.editPageLink("grafana", namespace.uid, groupName, { skipSubPath: true }));
  }
}
function redirectToListPage() {
  _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.locationService.replace((0,_utils_navigation__WEBPACK_IMPORTED_MODULE_34__.alertListPageLink)(void 0, { skipSubPath: true }));
}


/***/ }),

/***/ "./public/app/features/alerting/unified/group-details/components/DraggableRulesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DraggableRulesTable: () => (/* binding */ DraggableRulesTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@hello-pangea/dnd/dist/dnd.esm.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/immer/dist/immer.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _reducers_ruler_ruleGroups__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/reducers/ruler/ruleGroups.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");











function DraggableRulesTable({ rules, groupInterval, onSwap }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  const [rulesList, setRulesList] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(rules);
  const onDragEnd = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(
    (result) => {
      if (!result.destination) {
        return;
      }
      const swapOperation = [result.source.index, result.destination.index];
      onSwap(swapOperation);
      const newOrderedRules = (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(rulesList, (draft) => {
        (0,_reducers_ruler_ruleGroups__WEBPACK_IMPORTED_MODULE_10__.swapItems)(draft, swapOperation);
      });
      setRulesList(newOrderedRules);
    },
    [rulesList, onSwap]
  );
  const rulesWithUID = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    return rulesList.map((rulerRule) => ({ ...rulerRule, uid: (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_11__.hashRulerRule)(rulerRule) }));
  }, [rulesList]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      ListItem,
      {
        ruleName: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.draggable-rules-table.rule-name", "Rule name"),
        pendingPeriod: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.draggable-rules-table.pending-period", "Pending period"),
        evalsToStartAlerting: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "alerting.draggable-rules-table.evals-to-start-alerting",
          "Evaluations to start alerting"
        ),
        className: styles.listHeader
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_2__.DragDropContext, { onDragEnd, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_2__.Droppable,
      {
        droppableId: "alert-list",
        mode: "standard",
        renderClone: (provided, _snapshot, rubric) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          DraggableListItem,
          {
            provided,
            rule: rulesWithUID[rubric.source.index],
            isClone: true,
            groupInterval
          }
        ),
        children: (droppableProvided) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "column", gap: 0, ref: droppableProvided.innerRef, ...droppableProvided.droppableProps, children: [
          rulesWithUID.map((rule, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_2__.Draggable, { draggableId: rule.uid, index, isDragDisabled: false, children: (provided) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DraggableListItem, { provided, rule, groupInterval }, rule.uid) }, rule.uid)),
          droppableProvided.placeholder
        ] })
      }
    ) })
  ] });
}
const DraggableListItem = ({ provided, rule, groupInterval, isClone = false }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  const ruleName = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_12__.getRuleName)(rule);
  const pendingPeriod = _utils_rules__WEBPACK_IMPORTED_MODULE_12__.rulerRuleType.any.alertingRule(rule) ? rule.for : null;
  const numberEvaluationsToStartAlerting = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_12__.getNumberEvaluationsToStartAlerting)(pendingPeriod ?? "0s", groupInterval);
  const isRecordingRule = _utils_rules__WEBPACK_IMPORTED_MODULE_12__.rulerRuleType.any.recordingRule(rule);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    ListItem,
    {
      dragHandle: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { name: "draggabledots" }),
      ruleName,
      pendingPeriod,
      evalsToStartAlerting: isRecordingRule ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Badge, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.draggable-rules-table.recording", "Recording"), color: "purple" }) : numberEvaluationsToStartAlerting,
      "data-testid": "reorder-alert-rule",
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.listItem, { [styles.listItemClone]: isClone }),
      ref: provided.innerRef,
      ...provided.draggableProps,
      ...provided.dragHandleProps
    }
  );
};
const ListItem = (0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(
  ({ dragHandle, ruleName, pendingPeriod, evalsToStartAlerting, className, ...props }, ref) => {
    const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.listItem, className), ref, ...props, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { flex: "0 0 24px", children: dragHandle }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { flex: 1, children: ruleName }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { basis: "30%", children: pendingPeriod }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { basis: "30%", children: evalsToStartAlerting })
    ] });
  }
);
ListItem.displayName = "ListItem";
const getStyles = (theme) => ({
  listItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing(1),
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    "&:nth-child(even)": {
      background: theme.colors.background.secondary
    }
  }),
  listItemClone: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    border: `solid 1px ${theme.colors.primary.shade}`
  }),
  listHeader: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontWeight: theme.typography.fontWeightBold,
    borderBottom: `1px solid ${theme.colors.border.weak}`
  })
});


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

/***/ "./public/app/features/alerting/unified/hooks/ruleGroup/useDeleteRuleGroup.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDeleteRuleGroup: () => (/* binding */ useDeleteRuleGroup)
/* harmony export */ });
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");
/* harmony import */ var _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/api/featureDiscoveryApi.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _useAsync__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAsync.tsx");
/* harmony import */ var _useProduceNewRuleGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/ruleGroup/useProduceNewRuleGroup.ts");







const { useDeleteRuleGroupFromNamespaceMutation } = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_1__.alertRuleApi;
const { useLazyDiscoverDsFeaturesQuery } = _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_2__.featureDiscoveryApi;
function useDeleteRuleGroup() {
  const [deleteRuleGroup] = useDeleteRuleGroupFromNamespaceMutation();
  const [discoverDataSourceFeature] = useLazyDiscoverDsFeaturesQuery();
  return (0,_useAsync__WEBPACK_IMPORTED_MODULE_4__.useAsync)(async (ruleGroupIdentifier) => {
    const { dataSourceName, namespaceName, groupName } = ruleGroupIdentifier;
    const { rulerConfig } = await discoverDataSourceFeature({ rulesSourceName: dataSourceName }).unwrap();
    if (!rulerConfig) {
      throw (0,_useProduceNewRuleGroup__WEBPACK_IMPORTED_MODULE_5__.RulerNotSupportedError)(dataSourceName);
    }
    const result = await deleteRuleGroup({ rulerConfig, namespace: namespaceName, group: groupName }).unwrap();
    await (0,app_store_store__WEBPACK_IMPORTED_MODULE_0__.dispatch)((0,_state_actions__WEBPACK_IMPORTED_MODULE_3__.fetchPromAndRulerRulesAction)({ rulesSourceName: dataSourceName }));
    return result;
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/ruleGroup/useUpdateRuleGroup.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMoveRuleGroup: () => (/* binding */ useMoveRuleGroup),
/* harmony export */   useRenameRuleGroup: () => (/* binding */ useRenameRuleGroup),
/* harmony export */   useReorderRuleForRuleGroup: () => (/* binding */ useReorderRuleForRuleGroup),
/* harmony export */   useUpdateRuleGroup: () => (/* binding */ useUpdateRuleGroup),
/* harmony export */   useUpdateRuleGroupConfiguration: () => (/* binding */ useUpdateRuleGroupConfiguration)
/* harmony export */ });
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");
/* harmony import */ var _api_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/api/util.ts");
/* harmony import */ var _reducers_ruler_ruleGroups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/reducers/ruler/ruleGroups.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _useAsync__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAsync.tsx");
/* harmony import */ var _useProduceNewRuleGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/ruleGroup/useProduceNewRuleGroup.ts");









const ruleUpdateSuccessMessage = () => (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("alerting.rule-groups.update.success", "Successfully updated rule group");
function useUpdateRuleGroup() {
  const [produceNewRuleGroup] = (0,_useProduceNewRuleGroup__WEBPACK_IMPORTED_MODULE_7__.useProduceNewRuleGroup)();
  const [fetchRuleGroup] = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_2__.alertRuleApi.endpoints.getRuleGroupForNamespace.useLazyQuery();
  const [upsertRuleGroup] = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_2__.alertRuleApi.endpoints.upsertRuleGroupForNamespace.useMutation();
  const [deleteRuleGroup] = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_2__.alertRuleApi.endpoints.deleteRuleGroupFromNamespace.useMutation();
  return (0,_useAsync__WEBPACK_IMPORTED_MODULE_6__.useAsync)(async (ruleGroup, delta) => {
    const updateActions = [];
    const isGrafanaSource = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.isGrafanaRulesSource)(ruleGroup.dataSourceName);
    if (delta.namespaceName) {
      if (isGrafanaSource) {
        throw new Error("Moving a Grafana-managed rule group to another folder is currently not supported.");
      }
      updateActions.push((0,_reducers_ruler_ruleGroups__WEBPACK_IMPORTED_MODULE_4__.moveRuleGroupAction)({ newNamespaceName: delta.namespaceName }));
    }
    if (delta.groupName) {
      updateActions.push((0,_reducers_ruler_ruleGroups__WEBPACK_IMPORTED_MODULE_4__.renameRuleGroupAction)({ groupName: delta.groupName }));
    }
    if (delta.interval) {
      updateActions.push((0,_reducers_ruler_ruleGroups__WEBPACK_IMPORTED_MODULE_4__.updateRuleGroupAction)({ interval: delta.interval }));
    }
    if (delta.ruleSwaps) {
      updateActions.push((0,_reducers_ruler_ruleGroups__WEBPACK_IMPORTED_MODULE_4__.reorderRulesInRuleGroupAction)({ swaps: delta.ruleSwaps }));
    }
    const { newRuleGroupDefinition, rulerConfig } = await produceNewRuleGroup(ruleGroup, updateActions);
    const oldNamespace = ruleGroup.namespaceName;
    const targetNamespace = delta.namespaceName ?? oldNamespace;
    const oldGroupName = ruleGroup.groupName;
    const targetGroupName = newRuleGroupDefinition.name;
    const isNamespaceChanged = oldNamespace !== targetNamespace;
    const isGroupRenamed = oldGroupName !== targetGroupName;
    if (targetGroupName && isGroupRenamed) {
      const targetGroup = await fetchRuleGroup({
        rulerConfig,
        namespace: targetNamespace,
        group: targetGroupName,
        // since this could throw 404
        notificationOptions: { showErrorAlert: false }
      }).unwrap().catch(_api_util__WEBPACK_IMPORTED_MODULE_3__.notFoundToNullOrThrow);
      if (targetGroup?.rules?.length) {
        throw new Error("Target group already has rules, merging rule groups is currently not supported.");
      }
    }
    await upsertRuleGroup({
      rulerConfig,
      namespace: targetNamespace,
      payload: newRuleGroupDefinition,
      notificationOptions: { showSuccessAlert: false }
    }).unwrap();
    const newGroupIdentifier = rulerConfig.dataSourceName === "grafana" ? {
      groupName: targetGroupName,
      namespace: { uid: targetNamespace },
      groupOrigin: "grafana"
    } : {
      groupName: targetGroupName,
      namespace: { name: targetNamespace },
      groupOrigin: "datasource",
      rulesSource: {
        uid: rulerConfig.dataSourceUid,
        name: rulerConfig.dataSourceName,
        ruleSourceType: "datasource"
      }
    };
    const shouldRemoveOldGroup = (isNamespaceChanged || isGroupRenamed) && !isGrafanaSource;
    if (shouldRemoveOldGroup) {
      await deleteRuleGroup({
        rulerConfig,
        namespace: oldNamespace,
        group: oldGroupName,
        notificationOptions: { showSuccessAlert: false }
      }).unwrap().catch((e) => {
        (0,_Analytics__WEBPACK_IMPORTED_MODULE_1__.logError)(e);
      });
    }
    return newGroupIdentifier;
  });
}
function useUpdateRuleGroupConfiguration() {
  const [produceNewRuleGroup] = (0,_useProduceNewRuleGroup__WEBPACK_IMPORTED_MODULE_7__.useProduceNewRuleGroup)();
  const [upsertRuleGroup] = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_2__.alertRuleApi.endpoints.upsertRuleGroupForNamespace.useMutation();
  return (0,_useAsync__WEBPACK_IMPORTED_MODULE_6__.useAsync)(async (ruleGroup, interval) => {
    const { namespaceName } = ruleGroup;
    const action = (0,_reducers_ruler_ruleGroups__WEBPACK_IMPORTED_MODULE_4__.updateRuleGroupAction)({ interval });
    const { newRuleGroupDefinition, rulerConfig } = await produceNewRuleGroup(ruleGroup, [action]);
    return upsertRuleGroup({
      rulerConfig,
      namespace: namespaceName,
      payload: newRuleGroupDefinition,
      notificationOptions: { successMessage: ruleUpdateSuccessMessage() }
    }).unwrap();
  });
}
function useMoveRuleGroup() {
  const [produceNewRuleGroup] = (0,_useProduceNewRuleGroup__WEBPACK_IMPORTED_MODULE_7__.useProduceNewRuleGroup)();
  const [fetchRuleGroup] = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_2__.alertRuleApi.endpoints.getRuleGroupForNamespace.useLazyQuery();
  const [upsertRuleGroup] = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_2__.alertRuleApi.endpoints.upsertRuleGroupForNamespace.useMutation();
  const [deleteRuleGroup] = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_2__.alertRuleApi.endpoints.deleteRuleGroupFromNamespace.useMutation();
  const successMessage = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("alerting.rule-groups.move.success", "Successfully moved rule group");
  return (0,_useAsync__WEBPACK_IMPORTED_MODULE_6__.useAsync)(
    async (ruleGroup, namespaceName, groupName, interval) => {
      if ((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.isGrafanaRulesSource)(ruleGroup.dataSourceName)) {
        throw new Error("Moving a Grafana-managed rule group to another folder is currently not supported.");
      }
      const action = (0,_reducers_ruler_ruleGroups__WEBPACK_IMPORTED_MODULE_4__.moveRuleGroupAction)({ newNamespaceName: namespaceName, groupName, interval });
      const { newRuleGroupDefinition, rulerConfig } = await produceNewRuleGroup(ruleGroup, [action]);
      const oldNamespace = ruleGroup.namespaceName;
      const targetNamespace = action.payload.newNamespaceName;
      const oldGroupName = ruleGroup.groupName;
      const targetGroupName = action.payload.groupName;
      const isGroupRenamed = Boolean(targetGroupName) && oldGroupName !== targetGroupName;
      if (targetGroupName && isGroupRenamed) {
        const targetGroup = await fetchRuleGroup({
          rulerConfig,
          namespace: targetNamespace,
          group: targetGroupName,
          // since this could throw 404
          notificationOptions: { showErrorAlert: false }
        }).unwrap().catch(_api_util__WEBPACK_IMPORTED_MODULE_3__.notFoundToNullOrThrow);
        if (targetGroup?.rules?.length) {
          throw new Error("Target group already has rules, merging rule groups is currently not supported.");
        }
      }
      await upsertRuleGroup({
        rulerConfig,
        namespace: targetNamespace,
        payload: newRuleGroupDefinition,
        notificationOptions: { successMessage }
      }).unwrap();
      const result = await deleteRuleGroup({
        rulerConfig,
        namespace: oldNamespace,
        group: oldGroupName,
        notificationOptions: { showSuccessAlert: false }
      }).unwrap();
      return result;
    }
  );
}
function useRenameRuleGroup() {
  const [produceNewRuleGroup] = (0,_useProduceNewRuleGroup__WEBPACK_IMPORTED_MODULE_7__.useProduceNewRuleGroup)();
  const [fetchRuleGroup] = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_2__.alertRuleApi.endpoints.getRuleGroupForNamespace.useLazyQuery();
  const [upsertRuleGroup] = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_2__.alertRuleApi.endpoints.upsertRuleGroupForNamespace.useMutation();
  const [deleteRuleGroup] = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_2__.alertRuleApi.endpoints.deleteRuleGroupFromNamespace.useMutation();
  return (0,_useAsync__WEBPACK_IMPORTED_MODULE_6__.useAsync)(async (ruleGroup, groupName, interval) => {
    const action = (0,_reducers_ruler_ruleGroups__WEBPACK_IMPORTED_MODULE_4__.renameRuleGroupAction)({ groupName, interval });
    const { newRuleGroupDefinition, rulerConfig } = await produceNewRuleGroup(ruleGroup, [action]);
    const oldGroupName = ruleGroup.groupName;
    const newGroupName = action.payload.groupName;
    const namespaceName = ruleGroup.namespaceName;
    const successMessage = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("alerting.rule-groups.rename.success", "Successfully renamed rule group");
    const targetGroup = await fetchRuleGroup({
      rulerConfig,
      namespace: namespaceName,
      group: newGroupName,
      // since this could throw 404
      notificationOptions: { showErrorAlert: false }
    }).unwrap().catch(_api_util__WEBPACK_IMPORTED_MODULE_3__.notFoundToNullOrThrow);
    if (targetGroup?.rules?.length) {
      throw new Error("Target group has existing rules, merging rule groups is currently not supported.");
    }
    const result = await upsertRuleGroup({
      rulerConfig,
      namespace: namespaceName,
      payload: newRuleGroupDefinition,
      notificationOptions: { successMessage }
    }).unwrap();
    await deleteRuleGroup({
      rulerConfig,
      namespace: namespaceName,
      group: oldGroupName,
      notificationOptions: { showSuccessAlert: false }
    }).unwrap();
    return result;
  });
}
function useReorderRuleForRuleGroup() {
  const [produceNewRuleGroup] = (0,_useProduceNewRuleGroup__WEBPACK_IMPORTED_MODULE_7__.useProduceNewRuleGroup)();
  const [upsertRuleGroup] = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_2__.alertRuleApi.endpoints.upsertRuleGroupForNamespace.useMutation();
  return (0,_useAsync__WEBPACK_IMPORTED_MODULE_6__.useAsync)(async (ruleGroup, swaps) => {
    const { namespaceName } = ruleGroup;
    const action = (0,_reducers_ruler_ruleGroups__WEBPACK_IMPORTED_MODULE_4__.reorderRulesInRuleGroupAction)({ swaps });
    const { newRuleGroupDefinition, rulerConfig } = await produceNewRuleGroup(ruleGroup, [action]);
    return upsertRuleGroup({
      rulerConfig,
      namespace: namespaceName,
      payload: newRuleGroupDefinition,
      notificationOptions: { successMessage: ruleUpdateSuccessMessage() }
    }).unwrap();
  });
}


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


/***/ })

}]);
//# sourceMappingURL=AlertingGroupEdit.ff09ee220842beb1a35f.js.map