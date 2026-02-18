"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["newsPanel"],{

/***/ "./public/app/plugins/panel/news/NewsPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsPanel: () => (/* binding */ NewsPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/ScrollContainer/ScrollContainer.tsx");
/* harmony import */ var _component_News__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/news/component/News.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/news/constants.ts");
/* harmony import */ var _useNewsFeed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/news/useNewsFeed.tsx");









function NewsPanel(props) {
  const {
    width,
    options: { feedUrl = _constants__WEBPACK_IMPORTED_MODULE_8__.DEFAULT_FEED_URL, showImage }
  } = props;
  const { state, getNews } = (0,_useNewsFeed__WEBPACK_IMPORTED_MODULE_9__.useNewsFeed)(feedUrl);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const sub = props.eventBus.subscribe(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.RefreshEvent, getNews);
    return () => {
      sub.unsubscribe();
    };
  }, [getNews, props.eventBus]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getNews();
  }, [getNews]);
  if (state.error) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("news.news-panel.title-error-loading-rss-feed", "Error loading RSS feed"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "news.news-panel.body-error-loading-rss-feed", children: [
      "Make sure that the feed URL is correct and that CORS is configured correctly on the server. See",
      " ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TextLink, { href: "https://grafana.com/docs/grafana/latest/panels-visualizations/visualizations/news/", external: true, children: "News panel documentation." })
    ] }) });
  }
  if (state.loading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "news.news-panel.loading", children: "Loading..." }) });
  }
  if (!state.value) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ScrollContainer, { minHeight: "100%", children: state.value.map((_, index) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_News__WEBPACK_IMPORTED_MODULE_7__.News, { index, width, showImage, data: state.value }, index);
  }) });
}


/***/ }),

/***/ "./public/app/plugins/panel/news/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _NewsPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/news/NewsPanel.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/news/constants.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/news/panelcfg.gen.ts");






const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_NewsPanel__WEBPACK_IMPORTED_MODULE_2__.NewsPanel).setPanelOptions((builder) => {
  const category = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("news.category-news", "News")];
  builder.addTextInput({
    path: "feedUrl",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("news.name-url", "URL"),
    category,
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("news.description-url", "Supports RSS and Atom feeds"),
    settings: {
      placeholder: _constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_FEED_URL
    },
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.defaultOptions.feedUrl
  }).addBooleanSwitch({
    path: "showImage",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("news.name-show-image", "Show image"),
    category,
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
      "news.description-show-image",
      "Controls if the news item social (og:image) image is shown above text content"
    ),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.defaultOptions.showImage
  });
});


/***/ }),

/***/ "./public/app/plugins/panel/news/panelcfg.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });

const defaultOptions = {
  showImage: true
};


/***/ })

}]);
//# sourceMappingURL=newsPanel.58e4f27f9de34da2fb73.js.map