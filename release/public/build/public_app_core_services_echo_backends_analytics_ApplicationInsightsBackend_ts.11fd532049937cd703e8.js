"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_core_services_echo_backends_analytics_ApplicationInsightsBackend_ts"],{

/***/ "./public/app/core/services/echo/backends/analytics/ApplicationInsightsBackend.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApplicationInsightsBackend: () => (/* binding */ ApplicationInsightsBackend)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/analytics/types.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/EchoSrv.ts");


class ApplicationInsightsBackend {
  constructor(options) {
    this.options = options;
    this.supportedEvents = [_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.EchoEventType.Pageview, _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.EchoEventType.Interaction];
    this.addEvent = (e) => {
      if (!window.applicationInsights) {
        return;
      }
      if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.isPageviewEvent)(e)) {
        window.applicationInsights.trackPageView?.();
      }
      if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.isInteractionEvent)(e)) {
        window.applicationInsights.trackEvent?.({
          name: e.payload.interactionName,
          properties: e.payload.properties
        });
      }
    };
    // Not using Echo buffering, addEvent above sends events to Application Insights as soon as they appear
    this.flush = () => {
    };
    const applicationInsightsOpts = {
      config: {
        connectionString: options.connectionString,
        endpointUrl: options.endpointUrl
      }
    };
    const url = "https://js.monitor.azure.com/scripts/b/ai.2.min.js";
    System.import(url).then((m) => m.default ? m.default : m).then(({ ApplicationInsights }) => {
      const init = new ApplicationInsights(applicationInsightsOpts);
      window.applicationInsights = init.loadAppInsights();
    });
  }
}


/***/ })

}]);
//# sourceMappingURL=public_app_core_services_echo_backends_analytics_ApplicationInsightsBackend_ts.11fd532049937cd703e8.js.map