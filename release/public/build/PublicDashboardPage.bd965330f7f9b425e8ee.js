"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PublicDashboardPage"],{

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

/***/ "./public/app/core/components/Login/LoginLayout.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InnerBox: () => (/* binding */ InnerBox),
/* harmony export */   LoginLayout: () => (/* binding */ LoginLayout),
/* harmony export */   getLoginStyles: () => (/* binding */ getLoginStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Branding_Branding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Branding/Branding.tsx");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Footer/Footer.tsx");








const InnerBox = ({ children, enterAnimation = true }) => {
  const loginStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getLoginStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(loginStyles.loginInnerBox, enterAnimation && loginStyles.enterAnimation), children });
};
const LoginLayout = ({ children, branding, isChangingPassword }) => {
  const loginStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getLoginStyles);
  const [startAnim, setStartAnim] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const subTitle = branding?.loginSubtitle ?? _Branding_Branding__WEBPACK_IMPORTED_MODULE_5__.Branding.GetLoginSubTitle();
  const loginTitle = branding?.loginTitle ?? _Branding_Branding__WEBPACK_IMPORTED_MODULE_5__.Branding.LoginTitle;
  const loginBoxBackground = branding?.loginBoxBackground || _Branding_Branding__WEBPACK_IMPORTED_MODULE_5__.Branding.LoginBoxBackground();
  const loginLogo = branding?.loginLogo;
  const hideEdition = branding?.hideEdition ?? _Branding_Branding__WEBPACK_IMPORTED_MODULE_5__.Branding.HideEdition;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => setStartAnim(true), []);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _Branding_Branding__WEBPACK_IMPORTED_MODULE_5__.Branding.LoginBackground,
    {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(loginStyles.container, startAnim && loginStyles.loginAnim, branding?.loginBackground),
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: loginStyles.loginMain, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(loginStyles.loginContent, loginBoxBackground, "login-content-box"), children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: loginStyles.loginLogoWrapper, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Branding_Branding__WEBPACK_IMPORTED_MODULE_5__.Branding.LoginLogo, { className: loginStyles.loginLogo, logo: loginLogo }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: loginStyles.titleWrapper, children: isChangingPassword ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", { className: loginStyles.mainTitle, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "login.layout.update-password", children: "Update your password" }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", { className: loginStyles.mainTitle, children: loginTitle }),
              subTitle && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: loginStyles.subTitle, children: subTitle })
            ] }) })
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: loginStyles.loginOuterBox, children })
        ] }) }),
        branding?.hideFooter ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__.Footer, { hideEdition, customLinks: branding?.footerLinks })
      ]
    }
  );
};
const flyInAnimation = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
from{
  opacity: 0;
  transform: translate(-60px, 0px);
}

to{
  opacity: 1;
  transform: translate(0px, 0px);
}`;
const getLoginStyles = (theme) => {
  return {
    loginMain: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%"
    }),
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      minHeight: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      flex: 1,
      minWidth: "100%",
      marginLeft: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }),
    loginAnim: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      ["&:before"]: {
        opacity: 1
      },
      [".login-content-box"]: {
        opacity: 1
      }
    }),
    submitButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      justifyContent: "center",
      width: "100%"
    }),
    loginLogo: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "100%",
      maxWidth: 60,
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        maxWidth: 100
      }
    }),
    loginLogoWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      padding: theme.spacing(3)
    }),
    titleWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      textAlign: "center"
    }),
    mainTitle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      fontSize: 22,
      [theme.breakpoints.up("sm")]: {
        fontSize: 32
      }
    }),
    subTitle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      fontSize: theme.typography.size.md,
      color: theme.colors.text.secondary
    }),
    loginContent: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      maxWidth: 478,
      width: `calc(100% - 2rem)`,
      display: "flex",
      alignItems: "stretch",
      flexDirection: "column",
      position: "relative",
      justifyContent: "flex-start",
      zIndex: 1,
      minHeight: 320,
      borderRadius: theme.shape.radius.lg,
      padding: theme.spacing(2, 0),
      opacity: 0,
      [theme.transitions.handleMotion("no-preference")]: {
        transition: "opacity 0.5s ease-in-out"
      },
      [theme.transitions.handleMotion("reduce")]: {
        opacity: 1
      },
      [theme.breakpoints.up("sm")]: {
        minHeight: theme.spacing(40),
        justifyContent: "center"
      }
    }),
    loginOuterBox: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      overflowY: "hidden",
      alignItems: "center",
      justifyContent: "center"
    }),
    loginInnerBox: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: theme.spacing(0, 2, 2, 2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flexGrow: 1,
      maxWidth: 415,
      width: "100%",
      transform: "translate(0px, 0px)",
      [theme.transitions.handleMotion("no-preference")]: {
        transition: "0.25s ease"
      }
    }),
    enterAnimation: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      [theme.transitions.handleMotion("no-preference")]: {
        animation: `${flyInAnimation} ease-out 0.2s`
      }
    })
  };
};


/***/ }),

/***/ "./public/app/core/log_events.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FIELD_CONFIG_CUSTOM_KEY: () => (/* binding */ FIELD_CONFIG_CUSTOM_KEY),
/* harmony export */   FIELD_CONFIG_OVERRIDES_KEY: () => (/* binding */ FIELD_CONFIG_OVERRIDES_KEY),
/* harmony export */   PanelLogEvents: () => (/* binding */ PanelLogEvents)
/* harmony export */ });

var PanelLogEvents = /* @__PURE__ */ ((PanelLogEvents2) => {
  PanelLogEvents2["FIELD_CONFIG_OVERRIDES_CHANGED_EVENT"] = "field config overrides changed";
  PanelLogEvents2["NEW_PANEL_OPTION_EVENT"] = "new panel option";
  PanelLogEvents2["PANEL_OPTION_CHANGED_EVENT"] = "panel option changed";
  PanelLogEvents2["NEW_DEFAULT_FIELD_CONFIG_EVENT"] = "new default field config";
  PanelLogEvents2["DEFAULT_FIELD_CONFIG_CHANGED_EVENT"] = "default field config changed";
  PanelLogEvents2["NEW_CUSTOM_FIELD_CONFIG_EVENT"] = "new custom field config";
  PanelLogEvents2["CUSTOM_FIELD_CONFIG_CHANGED_EVENT"] = "custom field config changed";
  PanelLogEvents2["MEASURE_PANEL_LOAD_TIME_EVENT"] = "measure panel load time";
  PanelLogEvents2["THRESHOLDS_COUNT_CHANGED_EVENT"] = "thresholds count changed";
  PanelLogEvents2["THRESHOLDS_MODE_CHANGED_EVENT"] = "thresholds mode changed";
  PanelLogEvents2["MAPPINGS_COUNT_CHANGED_EVENT"] = "mappings count changed";
  PanelLogEvents2["LINKS_COUNT_CHANGED_EVENT"] = "links count changed";
  PanelLogEvents2["PANEL_ERROR"] = "panel error";
  return PanelLogEvents2;
})(PanelLogEvents || {});
const FIELD_CONFIG_OVERRIDES_KEY = "overrides";
const FIELD_CONFIG_CUSTOM_KEY = "custom";


/***/ }),

/***/ "./public/app/features/dashboard-scene/pages/PublicDashboardScenePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublicDashboardScenePage: () => (/* binding */ PublicDashboardScenePage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/navModel.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/components/PageLoader/PageLoader.tsx");
/* harmony import */ var app_features_dashboard_components_PublicDashboard_PublicDashboardsFooter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/dashboard/components/PublicDashboard/PublicDashboardsFooter.tsx");
/* harmony import */ var app_features_dashboard_components_PublicDashboard_usePublicDashboardConfig__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/dashboard/components/PublicDashboard/usePublicDashboardConfig.tsx");
/* harmony import */ var app_features_dashboard_components_PublicDashboardNotAvailable_PublicDashboardNotAvailable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/dashboard/components/PublicDashboardNotAvailable/PublicDashboardNotAvailable.tsx");
/* harmony import */ var app_types_appNotifications__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/types/appNotifications.ts");
/* harmony import */ var app_types_dashboard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/types/dashboard.ts");
/* harmony import */ var _DashboardScenePageStateManager__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/dashboard-scene/pages/DashboardScenePageStateManager.ts");

















const selectors = _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.pages.PublicDashboardScene;
function PublicDashboardScenePage({ route }) {
  const { accessToken = "" } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__.useParams)();
  const stateManager = (0,_DashboardScenePageStateManager__WEBPACK_IMPORTED_MODULE_19__.getDashboardScenePageStateManager)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  const { dashboard, isLoading, loadError } = stateManager.useState();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    stateManager.loadDashboard({ uid: accessToken, route: app_types_dashboard__WEBPACK_IMPORTED_MODULE_18__.DashboardRoutes.Public });
    return () => {
      stateManager.clearState();
    };
  }, [stateManager, accessToken, route.routeName]);
  if (loadError) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PublicDashboardScenePageError, { error: loadError });
  }
  if (!dashboard) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__.Page, { layout: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.PageLayoutType.Custom, className: styles.loadingPage, "data-testid": selectors.loadingPage, children: isLoading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_13__["default"], {}) });
  }
  if (dashboard.state.controls?.state.hideTimeControls) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PublicDashboardSceneRenderer, { model: dashboard });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_scenes__WEBPACK_IMPORTED_MODULE_6__.UrlSyncContextProvider, { scene: dashboard, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PublicDashboardSceneRenderer, { model: dashboard }) });
}
function PublicDashboardSceneRenderer({ model }) {
  const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const { controls, title, body } = model.useState();
  const { timePicker, refreshPicker, hideTimeControls } = controls.useState();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  const conf = (0,app_features_dashboard_components_PublicDashboard_usePublicDashboardConfig__WEBPACK_IMPORTED_MODULE_15__.useGetPublicDashboardConfig)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    return refreshPicker.activate();
  }, [refreshPicker]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setIsActive(true);
    return model.activate();
  }, [model]);
  if (!isActive) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__.Page, { layout: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.PageLayoutType.Custom, className: styles.page, "data-testid": selectors.page, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.controls, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { alignItems: "center", children: [
        !conf.headerLogoHide && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.iconTitle, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Icon, { name: "grafana", size: "lg", "aria-hidden": true }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.title, children: title })
      ] }),
      !hideTimeControls && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(timePicker.Component, { model: timePicker }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(refreshPicker.Component, { model: refreshPicker })
      ] })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.body, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(body.Component, { model: body }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_dashboard_components_PublicDashboard_PublicDashboardsFooter__WEBPACK_IMPORTED_MODULE_14__.PublicDashboardFooter, {})
  ] });
}
function getStyles(theme) {
  return {
    loadingPage: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      justifyContent: "center"
    }),
    page: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: theme.spacing(0, 2)
    }),
    controls: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: theme.zIndex.navbarFixed,
      background: theme.colors.background.canvas,
      padding: theme.spacing(2, 0),
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        gap: theme.spacing(1),
        alignItems: "stretch"
      }
    }),
    iconTitle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        alignItems: "center"
      }
    }),
    title: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      display: "flex",
      fontSize: theme.typography.h4.fontSize,
      margin: 0
    }),
    body: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "body",
      display: "flex",
      flex: 1,
      flexDirection: "column",
      overflowY: "auto"
    })
  };
}
function PublicDashboardScenePageError({ error }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  const statusCode = error.status;
  const messageId = error.messageId;
  const message = error.message;
  const isPublicDashboardPaused = statusCode === 403 && messageId === "publicdashboards.notEnabled";
  const isPublicDashboardNotFound = statusCode === 404 && messageId === "publicdashboards.notFound";
  const isDashboardNotFound = statusCode === 404 && messageId === "publicdashboards.dashboardNotFound";
  const publicDashboardEnabled = isPublicDashboardNotFound ? void 0 : !isPublicDashboardPaused;
  const dashboardNotFound = isPublicDashboardNotFound || isDashboardNotFound;
  if (publicDashboardEnabled === false) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_dashboard_components_PublicDashboardNotAvailable_PublicDashboardNotAvailable__WEBPACK_IMPORTED_MODULE_16__.PublicDashboardNotAvailable, { paused: true });
  }
  if (dashboardNotFound) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_dashboard_components_PublicDashboardNotAvailable_PublicDashboardNotAvailable__WEBPACK_IMPORTED_MODULE_16__.PublicDashboardNotAvailable, {});
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__.Page, { layout: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.PageLayoutType.Custom, className: styles.loadingPage, "data-testid": selectors.loadingPage, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Box, { paddingY: 4, display: "flex", direction: "column", alignItems: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Alert, { severity: app_types_appNotifications__WEBPACK_IMPORTED_MODULE_17__.AppNotificationSeverity.Error, title: message, children: message }) }) });
}


/***/ }),

/***/ "./public/app/features/dashboard/components/AddLibraryPanelWidget/AddLibraryPanelWidget.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddLibraryPanelWidget: () => (/* binding */ AddLibraryPanelWidget)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/tinycolor2/esm/tinycolor.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _library_panels_components_LibraryPanelsSearch_LibraryPanelsSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx");







const AddLibraryPanelWidget = ({ panel, dashboard }) => {
  const onCancelAddPanel = (evt) => {
    evt.preventDefault();
    dashboard.removePanel(panel);
  };
  const onAddLibraryPanel = (panelInfo) => {
    const { gridPos } = panel;
    const newPanel = {
      ...panelInfo.model,
      gridPos,
      libraryPanel: panelInfo
    };
    dashboard.addPanel(newPanel);
    dashboard.removePanel(panel);
  };
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.wrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.callToAction, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.headerRow, "grid-drag-handle"), children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "library-panel.add-widget.title", children: "Add panel from panel library" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex-grow-1" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.IconButton,
        {
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
            "dashboard.add-library-panel-widget.aria-label-close-add-panel-widget",
            "Close 'Add Panel' widget"
          ),
          name: "times",
          onClick: onCancelAddPanel,
          tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard.add-library-panel-widget.tooltip-close-widget", "Close widget")
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_library_panels_components_LibraryPanelsSearch_LibraryPanelsSearch__WEBPACK_IMPORTED_MODULE_6__.LibraryPanelsSearch, { onClick: onAddLibraryPanel, variant: _library_panels_components_LibraryPanelsSearch_LibraryPanelsSearch__WEBPACK_IMPORTED_MODULE_6__.LibraryPanelsSearchVariant.Tight, showPanelFilter: true })
  ] }) });
};
const getStyles = (theme) => {
  const pulsate = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.keyframes)({
    "0%": {
      boxShadow: `0 0 0 2px ${theme.colors.background.canvas}, 0 0 0px 4px ${theme.colors.primary.main}`
    },
    "50%": {
      boxShadow: `0 0 0 2px ${theme.components.dashboard.background}, 0 0 0px 4px ${(0,tinycolor2__WEBPACK_IMPORTED_MODULE_2__["default"])(theme.colors.primary.main).darken(20).toHexString()}`
    },
    "100%": {
      boxShadow: `0 0 0 2px ${theme.components.dashboard.background}, 0 0 0px 4px  ${theme.colors.primary.main}`
    }
  });
  return {
    // wrapper is used to make sure box-shadow animation isn't cut off in dashboard page
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "100%",
      paddingTop: `${theme.spacing(0.5)}`
    }),
    headerRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      alignItems: "center",
      height: "38px",
      flexShrink: 0,
      width: "100%",
      fontSize: theme.typography.fontSize,
      fontWeight: theme.typography.fontWeightMedium,
      paddingLeft: `${theme.spacing(1)}`,
      [theme.transitions.handleMotion("no-preference", "reduce")]: {
        transition: "background-color 0.1s ease-in-out"
      },
      cursor: "move",
      "&:hover": {
        background: `${theme.colors.background.secondary}`
      }
    }),
    callToAction: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      backgroundColor: theme.components.panel.background,
      border: `1px solid ${theme.components.panel.borderColor}`,
      borderRadius: theme.shape.radius.default,
      display: "flex",
      flex: "1 1 0",
      flexDirection: "column",
      height: "100%",
      position: "relative",
      width: "100%",
      outline: "2px dotted transparent",
      outlineOffset: "2px",
      overflow: "hidden",
      [theme.transitions.handleMotion("no-preference", "reduce")]: {
        animation: `${pulsate} 2s ease infinite`
      }
    })
  };
};


/***/ }),

/***/ "./public/app/features/dashboard/components/DashboardLoading/DashboardFailed.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardFailed: () => (/* binding */ DashboardFailed),
/* harmony export */   styles: () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var app_core_utils_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/utils/errors.ts");
/* harmony import */ var app_types_appNotifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/appNotifications.ts");






const DashboardFailed = ({ initError }) => {
  if (!initError) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.dashboardLoading, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, { severity: app_types_appNotifications__WEBPACK_IMPORTED_MODULE_4__.AppNotificationSeverity.Error, title: initError.message, children: (0,app_core_utils_errors__WEBPACK_IMPORTED_MODULE_3__.getMessageFromError)(initError.error) }) });
};
const styles = {
  dashboardLoading: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    height: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  })
};


/***/ }),

/***/ "./public/app/features/dashboard/components/DashboardLoading/DashboardLoading.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardLoading: () => (/* binding */ DashboardLoading),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");






const DashboardLoading = ({ initPhase }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const cancelVariables = () => {
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.push("/");
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.dashboardLoading, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.dashboardLoadingText, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "column", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { alignItems: "center", justifyContent: "center", gap: 0.5, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Spinner, { inline: true }),
      " ",
      initPhase
    ] }),
    " ",
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { alignItems: "center", justifyContent: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { variant: "secondary", size: "md", icon: "repeat", onClick: cancelVariables, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "dashboard.dashboard-loading.cancel-loading-dashboard", children: "Cancel loading dashboard" }) }) })
  ] }) }) });
};
const getStyles = (theme) => {
  const slowStartThreshold = "0.5s";
  const invisibleToVisible = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
    0% { opacity: 0%; }
    100% { opacity: 100%; }
  `;
  return {
    dashboardLoading: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "60vh",
      display: "flex",
      opacity: "0%",
      alignItems: "center",
      justifyContent: "center",
      [theme.transitions.handleMotion("no-preference", "reduce")]: {
        animation: `${invisibleToVisible} 0s step-end ${slowStartThreshold} 1 normal forwards`
      }
    }),
    dashboardLoadingText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      fontSize: theme.typography.h4.fontSize
    })
  };
};


/***/ }),

/***/ "./public/app/features/dashboard/components/DashboardRow/DashboardRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardRow: () => (/* binding */ DashboardRow),
/* harmony export */   UnthemedDashboardRow: () => (/* binding */ UnthemedDashboardRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_features_dashboard_scene_utils_interactions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/dashboard-scene/utils/interactions.ts");
/* harmony import */ var app_plugins_datasource_dashboard_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/dashboard/constants.ts");
/* harmony import */ var img_grab_dark_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/img/grab_dark.svg");
/* harmony import */ var img_grab_light_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/img/grab_light.svg");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _RowOptions_RowOptionsButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/dashboard/components/RowOptions/RowOptionsButton.tsx");
















class UnthemedDashboardRow extends react__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor() {
    super(...arguments);
    this.onVariableUpdated = () => {
      this.forceUpdate();
    };
    this.onToggle = () => {
      this.props.dashboard.toggleRow(this.props.panel);
    };
    this.getWarning = () => {
      const panels = !!this.props.panel.panels?.length ? this.props.panel.panels : this.props.dashboard.getRowPanels((0,lodash__WEBPACK_IMPORTED_MODULE_2__.indexOf)(this.props.dashboard.panels, this.props.panel));
      const isAnyPanelUsingDashboardDS = panels.some((p) => p.datasource?.uid === app_plugins_datasource_dashboard_constants__WEBPACK_IMPORTED_MODULE_13__.SHARED_DASHBOARD_QUERY);
      if (isAnyPanelUsingDashboardDS) {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "dashboard.untheme-dashboard-row.dashboard-datasource", children: [
            "Panels in this row use the ",
            { SHARED_DASHBOARD_QUERY: app_plugins_datasource_dashboard_constants__WEBPACK_IMPORTED_MODULE_13__.SHARED_DASHBOARD_QUERY },
            " data source. These panels will reference the panel in the original row, not the ones in the repeated rows."
          ] }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.TextLink,
            {
              external: true,
              href: "https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/create-dashboard/#configure-repeating-rows",
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "dashboard.unthemed-dashboard-row.learn-more", children: "Learn more" })
            }
          )
        ] });
      }
      return void 0;
    };
    this.onUpdate = (title, repeat) => {
      this.props.panel.setProperty("title", title);
      this.props.panel.setProperty("repeat", repeat ?? void 0);
      this.props.panel.render();
      this.props.dashboard.processRepeats();
      this.forceUpdate();
    };
    this.onDelete = () => {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_11__["default"].publish(
        new _types_events__WEBPACK_IMPORTED_MODULE_16__.ShowConfirmModalEvent({
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("dashboard.unthemed-dashboard-row.title.delete-row", "Delete row"),
          text: "Are you sure you want to remove this row and all its panels?",
          altActionText: "Delete row only",
          icon: "trash-alt",
          onConfirm: () => {
            this.props.dashboard.removeRow(this.props.panel, true);
          },
          onAltAction: () => {
            this.props.dashboard.removeRow(this.props.panel, false);
          }
        })
      );
    };
  }
  componentDidMount() {
    this.sub = this.props.dashboard.events.subscribe(_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.RefreshEvent, this.onVariableUpdated);
  }
  componentWillUnmount() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
  render() {
    const title = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.getTemplateSrv)().replace(this.props.panel.title, this.props.panel.scopedVars, "text");
    const count = this.props.panel.panels ? this.props.panel.panels.length : 0;
    const panels = count === 1 ? "panel" : "panels";
    const canEdit = this.props.dashboard.meta.canEdit === true;
    const collapsed = this.props.panel.collapsed;
    const styles = getStyles(this.props.theme);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      "div",
      {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.dashboardRow, {
          [styles.dashboardRowCollapsed]: collapsed
        }),
        "data-testid": "dashboard-row-container",
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "button",
            {
              "aria-expanded": !collapsed,
              className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.title, "pointer"),
              type: "button",
              "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.DashboardRow.title(title),
              onClick: this.onToggle,
              children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { name: collapsed ? "angle-right" : "angle-down" }),
                title,
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  "span",
                  {
                    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.count, {
                      [styles.countCollapsed]: collapsed
                    }),
                    children: [
                      "(",
                      count,
                      " ",
                      panels,
                      ")"
                    ]
                  }
                )
              ]
            }
          ),
          canEdit && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.actions, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _RowOptions_RowOptionsButton__WEBPACK_IMPORTED_MODULE_17__.RowOptionsButton,
              {
                title: this.props.panel.title,
                repeat: this.props.panel.repeat,
                onUpdate: this.onUpdate,
                warning: this.getWarning()
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "button",
              {
                type: "button",
                className: "pointer",
                onClick: () => {
                  app_features_dashboard_scene_utils_interactions__WEBPACK_IMPORTED_MODULE_12__.DashboardInteractions.trackRemoveRowClick();
                  this.onDelete();
                },
                "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("dashboard.unthemed-dashboard-row.aria-label-delete-row", "Delete row"),
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { name: "trash-alt" })
              }
            )
          ] }),
          collapsed === true && /* disabling the a11y rules here as the button handles keyboard interactions */
          /* this is just to provide a better experience for mouse users */
          /* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "div",
            {
              className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)({
                [styles.toggleTargetCollapsed]: collapsed
              }),
              onClick: this.onToggle,
              children: "\xA0"
            }
          ),
          canEdit && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "div",
            {
              "data-testid": "dashboard-row-drag",
              className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.dragHandle, "grid-drag-handle", {
                [styles.dragHandleCollapsed]: collapsed
              })
            }
          )
        ]
      }
    );
  }
}
const DashboardRow = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.withTheme2)(UnthemedDashboardRow);
const getStyles = (theme) => {
  const dragHandle = theme.name === "dark" ? img_grab_dark_svg__WEBPACK_IMPORTED_MODULE_14__ : img_grab_light_svg__WEBPACK_IMPORTED_MODULE_15__;
  const actions = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.secondary,
    opacity: 0,
    [theme.transitions.handleMotion("no-preference", "reduce")]: {
      transition: "200ms opacity ease-in 200ms"
    },
    button: {
      color: theme.colors.text.secondary,
      paddingLeft: theme.spacing(2),
      background: "transparent",
      border: "none",
      "&:hover": {
        color: theme.colors.text.maxContrast
      }
    }
  });
  return {
    dashboardRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      alignItems: "center",
      height: "100%",
      "&:hover, &:focus-within": {
        [`.${actions}`]: {
          opacity: 1
        }
      }
    }),
    dashboardRowCollapsed: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      background: theme.components.panel.background
    }),
    toggleTargetCollapsed: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flex: 1,
      cursor: "pointer",
      marginRight: "15px"
    }),
    title: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flexGrow: 0,
      fontSize: theme.typography.h5.fontSize,
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.colors.text.primary,
      background: "transparent",
      border: "none",
      ".fa": {
        color: theme.colors.text.secondary,
        fontSize: theme.typography.size.xs,
        padding: theme.spacing(0, 1)
      }
    }),
    actions,
    count: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      paddingLeft: theme.spacing(2),
      color: theme.colors.text.secondary,
      fontStyle: "italic",
      fontSize: theme.typography.size.sm,
      fontWeight: "normal",
      display: "none"
    }),
    countCollapsed: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "inline-block"
    }),
    dragHandle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      cursor: "move",
      width: "16px",
      height: "100%",
      background: `url("${dragHandle}") no-repeat 50% 50%`,
      backgroundSize: "8px",
      visibility: "hidden",
      position: "absolute",
      top: 0,
      right: 0
    }),
    dragHandleCollapsed: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      visibility: "visible",
      opacity: 1
    })
  };
};


/***/ }),

/***/ "./public/app/features/dashboard/components/PublicDashboard/PublicDashboardsFooter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublicDashboardFooter: () => (/* binding */ PublicDashboardFooter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _usePublicDashboardConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/components/PublicDashboard/usePublicDashboardConfig.tsx");






const selectors = _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.PublicDashboard;
const PublicDashboardFooter = function() {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const conf = (0,_usePublicDashboardConfig__WEBPACK_IMPORTED_MODULE_4__.useGetPublicDashboardConfig)();
  return conf.footerHide ? null : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.footer, "data-testid": selectors.footer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", { className: styles.link, href: conf.footerLink, target: "_blank", rel: "noreferrer noopener", children: [
    conf.footerText,
    " ",
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: styles.logoImg, alt: "", src: conf.footerLogo })
  ] }) });
};
const getStyles = (theme) => ({
  footer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    justifyContent: "end",
    height: "30px",
    backgroundColor: theme.colors.background.canvas,
    position: "sticky",
    bottom: 0,
    zIndex: theme.zIndex.navbarFixed,
    padding: theme.spacing(0.5, 0)
  }),
  link: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    alignItems: "center"
  }),
  logoImg: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    height: "16px",
    marginLeft: theme.spacing(0.5)
  })
});


/***/ }),

/***/ "./public/app/features/dashboard/components/PublicDashboard/usePublicDashboardConfig.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setPublicDashboardConfigFn: () => (/* binding */ setPublicDashboardConfigFn),
/* harmony export */   useGetPublicDashboardConfig: () => (/* binding */ useGetPublicDashboardConfig)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var img_grafana_text_logo_dark_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/img/grafana_text_logo_dark.svg");
/* harmony import */ var img_grafana_text_logo_light_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/img/grafana_text_logo_light.svg");






const FOOTER_URL = "https://grafana.com/?src=grafananet&cnt=public-dashboards";
const GRAFANA_LOGO_LIGHT_URL = img_grafana_text_logo_light_svg__WEBPACK_IMPORTED_MODULE_4__;
const GRAFANA_LOGO_DARK_URL = img_grafana_text_logo_dark_svg__WEBPACK_IMPORTED_MODULE_3__;
const GRAFANA_LOGO_DEFAULT_VALUE = "grafana-logo";
const useGetConfig = (cfg) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const { footerHide, footerText, footerLink, footerLogo, headerLogoHide } = cfg || {
    footerHide: false,
    footerText: "Powered by",
    footerLogo: GRAFANA_LOGO_DEFAULT_VALUE,
    footerLink: FOOTER_URL,
    headerLogoHide: false
  };
  return {
    footerHide,
    footerText: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.text, children: footerText }),
    footerLogo: footerLogo === GRAFANA_LOGO_DEFAULT_VALUE ? theme.isDark ? GRAFANA_LOGO_LIGHT_URL : GRAFANA_LOGO_DARK_URL : footerLogo,
    footerLink,
    headerLogoHide
  };
};
let useGetPublicDashboardConfig = () => useGetConfig();
function setPublicDashboardConfigFn(cfg) {
  useGetPublicDashboardConfig = () => useGetConfig(cfg);
}
const getStyles = (theme) => ({
  text: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.secondary,
    fontSize: theme.typography.body.fontSize
  })
});


/***/ }),

/***/ "./public/app/features/dashboard/components/PublicDashboardNotAvailable/PublicDashboardNotAvailable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublicDashboardNotAvailable: () => (/* binding */ PublicDashboardNotAvailable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_e2e_selectors_src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _core_components_Branding_Branding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Branding/Branding.tsx");
/* harmony import */ var _core_components_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Login/LoginLayout.tsx");








const selectors = _grafana_e2e_selectors_src__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.PublicDashboard.NotAvailable;
const PublicDashboardNotAvailable = ({ paused }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const loginStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(_core_components_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_6__.getLoginStyles);
  const loginBoxBackground = _core_components_Branding_Branding__WEBPACK_IMPORTED_MODULE_5__.Branding.LoginBoxBackground();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_core_components_Branding_Branding__WEBPACK_IMPORTED_MODULE_5__.Branding.LoginBackground, { className: styles.container, "data-testid": selectors.container, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.box, loginBoxBackground), children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_core_components_Branding_Branding__WEBPACK_IMPORTED_MODULE_5__.Branding.LoginLogo, { className: loginStyles.loginLogo }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: styles.title, "data-testid": selectors.title, children: paused ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
      "dashboard.public-dashboard-not-available.paused",
      "This dashboard has been paused by the administrator"
    ) : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
      "dashboard.public-dashboard-not-available.does-not-exist",
      "The dashboard you are trying to access does not exist"
    ) }),
    paused && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: styles.description, "data-testid": selectors.pausedDescription, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "dashboard.public-dashboard-not-available.try-again-later", children: "Try again later" }) })
  ] }) });
};
const getStyles = (theme) => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    ":before": {
      opacity: 1
    }
  }),
  box: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "608px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: theme.spacing(4),
    zIndex: 1,
    borderRadius: theme.shape.borderRadius(4),
    padding: theme.spacing(6, 8),
    opacity: 1
  }),
  title: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontSize: theme.typography.h3.fontSize,
    textAlign: "center",
    margin: 0
  }),
  description: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontSize: theme.typography.h5.fontSize,
    margin: 0
  })
});


/***/ }),

/***/ "./public/app/features/dashboard/components/RowOptions/RowOptionsButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RowOptionsButton: () => (/* binding */ RowOptionsButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/ModalsContext.tsx");
/* harmony import */ var _RowOptionsModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/components/RowOptions/RowOptionsModal.tsx");





const RowOptionsButton = ({ repeat, title, onUpdate, warning }) => {
  const onUpdateChange = (hideModal) => (title2, repeat2) => {
    onUpdate(title2, repeat2);
    hideModal();
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ModalsController, { children: ({ showModal, hideModal }) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "button",
      {
        type: "button",
        className: "pointer",
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("dashboard.row-options-button.aria-label-row-options", "Row options"),
        onClick: () => {
          showModal(_RowOptionsModal__WEBPACK_IMPORTED_MODULE_4__.RowOptionsModal, {
            title,
            repeat,
            onDismiss: hideModal,
            onUpdate: onUpdateChange(hideModal),
            warning
          });
        },
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { name: "cog" })
      }
    );
  } });
};
RowOptionsButton.displayName = "RowOptionsButton";


/***/ }),

/***/ "./public/app/features/dashboard/components/RowOptions/RowOptionsForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RowOptionsForm: () => (/* binding */ RowOptionsForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/Form/Form.tsx");
/* harmony import */ var _RepeatRowSelect_RepeatRowSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/dashboard/components/RepeatRowSelect/RepeatRowSelect.tsx");








const RowOptionsForm = ({ repeat, title, warning, onUpdate, onCancel }) => {
  const [newRepeat, setNewRepeat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(repeat);
  const onChangeRepeat = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((name) => setNewRepeat(name), [setNewRepeat]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_9__.Form,
    {
      defaultValues: { title },
      onSubmit: (formData) => {
        onUpdate(formData.title, newRepeat);
      },
      children: ({ register }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard.row-options-form.label-title", "Title"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input, { ...register("title"), type: "text" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard.row-options-form.label-repeat-for", "Repeat for"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RepeatRowSelect_RepeatRowSelect__WEBPACK_IMPORTED_MODULE_10__.RepeatRowSelect, { repeat: newRepeat, onChange: onChangeRepeat }) }),
        warning && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Alert,
          {
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.Dashboard.Rows.Repeated.ConfigSection.warningMessage,
            severity: "warning",
            title: "",
            topSpacing: 3,
            bottomSpacing: 0,
            children: warning
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Modal.ButtonRow, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { type: "button", variant: "secondary", onClick: onCancel, fill: "outline", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "dashboard.row-options-form.cancel", children: "Cancel" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { type: "submit", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "dashboard.row-options-form.update", children: "Update" }) })
        ] })
      ] })
    }
  );
};


/***/ }),

/***/ "./public/app/features/dashboard/components/RowOptions/RowOptionsModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RowOptionsModal: () => (/* binding */ RowOptionsModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _RowOptionsForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/components/RowOptions/RowOptionsForm.tsx");






const RowOptionsModal = ({ repeat, title, onDismiss, onUpdate, warning }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal,
    {
      isOpen: true,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashboard.row-options-modal.title-row-options", "Row options"),
      icon: "copy",
      onDismiss,
      className: styles.modal,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RowOptionsForm__WEBPACK_IMPORTED_MODULE_5__.RowOptionsForm, { repeat, title, onCancel: onDismiss, onUpdate, warning })
    }
  );
};
const getStyles = () => ({
  modal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    label: "RowOptionsModal",
    width: "500px"
  })
});


/***/ }),

/***/ "./public/app/features/dashboard/containers/PublicDashboardPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/navModel.ts");
/* harmony import */ var _grafana_e2e_selectors_src__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/PageLayout/PageToolbar.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_context_GrafanaContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/context/GrafanaContext.ts");
/* harmony import */ var app_features_profile_state_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/profile/state/reducers.ts");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _components_DashNav_DashNavTimeControls__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/dashboard/components/DashNav/DashNavTimeControls.tsx");
/* harmony import */ var _components_DashboardLoading_DashboardFailed__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/dashboard/components/DashboardLoading/DashboardFailed.tsx");
/* harmony import */ var _components_DashboardLoading_DashboardLoading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/dashboard/components/DashboardLoading/DashboardLoading.tsx");
/* harmony import */ var _components_PublicDashboard_PublicDashboardsFooter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/dashboard/components/PublicDashboard/PublicDashboardsFooter.tsx");
/* harmony import */ var _components_PublicDashboard_usePublicDashboardConfig__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/dashboard/components/PublicDashboard/usePublicDashboardConfig.tsx");
/* harmony import */ var _components_PublicDashboardNotAvailable_PublicDashboardNotAvailable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/dashboard/components/PublicDashboardNotAvailable/PublicDashboardNotAvailable.tsx");
/* harmony import */ var _dashgrid_DashboardGrid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/dashboard/dashgrid/DashboardGrid.tsx");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var _state_initDashboard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/dashboard/state/initDashboard.ts");






















const selectors = _grafana_e2e_selectors_src__WEBPACK_IMPORTED_MODULE_6__.selectors.pages.PublicDashboard;
const Toolbar = ({ dashboard }) => {
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_12__.useDispatch)();
  const conf = (0,_components_PublicDashboard_usePublicDashboardConfig__WEBPACK_IMPORTED_MODULE_17__.useGetPublicDashboardConfig)();
  const onChangeTimeZone = (timeZone) => {
    dispatch((0,app_features_profile_state_reducers__WEBPACK_IMPORTED_MODULE_11__.updateTimeZoneForSession)(timeZone));
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.PageToolbar,
    {
      title: dashboard.title,
      pageIcon: !conf.headerLogoHide ? "grafana" : void 0,
      buttonOverflowAlignment: "right",
      children: !dashboard.timepicker.hidden && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_DashNav_DashNavTimeControls__WEBPACK_IMPORTED_MODULE_13__.DashNavTimeControls, { dashboard, onChangeTimeZone })
    }
  );
};
const PublicDashboardPage = (props) => {
  const { route } = props;
  const location = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  const { accessToken } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__.useParams)();
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_12__.useDispatch)();
  const context = (0,app_core_context_GrafanaContext__WEBPACK_IMPORTED_MODULE_10__.useGrafana)();
  const prevProps = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])({ ...props, location });
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const dashboardState = (0,app_types_store__WEBPACK_IMPORTED_MODULE_12__.useSelector)((store) => store.dashboard);
  const loadError = dashboardState.initError;
  const dashboard = dashboardState.getModel();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    dispatch(
      (0,_state_initDashboard__WEBPACK_IMPORTED_MODULE_21__.initDashboard)({
        routeName: route.routeName,
        fixUrl: false,
        accessToken,
        keybindingSrv: context.keybindings
      })
    );
  }, [route.routeName, accessToken, context.keybindings, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (prevProps?.location.search !== location.search) {
      const prevUrlParams = prevProps?.queryParams;
      const urlParams = props.queryParams;
      const updateTimeRangeFromUrl = (urlParams?.from !== prevUrlParams?.from || urlParams?.to !== prevUrlParams?.to) && !dashboard?.timepicker.hidden;
      if (updateTimeRangeFromUrl) {
        (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_20__.getTimeSrv)().updateTimeRangeFromUrl();
      }
      if (!prevUrlParams?.refresh && urlParams?.refresh) {
        (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_20__.getTimeSrv)().setAutoRefresh(urlParams.refresh);
      }
    }
  }, [prevProps, location.search, props.queryParams, dashboard?.timepicker.hidden, accessToken]);
  if (loadError) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PublicDashboardPageError, { error: loadError });
  }
  if (!dashboard) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_DashboardLoading_DashboardLoading__WEBPACK_IMPORTED_MODULE_15__.DashboardLoading, { initPhase: dashboardState.initPhase });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_9__.Page, { pageNav: { text: dashboard.title }, layout: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.PageLayoutType.Custom, "data-testid": selectors.page, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Toolbar, { dashboard }),
    dashboardState.initError && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_DashboardLoading_DashboardFailed__WEBPACK_IMPORTED_MODULE_14__.DashboardFailed, { initError: dashboardState.initError }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.gridContainer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dashgrid_DashboardGrid__WEBPACK_IMPORTED_MODULE_19__.DashboardGrid, { dashboard, isEditable: false, viewPanel: null, editPanel: null, hidePanelMenus: true }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.footer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PublicDashboard_PublicDashboardsFooter__WEBPACK_IMPORTED_MODULE_16__.PublicDashboardFooter, {}) })
  ] });
};
const getStyles = (theme) => ({
  gridContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    flex: 1,
    padding: theme.spacing(2, 2, 2, 2),
    overflow: "auto"
  }),
  footer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(0, 2)
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PublicDashboardPage);
function PublicDashboardPageError({ error }) {
  let statusCode;
  let messageId;
  if (typeof error.error === "object" && error.error !== null && "data" in error.error) {
    const typedError = error.error;
    statusCode = typedError.data.statusCode;
    messageId = typedError.data.messageId;
  }
  const isPublicDashboardPaused = statusCode === 403 && messageId === "publicdashboards.notEnabled";
  const isPublicDashboardNotFound = statusCode === 404 && messageId === "publicdashboards.notFound";
  const isDashboardNotFound = statusCode === 404 && messageId === "publicdashboards.dashboardNotFound";
  const publicDashboardEnabled = isPublicDashboardNotFound ? void 0 : !isPublicDashboardPaused;
  const dashboardNotFound = isPublicDashboardNotFound || isDashboardNotFound;
  if (publicDashboardEnabled === false) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PublicDashboardNotAvailable_PublicDashboardNotAvailable__WEBPACK_IMPORTED_MODULE_18__.PublicDashboardNotAvailable, { paused: true });
  }
  if (dashboardNotFound) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PublicDashboardNotAvailable_PublicDashboardNotAvailable__WEBPACK_IMPORTED_MODULE_18__.PublicDashboardNotAvailable, {});
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_DashboardLoading_DashboardFailed__WEBPACK_IMPORTED_MODULE_14__.DashboardFailed, { initError: error });
}


/***/ }),

/***/ "./public/app/features/dashboard/containers/PublicDashboardPageProxy.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _dashboard_scene_pages_PublicDashboardScenePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard-scene/pages/PublicDashboardScenePage.tsx");
/* harmony import */ var _PublicDashboardPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/containers/PublicDashboardPage.tsx");





function PublicDashboardPageProxy(props) {
  if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.featureToggles.publicDashboardsScene) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dashboard_scene_pages_PublicDashboardScenePage__WEBPACK_IMPORTED_MODULE_2__.PublicDashboardScenePage, { ...props });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PublicDashboardPage__WEBPACK_IMPORTED_MODULE_3__["default"], { ...props });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PublicDashboardPageProxy);


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/DashboardGrid.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardGrid: () => (/* binding */ DashboardGrid),
/* harmony export */   PANEL_FILTER_VARIABLE: () => (/* binding */ PANEL_FILTER_VARIABLE)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-grid-layout/index.js");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_features_variables_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/variables/types.ts");
/* harmony import */ var app_types_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _components_AddLibraryPanelWidget_AddLibraryPanelWidget__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/dashboard/components/AddLibraryPanelWidget/AddLibraryPanelWidget.tsx");
/* harmony import */ var _components_DashboardRow_DashboardRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/dashboard/components/DashboardRow/DashboardRow.tsx");
/* harmony import */ var _DashboardEmpty_DashboardEmpty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/dashboard/dashgrid/DashboardEmpty/DashboardEmpty.tsx");
/* harmony import */ var _DashboardPanel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/dashboard/dashgrid/DashboardPanel.tsx");

















const PANEL_FILTER_VARIABLE = "systemPanelFilterVar";
class DashboardGrid extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor(props) {
    super(props);
    this.panelMap = {};
    this.eventSubs = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    this.windowHeight = 1200;
    this.windowWidth = 1920;
    this.gridWidth = 0;
    /** Used to keep track of mobile panel layout position */
    this.lastPanelBottom = 0;
    this.isLayoutInitialized = false;
    this.onLayoutChange = (newLayout) => {
      if (this.state.panelFilter) {
        return;
      }
      for (const newPos of newLayout) {
        this.panelMap[newPos.i].updateGridPos(newPos, this.isLayoutInitialized);
      }
      if (this.isLayoutInitialized) {
        this.isLayoutInitialized = true;
      }
      this.props.dashboard.sortPanelsByGridPos();
      this.forceUpdate();
    };
    this.triggerForceUpdate = () => {
      this.forceUpdate();
    };
    this.updateGridPos = (item, layout) => {
      this.panelMap[item.i].updateGridPos(item);
    };
    this.onResize = (layout, oldItem, newItem) => {
      const panel = this.panelMap[newItem.i];
      panel.updateGridPos(newItem);
    };
    this.onResizeStop = (layout, oldItem, newItem) => {
      this.updateGridPos(newItem, layout);
    };
    this.onDragStop = (layout, oldItem, newItem) => {
      this.updateGridPos(newItem, layout);
    };
    /**
     * Without this hack the move animations are triggered on initial load and all panels fly into position.
     * This can be quite distracting and make the dashboard appear to less snappy.
     */
    this.onGetWrapperDivRef = (ref) => {
      if (ref && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.user.authenticatedBy !== "render") {
        setTimeout(() => {
          ref.classList.add("react-grid-layout--enable-move-animations");
        }, 50);
      }
    };
    this.rootEl = null;
    this.onMeasureRef = (rootEl) => {
      if (!rootEl) {
        if (this.rootEl && this.resizeObserver) {
          this.resizeObserver.unobserve(this.rootEl);
        }
        return;
      }
      this.rootEl = rootEl;
      this.resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          this.setState({ width: entry.contentRect.width });
        });
      });
      this.resizeObserver.observe(rootEl);
    };
    this.state = {
      panelFilter: void 0,
      width: document.body.clientWidth
      // initial very rough estimate
    };
  }
  componentDidMount() {
    const { dashboard } = this.props;
    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.featureToggles.panelFilterVariable) {
      for (const variable of dashboard.getVariables()) {
        if (variable.id === PANEL_FILTER_VARIABLE) {
          if ("query" in variable) {
            this.setPanelFilter(variable.query);
          }
          break;
        }
      }
      this.eventSubs.add(
        app_core_app_events__WEBPACK_IMPORTED_MODULE_6__["default"].subscribe(app_features_variables_types__WEBPACK_IMPORTED_MODULE_9__.VariablesChanged, (e) => {
          if (e.payload.variable?.id === PANEL_FILTER_VARIABLE) {
            if ("current" in e.payload.variable) {
              let variable = e.payload.variable.current;
              if ("value" in variable && typeof variable.value === "string") {
                this.setPanelFilter(variable.value);
              }
            }
          }
        })
      );
    }
    this.eventSubs.add(dashboard.events.subscribe(app_types_events__WEBPACK_IMPORTED_MODULE_10__.DashboardPanelsChangedEvent, this.triggerForceUpdate));
  }
  componentWillUnmount() {
    this.eventSubs.unsubscribe();
  }
  setPanelFilter(regex) {
    let panelFilter = void 0;
    if (regex.length > 0) {
      panelFilter = new RegExp(regex, "i");
    }
    this.setState({
      panelFilter
    });
  }
  buildLayout() {
    const layout = [];
    this.panelMap = {};
    const { panelFilter } = this.state;
    let count = 0;
    for (const panel of this.props.dashboard.panels) {
      if (!panel.key) {
        panel.key = `panel-${panel.id}-${Date.now()}`;
      }
      panel.title = panel.title?.substring(0, 5e3);
      this.panelMap[panel.key] = panel;
      if (!panel.gridPos) {
        console.log("panel without gridpos");
        continue;
      }
      const panelPos = {
        i: panel.key,
        x: panel.gridPos.x,
        y: panel.gridPos.y,
        w: panel.gridPos.w,
        h: panel.gridPos.h
      };
      if (panel.type === "row") {
        panelPos.w = app_core_constants__WEBPACK_IMPORTED_MODULE_7__.GRID_COLUMN_COUNT;
        panelPos.h = 1;
        panelPos.isResizable = false;
        panelPos.isDraggable = panel.collapsed;
      }
      if (!panelFilter) {
        layout.push(panelPos);
      } else {
        if (panelFilter.test(panel.title)) {
          panelPos.isResizable = false;
          panelPos.isDraggable = false;
          panelPos.x = count % 2 * app_core_constants__WEBPACK_IMPORTED_MODULE_7__.GRID_COLUMN_COUNT;
          panelPos.y = Math.floor(count / 2);
          layout.push(panelPos);
          count++;
        }
      }
    }
    return layout;
  }
  getPanelScreenPos(panel, gridWidth) {
    let top = 0;
    if (gridWidth < _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.theme2.breakpoints.values.md) {
      top = this.lastPanelBottom + app_core_constants__WEBPACK_IMPORTED_MODULE_7__.GRID_CELL_VMARGIN;
    } else {
      top = translateGridHeightToScreenHeight(panel.gridPos.y) + app_core_constants__WEBPACK_IMPORTED_MODULE_7__.GRID_CELL_VMARGIN;
    }
    this.lastPanelBottom = top + translateGridHeightToScreenHeight(panel.gridPos.h);
    return { top, bottom: this.lastPanelBottom };
  }
  renderPanels(gridWidth, isDashboardDraggable) {
    const { panelFilter } = this.state;
    const panelElements = [];
    this.lastPanelBottom = 0;
    if (this.gridWidth !== gridWidth) {
      this.windowHeight = window.innerHeight ?? 1e3;
      this.windowWidth = window.innerWidth;
      this.gridWidth = gridWidth;
    }
    for (const panel of this.props.dashboard.panels) {
      const panelClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({ "react-grid-item--fullscreen": panel.isViewing });
      const p = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        GrafanaGridItem,
        {
          className: panelClasses,
          "data-panelid": panel.id,
          gridPos: panel.gridPos,
          gridWidth,
          windowHeight: this.windowHeight,
          windowWidth: this.windowWidth,
          isViewing: panel.isViewing,
          children: (width, height) => {
            return this.renderPanel(panel, width, height, isDashboardDraggable);
          }
        },
        panel.key
      );
      if (!panelFilter) {
        panelElements.push(p);
      } else {
        if (panelFilter.test(panel.title)) {
          panelElements.push(p);
        }
      }
    }
    return panelElements;
  }
  renderPanel(panel, width, height, isDraggable) {
    if (panel.type === "row") {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_DashboardRow_DashboardRow__WEBPACK_IMPORTED_MODULE_12__.DashboardRow, { panel, dashboard: this.props.dashboard }, panel.key);
    }
    if (panel.type === "add-library-panel") {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AddLibraryPanelWidget_AddLibraryPanelWidget__WEBPACK_IMPORTED_MODULE_11__.AddLibraryPanelWidget, { panel, dashboard: this.props.dashboard }, panel.key);
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _DashboardPanel__WEBPACK_IMPORTED_MODULE_14__.DashboardPanel,
      {
        stateKey: panel.key,
        panel,
        dashboard: this.props.dashboard,
        isEditing: panel.isEditing,
        isViewing: panel.isViewing,
        isDraggable,
        width,
        height,
        hideMenu: this.props.hidePanelMenus
      },
      panel.key
    );
  }
  render() {
    const { isEditable, dashboard } = this.props;
    const { width } = this.state;
    if (dashboard.panels.length === 0) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DashboardEmpty_DashboardEmpty__WEBPACK_IMPORTED_MODULE_13__["default"], { dashboard, canCreate: isEditable });
    }
    const draggable = width <= _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.theme2.breakpoints.values.md ? false : isEditable;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "div",
      {
        ref: this.onMeasureRef,
        style: {
          flex: "1 1 auto",
          position: "relative",
          zIndex: 1,
          display: this.props.editPanel ? "none" : void 0
        },
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width, height: "100%" }, ref: this.onGetWrapperDivRef, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          (react_grid_layout__WEBPACK_IMPORTED_MODULE_3___default()),
          {
            width,
            isDraggable: draggable,
            isResizable: isEditable,
            containerPadding: [0, 0],
            useCSSTransforms: true,
            margin: [app_core_constants__WEBPACK_IMPORTED_MODULE_7__.GRID_CELL_VMARGIN, app_core_constants__WEBPACK_IMPORTED_MODULE_7__.GRID_CELL_VMARGIN],
            cols: app_core_constants__WEBPACK_IMPORTED_MODULE_7__.GRID_COLUMN_COUNT,
            rowHeight: app_core_constants__WEBPACK_IMPORTED_MODULE_7__.GRID_CELL_HEIGHT,
            draggableHandle: ".grid-drag-handle",
            draggableCancel: ".grid-drag-cancel",
            layout: this.buildLayout(),
            onDragStop: this.onDragStop,
            onResize: this.onResize,
            onResizeStop: this.onResizeStop,
            onLayoutChange: this.onLayoutChange,
            children: this.renderPanels(width, draggable)
          }
        ) })
      }
    );
  }
}
const GrafanaGridItem = react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((props, ref) => {
  const theme = _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.theme2;
  let width = 100;
  let height = 100;
  const { gridWidth, gridPos, isViewing, windowHeight, windowWidth, ...divProps } = props;
  const style = props.style ?? {};
  if (isViewing) {
    width = gridWidth;
    height = windowHeight * 0.85;
    style.height = height;
    style.width = "100%";
  } else if (windowWidth < theme.breakpoints.values.md) {
    width = props.gridWidth;
    height = translateGridHeightToScreenHeight(gridPos.h);
    style.height = height;
    style.width = "100%";
  } else {
    if (props.style) {
      const { width: styleWidth, height: styleHeight } = props.style;
      if (styleWidth != null) {
        width = typeof styleWidth === "number" ? styleWidth : parseFloat(styleWidth);
      }
      if (styleHeight != null) {
        height = typeof styleHeight === "number" ? styleHeight : parseFloat(styleHeight);
      }
    }
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ...divProps, style: { ...divProps.style }, ref, children: [props.children[0](width, height), props.children.slice(1)] });
});
function translateGridHeightToScreenHeight(gridHeight) {
  return gridHeight * (app_core_constants__WEBPACK_IMPORTED_MODULE_7__.GRID_CELL_HEIGHT + app_core_constants__WEBPACK_IMPORTED_MODULE_7__.GRID_CELL_VMARGIN) - app_core_constants__WEBPACK_IMPORTED_MODULE_7__.GRID_CELL_VMARGIN;
}
GrafanaGridItem.displayName = "GridItemWithDimensions";


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/DashboardPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardPanel: () => (/* binding */ DashboardPanel),
/* harmony export */   DashboardPanelUnconnected: () => (/* binding */ DashboardPanelUnconnected)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _panel_state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/panel/state/actions.ts");
/* harmony import */ var _panel_state_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/panel/state/reducers.ts");
/* harmony import */ var _LazyLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/dashgrid/LazyLoader.tsx");
/* harmony import */ var _PanelStateWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelStateWrapper.tsx");








const mapStateToProps = (state, props) => {
  const panelState = state.panels[props.stateKey];
  if (!panelState) {
    return { plugin: void 0 };
  }
  return {
    plugin: panelState.plugin,
    instanceState: panelState.instanceState
  };
};
const mapDispatchToProps = {
  initPanelState: _panel_state_actions__WEBPACK_IMPORTED_MODULE_3__.initPanelState,
  setPanelInstanceState: _panel_state_reducers__WEBPACK_IMPORTED_MODULE_4__.setPanelInstanceState
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);
class DashboardPanelUnconnected extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    this.onInstanceStateChange = (value) => {
      this.props.setPanelInstanceState({ key: this.props.stateKey, value });
    };
    this.onVisibilityChange = (v) => {
      this.props.panel.isInView = v;
    };
    this.onPanelLoad = () => {
      if (!this.props.plugin) {
        this.props.initPanelState(this.props.panel);
      }
    };
    this.renderPanel = ({ isInView }) => {
      const {
        dashboard,
        panel,
        isViewing,
        isEditing,
        width,
        height,
        plugin,
        timezone,
        hideMenu,
        isDraggable = true
      } = this.props;
      if (!plugin) {
        return null;
      }
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _PanelStateWrapper__WEBPACK_IMPORTED_MODULE_6__.PanelStateWrapper,
        {
          plugin,
          panel,
          dashboard,
          isViewing,
          isEditing,
          isInView,
          isDraggable,
          width,
          height,
          onInstanceStateChange: this.onInstanceStateChange,
          timezone,
          hideMenu
        }
      );
    };
  }
  static {
    this.defaultProps = {
      lazy: true
    };
  }
  componentDidMount() {
    this.props.panel.isInView = !this.props.lazy;
    if (!this.props.lazy) {
      this.onPanelLoad();
    }
  }
  render() {
    const { width, height, lazy } = this.props;
    return lazy ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LazyLoader__WEBPACK_IMPORTED_MODULE_5__.LazyLoader, { width, height, onChange: this.onVisibilityChange, onLoad: this.onPanelLoad, children: this.renderPanel }) : this.renderPanel({ isInView: true });
  }
}
const DashboardPanel = connector(DashboardPanelUnconnected);


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/LazyLoader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyLoader: () => (/* binding */ LazyLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useEffectOnce.js");




function LazyLoader({ children, width, height, onLoad, onChange }) {
  const id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
  const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isInView, setIsInView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(() => {
    LazyLoader.addCallback(id, (entry) => {
      if (!loaded && entry.isIntersecting) {
        setLoaded(true);
        onLoad?.();
      }
      setIsInView(entry.isIntersecting);
      onChange?.(entry.isIntersecting);
    });
    const wrapperEl = wrapperRef.current;
    if (wrapperEl) {
      LazyLoader.observer.observe(wrapperEl);
    }
    return () => {
      delete LazyLoader.callbacks[id];
      wrapperEl && LazyLoader.observer.unobserve(wrapperEl);
      if (Object.keys(LazyLoader.callbacks).length === 0) {
        LazyLoader.observer.disconnect();
      }
    };
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id, ref: wrapperRef, style: { width, height }, children: loaded && (typeof children === "function" ? children({ isInView }) : children) });
}
const callbacks = {};
LazyLoader.callbacks = callbacks;
LazyLoader.addCallback = (id, c) => LazyLoader.callbacks[id] = c;
LazyLoader.observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (LazyLoader.callbacks[entry.target.id]) {
        LazyLoader.callbacks[entry.target.id](entry);
      }
    }
  },
  { rootMargin: "100px" }
);


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenu.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelHeaderMenu: () => (/* binding */ PanelHeaderMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/Menu.tsx");




function PanelHeaderMenu({ items }) {
  const renderItems = (items2) => {
    return items2.map((item) => {
      switch (item.type) {
        case "divider":
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Menu.Divider, {}, item.text);
        case "group":
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Menu.Group, { label: item.text, children: item.subMenu ? renderItems(item.subMenu) : void 0 }, item.text);
        default:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Menu.Item,
            {
              label: item.text,
              icon: item.iconClassName,
              childItems: item.subMenu ? renderItems(item.subMenu) : void 0,
              url: item.href,
              onClick: item.onClick,
              shortcut: item.shortcut,
              testId: _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.components.Panels.Panel.menuItems(item.text)
            },
            item.text
          );
      }
    });
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Menu, { children: renderItems(items) });
}


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuProvider.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelHeaderMenuProvider: () => (/* binding */ PanelHeaderMenuProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/datetime/common.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/pluginExtensions.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/pluginExtensions/usePluginLinks.ts");
/* harmony import */ var _utils_getPanelMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/utils/getPanelMenu.ts");





function PanelHeaderMenuProvider({ panel, dashboard, loadingState, children }) {
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => createExtensionContext(panel, dashboard), [panel, dashboard]);
  const { links } = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.usePluginLinks)({
    extensionPointId: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginExtensionPoints.DashboardPanelMenu,
    context,
    limitPerPlugin: 3
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setItems((0,_utils_getPanelMenu__WEBPACK_IMPORTED_MODULE_4__.getPanelMenu)(dashboard, panel, links));
  }, [dashboard, panel, loadingState, setItems, links]);
  return children({ items });
}
function createExtensionContext(panel, dashboard) {
  return {
    id: panel.id,
    pluginId: panel.type,
    title: panel.title,
    timeRange: dashboard.time,
    timeZone: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getTimeZone)({
      timeZone: dashboard.timezone
    }),
    dashboard: {
      uid: dashboard.uid,
      title: dashboard.title,
      tags: Array.from(dashboard.tags)
    },
    targets: panel.targets,
    scopedVars: panel.scopedVars,
    data: panel.getQueryRunner().getLastResult()
  };
}


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelHeaderMenuWrapper: () => (/* binding */ PanelHeaderMenuWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _PanelHeaderMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenu.tsx");
/* harmony import */ var _PanelHeaderMenuProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuProvider.tsx");




function PanelHeaderMenuWrapper({ style, panel, dashboard, loadingState }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PanelHeaderMenuProvider__WEBPACK_IMPORTED_MODULE_2__.PanelHeaderMenuProvider, { panel, dashboard, loadingState, children: ({ items }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PanelHeaderMenu__WEBPACK_IMPORTED_MODULE_1__.PanelHeaderMenu, { style, items }) });
}


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderTitleItems.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelHeaderTitleItems: () => (/* binding */ PanelHeaderTitleItems)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/alerts.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/DateTimePickers/TimeRangePicker.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _PanelLinks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelLinks.tsx");
/* harmony import */ var _PanelHeaderNotices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderNotices.tsx");







function PanelHeaderTitleItems(props) {
  const { alertState, data, panelId, onShowPanelLinks, panelLinks } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const alertStateItem = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip, { content: alertState ?? "unknown", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.PanelChrome.TitleItem,
    {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)({
        [styles.ok]: alertState === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AlertState.OK,
        [styles.pending]: alertState === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AlertState.Pending || alertState === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AlertState.Recovering,
        [styles.alerting]: alertState === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AlertState.Alerting
      }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: alertState === "alerting" ? "heart-break" : "heart", size: "md" })
    }
  ) });
  const timeshift = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: data.request && data.request.timeInfo && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip, { content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TimePickerTooltip, { timeRange: data.request?.range, timeZone: data.request?.timezone }), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.PanelChrome.TitleItem, { className: styles.timeshift, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "clock-nine", size: "md" }),
    " ",
    data.request?.timeInfo
  ] }) }) });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    panelLinks && panelLinks.length > 0 && onShowPanelLinks && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PanelLinks__WEBPACK_IMPORTED_MODULE_8__.PanelLinks, { onShowPanelLinks, panelLinks }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PanelHeaderNotices__WEBPACK_IMPORTED_MODULE_9__.PanelHeaderNotices, { panelId, frames: data.series }),
    timeshift,
    alertState && alertStateItem
  ] });
}
const getStyles = (theme) => {
  return {
    ok: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.success.text,
      "&:hover": {
        color: theme.colors.emphasize(theme.colors.success.text, 0.03)
      }
    }),
    pending: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.warning.text,
      "&:hover": {
        color: theme.colors.emphasize(theme.colors.warning.text, 0.03)
      }
    }),
    alerting: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.error.text,
      "&:hover": {
        color: theme.colors.emphasize(theme.colors.error.text, 0.03)
      }
    }),
    timeshift: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.text.link,
      gap: theme.spacing(0.5),
      whiteSpace: "nowrap",
      "&:hover": {
        color: theme.colors.emphasize(theme.colors.text.link, 0.03)
      }
    }),
    angularNotice: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.warning.text
    })
  };
};


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelLinks.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelLinks: () => (/* binding */ PanelLinks)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/Menu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/ToolbarButton/ToolbarButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Dropdown/Dropdown.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





function PanelLinks({ panelLinks, onShowPanelLinks }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const getLinksContent = () => {
    const interpolatedLinks = onShowPanelLinks();
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Menu, { children: interpolatedLinks?.map((link, idx) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, { label: link.title, url: link.href, target: link.target, onClick: link.onClick }, idx);
    }) });
  };
  if (panelLinks.length === 1) {
    const linkModel = onShowPanelLinks()[0];
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.PanelChrome.TitleItem,
      {
        href: linkModel.href,
        onClick: linkModel.onClick,
        target: linkModel.target,
        title: linkModel.title,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "external-link-alt", size: "md" })
      }
    );
  } else {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Dropdown, { overlay: getLinksContent, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton,
      {
        icon: "external-link-alt",
        iconSize: "md",
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashboard.panel-links.aria-label-panel-links", "Panel links"),
        className: styles.menuTrigger
      }
    ) });
  }
}
const getStyles = (theme) => {
  return {
    menuTrigger: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "100%",
      background: "inherit",
      border: "none",
      borderRadius: `${theme.shape.radius.default}`,
      cursor: "context-menu"
    })
  };
};


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelLoadTimeMonitor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelLoadTimeMonitor: () => (/* binding */ PanelLoadTimeMonitor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/sdk/registerFaro.js");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_log_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/log_events.ts");





const PanelLoadTimeMonitor = (props) => {
  const startLoadTime = performance.now();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!app_core_config__WEBPACK_IMPORTED_MODULE_2__.config.grafanaJavascriptAgent.enabled) {
      return;
    }
    requestAnimationFrame(() => {
      setTimeout(() => {
        _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_1__.faro.api.pushMeasurement(
          {
            type: app_core_log_events__WEBPACK_IMPORTED_MODULE_3__.PanelLogEvents.MEASURE_PANEL_LOAD_TIME_EVENT,
            values: {
              start_loading_time_ms: startLoadTime,
              load_time_ms: performance.now() - startLoadTime
            }
          },
          {
            context: {
              panel_type: props.panelType,
              panel_id: String(props.panelId),
              panel_title: props.panelTitle
            }
          }
        );
      }, 0);
    });
    return;
  }, []);
  return null;
};


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelStateWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelStateWrapper: () => (/* binding */ PanelStateWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/dataframe/processDataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/events/common.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/datetime/moment_wrapper.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/context/plugins/PluginContextProvider.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-data/src/types/app.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-data/src/types/time.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-data/src/types/dashboard.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/PanelContext.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/ErrorBoundary/ErrorBoundary.tsx");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_profiler__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/core/profiler.ts");
/* harmony import */ var app_features_annotations_api__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/annotations/api.ts");
/* harmony import */ var app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var app_features_variables_adhoc_actions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/variables/adhoc/actions.ts");
/* harmony import */ var app_plugins_datasource_grafana_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/plugins/datasource/grafana/utils.ts");
/* harmony import */ var app_plugins_panel_timeseries_overrides_colorSeriesConfigFactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/plugins/panel/timeseries/overrides/colorSeriesConfigFactory.ts");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var app_types_events__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var _utils_getPanelChromeProps__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/dashboard/utils/getPanelChromeProps.tsx");
/* harmony import */ var _utils_loadSnapshotData__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./public/app/features/dashboard/utils/loadSnapshotData.ts");
/* harmony import */ var _PanelHeader_PanelHeaderMenuWrapper__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuWrapper.tsx");
/* harmony import */ var _PanelLoadTimeMonitor__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelLoadTimeMonitor.tsx");
/* harmony import */ var _SeriesVisibilityConfigFactory__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./public/app/features/dashboard/dashgrid/SeriesVisibilityConfigFactory.ts");
/* harmony import */ var _liveTimer__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("./public/app/features/dashboard/dashgrid/liveTimer.ts");
/* harmony import */ var _panelOptionsLogger__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("./public/app/features/dashboard/dashgrid/panelOptionsLogger.ts");




























const DEFAULT_PLUGIN_ERROR = "Error in plugin";
class PanelStateWrapper extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor(props) {
    super(props);
    this.timeSrv = (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_29__.getTimeSrv)();
    this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    this.eventFilter = { onlyLocal: true };
    this.panelOptionsLogger = void 0;
    // Due to a mutable panel model we get the sync settings via function that proactively reads from the model
    this.getSync = () => this.props.isEditing ? _grafana_data__WEBPACK_IMPORTED_MODULE_11__.DashboardCursorSync.Off : this.props.dashboard.graphTooltip;
    this.onInstanceStateChange = (value) => {
      this.props.onInstanceStateChange(value);
      this.setState({
        context: {
          ...this.state.context,
          instanceState: value
        }
      });
    };
    this.onUpdateData = (frames) => {
      return (0,app_plugins_datasource_grafana_utils__WEBPACK_IMPORTED_MODULE_24__.onUpdatePanelSnapshotData)(this.props.panel, frames);
    };
    this.onSeriesColorChange = (label, color) => {
      this.onFieldConfigChange((0,app_plugins_panel_timeseries_overrides_colorSeriesConfigFactory__WEBPACK_IMPORTED_MODULE_25__.changeSeriesColorConfigFactory)(label, color, this.props.panel.fieldConfig));
    };
    this.onSeriesVisibilityChange = (label, mode) => {
      this.onFieldConfigChange(
        (0,_SeriesVisibilityConfigFactory__WEBPACK_IMPORTED_MODULE_34__.seriesVisibilityConfigFactory)(label, mode, this.props.panel.fieldConfig, this.state.data.series)
      );
    };
    this.onToggleLegendSort = (sortKey) => {
      const legendOptions = this.props.panel.options.legend;
      if (!legendOptions) {
        return;
      }
      let sortDesc = legendOptions.sortDesc;
      let sortBy = legendOptions.sortBy;
      if (sortKey !== sortBy) {
        sortDesc = void 0;
      }
      if (sortDesc === false) {
        sortBy = void 0;
        sortDesc = void 0;
      } else {
        sortDesc = !sortDesc;
        sortBy = sortKey;
      }
      this.onOptionsChange({
        ...this.props.panel.options,
        legend: { ...legendOptions, sortBy, sortDesc }
      });
    };
    this.onRefresh = () => {
      const { dashboard, panel, isInView, width } = this.props;
      if (!dashboard.snapshot && !isInView) {
        panel.refreshWhenInView = true;
        return;
      }
      const timeData = (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_21__.applyPanelTimeOverrides)(panel, this.timeSrv.timeRange());
      if (this.wantsQueryExecution) {
        if (width < 0) {
          return;
        }
        panel.refreshWhenInView = false;
        panel.runAllPanelQueries({
          dashboardUID: dashboard.uid,
          dashboardTimezone: dashboard.getTimezone(),
          dashboardTitle: dashboard.title,
          timeData,
          width
        });
      } else {
        this.setState({
          data: { ...this.state.data, timeRange: this.timeSrv.timeRange() },
          renderCounter: this.state.renderCounter + 1,
          liveTime: void 0
        });
      }
    };
    this.onRender = () => {
      const stateUpdate = { renderCounter: this.state.renderCounter + 1 };
      this.setState(stateUpdate);
    };
    this.onOptionsChange = (options) => {
      this.props.panel.updateOptions(options);
    };
    this.onFieldConfigChange = (config2) => {
      this.props.panel.updateFieldConfig(config2);
    };
    this.onPanelError = (error) => {
      if (app_core_config__WEBPACK_IMPORTED_MODULE_18__["default"].featureToggles.panelMonitoring && this.getPanelContextApp() === _grafana_data__WEBPACK_IMPORTED_MODULE_9__.CoreApp.PanelEditor) {
        this.logPanelChangesOnError();
      }
      const errorMessage = error.message || DEFAULT_PLUGIN_ERROR;
      if (this.state.errorMessage !== errorMessage) {
        this.setState({ errorMessage });
      }
    };
    this.onPanelErrorRecover = () => {
      this.setState({ errorMessage: void 0 });
    };
    this.onAnnotationCreate = async (event) => {
      const isRegion = event.from !== event.to;
      const anno = {
        dashboardUID: this.props.dashboard.uid,
        panelId: this.props.panel.id,
        isRegion,
        time: event.from,
        timeEnd: isRegion ? event.to : 0,
        tags: event.tags,
        text: event.description
      };
      await (0,app_features_annotations_api__WEBPACK_IMPORTED_MODULE_20__.annotationServer)().save(anno);
      (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_28__.getDashboardQueryRunner)().run({ dashboard: this.props.dashboard, range: this.timeSrv.timeRange() });
      this.state.context.eventBus.publish(new _grafana_data__WEBPACK_IMPORTED_MODULE_5__.AnnotationChangeEvent(anno));
    };
    this.onAnnotationDelete = async (id) => {
      await (0,app_features_annotations_api__WEBPACK_IMPORTED_MODULE_20__.annotationServer)().delete({ id });
      (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_28__.getDashboardQueryRunner)().run({ dashboard: this.props.dashboard, range: this.timeSrv.timeRange() });
      this.state.context.eventBus.publish(new _grafana_data__WEBPACK_IMPORTED_MODULE_5__.AnnotationChangeEvent({ id }));
    };
    this.onAnnotationUpdate = async (event) => {
      const isRegion = event.from !== event.to;
      const anno = {
        id: event.id,
        dashboardUID: this.props.dashboard.uid,
        panelId: this.props.panel.id,
        isRegion,
        time: event.from,
        timeEnd: isRegion ? event.to : 0,
        tags: event.tags,
        text: event.description
      };
      await (0,app_features_annotations_api__WEBPACK_IMPORTED_MODULE_20__.annotationServer)().update(anno);
      (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_28__.getDashboardQueryRunner)().run({ dashboard: this.props.dashboard, range: this.timeSrv.timeRange() });
      this.state.context.eventBus.publish(new _grafana_data__WEBPACK_IMPORTED_MODULE_5__.AnnotationChangeEvent(anno));
    };
    this.onChangeTimeRange = (timeRange) => {
      this.timeSrv.setTime({
        from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.toUtc)(timeRange.from),
        to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.toUtc)(timeRange.to)
      });
    };
    this.onAddAdHocFilter = (filter) => {
      const { key, value, operator } = filter;
      const datasourceInstance = (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_22__.getDatasourceSrv)().getInstanceSettings(this.props.panel.datasource);
      const datasourceRef = datasourceInstance && (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.getDataSourceRef)(datasourceInstance);
      if (!datasourceRef) {
        return;
      }
      (0,app_store_store__WEBPACK_IMPORTED_MODULE_26__.dispatch)((0,app_features_variables_adhoc_actions__WEBPACK_IMPORTED_MODULE_23__.applyFilterFromTable)({ datasource: datasourceRef, key, operator, value }));
    };
    const eventBus = props.dashboard.events.newScopedBus(`panel:${props.panel.id}`, this.eventFilter);
    this.debouncedSetPanelAttention = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(this.setPanelAttention.bind(this), 100);
    this.state = {
      isFirstLoad: true,
      renderCounter: 0,
      context: {
        eventsScope: "__global_",
        eventBus,
        app: this.getPanelContextApp(),
        sync: this.getSync,
        onSeriesColorChange: this.onSeriesColorChange,
        onToggleSeriesVisibility: this.onSeriesVisibilityChange,
        onAnnotationCreate: this.onAnnotationCreate,
        onAnnotationUpdate: this.onAnnotationUpdate,
        onAnnotationDelete: this.onAnnotationDelete,
        onInstanceStateChange: this.onInstanceStateChange,
        onToggleLegendSort: this.onToggleLegendSort,
        canAddAnnotations: props.dashboard.canAddAnnotations.bind(props.dashboard),
        canEditAnnotations: props.dashboard.canEditAnnotations.bind(props.dashboard),
        canDeleteAnnotations: props.dashboard.canDeleteAnnotations.bind(props.dashboard),
        canExecuteActions: props.dashboard.canExecuteActions.bind(props.dashboard),
        onAddAdHocFilter: this.onAddAdHocFilter,
        onUpdateData: this.onUpdateData
      },
      data: this.getInitialPanelDataState()
    };
    if (app_core_config__WEBPACK_IMPORTED_MODULE_18__["default"].featureToggles.panelMonitoring && this.getPanelContextApp() === _grafana_data__WEBPACK_IMPORTED_MODULE_9__.CoreApp.PanelEditor) {
      const panelInfo = {
        panelId: String(props.panel.id),
        panelType: props.panel.type,
        panelTitle: props.panel.title
      };
      this.panelOptionsLogger = new _panelOptionsLogger__WEBPACK_IMPORTED_MODULE_36__.PanelOptionsLogger(props.panel.getOptions(), props.panel.fieldConfig, panelInfo);
    }
  }
  getPanelContextApp() {
    if (this.props.isEditing) {
      return _grafana_data__WEBPACK_IMPORTED_MODULE_9__.CoreApp.PanelEditor;
    }
    if (this.props.isViewing) {
      return _grafana_data__WEBPACK_IMPORTED_MODULE_9__.CoreApp.PanelViewer;
    }
    return _grafana_data__WEBPACK_IMPORTED_MODULE_9__.CoreApp.Dashboard;
  }
  getInitialPanelDataState() {
    return {
      state: _grafana_data__WEBPACK_IMPORTED_MODULE_12__.LoadingState.NotStarted,
      series: [],
      timeRange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_10__.getDefaultTimeRange)()
    };
  }
  componentDidMount() {
    const { panel, dashboard } = this.props;
    this.subs.add(panel.events.subscribe(_grafana_runtime__WEBPACK_IMPORTED_MODULE_13__.RefreshEvent, this.onRefresh));
    this.subs.add(panel.events.subscribe(app_types_events__WEBPACK_IMPORTED_MODULE_27__.RenderEvent, this.onRender));
    dashboard.panelInitialized(this.props.panel);
    if (this.hasPanelSnapshot) {
      this.setState({
        data: (0,_utils_loadSnapshotData__WEBPACK_IMPORTED_MODULE_31__.loadSnapshotData)(panel, dashboard),
        isFirstLoad: false
      });
      return;
    }
    if (!this.wantsQueryExecution) {
      this.setState({ isFirstLoad: false });
    }
    this.subs.add(
      panel.getQueryRunner().getData({ withTransforms: true, withFieldConfig: true }).subscribe({
        next: (data) => this.onDataUpdate(data)
      })
    );
    _liveTimer__WEBPACK_IMPORTED_MODULE_35__.liveTimer.listen(this);
  }
  componentWillUnmount() {
    this.subs.unsubscribe();
    _liveTimer__WEBPACK_IMPORTED_MODULE_35__.liveTimer.remove(this);
  }
  liveTimeChanged(liveTime) {
    const { data } = this.state;
    if (data.timeRange) {
      const delta = liveTime.to.valueOf() - data.timeRange.to.valueOf();
      if (delta < 100) {
        console.log("Skip tick render", this.props.panel.title, delta);
        return;
      }
    }
    this.setState({ liveTime });
  }
  componentDidUpdate(prevProps) {
    const { isInView, width, panel } = this.props;
    const { context } = this.state;
    const app = this.getPanelContextApp();
    if (context.app !== app) {
      this.setState({
        context: {
          ...context,
          app
        }
      });
    }
    if (isInView !== prevProps.isInView) {
      if (isInView) {
        if (panel.refreshWhenInView) {
          this.onRefresh();
        }
      }
    }
    if (width !== prevProps.width) {
      _liveTimer__WEBPACK_IMPORTED_MODULE_35__.liveTimer.updateInterval(this);
    }
  }
  // Updates the response with information from the stream
  // The next is outside a react synthetic event so setState is not batched
  // So in this context we can only do a single call to setState
  onDataUpdate(data) {
    const { dashboard, panel, plugin } = this.props;
    if (plugin.meta.skipDataQuery) {
      this.setState({ data: this.getInitialPanelDataState() });
      return;
    }
    let { isFirstLoad } = this.state;
    let errorMessage;
    switch (data.state) {
      case _grafana_data__WEBPACK_IMPORTED_MODULE_12__.LoadingState.Loading:
        if (this.state.data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_12__.LoadingState.Loading) {
          return;
        }
        break;
      case _grafana_data__WEBPACK_IMPORTED_MODULE_12__.LoadingState.Error:
        const { error, errors } = data;
        if (errors?.length) {
          if (errors.length === 1) {
            errorMessage = errors[0].message;
          } else {
            errorMessage = "Multiple errors found. Click for more details";
          }
        } else if (error) {
          if (errorMessage !== error.message) {
            errorMessage = error.message;
          }
        }
        break;
      case _grafana_data__WEBPACK_IMPORTED_MODULE_12__.LoadingState.Done:
        if (dashboard.snapshot) {
          panel.snapshotData = data.series.map((frame) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toDataFrameDTO)(frame));
        }
        if (isFirstLoad) {
          isFirstLoad = false;
        }
        break;
    }
    this.setState({ isFirstLoad, errorMessage, data, liveTime: void 0 });
  }
  logPanelChangesOnError() {
    this.panelOptionsLogger.logChanges(this.props.panel.getOptions(), this.props.panel.fieldConfig);
  }
  get hasPanelSnapshot() {
    const { panel } = this.props;
    return panel.snapshotData && panel.snapshotData.length;
  }
  get wantsQueryExecution() {
    return !(this.props.plugin.meta.skipDataQuery || this.hasPanelSnapshot);
  }
  shouldSignalRenderingCompleted(loadingState, pluginMeta) {
    return loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_12__.LoadingState.Done || loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_12__.LoadingState.Streaming || loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_12__.LoadingState.Error || pluginMeta.skipDataQuery;
  }
  skipFirstRender(loadingState) {
    const { isFirstLoad } = this.state;
    return this.wantsQueryExecution && isFirstLoad && (loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_12__.LoadingState.Loading || loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_12__.LoadingState.NotStarted);
  }
  renderPanelContent(innerWidth, innerHeight) {
    const { panel, plugin, dashboard } = this.props;
    const { renderCounter, data } = this.state;
    const { state: loadingState } = data;
    if (this.skipFirstRender(loadingState)) {
      return null;
    }
    if (this.shouldSignalRenderingCompleted(loadingState, plugin.meta)) {
      app_core_profiler__WEBPACK_IMPORTED_MODULE_19__.profiler.renderingCompleted();
    }
    const PanelComponent = plugin.panel;
    const timeRange = this.state.liveTime ?? data.timeRange ?? this.timeSrv.timeRange();
    const panelOptions = panel.getOptions();
    this.eventFilter.onlyLocal = dashboard.graphTooltip === 0;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.PanelContextProvider, { value: this.state.context, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_data__WEBPACK_IMPORTED_MODULE_8__.PluginContextProvider, { meta: plugin.meta, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        PanelComponent,
        {
          id: panel.id,
          data,
          title: panel.title,
          timeRange,
          timeZone: this.props.dashboard.getTimezone(),
          options: panelOptions,
          fieldConfig: panel.fieldConfig,
          transparent: panel.transparent,
          width: innerWidth,
          height: innerHeight,
          renderCounter,
          replaceVariables: panel.replaceVariables,
          onOptionsChange: this.onOptionsChange,
          onFieldConfigChange: this.onFieldConfigChange,
          onChangeTimeRange: this.onChangeTimeRange,
          eventBus: dashboard.events
        }
      ),
      app_core_config__WEBPACK_IMPORTED_MODULE_18__["default"].featureToggles.panelMonitoring && this.state.errorMessage === void 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PanelLoadTimeMonitor__WEBPACK_IMPORTED_MODULE_33__.PanelLoadTimeMonitor, { panelType: plugin.meta.id, panelId: panel.id, panelTitle: panel.title })
    ] }) }) });
  }
  setPanelAttention() {
    app_core_app_events__WEBPACK_IMPORTED_MODULE_17__["default"].publish(new _grafana_data__WEBPACK_IMPORTED_MODULE_5__.SetPanelAttentionEvent({ panelId: this.props.panel.id }));
  }
  debouncedSetPanelAttention() {
  }
  render() {
    const { dashboard, panel, width, height, plugin } = this.props;
    const { errorMessage, data } = this.state;
    const { transparent } = panel;
    const panelChromeProps = (0,_utils_getPanelChromeProps__WEBPACK_IMPORTED_MODULE_30__.getPanelChromeProps)({ ...this.props, data });
    const hoverHeaderOffset = (panel.gridPos?.y ?? 0) === 0 ? -16 : void 0;
    const menu = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { "data-testid": "panel-dropdown", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PanelHeader_PanelHeaderMenuWrapper__WEBPACK_IMPORTED_MODULE_32__.PanelHeaderMenuWrapper, { panel, dashboard, loadingState: data.state }) });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.PanelChrome,
      {
        width,
        height,
        title: panelChromeProps.title,
        loadingState: data.state,
        statusMessage: errorMessage,
        statusMessageOnClick: panelChromeProps.onOpenErrorInspect,
        description: panelChromeProps.description,
        titleItems: panelChromeProps.titleItems,
        menu: this.props.hideMenu ? void 0 : menu,
        dragClass: panelChromeProps.dragClass,
        dragClassCancel: "grid-drag-cancel",
        padding: panelChromeProps.padding,
        hoverHeaderOffset,
        hoverHeader: panelChromeProps.hasOverlayHeader(),
        displayMode: transparent ? "transparent" : "default",
        onCancelQuery: panelChromeProps.onCancelQuery,
        onFocus: () => this.setPanelAttention(),
        onMouseEnter: () => this.setPanelAttention(),
        onMouseMove: () => this.debouncedSetPanelAttention(),
        children: (innerWidth, innerHeight) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.ErrorBoundary,
          {
            boundaryName: "panel-state-wrapper",
            dependencies: [data, plugin, panel.getOptions()],
            onError: this.onPanelError,
            onRecover: this.onPanelErrorRecover,
            children: ({ error }) => {
              if (error) {
                return null;
              }
              return this.renderPanelContent(innerWidth, innerHeight);
            }
          }
        ) })
      }
    );
  }
}


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/panelOptionsLogger.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelOptionsLogger: () => (/* binding */ PanelOptionsLogger)
/* harmony export */ });
/* harmony import */ var _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/sdk/registerFaro.js");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_log_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/log_events.ts");




class PanelOptionsLogger {
  constructor(initialPanelOptions, initialFieldConfig, panelLogInfo) {
    this.logChanges = (latestPanelOptions, latestFieldConfig) => {
      this.logPanelOptionChanges(latestPanelOptions, this.initialPanelOptions);
      this.logFieldConfigChanges(latestFieldConfig, this.initialFieldConfig);
      this.initialPanelOptions = latestPanelOptions;
      this.initialFieldConfig = latestFieldConfig;
    };
    this.logPanelEvent = (eventName, newKey, newVal, oldVal) => {
      if (!app_core_config__WEBPACK_IMPORTED_MODULE_1__.config.grafanaJavascriptAgent.enabled) {
        return;
      }
      const logObj = {
        key: newKey,
        newValue: newVal,
        oldValue: oldVal ?? "",
        panelTitle: this.panelLogInfo.panelTitle,
        panelId: this.panelLogInfo.panelId,
        panelType: this.panelLogInfo.panelType
      };
      _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_0__.faro.api.pushEvent(eventName, logObj);
    };
    this.logPanelOptionChanges = (panelOptions, oldPanelOptions) => {
      if (typeof panelOptions !== "object" || panelOptions === null) {
        return;
      }
      if (typeof oldPanelOptions !== "object" || oldPanelOptions === null) {
        return;
      }
      const oldPanelOptionsUnknown = { ...oldPanelOptions };
      for (const [key, value] of Object.entries(panelOptions)) {
        const newValue = typeof value !== "string" ? JSON.stringify(value) : value;
        const oldValue = typeof value !== "string" ? JSON.stringify(oldPanelOptionsUnknown[key]) : String(oldPanelOptionsUnknown[key]);
        if (oldPanelOptionsUnknown[key] === void 0) {
          this.logPanelEvent(app_core_log_events__WEBPACK_IMPORTED_MODULE_2__.PanelLogEvents.NEW_PANEL_OPTION_EVENT, key, newValue);
        } else if (oldValue !== newValue) {
          this.logPanelEvent(app_core_log_events__WEBPACK_IMPORTED_MODULE_2__.PanelLogEvents.PANEL_OPTION_CHANGED_EVENT, key, newValue, oldValue);
        }
      }
    };
    this.logFieldConfigChanges = (fieldConfig, oldFieldConfig) => {
      const oldOverridesStr = JSON.stringify(oldFieldConfig.overrides);
      const newOverridesStr = JSON.stringify(fieldConfig.overrides);
      if (oldOverridesStr !== newOverridesStr) {
        this.logPanelEvent(
          app_core_log_events__WEBPACK_IMPORTED_MODULE_2__.PanelLogEvents.FIELD_CONFIG_OVERRIDES_CHANGED_EVENT,
          app_core_log_events__WEBPACK_IMPORTED_MODULE_2__.FIELD_CONFIG_OVERRIDES_KEY,
          newOverridesStr,
          oldOverridesStr
        );
      }
      const oldDefaults = { ...oldFieldConfig.defaults };
      for (const [key, value] of Object.entries(fieldConfig.defaults)) {
        if (key === app_core_log_events__WEBPACK_IMPORTED_MODULE_2__.FIELD_CONFIG_CUSTOM_KEY) {
          continue;
        }
        const newValue = typeof value !== "string" ? JSON.stringify(value) : value;
        const oldValue = typeof value !== "string" ? JSON.stringify(oldDefaults[key]) : String(oldDefaults[key]);
        if (oldDefaults[key] === void 0) {
          this.logPanelEvent(app_core_log_events__WEBPACK_IMPORTED_MODULE_2__.PanelLogEvents.NEW_DEFAULT_FIELD_CONFIG_EVENT, key, newValue);
        } else if (oldValue !== newValue) {
          this.logPanelEvent(app_core_log_events__WEBPACK_IMPORTED_MODULE_2__.PanelLogEvents.DEFAULT_FIELD_CONFIG_CHANGED_EVENT, key, newValue, oldValue);
        }
      }
      if (!fieldConfig.defaults.custom || oldDefaults.custom === void 0) {
        return;
      }
      const oldCustom = { ...oldDefaults.custom };
      for (const [key, value] of Object.entries(fieldConfig.defaults.custom)) {
        if (oldDefaults.custom === null || oldCustom[key] === null) {
          continue;
        }
        const newValue = typeof value !== "string" ? JSON.stringify(value) : value;
        const oldValue = typeof value !== "string" ? JSON.stringify(oldCustom[key]) : String(oldCustom[key]);
        if (oldCustom[key] === void 0) {
          this.logPanelEvent(app_core_log_events__WEBPACK_IMPORTED_MODULE_2__.PanelLogEvents.NEW_CUSTOM_FIELD_CONFIG_EVENT, key, newValue);
        } else if (oldValue !== newValue) {
          this.logPanelEvent(app_core_log_events__WEBPACK_IMPORTED_MODULE_2__.PanelLogEvents.CUSTOM_FIELD_CONFIG_CHANGED_EVENT, key, newValue, oldValue);
        }
      }
    };
    this.initialPanelOptions = initialPanelOptions;
    this.initialFieldConfig = initialFieldConfig;
    this.panelLogInfo = panelLogInfo;
  }
}


/***/ }),

/***/ "./public/app/features/dashboard/state/initDashboard.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initDashboard: () => (/* binding */ initDashboard)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/events/common.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/utils/location.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/datetime/moment_wrapper.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var app_core_utils_metrics__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/utils/metrics.ts");
/* harmony import */ var app_features_dashboard_services_DashboardLoaderSrv__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/dashboard/services/DashboardLoaderSrv.ts");
/* harmony import */ var app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var app_features_dashboard_scene_pages_DashboardScenePageStateManager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/dashboard-scene/pages/DashboardScenePageStateManager.ts");
/* harmony import */ var app_features_dashboard_scene_serialization_buildNewDashboardSaveModel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/dashboard-scene/serialization/buildNewDashboardSaveModel.ts");
/* harmony import */ var app_features_folders_state_actions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
/* harmony import */ var app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/live/dashboard/dashboardWatcher.ts");
/* harmony import */ var app_features_playlist_PlaylistSrv__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/playlist/PlaylistSrv.ts");
/* harmony import */ var app_features_variables_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var app_types_dashboard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/types/dashboard.ts");
/* harmony import */ var _core_services_context_srv__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts");
/* harmony import */ var _variables_state_actions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/variables/state/actions.ts");
/* harmony import */ var _variables_state_selectors__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/variables/state/selectors.ts");
/* harmony import */ var _utils_tracking__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/dashboard/utils/tracking.ts");
/* harmony import */ var _DashboardModel__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/dashboard/state/DashboardModel.ts");
/* harmony import */ var _analyticsProcessor__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/dashboard/state/analyticsProcessor.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/dashboard/state/reducers.ts");




























const INIT_DASHBOARD_MEASUREMENT = "initDashboard";
async function fetchDashboard(args, dispatch, getState) {
  try {
    switch (args.routeName) {
      case app_types_dashboard__WEBPACK_IMPORTED_MODULE_22__.DashboardRoutes.Home: {
        const stateManager = (0,app_features_dashboard_scene_pages_DashboardScenePageStateManager__WEBPACK_IMPORTED_MODULE_16__.getDashboardScenePageStateManager)("v1");
        const cachedDashboard = stateManager.getDashboardFromCache(app_features_dashboard_scene_pages_DashboardScenePageStateManager__WEBPACK_IMPORTED_MODULE_16__.HOME_DASHBOARD_CACHE_KEY);
        if (cachedDashboard) {
          return cachedDashboard;
        }
        const dashDTO = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_10__.backendSrv.get("/api/dashboards/home");
        if ((0,app_types_dashboard__WEBPACK_IMPORTED_MODULE_22__.isRedirectResponse)(dashDTO)) {
          const newUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.locationUtil.stripBaseFromUrl(dashDTO.redirectUri);
          _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.locationService.replace(newUrl);
          return null;
        }
        dashDTO.meta.canSave = false;
        dashDTO.meta.canShare = false;
        dashDTO.meta.canStar = false;
        return dashDTO;
      }
      case app_types_dashboard__WEBPACK_IMPORTED_MODULE_22__.DashboardRoutes.Public: {
        return await app_features_dashboard_services_DashboardLoaderSrv__WEBPACK_IMPORTED_MODULE_13__.dashboardLoaderSrv.loadDashboard("public", args.urlSlug, args.accessToken);
      }
      case app_types_dashboard__WEBPACK_IMPORTED_MODULE_22__.DashboardRoutes.Normal: {
        const dashDTO = await app_features_dashboard_services_DashboardLoaderSrv__WEBPACK_IMPORTED_MODULE_13__.dashboardLoaderSrv.loadDashboard(args.urlType, args.urlSlug, args.urlUid);
        if (dashDTO.meta.folderUid) {
          try {
            await dispatch((0,app_features_folders_state_actions__WEBPACK_IMPORTED_MODULE_18__.getFolderByUid)(dashDTO.meta.folderUid));
          } catch (err) {
            console.warn("Error fetching parent folder", dashDTO.meta.folderUid, "for dashboard", err);
          }
        }
        if (args.fixUrl && dashDTO.meta.url && !app_features_playlist_PlaylistSrv__WEBPACK_IMPORTED_MODULE_20__.playlistSrv.state.isPlaying) {
          const dashboardUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.locationUtil.stripBaseFromUrl(dashDTO.meta.url);
          const currentPath = _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.locationService.getLocation().pathname;
          if (dashboardUrl !== currentPath) {
            _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.locationService.replace({
              ..._grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.locationService.getLocation(),
              pathname: dashboardUrl
            });
            console.log("not correct url correcting", dashboardUrl, currentPath);
          }
        }
        return dashDTO;
      }
      case app_types_dashboard__WEBPACK_IMPORTED_MODULE_22__.DashboardRoutes.New: {
        if (args.urlFolderUid) {
          await dispatch((0,app_features_folders_state_actions__WEBPACK_IMPORTED_MODULE_18__.getFolderByUid)(args.urlFolderUid));
        }
        return await (0,app_features_dashboard_scene_serialization_buildNewDashboardSaveModel__WEBPACK_IMPORTED_MODULE_17__.buildNewDashboardSaveModel)(args.urlFolderUid);
      }
      default:
        throw { message: "Unknown route " + args.routeName };
    }
  } catch (err) {
    if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.isFetchError)(err) && err.cancelled) {
      return null;
    }
    dispatch(
      (0,_reducers__WEBPACK_IMPORTED_MODULE_30__.dashboardInitFailed)({
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard.fetch-dashboard.message.failed-to-fetch-dashboard", "Failed to fetch dashboard"),
        error: err
      })
    );
    console.error(err);
    return null;
  }
}
const getQueriesByDatasource = (panels, queries = {}) => {
  panels.forEach((panel) => {
    if (panel.panels) {
      getQueriesByDatasource(panel.panels, queries);
    } else if (panel.targets) {
      panel.targets.forEach((target) => {
        if (target.datasource?.type) {
          if (queries[target.datasource.type]) {
            queries[target.datasource.type].push(target);
          } else {
            queries[target.datasource.type] = [target];
          }
        }
      });
    }
  });
  return queries;
};
function initDashboard(args) {
  return async (dispatch, getState) => {
    (0,app_core_utils_metrics__WEBPACK_IMPORTED_MODULE_12__.startMeasure)(INIT_DASHBOARD_MEASUREMENT);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_30__.dashboardInitFetching)());
    const dashDTO = await fetchDashboard(args, dispatch, getState);
    const versionBeforeMigration = dashDTO?.dashboard?.version;
    if (!dashDTO) {
      return;
    }
    addPanelsFromLocalStorage(dashDTO);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_30__.dashboardInitServices)());
    let dashboard;
    try {
      dashboard = new _DashboardModel__WEBPACK_IMPORTED_MODULE_28__.DashboardModel(dashDTO.dashboard, dashDTO.meta);
    } catch (err) {
      dispatch(
        (0,_reducers__WEBPACK_IMPORTED_MODULE_30__.dashboardInitFailed)({
          message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard.init-dashboard.message.failed-create-dashboard-model", "Failed create dashboard model"),
          error: err
        })
      );
      console.error(err);
      return;
    }
    const storeState = getState();
    const queryParams = _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.locationService.getSearchObject();
    if (!queryParams.orgId) {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.locationService.partial({ orgId: storeState.user.orgId }, true);
    }
    const timeSrv = (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_15__.getTimeSrv)();
    const dashboardSrv = (0,app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_14__.getDashboardSrv)();
    dashboardSrv.setCurrent(dashboard);
    timeSrv.init(dashboard);
    const dashboardUid = (0,app_features_variables_utils__WEBPACK_IMPORTED_MODULE_21__.toStateKey)(args.urlUid ?? dashboard.uid);
    await dispatch((0,_variables_state_actions__WEBPACK_IMPORTED_MODULE_25__.initVariablesTransaction)(dashboardUid, dashboard));
    const runner = (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_24__.createDashboardQueryRunner)({ dashboard, timeSrv });
    runner.run({ dashboard, range: timeSrv.timeRange() });
    if ((0,_variables_state_selectors__WEBPACK_IMPORTED_MODULE_26__.getIfExistsLastKey)(getState()) !== dashboardUid) {
      return;
    }
    if (getState().dashboard.initPhase !== app_types_dashboard__WEBPACK_IMPORTED_MODULE_22__.DashboardInitPhase.Services) {
      return;
    }
    try {
      dashboard.processRepeats();
      if (queryParams.autofitpanels) {
        dashboard.autoFitPanels(window.innerHeight, queryParams.kiosk);
      }
      if (!_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.publicDashboardAccessToken) {
        args.keybindingSrv.setupDashboardBindings(dashboard);
      }
    } catch (err) {
      if (err instanceof Error) {
        dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_7__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_9__.createErrorNotification)("Dashboard init failed", err)));
      }
      console.error(err);
    }
    if (args.routeName !== app_types_dashboard__WEBPACK_IMPORTED_MODULE_22__.DashboardRoutes.New) {
      (0,_analyticsProcessor__WEBPACK_IMPORTED_MODULE_29__.emitDashboardViewEvent)(dashboard);
      app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_19__.dashboardWatcher.watch(dashboard.uid);
    } else {
      app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_19__.dashboardWatcher.leave();
    }
    if (dashboard.weekStart !== "" && dashboard.weekStart !== void 0) {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.setWeekStart)(dashboard.weekStart);
    } else {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.setWeekStart)(_core_services_context_srv__WEBPACK_IMPORTED_MODULE_23__.contextSrv.user.weekStart);
    }
    app_core_app_events__WEBPACK_IMPORTED_MODULE_8__["default"].publish(
      new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DashboardLoadedEvent({
        dashboardId: dashboard.uid,
        orgId: storeState.user.orgId,
        userId: storeState.user.user?.id,
        grafanaVersion: _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.buildInfo.version,
        queries: getQueriesByDatasource(dashboard.panels)
      })
    );
    const measure = (0,app_core_utils_metrics__WEBPACK_IMPORTED_MODULE_12__.stopMeasure)(INIT_DASHBOARD_MEASUREMENT);
    (0,_utils_tracking__WEBPACK_IMPORTED_MODULE_27__.trackDashboardLoaded)(dashboard, measure?.duration, versionBeforeMigration);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_30__.dashboardInitCompleted)(dashboard));
  };
}
function addPanelsFromLocalStorage(model) {
  const fromLS = app_core_store__WEBPACK_IMPORTED_MODULE_11__["default"].getObject(app_types_dashboard__WEBPACK_IMPORTED_MODULE_22__.DASHBOARD_FROM_LS_KEY);
  if (fromLS) {
    if (fromLS.dashboard.panels) {
      model.dashboard.panels = fromLS.dashboard.panels.concat(model.dashboard.panels);
    }
    if (fromLS.dashboard.time) {
      model.dashboard.time = fromLS.dashboard.time;
    }
    app_core_store__WEBPACK_IMPORTED_MODULE_11__["default"].delete(app_types_dashboard__WEBPACK_IMPORTED_MODULE_22__.DASHBOARD_FROM_LS_KEY);
  }
}


/***/ }),

/***/ "./public/app/features/dashboard/utils/getPanelChromeProps.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPanelChromeProps: () => (/* binding */ getPanelChromeProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/text/markdown.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var app_features_dashboard_scene_utils_interactions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard-scene/utils/interactions.ts");
/* harmony import */ var app_features_inspector_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/inspector/types.ts");
/* harmony import */ var app_features_panel_panellinks_linkSuppliers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/panel/panellinks/linkSuppliers.ts");
/* harmony import */ var _dashgrid_PanelHeader_PanelHeaderTitleItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderTitleItems.tsx");








function getPanelChromeProps(props) {
  function hasOverlayHeader() {
    if (props.data.request && props.data.request.timeInfo) {
      return false;
    }
    return !props.panel.hasTitle();
  }
  const onShowPanelDescription = () => {
    const descriptionMarkdown = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)().replace(props.panel.description, props.panel.scopedVars);
    const interpolatedDescription = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.renderMarkdown)(descriptionMarkdown);
    return interpolatedDescription;
  };
  const onShowPanelLinks = () => {
    const linkSupplier = (0,app_features_panel_panellinks_linkSuppliers__WEBPACK_IMPORTED_MODULE_6__.getPanelLinksSupplier)(props.panel);
    if (!linkSupplier) {
      return [];
    }
    const panelLinks = linkSupplier && linkSupplier.getLinks(props.panel.replaceVariables);
    return panelLinks.map((panelLink) => ({
      ...panelLink,
      onClick: (...args) => {
        app_features_dashboard_scene_utils_interactions__WEBPACK_IMPORTED_MODULE_4__.DashboardInteractions.panelLinkClicked({ has_multiple_links: panelLinks.length > 1 });
        panelLink.onClick?.(...args);
      }
    }));
  };
  const onOpenInspector = (e, tab) => {
    e.stopPropagation();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.partial({ inspect: props.panel.id, inspectTab: tab });
  };
  const onOpenErrorInspect = (e) => {
    e.stopPropagation();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.partial({ inspect: props.panel.id, inspectTab: app_features_inspector_types__WEBPACK_IMPORTED_MODULE_5__.InspectTab.Error });
    app_features_dashboard_scene_utils_interactions__WEBPACK_IMPORTED_MODULE_4__.DashboardInteractions.panelStatusMessageClicked();
  };
  const onCancelQuery = () => {
    props.panel.getQueryRunner().cancelQuery();
    app_features_dashboard_scene_utils_interactions__WEBPACK_IMPORTED_MODULE_4__.DashboardInteractions.panelCancelQueryClicked({ data_state: props.data.state });
  };
  const padding = props.plugin.noPadding ? "none" : "md";
  const alertState = props.data.alertState?.state;
  const showTitleItems = props.panel.links && props.panel.links.length > 0 && onShowPanelLinks || props.data.series.length > 0 && props.data.series.some((v) => (v.meta?.notices?.length ?? 0) > 0) || props.data.request && props.data.request.timeInfo || alertState;
  const titleItems = showTitleItems && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _dashgrid_PanelHeader_PanelHeaderTitleItems__WEBPACK_IMPORTED_MODULE_7__.PanelHeaderTitleItems,
    {
      alertState,
      data: props.data,
      panelId: props.panel.id,
      panelLinks: props.panel.links,
      onShowPanelLinks
    }
  );
  const description = props.panel.description ? onShowPanelDescription : void 0;
  const dragClass = !(props.isViewing || props.isEditing) && Boolean(props.isDraggable ?? true) ? "grid-drag-handle" : "";
  const title = props.panel.getDisplayTitle();
  return {
    hasOverlayHeader,
    onShowPanelDescription,
    onShowPanelLinks,
    onOpenInspector,
    onOpenErrorInspect,
    onCancelQuery,
    padding,
    description,
    dragClass,
    title,
    titleItems
  };
}


/***/ }),

/***/ "./public/app/features/dashboard/utils/getPanelMenu.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPanelMenu: () => (/* binding */ getPanelMenu)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/utils/url.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/reducers/appNotification.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_core_utils_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/utils/errors.ts");
/* harmony import */ var app_core_utils_explore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/utils/explore.ts");
/* harmony import */ var app_features_alerting_unified_utils_rule_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-form.ts");
/* harmony import */ var app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");
/* harmony import */ var app_features_inspector_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/inspector/types.ts");
/* harmony import */ var app_features_library_panels_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/library-panels/guard.ts");
/* harmony import */ var app_features_plugins_extensions_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/plugins/extensions/utils.tsx");
/* harmony import */ var app_plugins_datasource_dashboard_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/dashboard/constants.ts");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _alerting_unified_utils_access_control__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _explore_state_main__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/explore/state/main.ts");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");



















function getPanelMenu(dashboard, panel, extensions) {
  const onViewPanel = (event) => {
    event.preventDefault();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.partial({
      viewPanel: panel.id
    });
  };
  const onEditPanel = (event) => {
    event.preventDefault();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.partial({
      editPanel: panel.id
    });
  };
  const onSharePanel = (event) => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_9__.sharePanel)(dashboard, panel);
  };
  const onAddLibraryPanel = (event) => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_9__.addLibraryPanel)(dashboard, panel);
  };
  const onUnlinkLibraryPanel = (event) => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_9__.unlinkLibraryPanel)(panel);
  };
  const onInspectPanel = (tab) => {
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.partial({
      inspect: panel.id,
      inspectTab: tab
    });
  };
  const onDuplicatePanel = (event) => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_9__.duplicatePanel)(dashboard, panel);
  };
  const onCopyPanel = (event) => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_9__.copyPanel)(panel);
  };
  const onRemovePanel = (event) => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_9__.removePanel)(dashboard, panel, true);
  };
  const onNavigateToExplore = (event) => {
    event.preventDefault();
    const openInNewWindow = event.ctrlKey || event.metaKey ? (url) => window.open(url) : void 0;
    app_store_store__WEBPACK_IMPORTED_MODULE_14__.store.dispatch(
      (0,_explore_state_main__WEBPACK_IMPORTED_MODULE_16__.navigateToExplore)(panel, {
        timeRange: (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_17__.getTimeSrv)().timeRange(),
        getExploreUrl: app_core_utils_explore__WEBPACK_IMPORTED_MODULE_7__.getExploreUrl,
        openInNewWindow
      })
    );
  };
  const onToggleLegend = (event) => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_9__.toggleLegend)(panel);
  };
  const menu = [];
  if (!panel.isEditing) {
    menu.push({
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.view", `View`),
      iconClassName: "eye",
      onClick: onViewPanel,
      shortcut: "v"
    });
  }
  if (dashboard.canEditPanel(panel) && !panel.isEditing) {
    menu.push({
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.edit", `Edit`),
      iconClassName: "edit",
      onClick: onEditPanel,
      shortcut: "e"
    });
  }
  menu.push({
    text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.share", `Share`),
    iconClassName: "share-alt",
    onClick: onSharePanel,
    shortcut: "p s"
  });
  if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasAccessToExplore() && !(panel.plugin && panel.plugin.meta.skipDataQuery) && panel.datasource?.uid !== app_plugins_datasource_dashboard_constants__WEBPACK_IMPORTED_MODULE_13__.SHARED_DASHBOARD_QUERY) {
    menu.push({
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.explore", `Explore`),
      iconClassName: "compass",
      onClick: onNavigateToExplore,
      shortcut: "p x"
    });
  }
  const inspectMenu = [];
  if (panel.plugin && !panel.plugin.meta.skipDataQuery) {
    inspectMenu.push({
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.inspect-data", `Data`),
      onClick: (e) => onInspectPanel(app_features_inspector_types__WEBPACK_IMPORTED_MODULE_10__.InspectTab.Data)
    });
    if (dashboard.meta.canEdit) {
      inspectMenu.push({
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.query", `Query`),
        onClick: (e) => onInspectPanel(app_features_inspector_types__WEBPACK_IMPORTED_MODULE_10__.InspectTab.Query)
      });
    }
  }
  inspectMenu.push({
    text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.inspect-json", `Panel JSON`),
    onClick: (e) => onInspectPanel(app_features_inspector_types__WEBPACK_IMPORTED_MODULE_10__.InspectTab.JSON)
  });
  menu.push({
    type: "submenu",
    text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.inspect", `Inspect`),
    iconClassName: "info-circle",
    shortcut: "i",
    subMenu: inspectMenu
  });
  const createAlert = async () => {
    let formValues;
    try {
      formValues = await (0,app_features_alerting_unified_utils_rule_form__WEBPACK_IMPORTED_MODULE_8__.panelToRuleFormValues)(panel, dashboard);
    } catch (err) {
      const message = `Error getting rule values from the panel: ${(0,app_core_utils_errors__WEBPACK_IMPORTED_MODULE_6__.getMessageFromError)(err)}`;
      (0,app_store_store__WEBPACK_IMPORTED_MODULE_14__.dispatch)((0,app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_4__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__.createErrorNotification)(message)));
      return;
    }
    const ruleFormUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.urlUtil.renderUrl("/alerting/new", {
      defaults: JSON.stringify(formValues),
      returnTo: window.location.pathname + window.location.search
    });
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.push(ruleFormUrl);
  };
  const onCreateAlert = (event) => {
    event.preventDefault();
    createAlert();
  };
  const subMenu = [];
  const canEdit = dashboard.canEditPanel(panel);
  const isCreateAlertMenuOptionAvailable = (0,_alerting_unified_utils_access_control__WEBPACK_IMPORTED_MODULE_15__.getCreateAlertInMenuAvailability)();
  if (!(panel.isViewing || panel.isEditing)) {
    if (canEdit) {
      subMenu.push({
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.duplicate", `Duplicate`),
        onClick: onDuplicatePanel,
        shortcut: "p d"
      });
      subMenu.push({
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.copy", `Copy`),
        onClick: onCopyPanel
      });
      if ((0,app_features_library_panels_guard__WEBPACK_IMPORTED_MODULE_11__.isPanelModelLibraryPanel)(panel)) {
        subMenu.push({
          text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.unlink-library-panel", `Unlink library panel`),
          onClick: onUnlinkLibraryPanel
        });
      } else {
        subMenu.push({
          text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.create-library-panel", `Create library panel`),
          onClick: onAddLibraryPanel
        });
      }
    } else if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.isEditor) {
      subMenu.push({
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.copy", `Copy`),
        onClick: onCopyPanel
      });
    }
  }
  if (isCreateAlertMenuOptionAvailable) {
    subMenu.push({
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.new-alert-rule", `New alert rule`),
      onClick: onCreateAlert
    });
  }
  if (panel.options.legend) {
    subMenu.push({
      text: panel.options.legend.showLegend ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.hide-legend", "Hide legend") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.show-legend", "Show legend"),
      onClick: onToggleLegend,
      shortcut: "p l"
    });
  }
  if (panel.isEditing) {
    subMenu.length = 0;
    if (isCreateAlertMenuOptionAvailable) {
      subMenu.push({
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.new-alert-rule", `New alert rule`),
        onClick: onCreateAlert
      });
    }
  }
  if (canEdit && panel.plugin && !panel.plugin.meta.skipDataQuery) {
    subMenu.push({
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.get-help", "Get help"),
      onClick: (e) => onInspectPanel(app_features_inspector_types__WEBPACK_IMPORTED_MODULE_10__.InspectTab.Help)
    });
  }
  if (extensions.length > 0 && !panel.isEditing) {
    menu.push({
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("dashboard.get-panel-menu.text.extensions", "Extensions"),
      iconClassName: "plug",
      type: "submenu",
      subMenu: (0,app_features_plugins_extensions_utils__WEBPACK_IMPORTED_MODULE_12__.createExtensionSubMenu)(extensions)
    });
  }
  if (subMenu.length) {
    menu.push({
      type: "submenu",
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.more", `More...`),
      iconClassName: "cube",
      subMenu
    });
  }
  if (dashboard.canEditPanel(panel) && !panel.isEditing && !panel.isViewing) {
    menu.push({ type: "divider", text: "" });
    menu.push({
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.remove", `Remove`),
      iconClassName: "trash-alt",
      onClick: onRemovePanel,
      shortcut: "p r"
    });
  }
  return menu;
}


/***/ }),

/***/ "./public/app/features/dashboard/utils/loadSnapshotData.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadSnapshotData: () => (/* binding */ loadSnapshotData)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/dataframe/processDataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/dataframe/ArrayDataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/field/fieldOverrides.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/time.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _query_state_DashboardQueryRunner_SnapshotWorker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/SnapshotWorker.ts");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");






function loadSnapshotData(panel, dashboard) {
  const data = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getProcessedDataFrames)(panel.snapshotData);
  const worker = new _query_state_DashboardQueryRunner_SnapshotWorker__WEBPACK_IMPORTED_MODULE_6__.SnapshotWorker();
  const options = { dashboard, range: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getDefaultTimeRange)() };
  const annotationEvents = worker.canWork(options) ? worker.getAnnotationsInSnapshot(dashboard, panel.id) : [];
  const annotations = [(0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.arrayToDataFrame)(annotationEvents)];
  const timeData = (0,_panel__WEBPACK_IMPORTED_MODULE_8__.applyPanelTimeOverrides)(panel, (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_7__.getTimeSrv)().timeRange());
  return {
    timeRange: timeData.timeRange,
    state: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.LoadingState.Done,
    series: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.applyFieldOverrides)({
      data,
      fieldConfig: {
        defaults: {},
        overrides: []
      },
      replaceVariables: panel.replaceVariables,
      fieldConfigRegistry: panel.plugin.fieldConfigRegistry,
      theme: app_core_config__WEBPACK_IMPORTED_MODULE_5__.config.theme2,
      timeZone: dashboard.getTimezone()
    }),
    structureRev: 1,
    annotations
  };
}


/***/ }),

/***/ "./public/app/features/folders/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFolderByUid: () => (/* binding */ getFolderByUid)
/* harmony export */ });
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var _navModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/folders/state/reducers.ts");





function getFolderByUid(uid) {
  return async (dispatch) => {
    const folder = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_1__.backendSrv.getFolderByUid(uid);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.loadFolder)(folder));
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_0__.updateNavIndex)((0,_navModel__WEBPACK_IMPORTED_MODULE_2__.buildNavModel)(folder)));
    return folder;
  };
}


/***/ }),

/***/ "./public/app/plugins/panel/timeseries/overrides/colorSeriesConfigFactory.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeSeriesColorConfigFactory: () => (/* binding */ changeSeriesColorConfigFactory)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");


const changeSeriesColorConfigFactory = (label, color, fieldConfig) => {
  const { overrides } = fieldConfig;
  const currentIndex = fieldConfig.overrides.findIndex((override) => {
    return override.matcher.id === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byName && override.matcher.options === label;
  });
  if (currentIndex < 0) {
    return {
      ...fieldConfig,
      overrides: [...fieldConfig.overrides, createOverride(label, color)]
    };
  }
  const overridesCopy = Array.from(overrides);
  const existing = overridesCopy[currentIndex];
  const propertyIndex = existing.properties.findIndex((p) => p.id === "color");
  if (propertyIndex < 0) {
    overridesCopy[currentIndex] = {
      ...existing,
      properties: [...existing.properties, createProperty(color)]
    };
    return {
      ...fieldConfig,
      overrides: overridesCopy
    };
  }
  const propertiesCopy = Array.from(existing.properties);
  propertiesCopy[propertyIndex] = createProperty(color);
  overridesCopy[currentIndex] = {
    ...existing,
    properties: propertiesCopy
  };
  return {
    ...fieldConfig,
    overrides: overridesCopy
  };
};
const createOverride = (label, color) => {
  return {
    matcher: {
      id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byName,
      options: label
    },
    properties: [createProperty(color)]
  };
};
const createProperty = (color) => {
  return {
    id: "color",
    value: {
      mode: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldColorModeId.Fixed,
      fixedColor: color
    }
  };
};


/***/ }),

/***/ "./public/img/grab_dark.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/grab_dark.4ee8d28b.svg";

/***/ }),

/***/ "./public/img/grab_light.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/grab_light.322c3334.svg";

/***/ }),

/***/ "./public/img/grafana_text_logo_dark.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/grafana_text_logo_dark.70a1e5ee.svg";

/***/ }),

/***/ "./public/img/grafana_text_logo_light.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/grafana_text_logo_light.467e047c.svg";

/***/ })

}]);
//# sourceMappingURL=PublicDashboardPage.bd965330f7f9b425e8ee.js.map