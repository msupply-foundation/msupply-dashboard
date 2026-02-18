"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertingRedirectToRule"],{

/***/ "./public/app/features/alerting/unified/RedirectToRuleViewer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RedirectToRuleViewer: () => (/* binding */ RedirectToRuleViewer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-use/esm/useLocation.js");
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-alerting/src/grafana/rules/components/labels/AlertLabels.tsx");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/RuleViewerLayout.tsx");
/* harmony import */ var _hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRule.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/withPageErrorBoundary.tsx");
















const pageTitle = "Find rule";
const subUrl = _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.config.appSubUrl;
function useRuleFindParams() {
  const location = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])();
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const segments = location.pathname?.replace(subUrl, "").split("/") ?? [];
    const name = (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_18__.unescapePathSeparators)(decodeURIComponent((0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_18__.unescapePathSeparators)(segments[3])));
    const sourceName = decodeURIComponent(segments[2]);
    const searchParams = new URLSearchParams(location.search);
    return {
      name,
      sourceName,
      namespace: searchParams.get("namespace") ?? void 0,
      group: searchParams.get("group") ?? void 0
    };
  }, [location]);
}
function RedirectToRuleViewer() {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.useStyles2)(getStyles);
  const { name, sourceName, namespace, group } = useRuleFindParams();
  const {
    error,
    loading,
    rules = []
  } = (0,_hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_15__.useCloudCombinedRulesMatching)(name, sourceName, { namespace, groupName: group });
  if (!name || !sourceName) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__.Navigate, { replace: true, to: "/notfound" });
  }
  if (error) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_14__.RuleViewerLayout, { title: pageTitle, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
          "alerting.redirect-to-rule-viewer.title-failed-to-load",
          "Failed to load rules from {{sourceName}}",
          { sourceName }
        ),
        children: (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.isFetchError)(error) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", { className: styles.errorMessage, children: [
          error.message,
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})
        ] })
      }
    ) });
  }
  if (loading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_14__.RuleViewerLayout, { title: pageTitle, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.redirect-to-rule-viewer.text-loading-rule", "Loading rule...") }) });
  }
  const rulesSource = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_16__.getRulesSourceByName)(sourceName);
  if (!rulesSource) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_14__.RuleViewerLayout, { title: pageTitle, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Alert, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.redirect-to-rule-viewer.title-could-not-view-rule", "Could not view rule"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("details", { className: styles.errorMessage, children: `Could not find data source with name: ${sourceName}.` }) }) });
  }
  if (rules.length === 1) {
    const [rule] = rules;
    const to = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_17__.createViewLink)(rulesSource, rule, "/alerting/list").replace(subUrl, "");
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__.Navigate, { replace: true, to });
  }
  if (rules.length === 0) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_14__.RuleViewerLayout, { title: pageTitle, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { "data-testid": "no-rules", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.redirect-to-rule-viewer.no-rules-found", values: { sourceName, name }, children: [
      "No rules in ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.param, children: "{{sourceName}}" }),
      " matched the name",
      " ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.param, children: "{{name}}" })
    ] }) }) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_14__.RuleViewerLayout, { title: pageTitle, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.redirect-to-rule-viewer.several-rules-found", values: { sourceName, name }, children: [
      "Several rules in ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.param, children: "{{sourceName}}" }),
      " matched the name",
      " ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.param, children: "{{name}}" }),
      ", please select the rule you want to view."
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.rules, children: rules.map((rule, index) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Card, { noMargin: true, href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_17__.createViewLink)(rulesSource, rule, "/alerting/list"), children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Card.Heading, { children: rule.name }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Card.Meta, { separator: "", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Icon, { name: "folder" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.namespace, children: `${rule.namespace.name} / ${rule.group.name}` })
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Card.Tags, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_5__.AlertLabels, { labels: rule.labels }) })
      ] }, `${rule.name}-${index}`);
    }) })
  ] });
}
function getStyles(theme) {
  return {
    param: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      fontStyle: "italic",
      color: theme.colors.text.secondary
    }),
    rules: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginTop: theme.spacing(2)
    }),
    namespace: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginLeft: theme.spacing(1)
    }),
    errorMessage: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      whiteSpace: "pre-wrap"
    })
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_19__.withPageErrorBoundary)(RedirectToRuleViewer));


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-viewer/RuleViewerLayout.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuleViewerLayout: () => (/* binding */ RuleViewerLayout),
/* harmony export */   RuleViewerLayoutContent: () => (/* binding */ RuleViewerLayoutContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");





const defaultPageNav = {
  icon: "bell",
  id: "alert-rule-view"
};
function RuleViewerLayout(props) {
  const { wrapInContent = true, children, title, renderTitle } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getPageStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__.Page, { pageNav: { ...defaultPageNav, text: title }, renderTitle, navId: "alert-list", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__.Page.Contents, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.content, children: wrapInContent ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RuleViewerLayoutContent, { ...props }) : children }) }) });
}
function RuleViewerLayoutContent({ children, padding = 2 }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getContentStyles(padding));
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.wrapper, children });
}
const getPageStyles = (theme) => {
  return {
    content: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      maxWidth: `${theme.breakpoints.values.xxl}px`
    })
  };
};
const getContentStyles = (padding) => (theme) => {
  return {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      background: theme.colors.background.primary,
      border: `1px solid ${theme.colors.border.weak}`,
      borderRadius: theme.shape.radius.default,
      padding: theme.spacing(padding)
    })
  };
};


/***/ })

}]);
//# sourceMappingURL=AlertingRedirectToRule.0522571acbc79e3f0842.js.map