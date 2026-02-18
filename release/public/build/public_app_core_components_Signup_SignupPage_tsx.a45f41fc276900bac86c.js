"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_core_components_Signup_SignupPage_tsx"],{

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

/***/ "./public/app/core/components/PasswordField/PasswordField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordField: () => (/* binding */ PasswordField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");






const PasswordField = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
    {
      ...props,
      type: showPassword ? "text" : "password",
      "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.Login.password,
      ref,
      suffix: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.IconButton,
        {
          name: showPassword ? "eye-slash" : "eye",
          "aria-controls": props.id,
          role: "switch",
          "aria-checked": showPassword,
          onClick: () => {
            setShowPassword(!showPassword);
          },
          tooltip: showPassword ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("grafana-ui.password-field.tooltip-hide", "Hide password") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("grafana-ui.password-field.tooltip-show", "Show password")
        }
      )
    }
  );
});
PasswordField.displayName = "PasswordField";


/***/ }),

/***/ "./public/app/core/components/Signup/SignupPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupPage: () => (/* binding */ SignupPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_features_admin_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/admin/utils.ts");
/* harmony import */ var _Login_LoginLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/components/Login/LoginLayout.tsx");
/* harmony import */ var _PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/components/PasswordField/PasswordField.tsx");











const SignupPage = ({ queryParams }) => {
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_9__.useAppNotification)();
  const {
    handleSubmit,
    formState: { errors },
    register,
    getValues
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({ defaultValues: { email: queryParams.email, code: queryParams.code } });
  const onSubmit = async (formData) => {
    if (formData.name === "") {
      delete formData.name;
    }
    delete formData.confirm;
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().post("/api/user/signup/step2", {
      email: formData.email,
      code: formData.code,
      username: formData.email,
      orgName: formData.orgName,
      password: formData.password,
      name: formData.name
    }).catch((err) => {
      const msg = err.data?.message || err;
      notifyApp.warning(msg);
    });
    if (response.code === "redirect-to-select-org") {
      window.location.assign((0,app_core_config__WEBPACK_IMPORTED_MODULE_8__.getConfig)().appSubUrl + "/profile/select-org?signup=1");
    }
    window.location.assign((0,app_core_config__WEBPACK_IMPORTED_MODULE_8__.getConfig)().appSubUrl + "/");
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_11__.LoginLayout, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_11__.InnerBox, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit(onSubmit), style: { width: "100%" }, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("sign-up.user-name-label", "Your name"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Input,
      {
        id: "user-name",
        ...register("name"),
        placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("sign-up.user-name-placeholder", "(optional)")
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("sign-up.email-label", "Email"), invalid: !!errors.email, error: errors.email?.message, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Input,
      {
        id: "email",
        ...register("email", {
          required: "Email is required",
          pattern: {
            value: app_features_admin_utils__WEBPACK_IMPORTED_MODULE_10__.w3cStandardEmailValidator,
            message: "Email is invalid"
          }
        }),
        type: "email"
      }
    ) }),
    !(0,app_core_config__WEBPACK_IMPORTED_MODULE_8__.getConfig)().autoAssignOrg && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("sign-up.org-name-label", "Org. name"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Input, { id: "org-name", ...register("orgName") }) }),
    (0,app_core_config__WEBPACK_IMPORTED_MODULE_8__.getConfig)().verifyEmailEnabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("sign-up.verification-code-label", "Email verification code (sent to your email)"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Input, { id: "verification-code", ...register("code") }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("sign-up.password-label", "Password"),
        invalid: !!errors.password,
        error: errors?.password?.message,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_12__.PasswordField,
          {
            id: "new-password",
            autoFocus: true,
            autoComplete: "new-password",
            ...register("password", { required: "Password is required" })
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("sign-up.confirm-password-label", "Confirm password"),
        invalid: !!errors.confirm,
        error: errors?.confirm?.message,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_12__.PasswordField,
          {
            id: "confirm-new-password",
            autoComplete: "new-password",
            ...register("confirm", {
              required: "Confirmed password is required",
              validate: (v) => v === getValues().password || "Passwords must match!"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { type: "submit", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "sign-up.submit-button", children: "Submit" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, { fill: "text", href: (0,app_core_config__WEBPACK_IMPORTED_MODULE_8__.getConfig)().appSubUrl + "/login", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "sign-up.back-button", children: "Back to login" }) })
    ] })
  ] }) }) });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignupPage);


/***/ }),

/***/ "./public/app/features/admin/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   highlightTrial: () => (/* binding */ highlightTrial),
/* harmony export */   isTrial: () => (/* binding */ isTrial),
/* harmony export */   w3cStandardEmailValidator: () => (/* binding */ w3cStandardEmailValidator)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");


const w3cStandardEmailValidator = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function isTrial() {
  const expiry = _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.licenseInfo?.trialExpiry;
  return !!(expiry && expiry > 0);
}
const highlightTrial = () => isTrial() && _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.featureToggles.featureHighlights;


/***/ })

}]);
//# sourceMappingURL=public_app_core_components_Signup_SignupPage_tsx.a45f41fc276900bac86c.js.map