"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertingSettings"],{

/***/ "./public/app/features/alerting/unified/Settings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_WithReturnButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/WithReturnButton.tsx");
/* harmony import */ var _components_settings_ConfigurationDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/settings/ConfigurationDrawer.tsx");
/* harmony import */ var _components_settings_ExternalAlertmanagers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/settings/ExternalAlertmanagers.tsx");
/* harmony import */ var _components_settings_InternalAlertmanager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/settings/InternalAlertmanager.tsx");
/* harmony import */ var _components_settings_SettingsContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/settings/SettingsContext.tsx");
/* harmony import */ var _settings_navigation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/settings/navigation.ts");
/* harmony import */ var _withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/withPageErrorBoundary.tsx");












function AlertmanagerSettingsPage() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_settings_SettingsContext__WEBPACK_IMPORTED_MODULE_10__.SettingsProvider, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertmanagerSettingsContent, {}) });
}
function AlertmanagerSettingsContent() {
  const [configurationDrawer, showConfiguration] = (0,_components_settings_ConfigurationDrawer__WEBPACK_IMPORTED_MODULE_7__.useEditConfigurationDrawer)();
  const { isLoading } = (0,_components_settings_SettingsContext__WEBPACK_IMPORTED_MODULE_10__.useSettings)();
  const { navId, pageNav } = (0,_settings_navigation__WEBPACK_IMPORTED_MODULE_11__.useSettingsPageNav)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_5__.AlertingPageWrapper,
    {
      navId,
      isLoading,
      pageNav,
      actions: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _components_WithReturnButton__WEBPACK_IMPORTED_MODULE_6__.WithReturnButton,
          {
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.settings-content.title-alerting-settings", "Alerting settings"),
            component: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, { href: "/connections/datasources/alertmanager", icon: "plus", variant: "primary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.settings-content.add-new-alertmanager", children: "Add new Alertmanager" }) })
          },
          "add-alertmanager"
        )
      ],
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "column", gap: 2, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { variant: "h5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.settings-content.builtin-alertmanager", children: "Built-in Alertmanager" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_settings_InternalAlertmanager__WEBPACK_IMPORTED_MODULE_9__["default"], { onEditConfiguration: showConfiguration }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { variant: "h5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.settings-content.other-alertmanagers", children: "Other Alertmanagers" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_settings_ExternalAlertmanagers__WEBPACK_IMPORTED_MODULE_8__.ExternalAlertmanagers, { onEditConfiguration: showConfiguration })
        ] }),
        configurationDrawer
      ]
    }
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_12__.withPageErrorBoundary)(AlertmanagerSettingsPage));


/***/ }),

/***/ "./public/app/features/alerting/unified/api/dataSourcesApi.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataSourcesApi: () => (/* binding */ dataSourcesApi)
/* harmony export */ });
/* harmony import */ var _alertingApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/api/alertingApi.ts");


const dataSourcesApi = _alertingApi__WEBPACK_IMPORTED_MODULE_0__.alertingApi.injectEndpoints({
  endpoints: (build) => ({
    getAllDataSourceSettings: build.query({
      query: () => ({ url: "api/datasources" }),
      // we'll create individual cache entries for each datasource UID
      providesTags: (result) => {
        return result ? result.map(({ uid }) => ({ type: "DataSourceSettings", id: uid })) : ["DataSourceSettings"];
      }
    }),
    getDataSourceSettingsForUID: build.query({
      query: (uid) => ({ url: `api/datasources/uid/${uid}` }),
      providesTags: (_result, _error, uid) => [{ type: "DataSourceSettings", id: uid }]
    }),
    updateDataSourceSettingsForUID: build.mutation({
      query: ({ uid, settings }) => ({
        url: `api/datasources/uid/${uid}`,
        method: "PUT",
        data: settings,
        showSuccessAlert: false
      }),
      // we need to invalidate the settings for a single Datasource because otherwise the backend will complain
      // about it already having been edited by another user – edits are tracked with a version number
      invalidatesTags: (_result, _error, args) => [{ type: "DataSourceSettings", id: args.uid }]
    })
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/settings/AlertmanagerCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertmanagerCard: () => (/* binding */ AlertmanagerCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var app_plugins_datasource_alertmanager_img_logo_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/img/logo.svg");
/* harmony import */ var _Provisioning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/Provisioning.tsx");
/* harmony import */ var _WithReturnButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/WithReturnButton.tsx");








function AlertmanagerCard({
  name,
  href,
  url,
  logo = app_plugins_datasource_alertmanager_img_logo_svg__WEBPACK_IMPORTED_MODULE_9__,
  provisioned = false,
  readOnly = provisioned,
  showStatus = true,
  implementation,
  receiving = false,
  status = "unknown",
  onEditConfiguration,
  onEnable,
  onDisable
}) {
  const showActions = !provisioned && Boolean(onEnable) && Boolean(onDisable);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Card, { noMargin: true, "data-testid": `alertmanager-card-${name}`, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Card.Heading, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { alignItems: "center", gap: 1, children: [
      href ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _WithReturnButton__WEBPACK_IMPORTED_MODULE_11__.WithReturnButton,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.alertmanager-card.title-alerting-settings", "Alerting settings"),
          component: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TextLink, { href, inline: false, children: name })
        }
      ) : name,
      provisioned && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Provisioning__WEBPACK_IMPORTED_MODULE_10__.ProvisioningBadge, {})
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Card.Figure, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { alt: `logo for ${name}`, src: logo }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Card.Meta, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "column", gap: 1, alignItems: "flex-start", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Card.Meta, { children: [
        implementation && (0,lodash__WEBPACK_IMPORTED_MODULE_1__.capitalize)(implementation),
        url && url
      ] }),
      showStatus ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: !receiving ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { variant: "bodySmall", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.alertmanager-card.not-receiving-grafana-managed-alerts", children: "Not receiving Grafana managed alerts" }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        status === "pending" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Badge,
          {
            text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.alertmanager-card.text-activation-in-progress", "Activation in progress"),
            color: "orange"
          }
        ),
        status === "active" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Badge,
          {
            text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
              "alerting.alertmanager-card.text-receiving-grafanamanaged-alerts",
              "Receiving Grafana-managed alerts"
            ),
            color: "green"
          }
        ),
        status === "dropped" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Badge,
          {
            text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
              "alerting.alertmanager-card.text-failed-to-adopt-alertmanager",
              "Failed to adopt Alertmanager"
            ),
            color: "red"
          }
        ),
        status === "inconclusive" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Badge, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.alertmanager-card.text-inconclusive", "Inconclusive"), color: "orange" })
      ] }) }) : null
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Card.Tags, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "row", gap: 1, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { onClick: onEditConfiguration, icon: readOnly ? "eye" : "edit", variant: "secondary", fill: "outline", children: readOnly ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.alertmanager-card.view-configuration", children: "View configuration" }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.alertmanager-card.edit-configuration", children: "Edit configuration" }) }),
      showActions ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: receiving ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { icon: "times", variant: "destructive", fill: "outline", onClick: onDisable, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.alertmanager-card.disable", children: "Disable" }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { icon: "check", variant: "secondary", fill: "outline", onClick: onEnable, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.alertmanager-card.enable", children: "Enable" }) }) }) : null
    ] }) })
  ] });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/settings/AlertmanagerConfig.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AlertmanagerConfig)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _hooks_useAlertmanagerConfig__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertmanagerConfig.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _Spacer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/Spacer.tsx");













function AlertmanagerConfig({ alertmanagerName, onDismiss, onSave, onReset }) {
  const { loading: isDeleting, error: deletingError } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_14__.useUnifiedAlertingSelector)((state) => state.deleteAMConfig);
  const { loading: isSaving, error: savingError } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_14__.useUnifiedAlertingSelector)((state) => state.saveAMConfig);
  const [showResetConfirmation, setShowResetConfirmation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const isGrafanaManagedAlertmanager = alertmanagerName === _utils_datasource__WEBPACK_IMPORTED_MODULE_15__.GRAFANA_RULES_SOURCE_NAME;
  const immutableDataSource = alertmanagerName ? (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_15__.isVanillaPrometheusAlertManagerDataSource)(alertmanagerName) : false;
  const readOnly = immutableDataSource || isGrafanaManagedAlertmanager;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  const {
    currentData: config,
    error: loadingError,
    isSuccess: isLoadingSuccessful,
    isLoading: isLoadingConfig
  } = (0,_hooks_useAlertmanagerConfig__WEBPACK_IMPORTED_MODULE_13__.useAlertmanagerConfig)(alertmanagerName);
  const defaultValues = {
    configJSON: config ? JSON.stringify(config, null, 2) : ""
  };
  const {
    register,
    setValue,
    setError,
    handleSubmit,
    formState: { errors }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    defaultValues
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (config) {
      setValue("configJSON", JSON.stringify(config, null, 2));
    }
  }, [config, setValue]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (savingError) {
      setError("configJSON", { type: "deps", message: savingError.message });
    }
  }, [savingError, setError]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (deletingError) {
      setError("configJSON", { type: "deps", message: deletingError.message });
    }
  }, [deletingError, setError]);
  register("configJSON", {
    required: {
      value: true,
      message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.alertmanager-config.message.configuration-cannot-be-empty", "Configuration cannot be empty")
    },
    validate: (value) => {
      try {
        JSON.parse(value);
        return true;
      } catch (e) {
        return e instanceof Error ? e.message : "JSON is invalid";
      }
    }
  });
  const handleSave = handleSubmit((values) => {
    onSave(alertmanagerName, defaultValues.configJSON, values.configJSON);
  }, _Analytics__WEBPACK_IMPORTED_MODULE_12__.reportFormErrors);
  const isOperating = isLoadingConfig || isDeleting || isSaving;
  if (loadingError) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Alert,
      {
        severity: "error",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "alerting.alertmanager-config.title-failed-to-load-alertmanager-configuration",
          "Failed to load Alertmanager configuration"
        ),
        children: loadingError.message ?? "An unknown error occurred."
      }
    );
  }
  if (isDeleting) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Alert,
      {
        severity: "info",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "alerting.alertmanager-config.title-resetting-alertmanager-configuration",
          "Resetting Alertmanager configuration"
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.alertmanager-config.resetting-configuration-might-while", children: "Resetting configuration, this might take a while." })
      }
    );
  }
  const confirmationText = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
    "alerting.alertmanager-config.reset-confirmation",
    'Are you sure you want to reset configuration for "{{alertmanagerName}}"? Contact points and notification policies will be reset to their defaults.',
    { alertmanagerName }
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
    isGrafanaManagedAlertmanager && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Alert,
      {
        severity: "info",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "alerting.alertmanager-config.gma-manual-configuration-is-not-supported",
          "Manual configuration changes not supported"
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.alertmanager-config.gma-manual-configuration-description", children: "The internal Grafana Alertmanager configuration cannot be manually changed. To change this configuration, edit the individual resources through the UI." })
      }
    ),
    errors.configJSON && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Alert,
      {
        severity: "error",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.alertmanager-config.title-oops-something-went-wrong", "Oops, something went wrong"),
        children: errors.configJSON.message || "An unknown error occurred."
      }
    ),
    isLoadingSuccessful && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.content, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__["default"], { children: ({ height, width }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.CodeEditor,
      {
        language: "json",
        width,
        height,
        showLineNumbers: true,
        monacoOptions: {
          scrollBeyondLastLine: false
        },
        value: defaultValues.configJSON,
        showMiniMap: false,
        onSave: (value) => setValue("configJSON", value),
        onBlur: (value) => setValue("configJSON", value),
        readOnly: isOperating
      }
    ) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { justifyContent: "flex-end", children: [
      !readOnly && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button, { variant: "destructive", onClick: () => setShowResetConfirmation(true), disabled: isOperating, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.alertmanager-config.reset", children: "Reset" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Spacer__WEBPACK_IMPORTED_MODULE_16__.Spacer, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button, { variant: "secondary", onClick: () => onDismiss(), disabled: isOperating, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.common.cancel", children: "Cancel" }) }),
      !readOnly && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button, { variant: "primary", onClick: handleSave, disabled: isOperating, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "common.save", children: "Save" }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ConfirmModal,
      {
        isOpen: showResetConfirmation,
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "alerting.alertmanager-config.title-reset-alertmanager-configuration",
          "Reset Alertmanager configuration"
        ),
        body: confirmationText,
        confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.alertmanager-config.confirmText-yes-reset-configuration", "Yes, reset configuration"),
        onConfirm: () => {
          onReset(alertmanagerName);
          setShowResetConfirmation(false);
        },
        onDismiss: () => {
          setShowResetConfirmation(false);
        }
      }
    )
  ] });
}
const getStyles = (theme) => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    gap: theme.spacing(2)
  }),
  content: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    flex: "1 1 100%"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/settings/ConfigurationDrawer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEditConfigurationDrawer: () => (/* binding */ useEditConfigurationDrawer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabsBar.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/Tab.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Drawer/Drawer.tsx");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _AlertmanagerConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/settings/AlertmanagerConfig.tsx");
/* harmony import */ var _SettingsContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/settings/SettingsContext.tsx");
/* harmony import */ var _VersionManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/settings/VersionManager.tsx");









function useEditConfigurationDrawer() {
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("configuration");
  const [dataSourceName, setDataSourceName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const { updateAlertmanagerSettings, resetAlertmanagerSettings } = (0,_SettingsContext__WEBPACK_IMPORTED_MODULE_8__.useSettings)();
  const isGrafanaManagedAlertmanager = dataSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_6__.GRAFANA_RULES_SOURCE_NAME;
  const immutableDataSource = dataSourceName ? (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_6__.isVanillaPrometheusAlertManagerDataSource)(dataSourceName) : false;
  const readOnly = immutableDataSource || isGrafanaManagedAlertmanager;
  const showConfiguration = (dataSourceName2) => {
    setDataSourceName(dataSourceName2);
    setOpen(true);
  };
  const handleDismiss = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setActiveTab("configuration");
    setOpen(false);
  }, []);
  const drawer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!open) {
      return null;
    }
    const isGrafanaAlertmanager = dataSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_6__.GRAFANA_RULES_SOURCE_NAME;
    const title = isGrafanaAlertmanager ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
      "alerting.use-edit-configuration-drawer.drawer.internal-grafana-alertmanager-title",
      "Grafana built-in Alertmanager"
    ) : dataSourceName;
    const subtitle = readOnly ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
      "alerting.use-edit-configuration-drawer.drawer.title-view-the-alertmanager-configuration",
      "View Alertmanager configuration"
    ) : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
      "alerting.use-edit-configuration-drawer.drawer.title-edit-the-alertmanager-configuration",
      "Edit Alertmanager configuration"
    );
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Drawer,
      {
        onClose: handleDismiss,
        title,
        subtitle,
        tabs: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TabsBar, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tab,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.use-edit-configuration-drawer.drawer.label-json-model", "JSON Model"),
              icon: "arrow",
              active: activeTab === "configuration",
              onChangeTab: () => setActiveTab("configuration")
            },
            "configuration"
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tab,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.use-edit-configuration-drawer.drawer.label-versions", "Versions"),
              icon: "history",
              active: activeTab === "versions",
              onChangeTab: () => setActiveTab("versions"),
              hidden: !isGrafanaAlertmanager
            },
            "versions"
          )
        ] }),
        children: [
          activeTab === "configuration" && dataSourceName && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _AlertmanagerConfig__WEBPACK_IMPORTED_MODULE_7__["default"],
            {
              alertmanagerName: dataSourceName,
              onDismiss: handleDismiss,
              onSave: updateAlertmanagerSettings,
              onReset: resetAlertmanagerSettings
            }
          ),
          activeTab === "versions" && dataSourceName && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VersionManager__WEBPACK_IMPORTED_MODULE_9__.AlertmanagerConfigurationVersionManager, { alertmanagerName: dataSourceName })
        ]
      }
    );
  }, [open, dataSourceName, readOnly, handleDismiss, activeTab, updateAlertmanagerSettings, resetAlertmanagerSettings]);
  return [drawer, showConfiguration, handleDismiss];
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/settings/ExternalAlertmanagers.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExternalAlertmanagers: () => (/* binding */ ExternalAlertmanagers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_features_datasources_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/datasources/constants.ts");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");
/* harmony import */ var _AlertmanagerCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/settings/AlertmanagerCard.tsx");
/* harmony import */ var _SettingsContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/settings/SettingsContext.tsx");









const ExternalAlertmanagers = ({ onEditConfiguration }) => {
  const {
    externalAlertmanagerDataSourcesWithStatus,
    configuration,
    enableAlertmanager,
    disableAlertmanager,
    forwardingDisabled
  } = (0,_SettingsContext__WEBPACK_IMPORTED_MODULE_7__.useSettings)();
  const isReceivingGrafanaAlerts = (externalDataSourceAlertmanager) => {
    const sendingToExternal = [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_3__.AlertmanagerChoice.All, app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_3__.AlertmanagerChoice.External].some(
      (choice) => configuration?.alertmanagersChoice === choice
    );
    const wantsAlertsReceived = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_4__.isAlertmanagerDataSourceInterestedInAlerts)(
      externalDataSourceAlertmanager.dataSourceSettings
    );
    return sendingToExternal && wantsAlertsReceived;
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Stack, { direction: "column", gap: 0, children: externalAlertmanagerDataSourcesWithStatus.map((alertmanager) => {
    const { uid, name, jsonData, url } = alertmanager.dataSourceSettings;
    const { status } = alertmanager;
    const isReceiving = isReceivingGrafanaAlerts(alertmanager);
    const isProvisioned = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_4__.isProvisionedDataSource)(alertmanager.dataSourceSettings);
    const isReadOnly = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_4__.isVanillaPrometheusAlertManagerDataSource)(alertmanager.dataSourceSettings.name);
    const detailHref = (0,_utils_url__WEBPACK_IMPORTED_MODULE_5__.createRelativeUrl)(app_features_datasources_constants__WEBPACK_IMPORTED_MODULE_2__.DATASOURCES_ROUTES.Edit.replace(/:uid/gi, uid));
    const handleEditConfiguration = () => onEditConfiguration(name);
    const handleEnable = forwardingDisabled ? void 0 : () => enableAlertmanager(uid);
    const handleDisable = forwardingDisabled ? void 0 : () => disableAlertmanager(uid);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _AlertmanagerCard__WEBPACK_IMPORTED_MODULE_6__.AlertmanagerCard,
      {
        name,
        href: detailHref,
        url,
        provisioned: isProvisioned,
        readOnly: isReadOnly,
        showStatus: !forwardingDisabled,
        implementation: jsonData.implementation ?? "Prometheus",
        receiving: isReceiving,
        status,
        onEditConfiguration: handleEditConfiguration,
        onDisable: handleDisable,
        onEnable: handleEnable
      },
      uid
    );
  }) });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/settings/InternalAlertmanager.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InternalAlertmanager)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var img_grafana_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/img/grafana_icon.svg");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/settings.ts");
/* harmony import */ var _AlertmanagerCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/settings/AlertmanagerCard.tsx");
/* harmony import */ var _SettingsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/settings/SettingsContext.tsx");







const BUILTIN_ALERTMANAGER_NAME = "Grafana built-in";
function InternalAlertmanager({ onEditConfiguration }) {
  const { configuration, enableAlertmanager, disableAlertmanager, forwardingDisabled } = (0,_SettingsContext__WEBPACK_IMPORTED_MODULE_5__.useSettings)();
  const isReceiving = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_3__.isInternalAlertmanagerInterestedInAlerts)(configuration);
  const status = isReceiving ? "active" : "uninterested";
  const handleEditConfiguration = () => onEditConfiguration(_utils_datasource__WEBPACK_IMPORTED_MODULE_2__.GRAFANA_RULES_SOURCE_NAME);
  const handleEnable = forwardingDisabled ? void 0 : () => enableAlertmanager(_utils_datasource__WEBPACK_IMPORTED_MODULE_2__.GRAFANA_RULES_SOURCE_NAME);
  const handleDisable = forwardingDisabled ? void 0 : () => disableAlertmanager(_utils_datasource__WEBPACK_IMPORTED_MODULE_2__.GRAFANA_RULES_SOURCE_NAME);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _AlertmanagerCard__WEBPACK_IMPORTED_MODULE_4__.AlertmanagerCard,
    {
      name: BUILTIN_ALERTMANAGER_NAME,
      logo: img_grafana_icon_svg__WEBPACK_IMPORTED_MODULE_1__,
      status,
      receiving: isReceiving,
      onEditConfiguration: handleEditConfiguration,
      onEnable: handleEnable,
      onDisable: handleDisable,
      readOnly: true
    }
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/settings/SettingsContext.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsProvider: () => (/* binding */ SettingsProvider),
/* harmony export */   useSettings: () => (/* binding */ useSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/legacyEvents.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/api/alertmanagerApi.ts");
/* harmony import */ var _api_dataSourcesApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/api/dataSourcesApi.ts");
/* harmony import */ var _hooks_useExternalAmSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useExternalAmSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/settings.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/settings/hooks.tsx");















const appEvents = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.getAppEvents)();
const SettingsContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(void 0);
const isInternalAlertmanager = (uid) => uid === _utils_datasource__WEBPACK_IMPORTED_MODULE_12__.GRAFANA_RULES_SOURCE_NAME;
const SettingsProvider = (props) => {
  const interestedAlertmanagers = [];
  const forwardingDisabled = _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.featureToggles.alertingDisableSendAlertsExternal === true;
  const { currentData: configuration, isLoading: isLoadingConfiguration } = _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_8__.alertmanagerApi.endpoints.getGrafanaAlertingConfiguration.useQuery();
  const [updateConfiguration, updateConfigurationState] = _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_8__.alertmanagerApi.endpoints.updateGrafanaAlertingConfiguration.useMutation();
  const [enableGrafanaManagedAlerts, disableGrafanaManagedAlerts, enableOrDisableHandlingGrafanaManagedAlertsState] = (0,_hooks__WEBPACK_IMPORTED_MODULE_14__.useEnableOrDisableHandlingGrafanaManagedAlerts)();
  const externalAlertmanagersWithStatus = (0,_hooks_useExternalAmSelector__WEBPACK_IMPORTED_MODULE_10__.useExternalDataSourceAlertmanagers)({ refetchOnMountOrArgChange: true });
  const interestedInternal = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_13__.isInternalAlertmanagerInterestedInAlerts)(configuration);
  if (interestedInternal) {
    interestedAlertmanagers.push(_utils_datasource__WEBPACK_IMPORTED_MODULE_12__.GRAFANA_RULES_SOURCE_NAME);
  }
  externalAlertmanagersWithStatus.filter((dataSource) => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_12__.isAlertmanagerDataSourceInterestedInAlerts)(dataSource.dataSourceSettings)).forEach((alertmanager) => {
    interestedAlertmanagers.push(alertmanager.dataSourceSettings.uid);
  });
  const enableAlertmanager = (uid) => {
    const updatedInterestedAlertmanagers = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.union)([uid], interestedAlertmanagers);
    const newDeliveryMode = determineDeliveryMode(updatedInterestedAlertmanagers);
    if (newDeliveryMode === null) {
      return;
    }
    if (newDeliveryMode !== configuration?.alertmanagersChoice) {
      updateConfiguration({ alertmanagersChoice: newDeliveryMode });
    }
    if (!isInternalAlertmanager(uid)) {
      enableGrafanaManagedAlerts(uid);
    }
  };
  const disableAlertmanager = (uid) => {
    const updatedInterestedAlertmanagers = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.without)(interestedAlertmanagers, uid);
    const newDeliveryMode = determineDeliveryMode(updatedInterestedAlertmanagers);
    if (newDeliveryMode === null) {
      return;
    }
    if (newDeliveryMode !== configuration?.alertmanagersChoice) {
      updateConfiguration({ alertmanagersChoice: newDeliveryMode });
    }
    if (!isInternalAlertmanager(uid)) {
      disableGrafanaManagedAlerts(uid);
    }
  };
  const updateAlertmanagerSettings = (alertManagerName, oldConfig, newConfig) => {
    (0,app_store_store__WEBPACK_IMPORTED_MODULE_7__.dispatch)(
      (0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.updateAlertManagerConfigAction)({
        newConfig: JSON.parse(newConfig),
        oldConfig: JSON.parse(oldConfig),
        alertManagerSourceName: alertManagerName,
        successMessage: "Alertmanager configuration updated."
      })
    );
  };
  const resetAlertmanagerSettings = (alertmanagerName) => {
    (0,app_store_store__WEBPACK_IMPORTED_MODULE_7__.dispatch)((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.deleteAlertManagerConfigAction)(alertmanagerName));
  };
  const value = {
    configuration,
    forwardingDisabled,
    externalAlertmanagerDataSourcesWithStatus: externalAlertmanagersWithStatus,
    enableAlertmanager,
    disableAlertmanager,
    isLoading: isLoadingConfiguration,
    isUpdating: updateConfigurationState.isLoading || enableOrDisableHandlingGrafanaManagedAlertsState.isLoading,
    // CRUD for Alertmanager settings
    updateAlertmanagerSettings,
    resetAlertmanagerSettings
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SettingsContext.Provider, { value, children: props.children });
};
function determineDeliveryMode(interestedAlertmanagers) {
  const containsInternalAlertmanager = interestedAlertmanagers.some((uid) => uid === _utils_datasource__WEBPACK_IMPORTED_MODULE_12__.GRAFANA_RULES_SOURCE_NAME);
  const containsExternalAlertmanager = interestedAlertmanagers.some((uid) => uid !== _utils_datasource__WEBPACK_IMPORTED_MODULE_12__.GRAFANA_RULES_SOURCE_NAME);
  if (containsInternalAlertmanager && containsExternalAlertmanager) {
    return app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_6__.AlertmanagerChoice.All;
  }
  if (!containsInternalAlertmanager && containsExternalAlertmanager) {
    return app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_6__.AlertmanagerChoice.External;
  }
  if (containsInternalAlertmanager && !containsExternalAlertmanager) {
    return app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_6__.AlertmanagerChoice.Internal;
  }
  appEvents.publish({
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.AppEvents.alertError.name,
    payload: ["You need to have at least one Alertmanager to receive alerts."]
  });
  return null;
}
function useSettings() {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(SettingsContext);
  if (context === void 0) {
    throw new Error("useSettings must be used within a SettingsContext");
  }
  const debouncedUpdateStatus = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(() => {
    (0,app_store_store__WEBPACK_IMPORTED_MODULE_7__.dispatch)(_api_dataSourcesApi__WEBPACK_IMPORTED_MODULE_9__.dataSourcesApi.util.invalidateTags(["AlertmanagerConnectionStatus"]));
  }, 3e3);
  const refetchAlertmanagerConnectionStatus = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(debouncedUpdateStatus);
  const hasPendingAlertmanagers = context.externalAlertmanagerDataSourcesWithStatus.some(
    ({ status }) => status === "pending"
  );
  if (hasPendingAlertmanagers) {
    refetchAlertmanagerConnectionStatus.current();
  }
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    debouncedUpdateStatus.cancel();
  }, [debouncedUpdateStatus]);
  return context;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/settings/VersionManager.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertmanagerConfigurationVersionManager: () => (/* binding */ AlertmanagerConfigurationVersionManager)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/InteractiveTable/InteractiveTable.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_dashboard_scene_settings_version_history_DiffViewer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/dashboard-scene/settings/version-history/DiffViewer.tsx");
/* harmony import */ var _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/api/alertmanagerApi.ts");
/* harmony import */ var _utils_diff__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/utils/diff.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _Spacer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/Spacer.tsx");













const VERSIONS_PAGE_SIZE = 30;
const AlertmanagerConfigurationVersionManager = ({
  alertmanagerName
}) => {
  const [activeRestoreVersion, setActiveRestoreVersion] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(void 0);
  const [confirmRestore, setConfirmRestore] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [activeComparison, setActiveComparison] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(void 0);
  const {
    currentData: historicalConfigs = [],
    isLoading,
    error
  } = _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_15__.alertmanagerApi.endpoints.getAlertmanagerConfigurationHistory.useQuery(void 0);
  const [resetAlertManagerConfigToOldVersion, restoreVersionState] = _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_15__.alertmanagerApi.endpoints.resetAlertmanagerConfigurationToOldVersion.useMutation();
  const showConfirmation = () => {
    setConfirmRestore(true);
  };
  const hideConfirmation = () => {
    setConfirmRestore(false);
  };
  const restoreVersion = (id) => {
    setActiveComparison(void 0);
    setActiveRestoreVersion(void 0);
    resetAlertManagerConfigToOldVersion({ id });
  };
  if (error) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "alerting.alertmanager-configuration-version-manager.title-failed-to-load-configuration-history",
          "Failed to load configuration history"
        ),
        children: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_17__.stringifyErrorLike)(error)
      }
    );
  }
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.alertmanager-configuration-version-manager.loading", children: "Loading..." });
  }
  if (!historicalConfigs.length) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.alertmanager-configuration-version-manager.no-previous-configurations", children: "No previous configurations" });
  }
  const previousVersions = historicalConfigs.map((config, index) => {
    const latestConfig = historicalConfigs[0];
    const priorConfig = historicalConfigs[index];
    return {
      ...config,
      diff: priorConfig ? (0,_utils_diff__WEBPACK_IMPORTED_MODULE_16__.computeVersionDiff)(config, latestConfig, normalizeConfig) : { added: 0, removed: 0 }
    };
  });
  const rows = previousVersions.map((version) => ({
    id: String(version.id ?? 0),
    lastAppliedAt: version.last_applied ?? "unknown",
    diff: version.diff
  }));
  const columns = [
    {
      id: "lastAppliedAt",
      header: "Last applied",
      cell: LastAppliedCell
    },
    {
      id: "diff",
      disableGrow: true,
      cell: ({ row, value }) => {
        const isLatestConfiguration = row.index === 0;
        if (isLatestConfiguration) {
          return null;
        }
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { alignItems: "baseline", gap: 0.5, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Text, { color: "success", variant: "bodySmall", children: [
            "+",
            value.added
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Text, { color: "error", variant: "bodySmall", children: [
            "-",
            value.removed
          ] })
        ] });
      }
    },
    {
      id: "actions",
      disableGrow: true,
      cell: ({ row }) => {
        const isFirstItem = row.index === 0;
        const versionID = Number(row.id);
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { direction: "row", alignItems: "center", justifyContent: "flex-end", children: isFirstItem ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Badge,
          {
            text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.alertmanager-configuration-version-manager.columns.text-latest", "Latest"),
            color: "blue"
          }
        ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button,
            {
              variant: "secondary",
              size: "sm",
              icon: "code-branch",
              fill: "outline",
              onClick: () => {
                const latestConfiguration = historicalConfigs[0];
                const historicalConfiguration = historicalConfigs[row.index];
                const left = normalizeConfig(latestConfiguration);
                const right = normalizeConfig(historicalConfiguration);
                setActiveRestoreVersion(versionID);
                setActiveComparison([JSON.stringify(left, null, 2), JSON.stringify(right, null, 2)]);
              },
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.alertmanager-configuration-version-manager.columns.compare", children: "Compare" })
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button,
            {
              variant: "secondary",
              size: "sm",
              icon: "history",
              onClick: () => {
                setActiveRestoreVersion(versionID);
                showConfirmation();
              },
              disabled: restoreVersionState.isLoading,
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.alertmanager-configuration-version-manager.columns.restore", children: "Restore" })
            }
          )
        ] }) });
      }
    }
  ];
  if (restoreVersionState.isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Alert,
      {
        severity: "info",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "alerting.alertmanager-configuration-version-manager.title-restoring-alertmanager-configuration",
          "Restoring Alertmanager configuration"
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.alertmanager-configuration-version-manager.this-might-take-a-while", children: "This might take a while..." })
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    activeComparison ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      CompareVersions,
      {
        left: activeComparison[0],
        right: activeComparison[1],
        disabled: restoreVersionState.isLoading,
        onCancel: () => {
          setActiveRestoreVersion(void 0);
          setActiveComparison(void 0);
          hideConfirmation();
        },
        onConfirm: () => {
          showConfirmation();
        }
      }
    ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InteractiveTable, { pageSize: VERSIONS_PAGE_SIZE, columns, data: rows, getRowId: (row) => row.id }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.ConfirmModal,
      {
        isOpen: confirmRestore,
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.alertmanager-configuration-version-manager.title-restore-version", "Restore version"),
        body: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "alerting.alertmanager-configuration-version-manager.body-restore-configuration-version-unsaved-changes",
          "Are you sure you want to restore the configuration to this version? All unsaved changes will be lost."
        ),
        confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "alerting.alertmanager-configuration-version-manager.confirmText-yes-restore-configuration",
          "Yes, restore configuration"
        ),
        onConfirm: () => {
          if (activeRestoreVersion) {
            restoreVersion(activeRestoreVersion);
          }
          hideConfirmation();
        },
        onDismiss: () => hideConfirmation()
      }
    )
  ] });
};
function CompareVersions({ left, right, disabled = false, onCancel, onConfirm }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.drawerWrapper, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.diffWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_dashboard_scene_settings_version_history_DiffViewer__WEBPACK_IMPORTED_MODULE_14__.DiffViewer, { newValue: left, oldValue: right, hideLineNumbers: true }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { direction: "row", alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Spacer__WEBPACK_IMPORTED_MODULE_18__.Spacer, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button, { variant: "secondary", onClick: onCancel, disabled, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.compare-versions.return", children: "Return" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button, { icon: "history", variant: "primary", onClick: onConfirm, disabled, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.compare-versions.restore", children: "Restore" }) })
    ] })
  ] });
}
const LastAppliedCell = ({ value }) => {
  const date = moment__WEBPACK_IMPORTED_MODULE_3___default()(value);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { direction: "row", alignItems: "center", children: [
    date.toLocaleString(),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Text, { variant: "bodySmall", color: "secondary", children: date.fromNow() })
  ] });
};
const getStyles = (theme) => ({
  drawerWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    maxHeight: "100%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1)
  }),
  diffWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    overflowY: "auto"
  })
});
function normalizeConfig(config) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.omit)(config, ["id", "last_applied"]);
}



/***/ }),

/***/ "./public/app/features/alerting/unified/components/settings/hooks.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEnableOrDisableHandlingGrafanaManagedAlerts: () => (/* binding */ useEnableOrDisableHandlingGrafanaManagedAlerts)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/immer/dist/immer.mjs");
/* harmony import */ var _api_dataSourcesApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/api/dataSourcesApi.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");




const useEnableOrDisableHandlingGrafanaManagedAlerts = () => {
  const [getSettings, getSettingsState] = _api_dataSourcesApi__WEBPACK_IMPORTED_MODULE_1__.dataSourcesApi.endpoints.getDataSourceSettingsForUID.useLazyQuery();
  const [updateSettings, updateSettingsState] = _api_dataSourcesApi__WEBPACK_IMPORTED_MODULE_1__.dataSourcesApi.endpoints.updateDataSourceSettingsForUID.useMutation();
  const enableOrDisable = async (uid, handleGrafanaManagedAlerts) => {
    const existingSettings = await getSettings(uid).unwrap();
    if (!(0,_utils_datasource__WEBPACK_IMPORTED_MODULE_2__.isAlertmanagerDataSource)(existingSettings)) {
      throw new Error(`Data source with UID ${uid} is not an Alertmanager data source`);
    }
    const newSettings = (0,immer__WEBPACK_IMPORTED_MODULE_0__.produce)(existingSettings, (draft) => {
      draft.jsonData.handleGrafanaManagedAlerts = handleGrafanaManagedAlerts;
    });
    updateSettings({ uid, settings: newSettings });
  };
  const enable = (uid) => enableOrDisable(uid, true);
  const disable = (uid) => enableOrDisable(uid, false);
  const loadingState = {
    isLoading: getSettingsState.isLoading || updateSettingsState.isLoading,
    isError: getSettingsState.isError || updateSettingsState.isError,
    error: getSettingsState.error || updateSettingsState.error,
    data: updateSettingsState.data
  };
  return [enable, disable, loadingState];
};


/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useExternalAmSelector.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeDataSourceURL: () => (/* binding */ normalizeDataSourceURL),
/* harmony export */   useExternalDataSourceAlertmanagers: () => (/* binding */ useExternalDataSourceAlertmanagers)
/* harmony export */ });
/* harmony import */ var _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/api/alertmanagerApi.ts");
/* harmony import */ var _api_dataSourcesApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/api/dataSourcesApi.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");




function useExternalDataSourceAlertmanagers({
  refetchOnMountOrArgChange = false
} = {}) {
  const { alertmanagerDataSources } = _api_dataSourcesApi__WEBPACK_IMPORTED_MODULE_1__.dataSourcesApi.endpoints.getAllDataSourceSettings.useQuery(void 0, {
    refetchOnReconnect: true,
    // we will refetch the list of data sources every time the component is rendered so we always show fresh data after a user
    // may have made changes to a data source and came back to the list
    refetchOnMountOrArgChange,
    selectFromResult: (result) => {
      const alertmanagerDataSources2 = result.currentData?.filter(_utils_datasource__WEBPACK_IMPORTED_MODULE_2__.isAlertmanagerDataSource) ?? [];
      return { ...result, alertmanagerDataSources: alertmanagerDataSources2 };
    }
  });
  const { currentData: externalAlertmanagers } = _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_0__.alertmanagerApi.endpoints.getExternalAlertmanagers.useQuery(
    void 0,
    { refetchOnReconnect: true, refetchOnMountOrArgChange }
  );
  if (!alertmanagerDataSources) {
    return [];
  }
  return alertmanagerDataSources.map((dataSourceSettings) => {
    const status = externalAlertmanagers ? determineAlertmanagerConnectionStatus(externalAlertmanagers, dataSourceSettings) : "unknown";
    return {
      dataSourceSettings,
      status
    };
  });
}
function determineAlertmanagerConnectionStatus(externalAlertmanagers, dataSourceSettings) {
  const isInterestedInAlerts = dataSourceSettings.jsonData.handleGrafanaManagedAlerts;
  if (!isInterestedInAlerts) {
    return "uninterested";
  }
  const isActive = externalAlertmanagers?.activeAlertManagers.some((am) => {
    return isAlertmanagerMatchByURL(dataSourceSettings.url, am.url);
  }) ?? [];
  const isDropped = externalAlertmanagers?.droppedAlertManagers.some((am) => {
    return isAlertmanagerMatchByURL(dataSourceSettings.url, am.url);
  }) ?? [];
  const isPending = !isActive && !isDropped;
  if (isPending) {
    return "pending";
  }
  const isInconclusive = isActive && isDropped;
  if (isInconclusive) {
    return "inconclusive";
  }
  if (isActive) {
    return "active";
  } else if (isDropped) {
    return "dropped";
  }
  return "unknown";
}
const MIMIR_ALERTMANAGER_PATH = "/alertmanager/api/v2/alerts";
const VANILLA_ALERTMANAGER_PATH = "/api/v2/alerts";
function isAlertmanagerMatchByURL(dataSourceUrl, alertmanagerUrl) {
  const normalizedUrl = normalizeDataSourceURL(dataSourceUrl);
  const prometheusAlertmanagerMatch = alertmanagerUrl === `${normalizedUrl}${VANILLA_ALERTMANAGER_PATH}`;
  const mimirAlertmanagerMatch = alertmanagerUrl === `${normalizedUrl}${MIMIR_ALERTMANAGER_PATH}`;
  return prometheusAlertmanagerMatch || mimirAlertmanagerMatch;
}
function normalizeDataSourceURL(url) {
  const hasProtocol = new RegExp("^[^:]*://").test(url);
  const urlWithProtocol = hasProtocol ? url : `http://${url}`;
  return urlWithProtocol.replace(/\/+$/, "");
}


/***/ }),

/***/ "./public/app/features/alerting/unified/settings/extensions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSettingsSection: () => (/* binding */ addSettingsSection),
/* harmony export */   clearSettingsExtensions: () => (/* binding */ clearSettingsExtensions),
/* harmony export */   useSettingsExtensionsNav: () => (/* binding */ useSettingsExtensionsNav)
/* harmony export */ });
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/store.ts");



const settingsExtensions = /* @__PURE__ */ new Map();
function addSettingsSection(pageNav) {
  if (settingsExtensions.has(pageNav.url)) {
    console.warn("Unable to add settings page, PageNav must have an unique url");
    return;
  }
  settingsExtensions.set(pageNav.url, { nav: pageNav });
}
function useSettingsExtensionsNav() {
  const location = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_0__.useLocation)();
  const navIndex = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state) => state.navIndex);
  const settingsNav = navIndex["alerting-admin"];
  const extensionTabs = Array.from(settingsExtensions.entries()).map(([url, { nav }]) => ({
    ...nav,
    active: location.pathname === url,
    url,
    parentItem: settingsNav
  }));
  return extensionTabs;
}
function clearSettingsExtensions() {
  settingsExtensions.clear();
}


/***/ }),

/***/ "./public/app/features/alerting/unified/settings/navigation.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSettingsPageNav: () => (/* binding */ useSettingsPageNav)
/* harmony export */ });
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/settings/extensions.ts");





function useSettingsPageNav() {
  const location = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_0__.useLocation)();
  const navIndex = (0,app_types_store__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state) => state.navIndex);
  const settingsNav = navIndex["alerting-admin"];
  const extensionTabs = (0,_extensions__WEBPACK_IMPORTED_MODULE_3__.useSettingsExtensionsNav)();
  const allTabs = [
    {
      id: "alertmanager",
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.settings.tabs.alert-managers", "Alert managers"),
      url: "/alerting/admin/alertmanager",
      active: location.pathname === "/alerting/admin/alertmanager",
      icon: "cloud",
      parentItem: settingsNav
    },
    ...extensionTabs
  ];
  const pageNav = {
    ...settingsNav,
    children: allTabs
  };
  return {
    navId: "alerting-admin",
    pageNav
  };
}


/***/ }),

/***/ "./public/app/features/alerting/unified/utils/settings.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInternalAlertmanagerInterestedInAlerts: () => (/* binding */ isInternalAlertmanagerInterestedInAlerts)
/* harmony export */ });
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");


const isInternalAlertmanagerInterestedInAlerts = (config) => {
  if (!config) {
    return true;
  }
  switch (config.alertmanagersChoice) {
    case app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_0__.AlertmanagerChoice.Internal:
    case app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_0__.AlertmanagerChoice.All:
      return true;
    case app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_0__.AlertmanagerChoice.External:
    default:
      return false;
  }
};


/***/ }),

/***/ "./public/app/plugins/datasource/alertmanager/img/logo.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/logo.05dd2009.svg";

/***/ })

}]);
//# sourceMappingURL=AlertingSettings.f56750bf5a5956819eae.js.map