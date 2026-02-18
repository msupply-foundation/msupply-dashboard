"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["welcomeBanner"],{

/***/ "./public/app/plugins/panel/welcome/Welcome.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WelcomeBanner: () => (/* binding */ WelcomeBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





const helpOptions = [
  { value: 0, label: "Documentation", href: "https://grafana.com/docs/grafana/latest" },
  { value: 1, label: "Tutorials", href: "https://grafana.com/tutorials" },
  { value: 2, label: "Community", href: "https://community.grafana.com" },
  { value: 3, label: "Public Slack", href: "http://slack.grafana.com" }
];
const WelcomeBanner = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", { className: styles.title, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "welcome.welcome-banner.welcome-to-grafana", children: "Welcome to Grafana" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.help, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: styles.helpText, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "welcome.welcome-banner.need-help", children: "Need help?" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.helpLinks, children: helpOptions.map((option, index) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          "a",
          {
            className: styles.helpLink,
            href: `${option.href}?utm_source=grafana_gettingstarted`,
            children: option.label
          },
          `${option.label}-${index}`
        );
      }) })
    ] })
  ] });
};
const getStyles = (theme) => {
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      backgroundSize: "cover",
      height: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(0, 3),
      [theme.breakpoints.down("lg")]: {
        backgroundPosition: "0px",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center"
      },
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0, 1)
      }
    }),
    title: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginBottom: 0,
      [theme.breakpoints.down("lg")]: {
        marginBottom: theme.spacing(1)
      },
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.h2.fontSize
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.h3.fontSize
      }
    }),
    help: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      alignItems: "baseline"
    }),
    helpText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginRight: theme.spacing(2),
      marginBottom: 0,
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.h4.fontSize
      },
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    }),
    helpLinks: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexWrap: "wrap"
    }),
    helpLink: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginRight: theme.spacing(2),
      textDecoration: "underline",
      textWrap: "nowrap",
      [theme.breakpoints.down("sm")]: {
        marginRight: theme.spacing(1)
      }
    })
  };
};


/***/ }),

/***/ "./public/app/plugins/panel/welcome/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _Welcome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/welcome/Welcome.tsx");



const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_Welcome__WEBPACK_IMPORTED_MODULE_1__.WelcomeBanner).setNoPadding();


/***/ })

}]);
//# sourceMappingURL=welcomeBanner.3cbd200b0bf0a3221316.js.map