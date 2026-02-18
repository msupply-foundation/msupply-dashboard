"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_core_services_echo_backends_analytics_RudderstackBackend_ts"],{

/***/ "./public/app/core/services/echo/backends/analytics/RudderstackBackend.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RudderstackBackend: () => (/* binding */ RudderstackBackend)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/analytics/types.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/EchoSrv.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/services/echo/utils.ts");



class RudderstackBackend {
  constructor(options) {
    this.options = options;
    this.supportedEvents = [_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.EchoEventType.Pageview, _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.EchoEventType.Interaction, _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.EchoEventType.ExperimentView];
    this.addEvent = (e) => {
      if (!window.rudderanalytics) {
        return;
      }
      if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.isPageviewEvent)(e)) {
        window.rudderanalytics.page?.();
      }
      if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.isInteractionEvent)(e)) {
        window.rudderanalytics.track?.(e.payload.interactionName, e.payload.properties);
      }
      if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.isExperimentViewEvent)(e)) {
        window.rudderanalytics.track?.("experiment_viewed", {
          experiment_id: e.payload.experimentId,
          experiment_group: e.payload.experimentGroup,
          experiment_variant: e.payload.experimentVariant
        });
      }
    };
    // Not using Echo buffering, addEvent above sends events to GA as soon as they appear
    this.flush = () => {
    };
    const url = options.sdkUrl || `https://cdn.rudderlabs.com/v1/rudder-analytics.min.js`;
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.loadScript)(url);
    const tempRudderstack = window.rudderanalytics = [];
    const methods = [
      "load",
      "page",
      "track",
      "identify",
      "alias",
      "group",
      "ready",
      "reset",
      "getAnonymousId",
      "setAnonymousId"
    ];
    for (let i = 0; i < methods.length; i++) {
      const method = methods[i];
      tempRudderstack[method] = /* @__PURE__ */ function(methodName) {
        return function() {
          tempRudderstack.push([methodName].concat(Array.prototype.slice.call(arguments)));
        };
      }(method);
    }
    window.rudderanalytics?.load?.(options.writeKey, options.dataPlaneUrl, {
      configUrl: options.configUrl,
      destSDKBaseURL: options.integrationsUrl
    });
    if (options.user) {
      const { identifier, intercomIdentifier } = options.user.analytics;
      const apiOptions = {};
      if (intercomIdentifier) {
        apiOptions.Intercom = {
          user_hash: intercomIdentifier
        };
      }
      window.rudderanalytics?.identify?.(
        identifier,
        {
          email: options.user.email,
          orgId: options.user.orgId,
          language: options.user.language,
          version: options.buildInfo.version,
          edition: options.buildInfo.edition
        },
        apiOptions
      );
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=public_app_core_services_echo_backends_analytics_RudderstackBackend_ts.a9f1b73273a54c7b58cf.js.map