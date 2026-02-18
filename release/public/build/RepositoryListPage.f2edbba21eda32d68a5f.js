"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["RepositoryListPage"],{

/***/ "./public/app/features/provisioning/GettingStarted/EnhancedFeatures.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnhancedFeatures: () => (/* binding */ EnhancedFeatures)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _IconCircle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/provisioning/GettingStarted/IconCircle.tsx");






const EnhancedFeatures = ({ hasPublicAccess, hasImageRenderer, onSetupPublicAccess }) => {
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "column", gap: 5, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "column", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "h4", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.enhanced-features.header", children: "Enhance your GitHub experience" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.enhanced-features.description", children: "Get the most out of your GitHub integration with these optional add-ons" }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { gap: 2, direction: "row", height: "100%", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Box, { width: "40%", height: "100%", display: "flex", direction: "column", gap: 2, alignItems: "flex-start", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { gap: 2, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_IconCircle__WEBPACK_IMPORTED_MODULE_8__.IconCircle, { icon: "sync", color: "blue" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_IconCircle__WEBPACK_IMPORTED_MODULE_8__.IconCircle, { icon: "code-branch", color: "purple" })
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.enhanced-features.title-instant-updates-requests-webhooks", children: "Instant updates and pull requests with webhooks." }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Box, { display: "flex", flex: "1", minHeight: "50px", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "body", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.enhanced-features.description-instant-updates", children: "Get instant updates in Grafana as soon as changes are committed. Review and approve changes using pull requests before they go live." }) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton,
          {
            fill: "outline",
            variant: "secondary",
            onClick: onSetupPublicAccess,
            disabled: hasPublicAccess,
            icon: hasPublicAccess ? "check" : void 0,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.enhanced-features.set-up-public-webhooks", children: "Set up public webhooks" })
          }
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: style.separator }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Box,
        {
          width: "40%",
          height: "100%",
          paddingLeft: 2,
          display: "flex",
          direction: "column",
          gap: 2,
          alignItems: "flex-start",
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_IconCircle__WEBPACK_IMPORTED_MODULE_8__.IconCircle, { icon: "camera", color: "orange" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.enhanced-features.title-visual-previews-in-pull-requests", children: "Visual previews in pull requests with image rendering" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Box, { display: "flex", flex: "1", minHeight: "50px", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "body", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.enhanced-features.description-visual-previews-dashboard-updates-directly-requests", children: "See visual previews of dashboard updates directly in pull requests" }) }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton,
              {
                fill: "outline",
                variant: "secondary",
                href: "https://grafana.com/grafana/plugins/grafana-image-renderer/",
                icon: hasImageRenderer ? "check" : "external-link-alt",
                disabled: hasImageRenderer,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.enhanced-features.set-up-image-rendering", children: "Set up image rendering" })
              }
            )
          ]
        }
      )
    ] })
  ] });
};
function getStyles(theme) {
  return {
    separator: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      borderRight: `2px solid ${theme.colors.border.weak}`
    })
  };
}


/***/ }),

/***/ "./public/app/features/provisioning/GettingStarted/FeaturesList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeaturesList: () => (/* binding */ FeaturesList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/app.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/FeatureBadge/FeatureBadge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Shared_RepositoryTypeCards__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/provisioning/Shared/RepositoryTypeCards.tsx");
/* harmony import */ var _utils_isOnPrem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/provisioning/utils/isOnPrem.ts");








const FeaturesList = ({ hasRequiredFeatures, onSetupFeatures }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "column", gap: 3, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { variant: "h2", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.features-list.manage-your-dashboards-with-remote-provisioning", children: "Get started with Git Sync" }),
      " ",
      !(0,_utils_isOnPrem__WEBPACK_IMPORTED_MODULE_12__.isOnPrem)() && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.FeatureBadge, { featureState: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FeatureState.privatePreview })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", { className: styles.featuresList, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.features-list.manage-dashboards-provision-updates-automatically", children: "Manage dashboards as code in Git and provision updates automatically" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.features-list.store-dashboards-in-version-controlled-storage", children: "Store dashboards in version-controlled storage for better organization and history tracking" }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.features-list.learn-more-documentation", children: [
      "Want to learn more? See our",
      " ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TextLink,
        {
          external: true,
          href: "https://grafana.com/docs/grafana-cloud/developer-resources/observability-as-code/provision-resources",
          children: "documentation"
        }
      ),
      "."
    ] }) }),
    !hasRequiredFeatures ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Box, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, { fill: "outline", onClick: onSetupFeatures, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.features-list.actions.set-up-required-feature-toggles", children: "Set up required feature toggles" }) }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "row", alignItems: "center", gap: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_RepositoryTypeCards__WEBPACK_IMPORTED_MODULE_11__.RepositoryTypeCards, {}) })
  ] });
};
const getStyles = (theme) => {
  return {
    featuresList: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      listStyleType: "none",
      paddingLeft: 0,
      marginLeft: theme.spacing(-1),
      "& li": {
        position: "relative",
        paddingLeft: theme.spacing(4),
        marginBottom: theme.spacing(1),
        "&:before": {
          content: '"\u2713"',
          position: "absolute",
          left: theme.spacing(1),
          top: "0",
          color: theme.colors.text.secondary,
          fontWeight: theme.typography.fontWeightBold
        }
      }
    })
  };
};


/***/ }),

/***/ "./public/app/features/provisioning/GettingStarted/GettingStarted.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GettingStarted)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var _img_provisioning_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/provisioning/img/provisioning.svg");
/* harmony import */ var _EnhancedFeatures__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/provisioning/GettingStarted/EnhancedFeatures.tsx");
/* harmony import */ var _FeaturesList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/provisioning/GettingStarted/FeaturesList.tsx");
/* harmony import */ var _SetupModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/provisioning/GettingStarted/SetupModal.tsx");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/provisioning/GettingStarted/features.ts");














const featureIni = `# In your custom.ini file

[feature_toggles]
provisioning = true
kubernetesDashboards = true ; use k8s from browser
`;
const ngrokExample = `ngrok http 3000

Help shape K8s Bindings https://ngrok.com/new-features-update?ref=k8s

Session Status                online
Account                       Roberto Jim\xE9nez S\xE1nchez (Plan: Free)
Version                       3.18.4
Region                        Europe (eu)
Latency                       44ms
Web Interface                 http://127.0.0.1:4040
Forwarding                    https://d60d-83-33-235-27.ngrok-free.app -> http://localhost:3000
Connections                   ttl     opn     rt1     rt5     p50     p90
                              50      2       0.00    0.00    83.03   90.56

HTTP Requests
-------------

09:18:46.147 CET             GET  /favicon.ico                   302 Found
09:18:46.402 CET             GET  /login`;
const rootUrlExample = `[server]
root_url = https://d60d-83-33-235-27.ngrok-free.app`;
const getModalContent = (setupType) => {
  switch (setupType) {
    case "public-access":
      return {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("provisioning.getting-started.modal-title-set-up-public-access", "Set up public access"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "provisioning.getting-started.modal-description-public-access",
          "Set up public access to your Grafana instance to enable GitHub integration"
        ),
        steps: [
          {
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("provisioning.getting-started.step-title-start-ngrok", "Start ngrok for temporary public access"),
            description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
              "provisioning.getting-started.step-description-start-ngrok",
              "Run this command to create a secure tunnel to your local Grafana:"
            ),
            code: "ngrok http 3000"
          },
          {
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("provisioning.getting-started.step-title-copy-url", "Copy your public URL"),
            description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
              "provisioning.getting-started.step-description-copy-url",
              "From the ngrok output, copy the https:// forwarding URL that looks like this:"
            ),
            code: ngrokExample,
            copyCode: false
          },
          {
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
              "provisioning.getting-started.step-title-update-grafana-config",
              "Update your Grafana configuration"
            ),
            description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
              "provisioning.getting-started.step-description-update-grafana-config",
              "Add this to your custom.ini file, replacing the URL with your actual ngrok URL:"
            ),
            code: rootUrlExample
          }
        ]
      };
    case "required-features":
      return {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("provisioning.getting-started.modal-title-set-up-required-features", "Set up required features"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "provisioning.getting-started.modal-description-required-features",
          "Enable required Grafana features for provisioning"
        ),
        steps: [
          {
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
              "provisioning.getting-started.step-title-enable-feature-toggles",
              "Enable Required Feature Toggles"
            ),
            description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
              "provisioning.getting-started.step-description-enable-feature-toggles",
              "Add these settings to your custom.ini file to enable necessary features:"
            ),
            code: featureIni
          }
        ]
      };
    default:
      return {
        title: "",
        description: "",
        steps: []
      };
  }
};
function GettingStarted({ items }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const settingsArg = _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.featureToggles.provisioning ? void 0 : _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_2__.skipToken;
  const settingsQuery = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_9__.useGetFrontendSettingsQuery)(settingsArg, {
    refetchOnMountOrArgChange: true
  });
  const legacyStorage = settingsQuery.data?.legacyStorage;
  const hasItems = Boolean(settingsQuery.data?.items?.length);
  const { hasPublicAccess, hasImageRenderer, hasRequiredFeatures } = (0,_features__WEBPACK_IMPORTED_MODULE_14__.getConfigurationStatus)();
  const [showInstructionsModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [setupType, setSetupType] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    legacyStorage && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert,
      {
        severity: "info",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "provisioning.getting-started.title-setting-connection-could-cause-temporary-outage",
          "Setting up this connection could cause a temporary outage"
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "provisioning.getting-started.alert-temporary-outage", children: "When you connect your whole instance, dashboards will be unavailable while running the migration. We recommend warning your users before starting the process." })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "column", gap: 6, wrap: "wrap", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 10, alignItems: "center", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.imageContainer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: _img_provisioning_svg__WEBPACK_IMPORTED_MODULE_10__, className: styles.image, alt: "" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _FeaturesList__WEBPACK_IMPORTED_MODULE_12__.FeaturesList,
          {
            hasRequiredFeatures,
            onSetupFeatures: () => {
              setSetupType("required-features");
              setShowModal(true);
            }
          }
        )
      ] }),
      (!hasPublicAccess || !hasImageRenderer) && hasItems && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _EnhancedFeatures__WEBPACK_IMPORTED_MODULE_11__.EnhancedFeatures,
        {
          hasPublicAccess,
          hasImageRenderer,
          onSetupPublicAccess: () => {
            setSetupType("public-access");
            setShowModal(true);
          }
        }
      )
    ] }),
    showInstructionsModal && setupType && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _SetupModal__WEBPACK_IMPORTED_MODULE_13__.SetupModal,
      {
        ...getModalContent(setupType),
        isOpen: showInstructionsModal,
        onDismiss: () => setShowModal(false)
      }
    )
  ] });
}
function getStyles(theme) {
  return {
    imageContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: 350,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`
    }),
    image: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      borderRadius: theme.shape.radius.default,
      width: "100%",
      height: "100%"
    })
  };
}


/***/ }),

/***/ "./public/app/features/provisioning/GettingStarted/GettingStartedPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GettingStartedPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _utils_isOnPrem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/provisioning/utils/isOnPrem.ts");
/* harmony import */ var _GettingStarted__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/provisioning/GettingStarted/GettingStarted.tsx");







function GettingStartedPage({ items }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__.Page,
    {
      navId: "provisioning",
      pageNav: {
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("provisioning.getting-started-page.header", "Provisioning"),
        subTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
          "provisioning.getting-started-page.subtitle-provisioning-feature",
          "View and manage your provisioning connections"
        )
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__.Page.Contents, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", gap: 3, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Banner, {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GettingStarted__WEBPACK_IMPORTED_MODULE_8__["default"], { items })
      ] }) })
    }
  );
}
function Banner() {
  if (!(0,_utils_isOnPrem__WEBPACK_IMPORTED_MODULE_7__.isOnPrem)()) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, { severity: "info", title: "", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "provisioning.banner.message", children: [
    "This feature is currently under active development. For the best experience and latest improvements, we recommend using the",
    " ",
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TextLink, { href: "https://grafana.com/grafana/download/nightly", external: true, children: "nightly build" }),
    " ",
    "of Grafana."
  ] }) }) });
}


/***/ }),

/***/ "./public/app/features/provisioning/GettingStarted/IconCircle.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconCircle: () => (/* binding */ IconCircle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/themes/colorManipulator.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





const IconCircle = ({ icon, color }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles, color);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.iconCircle, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: icon, size: "xl" }) });
};
function getStyles(theme, color) {
  const resolvedColor = theme.visualization.getColorByName(color);
  return {
    iconCircle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      borderRadius: theme.shape.radius.circle,
      padding: theme.spacing(1),
      color: resolvedColor,
      backgroundColor: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.colorManipulator.alpha(resolvedColor, 0.2)
    })
  };
}


/***/ }),

/***/ "./public/app/features/provisioning/GettingStarted/SetupModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetupModal: () => (/* binding */ SetupModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _SetupStep__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/provisioning/GettingStarted/SetupStep.tsx");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/provisioning/GettingStarted/Sidebar.tsx");








const SetupModal = ({ title, description, steps, isOpen, onDismiss }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;
  const stepTitles = steps.map((step) => step.title);
  const handleNext = () => !isLastStep && setCurrentStep(currentStep + 1);
  const handlePrevious = () => !isFirstStep && setCurrentStep(currentStep - 1);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Modal, { isOpen, title, onDismiss, className: styles.modal, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "column", gap: 4, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { variant: "body", color: "secondary", children: description }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "row", height: "100%", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Sidebar__WEBPACK_IMPORTED_MODULE_10__.Sidebar, { steps: stepTitles, currentStep, onStepClick: setCurrentStep }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.contentWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SetupStep__WEBPACK_IMPORTED_MODULE_9__.SetupStep, { step: steps[currentStep] }) })
      ] })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Modal.ButtonRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "row", justifyContent: "flex-end", gap: 2, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { variant: "secondary", onClick: handlePrevious, disabled: isFirstStep, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.setup-modal.previous", children: "Previous" }) }),
      isLastStep ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { variant: "primary", onClick: onDismiss, icon: "check-circle", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.setup-modal.done", children: "Done" }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { variant: "primary", onClick: handleNext, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.setup-modal.next", children: "Next" }) })
    ] }) })
  ] });
};
const getStyles = (theme) => ({
  modal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "1100px",
    maxWidth: "95%"
  }),
  description: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: theme.spacing(3),
    padding: theme.spacing(0, 1)
  }),
  contentWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    flex: 1,
    overflowY: "auto",
    minWidth: 0,
    padding: theme.spacing(2),
    borderLeft: `1px solid ${theme.colors.border.weak}`
  }),
  footer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.colors.border.weak}`,
    marginTop: theme.spacing(2)
  })
});


/***/ }),

/***/ "./public/app/features/provisioning/GettingStarted/SetupStep.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetupStep: () => (/* binding */ SetupStep)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Layout.tsx");
/* harmony import */ var _Shared_CodeBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/provisioning/Shared/CodeBlock.tsx");




const SetupStep = ({ step }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Text, { element: "h3", variant: "h4", children: step?.title }),
    step.description && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Container, { margin: "sm", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Text, { element: "p", children: step.description }) }),
    step.code && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_CodeBlock__WEBPACK_IMPORTED_MODULE_3__.CodeBlock, { code: step.code, copyCode: step.copyCode })
  ] });
};


/***/ }),

/***/ "./public/app/features/provisioning/GettingStarted/Sidebar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sidebar: () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _SidebarItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/provisioning/GettingStarted/SidebarItem.tsx");




const Sidebar = ({ steps, currentStep, onStepClick }) => {
  const stepItemStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(_SidebarItem__WEBPACK_IMPORTED_MODULE_4__.getStyles);
  if (steps.length === 0 || steps.length === 1) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Box, { width: "260px", padding: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { direction: "column", gap: 1, children: steps.map((step, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _SidebarItem__WEBPACK_IMPORTED_MODULE_4__.SidebarItem,
    {
      step,
      index,
      currentStep,
      onStepClick,
      styles: stepItemStyles
    },
    index
  )) }) });
};


/***/ }),

/***/ "./public/app/features/provisioning/GettingStarted/SidebarItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarItem: () => (/* binding */ SidebarItem),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");





const SidebarItem = ({ step, index, currentStep, onStepClick, styles }) => {
  const isCompleted = index < currentStep;
  const isCurrent = index === currentStep;
  const isPending = index > currentStep;
  const getStepStatus = () => {
    if (isCompleted) {
      return {
        icon: "check-circle",
        color: "success",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.sidebar-item.label-completed-step", "Completed step")
      };
    }
    if (isCurrent) {
      return {
        icon: "circle",
        color: "primary",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.sidebar-item.label-current-step", "Current step")
      };
    }
    return {
      icon: "circle",
      color: "secondary",
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.sidebar-item.label-pending-step", "Pending step")
    };
  };
  const { icon, color, label } = getStepStatus();
  const handleClick = () => onStepClick(index);
  const handleIconClick = (e) => {
    e.stopPropagation();
    onStepClick(index);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card,
    {
      noMargin: true,
      className: `${styles.stepItem} ${isCurrent ? styles.activeStep : ""} ${styles.plainCard}`,
      onClick: handleClick,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "row", alignItems: "center", gap: 2, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton,
          {
            name: icon,
            size: "sm",
            variant: isPending ? "secondary" : "primary",
            color,
            "aria-label": label,
            onClick: handleIconClick
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { color: isCurrent ? "primary" : "secondary", weight: isCurrent ? "medium" : "regular", children: step })
      ] })
    }
  );
};
const getStyles = (theme) => ({
  stepItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(1),
    cursor: "pointer",
    "&:hover": {
      background: theme.colors.action.hover
    }
  }),
  activeStep: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.primary.text
  }),
  plainCard: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    background: "transparent",
    border: "none",
    boxShadow: "none"
  })
});


/***/ }),

/***/ "./public/app/features/provisioning/HomePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabsBar.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/Tab.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabContent.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _GettingStarted_GettingStarted__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/provisioning/GettingStarted/GettingStarted.tsx");
/* harmony import */ var _GettingStarted_GettingStartedPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/provisioning/GettingStarted/GettingStartedPage.tsx");
/* harmony import */ var _Shared_ConnectRepositoryButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/provisioning/Shared/ConnectRepositoryButton.tsx");
/* harmony import */ var _Shared_RepositoryList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/provisioning/Shared/RepositoryList.tsx");
/* harmony import */ var _components_InlineSecureValueWarning__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/provisioning/components/InlineSecureValueWarning.tsx");
/* harmony import */ var _hooks_useRepositoryList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/provisioning/hooks/useRepositoryList.ts");













var TabSelection = /* @__PURE__ */ ((TabSelection2) => {
  TabSelection2["Repositories"] = "repositories";
  TabSelection2["GettingStarted"] = "getting-started";
  return TabSelection2;
})(TabSelection || {});
function HomePage() {
  const [items, isLoading] = (0,_hooks_useRepositoryList__WEBPACK_IMPORTED_MODULE_16__.useRepositoryList)({ watch: true });
  const settings = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_9__.useGetFrontendSettingsQuery)();
  const [deleteAll] = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_9__.useDeletecollectionRepositoryMutation)();
  const [showDeleteModal, setShowDeleteModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("repositories" /* Repositories */);
  const tabInfo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => [
      {
        value: "repositories" /* Repositories */,
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.home-page.tab-repositories", "Repositories"),
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.home-page.tab-repositories-title", "List of repositories")
      },
      {
        value: "getting-started" /* GettingStarted */,
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.home-page.tab-getting-started", "Getting started"),
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.home-page.tab-getting-started-title", "Getting started")
      }
    ],
    []
  );
  if (!items?.length && !isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GettingStarted_GettingStartedPage__WEBPACK_IMPORTED_MODULE_12__["default"], { items: items ?? [] });
  }
  const onConfirmDelete = () => {
    deleteAll({});
    setShowDeleteModal(false);
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case "repositories" /* Repositories */:
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_RepositoryList__WEBPACK_IMPORTED_MODULE_14__.RepositoryList, { items: items ?? [] });
      case "getting-started" /* GettingStarted */:
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GettingStarted_GettingStarted__WEBPACK_IMPORTED_MODULE_11__["default"], { items: items ?? [] });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_10__.Page,
    {
      navId: "provisioning",
      subTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.home-page.subtitle", "View and manage your configured repositories"),
      actions: activeTab === "repositories" /* Repositories */ && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_ConnectRepositoryButton__WEBPACK_IMPORTED_MODULE_13__.ConnectRepositoryButton, { items }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_10__.Page.Contents, { isLoading, children: [
        settings.data?.legacyStorage && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Alert,
          {
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.home-page.title-legacy-storage-detected", "Legacy storage detected"),
            severity: "error",
            buttonContent: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.home-page.remove-all-configured-repositories", children: "Remove all configured repositories" }),
            onRemove: () => {
              setShowDeleteModal(true);
            },
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.home-page.configured-repositories-while-running-legacy-storage", children: "Configured repositories will not work while running legacy storage." })
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_InlineSecureValueWarning__WEBPACK_IMPORTED_MODULE_15__.InlineSecureValueWarning, { items }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ConfirmModal,
          {
            isOpen: showDeleteModal,
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
              "provisioning.home-page.title-delete-all-configured-repositories",
              "Delete all configured repositories"
            ),
            body: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
              "provisioning.home-page.confirm-delete-repositories",
              "Are you sure you want to delete all configured repositories? This action cannot be undone."
            ),
            confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.home-page.button-delete-repositories", "Delete repositories"),
            onConfirm: onConfirmDelete,
            onDismiss: () => setShowDeleteModal(false)
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 2, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TabsBar, { children: tabInfo.map((t2) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tab,
            {
              label: t2.label,
              active: activeTab === t2.value,
              onChangeTab: () => setActiveTab(t2.value),
              title: t2.title
            },
            t2.value
          )) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TabContent, { children: renderTabContent() })
        ] })
      ] })
    }
  );
}


/***/ }),

/***/ "./public/app/features/provisioning/Repository/RepositoryCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RepositoryCard: () => (/* binding */ RepositoryCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var _Shared_RepoIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/provisioning/Shared/RepoIcon.tsx");
/* harmony import */ var _Shared_StatusBadge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/provisioning/Shared/StatusBadge.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/provisioning/constants.ts");
/* harmony import */ var _utils_repository__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/provisioning/utils/repository.ts");
/* harmony import */ var _SyncRepository__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/provisioning/Repository/SyncRepository.tsx");










function RepositoryCard({ repository }) {
  const isReadOnlyRepo = (0,_utils_repository__WEBPACK_IMPORTED_MODULE_13__.getIsReadOnlyWorkflows)(repository.spec?.workflows);
  const { metadata, spec, status } = repository;
  const name = metadata?.name ?? "";
  const getRepositoryMeta = () => {
    const meta = [];
    if (spec?.type === "github") {
      const { url = "", branch } = spec.github ?? {};
      const branchUrl = branch ? `${url}/tree/${branch}` : url;
      meta.push(
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TextLink, { external: true, href: branchUrl, children: branchUrl }, "link")
      );
      if (status?.webhook?.id) {
        const webhookUrl = `${url}/settings/hooks/${status.webhook.id}`;
        meta.push(
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 1, direction: "row", alignItems: "center", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TextLink, { href: webhookUrl, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "provisioning.repository-card.get-repository-meta.webhook", children: "Webhook" }) }, "webhook"),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "check", className: "text-success" })
          ] })
        );
      }
    } else if (spec?.type === "local") {
      meta.push(
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { variant: "bodySmall", children: spec.local?.path ?? "" }, "path")
      );
    }
    return meta;
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Card, { noMargin: true, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Card.Figure, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_RepoIcon__WEBPACK_IMPORTED_MODULE_10__.RepoIcon, { type: spec?.type }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Card.Heading, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 2, direction: "row", alignItems: "center", children: [
      spec?.title && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { variant: "h3", children: spec.title }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_StatusBadge__WEBPACK_IMPORTED_MODULE_11__.StatusBadge, { repo: repository }),
      isReadOnlyRepo && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Badge, { color: "darkgrey", text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("provisioning.repository-card.read-only-badge", "Read only") })
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Card.Description, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 2, direction: "column", children: [
      spec?.description && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { children: spec.description }),
      status?.stats?.length && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 1, direction: "row", wrap: true, children: status.stats.map((stat, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton,
        {
          fill: "outline",
          size: "md",
          variant: "secondary",
          href: getListURL(repository, stat),
          children: [
            stat.count,
            " ",
            stat.resource
          ]
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Card.Meta, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 2, direction: "row", wrap: true, children: getRepositoryMeta() }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Card.Actions, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 1, direction: "row", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, { icon: "eye", href: `${_constants__WEBPACK_IMPORTED_MODULE_12__.PROVISIONING_URL}/${name}`, variant: "primary", size: "md", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "provisioning.repository-card.view", children: "View" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SyncRepository__WEBPACK_IMPORTED_MODULE_14__.SyncRepository, { repository }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton,
        {
          variant: "secondary",
          icon: "cog",
          href: `${_constants__WEBPACK_IMPORTED_MODULE_12__.PROVISIONING_URL}/${name}/edit`,
          size: "md",
          onClick: () => {
            (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.reportInteraction)("grafana_provisioning_repository_settings_opened", {
              repositoryName: name,
              repositoryType: spec?.type ?? "unknown"
            });
          },
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "provisioning.repository-card.settings", children: "Settings" })
        }
      )
    ] }) })
  ] }, name);
}
function getListURL(repo, stats) {
  if (stats.resource === "playlists") {
    return "/playlists";
  }
  if (repo.spec?.sync.target === "folder") {
    return `/dashboards/f/${repo.metadata?.name}`;
  }
  return "/dashboards";
}


/***/ }),

/***/ "./public/app/features/provisioning/Repository/SyncRepository.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SyncRepository: () => (/* binding */ SyncRepository)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/provisioning/constants.ts");
/* harmony import */ var _useGetActiveJob__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/provisioning/useGetActiveJob.ts");










function SyncRepository({ repository }) {
  const [createJob, jobQuery] = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_7__.useCreateRepositoryJobsMutation)();
  const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const navigate = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  const name = repository.metadata?.name;
  const activeJob = (0,_useGetActiveJob__WEBPACK_IMPORTED_MODULE_9__.useGetActiveJob)(name);
  const onClick = () => {
    if (!name) {
      return;
    }
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)("grafana_provisioning_repository_pull_triggered", {
      repositoryName: name,
      repositoryType: repository.spec?.type ?? "unknown",
      target: repository.spec?.sync.target ?? "unknown"
    });
    createJob({
      name,
      jobSpec: {
        pull: {
          incremental: false
          // will queue a full resync job
        }
      }
    });
    setIsModalOpen(false);
  };
  const isHealthy = Boolean(repository.status?.health.healthy);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
      {
        icon: "cloud-download",
        variant: "secondary",
        tooltip: isHealthy ? void 0 : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.sync-repository.tooltip-unhealthy-repository", "Unable to pull an unhealthy repository"),
        disabled: jobQuery.isLoading || activeJob?.status?.state === "working" || !name || !isHealthy,
        onClick,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.sync-repository.pull", children: "Pull" })
      }
    ),
    !repository.spec?.sync.enabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ConfirmModal,
      {
        isOpen: isModalOpen,
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.sync-repository.title-pull-not-enabled", "Pull is not enabled"),
        body: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.sync-repository.body-edit-configuration", "Edit the configuration"),
        confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.sync-repository.button-edit", "Edit"),
        onConfirm: () => navigate(`${_constants__WEBPACK_IMPORTED_MODULE_8__.PROVISIONING_URL}/${name}/edit`),
        onDismiss: () => setIsModalOpen(false)
      }
    )
  ] });
}


/***/ }),

/***/ "./public/app/features/provisioning/Shared/CodeBlock.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeBlock: () => (/* binding */ CodeBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/ClipboardButton/ClipboardButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





const CodeBlock = ({ code, copyCode = true }) => {
  const lineCount = code.split("\n").length;
  const useMinHeight = lineCount * 24 <= 42;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
    copyCode && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ClipboardButton,
      {
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.code-block.aria-label-copy", "Copy code to clipboard"),
        className: styles.copyButton,
        variant: "secondary",
        size: "sm",
        icon: "copy",
        getText: () => code
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.CodeEditor,
      {
        value: code,
        language: "ini",
        showLineNumbers: false,
        showMiniMap: false,
        height: useMinHeight ? "42px" : `${Math.min(lineCount * 24, 300)}px`,
        readOnly: true,
        monacoOptions: {
          scrollBeyondLastLine: false,
          scrollbar: {
            vertical: useMinHeight ? "hidden" : "auto",
            horizontal: "auto"
          }
        }
      }
    )
  ] });
};
const getStyles = (theme) => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "relative",
    margin: `${theme.spacing(2)} 0`,
    border: `1px solid ${theme.colors.border.medium}`
  }),
  copyButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    zIndex: 1
  })
});


/***/ }),

/***/ "./public/app/features/provisioning/Shared/ConnectRepositoryButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectRepositoryButton: () => (/* binding */ ConnectRepositoryButton),
/* harmony export */   getConfigureRepoTooltip: () => (/* binding */ getConfigureRepoTooltip)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/Menu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Dropdown/Dropdown.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/provisioning/constants.ts");
/* harmony import */ var _utils_checkSyncSettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/provisioning/utils/checkSyncSettings.ts");
/* harmony import */ var _utils_repositoryTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/provisioning/utils/repositoryTypes.ts");









function ConnectRepositoryButton({ items }) {
  const state = (0,_utils_checkSyncSettings__WEBPACK_IMPORTED_MODULE_10__.checkSyncSettings)(items);
  const navigate = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  const { data: frontendSettings } = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_8__.useGetFrontendSettingsQuery)();
  const isButtonDisabled = state.instanceConnected || state.maxReposReached;
  const availableTypes = frontendSettings?.availableRepositoryTypes || _constants__WEBPACK_IMPORTED_MODULE_9__.DEFAULT_REPOSITORY_TYPES;
  const { orderedConfigs } = (0,_utils_repositoryTypes__WEBPACK_IMPORTED_MODULE_11__.getOrderedRepositoryConfigs)(availableTypes);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Dropdown,
    {
      overlay: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Menu, { children: orderedConfigs.map((config) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Menu.Item,
          {
            icon: config.icon,
            label: config.label,
            onClick: () => {
              navigate(`${_constants__WEBPACK_IMPORTED_MODULE_9__.CONNECT_URL}/${config.type}`);
            }
          },
          config.type
        );
      }) }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button,
        {
          variant: "primary",
          disabled: isButtonDisabled,
          tooltip: getConfigureRepoTooltip({
            instanceConnected: state.instanceConnected,
            maxReposReached: state.maxReposReached,
            count: state.repoCount
          }),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { alignItems: "center", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.connect-repository-button.configure", children: "Configure" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "angle-down" })
          ] })
        }
      )
    }
  );
}
function getConfigureRepoTooltip({
  instanceConnected,
  maxReposReached,
  count
}) {
  if (instanceConnected) {
    return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
      "provisioning.connect-repository-button.instance-fully-managed-tooltip",
      "Configuration is disabled because this instance is fully managed"
    );
  }
  if (maxReposReached) {
    return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
      "provisioning.connect-repository-button.repository-limit-reached-tooltip",
      "Repository limit reached {{count}}",
      {
        count
      }
    );
  }
  return "";
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

/***/ "./public/app/features/provisioning/Shared/RepositoryList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RepositoryList: () => (/* binding */ RepositoryList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/FilterInput/FilterInput.tsx");
/* harmony import */ var _Repository_RepositoryCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/provisioning/Repository/RepositoryCard.tsx");
/* harmony import */ var _Wizard_hooks_useResourceStats__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/provisioning/Wizard/hooks/useResourceStats.ts");
/* harmony import */ var _hooks_useIsProvisionedInstance__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/provisioning/hooks/useIsProvisionedInstance.ts");
/* harmony import */ var _utils_checkSyncSettings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/provisioning/utils/checkSyncSettings.ts");









function RepositoryList({ items }) {
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const isProvisionedInstance = (0,_hooks_useIsProvisionedInstance__WEBPACK_IMPORTED_MODULE_11__.useIsProvisionedInstance)();
  const { resourceCount, managedCount, unmanagedCount } = (0,_Wizard_hooks_useResourceStats__WEBPACK_IMPORTED_MODULE_10__.useResourceStats)(items[0].metadata?.name);
  const filteredItems = items.filter((item) => item.metadata?.name?.includes(query));
  const { instanceConnected } = (0,_utils_checkSyncSettings__WEBPACK_IMPORTED_MODULE_12__.checkSyncSettings)(items);
  const getResourceCountSection = () => {
    if (isProvisionedInstance) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Box, { marginBottom: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { alignItems: "center", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "check", color: "green" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.folder-repository-list.all-resources-managed", count: resourceCount, children: [
          "All ",
          { count: resourceCount },
          " resources are managed"
        ] })
      ] }) });
    }
    if (filteredItems.length) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Alert, { title: "", severity: "info", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans,
          {
            i18nKey: "provisioning.folder-repository-list.partial-managed",
            values: { managedCount, resourceCount },
            children: [
              { managedCount },
              "/",
              { resourceCount },
              " resources managed by Git sync."
            ]
          }
        ),
        unmanagedCount > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          " ",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.folder-repository-list.unmanaged-resources", count: unmanagedCount, children: [
            { count: unmanagedCount },
            " resources aren't managed by Git sync."
          ] })
        ] })
      ] }) });
    }
    return null;
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    getResourceCountSection(),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "column", gap: 3, children: [
      !instanceConnected && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.FilterInput,
        {
          placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.folder-repository-list.placeholder-search", "Search"),
          value: query,
          onChange: setQuery
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "column", gap: 2, children: filteredItems.length ? filteredItems.map((item) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Repository_RepositoryCard__WEBPACK_IMPORTED_MODULE_9__.RepositoryCard, { repository: item }, item.metadata?.name)) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.EmptyState,
        {
          variant: "not-found",
          message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
            "provisioning.folder-repository-list.no-results-matching-your-query",
            "No results matching your query"
          )
        }
      ) })
    ] })
  ] });
}


/***/ }),

/***/ "./public/app/features/provisioning/Shared/RepositoryTypeCards.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RepositoryTypeCards: () => (/* binding */ RepositoryTypeCards)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/provisioning/constants.ts");
/* harmony import */ var _utils_repositoryTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/provisioning/utils/repositoryTypes.ts");
/* harmony import */ var _RepoIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/provisioning/Shared/RepoIcon.tsx");









function RepositoryTypeCards() {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  const { data: frontendSettings } = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_7__.useGetFrontendSettingsQuery)();
  const availableTypes = frontendSettings?.availableRepositoryTypes ?? [];
  const { gitProviders, otherProviders } = (0,_utils_repositoryTypes__WEBPACK_IMPORTED_MODULE_9__.getOrderedRepositoryConfigs)(availableTypes);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "column", gap: 2, children: [
    gitProviders.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "column", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { variant: "bodySmall", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.repository-type-cards.choose-provider", children: "Choose a provider:" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "row", gap: 1, wrap: true, children: gitProviders.map((config) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Card, { href: `${_constants__WEBPACK_IMPORTED_MODULE_8__.CONNECT_URL}/${config.type}`, className: styles.card, noMargin: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Card.Heading, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { gap: 2, alignItems: "center", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RepoIcon__WEBPACK_IMPORTED_MODULE_10__.RepoIcon, { type: config.type }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans,
          {
            i18nKey: "provisioning.repository-type-cards.configure-with-provider",
            values: { provider: config.label },
            children: [
              "Configure with ",
              "{{ provider }}"
            ]
          }
        )
      ] }) }) }, config.type)) })
    ] }),
    otherProviders.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "column", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { variant: "bodySmall", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.repository-type-cards.provider-not-listed", children: "If your provider is not listed:" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "row", gap: 1, wrap: true, children: otherProviders.map((config) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Card, { href: `${_constants__WEBPACK_IMPORTED_MODULE_8__.CONNECT_URL}/${config.type}`, className: styles.card, noMargin: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Card.Heading, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { gap: 2, alignItems: "center", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RepoIcon__WEBPACK_IMPORTED_MODULE_10__.RepoIcon, { type: config.type }),
        config.type === "local" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.repository-type-cards.configure-file", children: "Configure file provisioning" }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans,
          {
            i18nKey: "provisioning.repository-type-cards.configure-with-provider",
            values: { provider: config.label },
            children: [
              "Configure with ",
              "{{ provider }}"
            ]
          }
        )
      ] }) }) }, config.type)) })
    ] })
  ] });
}
function getStyles() {
  return {
    card: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: 220
    })
  };
}


/***/ }),

/***/ "./public/app/features/provisioning/Shared/StatusBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatusBadge: () => (/* binding */ StatusBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/provisioning/constants.ts");







function getBadgeConfig(repo) {
  if (repo.metadata?.deletionTimestamp) {
    return {
      color: "red",
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.status-badge.deleting", "Deleting"),
      icon: "spinner"
    };
  }
  if (!repo.spec?.sync?.enabled) {
    return {
      color: "orange",
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.status-badge.automatic-pulling-disabled", "Automatic pulling disabled"),
      icon: "info-circle"
    };
  }
  if (!repo.status?.sync?.state?.length) {
    return {
      color: "darkgrey",
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.status-badge.pending", "Pending"),
      icon: "spinner",
      tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.status-badge.waiting-for-health-check", "Waiting for health check to run")
    };
  }
  switch (repo.status?.sync?.state) {
    case "success":
      return {
        icon: "check",
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.status-badge.up-to-date", "Up-to-date"),
        color: "green"
      };
    case "warning":
      return {
        color: "orange",
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.status-badge.warning", "Warning"),
        icon: "exclamation-triangle"
      };
    case "working":
    case "pending":
      return {
        color: "darkgrey",
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.status-badge.pulling", "Pulling"),
        icon: "spinner"
      };
    case "error":
      return {
        color: "red",
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.status-badge.error", "Error"),
        icon: "exclamation-triangle"
      };
    default:
      return {
        color: "purple",
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.status-badge.unknown", "Unknown"),
        icon: "exclamation-triangle"
      };
  }
}
function StatusBadge({ repo, displayOnly = false }) {
  const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (displayOnly || !repo?.metadata?.name) {
      return;
    }
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.push(`${_constants__WEBPACK_IMPORTED_MODULE_5__.PROVISIONING_URL}/${repo.metadata.name}/?tab=overview`);
  }, [repo?.metadata?.name, displayOnly]);
  if (!repo) {
    return null;
  }
  const { color, text, icon, tooltip } = getBadgeConfig(repo);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Badge,
    {
      color,
      icon,
      text,
      style: { cursor: displayOnly ? "default" : "pointer" },
      tooltip,
      onClick: handleClick
    }
  );
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

/***/ "./public/app/features/provisioning/hooks/useRepositoryList.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRepositoryList: () => (/* binding */ useRepositoryList)
/* harmony export */ });
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");


function useRepositoryList(options = {}) {
  const query = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_0__.useListRepositoryQuery)(options);
  const collator = new Intl.Collator(void 0, { numeric: true });
  const sortedItems = query.data?.items?.slice().sort((a, b) => {
    const titleA = a.spec?.title ?? "";
    const titleB = b.spec?.title ?? "";
    return collator.compare(titleA, titleB);
  });
  return [sortedItems, query.isLoading];
}


/***/ }),

/***/ "./public/app/features/provisioning/img/provisioning.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/provisioning.d25529e1.svg";

/***/ }),

/***/ "./public/app/features/provisioning/useGetActiveJob.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useGetActiveJob: () => (/* binding */ useGetActiveJob)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs");
/* harmony import */ var _api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");



function useGetActiveJob(name) {
  const activeQuery = (0,_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_1__.useListJobQuery)(
    name ? {
      fieldSelector: `metadata.name=${name}`,
      watch: true
    } : _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.skipToken
  );
  return activeQuery?.data?.items?.[0];
}


/***/ }),

/***/ "./public/app/features/provisioning/utils/checkSyncSettings.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkSyncSettings: () => (/* binding */ checkSyncSettings)
/* harmony export */ });

function checkSyncSettings(repos) {
  if (!repos?.length) {
    return {
      instanceConnected: false,
      folderConnected: false,
      repoCount: 0,
      maxReposReached: false
    };
  }
  return {
    instanceConnected: repos.some((item) => item.spec?.sync.target === "instance"),
    folderConnected: repos.some((item) => item.spec?.sync.target === "folder"),
    maxReposReached: Boolean((repos ?? []).length >= 10),
    repoCount: repos.length
  };
}


/***/ }),

/***/ "./public/app/features/provisioning/utils/isOnPrem.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isOnPrem: () => (/* binding */ isOnPrem)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");


function isOnPrem() {
  const namespace = _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.namespace;
  return !namespace.startsWith("stacks-");
}


/***/ })

}]);
//# sourceMappingURL=RepositoryListPage.f2edbba21eda32d68a5f.js.map