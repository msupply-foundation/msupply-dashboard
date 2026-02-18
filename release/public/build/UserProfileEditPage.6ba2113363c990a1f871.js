"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["UserProfileEditPage"],{

/***/ "./node_modules/react-use/esm/useMount.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-use/esm/useEffectOnce.js");

var useMount = function (fn) {
    (0,_useEffectOnce__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        fn();
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMount);


/***/ }),

/***/ "./public/app/core/components/Form/Form.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Form: () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");





function Form({
  defaultValues,
  onSubmit,
  validateOnMount = false,
  validateFieldsOnMount,
  children,
  validateOn = "onSubmit",
  maxWidth = 600,
  ...htmlProps
}) {
  const { handleSubmit, trigger, formState, ...rest } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    mode: validateOn,
    defaultValues
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (validateOnMount) {
      trigger(validateFieldsOnMount);
    }
  }, [trigger, validateFieldsOnMount, validateOnMount]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "form",
    {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        maxWidth: maxWidth !== "none" ? maxWidth + "px" : maxWidth,
        width: "100%"
      }),
      onSubmit: handleSubmit(onSubmit),
      ...htmlProps,
      children: children({ errors: formState.errors, formState, trigger, ...rest })
    }
  );
}


/***/ }),

/***/ "./public/app/core/components/SharedPreferences/SharedPreferences.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedPreferences: () => (/* binding */ SharedPreferences),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/app.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/constants.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/DateTimePickers/TimeZonePicker.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/DateTimePickers/WeekStartPicker.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/FeatureBadge/FeatureBadge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldSet.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/components/Combobox/Combobox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/themes/stylesFactory.ts");
/* harmony import */ var app_core_components_Select_DashboardPicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/core/components/Select/DashboardPicker.tsx");
/* harmony import */ var app_core_internationalization_constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/core/internationalization/constants.ts");
/* harmony import */ var app_core_internationalization_locales__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/core/internationalization/locales.ts");
/* harmony import */ var app_core_services_PreferencesService__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/core/services/PreferencesService.ts");
/* harmony import */ var app_core_services_theme__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/core/services/theme.ts");
/* harmony import */ var _ThemeSelector_getSelectableThemes__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/core/components/ThemeSelector/getSelectableThemes.ts");















function getLanguageOptions() {
  const languageOptions = app_core_internationalization_constants__WEBPACK_IMPORTED_MODULE_20__.LANGUAGES.map((v) => ({
    value: v.code,
    label: v.name
  })).sort((a, b) => {
    if (a.value === _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.PSEUDO_LOCALE) {
      return 1;
    }
    if (b.value === _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.PSEUDO_LOCALE) {
      return -1;
    }
    return a.label.localeCompare(b.label);
  });
  if (true) {
    languageOptions.push({
      value: _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.PSEUDO_LOCALE,
      label: "Pseudo-locale"
    });
  }
  const options = [
    {
      value: "",
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("common.locale.default", "Default")
    },
    ...languageOptions
  ];
  return options;
}
function getRegionalFormatOptions() {
  const localeOptions = app_core_internationalization_locales__WEBPACK_IMPORTED_MODULE_21__.LOCALES.map((v) => ({
    value: v.code,
    label: v.name
  })).sort((a, b) => {
    return a.label.localeCompare(b.label);
  });
  const options = [
    {
      value: "",
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("common.locale.default", "Default")
    },
    ...localeOptions
  ];
  return options;
}
class SharedPreferences extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor(props) {
    super(props);
    this.onSubmitForm = async (event) => {
      event.preventDefault();
      const confirmationResult = this.props.onConfirm ? await this.props.onConfirm() : true;
      if (confirmationResult) {
        const { homeDashboardUID, theme, timezone, weekStart, language, regionalFormat, queryHistory, navbar } = this.state;
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("grafana_preferences_save_button_clicked", {
          preferenceType: this.props.preferenceType,
          theme,
          language
        });
        this.setState({ isSubmitting: true });
        await this.service.update({
          homeDashboardUID,
          theme,
          timezone,
          weekStart,
          language,
          regionalFormat,
          queryHistory,
          navbar
        }).finally(() => {
          this.setState({ isSubmitting: false });
        });
        window.location.reload();
      }
    };
    this.onThemeChanged = (value) => {
      this.setState({ theme: value.value });
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("grafana_preferences_theme_changed", {
        toTheme: value.value,
        preferenceType: this.props.preferenceType
      });
      if (value.value) {
        (0,app_core_services_theme__WEBPACK_IMPORTED_MODULE_23__.changeTheme)(value.value, true);
      }
    };
    this.onTimeZoneChanged = (timezone) => {
      if (typeof timezone !== "string") {
        return;
      }
      this.setState({ timezone });
    };
    this.onWeekStartChanged = (weekStart) => {
      this.setState({ weekStart: weekStart ?? "" });
    };
    this.onHomeDashboardChanged = (dashboardUID) => {
      this.setState({ homeDashboardUID: dashboardUID });
    };
    this.onLanguageChanged = (language) => {
      this.setState({ language });
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("grafana_preferences_language_changed", {
        toLanguage: language,
        preferenceType: this.props.preferenceType
      });
    };
    this.onLocaleChanged = (regionalFormat) => {
      this.setState({ regionalFormat });
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("grafana_preferences_regional_format_changed", {
        toRegionalFormat: regionalFormat,
        preferenceType: this.props.preferenceType
      });
    };
    this.service = new app_core_services_PreferencesService__WEBPACK_IMPORTED_MODULE_22__.PreferencesService(props.resourceUri);
    this.state = {
      isLoading: false,
      isSubmitting: false,
      theme: "",
      timezone: "",
      weekStart: "",
      language: "",
      regionalFormat: "",
      queryHistory: { homeTab: "" },
      navbar: { bookmarkUrls: [] }
    };
    const themes = (0,_ThemeSelector_getSelectableThemes__WEBPACK_IMPORTED_MODULE_24__.getSelectableThemes)();
    this.themeOptions = themes.map((theme) => ({
      value: theme.id,
      label: getTranslatedThemeName(theme),
      group: theme.isExtra ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("shared-preferences.theme.experimental", "Experimental") : void 0
    }));
    this.languageOptions = getLanguageOptions();
    this.regionalFormatOptions = getRegionalFormatOptions();
    this.themeOptions.unshift({ value: "", label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("shared-preferences.theme.default-label", "Default") });
  }
  async componentDidMount() {
    this.setState({
      isLoading: true
    });
    const prefs = await this.service.load();
    this.setState({
      isLoading: false,
      homeDashboardUID: prefs.homeDashboardUID,
      theme: prefs.theme,
      timezone: prefs.timezone,
      weekStart: prefs.weekStart,
      language: prefs.language,
      regionalFormat: prefs.regionalFormat,
      queryHistory: prefs.queryHistory,
      navbar: prefs.navbar
    });
  }
  render() {
    const { theme, timezone, weekStart, homeDashboardUID, language, isLoading, isSubmitting, regionalFormat } = this.state;
    const { disabled } = this.props;
    const styles = getStyles();
    const currentThemeOption = this.themeOptions.find((x) => x.value === theme) ?? this.themeOptions[0];
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: this.onSubmitForm, className: styles.form, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.FieldSet, { label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "shared-preferences.title", children: "Preferences" }), disabled, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
          {
            loading: isLoading,
            disabled: isLoading,
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("shared-preferences.fields.theme-label", "Interface theme"),
            description: _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.featureToggles.grafanaconThemes && _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.feedbackLinksEnabled ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "shared-preferences.fields.theme-description", children: [
              "Enjoying the experimental themes? Tell us what you'd like to see",
              " ",
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.TextLink,
                {
                  variant: "bodySmall",
                  external: true,
                  href: "https://docs.google.com/forms/d/e/1FAIpQLSeRKAY8nUMEVIKSYJ99uOO-dimF6Y69_If1Q1jTLOZRWqK1cw/viewform?usp=dialog",
                  children: "here."
                }
              )
            ] }) : void 0,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Combobox,
              {
                options: this.themeOptions,
                value: currentThemeOption.value,
                onChange: this.onThemeChanged,
                id: "shared-preferences-theme-select"
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
          {
            loading: isLoading,
            disabled: isLoading,
            label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Label, { htmlFor: "home-dashboard-select", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.labelText, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "shared-preferences.fields.home-dashboard-label", children: "Home Dashboard" }) }) }),
            "data-testid": "User preferences home dashboard drop down",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              app_core_components_Select_DashboardPicker__WEBPACK_IMPORTED_MODULE_19__.DashboardPicker,
              {
                value: homeDashboardUID,
                onChange: (v) => this.onHomeDashboardChanged(v?.uid ?? ""),
                defaultOptions: true,
                isClearable: true,
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("shared-preferences.fields.home-dashboard-placeholder", "Default dashboard"),
                inputId: "home-dashboard-select"
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
          {
            loading: isLoading,
            disabled: isLoading,
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("shared-dashboard.fields.timezone-label", "Timezone"),
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.TimeZonePicker.containerV2,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.TimeZonePicker,
              {
                includeInternal: true,
                value: timezone,
                onChange: this.onTimeZoneChanged,
                inputId: "shared-preferences-timezone-picker"
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
          {
            loading: isLoading,
            disabled: isLoading,
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("shared-preferences.fields.week-start-label", "Week start"),
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.WeekStartPicker.containerV2,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.WeekStartPicker,
              {
                value: weekStart && (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.isWeekStart)(weekStart) ? weekStart : void 0,
                onChange: this.onWeekStartChanged,
                inputId: "shared-preferences-week-start-picker"
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
          {
            loading: isLoading,
            disabled: isLoading,
            label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Label, { htmlFor: "language-preference-select", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.labelText, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "shared-preferences.fields.language-preference-label", children: "Language" }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.FeatureBadge, { featureState: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FeatureState.preview })
            ] }),
            "data-testid": "User preferences language drop down",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Combobox,
              {
                value: this.languageOptions.find((lang) => lang.value === language)?.value || "",
                onChange: (lang) => this.onLanguageChanged(lang?.value ?? ""),
                options: this.languageOptions,
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("shared-preferences.fields.language-preference-placeholder", "Choose language"),
                id: "language-preference-select"
              }
            )
          }
        ),
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.featureToggles.localeFormatPreference && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
          {
            loading: isLoading,
            disabled: isLoading,
            label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Label, { htmlFor: "locale-preference", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.labelText, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "shared-preferences.fields.locale-preference-label", children: "Region format" }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.FeatureBadge, { featureState: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FeatureState.preview })
            ] }),
            description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
              "shared-preferences.fields.locale-preference-description",
              "Choose your region to see the corresponding date, time, and number format"
            ),
            "data-testid": "User preferences locale drop down",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Combobox,
              {
                value: this.regionalFormatOptions.find((loc) => loc.value === regionalFormat)?.value || "",
                onChange: (locale) => this.onLocaleChanged(locale?.value ?? ""),
                options: this.regionalFormatOptions,
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("shared-preferences.fields.locale-preference-placeholder", "Choose region"),
                id: "locale-preference-select"
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Button,
        {
          disabled: isSubmitting,
          type: "submit",
          variant: "primary",
          "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.UserProfile.preferencesSaveButton,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "shared-preferences.save", children: "Save preferences" })
        }
      )
    ] });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SharedPreferences);
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.stylesFactory)(() => {
  return {
    labelText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginRight: "6px"
    }),
    form: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "100%",
      maxWidth: "600px"
    })
  };
});
function getTranslatedThemeName(theme) {
  switch (theme.id) {
    case "dark":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("shared.preferences.theme.dark-label", "Dark");
    case "light":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("shared.preferences.theme.light-label", "Light");
    case "system":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("shared.preferences.theme.system-label", "System preference");
    default:
      return theme.name;
  }
}


/***/ }),

/***/ "./public/app/core/internationalization/locales.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCALES: () => (/* binding */ LOCALES)
/* harmony export */ });

const LOCALES = [
  // Afrikaans - Standard
  { name: "Afrikaans", code: "af" },
  // // Arabic - Standard
  // { name: 'العربية', code: 'ar' }, // Disabled because RTL
  // // Arabic - Algeria
  // { name: 'العربية (الجزائر)', code: 'ar-DZ' }, // Disabled because RTL
  // // Arabic - Kuwait
  // { name: 'العربية (الكويت)', code: 'ar-KW' }, // Disabled because RTL
  // // Arabic - Libya
  // { name: 'العربية (ليبيا)', code: 'ar-LY' }, // Disabled because RTL
  // // Arabic - Morocco
  // { name: 'العربية (المغرب)', code: 'ar-MA' }, // Disabled because RTL
  // // Arabic - Palestine
  // { name: 'العربية (فلسطين)', code: 'ar-PS' }, // Disabled because RTL
  // // Arabic - Saudi Arabia
  // { name: 'العربية (السعودية)', code: 'ar-SA' }, // Disabled because RTL
  // // Arabic - Tunisia
  // { name: 'العربية (تونس)', code: 'ar-TN' }, // Disabled because RTL
  // Azerbaijani - Azerbaijan
  { name: "Az\u0259rbaycan dili", code: "az" },
  // Belarusian - Belarus
  { name: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F \u043C\u043E\u0432\u0430", code: "be-BY" },
  // Bulgarian - Bulgaria
  { name: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 \u0435\u0437\u0438\u043A", code: "bg-BG" },
  // Bambara - Mali
  { name: "Bamanankan", code: "bm" },
  // Bengali - Standard
  { name: "\u09AC\u09BE\u0982\u09B2\u09BE", code: "bn" },
  // Bengali - Bangladesh
  { name: "\u09AC\u09BE\u0982\u09B2\u09BE", code: "bn-BD" },
  // Tibetan - Tibet (China) and Bhutan
  { name: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42", code: "bo" },
  // Breton - Brittany (France)
  { name: "Brezhoneg", code: "br" },
  // Bosnian - Bosnia and Herzegovina
  { name: "Bosanski jezik", code: "bs" },
  // Catalan - Catalonia (Spain)
  { name: "Catal\xE0", code: "ca-ES" },
  // Czech - Czech Republic
  { name: "\u010Ce\u0161tina", code: "cs-CZ" },
  // Welsh - Wales (United Kingdom)
  { name: "Cymraeg", code: "cy-GB" },
  // Chuvash - Chuvashia (Russia)
  { name: "\u0427\u04D1\u0432\u0430\u0448\u043B\u0430", code: "cv-RU" },
  // Danish - Denmark
  { name: "Dansk", code: "da-DK" },
  // German - Germany
  { name: "Deutsch", code: "de-DE" },
  // German - Austria
  { name: "Deutsch (\xD6sterreich)", code: "de-AT" },
  // German - Switzerland
  { name: "Deutsch (Schweiz)", code: "de-CH" },
  // // Divehi/Maldivian - Maldives
  // { name: 'ދިވެހި', code: 'dv-MV' }, // Disabled because RTL
  // Greek - Greece
  { name: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC", code: "el-GR" },
  // English - Australia
  { name: "English (Australia)", code: "en-AU" },
  // English - Canada
  { name: "English (Canada)", code: "en-CA" },
  // English - United Kingdom
  { name: "English (United Kingdom)", code: "en-GB" },
  // English - Ireland
  { name: "English (Ireland)", code: "en-IE" },
  // English - Israel
  { name: "English (Israel)", code: "en-IL" },
  // English - India
  { name: "English (India)", code: "en-IN" },
  // English - New Zealand
  { name: "English (New Zealand)", code: "en-NZ" },
  // English - Singapore
  { name: "English (Singapore)", code: "en-SG" },
  // English - United States
  { name: "English (United States)", code: "en-US" },
  // Esperanto - International Auxiliary Language
  // { name: 'Esperanto', code: 'eo' },
  // Spanish - Spain
  { name: "Espa\xF1ol", code: "es-ES" },
  // Spanish - Dominican Republic
  { name: "Espa\xF1ol (Rep\xFAblica Dominicana)", code: "es-DO" },
  // Spanish - Mexico
  { name: "Espa\xF1ol (M\xE9xico)", code: "es-MX" },
  // Spanish - United States
  { name: "Espa\xF1ol (Estados Unidos)", code: "es-US" },
  // Estonian - Estonia
  { name: "Eesti keel", code: "et-EE" },
  // Basque - Basque Country
  { name: "Euskara", code: "eu-ES" },
  // // Persian - Iran
  // { name: 'فارسی', code: 'fa-IR' }, // Disabled because RTL
  // Filipino - Philippines
  { name: "Wikang Filipino", code: "fil-PH" },
  // Finnish - Finland
  { name: "Suomi", code: "fi-FI" },
  // Faroese - Faroe Islands
  { name: "F\xF8royskt", code: "fo-FO" },
  // French - France
  { name: "Fran\xE7ais", code: "fr-FR" },
  // French - Canada
  { name: "Fran\xE7ais (Canada)", code: "fr-CA" },
  // French - Switzerland
  { name: "Fran\xE7ais (Suisse)", code: "fr-CH" },
  // West Frisian - Netherlands
  { name: "Frysk", code: "fy" },
  // Irish - Ireland
  { name: "Gaeilge", code: "ga-IE" },
  // Scottish Gaelic - Scotland (UK)
  { name: "G\xE0idhlig", code: "gd-GB" },
  // Galician - Galicia (Spain)
  { name: "Galego", code: "gl-ES" },
  // Konkani (Devanagari script) - India
  { name: "\u0915\u094B\u0902\u0915\u0923\u0940", code: "gom-Deva" },
  // Konkani (Latin script) - India
  { name: "Konkani", code: "gom-Latn" },
  // Gujarati - India
  { name: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0", code: "gu-IN" },
  // // Hebrew - Israel
  // { name: 'עברית', code: 'he-IL' }, // Disabled because RTL
  // Hindi - India
  { name: "\u0939\u093F\u0928\u094D\u0926\u0940", code: "hi" },
  // Croatian - Croatia
  { name: "Hrvatski jezik", code: "hr" },
  // Hungarian - Hungary
  { name: "Magyar nyelv", code: "hu-HU" },
  // Armenian - Armenia
  { name: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576", code: "hy-AM" },
  // Indonesian - Indonesia
  { name: "Bahasa Indonesia", code: "id-ID" },
  // Icelandic - Iceland
  { name: "\xCDslenska", code: "is-IS" },
  // Italian - Italy
  { name: "Italiano", code: "it-IT" },
  // Italian - Switzerland
  { name: "Italiano (Svizzera)", code: "it-CH" },
  // Japanese - Japan
  { name: "\u65E5\u672C\u8A9E", code: "ja-JP" },
  // Javanese - Indonesia
  { name: "\uA9A7\uA9B1\uA997\uA9AE", code: "jv" },
  // Georgian - Georgia
  { name: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8 \u10D4\u10DC\u10D0", code: "ka-GE" },
  // Kazakh - Kazakhstan
  { name: "\u049A\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456", code: "kk-KZ" },
  // Khmer - Cambodia
  { name: "\u1781\u17D2\u1798\u17C2\u179A", code: "km-KH" },
  // Kannada - India
  { name: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1", code: "kn-IN" },
  // Korean - South Korea
  { name: "\uD55C\uAD6D\uC5B4", code: "ko-KR" },
  // Kurdish - Kurdistan (Iraq, Iran, Syria, Turkey)
  { name: "Kurd\xEE", code: "ku" },
  // Kyrgyz - Kyrgyzstan
  { name: "\u041A\u044B\u0440\u0433\u044B\u0437 \u0442\u0438\u043B\u0438", code: "ky-KG" },
  // Luxembourgish - Luxembourg
  { name: "L\xEBtzebuergesch", code: "lb-LU" },
  // Lao - Laos
  { name: "\u0E9E\u0EB2\u0EAA\u0EB2\u0EA5\u0EB2\u0EA7", code: "lo-LA" },
  // Lithuanian - Lithuania
  { name: "Lietuvi\u0173 kalba", code: "lt-LT" },
  // Latvian - Latvia
  { name: "Latvie\u0161u valoda", code: "lv-LV" },
  // Macedonian - North Macedonia
  { name: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438 \u0458\u0430\u0437\u0438\u043A", code: "mk-MK" },
  // Malayalam - Kerala (India)
  { name: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02", code: "ml-IN" },
  // Māori - New Zealand
  { name: "Te Reo M\u0101ori", code: "mi-NZ" },
  // Montenegrin - Montenegro
  { name: "\u0426\u0440\u043D\u043E\u0433\u043E\u0440\u0441\u043A\u0438 \u0458\u0435\u0437\u0438\u043A", code: "cnr-ME" },
  // Marathi - Maharashtra (India)
  { name: "\u092E\u0930\u093E\u0920\u0940", code: "mr" },
  // Malay - Malaysia, Singapore, Brunei
  { name: "Bahasa Melayu", code: "ms" },
  // Maltese - Malta
  { name: "Malti", code: "mt-MT" },
  // Mongolian - Mongolia
  { name: "\u041C\u043E\u043D\u0433\u043E\u043B \u0445\u044D\u043B", code: "mn-MN" },
  // Burmese - Myanmar
  { name: "\u1019\u103C\u1014\u103A\u1019\u102C\u1005\u102C", code: "my-MM" },
  // Norwegian Bokmål - Norway
  { name: "Norsk bokm\xE5l", code: "nb" },
  // Nepali - Nepal and India
  { name: "\u0928\u0947\u092A\u093E\u0932\u0940", code: "ne" },
  // Dutch - Netherlands
  { name: "Nederlands", code: "nl-NL" },
  // Dutch - Belgium (Flemish)
  { name: "Nederlands (Belgi\xEB)", code: "nl-BE" },
  // Norwegian Nynorsk - Norway
  { name: "Nynorsk", code: "nn-NO" },
  // Occitan - Southern France, Monaco, Italy
  { name: "Occitan", code: "oc" },
  // Punjabi - Punjab (India and Pakistan)
  { name: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40", code: "pa" },
  // Polish - Poland
  { name: "Polski", code: "pl-PL" },
  // Portuguese - Portugal
  { name: "Portugu\xEAs", code: "pt-PT" },
  // Portuguese - Brazil
  { name: "Portugu\xEAs (Brasil)", code: "pt-BR" },
  // Romanian - Romania
  { name: "Rom\xE2n\u0103", code: "ro-RO" },
  // Russian - Russia
  { name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 \u044F\u0437\u044B\u043A", code: "ru-RU" },
  // Northern Sami - Northern Scandinavia
  { name: "Davvis\xE1megiella", code: "se" },
  // // Sindhi - Pakistan and India
  // { name: 'سنڌي', code: 'sd' }, // Disabled because RTL
  // Sinhala - Sri Lanka
  { name: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD", code: "si-LK" },
  // Slovak - Slovakia
  { name: "Slovensk\xFD jazyk", code: "sk-SK" },
  // Slovenian - Slovenia
  { name: "Slovenski jezik", code: "sl-SI" },
  // Albanian - Albania, Kosovo
  { name: "Shqip", code: "sq" },
  // Serbian - Serbia (Default)
  { name: "\u0421\u0440\u043F\u0441\u043A\u0438", code: "sr" },
  // Serbian - Serbia (Cyrillic script)
  { name: "\u0421\u0440\u043F\u0441\u043A\u0438 (\u045B\u0438\u0440\u0438\u043B\u0438\u0446\u0430)", code: "sr-Cyrl" },
  // Swati - Eswatini (Swaziland)
  { name: "SiSwati", code: "ss" },
  // Swahili - East Africa
  { name: "Kiswahili", code: "sw" },
  // Swedish - Sweden
  { name: "Svenska", code: "sv" },
  // Tamil - Tamil Nadu (India), Sri Lanka, Singapore
  { name: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD", code: "ta" },
  // Telugu - Andhra Pradesh, Telangana (India)
  { name: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41", code: "te" },
  // Tetum - East Timor
  { name: "Tetun", code: "tet" },
  // Tajik - Tajikistan
  { name: "\u0422\u043E\u04B7\u0438\u043A\u04E3", code: "tg" },
  // Thai - Thailand
  { name: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22", code: "th-TH" },
  // Turkmen - Turkmenistan
  { name: "T\xFCrkmen dili", code: "tk-TM" },
  // Tagalog - Philippines
  { name: "Wikang Tagalog", code: "tl-PH" },
  // Klingon - Constructed Language (Star Trek)
  { name: "tlhIngan Hol", code: "tlh" },
  // Turkish - Turkey
  { name: "T\xFCrk\xE7e", code: "tr-TR" },
  // Talossan - Constructed Language
  { name: "Talossan", code: "tzl" },
  // Tamazight (Tifinagh script) - North Africa
  { name: "\u2D5C\u2D30\u2D4E\u2D30\u2D63\u2D49\u2D56\u2D5C", code: "tzm" },
  // Tamazight (Latin script) - North Africa
  { name: "Tamazight", code: "tzm-Latn" },
  // // Uyghur - Xinjiang (China)
  // { name: 'ئۇيغۇرچە', code: 'ug-CN' }, // Disabled because RTL
  // Ukrainian - Ukraine
  { name: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430", code: "uk-UA" },
  // // Urdu - Pakistan and India
  // { name: 'اردو', code: 'ur-PK' }, // Disabled because RTL
  // Uzbek - Uzbekistan (Cyrillic script)
  { name: "\u040E\u0437\u0431\u0435\u043A \u0442\u0438\u043B\u0438", code: "uz-UZ" },
  // Uzbek - Uzbekistan (Latin script)
  { name: "O'zbek tili", code: "uz-Latn" },
  // Vietnamese - Vietnam
  { name: "Ti\u1EBFng Vi\u1EC7t", code: "vi-VN" },
  // Chinese - China
  { name: "\u4E2D\u6587", code: "zh-CN" },
  // Chinese - Simplified
  { name: "\u7B80\u4F53\u4E2D\u6587", code: "zh-Hans" },
  // Chinese - Traditional
  { name: "\u7E41\u9AD4\u4E2D\u6587", code: "zh-Hant" },
  // Chinese - Hong Kong
  { name: "\u4E2D\u6587 (\u9999\u6E2F)", code: "zh-HK" },
  // Chinese - Taiwan
  { name: "\u6B63\u9AD4\u4E2D\u6587 (\u53F0\u7063)", code: "zh-TW" },
  // Chinese - Macau
  { name: "\u4E2D\u6587 (\u6FB3\u9580)", code: "zh-MO" },
  // Yoruba - Nigeria, Benin, Togo
  { name: "Yor\xF9b\xE1", code: "yo" }
];


/***/ }),

/***/ "./public/app/features/profile/UserOrganizations.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserOrganizations: () => (/* binding */ UserOrganizations),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/ScrollContainer/ScrollContainer.tsx");






const UserOrganizations = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ isLoading, orgs, user, setUserOrg }) => {
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LoadingPlaceholder,
      {
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("profile.user-organizations.text-loading-organizations", "Loading organizations...")
      }
    );
  }
  if (orgs.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: "page-sub-heading", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "user-orgs.title", children: "Organizations" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ScrollContainer, { overflowY: "visible", overflowX: "auto", width: "100%", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: "filter-table form-inline", "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.UserProfile.orgsTable, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "user-orgs.name-column", children: "Name" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "user-orgs.role-column", children: "Role" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {})
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: orgs.map((org, index) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: org.name }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: org.role }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: "text-right", children: org.orgId === user?.orgId ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { variant: "secondary", size: "sm", disabled: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "user-orgs.current-org-button", children: "Current" }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button,
            {
              variant: "secondary",
              size: "sm",
              onClick: () => {
                setUserOrg(org);
              },
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "user-orgs.select-org-button", children: "Select organisation" })
            }
          ) })
        ] }, index);
      }) })
    ] }) })
  ] });
});
UserOrganizations.displayName = "UserOrganizations";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserOrganizations);


/***/ }),

/***/ "./public/app/features/profile/UserProfileEditForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserProfileEditForm: () => (/* binding */ UserProfileEditForm),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldSet.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/Form/Form.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/config.ts");







const { disableLoginForm } = app_core_config__WEBPACK_IMPORTED_MODULE_10__["default"];
const UserProfileEditForm = ({ user, isSavingUser, updateProfile }) => {
  const onSubmitProfileUpdate = (data) => {
    updateProfile(data);
  };
  const isExternalUser = (user && user.isExternal) ?? false;
  let authSource = isExternalUser && user && user.authLabels ? user.authLabels[0] : "";
  if (user?.isProvisioned) {
    authSource = "SCIM";
  }
  const lockMessage = authSource ? ` (Synced via ${authSource})` : "";
  const disabledEdit = disableLoginForm || isExternalUser;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_9__.Form, { onSubmit: onSubmitProfileUpdate, validateOn: "onBlur", children: ({ register, errors }) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.FieldSet, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("user-profile.fields.name-label", "Name") + lockMessage,
            invalid: !!errors.name,
            error: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "user-profile.fields.name-error", children: "Name is required" }),
            disabled: disabledEdit,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
              {
                ...register("name", { required: true }),
                id: "edit-user-profile-name",
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("user-profile.fields.name-label", "Name"),
                defaultValue: user?.name ?? "",
                suffix: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InputSuffix, {})
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("user-profile.fields.email-label", "Email") + lockMessage,
            invalid: !!errors.email,
            error: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "user-profile.fields.email-error", children: "Email is required" }),
            disabled: disabledEdit,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
              {
                ...register("email", { required: true }),
                id: "edit-user-profile-email",
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("user-profile.fields.email-label", "Email"),
                defaultValue: user?.email ?? "",
                suffix: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InputSuffix, {})
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("user-profile.fields.username-label", "Username") + lockMessage, disabled: disabledEdit, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
          {
            ...register("login"),
            id: "edit-user-profile-username",
            defaultValue: user?.login ?? "",
            placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("user-profile.fields.username-label", "Username") + lockMessage,
            suffix: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InputSuffix, {})
          }
        ) })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button,
        {
          variant: "primary",
          disabled: isSavingUser || disabledEdit,
          "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.components.UserProfile.profileSaveButton,
          type: "submit",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "common.save", children: "Save" })
        }
      )
    ] });
  } });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserProfileEditForm);
const InputSuffix = () => {
  return disableLoginForm ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip,
    {
      content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "profile.input-suffix.content-login-details-locked-because-managed-another",
        "Login details locked because they are managed in another system."
      ),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "lock" })
    }
  ) : null;
};


/***/ }),

/***/ "./public/app/features/profile/UserProfileEditPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserProfileEditPage: () => (/* binding */ UserProfileEditPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useMount.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/pluginExtensions.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/services/pluginExtensions/usePluginComponents.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_SharedPreferences_SharedPreferences__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/SharedPreferences/SharedPreferences.tsx");
/* harmony import */ var _UserOrganizations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/profile/UserOrganizations.tsx");
/* harmony import */ var _UserProfileEditForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/profile/UserProfileEditForm.tsx");
/* harmony import */ var _UserProfileEditTabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/profile/UserProfileEditTabs.tsx");
/* harmony import */ var _UserSessions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/profile/UserSessions.tsx");
/* harmony import */ var _UserTeams__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/profile/UserTeams.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/profile/state/actions.ts");















function mapStateToProps(state) {
  const userState = state.user;
  const { user, teams, orgs, sessions, teamsAreLoading, orgsAreLoading, sessionsAreLoading, isUpdating } = userState;
  return {
    orgsAreLoading,
    sessionsAreLoading,
    teamsAreLoading,
    orgs,
    sessions,
    teams,
    isUpdating,
    user
  };
}
const mapDispatchToProps = {
  initUserProfilePage: _state_actions__WEBPACK_IMPORTED_MODULE_13__.initUserProfilePage,
  revokeUserSession: _state_actions__WEBPACK_IMPORTED_MODULE_13__.revokeUserSession,
  changeUserOrg: _state_actions__WEBPACK_IMPORTED_MODULE_13__.changeUserOrg,
  updateUserProfile: _state_actions__WEBPACK_IMPORTED_MODULE_13__.updateUserProfile
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
function UserProfileEditPage({
  orgsAreLoading,
  sessionsAreLoading,
  teamsAreLoading,
  initUserProfilePage: initUserProfilePage2,
  orgs,
  sessions,
  teams,
  isUpdating,
  user,
  revokeUserSession: revokeUserSession2,
  changeUserOrg: changeUserOrg2,
  updateUserProfile: updateUserProfile2
}) {
  (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(() => initUserProfilePage2());
  const { components, isLoading } = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.usePluginComponents)({
    extensionPointId: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.PluginExtensionPoints.UserProfileTab
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__.Page, { navId: "profile/settings", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__.Page.Contents, { isLoading: !user || isLoading, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserProfileEditTabs__WEBPACK_IMPORTED_MODULE_10__.UserProfileEditTabs, { components, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", gap: 2, "data-testid": "user-profile-edit-page", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserProfileEditForm__WEBPACK_IMPORTED_MODULE_9__["default"], { updateProfile: updateUserProfile2, isSavingUser: isUpdating, user }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_SharedPreferences_SharedPreferences__WEBPACK_IMPORTED_MODULE_7__["default"], { resourceUri: "user", preferenceType: "user" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", gap: 6, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserTeams__WEBPACK_IMPORTED_MODULE_12__.UserTeams, { isLoading: teamsAreLoading, teams }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserOrganizations__WEBPACK_IMPORTED_MODULE_8__["default"], { isLoading: orgsAreLoading, setUserOrg: changeUserOrg2, orgs, user }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserSessions__WEBPACK_IMPORTED_MODULE_11__["default"], { isLoading: sessionsAreLoading, revokeUserSession: revokeUserSession2, sessions })
    ] })
  ] }) }) }) });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(UserProfileEditPage));


/***/ }),

/***/ "./public/app/features/profile/UserProfileEditTabs.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserProfileEditTabs: () => (/* binding */ UserProfileEditTabs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabsBar.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/Tab.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabContent.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");







const TAB_QUERY_PARAM = "tab";
const GENERAL_SETTINGS_TAB = "general";
function UserProfileEditTabs(props) {
  const { children, components } = props;
  const tabsById = useTabInfoById(components, children);
  const [activeTab, setActiveTab] = useActiveTab(tabsById);
  const showTabs = components.length > 0;
  if (showTabs === false) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.UserProfile.extensionPointTabs, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "column", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TabsBar, { children: Object.values(tabsById).map(({ tabId, title }) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tab,
        {
          label: title,
          active: activeTab?.tabId === tabId,
          onChangeTab: () => setActiveTab(tabId),
          "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.UserProfile.extensionPointTab(tabId)
        },
        tabId
      );
    }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TabContent, { children: Boolean(activeTab) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: activeTab?.components.map((Component, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {}, `${activeTab?.tabId}-${index}`)) }, activeTab?.tabId) })
  ] }) });
}
function useTabInfoById(components, general) {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const tabs = {
      [GENERAL_SETTINGS_TAB]: {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("user-profile.tabs.general", "General"),
        tabId: GENERAL_SETTINGS_TAB,
        components: [() => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: general })]
      }
    };
    return components.reduce((acc, component) => {
      const { title } = component.meta;
      const tabId = convertTitleToTabId(title);
      if (!acc[tabId]) {
        acc[tabId] = {
          title,
          tabId,
          components: []
        };
      }
      acc[tabId].components.push(component);
      return acc;
    }, tabs);
  }, [components, general]);
}
function useActiveTab(tabs) {
  const [queryParams, updateQueryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_8__.useQueryParams)();
  const activeTabId = convertQueryParamToTabId(queryParams[TAB_QUERY_PARAM]);
  const activeTab = tabs[activeTabId];
  const setActiveTab = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (tabId) => updateQueryParams({ [TAB_QUERY_PARAM]: tabId }),
    [updateQueryParams]
  );
  return [activeTab, setActiveTab];
}
function convertQueryParamToTabId(queryParam) {
  if (typeof queryParam !== "string") {
    return GENERAL_SETTINGS_TAB;
  }
  return convertTitleToTabId(queryParam);
}
function convertTitleToTabId(title) {
  return title.toLowerCase();
}


/***/ }),

/***/ "./public/app/features/profile/UserSessions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/ScrollContainer/ScrollContainer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/TagFilter/TagBadge.tsx");
/* harmony import */ var app_core_internationalization_dates__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/internationalization/dates.ts");









const UserSessions = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(({ isLoading, sessions, revokeUserSession }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LoadingPlaceholder, { text: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "user-sessions.loading", children: "Loading sessions..." }) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.wrapper, children: sessions.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: "page-sub-heading", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "profile.user-sessions.sessions", children: "Sessions" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.ScrollContainer, { overflowY: "visible", overflowX: "auto", width: "100%", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: "filter-table form-inline", "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.UserProfile.sessionsTable, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "user-session.seen-at-column", children: "Last seen" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "user-session.created-at-column", children: "Logged on" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "user-session.ip-column", children: "IP address" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "user-session.browser-column", children: "Browser & OS" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "user-session.identity-provider-column", children: "Identity Provider" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {})
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: sessions.map((session, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
        session.isActive ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "profile.user-sessions.now", children: "Now" }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: session.seenAt }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: (0,app_core_internationalization_dates__WEBPACK_IMPORTED_MODULE_11__.formatDate)(session.createdAt, { dateStyle: "long" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: session.clientIp }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans,
          {
            i18nKey: "profile.user-sessions.browser-details",
            values: { browser: session.browser, os: session.os, osVersion: session.osVersion },
            children: [
              "{{browser}}",
              " on ",
              "{{os}}",
              " ",
              "{{osVersion}}"
            ]
          }
        ) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: session.authModule && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_10__.TagBadge, { label: session.authModule, removeIcon: false, count: 0 }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
          {
            size: "sm",
            variant: "destructive",
            tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("user-session.revoke", "Revoke user session"),
            onClick: () => revokeUserSession(session.id),
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("user-session.revoke", "Revoke user session"),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "power" })
          }
        ) })
      ] }, index)) })
    ] }) })
  ] }) });
});
UserSessions.displayName = "UserSessions";
const getStyles = () => ({
  wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    maxWidth: "100%"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserSessions);


/***/ }),

/***/ "./public/app/features/profile/UserTeams.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserTeams: () => (/* binding */ UserTeams),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/ScrollContainer/ScrollContainer.tsx");





const UserTeams = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ isLoading, teams }) => {
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("profile.user-teams.text-loading-teams", "Loading teams...") });
  }
  if (teams.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: "page-sub-heading", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "profile.user-teams.teams", children: "Teams" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ScrollContainer, { overflowY: "visible", overflowX: "auto", width: "100%", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      "table",
      {
        className: "filter-table form-inline",
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("profile.user-teams.aria-label-user-teams-table", "User teams table"),
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {}),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "profile.user-teams.name", children: "Name" }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "profile.user-teams.email", children: "Email" }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "profile.user-teams.members", children: "Members" }) })
          ] }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: teams.map((team, index) => {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: "width-4 text-center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: "filter-table__avatar", src: team.avatarUrl, alt: "" }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: team.name }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: team.email }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: team.memberCount })
            ] }, index);
          }) })
        ]
      }
    ) })
  ] });
});
UserTeams.displayName = "UserTeams";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserTeams);


/***/ }),

/***/ "./public/app/features/profile/api.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   api: () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");


async function changePassword(payload) {
  try {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put("/api/user/password", payload);
  } catch (err) {
    console.error(err);
  }
}
function loadUser() {
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get("/api/user");
}
function loadTeams() {
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get("/api/user/teams");
}
function loadOrgs() {
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get("/api/user/orgs");
}
function loadSessions() {
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get("/api/user/auth-tokens");
}
async function revokeUserSession(tokenId) {
  await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post("/api/user/revoke-auth-token", {
    authTokenId: tokenId
  });
}
async function setUserOrg(org) {
  await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post("/api/user/using/" + org.orgId, {});
}
async function updateUserProfile(payload) {
  try {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put("/api/user", payload);
  } catch (err) {
    console.error(err);
  }
}
const api = {
  changePassword,
  revokeUserSession,
  loadUser,
  loadSessions,
  loadOrgs,
  loadTeams,
  setUserOrg,
  updateUserProfile
};


/***/ }),

/***/ "./public/app/features/profile/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changePassword: () => (/* binding */ changePassword),
/* harmony export */   changeUserOrg: () => (/* binding */ changeUserOrg),
/* harmony export */   initUserProfilePage: () => (/* binding */ initUserProfilePage),
/* harmony export */   loadUser: () => (/* binding */ loadUser),
/* harmony export */   revokeUserSession: () => (/* binding */ revokeUserSession),
/* harmony export */   updateUserProfile: () => (/* binding */ updateUserProfile)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/profile/api.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/profile/state/reducers.ts");




function changePassword(payload) {
  return async function(dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.setUpdating)({ updating: true }));
    await _api__WEBPACK_IMPORTED_MODULE_1__.api.changePassword(payload);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.setUpdating)({ updating: false }));
  };
}
function initUserProfilePage() {
  return async function(dispatch) {
    await dispatch(loadUser());
    dispatch(loadTeams());
    dispatch(loadOrgs());
    dispatch(loadSessions());
  };
}
function loadUser() {
  return async function(dispatch) {
    const user = await _api__WEBPACK_IMPORTED_MODULE_1__.api.loadUser();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.userLoaded)({ user }));
  };
}
function loadTeams() {
  return async function(dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.initLoadTeams)());
    const teams = await _api__WEBPACK_IMPORTED_MODULE_1__.api.loadTeams();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.teamsLoaded)({ teams }));
  };
}
function loadOrgs() {
  return async function(dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.initLoadOrgs)());
    const orgs = await _api__WEBPACK_IMPORTED_MODULE_1__.api.loadOrgs();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.orgsLoaded)({ orgs }));
  };
}
function loadSessions() {
  return async function(dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.initLoadSessions)());
    const sessions = await _api__WEBPACK_IMPORTED_MODULE_1__.api.loadSessions();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.sessionsLoaded)({ sessions }));
  };
}
function revokeUserSession(tokenId) {
  return async function(dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.setUpdating)({ updating: true }));
    await _api__WEBPACK_IMPORTED_MODULE_1__.api.revokeUserSession(tokenId);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.userSessionRevoked)({ tokenId }));
  };
}
function changeUserOrg(org) {
  return async function(dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.setUpdating)({ updating: true }));
    await _api__WEBPACK_IMPORTED_MODULE_1__.api.setUserOrg(org);
    window.location.href = _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.appSubUrl + "/profile";
  };
}
function updateUserProfile(payload) {
  return async function(dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.setUpdating)({ updating: true }));
    await _api__WEBPACK_IMPORTED_MODULE_1__.api.updateUserProfile(payload);
    await dispatch(loadUser());
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.setUpdating)({ updating: false }));
  };
}


/***/ })

}]);
//# sourceMappingURL=UserProfileEditPage.6ba2113363c990a1f871.js.map