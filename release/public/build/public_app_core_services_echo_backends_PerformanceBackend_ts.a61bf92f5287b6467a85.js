"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_core_services_echo_backends_PerformanceBackend_ts"],{

/***/ "./public/app/core/services/echo/backends/PerformanceBackend.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerformanceBackend: () => (/* binding */ PerformanceBackend)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/services/EchoSrv.ts");
/* harmony import */ var _backend_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/services/backend_srv.ts");



class PerformanceBackend {
  constructor(options) {
    this.options = options;
    this.buffer = [];
    this.supportedEvents = [_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.EchoEventType.Performance];
    this.addEvent = (e) => {
      this.buffer.push(e.payload);
    };
    this.flush = () => {
      if (this.buffer.length === 0) {
        return;
      }
      _backend_srv__WEBPACK_IMPORTED_MODULE_1__.backendSrv.post(
        "/api/frontend-metrics",
        {
          events: this.buffer
        },
        { showErrorAlert: false }
      ).catch(() => {
      });
      this.buffer = [];
    };
  }
}


/***/ })

}]);
//# sourceMappingURL=public_app_core_services_echo_backends_PerformanceBackend_ts.a61bf92f5287b6467a85.js.map