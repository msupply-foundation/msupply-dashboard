"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["LoginPage"],{

/***/ "./public/app/core/components/ForgottenPassword/ChangePassword.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePassword: () => (/* binding */ ChangePassword)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Login_LoginForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/components/Login/LoginForm.tsx");
/* harmony import */ var _PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/components/PasswordField/PasswordField.tsx");
/* harmony import */ var _ValidationLabels_ValidationLabels__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/core/components/ValidationLabels/ValidationLabels.tsx");











const ChangePassword = ({ onSubmit, onSkip, showDefaultPasswordWarning }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(_Login_LoginForm__WEBPACK_IMPORTED_MODULE_12__.getStyles);
  const [displayValidationLabels, setDisplayValidationLabels] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [pristine, setPristine] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    defaultValues: {
      newPassword: "",
      confirmNew: ""
    }
  });
  const newPassword = watch("newPassword");
  const submit = (passwords) => {
    onSubmit(passwords.newPassword);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit(submit), children: [
    showDefaultPasswordWarning && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Alert,
      {
        severity: "info",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "forgot-password.change-password.default-password-alert",
          "Continuing to use the default password exposes you to security risks."
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("forgot-password.change-password.new-password-label", "New password"),
        invalid: !!errors.newPassword,
        error: errors?.newPassword?.message,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_13__.PasswordField,
          {
            onFocus: () => setDisplayValidationLabels(true),
            ...register("newPassword", {
              required: "New Password is required",
              onBlur: () => setPristine(false),
              validate: { strongPasswordValidationRegister: _ValidationLabels_ValidationLabels__WEBPACK_IMPORTED_MODULE_14__.strongPasswordValidationRegister }
            }),
            id: "new-password",
            autoFocus: true,
            autoComplete: "new-password"
          }
        )
      }
    ),
    displayValidationLabels && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _ValidationLabels_ValidationLabels__WEBPACK_IMPORTED_MODULE_14__.ValidationLabels,
      {
        pristine,
        password: newPassword,
        strongPasswordValidations: _ValidationLabels_ValidationLabels__WEBPACK_IMPORTED_MODULE_14__.strongPasswordValidations
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("forgot-password.change-password.confirm-label", "Confirm new password"),
        invalid: !!errors.confirmNew,
        error: errors?.confirmNew?.message,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_13__.PasswordField,
          {
            ...register("confirmNew", {
              required: "Confirmed Password is required",
              validate: (v) => v === getValues().newPassword || "Passwords must match!"
            }),
            id: "confirm-new-password",
            autoComplete: "new-password"
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "column", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button, { type: "submit", className: styles.submitButton, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "forgot-password.change-password.submit-button", children: "Submit" }) }),
      !_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.auth.basicAuthStrongPasswordPolicy && onSkip && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Tooltip,
        {
          content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
            "forgot-password.change-password.tooltip-skip-button",
            "If you skip you will be prompted to change password next time you log in."
          ),
          placement: "bottom",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button,
            {
              className: styles.skipButton,
              fill: "text",
              onClick: onSkip,
              type: "button",
              "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.Login.skip,
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "forgot-password.change-password.skip-button", children: "Skip" })
            }
          )
        }
      )
    ] })
  ] });
};


/***/ }),

/***/ "./public/app/core/components/Login/LoginCtrl.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginCtrl: () => (/* binding */ LoginCtrl),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/config.ts");






const isOauthEnabled = () => {
  return !!app_core_config__WEBPACK_IMPORTED_MODULE_5__["default"].oauth && Object.keys(app_core_config__WEBPACK_IMPORTED_MODULE_5__["default"].oauth).length > 0;
};
const showPasswordlessConfirmation = () => {
  const queryValues = _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.locationService.getSearch();
  return !!queryValues.get("code");
};
class LoginCtrl extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);
    this.changePassword = (password) => {
      const pw = {
        newPassword: password,
        confirmNew: password,
        oldPassword: "admin"
      };
      if (this.props.resetCode) {
        const resetModel = {
          code: this.props.resetCode,
          newPassword: password,
          confirmPassword: password
        };
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().post("/api/user/password/reset", resetModel).then(() => {
          this.toGrafana();
        });
      } else {
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().put("/api/user/password", pw).then(() => {
          this.toGrafana();
        }).catch((err) => console.error(err));
      }
    };
    this.login = (formModel) => {
      this.setState({
        loginErrorMessage: void 0,
        isLoggingIn: true
      });
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().post("/login", formModel, { showErrorAlert: false }).then((result) => {
        this.result = result;
        if (formModel.password !== "admin" || app_core_config__WEBPACK_IMPORTED_MODULE_5__["default"].ldapEnabled || app_core_config__WEBPACK_IMPORTED_MODULE_5__["default"].authProxyEnabled) {
          this.toGrafana();
          return;
        } else {
          this.changeView(formModel.password === "admin");
        }
      }).catch((err) => {
        const fetchErrorMessage = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.isFetchError)(err) ? getErrorMessage(err) : void 0;
        this.setState({
          isLoggingIn: false,
          loginErrorMessage: fetchErrorMessage || (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("login.error.unknown", "Unknown error occurred")
        });
      });
    };
    this.passwordlessStart = (formModel) => {
      this.setState({
        loginErrorMessage: void 0,
        isLoggingIn: true
      });
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().post("/api/login/passwordless/start", formModel, { showErrorAlert: false }).then((result) => {
        window.location.assign(result.URL);
        return;
      }).catch((err) => {
        const fetchErrorMessage = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.isFetchError)(err) ? getErrorMessage(err) : void 0;
        this.setState({
          isLoggingIn: false,
          loginErrorMessage: fetchErrorMessage || (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("login.error.unknown", "Unknown error occurred")
        });
      });
    };
    this.passwordlessConfirm = (formModel) => {
      this.setState({
        loginErrorMessage: void 0,
        isLoggingIn: true
      });
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().post("/api/login/passwordless/authenticate", formModel, { showErrorAlert: false }).then((result) => {
        this.result = result;
        this.toGrafana();
        return;
      }).catch((err) => {
        const fetchErrorMessage = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.isFetchError)(err) ? getErrorMessage(err) : void 0;
        this.setState({
          isLoggingIn: false,
          loginErrorMessage: fetchErrorMessage || (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("login.error.unknown", "Unknown error occurred")
        });
      });
    };
    this.changeView = (showDefaultPasswordWarning) => {
      this.setState({
        isChangingPassword: true,
        showDefaultPasswordWarning
      });
    };
    this.toGrafana = () => {
      if (app_core_config__WEBPACK_IMPORTED_MODULE_5__["default"].featureToggles.useSessionStorageForRedirection) {
        window.location.assign(app_core_config__WEBPACK_IMPORTED_MODULE_5__["default"].appSubUrl + "/");
        return;
      }
      if (this.result?.redirectUrl) {
        if (app_core_config__WEBPACK_IMPORTED_MODULE_5__["default"].appSubUrl !== "" && !this.result.redirectUrl.startsWith(app_core_config__WEBPACK_IMPORTED_MODULE_5__["default"].appSubUrl)) {
          window.location.assign(app_core_config__WEBPACK_IMPORTED_MODULE_5__["default"].appSubUrl + this.result.redirectUrl);
        } else {
          window.location.assign(this.result.redirectUrl);
        }
      } else {
        window.location.assign(app_core_config__WEBPACK_IMPORTED_MODULE_5__["default"].appSubUrl + "/");
      }
    };
    this.state = {
      isLoggingIn: false,
      isChangingPassword: false,
      showDefaultPasswordWarning: false,
      // oAuth unauthorized sets the redirect error message in the bootdata, hence we need to check the key here
      loginErrorMessage: getBootDataErrMessage(app_core_config__WEBPACK_IMPORTED_MODULE_5__["default"].loginError)
    };
  }
  render() {
    const { children } = this.props;
    const { isLoggingIn, isChangingPassword, showDefaultPasswordWarning, loginErrorMessage } = this.state;
    const { login, toGrafana, changePassword, passwordlessStart, passwordlessConfirm } = this;
    const { loginHint, passwordHint, disableLoginForm, disableUserSignUp } = app_core_config__WEBPACK_IMPORTED_MODULE_5__["default"];
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: children({
      isOauthEnabled: isOauthEnabled(),
      loginHint,
      passwordHint,
      disableLoginForm,
      disableUserSignUp,
      login,
      passwordlessStart,
      passwordlessConfirm,
      showPasswordlessConfirmation: showPasswordlessConfirmation(),
      isLoggingIn,
      changePassword,
      skipPasswordChange: toGrafana,
      isChangingPassword,
      showDefaultPasswordWarning,
      loginErrorMessage
    }) });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginCtrl);
function getErrorMessage(err) {
  switch (err.data?.messageId) {
    case "password-auth.empty":
    case "password-auth.failed":
    case "password-auth.invalid":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("login.error.invalid-user-or-password", "Invalid username or password");
    case "login-attempt.blocked":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "login.error.blocked",
        "You have exceeded the number of login attempts for this user. Please try again later."
      );
    default:
      return err.data?.message;
  }
}
function getBootDataErrMessage(str) {
  switch (str) {
    case "oauth.login.error":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("oauth.login.error", "Login provider denied login request");
    default:
      return str;
  }
}


/***/ }),

/***/ "./public/app/core/components/Login/LoginForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginForm: () => (/* binding */ LoginForm),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/PasswordField/PasswordField.tsx");









const LoginForm = ({ children, onSubmit, isLoggingIn, passwordHint, loginHint }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  const usernameId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const passwordId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({ mode: "onChange" });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.wrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit(onSubmit), children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("login.form.username-label", "Email or username"),
        invalid: !!errors.user,
        error: errors.user?.message,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
          {
            ...register("user", { required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("login.form.username-required", "Email or username is required") }),
            id: usernameId,
            autoFocus: true,
            autoCapitalize: "none",
            placeholder: loginHint || (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("login.form.username-placeholder", "email or username"),
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.pages.Login.username
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("login.form.password-label", "Password"),
        invalid: !!errors.password,
        error: errors.password?.message,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_10__.PasswordField,
          {
            ...register("password", { required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("login.form.password-required", "Password is required") }),
            id: passwordId,
            autoComplete: "current-password",
            placeholder: passwordHint || (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("login.form.password-placeholder", "password")
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
      {
        type: "submit",
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.pages.Login.submit,
        className: styles.submitButton,
        disabled: isLoggingIn,
        children: isLoggingIn ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("login.form.submit-loading-label", "Logging in...") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("login.form.submit-label", "Log in")
      }
    ),
    children
  ] }) });
};
const getStyles = (theme) => {
  return {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "100%",
      paddingBottom: theme.spacing(2)
    }),
    submitButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      justifyContent: "center",
      width: "100%"
    }),
    skipButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      alignSelf: "flex-start"
    })
  };
};


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

/***/ "./public/app/core/components/Login/LoginPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/navModel.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_Branding_Branding__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/Branding/Branding.tsx");
/* harmony import */ var _ForgottenPassword_ChangePassword__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/ForgottenPassword/ChangePassword.tsx");
/* harmony import */ var _Page_Page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _LoginCtrl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/components/Login/LoginCtrl.tsx");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/components/Login/LoginForm.tsx");
/* harmony import */ var _LoginLayout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/core/components/Login/LoginLayout.tsx");
/* harmony import */ var _LoginServiceButtons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/core/components/Login/LoginServiceButtons.tsx");
/* harmony import */ var _PasswordlessConfirmationForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/core/components/Login/PasswordlessConfirmationForm.tsx");
/* harmony import */ var _PasswordlessLoginForm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/core/components/Login/PasswordlessLoginForm.tsx");
/* harmony import */ var _UserSignup__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/core/components/Login/UserSignup.tsx");

















const LoginPage = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  document.title = app_core_components_Branding_Branding__WEBPACK_IMPORTED_MODULE_9__.Branding.AppTitle;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Page_Page__WEBPACK_IMPORTED_MODULE_11__.Page, { layout: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PageLayoutType.Custom, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LoginCtrl__WEBPACK_IMPORTED_MODULE_12__["default"], { children: ({
    loginHint,
    passwordHint,
    disableLoginForm,
    disableUserSignUp,
    login,
    passwordlessStart,
    passwordlessConfirm,
    showPasswordlessConfirmation,
    isLoggingIn,
    changePassword,
    skipPasswordChange,
    isChangingPassword,
    showDefaultPasswordWarning,
    loginErrorMessage
  }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_LoginLayout__WEBPACK_IMPORTED_MODULE_14__.LoginLayout, { isChangingPassword, children: [
    !isChangingPassword && !showPasswordlessConfirmation && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_LoginLayout__WEBPACK_IMPORTED_MODULE_14__.InnerBox, { children: [
      loginErrorMessage && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Alert, { className: styles.alert, severity: "error", title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("login.error.title", "Login failed"), children: loginErrorMessage }),
      !disableLoginForm && !_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.auth.passwordlessEnabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _LoginForm__WEBPACK_IMPORTED_MODULE_13__.LoginForm,
        {
          onSubmit: login,
          loginHint,
          passwordHint,
          isLoggingIn,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { justifyContent: "flex-end", children: !_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.auth.disableLogin && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LinkButton,
            {
              className: styles.forgottenPassword,
              fill: "text",
              href: `${_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.appSubUrl}/user/password/send-reset-email`,
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "login.forgot-password", children: "Forgot your password?" })
            }
          ) })
        }
      ),
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.auth.passwordlessEnabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PasswordlessLoginForm__WEBPACK_IMPORTED_MODULE_17__.PasswordlessLoginForm, { onSubmit: passwordlessStart, isLoggingIn }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LoginServiceButtons__WEBPACK_IMPORTED_MODULE_15__.LoginServiceButtons, {}),
      !disableUserSignUp && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserSignup__WEBPACK_IMPORTED_MODULE_18__.UserSignup, {})
    ] }),
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.auth.passwordlessEnabled && showPasswordlessConfirmation && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LoginLayout__WEBPACK_IMPORTED_MODULE_14__.InnerBox, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _PasswordlessConfirmationForm__WEBPACK_IMPORTED_MODULE_16__.PasswordlessConfirmation,
      {
        onSubmit: passwordlessConfirm,
        isLoggingIn
      }
    ) }),
    isChangingPassword && !_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.auth.passwordlessEnabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LoginLayout__WEBPACK_IMPORTED_MODULE_14__.InnerBox, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _ForgottenPassword_ChangePassword__WEBPACK_IMPORTED_MODULE_10__.ChangePassword,
      {
        showDefaultPasswordWarning,
        onSubmit: changePassword,
        onSkip: () => skipPasswordChange()
      }
    ) })
  ] }) }) });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);
const getStyles = (theme) => {
  return {
    forgottenPassword: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: 0,
      marginTop: theme.spacing(0.5)
    }),
    alert: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "100%"
    })
  };
};


/***/ }),

/***/ "./public/app/core/components/Login/LoginServiceButtons.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginServiceButtons: () => (/* binding */ LoginServiceButtons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/constants.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/config.ts");








const loginServices = () => {
  const oauthEnabled = !!app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].oauth;
  return {
    saml: {
      bgColor: "#464646",
      enabled: app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].samlEnabled,
      name: app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].samlName || _grafana_data__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_SAML_NAME,
      icon: "key-skeleton-alt"
    },
    google: {
      bgColor: "#e84d3c",
      enabled: oauthEnabled && Boolean(app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].oauth.google),
      name: app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].oauth?.google?.name || "Google",
      icon: app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].oauth?.google?.icon || "google"
    },
    azuread: {
      bgColor: "#2f2f2f",
      enabled: oauthEnabled && Boolean(app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].oauth.azuread),
      name: app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].oauth?.azuread?.name || "Microsoft",
      icon: app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].oauth?.azuread?.icon || "microsoft"
    },
    github: {
      bgColor: "#464646",
      enabled: oauthEnabled && Boolean(app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].oauth.github),
      name: app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].oauth?.github?.name || "GitHub",
      icon: app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].oauth?.github?.icon || "github"
    },
    gitlab: {
      bgColor: "#fc6d26",
      enabled: oauthEnabled && Boolean(app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].oauth.gitlab),
      name: app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].oauth?.gitlab?.name || "GitLab",
      icon: app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].oauth?.gitlab?.icon || "gitlab"
    },
    grafanacom: {
      bgColor: "#262628",
      enabled: oauthEnabled && Boolean(app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].oauth.grafana_com),
      name: app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].oauth?.grafana_com?.name || "Grafana.com",
      icon: app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].oauth?.grafana_com?.icon || "grafana",
      hrefName: "grafana_com"
    },
    okta: {
      bgColor: "#2f2f2f",
      enabled: oauthEnabled && Boolean(app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].oauth.okta),
      name: app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].oauth?.okta?.name || "Okta",
      icon: app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].oauth?.okta?.icon || "okta"
    },
    oauth: {
      bgColor: "#262628",
      enabled: oauthEnabled && Boolean(app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].oauth.generic_oauth),
      name: app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].oauth?.generic_oauth?.name || "OAuth",
      icon: app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].oauth?.generic_oauth?.icon || "signin",
      hrefName: "generic_oauth"
    }
  };
};
const getServiceStyles = (theme) => {
  return {
    button: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: "#d8d9da",
      position: "relative"
    }),
    buttonIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      position: "absolute",
      left: theme.spacing(1),
      top: "50%",
      transform: "translateY(-50%)"
    }),
    divider: {
      base: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        color: theme.colors.text.primary,
        display: "flex",
        marginBottom: theme.spacing(1),
        justifyContent: "space-between",
        textAlign: "center",
        width: "100%"
      }),
      line: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        width: 100,
        height: 10,
        borderBottom: `1px solid ${theme.colors.text}`
      })
    }
  };
};
const LoginDivider = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getServiceStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.divider.base, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.divider.line }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: !app_core_config__WEBPACK_IMPORTED_MODULE_9__["default"].disableLoginForm && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "login.divider.connecting-text", children: "or" }) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.divider.line }) })
  ] });
};
function getButtonStyleFor(service, styles, theme) {
  return (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(
    styles.button,
    (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      backgroundColor: service.bgColor,
      color: theme.colors.getContrastText(service.bgColor),
      ["&:hover"]: {
        backgroundColor: theme.colors.emphasize(service.bgColor, 0.15),
        boxShadow: theme.shadows.z1
      }
    })
  );
}
const LoginServiceButtons = () => {
  const enabledServices = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.pickBy)(loginServices(), (service) => service.enabled);
  const hasServices = Object.keys(enabledServices).length > 0;
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useTheme2)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getServiceStyles);
  if (hasServices) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "column", width: "100%", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LoginDivider, {}),
      Object.entries(enabledServices).map(([key, service]) => {
        const serviceName = service.name;
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LinkButton,
          {
            className: getButtonStyleFor(service, styles, theme),
            href: `login/${service.hrefName ? service.hrefName : key}`,
            target: "_self",
            fullWidth: true,
            children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { className: styles.buttonIcon, name: service.icon }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "login.services.sing-in-with-prefix", children: [
                "Sign in with ",
                { serviceName }
              ] })
            ]
          },
          key
        );
      })
    ] });
  }
  return null;
};


/***/ }),

/***/ "./public/app/core/components/Login/PasswordlessConfirmationForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordlessConfirmation: () => (/* binding */ PasswordlessConfirmation),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_Branding_Branding__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/components/Branding/Branding.tsx");










const PasswordlessConfirmation = ({ onSubmit, isLoggingIn }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useStyles2)(getStyles);
  const confirmationCodeId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const codeId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const usernameId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const nameId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const [signup, setSignup] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({ mode: "onChange" });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    app_core_components_Branding_Branding__WEBPACK_IMPORTED_MODULE_11__.Branding.LoginTitle = "We've sent you an email!";
    app_core_components_Branding_Branding__WEBPACK_IMPORTED_MODULE_11__.Branding.GetLoginSubTitle = () => "Check your inbox and click the confirmation link or use the confirmation code we've sent.";
    const queryValues = _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.locationService.getSearch();
    setValue("code", queryValues.get("code") || "");
    if (queryValues.get("confirmationCode")) {
      setValue("confirmationCode", queryValues.get("confirmationCode") || "");
      if (!queryValues.get("signup")) {
        handleSubmit(onSubmit)();
      }
    }
    if (queryValues.get("signup")) {
      setSignup(true);
    }
    if (queryValues.get("username")) {
      setValue("username", queryValues.get("username") || "");
    }
    if (queryValues.get("name")) {
      setValue("name", queryValues.get("name") || "");
    }
  }, [setValue, handleSubmit, onSubmit, setSignup]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.wrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit(onSubmit), children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field, { hidden: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input, { ...register("code"), id: codeId, hidden: true }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("login.form.confirmation-code-label", "Confirmation code"),
        invalid: !!errors.code,
        error: errors.code?.message,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
          {
            ...register("confirmationCode", {
              required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("login.form.confirmation-code", "Confirmation code is required")
            }),
            id: confirmationCodeId,
            autoFocus: true,
            autoCapitalize: "none",
            placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("login.form.confirmation-code-placeholder", "confirmation code"),
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.pages.PasswordlessLogin.email
          }
        )
      }
    ),
    signup && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("login.form.passwordless-username-label", "Username"),
          invalid: !!errors.code,
          error: errors.code?.message,
          hidden: true,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
            {
              ...register("username"),
              id: usernameId,
              autoFocus: true,
              autoCapitalize: "none",
              "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.pages.PasswordlessLogin.email,
              hidden: true
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("login.form.name-label", "Name"), invalid: !!errors.code, error: errors.code?.message, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
        {
          ...register("name"),
          id: nameId,
          autoFocus: true,
          autoCapitalize: "none",
          "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.pages.PasswordlessLogin.email
        }
      ) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
      {
        type: "submit",
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.pages.Login.submit,
        className: styles.submitButton,
        disabled: isLoggingIn,
        children: isLoggingIn ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("login.form.submit-loading-label", "Logging in...") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("login.form.submit-label", "Log in")
      }
    )
  ] }) });
};
const getStyles = (theme) => {
  return {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "100%",
      paddingBottom: theme.spacing(2)
    }),
    submitButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      justifyContent: "center",
      width: "100%"
    }),
    skipButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      alignSelf: "flex-start"
    })
  };
};


/***/ }),

/***/ "./public/app/core/components/Login/PasswordlessLoginForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordlessLoginForm: () => (/* binding */ PasswordlessLoginForm),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");








const PasswordlessLoginForm = ({ onSubmit, isLoggingIn }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  const emailId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({ mode: "onChange" });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.wrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit(onSubmit), children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("login.form.email-label", "Email"), invalid: !!errors.email, error: errors.email?.message, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
      {
        ...register("email", { required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("login.form.email-required", "Email is required") }),
        id: emailId,
        autoFocus: true,
        autoCapitalize: "none",
        placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("login.form.email-placeholder", "email"),
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.pages.PasswordlessLogin.email
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
      {
        type: "submit",
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.pages.Login.submit,
        className: styles.submitButton,
        disabled: isLoggingIn,
        children: isLoggingIn ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("login.form.verify-email-loading-label", "Sending email...") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("login.form.verify-email-label", "Send a verification email")
      }
    )
  ] }) });
};
const getStyles = (theme) => {
  return {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "100%",
      paddingBottom: theme.spacing(2)
    }),
    submitButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      justifyContent: "center",
      width: "100%"
    }),
    skipButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      alignSelf: "flex-start"
    })
  };
};


/***/ }),

/***/ "./public/app/core/components/Login/UserSignup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserSignup: () => (/* binding */ UserSignup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/config.ts");






const UserSignup = () => {
  const href = (0,app_core_config__WEBPACK_IMPORTED_MODULE_5__.getConfig)().verifyEmailEnabled ? `${(0,app_core_config__WEBPACK_IMPORTED_MODULE_5__.getConfig)().appSubUrl}/verify` : `${(0,app_core_config__WEBPACK_IMPORTED_MODULE_5__.getConfig)().appSubUrl}/signup`;
  const paddingTop = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({ paddingTop: "16px" });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "column", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: paddingTop, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "login.signup.new-to-question", children: "New to Grafana?" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton,
      {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
          width: "100%",
          justifyContent: "center"
        }),
        href,
        variant: "secondary",
        fill: "outline",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "login.signup.button-label", children: "Sign up" })
      }
    )
  ] });
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

/***/ "./public/app/core/components/ValidationLabels/ValidationLabels.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidationLabel: () => (/* binding */ ValidationLabel),
/* harmony export */   ValidationLabels: () => (/* binding */ ValidationLabels),
/* harmony export */   getStyles: () => (/* binding */ getStyles),
/* harmony export */   strongPasswordValidationRegister: () => (/* binding */ strongPasswordValidationRegister),
/* harmony export */   strongPasswordValidations: () => (/* binding */ strongPasswordValidations)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/config.ts");






const strongPasswordValidations = [
  {
    message: "At least 12 characters",
    validation: (value) => value.length >= 12
  },
  {
    message: "One uppercase letter",
    validation: (value) => /[A-Z]+/.test(value)
  },
  {
    message: "One lowercase letter",
    validation: (value) => /[a-z]+/.test(value)
  },
  {
    message: "One number",
    validation: (value) => /[0-9]+/.test(value)
  },
  {
    message: "One symbol",
    validation: (value) => /[\W]/.test(value)
  }
];
const strongPasswordValidationRegister = (value) => {
  return !app_core_config__WEBPACK_IMPORTED_MODULE_7__["default"].auth.basicAuthStrongPasswordPolicy || strongPasswordValidations.every((validation) => validation.validation(value)) || (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
    "profile.change-password.strong-password-validation-register",
    "Password does not comply with the strong password policy"
  );
};
const ValidationLabels = ({ strongPasswordValidations: strongPasswordValidations2, password, pristine }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Box, { marginBottom: 2, children: strongPasswordValidations2.map((validation) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    ValidationLabel,
    {
      strongPasswordValidation: validation,
      password,
      pristine
    },
    validation.message
  )) });
};
const ValidationLabel = ({ strongPasswordValidation, password, pristine }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  const { basicAuthStrongPasswordPolicy } = app_core_config__WEBPACK_IMPORTED_MODULE_7__["default"].auth;
  if (!basicAuthStrongPasswordPolicy) {
    return null;
  }
  const { message, validation } = strongPasswordValidation;
  const result = password.length > 0 && validation(password);
  const iconName = result || pristine ? "check" : "exclamation-triangle";
  const textColor = result ? "secondary" : pristine ? "primary" : "error";
  let iconClassName = void 0;
  if (result) {
    iconClassName = styles.icon.valid;
  } else if (pristine) {
    iconClassName = styles.icon.pending;
  } else {
    iconClassName = styles.icon.error;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Box, { display: "flex", alignItems: "center", marginTop: 1, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.icon.style, iconClassName), name: iconName }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { color: textColor, children: message })
  ] }, message);
};
const getStyles = (theme) => {
  return {
    icon: {
      style: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        marginRight: theme.spacing(1)
      }),
      valid: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        color: theme.colors.success.text
      }),
      pending: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        color: theme.colors.secondary.text
      }),
      error: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        color: theme.colors.error.text
      })
    }
  };
};


/***/ })

}]);
//# sourceMappingURL=LoginPage.da05df15e8e7e5f5993d.js.map