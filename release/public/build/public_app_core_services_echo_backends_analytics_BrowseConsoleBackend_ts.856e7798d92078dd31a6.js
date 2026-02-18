"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_core_services_echo_backends_analytics_BrowseConsoleBackend_ts"],{

/***/ "./public/app/core/services/echo/backends/analytics/BrowseConsoleBackend.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserConsoleBackend: () => (/* binding */ BrowserConsoleBackend)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/analytics/types.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/EchoSrv.ts");


class BrowserConsoleBackend {
  constructor() {
    this.options = {};
    this.supportedEvents = [_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.EchoEventType.Pageview, _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.EchoEventType.Interaction, _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.EchoEventType.ExperimentView];
    this.addEvent = (e) => {
      if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.isPageviewEvent)(e)) {
        console.log("[EchoSrv:pageview]", e.payload.page);
      }
      if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.isInteractionEvent)(e)) {
        const eventName = e.payload.interactionName;
        console.log("[EchoSrv:event]", eventName, e.payload.properties);
        const invalidTypeProperties = Object.entries(e.payload.properties ?? {}).filter(([_, value]) => {
          const valueType = typeof value;
          const isValidType = valueType === "string" || valueType === "number" || valueType === "boolean" || valueType === "undefined";
          return !isValidType;
        });
        if (invalidTypeProperties.length > 0) {
          console.warn(
            "Event",
            eventName,
            "has invalid property types. Event properties should only be string, number or boolean. Invalid properties:",
            Object.fromEntries(invalidTypeProperties)
          );
        }
      }
      if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.isExperimentViewEvent)(e)) {
        console.log("[EchoSrv:experiment]", e.payload);
      }
    };
    this.flush = () => {
    };
  }
}


/***/ })

}]);
//# sourceMappingURL=public_app_core_services_echo_backends_analytics_BrowseConsoleBackend_ts.856e7798d92078dd31a6.js.map