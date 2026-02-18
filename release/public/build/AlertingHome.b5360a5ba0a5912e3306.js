"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertingHome"],{

/***/ "./public/app/core/components/Branding/CloudBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudBadge: () => (/* binding */ CloudBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _OrangeBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Branding/OrangeBadge.tsx");




function CloudBadge() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OrangeBadge__WEBPACK_IMPORTED_MODULE_2__.OrangeBadge, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("cloud-feature-badge", "Cloud") });
}


/***/ }),

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

/***/ "./public/app/features/alerting/unified/home/AdCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Divider/Divider.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_Branding_CloudBadge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/Branding/CloudBadge.tsx");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_features_admin_EnterpriseAuthFeaturesCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/admin/EnterpriseAuthFeaturesCard.tsx");










function AdCard({ title, description, href, logoUrl, items, helpFlag }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getAddCardStyles);
  const helpFlags = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_11__.contextSrv.user.helpFlags1;
  const [isDismissed, setDismissed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Boolean(helpFlags & helpFlag));
  const onDismiss = () => {
    app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_10__.backendSrv.put(`/api/user/helpflags/${helpFlag}`, void 0, { showSuccessAlert: false }).then((res) => {
      app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_11__.contextSrv.user.helpFlags1 = res.helpFlags1;
      setDismissed(true);
    });
  };
  if (isDismissed || !(0,app_features_admin_EnterpriseAuthFeaturesCard__WEBPACK_IMPORTED_MODULE_12__.isOpenSourceBuildOrUnlicenced)()) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.cardBody, title, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.preHeader, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Branding_CloudBadge__WEBPACK_IMPORTED_MODULE_9__.CloudBadge, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.IconButton, { name: "times", size: "sm", onClick: onDismiss, "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.ad.close", "Close") })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", { className: styles.header, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: logoUrl, alt: title.concat(" logo"), className: styles.logo }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.contentColumn, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: styles.title, children: title }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: styles.description, children: description })
      ] })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Divider, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.itemsList, children: items.map((item) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.listItem, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { className: styles.icon, name: "check" }),
      item
    ] }, item)) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Divider, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { fill: "solid", variant: "secondary", onClick: () => window.open(href, "_blank"), className: styles.button, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.ad.learn-more", children: "Learn more" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { name: "external-link-alt", className: styles.buttonIcon })
    ] })
  ] });
}
const getAddCardStyles = (theme) => ({
  logo: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    objectFit: "contain",
    width: "47px",
    height: "47px"
  }),
  header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    alignItems: "flex-start",
    gap: theme.spacing(2),
    paddingTop: theme.spacing(2),
    height: theme.spacing(8)
  }),
  contentColumn: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    flex: 1
  }),
  title: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: theme.spacing(1),
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.h4.fontWeight,
    color: theme.colors.text.primary
  }),
  description: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontSize: theme.typography.bodySmall.fontSize,
    color: theme.colors.text.secondary,
    lineHeight: theme.typography.bodySmall.lineHeight
  }),
  itemsList: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: theme.spacing(0.5),
    [theme.breakpoints.up("xl")]: {
      gridTemplateColumns: "1fr 1fr",
      gap: theme.spacing(1)
    }
  }),
  listItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    alignItems: "flex-start",
    fontSize: theme.typography.bodySmall.fontSize,
    color: theme.colors.text.secondary,
    lineHeight: theme.typography.bodySmall.lineHeight,
    marginBottom: theme.spacing(0.5)
  }),
  icon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginRight: theme.spacing(1),
    color: theme.colors.success.main
  }),
  button: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: `0 ${theme.spacing(2)}`
  }),
  buttonIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginLeft: theme.spacing(1)
  }),
  cardBody: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: `${theme.spacing(3)} ${theme.spacing(4)} ${theme.spacing(2.25)} ${theme.spacing(4)}`,
    backgroundColor: theme.colors.background.secondary,
    borderRadius: theme.shape.radius.lg,
    border: `1px solid ${theme.colors.border.weak}`,
    flex: 1
  }),
  preHeader: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/home/GettingStarted.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WelcomeHeader: () => (/* binding */ WelcomeHeader),
/* harmony export */   "default": () => (/* binding */ GettingStarted)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-inlinesvg/dist/index.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var img_alerting_at_a_glance_dark_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/img/alerting/at_a_glance_dark.svg");
/* harmony import */ var img_alerting_at_a_glance_light_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/img/alerting/at_a_glance_light.svg");








function GettingStarted() {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useTheme2)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getWelcomePageStyles);
  const atAGlanceImage = theme.name === "dark" ? img_alerting_at_a_glance_dark_svg__WEBPACK_IMPORTED_MODULE_8__ : img_alerting_at_a_glance_light_svg__WEBPACK_IMPORTED_MODULE_9__;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.grid, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContentBox, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "column", gap: 1, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { element: "h3", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.getting-started.how-it-works", children: "How it works" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", { className: styles.list, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.getting-started.periodically-queries-data-sources", children: "Grafana alerting periodically queries data sources and evaluates the condition defined in the alert rule" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.getting-started.condition-breached-alert-instance-fires", children: "If the condition is breached, an alert instance fires" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.getting-started.firing-instances-routed-notification-policies", children: "Firing instances are routed to notification policies based on matching labels" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.getting-started.notification-policies-contact-points", children: "Notifications are sent out to the contact points specified in the notification policy" }) })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.svgContainer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { justifyContent: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_2__["default"], { src: atAGlanceImage, width: void 0, height: void 0 }) }) })
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContentBox, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "column", gap: 1, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { element: "h3", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.getting-started.get-started", children: "Get started" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", { className: styles.list, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.getting-started.create-alert-rule", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { weight: "bold", children: "Create an alert rule" }),
          " to query a data source and evaluate the condition defined in the alert rule"
        ] }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.getting-started.route-alert-notifications", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { weight: "bold", children: "Route alert notifications" }),
          " either directly to a contact point or through notification policies for more flexibility"
        ] }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.getting-started.monitor-alert-rules", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { weight: "bold", children: "Monitor" }),
          " your alert rules using dashboards and visualizations"
        ] }) })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.getting-stared.learn-more", children: [
        "For a hands-on introduction, refer to our",
        " ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TextLink, { href: "https://grafana.com/tutorials/alerting-get-started/", inline: true, external: true, children: "tutorial to get started with Grafana Alerting" })
      ] }) })
    ] }) })
  ] });
}
const getWelcomePageStyles = (theme) => ({
  grid: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "grid",
    gridTemplateRows: "min-content auto auto",
    gridTemplateColumns: "1fr",
    gap: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "3fr 2fr"
    }
  }),
  ctaContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    gridColumn: "1 / span 5"
  }),
  svgContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    "& svg": {
      maxWidth: "900px",
      flex: 1
    }
  }),
  list: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    margin: theme.spacing(0, 2),
    "& > li": {
      marginBottom: theme.spacing(1)
    }
  })
});
function WelcomeHeader({ className }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getWelcomeHeaderStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { gap: 2, direction: "column", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ContentBox, { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.ctaContainer, className), children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      WelcomeCTABox,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.welcome-header.title-alert-rules", "Alert rules"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "alerting.welcome-header.description-alert-rules",
          "Define the condition that must be met before an alert rule fires"
        ),
        href: "/alerting/list",
        hrefText: "Manage alert rules"
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.separator }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      WelcomeCTABox,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.welcome-header.title-contact-points", "Contact points"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "alerting.welcome-header.description-configure-receives-notifications",
          "Configure who receives notifications and how they are sent"
        ),
        href: "/alerting/notifications",
        hrefText: "Manage contact points"
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.separator }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      WelcomeCTABox,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.welcome-header.title-notification-policies", "Notification policies"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "alerting.welcome-header.description-configure-firing-alert-instances-routed-contact",
          "Configure how firing alert instances are routed to contact points"
        ),
        href: "/alerting/routes",
        hrefText: "Manage notification policies"
      }
    )
  ] }) });
}
const getWelcomeHeaderStyles = (theme) => ({
  ctaContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(2),
    display: "flex",
    gap: theme.spacing(4),
    justifyContent: "space-between",
    flexWrap: "wrap",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column"
    }
  }),
  separator: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "1px",
    backgroundColor: theme.colors.border.medium,
    [theme.breakpoints.down("lg")]: {
      display: "none"
    }
  })
});
function WelcomeCTABox({ title, description, href, hrefText }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getWelcomeCTAButtonStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { element: "h2", variant: "h3", children: title }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.desc, children: description }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.actionRow, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TextLink, { href, children: hrefText }) })
  ] });
}
const getWelcomeCTAButtonStyles = (theme) => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.primary,
    flex: 1,
    minWidth: "240px",
    display: "grid",
    rowGap: theme.spacing(1),
    gridTemplateColumns: "min-content 1fr 1fr 1fr",
    gridTemplateRows: "min-content auto min-content",
    "& h2": {
      marginBottom: 0,
      gridColumn: "2 / span 3",
      gridRow: 1
    }
  }),
  desc: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    gridColumn: "2 / span 3",
    gridRow: 2
  }),
  actionRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    gridColumn: "2 / span 3",
    gridRow: 3,
    maxWidth: "240px"
  })
});
function ContentBox({ children, className }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getContentBoxStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.box, className), children });
}
const getContentBoxStyles = (theme) => ({
  box: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(2),
    backgroundColor: theme.colors.background.secondary,
    borderRadius: theme.shape.radius.lg
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/home/Home.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabsBar.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/Tab.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabContent.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/withPageErrorBoundary.tsx");
/* harmony import */ var _GettingStarted__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/home/GettingStarted.tsx");
/* harmony import */ var _IRMCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/home/IRMCard.tsx");
/* harmony import */ var _Insights__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _PluginIntegrations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/home/PluginIntegrations.tsx");
/* harmony import */ var _SyntheticMonitoringCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/home/SyntheticMonitoringCard.tsx");













function Home() {
  const insightsEnabled = (0,_Insights__WEBPACK_IMPORTED_MODULE_13__.insightsIsAvailable)() || (0,_utils_misc__WEBPACK_IMPORTED_MODULE_9__.isLocalDevEnv)();
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(insightsEnabled ? "insights" : "overview");
  const insightsScene = (0,_Insights__WEBPACK_IMPORTED_MODULE_13__.getInsightsScenes)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_8__.AlertingPageWrapper, { subTitle: "Learn about problems in your systems moments after they occur", navId: "alerting", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 2, direction: "column", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GettingStarted__WEBPACK_IMPORTED_MODULE_11__.WelcomeHeader, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PluginIntegrations__WEBPACK_IMPORTED_MODULE_14__.PluginIntegrations, {})
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Box, { marginTop: { lg: 2, md: 2, xs: 2 }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "row", gap: 2, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SyntheticMonitoringCard__WEBPACK_IMPORTED_MODULE_15__["default"], {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_IRMCard__WEBPACK_IMPORTED_MODULE_12__["default"], {})
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Box, { marginTop: { lg: 2, md: 0, xs: 0 }, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TabsBar, { children: [
        insightsEnabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tab,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.home.label-insights", "Insights"),
            active: activeTab === "insights",
            onChangeTab: () => setActiveTab("insights")
          },
          "insights"
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tab,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.home.label-get-started", "Get started"),
            active: activeTab === "overview",
            onChangeTab: () => setActiveTab("overview")
          },
          "overview"
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TabContent, { children: [
        activeTab === "insights" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(insightsScene.Component, { model: insightsScene }),
        activeTab === "overview" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GettingStarted__WEBPACK_IMPORTED_MODULE_11__["default"], {})
      ] })
    ] })
  ] });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_10__.withPageErrorBoundary)(Home));


/***/ }),

/***/ "./public/app/features/alerting/unified/home/IRMCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IRMCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var img_irm_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/img/irm_logo.svg");
/* harmony import */ var _AdCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/home/AdCard.tsx");





const LINK = "https://grafana.com/auth/sign-up/create-user?redirectPath=irm&src=oss-grafana&cnt=alerting-irm";
const HELP_FLAG_IRM = 16;
function IRMCard() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _AdCard__WEBPACK_IMPORTED_MODULE_3__["default"],
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.home.irm-card-title", "Incident response and management"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "alerting.home.irm-card-description",
        "Unify on-call, alerting, and incident response with Grafana Cloud IRM."
      ),
      href: LINK,
      logoUrl: img_irm_logo_svg__WEBPACK_IMPORTED_MODULE_2__,
      items: [
        (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.home.irm-card-item-1", "Manage on-call schedules with your calendar or Terraform."),
        (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.home.irm-card-item-2", "Respond to incidents via web, app, Slack, or other channels."),
        (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.home.irm-card-item-3", "Pinpoint root causes with AI-powered Grafana SIFT."),
        (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.home.irm-card-item-4", "Analyze past incidents to improve response and resilience.")
      ],
      helpFlag: HELP_FLAG_IRM
    }
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/home/Insights.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INSTANCE_ID: () => (/* binding */ INSTANCE_ID),
/* harmony export */   PANEL_STYLES: () => (/* binding */ PANEL_STYLES),
/* harmony export */   getInsightsScenes: () => (/* binding */ getInsightsScenes),
/* harmony export */   insightsIsAvailable: () => (/* binding */ insightsIsAvailable),
/* harmony export */   overrideToFixedColor: () => (/* binding */ overrideToFixedColor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/services/dataSourceSrv.ts");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _api_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/api/utils.ts");
/* harmony import */ var _insights_SectionFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/insights/SectionFooter.tsx");
/* harmony import */ var _insights_SectionSubheader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/insights/SectionSubheader.tsx");
/* harmony import */ var _insights_grafana_Active__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/insights/grafana/Active.tsx");
/* harmony import */ var _insights_grafana_AlertsByStateScene__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/insights/grafana/AlertsByStateScene.tsx");
/* harmony import */ var _insights_grafana_EvalSuccessVsFailuresScene__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/insights/grafana/EvalSuccessVsFailuresScene.tsx");
/* harmony import */ var _insights_grafana_InstanceStatusScene__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/insights/grafana/InstanceStatusScene.tsx");
/* harmony import */ var _insights_grafana_MissedIterationsScene__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/insights/grafana/MissedIterationsScene.tsx");
/* harmony import */ var _insights_grafana_MostFiredInstancesTable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/insights/grafana/MostFiredInstancesTable.tsx");
/* harmony import */ var _insights_grafana_Paused__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/insights/grafana/Paused.tsx");
/* harmony import */ var _insights_grafana_RulesByEvaluation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/insights/grafana/RulesByEvaluation.tsx");
/* harmony import */ var _insights_grafana_RulesByEvaluationPercentage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/insights/grafana/RulesByEvaluationPercentage.tsx");
/* harmony import */ var _insights_grafana_alertmanager_AlertsByState__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/insights/grafana/alertmanager/AlertsByState.tsx");
/* harmony import */ var _insights_grafana_alertmanager_SilencesByStateScene__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/insights/grafana/alertmanager/SilencesByStateScene.tsx");
/* harmony import */ var _insights_mimir_AlertsByState__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/AlertsByState.tsx");
/* harmony import */ var _insights_mimir_InvalidConfig__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/InvalidConfig.tsx");
/* harmony import */ var _insights_mimir_Notifications__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/Notifications.tsx");
/* harmony import */ var _insights_mimir_Silences__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/Silences.tsx");
/* harmony import */ var _insights_mimir_perGroup_RuleGroupEvaluationDurationIntervalRatioScene__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/perGroup/RuleGroupEvaluationDurationIntervalRatioScene.tsx");
/* harmony import */ var _insights_mimir_perGroup_RuleGroupEvaluationDurationScene__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/perGroup/RuleGroupEvaluationDurationScene.tsx");
/* harmony import */ var _insights_mimir_perGroup_RuleGroupEvaluationsScene__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/perGroup/RuleGroupEvaluationsScene.tsx");
/* harmony import */ var _insights_mimir_perGroup_RuleGroupIntervalScene__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/perGroup/RuleGroupIntervalScene.tsx");
/* harmony import */ var _insights_mimir_perGroup_RulesPerGroupScene__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/perGroup/RulesPerGroupScene.tsx");
/* harmony import */ var _insights_mimir_rules_EvalSuccessVsFailuresScene__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/rules/EvalSuccessVsFailuresScene.tsx");
/* harmony import */ var _insights_mimir_rules_Firing__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/rules/Firing.tsx");
/* harmony import */ var _insights_mimir_rules_InstancesByState__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/rules/InstancesByState.tsx");
/* harmony import */ var _insights_mimir_rules_InstancesPercentageByState__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/rules/InstancesPercentageByState.tsx");
/* harmony import */ var _insights_mimir_rules_MissedIterationsScene__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/rules/MissedIterationsScene.tsx");
/* harmony import */ var _insights_mimir_rules_MostFiredRules__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/rules/MostFiredRules.tsx");
/* harmony import */ var _insights_mimir_rules_Pending__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/rules/Pending.tsx");




































const ashDs = {
  type: "loki",
  uid: "grafanacloud-alert-state-history",
  settings: void 0
};
const cloudUsageDs = {
  type: "prometheus",
  uid: "grafanacloud-usage",
  settings: void 0
};
const grafanaCloudPromDs = {
  type: "prometheus",
  uid: "grafanacloud-prom",
  settings: void 0
};
const SERIES_COLORS = {
  alerting: "red",
  firing: "red",
  active: "red",
  missed: "red",
  failed: "red",
  pending: "yellow",
  recovering: "yellow",
  nodata: "blue",
  "active evaluation": "blue",
  normal: "green",
  success: "green",
  error: "orange"
};
function overrideToFixedColor(key) {
  return {
    mode: "fixed",
    fixedColor: SERIES_COLORS[key]
  };
}
const PANEL_STYLES = { minHeight: 300 };
const THIS_WEEK_TIME_RANGE = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneTimeRange({ from: "now-1w", to: "now" });
const namespace = (0,_api_utils__WEBPACK_IMPORTED_MODULE_7__.getAPINamespace)();
const INSTANCE_ID = namespace.includes("stacks-") ? namespace.replace("stacks-", "") : void 0;
const getInsightsDataSources = () => {
  const dataSourceSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getDataSourceSrv)();
  [ashDs, cloudUsageDs, grafanaCloudPromDs].forEach((ds) => {
    ds.settings = dataSourceSrv.getInstanceSettings(ds.uid);
  });
  return [ashDs, cloudUsageDs, grafanaCloudPromDs];
};
const insightsIsAvailable = () => {
  const [_, cloudUsageDs2, __] = getInsightsDataSources();
  return cloudUsageDs2.settings;
};
function getInsightsScenes() {
  const [ashDs2, cloudUsageDs2, grafanaCloudPromDs2] = getInsightsDataSources();
  const categories = [];
  const showGrafanaManaged = ashDs2.settings && cloudUsageDs2.settings;
  const showGrafanaAlertmanager = Boolean(cloudUsageDs2.settings);
  const showMimirAlertmanager = Boolean(cloudUsageDs2.settings);
  const showMimirManaged = cloudUsageDs2.settings && grafanaCloudPromDs2.settings;
  const showMimirManagedPerGroup = Boolean(cloudUsageDs2.settings);
  if (showGrafanaManaged) {
    categories.push(
      new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexItem({
        ySizing: "content",
        body: getGrafanaManagedScenes()
      })
    );
  }
  if (showGrafanaAlertmanager) {
    categories.push(
      new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexItem({
        ySizing: "content",
        body: getGrafanaAlertmanagerScenes()
      })
    );
  }
  if (showMimirManaged) {
    categories.push(
      new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexItem({
        ySizing: "content",
        body: getMimirManagedRulesScenes()
      })
    );
  }
  if (showMimirManagedPerGroup) {
    categories.push(
      new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexItem({
        ySizing: "content",
        body: getMimirManagedRulesPerGroupScenes()
      })
    );
  }
  if (showMimirAlertmanager) {
    categories.push(
      new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexItem({
        ySizing: "content",
        body: getCloudScenes()
      })
    );
  }
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.EmbeddedScene({
    $timeRange: THIS_WEEK_TIME_RANGE,
    controls: [
      new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneReactObject({
        component: _insights_SectionSubheader__WEBPACK_IMPORTED_MODULE_9__.SectionSubheader,
        props: {
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.insights.monitor-status-of-system", children: "Monitor the status of your system" }),
            " ",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
              {
                content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.insights.monitor-status-system-tooltip", children: "Alerting insights provides pre-built dashboards to monitor your alerting data." }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.insights.monitor-status-system-tooltip-identify", children: "You can identify patterns in why things go wrong and discover trends in alerting performance within your organization." })
                ] }),
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { name: "info-circle", size: "sm" })
              }
            )
          ] })
        }
      }),
      new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneControlsSpacer(),
      new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneTimePicker({}),
      new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneRefreshPicker({})
    ],
    body: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
      direction: "column",
      children: categories
    })
  });
}
function getGrafanaManagedScenes() {
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.NestedScene({
    title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.get-grafana-managed-scenes.title.grafanamanaged-alert-rules", "Grafana-managed alert rules"),
    canCollapse: true,
    isCollapsed: false,
    body: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
      direction: "column",
      children: [
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
          direction: "column",
          children: [
            new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
              children: [
                (0,_insights_grafana_MostFiredInstancesTable__WEBPACK_IMPORTED_MODULE_15__.getMostFiredInstancesScene)(ashDs, "Top 10 firing instances"),
                (0,_insights_grafana_Active__WEBPACK_IMPORTED_MODULE_10__.getActiveGrafanaAlertsScene)(cloudUsageDs, "Active rules"),
                (0,_insights_grafana_Paused__WEBPACK_IMPORTED_MODULE_16__.getPausedGrafanaAlertsScene)(cloudUsageDs, "Paused rules")
              ]
            }),
            new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
              children: [
                (0,_insights_grafana_AlertsByStateScene__WEBPACK_IMPORTED_MODULE_11__.getGrafanaInstancesByStateScene)(cloudUsageDs, "Alert instances by state"),
                new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
                  height: "400px",
                  direction: "column",
                  children: [
                    new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
                      height: "400px",
                      children: [
                        (0,_insights_grafana_InstanceStatusScene__WEBPACK_IMPORTED_MODULE_13__.getInstanceStatByStatusScene)(
                          cloudUsageDs,
                          "Firing instances",
                          "The number of currently firing alert rule instances",
                          "alerting"
                        ),
                        (0,_insights_grafana_InstanceStatusScene__WEBPACK_IMPORTED_MODULE_13__.getInstanceStatByStatusScene)(
                          cloudUsageDs,
                          "Recovering instances",
                          "The number of currently recovering alert rule instances",
                          "recovering"
                        ),
                        (0,_insights_grafana_InstanceStatusScene__WEBPACK_IMPORTED_MODULE_13__.getInstanceStatByStatusScene)(
                          cloudUsageDs,
                          "Pending instances",
                          "The number of currently pending alert rule instances",
                          "pending"
                        )
                      ]
                    }),
                    new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
                      children: [
                        (0,_insights_grafana_InstanceStatusScene__WEBPACK_IMPORTED_MODULE_13__.getInstanceStatByStatusScene)(
                          cloudUsageDs,
                          "No data instances",
                          "The current number of alert rule instances in No data state",
                          "nodata"
                        ),
                        (0,_insights_grafana_InstanceStatusScene__WEBPACK_IMPORTED_MODULE_13__.getInstanceStatByStatusScene)(
                          cloudUsageDs,
                          "Error instances",
                          "The current number of alert rule instances in Error state",
                          "error"
                        )
                      ]
                    })
                  ]
                })
              ]
            }),
            new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
              children: [
                (0,_insights_grafana_RulesByEvaluation__WEBPACK_IMPORTED_MODULE_17__.getGrafanaRulesByEvaluationScene)(cloudUsageDs, "Alert rule evaluation"),
                (0,_insights_grafana_RulesByEvaluationPercentage__WEBPACK_IMPORTED_MODULE_18__.getGrafanaRulesByEvaluationPercentageScene)(cloudUsageDs, "% of alert rule evaluation")
              ]
            }),
            new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
              children: [
                (0,_insights_grafana_EvalSuccessVsFailuresScene__WEBPACK_IMPORTED_MODULE_12__.getGrafanaEvalSuccessVsFailuresScene)(cloudUsageDs, "Evaluation success vs failures"),
                (0,_insights_grafana_MissedIterationsScene__WEBPACK_IMPORTED_MODULE_14__.getGrafanaMissedIterationsScene)(cloudUsageDs, "Iterations missed per alert rule")
              ]
            })
          ]
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneReactObject({
          component: _insights_SectionFooter__WEBPACK_IMPORTED_MODULE_8__.SectionFooter
        })
      ]
    })
  });
}
function getGrafanaAlertmanagerScenes() {
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.NestedScene({
    title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.get-grafana-alertmanager-scenes.title.grafana-alertmanager", "Grafana Alertmanager"),
    canCollapse: true,
    isCollapsed: false,
    body: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
      direction: "column",
      children: [
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
          children: [
            (0,_insights_grafana_alertmanager_AlertsByState__WEBPACK_IMPORTED_MODULE_19__.getAlertsByStateScene)(cloudUsageDs, "Firing alerts by state"),
            // getGrafanaAlertmanagerNotificationsScene(cloudUsageDs, 'Notification delivery'),
            (0,_insights_grafana_alertmanager_SilencesByStateScene__WEBPACK_IMPORTED_MODULE_20__.getGrafanaAlertmanagerSilencesScene)(cloudUsageDs, "Silences")
          ]
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneReactObject({
          component: _insights_SectionFooter__WEBPACK_IMPORTED_MODULE_8__.SectionFooter
        })
      ]
    })
  });
}
function getCloudScenes() {
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.NestedScene({
    title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.get-cloud-scenes.title.mimir-alertmanager", "Mimir Alertmanager"),
    canCollapse: true,
    isCollapsed: false,
    body: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
      direction: "column",
      children: [
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexItem({
          body: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneReactObject({
            component: _insights_SectionSubheader__WEBPACK_IMPORTED_MODULE_9__.SectionSubheader,
            props: { datasources: [cloudUsageDs] }
          })
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
          children: [
            (0,_insights_mimir_AlertsByState__WEBPACK_IMPORTED_MODULE_21__.getAlertsByStateScene)(cloudUsageDs, "Firing alerts by state"),
            (0,_insights_mimir_Notifications__WEBPACK_IMPORTED_MODULE_23__.getNotificationsScene)(cloudUsageDs, "Notification delivery")
          ]
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
          children: [
            (0,_insights_mimir_Silences__WEBPACK_IMPORTED_MODULE_24__.getSilencesScene)(cloudUsageDs, "Silences"),
            (0,_insights_mimir_InvalidConfig__WEBPACK_IMPORTED_MODULE_22__.getInvalidConfigScene)(cloudUsageDs, "Invalid configuration")
          ]
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneReactObject({
          component: _insights_SectionFooter__WEBPACK_IMPORTED_MODULE_8__.SectionFooter
        })
      ]
    })
  });
}
function getMimirManagedRulesScenes() {
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.NestedScene({
    title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.get-mimir-managed-rules-scenes.title.mimirmanaged-alert-rules", "Mimir-managed alert rules"),
    canCollapse: true,
    isCollapsed: false,
    body: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
      direction: "column",
      children: [
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexItem({
          body: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneReactObject({
            component: _insights_SectionSubheader__WEBPACK_IMPORTED_MODULE_9__.SectionSubheader,
            props: { datasources: [grafanaCloudPromDs, cloudUsageDs] }
          })
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
          children: [
            (0,_insights_mimir_rules_MostFiredRules__WEBPACK_IMPORTED_MODULE_35__.getMostFiredRulesScene)(grafanaCloudPromDs, "Top 10 firing rules"),
            (0,_insights_mimir_rules_Firing__WEBPACK_IMPORTED_MODULE_31__.getFiringCloudAlertsScene)(grafanaCloudPromDs, "Firing instances"),
            (0,_insights_mimir_rules_Pending__WEBPACK_IMPORTED_MODULE_36__.getPendingCloudAlertsScene)(grafanaCloudPromDs, "Pending instances")
          ]
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
          children: [
            (0,_insights_mimir_rules_InstancesByState__WEBPACK_IMPORTED_MODULE_32__.getInstancesByStateScene)(grafanaCloudPromDs, "Firing and pending alert instances"),
            (0,_insights_mimir_rules_InstancesPercentageByState__WEBPACK_IMPORTED_MODULE_33__.getInstancesPercentageByStateScene)(grafanaCloudPromDs, "% of alert instances by state")
          ]
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
          children: [
            (0,_insights_mimir_rules_EvalSuccessVsFailuresScene__WEBPACK_IMPORTED_MODULE_30__.getEvalSuccessVsFailuresScene)(cloudUsageDs, "Evaluation success vs failures"),
            (0,_insights_mimir_rules_MissedIterationsScene__WEBPACK_IMPORTED_MODULE_34__.getMissedIterationsScene)(cloudUsageDs, "Missed evaluations")
          ]
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneReactObject({
          component: _insights_SectionFooter__WEBPACK_IMPORTED_MODULE_8__.SectionFooter
        })
      ]
    })
  });
}
function getMimirManagedRulesPerGroupScenes() {
  const ruleGroupHandler = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.QueryVariable({
    label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.get-mimir-managed-rules-per-group-scenes.rule-group-handler.label.rule-group", "Rule Group"),
    name: "rule_group",
    datasource: cloudUsageDs,
    query: "label_values(grafanacloud_instance_rule_group_rules,rule_group)"
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.NestedScene({
    title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
      "alerting.get-mimir-managed-rules-per-group-scenes.title.mimirmanaged-alert-rules-per-rule-group",
      "Mimir-managed alert rules - per rule group"
    ),
    canCollapse: true,
    isCollapsed: false,
    body: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
      direction: "column",
      children: [
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexItem({
          body: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneReactObject({
            component: _insights_SectionSubheader__WEBPACK_IMPORTED_MODULE_9__.SectionSubheader,
            props: { datasources: [cloudUsageDs] }
          })
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
          children: [
            (0,_insights_mimir_perGroup_RuleGroupEvaluationsScene__WEBPACK_IMPORTED_MODULE_27__.getRuleGroupEvaluationsScene)(cloudUsageDs, "Rule group evaluation"),
            (0,_insights_mimir_perGroup_RuleGroupIntervalScene__WEBPACK_IMPORTED_MODULE_28__.getRuleGroupIntervalScene)(cloudUsageDs, "Rule group interval")
          ]
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
          children: [
            (0,_insights_mimir_perGroup_RuleGroupEvaluationDurationScene__WEBPACK_IMPORTED_MODULE_26__.getRuleGroupEvaluationDurationScene)(cloudUsageDs, "Rule group evaluation duration"),
            (0,_insights_mimir_perGroup_RulesPerGroupScene__WEBPACK_IMPORTED_MODULE_29__.getRulesPerGroupScene)(cloudUsageDs, "Rules per group"),
            (0,_insights_mimir_perGroup_RuleGroupEvaluationDurationIntervalRatioScene__WEBPACK_IMPORTED_MODULE_25__.getRuleGroupEvaluationDurationIntervalRatioScene)(cloudUsageDs, "Evaluation duration / interval ratio")
          ]
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneReactObject({
          component: _insights_SectionFooter__WEBPACK_IMPORTED_MODULE_8__.SectionFooter
        })
      ]
    }),
    $variables: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneVariableSet({
      variables: [ruleGroupHandler]
    }),
    controls: [new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.VariableValueSelectors({})]
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/home/PluginIntegrations.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PluginIntegrations: () => (/* binding */ PluginIntegrations)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _plugins_useAlertingHomePageExtensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/plugins/useAlertingHomePageExtensions.ts");






function PluginIntegrations() {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const { components } = (0,_plugins_useAlertingHomePageExtensions__WEBPACK_IMPORTED_MODULE_6__.useAlertingHomePageExtensions)();
  if (components.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "column", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { element: "h3", variant: "h4", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.plugin-integrations.tailored-apps", children: "Speed up your alerts creation now by using one of our tailored apps" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { gap: 2, wrap: "wrap", direction: "row", children: components.map((Component, i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.box, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {}) }, i)) })
  ] });
}
const getStyles = (theme) => ({
  box: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(2),
    flex: 1,
    backgroundColor: theme.colors.background.secondary,
    maxWidth: "460px"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/home/SyntheticMonitoringCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SyntheticMonitoringCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var img_synthetic_monitoring_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/img/synthetic_monitoring_logo.svg");
/* harmony import */ var _AdCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/home/AdCard.tsx");





const LINK = "https://grafana.com/auth/sign-up/create-user?redirectPath=synthetic-monitoring&src=oss-grafana&cnt=alerting-synthetic-monitoring";
const HELP_FLAG_SYNTHETIC_MONITORING = 8;
function SyntheticMonitoringCard() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _AdCard__WEBPACK_IMPORTED_MODULE_3__["default"],
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.home.synthetic-monitoring-card-title", "Synthetic Monitoring"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "alerting.home.synthetic-monitoring-card-description",
        "Monitor critical user flows, websites, and APIs externally, from global locations."
      ),
      href: LINK,
      logoUrl: img_synthetic_monitoring_logo_svg__WEBPACK_IMPORTED_MODULE_2__,
      items: [
        (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.home.synthetic-monitoring-card-item-1", "Simulate end-to-end user journeys with browser checks."),
        (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
          "alerting.home.synthetic-monitoring-card-item-2",
          "Run ping, DNS, HTTP/S, and TCP checks at every network layer."
        ),
        (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
          "alerting.home.synthetic-monitoring-card-item-3",
          "Use 20+ global probes or private probes behind your firewall."
        ),
        (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
          "alerting.home.synthetic-monitoring-card-item-4",
          "Track SLOs with built-in Prometheus-style alerts \u2014 right from the UI."
        )
      ],
      helpFlag: HELP_FLAG_SYNTHETIC_MONITORING
    }
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/DataSourcesInfo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataSourcesInfo: () => (/* binding */ DataSourcesInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");




function DataSourcesInfo({ datasources }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const displayDs = datasources.map((ds) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    ds.settings?.meta.info.logos.small && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: styles.dsImage, src: ds.settings?.meta.info.logos.small, alt: ds.settings?.name || ds.uid }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: ds.settings?.name || ds.uid })
  ] }, ds.uid));
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.dsContainer, children: displayDs });
}
const getStyles = (theme) => ({
  dsImage: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    label: "ds-image",
    width: "16px",
    marginRight: "3px"
  }),
  dsContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    fontSize: theme.typography.bodySmall.fontSize,
    gap: "10px",
    marginBottom: "10px",
    justifyContent: "flex-end"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsightsMenuButton: () => (/* binding */ InsightsMenuButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/utils/url.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/Menu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Dropdown/Dropdown.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");









const getPrometheusExploreUrl = ({
  queries,
  range,
  variables
}) => {
  const ruleGroup = variables?.variables.find((v) => v.state.name === "rule_group")?.getValue() || null;
  if (ruleGroup !== null) {
    queries = queries?.map((query) => {
      return {
        ...query,
        expr: query.expr.replace("$rule_group", String(ruleGroup))
      };
    });
  }
  const urlState = {
    datasource: queries?.length && queries[0].datasource?.uid || null,
    queries: queries?.map(({ expr, refId }, i) => {
      return { expr, refId };
    }) || [],
    range: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.toURLRange)(range ? { from: range.from, to: range.to } : { from: "now-1h", to: "now" })
  };
  const param = encodeURIComponent((0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.serializeStateToUrlParam)(urlState));
  return `/explore?left=${param}`;
};
const InsightsMenuButtonRenderer = ({ model }) => {
  const data = _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.sceneGraph.getData(model).useState();
  const timeRange = _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.sceneGraph.getTimeRange(model).useState();
  const variables = _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.sceneGraph.getVariables(model).useState();
  const panel = model.state.panel;
  const url = getPrometheusExploreUrl({
    queries: data.data?.request?.targets,
    range: timeRange,
    variables
  });
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useStyles2)(getStyles);
  const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const onDismiss = () => {
    setShowModal(false);
  };
  const onButtonClick = (useful) => {
    (0,_Analytics__WEBPACK_IMPORTED_MODULE_13__.trackInsightsFeedback)({ useful, panel });
    onDismiss();
  };
  const modal = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Modal,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.insights-menu-button-renderer.modal.title-rate-this-panel", "Rate this panel"),
      isOpen: showModal,
      onDismiss,
      onClickBackdrop: onDismiss,
      className: styles.container,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.insights-menu-button-renderer.help-us", children: "Help us improve this page by telling us whether this panel is useful to you!" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.buttonsContainer, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button, { variant: "secondary", className: styles.buttonContainer, onClick: () => onButtonClick(false), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.button, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { name: "thumbs-up", className: styles.thumbsdown, size: "xxxl" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: `I don't like it` })
          ] }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button, { variant: "secondary", className: styles.buttonContainer, onClick: () => onButtonClick(true), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.button, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { name: "thumbs-up", size: "xxxl" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.insights-menu-button-renderer.modal.i-like-it", children: "I like it" }) })
          ] }) })
        ] })
      ] })
    }
  );
  const menu = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Menu, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Menu.Item,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.insights-menu-button-renderer.menu.label-explore", "Explore"),
        icon: "compass",
        url,
        target: "_blank"
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Menu.Item,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.insights-menu-button-renderer.menu.label-rate-this-panel", "Rate this panel"),
        icon: "comment-alt-message",
        onClick: () => setShowModal(true)
      }
    )
  ] });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Dropdown, { overlay: menu, placement: "bottom-start", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.IconButton,
      {
        name: "ellipsis-v",
        variant: "secondary",
        className: styles.menu,
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.insights-menu-button-renderer.aria-label-rate-this-panel", "Rate this panel")
      }
    ) }),
    modal
  ] });
};
class InsightsMenuButton extends _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.SceneObjectBase {
  static {
    this.Component = InsightsMenuButtonRenderer;
  }
}
const getStyles = (theme) => ({
  buttonsContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    gap: "25px"
  }),
  buttonContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    height: "150px",
    width: "150px",
    cursor: "pointer",
    justifyContent: "center"
  }),
  button: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "column"
  }),
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    maxWidth: "370px"
  }),
  menu: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    height: "25px",
    margin: "0"
  }),
  thumbsdown: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    transform: "scale(-1, -1);"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/SectionFooter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionFooter: () => (/* binding */ SectionFooter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");




function SectionFooter({ children }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.sectionFooter, children: children && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children }) });
}
const getStyles = (theme) => ({
  sectionFooter: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: theme.spacing(2)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/SectionSubheader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionSubheader: () => (/* binding */ SectionSubheader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _DataSourcesInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/DataSourcesInfo.tsx");





function SectionSubheader({
  children,
  datasources
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
    children,
    datasources && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DataSourcesInfo__WEBPACK_IMPORTED_MODULE_3__.DataSourcesInfo, { datasources })
  ] });
}
const getStyles = (theme) => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/grafana/Active.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getActiveGrafanaAlertsScene: () => (/* binding */ getActiveGrafanaAlertsScene)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/thresholds.ts");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getActiveGrafanaAlertsScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules{state="active", id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules{state="active"})`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        instant: true,
        expr
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.PanelBuilders.stat().setTitle(panelTitle).setDescription("The number of currently active alert rules").setData(query).setThresholds({
      mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ThresholdsMode.Absolute,
      steps: [
        {
          color: "green",
          value: 0
        },
        {
          color: "green",
          value: 80
        }
      ]
    }).setNoValue("0").setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/grafana/AlertsByStateScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGrafanaInstancesByStateScene: () => (/* binding */ getGrafanaInstancesByStateScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getGrafanaInstancesByStateScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by(state) (grafanacloud_grafana_instance_alerting_alerts{id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : "sum by (state) (grafanacloud_grafana_instance_alerting_alerts)";
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "{{state}}"
      }
    ]
  });
  const transformation = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneDataTransformer({
    $data: query,
    transformations: [
      {
        id: "renameByRegex",
        options: {
          regex: "alerting",
          renamePattern: "firing"
        }
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    height: "400px",
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("A breakdown of all of your alert rule instances based on state").setData(transformation).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setOverrides(
      (b) => b.matchFieldsWithName("firing").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("firing")).matchFieldsWithName("normal").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("normal")).matchFieldsWithName("pending").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("pending")).matchFieldsWithName("recovering").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("recovering")).matchFieldsWithName("error").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("error")).matchFieldsWithName("nodata").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("nodata"))
    ).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/grafana/EvalSuccessVsFailuresScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGrafanaEvalSuccessVsFailuresScene: () => (/* binding */ getGrafanaEvalSuccessVsFailuresScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getGrafanaEvalSuccessVsFailuresScene(datasource, panelTitle) {
  const exprA = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum(grafanacloud_grafana_instance_alerting_rule_evaluations_total:rate5m{id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"}) - sum(grafanacloud_grafana_instance_alerting_rule_evaluation_failures_total:rate5m{id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum(grafanacloud_grafana_instance_alerting_rule_evaluations_total:rate5m) - sum(grafanacloud_grafana_instance_alerting_rule_evaluation_failures_total:rate5m)`;
  const exprB = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum(grafanacloud_grafana_instance_alerting_rule_evaluation_failures_total:rate5m{id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum(grafanacloud_grafana_instance_alerting_rule_evaluation_failures_total:rate5m)`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr: exprA,
        range: true,
        legendFormat: "success"
      },
      {
        refId: "B",
        expr: exprB,
        range: true,
        legendFormat: "failed"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("The number of successful and failed alert rule evaluations").setData(query).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOverrides(
      (b) => b.matchFieldsWithName("success").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("success")).matchFieldsWithName("failed").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("failed"))
    ).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/grafana/InstanceStatusScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInstanceStatByStatusScene: () => (/* binding */ getInstanceStatByStatusScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");




function getInstanceStatByStatusScene(datasource, panelTitle, panelDescription, status) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_1__.INSTANCE_ID ? `sum by (state) (grafanacloud_grafana_instance_alerting_alerts{state="${status}", id="${_home_Insights__WEBPACK_IMPORTED_MODULE_1__.INSTANCE_ID}"})` : `sum by (state) (grafanacloud_grafana_instance_alerting_alerts{state="${status}"})`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        instant: true,
        expr,
        legendFormat: "{{state}}"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    height: "100%",
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.stat().setTitle(panelTitle).setDescription(panelDescription).setData(query).setOverrides((b) => b.matchFieldsWithName(status).overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_1__.overrideToFixedColor)(status))).setNoValue("0").setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_2__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/grafana/MissedIterationsScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGrafanaMissedIterationsScene: () => (/* binding */ getGrafanaMissedIterationsScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getGrafanaMissedIterationsScene(datasource, panelTitle) {
  const expr = `sum by(rule_title) (grafanacloud_grafana_instance_alerting_schedule_rule_evaluations_missed_total:rate5m{id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "{{rule_title}}"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("The number of missed iterations per alert rule").setData(query).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/grafana/MostFiredInstancesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuleLink: () => (/* binding */ RuleLink),
/* harmony export */   getMostFiredInstancesScene: () => (/* binding */ getMostFiredInstancesScene)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");









const RULE_UID_FIELD_NAME = "ruleUID";
const ALERT_NAME_FIELD_NAME = "labels_alertname";
const VALUE_FIELD_NAME = "Value #A";
function getMostFiredInstancesScene(datasource, panelTitle) {
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr: `topk(10, sum by(${ALERT_NAME_FIELD_NAME}, ${RULE_UID_FIELD_NAME}) (count_over_time({from="state-history"} | json | current = \`Alerting\` [1w])))`,
        instant: true
      }
    ]
  });
  const createRuleLink = (field) => {
    return {
      ...field,
      config: {
        custom: {
          cellOptions: {
            type: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.TableCellDisplayMode.Custom,
            cellComponent: RuleLink
          }
        }
      }
    };
  };
  const ruleLinkTransformation = () => (source) => {
    return source.pipe(
      (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
        return data.map((frame) => {
          return {
            ...frame,
            fields: frame.fields.map((field) => {
              if (field.name === ALERT_NAME_FIELD_NAME) {
                return createRuleLink(field);
              }
              return field;
            })
          };
        });
      })
    );
  };
  const transformation = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.SceneDataTransformer({
    $data: query,
    transformations: [
      ruleLinkTransformation,
      {
        id: "sortBy",
        options: {
          fields: {},
          sort: [
            {
              field: VALUE_FIELD_NAME,
              desc: true
            }
          ]
        }
      },
      {
        id: "organize",
        options: {
          excludeByName: {
            Time: true,
            [RULE_UID_FIELD_NAME]: false
          },
          indexByName: {
            [ALERT_NAME_FIELD_NAME]: 0,
            [RULE_UID_FIELD_NAME]: 1,
            [VALUE_FIELD_NAME]: 2
          },
          renameByName: {
            [ALERT_NAME_FIELD_NAME]: "Alert rule name",
            [VALUE_FIELD_NAME]: "Number of fires"
          }
        }
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_5__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.PanelBuilders.table().setTitle(panelTitle).setDescription("The alert rule instances that have fired the most").setData(transformation).setNoValue("No new alerts fired last week").setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_7__.InsightsMenuButton({ panel: panelTitle })]).setOverrides(
      (builder) => (
        // Hide the rule UID field, if we omit it in a transformation the custom cell renderer will not work
        builder.matchFieldsWithName(RULE_UID_FIELD_NAME).overrideCustomFieldConfig("hideFrom", { viz: true, legend: false, tooltip: false })
      )
    ).build()
  });
}
function RuleLink({ value, frame, rowIndex }) {
  const ruleUIDs = frame.fields.find((field) => field.name === RULE_UID_FIELD_NAME);
  const ruleUID = ruleUIDs?.values[rowIndex];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TextLink, { color: "primary", external: true, href: (0,_utils_url__WEBPACK_IMPORTED_MODULE_6__.createRelativeUrl)(`/alerting/grafana/${ruleUID}/view`), inline: false, children: String(value) });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/grafana/Paused.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPausedGrafanaAlertsScene: () => (/* binding */ getPausedGrafanaAlertsScene)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/thresholds.ts");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getPausedGrafanaAlertsScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules{state="paused", id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules{state="paused"})`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        instant: true,
        expr
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.PanelBuilders.stat().setTitle(panelTitle).setDescription("The number of current paused alert rules").setData(query).setThresholds({
      mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ThresholdsMode.Absolute,
      steps: [
        {
          color: "yellow",
          value: 0
        },
        {
          color: "red",
          value: 80
        }
      ]
    }).setNoValue("0").setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/grafana/RulesByEvaluation.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGrafanaRulesByEvaluationScene: () => (/* binding */ getGrafanaRulesByEvaluationScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getGrafanaRulesByEvaluationScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules{id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules)`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "{{state}} evaluation"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("See how many of your alert rules are paused or active").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setOverrides(
      (b) => b.matchFieldsWithName("active evaluation").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("active evaluation"))
    ).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/grafana/RulesByEvaluationPercentage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGrafanaRulesByEvaluationPercentageScene: () => (/* binding */ getGrafanaRulesByEvaluationPercentageScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getGrafanaRulesByEvaluationPercentageScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules{id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"}) / ignoring(state) group_left sum(grafanacloud_grafana_instance_alerting_rule_group_rules{id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules) / ignoring(state) group_left sum(grafanacloud_grafana_instance_alerting_rule_group_rules)`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "{{state}} evaluation"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("See what percentage of your alert rules are paused or active").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setCustomFieldConfig("fillOpacity", 45).setUnit("percentunit").setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setMax(1).setOverrides(
      (b) => b.matchFieldsWithName("active evaluation").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("active evaluation"))
    ).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/grafana/alertmanager/AlertsByState.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAlertsByStateScene: () => (/* binding */ getAlertsByStateScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getAlertsByStateScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by (state) (grafanacloud_grafana_instance_alerting_alertmanager_alerts{id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum by (state) (grafanacloud_grafana_instance_alerting_alertmanager_alerts)`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "{{state}}"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("A breakdown of all of your firing alert rule instances based on state").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setOverrides((b) => b.matchFieldsWithName("active").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("active"))).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/grafana/alertmanager/SilencesByStateScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGrafanaAlertmanagerSilencesScene: () => (/* binding */ getGrafanaAlertmanagerSilencesScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getGrafanaAlertmanagerSilencesScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by (state) (grafanacloud_grafana_instance_alerting_silences{id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum by (state) (grafanacloud_grafana_instance_alerting_silences)`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "{{state}}"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("The number of silences by state").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/AlertsByState.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAlertsByStateScene: () => (/* binding */ getAlertsByStateScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getAlertsByStateScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by (state) (grafanacloud_instance_alertmanager_alerts{stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum by (state) (grafanacloud_instance_alertmanager_alerts)`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "{{state}}"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("A breakdown of all of your firing alert rule instances based on state").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setOverrides((b) => b.matchFieldsWithName("active").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("active"))).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/InvalidConfig.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInvalidConfigScene: () => (/* binding */ getInvalidConfigScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getInvalidConfigScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by (cluster)(grafanacloud_instance_alertmanager_invalid_config{stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum by (cluster)(grafanacloud_instance_alertmanager_invalid_config)`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "{{cluster}}"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.stat().setTitle(panelTitle).setDescription("The current state of your alertmanager configuration").setData(query).setUnit("bool_yes_no").setOption("graphMode", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.BigValueGraphMode.None).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/Notifications.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNotificationsScene: () => (/* binding */ getNotificationsScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getNotificationsScene(datasource, panelTitle) {
  const exprA = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by(cluster)(grafanacloud_instance_alertmanager_notifications_per_second{stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"}) - sum by (cluster)(grafanacloud_instance_alertmanager_notifications_failed_per_second{stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum by(cluster)(grafanacloud_instance_alertmanager_notifications_per_second) - sum by (cluster)(grafanacloud_instance_alertmanager_notifications_failed_per_second)`;
  const exprB = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by(cluster)(grafanacloud_instance_alertmanager_notifications_failed_per_second{stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum by(cluster)(grafanacloud_instance_alertmanager_notifications_failed_per_second)`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr: exprA,
        range: true,
        legendFormat: "success"
      },
      {
        refId: "B",
        expr: exprB,
        range: true,
        legendFormat: "failed"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("The number of successful and failed notifications").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setOverrides(
      (b) => b.matchFieldsWithName("success").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("success")).matchFieldsWithName("failed").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("failed"))
    ).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/Silences.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSilencesScene: () => (/* binding */ getSilencesScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getSilencesScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by (state) (grafanacloud_instance_alertmanager_silences{stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum by (state) (grafanacloud_instance_alertmanager_silences)`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "{{state}}"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("The number of silences by state").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/perGroup/RuleGroupEvaluationDurationIntervalRatioScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRuleGroupEvaluationDurationIntervalRatioScene: () => (/* binding */ getRuleGroupEvaluationDurationIntervalRatioScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/raw/dashboard/x/dashboard_types.gen.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getRuleGroupEvaluationDurationIntervalRatioScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_3__.INSTANCE_ID ? `grafanacloud_instance_rule_group_last_duration_seconds{rule_group="$rule_group", stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_3__.INSTANCE_ID}"} / grafanacloud_instance_rule_group_interval_seconds{rule_group="$rule_group", stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_3__.INSTANCE_ID}"}` : `grafanacloud_instance_rule_group_last_duration_seconds{rule_group="$rule_group"} / grafanacloud_instance_rule_group_interval_seconds{rule_group="$rule_group"}`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "duration / interval"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_3__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("The percentage of interval time spent evaluating").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.TooltipDisplayMode.Multi }).setOption("legend", { showLegend: false }).setUnit("percentunit").setThresholds({
      mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.ThresholdsMode.Percentage,
      steps: [
        {
          color: "green",
          value: 0
        },
        {
          color: "red",
          value: 80
        },
        {
          color: "yellow",
          value: 60
        }
      ]
    }).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_4__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/perGroup/RuleGroupEvaluationDurationScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRuleGroupEvaluationDurationScene: () => (/* binding */ getRuleGroupEvaluationDurationScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getRuleGroupEvaluationDurationScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `grafanacloud_instance_rule_group_last_duration_seconds{rule_group="$rule_group", stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"}` : `grafanacloud_instance_rule_group_last_duration_seconds{rule_group="$rule_group"}`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "{{rule_group}}"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("How long it took to evaluate the rule group").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setUnit("s").setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setOption("legend", { showLegend: false }).setOverrides(
      (b) => b.matchFieldsByQuery("A").overrideColor({
        mode: "fixed",
        fixedColor: "blue"
      })
    ).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/perGroup/RuleGroupEvaluationsScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRuleGroupEvaluationsScene: () => (/* binding */ getRuleGroupEvaluationsScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getRuleGroupEvaluationsScene(datasource, panelTitle) {
  const exprA = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `grafanacloud_instance_rule_evaluations_total:rate5m{rule_group="$rule_group", stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"} - grafanacloud_instance_rule_evaluation_failures_total:rate5m{rule_group=~"$rule_group", stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"}` : `grafanacloud_instance_rule_evaluations_total:rate5m{rule_group="$rule_group"} - grafanacloud_instance_rule_evaluation_failures_total:rate5m{rule_group=~"$rule_group"}`;
  const exprB = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `grafanacloud_instance_rule_evaluation_failures_total:rate5m{rule_group=~"$rule_group", stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"}` : `grafanacloud_instance_rule_evaluation_failures_total:rate5m{rule_group=~"$rule_group"}`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr: exprA,
        range: true,
        legendFormat: "success"
      },
      {
        refId: "B",
        expr: exprB,
        range: true,
        legendFormat: "failed"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("The number of successful and failed evaluations for the rule group").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setOverrides(
      (b) => b.matchFieldsWithName("success").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("success")).matchFieldsWithName("failed").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("failed"))
    ).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/perGroup/RuleGroupIntervalScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRuleGroupIntervalScene: () => (/* binding */ getRuleGroupIntervalScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getRuleGroupIntervalScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `grafanacloud_instance_rule_group_interval_seconds{rule_group="$rule_group", stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"}` : `grafanacloud_instance_rule_group_interval_seconds{rule_group="$rule_group"}`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "interval"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.stat().setTitle(panelTitle).setDescription("The current and historical rule group evaluation interval").setData(query).setUnit("s").setOption("graphMode", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.BigValueGraphMode.Area).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/perGroup/RulesPerGroupScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRulesPerGroupScene: () => (/* binding */ getRulesPerGroupScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getRulesPerGroupScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum(grafanacloud_instance_rule_group_rules{rule_group="$rule_group", stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum(grafanacloud_instance_rule_group_rules{rule_group="$rule_group"})`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "number of rules"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.stat().setTitle(panelTitle).setDescription("The current and historical number of alert rules in the rule group").setData(query).setUnit("none").setOption("graphMode", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.BigValueGraphMode.Area).setOverrides(
      (b) => b.matchFieldsByQuery("A").overrideColor({
        mode: "fixed",
        fixedColor: "blue"
      })
    ).setNoValue("0").setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/rules/EvalSuccessVsFailuresScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEvalSuccessVsFailuresScene: () => (/* binding */ getEvalSuccessVsFailuresScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getEvalSuccessVsFailuresScene(datasource, panelTitle) {
  const exprA = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum(grafanacloud_instance_rule_evaluations_total:rate5m{stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"}) - sum(grafanacloud_instance_rule_evaluation_failures_total:rate5m{stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum(grafanacloud_instance_rule_evaluations_total:rate5m) - sum(grafanacloud_instance_rule_evaluation_failures_total:rate5m)`;
  const exprB = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum(grafanacloud_instance_rule_evaluation_failures_total:rate5m{stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum(grafanacloud_instance_rule_evaluation_failures_total:rate5m)`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr: exprA,
        range: true,
        legendFormat: "success"
      },
      {
        refId: "B",
        expr: exprB,
        range: true,
        legendFormat: "failed"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("The number of successful and failed alert rule evaluations").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setOverrides((b) => b.matchFieldsWithName("failed").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("failed"))).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/rules/Firing.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFiringCloudAlertsScene: () => (/* binding */ getFiringCloudAlertsScene)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/thresholds.ts");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getFiringCloudAlertsScene(datasource, panelTitle) {
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        instant: true,
        expr: 'sum by (alertstate) (ALERTS{alertstate="firing"})'
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.PanelBuilders.stat().setTitle(panelTitle).setDescription("The number of currently firing alert rule instances").setData(query).setThresholds({
      mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ThresholdsMode.Absolute,
      steps: [
        {
          color: "red",
          value: 0
        },
        {
          color: "red",
          value: 80
        }
      ]
    }).setNoValue("0").setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/rules/InstancesByState.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInstancesByStateScene: () => (/* binding */ getInstancesByStateScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getInstancesByStateScene(datasource, panelTitle) {
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr: "sum by (alertstate) (ALERTS)",
        range: true,
        legendFormat: "{{state}}"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("The number of firing and pending alert rule instances").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setOverrides((b) => b.matchFieldsWithName("firing").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("firing"))).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/rules/InstancesPercentageByState.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInstancesPercentageByStateScene: () => (/* binding */ getInstancesPercentageByStateScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getInstancesPercentageByStateScene(datasource, panelTitle) {
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr: "sum by (alertstate) (ALERTS) / ignoring(alertstate) group_left sum(ALERTS)",
        range: true,
        legendFormat: "{{alertstate}}"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("See what percentage of your alert rules are firing versus pending").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setCustomFieldConfig("fillOpacity", 45).setUnit("percentunit").setMax(1).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setOverrides((b) => b.matchFieldsWithName("firing").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("firing"))).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/rules/MissedIterationsScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMissedIterationsScene: () => (/* binding */ getMissedIterationsScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getMissedIterationsScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum(grafanacloud_instance_rule_group_iterations_missed_total:rate5m{stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum(grafanacloud_instance_rule_group_iterations_missed_total:rate5m)`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "missed"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("The number of evaluations missed").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setOption("legend", { showLegend: false }).setOverrides((b) => b.matchFieldsWithName("missed").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("missed"))).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/rules/MostFiredRules.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMostFiredRulesScene: () => (/* binding */ getMostFiredRulesScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");




function getMostFiredRulesScene(datasource, panelTitle) {
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr: 'topk(10, sum by(alertname) (ALERTS{alertstate="firing"}))',
        instant: true,
        range: false,
        format: "table"
      }
    ]
  });
  const transformation = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneDataTransformer({
    $data: query,
    transformations: [
      {
        id: "organize",
        options: {
          excludeByName: {
            Time: true
          },
          indexByName: {},
          renameByName: {
            Value: "Number of fires",
            alertname: "Alert Rule Name"
          }
        }
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_1__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.table().setTitle(panelTitle).setDescription("The alert rules that have fired the most").setData(transformation).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_2__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/rules/Pending.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPendingCloudAlertsScene: () => (/* binding */ getPendingCloudAlertsScene)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/thresholds.ts");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getPendingCloudAlertsScene(datasource, panelTitle) {
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        instant: true,
        expr: 'sum by (alertstate) (ALERTS{alertstate="pending"})'
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.PanelBuilders.stat().setTitle(panelTitle).setDescription("The number of currently pending alert rule instances").setData(query).setThresholds({
      mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ThresholdsMode.Absolute,
      steps: [
        {
          color: "yellow",
          value: 0
        },
        {
          color: "red",
          value: 80
        }
      ]
    }).setNoValue("0").setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
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

/***/ "./public/img/alerting/at_a_glance_dark.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/at_a_glance_dark.8e6394e0.svg";

/***/ }),

/***/ "./public/img/alerting/at_a_glance_light.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/at_a_glance_light.5b021dba.svg";

/***/ }),

/***/ "./public/img/irm_logo.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/irm_logo.94dee2db.svg";

/***/ }),

/***/ "./public/img/synthetic_monitoring_logo.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/synthetic_monitoring_logo.8c87403a.svg";

/***/ })

}]);
//# sourceMappingURL=AlertingHome.b5360a5ba0a5912e3306.js.map