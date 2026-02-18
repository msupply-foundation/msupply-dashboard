"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SignupInvited"],{

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


/***/ }),

/***/ "./public/app/features/invites/SignupInvited.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupInvitedPage: () => (/* binding */ SignupInvitedPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/components/Form/Form.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _admin_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/admin/utils.ts");













const navModel = {
  main: {
    icon: "grafana",
    text: "Invite",
    subTitle: "Register your Grafana account",
    breadcrumbs: [{ title: "Login", url: "login" }]
  },
  node: {
    text: ""
  }
};
const SignupInvitedPage = () => {
  const { code } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__.useParams)();
  const [initFormModel, setInitFormModel] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const [greeting, setGreeting] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const [invitedBy, setInvitedBy] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useStyles2)(getStyles);
  (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(async () => {
    const invite = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.getBackendSrv)().get(`/api/user/invite/${code}`);
    setInitFormModel({
      email: invite.email,
      name: invite.name,
      username: invite.email,
      orgName: invite.orgName
    });
    setGreeting(invite.name || invite.email || invite.username);
    setInvitedBy(invite.invitedBy);
  }, [code]);
  const onSubmit = async (formData) => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.getBackendSrv)().post("/api/user/invite/complete", { ...formData, inviteCode: code });
    window.location.href = (0,app_core_config__WEBPACK_IMPORTED_MODULE_13__.getConfig)().appSubUrl + "/";
  };
  if (!initFormModel) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__.Page, { navModel, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__.Page.Contents, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: "page-sub-heading", children: greeting ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("invites.signup-invited-page.greeting-custom", "Hello {{greeting}}.", { greeting }) : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("invites.signup-invited-page.greeting-default", "Hello there.") }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)("modal-tagline", styles.tagline), children: [
      invitedBy ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans,
        {
          i18nKey: "invites.signup-invited-page.custom-has-invited-you",
          values: { invitedBy, orgName: initFormModel.orgName },
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("em", { children: "{{invitedBy}}" }),
            " has invited you to join Grafana and the organization",
            " ",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "highlight-word", children: "{{orgName}}" })
          ]
        }
      ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans,
        {
          i18nKey: "invites.signup-invited-page.default-has-invited-you",
          values: { orgName: initFormModel.orgName },
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("em", { children: "Someone" }),
            " has invited you to join Grafana and the organization",
            " ",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "highlight-word", children: "{{orgName}}" })
          ]
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "invites.signup-invited-page.complete-following", children: "Please complete the following and choose a password to accept your invitation and continue:" })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_11__.Form, { defaultValues: initFormModel, onSubmit, children: ({ register, errors }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field,
        {
          invalid: !!errors.email,
          error: errors.email && errors.email.message,
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("invites.signup-invited-page.label-email", "Email"),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
            {
              placeholder: "email@example.com",
              ...register("email", {
                required: "Email is required",
                pattern: {
                  value: _admin_utils__WEBPACK_IMPORTED_MODULE_14__.w3cStandardEmailValidator,
                  message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("invites.signup-invited-page.message.email-is-invalid", "Email is invalid")
                }
              })
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field,
        {
          invalid: !!errors.name,
          error: errors.name && errors.name.message,
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("invites.signup-invited-page.label-name", "Name"),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
            {
              placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("invites.signup-invited-page.placeholder-name-optional", "Name (optional)"),
              ...register("name")
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field,
        {
          invalid: !!errors.username,
          error: errors.username && errors.username.message,
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("invites.signup-invited-page.label-username", "Username"),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
            {
              ...register("username", { required: "Username is required" }),
              placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("invites.signup-invited-page.placeholder-username", "Username")
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field,
        {
          invalid: !!errors.password,
          error: errors.password && errors.password.message,
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("invites.signup-invited-page.label-password", "Password"),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
            {
              ...register("password", { required: "Password is required" }),
              type: "password",
              placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("invites.signup-invited-page.placeholder-password", "Password")
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { type: "submit", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "invites.signup-invited-page.sign-up", children: "Sign up" }) })
    ] }) })
  ] }) });
};
const getStyles = (theme) => ({
  tagline: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    paddingBottom: theme.spacing(3)
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignupInvitedPage);


/***/ })

}]);
//# sourceMappingURL=SignupInvited.299098d81664e45c3ca5.js.map