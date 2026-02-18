"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["Templates"],{

/***/ "./node_modules/date-fns/addHours.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addHours: () => (/* binding */ addHours),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/date-fns/addMilliseconds.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/date-fns/constants.js");



/**
 * The {@link addHours} function options.
 */

/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of hours to be added
 * @param options - An object with options
 *
 * @returns The new date with the hours added
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */
function addHours(date, amount, options) {
  return (0,_addMilliseconds_js__WEBPACK_IMPORTED_MODULE_0__.addMilliseconds)(date, amount * _constants_js__WEBPACK_IMPORTED_MODULE_1__.millisecondsInHour, options);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addHours);


/***/ }),

/***/ "./node_modules/date-fns/addMinutes.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMinutes: () => (/* binding */ addMinutes),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/date-fns/constants.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/date-fns/toDate.js");



/**
 * The {@link addMinutes} function options.
 */

/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of minutes to be added.
 * @param options - An object with options
 *
 * @returns The new date with the minutes added
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * const result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */
function addMinutes(date, amount, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(date, options?.in);
  _date.setTime(_date.getTime() + amount * _constants_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInMinute);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMinutes);


/***/ }),

/***/ "./node_modules/date-fns/subDays.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   subDays: () => (/* binding */ subDays)
/* harmony export */ });
/* harmony import */ var _addDays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/date-fns/addDays.js");


/**
 * The {@link subDays} function options.
 */

/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the days subtracted
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays(date, amount, options) {
  return (0,_addDays_js__WEBPACK_IMPORTED_MODULE_0__.addDays)(date, -amount, options);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subDays);


/***/ }),

/***/ "./node_modules/date-fns/subHours.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   subHours: () => (/* binding */ subHours)
/* harmony export */ });
/* harmony import */ var _addHours_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/date-fns/addHours.js");


/**
 * The {@link subHours} function options.
 */

/**
 * @name subHours
 * @category Hour Helpers
 * @summary Subtract the specified number of hours from the given date.
 *
 * @description
 * Subtract the specified number of hours from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of hours to be subtracted.
 * @param options - The options
 *
 * @returns The new date with the hours subtracted
 *
 * @example
 * // Subtract 2 hours from 11 July 2014 01:00:00:
 * const result = subHours(new Date(2014, 6, 11, 1, 0), 2)
 * //=> Thu Jul 10 2014 23:00:00
 */
function subHours(date, amount, options) {
  return (0,_addHours_js__WEBPACK_IMPORTED_MODULE_0__.addHours)(date, -amount, options);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subHours);


/***/ }),

/***/ "./public/app/features/alerting/unified/Templates.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _components_contact_points_DuplicateMessageTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/DuplicateMessageTemplate.tsx");
/* harmony import */ var _components_contact_points_EditMessageTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/EditMessageTemplate.tsx");
/* harmony import */ var _components_contact_points_NewMessageTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/NewMessageTemplate.tsx");
/* harmony import */ var _withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/withPageErrorBoundary.tsx");







function NotificationTemplates() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__.Routes, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__.Route, { path: "new", element: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_contact_points_NewMessageTemplate__WEBPACK_IMPORTED_MODULE_4__["default"], {}) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__.Route, { path: ":name/edit", element: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_contact_points_EditMessageTemplate__WEBPACK_IMPORTED_MODULE_3__["default"], {}) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__.Route, { path: ":name/duplicate", element: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_contact_points_DuplicateMessageTemplate__WEBPACK_IMPORTED_MODULE_2__["default"], {}) })
  ] });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_5__.withPageErrorBoundary)(NotificationTemplates));


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

/***/ "./public/app/features/alerting/unified/api/templateApi.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   previewTemplateUrl: () => (/* binding */ previewTemplateUrl),
/* harmony export */   templatesApi: () => (/* binding */ templatesApi),
/* harmony export */   usePreviewTemplateMutation: () => (/* binding */ usePreviewTemplateMutation)
/* harmony export */ });
/* harmony import */ var app_features_alerting_unified_utils_template_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/utils/template-constants.ts");
/* harmony import */ var _components_receivers_form_fields_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/utils.ts");
/* harmony import */ var _openapi_templatesApi_gen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/openapi/templatesApi.gen.ts");




const previewTemplateUrl = `/api/alertmanager/grafana/config/api/v1/templates/test`;
_openapi_templatesApi_gen__WEBPACK_IMPORTED_MODULE_2__.generatedTemplatesApi.enhanceEndpoints({
  endpoints: {
    readNamespacedTemplateGroup: (endpoint) => {
      const extraOptions = { hideErrorMessage: true };
      endpoint.extraOptions = extraOptions;
    }
  }
});
const templatesApi = _openapi_templatesApi_gen__WEBPACK_IMPORTED_MODULE_2__.generatedTemplatesApi.injectEndpoints({
  endpoints: (build) => ({
    previewTemplate: build.mutation({
      query: ({ template, alerts, name }) => ({
        url: previewTemplateUrl,
        data: { template, alerts, name },
        method: "POST"
      })
    }),
    getDefaultTemplates: build.query({
      queryFn: async () => {
        const data = (0,_components_receivers_form_fields_utils__WEBPACK_IMPORTED_MODULE_1__.parseTemplates)(app_features_alerting_unified_utils_template_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_TEMPLATES);
        return { data };
      }
    })
  })
});
const { usePreviewTemplateMutation } = templatesApi;


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

/***/ "./public/app/features/alerting/unified/components/EditorColumnHeader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorColumnHeader: () => (/* binding */ EditorColumnHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");




function EditorColumnHeader({ label, actions, id, children }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(editorColumnStyles);
  if (children) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.container, children });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: styles.label, id, children: label }),
    actions && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { direction: "row", gap: 1, children: actions })
  ] });
}
const editorColumnStyles = (theme) => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(1, 2),
    backgroundColor: theme.colors.background.secondary,
    border: `1px solid ${theme.colors.border.medium}`,
    borderTopLeftRadius: theme.shape.radius.default,
    borderTopRightRadius: theme.shape.radius.default
  }),
  label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    margin: 0
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/contact-points/ContactPoints.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveTab: () => (/* binding */ ActiveTab),
/* harmony export */   ContactPointsPageContents: () => (/* binding */ ContactPointsPageContents),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Pagination/Pagination.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabsBar.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/Tab.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabContent.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/k8s/utils.ts");
/* harmony import */ var app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/hooks/usePagination.ts");
/* harmony import */ var _hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useURLSearchParams.ts");
/* harmony import */ var _state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertmanagerContext.tsx");
/* harmony import */ var _utils_alertmanager_extraConfigs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager/extraConfigs.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/withPageErrorBoundary.tsx");
/* harmony import */ var _AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _GrafanaAlertmanagerWarning__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/components/GrafanaAlertmanagerWarning.tsx");
/* harmony import */ var _ContactPoint__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/ContactPoint.tsx");
/* harmony import */ var _NotificationTemplates__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/NotificationTemplates.tsx");
/* harmony import */ var _components_ContactPointsFilter__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/components/ContactPointsFilter.tsx");
/* harmony import */ var _components_GlobalConfigAlert__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/components/GlobalConfigAlert.tsx");
/* harmony import */ var _useContactPoints__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/useContactPoints.ts");
/* harmony import */ var _useContactPointsSearch__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/useContactPointsSearch.tsx");
/* harmony import */ var _useExportContactPoint__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/useExportContactPoint.tsx");

























var ActiveTab = /* @__PURE__ */ ((ActiveTab2) => {
  ActiveTab2["ContactPoints"] = "contact_points";
  ActiveTab2["NotificationTemplates"] = "templates";
  return ActiveTab2;
})(ActiveTab || {});
const DEFAULT_PAGE_SIZE = 10;
const ContactPointsTab = () => {
  const { selectedAlertmanager } = (0,_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_20__.useAlertmanager)();
  const [queryParams] = (0,_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_19__.useURLSearchParams)();
  const fetchPolicies = !(0,app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_14__.shouldUseK8sApi)(selectedAlertmanager);
  const fetchStatuses = app_core_core__WEBPACK_IMPORTED_MODULE_13__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_16__.AccessControlAction.AlertingNotificationsRead);
  const { isLoading, error, contactPoints } = (0,_useContactPoints__WEBPACK_IMPORTED_MODULE_30__.useContactPointsWithStatus)({
    alertmanager: selectedAlertmanager,
    fetchPolicies,
    fetchStatuses
  });
  const [addContactPointSupported, addContactPointAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.useAlertmanagerAbility)(
    _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.AlertmanagerAction.CreateContactPoint
  );
  const [exportContactPointsSupported, exportContactPointsAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.useAlertmanagerAbility)(
    _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.AlertmanagerAction.ExportContactPoint
  );
  const [ExportDrawer, showExportDrawer] = (0,_useExportContactPoint__WEBPACK_IMPORTED_MODULE_32__.useExportContactPoint)();
  const search = queryParams.get("search");
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.contact-points-tab.text-loading", "Loading...") });
  }
  const isGrafanaManagedAlertmanager = selectedAlertmanager === _utils_datasource__WEBPACK_IMPORTED_MODULE_22__.GRAFANA_RULES_SOURCE_NAME;
  if (contactPoints.length === 0) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.EmptyState,
      {
        variant: addContactPointAllowed ? "call-to-action" : "not-found",
        button: addContactPointAllowed && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.LinkButton,
          {
            href: (0,app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_15__.makeAMLink)("/alerting/notifications/receivers/new", selectedAlertmanager),
            icon: "plus",
            size: "lg",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.contact-points.create", children: "Create contact point" })
          }
        ),
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.contact-points.empty-state.title", "You don't have any contact points yet")
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { direction: "row", alignItems: "end", justifyContent: "space-between", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ContactPointsFilter__WEBPACK_IMPORTED_MODULE_28__.ContactPointsFilter, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { direction: "row", gap: 1, children: [
        addContactPointSupported && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.LinkButton,
          {
            icon: "plus",
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.contact-points-tab.aria-label-add-contact-point", "add contact point"),
            variant: "primary",
            href: "/alerting/notifications/receivers/new",
            disabled: !addContactPointAllowed,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.contact-points.create", children: "Create contact point" })
          }
        ),
        exportContactPointsSupported && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button,
          {
            icon: "download-alt",
            variant: "secondary",
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.contact-points-tab.aria-label-export-all", "export all"),
            disabled: !exportContactPointsAllowed,
            onClick: () => showExportDrawer(_useExportContactPoint__WEBPACK_IMPORTED_MODULE_32__.ALL_CONTACT_POINTS),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.contact-points-tab.export-all", children: "Export all" })
          }
        )
      ] })
    ] }),
    error ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "alerting.contact-points-tab.title-failed-to-fetch-contact-points",
          "Failed to fetch contact points"
        ),
        children: (0,app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_15__.stringifyErrorLike)(error)
      }
    ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContactPointsList, { contactPoints, search, pageSize: DEFAULT_PAGE_SIZE }),
    !isGrafanaManagedAlertmanager && !(0,_utils_alertmanager_extraConfigs__WEBPACK_IMPORTED_MODULE_21__.isExtraConfig)(selectedAlertmanager) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_GlobalConfigAlert__WEBPACK_IMPORTED_MODULE_29__.GlobalConfigAlert, { alertManagerName: selectedAlertmanager }),
    ExportDrawer
  ] });
};
const NotificationTemplatesTab = () => {
  const [createTemplateSupported, createTemplateAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.useAlertmanagerAbility)(
    _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.AlertmanagerAction.CreateNotificationTemplate
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Text, { variant: "body", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.notification-templates-tab.create-notification-templates-customize-notifications", children: "Create notification templates to customize your notifications." }) }),
      createTemplateSupported && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.LinkButton,
        {
          icon: "plus",
          variant: "primary",
          href: "/alerting/notifications/templates/new",
          disabled: !createTemplateAllowed,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.notification-templates-tab.add-notification-template-group", children: "Add notification template group" })
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NotificationTemplates__WEBPACK_IMPORTED_MODULE_27__.NotificationTemplates, {})
  ] });
};
const useTabQueryParam = (defaultTab) => {
  const [queryParams, setQueryParams] = (0,_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_19__.useURLSearchParams)();
  const param = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const queryParam = queryParams.get("tab");
    if (!queryParam || !Object.values(ActiveTab).map(String).includes(queryParam)) {
      return defaultTab;
    }
    return queryParam || defaultTab;
  }, [defaultTab, queryParams]);
  const setParam = (tab) => setQueryParams({ tab });
  return [param, setParam];
};
const ContactPointsPageContents = () => {
  const { selectedAlertmanager } = (0,_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_20__.useAlertmanager)();
  const [, canViewContactPoints] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.useAlertmanagerAbility)(_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.AlertmanagerAction.ViewContactPoint);
  const [, canCreateContactPoints] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.useAlertmanagerAbility)(_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.AlertmanagerAction.CreateContactPoint);
  const [, showTemplatesTab] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.useAlertmanagerAbility)(_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.AlertmanagerAction.ViewNotificationTemplate);
  const showContactPointsTab = canViewContactPoints || canCreateContactPoints;
  const defaultTab = [
    showContactPointsTab && "contact_points" /* ContactPoints */,
    showTemplatesTab && "templates" /* NotificationTemplates */
  ].filter((tab) => !!tab)[0];
  const [activeTab, setActiveTab] = useTabQueryParam(defaultTab);
  const { contactPoints } = (0,_useContactPoints__WEBPACK_IMPORTED_MODULE_30__.useContactPointsWithStatus)({
    alertmanager: selectedAlertmanager
  });
  const showingContactPoints = activeTab === "contact_points" /* ContactPoints */;
  const showNotificationTemplates = activeTab === "templates" /* NotificationTemplates */;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GrafanaAlertmanagerWarning__WEBPACK_IMPORTED_MODULE_25__.GrafanaAlertmanagerWarning, { currentAlertmanager: selectedAlertmanager }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { direction: "column", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TabsBar, { children: [
        showContactPointsTab && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tab,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.contact-points-page-contents.label-contact-points", "Contact Points"),
            active: showingContactPoints,
            counter: contactPoints.length,
            onChangeTab: () => setActiveTab("contact_points" /* ContactPoints */)
          }
        ),
        showTemplatesTab && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tab,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.contact-points-page-contents.label-notification-templates", "Notification Templates"),
            active: showNotificationTemplates,
            onChangeTab: () => setActiveTab("templates" /* NotificationTemplates */)
          }
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.TabContent, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { direction: "column", children: [
        showingContactPoints && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContactPointsTab, {}),
        showNotificationTemplates && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NotificationTemplatesTab, {})
      ] }) })
    ] })
  ] });
};
const ContactPointsList = ({ contactPoints, search, pageSize = DEFAULT_PAGE_SIZE }) => {
  const searchResults = (0,_useContactPointsSearch__WEBPACK_IMPORTED_MODULE_31__.useContactPointsSearch)(contactPoints, search);
  const { page, pageItems, numberOfPages, onPageChange } = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_18__.usePagination)(searchResults, 1, pageSize);
  if (pageItems.length === 0) {
    const emptyMessage = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.contact-points.no-contact-points-found", "No contact points found");
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.EmptyState, { variant: "not-found", message: emptyMessage });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    pageItems.map((contactPoint, index) => {
      const key = `${contactPoint.name}-${index}`;
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ContactPoint__WEBPACK_IMPORTED_MODULE_26__.ContactPoint, { contactPoint }, key);
    }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Pagination, { currentPage: page, numberOfPages, onNavigate: onPageChange, hideWhenSinglePage: true })
  ] });
};
function ContactPointsPage() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_24__.AlertmanagerPageWrapper, { navId: "receivers", accessType: "notification", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContactPointsPageContents, {}) });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_23__.withPageErrorBoundary)(ContactPointsPage));


/***/ }),

/***/ "./public/app/features/alerting/unified/components/contact-points/DuplicateMessageTemplate.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var app_core_components_PageNotFound_EntityNotFound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/PageNotFound/EntityNotFound.tsx");
/* harmony import */ var _api_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/api/util.ts");
/* harmony import */ var _state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertmanagerContext.tsx");
/* harmony import */ var _utils_duplicate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/duplicate.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_templates__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/templates.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");
/* harmony import */ var _withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/withPageErrorBoundary.tsx");
/* harmony import */ var _AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _receivers_TemplateForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplateForm.tsx");
/* harmony import */ var _ContactPoints__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/ContactPoints.tsx");
/* harmony import */ var _useNotificationTemplates__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/useNotificationTemplates.ts");

















const notFoundComponent = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_PageNotFound_EntityNotFound__WEBPACK_IMPORTED_MODULE_5__.EntityNotFound, { entity: "Notification template" });
const DuplicateMessageTemplateComponent = () => {
  const { selectedAlertmanager } = (0,_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_7__.useAlertmanager)();
  const { name } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__.useParams)();
  const templateUid = name ? decodeURIComponent(name) : void 0;
  const {
    currentData: template,
    isLoading: isLoadingTemplate,
    error: templateFetchError
  } = (0,_useNotificationTemplates__WEBPACK_IMPORTED_MODULE_16__.useGetNotificationTemplate)({ alertmanager: selectedAlertmanager ?? "", uid: templateUid ?? "" });
  const {
    currentData: templates,
    isLoading: templatesLoading,
    error: templatesFetchError
  } = (0,_useNotificationTemplates__WEBPACK_IMPORTED_MODULE_16__.useNotificationTemplates)({ alertmanager: selectedAlertmanager ?? "" });
  const isLoading = isLoadingTemplate || templatesLoading;
  const error = templateFetchError || templatesFetchError;
  if (!selectedAlertmanager) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_PageNotFound_EntityNotFound__WEBPACK_IMPORTED_MODULE_5__.EntityNotFound, { entity: "Alertmanager" });
  }
  if (!templateUid) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_PageNotFound_EntityNotFound__WEBPACK_IMPORTED_MODULE_5__.EntityNotFound, { entity: "Notification template" });
  }
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder,
      {
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "alerting.duplicate-message-template.text-loading-notification-template",
          "Loading notification template"
        )
      }
    );
  }
  if (error) {
    return (0,_api_util__WEBPACK_IMPORTED_MODULE_6__.isNotFoundError)(error) ? notFoundComponent : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "alerting.duplicate-message-template.title-error-loading-notification-template",
          "Error loading notification template"
        ),
        severity: "error",
        children: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_9__.stringifyErrorLike)(error)
      }
    );
  }
  if (!template) {
    return notFoundComponent;
  }
  const duplicatedName = (0,_utils_duplicate__WEBPACK_IMPORTED_MODULE_8__.generateCopiedName)(template.title, templates?.map((t2) => t2.title) ?? []);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _receivers_TemplateForm__WEBPACK_IMPORTED_MODULE_14__.TemplateForm,
    {
      alertmanager: selectedAlertmanager,
      prefill: { title: duplicatedName, content: (0,_utils_templates__WEBPACK_IMPORTED_MODULE_10__.updateDefinesWithUniqueValue)(template.content) }
    }
  );
};
function DuplicateMessageTemplate() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_13__.AlertmanagerPageWrapper,
    {
      navId: "receivers",
      accessType: "notification",
      pageNav: {
        id: "templates",
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.notification-templates.duplicate.title", "Duplicate notification template group"),
        subTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "alerting.notification-templates.duplicate.subTitle",
          "Duplicate a group of notification templates"
        ),
        parentItem: {
          text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.common.titles.notification-templates", "Notification Templates"),
          url: (0,_utils_url__WEBPACK_IMPORTED_MODULE_11__.createRelativeUrl)("/alerting/notifications", {
            tab: _ContactPoints__WEBPACK_IMPORTED_MODULE_15__.ActiveTab.NotificationTemplates
          })
        }
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DuplicateMessageTemplateComponent, {})
    }
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_12__.withPageErrorBoundary)(DuplicateMessageTemplate));


/***/ }),

/***/ "./public/app/features/alerting/unified/components/contact-points/EditMessageTemplate.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var app_core_components_PageNotFound_EntityNotFound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/PageNotFound/EntityNotFound.tsx");
/* harmony import */ var _api_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/api/util.ts");
/* harmony import */ var _state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertmanagerContext.tsx");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");
/* harmony import */ var _withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/withPageErrorBoundary.tsx");
/* harmony import */ var _AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _receivers_TemplateForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplateForm.tsx");
/* harmony import */ var _ContactPoints__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/ContactPoints.tsx");
/* harmony import */ var _useNotificationTemplates__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/useNotificationTemplates.ts");















const notFoundComponent = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_PageNotFound_EntityNotFound__WEBPACK_IMPORTED_MODULE_5__.EntityNotFound, { entity: "Notification template" });
const EditMessageTemplateComponent = () => {
  const { name } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__.useParams)();
  const templateUid = name ? decodeURIComponent(name) : void 0;
  const { selectedAlertmanager } = (0,_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_7__.useAlertmanager)();
  const { currentData, isLoading, error, isUninitialized } = (0,_useNotificationTemplates__WEBPACK_IMPORTED_MODULE_14__.useGetNotificationTemplate)({
    alertmanager: selectedAlertmanager ?? "",
    uid: templateUid ?? ""
  });
  if (!templateUid) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_PageNotFound_EntityNotFound__WEBPACK_IMPORTED_MODULE_5__.EntityNotFound, { entity: "Notification template" });
  }
  if (isLoading || isUninitialized) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.edit-message-template.text-loading-template", "Loading template...") });
  }
  if (error) {
    return (0,_api_util__WEBPACK_IMPORTED_MODULE_6__.isNotFoundError)(error) ? notFoundComponent : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert,
      {
        severity: "error",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "alerting.edit-message-template.title-failed-to-fetch-notification-template",
          "Failed to fetch notification template"
        ),
        children: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.stringifyErrorLike)(error)
      }
    );
  }
  if (!currentData) {
    return notFoundComponent;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_receivers_TemplateForm__WEBPACK_IMPORTED_MODULE_12__.TemplateForm, { alertmanager: selectedAlertmanager ?? "", originalTemplate: currentData });
};
function EditMessageTemplate() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_11__.AlertmanagerPageWrapper,
    {
      navId: "receivers",
      accessType: "notification",
      pageNav: {
        id: "templates",
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.notification-templates.edit.title", "Edit notification template group"),
        subTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.notification-templates.edit.subTitle", "Edit a group of notification templates"),
        parentItem: {
          text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.common.titles.notification-templates", "Notification Templates"),
          url: (0,_utils_url__WEBPACK_IMPORTED_MODULE_9__.createRelativeUrl)("/alerting/notifications", {
            tab: _ContactPoints__WEBPACK_IMPORTED_MODULE_13__.ActiveTab.NotificationTemplates
          })
        }
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EditMessageTemplateComponent, {})
    }
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_10__.withPageErrorBoundary)(EditMessageTemplate));


/***/ }),

/***/ "./public/app/features/alerting/unified/components/contact-points/NewMessageTemplate.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertmanagerContext.tsx");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");
/* harmony import */ var _withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/withPageErrorBoundary.tsx");
/* harmony import */ var _AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _receivers_TemplateForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplateForm.tsx");
/* harmony import */ var _ContactPoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/ContactPoints.tsx");









function NewMessageTemplatePage() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_5__.AlertmanagerPageWrapper,
    {
      navId: "receivers",
      accessType: "notification",
      pageNav: {
        id: "templates",
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.notification-templates.new.title", "New notification template group"),
        subTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.notification-templates.new.subTitle", "Create a new group of notification templates"),
        parentItem: {
          text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.common.titles.notification-templates", "Notification Templates"),
          url: (0,_utils_url__WEBPACK_IMPORTED_MODULE_3__.createRelativeUrl)("/alerting/notifications", {
            tab: _ContactPoints__WEBPACK_IMPORTED_MODULE_7__.ActiveTab.NotificationTemplates
          })
        }
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NewMessageTemplate, {})
    }
  );
}
function NewMessageTemplate() {
  const { selectedAlertmanager } = (0,_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_2__.useAlertmanager)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_receivers_TemplateForm__WEBPACK_IMPORTED_MODULE_6__.TemplateForm, { alertmanager: selectedAlertmanager ?? "" });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_4__.withPageErrorBoundary)(NewMessageTemplatePage));


/***/ }),

/***/ "./public/app/features/alerting/unified/components/contact-points/NotificationTemplates.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationTemplates: () => (/* binding */ NotificationTemplates)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertmanagerContext.tsx");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _receivers_TemplatesTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplatesTable.tsx");
/* harmony import */ var _useNotificationTemplates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/useNotificationTemplates.ts");








const NotificationTemplates = () => {
  const { selectedAlertmanager } = (0,_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_4__.useAlertmanager)();
  const { data: templates, isLoading, error } = (0,_useNotificationTemplates__WEBPACK_IMPORTED_MODULE_7__.useNotificationTemplates)({ alertmanager: selectedAlertmanager ?? "" });
  if (error) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
          "alerting.notification-templates.title-failed-to-fetch-notification-templates",
          "Failed to fetch notification templates"
        ),
        children: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_5__.stringifyErrorLike)(error)
      }
    );
  }
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder,
      {
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
          "alerting.notification-templates.text-loading-notification-templates",
          "Loading notification templates"
        )
      }
    );
  }
  if (templates) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_receivers_TemplatesTable__WEBPACK_IMPORTED_MODULE_6__.TemplatesTable, { alertManagerName: selectedAlertmanager, templates });
  }
  return null;
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/contact-points/components/ContactPointsFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactPointsFilter: () => (/* binding */ ContactPointsFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useURLSearchParams.ts");








const ContactPointsFilter = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useStyles2)(getStyles);
  const [searchParams, setSearchParams] = (0,_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_11__.useURLSearchParams)();
  const defaultValue = searchParams.get("search") ?? "";
  const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultValue);
  const [_, cancel] = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(
    () => {
      setSearchParams({ search: searchValue }, true);
    },
    300,
    [setSearchParams, searchValue]
  );
  const clear = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    cancel();
    setSearchValue("");
    setSearchParams({ search: "" }, true);
  }, [cancel, setSearchParams]);
  const hasInput = Boolean(defaultValue);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "row", alignItems: "end", gap: 0.5, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field,
      {
        className: styles.noBottom,
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.contact-points-filter.label-search-by-name-or-type", "Search by name or type"),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
          {
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.contact-points-filter.aria-label-search-contact-points", "search contact points"),
            placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.contact-points-filter.placeholder-search", "Search"),
            width: 46,
            prefix: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "search" }),
            onChange: (event) => {
              setSearchValue(event.currentTarget.value);
            },
            value: searchValue
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
      {
        variant: "secondary",
        icon: "times",
        onClick: () => clear(),
        disabled: !hasInput,
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.contact-points-filter.aria-label-clear", "clear"),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.contact-points-filter.clear", children: "Clear" })
      }
    )
  ] });
};
const getStyles = () => ({
  noBottom: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: 0
  })
});



/***/ }),

/***/ "./public/app/features/alerting/unified/components/contact-points/components/GlobalConfigAlert.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalConfigAlert: () => (/* binding */ GlobalConfigAlert)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _Authorize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");








const GlobalConfigAlert = ({ alertManagerName }) => {
  const isVanillaAM = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.isVanillaPrometheusAlertManagerDataSource)(alertManagerName);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_7__.Authorize, { actions: [_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_4__.AlertmanagerAction.UpdateExternalConfiguration], children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert,
    {
      severity: "info",
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "alerting.global-config-alert.title-global-config-for-contact-points",
        "Global config for contact points"
      ),
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.global-config-alert.body", children: "For each external Alertmanager you can define global settings, like server addresses, usernames and password, for all the supported contact points." }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, { href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_6__.makeAMLink)("alerting/notifications/global-config", alertManagerName), variant: "secondary", children: isVanillaAM ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.global-config-alert.view-global-config", "View global config") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.global-config-alert.edit-global-config", "Edit global config") })
      ]
    }
  ) });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/contact-points/useContactPointsSearch.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useContactPointsSearch: () => (/* binding */ useContactPointsSearch)
/* harmony export */ });
/* harmony import */ var _leeoniya_ufuzzy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@leeoniya/ufuzzy/dist/uFuzzy.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_features_alerting_unified_components_contact_points_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/constants.ts");





const fuzzyFinder = new _leeoniya_ufuzzy__WEBPACK_IMPORTED_MODULE_0__["default"]({
  intraMode: 1,
  intraIns: 1,
  intraSub: 1,
  intraDel: 1,
  intraTrn: 1
});
const useContactPointsSearch = (contactPoints, search) => {
  const nameHaystack = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return contactPoints.map((contactPoint) => contactPoint.name);
  }, [contactPoints]);
  const typeHaystack = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return contactPoints.map(
      (contactPoint) => (
        // we're using the resolved metadata key here instead of the "type" property – ex. we alias "teams" to "microsoft teams"
        contactPoint.grafana_managed_receiver_configs.map((receiver) => receiver[app_features_alerting_unified_components_contact_points_constants__WEBPACK_IMPORTED_MODULE_3__.RECEIVER_META_KEY].name).join(" ")
      )
    );
  }, [contactPoints]);
  if (!search) {
    return contactPoints;
  }
  const nameHits = fuzzyFinder.filter(nameHaystack, search) ?? [];
  const typeHits = fuzzyFinder.filter(typeHaystack, search) ?? [];
  const hits = [...nameHits, ...typeHits];
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniq)(hits).map((id) => contactPoints[id]) ?? [];
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/contact-points/useNotificationTemplates.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCreateNotificationTemplate: () => (/* binding */ useCreateNotificationTemplate),
/* harmony export */   useDeleteNotificationTemplate: () => (/* binding */ useDeleteNotificationTemplate),
/* harmony export */   useGetNotificationTemplate: () => (/* binding */ useGetNotificationTemplate),
/* harmony export */   useNotificationTemplateMetadata: () => (/* binding */ useNotificationTemplateMetadata),
/* harmony export */   useNotificationTemplates: () => (/* binding */ useNotificationTemplates),
/* harmony export */   useUpdateNotificationTemplate: () => (/* binding */ useUpdateNotificationTemplate),
/* harmony export */   useValidateNotificationTemplate: () => (/* binding */ useValidateNotificationTemplate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/api/utils.ts");
/* harmony import */ var _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/api/alertmanagerApi.ts");
/* harmony import */ var _api_templateApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/api/templateApi.ts");
/* harmony import */ var _hooks_useAsync__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAsync.tsx");
/* harmony import */ var _hooks_useProduceNewAlertmanagerConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useProduceNewAlertmanagerConfig.ts");
/* harmony import */ var _reducers_alertmanager_notificationTemplates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/reducers/alertmanager/notificationTemplates.ts");
/* harmony import */ var _utils_k8s_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/k8s/constants.ts");
/* harmony import */ var _utils_k8s_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/k8s/utils.ts");
/* harmony import */ var _utils_templates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/templates.ts");











const { useGetAlertmanagerConfigurationQuery, useLazyGetAlertmanagerConfigurationQuery } = _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_2__.alertmanagerApi;
const {
  useListNamespacedTemplateGroupQuery,
  useLazyReadNamespacedTemplateGroupQuery,
  useCreateNamespacedTemplateGroupMutation,
  useReplaceNamespacedTemplateGroupMutation,
  useDeleteNamespacedTemplateGroupMutation
} = _api_templateApi__WEBPACK_IMPORTED_MODULE_3__.templatesApi;
function useNotificationTemplates({ alertmanager }) {
  const k8sApiSupported = (0,_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_8__.shouldUseK8sApi)(alertmanager);
  const k8sApiTemplatesRequestState = useListNamespacedTemplateGroupQuery(
    { namespace: (0,_api_utils__WEBPACK_IMPORTED_MODULE_1__.getAPINamespace)() },
    {
      skip: !k8sApiSupported,
      selectFromResult: (state) => ({
        ...state,
        data: state.data ? templateGroupsToTemplates(state.data) : void 0,
        currentData: state.currentData ? templateGroupsToTemplates(state.currentData) : void 0
      })
    }
  );
  const configApiTemplatesRequestState = useGetAlertmanagerConfigurationQuery(alertmanager, {
    skip: k8sApiSupported,
    selectFromResult: (state) => ({
      ...state,
      data: state.data ? amConfigToTemplates(state.data) : void 0,
      currentData: state.currentData ? amConfigToTemplates(state.currentData) : void 0
    })
  });
  return k8sApiSupported ? k8sApiTemplatesRequestState : configApiTemplatesRequestState;
}
function templateGroupsToTemplates(templateGroups) {
  return templateGroups.items.map((templateGroup) => templateGroupToTemplate(templateGroup));
}
function templateGroupToTemplate(templateGroup) {
  const provenance = (0,_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_8__.getAnnotation)(templateGroup, _utils_k8s_constants__WEBPACK_IMPORTED_MODULE_7__.K8sAnnotations.Provenance) ?? _utils_k8s_constants__WEBPACK_IMPORTED_MODULE_7__.PROVENANCE_NONE;
  return {
    // K8s entities should always have a metadata.name property. The type is marked as optional because it's also used in other places
    uid: templateGroup.metadata.name ?? templateGroup.spec.title,
    title: templateGroup.spec.title,
    content: templateGroup.spec.content,
    provenance
  };
}
function amConfigToTemplates(config) {
  const { alertmanager_config } = config;
  const { templates = [] } = alertmanager_config;
  return Object.entries(config.template_files).map(([title, content]) => ({
    uid: title,
    title,
    content,
    // Undefined, null or empty string should be converted to PROVENANCE_NONE
    provenance: (config.template_file_provenances ?? {})[title] || _utils_k8s_constants__WEBPACK_IMPORTED_MODULE_7__.PROVENANCE_NONE,
    missing: !templates.includes(title)
  }));
}
function useGetNotificationTemplate({ alertmanager, uid }) {
  const [fetchAmConfig, amConfigStatus] = useLazyGetAlertmanagerConfigurationQuery({
    selectFromResult: (state) => ({
      ...state,
      data: state.data ? amConfigToTemplate(state.data, uid) : void 0,
      currentData: state.currentData ? amConfigToTemplate(state.currentData, uid) : void 0
      // TODO set error and isError in case template is not found
    })
  });
  const [fetchTemplate, templateStatus] = useLazyReadNamespacedTemplateGroupQuery({
    selectFromResult: (state) => {
      return {
        ...state,
        data: state.data ? templateGroupToTemplate(state.data) : void 0,
        currentData: state.currentData ? templateGroupToTemplate(state.currentData) : void 0
      };
    }
  });
  const k8sApiSupported = (0,_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_8__.shouldUseK8sApi)(alertmanager);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (k8sApiSupported) {
      fetchTemplate({ namespace: (0,_api_utils__WEBPACK_IMPORTED_MODULE_1__.getAPINamespace)(), name: uid });
    } else {
      fetchAmConfig(alertmanager);
    }
  }, [alertmanager, uid, k8sApiSupported, fetchAmConfig, fetchTemplate]);
  return k8sApiSupported ? templateStatus : amConfigStatus;
}
function amConfigToTemplate(config, name) {
  const templates = amConfigToTemplates(config);
  return templates.find((t) => t.title === name);
}
function useCreateNotificationTemplate({ alertmanager }) {
  const [createNamespacedTemplateGroup] = useCreateNamespacedTemplateGroupMutation();
  const [updateAlertmanagerConfiguration] = (0,_hooks_useProduceNewAlertmanagerConfig__WEBPACK_IMPORTED_MODULE_5__.useProduceNewAlertmanagerConfiguration)();
  const k8sApiSupported = (0,_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_8__.shouldUseK8sApi)(alertmanager);
  const createUsingConfigFileApi = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_4__.useAsync)(({ templateValues }) => {
    const action = (0,_reducers_alertmanager_notificationTemplates__WEBPACK_IMPORTED_MODULE_6__.addNotificationTemplateAction)({ template: templateValues });
    return updateAlertmanagerConfiguration(action);
  });
  const createUsingK8sApi = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_4__.useAsync)(({ templateValues }) => {
    const content = (0,_utils_templates__WEBPACK_IMPORTED_MODULE_9__.ensureDefine)(templateValues.title, templateValues.content);
    return createNamespacedTemplateGroup({
      namespace: (0,_api_utils__WEBPACK_IMPORTED_MODULE_1__.getAPINamespace)(),
      comGithubGrafanaGrafanaPkgApisAlertingNotificationsV0Alpha1TemplateGroup: {
        spec: { title: templateValues.title, content },
        metadata: {}
      }
    }).unwrap();
  });
  return k8sApiSupported ? createUsingK8sApi : createUsingConfigFileApi;
}
function useUpdateNotificationTemplate({ alertmanager }) {
  const [replaceNamespacedTemplateGroup] = useReplaceNamespacedTemplateGroupMutation();
  const [updateAlertmanagerConfiguration] = (0,_hooks_useProduceNewAlertmanagerConfig__WEBPACK_IMPORTED_MODULE_5__.useProduceNewAlertmanagerConfiguration)();
  const k8sApiSupported = (0,_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_8__.shouldUseK8sApi)(alertmanager);
  const updateUsingConfigFileApi = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_4__.useAsync)(({ template, patch }) => {
    const action = (0,_reducers_alertmanager_notificationTemplates__WEBPACK_IMPORTED_MODULE_6__.updateNotificationTemplateAction)({ name: template.title, template: patch });
    return updateAlertmanagerConfiguration(action);
  });
  const updateUsingK8sApi = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_4__.useAsync)(({ template, patch }) => {
    const content = (0,_utils_templates__WEBPACK_IMPORTED_MODULE_9__.ensureDefine)(patch.title, patch.content);
    return replaceNamespacedTemplateGroup({
      namespace: (0,_api_utils__WEBPACK_IMPORTED_MODULE_1__.getAPINamespace)(),
      name: template.uid,
      comGithubGrafanaGrafanaPkgApisAlertingNotificationsV0Alpha1TemplateGroup: {
        spec: { title: patch.title, content },
        metadata: { name: template.uid }
      }
    }).unwrap();
  });
  return k8sApiSupported ? updateUsingK8sApi : updateUsingConfigFileApi;
}
function useDeleteNotificationTemplate({ alertmanager }) {
  const [deleteNamespacedTemplateGroup] = useDeleteNamespacedTemplateGroupMutation();
  const [updateAlertmanagerConfiguration] = (0,_hooks_useProduceNewAlertmanagerConfig__WEBPACK_IMPORTED_MODULE_5__.useProduceNewAlertmanagerConfiguration)();
  const deleteUsingConfigAPI = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_4__.useAsync)(async ({ uid }) => {
    const action = (0,_reducers_alertmanager_notificationTemplates__WEBPACK_IMPORTED_MODULE_6__.deleteNotificationTemplateAction)({ name: uid });
    return updateAlertmanagerConfiguration(action);
  });
  const deleteUsingK8sApi = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_4__.useAsync)(({ uid }) => {
    return deleteNamespacedTemplateGroup({
      namespace: (0,_api_utils__WEBPACK_IMPORTED_MODULE_1__.getAPINamespace)(),
      name: uid,
      ioK8SApimachineryPkgApisMetaV1DeleteOptions: {}
    }).unwrap();
  });
  const k8sApiSupported = (0,_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_8__.shouldUseK8sApi)(alertmanager);
  return k8sApiSupported ? deleteUsingK8sApi : deleteUsingConfigAPI;
}
function useValidateNotificationTemplate({
  alertmanager,
  originalTemplate
}) {
  const { useLazyGetAlertmanagerConfigurationQuery: useLazyGetAlertmanagerConfigurationQuery2 } = _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_2__.alertmanagerApi;
  const [fetchAmConfig] = useLazyGetAlertmanagerConfigurationQuery2();
  const titleIsUnique = async (name) => {
    const k8sApiSupported = (0,_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_8__.shouldUseK8sApi)(alertmanager);
    if (k8sApiSupported) {
      return true;
    }
    if (originalTemplate?.title === name) {
      return true;
    }
    const amConfig = await fetchAmConfig(alertmanager).unwrap();
    const templates = amConfigToTemplates(amConfig);
    const templateOfThisNameExists = templates.some((t) => t.title === name);
    if (templateOfThisNameExists) {
      return "Another template with this name already exists";
    }
    return true;
  };
  return {
    titleIsUnique
  };
}
function useNotificationTemplateMetadata(template) {
  if (!template) {
    return {
      isProvisioned: false
    };
  }
  return {
    isProvisioned: Boolean(template.provenance) && template.provenance !== _utils_k8s_constants__WEBPACK_IMPORTED_MODULE_7__.PROVENANCE_NONE
  };
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/AlertInstanceModalSelector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertInstanceModalSelector: () => (/* binding */ AlertInstanceModalSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Tags/Tag.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/FilterInput/FilterInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/api/alertmanagerApi.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_labels__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/utils/labels.ts");
/* harmony import */ var _rules_state_history_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/common.ts");












function AlertInstanceModalSelector({
  onSelect,
  isOpen,
  onClose
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.useStyles2)(getStyles);
  const [selectedRule, setSelectedRule] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const [selectedInstances, setSelectedInstances] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const { useGetAlertmanagerAlertsQuery } = _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_14__.alertmanagerApi;
  const {
    currentData: result = [],
    isFetching: loading,
    isError: error
  } = useGetAlertmanagerAlertsQuery({
    amSourceName: _utils_datasource__WEBPACK_IMPORTED_MODULE_15__.GRAFANA_RULES_SOURCE_NAME,
    filter: {
      inhibited: true,
      silenced: true,
      active: true
    }
  });
  const [ruleFilter, setRuleFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const rulesWithInstances = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const rules = {};
    if (!loading && result) {
      result.forEach((instance) => {
        if (!rules[instance.labels.alertname]) {
          rules[instance.labels.alertname] = [];
        }
        const filteredAnnotations = Object.fromEntries(
          Object.entries(instance.annotations).filter(([key]) => !key.startsWith("__"))
        );
        const filteredLabels = Object.fromEntries(
          Object.entries(instance.labels).filter(([key]) => !key.startsWith("__"))
        );
        instance = { ...instance, annotations: filteredAnnotations, labels: filteredLabels };
        rules[instance.labels.alertname].push(instance);
      });
    }
    return rules;
  }, [loading, result]);
  const handleRuleChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((rule) => {
    setSelectedRule(rule);
    setSelectedInstances(null);
  }, []);
  const filteredRules = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const filteredRules2 = Object.keys(rulesWithInstances).filter(
      (rule) => rule.toLowerCase().includes(ruleFilter.toLowerCase())
    );
    const filteredRulesObject = {};
    filteredRules2.forEach((rule) => {
      filteredRulesObject[rule] = rulesWithInstances[rule];
    });
    return filteredRulesObject;
  }, [rulesWithInstances, ruleFilter]);
  if (error) {
    return null;
  }
  const filteredRulesKeys = Object.keys(filteredRules || []);
  const RuleRow = ({ index, style }) => {
    if (!filteredRules) {
      return null;
    }
    const ruleName = filteredRulesKeys[index];
    const isSelected = ruleName === selectedRule;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      "button",
      {
        type: "button",
        title: ruleName,
        style,
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.rowButton, { [styles.rowOdd]: index % 2 === 1, [styles.rowSelected]: isSelected }),
        onClick: () => handleRuleChange(ruleName),
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.ruleTitle, styles.rowButtonTitle), children: ruleName }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.alertFolder, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { name: "folder" }),
            " ",
            filteredRules[ruleName][0].labels.grafana_folder ?? ""
          ] })
        ]
      }
    );
  };
  const getAlertUniqueLabels = (allAlerts, currentAlert) => {
    const allLabels = allAlerts.map((alert) => alert.labels);
    const labelsAsArray = allLabels.map(_utils_labels__WEBPACK_IMPORTED_MODULE_16__.objectLabelsToArray);
    const ruleCommonLabels = (0,_rules_state_history_common__WEBPACK_IMPORTED_MODULE_17__.extractCommonLabels)(labelsAsArray);
    const alertUniqueLabels = (0,_rules_state_history_common__WEBPACK_IMPORTED_MODULE_17__.omitLabels)((0,_utils_labels__WEBPACK_IMPORTED_MODULE_16__.objectLabelsToArray)(currentAlert.labels), ruleCommonLabels);
    const tags = alertUniqueLabels.length ? (0,_utils_labels__WEBPACK_IMPORTED_MODULE_16__.labelsToTags)((0,_utils_labels__WEBPACK_IMPORTED_MODULE_16__.arrayLabelsToObject)(alertUniqueLabels)) : (0,_utils_labels__WEBPACK_IMPORTED_MODULE_16__.labelsToTags)(currentAlert.labels);
    return tags;
  };
  const InstanceRow = ({ index, style }) => {
    const alerts = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => selectedRule ? rulesWithInstances[selectedRule] : [], []);
    const alert = alerts[index];
    const isSelected = selectedInstances?.includes(alert);
    const tags = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => getAlertUniqueLabels(alerts, alert), [alerts, alert]);
    const handleSelectInstances = () => {
      if (isSelected && selectedInstances) {
        setSelectedInstances(selectedInstances.filter((instance) => instance !== alert));
        return;
      }
      setSelectedInstances([...selectedInstances || [], alert]);
    };
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "button",
      {
        type: "button",
        style,
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.rowButton, styles.instanceButton, {
          [styles.rowOdd]: index % 2 === 1,
          [styles.rowSelected]: isSelected
        }),
        onClick: handleSelectInstances,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.rowButtonTitle, title: alert.labels.alertname, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tooltip, { placement: "bottom", content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: JSON.stringify(alert, null, 2) }), theme: "info", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: tags.map((tag, index2) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Tag, { name: tag, className: styles.tag }, index2)) }) }) })
      }
    );
  };
  const handleConfirm = () => {
    const instances = selectedInstances?.map((instance) => {
      const alert = {
        status: "firing",
        annotations: instance.annotations,
        labels: instance.labels,
        startsAt: instance.startsAt,
        endsAt: instance.endsAt,
        generatorURL: instance.generatorURL,
        fingerprint: instance.fingerprint
      };
      return alert;
    }) || [];
    onSelect(instances);
    resetState();
  };
  const resetState = () => {
    setSelectedRule(void 0);
    setSelectedInstances(null);
    setRuleFilter("");
    handleSearchRules("");
  };
  const onDismiss = () => {
    resetState();
    onClose();
  };
  const handleSearchRules = (filter) => {
    setRuleFilter(filter);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Modal,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.alert-instance-modal-selector.title-select-alert-instances", "Select alert instances"),
      className: styles.modal,
      closeOnEscape: true,
      isOpen,
      onDismiss,
      contentClassName: styles.modalContent,
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.FilterInput,
            {
              value: ruleFilter,
              onChange: handleSearchRules,
              title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.alert-instance-modal-selector.title-search-alert-rule", "Search alert rule"),
              placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.alert-instance-modal-selector.placeholder-search-alert-rule", "Search alert rule"),
              autoFocus: true
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: selectedRule && "Select one or more instances from the list below" || "" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.column, children: [
            loading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.LoadingPlaceholder,
              {
                text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.alert-instance-modal-selector.text-loading-rules", "Loading rules..."),
                className: styles.loadingPlaceholder
              }
            ),
            !loading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__["default"], { children: ({ height, width }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_window__WEBPACK_IMPORTED_MODULE_4__.FixedSizeList, { itemSize: 50, height, width, itemCount: filteredRulesKeys.length, children: RuleRow }) })
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.column, children: [
            !selectedRule && !loading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.selectedRulePlaceholder, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.alert-instance-modal-selector.select-alert-rule", children: "Select an alert rule to get a list of available firing instances" }) }) }),
            loading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.LoadingPlaceholder,
              {
                text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.alert-instance-modal-selector.text-loading-rule", "Loading rule..."),
                className: styles.loadingPlaceholder
              }
            ),
            selectedRule && rulesWithInstances[selectedRule].length && !loading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__["default"], { children: ({ width, height }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              react_window__WEBPACK_IMPORTED_MODULE_4__.FixedSizeList,
              {
                itemSize: 32,
                height,
                width,
                itemCount: rulesWithInstances[selectedRule].length || 0,
                children: InstanceRow
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Modal.ButtonRow, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Button, { type: "button", variant: "secondary", onClick: onDismiss, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.common.cancel", children: "Cancel" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Button,
            {
              type: "button",
              variant: "primary",
              disabled: !(selectedRule && selectedInstances),
              onClick: () => {
                if (selectedRule && selectedInstances) {
                  handleConfirm();
                }
              },
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.alert-instance-modal-selector.add-alert-data-to-payload", children: "Add alert data to payload" })
            }
          )
        ] })
      ]
    }
  ) });
}
const getStyles = (theme) => {
  const clearButton = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.clearButtonStyles)(theme);
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "grid",
      gridTemplateColumns: "1fr 1.5fr",
      gridTemplateRows: "min-content auto",
      gap: theme.spacing(2),
      flex: 1
    }),
    tag: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      margin: "5px"
    }),
    column: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flex: "1 1 auto"
    }),
    alertLabels: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      overflowX: "auto",
      height: "32px"
    }),
    ruleTitle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "22px",
      fontWeight: theme.typography.fontWeightBold
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
      overflowX: "auto"
    }),
    rowSelected: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      borderColor: theme.colors.primary.border
    }),
    rowOdd: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      backgroundColor: theme.colors.background.secondary
    }),
    instanceButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
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
    selectedRulePlaceholder: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
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
    }),
    labels: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      justifyContent: "flex-start"
    }),
    alertFolder: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "20px",
      fontSize: theme.typography.bodySmall.fontSize,
      color: theme.colors.text.secondary,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      columnGap: theme.spacing(1),
      alignItems: "center"
    })
  };
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/PayloadEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PayloadEditor: () => (/* binding */ PayloadEditor),
/* harmony export */   RESET_TO_DEFAULT: () => (/* binding */ RESET_TO_DEFAULT)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Toggletip/Toggletip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/Menu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Dropdown/Dropdown.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _EditorColumnHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/EditorColumnHeader.tsx");
/* harmony import */ var _AlertInstanceModalSelector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/AlertInstanceModalSelector.tsx");
/* harmony import */ var _TemplateData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplateData.ts");
/* harmony import */ var _TemplateDataDocs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplateDataDocs.tsx");
/* harmony import */ var _form_GenerateAlertDataModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/GenerateAlertDataModal.tsx");












const RESET_TO_DEFAULT = "Reset to defaults";
function PayloadEditor({
  payload,
  setPayload,
  defaultPayload,
  setPayloadFormatError,
  payloadFormatError,
  className
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  const onReset = () => {
    setPayload(defaultPayload);
  };
  const [isEditingAlertData, setIsEditingAlertData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const onCloseEditAlertModal = () => {
    setIsEditingAlertData(false);
  };
  const errorInPayloadJson = payloadFormatError !== null;
  const validatePayload = () => {
    try {
      const payloadObj = JSON.parse(payload);
      JSON.stringify([...payloadObj]);
      setPayloadFormatError(null);
    } catch (e) {
      setPayloadFormatError(e instanceof Error ? e.message : "Invalid JSON.");
      throw e;
    }
  };
  const onOpenEditAlertModal = () => {
    try {
      validatePayload();
      setIsEditingAlertData(true);
    } catch (e) {
    }
  };
  const onOpenAlertSelectorModal = () => {
    try {
      validatePayload();
      setIsAlertSelectorOpen(true);
    } catch (e) {
    }
  };
  const onAddAlertList = (alerts) => {
    onCloseEditAlertModal();
    setIsAlertSelectorOpen(false);
    setPayload((payload2) => {
      const payloadObj = JSON.parse(payload2);
      return JSON.stringify([...payloadObj, ...alerts], void 0, 2);
    });
  };
  const [isAlertSelectorOpen, setIsAlertSelectorOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.wrapper, className), children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _EditorColumnHeader__WEBPACK_IMPORTED_MODULE_12__.EditorColumnHeader,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.payload-editor.label-payload", "Payload"),
          actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "row", alignItems: "center", gap: 0.5, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Dropdown,
              {
                overlay: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Menu, { children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Menu.Item,
                    {
                      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                        "alerting.payload-editor.label-use-existing-alert-instances",
                        "Use existing alert instances"
                      ),
                      disabled: errorInPayloadJson,
                      onClick: onOpenAlertSelectorModal
                    }
                  ),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Menu.Item,
                    {
                      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.payload-editor.label-add-custom-alert-instance", "Add custom alert instance"),
                      disabled: errorInPayloadJson,
                      onClick: onOpenEditAlertModal
                    }
                  ),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Menu.Divider, {}),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Menu.Item, { label: RESET_TO_DEFAULT, onClick: onReset, destructive: true })
                ] }),
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button, { variant: "secondary", size: "sm", icon: "angle-down", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.payload-editor.edit-payload", children: "Edit payload" }) })
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Toggletip, { content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertTemplateDataTable, {}), placement: "top", fitContent: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button, { variant: "secondary", fill: "outline", size: "sm", icon: "question-circle", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.payload-editor.reference", children: "Reference" }) }) })
          ] })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.editorWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__["default"], { children: ({ width, height }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.CodeEditor,
        {
          containerStyles: styles.editorContainer,
          width,
          height,
          language: "json",
          showLineNumbers: true,
          showMiniMap: false,
          value: payload,
          readOnly: false,
          onBlur: setPayload,
          monacoOptions: {
            scrollBeyondLastLine: false
          }
        }
      ) }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_form_GenerateAlertDataModal__WEBPACK_IMPORTED_MODULE_16__.GenerateAlertDataModal, { isOpen: isEditingAlertData, onDismiss: onCloseEditAlertModal, onAccept: onAddAlertList }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _AlertInstanceModalSelector__WEBPACK_IMPORTED_MODULE_13__.AlertInstanceModalSelector,
      {
        onSelect: onAddAlertList,
        isOpen: isAlertSelectorOpen,
        onClose: () => setIsAlertSelectorOpen(false)
      }
    )
  ] });
}
const AlertTemplateDataTable = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TemplateDataDocs__WEBPACK_IMPORTED_MODULE_15__.TemplateDataTable, { dataItems: _TemplateData__WEBPACK_IMPORTED_MODULE_14__.AlertTemplatePreviewData });
};
const getStyles = (theme) => ({
  wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "column",
    height: "100%"
  }),
  tooltip: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    paddingLeft: theme.spacing(1)
  }),
  label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    margin: 0
  }),
  editorWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    flex: 1
  }),
  editorContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "fit-content",
    border: "none"
  }),
  templateDataDocsHeader: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.primary,
    span: {
      color: theme.colors.text.secondary,
      fontSize: theme.typography.bodySmall.fontSize
    }
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/TemplateData.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertTemplateData: () => (/* binding */ AlertTemplateData),
/* harmony export */   AlertTemplatePreviewData: () => (/* binding */ AlertTemplatePreviewData),
/* harmony export */   GlobalTemplateData: () => (/* binding */ GlobalTemplateData),
/* harmony export */   KeyValueCodeSnippet: () => (/* binding */ KeyValueCodeSnippet),
/* harmony export */   KeyValueTemplateFunctions: () => (/* binding */ KeyValueTemplateFunctions)
/* harmony export */ });

const GlobalTemplateData = [
  {
    name: "Receiver",
    type: "string",
    notes: "Name of the contact point that the notification is being sent to."
  },
  {
    name: "Status",
    type: "string",
    notes: "firing if at least one alert is firing, otherwise resolved"
  },
  {
    name: "Alerts",
    type: "[]Alert",
    notes: "List of alert objects that are included in this notification."
  },
  {
    name: "Alerts.Firing",
    type: "[]Alert",
    notes: "List of firing alerts"
  },
  {
    name: "Alerts.Resolved",
    type: "[]Alert",
    notes: "List of resolved alerts"
  },
  {
    name: "GroupLabels",
    type: "KeyValue",
    notes: "Labels these alerts were grouped by."
  },
  {
    name: "CommonLabels",
    type: "KeyValue",
    notes: "Labels common to all the alerts included in this notification."
  },
  {
    name: "CommonAnnotations",
    type: "KeyValue",
    notes: "Annotations common to all the alerts included in this notification."
  },
  {
    name: "ExternalURL",
    type: "string",
    notes: "Back link to the Grafana that sent the notification."
  }
];
const AlertTemplatePreviewData = [
  {
    name: "labels",
    type: "Object{}",
    notes: "Set of labels attached to the alert."
  },
  {
    name: "annotations",
    type: "Object{}",
    notes: "Set of annotations attached to the alert."
  },
  {
    name: "startsAt",
    type: "string (ISO8601)",
    notes: "Time the alert started firing."
  },
  {
    name: "endsAt",
    type: "string (ISO8601)",
    notes: "Time the alert ends firing."
  }
];
const AlertTemplateData = [
  {
    name: "Status",
    type: "string",
    notes: "firing or resolved."
  },
  {
    name: "Labels",
    type: "KeyValue",
    notes: "Set of labels attached to the alert."
  },
  {
    name: "Annotations",
    type: "KeyValue",
    notes: "Set of annotations attached to the alert."
  },
  {
    name: "Values",
    type: "KeyValue",
    notes: "The values of all instant queries, reduce and math expressions, and classic conditions for the alert. It does not contain time series data."
  },
  {
    name: "StartsAt",
    type: "time.Time",
    notes: "Time the alert started firing."
  },
  {
    name: "EndsAt",
    type: "time.Time",
    notes: "Only set if the end time of an alert is known. Otherwise set to a configurable timeout period from the time since the last alert was received."
  },
  {
    name: "GeneratorURL",
    type: "string",
    notes: "A back link to Grafana or external Alertmanager."
  },
  {
    name: "SilenceURL",
    type: "string",
    notes: "Link to Grafana silence for with labels for this alert pre-filled. Only for Grafana managed alerts."
  },
  {
    name: "DashboardURL",
    type: "string",
    notes: "Link to Grafana dashboard, if alert rule belongs to one. Only for Grafana managed alerts."
  },
  {
    name: "PanelURL",
    type: "string",
    notes: "Link to Grafana dashboard panel, if alert rule belongs to one. Only for Grafana managed alerts."
  },
  {
    name: "Fingerprint",
    type: "string",
    notes: "Fingerprint that can be used to identify the alert."
  },
  {
    name: "ValueString",
    type: "string",
    notes: "String that contains the labels and value of each reduced expression in the alert."
  }
];
const KeyValueTemplateFunctions = [
  {
    name: "SortedPairs",
    returns: "KeyValue",
    notes: "Returns sorted list of key & value string pairs"
  },
  {
    name: "Remove",
    args: "[]string",
    returns: "KeyValue",
    notes: "Returns a copy of the Key/Value map without the given keys."
  },
  {
    name: "Names",
    returns: "[]string",
    notes: "List of label names"
  },
  {
    name: "Values",
    returns: "[]string",
    notes: "List of label values"
  }
];
const KeyValueCodeSnippet = `{
  "summary": "alert summary",
  "description": "alert description"
}
`;


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/TemplateDataDocs.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateDataDocs: () => (/* binding */ TemplateDataDocs),
/* harmony export */   TemplateDataTable: () => (/* binding */ TemplateDataTable),
/* harmony export */   getTemplateDataTableStyles: () => (/* binding */ getTemplateDataTableStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _HoverCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/HoverCard.tsx");
/* harmony import */ var _TemplateData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplateData.ts");







function TemplateDataDocs() {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getTemplateDataDocsStyles);
  const AlertTemplateDataTable = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    TemplateDataTable,
    {
      caption: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { variant: "h4", element: "h4", color: "primary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.template-data-docs.alert-template-data-table.alert-template-data", children: "Alert template data" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { variant: "bodySmall", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.template-data-docs.alert-template-data-table.only-in-alert", children: "Available only when in the context of an Alert (e.g. inside .Alerts loop)" }) })
      ] }),
      dataItems: _TemplateData__WEBPACK_IMPORTED_MODULE_7__.AlertTemplateData
    }
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { gap: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    TemplateDataTable,
    {
      caption: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { variant: "h4", element: "h4", color: "primary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.template-data-docs.notification-template-data", children: "Notification template data" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { variant: "bodySmall", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.template-data-docs.available-context-notification", children: "Available in the context of a notification." }) })
      ] }),
      dataItems: _TemplateData__WEBPACK_IMPORTED_MODULE_7__.GlobalTemplateData,
      typeRenderer: (type) => {
        if (type === "[]Alert") {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HoverCard__WEBPACK_IMPORTED_MODULE_6__.PopupCard, { content: AlertTemplateDataTable, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.interactiveType, children: type }) });
        }
        if (type === "KeyValue") {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HoverCard__WEBPACK_IMPORTED_MODULE_6__.PopupCard, { content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(KeyValueTemplateDataTable, {}), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.interactiveType, children: type }) });
        }
        return type;
      }
    }
  ) });
}
const getTemplateDataDocsStyles = (theme) => ({
  interactiveType: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.link
  })
});
function TemplateDataTable({ dataItems, caption, typeRenderer }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getTemplateDataTableStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: styles.table, children: [
    caption && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("caption", { children: caption }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.template-data-table.name", children: "Name" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.template-data-table.type", children: "Type" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.template-data-table.notes", children: "Notes" }) })
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: dataItems.map(({ name, type, notes }, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: name }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: typeRenderer ? typeRenderer(type) : type }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: notes })
    ] }, index)) })
  ] });
}
function KeyValueTemplateDataTable() {
  const tableStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getTemplateDataTableStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.key-value-template-data-table.description", children: "KeyValue is a set of key/value string pairs that represent labels and annotations." }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: _TemplateData__WEBPACK_IMPORTED_MODULE_7__.KeyValueCodeSnippet }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: tableStyles.table, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("caption", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.key-value-template-data-table.keyvalue-methods", children: "Key-value methods" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.key-value-template-data-table.name", children: "Name" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.key-value-template-data-table.arguments", children: "Arguments" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.key-value-template-data-table.returns", children: "Returns" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.key-value-template-data-table.notes", children: "Notes" }) })
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: _TemplateData__WEBPACK_IMPORTED_MODULE_7__.KeyValueTemplateFunctions.map(({ name, args, returns, notes }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: name }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: args }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: returns }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: notes })
      ] }, name)) })
    ] })
  ] });
}
const getTemplateDataTableStyles = (theme) => ({
  table: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    borderCollapse: "collapse",
    width: "100%",
    caption: {
      captionSide: "top"
    },
    "td, th": {
      padding: theme.spacing(1, 1)
    },
    thead: {
      fontWeight: theme.typography.fontWeightBold
    },
    "tbody tr:nth-child(2n + 1)": {
      backgroundColor: theme.colors.background.secondary
    },
    "tbody td:nth-child(1)": {
      fontWeight: theme.typography.fontWeightBold
    },
    "tbody td:nth-child(2)": {
      fontStyle: "italic"
    }
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/TemplateDataExamples.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalTemplateDataExamples: () => (/* binding */ GlobalTemplateDataExamples)
/* harmony export */ });

const GlobalTemplateDataExamples = [
  {
    description: "Default templates for notification titles",
    example: `{{- /* This is a copy of the "default.title" template. */ -}}
{{- /* Edit the template name and template content as needed. */ -}}
{{ define "default.title.copy" }}
  [{{ .Status | toUpper }}{{ if eq .Status "firing" }}:{{ .Alerts.Firing | len }}{{ if gt (.Alerts.Resolved | len) 0 }}, RESOLVED:{{ .Alerts.Resolved | len }}{{ end }}{{ end }}] {{ .GroupLabels.SortedPairs.Values | join " " }} {{ if gt (len .CommonLabels) (len .GroupLabels) }}({{ with .CommonLabels.Remove .GroupLabels.Names }}{{ .Values | join " " }}{{ end }}){{ end }}
{{ end }}`
  },
  {
    description: "Default templates for notification messages",
    example: `{{- /* This is a copy of the "default.message" template. */ -}}
{{- /* Edit the template name and template content as needed. */ -}}
{{ define "default.message.copy" }}{{ if gt (len .Alerts.Firing) 0 }}**Firing**
{{ template "__text_alert_list.copy" .Alerts.Firing }}{{ if gt (len .Alerts.Resolved) 0 }}

{{ end }}{{ end }}{{ if gt (len .Alerts.Resolved) 0 }}**Resolved**
{{ template "__text_alert_list.copy" .Alerts.Resolved }}{{ end }}{{ end }}

{{ define "__text_alert_list.copy" }}{{ range . }}
Value: {{ template "__text_values_list.copy" . }}
Labels:
{{ range .Labels.SortedPairs }} - {{ .Name }} = {{ .Value }}
{{ end }}Annotations:
{{ range .Annotations.SortedPairs }} - {{ .Name }} = {{ .Value }}
{{ end }}{{ if gt (len .GeneratorURL) 0 }}Source: {{ .GeneratorURL }}
{{ end }}{{ if gt (len .SilenceURL) 0 }}Silence: {{ .SilenceURL }}
{{ end }}{{ if gt (len .DashboardURL) 0 }}Dashboard: {{ .DashboardURL }}
{{ end }}{{ if gt (len .PanelURL) 0 }}Panel: {{ .PanelURL }}
{{ end }}{{ end }}{{ end }}

{{ define "__text_values_list.copy" }}{{ if len .Values }}{{ $first := true }}{{ range $refID, $value := .Values -}}
{{ if $first }}{{ $first = false }}{{ else }}, {{ end }}{{ $refID }}={{ $value }}{{ end -}}
{{ else }}[no value]{{ end }}{{ end }}`
  },
  {
    description: "Print alerts with summary and description",
    example: `{{- /* Example displaying the summary and description annotations of each alert in the notification. */ -}}
{{- /* Edit the template name and template content as needed. */ -}}
{{ define "custom.alerts" -}}
{{ len .Alerts }} alert(s)
{{ range .Alerts -}}
  {{ template "alert.summary_and_description" . -}}
{{ end -}}
{{ end -}}

{{ define "alert.summary_and_description" }}
  Summary: {{.Annotations.summary}}
  Status: {{ .Status }}
  Description: {{.Annotations.description}}
{{ end -}}`
  },
  {
    description: "Print firing and resolved alerts",
    example: `{{- /* Example displaying firing and resolved alerts separately in the notification. */ -}}
{{- /* Edit the template name and template content as needed. */ -}}
{{ define "custom.firing_and_resolved_alerts" -}}
{{ len .Alerts.Resolved }} resolved alert(s)
{{ range .Alerts.Resolved -}}
  {{ template "alert.summary_and_description" . -}}
{{ end }}
{{ len .Alerts.Firing }} firing alert(s)
{{ range .Alerts.Firing -}}
  {{ template "alert.summary_and_description" . -}}
{{ end -}}
{{ end -}}

{{ define "alert.summary_and_description" }}
  Summary: {{.Annotations.summary}}
  Status: {{ .Status }}
  Description: {{.Annotations.description}}
{{ end -}}`
  },
  {
    description: "Print common labels and annotations",
    example: `{{- /* Example displaying labels and annotations that are common to all alerts in the notification.*/ -}}
{{- /* Edit the template name and template content as needed. */ -}}
{{ define "custom.common_labels_and_annotations" -}}
{{ len .Alerts.Resolved }} resolved alert(s)
{{ len .Alerts.Firing }} firing alert(s)

Common labels: {{ len .CommonLabels.SortedPairs }}
{{ range .CommonLabels.SortedPairs -}}
- {{ .Name }} = {{ .Value }}
{{ end }}

Common annotations: {{ len .CommonAnnotations.SortedPairs }}
{{ range .CommonAnnotations.SortedPairs }}
- {{ .Name }} = {{ .Value }}
{{ end }}

{{ end -}}`
  },
  {
    description: "Print individual labels and annotations",
    example: `{{- /* Example displaying all labels and annotations for each alert in the notification.*/ -}}
{{- /* Edit the template name and template content as needed. */ -}}
{{ define "custom.alert_labels_and_annotations" -}}
{{ len .Alerts.Resolved }} resolved alert(s)
{{ range .Alerts.Resolved -}}
  {{ template "alert.labels_and_annotations" . -}}
{{ end }}
{{ len .Alerts.Firing }} firing alert(s)
{{ range .Alerts.Firing -}}
  {{ template "alert.labels_and_annotations" . -}}
{{ end -}}
{{ end -}}

{{ define "alert.labels_and_annotations" }}
Alert labels: {{ len .Labels.SortedPairs }}
{{ range .Labels.SortedPairs -}}
- {{ .Name }} = {{ .Value }}
{{ end -}}
Alert annotations: {{ len .Annotations.SortedPairs }}
{{ range .Annotations.SortedPairs -}}
- {{ .Name }} = {{ .Value }}
{{ end -}}
{{ end -}}`
  },
  {
    description: "Print URLs for runbook and alert data in Grafana",
    example: `{{- /* Example displaying additional information, such as runbook link, DashboardURL and SilenceURL, for each alert in the notification.*/ -}}
{{- /* Edit the template name and template content as needed. */ -}}
{{ define "custom.alert_additional_details" -}}
{{ len .Alerts.Resolved }} resolved alert(s)
{{ range .Alerts.Resolved -}}
  {{ template "alert.additional_details" . -}}
{{ end }}
{{ len .Alerts.Firing }} firing alert(s)
{{ range .Alerts.Firing -}}
  {{ template "alert.additional_details" . -}}
{{ end -}}
{{ end -}}

{{ define "alert.additional_details" }}
- Dashboard: {{ .DashboardURL }}
- Panel: {{ .PanelURL }}
- AlertGenerator: {{ .GeneratorURL }}
- Silence: {{ .SilenceURL }}
- RunbookURL: {{ .Annotations.runbook_url}}
{{ end -}}`
  },
  {
    description: "Create JSON payload for webhook contact point",
    example: `{{- /* Example displaying a custom JSON payload for a webhook contact point.*/ -}}
{{- /* Edit the template name and template content as needed. */ -}}
{{- /* Variables defined in the webhook contact point can be accessed in .Vars but will not be previewable. */ -}}
{{ define "webhook.custom.payload" -}}
  {{ coll.Dict
  "receiver" .Receiver
  "status" .Status
  "alerts" (tmpl.Exec "webhook.custom.simple_alerts" .Alerts | data.JSON)
  "groupLabels" .GroupLabels
  "commonLabels" .CommonLabels
  "commonAnnotations" .CommonAnnotations
  "externalURL" .ExternalURL
  "version" "1"
  "orgId"  (index .Alerts 0).OrgID
  "truncatedAlerts"  .TruncatedAlerts
  "groupKey" .GroupKey
  "state"  (tmpl.Inline "{{ if eq .Status \\"resolved\\" }}ok{{ else }}alerting{{ end }}" . )
  "allVariables"  .Vars
  "title" (tmpl.Exec "default.title" . )
  "message" (tmpl.Exec "default.message" . )
  | data.ToJSONPretty " "}}
{{- end }}

{{- /* Example showcasing embedding json templates in other json templates. */ -}}
{{ define "webhook.custom.simple_alerts" -}}
  {{- $alerts := coll.Slice -}}
  {{- range . -}}
    {{ $alerts = coll.Append (coll.Dict
    "status" .Status
    "labels" .Labels
    "startsAt" .StartsAt
    "endsAt" .EndsAt
    ) $alerts}}
  {{- end -}}
  {{- $alerts | data.ToJSON -}}
{{- end }}`
  }
];


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/TemplateEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateEditor: () => (/* binding */ TemplateEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _editor_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/editor/autocomplete.ts");
/* harmony import */ var _editor_definition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/editor/definition.ts");
/* harmony import */ var _editor_register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/editor/register.ts");







const TemplateEditor = (props) => {
  const shouldAutoHeight = Boolean(props.autoHeight);
  const disposeSuggestions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const onEditorDidMount = (editor2) => {
    if (shouldAutoHeight) {
      const contentHeight = editor2.getContentHeight();
      try {
        editor2.layout({ height: contentHeight, width: NaN });
      } catch (err) {
      }
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    return () => {
      disposeSuggestions.current?.dispose();
    };
  }, []);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CodeEditor,
    {
      showLineNumbers: true,
      showMiniMap: false,
      ...props,
      monacoOptions: {
        scrollBeyondLastLine: false
      },
      onEditorDidMount,
      onBeforeEditorMount: (monaco) => {
        (0,_editor_register__WEBPACK_IMPORTED_MODULE_5__.registerLanguage)(monaco, _editor_definition__WEBPACK_IMPORTED_MODULE_4__["default"]);
        disposeSuggestions.current = (0,_editor_autocomplete__WEBPACK_IMPORTED_MODULE_3__.registerGoTemplateAutocomplete)(monaco);
      },
      language: _editor_definition__WEBPACK_IMPORTED_MODULE_4__.GO_TEMPLATE_LANGUAGE_ID
    }
  );
};



/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/TemplateForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateForm: () => (/* binding */ TemplateForm),
/* harmony export */   defaultPayloadString: () => (/* binding */ defaultPayloadString),
/* harmony export */   defaults: () => (/* binding */ defaults),
/* harmony export */   getStyles: () => (/* binding */ getStyles),
/* harmony export */   isDuplicating: () => (/* binding */ isDuplicating)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/date-fns/addMinutes.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/date-fns/subDays.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/date-fns/subHours.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/react-use/esm/useToggle.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/Menu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Drawer/Drawer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldSet.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./packages/grafana-ui/src/components/Dropdown/Dropdown.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./packages/grafana-ui/src/components/Splitter/useSplitter.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_features_alerting_unified_components_contact_points_ContactPoints__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/ContactPoints.tsx");
/* harmony import */ var _enterprise_components_AI_AIGenTemplateButton_addAITemplateButton__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/alerting/unified/enterprise-components/AI/AIGenTemplateButton/addAITemplateButton.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _EditorColumnHeader__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/alerting/unified/components/EditorColumnHeader.tsx");
/* harmony import */ var _Provisioning__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./public/app/features/alerting/unified/components/Provisioning.tsx");
/* harmony import */ var _Spacer__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./public/app/features/alerting/unified/components/Spacer.tsx");
/* harmony import */ var _contact_points_useNotificationTemplates__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/useNotificationTemplates.ts");
/* harmony import */ var _PayloadEditor__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/PayloadEditor.tsx");
/* harmony import */ var _TemplateDataDocs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplateDataDocs.tsx");
/* harmony import */ var _TemplateDataExamples__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplateDataExamples.ts");
/* harmony import */ var _TemplateEditor__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplateEditor.tsx");
/* harmony import */ var _TemplatePreview__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplatePreview.tsx");
/* harmony import */ var _editor_templateDataSuggestions__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/editor/templateDataSuggestions.ts");


























const defaults = Object.freeze({
  title: "",
  content: ""
});
const isDuplicating = (location) => location.pathname.endsWith("/duplicate");
const TemplateForm = ({ originalTemplate, prefill, alertmanager }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_24__.useStyles2)(getStyles);
  const appNotification = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_25__.useAppNotification)();
  const [createNewTemplate, { error: createTemplateError }] = (0,_contact_points_useNotificationTemplates__WEBPACK_IMPORTED_MODULE_33__.useCreateNotificationTemplate)({ alertmanager });
  const [updateTemplate, { error: updateTemplateError }] = (0,_contact_points_useNotificationTemplates__WEBPACK_IMPORTED_MODULE_33__.useUpdateNotificationTemplate)({ alertmanager });
  const { titleIsUnique } = (0,_contact_points_useNotificationTemplates__WEBPACK_IMPORTED_MODULE_33__.useValidateNotificationTemplate)({ alertmanager, originalTemplate });
  const formRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  const isGrafanaAlertManager = alertmanager === _utils_datasource__WEBPACK_IMPORTED_MODULE_28__.GRAFANA_RULES_SOURCE_NAME;
  const error = updateTemplateError ?? createTemplateError;
  const [cheatsheetOpened, toggleCheatsheetOpened] = (0,react_use__WEBPACK_IMPORTED_MODULE_7__["default"])(false);
  const [payload, setPayload] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(defaultPayloadString);
  const [payloadFormatError, setPayloadFormatError] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
  const [aiGeneratedTemplate, setAiGeneratedTemplate] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const { isProvisioned } = (0,_contact_points_useNotificationTemplates__WEBPACK_IMPORTED_MODULE_33__.useNotificationTemplateMetadata)(originalTemplate);
  const originalTemplatePrefill = originalTemplate ? { title: originalTemplate.title, content: originalTemplate.content } : void 0;
  const columnSplitter = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_23__.useSplitter)({
    direction: "column",
    // if Grafana Alertmanager, split 50/50, otherwise 100/0 because there is no payload editor
    initialSize: isGrafanaAlertManager ? 0.5 : 1,
    dragPosition: "middle"
  });
  const rowSplitter = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_23__.useSplitter)({
    direction: "row",
    // if Grafana Alertmanager, split 60/40, otherwise 100/0 because there is no preview
    initialSize: isGrafanaAlertManager ? 0.6 : 1,
    dragPosition: "middle"
  });
  const formApi = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({
    mode: "onSubmit",
    defaultValues: prefill ?? originalTemplatePrefill ?? defaults
  });
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    getValues,
    setValue,
    watch
  } = formApi;
  const submit = async (values) => {
    const returnLink = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_29__.makeAMLink)("/alerting/notifications", alertmanager, {
      tab: app_features_alerting_unified_components_contact_points_ContactPoints__WEBPACK_IMPORTED_MODULE_26__.ActiveTab.NotificationTemplates
    });
    try {
      if (!originalTemplate) {
        await createNewTemplate.execute({ templateValues: values });
      } else {
        await updateTemplate.execute({ template: originalTemplate, patch: values });
      }
      appNotification.success("Template saved", `Template ${values.title} has been saved`);
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_11__.locationService.push(returnLink);
    } catch (error2) {
      appNotification.error("Error saving template", (0,_utils_misc__WEBPACK_IMPORTED_MODULE_29__.stringifyErrorLike)(error2));
    }
  };
  const appendExample = (example) => {
    const content = getValues("content"), newValue = !content ? example : `${content}
${example}`;
    setValue("content", newValue);
  };
  const handleTemplateGenerated = (template) => {
    setValue("content", template);
    setAiGeneratedTemplate(true);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_6__.FormProvider, { ...formApi, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      "form",
      {
        onSubmit: handleSubmit(submit),
        ref: formRef,
        className: styles.form,
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.t)("alerting.template-form.aria-label-template-form", "Template form"),
        children: [
          error && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Alert,
            {
              severity: "error",
              title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.t)("alerting.template-form.title-error-saving-template", "Error saving template"),
              children: error.message || (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_10__.isFetchError)(error) && error.data?.message || String(error)
            }
          ),
          isProvisioned && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Box, { grow: 0, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Provisioning__WEBPACK_IMPORTED_MODULE_31__.ProvisioningAlert, { resource: _Provisioning__WEBPACK_IMPORTED_MODULE_31__.ProvisionedResource.Template }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_19__.FieldSet, { disabled: isProvisioned, className: styles.fieldset, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.Stack, { direction: "column", gap: 1, alignItems: "stretch", minHeight: "100%", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.Stack, { direction: "row", alignItems: "center", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_20__.InlineField,
                {
                  label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.t)("alerting.template-form.label-template-group-name", "Template group name"),
                  error: errors?.title?.message,
                  invalid: !!errors.title?.message,
                  required: true,
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _grafana_ui__WEBPACK_IMPORTED_MODULE_21__.Input,
                    {
                      ...register("title", {
                        required: { value: true, message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.t)("alerting.template-form.message.required", "Required.") },
                        validate: { titleIsUnique }
                      }),
                      placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.t)(
                        "alerting.template-form.new-template-name-placeholder-give-your-template-group-a-name",
                        "Give your template group a name"
                      ),
                      width: 42,
                      autoFocus: true,
                      id: "new-template-name"
                    }
                  )
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Spacer__WEBPACK_IMPORTED_MODULE_32__.Spacer, {}),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.Stack, { children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Button, { onClick: () => formRef.current?.requestSubmit(), variant: "primary", disabled: isSubmitting, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.Trans, { i18nKey: "common.save", children: "Save" }) }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.LinkButton,
                  {
                    disabled: isSubmitting,
                    href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_29__.makeAMLink)("alerting/notifications", alertmanager, {
                      tab: app_features_alerting_unified_components_contact_points_ContactPoints__WEBPACK_IMPORTED_MODULE_26__.ActiveTab.NotificationTemplates
                    }),
                    variant: "secondary",
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.Trans, { i18nKey: "common.cancel", children: "Cancel" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { ...rowSplitter.containerProps, className: styles.contentContainer, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ...rowSplitter.primaryProps, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { ...columnSplitter.containerProps, className: styles.contentField, children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ...columnSplitter.primaryProps, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.flexColumn, styles.containerWithBorderAndRadius, styles.minEditorSize), children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _EditorColumnHeader__WEBPACK_IMPORTED_MODULE_30__.EditorColumnHeader,
                    {
                      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.t)("alerting.template-form.label-template-group", "Template group"),
                      actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
                        isGrafanaAlertManager && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _grafana_ui__WEBPACK_IMPORTED_MODULE_22__.Dropdown,
                          {
                            overlay: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Menu, { children: [
                              _TemplateDataExamples__WEBPACK_IMPORTED_MODULE_36__.GlobalTemplateDataExamples.map((item, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Menu.Item,
                                {
                                  label: item.description,
                                  onClick: () => appendExample(item.example)
                                },
                                index
                              )),
                              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Menu.Divider, {}),
                              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Menu.Item,
                                {
                                  label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.t)(
                                    "alerting.template-form.label-examples-documentation",
                                    "Examples documentation"
                                  ),
                                  url: "https://grafana.com/docs/grafana/latest/alerting/configure-notifications/template-notifications/examples/",
                                  target: "_blank",
                                  icon: "external-link-alt"
                                }
                              )
                            ] }),
                            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Button, { variant: "secondary", size: "sm", icon: "angle-down", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.Trans, { i18nKey: "alerting.templates.editor.add-example", children: "Add example" }) })
                          }
                        ),
                        isGrafanaAlertManager && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _enterprise_components_AI_AIGenTemplateButton_addAITemplateButton__WEBPACK_IMPORTED_MODULE_27__.AITemplateButtonComponent,
                          {
                            onTemplateGenerated: handleTemplateGenerated,
                            disabled: isProvisioned
                          }
                        ),
                        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Button,
                          {
                            icon: "question-circle",
                            size: "sm",
                            fill: "outline",
                            variant: "secondary",
                            onClick: toggleCheatsheetOpened,
                            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.Trans, { i18nKey: "common.help", children: "Help" })
                          }
                        )
                      ] })
                    }
                  ) }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Box, { flex: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_8__["default"], { children: ({ width, height }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _TemplateEditor__WEBPACK_IMPORTED_MODULE_37__.TemplateEditor,
                    {
                      value: getValues("content"),
                      onBlur: (value) => setValue("content", value),
                      containerStyles: styles.editorContainer,
                      width,
                      height
                    }
                  ) }) })
                ] }) }),
                isGrafanaAlertManager && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ...columnSplitter.splitterProps }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ...columnSplitter.secondaryProps, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    {
                      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(
                        styles.containerWithBorderAndRadius,
                        styles.minEditorSize,
                        styles.payloadEditor,
                        styles.flexFull
                      ),
                      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _PayloadEditor__WEBPACK_IMPORTED_MODULE_34__.PayloadEditor,
                        {
                          payload,
                          defaultPayload: defaultPayloadString,
                          setPayload,
                          setPayloadFormatError,
                          payloadFormatError
                        }
                      )
                    }
                  ) })
                ] })
              ] }) }),
              isGrafanaAlertManager && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { ...rowSplitter.secondaryProps, children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ...rowSplitter.splitterProps }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _TemplatePreview__WEBPACK_IMPORTED_MODULE_38__.TemplatePreview,
                  {
                    payload,
                    templateName: watch("title"),
                    templateContent: watch("content"),
                    setPayloadFormatError,
                    payloadFormatError,
                    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.templatePreview, styles.minEditorSize),
                    aiGeneratedTemplate,
                    setAiGeneratedTemplate
                  }
                )
              ] })
            ] })
          ] }) })
        ]
      }
    ) }),
    cheatsheetOpened && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Drawer,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.t)("alerting.template-form.title-templating-cheat-sheet", "Templating cheat sheet"),
        onClose: toggleCheatsheetOpened,
        size: "lg",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TemplatingCheatSheet, {})
      }
    )
  ] });
};
function TemplatingBasics() {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_24__.useStyles2)(getStyles);
  const intro = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.t)(
    "alerting.templates.help.intro",
    `Notification templates use Go templating language to create notification messages.

In Grafana, a template group can define multiple notification templates using {{ define "<NAME>" }}.
These templates can then be used in contact points and within other notification templates by calling {{ template "<NAME>" }}.
For detailed information about notification templates, refer to our documentation.`
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Alert, { title: "", severity: "info", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.Stack, { direction: "column", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.Stack, { direction: "row", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { whiteSpace: "pre" }, children: intro }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.LinkButton,
        {
          href: "https://grafana.com/docs/grafana/latest/alerting/manage-notifications/template-notifications/",
          target: "_blank",
          icon: "external-link-alt",
          variant: "secondary",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.Trans, { i18nKey: "alerting.templates.editor.goto-docs", children: "Notification templates documentation" })
        }
      ) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Text, { variant: "bodySmall", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.Trans, { i18nKey: "alerting.templates.editor.auto-complete", children: "For auto-completion of common templating code, type the following keywords in the content editor:" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.code, children: Object.values(_editor_templateDataSuggestions__WEBPACK_IMPORTED_MODULE_39__.snippets).map((s) => s.label).join(", ") })
    ] })
  ] }) });
}
function TemplatingCheatSheet() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.Stack, { direction: "column", gap: 1, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TemplatingBasics, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TemplateDataDocs__WEBPACK_IMPORTED_MODULE_35__.TemplateDataDocs, {})
  ] });
}
const getStyles = (theme) => {
  const narrowScreenQuery = theme.breakpoints.down("md");
  return {
    flexFull: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flex: 1
    }),
    minEditorSize: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      minHeight: 300,
      minWidth: 300
    }),
    payloadEditor: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      minHeight: 0
    }),
    containerWithBorderAndRadius: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      borderRadius: theme.shape.radius.default,
      border: `1px solid ${theme.colors.border.medium}`
    }),
    flexColumn: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flex: 1,
      flexDirection: "column"
    }),
    form: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "template-form",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }),
    fieldset: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "template-fieldset",
      flex: 1,
      display: "flex",
      flexDirection: "column"
    }),
    label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      margin: 0
    }),
    contentContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flex: 1,
      display: "flex",
      flexDirection: "row"
    }),
    contentField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "column",
      flex: 1,
      marginBottom: 0
    }),
    templatePreview: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flex: 1,
      display: "flex"
    }),
    templatePayload: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flex: 1
    }),
    editorContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "fit-content",
      border: "none"
    }),
    payloadCollapseButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      backgroundColor: theme.colors.info.transparent,
      margin: 0,
      [narrowScreenQuery]: {
        display: "none"
      }
    }),
    code: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.text.secondary,
      fontWeight: theme.typography.fontWeightBold
    })
  };
};
const defaultPayload = [
  {
    status: "firing",
    annotations: {
      summary: "Instance instance1 has been down for more than 5 minutes",
      description: "The instance instance1 has been unreachable for more than 5 minutes, indicating a potential service outage."
    },
    labels: {
      alertname: "InstanceDown",
      instance: "instance1",
      severity: "critical",
      service: "service1",
      environment: "production"
    },
    startsAt: (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.subDays)(/* @__PURE__ */ new Date(), 1).toISOString(),
    endsAt: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.addMinutes)(/* @__PURE__ */ new Date(), 5).toISOString(),
    fingerprint: "a5331f0d5a9d81d4",
    generatorURL: "http://grafana.com/alerting/grafana/cdeqmlhvflz40f/view"
  },
  {
    status: "resolved",
    annotations: {
      summary: "CPU usage above 90%",
      description: "The CPU usage on instance1 has exceeded 90% for an extended period, which may indicate performance issues or resource constraints."
    },
    labels: {
      alertname: "CpuUsage",
      instance: "instance1",
      severity: "warning",
      service: "service1",
      environment: "dev"
    },
    startsAt: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.subHours)(/* @__PURE__ */ new Date(), 4).toISOString(),
    endsAt: (/* @__PURE__ */ new Date()).toISOString(),
    fingerprint: "b77d941310f9d381",
    generatorURL: "http://grafana.com/alerting/grafana/oZSMdGj7z/view"
  }
];
const defaultPayloadString = JSON.stringify(defaultPayload, null, 2);


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/TemplatePreview.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplatePreview: () => (/* binding */ TemplatePreview),
/* harmony export */   getPreviewResults: () => (/* binding */ getPreviewResults)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _enterprise_components_AI_addAIFeedbackButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/enterprise-components/AI/addAIFeedbackButton.tsx");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _EditorColumnHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/EditorColumnHeader.tsx");
/* harmony import */ var _usePreviewTemplate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/usePreviewTemplate.ts");











function TemplatePreview({
  payload,
  templateName,
  templateContent,
  payloadFormatError,
  setPayloadFormatError,
  className,
  aiGeneratedTemplate,
  setAiGeneratedTemplate
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  const {
    data,
    isLoading,
    onPreview,
    error: previewError
  } = (0,_usePreviewTemplate__WEBPACK_IMPORTED_MODULE_13__.usePreviewTemplate)(templateContent, templateName, payload, setPayloadFormatError);
  const previewToRender = getPreviewResults(previewError, payloadFormatError, data);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.container, className), children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _EditorColumnHeader__WEBPACK_IMPORTED_MODULE_12__.EditorColumnHeader,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.template-preview.label-preview", "Preview"),
        actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
          {
            disabled: isLoading,
            icon: "sync",
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.template-preview.aria-label-refresh-preview", "Refresh preview"),
            onClick: () => {
              onPreview();
              setAiGeneratedTemplate?.(false);
            },
            size: "sm",
            variant: "secondary",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.template-preview.refresh", children: "Refresh" })
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.viewer.feedbackContainer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_enterprise_components_AI_addAIFeedbackButton__WEBPACK_IMPORTED_MODULE_10__.AIFeedbackButtonComponent, { origin: "template", shouldShowFeedbackButton: Boolean(aiGeneratedTemplate) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Box, { flex: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__["default"], { disableWidth: true, children: ({ height }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.viewerContainer({ height }), children: previewToRender }) }) })
  ] });
}
function PreviewResultViewer({ previews }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  const singleTemplate = previews.length === 1;
  const isValidJson = (text) => {
    try {
      JSON.parse(text);
      return true;
    } catch {
      return false;
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { className: styles.viewer.container, "data-testid": "template-preview", children: previews.map((preview) => {
    const language = isValidJson(preview.text) ? "json" : "plaintext";
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { className: styles.viewer.box, children: [
      singleTemplate ? null : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", { className: styles.viewer.header, children: [
        preview.name,
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.viewer.language, children: language })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.CodeEditor,
        {
          containerStyles: styles.editorContainer,
          language,
          showLineNumbers: false,
          showMiniMap: false,
          value: preview.text,
          readOnly: true,
          monacoOptions: {
            scrollBeyondLastLine: false
          }
        }
      )
    ] }, preview.name);
  }) });
}
function PreviewErrorViewer({ errors }) {
  return errors.map((error) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert, { title: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.compact)([error.name, error.kind]).join(" \u2013 "), children: error.message }, (0,lodash__WEBPACK_IMPORTED_MODULE_2__.uniqueId)("errors-list")));
}
const getStyles = (theme) => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    label: "template-preview-container",
    display: "flex",
    flexDirection: "column",
    borderRadius: theme.shape.radius.default,
    border: `1px solid ${theme.colors.border.medium}`
  }),
  editorContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "100%",
    height: "100%",
    border: "none"
  }),
  viewerContainer: ({ height }) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    height,
    overflow: "auto",
    backgroundColor: theme.colors.background.primary
  }),
  viewer: {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "column",
      height: "inherit"
    }),
    box: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "column",
      borderBottom: `1px solid ${theme.colors.border.medium}`,
      height: "inherit"
    }),
    header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      justifyContent: "space-between",
      fontSize: theme.typography.bodySmall.fontSize,
      padding: theme.spacing(1, 2),
      borderBottom: `1px solid ${theme.colors.border.medium}`,
      backgroundColor: theme.colors.background.secondary
    }),
    language: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginLeft: "auto",
      fontStyle: "italic"
    }),
    errorText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.error.text
    }),
    feedbackContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderTop: `1px solid ${theme.colors.border.medium}`,
      backgroundColor: theme.colors.background.secondary,
      minHeight: "auto"
    }),
    emptyState: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      color: theme.colors.text.secondary,
      fontSize: theme.typography.bodySmall.fontSize
    })
  }
});
function getPreviewResults(previewError, payloadFormatError, data) {
  const previewErrorRequest = previewError ? (0,_utils_misc__WEBPACK_IMPORTED_MODULE_11__.stringifyErrorLike)(previewError) : void 0;
  const errorToRender = payloadFormatError || previewErrorRequest;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  const previewResponseResults = data?.results ?? [];
  const previewResponseErrors = data?.errors;
  const hasContent = previewResponseResults.length > 0 || previewResponseErrors || errorToRender;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    errorToRender && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert, { severity: "error", title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.get-preview-results.title-error", "Error"), children: errorToRender }),
    previewResponseErrors && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PreviewErrorViewer, { errors: previewResponseErrors }),
    previewResponseResults.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PreviewResultViewer, { previews: previewResponseResults }),
    !hasContent && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.viewer.emptyState, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.template-preview.empty-state", children: "Add template content to see preview" }) })
  ] });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/TemplatesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplatesTable: () => (/* binding */ TemplatesTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/utils/logging.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_features_alerting_unified_components_common_TextVariants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/common/TextVariants.tsx");
/* harmony import */ var app_features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _components_Authorize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var _styles_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/styles/table.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var _Provisioning__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/Provisioning.tsx");
/* harmony import */ var _contact_points_useNotificationTemplates__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/useNotificationTemplates.ts");
/* harmony import */ var _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var _TemplateEditor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplateEditor.tsx");



















const TemplatesTable = ({ alertManagerName, templates }) => {
  const appNotification = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_8__.useAppNotification)();
  const [deleteTemplate] = (0,_contact_points_useNotificationTemplates__WEBPACK_IMPORTED_MODULE_18__.useDeleteNotificationTemplate)({ alertmanager: alertManagerName });
  const tableStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(_styles_table__WEBPACK_IMPORTED_MODULE_13__.getAlertTableStyles);
  const [templateToDelete, setTemplateToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const onDeleteTemplate = async () => {
    if (templateToDelete) {
      try {
        await deleteTemplate.execute({ uid: templateToDelete.uid });
        appNotification.success("Template deleted", `Template ${templateToDelete.title} has been deleted`);
      } catch (error) {
        appNotification.error("Error deleting template", `Error deleting template ${templateToDelete.title}`);
        const loggableError = error instanceof Error ? error : new Error((0,_utils_misc__WEBPACK_IMPORTED_MODULE_14__.stringifyErrorLike)(error));
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.logError)(loggableError);
      }
    }
    setTemplateToDelete(void 0);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: tableStyles.table, "data-testid": "templates-table", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("colgroup", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("col", { className: tableStyles.colExpand }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("col", {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("col", {})
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.templates-table.template-group", children: "Template group" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _components_Authorize__WEBPACK_IMPORTED_MODULE_11__.Authorize,
          {
            actions: [
              _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__.AlertmanagerAction.CreateNotificationTemplate,
              _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__.AlertmanagerAction.UpdateNotificationTemplate,
              _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__.AlertmanagerAction.DeleteNotificationTemplate
            ],
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.templates-table.actions", children: "Actions" }) })
          }
        )
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", { children: [
        !templates.length && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { className: tableStyles.evenRow, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { colSpan: 3, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.templates-table.no-templates-defined", children: "No templates defined." }) }) }),
        templates.map((notificationTemplate, idx) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          TemplateRow,
          {
            notificationTemplate,
            idx,
            alertManagerName,
            onDeleteClick: setTemplateToDelete
          },
          notificationTemplate.uid
        ))
      ] })
    ] }),
    !!templateToDelete && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ConfirmModal,
      {
        isOpen: true,
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.templates-table.title-delete-template-group", "Delete template group"),
        body: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "alerting.templates-table.body-delete-template-group",
          'Are you sure you want to delete template group "{{template}}"?',
          { template: templateToDelete.title }
        ),
        confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.templates-table.confirmText-yes-delete", "Yes, delete"),
        onConfirm: onDeleteTemplate,
        onDismiss: () => setTemplateToDelete(void 0)
      }
    )
  ] });
};
function TemplateRow({ notificationTemplate, idx, alertManagerName, onDeleteClick }) {
  const tableStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(_styles_table__WEBPACK_IMPORTED_MODULE_13__.getAlertTableStyles);
  const isGrafanaAlertmanager = alertManagerName === app_features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_10__.GRAFANA_RULES_SOURCE_NAME;
  const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const { isProvisioned } = (0,_contact_points_useNotificationTemplates__WEBPACK_IMPORTED_MODULE_18__.useNotificationTemplateMetadata)(notificationTemplate);
  const { uid, title: name, content: template, missing } = notificationTemplate;
  const misconfiguredBadgeText = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.templates.misconfigured-badge-text", "Misconfigured");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { className: idx % 2 === 0 ? tableStyles.evenRow : void 0, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CollapseToggle__WEBPACK_IMPORTED_MODULE_15__.CollapseToggle, { isCollapsed: !isExpanded, onToggle: () => setIsExpanded(!isExpanded) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { children: [
        name,
        " ",
        isProvisioned && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Provisioning__WEBPACK_IMPORTED_MODULE_17__.ProvisioningBadge, {}),
        " ",
        missing && !isGrafanaAlertmanager && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip,
          {
            content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.templates.misconfigured-warning", children: "This template is misconfigured." }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.templates.misconfigured-warning-details", children: [
                "Templates must be defined in both the",
                " ",
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_alerting_unified_components_common_TextVariants__WEBPACK_IMPORTED_MODULE_9__.CodeText, { content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.template-row.content-templatefiles", "template_files") }),
                " and",
                " ",
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_alerting_unified_components_common_TextVariants__WEBPACK_IMPORTED_MODULE_9__.CodeText, { content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.template-row.content-templates", "templates") }),
                " sections of your alertmanager configuration."
              ] })
            ] }),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Badge, { text: misconfiguredBadgeText, color: "orange" }) })
          }
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { className: tableStyles.actionsCell, children: [
        isProvisioned && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_19__.ActionIcon,
          {
            to: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_14__.makeAMLink)(`/alerting/notifications/templates/${encodeURIComponent(uid)}/edit`, alertManagerName),
            tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.template-row.tooltip-view-template", "view template"),
            icon: "file-alt"
          }
        ),
        !isProvisioned && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_11__.Authorize, { actions: [_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__.AlertmanagerAction.UpdateNotificationTemplate], children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_19__.ActionIcon,
          {
            to: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_14__.makeAMLink)(`/alerting/notifications/templates/${encodeURIComponent(uid)}/edit`, alertManagerName),
            tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.template-row.tooltip-edit-template-group", "Edit template group"),
            icon: "pen"
          }
        ) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_11__.Authorize, { actions: [_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__.AlertmanagerAction.CreateNotificationTemplate], children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_19__.ActionIcon,
          {
            to: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_14__.makeAMLink)(
              `/alerting/notifications/templates/${encodeURIComponent(uid)}/duplicate`,
              alertManagerName
            ),
            tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.template-row.tooltip-copy-template-group", "Copy template group"),
            icon: "copy"
          }
        ) }),
        !isProvisioned && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_11__.Authorize, { actions: [_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__.AlertmanagerAction.DeleteNotificationTemplate], children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_19__.ActionIcon,
          {
            onClick: () => onDeleteClick(notificationTemplate),
            tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.template-row.tooltip-delete-template-group", "Delete template group"),
            icon: "trash-alt"
          }
        ) })
      ] })
    ] }),
    isExpanded && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { className: idx % 2 === 0 ? tableStyles.evenRow : void 0, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { colSpan: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DetailsField__WEBPACK_IMPORTED_MODULE_16__.DetailsField, { label: "", horizontal: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _TemplateEditor__WEBPACK_IMPORTED_MODULE_20__.TemplateEditor,
        {
          width: "auto",
          height: "auto",
          autoHeight: true,
          value: template,
          showLineNumbers: false,
          monacoOptions: {
            readOnly: true,
            scrollBeyondLastLine: false
          }
        }
      ) }) })
    ] })
  ] }, uid);
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/editor/alertManagerSuggestions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAlertManagerSuggestions: () => (/* binding */ getAlertManagerSuggestions),
/* harmony export */   getGomplateSuggestions: () => (/* binding */ getGomplateSuggestions)
/* harmony export */ });
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/editor/language.ts");


function getAlertManagerSuggestions(monaco) {
  const kind = monaco.languages.CompletionItemKind.Function;
  return [
    {
      label: _language__WEBPACK_IMPORTED_MODULE_0__.AlertmanagerTemplateFunction.toUpper,
      detail: "function(s string)",
      kind
    },
    {
      label: _language__WEBPACK_IMPORTED_MODULE_0__.AlertmanagerTemplateFunction.toLower,
      detail: "function(s string)",
      kind
    },
    {
      label: _language__WEBPACK_IMPORTED_MODULE_0__.AlertmanagerTemplateFunction.title,
      documentation: "Capitalizes the first letter of each word",
      detail: "function(s string)",
      kind
    },
    {
      label: _language__WEBPACK_IMPORTED_MODULE_0__.AlertmanagerTemplateFunction.join,
      documentation: { value: "Joins an array of strings using the separator provided." },
      detail: "function(separator string, s []string)",
      kind
    },
    {
      label: _language__WEBPACK_IMPORTED_MODULE_0__.AlertmanagerTemplateFunction.match,
      detail: "function",
      kind
    },
    {
      label: _language__WEBPACK_IMPORTED_MODULE_0__.AlertmanagerTemplateFunction.safeHtml,
      detail: "function(pattern, repl, text)",
      kind
    },
    {
      label: _language__WEBPACK_IMPORTED_MODULE_0__.AlertmanagerTemplateFunction.reReplaceAll,
      detail: "function(pattern, repl, text)",
      kind
    },
    {
      label: _language__WEBPACK_IMPORTED_MODULE_0__.AlertmanagerTemplateFunction.stringSlice,
      detail: "function(s ...string)",
      kind
    }
  ];
}
function getGomplateSuggestions(monaco) {
  const kind = monaco.languages.CompletionItemKind.Function;
  return Object.values(_language__WEBPACK_IMPORTED_MODULE_0__.GomplateFunctions).flatMap(
    (functionList) => functionList.map((func) => ({
      label: func.keyword,
      detail: func.usage,
      documentation: `${func.definition}

${func.example}`,
      kind
    }))
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/editor/autocomplete.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompletionProvider: () => (/* binding */ CompletionProvider),
/* harmony export */   registerGoTemplateAutocomplete: () => (/* binding */ registerGoTemplateAutocomplete)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _alertManagerSuggestions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/editor/alertManagerSuggestions.ts");
/* harmony import */ var _templateDataSuggestions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/editor/templateDataSuggestions.ts");




function registerGoTemplateAutocomplete(monaco) {
  const goTemplateAutocompleteProvider = {
    triggerCharacters: ["."],
    provideCompletionItems(model, position, context) {
      const word = model.getWordUntilPosition(position);
      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn
      };
      const completionProvider = new CompletionProvider(monaco, range);
      const insideExpression = isInsideGoExpression(model, position);
      if (!insideExpression) {
        return completionProvider.getSnippetsSuggestions();
      }
      if (context.triggerKind === monaco.languages.CompletionTriggerKind.Invoke && !context.triggerCharacter) {
        return completionProvider.getFunctionsSuggestions();
      }
      const wordBeforeDot = model.getWordUntilPosition({
        lineNumber: position.lineNumber,
        column: position.column - 1
      });
      return completionProvider.getTemplateDataSuggestions(wordBeforeDot.word);
    }
  };
  return monaco.languages.registerCompletionItemProvider("go-template", goTemplateAutocompleteProvider);
}
function isInsideGoExpression(model, position) {
  const goSyntaxRegex = "\\{\\{(?:.|\\n)+?\\}\\}";
  const matches = model.findMatches(goSyntaxRegex, model.getFullModelRange(), true, false, null, false);
  return matches.some(
    (match) => match.range.containsPosition({
      lineNumber: position.lineNumber,
      column: position.column + 1
      // Stricter check to avoid matching on the closing bracket.
    })
  );
}
class CompletionProvider {
  constructor(monaco, range) {
    this.monaco = monaco;
    this.range = range;
    this.getSnippetsSuggestions = () => {
      return this.getCompletionsFromDefinitions((0,_templateDataSuggestions__WEBPACK_IMPORTED_MODULE_2__.getSnippetsSuggestions)(this.monaco));
    };
    this.getFunctionsSuggestions = () => {
      return this.getCompletionsFromDefinitions(
        (0,_alertManagerSuggestions__WEBPACK_IMPORTED_MODULE_1__.getAlertManagerSuggestions)(this.monaco),
        (0,_alertManagerSuggestions__WEBPACK_IMPORTED_MODULE_1__.getGomplateSuggestions)(this.monaco)
      );
    };
    this.getTemplateDataSuggestions = (wordContext) => {
      switch (wordContext) {
        case "":
          return this.getCompletionsFromDefinitions((0,_templateDataSuggestions__WEBPACK_IMPORTED_MODULE_2__.getGlobalSuggestions)(this.monaco), (0,_templateDataSuggestions__WEBPACK_IMPORTED_MODULE_2__.getAlertSuggestions)(this.monaco));
        case "Alerts":
          return this.getCompletionsFromDefinitions((0,_templateDataSuggestions__WEBPACK_IMPORTED_MODULE_2__.getAlertsSuggestions)(this.monaco));
        case "GroupLabels":
        case "CommonLabels":
        case "CommonAnnotations":
        case "Labels":
        case "Annotations":
          return this.getCompletionsFromDefinitions((0,_templateDataSuggestions__WEBPACK_IMPORTED_MODULE_2__.getKeyValueSuggestions)(this.monaco));
        default:
          return { suggestions: [] };
      }
    };
    this.getCompletionsFromDefinitions = (...args) => {
      const allDefinitions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.concat)(...args);
      return {
        suggestions: allDefinitions.map((definition) => buildAutocompleteSuggestion(definition, this.range))
      };
    };
  }
}
function buildAutocompleteSuggestion({ label, detail, documentation, kind, insertText }, range) {
  const insertFallback = typeof label === "string" ? label : label.label;
  const labelObject = typeof label === "string" ? { label, description: detail } : { ...label };
  labelObject.description ??= detail;
  return {
    label: labelObject,
    kind,
    insertText: insertText ?? insertFallback,
    range,
    documentation,
    detail
  };
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/editor/definition.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GO_TEMPLATE_LANGUAGE_ID: () => (/* binding */ GO_TEMPLATE_LANGUAGE_ID),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const GO_TEMPLATE_LANGUAGE_ID = "go-template";
const goTemplateLanguageDefinition = {
  id: GO_TEMPLATE_LANGUAGE_ID,
  extensions: [],
  aliases: [],
  mimetypes: [],
  loader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./public/app/features/alerting/unified/components/receivers/editor/language.ts"))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (goTemplateLanguageDefinition);


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/editor/register.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerLanguage: () => (/* binding */ registerLanguage)
/* harmony export */ });

const registerLanguage = (monaco, language) => {
  const { id, loader } = language;
  const languages = monaco.languages.getLanguages();
  if (languages.find((l) => l.id === id)) {
    return;
  }
  monaco.languages.register({ id });
  loader().then((monarch) => {
    monaco.languages.setMonarchTokensProvider(id, monarch.language);
    monaco.languages.setLanguageConfiguration(id, monarch.conf);
  });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/editor/snippets.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alertDetailsSnippet: () => (/* binding */ alertDetailsSnippet),
/* harmony export */   alertsLoopSnippet: () => (/* binding */ alertsLoopSnippet),
/* harmony export */   annotationsLoopSnippet: () => (/* binding */ annotationsLoopSnippet),
/* harmony export */   commonAnnotationsLoopSnippet: () => (/* binding */ commonAnnotationsLoopSnippet),
/* harmony export */   commonLabelsLoopSnippet: () => (/* binding */ commonLabelsLoopSnippet),
/* harmony export */   groupLabelsLoopSnippet: () => (/* binding */ groupLabelsLoopSnippet),
/* harmony export */   jsonSnippet: () => (/* binding */ jsonSnippet),
/* harmony export */   labelsLoopSnippet: () => (/* binding */ labelsLoopSnippet)
/* harmony export */ });

const alertsLoopSnippet = `
{{ range .Alerts }}
  Status: {{ .Status }}
  Starts at: {{ .StartsAt }}
{{ end }}
`;
const alertDetailsSnippet = `
[{{.Status}}] {{ .Labels.alertname }}

Labels:
{{ range .Labels.SortedPairs }}
  {{ .Name }}: {{ .Value }}
{{ end }}

{{ if gt (len .Annotations) 0 }}
Annotations:
{{ range .Annotations.SortedPairs }}
  {{ .Name }}: {{ .Value }}
{{ end }}
{{ end }}

{{ if gt (len .SilenceURL ) 0 }}
  Silence alert: {{ .SilenceURL }}
{{ end }}
{{ if gt (len .DashboardURL ) 0 }}
  Go to dashboard: {{ .DashboardURL }}
{{ end }}
`;
const jsonSnippet = `
{{ coll.Dict
  "receiver" .Receiver
  "status" .Status
  "alerts" ( len .Alerts )
| data.ToJSONPretty " " }}
`;
const groupLabelsLoopSnippet = getKeyValueTemplate("GroupLabels.SortedPairs");
const commonLabelsLoopSnippet = getKeyValueTemplate("CommonLabels.SortedPairs");
const commonAnnotationsLoopSnippet = getKeyValueTemplate("CommonAnnotations.SortedPairs");
const labelsLoopSnippet = getKeyValueTemplate("Labels.SortedPairs");
const annotationsLoopSnippet = getKeyValueTemplate("Annotations.SortedPairs");
function getKeyValueTemplate(arrayName) {
  return `
{{ range .${arrayName} }}
  {{ .Name }} = {{ .Value }}
{{ end }}`;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/editor/templateDataSuggestions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAlertSuggestions: () => (/* binding */ getAlertSuggestions),
/* harmony export */   getAlertsSuggestions: () => (/* binding */ getAlertsSuggestions),
/* harmony export */   getGlobalSuggestions: () => (/* binding */ getGlobalSuggestions),
/* harmony export */   getKeyValueSuggestions: () => (/* binding */ getKeyValueSuggestions),
/* harmony export */   getSnippetsSuggestions: () => (/* binding */ getSnippetsSuggestions),
/* harmony export */   snippets: () => (/* binding */ snippets)
/* harmony export */ });
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _snippets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/editor/snippets.ts");



function getGlobalSuggestions(monaco) {
  const kind = monaco.languages.CompletionItemKind.Field;
  return [
    {
      label: "Alerts",
      kind,
      detail: "Alert[]",
      documentation: {
        value: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
          "alerting.get-global-suggestions.value.an-array-containing-all-alerts",
          "An Array containing all alerts"
        )
      }
    },
    { label: "Receiver", kind, detail: "string" },
    { label: "Status", kind, detail: "string" },
    { label: "GroupLabels", kind, detail: "[]KeyValue" },
    { label: "CommonLabels", kind, detail: "[]KeyValue" },
    { label: "CommonAnnotations", kind, detail: "[]KeyValue" },
    { label: "ExternalURL", kind, detail: "string" },
    { label: "GroupKey", kind, detail: "string" },
    { label: "TruncatedAlerts", kind, detail: "integer" }
  ];
}
function getAlertSuggestions(monaco) {
  const kind = monaco.languages.CompletionItemKind.Field;
  return [
    {
      label: { label: "Status", detail: "(Alert)", description: "string" },
      kind,
      detail: "string",
      documentation: {
        value: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
          "alerting.get-alert-suggestions.value.status-alert-firing-resolved",
          "Status of the alert. It can be `firing` or `resolved`"
        )
      }
    },
    {
      label: { label: "Labels", detail: "(Alert)" },
      kind,
      detail: "[]KeyValue",
      documentation: {
        value: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
          "alerting.get-alert-suggestions.value.labels-attached-alert",
          "A set of labels attached to the alert."
        )
      }
    },
    {
      label: { label: "Annotations", detail: "(Alert)" },
      kind,
      detail: "[]KeyValue",
      documentation: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
        "alerting.get-alert-suggestions.documentation.annotations-attached-alert",
        "A set of annotations attached to the alert."
      )
    },
    {
      label: { label: "StartsAt", detail: "(Alert)" },
      kind,
      detail: "time.Time",
      documentation: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
        "alerting.get-alert-suggestions.documentation.time-the-alert-started-firing",
        "Time the alert started firing."
      )
    },
    {
      label: { label: "EndsAt", detail: "(Alert)" },
      kind,
      detail: "time.Time",
      documentation: "Only set if the end time of an alert is known. Otherwise set to a configurable timeout period from the time since the last alert was received."
    },
    {
      label: { label: "GeneratorURL", detail: "(Alert)" },
      kind,
      detail: "string",
      documentation: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
        "alerting.get-alert-suggestions.documentation.grafana-external-alertmanager",
        "Back link to Grafana or external Alertmanager."
      )
    },
    {
      label: { label: "SilenceURL", detail: "(Alert)" },
      kind,
      detail: "string",
      documentation: "Link to Grafana silence for with labels for this alert pre-filled. Only for Grafana managed alerts."
    },
    {
      label: { label: "DashboardURL", detail: "(Alert)" },
      kind,
      detail: "string",
      documentation: "Link to Grafana dashboard, if alert rule belongs to one. Only for Grafana managed alerts."
    },
    {
      label: { label: "PanelURL", detail: "(Alert)" },
      kind,
      detail: "string",
      documentation: "Link to Grafana dashboard panel, if alert rule belongs to one. Only for Grafana managed alerts."
    },
    {
      label: { label: "Fingerprint", detail: "(Alert)" },
      kind,
      detail: "string",
      documentation: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
        "alerting.get-alert-suggestions.documentation.fingerprint-identify-alert",
        "Fingerprint that can be used to identify the alert."
      )
    },
    {
      label: { label: "ValueString", detail: "(Alert)" },
      kind,
      detail: "string",
      documentation: "String that contains labels and values of each reduced expression in the alert."
    },
    {
      label: { label: "OrgID", detail: "(Alert)" },
      kind,
      detail: "integer",
      documentation: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
        "alerting.get-alert-suggestions.documentation.organization-alert",
        "The ID of the organization that owns the alert."
      )
    }
  ];
}
function getAlertsSuggestions(monaco) {
  const kind = monaco.languages.CompletionItemKind.Field;
  return [
    { label: "Firing", kind, detail: "Alert[]" },
    { label: "Resolved", kind, detail: "Alert[]" }
  ];
}
function getKeyValueSuggestions(monaco) {
  const kind = monaco.languages.CompletionItemKind.Field;
  return [
    { label: "SortedPairs", kind, detail: "[]KeyValue" },
    { label: "Names", kind, detail: "[]string" },
    { label: "Values", kind, detail: "[]string" },
    {
      label: "Remove",
      detail: "KeyValue[] function(keys []string)",
      kind: monaco.languages.CompletionItemKind.Method
    }
  ];
}
const snippets = {
  alerts: {
    label: "alertsloop",
    description: "Renders a loop through alerts",
    snippet: _snippets__WEBPACK_IMPORTED_MODULE_1__.alertsLoopSnippet
  },
  alertDetails: {
    label: "alertdetails",
    description: "Renders all information available about the alert",
    snippet: _snippets__WEBPACK_IMPORTED_MODULE_1__.alertDetailsSnippet
  },
  groupLabels: {
    label: "grouplabelsloop",
    description: "Renders a loop through group labels",
    snippet: _snippets__WEBPACK_IMPORTED_MODULE_1__.groupLabelsLoopSnippet
  },
  commonLabels: {
    label: "commonlabelsloop",
    description: "Renders a loop through common labels",
    snippet: _snippets__WEBPACK_IMPORTED_MODULE_1__.commonLabelsLoopSnippet
  },
  commonAnnotations: {
    label: "commonannotationsloop",
    description: "Renders a loop through common annotations",
    snippet: _snippets__WEBPACK_IMPORTED_MODULE_1__.commonAnnotationsLoopSnippet
  },
  labels: {
    label: "labelsloop",
    description: "Renders a loop through labels",
    snippet: _snippets__WEBPACK_IMPORTED_MODULE_1__.labelsLoopSnippet
  },
  annotations: {
    label: "annotationsloop",
    description: "Renders a loop through annotations",
    snippet: _snippets__WEBPACK_IMPORTED_MODULE_1__.annotationsLoopSnippet
  },
  json: {
    label: "json",
    description: "Renders a JSON object",
    snippet: _snippets__WEBPACK_IMPORTED_MODULE_1__.jsonSnippet
  }
};
function getSnippetsSuggestions(monaco) {
  const snippetKind = monaco.languages.CompletionItemKind.Snippet;
  const snippetInsertRule = monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet;
  const { alerts, alertDetails, groupLabels, commonLabels, commonAnnotations, labels, annotations, json } = snippets;
  return [
    {
      label: alerts.label,
      documentation: alerts.description,
      kind: snippetKind,
      insertText: alerts.snippet,
      insertTextRules: snippetInsertRule
    },
    {
      label: {
        label: alertDetails.label,
        detail: "(Alert)"
      },
      documentation: alertDetails.description,
      kind: snippetKind,
      insertText: alertDetails.snippet,
      insertTextRules: snippetInsertRule
    },
    {
      label: groupLabels.label,
      documentation: groupLabels.description,
      kind: snippetKind,
      insertText: groupLabels.snippet,
      insertTextRules: snippetInsertRule
    },
    {
      label: commonLabels.label,
      documentation: commonLabels.description,
      kind: snippetKind,
      insertText: commonLabels.snippet,
      insertTextRules: snippetInsertRule
    },
    {
      label: commonAnnotations.label,
      documentation: commonAnnotations.description,
      kind: snippetKind,
      insertText: commonAnnotations.snippet,
      insertTextRules: snippetInsertRule
    },
    {
      label: { label: labels.label, detail: "(Alert)" },
      documentation: labels.description,
      kind: snippetKind,
      insertText: labels.snippet,
      insertTextRules: snippetInsertRule
    },
    {
      label: { label: annotations.label, detail: "(Alert)" },
      documentation: annotations.description,
      kind: snippetKind,
      insertText: annotations.snippet,
      insertTextRules: snippetInsertRule
    },
    {
      label: json.label,
      documentation: json.description,
      kind: snippetKind,
      insertText: json.snippet,
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.KeepWhitespace
    }
  ];
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/GenerateAlertDataModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenerateAlertDataModal: () => (/* binding */ GenerateAlertDataModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/date-fns/addDays.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/date-fns/subDays.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _rule_editor_AnnotationsStep__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AnnotationsStep.tsx");
/* harmony import */ var _rule_editor_labels_LabelsField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/labels/LabelsField.tsx");











const defaultValues = {
  annotations: [{ key: "", value: "" }],
  labels: [{ key: "", value: "" }],
  status: "firing"
};
const GenerateAlertDataModal = ({ isOpen, onDismiss, onAccept }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.useStyles2)(getStyles);
  const [alerts, setAlerts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
  const formMethods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({ defaultValues, mode: "onBlur" });
  const annotations = formMethods.watch("annotations");
  const labels = formMethods.watch("labels");
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("firing");
  const onAdd = () => {
    const alert = {
      annotations: annotations.filter(({ key, value }) => !!key && !!value).reduce((acc, { key, value }) => {
        return { ...acc, [key]: value };
      }, {}),
      labels: labels.filter(({ key, value }) => !!key && !!value).reduce((acc, { key, value }) => {
        return { ...acc, [key]: value };
      }, {}),
      startsAt: "2023-04-01T00:00:00Z",
      endsAt: status === "firing" ? (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.addDays)(/* @__PURE__ */ new Date(), 1).toISOString() : (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.subDays)(/* @__PURE__ */ new Date(), 1).toISOString(),
      status,
      fingerprint: (0,lodash__WEBPACK_IMPORTED_MODULE_4__.uniqueId)("fingerprint_")
    };
    setAlerts((alerts2) => [...alerts2, alert]);
    formMethods.reset();
  };
  const onSubmit = () => {
    onAccept(alerts);
    setAlerts([]);
    formMethods.reset();
    setStatus("firing");
  };
  const labelsOrAnnotationsAdded = () => {
    const someLabels = labels.some((lb) => lb.key !== "" && lb.value !== "");
    const someAnnotations = annotations.some((ann) => ann.key !== "" && ann.value !== "");
    return someLabels || someAnnotations;
  };
  const alertOptions = [
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("alerting.generate-alert-data-modal.alert-options.label.firing", "Firing"),
      value: "firing"
    },
    { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("alerting.generate-alert-data-modal.alert-options.label.resolved", "Resolved"), value: "resolved" }
  ];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Modal,
    {
      onDismiss,
      isOpen,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("alerting.generate-alert-data-modal.title-add-custom-alerts", "Add custom alerts"),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_6__.FormProvider, { ...formMethods, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        "form",
        {
          onSubmit: (e) => {
            e.preventDefault();
            e.stopPropagation();
            formMethods.reset();
            setStatus("firing");
          },
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Card, { noMargin: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "column", gap: 1, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.section, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rule_editor_AnnotationsStep__WEBPACK_IMPORTED_MODULE_14__["default"], {}) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.section, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rule_editor_labels_LabelsField__WEBPACK_IMPORTED_MODULE_15__["default"], {}) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.flexWrapper, children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.RadioButtonGroup, { value: status, options: alertOptions, onChange: (value) => setStatus(value) }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button,
                  {
                    onClick: onAdd,
                    className: styles.onAddButton,
                    icon: "plus-circle",
                    type: "button",
                    variant: "secondary",
                    disabled: !labelsOrAnnotationsAdded(),
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.generate-alert-data-modal.add-alert-data", children: "Add alert data" })
                  }
                )
              ] })
            ] }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.onSubmitWrapper }),
            alerts.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "column", gap: 1, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.generate-alert-data-modal.review-alert-payload", children: [
                " ",
                "Review alert data to add to the payload:"
              ] }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { className: styles.result, "data-testid": "payloadJSON", children: JSON.stringify(alerts, null, 2) })
            ] }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.onSubmitWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Modal.ButtonRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button, { onClick: onSubmit, disabled: alerts.length === 0, className: styles.onSubmitButton, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.generate-alert-data-modal.add-alert-data-to-payload", children: "Add alert data to payload" }) }) }) })
          ]
        }
      ) })
    }
  );
};
const getStyles = (theme) => ({
  section: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: theme.spacing(2)
  }),
  onAddButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    flex: "none",
    width: "fit-content",
    paddingRight: theme.spacing(1),
    marginLeft: "auto"
  }),
  flexWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }),
  onSubmitWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-end"
  }),
  onSubmitButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginLeft: theme.spacing(2)
  }),
  result: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "570px",
    height: "363px"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTemplateName: () => (/* binding */ getTemplateName),
/* harmony export */   getUseTemplateText: () => (/* binding */ getUseTemplateText),
/* harmony export */   matchesOnlyOneTemplate: () => (/* binding */ matchesOnlyOneTemplate),
/* harmony export */   parseTemplates: () => (/* binding */ parseTemplates)
/* harmony export */ });

function parseTemplates(templatesString) {
  const templates = {};
  const stack = [];
  const regex = /{{-?\s*(define|end|if|range|else|with|template|block)\b(.*?)-?}}/gs;
  let match;
  let currentIndex = 0;
  while ((match = regex.exec(templatesString)) !== null) {
    const [, keyword, middleContent] = match;
    currentIndex = match.index;
    if (keyword === "define") {
      const nameMatch = middleContent?.match(/"([^"]+)"/);
      if (nameMatch) {
        stack.push({ type: "define", startIndex: currentIndex, name: nameMatch[1] });
      }
    } else if (keyword === "end") {
      let top = stack.pop();
      while (top && top.type !== "define" && top.type !== "if" && top.type !== "range" && top.type !== "with" && top.type !== "block") {
        top = stack.pop();
      }
      if (top) {
        const endIndex = regex.lastIndex;
        if (top.type === "define" && !top.name?.startsWith("__")) {
          templates[top.name] = {
            name: top.name,
            content: templatesString.slice(top.startIndex, endIndex)
          };
        }
      }
    } else if (keyword === "if" || keyword === "range" || keyword === "else" || keyword === "with" || keyword === "block") {
      stack.push({ type: keyword, startIndex: currentIndex });
    }
  }
  for (const template of Object.values(templates)) {
    const regex2 = /{{ template "([^"]+)" }}/g;
    let match2;
    while ((match2 = regex2.exec(template.content)) !== null) {
      const name = match2[1];
      if (templates[name]?.content) {
        template.content += "\n" + templates[name]?.content;
        delete templates[name];
      }
    }
  }
  return Object.values(templates);
}
function getUseTemplateText(templateName) {
  return `{{ template "${templateName}" . }}`;
}
function getTemplateName(useTemplateText) {
  const match = useTemplateText.match(/\{\{\s*template\s*"(.*)"\s*\.\s*\}\}/);
  return match ? match[1] : "";
}
function matchesOnlyOneTemplate(fieldValue) {
  const pattern = /\{\{\s*template\s*".*?"\s*\.\s*\}\}/g;
  const matches = fieldValue.match(pattern);
  if (matches?.length !== 1) {
    return false;
  }
  const parts = fieldValue.split(pattern);
  for (const part of parts) {
    if (part.trim() !== "") {
      return false;
    }
  }
  return true;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/usePreviewTemplate.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePreviewTemplate: () => (/* binding */ usePreviewTemplate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_templateApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/api/templateApi.ts");



function usePreviewTemplate(templateContent, templateName, payload, setPayloadFormatError) {
  const [trigger, { data, error, isLoading }] = (0,_api_templateApi__WEBPACK_IMPORTED_MODULE_1__.usePreviewTemplateMutation)();
  const onPreview = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    try {
      const alertList = JSON.parse(payload);
      JSON.stringify([...alertList]);
      trigger({ template: templateContent, alerts: alertList, name: templateName });
      setPayloadFormatError(null);
    } catch (e) {
      setPayloadFormatError(e instanceof Error ? e.message : "Invalid JSON.");
    }
  }, [templateContent, templateName, payload, setPayloadFormatError, trigger]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => onPreview(), [onPreview]);
  return { data, error, isLoading, onPreview };
}


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

/***/ "./public/app/features/alerting/unified/components/rules/state-history/common.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractCommonLabels: () => (/* binding */ extractCommonLabels),
/* harmony export */   historyDataFrameToLogRecords: () => (/* binding */ historyDataFrameToLogRecords),
/* harmony export */   isLine: () => (/* binding */ isLine),
/* harmony export */   isNumbers: () => (/* binding */ isNumbers),
/* harmony export */   omitLabels: () => (/* binding */ omitLabels)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


function omitLabels(labels, common) {
  return labels.filter((label) => {
    return !common.find((commonLabel) => JSON.stringify(commonLabel) === JSON.stringify(label));
  });
}
function extractCommonLabels(labels) {
  const flatLabels = labels.flatMap((label) => label);
  const commonLabels = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqBy)(
    flatLabels.filter((label) => {
      const count = flatLabels.filter((l) => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(label, l)).length;
      return count === Object.keys(labels).length;
    }),
    (label) => JSON.stringify(label)
  );
  return commonLabels;
}
function historyDataFrameToLogRecords(stateHistory) {
  if (!stateHistory?.data || !stateHistory.data.values || !Array.isArray(stateHistory.data.values)) {
    return [];
  }
  const [tsValues, lines] = stateHistory.data.values;
  if (!Array.isArray(tsValues) || !Array.isArray(lines) || tsValues.length !== lines.length) {
    return [];
  }
  const timestamps = isNumbers(tsValues) ? tsValues : [];
  const logRecords = timestamps.reduce((acc, timestamp, index) => {
    const line = lines[index];
    if (!isLine(line)) {
      return acc;
    }
    acc.push({ timestamp, line });
    return acc;
  }, []);
  return logRecords;
}
function isNumbers(value) {
  return value.every((v) => typeof v === "number");
}
function isLine(value) {
  return typeof value === "object" && value !== null && "current" in value && "previous" in value;
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

/***/ "./public/app/features/alerting/unified/enterprise-components/AI/AIGenTemplateButton/addAITemplateButton.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AITemplateButtonComponent: () => (/* binding */ AITemplateButtonComponent),
/* harmony export */   addAITemplateButton: () => (/* binding */ addAITemplateButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/ErrorBoundary/ErrorBoundary.tsx");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");





let InternalAITemplateButtonComponent = null;
const AITemplateButtonComponent = (props) => {
  if (!InternalAITemplateButtonComponent) {
    return null;
  }
  const WrappedComponent = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.withErrorBoundary)(InternalAITemplateButtonComponent, {
    title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.ai.error-boundary.template-button", "AI Template Button failed to load"),
    style: "alertbox",
    errorLogger: _Analytics__WEBPACK_IMPORTED_MODULE_3__.logError
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, props);
};
function addAITemplateButton(component) {
  InternalAITemplateButtonComponent = component;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/enterprise-components/AI/addAIFeedbackButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIFeedbackButtonComponent: () => (/* binding */ AIFeedbackButtonComponent),
/* harmony export */   addAIFeedbackButton: () => (/* binding */ addAIFeedbackButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/ErrorBoundary/ErrorBoundary.tsx");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");





let InternalAIFeedbackButtonComponent = null;
const AIFeedbackButtonComponent = (props) => {
  if (!InternalAIFeedbackButtonComponent) {
    return null;
  }
  const WrappedComponent = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.withErrorBoundary)(InternalAIFeedbackButtonComponent, {
    title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.ai.error-boundary.feedback-button", "AI Feedback Button failed to load"),
    style: "alertbox",
    errorLogger: _Analytics__WEBPACK_IMPORTED_MODULE_3__.logError
  });
  const propsWithDefaults = {
    shouldShowFeedbackButton: true,
    useRouteDetection: false,
    ...props
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, propsWithDefaults);
};
function addAIFeedbackButton(component) {
  InternalAIFeedbackButtonComponent = component;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/openapi/templatesApi.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTagTypes: () => (/* binding */ addTagTypes),
/* harmony export */   generatedTemplatesApi: () => (/* binding */ injectedRtkApi)
/* harmony export */ });
/* harmony import */ var _api_alertingApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/api/alertingApi.ts");


const addTagTypes = ["TemplateGroup"];
const injectedRtkApi = _api_alertingApi__WEBPACK_IMPORTED_MODULE_0__.alertingApi.enhanceEndpoints({
  addTagTypes
}).injectEndpoints({
  endpoints: (build) => ({
    listNamespacedTemplateGroup: build.query({
      query: (queryArg) => ({
        url: `/apis/notifications.alerting.grafana.app/v0alpha1/namespaces/${queryArg["namespace"]}/templategroups`,
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
      providesTags: ["TemplateGroup"]
    }),
    createNamespacedTemplateGroup: build.mutation({
      query: (queryArg) => ({
        url: `/apis/notifications.alerting.grafana.app/v0alpha1/namespaces/${queryArg["namespace"]}/templategroups`,
        method: "POST",
        body: queryArg.comGithubGrafanaGrafanaPkgApisAlertingNotificationsV0Alpha1TemplateGroup,
        params: {
          pretty: queryArg.pretty,
          dryRun: queryArg.dryRun,
          fieldManager: queryArg.fieldManager,
          fieldValidation: queryArg.fieldValidation
        }
      }),
      invalidatesTags: ["TemplateGroup"]
    }),
    readNamespacedTemplateGroup: build.query({
      query: (queryArg) => ({
        url: `/apis/notifications.alerting.grafana.app/v0alpha1/namespaces/${queryArg["namespace"]}/templategroups/${queryArg.name}`,
        params: { pretty: queryArg.pretty }
      }),
      providesTags: ["TemplateGroup"]
    }),
    replaceNamespacedTemplateGroup: build.mutation({
      query: (queryArg) => ({
        url: `/apis/notifications.alerting.grafana.app/v0alpha1/namespaces/${queryArg["namespace"]}/templategroups/${queryArg.name}`,
        method: "PUT",
        body: queryArg.comGithubGrafanaGrafanaPkgApisAlertingNotificationsV0Alpha1TemplateGroup,
        params: {
          pretty: queryArg.pretty,
          dryRun: queryArg.dryRun,
          fieldManager: queryArg.fieldManager,
          fieldValidation: queryArg.fieldValidation
        }
      }),
      invalidatesTags: ["TemplateGroup"]
    }),
    deleteNamespacedTemplateGroup: build.mutation({
      query: (queryArg) => ({
        url: `/apis/notifications.alerting.grafana.app/v0alpha1/namespaces/${queryArg["namespace"]}/templategroups/${queryArg.name}`,
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
      invalidatesTags: ["TemplateGroup"]
    })
  }),
  overrideExisting: false
});



/***/ }),

/***/ "./public/app/features/alerting/unified/styles/table.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAlertTableStyles: () => (/* binding */ getAlertTableStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");


const getAlertTableStyles = (theme) => ({
  table: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    width: "100%",
    borderRadius: theme.shape.radius.default,
    border: `solid 1px ${theme.colors.border.weak}`,
    backgroundColor: theme.colors.background.secondary,
    overflow: "hidden",
    th: {
      padding: theme.spacing(1)
    },
    td: {
      padding: `0 ${theme.spacing(1)}`
    },
    tr: {
      height: "38px"
    }
  }),
  evenRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    backgroundColor: theme.colors.background.primary
  }),
  colExpand: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    width: "36px"
  }),
  nameCell: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    gap: theme.spacing(1)
  }),
  actionsCell: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    textAlign: "right",
    width: "1%",
    whiteSpace: "nowrap",
    "& > * + *": {
      marginLeft: theme.spacing(0.5)
    }
  })
});


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


/***/ }),

/***/ "./public/app/features/alerting/unified/utils/template-constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_TEMPLATES: () => (/* binding */ DEFAULT_TEMPLATES)
/* harmony export */ });

const DEFAULT_TEMPLATES = `{{ define "__subject" }}[{{ .Status | toUpper }}{{ if eq .Status "firing" }}:{{ .Alerts.Firing | len }}{{ if gt (.Alerts.Resolved | len) 0 }}, RESOLVED:{{ .Alerts.Resolved | len }}{{ end }}{{ end }}] {{ .GroupLabels.SortedPairs.Values | join " " }} {{ if gt (len .CommonLabels) (len .GroupLabels) }}({{ with .CommonLabels.Remove .GroupLabels.Names }}{{ .Values | join " " }}{{ end }}){{ end }}{{ end }}

{{ define "__text_values_list" }}{{ if len .Values }}{{ $first := true }}{{ range $refID, $value := .Values -}}
{{ if $first }}{{ $first = false }}{{ else }}, {{ end }}{{ $refID }}={{ $value }}{{ end -}}
{{ else }}[no value]{{ end }}{{ end }}

{{ define "__text_alert_list" }}{{ range . }}
Value: {{ template "__text_values_list" . }}
Labels:
{{ range .Labels.SortedPairs }} - {{ .Name }} = {{ .Value }}
{{ end }}Annotations:
{{ range .Annotations.SortedPairs }} - {{ .Name }} = {{ .Value }}
{{ end }}{{ if gt (len .GeneratorURL) 0 }}Source: {{ .GeneratorURL }}
{{ end }}{{ if gt (len .SilenceURL) 0 }}Silence: {{ .SilenceURL }}
{{ end }}{{ if gt (len .DashboardURL) 0 }}Dashboard: {{ .DashboardURL }}
{{ end }}{{ if gt (len .PanelURL) 0 }}Panel: {{ .PanelURL }}
{{ end }}{{ end }}{{ end }}

{{ define "default.title" }}{{ template "__subject" . }}{{ end }}

{{ define "default.message" }}{{ if gt (len .Alerts.Firing) 0 }}**Firing**
{{ template "__text_alert_list" .Alerts.Firing }}{{ if gt (len .Alerts.Resolved) 0 }}

{{ end }}{{ end }}{{ if gt (len .Alerts.Resolved) 0 }}**Resolved**
{{ template "__text_alert_list" .Alerts.Resolved }}{{ end }}{{ end }}

{{ define "__teams_text_alert_list" }}{{ range . }}
Value: {{ template "__text_values_list" . }}
Labels:
{{ range .Labels.SortedPairs }} - {{ .Name }} = {{ .Value }}
{{ end }}
Annotations:
{{ range .Annotations.SortedPairs }} - {{ .Name }} = {{ .Value }}
{{ end }}
{{ if gt (len .GeneratorURL) 0 }}Source: [{{ .GeneratorURL }}]({{ .GeneratorURL }})

{{ end }}{{ if gt (len .SilenceURL) 0 }}Silence: [{{ .SilenceURL }}]({{ .SilenceURL }})

{{ end }}{{ if gt (len .DashboardURL) 0 }}Dashboard: [{{ .DashboardURL }}]({{ .DashboardURL }})

{{ end }}{{ if gt (len .PanelURL) 0 }}Panel: [{{ .PanelURL }}]({{ .PanelURL }})

{{ end }}
{{ end }}{{ end }}

{{ define "teams.default.message" }}{{ if gt (len .Alerts.Firing) 0 }}**Firing**
{{ template "__teams_text_alert_list" .Alerts.Firing }}{{ if gt (len .Alerts.Resolved) 0 }}

{{ end }}{{ end }}{{ if gt (len .Alerts.Resolved) 0 }}**Resolved**
{{ template "__teams_text_alert_list" .Alerts.Resolved }}{{ end }}{{ end }}`;


/***/ })

}]);
//# sourceMappingURL=Templates.a56378c0488466f4fb92.js.map