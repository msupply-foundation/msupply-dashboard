"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["EditRepositoryPage"],{

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

/***/ "./public/app/features/provisioning/Config/ConfigForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigForm: () => (/* binding */ ConfigForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/legacyEvents.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/SecretInput/SecretInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Collapse/Collapse.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Combobox/Combobox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Checkbox.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var app_core_components_FormPrompt_FormPrompt__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/core/components/FormPrompt/FormPrompt.tsx");
/* harmony import */ var _Repository_DeleteRepositoryButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/provisioning/Repository/DeleteRepositoryButton.tsx");
/* harmony import */ var _Shared_TokenPermissionsInfo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/provisioning/Shared/TokenPermissionsInfo.tsx");
/* harmony import */ var _Wizard_fields__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/provisioning/Wizard/fields.ts");
/* harmony import */ var _components_InlineSecureValueWarning__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/provisioning/components/InlineSecureValueWarning.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/provisioning/constants.ts");
/* harmony import */ var _hooks_useCreateOrUpdateRepository__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/provisioning/hooks/useCreateOrUpdateRepository.ts");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/provisioning/utils/data.ts");
/* harmony import */ var _utils_getFormErrors__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/provisioning/utils/getFormErrors.ts");
/* harmony import */ var _utils_git__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/provisioning/utils/git.ts");
/* harmony import */ var _utils_repositoryTypes__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./public/app/features/provisioning/utils/repositoryTypes.ts");
/* harmony import */ var _ConfigFormGithubCollapse__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./public/app/features/provisioning/Config/ConfigFormGithubCollapse.tsx");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./public/app/features/provisioning/Config/defaults.ts");
























const getTargetOptions = (allowedTargets) => {
  const allOptions = [
    { value: "instance", label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.config-form.option-entire-instance", "Entire instance") },
    { value: "folder", label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.config-form.option-managed-folder", "Managed folder") }
  ];
  return allOptions.filter((option) => allowedTargets.includes(option.value));
};
function ConfigForm({ data }) {
  const repositoryName = data?.metadata?.name;
  const settings = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_20__.useGetFrontendSettingsQuery)();
  const [submitData, request] = (0,_hooks_useCreateOrUpdateRepository__WEBPACK_IMPORTED_MODULE_27__.useCreateOrUpdateRepository)(repositoryName);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isDirty },
    setValue,
    setError,
    watch,
    getValues
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    defaultValues: (0,_defaults__WEBPACK_IMPORTED_MODULE_33__.getDefaultValues)({
      repository: data?.spec,
      allowedTargets: settings.data?.allowedTargets
    })
  });
  const isEdit = Boolean(repositoryName);
  const [tokenConfigured, setTokenConfigured] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(isEdit);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const navigate = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  const [type, readOnly] = watch(["type", "readOnly"]);
  const targetOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => getTargetOptions(settings.data?.allowedTargets || ["instance", "folder"]),
    [settings.data]
  );
  const isGitBased = (0,_utils_repositoryTypes__WEBPACK_IMPORTED_MODULE_31__.isGitProvider)(type);
  const {
    data: refsData,
    isLoading: refsLoading,
    error: refsError
  } = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_20__.useGetRepositoryRefsQuery)(!repositoryName || !isGitBased ? _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.skipToken : { name: repositoryName });
  const branchOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (!refsData?.items) {
      return [];
    }
    return refsData.items.map((ref) => ({
      label: ref.name,
      value: ref.name
    }));
  }, [refsData?.items]);
  const gitFields = isGitBased ? (0,_Wizard_fields__WEBPACK_IMPORTED_MODULE_24__.getGitProviderFields)(type) : null;
  const localFields = type === "local" ? (0,_Wizard_fields__WEBPACK_IMPORTED_MODULE_24__.getLocalProviderFields)(type) : null;
  const hasTokenInstructions = (0,_utils_git__WEBPACK_IMPORTED_MODULE_30__.getHasTokenInstructions)(type);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (isGitBased && !data?.secure?.token) {
      setTokenConfigured(false);
      setError("token", {
        type: "manual",
        message: `Enter your ${gitFields?.tokenConfig.label ?? "access token"}`
      });
    }
  }, [data, gitFields, setTokenConfigured, setError, isGitBased]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (request.isSuccess) {
      const formData = getValues();
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("grafana_provisioning_repository_updated", {
        repositoryName: repositoryName ?? "unknown",
        repositoryType: formData.type,
        target: formData.sync?.target ?? "unknown"
      });
      reset(formData);
      setTimeout(() => {
        navigate("/admin/provisioning");
      }, 300);
    }
  }, [request.isSuccess, reset, getValues, navigate, repositoryName]);
  const onSubmit = async (form) => {
    setIsLoading(true);
    try {
      const spec = (0,_utils_data__WEBPACK_IMPORTED_MODULE_28__.dataToSpec)(form);
      await submitData(spec, form.token);
    } catch (err) {
      if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.isFetchError)(err)) {
        const [field, errorMessage] = (0,_utils_getFormErrors__WEBPACK_IMPORTED_MODULE_29__.getConfigFormErrors)(err.data?.errors);
        if (field && errorMessage) {
          setError(field, errorMessage);
          return;
        }
      }
      defaultAlert();
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit(onSubmit), style: { maxWidth: 700 }, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_FormPrompt_FormPrompt__WEBPACK_IMPORTED_MODULE_21__.FormPrompt, { onDiscard: reset, confirmRedirect: isDirty }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { direction: "column", gap: 2, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field, { noMargin: true, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.config-form.label-repository-type", "Repository type"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input, { id: "repository-type", value: (0,_utils_repositoryTypes__WEBPACK_IMPORTED_MODULE_31__.getRepositoryTypeConfig)(type)?.label || type, disabled: true }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
        {
          noMargin: true,
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.config-form.label-title", "Title"),
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.config-form.description-title", "A human-readable name for the config"),
          invalid: !!errors.title,
          error: errors?.title?.message,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input,
            {
              ...register("title", {
                required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.config-form.error-required", "This field is required.")
              }),
              placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.config-form.placeholder-my-config", "My config")
            }
          )
        }
      ),
      gitFields && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_InlineSecureValueWarning__WEBPACK_IMPORTED_MODULE_25__.InlineSecureValueWarning, { repo: data }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
          {
            noMargin: true,
            label: gitFields.tokenConfig.label,
            required: gitFields.tokenConfig.required,
            error: errors?.token?.message,
            invalid: !!errors.token,
            description: gitFields.tokenConfig.description,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
              {
                name: "token",
                control,
                rules: {
                  required: isEdit ? false : gitFields.tokenConfig.validation?.required
                },
                render: ({ field: { ref, ...field } }) => {
                  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.SecretInput,
                    {
                      ...field,
                      invalid: !!errors.token,
                      id: "token",
                      placeholder: gitFields.tokenConfig.placeholder,
                      isConfigured: tokenConfigured,
                      onReset: () => {
                        setValue("token", "");
                        setTokenConfigured(false);
                      }
                    }
                  );
                }
              }
            )
          }
        ),
        gitFields.tokenUserConfig && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
          {
            noMargin: true,
            label: gitFields.tokenUserConfig.label,
            required: gitFields.tokenUserConfig.required,
            error: errors?.tokenUser?.message,
            invalid: !!errors?.tokenUser,
            description: gitFields.tokenUserConfig.description,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input,
              {
                ...register("tokenUser", {
                  required: gitFields.tokenUserConfig.validation?.required
                }),
                placeholder: gitFields.tokenUserConfig.placeholder
              }
            )
          }
        ),
        hasTokenInstructions && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_TokenPermissionsInfo__WEBPACK_IMPORTED_MODULE_23__.TokenPermissionsInfo, { type }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
          {
            noMargin: true,
            label: gitFields.urlConfig.label,
            error: errors?.url?.message,
            invalid: !!errors?.url,
            description: gitFields.urlConfig.description,
            required: gitFields.urlConfig.required,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input,
              {
                ...register("url", {
                  required: gitFields.urlConfig.validation?.required,
                  pattern: gitFields.urlConfig.validation?.pattern
                }),
                placeholder: gitFields.urlConfig.placeholder
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
          {
            noMargin: true,
            label: gitFields.branchConfig.label,
            description: gitFields.branchConfig.description,
            error: errors?.branch?.message || (refsError ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.config-form.error-fetch-branches", "Failed to fetch branches") : void 0),
            invalid: Boolean(errors?.branch?.message || refsError),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
              {
                name: "branch",
                control,
                rules: gitFields.branchConfig.validation,
                render: ({ field: { ref, onChange, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Combobox,
                  {
                    invalid: Boolean(errors?.branch?.message || refsError),
                    onChange: (option) => onChange(option?.value || ""),
                    placeholder: gitFields.branchConfig.placeholder,
                    options: branchOptions,
                    loading: refsLoading,
                    isClearable: true,
                    ...field
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field, { noMargin: true, label: gitFields.pathConfig.label, description: gitFields.pathConfig.description, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input, { id: "repository-path", ...register("path") }) })
      ] }),
      localFields && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
        {
          noMargin: true,
          label: localFields.pathConfig.label,
          error: errors?.path?.message,
          invalid: !!errors?.path,
          description: localFields.pathConfig.description,
          required: localFields.pathConfig.required,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input,
            {
              ...register("path", {
                required: localFields.pathConfig.validation?.required
              }),
              placeholder: localFields.pathConfig.placeholder
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field, { noMargin: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_19__.Checkbox,
        {
          ...register("readOnly", {
            onChange: (e) => {
              if (e.target.checked) {
                setValue("prWorkflow", false);
              }
            }
          }),
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.finish-step.label-read-only", "Read only"),
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
            "provisioning.config-form.description-read-only",
            "Resources can't be modified through Grafana."
          )
        }
      ) }),
      gitFields && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field, { noMargin: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_19__.Checkbox,
        {
          disabled: readOnly,
          ...register("prWorkflow"),
          label: gitFields.prWorkflowConfig.label,
          description: gitFields.prWorkflowConfig.description
        }
      ) }),
      type === "github" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ConfigFormGithubCollapse__WEBPACK_IMPORTED_MODULE_32__.ConfigFormGithubCollapse, { register }),
      isGitBased && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.ControlledCollapse,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.config-form.label-automatic-pulling", "Automatic pulling"),
          isOpen: false,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { direction: "column", gap: 2, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
              {
                noMargin: true,
                label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.config-form.label-enabled", "Enabled"),
                description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
                  "provisioning.config-form.description-enabled",
                  "Once automatic pulling is enabled, the target cannot be changed."
                ),
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.Switch, { ...register("sync.enabled"), id: "sync.enabled" })
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
              {
                noMargin: true,
                label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.config-form.label-target", "Target"),
                required: true,
                error: errors?.sync?.target?.message,
                invalid: !!errors?.sync?.target,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
                  {
                    name: "sync.target",
                    control,
                    rules: { required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.config-form.error-required", "This field is required.") },
                    render: ({ field: { ref, onChange, ...field } }) => {
                      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.RadioButtonGroup,
                        {
                          options: targetOptions,
                          onChange,
                          disabled: Boolean(data?.status?.sync.state),
                          ...field
                        }
                      );
                    }
                  }
                )
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
              {
                noMargin: true,
                label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.config-form.label-interval-seconds", "Interval (seconds)"),
                error: errors?.sync?.intervalSeconds?.message,
                invalid: !!errors?.sync?.intervalSeconds,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input,
                  {
                    ...register("sync.intervalSeconds", { valueAsNumber: true }),
                    type: "number",
                    placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.config-form.placeholder-interval-seconds", "60")
                  }
                )
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { gap: 2, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Button, { type: "submit", disabled: isLoading, children: isLoading ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.config-form.button-saving", "Saving...") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.config-form.button-save", "Save") }),
        repositoryName && data && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Repository_DeleteRepositoryButton__WEBPACK_IMPORTED_MODULE_22__.DeleteRepositoryButton, { name: repositoryName, repository: data, redirectTo: _constants__WEBPACK_IMPORTED_MODULE_26__.PROVISIONING_URL })
      ] })
    ] })
  ] });
}
const defaultAlert = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_9__.getAppEvents)().publish({
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.AppEvents.alertError.name,
    payload: [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.wizard-content.error-save-repository-setting", "Failed to save repository setting")]
  });
};


/***/ }),

/***/ "./public/app/features/provisioning/Config/ConfigFormGithubCollapse.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigFormGithubCollapse: () => (/* binding */ ConfigFormGithubCollapse)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Collapse/Collapse.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Checkbox.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var _GettingStarted_features__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/provisioning/GettingStarted/features.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/provisioning/constants.ts");







function ConfigFormGithubCollapse({ register }) {
  const settings = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_7__.useGetFrontendSettingsQuery)();
  const isPublic = (0,_GettingStarted_features__WEBPACK_IMPORTED_MODULE_8__.checkPublicAccess)();
  const hasImageRenderer = (0,_GettingStarted_features__WEBPACK_IMPORTED_MODULE_8__.checkImageRenderer)();
  const imageRenderingAllowed = (0,_GettingStarted_features__WEBPACK_IMPORTED_MODULE_8__.checkImageRenderingAllowed)(settings.data);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ControlledCollapse,
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("provisioning.config-form-github-collapse.label-git-hub-features", "GitHub features"),
      isOpen: true,
      children: [
        imageRenderingAllowed && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Checkbox,
          {
            disabled: !hasImageRenderer || !isPublic,
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("provisioning.finish-step.label-enable-previews", "Enable dashboard previews in pull requests"),
            description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "provisioning.finish-step.description-enable-previews", children: "Adds an image preview of dashboard changes in pull requests. Images of your Grafana dashboards will be shared in your Git repository and visible to anyone with repository access." }),
              " ",
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { italic: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "provisioning.finish-step.description-image-rendering", children: [
                "Requires image rendering.",
                " ",
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TextLink,
                  {
                    variant: "bodySmall",
                    external: true,
                    href: "https://grafana.com/grafana/plugins/grafana-image-renderer",
                    children: "Set up image rendering"
                  }
                )
              ] }) })
            ] }),
            ...register("generateDashboardPreviews")
          }
        ) }),
        !isPublic && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("provisioning.config-form-github-collapse.label-realtime-feedback", "Realtime feedback"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "bodySmall", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "provisioning.config-form-github-collapse.description-realtime-feedback", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TextLink, { variant: "bodySmall", href: _constants__WEBPACK_IMPORTED_MODULE_9__.GETTING_STARTED_URL, children: "Configure webhooks" }),
          " ",
          "to get instant updates in Grafana as soon as changes are committed. Review and approve changes using pull requests before they go live."
        ] }) }) })
      ]
    }
  );
}


/***/ }),

/***/ "./public/app/features/provisioning/Config/defaults.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultValues: () => (/* binding */ getDefaultValues)
/* harmony export */ });
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/provisioning/utils/data.ts");



function getDefaultValues({
  repository,
  allowedTargets = ["instance", "folder"]
} = {}) {
  if (!repository) {
    const defaultTarget = allowedTargets.includes("folder") ? "folder" : "instance";
    return {
      type: "github",
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.get-default-values.title.repository", "Repository"),
      token: "",
      url: "",
      branch: "main",
      generateDashboardPreviews: false,
      readOnly: false,
      prWorkflow: true,
      path: "grafana/",
      sync: {
        enabled: false,
        target: defaultTarget,
        intervalSeconds: 60
      }
    };
  }
  return (0,_utils_data__WEBPACK_IMPORTED_MODULE_1__.specToData)(repository);
}


/***/ }),

/***/ "./public/app/features/provisioning/Repository/DeleteRepositoryButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteRepositoryButton: () => (/* binding */ DeleteRepositoryButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/Menu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Dropdown/Dropdown.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");








function DeleteRepositoryButton({ name, repository, redirectTo }) {
  const [deleteRepository, deleteRequest] = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_11__.useDeleteRepositoryMutation)();
  const [replaceRepository, replaceRequest] = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_11__.useReplaceRepositoryMutation)();
  const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [selectedAction, setSelectedAction] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("remove-resources");
  const navigate = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (deleteRequest.isSuccess) {
      setShowModal(false);
      if (redirectTo) {
        navigate(redirectTo);
      }
    }
  }, [deleteRequest.isSuccess, redirectTo, navigate]);
  const onConfirm = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    if (selectedAction === "keep-resources" && repository) {
      const updatedRepository = {
        ...repository,
        metadata: {
          ...repository.metadata,
          finalizers: ["cleanup", "release-orphan-resources"]
        }
      };
      await replaceRepository({ name, repository: updatedRepository });
    }
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)("grafana_provisioning_repository_deleted", {
      repositoryName: name,
      repositoryType: repository?.spec?.type ?? "unknown",
      deleteAction: selectedAction,
      target: repository?.spec?.sync?.target ?? "unknown",
      workflows: repository?.spec?.workflows ?? []
    });
    deleteRepository({ name });
  }, [deleteRepository, replaceRepository, name, selectedAction, repository]);
  const getConfirmationMessage = () => {
    if (selectedAction === "remove-resources") {
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
        "provisioning.delete-repository-button.confirm-delete-with-resources",
        "Are you sure you want to delete the repository configuration and all its resources?"
      );
    }
    return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
      "provisioning.delete-repository-button.confirm-delete-keep-resources",
      "Are you sure you want to delete the repository configuration but keep its resources?"
    );
  };
  const getModalTitle = () => {
    if (selectedAction === "remove-resources") {
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
        "provisioning.delete-repository-button.title-delete-repository-and-resources",
        "Delete repository configuration and resources"
      );
    }
    return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
      "provisioning.delete-repository-button.title-delete-repository-only",
      "Delete repository configuration only"
    );
  };
  const isLoading = deleteRequest.isLoading || replaceRequest.isLoading;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Dropdown,
      {
        overlay: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Menu, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Menu.Item,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
                "provisioning.delete-repository-button.delete-and-remove-resources",
                "Delete and remove resources (default)"
              ),
              onClick: () => {
                setSelectedAction("remove-resources");
                setShowModal(true);
              }
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Menu.Item,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.delete-repository-button.delete-and-keep-resources", "Delete and keep resources"),
              onClick: () => {
                setSelectedAction("keep-resources");
                setShowModal(true);
              }
            }
          )
        ] }),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button, { variant: "destructive", disabled: isLoading, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { alignItems: "center", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.delete-repository-button.delete", children: "Delete" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "angle-down" })
        ] }) })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ConfirmModal,
      {
        isOpen: showModal,
        title: getModalTitle(),
        body: getConfirmationMessage(),
        confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.delete-repository-button.button-delete", "Delete"),
        onConfirm,
        onDismiss: () => setShowModal(false)
      }
    )
  ] });
}


/***/ }),

/***/ "./public/app/features/provisioning/Repository/EditRepositoryPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditRepositoryPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _Config_ConfigForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/provisioning/Config/ConfigForm.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/provisioning/constants.ts");









function EditRepositoryPage() {
  const { name = "" } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__.useParams)();
  const query = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_6__.useGetRepositoryQuery)({ name });
  const notFound = query.isError && query.error?.status === 404;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__.Page,
    {
      navId: "provisioning",
      pageNav: {
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.edit-repository-page.text.configure-repository", "Configure repository"),
        subTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "provisioning.edit-repository-page.subTitle.configure-repository-storing-resources",
          "Configure a repository for storing your resources."
        )
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__.Page.Contents, { isLoading: query.isLoading, children: notFound ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.EmptyState, { message: `Repository config not found`, variant: "not-found", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { element: "p", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.edit-repository-page.repository-config-exists-configuration", children: "Make sure the repository config exists in the configuration file." }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TextLink, { href: _constants__WEBPACK_IMPORTED_MODULE_9__.PROVISIONING_URL, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.edit-repository-page.back-to-repositories", children: "Back to repositories" }) })
      ] }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Config_ConfigForm__WEBPACK_IMPORTED_MODULE_8__.ConfigForm, { data: query.data }) })
    }
  );
}


/***/ }),

/***/ "./public/app/features/provisioning/Shared/TokenPermissionsInfo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenPermissionsInfo: () => (/* binding */ TokenPermissionsInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





function TokenPermissionsInfo({ type }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const { tokenText, createTokenLink, createTokenButtonText } = connectStepInstruction()[type];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { gap: 0.5, wrap: "wrap", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.token-permissions-info.go-to", children: "Go to" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TextLink, { external: true, href: createTokenLink, children: tokenText }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.token-permissions-info.and-click", children: "and click" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", { children: [
        '"',
        createTokenButtonText,
        '".'
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.token-permissions-info.make-sure", children: "Make sure to include these permissions" }),
      ":"
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { className: styles.permissionsList, children: getPermissionsForProvider(type).map((permission) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AccessLevelField, { label: permission.name, access: permission.access }, permission.name)) })
  ] });
}
function getStyles(theme) {
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginBottom: theme.spacing(1),
      position: "relative",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      flex: "1 1 0",
      padding: theme.spacing(theme.components.panel.padding)
    }),
    permissionsList: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
      paddingLeft: theme.spacing(3),
      li: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        marginBottom: theme.spacing(1)
      })
    }),
    accessLevel: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      fontFamily: theme.typography.fontFamilyMonospace,
      background: theme.colors.background.secondary,
      borderRadius: theme.shape.radius.default,
      padding: theme.spacing(0.25, 0.5)
    })
  };
}
function getPermissionsForProvider(type) {
  switch (type) {
    case "github":
      return [
        { name: "Contents", access: "Read and write" },
        { name: "Metadata", access: "Read only" },
        { name: "Pull requests", access: "Read and write" },
        { name: "Webhooks", access: "Read and write" }
      ];
    case "gitlab":
      return [
        {
          name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.gitlab.permissions.repository-label", "Repository"),
          access: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.gitlab.permissions.repository-read-write", "Read and write")
        },
        {
          name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.gitlab.permissions.user-label", "User"),
          access: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.gitlab.permissions.user-read", "Read only")
        },
        {
          name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.gitlab.permissions.api", "API"),
          access: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.gitlab.permissions.api-read-write", "Read and write")
        }
      ];
    case "bitbucket":
      return [
        {
          name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.bitbucket.permissions.repository-label", "Repositories"),
          access: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.bitbucket.permissions.repository-read-write-admin", "Read, and write")
        },
        {
          name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.bitbucket.permissions.pull-requests-label", "Pull requests"),
          access: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.bitbucket.permissions.pull-requests-read-write", "Read and write")
        },
        {
          name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.bitbucket.permissions.webhooks-label", "Webhooks"),
          access: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.bitbucket.permissions.webhooks-read-write", "Read and write")
        }
      ];
    default:
      return [];
  }
}
function AccessLevelField({ label, access }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { children: [
    label,
    ": ",
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.accessLevel, children: access })
  ] });
}
function connectStepInstruction() {
  return {
    bitbucket: {
      // Bitbucket App password will be replaced by API tokens on Sep 9 2025
      createTokenLink: "https://bitbucket.org/account/settings/app-passwords/",
      tokenText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.token-permissions-info.bitbucket.token-text", "Bitbucket Personal Access Token"),
      createTokenButtonText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "provisioning.token-permissions-info.bitbucket.create-token-button",
        "Create App passwords"
      )
    },
    gitlab: {
      createTokenLink: "https://gitlab.com/-/user_settings/personal_access_tokens",
      tokenText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.token-permissions-info.gitlab.token-text", "GitLab Personal Access Token"),
      createTokenButtonText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.token-permissions-info.gitlab.create-token-button", "Add new token")
    },
    // GitHub UI is English only, so these strings are not translated
    github: {
      createTokenLink: "https://github.com/settings/personal-access-tokens/new",
      tokenText: "GitHub Personal Access Token",
      createTokenButtonText: "Fine-grained token"
    }
  };
}


/***/ }),

/***/ "./public/app/features/provisioning/Wizard/fields.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGitProviderFields: () => (/* binding */ getGitProviderFields),
/* harmony export */   getLocalProviderFields: () => (/* binding */ getLocalProviderFields)
/* harmony export */ });
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");


const getProviderConfigs = () => ({
  github: {
    token: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.github.token-label", "Personal Access Token"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
        "provisioning.github.token-description",
        "GitHub Personal Access Token with repository permissions"
      ),
      // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
      required: true,
      validation: {
        required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.github.token-required", "GitHub token is required")
      }
    },
    url: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.github.url-label", "Repository URL"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.github.url-description", "The GitHub repository URL"),
      // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
      placeholder: "https://github.com/owner/repository",
      required: true,
      validation: {
        required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.github.url-required", "Repository URL is required"),
        pattern: {
          value: /^https:\/\/github\.com\/[^\/]+\/[^\/]+\/?$/,
          message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.github.url-pattern", "Must be a valid GitHub repository URL")
        }
      }
    },
    branch: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.github.branch-label", "Branch"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.github.branch-description", "The branch to use for provisioning"),
      // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
      placeholder: "main",
      required: true,
      validation: {
        required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.github.branch-required", "Branch is required")
      }
    },
    path: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.github.path-label", "Path"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.github.path-description", "Optional subdirectory path within the repository"),
      // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
      placeholder: "grafana/",
      required: false
    },
    prWorkflow: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.github.pr-workflow-label", "Enable pull request option when saving"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
        "provisioning.github.pr-workflow-description",
        "Allows users to choose whether to open a pull request when saving changes. If the repository does not allow direct changes to the main branch, a pull request may still be required."
      )
    }
  },
  gitlab: {
    token: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.gitlab.token-label", "Project Access Token"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
        "provisioning.gitlab.token-description",
        "GitLab Project Access Token with repository permissions"
      ),
      // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
      placeholder: "glpat-xxxxxxxxxxxxxxxxxxxx",
      required: true,
      validation: {
        required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.gitlab.token-required", "GitLab token is required")
      }
    },
    url: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.gitlab.url-label", "Repository URL"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.gitlab.url-description", "The GitLab repository URL"),
      // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
      placeholder: "https://gitlab.com/owner/repository",
      required: true,
      validation: {
        required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.gitlab.url-required", "Repository URL is required"),
        pattern: {
          value: /^https:\/\/gitlab\.com\/[^\/]+\/[^\/]+\/?$/,
          message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.gitlab.url-pattern", "Must be a valid GitLab repository URL")
        }
      }
    },
    branch: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.gitlab.branch-label", "Branch"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.gitlab.branch-description", "The branch to use for provisioning"),
      // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
      placeholder: "main",
      required: true,
      validation: {
        required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.gitlab.branch-required", "Branch is required")
      }
    },
    path: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.gitlab.path-label", "Path"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.gitlab.path-description", "Optional subdirectory path within the repository"),
      // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
      placeholder: "grafana/",
      required: false
    },
    prWorkflow: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.gitlab.pr-workflow-label", "Enable merge request option when saving"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
        "provisioning.gitlab.pr-workflow-description",
        "Allows users to choose whether to open a merge request when saving changes. If the repository does not allow direct changes to the main branch, a merge request may still be required."
      )
    }
  },
  bitbucket: {
    token: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.bitbucket.token-label", "App Password"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.bitbucket.token-description", "Bitbucket App Password with repository permissions"),
      // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
      placeholder: "ATBBxxxxxxxxxxxxxxxx",
      required: true,
      validation: {
        required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.bitbucket.token-required", "Bitbucket token is required")
      }
    },
    tokenUser: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.bitbucket.token-user-label", "Username"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
        "provisioning.bitbucket.token-user-description",
        "The username that will be used to access the repository with the app password"
      ),
      // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
      placeholder: "username",
      required: true,
      validation: {
        required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.bitbucket.token-user-required", "Username is required")
      }
    },
    url: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.bitbucket.url-label", "Repository URL"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.bitbucket.url-description", "The Bitbucket repository URL"),
      // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
      placeholder: "https://bitbucket.org/owner/repository",
      required: true,
      validation: {
        required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.bitbucket.url-required", "Repository URL is required"),
        pattern: {
          value: /^https:\/\/bitbucket\.org\/[^\/]+\/[^\/]+\/?$/,
          message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.bitbucket.url-pattern", "Must be a valid Bitbucket repository URL")
        }
      }
    },
    branch: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.bitbucket.branch-label", "Branch"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.bitbucket.branch-description", "The branch to use for provisioning"),
      // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
      placeholder: "main",
      required: true,
      validation: {
        required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.bitbucket.branch-required", "Branch is required")
      }
    },
    path: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.bitbucket.path-label", "Path"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.bitbucket.path-description", "Optional subdirectory path within the repository"),
      // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
      placeholder: "grafana/",
      required: false
    },
    prWorkflow: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.bitbucket.pr-workflow-label", "Enable pull request option when saving"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
        "provisioning.bitbucket.pr-workflow-description",
        "Allows users to choose whether to open a pull request when saving changes. If the repository does not allow direct changes to the main branch, a pull request may still be required."
      )
    }
  },
  git: {
    token: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.git.token-label", "Access Token"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.git.token-description", "Git repository access token or password"),
      // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
      placeholder: "token or password",
      required: true,
      validation: {
        required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.git.token-required", "Git token is required")
      }
    },
    tokenUser: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.git.token-user-label", "Username"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
        "provisioning.git.token-user-description",
        "The username that will be used to access the repository with the access token"
      ),
      // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
      placeholder: "username",
      required: true,
      validation: {
        required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.git.token-user-required", "Username is required")
      }
    },
    url: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.git.url-label", "Repository URL"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.git.url-description", "The Git repository URL"),
      // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
      placeholder: "https://git.example.com/owner/repository.git",
      required: true,
      validation: {
        required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.git.url-required", "Repository URL is required"),
        pattern: {
          value: /^https?:\/\/.+/,
          message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.git.url-pattern", "Must be a valid Git repository URL")
        }
      }
    },
    branch: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.git.branch-label", "Branch"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.git.branch-description", "The branch to use for provisioning"),
      // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
      placeholder: "main",
      required: true,
      validation: {
        required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.git.branch-required", "Branch is required")
      }
    },
    path: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.git.path-label", "Path"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.git.path-description", "Optional subdirectory path within the repository"),
      // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
      placeholder: "grafana/",
      required: false
    },
    prWorkflow: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.git.pr-workflow-label", "Enable pull request option when saving"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
        "provisioning.git.pr-workflow-description",
        "Allows users to choose whether to open a pull request when saving changes. If the repository does not allow direct changes to the main branch, a pull request may still be required."
      )
    }
  },
  local: {
    path: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.local.path-label", "Repository Path"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.local.path-description", "Local file system path to the repository"),
      // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
      placeholder: "/path/to/repository",
      required: true,
      validation: {
        required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.local.path-required", "Repository path is required")
      }
    }
  }
});
const getGitProviderFields = (type) => {
  const configs = getProviderConfigs()[type];
  if (!configs) {
    throw new Error(`No configuration found for repository type: ${type}`);
  }
  const tokenConfig = configs.token;
  const tokenUserConfig = configs.tokenUser;
  const urlConfig = configs.url;
  const branchConfig = configs.branch;
  const pathConfig = configs.path;
  const prWorkflowConfig = configs.prWorkflow;
  if (!tokenConfig || !urlConfig || !branchConfig || !pathConfig || !prWorkflowConfig) {
    throw new Error(`Missing required field configurations for ${type}`);
  }
  return {
    tokenConfig,
    tokenUserConfig,
    urlConfig,
    branchConfig,
    pathConfig,
    prWorkflowConfig
  };
};
const getLocalProviderFields = (type) => {
  const configs = getProviderConfigs()[type];
  if (!configs) {
    throw new Error(`No configuration found for repository type: ${type}`);
  }
  const pathConfig = configs.path;
  if (!pathConfig) {
    throw new Error(`Missing required field configuration for ${type}: path`);
  }
  return {
    pathConfig
  };
};


/***/ }),

/***/ "./public/app/features/provisioning/components/InlineSecureValueWarning.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSecureValueWarning: () => (/* binding */ InlineSecureValueWarning)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");




function InlineSecureValueWarning({ repo, items }) {
  const isRepoValid = (r) => r?.spec?.type === "local" || !!r?.secure?.token?.name;
  if (isRepoValid(repo)) {
    return null;
  }
  if (items?.every(isRepoValid)) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "provisioning.inline-secure-values-warning",
        "You need to save your access tokens again due to a system update"
      ),
      severity: "error"
    }
  );
}


/***/ }),

/***/ "./public/app/features/provisioning/hooks/useCreateOrUpdateRepository.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCreateOrUpdateRepository: () => (/* binding */ useCreateOrUpdateRepository)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");



function useCreateOrUpdateRepository(name) {
  const [create, createRequest] = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_1__.useCreateRepositoryMutation)();
  const [update, updateRequest] = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_1__.useReplaceRepositoryMutation)();
  const [testConfig, testRequest] = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_1__.useCreateRepositoryTestMutation)();
  const updateOrCreate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    async (data, token) => {
      const secure = token?.length ? { token: { create: token } } : void 0;
      await testConfig({
        // HACK: we need to provide a name to the test configuration
        name: name || "new",
        body: {
          spec: data,
          secure
        }
      }).unwrap();
      if (name) {
        return update({
          name,
          repository: {
            metadata: {
              name,
              // TODO? -- replace with patch spec, so the rest of the metadata is not replaced?
              // Can that support optimistic locking? (eg, make sure the RV is the same?)
              finalizers: ["cleanup", "remove-orphan-resources"]
            },
            spec: data,
            secure
          }
        });
      }
      return create({ repository: { metadata: generateRepositoryMetadata(data), spec: data, secure } });
    },
    [create, name, update, testConfig]
  );
  return [updateOrCreate, name ? updateRequest : createRequest, testRequest];
}
const generateRepositoryMetadata = (data) => {
  const normalisedName = data.title.toLowerCase().replaceAll(/[^a-z0-9\-_]+/g, "");
  if (crypto.randomUUID && // we might not be in a secure context
  normalisedName && // we need a non-empty string before we check the first character
  normalisedName.charAt(0) >= "a" && // required to start with a letter to be a valid k8s name
  normalisedName.charAt(0) <= "z" && normalisedName.replaceAll(/[^a-z]/g, "").length >= 3) {
    const randomBit = crypto.randomUUID().substring(0, 7);
    const shortenedName = normalisedName.substring(0, 63 - 1 - randomBit.length);
    return { name: `${shortenedName}-${randomBit}` };
  } else {
    return { generateName: "r" };
  }
};


/***/ }),

/***/ "./public/app/features/provisioning/utils/data.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataToSpec: () => (/* binding */ dataToSpec),
/* harmony export */   generateRepositoryTitle: () => (/* binding */ generateRepositoryTitle),
/* harmony export */   getWorkflows: () => (/* binding */ getWorkflows),
/* harmony export */   specToData: () => (/* binding */ specToData)
/* harmony export */ });

const getWorkflows = (data) => {
  if (data.readOnly) {
    return [];
  }
  const workflows = ["write"];
  if (!data.prWorkflow) {
    return workflows;
  }
  return [...workflows, "branch"];
};
const dataToSpec = (data) => {
  const spec = {
    type: data.type,
    sync: data.sync,
    title: data.title || "",
    workflows: getWorkflows(data)
  };
  const baseConfig = {
    url: data.url || "",
    branch: data.branch,
    path: data.path
  };
  switch (data.type) {
    case "github":
      spec.github = {
        ...baseConfig,
        generateDashboardPreviews: data.generateDashboardPreviews
      };
      break;
    case "gitlab":
      spec.gitlab = baseConfig;
      break;
    case "bitbucket":
      spec.bitbucket = baseConfig;
      break;
    case "git":
      spec.git = baseConfig;
      break;
    case "local":
      spec.local = {
        path: data.path
      };
      spec.workflows = spec.workflows.filter((v) => v !== "branch");
      break;
  }
  return structuredClone(spec);
};
const specToData = (spec) => {
  const remoteConfig = spec.github || spec.gitlab || spec.bitbucket || spec.git;
  return structuredClone({
    ...spec,
    ...remoteConfig,
    ...spec.local,
    branch: remoteConfig?.branch || "",
    url: remoteConfig?.url || "",
    generateDashboardPreviews: spec.github?.generateDashboardPreviews || false,
    readOnly: !spec.workflows.length,
    prWorkflow: spec.workflows.includes("branch")
  });
};
const generateRepositoryTitle = (repository) => {
  switch (repository.type) {
    case "github":
      const name = repository.url ?? "github";
      return name.replace("https://github.com/", "");
    case "gitlab":
      const gitlabName = repository.url ?? "gitlab";
      return gitlabName.replace("https://gitlab.com/", "");
    case "bitbucket":
      const bitbucketName = repository.url ?? "bitbucket";
      return bitbucketName.replace("https://bitbucket.org/", "");
    case "git":
      const gitName = repository.url ?? "git";
      return gitName.replace(/^https?:\/\/[^\/]+\//, "");
    case "local":
      return repository.path ?? "local";
    default:
      return "";
  }
};


/***/ }),

/***/ "./public/app/features/provisioning/utils/getFormErrors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getConfigFormErrors: () => (/* binding */ getConfigFormErrors),
/* harmony export */   getFormErrors: () => (/* binding */ getFormErrors)
/* harmony export */ });

const normalizeField = (field) => field.replace(/^spec\./, "");
function mapErrorsToField(errors, fieldMap, opts) {
  if (!errors || errors.length === 0) {
    return [null, null];
  }
  for (const error of errors) {
    if (!error.field) {
      continue;
    }
    const normalized = normalizeField(error.field);
    const segments = normalized.split(".");
    const lastPart = segments[segments.length - 1];
    if (normalized in fieldMap) {
      return [fieldMap[normalized], { message: error.detail || `Invalid ${normalized}` }];
    }
    if (opts?.allowPartial && lastPart in fieldMap) {
      return [fieldMap[lastPart], { message: error.detail || `Invalid ${lastPart}` }];
    }
  }
  return [null, null];
}
const getFormErrors = (errors) => {
  const fieldMap = {
    "local.path": "repository.path",
    "github.branch": "repository.branch",
    "github.url": "repository.url",
    "github.path": "repository.path",
    "secure.token": "repository.token",
    "gitlab.branch": "repository.branch",
    "gitlab.url": "repository.url",
    "bitbucket.branch": "repository.branch",
    "bitbucket.url": "repository.url",
    "git.branch": "repository.branch",
    "git.url": "repository.url",
    "sync.intervalSeconds": "repository.sync.intervalSeconds"
  };
  return mapErrorsToField(errors, fieldMap, { allowPartial: true });
};
const getConfigFormErrors = (errors) => {
  const fieldMap = {
    path: "path",
    branch: "branch",
    url: "url",
    token: "token",
    tokenUser: "tokenUser",
    "sync.intervalSeconds": "sync.intervalSeconds"
  };
  return mapErrorsToField(errors, fieldMap, { allowPartial: true });
};


/***/ })

}]);
//# sourceMappingURL=EditRepositoryPage.c9f0636d41fe826d4043.js.map