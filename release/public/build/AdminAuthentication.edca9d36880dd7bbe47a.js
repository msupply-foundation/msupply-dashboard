"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AdminAuthentication"],{

/***/ "./public/app/core/components/Branding/CloudEnterpriseBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudEnterpriseBadge: () => (/* binding */ CloudEnterpriseBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _OrangeBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Branding/OrangeBadge.tsx");




function CloudEnterpriseBadge() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OrangeBadge__WEBPACK_IMPORTED_MODULE_2__.OrangeBadge, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("cloud-enterprise-feature-badge", "Cloud & Enterprise") });
}


/***/ }),

/***/ "./public/app/core/components/Branding/OrangeBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrangeBadge: () => (/* binding */ OrangeBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");




function OrangeBadge({ text, className, ...htmlProps }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles, text);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.wrapper, className), ...htmlProps, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { name: "cloud", size: "sm" }),
    text
  ] });
}
const getStyles = (theme, text) => {
  return {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "inline-flex",
      padding: theme.spacing(0.5, 1),
      borderRadius: theme.shape.radius.pill,
      background: theme.colors.gradients.brandHorizontal,
      color: theme.colors.primary.contrastText,
      fontWeight: theme.typography.fontWeightMedium,
      gap: theme.spacing(0.5),
      fontSize: theme.typography.bodySmall.fontSize,
      lineHeight: theme.typography.bodySmall.lineHeight,
      alignItems: "center",
      ...text === void 0 && {
        svg: {
          marginRight: 0
        }
      }
    })
  };
};


/***/ }),

/***/ "./public/app/core/components/FormPrompt/FormPrompt.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormPrompt: () => (/* binding */ FormPrompt)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/FormPrompt/Prompt.tsx");








const FormPrompt = ({ confirmRedirect, onDiscard, onLocationChange }) => {
  const [modalIsOpen, setModalIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [blockedLocation, setBlockedLocation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [changesDiscarded, setChangesDiscarded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const onBeforeUnload = (e) => {
      if (confirmRedirect) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, [confirmRedirect]);
  const handleRedirect = (location) => {
    const currentPath = window.location.pathname;
    const nextPath = location.pathname;
    if (currentPath === nextPath) {
      return true;
    }
    const locationChangeCheck = onLocationChange?.(location);
    let blockRedirect = confirmRedirect && !changesDiscarded;
    if (locationChangeCheck !== void 0) {
      blockRedirect = blockRedirect && locationChangeCheck;
    }
    if (blockRedirect) {
      setModalIsOpen(true);
      setBlockedLocation(location);
      return false;
    }
    if (locationChangeCheck) {
      onDiscard();
    }
    return true;
  };
  const onBackToForm = () => {
    setModalIsOpen(false);
    setBlockedLocation(null);
  };
  const onDiscardChanges = () => {
    setModalIsOpen(false);
    setChangesDiscarded(true);
    onDiscard();
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Prompt__WEBPACK_IMPORTED_MODULE_7__.Prompt, { when: true, message: handleRedirect }),
    blockedLocation && changesDiscarded && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__.Navigate, { replace: true, to: blockedLocation }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UnsavedChangesModal, { isOpen: modalIsOpen, onDiscard: onDiscardChanges, onBackToForm })
  ] });
};
const UnsavedChangesModal = ({ onDiscard, onBackToForm, isOpen }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal,
    {
      isOpen,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("form-prompt.title", "Leave page?"),
      onDismiss: onBackToForm,
      icon: "exclamation-triangle",
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({ width: "500px" }),
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "form-prompt.description", children: "Changes that you made may not be saved." }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal.ButtonRow, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { variant: "secondary", onClick: onBackToForm, fill: "outline", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "form-prompt.continue-button", children: "Continue editing" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { variant: "destructive", onClick: onDiscard, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "form-prompt.discard-button", children: "Discard unsaved changes" }) })
        ] })
      ]
    }
  );
};


/***/ }),

/***/ "./public/app/core/components/FormPrompt/Prompt.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Prompt: () => (/* binding */ Prompt)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");



const Prompt = ({ message, when = true }) => {
  const history = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getHistory();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!when) {
      return void 0;
    }
    const unblock = history.block(message);
    return () => {
      unblock();
    };
  }, [when, message, history]);
  return null;
};


/***/ }),

/***/ "./public/app/features/admin/EnterpriseAuthFeaturesCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnterpriseAuthFeaturesCard: () => (/* binding */ EnterpriseAuthFeaturesCard),
/* harmony export */   isOpenSourceBuildOrUnlicenced: () => (/* binding */ isOpenSourceBuildOrUnlicenced)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/config.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_Branding_CloudEnterpriseBadge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/Branding/CloudEnterpriseBadge.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/services/backend_srv.ts");











function EnterpriseAuthFeaturesCard({ page }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  const helpFlags = app_core_core__WEBPACK_IMPORTED_MODULE_11__.contextSrv.user.helpFlags1;
  const HELP_FLAG_ENTERPRISE_AUTH = 4;
  const [isDismissed, setDismissed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Boolean(helpFlags & HELP_FLAG_ENTERPRISE_AUTH));
  const onDismiss = () => {
    app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_12__.backendSrv.put(`/api/user/helpflags/${HELP_FLAG_ENTERPRISE_AUTH}`, void 0, { showSuccessAlert: false }).then((res) => {
      app_core_core__WEBPACK_IMPORTED_MODULE_11__.contextSrv.user.helpFlags1 = res.helpFlags1;
      setDismissed(true);
    });
  };
  if (isDismissed || !isOpenSourceBuildOrUnlicenced()) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.box, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Branding_CloudEnterpriseBadge__WEBPACK_IMPORTED_MODULE_10__.CloudEnterpriseBadge, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
        {
          variant: "secondary",
          fill: "text",
          icon: "times",
          onClick: onDismiss,
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("admin.enterprise-auth-features-card.dismiss", "Dismiss")
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 0.5, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { variant: "h4", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "admin.enterprise-auth-features-card.heading", children: "Enterprise authentication" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { variant: "body", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "admin.enterprise-auth-features-card.text", children: [
        "Manage users, teams, and permissions automatically with ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "SAML" }),
        ", ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "SCIM" }),
        ",",
        " ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "LDAP" }),
        ", and ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "RBAC" }),
        " \u2014 available in Grafana Cloud and Enterprise."
      ] }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LinkButton,
      {
        href: `https://grafana.com/auth/sign-up/create-user?cloud-auth=&redirectPath=cloud-auth&utm_source=oss-grafana&cnt-admin-${page}`,
        icon: "external-link-alt",
        variant: "secondary",
        target: "_blank",
        rel: "noopener noreferrer",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "admin.enterprise-auth-features-card.learn-more-link", children: "Learn more" })
      }
    ) })
  ] });
}
function getStyles(theme) {
  return {
    cloudBadge: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      alignItems: "center",
      background: theme.colors.gradients.brandHorizontal,
      color: theme.colors.primary.contrastText,
      padding: theme.spacing(0.5, 1),
      borderRadius: theme.shape.radius.pill,
      fontSize: theme.typography.bodySmall.fontSize,
      gap: theme.spacing(1)
    }),
    box: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: theme.spacing(3),
      border: `1px solid ${theme.colors.border.weak}`,
      backgroundColor: theme.colors.background.secondary,
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(1.5),
      borderRadius: theme.shape.radius.lg,
      marginTop: theme.spacing(3),
      strong: {
        color: theme.colors.text.primary
      }
    }),
    icon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      position: "relative",
      top: -1
    })
  };
}
function isOpenSourceBuildOrUnlicenced() {
  if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.buildInfo.edition === _grafana_data_internal__WEBPACK_IMPORTED_MODULE_3__.GrafanaEdition.OpenSource) {
    return true;
  }
  if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.licenseInfo.stateInfo !== "Licensed") {
    return true;
  }
  return false;
}


/***/ }),

/***/ "./public/app/features/auth-config/AuthDrawer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthDrawerUnconnected: () => (/* binding */ AuthDrawerUnconnected),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Drawer/Drawer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/auth-config/state/actions.ts");








const mapStateToProps = (state) => {
  const allowInsecureEmail = state.authConfig.settings?.auth?.oauth_allow_insecure_email_lookup.toLowerCase() === "true";
  return {
    allowInsecureEmail
  };
};
const mapActionsToProps = {
  loadSettings: _state_actions__WEBPACK_IMPORTED_MODULE_11__.loadSettings,
  saveSettings: _state_actions__WEBPACK_IMPORTED_MODULE_11__.saveSettings
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapActionsToProps);
const AuthDrawerUnconnected = ({
  allowInsecureEmail,
  loadSettings: loadSettings2,
  onClose,
  saveSettings: saveSettings2
}) => {
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_10__.useAppNotification)();
  const oauthAllowInsecureEmailLookupOnChange = async () => {
    try {
      await saveSettings2({
        updates: {
          auth: {
            oauth_allow_insecure_email_lookup: "" + !allowInsecureEmail
          }
        }
      });
      await loadSettings2(false);
      notifyApp.success("Settings saved");
    } catch (error) {
      notifyApp.error("Failed to save settings");
    }
  };
  const resetButtonOnClick = async () => {
    try {
      await saveSettings2({
        removals: {
          auth: ["oauth_allow_insecure_email_lookup"]
        }
      });
      await loadSettings2(false);
      notifyApp.success("Settings saved");
    } catch (error) {
      notifyApp.error("Failed to save settings");
    }
  };
  const subtitle = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "auth-config.auth-drawer-unconneced.subtitle", children: [
    "Configure auth settings. Find out more in our",
    " ",
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TextLink,
      {
        external: true,
        href: "https://grafana.com/docs/grafana/next/setup-grafana/configure-security/configure-authentication/#settings",
        children: "documentation"
      }
    ),
    "."
  ] });
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Drawer,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("auth-config.auth-drawer-unconnected.title-auth-settings", "Auth settings"),
      subtitle,
      size: "md",
      onClose,
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.advancedAuth, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { variant: "h4", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "auth-config.auth-drawer-unconnected.advanced-auth", children: "Advanced Auth" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { variant: "h5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "auth-config.auth-drawer-unconnected.enable-insecure-email-lookup", children: "Enable insecure email lookup" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { variant: "body", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "auth-config.auth-drawer-unconnected.enable-insecure-email-lookup-description", children: "Allow users to use the same email address to log into Grafana with different identity providers." }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Switch, { value: allowInsecureEmail, onChange: oauthAllowInsecureEmailLookupOnChange })
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button,
          {
            size: "md",
            variant: "secondary",
            className: styles.button,
            onClick: resetButtonOnClick,
            tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
              "auth-config.auth-drawer-unconnected.reset-tooltip",
              "This action will disregard any saved changes and load the configuration from the configuration file."
            ),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "auth-config.auth-drawer-unconnected.reset", children: "Reset" })
          }
        )
      ]
    }
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(AuthDrawerUnconnected));
const getStyles = (theme) => {
  return {
    advancedAuth: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(1)
    }),
    button: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginTop: theme.spacing(2)
    })
  };
};


/***/ }),

/***/ "./public/app/features/auth-config/AuthProvidersListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthConfigPageUnconnected: () => (/* binding */ AuthConfigPageUnconnected),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _grafana_data_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/config.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/ToolbarButton/ToolbarButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Grid/Grid.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _admin_EnterpriseAuthFeaturesCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/admin/EnterpriseAuthFeaturesCard.tsx");
/* harmony import */ var _AuthDrawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/auth-config/AuthDrawer.tsx");
/* harmony import */ var _components_ConfigureAuthCTA__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/auth-config/components/ConfigureAuthCTA.tsx");
/* harmony import */ var _components_ProviderCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/auth-config/components/ProviderCard.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/auth-config/state/actions.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/auth-config/index.ts");
















function mapStateToProps(state) {
  const { isLoading, providerStatuses, providers } = state.authConfig;
  return {
    isLoading,
    providerStatuses,
    providers
  };
}
const mapDispatchToProps = {
  loadSettings: _state_actions__WEBPACK_IMPORTED_MODULE_15__.loadSettings
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);
const AuthConfigPageUnconnected = ({
  providerStatuses,
  isLoading,
  loadSettings: loadSettings2,
  providers
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    loadSettings2();
  }, [loadSettings2]);
  const [showDrawer, setShowDrawer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const authProviders = (0,_index__WEBPACK_IMPORTED_MODULE_16__.getRegisteredAuthProviders)();
  const availableProviders = authProviders.filter((p) => !providerStatuses[p.id]?.hide);
  const onProviderCardClick = (providerType, enabled) => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)("authentication_ui_provider_clicked", { provider: providerType, enabled });
  };
  providers = providers.filter((p) => p.provider !== "saml");
  providers = providers.map((p) => {
    if (p.provider === "ldap") {
      return {
        ...p,
        settings: {
          ...p.settings,
          type: "LDAP"
        }
      };
    }
    return p;
  });
  const providerList = availableProviders.length ? [
    ...availableProviders.map((p) => ({
      provider: p.id,
      settings: { ...providerStatuses[p.id], configPath: p.configPath, type: p.type }
    })),
    ...providers
  ] : providers;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_9__.Page,
    {
      navId: "authentication",
      subTitle: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "auth-config-auth-config-page-unconnected.subtitle", children: [
        "Manage your auth settings and configure single sign-on. Find out more in our",
        " ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.TextLink,
          {
            external: true,
            href: "https://grafana.com/docs/grafana/next/setup-grafana/configure-security/configure-authentication",
            children: "documentation"
          }
        ),
        "."
      ] }),
      actions: app_core_config__WEBPACK_IMPORTED_MODULE_10__.config.buildInfo.edition !== _grafana_data_internal__WEBPACK_IMPORTED_MODULE_3__.GrafanaEdition.OpenSource && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, { icon: "cog", variant: "canvas", onClick: () => setShowDrawer(true), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "auth-config.auth-config-page-unconnected.auth-settings", children: "Auth settings" }) }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_9__.Page.Contents, { isLoading, children: !providerList.length ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ConfigureAuthCTA__WEBPACK_IMPORTED_MODULE_13__["default"], {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Grid, { gap: 3, minColumnWidth: 34, children: [
        providerList.filter(({ provider }) => !["grafana_com"].includes(provider)).map(({ provider, settings }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _components_ProviderCard__WEBPACK_IMPORTED_MODULE_14__.ProviderCard,
          {
            authType: settings.type || "OAuth",
            providerId: provider,
            enabled: settings.enabled,
            onClick: () => onProviderCardClick(provider, settings.enabled),
            configPath: settings.configPath
          },
          provider
        )),
        (0,_admin_EnterpriseAuthFeaturesCard__WEBPACK_IMPORTED_MODULE_11__.isOpenSourceBuildOrUnlicenced)() && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ProviderCard__WEBPACK_IMPORTED_MODULE_14__.ProviderSAMLCard, {}),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ProviderCard__WEBPACK_IMPORTED_MODULE_14__.ProviderSCIMCard, {})
        ] }),
        showDrawer && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AuthDrawer__WEBPACK_IMPORTED_MODULE_12__["default"], { onClose: () => setShowDrawer(false) })
      ] }) })
    }
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(AuthConfigPageUnconnected));


/***/ }),

/***/ "./public/app/features/auth-config/FieldRenderer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldRenderer: () => (/* binding */ FieldRenderer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/SecretInput/SecretInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Checkbox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/auth-config/fields.tsx");
/* harmony import */ var _utils_guards__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/auth-config/utils/guards.ts");








const FieldRenderer = ({
  field,
  register,
  errors,
  watch,
  setValue,
  getValues,
  control,
  unregister,
  secretConfigured,
  provider
}) => {
  const [isSecretConfigured, setIsSecretConfigured] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(secretConfigured);
  const isDependantField = typeof field !== "string";
  const name = isDependantField ? field.name : field;
  const parentValue = isDependantField ? watch(field.dependsOn) : null;
  const fieldData = (0,_fields__WEBPACK_IMPORTED_MODULE_11__.fieldMap)(provider)[name];
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useTheme2)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (isDependantField) {
      if (!parentValue) {
        unregister(name);
      }
    }
  }, [unregister, name, parentValue, isDependantField]);
  const isNotEmptySelectableValueArray = (current) => {
    return Array.isArray(current) && current.length > 0 && "value" in current[0];
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (fieldData.defaultValue) {
      const current = getValues(name);
      const obj = fieldData.options?.find(
        (option) => option.value === (isNotEmptySelectableValueArray(current) ? current[0].value : void 0)
      );
      setValue(name, obj?.value || fieldData.defaultValue.value);
    }
  }, []);
  if (!field) {
    console.log("missing field:", name);
    return null;
  }
  if (!!fieldData.hidden) {
    return null;
  }
  if (isDependantField) {
    const parentValue2 = watch(field.dependsOn);
    if (!parentValue2) {
      return null;
    }
  }
  const fieldProps = {
    label: fieldData.label,
    required: !!fieldData.validation?.required,
    invalid: !!errors[name],
    error: fieldData.validation?.message,
    description: fieldData.description,
    defaultValue: fieldData.defaultValue?.value
  };
  switch (fieldData.type) {
    case "text":
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, { ...fieldProps, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Input, { ...register(name, fieldData.validation), type: fieldData.type, id: name, autoComplete: "off" }) }, name);
    case "secret":
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, { ...fieldProps, htmlFor: name, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
        {
          name,
          control,
          rules: fieldData.validation,
          render: ({ field: { ref, value, ...field2 } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SecretInput,
            {
              ...field2,
              autoComplete: "off",
              id: name,
              value: typeof value === "string" ? value : "",
              isConfigured: isSecretConfigured,
              onReset: () => {
                setIsSecretConfigured(false);
                setValue(name, "");
              }
            }
          )
        }
      ) }, name);
    case "select":
      const watchOptions = watch(name);
      let options = fieldData.options;
      if (!fieldData.options?.length) {
        options = (0,_utils_guards__WEBPACK_IMPORTED_MODULE_12__.isSelectableValueArray)(watchOptions) ? watchOptions : [];
      }
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, { ...fieldProps, htmlFor: name, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
        {
          rules: fieldData.validation,
          name,
          control,
          render: ({ field: { ref, onChange, ...fieldProps2 }, fieldState: { invalid } }) => {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Select,
              {
                ...fieldProps2,
                placeholder: fieldData.placeholder,
                isMulti: fieldData.multi,
                invalid,
                inputId: name,
                options,
                allowCustomValue: !!fieldData.allowCustomValue,
                defaultValue: fieldData.defaultValue,
                onChange,
                onCreateOption: (v) => {
                  const customValue = { value: v, label: v };
                  onChange([...options || [], customValue]);
                }
              }
            );
          }
        }
      ) }, name);
    case "switch":
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, { ...fieldProps, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Switch, { ...register(name), id: name }) }, name);
    case "checkbox":
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Checkbox,
        {
          ...register(name),
          id: name,
          ...fieldProps,
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({ marginBottom: theme.spacing(2) })
        },
        name
      );
    case "custom":
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, { ...fieldProps, children: fieldData.content ? fieldData.content(setValue) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) }, name);
    default:
      console.error(`Unknown field type: ${fieldData.type}`);
      return null;
  }
};


/***/ }),

/***/ "./public/app/features/auth-config/ProviderConfigForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProviderConfigForm: () => (/* binding */ ProviderConfigForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/legacyEvents.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Collapse/CollapsableSection.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/Menu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/components/Dropdown/Dropdown.tsx");
/* harmony import */ var _core_components_FormPrompt_FormPrompt__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/core/components/FormPrompt/FormPrompt.tsx");
/* harmony import */ var _core_components_Page_Page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _FieldRenderer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/auth-config/FieldRenderer.tsx");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/auth-config/fields.tsx");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/auth-config/utils/data.ts");













const appEvents = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.getAppEvents)();
const ProviderConfigForm = ({ config, provider, isLoading }) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    getValues,
    unregister,
    formState: { errors, dirtyFields, isSubmitted }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({ defaultValues: (0,_utils_data__WEBPACK_IMPORTED_MODULE_23__.dataToDTO)(config), mode: "onSubmit", reValidateMode: "onChange" });
  const [isSaving, setIsSaving] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [submitError, setSubmitError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const dataSubmitted = isSubmitted && !submitError;
  const sections = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_fields__WEBPACK_IMPORTED_MODULE_22__.getSectionFields)()[provider], [provider]);
  const [resetConfig, setResetConfig] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const additionalActionsMenu = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Menu, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Menu.Item,
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "auth-config.provider-config-form.additional-actions-menu.label-reset-to-default-values",
        "Reset to default values"
      ),
      icon: "history-alt",
      onClick: () => {
        setResetConfig(true);
      }
    }
  ) });
  const onSubmit = async (data) => {
    setIsSaving(true);
    setSubmitError(false);
    const requestData = (0,_utils_data__WEBPACK_IMPORTED_MODULE_23__.dtoToData)(data, provider);
    try {
      await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.getBackendSrv)().put(
        `/api/v1/sso-settings/${provider}`,
        {
          id: config?.id,
          provider: config?.provider,
          settings: { ...requestData }
        },
        {
          showErrorAlert: false
        }
      );
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.reportInteraction)("grafana_authentication_ssosettings_saved", {
        provider,
        enabled: requestData.enabled
      });
      appEvents.publish({
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.AppEvents.alertSuccess.name,
        payload: ["Settings saved"]
      });
      reset(data);
      setTimeout(() => {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.locationService.push(`/admin/authentication`);
      }, 300);
    } catch (error) {
      let message = "";
      if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.isFetchError)(error)) {
        message = error.data.message;
      } else if (error instanceof Error) {
        message = error.message;
      }
      appEvents.publish({
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.AppEvents.alertError.name,
        payload: [message]
      });
      setSubmitError(true);
      setIsSaving(false);
    }
  };
  const onResetConfig = async () => {
    try {
      await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.getBackendSrv)().delete(`/api/v1/sso-settings/${provider}`, void 0, { showSuccessAlert: false });
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.reportInteraction)("grafana_authentication_ssosettings_removed", {
        provider
      });
      appEvents.publish({
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.AppEvents.alertSuccess.name,
        payload: ["Settings reset to defaults"]
      });
      setTimeout(() => {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.locationService.push(`/admin/authentication`);
      });
    } catch (error) {
      let message = "";
      if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.isFetchError)(error)) {
        message = error.data.message;
      } else if (error instanceof Error) {
        message = error.message;
      }
      appEvents.publish({
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.AppEvents.alertError.name,
        payload: [message]
      });
    }
  };
  const isEnabled = config?.settings.enabled;
  const onSaveAttempt = (toggleEnabled) => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.reportInteraction)("grafana_authentication_ssosettings_save_attempt", {
      provider,
      enabled: toggleEnabled ? !isEnabled : isEnabled
    });
    if (toggleEnabled) {
      setValue("enabled", !isEnabled);
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_20__.Page.Contents, { isLoading, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit(onSubmit), style: { maxWidth: "600px" }, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _core_components_FormPrompt_FormPrompt__WEBPACK_IMPORTED_MODULE_19__.FormPrompt,
        {
          confirmRedirect: !!Object.keys(dirtyFields).length && !dataSubmitted,
          onDiscard: () => {
            (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.reportInteraction)("grafana_authentication_ssosettings_abandoned", {
              provider
            });
            reset();
          }
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("auth-config.provider-config-form.label-enabled", "Enabled"), hidden: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Switch,
        {
          ...register("enabled"),
          id: "enabled",
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("auth-config.provider-config-form.enabled-label-enabled", "Enabled")
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { gap: 2, direction: "column", children: sections.filter((section) => !section.hidden).map((section, index) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.CollapsableSection, { label: section.name, isOpen: index === 0, children: section.fields.filter((field) => typeof field !== "string" ? !field.hidden : true).map((field) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _FieldRenderer__WEBPACK_IMPORTED_MODULE_21__.FieldRenderer,
            {
              field,
              control,
              errors,
              setValue,
              getValues,
              register,
              watch,
              unregister,
              provider,
              secretConfigured: !!config?.settings.clientSecret
            },
            typeof field === "string" ? field : field.name
          );
        }) }, section.name);
      }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Box, { display: "flex", gap: 2, marginTop: 5, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { alignItems: "center", gap: 2, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Button,
          {
            type: "submit",
            disabled: isSaving,
            onClick: () => onSaveAttempt(true),
            variant: isEnabled ? "secondary" : void 0,
            children: isSaving ? isEnabled ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("auth-config.provider-config-form.disabling", "Disabling...") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("auth-config.provider-config-form.saving", "Saving...") : isEnabled ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("auth-config.provider-config-form.disable", "Disable") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("auth-config.provider-config-form.save-and-enable", "Save and enable")
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Button, { type: "submit", disabled: isSaving, variant: "secondary", onClick: () => onSaveAttempt(false), children: isSaving ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("auth-config.provider-config-form.saving", "Saving...") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("auth-config.provider-config-form.save", "Save") }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.LinkButton, { href: "/admin/authentication", variant: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "auth-config.provider-config-form.discard", children: "Discard" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.Dropdown, { overlay: additionalActionsMenu, placement: "bottom-start", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.IconButton,
          {
            tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("auth-config.provider-config-form.tooltip-more-actions", "More actions"),
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("auth-config.provider-config-form.title-more-actions", "More actions"),
            tooltipPlacement: "top",
            size: "md",
            variant: "secondary",
            name: "ellipsis-v",
            hidden: config?.source === "system"
          }
        ) })
      ] }) })
    ] }),
    resetConfig && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.ConfirmModal,
      {
        isOpen: true,
        icon: "trash-alt",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("auth-config.provider-config-form.title-reset", "Reset"),
        body: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { direction: "column", gap: 3, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "auth-config.provider-config-form.reset-configuration", children: "Are you sure you want to reset this configuration?" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "auth-config.provider-config-form.reset-configuration-description", children: "After resetting these settings Grafana will use the provider configuration from the system (config file/environment variables) if any." }) })
        ] }),
        confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("auth-config.provider-config-form.confirmText-reset", "Reset"),
        onDismiss: () => setResetConfig(false),
        onConfirm: async () => {
          await onResetConfig();
          setResetConfig(false);
        }
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/features/auth-config/ProviderConfigPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProviderConfigPage: () => (/* binding */ ProviderConfigPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_PageNotFound_PageNotFound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/components/PageNotFound/PageNotFound.tsx");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _ProviderConfigForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/auth-config/ProviderConfigForm.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/auth-config/constants.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/auth-config/state/actions.ts");












const getPageNav = (config) => {
  if (!config) {
    return {
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("auth-config.get-page-nav.text.authentication", "Authentication"),
      subTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
        "auth-config.get-page-nav.subTitle.configure-authentication-providers",
        "Configure authentication providers"
      ),
      icon: "shield",
      id: "authentication"
    };
  }
  const providerDisplayName = _constants__WEBPACK_IMPORTED_MODULE_11__.UIMap[config.provider][1] || config.provider.toUpperCase();
  return {
    text: providerDisplayName || "",
    subTitle: `To configure ${providerDisplayName} OAuth2 you must register your application with ${providerDisplayName}. The provider will generate a Client ID and Client Secret for you to use.`,
    icon: config.settings.icon || "shield",
    id: config.provider
  };
};
const ProviderConfigPage = () => {
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
  const { isLoading, providers } = (0,app_types_store__WEBPACK_IMPORTED_MODULE_9__.useSelector)((store) => store.authConfig);
  const { provider = "" } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_2__.useParams)();
  const config = providers.find((config2) => config2.provider === provider);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_12__.loadProviders)(provider));
  }, [dispatch, provider]);
  if (!config || !config.provider || !_constants__WEBPACK_IMPORTED_MODULE_11__.UIMap[config.provider]) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_PageNotFound_PageNotFound__WEBPACK_IMPORTED_MODULE_8__.PageNotFound, {});
  }
  const pageNav = getPageNav(config);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__.Page,
    {
      navId: "authentication",
      pageNav,
      renderTitle: (title) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { gap: 2, alignItems: "center", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "h1", children: title }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Badge,
          {
            text: config.settings.enabled ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("auth-config.provider-config-page.text-badge-enabled", "Enabled") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("auth-config.provider-config-page.text-badge-not-enabled", "Not enabled"),
            color: config.settings.enabled ? "green" : "blue",
            icon: config.settings.enabled ? "check" : void 0
          }
        )
      ] }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ProviderConfigForm__WEBPACK_IMPORTED_MODULE_10__.ProviderConfigForm, { config, isLoading, provider })
    }
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProviderConfigPage);


/***/ }),

/***/ "./public/app/features/auth-config/components/ConfigureAuthCTA.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





const ConfigureAuthCTA = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { gap: 1, alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "cog" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "auth-config.configure-auth-cta.configuration-required", children: "Configuration required" }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { variant: "bodySmall", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "auth-config.configure-auth-cta.authentication-configuration-created-moment", children: "You have no authentication configuration created at the moment." }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TextLink, { href: "https://grafana.com/docs/grafana/latest/auth/overview/", external: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "auth-config.configure-auth-cta.refer-documentation-configure-authentication", children: "Refer to the documentation on how to configure authentication" }) })
  ] });
};
const getStyles = (theme) => {
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(2),
      backgroundColor: theme.colors.background.secondary,
      borderRadius: theme.shape.radius.default,
      padding: theme.spacing(3),
      width: "max-content",
      margin: theme.spacing(3, "auto")
    })
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigureAuthCTA);


/***/ }),

/***/ "./public/app/features/auth-config/components/ProviderCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProviderCard: () => (/* binding */ ProviderCard),
/* harmony export */   ProviderSAMLCard: () => (/* binding */ ProviderSAMLCard),
/* harmony export */   ProviderSCIMCard: () => (/* binding */ ProviderSCIMCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/icon.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var app_core_components_Branding_CloudEnterpriseBadge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/Branding/CloudEnterpriseBadge.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/auth-config/constants.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/auth-config/utils/url.ts");








function ProviderCard({ providerId, enabled, configPath, authType, onClick }) {
  const url = (0,_utils_url__WEBPACK_IMPORTED_MODULE_9__.getProviderUrl)({ configPath, id: providerId });
  const [iconName, displayName] = _constants__WEBPACK_IMPORTED_MODULE_8__.UIMap[providerId] || ["lock", providerId.toUpperCase()];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card, { href: url, onClick, noMargin: true, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card.Heading, { children: displayName }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card.Meta, { children: authType }),
    (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.isIconName)(iconName) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card.Figure, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: iconName, size: "xxxl" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card.Actions, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Badge,
      {
        text: enabled ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.provider-card.text-badge-enabled", "Enabled") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.provider-card.text-badge-not-enabled", "Not enabled"),
        color: enabled ? "green" : "blue"
      }
    ) })
  ] });
}
function ProviderSAMLCard() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card, { noMargin: true, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card.Heading, { children: "SAML" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card.Meta, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TextLink,
      {
        external: true,
        variant: "bodySmall",
        color: "secondary",
        href: "https://grafana.com/auth/sign-up/create-user?cloud-auth=&redirectPath=cloud-auth&utm_source=oss-grafana&cnt=admin-authorization-saml",
        children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.provider-card.saml-learn-more", "Single sign-on (SSO) with SAML.")
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card.Figure, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "lock", size: "xxxl" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card.Actions, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Branding_CloudEnterpriseBadge__WEBPACK_IMPORTED_MODULE_7__.CloudEnterpriseBadge, {}) })
  ] });
}
function ProviderSCIMCard() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card, { noMargin: true, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card.Heading, { children: "SCIM" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card.Meta, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TextLink,
      {
        external: true,
        variant: "bodySmall",
        color: "secondary",
        href: "https://grafana.com/auth/sign-up/create-user?cloud-auth=&redirectPath=cloud-auth&utm_source=oss-grafana&cnt=admin-authorization-scim",
        children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.provider-card.scim-learn-more", " Sync users and teams with SCIM.")
      }
    ) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card.Figure, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "scim", size: "xxxl" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card.Actions, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Branding_CloudEnterpriseBadge__WEBPACK_IMPORTED_MODULE_7__.CloudEnterpriseBadge, {}) })
  ] });
}


/***/ }),

/***/ "./public/app/features/auth-config/components/ServerDiscoveryField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerDiscoveryField: () => (/* binding */ ServerDiscoveryField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/legacyEvents.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _ServerDiscoveryModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/auth-config/components/ServerDiscoveryModal.tsx");








const ServerDiscoveryField = ({ setValue }) => {
  const appEvents = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.getAppEvents)();
  const [isModalOpen, setModalVisibility] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const onClose = () => setModalVisibility(false);
  const onSuccess = async (data) => {
    setLoading(true);
    try {
      const wellKnownSuffix = "/.well-known/openid-configuration";
      const url = new URL(data.url);
      if (!url.pathname.includes(wellKnownSuffix)) {
        data.url = url.origin + wellKnownSuffix;
      }
      const res = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getBackendSrv)().get(data.url);
      if (!res["token_endpoint"] || !res["authorization_endpoint"]) {
        appEvents.publish({
          type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AppEvents.alertWarning.name,
          payload: ["The URL provided is not a valid .well-known/openid-configuration endpoint"]
        });
        return;
      }
      setValue("tokenUrl", res["token_endpoint"]);
      setValue("authUrl", res["authorization_endpoint"]);
      if (res["userinfo_endpoint"]) {
        setValue("apiUrl", res["userinfo_endpoint"]);
      }
      appEvents.publish({
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AppEvents.alertSuccess.name,
        payload: ["OpenID Connect Discovery URL has been successfully fetched."]
      });
    } catch (error) {
      appEvents.publish({
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AppEvents.alertWarning.name,
        payload: ["Failed to fetch URL or invalid content"]
      });
    } finally {
      onClose();
      setLoading(false);
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
      {
        type: "button",
        variant: "secondary",
        onClick: () => {
          setModalVisibility(true);
        },
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "oauth.form.server-discovery-action-button", children: "Enter OpenID Connect Discovery URL" })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ServerDiscoveryModal__WEBPACK_IMPORTED_MODULE_7__.ServerDiscoveryModal, { isOpen: isModalOpen, onClose, onSuccess, isLoading })
  ] });
};


/***/ }),

/***/ "./public/app/features/auth-config/components/ServerDiscoveryModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerDiscoveryModal: () => (/* binding */ ServerDiscoveryModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/auth-config/utils/url.ts");






const ServerDiscoveryModal = ({ isOpen, onClose, onSuccess, isLoading }) => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({
    mode: "onBlur",
    defaultValues: {
      url: ""
    }
  });
  const validateUrl = (value) => {
    if (value === "") {
      return "Please enter the .well-known/openid-configuration endpoint for your IdP";
    }
    if (!(0,_utils_url__WEBPACK_IMPORTED_MODULE_7__.isUrlValid)(value)) {
      return "Please enter a valid URL";
    }
    return true;
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.server-discovery-modal.title-open-id-connect-discovery-url",
        "OpenID Connect Discovery URL"
      ),
      onDismiss: onClose,
      onClickBackdrop: onClose,
      isOpen,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        "form",
        {
          onSubmit: (e) => {
            e.stopPropagation();
            return handleSubmit(onSuccess)(e);
          },
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field,
              {
                label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
                  "auth-config.server-discovery-modal.label-the-wellknownopenidconfiguration-endpoint-for-your-id-p",
                  "The .well-known/openid-configuration endpoint for your IdP"
                ),
                invalid: !!errors.url,
                error: errors.url?.message,
                htmlFor: "url",
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input, { ...register("url", { validate: validateUrl }), width: 80, id: "url" })
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal.ButtonRow, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { type: "submit", variant: "primary", disabled: isLoading, children: isLoading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "oauth.form.server-discovery-modal-loading", children: "Loading..." }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "oauth.form.server-discovery-modal-submit", children: "Submit" }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { type: "button", variant: "secondary", onClick: onClose, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "oauth.form.server-discovery-modal-close", children: "Close" }) })
            ] })
          ]
        }
      )
    }
  );
};


/***/ }),

/***/ "./public/app/features/auth-config/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_PATH: () => (/* binding */ BASE_PATH),
/* harmony export */   UIMap: () => (/* binding */ UIMap)
/* harmony export */ });

const BASE_PATH = "admin/authentication/";
const UIMap = {
  github: ["github", "GitHub"],
  gitlab: ["gitlab", "GitLab"],
  google: ["google", "Google"],
  generic_oauth: ["lock", "Generic OAuth"],
  grafana_com: ["grafana", "Grafana.com"],
  azuread: ["microsoft", "Entra ID"],
  okta: ["okta", "Okta"],
  scim: ["scim", "SCIM"]
};


/***/ }),

/***/ "./public/app/features/auth-config/fields.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fieldMap: () => (/* binding */ fieldMap),
/* harmony export */   getSectionFields: () => (/* binding */ getSectionFields)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/uuid/dist/esm-browser/validate.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var _components_ServerDiscoveryField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/auth-config/components/ServerDiscoveryField.tsx");
/* harmony import */ var _utils_guards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/auth-config/utils/guards.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/auth-config/utils/url.ts");










const getSectionFields = () => {
  const generalSettingsLabel = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.section-general-settings", "General settings");
  const userMappingLabel = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.section-user-mapping", "User mapping");
  const extraSecurityLabel = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.section-extra-security", "Extra security measures");
  return {
    azuread: [
      {
        name: generalSettingsLabel,
        id: "general",
        fields: [
          "name",
          "clientAuthentication",
          "clientId",
          "clientSecret",
          "managedIdentityClientId",
          "federatedCredentialAudience",
          "scopes",
          "authUrl",
          "tokenUrl",
          "allowSignUp",
          "autoLogin",
          "signoutRedirectUrl",
          "loginPrompt"
        ]
      },
      {
        name: userMappingLabel,
        id: "user",
        fields: ["roleAttributeStrict", "orgMapping", "allowAssignGrafanaAdmin", "skipOrgRoleSync"]
      },
      {
        name: extraSecurityLabel,
        id: "extra",
        fields: [
          "allowedOrganizations",
          "allowedDomains",
          "allowedGroups",
          "forceUseGraphApi",
          "domainHint",
          "usePkce",
          "useRefreshToken",
          "tlsSkipVerifyInsecure",
          "tlsClientCert",
          "tlsClientKey",
          "tlsClientCa",
          "workloadIdentityTokenFile"
        ]
      }
    ],
    generic_oauth: [
      {
        name: generalSettingsLabel,
        id: "general",
        fields: [
          "name",
          "clientId",
          "clientSecret",
          "authStyle",
          "scopes",
          "serverDiscoveryUrl",
          "authUrl",
          "tokenUrl",
          "apiUrl",
          "allowSignUp",
          "autoLogin",
          "signoutRedirectUrl",
          "loginPrompt"
        ]
      },
      {
        name: userMappingLabel,
        id: "user",
        fields: [
          "nameAttributePath",
          "loginAttributePath",
          "emailAttributeName",
          "emailAttributePath",
          "idTokenAttributeName",
          "roleAttributePath",
          "roleAttributeStrict",
          "orgMapping",
          "orgAttributePath",
          "allowAssignGrafanaAdmin",
          "skipOrgRoleSync"
        ]
      },
      {
        name: extraSecurityLabel,
        id: "extra",
        fields: [
          "allowedOrganizations",
          "allowedDomains",
          "defineAllowedGroups",
          { name: "allowedGroups", dependsOn: "defineAllowedGroups" },
          { name: "groupsAttributePath", dependsOn: "defineAllowedGroups" },
          "defineAllowedTeamsIds",
          { name: "teamIds", dependsOn: "defineAllowedTeamsIds" },
          { name: "teamsUrl", dependsOn: "defineAllowedTeamsIds" },
          { name: "teamIdsAttributePath", dependsOn: "defineAllowedTeamsIds" },
          "usePkce",
          "useRefreshToken",
          "tlsSkipVerifyInsecure",
          "tlsClientCert",
          "tlsClientKey",
          "tlsClientCa"
        ]
      }
    ],
    google: [
      {
        name: generalSettingsLabel,
        id: "general",
        fields: [
          "name",
          "clientId",
          "clientSecret",
          "scopes",
          "allowSignUp",
          "autoLogin",
          "signoutRedirectUrl",
          "loginPrompt"
        ]
      },
      {
        name: userMappingLabel,
        id: "user",
        fields: [
          "roleAttributePath",
          "roleAttributeStrict",
          "orgMapping",
          "allowAssignGrafanaAdmin",
          "skipOrgRoleSync"
        ]
      },
      {
        name: extraSecurityLabel,
        id: "extra",
        fields: [
          "validateHd",
          "hostedDomain",
          "allowedDomains",
          "allowedGroups",
          "usePkce",
          "useRefreshToken",
          "tlsSkipVerifyInsecure",
          "tlsClientCert",
          "tlsClientKey",
          "tlsClientCa"
        ]
      }
    ],
    github: [
      {
        name: generalSettingsLabel,
        id: "general",
        fields: [
          "name",
          "clientId",
          "clientSecret",
          "scopes",
          "allowSignUp",
          "autoLogin",
          "signoutRedirectUrl",
          "loginPrompt"
        ]
      },
      {
        name: userMappingLabel,
        id: "user",
        fields: [
          "roleAttributePath",
          "roleAttributeStrict",
          "orgMapping",
          "allowAssignGrafanaAdmin",
          "skipOrgRoleSync"
        ]
      },
      {
        name: extraSecurityLabel,
        id: "extra",
        fields: [
          "allowedOrganizations",
          "allowedDomains",
          "teamIds",
          "usePkce",
          "useRefreshToken",
          "tlsSkipVerifyInsecure",
          "tlsClientCert",
          "tlsClientKey",
          "tlsClientCa"
        ]
      }
    ],
    gitlab: [
      {
        name: generalSettingsLabel,
        id: "general",
        fields: [
          "name",
          "clientId",
          "clientSecret",
          "scopes",
          "allowSignUp",
          "autoLogin",
          "signoutRedirectUrl",
          "loginPrompt"
        ]
      },
      {
        name: userMappingLabel,
        id: "user",
        fields: [
          "roleAttributePath",
          "roleAttributeStrict",
          "orgMapping",
          "allowAssignGrafanaAdmin",
          "skipOrgRoleSync"
        ]
      },
      {
        name: extraSecurityLabel,
        id: "extra",
        fields: [
          "allowedDomains",
          "allowedGroups",
          "usePkce",
          "useRefreshToken",
          "tlsSkipVerifyInsecure",
          "tlsClientCert",
          "tlsClientKey",
          "tlsClientCa"
        ]
      }
    ],
    okta: [
      {
        name: generalSettingsLabel,
        id: "general",
        fields: [
          "name",
          "clientId",
          "clientSecret",
          "scopes",
          "authUrl",
          "tokenUrl",
          "apiUrl",
          "allowSignUp",
          "autoLogin",
          "signoutRedirectUrl"
        ]
      },
      {
        name: userMappingLabel,
        id: "user",
        fields: [
          "roleAttributePath",
          "roleAttributeStrict",
          "orgMapping",
          "orgAttributePath",
          "allowAssignGrafanaAdmin",
          "skipOrgRoleSync"
        ]
      },
      {
        name: extraSecurityLabel,
        id: "extra",
        fields: [
          "allowedDomains",
          "allowedGroups",
          "usePkce",
          "useRefreshToken",
          "tlsSkipVerifyInsecure",
          "tlsClientCert",
          "tlsClientKey",
          "tlsClientCa"
        ]
      }
    ]
  };
};
const clientIDLabel = "Client ID";
const clientSecretLabel = "Client secret";
const scopesLabel = "Scopes";
const openIDConnectDiscoveryLabel = "OpenID Connect Discovery URL";
const authURLLabel = "Auth URL";
const tokenURLLabel = "Token URL";
const apiURLLabel = "API URL";
const jmesPathLabel = "JMESPath";
const workloadIdentityLabel = "Workload identity";
function fieldMap(provider) {
  const orgMappingLabel = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.organization-mapping-label", "Organization mapping");
  const orgAttributePathLabel = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
    "auth-config.fields.organization-attribute-path-label",
    "Organization attribute path"
  );
  const teamsURLLabel = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.teams-url-label", "Teams URL");
  const teamIDsAttributePathLabel = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.team-ids-attribute-path-label", "Team IDs attribute path");
  const allowedGroupsLabel = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.allowed-groups-label", "Allowed groups");
  const groupsAttributePathLabel = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.groups-attribute-path-label", "Groups attribute path");
  const teamIDsLabel = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.team-ids-label", "Team IDs");
  const allowedDomainsLabel = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.allowed-domains-label", "Allowed domains");
  return {
    clientAuthentication: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.client-authentication-label", "Client authentication"),
      type: "select",
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.client-authentication-description",
        "The client authentication method used to authenticate to the token endpoint."
      ),
      multi: false,
      options: clientAuthenticationOptions(provider),
      defaultValue: { value: "none", label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.field-map.label.none", "None") },
      validation: {
        required: true,
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.required", "This field is required")
      }
    },
    clientId: {
      label: clientIDLabel,
      type: "text",
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.client-id-description", "The {{ clientIDLabel }} of your OAuth2 app.", {
        clientIDLabel
      }),
      validation: {
        required: true,
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.required", "This field is required")
      }
    },
    clientSecret: {
      label: clientSecretLabel,
      type: "secret",
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.client-secret-description",
        "The {{ clientSecretLabel }} of your OAuth2 app.",
        {
          clientSecretLabel
        }
      )
    },
    managedIdentityClientId: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.managed-identity-client-id-label", "FIC managed identity client ID"),
      type: "text",
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.managed-identity-client-id-description",
        "The managed identity client ID of the federated identity credential of your OAuth2 app."
      )
    },
    federatedCredentialAudience: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.federated-credential-audience-label", "FIC audience"),
      type: "text",
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.federated-credential-audience-description",
        "The audience of the federated identity credential of your OAuth2 app."
      )
    },
    workloadIdentityTokenFile: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.workload-identity-token-file-label", "{{ workloadIdentityLabel }} token file", {
        workloadIdentityLabel
      }),
      type: "text",
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.workload-identity-token-file-description",
        'The file path to the token file used to authenticate to the OAuth2 provider. This is only required when client authentication is set to "workload_identity". Defaults to /var/run/secrets/azure/tokens/azure-identity-token.'
      ),
      validation: {
        validate: (value, formValues) => {
          let clientAuth = formValues.clientAuthentication;
          if ((0,_utils_guards__WEBPACK_IMPORTED_MODULE_7__.isSelectableValue)(clientAuth)) {
            clientAuth = clientAuth.value;
          }
          if (clientAuth === "workload_identity") {
            return !!value;
          }
          return true;
        },
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "auth-config.fields.workload-identity-token-file-required",
          'This field must be set when client authentication is set to "Workload identity".'
        )
      }
    },
    allowedOrganizations: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.allowed-organizations-label", "Allowed organizations"),
      type: "select",
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.allowed-organizations-description",
        "List of comma- or space-separated organizations. The user should be a member \nof at least one organization to log in."
      ),
      multi: true,
      allowCustomValue: true,
      options: [],
      placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.allowed-organizations-placeholder",
        "Enter organizations (my-team, myteam...) and press Enter to add"
      )
    },
    allowedDomains: {
      label: allowedDomainsLabel,
      type: "select",
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.allowed-domains-description",
        "List of comma- or space-separated domains. The user should belong to at least \none domain to log in."
      ),
      multi: true,
      allowCustomValue: true,
      options: []
    },
    authUrl: {
      label: authURLLabel,
      type: "text",
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.auth-url-description", "The authorization endpoint of your OAuth2 provider."),
      validation: {
        required: true,
        validate: (value) => {
          return (0,_utils_url__WEBPACK_IMPORTED_MODULE_8__.isUrlValid)(value);
        },
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.auth-url-required", "This field is required and must be a valid URL.")
      }
    },
    authStyle: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.auth-style-label", "Auth style"),
      type: "select",
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.auth-style-description",
        'It determines how "{{ clientIDLabel }}" and "{{ clientSecretLabel }}" are sent to Oauth2 provider. Default is AutoDetect.',
        { clientIDLabel, clientSecretLabel }
      ),
      multi: false,
      options: [
        /* eslint-disable @grafana/i18n/no-untranslated-strings */
        { value: "AutoDetect", label: "AutoDetect" },
        { value: "InParams", label: "InParams" },
        { value: "InHeader", label: "InHeader" }
      ],
      defaultValue: { value: "AutoDetect", label: "AutoDetect" }
      /* eslint-enable @grafana/i18n/no-untranslated-strings */
    },
    tokenUrl: {
      label: tokenURLLabel,
      type: "text",
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.token-url-description", "The token endpoint of your OAuth2 provider."),
      validation: {
        required: true,
        validate: (value) => {
          return (0,_utils_url__WEBPACK_IMPORTED_MODULE_8__.isUrlValid)(value);
        },
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.token-url-required", "This field is required and must be a valid URL.")
      }
    },
    scopes: {
      label: scopesLabel,
      type: "select",
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.scopes-description",
        "List of comma- or space-separated OAuth2 {{ scopesLabel }}.",
        {
          scopesLabel
        }
      ),
      multi: true,
      allowCustomValue: true,
      options: []
    },
    allowedGroups: {
      label: allowedGroupsLabel,
      type: "select",
      description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "auth-config.fields.allowed-groups-description", children: "List of comma- or space-separated groups. The user should be a member of at least one group to log in." }),
        " ",
        provider === "generic_oauth" && (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "auth-config.fields.allowed-groups-description-oauth",
          'If you configure "{{ allowedGroupsLabel }}", you must also configure "{{ groupsAttributePathLabel }}".',
          { allowedGroupsLabel, groupsAttributePathLabel }
        )
      ] }),
      multi: true,
      allowCustomValue: true,
      options: [],
      validation: provider === "azuread" ? {
        validate: (value) => {
          if (typeof value === "string") {
            return (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
          }
          if ((0,_utils_guards__WEBPACK_IMPORTED_MODULE_7__.isSelectableValueArray)(value)) {
            return value.every((v) => v?.value && (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(v.value));
          }
          return true;
        },
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "auth-config.fields.allowed-groups-object-ids",
          "{{ allowedGroupsLabel }} must be {{ objectIDsField }}.",
          {
            objectIDsField: "Object IDs"
          }
        )
      } : void 0
    },
    apiUrl: {
      label: apiURLLabel,
      type: "text",
      description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "auth-config.fields.api-url-description", children: [
        "The user information endpoint of your OAuth2 provider. Information returned by this endpoint must be compatible with",
        " ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TextLink, { href: "https://connect2id.com/products/server/docs/api/userinfo", external: true, variant: "bodySmall", children: "OpenID UserInfo" }),
        "."
      ] }),
      validation: {
        required: false,
        validate: (value) => {
          if (typeof value !== "string") {
            return false;
          }
          if (value.length) {
            return (0,_utils_url__WEBPACK_IMPORTED_MODULE_8__.isUrlValid)(value);
          }
          return true;
        },
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.api-url-required", "This field must be a valid URL if set.")
      }
    },
    roleAttributePath: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.role-attribute-path-label", "Role attribute path"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.role-attribute-path-description",
        "{{ jmesPathLabel }} expression to use for Grafana role lookup.",
        { jmesPathLabel }
      ),
      type: "text",
      validation: {
        required: false
      }
    },
    name: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.display-name-label", "Display name"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.display-name-description",
        'Will be displayed on the login page as "Sign in with ...". Helpful if you use more than one identity providers or SSO protocols.'
      ),
      type: "text"
    },
    allowSignUp: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.allow-sign-up-label", "Allow sign up"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.allow-sign-up-description",
        "If not enabled, only existing Grafana users can log in using OAuth."
      ),
      type: "switch"
    },
    autoLogin: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.auto-login-label", "Auto login"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.auto-login-description", "Log in automatically, skipping the login screen."),
      type: "switch"
    },
    signoutRedirectUrl: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.signout-redirect-url-label", "Sign out redirect URL"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.signout-redirect-url-description",
        "The URL to redirect the user to after signing out from Grafana."
      ),
      type: "text",
      validation: {
        required: false
      }
    },
    emailAttributeName: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.email-attribute-name-label", "Email attribute name"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.email-attribute-name-description",
        "Name of the key to use for user email lookup within the attributes map of OAuth2 ID token."
      ),
      type: "text"
    },
    emailAttributePath: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.email-attribute-path-label", "Email attribute path"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.email-attribute-path-description",
        "JMESPath expression to use for user email lookup from the user information."
      ),
      type: "text"
    },
    nameAttributePath: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.name-attribute-path-label", "Name attribute path"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.name-attribute-path-description",
        "JMESPath expression to use for user name lookup from the user ID token. \nThis name will be used as the user's display name."
      ),
      type: "text"
    },
    loginAttributePath: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.login-attribute-path-label", "Login attribute path"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.login-attribute-path-description",
        "JMESPath expression to use for user login lookup from the user ID token."
      ),
      type: "text"
    },
    idTokenAttributeName: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.id-token-attribute-name-label", "ID token attribute name"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.id-token-attribute-name-description",
        "The name of the key used to extract the ID token from the returned OAuth2 token."
      ),
      type: "text"
    },
    roleAttributeStrict: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.role-attribute-strict-label", "Role attribute strict mode"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.role-attribute-strict-description",
        "If enabled, denies user login if the Grafana role cannot be extracted using Role attribute path."
      ),
      type: "switch"
    },
    allowAssignGrafanaAdmin: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.allow-assign-grafana-admin-label", "Allow assign Grafana admin"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.allow-assign-grafana-admin-description",
        "If enabled, it will automatically sync the Grafana server administrator role."
      ),
      type: "switch",
      hidden: !app_core_core__WEBPACK_IMPORTED_MODULE_5__.contextSrv.isGrafanaAdmin
    },
    skipOrgRoleSync: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.skip-org-role-sync-label", "Skip organization role sync"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.skip-org-role-sync-description",
        "Prevent synchronizing users' organization roles from your IdP."
      ),
      type: "switch"
    },
    orgMapping: {
      label: orgMappingLabel,
      description: orgMappingDescription(provider),
      type: "select",
      hidden: !app_core_core__WEBPACK_IMPORTED_MODULE_5__.contextSrv.isGrafanaAdmin,
      multi: true,
      allowCustomValue: true,
      options: [],
      placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.organization-mapping-placeholder",
        "Enter mappings (my-team:1:Viewer...) and press Enter to add"
      )
    },
    orgAttributePath: {
      label: orgAttributePathLabel,
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.organization-attribute-path-description",
        'JMESPath expression to use for organization lookup. If you configure "{{ orgMappingLabel }}", you must also configure "{{ orgAttributePathLabel }}".',
        { orgMappingLabel, orgAttributePathLabel }
      ),
      type: "text",
      hidden: !(["generic_oauth", "okta"].includes(provider) && app_core_core__WEBPACK_IMPORTED_MODULE_5__.contextSrv.isGrafanaAdmin)
    },
    defineAllowedGroups: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.define-allowed-groups-label", "Define allowed groups"),
      type: "switch"
    },
    defineAllowedTeamsIds: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.define-allowed-teams-ids-label", "Define allowed teams IDs"),
      type: "switch"
    },
    forceUseGraphApi: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.force-use-graph-api-label", "Force use Graph API"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.force-use-graph-api-description",
        "If enabled, Grafana will fetch the users' groups using the Microsoft Graph API."
      ),
      type: "checkbox"
    },
    usePkce: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.use-pkce-label", "Use PKCE"),
      description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "auth-config.fields.use-pkce-description", children: [
        "If enabled, Grafana will use",
        " ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TextLink, { external: true, variant: "bodySmall", href: "https://datatracker.ietf.org/doc/html/rfc7636", children: "Proof Key for Code Exchange (PKCE)" }),
        " ",
        "with the OAuth2 Authorization Code Grant."
      ] }),
      type: "checkbox"
    },
    useRefreshToken: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.use-refresh-token-label", "Use refresh token"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.use-refresh-token-description",
        "If enabled, Grafana will fetch a new access token using the refresh token provided by the OAuth2 provider."
      ),
      type: "checkbox"
    },
    tlsClientCa: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.tls-client-ca-label", "TLS client CA"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.tls-client-ca-description",
        "The file path to the trusted certificate authority list. Is not applicable on Grafana Cloud."
      ),
      type: "text",
      hidden: !_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.localFileSystemAvailable
    },
    tlsClientCert: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.tls-client-cert-label", "TLS client cert"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.tls-client-cert-description",
        "The file path to the certificate. Is not applicable on Grafana Cloud."
      ),
      type: "text",
      hidden: !_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.localFileSystemAvailable
    },
    tlsClientKey: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.tls-client-key-label", "TLS client key"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.tls-client-key-description",
        "The file path to the key. Is not applicable on Grafana Cloud."
      ),
      type: "text",
      hidden: !_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.localFileSystemAvailable
    },
    tlsSkipVerifyInsecure: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.tls-skip-verify-label", "TLS skip verify"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.tls-skip-verify-description",
        "If enabled, the client accepts any certificate presented by the server and any host \nname in that certificate. You should only use this for testing, because this mode leaves \nSSL/TLS susceptible to man-in-the-middle attacks."
      ),
      type: "switch"
    },
    groupsAttributePath: {
      label: groupsAttributePathLabel,
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.groups-attribute-path-description",
        'JMESPath expression to use for user group lookup. If you configure "{{ allowedGroupsLabel }}", \nyou must also configure "{{ groupsAttributePathLabel }}".',
        { allowedGroupsLabel, groupsAttributePathLabel }
      ),
      type: "text"
    },
    teamsUrl: {
      label: teamsURLLabel,
      description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "auth-config.fields.teams-url-description", children: "The URL used to query for Team IDs. If not set, the default value is /teams." }),
        " ",
        provider === "generic_oauth" && (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "auth-config.fields.teams-url-description-oauth",
          'If you configure "{{ teamsURLLabel }}", you must also configure "{{ teamIDsAttributePathLabel }}".',
          { teamsURLLabel, teamIDsAttributePathLabel }
        )
      ] }),
      type: "text",
      validation: {
        validate: (value, formValues) => {
          let result = true;
          if (formValues.teamIds.length) {
            result = !!value;
          }
          if (typeof value === "string" && value.length) {
            result = (0,_utils_url__WEBPACK_IMPORTED_MODULE_8__.isUrlValid)(value);
          }
          return result;
        },
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "auth-config.fields.teams-url-required",
          'This field must be set if "{{ teamIDsLabel }}" are configured and must be a valid URL.',
          { teamIDsLabel }
        )
      }
    },
    teamIdsAttributePath: {
      label: teamIDsAttributePathLabel,
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.team-ids-attribute-path-description",
        'The JMESPath expression to use for Grafana Team ID lookup within the results returned by the "{{ teamsURLLabel }}" endpoint.',
        { teamsURLLabel }
      ),
      type: "text",
      validation: {
        validate: (value, formValues) => {
          if (formValues.teamIds.length) {
            return !!value;
          }
          return true;
        },
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "auth-config.fields.team-ids-attribute-path-required",
          'This field must be set if "{{ teamIDsLabel }}" are configured.',
          { teamIDsLabel }
        )
      }
    },
    teamIds: {
      label: teamIDsLabel,
      type: "select",
      description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        provider === "github" ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.team-ids-github", "Integer list of Team IDs.") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.team-ids-other", "String list of Team IDs."),
        " ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "auth-config.fields.team-ids-description", children: "If set, the user must be a member of one of the given teams to log in." }),
        " ",
        provider === "generic_oauth" && (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "auth-config.fields.team-ids-description-oauth",
          'If you configure "{{ teamIDsLabel }}", you must also configure "{{ teamsURLLabel }}" and "{{ teamIDsAttributePathLabel }}".',
          { teamIDsLabel, teamsURLLabel, teamIDsAttributePathLabel }
        )
      ] }),
      multi: true,
      allowCustomValue: true,
      options: [],
      placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.team-ids-placeholder", "Enter Team IDs and press Enter to add"),
      validation: provider === "github" ? {
        validate: (value) => {
          if (typeof value === "string") {
            return isNumeric(value);
          }
          if ((0,_utils_guards__WEBPACK_IMPORTED_MODULE_7__.isSelectableValueArray)(value)) {
            return value.every((v) => v?.value && isNumeric(v.value));
          }
          return true;
        },
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.team-ids-numbers", "Team IDs must be numbers.")
      } : void 0
    },
    hostedDomain: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.hosted-domain-label", "Hosted domain"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.hosted-domain-description",
        "The domain under which Grafana is hosted and accessible."
      ),
      type: "text"
    },
    validateHd: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.validate-hosted-domain-label", "Validate hosted domain"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.validate-hosted-domain-description",
        'If enabled, Grafana will match the Hosted Domain retrieved from the Google ID Token against the "{{ allowedDomainsLabel }}" list specified by the user.',
        { allowedDomainsLabel }
      ),
      type: "checkbox"
    },
    serverDiscoveryUrl: {
      label: openIDConnectDiscoveryLabel,
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.server-discovery-url-description",
        'The .well-known/openid-configuration endpoint for your IdP. The info extracted from this URL will be used to populate the "{{ authURLLabel }}", "{{ tokenURLLabel }}" and "{{ apiURLLabel }}" fields.',
        { authURLLabel, tokenURLLabel, apiURLLabel }
      ),
      type: "custom",
      content: (setValue) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ServerDiscoveryField__WEBPACK_IMPORTED_MODULE_6__.ServerDiscoveryField, { setValue })
    },
    domainHint: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.domain-hint-label", "Domain hint"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.domain-hint-description",
        "Parameter to indicate the realm of the user in the Entra ID tenant and streamline the login process."
      ),
      type: "text",
      validation: {
        validate: (value) => {
          if (typeof value === "string" && value.length) {
            return (0,_utils_url__WEBPACK_IMPORTED_MODULE_8__.isValidDomain)(value);
          }
          return true;
        },
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.domain-hint-valid-domain", "This field must be a valid domain.")
      }
    },
    loginPrompt: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.login-prompt-label", "Login prompt"),
      type: "select",
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.login-prompt-description",
        "Indicates the type of user interaction when the user logs in with the IdP."
      ),
      multi: false,
      options: [
        { value: "", label: "" },
        { value: "login", label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.login-prompt-login", "Login") },
        { value: "consent", label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.login-prompt-consent", "Consent") },
        { value: "select_account", label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.login-prompt-select-account", "Select account") }
      ],
      defaultValue: { value: "", label: "" }
    }
  };
}
function isNumeric(value) {
  return /^-?\d+$/.test(value);
}
function orgMappingDescription(provider) {
  switch (provider) {
    case "azuread":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.org-mapping-description-azuread",
        'List of "<GroupID>:<OrgIdOrName>:<Role>" mappings.'
      );
    case "github":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.org-mapping-description-github",
        'List of "<GitHubTeamName>:<OrgIdOrName>:<Role>" mappings.'
      );
    case "gitlab":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.org-mapping-description-gitlab",
        'List of "<GitlabGroupName>:<OrgIdOrName>:<Role>" mappings.'
      );
    case "google":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.org-mapping-description-google",
        'List of "<GoogleGroupName>:<OrgIdOrName>:<Role>" mappings.'
      );
    default:
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "auth-config.fields.org-mapping-description-generic",
        'List of "<ExternalName>:<OrgIdOrName>:<Role>" mappings.'
      );
  }
}
function clientAuthenticationOptions(provider) {
  switch (provider) {
    case "azuread":
      return [
        { value: "none", label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("auth-config.fields.client-authentication-none", "None") },
        { value: "client_secret_post", label: "Client secret" },
        { value: "managed_identity", label: "Managed identity" },
        { value: "workload_identity", label: "Workload identity" }
      ];
    // Other providers ...
    default:
      return [
        { value: "none", label: "None" },
        { value: "client_secret_post", label: "Client secret" }
      ];
  }
}


/***/ }),

/***/ "./public/app/features/auth-config/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadProviderStatuses: () => (/* binding */ loadProviderStatuses),
/* harmony export */   loadProviders: () => (/* binding */ loadProviders),
/* harmony export */   loadSettings: () => (/* binding */ loadSettings),
/* harmony export */   saveSettings: () => (/* binding */ saveSettings)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/auth-config/index.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/auth-config/state/reducers.ts");







function loadSettings(showSpinner = true) {
  return async (dispatch) => {
    if (app_core_core__WEBPACK_IMPORTED_MODULE_2__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.SettingsRead)) {
      if (showSpinner) {
        dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_5__.loadingBegin)());
      }
      dispatch(loadProviders());
      const result = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get("/api/admin/settings");
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_5__.settingsUpdated)(result));
      await dispatch(loadProviderStatuses());
      if (showSpinner) {
        dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_5__.loadingEnd)());
      }
      return result;
    }
  };
}
function loadProviders(provider = "") {
  return async (dispatch) => {
    const result = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get(`/api/v1/sso-settings${provider ? `/${provider}` : ""}`);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_5__.providersLoaded)(provider ? [result] : result));
    return result;
  };
}
function loadProviderStatuses() {
  return async (dispatch) => {
    const registeredProviders = (0,___WEBPACK_IMPORTED_MODULE_4__.getRegisteredAuthProviders)();
    const providerStatuses = {};
    const getStatusPromises = [];
    for (const provider of registeredProviders) {
      getStatusPromises.push((0,___WEBPACK_IMPORTED_MODULE_4__.getAuthProviderStatus)(provider.id));
    }
    const statuses = await Promise.all(getStatusPromises);
    for (let i = 0; i < registeredProviders.length; i++) {
      const provider = registeredProviders[i];
      providerStatuses[provider.id] = statuses[i];
    }
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_5__.providerStatusesLoaded)(providerStatuses));
  };
}
function saveSettings(data) {
  return async (dispatch) => {
    if (app_core_core__WEBPACK_IMPORTED_MODULE_2__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.SettingsWrite)) {
      try {
        await (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.lastValueFrom)(
          (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
            url: "/api/admin/settings",
            method: "PUT",
            data,
            showSuccessAlert: false,
            showErrorAlert: false
          })
        );
        dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_5__.resetError)());
        return true;
      } catch (error) {
        console.log(error);
        if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.isFetchError)(error)) {
          error.isHandled = true;
          const updateErr = {
            message: error.data?.message,
            errors: error.data?.errors
          };
          dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_5__.setError)(updateErr));
          return false;
        }
      }
    }
    return false;
  };
}


/***/ }),

/***/ "./public/app/features/auth-config/utils/data.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataToDTO: () => (/* binding */ dataToDTO),
/* harmony export */   dtoToData: () => (/* binding */ dtoToData),
/* harmony export */   emptySettings: () => (/* binding */ emptySettings),
/* harmony export */   getArrayFields: () => (/* binding */ getArrayFields)
/* harmony export */ });
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/auth-config/fields.tsx");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/auth-config/utils/guards.ts");



const emptySettings = {
  allowAssignGrafanaAdmin: false,
  allowSignUp: false,
  allowedDomains: [],
  allowedGroups: [],
  allowedOrganizations: [],
  apiUrl: "",
  authStyle: "",
  authUrl: "",
  autoLogin: false,
  clientAuthentication: "",
  clientId: "",
  clientSecret: "",
  managedIdentityClientId: "",
  federatedCredentialAudience: "",
  workloadIdentityTokenFile: "",
  emailAttributeName: "",
  emailAttributePath: "",
  emptyScopes: false,
  enabled: false,
  loginPrompt: "",
  extra: {},
  groupsAttributePath: "",
  hostedDomain: "",
  icon: "shield",
  name: "",
  roleAttributePath: "",
  roleAttributeStrict: false,
  scopes: [],
  signoutRedirectUrl: "",
  skipOrgRoleSync: false,
  teamIds: [],
  teamIdsAttributePath: "",
  teamsUrl: "",
  tlsClientCa: "",
  tlsClientCert: "",
  tlsClientKey: "",
  tlsSkipVerify: false,
  tokenUrl: "",
  type: "",
  usePkce: false,
  useRefreshToken: false
};
const strToValue = (val) => {
  if (!val?.length) {
    return [];
  }
  if (Array.isArray(val)) {
    return val.map((v) => ({ label: v, value: v }));
  }
  if (val.startsWith("[") && val.endsWith("]")) {
    try {
      return JSON.parse(val).map((v) => ({ label: v, value: v }));
    } catch {
    }
  }
  return val.split(/[\s,]/).map((s) => ({ label: s, value: s }));
};
function dataToDTO(data) {
  if (!data) {
    return emptySettings;
  }
  const providerFields = getFieldsForProvider(data.provider);
  const arrayFields = getArrayFields((0,_fields__WEBPACK_IMPORTED_MODULE_0__.fieldMap)(data.provider), providerFields);
  const settings = { ...data.settings };
  for (const field of arrayFields) {
    settings[field] = strToValue(settings[field]);
  }
  return settings;
}
const valuesToString = (values) => {
  return JSON.stringify(values.map(({ value }) => value));
};
const getFieldsForProvider = (provider) => {
  const sections = (0,_fields__WEBPACK_IMPORTED_MODULE_0__.getSectionFields)()[provider];
  const fields = ["enabled"];
  return Object.values(sections).reduce(
    (result, section) => [
      ...result,
      ...section.fields.map((field) => typeof field === "string" ? field : field.name)
    ],
    fields
  );
};
function dtoToData(dto, provider) {
  let current = dto;
  const providerFields = getFieldsForProvider(provider);
  const arrayFields = getArrayFields((0,_fields__WEBPACK_IMPORTED_MODULE_0__.fieldMap)(provider), providerFields);
  const settings = Object.keys(current).filter((key) => providerFields.includes(key)).reduce((obj, key) => {
    return { ...obj, [key]: current[key] };
  }, {});
  for (const field of arrayFields) {
    const value = current[field];
    if (value) {
      if ((0,_guards__WEBPACK_IMPORTED_MODULE_1__.isSelectableValueArray)(value)) {
        settings[field] = valuesToString(value);
      } else if ((0,_guards__WEBPACK_IMPORTED_MODULE_1__.isSelectableValueArray)([value])) {
        settings[field] = value.value;
      }
    }
  }
  return settings;
}
function getArrayFields(obj, providerFields) {
  return Object.entries(obj).filter(([key, value]) => providerFields.includes(key) && value.type === "select").map(([key]) => key);
}


/***/ }),

/***/ "./public/app/features/auth-config/utils/guards.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSelectableValue: () => (/* binding */ isSelectableValue),
/* harmony export */   isSelectableValueArray: () => (/* binding */ isSelectableValueArray)
/* harmony export */ });

function isSelectableValueArray(value) {
  return Array.isArray(value) && value.every((v) => typeof v === "object" && v !== null && "value" in v);
}
function isSelectableValue(value) {
  return typeof value === "object" && value !== null && "value" in value;
}


/***/ }),

/***/ "./public/app/features/auth-config/utils/url.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProviderUrl: () => (/* binding */ getProviderUrl),
/* harmony export */   isUrlValid: () => (/* binding */ isUrlValid),
/* harmony export */   isValidDomain: () => (/* binding */ isValidDomain)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/auth-config/constants.ts");


function getProviderUrl(provider) {
  return _constants__WEBPACK_IMPORTED_MODULE_0__.BASE_PATH + (provider.configPath || provider.id);
}
const isUrlValid = (url) => {
  if (typeof url !== "string") {
    return false;
  }
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol.includes("http");
  } catch (_) {
    return false;
  }
};
const isValidDomain = (domain) => {
  if (typeof domain !== "string" || !domain.length) {
    return false;
  }
  const domainRegex = /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,6}$/;
  return domainRegex.test(domain);
};


/***/ })

}]);
//# sourceMappingURL=AdminAuthentication.edca9d36880dd7bbe47a.js.map