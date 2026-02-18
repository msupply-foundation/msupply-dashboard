"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_core_services_echo_backends_analytics_GABackend_ts"],{

/***/ "./public/app/core/services/echo/backends/analytics/GABackend.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GAEchoBackend: () => (/* binding */ GAEchoBackend)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/services/EchoSrv.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/services/echo/utils.ts");



class GAEchoBackend {
  constructor(options) {
    this.options = options;
    this.supportedEvents = [_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.EchoEventType.Pageview];
    this.trackedUserId = null;
    this.addEvent = (e) => {
      if (!window.ga) {
        return;
      }
      window.ga("set", { page: e.payload.page });
      window.ga("send", "pageview");
      const { userSignedIn, userId } = e.meta;
      if (userSignedIn && userId !== this.trackedUserId) {
        this.trackedUserId = userId;
        window.ga("set", "userId", userId);
      }
    };
    // Not using Echo buffering, addEvent above sends events to GA as soon as they appear
    this.flush = () => {
    };
    const url = `https://www.google-analytics.com/analytics${options.debug ? "_debug" : ""}.js`;
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.loadScript)(url);
    const ga = window.ga = window.ga || // this had the equivalent of `eslint-disable-next-line prefer-arrow/prefer-arrow-functions`
    function() {
      (ga.q = ga.q || []).push(arguments);
    };
    ga.l = +/* @__PURE__ */ new Date();
    ga("create", options.googleAnalyticsId, "auto");
    ga("set", "anonymizeIp", true);
  }
}


/***/ })

}]);
//# sourceMappingURL=public_app_core_services_echo_backends_analytics_GABackend_ts.d639a24922caf02bb246.js.map