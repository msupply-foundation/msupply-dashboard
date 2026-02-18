"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["UserCreatePage"],{

/***/ "./public/app/features/admin/UserCreatePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");









const createUser = async (user) => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.getBackendSrv)().post("/api/admin/users", user);
const pageNav = {
  icon: "user",
  id: "user-new",
  text: "New user",
  subTitle: "Create a new Grafana user."
};
const UserCreatePage = () => {
  const navigate = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({ mode: "onBlur" });
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    async (data) => {
      const { uid } = await createUser(data);
      navigate(`/admin/users/edit/${uid}`);
    },
    [navigate]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_9__.Page, { navId: "global-users", pageNav, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_9__.Page.Contents, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit(onSubmit), style: { maxWidth: "600px" }, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("admin.user-create-page.label-name", "Name"),
        required: true,
        invalid: !!errors.name,
        error: errors.name ? "Name is required" : void 0,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input, { id: "name-input", ...register("name", { required: true }) })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("admin.user-create-page.label-email", "Email"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input, { id: "email-input", ...register("email") }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("admin.user-create-page.label-username", "Username"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input, { id: "username-input", ...register("login") }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("admin.user-create-page.label-password", "Password"),
        required: true,
        invalid: !!errors.password,
        error: errors.password ? "Password is required and must contain at least 4 characters" : void 0,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
          {
            id: "password-input",
            ...register("password", {
              validate: (value) => value.trim() !== "" && value.length >= 4
            }),
            type: "password"
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { type: "submit", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "admin.users-create.create-button", children: "Create user" }) })
  ] }) }) });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserCreatePage);


/***/ })

}]);
//# sourceMappingURL=UserCreatePage.baf1fa1b126a482c4f26.js.map