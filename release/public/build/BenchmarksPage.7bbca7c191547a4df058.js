"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["BenchmarksPage"],{

/***/ "./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fragment: () => (/* binding */ Fragment),
/* harmony export */   jsx: () => (/* binding */ jsx),
/* harmony export */   jsxs: () => (/* binding */ jsxs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _dist_emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/react/dist/emotion-element-489459f2.browser.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@emotion/react/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js");
/* harmony import */ var _emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js");












var Fragment = react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment;
var jsx = function jsx(type, props, key) {
  if (!_dist_emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.h.call(props, 'css')) {
    return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(type, props, key);
  }

  return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_dist_emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.E, (0,_dist_emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.c)(type, props), key);
};
var jsxs = function jsxs(type, props, key) {
  if (!_dist_emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.h.call(props, 'css')) {
    return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs(type, props, key);
  }

  return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs(_dist_emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.E, (0,_dist_emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_1__.c)(type, props), key);
};




/***/ }),

/***/ "./packages/grafana-ui/src/components/ThemeDemos/EmotionPerfTest.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmotionPerfTest: () => (/* binding */ EmotionPerfTest),
/* harmony export */   TestScenario: () => (/* binding */ TestScenario)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _themes_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _Layout_Stack_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");








function EmotionPerfTest() {
  console.log("process.env.NODE_ENV", "development");
  return /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Stack_Stack__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "column", children: [
    /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "Emotion performance tests" }),
    /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TestScenario, { name: "No styles", Component: NoStyles }),
    /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TestScenario, { name: "inline emotion/css", Component: InlineEmotionCSS }),
    /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TestScenario, { name: "useStyles no cx", Component: UseStylesNoCX }),
    /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TestScenario, { name: "useStyles with conditional cx styles", Component: UseStylesWithConditionalCX }),
    /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TestScenario, { name: "useStyles with css prop", Component: UseStylesWithCSSProp }),
    /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TestScenario, { name: "useStyles with conditional css prop", Component: UseStylesWithConditionalCSS }),
    /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TestScenario, { name: "useStyles with conditional classnames", Component: UseStylesWithConditionalClassNames })
  ] });
}
const TestScenario = ({ name, Component }) => {
  const [render, setRender] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  return /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: () => setRender(render > 2 ? 0 : render + 1), children: name }),
    render > 0 && /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MeasureRender, { id: name, children: renderManyComponents(Component) })
  ] });
};
TestScenario.displayName = "TestScenario";
function renderManyComponents(Component) {
  const elements = [];
  for (let i = 0; i < 5e3; i++) {
    elements.push(/* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, { index: i }, i.toString()));
  }
  return /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: "flex", flexWrap: "wrap" }, children: elements });
}
function UseStylesNoCX({ index }) {
  const styles = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.main, children: /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.child, children: index }) });
}
function UseStylesWithConditionalCX({ index }) {
  const styles = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const mainStyles = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.main, { [styles.large]: index > 10, [styles.disabed]: index % 10 === 0 });
  return /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: mainStyles, children: /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.child, children: index }) });
}
function UseStylesWithConditionalClassNames({ index }) {
  const styles = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const mainStyles = classnames__WEBPACK_IMPORTED_MODULE_2___default()(styles.main, { [styles.large]: index > 10, [styles.disabed]: index % 10 === 0 });
  return /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: mainStyles, children: /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.child, children: index }) });
}
function UseStylesWithCSSProp({ index }) {
  const styles = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStylesObjects);
  return /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: styles.main, children: /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: styles.child, children: index }) });
}
function UseStylesWithConditionalCSS({ index }) {
  const styles = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStylesObjects);
  const mainStyles = [styles.main, index > 10 && styles.large, index % 10 === 0 && styles.disabed];
  return /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: mainStyles, children: /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: styles.child, children: index }) });
}
function InlineEmotionCSS({ index }) {
  const theme = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.useTheme2)();
  const styles = getStyles(theme);
  return /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.main, children: /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.child, children: index }) });
}
function NoStyles({ index }) {
  return /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "no-styles-main", children: /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "no-styles-child", children: index }) });
}
function MeasureRender({ children, id }) {
  const onRender = (id2, phase, actualDuration, baseDuration, startTime, commitTime) => {
    console.log("Profile " + id2, actualDuration);
  };
  return /* @__PURE__ */ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_3__.Profiler, { id, onRender, children });
}
const getStyles = (theme) => {
  return {
    main: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)(getStylesObjectMain(theme)),
    large: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      fontSize: "20px",
      color: "red"
    }),
    disabed: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      fontSize: "10px",
      color: "gray"
    }),
    child: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)(getStylesObjectChild(theme))
  };
};
const getStylesObjects = (theme) => {
  return {
    main: getStylesObjectMain(theme),
    large: {
      fontSize: "20px",
      color: "red"
    },
    disabed: {
      fontSize: "10px",
      color: "gray"
    },
    child: getStylesObjectChild(theme)
  };
};
function getStylesObjectMain(theme) {
  return {
    background: "blue",
    border: "1px solid red",
    color: "white",
    padding: theme.spacing(1),
    shadow: theme.shadows.z1,
    ":hover": {
      background: theme.colors.background.primary
    }
  };
}
function getStylesObjectChild(theme) {
  return {
    padding: "2px",
    fontSize: "10px",
    boxShadow: "none",
    textAlign: "center",
    textDecoration: "none"
  };
}


/***/ }),

/***/ "./public/app/features/sandbox/BenchmarksPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BenchmarksPage: () => (/* binding */ BenchmarksPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/ThemeDemos/EmotionPerfTest.tsx");



const BenchmarksPage = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_1__.EmotionPerfTest, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BenchmarksPage);


/***/ })

}]);
//# sourceMappingURL=BenchmarksPage.7bbca7c191547a4df058.js.map