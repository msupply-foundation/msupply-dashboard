"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["EditMuteTiming"],{

/***/ "./public/app/features/alerting/unified/api/timeIntervalsApi.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeIntervalsApi: () => (/* binding */ timeIntervalsApi)
/* harmony export */ });
/* harmony import */ var app_features_alerting_unified_openapi_timeIntervalsApi_gen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/openapi/timeIntervalsApi.gen.ts");


const timeIntervalsApi = app_features_alerting_unified_openapi_timeIntervalsApi_gen__WEBPACK_IMPORTED_MODULE_0__.generatedTimeIntervalsApi;


/***/ }),

/***/ "./public/app/features/alerting/unified/components/mute-timings/EditMuteTiming.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var app_features_alerting_unified_components_mute_timings_useMuteTimings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/mute-timings/useMuteTimings.tsx");
/* harmony import */ var app_features_alerting_unified_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useURLSearchParams.ts");
/* harmony import */ var _state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertmanagerContext.tsx");
/* harmony import */ var _withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/withPageErrorBoundary.tsx");
/* harmony import */ var _AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _MuteTimingForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/mute-timings/MuteTimingForm.tsx");










const EditTimingRoute = () => {
  const [queryParams] = (0,app_features_alerting_unified_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_4__.useURLSearchParams)();
  const { selectedAlertmanager } = (0,_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_5__.useAlertmanager)();
  const name = queryParams.get("muteName");
  const {
    isLoading,
    data: timeInterval,
    isError
  } = (0,app_features_alerting_unified_components_mute_timings_useMuteTimings__WEBPACK_IMPORTED_MODULE_3__.useGetMuteTiming)({
    alertmanager: selectedAlertmanager,
    name
  });
  if (!name) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__.Navigate, { replace: true, to: "/alerting/routes" });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _MuteTimingForm__WEBPACK_IMPORTED_MODULE_8__["default"],
    {
      editMode: true,
      loading: isLoading,
      showError: isError,
      muteTiming: timeInterval,
      provisioned: timeInterval?.provisioned
    }
  );
};
function EditMuteTimingPage() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_7__.AlertmanagerPageWrapper,
    {
      navId: "am-routes",
      pageNav: {
        id: "alert-policy-edit",
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.edit-mute-timing-page.text.edit-time-interval", "Edit time interval")
      },
      accessType: "notification",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EditTimingRoute, {})
    }
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_6__.withPageErrorBoundary)(EditMuteTimingPage));


/***/ }),

/***/ "./public/app/features/alerting/unified/components/mute-timings/MuteTimingForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldSet.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_alerting_unified_components_mute_timings_useMuteTimings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/mute-timings/useMuteTimings.tsx");
/* harmony import */ var _state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertmanagerContext.tsx");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_mute_timings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/mute-timings.ts");
/* harmony import */ var _Provisioning__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/Provisioning.tsx");
/* harmony import */ var _MuteTimingTimeInterval__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/mute-timings/MuteTimingTimeInterval.tsx");













const useDefaultValues = (muteTiming) => {
  const defaultValues = {
    name: "",
    time_intervals: [_utils_mute_timings__WEBPACK_IMPORTED_MODULE_15__.defaultTimeInterval]
  };
  if (!muteTiming) {
    return defaultValues;
  }
  const intervals = muteTiming.time_intervals.map((interval) => ({
    times: interval.times,
    weekdays: interval.weekdays?.join(", "),
    days_of_month: interval.days_of_month?.join(", "),
    months: interval.months?.join(", "),
    years: interval.years?.join(", "),
    location: interval.location ?? _utils_mute_timings__WEBPACK_IMPORTED_MODULE_15__.defaultTimeInterval.location,
    disable: (0,_utils_mute_timings__WEBPACK_IMPORTED_MODULE_15__.isTimeIntervalDisabled)(interval)
  }));
  return {
    name: muteTiming.name,
    time_intervals: intervals
  };
};
const MuteTimingForm = ({ muteTiming, showError, loading, provisioned, editMode }) => {
  const { selectedAlertmanager } = (0,_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_13__.useAlertmanager)();
  const hookArgs = { alertmanager: selectedAlertmanager };
  const [createTimeInterval] = (0,app_features_alerting_unified_components_mute_timings_useMuteTimings__WEBPACK_IMPORTED_MODULE_12__.useCreateMuteTiming)(hookArgs);
  const [updateTimeInterval] = (0,app_features_alerting_unified_components_mute_timings_useMuteTimings__WEBPACK_IMPORTED_MODULE_12__.useUpdateMuteTiming)(hookArgs);
  const validateMuteTiming = (0,app_features_alerting_unified_components_mute_timings_useMuteTimings__WEBPACK_IMPORTED_MODULE_12__.useValidateMuteTiming)(hookArgs);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  const defaultValues = useDefaultValues(muteTiming);
  const formApi = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({ defaultValues, values: defaultValues });
  const updating = formApi.formState.isSubmitting;
  const returnLink = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_14__.makeAMLink)("/alerting/routes/", selectedAlertmanager, { tab: "time_intervals" });
  const onSubmit = async (values) => {
    const interval = (0,_utils_mute_timings__WEBPACK_IMPORTED_MODULE_15__.createMuteTiming)(values);
    const updateOrCreate = async () => {
      if (editMode) {
        return updateTimeInterval.execute({ interval, originalName: muteTiming?.metadata?.name || muteTiming.name });
      }
      return createTimeInterval.execute({ interval });
    };
    return updateOrCreate().then(() => {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.locationService.push(returnLink);
    });
  };
  if (loading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.time-interval-form.text-loading-time-interval", "Loading time interval") });
  }
  if (showError) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "alerting.time-interval-form.title-no-matching-time-interval-found",
          "No matching time interval found"
        )
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    provisioned && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Provisioning__WEBPACK_IMPORTED_MODULE_16__.ProvisioningAlert, { resource: _Provisioning__WEBPACK_IMPORTED_MODULE_16__.ProvisionedResource.MuteTiming }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, { ...formApi, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", { onSubmit: formApi.handleSubmit(onSubmit), "data-testid": "mute-timing-form", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.FieldSet, { disabled: provisioned || updating, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field,
        {
          required: true,
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.mute-timing-form.label-name", "Name"),
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
            "alerting.time-interval-form.description-unique-time-interval",
            "A unique name for the time interval"
          ),
          invalid: !!formApi.formState.errors?.name,
          error: formApi.formState.errors.name?.message,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Input,
            {
              ...formApi.register("name", {
                required: true,
                validate: async (value) => {
                  const skipValidation = editMode && value === muteTiming?.name;
                  return validateMuteTiming(value, skipValidation);
                }
              }),
              className: styles.input,
              "data-testid": "mute-timing-name"
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MuteTimingTimeInterval__WEBPACK_IMPORTED_MODULE_17__.MuteTimingTimeInterval, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
        {
          type: "submit",
          className: styles.submitButton,
          disabled: updating,
          icon: updating ? "spinner" : void 0,
          children: updating ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.time-interval.saving", children: "Saving time interval" }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.time-interval.save", children: "Save time interval" })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.LinkButton, { type: "button", variant: "secondary", fill: "outline", href: returnLink, disabled: updating, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.common.cancel", children: "Cancel" }) })
    ] }) }) })
  ] });
};
const getStyles = (theme) => ({
  input: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "400px"
  }),
  submitButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginRight: theme.spacing(1)
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MuteTimingForm);


/***/ }),

/***/ "./public/app/features/alerting/unified/components/mute-timings/MuteTimingTimeInterval.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MuteTimingTimeInterval: () => (/* binding */ MuteTimingTimeInterval),
/* harmony export */   validateDaysOfMonth: () => (/* binding */ validateDaysOfMonth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldSet.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertmanagerContext.tsx");
/* harmony import */ var _utils_mute_timings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/mute-timings.ts");
/* harmony import */ var _MuteTimingTimeRange__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/mute-timings/MuteTimingTimeRange.tsx");
/* harmony import */ var _timezones__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/mute-timings/timezones.tsx");












const MuteTimingTimeInterval = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.useStyles2)(getStyles);
  const { formState, register, setValue } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
  const {
    fields: timeIntervals,
    append: addTimeInterval,
    remove: removeTimeInterval
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFieldArray)({
    name: "time_intervals"
  });
  const { isGrafanaAlertmanager } = (0,_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_14__.useAlertmanager)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.FieldSet, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.mute-timing-time-interval.label-time-intervals", "Time intervals"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.mute-timing-time-interval.description", children: "A time interval item is a definition for a moment in time. All fields are lists, and at least one list element must be satisfied to match the field. If a field is left blank, any moment of time will match the field. For an instant of time to match a complete time interval, all fields must match. A time interval can contain multiple time interval items." }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 2, children: timeIntervals.map((timeInterval, timeIntervalIndex) => {
      const errors = formState.errors;
      register(`time_intervals.${timeIntervalIndex}.location`);
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.timeIntervalSection, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MuteTimingTimeRange__WEBPACK_IMPORTED_MODULE_16__.MuteTimingTimeRange, { intervalIndex: timeIntervalIndex }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.mute-timing-time-interval.label-location", "Location"),
            invalid: Boolean(errors.time_intervals?.[timeIntervalIndex]?.location),
            error: errors.time_intervals?.[timeIntervalIndex]?.location?.message,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _timezones__WEBPACK_IMPORTED_MODULE_17__.TimezoneSelect,
              {
                prefix: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { name: "map-marker" }),
                width: 50,
                onChange: (selectedTimezone) => {
                  setValue(`time_intervals.${timeIntervalIndex}.location`, selectedTimezone.value);
                },
                defaultValue: { label: timeInterval.location, value: timeInterval.location },
                "data-testid": "mute-timing-location"
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.mute-timing-time-interval.label-days-of-the-week", "Days of the week"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          DaysOfTheWeek,
          {
            onChange: (daysOfWeek) => {
              setValue(`time_intervals.${timeIntervalIndex}.weekdays`, daysOfWeek);
            },
            defaultValue: timeInterval.weekdays
          }
        ) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.mute-timing-time-interval.label-days-of-the-month", "Days of the month"),
            description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
              "alerting.mute-timing-time-interval.description-dats-of-the-month",
              "The days of the month, 1:31, of a month. Negative values can be used to represent days which begin at the end of the month"
            ),
            invalid: !!errors.time_intervals?.[timeIntervalIndex]?.days_of_month,
            error: errors.time_intervals?.[timeIntervalIndex]?.days_of_month?.message,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Input,
              {
                ...register(`time_intervals.${timeIntervalIndex}.days_of_month`, {
                  validate: validateDaysOfMonth
                }),
                width: 50,
                defaultValue: timeInterval.days_of_month,
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
                  "alerting.mute-timing-time-interval.mute-timing-days-placeholder-example",
                  "Example: 1, 14:16, -1"
                ),
                "data-testid": "mute-timing-days"
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.mute-timing-time-interval.label-months", "Months"),
            description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
              "alerting.mute-timing-time-interval.description-months",
              "The months of the year in either numerical or the full calendar month"
            ),
            invalid: !!errors.time_intervals?.[timeIntervalIndex]?.months,
            error: errors.time_intervals?.[timeIntervalIndex]?.months?.message,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Input,
              {
                ...register(`time_intervals.${timeIntervalIndex}.months`, {
                  validate: (value) => (0,_utils_mute_timings__WEBPACK_IMPORTED_MODULE_15__.validateArrayField)(
                    value,
                    (month) => _utils_mute_timings__WEBPACK_IMPORTED_MODULE_15__.MONTHS.includes(month) || parseInt(month, 10) < 13 && parseInt(month, 10) > 0,
                    "Invalid month"
                  )
                }),
                width: 50,
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
                  "alerting.mute-timing-time-interval.mute-timing-months-placeholder-example-mayaugust-december",
                  "Example: 1:3, may:august, december"
                ),
                defaultValue: timeInterval.months,
                "data-testid": "mute-timing-months"
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.mute-timing-time-interval.label-years", "Years"),
            invalid: !!errors.time_intervals?.[timeIntervalIndex]?.years,
            error: errors.time_intervals?.[timeIntervalIndex]?.years?.message ?? "",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Input,
              {
                ...register(`time_intervals.${timeIntervalIndex}.years`, {
                  validate: (value) => (0,_utils_mute_timings__WEBPACK_IMPORTED_MODULE_15__.validateArrayField)(value, (year) => /^\d{4}$/.test(year), "Invalid year")
                }),
                width: 50,
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
                  "alerting.mute-timing-time-interval.mute-timing-years-placeholder-example",
                  "Example: 2021:2022, 2030"
                ),
                defaultValue: timeInterval.years,
                "data-testid": "mute-timing-years"
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "row", gap: 2, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
            {
              type: "button",
              variant: "destructive",
              fill: "outline",
              icon: "trash-alt",
              onClick: () => removeTimeInterval(timeIntervalIndex),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.mute-timing-time-interval.remove-time-interval", children: "Remove time interval" })
            }
          ),
          !isGrafanaAlertmanager && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.InlineSwitch,
            {
              id: `time_intervals.${timeIntervalIndex}.disable`,
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.mute-timing-time-interval.label-disable", "Disable"),
              showLabel: true,
              transparent: true,
              ...register(`time_intervals.${timeIntervalIndex}.disable`)
            }
          )
        ] })
      ] }, timeInterval.id);
    }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
      {
        type: "button",
        variant: "secondary",
        className: styles.removeTimeIntervalButton,
        onClick: () => {
          addTimeInterval(_utils_mute_timings__WEBPACK_IMPORTED_MODULE_15__.defaultTimeInterval);
        },
        icon: "plus",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.mute-timing-time-interval.add-another-time-interval-item", children: "Add another time interval item" })
      }
    )
  ] }) });
};
const parseDays = (input) => {
  const parsedDays = input.split(",").map((day) => day.trim()).flatMap((day) => day.includes(":") ? parseWeekdayRange(day) : day).map((day) => day.toLowerCase()).filter((day) => _utils_mute_timings__WEBPACK_IMPORTED_MODULE_15__.DAYS_OF_THE_WEEK.includes(day));
  return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.uniq)(parsedDays);
};
function validateDaysOfMonth(value) {
  return (0,_utils_mute_timings__WEBPACK_IMPORTED_MODULE_15__.validateArrayField)(
    value,
    (day) => {
      if (!/^-?\d+$/.test(day)) {
        return false;
      }
      const parsedDay = parseInt(day, 10);
      return parsedDay > -31 && parsedDay < 0 || parsedDay > 0 && parsedDay < 32;
    },
    "Invalid day"
  );
}
function parseWeekdayRange(input) {
  const [start = "", end = ""] = input.split(":");
  const startIndex = _utils_mute_timings__WEBPACK_IMPORTED_MODULE_15__.DAYS_OF_THE_WEEK.indexOf(start);
  const endIndex = _utils_mute_timings__WEBPACK_IMPORTED_MODULE_15__.DAYS_OF_THE_WEEK.indexOf(end);
  return _utils_mute_timings__WEBPACK_IMPORTED_MODULE_15__.DAYS_OF_THE_WEEK.slice(startIndex, endIndex + 1);
}
const DaysOfTheWeek = ({ defaultValue = "", onChange }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.useStyles2)(getStyles);
  const defaultValues = parseDays(defaultValue);
  const [selectedDays, setSelectedDays] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(defaultValues);
  const toggleDay = (day) => {
    selectedDays.includes(day) ? setSelectedDays((selectedDays2) => (0,lodash__WEBPACK_IMPORTED_MODULE_2__.without)(selectedDays2, day)) : setSelectedDays((selectedDays2) => (0,lodash__WEBPACK_IMPORTED_MODULE_2__.concat)(selectedDays2, day));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    onChange(selectedDays.join(", "));
  }, [selectedDays, onChange]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { "data-testid": "mute-timing-weekdays", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { gap: 1, children: _utils_mute_timings__WEBPACK_IMPORTED_MODULE_15__.DAYS_OF_THE_WEEK.map((day) => {
    const style = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.dayOfTheWeek, selectedDays.includes(day) && "selected");
    const abbreviated = day.slice(0, 3);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", className: style, onClick: () => toggleDay(day), children: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.upperFirst)(abbreviated) }, day);
  }) }) });
};
const getStyles = (theme) => ({
  input: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "400px"
  }),
  timeIntervalSection: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    backgroundColor: theme.colors.background.secondary,
    padding: theme.spacing(2)
  }),
  removeTimeIntervalButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: theme.spacing(2)
  }),
  dayOfTheWeek: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    cursor: "pointer",
    userSelect: "none",
    padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
    border: `solid 1px ${theme.colors.border.medium}`,
    background: "none",
    borderRadius: theme.shape.radius.default,
    color: theme.colors.text.secondary,
    "&.selected": {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.colors.primary.text,
      borderColor: theme.colors.primary.border,
      background: theme.colors.primary.transparent
    }
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/mute-timings/MuteTimingTimeRange.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MuteTimingTimeRange: () => (/* binding */ MuteTimingTimeRange)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _ConditionalWrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/ConditionalWrap.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/mute-timings/util.tsx");








const INVALID_FORMAT_MESSAGE = "Times must be between 00:00 and 24:00 UTC";
const MuteTimingTimeRange = ({ intervalIndex }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useStyles2)(getStyles);
  const { register, formState, getValues, watch } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const isDisabled = watch(`time_intervals.${intervalIndex}.disable`);
  const {
    fields: timeRanges,
    append: addTimeRange,
    remove: removeTimeRange
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFieldArray)({
    name: `time_intervals.${intervalIndex}.times`
  });
  const formErrors = formState.errors.time_intervals?.[intervalIndex];
  const timeRangeInvalid = formErrors?.times?.some?.((value) => value?.start_time || value?.end_time) ?? false;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field,
      {
        className: styles.field,
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.mute-timing-time-range.label-time-range", "Time range"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "alerting.mute-timing-time-range.description-time-range",
          "The time inclusive of the start and exclusive of the end time (in UTC if no location has been selected, otherwise local time)"
        ),
        invalid: timeRangeInvalid,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: timeRanges.map((timeRange, index) => {
          const timeRangeErrors = formErrors?.times?.[index];
          const startTimeKey = `time_intervals.${intervalIndex}.times.${index}.start_time`;
          const endTimeKey = `time_intervals.${intervalIndex}.times.${index}.end_time`;
          const getStartAndEndTime = () => {
            const startTime = getValues(startTimeKey);
            const endTime = getValues(endTimeKey);
            return [startTime, endTime];
          };
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.timeRange, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.InlineFieldRow, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.InlineField,
              {
                label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.mute-timing-time-range.label-start-time", "Start time"),
                invalid: Boolean(timeRangeErrors?.start_time),
                error: timeRangeErrors?.start_time?.message,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Input,
                  {
                    ...register(startTimeKey, {
                      validate: (input) => {
                        const validFormat = (0,_util__WEBPACK_IMPORTED_MODULE_14__.isvalidTimeFormat)(input);
                        if (!validFormat) {
                          return INVALID_FORMAT_MESSAGE;
                        }
                        const [startTime, endTime] = getStartAndEndTime();
                        if ((0,_util__WEBPACK_IMPORTED_MODULE_14__.isValidStartAndEndTime)(startTime, endTime)) {
                          return;
                        } else {
                          return "Start time must be before end time";
                        }
                      }
                    }),
                    className: styles.timeRangeInput,
                    maxLength: 5,
                    readOnly: isDisabled,
                    suffix: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { name: "clock-nine" }),
                    defaultValue: timeRange.start_time,
                    placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.mute-timing-time-range.mute-timing-starts-at-placeholder-hhmm", "HH:mm"),
                    "data-testid": "mute-timing-starts-at"
                  }
                )
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.InlineField,
              {
                label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.mute-timing-time-range.label-end-time", "End time"),
                invalid: Boolean(timeRangeErrors?.end_time),
                error: timeRangeErrors?.end_time?.message,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Input,
                  {
                    ...register(`time_intervals.${intervalIndex}.times.${index}.end_time`, {
                      validate: (input) => {
                        const validFormat = (0,_util__WEBPACK_IMPORTED_MODULE_14__.isvalidTimeFormat)(input);
                        if (!validFormat) {
                          return INVALID_FORMAT_MESSAGE;
                        }
                        const [startTime, endTime] = getStartAndEndTime();
                        if ((0,_util__WEBPACK_IMPORTED_MODULE_14__.isValidStartAndEndTime)(startTime, endTime)) {
                          return;
                        } else {
                          return "End time must be after start time";
                        }
                      }
                    }),
                    className: styles.timeRangeInput,
                    maxLength: 5,
                    readOnly: isDisabled,
                    suffix: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { name: "clock-nine" }),
                    defaultValue: timeRange.end_time,
                    placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.mute-timing-time-range.mute-timing-ends-at-placeholder-hhmm", "HH:mm"),
                    "data-testid": "mute-timing-ends-at"
                  }
                )
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.IconButton,
              {
                className: styles.deleteTimeRange,
                title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.mute-timing-time-range.title-remove", "Remove"),
                name: "trash-alt",
                onClick: (e) => {
                  e.preventDefault();
                  removeTimeRange(index);
                },
                tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.mute-timing-time-range.tooltip-remove-time-range", "Remove time range")
              }
            )
          ] }) }, timeRange.id);
        }) })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _ConditionalWrap__WEBPACK_IMPORTED_MODULE_13__["default"],
      {
        shouldWrap: isDisabled,
        wrap: (children) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Tooltip,
          {
            content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
              "alerting.mute-timing-time-range.content-this-time-interval-is-disabled",
              "This time interval is disabled"
            ),
            placement: "right-start",
            children
          }
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
          {
            className: styles.addTimeRange,
            variant: "secondary",
            type: "button",
            icon: "plus",
            disabled: isDisabled,
            onClick: () => addTimeRange({ start_time: "", end_time: "" }),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.mute-timing-time-range.add-another-time-range", children: "Add another time range" })
          }
        )
      }
    )
  ] });
};
const getStyles = (theme) => ({
  field: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: 0
  }),
  timeRange: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: theme.spacing(1)
  }),
  timeRangeInput: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "90px"
  }),
  deleteTimeRange: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    margin: `${theme.spacing(1)} 0 0 ${theme.spacing(0.5)}`
  }),
  addTimeRange: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: theme.spacing(2)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/mute-timings/timezones.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimezoneSelect: () => (/* binding */ TimezoneSelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");



const TIMEZONES = [
  "Africa/Abidjan",
  "Africa/Accra",
  "Africa/Addis_Ababa",
  "Africa/Algiers",
  "Africa/Asmara",
  "Africa/Bamako",
  "Africa/Bangui",
  "Africa/Banjul",
  "Africa/Bissau",
  "Africa/Blantyre",
  "Africa/Brazzaville",
  "Africa/Bujumbura",
  "Africa/Cairo",
  "Africa/Casablanca",
  "Africa/Ceuta",
  "Africa/Conakry",
  "Africa/Dakar",
  "Africa/Dar_es_Salaam",
  "Africa/Djibouti",
  "Africa/Douala",
  "Africa/El_Aaiun",
  "Africa/Freetown",
  "Africa/Gaborone",
  "Africa/Harare",
  "Africa/Johannesburg",
  "Africa/Juba",
  "Africa/Kampala",
  "Africa/Khartoum",
  "Africa/Kigali",
  "Africa/Kinshasa",
  "Africa/Lagos",
  "Africa/Libreville",
  "Africa/Lome",
  "Africa/Luanda",
  "Africa/Lubumbashi",
  "Africa/Lusaka",
  "Africa/Malabo",
  "Africa/Maputo",
  "Africa/Maseru",
  "Africa/Mbabane",
  "Africa/Mogadishu",
  "Africa/Monrovia",
  "Africa/Nairobi",
  "Africa/Ndjamena",
  "Africa/Niamey",
  "Africa/Nouakchott",
  "Africa/Ouagadougou",
  "Africa/Porto-Novo",
  "Africa/Sao_Tome",
  "Africa/Tripoli",
  "Africa/Tunis",
  "Africa/Windhoek",
  "America/Adak",
  "America/Anchorage",
  "America/Anguilla",
  "America/Antigua",
  "America/Araguaina",
  "America/Argentina/Buenos_Aires",
  "America/Argentina/Catamarca",
  "America/Argentina/Cordoba",
  "America/Argentina/Jujuy",
  "America/Argentina/La_Rioja",
  "America/Argentina/Mendoza",
  "America/Argentina/Rio_Gallegos",
  "America/Argentina/Salta",
  "America/Argentina/San_Juan",
  "America/Argentina/San_Luis",
  "America/Argentina/Tucuman",
  "America/Argentina/Ushuaia",
  "America/Aruba",
  "America/Asuncion",
  "America/Atikokan",
  "America/Bahia",
  "America/Bahia_Banderas",
  "America/Barbados",
  "America/Belem",
  "America/Belize",
  "America/Blanc-Sablon",
  "America/Boa_Vista",
  "America/Bogota",
  "America/Boise",
  "America/Cambridge_Bay",
  "America/Campo_Grande",
  "America/Cancun",
  "America/Caracas",
  "America/Cayenne",
  "America/Cayman",
  "America/Chicago",
  "America/Chihuahua",
  "America/Ciudad_Juarez",
  "America/Costa_Rica",
  "America/Creston",
  "America/Cuiaba",
  "America/Curacao",
  "America/Danmarkshavn",
  "America/Dawson",
  "America/Dawson_Creek",
  "America/Denver",
  "America/Detroit",
  "America/Dominica",
  "America/Edmonton",
  "America/Eirunepe",
  "America/El_Salvador",
  "America/Fort_Nelson",
  "America/Fortaleza",
  "America/Glace_Bay",
  "America/Godthab",
  "America/Goose_Bay",
  "America/Grand_Turk",
  "America/Grenada",
  "America/Guadeloupe",
  "America/Guatemala",
  "America/Guayaquil",
  "America/Guyana",
  "America/Halifax",
  "America/Havana",
  "America/Hermosillo",
  "America/Indiana/Indianapolis",
  "America/Indiana/Knox",
  "America/Indiana/Marengo",
  "America/Indiana/Petersburg",
  "America/Indiana/Tell_City",
  "America/Indiana/Vevay",
  "America/Indiana/Vincennes",
  "America/Indiana/Winamac",
  "America/Inuvik",
  "America/Iqaluit",
  "America/Jamaica",
  "America/Juneau",
  "America/Kentucky/Louisville",
  "America/Kentucky/Monticello",
  "America/Kralendijk",
  "America/La_Paz",
  "America/Lima",
  "America/Los_Angeles",
  "America/Lower_Princes",
  "America/Maceio",
  "America/Managua",
  "America/Manaus",
  "America/Marigot",
  "America/Martinique",
  "America/Matamoros",
  "America/Mazatlan",
  "America/Menominee",
  "America/Merida",
  "America/Metlakatla",
  "America/Mexico_City",
  "America/Miquelon",
  "America/Moncton",
  "America/Monterrey",
  "America/Montevideo",
  "America/Montreal",
  "America/Montserrat",
  "America/Nassau",
  "America/New_York",
  "America/Nipigon",
  "America/Nome",
  "America/Noronha",
  "America/North_Dakota/Beulah",
  "America/North_Dakota/Center",
  "America/North_Dakota/New_Salem",
  "America/Nuuk",
  "America/Ojinaga",
  "America/Panama",
  "America/Pangnirtung",
  "America/Paramaribo",
  "America/Phoenix",
  "America/Port-au-Prince",
  "America/Port_of_Spain",
  "America/Porto_Velho",
  "America/Puerto_Rico",
  "America/Punta_Arenas",
  "America/Rainy_River",
  "America/Rankin_Inlet",
  "America/Recife",
  "America/Regina",
  "America/Resolute",
  "America/Rio_Branco",
  "America/Santa_Isabel",
  "America/Santarem",
  "America/Santiago",
  "America/Santo_Domingo",
  "America/Sao_Paulo",
  "America/Scoresbysund",
  "America/Shiprock",
  "America/Sitka",
  "America/St_Barthelemy",
  "America/St_Johns",
  "America/St_Kitts",
  "America/St_Lucia",
  "America/St_Thomas",
  "America/St_Vincent",
  "America/Swift_Current",
  "America/Tegucigalpa",
  "America/Thule",
  "America/Thunder_Bay",
  "America/Tijuana",
  "America/Toronto",
  "America/Tortola",
  "America/Vancouver",
  "America/Whitehorse",
  "America/Winnipeg",
  "America/Yakutat",
  "America/Yellowknife",
  "Antarctica/Casey",
  "Antarctica/Davis",
  "Antarctica/DumontDUrville",
  "Antarctica/Macquarie",
  "Antarctica/Mawson",
  "Antarctica/McMurdo",
  "Antarctica/Palmer",
  "Antarctica/Rothera",
  "Antarctica/South_Pole",
  "Antarctica/Syowa",
  "Antarctica/Troll",
  "Antarctica/Vostok",
  "Arctic/Longyearbyen",
  "Asia/Aden",
  "Asia/Almaty",
  "Asia/Amman",
  "Asia/Anadyr",
  "Asia/Aqtau",
  "Asia/Aqtobe",
  "Asia/Ashgabat",
  "Asia/Atyrau",
  "Asia/Baghdad",
  "Asia/Bahrain",
  "Asia/Baku",
  "Asia/Bangkok",
  "Asia/Barnaul",
  "Asia/Beirut",
  "Asia/Bishkek",
  "Asia/Brunei",
  "Asia/Calcutta",
  "Asia/Chita",
  "Asia/Choibalsan",
  "Asia/Chongqing",
  "Asia/Colombo",
  "Asia/Damascus",
  "Asia/Dhaka",
  "Asia/Dili",
  "Asia/Dubai",
  "Asia/Dushanbe",
  "Asia/Famagusta",
  "Asia/Gaza",
  "Asia/Harbin",
  "Asia/Hebron",
  "Asia/Ho_Chi_Minh",
  "Asia/Hong_Kong",
  "Asia/Hovd",
  "Asia/Irkutsk",
  "Asia/Jakarta",
  "Asia/Jayapura",
  "Asia/Jerusalem",
  "Asia/Kabul",
  "Asia/Kamchatka",
  "Asia/Karachi",
  "Asia/Kashgar",
  "Asia/Kathmandu",
  "Asia/Katmandu",
  "Asia/Khandyga",
  "Asia/Krasnoyarsk",
  "Asia/Kuala_Lumpur",
  "Asia/Kuching",
  "Asia/Kuwait",
  "Asia/Macau",
  "Asia/Magadan",
  "Asia/Makassar",
  "Asia/Manila",
  "Asia/Muscat",
  "Asia/Nicosia",
  "Asia/Novokuznetsk",
  "Asia/Novosibirsk",
  "Asia/Omsk",
  "Asia/Oral",
  "Asia/Phnom_Penh",
  "Asia/Pontianak",
  "Asia/Pyongyang",
  "Asia/Qatar",
  "Asia/Qostanay",
  "Asia/Qyzylorda",
  "Asia/Rangoon",
  "Asia/Riyadh",
  "Asia/Sakhalin",
  "Asia/Samarkand",
  "Asia/Seoul",
  "Asia/Shanghai",
  "Asia/Singapore",
  "Asia/Srednekolymsk",
  "Asia/Taipei",
  "Asia/Tashkent",
  "Asia/Tbilisi",
  "Asia/Tehran",
  "Asia/Thimphu",
  "Asia/Tokyo",
  "Asia/Tomsk",
  "Asia/Ulaanbaatar",
  "Asia/Urumqi",
  "Asia/Ust-Nera",
  "Asia/Vientiane",
  "Asia/Vladivostok",
  "Asia/Yakutsk",
  "Asia/Yangon",
  "Asia/Yekaterinburg",
  "Asia/Yerevan",
  "Atlantic/Azores",
  "Atlantic/Bermuda",
  "Atlantic/Canary",
  "Atlantic/Cape_Verde",
  "Atlantic/Faroe",
  "Atlantic/Madeira",
  "Atlantic/Reykjavik",
  "Atlantic/South_Georgia",
  "Atlantic/St_Helena",
  "Atlantic/Stanley",
  "Australia/Adelaide",
  "Australia/Brisbane",
  "Australia/Broken_Hill",
  "Australia/Currie",
  "Australia/Darwin",
  "Australia/Eucla",
  "Australia/Hobart",
  "Australia/Lindeman",
  "Australia/Lord_Howe",
  "Australia/Melbourne",
  "Australia/Perth",
  "Australia/Sydney",
  "Europe/Amsterdam",
  "Europe/Andorra",
  "Europe/Astrakhan",
  "Europe/Athens",
  "Europe/Belgrade",
  "Europe/Berlin",
  "Europe/Bratislava",
  "Europe/Brussels",
  "Europe/Bucharest",
  "Europe/Budapest",
  "Europe/Busingen",
  "Europe/Chisinau",
  "Europe/Copenhagen",
  "Europe/Dublin",
  "Europe/Gibraltar",
  "Europe/Guernsey",
  "Europe/Helsinki",
  "Europe/Isle_of_Man",
  "Europe/Istanbul",
  "Europe/Jersey",
  "Europe/Kaliningrad",
  "Europe/Kiev",
  "Europe/Kirov",
  "Europe/Kyiv",
  "Europe/Lisbon",
  "Europe/Ljubljana",
  "Europe/London",
  "Europe/Luxembourg",
  "Europe/Madrid",
  "Europe/Malta",
  "Europe/Mariehamn",
  "Europe/Minsk",
  "Europe/Monaco",
  "Europe/Moscow",
  "Europe/Oslo",
  "Europe/Paris",
  "Europe/Podgorica",
  "Europe/Prague",
  "Europe/Riga",
  "Europe/Rome",
  "Europe/Samara",
  "Europe/San_Marino",
  "Europe/Sarajevo",
  "Europe/Saratov",
  "Europe/Simferopol",
  "Europe/Skopje",
  "Europe/Sofia",
  "Europe/Stockholm",
  "Europe/Tallinn",
  "Europe/Tirane",
  "Europe/Ulyanovsk",
  "Europe/Uzhgorod",
  "Europe/Vaduz",
  "Europe/Vatican",
  "Europe/Vienna",
  "Europe/Vilnius",
  "Europe/Volgograd",
  "Europe/Warsaw",
  "Europe/Zagreb",
  "Europe/Zaporozhye",
  "Europe/Zurich",
  "GMT",
  "Indian/Antananarivo",
  "Indian/Chagos",
  "Indian/Christmas",
  "Indian/Cocos",
  "Indian/Comoro",
  "Indian/Kerguelen",
  "Indian/Mahe",
  "Indian/Maldives",
  "Indian/Mauritius",
  "Indian/Mayotte",
  "Indian/Reunion",
  "Local",
  // this is the local timezone of the machine
  "Pacific/Apia",
  "Pacific/Auckland",
  "Pacific/Bougainville",
  "Pacific/Chatham",
  "Pacific/Chuuk",
  "Pacific/Easter",
  "Pacific/Efate",
  "Pacific/Enderbury",
  "Pacific/Fakaofo",
  "Pacific/Fiji",
  "Pacific/Funafuti",
  "Pacific/Galapagos",
  "Pacific/Gambier",
  "Pacific/Guadalcanal",
  "Pacific/Guam",
  "Pacific/Honolulu",
  "Pacific/Johnston",
  "Pacific/Kanton",
  "Pacific/Kiritimati",
  "Pacific/Kosrae",
  "Pacific/Kwajalein",
  "Pacific/Majuro",
  "Pacific/Marquesas",
  "Pacific/Midway",
  "Pacific/Nauru",
  "Pacific/Niue",
  "Pacific/Norfolk",
  "Pacific/Noumea",
  "Pacific/Pago_Pago",
  "Pacific/Palau",
  "Pacific/Pitcairn",
  "Pacific/Pohnpei",
  "Pacific/Ponape",
  "Pacific/Port_Moresby",
  "Pacific/Rarotonga",
  "Pacific/Saipan",
  "Pacific/Tahiti",
  "Pacific/Tarawa",
  "Pacific/Tongatapu",
  "Pacific/Truk",
  "Pacific/Wake",
  "Pacific/Wallis",
  "UTC"
];
const TimezoneSelect = (options) => {
  const timezoneOptions = TIMEZONES.map((tz) => ({
    label: tz,
    value: tz
  }));
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { ...options, options: timezoneOptions });
};


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

/***/ "./public/app/features/alerting/unified/utils/mute-timings.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DAYS_OF_THE_WEEK: () => (/* binding */ DAYS_OF_THE_WEEK),
/* harmony export */   MONTHS: () => (/* binding */ MONTHS),
/* harmony export */   createMuteTiming: () => (/* binding */ createMuteTiming),
/* harmony export */   defaultTimeInterval: () => (/* binding */ defaultTimeInterval),
/* harmony export */   isDisabled: () => (/* binding */ isDisabled),
/* harmony export */   isTimeIntervalDisabled: () => (/* binding */ isTimeIntervalDisabled),
/* harmony export */   validateArrayField: () => (/* binding */ validateArrayField)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


const DAYS_OF_THE_WEEK = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
const MONTHS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december"
];
const defaultTimeInterval = {
  times: [{ start_time: "", end_time: "" }],
  weekdays: "",
  days_of_month: "",
  months: "",
  years: "",
  location: "",
  disable: false
};
const validateArrayField = (value, validateValue, invalidText) => {
  if (value) {
    return value.split(",").map((x) => x.trim()).every((entry) => entry.split(":").every(validateValue)) || invalidText;
  } else {
    return true;
  }
};
const convertStringToArray = (str) => {
  return str ? str.split(",").map((s) => s.trim()) : void 0;
};
const createMuteTiming = (fields) => {
  const timeIntervals = fields.time_intervals.map(
    ({ times, weekdays, days_of_month, months, years, location, disable }) => {
      const interval = {
        times: convertTimesToDto(times, disable),
        weekdays: convertStringToArray(weekdays)?.map((v) => v.toLowerCase()),
        days_of_month: convertStringToArray(days_of_month),
        months: convertStringToArray(months),
        years: convertStringToArray(years),
        location: location ? location : void 0
      };
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(interval, lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined);
    }
  );
  return {
    name: fields.name,
    time_intervals: timeIntervals
  };
};
function convertTimesToDto(times, disable) {
  if (disable) {
    return [];
  }
  const timesToReturn = times?.filter(({ start_time, end_time }) => !!start_time && !!end_time);
  return timesToReturn?.length ? timesToReturn : void 0;
}
function isTimeIntervalDisabled(intervals) {
  if (intervals.times?.length === 0 || intervals.weekdays?.length === 0 || intervals.days_of_month?.length === 0 || intervals.months?.length === 0 || intervals.years?.length === 0) {
    return true;
  }
  return false;
}
function isDisabled(muteTiming) {
  return muteTiming.time_intervals.every((timeInterval) => isTimeIntervalDisabled(timeInterval));
}


/***/ })

}]);
//# sourceMappingURL=EditMuteTiming.f77d3eec3aa684f0078e.js.map