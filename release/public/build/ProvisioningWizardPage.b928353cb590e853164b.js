"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["ProvisioningWizardPage"],{

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

/***/ "./public/app/features/provisioning/Shared/RepoIcon.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RepoIcon: () => (/* binding */ RepoIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/utils.ts");
/* harmony import */ var _utils_repositoryTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/provisioning/utils/repositoryTypes.ts");






function RepoIcon({ type }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const config = type ? (0,_utils_repositoryTypes__WEBPACK_IMPORTED_MODULE_5__.getRepositoryTypeConfig)(type) : void 0;
  if (!config) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { name: "database", size: "xxl" });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: config.logo ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: config.logo, alt: config.label, className: styles.logo }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { name: config.icon, size: "xxl" }) });
}
function getStyles() {
  return {
    logo: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_4__.getSvgSize)("xxl"),
      height: (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_4__.getSvgSize)("xxl")
    })
  };
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

/***/ "./public/app/features/provisioning/Wizard/BootstrapStep.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BootstrapStep: () => (/* binding */ BootstrapStep)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_provisioning_utils_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/provisioning/utils/data.ts");
/* harmony import */ var _BootstrapStepCardIcons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/provisioning/Wizard/BootstrapStepCardIcons.tsx");
/* harmony import */ var _BootstrapStepResourceCounting__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/provisioning/Wizard/BootstrapStepResourceCounting.tsx");
/* harmony import */ var _StepStatusContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/provisioning/Wizard/StepStatusContext.tsx");
/* harmony import */ var _hooks_useModeOptions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/provisioning/Wizard/hooks/useModeOptions.ts");
/* harmony import */ var _hooks_useResourceStats__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/provisioning/Wizard/hooks/useResourceStats.ts");













const BootstrapStep = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function BootstrapStep2({ settingsData, repoName }) {
  const { setStepStatusInfo } = (0,_StepStatusContext__WEBPACK_IMPORTED_MODULE_16__.useStepStatus)();
  const {
    register,
    control,
    setValue,
    watch,
    getValues,
    formState: { errors }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const selectedTarget = watch("repository.sync.target");
  const repositoryType = watch("repository.type");
  const options = (0,_hooks_useModeOptions__WEBPACK_IMPORTED_MODULE_17__.useModeOptions)(repoName, settingsData);
  const { target } = options[0];
  const { resourceCountString, fileCountString, isLoading } = (0,_hooks_useResourceStats__WEBPACK_IMPORTED_MODULE_18__.useResourceStats)(repoName, settingsData?.legacyStorage);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useStyles2)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const repository = getValues("repository");
    const title = (0,app_features_provisioning_utils_data__WEBPACK_IMPORTED_MODULE_13__.generateRepositoryTitle)(repository);
    setValue("repository.title", title);
  }, [getValues, setValue]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setStepStatusInfo({ status: isLoading ? "running" : "idle" });
  }, [isLoading, setStepStatusInfo]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setValue("repository.sync.target", target);
  }, [target, setValue]);
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Box, { padding: 4, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LoadingPlaceholder,
      {
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("provisioning.bootstrap-step.text-loading-resource-information", "Loading resource information...")
      }
    ) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
      {
        name: "repository.sync.target",
        control,
        render: ({ field: { ref, onChange, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: options.map((action) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Card,
          {
            isSelected: action.target === selectedTarget,
            onClick: () => {
              onChange(action.target);
            },
            noMargin: true,
            ...field,
            children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Card.Heading, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { variant: "h5", children: action.label }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Card.Description, { children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.divider }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Box, { paddingBottom: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_BootstrapStepCardIcons__WEBPACK_IMPORTED_MODULE_14__.BootstrapStepCardIcons, { target: action.target, repoType: repositoryType }) }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 3, children: [
                  action.description,
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { color: "primary", children: action.subtitle })
                ] }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.divider }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _BootstrapStepResourceCounting__WEBPACK_IMPORTED_MODULE_15__.BootstrapStepResourceCounting,
                  {
                    target: action.target,
                    fileCountString,
                    resourceCountString
                  }
                )
              ] })
            ]
          },
          action.target
        )) })
      }
    ),
    selectedTarget === "folder" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("provisioning.bootstrap-step.label-display-name", "Display name"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "provisioning.bootstrap-step.description-clear-repository-connection",
          "Add a clear name for this repository connection"
        ),
        error: errors.repository?.title?.message,
        invalid: !!errors.repository?.title,
        required: true,
        noMargin: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Input,
          {
            id: "repository-title",
            ...register("repository.title", {
              required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("provisioning.bootstrap-step.error-field-required", "This field is required.")
            }),
            placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
              "provisioning.bootstrap-step.placeholder-my-repository-connection",
              "My repository connection"
            ),
            autoFocus: options.length === 1 && options[0].target === "folder"
          }
        )
      }
    )
  ] }) });
});
const getStyles = (theme) => ({
  divider: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    height: 1,
    width: "100%",
    backgroundColor: theme.colors.border.medium,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  })
});


/***/ }),

/***/ "./public/app/features/provisioning/Wizard/BootstrapStepCardIcons.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BootstrapStepCardIcons: () => (/* binding */ BootstrapStepCardIcons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _Shared_RepoIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/provisioning/Shared/RepoIcon.tsx");




function BootstrapStepCardIcons({ target, repoType }) {
  if (target === "instance") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { direction: "row", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { name: "grafana", size: "xxl" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { name: "arrows-h", size: "xxl" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_RepoIcon__WEBPACK_IMPORTED_MODULE_3__.RepoIcon, { type: "github" })
    ] });
  }
  if (target === "folder") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { name: "folder", size: "xxl" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { name: "arrow-left", size: "xxl" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_RepoIcon__WEBPACK_IMPORTED_MODULE_3__.RepoIcon, { type: repoType })
    ] });
  }
  return null;
}


/***/ }),

/***/ "./public/app/features/provisioning/Wizard/BootstrapStepResourceCounting.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BootstrapStepResourceCounting: () => (/* binding */ BootstrapStepResourceCounting)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");




function BootstrapStepResourceCounting({
  target,
  fileCountString,
  resourceCountString
}) {
  if (target === "instance") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { direction: "row", gap: 3, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { gap: 1, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "provisioning.bootstrap-step.external-storage-label", children: "External storage" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Text, { color: "primary", children: fileCountString })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { gap: 1, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "provisioning.bootstrap-step.unmanaged-resources-label", children: "Unmanaged resources" }),
        " ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Text, { color: "primary", children: resourceCountString })
      ] })
    ] });
  }
  if (target === "folder") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { gap: 1, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "provisioning.bootstrap-step.external-storage-label", children: "External storage" }),
      " ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Text, { color: "primary", children: fileCountString })
    ] });
  }
  return null;
}


/***/ }),

/***/ "./public/app/features/provisioning/Wizard/ConnectPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConnectPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _utils_repositoryTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/provisioning/utils/repositoryTypes.ts");
/* harmony import */ var _ProvisioningWizard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/provisioning/Wizard/ProvisioningWizard.tsx");
/* harmony import */ var _StepStatusContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/provisioning/Wizard/StepStatusContext.tsx");









function ConnectPage() {
  const { type } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__.useParams)();
  const { data: settingsData } = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_3__.useGetFrontendSettingsQuery)();
  if (!type) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__.Page,
    {
      navId: "provisioning",
      pageNav: {
        text: (0,_utils_repositoryTypes__WEBPACK_IMPORTED_MODULE_5__.isGitProvider)(type) ? "Configure Git Sync" : "Configure local file path",
        subTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "provisioning.connect-page.subTitle.connect-external-storage-manage-resources",
          "Connect to an external storage to manage your resources"
        )
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__.Page.Contents, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StepStatusContext__WEBPACK_IMPORTED_MODULE_7__.StepStatusProvider, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ProvisioningWizard__WEBPACK_IMPORTED_MODULE_6__.ProvisioningWizard, { type, settingsData }) }) })
    }
  );
}


/***/ }),

/***/ "./public/app/features/provisioning/Wizard/ConnectStep.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectStep: () => (/* binding */ ConnectStep)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/SecretInput/SecretInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Combobox/Combobox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _Shared_TokenPermissionsInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/provisioning/Shared/TokenPermissionsInfo.tsx");
/* harmony import */ var _hooks_useBranchOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/provisioning/hooks/useBranchOptions.ts");
/* harmony import */ var _utils_git__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/provisioning/utils/git.ts");
/* harmony import */ var _utils_repositoryTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/provisioning/utils/repositoryTypes.ts");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/provisioning/Wizard/fields.ts");










const ConnectStep = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function ConnectStep2() {
  const {
    register,
    control,
    setValue,
    formState: { errors },
    getValues,
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const [tokenConfigured, setTokenConfigured] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const type = getValues("repository.type");
  const [repositoryUrl = "", repositoryToken = "", repositoryTokenUser = ""] = watch([
    "repository.url",
    "repository.token",
    "repository.tokenUser"
  ]);
  const isGitBased = (0,_utils_repositoryTypes__WEBPACK_IMPORTED_MODULE_11__.isGitProvider)(type);
  const {
    options: branchOptions,
    loading: branchesLoading,
    error: branchesError
  } = (0,_hooks_useBranchOptions__WEBPACK_IMPORTED_MODULE_9__.useBranchOptions)({
    repositoryType: type,
    repositoryUrl,
    repositoryToken,
    repositoryTokenUser
  });
  const gitFields = isGitBased ? (0,_fields__WEBPACK_IMPORTED_MODULE_12__.getGitProviderFields)(type) : null;
  const localFields = !isGitBased ? (0,_fields__WEBPACK_IMPORTED_MODULE_12__.getLocalProviderFields)(type) : null;
  const hasTokenInstructions = (0,_utils_git__WEBPACK_IMPORTED_MODULE_10__.getHasTokenInstructions)(type);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "column", gap: 2, children: [
    hasTokenInstructions && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_TokenPermissionsInfo__WEBPACK_IMPORTED_MODULE_8__.TokenPermissionsInfo, { type }),
    gitFields && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field,
        {
          noMargin: true,
          label: gitFields.tokenConfig.label,
          required: gitFields.tokenConfig.required,
          description: gitFields.tokenConfig.description,
          error: errors?.repository?.token?.message,
          invalid: !!errors?.repository?.token?.message,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
            {
              name: "repository.token",
              control,
              rules: gitFields.tokenConfig.validation,
              render: ({ field: { ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SecretInput,
                {
                  ...field,
                  id: "token",
                  placeholder: gitFields.tokenConfig.placeholder,
                  isConfigured: tokenConfigured,
                  invalid: !!errors?.repository?.token?.message,
                  onReset: () => {
                    setValue("repository.token", "");
                    setTokenConfigured(false);
                  }
                }
              )
            }
          )
        }
      ),
      gitFields.tokenUserConfig && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field,
        {
          noMargin: true,
          label: gitFields.tokenUserConfig.label,
          required: gitFields.tokenUserConfig.required,
          description: gitFields.tokenUserConfig.description,
          error: errors?.repository?.tokenUser?.message,
          invalid: !!errors?.repository?.tokenUser?.message,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Input,
            {
              ...register("repository.tokenUser", gitFields.tokenUserConfig.validation),
              id: "tokenUser",
              placeholder: gitFields.tokenUserConfig.placeholder
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field,
        {
          noMargin: true,
          label: gitFields.urlConfig.label,
          description: gitFields.urlConfig.description,
          error: errors?.repository?.url?.message,
          invalid: Boolean(errors?.repository?.url?.message),
          required: gitFields.urlConfig.required,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Input,
            {
              ...register("repository.url", gitFields.urlConfig.validation),
              id: "repository-url",
              placeholder: gitFields.urlConfig.placeholder
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field,
        {
          noMargin: true,
          label: gitFields.branchConfig.label,
          description: gitFields.branchConfig.description,
          error: errors?.repository?.branch?.message,
          required: gitFields.branchConfig.required,
          invalid: Boolean(errors?.repository?.branch?.message || branchesError),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
            {
              name: "repository.branch",
              control,
              rules: gitFields.branchConfig.validation,
              render: ({ field: { ref, onChange, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Combobox,
                {
                  invalid: Boolean(errors?.repository?.branch?.message || branchesError),
                  onChange: (option) => onChange(option?.value || ""),
                  placeholder: gitFields.branchConfig.placeholder,
                  options: branchOptions,
                  loading: branchesLoading,
                  createCustomValue: true,
                  isClearable: true,
                  ...field
                }
              )
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field,
        {
          noMargin: true,
          label: gitFields.pathConfig.label,
          description: gitFields.pathConfig.description,
          error: errors?.repository?.path?.message,
          invalid: !!errors?.repository?.path?.message,
          required: gitFields.pathConfig.required,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Input,
            {
              ...register("repository.path", gitFields.pathConfig.validation),
              id: "git-path",
              placeholder: gitFields.pathConfig.placeholder
            }
          )
        }
      )
    ] }),
    localFields && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field,
      {
        noMargin: true,
        label: localFields.pathConfig.label,
        description: localFields.pathConfig.description,
        error: errors?.repository?.path?.message,
        invalid: !!errors?.repository?.path?.message,
        required: localFields.pathConfig.required,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Input,
          {
            ...register("repository.path", localFields.pathConfig.validation),
            id: "local-path",
            placeholder: localFields.pathConfig.placeholder
          }
        )
      }
    )
  ] });
});


/***/ }),

/***/ "./public/app/features/provisioning/Wizard/FinishStep.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinishStep: () => (/* binding */ FinishStep)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Checkbox.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var _GettingStarted_features__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/provisioning/GettingStarted/features.ts");
/* harmony import */ var _utils_repositoryTypes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/provisioning/utils/repositoryTypes.ts");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/provisioning/Wizard/fields.ts");










const FinishStep = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function FinishStep2() {
  const {
    register,
    watch,
    setValue,
    formState: { errors }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const settings = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_10__.useGetFrontendSettingsQuery)();
  const [type, readOnly] = watch(["repository.type", "repository.readOnly"]);
  const isGithub = type === "github";
  const isGitBased = (0,_utils_repositoryTypes__WEBPACK_IMPORTED_MODULE_12__.isGitProvider)(type);
  const isPublic = (0,_GettingStarted_features__WEBPACK_IMPORTED_MODULE_11__.checkPublicAccess)();
  const hasImageRenderer = (0,_GettingStarted_features__WEBPACK_IMPORTED_MODULE_11__.checkImageRenderer)();
  const imageRenderingAllowed = (0,_GettingStarted_features__WEBPACK_IMPORTED_MODULE_11__.checkImageRenderingAllowed)(settings.data);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setValue("repository.sync.enabled", true);
  }, [setValue]);
  const gitFields = isGitBased ? (0,_fields__WEBPACK_IMPORTED_MODULE_13__.getGitProviderFields)(type) : null;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "column", gap: 2, children: [
    isGitBased && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field,
      {
        noMargin: true,
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.finish-step.label-sync-interval", "Sync Interval (seconds)"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "provisioning.finish-step.description-sync-interval",
          "How often to sync changes from the repository"
        ),
        required: true,
        error: errors?.repository?.sync?.intervalSeconds?.message,
        invalid: !!errors?.repository?.sync?.intervalSeconds?.message,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
          {
            ...register("repository.sync.intervalSeconds", {
              valueAsNumber: true,
              required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.finish-step.error-sync-interval-required", "Sync interval is required")
            }),
            type: "number",
            placeholder: "60"
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field, { noMargin: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Checkbox,
      {
        ...register("repository.readOnly", {
          onChange: (e) => {
            if (e.target.checked) {
              setValue("repository.prWorkflow", false);
            }
          }
        }),
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.finish-step.label-read-only", "Read only"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "provisioning.finish-step.description-read-only",
          "Resources can't be modified through Grafana."
        )
      }
    ) }),
    gitFields && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field, { noMargin: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Checkbox,
      {
        ...register("repository.prWorkflow"),
        disabled: readOnly,
        label: gitFields.prWorkflowConfig.label,
        description: gitFields.prWorkflowConfig.description
      }
    ) }),
    isGithub && imageRenderingAllowed && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field, { noMargin: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Checkbox,
      {
        ...register("repository.generateDashboardPreviews"),
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.finish-step.label-generate-dashboard-previews", "Generate Dashboard Previews"),
        description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.finish-step.description-generate-dashboard-previews", children: "Create preview links for pull requests" }),
          (!isPublic || !hasImageRenderer) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            " ",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.finish-step.description-preview-requirements", children: [
              "(requires",
              " ",
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TextLink, { href: "https://grafana.com/docs/grafana/latest/setup-grafana/image-rendering/", children: "image rendering" }),
              " ",
              "and public access enabled)"
            ] }) })
          ] })
        ] }),
        disabled: !isPublic || !hasImageRenderer
      }
    ) })
  ] });
});


/***/ }),

/***/ "./public/app/features/provisioning/Wizard/ProvisioningWizard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProvisioningWizard: () => (/* binding */ ProvisioningWizard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/legacyEvents.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var app_core_components_FormPrompt_FormPrompt__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/core/components/FormPrompt/FormPrompt.tsx");
/* harmony import */ var _Config_defaults__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/provisioning/Config/defaults.ts");
/* harmony import */ var _Shared_ProvisioningAlert__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/provisioning/Shared/ProvisioningAlert.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/provisioning/constants.ts");
/* harmony import */ var _hooks_useCreateOrUpdateRepository__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/provisioning/hooks/useCreateOrUpdateRepository.ts");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/provisioning/utils/data.ts");
/* harmony import */ var _utils_getFormErrors__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/provisioning/utils/getFormErrors.ts");
/* harmony import */ var _BootstrapStep__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/provisioning/Wizard/BootstrapStep.tsx");
/* harmony import */ var _ConnectStep__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/provisioning/Wizard/ConnectStep.tsx");
/* harmony import */ var _FinishStep__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/provisioning/Wizard/FinishStep.tsx");
/* harmony import */ var _StepStatusContext__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/provisioning/Wizard/StepStatusContext.tsx");
/* harmony import */ var _Stepper__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/provisioning/Wizard/Stepper.tsx");
/* harmony import */ var _SynchronizeStep__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/provisioning/Wizard/SynchronizeStep.tsx");
/* harmony import */ var _hooks_useCreateSyncJob__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/provisioning/Wizard/hooks/useCreateSyncJob.ts");
/* harmony import */ var _hooks_useResourceStats__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./public/app/features/provisioning/Wizard/hooks/useResourceStats.ts");


























const appEvents = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_9__.getAppEvents)();
const getSteps = () => {
  return [
    {
      id: "connection",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.wizard.step-connect", "Connect"),
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.wizard.title-connect", "Connect to external storage"),
      submitOnNext: true
    },
    {
      id: "bootstrap",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.wizard.step-bootstrap", "Choose what to synchronize"),
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.wizard.title-bootstrap", "Choose what to synchronize"),
      submitOnNext: true
    },
    {
      id: "synchronize",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.wizard.step-synchronize", "Synchronize with external storage"),
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.wizard.title-synchronize", "Synchronize with external storage"),
      submitOnNext: false
    },
    {
      id: "finish",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.wizard.step-finish", "Choose additional settings"),
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.wizard.title-finish", "Choose additional settings"),
      submitOnNext: true
    }
  ];
};
const ProvisioningWizard = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function ProvisioningWizard2({
  type,
  settingsData
}) {
  const [activeStep, setActiveStep] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("connection");
  const [completedSteps, setCompletedSteps] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isCancelling, setIsCancelling] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [showCancelConfirmation, setShowCancelConfirmation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const repositoryRequestFailed = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
    "provisioning.provisioning-wizard.on-submit.title.repository-request-failed",
    "Repository request failed"
  );
  const repositoryConnectionFailed = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
    "provisioning.provisioning-wizard.on-submit.title.repository-connection-failed",
    "Repository connection failed"
  );
  const { stepStatusInfo, setStepStatusInfo, isStepSuccess, isStepRunning, hasStepError, hasStepWarning } = (0,_StepStatusContext__WEBPACK_IMPORTED_MODULE_27__.useStepStatus)();
  const isSyncCompleted = activeStep === "synchronize" && (isStepSuccess || hasStepWarning || hasStepError);
  const isFinishWithSyncCompleted = activeStep === "finish" && (isStepSuccess || completedSteps.includes("synchronize"));
  const shouldUseCancelBehavior = activeStep === "connection" || isSyncCompleted || isFinishWithSyncCompleted;
  const isLegacyStorage = Boolean(settingsData?.legacyStorage);
  const navigate = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  const steps = getSteps();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.useStyles2)(getStyles);
  const values = (0,_Config_defaults__WEBPACK_IMPORTED_MODULE_18__.getDefaultValues)({ allowedTargets: settingsData?.allowedTargets });
  const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    defaultValues: {
      repository: { ...values, type },
      migrate: {
        history: true
      }
    }
  });
  const {
    watch,
    setValue,
    getValues,
    trigger,
    setError,
    formState: { isDirty },
    handleSubmit
  } = methods;
  const [repoName = "", repoType, syncTarget] = watch(["repositoryName", "repository.type", "repository.sync.target"]);
  const [submitData] = (0,_hooks_useCreateOrUpdateRepository__WEBPACK_IMPORTED_MODULE_21__.useCreateOrUpdateRepository)(repoName);
  const [deleteRepository] = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_16__.useDeleteRepositoryMutation)();
  const {
    shouldSkipSync,
    requiresMigration,
    isLoading: isResourceStatsLoading
  } = (0,_hooks_useResourceStats__WEBPACK_IMPORTED_MODULE_31__.useResourceStats)(repoName, isLegacyStorage, syncTarget);
  const { createSyncJob, isLoading: isCreatingSkipJob } = (0,_hooks_useCreateSyncJob__WEBPACK_IMPORTED_MODULE_30__.useCreateSyncJob)({
    repoName,
    requiresMigration,
    repoType,
    isLegacyStorage,
    setStepStatusInfo
  });
  const currentStepIndex = steps.findIndex((s) => s.id === activeStep);
  const currentStepConfig = steps[currentStepIndex];
  const canSkipSync = repoName && !isResourceStatsLoading && shouldSkipSync;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (settingsData?.items.some((item) => item.target === "instance" && item.name !== repoName)) {
      appEvents.publish({
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.AppEvents.alertError.name,
        payload: [
          (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.wizard-content.error-instance-repository-exists", "Instance repository already exists")
        ]
      });
      navigate(_constants__WEBPACK_IMPORTED_MODULE_20__.PROVISIONING_URL);
    }
  }, [navigate, repoName, settingsData?.items]);
  const handleRepositoryDeletion = async (name) => {
    setIsCancelling(true);
    try {
      await deleteRepository({ name });
      setTimeout(() => {
        navigate(_constants__WEBPACK_IMPORTED_MODULE_20__.PROVISIONING_URL);
      }, 1e3);
    } catch (error) {
      setIsCancelling(false);
    }
  };
  const handleBack = () => {
    const currentStepIndex2 = steps.findIndex((s) => s.id === activeStep);
    if (currentStepIndex2 > 0) {
      let previousStepIndex = currentStepIndex2 - 1;
      if (activeStep === "finish" && canSkipSync) {
        previousStepIndex = currentStepIndex2 - 2;
      }
      if (previousStepIndex >= 0) {
        const previousStep = steps[previousStepIndex];
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("grafana_provisioning_wizard_previous_clicked", {
          fromStep: activeStep,
          toStep: previousStep.id,
          repositoryType: repoType
        });
        setActiveStep(previousStep.id);
        setCompletedSteps((prev) => prev.filter((step) => step !== activeStep));
        setStepStatusInfo({ status: "idle" });
      }
    }
  };
  const onDiscard = async () => {
    if (repoName) {
      await handleRepositoryDeletion(repoName);
    }
    await handlePrevious();
  };
  const handlePrevious = async () => {
    if (shouldUseCancelBehavior) {
      if (!repoName) {
        navigate(_constants__WEBPACK_IMPORTED_MODULE_20__.PROVISIONING_URL);
        return;
      }
      setShowCancelConfirmation(true);
      return;
    }
    handleBack();
  };
  const handleConfirmCancel = () => {
    setShowCancelConfirmation(false);
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("grafana_provisioning_wizard_cancelled", {
      cancelledAtStep: activeStep,
      repositoryType: repoType
    });
    handleRepositoryDeletion(repoName);
  };
  const getNextButtonText = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (currentStep) => {
      const stepIndex = steps.findIndex((s) => s.id === currentStep);
      if (stepIndex === -1 || stepIndex >= steps.length - 1) {
        return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.wizard.button-next", "Finish");
      }
      if (currentStep === "bootstrap" && canSkipSync) {
        const finishStepIndex = stepIndex + 2;
        if (finishStepIndex < steps.length) {
          return steps[finishStepIndex].name;
        }
        return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.wizard.button-next", "Finish");
      }
      return steps[stepIndex + 1].name;
    },
    [steps, canSkipSync]
  );
  const getPreviousButtonText = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    if (isCancelling) {
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.wizard-content.button-cancelling", "Cancelling...");
    }
    if (shouldUseCancelBehavior) {
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.wizard-content.button-cancel", "Cancel");
    }
    return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.wizard-content.button-previous", "Previous");
  }, [isCancelling, shouldUseCancelBehavior]);
  const handleNext = async () => {
    const isLastStep = currentStepIndex === steps.length - 1;
    if (isLastStep) {
      const formData = getValues();
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("grafana_provisioning_repository_created", {
        repositoryType: repoType,
        target: syncTarget,
        workflowsEnabled: (0,_utils_data__WEBPACK_IMPORTED_MODULE_22__.getWorkflows)(formData.repository)
      });
      navigate(_constants__WEBPACK_IMPORTED_MODULE_20__.PROVISIONING_URL);
    } else {
      let nextStepIndex = currentStepIndex + 1;
      if (activeStep === "bootstrap" && canSkipSync) {
        nextStepIndex = currentStepIndex + 2;
        const job = await createSyncJob();
        if (!job) {
          return;
        }
      }
      if (nextStepIndex >= steps.length) {
        navigate(_constants__WEBPACK_IMPORTED_MODULE_20__.PROVISIONING_URL);
        return;
      }
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("grafana_provisioning_wizard_step_completed", {
        step: activeStep,
        repositoryType: repoType,
        target: syncTarget
      });
      setActiveStep(steps[nextStepIndex].id);
      setCompletedSteps((prev) => [.../* @__PURE__ */ new Set([...prev, activeStep])]);
      setStepStatusInfo({ status: "idle" });
    }
  };
  const onSubmit = async () => {
    if (currentStepConfig?.submitOnNext) {
      const fieldsToValidate = activeStep === "connection" ? ["repository"] : ["repository", "repository.title"];
      const isValid = await trigger(fieldsToValidate);
      if (!isValid) {
        return;
      }
      setIsSubmitting(true);
      try {
        const formData = getValues();
        const spec = (0,_utils_data__WEBPACK_IMPORTED_MODULE_22__.dataToSpec)(formData.repository);
        const rsp = await submitData(spec, formData.repository.token);
        if (rsp.error) {
          if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.isFetchError)(rsp.error)) {
            setStepStatusInfo({
              status: "error",
              error: {
                title: repositoryRequestFailed,
                message: rsp.error.data.message
              }
            });
          } else {
            setStepStatusInfo({
              status: "error",
              error: repositoryRequestFailed
            });
          }
          return;
        }
        const name = rsp.data?.metadata?.name;
        if (name) {
          setValue("repositoryName", name);
          setStepStatusInfo({ status: "success" });
          handleNext();
        } else {
          console.error("Saved repository without a name:", rsp);
        }
      } catch (error) {
        if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.isFetchError)(error)) {
          const [field, errorMessage] = (0,_utils_getFormErrors__WEBPACK_IMPORTED_MODULE_23__.getFormErrors)(error.data.errors);
          if (field && errorMessage) {
            setError(field, errorMessage);
          } else {
            setStepStatusInfo({
              status: "error",
              error: {
                title: repositoryConnectionFailed,
                message: error.data.message
              }
            });
          }
        } else {
          setStepStatusInfo({
            status: "error",
            error: repositoryConnectionFailed
          });
        }
      } finally {
        setIsSubmitting(false);
      }
    } else {
      if (isStepSuccess || hasStepWarning) {
        handleNext();
      }
    }
  };
  const isNextButtonDisabled = () => {
    if (activeStep !== "connection" && hasStepError) {
      return true;
    }
    if (activeStep === "synchronize") {
      return !(isStepSuccess || hasStepWarning);
    }
    return isSubmitting || isCancelling || isStepRunning || isCreatingSkipJob;
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.FormProvider, { ...methods, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Stack, { gap: 6, direction: "row", alignItems: "flex-start", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Stepper__WEBPACK_IMPORTED_MODULE_28__.Stepper, { steps, activeStep, visitedSteps: completedSteps }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.divider }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit(onSubmit), className: styles.form, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          app_core_components_FormPrompt_FormPrompt__WEBPACK_IMPORTED_MODULE_17__.FormPrompt,
          {
            onDiscard,
            confirmRedirect: isDirty && !["connection", "finish"].includes(activeStep) && !isCancelling
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Stack, { direction: "column", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Box, { marginBottom: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Text, { element: "h2", children: [
            currentStepIndex + 1,
            ". ",
            currentStepConfig?.title
          ] }) }),
          hasStepError && "error" in stepStatusInfo && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_ProvisioningAlert__WEBPACK_IMPORTED_MODULE_19__.ProvisioningAlert, { error: stepStatusInfo.error }),
          hasStepWarning && "warning" in stepStatusInfo && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_ProvisioningAlert__WEBPACK_IMPORTED_MODULE_19__.ProvisioningAlert, { warning: stepStatusInfo.warning }),
          isStepSuccess && "success" in stepStatusInfo && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_ProvisioningAlert__WEBPACK_IMPORTED_MODULE_19__.ProvisioningAlert, { success: stepStatusInfo.success }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.content, children: [
            activeStep === "connection" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ConnectStep__WEBPACK_IMPORTED_MODULE_25__.ConnectStep, {}),
            activeStep === "bootstrap" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_BootstrapStep__WEBPACK_IMPORTED_MODULE_24__.BootstrapStep, { settingsData, repoName }),
            activeStep === "synchronize" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _SynchronizeStep__WEBPACK_IMPORTED_MODULE_29__.SynchronizeStep,
              {
                isLegacyStorage,
                onCancel: handleRepositoryDeletion,
                isCancelling
              }
            ),
            activeStep === "finish" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FinishStep__WEBPACK_IMPORTED_MODULE_26__.FinishStep, {})
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Stack, { gap: 2, justifyContent: "flex-end", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Button,
              {
                variant: "secondary",
                onClick: handlePrevious,
                disabled: isSubmitting || isCancelling || isStepRunning || showCancelConfirmation,
                children: getPreviousButtonText()
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Button, { type: "submit", disabled: isNextButtonDisabled(), children: isSubmitting ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.wizard-content.button-submitting", "Submitting...") : getNextButtonText(activeStep) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.ConfirmModal,
      {
        isOpen: showCancelConfirmation,
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.wizard.discard-modal.title", "Discard repository setup?"),
        body: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
          "provisioning.wizard.discard-modal.body",
          "This will delete the repository configuration and you will lose all progress. Are you sure you want to discard your changes?"
        ),
        confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.wizard.discard-modal.confirm", "Yes, discard"),
        dismissText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("provisioning.wizard.discard-modal.dismiss", "Keep working"),
        onConfirm: handleConfirmCancel,
        onDismiss: () => setShowCancelConfirmation(false)
      }
    )
  ] });
});
const getStyles = (theme) => ({
  form: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    maxWidth: "900px",
    flexGrow: 1
  }),
  divider: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: 1,
    alignSelf: "stretch",
    backgroundColor: theme.colors.border.weak,
    // align with the button row
    marginBottom: theme.spacing(13)
  }),
  content: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    borderBottom: `1px solid ${theme.colors.border.weak}`,
    paddingBottom: theme.spacing(4),
    marginBottom: theme.spacing(4)
  })
});


/***/ }),

/***/ "./public/app/features/provisioning/Wizard/StepStatusContext.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepStatusProvider: () => (/* binding */ StepStatusProvider),
/* harmony export */   useStepStatus: () => (/* binding */ useStepStatus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const StepStatusContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(void 0);
const StepStatusProvider = ({ children }) => {
  const [stepStatusInfo, setStepStatusInfoState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({ status: "idle" });
  const setStepStatusInfo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((info) => {
    setStepStatusInfoState(info);
  }, []);
  const value = {
    stepStatusInfo,
    setStepStatusInfo,
    hasStepError: stepStatusInfo.status === "error",
    hasStepWarning: stepStatusInfo.status === "warning",
    isStepRunning: stepStatusInfo.status === "running",
    isStepSuccess: stepStatusInfo.status === "success",
    isStepIdle: stepStatusInfo.status === "idle"
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StepStatusContext.Provider, { value, children });
};
const useStepStatus = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StepStatusContext);
  if (context === void 0) {
    throw new Error("useStepStatus must be used within a StepStatusProvider");
  }
  return context;
};


/***/ }),

/***/ "./public/app/features/provisioning/Wizard/Stepper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Stepper: () => (/* binding */ Stepper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");




function Stepper({ visitedSteps = [], steps, activeStep = steps[0]?.id }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ol", { className: styles.container, children: steps.map((step, index) => {
    const isActive = step.id === activeStep;
    const isCompleted = visitedSteps.includes(step.id) && !isActive;
    const isLast = index === steps.length - 1;
    const stepTextClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.stepText, {
      [styles.activeStepText]: isActive
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { className: styles.stepContainer, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.stepContent, children: [
        isCompleted ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.stepNumber, styles.completedStepNumber), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { name: "check", size: "sm" }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.stepNumber, children: index + 1 }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: stepTextClass, children: step.name })
      ] }),
      !isLast && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.connector })
    ] }, step.id);
  }) });
}
const getStyles = (theme) => {
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "column",
      margin: theme.spacing(2, 0),
      padding: 0,
      listStyle: "none",
      width: 200
    }),
    stepContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      position: "relative"
    }),
    stepContent: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0.5, 0)
    }),
    stepNumber: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: theme.spacing(3),
      width: theme.spacing(3),
      color: theme.colors.text.secondary,
      fontSize: theme.typography.size.sm,
      fontWeight: theme.typography.fontWeightMedium,
      marginRight: theme.spacing(1)
    }),
    completedStepNumber: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.success.main
    }),
    stepText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.text.secondary,
      fontSize: theme.typography.size.md
    }),
    activeStepText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.text.primary,
      fontWeight: theme.typography.fontWeightMedium
    }),
    connector: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "1px",
      backgroundColor: theme.colors.border.medium,
      height: theme.spacing(2),
      marginLeft: theme.spacing(1.5),
      marginTop: theme.spacing(0.5)
    })
  };
};


/***/ }),

/***/ "./public/app/features/provisioning/Wizard/SynchronizeStep.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SynchronizeStep: () => (/* binding */ SynchronizeStep)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Checkbox.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var _Job_JobStatus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/provisioning/Job/JobStatus.tsx");
/* harmony import */ var _Shared_ProvisioningAlert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/provisioning/Shared/ProvisioningAlert.tsx");
/* harmony import */ var _StepStatusContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/provisioning/Wizard/StepStatusContext.tsx");
/* harmony import */ var _hooks_useCreateSyncJob__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/provisioning/Wizard/hooks/useCreateSyncJob.ts");
/* harmony import */ var _hooks_useResourceStats__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/provisioning/Wizard/hooks/useResourceStats.ts");













const SynchronizeStep = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function SynchronizeStep2({
  isLegacyStorage,
  onCancel,
  isCancelling
}) {
  const { getValues, register, watch } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const { setStepStatusInfo } = (0,_StepStatusContext__WEBPACK_IMPORTED_MODULE_16__.useStepStatus)();
  const [repoName = "", repoType] = watch(["repositoryName", "repository.type"]);
  const { requiresMigration } = (0,_hooks_useResourceStats__WEBPACK_IMPORTED_MODULE_18__.useResourceStats)(repoName, isLegacyStorage);
  const { createSyncJob, supportsHistory } = (0,_hooks_useCreateSyncJob__WEBPACK_IMPORTED_MODULE_17__.useCreateSyncJob)({
    repoName,
    requiresMigration,
    repoType,
    isLegacyStorage,
    setStepStatusInfo
  });
  const [job, setJob] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const [shouldEnablePolling, setShouldEnablePolling] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const POLLING_INTERVAL_MS = 5e3;
  const repositoryStatusQuery = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_13__.useGetRepositoryStatusQuery)(repoName ? { name: repoName } : _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__.skipToken, {
    // Disable polling by setting interval to 0 when we should stop
    pollingInterval: shouldEnablePolling ? POLLING_INTERVAL_MS : 0,
    skipPollingIfUnfocused: true
  });
  const {
    healthy: isRepositoryHealthy,
    message: repositoryHealthMessages,
    checked
  } = repositoryStatusQuery?.data?.status?.health || {};
  const healthStatusNotReady = isRepositoryHealthy === false && repositoryStatusQuery?.data?.status?.observedGeneration === 0;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!healthStatusNotReady) {
      setShouldEnablePolling(false);
    }
  }, [healthStatusNotReady]);
  const hasError = repositoryStatusQuery.isError;
  const isLoading = repositoryStatusQuery.isLoading || repositoryStatusQuery.isFetching;
  const isButtonDisabled = hasError || checked !== void 0 && isRepositoryHealthy === false || healthStatusNotReady;
  const startSynchronization = async () => {
    const [history] = getValues(["migrate.history"]);
    const response = await createSyncJob({ history });
    if (response) {
      setJob(response);
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Spinner, {});
  }
  if (job) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Job_JobStatus__WEBPACK_IMPORTED_MODULE_14__.JobStatus, { watch: job, onStatusChange: setStepStatusInfo, jobType: "sync" });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "column", gap: 3, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "provisioning.wizard.sync-description", children: "Sync resources with external storage. After this one-time step, all future updates will be automatically saved to the repository and provisioned back into the instance." }) }),
    hasError && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _Shared_ProvisioningAlert__WEBPACK_IMPORTED_MODULE_15__.ProvisioningAlert,
      {
        error: {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("provisioning.synchronize-step.repository-error", "Repository error"),
          message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
            "provisioning.synchronize-step.repository-error-message",
            "Unable to check repository status. Please verify the repository configuration and try again."
          )
        }
      }
    ),
    repositoryHealthMessages && !isRepositoryHealthy && !hasError && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _Shared_ProvisioningAlert__WEBPACK_IMPORTED_MODULE_15__.ProvisioningAlert,
      {
        error: {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
            "provisioning.synchronize-step.repository-unhealthy",
            "The repository cannot be synchronized. Cancel provisioning and try again once the issue has been resolved. See details below."
          ),
          message: repositoryHealthMessages
        }
      }
    ),
    isRepositoryHealthy && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "provisioning.wizard.alert-title",
          "Important: No data or configuration will be lost, but dashboards will be temporarily unavailable for a few minutes."
        ),
        severity: "info",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", { style: { marginLeft: "16px" }, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "provisioning.wizard.alert-point-1", children: "Resources won't be able to be created, edited, or deleted during this process. In the last step, they will disappear." }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "provisioning.wizard.alert-point-2", children: "Once provisioning is complete, resources will reappear and be managed through external storage." }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "provisioning.wizard.alert-point-3", children: "The duration of this process depends on the number of resources involved." }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "provisioning.wizard.alert-point-4", children: [
            "Enterprise instance administrators can display an announcement banner to users. See",
            " ",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.TextLink, { external: true, href: "https://grafana.com/docs/grafana/latest/administration/announcement-banner/", children: "this guide" }),
            " ",
            "for step-by-step instructions."
          ] }) })
        ] })
      }
    ),
    supportsHistory && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Text, { element: "h3", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "provisioning.synchronize-step.synchronization-options", children: "Synchronization options" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Field, { noMargin: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Checkbox,
        {
          ...register("migrate.history"),
          id: "migrate-history",
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("provisioning.wizard.sync-option-history", "History"),
          description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "provisioning.synchronize-step.synchronization-description", children: "Include commits for each historical value" })
        }
      ) })
    ] }),
    healthStatusNotReady ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "provisioning.wizard.check-status-message", children: "Repository connecting, synchronize will be ready soon." }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
        {
          onClick: () => {
            repositoryStatusQuery.refetch();
          },
          disabled: isLoading,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "provisioning.wizard.check-status-button", children: "Check repository status" })
        }
      ) }) })
    ] }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Field, { noMargin: true, children: hasError || checked !== void 0 && isRepositoryHealthy === false ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { variant: "destructive", onClick: () => onCancel?.(repoName), disabled: isCancelling, children: isCancelling ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "provisioning.wizard.button-cancelling", children: "Cancelling..." }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "provisioning.wizard.button-cancel", children: "Cancel" }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { variant: "primary", onClick: startSynchronization, disabled: isButtonDisabled, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "provisioning.wizard.button-start", children: "Begin synchronization" }) }) })
  ] });
});


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

/***/ "./public/app/features/provisioning/Wizard/hooks/useCreateSyncJob.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCreateSyncJob: () => (/* binding */ useCreateSyncJob)
/* harmony export */ });
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var _utils_repositoryTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/provisioning/utils/repositoryTypes.ts");




function useCreateSyncJob({
  repoName,
  requiresMigration,
  repoType,
  isLegacyStorage,
  setStepStatusInfo
}) {
  const [createJob, { isLoading }] = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_1__.useCreateRepositoryJobsMutation)();
  const supportsHistory = (0,_utils_repositoryTypes__WEBPACK_IMPORTED_MODULE_2__.isGitProvider)(repoType) && isLegacyStorage;
  const createSyncJob = async (options) => {
    if (!repoName) {
      setStepStatusInfo?.({
        status: "error",
        error: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.sync-job.error-no-repository-name", "No repository name provided")
      });
      return null;
    }
    try {
      setStepStatusInfo?.({ status: "running" });
      const jobSpec = requiresMigration ? {
        migrate: {
          history: (options?.history || false) && supportsHistory
        }
      } : {
        pull: {
          incremental: false
        }
      };
      const response = await createJob({
        name: repoName,
        jobSpec
      }).unwrap();
      if (!response?.metadata?.name) {
        setStepStatusInfo?.({
          status: "error",
          error: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.sync-job.error-no-job-id", "Failed to start job")
        });
        return null;
      }
      setStepStatusInfo?.({ status: "success" });
      return response;
    } catch (error) {
      setStepStatusInfo?.({
        status: "error",
        error: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.sync-job.error-starting-job", "Error starting job")
      });
      return null;
    }
  };
  return {
    createSyncJob,
    isLoading,
    supportsHistory
  };
}


/***/ }),

/***/ "./public/app/features/provisioning/Wizard/hooks/useModeOptions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useModeOptions: () => (/* binding */ useModeOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");



function filterModeOptions(modeOptions, repoName, settings) {
  const folderConnected = settings?.items?.some((item) => item.target === "folder" && item.name !== repoName);
  const allowedTargets = settings?.allowedTargets || ["instance", "folder"];
  return modeOptions.filter((option) => {
    if (!allowedTargets.includes(option.target)) {
      return false;
    }
    if (settings?.legacyStorage) {
      return option.target === "instance";
    }
    if (option.target === "folder") {
      return true;
    }
    if (option.target === "instance") {
      return !folderConnected;
    }
    return false;
  });
}
function useModeOptions(repoName, settings) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const modeOptions = [
      {
        target: "instance",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("provisioning.mode-options.instance.label", "Sync all resources with external storage"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
          "provisioning.mode-options.instance.description",
          "Resources will be synced with external storage and provisioned into this instance. Existing Grafana resources will be migrated and merged if needed. After setup, all new resources and changes will be saved to external storage and automatically provisioned back into the instance."
        ),
        subtitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
          "provisioning.mode-options.instance.subtitle",
          "Use this option if you want to sync and manage your entire Grafana instance through external storage."
        )
      },
      {
        target: "folder",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("provisioning.mode-options.folder.label", "Sync external storage to a new Grafana folder"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
          "provisioning.mode-options.folder.description",
          "After setup, a new Grafana folder will be created and synced with external storage. If any resources are present in external storage, they will be provisioned to this new folder. All new resources created in this folder will be stored and versioned in external storage."
        ),
        subtitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
          "provisioning.mode-options.folder.subtitle",
          "Use this option to sync external resources into a new folder without affecting the rest of your instance. You can repeat this process for up to 10 folders."
        )
      }
    ];
    return filterModeOptions(modeOptions, repoName, settings);
  }, [repoName, settings]);
}


/***/ }),

/***/ "./public/app/features/provisioning/Wizard/hooks/useResourceStats.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useResourceStats: () => (/* binding */ useResourceStats)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var app_features_apiserver_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/apiserver/types.ts");






function getManagedCount(managed) {
  let totalCount = 0;
  managed?.forEach((manager) => {
    if (manager.kind === app_features_apiserver_types__WEBPACK_IMPORTED_MODULE_4__.ManagerKind.Repo) {
      manager.stats.forEach((stat) => {
        if (stat.group === "folder.grafana.app" || stat.group === "dashboard.grafana.app") {
          totalCount += stat.count;
        }
      });
    }
  });
  return totalCount;
}
function getResourceCount(stats, managed) {
  let counts = [];
  let resourceCount = 0;
  stats?.forEach((stat) => {
    switch (stat.group) {
      case "folders":
      case "folder.grafana.app":
        resourceCount += stat.count;
        counts.push((0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.bootstrap-step.folders-count", "{{count}} folder", { count: stat.count }));
        break;
      case "dashboard.grafana.app":
        resourceCount += stat.count;
        counts.push((0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.bootstrap-step.dashboards-count", "{{count}} dashboard", { count: stat.count }));
        break;
    }
  });
  managed?.forEach((manager) => {
    if (manager.kind !== app_features_apiserver_types__WEBPACK_IMPORTED_MODULE_4__.ManagerKind.Repo) {
      manager.stats.forEach((stat) => {
        switch (stat.group) {
          case "folders":
          case "folder.grafana.app":
            resourceCount += stat.count;
            counts.push((0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.bootstrap-step.folders-count", "{{count}} folder", { count: stat.count }));
            break;
          case "dashboard.grafana.app":
            resourceCount += stat.count;
            counts.push(
              (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.bootstrap-step.dashboards-count", "{{count}} dashboard", { count: stat.count })
            );
            break;
        }
      });
    }
  });
  return {
    counts,
    resourceCount
  };
}
function getResourceStats(files, stats) {
  const isSupportedFile = (path) => path.endsWith(".json") || path.endsWith(".yaml");
  const items = files?.items ?? [];
  const fileCount = items.filter((file) => {
    const path = file.path ?? "";
    return isSupportedFile(path);
  }).length;
  const { counts, resourceCount } = getResourceCount(stats?.instance);
  return {
    fileCount,
    resourceCount,
    resourceCountString: counts.join(",\n")
  };
}
function useResourceStats(repoName, isLegacyStorage, syncTarget) {
  const resourceStatsQuery = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_3__.useGetResourceStatsQuery)(repoName ? void 0 : _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_0__.skipToken);
  const filesQuery = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_3__.useGetRepositoryFilesQuery)(repoName ? { name: repoName } : _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_0__.skipToken);
  const isLoading = resourceStatsQuery.isLoading || filesQuery.isLoading;
  const { resourceCount, resourceCountString, fileCount } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => getResourceStats(filesQuery.data, resourceStatsQuery.data),
    [filesQuery.data, resourceStatsQuery.data]
  );
  const { managedCount, unmanagedCount } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return {
      // managed does not exist in response when first time connecting to a repo
      managedCount: getManagedCount(resourceStatsQuery.data?.managed),
      // "unmanaged" means unmanaged by git sync. it may still be managed by other means, like terraform, plugins, file provisioning, etc.
      unmanagedCount: getResourceCount(resourceStatsQuery.data?.unmanaged, resourceStatsQuery.data?.managed).resourceCount
    };
  }, [resourceStatsQuery.data]);
  const requiresMigration = isLegacyStorage || resourceCount > 0;
  const shouldSkipSync = !isLegacyStorage && (resourceCount === 0 || syncTarget === "folder") && fileCount === 0;
  const resourceCountDisplay = resourceCount > 0 ? resourceCountString : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.bootstrap-step.empty", "Empty");
  const fileCountDisplay = fileCount > 0 ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.bootstrap-step.files-count", "{{count}} files", { count: fileCount }) : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.bootstrap-step.empty", "Empty");
  return {
    managedCount,
    unmanagedCount,
    resourceCount,
    resourceCountString: resourceCountDisplay,
    fileCount,
    fileCountString: fileCountDisplay,
    isLoading,
    requiresMigration,
    shouldSkipSync
  };
}


/***/ }),

/***/ "./public/app/features/provisioning/guards.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isHttpError: () => (/* binding */ isHttpError),
/* harmony export */   isSupportedGitProvider: () => (/* binding */ isSupportedGitProvider)
/* harmony export */ });

function isSupportedGitProvider(provider) {
  return ["github", "gitlab", "bitbucket"].includes(provider);
}
function isHttpError(err) {
  return err instanceof Error && "status" in err;
}


/***/ }),

/***/ "./public/app/features/provisioning/hooks/useBranchOptions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useBranchOptions: () => (/* binding */ useBranchOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/provisioning/guards.ts");
/* harmony import */ var _utils_httpUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/provisioning/utils/httpUtils.ts");





function useBranchOptions({
  repositoryType,
  repositoryUrl = "",
  repositoryToken = "",
  repositoryTokenUser = ""
}) {
  const trimmedUrl = repositoryUrl.trim();
  const trimmedToken = repositoryToken.trim();
  const trimmedTokenUser = repositoryTokenUser.trim();
  const hasRequiredData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!(0,_guards__WEBPACK_IMPORTED_MODULE_2__.isSupportedGitProvider)(repositoryType)) {
      return false;
    }
    const hasUrl = trimmedUrl.length > 0;
    const hasToken = trimmedToken.length > 0;
    const hasTokenUser = repositoryType === "bitbucket" ? trimmedTokenUser.length > 0 : true;
    const repoInfo = hasUrl ? (0,_utils_httpUtils__WEBPACK_IMPORTED_MODULE_3__.parseRepositoryUrl)(trimmedUrl, repositoryType) : null;
    return hasUrl && hasToken && hasTokenUser && repoInfo !== null;
  }, [trimmedUrl, trimmedToken, trimmedTokenUser, repositoryType]);
  const fetchOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
    () => async () => {
      if (!hasRequiredData) {
        return [];
      }
      const repoInfo = (0,_utils_httpUtils__WEBPACK_IMPORTED_MODULE_3__.parseRepositoryUrl)(trimmedUrl, repositoryType);
      if (!repoInfo) {
        throw new Error("Invalid repository URL format");
      }
      const authToken = repositoryType === "bitbucket" ? `${trimmedTokenUser}:${trimmedToken}` : trimmedToken;
      const branchData = await (0,_utils_httpUtils__WEBPACK_IMPORTED_MODULE_3__.fetchAllBranches)(repositoryType, repoInfo.owner, repoInfo.repo, authToken);
      return branchData.map((branch) => ({
        label: branch.name,
        value: branch.name
      }));
    },
    [hasRequiredData, trimmedUrl, trimmedToken, trimmedTokenUser, repositoryType]
  );
  const asyncState = (0,react_use__WEBPACK_IMPORTED_MODULE_1__["default"])(fetchOptions, [fetchOptions]);
  return {
    options: asyncState.value || [],
    loading: asyncState.loading,
    error: asyncState.error ? (0,_utils_httpUtils__WEBPACK_IMPORTED_MODULE_3__.getErrorMessage)(asyncState.error) : null
  };
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


/***/ }),

/***/ "./public/app/features/provisioning/utils/httpUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAllBitbucketBranches: () => (/* binding */ fetchAllBitbucketBranches),
/* harmony export */   fetchAllBranches: () => (/* binding */ fetchAllBranches),
/* harmony export */   fetchAllGitHubBranches: () => (/* binding */ fetchAllGitHubBranches),
/* harmony export */   fetchAllGitLabBranches: () => (/* binding */ fetchAllGitLabBranches),
/* harmony export */   getErrorMessage: () => (/* binding */ getErrorMessage),
/* harmony export */   getProviderHeaders: () => (/* binding */ getProviderHeaders),
/* harmony export */   makeApiRequest: () => (/* binding */ makeApiRequest),
/* harmony export */   parseRepositoryUrl: () => (/* binding */ parseRepositoryUrl)
/* harmony export */ });
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/provisioning/guards.ts");



const githubUrlRegex = /^https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/?$/;
const gitlabUrlRegex = /^https:\/\/gitlab\.com\/([^\/]+)\/([^\/]+)\/?$/;
const bitbucketUrlRegex = /^https:\/\/bitbucket\.org\/([^\/]+)\/([^\/]+)\/?$/;
function parseRepositoryUrl(url, type) {
  let match = null;
  switch (type) {
    case "github":
      match = url.match(githubUrlRegex);
      break;
    case "gitlab":
      match = url.match(gitlabUrlRegex);
      break;
    case "bitbucket":
      match = url.match(bitbucketUrlRegex);
      break;
    default:
      return null;
  }
  if (match && match[1] && match[2]) {
    return {
      owner: match[1],
      repo: match[2].replace(/\.git$/, "")
    };
  }
  return null;
}
function getProviderHeaders(repositoryType, token) {
  switch (repositoryType) {
    case "github":
      return { Authorization: `Bearer ${token}` };
    case "gitlab":
      return { "Private-Token": token };
    case "bitbucket":
      return { Authorization: `Basic ${btoa(token)}` };
    default:
      throw new Error(
        (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.http-utils.unsupported-repository-type", "Unsupported repository type: {{repositoryType}}", {
          repositoryType
        })
      );
  }
}
async function makeApiRequest(request) {
  const response = await window.fetch(request.url, {
    method: "GET",
    headers: request.headers
  });
  if (!response.ok) {
    const errorData = await response.text();
    console.error("API Error Response:", errorData);
    const error = new Error(
      (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.http-utils.http-error", "HTTP {{status}}: {{statusText}}", {
        status: response.status,
        statusText: response.statusText
      })
    );
    error.status = response.status;
    throw error;
  }
  return response.json();
}
async function fetchWithPagination(buildUrl, headers) {
  const allBranches = [];
  let page = 1;
  let hasMorePages = true;
  while (hasMorePages && page <= 10) {
    const url = buildUrl(page);
    const data = await makeApiRequest({ url, headers });
    const branches = Array.isArray(data) ? data : data?.values;
    if (Array.isArray(branches) && branches.length > 0) {
      allBranches.push(...branches);
      hasMorePages = branches.length === 100;
      page++;
    } else {
      hasMorePages = false;
    }
  }
  return allBranches;
}
async function fetchAllGitHubBranches(owner, repo, headers) {
  return fetchWithPagination(
    (page) => `https://api.github.com/repos/${owner}/${repo}/branches?per_page=100&page=${page}`,
    headers
  );
}
async function fetchAllGitLabBranches(owner, repo, headers) {
  const encodedPath = encodeURIComponent(`${owner}/${repo}`);
  return fetchWithPagination(
    (page) => `https://gitlab.com/api/v4/projects/${encodedPath}/repository/branches?per_page=100&page=${page}`,
    headers
  );
}
async function fetchAllBitbucketBranches(owner, repo, headers) {
  return fetchWithPagination(
    (page) => `https://api.bitbucket.org/2.0/repositories/${owner}/${repo}/refs/branches?pagelen=100&page=${page}`,
    headers
  );
}
async function fetchAllBranches(repositoryType, owner, repo, token) {
  const headers = getProviderHeaders(repositoryType, token);
  switch (repositoryType) {
    case "github":
      return fetchAllGitHubBranches(owner, repo, headers);
    case "gitlab":
      return fetchAllGitLabBranches(owner, repo, headers);
    case "bitbucket":
      return fetchAllBitbucketBranches(owner, repo, headers);
    default:
      throw new Error(
        (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.http-utils.unsupported-repository-type", "Unsupported repository type: {{repositoryType}}", {
          repositoryType
        })
      );
  }
}
function getErrorMessage(err) {
  let errorMessage = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.http-utils.request-failed", "Request failed");
  if ((0,_guards__WEBPACK_IMPORTED_MODULE_1__.isHttpError)(err)) {
    if (err.status === 401) {
      errorMessage = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
        "provisioning.http-utils.authentication-failed",
        "Authentication failed. Please check your access token."
      );
    } else if (err.status === 404) {
      errorMessage = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
        "provisioning.http-utils.resource-not-found",
        "Resource not found. Please check the URL or repository."
      );
    } else if (err.status === 403) {
      errorMessage = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("provisioning.http-utils.access-denied", "Access denied. Please check your token permissions.");
    } else if (err.message) {
      errorMessage = err.message;
    }
  }
  return errorMessage;
}


/***/ })

}]);
//# sourceMappingURL=ProvisioningWizardPage.b928353cb590e853164b.js.map