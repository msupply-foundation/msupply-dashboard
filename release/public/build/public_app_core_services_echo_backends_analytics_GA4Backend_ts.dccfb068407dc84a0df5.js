"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_core_services_echo_backends_analytics_GA4Backend_ts"],{

/***/ "./public/app/core/services/echo/backends/analytics/GA4Backend.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GA4EchoBackend: () => (/* binding */ GA4EchoBackend)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/services/EchoSrv.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/services/echo/utils.ts");



class GA4EchoBackend {
  constructor(options) {
    this.options = options;
    this.supportedEvents = [_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.EchoEventType.Pageview];
    this.googleAnalytics4SendManualPageViews = false;
    this.addEvent = (e) => {
      if (!window.gtag) {
        return;
      }
      if (this.googleAnalytics4SendManualPageViews) {
        window.gtag("event", "page_view", { page_path: e.payload.page });
      }
    };
    // Not using Echo buffering, addEvent above sends events to GA as soon as they appear
    this.flush = () => {
    };
    const url = `https://www.googletagmanager.com/gtag/js?id=${options.googleAnalyticsId}`;
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.loadScript)(url, true);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", /* @__PURE__ */ new Date());
    const configOptions = {
      page_path: window.location.pathname
    };
    if (options.user) {
      configOptions.user_id = options.user.analytics.identifier;
    }
    this.googleAnalytics4SendManualPageViews = options.googleAnalytics4SendManualPageViews;
    window.gtag("config", options.googleAnalyticsId, configOptions);
  }
}


/***/ })

}]);
//# sourceMappingURL=public_app_core_services_echo_backends_analytics_GA4Backend_ts.dccfb068407dc84a0df5.js.map