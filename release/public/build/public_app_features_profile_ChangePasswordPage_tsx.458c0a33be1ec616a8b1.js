"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_profile_ChangePasswordPage_tsx"],{

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


/***/ }),

/***/ "./public/app/features/profile/ChangePasswordForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePasswordForm: () => (/* binding */ ChangePasswordForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Form/Form.tsx");
/* harmony import */ var app_core_components_ValidationLabels_ValidationLabels__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/ValidationLabels/ValidationLabels.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _core_components_PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/PasswordField/PasswordField.tsx");









const ChangePasswordForm = ({ user, onChangePassword, isSaving }) => {
  const [displayValidationLabels, setDisplayValidationLabels] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [pristine, setPristine] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const { disableLoginForm } = app_core_config__WEBPACK_IMPORTED_MODULE_8__["default"];
  const authSource = user.authLabels?.length && user.authLabels[0];
  if (authSource === "LDAP" || authSource === "Auth Proxy") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "profile.change-password.ldap-auth-proxy-message", children: "You cannot change password when signed in with LDAP or auth proxy." }) });
  }
  if (authSource && disableLoginForm) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "profile.change-password.cannot-change-password-message", children: "Password cannot be changed here." }) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_6__.Form, { onSubmit: onChangePassword, maxWidth: 400, children: ({ register, errors, getValues, watch }) => {
    const newPassword = watch("newPassword");
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("profile.change-password.old-password-label", "Old password"),
          invalid: !!errors.oldPassword,
          error: errors?.oldPassword?.message,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _core_components_PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_9__.PasswordField,
            {
              id: "current-password",
              autoComplete: "current-password",
              ...register("oldPassword", {
                required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("profile.change-password.old-password-required", "Old password is required")
              })
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("profile.change-password.new-password-label", "New password"),
          invalid: !!errors.newPassword,
          error: errors?.newPassword?.message,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _core_components_PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_9__.PasswordField,
            {
              id: "new-password",
              autoComplete: "new-password",
              onFocus: () => setDisplayValidationLabels(true),
              ...register("newPassword", {
                onBlur: () => setPristine(false),
                required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("profile.change-password.new-password-required", "New password is required"),
                validate: {
                  strongPasswordValidationRegister: app_core_components_ValidationLabels_ValidationLabels__WEBPACK_IMPORTED_MODULE_7__.strongPasswordValidationRegister,
                  confirm: (v) => v === getValues().confirmNew || (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("profile.change-password.passwords-must-match", "Passwords must match"),
                  old: (v) => v !== getValues().oldPassword || (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
                    "profile.change-password.new-password-same-as-old",
                    "New password can't be the same as the old one."
                  )
                }
              })
            }
          )
        }
      ),
      displayValidationLabels && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        app_core_components_ValidationLabels_ValidationLabels__WEBPACK_IMPORTED_MODULE_7__.ValidationLabels,
        {
          pristine,
          password: newPassword,
          strongPasswordValidations: app_core_components_ValidationLabels_ValidationLabels__WEBPACK_IMPORTED_MODULE_7__.strongPasswordValidations
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("profile.change-password.confirm-password-label", "Confirm password"),
          invalid: !!errors.confirmNew,
          error: errors?.confirmNew?.message,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _core_components_PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_9__.PasswordField,
            {
              id: "confirm-new-password",
              autoComplete: "new-password",
              ...register("confirmNew", {
                required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
                  "profile.change-password.confirm-password-required",
                  "New password confirmation is required"
                ),
                validate: (v) => v === getValues().newPassword || (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("profile.change-password.passwords-must-match", "Passwords must match")
              })
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { variant: "primary", disabled: isSaving, type: "submit", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "profile.change-password.change-password-button", children: "Change Password" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, { variant: "secondary", href: `${app_core_config__WEBPACK_IMPORTED_MODULE_8__["default"].appSubUrl}/profile`, fill: "outline", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "profile.change-password.cancel-button", children: "Cancel" }) })
      ] })
    ] });
  } });
};


/***/ }),

/***/ "./public/app/features/profile/ChangePasswordPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePasswordPage: () => (/* binding */ ChangePasswordPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useMount.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _ChangePasswordForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/profile/ChangePasswordForm.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/profile/state/actions.ts");







function mapStateToProps(state) {
  const userState = state.user;
  const { isUpdating, user } = userState;
  return {
    isUpdating,
    user
  };
}
const mapDispatchToProps = {
  loadUser: _state_actions__WEBPACK_IMPORTED_MODULE_5__.loadUser,
  changePassword: _state_actions__WEBPACK_IMPORTED_MODULE_5__.changePassword
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
function ChangePasswordPage({ loadUser: loadUser2, isUpdating, user, changePassword: changePassword2 }) {
  (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(() => loadUser2());
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__.Page, { navId: "profile/password", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__.Page.Contents, { isLoading: !Boolean(user), children: user ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ChangePasswordForm__WEBPACK_IMPORTED_MODULE_4__.ChangePasswordForm, { user, onChangePassword: changePassword2, isSaving: isUpdating }) }) : null }) });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(ChangePasswordPage));


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
//# sourceMappingURL=public_app_features_profile_ChangePasswordPage_tsx.458c0a33be1ec616a8b1.js.map