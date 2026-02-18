(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["cloudwatchPlugin"],{

/***/ "./node_modules/@grafana/async-query-data/dist/esm/DatasourceWithAsyncBackend.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observable: () => (/* binding */ observable)
/* harmony export */ });
var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();


//# sourceMappingURL=observable.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArrayLike: () => (/* binding */ isArrayLike)
/* harmony export */ });
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });


//# sourceMappingURL=isArrayLike.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noop: () => (/* binding */ noop)
/* harmony export */ });
function noop() { }


//# sourceMappingURL=noop.js.map


/***/ }),

/***/ "./node_modules/@grafana/async-query-data/dist/esm/node_modules/rxjs/dist/esm5/internal/util/pipe.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultKey: () => (/* binding */ defaultKey)
/* harmony export */ });
const defaultKey = "__default";


//# sourceMappingURL=types.js.map


/***/ }),

/***/ "./node_modules/@grafana/aws-sdk/dist/esm/sql/utils/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/AccessoryButton.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessoryButton: () => (/* binding */ AccessoryButton)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





const AccessoryButton = ({ className, ...props }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getButtonStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { ...props, className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(className, styles.button) });
};
const getButtonStyles = (theme) => ({
  button: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    paddingLeft: theme.spacing(3 / 2),
    paddingRight: theme.spacing(3 / 2)
  })
});


//# sourceMappingURL=AccessoryButton.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorFieldGroup.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorFieldGroup: () => (/* binding */ EditorFieldGroup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _EditorStack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorStack.js");



const EditorFieldGroup = ({ children }) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditorStack_js__WEBPACK_IMPORTED_MODULE_1__.EditorStack, { gap: 1 }, children);
};


//# sourceMappingURL=EditorFieldGroup.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorHeader.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorList.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorList: () => (/* binding */ EditorList)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _EditorStack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorStack.js");




const EditorList = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function EditorList2({ items, renderItem, onChange }, ref) {
  const onAddItem = () => {
    const newItems = [...items, {}];
    onChange(newItems);
  };
  const onChangeItem = (itemIndex, newItem) => {
    const newItems = [...items];
    newItems[itemIndex] = newItem;
    onChange(newItems);
  };
  const onDeleteItem = (itemIndex) => {
    const newItems = [...items];
    newItems.splice(itemIndex, 1);
    onChange(newItems);
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_EditorStack_js__WEBPACK_IMPORTED_MODULE_2__.EditorStack, null, items.map((item, index) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { key: index }, renderItem(
    item,
    (newItem) => onChangeItem(index, newItem),
    () => onDeleteItem(index)
  ))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Button, { ref, onClick: onAddItem, variant: "secondary", size: "md", icon: "plus", "aria-label": "Add", type: "button" }));
});


//# sourceMappingURL=EditorList.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorRow.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorRow: () => (/* binding */ EditorRow)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _EditorStack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorStack.js");






const EditorRow = ({ children }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: styles.root }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_EditorStack_js__WEBPACK_IMPORTED_MODULE_3__.EditorStack, { gap: 2 }, children));
};
const getStyles = (theme) => {
  return {
    root: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      padding: theme.spacing(1),
      backgroundColor: theme.colors.background.secondary,
      borderRadius: theme.shape.radius.default
    })
  };
};


//# sourceMappingURL=EditorRow.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorRows.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorRows: () => (/* binding */ EditorRows)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _EditorStack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorStack.js");



const EditorRows = ({ children }) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditorStack_js__WEBPACK_IMPORTED_MODULE_1__.EditorStack, { gap: 0.5, direction: "column" }, children);
};


//# sourceMappingURL=EditorRows.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorStack.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorStack: () => (/* binding */ EditorStack)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");




const EditorStack = ({ children, wrap: wrapItems = true, ...props }) => {
  var _a, _b;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Stack, { wrap: wrapItems ? "wrap" : undefined, direction: (_a = props.direction) != null ? _a : "row", gap: (_b = props.gap) != null ? _b : 2, ...props }, children);
};


//# sourceMappingURL=EditorStack.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorSwitch.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorSwitch: () => (/* binding */ EditorSwitch)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");




const EditorSwitch = (props) => {
  const styles = getStyles();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", { className: styles.switch }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { ...props }));
};
const getStyles = () => {
  return {
    switch: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: "flex",
      alignItems: "center",
      minHeight: 30
    })
  };
};


//# sourceMappingURL=EditorSwitch.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/FlexItem.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/InlineSelect.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSelect: () => (/* binding */ InlineSelect)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Select/SelectContainer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





function InlineSelect({ label: labelProp, ...props }) {
  const [id] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => Math.random().toString(16).slice(2));
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getSelectStyles);
  const components = {
    SelectContainer,
    ValueContainer,
    SingleValue: ValueContainer
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: styles.root }, labelProp && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", { className: styles.label, htmlFor: id }, labelProp, ":", "\xA0"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { openMenuOnFocus: true, inputId: id, ...props, components }));
}
const SelectContainer = (props) => {
  const { children } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getSelectStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SelectContainer, { ...props, className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(props.className, styles.container) }, children);
};
const ValueContainer = (props) => {
  const { className, children } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getSelectStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(className, styles.valueContainer) }, children);
};
const getSelectStyles = (theme) => ({
  root: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    display: "flex",
    fontSize: 12,
    alignItems: "center"
  }),
  label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    color: theme.colors.text.secondary,
    whiteSpace: "nowrap"
  }),
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    background: "none",
    borderColor: "transparent"
  }),
  valueContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    display: "flex",
    alignItems: "center",
    flex: "initial",
    color: theme.colors.text.secondary,
    fontSize: 12
  })
});


//# sourceMappingURL=InlineSelect.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/InputGroup.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputGroup: () => (/* binding */ InputGroup)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");




const InputGroup = ({ children }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const modifiedChildren = react__WEBPACK_IMPORTED_MODULE_2__.Children.map(children, (child) => {
    if ((0,react__WEBPACK_IMPORTED_MODULE_2__.isValidElement)(child) && child.props.invalid) {
      return (0,react__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(child, { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(child.props.className, styles.invalidChild) });
    }
    return child;
  });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", { className: styles.root }, modifiedChildren);
};
const borderPriority = [
  "",
  // lowest priority
  "base",
  "hovered",
  "invalid",
  "focused"
  // highest priority
];
const getStyles = () => ({
  root: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    display: "flex",
    // Style the direct children of the component
    "> *": {
      "&:not(:first-child)": {
        // Negative margin hides the double-border on adjacent selects
        marginLeft: -1
      },
      "&:first-child": {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      },
      "&:last-child": {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      },
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      },
      //
      position: "relative",
      zIndex: borderPriority.indexOf("base"),
      // Adjacent borders are overlapping, so raise children up when hovering etc
      // so all that child's borders are visible.
      "&:hover": {
        zIndex: borderPriority.indexOf("hovered")
      },
      "&:focus-within": {
        zIndex: borderPriority.indexOf("focused")
      }
    }
  }),
  invalidChild: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    zIndex: borderPriority.indexOf("invalid")
  })
});


//# sourceMappingURL=InputGroup.js.map


/***/ }),

/***/ "./node_modules/common-tags/es/TemplateTag/TemplateTag.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class TemplateTag
 * @classdesc Consumes a pipeline of composable transformer plugins and produces a template tag.
 */
var TemplateTag = function () {
  /**
   * constructs a template tag
   * @constructs TemplateTag
   * @param  {...Object} [...transformers] - an array or arguments list of transformers
   * @return {Function}                    - a template tag
   */
  function TemplateTag() {
    var _this = this;

    for (var _len = arguments.length, transformers = Array(_len), _key = 0; _key < _len; _key++) {
      transformers[_key] = arguments[_key];
    }

    _classCallCheck(this, TemplateTag);

    this.tag = function (strings) {
      for (var _len2 = arguments.length, expressions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        expressions[_key2 - 1] = arguments[_key2];
      }

      if (typeof strings === 'function') {
        // if the first argument passed is a function, assume it is a template tag and return
        // an intermediary tag that processes the template using the aforementioned tag, passing the
        // result to our tag
        return _this.interimTag.bind(_this, strings);
      }

      if (typeof strings === 'string') {
        // if the first argument passed is a string, just transform it
        return _this.transformEndResult(strings);
      }

      // else, return a transformed end result of processing the template with our tag
      strings = strings.map(_this.transformString.bind(_this));
      return _this.transformEndResult(strings.reduce(_this.processSubstitutions.bind(_this, expressions)));
    };

    // if first argument is an array, extrude it as a list of transformers
    if (transformers.length > 0 && Array.isArray(transformers[0])) {
      transformers = transformers[0];
    }

    // if any transformers are functions, this means they are not initiated - automatically initiate them
    this.transformers = transformers.map(function (transformer) {
      return typeof transformer === 'function' ? transformer() : transformer;
    });

    // return an ES2015 template tag
    return this.tag;
  }

  /**
   * Applies all transformers to a template literal tagged with this method.
   * If a function is passed as the first argument, assumes the function is a template tag
   * and applies it to the template, returning a template tag.
   * @param  {(Function|String|Array<String>)} strings        - Either a template tag or an array containing template strings separated by identifier
   * @param  {...*}                            ...expressions - Optional list of substitution values.
   * @return {(String|Function)}                              - Either an intermediary tag function or the results of processing the template.
   */


  _createClass(TemplateTag, [{
    key: 'interimTag',


    /**
     * An intermediary template tag that receives a template tag and passes the result of calling the template with the received
     * template tag to our own template tag.
     * @param  {Function}        nextTag          - the received template tag
     * @param  {Array<String>}   template         - the template to process
     * @param  {...*}            ...substitutions - `substitutions` is an array of all substitutions in the template
     * @return {*}                                - the final processed value
     */
    value: function interimTag(previousTag, template) {
      for (var _len3 = arguments.length, substitutions = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        substitutions[_key3 - 2] = arguments[_key3];
      }

      return this.tag(_templateObject, previousTag.apply(undefined, [template].concat(substitutions)));
    }

    /**
     * Performs bulk processing on the tagged template, transforming each substitution and then
     * concatenating the resulting values into a string.
     * @param  {Array<*>} substitutions - an array of all remaining substitutions present in this template
     * @param  {String}   resultSoFar   - this iteration's result string so far
     * @param  {String}   remainingPart - the template chunk after the current substitution
     * @return {String}                 - the result of joining this iteration's processed substitution with the result
     */

  }, {
    key: 'processSubstitutions',
    value: function processSubstitutions(substitutions, resultSoFar, remainingPart) {
      var substitution = this.transformSubstitution(substitutions.shift(), resultSoFar);
      return ''.concat(resultSoFar, substitution, remainingPart);
    }

    /**
     * Iterate through each transformer, applying the transformer's `onString` method to the template
     * strings before all substitutions are processed.
     * @param {String}  str - The input string
     * @return {String}     - The final results of processing each transformer
     */

  }, {
    key: 'transformString',
    value: function transformString(str) {
      var cb = function cb(res, transform) {
        return transform.onString ? transform.onString(res) : res;
      };
      return this.transformers.reduce(cb, str);
    }

    /**
     * When a substitution is encountered, iterates through each transformer and applies the transformer's
     * `onSubstitution` method to the substitution.
     * @param  {*}      substitution - The current substitution
     * @param  {String} resultSoFar  - The result up to and excluding this substitution.
     * @return {*}                   - The final result of applying all substitution transformations.
     */

  }, {
    key: 'transformSubstitution',
    value: function transformSubstitution(substitution, resultSoFar) {
      var cb = function cb(res, transform) {
        return transform.onSubstitution ? transform.onSubstitution(res, resultSoFar) : res;
      };
      return this.transformers.reduce(cb, substitution);
    }

    /**
     * Iterates through each transformer, applying the transformer's `onEndResult` method to the
     * template literal after all substitutions have finished processing.
     * @param  {String} endResult - The processed template, just before it is returned from the tag
     * @return {String}           - The final results of processing each transformer
     */

  }, {
    key: 'transformEndResult',
    value: function transformEndResult(endResult) {
      var cb = function cb(res, transform) {
        return transform.onEndResult ? transform.onEndResult(res) : res;
      };
      return this.transformers.reduce(cb, endResult);
    }
  }]);

  return TemplateTag;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplateTag);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZW1wbGF0ZVRhZy9UZW1wbGF0ZVRhZy5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInRyYW5zZm9ybWVycyIsInRhZyIsInN0cmluZ3MiLCJleHByZXNzaW9ucyIsImludGVyaW1UYWciLCJiaW5kIiwidHJhbnNmb3JtRW5kUmVzdWx0IiwibWFwIiwidHJhbnNmb3JtU3RyaW5nIiwicmVkdWNlIiwicHJvY2Vzc1N1YnN0aXR1dGlvbnMiLCJsZW5ndGgiLCJBcnJheSIsImlzQXJyYXkiLCJ0cmFuc2Zvcm1lciIsInByZXZpb3VzVGFnIiwidGVtcGxhdGUiLCJzdWJzdGl0dXRpb25zIiwicmVzdWx0U29GYXIiLCJyZW1haW5pbmdQYXJ0Iiwic3Vic3RpdHV0aW9uIiwidHJhbnNmb3JtU3Vic3RpdHV0aW9uIiwic2hpZnQiLCJjb25jYXQiLCJzdHIiLCJjYiIsInJlcyIsInRyYW5zZm9ybSIsIm9uU3RyaW5nIiwib25TdWJzdGl0dXRpb24iLCJlbmRSZXN1bHQiLCJvbkVuZFJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztJQUlxQkEsVztBQUNuQjs7Ozs7O0FBTUEseUJBQTZCO0FBQUE7O0FBQUEsc0NBQWRDLFlBQWM7QUFBZEEsa0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxTQXVCN0JDLEdBdkI2QixHQXVCdkIsVUFBQ0MsT0FBRCxFQUE2QjtBQUFBLHlDQUFoQkMsV0FBZ0I7QUFBaEJBLG1CQUFnQjtBQUFBOztBQUNqQyxVQUFJLE9BQU9ELE9BQVAsS0FBbUIsVUFBdkIsRUFBbUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsZUFBTyxNQUFLRSxVQUFMLENBQWdCQyxJQUFoQixDQUFxQixLQUFyQixFQUEyQkgsT0FBM0IsQ0FBUDtBQUNEOztBQUVELFVBQUksT0FBT0EsT0FBUCxLQUFtQixRQUF2QixFQUFpQztBQUMvQjtBQUNBLGVBQU8sTUFBS0ksa0JBQUwsQ0FBd0JKLE9BQXhCLENBQVA7QUFDRDs7QUFFRDtBQUNBQSxnQkFBVUEsUUFBUUssR0FBUixDQUFZLE1BQUtDLGVBQUwsQ0FBcUJILElBQXJCLENBQTBCLEtBQTFCLENBQVosQ0FBVjtBQUNBLGFBQU8sTUFBS0Msa0JBQUwsQ0FDTEosUUFBUU8sTUFBUixDQUFlLE1BQUtDLG9CQUFMLENBQTBCTCxJQUExQixDQUErQixLQUEvQixFQUFxQ0YsV0FBckMsQ0FBZixDQURLLENBQVA7QUFHRCxLQXpDNEI7O0FBQzNCO0FBQ0EsUUFBSUgsYUFBYVcsTUFBYixHQUFzQixDQUF0QixJQUEyQkMsTUFBTUMsT0FBTixDQUFjYixhQUFhLENBQWIsQ0FBZCxDQUEvQixFQUErRDtBQUM3REEscUJBQWVBLGFBQWEsQ0FBYixDQUFmO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFLQSxZQUFMLEdBQW9CQSxhQUFhTyxHQUFiLENBQWlCLHVCQUFlO0FBQ2xELGFBQU8sT0FBT08sV0FBUCxLQUF1QixVQUF2QixHQUFvQ0EsYUFBcEMsR0FBb0RBLFdBQTNEO0FBQ0QsS0FGbUIsQ0FBcEI7O0FBSUE7QUFDQSxXQUFPLEtBQUtiLEdBQVo7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7QUE0QkE7Ozs7Ozs7OytCQVFXYyxXLEVBQWFDLFEsRUFBNEI7QUFBQSx5Q0FBZkMsYUFBZTtBQUFmQSxxQkFBZTtBQUFBOztBQUNsRCxhQUFPLEtBQUtoQixHQUFaLGtCQUFrQmMsOEJBQVlDLFFBQVosU0FBeUJDLGFBQXpCLEVBQWxCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7O3lDQVFxQkEsYSxFQUFlQyxXLEVBQWFDLGEsRUFBZTtBQUM5RCxVQUFNQyxlQUFlLEtBQUtDLHFCQUFMLENBQ25CSixjQUFjSyxLQUFkLEVBRG1CLEVBRW5CSixXQUZtQixDQUFyQjtBQUlBLGFBQU8sR0FBR0ssTUFBSCxDQUFVTCxXQUFWLEVBQXVCRSxZQUF2QixFQUFxQ0QsYUFBckMsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7b0NBTWdCSyxHLEVBQUs7QUFDbkIsVUFBTUMsS0FBSyxTQUFMQSxFQUFLLENBQUNDLEdBQUQsRUFBTUMsU0FBTjtBQUFBLGVBQ1RBLFVBQVVDLFFBQVYsR0FBcUJELFVBQVVDLFFBQVYsQ0FBbUJGLEdBQW5CLENBQXJCLEdBQStDQSxHQUR0QztBQUFBLE9BQVg7QUFFQSxhQUFPLEtBQUsxQixZQUFMLENBQWtCUyxNQUFsQixDQUF5QmdCLEVBQXpCLEVBQTZCRCxHQUE3QixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7MENBT3NCSixZLEVBQWNGLFcsRUFBYTtBQUMvQyxVQUFNTyxLQUFLLFNBQUxBLEVBQUssQ0FBQ0MsR0FBRCxFQUFNQyxTQUFOO0FBQUEsZUFDVEEsVUFBVUUsY0FBVixHQUNJRixVQUFVRSxjQUFWLENBQXlCSCxHQUF6QixFQUE4QlIsV0FBOUIsQ0FESixHQUVJUSxHQUhLO0FBQUEsT0FBWDtBQUlBLGFBQU8sS0FBSzFCLFlBQUwsQ0FBa0JTLE1BQWxCLENBQXlCZ0IsRUFBekIsRUFBNkJMLFlBQTdCLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7O3VDQU1tQlUsUyxFQUFXO0FBQzVCLFVBQU1MLEtBQUssU0FBTEEsRUFBSyxDQUFDQyxHQUFELEVBQU1DLFNBQU47QUFBQSxlQUNUQSxVQUFVSSxXQUFWLEdBQXdCSixVQUFVSSxXQUFWLENBQXNCTCxHQUF0QixDQUF4QixHQUFxREEsR0FENUM7QUFBQSxPQUFYO0FBRUEsYUFBTyxLQUFLMUIsWUFBTCxDQUFrQlMsTUFBbEIsQ0FBeUJnQixFQUF6QixFQUE2QkssU0FBN0IsQ0FBUDtBQUNEOzs7Ozs7ZUFuSGtCL0IsVyIsImZpbGUiOiJUZW1wbGF0ZVRhZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNsYXNzIFRlbXBsYXRlVGFnXG4gKiBAY2xhc3NkZXNjIENvbnN1bWVzIGEgcGlwZWxpbmUgb2YgY29tcG9zYWJsZSB0cmFuc2Zvcm1lciBwbHVnaW5zIGFuZCBwcm9kdWNlcyBhIHRlbXBsYXRlIHRhZy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVUYWcge1xuICAvKipcbiAgICogY29uc3RydWN0cyBhIHRlbXBsYXRlIHRhZ1xuICAgKiBAY29uc3RydWN0cyBUZW1wbGF0ZVRhZ1xuICAgKiBAcGFyYW0gIHsuLi5PYmplY3R9IFsuLi50cmFuc2Zvcm1lcnNdIC0gYW4gYXJyYXkgb3IgYXJndW1lbnRzIGxpc3Qgb2YgdHJhbnNmb3JtZXJzXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICAgICAgICAgICAgICAgLSBhIHRlbXBsYXRlIHRhZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoLi4udHJhbnNmb3JtZXJzKSB7XG4gICAgLy8gaWYgZmlyc3QgYXJndW1lbnQgaXMgYW4gYXJyYXksIGV4dHJ1ZGUgaXQgYXMgYSBsaXN0IG9mIHRyYW5zZm9ybWVyc1xuICAgIGlmICh0cmFuc2Zvcm1lcnMubGVuZ3RoID4gMCAmJiBBcnJheS5pc0FycmF5KHRyYW5zZm9ybWVyc1swXSkpIHtcbiAgICAgIHRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVyc1swXTtcbiAgICB9XG5cbiAgICAvLyBpZiBhbnkgdHJhbnNmb3JtZXJzIGFyZSBmdW5jdGlvbnMsIHRoaXMgbWVhbnMgdGhleSBhcmUgbm90IGluaXRpYXRlZCAtIGF1dG9tYXRpY2FsbHkgaW5pdGlhdGUgdGhlbVxuICAgIHRoaXMudHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLm1hcCh0cmFuc2Zvcm1lciA9PiB7XG4gICAgICByZXR1cm4gdHlwZW9mIHRyYW5zZm9ybWVyID09PSAnZnVuY3Rpb24nID8gdHJhbnNmb3JtZXIoKSA6IHRyYW5zZm9ybWVyO1xuICAgIH0pO1xuXG4gICAgLy8gcmV0dXJuIGFuIEVTMjAxNSB0ZW1wbGF0ZSB0YWdcbiAgICByZXR1cm4gdGhpcy50YWc7XG4gIH1cblxuICAvKipcbiAgICogQXBwbGllcyBhbGwgdHJhbnNmb3JtZXJzIHRvIGEgdGVtcGxhdGUgbGl0ZXJhbCB0YWdnZWQgd2l0aCB0aGlzIG1ldGhvZC5cbiAgICogSWYgYSBmdW5jdGlvbiBpcyBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LCBhc3N1bWVzIHRoZSBmdW5jdGlvbiBpcyBhIHRlbXBsYXRlIHRhZ1xuICAgKiBhbmQgYXBwbGllcyBpdCB0byB0aGUgdGVtcGxhdGUsIHJldHVybmluZyBhIHRlbXBsYXRlIHRhZy5cbiAgICogQHBhcmFtICB7KEZ1bmN0aW9ufFN0cmluZ3xBcnJheTxTdHJpbmc+KX0gc3RyaW5ncyAgICAgICAgLSBFaXRoZXIgYSB0ZW1wbGF0ZSB0YWcgb3IgYW4gYXJyYXkgY29udGFpbmluZyB0ZW1wbGF0ZSBzdHJpbmdzIHNlcGFyYXRlZCBieSBpZGVudGlmaWVyXG4gICAqIEBwYXJhbSAgey4uLip9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmV4cHJlc3Npb25zIC0gT3B0aW9uYWwgbGlzdCBvZiBzdWJzdGl0dXRpb24gdmFsdWVzLlxuICAgKiBAcmV0dXJuIHsoU3RyaW5nfEZ1bmN0aW9uKX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIEVpdGhlciBhbiBpbnRlcm1lZGlhcnkgdGFnIGZ1bmN0aW9uIG9yIHRoZSByZXN1bHRzIG9mIHByb2Nlc3NpbmcgdGhlIHRlbXBsYXRlLlxuICAgKi9cbiAgdGFnID0gKHN0cmluZ3MsIC4uLmV4cHJlc3Npb25zKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzdHJpbmdzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBpZiB0aGUgZmlyc3QgYXJndW1lbnQgcGFzc2VkIGlzIGEgZnVuY3Rpb24sIGFzc3VtZSBpdCBpcyBhIHRlbXBsYXRlIHRhZyBhbmQgcmV0dXJuXG4gICAgICAvLyBhbiBpbnRlcm1lZGlhcnkgdGFnIHRoYXQgcHJvY2Vzc2VzIHRoZSB0ZW1wbGF0ZSB1c2luZyB0aGUgYWZvcmVtZW50aW9uZWQgdGFnLCBwYXNzaW5nIHRoZVxuICAgICAgLy8gcmVzdWx0IHRvIG91ciB0YWdcbiAgICAgIHJldHVybiB0aGlzLmludGVyaW1UYWcuYmluZCh0aGlzLCBzdHJpbmdzKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHN0cmluZ3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBpZiB0aGUgZmlyc3QgYXJndW1lbnQgcGFzc2VkIGlzIGEgc3RyaW5nLCBqdXN0IHRyYW5zZm9ybSBpdFxuICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtRW5kUmVzdWx0KHN0cmluZ3MpO1xuICAgIH1cblxuICAgIC8vIGVsc2UsIHJldHVybiBhIHRyYW5zZm9ybWVkIGVuZCByZXN1bHQgb2YgcHJvY2Vzc2luZyB0aGUgdGVtcGxhdGUgd2l0aCBvdXIgdGFnXG4gICAgc3RyaW5ncyA9IHN0cmluZ3MubWFwKHRoaXMudHJhbnNmb3JtU3RyaW5nLmJpbmQodGhpcykpO1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybUVuZFJlc3VsdChcbiAgICAgIHN0cmluZ3MucmVkdWNlKHRoaXMucHJvY2Vzc1N1YnN0aXR1dGlvbnMuYmluZCh0aGlzLCBleHByZXNzaW9ucykpLFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFuIGludGVybWVkaWFyeSB0ZW1wbGF0ZSB0YWcgdGhhdCByZWNlaXZlcyBhIHRlbXBsYXRlIHRhZyBhbmQgcGFzc2VzIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgdGVtcGxhdGUgd2l0aCB0aGUgcmVjZWl2ZWRcbiAgICogdGVtcGxhdGUgdGFnIHRvIG91ciBvd24gdGVtcGxhdGUgdGFnLlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gICAgICAgIG5leHRUYWcgICAgICAgICAgLSB0aGUgcmVjZWl2ZWQgdGVtcGxhdGUgdGFnXG4gICAqIEBwYXJhbSAge0FycmF5PFN0cmluZz59ICAgdGVtcGxhdGUgICAgICAgICAtIHRoZSB0ZW1wbGF0ZSB0byBwcm9jZXNzXG4gICAqIEBwYXJhbSAgey4uLip9ICAgICAgICAgICAgLi4uc3Vic3RpdHV0aW9ucyAtIGBzdWJzdGl0dXRpb25zYCBpcyBhbiBhcnJheSBvZiBhbGwgc3Vic3RpdHV0aW9ucyBpbiB0aGUgdGVtcGxhdGVcbiAgICogQHJldHVybiB7Kn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gdGhlIGZpbmFsIHByb2Nlc3NlZCB2YWx1ZVxuICAgKi9cbiAgaW50ZXJpbVRhZyhwcmV2aW91c1RhZywgdGVtcGxhdGUsIC4uLnN1YnN0aXR1dGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy50YWdgJHtwcmV2aW91c1RhZyh0ZW1wbGF0ZSwgLi4uc3Vic3RpdHV0aW9ucyl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBidWxrIHByb2Nlc3Npbmcgb24gdGhlIHRhZ2dlZCB0ZW1wbGF0ZSwgdHJhbnNmb3JtaW5nIGVhY2ggc3Vic3RpdHV0aW9uIGFuZCB0aGVuXG4gICAqIGNvbmNhdGVuYXRpbmcgdGhlIHJlc3VsdGluZyB2YWx1ZXMgaW50byBhIHN0cmluZy5cbiAgICogQHBhcmFtICB7QXJyYXk8Kj59IHN1YnN0aXR1dGlvbnMgLSBhbiBhcnJheSBvZiBhbGwgcmVtYWluaW5nIHN1YnN0aXR1dGlvbnMgcHJlc2VudCBpbiB0aGlzIHRlbXBsYXRlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gICByZXN1bHRTb0ZhciAgIC0gdGhpcyBpdGVyYXRpb24ncyByZXN1bHQgc3RyaW5nIHNvIGZhclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgcmVtYWluaW5nUGFydCAtIHRoZSB0ZW1wbGF0ZSBjaHVuayBhZnRlciB0aGUgY3VycmVudCBzdWJzdGl0dXRpb25cbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgICAgICAgLSB0aGUgcmVzdWx0IG9mIGpvaW5pbmcgdGhpcyBpdGVyYXRpb24ncyBwcm9jZXNzZWQgc3Vic3RpdHV0aW9uIHdpdGggdGhlIHJlc3VsdFxuICAgKi9cbiAgcHJvY2Vzc1N1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgcmVzdWx0U29GYXIsIHJlbWFpbmluZ1BhcnQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLnRyYW5zZm9ybVN1YnN0aXR1dGlvbihcbiAgICAgIHN1YnN0aXR1dGlvbnMuc2hpZnQoKSxcbiAgICAgIHJlc3VsdFNvRmFyLFxuICAgICk7XG4gICAgcmV0dXJuICcnLmNvbmNhdChyZXN1bHRTb0Zhciwgc3Vic3RpdHV0aW9uLCByZW1haW5pbmdQYXJ0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIHRocm91Z2ggZWFjaCB0cmFuc2Zvcm1lciwgYXBwbHlpbmcgdGhlIHRyYW5zZm9ybWVyJ3MgYG9uU3RyaW5nYCBtZXRob2QgdG8gdGhlIHRlbXBsYXRlXG4gICAqIHN0cmluZ3MgYmVmb3JlIGFsbCBzdWJzdGl0dXRpb25zIGFyZSBwcm9jZXNzZWQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSAgc3RyIC0gVGhlIGlucHV0IHN0cmluZ1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAtIFRoZSBmaW5hbCByZXN1bHRzIG9mIHByb2Nlc3NpbmcgZWFjaCB0cmFuc2Zvcm1lclxuICAgKi9cbiAgdHJhbnNmb3JtU3RyaW5nKHN0cikge1xuICAgIGNvbnN0IGNiID0gKHJlcywgdHJhbnNmb3JtKSA9PlxuICAgICAgdHJhbnNmb3JtLm9uU3RyaW5nID8gdHJhbnNmb3JtLm9uU3RyaW5nKHJlcykgOiByZXM7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtZXJzLnJlZHVjZShjYiwgc3RyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGEgc3Vic3RpdHV0aW9uIGlzIGVuY291bnRlcmVkLCBpdGVyYXRlcyB0aHJvdWdoIGVhY2ggdHJhbnNmb3JtZXIgYW5kIGFwcGxpZXMgdGhlIHRyYW5zZm9ybWVyJ3NcbiAgICogYG9uU3Vic3RpdHV0aW9uYCBtZXRob2QgdG8gdGhlIHN1YnN0aXR1dGlvbi5cbiAgICogQHBhcmFtICB7Kn0gICAgICBzdWJzdGl0dXRpb24gLSBUaGUgY3VycmVudCBzdWJzdGl0dXRpb25cbiAgICogQHBhcmFtICB7U3RyaW5nfSByZXN1bHRTb0ZhciAgLSBUaGUgcmVzdWx0IHVwIHRvIGFuZCBleGNsdWRpbmcgdGhpcyBzdWJzdGl0dXRpb24uXG4gICAqIEByZXR1cm4geyp9ICAgICAgICAgICAgICAgICAgIC0gVGhlIGZpbmFsIHJlc3VsdCBvZiBhcHBseWluZyBhbGwgc3Vic3RpdHV0aW9uIHRyYW5zZm9ybWF0aW9ucy5cbiAgICovXG4gIHRyYW5zZm9ybVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHJlc3VsdFNvRmFyKSB7XG4gICAgY29uc3QgY2IgPSAocmVzLCB0cmFuc2Zvcm0pID0+XG4gICAgICB0cmFuc2Zvcm0ub25TdWJzdGl0dXRpb25cbiAgICAgICAgPyB0cmFuc2Zvcm0ub25TdWJzdGl0dXRpb24ocmVzLCByZXN1bHRTb0ZhcilcbiAgICAgICAgOiByZXM7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtZXJzLnJlZHVjZShjYiwgc3Vic3RpdHV0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlcyB0aHJvdWdoIGVhY2ggdHJhbnNmb3JtZXIsIGFwcGx5aW5nIHRoZSB0cmFuc2Zvcm1lcidzIGBvbkVuZFJlc3VsdGAgbWV0aG9kIHRvIHRoZVxuICAgKiB0ZW1wbGF0ZSBsaXRlcmFsIGFmdGVyIGFsbCBzdWJzdGl0dXRpb25zIGhhdmUgZmluaXNoZWQgcHJvY2Vzc2luZy5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBlbmRSZXN1bHQgLSBUaGUgcHJvY2Vzc2VkIHRlbXBsYXRlLCBqdXN0IGJlZm9yZSBpdCBpcyByZXR1cm5lZCBmcm9tIHRoZSB0YWdcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgLSBUaGUgZmluYWwgcmVzdWx0cyBvZiBwcm9jZXNzaW5nIGVhY2ggdHJhbnNmb3JtZXJcbiAgICovXG4gIHRyYW5zZm9ybUVuZFJlc3VsdChlbmRSZXN1bHQpIHtcbiAgICBjb25zdCBjYiA9IChyZXMsIHRyYW5zZm9ybSkgPT5cbiAgICAgIHRyYW5zZm9ybS5vbkVuZFJlc3VsdCA/IHRyYW5zZm9ybS5vbkVuZFJlc3VsdChyZXMpIDogcmVzO1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybWVycy5yZWR1Y2UoY2IsIGVuZFJlc3VsdCk7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/common-tags/es/TemplateTag/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/TemplateTag/TemplateTag.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZW1wbGF0ZVRhZy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLGU7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL1RlbXBsYXRlVGFnJztcbiJdfQ==

/***/ }),

/***/ "./node_modules/common-tags/es/codeBlock/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/html/index.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2RlQmxvY2svaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixTO3FCQUFiQSxPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi4vaHRtbCc7XG4iXX0=

/***/ }),

/***/ "./node_modules/common-tags/es/commaLists/commaLists.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/common-tags/es/stripIndentTransformer/index.js");
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common-tags/es/inlineArrayTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/common-tags/es/trimResultTransformer/index.js");





var commaLists = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__["default"])({ separator: ',' }), _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__["default"], _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commaLists);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzL2NvbW1hTGlzdHMuanMiXSwibmFtZXMiOlsiVGVtcGxhdGVUYWciLCJzdHJpcEluZGVudFRyYW5zZm9ybWVyIiwiaW5saW5lQXJyYXlUcmFuc2Zvcm1lciIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsImNvbW1hTGlzdHMiLCJzZXBhcmF0b3IiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVAsTUFBd0IsZ0JBQXhCO0FBQ0EsT0FBT0Msc0JBQVAsTUFBbUMsMkJBQW5DO0FBQ0EsT0FBT0Msc0JBQVAsTUFBbUMsMkJBQW5DO0FBQ0EsT0FBT0MscUJBQVAsTUFBa0MsMEJBQWxDOztBQUVBLElBQU1DLGFBQWEsSUFBSUosV0FBSixDQUNqQkUsdUJBQXVCLEVBQUVHLFdBQVcsR0FBYixFQUF2QixDQURpQixFQUVqQkosc0JBRmlCLEVBR2pCRSxxQkFIaUIsQ0FBbkI7O0FBTUEsZUFBZUMsVUFBZiIsImZpbGUiOiJjb21tYUxpc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4uL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IGNvbW1hTGlzdHMgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIGlubGluZUFycmF5VHJhbnNmb3JtZXIoeyBzZXBhcmF0b3I6ICcsJyB9KSxcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWFMaXN0cztcbiJdfQ==

/***/ }),

/***/ "./node_modules/common-tags/es/commaLists/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _commaLists__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _commaLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/commaLists/commaLists.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsYztxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vY29tbWFMaXN0cyc7XG4iXX0=

/***/ }),

/***/ "./node_modules/common-tags/es/commaListsAnd/commaListsAnd.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/common-tags/es/stripIndentTransformer/index.js");
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common-tags/es/inlineArrayTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/common-tags/es/trimResultTransformer/index.js");





var commaListsAnd = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__["default"])({ separator: ',', conjunction: 'and' }), _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__["default"], _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commaListsAnd);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzQW5kL2NvbW1hTGlzdHNBbmQuanMiXSwibmFtZXMiOlsiVGVtcGxhdGVUYWciLCJzdHJpcEluZGVudFRyYW5zZm9ybWVyIiwiaW5saW5lQXJyYXlUcmFuc2Zvcm1lciIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsImNvbW1hTGlzdHNBbmQiLCJzZXBhcmF0b3IiLCJjb25qdW5jdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7O0FBRUEsSUFBTUMsZ0JBQWdCLElBQUlKLFdBQUosQ0FDcEJFLHVCQUF1QixFQUFFRyxXQUFXLEdBQWIsRUFBa0JDLGFBQWEsS0FBL0IsRUFBdkIsQ0FEb0IsRUFFcEJMLHNCQUZvQixFQUdwQkUscUJBSG9CLENBQXRCOztBQU1BLGVBQWVDLGFBQWYiLCJmaWxlIjoiY29tbWFMaXN0c0FuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBjb21tYUxpc3RzQW5kID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyKHsgc2VwYXJhdG9yOiAnLCcsIGNvbmp1bmN0aW9uOiAnYW5kJyB9KSxcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWFMaXN0c0FuZDtcbiJdfQ==

/***/ }),

/***/ "./node_modules/common-tags/es/commaListsAnd/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _commaListsAnd__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _commaListsAnd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/commaListsAnd/commaListsAnd.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzQW5kL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsaUI7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL2NvbW1hTGlzdHNBbmQnO1xuIl19

/***/ }),

/***/ "./node_modules/common-tags/es/commaListsOr/commaListsOr.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/common-tags/es/stripIndentTransformer/index.js");
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common-tags/es/inlineArrayTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/common-tags/es/trimResultTransformer/index.js");





var commaListsOr = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__["default"])({ separator: ',', conjunction: 'or' }), _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__["default"], _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commaListsOr);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzT3IvY29tbWFMaXN0c09yLmpzIl0sIm5hbWVzIjpbIlRlbXBsYXRlVGFnIiwic3RyaXBJbmRlbnRUcmFuc2Zvcm1lciIsImlubGluZUFycmF5VHJhbnNmb3JtZXIiLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiLCJjb21tYUxpc3RzT3IiLCJzZXBhcmF0b3IiLCJjb25qdW5jdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7O0FBRUEsSUFBTUMsZUFBZSxJQUFJSixXQUFKLENBQ25CRSx1QkFBdUIsRUFBRUcsV0FBVyxHQUFiLEVBQWtCQyxhQUFhLElBQS9CLEVBQXZCLENBRG1CLEVBRW5CTCxzQkFGbUIsRUFHbkJFLHFCQUhtQixDQUFyQjs7QUFNQSxlQUFlQyxZQUFmIiwiZmlsZSI6ImNvbW1hTGlzdHNPci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBjb21tYUxpc3RzT3IgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIGlubGluZUFycmF5VHJhbnNmb3JtZXIoeyBzZXBhcmF0b3I6ICcsJywgY29uanVuY3Rpb246ICdvcicgfSksXG4gIHN0cmlwSW5kZW50VHJhbnNmb3JtZXIsXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1hTGlzdHNPcjtcbiJdfQ==

/***/ }),

/***/ "./node_modules/common-tags/es/commaListsOr/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _commaListsOr__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _commaListsOr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/commaListsOr/commaListsOr.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzT3IvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixnQjtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vY29tbWFMaXN0c09yJztcbiJdfQ==

/***/ }),

/***/ "./node_modules/common-tags/es/html/html.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/common-tags/es/stripIndentTransformer/index.js");
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common-tags/es/inlineArrayTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/common-tags/es/trimResultTransformer/index.js");
/* harmony import */ var _splitStringTransformer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/common-tags/es/splitStringTransformer/index.js");
/* harmony import */ var _removeNonPrintingValuesTransformer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/common-tags/es/removeNonPrintingValuesTransformer/index.js");







var html = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_splitStringTransformer__WEBPACK_IMPORTED_MODULE_4__["default"])('\n'), _removeNonPrintingValuesTransformer__WEBPACK_IMPORTED_MODULE_5__["default"], _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__["default"], _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__["default"], _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (html);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9odG1sL2h0bWwuanMiXSwibmFtZXMiOlsiVGVtcGxhdGVUYWciLCJzdHJpcEluZGVudFRyYW5zZm9ybWVyIiwiaW5saW5lQXJyYXlUcmFuc2Zvcm1lciIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInNwbGl0U3RyaW5nVHJhbnNmb3JtZXIiLCJyZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyIiwiaHRtbCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxrQ0FBUCxNQUErQyx1Q0FBL0M7O0FBRUEsSUFBTUMsT0FBTyxJQUFJTixXQUFKLENBQ1hJLHVCQUF1QixJQUF2QixDQURXLEVBRVhDLGtDQUZXLEVBR1hILHNCQUhXLEVBSVhELHNCQUpXLEVBS1hFLHFCQUxXLENBQWI7O0FBUUEsZUFBZUcsSUFBZiIsImZpbGUiOiJodG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4uL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgc3BsaXRTdHJpbmdUcmFuc2Zvcm1lciBmcm9tICcuLi9zcGxpdFN0cmluZ1RyYW5zZm9ybWVyJztcbmltcG9ydCByZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyIGZyb20gJy4uL3JlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXInO1xuXG5jb25zdCBodG1sID0gbmV3IFRlbXBsYXRlVGFnKFxuICBzcGxpdFN0cmluZ1RyYW5zZm9ybWVyKCdcXG4nKSxcbiAgcmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lcixcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcixcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgaHRtbDtcbiJdfQ==

/***/ }),

/***/ "./node_modules/common-tags/es/html/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/html/html.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9odG1sL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsUTtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vaHRtbCc7XG4iXX0=

/***/ }),

/***/ "./node_modules/common-tags/es/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateTag: () => (/* reexport safe */ _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   codeBlock: () => (/* reexport safe */ _codeBlock__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   commaLists: () => (/* reexport safe */ _commaLists__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   commaListsAnd: () => (/* reexport safe */ _commaListsAnd__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   commaListsOr: () => (/* reexport safe */ _commaListsOr__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   html: () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   inlineArrayTransformer: () => (/* reexport safe */ _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   inlineLists: () => (/* reexport safe */ _inlineLists__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   oneLine: () => (/* reexport safe */ _oneLine__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   oneLineCommaLists: () => (/* reexport safe */ _oneLineCommaLists__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   oneLineCommaListsAnd: () => (/* reexport safe */ _oneLineCommaListsAnd__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   oneLineCommaListsOr: () => (/* reexport safe */ _oneLineCommaListsOr__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   oneLineInlineLists: () => (/* reexport safe */ _oneLineInlineLists__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   oneLineTrim: () => (/* reexport safe */ _oneLineTrim__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   removeNonPrintingValuesTransformer: () => (/* reexport safe */ _removeNonPrintingValuesTransformer__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   replaceResultTransformer: () => (/* reexport safe */ _replaceResultTransformer__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   replaceStringTransformer: () => (/* reexport safe */ _replaceStringTransformer__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   replaceSubstitutionTransformer: () => (/* reexport safe */ _replaceSubstitutionTransformer__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   safeHtml: () => (/* reexport safe */ _safeHtml__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   source: () => (/* reexport safe */ _source__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   splitStringTransformer: () => (/* reexport safe */ _splitStringTransformer__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   stripIndent: () => (/* reexport safe */ _stripIndent__WEBPACK_IMPORTED_MODULE_23__["default"]),
/* harmony export */   stripIndentTransformer: () => (/* reexport safe */ _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   stripIndents: () => (/* reexport safe */ _stripIndents__WEBPACK_IMPORTED_MODULE_24__["default"]),
/* harmony export */   trimResultTransformer: () => (/* reexport safe */ _trimResultTransformer__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/common-tags/es/trimResultTransformer/index.js");
/* harmony import */ var _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common-tags/es/stripIndentTransformer/index.js");
/* harmony import */ var _replaceResultTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/common-tags/es/replaceResultTransformer/index.js");
/* harmony import */ var _replaceSubstitutionTransformer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/common-tags/es/replaceSubstitutionTransformer/index.js");
/* harmony import */ var _replaceStringTransformer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/common-tags/es/replaceStringTransformer/index.js");
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/common-tags/es/inlineArrayTransformer/index.js");
/* harmony import */ var _splitStringTransformer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/common-tags/es/splitStringTransformer/index.js");
/* harmony import */ var _removeNonPrintingValuesTransformer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/common-tags/es/removeNonPrintingValuesTransformer/index.js");
/* harmony import */ var _commaLists__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/common-tags/es/commaLists/index.js");
/* harmony import */ var _commaListsAnd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/common-tags/es/commaListsAnd/index.js");
/* harmony import */ var _commaListsOr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/common-tags/es/commaListsOr/index.js");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/common-tags/es/html/index.js");
/* harmony import */ var _codeBlock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/common-tags/es/codeBlock/index.js");
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/common-tags/es/source/index.js");
/* harmony import */ var _safeHtml__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/common-tags/es/safeHtml/index.js");
/* harmony import */ var _oneLine__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/common-tags/es/oneLine/index.js");
/* harmony import */ var _oneLineTrim__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/common-tags/es/oneLineTrim/index.js");
/* harmony import */ var _oneLineCommaLists__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./node_modules/common-tags/es/oneLineCommaLists/index.js");
/* harmony import */ var _oneLineCommaListsOr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./node_modules/common-tags/es/oneLineCommaListsOr/index.js");
/* harmony import */ var _oneLineCommaListsAnd__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./node_modules/common-tags/es/oneLineCommaListsAnd/index.js");
/* harmony import */ var _inlineLists__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./node_modules/common-tags/es/inlineLists/index.js");
/* harmony import */ var _oneLineInlineLists__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./node_modules/common-tags/es/oneLineInlineLists/index.js");
/* harmony import */ var _stripIndent__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./node_modules/common-tags/es/stripIndent/index.js");
/* harmony import */ var _stripIndents__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./node_modules/common-tags/es/stripIndents/index.js");
// core



// transformers


















// tags

































//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInN0cmlwSW5kZW50VHJhbnNmb3JtZXIiLCJyZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIiLCJyZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIiLCJyZXBsYWNlU3RyaW5nVHJhbnNmb3JtZXIiLCJpbmxpbmVBcnJheVRyYW5zZm9ybWVyIiwic3BsaXRTdHJpbmdUcmFuc2Zvcm1lciIsInJlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIiLCJjb21tYUxpc3RzIiwiY29tbWFMaXN0c0FuZCIsImNvbW1hTGlzdHNPciIsImh0bWwiLCJjb2RlQmxvY2siLCJzb3VyY2UiLCJzYWZlSHRtbCIsIm9uZUxpbmUiLCJvbmVMaW5lVHJpbSIsIm9uZUxpbmVDb21tYUxpc3RzIiwib25lTGluZUNvbW1hTGlzdHNPciIsIm9uZUxpbmVDb21tYUxpc3RzQW5kIiwiaW5saW5lTGlzdHMiLCJvbmVMaW5lSW5saW5lTGlzdHMiLCJzdHJpcEluZGVudCIsInN0cmlwSW5kZW50cyJdLCJtYXBwaW5ncyI6IkFBQUE7eUJBQ3dCLGU7eUJBQWpCQSxXOztBQUVQOzttQ0FDa0MseUI7bUNBQTNCQyxxQjtvQ0FDNEIsMEI7b0NBQTVCQyxzQjtzQ0FDOEIsNEI7c0NBQTlCQyx3Qjs0Q0FDb0Msa0M7NENBQXBDQyw4QjtzQ0FDOEIsNEI7c0NBQTlCQyx3QjtvQ0FDNEIsMEI7b0NBQTVCQyxzQjtvQ0FDNEIsMEI7b0NBQTVCQyxzQjtnREFDd0Msc0M7Z0RBQXhDQyxrQzs7QUFFUDs7d0JBQ3VCLGM7d0JBQWhCQyxVOzJCQUNtQixpQjsyQkFBbkJDLGE7MEJBQ2tCLGdCOzBCQUFsQkMsWTtrQkFDVSxRO2tCQUFWQyxJO3VCQUNlLGE7dUJBQWZDLFM7b0JBQ1ksVTtvQkFBWkMsTTtzQkFDYyxZO3NCQUFkQyxRO3FCQUNhLFc7cUJBQWJDLE87eUJBQ2lCLGU7eUJBQWpCQyxXOytCQUN1QixxQjsrQkFBdkJDLGlCO2lDQUN5Qix1QjtpQ0FBekJDLG1CO2tDQUMwQix3QjtrQ0FBMUJDLG9CO3lCQUNpQixlO3lCQUFqQkMsVztnQ0FDd0Isc0I7Z0NBQXhCQyxrQjt5QkFDaUIsZTt5QkFBakJDLFc7MEJBQ2tCLGdCOzBCQUFsQkMsWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvcmVcbmV4cG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuL1RlbXBsYXRlVGFnJztcblxuLy8gdHJhbnNmb3JtZXJzXG5leHBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcbmV4cG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4vc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcic7XG5leHBvcnQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4vcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyJztcbmV4cG9ydCByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi9yZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXInO1xuZXhwb3J0IHJlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lciBmcm9tICcuL3JlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lcic7XG5leHBvcnQgaW5saW5lQXJyYXlUcmFuc2Zvcm1lciBmcm9tICcuL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuZXhwb3J0IHNwbGl0U3RyaW5nVHJhbnNmb3JtZXIgZnJvbSAnLi9zcGxpdFN0cmluZ1RyYW5zZm9ybWVyJztcbmV4cG9ydCByZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyIGZyb20gJy4vcmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lcic7XG5cbi8vIHRhZ3NcbmV4cG9ydCBjb21tYUxpc3RzIGZyb20gJy4vY29tbWFMaXN0cyc7XG5leHBvcnQgY29tbWFMaXN0c0FuZCBmcm9tICcuL2NvbW1hTGlzdHNBbmQnO1xuZXhwb3J0IGNvbW1hTGlzdHNPciBmcm9tICcuL2NvbW1hTGlzdHNPcic7XG5leHBvcnQgaHRtbCBmcm9tICcuL2h0bWwnO1xuZXhwb3J0IGNvZGVCbG9jayBmcm9tICcuL2NvZGVCbG9jayc7XG5leHBvcnQgc291cmNlIGZyb20gJy4vc291cmNlJztcbmV4cG9ydCBzYWZlSHRtbCBmcm9tICcuL3NhZmVIdG1sJztcbmV4cG9ydCBvbmVMaW5lIGZyb20gJy4vb25lTGluZSc7XG5leHBvcnQgb25lTGluZVRyaW0gZnJvbSAnLi9vbmVMaW5lVHJpbSc7XG5leHBvcnQgb25lTGluZUNvbW1hTGlzdHMgZnJvbSAnLi9vbmVMaW5lQ29tbWFMaXN0cyc7XG5leHBvcnQgb25lTGluZUNvbW1hTGlzdHNPciBmcm9tICcuL29uZUxpbmVDb21tYUxpc3RzT3InO1xuZXhwb3J0IG9uZUxpbmVDb21tYUxpc3RzQW5kIGZyb20gJy4vb25lTGluZUNvbW1hTGlzdHNBbmQnO1xuZXhwb3J0IGlubGluZUxpc3RzIGZyb20gJy4vaW5saW5lTGlzdHMnO1xuZXhwb3J0IG9uZUxpbmVJbmxpbmVMaXN0cyBmcm9tICcuL29uZUxpbmVJbmxpbmVMaXN0cyc7XG5leHBvcnQgc3RyaXBJbmRlbnQgZnJvbSAnLi9zdHJpcEluZGVudCc7XG5leHBvcnQgc3RyaXBJbmRlbnRzIGZyb20gJy4vc3RyaXBJbmRlbnRzJztcbiJdfQ==

/***/ }),

/***/ "./node_modules/common-tags/es/inlineArrayTransformer/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/inlineArrayTransformer/inlineArrayTransformer.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmVBcnJheVRyYW5zZm9ybWVyL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsMEI7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuIl19

/***/ }),

/***/ "./node_modules/common-tags/es/inlineArrayTransformer/inlineArrayTransformer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var defaults = {
  separator: '',
  conjunction: '',
  serial: false
};

/**
 * Converts an array substitution to a string containing a list
 * @param  {String} [opts.separator = ''] - the character that separates each item
 * @param  {String} [opts.conjunction = '']  - replace the last separator with this
 * @param  {Boolean} [opts.serial = false] - include the separator before the conjunction? (Oxford comma use-case)
 *
 * @return {Object}                     - a TemplateTag transformer
 */
var inlineArrayTransformer = function inlineArrayTransformer() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults;
  return {
    onSubstitution: function onSubstitution(substitution, resultSoFar) {
      // only operate on arrays
      if (Array.isArray(substitution)) {
        var arrayLength = substitution.length;
        var separator = opts.separator;
        var conjunction = opts.conjunction;
        var serial = opts.serial;
        // join each item in the array into a string where each item is separated by separator
        // be sure to maintain indentation
        var indent = resultSoFar.match(/(\n?[^\S\n]+)$/);
        if (indent) {
          substitution = substitution.join(separator + indent[1]);
        } else {
          substitution = substitution.join(separator + ' ');
        }
        // if conjunction is set, replace the last separator with conjunction, but only if there is more than one substitution
        if (conjunction && arrayLength > 1) {
          var separatorIndex = substitution.lastIndexOf(separator);
          substitution = substitution.slice(0, separatorIndex) + (serial ? separator : '') + ' ' + conjunction + substitution.slice(separatorIndex + 1);
        }
      }
      return substitution;
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inlineArrayTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmVBcnJheVRyYW5zZm9ybWVyL2lubGluZUFycmF5VHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOlsiZGVmYXVsdHMiLCJzZXBhcmF0b3IiLCJjb25qdW5jdGlvbiIsInNlcmlhbCIsImlubGluZUFycmF5VHJhbnNmb3JtZXIiLCJvcHRzIiwib25TdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJyZXN1bHRTb0ZhciIsIkFycmF5IiwiaXNBcnJheSIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwiaW5kZW50IiwibWF0Y2giLCJqb2luIiwic2VwYXJhdG9ySW5kZXgiLCJsYXN0SW5kZXhPZiIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxXQUFXO0FBQ2ZDLGFBQVcsRUFESTtBQUVmQyxlQUFhLEVBRkU7QUFHZkMsVUFBUTtBQUhPLENBQWpCOztBQU1BOzs7Ozs7OztBQVFBLElBQU1DLHlCQUF5QixTQUF6QkEsc0JBQXlCO0FBQUEsTUFBQ0MsSUFBRCx1RUFBUUwsUUFBUjtBQUFBLFNBQXNCO0FBQ25ETSxrQkFEbUQsMEJBQ3BDQyxZQURvQyxFQUN0QkMsV0FEc0IsRUFDVDtBQUN4QztBQUNBLFVBQUlDLE1BQU1DLE9BQU4sQ0FBY0gsWUFBZCxDQUFKLEVBQWlDO0FBQy9CLFlBQU1JLGNBQWNKLGFBQWFLLE1BQWpDO0FBQ0EsWUFBTVgsWUFBWUksS0FBS0osU0FBdkI7QUFDQSxZQUFNQyxjQUFjRyxLQUFLSCxXQUF6QjtBQUNBLFlBQU1DLFNBQVNFLEtBQUtGLE1BQXBCO0FBQ0E7QUFDQTtBQUNBLFlBQU1VLFNBQVNMLFlBQVlNLEtBQVosQ0FBa0IsZ0JBQWxCLENBQWY7QUFDQSxZQUFJRCxNQUFKLEVBQVk7QUFDVk4seUJBQWVBLGFBQWFRLElBQWIsQ0FBa0JkLFlBQVlZLE9BQU8sQ0FBUCxDQUE5QixDQUFmO0FBQ0QsU0FGRCxNQUVPO0FBQ0xOLHlCQUFlQSxhQUFhUSxJQUFiLENBQWtCZCxZQUFZLEdBQTlCLENBQWY7QUFDRDtBQUNEO0FBQ0EsWUFBSUMsZUFBZVMsY0FBYyxDQUFqQyxFQUFvQztBQUNsQyxjQUFNSyxpQkFBaUJULGFBQWFVLFdBQWIsQ0FBeUJoQixTQUF6QixDQUF2QjtBQUNBTSx5QkFDRUEsYUFBYVcsS0FBYixDQUFtQixDQUFuQixFQUFzQkYsY0FBdEIsS0FDQ2IsU0FBU0YsU0FBVCxHQUFxQixFQUR0QixJQUVBLEdBRkEsR0FHQUMsV0FIQSxHQUlBSyxhQUFhVyxLQUFiLENBQW1CRixpQkFBaUIsQ0FBcEMsQ0FMRjtBQU1EO0FBQ0Y7QUFDRCxhQUFPVCxZQUFQO0FBQ0Q7QUE1QmtELEdBQXRCO0FBQUEsQ0FBL0I7O0FBK0JBLGVBQWVILHNCQUFmIiwiZmlsZSI6ImlubGluZUFycmF5VHJhbnNmb3JtZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWZhdWx0cyA9IHtcbiAgc2VwYXJhdG9yOiAnJyxcbiAgY29uanVuY3Rpb246ICcnLFxuICBzZXJpYWw6IGZhbHNlLFxufTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBhcnJheSBzdWJzdGl0dXRpb24gdG8gYSBzdHJpbmcgY29udGFpbmluZyBhIGxpc3RcbiAqIEBwYXJhbSAge1N0cmluZ30gW29wdHMuc2VwYXJhdG9yID0gJyddIC0gdGhlIGNoYXJhY3RlciB0aGF0IHNlcGFyYXRlcyBlYWNoIGl0ZW1cbiAqIEBwYXJhbSAge1N0cmluZ30gW29wdHMuY29uanVuY3Rpb24gPSAnJ10gIC0gcmVwbGFjZSB0aGUgbGFzdCBzZXBhcmF0b3Igd2l0aCB0aGlzXG4gKiBAcGFyYW0gIHtCb29sZWFufSBbb3B0cy5zZXJpYWwgPSBmYWxzZV0gLSBpbmNsdWRlIHRoZSBzZXBhcmF0b3IgYmVmb3JlIHRoZSBjb25qdW5jdGlvbj8gKE94Zm9yZCBjb21tYSB1c2UtY2FzZSlcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgLSBhIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyXG4gKi9cbmNvbnN0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgPSAob3B0cyA9IGRlZmF1bHRzKSA9PiAoe1xuICBvblN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHJlc3VsdFNvRmFyKSB7XG4gICAgLy8gb25seSBvcGVyYXRlIG9uIGFycmF5c1xuICAgIGlmIChBcnJheS5pc0FycmF5KHN1YnN0aXR1dGlvbikpIHtcbiAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gc3Vic3RpdHV0aW9uLmxlbmd0aDtcbiAgICAgIGNvbnN0IHNlcGFyYXRvciA9IG9wdHMuc2VwYXJhdG9yO1xuICAgICAgY29uc3QgY29uanVuY3Rpb24gPSBvcHRzLmNvbmp1bmN0aW9uO1xuICAgICAgY29uc3Qgc2VyaWFsID0gb3B0cy5zZXJpYWw7XG4gICAgICAvLyBqb2luIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkgaW50byBhIHN0cmluZyB3aGVyZSBlYWNoIGl0ZW0gaXMgc2VwYXJhdGVkIGJ5IHNlcGFyYXRvclxuICAgICAgLy8gYmUgc3VyZSB0byBtYWludGFpbiBpbmRlbnRhdGlvblxuICAgICAgY29uc3QgaW5kZW50ID0gcmVzdWx0U29GYXIubWF0Y2goLyhcXG4/W15cXFNcXG5dKykkLyk7XG4gICAgICBpZiAoaW5kZW50KSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbi5qb2luKHNlcGFyYXRvciArIGluZGVudFsxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24uam9pbihzZXBhcmF0b3IgKyAnICcpO1xuICAgICAgfVxuICAgICAgLy8gaWYgY29uanVuY3Rpb24gaXMgc2V0LCByZXBsYWNlIHRoZSBsYXN0IHNlcGFyYXRvciB3aXRoIGNvbmp1bmN0aW9uLCBidXQgb25seSBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIHN1YnN0aXR1dGlvblxuICAgICAgaWYgKGNvbmp1bmN0aW9uICYmIGFycmF5TGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBzZXBhcmF0b3JJbmRleCA9IHN1YnN0aXR1dGlvbi5sYXN0SW5kZXhPZihzZXBhcmF0b3IpO1xuICAgICAgICBzdWJzdGl0dXRpb24gPVxuICAgICAgICAgIHN1YnN0aXR1dGlvbi5zbGljZSgwLCBzZXBhcmF0b3JJbmRleCkgK1xuICAgICAgICAgIChzZXJpYWwgPyBzZXBhcmF0b3IgOiAnJykgK1xuICAgICAgICAgICcgJyArXG4gICAgICAgICAgY29uanVuY3Rpb24gK1xuICAgICAgICAgIHN1YnN0aXR1dGlvbi5zbGljZShzZXBhcmF0b3JJbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGlubGluZUFycmF5VHJhbnNmb3JtZXI7XG4iXX0=

/***/ }),

/***/ "./node_modules/common-tags/es/inlineLists/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _inlineLists__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _inlineLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/inlineLists/inlineLists.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmVMaXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLGU7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL2lubGluZUxpc3RzJztcbiJdfQ==

/***/ }),

/***/ "./node_modules/common-tags/es/inlineLists/inlineLists.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/common-tags/es/stripIndentTransformer/index.js");
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common-tags/es/inlineArrayTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/common-tags/es/trimResultTransformer/index.js");





var inlineLists = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"](_inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__["default"], _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__["default"], _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inlineLists);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmVMaXN0cy9pbmxpbmVMaXN0cy5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInN0cmlwSW5kZW50VHJhbnNmb3JtZXIiLCJpbmxpbmVBcnJheVRyYW5zZm9ybWVyIiwidHJpbVJlc3VsdFRyYW5zZm9ybWVyIiwiaW5saW5lTGlzdHMiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVAsTUFBd0IsZ0JBQXhCO0FBQ0EsT0FBT0Msc0JBQVAsTUFBbUMsMkJBQW5DO0FBQ0EsT0FBT0Msc0JBQVAsTUFBbUMsMkJBQW5DO0FBQ0EsT0FBT0MscUJBQVAsTUFBa0MsMEJBQWxDOztBQUVBLElBQU1DLGNBQWMsSUFBSUosV0FBSixDQUNsQkUsc0JBRGtCLEVBRWxCRCxzQkFGa0IsRUFHbEJFLHFCQUhrQixDQUFwQjs7QUFNQSxlQUFlQyxXQUFmIiwiZmlsZSI6ImlubGluZUxpc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4uL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IGlubGluZUxpc3RzID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyLFxuICBzdHJpcEluZGVudFRyYW5zZm9ybWVyLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBpbmxpbmVMaXN0cztcbiJdfQ==

/***/ }),

/***/ "./node_modules/common-tags/es/oneLine/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _oneLine__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _oneLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/oneLine/oneLine.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsVztxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vb25lTGluZSc7XG4iXX0=

/***/ }),

/***/ "./node_modules/common-tags/es/oneLine/oneLine.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/common-tags/es/trimResultTransformer/index.js");
/* harmony import */ var _replaceResultTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common-tags/es/replaceResultTransformer/index.js");




var oneLine = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_replaceResultTransformer__WEBPACK_IMPORTED_MODULE_2__["default"])(/(?:\n(?:\s*))+/g, ' '), _trimResultTransformer__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (oneLine);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lL29uZUxpbmUuanMiXSwibmFtZXMiOlsiVGVtcGxhdGVUYWciLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiLCJyZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIiLCJvbmVMaW5lIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFQLE1BQXdCLGdCQUF4QjtBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLDBCQUFsQztBQUNBLE9BQU9DLHdCQUFQLE1BQXFDLDZCQUFyQzs7QUFFQSxJQUFNQyxVQUFVLElBQUlILFdBQUosQ0FDZEUseUJBQXlCLGlCQUF6QixFQUE0QyxHQUE1QyxDQURjLEVBRWRELHFCQUZjLENBQWhCOztBQUtBLGVBQWVFLE9BQWYiLCJmaWxlIjoib25lTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3JlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IG9uZUxpbmUgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcigvKD86XFxuKD86XFxzKikpKy9nLCAnICcpLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBvbmVMaW5lO1xuIl19

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineCommaLists/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _oneLineCommaLists__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _oneLineCommaLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/oneLineCommaLists/oneLineCommaLists.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLHFCO3FCQUFiQSxPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9vbmVMaW5lQ29tbWFMaXN0cyc7XG4iXX0=

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineCommaLists/oneLineCommaLists.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/common-tags/es/inlineArrayTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common-tags/es/trimResultTransformer/index.js");
/* harmony import */ var _replaceResultTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/common-tags/es/replaceResultTransformer/index.js");





var oneLineCommaLists = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_1__["default"])({ separator: ',' }), (0,_replaceResultTransformer__WEBPACK_IMPORTED_MODULE_3__["default"])(/(?:\s+)/g, ' '), _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (oneLineCommaLists);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0cy9vbmVMaW5lQ29tbWFMaXN0cy5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsImlubGluZUFycmF5VHJhbnNmb3JtZXIiLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiLCJyZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIiLCJvbmVMaW5lQ29tbWFMaXN0cyIsInNlcGFyYXRvciJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7QUFDQSxPQUFPQyx3QkFBUCxNQUFxQyw2QkFBckM7O0FBRUEsSUFBTUMsb0JBQW9CLElBQUlKLFdBQUosQ0FDeEJDLHVCQUF1QixFQUFFSSxXQUFXLEdBQWIsRUFBdkIsQ0FEd0IsRUFFeEJGLHlCQUF5QixVQUF6QixFQUFxQyxHQUFyQyxDQUZ3QixFQUd4QkQscUJBSHdCLENBQTFCOztBQU1BLGVBQWVFLGlCQUFmIiwiZmlsZSI6Im9uZUxpbmVDb21tYUxpc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBvbmVMaW5lQ29tbWFMaXN0cyA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcih7IHNlcGFyYXRvcjogJywnIH0pLFxuICByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIoLyg/OlxccyspL2csICcgJyksXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IG9uZUxpbmVDb21tYUxpc3RzO1xuIl19

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineCommaListsAnd/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _oneLineCommaListsAnd__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _oneLineCommaListsAnd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/oneLineCommaListsAnd/oneLineCommaListsAnd.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0c0FuZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLHdCO3FCQUFiQSxPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9vbmVMaW5lQ29tbWFMaXN0c0FuZCc7XG4iXX0=

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineCommaListsAnd/oneLineCommaListsAnd.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/common-tags/es/inlineArrayTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common-tags/es/trimResultTransformer/index.js");
/* harmony import */ var _replaceResultTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/common-tags/es/replaceResultTransformer/index.js");





var oneLineCommaListsAnd = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_1__["default"])({ separator: ',', conjunction: 'and' }), (0,_replaceResultTransformer__WEBPACK_IMPORTED_MODULE_3__["default"])(/(?:\s+)/g, ' '), _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (oneLineCommaListsAnd);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0c0FuZC9vbmVMaW5lQ29tbWFMaXN0c0FuZC5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsImlubGluZUFycmF5VHJhbnNmb3JtZXIiLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiLCJyZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIiLCJvbmVMaW5lQ29tbWFMaXN0c0FuZCIsInNlcGFyYXRvciIsImNvbmp1bmN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFQLE1BQXdCLGdCQUF4QjtBQUNBLE9BQU9DLHNCQUFQLE1BQW1DLDJCQUFuQztBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLDBCQUFsQztBQUNBLE9BQU9DLHdCQUFQLE1BQXFDLDZCQUFyQzs7QUFFQSxJQUFNQyx1QkFBdUIsSUFBSUosV0FBSixDQUMzQkMsdUJBQXVCLEVBQUVJLFdBQVcsR0FBYixFQUFrQkMsYUFBYSxLQUEvQixFQUF2QixDQUQyQixFQUUzQkgseUJBQXlCLFVBQXpCLEVBQXFDLEdBQXJDLENBRjJCLEVBRzNCRCxxQkFIMkIsQ0FBN0I7O0FBTUEsZUFBZUUsb0JBQWYiLCJmaWxlIjoib25lTGluZUNvbW1hTGlzdHNBbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3JlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IG9uZUxpbmVDb21tYUxpc3RzQW5kID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyKHsgc2VwYXJhdG9yOiAnLCcsIGNvbmp1bmN0aW9uOiAnYW5kJyB9KSxcbiAgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyKC8oPzpcXHMrKS9nLCAnICcpLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBvbmVMaW5lQ29tbWFMaXN0c0FuZDtcbiJdfQ==

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineCommaListsOr/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _oneLineCommaListsOr__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _oneLineCommaListsOr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/oneLineCommaListsOr/oneLineCommaListsOr.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0c09yL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsdUI7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL29uZUxpbmVDb21tYUxpc3RzT3InO1xuIl19

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineCommaListsOr/oneLineCommaListsOr.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/common-tags/es/inlineArrayTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common-tags/es/trimResultTransformer/index.js");
/* harmony import */ var _replaceResultTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/common-tags/es/replaceResultTransformer/index.js");





var oneLineCommaListsOr = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_1__["default"])({ separator: ',', conjunction: 'or' }), (0,_replaceResultTransformer__WEBPACK_IMPORTED_MODULE_3__["default"])(/(?:\s+)/g, ' '), _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (oneLineCommaListsOr);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0c09yL29uZUxpbmVDb21tYUxpc3RzT3IuanMiXSwibmFtZXMiOlsiVGVtcGxhdGVUYWciLCJpbmxpbmVBcnJheVRyYW5zZm9ybWVyIiwidHJpbVJlc3VsdFRyYW5zZm9ybWVyIiwicmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIiwib25lTGluZUNvbW1hTGlzdHNPciIsInNlcGFyYXRvciIsImNvbmp1bmN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFQLE1BQXdCLGdCQUF4QjtBQUNBLE9BQU9DLHNCQUFQLE1BQW1DLDJCQUFuQztBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLDBCQUFsQztBQUNBLE9BQU9DLHdCQUFQLE1BQXFDLDZCQUFyQzs7QUFFQSxJQUFNQyxzQkFBc0IsSUFBSUosV0FBSixDQUMxQkMsdUJBQXVCLEVBQUVJLFdBQVcsR0FBYixFQUFrQkMsYUFBYSxJQUEvQixFQUF2QixDQUQwQixFQUUxQkgseUJBQXlCLFVBQXpCLEVBQXFDLEdBQXJDLENBRjBCLEVBRzFCRCxxQkFIMEIsQ0FBNUI7O0FBTUEsZUFBZUUsbUJBQWYiLCJmaWxlIjoib25lTGluZUNvbW1hTGlzdHNPci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgaW5saW5lQXJyYXlUcmFuc2Zvcm1lciBmcm9tICcuLi9pbmxpbmVBcnJheVRyYW5zZm9ybWVyJztcbmltcG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcbmltcG9ydCByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyJztcblxuY29uc3Qgb25lTGluZUNvbW1hTGlzdHNPciA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcih7IHNlcGFyYXRvcjogJywnLCBjb25qdW5jdGlvbjogJ29yJyB9KSxcbiAgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyKC8oPzpcXHMrKS9nLCAnICcpLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBvbmVMaW5lQ29tbWFMaXN0c09yO1xuIl19

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineInlineLists/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _oneLineInlineLists__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _oneLineInlineLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/oneLineInlineLists/oneLineInlineLists.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lSW5saW5lTGlzdHMvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixzQjtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vb25lTGluZUlubGluZUxpc3RzJztcbiJdfQ==

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineInlineLists/oneLineInlineLists.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/common-tags/es/inlineArrayTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common-tags/es/trimResultTransformer/index.js");
/* harmony import */ var _replaceResultTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/common-tags/es/replaceResultTransformer/index.js");





var oneLineInlineLists = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"](_inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_1__["default"], (0,_replaceResultTransformer__WEBPACK_IMPORTED_MODULE_3__["default"])(/(?:\s+)/g, ' '), _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (oneLineInlineLists);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lSW5saW5lTGlzdHMvb25lTGluZUlubGluZUxpc3RzLmpzIl0sIm5hbWVzIjpbIlRlbXBsYXRlVGFnIiwiaW5saW5lQXJyYXlUcmFuc2Zvcm1lciIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciIsIm9uZUxpbmVJbmxpbmVMaXN0cyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7QUFDQSxPQUFPQyx3QkFBUCxNQUFxQyw2QkFBckM7O0FBRUEsSUFBTUMscUJBQXFCLElBQUlKLFdBQUosQ0FDekJDLHNCQUR5QixFQUV6QkUseUJBQXlCLFVBQXpCLEVBQXFDLEdBQXJDLENBRnlCLEVBR3pCRCxxQkFIeUIsQ0FBM0I7O0FBTUEsZUFBZUUsa0JBQWYiLCJmaWxlIjoib25lTGluZUlubGluZUxpc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBvbmVMaW5lSW5saW5lTGlzdHMgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIGlubGluZUFycmF5VHJhbnNmb3JtZXIsXG4gIHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcigvKD86XFxzKykvZywgJyAnKSxcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgb25lTGluZUlubGluZUxpc3RzO1xuIl19

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineTrim/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _oneLineTrim__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _oneLineTrim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/oneLineTrim/oneLineTrim.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lVHJpbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLGU7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL29uZUxpbmVUcmltJztcbiJdfQ==

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineTrim/oneLineTrim.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/common-tags/es/trimResultTransformer/index.js");
/* harmony import */ var _replaceResultTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common-tags/es/replaceResultTransformer/index.js");




var oneLineTrim = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_replaceResultTransformer__WEBPACK_IMPORTED_MODULE_2__["default"])(/(?:\n\s*)/g, ''), _trimResultTransformer__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (oneLineTrim);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lVHJpbS9vbmVMaW5lVHJpbS5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciIsIm9uZUxpbmVUcmltIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFQLE1BQXdCLGdCQUF4QjtBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLDBCQUFsQztBQUNBLE9BQU9DLHdCQUFQLE1BQXFDLDZCQUFyQzs7QUFFQSxJQUFNQyxjQUFjLElBQUlILFdBQUosQ0FDbEJFLHlCQUF5QixZQUF6QixFQUF1QyxFQUF2QyxDQURrQixFQUVsQkQscUJBRmtCLENBQXBCOztBQUtBLGVBQWVFLFdBQWYiLCJmaWxlIjoib25lTGluZVRyaW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBvbmVMaW5lVHJpbSA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyKC8oPzpcXG5cXHMqKS9nLCAnJyksXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IG9uZUxpbmVUcmltO1xuIl19

/***/ }),

/***/ "./node_modules/common-tags/es/removeNonPrintingValuesTransformer/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _removeNonPrintingValuesTransformer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _removeNonPrintingValuesTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/removeNonPrintingValuesTransformer/removeNonPrintingValuesTransformer.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0Isc0M7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3JlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXInO1xuIl19

/***/ }),

/***/ "./node_modules/common-tags/es/removeNonPrintingValuesTransformer/removeNonPrintingValuesTransformer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isValidValue = function isValidValue(x) {
  return x != null && !Number.isNaN(x) && typeof x !== 'boolean';
};

var removeNonPrintingValuesTransformer = function removeNonPrintingValuesTransformer() {
  return {
    onSubstitution: function onSubstitution(substitution) {
      if (Array.isArray(substitution)) {
        return substitution.filter(isValidValue);
      }
      if (isValidValue(substitution)) {
        return substitution;
      }
      return '';
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeNonPrintingValuesTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyL3JlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOlsiaXNWYWxpZFZhbHVlIiwieCIsIk51bWJlciIsImlzTmFOIiwicmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lciIsIm9uU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUNuQkMsS0FBSyxJQUFMLElBQWEsQ0FBQ0MsT0FBT0MsS0FBUCxDQUFhRixDQUFiLENBQWQsSUFBaUMsT0FBT0EsQ0FBUCxLQUFhLFNBRDNCO0FBQUEsQ0FBckI7O0FBR0EsSUFBTUcscUNBQXFDLFNBQXJDQSxrQ0FBcUM7QUFBQSxTQUFPO0FBQ2hEQyxrQkFEZ0QsMEJBQ2pDQyxZQURpQyxFQUNuQjtBQUMzQixVQUFJQyxNQUFNQyxPQUFOLENBQWNGLFlBQWQsQ0FBSixFQUFpQztBQUMvQixlQUFPQSxhQUFhRyxNQUFiLENBQW9CVCxZQUFwQixDQUFQO0FBQ0Q7QUFDRCxVQUFJQSxhQUFhTSxZQUFiLENBQUosRUFBZ0M7QUFDOUIsZUFBT0EsWUFBUDtBQUNEO0FBQ0QsYUFBTyxFQUFQO0FBQ0Q7QUFUK0MsR0FBUDtBQUFBLENBQTNDOztBQVlBLGVBQWVGLGtDQUFmIiwiZmlsZSI6InJlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpc1ZhbGlkVmFsdWUgPSB4ID0+XG4gIHggIT0gbnVsbCAmJiAhTnVtYmVyLmlzTmFOKHgpICYmIHR5cGVvZiB4ICE9PSAnYm9vbGVhbic7XG5cbmNvbnN0IHJlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIgPSAoKSA9PiAoe1xuICBvblN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdWJzdGl0dXRpb24pKSB7XG4gICAgICByZXR1cm4gc3Vic3RpdHV0aW9uLmZpbHRlcihpc1ZhbGlkVmFsdWUpO1xuICAgIH1cbiAgICBpZiAoaXNWYWxpZFZhbHVlKHN1YnN0aXR1dGlvbikpIHtcbiAgICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyO1xuIl19

/***/ }),

/***/ "./node_modules/common-tags/es/replaceResultTransformer/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _replaceResultTransformer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _replaceResultTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/replaceResultTransformer/replaceResultTransformer.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQiw0QjtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyJztcbiJdfQ==

/***/ }),

/***/ "./node_modules/common-tags/es/replaceResultTransformer/replaceResultTransformer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Replaces tabs, newlines and spaces with the chosen value when they occur in sequences
 * @param  {(String|RegExp)} replaceWhat - the value or pattern that should be replaced
 * @param  {*}               replaceWith - the replacement value
 * @return {Object}                      - a TemplateTag transformer
 */
var replaceResultTransformer = function replaceResultTransformer(replaceWhat, replaceWith) {
  return {
    onEndResult: function onEndResult(endResult) {
      if (replaceWhat == null || replaceWith == null) {
        throw new Error('replaceResultTransformer requires at least 2 arguments.');
      }
      return endResult.replace(replaceWhat, replaceWith);
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (replaceResultTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIvcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyLmpzIl0sIm5hbWVzIjpbInJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciIsInJlcGxhY2VXaGF0IiwicmVwbGFjZVdpdGgiLCJvbkVuZFJlc3VsdCIsImVuZFJlc3VsdCIsIkVycm9yIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQU1BLElBQU1BLDJCQUEyQixTQUEzQkEsd0JBQTJCLENBQUNDLFdBQUQsRUFBY0MsV0FBZDtBQUFBLFNBQStCO0FBQzlEQyxlQUQ4RCx1QkFDbERDLFNBRGtELEVBQ3ZDO0FBQ3JCLFVBQUlILGVBQWUsSUFBZixJQUF1QkMsZUFBZSxJQUExQyxFQUFnRDtBQUM5QyxjQUFNLElBQUlHLEtBQUosQ0FDSix5REFESSxDQUFOO0FBR0Q7QUFDRCxhQUFPRCxVQUFVRSxPQUFWLENBQWtCTCxXQUFsQixFQUErQkMsV0FBL0IsQ0FBUDtBQUNEO0FBUjZELEdBQS9CO0FBQUEsQ0FBakM7O0FBV0EsZUFBZUYsd0JBQWYiLCJmaWxlIjoicmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXBsYWNlcyB0YWJzLCBuZXdsaW5lcyBhbmQgc3BhY2VzIHdpdGggdGhlIGNob3NlbiB2YWx1ZSB3aGVuIHRoZXkgb2NjdXIgaW4gc2VxdWVuY2VzXG4gKiBAcGFyYW0gIHsoU3RyaW5nfFJlZ0V4cCl9IHJlcGxhY2VXaGF0IC0gdGhlIHZhbHVlIG9yIHBhdHRlcm4gdGhhdCBzaG91bGQgYmUgcmVwbGFjZWRcbiAqIEBwYXJhbSAgeyp9ICAgICAgICAgICAgICAgcmVwbGFjZVdpdGggLSB0aGUgcmVwbGFjZW1lbnQgdmFsdWVcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgICAgICAgICAgLSBhIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyXG4gKi9cbmNvbnN0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciA9IChyZXBsYWNlV2hhdCwgcmVwbGFjZVdpdGgpID0+ICh7XG4gIG9uRW5kUmVzdWx0KGVuZFJlc3VsdCkge1xuICAgIGlmIChyZXBsYWNlV2hhdCA9PSBudWxsIHx8IHJlcGxhY2VXaXRoID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ3JlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciByZXF1aXJlcyBhdCBsZWFzdCAyIGFyZ3VtZW50cy4nLFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKHJlcGxhY2VXaGF0LCByZXBsYWNlV2l0aCk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyO1xuIl19

/***/ }),

/***/ "./node_modules/common-tags/es/replaceStringTransformer/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _replaceStringTransformer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _replaceStringTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/replaceStringTransformer/replaceStringTransformer.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlU3RyaW5nVHJhbnNmb3JtZXIvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQiw0QjtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vcmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyJztcbiJdfQ==

/***/ }),

/***/ "./node_modules/common-tags/es/replaceStringTransformer/replaceStringTransformer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var replaceStringTransformer = function replaceStringTransformer(replaceWhat, replaceWith) {
  return {
    onString: function onString(str) {
      if (replaceWhat == null || replaceWith == null) {
        throw new Error('replaceStringTransformer requires at least 2 arguments.');
      }

      return str.replace(replaceWhat, replaceWith);
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (replaceStringTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlU3RyaW5nVHJhbnNmb3JtZXIvcmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyLmpzIl0sIm5hbWVzIjpbInJlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lciIsInJlcGxhY2VXaGF0IiwicmVwbGFjZVdpdGgiLCJvblN0cmluZyIsInN0ciIsIkVycm9yIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsMkJBQTJCLFNBQTNCQSx3QkFBMkIsQ0FBQ0MsV0FBRCxFQUFjQyxXQUFkO0FBQUEsU0FBK0I7QUFDOURDLFlBRDhELG9CQUNyREMsR0FEcUQsRUFDaEQ7QUFDWixVQUFJSCxlQUFlLElBQWYsSUFBdUJDLGVBQWUsSUFBMUMsRUFBZ0Q7QUFDOUMsY0FBTSxJQUFJRyxLQUFKLENBQ0oseURBREksQ0FBTjtBQUdEOztBQUVELGFBQU9ELElBQUlFLE9BQUosQ0FBWUwsV0FBWixFQUF5QkMsV0FBekIsQ0FBUDtBQUNEO0FBVDZELEdBQS9CO0FBQUEsQ0FBakM7O0FBWUEsZUFBZUYsd0JBQWYiLCJmaWxlIjoicmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyID0gKHJlcGxhY2VXaGF0LCByZXBsYWNlV2l0aCkgPT4gKHtcbiAgb25TdHJpbmcoc3RyKSB7XG4gICAgaWYgKHJlcGxhY2VXaGF0ID09IG51bGwgfHwgcmVwbGFjZVdpdGggPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAncmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyIHJlcXVpcmVzIGF0IGxlYXN0IDIgYXJndW1lbnRzLicsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBzdHIucmVwbGFjZShyZXBsYWNlV2hhdCwgcmVwbGFjZVdpdGgpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lcjtcbiJdfQ==

/***/ }),

/***/ "./node_modules/common-tags/es/replaceSubstitutionTransformer/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _replaceSubstitutionTransformer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _replaceSubstitutionTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/replaceSubstitutionTransformer/replaceSubstitutionTransformer.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixrQztxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyJztcbiJdfQ==

/***/ }),

/***/ "./node_modules/common-tags/es/replaceSubstitutionTransformer/replaceSubstitutionTransformer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var replaceSubstitutionTransformer = function replaceSubstitutionTransformer(replaceWhat, replaceWith) {
  return {
    onSubstitution: function onSubstitution(substitution, resultSoFar) {
      if (replaceWhat == null || replaceWith == null) {
        throw new Error('replaceSubstitutionTransformer requires at least 2 arguments.');
      }

      // Do not touch if null or undefined
      if (substitution == null) {
        return substitution;
      } else {
        return substitution.toString().replace(replaceWhat, replaceWith);
      }
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (replaceSubstitutionTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIvcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyLmpzIl0sIm5hbWVzIjpbInJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lciIsInJlcGxhY2VXaGF0IiwicmVwbGFjZVdpdGgiLCJvblN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInJlc3VsdFNvRmFyIiwiRXJyb3IiLCJ0b1N0cmluZyIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLGlDQUFpQyxTQUFqQ0EsOEJBQWlDLENBQUNDLFdBQUQsRUFBY0MsV0FBZDtBQUFBLFNBQStCO0FBQ3BFQyxrQkFEb0UsMEJBQ3JEQyxZQURxRCxFQUN2Q0MsV0FEdUMsRUFDMUI7QUFDeEMsVUFBSUosZUFBZSxJQUFmLElBQXVCQyxlQUFlLElBQTFDLEVBQWdEO0FBQzlDLGNBQU0sSUFBSUksS0FBSixDQUNKLCtEQURJLENBQU47QUFHRDs7QUFFRDtBQUNBLFVBQUlGLGdCQUFnQixJQUFwQixFQUEwQjtBQUN4QixlQUFPQSxZQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBT0EsYUFBYUcsUUFBYixHQUF3QkMsT0FBeEIsQ0FBZ0NQLFdBQWhDLEVBQTZDQyxXQUE3QyxDQUFQO0FBQ0Q7QUFDRjtBQWRtRSxHQUEvQjtBQUFBLENBQXZDOztBQWlCQSxlQUFlRiw4QkFBZiIsImZpbGUiOiJyZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIgPSAocmVwbGFjZVdoYXQsIHJlcGxhY2VXaXRoKSA9PiAoe1xuICBvblN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHJlc3VsdFNvRmFyKSB7XG4gICAgaWYgKHJlcGxhY2VXaGF0ID09IG51bGwgfHwgcmVwbGFjZVdpdGggPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAncmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyIHJlcXVpcmVzIGF0IGxlYXN0IDIgYXJndW1lbnRzLicsXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIERvIG5vdCB0b3VjaCBpZiBudWxsIG9yIHVuZGVmaW5lZFxuICAgIGlmIChzdWJzdGl0dXRpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbi50b1N0cmluZygpLnJlcGxhY2UocmVwbGFjZVdoYXQsIHJlcGxhY2VXaXRoKTtcbiAgICB9XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyO1xuIl19

/***/ }),

/***/ "./node_modules/common-tags/es/safeHtml/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _safeHtml__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _safeHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/safeHtml/safeHtml.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWZlSHRtbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLFk7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3NhZmVIdG1sJztcbiJdfQ==

/***/ }),

/***/ "./node_modules/common-tags/es/safeHtml/safeHtml.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/common-tags/es/stripIndentTransformer/index.js");
/* harmony import */ var _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common-tags/es/inlineArrayTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/common-tags/es/trimResultTransformer/index.js");
/* harmony import */ var _splitStringTransformer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/common-tags/es/splitStringTransformer/index.js");
/* harmony import */ var _replaceSubstitutionTransformer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/common-tags/es/replaceSubstitutionTransformer/index.js");







var safeHtml = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_splitStringTransformer__WEBPACK_IMPORTED_MODULE_4__["default"])('\n'), _inlineArrayTransformer__WEBPACK_IMPORTED_MODULE_2__["default"], _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__["default"], _trimResultTransformer__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_replaceSubstitutionTransformer__WEBPACK_IMPORTED_MODULE_5__["default"])(/&/g, '&amp;'), (0,_replaceSubstitutionTransformer__WEBPACK_IMPORTED_MODULE_5__["default"])(/</g, '&lt;'), (0,_replaceSubstitutionTransformer__WEBPACK_IMPORTED_MODULE_5__["default"])(/>/g, '&gt;'), (0,_replaceSubstitutionTransformer__WEBPACK_IMPORTED_MODULE_5__["default"])(/"/g, '&quot;'), (0,_replaceSubstitutionTransformer__WEBPACK_IMPORTED_MODULE_5__["default"])(/'/g, '&#x27;'), (0,_replaceSubstitutionTransformer__WEBPACK_IMPORTED_MODULE_5__["default"])(/`/g, '&#x60;'));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (safeHtml);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWZlSHRtbC9zYWZlSHRtbC5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInN0cmlwSW5kZW50VHJhbnNmb3JtZXIiLCJpbmxpbmVBcnJheVRyYW5zZm9ybWVyIiwidHJpbVJlc3VsdFRyYW5zZm9ybWVyIiwic3BsaXRTdHJpbmdUcmFuc2Zvcm1lciIsInJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lciIsInNhZmVIdG1sIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFQLE1BQXdCLGdCQUF4QjtBQUNBLE9BQU9DLHNCQUFQLE1BQW1DLDJCQUFuQztBQUNBLE9BQU9DLHNCQUFQLE1BQW1DLDJCQUFuQztBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLDBCQUFsQztBQUNBLE9BQU9DLHNCQUFQLE1BQW1DLDJCQUFuQztBQUNBLE9BQU9DLDhCQUFQLE1BQTJDLG1DQUEzQzs7QUFFQSxJQUFNQyxXQUFXLElBQUlOLFdBQUosQ0FDZkksdUJBQXVCLElBQXZCLENBRGUsRUFFZkYsc0JBRmUsRUFHZkQsc0JBSGUsRUFJZkUscUJBSmUsRUFLZkUsK0JBQStCLElBQS9CLEVBQXFDLE9BQXJDLENBTGUsRUFNZkEsK0JBQStCLElBQS9CLEVBQXFDLE1BQXJDLENBTmUsRUFPZkEsK0JBQStCLElBQS9CLEVBQXFDLE1BQXJDLENBUGUsRUFRZkEsK0JBQStCLElBQS9CLEVBQXFDLFFBQXJDLENBUmUsRUFTZkEsK0JBQStCLElBQS9CLEVBQXFDLFFBQXJDLENBVGUsRUFVZkEsK0JBQStCLElBQS9CLEVBQXFDLFFBQXJDLENBVmUsQ0FBakI7O0FBYUEsZUFBZUMsUUFBZiIsImZpbGUiOiJzYWZlSHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHNwbGl0U3RyaW5nVHJhbnNmb3JtZXIgZnJvbSAnLi4vc3BsaXRTdHJpbmdUcmFuc2Zvcm1lcic7XG5pbXBvcnQgcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyIGZyb20gJy4uL3JlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcic7XG5cbmNvbnN0IHNhZmVIdG1sID0gbmV3IFRlbXBsYXRlVGFnKFxuICBzcGxpdFN0cmluZ1RyYW5zZm9ybWVyKCdcXG4nKSxcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcixcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuICByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIoLyYvZywgJyZhbXA7JyksXG4gIHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcigvPC9nLCAnJmx0OycpLFxuICByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIoLz4vZywgJyZndDsnKSxcbiAgcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyKC9cIi9nLCAnJnF1b3Q7JyksXG4gIHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcigvJy9nLCAnJiN4Mjc7JyksXG4gIHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcigvYC9nLCAnJiN4NjA7JyksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBzYWZlSHRtbDtcbiJdfQ==

/***/ }),

/***/ "./node_modules/common-tags/es/source/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/html/index.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb3VyY2UvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixTO3FCQUFiQSxPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi4vaHRtbCc7XG4iXX0=

/***/ }),

/***/ "./node_modules/common-tags/es/splitStringTransformer/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _splitStringTransformer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _splitStringTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/splitStringTransformer/splitStringTransformer.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGxpdFN0cmluZ1RyYW5zZm9ybWVyL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsMEI7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3NwbGl0U3RyaW5nVHJhbnNmb3JtZXInO1xuIl19

/***/ }),

/***/ "./node_modules/common-tags/es/splitStringTransformer/splitStringTransformer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var splitStringTransformer = function splitStringTransformer(splitBy) {
  return {
    onSubstitution: function onSubstitution(substitution, resultSoFar) {
      if (splitBy != null && typeof splitBy === 'string') {
        if (typeof substitution === 'string' && substitution.includes(splitBy)) {
          substitution = substitution.split(splitBy);
        }
      } else {
        throw new Error('You need to specify a string character to split by.');
      }
      return substitution;
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (splitStringTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGxpdFN0cmluZ1RyYW5zZm9ybWVyL3NwbGl0U3RyaW5nVHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOlsic3BsaXRTdHJpbmdUcmFuc2Zvcm1lciIsIm9uU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwicmVzdWx0U29GYXIiLCJzcGxpdEJ5IiwiaW5jbHVkZXMiLCJzcGxpdCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSx5QkFBeUIsU0FBekJBLHNCQUF5QjtBQUFBLFNBQVk7QUFDekNDLGtCQUR5QywwQkFDMUJDLFlBRDBCLEVBQ1pDLFdBRFksRUFDQztBQUN4QyxVQUFJQyxXQUFXLElBQVgsSUFBbUIsT0FBT0EsT0FBUCxLQUFtQixRQUExQyxFQUFvRDtBQUNsRCxZQUFJLE9BQU9GLFlBQVAsS0FBd0IsUUFBeEIsSUFBb0NBLGFBQWFHLFFBQWIsQ0FBc0JELE9BQXRCLENBQXhDLEVBQXdFO0FBQ3RFRix5QkFBZUEsYUFBYUksS0FBYixDQUFtQkYsT0FBbkIsQ0FBZjtBQUNEO0FBQ0YsT0FKRCxNQUlPO0FBQ0wsY0FBTSxJQUFJRyxLQUFKLENBQVUscURBQVYsQ0FBTjtBQUNEO0FBQ0QsYUFBT0wsWUFBUDtBQUNEO0FBVndDLEdBQVo7QUFBQSxDQUEvQjs7QUFhQSxlQUFlRixzQkFBZiIsImZpbGUiOiJzcGxpdFN0cmluZ1RyYW5zZm9ybWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3BsaXRTdHJpbmdUcmFuc2Zvcm1lciA9IHNwbGl0QnkgPT4gKHtcbiAgb25TdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCByZXN1bHRTb0Zhcikge1xuICAgIGlmIChzcGxpdEJ5ICE9IG51bGwgJiYgdHlwZW9mIHNwbGl0QnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodHlwZW9mIHN1YnN0aXR1dGlvbiA9PT0gJ3N0cmluZycgJiYgc3Vic3RpdHV0aW9uLmluY2x1ZGVzKHNwbGl0QnkpKSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbi5zcGxpdChzcGxpdEJ5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBzcGVjaWZ5IGEgc3RyaW5nIGNoYXJhY3RlciB0byBzcGxpdCBieS4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzcGxpdFN0cmluZ1RyYW5zZm9ybWVyO1xuIl19

/***/ }),

/***/ "./node_modules/common-tags/es/stripIndent/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _stripIndent__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _stripIndent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/stripIndent/stripIndent.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudC9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLGU7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3N0cmlwSW5kZW50JztcbiJdfQ==

/***/ }),

/***/ "./node_modules/common-tags/es/stripIndent/stripIndent.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/common-tags/es/stripIndentTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common-tags/es/trimResultTransformer/index.js");




var stripIndent = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"](_stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__["default"], _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stripIndent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudC9zdHJpcEluZGVudC5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInN0cmlwSW5kZW50VHJhbnNmb3JtZXIiLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiLCJzdHJpcEluZGVudCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7O0FBRUEsSUFBTUMsY0FBYyxJQUFJSCxXQUFKLENBQ2xCQyxzQkFEa0IsRUFFbEJDLHFCQUZrQixDQUFwQjs7QUFLQSxlQUFlQyxXQUFmIiwiZmlsZSI6InN0cmlwSW5kZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4uL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBzdHJpcEluZGVudCA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyaXBJbmRlbnQ7XG4iXX0=

/***/ }),

/***/ "./node_modules/common-tags/es/stripIndentTransformer/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/stripIndentTransformer/stripIndentTransformer.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudFRyYW5zZm9ybWVyL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsMEI7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuIl19

/***/ }),

/***/ "./node_modules/common-tags/es/stripIndentTransformer/stripIndentTransformer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * strips indentation from a template literal
 * @param  {String} type = 'initial' - whether to remove all indentation or just leading indentation. can be 'all' or 'initial'
 * @return {Object}                  - a TemplateTag transformer
 */
var stripIndentTransformer = function stripIndentTransformer() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'initial';
  return {
    onEndResult: function onEndResult(endResult) {
      if (type === 'initial') {
        // remove the shortest leading indentation from each line
        var match = endResult.match(/^[^\S\n]*(?=\S)/gm);
        var indent = match && Math.min.apply(Math, _toConsumableArray(match.map(function (el) {
          return el.length;
        })));
        if (indent) {
          var regexp = new RegExp('^.{' + indent + '}', 'gm');
          return endResult.replace(regexp, '');
        }
        return endResult;
      }
      if (type === 'all') {
        // remove all indentation from each line
        return endResult.replace(/^[^\S\n]+/gm, '');
      }
      throw new Error('Unknown type: ' + type);
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stripIndentTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudFRyYW5zZm9ybWVyL3N0cmlwSW5kZW50VHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOlsic3RyaXBJbmRlbnRUcmFuc2Zvcm1lciIsInR5cGUiLCJvbkVuZFJlc3VsdCIsImVuZFJlc3VsdCIsIm1hdGNoIiwiaW5kZW50IiwiTWF0aCIsIm1pbiIsIm1hcCIsImVsIiwibGVuZ3RoIiwicmVnZXhwIiwiUmVnRXhwIiwicmVwbGFjZSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7OztBQUtBLElBQU1BLHlCQUF5QixTQUF6QkEsc0JBQXlCO0FBQUEsTUFBQ0MsSUFBRCx1RUFBUSxTQUFSO0FBQUEsU0FBdUI7QUFDcERDLGVBRG9ELHVCQUN4Q0MsU0FEd0MsRUFDN0I7QUFDckIsVUFBSUYsU0FBUyxTQUFiLEVBQXdCO0FBQ3RCO0FBQ0EsWUFBTUcsUUFBUUQsVUFBVUMsS0FBVixDQUFnQixtQkFBaEIsQ0FBZDtBQUNBLFlBQU1DLFNBQVNELFNBQVNFLEtBQUtDLEdBQUwsZ0NBQVlILE1BQU1JLEdBQU4sQ0FBVTtBQUFBLGlCQUFNQyxHQUFHQyxNQUFUO0FBQUEsU0FBVixDQUFaLEVBQXhCO0FBQ0EsWUFBSUwsTUFBSixFQUFZO0FBQ1YsY0FBTU0sU0FBUyxJQUFJQyxNQUFKLFNBQWlCUCxNQUFqQixRQUE0QixJQUE1QixDQUFmO0FBQ0EsaUJBQU9GLFVBQVVVLE9BQVYsQ0FBa0JGLE1BQWxCLEVBQTBCLEVBQTFCLENBQVA7QUFDRDtBQUNELGVBQU9SLFNBQVA7QUFDRDtBQUNELFVBQUlGLFNBQVMsS0FBYixFQUFvQjtBQUNsQjtBQUNBLGVBQU9FLFVBQVVVLE9BQVYsQ0FBa0IsYUFBbEIsRUFBaUMsRUFBakMsQ0FBUDtBQUNEO0FBQ0QsWUFBTSxJQUFJQyxLQUFKLG9CQUEyQmIsSUFBM0IsQ0FBTjtBQUNEO0FBakJtRCxHQUF2QjtBQUFBLENBQS9COztBQW9CQSxlQUFlRCxzQkFBZiIsImZpbGUiOiJzdHJpcEluZGVudFRyYW5zZm9ybWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBzdHJpcHMgaW5kZW50YXRpb24gZnJvbSBhIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEBwYXJhbSAge1N0cmluZ30gdHlwZSA9ICdpbml0aWFsJyAtIHdoZXRoZXIgdG8gcmVtb3ZlIGFsbCBpbmRlbnRhdGlvbiBvciBqdXN0IGxlYWRpbmcgaW5kZW50YXRpb24uIGNhbiBiZSAnYWxsJyBvciAnaW5pdGlhbCdcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgICAgICAtIGEgVGVtcGxhdGVUYWcgdHJhbnNmb3JtZXJcbiAqL1xuY29uc3Qgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciA9ICh0eXBlID0gJ2luaXRpYWwnKSA9PiAoe1xuICBvbkVuZFJlc3VsdChlbmRSZXN1bHQpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2luaXRpYWwnKSB7XG4gICAgICAvLyByZW1vdmUgdGhlIHNob3J0ZXN0IGxlYWRpbmcgaW5kZW50YXRpb24gZnJvbSBlYWNoIGxpbmVcbiAgICAgIGNvbnN0IG1hdGNoID0gZW5kUmVzdWx0Lm1hdGNoKC9eW15cXFNcXG5dKig/PVxcUykvZ20pO1xuICAgICAgY29uc3QgaW5kZW50ID0gbWF0Y2ggJiYgTWF0aC5taW4oLi4ubWF0Y2gubWFwKGVsID0+IGVsLmxlbmd0aCkpO1xuICAgICAgaWYgKGluZGVudCkge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKGBeLnske2luZGVudH19YCwgJ2dtJyk7XG4gICAgICAgIHJldHVybiBlbmRSZXN1bHQucmVwbGFjZShyZWdleHAsICcnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbmRSZXN1bHQ7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnYWxsJykge1xuICAgICAgLy8gcmVtb3ZlIGFsbCBpbmRlbnRhdGlvbiBmcm9tIGVhY2ggbGluZVxuICAgICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKC9eW15cXFNcXG5dKy9nbSwgJycpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gdHlwZTogJHt0eXBlfWApO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmlwSW5kZW50VHJhbnNmb3JtZXI7XG4iXX0=

/***/ }),

/***/ "./node_modules/common-tags/es/stripIndents/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _stripIndents__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _stripIndents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/stripIndents/stripIndents.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudHMvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixnQjtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vc3RyaXBJbmRlbnRzJztcbiJdfQ==

/***/ }),

/***/ "./node_modules/common-tags/es/stripIndents/stripIndents.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/TemplateTag/index.js");
/* harmony import */ var _stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/common-tags/es/stripIndentTransformer/index.js");
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common-tags/es/trimResultTransformer/index.js");




var stripIndents = new _TemplateTag__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_stripIndentTransformer__WEBPACK_IMPORTED_MODULE_1__["default"])('all'), _trimResultTransformer__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stripIndents);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudHMvc3RyaXBJbmRlbnRzLmpzIl0sIm5hbWVzIjpbIlRlbXBsYXRlVGFnIiwic3RyaXBJbmRlbnRUcmFuc2Zvcm1lciIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInN0cmlwSW5kZW50cyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7O0FBRUEsSUFBTUMsZUFBZSxJQUFJSCxXQUFKLENBQ25CQyx1QkFBdUIsS0FBdkIsQ0FEbUIsRUFFbkJDLHFCQUZtQixDQUFyQjs7QUFLQSxlQUFlQyxZQUFmIiwiZmlsZSI6InN0cmlwSW5kZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcblxuY29uc3Qgc3RyaXBJbmRlbnRzID0gbmV3IFRlbXBsYXRlVGFnKFxuICBzdHJpcEluZGVudFRyYW5zZm9ybWVyKCdhbGwnKSxcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyaXBJbmRlbnRzO1xuIl19

/***/ }),

/***/ "./node_modules/common-tags/es/trimResultTransformer/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _trimResultTransformer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _trimResultTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/trimResultTransformer/trimResultTransformer.js");


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmltUmVzdWx0VHJhbnNmb3JtZXIvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQix5QjtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcbiJdfQ==

/***/ }),

/***/ "./node_modules/common-tags/es/trimResultTransformer/trimResultTransformer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * TemplateTag transformer that trims whitespace on the end result of a tagged template
 * @param  {String} side = '' - The side of the string to trim. Can be 'start' or 'end' (alternatively 'left' or 'right')
 * @return {Object}           - a TemplateTag transformer
 */
var trimResultTransformer = function trimResultTransformer() {
  var side = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return {
    onEndResult: function onEndResult(endResult) {
      if (side === '') {
        return endResult.trim();
      }

      side = side.toLowerCase();

      if (side === 'start' || side === 'left') {
        return endResult.replace(/^\s*/, '');
      }

      if (side === 'end' || side === 'right') {
        return endResult.replace(/\s*$/, '');
      }

      throw new Error('Side not supported: ' + side);
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trimResultTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmltUmVzdWx0VHJhbnNmb3JtZXIvdHJpbVJlc3VsdFRyYW5zZm9ybWVyLmpzIl0sIm5hbWVzIjpbInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInNpZGUiLCJvbkVuZFJlc3VsdCIsImVuZFJlc3VsdCIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0EsSUFBTUEsd0JBQXdCLFNBQXhCQSxxQkFBd0I7QUFBQSxNQUFDQyxJQUFELHVFQUFRLEVBQVI7QUFBQSxTQUFnQjtBQUM1Q0MsZUFENEMsdUJBQ2hDQyxTQURnQyxFQUNyQjtBQUNyQixVQUFJRixTQUFTLEVBQWIsRUFBaUI7QUFDZixlQUFPRSxVQUFVQyxJQUFWLEVBQVA7QUFDRDs7QUFFREgsYUFBT0EsS0FBS0ksV0FBTCxFQUFQOztBQUVBLFVBQUlKLFNBQVMsT0FBVCxJQUFvQkEsU0FBUyxNQUFqQyxFQUF5QztBQUN2QyxlQUFPRSxVQUFVRyxPQUFWLENBQWtCLE1BQWxCLEVBQTBCLEVBQTFCLENBQVA7QUFDRDs7QUFFRCxVQUFJTCxTQUFTLEtBQVQsSUFBa0JBLFNBQVMsT0FBL0IsRUFBd0M7QUFDdEMsZUFBT0UsVUFBVUcsT0FBVixDQUFrQixNQUFsQixFQUEwQixFQUExQixDQUFQO0FBQ0Q7O0FBRUQsWUFBTSxJQUFJQyxLQUFKLDBCQUFpQ04sSUFBakMsQ0FBTjtBQUNEO0FBakIyQyxHQUFoQjtBQUFBLENBQTlCOztBQW9CQSxlQUFlRCxxQkFBZiIsImZpbGUiOiJ0cmltUmVzdWx0VHJhbnNmb3JtZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyIHRoYXQgdHJpbXMgd2hpdGVzcGFjZSBvbiB0aGUgZW5kIHJlc3VsdCBvZiBhIHRhZ2dlZCB0ZW1wbGF0ZVxuICogQHBhcmFtICB7U3RyaW5nfSBzaWRlID0gJycgLSBUaGUgc2lkZSBvZiB0aGUgc3RyaW5nIHRvIHRyaW0uIENhbiBiZSAnc3RhcnQnIG9yICdlbmQnIChhbHRlcm5hdGl2ZWx5ICdsZWZ0JyBvciAncmlnaHQnKVxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgLSBhIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyXG4gKi9cbmNvbnN0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciA9IChzaWRlID0gJycpID0+ICh7XG4gIG9uRW5kUmVzdWx0KGVuZFJlc3VsdCkge1xuICAgIGlmIChzaWRlID09PSAnJykge1xuICAgICAgcmV0dXJuIGVuZFJlc3VsdC50cmltKCk7XG4gICAgfVxuXG4gICAgc2lkZSA9IHNpZGUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmIChzaWRlID09PSAnc3RhcnQnIHx8IHNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKC9eXFxzKi8sICcnKTtcbiAgICB9XG5cbiAgICBpZiAoc2lkZSA9PT0gJ2VuZCcgfHwgc2lkZSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNpZGUgbm90IHN1cHBvcnRlZDogJHtzaWRlfWApO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lcjtcbiJdfQ==

/***/ }),

/***/ "./node_modules/jsurl/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__("./node_modules/jsurl/lib/jsurl.js");

/***/ }),

/***/ "./node_modules/jsurl/lib/jsurl.js":
/***/ ((__unused_webpack_module, exports) => {

/**
 * Copyright (c) 2011 Bruno Jouhier <bruno.jouhier@sage.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
//
(function(exports) {
	"use strict";
	exports.stringify = function stringify(v) {
		function encode(s) {
			return !/[^\w-.]/.test(s) ? s : s.replace(/[^\w-.]/g, function(ch) {
				if (ch === '$') return '!';
				ch = ch.charCodeAt(0);
				// thanks to Douglas Crockford for the negative slice trick
				return ch < 0x100 ? '*' + ('00' + ch.toString(16)).slice(-2) : '**' + ('0000' + ch.toString(16)).slice(-4);
			});
		}

		var tmpAry;

		switch (typeof v) {
			case 'number':
				return isFinite(v) ? '~' + v : '~null';
			case 'boolean':
				return '~' + v;
			case 'string':
				return "~'" + encode(v);
			case 'object':
				if (!v) return '~null';

				tmpAry = [];

				if (Array.isArray(v)) {
					for (var i = 0; i < v.length; i++) {
						tmpAry[i] = stringify(v[i]) || '~null';
					}

					return '~(' + (tmpAry.join('') || '~') + ')';
				} else {
					for (var key in v) {
						if (v.hasOwnProperty(key)) {
							var val = stringify(v[key]);

							// skip undefined and functions
							if (val) {
								tmpAry.push(encode(key) + val);
							}
						}
					}

					return '~(' + tmpAry.join('~') + ')';
				}
			default:
				// function, undefined
				return;
		}
	};

	var reserved = {
		"true": true,
		"false": false,
		"null": null
	};

	exports.parse = function(s) {
		if (!s) return s;
		s = s.replace(/%(25)*27/g, "'");
		var i = 0,
			len = s.length;

		function eat(expected) {
			if (s.charAt(i) !== expected) throw new Error("bad JSURL syntax: expected " + expected + ", got " + (s && s.charAt(i)));
			i++;
		}

		function decode() {
			var beg = i,
				ch, r = "";
			while (i < len && (ch = s.charAt(i)) !== '~' && ch !== ')') {
				switch (ch) {
					case '*':
						if (beg < i) r += s.substring(beg, i);
						if (s.charAt(i + 1) === '*') r += String.fromCharCode(parseInt(s.substring(i + 2, i + 6), 16)), beg = (i += 6);
						else r += String.fromCharCode(parseInt(s.substring(i + 1, i + 3), 16)), beg = (i += 3);
						break;
					case '!':
						if (beg < i) r += s.substring(beg, i);
						r += '$', beg = ++i;
						break;
					default:
						i++;
				}
			}
			return r + s.substring(beg, i);
		}

		return (function parseOne() {
			var result, ch, beg;
			eat('~');
			switch (ch = s.charAt(i)) {
				case '(':
					i++;
					if (s.charAt(i) === '~') {
						result = [];
						if (s.charAt(i + 1) === ')') i++;
						else {
							do {
								result.push(parseOne());
							} while (s.charAt(i) === '~');
						}
					} else {
						result = {};
						if (s.charAt(i) !== ')') {
							do {
								var key = decode();
								result[key] = parseOne();
							} while (s.charAt(i) === '~' && ++i);
						}
					}
					eat(')');
					break;
				case "'":
					i++;
					result = decode();
					break;
				default:
					beg = i++;
					while (i < len && /[^)~]/.test(s.charAt(i)))
					i++;
					var sub = s.substring(beg, i);
					if (/[\d\-]/.test(ch)) {
						result = parseFloat(sub);
					} else {
						result = reserved[sub];
						if (typeof result === "undefined") throw new Error("bad value keyword: " + sub);
					}
			}
			return result;
		})();
	}

	exports.tryParse = function(s, def) {
		try {
			return exports.parse(s);
		} catch (ex) {
			return def;
		}
	}

})( true ? exports : (0));


/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/zip.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   zip: () => (/* binding */ zip)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");
/* harmony import */ var _util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/argsOrArgArray.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/empty.js");
/* harmony import */ var _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js");







function zip() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var resultSelector = (0,_util_args__WEBPACK_IMPORTED_MODULE_6__.popResultSelector)(args);
    var sources = (0,_util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_3__.argsOrArgArray)(args);
    return sources.length
        ? new _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable(function (subscriber) {
            var buffers = sources.map(function () { return []; });
            var completed = sources.map(function () { return false; });
            subscriber.add(function () {
                buffers = completed = null;
            });
            var _loop_1 = function (sourceIndex) {
                (0,_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(sources[sourceIndex]).subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_5__.createOperatorSubscriber)(subscriber, function (value) {
                    buffers[sourceIndex].push(value);
                    if (buffers.every(function (buffer) { return buffer.length; })) {
                        var result = buffers.map(function (buffer) { return buffer.shift(); });
                        subscriber.next(resultSelector ? resultSelector.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(result))) : result);
                        if (buffers.some(function (buffer, i) { return !buffer.length && completed[i]; })) {
                            subscriber.complete();
                        }
                    }
                }, function () {
                    completed[sourceIndex] = true;
                    !buffers[sourceIndex].length && subscriber.complete();
                }));
            };
            for (var sourceIndex = 0; !subscriber.closed && sourceIndex < sources.length; sourceIndex++) {
                _loop_1(sourceIndex);
            }
            return function () {
                buffers = completed = null;
            };
        })
        : _empty__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
}
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/repeat.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   repeat: () => (/* binding */ repeat)
/* harmony export */ });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/empty.js");
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/timer.js");





function repeat(countOrConfig) {
    var _a;
    var count = Infinity;
    var delay;
    if (countOrConfig != null) {
        if (typeof countOrConfig === 'object') {
            (_a = countOrConfig.count, count = _a === void 0 ? Infinity : _a, delay = countOrConfig.delay);
        }
        else {
            count = countOrConfig;
        }
    }
    return count <= 0
        ? function () { return _observable_empty__WEBPACK_IMPORTED_MODULE_0__.EMPTY; }
        : (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)(function (source, subscriber) {
            var soFar = 0;
            var sourceSub;
            var resubscribe = function () {
                sourceSub === null || sourceSub === void 0 ? void 0 : sourceSub.unsubscribe();
                sourceSub = null;
                if (delay != null) {
                    var notifier = typeof delay === 'number' ? (0,_observable_timer__WEBPACK_IMPORTED_MODULE_4__.timer)(delay) : (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__.innerFrom)(delay(soFar));
                    var notifierSubscriber_1 = (0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, function () {
                        notifierSubscriber_1.unsubscribe();
                        subscribeToSource();
                    });
                    notifier.subscribe(notifierSubscriber_1);
                }
                else {
                    subscribeToSource();
                }
            };
            var subscribeToSource = function () {
                var syncUnsub = false;
                sourceSub = source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, undefined, function () {
                    if (++soFar < count) {
                        if (sourceSub) {
                            resubscribe();
                        }
                        else {
                            syncUnsub = true;
                        }
                    }
                    else {
                        subscriber.complete();
                    }
                }));
                if (syncUnsub) {
                    resubscribe();
                }
            };
            subscribeToSource();
        });
}
//# sourceMappingURL=repeat.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/argsOrArgArray.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   argsOrArgArray: () => (/* binding */ argsOrArgArray)
/* harmony export */ });
var isArray = Array.isArray;
function argsOrArgArray(args) {
    return args.length === 1 && isArray(args[0]) ? args[0] : args;
}
//# sourceMappingURL=argsOrArgArray.js.map

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/annotationSupport.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudWatchAnnotationSupport: () => (/* binding */ CloudWatchAnnotationSupport)
/* harmony export */ });
/* harmony import */ var _components_AnnotationQueryEditor_AnnotationQueryEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/AnnotationQueryEditor/AnnotationQueryEditor.tsx");
/* harmony import */ var _defaultQueries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/defaultQueries.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/guards.ts");




const CloudWatchAnnotationSupport = {
  // converts legacy angular style queries to new format. Also sets the same default values as in the deprecated angular directive
  prepareAnnotation: (query) => {
    if ((0,_guards__WEBPACK_IMPORTED_MODULE_2__.isCloudWatchAnnotation)(query)) {
      return query;
    }
    return {
      // setting AnnotationQuery props explicitly since spreading would incorrectly use props that should be on the target only
      datasource: query.datasource,
      enable: query.enable,
      iconColor: query.iconColor,
      name: query.name,
      builtIn: query.builtIn,
      hide: query.hide,
      target: {
        ...query.target,
        ...query,
        statistic: query.statistic || _defaultQueries__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ANNOTATIONS_QUERY.statistic,
        region: query.region || _defaultQueries__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ANNOTATIONS_QUERY.region,
        queryMode: "Annotations",
        refId: query.refId || "annotationQuery"
      }
    };
  },
  // return undefined if query is not complete so that annotation query execution is quietly skipped
  prepareQuery: (anno) => {
    if (!anno.target) {
      return void 0;
    }
    const { prefixMatching, actionPrefix, alarmNamePrefix, statistic, namespace, metricName } = anno.target;
    const validPrefixMatchingQuery = !!prefixMatching && !!actionPrefix && !!alarmNamePrefix;
    const validMetricStatQuery = !prefixMatching && !!namespace && !!metricName && !!statistic;
    if (validPrefixMatchingQuery || validMetricStatQuery) {
      return anno.target;
    }
    return void 0;
  },
  getDefaultQuery() {
    return _defaultQueries__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ANNOTATIONS_QUERY;
  },
  QueryEditor: _components_AnnotationQueryEditor_AnnotationQueryEditor__WEBPACK_IMPORTED_MODULE_0__.AnnotationQueryEditor
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/aws_url.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodeUrl: () => (/* binding */ encodeUrl),
/* harmony export */   getLogsEndpoint: () => (/* binding */ getLogsEndpoint)
/* harmony export */ });

const JSURL = __webpack_require__("./node_modules/jsurl/index.js");
const defaultURL = "console.aws.amazon.com";
const usGovURL = "console.amazonaws-us-gov.com";
const chinaURL = "console.amazonaws.cn";
function getLogsEndpoint(region) {
  let url = defaultURL;
  if (region.startsWith("us-gov-")) {
    url = usGovURL;
  }
  if (region.startsWith("cn-")) {
    url = chinaURL;
  }
  return `${region}.${url}`;
}
function encodeUrl(obj, region) {
  return `https://${getLogsEndpoint(
    region
  )}/cloudwatch/home?region=${region}#logs-insights:queryDetail=${JSURL.stringify(obj)}`;
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/AnnotationQueryEditor/AnnotationQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnotationQueryEditor: () => (/* binding */ AnnotationQueryEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorHeader.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorField.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorRow.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorSwitch.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/InlineSelect.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Space.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/guards.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/hooks.ts");
/* harmony import */ var _shared_MetricStatEditor_MetricStatEditor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/shared/MetricStatEditor/MetricStatEditor.tsx");







const AnnotationQueryEditor = (props) => {
  const { query, onChange, datasource } = props;
  const [regions, regionIsLoading] = (0,_hooks__WEBPACK_IMPORTED_MODULE_10__.useRegions)(datasource);
  if (!(0,_guards__WEBPACK_IMPORTED_MODULE_9__.isCloudWatchAnnotationQuery)(query)) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert, { severity: "error", title: "Invalid annotation query", topSpacing: 2, children: JSON.stringify(query, null, 4) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.EditorHeader, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.InlineSelect,
      {
        label: "Region",
        value: regions.find((v) => v.value === query.region),
        placeholder: "Select region",
        allowCustomValue: true,
        onChange: ({ value: region }) => region && onChange({ ...query, region }),
        options: regions,
        isLoading: regionIsLoading
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Space, { v: 0.5 }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _shared_MetricStatEditor_MetricStatEditor__WEBPACK_IMPORTED_MODULE_11__.MetricStatEditor,
      {
        ...props,
        refId: query.refId,
        metricStat: query,
        disableExpressions: true,
        onChange: (metricStat) => onChange({ ...query, ...metricStat })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Space, { v: 0.5 }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorRow, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.EditorField, { label: "Period", width: 26, tooltip: "Minimum interval between points in seconds.", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
        {
          value: query.period || "",
          placeholder: "auto",
          onChange: (event) => onChange({ ...query, period: event.target.value })
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.EditorField, { label: "Enable Prefix Matching", optional: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.EditorSwitch,
        {
          value: query.prefixMatching,
          onChange: (e) => {
            onChange({
              ...query,
              prefixMatching: e.currentTarget.checked
            });
          }
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.EditorField, { label: "Action", optional: true, disabled: !query.prefixMatching, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
        {
          value: query.actionPrefix || "",
          onChange: (event) => onChange({ ...query, actionPrefix: event.target.value })
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.EditorField, { label: "Alarm Name", optional: true, disabled: !query.prefixMatching, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
        {
          value: query.alarmNamePrefix || "",
          onChange: (event) => onChange({ ...query, alarmNamePrefix: event.target.value })
        }
      ) })
    ] })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/CheatSheet/LogsCheatSheet.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Collapse/Collapse.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/slate-plugins/slate-prism/index.ts");
/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/tracking.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/types.ts");
/* harmony import */ var _sampleQueries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/CheatSheet/sampleQueries.ts");
/* harmony import */ var _tokenizer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/CheatSheet/tokenizer.ts");











const QUERIES = [
  {
    category: "General queries",
    examples: _sampleQueries__WEBPACK_IMPORTED_MODULE_11__.generalQueries
  },
  {
    category: "Lambda",
    examples: _sampleQueries__WEBPACK_IMPORTED_MODULE_11__.lambdaSamples
  },
  {
    category: "VPC Flow Logs",
    examples: _sampleQueries__WEBPACK_IMPORTED_MODULE_11__.vpcSamples
  },
  {
    category: "CloudTrail Logs",
    examples: _sampleQueries__WEBPACK_IMPORTED_MODULE_11__.cloudtrailSamples
  },
  {
    category: "NAT Gateway",
    examples: _sampleQueries__WEBPACK_IMPORTED_MODULE_11__.natSamples
  },
  {
    category: "AWS App Sync",
    examples: _sampleQueries__WEBPACK_IMPORTED_MODULE_11__.appSyncSamples
  },
  {
    category: "IOT queries",
    examples: _sampleQueries__WEBPACK_IMPORTED_MODULE_11__.iotSamples
  }
];
function renderHighlightedMarkup(code, keyPrefix, queryLanugage = _types__WEBPACK_IMPORTED_MODULE_10__.LogsQueryLanguage.CWLI) {
  const grammar = getGrammarForLanguage(queryLanugage);
  const tokens = (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__.flattenTokens)(prismjs__WEBPACK_IMPORTED_MODULE_2___default().tokenize(code, grammar));
  const spans = tokens.filter((token) => typeof token !== "string").map((token, i) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "span",
      {
        className: `prism-token token ${token.types.join(" ")} ${token.aliases.join(" ")}`,
        children: token.content
      },
      `${keyPrefix}-token-${i}`
    );
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "slate-query-field", children: spans });
}
const CheatSheetCollapse = (props) => {
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Collapse, { label: props.label, isOpen, onToggle: setIsOpen, children: props.children }, props.key);
};
const isLogsQuery = (query) => query.queryMode === "Logs";
const LogsCheatSheet = (props) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const queryLanguage = isLogsQuery(props.query) && props.query.queryLanguage || _types__WEBPACK_IMPORTED_MODULE_10__.LogsQueryLanguage.CWLI;
  const onClickExample = (query, queryCategory) => {
    props.onClickExample({
      ...props.query,
      refId: props.query.refId ?? "A",
      expression: query.expr[queryLanguage],
      queryMode: "Logs",
      region: props.query.region,
      id: props.query.refId ?? "A",
      logGroupNames: "logGroupNames" in props.query ? props.query.logGroupNames : [],
      logGroups: "logGroups" in props.query ? props.query.logGroups : []
    });
    (0,_tracking__WEBPACK_IMPORTED_MODULE_9__.trackSampleQuerySelection)({ queryLanguage, queryCategory });
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.heading, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { variant: "h3", weight: "bold", children: "CloudWatch Logs cheat sheet" }) }),
    QUERIES.map((query, i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CheatSheetCollapse, { label: query.category, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: query.examples.map((item, j) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: item.expr[queryLanguage] && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { variant: "h6", weight: "bold", children: item.title }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        "button",
        {
          type: "button",
          className: styles.cheatSheetExample,
          onClick: () => onClickExample(item, query.category),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: renderHighlightedMarkup(item.expr[queryLanguage], `item-${j}`, queryLanguage) })
        },
        item.expr[queryLanguage]
      )
    ] }) })) }, `cat-${i}`) }, query.category)),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
      "Note: If you are seeing masked data, you may have CloudWatch logs data protection enabled.",
      " ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TextLink,
        {
          href: "https://grafana.com/docs/grafana/latest/datasources/aws-cloudwatch/#cloudwatch-logs-data-protection",
          external: true,
          children: "See documentation for details"
        }
      ),
      "."
    ] })
  ] });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogsCheatSheet);
const getStyles = (theme) => ({
  heading: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: theme.spacing(2)
  }),
  cheatSheetExample: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    margin: theme.spacing(0.5, 0),
    // element is interactive, clear button styles
    textAlign: "left",
    border: "none",
    background: "transparent",
    display: "block"
  })
});
const getGrammarForLanguage = (queryLanugage) => {
  switch (queryLanugage) {
    case _types__WEBPACK_IMPORTED_MODULE_10__.LogsQueryLanguage.CWLI:
      return _tokenizer__WEBPACK_IMPORTED_MODULE_12__.cwliTokenizer;
    case _types__WEBPACK_IMPORTED_MODULE_10__.LogsQueryLanguage.PPL:
      return _tokenizer__WEBPACK_IMPORTED_MODULE_12__.pplTokenizer;
    case _types__WEBPACK_IMPORTED_MODULE_10__.LogsQueryLanguage.SQL:
      return _tokenizer__WEBPACK_IMPORTED_MODULE_12__.sqlTokenizer;
  }
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/CheatSheet/sampleQueries.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appSyncSamples: () => (/* binding */ appSyncSamples),
/* harmony export */   cloudtrailSamples: () => (/* binding */ cloudtrailSamples),
/* harmony export */   generalQueries: () => (/* binding */ generalQueries),
/* harmony export */   iotSamples: () => (/* binding */ iotSamples),
/* harmony export */   lambdaSamples: () => (/* binding */ lambdaSamples),
/* harmony export */   natSamples: () => (/* binding */ natSamples),
/* harmony export */   vpcSamples: () => (/* binding */ vpcSamples)
/* harmony export */ });
/* harmony import */ var common_tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common-tags/es/index.js");


const sqlOnlyGeneralQueries = [
  {
    title: "Use the JOIN command to match events between two log groups (LogGroupA, LogGroupB), based on common user IDs across the logs.\xA0",
    expr: {
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT A.transaction_id as txn_id_a, A.userId , A.instance_id as inst_id_a, B.instance_id as inst_id_b FROM \`LogGroupA\` as A INNER JOIN \`LogGroupB\` as B ON A.userId = B.userId WHERE B.Status='ERROR'`
    }
  },
  {
    title: "Find logs where duration is greater than the average duration of all log groups, using a sub-query",
    expr: {
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`@duration\` FROM \`LogGroupA\`
 WHERE \`@duration\` > (
 SELECT avg(\`@duration\`) FROM \`LogGroupA\`
 WHERE \`@type\` = 'REPORT')`
    }
  },
  {
    title: "Find all logs relating to a Lambda function where level is ERROR, and order these logs by request id using a sub-query",
    expr: {
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`select requestId, level, \`@timestamp\`, \`@message\` from \`LogGroupA\` where requestId IN (SELECT distinct
  requestId FROM \`LogGroupA\` where level = 'ERROR') order by requestId`
    }
  },
  {
    title: "Find error logs from high-volume log streams using a sub-query.\xA0",
    expr: {
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT 
 \`@logStream\`,
 COUNT(*) as error_count
 FROM \`LogGroupA\`
 WHERE 
 \`start\` >= date_sub(current_timestamp(), 1)
 AND lower(\`@message\`) LIKE '%error%'
 AND \`@logStream\` IN (
 SELECT \`@logStream\`
 FROM \`logs\`
 GROUP BY \`@logStream\`
 HAVING COUNT(*) > 1000
 )
 GROUP BY \`@logStream\`
 ORDER BY error_count DESC`
    }
  },
  {
    title: "Extract parameter values from a JSON log group",
    expr: {
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT query_name, get_json_object(\`@message\`, '$.answers[*].Rdata')
  AS answers FROM \`LogGroupA\` Where query_type = 'A'`
    }
  },
  {
    title: "Find the intersection of elements for two columns based on eventName.",
    expr: {
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT array_intersect(
 array(get_json_object(\`column1\`, '$.eventName')),
 array(get_json_object(\`column2\`, '$.eventName'))
 ) as matching_events
 FROM \`LogGroupA\`;`
    }
  },
  {
    title: "Return the top 25 most recently added log events.",
    expr: {
      SQL: "SELECT `@timestamp`, `@message` FROM `LogGroupA` ORDER BY `@timestamp` DESC LIMIT 25;"
    }
  },
  {
    title: "Find the number of exceptions logged every five minutes.",
    expr: {
      SQL: `SELECT window.start, COUNT(*) AS exceptionCount FROM \`LogGroupA\` WHERE \`@message\` LIKE '%Exception%' GROUP BY window(\`@timestamp\`, '5 minute') ORDER BY exceptionCount DESC`
    }
  },
  {
    title: "Return a list of log events that are not exceptions.",
    expr: {
      SQL: `SELECT \`@message\` FROM \`LogGroupA\` WHERE \`@message\` NOT LIKE '%Exception%'`
    }
  },
  {
    title: "Identify faults on API calls.",
    expr: {
      SQL: 'Select @timestamp, @logStream as instanceId, ExceptionMessage from `LogGroupA` where Operation = "x" and Fault > 0'
    }
  },
  {
    title: "Return the number of exceptions logged every five minutes using regex where exception is not case sensitive.",
    expr: {
      SQL: `SELECT window.start, COUNT(*) AS exceptionCount FROM \`LogGroupA\` WHERE \`@message\` LIKE '%Exception%' GROUP BY window(\`@timestamp\`, '5 minute') ORDER BY exceptionCount DESC`
    }
  },
  {
    title: "Count the number of logs per minute over the last 24 hours, grouping them into one-minute time buckets and sorting from newest to oldest, and only consider those groups that have error_count greater than zero.",
    expr: {
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT 
 date(\`@timestamp\`) as log_date,
 \`@logStream\`,
 COUNT(*) as total_messages,
 SUM(CASE WHEN lower(\`@message\`) LIKE '%error%' THEN 1 ELSE 0 END) as error_count,
 SUM(CASE WHEN lower(\`@message\`) LIKE '%warn%' THEN 1 ELSE 0 END) as warning_count
 FROM \`LogGroupA\`
 WHERE \`@timestamp\` >= date_sub(current_timestamp(), 7)
 GROUP BY date(\`startTime\`), \`@logStream\`
 HAVING error_count > 0
 ORDER BY error_count DESC`
    }
  },
  {
    title: "Calculate the total count of logs and unique streams, along with the earliest and latest timestamps for all logs from the past 24 hours.",
    expr: {
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT 
 COUNT(*) as total_logs,
 COUNT(DISTINCT \`@logStream\`) as unique_streams,
 MIN(\`@timestamp\`) as earliest_log,
 MAX(\`startTime\`) as latest_log
 FROM \`LogGroupA\`
 WHERE \`startTime\` >= date_sub(current_timestamp(), 1)`
    }
  },
  {
    title: "Show the top 10 most active log streams from the past 24 hours, displaying each stream's total log count and its first and last log timestamps, sorted by highest log count first.",
    expr: {
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`@logStream\`, COUNT(*) as log_count, MIN(\`@timestamp\`) as first_seen, MAX(\`@timestamp\`) as last_seen FROM \`LogGroupA\`WHERE \`startTime\` >= date_sub(current_timestamp(), 24)GROUP BY \`@logStream\`ORDER BY log_count DESC LIMIT 10`
    }
  },
  {
    title: "Count the number of error messages per hour over the last 24 hours, sorted chronologically by hour.",
    expr: {
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT 
 hour(\`@timestamp\`) as hour_of_day,
 COUNT(*) as error_count
 FROM \`LogGroupA\`
 WHERE lower(\`@message\`) LIKE '%error%'
 AND \`@timestamp\` >= date_sub(current_timestamp(), 24)
 GROUP BY hour(\`@timestamp\`)
 ORDER BY hour_of_day`
    }
  },
  {
    title: "Categorize and count all log messages from the last 24 hours into different log levels (ERROR, WARNING, INFO, OTHER), based on message content.",
    expr: {
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT 
 CASE 
 WHEN lower(\`@message\`) LIKE '%error%' THEN 'ERROR'
 WHEN lower(\`@message\`) LIKE '%warn%' THEN 'WARNING'
 WHEN lower(\`@message\`) LIKE '%info%' THEN 'INFO'
 ELSE 'OTHER'
 END as log_level,
 COUNT(*) as message_count
 FROM \`LogGroupA\`
 WHERE \`startTime\` >= date_sub(current_timestamp(), 1)
 GROUP BY CASE 
 WHEN lower(\`@message\`) LIKE '%error%' THEN 'ERROR'
 WHEN lower(\`@message\`) LIKE '%warn%' THEN 'WARNING'
 WHEN lower(\`@message\`) LIKE '%info%' THEN 'INFO'
 ELSE 'OTHER'
 END
 ORDER BY message_count DESC`
    }
  },
  {
    title: "Count the number of logs per minute over the last 24 hours, and group them into one-minute time buckets and sort from newest to oldest.",
    expr: {
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT 
 date_trunc('minute', startTime) as time_bucket,
 COUNT(*) as log_count
 FROM \`LogGroupA\`
 WHERE startTime >= date_sub(current_timestamp(), 1)
 GROUP BY date_trunc('minute', \`startTime\`)
 ORDER BY time_bucket DESC`
    }
  },
  {
    title: "Find log messages that were truncated, based on analysis of the length of the @message field in the log events.",
    expr: {
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT 
 length(\`@message\`) as msg_length,
 COUNT(*) as count,
 MIN(\`@message\`) as sample_message
 FROM \`LogGroupA\`
 WHERE \`startTime\` >= date_sub(current_timestamp(), 1)
 GROUP BY length(\`@message\`)
 HAVING count > 10
 ORDER BY msg_length DESC
 LIMIT 10`
    }
  },
  {
    title: "Show the top 10 most common message lengths from the last 24 hours. It displays the length, count, and a sample message for each message length that appears more than 10 times, sorted by longest messages first.",
    expr: {
      SQL: "SELECT `@logStream`, MAX(`startTime`) as last_log_time, UNIX_TIMESTAMP() - UNIX_TIMESTAMP(MAX(`startTime`)) as seconds_since_last_log FROM `LogGroupA`GROUP BY `@logStream`HAVING seconds_since_last_log > 3600 ORDER BY seconds_since_last_log DESC"
    }
  },
  {
    title: "Find duplicate log messages that occurred more than 10 times in the last 24 hours, showing their count, first and last occurrence times, and number of streams they appeared in, sorted by most frequent messages first",
    expr: {
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT 
 \`@message\`,
 COUNT(*) as occurrence_count,
 MIN(\`@timestamp\`) as first_seen,
 MAX(\`@timestamp\`) as last_seen,
 COUNT(DISTINCT \`@logStream\`) as stream_count
 FROM \`LogGroupA\`
 WHERE \`@timestamp\` >= date_sub(current_timestamp(), 1)
 GROUP BY \`@message\`
 HAVING occurrence_count > 10
 ORDER BY occurrence_count DESC"`
    }
  },
  {
    title: "Count unique message patterns per hour over the last 24 hours. When doing this, it considers only the first 50 characters of longer messages. Results are sorted from most recent hour to oldest.",
    expr: {
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SSELECT 
 date_trunc('hour', startTime) as hour_window,
 COUNT(DISTINCT 
 CASE 
 WHEN length(\`@message\`) < 50 THEN substr(\`@message\`, 1, length(\`@message\`))
 ELSE substr(\`@message\`, 1, 50)
 END
 ) as unique_patterns
 FROM \`LogGroupA\`
 WHERE startTime >= date_sub(current_timestamp(), 24)
 GROUP BY date_trunc('hour', startTime)
 ORDER BY hour_window DESC"`
    }
  },
  {
    title: "Calculate the success and failure rates of requests, based on occurrence of success or failure keywords in the log.",
    expr: {
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT 
 date_trunc('minute', \`@timestamp\`) as minute,
 COUNT(*) as total_requests,
 SUM(CASE WHEN lower(\`@message\`) LIKE '%success%' THEN 1 ELSE 0 END) as successful_requests,
 SUM(CASE WHEN lower(\`@message\`) LIKE '%fail%' OR lower(\`@message\`) LIKE '%error%' THEN 1 ELSE 0 END) as failed_requests,
 ROUND(SUM(CASE WHEN lower(\`@message\`) LIKE '%success%' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) as success_rate
 FROM \`LogGroupA\`
 WHERE startTime >= date_sub(current_timestamp(), 1)
 GROUP BY date_trunc('minute', startTime)
 ORDER BY minute DESC"`
    }
  },
  {
    title: "Identify and extract specific patterns from messages.",
    expr: {
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT 
 \`@logStream\`,
 regexp_extract(\`@message\`, '([A-Z0-9]{8})', 1) as id_pattern,
 substring_index(\`@message\`, ' ', 2) as first_two_words,
 left(\`@message\`, 10) as message_start,
 right(\`@message\`, 10) as message_end,
 length(trim(\`@message\`)) - length(replace(lower(\`@message\`), ' ', '')) + 1 as word_count
 FROM \`LogGroupA\`
 WHERE startTime >= date_sub(current_timestamp(), 1)"`
    }
  },
  {
    title: "Mask numbers in the log events, replacing them with asterisks.",
    expr: {
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT 
 \`@logStream\`,
 translate(\`@message\`, '{}[]()',' ') as cleaned_message,
 regexp_replace(\`@message\`, '[0-9]', '*') as numbers_masked,
 concat_ws(' - ', \`@logStream\`, substr(\`@message\`, 1, 50)) as combined_log,
 repeat('*', length(\`@message\`)) as message_mask
 FROM \`LogGroupA\`
 WHERE startTime >= date_sub(current_timestamp(), 1)"`
    }
  },
  {
    title: "Find log streams that have more than 50 error logs in the last 24 hours",
    expr: {
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT 
 \`@logStream\`,
 COUNT(*) as total_logs,
 COUNT(CASE WHEN lower(\`@message\`) LIKE '%error%' THEN 1 END) as error_count
 FROM \`LogGroupA\`
 WHERE \`@timestamp\` >= date_sub(current_timestamp(), 1)
 GROUP BY \`@logStream\`
 HAVING error_count > 50
 ORDER BY error_count DESC"`
    }
  }
];
const pplOnlyGeneralQueries = [
  {
    title: "Calculate the total message length over five-minute intervals, and then find the average value across the five-minute intervals.	",
    expr: {
      PPL: "eval len_message = length(`@message`) | stats count(len_message) as log_bytes by span(`@timestamp`, 5m) | stats avg(log_bytes) | head 10"
    }
  },
  {
    title: "Return the top 25 most recently added log events.	",
    expr: {
      PPL: "fields `@timestamp`, `@message` | sort - `@timestamp` | head 25"
    }
  },
  {
    title: "Return a list of log events that are not exceptions.	",
    expr: {
      PPL: "eval result = LIKE(`@message`, '%Exception%') | where result = false"
    }
  },
  {
    title: "Identify faults on API calls.	",
    expr: {
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`"where Operation = <operation> AND Fault > 0
 | fields \`@timestamp\`, \`@logStream\` as instanceId, ExceptionMessage"`
    }
  },
  {
    title: "Return the number of exceptions logged every five minutes using regex where exception is not case sensitive.	",
    expr: {
      PPL: "eval result = LIKE(`@message`, '%Exception%') | where result = true | stats count() as exceptionCount by span(`@timestamp`, \"5m\") | sort -exceptionCount"
    }
  },
  {
    title: "Parse the data and counts the number of fields.	",
    expr: {
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`"eval result = LIKE(\`@message\`, 'EndTime') | eval result = true |
 parse \`@message\` '.+=(?<day>[A-Za-z]{3}), \d+' | stats count() by day | head 25"`
    }
  },
  {
    title: "Examine message length patterns per log stream to identify potential truncation issues or abnormal logging behavior that might indicate problems.	",
    expr: {
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`eval msg_length = length(\`@message\`)| stats avg(msg_length) as avg_length, max(msg_length) as max_length, min(msg_length) as min_length by \`@logStream\`| sort - avg_length`
    }
  },
  {
    title: "Analyze log volume trends over time to identify patterns and potential issues in system behavior.	",
    expr: {
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`"eval date = ADDDATE(CURRENT_DATE(), -1) | eval result = TIMESTAMP(date) | where \`@timestamp\` > result | 
 stats count() as log_count by span(\`@timestamp\`, 1h) 
 | sort - log_count
 | head 10"`
    }
  },
  {
    title: "Group and count error messages to identify the most frequent issues affecting the system.	",
    expr: {
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`eval result = LIKE(\`@message\`, "%Error%") | where result = true | stats count() by \`@logStream\` | head 10`
    }
  },
  {
    title: "Find the top causes of error logs.	",
    expr: {
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`eval result = LIKE(\`@message\`, "%Error%") | where result = true | top 2 \`@logStream\` | head 10`
    }
  },
  {
    title: "Find the log streams that contribute the least error log events.	",
    expr: {
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`eval result = LIKE(\`@message\`, "%Error%") | where result = true | rare \`@logStream\` | head 10`
    }
  },
  {
    title: "Calculate the total message length over five-minute intervals, and then find the average value across the five-minute intervals.	",
    expr: {
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`eval len_message = length(\`@message\`) | stats count(len_message) as log_bytes by span(\`@timestamp\`, 5m) | stats avg(log_bytes) | head 10`
    }
  },
  {
    title: "Find the log events that are not exceptions.	",
    expr: {
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`eval isException = LIKE(\`@message\`, '%exception%') | where isException = false | fields \`@logStream\`, \`@message\` | head 10`
    }
  },
  {
    title: "Return the top 25 log events sorted by timestamp.	",
    expr: {
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`fields \`@logStream\`, \`@message\` | sort -\`@timestamp\` | head 25`
    }
  },
  {
    title: "Find and display the error count.	",
    expr: {
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`where Operation = "x" and Fault > 0 | fields \`@timestamp\`, \`@logStream\`, ExceptionMessage | head 20`
    }
  }
];
const generalQueries = [
  {
    title: "Find the 25 most recently added log events",
    expr: {
      CWLI: "fields @timestamp, @message | sort @timestamp desc | limit 25",
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`@timestamp\`, \`@message\`
      FROM \`log_group\`
      ORDER BY \`@timestamp\` DESC
      LIMIT 25`,
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`fields \`@timestamp\`, \`@message\`
| sort - \`@timestamp\`
| head 25
`
    }
  },
  {
    title: "Get a list of the number of exceptions per hour",
    expr: {
      CWLI: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`filter @message like /Exception/
| stats count(*) as exceptionCount by bin(1h)
| sort exceptionCount desc`,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT window.start, COUNT(*) AS exceptionCount
FROM \`log_group\`
WHERE \`@message\` LIKE '%Exception%'
GROUP BY window(\`@timestamp\`, '1 hour')
ORDER BY exceptionCount DESC`,
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`where abs(\`@message\`, "%Exception%")
| stats count() as exceptionCount by span(\`@timestamp\`, 1h)
| sort - exceptionCount`
    }
  },
  {
    title: "Get a list of log events that aren't exceptions.",
    expr: {
      CWLI: "fields @message | filter @message not like /Exception/",
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`@message\`
FROM \`log_group\`
WHERE \`@message\` NOT LIKE '%Exception%'`,
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`fields \`@message\`
| where not like(\`@message\`, "%Exception%")`
    }
  },
  {
    title: "Get the most recent log event for each unique value of the server field",
    expr: {
      CWLI: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`fields @timestamp, server, severity, message
| sort @timestamp asc
| dedup server`,
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`fields \`@timestamp\`, server, severity, message
| sort \`@timestamp\`
| dedup server`
    }
  },
  {
    title: "Get the most recent log event for each unique value of the server field for each severity type",
    expr: {
      CWLI: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`fields @timestamp, server, severity, message
| sort @timestamp desc
| dedup server, severity`,
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`fields \`@timestamp\`, server, severity, message
| sort - \`@timestamp\`
| dedup server`
    }
  },
  {
    title: "Number of exceptions logged every 5 minutes",
    expr: {
      CWLI: "filter @message like /Exception/ | stats count(*) as exceptionCount by bin(5m) | sort exceptionCount desc",
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT window.start, COUNT(*) AS exceptionCount
FROM \`log_group\`
WHERE \`@message\` LIKE '%Exception%'
GROUP BY window(\`@timestamp\`, '5 minute')
ORDER BY exceptionCount DESC`,
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`where like(\`@message\`, "%Exception%")
| stats count() as exceptionCount by span(\`@timestamp\`, 5m)
| sort - exceptionCount`
    }
  },
  ...sqlOnlyGeneralQueries,
  ...pplOnlyGeneralQueries
];
const lambdaSamples = [
  {
    title: "View latency statistics for 5-minute intervals",
    expr: {
      CWLI: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`filter @type = "REPORT" |
                           stats avg(@duration), max(@duration), min(@duration) by bin(5m)`,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT window.start, AVG(\`@duration\`) AS averageDuration,
                            MAX(\`@duration\`) AS maxDuration,
                            MIN(\`@duration\`) AS minDuration
                            FROM \`log_group\`
                            WHERE \`@type\` = 'REPORT'
                            GROUP BY window(\`@timestamp\`, '5 minute')`
    }
  },
  {
    title: "Determine the amount of overprovisioned memory",
    expr: {
      CWLI: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`filter @type = "REPORT"
          | stats max(@memorySize / 1000 / 1000) as provisionedMemoryMB,
            min(@maxMemoryUsed / 1000 / 1000) as smallestMemoryRequestMB,
            avg(@maxMemoryUsed / 1000 / 1000) as avgMemoryUsedMB,
            max(@maxMemoryUsed / 1000 / 1000) as maxMemoryUsedMB,
            provisionedMemoryMB - maxMemoryUsedMB as overProvisionedMB
        `,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT MAX(\`@memorySize\` / 1000 / 1000) AS provisonedMemoryMB,
          MIN(\`@maxMemoryUsed\` / 1000 / 1000) AS smallestMemoryRequestMB,
          AVG(\`@maxMemoryUsed\` / 1000 / 1000) AS avgMemoryUsedMB,
          MAX(\`@maxMemoryUsed\` / 1000 / 1000) AS maxMemoryUsedMB,
          MAX(\`@memorySize\` / 1000 / 1000) - MAX(\`@maxMemoryUsed\` / 1000 / 1000) AS overProvisionedMB
          FROM \`log_group\`
          WHERE \`@type\` = 'REPORT'`
    }
  },
  {
    title: "Find the most expensive requests",
    expr: {
      CWLI: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`filter @type = "REPORT"
        | fields @requestId, @billedDuration
        | sort by @billedDuration desc`,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT\`@requestId\`, \`@billedDuration\`
              FROM \`log_group\`
              WHERE \`@type\` = 'REPORT'
              ORDER BY \`@billedDuration\` DESC`,
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`where \`@type\` = 'REPORT'
            | fields \`@requestId\`, \`@billedDuration\`
            | sort - \`@billedDuration\``
    }
  }
];
const vpcSamples = [
  {
    title: "Find the top 15 packet transfers across hosts",
    expr: {
      CWLI: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`stats sum(packets) as packetsTransferred by srcAddr, dstAddr
          | sort packetsTransferred  desc
          | limit 15`,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`srcAddr\`, \`dstAddr\`, SUM(\`packets\`) AS packetsTransferred
                FROM \`log_group\`
                GROUP BY \`srcAddr\`, \`dstAddr\`
                ORDER BY packetsTransferred DESC
                LIMIT 15;`
    }
  },
  {
    title: "Find the IP addresses that use UDP as a data transfer protocol",
    expr: {
      CWLI: "filter protocol=17 | stats count(*) by srcAddr",
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`srcAddr\`, COUNT(*) AS totalCount
                FROM \`log_group\`
                WHERE \`protocol\` = 17
                GROUP BY srcAddr;`
    }
  },
  {
    title: "Find the IP addresses where flow records were skipped during the capture window",
    expr: {
      CWLI: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`filter logStatus="SKIPDATA"
                | stats count(*) by bin(1h) as t
                | sort t`,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT window.start, COUNT(*) AS totalCount
              FROM \`log_group\`
              WHERE \`logStatus\` = 'SKIPDATA'
              GROUP BY window(\`@timestamp\`, '1 minute')
              ORDER BY window.start`,
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`where logStatus="SKIPDATA"
              | stats count() by span(\`@timestamp\`, 1h) as t
              | sort t`
    }
  },
  {
    title: "Average, min, and max byte transfers by source and destination IP addresses",
    expr: {
      CWLI: "stats sum(bytes) as bytesTransferred by srcAddr, dstAddr | sort bytesTransferred desc | limit 10",
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`srcAddr\`, \`dstAddr\`, AVG(\`bytes\`),
    MIN(\`bytes\`), MAX(\`bytes\`)
    FROM \`log_group\`
    GROUP BY \`srcAddr\`, \`dstAddr\``
    }
  },
  {
    title: "Top 10 byte transfers by source and destination IP addresses",
    expr: {
      CWLI: "stats sum(bytes) as bytesTransferred by srcAddr, dstAddr | sort bytesTransferred desc | limit 10",
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`srcAddr\`, \`dstAddr\`, SUM(\`bytes\`) as bytesTransferred
    FROM \`log_group\`
    GROUP BY \`srcAddr\`, \`dstAddr\`
    ORDER BY bytesTransferred DESC
    LIMIT 10`
    }
  },
  {
    title: "Top 20 source IP addresses with highest number of rejected requests",
    expr: {
      CWLI: 'filter action="REJECT" | stats count(*) as numRejections by srcAddr | sort numRejections desc | limit 20',
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`srcAddr\`, COUNT(*) AS numRejections
              FROM \`log_group\`
              WHERE \`action\` = 'REJECT'
              GROUP BY \`srcAddr\`
              ORDER BY numRejections DESC
              LIMIT 20`
    }
  },
  {
    title: "Find the 10 DNS resolvers with the highest number of requests.",
    expr: {
      CWLI: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`stats count(*) as numRequests by resolverIp
            | sort numRequests desc
            | limit 10`,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`resolverIp\`, COUNT(*) AS numRequests
                FROM \`log_group\`
                GROUP BY \`resolverIp\`
                ORDER BY numRequests DESC
                LIMIT 10`
    }
  },
  {
    title: "Find the number of records by domain and subdomain where the server failed to complete the DNS request.",
    expr: {
      CWLI: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`filter responseCode="SERVFAIL" | stats count(*) by queryName`,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`queryName\`, COUNT(*)
    FROM \`log_group\`
    WHERE \`responseCode\` = 'SERVFAIL'
    GROUP BY \`queryName\``,
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`where \`responseCode\` = 'SERVFAIL'
    | stats count() by \`queryName\``
    }
  },
  {
    title: "Number of requests received every 10 minutes by edge location",
    expr: {
      CWLI: "stats count(*) by queryType, bin(10m)",
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT window.start, \`queryType\`,
    COUNT(*) AS totalCount
    FROM \`log_group\`
    GROUP BY window(\`@timestamp\`, '10 minute'), \`queryType\``,
      PPL: "stats count() by queryType, span(`@timestamp`, 10m)"
    }
  }
];
const cloudtrailSamples = [
  {
    title: "Find the number of log entries for each service, event type, and AWS Region",
    expr: {
      CWLI: "stats count(*) by eventSource, eventName, awsRegion",
      PPL: "stats count() by `eventSource`, `eventName`, `awsRegion`",
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`eventSource\`, \`eventName\`,
    \`awsRegion\`, COUNT(*)
    FROM \`log_group\`
    GROUP BY \`eventSource\`, \`eventName\`,
    \`awsRegion\``
    }
  },
  {
    title: "Find the Amazon EC2 hosts that were started or stopped in a given AWS Region",
    expr: {
      CWLI: 'filter (eventName="StartInstances" or eventName="StopInstances") and awsRegion="us-east-2',
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`where \`eventName\` = 'StartInstances'
    OR \`eventName\` = 'StopInstances'
    AND \`awsRegion\` = 'us-east-2'`,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`@timestamp\`, \`@message\`
    FROM \`log_group\`
    WHERE \`eventName\` = 'StartInstances'
    OR \`eventName\` = 'StopInstances'
    AND \`awsRegion\` = 'us-east-2'`
    }
  },
  {
    title: "Find the AWS Regions, user names, and ARNs of newly created IAM users",
    expr: {
      CWLI: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`filter eventName="CreateUser"
            | fields awsRegion, requestParameters.userName, responseElements.user.arn`,
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`where \`eventName\` = 'CreateUser'
    | fields \`awsRegion\`, \`requestParameters.userName\`, \`responseElements.user.arn\``,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`awsRegion\`, \`requestParameters.userName\`,
            \`responseElements.user.arn\`
            FROM \`log_group\`
            WHERE \`eventName\` = 'CreateUser'`
    }
  },
  {
    title: "Find the number of records where an exception occurred while invoking the API UpdateTrail",
    expr: {
      CWLI: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`filter eventName="UpdateTrail" and ispresent(errorCode)
    | stats count(*) by errorCode, errorMessage`,
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`where eventName = "UpdateTrail" and isnotnull(errorCode)
    | stats count() by errorCode, errorMessage`,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`errorCode\`, \`errorMessage\`, COUNT(*)
    FROM \`log_group\`
    WHERE \`eventName\` = 'UpdateTrail'
    AND \`errorCode\` IS NOT NULL
    GROUP BY \`errorCode\`, \`errorMessage\``
    }
  },
  {
    title: "Find log entries where TLS 1.0 or 1.1 was used",
    expr: {
      CWLI: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`filter tlsDetails.tlsVersion in [ "TLSv1", "TLSv1.1" ]
    | stats count(*) as numOutdatedTlsCalls by userIdentity.accountId, recipientAccountId, eventSource, eventName, awsRegion, tlsDetails.tlsVersion, tlsDetails.cipherSuite, userAgent
    | sort eventSource, eventName, awsRegion, tlsDetails.tlsVersion`,
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`where tlsDetails.tlsVersion in ('TLSv1', 'TLSv1.1')
    | stats count() as numOutdatedTlsCalls by
    \`userIdentity.accountId\`, \`recipientAccountId\`,
    \`eventSource\`, \`eventName\`, \`awsRegion\`
    \`tlsDetails.tlsVersion\`, \`tlsDetails.cipherSuite\`
    \`userAgent\`
    | sort \`eventSource\`, \`eventName\`, \`awsRegion\`, \`tlsDetails.tlsVersion\``,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`userIdentity.accountId\`, \`recipientAccountId\`, \`eventSource\`,
    \`eventName\`, \`awsRegion\`, \`tlsDetails.tlsVersion\`,
    \`tlsDetails.cipherSuite\`, \`userAgent\`, COUNT(*) AS numOutdatedTlsCalls
    FROM \`log_group\`
    WHERE \`tlsDetails.tlsVersion\` IN ('TLSv1', 'TLSv1.1')
    GROUP BY \`userIdentity.accountId\`, \`recipientAccountId\`, \`eventSource\`,
    \`eventName\`, \`awsRegion\`, \`tlsDetails.tlsVersion\`,
    \`tlsDetails.cipherSuite\`, \`userAgent\`
    ORDER BY \`eventSource\`, \`eventName\`, \`awsRegion\`, \`tlsDetails.tlsVersion\``
    }
  },
  {
    title: "Find the number of calls per service that used TLS versions 1.0 or 1.1",
    expr: {
      CWLI: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`filter tlsDetails.tlsVersion in [ "TLSv1", "TLSv1.1" ]
    | stats count(*) as numOutdatedTlsCalls by eventSource
    | sort numOutdatedTlsCalls desc`,
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`where \`tlsDetails.tlsVersion\` in ('TLSv1', 'TLSv1.1')
    | stats count() as numOutdatedTlsCalls by \`eventSource\`
    | sort - numOutdatedTlsCalls`,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`eventSource\`, COUNT(*) AS numOutdatedTlsCalls
    FROM \`log_group\`
    WHERE \`tlsDetails.tlsVersion\` IN ('TLSv1', 'TLSv1.1')
    GROUP BY \`eventSource\`
    ORDER BY numOutdatedTlsCalls DESC`
    }
  },
  {
    title: "Number of log entries by region and EC2 event type",
    expr: {
      CWLI: 'filter eventSource="ec2.amazonaws.com" | stats count(*) as eventCount by eventName, awsRegion | sort eventCount desc',
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`where \`eventSource\` = 'ec2.amazonaws.com'
    | stats count() as eventCount by \`eventName\`, \`awsRegion\`
    | sort - eventCount
    `,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`eventName\`, \`awsRegion\`,
    COUNT(*) AS eventCount
    FROM \`log_group\`
    WHERE \`eventSource\` = 'ec2.amazonaws.com'
    GROUP BY \`eventName\`, \`awsRegion\`
    ORDER BY eventCount DESC`
    }
  }
];
const natSamples = [
  {
    title: "Find the instances that are sending the most traffic through your NAT gateway",
    expr: {
      CWLI: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`filter (dstAddr like 'x.x.x.x' and srcAddr like 'y.y.')
    | stats sum(bytes) as bytesTransferred by srcAddr, dstAddr
    | sort bytesTransferred desc
    | limit 10`,
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`where like(dstAddr, "x.x.x.x") and like(srcAddr like "y.y.")
    | stats sum(bytes) as bytesTransferred by srcAddr, dstAddr
    | sort - bytesTransferred
    | head 10`,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`srcAddr\`, \`dstAddr\`,
    SUM(\`bytes\`) AS bytesTransferred
    FROM \`log_group\`
    WHERE \`dstAddr\` LIKE 'x.x.x.x'
    AND \`srcAddr\` LIKE \`y.y.%\`
    GROUP BY \`srcAddr\`, \`dstAddr\`
    ORDER BY bytesTransferred DESC
    LIMIT 10`
    }
  },
  {
    title: "Determine the traffic that's going to and from the instances in your NAT gateways",
    expr: {
      CWLI: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`filter (dstAddr like 'x.x.x.x' and srcAddr like 'y.y.') or (srcAddr like 'xxx.xx.xx.xx' and dstAddr like 'y.y.')
    | stats sum(bytes) as bytesTransferred by srcAddr, dstAddr
    | sort bytesTransferred desc
    | limit 10`,
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`where (like(dstAddr, "x.x.x.x") and like(srcAddr, "y.y.")) or (like(srcAddr, "xxx.xx.xx.xx") and like(dstAddr, "y.y.")
    | stats sum(bytes) as bytesTransferred by srcAddr, dstAddr
    | sort - bytesTransferred
    | limit 10`,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`srcAddr\`, \`dstAddr\`,
    SUM (\`bytes\`) AS bytesTransferred
    FROM \`log_group\`
    WHERE (\`dstAddr\` LIKE 'x.x.x.x' AND \`srcAddr\` LIKE 'y.y.%')
    OR (\`srcAddr\` LIKE 'xxx.xx.xx.xx' AND \`dstAddr\` LIKE 'y.y.%')
    GROUP BY \`srcAddr\`, \`dstAddr\`
    ORDER BY \`bytesTransferred\` DESC
    LIMIT 10`
    }
  },
  {
    title: "Determine the internet destinations that the instances in your VPC communicate with most often for uploads and downloads - for uploads",
    expr: {
      CWLI: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`filter (srcAddr like 'x.x.x.x' and dstAddr not like 'y.y.')
    | stats sum(bytes) as bytesTransferred by srcAddr, dstAddr
    | sort bytesTransferred desc
    | limit 10`,
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`where like(srcAddr like "y.y.") and not like(dstAddr, "x.x.x.x")
    | stats sum(bytes) as bytesTransferred by srcAddr, dstAddr
    | sort - bytesTransferred
    | head 10`,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`srcAddr\`, \`dstAddr\`,
    SUM(\`bytes\`) AS bytesTransferred
    FROM \`log_group\`
    WHERE \`srcAddr\` LIKE 'x.x.x.x'
    AND \`dstAddr\` NOT LIKE \`y.y.%\`
    GROUP BY \`srcAddr\`, \`dstAddr\`
    ORDER BY bytesTransferred DESC
    LIMIT 10`
    }
  },
  {
    title: "Determine the internet destinations that the instances in your VPC communicate with most often for uploads and downloads - for downloads",
    expr: {
      CWLI: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`filter (dstAddr like 'x.x.x.x' and srcAddr not like 'y.y.')
    | stats sum(bytes) as bytesTransferred by srcAddr, dstAddr
    | sort bytesTransferred desc
    | limit 10`,
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`where like(dstAddr, "x.x.x.x") and not like(srcAddr like "y.y.")
    | stats sum(bytes) as bytesTransferred by srcAddr, dstAddr
    | sort - bytesTransferred
    | head 10`,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`srcAddr\`, \`dstAddr\`,
    SUM(\`bytes\`) AS bytesTransferred
    FROM \`log_group\`
    WHERE \`dstAddr\` LIKE 'x.x.x.x'
    AND \`srcAddr\` NOT LIKE \`y.y.%\`
    GROUP BY \`srcAddr\`, \`dstAddr\`
    ORDER BY bytesTransferred DESC
    LIMIT 10`
    }
  }
];
const appSyncSamples = [
  {
    title: "Number of unique HTTP status codes",
    expr: {
      CWLI: 'fields ispresent(graphQLAPIId) as isApi | filter isApi | filter logType = "RequestSummary" | stats count() as statusCount by statusCode | sort statusCount desc',
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`graphQLAPIId\`, \`statusCode\`,
    COUNT(*) AS statusCount
    FROM \`log_group\`
    WHERE \`logType\` = 'RequestSummary'
    AND \`graphQLAPIId\` IS NOT NULL
    GROUP BY \`graphQLAPIId\`, \`statusCode\`
    ORDER BY statusCount DESC`
    }
  },
  {
    title: "Most frequently invoked resolvers",
    expr: {
      CWLI: 'fields ispresent(resolverArn) as isRes | stats count() as invocationCount by resolverArn | filter isRes | filter logType = "Tracing" | sort invocationCount desc | limit 10',
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`where \`logType\` = 'Tracing'
    | fields \`resolverArn\`, \`duration\`
    | sort - duration
    | head 10`,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`resolverArn\`, COUNT(*) AS invocationCount
    FROM \`log_group\`
    WHERE \`logType\` = 'Tracing'
    AND \`resolverArn\` IS NOT NULL
    GROUP BY \`resolverArn\`
    ORDER BY invocationCount DESC
    LIMIT 10`
    }
  },
  {
    title: "Top 10 resolvers with maximum latency",
    expr: {
      CWLI: 'fields resolverArn, duration | filter logType = "Tracing" | sort duration desc | limit 10',
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`where \`logType\` = 'Tracing'
    | fields \`resolverArn\`, \`duration\`
    | sort - duration
    | head 10`,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`resolverArn\`, \`duration\`
    FROM \`log_group\`
    WHERE \`logType\` = 'Tracing'
    ORDER BY \`duration\` DESC
    LIMIT 10`
    }
  },
  {
    title: "Resolvers with most errors in mapping templates",
    expr: {
      CWLI: 'fields ispresent(resolverArn) as isRes | stats count() as errorCount by resolverArn, logType | filter isRes and (logType = "RequestMapping" or logType = "ResponseMapping") and fieldInError | sort errorCount desc | limit 10',
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT resolverArn, COUNT(*) AS errorCount
    FROM \`log_group\`
    WHERE ISNOTNULL(resolverArn) AND (logType = "RequestMapping" OR logType = "ResponseMapping") AND fieldInError
    GROUP BY resolverArn
    ORDER BY errorCount DESC
    LIMIT 10`
    }
  },
  {
    title: "Field latency statistics",
    expr: {
      CWLI: `stats min(duration), max(duration), avg(duration) as avgDur by concat(parentType, '/', fieldName) as fieldKey | filter logType = "Tracing" | sort avgDur desc | limit 10`,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT CONCAT(parentType, "/", fieldName) AS fieldKey, MIN(duration), MAX(duration), AVG(duration) as avgDur
    FROM \`log_group\`
    ORDER BY fieldKey
    WHERE logType="Tracing"
    SORTY BY avgDur DESC
    LIMIT 10`
    }
  },
  {
    title: "Resolver latency statistics",
    expr: {
      CWLI: 'fields ispresent(resolverArn) as isRes | filter isRes | filter logType = "Tracing" | stats min(duration), max(duration), avg(duration) as avgDur by resolverArn | sort avgDur desc | limit 10 ',
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`resolverArn\`, MIN(\`duration\`),
    MAX(\`duration\`), AVG(\`duration\`) as avgDur
    FROM \`log_group\`
    WHERE \`resolverArn\` IS NOT NULL
    AND \`logType\` = 'Tracing'
    GROUP BY \`resolverArn\`
    ORDER BY avgDur DESC
    LIMIT 10`
    }
  },
  {
    title: "Top 10 requests with maximum latency",
    expr: {
      CWLI: 'fields requestId, latency | filter logType = "RequestSummary" | sort latency desc | limit 10',
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`where \`logType\` = 'RequestSummary'
    | fields \`requestId\`, \`latency\`
    | sort - \`latency\`
    | head 10`,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`requestId\`, \`latency\`
    FROM \`log_group\`
    WHERE \`logType\` = 'RequestSummary'
    ORDER BY \`latency\` DESC
    LIMIT 10`
    }
  }
];
const iotSamples = [
  {
    title: "Count IoT Events and status including errors",
    expr: {
      CWLI: "fields @timestamp, @message | stats count(*) by eventType, status",
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`eventType\`, \`status\`, COUNT(*)
    FROM \`log_group\`
    GROUP BY \`eventType\`, \`status\``
    }
  },
  {
    title: "Count of Disconnect reasons",
    expr: {
      CWLI: 'filter eventType="Disconnect" | stats count(*) by disconnectReason | sort disconnectReason desc',
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`where \`eventType\` = \`Disconnect\`
    | stats count() by \`disconnectReason\`
    | sort - \`disconnectReason\``,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`disconnectReason\`, COUNT(*)
    FROM \`log_group\`
    WHERE \`eventType\` = 'Disconnect'
    GROUP BY \`disconnectReason\`
    ORDER BY \`disconnectReason\` DESC`
    }
  },
  {
    title: "Top 50 devices with Duplicate ClientId disconnect error",
    expr: {
      CWLI: 'filter eventType="Disconnect" and disconnectReason="DUPLICATE_CLIENTID" | stats count(*) by clientId | sort numPublishIn desc | limit 50',
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`clientId\`, COUNT(*) AS duplicateCount
    FROM \`log_group\`
    WHERE \`eventType\` = 'Disconnect'
    AND \`disconnectReason\` = 'DUPLICATE_CLIENTID'
    GROUP BY \`clientId\`
    ORDER BY duplicateCount DESC
    LIMIT 50`
    }
  },
  {
    title: "Top 10 failed connections by ClientId",
    expr: {
      CWLI: 'filter eventType="Connect" and status="Failure" | stats count(*) by clientId | sort numPublishIn desc | limit 10',
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`clientId\`, COUNT(*) AS failedConnectionCount
    FROM \`log_group\`
    WHERE \`eventType\` = 'Connect'
    AND \`status\` = 'Failure'
    GROUP BY \`clientId\`
    ORDER BY failedConnectionCount DESC
    LIMIT 10`
    }
  },
  {
    title: "Connectivity activity for a device",
    expr: {
      CWLI: "fields @timestamp, eventType, reason, clientId | filter clientId like /sampleClientID/ | filter eventType like /Connect|Disconnect/ | sort @timestamp desc | limit 20",
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`fields \`@timestamp\`, eventType, reason, clientId
    | where like(clientId, "%sampleClientID%")
    | where like(eventType, "%Connect%") or like(eventType, "%Disconnect%")
    | sort - \`@timestamp\`
    | head 20`,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`@timestamp\`, \`eventType\`,
    \`reason\`, \`clientId\`
    FROM \`log_group\`
    WHERE \`clientId\` LIKE '%sampleClientID%'
    AND \`eventType\` LIKE ANY ('%Connect%', '%Disconnect%')
    ORDER BY \`@timestamp\` DESC
    LIMIT 20`
    }
  },
  {
    title: "View messages published to a topic",
    expr: {
      CWLI: `fields @timestamp, @message | sort @timestamp desc | filter ( eventType="Publish-In" ) and topicName like 'your/topic/here'`,
      PPL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`fields \`@timestamp\`, \`@message\`
    | where eventType = "Publish-In" and like(topicName, "%your/topic/here%")
    | sort - \`@timestamp\``,
      SQL: (0,common_tags__WEBPACK_IMPORTED_MODULE_0__.stripIndents)`SELECT \`@timestamp\`, \`@message\`
    FROM \`log_group\`
    WHERE \`eventType\` = 'Publish-In'
    AND \`topicName\` LIKE '%your/topic/here%'`
    }
  }
];


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/CheatSheet/tokenizer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   baseTokenizer: () => (/* binding */ baseTokenizer),
/* harmony export */   cwliTokenizer: () => (/* binding */ cwliTokenizer),
/* harmony export */   pplTokenizer: () => (/* binding */ pplTokenizer),
/* harmony export */   sqlTokenizer: () => (/* binding */ sqlTokenizer)
/* harmony export */ });
/* harmony import */ var _language_cloudwatch_logs_syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-logs/syntax.ts");
/* harmony import */ var _language_cloudwatch_logs_sql_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-logs-sql/language.ts");
/* harmony import */ var _language_cloudwatch_ppl_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-ppl/language.ts");




const baseTokenizer = (languageSpecificFeatures) => ({
  comment: {
    pattern: /^#.*/,
    greedy: true
  },
  backticks: {
    pattern: /`.*?`/,
    alias: "string",
    greedy: true
  },
  quote: {
    pattern: /[\"'].*?[\"']/,
    alias: "string",
    greedy: true
  },
  regex: {
    pattern: /\/.*?\/(?=\||\s*$|,)/,
    greedy: true
  },
  ...languageSpecificFeatures,
  "field-name": {
    pattern: /(@?[_a-zA-Z]+[_.0-9a-zA-Z]*)|(`((\\`)|([^`]))*?`)/,
    greedy: true
  },
  number: /\b-?\d+((\.\d*)?([eE][+-]?\d+)?)?\b/,
  "command-separator": {
    pattern: /\|/,
    alias: "punctuation"
  },
  "comparison-operator": {
    pattern: /([<>]=?)|(!?=)/
  },
  punctuation: /[{}()`,.]/,
  whitespace: /\s+/
});
const cwliTokenizer = {
  ...baseTokenizer({
    "query-command": {
      pattern: new RegExp(`\\b(?:${_language_cloudwatch_logs_syntax__WEBPACK_IMPORTED_MODULE_0__.QUERY_COMMANDS.map((command) => command.label).join("|")})\\b`, "i"),
      alias: "function"
    },
    function: {
      pattern: new RegExp(`\\b(?:${_language_cloudwatch_logs_syntax__WEBPACK_IMPORTED_MODULE_0__.FUNCTIONS.map((f) => f.label).join("|")})\\b`, "i")
    },
    keyword: {
      pattern: new RegExp(`(\\s+)(${_language_cloudwatch_logs_syntax__WEBPACK_IMPORTED_MODULE_0__.KEYWORDS.join("|")})(?=\\s+)`, "i"),
      lookbehind: true
    }
  })
};
const pplTokenizer = {
  ...baseTokenizer({
    "query-command": {
      pattern: new RegExp(`\\b(?:${_language_cloudwatch_ppl_language__WEBPACK_IMPORTED_MODULE_2__.PPL_COMMANDS.join("|")})\\b`, "i"),
      alias: "function"
    },
    function: {
      pattern: new RegExp(`\\b(?:${_language_cloudwatch_ppl_language__WEBPACK_IMPORTED_MODULE_2__.ALL_FUNCTIONS.join("|")})\\b`, "i")
    },
    keyword: {
      pattern: new RegExp(`(\\s+)(${_language_cloudwatch_ppl_language__WEBPACK_IMPORTED_MODULE_2__.ALL_KEYWORDS.join("|")})(?=\\s+)`, "i"),
      lookbehind: true
    },
    operator: {
      pattern: new RegExp(`\\b(?:${_language_cloudwatch_ppl_language__WEBPACK_IMPORTED_MODULE_2__.PPL_OPERATORS.map((operator) => `\\${operator}`).join("|")})\\b`, "i")
    }
  })
};
const sqlTokenizer = {
  ...baseTokenizer({
    function: {
      pattern: new RegExp(`\\b(?:${_language_cloudwatch_logs_sql_language__WEBPACK_IMPORTED_MODULE_1__.ALL_FUNCTIONS.join("|")})\\b(?!\\.)`, "i")
    },
    keyword: {
      pattern: new RegExp(`\\b(?:${_language_cloudwatch_logs_sql_language__WEBPACK_IMPORTED_MODULE_1__.ALL_KEYWORDS.join("|")})\\b(?=\\s)`, "i"),
      lookbehind: true
    },
    operator: {
      pattern: new RegExp(`\\b(?:${_language_cloudwatch_logs_sql_language__WEBPACK_IMPORTED_MODULE_1__.ALL_OPERATORS.map((operator) => `\\${operator}`).join("|")})\\b`, "i")
    }
  })
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/ConfigEditor/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ARN_DEPRECATION_WARNING_MESSAGE: () => (/* binding */ ARN_DEPRECATION_WARNING_MESSAGE),
/* harmony export */   CREDENTIALS_AUTHENTICATION_WARNING_MESSAGE: () => (/* binding */ CREDENTIALS_AUTHENTICATION_WARNING_MESSAGE),
/* harmony export */   ConfigEditor: () => (/* binding */ ConfigEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_aws_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/events/common.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/datetime/rangeutil.ts");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/ConfigSection/ConfigSection.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-runtime/src/services/dataSourceSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-runtime/src/analytics/plugins/usePluginInteractionReporter.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Divider/Divider.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/datasource.ts");
/* harmony import */ var _shared_LogGroups_LogGroupsField__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/shared/LogGroups/LogGroupsField.tsx");
/* harmony import */ var _SecureSocksProxySettingsNewStyling__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/ConfigEditor/SecureSocksProxySettingsNewStyling.tsx");
/* harmony import */ var _XrayLinkConfig__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/ConfigEditor/XrayLinkConfig.tsx");














const ARN_DEPRECATION_WARNING_MESSAGE = 'Since grafana 7.3 authentication type "arn" is deprecated, falling back to default SDK provider';
const CREDENTIALS_AUTHENTICATION_WARNING_MESSAGE = `As of grafana 7.3 authentication type "credentials" should be used only for shared file credentials. If you don't have a credentials file, switch to the default SDK provider for extracting credentials from environment variables or IAM roles`;
const ConfigEditor = (props) => {
  const { options, onOptionsChange } = props;
  const { defaultLogGroups, logsTimeout, defaultRegion, logGroups } = options.jsonData;
  const datasource = useDatasource(props);
  const logsTimeoutError = useTimoutValidation(logsTimeout);
  const saved = useDataSourceSavedState(props);
  const [logGroupFieldState, setLogGroupFieldState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    invalid: false
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => setLogGroupFieldState({ invalid: false }), [props.options]);
  const report = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_12__.usePluginInteractionReporter)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const successSubscription = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_11__.getAppEvents)().subscribe(_grafana_data__WEBPACK_IMPORTED_MODULE_5__.DataSourceTestSucceeded, () => {
      report("grafana_plugin_cloudwatch_save_succeeded", {
        auth_type: options.jsonData.authType
      });
    });
    const failSubscription = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_11__.getAppEvents)().subscribe(_grafana_data__WEBPACK_IMPORTED_MODULE_5__.DataSourceTestFailed, () => {
      report("grafana_plugin_cloudwatch_save_failed", {
        auth_type: options.jsonData.authType
      });
    });
    return () => {
      successSubscription.unsubscribe();
      failSubscription.unsubscribe();
    };
  }, [options.jsonData.authType, report]);
  const [externalId, setExternalId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!externalId && datasource) {
      datasource.resources.getExternalId().then(setExternalId).catch(() => setExternalId("Unable to fetch externalId"));
    }
  }, [datasource, externalId]);
  const [warning, setWarning] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const dismissWarning = () => {
    setWarning(null);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (options.jsonData.authType === "arn") {
      setWarning(ARN_DEPRECATION_WARNING_MESSAGE);
    } else if (options.jsonData.authType === "credentials" && !options.jsonData.profile && !options.jsonData.database) {
      setWarning(CREDENTIALS_AUTHENTICATION_WARNING_MESSAGE);
    }
  }, [options.jsonData.authType, options.jsonData.database, options.jsonData.profile]);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.formStyles, children: [
    warning && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Alert, { title: "CloudWatch Authentication", severity: "warning", onRemove: dismissWarning, children: warning }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_aws_sdk__WEBPACK_IMPORTED_MODULE_4__.ConnectionConfig,
      {
        ...props,
        loadRegions: datasource && (async () => {
          return datasource.resources.getRegions().then(
            (regions) => regions.reduce(
              (acc, curr) => curr.value ? [...acc, curr.value] : acc,
              []
            )
          );
        }),
        externalId,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field, { label: "Namespaces of Custom Metrics", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Input,
          {
            placeholder: "Namespace1,Namespace2",
            value: options.jsonData.customMetricsNamespaces || "",
            onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.onUpdateDatasourceJsonDataOption)(props, "customMetricsNamespaces")
          }
        ) })
      }
    ),
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_9__.config.secureSocksDSProxyEnabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SecureSocksProxySettingsNewStyling__WEBPACK_IMPORTED_MODULE_20__.SecureSocksProxySettingsNewStyling, { options, onOptionsChange }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Divider, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_8__.ConfigSection, { title: "Cloudwatch Logs", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
        {
          htmlFor: "logsTimeout",
          label: "Query Result Timeout",
          description: 'Grafana will poll for Cloudwatch Logs results every second until Done status is returned from AWS or timeout is exceeded, in which case Grafana will return an error. Note: For Alerting, the timeout from Grafana config file will take precedence. Must be a valid duration string, such as "30m" (default) "30s" "2000ms" etc.',
          invalid: Boolean(logsTimeoutError),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Input,
            {
              id: "logsTimeout",
              width: 60,
              placeholder: "30m",
              value: options.jsonData.logsTimeout || "",
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.onUpdateDatasourceJsonDataOption)(props, "logsTimeout"),
              title: 'The timeout must be a valid duration string, such as "15m" "30s" "2000ms" etc.'
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
        {
          label: "Default Log Groups",
          description: "Optionally, specify default log groups for CloudWatch Logs queries.",
          ...logGroupFieldState,
          children: datasource ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _shared_LogGroups_LogGroupsField__WEBPACK_IMPORTED_MODULE_19__.LogGroupsFieldWrapper,
            {
              region: defaultRegion ?? "",
              datasource,
              onBeforeOpen: () => {
                if (saved) {
                  return;
                }
                let error = "You need to save the data source before adding log groups.";
                if (props.options.version && props.options.version > 1) {
                  error = "You have unsaved connection detail changes. You need to save the data source before adding log groups.";
                }
                setLogGroupFieldState({
                  invalid: true,
                  error
                });
                throw new Error(error);
              },
              legacyLogGroupNames: defaultLogGroups,
              logGroups,
              onChange: (updatedLogGroups) => {
                onOptionsChange({
                  ...props.options,
                  jsonData: {
                    ...props.options.jsonData,
                    logGroups: updatedLogGroups,
                    defaultLogGroups: void 0
                  }
                });
              },
              maxNoOfVisibleLogGroups: 2,
              legacyOnChange: (logGroups2) => {
                (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.updateDatasourcePluginJsonDataOption)(props, "defaultLogGroups", logGroups2);
              }
            }
          ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Divider, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _XrayLinkConfig__WEBPACK_IMPORTED_MODULE_21__.XrayLinkConfig,
      {
        newFormStyling: true,
        onChange: (uid) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.updateDatasourcePluginJsonDataOption)(props, "tracingDatasourceUid", uid),
        datasourceUid: options.jsonData.tracingDatasourceUid
      }
    )
  ] });
};
function useDatasource(props) {
  const [datasource, setDatasource] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (props.options.version) {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_10__.getDataSourceSrv)().get(props.options.name).then((datasource2) => {
        if (datasource2 instanceof _datasource__WEBPACK_IMPORTED_MODULE_18__.CloudWatchDatasource) {
          setDatasource(datasource2);
        }
      });
    }
  }, [props.options.version, props.options.name]);
  return datasource;
}
function useTimoutValidation(value) {
  const [err, setErr] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(void 0);
  (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(
    () => {
      if (value) {
        try {
          _grafana_data__WEBPACK_IMPORTED_MODULE_7__.describeInterval(value);
          setErr(void 0);
        } catch (e) {
          if (e instanceof Error) {
            setErr(e.toString());
          }
        }
      } else {
        setErr(void 0);
      }
    },
    350,
    [value]
  );
  return err;
}
function useDataSourceSavedState(props) {
  const [saved, setSaved] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!!props.options.version && props.options.version > 1);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setSaved(false);
  }, [
    props.options.jsonData.assumeRoleArn,
    props.options.jsonData.authType,
    props.options.jsonData.defaultRegion,
    props.options.jsonData.endpoint,
    props.options.jsonData.externalId,
    props.options.jsonData.profile,
    props.options.secureJsonData?.accessKey,
    props.options.secureJsonData?.secretKey
  ]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    props.options.version && props.options.version > 1 && setSaved(true);
  }, [props.options.version]);
  return saved;
}
const getStyles = (theme) => ({
  formStyles: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    maxWidth: theme.spacing(50)
  })
});


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/ConfigEditor/SecureSocksProxySettingsNewStyling.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecureSocksProxySettingsNewStyling: () => (/* binding */ SecureSocksProxySettingsNewStyling)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/ConfigSection/ConfigSection.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");




function SecureSocksProxySettingsNewStyling({
  options,
  onOptionsChange
}) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.ConfigSection, { title: "Secure Socks Proxy", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, { label: "Enabled", description: "Connect to this datasource via the secure socks proxy.", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Switch,
    {
      value: options.jsonData.enableSecureSocksProxy ?? false,
      onChange: (event) => onOptionsChange({
        ...options,
        jsonData: { ...options.jsonData, enableSecureSocksProxy: event.currentTarget.checked }
      })
    }
  ) }) });
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/ConfigEditor/XrayLinkConfig.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XrayLinkConfig: () => (/* binding */ XrayLinkConfig)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/ConfigSection/ConfigSection.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/dataSourceSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/components/DataSourcePicker.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");






const getStyles = (theme) => ({
  infoText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    paddingBottom: theme.spacing(2),
    color: theme.colors.text.secondary
  })
});
const xRayDsId = "grafana-x-ray-datasource";
function XrayLinkConfig({ newFormStyling, datasourceUid, onChange }) {
  const hasXrayDatasource = Boolean((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getDataSourceSrv)().getList({ pluginId: xRayDsId }).length);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  return newFormStyling ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.ConfigSection,
    {
      title: "X-ray trace link",
      description: "Grafana will automatically create a link to a trace in X-ray data source if logs contain @xrayTraceId field",
      children: [
        !hasXrayDatasource && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Alert,
          {
            title: "There is no X-ray datasource to link to. First add an X-ray data source and then link it to Cloud Watch. ",
            severity: "info"
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, { htmlFor: "data-source-picker", label: "Data source", description: "X-ray data source containing traces", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.DataSourcePicker,
          {
            pluginId: xRayDsId,
            onChange: (ds) => onChange(ds.uid),
            current: datasourceUid,
            noDefault: true
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: "page-heading", children: "X-ray trace link" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.infoText, children: "Grafana will automatically create a link to a trace in X-ray data source if logs contain @xrayTraceId field" }),
    !hasXrayDatasource && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Alert,
      {
        title: "There is no X-ray datasource to link to. First add an X-ray data source and then link it to Cloud Watch. ",
        severity: "info"
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "gf-form-group", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineField,
      {
        htmlFor: "data-source-picker",
        label: "Data source",
        labelWidth: 28,
        tooltip: "X-ray data source containing traces",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.DataSourcePicker,
          {
            pluginId: xRayDsId,
            onChange: (ds) => onChange(ds.uid),
            current: datasourceUid,
            noDefault: true
          }
        )
      }
    ) })
  ] });
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/Errors/ThrottlingErrorMessage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThrottlingErrorMessage: () => (/* binding */ ThrottlingErrorMessage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");



const ThrottlingErrorMessage = ({ region }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: [
  "Please visit the\xA0",
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TextLink,
    {
      external: true,
      href: `https://${region}.console.aws.amazon.com/servicequotas/home?region=${region}#!/services/monitoring/quotas/L-5E141212`,
      children: "AWS Service Quotas console"
    }
  ),
  "\xA0to request a quota increase or see our\xA0",
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TextLink, { external: true, href: "https://grafana.com/docs/grafana/latest/datasources/cloudwatch/#manage-service-quotas", children: "documentation" }),
  "\xA0to learn more."
] });


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/MetaInspector/MetaInspector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetaInspector: () => (/* binding */ MetaInspector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function MetaInspector({ data = [] }) {
  const rows = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.groupBy)(data, "refId"), [data]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: "filter-table form-inline", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: "RefId" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: "Metric Data Query ID" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: "Metric Data Query Expression" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: "Period" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {})
    ] }) }),
    Object.entries(rows).map(([refId, frames], idx) => {
      if (!frames.length) {
        return null;
      }
      const frame = frames[0];
      const custom = frame.meta?.custom;
      if (!custom) {
        return null;
      }
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: refId }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: custom.id }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: frame.meta?.executedQueryString }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: custom.period })
      ] }) }, idx);
    })
  ] }) });
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/QueryEditor/LogsQueryEditor/CloudWatchLink.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudWatchLink: () => (/* binding */ CloudWatchLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _aws_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/aws_url.ts");






function CloudWatchLink({ panelData, query, datasource }) {
  const [href, setHref] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const prevPanelData = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(panelData);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (prevPanelData !== panelData && panelData?.request?.range) {
      const arns = (query.logGroups ?? []).filter((group) => group?.arn).map((group) => (group.arn ?? "").replace(/:\*$/, ""));
      const logGroupNames = query.logGroupNames;
      let sources = arns?.length ? arns : logGroupNames;
      const range = panelData?.request?.range;
      const start = range.from.toISOString();
      const end = range.to.toISOString();
      const urlProps = {
        end,
        start,
        timeType: "ABSOLUTE",
        tz: "UTC",
        editorString: query.expression ?? "",
        isLiveTail: false,
        source: sources ?? []
      };
      setHref((0,_aws_url__WEBPACK_IMPORTED_MODULE_4__.encodeUrl)(urlProps, datasource.resources.getActualRegion(query.region)));
    }
  }, [panelData, prevPanelData, datasource, query]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, { variant: "secondary", icon: "share-alt", href, target: "_blank", rel: "noopener noreferrer", children: "CloudWatch Logs Insights" });
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/QueryEditor/LogsQueryEditor/LogsAnomaliesQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogsAnomaliesQueryEditor: () => (/* binding */ LogsAnomaliesQueryEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorField.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorRow.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Combobox/Combobox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");




const supressionStateOptions = [
  { label: "All", value: "all" },
  { label: "Suppressed", value: "suppressed" },
  { label: "Unsuppressed", value: "unsuppressed" }
];
const LogsAnomaliesQueryEditor = (props) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.EditorRow, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.EditorField, { label: "Anomaly Detection ARN", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input,
      {
        value: props.query.anomalyDetectionARN || "",
        onChange: (e) => {
          props.onChange({ ...props.query, anomalyDetectionARN: e.currentTarget.value });
        }
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.EditorField, { label: "Supression state", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Combobox,
      {
        value: props.query.suppressionState ?? "all",
        options: supressionStateOptions,
        onChange: (e) => {
          props.onChange({ ...props.query, suppressionState: e.value });
        }
      }
    ) })
  ] }) });
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/QueryEditor/LogsQueryEditor/LogsQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudWatchLogsQueryEditor: () => (/* binding */ CloudWatchLogsQueryEditor),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/InlineSelect.js");
/* harmony import */ var _defaultQueries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/defaultQueries.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/types.ts");
/* harmony import */ var _CloudWatchLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/LogsQueryEditor/CloudWatchLink.tsx");
/* harmony import */ var _LogsAnomaliesQueryEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/LogsQueryEditor/LogsAnomaliesQueryEditor.tsx");
/* harmony import */ var _LogsQueryField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/LogsQueryEditor/LogsQueryField.tsx");










const logsQueryLanguageOptions = [
  { label: "Logs Insights QL", value: _types__WEBPACK_IMPORTED_MODULE_5__.LogsQueryLanguage.CWLI },
  { label: "OpenSearch SQL", value: _types__WEBPACK_IMPORTED_MODULE_5__.LogsQueryLanguage.SQL },
  { label: "OpenSearch PPL", value: _types__WEBPACK_IMPORTED_MODULE_5__.LogsQueryLanguage.PPL }
];
const logsModeOptions = [
  { label: "Logs Insights", value: _types__WEBPACK_IMPORTED_MODULE_5__.LogsMode.Insights },
  { label: "Logs Anomalies", value: _types__WEBPACK_IMPORTED_MODULE_5__.LogsMode.Anomalies }
];
const CloudWatchLogsQueryEditor = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function CloudWatchLogsQueryEditor2(props) {
  const { query, data, datasource, onChange, extraHeaderElementLeft } = props;
  const [isQueryNew, setIsQueryNew] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const onQueryLanguageChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (language) => {
      if (isQueryNew) {
        onChange({
          ...query,
          expression: getDefaultQueryString(language),
          queryLanguage: language ?? _types__WEBPACK_IMPORTED_MODULE_5__.LogsQueryLanguage.CWLI
        });
      } else {
        onChange({ ...query, queryLanguage: language ?? _types__WEBPACK_IMPORTED_MODULE_5__.LogsQueryLanguage.CWLI });
      }
    },
    [isQueryNew, onChange, query]
  );
  const onLogsModeChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (logsMode) => {
      onChange({ ...query, logsMode });
    },
    [query, onChange]
  );
  (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(() => {
    if (query.expression) {
      setIsQueryNew(false);
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isQueryNew && !query.expression) {
      onChange({ ...query, expression: getDefaultQueryString(query.queryLanguage) });
    }
  }, [onChange, query, isQueryNew]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    extraHeaderElementLeft?.(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.InlineSelect,
          {
            label: "Logs Mode",
            value: query.logsMode || _types__WEBPACK_IMPORTED_MODULE_5__.LogsMode.Insights,
            options: logsModeOptions,
            onChange: ({ value }) => {
              onLogsModeChange(value);
            }
          }
        ),
        query.logsMode !== _types__WEBPACK_IMPORTED_MODULE_5__.LogsMode.Anomalies && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.InlineSelect,
          {
            label: "Query language",
            value: query.queryLanguage || _types__WEBPACK_IMPORTED_MODULE_5__.LogsQueryLanguage.CWLI,
            options: logsQueryLanguageOptions,
            onChange: ({ value }) => {
              onQueryLanguageChange(value);
            }
          }
        )
      ] })
    );
    return () => {
      extraHeaderElementLeft?.(void 0);
    };
  }, [extraHeaderElementLeft, onChange, onQueryLanguageChange, query, onLogsModeChange]);
  const onQueryStringChange = (query2) => {
    onChange(query2);
    setIsQueryNew(false);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: query.logsMode === _types__WEBPACK_IMPORTED_MODULE_5__.LogsMode.Anomalies ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LogsAnomaliesQueryEditor__WEBPACK_IMPORTED_MODULE_7__.LogsAnomaliesQueryEditor, { query, onChange }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _LogsQueryField__WEBPACK_IMPORTED_MODULE_8__.CloudWatchLogsQueryField,
    {
      ...props,
      onChange: onQueryStringChange,
      ExtraFieldElement: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CloudWatchLink__WEBPACK_IMPORTED_MODULE_6__.CloudWatchLink, { query, panelData: data, datasource })
    }
  ) });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloudWatchLogsQueryEditor);
const getDefaultQueryString = (language) => {
  switch (language) {
    case _types__WEBPACK_IMPORTED_MODULE_5__.LogsQueryLanguage.SQL:
      return _defaultQueries__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_SQL_QUERY_STRING;
    case _types__WEBPACK_IMPORTED_MODULE_5__.LogsQueryLanguage.PPL:
      return _defaultQueries__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_PPL_QUERY_STRING;
    case _types__WEBPACK_IMPORTED_MODULE_5__.LogsQueryLanguage.CWLI:
    default:
      return _defaultQueries__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_CWLI_QUERY_STRING;
  }
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/QueryEditor/LogsQueryEditor/LogsQueryField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudWatchLogsQueryField: () => (/* binding */ CloudWatchLogsQueryField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/types.ts");
/* harmony import */ var _shared_LogGroups_LogGroupsField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/shared/LogGroups/LogGroupsField.tsx");
/* harmony import */ var _code_editors_LogsQLCodeEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/LogsQueryEditor/code-editors/LogsQLCodeEditor.tsx");
/* harmony import */ var _code_editors_PPLQueryEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/LogsQueryEditor/code-editors/PPLQueryEditor.tsx");
/* harmony import */ var _code_editors_SQLCodeEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/LogsQueryEditor/code-editors/SQLCodeEditor.tsx");










const CloudWatchLogsQueryField = (props) => {
  const { query, datasource, onChange, ExtraFieldElement } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const onChangeLogs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    async (query2) => {
      onChange(query2);
    },
    [onChange]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _shared_LogGroups_LogGroupsField__WEBPACK_IMPORTED_MODULE_5__.LogGroupsFieldWrapper,
      {
        region: query.region,
        datasource,
        legacyLogGroupNames: query.logGroupNames,
        logGroups: query.logGroups,
        onChange: (logGroups) => {
          onChangeLogs({ ...query, logGroups, logGroupNames: void 0 });
        },
        legacyOnChange: (logGroupNames) => {
          onChangeLogs({ ...query, logGroupNames });
        }
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
      getCodeEditor(query, datasource, onChange),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.editor, children: ExtraFieldElement })
    ] })
  ] });
};
const getStyles = (theme) => ({
  editor: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: theme.spacing(1)
  })
});
const getCodeEditor = (query, datasource, onChange) => {
  switch (query.queryLanguage) {
    case _types__WEBPACK_IMPORTED_MODULE_4__.LogsQueryLanguage.PPL:
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_code_editors_PPLQueryEditor__WEBPACK_IMPORTED_MODULE_7__.PPLQueryEditor, { query, datasource, onChange });
    case _types__WEBPACK_IMPORTED_MODULE_4__.LogsQueryLanguage.SQL:
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_code_editors_SQLCodeEditor__WEBPACK_IMPORTED_MODULE_8__.SQLQueryEditor, { query, datasource, onChange });
    default:
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_code_editors_LogsQLCodeEditor__WEBPACK_IMPORTED_MODULE_6__.LogsQLCodeEditor, { query, datasource, onChange });
  }
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/QueryEditor/LogsQueryEditor/code-editors/LogsQLCodeEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogsQLCodeEditor: () => (/* binding */ LogsQLCodeEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _language_logs_definition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/logs/definition.ts");
/* harmony import */ var _language_monarch_commands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/commands.ts");
/* harmony import */ var _language_monarch_register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/register.ts");
/* harmony import */ var _utils_query_getStatsGroups__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/query/getStatsGroups.ts");
/* harmony import */ var _PPLQueryEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/LogsQueryEditor/code-editors/PPLQueryEditor.tsx");









const LogsQLCodeEditor = (props) => {
  const { query, datasource, onChange } = props;
  const monacoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const disposalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const onFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    disposalRef.current = await (0,_language_monarch_register__WEBPACK_IMPORTED_MODULE_5__.reRegisterCompletionProvider)(
      monacoRef.current,
      _language_logs_definition__WEBPACK_IMPORTED_MODULE_3__["default"],
      datasource.logsCompletionItemProviderFunc({
        region: query.region,
        logGroups: query.logGroups
      }),
      disposalRef.current
    );
  }, [datasource, query.logGroups, query.region]);
  const onChangeQuery = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (value) => {
      const nextQuery = {
        ...query,
        expression: value,
        statsGroups: (0,_utils_query_getStatsGroups__WEBPACK_IMPORTED_MODULE_6__.getStatsGroups)(value)
      };
      onChange(nextQuery);
    },
    [onChange, query]
  );
  const onEditorMount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (editor, monaco) => {
      editor.onDidFocusEditorText(() => editor.trigger(_language_monarch_commands__WEBPACK_IMPORTED_MODULE_4__.TRIGGER_SUGGEST.id, _language_monarch_commands__WEBPACK_IMPORTED_MODULE_4__.TRIGGER_SUGGEST.id, {}));
      editor.onDidChangeModelContent(() => {
        const model = editor.getModel();
        if (model?.getValue().trim() === "") {
          editor.trigger(_language_monarch_commands__WEBPACK_IMPORTED_MODULE_4__.TRIGGER_SUGGEST.id, _language_monarch_commands__WEBPACK_IMPORTED_MODULE_4__.TRIGGER_SUGGEST.id, {});
        }
      });
      editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Enter, () => {
        const text = editor.getValue();
        onChangeQuery(text);
      });
    },
    [onChangeQuery]
  );
  const onBeforeEditorMount = async (monaco) => {
    monacoRef.current = monaco;
    disposalRef.current = await (0,_language_monarch_register__WEBPACK_IMPORTED_MODULE_5__.registerLanguage)(
      monaco,
      _language_logs_definition__WEBPACK_IMPORTED_MODULE_3__["default"],
      datasource.logsCompletionItemProviderFunc({
        region: query.region,
        logGroups: query.logGroups
      })
    );
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CodeEditor,
    {
      ..._PPLQueryEditor__WEBPACK_IMPORTED_MODULE_7__.codeEditorCommonProps,
      language: _language_logs_definition__WEBPACK_IMPORTED_MODULE_3__["default"].id,
      value: query.expression ?? "",
      onBlur: (value) => {
        if (value !== query.expression) {
          onChangeQuery(value);
        }
        disposalRef.current?.dispose();
      },
      onFocus,
      onBeforeEditorMount,
      onEditorDidMount: onEditorMount,
      onEditorWillUnmount: () => disposalRef.current?.dispose()
    }
  );
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/QueryEditor/LogsQueryEditor/code-editors/PPLQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PPLQueryEditor: () => (/* binding */ PPLQueryEditor),
/* harmony export */   codeEditorCommonProps: () => (/* binding */ codeEditorCommonProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _language_cloudwatch_ppl_definition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-ppl/definition.ts");
/* harmony import */ var _language_monarch_commands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/commands.ts");
/* harmony import */ var _language_monarch_register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/register.ts");
/* harmony import */ var _utils_query_getStatsGroups__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/query/getStatsGroups.ts");








const codeEditorCommonProps = {
  height: "150px",
  width: "100%",
  showMiniMap: false,
  monacoOptions: {
    // without this setting, the auto-resize functionality causes an infinite loop, don't remove it!
    scrollBeyondLastLine: false,
    // These additional options are style focused and are a subset of those in the query editor in Prometheus
    fontSize: 14,
    lineNumbers: "off",
    renderLineHighlight: "none",
    scrollbar: {
      vertical: "hidden",
      horizontal: "hidden"
    },
    suggestFontSize: 12,
    wordWrap: "on",
    padding: {
      top: 6
    }
  }
};
const PPLQueryEditor = (props) => {
  const { query, datasource, onChange } = props;
  const monacoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const disposalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const onFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    disposalRef.current = await (0,_language_monarch_register__WEBPACK_IMPORTED_MODULE_5__.reRegisterCompletionProvider)(
      monacoRef.current,
      _language_cloudwatch_ppl_definition__WEBPACK_IMPORTED_MODULE_3__["default"],
      datasource.pplCompletionItemProviderFunc({
        region: query.region,
        logGroups: query.logGroups
      }),
      disposalRef.current
    );
  }, [datasource, query.logGroups, query.region]);
  const onChangeQuery = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (value) => {
      const nextQuery = {
        ...query,
        expression: value,
        statsGroups: (0,_utils_query_getStatsGroups__WEBPACK_IMPORTED_MODULE_6__.getStatsGroups)(value)
      };
      onChange(nextQuery);
    },
    [onChange, query]
  );
  const onEditorMount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (editor, monaco) => {
      editor.onDidFocusEditorText(() => editor.trigger(_language_monarch_commands__WEBPACK_IMPORTED_MODULE_4__.TRIGGER_SUGGEST.id, _language_monarch_commands__WEBPACK_IMPORTED_MODULE_4__.TRIGGER_SUGGEST.id, {}));
      editor.onDidChangeModelContent(() => {
        const model = editor.getModel();
        if (model?.getValue().trim() === "") {
          editor.trigger(_language_monarch_commands__WEBPACK_IMPORTED_MODULE_4__.TRIGGER_SUGGEST.id, _language_monarch_commands__WEBPACK_IMPORTED_MODULE_4__.TRIGGER_SUGGEST.id, {});
        }
      });
      editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Enter, () => {
        const text = editor.getValue();
        onChangeQuery(text);
      });
    },
    [onChangeQuery]
  );
  const onBeforeEditorMount = async (monaco) => {
    monacoRef.current = monaco;
    disposalRef.current = await (0,_language_monarch_register__WEBPACK_IMPORTED_MODULE_5__.registerLanguage)(
      monaco,
      _language_cloudwatch_ppl_definition__WEBPACK_IMPORTED_MODULE_3__["default"],
      datasource.pplCompletionItemProviderFunc({
        region: query.region,
        logGroups: query.logGroups
      })
    );
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CodeEditor,
    {
      ...codeEditorCommonProps,
      language: _language_cloudwatch_ppl_definition__WEBPACK_IMPORTED_MODULE_3__["default"].id,
      value: query.expression ?? "",
      onBlur: (value) => {
        if (value !== query.expression) {
          onChangeQuery(value);
        }
        disposalRef.current?.dispose();
      },
      onFocus,
      onBeforeEditorMount,
      onEditorDidMount: onEditorMount,
      onEditorWillUnmount: () => disposalRef.current?.dispose()
    }
  );
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/QueryEditor/LogsQueryEditor/code-editors/SQLCodeEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SQLQueryEditor: () => (/* binding */ SQLQueryEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _language_cloudwatch_logs_sql_definition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-logs-sql/definition.ts");
/* harmony import */ var _language_monarch_commands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/commands.ts");
/* harmony import */ var _language_monarch_register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/register.ts");
/* harmony import */ var _utils_query_getStatsGroups__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/query/getStatsGroups.ts");
/* harmony import */ var _PPLQueryEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/LogsQueryEditor/code-editors/PPLQueryEditor.tsx");









const SQLQueryEditor = (props) => {
  const { query, datasource, onChange } = props;
  const monacoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const disposalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const onFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    disposalRef.current = await (0,_language_monarch_register__WEBPACK_IMPORTED_MODULE_5__.reRegisterCompletionProvider)(
      monacoRef.current,
      _language_cloudwatch_logs_sql_definition__WEBPACK_IMPORTED_MODULE_3__["default"],
      datasource.logsSqlCompletionItemProviderFunc({
        region: query.region,
        logGroups: query.logGroups
      }),
      disposalRef.current
    );
  }, [datasource, query.logGroups, query.region]);
  const onChangeQuery = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (value) => {
      const nextQuery = {
        ...query,
        expression: value,
        statsGroups: (0,_utils_query_getStatsGroups__WEBPACK_IMPORTED_MODULE_6__.getStatsGroups)(value)
      };
      onChange(nextQuery);
    },
    [onChange, query]
  );
  const onEditorMount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (editor, monaco) => {
      editor.onDidFocusEditorText(() => editor.trigger(_language_monarch_commands__WEBPACK_IMPORTED_MODULE_4__.TRIGGER_SUGGEST.id, _language_monarch_commands__WEBPACK_IMPORTED_MODULE_4__.TRIGGER_SUGGEST.id, {}));
      editor.onDidChangeModelContent(() => {
        const model = editor.getModel();
        if (model?.getValue().trim() === "") {
          editor.trigger(_language_monarch_commands__WEBPACK_IMPORTED_MODULE_4__.TRIGGER_SUGGEST.id, _language_monarch_commands__WEBPACK_IMPORTED_MODULE_4__.TRIGGER_SUGGEST.id, {});
        }
      });
      editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Enter, () => {
        const text = editor.getValue();
        onChangeQuery(text);
      });
    },
    [onChangeQuery]
  );
  const onBeforeEditorMount = async (monaco) => {
    monacoRef.current = monaco;
    disposalRef.current = await (0,_language_monarch_register__WEBPACK_IMPORTED_MODULE_5__.registerLanguage)(
      monaco,
      _language_cloudwatch_logs_sql_definition__WEBPACK_IMPORTED_MODULE_3__["default"],
      datasource.logsSqlCompletionItemProviderFunc({
        region: query.region,
        logGroups: query.logGroups
      })
    );
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CodeEditor,
    {
      ..._PPLQueryEditor__WEBPACK_IMPORTED_MODULE_7__.codeEditorCommonProps,
      language: _language_cloudwatch_logs_sql_definition__WEBPACK_IMPORTED_MODULE_3__["default"].id,
      value: query.expression ?? "",
      onBlur: (value) => {
        if (value !== query.expression) {
          onChangeQuery(value);
        }
        disposalRef.current?.dispose();
      },
      onFocus,
      onBeforeEditorMount,
      onEditorDidMount: onEditorMount,
      onEditorWillUnmount: () => disposalRef.current?.dispose()
    }
  );
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/DynamicLabelsField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicLabelsField: () => (/* binding */ DynamicLabelsField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _language_dynamic_labels_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/dynamic-labels/CompletionItemProvider.ts");
/* harmony import */ var _language_dynamic_labels_definition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/dynamic-labels/definition.ts");
/* harmony import */ var _language_monarch_commands__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/commands.ts");
/* harmony import */ var _language_monarch_register__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/register.ts");









const dynamicLabelsCompletionItemProvider = new _language_dynamic_labels_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_6__.DynamicLabelsCompletionItemProvider();
function DynamicLabelsField({ label, width, onChange }) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useTheme2)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.getInputStyles)({ theme, width });
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const onEditorMount = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (editor, monaco) => {
      editor.onDidFocusEditorText(() => editor.trigger(_language_monarch_commands__WEBPACK_IMPORTED_MODULE_8__.TRIGGER_SUGGEST.id, _language_monarch_commands__WEBPACK_IMPORTED_MODULE_8__.TRIGGER_SUGGEST.id, {}));
      editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Enter, () => {
        const text = editor.getValue();
        onChange(text);
      });
      const containerDiv = containerRef.current;
      containerDiv !== null && editor.layout({ width: containerDiv.clientWidth, height: containerDiv.clientHeight });
    },
    [onChange]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: containerRef, className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.wrapper), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CodeEditor,
    {
      containerStyles: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        border: `1px solid ${theme.colors.action.disabledBackground}`,
        "&:hover": {
          borderColor: theme.components.input.borderColor
        }
      }),
      monacoOptions: {
        // without this setting, the auto-resize functionality causes an infinite loop, don't remove it!
        scrollBeyondLastLine: false,
        // These additional options are style focused and are a subset of those in the query editor in Prometheus
        fontSize: 14,
        lineNumbers: "off",
        renderLineHighlight: "none",
        overviewRulerLanes: 0,
        scrollbar: {
          vertical: "hidden",
          horizontal: "hidden"
        },
        suggestFontSize: 12,
        padding: {
          top: 6
        }
      },
      language: _language_dynamic_labels_definition__WEBPACK_IMPORTED_MODULE_7__["default"].id,
      value: label,
      onBlur: (value) => {
        if (value !== label) {
          onChange(value);
        }
      },
      onBeforeEditorMount: (monaco) => (0,_language_monarch_register__WEBPACK_IMPORTED_MODULE_9__.registerLanguage)(monaco, _language_dynamic_labels_definition__WEBPACK_IMPORTED_MODULE_7__["default"], dynamicLabelsCompletionItemProvider),
      onEditorDidMount: onEditorMount
    }
  ) });
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/MathExpressionQueryField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MathExpressionQueryField: () => (/* binding */ MathExpressionQueryField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _language_metric_math_definition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/metric-math/definition.ts");
/* harmony import */ var _language_monarch_commands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/commands.ts");
/* harmony import */ var _language_monarch_register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/register.ts");







function MathExpressionQueryField({ expression: query, onChange, datasource }) {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const onEditorMount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (editor, monaco) => {
      editor.onDidFocusEditorText(() => editor.trigger(_language_monarch_commands__WEBPACK_IMPORTED_MODULE_4__.TRIGGER_SUGGEST.id, _language_monarch_commands__WEBPACK_IMPORTED_MODULE_4__.TRIGGER_SUGGEST.id, {}));
      editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Enter, () => {
        const text = editor.getValue();
        onChange(text);
      });
      const updateElementHeight = () => {
        const containerDiv = containerRef.current;
        if (containerDiv !== null) {
          const maxPixelHeight = Math.min(200, editor.getContentHeight());
          const pixelHeight = Math.max(32, maxPixelHeight);
          containerDiv.style.height = `${pixelHeight}px`;
          containerDiv.style.width = "100%";
          const pixelWidth = containerDiv.clientWidth;
          editor.layout({ width: pixelWidth, height: pixelHeight });
        }
      };
      editor.onDidContentSizeChange(updateElementHeight);
      updateElementHeight();
    },
    [onChange]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: containerRef, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CodeEditor,
    {
      monacoOptions: {
        // without this setting, the auto-resize functionality causes an infinite loop, don't remove it!
        scrollBeyondLastLine: false,
        // These additional options are style focused and are a subset of those in the query editor in Prometheus
        fontSize: 14,
        lineNumbers: "off",
        renderLineHighlight: "none",
        scrollbar: {
          vertical: "hidden",
          horizontal: "hidden"
        },
        suggestFontSize: 12,
        wordWrap: "on",
        padding: {
          top: 6
        }
      },
      language: _language_metric_math_definition__WEBPACK_IMPORTED_MODULE_3__["default"].id,
      value: query,
      onBlur: (value) => {
        if (value !== query) {
          onChange(value);
        }
      },
      onBeforeEditorMount: (monaco) => (0,_language_monarch_register__WEBPACK_IMPORTED_MODULE_5__.registerLanguage)(monaco, _language_metric_math_definition__WEBPACK_IMPORTED_MODULE_3__["default"], datasource.metricMathCompletionItemProvider),
      onEditorDidMount: onEditorMount
    }
  ) });
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/MetricsQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetricsQueryEditor: () => (/* binding */ MetricsQueryEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorField.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorRow.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/InlineSelect.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Space.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _defaultQueries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/defaultQueries.ts");
/* harmony import */ var _migrations_useMigratedMetricsQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/migrations/useMigratedMetricsQuery.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/types.ts");
/* harmony import */ var _shared_MetricStatEditor_MetricStatEditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/shared/MetricStatEditor/MetricStatEditor.tsx");
/* harmony import */ var _DynamicLabelsField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/DynamicLabelsField.tsx");
/* harmony import */ var _MathExpressionQueryField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/MathExpressionQueryField.tsx");
/* harmony import */ var _SQLBuilderEditor_SQLBuilderEditor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/SQLBuilderEditor/SQLBuilderEditor.tsx");
/* harmony import */ var _SQLCodeEditor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/SQLCodeEditor.tsx");














const metricEditorModes = [
  { label: "Metric Search", value: _types__WEBPACK_IMPORTED_MODULE_12__.MetricQueryType.Search },
  { label: "Metric Insights", value: _types__WEBPACK_IMPORTED_MODULE_12__.MetricQueryType.Insights }
];
const editorModes = [
  { label: "Builder", value: _types__WEBPACK_IMPORTED_MODULE_12__.MetricEditorMode.Builder },
  { label: "Code", value: _types__WEBPACK_IMPORTED_MODULE_12__.MetricEditorMode.Code }
];
const MetricsQueryEditor = (props) => {
  const { query, datasource, extraHeaderElementLeft, extraHeaderElementRight, onChange } = props;
  const [showConfirm, setShowConfirm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [codeEditorIsDirty, setCodeEditorIsDirty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const migratedQuery = (0,_migrations_useMigratedMetricsQuery__WEBPACK_IMPORTED_MODULE_11__["default"])(query, props.onChange);
  const onEditorModeChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (newMetricEditorMode) => {
      if (codeEditorIsDirty && query.metricQueryType === _types__WEBPACK_IMPORTED_MODULE_12__.MetricQueryType.Insights && query.metricEditorMode === _types__WEBPACK_IMPORTED_MODULE_12__.MetricEditorMode.Code) {
        setShowConfirm(true);
        return;
      }
      onChange({ ...query, metricEditorMode: newMetricEditorMode });
    },
    [setShowConfirm, onChange, codeEditorIsDirty, query]
  );
  const updateAccounIdOnMount = () => {
    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.featureToggles.cloudWatchCrossAccountQuerying && query.accountId) {
      datasource.resources.isMonitoringAccount(query.region).then((isMonitoring) => {
        if (!isMonitoring && query.accountId) {
          onChange({ ...query, accountId: void 0 });
        }
      });
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(updateAccounIdOnMount, [datasource, onChange, query]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    extraHeaderElementLeft?.(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.InlineSelect,
        {
          "aria-label": "Metric editor mode",
          value: metricEditorModes.find((m) => m.value === query.metricQueryType),
          options: metricEditorModes,
          onChange: ({ value }) => {
            if (codeEditorIsDirty && query.metricQueryType === _types__WEBPACK_IMPORTED_MODULE_12__.MetricQueryType.Search && query.metricEditorMode === _types__WEBPACK_IMPORTED_MODULE_12__.MetricEditorMode.Builder) {
              setShowConfirm(true);
              return;
            }
            onChange({ ...query, metricQueryType: value });
          }
        }
      )
    );
    extraHeaderElementRight?.(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.RadioButtonGroup,
          {
            options: editorModes,
            size: "sm",
            value: query.metricEditorMode,
            onChange: onEditorModeChange
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ConfirmModal,
          {
            isOpen: showConfirm,
            title: "Are you sure?",
            body: "You will lose changes made to the query if you change to Metric Insights Builder mode.",
            confirmText: "Yes, I am sure.",
            dismissText: "No, continue editing the query.",
            icon: "exclamation-triangle",
            onConfirm: () => {
              setShowConfirm(false);
              setCodeEditorIsDirty(false);
              onChange({
                ...query,
                ..._defaultQueries__WEBPACK_IMPORTED_MODULE_10__.DEFAULT_METRICS_QUERY,
                metricQueryType: _types__WEBPACK_IMPORTED_MODULE_12__.MetricQueryType.Insights,
                metricEditorMode: _types__WEBPACK_IMPORTED_MODULE_12__.MetricEditorMode.Builder
              });
            },
            onDismiss: () => setShowConfirm(false)
          }
        )
      ] })
    );
    return () => {
      extraHeaderElementLeft?.(void 0);
      extraHeaderElementRight?.(void 0);
    };
  }, [
    query,
    codeEditorIsDirty,
    datasource,
    onChange,
    extraHeaderElementLeft,
    extraHeaderElementRight,
    showConfirm,
    onEditorModeChange
  ]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Space, { v: 0.5 }),
    query.metricQueryType === _types__WEBPACK_IMPORTED_MODULE_12__.MetricQueryType.Search && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      query.metricEditorMode === _types__WEBPACK_IMPORTED_MODULE_12__.MetricEditorMode.Builder && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _shared_MetricStatEditor_MetricStatEditor__WEBPACK_IMPORTED_MODULE_13__.MetricStatEditor,
        {
          ...props,
          refId: query.refId,
          metricStat: query,
          onChange: (metricStat) => {
            if (!codeEditorIsDirty) {
              setCodeEditorIsDirty(true);
            }
            props.onChange({ ...query, ...metricStat });
          }
        }
      ),
      query.metricEditorMode === _types__WEBPACK_IMPORTED_MODULE_12__.MetricEditorMode.Code && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _MathExpressionQueryField__WEBPACK_IMPORTED_MODULE_15__.MathExpressionQueryField,
        {
          expression: query.expression ?? "",
          onChange: (expression) => props.onChange({ ...query, expression }),
          datasource
        }
      )
    ] }),
    query.metricQueryType === _types__WEBPACK_IMPORTED_MODULE_12__.MetricQueryType.Insights && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      query.metricEditorMode === _types__WEBPACK_IMPORTED_MODULE_12__.MetricEditorMode.Code && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _SQLCodeEditor__WEBPACK_IMPORTED_MODULE_17__.SQLCodeEditor,
        {
          region: query.region,
          sql: query.sqlExpression ?? "",
          onChange: (sqlExpression) => {
            if (!codeEditorIsDirty) {
              setCodeEditorIsDirty(true);
            }
            props.onChange({ ...migratedQuery, sqlExpression });
          },
          datasource
        }
      ),
      query.metricEditorMode === _types__WEBPACK_IMPORTED_MODULE_12__.MetricEditorMode.Builder && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SQLBuilderEditor_SQLBuilderEditor__WEBPACK_IMPORTED_MODULE_16__.SQLBuilderEditor, { query, onChange: props.onChange, datasource }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Space, { v: 0.5 }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorRow, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.EditorField,
        {
          label: "ID",
          width: 26,
          optional: true,
          tooltip: "ID can be used to reference other queries in math expressions. The ID can include numbers, letters, and underscore, and must start with a lowercase letter.",
          invalid: !!query.id && !/^$|^[a-z][a-zA-Z0-9_]*$/.test(query.id),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
            {
              id: `${query.refId}-cloudwatch-metric-query-editor-id`,
              onChange: (event) => onChange({ ...migratedQuery, id: event.target.value }),
              type: "text",
              value: query.id
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.EditorField, { label: "Period", width: 26, tooltip: "Minimum interval between points in seconds.", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
        {
          id: `${query.refId}-cloudwatch-metric-query-editor-period`,
          value: query.period || "",
          placeholder: "auto",
          onChange: (event) => onChange({ ...migratedQuery, period: event.target.value })
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.EditorField,
        {
          label: "Label",
          width: 26,
          optional: true,
          tooltip: "Change time series legend name using Dynamic labels. See documentation for details.",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _DynamicLabelsField__WEBPACK_IMPORTED_MODULE_14__.DynamicLabelsField,
            {
              width: 52,
              label: migratedQuery.label ?? "",
              onChange: (label) => props.onChange({ ...query, label })
            }
          )
        }
      )
    ] })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/SQLBuilderEditor/SQLBuilderEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SQLBuilderEditor: () => (/* binding */ SQLBuilderEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorField.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorRow.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorRows.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _language_cloudwatch_sql_SQLGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/SQLGenerator.ts");
/* harmony import */ var _SQLBuilderSelectRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/SQLBuilderEditor/SQLBuilderSelectRow.tsx");
/* harmony import */ var _SQLFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/SQLBuilderEditor/SQLFilter.tsx");
/* harmony import */ var _SQLGroupBy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/SQLBuilderEditor/SQLGroupBy.tsx");
/* harmony import */ var _SQLOrderByGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/SQLBuilderEditor/SQLOrderByGroup.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/SQLBuilderEditor/utils.ts");











const SQLBuilderEditor = ({ query, datasource, onChange }) => {
  const sql = query.sql ?? {};
  const onQueryChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (query2) => {
      const sqlGenerator = new _language_cloudwatch_sql_SQLGenerator__WEBPACK_IMPORTED_MODULE_6__["default"]();
      const sqlString = sqlGenerator.expressionToSqlQuery(query2.sql ?? {}, query2.accountId);
      const fullQuery = {
        ...query2,
        sqlExpression: sqlString
      };
      onChange(fullQuery);
    },
    [onChange]
  );
  const [sqlPreview, setSQLPreview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const sqlGenerator = new _language_cloudwatch_sql_SQLGenerator__WEBPACK_IMPORTED_MODULE_6__["default"]();
    const sqlString = sqlGenerator.expressionToSqlQuery(query.sql ?? {}, query.accountId);
    if (sqlPreview !== sqlString) {
      setSQLPreview(sqlString);
    }
  }, [query, sqlPreview, setSQLPreview]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.EditorRows, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SQLBuilderSelectRow__WEBPACK_IMPORTED_MODULE_7__["default"], { query, onQueryChange, datasource }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.EditorField, { label: "Filter", optional: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SQLFilter__WEBPACK_IMPORTED_MODULE_8__["default"], { query, onQueryChange, datasource }) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorRow, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.EditorField, { label: "Group by", optional: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SQLGroupBy__WEBPACK_IMPORTED_MODULE_9__["default"], { query, onQueryChange, datasource }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SQLOrderByGroup__WEBPACK_IMPORTED_MODULE_10__["default"], { query, onQueryChange, datasource }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.EditorField, { label: "Limit", optional: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
        {
          id: `${query.refId}-cloudwatch-sql-builder-editor-limit`,
          value: sql.limit,
          onChange: (e) => {
            const val = e.currentTarget.valueAsNumber;
            onQueryChange((0,_utils__WEBPACK_IMPORTED_MODULE_11__.setSql)(query, { limit: isNaN(val) ? void 0 : val }));
          },
          type: "number",
          min: 1
        }
      ) })
    ] }),
    sqlPreview && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorRow, { children: [
       true && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: JSON.stringify(query.sql ?? {}, null, 2) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: sqlPreview ?? "" })
    ] })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/SQLBuilderEditor/SQLBuilderSelectRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorFieldGroup.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorField.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorSwitch.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/hooks.ts");
/* harmony import */ var _language_cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/language.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/utils.ts");
/* harmony import */ var _shared_Account__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/shared/Account.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/SQLBuilderEditor/utils.ts");












const AGGREGATIONS = _language_cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_9__.STATISTICS.map(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption);
const SQLBuilderSelectRow = ({ datasource, query, onQueryChange }) => {
  const sql = query.sql ?? {};
  const aggregation = sql.select?.name;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!aggregation) {
      onQueryChange((0,_utils__WEBPACK_IMPORTED_MODULE_12__.setAggregation)(query, _language_cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_9__.STATISTICS[0]));
    }
  }, [aggregation, onQueryChange, query]);
  const metricName = (0,_utils__WEBPACK_IMPORTED_MODULE_12__.getMetricNameFromExpression)(sql.select);
  const namespace = (0,_utils__WEBPACK_IMPORTED_MODULE_12__.getNamespaceFromExpression)(sql.from);
  const schemaLabels = (0,_utils__WEBPACK_IMPORTED_MODULE_12__.getSchemaLabelKeys)(sql.from);
  const withSchemaEnabled = (0,_utils__WEBPACK_IMPORTED_MODULE_12__.isUsingWithSchema)(sql.from);
  const namespaceOptions = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__.useNamespaces)(datasource);
  const metricOptions = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__.useMetrics)(datasource, {
    region: query.region,
    namespace,
    ..._grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.config.featureToggles.cloudWatchCrossAccountQuerying && { accountId: query.accountId }
  });
  const existingFilters = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_12__.stringArrayToDimensions)(schemaLabels ?? []), [schemaLabels]);
  const unusedDimensionKeys = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__.useDimensionKeys)(datasource, {
    region: query.region,
    namespace,
    metricName,
    dimensionFilters: existingFilters,
    ..._grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.config.featureToggles.cloudWatchCrossAccountQuerying && { accountId: query.accountId }
  });
  const dimensionKeys = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => schemaLabels?.length ? [...unusedDimensionKeys, ...schemaLabels.map(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)] : unusedDimensionKeys,
    [unusedDimensionKeys, schemaLabels]
  );
  const onNamespaceChange = async (query2) => {
    const validatedQuery = await validateMetricName(query2);
    onQueryChange(validatedQuery);
  };
  const validateMetricName = async (query2) => {
    let { region, sql: sql2, namespace: namespace2 } = query2;
    await datasource.resources.getMetrics({ namespace: namespace2, region }).then((result) => {
      if (!result.some((metric) => metric.value === metricName)) {
        sql2 = (0,_utils__WEBPACK_IMPORTED_MODULE_12__.removeMetricName)(query2).sql;
      }
    });
    return { ...query2, sql: sql2 };
  };
  const accountState = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__.useAccountOptions)(datasource.resources, query.region);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorFieldGroup, { children: [
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.config.featureToggles.cloudWatchCrossAccountQuerying && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _shared_Account__WEBPACK_IMPORTED_MODULE_11__.Account,
        {
          accountId: query.accountId,
          accountOptions: accountState.value || [],
          onChange: (accountId) => {
            onQueryChange({
              ...query,
              accountId
            });
          }
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.EditorField, { label: "Namespace", width: 16, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Select,
        {
          "aria-label": "Namespace",
          value: namespace ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)(namespace) : null,
          inputId: `${query.refId}-cloudwatch-sql-namespace`,
          options: namespaceOptions,
          allowCustomValue: true,
          onChange: ({ value }) => value && onNamespaceChange((0,_utils__WEBPACK_IMPORTED_MODULE_12__.setNamespace)(query, value))
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.EditorField, { label: "With schema", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.EditorSwitch,
        {
          id: `${query.refId}-cloudwatch-sql-withSchema`,
          value: withSchemaEnabled,
          onChange: (ev) => ev.target instanceof HTMLInputElement && onQueryChange((0,_utils__WEBPACK_IMPORTED_MODULE_12__.setWithSchema)(query, ev.target.checked))
        }
      ) }),
      withSchemaEnabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.EditorField, { label: "Schema labels", disabled: !namespace, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Select,
        {
          id: `${query.refId}-cloudwatch-sql-schema-label-keys`,
          width: "auto",
          isMulti: true,
          value: schemaLabels ? schemaLabels.map(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption) : null,
          options: dimensionKeys,
          allowCustomValue: true,
          onChange: (item) => item && onQueryChange((0,_utils__WEBPACK_IMPORTED_MODULE_12__.setSchemaLabels)(query, item))
        }
      ) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorFieldGroup, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.EditorField, { label: "Metric name", width: 16, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Select,
        {
          "aria-label": "Metric name",
          value: metricName ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)(metricName) : null,
          options: metricOptions,
          allowCustomValue: true,
          onChange: ({ value }) => value && onQueryChange((0,_utils__WEBPACK_IMPORTED_MODULE_12__.setMetricName)(query, value))
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.EditorField, { label: "Aggregation", width: 16, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Select,
        {
          "aria-label": "Aggregation",
          value: aggregation ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)(aggregation) : null,
          options: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_10__.appendTemplateVariables)(datasource, AGGREGATIONS),
          onChange: ({ value }) => value && onQueryChange((0,_utils__WEBPACK_IMPORTED_MODULE_12__.setAggregation)(query, value))
        }
      ) })
    ] })
  ] });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SQLBuilderSelectRow);


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/SQLBuilderEditor/SQLFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/AccessoryButton.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorList.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/InputGroup.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/expressions.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/hooks.ts");
/* harmony import */ var _language_cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/language.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/SQLBuilderEditor/utils.ts");














const OPERATORS = _language_cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_14__.COMPARISON_OPERATORS.map(_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toOption);
const SQLFilter = ({ query, onQueryChange, datasource }) => {
  const filtersFromQuery = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_16__.getFlattenedFilters)(query.sql ?? {}), [query.sql]);
  const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(filtersFromQuery);
  const onChange = (newItems) => {
    const cleaned = newItems.map(
      (v) => ({
        type: _expressions__WEBPACK_IMPORTED_MODULE_12__.QueryEditorExpressionType.Operator,
        property: v.property ?? { type: _expressions__WEBPACK_IMPORTED_MODULE_12__.QueryEditorPropertyType.String },
        operator: v.operator ?? {
          name: _language_cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_14__.EQUALS
        }
      })
    );
    setFilters(cleaned);
    const validExpressions = [];
    for (const operatorExpression of cleaned) {
      const validated = (0,_utils__WEBPACK_IMPORTED_MODULE_16__.sanitizeOperator)(operatorExpression);
      if (validated) {
        validExpressions.push(validated);
      }
    }
    const where = validExpressions.length ? {
      type: _expressions__WEBPACK_IMPORTED_MODULE_12__.QueryEditorExpressionType.And,
      expressions: validExpressions
    } : void 0;
    onQueryChange((0,_utils__WEBPACK_IMPORTED_MODULE_16__.setSql)(query, { where }));
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_6__.EditorList, { items: filters, onChange, renderItem: makeRenderFilter(datasource, query) });
};
function makeRenderFilter(datasource, query) {
  function renderFilter(item, onChange, onDelete) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FilterItem, { datasource, query, filter: item, onChange, onDelete });
  }
  return renderFilter;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SQLFilter);
const FilterItem = (props) => {
  const { datasource, query, filter, onChange, onDelete } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  const sql = query.sql ?? {};
  const namespace = (0,_utils__WEBPACK_IMPORTED_MODULE_16__.getNamespaceFromExpression)(sql.from);
  const metricName = (0,_utils__WEBPACK_IMPORTED_MODULE_16__.getMetricNameFromExpression)(sql.select);
  const dimensionKeys = (0,_hooks__WEBPACK_IMPORTED_MODULE_13__.useDimensionKeys)(datasource, {
    region: query.region,
    namespace,
    metricName,
    ..._grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.config.featureToggles.cloudWatchCrossAccountQuerying && { accountId: query.accountId }
  });
  const loadDimensionValues = async () => {
    if (!filter.property?.name || !namespace) {
      return [];
    }
    return datasource.resources.getDimensionValues({
      region: query.region,
      namespace,
      metricName,
      dimensionKey: filter.property.name,
      ..._grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.config.featureToggles.cloudWatchCrossAccountQuerying && { accountId: query.accountId }
    }).then((result) => {
      return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_15__.appendTemplateVariables)(datasource, result);
    });
  };
  const [state, loadOptions] = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(loadDimensionValues, [
    query.region,
    namespace,
    metricName,
    filter.property?.name
  ]);
  const propertyNameError = (0,_hooks__WEBPACK_IMPORTED_MODULE_13__.useEnsureVariableHasSingleSelection)(datasource, filter.property?.name);
  const operatorValueError = (0,_hooks__WEBPACK_IMPORTED_MODULE_13__.useEnsureVariableHasSingleSelection)(
    datasource,
    typeof filter.operator?.value === "string" ? filter.operator?.value : void 0
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_7__.InputGroup, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Select,
        {
          width: "auto",
          value: filter.property?.name ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toOption)(filter.property?.name) : null,
          options: dimensionKeys,
          allowCustomValue: true,
          onChange: ({ value }) => value && onChange((0,_utils__WEBPACK_IMPORTED_MODULE_16__.setOperatorExpressionProperty)(filter, value))
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Select,
        {
          width: "auto",
          value: filter.operator?.name && (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toOption)(filter.operator.name),
          options: OPERATORS,
          onChange: ({ value }) => value && onChange((0,_utils__WEBPACK_IMPORTED_MODULE_16__.setOperatorExpressionName)(filter, value))
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Select,
        {
          width: "auto",
          isLoading: state.loading,
          value: filter.operator?.value && typeof filter.operator?.value === "string" ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toOption)(filter.operator?.value) : null,
          options: state.value,
          allowCustomValue: true,
          onOpenMenu: loadOptions,
          onChange: ({ value }) => value && onChange((0,_utils__WEBPACK_IMPORTED_MODULE_16__.setOperatorExpressionValue)(filter, value))
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.AccessoryButton, { "aria-label": "remove", icon: "times", variant: "secondary", onClick: onDelete })
    ] }),
    propertyNameError && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Alert, { className: styles.alert, title: propertyNameError, severity: "error", topSpacing: 1 }),
    operatorValueError && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Alert, { className: styles.alert, title: operatorValueError, severity: "error", topSpacing: 1 })
  ] });
};
const getStyles = () => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({ display: "inline-block" }),
  alert: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({ minWidth: "100%", width: "min-content" })
});


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/SQLBuilderEditor/SQLGroupBy.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/AccessoryButton.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorList.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/InputGroup.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/expressions.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/hooks.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/SQLBuilderEditor/utils.ts");










const SQLGroupBy = ({ query, datasource, onQueryChange }) => {
  const sql = query.sql ?? {};
  const groupBysFromQuery = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_10__.getFlattenedGroupBys)(query.sql ?? {}), [query.sql]);
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(groupBysFromQuery);
  const isMonitoringAccount = (0,_hooks__WEBPACK_IMPORTED_MODULE_9__.useIsMonitoringAccount)(datasource.resources, query.region);
  const namespace = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.getNamespaceFromExpression)(sql.from);
  const metricName = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.getMetricNameFromExpression)(sql.select);
  const baseOptions = (0,_hooks__WEBPACK_IMPORTED_MODULE_9__.useDimensionKeys)(datasource, { region: query.region, namespace, metricName });
  const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    // Exclude options we've already selected
    () => {
      const isCrossAccountEnabled = _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.config.featureToggles.cloudWatchCrossAccountQuerying;
      const baseOptionsWithAccountId = isCrossAccountEnabled && isMonitoringAccount ? [{ label: "Account ID", value: "AWS.AccountId" }, ...baseOptions] : baseOptions;
      return baseOptionsWithAccountId.filter(
        (option) => !groupBysFromQuery.some((v) => v.property.name === option.value)
      );
    },
    [baseOptions, groupBysFromQuery, isMonitoringAccount]
  );
  const onChange = (newItems) => {
    const cleaned = newItems.map(
      (v) => ({
        type: _expressions__WEBPACK_IMPORTED_MODULE_8__.QueryEditorExpressionType.GroupBy,
        property: {
          type: _expressions__WEBPACK_IMPORTED_MODULE_8__.QueryEditorPropertyType.String,
          name: v.property?.name
        }
      })
    );
    setItems(cleaned);
    const completeExpressions = cleaned.filter((v) => v.property?.name);
    const groupBy = completeExpressions.length ? {
      type: _expressions__WEBPACK_IMPORTED_MODULE_8__.QueryEditorExpressionType.And,
      expressions: completeExpressions
    } : void 0;
    onQueryChange((0,_utils__WEBPACK_IMPORTED_MODULE_10__.setSql)(query, { groupBy }));
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.EditorList, { items, onChange, renderItem: makeRenderItem(options) });
};
function makeRenderItem(options) {
  function renderItem(item, onChange, onDelete) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GroupByItem, { options, item, onChange, onDelete });
  }
  return renderItem;
}
const GroupByItem = (props) => {
  const { options, item, onChange, onDelete } = props;
  const fieldName = item.property?.name;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.InputGroup, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Select,
      {
        "aria-label": `Group by ${fieldName ?? "filter key"}`,
        width: "auto",
        value: fieldName ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)(fieldName) : null,
        options,
        allowCustomValue: true,
        onChange: ({ value }) => value && onChange((0,_utils__WEBPACK_IMPORTED_MODULE_10__.setGroupByField)(value))
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.AccessoryButton, { "aria-label": "remove", icon: "times", variant: "secondary", onClick: onDelete })
  ] });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SQLGroupBy);


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/SQLBuilderEditor/SQLOrderByGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/AccessoryButton.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorFieldGroup.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorField.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/InputGroup.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _language_cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/language.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/SQLBuilderEditor/utils.ts");








const orderByDirections = [
  { label: _language_cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_7__.ASC, value: _language_cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_7__.ASC },
  { label: _language_cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_7__.DESC, value: _language_cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_7__.DESC }
];
const SQLOrderByGroup = ({ query, onQueryChange, datasource }) => {
  const sql = query.sql ?? {};
  const orderBy = sql.orderBy?.name;
  const orderByDirection = sql.orderByDirection;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorFieldGroup, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.EditorField, { label: "Order by", optional: true, width: 16, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.InputGroup, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Select,
        {
          "aria-label": "Order by",
          onChange: ({ value }) => value && onQueryChange((0,_utils__WEBPACK_IMPORTED_MODULE_9__.setOrderBy)(query, value)),
          options: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__.appendTemplateVariables)(datasource, _language_cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_7__.STATISTICS.map(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)),
          value: orderBy ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)(orderBy) : null
        }
      ),
      orderBy && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.AccessoryButton,
        {
          "aria-label": "remove",
          icon: "times",
          variant: "secondary",
          onClick: () => onQueryChange((0,_utils__WEBPACK_IMPORTED_MODULE_9__.setSql)(query, { orderBy: void 0 }))
        }
      )
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.EditorField, { label: "Direction", disabled: !orderBy, width: 16, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Select,
      {
        "aria-label": "Direction",
        inputId: "cloudwatch-sql-order-by-direction",
        value: orderByDirection ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)(orderByDirection) : orderByDirections[0],
        options: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__.appendTemplateVariables)(datasource, orderByDirections),
        onChange: (item) => item && onQueryChange((0,_utils__WEBPACK_IMPORTED_MODULE_9__.setSql)(query, { orderByDirection: item.value }))
      }
    ) })
  ] });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SQLOrderByGroup);


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/SQLBuilderEditor/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFlattenedFilters: () => (/* binding */ getFlattenedFilters),
/* harmony export */   getFlattenedGroupBys: () => (/* binding */ getFlattenedGroupBys),
/* harmony export */   getMetricNameFromExpression: () => (/* binding */ getMetricNameFromExpression),
/* harmony export */   getNamespaceFromExpression: () => (/* binding */ getNamespaceFromExpression),
/* harmony export */   getSchemaLabelKeys: () => (/* binding */ getSchemaLabelKeys),
/* harmony export */   isUsingWithSchema: () => (/* binding */ isUsingWithSchema),
/* harmony export */   removeMetricName: () => (/* binding */ removeMetricName),
/* harmony export */   sanitizeOperator: () => (/* binding */ sanitizeOperator),
/* harmony export */   setAggregation: () => (/* binding */ setAggregation),
/* harmony export */   setGroupByField: () => (/* binding */ setGroupByField),
/* harmony export */   setMetricName: () => (/* binding */ setMetricName),
/* harmony export */   setNamespace: () => (/* binding */ setNamespace),
/* harmony export */   setOperatorExpressionName: () => (/* binding */ setOperatorExpressionName),
/* harmony export */   setOperatorExpressionProperty: () => (/* binding */ setOperatorExpressionProperty),
/* harmony export */   setOperatorExpressionValue: () => (/* binding */ setOperatorExpressionValue),
/* harmony export */   setOrderBy: () => (/* binding */ setOrderBy),
/* harmony export */   setSchemaLabels: () => (/* binding */ setSchemaLabels),
/* harmony export */   setSql: () => (/* binding */ setSql),
/* harmony export */   setWithSchema: () => (/* binding */ setWithSchema),
/* harmony export */   stringArrayToDimensions: () => (/* binding */ stringArrayToDimensions)
/* harmony export */ });
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/expressions.ts");
/* harmony import */ var _language_cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/language.ts");



function getMetricNameFromExpression(selectExpression) {
  return selectExpression?.parameters?.[0].name;
}
function getNamespaceFromExpression(fromExpression) {
  if (fromExpression?.type === _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.Property) {
    return fromExpression.property.name;
  }
  if (fromExpression?.type === _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.Function) {
    return fromExpression.parameters?.[0].name;
  }
  return void 0;
}
function getSchemaLabelKeys(fromExpression) {
  if (fromExpression?.type === _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.Function && fromExpression?.parameters?.length) {
    if (fromExpression?.parameters?.length <= 1) {
      return [];
    }
    const paramExpressions = fromExpression?.parameters.slice(1);
    return paramExpressions.reduce((acc, curr) => curr.name ? [...acc, curr.name] : acc, []);
  }
  return void 0;
}
function isUsingWithSchema(fromExpression) {
  return fromExpression?.type === _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.Function && fromExpression.name === _language_cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_1__.SCHEMA;
}
function sanitizeOperator(expression) {
  const key = expression.property?.name;
  const value = expression.operator?.value;
  const operator = expression.operator?.name;
  if (key && value && operator) {
    return {
      type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.Operator,
      property: {
        type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorPropertyType.String,
        name: key
      },
      operator: {
        value,
        name: operator
      }
    };
  }
  return void 0;
}
function flattenOperatorExpressions(expressions) {
  return expressions.flatMap((expression) => {
    if (expression.type === _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.Operator) {
      return expression;
    }
    if (expression.type === _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.And || expression.type === _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.Or) {
      return flattenOperatorExpressions(expression.expressions);
    }
    return [];
  });
}
function getFlattenedFilters(sql) {
  const where = sql.where;
  return flattenOperatorExpressions(where?.expressions ?? []);
}
function flattenGroupByExpressions(expressions) {
  return expressions.flatMap((expression) => {
    if (expression.type === _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.GroupBy) {
      return expression;
    }
    return [];
  });
}
function getFlattenedGroupBys(sql) {
  const groupBy = sql.groupBy;
  return flattenGroupByExpressions(groupBy?.expressions ?? []);
}
function stringArrayToDimensions(arr) {
  return arr.reduce((acc, curr) => {
    if (curr) {
      return { ...acc, [curr]: null };
    }
    return acc;
  }, {});
}
function setSql(query, sql) {
  return {
    ...query,
    sql: {
      ...query.sql ?? {},
      ...sql
    }
  };
}
function setNamespace(query, namespace) {
  const sql = query.sql ?? {};
  query.namespace = namespace ? namespace : "";
  if (namespace === void 0) {
    return setSql(query, {
      from: void 0
    });
  }
  if (!sql.from || sql.from.type === _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.Property) {
    return setSql(query, {
      from: {
        type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.Property,
        property: {
          type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorPropertyType.String,
          name: namespace
        }
      }
    });
  }
  if (sql.from.type === _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.Function) {
    const namespaceParam = {
      type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.FunctionParameter,
      name: namespace
    };
    const labelKeys = (sql.from.parameters ?? []).slice(1);
    return setSql(query, {
      from: {
        type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.Function,
        name: _language_cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_1__.SCHEMA,
        parameters: [namespaceParam, ...labelKeys]
      }
    });
  }
  return query;
}
function setSchemaLabels(query, schemaLabels) {
  const sql = query.sql ?? {};
  schemaLabels = Array.isArray(schemaLabels) ? schemaLabels.map((l) => l.value) : [schemaLabels.value];
  if (sql.from?.type === _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.Function && sql.from.parameters?.length) {
    const parameters = (schemaLabels ?? []).map((label) => ({
      type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.FunctionParameter,
      name: label
    }));
    const namespaceParam = (sql.from.parameters ?? [])[0];
    return setSql(query, {
      from: {
        type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.Function,
        name: _language_cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_1__.SCHEMA,
        parameters: [namespaceParam, ...parameters]
      }
    });
  }
  return query;
}
function setMetricName(query, metricName) {
  const param = {
    type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.FunctionParameter,
    name: metricName
  };
  return setSql(
    { ...query, metricName },
    {
      select: {
        type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.Function,
        ...query.sql?.select ?? {},
        parameters: [param]
      }
    }
  );
}
function removeMetricName(query) {
  const queryWithNoParams = { ...query };
  delete queryWithNoParams.sql?.select?.parameters;
  return queryWithNoParams;
}
function setAggregation(query, aggregation) {
  return setSql(query, {
    select: {
      type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.Function,
      ...query.sql?.select ?? {},
      name: aggregation
    }
  });
}
function setOrderBy(query, aggregation) {
  return setSql(query, {
    orderBy: {
      type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.Function,
      name: aggregation
    }
  });
}
function setWithSchema(query, withSchema) {
  const namespace = getNamespaceFromExpression((query.sql ?? {}).from);
  if (withSchema) {
    const namespaceParam = {
      type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.FunctionParameter,
      name: namespace
    };
    return setSql(query, {
      from: {
        type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.Function,
        name: _language_cloudwatch_sql_language__WEBPACK_IMPORTED_MODULE_1__.SCHEMA,
        parameters: [namespaceParam]
      }
    });
  }
  return setSql(query, {
    from: {
      type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.Property,
      property: {
        type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorPropertyType.String,
        name: namespace
      }
    }
  });
}
function setOperatorExpressionProperty(expression, property) {
  return {
    type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.Operator,
    property: {
      type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorPropertyType.String,
      name: property
    },
    operator: expression.operator ?? {}
  };
}
function setOperatorExpressionName(expression, name) {
  return {
    type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.Operator,
    property: expression.property ?? {
      type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorPropertyType.String
    },
    operator: {
      ...expression.operator,
      name
    }
  };
}
function setOperatorExpressionValue(expression, value) {
  return {
    type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.Operator,
    property: expression.property ?? {
      type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorPropertyType.String
    },
    operator: {
      ...expression.operator,
      value
    }
  };
}
function setGroupByField(field) {
  return {
    type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType.GroupBy,
    property: {
      type: _expressions__WEBPACK_IMPORTED_MODULE_0__.QueryEditorPropertyType.String,
      name: field
    }
  };
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/SQLCodeEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SQLCodeEditor: () => (/* binding */ SQLCodeEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _language_cloudwatch_sql_definition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/definition.ts");
/* harmony import */ var _language_monarch_commands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/commands.ts");
/* harmony import */ var _language_monarch_register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/register.ts");







const SQLCodeEditor = ({ region, sql, onChange, datasource }) => {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    datasource.sqlCompletionItemProvider.setRegion(region);
  }, [region, datasource]);
  const onEditorMount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (editor, monaco) => {
      editor.onDidFocusEditorText(() => editor.trigger(_language_monarch_commands__WEBPACK_IMPORTED_MODULE_4__.TRIGGER_SUGGEST.id, _language_monarch_commands__WEBPACK_IMPORTED_MODULE_4__.TRIGGER_SUGGEST.id, {}));
      editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Enter, () => {
        const text = editor.getValue();
        onChange(text);
      });
    },
    [onChange]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CodeEditor,
    {
      height: "150px",
      language: _language_cloudwatch_sql_definition__WEBPACK_IMPORTED_MODULE_3__["default"].id,
      value: sql,
      onBlur: (value) => {
        if (value !== sql) {
          onChange(value);
        }
      },
      showMiniMap: false,
      showLineNumbers: true,
      onBeforeEditorMount: (monaco) => (0,_language_monarch_register__WEBPACK_IMPORTED_MODULE_5__.registerLanguage)(monaco, _language_cloudwatch_sql_definition__WEBPACK_IMPORTED_MODULE_3__["default"], datasource.sqlCompletionItemProvider),
      onEditorDidMount: onEditorMount
    }
  );
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/QueryEditor/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryEditor: () => (/* binding */ QueryEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/guards.ts");
/* harmony import */ var _migrations_useMigratedQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/migrations/useMigratedQuery.ts");
/* harmony import */ var _LogsQueryEditor_LogsQueryEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/LogsQueryEditor/LogsQueryEditor.tsx");
/* harmony import */ var _MetricsQueryEditor_MetricsQueryEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/MetricsQueryEditor/MetricsQueryEditor.tsx");
/* harmony import */ var _QueryHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/QueryHeader.tsx");








const QueryEditor = (props) => {
  const { query, onChange, data } = props;
  const migratedQuery = (0,_migrations_useMigratedQuery__WEBPACK_IMPORTED_MODULE_3__["default"])(query, props.onChange);
  const [dataIsStale, setDataIsStale] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [extraHeaderElementLeft, setExtraHeaderElementLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [extraHeaderElementRight, setExtraHeaderElementRight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setDataIsStale(false);
  }, [data]);
  const onChangeInternal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (query2) => {
      setDataIsStale(true);
      onChange(query2);
    },
    [onChange]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _QueryHeader__WEBPACK_IMPORTED_MODULE_6__["default"],
      {
        ...props,
        extraHeaderElementLeft,
        extraHeaderElementRight,
        dataIsStale
      }
    ),
    (0,_guards__WEBPACK_IMPORTED_MODULE_2__.isCloudWatchMetricsQuery)(migratedQuery) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _MetricsQueryEditor_MetricsQueryEditor__WEBPACK_IMPORTED_MODULE_5__.MetricsQueryEditor,
      {
        ...props,
        query: migratedQuery,
        onRunQuery: () => {
        },
        onChange: onChangeInternal,
        extraHeaderElementLeft: setExtraHeaderElementLeft,
        extraHeaderElementRight: setExtraHeaderElementRight
      }
    ),
    (0,_guards__WEBPACK_IMPORTED_MODULE_2__.isCloudWatchLogsQuery)(migratedQuery) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _LogsQueryEditor_LogsQueryEditor__WEBPACK_IMPORTED_MODULE_4__["default"],
      {
        ...props,
        query: migratedQuery,
        onChange: onChangeInternal,
        extraHeaderElementLeft: setExtraHeaderElementLeft
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/QueryEditor/QueryHeader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/app.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorHeader.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/FlexItem.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/InlineSelect.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/guards.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/hooks.ts");








const apiModes = [
  { label: "CloudWatch Metrics", value: "Metrics" },
  { label: "CloudWatch Logs", value: "Logs" }
];
const QueryHeader = ({
  query,
  onChange,
  datasource,
  extraHeaderElementLeft,
  extraHeaderElementRight,
  dataIsStale,
  data,
  onRunQuery
}) => {
  const { queryMode, region } = query;
  const isMonitoringAccount = (0,_hooks__WEBPACK_IMPORTED_MODULE_10__.useIsMonitoringAccount)(datasource.resources, query.region);
  const [regions, regionIsLoading] = (0,_hooks__WEBPACK_IMPORTED_MODULE_10__.useRegions)(datasource);
  const emptyLogsExpression = (0,_guards__WEBPACK_IMPORTED_MODULE_9__.isCloudWatchLogsQuery)(query) ? !query.expression : false;
  const onQueryModeChange = ({ value }) => {
    if (value && value !== queryMode) {
      onChange({
        ...datasource.getDefaultQuery(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.CoreApp.Unknown),
        ...query,
        queryMode: value,
        expression: ""
      });
    }
  };
  const onRegionChange = async (region2) => {
    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.config.featureToggles.cloudWatchCrossAccountQuerying && (0,_guards__WEBPACK_IMPORTED_MODULE_9__.isCloudWatchMetricsQuery)(query)) {
      const isMonitoringAccount2 = await datasource.resources.isMonitoringAccount(region2);
      onChange({ ...query, logGroups: [], region: region2, accountId: isMonitoringAccount2 ? query.accountId : void 0 });
    } else {
      onChange({ ...query, logGroups: [], region: region2 });
    }
  };
  const shouldDisplayMonitoringBadge = _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.config.featureToggles.cloudWatchCrossAccountQuerying && isMonitoringAccount;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorHeader, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.InlineSelect,
      {
        label: "Region",
        value: region,
        placeholder: "Select region",
        allowCustomValue: true,
        onChange: ({ value: region2 }) => region2 && onRegionChange(region2),
        options: regions,
        isLoading: regionIsLoading
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.InlineSelect,
      {
        "aria-label": "Query mode",
        value: queryMode,
        options: apiModes,
        onChange: onQueryModeChange,
        inputId: `cloudwatch-query-mode-${query.refId}`,
        id: `cloudwatch-query-mode-${query.refId}`
      }
    ),
    extraHeaderElementLeft,
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.FlexItem, { grow: 1 }),
    shouldDisplayMonitoringBadge && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Badge,
      {
        text: "Monitoring account",
        color: "blue",
        tooltip: "AWS monitoring accounts view data from source accounts so you can centralize monitoring and troubleshoot activities"
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
      {
        variant: dataIsStale ? "primary" : "secondary",
        size: "sm",
        onClick: onRunQuery,
        icon: data?.state === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Loading ? "spinner" : void 0,
        disabled: data?.state === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Loading || emptyLogsExpression,
        children: "Run queries"
      }
    ),
    extraHeaderElementRight
  ] }) });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QueryHeader);


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/MultiFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiFilter: () => (/* binding */ MultiFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorList.js");
/* harmony import */ var _MultiFilterItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/MultiFilterItem.tsx");






const multiFiltersToFilterConditions = (filters) => Object.keys(filters).map((key) => ({ key, value: filters[key], operator: "=" }));
const filterConditionsToMultiFilters = (filters) => {
  const res = {};
  filters.forEach(({ key, value }) => {
    if (key && value) {
      res[key] = value;
    }
  });
  return res;
};
const MultiFilter = ({ filters, onChange, keyPlaceholder, datasource }) => {
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => setItems(filters ? multiFiltersToFilterConditions(filters) : []), [filters]);
  const onFiltersChange = (newItems) => {
    setItems(newItems);
    const newMultifilters = filterConditionsToMultiFilters(newItems);
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(newMultifilters, filters)) {
      onChange(newMultifilters);
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorList, { items, onChange: onFiltersChange, renderItem: makeRenderFilter(datasource, keyPlaceholder) });
};
function makeRenderFilter(datasource, keyPlaceholder) {
  function renderFilter(item, onChange, onDelete) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _MultiFilterItem__WEBPACK_IMPORTED_MODULE_4__.MultiFilterItem,
      {
        filter: item,
        onChange: (item2) => onChange(item2),
        onDelete,
        keyPlaceholder,
        datasource
      }
    );
  }
  return renderFilter;
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/MultiFilterItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiFilterItem: () => (/* binding */ MultiFilterItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/AccessoryButton.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/InputGroup.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/hooks.ts");







const MultiFilterItem = ({ filter, onChange, onDelete, keyPlaceholder, datasource }) => {
  const [localKey, setLocalKey] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(filter.key || "");
  const [localValue, setLocalValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(filter.value?.join(", ") || "");
  const error = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__.useEnsureVariableHasSingleSelection)(datasource, filter.key);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getOperatorStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { "data-testid": "cloudwatch-multifilter-item", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.InputGroup, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input,
        {
          "data-testid": "cloudwatch-multifilter-item-key",
          "aria-label": "Filter key",
          value: localKey,
          placeholder: keyPlaceholder ?? "key",
          onChange: (e) => setLocalKey(e.currentTarget.value),
          onBlur: () => {
            if (localKey && localKey !== filter.key) {
              onChange({ ...filter, key: localKey });
            }
          }
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.root), children: "=" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input,
        {
          "data-testid": "cloudwatch-multifilter-item-value",
          "aria-label": "Filter value",
          value: localValue,
          placeholder: "value1, value2,...",
          onChange: (e) => setLocalValue(e.currentTarget.value),
          onBlur: () => {
            const newValues = localValue.split(",").map((v) => v.trim());
            if (localValue && newValues !== filter.value) {
              onChange({ ...filter, value: newValues });
            }
            setLocalValue(newValues.join(", "));
          }
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.AccessoryButton, { "aria-label": "remove", icon: "times", variant: "secondary", onClick: onDelete, type: "button" })
    ] }),
    error && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Alert, { title: error, severity: "error", topSpacing: 1 })
  ] });
};
const getOperatorStyles = (theme) => ({
  root: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(0, 1),
    alignSelf: "center"
  })
});


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/VariableQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariableQueryEditor: () => (/* binding */ VariableQueryEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorField.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/hooks.ts");
/* harmony import */ var _migrations_variableQueryMigrations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/migrations/variableQueryMigrations.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/types.ts");
/* harmony import */ var _shared_Account__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/shared/Account.tsx");
/* harmony import */ var _shared_Dimensions_Dimensions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/shared/Dimensions/Dimensions.tsx");
/* harmony import */ var _MultiFilter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/MultiFilter.tsx");
/* harmony import */ var _VariableQueryField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/VariableQueryField.tsx");
/* harmony import */ var _VariableTextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/VariableTextField.tsx");















const queryTypes = [
  { value: _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.Regions, label: "Regions" },
  { value: _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.Namespaces, label: "Namespaces" },
  { value: _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.Metrics, label: "Metrics" },
  { value: _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.DimensionKeys, label: "Dimension Keys" },
  { value: _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.DimensionValues, label: "Dimension Values" },
  { value: _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.EBSVolumeIDs, label: "EBS Volume IDs" },
  { value: _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.EC2InstanceAttributes, label: "EC2 Instance Attributes" },
  { value: _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.ResourceArns, label: "Resource ARNs" },
  { value: _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.Statistics, label: "Statistics" },
  { value: _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.LogGroups, label: "Log Groups" },
  ..._grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.featureToggles.cloudWatchCrossAccountQuerying ? [{ value: _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.Accounts, label: "Accounts" }] : []
];
const attributeNames = [
  "AmiLaunchIndex",
  "Architecture",
  "ClientToken",
  "EbsOptimized",
  "EnaSupport",
  "Hypervisor",
  "IamInstanceProfile",
  "ImageId",
  "InstanceId",
  "InstanceLifecycle",
  "InstanceType",
  "KernelId",
  "KeyName",
  "LaunchTime",
  "Platform",
  "PrivateDnsName",
  "PrivateIpAddress",
  "PublicDnsName",
  "PublicIpAddress",
  "RamdiskId",
  "RootDeviceName",
  "RootDeviceType",
  "SourceDestCheck",
  "SpotInstanceRequestId",
  "SriovNetSupport",
  "SubnetId",
  "VirtualizationType",
  "VpcId"
];
const VariableQueryEditor = ({ query, datasource, onChange }) => {
  const parsedQuery = (0,_migrations_variableQueryMigrations__WEBPACK_IMPORTED_MODULE_8__.migrateVariableQuery)(query);
  const { region, namespace, metricName, dimensionKey } = parsedQuery;
  const [regions, regionIsLoading] = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useRegions)(datasource);
  const namespaces = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useNamespaces)(datasource);
  const metrics = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useMetrics)(datasource, { region, namespace });
  const dimensionKeys = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useDimensionKeys)(datasource, { region, namespace, metricName });
  const accountState = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useAccountOptions)(datasource.resources, query.region);
  const dimensionKeyError = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useEnsureVariableHasSingleSelection)(datasource, dimensionKey);
  const onRegionChange = async (region2) => {
    const validatedQuery = await sanitizeQuery({
      ...parsedQuery,
      region: region2,
      accountId: void 0
    });
    onQueryChange(validatedQuery);
  };
  const onNamespaceChange = async (namespace2) => {
    const validatedQuery = await sanitizeQuery({
      ...parsedQuery,
      namespace: namespace2
    });
    onQueryChange(validatedQuery);
  };
  const onQueryChange = (newQuery) => {
    onChange({
      ...newQuery,
      refId: "CloudWatchVariableQueryEditor-VariableQuery"
    });
  };
  const sanitizeQuery = async (query2) => {
    let { metricName: metricName2, dimensionKey: dimensionKey2, dimensionFilters, namespace: namespace2, region: region2 } = query2;
    if (metricName2) {
      await datasource.resources.getMetrics({ namespace: namespace2, region: region2 }).then((result) => {
        if (!result.find((metric) => metric.value === metricName2)) {
          metricName2 = "";
        }
      });
    }
    if (dimensionKey2) {
      await datasource.resources.getDimensionKeys({ namespace: namespace2, region: region2 }).then((result) => {
        if (!result.find((key) => key.value === dimensionKey2)) {
          dimensionKey2 = "";
          dimensionFilters = {};
        }
      });
    }
    return { ...query2, metricName: metricName2, dimensionKey: dimensionKey2, dimensionFilters };
  };
  const allAttributeNames = attributeNames.includes(parsedQuery.attributeName) ? attributeNames : [...attributeNames, parsedQuery.attributeName];
  const attributeOptions = allAttributeNames.map(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption);
  const hasRegionField = [
    _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.Metrics,
    _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.DimensionKeys,
    _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.DimensionValues,
    _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.EBSVolumeIDs,
    _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.EC2InstanceAttributes,
    _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.ResourceArns,
    _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.LogGroups,
    _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.Accounts
  ].includes(parsedQuery.queryType);
  const hasAccountIDField = [
    _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.Metrics,
    _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.DimensionKeys,
    _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.DimensionValues,
    _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.LogGroups
  ].includes(parsedQuery.queryType);
  const hasNamespaceField = [
    _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.Metrics,
    _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.DimensionKeys,
    _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.DimensionValues
  ].includes(parsedQuery.queryType);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.formStyles, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _VariableQueryField__WEBPACK_IMPORTED_MODULE_13__.VariableQueryField,
      {
        value: parsedQuery.queryType,
        options: queryTypes,
        onChange: (value) => onQueryChange({ ...parsedQuery, queryType: value, accountId: void 0 }),
        label: "Query type",
        inputId: `variable-query-type-${query.refId}`
      }
    ),
    hasRegionField && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _VariableQueryField__WEBPACK_IMPORTED_MODULE_13__.VariableQueryField,
      {
        value: region,
        options: regions,
        onChange: (value) => onRegionChange(value),
        label: "Region",
        isLoading: regionIsLoading,
        inputId: `variable-query-region-${query.refId}`
      }
    ),
    hasAccountIDField && accountState.value && accountState.value?.length > 0 && _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.featureToggles.cloudWatchCrossAccountQuerying && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _VariableQueryField__WEBPACK_IMPORTED_MODULE_13__.VariableQueryField,
      {
        label: "Account",
        value: query.accountId ?? null,
        onChange: (accountId) => onQueryChange({ ...parsedQuery, accountId }),
        options: [_shared_Account__WEBPACK_IMPORTED_MODULE_10__.ALL_ACCOUNTS_OPTION, ...accountState?.value],
        allowCustomValue: false
      }
    ),
    hasNamespaceField && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _VariableQueryField__WEBPACK_IMPORTED_MODULE_13__.VariableQueryField,
      {
        value: namespace,
        options: namespaces,
        onChange: (value) => onNamespaceChange(value),
        label: "Namespace",
        inputId: `variable-query-namespace-${query.refId}`,
        allowCustomValue: true
      }
    ),
    parsedQuery.queryType === _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.DimensionValues && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _VariableQueryField__WEBPACK_IMPORTED_MODULE_13__.VariableQueryField,
        {
          value: metricName || null,
          options: metrics,
          onChange: (value) => onQueryChange({ ...parsedQuery, metricName: value }),
          label: "Metric",
          inputId: `variable-query-metric-${query.refId}`,
          allowCustomValue: true
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _VariableQueryField__WEBPACK_IMPORTED_MODULE_13__.VariableQueryField,
        {
          value: dimensionKey || null,
          options: dimensionKeys,
          onChange: (value) => onQueryChange({ ...parsedQuery, dimensionKey: value }),
          label: "Dimension key",
          inputId: `variable-query-dimension-key-${query.refId}`,
          allowCustomValue: true,
          error: dimensionKeyError
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorField,
        {
          label: "Dimensions",
          className: styles.dimensionsWidth,
          tooltip: "Dimensions to filter the returned values on",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _shared_Dimensions_Dimensions__WEBPACK_IMPORTED_MODULE_11__.Dimensions,
            {
              metricStat: { ...parsedQuery, dimensions: parsedQuery.dimensionFilters },
              onChange: (dimensions) => {
                onChange({ ...parsedQuery, dimensionFilters: dimensions });
              },
              disableExpressions: true,
              datasource
            }
          )
        }
      )
    ] }),
    parsedQuery.queryType === _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.EBSVolumeIDs && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _VariableTextField__WEBPACK_IMPORTED_MODULE_14__.VariableTextField,
      {
        value: query.instanceID,
        placeholder: "i-XXXXXXXXXXXXXXXXX",
        onBlur: (value) => onQueryChange({ ...parsedQuery, instanceID: value }),
        label: "Instance ID"
      }
    ),
    parsedQuery.queryType === _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.EC2InstanceAttributes && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _VariableQueryField__WEBPACK_IMPORTED_MODULE_13__.VariableQueryField,
        {
          value: parsedQuery.attributeName,
          options: attributeOptions,
          onChange: (value) => onQueryChange({ ...parsedQuery, attributeName: value }),
          label: "Attribute name",
          inputId: `variable-query-instance-attribute-${query.refId}`,
          allowCustomValue: true,
          interactive: true,
          tooltip: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            'Attribute or tag to query on. Tags should be formatted "Tags.<name>". ',
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TextLink,
              {
                href: "https://grafana.com/docs/grafana/latest/datasources/aws-cloudwatch/template-queries-cloudwatch/#selecting-attributes",
                external: true,
                children: "See the documentation for more details"
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorField,
        {
          label: "Filters",
          tooltipInteractive: true,
          tooltip: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TextLink,
              {
                href: "https://grafana.com/docs/grafana/latest/datasources/aws-cloudwatch/template-queries-cloudwatch/#selecting-attributes",
                external: true,
                children: "Pre-defined ec2:DescribeInstances filters/tags"
              }
            ),
            " and the values to filter on. Tags should be formatted tag:<name>."
          ] }),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _MultiFilter__WEBPACK_IMPORTED_MODULE_12__.MultiFilter,
            {
              filters: parsedQuery.ec2Filters ?? {},
              onChange: (filters) => {
                onChange({ ...parsedQuery, ec2Filters: filters });
              },
              keyPlaceholder: "filter/tag",
              datasource
            }
          )
        }
      )
    ] }),
    parsedQuery.queryType === _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.ResourceArns && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _VariableTextField__WEBPACK_IMPORTED_MODULE_14__.VariableTextField,
        {
          value: parsedQuery.resourceType,
          onBlur: (value) => onQueryChange({ ...parsedQuery, resourceType: value }),
          label: "Resource type"
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorField, { label: "Tags", tooltip: "Tags to filter the returned values on.", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _MultiFilter__WEBPACK_IMPORTED_MODULE_12__.MultiFilter,
        {
          filters: parsedQuery.tags,
          onChange: (filters) => {
            onChange({ ...parsedQuery, tags: filters });
          },
          keyPlaceholder: "tag",
          datasource
        }
      ) })
    ] }),
    parsedQuery.queryType === _types__WEBPACK_IMPORTED_MODULE_9__.VariableQueryType.LogGroups && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _VariableTextField__WEBPACK_IMPORTED_MODULE_14__.VariableTextField,
      {
        value: query.logGroupPrefix ?? "",
        onBlur: (value) => onQueryChange({ ...parsedQuery, logGroupPrefix: value }),
        label: "Log group prefix"
      }
    )
  ] });
};
const getStyles = (theme) => ({
  formStyles: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    maxWidth: theme.spacing(30)
  }),
  dimensionsWidth: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: theme.spacing(50)
  })
});


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/VariableQueryField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariableQueryField: () => (/* binding */ VariableQueryField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorField.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/styles.ts");





const VariableQueryField = ({
  label,
  onChange,
  value,
  options,
  allowCustomValue = false,
  isLoading = false,
  inputId = label,
  tooltip,
  interactive,
  error
}) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.EditorField,
      {
        label,
        tooltip,
        tooltipInteractive: interactive,
        htmlFor: inputId,
        className: _styles__WEBPACK_IMPORTED_MODULE_4__.removeMarginBottom,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select,
          {
            "aria-label": label,
            allowCustomValue,
            value,
            onChange: ({ value: value2 }) => onChange(value2),
            options,
            isLoading,
            inputId
          }
        )
      }
    ),
    error && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, { title: error, severity: "error", topSpacing: 1 })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/VariableTextField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariableTextField: () => (/* binding */ VariableTextField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorField.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/styles.ts");






const VariableTextField = ({ interactive, label, onBlur, placeholder, value, tooltip }) => {
  const [localValue, setLocalValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.EditorField, { label, tooltip, tooltipInteractive: interactive, className: _styles__WEBPACK_IMPORTED_MODULE_4__.removeMarginBottom, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input,
    {
      "aria-label": label,
      placeholder,
      value: localValue,
      onChange: (e) => setLocalValue(e.currentTarget.value),
      onBlur: () => onBlur(localValue)
    }
  ) });
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/shared/Account.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALL_ACCOUNTS_OPTION: () => (/* binding */ ALL_ACCOUNTS_OPTION),
/* harmony export */   Account: () => (/* binding */ Account)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorField.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");





const ALL_ACCOUNTS_OPTION = {
  label: "All",
  value: "all",
  description: "Target all linked accounts"
};
function Account({ accountId, onChange, accountOptions }) {
  const selectedAccountExistsInOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => accountOptions.find((a) => {
      if (a.options) {
        const matchingTemplateVar = a.options.find((tempVar) => {
          return tempVar.value === accountId;
        });
        return matchingTemplateVar;
      }
      return a.value === accountId;
    }),
    [accountOptions, accountId]
  );
  if (accountOptions.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.EditorField,
    {
      label: "Account",
      width: 26,
      tooltip: "A CloudWatch monitoring account views data from source accounts so you can centralize monitoring and troubleshooting activities across multiple accounts. Go to the CloudWatch settings page in the AWS console for more details.",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select,
        {
          "aria-label": "Account Selection",
          value: selectedAccountExistsInOptions ? accountId : ALL_ACCOUNTS_OPTION.value,
          options: [ALL_ACCOUNTS_OPTION, ...accountOptions],
          onChange: ({ value }) => {
            onChange(value);
          }
        }
      )
    }
  );
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/shared/Dimensions/Dimensions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dimensions: () => (/* binding */ Dimensions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorList.js");
/* harmony import */ var _FilterItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/shared/Dimensions/FilterItem.tsx");






const dimensionsToFilterConditions = (dimensions) => Object.entries(dimensions ?? {}).reduce((acc, [key, value]) => {
  if (!value) {
    return acc;
  }
  let v = "";
  if (typeof value === "string") {
    v = value;
  } else if (Array.isArray(value) && typeof value[0] === "string") {
    v = value[0];
  }
  if (!v) {
    return acc;
  }
  const filter = {
    key,
    value: v,
    operator: "="
  };
  return [...acc, filter];
}, []);
const filterConditionsToDimensions = (filters) => {
  return filters.reduce((acc, { key, value }) => {
    if (key && value) {
      return { ...acc, [key]: value };
    }
    return acc;
  }, {});
};
const Dimensions = ({ metricStat, datasource, disableExpressions, onChange }) => {
  const dimensionFilters = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => dimensionsToFilterConditions(metricStat.dimensions), [metricStat.dimensions]);
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(dimensionFilters);
  const onDimensionsChange = (newItems) => {
    setItems(newItems);
    const newDimensions = filterConditionsToDimensions(newItems);
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(newDimensions, metricStat.dimensions)) {
      onChange(newDimensions);
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorList,
    {
      items,
      onChange: onDimensionsChange,
      renderItem: makeRenderFilter(datasource, metricStat, disableExpressions)
    }
  );
};
function makeRenderFilter(datasource, metricStat, disableExpressions) {
  function renderFilter(item, onChange, onDelete) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _FilterItem__WEBPACK_IMPORTED_MODULE_4__.FilterItem,
      {
        filter: item,
        onChange: (item2) => onChange(item2),
        datasource,
        metricStat,
        disableExpressions,
        onDelete
      }
    );
  }
  return renderFilter;
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/shared/Dimensions/FilterItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterItem: () => (/* binding */ FilterItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/AccessoryButton.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/InputGroup.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/hooks.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/utils.ts");










const wildcardOption = { value: "*", label: "*" };
const excludeCurrentKey = (dimensions, currentKey) => Object.entries(dimensions ?? {}).reduce((acc, [key, value]) => {
  if (key !== currentKey) {
    return { ...acc, [key]: value };
  }
  return acc;
}, {});
const FilterItem = ({ filter, metricStat, datasource, disableExpressions, onChange, onDelete }) => {
  const { region, namespace, metricName, dimensions, accountId } = metricStat;
  const error = (0,_hooks__WEBPACK_IMPORTED_MODULE_10__.useEnsureVariableHasSingleSelection)(datasource, filter.key);
  const dimensionsExcludingCurrentKey = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => excludeCurrentKey(dimensions ?? {}, filter.key),
    [dimensions, filter]
  );
  const dimensionKeys = (0,_hooks__WEBPACK_IMPORTED_MODULE_10__.useDimensionKeys)(datasource, {
    ...metricStat,
    dimensionFilters: dimensionsExcludingCurrentKey
  });
  const loadDimensionValues = async () => {
    if (!filter.key) {
      return [];
    }
    return datasource.resources.getDimensionValues({
      dimensionKey: filter.key,
      dimensionFilters: dimensionsExcludingCurrentKey,
      region,
      namespace,
      metricName,
      accountId
    }).then((result) => {
      if (result.length && !disableExpressions && !result.some((o) => o.value === wildcardOption.value)) {
        result.unshift(wildcardOption);
      }
      return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_11__.appendTemplateVariables)(datasource, result);
    });
  };
  const [state, loadOptions] = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(loadDimensionValues, [
    filter.key,
    dimensions,
    region,
    namespace,
    metricName,
    accountId
  ]);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getOperatorStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, "data-testid": "cloudwatch-dimensions-filter-item", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_6__.InputGroup, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Select,
        {
          "aria-label": "Dimensions filter key",
          inputId: "cloudwatch-dimensions-filter-item-key",
          width: "auto",
          value: filter.key ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toOption)(filter.key) : null,
          allowCustomValue: true,
          options: dimensionKeys,
          onChange: (change) => {
            if (change.label) {
              onChange({ key: change.label, value: void 0 });
            }
          }
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.root), children: "=" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Select,
        {
          "aria-label": "Dimensions filter value",
          inputId: "cloudwatch-dimensions-filter-item-value",
          onOpenMenu: loadOptions,
          width: "auto",
          value: filter.value ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toOption)(filter.value) : null,
          allowCustomValue: true,
          isLoading: state.loading,
          options: state.value,
          onChange: (change) => {
            if (change.value) {
              onChange({ ...filter, value: change.value });
            }
          }
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.AccessoryButton, { "aria-label": "remove", icon: "times", variant: "secondary", onClick: onDelete, type: "button" })
    ] }),
    error && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Alert, { className: styles.alert, title: error, severity: "error", topSpacing: 1 })
  ] });
};
const getOperatorStyles = (theme) => ({
  root: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(0, 1),
    alignSelf: "center"
  }),
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({ display: "inline-block" }),
  alert: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({ minWidth: "100%", width: "min-content" })
});


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/shared/LogGroups/LegacyLogGroupNamesSelection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LegacyLogGroupSelection: () => (/* binding */ LegacyLogGroupSelection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _LegacyLogGroupSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/shared/LogGroups/LegacyLogGroupSelector.tsx");




const rowGap = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  gap: "3px"
});
const LegacyLogGroupSelection = ({ datasource, region, legacyLogGroupNames, onChange }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: `gf-form gf-form--grow flex-grow-1 ${rowGap}`, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _LegacyLogGroupSelector__WEBPACK_IMPORTED_MODULE_2__.LogGroupSelector,
    {
      region,
      selectedLogGroups: legacyLogGroupNames,
      datasource,
      onChange
    }
  ) });
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/shared/LogGroups/LegacyLogGroupSelector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogGroupSelector: () => (/* binding */ LogGroupSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/legacyEvents.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/utils.ts");








const MAX_LOG_GROUPS = 20;
const MAX_VISIBLE_LOG_GROUPS = 4;
const DEBOUNCE_TIMER = 300;
const LogGroupSelector = ({
  region,
  selectedLogGroups,
  onChange,
  datasource,
  onOpenMenu,
  width,
  saved = true
}) => {
  const [loadingLogGroups, setLoadingLogGroups] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [availableLogGroups, setAvailableLogGroups] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const logGroupOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.unionBy)(availableLogGroups, selectedLogGroups?.map(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.toOption), "value"),
    [availableLogGroups, selectedLogGroups]
  );
  const fetchLogGroupOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    async (region2, logGroupNamePrefix) => {
      if (!datasource) {
        return [];
      }
      try {
        const logGroups = await datasource.resources.legacyDescribeLogGroups(region2, logGroupNamePrefix);
        return logGroups;
      } catch (err) {
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.getAppEvents)().publish({
          type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.AppEvents.alertError.name,
          payload: [typeof err === "string" ? err : JSON.stringify(err)]
        });
        return [];
      }
    },
    [datasource]
  );
  const onLogGroupSearch = async (searchTerm, region2, actionMeta) => {
    if (actionMeta.action !== "input-change" || !datasource) {
      return;
    }
    const logGroupNamePattern = /^[\.\-_/#A-Za-z0-9]+$/;
    if (!logGroupNamePattern.test(searchTerm)) {
      if (searchTerm !== "") {
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.getAppEvents)().publish({
          type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.AppEvents.alertError.name,
          payload: ["Invalid Log Group name: " + searchTerm]
        });
      }
      return;
    }
    setLoadingLogGroups(true);
    const matchingLogGroups = await fetchLogGroupOptions(region2, searchTerm);
    setAvailableLogGroups((0,lodash__WEBPACK_IMPORTED_MODULE_1__.unionBy)(availableLogGroups, matchingLogGroups, "value"));
    setLoadingLogGroups(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    async function getAvailableLogGroupOptions() {
      if (!datasource || !datasource.getActualRegion(region)) {
        setAvailableLogGroups([]);
        return;
      }
      setLoadingLogGroups(true);
      return fetchLogGroupOptions(datasource.getActualRegion(region)).then((logGroups) => {
        setAvailableLogGroups(logGroups);
      }).finally(() => {
        setLoadingLogGroups(false);
      });
    }
    saved && getAvailableLogGroupOptions();
    return () => {
      setAvailableLogGroups([]);
      setLoadingLogGroups(false);
    };
  }, [datasource, region, saved]);
  const onOpenLogGroupMenu = async () => {
    if (onOpenMenu) {
      await onOpenMenu();
    }
  };
  const onLogGroupSearchDebounced = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(onLogGroupSearch, DEBOUNCE_TIMER);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.MultiSelect,
    {
      inputId: "default-log-groups",
      "aria-label": "Log Groups",
      allowCustomValue: true,
      options: datasource ? (0,_utils_utils__WEBPACK_IMPORTED_MODULE_7__.appendTemplateVariables)(datasource, logGroupOptions) : logGroupOptions,
      value: selectedLogGroups,
      onChange: (v) => onChange(v.filter(({ value }) => value).map(({ value }) => value)),
      closeMenuOnSelect: false,
      isClearable: true,
      isOptionDisabled: () => selectedLogGroups.length >= MAX_LOG_GROUPS,
      placeholder: "Choose Log Groups",
      maxVisibleValues: MAX_VISIBLE_LOG_GROUPS,
      noOptionsMessage: "No log groups available",
      isLoading: loadingLogGroups,
      onOpenMenu: onOpenLogGroupMenu,
      onInputChange: (value, actionMeta) => {
        onLogGroupSearchDebounced(value, region, actionMeta);
      },
      width
    }
  );
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/shared/LogGroups/LogGroupsField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogGroupsField: () => (/* binding */ LogGroupsField),
/* harmony export */   LogGroupsFieldWrapper: () => (/* binding */ LogGroupsFieldWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/hooks.ts");
/* harmony import */ var _utils_templateVariableUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/templateVariableUtils.ts");
/* harmony import */ var _LegacyLogGroupNamesSelection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/shared/LogGroups/LegacyLogGroupNamesSelection.tsx");
/* harmony import */ var _LogGroupsSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/shared/LogGroups/LogGroupsSelector.tsx");
/* harmony import */ var _SelectedLogGroups__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/shared/LogGroups/SelectedLogGroups.tsx");










const logGroupStyles = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  display: "flex",
  flexDirection: "column",
  marginTop: 8,
  "& div:first-child": {
    marginBottom: 8
  }
});
const LogGroupsField = ({
  datasource,
  onChange,
  legacyLogGroupNames,
  logGroups,
  region,
  maxNoOfVisibleLogGroups,
  onBeforeOpen
}) => {
  const accountState = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAccountOptions)(datasource?.resources, region);
  const [loadingLogGroupsStarted, setLoadingLogGroupsStarted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (datasource && !loadingLogGroupsStarted && !logGroups?.length && legacyLogGroupNames?.length) {
      setLoadingLogGroupsStarted(true);
      const variables = legacyLogGroupNames.filter((lgn) => (0,_utils_templateVariableUtils__WEBPACK_IMPORTED_MODULE_5__.isTemplateVariable)(datasource.resources.templateSrv, lgn));
      const legacyLogGroupNameValues = legacyLogGroupNames.filter(
        (lgn) => !(0,_utils_templateVariableUtils__WEBPACK_IMPORTED_MODULE_5__.isTemplateVariable)(datasource.resources.templateSrv, lgn)
      );
      Promise.all(
        legacyLogGroupNameValues.map(
          (lg) => datasource.resources.getLogGroups({ region, logGroupNamePrefix: lg })
        )
      ).then((results) => {
        const logGroups2 = results.flatMap(
          (r) => r.map((lg) => ({
            arn: lg.value.arn,
            name: lg.value.name,
            accountId: lg.accountId
          }))
        );
        onChange([...logGroups2, ...variables.map((v) => ({ name: v, arn: v }))]);
      }).catch((err) => {
        console.error(err);
      });
    }
  }, [datasource, legacyLogGroupNames, logGroups, onChange, region, loadingLogGroupsStarted]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: logGroupStyles, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _LogGroupsSelector__WEBPACK_IMPORTED_MODULE_7__.LogGroupsSelector,
      {
        fetchLogGroups: async (params) => datasource?.resources.getLogGroups({ region, ...params }) ?? [],
        onChange,
        accountOptions: accountState.value,
        selectedLogGroups: logGroups,
        onBeforeOpen,
        variables: datasource?.getVariables()
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _SelectedLogGroups__WEBPACK_IMPORTED_MODULE_8__.SelectedLogGroups,
      {
        selectedLogGroups: logGroups ?? [],
        onChange,
        maxNoOfVisibleLogGroups
      }
    )
  ] });
};
const LogGroupsFieldWrapper = (props) => {
  if (!_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.featureToggles.cloudWatchCrossAccountQuerying) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _LegacyLogGroupNamesSelection__WEBPACK_IMPORTED_MODULE_6__.LegacyLogGroupSelection,
      {
        ...props,
        onChange: props.legacyOnChange,
        legacyLogGroupNames: props.legacyLogGroupNames || []
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LogGroupsField, { ...props });
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/shared/LogGroups/LogGroupsSelector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogGroupsSelector: () => (/* binding */ LogGroupsSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorField.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Space.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Checkbox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/styles.ts");
/* harmony import */ var _Account__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/shared/Account.tsx");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/shared/LogGroups/Search.tsx");








const LogGroupsSelector = ({
  accountOptions = [],
  variables = [],
  fetchLogGroups,
  onChange,
  onBeforeOpen,
  ...props
}) => {
  const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [selectableLogGroups, setSelectableLogGroups] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [selectedLogGroups, setSelectedLogGroups] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.selectedLogGroups ?? []);
  const [searchPhrase, setSearchPhrase] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [searchAccountId, setSearchAccountId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_Account__WEBPACK_IMPORTED_MODULE_14__.ALL_ACCOUNTS_OPTION.value);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_13__["default"]);
  const selectedLogGroupsCounter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => selectedLogGroups.filter((lg) => !lg.name?.startsWith("$")).length,
    [selectedLogGroups]
  );
  const variableOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => variables.map((v) => ({ label: v, value: v })), [variables]);
  const selectedVariable = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => selectedLogGroups.find((lg) => lg.name?.startsWith("$"))?.name,
    [selectedLogGroups]
  );
  const currentVariableOption = {
    label: selectedVariable,
    value: selectedVariable
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setSelectedLogGroups(props.selectedLogGroups ?? []);
  }, [props.selectedLogGroups]);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen) {
    } else {
      setSelectedLogGroups(selectedLogGroups);
      searchFn(searchPhrase, searchAccountId);
    }
  };
  const accountNameById = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const idsToNames = {};
    accountOptions.forEach((a) => {
      if (a.value && a.label) {
        idsToNames[a.value] = a.label;
      }
    });
    return idsToNames;
  }, [accountOptions]);
  const searchFn = async (searchTerm, accountId) => {
    setIsLoading(true);
    try {
      const possibleLogGroups = await fetchLogGroups({
        logGroupPattern: searchTerm,
        accountId
      });
      setSelectableLogGroups(
        possibleLogGroups.map((lg) => ({
          arn: lg.value.arn,
          name: lg.value.name,
          accountId: lg.accountId,
          accountLabel: lg.accountId ? accountNameById[lg.accountId] : void 0
        }))
      );
    } catch (err) {
      setSelectableLogGroups([]);
    }
    setIsLoading(false);
  };
  const handleSelectCheckbox = (row, isChecked) => {
    if (isChecked) {
      setSelectedLogGroups([...selectedLogGroups, row]);
    } else {
      setSelectedLogGroups(selectedLogGroups.filter((lg) => lg.arn !== row.arn));
    }
  };
  const handleApply = () => {
    onChange(selectedLogGroups);
    toggleModal();
  };
  const handleCancel = () => {
    setSelectedLogGroups(selectedLogGroups);
    toggleModal();
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal, { className: styles.modal, title: "Select log groups", isOpen: isModalOpen, onDismiss: toggleModal, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.logGroupSelectionArea, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.searchField, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.EditorField, { label: "Log group name prefix", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _Search__WEBPACK_IMPORTED_MODULE_15__["default"],
          {
            searchFn: (phrase) => {
              searchFn(phrase, searchAccountId);
              setSearchPhrase(phrase);
            },
            searchPhrase
          }
        ) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _Account__WEBPACK_IMPORTED_MODULE_14__.Account,
          {
            onChange: (accountId) => {
              searchFn(searchPhrase, accountId);
              setSearchAccountId(accountId || _Account__WEBPACK_IMPORTED_MODULE_14__.ALL_ACCOUNTS_OPTION.value);
            },
            accountOptions,
            accountId: searchAccountId
          }
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Space, { layout: "block", v: 2 }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
        !isLoading && selectableLogGroups.length >= 25 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.limitLabel, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "info-circle" }),
            "Only the first 50 results can be shown. If you do not see an expected log group, try narrowing down your search.",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: [
              "A",
              " ",
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.TextLink,
                {
                  external: true,
                  href: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/cloudwatch_limits_cwl.html",
                  children: [
                    "maximum",
                    " "
                  ]
                }
              ),
              " ",
              "of 50 Cloudwatch log groups can be queried at one time."
            ] })
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Space, { layout: "block", v: 1 })
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.tableScroller, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: styles.table, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { className: styles.row, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: styles.cell, children: "Log Group" }),
            accountOptions.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: styles.cell, children: "Account label" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: styles.cell, children: "Account ID" })
          ] }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", { children: [
            isLoading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { className: styles.row, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: styles.cell, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LoadingPlaceholder, { text: "Loading..." }) }) }),
            !isLoading && selectableLogGroups.length === 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { className: styles.row, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: styles.cell, children: "No log groups found" }) }),
            !isLoading && selectableLogGroups.map((row) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { className: styles.row, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: styles.cell, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.nestedEntry, children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Checkbox,
                  {
                    id: row.arn,
                    onChange: (ev) => handleSelectCheckbox(row, ev.currentTarget.checked),
                    value: !!(row.arn && selectedLogGroups.some((lg) => lg.arn === row.arn))
                  }
                ),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Space, { layout: "inline", h: 2 }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: styles.logGroupSearchResults, htmlFor: row.arn, title: row.name, children: row.name })
              ] }) }),
              accountOptions.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: styles.cell, children: row.accountLabel }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: styles.cell, children: row.accountId })
            ] }, `${row.arn}`))
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Space, { layout: "block", v: 2 }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Label, { className: styles.logGroupCountLabel, children: [
        selectedLogGroupsCounter,
        " log group",
        selectedLogGroupsCounter !== 1 && "s",
        " selected"
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Space, { layout: "block", v: 1 }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.EditorField,
        {
          label: "Template variable",
          width: 26,
          tooltip: "Optionally you can specify a single or multi-valued template variable. Select a variable separately or in conjunction with log groups.",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Select,
            {
              isClearable: true,
              "aria-label": "Template variable",
              value: currentVariableOption,
              allowCustomValue: true,
              options: variableOptions,
              onChange: (option) => {
                const newValues = selectedLogGroups.filter((lg) => !lg.name?.startsWith("$"));
                if (option?.label) {
                  newValues.push({ name: option.label, arn: option.label });
                }
                setSelectedLogGroups(newValues);
              }
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal.ButtonRow, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { onClick: handleCancel, variant: "secondary", type: "button", fill: "outline", children: "Cancel" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { onClick: handleApply, type: "button", children: "Add log groups" })
      ] })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
      {
        variant: "secondary",
        onClick: () => {
          try {
            onBeforeOpen?.();
            toggleModal();
          } catch (err) {
          }
        },
        type: "button",
        children: "Select log groups"
      }
    ) })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/shared/LogGroups/Search.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");





const Search = ({ searchFn, searchPhrase }) => {
  const [searchFilter, setSearchFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(searchPhrase);
  const debouncedSearch = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(searchFn, 600), [searchFn]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    return () => {
      debouncedSearch?.cancel();
    };
  }, [debouncedSearch]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input,
    {
      "aria-label": "log group search",
      prefix: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "search" }),
      value: searchFilter,
      onChange: (event) => {
        const searchPhrase2 = event.currentTarget.value;
        setSearchFilter(searchPhrase2);
        debouncedSearch(searchPhrase2);
      },
      placeholder: "search by log group name prefix"
    }
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/shared/LogGroups/SelectedLogGroups.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectedLogGroups: () => (/* binding */ SelectedLogGroups)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/styles.ts");





const MAX_NO_OF_VISIBLE_LOG_GROUPS = 6;
const SelectedLogGroups = ({
  selectedLogGroups = [],
  onChange,
  maxNoOfVisibleLogGroups = MAX_NO_OF_VISIBLE_LOG_GROUPS
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const [showConfirm, setShowConfirm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [visibleSelectecLogGroups, setVisibleSelectecLogGroups] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(
    selectedLogGroups.slice(0, MAX_NO_OF_VISIBLE_LOG_GROUPS)
  );
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setVisibleSelectecLogGroups(selectedLogGroups.slice(0, maxNoOfVisibleLogGroups));
  }, [selectedLogGroups, maxNoOfVisibleLogGroups]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.selectedLogGroupsContainer, children: [
      visibleSelectecLogGroups.map((lg) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button,
        {
          size: "sm",
          variant: "secondary",
          icon: "times",
          className: styles.removeButton,
          onClick: () => {
            onChange(selectedLogGroups.filter((slg) => slg.arn !== lg.arn));
          },
          children: `${lg.name}${lg.accountLabel ? `(${lg.accountLabel})` : ""}`
        },
        lg.arn
      )),
      visibleSelectecLogGroups.length !== selectedLogGroups.length && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button,
        {
          size: "sm",
          variant: "secondary",
          icon: "plus",
          fill: "outline",
          className: styles.removeButton,
          onClick: () => setVisibleSelectecLogGroups(selectedLogGroups),
          children: "Show all"
        }
      ),
      selectedLogGroups.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button,
        {
          size: "sm",
          variant: "secondary",
          icon: "times",
          fill: "outline",
          className: styles.removeButton,
          onClick: () => setShowConfirm(true),
          children: "Clear selection"
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmModal,
      {
        isOpen: showConfirm,
        title: "Clear Log Group Selection",
        body: "Are you sure you want to clear all log groups?",
        confirmText: "Yes",
        dismissText: "No",
        icon: "exclamation-triangle",
        onConfirm: () => {
          setShowConfirm(false);
          onChange([]);
        },
        onDismiss: () => setShowConfirm(false)
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/shared/MetricStatEditor/MetricStatEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetricStatEditor: () => (/* binding */ MetricStatEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorFieldGroup.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorField.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorRow.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorRows.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorSwitch.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/hooks.ts");
/* harmony import */ var _standardStatistics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/standardStatistics.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/utils.ts");
/* harmony import */ var _Account__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/shared/Account.tsx");
/* harmony import */ var _Dimensions_Dimensions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/shared/Dimensions/Dimensions.tsx");











const percentileSyntaxRE = /^(p|tm|tc|ts|wm)\d{2}(?:\.\d{1,2})?$/;
const boundariesInnerParenthesesSyntax = `\\d*(\\.\\d+)?%?:\\d*(\\.\\d+)?%?`;
const boundariesSyntaxRE = new RegExp(`^(PR|TM|TC|TS|WM)\\((${boundariesInnerParenthesesSyntax})\\)$`);
const MetricStatEditor = ({
  refId,
  metricStat,
  datasource,
  disableExpressions = false,
  onChange
}) => {
  const namespaces = (0,_hooks__WEBPACK_IMPORTED_MODULE_10__.useNamespaces)(datasource);
  const metrics = (0,_hooks__WEBPACK_IMPORTED_MODULE_10__.useMetrics)(datasource, metricStat);
  const accountState = (0,_hooks__WEBPACK_IMPORTED_MODULE_10__.useAccountOptions)(datasource.resources, metricStat.region);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    datasource.resources.isMonitoringAccount(metricStat.region).then((isMonitoringAccount) => {
      if (isMonitoringAccount && !accountState.loading && accountState.value?.length && !metricStat.accountId) {
        onChange({ ...metricStat, accountId: "all" });
      }
      if (!accountState.loading && accountState.value && !accountState.value.length && metricStat.accountId) {
        onChange({ ...metricStat, accountId: void 0 });
      }
    });
  }, [accountState, metricStat, onChange, datasource.resources]);
  const onNamespaceChange = async (metricStat2) => {
    const validatedQuery = await validateMetricName(metricStat2);
    onChange(validatedQuery);
  };
  const validateMetricName = async (metricStat2) => {
    let { metricName, namespace, region } = metricStat2;
    if (!metricName) {
      return metricStat2;
    }
    await datasource.resources.getMetrics({ namespace, region }).then((result) => {
      if (!result.find((metric) => metric.value === metricName)) {
        metricName = "";
      }
    });
    return { ...metricStat2, metricName };
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.EditorRows, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.EditorRow, { children: [
      !disableExpressions && _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.featureToggles.cloudWatchCrossAccountQuerying && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _Account__WEBPACK_IMPORTED_MODULE_13__.Account,
        {
          accountId: metricStat.accountId,
          onChange: (accountId) => {
            onChange({ ...metricStat, accountId });
          },
          accountOptions: accountState?.value || []
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.EditorFieldGroup, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorField, { label: "Namespace", width: 26, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Select,
          {
            "aria-label": "Namespace",
            value: metricStat?.namespace && (0,_utils_utils__WEBPACK_IMPORTED_MODULE_12__.toOption)(metricStat.namespace),
            allowCustomValue: true,
            options: namespaces,
            onChange: ({ value: namespace }) => {
              if (namespace) {
                onNamespaceChange({ ...metricStat, namespace });
              }
            }
          }
        ) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorField, { label: "Metric name", width: 16, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Select,
          {
            "aria-label": "Metric name",
            value: metricStat?.metricName && (0,_utils_utils__WEBPACK_IMPORTED_MODULE_12__.toOption)(metricStat.metricName),
            allowCustomValue: true,
            options: metrics,
            onChange: ({ value: metricName }) => {
              if (metricName) {
                onChange({ ...metricStat, metricName });
              }
            }
          }
        ) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorField, { label: "Statistic", width: 16, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Select,
          {
            inputId: `${refId}-metric-stat-editor-select-statistic`,
            allowCustomValue: true,
            value: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_12__.toOption)(metricStat.statistic ?? _standardStatistics__WEBPACK_IMPORTED_MODULE_11__.standardStatistics[0]),
            options: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_12__.appendTemplateVariables)(
              datasource,
              _standardStatistics__WEBPACK_IMPORTED_MODULE_11__.standardStatistics.filter((s) => s !== metricStat.statistic).map(_utils_utils__WEBPACK_IMPORTED_MODULE_12__.toOption)
            ),
            onChange: ({ value: statistic }) => {
              if (!statistic || !_standardStatistics__WEBPACK_IMPORTED_MODULE_11__.standardStatistics.includes(statistic) && !(percentileSyntaxRE.test(statistic) || boundariesSyntaxRE.test(statistic)) && !datasource.templateSrv.containsTemplate(statistic)) {
                return;
              }
              onChange({ ...metricStat, statistic });
            }
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.EditorRow, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorField, { label: "Dimensions", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _Dimensions_Dimensions__WEBPACK_IMPORTED_MODULE_14__.Dimensions,
        {
          metricStat,
          onChange: (dimensions) => onChange({ ...metricStat, dimensions }),
          disableExpressions,
          datasource
        }
      ) }),
      !disableExpressions && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorField,
        {
          label: "Match exact",
          optional: true,
          tooltip: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            "Only show metrics that contain exactly the dimensions defined in the query and match the specified values. If this is enabled, all dimensions of the metric being queried must be specified so that the ",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.TextLink,
              {
                href: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/search-expression-syntax.html",
                external: true,
                children: "metric schema"
              }
            ),
            " matches exactly. If this is disabled, metrics that match the schema and have additional dimensions will also be returned."
          ] }),
          tooltipInteractive: true,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_6__.EditorSwitch,
            {
              id: `${refId}-cloudwatch-match-exact`,
              value: !!metricStat.matchExact,
              onChange: (e) => {
                onChange({
                  ...metricStat,
                  matchExact: e.currentTarget.checked
                });
              }
            }
          )
        }
      )
    ] })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/components/styles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   removeMarginBottom: () => (/* binding */ removeMarginBottom)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");


const getStyles = (theme) => ({
  table: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    width: "100%",
    tableLayout: "fixed"
  }),
  selectedLogGroupsContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    marginLeft: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    display: "flex",
    flexFlow: "wrap",
    gap: theme.spacing(1),
    button: {
      margin: "unset"
    }
  }),
  limitLabel: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    color: theme.colors.text.secondary,
    textAlign: "center",
    maxWidth: "none",
    svg: {
      marginRight: theme.spacing(0.5)
    },
    fontSize: 12
  }),
  logGroupCountLabel: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    color: theme.colors.text.secondary,
    maxWidth: "none"
  }),
  tableScroller: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    maxHeight: "40vh",
    overflow: "auto"
  }),
  row: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    borderBottom: `1px solid ${theme.colors.border.weak}`,
    "&:last-of-type": {
      borderBottomColor: theme.colors.border.medium
    }
  }),
  cell: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    padding: theme.spacing(1, 1, 1, 0),
    width: "25%",
    "&:first-of-type": {
      width: "80%",
      padding: theme.spacing(1, 1, 1, 2)
    }
  }),
  nestedEntry: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    display: "flex",
    alignItems: "center"
  }),
  logGroupSearchResults: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "90%",
    verticalAlign: "middle"
  }),
  modal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    width: theme.breakpoints.values.lg
  }),
  selectAccountId: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    maxWidth: "100px"
  }),
  logGroupSelectionArea: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    display: "flex"
  }),
  searchField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    width: "100%",
    marginRight: theme.spacing(1)
  }),
  resultLimit: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    margin: "4px 0",
    fontStyle: "italic"
  }),
  removeButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    verticalAlign: "middle",
    marginLeft: theme.spacing(0.5)
  })
});
const removeMarginBottom = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({ marginBottom: 8 });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getStyles);


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudWatchDatasource: () => (/* binding */ CloudWatchDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");
/* harmony import */ var _annotationSupport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/annotationSupport.ts");
/* harmony import */ var _defaultQueries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/defaultQueries.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/guards.ts");
/* harmony import */ var _language_cloudwatch_logs_CloudWatchLogsLanguageProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-logs/CloudWatchLogsLanguageProvider.ts");
/* harmony import */ var _language_cloudwatch_logs_sql_completion_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-logs-sql/completion/CompletionItemProvider.ts");
/* harmony import */ var _language_cloudwatch_ppl_completion_PPLCompletionItemProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-ppl/completion/PPLCompletionItemProvider.ts");
/* harmony import */ var _language_cloudwatch_sql_completion_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/completion/CompletionItemProvider.ts");
/* harmony import */ var _language_logs_completion_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/logs/completion/CompletionItemProvider.ts");
/* harmony import */ var _language_metric_math_completion_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/metric-math/completion/CompletionItemProvider.ts");
/* harmony import */ var _query_runner_CloudWatchAnnotationQueryRunner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/query-runner/CloudWatchAnnotationQueryRunner.ts");
/* harmony import */ var _query_runner_CloudWatchLogsQueryRunner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/query-runner/CloudWatchLogsQueryRunner.ts");
/* harmony import */ var _query_runner_CloudWatchMetricsQueryRunner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/query-runner/CloudWatchMetricsQueryRunner.ts");
/* harmony import */ var _resources_ResourcesAPI__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/resources/ResourcesAPI.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/variables.ts");



















class CloudWatchDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getTemplateSrv)()) {
    super(instanceSettings);
    this.instanceSettings = instanceSettings;
    this.templateSrv = templateSrv;
    this.type = "cloudwatch";
    this.defaultRegion = instanceSettings.jsonData.defaultRegion;
    this.resources = new _resources_ResourcesAPI__WEBPACK_IMPORTED_MODULE_18__.ResourcesAPI(instanceSettings, templateSrv);
    this.languageProvider = new _language_cloudwatch_logs_CloudWatchLogsLanguageProvider__WEBPACK_IMPORTED_MODULE_9__.CloudWatchLogsLanguageProvider(this);
    this.sqlCompletionItemProvider = new _language_cloudwatch_sql_completion_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_12__.SQLCompletionItemProvider(this.resources, this.templateSrv);
    this.metricsQueryRunner = new _query_runner_CloudWatchMetricsQueryRunner__WEBPACK_IMPORTED_MODULE_17__.CloudWatchMetricsQueryRunner(instanceSettings, templateSrv);
    this.logsQueryRunner = new _query_runner_CloudWatchLogsQueryRunner__WEBPACK_IMPORTED_MODULE_16__.CloudWatchLogsQueryRunner(instanceSettings, templateSrv);
    this.annotationQueryRunner = new _query_runner_CloudWatchAnnotationQueryRunner__WEBPACK_IMPORTED_MODULE_15__.CloudWatchAnnotationQueryRunner(instanceSettings, templateSrv);
    this.variables = new _variables__WEBPACK_IMPORTED_MODULE_19__.CloudWatchVariableSupport(this.resources);
    this.annotations = _annotationSupport__WEBPACK_IMPORTED_MODULE_6__.CloudWatchAnnotationSupport;
    this.defaultLogGroups = instanceSettings.jsonData.defaultLogGroups;
    this.metricMathCompletionItemProvider = new _language_metric_math_completion_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_14__.MetricMathCompletionItemProvider(this.resources, this.templateSrv);
    this.logsCompletionItemProviderFunc = (0,_language_logs_completion_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_13__.LogsCompletionItemProviderFunc)(this.resources, this.templateSrv);
    this.logsSqlCompletionItemProviderFunc = (0,_language_cloudwatch_logs_sql_completion_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_10__.LogsSQLCompletionItemProviderFunc)(this.resources, templateSrv);
    this.pplCompletionItemProviderFunc = (0,_language_cloudwatch_ppl_completion_PPLCompletionItemProvider__WEBPACK_IMPORTED_MODULE_11__.PPLCompletionItemProviderFunc)(this.resources, this.templateSrv);
  }
  filterQuery(query) {
    return query.hide !== true || (0,_guards__WEBPACK_IMPORTED_MODULE_8__.isCloudWatchMetricsQuery)(query) && query.id !== "";
  }
  // reminder: when queries are made on the backend through alerting they will not go through this function
  // we have duplicated code here to retry queries on the frontend so that the we can show partial results to users
  // but ultimately anytime we add special error handling or logic retrying here we should ask ourselves
  // could it only live in the backend? if so let's implement it there. If not, should it also live in the backend or just in the frontend?
  // another note that at the end of the day all of these queries call super.query which is what forwards the request to the backend through /query
  query(options) {
    options = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(options);
    let queries = options.targets.filter(this.filterQuery);
    const logQueries = [];
    const metricsQueries = [];
    const logsAnomaliesQueries = [];
    const annotationQueries = [];
    queries.forEach((query) => {
      if ((0,_guards__WEBPACK_IMPORTED_MODULE_8__.isCloudWatchAnnotationQuery)(query)) {
        annotationQueries.push(query);
      } else if ((0,_guards__WEBPACK_IMPORTED_MODULE_8__.isLogsAnomaliesQuery)(query)) {
        logsAnomaliesQueries.push(query);
      } else if ((0,_guards__WEBPACK_IMPORTED_MODULE_8__.isCloudWatchLogsQuery)(query)) {
        logQueries.push(query);
      } else {
        metricsQueries.push(query);
      }
    });
    const dataQueryResponses = [];
    if (logQueries.length) {
      dataQueryResponses.push(this.logsQueryRunner.handleLogQueries(logQueries, options, super.query.bind(this)));
    }
    if (metricsQueries.length) {
      dataQueryResponses.push(
        this.metricsQueryRunner.handleMetricQueries(metricsQueries, options, super.query.bind(this))
      );
    }
    if (logsAnomaliesQueries.length) {
      dataQueryResponses.push(
        this.logsQueryRunner.handleLogAnomaliesQueries(logsAnomaliesQueries, options, super.query.bind(this))
      );
    }
    if (annotationQueries.length) {
      dataQueryResponses.push(
        this.annotationQueryRunner.handleAnnotationQuery(annotationQueries, options, super.query.bind(this))
      );
    }
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(dataQueryResponses)) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
        data: [],
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Done
      });
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.merge)(...dataQueryResponses);
  }
  interpolateVariablesInQueries(queries, scopedVars) {
    if (!queries.length) {
      return queries;
    }
    return queries.map((query) => ({
      ...query,
      region: this.metricsQueryRunner.replaceVariableAndDisplayWarningIfMulti(
        this.getActualRegion(query.region),
        scopedVars
      ),
      ...(0,_guards__WEBPACK_IMPORTED_MODULE_8__.isCloudWatchMetricsQuery)(query) && this.metricsQueryRunner.interpolateMetricsQueryVariables(query, scopedVars),
      ...(0,_guards__WEBPACK_IMPORTED_MODULE_8__.isCloudWatchLogsQuery)(query) && this.logsQueryRunner.interpolateLogsQueryVariables(query, scopedVars)
    }));
  }
  /**
   * Get log row context for a given log row. This is called when the user clicks on a log row in the logs visualization and the "show context button"
   * it shows the surrounding logs.
   */
  getLogRowContext(row, context, query) {
    return this.logsQueryRunner.getLogRowContext(row, context, super.query.bind(this), query);
  }
  targetContainsTemplate(target) {
    return this.templateSrv.containsTemplate(target.region) || this.templateSrv.containsTemplate(target.namespace) || this.templateSrv.containsTemplate(target.metricName) || this.templateSrv.containsTemplate(target.expression) || target.logGroupNames?.some((logGroup) => this.templateSrv.containsTemplate(logGroup)) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(target.dimensions, (v, k) => this.templateSrv.containsTemplate(k) || this.templateSrv.containsTemplate(v));
  }
  getQueryDisplayText(query) {
    if ((0,_guards__WEBPACK_IMPORTED_MODULE_8__.isCloudWatchLogsQuery)(query)) {
      return query.expression ?? "";
    } else {
      return JSON.stringify(query);
    }
  }
  // public
  getVariables() {
    return this.resources.getVariables();
  }
  getActualRegion(region) {
    if (region === "default" || region === void 0 || region === "") {
      return this.defaultRegion ?? "";
    }
    return region;
  }
  getDefaultQuery(_) {
    return {
      ...(0,_defaultQueries__WEBPACK_IMPORTED_MODULE_7__.getDefaultLogsQuery)(this.instanceSettings.jsonData.logGroups, this.instanceSettings.jsonData.defaultLogGroups),
      ..._defaultQueries__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_METRICS_QUERY
    };
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/defaultQueries.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_ANNOTATIONS_QUERY: () => (/* binding */ DEFAULT_ANNOTATIONS_QUERY),
/* harmony export */   DEFAULT_CWLI_QUERY_STRING: () => (/* binding */ DEFAULT_CWLI_QUERY_STRING),
/* harmony export */   DEFAULT_METRICS_QUERY: () => (/* binding */ DEFAULT_METRICS_QUERY),
/* harmony export */   DEFAULT_PPL_QUERY_STRING: () => (/* binding */ DEFAULT_PPL_QUERY_STRING),
/* harmony export */   DEFAULT_SQL_QUERY_STRING: () => (/* binding */ DEFAULT_SQL_QUERY_STRING),
/* harmony export */   DEFAULT_VARIABLE_QUERY: () => (/* binding */ DEFAULT_VARIABLE_QUERY),
/* harmony export */   getDefaultLogsQuery: () => (/* binding */ getDefaultLogsQuery)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/types.ts");


const DEFAULT_METRICS_QUERY = {
  queryMode: "Metrics",
  namespace: "",
  metricName: "",
  expression: "",
  dimensions: {},
  region: "default",
  id: "",
  statistic: "Average",
  period: "",
  metricQueryType: _types__WEBPACK_IMPORTED_MODULE_0__.MetricQueryType.Search,
  metricEditorMode: _types__WEBPACK_IMPORTED_MODULE_0__.MetricEditorMode.Builder,
  sql: void 0,
  sqlExpression: "",
  matchExact: true
};
const DEFAULT_ANNOTATIONS_QUERY = {
  queryMode: "Annotations",
  namespace: "",
  region: "default",
  statistic: "Average"
};
const DEFAULT_CWLI_QUERY_STRING = "fields @timestamp, @message |\nsort @timestamp desc |\nlimit 20";
const DEFAULT_PPL_QUERY_STRING = "fields `@timestamp`, `@message`\n| sort - `@timestamp`\n| head 25s";
const DEFAULT_SQL_QUERY_STRING = "SELECT `@timestamp`, `@message`\nFROM `log_group`\nORDER BY `@timestamp` DESC\nLIMIT 25;";
const getDefaultLogsQuery = (defaultLogGroups, legacyDefaultLogGroups) => ({
  id: "",
  region: "default",
  // in case legacy default log groups have been defined in the ConfigEditor, they will be migrated in the LogGroupsField component or the next time the ConfigEditor is opened.
  // the migration requires async backend calls, so we don't want to do it here as it would block the UI.
  logGroupNames: legacyDefaultLogGroups,
  logGroups: defaultLogGroups ?? [],
  queryLanguage: _types__WEBPACK_IMPORTED_MODULE_0__.LogsQueryLanguage.CWLI
});
const DEFAULT_VARIABLE_QUERY = {
  queryType: _types__WEBPACK_IMPORTED_MODULE_0__.VariableQueryType.Regions,
  region: "default"
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/expressions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryEditorExpressionType: () => (/* reexport safe */ _dataquery_gen__WEBPACK_IMPORTED_MODULE_0__.QueryEditorExpressionType),
/* harmony export */   QueryEditorPropertyType: () => (/* reexport safe */ _dataquery_gen__WEBPACK_IMPORTED_MODULE_0__.QueryEditorPropertyType)
/* harmony export */ });
/* harmony import */ var _dataquery_gen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/dataquery.gen.ts");




/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/guards.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isCloudWatchAnnotation: () => (/* binding */ isCloudWatchAnnotation),
/* harmony export */   isCloudWatchAnnotationQuery: () => (/* binding */ isCloudWatchAnnotationQuery),
/* harmony export */   isCloudWatchLogsQuery: () => (/* binding */ isCloudWatchLogsQuery),
/* harmony export */   isCloudWatchMetricsQuery: () => (/* binding */ isCloudWatchMetricsQuery),
/* harmony export */   isLogsAnomaliesQuery: () => (/* binding */ isLogsAnomaliesQuery)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/types.ts");


const isCloudWatchLogsQuery = (cloudwatchQuery) => cloudwatchQuery.queryMode === "Logs";
const isLogsAnomaliesQuery = (cloudwatchQuery) => {
  if (isCloudWatchLogsQuery(cloudwatchQuery)) {
    return cloudwatchQuery.logsMode === _types__WEBPACK_IMPORTED_MODULE_0__.LogsMode.Anomalies;
  }
  return false;
};
const isCloudWatchMetricsQuery = (cloudwatchQuery) => cloudwatchQuery.queryMode === "Metrics" || !cloudwatchQuery.hasOwnProperty("queryMode");
const isCloudWatchAnnotationQuery = (cloudwatchQuery) => cloudwatchQuery.queryMode === "Annotations";
const isCloudWatchAnnotation = (query) => query.target?.queryMode === "Annotations";


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/hooks.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAccountOptions: () => (/* binding */ useAccountOptions),
/* harmony export */   useDimensionKeys: () => (/* binding */ useDimensionKeys),
/* harmony export */   useEnsureVariableHasSingleSelection: () => (/* binding */ useEnsureVariableHasSingleSelection),
/* harmony export */   useIsMonitoringAccount: () => (/* binding */ useIsMonitoringAccount),
/* harmony export */   useMetrics: () => (/* binding */ useMetrics),
/* harmony export */   useNamespaces: () => (/* binding */ useNamespaces),
/* harmony export */   useRegions: () => (/* binding */ useRegions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useDeepCompareEffect.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/utils.ts");






const useRegions = (datasource) => {
  const [regionsIsLoading, setRegionsIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [regions, setRegions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{ label: "default", value: "default" }]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setRegionsIsLoading(true);
    const variableOptionGroup = {
      label: "Template Variables",
      options: datasource.getVariables().map(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.toOption)
    };
    datasource.resources.getRegions().then((regions2) => setRegions([...regions2, variableOptionGroup])).finally(() => setRegionsIsLoading(false));
  }, [datasource]);
  return [regions, regionsIsLoading];
};
const useNamespaces = (datasource) => {
  const [namespaces, setNamespaces] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    datasource.resources.getNamespaces().then((namespaces2) => {
      setNamespaces((0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.appendTemplateVariables)(datasource, namespaces2));
    });
  }, [datasource]);
  return namespaces;
};
const useMetrics = (datasource, { region, namespace, accountId }) => {
  const [metrics, setMetrics] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  if (region) {
    region = datasource.templateSrv.replace(region, {});
  }
  if (namespace) {
    namespace = datasource.templateSrv.replace(namespace, {});
  }
  if (accountId) {
    accountId = datasource.templateSrv.replace(accountId, {});
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    datasource.resources.getMetrics({ namespace, region, accountId }).then((result) => {
      setMetrics((0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.appendTemplateVariables)(datasource, result));
    });
  }, [datasource, region, namespace, accountId]);
  return metrics;
};
const useDimensionKeys = (datasource, { region, namespace, metricName, dimensionFilters, accountId }) => {
  const [dimensionKeys, setDimensionKeys] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  if (region) {
    region = datasource.templateSrv.replace(region, {});
  }
  if (namespace) {
    namespace = datasource.templateSrv.replace(namespace, {});
  }
  if (metricName) {
    metricName = datasource.templateSrv.replace(metricName, {});
  }
  if (accountId) {
    accountId = datasource.templateSrv.replace(accountId, {});
  }
  if (dimensionFilters) {
    dimensionFilters = datasource.resources.convertDimensionFormat(dimensionFilters, {}, false);
  }
  (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(() => {
    datasource.resources.getDimensionKeys({ namespace, region, metricName, accountId, dimensionFilters }, false).then((result) => {
      setDimensionKeys((0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.appendTemplateVariables)(datasource, result));
    });
  }, [datasource, namespace, region, metricName, accountId, dimensionFilters]);
  return dimensionKeys;
};
const useEnsureVariableHasSingleSelection = (datasource, target) => {
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const interpolatedTarget = datasource.templateSrv.replace(target);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (datasource.resources.isVariableWithMultipleOptionsSelected(target)) {
      const newErrorMessage = `Template variables with multiple selected options are not supported for ${target}`;
      if (error !== newErrorMessage) {
        setError(newErrorMessage);
      }
      return;
    }
    if (error) {
      setError("");
    }
  }, [datasource.resources, target, interpolatedTarget, error]);
  return error;
};
const useIsMonitoringAccount = (resources, region) => {
  const [isMonitoringAccount, setIsMonitoringAccount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  if (region) {
    region = resources.templateSrv.replace(region, {});
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.featureToggles.cloudWatchCrossAccountQuerying) {
      resources.isMonitoringAccount(region).then((result) => setIsMonitoringAccount(result));
    }
  }, [region, resources]);
  return isMonitoringAccount;
};
const useAccountOptions = (resources, region) => {
  if (region) {
    region = resources?.templateSrv.replace(region, {}) ?? "";
  }
  const fetchAccountOptions = async () => {
    if (!_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.featureToggles.cloudWatchCrossAccountQuerying) {
      return Promise.resolve([]);
    }
    const accounts = await resources?.getAccounts({ region }) ?? [];
    if (accounts.length === 0) {
      return [];
    }
    const options = accounts.map((a) => ({
      label: a.label,
      value: a.id,
      description: a.id
    }));
    const variableOptions = resources?.getVariables().map(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.toOption) || [];
    const variableOptionGroup = {
      label: "Template Variables",
      options: variableOptions
    };
    return [...options, variableOptionGroup];
  };
  const [state, doFetch] = (0,react_use__WEBPACK_IMPORTED_MODULE_1__["default"])(fetchAccountOptions, [resources, region]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    doFetch();
  }, [resources, region, doFetch]);
  return state;
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-logs-sql/completion/CompletionItemProvider.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogsSQLCompletionItemProvider: () => (/* binding */ LogsSQLCompletionItemProvider),
/* harmony export */   LogsSQLCompletionItemProviderFunc: () => (/* binding */ LogsSQLCompletionItemProviderFunc)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _monarch_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/CompletionItemProvider.ts");
/* harmony import */ var _monarch_commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/commands.ts");
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/utils.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-logs-sql/language.ts");
/* harmony import */ var _statementPosition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-logs-sql/completion/statementPosition.ts");
/* harmony import */ var _suggestionKind__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-logs-sql/completion/suggestionKind.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-logs-sql/completion/types.ts");










function LogsSQLCompletionItemProviderFunc(resources, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getTemplateSrv)()) {
  return (queryContext) => {
    return new LogsSQLCompletionItemProvider(resources, templateSrv, queryContext);
  };
}
class LogsSQLCompletionItemProvider extends _monarch_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_1__.CompletionItemProvider {
  constructor(resources, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getTemplateSrv)(), queryContext) {
    super(resources, templateSrv);
    this.region = resources.getActualRegion() ?? "";
    this.getStatementPosition = _statementPosition__WEBPACK_IMPORTED_MODULE_6__.getStatementPosition;
    this.getSuggestionKinds = _suggestionKind__WEBPACK_IMPORTED_MODULE_7__.getSuggestionKinds;
    this.tokenTypes = _types__WEBPACK_IMPORTED_MODULE_8__.SQLTokenTypes;
    this.queryContext = queryContext;
  }
  async getSuggestions(monaco, currentToken, suggestionKinds, statementPosition, position) {
    let suggestions = [];
    const invalidRangeToken = currentToken?.isWhiteSpace() || currentToken?.isParenthesis();
    const range = invalidRangeToken || !currentToken?.range ? monaco.Range.fromPositions(position) : currentToken?.range;
    const toCompletionItem = (value, rest = {}) => {
      const item = {
        label: value,
        insertText: value,
        kind: monaco.languages.CompletionItemKind.Field,
        range,
        sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.Medium,
        ...rest
      };
      return item;
    };
    function addSuggestion(value, rest = {}) {
      suggestions = [...suggestions, toCompletionItem(value, rest)];
    }
    for (const suggestion of suggestionKinds) {
      switch (suggestion) {
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.SelectKeyword:
          addSuggestion(_language__WEBPACK_IMPORTED_MODULE_5__.SELECT, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.SELECT} $0`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            kind: monaco.languages.CompletionItemKind.Keyword,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.AfterSelectKeyword:
          addSuggestion(_language__WEBPACK_IMPORTED_MODULE_5__.ALL, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.ALL} `,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST,
            kind: monaco.languages.CompletionItemKind.Keyword
          });
          addSuggestion(_language__WEBPACK_IMPORTED_MODULE_5__.DISTINCT, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.DISTINCT} `,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST,
            kind: monaco.languages.CompletionItemKind.Keyword
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.FunctionsWithArguments:
          _language__WEBPACK_IMPORTED_MODULE_5__.ALL_FUNCTIONS.map(
            (s) => addSuggestion(s, {
              insertText: `${s}($0)`,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST,
              kind: monaco.languages.CompletionItemKind.Function
            })
          );
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.FromKeyword:
          addSuggestion(_language__WEBPACK_IMPORTED_MODULE_5__.FROM, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.FROM} $0`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            kind: monaco.languages.CompletionItemKind.Keyword,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST,
            sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.MediumHigh
          });
          addSuggestion(`${_language__WEBPACK_IMPORTED_MODULE_5__.FROM} \`logGroups(logGroupIdentifier: [...])\``, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.FROM} \`logGroups(logGroupIdentifier: [$0])\``,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            kind: monaco.languages.CompletionItemKind.Keyword,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST,
            sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.MediumHigh
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.AfterFromKeyword:
          addSuggestion("`logGroups(logGroupIdentifier: [...])`", {
            insertText: "`logGroups(logGroupIdentifier: [$0])`",
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            kind: monaco.languages.CompletionItemKind.Function,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.LogicalOperators:
          _language__WEBPACK_IMPORTED_MODULE_5__.LOGICAL_OPERATORS.map(
            (o) => addSuggestion(`${o}`, {
              insertText: `${o} `,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST,
              sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.MediumHigh
            })
          );
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.WhereKeyword:
          addSuggestion(`${_language__WEBPACK_IMPORTED_MODULE_5__.WHERE}`, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.WHERE} `,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST,
            sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.High
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.HavingKeywords:
          addSuggestion(`${_language__WEBPACK_IMPORTED_MODULE_5__.HAVING}`, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.HAVING} `,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.ComparisonOperators:
          _language__WEBPACK_IMPORTED_MODULE_5__.PREDICATE_OPERATORS.map((o) => addSuggestion(`${o}`, { insertText: `${o} `, command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST }));
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.CaseKeyword:
          addSuggestion(_language__WEBPACK_IMPORTED_MODULE_5__.CASE, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.CASE} `,
            kind: monaco.languages.CompletionItemKind.Keyword,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.WhenKeyword:
          addSuggestion(_language__WEBPACK_IMPORTED_MODULE_5__.WHEN, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.WHEN} `,
            kind: monaco.languages.CompletionItemKind.Keyword,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.ThenKeyword:
          addSuggestion(_language__WEBPACK_IMPORTED_MODULE_5__.THEN, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.THEN} `,
            kind: monaco.languages.CompletionItemKind.Keyword,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.AfterThenExpression:
          addSuggestion(`${_language__WEBPACK_IMPORTED_MODULE_5__.ELSE} ... ${_language__WEBPACK_IMPORTED_MODULE_5__.END}`, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.ELSE} $0 ${_language__WEBPACK_IMPORTED_MODULE_5__.END}`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            kind: monaco.languages.CompletionItemKind.Keyword,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.GroupByKeywords:
          addSuggestion(`${_language__WEBPACK_IMPORTED_MODULE_5__.GROUP} ${_language__WEBPACK_IMPORTED_MODULE_5__.BY}`, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.GROUP} ${_language__WEBPACK_IMPORTED_MODULE_5__.BY} `,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST,
            sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.MediumHigh
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.OrderByKeywords:
          addSuggestion(`${_language__WEBPACK_IMPORTED_MODULE_5__.ORDER} ${_language__WEBPACK_IMPORTED_MODULE_5__.BY}`, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.ORDER} ${_language__WEBPACK_IMPORTED_MODULE_5__.BY} `,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST,
            sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.Medium
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.JoinKeywords:
          addSuggestion(`${_language__WEBPACK_IMPORTED_MODULE_5__.INNER} ${_language__WEBPACK_IMPORTED_MODULE_5__.JOIN} <log group> ${_language__WEBPACK_IMPORTED_MODULE_5__.ON} <field>`, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.INNER} ${_language__WEBPACK_IMPORTED_MODULE_5__.JOIN} $1 ${_language__WEBPACK_IMPORTED_MODULE_5__.ON} $2`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            kind: monaco.languages.CompletionItemKind.Keyword,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST,
            sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.MediumLow
          });
          addSuggestion(`${_language__WEBPACK_IMPORTED_MODULE_5__.LEFT} ${_language__WEBPACK_IMPORTED_MODULE_5__.OUTER} ${_language__WEBPACK_IMPORTED_MODULE_5__.JOIN} <log group> ${_language__WEBPACK_IMPORTED_MODULE_5__.ON} <field>`, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.LEFT} ${_language__WEBPACK_IMPORTED_MODULE_5__.OUTER} ${_language__WEBPACK_IMPORTED_MODULE_5__.JOIN} $1 ${_language__WEBPACK_IMPORTED_MODULE_5__.ON} $2`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            kind: monaco.languages.CompletionItemKind.Keyword,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST,
            sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.MediumLow
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.LimitKeyword:
          addSuggestion(_language__WEBPACK_IMPORTED_MODULE_5__.LIMIT, { insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.LIMIT} ` });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.SortOrderDirectionKeyword:
          [_language__WEBPACK_IMPORTED_MODULE_5__.ASC, _language__WEBPACK_IMPORTED_MODULE_5__.DESC].map(
            (s) => addSuggestion(s, {
              insertText: `${s} `,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
            })
          );
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.Field:
          const fields = await (0,_utils__WEBPACK_IMPORTED_MODULE_4__.fetchLogGroupFields)(
            this.queryContext.logGroups || [],
            this.queryContext.region,
            this.templateSrv,
            this.resources
          );
          fields.forEach((field) => {
            if (field !== "") {
              addSuggestion(field, {
                label: field,
                insertText: `\`${field}\``,
                kind: monaco.languages.CompletionItemKind.Field
              });
            }
          });
          break;
      }
    }
    this.templateSrv.getVariables().map((v) => {
      const variable = `$${v.name}`;
      addSuggestion(variable, {
        range,
        label: variable,
        insertText: variable,
        kind: monaco.languages.CompletionItemKind.Variable,
        sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.Low
      });
    });
    return suggestions;
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-logs-sql/completion/statementPosition.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStatementPosition: () => (/* binding */ getStatementPosition)
/* harmony export */ });
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/types.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-logs-sql/language.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-logs-sql/completion/types.ts");




function getStatementPosition(currentToken) {
  const previousNonWhiteSpace = currentToken?.getPreviousNonWhiteSpaceToken();
  const previousKeyword = currentToken?.getPreviousKeyword();
  const normalizedPreviousNonWhiteSpaceValue = previousNonWhiteSpace?.value?.toUpperCase() || "";
  const normalizedPreviousKeywordValue = previousKeyword?.value?.toUpperCase() || "";
  let previousNonAliasKeywordValue = previousKeyword;
  let normalizedPreviousNonAliasKeywordValue = normalizedPreviousKeywordValue;
  while (normalizedPreviousNonAliasKeywordValue === _language__WEBPACK_IMPORTED_MODULE_1__.AS) {
    previousNonAliasKeywordValue = previousNonAliasKeywordValue?.getPreviousKeyword();
    normalizedPreviousNonAliasKeywordValue = previousNonAliasKeywordValue?.value.toUpperCase() || "";
  }
  const isPreviousSelectKeywordGroup = normalizedPreviousNonAliasKeywordValue === _language__WEBPACK_IMPORTED_MODULE_1__.SELECT || [_language__WEBPACK_IMPORTED_MODULE_1__.ALL, _language__WEBPACK_IMPORTED_MODULE_1__.DISTINCT].includes(normalizedPreviousNonAliasKeywordValue) && previousNonAliasKeywordValue?.getPreviousKeyword()?.value.toUpperCase() === _language__WEBPACK_IMPORTED_MODULE_1__.SELECT;
  if (currentToken?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Comment) || currentToken?.is("comment.quote.cloudwatch-logs-sql")) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.Comment;
  }
  if (currentToken === null || currentToken.previous === null && currentToken.isIdentifier() || currentToken.previous === null && currentToken.isWhiteSpace() || currentToken.previous === null && currentToken.isKeyword() && currentToken.value.toUpperCase() === _language__WEBPACK_IMPORTED_MODULE_1__.SELECT) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SelectKeyword;
  }
  if ((currentToken.isWhiteSpace() || currentToken.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, ")")) && normalizedPreviousNonWhiteSpaceValue === _language__WEBPACK_IMPORTED_MODULE_1__.SELECT) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterSelectKeyword;
  }
  if (isPreviousSelectKeywordGroup && (currentToken.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Delimiter, ",") || currentToken.isWhiteSpace() && previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Delimiter, ",") || currentToken.isWhiteSpace() && previousNonWhiteSpace?.isKeyword() || currentToken.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, ")") && (previousNonWhiteSpace?.isKeyword() || previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Delimiter, ",")))) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SelectExpression;
  }
  if (isPreviousSelectKeywordGroup && (currentToken.isWhiteSpace() || currentToken.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, ")")) && (previousNonWhiteSpace?.isIdentifier() || previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, ")") || previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, "()") || previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Operator, "*"))) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterSelectExpression;
  }
  if (currentToken.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, "()") && normalizedPreviousNonAliasKeywordValue === _language__WEBPACK_IMPORTED_MODULE_1__.WHERE && normalizedPreviousNonWhiteSpaceValue === _language__WEBPACK_IMPORTED_MODULE_1__.IN) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.Subquery;
  }
  if ((currentToken.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, "()") || currentToken.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, "())")) && previousNonWhiteSpace?.isFunction() || currentToken.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Delimiter, ",") && currentToken.getPreviousOfType(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, "(")?.getPreviousNonWhiteSpaceToken()?.isFunction() || currentToken.isWhiteSpace() && previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Delimiter, ",") && currentToken.getPreviousOfType(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, "(")?.getPreviousNonWhiteSpaceToken()?.isFunction() || currentToken.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, ")") && previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Delimiter, ",") && currentToken.getPreviousOfType(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, "(")?.getPreviousNonWhiteSpaceToken()?.isFunction()) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.PredefinedFunctionArgument;
  }
  if ((currentToken.isWhiteSpace() || currentToken.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, ")")) && normalizedPreviousNonWhiteSpaceValue === _language__WEBPACK_IMPORTED_MODULE_1__.FROM) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFromKeyword;
  }
  if (normalizedPreviousNonAliasKeywordValue === _language__WEBPACK_IMPORTED_MODULE_1__.FROM && (previousNonWhiteSpace?.isIdentifier() || previousNonWhiteSpace?.isDoubleQuotedString() || previousNonWhiteSpace?.isVariable() || previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, ")"))) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFromArguments;
  }
  if (_language__WEBPACK_IMPORTED_MODULE_1__.LOGICAL_OPERATORS.includes(normalizedPreviousNonWhiteSpaceValue) && [_language__WEBPACK_IMPORTED_MODULE_1__.WHERE, _language__WEBPACK_IMPORTED_MODULE_1__.HAVING, _language__WEBPACK_IMPORTED_MODULE_1__.ON, _language__WEBPACK_IMPORTED_MODULE_1__.CASE, _language__WEBPACK_IMPORTED_MODULE_1__.WHEN].includes(normalizedPreviousKeywordValue) || (currentToken.isWhiteSpace() || currentToken.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, ")")) && [_language__WEBPACK_IMPORTED_MODULE_1__.WHERE, _language__WEBPACK_IMPORTED_MODULE_1__.HAVING, _language__WEBPACK_IMPORTED_MODULE_1__.ON, _language__WEBPACK_IMPORTED_MODULE_1__.CASE, _language__WEBPACK_IMPORTED_MODULE_1__.WHEN].includes(normalizedPreviousNonWhiteSpaceValue)) {
    switch (normalizedPreviousKeywordValue) {
      case _language__WEBPACK_IMPORTED_MODULE_1__.WHERE:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhereKey;
      case _language__WEBPACK_IMPORTED_MODULE_1__.HAVING:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.HavingKey;
      case _language__WEBPACK_IMPORTED_MODULE_1__.ON:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.OnKey;
      case _language__WEBPACK_IMPORTED_MODULE_1__.CASE:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.CaseKey;
      case _language__WEBPACK_IMPORTED_MODULE_1__.WHEN:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhenKey;
    }
  }
  if (_language__WEBPACK_IMPORTED_MODULE_1__.LOGICAL_OPERATORS.includes(normalizedPreviousNonWhiteSpaceValue) && [_language__WEBPACK_IMPORTED_MODULE_1__.NULL, _language__WEBPACK_IMPORTED_MODULE_1__.TRUE, _language__WEBPACK_IMPORTED_MODULE_1__.FALSE].includes(normalizedPreviousKeywordValue) || (currentToken.isWhiteSpace() || currentToken.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, ")")) && [_language__WEBPACK_IMPORTED_MODULE_1__.NULL, _language__WEBPACK_IMPORTED_MODULE_1__.TRUE, _language__WEBPACK_IMPORTED_MODULE_1__.FALSE].includes(normalizedPreviousNonWhiteSpaceValue)) {
    let nearestPreviousKeyword = previousKeyword;
    let normalizedNearestPreviousKeywordValue = normalizedPreviousKeywordValue;
    while (![_language__WEBPACK_IMPORTED_MODULE_1__.WHERE, _language__WEBPACK_IMPORTED_MODULE_1__.HAVING, _language__WEBPACK_IMPORTED_MODULE_1__.ON, _language__WEBPACK_IMPORTED_MODULE_1__.CASE, _language__WEBPACK_IMPORTED_MODULE_1__.WHEN].includes(normalizedNearestPreviousKeywordValue)) {
      nearestPreviousKeyword = nearestPreviousKeyword?.getPreviousKeyword();
      normalizedNearestPreviousKeywordValue = nearestPreviousKeyword?.value.toUpperCase() || "";
    }
    switch (normalizedNearestPreviousKeywordValue) {
      case _language__WEBPACK_IMPORTED_MODULE_1__.WHERE:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhereKey;
      case _language__WEBPACK_IMPORTED_MODULE_1__.HAVING:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.HavingKey;
      case _language__WEBPACK_IMPORTED_MODULE_1__.ON:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.OnKey;
      case _language__WEBPACK_IMPORTED_MODULE_1__.CASE:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.CaseKey;
      case _language__WEBPACK_IMPORTED_MODULE_1__.WHEN:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhenKey;
    }
  }
  if ([_language__WEBPACK_IMPORTED_MODULE_1__.WHERE, _language__WEBPACK_IMPORTED_MODULE_1__.HAVING, _language__WEBPACK_IMPORTED_MODULE_1__.ON, _language__WEBPACK_IMPORTED_MODULE_1__.CASE, _language__WEBPACK_IMPORTED_MODULE_1__.WHEN].includes(normalizedPreviousKeywordValue) && _language__WEBPACK_IMPORTED_MODULE_1__.PREDICATE_OPERATORS.includes(normalizedPreviousNonWhiteSpaceValue)) {
    switch (normalizedPreviousKeywordValue) {
      case _language__WEBPACK_IMPORTED_MODULE_1__.WHERE:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhereValue;
      case _language__WEBPACK_IMPORTED_MODULE_1__.HAVING:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.HavingValue;
      case _language__WEBPACK_IMPORTED_MODULE_1__.ON:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.OnValue;
      case _language__WEBPACK_IMPORTED_MODULE_1__.CASE:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.CaseValue;
      case _language__WEBPACK_IMPORTED_MODULE_1__.WHEN:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhenValue;
    }
  }
  if ([_language__WEBPACK_IMPORTED_MODULE_1__.NULL, _language__WEBPACK_IMPORTED_MODULE_1__.TRUE, _language__WEBPACK_IMPORTED_MODULE_1__.FALSE].includes(normalizedPreviousKeywordValue) && _language__WEBPACK_IMPORTED_MODULE_1__.PREDICATE_OPERATORS.includes(normalizedPreviousNonWhiteSpaceValue)) {
    let nearestPreviousKeyword = previousKeyword;
    let normalizedNearestPreviousKeywordValue = normalizedPreviousKeywordValue;
    while (![_language__WEBPACK_IMPORTED_MODULE_1__.WHERE, _language__WEBPACK_IMPORTED_MODULE_1__.HAVING, _language__WEBPACK_IMPORTED_MODULE_1__.ON, _language__WEBPACK_IMPORTED_MODULE_1__.CASE, _language__WEBPACK_IMPORTED_MODULE_1__.WHEN].includes(normalizedNearestPreviousKeywordValue)) {
      nearestPreviousKeyword = nearestPreviousKeyword?.getPreviousKeyword();
      normalizedNearestPreviousKeywordValue = nearestPreviousKeyword?.value.toUpperCase() || "";
    }
    switch (normalizedNearestPreviousKeywordValue) {
      case _language__WEBPACK_IMPORTED_MODULE_1__.WHERE:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhereValue;
      case _language__WEBPACK_IMPORTED_MODULE_1__.HAVING:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.HavingValue;
      case _language__WEBPACK_IMPORTED_MODULE_1__.ON:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.OnValue;
      case _language__WEBPACK_IMPORTED_MODULE_1__.CASE:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.CaseValue;
      case _language__WEBPACK_IMPORTED_MODULE_1__.WHEN:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhenValue;
    }
  }
  if ([_language__WEBPACK_IMPORTED_MODULE_1__.WHERE, _language__WEBPACK_IMPORTED_MODULE_1__.HAVING, _language__WEBPACK_IMPORTED_MODULE_1__.ON, _language__WEBPACK_IMPORTED_MODULE_1__.CASE, _language__WEBPACK_IMPORTED_MODULE_1__.WHEN].includes(normalizedPreviousKeywordValue) && (previousNonWhiteSpace?.isIdentifier() || previousNonWhiteSpace?.isDoubleQuotedString() || previousNonWhiteSpace?.isFunction() || previousNonWhiteSpace?.isNumber() || previousNonWhiteSpace?.isString() || previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, ")") || previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, "()"))) {
    const previousTokens = currentToken.getPreviousUntil(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, [], normalizedPreviousKeywordValue);
    const numPredicateOperators = previousTokens?.filter((token) => _language__WEBPACK_IMPORTED_MODULE_1__.PREDICATE_OPERATORS.includes(token.value.toUpperCase())).length || 0;
    const numLogicalOperators = previousTokens?.filter((token) => _language__WEBPACK_IMPORTED_MODULE_1__.LOGICAL_OPERATORS.includes(token.value.toUpperCase())).length || 0;
    if (numPredicateOperators - numLogicalOperators === 0) {
      switch (normalizedPreviousKeywordValue) {
        case _language__WEBPACK_IMPORTED_MODULE_1__.WHERE:
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhereComparisonOperator;
        case _language__WEBPACK_IMPORTED_MODULE_1__.HAVING:
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.HavingComparisonOperator;
        case _language__WEBPACK_IMPORTED_MODULE_1__.ON:
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.OnComparisonOperator;
        case _language__WEBPACK_IMPORTED_MODULE_1__.CASE:
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.CaseComparisonOperator;
        case _language__WEBPACK_IMPORTED_MODULE_1__.WHEN:
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhenComparisonOperator;
      }
    } else {
      switch (normalizedPreviousKeywordValue) {
        case _language__WEBPACK_IMPORTED_MODULE_1__.WHERE:
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterWhereValue;
        case _language__WEBPACK_IMPORTED_MODULE_1__.HAVING:
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterHavingValue;
        case _language__WEBPACK_IMPORTED_MODULE_1__.ON:
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterOnValue;
        case _language__WEBPACK_IMPORTED_MODULE_1__.CASE:
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterCaseValue;
        case _language__WEBPACK_IMPORTED_MODULE_1__.WHEN:
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterWhenValue;
      }
    }
  }
  if ([_language__WEBPACK_IMPORTED_MODULE_1__.NULL, _language__WEBPACK_IMPORTED_MODULE_1__.TRUE, _language__WEBPACK_IMPORTED_MODULE_1__.FALSE].includes(normalizedPreviousKeywordValue) && _language__WEBPACK_IMPORTED_MODULE_1__.PREDICATE_OPERATORS.includes(previousKeyword?.getPreviousNonWhiteSpaceToken()?.value.toUpperCase() || "")) {
    let nearestPreviousKeyword = previousKeyword?.getPreviousKeyword();
    let normalizedNearestPreviousKeywordValue = nearestPreviousKeyword?.value.toUpperCase() || "";
    while (![_language__WEBPACK_IMPORTED_MODULE_1__.WHERE, _language__WEBPACK_IMPORTED_MODULE_1__.HAVING, _language__WEBPACK_IMPORTED_MODULE_1__.ON, _language__WEBPACK_IMPORTED_MODULE_1__.CASE, _language__WEBPACK_IMPORTED_MODULE_1__.WHEN].includes(normalizedNearestPreviousKeywordValue)) {
      nearestPreviousKeyword = nearestPreviousKeyword?.getPreviousKeyword();
      normalizedNearestPreviousKeywordValue = nearestPreviousKeyword?.value.toUpperCase() || "";
    }
    const previousTokens = currentToken.getPreviousUntil(
      _types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword,
      [],
      normalizedNearestPreviousKeywordValue
    );
    const numPredicateOperators = previousTokens?.filter((token) => _language__WEBPACK_IMPORTED_MODULE_1__.PREDICATE_OPERATORS.includes(token.value.toUpperCase())).length || 0;
    const numLogicalOperators = previousTokens?.filter((token) => _language__WEBPACK_IMPORTED_MODULE_1__.LOGICAL_OPERATORS.includes(token.value.toUpperCase())).length || 0;
    if (numPredicateOperators - numLogicalOperators === 0) {
      switch (normalizedNearestPreviousKeywordValue) {
        case _language__WEBPACK_IMPORTED_MODULE_1__.WHERE:
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhereComparisonOperator;
        case _language__WEBPACK_IMPORTED_MODULE_1__.HAVING:
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.HavingComparisonOperator;
        case _language__WEBPACK_IMPORTED_MODULE_1__.ON:
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.OnComparisonOperator;
        case _language__WEBPACK_IMPORTED_MODULE_1__.CASE:
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.CaseComparisonOperator;
        case _language__WEBPACK_IMPORTED_MODULE_1__.WHEN:
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhenComparisonOperator;
      }
    } else {
      switch (normalizedNearestPreviousKeywordValue) {
        case _language__WEBPACK_IMPORTED_MODULE_1__.WHERE:
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterWhereValue;
        case _language__WEBPACK_IMPORTED_MODULE_1__.HAVING:
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterHavingValue;
        case _language__WEBPACK_IMPORTED_MODULE_1__.ON:
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterOnValue;
        case _language__WEBPACK_IMPORTED_MODULE_1__.CASE:
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterCaseValue;
        case _language__WEBPACK_IMPORTED_MODULE_1__.WHEN:
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterWhenValue;
      }
    }
  }
  if (currentToken.isWhiteSpace() && normalizedPreviousNonWhiteSpaceValue === _language__WEBPACK_IMPORTED_MODULE_1__.THEN) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.ThenExpression;
  }
  if (currentToken.isWhiteSpace() && normalizedPreviousKeywordValue === _language__WEBPACK_IMPORTED_MODULE_1__.THEN && normalizedPreviousNonWhiteSpaceValue !== _language__WEBPACK_IMPORTED_MODULE_1__.THEN) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterThenExpression;
  }
  if (currentToken.isWhiteSpace() && normalizedPreviousNonWhiteSpaceValue === _language__WEBPACK_IMPORTED_MODULE_1__.ELSE) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterElseKeyword;
  }
  if (normalizedPreviousNonWhiteSpaceValue === _language__WEBPACK_IMPORTED_MODULE_1__.END && currentToken.isWhiteSpace()) {
    let nearestCaseKeyword = previousKeyword;
    while (_language__WEBPACK_IMPORTED_MODULE_1__.CASE !== nearestCaseKeyword?.value.toUpperCase()) {
      nearestCaseKeyword = nearestCaseKeyword?.getPreviousKeyword();
    }
    const nearestKeywordBeforeCaseKeywordValue = nearestCaseKeyword.getPreviousKeyword()?.value.toUpperCase() || "";
    switch (nearestKeywordBeforeCaseKeywordValue) {
      case _language__WEBPACK_IMPORTED_MODULE_1__.SELECT:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterSelectExpression;
      case _language__WEBPACK_IMPORTED_MODULE_1__.WHERE:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterWhereValue;
    }
  }
  if (normalizedPreviousKeywordValue === _language__WEBPACK_IMPORTED_MODULE_1__.BY && previousKeyword?.getPreviousKeyword()?.value.toUpperCase() === _language__WEBPACK_IMPORTED_MODULE_1__.GROUP && (previousNonWhiteSpace?.value.toUpperCase() === _language__WEBPACK_IMPORTED_MODULE_1__.BY || previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Delimiter, ","))) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterGroupByKeywords;
  }
  if (normalizedPreviousKeywordValue === _language__WEBPACK_IMPORTED_MODULE_1__.BY && previousKeyword?.getPreviousKeyword()?.value.toUpperCase() === _language__WEBPACK_IMPORTED_MODULE_1__.GROUP && (previousNonWhiteSpace?.isIdentifier() || previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, ")") || previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, "()"))) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterGroupBy;
  }
  if (normalizedPreviousKeywordValue === _language__WEBPACK_IMPORTED_MODULE_1__.BY && previousKeyword?.getPreviousKeyword()?.value.toUpperCase() === _language__WEBPACK_IMPORTED_MODULE_1__.ORDER) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterOrderByKeywords;
  }
  if ([_language__WEBPACK_IMPORTED_MODULE_1__.DESC, _language__WEBPACK_IMPORTED_MODULE_1__.ASC].includes(normalizedPreviousKeywordValue)) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterOrderByDirection;
  }
  return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.Unknown;
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-logs-sql/completion/suggestionKind.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSuggestionKinds: () => (/* binding */ getSuggestionKinds)
/* harmony export */ });
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/types.ts");


function getSuggestionKinds(statementPosition) {
  switch (statementPosition) {
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SelectKeyword:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.SelectKeyword];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterSelectKeyword:
      return [
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.AfterSelectKeyword,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.CaseKeyword
      ];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SelectExpression:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.CaseKeyword];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterSelectExpression:
      return [
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FromKeyword,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.CaseKeyword
      ];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FromKeyword:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FromKeyword, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFromKeyword:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.AfterFromKeyword];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFromArguments:
      return [
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.WhereKeyword,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.GroupByKeywords,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.OrderByKeywords,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LimitKeyword,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.JoinKeywords,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.HavingKeywords
      ];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhereKey:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.CaseKeyword];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhereComparisonOperator:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.ComparisonOperators];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhereValue:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterWhereValue:
      return [
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LogicalOperators,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.GroupByKeywords,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.OrderByKeywords,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LimitKeyword
      ];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.HavingKey:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.HavingComparisonOperator:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.ComparisonOperators];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.HavingValue:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterHavingValue:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LogicalOperators, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.OrderByKeywords, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LimitKeyword];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.OnKey:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.OnComparisonOperator:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.ComparisonOperators];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.OnValue:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterOnValue:
      return [
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LogicalOperators,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.GroupByKeywords,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.OrderByKeywords,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LimitKeyword
      ];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.CaseKey:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.WhenKeyword, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.CaseComparisonOperator:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.ComparisonOperators, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.WhenKeyword];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.CaseValue:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterCaseValue:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.WhenKeyword];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhenKey:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhenComparisonOperator:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.ComparisonOperators, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.ThenKeyword];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhenValue:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterWhenValue:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.ThenKeyword];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.ThenExpression:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterThenExpression:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.WhenKeyword, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.AfterThenExpression];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterElseKeyword:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterGroupByKeywords:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterGroupBy:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.OrderByKeywords, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LimitKeyword, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.HavingKeywords];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterOrderByKeywords:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.SortOrderDirectionKeyword, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LimitKeyword, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterOrderByDirection:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LimitKeyword];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.PredefinedFunctionArgument:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.Subquery:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.SelectKeyword, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field];
  }
  return [];
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-logs-sql/completion/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SQLTokenTypes: () => (/* binding */ SQLTokenTypes)
/* harmony export */ });
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-logs-sql/definition.ts");


const SQLTokenTypes = {
  Parenthesis: `delimiter.parenthesis.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_SQL_LANGUAGE_DEFINITION_ID}`,
  Whitespace: `white.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_SQL_LANGUAGE_DEFINITION_ID}`,
  Keyword: `keyword.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_SQL_LANGUAGE_DEFINITION_ID}`,
  Delimiter: `delimiter.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_SQL_LANGUAGE_DEFINITION_ID}`,
  Operator: `operator.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_SQL_LANGUAGE_DEFINITION_ID}`,
  Identifier: `identifier.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_SQL_LANGUAGE_DEFINITION_ID}`,
  Type: `type.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_SQL_LANGUAGE_DEFINITION_ID}`,
  Function: `predefined.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_SQL_LANGUAGE_DEFINITION_ID}`,
  Number: `number.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_SQL_LANGUAGE_DEFINITION_ID}`,
  String: `string.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_SQL_LANGUAGE_DEFINITION_ID}`,
  Variable: `variable.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_SQL_LANGUAGE_DEFINITION_ID}`,
  Comment: `comment.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_SQL_LANGUAGE_DEFINITION_ID}`,
  Regexp: `regexp.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_SQL_LANGUAGE_DEFINITION_ID}`
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-logs-sql/definition.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLOUDWATCH_LOGS_SQL_LANGUAGE_DEFINITION_ID: () => (/* binding */ CLOUDWATCH_LOGS_SQL_LANGUAGE_DEFINITION_ID),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const CLOUDWATCH_LOGS_SQL_LANGUAGE_DEFINITION_ID = "cloudwatch-logs-sql";
const cloudWatchLogsSqlLanguageDefinition = {
  id: CLOUDWATCH_LOGS_SQL_LANGUAGE_DEFINITION_ID,
  extensions: [],
  aliases: [],
  mimetypes: [],
  loader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-logs-sql/language.ts"))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudWatchLogsSqlLanguageDefinition);


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-logs-sql/language.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AFTER_SELECT_KEYWORDS: () => (/* binding */ AFTER_SELECT_KEYWORDS),
/* harmony export */   AGGREGATE_FUNCTIONS: () => (/* binding */ AGGREGATE_FUNCTIONS),
/* harmony export */   ALL: () => (/* binding */ ALL),
/* harmony export */   ALL_FUNCTIONS: () => (/* binding */ ALL_FUNCTIONS),
/* harmony export */   ALL_KEYWORDS: () => (/* binding */ ALL_KEYWORDS),
/* harmony export */   ALL_OPERATORS: () => (/* binding */ ALL_OPERATORS),
/* harmony export */   AND: () => (/* binding */ AND),
/* harmony export */   ANY: () => (/* binding */ ANY),
/* harmony export */   ARRAY_FUNCTIONS: () => (/* binding */ ARRAY_FUNCTIONS),
/* harmony export */   AS: () => (/* binding */ AS),
/* harmony export */   ASC: () => (/* binding */ ASC),
/* harmony export */   BETWEEN: () => (/* binding */ BETWEEN),
/* harmony export */   BY: () => (/* binding */ BY),
/* harmony export */   CASE: () => (/* binding */ CASE),
/* harmony export */   CONDITIONAL_FUNCTIONS: () => (/* binding */ CONDITIONAL_FUNCTIONS),
/* harmony export */   CONVERSION_FUNCTIONS: () => (/* binding */ CONVERSION_FUNCTIONS),
/* harmony export */   CUBE: () => (/* binding */ CUBE),
/* harmony export */   DATE_AND_TIMESTAMP_FUNCTIONS: () => (/* binding */ DATE_AND_TIMESTAMP_FUNCTIONS),
/* harmony export */   DESC: () => (/* binding */ DESC),
/* harmony export */   DISTINCT: () => (/* binding */ DISTINCT),
/* harmony export */   DOUBLE_EQUALS: () => (/* binding */ DOUBLE_EQUALS),
/* harmony export */   ELSE: () => (/* binding */ ELSE),
/* harmony export */   END: () => (/* binding */ END),
/* harmony export */   EQUAL: () => (/* binding */ EQUAL),
/* harmony export */   ESCAPE: () => (/* binding */ ESCAPE),
/* harmony export */   EXISTS: () => (/* binding */ EXISTS),
/* harmony export */   FALSE: () => (/* binding */ FALSE),
/* harmony export */   FILTER: () => (/* binding */ FILTER),
/* harmony export */   FIRST: () => (/* binding */ FIRST),
/* harmony export */   FROM: () => (/* binding */ FROM),
/* harmony export */   GREATER_THAN: () => (/* binding */ GREATER_THAN),
/* harmony export */   GREATER_THAN_EQUAL: () => (/* binding */ GREATER_THAN_EQUAL),
/* harmony export */   GROUP: () => (/* binding */ GROUP),
/* harmony export */   GROUPING: () => (/* binding */ GROUPING),
/* harmony export */   HAVING: () => (/* binding */ HAVING),
/* harmony export */   ILIKE: () => (/* binding */ ILIKE),
/* harmony export */   IN: () => (/* binding */ IN),
/* harmony export */   INNER: () => (/* binding */ INNER),
/* harmony export */   IS: () => (/* binding */ IS),
/* harmony export */   JOIN: () => (/* binding */ JOIN),
/* harmony export */   JSON_FUNCTIONS: () => (/* binding */ JSON_FUNCTIONS),
/* harmony export */   KEYWORDS: () => (/* binding */ KEYWORDS),
/* harmony export */   LAST: () => (/* binding */ LAST),
/* harmony export */   LEFT: () => (/* binding */ LEFT),
/* harmony export */   LESS_THAN: () => (/* binding */ LESS_THAN),
/* harmony export */   LESS_THAN_EQUAL: () => (/* binding */ LESS_THAN_EQUAL),
/* harmony export */   LIKE: () => (/* binding */ LIKE),
/* harmony export */   LIMIT: () => (/* binding */ LIMIT),
/* harmony export */   LOGICAL_OPERATORS: () => (/* binding */ LOGICAL_OPERATORS),
/* harmony export */   MATHEMATICAL_FUNCTIONS: () => (/* binding */ MATHEMATICAL_FUNCTIONS),
/* harmony export */   MATH_OPERATORS: () => (/* binding */ MATH_OPERATORS),
/* harmony export */   NOT: () => (/* binding */ NOT),
/* harmony export */   NOT_EQUAL: () => (/* binding */ NOT_EQUAL),
/* harmony export */   NULL: () => (/* binding */ NULL),
/* harmony export */   NULL_SAFE_EQUAL: () => (/* binding */ NULL_SAFE_EQUAL),
/* harmony export */   ON: () => (/* binding */ ON),
/* harmony export */   OR: () => (/* binding */ OR),
/* harmony export */   ORDER: () => (/* binding */ ORDER),
/* harmony export */   OUTER: () => (/* binding */ OUTER),
/* harmony export */   PREDICATE_FUNCTIONS: () => (/* binding */ PREDICATE_FUNCTIONS),
/* harmony export */   PREDICATE_OPERATORS: () => (/* binding */ PREDICATE_OPERATORS),
/* harmony export */   ROLLUP: () => (/* binding */ ROLLUP),
/* harmony export */   SELECT: () => (/* binding */ SELECT),
/* harmony export */   SETS: () => (/* binding */ SETS),
/* harmony export */   SOME: () => (/* binding */ SOME),
/* harmony export */   STRING_FUNCTIONS: () => (/* binding */ STRING_FUNCTIONS),
/* harmony export */   THEN: () => (/* binding */ THEN),
/* harmony export */   TRUE: () => (/* binding */ TRUE),
/* harmony export */   USING: () => (/* binding */ USING),
/* harmony export */   WHEN: () => (/* binding */ WHEN),
/* harmony export */   WHERE: () => (/* binding */ WHERE),
/* harmony export */   WINDOW_FUNCTIONS: () => (/* binding */ WINDOW_FUNCTIONS),
/* harmony export */   WITH: () => (/* binding */ WITH),
/* harmony export */   conf: () => (/* binding */ conf),
/* harmony export */   language: () => (/* binding */ language)
/* harmony export */ });

const ALL = "ALL";
const AND = "AND";
const ANY = "ANY";
const AS = "AS";
const ASC = "ASC";
const BETWEEN = "BETWEEN";
const BY = "BY";
const CASE = "CASE";
const CUBE = "CUBE";
const DESC = "DESC";
const DISTINCT = "DISTINCT";
const ELSE = "ELSE";
const END = "END";
const ESCAPE = "ESCAPE";
const EXISTS = "EXISTS";
const FALSE = "FALSE";
const FILTER = "FILTER";
const FIRST = "FIRST";
const FROM = "FROM";
const GROUP = "GROUP";
const GROUPING = "GROUPING";
const HAVING = "HAVING";
const ILIKE = "ILIKE";
const IN = "IN";
const INNER = "INNER";
const IS = "IS";
const JOIN = "JOIN";
const LAST = "LAST";
const LEFT = "LEFT";
const LIKE = "LIKE";
const LIMIT = "LIMIT";
const NOT = "NOT";
const NULL = "NULL";
const ON = "ON";
const OR = "OR";
const ORDER = "ORDER";
const OUTER = "OUTER";
const ROLLUP = "ROLLUP";
const SELECT = "SELECT";
const SETS = "SETS";
const SOME = "SOME";
const THEN = "THEN";
const TRUE = "TRUE";
const USING = "USING";
const WHEN = "WHEN";
const WHERE = "WHERE";
const WITH = "WITH";
const KEYWORDS = [
  ALL,
  AND,
  ANY,
  AS,
  ASC,
  BETWEEN,
  BY,
  CASE,
  CUBE,
  DESC,
  DISTINCT,
  ELSE,
  END,
  ESCAPE,
  EXISTS,
  FALSE,
  FILTER,
  FIRST,
  FROM,
  GROUP,
  GROUPING,
  HAVING,
  ILIKE,
  IN,
  INNER,
  IS,
  JOIN,
  LAST,
  LEFT,
  LIKE,
  LIMIT,
  NOT,
  NULL,
  ON,
  OR,
  ORDER,
  OUTER,
  ROLLUP,
  SELECT,
  SETS,
  SOME,
  THEN,
  TRUE,
  USING,
  WHEN,
  WHERE,
  WITH
];
const AFTER_SELECT_KEYWORDS = [ALL, DISTINCT];
const ALL_KEYWORDS = [...KEYWORDS, ...AFTER_SELECT_KEYWORDS];
const AGGREGATE_FUNCTIONS = [
  "any",
  "any_value",
  "approx_count_distinct",
  "approx_percentile",
  "array_agg",
  "avg",
  "bit_and",
  "bit_or",
  "bit_xor",
  "bitmap_construct_agg",
  "bitmap_or_agg",
  "bool_and",
  "bool_or",
  "collect_list",
  "collect_set",
  "count",
  "count_if",
  "count_min_sketch",
  "covar_pop",
  "covar_samp",
  "every",
  "first",
  "first_value",
  "grouping",
  "grouping_id",
  "histogram_numeric",
  "hll_sketch_agg",
  "hll_union_agg",
  "kurtosis",
  "last",
  "last_value",
  "max",
  "max_by",
  "mean",
  "median",
  "min",
  "min_by",
  "mode",
  "percentile",
  "percentile_approx",
  "regr_avgx",
  "regr_avgy",
  "regr_count",
  "regr_intercept",
  "regr_r2",
  "regr_slope",
  "regr_sxx",
  "regr_sxy",
  "regr_syy",
  "skewness",
  "some",
  "std",
  "stddev",
  "stddev_pop",
  "stddev_samp",
  "sum",
  "try_avg",
  "try_sum",
  "var_pop",
  "var_samp",
  "variance"
];
const ARRAY_FUNCTIONS = [
  "array",
  "array_append",
  "array_compact",
  "array_contains",
  "array_distinct",
  "array_except",
  "array_insert",
  "array_intersect",
  "array_join",
  "array_max",
  "array_min",
  "array_position",
  "array_prepend",
  "array_remove",
  "array_repeat",
  "array_union",
  "arrays_overlap",
  "arrays_zip",
  "flatten",
  "get",
  "sequence",
  "shuffle",
  "slice",
  "sort_array"
];
const CONDITIONAL_FUNCTIONS = ["coalesce", "if", "ifnull", "nanvl", "nullif", "nvl", "nvl2"];
const CONVERSION_FUNCTIONS = [
  "bigint",
  "binary",
  "boolean",
  "cast",
  "date",
  "decimal",
  "double",
  "float",
  "int",
  "smallint",
  "string",
  "timestamp",
  "tinyint"
];
const DATE_AND_TIMESTAMP_FUNCTIONS = [
  "add_months",
  "convert_timezone",
  "curdate",
  "current_date",
  "current_timestamp",
  "current_timezone",
  "date_add",
  "date_diff",
  "date_format",
  "date_from_unix_date",
  "date_part",
  "date_sub",
  "date_trunc",
  "dateadd",
  "datediff",
  "datepart",
  "day",
  "dayofmonth",
  "dayofweek",
  "dayofyear",
  "extract",
  "from_unixtime",
  "from_utc_timestamp",
  "hour",
  "last_day",
  "localtimestamp",
  "localtimestamp",
  "make_date",
  "make_dt_interval",
  "make_interval",
  "make_timestamp",
  "make_timestamp_ltz",
  "make_timestamp_ntz",
  "make_ym_interval",
  "minute",
  "month",
  "months_between",
  "next_day",
  "now",
  "quarter",
  "second",
  "session_window",
  "timestamp_micros",
  "timestamp_millis",
  "timestamp_seconds",
  "to_date",
  "to_timestamp",
  "to_timestamp_ltz",
  "to_timestamp_ntz",
  "to_unix_timestamp",
  "to_utc_timestamp",
  "trunc",
  "try_to_timestamp",
  "unix_date",
  "unix_micros",
  "unix_millis",
  "unix_seconds",
  "unix_timestamp",
  "weekday",
  "weekofyear",
  "window",
  "window_time",
  "year"
];
const JSON_FUNCTIONS = [
  "from_json",
  "get_json_object",
  "json_array_length",
  "json_object_keys",
  "json_tuple",
  "schema_of_json",
  "to_json"
];
const MATHEMATICAL_FUNCTIONS = [
  "abs",
  "acos",
  "acosh",
  "asin",
  "asinh",
  "atan",
  "atan2",
  "atanh",
  "bin",
  "bround",
  "cbrt",
  "ceil",
  "ceiling",
  "conv",
  "cos",
  "cosh",
  "cot",
  "csc",
  "degrees",
  "e",
  "exp",
  "expm1",
  "factorial",
  "floor",
  "greatest",
  "hex",
  "hypot",
  "least",
  "ln",
  "log",
  "log10",
  "log1p",
  "log2",
  "negative",
  "pi",
  "pmod",
  "positive",
  "pow",
  "power",
  "radians",
  "rand",
  "randn",
  "random",
  "rint",
  "round",
  "sec",
  "shiftleft",
  "sign",
  "signum",
  "sin",
  "sinh",
  "sqrt",
  "tan",
  "tanh",
  "try_add",
  "try_divide",
  "try_multiply",
  "try_subtract",
  "unhex",
  "width_bucket"
];
const PREDICATE_FUNCTIONS = ["isnan", "isnotnull", "isnull", "regexp", "regexp_like", "rlike"];
const STRING_FUNCTIONS = [
  "ascii",
  "base64",
  "bit_length",
  "btrim",
  "char",
  "char_length",
  "character_length",
  "chr",
  "concat_ws",
  "contains",
  "decode",
  "elt",
  "encode",
  "endswith",
  "find_in_set",
  "format_number",
  "format_string",
  "initcap",
  "instr",
  "lcase",
  "left",
  "len",
  "length",
  "levenshtein",
  "locate",
  "lower",
  "lpad",
  "ltrim",
  "luhn_check",
  "mask",
  "octet_length",
  "overlay",
  "position",
  "printf",
  "regexp_count",
  "regexp_extract",
  "regexp_extract_all",
  "regexp_instr",
  "regexp_replace",
  "regexp_substr",
  "repeat",
  "replace",
  "right",
  "rpad",
  "rtrim",
  "sentences",
  "soundex",
  "space",
  "split",
  "split_part",
  "startswith",
  "substr",
  "substring",
  "substring_index",
  "to_binary",
  "to_char",
  "to_number",
  "to_varchar",
  "translate",
  "trim",
  "try_to_binary",
  "try_to_number",
  "ucase",
  "unbase64",
  "upper"
];
const WINDOW_FUNCTIONS = [
  "cume_dist",
  "dense_rank",
  "lag",
  "lead",
  "nth_value",
  "ntile",
  "percent_rank",
  "rank",
  "row_number"
];
const ALL_FUNCTIONS = [
  ...AGGREGATE_FUNCTIONS,
  ...ARRAY_FUNCTIONS,
  ...CONDITIONAL_FUNCTIONS,
  ...CONVERSION_FUNCTIONS,
  ...DATE_AND_TIMESTAMP_FUNCTIONS,
  ...JSON_FUNCTIONS,
  ...MATHEMATICAL_FUNCTIONS,
  ...PREDICATE_FUNCTIONS,
  ...STRING_FUNCTIONS,
  ...WINDOW_FUNCTIONS
];
const EQUAL = "=";
const DOUBLE_EQUALS = "==";
const NULL_SAFE_EQUAL = "<=>";
const NOT_EQUAL = "!=";
const GREATER_THAN = ">";
const GREATER_THAN_EQUAL = ">=";
const LESS_THAN = "<";
const LESS_THAN_EQUAL = "<=";
const LOGICAL_OPERATORS = [OR, AND];
const MATH_OPERATORS = ["*", "/", "+", "-", "%", "div", "mod"];
const PREDICATE_OPERATORS = [
  NOT,
  IS,
  EQUAL,
  DOUBLE_EQUALS,
  NULL_SAFE_EQUAL,
  NOT_EQUAL,
  GREATER_THAN,
  GREATER_THAN_EQUAL,
  LESS_THAN,
  LESS_THAN_EQUAL,
  LIKE,
  ILIKE,
  IN
];
const ALL_OPERATORS = [...MATH_OPERATORS, ...LOGICAL_OPERATORS, ...PREDICATE_OPERATORS];
const language = {
  defaultToken: "",
  ignoreCase: true,
  brackets: [
    { open: "[", close: "]", token: "delimiter.square" },
    { open: "(", close: ")", token: "delimiter.parenthesis" },
    { open: "{", close: "}", token: "delimiter.curly" }
  ],
  keywords: ALL_KEYWORDS,
  operators: ALL_OPERATORS,
  builtinFunctions: ALL_FUNCTIONS,
  tokenizer: {
    root: [
      { include: "@comments" },
      { include: "@whitespace" },
      { include: "@customParams" },
      { include: "@numbers" },
      { include: "@binaries" },
      { include: "@strings" },
      { include: "@strings" },
      { include: "@complexIdentifiers" },
      [/[;,.]/, "delimiter"],
      [/[\(\)\[\]\{\}]/, "@brackets"],
      [
        /[\w@#$]+/,
        {
          cases: {
            "@operators": "operator",
            "@builtinFunctions": "predefined",
            "@keywords": "keyword",
            "@default": "identifier"
          }
        }
      ],
      [/[<>=!%&+\-*/|~^]/, "operator"]
    ],
    whitespace: [[/[\s\t\r\n]+/, "white"]],
    comments: [
      [/--+.*/, "comment"],
      [/\/\*/, { token: "comment.quote", next: "@comment" }]
    ],
    comment: [
      [/[^*/]+/, "comment"],
      [/\*\//, { token: "comment.quote", next: "@pop" }],
      [/./, "comment"]
    ],
    customParams: [
      [/\${[A-Za-z0-9._-]*}/, "variable"],
      [/\@\@{[A-Za-z0-9._-]*}/, "variable"]
    ],
    numbers: [
      [/0[xX][0-9a-fA-F]*/, "number"],
      [/[$][+-]*\d*(\.\d*)?/, "number"],
      [/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, "number"]
    ],
    binaries: [
      [/X'/i, { token: "binary", next: "@binarySingle" }],
      [/X"/i, { token: "binary", next: "@binaryDouble" }]
    ],
    binarySingle: [
      [/\d+/, "binary.escape"],
      [/''/, "binary"],
      [/'/, { token: "binary", next: "@pop" }]
    ],
    binaryDouble: [
      [/\d+/, "binary.escape"],
      [/""/, "binary"],
      [/"/, { token: "binary", next: "@pop" }]
    ],
    strings: [
      [/'/, { token: "string", next: "@stringSingle" }],
      [/R'/i, { token: "string", next: "@stringSingle" }],
      [/"/, { token: "string", next: "@stringDouble" }],
      [/R"/i, { token: "string", next: "@stringDouble" }]
    ],
    stringSingle: [
      [/[^']+/, "string.escape"],
      [/''/, "string"],
      [/'/, { token: "string", next: "@pop" }]
    ],
    stringDouble: [
      [/[^"]+/, "string.escape"],
      [/""/, "string"],
      [/"/, { token: "string", next: "@pop" }]
    ],
    complexIdentifiers: [[/`/, { token: "identifier", next: "@quotedIdentifier" }]],
    quotedIdentifier: [
      [/[^`]+/, "identifier"],
      [/``/, "identifier"],
      [/`/, { token: "identifier", next: "@pop" }]
    ]
  }
};
const conf = {
  comments: {
    lineComment: "--",
    blockComment: ["/*", "*/"]
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" },
    { open: "`", close: "`" }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" },
    { open: "`", close: "`" }
  ]
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-logs/CloudWatchLogsLanguageProvider.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudWatchLogsLanguageProvider: () => (/* binding */ CloudWatchLogsLanguageProvider)
/* harmony export */ });
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/datasource.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/utils/searchFunctions.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/utils.ts");
/* harmony import */ var _syntax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-logs/syntax.ts");








class CloudWatchLogsLanguageProvider extends _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LanguageProvider {
  constructor(datasource, templateSrv) {
    super();
    this.started = false;
    // Strip syntax chars
    this.cleanText = (s) => s.replace(/[()]/g, "").trim();
    this.request = (url, params) => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.lastValueFrom)(this.datasource.logsQueryRunner.awsRequest(url, params));
    };
    this.start = () => {
      if (!this.startTask) {
        this.startTask = Promise.resolve().then(() => {
          this.started = true;
          return [];
        });
      }
      return this.startTask;
    };
    this.handleKeyword = async (context) => {
      const suggs = await this.getFieldCompletionItems(context?.logGroups, context?.region || "default");
      const functionSuggestions = [
        {
          searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SearchFunctionType.Prefix,
          label: "Functions",
          items: _syntax__WEBPACK_IMPORTED_MODULE_6__.STRING_FUNCTIONS.concat(_syntax__WEBPACK_IMPORTED_MODULE_6__.DATETIME_FUNCTIONS, _syntax__WEBPACK_IMPORTED_MODULE_6__.IP_FUNCTIONS)
        }
      ];
      suggs.suggestions.push(...functionSuggestions);
      return suggs;
    };
    this.handleCommand = async (commandToken, curToken, context) => {
      const queryCommand = commandToken.content.toLowerCase();
      const prevToken = prevNonWhitespaceToken(curToken);
      const currentTokenIsFirstArg = prevToken === commandToken;
      if (queryCommand === "sort") {
        return this.handleSortCommand(currentTokenIsFirstArg, curToken, context);
      }
      if (queryCommand === "parse") {
        if (currentTokenIsFirstArg) {
          return await this.getFieldCompletionItems(context?.logGroups ?? [], context?.region || "default");
        }
      }
      const currentTokenIsAfterCommandAndEmpty = isTokenType(commandToken.next, "whitespace") && !commandToken.next?.next;
      const currentTokenIsAfterCommand = currentTokenIsAfterCommandAndEmpty || nextNonWhitespaceToken(commandToken) === curToken;
      const currentTokenIsComma = isTokenType(curToken, "punctuation", ",");
      const currentTokenIsCommaOrAfterComma = currentTokenIsComma || isTokenType(prevToken, "punctuation", ",");
      if (!(currentTokenIsAfterCommand || currentTokenIsCommaOrAfterComma)) {
        return { suggestions: [] };
      }
      if (["display", "fields"].includes(queryCommand)) {
        const typeaheadOutput = await this.getFieldCompletionItems(
          context?.logGroups ?? [],
          context?.region || "default"
        );
        typeaheadOutput.suggestions.push(...this.getFieldAndFilterFunctionCompletionItems().suggestions);
        return typeaheadOutput;
      }
      if (queryCommand === "stats") {
        const typeaheadOutput = this.getStatsAggCompletionItems();
        if (currentTokenIsComma || currentTokenIsAfterCommandAndEmpty) {
          typeaheadOutput?.suggestions.forEach((group) => {
            group.skipFilter = true;
          });
        }
        return typeaheadOutput;
      }
      if (queryCommand === "filter" && currentTokenIsFirstArg) {
        const sugg = await this.getFieldCompletionItems(context?.logGroups, context?.region || "default");
        const boolFuncs = this.getBoolFuncCompletionItems();
        sugg.suggestions.push(...boolFuncs.suggestions);
        return sugg;
      }
      return { suggestions: [] };
    };
    this.handleComparison = async (context) => {
      const fieldsSuggestions = await this.getFieldCompletionItems(context?.logGroups, context?.region || "default");
      const comparisonSuggestions = this.getComparisonCompletionItems();
      fieldsSuggestions.suggestions.push(...comparisonSuggestions.suggestions);
      return fieldsSuggestions;
    };
    this.getCommandCompletionItems = () => {
      return {
        suggestions: [{ searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SearchFunctionType.Prefix, label: "Commands", items: _syntax__WEBPACK_IMPORTED_MODULE_6__.QUERY_COMMANDS }]
      };
    };
    this.getFieldAndFilterFunctionCompletionItems = () => {
      return {
        suggestions: [
          { searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SearchFunctionType.Prefix, label: "Functions", items: _syntax__WEBPACK_IMPORTED_MODULE_6__.FIELD_AND_FILTER_FUNCTIONS }
        ]
      };
    };
    this.getStatsAggCompletionItems = () => {
      return {
        suggestions: [
          { searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SearchFunctionType.Prefix, label: "Functions", items: _syntax__WEBPACK_IMPORTED_MODULE_6__.AGGREGATION_FUNCTIONS_STATS }
        ]
      };
    };
    this.getBoolFuncCompletionItems = () => {
      return {
        suggestions: [
          {
            searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SearchFunctionType.Prefix,
            label: "Functions",
            items: _syntax__WEBPACK_IMPORTED_MODULE_6__.BOOLEAN_FUNCTIONS
          }
        ]
      };
    };
    this.getComparisonCompletionItems = () => {
      return {
        suggestions: [
          {
            searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SearchFunctionType.Prefix,
            label: "Functions",
            items: _syntax__WEBPACK_IMPORTED_MODULE_6__.NUMERIC_OPERATORS.concat(_syntax__WEBPACK_IMPORTED_MODULE_6__.BOOLEAN_FUNCTIONS)
          }
        ]
      };
    };
    this.getFieldCompletionItems = async (logGroups, region) => {
      if (!logGroups) {
        return { suggestions: [] };
      }
      const fields = await (0,_utils__WEBPACK_IMPORTED_MODULE_5__.fetchLogGroupFields)(logGroups, region, this.templateSrv, this.datasource.resources);
      return {
        suggestions: [
          {
            label: "Fields",
            items: fields.map((field) => ({
              label: field,
              insertText: field.match(/@?[_a-zA-Z]+[_.0-9a-zA-Z]*/) ? void 0 : `\`${field}\``
            }))
          }
        ]
      };
    };
    this.datasource = datasource;
    this.templateSrv = templateSrv ?? (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)();
  }
  getSyntax() {
    return _syntax__WEBPACK_IMPORTED_MODULE_6__["default"];
  }
  isStatsQuery(query) {
    const grammar = this.getSyntax();
    const tokens = prismjs__WEBPACK_IMPORTED_MODULE_0___default().tokenize(query, grammar) ?? [];
    return !!tokens.find(
      (token) => typeof token !== "string" && token.content.toString().toLowerCase() === "stats" && token.type === "query-command"
    );
  }
  /**
   * Return suggestions based on input that can be then plugged into a typeahead dropdown.
   * Keep this DOM-free for testing
   * @param input
   * @param context Is optional in types but is required in case we are doing getLabelCompletionItems
   * @param context.absoluteRange Required in case we are doing getLabelCompletionItems
   * @param context.history Optional used only in getEmptyCompletionItems
   */
  async provideCompletionItems(input, context) {
    const { value } = input;
    const tokens = value?.data.get("tokens");
    if (!tokens || !tokens.length) {
      return { suggestions: [] };
    }
    const curToken = tokens.filter(
      (token) => token.offsets && token.offsets.start <= value.selection?.start?.offset && token.offsets.end >= value.selection?.start?.offset
    )[0];
    const isFirstToken = !curToken.prev;
    const prevToken = prevNonWhitespaceToken(curToken);
    const isCommandStart = isFirstToken || !isFirstToken && prevToken?.types.includes("command-separator");
    if (isCommandStart) {
      return this.getCommandCompletionItems();
    }
    if (isInsideFunctionParenthesis(curToken)) {
      return await this.getFieldCompletionItems(context?.logGroups, context?.region || "default");
    }
    if (isAfterKeyword("by", curToken)) {
      return this.handleKeyword(context);
    }
    if (prevToken?.types.includes("comparison-operator")) {
      return this.handleComparison(context);
    }
    const commandToken = previousCommandToken(curToken);
    if (commandToken) {
      return await this.handleCommand(commandToken, curToken, context);
    }
    return {
      suggestions: []
    };
  }
  async handleSortCommand(isFirstArgument, curToken, context) {
    if (isFirstArgument) {
      return await this.getFieldCompletionItems(context?.logGroups, context?.region || "default");
    } else if (isTokenType(prevNonWhitespaceToken(curToken), "field-name")) {
      return {
        suggestions: [
          {
            searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SearchFunctionType.Prefix,
            label: "Sort Order",
            items: [
              {
                label: "asc"
              },
              { label: "desc" }
            ]
          }
        ]
      };
    }
    return { suggestions: [] };
  }
}
function nextNonWhitespaceToken(token) {
  let curToken = token;
  while (curToken.next) {
    if (curToken.next.types.includes("whitespace")) {
      curToken = curToken.next;
    } else {
      return curToken.next;
    }
  }
  return null;
}
function prevNonWhitespaceToken(token) {
  let curToken = token;
  while (curToken.prev) {
    if (isTokenType(curToken.prev, "whitespace")) {
      curToken = curToken.prev;
    } else {
      return curToken.prev;
    }
  }
  return null;
}
function previousCommandToken(startToken) {
  let thisToken = startToken;
  while (!!thisToken.prev) {
    thisToken = thisToken.prev;
    if (thisToken.types.includes("query-command") && (!thisToken.prev || isTokenType(prevNonWhitespaceToken(thisToken), "command-separator"))) {
      return thisToken;
    }
  }
  return null;
}
const funcsWithFieldArgs = [
  "avg",
  "count",
  "count_distinct",
  "earliest",
  "latest",
  "sortsFirst",
  "sortsLast",
  "max",
  "min",
  "pct",
  "stddev",
  "ispresent",
  "fromMillis",
  "toMillis",
  "isempty",
  "isblank",
  "isValidIp",
  "isValidIpV4",
  "isValidIpV6",
  "isIpInSubnet",
  "isIpv4InSubnet",
  "isIpv6InSubnet"
].map((funcName) => funcName.toLowerCase());
function isInsideFunctionParenthesis(curToken) {
  const prevToken = prevNonWhitespaceToken(curToken);
  if (!prevToken) {
    return false;
  }
  const parenthesisToken = curToken.content === "(" ? curToken : prevToken.content === "(" ? prevToken : void 0;
  if (parenthesisToken) {
    const maybeFunctionToken = prevNonWhitespaceToken(parenthesisToken);
    if (maybeFunctionToken) {
      return funcsWithFieldArgs.includes(maybeFunctionToken.content.toLowerCase()) && maybeFunctionToken.types.includes("function");
    }
  }
  return false;
}
function isAfterKeyword(keyword, token) {
  const maybeKeyword = getPreviousTokenExcluding(token, [
    "whitespace",
    "function",
    "punctuation",
    "field-name",
    "number"
  ]);
  if (isTokenType(maybeKeyword, "keyword", "by")) {
    const prev = getPreviousTokenExcluding(token, ["whitespace"]);
    if (prev === maybeKeyword || isTokenType(prev, "punctuation", ",")) {
      return true;
    }
  }
  return false;
}
function isTokenType(token, type, content) {
  if (!token?.types.includes(type)) {
    return false;
  }
  if (content) {
    if (token?.content.toLowerCase() !== content) {
      return false;
    }
  }
  return true;
}
function getPreviousTokenExcluding(token, exclude) {
  let curToken = token.prev;
  main: while (curToken) {
    for (const item of exclude) {
      if (typeof item === "string") {
        if (curToken.types.includes(item)) {
          curToken = curToken.prev;
          continue main;
        }
      } else {
        if (curToken.types.includes(item.type) && curToken.content.toLowerCase() === item.value) {
          curToken = curToken.prev;
          continue main;
        }
      }
    }
    break;
  }
  return curToken;
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-logs/syntax.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AGGREGATION_FUNCTIONS_STATS: () => (/* binding */ AGGREGATION_FUNCTIONS_STATS),
/* harmony export */   ARITHMETIC_OPERATORS: () => (/* binding */ ARITHMETIC_OPERATORS),
/* harmony export */   BOOLEAN_FUNCTIONS: () => (/* binding */ BOOLEAN_FUNCTIONS),
/* harmony export */   COMPARISON_OPERATORS: () => (/* binding */ COMPARISON_OPERATORS),
/* harmony export */   DATETIME_FUNCTIONS: () => (/* binding */ DATETIME_FUNCTIONS),
/* harmony export */   FIELD_AND_FILTER_FUNCTIONS: () => (/* binding */ FIELD_AND_FILTER_FUNCTIONS),
/* harmony export */   FUNCTIONS: () => (/* binding */ FUNCTIONS),
/* harmony export */   GENERAL_FUNCTIONS: () => (/* binding */ GENERAL_FUNCTIONS),
/* harmony export */   IP_FUNCTIONS: () => (/* binding */ IP_FUNCTIONS),
/* harmony export */   KEYWORDS: () => (/* binding */ KEYWORDS),
/* harmony export */   NON_AGGREGATION_FUNCS_STATS: () => (/* binding */ NON_AGGREGATION_FUNCS_STATS),
/* harmony export */   NUMERIC_OPERATORS: () => (/* binding */ NUMERIC_OPERATORS),
/* harmony export */   QUERY_COMMANDS: () => (/* binding */ QUERY_COMMANDS),
/* harmony export */   STATS_FUNCS: () => (/* binding */ STATS_FUNCS),
/* harmony export */   STRING_FUNCTIONS: () => (/* binding */ STRING_FUNCTIONS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const QUERY_COMMANDS = [
  {
    label: "fields",
    documentation: "Retrieves the specified fields from log events"
  },
  { label: "display", documentation: "Specifies which fields to display in the query results" },
  {
    label: "filter",
    documentation: "Filters the results of a query based on one or more conditions"
  },
  {
    label: "stats",
    documentation: "Calculates aggregate statistics based on the values of log fields"
  },
  { label: "sort", documentation: "Sorts the retrieved log events" },
  { label: "limit", documentation: "Specifies the number of log events returned by the query" },
  {
    label: "parse",
    documentation: "Extracts data from a log field, creating one or more ephemeral fields that you can process further in the query"
  }
];
const COMPARISON_OPERATORS = ["=", "!=", "<", "<=", ">", ">="];
const ARITHMETIC_OPERATORS = ["+", "-", "*", "/", "^", "%"];
const NUMERIC_OPERATORS = [
  {
    label: "abs",
    detail: "abs(a)",
    documentation: "Absolute value."
  },
  {
    label: "ceil",
    detail: "ceil(a)",
    documentation: "Round to ceiling (the smallest integer that is greater than the value of a)."
  },
  {
    label: "floor",
    detail: "floor(a)",
    documentation: "Round to floor (the largest integer that is smaller than the value of a)."
  },
  {
    label: "greatest",
    detail: "greatest(a,b, ... z)",
    documentation: "Returns the largest value."
  },
  {
    label: "least",
    detail: "least(a, b, ... z)",
    documentation: "Returns the smallest value."
  },
  {
    label: "log",
    detail: "log(a)",
    documentation: "Natural logarithm."
  },
  {
    label: "sqrt",
    detail: "sqrt(a)",
    documentation: "Square root."
  }
];
const GENERAL_FUNCTIONS = [
  {
    label: "ispresent",
    detail: "ispresent(fieldname)",
    documentation: "Returns true if the field exists."
  },
  {
    label: "coalesce",
    detail: "coalesce(fieldname1, fieldname2, ... fieldnamex)",
    documentation: "Returns the first non-null value from the list."
  }
];
const STRING_FUNCTIONS = [
  {
    label: "isempty",
    detail: "isempty(fieldname)",
    documentation: "Returns true if the field is missing or is an empty string."
  },
  {
    label: "isblank",
    detail: "isblank(fieldname)",
    documentation: "Returns true if the field is missing, an empty string, or contains only white space."
  },
  {
    label: "concat",
    detail: "concat(string1, string2, ... stringz)",
    documentation: "Concatenates the strings."
  },
  {
    label: "ltrim",
    detail: "ltrim(string) or ltrim(string1, string2)",
    documentation: "Remove white space from the left of the string. If the function has a second string argument, it removes the characters of string2 from the left of string1."
  },
  {
    label: "rtrim",
    detail: "rtrim(string) or rtrim(string1, string2)",
    documentation: "Remove white space from the right of the string. If the function has a second string argument, it removes the characters of string2 from the right of string1."
  },
  {
    label: "trim",
    detail: "trim(string) or trim(string1, string2)",
    documentation: "Remove white space from both ends of the string. If the function has a second string argument, it removes the characters of string2 from both sides of string1."
  },
  {
    label: "strlen",
    detail: "strlen(string)",
    documentation: "Returns the length of the string in Unicode code points."
  },
  {
    label: "toupper",
    detail: "toupper(string)",
    documentation: "Converts the string to uppercase."
  },
  {
    label: "tolower",
    detail: "tolower(string)",
    documentation: "Converts the string to lowercase."
  },
  {
    label: "substr",
    detail: "substr(string1, x), or substr(string1, x, y)",
    documentation: "Returns a substring from the index specified by the number argument to the end of the string. If the function has a second number argument, it contains the length of the substring to be retrieved."
  },
  {
    label: "replace",
    detail: "replace(string1, string2, string3)",
    documentation: "Replaces all instances of string2 in string1 with string3."
  },
  {
    label: "strcontains",
    detail: "strcontains(string1, string2)",
    documentation: "Returns 1 if string1 contains string2 and 0 otherwise."
  }
];
const DATETIME_FUNCTIONS = [
  {
    label: "bin",
    detail: "bin(period)",
    documentation: "Rounds the value of @timestamp to the given period and then truncates."
  },
  {
    label: "datefloor",
    detail: "datefloor(a, period)",
    documentation: "Truncates the timestamp to the given period."
  },
  {
    label: "dateceil",
    detail: "dateceil(a, period)",
    documentation: "Rounds up the timestamp to the given period and then truncates."
  },
  {
    label: "fromMillis",
    detail: "fromMillis(fieldname)",
    documentation: "Interprets the input field as the number of milliseconds since the Unix epoch and converts it to a timestamp."
  },
  {
    label: "toMillis",
    detail: "toMillis(fieldname)",
    documentation: "Converts the timestamp found in the named field into a number representing the milliseconds since the Unix epoch."
  }
];
const IP_FUNCTIONS = [
  {
    label: "isValidIp",
    detail: "isValidIp(fieldname)",
    documentation: "Returns true if the field is a valid v4 or v6 IP address."
  },
  {
    label: "isValidIpV4",
    detail: "isValidIpV4(fieldname)",
    documentation: "Returns true if the field is a valid v4 IP address."
  },
  {
    label: "isValidIpV6",
    detail: "isValidIpV6(fieldname)",
    documentation: "Returns true if the field is a valid v6 IP address."
  },
  {
    label: "isIpInSubnet",
    detail: "isIpInSubnet(fieldname, string)",
    documentation: "Returns true if the field is a valid v4 or v6 IP address within the specified v4 or v6 subnet."
  },
  {
    label: "isIpv4InSubnet",
    detail: "isIpv4InSubnet(fieldname, string)",
    documentation: "Returns true if the field is a valid v4 IP address within the specified v4 subnet."
  },
  {
    label: "isIpv6InSubnet",
    detail: "isIpv6InSubnet(fieldname, string)",
    documentation: "Returns true if the field is a valid v6 IP address within the specified v6 subnet."
  }
];
const BOOLEAN_FUNCTIONS = [
  {
    label: "ispresent",
    detail: "ispresent(fieldname)",
    documentation: "Returns true if the field exists."
  },
  {
    label: "isempty",
    detail: "isempty(fieldname)",
    documentation: "Returns true if the field is missing or is an empty string."
  },
  {
    label: "isblank",
    detail: "isblank(fieldname)",
    documentation: "Returns true if the field is missing, an empty string, or contains only white space."
  },
  {
    label: "strcontains",
    detail: "strcontains(string1, string2)",
    documentation: "Returns 1 if string1 contains string2 and 0 otherwise."
  },
  ...IP_FUNCTIONS
];
const AGGREGATION_FUNCTIONS_STATS = [
  {
    label: "avg",
    detail: "avg(NumericFieldname)",
    documentation: "The average of the values in the specified field."
  },
  {
    label: "count",
    detail: "count(fieldname) or count(*)",
    documentation: "Counts the log records."
  },
  {
    label: "count_distinct",
    detail: "count_distinct(fieldname)",
    documentation: "Returns the number of unique values for the field."
  },
  {
    label: "max",
    detail: "max(fieldname)",
    documentation: "The maximum of the values for this log field in the queried logs."
  },
  {
    label: "min",
    detail: "min(fieldname)",
    documentation: "The minimum of the values for this log field in the queried logs."
  },
  {
    label: "pct",
    detail: "pct(fieldname, value)",
    documentation: "A percentile indicates the relative standing of a value in a datas."
  },
  {
    label: "stddev",
    detail: "stddev(NumericFieldname)",
    documentation: "The standard deviation of the values in the specified field."
  },
  {
    label: "sum",
    detail: "sum(NumericFieldname)",
    documentation: "The sum of the values in the specified field."
  }
];
const NON_AGGREGATION_FUNCS_STATS = [
  {
    label: "earliest",
    detail: "earliest(fieldname)",
    documentation: "Returns the value of fieldName from the log event that has the earliest time stamp in the queried logs."
  },
  {
    label: "latest",
    detail: "latest(fieldname)",
    documentation: "Returns the value of fieldName from the log event that has the latest time stamp in the queried logs."
  },
  {
    label: "sortsFirst",
    detail: "sortsFirst(fieldname)",
    documentation: "Returns the value of fieldName that sorts first in the queried logs."
  },
  {
    label: "sortsLast",
    detail: "sortsLast(fieldname)",
    documentation: "Returns the value of fieldName that sorts last in the queried logs."
  }
];
const STATS_FUNCS = [...AGGREGATION_FUNCTIONS_STATS, ...NON_AGGREGATION_FUNCS_STATS];
const KEYWORDS = ["as", "like", "by", "in", "desc", "asc"];
const FIELD_AND_FILTER_FUNCTIONS = [
  ...NUMERIC_OPERATORS,
  ...GENERAL_FUNCTIONS,
  ...STRING_FUNCTIONS,
  ...DATETIME_FUNCTIONS,
  ...IP_FUNCTIONS
];
const FUNCTIONS = [...FIELD_AND_FILTER_FUNCTIONS, ...STATS_FUNCS];
const tokenizer = {
  comment: {
    pattern: /^#.*/,
    greedy: true
  },
  backticks: {
    pattern: /`.*?`/,
    alias: "string",
    greedy: true
  },
  quote: {
    pattern: /".*?"/,
    alias: "string",
    greedy: true
  },
  regex: {
    pattern: /\/.*?\/(?=\||\s*$|,)/,
    greedy: true
  },
  "query-command": {
    pattern: new RegExp(`\\b(?:${QUERY_COMMANDS.map((command) => command.label).join("|")})\\b`, "i"),
    alias: "function"
  },
  function: {
    pattern: new RegExp(`\\b(?:${FUNCTIONS.map((f) => f.label).join("|")})\\b`, "i")
  },
  keyword: {
    pattern: new RegExp(`(\\s+)(${KEYWORDS.join("|")})(?=\\s+)`, "i"),
    lookbehind: true
  },
  // 'log-group-name': {
  //   pattern: /[\.\-_/#A-Za-z0-9]+/,
  // },
  "field-name": {
    pattern: /(@?[_a-zA-Z]+[_.0-9a-zA-Z]*)|(`((\\`)|([^`]))*?`)/,
    greedy: true
  },
  number: /\b-?\d+((\.\d*)?([eE][+-]?\d+)?)?\b/,
  "command-separator": {
    pattern: /\|/,
    alias: "punctuation"
  },
  "comparison-operator": {
    pattern: /([<>]=?)|(!?=)/
  },
  punctuation: /[{}()`,.]/,
  whitespace: /\s+/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tokenizer);


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-ppl/completion/PPLCompletionItemProvider.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PPLCompletionItemProvider: () => (/* binding */ PPLCompletionItemProvider),
/* harmony export */   PPLCompletionItemProviderFunc: () => (/* binding */ PPLCompletionItemProviderFunc)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _monarch_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/CompletionItemProvider.ts");
/* harmony import */ var _monarch_commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/commands.ts");
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/utils.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-ppl/language.ts");
/* harmony import */ var _tokenTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-ppl/tokenTypes.ts");
/* harmony import */ var _statementPosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-ppl/completion/statementPosition.ts");
/* harmony import */ var _suggestionKinds__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-ppl/completion/suggestionKinds.ts");










function PPLCompletionItemProviderFunc(resources, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getTemplateSrv)()) {
  return (queryContext) => {
    return new PPLCompletionItemProvider(resources, templateSrv, queryContext);
  };
}
class PPLCompletionItemProvider extends _monarch_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_1__.CompletionItemProvider {
  constructor(resources, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getTemplateSrv)(), queryContext) {
    super(resources, templateSrv);
    this.getStatementPosition = _statementPosition__WEBPACK_IMPORTED_MODULE_7__.getStatementPosition;
    this.getSuggestionKinds = _suggestionKinds__WEBPACK_IMPORTED_MODULE_8__.getSuggestionKinds;
    this.tokenTypes = _tokenTypes__WEBPACK_IMPORTED_MODULE_6__.PPLTokenTypes;
    this.queryContext = queryContext;
  }
  async getSuggestions(monaco, currentToken, suggestionKinds, _, position) {
    const suggestions = [];
    const invalidRangeToken = currentToken?.isWhiteSpace() || currentToken?.isParenthesis() || currentToken?.is(_tokenTypes__WEBPACK_IMPORTED_MODULE_6__.PPLTokenTypes.Backtick);
    const range = invalidRangeToken || !currentToken?.range ? monaco.Range.fromPositions(position) : currentToken?.range;
    function toCompletionItem(value, rest = {}) {
      const item = {
        label: value,
        insertText: value,
        kind: monaco.languages.CompletionItemKind.Field,
        range,
        sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.Medium,
        ...rest
      };
      return item;
    }
    function addSuggestion(value, rest = {}) {
      suggestions.push(toCompletionItem(value, rest));
    }
    for (const kind of suggestionKinds) {
      switch (kind) {
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.Command:
          _language__WEBPACK_IMPORTED_MODULE_5__.PPL_COMMANDS.forEach((command) => {
            addSuggestion(command, {
              insertText: `${command} $0`,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              kind: monaco.languages.CompletionItemKind.Method,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
            });
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.LogicalExpression:
          _language__WEBPACK_IMPORTED_MODULE_5__.CONDITION_FUNCTIONS.forEach((funct) => {
            addSuggestion(funct, {
              insertText: `${funct}($0)`,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              kind: monaco.languages.CompletionItemKind.Function,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
            });
          });
          addSuggestion(_language__WEBPACK_IMPORTED_MODULE_5__.NOT, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.NOT} $0`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            kind: monaco.languages.CompletionItemKind.Operator,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.ValueExpression:
          _language__WEBPACK_IMPORTED_MODULE_5__.EVAL_FUNCTIONS.forEach((funct) => {
            addSuggestion(funct, {
              insertText: `${funct}($0)`,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              kind: monaco.languages.CompletionItemKind.Function,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
            });
          });
          await this.addFieldSuggestions(addSuggestion, monaco, range, currentToken);
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.FieldOperators:
          _language__WEBPACK_IMPORTED_MODULE_5__.FIELD_OPERATORS.forEach((operator) => {
            addSuggestion(operator, {
              insertText: `${operator}$0`,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              kind: monaco.languages.CompletionItemKind.Operator,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
            });
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.BooleanLiteral:
          _language__WEBPACK_IMPORTED_MODULE_5__.BOOLEAN_LITERALS.forEach(
            (literal) => addSuggestion(`= ${literal}`, {
              insertText: `= ${literal} $0`,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              kind: monaco.languages.CompletionItemKind.Value,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
            })
          );
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.DedupParameter:
          _language__WEBPACK_IMPORTED_MODULE_5__.DEDUP_PARAMETERS.forEach(
            (keyword) => addSuggestion(keyword, {
              insertText: `${keyword} $0`,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              kind: monaco.languages.CompletionItemKind.Property,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
            })
          );
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.StatsParameter:
          _language__WEBPACK_IMPORTED_MODULE_5__.STATS_PARAMETERS.forEach((keyword) => {
            addSuggestion(keyword, {
              insertText: `${keyword} $0`,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              kind: monaco.languages.CompletionItemKind.Property,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
            });
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.StatsFunctions:
          _language__WEBPACK_IMPORTED_MODULE_5__.STATS_FUNCTIONS.forEach((f) => {
            addSuggestion(f, {
              insertText: `${f}($0)`,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              kind: monaco.languages.CompletionItemKind.Function,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
            });
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.LogicalOperators:
          _language__WEBPACK_IMPORTED_MODULE_5__.LOGICAL_EXPRESSION_OPERATORS.forEach((operator) => {
            addSuggestion(operator, {
              insertText: `${operator} $0`,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              kind: monaco.languages.CompletionItemKind.Operator,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
            });
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.InKeyword:
          addSuggestion(_language__WEBPACK_IMPORTED_MODULE_5__.IN, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.IN} $0`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            kind: monaco.languages.CompletionItemKind.Keyword,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.SpanClause:
          addSuggestion(_language__WEBPACK_IMPORTED_MODULE_5__.SPAN, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.SPAN}($0)`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            kind: monaco.languages.CompletionItemKind.Function,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.Field:
          await this.addFieldSuggestions(addSuggestion, monaco, range, currentToken);
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.FromKeyword:
          addSuggestion(_language__WEBPACK_IMPORTED_MODULE_5__.FROM, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.FROM} $0`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            kind: monaco.languages.CompletionItemKind.Keyword,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.SortFunctions:
          _language__WEBPACK_IMPORTED_MODULE_5__.SORT_FIELD_FUNCTIONS.forEach((funct) => {
            addSuggestion(funct, {
              insertText: `${funct}($0)`,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              kind: monaco.languages.CompletionItemKind.Function,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
            });
          });
          break;
      }
    }
    this.templateSrv.getVariables().map((v) => {
      const variable = `$${v.name}`;
      addSuggestion(variable, {
        range,
        label: variable,
        insertText: variable,
        kind: monaco.languages.CompletionItemKind.Variable,
        sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.Low
      });
    });
    return suggestions;
  }
  async addFieldSuggestions(addSuggestion, monaco, range, currentToken) {
    if (this.queryContext.logGroups && this.queryContext.logGroups.length > 0) {
      try {
        let fields = await (0,_utils__WEBPACK_IMPORTED_MODULE_4__.fetchLogGroupFields)(
          this.queryContext.logGroups,
          this.queryContext.region,
          this.templateSrv,
          this.resources
        );
        fields.forEach((field) => {
          if (field !== "") {
            addSuggestion(field, {
              range,
              label: field,
              insertText: currentToken?.is(_tokenTypes__WEBPACK_IMPORTED_MODULE_6__.PPLTokenTypes.Backtick) ? field : `\`${field}\``,
              kind: monaco.languages.CompletionItemKind.Field,
              sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.High
            });
          }
        });
      } catch {
        return;
      }
    }
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-ppl/completion/statementPosition.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStatementPosition: () => (/* binding */ getStatementPosition)
/* harmony export */ });
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/types.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-ppl/language.ts");
/* harmony import */ var _tokenTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-ppl/tokenTypes.ts");




const getStatementPosition = (currentToken) => {
  const previousNonWhiteSpace = currentToken?.getPreviousNonWhiteSpaceToken();
  const nextNonWhiteSpace = currentToken?.getNextNonWhiteSpaceToken();
  const normalizedPreviousNonWhiteSpace = previousNonWhiteSpace?.value?.toLowerCase();
  if (currentToken === null || currentToken?.isWhiteSpace() && previousNonWhiteSpace === null && nextNonWhiteSpace === null || previousNonWhiteSpace?.is(_tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Pipe) && currentToken?.isWhiteSpace() || previousNonWhiteSpace?.is(_tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Delimiter, "|")) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.NewCommand;
  }
  switch (normalizedPreviousNonWhiteSpace) {
    case _language__WEBPACK_IMPORTED_MODULE_1__.WHERE:
      return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.BeforeLogicalExpression;
    case _language__WEBPACK_IMPORTED_MODULE_1__.DEDUP:
      return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FieldList;
    case _language__WEBPACK_IMPORTED_MODULE_1__.FIELDS:
      return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFieldsCommand;
    case _language__WEBPACK_IMPORTED_MODULE_1__.EVENTSTATS:
    case _language__WEBPACK_IMPORTED_MODULE_1__.STATS:
      return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterStatsCommand;
    case _language__WEBPACK_IMPORTED_MODULE_1__.SORT:
      return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SortField;
    case _language__WEBPACK_IMPORTED_MODULE_1__.PARSE:
      return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.Expression;
  }
  if (currentToken?.isWhiteSpace() || currentToken?.is(_tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Backtick) || currentToken?.is(_tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Delimiter, ",") || currentToken?.is(_tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Parenthesis)) {
    const nearestFunction = currentToken?.getPreviousOfType(_tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Function)?.value.toLowerCase();
    const nearestKeyword = currentToken?.getPreviousOfType(_tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Keyword)?.value.toLowerCase();
    const nearestCommand = currentToken?.getPreviousOfType(_tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Command)?.value.toLowerCase();
    if (normalizedPreviousNonWhiteSpace) {
      if (nearestCommand !== _language__WEBPACK_IMPORTED_MODULE_1__.FIELDS && // FIELDS and SORT fields can be preceeded by a + or - which are not arithmetic ops
      nearestCommand !== _language__WEBPACK_IMPORTED_MODULE_1__.SORT && _language__WEBPACK_IMPORTED_MODULE_1__.ARITHMETIC_OPERATORS.includes(normalizedPreviousNonWhiteSpace)) {
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterArithmeticOperator;
      }
      if (_language__WEBPACK_IMPORTED_MODULE_1__.PARAMETERS_WITH_BOOLEAN_VALUES.includes(normalizedPreviousNonWhiteSpace)) {
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterBooleanArgument;
      }
    }
    const isBeforeLogicalExpression = normalizedPreviousNonWhiteSpace && (_language__WEBPACK_IMPORTED_MODULE_1__.COMPARISON_OPERATORS.includes(normalizedPreviousNonWhiteSpace) || _language__WEBPACK_IMPORTED_MODULE_1__.LOGICAL_EXPRESSION_OPERATORS.includes(normalizedPreviousNonWhiteSpace)) || previousNonWhiteSpace?.is(_tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Regexp) || normalizedPreviousNonWhiteSpace === _language__WEBPACK_IMPORTED_MODULE_1__.NOT || // follows a comparison operator, logical operator, NOT or a regex
    nearestFunction && _language__WEBPACK_IMPORTED_MODULE_1__.CONDITION_FUNCTIONS.includes(nearestFunction) && normalizedPreviousNonWhiteSpace === ")";
    if (nearestCommand !== _language__WEBPACK_IMPORTED_MODULE_1__.SORT && // sort command fields can be followed by a field operator, which is handled lower in the block
    nearestCommand !== _language__WEBPACK_IMPORTED_MODULE_1__.EVAL && // eval fields can be followed by an eval clause, which is handled lower in the block
    nearestCommand !== _language__WEBPACK_IMPORTED_MODULE_1__.STATS && // identifiers in STATS can be followed by a stats function, which is handled lower in the block
    (isListingFields(currentToken) || currentToken?.is(_tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Backtick))) {
      return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FieldList;
    }
    if (nearestCommand !== _language__WEBPACK_IMPORTED_MODULE_1__.EVAL && // eval can have StatementPosition.Expression after an equal operator
    isBeforeLogicalExpression) {
      return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.BeforeLogicalExpression;
    }
    if (nearestKeyword === _language__WEBPACK_IMPORTED_MODULE_1__.IN) {
      return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterINKeyword;
    }
    if (nearestKeyword === _language__WEBPACK_IMPORTED_MODULE_1__.BETWEEN) {
      return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FunctionArg;
    }
    if (nearestFunction && (currentToken?.is(_tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Parenthesis) || currentToken?.getNextNonWhiteSpaceToken()?.value === ")")) {
      if ([..._language__WEBPACK_IMPORTED_MODULE_1__.EVAL_FUNCTIONS, ..._language__WEBPACK_IMPORTED_MODULE_1__.CONDITION_FUNCTIONS].includes(nearestFunction)) {
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FunctionArg;
      }
      if (_language__WEBPACK_IMPORTED_MODULE_1__.STATS_FUNCTIONS.includes(nearestFunction)) {
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.StatsFunctionArgument;
      }
      if (_language__WEBPACK_IMPORTED_MODULE_1__.SORT_FIELD_FUNCTIONS.includes(nearestFunction)) {
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SortFieldExpression;
      }
    }
    switch (nearestCommand) {
      case _language__WEBPACK_IMPORTED_MODULE_1__.SORT: {
        if (previousNonWhiteSpace) {
          if (previousNonWhiteSpace.is(_tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Delimiter, ",")) {
            return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SortField;
          } else if (_language__WEBPACK_IMPORTED_MODULE_1__.FIELD_OPERATORS.includes(previousNonWhiteSpace.value)) {
            return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SortFieldExpression;
          }
        }
        break;
      }
      case _language__WEBPACK_IMPORTED_MODULE_1__.DEDUP: {
        const fieldNames = currentToken.getPreviousUntil(_tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Number, [
          _tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Delimiter,
          _tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Whitespace
        ]);
        if (fieldNames?.length && !havePipe(fieldNames)) {
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterDedupFieldNames;
        }
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FieldList;
      }
      case _language__WEBPACK_IMPORTED_MODULE_1__.FIELDS: {
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FieldList;
      }
      case _language__WEBPACK_IMPORTED_MODULE_1__.STATS:
      case _language__WEBPACK_IMPORTED_MODULE_1__.EVENTSTATS: {
        if (nearestKeyword === _language__WEBPACK_IMPORTED_MODULE_1__.BY && currentToken.isWhiteSpace()) {
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterStatsBy;
        } else if (nearestFunction === _language__WEBPACK_IMPORTED_MODULE_1__.SPAN && currentToken?.is(_tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Parenthesis)) {
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FieldList;
        }
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterStatsCommand;
      }
      case _language__WEBPACK_IMPORTED_MODULE_1__.RARE: {
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FieldList;
      }
      case _language__WEBPACK_IMPORTED_MODULE_1__.TOP: {
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FieldList;
      }
      case _language__WEBPACK_IMPORTED_MODULE_1__.HEAD:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterHeadCommand;
      case _language__WEBPACK_IMPORTED_MODULE_1__.EVAL:
        if (previousNonWhiteSpace?.value === "=") {
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.Expression;
        }
        if (currentToken?.isWhiteSpace() && (normalizedPreviousNonWhiteSpace === _language__WEBPACK_IMPORTED_MODULE_1__.EVAL || previousNonWhiteSpace?.is(_tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Delimiter, ","))) {
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.EvalClause;
        }
        if (isBeforeLogicalExpression) {
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.BeforeLogicalExpression;
        }
        break;
    }
  }
  return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.Unknown;
};
const havePipe = (fieldNames) => {
  return fieldNames?.some((word) => word.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Pipe);
};
const isListingFields = (currentToken) => {
  const tokensUntilFieldName = currentToken?.getPreviousUntil(_tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Identifier, [_tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Whitespace]);
  const tokensUntilEscapedFieldName = currentToken?.getPreviousUntil(_tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Backtick, [
    // tokens until `@exampleFieldName`
    _tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Whitespace
  ]);
  const isPreceededByAFieldName = tokensUntilFieldName?.length && tokensUntilFieldName.every((token) => token.is(_tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Delimiter, ",")) || tokensUntilEscapedFieldName?.length && tokensUntilEscapedFieldName.every((token) => token.is(_tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Delimiter, ","));
  const isAfterComma = currentToken?.isWhiteSpace() && currentToken?.getPreviousNonWhiteSpaceToken()?.is(_tokenTypes__WEBPACK_IMPORTED_MODULE_2__.PPLTokenTypes.Delimiter, ",");
  const isFunctionArgument = currentToken?.getNextNonWhiteSpaceToken()?.value === ")";
  return isAfterComma && isPreceededByAFieldName && !isFunctionArgument;
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-ppl/completion/suggestionKinds.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSuggestionKinds: () => (/* binding */ getSuggestionKinds)
/* harmony export */ });
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/types.ts");


function getSuggestionKinds(statementPosition) {
  switch (statementPosition) {
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.NewCommand:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Command];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterHeadCommand:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FromKeyword];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterStatsCommand:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.StatsParameter, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.StatsFunctions];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SortField:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FieldOperators, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.SortFunctions];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.EvalClause:
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.StatsFunctionArgument:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFieldsCommand:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FieldOperators, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FieldList:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterBooleanArgument:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.BooleanLiteral];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterDedupFieldNames:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.DedupParameter];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterStatsBy:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.SpanClause];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SortFieldExpression:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Field, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.SortFunctions];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FunctionArg:
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterArithmeticOperator:
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterINKeyword:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.ValueExpression];
    // logical expression can contain comparison expression, which can start with a value expression
    // so we always need to suggest valueExpression when SuggestionKind.LogicalExpression is present
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.Expression:
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.BeforeLogicalExpression:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LogicalExpression, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.ValueExpression];
  }
  return [];
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-ppl/definition.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-ppl/language.ts");


const cloudWatchPPLLanguageDefinition = {
  id: _language__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_PPL_LANGUAGE_DEFINITION_ID,
  extensions: [],
  aliases: [],
  mimetypes: [],
  loader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-ppl/language.ts"))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudWatchPPLLanguageDefinition);


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-ppl/language.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALL_FUNCTIONS: () => (/* binding */ ALL_FUNCTIONS),
/* harmony export */   ALL_KEYWORDS: () => (/* binding */ ALL_KEYWORDS),
/* harmony export */   ARITHMETIC_OPERATORS: () => (/* binding */ ARITHMETIC_OPERATORS),
/* harmony export */   AS: () => (/* binding */ AS),
/* harmony export */   BETWEEN: () => (/* binding */ BETWEEN),
/* harmony export */   BOOLEAN_LITERALS: () => (/* binding */ BOOLEAN_LITERALS),
/* harmony export */   BY: () => (/* binding */ BY),
/* harmony export */   CLOUDWATCH_PPL_LANGUAGE_DEFINITION_ID: () => (/* binding */ CLOUDWATCH_PPL_LANGUAGE_DEFINITION_ID),
/* harmony export */   COMPARISON_OPERATORS: () => (/* binding */ COMPARISON_OPERATORS),
/* harmony export */   CONDITION_FUNCTIONS: () => (/* binding */ CONDITION_FUNCTIONS),
/* harmony export */   DATE_TIME_FUNCTIONS: () => (/* binding */ DATE_TIME_FUNCTIONS),
/* harmony export */   DEDUP: () => (/* binding */ DEDUP),
/* harmony export */   DEDUP_PARAMETERS: () => (/* binding */ DEDUP_PARAMETERS),
/* harmony export */   EVAL: () => (/* binding */ EVAL),
/* harmony export */   EVAL_FUNCTIONS: () => (/* binding */ EVAL_FUNCTIONS),
/* harmony export */   EVENTSTATS: () => (/* binding */ EVENTSTATS),
/* harmony export */   FIELDS: () => (/* binding */ FIELDS),
/* harmony export */   FIELD_OPERATORS: () => (/* binding */ FIELD_OPERATORS),
/* harmony export */   FROM: () => (/* binding */ FROM),
/* harmony export */   HEAD: () => (/* binding */ HEAD),
/* harmony export */   IN: () => (/* binding */ IN),
/* harmony export */   LOGICAL_EXPRESSION_OPERATORS: () => (/* binding */ LOGICAL_EXPRESSION_OPERATORS),
/* harmony export */   MATH_FUNCTIONS: () => (/* binding */ MATH_FUNCTIONS),
/* harmony export */   MINUS: () => (/* binding */ MINUS),
/* harmony export */   NOT: () => (/* binding */ NOT),
/* harmony export */   PARAMETERS_WITH_BOOLEAN_VALUES: () => (/* binding */ PARAMETERS_WITH_BOOLEAN_VALUES),
/* harmony export */   PARSE: () => (/* binding */ PARSE),
/* harmony export */   PLUS: () => (/* binding */ PLUS),
/* harmony export */   POSITION: () => (/* binding */ POSITION),
/* harmony export */   PPL_COMMANDS: () => (/* binding */ PPL_COMMANDS),
/* harmony export */   PPL_FUNCTIONS: () => (/* binding */ PPL_FUNCTIONS),
/* harmony export */   PPL_OPERATORS: () => (/* binding */ PPL_OPERATORS),
/* harmony export */   RARE: () => (/* binding */ RARE),
/* harmony export */   SORT: () => (/* binding */ SORT),
/* harmony export */   SORT_FIELD_FUNCTIONS: () => (/* binding */ SORT_FIELD_FUNCTIONS),
/* harmony export */   SPAN: () => (/* binding */ SPAN),
/* harmony export */   STATS: () => (/* binding */ STATS),
/* harmony export */   STATS_FUNCTIONS: () => (/* binding */ STATS_FUNCTIONS),
/* harmony export */   STATS_PARAMETERS: () => (/* binding */ STATS_PARAMETERS),
/* harmony export */   TEXT_FUNCTIONS: () => (/* binding */ TEXT_FUNCTIONS),
/* harmony export */   TOP: () => (/* binding */ TOP),
/* harmony export */   WHERE: () => (/* binding */ WHERE),
/* harmony export */   conf: () => (/* binding */ conf),
/* harmony export */   language: () => (/* binding */ language)
/* harmony export */ });

const CLOUDWATCH_PPL_LANGUAGE_DEFINITION_ID = "logs-ppl";
const WHERE = "where";
const FIELDS = "fields";
const DEDUP = "dedup";
const STATS = "stats";
const EVENTSTATS = "eventstats";
const SORT = "sort";
const EVAL = "eval";
const HEAD = "head";
const TOP = "top";
const RARE = "rare";
const PARSE = "parse";
const PPL_COMMANDS = [WHERE, FIELDS, STATS, EVENTSTATS, DEDUP, SORT, TOP, RARE, HEAD, EVAL, PARSE];
const AS = "as";
const BY = "by";
const BETWEEN = "between";
const FROM = "from";
const KEEP_EMPTY = "keepempty";
const CONSECUTIVE = "consecutive";
const PARTITIONS = "partitions";
const ALLNUM = "allnum";
const DELIM = "delim";
const DEDUP_SPLITVALUES = "dedup_splitvalues";
const STATS_PARAMETERS = [PARTITIONS, ALLNUM, DELIM, DEDUP_SPLITVALUES];
const DEDUP_PARAMETERS = [KEEP_EMPTY, CONSECUTIVE];
const PARAMETERS_WITH_BOOLEAN_VALUES = [ALLNUM, DEDUP_SPLITVALUES, KEEP_EMPTY, CONSECUTIVE];
const BOOLEAN_LITERALS = ["true", "false"];
const IN = "in";
const ALL_KEYWORDS = [...STATS_PARAMETERS, ...DEDUP_PARAMETERS, ...BOOLEAN_LITERALS, AS, BY, IN, BETWEEN, FROM];
const MATH_FUNCTIONS = [
  "abs",
  "acos",
  "asin",
  "atan",
  "atan2",
  "ceil",
  "ceiling",
  "conv",
  "cos",
  "cot",
  "crc32",
  "degrees",
  "e",
  "exp",
  "floor",
  "ln",
  "log",
  "log2",
  "log10",
  "mod",
  "pi",
  "pow",
  "power",
  "radians",
  "rand",
  "round",
  "sign",
  "sin",
  "sqrt",
  "cbrt"
];
const DATE_TIME_FUNCTIONS = [
  "datediff",
  "day",
  "dayofmonth",
  "dayofweek",
  "dayofyear",
  "hour",
  "minute",
  "second",
  "month",
  "quarter",
  "weekday",
  "weekofyear",
  "year",
  "now",
  "curdate",
  "current_date"
];
const TEXT_FUNCTIONS = [
  "concat",
  "concat_ws",
  "length",
  "lower",
  "ltrim",
  "reverse",
  "rtrim",
  "right",
  "substring",
  "substr",
  "trim",
  "upper"
];
const SPAN = "span";
const POSITION = "position";
const CONDITION_FUNCTIONS = ["like", "isnull", "isnotnull", "exists", "ifnull", "nullif", "if", "ispresent"];
const SORT_FIELD_FUNCTIONS = ["auto", "str", "ip", "num"];
const PPL_FUNCTIONS = [...MATH_FUNCTIONS, ...DATE_TIME_FUNCTIONS, ...TEXT_FUNCTIONS];
const EVAL_FUNCTIONS = [...PPL_FUNCTIONS, POSITION];
const STATS_FUNCTIONS = [
  "avg",
  "count",
  "sum",
  "min",
  "max",
  "stddev_samp",
  "stddev_pop",
  "percentile",
  "percentile_approx",
  "distinct_count",
  "dc"
];
const ALL_FUNCTIONS = [
  ...PPL_FUNCTIONS,
  ...STATS_FUNCTIONS,
  ...CONDITION_FUNCTIONS,
  ...SORT_FIELD_FUNCTIONS,
  POSITION,
  SPAN
];
const PLUS = "+";
const MINUS = "-";
const NOT = "not";
const FIELD_OPERATORS = [PLUS, MINUS];
const ARITHMETIC_OPERATORS = [PLUS, MINUS, "*", "/", "%"];
const COMPARISON_OPERATORS = [">", ">=", "<", "!=", "<=", "="];
const LOGICAL_EXPRESSION_OPERATORS = ["and", "or", "xor", NOT];
const PPL_OPERATORS = [...ARITHMETIC_OPERATORS, ...LOGICAL_EXPRESSION_OPERATORS, ...COMPARISON_OPERATORS];
const language = {
  defaultToken: "",
  id: CLOUDWATCH_PPL_LANGUAGE_DEFINITION_ID,
  ignoreCase: true,
  commands: PPL_COMMANDS,
  operators: PPL_OPERATORS,
  keywords: ALL_KEYWORDS,
  builtinFunctions: ALL_FUNCTIONS,
  brackets: [{ open: "(", close: ")", token: "delimiter.parenthesis" }],
  tokenizer: {
    root: [
      { include: "@comments" },
      { include: "@regexes" },
      { include: "@whitespace" },
      { include: "@variables" },
      { include: "@strings" },
      { include: "@numbers" },
      [/[,.:]/, "delimiter"],
      [/\|/, "delimiter.pipe"],
      [/[()\[\]]/, "delimiter.parenthesis"],
      [
        /[\w@#$]+/,
        {
          cases: {
            "@commands": "keyword.command",
            "@keywords": "keyword",
            "@builtinFunctions": "predefined",
            "@operators": "operator",
            "@default": "identifier"
          }
        }
      ],
      [/[+\-*/^%=!<>]/, "operator"],
      // handles the math operators
      [/[,.:]/, "operator"]
    ],
    // template variable syntax
    variables: [
      [/\${/, { token: "variable", next: "@variable_bracket" }],
      [/\$[a-zA-Z0-9-_]+/, "variable"]
    ],
    variable_bracket: [
      [/[a-zA-Z0-9-_:]+/, "variable"],
      [/}/, { token: "variable", next: "@pop" }]
    ],
    whitespace: [[/\s+/, "white"]],
    comments: [
      [/^#.*/, "comment"],
      [/\s+#.*/, "comment"]
    ],
    numbers: [
      [/0[xX][0-9a-fA-F]*/, "number"],
      [/[$][+-]*\d*(\.\d*)?/, "number"],
      [/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, "number"]
    ],
    strings: [
      [/'/, { token: "string", next: "@string" }],
      [/"/, { token: "string", next: "@string_double" }],
      [/`/, { token: "string.backtick", next: "@string_backtick" }]
    ],
    string: [
      [/[^']+/, "string"],
      [/''/, "string"],
      [/'/, { token: "string", next: "@pop" }]
    ],
    string_double: [
      [/[^\\"]+/, "string"],
      [/"/, "string", "@pop"]
    ],
    string_backtick: [
      [/[^\\`]+/, "string.backtick"],
      [/`/, "string.backtick", "@pop"]
    ],
    regexes: [[/\/.*?\/(?!\s*\d)/, "regexp"]]
  }
};
const conf = {
  brackets: [["(", ")"]],
  autoClosingPairs: [
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" },
    { open: "`", close: "`" }
  ],
  surroundingPairs: [
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" },
    { open: "`", close: "`" }
  ]
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-ppl/tokenTypes.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PPLTokenTypes: () => (/* binding */ PPLTokenTypes)
/* harmony export */ });
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-ppl/language.ts");


const PPLTokenTypes = {
  Parenthesis: `delimiter.parenthesis.${_language__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_PPL_LANGUAGE_DEFINITION_ID}`,
  Whitespace: `white.${_language__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_PPL_LANGUAGE_DEFINITION_ID}`,
  Keyword: `keyword.${_language__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_PPL_LANGUAGE_DEFINITION_ID}`,
  Command: `keyword.command.${_language__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_PPL_LANGUAGE_DEFINITION_ID}`,
  Delimiter: `delimiter.${_language__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_PPL_LANGUAGE_DEFINITION_ID}`,
  Pipe: `delimiter.pipe.${_language__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_PPL_LANGUAGE_DEFINITION_ID}`,
  Operator: `operator.${_language__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_PPL_LANGUAGE_DEFINITION_ID}`,
  Identifier: `identifier.${_language__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_PPL_LANGUAGE_DEFINITION_ID}`,
  Type: `type.${_language__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_PPL_LANGUAGE_DEFINITION_ID}`,
  Function: `predefined.${_language__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_PPL_LANGUAGE_DEFINITION_ID}`,
  Number: `number.${_language__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_PPL_LANGUAGE_DEFINITION_ID}`,
  String: `string.${_language__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_PPL_LANGUAGE_DEFINITION_ID}`,
  Variable: `variable.${_language__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_PPL_LANGUAGE_DEFINITION_ID}`,
  Comment: `comment.${_language__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_PPL_LANGUAGE_DEFINITION_ID}`,
  Regexp: `regexp.${_language__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_PPL_LANGUAGE_DEFINITION_ID}`,
  Backtick: `string.backtick.${_language__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_PPL_LANGUAGE_DEFINITION_ID}`
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/SQLGenerator.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SQLGenerator)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/expressions.ts");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/consts.ts");





const isAccountIdDefined = (accountId) => !!(accountId && accountId !== "all");
class SQLGenerator {
  constructor(templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)()) {
    this.templateSrv = templateSrv;
  }
  expressionToSqlQuery({ select, from, where, groupBy, orderBy, orderByDirection, limit }, accountId) {
    if (!from || !select?.name || !select?.parameters?.length) {
      return void 0;
    }
    let parts = [];
    this.appendSelect(select, parts);
    this.appendFrom(from, parts);
    this.appendAccountId(parts, accountId);
    this.appendWhere(where, parts, true, where?.expressions?.length ?? 0, accountId);
    this.appendGroupBy(groupBy, parts);
    this.appendOrderBy(orderBy, orderByDirection, parts);
    this.appendLimit(limit, parts);
    return parts.join(" ");
  }
  appendSelect(select, parts) {
    parts.push("SELECT");
    this.appendFunction(select, parts);
  }
  appendFrom(from, parts) {
    parts.push("FROM");
    from?.type === _expressions__WEBPACK_IMPORTED_MODULE_2__.QueryEditorExpressionType.Function ? this.appendFunction(from, parts) : parts.push(this.formatValue(from?.property?.name ?? ""));
  }
  appendAccountId(parts, accountId) {
    if (!isAccountIdDefined(accountId)) {
      return;
    }
    parts.push(`WHERE AWS.AccountId = '${accountId}'`);
  }
  appendWhere(filter, parts, isTopLevelExpression, topLevelExpressionsCount, accountId) {
    if (!filter) {
      return;
    }
    const hasChildExpressions = "expressions" in filter && filter.expressions.length > 0;
    if (isTopLevelExpression && hasChildExpressions) {
      if (isAccountIdDefined(accountId)) {
        parts.push("AND");
      } else {
        parts.push("WHERE");
      }
    }
    if (filter.type === _expressions__WEBPACK_IMPORTED_MODULE_2__.QueryEditorExpressionType.And) {
      const andParts = [];
      filter.expressions.map((exp) => this.appendWhere(exp, andParts, false, topLevelExpressionsCount));
      if (andParts.length === 0) {
        return;
      }
      const andCombined = andParts.join(" AND ");
      const wrapInParentheses = !isTopLevelExpression && topLevelExpressionsCount > 1 && andParts.length > 1;
      return parts.push(wrapInParentheses ? `(${andCombined})` : andCombined);
    }
    if (filter.type === _expressions__WEBPACK_IMPORTED_MODULE_2__.QueryEditorExpressionType.Or) {
      const orParts = [];
      filter.expressions.map((exp) => this.appendWhere(exp, orParts, false, topLevelExpressionsCount));
      if (orParts.length === 0) {
        return;
      }
      const orCombined = orParts.join(" OR ");
      const wrapInParentheses = !isTopLevelExpression && topLevelExpressionsCount > 1 && orParts.length > 1;
      parts.push(wrapInParentheses ? `(${orCombined})` : orCombined);
      return;
    }
    if (filter.type === _expressions__WEBPACK_IMPORTED_MODULE_2__.QueryEditorExpressionType.Operator) {
      return this.appendOperator(filter, parts);
    }
  }
  appendGroupBy(groupBy, parts) {
    const groupByParts = [];
    for (const expression of groupBy?.expressions ?? []) {
      if (expression?.type !== _expressions__WEBPACK_IMPORTED_MODULE_2__.QueryEditorExpressionType.GroupBy || !expression.property.name) {
        continue;
      }
      groupByParts.push(this.formatValue(expression.property.name));
    }
    if (groupByParts.length > 0) {
      parts.push(`GROUP BY ${groupByParts.join(", ")}`);
    }
  }
  appendOrderBy(orderBy, orderByDirection, parts) {
    if (orderBy) {
      parts.push("ORDER BY");
      this.appendFunction(orderBy, parts);
      parts.push(orderByDirection ?? "ASC");
    }
  }
  appendLimit(limit, parts) {
    limit && parts.push(`LIMIT ${limit}`);
  }
  appendOperator(expression, parts, prefix) {
    const { property, operator } = expression;
    if (!property.name || !operator.name || !operator.value) {
      return;
    }
    parts.push(`${this.formatValue(property.name)} ${operator.name} '${operator.value}'`);
  }
  appendFunction(select, parts) {
    if (!select?.name) {
      return;
    }
    const params = (select.parameters ?? []).map((p) => p.name && this.formatValue(p.name)).filter(Boolean).join(", ");
    parts.push(`${select.name}(${params})`);
  }
  formatValue(label) {
    const specialCharacters = /[/\s\.%-]/;
    const startsWithNumber = /^\d/;
    const interpolated = this.templateSrv.replace(label, {}, "raw");
    if (interpolated !== "AWS.AccountId") {
      if (specialCharacters.test(interpolated) || startsWithNumber.test(interpolated) || _consts__WEBPACK_IMPORTED_MODULE_3__.InsightsReservedKeywords.some((e) => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.toLower)(e) === (0,lodash__WEBPACK_IMPORTED_MODULE_0__.toLower)(interpolated))) {
        return `"${label}"`;
      }
    }
    return label;
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/completion/CompletionItemProvider.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SQLCompletionItemProvider: () => (/* binding */ SQLCompletionItemProvider)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _monarch_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/CompletionItemProvider.ts");
/* harmony import */ var _monarch_commands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/commands.ts");
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/types.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/language.ts");
/* harmony import */ var _statementPosition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/completion/statementPosition.ts");
/* harmony import */ var _suggestionKind__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/completion/suggestionKind.ts");
/* harmony import */ var _tokenUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/completion/tokenUtils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/completion/types.ts");











class SQLCompletionItemProvider extends _monarch_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_2__.CompletionItemProvider {
  constructor(resources, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)()) {
    super(resources, templateSrv);
    this.region = resources.getActualRegion() ?? "";
    this.getStatementPosition = _statementPosition__WEBPACK_IMPORTED_MODULE_6__.getStatementPosition;
    this.getSuggestionKinds = _suggestionKind__WEBPACK_IMPORTED_MODULE_7__.getSuggestionKinds;
    this.tokenTypes = _types__WEBPACK_IMPORTED_MODULE_9__.SQLTokenTypes;
  }
  setRegion(region) {
    this.region = region;
  }
  async getSuggestions(monaco, currentToken, suggestionKinds, statementPosition, position) {
    let suggestions = [];
    const invalidRangeToken = currentToken?.isWhiteSpace() || currentToken?.isParenthesis();
    const range = invalidRangeToken || !currentToken?.range ? monaco.Range.fromPositions(position) : currentToken?.range;
    const toCompletionItem = (value, rest = {}) => {
      const item = {
        label: value,
        insertText: value,
        kind: monaco.languages.CompletionItemKind.Field,
        range,
        sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_4__.CompletionItemPriority.Medium,
        ...rest
      };
      return item;
    };
    function addSuggestion(value, rest = {}) {
      suggestions = [...suggestions, toCompletionItem(value, rest)];
    }
    for (const suggestion of suggestionKinds) {
      switch (suggestion) {
        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.SelectKeyword:
          addSuggestion(_language__WEBPACK_IMPORTED_MODULE_5__.SELECT, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.SELECT} $0`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            kind: monaco.languages.CompletionItemKind.Keyword,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.FunctionsWithArguments:
          _language__WEBPACK_IMPORTED_MODULE_5__.STATISTICS.map(
            (s) => addSuggestion(s, {
              insertText: `${s}($0)`,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST,
              kind: monaco.languages.CompletionItemKind.Function
            })
          );
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.FunctionsWithoutArguments:
          _language__WEBPACK_IMPORTED_MODULE_5__.STATISTICS.map(
            (s) => addSuggestion(s, {
              insertText: `${s}() `,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST,
              kind: monaco.languages.CompletionItemKind.Function
            })
          );
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.Metrics:
          {
            const namespaceToken = (0,_tokenUtils__WEBPACK_IMPORTED_MODULE_8__.getNamespaceToken)(currentToken);
            if (namespaceToken?.value) {
              const metrics = await this.resources.getMetrics({
                namespace: namespaceToken?.value.replace(/\"/g, ""),
                region: this.region
              });
              metrics.forEach((m) => m.value && addSuggestion(m.value));
            } else {
              const metrics = await this.resources.getAllMetrics({ region: this.region });
              (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniq)(metrics.map((m) => m.metricName)).forEach((m) => m && addSuggestion(m, { insertText: m }));
            }
          }
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.FromKeyword:
          addSuggestion(_language__WEBPACK_IMPORTED_MODULE_5__.FROM, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.FROM} `,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.SchemaKeyword:
          addSuggestion(_language__WEBPACK_IMPORTED_MODULE_5__.SCHEMA, {
            sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_4__.CompletionItemPriority.High,
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.SCHEMA}($0)`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST,
            kind: monaco.languages.CompletionItemKind.Function
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.Namespaces:
          const metricNameToken = (0,_tokenUtils__WEBPACK_IMPORTED_MODULE_8__.getMetricNameToken)(currentToken);
          let namespaces = [];
          if (metricNameToken?.value) {
            const metrics = await this.resources.getMetrics({ region: this.region });
            const metricName = this.templateSrv.replace(metricNameToken.value);
            namespaces = metrics.filter((m) => m.metricName === metricName).map((m) => m.namespace);
          } else {
            const ns = await this.resources.getNamespaces();
            namespaces = ns.map((n) => n.value);
          }
          namespaces.map((n) => addSuggestion(`"${n}"`, { insertText: `"${n}"` }));
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.LabelKeys:
          {
            const metricNameToken2 = (0,_tokenUtils__WEBPACK_IMPORTED_MODULE_8__.getMetricNameToken)(currentToken);
            const namespaceToken = (0,_tokenUtils__WEBPACK_IMPORTED_MODULE_8__.getNamespaceToken)(currentToken);
            if (namespaceToken?.value) {
              let dimensionFilters = {};
              let labelKeyTokens;
              if (statementPosition === _monarch_types__WEBPACK_IMPORTED_MODULE_4__.StatementPosition.SchemaFuncExtraArgument) {
                labelKeyTokens = namespaceToken?.getNextUntil(this.tokenTypes.Parenthesis, [
                  this.tokenTypes.Delimiter,
                  this.tokenTypes.Whitespace
                ]);
              } else if (statementPosition === _monarch_types__WEBPACK_IMPORTED_MODULE_4__.StatementPosition.AfterGroupByKeywords) {
                labelKeyTokens = currentToken?.getPreviousUntil(this.tokenTypes.Keyword, [
                  this.tokenTypes.Delimiter,
                  this.tokenTypes.Whitespace
                ]);
              }
              dimensionFilters = (labelKeyTokens || []).reduce((acc, curr) => {
                return { ...acc, [curr.value]: null };
              }, {});
              const keys = await this.resources.getDimensionKeys(
                {
                  namespace: this.templateSrv.replace(namespaceToken.value.replace(/\"/g, "")),
                  region: this.templateSrv.replace(this.region),
                  metricName: metricNameToken2?.value,
                  dimensionFilters
                },
                false
              );
              keys.map((m) => {
                const key = /[\s\.-]/.test(m.value ?? "") ? `"${m.value}"` : m.value;
                key && addSuggestion(key);
              });
            }
          }
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.LabelValues:
          {
            const namespaceToken = (0,_tokenUtils__WEBPACK_IMPORTED_MODULE_8__.getNamespaceToken)(currentToken);
            const metricNameToken2 = (0,_tokenUtils__WEBPACK_IMPORTED_MODULE_8__.getMetricNameToken)(currentToken);
            const labelKey = currentToken?.getPreviousNonWhiteSpaceToken()?.getPreviousNonWhiteSpaceToken();
            if (namespaceToken?.value && labelKey?.value && metricNameToken2?.value) {
              const values = await this.resources.getDimensionValues({
                region: this.region,
                namespace: namespaceToken.value.replace(/\"/g, ""),
                metricName: metricNameToken2.value,
                dimensionKey: labelKey.value
              });
              values.map(
                (o) => addSuggestion(`'${o.value}'`, { insertText: `'${o.value}' `, command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST })
              );
            }
          }
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.LogicalOperators:
          _language__WEBPACK_IMPORTED_MODULE_5__.LOGICAL_OPERATORS.map(
            (o) => addSuggestion(`${o}`, {
              insertText: `${o} `,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST,
              sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_4__.CompletionItemPriority.MediumHigh
            })
          );
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.WhereKeyword:
          addSuggestion(`${_language__WEBPACK_IMPORTED_MODULE_5__.WHERE}`, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.WHERE} `,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST,
            sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_4__.CompletionItemPriority.High
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.ComparisonOperators:
          _language__WEBPACK_IMPORTED_MODULE_5__.COMPARISON_OPERATORS.map((o) => addSuggestion(`${o}`, { insertText: `${o} `, command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST }));
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.GroupByKeywords:
          addSuggestion(`${_language__WEBPACK_IMPORTED_MODULE_5__.GROUP} ${_language__WEBPACK_IMPORTED_MODULE_5__.BY}`, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.GROUP} ${_language__WEBPACK_IMPORTED_MODULE_5__.BY} `,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST,
            sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_4__.CompletionItemPriority.MediumHigh
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.OrderByKeywords:
          addSuggestion(`${_language__WEBPACK_IMPORTED_MODULE_5__.ORDER} ${_language__WEBPACK_IMPORTED_MODULE_5__.BY}`, {
            insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.ORDER} ${_language__WEBPACK_IMPORTED_MODULE_5__.BY} `,
            command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST,
            sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_4__.CompletionItemPriority.Medium
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.LimitKeyword:
          addSuggestion(_language__WEBPACK_IMPORTED_MODULE_5__.LIMIT, { insertText: `${_language__WEBPACK_IMPORTED_MODULE_5__.LIMIT} `, sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_4__.CompletionItemPriority.MediumLow });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_4__.SuggestionKind.SortOrderDirectionKeyword:
          [_language__WEBPACK_IMPORTED_MODULE_5__.ASC, _language__WEBPACK_IMPORTED_MODULE_5__.DESC].map(
            (s) => addSuggestion(s, {
              insertText: `${s} `,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_3__.TRIGGER_SUGGEST
            })
          );
          break;
      }
    }
    this.templateSrv.getVariables().map((v) => {
      const variable = `$${v.name}`;
      addSuggestion(variable, {
        range,
        label: variable,
        insertText: variable,
        kind: monaco.languages.CompletionItemKind.Variable,
        sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_4__.CompletionItemPriority.Low
      });
    });
    return suggestions;
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/completion/statementPosition.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStatementPosition: () => (/* binding */ getStatementPosition)
/* harmony export */ });
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/types.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/language.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/completion/types.ts");




function getStatementPosition(currentToken) {
  const previousNonWhiteSpace = currentToken?.getPreviousNonWhiteSpaceToken();
  const previousKeyword = currentToken?.getPreviousKeyword();
  const previousIsSlash = currentToken?.getPreviousNonWhiteSpaceToken()?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Operator, "/");
  if (currentToken === null || currentToken.isWhiteSpace() && currentToken.previous === null || currentToken.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.SELECT) && currentToken.previous === null || previousIsSlash || currentToken.isIdentifier() && (previousIsSlash || currentToken?.previous === null)) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SelectKeyword;
  }
  if (previousNonWhiteSpace?.value === _language__WEBPACK_IMPORTED_MODULE_1__.SELECT) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterSelectKeyword;
  }
  if ((previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, "(") || currentToken?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, "()")) && previousKeyword?.value === _language__WEBPACK_IMPORTED_MODULE_1__.SELECT) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterSelectFuncFirstArgument;
  }
  if (previousKeyword?.value === _language__WEBPACK_IMPORTED_MODULE_1__.SELECT && previousNonWhiteSpace?.isParenthesis()) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FromKeyword;
  }
  if (previousNonWhiteSpace?.value === _language__WEBPACK_IMPORTED_MODULE_1__.FROM) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFromKeyword;
  }
  if ((previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, "(") || currentToken?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, "()")) && previousKeyword?.value === _language__WEBPACK_IMPORTED_MODULE_1__.SCHEMA) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SchemaFuncFirstArgument;
  }
  if (previousKeyword?.value === _language__WEBPACK_IMPORTED_MODULE_1__.SCHEMA && previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Delimiter, ",")) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SchemaFuncExtraArgument;
  }
  if (previousKeyword?.value === _language__WEBPACK_IMPORTED_MODULE_1__.FROM && previousNonWhiteSpace?.isDoubleQuotedString() || previousKeyword?.value === _language__WEBPACK_IMPORTED_MODULE_1__.FROM && previousNonWhiteSpace?.isVariable() || previousKeyword?.value === _language__WEBPACK_IMPORTED_MODULE_1__.SCHEMA && previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, ")")) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFrom;
  }
  if (previousKeyword?.value === _language__WEBPACK_IMPORTED_MODULE_1__.WHERE && (previousNonWhiteSpace?.isKeyword() || previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, "(") || previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Operator, _language__WEBPACK_IMPORTED_MODULE_1__.AND))) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhereKey;
  }
  if (previousKeyword?.value === _language__WEBPACK_IMPORTED_MODULE_1__.WHERE && (previousNonWhiteSpace?.isIdentifier() || previousNonWhiteSpace?.isDoubleQuotedString())) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhereComparisonOperator;
  }
  if (previousKeyword?.value === _language__WEBPACK_IMPORTED_MODULE_1__.WHERE && (previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Operator, _language__WEBPACK_IMPORTED_MODULE_1__.EQUALS) || previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Operator, _language__WEBPACK_IMPORTED_MODULE_1__.NOT_EQUALS))) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhereValue;
  }
  if (previousKeyword?.value === _language__WEBPACK_IMPORTED_MODULE_1__.WHERE && (previousNonWhiteSpace?.isString() || previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis, ")"))) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterWhereValue;
  }
  if (previousKeyword?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.BY) && previousKeyword?.getPreviousKeyword()?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.GROUP) && (previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.BY) || previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Delimiter, ","))) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterGroupByKeywords;
  }
  if (previousKeyword?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.BY) && previousKeyword?.getPreviousKeyword()?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.GROUP) && (previousNonWhiteSpace?.isIdentifier() || previousNonWhiteSpace?.isDoubleQuotedString())) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterGroupBy;
  }
  if (previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.BY) && previousNonWhiteSpace?.getPreviousKeyword()?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.ORDER)) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterOrderByKeywords;
  }
  if (previousKeyword?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.BY) && previousKeyword?.getPreviousKeyword()?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.ORDER) && previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Parenthesis) && previousNonWhiteSpace?.getPreviousNonWhiteSpaceToken()?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Function)) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterOrderByFunction;
  }
  if (previousKeyword?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.DESC) || previousKeyword?.is(_types__WEBPACK_IMPORTED_MODULE_2__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_1__.ASC)) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterOrderByDirection;
  }
  return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.Unknown;
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/completion/suggestionKind.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSuggestionKinds: () => (/* binding */ getSuggestionKinds)
/* harmony export */ });
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/types.ts");


function getSuggestionKinds(statementPosition) {
  switch (statementPosition) {
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SelectKeyword:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.SelectKeyword];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterSelectKeyword:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterSelectFuncFirstArgument:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Metrics];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFromKeyword:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Namespaces, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.SchemaKeyword];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SchemaFuncFirstArgument:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Namespaces];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SchemaFuncExtraArgument:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LabelKeys];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FromKeyword:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FromKeyword];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFrom:
      return [
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.WhereKeyword,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.GroupByKeywords,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.OrderByKeywords,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LimitKeyword
      ];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhereKey:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LabelKeys];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhereComparisonOperator:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.ComparisonOperators];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WhereValue:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LabelValues];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterWhereValue:
      return [
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LogicalOperators,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.GroupByKeywords,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.OrderByKeywords,
        _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LimitKeyword
      ];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterGroupByKeywords:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LabelKeys];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterGroupBy:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.OrderByKeywords, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LimitKeyword];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterOrderByKeywords:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithoutArguments];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterOrderByFunction:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.SortOrderDirectionKeyword, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LimitKeyword];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterOrderByDirection:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.LimitKeyword];
  }
  return [];
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/completion/tokenUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFromKeywordToken: () => (/* binding */ getFromKeywordToken),
/* harmony export */   getMetricNameToken: () => (/* binding */ getMetricNameToken),
/* harmony export */   getNamespaceToken: () => (/* binding */ getNamespaceToken),
/* harmony export */   getSelectStatisticToken: () => (/* binding */ getSelectStatisticToken),
/* harmony export */   getSelectToken: () => (/* binding */ getSelectToken)
/* harmony export */ });
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/language.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/completion/types.ts");



const getSelectToken = (currentToken) => currentToken?.getPreviousOfType(_types__WEBPACK_IMPORTED_MODULE_1__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_0__.SELECT) ?? null;
const getSelectStatisticToken = (currentToken) => {
  const assumedStatisticToken = getSelectToken(currentToken)?.getNextNonWhiteSpaceToken();
  return assumedStatisticToken?.isVariable() || assumedStatisticToken?.isFunction() ? assumedStatisticToken : null;
};
const getMetricNameToken = (currentToken) => {
  const assumedMetricNameToken = getSelectStatisticToken(currentToken)?.next?.next;
  return assumedMetricNameToken?.isVariable() || assumedMetricNameToken?.isIdentifier() ? assumedMetricNameToken : null;
};
const getFromKeywordToken = (currentToken) => {
  const selectToken = getSelectToken(currentToken);
  return selectToken?.getNextOfType(_types__WEBPACK_IMPORTED_MODULE_1__.SQLTokenTypes.Keyword, _language__WEBPACK_IMPORTED_MODULE_0__.FROM);
};
const getNamespaceToken = (currentToken) => {
  const fromToken = getFromKeywordToken(currentToken);
  const nextNonWhiteSpace = fromToken?.getNextNonWhiteSpaceToken();
  if (nextNonWhiteSpace?.isDoubleQuotedString() || nextNonWhiteSpace?.isVariable() && nextNonWhiteSpace?.value.toUpperCase() !== _language__WEBPACK_IMPORTED_MODULE_0__.SCHEMA) {
    return nextNonWhiteSpace;
  } else if (nextNonWhiteSpace?.isKeyword() && nextNonWhiteSpace.next?.is(_types__WEBPACK_IMPORTED_MODULE_1__.SQLTokenTypes.Parenthesis, "(")) {
    const assumedNamespaceToken = nextNonWhiteSpace.next?.next;
    if (assumedNamespaceToken?.isDoubleQuotedString() || assumedNamespaceToken?.isVariable()) {
      return assumedNamespaceToken;
    }
  }
  return null;
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/completion/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SQLTokenTypes: () => (/* binding */ SQLTokenTypes)
/* harmony export */ });

const SQLTokenTypes = {
  Parenthesis: "delimiter.parenthesis.sql",
  Whitespace: "white.sql",
  Keyword: "keyword.sql",
  Delimiter: "delimiter.sql",
  Operator: "operator.sql",
  Identifier: "identifier.sql",
  Type: "type.sql",
  Function: "predefined.sql",
  Number: "number.sql",
  String: "string.sql",
  Variable: "variable.sql",
  Comment: "comment.sql",
  Regexp: "regexp.sql"
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/consts.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsightsReservedKeywords: () => (/* binding */ InsightsReservedKeywords)
/* harmony export */ });

const InsightsReservedKeywords = [
  "ABORT",
  "ABORTSESSION",
  "ABS",
  "ABSOLUTE",
  "ACCESS",
  "ACCESSIBLE",
  "ACCESS_LOCK",
  "ACCOUNT",
  "ACOS",
  "ACOSH",
  "ACTION",
  "ADD",
  "ADD_MONTHS",
  "ADMIN",
  "AFTER",
  "AGGREGATE",
  "ALIAS",
  "ALL",
  "ALLOCATE",
  "ALLOW",
  "ALTER",
  "ALTERAND",
  "AMP",
  "ANALYSE",
  "ANALYZE",
  "AND",
  "ANSIDATE",
  "ANY",
  "ARE",
  "ARRAY",
  "ARRAY_AGG",
  "ARRAY_EXISTS",
  "ARRAY_MAX_CARDINALITY",
  "AS",
  "ASC",
  "ASENSITIVE",
  "ASIN",
  "ASINH",
  "ASSERTION",
  "ASSOCIATE",
  "ASUTIME",
  "ASYMMETRIC",
  "AT",
  "ATAN",
  "ATAN2",
  "ATANH",
  "ATOMIC",
  "AUDIT",
  "AUTHORIZATION",
  "AUX",
  "AUXILIARY",
  "AVE",
  "AVERAGE",
  "AVG",
  "BACKUP",
  "BEFORE",
  "BEGIN",
  "BEGIN_FRAME",
  "BEGIN_PARTITION",
  "BETWEEN",
  "BIGINT",
  "BINARY",
  "BIT",
  "BLOB",
  "BOOLEAN",
  "BOTH",
  "BREADTH",
  "BREAK",
  "BROWSE",
  "BT",
  "BUFFERPOOL",
  "BULK",
  "BUT",
  "BY",
  "BYTE",
  "BYTEINT",
  "BYTES",
  "CALL",
  "CALLED",
  "CAPTURE",
  "CARDINALITY",
  "CASCADE",
  "CASCADED",
  "CASE",
  "CASESPECIFIC",
  "CASE_N",
  "CAST",
  "CATALOG",
  "CCSID",
  "CD",
  "CEIL",
  "CEILING",
  "CHANGE",
  "CHAR",
  "CHAR2HEXINT",
  "CHARACTER",
  "CHARACTERS",
  "CHARACTER_LENGTH",
  "CHARS",
  "CHAR_LENGTH",
  "CHECK",
  "CHECKPOINT",
  "CLASS",
  "CLASSIFIER",
  "CLOB",
  "CLONE",
  "CLOSE",
  "CLUSTER",
  "CLUSTERED",
  "CM",
  "COALESCE",
  "COLLATE",
  "COLLATION",
  "COLLECT",
  "COLLECTION",
  "COLLID",
  "COLUMN",
  "COLUMN_VALUE",
  "COMMENT",
  "COMMIT",
  "COMPLETION",
  "COMPRESS",
  "COMPUTE",
  "CONCAT",
  "CONCURRENTLY",
  "CONDITION",
  "CONNECT",
  "CONNECTION",
  "CONSTRAINT",
  "CONSTRAINTS",
  "CONSTRUCTOR",
  "CONTAINS",
  "CONTAINSTABLE",
  "CONTENT",
  "CONTINUE",
  "CONVERT",
  "CONVERT_TABLE_HEADER",
  "COPY",
  "CORR",
  "CORRESPONDING",
  "COS",
  "COSH",
  "COUNT",
  "COVAR_POP",
  "COVAR_SAMP",
  "CREATE",
  "CROSS",
  "CS",
  "CSUM",
  "CT",
  "CUBE",
  "CUME_DIST",
  "CURRENT",
  "CURRENT_CATALOG",
  "CURRENT_DATE",
  "CURRENT_DEFAULT_TRANSFORM_GROUP",
  "CURRENT_LC_CTYPE",
  "CURRENT_PATH",
  "CURRENT_ROLE",
  "CURRENT_ROW",
  "CURRENT_SCHEMA",
  "CURRENT_SERVER",
  "CURRENT_TIME",
  "CURRENT_TIMESTAMP",
  "CURRENT_TIMEZONE",
  "CURRENT_TRANSFORM_GROUP_FOR_TYPE",
  "CURRENT_USER",
  "CURRVAL",
  "CURSOR",
  "CV",
  "CYCLE",
  "DATA",
  "DATABASE",
  "DATABASES",
  "DATABLOCKSIZE",
  "DATE",
  "DATEFORM",
  "DAY",
  "DAYS",
  "DAY_HOUR",
  "DAY_MICROSECOND",
  "DAY_MINUTE",
  "DAY_SECOND",
  "DBCC",
  "DBINFO",
  "DEALLOCATE",
  "DEC",
  "DECFLOAT",
  "DECIMAL",
  "DECLARE",
  "DEFAULT",
  "DEFERRABLE",
  "DEFERRED",
  "DEFINE",
  "DEGREES",
  "DEL",
  "DELAYED",
  "DELETE",
  "DENSE_RANK",
  "DENY",
  "DEPTH",
  "DEREF",
  "DESC",
  "DESCRIBE",
  "DESCRIPTOR",
  "DESTROY",
  "DESTRUCTOR",
  "DETERMINISTIC",
  "DIAGNOSTIC",
  "DIAGNOSTICS",
  "DICTIONARY",
  "DISABLE",
  "DISABLED",
  "DISALLOW",
  "DISCONNECT",
  "DISK",
  "DISTINCT",
  "DISTINCTROW",
  "DISTRIBUTED",
  "DIV",
  "DO",
  "DOCUMENT",
  "DOMAIN",
  "DOUBLE",
  "DROP",
  "DSSIZE",
  "DUAL",
  "DUMP",
  "DYNAMIC",
  "EACH",
  "ECHO",
  "EDITPROC",
  "ELEMENT",
  "ELSE",
  "ELSEIF",
  "EMPTY",
  "ENABLED",
  "ENCLOSED",
  "ENCODING",
  "ENCRYPTION",
  "END",
  "END-EXEC",
  "ENDING",
  "END_FRAME",
  "END_PARTITION",
  "EQ",
  "EQUALS",
  "ERASE",
  "ERRLVL",
  "ERROR",
  "ERRORFILES",
  "ERRORTABLES",
  "ESCAPE",
  "ESCAPED",
  "ET",
  "EVERY",
  "EXCEPT",
  "EXCEPTION",
  "EXCLUSIVE",
  "EXEC",
  "EXECUTE",
  "EXISTS",
  "EXIT",
  "EXP",
  "EXPLAIN",
  "EXTERNAL",
  "EXTRACT",
  "FALLBACK",
  "FALSE",
  "FASTEXPORT",
  "FENCED",
  "FETCH",
  "FIELDPROC",
  "FILE",
  "FILLFACTOR",
  "FILTER",
  "FINAL",
  "FIRST",
  "FIRST_VALUE",
  "FLOAT",
  "FLOAT4",
  "FLOAT8",
  "FLOOR",
  "FOR",
  "FORCE",
  "FOREIGN",
  "FORMAT",
  "FOUND",
  "FRAME_ROW",
  "FREE",
  "FREESPACE",
  "FREETEXT",
  "FREETEXTTABLE",
  "FREEZE",
  "FROM",
  "FULL",
  "FULLTEXT",
  "FUNCTION",
  "FUSION",
  "GE",
  "GENERAL",
  "GENERATED",
  "GET",
  "GIVE",
  "GLOBAL",
  "GO",
  "GOTO",
  "GRANT",
  "GRAPHIC",
  "GROUP",
  "GROUPING",
  "GROUPS",
  "GT",
  "HANDLER",
  "HASH",
  "HASHAMP",
  "HASHBAKAMP",
  "HASHBUCKET",
  "HASHROW",
  "HAVING",
  "HELP",
  "HIGH_PRIORITY",
  "HOLD",
  "HOLDLOCK",
  "HOUR",
  "HOURS",
  "HOUR_MICROSECOND",
  "HOUR_MINUTE",
  "HOUR_SECOND",
  "IDENTIFIED",
  "IDENTITY",
  "IDENTITYCOL",
  "IDENTITY_INSERT",
  "IF",
  "IGNORE",
  "ILIKE",
  "IMMEDIATE",
  "IN",
  "INCLUSIVE",
  "INCONSISTENT",
  "INCREMENT",
  "INDEX",
  "INDICATOR",
  "INFILE",
  "INHERIT",
  "INITIAL",
  "INITIALIZE",
  "INITIALLY",
  "INITIATE",
  "INNER",
  "INOUT",
  "INPUT",
  "INS",
  "INSENSITIVE",
  "INSERT",
  "INSTEAD",
  "INT",
  "INT1",
  "INT2",
  "INT3",
  "INT4",
  "INT8",
  "INTEGER",
  "INTEGERDATE",
  "INTERSECT",
  "INTERSECTION",
  "INTERVAL",
  "INTO",
  "IO_AFTER_GTIDS",
  "IO_BEFORE_GTIDS",
  "IS",
  "ISNULL",
  "ISOBID",
  "ISOLATION",
  "ITERATE",
  "JAR",
  "JOIN",
  "JOURNAL",
  "JSON_ARRAY",
  "JSON_ARRAYAGG",
  "JSON_EXISTS",
  "JSON_OBJECT",
  "JSON_OBJECTAGG",
  "JSON_QUERY",
  "JSON_TABLE",
  "JSON_TABLE_PRIMITIVE",
  "JSON_VALUE",
  "KEEP",
  "KEY",
  "KEYS",
  "KILL",
  "KURTOSIS",
  "LABEL",
  "LAG",
  "LANGUAGE",
  "LARGE",
  "LAST",
  "LAST_VALUE",
  "LATERAL",
  "LC_CTYPE",
  "LE",
  "LEAD",
  "LEADING",
  "LEAVE",
  "LEFT",
  "LESS",
  "LEVEL",
  "LIKE",
  "LIKE_REGEX",
  "LIMIT",
  "LINEAR",
  "LINENO",
  "LINES",
  "LISTAGG",
  "LN",
  "LOAD",
  "LOADING",
  "LOCAL",
  "LOCALE",
  "LOCALTIME",
  "LOCALTIMESTAMP",
  "LOCATOR",
  "LOCATORS",
  "LOCK",
  "LOCKING",
  "LOCKMAX",
  "LOCKSIZE",
  "LOG",
  "LOG10",
  "LOGGING",
  "LOGON",
  "LONG",
  "LONGBLOB",
  "LONGTEXT",
  "LOOP",
  "LOWER",
  "LOW_PRIORITY",
  "LT",
  "MACRO",
  "MAINTAINED",
  "MAP",
  "MASTER_BIND",
  "MASTER_SSL_VERIFY_SERVER_CERT",
  "MATCH",
  "MATCHES",
  "MATCH_NUMBER",
  "MATCH_RECOGNIZE",
  "MATERIALIZED",
  "MAVG",
  "MAX",
  "MAXEXTENTS",
  "MAXIMUM",
  "MAXVALUE",
  "MCHARACTERS",
  "MDIFF",
  "MEDIUMBLOB",
  "MEDIUMINT",
  "MEDIUMTEXT",
  "MEMBER",
  "MERGE",
  "METHOD",
  "MICROSECOND",
  "MICROSECONDS",
  "MIDDLEINT",
  "MIN",
  "MINDEX",
  "MINIMUM",
  "MINUS",
  "MINUTE",
  "MINUTES",
  "MINUTE_MICROSECOND",
  "MINUTE_SECOND",
  "MLINREG",
  "MLOAD",
  "MLSLABEL",
  "MOD",
  "MODE",
  "MODIFIES",
  "MODIFY",
  "MODULE",
  "MONITOR",
  "MONRESOURCE",
  "MONSESSION",
  "MONTH",
  "MONTHS",
  "MSUBSTR",
  "MSUM",
  "MULTISET",
  "NAMED",
  "NAMES",
  "NATIONAL",
  "NATURAL",
  "NCHAR",
  "NCLOB",
  "NE",
  "NESTED_TABLE_ID",
  "NEW",
  "NEW_TABLE",
  "NEXT",
  "NEXTVAL",
  "NO",
  "NOAUDIT",
  "NOCHECK",
  "NOCOMPRESS",
  "NONCLUSTERED",
  "NONE",
  "NORMALIZE",
  "NOT",
  "NOTNULL",
  "NOWAIT",
  "NO_WRITE_TO_BINLOG",
  "NTH_VALUE",
  "NTILE",
  "NULL",
  "NULLIF",
  "NULLIFZERO",
  "NULLS",
  "NUMBER",
  "NUMERIC",
  "NUMPARTS",
  "OBID",
  "OBJECT",
  "OBJECTS",
  "OCCURRENCES_REGEX",
  "OCTET_LENGTH",
  "OF",
  "OFF",
  "OFFLINE",
  "OFFSET",
  "OFFSETS",
  "OLD",
  "OLD_TABLE",
  "OMIT",
  "ON",
  "ONE",
  "ONLINE",
  "ONLY",
  "OPEN",
  "OPENDATASOURCE",
  "OPENQUERY",
  "OPENROWSET",
  "OPENXML",
  "OPERATION",
  "OPTIMIZATION",
  "OPTIMIZE",
  "OPTIMIZER_COSTS",
  "OPTION",
  "OPTIONALLY",
  "OR",
  "ORDER",
  "ORDINALITY",
  "ORGANIZATION",
  "OUT",
  "OUTER",
  "OUTFILE",
  "OUTPUT",
  "OVER",
  "OVERLAPS",
  "OVERLAY",
  "OVERRIDE",
  "PACKAGE",
  "PAD",
  "PADDED",
  "PARAMETER",
  "PARAMETERS",
  "PART",
  "PARTIAL",
  "PARTITION",
  "PARTITIONED",
  "PARTITIONING",
  "PASSWORD",
  "PATH",
  "PATTERN",
  "PCTFREE",
  "PER",
  "PERCENT",
  "PERCENTILE",
  "PERCENTILE_CONT",
  "PERCENTILE_DISC",
  "PERCENT_RANK",
  "PERIOD",
  "PERM",
  "PERMANENT",
  "PIECESIZE",
  "PIVOT",
  "PLACING",
  "PLAN",
  "PORTION",
  "POSITION",
  "POSITION_REGEX",
  "POSTFIX",
  "POWER",
  "PRECEDES",
  "PRECISION",
  "PREFIX",
  "PREORDER",
  "PREPARE",
  "PRESERVE",
  "PREVVAL",
  "PRIMARY",
  "PRINT",
  "PRIOR",
  "PRIQTY",
  "PRIVATE",
  "PRIVILEGES",
  "PROC",
  "PROCEDURE",
  "PROFILE",
  "PROGRAM",
  "PROPORTIONAL",
  "PROTECTION",
  "PSID",
  "PTF",
  "PUBLIC",
  "PURGE",
  "QUALIFIED",
  "QUALIFY",
  "QUANTILE",
  "QUERY",
  "QUERYNO",
  "RADIANS",
  "RAISERROR",
  "RANDOM",
  "RANGE",
  "RANGE_N",
  "RANK",
  "RAW",
  "READ",
  "READS",
  "READTEXT",
  "READ_WRITE",
  "REAL",
  "RECONFIGURE",
  "RECURSIVE",
  "REF",
  "REFERENCES",
  "REFERENCING",
  "REFRESH",
  "REGEXP",
  "REGR_AVGX",
  "REGR_AVGY",
  "REGR_COUNT",
  "REGR_INTERCEPT",
  "REGR_R2",
  "REGR_SLOPE",
  "REGR_SXX",
  "REGR_SXY",
  "REGR_SYY",
  "RELATIVE",
  "RELEASE",
  "RENAME",
  "REPEAT",
  "REPLACE",
  "REPLICATION",
  "REPOVERRIDE",
  "REQUEST",
  "REQUIRE",
  "RESIGNAL",
  "RESOURCE",
  "RESTART",
  "RESTORE",
  "RESTRICT",
  "RESULT",
  "RESULT_SET_LOCATOR",
  "RESUME",
  "RET",
  "RETRIEVE",
  "RETURN",
  "RETURNING",
  "RETURNS",
  "REVALIDATE",
  "REVERT",
  "REVOKE",
  "RIGHT",
  "RIGHTS",
  "RLIKE",
  "ROLE",
  "ROLLBACK",
  "ROLLFORWARD",
  "ROLLUP",
  "ROUND_CEILING",
  "ROUND_DOWN",
  "ROUND_FLOOR",
  "ROUND_HALF_DOWN",
  "ROUND_HALF_EVEN",
  "ROUND_HALF_UP",
  "ROUND_UP",
  "ROUTINE",
  "ROW",
  "ROWCOUNT",
  "ROWGUIDCOL",
  "ROWID",
  "ROWNUM",
  "ROWS",
  "ROWSET",
  "ROW_NUMBER",
  "RULE",
  "RUN",
  "RUNNING",
  "SAMPLE",
  "SAMPLEID",
  "SAVE",
  "SAVEPOINT",
  "SCHEMA",
  "SCHEMAS",
  "SCOPE",
  "SCRATCHPAD",
  "SCROLL",
  "SEARCH",
  "SECOND",
  "SECONDS",
  "SECOND_MICROSECOND",
  "SECQTY",
  "SECTION",
  "SECURITY",
  "SECURITYAUDIT",
  "SEEK",
  "SEL",
  "SELECT",
  "SEMANTICKEYPHRASETABLE",
  "SEMANTICSIMILARITYDETAILSTABLE",
  "SEMANTICSIMILARITYTABLE",
  "SENSITIVE",
  "SEPARATOR",
  "SEQUENCE",
  "SESSION",
  "SESSION_USER",
  "SET",
  "SETRESRATE",
  "SETS",
  "SETSESSRATE",
  "SETUSER",
  "SHARE",
  "SHOW",
  "SHUTDOWN",
  "SIGNAL",
  "SIMILAR",
  "SIMPLE",
  "SIN",
  "SINH",
  "SIZE",
  "SKEW",
  "SKIP",
  "SMALLINT",
  "SOME",
  "SOUNDEX",
  "SOURCE",
  "SPACE",
  "SPATIAL",
  "SPECIFIC",
  "SPECIFICTYPE",
  "SPOOL",
  "SQL",
  "SQLEXCEPTION",
  "SQLSTATE",
  "SQLTEXT",
  "SQLWARNING",
  "SQL_BIG_RESULT",
  "SQL_CALC_FOUND_ROWS",
  "SQL_SMALL_RESULT",
  "SQRT",
  "SS",
  "SSL",
  "STANDARD",
  "START",
  "STARTING",
  "STARTUP",
  "STAT",
  "STATE",
  "STATEMENT",
  "STATIC",
  "STATISTICS",
  "STAY",
  "STDDEV_POP",
  "STDDEV_SAMP",
  "STEPINFO",
  "STOGROUP",
  "STORED",
  "STORES",
  "STRAIGHT_JOIN",
  "STRING_CS",
  "STRUCTURE",
  "STYLE",
  "SUBMULTISET",
  "SUBSCRIBER",
  "SUBSET",
  "SUBSTR",
  "SUBSTRING",
  "SUBSTRING_REGEX",
  "SUCCEEDS",
  "SUCCESSFUL",
  "SUM",
  "SUMMARY",
  "SUSPEND",
  "SYMMETRIC",
  "SYNONYM",
  "SYSDATE",
  "SYSTEM",
  "SYSTEM_TIME",
  "SYSTEM_USER",
  "SYSTIMESTAMP",
  "TABLE",
  "TABLESAMPLE",
  "TABLESPACE",
  "TAN",
  "TANH",
  "TBL_CS",
  "TEMPORARY",
  "TERMINATE",
  "TERMINATED",
  "TEXTSIZE",
  "THAN",
  "THEN",
  "THRESHOLD",
  "TIME",
  "TIMESTAMP",
  "TIMEZONE_HOUR",
  "TIMEZONE_MINUTE",
  "TINYBLOB",
  "TINYINT",
  "TINYTEXT",
  "TITLE",
  "TO",
  "TOP",
  "TRACE",
  "TRAILING",
  "TRAN",
  "TRANSACTION",
  "TRANSLATE",
  "TRANSLATE_CHK",
  "TRANSLATE_REGEX",
  "TRANSLATION",
  "TREAT",
  "TRIGGER",
  "TRIM",
  "TRIM_ARRAY",
  "TRUE",
  "TRUNCATE",
  "TRY_CONVERT",
  "TSEQUAL",
  "TYPE",
  "UC",
  "UESCAPE",
  "UID",
  "UNDEFINED",
  "UNDER",
  "UNDO",
  "UNION",
  "UNIQUE",
  "UNKNOWN",
  "UNLOCK",
  "UNNEST",
  "UNPIVOT",
  "UNSIGNED",
  "UNTIL",
  "UPD",
  "UPDATE",
  "UPDATETEXT",
  "UPPER",
  "UPPERCASE",
  "USAGE",
  "USE",
  "USER",
  "USING",
  "UTC_DATE",
  "UTC_TIME",
  "UTC_TIMESTAMP",
  "VALIDATE",
  "VALIDPROC",
  "VALUE",
  "VALUES",
  "VALUE_OF",
  "VARBINARY",
  "VARBYTE",
  "VARCHAR",
  "VARCHAR2",
  "VARCHARACTER",
  "VARGRAPHIC",
  "VARIABLE",
  "VARIADIC",
  "VARIANT",
  "VARYING",
  "VAR_POP",
  "VAR_SAMP",
  "VCAT",
  "VERBOSE",
  "VERSIONING",
  "VIEW",
  "VIRTUAL",
  "VOLATILE",
  "VOLUMES",
  "WAIT",
  "WAITFOR",
  "WHEN",
  "WHENEVER",
  "WHERE",
  "WHILE",
  "WIDTH_BUCKET",
  "WINDOW",
  "WITH",
  "WITHIN",
  "WITHIN_GROUP",
  "WITHOUT",
  "WLM",
  "WORK",
  "WRITE",
  "WRITETEXT",
  "XMLCAST",
  "XMLEXISTS",
  "XMLNAMESPACES",
  "XOR",
  "YEAR",
  "YEARS",
  "YEAR_MONTH",
  "ZEROFILL",
  "ZEROIFNULL",
  "ZONE"
];


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/definition.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const cloudWatchSqlLanguageDefinition = {
  id: "cloudwatch-sql",
  extensions: [".cloudwatchSql"],
  aliases: ["CloudWatch", "cloudwatch", "CloudWatchSQL"],
  mimetypes: [],
  loader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/language.ts"))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudWatchSqlLanguageDefinition);


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/cloudwatch-sql/language.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AND: () => (/* binding */ AND),
/* harmony export */   ASC: () => (/* binding */ ASC),
/* harmony export */   BY: () => (/* binding */ BY),
/* harmony export */   COMPARISON_OPERATORS: () => (/* binding */ COMPARISON_OPERATORS),
/* harmony export */   DESC: () => (/* binding */ DESC),
/* harmony export */   EQUALS: () => (/* binding */ EQUALS),
/* harmony export */   FROM: () => (/* binding */ FROM),
/* harmony export */   GROUP: () => (/* binding */ GROUP),
/* harmony export */   KEYWORDS: () => (/* binding */ KEYWORDS),
/* harmony export */   LIMIT: () => (/* binding */ LIMIT),
/* harmony export */   LOGICAL_OPERATORS: () => (/* binding */ LOGICAL_OPERATORS),
/* harmony export */   NOT_EQUALS: () => (/* binding */ NOT_EQUALS),
/* harmony export */   ORDER: () => (/* binding */ ORDER),
/* harmony export */   SCHEMA: () => (/* binding */ SCHEMA),
/* harmony export */   SELECT: () => (/* binding */ SELECT),
/* harmony export */   STATISTICS: () => (/* binding */ STATISTICS),
/* harmony export */   WHERE: () => (/* binding */ WHERE),
/* harmony export */   WITH: () => (/* binding */ WITH),
/* harmony export */   conf: () => (/* binding */ conf),
/* harmony export */   language: () => (/* binding */ language)
/* harmony export */ });

const SELECT = "SELECT";
const FROM = "FROM";
const WHERE = "WHERE";
const GROUP = "GROUP";
const ORDER = "ORDER";
const BY = "BY";
const DESC = "DESC";
const ASC = "ASC";
const LIMIT = "LIMIT";
const WITH = "WITH";
const SCHEMA = "SCHEMA";
const KEYWORDS = [SELECT, FROM, WHERE, GROUP, ORDER, BY, DESC, ASC, LIMIT, WITH, SCHEMA];
const STATISTICS = ["AVG", "COUNT", "MAX", "MIN", "SUM"];
const AND = "AND";
const LOGICAL_OPERATORS = [AND];
const EQUALS = "=";
const NOT_EQUALS = "!=";
const COMPARISON_OPERATORS = [EQUALS, NOT_EQUALS];
const language = {
  defaultToken: "",
  tokenPostfix: ".sql",
  ignoreCase: true,
  brackets: [
    { open: "[", close: "]", token: "delimiter.square" },
    { open: "(", close: ")", token: "delimiter.parenthesis" }
  ],
  keywords: KEYWORDS,
  operators: LOGICAL_OPERATORS,
  builtinFunctions: STATISTICS,
  tokenizer: {
    root: [
      [/\$[a-zA-Z0-9-_]+/, "variable"],
      { include: "@comments" },
      { include: "@whitespace" },
      { include: "@numbers" },
      { include: "@strings" },
      { include: "@complexIdentifiers" },
      [/[;,.]/, "delimiter"],
      [/[()]/, "@brackets"],
      [
        /[\w@#$]+/,
        {
          cases: {
            "@keywords": "keyword",
            "@operators": "operator",
            "@builtinFunctions": "predefined",
            "@default": "identifier"
          }
        }
      ],
      [/[=!%&+\-*/|~^]/, "operator"]
      // TODO: strip these options
    ],
    whitespace: [[/\s+/, "white"]],
    comments: [[/--+.*/, "comment"]],
    comment: [
      [/[^*/]+/, "comment"],
      [/./, "comment"]
    ],
    numbers: [
      [/0[xX][0-9a-fA-F]*/, "number"],
      [/[$][+-]*\d*(\.\d*)?/, "number"],
      [/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, "number"]
    ],
    strings: [
      [/N'/, { token: "string", next: "@string" }],
      [/'/, { token: "string", next: "@string" }],
      [/"/, { token: "type", next: "@string_double" }]
    ],
    string: [
      [/[^']+/, "string"],
      [/''/, "string"],
      [/'/, { token: "string", next: "@pop" }]
    ],
    string_double: [
      [/[^\\"]+/, "type"],
      [/"/, "type", "@pop"]
    ],
    complexIdentifiers: [
      [/\[/, { token: "identifier.quote", next: "@bracketedIdentifier" }],
      [/"/, { token: "identifier.quote", next: "@quotedIdentifier" }]
    ],
    bracketedIdentifier: [
      [/[^\]]+/, "identifier"],
      [/]]/, "identifier"],
      [/]/, { token: "identifier.quote", next: "@pop" }]
    ],
    quotedIdentifier: [
      [/[^"]+/, "identifier"],
      [/""/, "identifier"],
      [/"/, { token: "identifier.quote", next: "@pop" }]
    ]
  }
};
const conf = {
  comments: {
    lineComment: "--",
    blockComment: ["/*", "*/"]
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ]
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/dynamic-labels/CompletionItemProvider.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicLabelsCompletionItemProvider: () => (/* binding */ DynamicLabelsCompletionItemProvider)
/* harmony export */ });
/* harmony import */ var _monarch_linkedTokenBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/linkedTokenBuilder.ts");
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/types.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/dynamic-labels/language.ts");




class DynamicLabelsCompletionItemProvider {
  constructor() {
    this.tokenTypes = {
      Parenthesis: "delimiter.parenthesis.cloudwatch-dynamicLabels",
      Whitespace: "white.cloudwatch-dynamicLabels",
      Keyword: "keyword.cloudwatch-dynamicLabels",
      Delimiter: "delimiter.cloudwatch-dynamicLabels",
      Operator: "operator.cloudwatch-dynamicLabels",
      Identifier: "identifier.cloudwatch-dynamicLabels",
      Type: "type.cloudwatch-dynamicLabels",
      Function: "predefined.cloudwatch-dynamicLabels",
      Number: "number.cloudwatch-dynamicLabels",
      String: "string.cloudwatch-dynamicLabels",
      Variable: "variable.cloudwatch-dynamicLabels",
      Comment: "comment.cloudwatch-dynamicLabels",
      Regexp: "regexp.cloudwatch-dynamicLabels"
    };
  }
  // called by registerLanguage and passed to monaco with registerCompletionItemProvider
  // returns an object that implements https://microsoft.github.io/monaco-editor/api/interfaces/monaco.languages.CompletionItemProvider.html
  getCompletionProvider(monaco, languageDefinition) {
    return {
      triggerCharacters: [" ", "$", ",", "(", "'"],
      // one of these characters indicates that it is time to look for a suggestion
      provideCompletionItems: async (model, position) => {
        const currentToken = (0,_monarch_linkedTokenBuilder__WEBPACK_IMPORTED_MODULE_0__.linkedTokenBuilder)(monaco, languageDefinition, model, position, this.tokenTypes);
        const invalidRangeToken = currentToken?.isWhiteSpace() || currentToken?.isParenthesis();
        const range = invalidRangeToken || !currentToken?.range ? monaco.Range.fromPositions(position) : currentToken?.range;
        const toCompletionItem = (value, rest = {}) => {
          const item = {
            label: value,
            insertText: value,
            kind: monaco.languages.CompletionItemKind.Field,
            range,
            sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_1__.CompletionItemPriority.Medium,
            ...rest
          };
          return item;
        };
        let suggestions = [];
        const next = currentToken?.next;
        if (!currentToken?.isFunction() && (!next || next.isWhiteSpace())) {
          suggestions = _language__WEBPACK_IMPORTED_MODULE_2__.DYNAMIC_LABEL_PATTERNS.map((val) => toCompletionItem(val));
          suggestions.push(
            toCompletionItem("${PROP('Dim.')}", {
              sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_1__.CompletionItemPriority.High,
              insertText: `\${PROP('Dim.$0')} `,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
            })
          );
        }
        return {
          suggestions
        };
      }
    };
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/dynamic-labels/definition.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const cloudWatchDynamicLabelsLanguageDefinition = {
  id: "cloudwatch-dynamicLabels",
  extensions: [],
  aliases: [],
  mimetypes: [],
  loader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./public/app/plugins/datasource/cloudwatch/language/dynamic-labels/language.ts"))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudWatchDynamicLabelsLanguageDefinition);


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/dynamic-labels/language.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DYNAMIC_LABEL_PATTERNS: () => (/* binding */ DYNAMIC_LABEL_PATTERNS),
/* harmony export */   conf: () => (/* binding */ conf),
/* harmony export */   language: () => (/* binding */ language)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");


const DYNAMIC_LABEL_PATTERNS = [
  "${DATAPOINT_COUNT}",
  "${FIRST}",
  "${FIRST_LAST_RANGE}",
  "${FIRST_LAST_TIME_RANGE}",
  "${FIRST_TIME}",
  "${FIRST_TIME_RELATIVE}",
  "${LABEL}",
  "${LAST}",
  "${LAST_TIME}",
  "${LAST_TIME_RELATIVE}",
  "${MAX}",
  "${MAX_TIME}",
  "${MAX_TIME_RELATIVE}",
  "${MIN}",
  "${MIN_MAX_RANGE}",
  "${MIN_MAX_TIME_RANGE}",
  "${MIN_TIME}",
  "${MIN_TIME_RELATIVE}",
  "${PROP('AccountId')}",
  "${PROP('MetricName')}",
  "${PROP('Namespace')}",
  "${PROP('Period')}",
  "${PROP('Region')}",
  "${PROP('Stat')}",
  "${SUM}",
  ..._grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.featureToggles.cloudWatchCrossAccountQuerying ? ["${PROP('AccountLabel')}"] : []
];
const language = {
  id: "dynamicLabels",
  ignoreCase: false,
  tokenizer: {
    root: [
      { include: "@whitespace" },
      { include: "@builtInFunctions" },
      { include: "@string" },
      [/\$\{PROP\('Dim.[a-zA-Z0-9-_]?.*'\)\}+/, "predefined"]
      //custom handling for dimension patterns
    ],
    builtInFunctions: [[DYNAMIC_LABEL_PATTERNS.map(escapeRegExp).join("|"), "predefined"]],
    whitespace: [[/\s+/, "white"]],
    string: []
  }
};
const conf = {};
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/logs/completion/CompletionItemProvider.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogsCompletionItemProvider: () => (/* binding */ LogsCompletionItemProvider),
/* harmony export */   LogsCompletionItemProviderFunc: () => (/* binding */ LogsCompletionItemProviderFunc)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _monarch_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/CompletionItemProvider.ts");
/* harmony import */ var _monarch_commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/commands.ts");
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/utils.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/logs/language.ts");
/* harmony import */ var _statementPosition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/logs/completion/statementPosition.ts");
/* harmony import */ var _suggestionKinds__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/logs/completion/suggestionKinds.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/logs/completion/types.ts");










function LogsCompletionItemProviderFunc(resources, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getTemplateSrv)()) {
  return (queryContext) => {
    return new LogsCompletionItemProvider(resources, templateSrv, queryContext);
  };
}
class LogsCompletionItemProvider extends _monarch_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_1__.CompletionItemProvider {
  constructor(resources, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getTemplateSrv)(), queryContext) {
    super(resources, templateSrv);
    this.getStatementPosition = _statementPosition__WEBPACK_IMPORTED_MODULE_6__.getStatementPosition;
    this.getSuggestionKinds = _suggestionKinds__WEBPACK_IMPORTED_MODULE_7__.getSuggestionKinds;
    this.tokenTypes = _types__WEBPACK_IMPORTED_MODULE_8__.LogsTokenTypes;
    this.queryContext = queryContext;
  }
  async getSuggestions(monaco, currentToken, suggestionKinds, statementPosition, position) {
    const suggestions = [];
    const invalidRangeToken = currentToken?.isWhiteSpace() || currentToken?.isParenthesis();
    const range = invalidRangeToken || !currentToken?.range ? monaco.Range.fromPositions(position) : currentToken?.range;
    function toCompletionItem(value, rest = {}) {
      const item = {
        label: value,
        insertText: value,
        kind: monaco.languages.CompletionItemKind.Field,
        range,
        sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.Medium,
        ...rest
      };
      return item;
    }
    function addSuggestion(value, rest = {}) {
      suggestions.push(toCompletionItem(value, rest));
    }
    for (const kind of suggestionKinds) {
      switch (kind) {
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.Command:
          _language__WEBPACK_IMPORTED_MODULE_5__.LOGS_COMMANDS.forEach((command) => {
            addSuggestion(command, {
              insertText: `${command} $0`,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST,
              kind: monaco.languages.CompletionItemKind.Method
            });
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.Function:
          _language__WEBPACK_IMPORTED_MODULE_5__.LOGS_FUNCTION_OPERATORS.forEach((f) => {
            addSuggestion(f, {
              insertText: `${f}($0)`,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST,
              kind: monaco.languages.CompletionItemKind.Function
            });
          });
          if (this.queryContext.logGroups && this.queryContext.logGroups.length > 0) {
            let fields = await (0,_utils__WEBPACK_IMPORTED_MODULE_4__.fetchLogGroupFields)(
              this.queryContext.logGroups,
              this.queryContext.region,
              this.templateSrv,
              this.resources
            );
            fields.push("@log");
            fields.forEach((field) => {
              if (field !== "") {
                addSuggestion(field, {
                  range,
                  label: field,
                  insertText: field,
                  kind: monaco.languages.CompletionItemKind.Field,
                  sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.High
                });
              }
            });
          }
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.SortOrderDirectionKeyword:
          _language__WEBPACK_IMPORTED_MODULE_5__.SORT_DIRECTION_KEYWORDS.forEach((direction) => {
            addSuggestion(direction, {
              sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.High,
              kind: monaco.languages.CompletionItemKind.Operator
            });
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.DiffModifier:
          _language__WEBPACK_IMPORTED_MODULE_5__.DIFF_MODIFIERS.forEach((modifier) => {
            addSuggestion(modifier, {
              sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.High,
              kind: monaco.languages.CompletionItemKind.Keyword
            });
          });
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.InKeyword:
          addSuggestion("in []", {
            insertText: 'in ["$0"]',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            kind: monaco.languages.CompletionItemKind.Snippet,
            sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.High
          });
          break;
      }
    }
    this.templateSrv.getVariables().map((v) => {
      const variable = `$${v.name}`;
      addSuggestion(variable, {
        range,
        label: variable,
        insertText: variable,
        kind: monaco.languages.CompletionItemKind.Variable,
        sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.Low
      });
    });
    return suggestions;
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/logs/completion/statementPosition.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStatementPosition: () => (/* binding */ getStatementPosition)
/* harmony export */ });
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/types.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/logs/language.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/logs/completion/types.ts");




const getStatementPosition = (currentToken) => {
  const previousNonWhiteSpace = currentToken?.getPreviousNonWhiteSpaceToken();
  const nextNonWhiteSpace = currentToken?.getNextNonWhiteSpaceToken();
  const normalizedCurrentToken = currentToken?.value?.toLowerCase();
  const normalizedPreviousNonWhiteSpace = previousNonWhiteSpace?.value?.toLowerCase();
  if (currentToken?.is(_types__WEBPACK_IMPORTED_MODULE_2__.LogsTokenTypes.Comment)) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.Comment;
  }
  if (currentToken?.isFunction()) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.Function;
  }
  if (currentToken === null || currentToken?.isWhiteSpace() && previousNonWhiteSpace === null && nextNonWhiteSpace === null || previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.LogsTokenTypes.Delimiter, "|") && currentToken?.isWhiteSpace() || currentToken?.isIdentifier() && (previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.LogsTokenTypes.Delimiter, "|") || previousNonWhiteSpace === null)) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.NewCommand;
  }
  if (currentToken?.is(_types__WEBPACK_IMPORTED_MODULE_2__.LogsTokenTypes.Parenthesis, ")") || currentToken?.isWhiteSpace() && previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.LogsTokenTypes.Parenthesis, ")")) {
    const openingParenthesis = currentToken?.getPreviousOfType(_types__WEBPACK_IMPORTED_MODULE_2__.LogsTokenTypes.Parenthesis, "(");
    const normalizedNonWhitespacePreceedingOpeningParenthesis = openingParenthesis?.getPreviousNonWhiteSpaceToken()?.value?.toLowerCase();
    if (normalizedNonWhitespacePreceedingOpeningParenthesis) {
      if (_language__WEBPACK_IMPORTED_MODULE_1__.LOGS_COMMANDS.includes(normalizedNonWhitespacePreceedingOpeningParenthesis)) {
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterCommand;
      }
      if (_language__WEBPACK_IMPORTED_MODULE_1__.LOGS_FUNCTION_OPERATORS.includes(normalizedNonWhitespacePreceedingOpeningParenthesis)) {
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFunction;
      }
    }
  }
  if (currentToken?.isKeyword() && normalizedCurrentToken) {
    switch (normalizedCurrentToken) {
      case _language__WEBPACK_IMPORTED_MODULE_1__.DEDUP:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.DedupKeyword;
      case _language__WEBPACK_IMPORTED_MODULE_1__.DIFF:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.DiffKeyword;
      case _language__WEBPACK_IMPORTED_MODULE_1__.DISPLAY:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.DisplayKeyword;
      case _language__WEBPACK_IMPORTED_MODULE_1__.FIELDS:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FieldsKeyword;
      case _language__WEBPACK_IMPORTED_MODULE_1__.FILTER:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FilterKeyword;
      case _language__WEBPACK_IMPORTED_MODULE_1__.LIMIT:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.LimitKeyword;
      case _language__WEBPACK_IMPORTED_MODULE_1__.PARSE:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.ParseKeyword;
      case _language__WEBPACK_IMPORTED_MODULE_1__.STATS:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.StatsKeyword;
      case _language__WEBPACK_IMPORTED_MODULE_1__.SORT:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SortKeyword;
      case "as":
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AsKeyword;
      case "by":
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.ByKeyword;
      case "in":
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.InKeyword;
      case "like":
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.LikeKeyword;
    }
  }
  if (currentToken?.isWhiteSpace() && previousNonWhiteSpace?.isKeyword && normalizedPreviousNonWhiteSpace) {
    switch (normalizedPreviousNonWhiteSpace) {
      case _language__WEBPACK_IMPORTED_MODULE_1__.DEDUP:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterDedupKeyword;
      case _language__WEBPACK_IMPORTED_MODULE_1__.DIFF:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterDiffKeyword;
      case _language__WEBPACK_IMPORTED_MODULE_1__.DISPLAY:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterDisplayKeyword;
      case _language__WEBPACK_IMPORTED_MODULE_1__.FIELDS:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFieldsKeyword;
      case _language__WEBPACK_IMPORTED_MODULE_1__.FILTER:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFilterKeyword;
      case _language__WEBPACK_IMPORTED_MODULE_1__.LIMIT:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterLimitKeyword;
      case _language__WEBPACK_IMPORTED_MODULE_1__.PARSE:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterParseKeyword;
      case _language__WEBPACK_IMPORTED_MODULE_1__.STATS:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterStatsKeyword;
      case _language__WEBPACK_IMPORTED_MODULE_1__.SORT:
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterSortKeyword;
      case "as":
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterAsKeyword;
      case "by":
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterByKeyword;
      case "in":
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterInKeyword;
      case "like":
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterLikeKeyword;
    }
  }
  if (currentToken?.is(_types__WEBPACK_IMPORTED_MODULE_2__.LogsTokenTypes.Operator) && normalizedCurrentToken) {
    if (["+", "-", "*", "/", "^", "%"].includes(normalizedCurrentToken)) {
      return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.ArithmeticOperator;
    }
    if (["=", "!=", "<", ">", "<=", ">="].includes(normalizedCurrentToken)) {
      return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.ComparisonOperator;
    }
    if (_language__WEBPACK_IMPORTED_MODULE_1__.LOGS_LOGIC_OPERATORS.includes(normalizedCurrentToken)) {
      return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.BooleanOperator;
    }
  }
  if (previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.LogsTokenTypes.Operator) && normalizedPreviousNonWhiteSpace) {
    if (["+", "-", "*", "/", "^", "%"].includes(normalizedPreviousNonWhiteSpace)) {
      return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.ArithmeticOperatorArg;
    }
    if (["=", "!=", "<", ">", "<=", ">="].includes(normalizedPreviousNonWhiteSpace)) {
      return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.ComparisonOperatorArg;
    }
    if (_language__WEBPACK_IMPORTED_MODULE_1__.LOGS_LOGIC_OPERATORS.includes(normalizedPreviousNonWhiteSpace)) {
      return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.BooleanOperatorArg;
    }
  }
  if (currentToken?.isIdentifier() || currentToken?.isNumber() || currentToken?.is(_types__WEBPACK_IMPORTED_MODULE_2__.LogsTokenTypes.Parenthesis, "()") || currentToken?.is(_types__WEBPACK_IMPORTED_MODULE_2__.LogsTokenTypes.Delimiter, ",") || currentToken?.is(_types__WEBPACK_IMPORTED_MODULE_2__.LogsTokenTypes.Parenthesis, ")") || currentToken?.isWhiteSpace() && previousNonWhiteSpace?.is(_types__WEBPACK_IMPORTED_MODULE_2__.LogsTokenTypes.Delimiter, ",") || currentToken?.isWhiteSpace() && previousNonWhiteSpace?.isIdentifier() || currentToken?.isWhiteSpace() && previousNonWhiteSpace?.isKeyword() && normalizedPreviousNonWhiteSpace && _language__WEBPACK_IMPORTED_MODULE_1__.LOGS_COMMANDS.includes(normalizedPreviousNonWhiteSpace)) {
    const nearestKeyword = currentToken?.getPreviousOfType(_types__WEBPACK_IMPORTED_MODULE_2__.LogsTokenTypes.Keyword);
    const nearestFunction = currentToken?.getPreviousOfType(_types__WEBPACK_IMPORTED_MODULE_2__.LogsTokenTypes.Function);
    if (nearestKeyword !== null && nearestFunction === null) {
      if (nearestKeyword.value === _language__WEBPACK_IMPORTED_MODULE_1__.SORT) {
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SortArg;
      }
      if (nearestKeyword.value === _language__WEBPACK_IMPORTED_MODULE_1__.FILTER) {
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FilterArg;
      }
      if (nearestKeyword.value === _language__WEBPACK_IMPORTED_MODULE_1__.DIFF) {
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.DiffModifierArg;
      }
      return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.CommandArg;
    }
    if (nearestFunction !== null && nearestKeyword === null) {
      return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FunctionArg;
    }
    if (nearestKeyword !== null && nearestFunction !== null) {
      if (nearestKeyword.range.startLineNumber > nearestFunction.range.startLineNumber || nearestKeyword.range.endColumn > nearestFunction.range.endColumn) {
        if (nearestKeyword.value === _language__WEBPACK_IMPORTED_MODULE_1__.SORT) {
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SortArg;
        }
        if (nearestKeyword.value === _language__WEBPACK_IMPORTED_MODULE_1__.FILTER) {
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FilterArg;
        }
        if (nearestKeyword.value === _language__WEBPACK_IMPORTED_MODULE_1__.DIFF) {
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.DiffModifierArg;
        }
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.CommandArg;
      }
      if (nearestFunction.range.startLineNumber > nearestKeyword.range.startLineNumber || nearestFunction.range.endColumn > nearestKeyword.range.endColumn) {
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FunctionArg;
      }
    }
  }
  return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.Unknown;
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/logs/completion/suggestionKinds.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSuggestionKinds: () => (/* binding */ getSuggestionKinds)
/* harmony export */ });
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/types.ts");


function getSuggestionKinds(statementPosition) {
  switch (statementPosition) {
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.NewCommand:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Command];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterSortKeyword:
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SortArg:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.SortOrderDirectionKeyword, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Function];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterDiffKeyword:
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.DiffModifierArg:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.DiffModifier];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterDisplayKeyword:
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFieldsKeyword:
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFilterKeyword:
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterStatsKeyword:
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterLimitKeyword:
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterParseKeyword:
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterDedupKeyword:
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.CommandArg:
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FunctionArg:
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.ArithmeticOperatorArg:
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.BooleanOperatorArg:
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.ComparisonOperatorArg:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Function];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.FilterArg:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.InKeyword, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Function];
  }
  return [];
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/logs/completion/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogsTokenTypes: () => (/* binding */ LogsTokenTypes)
/* harmony export */ });
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/logs/definition.ts");


const LogsTokenTypes = {
  Parenthesis: `delimiter.parenthesis.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_LANGUAGE_DEFINITION_ID}`,
  Whitespace: `white.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_LANGUAGE_DEFINITION_ID}`,
  Keyword: `keyword.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_LANGUAGE_DEFINITION_ID}`,
  Delimiter: `delimiter.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_LANGUAGE_DEFINITION_ID}`,
  Operator: `operator.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_LANGUAGE_DEFINITION_ID}`,
  Identifier: `identifier.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_LANGUAGE_DEFINITION_ID}`,
  Type: `type.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_LANGUAGE_DEFINITION_ID}`,
  Function: `predefined.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_LANGUAGE_DEFINITION_ID}`,
  Number: `number.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_LANGUAGE_DEFINITION_ID}`,
  String: `string.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_LANGUAGE_DEFINITION_ID}`,
  Variable: `variable.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_LANGUAGE_DEFINITION_ID}`,
  Comment: `comment.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_LANGUAGE_DEFINITION_ID}`,
  Regexp: `regexp.${_definition__WEBPACK_IMPORTED_MODULE_0__.CLOUDWATCH_LOGS_LANGUAGE_DEFINITION_ID}`
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/logs/definition.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLOUDWATCH_LOGS_LANGUAGE_DEFINITION_ID: () => (/* binding */ CLOUDWATCH_LOGS_LANGUAGE_DEFINITION_ID),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const CLOUDWATCH_LOGS_LANGUAGE_DEFINITION_ID = "cloudwatch-logs";
const cloudWatchLogsLanguageDefinition = {
  id: CLOUDWATCH_LOGS_LANGUAGE_DEFINITION_ID,
  extensions: [],
  aliases: [],
  mimetypes: [],
  loader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./public/app/plugins/datasource/cloudwatch/language/logs/language.ts"))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudWatchLogsLanguageDefinition);


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/logs/language.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEDUP: () => (/* binding */ DEDUP),
/* harmony export */   DIFF: () => (/* binding */ DIFF),
/* harmony export */   DIFF_MODIFIERS: () => (/* binding */ DIFF_MODIFIERS),
/* harmony export */   DISPLAY: () => (/* binding */ DISPLAY),
/* harmony export */   FIELDS: () => (/* binding */ FIELDS),
/* harmony export */   FILTER: () => (/* binding */ FILTER),
/* harmony export */   LIMIT: () => (/* binding */ LIMIT),
/* harmony export */   LOGS_COMMANDS: () => (/* binding */ LOGS_COMMANDS),
/* harmony export */   LOGS_FUNCTION_OPERATORS: () => (/* binding */ LOGS_FUNCTION_OPERATORS),
/* harmony export */   LOGS_KEYWORDS: () => (/* binding */ LOGS_KEYWORDS),
/* harmony export */   LOGS_LOGIC_OPERATORS: () => (/* binding */ LOGS_LOGIC_OPERATORS),
/* harmony export */   PARSE: () => (/* binding */ PARSE),
/* harmony export */   PATTERN: () => (/* binding */ PATTERN),
/* harmony export */   SORT: () => (/* binding */ SORT),
/* harmony export */   SORT_DIRECTION_KEYWORDS: () => (/* binding */ SORT_DIRECTION_KEYWORDS),
/* harmony export */   STATS: () => (/* binding */ STATS),
/* harmony export */   conf: () => (/* binding */ conf),
/* harmony export */   language: () => (/* binding */ language)
/* harmony export */ });

const DIFF = "diff";
const DISPLAY = "display";
const FIELDS = "fields";
const FILTER = "filter";
const PATTERN = "pattern";
const STATS = "stats";
const SORT = "sort";
const LIMIT = "limit";
const PARSE = "parse";
const DEDUP = "dedup";
const LOGS_COMMANDS = [DISPLAY, FIELDS, FILTER, PATTERN, STATS, SORT, LIMIT, PARSE, DEDUP, DIFF];
const LOGS_LOGIC_OPERATORS = ["and", "or", "not"];
const LOGS_FUNCTION_OPERATORS = [
  // math
  "abs",
  "ceil",
  "floor",
  "greatest",
  "least",
  "log",
  "sqrt",
  // datetime
  "bin",
  "datefloor",
  "dateceil",
  "fromMillis",
  "toMillis",
  // general
  "ispresent",
  "coalesce",
  // ip
  "isValidIp",
  "isValidIpV4",
  "isValidIpV6",
  "isIpInSubnet",
  "isIpv4InSubnet",
  "isIpv6InSubnet",
  // stats aggregation
  "avg",
  "count",
  "count_distinct",
  "max",
  "min",
  "pct",
  "stddev",
  "sum",
  // stats non-aggregation
  "earliest",
  "latest",
  "sortsFirst",
  "sortsLast",
  // strings
  "isempty",
  "isblank",
  "concat",
  "ltrim",
  "rtrim",
  "trim",
  "strlen",
  "toupper",
  "tolower",
  "substr",
  "replace",
  "strcontains",
  // field
  "unmask"
];
const SORT_DIRECTION_KEYWORDS = ["asc", "desc"];
const DIFF_MODIFIERS = ["previousDay", "previousWeek", "previousMonth"];
const LOGS_KEYWORDS = ["like", "by", "in", "as", ...SORT_DIRECTION_KEYWORDS, ...DIFF_MODIFIERS];
const language = {
  defaultToken: "invalid",
  id: "logs",
  ignoreCase: true,
  brackets: [
    { open: "[", close: "]", token: "delimiter.square" },
    { open: "(", close: ")", token: "delimiter.parenthesis" }
  ],
  commands: [...LOGS_COMMANDS, ...LOGS_KEYWORDS],
  operators: LOGS_LOGIC_OPERATORS,
  builtinFunctions: LOGS_FUNCTION_OPERATORS,
  tokenizer: {
    root: [
      { include: "@comments" },
      { include: "@regexes" },
      { include: "@whitespace" },
      { include: "@fieldNames" },
      { include: "@variables" },
      { include: "@strings" },
      { include: "@numbers" },
      [/\|\|/, "operator"],
      [/[,.:\|]/, "delimiter"],
      [/[()\[\]]/, "delimiter.parenthesis"],
      [
        /[\w@#$]+/,
        {
          cases: {
            "@commands": "keyword",
            "@builtinFunctions": "predefined",
            "@operators": "operator",
            "@default": "identifier"
          }
        }
      ],
      [/[+\-*/^%=!<>]/, "operator"]
      // handles the math operators
    ],
    variables: [
      [/\${/, { token: "variable", next: "@variable_bracket" }],
      [/\$[a-zA-Z0-9-_]+/, "variable"]
    ],
    variable_bracket: [
      [/[a-zA-Z0-9-_:]+/, "variable"],
      [/}/, { token: "variable", next: "@pop" }]
    ],
    fieldNames: [[/(@[_a-zA-Z]+[_.0-9a-zA-Z]*)|(`((\\`)|([^`]))*?`)/, "identifier"]],
    whitespace: [[/\s+/, "white"]],
    comments: [
      [/^#.*/, "comment"],
      [/\s+#.*/, "comment"]
    ],
    numbers: [
      [/0[xX][0-9a-fA-F]*/, "number"],
      [/[$][+-]*\d*(\.\d*)?/, "number"],
      [/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, "number"]
    ],
    strings: [
      [/'/, { token: "string", next: "@string" }],
      [/"/, { token: "string", next: "@string_double" }],
      [/`/, { token: "identifier", next: "@string_backtick" }]
    ],
    string: [
      [/[^']+/, "string"],
      [/''/, "string"],
      [/'/, { token: "string", next: "@pop" }]
    ],
    string_double: [
      [/[^\\"]+/, "string"],
      [/"/, "string", "@pop"]
    ],
    string_backtick: [
      [/[^\\`]+/, "identifier"],
      [/`/, "identifier", "@pop"]
    ],
    regexes: [[/\/.*?\/(?=\s*\||\s*$|,)/, "regexp"]]
  }
};
const conf = {
  comments: {
    lineComment: "#"
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" },
    { open: "`", close: "`" }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" },
    { open: "`", close: "`" }
  ]
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/metric-math/completion/CompletionItemProvider.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetricMathCompletionItemProvider: () => (/* binding */ MetricMathCompletionItemProvider)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _monarch_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/CompletionItemProvider.ts");
/* harmony import */ var _monarch_commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/commands.ts");
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/types.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/metric-math/language.ts");
/* harmony import */ var _statementPosition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/metric-math/completion/statementPosition.ts");
/* harmony import */ var _suggestionKind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/metric-math/completion/suggestionKind.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/metric-math/completion/types.ts");









class MetricMathCompletionItemProvider extends _monarch_CompletionItemProvider__WEBPACK_IMPORTED_MODULE_1__.CompletionItemProvider {
  constructor(resources, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getTemplateSrv)()) {
    super(resources, templateSrv);
    this.getStatementPosition = _statementPosition__WEBPACK_IMPORTED_MODULE_5__.getStatementPosition;
    this.getSuggestionKinds = _suggestionKind__WEBPACK_IMPORTED_MODULE_6__.getSuggestionKinds;
    this.tokenTypes = _types__WEBPACK_IMPORTED_MODULE_7__.MetricMathTokenTypes;
  }
  async getSuggestions(monaco, currentToken, suggestionKinds, statementPosition, position) {
    let suggestions = [];
    const invalidRangeToken = currentToken?.isWhiteSpace() || currentToken?.isParenthesis();
    const range = invalidRangeToken || !currentToken?.range ? monaco.Range.fromPositions(position) : currentToken?.range;
    const toCompletionItem = (value, rest = {}) => {
      const item = {
        label: value,
        insertText: value,
        kind: monaco.languages.CompletionItemKind.Field,
        range,
        sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.Medium,
        ...rest
      };
      return item;
    };
    function addSuggestion(value, rest = {}) {
      suggestions = [...suggestions, toCompletionItem(value, rest)];
    }
    for (const suggestion of suggestionKinds) {
      switch (suggestion) {
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.FunctionsWithArguments:
          _language__WEBPACK_IMPORTED_MODULE_4__.METRIC_MATH_FNS.map(
            (f) => addSuggestion(f, {
              insertText: f === "SEARCH" ? `${f}('$0')` : `${f}($0)`,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST,
              kind: monaco.languages.CompletionItemKind.Function
            })
          );
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.KeywordArguments:
          _language__WEBPACK_IMPORTED_MODULE_4__.METRIC_MATH_KEYWORDS.map(
            (s) => addSuggestion(s, {
              insertText: s,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST,
              kind: monaco.languages.CompletionItemKind.Keyword,
              sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.MediumHigh
            })
          );
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.Statistic:
          _language__WEBPACK_IMPORTED_MODULE_4__.METRIC_MATH_STATISTIC_KEYWORD_STRINGS.map(
            (s) => addSuggestion(s, {
              insertText: `'${s}', `,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
            })
          );
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.Operators:
          _language__WEBPACK_IMPORTED_MODULE_4__.METRIC_MATH_OPERATORS.map(
            (s) => addSuggestion(s, {
              insertText: `${s} `,
              command: _monarch_commands__WEBPACK_IMPORTED_MODULE_2__.TRIGGER_SUGGEST
            })
          );
          break;
        case _monarch_types__WEBPACK_IMPORTED_MODULE_3__.SuggestionKind.Period:
          addSuggestion("$__period_auto", {
            kind: monaco.languages.CompletionItemKind.Variable,
            sortText: "a",
            detail: "Sets period dynamically to adjust to selected time range."
          });
          _language__WEBPACK_IMPORTED_MODULE_4__.METRIC_MATH_PERIODS.map(
            (s, idx) => addSuggestion(s.toString(), {
              kind: monaco.languages.CompletionItemKind.Value,
              sortText: String.fromCharCode(97 + idx)
              // converts index 0, 1 to "a", "b", etc needed to show the time periods in numerical order
            })
          );
          break;
      }
    }
    this.templateSrv.getVariables().map((v) => {
      const variable = `$${v.name}`;
      addSuggestion(variable, {
        range,
        label: variable,
        insertText: variable,
        kind: monaco.languages.CompletionItemKind.Variable,
        sortText: _monarch_types__WEBPACK_IMPORTED_MODULE_3__.CompletionItemPriority.Low
      });
    });
    return suggestions;
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/metric-math/completion/statementPosition.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStatementPosition: () => (/* binding */ getStatementPosition)
/* harmony export */ });
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/metric-math/completion/types.ts");



function getStatementPosition(currentToken) {
  const previousNonWhiteSpace = currentToken?.getPreviousNonWhiteSpaceToken();
  if (currentToken && currentToken.isString()) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WithinString;
  }
  if (currentToken && previousNonWhiteSpace) {
    const currentFunction = currentToken.getPreviousOfType(_types__WEBPACK_IMPORTED_MODULE_1__.MetricMathTokenTypes.Function);
    const isAfterComma = previousNonWhiteSpace.is(_types__WEBPACK_IMPORTED_MODULE_1__.MetricMathTokenTypes.Delimiter, ",");
    const isWithinSearch = currentFunction && currentFunction.value === "SEARCH";
    const allTokensAfterStartOfSearch = currentToken.getPreviousUntil(_types__WEBPACK_IMPORTED_MODULE_1__.MetricMathTokenTypes.Function, [], "SEARCH") || [];
    if (isWithinSearch) {
      if (allTokensAfterStartOfSearch.filter(({ value }) => value === "'").length === 1) {
        return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.WithinString;
      }
      const lastComma = previousNonWhiteSpace.getPreviousOfType(_types__WEBPACK_IMPORTED_MODULE_1__.MetricMathTokenTypes.Delimiter, ",");
      if (lastComma) {
        const lastCommaIsAfterSearch = lastComma.range.startColumn > currentFunction.range.startColumn && lastComma.range.startLineNumber >= currentFunction.range.startLineNumber;
        if (lastCommaIsAfterSearch) {
          return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SearchFuncThirdArg;
        }
      }
      return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SearchFuncSecondArg;
    }
    if (!isWithinSearch && isAfterComma) {
      return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.PredefinedFuncSecondArg;
    }
  }
  if (previousNonWhiteSpace?.endsWith(")")) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFunction;
  }
  if (!currentToken || !currentToken.isString()) {
    return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.PredefinedFunction;
  }
  return _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.Unknown;
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/metric-math/completion/suggestionKind.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSuggestionKinds: () => (/* binding */ getSuggestionKinds)
/* harmony export */ });
/* harmony import */ var _monarch_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/types.ts");


function getSuggestionKinds(statementPosition) {
  switch (statementPosition) {
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.PredefinedFunction:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.PredefinedFuncSecondArg:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.FunctionsWithArguments, _monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.KeywordArguments];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.AfterFunction:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Operators];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SearchFuncSecondArg:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Statistic];
    case _monarch_types__WEBPACK_IMPORTED_MODULE_0__.StatementPosition.SearchFuncThirdArg:
      return [_monarch_types__WEBPACK_IMPORTED_MODULE_0__.SuggestionKind.Period];
  }
  return [];
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/metric-math/completion/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetricMathTokenTypes: () => (/* binding */ MetricMathTokenTypes)
/* harmony export */ });

const MetricMathTokenTypes = {
  Parenthesis: "delimiter.parenthesis.cloudwatch-MetricMath",
  Whitespace: "white.cloudwatch-MetricMath",
  Keyword: "keyword.cloudwatch-MetricMath",
  Delimiter: "delimiter.cloudwatch-MetricMath",
  Operator: "operator.cloudwatch-MetricMath",
  Identifier: "identifier.cloudwatch-MetricMath",
  Type: "type.cloudwatch-MetricMath",
  Function: "predefined.cloudwatch-MetricMath",
  Number: "number.cloudwatch-MetricMath",
  String: "string.cloudwatch-MetricMath",
  Variable: "variable.cloudwatch-MetricMath",
  Comment: "comment.cloudwatch-MetricMath",
  Regexp: "regexp.cloudwatch-MetricMath"
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/metric-math/definition.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const cloudWatchMetricMathLanguageDefinition = {
  id: "cloudwatch-MetricMath",
  extensions: [],
  aliases: [],
  mimetypes: [],
  loader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./public/app/plugins/datasource/cloudwatch/language/metric-math/language.ts"))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudWatchMetricMathLanguageDefinition);


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/metric-math/language.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   METRIC_MATH_FNS: () => (/* binding */ METRIC_MATH_FNS),
/* harmony export */   METRIC_MATH_KEYWORDS: () => (/* binding */ METRIC_MATH_KEYWORDS),
/* harmony export */   METRIC_MATH_OPERATORS: () => (/* binding */ METRIC_MATH_OPERATORS),
/* harmony export */   METRIC_MATH_PERIODS: () => (/* binding */ METRIC_MATH_PERIODS),
/* harmony export */   METRIC_MATH_STATISTIC_KEYWORD_STRINGS: () => (/* binding */ METRIC_MATH_STATISTIC_KEYWORD_STRINGS),
/* harmony export */   conf: () => (/* binding */ conf),
/* harmony export */   language: () => (/* binding */ language)
/* harmony export */ });

const METRIC_MATH_FNS = [
  "ABS",
  "ANOMALY_DETECTION_BAND",
  "AVG",
  "CEIL",
  "DATAPOINT_COUNT",
  "DB_PERF_INSIGHTS",
  "DIFF",
  "DIFF_TIME",
  "FILL",
  "FIRST",
  "LAST",
  "FLOOR",
  "IF",
  "INSIGHT_RULE_METRIC",
  "LOG",
  "LOG10",
  "MAX",
  "METRIC_COUNT",
  "METRICS",
  "MIN",
  "MINUTE",
  "HOUR",
  "DAY",
  "DATE",
  "MONTH",
  "YEAR",
  "EPOCH",
  "PERIOD",
  "RATE",
  "REMOVE_EMPTY",
  "RUNNING_SUM",
  "SEARCH",
  "SERVICE_QUOTA",
  "SLICE",
  "SORT",
  "STDDEV",
  "SUM",
  "TIME_SERIES"
];
const METRIC_MATH_STATISTIC_KEYWORD_STRINGS = ["Average", "Maximum", "Minimum", "Sum", "SampleCount"];
const METRIC_MATH_KEYWORDS = ["REPEAT", "LINEAR", "ASC", "DSC"];
const METRIC_MATH_OPERATORS = [
  "+",
  "-",
  "*",
  "/",
  "^",
  "==",
  "!=",
  "<=",
  ">=",
  "<",
  ">",
  "AND",
  "&&",
  "OR",
  "||"
];
const METRIC_MATH_PERIODS = [10, 60, 300, 900, 3e3, 21600, 86400];
const language = {
  id: "metricMath",
  ignoreCase: false,
  brackets: [
    { open: "[", close: "]", token: "delimiter.square" },
    { open: "(", close: ")", token: "delimiter.parenthesis" },
    { open: "{", close: "}", token: "delimiter.curly" }
  ],
  tokenizer: {
    root: [{ include: "@nonNestableStates" }, { include: "@strings" }],
    nonNestableStates: [
      { include: "@variables" },
      { include: "@macros" },
      { include: "@whitespace" },
      { include: "@numbers" },
      { include: "@assignment" },
      { include: "@keywords" },
      { include: "@operators" },
      { include: "@builtInFunctions" },
      [/[;,.]/, "delimiter"],
      [/[(){}\[\]]/, "@brackets"]
      // [], (), {} are all brackets
    ],
    keywords: [[METRIC_MATH_KEYWORDS.map(escapeRegExp).join("|"), "keyword"]],
    operators: [[METRIC_MATH_OPERATORS.map(escapeRegExp).join("|"), "operator"]],
    builtInFunctions: [[METRIC_MATH_FNS.map(escapeRegExp).join("|"), "predefined"]],
    variables: [
      [/\$[a-zA-Z0-9-_]+/, "variable"]
      // $ followed by any letter/number we assume could be grafana template variable
    ],
    macros: [[/\$__[a-zA-Z0-9-_]+/, "type"]],
    // example: $__period_auto
    whitespace: [[/\s+/, "white"]],
    assignment: [[/=/, "tag"]],
    numbers: [
      [/0[xX][0-9a-fA-F]*/, "number"],
      [/[$][+-]*\d*(\.\d*)?/, "number"],
      [/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, "number"]
    ],
    // states that start other states (aka nested states):
    strings: [
      [/'/, { token: "string", next: "@string" }],
      [/"/, { token: "type", next: "@string_double" }]
    ],
    string: [
      [/{/, { token: "delimiter.curly", next: "@nestedCurly" }],
      // escape out of string and into nestedCurly
      [/\(/, { token: "delimiter.parenthesis", next: "@nestedParens" }],
      // escape out of string and into nestedCurly
      [/"/, { token: "type", next: "@string_double" }],
      // jump into double string
      [/'/, { token: "string", next: "@pop" }],
      // stop being a string
      { include: "@nonNestableStates" },
      [/[^']/, "string"]
      // anything that is not a quote, is marked as string
    ],
    string_double: [
      [/[^"]/, "type"],
      // mark anything not a quote as a "type" (different type of string for visual difference)
      [/"/, { token: "type", next: "@pop" }]
      // mark also as a type and stop being in the double string state
    ],
    nestedCurly: [
      [/}/, { token: "delimiter.curly", next: "@pop" }],
      // escape out of string and into braces
      [/'/, { token: "string", next: "@string" }],
      // go to string if see start of string
      [/"/, { token: "type", next: "@string_double" }]
      // go to string_double if see start of double string
    ],
    nestedParens: [
      [/\)/, { token: "delimiter.parenthesis", next: "@pop" }],
      // escape out of string and into braces
      [/'/, { token: "string", next: "@string" }],
      // go to string if see start of string
      [/"/, { token: "type", next: "@string_double" }]
      // go to string_double if see start of double string
    ]
  }
};
const conf = {
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ]
};
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/monarch/CompletionItemProvider.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompletionItemProvider: () => (/* binding */ CompletionItemProvider)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _cloudwatch_ppl_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/cloudwatch-ppl/language.ts");
/* harmony import */ var _linkedTokenBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/linkedTokenBuilder.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/types.ts");





class CompletionItemProvider {
  constructor(resources, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getTemplateSrv)()) {
    this.resources = resources;
    this.templateSrv = templateSrv;
    this.templateSrv = templateSrv;
    this.tokenTypes = {
      Parenthesis: "delimiter.parenthesis",
      Whitespace: "white",
      Keyword: "keyword",
      Delimiter: "delimiter",
      Operator: "operator",
      Identifier: "identifier",
      Type: "type",
      Function: "predefined",
      Number: "number",
      String: "string",
      Variable: "variable",
      Comment: "comment",
      Regexp: "regexp"
    };
  }
  // implemented by subclasses, given a token, returns a lexical position in a query
  getStatementPosition(currentToken) {
    return _types__WEBPACK_IMPORTED_MODULE_3__.StatementPosition.Unknown;
  }
  // implemented by subclasses, given a lexical statement position, returns potential kinds of suggestions
  getSuggestionKinds(position) {
    return [];
  }
  // implemented by subclasses, given potential suggestions kinds, returns suggestion objects for monaco aka "CompletionItem"
  getSuggestions(monaco, currentToken, suggestionKinds, statementPosition, position) {
    return Promise.reject([]);
  }
  // called by registerLanguage and passed to monaco with registerCompletionItemProvider
  // returns an object that implements https://microsoft.github.io/monaco-editor/api/interfaces/monaco.languages.CompletionItemProvider.html
  getCompletionProvider(monaco, languageDefinition) {
    const isPPL = languageDefinition.id === _cloudwatch_ppl_language__WEBPACK_IMPORTED_MODULE_1__.CLOUDWATCH_PPL_LANGUAGE_DEFINITION_ID;
    const triggerCharacters = [" ", "$", ",", "(", "'"].concat(isPPL ? ["`"] : []);
    return {
      triggerCharacters,
      // one of these characters indicates that it is time to look for a suggestion
      provideCompletionItems: async (model, position) => {
        const currentToken = (0,_linkedTokenBuilder__WEBPACK_IMPORTED_MODULE_2__.linkedTokenBuilder)(monaco, languageDefinition, model, position, this.tokenTypes);
        const statementPosition = this.getStatementPosition(currentToken);
        const suggestionKinds = this.getSuggestionKinds(statementPosition);
        const suggestions = await this.getSuggestions(
          monaco,
          currentToken,
          suggestionKinds,
          statementPosition,
          position
        );
        return {
          suggestions
        };
      }
    };
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/monarch/LinkedToken.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkedToken: () => (/* binding */ LinkedToken)
/* harmony export */ });

class LinkedToken {
  constructor(type, value, range, previous, next, tokenTypes) {
    this.type = type;
    this.value = value;
    this.range = range;
    this.previous = previous;
    this.next = next;
    this.tokenTypes = tokenTypes;
  }
  isKeyword() {
    return this.type === this.tokenTypes.Keyword;
  }
  isWhiteSpace() {
    return this.type === this.tokenTypes.Whitespace;
  }
  isParenthesis() {
    return this.type === this.tokenTypes.Parenthesis;
  }
  isIdentifier() {
    return this.type === this.tokenTypes.Identifier;
  }
  isString() {
    return this.type === this.tokenTypes.String;
  }
  isDoubleQuotedString() {
    return this.type === this.tokenTypes.Type;
  }
  isVariable() {
    return this.type === this.tokenTypes.Variable;
  }
  isFunction() {
    return this.type === this.tokenTypes.Function;
  }
  isNumber() {
    return this.type === this.tokenTypes.Number;
  }
  is(type, value) {
    const isType = this.type === type;
    return value !== void 0 ? isType && this.value === value : isType;
  }
  endsWith(value) {
    return this.value === value || this.value[this.value.length - 1] === value;
  }
  getPreviousNonWhiteSpaceToken() {
    let curr = this.previous;
    while (curr != null) {
      if (!curr.isWhiteSpace()) {
        return curr;
      }
      curr = curr.previous;
    }
    return null;
  }
  getPreviousOfType(type, value) {
    let curr = this.previous;
    while (curr != null) {
      const isType = curr.type === type;
      if (value !== void 0 ? isType && curr.value === value : isType) {
        return curr;
      }
      curr = curr.previous;
    }
    return null;
  }
  getPreviousUntil(type, ignoreTypes, value) {
    let tokens = [];
    let curr = this.previous;
    while (curr != null) {
      if (ignoreTypes.some((t) => t === curr?.type)) {
        curr = curr.previous;
        continue;
      }
      const isType = curr.type === type;
      if (value !== void 0 ? isType && curr.value === value : isType) {
        return tokens;
      }
      if (!curr.isWhiteSpace()) {
        tokens.push(curr);
      }
      curr = curr.previous;
    }
    return tokens;
  }
  getNextUntil(type, ignoreTypes, value) {
    let tokens = [];
    let curr = this.next;
    while (curr != null) {
      if (ignoreTypes.some((t) => t === curr?.type)) {
        curr = curr.next;
        continue;
      }
      const isType = curr.type === type;
      if (value !== void 0 ? isType && curr.value === value : isType) {
        return tokens;
      }
      if (!curr.isWhiteSpace()) {
        tokens.push(curr);
      }
      curr = curr.next;
    }
    return tokens;
  }
  getPreviousKeyword() {
    let curr = this.previous;
    while (curr != null) {
      if (curr.isKeyword()) {
        return curr;
      }
      curr = curr.previous;
    }
    return null;
  }
  getNextNonWhiteSpaceToken() {
    let curr = this.next;
    while (curr != null) {
      if (!curr.isWhiteSpace()) {
        return curr;
      }
      curr = curr.next;
    }
    return null;
  }
  getNextOfType(type, value) {
    let curr = this.next;
    while (curr != null) {
      const isType = curr.type === type;
      if (value !== void 0 ? isType && curr.value === value : isType) {
        return curr;
      }
      curr = curr.next;
    }
    return null;
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/monarch/commands.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TRIGGER_SUGGEST: () => (/* binding */ TRIGGER_SUGGEST)
/* harmony export */ });

const TRIGGER_SUGGEST = {
  id: "editor.action.triggerSuggest",
  title: ""
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/monarch/linkedTokenBuilder.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   linkedTokenBuilder: () => (/* binding */ linkedTokenBuilder)
/* harmony export */ });
/* harmony import */ var _LinkedToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/language/monarch/LinkedToken.ts");


function linkedTokenBuilder(monaco, language, model, position, tokenTypes) {
  let current = null;
  let previous = null;
  const tokensPerLine = monaco.editor.tokenize(model.getValue() ?? "", language.id);
  for (let lineIndex = 0; lineIndex < tokensPerLine.length; lineIndex++) {
    const tokens = tokensPerLine[lineIndex];
    if (!tokens.length && previous) {
      const token = {
        offset: 0,
        type: tokenTypes.Whitespace,
        language: language.id,
        _tokenBrand: void 0
      };
      tokens.push(token);
    }
    for (let columnIndex = 0; columnIndex < tokens.length; columnIndex++) {
      const token = tokens[columnIndex];
      let endColumn = tokens.length > columnIndex + 1 ? tokens[columnIndex + 1].offset + 1 : model.getLineLength(lineIndex + 1) + 1;
      const range = {
        startLineNumber: lineIndex + 1,
        startColumn: token.offset === 0 ? 0 : token.offset + 1,
        endLineNumber: lineIndex + 1,
        endColumn
      };
      const value = model.getValueInRange(range);
      const newToken = new _LinkedToken__WEBPACK_IMPORTED_MODULE_0__.LinkedToken(token.type, value, range, previous, null, tokenTypes);
      if (monaco.Range.containsPosition(range, position)) {
        current = newToken;
      }
      if (previous) {
        previous.next = newToken;
      }
      previous = newToken;
    }
  }
  return current;
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/monarch/register.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reRegisterCompletionProvider: () => (/* binding */ reRegisterCompletionProvider),
/* harmony export */   registerLanguage: () => (/* binding */ registerLanguage)
/* harmony export */ });

const reRegisterCompletionProvider = async (monaco, language, completionItemProvider, disposal) => {
  const { id, loader } = language;
  disposal?.dispose();
  return loader().then((monarch) => {
    return monaco.languages.registerCompletionItemProvider(
      id,
      completionItemProvider.getCompletionProvider(monaco, language)
    );
  });
};
const registerLanguage = async (monaco, language, completionItemProvider) => {
  const { id, loader } = language;
  const languages = monaco.languages.getLanguages();
  if (languages.find((l) => l.id === id)) {
    return;
  }
  monaco.languages.register({ id });
  return loader().then((monarch) => {
    monaco.languages.setMonarchTokensProvider(id, monarch.language);
    monaco.languages.setLanguageConfiguration(id, monarch.conf);
    return monaco.languages.registerCompletionItemProvider(
      id,
      completionItemProvider.getCompletionProvider(monaco, language)
    );
  });
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/monarch/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompletionItemPriority: () => (/* binding */ CompletionItemPriority),
/* harmony export */   StatementPosition: () => (/* binding */ StatementPosition),
/* harmony export */   SuggestionKind: () => (/* binding */ SuggestionKind)
/* harmony export */ });

var StatementPosition = /* @__PURE__ */ ((StatementPosition2) => {
  StatementPosition2[StatementPosition2["Unknown"] = 0] = "Unknown";
  StatementPosition2[StatementPosition2["SelectKeyword"] = 1] = "SelectKeyword";
  StatementPosition2[StatementPosition2["AfterSelectKeyword"] = 2] = "AfterSelectKeyword";
  StatementPosition2[StatementPosition2["SelectExpression"] = 3] = "SelectExpression";
  StatementPosition2[StatementPosition2["AfterSelectExpression"] = 4] = "AfterSelectExpression";
  StatementPosition2[StatementPosition2["AfterSelectFuncFirstArgument"] = 5] = "AfterSelectFuncFirstArgument";
  StatementPosition2[StatementPosition2["PredefinedFunctionArgument"] = 6] = "PredefinedFunctionArgument";
  StatementPosition2[StatementPosition2["FromKeyword"] = 7] = "FromKeyword";
  StatementPosition2[StatementPosition2["AfterFrom"] = 8] = "AfterFrom";
  StatementPosition2[StatementPosition2["AfterFromKeyword"] = 9] = "AfterFromKeyword";
  StatementPosition2[StatementPosition2["AfterFromArguments"] = 10] = "AfterFromArguments";
  StatementPosition2[StatementPosition2["SchemaFuncFirstArgument"] = 11] = "SchemaFuncFirstArgument";
  StatementPosition2[StatementPosition2["SchemaFuncExtraArgument"] = 12] = "SchemaFuncExtraArgument";
  StatementPosition2[StatementPosition2["WhereKey"] = 13] = "WhereKey";
  StatementPosition2[StatementPosition2["WhereComparisonOperator"] = 14] = "WhereComparisonOperator";
  StatementPosition2[StatementPosition2["WhereValue"] = 15] = "WhereValue";
  StatementPosition2[StatementPosition2["AfterWhereValue"] = 16] = "AfterWhereValue";
  StatementPosition2[StatementPosition2["HavingKey"] = 17] = "HavingKey";
  StatementPosition2[StatementPosition2["HavingComparisonOperator"] = 18] = "HavingComparisonOperator";
  StatementPosition2[StatementPosition2["HavingValue"] = 19] = "HavingValue";
  StatementPosition2[StatementPosition2["AfterHavingValue"] = 20] = "AfterHavingValue";
  StatementPosition2[StatementPosition2["CaseKey"] = 21] = "CaseKey";
  StatementPosition2[StatementPosition2["CaseComparisonOperator"] = 22] = "CaseComparisonOperator";
  StatementPosition2[StatementPosition2["CaseValue"] = 23] = "CaseValue";
  StatementPosition2[StatementPosition2["AfterCaseValue"] = 24] = "AfterCaseValue";
  StatementPosition2[StatementPosition2["WhenKey"] = 25] = "WhenKey";
  StatementPosition2[StatementPosition2["WhenComparisonOperator"] = 26] = "WhenComparisonOperator";
  StatementPosition2[StatementPosition2["WhenValue"] = 27] = "WhenValue";
  StatementPosition2[StatementPosition2["AfterWhenValue"] = 28] = "AfterWhenValue";
  StatementPosition2[StatementPosition2["ThenExpression"] = 29] = "ThenExpression";
  StatementPosition2[StatementPosition2["AfterThenExpression"] = 30] = "AfterThenExpression";
  StatementPosition2[StatementPosition2["AfterElseKeyword"] = 31] = "AfterElseKeyword";
  StatementPosition2[StatementPosition2["OnKey"] = 32] = "OnKey";
  StatementPosition2[StatementPosition2["OnComparisonOperator"] = 33] = "OnComparisonOperator";
  StatementPosition2[StatementPosition2["OnValue"] = 34] = "OnValue";
  StatementPosition2[StatementPosition2["AfterOnValue"] = 35] = "AfterOnValue";
  StatementPosition2[StatementPosition2["AfterGroupByKeywords"] = 36] = "AfterGroupByKeywords";
  StatementPosition2[StatementPosition2["AfterGroupBy"] = 37] = "AfterGroupBy";
  StatementPosition2[StatementPosition2["AfterOrderByKeywords"] = 38] = "AfterOrderByKeywords";
  StatementPosition2[StatementPosition2["AfterOrderByFunction"] = 39] = "AfterOrderByFunction";
  StatementPosition2[StatementPosition2["AfterOrderByDirection"] = 40] = "AfterOrderByDirection";
  StatementPosition2[StatementPosition2["Subquery"] = 41] = "Subquery";
  StatementPosition2[StatementPosition2["PredefinedFunction"] = 42] = "PredefinedFunction";
  StatementPosition2[StatementPosition2["SearchFuncSecondArg"] = 43] = "SearchFuncSecondArg";
  StatementPosition2[StatementPosition2["SearchFuncThirdArg"] = 44] = "SearchFuncThirdArg";
  StatementPosition2[StatementPosition2["PredefinedFuncSecondArg"] = 45] = "PredefinedFuncSecondArg";
  StatementPosition2[StatementPosition2["AfterFunction"] = 46] = "AfterFunction";
  StatementPosition2[StatementPosition2["WithinString"] = 47] = "WithinString";
  StatementPosition2[StatementPosition2["NewCommand"] = 48] = "NewCommand";
  StatementPosition2[StatementPosition2["Comment"] = 49] = "Comment";
  StatementPosition2[StatementPosition2["DedupKeyword"] = 50] = "DedupKeyword";
  StatementPosition2[StatementPosition2["AfterDedupKeyword"] = 51] = "AfterDedupKeyword";
  StatementPosition2[StatementPosition2["DisplayKeyword"] = 52] = "DisplayKeyword";
  StatementPosition2[StatementPosition2["AfterDisplayKeyword"] = 53] = "AfterDisplayKeyword";
  StatementPosition2[StatementPosition2["FieldsKeyword"] = 54] = "FieldsKeyword";
  StatementPosition2[StatementPosition2["AfterFieldsKeyword"] = 55] = "AfterFieldsKeyword";
  StatementPosition2[StatementPosition2["FilterKeyword"] = 56] = "FilterKeyword";
  StatementPosition2[StatementPosition2["AfterFilterKeyword"] = 57] = "AfterFilterKeyword";
  StatementPosition2[StatementPosition2["FilterArg"] = 58] = "FilterArg";
  StatementPosition2[StatementPosition2["LimitKeyword"] = 59] = "LimitKeyword";
  StatementPosition2[StatementPosition2["AfterLimitKeyword"] = 60] = "AfterLimitKeyword";
  StatementPosition2[StatementPosition2["ParseKeyword"] = 61] = "ParseKeyword";
  StatementPosition2[StatementPosition2["AfterParseKeyword"] = 62] = "AfterParseKeyword";
  StatementPosition2[StatementPosition2["SortKeyword"] = 63] = "SortKeyword";
  StatementPosition2[StatementPosition2["AfterSortKeyword"] = 64] = "AfterSortKeyword";
  StatementPosition2[StatementPosition2["SortArg"] = 65] = "SortArg";
  StatementPosition2[StatementPosition2["StatsKeyword"] = 66] = "StatsKeyword";
  StatementPosition2[StatementPosition2["AfterStatsKeyword"] = 67] = "AfterStatsKeyword";
  StatementPosition2[StatementPosition2["AsKeyword"] = 68] = "AsKeyword";
  StatementPosition2[StatementPosition2["AfterAsKeyword"] = 69] = "AfterAsKeyword";
  StatementPosition2[StatementPosition2["ByKeyword"] = 70] = "ByKeyword";
  StatementPosition2[StatementPosition2["AfterByKeyword"] = 71] = "AfterByKeyword";
  StatementPosition2[StatementPosition2["InKeyword"] = 72] = "InKeyword";
  StatementPosition2[StatementPosition2["AfterInKeyword"] = 73] = "AfterInKeyword";
  StatementPosition2[StatementPosition2["LikeKeyword"] = 74] = "LikeKeyword";
  StatementPosition2[StatementPosition2["AfterLikeKeyword"] = 75] = "AfterLikeKeyword";
  StatementPosition2[StatementPosition2["DiffKeyword"] = 76] = "DiffKeyword";
  StatementPosition2[StatementPosition2["AfterDiffKeyword"] = 77] = "AfterDiffKeyword";
  StatementPosition2[StatementPosition2["DiffModifierArg"] = 78] = "DiffModifierArg";
  StatementPosition2[StatementPosition2["Function"] = 79] = "Function";
  StatementPosition2[StatementPosition2["FunctionArg"] = 80] = "FunctionArg";
  StatementPosition2[StatementPosition2["CommandArg"] = 81] = "CommandArg";
  StatementPosition2[StatementPosition2["AfterCommand"] = 82] = "AfterCommand";
  StatementPosition2[StatementPosition2["ArithmeticOperator"] = 83] = "ArithmeticOperator";
  StatementPosition2[StatementPosition2["ArithmeticOperatorArg"] = 84] = "ArithmeticOperatorArg";
  StatementPosition2[StatementPosition2["BooleanOperator"] = 85] = "BooleanOperator";
  StatementPosition2[StatementPosition2["BooleanOperatorArg"] = 86] = "BooleanOperatorArg";
  StatementPosition2[StatementPosition2["ComparisonOperator"] = 87] = "ComparisonOperator";
  StatementPosition2[StatementPosition2["ComparisonOperatorArg"] = 88] = "ComparisonOperatorArg";
  StatementPosition2[StatementPosition2["BeforeLogicalExpression"] = 89] = "BeforeLogicalExpression";
  StatementPosition2[StatementPosition2["AfterArithmeticOperator"] = 90] = "AfterArithmeticOperator";
  StatementPosition2[StatementPosition2["AfterINKeyword"] = 91] = "AfterINKeyword";
  StatementPosition2[StatementPosition2["SortField"] = 92] = "SortField";
  StatementPosition2[StatementPosition2["AfterHeadCommand"] = 93] = "AfterHeadCommand";
  StatementPosition2[StatementPosition2["AfterFieldsCommand"] = 94] = "AfterFieldsCommand";
  StatementPosition2[StatementPosition2["FieldList"] = 95] = "FieldList";
  StatementPosition2[StatementPosition2["AfterDedupFieldNames"] = 96] = "AfterDedupFieldNames";
  StatementPosition2[StatementPosition2["AfterStatsCommand"] = 97] = "AfterStatsCommand";
  StatementPosition2[StatementPosition2["StatsFunctionArgument"] = 98] = "StatsFunctionArgument";
  StatementPosition2[StatementPosition2["AfterStatsBy"] = 99] = "AfterStatsBy";
  StatementPosition2[StatementPosition2["AfterBooleanArgument"] = 100] = "AfterBooleanArgument";
  StatementPosition2[StatementPosition2["EvalClause"] = 101] = "EvalClause";
  StatementPosition2[StatementPosition2["Expression"] = 102] = "Expression";
  StatementPosition2[StatementPosition2["SortFieldExpression"] = 103] = "SortFieldExpression";
  return StatementPosition2;
})(StatementPosition || {});
var SuggestionKind = /* @__PURE__ */ ((SuggestionKind2) => {
  SuggestionKind2[SuggestionKind2["SelectKeyword"] = 0] = "SelectKeyword";
  SuggestionKind2[SuggestionKind2["AfterSelectKeyword"] = 1] = "AfterSelectKeyword";
  SuggestionKind2[SuggestionKind2["AfterSelectExpression"] = 2] = "AfterSelectExpression";
  SuggestionKind2[SuggestionKind2["FunctionsWithArguments"] = 3] = "FunctionsWithArguments";
  SuggestionKind2[SuggestionKind2["Metrics"] = 4] = "Metrics";
  SuggestionKind2[SuggestionKind2["FromKeyword"] = 5] = "FromKeyword";
  SuggestionKind2[SuggestionKind2["AfterFromKeyword"] = 6] = "AfterFromKeyword";
  SuggestionKind2[SuggestionKind2["AfterFromArguments"] = 7] = "AfterFromArguments";
  SuggestionKind2[SuggestionKind2["JoinKeywords"] = 8] = "JoinKeywords";
  SuggestionKind2[SuggestionKind2["HavingKeywords"] = 9] = "HavingKeywords";
  SuggestionKind2[SuggestionKind2["SchemaKeyword"] = 10] = "SchemaKeyword";
  SuggestionKind2[SuggestionKind2["Namespaces"] = 11] = "Namespaces";
  SuggestionKind2[SuggestionKind2["LabelKeys"] = 12] = "LabelKeys";
  SuggestionKind2[SuggestionKind2["WhereKeyword"] = 13] = "WhereKeyword";
  SuggestionKind2[SuggestionKind2["GroupByKeywords"] = 14] = "GroupByKeywords";
  SuggestionKind2[SuggestionKind2["OrderByKeywords"] = 15] = "OrderByKeywords";
  SuggestionKind2[SuggestionKind2["FunctionsWithoutArguments"] = 16] = "FunctionsWithoutArguments";
  SuggestionKind2[SuggestionKind2["LimitKeyword"] = 17] = "LimitKeyword";
  SuggestionKind2[SuggestionKind2["SortOrderDirectionKeyword"] = 18] = "SortOrderDirectionKeyword";
  SuggestionKind2[SuggestionKind2["ComparisonOperators"] = 19] = "ComparisonOperators";
  SuggestionKind2[SuggestionKind2["LabelValues"] = 20] = "LabelValues";
  SuggestionKind2[SuggestionKind2["LogicalOperators"] = 21] = "LogicalOperators";
  SuggestionKind2[SuggestionKind2["CaseKeyword"] = 22] = "CaseKeyword";
  SuggestionKind2[SuggestionKind2["WhenKeyword"] = 23] = "WhenKeyword";
  SuggestionKind2[SuggestionKind2["ThenKeyword"] = 24] = "ThenKeyword";
  SuggestionKind2[SuggestionKind2["AfterThenExpression"] = 25] = "AfterThenExpression";
  SuggestionKind2[SuggestionKind2["KeywordArguments"] = 26] = "KeywordArguments";
  SuggestionKind2[SuggestionKind2["Operators"] = 27] = "Operators";
  SuggestionKind2[SuggestionKind2["Statistic"] = 28] = "Statistic";
  SuggestionKind2[SuggestionKind2["Period"] = 29] = "Period";
  SuggestionKind2[SuggestionKind2["Command"] = 30] = "Command";
  SuggestionKind2[SuggestionKind2["Function"] = 31] = "Function";
  SuggestionKind2[SuggestionKind2["InKeyword"] = 32] = "InKeyword";
  SuggestionKind2[SuggestionKind2["DiffModifier"] = 33] = "DiffModifier";
  SuggestionKind2[SuggestionKind2["BooleanFunction"] = 34] = "BooleanFunction";
  SuggestionKind2[SuggestionKind2["LogicalExpression"] = 35] = "LogicalExpression";
  SuggestionKind2[SuggestionKind2["ValueExpression"] = 36] = "ValueExpression";
  SuggestionKind2[SuggestionKind2["FieldOperators"] = 37] = "FieldOperators";
  SuggestionKind2[SuggestionKind2["Field"] = 38] = "Field";
  SuggestionKind2[SuggestionKind2["BooleanLiteral"] = 39] = "BooleanLiteral";
  SuggestionKind2[SuggestionKind2["DedupParameter"] = 40] = "DedupParameter";
  SuggestionKind2[SuggestionKind2["StatsParameter"] = 41] = "StatsParameter";
  SuggestionKind2[SuggestionKind2["BooleanArgument"] = 42] = "BooleanArgument";
  SuggestionKind2[SuggestionKind2["StatsFunctions"] = 43] = "StatsFunctions";
  SuggestionKind2[SuggestionKind2["SpanClause"] = 44] = "SpanClause";
  SuggestionKind2[SuggestionKind2["SortFunctions"] = 45] = "SortFunctions";
  return SuggestionKind2;
})(SuggestionKind || {});
var CompletionItemPriority = /* @__PURE__ */ ((CompletionItemPriority2) => {
  CompletionItemPriority2["High"] = "a";
  CompletionItemPriority2["MediumHigh"] = "d";
  CompletionItemPriority2["Medium"] = "g";
  CompletionItemPriority2["MediumLow"] = "k";
  CompletionItemPriority2["Low"] = "q";
  return CompletionItemPriority2;
})(CompletionItemPriority || {});


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/language/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchLogGroupFields: () => (/* binding */ fetchLogGroupFields)
/* harmony export */ });
/* harmony import */ var _utils_templateVariableUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/templateVariableUtils.ts");


const fetchLogGroupFields = async (logGroups, region, templateSrv, resources) => {
  if (logGroups.length === 0) {
    return [];
  }
  const interpolatedLogGroups = (0,_utils_templateVariableUtils__WEBPACK_IMPORTED_MODULE_0__.interpolateStringArrayUsingSingleOrMultiValuedVariable)(
    templateSrv,
    logGroups.map((lg) => lg.name),
    {},
    "text"
  );
  const results = await Promise.all(
    interpolatedLogGroups.map(
      (logGroupName) => resources.getLogGroupFields(region, logGroupName).then((fields) => fields.filter((f) => f).map((f) => f.value.name ?? ""))
    )
  );
  return [...new Set(results.flat())];
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/memoizedDebounce.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((func, wait = 7e3) => {
  const mem = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.memoize)(
    (...args) => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(func, wait, {
      leading: true
    }),
    (...args) => JSON.stringify(args)
  );
  return (...args) => mem(...args)(...args);
});


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/migrations/metricQueryMigrations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   migrateAliasPatterns: () => (/* binding */ migrateAliasPatterns),
/* harmony export */   migrateMetricQuery: () => (/* binding */ migrateMetricQuery)
/* harmony export */ });
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dashboardMigrations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/migrations/dashboardMigrations.ts");



function migrateMetricQuery(query) {
  const newQuery = { ...query };
  (0,_dashboardMigrations__WEBPACK_IMPORTED_MODULE_1__.migrateCloudWatchQuery)(newQuery);
  const migratedQuery = migrateAliasPatterns(newQuery);
  return fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(migratedQuery, query) ? query : migratedQuery;
}
const aliasPatterns = {
  metric: `PROP('MetricName')`,
  namespace: `PROP('Namespace')`,
  period: `PROP('Period')`,
  region: `PROP('Region')`,
  stat: `PROP('Stat')`,
  label: `LABEL`
};
function migrateAliasPatterns(query) {
  if (!query.hasOwnProperty("label")) {
    const newQuery = { ...query };
    if (!query.hasOwnProperty("label")) {
      const regex = /{{\s*(.+?)\s*}}/g;
      newQuery.label = query.alias?.replace(regex, (_, value) => {
        if (aliasPatterns.hasOwnProperty(value)) {
          return `\${${aliasPatterns[value]}}`;
        }
        return `\${PROP('Dim.${value}')}`;
      }) ?? "";
    }
    return newQuery;
  }
  return query;
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/migrations/useMigratedMetricsQuery.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _metricQueryMigrations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/migrations/metricQueryMigrations.ts");



const useMigratedMetricsQuery = (query, onChangeQuery) => {
  const migratedQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_metricQueryMigrations__WEBPACK_IMPORTED_MODULE_1__.migrateMetricQuery)(query), [query]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (migratedQuery !== query) {
      onChangeQuery(migratedQuery);
    }
  }, [migratedQuery, query, onChangeQuery]);
  return migratedQuery;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMigratedMetricsQuery);


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/migrations/useMigratedQuery.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   migrateQuery: () => (/* binding */ migrateQuery)
/* harmony export */ });
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const useMigratedQuery = (query, onChangeQuery) => {
  const migratedQuery = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => migrateQuery(query), [query]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (migratedQuery !== query) {
      onChangeQuery(migratedQuery);
    }
  }, [migratedQuery, query, onChangeQuery]);
  return migratedQuery;
};
function migrateQuery(query) {
  const newQuery = { ...query };
  if (!newQuery.queryMode) {
    newQuery.queryMode = "Metrics";
  }
  if (!newQuery.region) {
    newQuery.region = "default";
  }
  return fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(newQuery, query) ? query : newQuery;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMigratedQuery);


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/migrations/variableQueryMigrations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   migrateVariableQuery: () => (/* binding */ migrateVariableQuery)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/types.ts");



const jsonVariable = /\${(\w+):json}/g;
function isVariableQuery(rawQuery) {
  return typeof rawQuery !== "string" && typeof rawQuery.ec2Filters !== "string" && typeof rawQuery.tags !== "string";
}
function migrateMultiFilters(oldFilters) {
  const tempFilters = oldFilters.replace(jsonVariable, '"$$$1"');
  const parsedFilters = JSON.parse(tempFilters);
  const newFilters = {};
  Object.keys(parsedFilters).forEach((key) => {
    const value = parsedFilters[key];
    if (typeof value === "string") {
      newFilters[key] = [value];
    } else if (value !== void 0) {
      newFilters[key] = value;
    }
  });
  return newFilters;
}
function migrateVariableQuery(rawQuery) {
  if (isVariableQuery(rawQuery)) {
    return rawQuery;
  }
  if (typeof rawQuery !== "string") {
    const newQuery2 = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(rawQuery, ["dimensionFilters", "ec2Filters", "tags"]);
    newQuery2.dimensionFilters = {};
    newQuery2.ec2Filters = {};
    newQuery2.tags = {};
    if (rawQuery.dimensionFilters !== "" && rawQuery.ec2Filters !== "[]") {
      const tempFilters = rawQuery.dimensionFilters.replace(jsonVariable, '"$$$1"');
      try {
        newQuery2.dimensionFilters = JSON.parse(tempFilters);
      } catch {
        throw new Error(`unable to migrate poorly formed filters: ${rawQuery.dimensionFilters}`);
      }
    }
    if (rawQuery.ec2Filters !== "" && rawQuery.ec2Filters !== "[]") {
      try {
        newQuery2.ec2Filters = migrateMultiFilters(rawQuery.ec2Filters);
      } catch {
        throw new Error(`unable to migrate poorly formed filters: ${rawQuery.ec2Filters}`);
      }
    }
    if (rawQuery.tags !== "" && rawQuery.tags !== "[]") {
      try {
        newQuery2.tags = migrateMultiFilters(rawQuery.tags);
      } catch {
        throw new Error(`unable to migrate poorly formed filters: ${rawQuery.tags}`);
      }
    }
    return newQuery2;
  }
  const newQuery = {
    refId: "CloudWatchVariableQueryEditor-VariableQuery",
    queryType: _types__WEBPACK_IMPORTED_MODULE_1__.VariableQueryType.Regions,
    namespace: "",
    region: "",
    metricName: "",
    dimensionKey: "",
    dimensionFilters: {},
    ec2Filters: {},
    instanceID: "",
    attributeName: "",
    resourceType: "",
    tags: {}
  };
  if (rawQuery === "") {
    return newQuery;
  }
  if (rawQuery.match(/^regions\(\)/)) {
    return newQuery;
  }
  if (rawQuery.match(/^namespaces\(\)/)) {
    newQuery.queryType = _types__WEBPACK_IMPORTED_MODULE_1__.VariableQueryType.Namespaces;
    return newQuery;
  }
  const metricNameQuery = rawQuery.match(/^metrics\(([^\)]+?)(,\s?([^,]+?))?\)/);
  if (metricNameQuery) {
    newQuery.queryType = _types__WEBPACK_IMPORTED_MODULE_1__.VariableQueryType.Metrics;
    newQuery.namespace = metricNameQuery[1];
    newQuery.region = metricNameQuery[3] || "";
    return newQuery;
  }
  const dimensionKeysQuery = rawQuery.match(/^dimension_keys\(([^\)]+?)(,\s?([^,]+?))?\)/);
  if (dimensionKeysQuery) {
    newQuery.queryType = _types__WEBPACK_IMPORTED_MODULE_1__.VariableQueryType.DimensionKeys;
    newQuery.namespace = dimensionKeysQuery[1];
    newQuery.region = dimensionKeysQuery[3] || "";
    return newQuery;
  }
  const dimensionValuesQuery = rawQuery.match(
    /^dimension_values\(([^,]+?),\s?([^,]+?),\s?([^,]+?),\s?([^,]+?)(,\s?(.+))?\)/
  );
  if (dimensionValuesQuery) {
    newQuery.queryType = _types__WEBPACK_IMPORTED_MODULE_1__.VariableQueryType.DimensionValues;
    newQuery.region = dimensionValuesQuery[1];
    newQuery.namespace = dimensionValuesQuery[2];
    newQuery.metricName = dimensionValuesQuery[3];
    newQuery.dimensionKey = dimensionValuesQuery[4];
    newQuery.dimensionFilters = {};
    if (!!dimensionValuesQuery[6] && dimensionValuesQuery[6] !== "[]") {
      const tempFilters = dimensionValuesQuery[6].replace(jsonVariable, '"$$$1"');
      try {
        newQuery.dimensionFilters = JSON.parse(tempFilters);
      } catch {
        throw new Error(`unable to migrate poorly formed filters: ${dimensionValuesQuery[6]}`);
      }
    }
    return newQuery;
  }
  const ebsVolumeIdsQuery = rawQuery.match(/^ebs_volume_ids\(([^,]+?),\s?([^,]+?)\)/);
  if (ebsVolumeIdsQuery) {
    newQuery.queryType = _types__WEBPACK_IMPORTED_MODULE_1__.VariableQueryType.EBSVolumeIDs;
    newQuery.region = ebsVolumeIdsQuery[1];
    newQuery.instanceID = ebsVolumeIdsQuery[2];
    return newQuery;
  }
  const ec2InstanceAttributeQuery = rawQuery.match(/^ec2_instance_attribute\(([^,]+?),\s?([^,]+?),\s?(.+?)\)/);
  if (ec2InstanceAttributeQuery) {
    newQuery.queryType = _types__WEBPACK_IMPORTED_MODULE_1__.VariableQueryType.EC2InstanceAttributes;
    newQuery.region = ec2InstanceAttributeQuery[1];
    newQuery.attributeName = ec2InstanceAttributeQuery[2];
    if (ec2InstanceAttributeQuery[3] && ec2InstanceAttributeQuery[3] !== "[]") {
      try {
        newQuery.ec2Filters = migrateMultiFilters(ec2InstanceAttributeQuery[3]);
      } catch {
        throw new Error(`unable to migrate poorly formed filters: ${ec2InstanceAttributeQuery[3]}`);
      }
    }
    return newQuery;
  }
  const resourceARNsQuery = rawQuery.match(/^resource_arns\(([^,]+?),\s?([^,]+?),\s?(.+?)\)/);
  if (resourceARNsQuery) {
    newQuery.queryType = _types__WEBPACK_IMPORTED_MODULE_1__.VariableQueryType.ResourceArns;
    newQuery.region = resourceARNsQuery[1];
    newQuery.resourceType = resourceARNsQuery[2];
    if (resourceARNsQuery[3] && resourceARNsQuery[3] !== "[]") {
      try {
        newQuery.tags = migrateMultiFilters(resourceARNsQuery[3]);
      } catch {
        throw new Error(`unable to migrate poorly formed filters: ${resourceARNsQuery[3]}`);
      }
    }
    return newQuery;
  }
  const statsQuery = rawQuery.match(/^statistics\(\)/);
  if (statsQuery) {
    newQuery.queryType = _types__WEBPACK_IMPORTED_MODULE_1__.VariableQueryType.Statistics;
    return newQuery;
  }
  throw new Error("unable to parse old variable query");
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/events/common.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/datasource.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var _components_CheatSheet_LogsCheatSheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/CheatSheet/LogsCheatSheet.tsx");
/* harmony import */ var _components_ConfigEditor_ConfigEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/ConfigEditor/ConfigEditor.tsx");
/* harmony import */ var _components_MetaInspector_MetaInspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/MetaInspector/MetaInspector.tsx");
/* harmony import */ var _components_QueryEditor_QueryEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/QueryEditor/QueryEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/datasource.ts");
/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/tracking.ts");









const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataSourcePlugin(
  _datasource__WEBPACK_IMPORTED_MODULE_7__.CloudWatchDatasource
).setQueryEditorHelp(_components_CheatSheet_LogsCheatSheet__WEBPACK_IMPORTED_MODULE_3__["default"]).setConfigEditor(_components_ConfigEditor_ConfigEditor__WEBPACK_IMPORTED_MODULE_4__.ConfigEditor).setQueryEditor(_components_QueryEditor_QueryEditor__WEBPACK_IMPORTED_MODULE_6__.QueryEditor).setMetadataInspector(_components_MetaInspector_MetaInspector__WEBPACK_IMPORTED_MODULE_5__.MetaInspector);
(0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getAppEvents)().subscribe(_grafana_data__WEBPACK_IMPORTED_MODULE_0__.DashboardLoadedEvent, _tracking__WEBPACK_IMPORTED_MODULE_8__.onDashboardLoadedHandler);


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/plugin.json":
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"type":"datasource","name":"CloudWatch","id":"cloudwatch","category":"cloud","metrics":true,"logs":true,"alerting":true,"annotations":true,"backend":true,"includes":[{"type":"dashboard","name":"EC2","path":"dashboards/ec2.json"},{"type":"dashboard","name":"EBS","path":"dashboards/EBS.json"},{"type":"dashboard","name":"Lambda","path":"dashboards/Lambda.json"},{"type":"dashboard","name":"Logs","path":"dashboards/Logs.json"},{"type":"dashboard","name":"RDS","path":"dashboards/RDS.json"}],"queryOptions":{"minInterval":true},"info":{"description":"Data source for Amazon AWS monitoring service","author":{"name":"Grafana Labs","url":"https://grafana.com"},"keywords":["aws","amazon"],"logos":{"small":"img/amazon-web-services.png","large":"img/amazon-web-services.png"},"links":[{"name":"Raise issue","url":"https://github.com/grafana/grafana/issues/new"},{"name":"Documentation","url":"https://grafana.com/docs/grafana/latest/datasources/aws-cloudwatch/"}]}}');

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/query-runner/CloudWatchAnnotationQueryRunner.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudWatchAnnotationQueryRunner: () => (/* binding */ CloudWatchAnnotationQueryRunner)
/* harmony export */ });
/* harmony import */ var _CloudWatchRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/query-runner/CloudWatchRequest.ts");


class CloudWatchAnnotationQueryRunner extends _CloudWatchRequest__WEBPACK_IMPORTED_MODULE_0__.CloudWatchRequest {
  constructor(instanceSettings, templateSrv) {
    super(instanceSettings, templateSrv);
  }
  handleAnnotationQuery(queries, options, queryFn) {
    return queryFn({
      ...options,
      targets: queries.map((query) => ({
        ...query,
        statistic: this.templateSrv.replace(query.statistic),
        region: this.templateSrv.replace(this.getActualRegion(query.region)),
        namespace: this.templateSrv.replace(query.namespace),
        metricName: this.templateSrv.replace(query.metricName),
        dimensions: this.convertDimensionFormat(query.dimensions ?? {}, {}),
        period: query.period ?? "",
        actionPrefix: query.actionPrefix ?? "",
        alarmNamePrefix: query.alarmNamePrefix ?? "",
        type: "annotationQuery",
        datasource: this.ref
      }))
    });
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/query-runner/CloudWatchLogsQueryRunner.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudWatchLogsQueryRunner: () => (/* binding */ CloudWatchLogsQueryRunner),
/* harmony export */   LOGSTREAM_IDENTIFIER_INTERNAL: () => (/* binding */ LOGSTREAM_IDENTIFIER_INTERNAL),
/* harmony export */   LOG_IDENTIFIER_INTERNAL: () => (/* binding */ LOG_IDENTIFIER_INTERNAL),
/* harmony export */   convertTrendHistogramToSparkline: () => (/* binding */ convertTrendHistogramToSparkline)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/zip.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/concatMap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/finalize.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/repeat.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/scan.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/share.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-data/src/datetime/rangeutil.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-data/src/types/datasource.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-data/src/types/time.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-data/src/types/logs.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_schema_dist_esm_index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/types.ts");
/* harmony import */ var _utils_datalinks__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/datalinks.ts");
/* harmony import */ var _utils_logsRetry__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/logsRetry.ts");
/* harmony import */ var _utils_rxjs_increasingInterval__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/rxjs/increasingInterval.ts");
/* harmony import */ var _utils_templateVariableUtils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/templateVariableUtils.ts");
/* harmony import */ var _CloudWatchRequest__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/query-runner/CloudWatchRequest.ts");












const LOG_IDENTIFIER_INTERNAL = "__log__grafana_internal__";
const LOGSTREAM_IDENTIFIER_INTERNAL = "__logstream__grafana_internal__";
class CloudWatchLogsQueryRunner extends _CloudWatchRequest__WEBPACK_IMPORTED_MODULE_27__.CloudWatchRequest {
  constructor(instanceSettings, templateSrv) {
    super(instanceSettings, templateSrv);
    this.logQueries = {};
    // only public so that it is easy to mock out in tests
    this.createTimeoutFn = () => {
      const startTime = /* @__PURE__ */ new Date();
      return () => {
        return Date.now() >= startTime.valueOf() + _grafana_data__WEBPACK_IMPORTED_MODULE_15__.intervalToMs(this.logsTimeout);
      };
    };
    /**
     * Where all frontend log queries start. Log Queries are started and then we poll for the results.
     * There is a timeout set in the ds configuration that will stop the query if it takes too long.
     * We automatically retry logs queries that hit rate limits from aws.
     * @param logQueries the raw log queries as created by the user
     * @param options the full raw query request which might contain other queries
     * @param queryFn the inherited query function from the datasource that calls /query endpoint
     */
    this.handleLogQueries = (logQueries, options, queryFn) => {
      const validLogQueries = logQueries.filter(this.filterQuery);
      const startQueryRequests = validLogQueries.map((target) => {
        const { expression, logGroups, logGroupNames } = this.interpolateLogsQueryVariables(target, options.scopedVars);
        return {
          refId: target.refId,
          region: this.templateSrv.replace(this.getActualRegion(target.region)),
          queryString: expression ?? "",
          logGroups,
          logGroupNames,
          queryLanguage: target.queryLanguage,
          logsMode: target.logsMode ?? _types__WEBPACK_IMPORTED_MODULE_22__.LogsMode.Insights
        };
      });
      const timeoutFunc = this.createTimeoutFn();
      return (0,_utils_logsRetry__WEBPACK_IMPORTED_MODULE_24__.runWithRetry)(
        (targets) => this.makeLogActionRequest("StartQuery", targets, queryFn, options),
        startQueryRequests,
        timeoutFunc
      ).pipe(
        // once we've started the query, we need to poll for the results
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.mergeMap)((startQueryResponse) => {
          return this.getQueryResults({ logQueries, timeoutFunc, queryFn, startQueryResponse });
        }),
        // once we get the results, we add data links to the logs
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.mergeMap)((dataQueryResponse) => {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(
            (async () => {
              await (0,_utils_datalinks__WEBPACK_IMPORTED_MODULE_23__.addDataLinksToLogsResponse)(
                dataQueryResponse,
                options,
                this.replaceVariableAndDisplayWarningIfMulti.bind(this),
                this.expandVariableToArray.bind(this),
                this.getActualRegion.bind(this),
                this.tracingDataSourceUid
              );
              return dataQueryResponse;
            })()
          );
        })
      );
    };
    this.handleLogAnomaliesQueries = (logAnomaliesQueries, options, queryFn) => {
      const logAnomalyTargets = logAnomaliesQueries.map((target) => {
        return {
          refId: target.refId,
          region: this.templateSrv.replace(this.getActualRegion(target.region)),
          queryString: "",
          logGroups: [],
          logsMode: _types__WEBPACK_IMPORTED_MODULE_22__.LogsMode.Anomalies,
          suppressionState: target.suppressionState || "all",
          anomalyDetectionARN: target.anomalyDetectionARN || ""
        };
      });
      const range = options?.range || (0,_grafana_data__WEBPACK_IMPORTED_MODULE_17__.getDefaultTimeRange)();
      const requestId = options?.requestId ? `${options?.requestId}-logsAnomalies` : "";
      const requestParams = {
        ...options,
        range,
        skipQueryCache: true,
        requestId,
        interval: options?.interval || "",
        // dummy
        intervalMs: options?.intervalMs || 1,
        // dummy
        scopedVars: options?.scopedVars || {},
        // dummy
        timezone: options?.timezone || "",
        // dummy
        app: options?.app || "",
        // dummy
        startTime: options?.startTime || 0,
        // dummy
        targets: logAnomalyTargets.map((t) => ({
          ...t,
          id: "",
          queryMode: "Logs",
          refId: t.refId || "A",
          intervalMs: 1,
          // dummy
          maxDataPoints: 1,
          // dummy
          datasource: this.ref,
          type: "logAction",
          logsMode: _types__WEBPACK_IMPORTED_MODULE_22__.LogsMode.Anomalies
        }))
      };
      return queryFn(requestParams).pipe(
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.mergeMap)((dataQueryResponse) => {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(
            (async () => {
              convertTrendHistogramToSparkline(dataQueryResponse);
              return dataQueryResponse;
            })()
          );
        })
      );
    };
    /**
     * Called by datasource.ts, invoked when user clicks on a log row in the logs visualization and the "show context button"
     */
    this.getLogRowContext = async (row, { limit = 10, direction = _grafana_data__WEBPACK_IMPORTED_MODULE_18__.LogRowContextQueryDirection.Backward } = {}, queryFn, query) => {
      let logStreamField = null;
      let logField = null;
      for (const field of row.dataFrame.fields) {
        if (field.name === LOGSTREAM_IDENTIFIER_INTERNAL) {
          logStreamField = field;
          if (logField !== null) {
            break;
          }
        } else if (field.name === LOG_IDENTIFIER_INTERNAL) {
          logField = field;
          if (logStreamField !== null) {
            break;
          }
        }
      }
      const requestParams = {
        refId: query?.refId || "A",
        // dummy
        limit,
        startFromHead: direction !== _grafana_data__WEBPACK_IMPORTED_MODULE_18__.LogRowContextQueryDirection.Backward,
        region: this.templateSrv.replace(this.getActualRegion(query?.region)),
        logGroupName: parseLogGroupName(logField.values[row.rowIndex]),
        logStreamName: logStreamField.values[row.rowIndex]
      };
      if (direction === _grafana_data__WEBPACK_IMPORTED_MODULE_18__.LogRowContextQueryDirection.Backward) {
        requestParams.endTime = row.timeEpochMs;
      } else {
        requestParams.startTime = row.timeEpochMs;
      }
      return await (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(this.makeLogActionRequest("GetLogEvents", [requestParams], queryFn));
    };
    /**
     * Check if an already started query is complete and returns results if it is. Otherwise it will start polling for results.
     */
    this.getQueryResults = ({
      logQueries,
      timeoutFunc,
      queryFn,
      startQueryResponse
    }) => {
      if (startQueryResponse.data.every(
        (frame) => [
          _types__WEBPACK_IMPORTED_MODULE_22__.CloudWatchLogsQueryStatus.Complete,
          _types__WEBPACK_IMPORTED_MODULE_22__.CloudWatchLogsQueryStatus.Cancelled,
          _types__WEBPACK_IMPORTED_MODULE_22__.CloudWatchLogsQueryStatus.Failed
        ].includes(frame.meta?.custom?.["Status"])
      )) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({
          key: "test-key",
          state: _grafana_data__WEBPACK_IMPORTED_MODULE_20__.LoadingState.Done,
          ...startQueryResponse
        });
      }
      return this.pollForLogQueryResults(
        startQueryResponse.data.map((dataFrame) => ({
          queryId: dataFrame.fields[0].values[0],
          region: dataFrame.meta?.custom?.["Region"] ?? "default",
          refId: dataFrame.refId,
          statsGroups: logQueries.find((target) => target.refId === dataFrame.refId)?.statsGroups
        })),
        timeoutFunc,
        queryFn,
        startQueryResponse.errors || []
      );
    };
    this.tracingDataSourceUid = instanceSettings.jsonData.tracingDatasourceUid;
    this.logsTimeout = instanceSettings.jsonData.logsTimeout || "30m";
  }
  interpolateLogsQueryVariables(query, scopedVars) {
    const interpolatedLogGroupArns = (0,_utils_templateVariableUtils__WEBPACK_IMPORTED_MODULE_26__.interpolateStringArrayUsingSingleOrMultiValuedVariable)(
      this.templateSrv,
      (query.logGroups || this.instanceSettings.jsonData.logGroups || []).map((lg) => lg.arn),
      scopedVars
    );
    const interpolatedLogGroupNames = (0,_utils_templateVariableUtils__WEBPACK_IMPORTED_MODULE_26__.interpolateStringArrayUsingSingleOrMultiValuedVariable)(
      this.templateSrv,
      query.logGroupNames || this.instanceSettings.jsonData.defaultLogGroups || [],
      scopedVars,
      "text"
    );
    const logGroups = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniq)(interpolatedLogGroupArns).map((arn) => ({ arn, name: arn }));
    const logGroupNames = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniq)(interpolatedLogGroupNames);
    const logsSQLCustomerFormatter = (value, model) => {
      if (typeof value === "string" && value.startsWith("arn:") && value.endsWith(":*") || Array.isArray(value) && value.every((v) => typeof v === "string" && v.startsWith("arn:") && v.endsWith(":*"))) {
        const varName = model.name || "";
        const variable = this.templateSrv.getVariables().find(({ name }) => name === varName);
        const shouldSurroundInQuotes = query.expression?.replaceAll(/[\r\n\t\s]+/g, "").includes(`\`logGroups(logGroupIdentifier:[$${varName}])\``);
        if (variable && "current" in variable && "text" in variable.current) {
          if (Array.isArray(variable.current.text)) {
            return variable.current.text.map((v) => shouldSurroundInQuotes ? `'${v}'` : v).join(",");
          }
          return shouldSurroundInQuotes ? `'${variable.current.text}'` : variable.current.text;
        }
      }
      return value;
    };
    const formatter = query.queryLanguage === _types__WEBPACK_IMPORTED_MODULE_22__.LogsQueryLanguage.SQL ? logsSQLCustomerFormatter : void 0;
    const expression = this.templateSrv.replace(query.expression || "", scopedVars, formatter);
    return {
      logGroups,
      logGroupNames,
      expression
    };
  }
  /**
   * Checks progress and polls data of a started logs query with some retry logic.
   * @param queryParams
   */
  pollForLogQueryResults(queryParams, timeoutFunc, queryFn, errorsFromStartQuery) {
    this.logQueries = {};
    queryParams.forEach((param) => {
      this.logQueries[param.refId] = {
        id: param.queryId,
        region: param.region,
        statsQuery: (param.statsGroups?.length ?? 0) > 0
      };
    });
    const responses = (0,_utils_rxjs_increasingInterval__WEBPACK_IMPORTED_MODULE_25__.increasingInterval)({ startPeriod: 100, endPeriod: 1e3, step: 300 }).pipe(
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.concatMap)((_) => this.makeLogActionRequest("GetQueryResults", queryParams, queryFn)),
      (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.repeat)(),
      (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.share)()
    );
    let errorsFromGetQuery = [];
    const dataFrames = responses.pipe(
      (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)((response) => {
        if (response.errors) {
          errorsFromGetQuery = response.errors;
        }
        return response.data;
      })
    );
    const initialValue = {
      failures: 0,
      prevRecordsMatched: {}
    };
    const consecutiveFailedAttempts = dataFrames.pipe(
      (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.scan)(({ failures, prevRecordsMatched }, frames) => {
        failures++;
        for (const frame of frames) {
          const recordsMatched = frame.meta?.stats?.find((stat) => stat.displayName === "Records scanned")?.value;
          if (recordsMatched > (prevRecordsMatched[frame.refId] ?? 0)) {
            failures = 0;
          }
          prevRecordsMatched[frame.refId] = recordsMatched;
        }
        return { failures, prevRecordsMatched };
      }, initialValue),
      (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(({ failures }) => failures),
      (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.share)()
    );
    const queryResponse = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.zip)(dataFrames, consecutiveFailedAttempts).pipe(
      (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.tap)(([dataFrames2]) => {
        for (const frame of dataFrames2) {
          if ([
            _types__WEBPACK_IMPORTED_MODULE_22__.CloudWatchLogsQueryStatus.Complete,
            _types__WEBPACK_IMPORTED_MODULE_22__.CloudWatchLogsQueryStatus.Cancelled,
            _types__WEBPACK_IMPORTED_MODULE_22__.CloudWatchLogsQueryStatus.Failed
          ].includes(frame.meta?.custom?.["Status"]) && this.logQueries.hasOwnProperty(frame.refId)) {
            delete this.logQueries[frame.refId];
          }
        }
      }),
      (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(([dataFrames2, failedAttempts]) => {
        const errors = [...errorsFromStartQuery, ...errorsFromGetQuery];
        if (timeoutFunc()) {
          for (const frame of dataFrames2) {
            (0,lodash__WEBPACK_IMPORTED_MODULE_0__.set)(frame, "meta.custom.Status", _types__WEBPACK_IMPORTED_MODULE_22__.CloudWatchLogsQueryStatus.Cancelled);
            errors.push({
              message: `Error: Query hit timeout before completing after ${failedAttempts} attempts, partial results may be shown. To increase the timeout window update your datasource configuration.`,
              type: _grafana_data__WEBPACK_IMPORTED_MODULE_16__.DataQueryErrorType.Timeout,
              refId: frame.refId
            });
          }
        }
        return {
          data: dataFrames2,
          key: "test-key",
          state: dataFrames2.every(
            (dataFrame) => [
              _types__WEBPACK_IMPORTED_MODULE_22__.CloudWatchLogsQueryStatus.Complete,
              _types__WEBPACK_IMPORTED_MODULE_22__.CloudWatchLogsQueryStatus.Cancelled,
              _types__WEBPACK_IMPORTED_MODULE_22__.CloudWatchLogsQueryStatus.Failed
            ].includes(dataFrame.meta?.custom?.["Status"])
          ) ? _grafana_data__WEBPACK_IMPORTED_MODULE_20__.LoadingState.Done : _grafana_data__WEBPACK_IMPORTED_MODULE_20__.LoadingState.Loading,
          errors
        };
      }),
      (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeWhile)(({ state }) => state !== _grafana_data__WEBPACK_IMPORTED_MODULE_20__.LoadingState.Error && state !== _grafana_data__WEBPACK_IMPORTED_MODULE_20__.LoadingState.Done, true)
    );
    return withTeardown(queryResponse, () => this.stopQueries(queryFn));
  }
  stopQueries(queryFn) {
    if (Object.keys(this.logQueries).length > 0) {
      this.makeLogActionRequest(
        "StopQuery",
        Object.values(this.logQueries).map((logQuery) => ({
          queryId: logQuery.id,
          region: logQuery.region,
          queryString: "",
          refId: ""
        })),
        queryFn
      ).pipe(
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => {
          this.logQueries = {};
        })
      );
    }
  }
  makeLogActionRequest(subtype, queryParams, queryFn, options) {
    const range = options?.range || (0,_grafana_data__WEBPACK_IMPORTED_MODULE_17__.getDefaultTimeRange)();
    const requestId = options?.requestId ? `${options?.requestId}-logs` : "";
    const requestParams = {
      ...options,
      range,
      skipQueryCache: true,
      requestId,
      interval: options?.interval || "",
      // dummy
      intervalMs: options?.intervalMs || 1,
      // dummy
      scopedVars: options?.scopedVars || {},
      // dummy
      timezone: options?.timezone || "",
      // dummy
      app: options?.app || "",
      // dummy
      startTime: options?.startTime || 0,
      // dummy
      targets: queryParams.map((param) => ({
        ...param,
        id: "",
        queryMode: "Logs",
        refId: param.refId || "A",
        intervalMs: 1,
        // dummy
        maxDataPoints: 1,
        // dummy
        datasource: this.ref,
        type: "logAction",
        subtype
      }))
    };
    return queryFn(requestParams);
  }
  filterQuery(query) {
    const hasMissingLegacyLogGroupNames = !query.logGroupNames?.length;
    const hasMissingLogGroups = !query.logGroups?.length;
    const hasMissingQueryString = !query.expression?.length;
    const isInvalidCWLIQuery = query.queryLanguage !== "SQL" && hasMissingLogGroups && hasMissingLegacyLogGroupNames;
    if (isInvalidCWLIQuery || hasMissingQueryString) {
      return false;
    }
    return true;
  }
}
function withTeardown(observable, onUnsubscribe) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((subscriber) => {
    const innerSub = observable.subscribe({
      next: (val) => subscriber.next(val),
      error: (err) => subscriber.next(err),
      complete: () => subscriber.complete()
    });
    return () => {
      innerSub.unsubscribe();
      onUnsubscribe();
    };
  });
}
function parseLogGroupName(logIdentifier) {
  const colonIndex = logIdentifier.lastIndexOf(":");
  return logIdentifier.slice(colonIndex + 1);
}
const LOG_TREND_FIELD_NAME = "logTrend";
function convertTrendHistogramToSparkline(dataQueryResponse) {
  dataQueryResponse.data.forEach((frame) => {
    let fieldIndexToReplace = null;
    const sparklineRawData = frame.fields.find((field, index) => {
      if (field.name === LOG_TREND_FIELD_NAME && field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_19__.FieldType.other) {
        fieldIndexToReplace = index;
        return true;
      }
      return false;
    });
    if (sparklineRawData) {
      const sparklineField = {
        name: "Log trend",
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_19__.FieldType.frame,
        config: {
          custom: {
            drawStyle: _grafana_schema_dist_esm_index__WEBPACK_IMPORTED_MODULE_21__.GraphDrawStyle.Bars,
            cellOptions: {
              type: _grafana_schema_dist_esm_index__WEBPACK_IMPORTED_MODULE_21__.TableCellDisplayMode.Sparkline,
              // hiding the value here as it's not useful or clear on what it represents for log trend
              hideValue: true
            }
          }
        },
        values: []
      };
      sparklineRawData.values.forEach((sparklineValue, rowIndex) => {
        const timestamps = [];
        const values = [];
        Object.keys(sparklineValue).map((t, i) => {
          let n = Number(t);
          if (!isNaN(n)) {
            timestamps.push(n);
            values.push(sparklineValue[t]);
          }
        });
        const sparklineFieldFrame = {
          name: `Trend_row_${rowIndex}`,
          length: timestamps.length,
          fields: [
            { name: "time", type: _grafana_data__WEBPACK_IMPORTED_MODULE_19__.FieldType.time, values: timestamps, config: {} },
            { name: "value", type: _grafana_data__WEBPACK_IMPORTED_MODULE_19__.FieldType.number, values, config: {} }
          ]
        };
        sparklineField.values.push(sparklineFieldFrame);
      });
      if (fieldIndexToReplace) {
        frame.fields[fieldIndexToReplace] = sparklineField;
      }
    }
  });
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/query-runner/CloudWatchMetricsQueryRunner.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudWatchMetricsQueryRunner: () => (/* binding */ CloudWatchMetricsQueryRunner)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/datetime/rangeutil.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/datetime/formatter.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/types/legacyEvents.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var _components_Errors_ThrottlingErrorMessage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/Errors/ThrottlingErrorMessage.tsx");
/* harmony import */ var _memoizedDebounce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/memoizedDebounce.ts");
/* harmony import */ var _migrations_metricQueryMigrations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/migrations/metricQueryMigrations.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/utils.ts");
/* harmony import */ var _CloudWatchRequest__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/query-runner/CloudWatchRequest.ts");











const getThrottlingErrorMessage = (region, message) => `Please visit the AWS Service Quotas console at https://${region}.console.aws.amazon.com/servicequotas/home?region=${region}#!/services/monitoring/quotas/L-5E141212 to request a quota increase or see our documentation at https://grafana.com/docs/grafana/latest/datasources/cloudwatch/#manage-service-quotas to learn more. ${message}`;
const displayAlert = (datasourceName, region) => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_9__.getAppEvents)().publish({
  type: _grafana_data__WEBPACK_IMPORTED_MODULE_7__.AppEvents.alertError.name,
  payload: [
    `CloudWatch request limit reached in ${region} for data source ${datasourceName}`,
    "",
    void 0,
    (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_Errors_ThrottlingErrorMessage__WEBPACK_IMPORTED_MODULE_10__.ThrottlingErrorMessage, { region }, null)
  ]
});
class CloudWatchMetricsQueryRunner extends _CloudWatchRequest__WEBPACK_IMPORTED_MODULE_14__.CloudWatchRequest {
  constructor(instanceSettings, templateSrv) {
    super(instanceSettings, templateSrv);
    this.debouncedThrottlingAlert = (0,_memoizedDebounce__WEBPACK_IMPORTED_MODULE_11__["default"])(displayAlert);
    this.handleMetricQueries = (metricQueries, options, queryFn) => {
      const timezoneUTCOffset = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.dateTimeFormat)(Date.now(), {
        timeZone: options.timezone,
        format: "Z"
      }).replace(":", "");
      const validMetricsQueries = metricQueries.filter(this.filterMetricQuery).map((q) => {
        const migratedQuery = (0,_migrations_metricQueryMigrations__WEBPACK_IMPORTED_MODULE_12__.migrateMetricQuery)(q);
        const migratedAndIterpolatedQuery = this.replaceMetricQueryVars(migratedQuery, options.scopedVars);
        return {
          timezoneUTCOffset,
          intervalMs: options.intervalMs,
          maxDataPoints: options.maxDataPoints,
          ...migratedAndIterpolatedQuery,
          type: "timeSeriesQuery",
          datasource: this.ref
        };
      });
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(validMetricsQueries)) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({ data: [] });
      }
      const request = {
        ...options,
        requestId: options.requestId + "-metrics",
        // adding -metrics to prevent requestId from matching logs queries sent from the same panel
        targets: validMetricsQueries
      };
      return this.performTimeSeriesQuery(request, queryFn);
    };
  }
  interpolateMetricsQueryVariables(query, scopedVars) {
    return {
      alias: this.replaceVariableAndDisplayWarningIfMulti(query.alias, scopedVars),
      metricName: this.replaceVariableAndDisplayWarningIfMulti(query.metricName, scopedVars),
      namespace: this.replaceVariableAndDisplayWarningIfMulti(query.namespace, scopedVars),
      period: this.replaceVariableAndDisplayWarningIfMulti(query.period, scopedVars),
      expression: this.templateSrv.replace(query.expression, scopedVars),
      sqlExpression: this.replaceVariableAndDisplayWarningIfMulti(query.sqlExpression, scopedVars),
      dimensions: this.convertDimensionFormat(query.dimensions ?? {}, scopedVars)
    };
  }
  performTimeSeriesQuery(request, queryFn) {
    return queryFn(request).pipe(
      (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((res) => {
        const dataframes = res.data || [];
        dataframes.forEach((frame) => {
          frame.fields.forEach((field) => {
            if (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_8__.FieldType.time) {
              field.config.interval = frame.meta?.custom?.period * 1e3;
            }
          });
        });
        if (res.errors?.length) {
          this.alertOnThrottlingErrors(res.errors, request);
        }
        return {
          data: dataframes,
          // DataSourceWithBackend will not throw an error, instead it will return "errors" field along with the response
          errors: this.enrichThrottlingErrorMessages(request, res.errors)
        };
      }),
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)((err) => {
        if (Array.isArray(err)) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({ data: [], errors: err });
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({ data: [], errors: [{ message: err }] });
        }
      })
    );
  }
  enrichThrottlingErrorMessages(request, errors) {
    if (!errors || errors.length === 0) {
      return errors;
    }
    const result = [];
    errors.forEach((error) => {
      if (error.message && (/^Throttling:.*/.test(error.message) || /^Rate exceeded.*/.test(error.message))) {
        const region = this.getActualRegion(request.targets.find((target) => target.refId === error.refId)?.region);
        result.push({ ...error, message: getThrottlingErrorMessage(region, error.message) });
      } else {
        result.push(error);
      }
    });
    return result;
  }
  alertOnThrottlingErrors(errors, request) {
    const hasThrottlingError = errors.some(
      (err) => err.message && (/^Throttling:.*/.test(err.message) || /^Rate exceeded.*/.test(err.message))
    );
    if (hasThrottlingError) {
      const failedRefIds = errors.map((error) => error.refId).filter((refId) => refId);
      if (failedRefIds.length > 0) {
        const regionsAffected = Object.values(request.targets).reduce(
          (res, { refId, region }) => refId && !failedRefIds.includes(refId) || res.includes(region) ? res : [...res, region],
          []
        );
        regionsAffected.forEach((region) => {
          const actualRegion = this.getActualRegion(region);
          if (actualRegion) {
            this.debouncedThrottlingAlert(this.instanceSettings.name, actualRegion);
          }
        });
      }
    }
  }
  filterMetricQuery(query) {
    return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_13__.filterMetricsQuery)(query);
  }
  replaceMetricQueryVars(query, scopedVars) {
    query.region = this.templateSrv.replace(this.getActualRegion(query.region), scopedVars);
    query.namespace = this.replaceVariableAndDisplayWarningIfMulti(query.namespace, scopedVars, true, "namespace");
    query.metricName = this.replaceVariableAndDisplayWarningIfMulti(query.metricName, scopedVars, true, "metric name");
    query.dimensions = this.convertDimensionFormat(query.dimensions ?? {}, scopedVars);
    query.statistic = this.templateSrv.replace(query.statistic, scopedVars);
    query.period = String(this.getPeriod(query, scopedVars));
    query.id = this.templateSrv.replace(query.id, scopedVars);
    query.expression = this.templateSrv.replace(query.expression, scopedVars);
    query.sqlExpression = this.templateSrv.replace(query.sqlExpression, scopedVars, "raw");
    if (query.accountId) {
      query.accountId = this.templateSrv.replace(query.accountId, scopedVars);
    }
    return query;
  }
  getPeriod(target, scopedVars) {
    let period = this.templateSrv.replace(target.period, scopedVars);
    if (period && period.toLowerCase() !== "auto") {
      let p;
      if (/^\d+$/.test(period)) {
        p = parseInt(period, 10);
      } else {
        p = _grafana_data__WEBPACK_IMPORTED_MODULE_5__.intervalToSeconds(period);
      }
      if (p < 1) {
        p = 1;
      }
      return String(p);
    }
    return period;
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/query-runner/CloudWatchRequest.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudWatchRequest: () => (/* binding */ CloudWatchRequest)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/legacyEvents.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var _memoizedDebounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/memoizedDebounce.ts");
/* harmony import */ var _utils_templateVariableUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/templateVariableUtils.ts");





class CloudWatchRequest {
  constructor(instanceSettings, templateSrv) {
    this.instanceSettings = instanceSettings;
    this.dsQueryEndpoint = "/api/ds/query";
    this.debouncedCustomAlert = (0,_memoizedDebounce__WEBPACK_IMPORTED_MODULE_4__["default"])(displayCustomError);
    this.templateSrv = templateSrv;
    this.ref = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getDataSourceRef)(instanceSettings);
  }
  awsRequest(url, data, headers = {}) {
    const options = {
      method: "POST",
      url,
      data,
      headers
    };
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().fetch(options);
  }
  convertDimensionFormat(dimensions, scopedVars, displayErrorIfIsMultiTemplateVariable = true) {
    return Object.entries(dimensions).reduce((result, [key, value]) => {
      key = this.replaceVariableAndDisplayWarningIfMulti(
        key,
        scopedVars,
        displayErrorIfIsMultiTemplateVariable,
        "dimension keys"
      );
      if (Array.isArray(value)) {
        return { ...result, [key]: value };
      }
      if (!value) {
        return { ...result, [key]: null };
      }
      const newValues = this.expandVariableToArray(value, scopedVars);
      return { ...result, [key]: newValues };
    }, {});
  }
  // get the value for a given template variable
  expandVariableToArray(value, scopedVars) {
    const variableName = (0,_utils_templateVariableUtils__WEBPACK_IMPORTED_MODULE_5__.getVariableName)(value);
    const valueVar = this.templateSrv.getVariables().find(({ name }) => {
      return name === variableName;
    });
    if (variableName && valueVar) {
      const isMultiVariable = valueVar?.type === "custom" || valueVar?.type === "query" || valueVar?.type === "datasource";
      if (isMultiVariable && valueVar.multi) {
        return this.templateSrv.replace(value, scopedVars, "pipe").split("|");
      }
      return [this.templateSrv.replace(value, scopedVars)];
    }
    return [value];
  }
  convertMultiFilterFormat(multiFilters, fieldName) {
    return Object.entries(multiFilters).reduce((result, [key, values]) => {
      const interpolatedKey = this.replaceVariableAndDisplayWarningIfMulti(key, {}, true, fieldName);
      if (!values) {
        return { ...result, [interpolatedKey]: null };
      }
      const initialVal = [];
      const newValues = values.reduce((result2, value) => {
        const vals = this.expandVariableToArray(value, {});
        return [...result2, ...vals];
      }, initialVal);
      return { ...result, [interpolatedKey]: newValues };
    }, {});
  }
  isMultiVariable(target) {
    if (target) {
      const variables = this.templateSrv.getVariables();
      const variable = variables.find(({ name }) => name === (0,_utils_templateVariableUtils__WEBPACK_IMPORTED_MODULE_5__.getVariableName)(target));
      const type = variable?.type;
      return (type === "custom" || type === "query" || type === "datasource") && variable?.multi;
    }
    return false;
  }
  isVariableWithMultipleOptionsSelected(target, scopedVars) {
    if (!target || !this.isMultiVariable(target)) {
      return false;
    }
    return this.expandVariableToArray(target, scopedVars || {}).length > 1;
  }
  replaceVariableAndDisplayWarningIfMulti(target, scopedVars, displayErrorIfIsMultiTemplateVariable, fieldName) {
    if (displayErrorIfIsMultiTemplateVariable && this.isVariableWithMultipleOptionsSelected(target)) {
      this.debouncedCustomAlert(
        "CloudWatch templating error",
        `Multi template variables are not supported for ${fieldName || target}`
      );
    }
    return this.templateSrv.replace(target, scopedVars);
  }
  getActualRegion(region) {
    if (region === "default" || region === void 0 || region === "") {
      return this.instanceSettings.jsonData.defaultRegion ?? "";
    }
    return region;
  }
  getVariables() {
    return this.templateSrv.getVariables().map((v) => `$${v.name}`);
  }
}
const displayCustomError = (title, message) => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getAppEvents)().publish({
  type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.AppEvents.alertError.name,
  payload: [title, message]
});


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/resources/ResourcesAPI.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourcesAPI: () => (/* binding */ ResourcesAPI)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _query_runner_CloudWatchRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/query-runner/CloudWatchRequest.ts");




class ResourcesAPI extends _query_runner_CloudWatchRequest__WEBPACK_IMPORTED_MODULE_2__.CloudWatchRequest {
  constructor(instanceSettings, templateSrv) {
    super(instanceSettings, templateSrv);
    this.memoizedGetRequest = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.memoize)(
      this.getRequest.bind(this),
      (path, parameters) => JSON.stringify({ path, parameters })
    );
  }
  getRequest(subtype, parameters) {
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get(`/api/datasources/${this.instanceSettings.id}/resources/${subtype}`, parameters);
  }
  async getExternalId() {
    return await this.memoizedGetRequest("external-id").then(({ externalId }) => externalId);
  }
  getAccounts({ region }) {
    return this.memoizedGetRequest("accounts", {
      region: this.templateSrv.replace(this.getActualRegion(region))
    }).then((accounts) => accounts.map((a) => a.value));
  }
  isMonitoringAccount(region) {
    return this.getAccounts({ region }).then((accounts) => accounts.some((account) => account.isMonitoringAccount)).catch(() => false);
  }
  getRegions() {
    return this.memoizedGetRequest("regions").then((regions) => {
      return [
        { label: "default", value: "default", text: "default" },
        ...regions.map((r) => ({
          label: r.value.name,
          value: r.value.name,
          text: r.value.name
        }))
      ].filter((r) => r.value);
    });
  }
  getNamespaces() {
    return this.memoizedGetRequest("namespaces").then(
      (namespaces) => namespaces.map((n) => ({ label: n.value, value: n.value }))
    );
  }
  getLogGroups(params) {
    return this.memoizedGetRequest("log-groups", {
      ...params,
      region: this.templateSrv.replace(this.getActualRegion(params.region)),
      accountId: this.templateSrv.replace(params.accountId),
      listAllLogGroups: params.listAllLogGroups ? "true" : "false"
    });
  }
  getLogGroupFields(region, logGroupName) {
    return this.memoizedGetRequest("log-group-fields", {
      region: this.templateSrv.replace(this.getActualRegion(region)),
      logGroupName
    });
  }
  getMetrics({ region, namespace, accountId }) {
    if (!namespace) {
      return Promise.resolve([]);
    }
    return this.memoizedGetRequest("metrics", {
      region: this.templateSrv.replace(this.getActualRegion(region)),
      namespace: this.templateSrv.replace(namespace),
      accountId: this.templateSrv.replace(accountId)
    }).then((metrics) => metrics.map((m) => ({ label: m.value.name, value: m.value.name })));
  }
  getAllMetrics({ region, accountId }) {
    return this.memoizedGetRequest("metrics", {
      region: this.templateSrv.replace(this.getActualRegion(region)),
      accountId: this.templateSrv.replace(accountId)
    }).then((metrics) => metrics.map((m) => ({ metricName: m.value.name, namespace: m.value.namespace })));
  }
  getDimensionKeys({ region, namespace = "", dimensionFilters = {}, metricName = "", accountId }, displayErrorIfIsMultiTemplateVariable) {
    return this.memoizedGetRequest("dimension-keys", {
      region: this.templateSrv.replace(this.getActualRegion(region)),
      namespace: this.templateSrv.replace(namespace),
      accountId: this.templateSrv.replace(accountId),
      metricName: this.templateSrv.replace(metricName),
      dimensionFilters: JSON.stringify(
        this.convertDimensionFormat(dimensionFilters, {}, displayErrorIfIsMultiTemplateVariable)
      )
    }).then((r) => r.map((r2) => ({ label: r2.value, value: r2.value })));
  }
  getDimensionValues({
    dimensionKey,
    region,
    namespace,
    dimensionFilters = {},
    metricName = "",
    accountId
  }) {
    if (!namespace || !metricName) {
      return Promise.resolve([]);
    }
    return this.memoizedGetRequest("dimension-values", {
      region: this.templateSrv.replace(this.getActualRegion(region)),
      namespace: this.templateSrv.replace(namespace),
      metricName: this.templateSrv.replace(metricName.trim()),
      dimensionKey: this.replaceVariableAndDisplayWarningIfMulti(dimensionKey, {}, true),
      dimensionFilters: JSON.stringify(this.convertDimensionFormat(dimensionFilters, {})),
      accountId: this.templateSrv.replace(accountId)
    }).then((r) => r.map((r2) => ({ label: r2.value, value: r2.value })));
  }
  getEbsVolumeIds(region, instanceId) {
    return this.memoizedGetRequest("ebs-volume-ids", {
      region: this.templateSrv.replace(this.getActualRegion(region)),
      instanceId: this.templateSrv.replace(instanceId)
    });
  }
  getEc2InstanceAttribute(region, attributeName, filters) {
    return this.memoizedGetRequest("ec2-instance-attribute", {
      region: this.templateSrv.replace(this.getActualRegion(region)),
      attributeName: this.templateSrv.replace(attributeName),
      filters: JSON.stringify(this.convertMultiFilterFormat(filters, "filter key"))
    });
  }
  getResourceARNs(region, resourceType, tags) {
    return this.memoizedGetRequest("resource-arns", {
      region: this.templateSrv.replace(this.getActualRegion(region)),
      resourceType: this.templateSrv.replace(resourceType),
      tags: JSON.stringify(this.convertMultiFilterFormat(tags, "tag name"))
    });
  }
  legacyDescribeLogGroups(region, logGroupNamePrefix) {
    return this.memoizedGetRequest("legacy-log-groups", {
      region: this.templateSrv.replace(this.getActualRegion(region)),
      logGroupNamePrefix: logGroupNamePrefix || ""
    });
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/standardStatistics.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   standardStatistics: () => (/* binding */ standardStatistics)
/* harmony export */ });

const standardStatistics = ["Average", "Maximum", "Minimum", "Sum", "SampleCount", "IQM"];


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/tracking.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onDashboardLoadedHandler: () => (/* binding */ onDashboardLoadedHandler),
/* harmony export */   trackSampleQuerySelection: () => (/* binding */ trackSampleQuerySelection)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/guards.ts");
/* harmony import */ var _migrations_metricQueryMigrations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/migrations/metricQueryMigrations.ts");
/* harmony import */ var _plugin_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/plugin.json");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/types.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/utils/utils.ts");







const onDashboardLoadedHandler = ({
  payload: { dashboardId, orgId, grafanaVersion, queries }
}) => {
  try {
    const cloudWatchQueries = queries[_plugin_json__WEBPACK_IMPORTED_MODULE_4__.id];
    if (!cloudWatchQueries?.length) {
      return;
    }
    let logsInsightsQueries = [];
    let logAnomaliesQueries = [];
    let metricsQueries = [];
    for (const query of cloudWatchQueries) {
      if (query.hide) {
        continue;
      }
      const isLogsInsightsQuery = (0,_guards__WEBPACK_IMPORTED_MODULE_2__.isCloudWatchLogsQuery)(query) && (!query.logsMode || query.logsMode === _types__WEBPACK_IMPORTED_MODULE_5__.LogsMode.Insights);
      if (isLogsInsightsQuery) {
        (query.logGroupNames?.length || query.logGroups?.length) && logsInsightsQueries.push(query);
      } else if ((0,_guards__WEBPACK_IMPORTED_MODULE_2__.isLogsAnomaliesQuery)(query)) {
        logAnomaliesQueries.push(query);
      } else if ((0,_guards__WEBPACK_IMPORTED_MODULE_2__.isCloudWatchMetricsQuery)(query)) {
        const migratedQuery = (0,_migrations_metricQueryMigrations__WEBPACK_IMPORTED_MODULE_3__.migrateMetricQuery)(query);
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.filterMetricsQuery)(migratedQuery) && metricsQueries.push(query);
      }
    }
    const e = {
      grafana_version: grafanaVersion,
      dashboard_id: dashboardId,
      org_id: orgId,
      logs_queries_count: logsInsightsQueries?.length + logAnomaliesQueries.length,
      logs_cwli_queries_count: logsInsightsQueries?.filter(
        (q) => !q.queryLanguage || q.queryLanguage === _types__WEBPACK_IMPORTED_MODULE_5__.LogsQueryLanguage.CWLI
      ).length,
      logs_sql_queries_count: logsInsightsQueries?.filter((q) => q.queryLanguage === _types__WEBPACK_IMPORTED_MODULE_5__.LogsQueryLanguage.SQL).length,
      logs_ppl_queries_count: logsInsightsQueries?.filter((q) => q.queryLanguage === _types__WEBPACK_IMPORTED_MODULE_5__.LogsQueryLanguage.PPL).length,
      log_anomalies_queries_count: logAnomaliesQueries.length,
      metrics_queries_count: metricsQueries?.length,
      metrics_search_count: 0,
      metrics_search_builder_count: 0,
      metrics_search_code_count: 0,
      metrics_search_match_exact_count: 0,
      metrics_query_count: 0,
      metrics_query_builder_count: 0,
      metrics_query_code_count: 0,
      metrics_queries_with_account_count: 0
    };
    for (const q of metricsQueries) {
      e.metrics_search_count += +Boolean(q.metricQueryType === _types__WEBPACK_IMPORTED_MODULE_5__.MetricQueryType.Search);
      e.metrics_search_builder_count += +isMetricSearchBuilder(q);
      e.metrics_search_code_count += +Boolean(
        q.metricQueryType === _types__WEBPACK_IMPORTED_MODULE_5__.MetricQueryType.Search && q.metricEditorMode === _types__WEBPACK_IMPORTED_MODULE_5__.MetricEditorMode.Code
      );
      e.metrics_search_match_exact_count += +Boolean(isMetricSearchBuilder(q) && q.matchExact);
      e.metrics_query_count += +Boolean(q.metricQueryType === _types__WEBPACK_IMPORTED_MODULE_5__.MetricQueryType.Insights);
      e.metrics_query_builder_count += +Boolean(
        q.metricQueryType === _types__WEBPACK_IMPORTED_MODULE_5__.MetricQueryType.Insights && q.metricEditorMode === _types__WEBPACK_IMPORTED_MODULE_5__.MetricEditorMode.Builder
      );
      e.metrics_query_code_count += +Boolean(
        q.metricQueryType === _types__WEBPACK_IMPORTED_MODULE_5__.MetricQueryType.Insights && q.metricEditorMode === _types__WEBPACK_IMPORTED_MODULE_5__.MetricEditorMode.Code
      );
      e.metrics_queries_with_account_count += +Boolean(
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.featureToggles.cloudWatchCrossAccountQuerying && isMetricSearchBuilder(q) && q.accountId
      );
    }
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.reportInteraction)("grafana_ds_cloudwatch_dashboard_loaded", e);
  } catch (error) {
    console.error("error in cloudwatch tracking handler", error);
  }
};
const trackSampleQuerySelection = (props) => {
  const { queryLanguage, queryCategory } = props;
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.reportInteraction)("cloudwatch-logs-cheat-sheet-query-clicked", { queryLanguage, queryCategory });
};
const isMetricSearchBuilder = (q) => Boolean(q.metricQueryType === _types__WEBPACK_IMPORTED_MODULE_5__.MetricQueryType.Search && q.metricEditorMode === _types__WEBPACK_IMPORTED_MODULE_5__.MetricEditorMode.Builder);


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/utils/datalinks.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDataLinksToLogsResponse: () => (/* binding */ addDataLinksToLogsResponse)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/dataSourceSrv.ts");
/* harmony import */ var _aws_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/aws_url.ts");




async function addDataLinksToLogsResponse(response, request, replaceFn, getVariableValueFn, getRegion, tracingDatasourceUid) {
  const replace = (target, fieldName) => replaceFn(target, request.scopedVars, false, fieldName);
  const getVariableValue = (target) => getVariableValueFn(target, request.scopedVars);
  for (const dataFrame of response.data) {
    const curTarget = request.targets.find((target) => target.refId === dataFrame.refId);
    const interpolatedRegion = getRegion(replace(curTarget.region ?? "", "region"));
    for (const field of dataFrame.fields) {
      if (field.name === "@xrayTraceId" && tracingDatasourceUid) {
        getRegion(replace(curTarget.region ?? "", "region"));
        const xrayLink = await createInternalXrayLink(tracingDatasourceUid, interpolatedRegion);
        if (xrayLink) {
          field.config.links = [xrayLink];
        }
      }
    }
    if (dataFrame.fields.length) {
      dataFrame.fields.push({
        name: "",
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
        values: dataFrame.fields[0]?.values?.length ? new Array(dataFrame.fields[0].values.length).fill("View this query in CloudWatch console") : [],
        config: {
          links: [createAwsConsoleLink(curTarget, request.range, interpolatedRegion, replace, getVariableValue)]
        }
      });
    }
  }
}
async function createInternalXrayLink(datasourceUid, region) {
  let ds;
  try {
    ds = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)().get(datasourceUid);
  } catch (e) {
    console.error("Could not load linked xray data source, it was probably deleted after it was linked", e);
    return void 0;
  }
  return {
    title: ds.name,
    url: "",
    internal: {
      query: { query: "${__value.raw}", queryType: "getTrace", region },
      datasourceUid,
      datasourceName: ds.name
    }
  };
}
function createAwsConsoleLink(target, range, region, replace, getVariableValue) {
  const arns = (target.logGroups ?? []).filter((group) => group?.arn).map((group) => (group.arn ?? "").replace(/:\*$/, ""));
  const logGroupNames = target.logGroupNames ?? [];
  const sources = arns?.length ? arns : logGroupNames;
  const interpolatedExpression = target.expression ? replace(target.expression) : "";
  const interpolatedGroups = sources?.flatMap(getVariableValue);
  const urlProps = {
    end: range.to.toISOString(),
    start: range.from.toISOString(),
    timeType: "ABSOLUTE",
    tz: "UTC",
    editorString: interpolatedExpression,
    isLiveTail: false,
    source: interpolatedGroups
  };
  const encodedUrl = (0,_aws_url__WEBPACK_IMPORTED_MODULE_2__.encodeUrl)(urlProps, region);
  return {
    url: encodedUrl,
    title: "View in CloudWatch console",
    targetBlank: true
  };
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/utils/logsRetry.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   runWithRetry: () => (/* binding */ runWithRetry)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js");


function runWithRetry(queryFun, targets, timeoutFunc) {
  const startTime = /* @__PURE__ */ new Date();
  let retries = 0;
  let timerID;
  let subscription;
  let collected = { data: [], errors: [] };
  const retryWaitFunction = (retry) => {
    return Math.pow(2, retry) * 1e3 + Math.random() * 100;
  };
  return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable((observer) => {
    function run(currentQueryParams) {
      subscription = queryFun(currentQueryParams).subscribe({
        next(response) {
          if (response.errors) {
            const { refIdsForRequestsToRetry, errorsNotToRetry } = splitErrorsData(response.errors);
            if (refIdsForRequestsToRetry.length > 0) {
              if (!timeoutFunc(retries, startTime.valueOf())) {
                collected.data = [...collected.data, ...response.data];
                collected.errors = [...collected.errors, ...errorsNotToRetry];
                timerID = setTimeout(
                  () => {
                    retries++;
                    run(currentQueryParams.filter((query) => refIdsForRequestsToRetry.includes(query.refId)));
                  },
                  // We want to know how long to wait for the next retry. First time this will be 0.
                  retryWaitFunction(retries + 1)
                );
                return;
              }
            }
          }
          collected.data = [...collected.data, ...response.data];
          collected.errors = [
            ...collected.errors,
            ...response.errors && response.errors.length > 0 ? response.errors : []
          ];
          observer.next(collected);
          observer.complete();
        },
        // if the server returns a raw string 5xx error, something is very unexpectedly wrong and we just forward it
        error(error) {
          observer.error(error);
        }
      });
    }
    run(targets);
    return () => {
      clearTimeout(timerID);
      subscription.unsubscribe();
    };
  });
}
function splitErrorsData(errors) {
  const refIdsForRequestsToRetry = [];
  const errorsNotToRetry = [];
  errors.map((err) => {
    if (err?.refId && (err.message?.includes("LimitExceededException") || err.message?.includes("ThrottlingException"))) {
      refIdsForRequestsToRetry.push(err.refId);
    } else {
      errorsNotToRetry.push(err);
    }
  });
  return { refIdsForRequestsToRetry, errorsNotToRetry };
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/utils/query/getStatsGroups.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStatsGroups: () => (/* binding */ getStatsGroups)
/* harmony export */ });

const byRE = /\s+by\s+/im;
const groupsRE = /([\w$@().]+)(?:(\s+as\s+)([\w$]+))?\s*,?\s*/iy;
function getStatsGroups(query) {
  let groups = [];
  let b;
  if (b = query.match(byRE)) {
    groupsRE.lastIndex = b.index + b[0].length;
    let g;
    while (g = groupsRE.exec(query)) {
      groups.push(g[2] ? g[3] : g[1]);
      groupsRE.lastIndex = g.index + g[0].length;
    }
  }
  return groups;
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/utils/rxjs/increasingInterval.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   increasingInterval: () => (/* binding */ increasingInterval)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js");


const increasingInterval = ({ startPeriod = 0, endPeriod = 5e3, step = 1e3 }, scheduler = rxjs__WEBPACK_IMPORTED_MODULE_1__.asyncScheduler) => {
  return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable((subscriber) => {
    const state = {
      subscriber,
      counter: 0,
      period: startPeriod,
      step,
      endPeriod
    };
    subscriber.add(scheduler.schedule(dispatch, startPeriod, state));
    return subscriber;
  });
};
function dispatch(state) {
  if (!state) {
    return;
  }
  const { subscriber, counter, period, step, endPeriod } = state;
  subscriber.next(counter);
  const newPeriod = Math.min(period + step, endPeriod);
  this.schedule({ subscriber, counter: counter + 1, period: newPeriod, step, endPeriod }, newPeriod);
}


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/utils/templateVariableUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getVariableName: () => (/* binding */ getVariableName),
/* harmony export */   interpolateStringArrayUsingSingleOrMultiValuedVariable: () => (/* binding */ interpolateStringArrayUsingSingleOrMultiValuedVariable),
/* harmony export */   isTemplateVariable: () => (/* binding */ isTemplateVariable)
/* harmony export */ });

const variableRegex = /\$(\w+)|\[\[(\w+?)(?::(\w+))?\]\]|\${(\w+)(?:\.([^:^\}]+))?(?::([^\}]+))?}/g;
const variableRegexExec = (variableString) => {
  variableRegex.lastIndex = 0;
  return variableRegex.exec(variableString);
};
const getVariableName = (expression) => {
  const match = variableRegexExec(expression);
  if (!match) {
    return null;
  }
  const variableName = match.slice(1).find((match2) => match2 !== void 0);
  return variableName;
};
const interpolateStringArrayUsingSingleOrMultiValuedVariable = (templateSrv, strings, scopedVars, key) => {
  key = key ?? "value";
  const format = key === "value" ? "pipe" : "text";
  let result = [];
  for (const string of strings) {
    const variableName = getVariableName(string);
    const valueVar = templateSrv.getVariables().find(({ name }) => name === variableName);
    if (valueVar && "current" in valueVar && isVariableOption(valueVar.current)) {
      const rawValue = valueVar.current[key];
      if (Array.isArray(rawValue)) {
        const separator = format === "text" ? " + " : "|";
        result.push(...templateSrv.replace(string, scopedVars, format).split(separator));
      } else if (typeof rawValue === "string") {
        result.push(templateSrv.replace(string, scopedVars, format));
      }
    } else {
      result.push(string);
    }
  }
  return result;
};
const isTemplateVariable = (templateSrv, string) => {
  const variableName = getVariableName(string);
  return templateSrv.getVariables().some(({ name }) => name === variableName);
};
const isVariableOption = (current) => {
  return current.hasOwnProperty("value") && current.hasOwnProperty("text");
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/utils/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendTemplateVariables: () => (/* binding */ appendTemplateVariables),
/* harmony export */   filterMetricsQuery: () => (/* binding */ filterMetricsQuery),
/* harmony export */   toOption: () => (/* binding */ toOption)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/types.ts");


const toOption = (value) => ({ label: value, value });
const appendTemplateVariables = (datasource, values) => [
  ...values,
  { label: "Template Variables", options: datasource.getVariables().map(toOption) }
];
const filterMetricsQuery = (query) => {
  const { region, metricQueryType, metricEditorMode, expression, metricName, namespace, sqlExpression, statistic } = query;
  if (!region) {
    return false;
  }
  if (metricQueryType === _types__WEBPACK_IMPORTED_MODULE_0__.MetricQueryType.Search && metricEditorMode === _types__WEBPACK_IMPORTED_MODULE_0__.MetricEditorMode.Builder) {
    return !!namespace && !!metricName && !!statistic;
  } else if (metricQueryType === _types__WEBPACK_IMPORTED_MODULE_0__.MetricQueryType.Search && metricEditorMode === _types__WEBPACK_IMPORTED_MODULE_0__.MetricEditorMode.Code) {
    return !!expression;
  } else if (metricQueryType === _types__WEBPACK_IMPORTED_MODULE_0__.MetricQueryType.Insights) {
    return !!sqlExpression;
  }
  return false;
};


/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/variables.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudWatchVariableSupport: () => (/* binding */ CloudWatchVariableSupport)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/variables.ts");
/* harmony import */ var _components_VariableQueryEditor_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/VariableQueryEditor.tsx");
/* harmony import */ var _components_shared_Account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/components/shared/Account.tsx");
/* harmony import */ var _defaultQueries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/defaultQueries.ts");
/* harmony import */ var _migrations_variableQueryMigrations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/migrations/variableQueryMigrations.ts");
/* harmony import */ var _standardStatistics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/standardStatistics.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloudwatch/types.ts");










class CloudWatchVariableSupport extends _grafana_data__WEBPACK_IMPORTED_MODULE_2__.CustomVariableSupport {
  constructor(resources) {
    super();
    this.resources = resources;
    this.editor = _components_VariableQueryEditor_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_3__.VariableQueryEditor;
    this.allMetricFindValue = { text: "All", value: _components_shared_Account__WEBPACK_IMPORTED_MODULE_4__.ALL_ACCOUNTS_OPTION.value, expandable: true };
  }
  query(request) {
    const queryObj = (0,_migrations_variableQueryMigrations__WEBPACK_IMPORTED_MODULE_6__.migrateVariableQuery)(request.targets[0]);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.execute(queryObj)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => ({ data })));
  }
  async execute(query) {
    try {
      switch (query.queryType) {
        case _types__WEBPACK_IMPORTED_MODULE_8__.VariableQueryType.Regions:
          return this.handleRegionsQuery();
        case _types__WEBPACK_IMPORTED_MODULE_8__.VariableQueryType.Namespaces:
          return this.handleNamespacesQuery();
        case _types__WEBPACK_IMPORTED_MODULE_8__.VariableQueryType.Metrics:
          return this.handleMetricsQuery(query);
        case _types__WEBPACK_IMPORTED_MODULE_8__.VariableQueryType.DimensionKeys:
          return this.handleDimensionKeysQuery(query);
        case _types__WEBPACK_IMPORTED_MODULE_8__.VariableQueryType.DimensionValues:
          return this.handleDimensionValuesQuery(query);
        case _types__WEBPACK_IMPORTED_MODULE_8__.VariableQueryType.EBSVolumeIDs:
          return this.handleEbsVolumeIdsQuery(query);
        case _types__WEBPACK_IMPORTED_MODULE_8__.VariableQueryType.EC2InstanceAttributes:
          return this.handleEc2InstanceAttributeQuery(query);
        case _types__WEBPACK_IMPORTED_MODULE_8__.VariableQueryType.ResourceArns:
          return this.handleResourceARNsQuery(query);
        case _types__WEBPACK_IMPORTED_MODULE_8__.VariableQueryType.Statistics:
          return this.handleStatisticsQuery();
        case _types__WEBPACK_IMPORTED_MODULE_8__.VariableQueryType.LogGroups:
          return this.handleLogGroupsQuery(query);
        case _types__WEBPACK_IMPORTED_MODULE_8__.VariableQueryType.Accounts:
          return this.handleAccountsQuery(query);
      }
    } catch (error) {
      console.error(`Could not run CloudWatchMetricFindQuery ${query}`, error);
      return [];
    }
  }
  async handleLogGroupsQuery({ region, logGroupPrefix, accountId }) {
    const interpolatedPrefix = this.resources.templateSrv.replace(logGroupPrefix);
    return this.resources.getLogGroups({
      accountId,
      region,
      logGroupNamePrefix: interpolatedPrefix,
      listAllLogGroups: true
    }).then(
      (logGroups) => logGroups.map((lg) => {
        return {
          text: lg.value.name,
          value: lg.value.arn,
          expandable: true
        };
      })
    );
  }
  async handleRegionsQuery() {
    return this.resources.getRegions().then((regions) => regions.map(selectableValueToMetricFindOption));
  }
  async handleNamespacesQuery() {
    return this.resources.getNamespaces().then((namespaces) => namespaces.map(selectableValueToMetricFindOption));
  }
  async handleMetricsQuery({ namespace, region, accountId }) {
    return this.resources.getMetrics({ namespace, region, accountId }).then((metrics) => metrics.map(selectableValueToMetricFindOption));
  }
  async handleDimensionKeysQuery({ namespace, region, accountId }) {
    return this.resources.getDimensionKeys({ namespace, region, accountId }).then((keys) => keys.map(selectableValueToMetricFindOption));
  }
  async handleDimensionValuesQuery({
    namespace,
    accountId,
    region,
    dimensionKey,
    metricName,
    dimensionFilters
  }) {
    if (!dimensionKey || !metricName) {
      return [];
    }
    return this.resources.getDimensionValues({
      region,
      accountId,
      namespace,
      metricName,
      dimensionKey,
      dimensionFilters
    }).then((values) => values.map(selectableValueToMetricFindOption));
  }
  async handleEbsVolumeIdsQuery({ region, instanceID }) {
    if (!instanceID) {
      return [];
    }
    return this.resources.getEbsVolumeIds(region, instanceID).then((ids) => ids.map(selectableValueToMetricFindOption));
  }
  async handleEc2InstanceAttributeQuery({ region, attributeName, ec2Filters }) {
    if (!attributeName) {
      return [];
    }
    return this.resources.getEc2InstanceAttribute(region, attributeName, ec2Filters ?? {}).then((values) => values.map(selectableValueToMetricFindOption));
  }
  async handleResourceARNsQuery({ region, resourceType, tags }) {
    if (!resourceType) {
      return [];
    }
    const keys = await this.resources.getResourceARNs(region, resourceType, tags ?? {});
    return keys.map(selectableValueToMetricFindOption);
  }
  async handleStatisticsQuery() {
    return _standardStatistics__WEBPACK_IMPORTED_MODULE_7__.standardStatistics.map((s) => ({
      text: s,
      value: s,
      expandable: true
    }));
  }
  async handleAccountsQuery({ region }) {
    return this.resources.getAccounts({ region }).then((accounts) => {
      const metricFindOptions = accounts.map((account) => ({
        text: account.label,
        value: account.id,
        expandable: true
      }));
      return metricFindOptions.length ? [this.allMetricFindValue, ...metricFindOptions] : [];
    });
  }
  getDefaultQuery() {
    return _defaultQueries__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_VARIABLE_QUERY;
  }
}
function selectableValueToMetricFindOption({ label, value }) {
  return { text: label ?? value ?? "", value, expandable: true };
}


/***/ })

}]);
//# sourceMappingURL=cloudwatchPlugin.a43fde7fa9173abe48a8.js.map