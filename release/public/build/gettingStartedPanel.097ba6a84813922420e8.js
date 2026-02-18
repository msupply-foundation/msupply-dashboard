"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["gettingStartedPanel"],{

/***/ "./public/app/plugins/panel/gettingstarted/GettingStarted.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GettingStarted: () => (/* binding */ GettingStarted)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/stylesFactory.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var _components_Step__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/panel/gettingstarted/components/Step.tsx");
/* harmony import */ var _steps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/panel/gettingstarted/steps.ts");












class GettingStarted extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      checksDone: false,
      currentStep: 0,
      steps: (0,_steps__WEBPACK_IMPORTED_MODULE_13__.getSteps)()
    };
    this.onForwardClick = () => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)("grafana_getting_started_button_to_advanced_tutorials");
      this.setState((prevState) => ({
        currentStep: prevState.currentStep + 1
      }));
    };
    this.onPreviousClick = () => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)("grafana_getting_started_button_to_basic_tutorials");
      this.setState((prevState) => ({
        currentStep: prevState.currentStep - 1
      }));
    };
    this.dismiss = () => {
      const { id } = this.props;
      const dashboard = (0,app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_11__.getDashboardSrv)().getCurrent();
      const panel = dashboard?.getPanelById(id);
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)("grafana_getting_started_remove_panel");
      dashboard?.removePanel(panel);
      app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_10__.backendSrv.put("/api/user/helpflags/1", void 0, { showSuccessAlert: false }).then((res) => {
        app_core_core__WEBPACK_IMPORTED_MODULE_9__.contextSrv.user.helpFlags1 = res.helpFlags1;
      });
    };
  }
  async componentDidMount() {
    const { steps } = this.state;
    const checkedStepsPromises = steps.map(async (step) => {
      const checkedCardsPromises = step.cards.map(async (card) => {
        return card.check().then((passed) => {
          return { ...card, done: passed };
        });
      });
      const checkedCards = await Promise.all(checkedCardsPromises);
      return {
        ...step,
        done: checkedCards.every((c) => c.done),
        cards: checkedCards
      };
    });
    const checkedSteps = await Promise.all(checkedStepsPromises);
    this.setState({
      currentStep: !checkedSteps[0].done ? 0 : 1,
      steps: checkedSteps,
      checksDone: true
    });
  }
  render() {
    const { checksDone, currentStep, steps } = this.state;
    const styles = getStyles();
    const step = steps[currentStep];
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.container, children: !checksDone ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.loading, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.loadingText, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "gettingstarted.getting-started.checking-completed-setup-steps", children: "Checking completed setup steps" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Spinner, { size: "xl", inline: true })
    ] }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { variant: "secondary", fill: "text", className: styles.dismiss, onClick: this.dismiss, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "gettingstarted.getting-started.remove-this-panel", children: "Remove this panel" }) }),
      currentStep === steps.length - 1 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
        {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.backForwardButtons, styles.previous),
          onClick: this.onPreviousClick,
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("gettingstarted.getting-started.aria-label-to-basic-tutorials", "To basic tutorials"),
          icon: "angle-left",
          variant: "secondary"
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.content, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Step__WEBPACK_IMPORTED_MODULE_12__.Step, { step }) }),
      currentStep < steps.length - 1 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
        {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.backForwardButtons, styles.forward),
          onClick: this.onForwardClick,
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
            "gettingstarted.getting-started.aria-label-to-advanced-tutorials",
            "To advanced tutorials"
          ),
          icon: "angle-right",
          variant: "secondary"
        }
      )
    ] }) });
  }
}
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.stylesFactory)(() => {
  const theme = _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.theme2;
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "column",
      height: "100%",
      backgroundSize: "cover",
      padding: `${theme.spacing(4)} ${theme.spacing(2)} 0`
    }),
    content: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "content",
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("xxl")]: {
        marginLeft: theme.spacing(3),
        justifyContent: "flex-start"
      }
    }),
    header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "header",
      marginBottom: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("lg")]: {
        flexDirection: "row"
      }
    }),
    headerLogo: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "58px",
      paddingRight: theme.spacing(2),
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "block"
      }
    }),
    heading: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "heading",
      marginRight: theme.spacing(3),
      marginBottom: theme.spacing(3),
      flexGrow: 1,
      display: "flex",
      [theme.breakpoints.up("md")]: {
        marginBottom: 0
      }
    }),
    backForwardButtons: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)"
    }),
    previous: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      left: "10px",
      [theme.breakpoints.down("md")]: {
        left: 0
      }
    }),
    forward: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      right: "10px",
      [theme.breakpoints.down("md")]: {
        right: 0
      }
    }),
    dismiss: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      alignSelf: "flex-end",
      textDecoration: "underline",
      marginBottom: theme.spacing(1)
    }),
    loading: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%"
    }),
    loadingText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginRight: theme.spacing(1)
    })
  };
});


/***/ }),

/***/ "./public/app/plugins/panel/gettingstarted/components/DocsCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocsCard: () => (/* binding */ DocsCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/gettingstarted/components/sharedStyles.ts");







const DocsCard = ({ card }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles, card.done);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.card, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: _sharedStyles__WEBPACK_IMPORTED_MODULE_6__.cardContent, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      "a",
      {
        href: `${card.href}?utm_source=grafana_gettingstarted`,
        className: styles.url,
        onClick: () => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.reportInteraction)("grafana_getting_started_docs", { title: card.title, link: card.href }),
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.heading, children: card.done ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("gettingstarted.docs-card.complete", "complete") : card.heading }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { className: styles.title, children: card.title })
        ]
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      "a",
      {
        href: `${card.learnHref}?utm_source=grafana_gettingstarted`,
        className: styles.learnUrl,
        target: "_blank",
        rel: "noreferrer",
        onClick: () => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.reportInteraction)("grafana_getting_started_docs", { title: card.title, link: card.learnHref }),
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "gettingstarted.docs-card.learn-how", children: "Learn how in the docs" }),
          " ",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { name: "external-link-alt" })
        ]
      }
    )
  ] });
};
const getStyles = (theme, complete) => {
  return {
    card: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      ...(0,_sharedStyles__WEBPACK_IMPORTED_MODULE_6__.cardStyle)(theme, complete),
      minWidth: "230px",
      [theme.breakpoints.down("md")]: {
        minWidth: "192px"
      }
    }),
    heading: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      textTransform: "uppercase",
      color: complete ? theme.v1.palette.blue95 : "#FFB357",
      marginBottom: theme.spacing(2)
    }),
    title: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginBottom: theme.spacing(2)
    }),
    url: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "inline-block"
    }),
    learnUrl: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      borderTop: `1px solid ${theme.colors.border.weak}`,
      position: "absolute",
      bottom: 0,
      padding: theme.spacing(1, 2),
      width: "100%"
    })
  };
};


/***/ }),

/***/ "./public/app/plugins/panel/gettingstarted/components/Step.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Step: () => (/* binding */ Step)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _DocsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/gettingstarted/components/DocsCard.tsx");
/* harmony import */ var _TutorialCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/gettingstarted/components/TutorialCard.tsx");






const Step = ({ step }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.setup, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.info, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { className: styles.title, children: step.title }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: step.info })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.cards, children: step.cards.map((card, index) => {
      const key = `${card.title}-${index}`;
      if (card.type === "tutorial") {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TutorialCard__WEBPACK_IMPORTED_MODULE_4__.TutorialCard, { card }, key);
      }
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DocsCard__WEBPACK_IMPORTED_MODULE_3__.DocsCard, { card }, key);
    }) })
  ] });
};
const getStyles = (theme) => {
  return {
    setup: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      width: "95%"
    }),
    info: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "172px",
      marginRight: "5%",
      [theme.breakpoints.down("xxl")]: {
        marginRight: theme.spacing(4)
      },
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    }),
    title: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.v1.palette.blue95
    }),
    cards: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      overflowX: "auto",
      overflowY: "hidden",
      width: "100%",
      display: "flex",
      justifyContent: "flex-start"
    })
  };
};


/***/ }),

/***/ "./public/app/plugins/panel/gettingstarted/components/TutorialCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TutorialCard: () => (/* binding */ TutorialCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/gettingstarted/components/sharedStyles.ts");








const TutorialCard = ({ card }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles, card.done);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "a",
    {
      className: styles.card,
      target: "_blank",
      rel: "noreferrer",
      href: `${card.href}?utm_source=grafana_gettingstarted`,
      onClick: (event) => handleTutorialClick(event, card),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: _sharedStyles__WEBPACK_IMPORTED_MODULE_6__.cardContent, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.type, children: card.type }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.heading, children: card.done ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("gettingstarted.tutorial-card.complete", "complete") : card.heading }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { className: styles.cardTitle, children: card.title }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.info, children: card.info })
      ] })
    }
  );
};
const handleTutorialClick = (event, card) => {
  const isSet = app_core_store__WEBPACK_IMPORTED_MODULE_5__["default"].get(card.key);
  if (!isSet) {
    app_core_store__WEBPACK_IMPORTED_MODULE_5__["default"].set(card.key, true);
  }
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.reportInteraction)("grafana_getting_started_tutorial", { title: card.title });
};
const getStyles = (theme, complete) => {
  return {
    card: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      ...(0,_sharedStyles__WEBPACK_IMPORTED_MODULE_6__.cardStyle)(theme, complete),
      width: "460px",
      minWidth: "460px",
      [theme.breakpoints.down("xl")]: {
        minWidth: "368px"
      },
      [theme.breakpoints.down("lg")]: {
        minWidth: "272px"
      }
    }),
    type: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.primary.text,
      textTransform: "uppercase"
    }),
    heading: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      textTransform: "uppercase",
      color: theme.colors.primary.text,
      marginBottom: theme.spacing(1)
    }),
    cardTitle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginBottom: theme.spacing(2)
    }),
    info: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginBottom: theme.spacing(2)
    }),
    status: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      justifyContent: "flex-end"
    })
  };
};


/***/ }),

/***/ "./public/app/plugins/panel/gettingstarted/components/sharedStyles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cardContent: () => (/* binding */ cardContent),
/* harmony export */   cardStyle: () => (/* binding */ cardStyle)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");


const cardStyle = (theme, complete) => {
  const completeGradient = "linear-gradient(to right, #5182CC 0%, #245BAF 100%)";
  const darkThemeGradients = complete ? completeGradient : "linear-gradient(to right, #f05a28 0%, #fbca0a 100%)";
  const lightThemeGradients = complete ? completeGradient : "linear-gradient(to right, #FBCA0A 0%, #F05A28 100%)";
  const borderGradient = theme.isDark ? darkThemeGradients : lightThemeGradients;
  return {
    backgroundColor: theme.colors.background.secondary,
    marginRight: theme.spacing(4),
    border: `1px solid ${theme.colors.border.weak}`,
    borderBottomLeftRadius: theme.shape.borderRadius(2),
    borderBottomRightRadius: theme.shape.borderRadius(2),
    position: "relative",
    maxHeight: "230px",
    [theme.breakpoints.down("xxl")]: {
      marginRight: theme.spacing(2)
    },
    "&::before": {
      display: "block",
      content: "' '",
      position: "absolute",
      left: 0,
      right: 0,
      height: "2px",
      top: 0,
      backgroundImage: borderGradient
    }
  };
};
const cardContent = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  padding: "16px"
});


/***/ }),

/***/ "./public/app/plugins/panel/gettingstarted/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _GettingStarted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/gettingstarted/GettingStarted.tsx");



const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_GettingStarted__WEBPACK_IMPORTED_MODULE_1__.GettingStarted).setNoPadding();


/***/ }),

/***/ "./public/app/plugins/panel/gettingstarted/steps.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSteps: () => (/* binding */ getSteps)
/* harmony export */ });
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var app_features_search_service_searcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/search/service/searcher.ts");





const step1TutorialTitle = "Grafana fundamentals";
const step2TutorialTitle = "Create users and teams";
const keyPrefix = "getting.started.";
const step1Key = `${keyPrefix}${step1TutorialTitle.replace(" ", "-").trim().toLowerCase()}`;
const step2Key = `${keyPrefix}${step2TutorialTitle.replace(" ", "-").trim().toLowerCase()}`;
const getSteps = () => [
  {
    heading: "Welcome to Grafana",
    subheading: "The steps below will guide you to quickly finish setting up your Grafana installation.",
    title: "Basic",
    info: "The steps below will guide you to quickly finish setting up your Grafana installation.",
    done: false,
    cards: [
      {
        type: "tutorial",
        heading: "Data source and dashboards",
        title: step1TutorialTitle,
        info: "Set up and understand Grafana if you have no prior experience. This tutorial guides you through the entire process and covers the \u201CData source\u201D and \u201CDashboards\u201D steps to the right.",
        href: "https://grafana.com/tutorials/grafana-fundamentals",
        icon: "grafana",
        check: () => Promise.resolve(app_core_store__WEBPACK_IMPORTED_MODULE_1__["default"].get(step1Key)),
        key: step1Key,
        done: false
      },
      {
        type: "docs",
        title: "Add your first data source",
        heading: "data sources",
        icon: "database",
        learnHref: "https://grafana.com/docs/grafana/latest/features/datasources/add-a-data-source",
        href: "datasources/new",
        check: () => {
          return new Promise((resolve) => {
            resolve(
              (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_2__.getDatasourceSrv)().getMetricSources().filter((item) => {
                return item.meta.builtIn !== true;
              }).length > 0
            );
          });
        },
        done: false
      },
      {
        type: "docs",
        heading: "dashboards",
        title: "Create your first dashboard",
        icon: "apps",
        href: "dashboard/new",
        learnHref: "https://grafana.com/docs/grafana/latest/guides/getting_started/#create-a-dashboard",
        check: async () => {
          const result = await (0,app_features_search_service_searcher__WEBPACK_IMPORTED_MODULE_3__.getGrafanaSearcher)().search({ limit: 1, kind: ["dashboard"] });
          return result.totalRows > 0;
        },
        done: false
      }
    ]
  },
  {
    heading: "Setup complete!",
    subheading: "All necessary steps to use Grafana are done. Now tackle advanced steps or make the best use of this home dashboard \u2013 it is, after all, a fully customizable dashboard \u2013 and remove this panel.",
    title: "Advanced",
    info: " Manage your users and teams and add plugins. These steps are optional",
    done: false,
    cards: [
      {
        type: "tutorial",
        heading: "Users",
        title: "Create users and teams",
        info: "Learn to organize your users in teams and manage resource access and roles.",
        href: "https://grafana.com/tutorials/create-users-and-teams",
        icon: "users-alt",
        key: step2Key,
        check: () => Promise.resolve(app_core_store__WEBPACK_IMPORTED_MODULE_1__["default"].get(step2Key)),
        done: false
      },
      {
        type: "docs",
        heading: "plugins",
        title: "Find and install plugins",
        learnHref: "https://grafana.com/docs/grafana/latest/plugins/installation",
        href: "plugins",
        icon: "plug",
        check: async () => {
          const plugins = await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get("/api/plugins", { embedded: 0, core: 0 });
          return Promise.resolve(plugins.length > 0);
        },
        done: false
      }
    ]
  }
];


/***/ })

}]);
//# sourceMappingURL=gettingStartedPanel.097ba6a84813922420e8.js.map