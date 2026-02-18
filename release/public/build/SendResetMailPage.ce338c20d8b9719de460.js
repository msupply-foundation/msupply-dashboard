"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SendResetMailPage"],{

/***/ "./public/app/core/components/ForgottenPassword/ForgottenPassword.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgottenPassword: () => (/* binding */ ForgottenPassword)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Legend.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Layout.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/config.ts");









const paragraphStyles = (theme) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  color: theme.colors.text.secondary,
  fontSize: theme.typography.bodySmall.fontSize,
  fontWeight: theme.typography.fontWeightRegular,
  marginTop: theme.spacing(1),
  display: "block"
});
const ForgottenPassword = () => {
  const [emailSent, setEmailSent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useStyles2)(paragraphStyles);
  const loginHref = `${app_core_config__WEBPACK_IMPORTED_MODULE_13__["default"].appSubUrl}/login`;
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();
  const sendEmail = async (formModel) => {
    const res = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.getBackendSrv)().post("/api/user/password/send-reset-email", formModel);
    if (res) {
      setEmailSent(true);
    }
  };
  if (emailSent) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "forgot-password.email-sent", children: "An email with a reset link has been sent to the email address. You should receive it shortly." }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Container, { margin: "md" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LinkButton, { variant: "primary", href: loginHref, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "forgot-password.back-button", children: "Back to login" }) })
    ] });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit(sendEmail), children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Legend, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "forgot-password.reset-password-header", children: "Reset password" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("forgot-password.user-field-label", "User"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "forgot-password.user-field-description",
          "Enter your information to get a reset link sent to you"
        ),
        invalid: !!errors.userOrEmail,
        error: errors?.userOrEmail?.message,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Input,
          {
            id: "user-input",
            placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("forgot-password.user-field-placeholder", "Email or username"),
            ...register("userOrEmail", { required: "Email or username is required" })
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { type: "submit", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "forgot-password.send-email-button", children: "Send reset email" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LinkButton, { fill: "text", href: loginHref, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "forgot-password.back-button", children: "Back to login" }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: styles, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "forgot-password.contact-admin", children: "Did you forget your username or email? Contact your Grafana administrator." }) })
  ] });
};


/***/ }),

/***/ "./public/app/core/components/ForgottenPassword/SendResetMailPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SendResetMailPage: () => (/* binding */ SendResetMailPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Login/LoginLayout.tsx");
/* harmony import */ var _ForgottenPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/ForgottenPassword/ForgottenPassword.tsx");




const SendResetMailPage = () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__.LoginLayout, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__.InnerBox, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ForgottenPassword__WEBPACK_IMPORTED_MODULE_2__.ForgottenPassword, {}) }) });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SendResetMailPage);


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


/***/ })

}]);
//# sourceMappingURL=SendResetMailPage.ce338c20d8b9719de460.js.map