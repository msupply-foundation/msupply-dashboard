"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["alertmanagerPlugin"],{

/***/ "./node_modules/@grafana/async-query-data/dist/esm/DatasourceWithAsyncBackend.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatasourceWithAsyncBackend: () => (/* binding */ DatasourceWithAsyncBackend)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/utils/queryResponse.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/semver/index.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _requestLooper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/requestLooper.js");
/* harmony import */ var _node_modules_rxjs_dist_esm5_internal_operators_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _node_modules_rxjs_dist_esm5_internal_operators_catchError_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");







const RUNNING_STATUSES = ["started", "submitted", "running"];
const isRunning = (status = "") => RUNNING_STATUSES.includes(status);
const isCustomMeta = (meta) => {
  return !!(typeof meta === "object" && (meta == null ? void 0 : meta.hasOwnProperty("queryID")) && (meta == null ? void 0 : meta.hasOwnProperty("status")));
};
class DatasourceWithAsyncBackend extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.DataSourceWithBackend {
  constructor(instanceSettings) {
    var _a;
    super(instanceSettings);
    this.runningQueries = {};
    this.requestCounter = 100;
    // cancel sets shouldCancel to tell requestLooper to cancel the query
    this.cancel = (target) => {
      this.storeQuery(target, { shouldCancel: true });
    };
    this.requestIdPrefix = (_a = instanceSettings.uid) != null ? _a : instanceSettings.id;
  }
  query(request) {
    const targets = this.filterQuery ? request.targets.filter(this.filterQuery) : request.targets;
    if (!targets.length) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({ data: [] });
    }
    const all = [];
    for (let target of targets) {
      if (target.hide) {
        continue;
      }
      all.push(this.doSingle(target, request));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)(...all);
  }
  storeQuery(target, queryInfo) {
    const key = JSON.stringify(target);
    const existingQueryInfo = this.runningQueries[key] || {};
    this.runningQueries[key] = { ...existingQueryInfo, ...queryInfo };
  }
  getQuery(target) {
    const key = JSON.stringify(target);
    return this.runningQueries[key] || {};
  }
  removeQuery(target) {
    const key = JSON.stringify(target);
    delete this.runningQueries[key];
  }
  doSingle(target, request) {
    let queryID = void 0;
    let status = void 0;
    let allData = [];
    return (0,_requestLooper_js__WEBPACK_IMPORTED_MODULE_7__.getRequestLooper)(
      { ...request, targets: [target], requestId: `${this.requestIdPrefix}_${this.requestCounter++}` },
      {
        /**
         * Additional query to execute if the current query is still in a running state
         */
        getNextQuery: (rsp) => {
          var _a, _b;
          if ((_a = rsp.data) == null ? void 0 : _a.length) {
            const first = rsp.data[0];
            const meta = (_b = first.meta) == null ? void 0 : _b.custom;
            if (isCustomMeta(meta) && isRunning(meta.status)) {
              queryID = meta.queryID;
              status = meta.status;
              this.storeQuery(target, { queryID });
              return { ...target, queryID };
            }
          }
          this.removeQuery(target);
          return void 0;
        },
        /**
         * The original request
         */
        query: (request2) => {
          const { range, targets, requestId, intervalMs, maxDataPoints } = request2;
          const [_query] = targets;
          const query = {
            ..._query,
            meta: { queryFlow: "async" },
            intervalMs,
            maxDataPoints,
            // getRef optionally chained to support < v8.3.x of Grafana
            datasource: this == null ? void 0 : this.getRef(),
            datasourceId: this.id,
            ...this.applyTemplateVariables(_query, request2.scopedVars)
          };
          const cachingDisabled = !_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.featureToggles.awsAsyncQueryCaching;
          if (cachingDisabled && isRunning(status)) {
            const requestSkipQueryCacheUnsupported = (0,semver__WEBPACK_IMPORTED_MODULE_6__.lt)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.buildInfo.version, "10.2.3");
            if (requestSkipQueryCacheUnsupported) {
              return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().fetch({
                method: "POST",
                url: "/api/ds/query",
                headers: { "X-Cache-Skip": true },
                requestId,
                data: {
                  queries: [query],
                  range,
                  from: range.from.valueOf().toString(),
                  to: range.to.valueOf().toString()
                }
              }).pipe(
                (0,_node_modules_rxjs_dist_esm5_internal_operators_map_js__WEBPACK_IMPORTED_MODULE_8__.map)((result) => ({ data: (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.toDataQueryResponse)(result).data })),
                (0,_node_modules_rxjs_dist_esm5_internal_operators_catchError_js__WEBPACK_IMPORTED_MODULE_9__.catchError)((err) => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.toDataQueryResponse)(err)))
              );
            }
            return super.query({ ...request2, targets: [query], skipQueryCache: true });
          }
          return super.query({ ...request2, targets: [query] });
        },
        /**
         * Process the results
         */
        process: (data) => {
          for (const frame of data) {
            if (frame.fields.length > 0) {
              allData.push(frame);
            }
          }
          return allData;
        },
        shouldCancel: () => {
          const { shouldCancel } = this.getQuery(target);
          return !!shouldCancel;
        },
        /**
         * Callback that gets executed when unsubscribed
         */
        onCancel: () => {
          if (queryID) {
            this.removeQuery(target);
            this.postResource("cancel", {
              queryId: queryID
            }).catch((err) => {
              err.isHandled = true;
              console.error(`error cancelling query ID: ${queryID}`, err);
            });
          }
        }
      }
    );
  }
}


//# sourceMappingURL=DatasourceWithAsyncBackend.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/RunQueryButtons.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RunQueryButtons: () => (/* binding */ RunQueryButtons)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");




const RunQueryButtons = (props) => {
  const { state } = props;
  const [running, setRunning] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [stopping, setStopping] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [lastState, setLastState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(state);
  const [lastQuery, setLastQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.query);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (state && lastState !== state && state !== _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Loading) {
      setRunning(false);
      setStopping(false);
    }
    setLastState(state);
  }, [state, lastState]);
  const onRunQuery = () => {
    setRunning(true);
    setLastQuery(props.query);
    props.onRunQuery();
  };
  const onCancelQuery = props.onCancelQuery ? () => {
    var _a;
    (_a = props.onCancelQuery) == null ? void 0 : _a.call(props, lastQuery);
    setStopping(true);
  } : void 0;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button,
    {
      variant: props.enableRun ? "primary" : "secondary",
      size: "sm",
      onClick: onRunQuery,
      icon: running && !stopping ? "fa fa-spinner" : void 0,
      disabled: state === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Loading || !props.enableRun
    },
    "Run query"
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button,
    {
      variant: running && !stopping ? "primary" : "secondary",
      size: "sm",
      disabled: !running || stopping,
      icon: stopping ? "fa fa-spinner" : void 0,
      onClick: onCancelQuery
    },
    "Stop query"
  ));
};


//# sourceMappingURL=RunQueryButtons.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatasourceWithAsyncBackend: () => (/* reexport safe */ _DatasourceWithAsyncBackend_js__WEBPACK_IMPORTED_MODULE_0__.DatasourceWithAsyncBackend),
/* harmony export */   RunQueryButtons: () => (/* reexport safe */ _RunQueryButtons_js__WEBPACK_IMPORTED_MODULE_1__.RunQueryButtons)
/* harmony export */ });
/* harmony import */ var _DatasourceWithAsyncBackend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/DatasourceWithAsyncBackend.js");
/* harmony import */ var _RunQueryButtons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/RunQueryButtons.js");


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/Observable.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Observable: () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Subscriber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _symbol_observable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/symbol/observable.js");
/* harmony import */ var _util_pipe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/pipe.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/config.js");
/* harmony import */ var _util_isFunction_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _util_errorContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/errorContext.js");








var Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new _Subscriber_js__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber(observerOrNext, error, complete);
        (0,_util_errorContext_js__WEBPACK_IMPORTED_MODULE_6__.errorContext)(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscriber = new _Subscriber_js__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
                next: function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[_symbol_observable_js__WEBPACK_IMPORTED_MODULE_2__.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return (0,_util_pipe_js__WEBPACK_IMPORTED_MODULE_3__.pipeFromArray)(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : _config_js__WEBPACK_IMPORTED_MODULE_4__.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && (0,_util_isFunction_js__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.next) && (0,_util_isFunction_js__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.error) && (0,_util_isFunction_js__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof _Subscriber_js__WEBPACK_IMPORTED_MODULE_0__.Subscriber) || (isObserver(value) && (0,_Subscription_js__WEBPACK_IMPORTED_MODULE_1__.isSubscription)(value));
}


//# sourceMappingURL=Observable.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/Subscriber.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_OBSERVER: () => (/* binding */ EMPTY_OBSERVER),
/* harmony export */   SafeSubscriber: () => (/* binding */ SafeSubscriber),
/* harmony export */   Subscriber: () => (/* binding */ Subscriber)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _util_isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _Subscription_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _util_reportUnhandledError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js");
/* harmony import */ var _util_noop_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/noop.js");






var Subscriber = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if ((0,_Subscription_js__WEBPACK_IMPORTED_MODULE_2__.isSubscription)(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) ;
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) ;
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) ;
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(_Subscription_js__WEBPACK_IMPORTED_MODULE_2__.Subscription));
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if ((0,_util_isFunction_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));
function handleUnhandledError(error) {
    {
        (0,_util_reportUnhandledError_js__WEBPACK_IMPORTED_MODULE_3__.reportUnhandledError)(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
var EMPTY_OBSERVER = {
    closed: true,
    next: _util_noop_js__WEBPACK_IMPORTED_MODULE_4__.noop,
    error: defaultErrorHandler,
    complete: _util_noop_js__WEBPACK_IMPORTED_MODULE_4__.noop,
};


//# sourceMappingURL=Subscriber.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/Subscription.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Subscription: () => (/* binding */ Subscription),
/* harmony export */   isSubscription: () => (/* binding */ isSubscription)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _util_isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _util_UnsubscriptionError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js");
/* harmony import */ var _util_arrRemove_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/arrRemove.js");





var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if ((0,_util_isFunction_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof _util_UnsubscriptionError_js__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof _util_UnsubscriptionError_js__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError) {
                                errors = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(errors)), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new _util_UnsubscriptionError_js__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            (0,_util_arrRemove_js__WEBPACK_IMPORTED_MODULE_3__.arrRemove)(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && (0,_util_arrRemove_js__WEBPACK_IMPORTED_MODULE_3__.arrRemove)(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());
Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && (0,_util_isFunction_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.remove) && (0,_util_isFunction_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.add) && (0,_util_isFunction_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.unsubscribe)));
}
function execFinalizer(finalizer) {
    if ((0,_util_isFunction_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}


//# sourceMappingURL=Subscription.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/config.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config)
/* harmony export */ });
var config = {
    Promise: undefined};


//# sourceMappingURL=config.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromArrayLike: () => (/* binding */ fromArrayLike),
/* harmony export */   fromAsyncIterable: () => (/* binding */ fromAsyncIterable),
/* harmony export */   fromInteropObservable: () => (/* binding */ fromInteropObservable),
/* harmony export */   fromIterable: () => (/* binding */ fromIterable),
/* harmony export */   fromPromise: () => (/* binding */ fromPromise),
/* harmony export */   fromReadableStreamLike: () => (/* binding */ fromReadableStreamLike),
/* harmony export */   innerFrom: () => (/* binding */ innerFrom)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _util_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js");
/* harmony import */ var _util_isPromise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isPromise.js");
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _util_isInteropObservable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js");
/* harmony import */ var _util_isAsyncIterable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js");
/* harmony import */ var _util_throwUnobservableError_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js");
/* harmony import */ var _util_isIterable_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isIterable.js");
/* harmony import */ var _util_isReadableStreamLike_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js");
/* harmony import */ var _util_isFunction_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _util_reportUnhandledError_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js");
/* harmony import */ var _symbol_observable_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/symbol/observable.js");













function innerFrom(input) {
    if (input instanceof _Observable_js__WEBPACK_IMPORTED_MODULE_3__.Observable) {
        return input;
    }
    if (input != null) {
        if ((0,_util_isInteropObservable_js__WEBPACK_IMPORTED_MODULE_4__.isInteropObservable)(input)) {
            return fromInteropObservable(input);
        }
        if ((0,_util_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__.isArrayLike)(input)) {
            return fromArrayLike(input);
        }
        if ((0,_util_isPromise_js__WEBPACK_IMPORTED_MODULE_2__.isPromise)(input)) {
            return fromPromise(input);
        }
        if ((0,_util_isAsyncIterable_js__WEBPACK_IMPORTED_MODULE_5__.isAsyncIterable)(input)) {
            return fromAsyncIterable(input);
        }
        if ((0,_util_isIterable_js__WEBPACK_IMPORTED_MODULE_7__.isIterable)(input)) {
            return fromIterable(input);
        }
        if ((0,_util_isReadableStreamLike_js__WEBPACK_IMPORTED_MODULE_8__.isReadableStreamLike)(input)) {
            return fromReadableStreamLike(input);
        }
    }
    throw (0,_util_throwUnobservableError_js__WEBPACK_IMPORTED_MODULE_6__.createInvalidObservableTypeError)(input);
}
function fromInteropObservable(obj) {
    return new _Observable_js__WEBPACK_IMPORTED_MODULE_3__.Observable(function (subscriber) {
        var obs = obj[_symbol_observable_js__WEBPACK_IMPORTED_MODULE_11__.observable]();
        if ((0,_util_isFunction_js__WEBPACK_IMPORTED_MODULE_9__.isFunction)(obs.subscribe)) {
            return obs.subscribe(subscriber);
        }
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    });
}
function fromArrayLike(array) {
    return new _Observable_js__WEBPACK_IMPORTED_MODULE_3__.Observable(function (subscriber) {
        for (var i = 0; i < array.length && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    });
}
function fromPromise(promise) {
    return new _Observable_js__WEBPACK_IMPORTED_MODULE_3__.Observable(function (subscriber) {
        promise
            .then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, _util_reportUnhandledError_js__WEBPACK_IMPORTED_MODULE_10__.reportUnhandledError);
    });
}
function fromIterable(iterable) {
    return new _Observable_js__WEBPACK_IMPORTED_MODULE_3__.Observable(function (subscriber) {
        var e_1, _a;
        try {
            for (var iterable_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) {
                    return;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        subscriber.complete();
    });
}
function fromAsyncIterable(asyncIterable) {
    return new _Observable_js__WEBPACK_IMPORTED_MODULE_3__.Observable(function (subscriber) {
        process(asyncIterable, subscriber).catch(function (err) { return subscriber.error(err); });
    });
}
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable((0,_util_isReadableStreamLike_js__WEBPACK_IMPORTED_MODULE_8__.readableStreamLikeToAsyncGenerator)(readableStream));
}
function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
        var value, e_2_1;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 11]);
                    asyncIterable_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncValues)(asyncIterable);
                    _b.label = 1;
                case 1: return [4, asyncIterable_1.next()];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) {
                        return [2];
                    }
                    _b.label = 3;
                case 3: return [3, 1];
                case 4: return [3, 11];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 11];
                case 6:
                    _b.trys.push([6, , 9, 10]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
                    return [4, _a.call(asyncIterable_1)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8: return [3, 10];
                case 9:
                    if (e_2) throw e_2.error;
                    return [7];
                case 10: return [7];
                case 11:
                    subscriber.complete();
                    return [2];
            }
        });
    });
}


//# sourceMappingURL=innerFrom.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperatorSubscriber: () => (/* binding */ OperatorSubscriber),
/* harmony export */   createOperatorSubscriber: () => (/* binding */ createOperatorSubscriber)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Subscriber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/Subscriber.js");



function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    };
    return OperatorSubscriber;
}(_Subscriber_js__WEBPACK_IMPORTED_MODULE_1__.Subscriber));


//# sourceMappingURL=OperatorSubscriber.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/operators/catchError.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   catchError: () => (/* binding */ catchError)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");
/* harmony import */ var _OperatorSubscriber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");
/* harmony import */ var _util_lift_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/lift.js");




function catchError(selector) {
    return (0,_util_lift_js__WEBPACK_IMPORTED_MODULE_2__.operate)(function (source, subscriber) {
        var innerSub = null;
        var syncUnsub = false;
        var handledResult;
        innerSub = source.subscribe((0,_OperatorSubscriber_js__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, undefined, undefined, function (err) {
            handledResult = (0,_observable_innerFrom_js__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(selector(err, catchError(selector)(source)));
            if (innerSub) {
                innerSub.unsubscribe();
                innerSub = null;
                handledResult.subscribe(subscriber);
            }
            else {
                syncUnsub = true;
            }
        }));
        if (syncUnsub) {
            innerSub.unsubscribe();
            innerSub = null;
            handledResult.subscribe(subscriber);
        }
    });
}


//# sourceMappingURL=catchError.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/operators/map.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   map: () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _util_lift_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/lift.js");
/* harmony import */ var _OperatorSubscriber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");



function map(project, thisArg) {
    return (0,_util_lift_js__WEBPACK_IMPORTED_MODULE_0__.operate)(function (source, subscriber) {
        var index = 0;
        source.subscribe((0,_OperatorSubscriber_js__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}


//# sourceMappingURL=map.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeoutProvider: () => (/* binding */ timeoutProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");


var timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return setTimeout.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([handler, timeout], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args)));
    },
    clearTimeout: function (handle) {
        return (clearTimeout)(handle);
    },
    delegate: undefined,
};


//# sourceMappingURL=timeoutProvider.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/symbol/iterator.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSymbolIterator: () => (/* binding */ getSymbolIterator),
/* harmony export */   iterator: () => (/* binding */ iterator)
/* harmony export */ });
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator = getSymbolIterator();


//# sourceMappingURL=iterator.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/symbol/observable.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observable: () => (/* binding */ observable)
/* harmony export */ });
var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();


//# sourceMappingURL=observable.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnsubscriptionError: () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
/* harmony import */ var _createErrorClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js");


var UnsubscriptionError = (0,_createErrorClass_js__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});


//# sourceMappingURL=UnsubscriptionError.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/arrRemove.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrRemove: () => (/* binding */ arrRemove)
/* harmony export */ });
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}


//# sourceMappingURL=arrRemove.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createErrorClass: () => (/* binding */ createErrorClass)
/* harmony export */ });
function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}


//# sourceMappingURL=createErrorClass.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/errorContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   errorContext: () => (/* binding */ errorContext)
/* harmony export */ });
function errorContext(cb) {
    {
        cb();
    }
}


//# sourceMappingURL=errorContext.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/identity.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   identity: () => (/* binding */ identity)
/* harmony export */ });
function identity(x) {
    return x;
}


//# sourceMappingURL=identity.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArrayLike: () => (/* binding */ isArrayLike)
/* harmony export */ });
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });


//# sourceMappingURL=isArrayLike.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAsyncIterable: () => (/* binding */ isAsyncIterable)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isFunction.js");


function isAsyncIterable(obj) {
    return Symbol.asyncIterator && (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_0__.isFunction)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}


//# sourceMappingURL=isAsyncIterable.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isFunction.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFunction: () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(value) {
    return typeof value === 'function';
}


//# sourceMappingURL=isFunction.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInteropObservable: () => (/* binding */ isInteropObservable)
/* harmony export */ });
/* harmony import */ var _symbol_observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/symbol/observable.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isFunction.js");



function isInteropObservable(input) {
    return (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(input[_symbol_observable_js__WEBPACK_IMPORTED_MODULE_0__.observable]);
}


//# sourceMappingURL=isInteropObservable.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isIterable.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isIterable: () => (/* binding */ isIterable)
/* harmony export */ });
/* harmony import */ var _symbol_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/symbol/iterator.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isFunction.js");



function isIterable(input) {
    return (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(input === null || input === void 0 ? void 0 : input[_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_0__.iterator]);
}


//# sourceMappingURL=isIterable.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isPromise.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPromise: () => (/* binding */ isPromise)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isFunction.js");


function isPromise(value) {
    return (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value === null || value === void 0 ? void 0 : value.then);
}


//# sourceMappingURL=isPromise.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isReadableStreamLike: () => (/* binding */ isReadableStreamLike),
/* harmony export */   readableStreamLikeToAsyncGenerator: () => (/* binding */ readableStreamLikeToAsyncGenerator)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isFunction.js");



function readableStreamLikeToAsyncGenerator(readableStream) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, , 9, 10]);
                    _b.label = 2;
                case 2:
                    return [4, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(reader.read())];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [3, 5];
                    return [4, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(void 0)];
                case 4: return [2, _b.sent()];
                case 5: return [4, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(value)];
                case 6: return [4, _b.sent()];
                case 7:
                    _b.sent();
                    return [3, 2];
                case 8: return [3, 10];
                case 9:
                    reader.releaseLock();
                    return [7];
                case 10: return [2];
            }
        });
    });
}
function isReadableStreamLike(obj) {
    return (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(obj === null || obj === void 0 ? void 0 : obj.getReader);
}


//# sourceMappingURL=isReadableStreamLike.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/lift.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasLift: () => (/* binding */ hasLift),
/* harmony export */   operate: () => (/* binding */ operate)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isFunction.js");


function hasLift(source) {
    return (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_0__.isFunction)(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}


//# sourceMappingURL=lift.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/noop.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noop: () => (/* binding */ noop)
/* harmony export */ });
function noop() { }


//# sourceMappingURL=noop.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/pipe.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pipeFromArray: () => (/* binding */ pipeFromArray)
/* harmony export */ });
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/identity.js");


function pipeFromArray(fns) {
    if (fns.length === 0) {
        return _identity_js__WEBPACK_IMPORTED_MODULE_0__.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}


//# sourceMappingURL=pipe.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reportUnhandledError: () => (/* binding */ reportUnhandledError)
/* harmony export */ });
/* harmony import */ var _scheduler_timeoutProvider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js");


function reportUnhandledError(err) {
    _scheduler_timeoutProvider_js__WEBPACK_IMPORTED_MODULE_0__.timeoutProvider.setTimeout(function () {
        {
            throw err;
        }
    });
}


//# sourceMappingURL=reportUnhandledError.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInvalidObservableTypeError: () => (/* binding */ createInvalidObservableTypeError)
/* harmony export */ });
function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}


//# sourceMappingURL=throwUnobservableError.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/requestLooper.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRequestLooper: () => (/* binding */ getRequestLooper)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js");



const DELAY_INTERVAL_MS = 10;
const MAX_NEXT_REQUEST_DELAY = 1e4 / DELAY_INTERVAL_MS;
function getRequestLooper(req, options) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((subscriber) => {
    let nextQuery = void 0;
    let subscription = void 0;
    let loadingState = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading;
    let nextRequestDelay = 1;
    let count = 1;
    let shouldCancel = false;
    const observer = {
      next: (rsp) => {
        loadingState = rsp.state;
        let checkstate = false;
        if (loadingState !== _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Error) {
          nextQuery = options.getNextQuery(rsp);
          const _shouldCancel = options.shouldCancel();
          if (nextQuery && _shouldCancel) {
            shouldCancel = _shouldCancel;
            nextQuery = void 0;
          }
          checkstate = true;
        }
        const data = options.process(rsp.data);
        if (checkstate) {
          if (nextQuery) {
            if (data.length && data[0].length) {
              loadingState = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Streaming;
            } else {
              loadingState = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading;
            }
            nextRequestDelay = nextRequestDelay * 2 > MAX_NEXT_REQUEST_DELAY ? MAX_NEXT_REQUEST_DELAY : nextRequestDelay * 2;
          } else {
            loadingState = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done;
            nextRequestDelay = 0;
          }
        }
        subscriber.next({ ...rsp, data, state: loadingState, key: req.requestId });
      },
      error: (err) => {
        subscriber.error(err);
      },
      complete: () => {
        if (subscription) {
          subscription.unsubscribe();
          subscription = void 0;
        }
        if (nextQuery) {
          const next = nextQuery;
          setTimeout(() => {
            subscription = options.query({ ...req, requestId: `${req.requestId}.${++count}`, targets: [next] }).subscribe(observer);
            nextQuery = void 0;
          }, nextRequestDelay * DELAY_INTERVAL_MS);
        } else {
          subscriber.complete();
        }
      }
    };
    subscription = options.query(req).subscribe(observer);
    return function unsubscribe() {
      observer.complete();
      if (nextQuery || shouldCancel) {
        options.onCancel();
      }
      nextQuery = void 0;
    };
  });
}


//# sourceMappingURL=requestLooper.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/components/ConnectionConfig.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionConfig: () => (/* binding */ ConnectionConfig),
/* harmony export */   DEFAULT_LABEL_WIDTH: () => (/* binding */ DEFAULT_LABEL_WIDTH)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Collapse/Collapse.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Button/ButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/ToolbarButton/ToolbarButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _regions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/regions.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/types.js");
/* harmony import */ var _providers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/providers.js");
/* harmony import */ var _ConnectionConfig_styles_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/components/ConnectionConfig.styles.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/ConfigSection/ConfigSection.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/ConfigSection/ConfigSubSection.js");










const DEFAULT_LABEL_WIDTH = 28;
const DS_TYPES_THAT_SUPPORT_TEMP_CREDS = ["cloudwatch", "grafana-athena-datasource"];
const toOption = (value) => ({ value, label: value });
const isAwsAuthType = (value) => {
  return typeof value === "string" && _providers_js__WEBPACK_IMPORTED_MODULE_11__.awsAuthProviderOptions.some((opt) => opt.value === value);
};
const ConnectionConfig = (props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const [isARNInstructionsOpen, setIsARNInstructionsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [regions, setRegions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((props.standardRegions || _regions_js__WEBPACK_IMPORTED_MODULE_9__.standardRegions).map(toOption));
  const {
    loadRegions,
    onOptionsChange,
    skipHeader = false,
    skipEndpoint = false,
    options,
    hideAssumeRoleArn = false
  } = props;
  let profile = options.jsonData.profile;
  if (profile === void 0) {
    profile = options.database;
  }
  const tempCredsFeatureEnabled = _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.config.featureToggles.awsDatasourcesTempCredentials && DS_TYPES_THAT_SUPPORT_TEMP_CREDS.includes(options.type);
  const awsAssumeRoleEnabled = (_a = _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.config.awsAssumeRoleEnabled) != null ? _a : true;
  const awsAllowedAuthProviders = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
    () => _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.config.awsAllowedAuthProviders.filter((provider) => provider === _types_js__WEBPACK_IMPORTED_MODULE_10__.AwsAuthType.GrafanaAssumeRole ? tempCredsFeatureEnabled : true).filter(isAwsAuthType),
    [tempCredsFeatureEnabled]
  );
  const currentProvider = _providers_js__WEBPACK_IMPORTED_MODULE_11__.awsAuthProviderOptions.find((p) => p.value === options.jsonData.authType);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!currentProvider && awsAllowedAuthProviders.length) {
      onOptionsChange({
        ...options,
        jsonData: {
          ...options.jsonData,
          authType: awsAllowedAuthProviders[0]
        }
      });
    }
  }, [currentProvider, options, onOptionsChange, awsAllowedAuthProviders]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!loadRegions) {
      return;
    }
    loadRegions().then((regions2) => setRegions(regions2.map(toOption)));
  }, [loadRegions]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "data-testid": "connection-config" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_13__.ConfigSection, { title: skipHeader ? "" : "Connection Details", "data-testid": "connection-config" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_14__.ConfigSubSection, { title: "Authentication" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field,
    {
      label: "Authentication Provider",
      description: "Specify which AWS credentials chain to use.",
      htmlFor: "authProvider"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Select,
      {
        "aria-label": "Authentication Provider",
        inputId: "authProvider",
        value: currentProvider,
        options: _providers_js__WEBPACK_IMPORTED_MODULE_11__.awsAuthProviderOptions.filter((opt) => awsAllowedAuthProviders.includes(opt.value)),
        defaultValue: options.jsonData.authType,
        onChange: (option) => {
          (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.onUpdateDatasourceJsonDataOptionSelect)(props, "authType")(option);
        },
        menuShouldPortal: true
      }
    )
  ), options.jsonData.authType === "credentials" && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field,
    {
      label: "Credentials Profile Name",
      description: "Credentials profile name, as specified in ~/.aws/credentials, leave blank for default.",
      htmlFor: "credentialsProfileName"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input,
      {
        id: "credentialsProfileName",
        placeholder: "default",
        value: options.jsonData.profile,
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.onUpdateDatasourceJsonDataOption)(props, "profile")
      }
    )
  ), options.jsonData.authType === "keys" && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, { label: "Access Key ID", htmlFor: "accessKeyId" }, ((_b = props.options.secureJsonFields) == null ? void 0 : _b.accessKey) ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input, { disabled: true, placeholder: "Configured", id: "accessKeyId" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton,
    {
      icon: "edit",
      tooltip: "Edit Access Key ID",
      type: "button",
      onClick: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.onUpdateDatasourceResetOption)(props, "accessKey")
    }
  )) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input,
    {
      id: "accessKeyId",
      value: (_d = (_c = options.secureJsonData) == null ? void 0 : _c.accessKey) != null ? _d : "",
      onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.onUpdateDatasourceSecureJsonDataOption)(props, "accessKey")
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, { label: "Secret Access Key", htmlFor: "secretKey" }, ((_e = props.options.secureJsonFields) == null ? void 0 : _e.secretKey) ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input, { disabled: true, placeholder: "Configured" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton,
    {
      id: "secretKey",
      icon: "edit",
      type: "button",
      tooltip: "Edit Secret Access Key",
      onClick: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.onUpdateDatasourceResetOption)(props, "secretKey")
    }
  )) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input,
    {
      id: "secretKey",
      value: (_g = (_f = options.secureJsonData) == null ? void 0 : _f.secretKey) != null ? _g : "",
      onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.onUpdateDatasourceSecureJsonDataOption)(props, "secretKey")
    }
  )))), !hideAssumeRoleArn && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_14__.ConfigSubSection, { title: "Assume Role" }, options.jsonData.authType === _types_js__WEBPACK_IMPORTED_MODULE_10__.AwsAuthType.GrafanaAssumeRole && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _ConnectionConfig_styles_js__WEBPACK_IMPORTED_MODULE_12__.assumeRoleInstructionsStyle }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Collapse,
    {
      label: "How to create an IAM role for grafana to assume:",
      collapsible: true,
      isOpen: isARNInstructionsOpen,
      onToggle: () => setIsARNInstructionsOpen(!isARNInstructionsOpen)
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ol", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "1. Create a new IAM role in the AWS console, and select ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "Another AWS account"), " as the", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "Trusted entity"), ".")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "2. Enter the account ID of the Grafana account that has permission to assume this role:", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, " 008923505280 "), " and check the ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "Require external ID"), " box.")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "3. Enter the following external ID:", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, props.externalId || "External Id is currently unavailable"), " and click", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "Next"), ".")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "4. Add any required permissions you would like Grafana to be able to access on your behalf. For more details on our permissions please", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      "a",
      {
        href: "https://grafana.com/docs/grafana/latest/datasources/aws-cloudwatch/",
        target: "_blank",
        rel: "noreferrer"
      },
      "read through our documentation"
    ), ".")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "5. Give the role a name and description, and click ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "Create role"), ".")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "6. Copy the ARN of the role you just created and paste it into the ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "Assume Role ARN"), " ", "field below.")))
  )), awsAssumeRoleEnabled && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field,
    {
      htmlFor: "assumeRoleArn",
      label: "Assume Role ARN",
      description: "Optional. Specifying the ARN of a role will ensure that the\n                     selected authentication provider is used to assume the role rather than the\n                     credentials directly."
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input,
      {
        id: "assumeRoleArn",
        placeholder: "arn:aws:iam:*",
        value: options.jsonData.assumeRoleArn || "",
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.onUpdateDatasourceJsonDataOption)(props, "assumeRoleArn")
      }
    )
  ), options.jsonData.authType !== _types_js__WEBPACK_IMPORTED_MODULE_10__.AwsAuthType.GrafanaAssumeRole && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field,
    {
      htmlFor: "externalId",
      label: "External ID",
      description: "If you are assuming a role in another account, that has been created with an external ID, specify the external ID here."
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input,
      {
        id: "externalId",
        placeholder: "External ID",
        value: options.jsonData.externalId || "",
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.onUpdateDatasourceJsonDataOption)(props, "externalId")
      }
    )
  ))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_14__.ConfigSubSection, { title: "Additional Settings" }, !skipEndpoint && options.jsonData.authType !== _types_js__WEBPACK_IMPORTED_MODULE_10__.AwsAuthType.GrafanaAssumeRole && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field,
    {
      label: "Endpoint",
      description: "Optionally, specify a custom endpoint for the service",
      htmlFor: "endpoint"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input,
      {
        id: "endpoint",
        placeholder: (_h = props.defaultEndpoint) != null ? _h : "https://{service}.{region}.amazonaws.com",
        value: options.jsonData.endpoint || "",
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.onUpdateDatasourceJsonDataOption)(props, "endpoint")
      }
    )
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field,
    {
      label: "Default Region",
      description: "Specify the region, such as for US West (Oregon) use ` us-west-2 ` as the region.",
      htmlFor: "defaultRegion"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Select,
      {
        inputId: "defaultRegion",
        value: (_i = regions.find((region) => region.value === options.jsonData.defaultRegion)) != null ? _i : options.jsonData.defaultRegion ? {
          label: options.jsonData.defaultRegion,
          value: options.jsonData.defaultRegion
        } : void 0,
        options: regions,
        defaultValue: options.jsonData.defaultRegion,
        allowCustomValue: true,
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.onUpdateDatasourceJsonDataOptionSelect)(props, "defaultRegion"),
        formatCreateLabel: (r) => `Use region: ${r}`,
        menuShouldPortal: true
      }
    )
  )), props.children));
};


//# sourceMappingURL=ConnectionConfig.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/components/ConnectionConfig.styles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assumeRoleInstructionsStyle: () => (/* binding */ assumeRoleInstructionsStyle)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");


const assumeRoleInstructionsStyle = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  maxWidth: "715px"
});


//# sourceMappingURL=ConnectionConfig.styles.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/components/Divider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Divider: () => (/* binding */ Divider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Divider/Divider.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _utils_version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/components/utils/version.js");





function Divider() {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  if ((0,_utils_version_js__WEBPACK_IMPORTED_MODULE_4__.isVersionGtOrEq)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.buildInfo.version, "10.1.0")) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Divider, null);
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    "div",
    {
      style: { borderTop: `1px solid ${theme.colors.border.weak}`, margin: theme.spacing(2, 0), width: "100%" }
    }
  );
}


//# sourceMappingURL=Divider.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/components/SIGV4ConnectionConfig.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SIGV4ConnectionConfig: () => (/* binding */ SIGV4ConnectionConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConnectionConfig_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/components/ConnectionConfig.js");



const SIGV4ConnectionConfig = (props) => {
  var _a, _b, _c, _d;
  const { onOptionsChange, options } = props;
  const connectionConfigProps = {
    onOptionsChange: (awsDataSourceSettings) => {
      var _a2, _b2, _c2, _d2;
      const dataSourceSettings = {
        ...options,
        jsonData: {
          ...options.jsonData,
          sigV4AuthType: awsDataSourceSettings.jsonData.authType,
          sigV4Profile: awsDataSourceSettings.jsonData.profile,
          sigV4AssumeRoleArn: awsDataSourceSettings.jsonData.assumeRoleArn,
          sigV4ExternalId: awsDataSourceSettings.jsonData.externalId,
          sigV4Region: awsDataSourceSettings.jsonData.defaultRegion,
          sigV4Endpoint: awsDataSourceSettings.jsonData.endpoint
        },
        secureJsonFields: {
          sigV4AccessKey: (_a2 = awsDataSourceSettings.secureJsonFields) == null ? void 0 : _a2.accessKey,
          sigV4SecretKey: (_b2 = awsDataSourceSettings.secureJsonFields) == null ? void 0 : _b2.secretKey
        },
        secureJsonData: {
          sigV4AccessKey: (_c2 = awsDataSourceSettings.secureJsonData) == null ? void 0 : _c2.accessKey,
          sigV4SecretKey: (_d2 = awsDataSourceSettings.secureJsonData) == null ? void 0 : _d2.secretKey
        }
      };
      onOptionsChange(dataSourceSettings);
    },
    options: {
      ...options,
      jsonData: {
        ...options.jsonData,
        authType: options.jsonData.sigV4AuthType,
        profile: options.jsonData.sigV4Profile,
        assumeRoleArn: options.jsonData.sigV4AssumeRoleArn,
        externalId: options.jsonData.sigV4ExternalId,
        defaultRegion: options.jsonData.sigV4Region,
        endpoint: options.jsonData.sigV4Endpoint
      },
      secureJsonFields: {
        accessKey: (_a = options.secureJsonFields) == null ? void 0 : _a.sigV4AccessKey,
        secretKey: (_b = options.secureJsonFields) == null ? void 0 : _b.sigV4SecretKey
      },
      secureJsonData: {
        accessKey: (_c = options.secureJsonData) == null ? void 0 : _c.sigV4AccessKey,
        secretKey: (_d = options.secureJsonData) == null ? void 0 : _d.sigV4SecretKey
      }
    },
    inExperimentalAuthComponent: props.inExperimentalAuthComponent
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "gf-form" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "SigV4 Auth Details")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ConnectionConfig_js__WEBPACK_IMPORTED_MODULE_1__.ConnectionConfig, { ...connectionConfigProps, skipHeader: true, skipEndpoint: true }));
};


//# sourceMappingURL=SIGV4ConnectionConfig.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/components/utils/version.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SemVersion: () => (/* binding */ SemVersion),
/* harmony export */   isVersionGtOrEq: () => (/* binding */ isVersionGtOrEq)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


const versionPattern = /^(\d+)(?:\.(\d+))?(?:\.(\d+))?(?:-([0-9A-Za-z\.]+))?/;
class SemVersion {
  constructor(version) {
    this.major = 0;
    this.minor = 0;
    this.patch = 0;
    this.meta = "";
    const match = versionPattern.exec(version);
    if (match) {
      this.major = Number(match[1]);
      this.minor = Number(match[2] || 0);
      this.patch = Number(match[3] || 0);
      this.meta = match[4];
    }
  }
  isGtOrEq(version) {
    const compared = new SemVersion(version);
    for (let i = 0; i < this.comparable.length; ++i) {
      if (this.comparable[i] > compared.comparable[i]) {
        return true;
      }
      if (this.comparable[i] < compared.comparable[i]) {
        return false;
      }
    }
    return true;
  }
  isValid() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(this.major);
  }
  get comparable() {
    return [this.major, this.minor, this.patch];
  }
}
function isVersionGtOrEq(a, b) {
  const aSemver = new SemVersion(a);
  return aSemver.isGtOrEq(b);
}


//# sourceMappingURL=version.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AwsAuthType: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_11__.AwsAuthType),
/* harmony export */   ConfigSelect: () => (/* reexport safe */ _sql_ConfigEditor_ConfigSelect_js__WEBPACK_IMPORTED_MODULE_3__.ConfigSelect),
/* harmony export */   ConnectionConfig: () => (/* reexport safe */ _components_ConnectionConfig_js__WEBPACK_IMPORTED_MODULE_0__.ConnectionConfig),
/* harmony export */   DEFAULT_LABEL_WIDTH: () => (/* reexport safe */ _components_ConnectionConfig_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_LABEL_WIDTH),
/* harmony export */   Divider: () => (/* reexport safe */ _components_Divider_js__WEBPACK_IMPORTED_MODULE_1__.Divider),
/* harmony export */   FillValueOptions: () => (/* reexport safe */ _sql_QueryEditor_FillValueSelect_js__WEBPACK_IMPORTED_MODULE_9__.FillValueOptions),
/* harmony export */   FillValueSelect: () => (/* reexport safe */ _sql_QueryEditor_FillValueSelect_js__WEBPACK_IMPORTED_MODULE_9__.FillValueSelect),
/* harmony export */   FormatSelect: () => (/* reexport safe */ _sql_QueryEditor_FormatSelect_js__WEBPACK_IMPORTED_MODULE_8__.FormatSelect),
/* harmony export */   InlineInput: () => (/* reexport safe */ _sql_ConfigEditor_InlineInput_js__WEBPACK_IMPORTED_MODULE_4__.InlineInput),
/* harmony export */   QueryCodeEditor: () => (/* reexport safe */ _sql_QueryEditor_QueryCodeEditor_js__WEBPACK_IMPORTED_MODULE_6__.QueryCodeEditor),
/* harmony export */   QueryEditorHeader: () => (/* reexport safe */ _sql_QueryEditor_QueryEditorHeader_js__WEBPACK_IMPORTED_MODULE_7__.QueryEditorHeader),
/* harmony export */   ResourceSelector: () => (/* reexport safe */ _sql_ResourceSelector_js__WEBPACK_IMPORTED_MODULE_5__.ResourceSelector),
/* harmony export */   SIGV4ConnectionConfig: () => (/* reexport safe */ _components_SIGV4ConnectionConfig_js__WEBPACK_IMPORTED_MODULE_2__.SIGV4ConnectionConfig),
/* harmony export */   appendTemplateVariablesAsSuggestions: () => (/* reexport safe */ _sql_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.appendTemplateVariablesAsSuggestions),
/* harmony export */   applySQLTemplateVariables: () => (/* reexport safe */ _sql_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.applySQLTemplateVariables),
/* harmony export */   awsAuthProviderOptions: () => (/* reexport safe */ _providers_js__WEBPACK_IMPORTED_MODULE_13__.awsAuthProviderOptions),
/* harmony export */   filterSQLQuery: () => (/* reexport safe */ _sql_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.filterSQLQuery),
/* harmony export */   standardRegions: () => (/* reexport safe */ _regions_js__WEBPACK_IMPORTED_MODULE_12__.standardRegions)
/* harmony export */ });
/* harmony import */ var _components_ConnectionConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/components/ConnectionConfig.js");
/* harmony import */ var _components_Divider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/components/Divider.js");
/* harmony import */ var _components_SIGV4ConnectionConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/components/SIGV4ConnectionConfig.js");
/* harmony import */ var _sql_ConfigEditor_ConfigSelect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/sql/ConfigEditor/ConfigSelect.js");
/* harmony import */ var _sql_ConfigEditor_InlineInput_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/sql/ConfigEditor/InlineInput.js");
/* harmony import */ var _sql_ResourceSelector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/sql/ResourceSelector.js");
/* harmony import */ var _sql_QueryEditor_QueryCodeEditor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/sql/QueryEditor/QueryCodeEditor.js");
/* harmony import */ var _sql_QueryEditor_QueryEditorHeader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/sql/QueryEditor/QueryEditorHeader.js");
/* harmony import */ var _sql_QueryEditor_FormatSelect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/sql/QueryEditor/FormatSelect.js");
/* harmony import */ var _sql_QueryEditor_FillValueSelect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/sql/QueryEditor/FillValueSelect.js");
/* harmony import */ var _sql_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/sql/utils/utils.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/types.js");
/* harmony import */ var _regions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/regions.js");
/* harmony import */ var _providers_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/providers.js");














//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/providers.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   awsAuthProviderOptions: () => (/* binding */ awsAuthProviderOptions)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/types.js");


const awsAuthProviderOptions = [
  {
    label: "Workspace IAM Role",
    value: _types_js__WEBPACK_IMPORTED_MODULE_0__.AwsAuthType.EC2IAMRole
  },
  {
    label: "Grafana Assume Role",
    value: _types_js__WEBPACK_IMPORTED_MODULE_0__.AwsAuthType.GrafanaAssumeRole
  },
  {
    label: "AWS SDK Default",
    value: _types_js__WEBPACK_IMPORTED_MODULE_0__.AwsAuthType.Default
  },
  {
    label: "Access & secret key",
    value: _types_js__WEBPACK_IMPORTED_MODULE_0__.AwsAuthType.Keys
  },
  {
    label: "Credentials file",
    value: _types_js__WEBPACK_IMPORTED_MODULE_0__.AwsAuthType.Credentials
  }
];


//# sourceMappingURL=providers.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/regions.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   standardRegions: () => (/* binding */ standardRegions)
/* harmony export */ });
const standardRegions = [
  "af-south-1",
  "ap-east-1",
  "ap-northeast-1",
  "ap-northeast-2",
  "ap-northeast-3",
  "ap-south-1",
  "ap-south-2",
  "ap-southeast-1",
  "ap-southeast-2",
  "ap-southeast-3",
  "ap-southeast-4",
  "ca-central-1",
  "ca-west-1",
  "cn-north-1",
  "cn-northwest-1",
  "eu-central-1",
  "eu-central-2",
  "eu-north-1",
  "eu-south-1",
  "eu-south-2",
  "eu-west-1",
  "eu-west-2",
  "eu-west-3",
  "il-central-1",
  "me-central-1",
  "me-south-1",
  "sa-east-1",
  "us-east-1",
  "us-east-2",
  "us-gov-east-1",
  "us-gov-west-1",
  "us-iso-east-1",
  "us-isob-east-1",
  "us-west-1",
  "us-west-2"
];


//# sourceMappingURL=regions.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/sql/ConfigEditor/ConfigSelect.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigSelect: () => (/* binding */ ConfigSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ResourceSelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/sql/ResourceSelector.js");
/* harmony import */ var _components_ConnectionConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/components/ConnectionConfig.js");




function ConfigSelect(props) {
  var _a, _b, _c;
  const { jsonData } = props.options;
  const commonProps = {
    title: jsonData.defaultRegion ? "" : "select a default region",
    labelWidth: (_a = props.labelWidth) != null ? _a : _components_ConnectionConfig_js__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_LABEL_WIDTH,
    className: "width-30"
  };
  const dependencies = [
    props.options.jsonData.assumeRoleArn,
    props.options.jsonData.authType,
    props.options.jsonData.defaultRegion,
    props.options.jsonData.endpoint,
    props.options.jsonData.externalId,
    props.options.jsonData.profile,
    (_b = props.options.secureJsonData) == null ? void 0 : _b.accessKey,
    (_c = props.options.secureJsonData) == null ? void 0 : _c.secretKey
  ].concat(props.dependencies);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _ResourceSelector_js__WEBPACK_IMPORTED_MODULE_1__.ResourceSelector,
    {
      id: props.id,
      label: props.label,
      "data-testid": props["data-testid"],
      onChange: props.onChange,
      fetch: props.fetch,
      value: props.value,
      saveOptions: props.saveOptions,
      dependencies,
      hidden: props.hidden,
      disabled: props.disabled || !jsonData.defaultRegion,
      allowCustomValue: props.allowCustomValue,
      autoFocus: props.autoFocus,
      backspaceRemovesValue: props.backspaceRemovesValue,
      invalid: props.invalid,
      isClearable: props.isClearable,
      isMulti: props.isMulti,
      inputId: props.inputId,
      showAllSelectedWhenOpen: props.showAllSelectedWhenOpen,
      maxMenuHeight: props.maxMenuHeight,
      minMenuHeight: props.minMenuHeight,
      maxVisibleValues: props.maxVisibleValues,
      menuPlacement: props.menuPlacement,
      menuPosition: props.menuPosition,
      noOptionsMessage: props.noOptionsMessage,
      placeholder: props.placeholder,
      width: props.width,
      onBlur: props.onBlur,
      onCreateOption: props.onCreateOption,
      onInputChange: props.onInputChange,
      isOptionDisabled: props.isOptionDisabled,
      ...commonProps
    }
  );
}


//# sourceMappingURL=ConfigSelect.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/sql/ConfigEditor/InlineInput.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineInput: () => (/* binding */ InlineInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _components_ConnectionConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/components/ConnectionConfig.js");




function InlineInput(props) {
  var _a;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField,
    {
      label: props.label,
      labelWidth: (_a = props.labelWidth) != null ? _a : _components_ConnectionConfig_js__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_LABEL_WIDTH,
      tooltip: props.tooltip,
      hidden: props.hidden,
      disabled: props.disabled
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input,
      {
        "data-testid": props["data-testid"],
        className: "width-30",
        value: props.value,
        onChange: props.onChange,
        placeholder: props.placeholder,
        disabled: props.disabled
      }
    )
  );
}


//# sourceMappingURL=InlineInput.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/sql/QueryEditor/FillValueSelect.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FillValueOptions: () => (/* binding */ FillValueOptions),
/* harmony export */   FillValueSelect: () => (/* binding */ FillValueSelect),
/* harmony export */   SelectableFillValueOptions: () => (/* binding */ SelectableFillValueOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorField.js");




var FillValueOptions = /* @__PURE__ */ ((FillValueOptions2) => {
  FillValueOptions2[FillValueOptions2["Previous"] = 0] = "Previous";
  FillValueOptions2[FillValueOptions2["Null"] = 1] = "Null";
  FillValueOptions2[FillValueOptions2["Value"] = 2] = "Value";
  return FillValueOptions2;
})(FillValueOptions || {});
const SelectableFillValueOptions = [
  {
    label: "Previous Value",
    value: 0 /* Previous */
  },
  {
    label: "NULL",
    value: 1 /* Null */
  },
  {
    label: "Value",
    value: 2 /* Value */
  }
];
function FillValueSelect(props) {
  var _a, _b, _c;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorField, { label: "Fill with", tooltip: "value to fill missing points", htmlFor: "fillWith" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select,
    {
      id: "fillWith",
      "aria-label": "Fill with",
      "data-testid": "table-fill-with-select",
      options: SelectableFillValueOptions,
      value: (_b = (_a = props.query.fillMode) == null ? void 0 : _a.mode) != null ? _b : 0 /* Previous */,
      onChange: ({ value }) => {
        var _a2;
        props.onChange({
          ...props.query,
          // Keep the fillMode.value in case FillValueOptions.Value mode is selected back
          fillMode: { ...props.query.fillMode, mode: value }
        });
        (_a2 = props.onRunQuery) == null ? void 0 : _a2.call(props);
      },
      menuShouldPortal: true
    }
  )), ((_c = props.query.fillMode) == null ? void 0 : _c.mode) === 2 /* Value */ && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorField, { label: "Value", htmlFor: "valueToFill", width: 6 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input,
    {
      id: "valueToFill",
      "aria-label": "Value",
      type: "number",
      value: props.query.fillMode.value,
      onChange: ({ currentTarget }) => props.onChange({
        ...props.query,
        fillMode: {
          mode: 2 /* Value */,
          value: currentTarget.valueAsNumber
        }
      }),
      onBlur: () => {
        var _a2;
        return (_a2 = props.onRunQuery) == null ? void 0 : _a2.call(props);
      }
    }
  )));
}


//# sourceMappingURL=FillValueSelect.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/sql/QueryEditor/FormatSelect.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormatSelect: () => (/* binding */ FormatSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");



function FormatSelect(props) {
  var _a;
  const onChangeFormat = (e) => {
    var _a2;
    props.onChange({
      ...props.query,
      format: e.value || 0
    });
    (_a2 = props.onRunQuery) == null ? void 0 : _a2.call(props);
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select,
    {
      "aria-label": "Format data frames as",
      id: (_a = props.id) != null ? _a : "formatAs",
      options: props.options,
      value: props.query.format,
      onChange: onChangeFormat,
      menuShouldPortal: true
    }
  );
}


//# sourceMappingURL=FormatSelect.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/sql/QueryEditor/QueryCodeEditor.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryCodeEditor: () => (/* binding */ QueryCodeEditor)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");




function QueryCodeEditor(props) {
  const { getSuggestions, query } = props;
  const { rawSQL } = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.defaults)(props.query, { rawSQL: "" });
  const onRawSqlChange = (rawSQL2) => {
    const query2 = {
      ...props.query,
      rawSQL: rawSQL2
    };
    props.onChange(query2);
    props.onRunQuery();
  };
  const suggestionsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    suggestionsRef.current = getSuggestions(query);
  }, [getSuggestions, query]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CodeEditor,
    {
      language: props.language,
      value: rawSQL,
      onBlur: onRawSqlChange,
      showMiniMap: false,
      showLineNumbers: true,
      getSuggestions: () => suggestionsRef.current,
      height: "240px",
      ...props.editorProps
    }
  );
}


//# sourceMappingURL=QueryCodeEditor.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/sql/QueryEditor/QueryEditorHeader.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryEditorHeader: () => (/* binding */ QueryEditorHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorHeader.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/FlexItem.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_async_query_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/async-query-data/dist/esm/index.js");






function QueryEditorHeader({
  query,
  showAsyncQueryButtons,
  extraHeaderElementLeft,
  extraHeaderElementRight,
  enableRunButton,
  onRunQuery,
  data,
  cancel
}) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.EditorHeader, null, extraHeaderElementLeft, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.FlexItem, { grow: 1 }), showAsyncQueryButtons ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_async_query_data__WEBPACK_IMPORTED_MODULE_5__.RunQueryButtons,
    {
      onRunQuery,
      enableRun: enableRunButton,
      query,
      onCancelQuery: (target) => {
        cancel == null ? void 0 : cancel(target);
      },
      state: data == null ? void 0 : data.state
    }
  ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button,
    {
      variant: enableRunButton ? "primary" : "secondary",
      size: "sm",
      onClick: onRunQuery,
      icon: (data == null ? void 0 : data.state) === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Loading ? "fa fa-spinner" : void 0,
      disabled: (data == null ? void 0 : data.state) === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Loading || !enableRunButton
    },
    "Run queries"
  ), extraHeaderElementRight);
}


//# sourceMappingURL=QueryEditorHeader.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/sql/ResourceSelector.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourceSelector: () => (/* binding */ ResourceSelector)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/sql/types.js");





function ResourceSelector(props) {
  const propsDependencies = props.dependencies;
  const propsOnChange = props.onChange;
  const dependencies = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(props.dependencies);
  const fetched = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
  const resource = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(props.value || props.default || null);
  const [resources, setResources] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(
    resource.current ? [resource.current] : []
  );
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const defaultOpts = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const opts = [
      {
        label: `default (${props.default})`,
        value: _types_js__WEBPACK_IMPORTED_MODULE_3__.defaultKey,
        description: `Default value set in the data source`
      }
    ];
    if (props.value && props.value !== _types_js__WEBPACK_IMPORTED_MODULE_3__.defaultKey) {
      opts.push({ label: props.value, value: props.value });
    }
    return opts;
  }, [props.default, props.value]);
  const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.default ? defaultOpts : []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (props.resources !== void 0) {
      setResources(props.resources);
    }
  }, [props.resources]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const newOptions = props.default ? defaultOpts : [];
    if (resources.length) {
      resources.forEach((r) => {
        const value = typeof r === "string" ? r : r.value;
        if (!newOptions.find((o) => o.value === value)) {
          typeof r === "string" ? newOptions.push({ label: r, value: r }) : newOptions.push(r);
        }
      });
      setOptions(newOptions);
    } else {
      setOptions([]);
    }
  }, [resources, defaultOpts, props.default]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(propsDependencies, dependencies.current)) {
      fetched.current = false;
      resource.current = null;
      dependencies.current = propsDependencies;
      propsOnChange(null);
    }
  }, [propsDependencies, propsOnChange]);
  const fetch = async () => {
    var _a;
    if (fetched.current) {
      return;
    }
    if (props.saveOptions) {
      await props.saveOptions();
    }
    try {
      const resources2 = await ((_a = props.fetch) == null ? void 0 : _a.call(props)) || [];
      setResources(resources2);
    } finally {
      fetched.current = true;
    }
  };
  const onChange = (e) => {
    propsOnChange(e);
    if (e.value) {
      resource.current = e.value;
    }
  };
  const onClick = async () => {
    setIsLoading(true);
    try {
      await fetch();
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Select,
    {
      ...props,
      id: props.id,
      inputId: props.id,
      "aria-label": props.label,
      options,
      onChange,
      isLoading,
      className: props.className || "min-width-6",
      onOpenMenu: () => props.fetch && onClick(),
      menuShouldPortal: true
    }
  );
}


//# sourceMappingURL=ResourceSelector.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/sql/types.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultKey: () => (/* binding */ defaultKey)
/* harmony export */ });
const defaultKey = "__default";


//# sourceMappingURL=types.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/sql/utils/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendTemplateVariablesAsSuggestions: () => (/* binding */ appendTemplateVariablesAsSuggestions),
/* harmony export */   applySQLTemplateVariables: () => (/* binding */ applySQLTemplateVariables),
/* harmony export */   filterSQLQuery: () => (/* binding */ filterSQLQuery)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/types.ts");


function filterSQLQuery(query) {
  return !!query.rawSQL;
}
function applySQLTemplateVariables(query, scopedVars, getTemplateSrv) {
  const templateSrv = getTemplateSrv();
  return {
    ...query,
    rawSQL: templateSrv.replace(query.rawSQL, scopedVars, interpolateVariable)
  };
}
function interpolateVariable(value) {
  if (typeof value === "string" || typeof value === "number") {
    return value;
  }
  const quotedValues = value.map((v) => {
    return quoteLiteral(v);
  });
  return quotedValues.join(",");
}
function quoteLiteral(value) {
  return "'" + String(value).replace(/'/g, "''") + "'";
}
const appendTemplateVariablesAsSuggestions = (getTemplateSrv, sugs) => {
  const templateSrv = getTemplateSrv();
  const templateSugs = [];
  templateSrv.getVariables().forEach((variable) => {
    const label = "$" + variable.name;
    let val = templateSrv.replace(label);
    if (val === label) {
      val = "";
    }
    templateSugs.push({
      label,
      kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_0__.CodeEditorSuggestionItemKind.Text,
      detail: `(Template Variable) ${val}`
    });
  });
  return sugs.concat(templateSugs);
};


//# sourceMappingURL=utils.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/types.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AwsAuthType: () => (/* binding */ AwsAuthType)
/* harmony export */ });
var AwsAuthType = /* @__PURE__ */ ((AwsAuthType2) => {
  AwsAuthType2["Keys"] = "keys";
  AwsAuthType2["Credentials"] = "credentials";
  AwsAuthType2["Default"] = "default";
  AwsAuthType2["EC2IAMRole"] = "ec2_iam_role";
  AwsAuthType2["ARN"] = "arn";
  AwsAuthType2["GrafanaAssumeRole"] = "grafana_assume_role";
  return AwsAuthType2;
})(AwsAuthType || {});


//# sourceMappingURL=types.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/ConfigSection/ConfigSection.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigSection: () => (/* binding */ ConfigSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _GenericConfigSection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/ConfigSection/GenericConfigSection.js");



const ConfigSection = ({ children, ...props }) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_GenericConfigSection_js__WEBPACK_IMPORTED_MODULE_1__.GenericConfigSection, { ...props, kind: "section" }, children);
};


//# sourceMappingURL=ConfigSection.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorHeader.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorHeader: () => (/* binding */ EditorHeader)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





const EditorHeader = ({ children }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: styles.root }, children);
};
const getStyles = (theme) => ({
  root: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: theme.spacing(3),
    minHeight: theme.spacing(4)
  })
});


//# sourceMappingURL=EditorHeader.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/FlexItem.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlexItem: () => (/* binding */ FlexItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");


const FlexItem = ({ grow, shrink }) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: "block", flexGrow: grow, flexShrink: shrink } });
};


//# sourceMappingURL=FlexItem.js.map


/***/ }),

/***/ "./public/app/plugins/datasource/alertmanager/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigEditor: () => (/* binding */ ConfigEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/immer/dist/immer.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/dist/index.js");
/* harmony import */ var _grafana_aws_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/DataSourceSettings/DataSourceHttpSettings.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");









const IMPL_OPTIONS = [
  {
    value: _types__WEBPACK_IMPORTED_MODULE_12__.AlertManagerImplementation.mimir,
    label: "Mimir",
    description: `https://grafana.com/oss/mimir/. An open source, horizontally scalable, highly available, multi-tenant, long-term storage for Prometheus.`
  },
  {
    value: _types__WEBPACK_IMPORTED_MODULE_12__.AlertManagerImplementation.cortex,
    label: "Cortex",
    description: `https://cortexmetrics.io/`
  },
  {
    value: _types__WEBPACK_IMPORTED_MODULE_12__.AlertManagerImplementation.prometheus,
    label: "Prometheus",
    description: "https://prometheus.io/. Does not support editing configuration via API, so contact points and notification policies are read-only."
  }
];
const ConfigEditor = (props) => {
  const { options, onOptionsChange } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!options.jsonData.implementation) {
      onOptionsChange(
        (0,immer__WEBPACK_IMPORTED_MODULE_1__.produce)(options, (draft) => {
          draft.jsonData.implementation = _types__WEBPACK_IMPORTED_MODULE_12__.AlertManagerImplementation.mimir;
        })
      );
    }
  }, [options, onOptionsChange]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: "page-heading", children: "Alertmanager" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Box, { marginBottom: 5, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineField, { label: "Implementation", labelWidth: 26, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Select,
        {
          width: 40,
          options: IMPL_OPTIONS,
          value: options.jsonData.implementation || _types__WEBPACK_IMPORTED_MODULE_12__.AlertManagerImplementation.mimir,
          onChange: (value) => onOptionsChange({
            ...options,
            jsonData: {
              ...options.jsonData,
              implementation: value.value
            }
          })
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineField,
        {
          label: "Receive Grafana Alerts",
          tooltip: "When enabled, Grafana-managed alerts are sent to this Alertmanager.",
          labelWidth: 26,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.InlineSwitch,
            {
              value: options.jsonData.handleGrafanaManagedAlerts ?? false,
              onChange: (e) => {
                onOptionsChange(
                  (0,immer__WEBPACK_IMPORTED_MODULE_1__.produce)(options, (draft) => {
                    draft.jsonData.handleGrafanaManagedAlerts = e.currentTarget.checked;
                  })
                );
              }
            }
          )
        }
      ),
      options.jsonData.handleGrafanaManagedAlerts && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { variant: "bodySmall", color: "secondary", children: [
        "Make sure to enable the alert forwarding on the ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__.Link, { to: "/alerting/admin", children: "settings page" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.DataSourceHttpSettings,
      {
        defaultUrl: "",
        dataSourceConfig: options,
        showAccessOptions: true,
        onChange: onOptionsChange,
        sigV4AuthToggleEnabled: app_core_config__WEBPACK_IMPORTED_MODULE_11__.config.sigV4AuthEnabled,
        renderSigV4Editor: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_aws_sdk__WEBPACK_IMPORTED_MODULE_4__.SIGV4ConnectionConfig, { ...props }),
        secureSocksDSProxyEnabled: false
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/alertmanager/DataSource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertManagerDatasource: () => (/* binding */ AlertManagerDatasource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/datasource.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _features_alerting_unified_api_buildInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/api/buildInfo.ts");
/* harmony import */ var _features_alerting_unified_utils_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");







class AlertManagerDatasource extends _grafana_data__WEBPACK_IMPORTED_MODULE_2__.DataSourceApi {
  constructor(instanceSettings) {
    super(instanceSettings);
    this.instanceSettings = instanceSettings;
  }
  // `query()` has to be implemented but we actually don't use it, just need this
  // data source to proxy requests.
  // @ts-ignore
  query() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({
      data: []
    });
  }
  _request(url) {
    const options = {
      headers: {},
      method: "GET",
      url: this.instanceSettings.url + url
    };
    if (this.instanceSettings.basicAuth || this.instanceSettings.withCredentials) {
      this.instanceSettings.withCredentials = true;
    }
    if (this.instanceSettings.basicAuth) {
      options.headers.Authorization = this.instanceSettings.basicAuth;
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().fetch(options));
  }
  async testDatasource() {
    let alertmanagerResponse;
    const amUrl = this.instanceSettings.url;
    const amFeatures = amUrl ? await (0,_features_alerting_unified_api_buildInfo__WEBPACK_IMPORTED_MODULE_4__.discoverAlertmanagerFeaturesByUrl)(amUrl) : { lazyConfigInit: false };
    if (this.instanceSettings.jsonData.implementation === _types__WEBPACK_IMPORTED_MODULE_6__.AlertManagerImplementation.prometheus) {
      try {
        alertmanagerResponse = await this._request("/alertmanager/api/v2/status");
        if (alertmanagerResponse && alertmanagerResponse?.status === 200) {
          return {
            status: "error",
            message: "It looks like you have chosen Prometheus implementation, but detected a Mimir or Cortex endpoint. Please update implementation selection and try again."
          };
        }
      } catch (e) {
      }
      try {
        alertmanagerResponse = await this._request("/api/v2/status");
      } catch (e) {
      }
    } else {
      try {
        alertmanagerResponse = await this._request("/api/v2/status");
        if (alertmanagerResponse && alertmanagerResponse?.status === 200) {
          return {
            status: "error",
            message: "It looks like you have chosen a Mimir or Cortex implementation, but detected a Prometheus endpoint. Please update implementation selection and try again."
          };
        }
      } catch (e) {
      }
      try {
        alertmanagerResponse = await this._request("/alertmanager/api/v2/status");
      } catch (e) {
        if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.isFetchError)(e) && amFeatures.lazyConfigInit && (0,_features_alerting_unified_utils_redux__WEBPACK_IMPORTED_MODULE_5__.messageFromError)(e)?.includes("the Alertmanager is not configured")) {
          return {
            status: "success",
            message: "Health check passed.",
            details: { message: "Mimir Alertmanager without the fallback configuration has been discovered." }
          };
        }
      }
    }
    return alertmanagerResponse?.status === 200 ? {
      status: "success",
      message: "Health check passed."
    } : {
      status: "error",
      message: "Health check failed."
    };
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/alertmanager/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/datasource.ts");
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/ConfigEditor.tsx");
/* harmony import */ var _DataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/DataSource.ts");




const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_DataSource__WEBPACK_IMPORTED_MODULE_2__.AlertManagerDatasource).setConfigEditor(_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__.ConfigEditor);


/***/ })

}]);
//# sourceMappingURL=alertmanagerPlugin.9115bfb65de83765137c.js.map