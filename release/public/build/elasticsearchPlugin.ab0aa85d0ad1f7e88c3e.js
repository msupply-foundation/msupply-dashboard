(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["elasticsearchPlugin"],{

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

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/AdvancedSettings/AdvancedHttpSettings.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedHttpSettings: () => (/* binding */ AdvancedHttpSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/TagsInput/TagsInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _ConfigSection_ConfigSubSection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/ConfigSection/ConfigSubSection.js");






const AdvancedHttpSettings = ({
  config,
  onChange,
  className
}) => {
  const onCookiesChange = (cookies) => {
    onChange({
      ...config,
      jsonData: {
        ...config.jsonData,
        keepCookies: cookies
      }
    });
  };
  const onTimeoutChange = (event) => {
    onChange({
      ...config,
      jsonData: {
        ...config.jsonData,
        timeout: parseInt(event.currentTarget.value, 10)
      }
    });
  };
  const styles = {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      maxWidth: 578
    })
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ConfigSection_ConfigSubSection_js__WEBPACK_IMPORTED_MODULE_5__.ConfigSubSection, { title: "Advanced HTTP settings", className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.container, className) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField,
    {
      htmlFor: "advanced-http-cookies",
      label: "Allowed cookies",
      labelWidth: 24,
      tooltip: "Grafana proxy deletes forwarded cookies by default. Specify cookies by name that should be forwarded to the data source.",
      disabled: config.readOnly,
      grow: true
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TagsInput,
      {
        id: "advanced-http-cookies",
        placeholder: "New cookie (hit enter to add)",
        tags: config.jsonData.keepCookies,
        onChange: onCookiesChange
      }
    )
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField,
    {
      htmlFor: "advanced-http-timeout",
      label: "Timeout",
      labelWidth: 24,
      tooltip: "HTTP request timeout in seconds",
      disabled: config.readOnly,
      grow: true
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input,
      {
        id: "advanced-http-timeout",
        type: "number",
        min: 0,
        placeholder: "Timeout in seconds",
        "aria-label": "Timeout in seconds",
        value: config.jsonData.timeout,
        onChange: onTimeoutChange
      }
    )
  ));
};


//# sourceMappingURL=AdvancedHttpSettings.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/Auth.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Auth: () => (/* binding */ Auth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _auth_method_AuthMethodSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/auth-method/AuthMethodSettings.js");
/* harmony import */ var _tls_TLSSettings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/tls/TLSSettings.js");
/* harmony import */ var _custom_headers_CustomHeaders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/custom-headers/CustomHeaders.js");
/* harmony import */ var _ConfigSection_ConfigSection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/ConfigSection/ConfigSection.js");









const Auth = ({
  selectedMethod,
  mostCommonMethod,
  visibleMethods,
  defaultOptionsOverrides,
  customMethods,
  onAuthMethodSelect,
  basicAuth,
  TLS,
  customHeaders,
  readOnly = false
}) => {
  const styles = {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      maxWidth: 578
    })
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: styles.container }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ConfigSection_ConfigSection_js__WEBPACK_IMPORTED_MODULE_5__.ConfigSection, { title: "Authentication" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _auth_method_AuthMethodSettings_js__WEBPACK_IMPORTED_MODULE_2__.AuthMethodSettings,
    {
      selectedMethod,
      mostCommonMethod,
      customMethods,
      visibleMethods,
      defaultOptionsOverrides,
      onAuthMethodSelect,
      basicAuth,
      readOnly
    }
  ), TLS && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tls_TLSSettings_js__WEBPACK_IMPORTED_MODULE_3__.TLSSettings, { ...TLS, readOnly }), customHeaders && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_custom_headers_CustomHeaders_js__WEBPACK_IMPORTED_MODULE_4__.CustomHeaders, { ...customHeaders, readOnly })));
};


//# sourceMappingURL=Auth.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/auth-method/AuthMethodSettings.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthMethodSettings: () => (/* binding */ AuthMethodSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _BasicAuth_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/auth-method/BasicAuth.js");
/* harmony import */ var _ConfigSection_ConfigSubSection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/ConfigSection/ConfigSubSection.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/types.js");








const defaultOptions = {
  [_types_js__WEBPACK_IMPORTED_MODULE_7__.AuthMethod.BasicAuth]: {
    label: "Basic authentication",
    value: _types_js__WEBPACK_IMPORTED_MODULE_7__.AuthMethod.BasicAuth,
    description: "Authenticate with your data source username and password"
  },
  [_types_js__WEBPACK_IMPORTED_MODULE_7__.AuthMethod.CrossSiteCredentials]: {
    label: "Enable cross-site access control requests",
    value: _types_js__WEBPACK_IMPORTED_MODULE_7__.AuthMethod.CrossSiteCredentials,
    description: "Allow cross-site Access-Control requests with your existing credentials and cookies. This enables the server to authenticate the user and perform authorized requests on their behalf on other domains."
  },
  [_types_js__WEBPACK_IMPORTED_MODULE_7__.AuthMethod.OAuthForward]: {
    label: "Forward OAuth Identity",
    value: _types_js__WEBPACK_IMPORTED_MODULE_7__.AuthMethod.OAuthForward,
    description: "Forward the OAuth access token (and if available: the OIDC ID token) of the user querying to the data source"
  },
  [_types_js__WEBPACK_IMPORTED_MODULE_7__.AuthMethod.NoAuth]: {
    label: "No Authentication",
    value: _types_js__WEBPACK_IMPORTED_MODULE_7__.AuthMethod.NoAuth,
    description: "Data source is available without authentication"
  }
};
const AuthMethodSettings = ({
  selectedMethod,
  mostCommonMethod,
  visibleMethods: visibleMethodsFromProps,
  defaultOptionsOverrides,
  customMethods,
  onAuthMethodSelect,
  basicAuth,
  readOnly
}) => {
  var _a, _b, _c, _d;
  const [authMethodChanged, setAuthMethodChanged] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const { colors, spacing } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme2)();
  const visibleMethods = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
    () => {
      var _a2;
      return visibleMethodsFromProps != null ? visibleMethodsFromProps : [
        _types_js__WEBPACK_IMPORTED_MODULE_7__.AuthMethod.BasicAuth,
        _types_js__WEBPACK_IMPORTED_MODULE_7__.AuthMethod.OAuthForward,
        _types_js__WEBPACK_IMPORTED_MODULE_7__.AuthMethod.NoAuth,
        ...(_a2 = customMethods == null ? undefined : customMethods.map((m) => m.id)) != null ? _a2 : []
      ];
    },
    [customMethods, visibleMethodsFromProps]
  );
  const hasSelect = visibleMethods.length > 1;
  const preparedOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _a2;
    const customOptions = (_a2 = customMethods == null ? undefined : customMethods.reduce((acc, method) => {
      acc[method.id] = {
        label: method.label,
        value: method.id,
        description: method.description
      };
      return acc;
    }, {})) != null ? _a2 : {};
    const preparedDefaultOptions = {};
    let k;
    for (k in defaultOptions) {
      preparedDefaultOptions[k] = {
        ...defaultOptions[k],
        ...defaultOptionsOverrides == null ? undefined : defaultOptionsOverrides[k]
      };
    }
    const allOptions = {
      ...customOptions,
      ...preparedDefaultOptions
    };
    return visibleMethods.filter((method) => Boolean(allOptions[method])).map((method) => {
      const option = allOptions[method];
      if (method === mostCommonMethod && hasSelect) {
        return {
          ...option,
          label: `${option.label} (most common)`
        };
      }
      return option;
    });
  }, [visibleMethods, customMethods, defaultOptionsOverrides, mostCommonMethod, hasSelect]);
  let selected = selectedMethod;
  if (!hasSelect) {
    selected = visibleMethods[0];
  } else if (selectedMethod === _types_js__WEBPACK_IMPORTED_MODULE_7__.AuthMethod.NoAuth && mostCommonMethod && !authMethodChanged) {
    selected = mostCommonMethod;
  }
  let AuthFieldsComponent = null;
  if (selected === _types_js__WEBPACK_IMPORTED_MODULE_7__.AuthMethod.BasicAuth && basicAuth) {
    AuthFieldsComponent = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BasicAuth_js__WEBPACK_IMPORTED_MODULE_5__.BasicAuth, { ...basicAuth, readOnly });
  } else if (selected.startsWith("custom-")) {
    AuthFieldsComponent = (_b = (_a = customMethods == null ? undefined : customMethods.find((m) => m.id === selected)) == null ? undefined : _a.component) != null ? _b : null;
  }
  const title = hasSelect ? "Authentication methods" : (_c = preparedOptions[0].label) != null ? _c : "";
  const description = hasSelect ? "Choose an authentication method to access the data source" : (_d = preparedOptions[0].description) != null ? _d : "";
  const styles = {
    authMethods: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginTop: spacing(2.5),
      ...hasSelect && {
        padding: spacing(2),
        border: `1px solid ${colors.border.weak}`
      }
    }),
    selectedMethodFields: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginTop: spacing(1.5)
    })
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ConfigSection_ConfigSubSection_js__WEBPACK_IMPORTED_MODULE_6__.ConfigSubSection, { title, description }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: styles.authMethods }, hasSelect && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, { label: "Authentication method" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select,
    {
      inputId: "auth-method-select",
      options: preparedOptions,
      value: selected,
      onChange: (option) => {
        setAuthMethodChanged(true);
        onAuthMethodSelect(option.value);
      },
      disabled: readOnly
    }
  )), AuthFieldsComponent && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: styles.selectedMethodFields }, AuthFieldsComponent)));
};


//# sourceMappingURL=AuthMethodSettings.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/auth-method/BasicAuth.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BasicAuth: () => (/* binding */ BasicAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/SecretInput/SecretInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/styles.js");





const BasicAuth = ({
  user,
  passwordConfigured,
  userLabel = "User",
  userTooltip = "The username of the data source account",
  userPlaceholder = "User",
  passwordLabel = "Password",
  passwordTooltip = "The password of the data source account",
  passwordPlaceholder = "Password",
  onUserChange,
  onPasswordChange,
  onPasswordReset,
  readOnly
}) => {
  const commonStyles = (0,_styles_js__WEBPACK_IMPORTED_MODULE_5__.useCommonStyles)();
  const styles = {
    lastInlineField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginBottom: 0
    })
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField,
    {
      className: commonStyles.inlineFieldNoMarginRight,
      label: userLabel,
      labelWidth: 24,
      tooltip: userTooltip,
      required: true,
      htmlFor: "basic-auth-user-input",
      interactive: true,
      grow: true,
      disabled: readOnly
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input,
      {
        id: "basic-auth-user-input",
        placeholder: userPlaceholder,
        value: user,
        onChange: (e) => onUserChange(e.currentTarget.value),
        required: true
      }
    )
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField,
    {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(
        commonStyles.inlineFieldNoMarginRight,
        commonStyles.inlineFieldWithSecret,
        styles.lastInlineField
      ),
      label: passwordLabel,
      labelWidth: 24,
      tooltip: passwordTooltip,
      required: true,
      htmlFor: "basic-auth-password-input",
      interactive: true,
      grow: true,
      disabled: readOnly
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SecretInput,
      {
        id: "basic-auth-password-input",
        isConfigured: passwordConfigured,
        onReset: readOnly ? () => {
        } : onPasswordReset,
        placeholder: passwordPlaceholder,
        onChange: (e) => onPasswordChange(e.currentTarget.value),
        required: true
      }
    )
  ));
};


//# sourceMappingURL=BasicAuth.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/custom-headers/CustomHeader.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomHeader: () => (/* binding */ CustomHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/SecretInput/SecretInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/styles.js");





const CustomHeader = ({ header, onChange, onBlur, onDelete, readOnly }) => {
  const { spacing } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useTheme2)();
  const commonStyles = (0,_styles_js__WEBPACK_IMPORTED_MODULE_8__.useCommonStyles)();
  const styles = {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      alignItems: "center"
    }),
    input: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      minWidth: "100%"
    }),
    headerNameField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "40%",
      marginRight: 0,
      paddingRight: spacing(1)
    }),
    headerValueField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "45%",
      marginRight: 0
    }),
    removeHeaderBtn: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      margin: `0 0 3px 10px`
    })
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineFieldRow, { className: styles.container }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField,
    {
      label: "Header",
      labelWidth: 9,
      grow: true,
      className: styles.headerNameField,
      htmlFor: `custom-header-${header.id}-name-input`,
      disabled: readOnly
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input,
      {
        id: `custom-header-${header.id}-name-input`,
        placeholder: "X-Custom-Header",
        value: header.name,
        width: 12,
        onChange: (e) => onChange({ ...header, name: e.currentTarget.value }),
        onBlur,
        className: styles.input
      }
    )
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField,
    {
      label: "Value",
      labelWidth: 9,
      grow: true,
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(commonStyles.inlineFieldWithSecret, styles.headerValueField),
      htmlFor: `custom-header-${header.id}-value-input`,
      disabled: readOnly
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SecretInput,
      {
        id: `custom-header-${header.id}-value-input`,
        isConfigured: header.configured,
        placeholder: "Header value",
        value: header.value,
        width: 12,
        onChange: (e) => onChange({ ...header, value: e.currentTarget.value }),
        onReset: readOnly ? () => {
        } : () => onChange({ ...header, configured: false, value: "" }),
        onBlur,
        className: styles.input
      }
    )
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton,
    {
      name: "trash-alt",
      tooltip: "Remove header",
      tooltipPlacement: "top",
      className: styles.removeHeaderBtn,
      onClick: onDelete,
      type: "button",
      disabled: readOnly
    }
  )));
};


//# sourceMappingURL=CustomHeader.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/custom-headers/CustomHeaders.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomHeaders: () => (/* binding */ CustomHeaders)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _CustomHeader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/custom-headers/CustomHeader.js");
/* harmony import */ var _ConfigSection_ConfigSubSection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/ConfigSection/ConfigSubSection.js");







const CustomHeaders = ({ headers: headersFromProps, onChange, readOnly }) => {
  const { spacing } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)();
  const [headers, setHeaders] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(
    headersFromProps.map((header) => ({
      ...header,
      id: uniqueId(),
      value: ""
    }))
  );
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setHeaders((headers2) => {
      let changed = false;
      const newHeaders = headers2.map((header) => {
        var _a;
        const configured = (_a = headersFromProps.find((h) => h.name === header.name)) == null ? undefined : _a.configured;
        if (typeof configured !== "undefined" && header.configured !== configured) {
          changed = true;
          return { ...header, configured };
        }
        return header;
      });
      if (changed) {
        return newHeaders;
      }
      return headers2;
    });
  }, [headersFromProps]);
  const onHeaderAdd = () => {
    setHeaders([...headers, { id: uniqueId(), name: "", value: "", configured: false }]);
  };
  const onHeaderChange = (id, header) => {
    setHeaders(headers.map((h) => h.id === id ? { ...header } : h));
  };
  const onHeaderDelete = (id) => {
    const index = headers.findIndex((h) => h.id === id);
    if (index === -1) {
      return;
    }
    const newHeaders = [...headers];
    newHeaders.splice(index, 1);
    setHeaders(newHeaders);
    onChange(
      newHeaders.map(({ name, value, configured }) => ({
        name,
        value,
        configured
      }))
    );
  };
  const onBlur = () => {
    onChange(
      headers.map(({ name, value, configured }) => ({
        name,
        value,
        configured
      }))
    );
  };
  const styles = {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginTop: spacing(3)
    }),
    addHeaderButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginTop: spacing(1.5)
    })
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: styles.container }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _ConfigSection_ConfigSubSection_js__WEBPACK_IMPORTED_MODULE_5__.ConfigSubSection,
    {
      title: "HTTP headers",
      description: "Pass along additional context and metadata about the request/response",
      isCollapsible: true,
      isInitiallyOpen: headers.length > 0
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, headers.map((header) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _CustomHeader_js__WEBPACK_IMPORTED_MODULE_4__.CustomHeader,
      {
        key: header.id,
        header,
        onChange: (header2) => onHeaderChange(header2.id, header2),
        onDelete: () => onHeaderDelete(header.id),
        onBlur,
        readOnly
      }
    ))),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: styles.addHeaderButton }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { icon: "plus", variant: "secondary", fill: "outline", onClick: onHeaderAdd, disabled: readOnly }, headers.length === 0 ? "Add header" : "Add another header"))
  ));
};
function uniqueId() {
  return Math.random().toString(16).slice(2);
}


//# sourceMappingURL=CustomHeaders.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/styles.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCommonStyles: () => (/* binding */ useCommonStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");


const useCommonStyles = () => {
  return {
    inlineFieldNoMarginRight: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      marginRight: 0
    }),
    // This is dirty hack to make configured secret input grow
    inlineFieldWithSecret: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      '[class$="layoutChildrenWrapper"]:first-child': {
        flexGrow: 1
      }
    })
  };
};


//# sourceMappingURL=styles.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/tls/SelfSignedCertificate.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelfSignedCertificate: () => (/* binding */ SelfSignedCertificate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/SecretTextArea/SecretTextArea.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _TLSSettingsSection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/tls/TLSSettingsSection.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/styles.js");






const SelfSignedCertificate = ({
  enabled,
  certificateConfigured,
  onToggle,
  onCertificateChange,
  onCertificateReset,
  tooltips,
  readOnly
}) => {
  var _a;
  const commonStyles = (0,_styles_js__WEBPACK_IMPORTED_MODULE_5__.useCommonStyles)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _TLSSettingsSection_js__WEBPACK_IMPORTED_MODULE_4__.TLSSettingsSection,
    {
      enabled,
      label: "Add self-signed certificate",
      tooltipText: "Add your own Certificate Authority (CA) certificate on top of one generated by the certificate authorities for additional security measures",
      onToggle: (newEnabled) => onToggle(newEnabled),
      readOnly
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField,
      {
        label: "CA Certificate",
        labelWidth: 24,
        tooltip: (_a = tooltips == null ? undefined : tooltips.certificateLabel) != null ? _a : "Your self-signed certificate",
        required: true,
        htmlFor: "self-signed-certificate-input",
        interactive: true,
        grow: true,
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(commonStyles.inlineFieldNoMarginRight, commonStyles.inlineFieldWithSecret),
        disabled: readOnly
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SecretTextArea,
        {
          id: "self-signed-certificate-input",
          isConfigured: certificateConfigured,
          onChange: (e) => onCertificateChange(e.currentTarget.value),
          onReset: readOnly ? () => {
          } : onCertificateReset,
          placeholder: "Begins with --- BEGIN CERTIFICATE ---",
          rows: 6,
          required: true
        }
      )
    )
  );
};


//# sourceMappingURL=SelfSignedCertificate.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/tls/SkipTLSVerification.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkipTLSVerification: () => (/* binding */ SkipTLSVerification)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _TLSSettingsSection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/tls/TLSSettingsSection.js");



const SkipTLSVerification = ({ enabled, onToggle, readOnly }) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _TLSSettingsSection_js__WEBPACK_IMPORTED_MODULE_1__.TLSSettingsSection,
    {
      enabled,
      label: "Skip TLS certificate validation",
      tooltipText: "Skipping TLS certificate validation is not recommended unless absolutely necessary or for testing",
      onToggle: (newEnabled) => onToggle(newEnabled),
      readOnly
    }
  );
};


//# sourceMappingURL=SkipTLSVerification.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/tls/TLSClientAuth.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TLSClientAuth: () => (/* binding */ TLSClientAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/SecretTextArea/SecretTextArea.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _TLSSettingsSection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/tls/TLSSettingsSection.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/styles.js");






const TLSClientAuth = ({
  enabled,
  serverName,
  clientCertificateConfigured,
  clientKeyConfigured,
  onToggle,
  onServerNameChange,
  onClientCertificateChange,
  onClientKeyChange,
  onClientCertificateReset,
  onClientKeyReset,
  tooltips,
  readOnly
}) => {
  var _a, _b, _c;
  const commonStyles = (0,_styles_js__WEBPACK_IMPORTED_MODULE_6__.useCommonStyles)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _TLSSettingsSection_js__WEBPACK_IMPORTED_MODULE_5__.TLSSettingsSection,
    {
      enabled,
      label: "TLS Client Authentication",
      tooltipText: "Validate using TLS client authentication, in which the server authenticates the client",
      onToggle: (newEnabled) => onToggle(newEnabled),
      readOnly
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField,
      {
        label: "ServerName",
        labelWidth: 24,
        tooltip: (_a = tooltips == null ? undefined : tooltips.serverNameLabel) != null ? _a : "A Servername is used to verify the hostname on the returned certificate",
        required: true,
        htmlFor: "client-auth-servername-input",
        interactive: true,
        grow: true,
        className: commonStyles.inlineFieldNoMarginRight,
        disabled: readOnly
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input,
        {
          id: "client-auth-servername-input",
          placeholder: "domain.example.com",
          value: serverName,
          onChange: (e) => onServerNameChange(e.currentTarget.value),
          required: true
        }
      )
    ),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField,
      {
        label: "Client Certificate",
        labelWidth: 24,
        tooltip: (_b = tooltips == null ? undefined : tooltips.certificateLabel) != null ? _b : "The client certificate can be generated from a Certificate Authority or be self-signed",
        required: true,
        htmlFor: "client-auth-client-certificate-input",
        interactive: true,
        grow: true,
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(commonStyles.inlineFieldNoMarginRight, commonStyles.inlineFieldWithSecret),
        disabled: readOnly
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SecretTextArea,
        {
          id: "client-auth-client-certificate-input",
          isConfigured: clientCertificateConfigured,
          onChange: (e) => onClientCertificateChange(e.currentTarget.value),
          onReset: readOnly ? () => {
          } : onClientCertificateReset,
          placeholder: "Begins with --- BEGIN CERTIFICATE ---",
          rows: 6,
          required: true
        }
      )
    ),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField,
      {
        label: "Client Key",
        labelWidth: 24,
        tooltip: (_c = tooltips == null ? undefined : tooltips.keyLabel) != null ? _c : "The client key can be generated from a Certificate Authority or be self-signed",
        required: true,
        htmlFor: "client-auth-client-key-input",
        interactive: true,
        grow: true,
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(commonStyles.inlineFieldNoMarginRight, commonStyles.inlineFieldWithSecret),
        disabled: readOnly
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SecretTextArea,
        {
          id: "client-auth-client-key-input",
          isConfigured: clientKeyConfigured,
          onChange: (e) => onClientKeyChange(e.currentTarget.value),
          onReset: readOnly ? () => {
          } : onClientKeyReset,
          placeholder: `Begins with --- RSA PRIVATE KEY CERTIFICATE ---`,
          rows: 6,
          required: true
        }
      )
    )
  );
};


//# sourceMappingURL=TLSClientAuth.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/tls/TLSSettings.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TLSSettings: () => (/* binding */ TLSSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _SelfSignedCertificate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/tls/SelfSignedCertificate.js");
/* harmony import */ var _TLSClientAuth_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/tls/TLSClientAuth.js");
/* harmony import */ var _SkipTLSVerification_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/tls/SkipTLSVerification.js");
/* harmony import */ var _ConfigSection_ConfigSubSection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/ConfigSection/ConfigSubSection.js");









const TLSSettings = ({ selfSignedCertificate, TLSClientAuth: TLSClientAuth$1, skipTLSVerification, readOnly }) => {
  const { spacing } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  const styles = {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginTop: spacing(3)
    })
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _ConfigSection_ConfigSubSection_js__WEBPACK_IMPORTED_MODULE_6__.ConfigSubSection,
    {
      className: styles.container,
      title: "TLS settings",
      description: "Additional security measures that can be applied on top of authentication"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SelfSignedCertificate_js__WEBPACK_IMPORTED_MODULE_3__.SelfSignedCertificate, { ...selfSignedCertificate, readOnly }),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TLSClientAuth_js__WEBPACK_IMPORTED_MODULE_4__.TLSClientAuth, { ...TLSClientAuth$1, readOnly }),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SkipTLSVerification_js__WEBPACK_IMPORTED_MODULE_5__.SkipTLSVerification, { ...skipTLSVerification, readOnly })
  );
};


//# sourceMappingURL=TLSSettings.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/tls/TLSSettingsSection.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TLSSettingsSection: () => (/* binding */ TLSSettingsSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Checkbox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");




const TLSSettingsSection = ({
  children,
  enabled,
  label,
  tooltipText,
  onToggle,
  readOnly
}) => {
  const { colors, spacing } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useTheme2)();
  const styles = {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginTop: 3
    }),
    checkboxContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      alignItems: "center"
    }),
    infoIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginTop: -2,
      marginLeft: 5,
      color: colors.text.secondary
    }),
    content: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      margin: spacing(1, 0, 2, 3)
    })
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: styles.container }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: styles.checkboxContainer }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Checkbox, { value: enabled, label, onChange: () => onToggle(!enabled), disabled: readOnly }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, { placement: "top", content: tooltipText, interactive: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { name: "info-circle", className: styles.infoIcon, size: "sm" }))), enabled && children && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: styles.content }, children));
};


//# sourceMappingURL=TLSSettingsSection.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/types.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthMethod: () => (/* binding */ AuthMethod)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");


var AuthMethod = /* @__PURE__ */ ((AuthMethod2) => {
  AuthMethod2["NoAuth"] = "NoAuth";
  AuthMethod2["BasicAuth"] = "BasicAuth";
  AuthMethod2["OAuthForward"] = "OAuthForward";
  AuthMethod2["CrossSiteCredentials"] = "CrossSiteCredentials";
  return AuthMethod2;
})(AuthMethod || {});


//# sourceMappingURL=types.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/utils.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertLegacyAuthProps: () => (/* binding */ convertLegacyAuthProps),
/* harmony export */   getBasicAuthProps: () => (/* binding */ getBasicAuthProps),
/* harmony export */   getCustomHeaders: () => (/* binding */ getCustomHeaders),
/* harmony export */   getOnAuthMethodSelectHandler: () => (/* binding */ getOnAuthMethodSelectHandler),
/* harmony export */   getSelectedMethod: () => (/* binding */ getSelectedMethod),
/* harmony export */   getTLSProps: () => (/* binding */ getTLSProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/types.js");







const headerNamePrefix = "httpHeaderName";
const headerValuePrefix = "httpHeaderValue";
function convertLegacyAuthProps({
  config,
  onChange
}) {
  const props = {
    selectedMethod: getSelectedMethod(config),
    onAuthMethodSelect: getOnAuthMethodSelectHandler(config, onChange),
    basicAuth: getBasicAuthProps(config, onChange),
    TLS: getTLSProps(config, onChange),
    customHeaders: getCustomHeaders(config, onChange),
    readOnly: config.readOnly
  };
  return props;
}
function getSelectedMethod(config) {
  if (config.basicAuth) {
    return _types_js__WEBPACK_IMPORTED_MODULE_2__.AuthMethod.BasicAuth;
  }
  if (config.withCredentials) {
    return _types_js__WEBPACK_IMPORTED_MODULE_2__.AuthMethod.CrossSiteCredentials;
  }
  if (config.jsonData.oauthPassThru) {
    return _types_js__WEBPACK_IMPORTED_MODULE_2__.AuthMethod.OAuthForward;
  }
  return _types_js__WEBPACK_IMPORTED_MODULE_2__.AuthMethod.NoAuth;
}
function getOnAuthMethodSelectHandler(config, onChange) {
  return (method) => {
    onChange({
      ...config,
      basicAuth: method === _types_js__WEBPACK_IMPORTED_MODULE_2__.AuthMethod.BasicAuth,
      withCredentials: method === _types_js__WEBPACK_IMPORTED_MODULE_2__.AuthMethod.CrossSiteCredentials,
      jsonData: {
        ...config.jsonData,
        oauthPassThru: method === _types_js__WEBPACK_IMPORTED_MODULE_2__.AuthMethod.OAuthForward
      }
    });
  };
}
function getBasicAuthProps(config, onChange) {
  return {
    user: config.basicAuthUser,
    passwordConfigured: config.secureJsonFields.basicAuthPassword,
    onUserChange: (user) => onChange({ ...config, basicAuthUser: user }),
    onPasswordChange: (password) => onChange({
      ...config,
      secureJsonData: {
        ...config.secureJsonData,
        basicAuthPassword: password
      }
    }),
    onPasswordReset: () => onChange({
      ...config,
      secureJsonData: { ...config.secureJsonData, basicAuthPassword: "" },
      secureJsonFields: {
        ...config.secureJsonFields,
        basicAuthPassword: false
      }
    })
  };
}
function getTLSProps(config, onChange) {
  var _a, _b, _c;
  return {
    selfSignedCertificate: {
      enabled: Boolean(config.jsonData.tlsAuthWithCACert),
      certificateConfigured: !!((_a = config.secureJsonFields) == null ? undefined : _a.tlsCACert),
      onToggle: (enabled) => enabled ? onChange({
        ...config,
        jsonData: { ...config.jsonData, tlsAuthWithCACert: enabled }
      }) : onChange({
        ...config,
        jsonData: { ...config.jsonData, tlsAuthWithCACert: enabled },
        secureJsonData: { ...config.secureJsonData, tlsCACert: "" },
        secureJsonFields: { ...config.secureJsonFields, tlsCACert: false }
      }),
      onCertificateChange: (certificate) => onChange({
        ...config,
        secureJsonData: { ...config.secureJsonData, tlsCACert: certificate }
      }),
      onCertificateReset: () => onChange({
        ...config,
        secureJsonData: { ...config.secureJsonData, tlsCACert: "" },
        secureJsonFields: { ...config.secureJsonFields, tlsCACert: false }
      })
    },
    TLSClientAuth: {
      enabled: config.jsonData.tlsAuth,
      serverName: config.jsonData.serverName,
      clientCertificateConfigured: !!((_b = config.secureJsonFields) == null ? undefined : _b.tlsClientCert),
      clientKeyConfigured: !!((_c = config.secureJsonFields) == null ? undefined : _c.tlsClientKey),
      onToggle: (enabled) => enabled ? onChange({
        ...config,
        jsonData: { ...config.jsonData, tlsAuth: enabled }
      }) : onChange({
        ...config,
        jsonData: { ...config.jsonData, tlsAuth: enabled, serverName: "" },
        secureJsonData: { ...config.secureJsonData, tlsClientCert: "", tlsClientKey: "" },
        secureJsonFields: { ...config.secureJsonFields, tlsClientCert: false, tlsClientKey: false }
      }),
      onServerNameChange: (serverName) => onChange({
        ...config,
        jsonData: { ...config.jsonData, serverName }
      }),
      onClientCertificateChange: (clientCertificate) => onChange({
        ...config,
        secureJsonData: {
          ...config.secureJsonData,
          tlsClientCert: clientCertificate
        }
      }),
      onClientCertificateReset: () => onChange({
        ...config,
        secureJsonData: {
          ...config.secureJsonData,
          tlsClientCert: ""
        },
        secureJsonFields: {
          ...config.secureJsonFields,
          tlsClientCert: false
        }
      }),
      onClientKeyChange: (clientKey) => onChange({
        ...config,
        secureJsonData: {
          ...config.secureJsonData,
          tlsClientKey: clientKey
        }
      }),
      onClientKeyReset: () => onChange({
        ...config,
        secureJsonData: {
          ...config.secureJsonData,
          tlsClientKey: ""
        },
        secureJsonFields: {
          ...config.secureJsonFields,
          tlsClientKey: false
        }
      })
    },
    skipTLSVerification: {
      enabled: config.jsonData.tlsSkipVerify,
      onToggle: (enabled) => onChange({
        ...config,
        jsonData: { ...config.jsonData, tlsSkipVerify: enabled }
      })
    }
  };
}
function getCustomHeaders(config, onChange) {
  const headers = Object.keys(config.jsonData).filter((key) => key.startsWith(headerNamePrefix)).sort().map((key) => {
    var _a;
    const index = key.slice(headerNamePrefix.length);
    return {
      name: config.jsonData[key],
      configured: (_a = config.secureJsonFields[`${headerValuePrefix}${index}`]) != null ? _a : false
    };
  });
  return {
    headers,
    onChange: (headers2) => {
      const newJsonData = Object.fromEntries(
        Object.entries(config.jsonData).filter(([key]) => !key.startsWith(headerNamePrefix))
      );
      const newSecureJsonData = Object.fromEntries(
        Object.entries(config.secureJsonData || {}).filter(([key]) => !key.startsWith(headerValuePrefix))
      );
      const newSecureJsonFields = Object.fromEntries(
        Object.entries(config.secureJsonFields).filter(([key]) => !key.startsWith(headerValuePrefix))
      );
      headers2.forEach((header, index) => {
        newJsonData[`${headerNamePrefix}${index + 1}`] = header.name;
        if (header.configured) {
          newSecureJsonFields[`${headerValuePrefix}${index + 1}`] = true;
        } else {
          newSecureJsonData[`${headerValuePrefix}${index + 1}`] = header.value;
        }
      });
      onChange({
        ...config,
        jsonData: newJsonData,
        secureJsonData: newSecureJsonData,
        secureJsonFields: newSecureJsonFields
      });
    }
  };
}


//# sourceMappingURL=utils.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/ConfigSection/ConfigDescriptionLink.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigDescriptionLink: () => (/* binding */ ConfigDescriptionLink)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





function ConfigDescriptionLink(props) {
  const { description, suffix, feature } = props;
  const text = `Learn more about ${feature}`;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: styles.container }, description, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
    "a",
    {
      "aria-label": text,
      href: `https://grafana.com/docs/grafana/next/datasources/${suffix}`,
      rel: "noreferrer",
      target: "_blank"
    },
    text
  ));
}
const getStyles = (theme) => {
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      color: theme.colors.text.secondary,
      a: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
        color: theme.colors.text.link,
        textDecoration: "underline",
        marginLeft: "5px",
        "&:hover": {
          textDecoration: "none"
        }
      })
    })
  };
};


//# sourceMappingURL=ConfigDescriptionLink.js.map


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

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Connection/ConnectionSettings.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionSettings: () => (/* binding */ ConnectionSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _ConfigSection_ConfigSection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/ConfigSection/ConfigSection.js");






const ConnectionSettings = ({
  config,
  onChange,
  description,
  urlPlaceholder,
  urlTooltip,
  urlLabel,
  className
}) => {
  const isValidUrl = config.url !== undefined && /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/.test(config.url);
  const styles = {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      maxWidth: 578
    })
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ConfigSection_ConfigSection_js__WEBPACK_IMPORTED_MODULE_4__.ConfigSection, { title: "Connection", description, className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.container, className) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField,
    {
      htmlFor: "connection-url",
      label: urlLabel || "URL",
      labelWidth: 24,
      tooltip: urlTooltip || /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "Specify a complete HTTP URL", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "(for example https://example.com:8080)"),
      grow: true,
      disabled: config.readOnly,
      required: true,
      invalid: !isValidUrl && !config.readOnly,
      error: isValidUrl ? "" : "Please enter a valid URL",
      interactive: true
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input,
      {
        id: "connection-url",
        "aria-label": "Data source connection URL",
        onChange: (event) => onChange({
          ...config,
          url: event.currentTarget.value
        }),
        value: config.url || "",
        placeholder: urlPlaceholder || "URL"
      }
    )
  )));
};


//# sourceMappingURL=ConnectionSettings.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/DataSourceDescription.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataSourceDescription: () => (/* binding */ DataSourceDescription)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");




const DataSourceDescription = ({ dataSourceName, docsLink, hasRequiredFields = true, className }) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  const styles = {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      p: {
        margin: 0
      },
      "p + p": {
        marginTop: theme.spacing(2)
      }
    }),
    text: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      ...theme.typography.body,
      color: theme.colors.text.secondary,
      a: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        color: theme.colors.text.link,
        textDecoration: "underline",
        "&:hover": {
          textDecoration: "none"
        }
      })
    })
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.container, className) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: styles.text }, "Before you can use the ", dataSourceName, " data source, you must configure it below or in the config file. For detailed instructions,", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: docsLink, target: "_blank", rel: "noreferrer" }, "view the documentation"), "."), hasRequiredFields && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: styles.text }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null, "Fields marked with * are required")));
};


//# sourceMappingURL=DataSourceDescription.js.map


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

/***/ "./node_modules/lucene/lib/escaping.js":
/***/ ((__unused_webpack_module, exports) => {

exports.escape = function escape(s) {
  return s.replace(/[\+\-\!\(\)\{\}\[\]\^\"\?\:\\\&\|\'\/\s\*\~]/g, prefixCharWithBackslashes);
};

function prefixCharWithBackslashes(char) {
  return '\\' + char;
}

exports.unescape = function unescape(s) {
  return s.replace(/\\([\+\-\!\(\)\{\}\[\]\^\"\?\:\\\&\|\'\/\s\*\~])/g, extractChar);
};

function extractChar(match, char) {
  return char;
}

exports.escapePhrase = function escapePhrase(s) {
  return s.replace(/"/g, prefixCharWithBackslashes);
};

exports.unescapePhrase = function unescapePhrase(s) {
  return s.replace(/\\(")/g, extractChar);
};


/***/ }),

/***/ "./node_modules/lucene/lib/lucene.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var queryParser = __webpack_require__("./node_modules/lucene/lib/queryParser.js");
var escaping = __webpack_require__("./node_modules/lucene/lib/escaping.js");

exports.parse = queryParser.parse.bind(queryParser);
exports.toString = __webpack_require__("./node_modules/lucene/lib/toString.js");

exports.term = {
  escape: escaping.escape,
  unescape: escaping.unescape
};

exports.phrase = {
  escape: escaping.escapePhrase,
  unescape: escaping.unescapePhrase
};


/***/ }),

/***/ "./node_modules/lucene/lib/queryParser.js":
/***/ ((module) => {

"use strict";
/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */



function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleFunctions = { start: peg$parsestart },
      peg$startRuleFunction  = peg$parsestart,

      peg$c0 = function(node) {
              return node[0];
          },
      peg$c1 = function() {
              return {};
          },
      peg$c2 = function(operator) {
              return {
                  'operator': operator,
              };
          },
      peg$c3 = function(start, left, operator, right) {
              var node = {
                  'start': start,
                  'left': left,
              };

              var right =
                      right.length == 0
                      ? null
                      : right[0]['right'] == null
                          ? right[0]['left']
                          : right[0];

              if (right != null) {
                  node['operator'] = operator == '' ? '<implicit>' : operator[0];
                  node['right'] = right;
              }

              return node;
          },
      peg$c4 = function(operator, right) {
              return right;
          },
      peg$c5 = function(left, operator, right) {
              var node = {
                  'left':left
              };

              var right =
                      right.length == 0
                      ? null
                      : right[0]['right'] == null
                          ? right[0]['left']
                          : right[0];

              if (right != null) {
                  node['operator'] = operator == '' ? '<implicit>' : operator[0];
                  node['right'] = right;
              }

              return node;
          },
      peg$c6 = function(field_exp) {
              return field_exp;
          },
      peg$c7 = "(",
      peg$c8 = peg$literalExpectation("(", false),
      peg$c9 = ")",
      peg$c10 = peg$literalExpectation(")", false),
      peg$c11 = function(node) {
              node[0]['parenthesized'] = true;
              return node[0];
          },
      peg$c12 = function(fieldname, range) {
              range['field'] =
                  fieldname == null || fieldname.label == ''
                      ? "<implicit>"
                      : fieldname.label;
              range['fieldLocation'] =
              fieldname == null || fieldname.label == ''
                  ? null
                  : fieldname.location;

              return range;
          },
      peg$c13 = function(fieldname, node) {
              node['field']= fieldname.label;
              node['fieldLocation'] = fieldname.location;
              return node;
          },
      peg$c14 = function(fieldname, term) {
              var fieldexp = {
                  'field':
                      fieldname == null || fieldname.label == ''
                          ? "<implicit>"
                          : fieldname.label,
                  'fieldLocation':
                      fieldname == null || fieldname.label == ''
                          ? null
                          : fieldname.location,


                  };

              for(var key in term)
                  fieldexp[key] = term[key];

              return fieldexp;
          },
      peg$c15 = /^[:]/,
      peg$c16 = peg$classExpectation([":"], false, false),
      peg$c17 = function(fieldname) {
              return {
                label: fieldname.label,
                location: fieldname.location
              }

          },
      peg$c18 = function(op, term, proximity, boost) {
              var result = {
                'term': term,
                'quoted': true,
                'regex' : false,
                'termLocation': location()
              };

              if('' != proximity)
              {
                  result['proximity'] = proximity;
              }
              if('' != boost)
              {
                  result['boost'] = boost;
              }
              if('' != op)
              {
                  result['prefix'] = op;
              }

              return result;
          },
      peg$c19 = function(op, term) {
              var result = {
                'term': term,
                'quoted': false,
                'regex': true,
                'termLocation': location()
              };

              return result;
          },
      peg$c20 = function(op, term, similarity, boost) {
              var result = {
                'term': term.label,
                'quoted': false,
                'regex': false,
                'termLocation': location()
              };
              if('' != similarity)
              {
                  result['similarity'] = similarity;
              }
              if('' != boost)
              {
                  result['boost'] = boost;
              }
              if('' != op)
              {
                  result['prefix'] = op;
              }
              return result;
          },
      peg$c21 = "\\",
      peg$c22 = peg$literalExpectation("\\", false),
      peg$c23 = function(sequence) { return '\\' + sequence; },
      peg$c24 = ".",
      peg$c25 = peg$literalExpectation(".", false),
      peg$c26 = /^[^ \t\r\n\f{}()"\/\^~[\]]/,
      peg$c27 = peg$classExpectation([" ", "\t", "\r", "\n", "\f", "{", "}", "(", ")", "\"", "/", "^", "~", "[", "]"], true, false),
      peg$c28 = function(term) {
              return term.join('');
          },
      peg$c29 = function(term) {
              return {
                label: term.join(''),
                location: location(),
              };
          },
      peg$c30 = /^[^: \t\r\n\f{}()"\/\^~[\]]/,
      peg$c31 = peg$classExpectation([":", " ", "\t", "\r", "\n", "\f", "{", "}", "(", ")", "\"", "/", "^", "~", "[", "]"], true, false),
      peg$c32 = "\"",
      peg$c33 = peg$literalExpectation("\"", false),
      peg$c34 = function(chars) { return chars.join(''); },
      peg$c35 = "/",
      peg$c36 = peg$literalExpectation("/", false),
      peg$c37 = function(chars) { return chars.join('') },
      peg$c38 = peg$anyExpectation(),
      peg$c39 = function(char) { return char; },
      peg$c40 = "+",
      peg$c41 = peg$literalExpectation("+", false),
      peg$c42 = "-",
      peg$c43 = peg$literalExpectation("-", false),
      peg$c44 = "!",
      peg$c45 = peg$literalExpectation("!", false),
      peg$c46 = "{",
      peg$c47 = peg$literalExpectation("{", false),
      peg$c48 = "}",
      peg$c49 = peg$literalExpectation("}", false),
      peg$c50 = "[",
      peg$c51 = peg$literalExpectation("[", false),
      peg$c52 = "]",
      peg$c53 = peg$literalExpectation("]", false),
      peg$c54 = "^",
      peg$c55 = peg$literalExpectation("^", false),
      peg$c56 = "?",
      peg$c57 = peg$literalExpectation("?", false),
      peg$c58 = ":",
      peg$c59 = peg$literalExpectation(":", false),
      peg$c60 = "&",
      peg$c61 = peg$literalExpectation("&", false),
      peg$c62 = "|",
      peg$c63 = peg$literalExpectation("|", false),
      peg$c64 = "'",
      peg$c65 = peg$literalExpectation("'", false),
      peg$c66 = "~",
      peg$c67 = peg$literalExpectation("~", false),
      peg$c68 = "*",
      peg$c69 = peg$literalExpectation("*", false),
      peg$c70 = " ",
      peg$c71 = peg$literalExpectation(" ", false),
      peg$c72 = function(proximity) {
              return proximity;
          },
      peg$c73 = function(boost) {
              return boost;
          },
      peg$c74 = function(fuzziness) {
              return fuzziness == '' || fuzziness == null ? 0.5 : fuzziness;
          },
      peg$c75 = "0.",
      peg$c76 = peg$literalExpectation("0.", false),
      peg$c77 = /^[0-9]/,
      peg$c78 = peg$classExpectation([["0", "9"]], false, false),
      peg$c79 = function(val) {
              return parseFloat("0." + val.join(''));
          },
      peg$c80 = function(val) {
              return parseInt(val.join(''));
          },
      peg$c81 = "TO",
      peg$c82 = peg$literalExpectation("TO", false),
      peg$c83 = function(term_min, term_max) {
              return {
                  'term_min': term_min,
                  'term_max': term_max,
                  'inclusive': 'both'
              };
          },
      peg$c84 = function(term_min, term_max) {
              return {
                  'term_min': term_min,
                  'term_max': term_max,
                  'inclusive': 'none'
              };
          },
      peg$c85 = function(term_min, term_max) {
              return {
                  'term_min': term_min,
                  'term_max': term_max,
                  'inclusive': 'left'
              };
          },
      peg$c86 = function(term_min, term_max) {
              return {
                  'term_min': term_min,
                  'term_max': term_max,
                  'inclusive': 'right'
              };
          },
      peg$c87 = function(operator) {
              return operator;
          },
      peg$c88 = "OR NOT",
      peg$c89 = peg$literalExpectation("OR NOT", false),
      peg$c90 = "AND NOT",
      peg$c91 = peg$literalExpectation("AND NOT", false),
      peg$c92 = "OR",
      peg$c93 = peg$literalExpectation("OR", false),
      peg$c94 = "AND",
      peg$c95 = peg$literalExpectation("AND", false),
      peg$c96 = "NOT",
      peg$c97 = peg$literalExpectation("NOT", false),
      peg$c98 = "||",
      peg$c99 = peg$literalExpectation("||", false),
      peg$c100 = "&&",
      peg$c101 = peg$literalExpectation("&&", false),
      peg$c102 = peg$otherExpectation("whitespace"),
      peg$c103 = /^[ \t\r\n\f]/,
      peg$c104 = peg$classExpectation([" ", "\t", "\r", "\n", "\f"], false, false),

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parsestart() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsenode();
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsenode();
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c0(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parse_();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parse_();
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseEOF();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c1();
        }
        s0 = s1;
      }
    }

    return s0;
  }

  function peg$parsenode() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseoperator_exp();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseEOF();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c2(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseoperator_exp();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsegroup_exp();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseoperator_exp();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseoperator_exp();
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parsenode();
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parsenode();
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c3(s1, s2, s3, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseoperator_exp();
        if (s1 !== peg$FAILED) {
          s2 = peg$parsenode();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c4(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parsegroup_exp();
          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$parseoperator_exp();
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parseoperator_exp();
            }
            if (s2 !== peg$FAILED) {
              s3 = [];
              s4 = peg$parsenode();
              while (s4 !== peg$FAILED) {
                s3.push(s4);
                s4 = peg$parsenode();
              }
              if (s3 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c5(s1, s2, s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
      }
    }

    return s0;
  }

  function peg$parsegroup_exp() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsefield_exp();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c6(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$parseparen_exp();
    }

    return s0;
  }

  function peg$parseparen_exp() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 40) {
      s1 = peg$c7;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c8); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsenode();
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsenode();
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 41) {
            s4 = peg$c9;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c10); }
          }
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parse_();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parse_();
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c11(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsefield_exp() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parsefieldname();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parserange_operator_exp();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c12(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsefieldname();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseparen_exp();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c13(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsefieldname();
        if (s1 === peg$FAILED) {
          s1 = null;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseterm();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c14(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
    }

    return s0;
  }

  function peg$parsefieldname() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$parseunquoted_term();
    if (s1 !== peg$FAILED) {
      if (peg$c15.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c16); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c17(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseterm() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = peg$parseprefix_operator_exp();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsequoted_term();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseproximity_modifier();
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseboost_modifier();
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parse_();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parse_();
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c18(s1, s2, s3, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseprefix_operator_exp();
      if (s1 === peg$FAILED) {
        s1 = null;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseregex_term();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parse_();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parse_();
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c19(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseprefix_operator_exp();
        if (s1 === peg$FAILED) {
          s1 = null;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseunquoted_term();
          if (s2 !== peg$FAILED) {
            s3 = peg$parsefuzzy_modifier();
            if (s3 === peg$FAILED) {
              s3 = null;
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parseboost_modifier();
              if (s4 === peg$FAILED) {
                s4 = null;
              }
              if (s4 !== peg$FAILED) {
                s5 = [];
                s6 = peg$parse_();
                while (s6 !== peg$FAILED) {
                  s5.push(s6);
                  s6 = peg$parse_();
                }
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c20(s1, s2, s3, s4);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
    }

    return s0;
  }

  function peg$parserterm_char() {
    var s0, s1, s2;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 92) {
      s1 = peg$c21;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c22); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseEscapeSequence();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c23(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 46) {
        s0 = peg$c24;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c25); }
      }
      if (s0 === peg$FAILED) {
        if (peg$c26.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c27); }
        }
      }
    }

    return s0;
  }

  function peg$parseranged_term() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parserterm_char();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parserterm_char();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c28(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseunquoted_term() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseterm_char();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseterm_char();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c29(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseterm_char() {
    var s0, s1, s2;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 92) {
      s1 = peg$c21;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c22); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseEscapeSequence();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c23(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 46) {
        s0 = peg$c24;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c25); }
      }
      if (s0 === peg$FAILED) {
        if (peg$c30.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c31); }
        }
      }
    }

    return s0;
  }

  function peg$parsequoted_term() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 34) {
      s1 = peg$c32;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c33); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseDoubleStringCharacter();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseDoubleStringCharacter();
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 34) {
          s3 = peg$c32;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c33); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c34(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseregex_term() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 47) {
      s1 = peg$c35;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c36); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseRegexCharacter();
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseRegexCharacter();
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 47) {
          s3 = peg$c35;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c36); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c37(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDoubleStringCharacter() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    if (input.charCodeAt(peg$currPos) === 34) {
      s2 = peg$c32;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c33); }
    }
    if (s2 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 92) {
        s2 = peg$c21;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c22); }
      }
    }
    peg$silentFails--;
    if (s2 === peg$FAILED) {
      s1 = void 0;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c38); }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c39(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 92) {
        s1 = peg$c21;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c22); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseEscapeSequence();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c23(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseRegexCharacter() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    if (input.charCodeAt(peg$currPos) === 47) {
      s2 = peg$c35;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c36); }
    }
    if (s2 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 92) {
        s2 = peg$c21;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c22); }
      }
    }
    peg$silentFails--;
    if (s2 === peg$FAILED) {
      s1 = void 0;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c38); }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c39(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 92) {
        s1 = peg$c21;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c22); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseEscapeSequence();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c23(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseEscapeSequence() {
    var s0;

    if (input.charCodeAt(peg$currPos) === 43) {
      s0 = peg$c40;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c41); }
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 45) {
        s0 = peg$c42;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c43); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 33) {
          s0 = peg$c44;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c45); }
        }
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 40) {
            s0 = peg$c7;
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c8); }
          }
          if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 41) {
              s0 = peg$c9;
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c10); }
            }
            if (s0 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 123) {
                s0 = peg$c46;
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c47); }
              }
              if (s0 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 125) {
                  s0 = peg$c48;
                  peg$currPos++;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c49); }
                }
                if (s0 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 91) {
                    s0 = peg$c50;
                    peg$currPos++;
                  } else {
                    s0 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c51); }
                  }
                  if (s0 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 93) {
                      s0 = peg$c52;
                      peg$currPos++;
                    } else {
                      s0 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c53); }
                    }
                    if (s0 === peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 94) {
                        s0 = peg$c54;
                        peg$currPos++;
                      } else {
                        s0 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c55); }
                      }
                      if (s0 === peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 34) {
                          s0 = peg$c32;
                          peg$currPos++;
                        } else {
                          s0 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c33); }
                        }
                        if (s0 === peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 63) {
                            s0 = peg$c56;
                            peg$currPos++;
                          } else {
                            s0 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c57); }
                          }
                          if (s0 === peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 58) {
                              s0 = peg$c58;
                              peg$currPos++;
                            } else {
                              s0 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c59); }
                            }
                            if (s0 === peg$FAILED) {
                              if (input.charCodeAt(peg$currPos) === 92) {
                                s0 = peg$c21;
                                peg$currPos++;
                              } else {
                                s0 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c22); }
                              }
                              if (s0 === peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 38) {
                                  s0 = peg$c60;
                                  peg$currPos++;
                                } else {
                                  s0 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c61); }
                                }
                                if (s0 === peg$FAILED) {
                                  if (input.charCodeAt(peg$currPos) === 124) {
                                    s0 = peg$c62;
                                    peg$currPos++;
                                  } else {
                                    s0 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c63); }
                                  }
                                  if (s0 === peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 39) {
                                      s0 = peg$c64;
                                      peg$currPos++;
                                    } else {
                                      s0 = peg$FAILED;
                                      if (peg$silentFails === 0) { peg$fail(peg$c65); }
                                    }
                                    if (s0 === peg$FAILED) {
                                      if (input.charCodeAt(peg$currPos) === 47) {
                                        s0 = peg$c35;
                                        peg$currPos++;
                                      } else {
                                        s0 = peg$FAILED;
                                        if (peg$silentFails === 0) { peg$fail(peg$c36); }
                                      }
                                      if (s0 === peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 126) {
                                          s0 = peg$c66;
                                          peg$currPos++;
                                        } else {
                                          s0 = peg$FAILED;
                                          if (peg$silentFails === 0) { peg$fail(peg$c67); }
                                        }
                                        if (s0 === peg$FAILED) {
                                          if (input.charCodeAt(peg$currPos) === 42) {
                                            s0 = peg$c68;
                                            peg$currPos++;
                                          } else {
                                            s0 = peg$FAILED;
                                            if (peg$silentFails === 0) { peg$fail(peg$c69); }
                                          }
                                          if (s0 === peg$FAILED) {
                                            if (input.charCodeAt(peg$currPos) === 32) {
                                              s0 = peg$c70;
                                              peg$currPos++;
                                            } else {
                                              s0 = peg$FAILED;
                                              if (peg$silentFails === 0) { peg$fail(peg$c71); }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parseproximity_modifier() {
    var s0, s1, s2;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 126) {
      s1 = peg$c66;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c67); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseint_exp();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c72(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseboost_modifier() {
    var s0, s1, s2;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 94) {
      s1 = peg$c54;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c55); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsedecimal_or_int_exp();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c73(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsefuzzy_modifier() {
    var s0, s1, s2;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 126) {
      s1 = peg$c66;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c67); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsedecimal_exp();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c74(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsedecimal_or_int_exp() {
    var s0;

    s0 = peg$parsedecimal_exp();
    if (s0 === peg$FAILED) {
      s0 = peg$parseint_exp();
    }

    return s0;
  }

  function peg$parsedecimal_exp() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c75) {
      s1 = peg$c75;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c76); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      if (peg$c77.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c78); }
      }
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          if (peg$c77.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c78); }
          }
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c79(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseint_exp() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c77.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c78); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c77.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c78); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c80(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parserange_operator_exp() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 91) {
      s1 = peg$c50;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c51); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseranged_term();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        if (s3 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c81) {
            s4 = peg$c81;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c82); }
          }
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                s6 = peg$parse_();
              }
            } else {
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseranged_term();
              if (s6 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 93) {
                  s7 = peg$c52;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c53); }
                }
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c83(s2, s6);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c46;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c47); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseranged_term();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parse_();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parse_();
          }
          if (s3 !== peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c81) {
              s4 = peg$c81;
              peg$currPos += 2;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c82); }
            }
            if (s4 !== peg$FAILED) {
              s5 = [];
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                while (s6 !== peg$FAILED) {
                  s5.push(s6);
                  s6 = peg$parse_();
                }
              } else {
                s5 = peg$FAILED;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parseranged_term();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 125) {
                    s7 = peg$c48;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c49); }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c84(s2, s6);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 91) {
          s1 = peg$c50;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c51); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseranged_term();
          if (s2 !== peg$FAILED) {
            s3 = [];
            s4 = peg$parse_();
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parse_();
            }
            if (s3 !== peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c81) {
                s4 = peg$c81;
                peg$currPos += 2;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c82); }
              }
              if (s4 !== peg$FAILED) {
                s5 = [];
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  while (s6 !== peg$FAILED) {
                    s5.push(s6);
                    s6 = peg$parse_();
                  }
                } else {
                  s5 = peg$FAILED;
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$parseranged_term();
                  if (s6 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s7 = peg$c48;
                      peg$currPos++;
                    } else {
                      s7 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c49); }
                    }
                    if (s7 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c85(s2, s6);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 123) {
            s1 = peg$c46;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c47); }
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parseranged_term();
            if (s2 !== peg$FAILED) {
              s3 = [];
              s4 = peg$parse_();
              while (s4 !== peg$FAILED) {
                s3.push(s4);
                s4 = peg$parse_();
              }
              if (s3 !== peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c81) {
                  s4 = peg$c81;
                  peg$currPos += 2;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c82); }
                }
                if (s4 !== peg$FAILED) {
                  s5 = [];
                  s6 = peg$parse_();
                  if (s6 !== peg$FAILED) {
                    while (s6 !== peg$FAILED) {
                      s5.push(s6);
                      s6 = peg$parse_();
                    }
                  } else {
                    s5 = peg$FAILED;
                  }
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parseranged_term();
                    if (s6 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 93) {
                        s7 = peg$c52;
                        peg$currPos++;
                      } else {
                        s7 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c53); }
                      }
                      if (s7 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c86(s2, s6);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
      }
    }

    return s0;
  }

  function peg$parseoperator_exp() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseoperator();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parse_();
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c87(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parse_();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parse_();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseoperator();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseEOF();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c87(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseoperator() {
    var s0;

    if (input.substr(peg$currPos, 6) === peg$c88) {
      s0 = peg$c88;
      peg$currPos += 6;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c89); }
    }
    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 7) === peg$c90) {
        s0 = peg$c90;
        peg$currPos += 7;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c91); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c92) {
          s0 = peg$c92;
          peg$currPos += 2;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c93); }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 3) === peg$c94) {
            s0 = peg$c94;
            peg$currPos += 3;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c95); }
          }
          if (s0 === peg$FAILED) {
            if (input.substr(peg$currPos, 3) === peg$c96) {
              s0 = peg$c96;
              peg$currPos += 3;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c97); }
            }
            if (s0 === peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c98) {
                s0 = peg$c98;
                peg$currPos += 2;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c99); }
              }
              if (s0 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c100) {
                  s0 = peg$c100;
                  peg$currPos += 2;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c101); }
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parseprefix_operator_exp() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseprefix_operator();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c87(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseprefix_operator() {
    var s0;

    if (input.charCodeAt(peg$currPos) === 43) {
      s0 = peg$c40;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c41); }
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 45) {
        s0 = peg$c42;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c43); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 33) {
          s0 = peg$c44;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c45); }
        }
      }
    }

    return s0;
  }

  function peg$parse_() {
    var s0, s1;

    peg$silentFails++;
    s0 = [];
    if (peg$c103.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c104); }
    }
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        if (peg$c103.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c104); }
        }
      }
    } else {
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c102); }
    }

    return s0;
  }

  function peg$parseEOF() {
    var s0, s1;

    s0 = peg$currPos;
    peg$silentFails++;
    if (input.length > peg$currPos) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c38); }
    }
    peg$silentFails--;
    if (s1 === peg$FAILED) {
      s0 = void 0;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};


/***/ }),

/***/ "./node_modules/lucene/lib/toString.js":
/***/ ((module) => {

"use strict";


var implicit = '<implicit>';

module.exports = function toString(ast) {
  if (!ast) {
    return '';
  }

  var result = '';

  if (ast.start != null) {
    result += (ast.parenthesized ? '(' : '') + ast.start + ' ';
  }

  if (ast.field && ast.field !== implicit) {
    result += ast.field + ':';
  }

  if (ast.left) {
    if (ast.parenthesized && !ast.start) {
      result += '(';
    }
    result += toString(ast.left);

    if (ast.parenthesized && !ast.right) {
      result += ')';
    }
  }

  if (ast.operator) {
    if (ast.left) {
      result += ' ';
    }

    if (ast.operator !== implicit) {
      result += ast.operator;
    }
  }

  if (ast.right) {
    if (ast.operator && ast.operator !== implicit) {
      result += ' ';
    }
    result += toString(ast.right);

    if (ast.parenthesized) {
      result += ')';
    }
  }

  if (ast.term || (ast.term === '' && ast.quoted)) {
    if (ast.prefix) {
      result += ast.prefix;
    }
    if (ast.quoted) {
      result += '"';
      result += ast.term;
      result += '"';
    } else if (ast.regex) {
      result += '/';
      result += ast.term;
      result += '/';
    } else {
      result += ast.term;
    }

    if (ast.proximity != null) {
      result += '~' + ast.proximity;
    }

    if (ast.boost != null) {
      result += '^' + ast.boost;
    }
  }

  if (ast.term_min) {
    if (ast.inclusive === 'both' || ast.inclusive === 'left') {
      result += '[';
    } else {
      result += '{';
    }

    result += ast.term_min;
    result += ' TO ';
    result += ast.term_max;

    if (ast.inclusive === 'both' || ast.inclusive === 'right') {
      result += ']';
    } else {
      result += '}';
    }
  }

  if (ast.similarity) {
    result += '~';

    if (ast.similarity !== 0.5) {
      result += ast.similarity;
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/defer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defer: () => (/* binding */ defer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");


function defer(observableFactory) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
        (0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(observableFactory()).subscribe(subscriber);
    });
}
//# sourceMappingURL=defer.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/generate.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generate: () => (/* binding */ generate)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/identity.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isScheduler.js");
/* harmony import */ var _defer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/defer.js");
/* harmony import */ var _scheduled_scheduleIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js");





function generate(initialStateOrOptions, condition, iterate, resultSelectorOrScheduler, scheduler) {
    var _a, _b;
    var resultSelector;
    var initialState;
    if (arguments.length === 1) {
        (_a = initialStateOrOptions, initialState = _a.initialState, condition = _a.condition, iterate = _a.iterate, _b = _a.resultSelector, resultSelector = _b === void 0 ? _util_identity__WEBPACK_IMPORTED_MODULE_1__.identity : _b, scheduler = _a.scheduler);
    }
    else {
        initialState = initialStateOrOptions;
        if (!resultSelectorOrScheduler || (0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_2__.isScheduler)(resultSelectorOrScheduler)) {
            resultSelector = _util_identity__WEBPACK_IMPORTED_MODULE_1__.identity;
            scheduler = resultSelectorOrScheduler;
        }
        else {
            resultSelector = resultSelectorOrScheduler;
        }
    }
    function gen() {
        var state;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    state = initialState;
                    _a.label = 1;
                case 1:
                    if (!(!condition || condition(state))) return [3, 4];
                    return [4, resultSelector(state)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    state = iterate(state);
                    return [3, 1];
                case 4: return [2];
            }
        });
    }
    return (0,_defer__WEBPACK_IMPORTED_MODULE_3__.defer)((scheduler
        ?
            function () { return (0,_scheduled_scheduleIterable__WEBPACK_IMPORTED_MODULE_4__.scheduleIterable)(gen(), scheduler); }
        :
            gen));
}
//# sourceMappingURL=generate.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/skipWhile.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   skipWhile: () => (/* binding */ skipWhile)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");


function skipWhile(predicate) {
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)(function (source, subscriber) {
        var taking = false;
        var index = 0;
        source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, function (value) { return (taking || (taking = !predicate(value, index++))) && subscriber.next(value); }));
    });
}
//# sourceMappingURL=skipWhile.js.map

/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/IndexPattern.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IndexPattern: () => (/* binding */ IndexPattern),
/* harmony export */   intervalMap: () => (/* binding */ intervalMap)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/datetime/moment_wrapper.ts");


const intervalMap = {
  Hourly: { startOf: "hour", amount: "hours" },
  Daily: { startOf: "day", amount: "days" },
  Weekly: { startOf: "isoWeek", amount: "weeks" },
  Monthly: { startOf: "month", amount: "months" },
  Yearly: { startOf: "year", amount: "years" }
};
class IndexPattern {
  constructor(pattern, interval) {
    this.pattern = pattern;
    this.interval = interval;
    this.dateLocale = "en";
  }
  getIndexForToday() {
    if (this.interval) {
      return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.toUtc)().locale(this.dateLocale).format(this.pattern);
    } else {
      return this.pattern;
    }
  }
  getIndexList(from, to) {
    const indexOffset = 7;
    if (!this.interval) {
      return this.pattern;
    }
    const intervalInfo = intervalMap[this.interval];
    const start = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.dateTime)(from || (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.dateTime)(to).add(-indexOffset, intervalInfo.amount)).utc().startOf(intervalInfo.startOf);
    const endEpoch = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.dateTime)(to || (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.dateTime)(from).add(indexOffset, intervalInfo.amount)).utc().startOf(intervalInfo.startOf).valueOf();
    const indexList = [];
    while (start.valueOf() <= endEpoch) {
      indexList.push(start.locale(this.dateLocale).format(this.pattern));
      start.add(1, intervalInfo.amount);
    }
    return indexList;
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/LanguageProvider.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ElasticsearchLanguageProvider)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/datasource.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/query.ts");


class ElasticsearchLanguageProvider extends _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LanguageProvider {
  constructor(datasource) {
    super();
    this.datasource = datasource;
  }
  /**
   * Queries are transformed to an ES Logs query since it's the behaviour most users expect.
   **/
  importFromAbstractQuery(abstractQuery) {
    return {
      metrics: [
        {
          id: "1",
          type: "logs"
        }
      ],
      query: this.getElasticsearchDataQuery(abstractQuery.labelMatchers),
      refId: abstractQuery.refId
    };
  }
  getElasticsearchDataQuery(labels) {
    return labels.map((label) => {
      switch (label.operator) {
        case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.AbstractLabelOperator.Equal: {
          return label.name + ':"' + label.value + '"';
        }
        case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.AbstractLabelOperator.NotEqual: {
          return "-" + label.name + ':"' + label.value + '"';
        }
        case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.AbstractLabelOperator.EqualRegEx: {
          return label.name + ":/" + label.value + "/";
        }
        case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.AbstractLabelOperator.NotEqualRegEx: {
          return "-" + label.name + ":/" + label.value + "/";
        }
      }
    }).join(" AND ");
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/QueryBuilder.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElasticQueryBuilder: () => (/* binding */ ElasticQueryBuilder),
/* harmony export */   calendarIntervals: () => (/* binding */ calendarIntervals)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/datetime/timezones.ts");
/* harmony import */ var _components_QueryEditor_MetricAggregationsEditor_aggregations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/aggregations.ts");
/* harmony import */ var _queryDef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/queryDef.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/utils.ts");





const calendarIntervals = ["1w", "1M", "1q", "1y"];
class ElasticQueryBuilder {
  constructor(options) {
    this.timeField = options.timeField;
  }
  getRangeFilter() {
    const filter = {
      [this.timeField]: {
        gte: "$timeFrom",
        lte: "$timeTo",
        format: "epoch_millis"
      }
    };
    return filter;
  }
  buildTermsAgg(aggDef, queryNode, target) {
    queryNode.terms = { field: aggDef.field };
    if (!aggDef.settings) {
      return queryNode;
    }
    const size = aggDef.settings?.size ? parseInt(aggDef.settings.size, 10) : 500;
    queryNode.terms.size = size === 0 ? 500 : size;
    if (aggDef.settings.orderBy !== void 0) {
      queryNode.terms.order = {};
      if (aggDef.settings.orderBy === "_term") {
        queryNode.terms.order["_key"] = aggDef.settings.order;
      } else {
        queryNode.terms.order[aggDef.settings.orderBy] = aggDef.settings.order;
      }
      const metricId = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.convertOrderByToMetricId)(aggDef.settings.orderBy);
      if (metricId) {
        for (let metric of target.metrics || []) {
          if (metric.id === metricId) {
            if (metric.type === "count") {
              queryNode.terms.order = { _count: aggDef.settings.order };
            } else if ((0,_components_QueryEditor_MetricAggregationsEditor_aggregations__WEBPACK_IMPORTED_MODULE_1__.isMetricAggregationWithField)(metric)) {
              queryNode.aggs = {};
              queryNode.aggs[metric.id] = {
                [metric.type]: { field: metric.field }
              };
            }
            break;
          }
        }
      }
    }
    if (aggDef.settings.min_doc_count !== void 0) {
      queryNode.terms.min_doc_count = parseInt(aggDef.settings.min_doc_count, 10);
      if (isNaN(queryNode.terms.min_doc_count)) {
        queryNode.terms.min_doc_count = aggDef.settings.min_doc_count;
      }
    }
    if (aggDef.settings.missing) {
      queryNode.terms.missing = aggDef.settings.missing;
    }
    return queryNode;
  }
  getDateHistogramAgg(aggDef) {
    const esAgg = {};
    const settings = aggDef.settings || {};
    esAgg.field = aggDef.field || this.timeField;
    esAgg.min_doc_count = settings.min_doc_count || 0;
    esAgg.extended_bounds = { min: "$timeFrom", max: "$timeTo" };
    esAgg.format = "epoch_millis";
    if (settings.timeZone && settings.timeZone !== _grafana_data__WEBPACK_IMPORTED_MODULE_0__.InternalTimeZones.utc) {
      esAgg.time_zone = settings.timeZone;
    }
    if (settings.offset !== "") {
      esAgg.offset = settings.offset;
    }
    const interval = settings.interval === "auto" ? "${__interval_ms}ms" : settings.interval;
    if (interval !== void 0 && calendarIntervals.includes(interval)) {
      esAgg.calendar_interval = interval;
    } else {
      esAgg.fixed_interval = interval;
    }
    return esAgg;
  }
  getHistogramAgg(aggDef) {
    const esAgg = {
      interval: aggDef.settings?.interval,
      field: aggDef.field,
      min_doc_count: aggDef.settings?.min_doc_count || 0
    };
    return esAgg;
  }
  getFiltersAgg(aggDef) {
    const filterObj = {};
    for (let { query, label } of aggDef.settings?.filters || []) {
      filterObj[label || query] = {
        query_string: {
          query,
          analyze_wildcard: true
        }
      };
    }
    return filterObj;
  }
  documentQuery(query, size) {
    query.size = size;
    query.sort = [
      {
        [this.timeField]: { order: "desc", unmapped_type: "boolean" }
      },
      {
        _doc: { order: "desc" }
      }
    ];
    query.script_fields = {};
    return query;
  }
  build(target) {
    target.metrics = target.metrics || [(0,_queryDef__WEBPACK_IMPORTED_MODULE_2__.defaultMetricAgg)()];
    target.bucketAggs = target.bucketAggs || [(0,_queryDef__WEBPACK_IMPORTED_MODULE_2__.defaultBucketAgg)()];
    target.timeField = this.timeField;
    let metric;
    let i, j, pv, nestedAggs;
    const query = {
      size: 0,
      query: {
        bool: {
          filter: [{ range: this.getRangeFilter() }]
        }
      }
    };
    if (target.query && target.query !== "") {
      query.query.bool.filter = [
        ...query.query.bool.filter,
        {
          query_string: {
            analyze_wildcard: true,
            query: target.query
          }
        }
      ];
    }
    if (target.bucketAggs.length === 0) {
      metric = target.metrics[0];
      if (!metric || !(metric.type === "raw_document" || metric.type === "raw_data")) {
        throw { message: "Invalid query" };
      }
    }
    if (target.metrics?.[0]?.type === "raw_document" || target.metrics?.[0]?.type === "raw_data") {
      metric = target.metrics[0];
      const size = metric.settings?.size ? parseInt(metric.settings.size, 10) : 500;
      return this.documentQuery(query, size || 500);
    }
    nestedAggs = query;
    for (i = 0; i < target.bucketAggs.length; i++) {
      const aggDef = target.bucketAggs[i];
      const esAgg = {};
      switch (aggDef.type) {
        case "date_histogram": {
          esAgg["date_histogram"] = this.getDateHistogramAgg(aggDef);
          break;
        }
        case "histogram": {
          esAgg["histogram"] = this.getHistogramAgg(aggDef);
          break;
        }
        case "filters": {
          esAgg["filters"] = { filters: this.getFiltersAgg(aggDef) };
          break;
        }
        case "terms": {
          this.buildTermsAgg(aggDef, esAgg, target);
          break;
        }
        case "geohash_grid": {
          esAgg["geohash_grid"] = {
            field: aggDef.field,
            precision: aggDef.settings?.precision || _queryDef__WEBPACK_IMPORTED_MODULE_2__.defaultGeoHashPrecisionString
          };
          break;
        }
        case "nested": {
          esAgg["nested"] = { path: aggDef.field };
          break;
        }
      }
      nestedAggs.aggs = nestedAggs.aggs || {};
      nestedAggs.aggs[aggDef.id] = esAgg;
      nestedAggs = esAgg;
    }
    nestedAggs.aggs = {};
    for (i = 0; i < target.metrics.length; i++) {
      metric = target.metrics[i];
      if (metric.type === "count") {
        continue;
      }
      const aggField = {};
      let metricAgg = {};
      if ((0,_components_QueryEditor_MetricAggregationsEditor_aggregations__WEBPACK_IMPORTED_MODULE_1__.isPipelineAggregation)(metric)) {
        if ((0,_components_QueryEditor_MetricAggregationsEditor_aggregations__WEBPACK_IMPORTED_MODULE_1__.isPipelineAggregationWithMultipleBucketPaths)(metric)) {
          if (metric.pipelineVariables) {
            metricAgg = {
              buckets_path: {}
            };
            for (j = 0; j < metric.pipelineVariables.length; j++) {
              pv = metric.pipelineVariables[j];
              if (pv.name && pv.pipelineAgg && /^\d*$/.test(pv.pipelineAgg)) {
                const appliedAgg = (0,_queryDef__WEBPACK_IMPORTED_MODULE_2__.findMetricById)(target.metrics, pv.pipelineAgg);
                if (appliedAgg) {
                  if (appliedAgg.type === "count") {
                    metricAgg.buckets_path[pv.name] = "_count";
                  } else {
                    metricAgg.buckets_path[pv.name] = pv.pipelineAgg;
                  }
                }
              }
            }
          } else {
            continue;
          }
        } else {
          if (metric.field && /^\d*$/.test(metric.field)) {
            const appliedAgg = (0,_queryDef__WEBPACK_IMPORTED_MODULE_2__.findMetricById)(target.metrics, metric.field);
            if (appliedAgg) {
              if (appliedAgg.type === "count") {
                metricAgg = { buckets_path: "_count" };
              } else {
                metricAgg = { buckets_path: metric.field };
              }
            }
          } else {
            continue;
          }
        }
      } else if ((0,_components_QueryEditor_MetricAggregationsEditor_aggregations__WEBPACK_IMPORTED_MODULE_1__.isMetricAggregationWithField)(metric)) {
        metricAgg = { field: metric.field };
      }
      if ((0,_components_QueryEditor_MetricAggregationsEditor_aggregations__WEBPACK_IMPORTED_MODULE_1__.isMetricAggregationWithSettings)(metric)) {
        Object.entries(metric.settings || {}).filter(([_, v]) => v !== null).forEach(([k, v]) => {
          metricAgg[k] = k === "script" ? this.buildScript((0,_utils__WEBPACK_IMPORTED_MODULE_3__.getScriptValue)(metric)) : v;
        });
        switch (metric.type) {
          case "moving_avg":
            metricAgg = {
              ...metricAgg,
              ...metricAgg?.window !== void 0 && { window: this.toNumber(metricAgg.window) },
              ...metricAgg?.predict !== void 0 && { predict: this.toNumber(metricAgg.predict) },
              ...(0,_components_QueryEditor_MetricAggregationsEditor_aggregations__WEBPACK_IMPORTED_MODULE_1__.isMovingAverageWithModelSettings)(metric) && {
                settings: {
                  ...metricAgg.settings,
                  ...Object.fromEntries(
                    Object.entries(metricAgg.settings || {}).filter(([settingName]) => ["alpha", "beta", "gamma", "period"].includes(settingName)).filter(([_, stringValue]) => stringValue !== void 0).map(([_, stringValue]) => [_, this.toNumber(stringValue)])
                  )
                }
              }
            };
            break;
          case "serial_diff":
            metricAgg = {
              ...metricAgg,
              ...metricAgg.lag !== void 0 && {
                lag: this.toNumber(metricAgg.lag)
              }
            };
            break;
          case "top_metrics":
            metricAgg = {
              metrics: metric.settings?.metrics?.map((field) => ({ field })),
              size: 1
            };
            if (metric.settings?.orderBy) {
              metricAgg.sort = [{ [metric.settings?.orderBy]: metric.settings?.order }];
            }
            break;
        }
      }
      aggField[metric.type] = metricAgg;
      nestedAggs.aggs[metric.id] = aggField;
    }
    return query;
  }
  buildScript(script) {
    return script;
  }
  toNumber(stringValue) {
    const parsedValue = parseFloat(`${stringValue}`);
    if (isNaN(parsedValue)) {
      return stringValue;
    }
    return parsedValue;
  }
  getTermsQuery(queryDef) {
    const query = {
      size: 0,
      query: {
        bool: {
          filter: [{ range: this.getRangeFilter() }]
        }
      }
    };
    if (queryDef.query) {
      query.query.bool.filter.push({
        query_string: {
          analyze_wildcard: true,
          query: queryDef.query
        }
      });
    }
    let size = 500;
    if (queryDef.size) {
      size = queryDef.size;
    }
    query.aggs = {
      "1": {
        terms: {
          field: queryDef.field,
          size,
          order: {}
        }
      }
    };
    const { orderBy = "key", order = orderBy === "doc_count" ? "desc" : "asc" } = queryDef;
    if (["asc", "desc"].indexOf(order) < 0) {
      throw { message: `Invalid query sort order ${order}` };
    }
    switch (orderBy) {
      case "key":
      case "term":
        const keyname = "_key";
        query.aggs["1"].terms.order[keyname] = order;
        break;
      case "doc_count":
        query.aggs["1"].terms.order["_count"] = order;
        break;
      default:
        throw { message: `Invalid query sort type ${orderBy}` };
    }
    return query;
  }
  getLogsQuery(target, limit) {
    let query = {
      size: 0,
      query: {
        bool: {
          filter: [{ range: this.getRangeFilter() }]
        }
      }
    };
    if (target.query) {
      query.query.bool.filter.push({
        query_string: {
          analyze_wildcard: true,
          query: target.query
        }
      });
    }
    query = this.documentQuery(query, limit);
    return {
      ...query,
      aggs: this.build(target).aggs,
      highlight: {
        fields: {
          "*": {}
        },
        pre_tags: [_queryDef__WEBPACK_IMPORTED_MODULE_2__.highlightTags.pre],
        post_tags: [_queryDef__WEBPACK_IMPORTED_MODULE_2__.highlightTags.post],
        fragment_size: 2147483647
      }
    };
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/AddRemove.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddRemove: () => (/* binding */ AddRemove)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");




const AddRemove = ({ index, onAdd, onRemove, elements }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    "div",
    {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        display: "flex"
      }),
      children: [
        index === 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { variant: "secondary", fill: "text", icon: "plus", onClick: onAdd, tooltip: "Add", "aria-label": "Add" }),
        elements.length >= 2 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { variant: "secondary", fill: "text", icon: "minus", onClick: onRemove, tooltip: "Remove", "aria-label": "Remove" })
      ]
    }
  );
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/MetricPicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetricPicker: () => (/* binding */ MetricPicker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Segment/Segment.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/utils.ts");





const noWrap = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  whiteSpace: "nowrap"
});
const toOption = (metric) => ({
  label: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.describeMetric)(metric),
  value: metric
});
const toOptions = (metrics) => metrics.map(toOption);
const MetricPicker = ({ options, onChange, className, value }) => {
  const selectedOption = options.find((option) => option.id === value);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Segment,
    {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(className, noWrap),
      options: toOptions(options),
      onChange,
      placeholder: "Select Metric",
      value: !!selectedOption ? toOption(selectedOption) : void 0
    }
  );
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/AnnotationQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElasticsearchAnnotationsQueryEditor: () => (/* binding */ ElasticsearchAnnotationsQueryEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorField.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorRow.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/index.tsx");





function ElasticsearchAnnotationsQueryEditor(props) {
  const annotation = props.annotation;
  const onAnnotationChange = props.onAnnotationChange;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { direction: "column", gap: 5, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _index__WEBPACK_IMPORTED_MODULE_5__.ElasticSearchQueryField,
      {
        value: annotation.target?.query,
        onChange: (query) => {
          const currentTarget = annotation.target ?? { refId: "annotation_query" };
          const newTarget = {
            ...currentTarget,
            query
          };
          onAnnotationChange({
            ...annotation,
            target: newTarget
          });
        }
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h6", { children: "Field mappings" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.EditorRow, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.EditorField, { label: "Time", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input,
          {
            type: "text",
            placeholder: "@timestamp",
            value: annotation.timeField,
            onChange: (e) => {
              onAnnotationChange({
                ...annotation,
                timeField: e.currentTarget.value
              });
            }
          }
        ) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.EditorField, { label: "Time End", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input,
          {
            type: "text",
            value: annotation.timeEndField,
            onChange: (e) => {
              onAnnotationChange({
                ...annotation,
                timeEndField: e.currentTarget.value
              });
            }
          }
        ) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.EditorField, { label: "Text", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input,
          {
            type: "text",
            value: annotation.textField,
            onChange: (e) => {
              onAnnotationChange({
                ...annotation,
                textField: e.currentTarget.value
              });
            }
          }
        ) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.EditorField, { label: "Tags", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input,
          {
            type: "text",
            placeholder: "tags",
            value: annotation.tagsField,
            onChange: (e) => {
              onAnnotationChange({
                ...annotation,
                tagsField: e.currentTarget.value
              });
            }
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {})
  ] });
}


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/BucketAggregationEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BucketAggregationEditor: () => (/* binding */ BucketAggregationEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Segment/Segment.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Segment/SegmentAsync.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineSegmentGroup.tsx");
/* harmony import */ var _hooks_useFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/hooks/useFields.ts");
/* harmony import */ var _hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/hooks/useStatelessReducer.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/styles.ts");
/* harmony import */ var _SettingsEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/index.tsx");
/* harmony import */ var _aggregations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/aggregations.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/state/actions.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/utils.ts");










const bucketAggOptions = Object.entries(_utils__WEBPACK_IMPORTED_MODULE_10__.bucketAggregationConfig).map(
  ([key, { label }]) => ({
    label,
    value: key
  })
);
const toOption = (bucketAgg) => ({
  label: _utils__WEBPACK_IMPORTED_MODULE_10__.bucketAggregationConfig[bucketAgg.type].label,
  value: bucketAgg.type
});
const BucketAggregationEditor = ({ value }) => {
  const dispatch = (0,_hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const getFields = (0,_hooks_useFields__WEBPACK_IMPORTED_MODULE_4__.useFields)(value.type);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineSegmentGroup, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Segment,
        {
          className: _styles__WEBPACK_IMPORTED_MODULE_6__.segmentStyles,
          options: bucketAggOptions,
          onChange: (e) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_9__.changeBucketAggregationType)({ id: value.id, newType: e.value })),
          value: toOption(value)
        }
      ),
      (0,_aggregations__WEBPACK_IMPORTED_MODULE_8__.isBucketAggregationWithField)(value) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SegmentAsync,
        {
          className: _styles__WEBPACK_IMPORTED_MODULE_6__.segmentStyles,
          loadOptions: getFields,
          onChange: (e) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_9__.changeBucketAggregationField)({ id: value.id, newField: e.value })),
          placeholder: "Select Field",
          value: value.field
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SettingsEditor__WEBPACK_IMPORTED_MODULE_7__.SettingsEditor, { bucketAgg: value })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/DateHistogramSettingsEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateHistogramSettingsEditor: () => (/* binding */ DateHistogramSettingsEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/datetime/timezones.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/DateTimePickers/TimeZonePicker.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _QueryBuilder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/QueryBuilder.ts");
/* harmony import */ var _hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/hooks/useStatelessReducer.ts");
/* harmony import */ var _hooks_useCreatableSelectPersistedBehaviour__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/hooks/useCreatableSelectPersistedBehaviour.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/state/actions.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/utils.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/index.tsx");












const defaultIntervalOptions = [
  { label: "auto", value: "auto" },
  { label: "10s", value: "10s" },
  { label: "1m", value: "1m" },
  { label: "5m", value: "5m" },
  { label: "10m", value: "10m" },
  { label: "20m", value: "20m" },
  { label: "1h", value: "1h" },
  { label: "1d", value: "1d" },
  { label: "1w", value: "1w" },
  { label: "1M", value: "1M" },
  { label: "1q", value: "1q" },
  { label: "1y", value: "1y" }
];
const hasValue = (searchValue) => ({ value }) => value === searchValue;
const isValidNewOption = (inputValue, _, options) => {
  const valueExists = options.some(hasValue(inputValue));
  return !valueExists && inputValue.trim().length > 0;
};
const optionStartsWithValue = (option, value) => option.value?.startsWith(value) || false;
const getIntervalType = (interval) => {
  return interval && _QueryBuilder__WEBPACK_IMPORTED_MODULE_8__.calendarIntervals.includes(interval) ? "calendar" : "fixed";
};
const DateHistogramSettingsEditor = ({ bucketAgg }) => {
  const dispatch = (0,_hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
  const { current: baseId } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)((0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqueId)("es-date_histogram-"));
  const handleIntervalChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    ({ value }) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.changeBucketAggregationSetting)({ bucketAgg, settingName: "interval", newValue: value })),
    [bucketAgg, dispatch]
  );
  const intervalType = getIntervalType(
    bucketAgg.settings?.interval || _utils__WEBPACK_IMPORTED_MODULE_12__.bucketAggregationConfig.date_histogram.defaultSettings?.interval
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField,
      {
        label: intervalType === "calendar" ? "Calendar interval" : "Fixed interval",
        tooltip: intervalType === "calendar" ? "Calendar-aware intervals adapt to varying day lengths, month durations, and leap seconds, considering the calendar context." : "Fixed intervals remain constant, always being multiples of SI units, independent of calendar changes.",
        ...___WEBPACK_IMPORTED_MODULE_13__.inlineFieldProps,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Select,
          {
            inputId: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqueId)("es-date_histogram-interval"),
            isValidNewOption,
            filterOption: optionStartsWithValue,
            ...(0,_hooks_useCreatableSelectPersistedBehaviour__WEBPACK_IMPORTED_MODULE_10__.useCreatableSelectPersistedBehaviour)({
              options: defaultIntervalOptions,
              value: bucketAgg.settings?.interval || _utils__WEBPACK_IMPORTED_MODULE_12__.bucketAggregationConfig.date_histogram.defaultSettings?.interval,
              onChange: handleIntervalChange
            })
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField, { label: "Min Doc Count", ...___WEBPACK_IMPORTED_MODULE_13__.inlineFieldProps, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Input,
      {
        id: `${baseId}-min_doc_count`,
        onBlur: (e) => dispatch(
          (0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.changeBucketAggregationSetting)({ bucketAgg, settingName: "min_doc_count", newValue: e.target.value })
        ),
        defaultValue: bucketAgg.settings?.min_doc_count || _utils__WEBPACK_IMPORTED_MODULE_12__.bucketAggregationConfig.date_histogram.defaultSettings?.min_doc_count
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField, { label: "Trim Edges", ...___WEBPACK_IMPORTED_MODULE_13__.inlineFieldProps, tooltip: "Trim the edges on the timeseries datapoints", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Input,
      {
        id: `${baseId}-trime_edges`,
        onBlur: (e) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.changeBucketAggregationSetting)({ bucketAgg, settingName: "trimEdges", newValue: e.target.value })),
        defaultValue: bucketAgg.settings?.trimEdges || _utils__WEBPACK_IMPORTED_MODULE_12__.bucketAggregationConfig.date_histogram.defaultSettings?.trimEdges
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField,
      {
        label: "Offset",
        ...___WEBPACK_IMPORTED_MODULE_13__.inlineFieldProps,
        tooltip: "Change the start value of each bucket by the specified positive (+) or negative offset (-) duration, such as 1h for an hour, or 1d for a day",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Input,
          {
            id: `${baseId}-offset`,
            onBlur: (e) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.changeBucketAggregationSetting)({ bucketAgg, settingName: "offset", newValue: e.target.value })),
            defaultValue: bucketAgg.settings?.offset || _utils__WEBPACK_IMPORTED_MODULE_12__.bucketAggregationConfig.date_histogram.defaultSettings?.offset
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField, { label: "Timezone", ...___WEBPACK_IMPORTED_MODULE_13__.inlineFieldProps, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TimeZonePicker,
      {
        value: bucketAgg.settings?.timeZone || _utils__WEBPACK_IMPORTED_MODULE_12__.bucketAggregationConfig.date_histogram.defaultSettings?.timeZone,
        includeInternal: [_grafana_data__WEBPACK_IMPORTED_MODULE_3__.InternalTimeZones.utc],
        onChange: (timeZone) => {
          dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.changeBucketAggregationSetting)({ bucketAgg, settingName: "timeZone", newValue: timeZone }));
        }
      }
    ) })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/FiltersSettingsEditor/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FiltersSettingsEditor: () => (/* binding */ FiltersSettingsEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/QueryField/QueryField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/hooks/useStatelessReducer.ts");
/* harmony import */ var _AddRemove__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/AddRemove.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/state/actions.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/FiltersSettingsEditor/state/actions.ts");
/* harmony import */ var _state_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/FiltersSettingsEditor/state/reducer.ts");











const FiltersSettingsEditor = ({ bucketAgg }) => {
  const { current: baseId } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.uniqueId)("es-filters-"));
  const upperStateDispatch = (0,_hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  const dispatch = (0,_hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_7__.useStatelessReducer)(
    (newValue) => upperStateDispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_9__.changeBucketAggregationSetting)({ bucketAgg, settingName: "filters", newValue })),
    bucketAgg.settings?.filters,
    _state_reducer__WEBPACK_IMPORTED_MODULE_11__.reducer
  );
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!bucketAgg.settings?.filters?.length) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_10__.addFilter)());
    }
  }, [dispatch, bucketAgg.settings?.filters?.length]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "div",
    {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        display: "flex",
        flexDirection: "column"
      }),
      children: bucketAgg.settings?.filters.map((filter, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        "div",
        {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
            display: "flex"
          }),
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField, { label: "Query", labelWidth: 8, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "div",
              {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
                  width: "150px"
                }),
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.QueryField,
                  {
                    placeholder: "Lucene Query",
                    portalOrigin: "elasticsearch",
                    onChange: (query) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_10__.changeFilter)({ index, filter: { ...filter, query } })),
                    query: filter.query
                  }
                )
              }
            ) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField, { label: "Label", labelWidth: 8, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input,
              {
                width: 16,
                id: `${baseId}-label-${index}`,
                placeholder: "Label",
                onBlur: (e) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_10__.changeFilter)({ index, filter: { ...filter, label: e.target.value } })),
                defaultValue: filter.label
              }
            ) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _AddRemove__WEBPACK_IMPORTED_MODULE_8__.AddRemove,
              {
                index,
                elements: bucketAgg.settings?.filters || [],
                onAdd: () => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_10__.addFilter)()),
                onRemove: () => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_10__.removeFilter)(index))
              }
            )
          ]
        },
        index
      ))
    }
  ) });
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/FiltersSettingsEditor/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addFilter: () => (/* binding */ addFilter),
/* harmony export */   changeFilter: () => (/* binding */ changeFilter),
/* harmony export */   removeFilter: () => (/* binding */ removeFilter)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");


const addFilter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("@bucketAggregations/filter/add");
const removeFilter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("@bucketAggregations/filter/remove");
const changeFilter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("@bucketAggregations/filter/change");


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/FiltersSettingsEditor/state/reducer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/FiltersSettingsEditor/utils.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/FiltersSettingsEditor/state/actions.ts");



const reducer = (state = [], action) => {
  if (_actions__WEBPACK_IMPORTED_MODULE_1__.addFilter.match(action)) {
    return [...state, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.defaultFilter)()];
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_1__.removeFilter.match(action)) {
    return state.slice(0, action.payload).concat(state.slice(action.payload + 1));
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_1__.changeFilter.match(action)) {
    return state.map((filter, index) => {
      if (index !== action.payload.index) {
        return filter;
      }
      return action.payload.filter;
    });
  }
  return state;
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/FiltersSettingsEditor/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultFilter: () => (/* binding */ defaultFilter)
/* harmony export */ });

const defaultFilter = () => ({ label: "", query: "*" });


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/TermsSettingsEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermsSettingsEditor: () => (/* binding */ TermsSettingsEditor),
/* harmony export */   createOrderByOptions: () => (/* binding */ createOrderByOptions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/hooks/useStatelessReducer.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/utils.ts");
/* harmony import */ var _ElasticsearchQueryContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/ElasticsearchQueryContext.tsx");
/* harmony import */ var _MetricAggregationsEditor_aggregations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/aggregations.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/state/actions.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/utils.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/index.tsx");












const TermsSettingsEditor = ({ bucketAgg }) => {
  const { metrics } = (0,_ElasticsearchQueryContext__WEBPACK_IMPORTED_MODULE_8__.useQuery)();
  const orderBy = createOrderByOptions(metrics);
  const { current: baseId } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)((0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqueId)("es-terms-"));
  let size = bucketAgg.settings?.size || _utils__WEBPACK_IMPORTED_MODULE_11__.bucketAggregationConfig.terms.defaultSettings?.size;
  if (!size || size === "") {
    size = "10";
  } else if (size === "0") {
    size = "500";
  }
  const dispatch = (0,_hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Order", ...___WEBPACK_IMPORTED_MODULE_12__.inlineFieldProps, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select,
      {
        inputId: `${baseId}-order`,
        onChange: (e) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_10__.changeBucketAggregationSetting)({ bucketAgg, settingName: "order", newValue: e.value })),
        options: _utils__WEBPACK_IMPORTED_MODULE_11__.orderOptions,
        value: bucketAgg.settings?.order || _utils__WEBPACK_IMPORTED_MODULE_11__.bucketAggregationConfig.terms.defaultSettings?.order
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Size", ...___WEBPACK_IMPORTED_MODULE_12__.inlineFieldProps, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
      {
        id: `${baseId}-size`,
        onBlur: (e) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_10__.changeBucketAggregationSetting)({ bucketAgg, settingName: "size", newValue: e.target.value })),
        defaultValue: size
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Min Doc Count", ...___WEBPACK_IMPORTED_MODULE_12__.inlineFieldProps, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
      {
        id: `${baseId}-min_doc_count`,
        onBlur: (e) => dispatch(
          (0,_state_actions__WEBPACK_IMPORTED_MODULE_10__.changeBucketAggregationSetting)({ bucketAgg, settingName: "min_doc_count", newValue: e.target.value })
        ),
        defaultValue: bucketAgg.settings?.min_doc_count || _utils__WEBPACK_IMPORTED_MODULE_11__.bucketAggregationConfig.terms.defaultSettings?.min_doc_count
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Order By", ...___WEBPACK_IMPORTED_MODULE_12__.inlineFieldProps, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select,
      {
        inputId: `${baseId}-order_by`,
        onChange: (e) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_10__.changeBucketAggregationSetting)({ bucketAgg, settingName: "orderBy", newValue: e.value })),
        options: orderBy,
        value: bucketAgg.settings?.orderBy || _utils__WEBPACK_IMPORTED_MODULE_11__.bucketAggregationConfig.terms.defaultSettings?.orderBy
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Missing", ...___WEBPACK_IMPORTED_MODULE_12__.inlineFieldProps, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
      {
        id: `${baseId}-missing`,
        onBlur: (e) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_10__.changeBucketAggregationSetting)({ bucketAgg, settingName: "missing", newValue: e.target.value })),
        defaultValue: bucketAgg.settings?.missing || _utils__WEBPACK_IMPORTED_MODULE_11__.bucketAggregationConfig.terms.defaultSettings?.missing
      }
    ) })
  ] });
};
function createOrderByOptionsForExtendedStats(metric) {
  if (!metric.meta) {
    return [];
  }
  const metaKeys = Object.keys(metric.meta);
  return metaKeys.filter((key) => metric.meta?.[key]).map((key) => {
    let method = key;
    if (key === "std_deviation_bounds_lower") {
      method = "std_lower";
    }
    if (key === "std_deviation_bounds_upper") {
      method = "std_upper";
    }
    return { label: `${(0,_utils__WEBPACK_IMPORTED_MODULE_7__.describeMetric)(metric)} (${method})`, value: `${metric.id}[${method}]` };
  });
}
function createOrderByOptionsForPercentiles(metric) {
  if (!metric.settings?.percents) {
    return [];
  }
  return metric.settings.percents.map((percent) => {
    const percentString = /^\d+\.\d+/.test(`${percent}`) ? percent : `${percent}.0`;
    return { label: `${(0,_utils__WEBPACK_IMPORTED_MODULE_7__.describeMetric)(metric)} (${percent})`, value: `${metric.id}[${percentString}]` };
  });
}
function isValidOrderTarget(metric) {
  return (
    // top metrics can't be used for ordering
    metric.type !== "top_metrics" && // pipeline aggregations can't be used for ordering: https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-terms-aggregation.html#search-aggregations-bucket-terms-aggregation-order
    !(0,_MetricAggregationsEditor_aggregations__WEBPACK_IMPORTED_MODULE_9__.isPipelineAggregation)(metric)
  );
}
const createOrderByOptions = (metrics = []) => {
  const metricOptions = metrics.filter(isValidOrderTarget).flatMap((metric) => {
    if (metric.type === "extended_stats") {
      return createOrderByOptionsForExtendedStats(metric);
    } else if (metric.type === "percentiles") {
      return createOrderByOptionsForPercentiles(metric);
    } else {
      return { label: (0,_utils__WEBPACK_IMPORTED_MODULE_7__.describeMetric)(metric), value: metric.id };
    }
  });
  return [..._utils__WEBPACK_IMPORTED_MODULE_11__.orderByOptions, ...metricOptions];
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsEditor: () => (/* binding */ SettingsEditor),
/* harmony export */   inlineFieldProps: () => (/* binding */ inlineFieldProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/hooks/useStatelessReducer.ts");
/* harmony import */ var _SettingsEditorContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/SettingsEditorContainer.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/state/actions.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/utils.ts");
/* harmony import */ var _DateHistogramSettingsEditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/DateHistogramSettingsEditor.tsx");
/* harmony import */ var _FiltersSettingsEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/FiltersSettingsEditor/index.tsx");
/* harmony import */ var _TermsSettingsEditor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/TermsSettingsEditor.tsx");
/* harmony import */ var _useDescription__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/useDescription.ts");













const inlineFieldProps = {
  labelWidth: 18
};
const SettingsEditor = ({ bucketAgg }) => {
  const { current: baseId } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)((0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqueId)("es-setting-"));
  const dispatch = (0,_hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const settingsDescription = (0,_useDescription__WEBPACK_IMPORTED_MODULE_12__.useDescription)(bucketAgg);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_SettingsEditorContainer__WEBPACK_IMPORTED_MODULE_6__.SettingsEditorContainer, { label: settingsDescription, children: [
    bucketAgg.type === "terms" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TermsSettingsEditor__WEBPACK_IMPORTED_MODULE_11__.TermsSettingsEditor, { bucketAgg }),
    bucketAgg.type === "date_histogram" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DateHistogramSettingsEditor__WEBPACK_IMPORTED_MODULE_9__.DateHistogramSettingsEditor, { bucketAgg }),
    bucketAgg.type === "filters" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FiltersSettingsEditor__WEBPACK_IMPORTED_MODULE_10__.FiltersSettingsEditor, { bucketAgg }),
    bucketAgg.type === "geohash_grid" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Precision", ...inlineFieldProps, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input,
      {
        id: `${baseId}-geohash_grid-precision`,
        onBlur: (e) => dispatch(
          (0,_state_actions__WEBPACK_IMPORTED_MODULE_7__.changeBucketAggregationSetting)({ bucketAgg, settingName: "precision", newValue: e.target.value })
        ),
        defaultValue: bucketAgg.settings?.precision || _utils__WEBPACK_IMPORTED_MODULE_8__.bucketAggregationConfig[bucketAgg.type].defaultSettings?.precision
      }
    ) }),
    bucketAgg.type === "histogram" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Interval", ...inlineFieldProps, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input,
        {
          id: `${baseId}-histogram-interval`,
          onBlur: (e) => dispatch(
            (0,_state_actions__WEBPACK_IMPORTED_MODULE_7__.changeBucketAggregationSetting)({ bucketAgg, settingName: "interval", newValue: e.target.value })
          ),
          defaultValue: bucketAgg.settings?.interval || _utils__WEBPACK_IMPORTED_MODULE_8__.bucketAggregationConfig[bucketAgg.type].defaultSettings?.interval
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Min Doc Count", ...inlineFieldProps, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input,
        {
          id: `${baseId}-histogram-min_doc_count`,
          onBlur: (e) => dispatch(
            (0,_state_actions__WEBPACK_IMPORTED_MODULE_7__.changeBucketAggregationSetting)({ bucketAgg, settingName: "min_doc_count", newValue: e.target.value })
          ),
          defaultValue: bucketAgg.settings?.min_doc_count || _utils__WEBPACK_IMPORTED_MODULE_8__.bucketAggregationConfig[bucketAgg.type].defaultSettings?.min_doc_count
        }
      ) })
    ] })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/useDescription.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDescription: () => (/* binding */ useDescription)
/* harmony export */ });
/* harmony import */ var _queryDef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/queryDef.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/utils.ts");
/* harmony import */ var _ElasticsearchQueryContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/ElasticsearchQueryContext.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/utils.ts");





const hasValue = (value) => (object) => object.value === value;
const useDescription = (bucketAgg) => {
  const { metrics } = (0,_ElasticsearchQueryContext__WEBPACK_IMPORTED_MODULE_2__.useQuery)();
  switch (bucketAgg.type) {
    case "terms": {
      const order = bucketAgg.settings?.order || "desc";
      const size = bucketAgg.settings?.size || "10";
      const minDocCount = parseInt(bucketAgg.settings?.min_doc_count || "0", 10);
      const orderBy = bucketAgg.settings?.orderBy || "_term";
      let description = "";
      if (size !== "0") {
        const orderLabel = _utils__WEBPACK_IMPORTED_MODULE_3__.orderOptions.find(hasValue(order))?.label;
        description = `${orderLabel} ${size}, `;
      }
      if (minDocCount > 0) {
        description += `Min Doc Count: ${minDocCount}, `;
      }
      description += "Order by: ";
      const orderByOption = _utils__WEBPACK_IMPORTED_MODULE_3__.orderByOptions.find(hasValue(orderBy));
      if (orderByOption) {
        description += orderByOption.label;
      } else {
        const metric = metrics?.find((m) => m.id === (0,_utils__WEBPACK_IMPORTED_MODULE_1__.convertOrderByToMetricId)(orderBy));
        if (metric) {
          description += (0,_utils__WEBPACK_IMPORTED_MODULE_1__.describeMetric)(metric);
        } else {
          description += "metric not found";
        }
      }
      if (size === "0") {
        description += ` (${order})`;
      }
      return description;
    }
    case "histogram": {
      const interval = bucketAgg.settings?.interval || "1000";
      const minDocCount = parseInt(bucketAgg.settings?.min_doc_count || "1", 10);
      return `Interval: ${interval}${minDocCount > 0 ? `, Min Doc Count: ${minDocCount}` : ""}`;
    }
    case "filters": {
      const filters = bucketAgg.settings?.filters || _utils__WEBPACK_IMPORTED_MODULE_3__.bucketAggregationConfig["filters"].defaultSettings?.filters;
      return `Filter Queries (${filters.length})`;
    }
    case "geohash_grid": {
      const precision = parseInt(bucketAgg.settings?.precision || _queryDef__WEBPACK_IMPORTED_MODULE_0__.defaultGeoHashPrecisionString, 10);
      return `Precision: ${precision}`;
    }
    case "date_histogram": {
      const interval = bucketAgg.settings?.interval || "auto";
      const minDocCount = parseInt(bucketAgg.settings?.min_doc_count || "0", 10);
      const trimEdges = parseInt(bucketAgg.settings?.trimEdges || "0", 10);
      let description = `Interval: ${interval}`;
      if (minDocCount > 0) {
        description += `, Min Doc Count: ${minDocCount}`;
      }
      if (trimEdges > 0) {
        description += `, Trim edges: ${trimEdges}`;
      }
      return description;
    }
    default:
      return "Settings";
  }
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/aggregations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BUCKET_AGGREGATION_TYPES: () => (/* binding */ BUCKET_AGGREGATION_TYPES),
/* harmony export */   isBucketAggregationType: () => (/* binding */ isBucketAggregationType),
/* harmony export */   isBucketAggregationWithField: () => (/* binding */ isBucketAggregationWithField)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/utils.ts");


const isBucketAggregationWithField = (bucketAgg) => _utils__WEBPACK_IMPORTED_MODULE_0__.bucketAggregationConfig[bucketAgg.type].requiresField;
const BUCKET_AGGREGATION_TYPES = [
  "date_histogram",
  "histogram",
  "terms",
  "filters",
  "geohash_grid",
  "nested"
];
const isBucketAggregationType = (s) => BUCKET_AGGREGATION_TYPES.includes(s);


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BucketAggregationsEditor: () => (/* binding */ BucketAggregationsEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/hooks/useStatelessReducer.ts");
/* harmony import */ var _ElasticsearchQueryContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/ElasticsearchQueryContext.tsx");
/* harmony import */ var _QueryEditorRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/QueryEditorRow.tsx");
/* harmony import */ var _BucketAggregationEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/BucketAggregationEditor.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/state/actions.ts");








const BucketAggregationsEditor = ({ nextId }) => {
  const dispatch = (0,_hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const { bucketAggs } = (0,_ElasticsearchQueryContext__WEBPACK_IMPORTED_MODULE_3__.useQuery)();
  const totalBucketAggs = bucketAggs?.length || 0;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: bucketAggs.map((bucketAgg, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _QueryEditorRow__WEBPACK_IMPORTED_MODULE_4__.QueryEditorRow,
    {
      label: index === 0 ? "Group By" : "Then By",
      onRemoveClick: totalBucketAggs > 1 && (() => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_6__.removeBucketAggregation)(bucketAgg.id))),
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_BucketAggregationEditor__WEBPACK_IMPORTED_MODULE_5__.BucketAggregationEditor, { value: bucketAgg }),
        index === 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button,
          {
            variant: "secondary",
            fill: "text",
            icon: "plus",
            onClick: () => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_6__.addBucketAggregation)(nextId)),
            tooltip: "Add grouping condition",
            "aria-label": "Add grouping condition"
          }
        )
      ]
    },
    `${bucketAgg.type}-${bucketAgg.id}`
  )) });
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addBucketAggregation: () => (/* binding */ addBucketAggregation),
/* harmony export */   changeBucketAggregationField: () => (/* binding */ changeBucketAggregationField),
/* harmony export */   changeBucketAggregationSetting: () => (/* binding */ changeBucketAggregationSetting),
/* harmony export */   changeBucketAggregationType: () => (/* binding */ changeBucketAggregationType),
/* harmony export */   removeBucketAggregation: () => (/* binding */ removeBucketAggregation)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");


const addBucketAggregation = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("@bucketAggs/add");
const removeBucketAggregation = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("@bucketAggs/remove");
const changeBucketAggregationType = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("@bucketAggs/change_type");
const changeBucketAggregationField = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("@bucketAggs/change_field");
const changeBucketAggregationSetting = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("@bucketAggs/change_setting");


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/state/reducer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createReducer: () => (/* binding */ createReducer)
/* harmony export */ });
/* harmony import */ var _queryDef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/queryDef.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/utils.ts");
/* harmony import */ var _MetricAggregationsEditor_state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/state/actions.ts");
/* harmony import */ var _MetricAggregationsEditor_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/utils.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/state.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/utils.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/state/actions.ts");








const createReducer = (defaultTimeField) => (state, action) => {
  if (_actions__WEBPACK_IMPORTED_MODULE_6__.addBucketAggregation.match(action)) {
    const newAgg = {
      id: action.payload,
      type: "terms",
      settings: _utils__WEBPACK_IMPORTED_MODULE_5__.bucketAggregationConfig["terms"].defaultSettings
    };
    const lastAgg = state[state.length - 1];
    if (lastAgg?.type === "date_histogram") {
      return [...state.slice(0, state.length - 1), newAgg, lastAgg];
    }
    return [...state, newAgg];
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_6__.removeBucketAggregation.match(action)) {
    return state.filter((bucketAgg) => bucketAgg.id !== action.payload);
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_6__.changeBucketAggregationType.match(action)) {
    return state.map((bucketAgg) => {
      if (bucketAgg.id !== action.payload.id) {
        return bucketAgg;
      }
      return {
        id: bucketAgg.id,
        type: action.payload.newType,
        settings: _utils__WEBPACK_IMPORTED_MODULE_5__.bucketAggregationConfig[action.payload.newType].defaultSettings
      };
    });
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_6__.changeBucketAggregationField.match(action)) {
    return state.map((bucketAgg) => {
      if (bucketAgg.id !== action.payload.id) {
        return bucketAgg;
      }
      return {
        ...bucketAgg,
        field: action.payload.newField
      };
    });
  }
  if (_MetricAggregationsEditor_state_actions__WEBPACK_IMPORTED_MODULE_2__.changeMetricType.match(action)) {
    if (_MetricAggregationsEditor_utils__WEBPACK_IMPORTED_MODULE_3__.metricAggregationConfig[action.payload.type].impliedQueryType !== "metrics") {
      return [];
    } else if (state.length === 0) {
      return [{ ...(0,_queryDef__WEBPACK_IMPORTED_MODULE_0__.defaultBucketAgg)("2"), field: defaultTimeField }];
    }
    return state;
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_6__.changeBucketAggregationSetting.match(action)) {
    return state.map((bucketAgg) => {
      if (bucketAgg.id !== action.payload.bucketAgg.id) {
        return bucketAgg;
      }
      const newSettings = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.removeEmpty)({
        ...bucketAgg.settings,
        [action.payload.settingName]: action.payload.newValue
      });
      return {
        ...bucketAgg,
        settings: {
          ...newSettings
        }
      };
    });
  }
  if (_state__WEBPACK_IMPORTED_MODULE_4__.initQuery.match(action)) {
    if (state && state.length > 0) {
      return state;
    }
    return [{ ...(0,_queryDef__WEBPACK_IMPORTED_MODULE_0__.defaultBucketAgg)("2"), field: defaultTimeField }];
  }
  return state;
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bucketAggregationConfig: () => (/* binding */ bucketAggregationConfig),
/* harmony export */   orderByOptions: () => (/* binding */ orderByOptions),
/* harmony export */   orderOptions: () => (/* binding */ orderOptions)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/datetime/timezones.ts");
/* harmony import */ var _queryDef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/queryDef.ts");
/* harmony import */ var _SettingsEditor_FiltersSettingsEditor_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/FiltersSettingsEditor/utils.ts");




const bucketAggregationConfig = {
  terms: {
    label: "Terms",
    requiresField: true,
    defaultSettings: {
      min_doc_count: "1",
      size: "10",
      order: "desc",
      orderBy: "_term"
    }
  },
  filters: {
    label: "Filters",
    requiresField: false,
    defaultSettings: {
      filters: [(0,_SettingsEditor_FiltersSettingsEditor_utils__WEBPACK_IMPORTED_MODULE_2__.defaultFilter)()]
    }
  },
  geohash_grid: {
    label: "Geo Hash Grid",
    requiresField: true,
    defaultSettings: {
      precision: _queryDef__WEBPACK_IMPORTED_MODULE_1__.defaultGeoHashPrecisionString
    }
  },
  date_histogram: {
    label: "Date Histogram",
    requiresField: true,
    defaultSettings: {
      interval: "auto",
      min_doc_count: "0",
      trimEdges: "0",
      timeZone: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.InternalTimeZones.utc
    }
  },
  histogram: {
    label: "Histogram",
    requiresField: true,
    defaultSettings: {
      interval: "1000",
      min_doc_count: "0"
    }
  },
  nested: {
    label: "Nested (experimental)",
    requiresField: true,
    defaultSettings: {}
  }
};
const orderByOptions = [
  { label: "Term value", value: "_term" },
  { label: "Doc Count", value: "_count" }
];
const orderOptions = [
  { label: "Top", value: "desc" },
  { label: "Bottom", value: "asc" }
];


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/ElasticsearchQueryContext.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElasticsearchProvider: () => (/* binding */ ElasticsearchProvider),
/* harmony export */   useDatasource: () => (/* binding */ useDatasource),
/* harmony export */   useQuery: () => (/* binding */ useQuery),
/* harmony export */   useRange: () => (/* binding */ useRange)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/hooks/useStatelessReducer.ts");
/* harmony import */ var _BucketAggregationsEditor_state_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/state/reducer.ts");
/* harmony import */ var _MetricAggregationsEditor_state_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/state/reducer.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/state.ts");







const DatasourceContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(void 0);
const QueryContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(void 0);
const RangeContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(void 0);
const ElasticsearchProvider = ({
  children,
  onChange,
  onRunQuery,
  query,
  datasource,
  range
}) => {
  const onStateChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (query2, prevQuery) => {
      onChange(query2);
      if (query2.query === prevQuery.query || prevQuery.query === void 0) {
        onRunQuery();
      }
    },
    [onChange, onRunQuery]
  );
  const reducer = (0,_hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
    query: _state__WEBPACK_IMPORTED_MODULE_5__.queryReducer,
    alias: _state__WEBPACK_IMPORTED_MODULE_5__.aliasPatternReducer,
    metrics: _MetricAggregationsEditor_state_reducer__WEBPACK_IMPORTED_MODULE_4__.reducer,
    bucketAggs: (0,_BucketAggregationsEditor_state_reducer__WEBPACK_IMPORTED_MODULE_3__.createReducer)(datasource.timeField)
  });
  const dispatch = (0,_hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_2__.useStatelessReducer)(
    // timeField is part of the query model, but its value is always set to be the one from datasource settings.
    (newState) => onStateChange({ ...query, ...newState, timeField: datasource.timeField }, query),
    query,
    reducer
  );
  const isUninitialized = !query.metrics || !query.bucketAggs || query.query === void 0;
  const [shouldRunInit, setShouldRunInit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(isUninitialized);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (shouldRunInit && isUninitialized) {
      dispatch((0,_state__WEBPACK_IMPORTED_MODULE_5__.initQuery)());
      setShouldRunInit(false);
    }
  }, [shouldRunInit, dispatch, isUninitialized]);
  if (isUninitialized) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DatasourceContext.Provider, { value: datasource, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(QueryContext.Provider, { value: query, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RangeContext.Provider, { value: range, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_2__.DispatchContext.Provider, { value: dispatch, children }) }) }) });
};
const getHook = (c) => () => {
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(c);
  if (!contextValue) {
    throw new Error("use ElasticsearchProvider first.");
  }
  return contextValue;
};
const useQuery = getHook(QueryContext);
const useDatasource = getHook(DatasourceContext);
const useRange = getHook(RangeContext);


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/MetricEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetricEditor: () => (/* binding */ MetricEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/semver/index.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Segment/SegmentAsync.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineSegmentGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _hooks_useFields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/hooks/useFields.ts");
/* harmony import */ var _hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/hooks/useStatelessReducer.ts");
/* harmony import */ var _MetricPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/MetricPicker.tsx");
/* harmony import */ var _ElasticsearchQueryContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/ElasticsearchQueryContext.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/styles.ts");
/* harmony import */ var _SettingsEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/index.tsx");
/* harmony import */ var _aggregations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/aggregations.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/state/actions.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/styles.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/utils.ts");
















const toOption = (metric) => ({
  label: _utils__WEBPACK_IMPORTED_MODULE_16__.metricAggregationConfig[metric.type].label,
  value: metric.type
});
const isBasicAggregation = (metric) => !_utils__WEBPACK_IMPORTED_MODULE_16__.metricAggregationConfig[metric.type].isPipelineAgg;
const getTypeOptions = (previousMetrics, esVersion) => {
  const includePipelineAggregations = previousMetrics.some(isBasicAggregation);
  return Object.entries(_utils__WEBPACK_IMPORTED_MODULE_16__.metricAggregationConfig).filter(([_, config]) => config.impliedQueryType === "metrics").filter(([_, { versionRange = "*" }]) => esVersion != null ? (0,semver__WEBPACK_IMPORTED_MODULE_3__.satisfies)(esVersion, versionRange) : true).filter(([_, config]) => includePipelineAggregations || !config.isPipelineAgg).map(([key, { label }]) => ({
    label,
    value: key
  }));
};
const MetricEditor = ({ value }) => {
  const styles = (0,_styles__WEBPACK_IMPORTED_MODULE_15__.getStyles)((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useTheme2)(), !!value.hide);
  const datasource = (0,_ElasticsearchQueryContext__WEBPACK_IMPORTED_MODULE_10__.useDatasource)();
  const query = (0,_ElasticsearchQueryContext__WEBPACK_IMPORTED_MODULE_10__.useQuery)();
  const dispatch = (0,_hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  const getFields = (0,_hooks_useFields__WEBPACK_IMPORTED_MODULE_7__.useFields)(value.type);
  const getTypeOptionsAsync = async (previousMetrics2) => {
    const dbVersion = await datasource.getDatabaseVersion();
    return getTypeOptions(previousMetrics2, dbVersion);
  };
  const loadOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async () => {
    const remoteFields = await getFields();
    if ((0,_aggregations__WEBPACK_IMPORTED_MODULE_13__.isMetricAggregationWithInlineScript)(value)) {
      return [{ label: "None" }, ...remoteFields];
    }
    return remoteFields;
  }, [getFields, value]);
  const previousMetrics = query.metrics.slice(
    0,
    query.metrics.findIndex((m) => m.id === value.id)
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineSegmentGroup, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SegmentAsync,
        {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.color, _styles__WEBPACK_IMPORTED_MODULE_11__.segmentStyles),
          loadOptions: () => getTypeOptionsAsync(previousMetrics),
          onChange: (e) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_14__.changeMetricType)({ id: value.id, type: e.value })),
          value: toOption(value)
        }
      ),
      (0,_aggregations__WEBPACK_IMPORTED_MODULE_13__.isMetricAggregationWithField)(value) && !(0,_aggregations__WEBPACK_IMPORTED_MODULE_13__.isPipelineAggregation)(value) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SegmentAsync,
        {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.color, _styles__WEBPACK_IMPORTED_MODULE_11__.segmentStyles),
          loadOptions,
          onChange: (e) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_14__.changeMetricField)({ id: value.id, field: e.value })),
          placeholder: "Select Field",
          value: value.field
        }
      ),
      (0,_aggregations__WEBPACK_IMPORTED_MODULE_13__.isPipelineAggregation)(value) && !(0,_aggregations__WEBPACK_IMPORTED_MODULE_13__.isPipelineAggregationWithMultipleBucketPaths)(value) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _MetricPicker__WEBPACK_IMPORTED_MODULE_9__.MetricPicker,
        {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.color, _styles__WEBPACK_IMPORTED_MODULE_11__.segmentStyles),
          onChange: (e) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_14__.changeMetricField)({ id: value.id, field: e.value?.id })),
          options: previousMetrics,
          value: value.field
        }
      )
    ] }),
    (0,_aggregations__WEBPACK_IMPORTED_MODULE_13__.isMetricAggregationWithSettings)(value) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SettingsEditor__WEBPACK_IMPORTED_MODULE_12__.SettingsEditor, { metric: value, previousMetrics })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/BucketScriptSettingsEditor/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BucketScriptSettingsEditor: () => (/* binding */ BucketScriptSettingsEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/hooks/useStatelessReducer.ts");
/* harmony import */ var _AddRemove__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/AddRemove.tsx");
/* harmony import */ var _MetricPicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/MetricPicker.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/state/actions.ts");
/* harmony import */ var _SettingField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/SettingField.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/BucketScriptSettingsEditor/state/actions.ts");
/* harmony import */ var _state_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/BucketScriptSettingsEditor/state/reducer.ts");













const BucketScriptSettingsEditor = ({ value, previousMetrics }) => {
  const upperStateDispatch = (0,_hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  const dispatch = (0,_hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_6__.useStatelessReducer)(
    (newValue) => upperStateDispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_9__.changeMetricAttribute)({ metric: value, attribute: "pipelineVariables", newValue })),
    value.pipelineVariables,
    _state_reducer__WEBPACK_IMPORTED_MODULE_12__.reducer
  );
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!value.pipelineVariables?.length) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.addPipelineVariable)());
    }
  }, [dispatch, value.pipelineVariables?.length]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      "div",
      {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
          display: "flex"
        }),
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineLabel, { width: 16, children: "Variables" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "div",
            {
              className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
                display: "grid",
                gridTemplateColumns: "1fr auto",
                rowGap: "4px",
                marginBottom: "4px"
              }),
              children: value.pipelineVariables.map((pipelineVar, index) => (
                // index as a key doesn't work here since removing an element
                // in the middle of the list, will cause the next element to obtain the same key as the removed one.
                // this will cause react to "drop" the last element of the list instead of the just removed one,
                // and the default value for the input won't match the model as the DOM won't get updated.
                // using pipelineVar.name is not an option since it might be duplicated by the user.
                // generating a unique key on every render, while is probably not the best solution in terms of performance
                // ensures the UI is in a correct state. We might want to optimize this if we see perf issue in the future.
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, { children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    "div",
                    {
                      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
                        display: "grid",
                        columnGap: "4px",
                        gridTemplateColumns: "auto auto"
                      }),
                      children: [
                        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
                          {
                            "aria-label": "Variable name",
                            defaultValue: pipelineVar.name,
                            placeholder: "Variable Name",
                            onBlur: (e) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.renamePipelineVariable)({ newName: e.target.value, index }))
                          }
                        ),
                        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _MetricPicker__WEBPACK_IMPORTED_MODULE_8__.MetricPicker,
                          {
                            onChange: (e) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.changePipelineVariableMetric)({ newMetric: e.value.id, index })),
                            options: previousMetrics,
                            value: pipelineVar.pipelineAgg
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _AddRemove__WEBPACK_IMPORTED_MODULE_7__.AddRemove,
                    {
                      index,
                      elements: value.pipelineVariables || [],
                      onAdd: () => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.addPipelineVariable)()),
                      onRemove: () => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.removePipelineVariable)(index))
                    }
                  )
                ] }, (0,lodash__WEBPACK_IMPORTED_MODULE_2__.uniqueId)("es-bs-"))
              ))
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _SettingField__WEBPACK_IMPORTED_MODULE_10__.SettingField,
      {
        label: "Script",
        metric: value,
        inputType: "textarea",
        settingName: "script",
        tooltip: "Elasticsearch v5.0 and above: Scripting language is Painless. Use params.<var> to reference a variable. Elasticsearch pre-v5.0: Scripting language is per default Groovy if not changed. For Groovy use <var> to reference a variable.",
        placeholder: "params.var1 / params.var2"
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/BucketScriptSettingsEditor/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPipelineVariable: () => (/* binding */ addPipelineVariable),
/* harmony export */   changePipelineVariableMetric: () => (/* binding */ changePipelineVariableMetric),
/* harmony export */   removePipelineVariable: () => (/* binding */ removePipelineVariable),
/* harmony export */   renamePipelineVariable: () => (/* binding */ renamePipelineVariable)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");


const addPipelineVariable = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("@pipelineVariables/add");
const removePipelineVariable = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("@pipelineVariables/remove");
const renamePipelineVariable = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("@pipelineVariables/rename");
const changePipelineVariableMetric = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)(
  "@pipelineVariables/change_metric"
);


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/BucketScriptSettingsEditor/state/reducer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/BucketScriptSettingsEditor/utils.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/BucketScriptSettingsEditor/state/actions.ts");



const reducer = (state = [], action) => {
  if (_actions__WEBPACK_IMPORTED_MODULE_1__.addPipelineVariable.match(action)) {
    return [...state, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.defaultPipelineVariable)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.generatePipelineVariableName)(state))];
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_1__.removePipelineVariable.match(action)) {
    return state.slice(0, action.payload).concat(state.slice(action.payload + 1));
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_1__.renamePipelineVariable.match(action)) {
    return state.map((pipelineVariable, index) => {
      if (index !== action.payload.index) {
        return pipelineVariable;
      }
      return {
        ...pipelineVariable,
        name: action.payload.newName
      };
    });
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_1__.changePipelineVariableMetric.match(action)) {
    return state.map((pipelineVariable, index) => {
      if (index !== action.payload.index) {
        return pipelineVariable;
      }
      return {
        ...pipelineVariable,
        pipelineAgg: action.payload.newMetric
      };
    });
  }
  return state;
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/BucketScriptSettingsEditor/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultPipelineVariable: () => (/* binding */ defaultPipelineVariable),
/* harmony export */   generatePipelineVariableName: () => (/* binding */ generatePipelineVariableName)
/* harmony export */ });

const defaultPipelineVariable = (name) => ({ name, pipelineAgg: "" });
const generatePipelineVariableName = (pipelineVars) => `var${Math.max(0, ...pipelineVars.map((v) => parseInt(v.name.match("^var(\\d+)$")?.[1] || "0", 10))) + 1}`;


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/MovingAverageSettingsEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MovingAverageSettingsEditor: () => (/* binding */ MovingAverageSettingsEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/hooks/useStatelessReducer.ts");
/* harmony import */ var _queryDef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/queryDef.ts");
/* harmony import */ var _aggregations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/aggregations.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/state/actions.ts");
/* harmony import */ var _SettingField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/SettingField.tsx");










const MovingAverageSettingsEditor = ({ metric }) => {
  const dispatch = (0,_hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  const { current: baseId } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)((0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqueId)("es-moving-avg-"));
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Model", labelWidth: 16, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select,
      {
        inputId: `${baseId}-model`,
        onChange: (value) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_10__.changeMetricSetting)({ metric, settingName: "model", newValue: value.value })),
        options: _queryDef__WEBPACK_IMPORTED_MODULE_8__.movingAvgModelOptions,
        value: metric.settings?.model
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SettingField__WEBPACK_IMPORTED_MODULE_11__.SettingField, { label: "Window", settingName: "window", metric, placeholder: "5" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SettingField__WEBPACK_IMPORTED_MODULE_11__.SettingField, { label: "Predict", settingName: "predict", metric }),
    ((0,_aggregations__WEBPACK_IMPORTED_MODULE_9__.isEWMAMovingAverage)(metric) || (0,_aggregations__WEBPACK_IMPORTED_MODULE_9__.isHoltMovingAverage)(metric) || (0,_aggregations__WEBPACK_IMPORTED_MODULE_9__.isHoltWintersMovingAverage)(metric)) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Alpha", labelWidth: 16, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
      {
        id: `${baseId}-alpha`,
        onBlur: (e) => dispatch(
          (0,_state_actions__WEBPACK_IMPORTED_MODULE_10__.changeMetricSetting)({
            metric,
            settingName: "settings",
            newValue: {
              ...metric.settings?.settings,
              alpha: e.target.value
            }
          })
        ),
        defaultValue: metric.settings?.settings?.alpha
      }
    ) }),
    ((0,_aggregations__WEBPACK_IMPORTED_MODULE_9__.isHoltMovingAverage)(metric) || (0,_aggregations__WEBPACK_IMPORTED_MODULE_9__.isHoltWintersMovingAverage)(metric)) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Beta", labelWidth: 16, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
      {
        id: `${baseId}-beta`,
        onBlur: (e) => dispatch(
          (0,_state_actions__WEBPACK_IMPORTED_MODULE_10__.changeMetricSetting)({
            metric,
            settingName: "settings",
            newValue: {
              ...metric.settings?.settings,
              beta: e.target.value
            }
          })
        ),
        defaultValue: metric.settings?.settings?.beta
      }
    ) }),
    (0,_aggregations__WEBPACK_IMPORTED_MODULE_9__.isHoltWintersMovingAverage)(metric) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Gamma", labelWidth: 16, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
        {
          id: `${baseId}-gamma`,
          onBlur: (e) => dispatch(
            (0,_state_actions__WEBPACK_IMPORTED_MODULE_10__.changeMetricSetting)({
              metric,
              settingName: "settings",
              newValue: {
                ...metric.settings?.settings,
                gamma: e.target.value
              }
            })
          ),
          defaultValue: metric.settings?.settings?.gamma
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Period", labelWidth: 16, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
        {
          id: `${baseId}-period`,
          onBlur: (e) => dispatch(
            (0,_state_actions__WEBPACK_IMPORTED_MODULE_10__.changeMetricSetting)({
              metric,
              settingName: "settings",
              newValue: {
                ...metric.settings?.settings,
                period: e.target.value
              }
            })
          ),
          defaultValue: metric.settings?.settings?.period
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Pad", labelWidth: 16, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineSwitch,
        {
          id: `${baseId}-pad`,
          onChange: (e) => dispatch(
            (0,_state_actions__WEBPACK_IMPORTED_MODULE_10__.changeMetricSetting)({
              metric,
              settingName: "settings",
              newValue: { ...metric.settings?.settings, pad: e.target.checked }
            })
          ),
          checked: !!metric.settings?.settings?.pad
        }
      ) })
    ] }),
    ((0,_aggregations__WEBPACK_IMPORTED_MODULE_9__.isEWMAMovingAverage)(metric) || (0,_aggregations__WEBPACK_IMPORTED_MODULE_9__.isHoltMovingAverage)(metric) || (0,_aggregations__WEBPACK_IMPORTED_MODULE_9__.isHoltWintersMovingAverage)(metric)) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Minimize", labelWidth: 16, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineSwitch,
      {
        id: `${baseId}-minimize`,
        onChange: (e) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_10__.changeMetricSetting)({ metric, settingName: "minimize", newValue: e.target.checked })),
        checked: !!metric.settings?.minimize
      }
    ) })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/SettingField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingField: () => (/* binding */ SettingField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/TextArea/TextArea.tsx");
/* harmony import */ var _hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/hooks/useStatelessReducer.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/utils.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/state/actions.ts");








function SettingField({
  label,
  settingName,
  metric,
  placeholder,
  tooltip,
  inputType = "input"
}) {
  const dispatch = (0,_hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  const [id] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqueId)(`es-field-id-`));
  const settings = metric.settings;
  let defaultValue = settings?.[settingName] || "";
  if (settingName === "script") {
    defaultValue = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getScriptValue)(metric);
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label, labelWidth: 16, tooltip, children: inputType === "textarea" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TextArea,
    {
      id,
      placeholder,
      onBlur: (e) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_8__.changeMetricSetting)({ metric, settingName, newValue: e.target.value })),
      defaultValue
    }
  ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input,
    {
      id,
      placeholder,
      onBlur: (e) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_8__.changeMetricSetting)({ metric, settingName, newValue: e.target.value })),
      defaultValue
    }
  ) });
}


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/TopMetricsSettingsEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopMetricsSettingsEditor: () => (/* binding */ TopMetricsSettingsEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Segment/SegmentAsync.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _hooks_useFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/hooks/useFields.ts");
/* harmony import */ var _hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/hooks/useStatelessReducer.ts");
/* harmony import */ var _BucketAggregationsEditor_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/utils.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/state/actions.ts");








const toMultiSelectValue = (value) => ({ value, label: value });
const TopMetricsSettingsEditor = ({ metric }) => {
  const dispatch = (0,_hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  const getOrderByOptions = (0,_hooks_useFields__WEBPACK_IMPORTED_MODULE_5__.useFields)(["number", "date"]);
  const getMetricsOptions = (0,_hooks_useFields__WEBPACK_IMPORTED_MODULE_5__.useFields)(metric.type);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Metrics", labelWidth: 16, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.AsyncMultiSelect,
      {
        onChange: (e) => dispatch(
          (0,_state_actions__WEBPACK_IMPORTED_MODULE_8__.changeMetricSetting)({
            metric,
            settingName: "metrics",
            newValue: e.map((v) => v.value)
          })
        ),
        loadOptions: getMetricsOptions,
        value: metric.settings?.metrics?.map(toMultiSelectValue),
        closeMenuOnSelect: false,
        defaultOptions: true
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Order", labelWidth: 16, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select,
      {
        onChange: (e) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_8__.changeMetricSetting)({ metric, settingName: "order", newValue: e.value })),
        options: _BucketAggregationsEditor_utils__WEBPACK_IMPORTED_MODULE_7__.orderOptions,
        value: metric.settings?.order
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField,
      {
        label: "Order By",
        labelWidth: 16,
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
          "& > div": {
            width: "100%"
          }
        }),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SegmentAsync,
          {
            className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
              marginRight: 0
            }),
            loadOptions: getOrderByOptions,
            onChange: (e) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_8__.changeMetricSetting)({ metric, settingName: "orderBy", newValue: e.value })),
            placeholder: "Select Field",
            value: metric.settings?.orderBy
          }
        )
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsEditor: () => (/* binding */ SettingsEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/hooks/useStatelessReducer.ts");
/* harmony import */ var _queryDef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/queryDef.ts");
/* harmony import */ var _SettingsEditorContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/SettingsEditorContainer.tsx");
/* harmony import */ var _aggregations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/aggregations.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/state/actions.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/utils.ts");
/* harmony import */ var _BucketScriptSettingsEditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/BucketScriptSettingsEditor/index.tsx");
/* harmony import */ var _MovingAverageSettingsEditor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/MovingAverageSettingsEditor.tsx");
/* harmony import */ var _SettingField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/SettingField.tsx");
/* harmony import */ var _TopMetricsSettingsEditor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/TopMetricsSettingsEditor.tsx");
/* harmony import */ var _useDescription__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/useDescription.ts");

















const inlineFieldProps = {
  labelWidth: 16
};
const SettingsEditor = ({ metric, previousMetrics }) => {
  const { current: baseId } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.uniqueId)("es-setting-"));
  const dispatch = (0,_hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  const description = (0,_useDescription__WEBPACK_IMPORTED_MODULE_17__.useDescription)(metric);
  const sizeFieldId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
  const unitFieldId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
  const modeFieldId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
  const rateAggUnitOptions = [
    { value: "second", label: "Second" },
    { value: "minute", label: "Minute" },
    { value: "hour", label: "Hour" },
    { value: "day", label: "Day" },
    { value: "week", label: "Week" },
    { value: "month", label: "Month" },
    { value: "quarter", label: "Quarter" },
    { value: "Year", label: "Year" }
  ];
  const rateAggModeOptions = [
    { value: "sum", label: "Sum" },
    { value: "value_count", label: "Value count" }
  ];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_SettingsEditorContainer__WEBPACK_IMPORTED_MODULE_9__.SettingsEditorContainer, { label: description, hidden: metric.hide, children: [
    metric.type === "derivative" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SettingField__WEBPACK_IMPORTED_MODULE_15__.SettingField, { label: "Unit", metric, settingName: "unit" }),
    metric.type === "serial_diff" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SettingField__WEBPACK_IMPORTED_MODULE_15__.SettingField, { label: "Lag", metric, settingName: "lag", placeholder: "1" }),
    metric.type === "cumulative_sum" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SettingField__WEBPACK_IMPORTED_MODULE_15__.SettingField, { label: "Format", metric, settingName: "format" }),
    metric.type === "moving_avg" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MovingAverageSettingsEditor__WEBPACK_IMPORTED_MODULE_14__.MovingAverageSettingsEditor, { metric }),
    metric.type === "moving_fn" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SettingField__WEBPACK_IMPORTED_MODULE_15__.SettingField, { label: "Window", metric, settingName: "window" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SettingField__WEBPACK_IMPORTED_MODULE_15__.SettingField, { label: "Script", metric, settingName: "script", inputType: "textarea" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SettingField__WEBPACK_IMPORTED_MODULE_15__.SettingField, { label: "Shift", metric, settingName: "shift" })
    ] }),
    metric.type === "top_metrics" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TopMetricsSettingsEditor__WEBPACK_IMPORTED_MODULE_16__.TopMetricsSettingsEditor, { metric }),
    metric.type === "bucket_script" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_BucketScriptSettingsEditor__WEBPACK_IMPORTED_MODULE_13__.BucketScriptSettingsEditor, { value: metric, previousMetrics }),
    (metric.type === "raw_data" || metric.type === "raw_document") && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Size", ...inlineFieldProps, htmlFor: sizeFieldId, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
      {
        id: sizeFieldId,
        onBlur: (e) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.changeMetricSetting)({ metric, settingName: "size", newValue: e.target.value })),
        defaultValue: metric.settings?.size ?? _utils__WEBPACK_IMPORTED_MODULE_12__.metricAggregationConfig["raw_data"].defaults.settings?.size
      }
    ) }),
    metric.type === "logs" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SettingField__WEBPACK_IMPORTED_MODULE_15__.SettingField, { label: "Limit", metric, settingName: "limit", placeholder: "500" }),
    metric.type === "cardinality" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SettingField__WEBPACK_IMPORTED_MODULE_15__.SettingField, { label: "Precision Threshold", metric, settingName: "precision_threshold" }),
    metric.type === "extended_stats" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      _queryDef__WEBPACK_IMPORTED_MODULE_8__.extendedStats.map((stat) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        ExtendedStatSetting,
        {
          stat,
          onChange: (newValue) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.changeMetricMeta)({ metric, meta: stat.value, newValue })),
          value: metric.meta?.[stat.value] !== void 0 ? !!metric.meta?.[stat.value] : !!_utils__WEBPACK_IMPORTED_MODULE_12__.metricAggregationConfig["extended_stats"].defaults.meta?.[stat.value]
        },
        stat.value
      )),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SettingField__WEBPACK_IMPORTED_MODULE_15__.SettingField, { label: "Sigma", metric, settingName: "sigma", placeholder: "3" })
    ] }),
    metric.type === "percentiles" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Percentiles", ...inlineFieldProps, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
      {
        id: `${baseId}-percentiles-percents`,
        onBlur: (e) => dispatch(
          (0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.changeMetricSetting)({
            metric,
            settingName: "percents",
            newValue: e.target.value.split(",").filter(Boolean)
          })
        ),
        defaultValue: metric.settings?.percents || _utils__WEBPACK_IMPORTED_MODULE_12__.metricAggregationConfig["percentiles"].defaults.settings?.percents,
        placeholder: "1,5,25,50,75,95,99"
      }
    ) }),
    metric.type === "rate" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Unit", ...inlineFieldProps, "data-testid": "unit-select", htmlFor: unitFieldId, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select,
        {
          id: unitFieldId,
          onChange: (e) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.changeMetricSetting)({ metric, settingName: "unit", newValue: e.value })),
          options: rateAggUnitOptions,
          value: metric.settings?.unit
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Mode", ...inlineFieldProps, "data-testid": "mode-select", htmlFor: modeFieldId, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select,
        {
          id: modeFieldId,
          onChange: (e) => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.changeMetricSetting)({ metric, settingName: "mode", newValue: e.value })),
          options: rateAggModeOptions,
          value: metric.settings?.unit
        }
      ) })
    ] }),
    (0,_aggregations__WEBPACK_IMPORTED_MODULE_10__.isMetricAggregationWithInlineScript)(metric) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _SettingField__WEBPACK_IMPORTED_MODULE_15__.SettingField,
      {
        label: "Script",
        metric,
        settingName: "script",
        placeholder: "_value * 1",
        inputType: "textarea"
      }
    ),
    (0,_aggregations__WEBPACK_IMPORTED_MODULE_10__.isMetricAggregationWithMissingSupport)(metric) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _SettingField__WEBPACK_IMPORTED_MODULE_15__.SettingField,
      {
        label: "Missing",
        metric,
        settingName: "missing",
        tooltip: "The missing parameter defines how documents that are missing a value should be treated. By default\n            they will be ignored but it is also possible to treat them as if they had a value"
      }
    )
  ] });
};
const ExtendedStatSetting = ({ stat, onChange, value }) => {
  const [id] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.uniqueId)(`es-field-id-`));
  return /* @__PURE__ */ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: stat.label, ...inlineFieldProps, key: stat.value }, /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineSwitch,
    {
      id,
      onChange: (e) => onChange(e.target.checked),
      value
    }
  ));
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/useDescription.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDescription: () => (/* binding */ useDescription)
/* harmony export */ });
/* harmony import */ var _queryDef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/queryDef.ts");


const hasValue = (value) => (object) => object.value === value;
const useDescription = (metric) => {
  switch (metric.type) {
    case "cardinality": {
      const precisionThreshold = metric.settings?.precision_threshold || "";
      return `Precision threshold: ${precisionThreshold}`;
    }
    case "percentiles":
      if (metric.settings?.percents && metric.settings?.percents?.length >= 1) {
        return `Values: ${metric.settings?.percents}`;
      }
      return "Percents: Default";
    case "extended_stats": {
      const selectedStats = Object.entries(metric.meta || {}).map(([key, value]) => value && _queryDef__WEBPACK_IMPORTED_MODULE_0__.extendedStats.find(hasValue(key))?.label).filter(Boolean);
      return `Stats: ${selectedStats.length > 0 ? selectedStats.join(", ") : "None selected"}`;
    }
    case "raw_document":
    case "raw_data": {
      const size = metric.settings?.size || 500;
      return `Size: ${size}`;
    }
    default:
      return "Options";
  }
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/aggregations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   METRIC_AGGREGATION_TYPES: () => (/* binding */ METRIC_AGGREGATION_TYPES),
/* harmony export */   isEWMAMovingAverage: () => (/* binding */ isEWMAMovingAverage),
/* harmony export */   isHoltMovingAverage: () => (/* binding */ isHoltMovingAverage),
/* harmony export */   isHoltWintersMovingAverage: () => (/* binding */ isHoltWintersMovingAverage),
/* harmony export */   isMetricAggregationType: () => (/* binding */ isMetricAggregationType),
/* harmony export */   isMetricAggregationWithField: () => (/* binding */ isMetricAggregationWithField),
/* harmony export */   isMetricAggregationWithInlineScript: () => (/* binding */ isMetricAggregationWithInlineScript),
/* harmony export */   isMetricAggregationWithMeta: () => (/* binding */ isMetricAggregationWithMeta),
/* harmony export */   isMetricAggregationWithMissingSupport: () => (/* binding */ isMetricAggregationWithMissingSupport),
/* harmony export */   isMetricAggregationWithSettings: () => (/* binding */ isMetricAggregationWithSettings),
/* harmony export */   isMovingAverageWithModelSettings: () => (/* binding */ isMovingAverageWithModelSettings),
/* harmony export */   isPipelineAggregation: () => (/* binding */ isPipelineAggregation),
/* harmony export */   isPipelineAggregationWithMultipleBucketPaths: () => (/* binding */ isPipelineAggregationWithMultipleBucketPaths)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/utils.ts");


const isEWMAMovingAverage = (metric) => metric.settings?.model === "ewma";
const isHoltMovingAverage = (metric) => metric.settings?.model === "holt";
const isHoltWintersMovingAverage = (metric) => metric.settings?.model === "holt_winters";
const isMovingAverageWithModelSettings = (metric) => ["holt", "ewma", "holt_winters"].includes(metric.settings?.model || "");
const isMetricAggregationWithField = (metric) => _utils__WEBPACK_IMPORTED_MODULE_0__.metricAggregationConfig[metric.type].requiresField;
const isPipelineAggregation = (metric) => _utils__WEBPACK_IMPORTED_MODULE_0__.metricAggregationConfig[metric.type].isPipelineAgg;
const isPipelineAggregationWithMultipleBucketPaths = (metric) => _utils__WEBPACK_IMPORTED_MODULE_0__.metricAggregationConfig[metric.type].supportsMultipleBucketPaths;
const isMetricAggregationWithMissingSupport = (metric) => _utils__WEBPACK_IMPORTED_MODULE_0__.metricAggregationConfig[metric.type].supportsMissing;
const isMetricAggregationWithSettings = (metric) => _utils__WEBPACK_IMPORTED_MODULE_0__.metricAggregationConfig[metric.type].hasSettings;
const isMetricAggregationWithMeta = (metric) => _utils__WEBPACK_IMPORTED_MODULE_0__.metricAggregationConfig[metric.type].hasMeta;
const isMetricAggregationWithInlineScript = (metric) => _utils__WEBPACK_IMPORTED_MODULE_0__.metricAggregationConfig[metric.type].supportsInlineScript;
const METRIC_AGGREGATION_TYPES = [
  "count",
  "avg",
  "sum",
  "min",
  "max",
  "extended_stats",
  "percentiles",
  "cardinality",
  "raw_document",
  "raw_data",
  "logs",
  "moving_avg",
  "moving_fn",
  "derivative",
  "serial_diff",
  "cumulative_sum",
  "bucket_script",
  "rate",
  "top_metrics"
];
const isMetricAggregationType = (s) => METRIC_AGGREGATION_TYPES.includes(s);


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetricAggregationsEditor: () => (/* binding */ MetricAggregationsEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/hooks/useStatelessReducer.ts");
/* harmony import */ var _ElasticsearchQueryContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/ElasticsearchQueryContext.tsx");
/* harmony import */ var _QueryEditorRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/QueryEditorRow.tsx");
/* harmony import */ var _QueryEditorSpecialMetricRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/QueryEditorSpecialMetricRow.tsx");
/* harmony import */ var _MetricEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/MetricEditor.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/state/actions.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/utils.ts");










const MetricAggregationsEditor = ({ nextId }) => {
  const dispatch = (0,_hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const { metrics } = (0,_ElasticsearchQueryContext__WEBPACK_IMPORTED_MODULE_4__.useQuery)();
  const totalMetrics = metrics?.length || 0;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: metrics?.map((metric, index) => {
    switch (metric.type) {
      case "logs":
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_QueryEditorSpecialMetricRow__WEBPACK_IMPORTED_MODULE_6__.QueryEditorSpecialMetricRow, { name: "Logs", metric }, `${metric.type}-${metric.id}`);
      case "raw_data":
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_QueryEditorSpecialMetricRow__WEBPACK_IMPORTED_MODULE_6__.QueryEditorSpecialMetricRow, { name: "Raw Data", metric }, `${metric.type}-${metric.id}`);
      case "raw_document":
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_QueryEditorSpecialMetricRow__WEBPACK_IMPORTED_MODULE_6__.QueryEditorSpecialMetricRow, { name: "Raw Document", metric }, `${metric.type}-${metric.id}`),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { severity: "warning", title: "The 'Raw Document' query type is deprecated." })
        ] });
      default:
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _QueryEditorRow__WEBPACK_IMPORTED_MODULE_5__.QueryEditorRow,
          {
            label: `Metric (${metric.id})`,
            hidden: metric.hide,
            onHideClick: () => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_8__.toggleMetricVisibility)(metric.id)),
            onRemoveClick: totalMetrics > 1 && (() => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_8__.removeMetric)(metric.id))),
            children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MetricEditor__WEBPACK_IMPORTED_MODULE_7__.MetricEditor, { value: metric }),
              _utils__WEBPACK_IMPORTED_MODULE_9__.metricAggregationConfig[metric.type].impliedQueryType === "metrics" && index === 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button,
                {
                  variant: "secondary",
                  fill: "text",
                  icon: "plus",
                  onClick: () => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_8__.addMetric)(nextId)),
                  tooltip: "Add metric",
                  "aria-label": "Add metric"
                }
              )
            ]
          },
          `${metric.type}-${metric.id}`
        );
    }
  }) });
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMetric: () => (/* binding */ addMetric),
/* harmony export */   changeMetricAttribute: () => (/* binding */ changeMetricAttribute),
/* harmony export */   changeMetricField: () => (/* binding */ changeMetricField),
/* harmony export */   changeMetricMeta: () => (/* binding */ changeMetricMeta),
/* harmony export */   changeMetricSetting: () => (/* binding */ changeMetricSetting),
/* harmony export */   changeMetricType: () => (/* binding */ changeMetricType),
/* harmony export */   removeMetric: () => (/* binding */ removeMetric),
/* harmony export */   toggleMetricVisibility: () => (/* binding */ toggleMetricVisibility)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");


const addMetric = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("@metrics/add");
const removeMetric = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("@metrics/remove");
const toggleMetricVisibility = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("@metrics/toggle_visibility");
const changeMetricField = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("@metrics/change_field");
const changeMetricType = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)(
  "@metrics/change_type"
);
const changeMetricAttribute = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)(
  "@metrics/change_attr"
);
const changeMetricSetting = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("@metrics/change_setting");
const changeMetricMeta = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("@metrics/change_meta");


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/state/reducer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _queryDef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/queryDef.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/utils.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/state.ts");
/* harmony import */ var _aggregations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/aggregations.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/utils.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/state/actions.ts");







const reducer = (state, action) => {
  if (_actions__WEBPACK_IMPORTED_MODULE_5__.addMetric.match(action)) {
    return [...state, (0,_queryDef__WEBPACK_IMPORTED_MODULE_0__.defaultMetricAgg)(action.payload)];
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_5__.removeMetric.match(action)) {
    const metricToRemove = state.find((m) => m.id === action.payload);
    const metricsToRemove = [metricToRemove, ...(0,_utils__WEBPACK_IMPORTED_MODULE_4__.getChildren)(metricToRemove, state)];
    const resultingMetrics = state.filter((metric) => !metricsToRemove.some((toRemove) => toRemove.id === metric.id));
    if (resultingMetrics.length === 0) {
      return [(0,_queryDef__WEBPACK_IMPORTED_MODULE_0__.defaultMetricAgg)("1")];
    }
    return resultingMetrics;
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_5__.changeMetricType.match(action)) {
    return state.filter(
      (metric) => (
        // When the new query type is not `metrics` we remove all other metrics from the query
        // leaving only the current one.
        _utils__WEBPACK_IMPORTED_MODULE_4__.metricAggregationConfig[action.payload.type].impliedQueryType === "metrics" ? true : metric.id === action.payload.id
      )
    ).map((metric) => {
      if (metric.id !== action.payload.id) {
        return metric;
      }
      return {
        id: metric.id,
        type: action.payload.type,
        ..._utils__WEBPACK_IMPORTED_MODULE_4__.metricAggregationConfig[action.payload.type].defaults
      };
    });
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_5__.changeMetricField.match(action)) {
    return state.map((metric) => {
      if (metric.id !== action.payload.id) {
        return metric;
      }
      const newMetric = {
        ...metric,
        field: action.payload.field
      };
      if ((0,_aggregations__WEBPACK_IMPORTED_MODULE_3__.isPipelineAggregation)(metric)) {
        return { ...newMetric, pipelineAgg: action.payload.field };
      }
      return newMetric;
    });
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_5__.toggleMetricVisibility.match(action)) {
    return state.map((metric) => {
      if (metric.id !== action.payload) {
        return metric;
      }
      return {
        ...metric,
        hide: !metric.hide
      };
    });
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_5__.changeMetricSetting.match(action)) {
    return state.map((metric) => {
      if (metric.id !== action.payload.metric.id) {
        return metric;
      }
      if ((0,_aggregations__WEBPACK_IMPORTED_MODULE_3__.isMetricAggregationWithSettings)(metric)) {
        const newSettings = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.removeEmpty)({
          ...metric.settings,
          [action.payload.settingName]: action.payload.newValue
        });
        return {
          ...metric,
          settings: {
            ...newSettings
          }
        };
      }
      return metric;
    });
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_5__.changeMetricMeta.match(action)) {
    return state.map((metric) => {
      if (metric.id !== action.payload.metric.id) {
        return metric;
      }
      if ((0,_aggregations__WEBPACK_IMPORTED_MODULE_3__.isMetricAggregationWithMeta)(metric)) {
        return {
          ...metric,
          meta: {
            ...metric.meta,
            [action.payload.meta]: action.payload.newValue
          }
        };
      }
      return metric;
    });
  }
  if (_actions__WEBPACK_IMPORTED_MODULE_5__.changeMetricAttribute.match(action)) {
    return state.map((metric) => {
      if (metric.id !== action.payload.metric.id) {
        return metric;
      }
      return {
        ...metric,
        [action.payload.attribute]: action.payload.newValue
      };
    });
  }
  if (_state__WEBPACK_IMPORTED_MODULE_2__.initQuery.match(action)) {
    if (state && state.length > 0) {
      return state;
    }
    return [(0,_queryDef__WEBPACK_IMPORTED_MODULE_0__.defaultMetricAgg)("1")];
  }
  return state;
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/styles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");


const getStyles = (theme, hidden) => {
  return {
    color: hidden && (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      "&, &:hover, label, a": {
        color: hidden ? theme.colors.text.disabled : theme.colors.text.primary
      }
    })
  };
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getChildren: () => (/* binding */ getChildren),
/* harmony export */   metricAggregationConfig: () => (/* binding */ metricAggregationConfig),
/* harmony export */   pipelineOptions: () => (/* binding */ pipelineOptions)
/* harmony export */ });
/* harmony import */ var _SettingsEditor_BucketScriptSettingsEditor_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/BucketScriptSettingsEditor/utils.ts");
/* harmony import */ var _aggregations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/aggregations.ts");



const metricAggregationConfig = {
  count: {
    label: "Count",
    impliedQueryType: "metrics",
    requiresField: false,
    isPipelineAgg: false,
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: false,
    hasMeta: false,
    supportsInlineScript: false,
    defaults: {}
  },
  avg: {
    label: "Average",
    impliedQueryType: "metrics",
    requiresField: true,
    supportsInlineScript: true,
    supportsMissing: true,
    isPipelineAgg: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    hasMeta: false,
    defaults: {}
  },
  sum: {
    label: "Sum",
    impliedQueryType: "metrics",
    requiresField: true,
    supportsInlineScript: true,
    supportsMissing: true,
    isPipelineAgg: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    hasMeta: false,
    defaults: {}
  },
  max: {
    label: "Max",
    impliedQueryType: "metrics",
    requiresField: true,
    supportsInlineScript: true,
    supportsMissing: true,
    isPipelineAgg: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    hasMeta: false,
    defaults: {}
  },
  min: {
    label: "Min",
    impliedQueryType: "metrics",
    requiresField: true,
    supportsInlineScript: true,
    supportsMissing: true,
    isPipelineAgg: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    hasMeta: false,
    defaults: {}
  },
  extended_stats: {
    label: "Extended Stats",
    impliedQueryType: "metrics",
    requiresField: true,
    supportsMissing: true,
    supportsInlineScript: true,
    isPipelineAgg: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    hasMeta: true,
    defaults: {
      meta: {
        std_deviation_bounds_lower: true,
        std_deviation_bounds_upper: true
      }
    }
  },
  percentiles: {
    label: "Percentiles",
    impliedQueryType: "metrics",
    requiresField: true,
    supportsMissing: true,
    supportsInlineScript: true,
    isPipelineAgg: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    hasMeta: false,
    defaults: {
      settings: {
        percents: ["25", "50", "75", "95", "99"]
      }
    }
  },
  cardinality: {
    label: "Unique Count",
    impliedQueryType: "metrics",
    requiresField: true,
    supportsMissing: true,
    isPipelineAgg: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {}
  },
  moving_avg: {
    // deprecated in 6.4.0, removed in 8.0.0,
    // recommended replacement is moving_fn
    label: "Moving Average",
    impliedQueryType: "metrics",
    requiresField: true,
    isPipelineAgg: true,
    versionRange: "<8.0.0",
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {
      settings: {
        model: "simple",
        window: "5"
      }
    }
  },
  moving_fn: {
    // TODO: Check this
    label: "Moving Function",
    impliedQueryType: "metrics",
    requiresField: true,
    isPipelineAgg: true,
    supportsMultipleBucketPaths: false,
    supportsInlineScript: false,
    supportsMissing: false,
    hasMeta: false,
    hasSettings: true,
    defaults: {}
  },
  derivative: {
    label: "Derivative",
    impliedQueryType: "metrics",
    requiresField: true,
    isPipelineAgg: true,
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {}
  },
  serial_diff: {
    label: "Serial Difference",
    impliedQueryType: "metrics",
    requiresField: true,
    isPipelineAgg: true,
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {
      settings: {
        lag: "1"
      }
    }
  },
  cumulative_sum: {
    label: "Cumulative Sum",
    impliedQueryType: "metrics",
    requiresField: true,
    isPipelineAgg: true,
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {}
  },
  bucket_script: {
    label: "Bucket Script",
    impliedQueryType: "metrics",
    requiresField: false,
    isPipelineAgg: true,
    supportsMissing: false,
    supportsMultipleBucketPaths: true,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {
      pipelineVariables: [(0,_SettingsEditor_BucketScriptSettingsEditor_utils__WEBPACK_IMPORTED_MODULE_0__.defaultPipelineVariable)((0,_SettingsEditor_BucketScriptSettingsEditor_utils__WEBPACK_IMPORTED_MODULE_0__.generatePipelineVariableName)([]))]
    }
  },
  raw_document: {
    label: "Raw Document (deprecated)",
    requiresField: false,
    impliedQueryType: "raw_document",
    isPipelineAgg: false,
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {
      settings: {
        size: "500"
      }
    }
  },
  raw_data: {
    label: "Raw Data",
    requiresField: false,
    impliedQueryType: "raw_data",
    isPipelineAgg: false,
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {
      settings: {
        size: "500"
      }
    }
  },
  logs: {
    label: "Logs",
    requiresField: false,
    isPipelineAgg: false,
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    impliedQueryType: "logs",
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {
      settings: {
        limit: "500"
      }
    }
  },
  top_metrics: {
    label: "Top Metrics",
    impliedQueryType: "metrics",
    requiresField: false,
    isPipelineAgg: false,
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {
      settings: {
        order: "desc"
      }
    }
  },
  rate: {
    label: "Rate",
    impliedQueryType: "metrics",
    requiresField: true,
    isPipelineAgg: false,
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: true,
    hasMeta: false,
    defaults: {}
  }
};
const pipelineOptions = {
  moving_avg: [
    { label: "window", default: 5 },
    { label: "model", default: "simple" },
    { label: "predict" },
    { label: "minimize", default: false }
  ],
  moving_fn: [{ label: "window", default: 5 }, { label: "script" }],
  derivative: [{ label: "unit" }],
  serial_diff: [{ label: "lag" }],
  cumulative_sum: [{ label: "format" }],
  bucket_script: []
};
const getChildren = (metric, metrics) => {
  const children = metrics.filter((m) => {
    if ((0,_aggregations__WEBPACK_IMPORTED_MODULE_1__.isPipelineAggregationWithMultipleBucketPaths)(m)) {
      return m.pipelineVariables?.some((pv) => pv.pipelineAgg === metric.id);
    }
    return (0,_aggregations__WEBPACK_IMPORTED_MODULE_1__.isMetricAggregationWithField)(m) && metric.id === m.field;
  });
  return [...children, ...children.flatMap((child) => getChildren(child, metrics))];
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/QueryEditorRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryEditorRow: () => (/* binding */ QueryEditorRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineSegmentGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





const QueryEditorRow = ({
  children,
  label,
  onRemoveClick,
  onHideClick,
  hidden = false
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineFieldRow, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineSegmentGroup, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineLabel, { width: 17, as: "div", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: label }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: styles.iconWrapper, children: [
        onHideClick && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton,
          {
            name: hidden ? "eye-slash" : "eye",
            onClick: onHideClick,
            size: "sm",
            "aria-pressed": hidden,
            className: styles.icon,
            tooltip: "Hide row"
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton,
          {
            name: "trash-alt",
            size: "sm",
            className: styles.icon,
            onClick: onRemoveClick || lodash__WEBPACK_IMPORTED_MODULE_2__.noop,
            disabled: !onRemoveClick,
            tooltip: "Remove row"
          }
        )
      ] })
    ] }) }),
    children
  ] });
};
const getStyles = (theme) => {
  return {
    iconWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex"
    }),
    icon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.text.secondary,
      marginLeft: theme.spacing(0.25)
    })
  };
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/QueryEditorSpecialMetricRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryEditorSpecialMetricRow: () => (/* binding */ QueryEditorSpecialMetricRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineSegmentGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _MetricAggregationsEditor_SettingsEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/index.tsx");




const QueryEditorSpecialMetricRow = ({ name, metric }) => {
  const previousMetrics = [];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineSegmentGroup, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineLabel, { width: 17, as: "div", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: name }) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MetricAggregationsEditor_SettingsEditor__WEBPACK_IMPORTED_MODULE_4__.SettingsEditor, { metric, previousMetrics })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/QueryTypeSelector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryTypeSelector: () => (/* binding */ QueryTypeSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/hooks/useStatelessReducer.ts");
/* harmony import */ var _ElasticsearchQueryContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/ElasticsearchQueryContext.tsx");
/* harmony import */ var _MetricAggregationsEditor_state_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/state/actions.ts");
/* harmony import */ var _MetricAggregationsEditor_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/utils.ts");







const OPTIONS = [
  { value: "metrics", label: "Metrics" },
  { value: "logs", label: "Logs" },
  { value: "raw_data", label: "Raw Data" },
  { value: "raw_document", label: "Raw Document" }
];
function queryTypeToMetricType(type) {
  switch (type) {
    case "logs":
    case "raw_data":
    case "raw_document":
      return type;
    case "metrics":
      return "count";
    default:
      throw new Error(`invalid query type: ${type}`);
  }
}
const QueryTypeSelector = () => {
  const query = (0,_ElasticsearchQueryContext__WEBPACK_IMPORTED_MODULE_3__.useQuery)();
  const dispatch = (0,_hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const firstMetric = query.metrics?.[0];
  if (firstMetric == null) {
    return null;
  }
  const queryType = _MetricAggregationsEditor_utils__WEBPACK_IMPORTED_MODULE_5__.metricAggregationConfig[firstMetric.type].impliedQueryType;
  const onChange = (newQueryType) => {
    dispatch((0,_MetricAggregationsEditor_state_actions__WEBPACK_IMPORTED_MODULE_4__.changeMetricType)({ id: firstMetric.id, type: queryTypeToMetricType(newQueryType) }));
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.RadioButtonGroup, { fullWidth: false, options: OPTIONS, value: queryType, onChange });
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/SettingsEditorContainer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsEditorContainer: () => (/* binding */ SettingsEditorContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineSegmentGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/styles.ts");






const getStyles = (theme, hidden) => {
  return {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      maxWidth: "500px",
      display: "flex",
      flexDirection: "column"
    }),
    settingsWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "column",
      paddingTop: theme.spacing(0.5)
    }),
    icon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginRight: theme.spacing(0.5)
    }),
    button: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)(
      {
        justifyContent: "flex-start",
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        fontSize: theme.typography.bodySmall.fontSize,
        backgroundColor: theme.colors.background.secondary,
        height: "32px",
        lineHeight: "32px",
        border: "none"
      },
      hidden && {
        color: theme.colors.text.disabled
      }
    )
  };
};
const SettingsEditorContainer = ({ label, children, hidden = false }) => {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useTheme2)();
  const styles = getStyles(theme, hidden);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineSegmentGroup, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.wrapper), children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      "button",
      {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.button, _styles__WEBPACK_IMPORTED_MODULE_6__.segmentStyles),
        onClick: () => setOpen(!open),
        "aria-expanded": open,
        type: "button",
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: open ? "angle-down" : "angle-right", "aria-hidden": "true", className: styles.icon }),
          label
        ]
      }
    ),
    open && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.settingsWrapper, children })
  ] }) });
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElasticSearchQueryField: () => (/* binding */ ElasticSearchQueryField),
/* harmony export */   QueryEditor: () => (/* binding */ QueryEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/time.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/QueryField/QueryField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _hooks_useNextId__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/hooks/useNextId.ts");
/* harmony import */ var _hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/hooks/useStatelessReducer.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/utils.ts");
/* harmony import */ var _BucketAggregationsEditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/index.tsx");
/* harmony import */ var _ElasticsearchQueryContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/ElasticsearchQueryContext.tsx");
/* harmony import */ var _MetricAggregationsEditor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/index.tsx");
/* harmony import */ var _MetricAggregationsEditor_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/utils.ts");
/* harmony import */ var _QueryTypeSelector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/QueryTypeSelector.tsx");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/state.ts");















function useElasticVersion(datasource) {
  const [version, setVersion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    let canceled = false;
    datasource.getDatabaseVersion().then(
      (version2) => {
        if (!canceled) {
          setVersion(version2);
        }
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      canceled = true;
    };
  }, [datasource]);
  return version;
}
const QueryEditor = ({ query, onChange, onRunQuery, datasource, range }) => {
  const elasticVersion = useElasticVersion(datasource);
  const showUnsupportedMessage = elasticVersion != null && !(0,_utils__WEBPACK_IMPORTED_MODULE_12__.isSupportedVersion)(elasticVersion);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _ElasticsearchQueryContext__WEBPACK_IMPORTED_MODULE_14__.ElasticsearchProvider,
    {
      datasource,
      onChange,
      onRunQuery,
      query,
      range: range || (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getDefaultTimeRange)(),
      children: [
        showUnsupportedMessage && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Alert, { title: _utils__WEBPACK_IMPORTED_MODULE_12__.unsupportedVersionMessage }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(QueryEditorForm, { value: query })
      ]
    }
  );
};
const getStyles = (theme) => ({
  root: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex"
  }),
  queryItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    flexGrow: 1,
    margin: theme.spacing(0, 0.5, 0.5, 0)
  })
});
const ElasticSearchQueryField = ({ value, onChange }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.queryItem, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.QueryField, { query: value, onChange, placeholder: "Enter a lucene query", portalOrigin: "elasticsearch" }) });
};
const QueryEditorForm = ({ value }) => {
  const dispatch = (0,_hooks_useStatelessReducer__WEBPACK_IMPORTED_MODULE_11__.useDispatch)();
  const nextId = (0,_hooks_useNextId__WEBPACK_IMPORTED_MODULE_10__.useNextId)();
  const inputId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  const isTimeSeries = (0,_utils__WEBPACK_IMPORTED_MODULE_12__.isTimeSeriesQuery)(value);
  const showBucketAggregationsEditor = value.metrics?.every(
    (metric) => _MetricAggregationsEditor_utils__WEBPACK_IMPORTED_MODULE_16__.metricAggregationConfig[metric.type].impliedQueryType === "metrics"
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.root, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineLabel, { width: 17, children: "Query type" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.queryItem, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_QueryTypeSelector__WEBPACK_IMPORTED_MODULE_17__.QueryTypeSelector, {}) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.root, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineLabel, { width: 17, children: "Lucene Query" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ElasticSearchQueryField, { onChange: (query) => dispatch((0,_state__WEBPACK_IMPORTED_MODULE_18__.changeQuery)(query)), value: value?.query }),
      isTimeSeries && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineField,
        {
          label: "Alias",
          labelWidth: 15,
          tooltip: "Aliasing only works for timeseries queries (when the last group is 'Date Histogram'). For all other query types this field is ignored.",
          htmlFor: inputId,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
            {
              id: inputId,
              placeholder: "Alias Pattern",
              onBlur: (e) => dispatch((0,_state__WEBPACK_IMPORTED_MODULE_18__.changeAliasPattern)(e.currentTarget.value)),
              defaultValue: value.alias
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MetricAggregationsEditor__WEBPACK_IMPORTED_MODULE_15__.MetricAggregationsEditor, { nextId }),
    showBucketAggregationsEditor && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_BucketAggregationsEditor__WEBPACK_IMPORTED_MODULE_13__.BucketAggregationsEditor, { nextId })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/state.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aliasPatternReducer: () => (/* binding */ aliasPatternReducer),
/* harmony export */   changeAliasPattern: () => (/* binding */ changeAliasPattern),
/* harmony export */   changeQuery: () => (/* binding */ changeQuery),
/* harmony export */   initQuery: () => (/* binding */ initQuery),
/* harmony export */   queryReducer: () => (/* binding */ queryReducer)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");


const initQuery = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("init");
const changeQuery = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("change_query");
const changeAliasPattern = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)("change_alias_pattern");
const queryReducer = (prevQuery, action) => {
  if (changeQuery.match(action)) {
    return action.payload;
  }
  if (initQuery.match(action)) {
    return prevQuery || "";
  }
  return prevQuery;
};
const aliasPatternReducer = (prevAliasPattern, action) => {
  if (changeAliasPattern.match(action)) {
    return action.payload;
  }
  if (initQuery.match(action)) {
    return prevAliasPattern || "";
  }
  return prevAliasPattern;
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/QueryEditor/styles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   segmentStyles: () => (/* binding */ segmentStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");


const segmentStyles = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  minWidth: "150px"
});


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/components/hooks/useCreatableSelectPersistedBehaviour.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCreatableSelectPersistedBehaviour: () => (/* binding */ useCreatableSelectPersistedBehaviour)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const hasValue = (searchValue) => ({ value }) => value === searchValue;
const getInitialState = (initialOptions, initialValue) => {
  if (initialValue === void 0 || initialOptions.some(hasValue(initialValue))) {
    return initialOptions;
  }
  return [
    ...initialOptions,
    {
      value: initialValue,
      label: initialValue
    }
  ];
};
const useCreatableSelectPersistedBehaviour = ({ options: initialOptions, value, onChange }) => {
  const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialState(initialOptions, value));
  const addOption = (newValue) => setOptions([...options, { value: newValue, label: newValue }]);
  return {
    onCreateOption: (value2) => {
      addOption(value2);
      onChange({ value: value2 });
    },
    onChange,
    allowCustomValue: true,
    options,
    value
  };
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/configuration/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigEditor: () => (/* binding */ ConfigEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_aws_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/aws-sdk/dist/esm/index.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/DataSourceDescription.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/ConfigSection/ConfigSection.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/Auth.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/types.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/utils.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Connection/ConnectionSettings.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/AdvancedSettings/AdvancedHttpSettings.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/DataSourceSettings/SecureSocksProxySettings.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Divider/Divider.tsx");
/* harmony import */ var _DataLinks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/configuration/DataLinks.tsx");
/* harmony import */ var _ElasticDetails__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/configuration/ElasticDetails.tsx");
/* harmony import */ var _LogsConfig__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/configuration/LogsConfig.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/configuration/utils.ts");











const ConfigEditor = (props) => {
  const { options, onOptionsChange } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_18__.isValidOptions)(options)) {
      onOptionsChange((0,_utils__WEBPACK_IMPORTED_MODULE_18__.coerceOptions)(options));
    }
  }, [onOptionsChange, options]);
  const authProps = (0,_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_7__.convertLegacyAuthProps)({
    config: options,
    onChange: onOptionsChange
  });
  if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_10__.config.sigV4AuthEnabled) {
    authProps.customMethods = [
      {
        id: "custom-sigv4",
        label: "SigV4 auth",
        description: "AWS Signature Version 4 authentication",
        component: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_aws_sdk__WEBPACK_IMPORTED_MODULE_2__.SIGV4ConnectionConfig, { inExperimentalAuthComponent: true, ...props })
      }
    ];
    authProps.selectedMethod = options.jsonData.sigV4Auth ? "custom-sigv4" : authProps.selectedMethod;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    options.access === "direct" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Alert, { title: "Error", severity: "error", children: "Browser access mode in the Elasticsearch datasource is no longer available. Switch to server access mode." }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.DataSourceDescription,
      {
        dataSourceName: "Elasticsearch",
        docsLink: "https://grafana.com/docs/grafana/latest/datasources/elasticsearch",
        hasRequiredFields: false
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Divider, { spacing: 4 }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_8__.ConnectionSettings, { config: options, onChange: onOptionsChange, urlPlaceholder: "http://localhost:9200" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Divider, { spacing: 4 }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.Auth,
      {
        ...authProps,
        onAuthMethodSelect: (method) => {
          onOptionsChange({
            ...options,
            basicAuth: method === _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_6__.AuthMethod.BasicAuth,
            withCredentials: method === _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_6__.AuthMethod.CrossSiteCredentials,
            jsonData: {
              ...options.jsonData,
              sigV4Auth: method === "custom-sigv4",
              oauthPassThru: method === _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_6__.AuthMethod.OAuthForward
            }
          });
        }
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Divider, { spacing: 4 }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.ConfigSection,
      {
        title: "Additional settings",
        description: "Additional settings are optional settings that can be configured for more control over your data source.",
        isCollapsible: true,
        isInitiallyOpen: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { gap: 5, direction: "column", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_9__.AdvancedHttpSettings, { config: options, onChange: onOptionsChange }),
          _grafana_runtime__WEBPACK_IMPORTED_MODULE_10__.config.secureSocksDSProxyEnabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.SecureSocksProxySettings, { options, onOptionsChange }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ElasticDetails__WEBPACK_IMPORTED_MODULE_16__.ElasticDetails, { value: options, onChange: onOptionsChange }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _LogsConfig__WEBPACK_IMPORTED_MODULE_17__.LogsConfig,
            {
              value: options.jsonData,
              onChange: (newValue) => onOptionsChange({
                ...options,
                jsonData: newValue
              })
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _DataLinks__WEBPACK_IMPORTED_MODULE_15__.DataLinks,
            {
              value: options.jsonData.dataLinks,
              onChange: (newValue) => {
                onOptionsChange({
                  ...options,
                  jsonData: {
                    ...options.jsonData,
                    dataLinks: newValue
                  }
                });
              }
            }
          )
        ] })
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/configuration/DataLink.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataLink: () => (/* binding */ DataLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/components/DataSourcePicker.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/DataLinks/DataLinkInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");







const DataLink = (props) => {
  const { value, onChange, onDelete, suggestions, className } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useStyles2)(getStyles);
  const [showInternalLink, setShowInternalLink] = useInternalLink(value.datasourceUid);
  const handleChange = (field) => (event) => {
    onChange({
      ...value,
      [field]: event.currentTarget.value
    });
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.firstRow, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineField,
        {
          label: "Field",
          htmlFor: "elasticsearch-datasource-config-field",
          labelWidth: 12,
          tooltip: "Can be exact field name or a regex pattern that will match on the field name.",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Input,
            {
              type: "text",
              id: "elasticsearch-datasource-config-field",
              value: value.field,
              onChange: handleChange("field"),
              width: 100
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
        {
          variant: "destructive",
          "aria-label": "Remove field",
          icon: "times",
          onClick: (event) => {
            event.preventDefault();
            onDelete();
          }
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.InlineFieldRow, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.urlField, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineLabel, { htmlFor: "elasticsearch-datasource-internal-link", width: 12, children: showInternalLink ? "Query" : "URL" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.DataLinkInput,
          {
            placeholder: showInternalLink ? "${__value.raw}" : "http://example.com/${__value.raw}",
            value: value.url || "",
            onChange: (newValue) => onChange({
              ...value,
              url: newValue
            }),
            suggestions
          }
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.urlDisplayLabelField, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineField,
        {
          label: "URL Label",
          htmlFor: "elasticsearch-datasource-url-label",
          labelWidth: 14,
          tooltip: "Use to override the button label.",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Input,
            {
              type: "text",
              id: "elasticsearch-datasource-url-label",
              value: value.urlDisplayLabel,
              onChange: handleChange("urlDisplayLabel")
            }
          )
        }
      ) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.row, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineField, { label: "Internal link", labelWidth: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.InlineSwitch,
        {
          label: "Internal link",
          value: showInternalLink || false,
          onChange: () => {
            if (showInternalLink) {
              onChange({
                ...value,
                datasourceUid: void 0
              });
            }
            setShowInternalLink(!showInternalLink);
          }
        }
      ) }),
      showInternalLink && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.DataSourcePicker,
        {
          tracing: true,
          onChange: (ds) => {
            onChange({
              ...value,
              datasourceUid: ds.uid
            });
          },
          current: value.datasourceUid
        }
      )
    ] })
  ] });
};
function useInternalLink(datasourceUid) {
  const [showInternalLink, setShowInternalLink] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!!datasourceUid);
  const previousUid = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(datasourceUid);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!previousUid && datasourceUid && !showInternalLink) {
      setShowInternalLink(true);
    }
    if (previousUid && !datasourceUid && showInternalLink) {
      setShowInternalLink(false);
    }
  }, [previousUid, datasourceUid, showInternalLink]);
  return [showInternalLink, setShowInternalLink];
}
const getStyles = () => ({
  firstRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex"
  }),
  nameField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    flex: 2
  }),
  regexField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    flex: 3
  }),
  row: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    alignItems: "baseline"
  }),
  urlField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flex: 1
  }),
  urlDisplayLabelField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    flex: 1
  })
});


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/configuration/DataLinks.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataLinks: () => (/* binding */ DataLinks)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/utils/dataLinks.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/dataLink.ts");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/ConfigSection/ConfigSubSection.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/ConfigSection/ConfigDescriptionLink.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _DataLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/configuration/DataLink.tsx");







const getStyles = (theme) => {
  return {
    addButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginRight: "10px"
    }),
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginBottom: theme.spacing(2)
    }),
    dataLink: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginBottom: theme.spacing(1)
    })
  };
};
const DataLinks = (props) => {
  const { value, onChange } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.ConfigSubSection,
    {
      title: "Data links",
      description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.ConfigDescriptionLink,
        {
          description: "Add links to existing fields. Links will be shown in log row details next to the field value.",
          suffix: "elasticsearch/#data-links",
          feature: "Elasticsearch data links"
        }
      ),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
        value && value.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "gf-form-group", children: value.map((field, index) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _DataLink__WEBPACK_IMPORTED_MODULE_8__.DataLink,
            {
              className: styles.dataLink,
              value: field,
              onChange: (newField) => {
                const newDataLinks = [...value];
                newDataLinks.splice(index, 1, newField);
                onChange(newDataLinks);
              },
              onDelete: () => {
                const newDataLinks = [...value];
                newDataLinks.splice(index, 1);
                onChange(newDataLinks);
              },
              suggestions: [
                {
                  value: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.DataLinkBuiltInVars.valueRaw,
                  label: "Raw value",
                  documentation: "Raw value of the field",
                  origin: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.VariableOrigin.Value
                }
              ]
            },
            index
          );
        }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
          {
            type: "button",
            variant: "secondary",
            className: styles.addButton,
            icon: "plus",
            onClick: (event) => {
              event.preventDefault();
              const newDataLinks = [...value || [], { field: "", url: "" }];
              onChange(newDataLinks);
            },
            children: "Add"
          }
        )
      ] })
    }
  );
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/configuration/ElasticDetails.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElasticDetails: () => (/* binding */ ElasticDetails),
/* harmony export */   defaultMaxConcurrentShardRequests: () => (/* binding */ defaultMaxConcurrentShardRequests)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/ConfigSection/ConfigSubSection.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/ConfigSection/ConfigDescriptionLink.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");




const indexPatternTypes = [
  { label: "No pattern", value: "none" },
  { label: "Hourly", value: "Hourly", example: "[logstash-]YYYY.MM.DD.HH" },
  { label: "Daily", value: "Daily", example: "[logstash-]YYYY.MM.DD" },
  { label: "Weekly", value: "Weekly", example: "[logstash-]GGGG.WW" },
  { label: "Monthly", value: "Monthly", example: "[logstash-]YYYY.MM" },
  { label: "Yearly", value: "Yearly", example: "[logstash-]YYYY" }
];
const ElasticDetails = ({ value, onChange }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.ConfigSubSection,
    {
      title: "Elasticsearch details",
      description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.ConfigDescriptionLink,
        {
          description: "Specific settings for the Elasticsearch data source.",
          suffix: "elasticsearch/#index-settings",
          feature: "Elasticsearch details"
        }
      ),
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField,
          {
            label: "Index name",
            htmlFor: "es_config_indexName",
            labelWidth: 29,
            tooltip: "Name of your Elasticsearch index. You can use a time pattern, such as YYYY.MM.DD, or a wildcard for the index name.",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
              {
                id: "es_config_indexName",
                value: value.jsonData.index ?? (value.database || ""),
                onChange: indexChangeHandler(value, onChange),
                width: 24,
                placeholder: "es-index-name",
                required: true
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField,
          {
            label: "Pattern",
            htmlFor: "es_config_indexPattern",
            labelWidth: 29,
            tooltip: "If you're using a pattern for your index, select the type, or no pattern.",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select,
              {
                inputId: "es_config_indexPattern",
                value: indexPatternTypes.find(
                  (pattern) => pattern.value === (value.jsonData.interval === void 0 ? "none" : value.jsonData.interval)
                ),
                options: indexPatternTypes,
                onChange: intervalHandler(value, onChange),
                width: 24
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField,
          {
            label: "Time field name",
            htmlFor: "es_config_timeField",
            labelWidth: 29,
            tooltip: "Name of your time field. Defaults to @timestamp.",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
              {
                id: "es_config_timeField",
                value: value.jsonData.timeField || "",
                onChange: jsonDataChangeHandler("timeField", value, onChange),
                width: 24,
                placeholder: "@timestamp",
                required: true
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField,
          {
            label: "Max concurrent Shard Requests",
            htmlFor: "es_config_shardRequests",
            labelWidth: 29,
            tooltip: "Maximum number of concurrent shards a search request can hit per node. Defaults to 5.",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
              {
                id: "es_config_shardRequests",
                value: value.jsonData.maxConcurrentShardRequests || "",
                onChange: jsonDataChangeHandler("maxConcurrentShardRequests", value, onChange),
                width: 24
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField,
          {
            label: "Min time interval",
            htmlFor: "es_config_minTimeInterval",
            labelWidth: 29,
            tooltip: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
              "A lower limit for the auto group by time interval. Recommended to be set to write frequency, for example",
              " ",
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: "1m" }),
              " if your data is written every minute."
            ] }),
            error: "Value is not valid, you can use number with time unit specifier: y, M, w, d, h, m, s",
            invalid: !!value.jsonData.timeInterval && !/^\d+(ms|[Mwdhmsy])$/.test(value.jsonData.timeInterval),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
              {
                id: "es_config_minTimeInterval",
                value: value.jsonData.timeInterval || "",
                onChange: jsonDataChangeHandler("timeInterval", value, onChange),
                width: 24,
                placeholder: "10s"
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField,
          {
            label: "Include Frozen Indices",
            htmlFor: "es_config_frozenIndices",
            labelWidth: 29,
            tooltip: "Include frozen indices in searches.",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineSwitch,
              {
                id: "es_config_frozenIndices",
                value: value.jsonData.includeFrozen ?? false,
                onChange: jsonDataSwitchChangeHandler("includeFrozen", value, onChange)
              }
            )
          }
        )
      ]
    }
  );
};
const indexChangeHandler = (value, onChange) => (event) => {
  onChange({
    ...value,
    database: "",
    jsonData: {
      ...value.jsonData,
      index: event.currentTarget.value
    }
  });
};
const jsonDataChangeHandler = (key, value, onChange) => (event) => {
  onChange({
    ...value,
    jsonData: {
      ...value.jsonData,
      [key]: event.currentTarget.value
    }
  });
};
const jsonDataSwitchChangeHandler = (key, value, onChange) => (event) => {
  onChange({
    ...value,
    jsonData: {
      ...value.jsonData,
      [key]: event.currentTarget.checked
    }
  });
};
const intervalHandler = (value, onChange) => (option) => {
  const newInterval = option.value === "none" ? void 0 : option.value;
  const currentIndex = value.jsonData.index ?? value.database;
  if (!currentIndex || currentIndex.length === 0 || currentIndex.startsWith("[logstash-]")) {
    let newDatabase = "";
    if (newInterval !== void 0) {
      const pattern = indexPatternTypes.find((pattern2) => pattern2.value === newInterval);
      if (pattern) {
        newDatabase = pattern.example ?? "";
      }
    }
    onChange({
      ...value,
      database: "",
      jsonData: {
        ...value.jsonData,
        index: newDatabase,
        interval: newInterval
      }
    });
  } else {
    onChange({
      ...value,
      jsonData: {
        ...value.jsonData,
        interval: newInterval
      }
    });
  }
};
function defaultMaxConcurrentShardRequests() {
  return 5;
}


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/configuration/LogsConfig.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogsConfig: () => (/* binding */ LogsConfig)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/ConfigSection/ConfigSubSection.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/ConfigSection/ConfigDescriptionLink.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");




const LogsConfig = (props) => {
  const { value, onChange } = props;
  const changeHandler = (key) => (event) => {
    onChange({
      ...value,
      [key]: event.currentTarget.value
    });
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.ConfigSubSection,
    {
      title: "Logs",
      description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.ConfigDescriptionLink,
        {
          description: "Configure which fields the data source uses for log messages and log levels.",
          suffix: "elasticsearch/#logs",
          feature: "Elasticsearch log fields"
        }
      ),
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField,
          {
            label: "Message field name",
            labelWidth: 22,
            tooltip: "Configure the field to be used for log messages.",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input,
              {
                id: "es_logs-config_logMessageField",
                value: value.logMessageField,
                onChange: changeHandler("logMessageField"),
                placeholder: "_source",
                width: 24
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField,
          {
            label: "Level field name",
            labelWidth: 22,
            tooltip: "Configure the field that determines the level of each log message.",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input,
              {
                id: "es_logs-config_logLevelField",
                value: value.logLevelField,
                onChange: changeHandler("logLevelField"),
                width: 24
              }
            )
          }
        )
      ]
    }
  );
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/configuration/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coerceOptions: () => (/* binding */ coerceOptions),
/* harmony export */   isValidOptions: () => (/* binding */ isValidOptions)
/* harmony export */ });
/* harmony import */ var _ElasticDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/configuration/ElasticDetails.tsx");


const coerceOptions = (options) => {
  return {
    ...options,
    jsonData: {
      ...options.jsonData,
      timeField: options.jsonData.timeField || "@timestamp",
      maxConcurrentShardRequests: options.jsonData.maxConcurrentShardRequests || (0,_ElasticDetails__WEBPACK_IMPORTED_MODULE_0__.defaultMaxConcurrentShardRequests)(),
      logMessageField: options.jsonData.logMessageField || "",
      logLevelField: options.jsonData.logLevelField || "",
      includeFrozen: options.jsonData.includeFrozen ?? false
    }
  };
};
const isValidOptions = (options) => {
  return (
    // timeField should not be empty or nullish
    !!options.jsonData.timeField && // maxConcurrentShardRequests should be a number AND greater than 0
    !!options.jsonData.maxConcurrentShardRequests && // message & level fields should be defined
    options.jsonData.logMessageField !== void 0 && options.jsonData.logLevelField !== void 0
  );
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElasticDatasource: () => (/* binding */ ElasticDatasource),
/* harmony export */   REF_ID_STARTER_LOG_SAMPLE: () => (/* binding */ REF_ID_STARTER_LOG_SAMPLE),
/* harmony export */   REF_ID_STARTER_LOG_VOLUME: () => (/* binding */ REF_ID_STARTER_LOG_VOLUME),
/* harmony export */   enhanceDataFrameWithDataLinks: () => (/* binding */ enhanceDataFrameWithDataLinks)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/generate.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/first.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/skipWhile.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/throwIfEmpty.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/semver/index.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-data/src/datetime/rangeutil.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-data/src/datetime/moment_wrapper.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-data/src/types/app.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-data/src/types/time.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-data/src/types/logs.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./packages/grafana-runtime/src/services/dataSourceSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");
/* harmony import */ var _IndexPattern__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/IndexPattern.ts");
/* harmony import */ var _LanguageProvider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/LanguageProvider.ts");
/* harmony import */ var _QueryBuilder__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/QueryBuilder.ts");
/* harmony import */ var _components_QueryEditor_AnnotationQueryEditor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/AnnotationQueryEditor.tsx");
/* harmony import */ var _components_QueryEditor_BucketAggregationsEditor_aggregations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/aggregations.ts");
/* harmony import */ var _components_QueryEditor_BucketAggregationsEditor_utils__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/utils.ts");
/* harmony import */ var _components_QueryEditor_MetricAggregationsEditor_aggregations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/aggregations.ts");
/* harmony import */ var _components_QueryEditor_MetricAggregationsEditor_utils__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/utils.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/guards.ts");
/* harmony import */ var _modifyQuery__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/modifyQuery.ts");
/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/tracking.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/utils.ts");




















const REF_ID_STARTER_LOG_VOLUME = "log-volume-";
const REF_ID_STARTER_LOG_SAMPLE = "log-sample-";
const ELASTIC_META_FIELDS = [
  "_index",
  "_type",
  "_id",
  "_source",
  "_size",
  "_field_names",
  "_ignored",
  "_routing",
  "_meta"
];
class ElasticDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_21__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_20__.getTemplateSrv)()) {
    super(instanceSettings);
    this.templateSrv = templateSrv;
    /**
     * Part of `DataSourceWithLogsContextSupport`, used to retrieve log context for a log row.
     * @returns A promise that resolves to an object containing the log context data as DataFrames.
     */
    this.getLogRowContext = async (row, options) => {
      const contextRequest = this.makeLogContextDataRequest(row, options);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.lastValueFrom)(
        this.query(contextRequest).pipe(
          (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => {
            const error = {
              message: "Error during context query. Please check JS console logs.",
              status: err.status,
              statusText: err.statusText
            };
            throw error;
          })
        )
      );
    };
    // private method used in the `getLogRowContext` to create a log context data request.
    this.makeLogContextDataRequest = (row, options) => {
      const direction = options?.direction || _grafana_data__WEBPACK_IMPORTED_MODULE_17__.LogRowContextQueryDirection.Backward;
      const logQuery = {
        type: "logs",
        id: "1",
        settings: {
          limit: options?.limit ? options?.limit.toString() : "10",
          // Sorting of results in the context query
          sortDirection: direction === _grafana_data__WEBPACK_IMPORTED_MODULE_17__.LogRowContextQueryDirection.Backward ? "desc" : "asc",
          // Used to get the next log lines before/after the current log line using sort field of selected log line
          searchAfter: row.dataFrame.fields.find((f) => f.name === "sort")?.values[row.rowIndex] ?? [row.timeEpochMs]
        }
      };
      const query = {
        refId: `log-context-${row.dataFrame.refId}-${direction}`,
        metrics: [logQuery],
        query: ""
      };
      const timeRange = createContextTimeRange(row.timeEpochMs, direction, this.intervalPattern);
      const range = {
        from: timeRange.from,
        to: timeRange.to,
        raw: timeRange
      };
      const interval = _grafana_data__WEBPACK_IMPORTED_MODULE_13__.calculateInterval(range, 1);
      const contextRequest = {
        requestId: `log-context-request-${row.dataFrame.refId}-${options?.direction}`,
        targets: [query],
        interval: interval.interval,
        intervalMs: interval.intervalMs,
        range,
        scopedVars: {},
        timezone: "UTC",
        app: _grafana_data__WEBPACK_IMPORTED_MODULE_15__.CoreApp.Explore,
        startTime: Date.now(),
        hideFromInspector: true
      };
      return contextRequest;
    };
    this.basicAuth = instanceSettings.basicAuth;
    this.withCredentials = instanceSettings.withCredentials;
    this.url = instanceSettings.url;
    this.name = instanceSettings.name;
    this.isProxyAccess = instanceSettings.access === "proxy";
    const settingsData = instanceSettings.jsonData || {};
    this.index = settingsData.index ?? instanceSettings.database ?? "";
    this.timeField = settingsData.timeField;
    this.indexPattern = new _IndexPattern__WEBPACK_IMPORTED_MODULE_22__.IndexPattern(this.index, settingsData.interval);
    this.intervalPattern = settingsData.interval;
    this.interval = settingsData.timeInterval;
    this.maxConcurrentShardRequests = settingsData.maxConcurrentShardRequests;
    this.queryBuilder = new _QueryBuilder__WEBPACK_IMPORTED_MODULE_24__.ElasticQueryBuilder({
      timeField: this.timeField
    });
    this.logLevelField = settingsData.logLevelField || "";
    this.dataLinks = settingsData.dataLinks || [];
    this.includeFrozen = settingsData.includeFrozen ?? false;
    this.databaseVersion = null;
    this.annotations = {
      QueryEditor: _components_QueryEditor_AnnotationQueryEditor__WEBPACK_IMPORTED_MODULE_25__.ElasticsearchAnnotationsQueryEditor
    };
    if (this.logLevelField === "") {
      this.logLevelField = void 0;
    }
    this.languageProvider = new _LanguageProvider__WEBPACK_IMPORTED_MODULE_23__["default"](this);
  }
  getResourceRequest(path, params, options) {
    return this.getResource(path, params, options);
  }
  postResourceRequest(path, data, options) {
    const resourceOptions = options ?? {};
    resourceOptions.headers = resourceOptions.headers ?? {};
    resourceOptions.headers["content-type"] = "application/x-ndjson";
    return this.postResource(path, data, resourceOptions);
  }
  /**
   * Implemented as part of DataSourceWithQueryImportSupport.
   * Imports queries from AbstractQuery objects when switching between different data source types.
   * @returns A Promise that resolves to an array of ES queries.
   */
  async importFromAbstractQueries(abstractQueries) {
    return abstractQueries.map((abstractQuery) => this.languageProvider.importFromAbstractQuery(abstractQuery));
  }
  /**
   * Sends a GET request to the specified url on the newest matching and available index.
   *
   * When multiple indices span the provided time range, the request is sent starting from the newest index,
   * and then going backwards until an index is found.
   */
  requestAllIndices(range = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_16__.getDefaultTimeRange)()) {
    let indexList = this.indexPattern.getIndexList(range.from, range.to);
    if (!Array.isArray(indexList)) {
      indexList = [this.indexPattern.getIndexForToday()];
    }
    const url = _grafana_runtime__WEBPACK_IMPORTED_MODULE_18__.config.featureToggles.elasticsearchCrossClusterSearch ? "_field_caps" : "_mapping";
    const indexUrlList = indexList.map((index) => {
      index = index.replace(/\/$/, "");
      if (index === "") {
        return url;
      }
      return `${index}/${url}`;
    });
    const maxTraversals = 7;
    const listLen = indexUrlList.length;
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.generate)({
      initialState: 0,
      condition: (i) => i < Math.min(listLen, maxTraversals),
      iterate: (i) => i + 1
    }).pipe(
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mergeMap)((index) => {
        const path = indexUrlList[listLen - index - 1];
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.getResource(path)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({ err })));
      }),
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.skipWhile)((resp) => resp?.err?.status === 404),
      // skip all requests that fail because missing Elastic index
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.throwIfEmpty)(() => "Could not find an available index for this time range."),
      // when i === Math.min(listLen, maxTraversals) generate will complete but without emitting any values which means we didn't find a valid index
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.first)(),
      // take the first value that isn't skipped
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((resp) => {
        if (resp.err) {
          throw resp.err;
        }
        return resp;
      })
    );
  }
  /**
   * Implemented as part of the DataSourceAPI. It allows the datasource to serve as a source of annotations for a dashboard.
   * @returns A promise that resolves to an array of AnnotationEvent objects representing the annotations for the dashboard.
   * @todo This is deprecated and it is recommended to use the `AnnotationSupport` feature for annotations.
   */
  annotationQuery(options) {
    const payload = this.prepareAnnotationRequest(options);
    (0,_tracking__WEBPACK_IMPORTED_MODULE_32__.trackAnnotationQuery)(options.annotation);
    const annotationObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.postResourceRequest("_msearch", payload));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.lastValueFrom)(
      annotationObservable.pipe(
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((res) => {
          if (!(0,_types__WEBPACK_IMPORTED_MODULE_33__.isElasticsearchResponseWithHits)(res)) {
            return [];
          }
          const hits = res?.responses[0].hits?.hits ?? [];
          return this.processHitsToAnnotationEvents(options.annotation, hits);
        })
      )
    );
  }
  // Private method used in the `annotationQuery` to prepare the payload for the Elasticsearch annotation request
  prepareAnnotationRequest(options) {
    const annotation = options.annotation;
    const timeField = annotation.timeField || "@timestamp";
    const timeEndField = annotation.timeEndField || null;
    const dashboard = options.dashboard;
    const adhocVariables = dashboard.getVariables().filter((v) => v.type === "adhoc");
    const annotationRelatedVariables = adhocVariables.filter((v) => v.datasource?.uid === annotation.datasource.uid);
    const filters = annotationRelatedVariables.map((v) => v.filters).flat();
    const queryString = annotation.query ?? annotation.target?.query ?? "";
    const dateRanges = [];
    const rangeStart = {};
    rangeStart[timeField] = {
      from: options.range.from.valueOf(),
      to: options.range.to.valueOf(),
      format: "epoch_millis"
    };
    dateRanges.push({ range: rangeStart });
    if (timeEndField) {
      const rangeEnd = {};
      rangeEnd[timeEndField] = {
        from: options.range.from.valueOf(),
        to: options.range.to.valueOf(),
        format: "epoch_millis"
      };
      dateRanges.push({ range: rangeEnd });
    }
    const queryInterpolated = this.interpolateLuceneQuery(queryString);
    const finalQuery = this.addAdHocFilters(queryInterpolated, filters);
    const query = {
      bool: {
        filter: [
          {
            bool: {
              should: dateRanges,
              minimum_should_match: 1
            }
          }
        ]
      }
    };
    if (finalQuery) {
      query.bool.filter.push({
        query_string: {
          query: finalQuery
        }
      });
    }
    const data = {
      query,
      size: 1e4
    };
    const header = {
      search_type: "query_then_fetch",
      ignore_unavailable: true
    };
    if (annotation.index) {
      header.index = annotation.index;
    } else {
      header.index = this.indexPattern.getIndexList(options.range.from, options.range.to);
    }
    const payload = JSON.stringify(header) + "\n" + JSON.stringify(data) + "\n";
    return payload;
  }
  // Private method used in the `annotationQuery` to process Elasticsearch hits into AnnotationEvents
  processHitsToAnnotationEvents(annotation, hits) {
    const timeField = annotation.timeField || "@timestamp";
    const timeEndField = annotation.timeEndField || null;
    const textField = annotation.textField || "tags";
    const tagsField = annotation.tagsField || null;
    const list = [];
    const getFieldFromSource = (source, fieldName) => {
      if (!fieldName) {
        return;
      }
      const fieldNames = fieldName.split(".");
      let fieldValue = source;
      for (let i = 0; i < fieldNames.length; i++) {
        fieldValue = fieldValue[fieldNames[i]];
        if (!fieldValue) {
          return "";
        }
      }
      return fieldValue;
    };
    for (let i = 0; i < hits.length; i++) {
      const source = hits[i]._source;
      let time = getFieldFromSource(source, timeField);
      if (typeof hits[i].fields !== "undefined") {
        const fields = hits[i].fields;
        if (typeof fields === "object" && ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(fields[timeField]) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(fields[timeField]))) {
          time = fields[timeField];
        }
      }
      const event = {
        annotation,
        time: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_14__.toUtc)(time).valueOf(),
        text: getFieldFromSource(source, textField)
      };
      if (timeEndField) {
        const timeEnd = getFieldFromSource(source, timeEndField);
        if (timeEnd) {
          event.timeEnd = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_14__.toUtc)(timeEnd).valueOf();
        }
      }
      if (annotation.titleField) {
        const title = getFieldFromSource(source, annotation.titleField);
        if (title) {
          event.text = title + "\n" + event.text;
        }
      }
      const tags = getFieldFromSource(source, tagsField);
      if (typeof tags === "string") {
        event.tags = tags.split(",");
      } else {
        event.tags = tags;
      }
      list.push(event);
    }
    return list;
  }
  // Replaces variables in a Lucene query string
  interpolateLuceneQuery(queryString, scopedVars) {
    return this.templateSrv.replace(queryString, scopedVars, "lucene");
  }
  /**
   * Implemented as a part of DataSourceApi. Interpolates variables and adds ad hoc filters to a list of ES queries.
   * @returns An array of ES queries with interpolated variables and ad hoc filters using `applyTemplateVariables`.
   */
  interpolateVariablesInQueries(queries, scopedVars, filters) {
    return queries.map((q) => this.applyTemplateVariables(q, scopedVars, filters));
  }
  // Private method used in `getTerms` to get the header for the Elasticsearch query
  getQueryHeader(searchType, timeFrom, timeTo) {
    const queryHeader = {
      search_type: searchType,
      ignore_unavailable: true,
      index: this.indexPattern.getIndexList(timeFrom, timeTo)
    };
    return JSON.stringify(queryHeader);
  }
  /**
   * Implemented as part of DataSourceApi. Converts a ES query to a simple text string.
   * Used, for example, in Query history.
   * @returns A text representation of the query.
   */
  getQueryDisplayText(query) {
    const metricAggs = query.metrics;
    const bucketAggs = query.bucketAggs;
    let text = "";
    if (query.query) {
      text += "Query: " + query.query + ", ";
    }
    text += "Metrics: ";
    text += metricAggs?.reduce((acc, metric) => {
      const metricConfig = _components_QueryEditor_MetricAggregationsEditor_utils__WEBPACK_IMPORTED_MODULE_29__.metricAggregationConfig[metric.type];
      let text2 = metricConfig.label + "(";
      if ((0,_components_QueryEditor_MetricAggregationsEditor_aggregations__WEBPACK_IMPORTED_MODULE_28__.isMetricAggregationWithField)(metric)) {
        text2 += metric.field;
      }
      if ((0,_components_QueryEditor_MetricAggregationsEditor_aggregations__WEBPACK_IMPORTED_MODULE_28__.isPipelineAggregationWithMultipleBucketPaths)(metric)) {
        text2 += (0,_utils__WEBPACK_IMPORTED_MODULE_34__.getScriptValue)(metric).replace(new RegExp("params.", "g"), "");
      }
      text2 += "), ";
      return `${acc} ${text2}`;
    }, "");
    text += bucketAggs?.reduce((acc, bucketAgg, index) => {
      const bucketConfig = _components_QueryEditor_BucketAggregationsEditor_utils__WEBPACK_IMPORTED_MODULE_27__.bucketAggregationConfig[bucketAgg.type];
      let text2 = "";
      if (index === 0) {
        text2 += " Group by: ";
      }
      text2 += bucketConfig.label + "(";
      if ((0,_components_QueryEditor_BucketAggregationsEditor_aggregations__WEBPACK_IMPORTED_MODULE_26__.isBucketAggregationWithField)(bucketAgg)) {
        text2 += bucketAgg.field;
      }
      return `${acc} ${text2}), `;
    }, "");
    if (query.alias) {
      text += "Alias: " + query.alias;
    }
    return text;
  }
  /**
   * Implemented for DataSourceWithSupplementaryQueriesSupport.
   * It generates a DataQueryRequest for a specific supplementary query type.
   * @returns A DataQueryRequest for the supplementary queries or undefined if not supported.
   */
  getSupplementaryRequest(type, request) {
    switch (type) {
      case _grafana_data__WEBPACK_IMPORTED_MODULE_17__.SupplementaryQueryType.LogsVolume:
        return this.getLogsVolumeDataProvider(request);
      case _grafana_data__WEBPACK_IMPORTED_MODULE_17__.SupplementaryQueryType.LogsSample:
        return this.getLogsSampleDataProvider(request);
      default:
        return void 0;
    }
  }
  /**
   * Implemented for DataSourceWithSupplementaryQueriesSupport.
   * It returns the supplementary types that the data source supports.
   * @returns An array of supported supplementary query types.
   */
  getSupportedSupplementaryQueryTypes() {
    return [_grafana_data__WEBPACK_IMPORTED_MODULE_17__.SupplementaryQueryType.LogsVolume, _grafana_data__WEBPACK_IMPORTED_MODULE_17__.SupplementaryQueryType.LogsSample];
  }
  /**
   * Implemented for DataSourceWithSupplementaryQueriesSupport.
   * It retrieves supplementary queries based on the provided options and ES query.
   * @returns A supplemented ES query or undefined if unsupported.
   */
  getSupplementaryQuery(options, query) {
    let isQuerySuitable = false;
    if (query.hide) {
      return void 0;
    }
    switch (options.type) {
      case _grafana_data__WEBPACK_IMPORTED_MODULE_17__.SupplementaryQueryType.LogsVolume:
        isQuerySuitable = !!(query.metrics?.length === 1 && query.metrics[0].type === "logs");
        if (!isQuerySuitable) {
          return void 0;
        }
        const bucketAggs = [];
        const timeField = this.timeField ?? "@timestamp";
        if (this.logLevelField) {
          bucketAggs.push({
            id: "2",
            type: "terms",
            settings: {
              min_doc_count: "0",
              size: "0",
              order: "desc",
              orderBy: "_count",
              missing: _grafana_data__WEBPACK_IMPORTED_MODULE_17__.LogLevel.unknown
            },
            field: this.logLevelField
          });
        }
        bucketAggs.push({
          id: "3",
          type: "date_histogram",
          settings: {
            interval: "auto",
            min_doc_count: "0",
            trimEdges: "0"
          },
          field: timeField
        });
        return {
          refId: `${REF_ID_STARTER_LOG_VOLUME}${query.refId}`,
          query: query.query,
          metrics: [{ type: "count", id: "1" }],
          timeField,
          bucketAggs
        };
      case _grafana_data__WEBPACK_IMPORTED_MODULE_17__.SupplementaryQueryType.LogsSample:
        isQuerySuitable = (0,_utils__WEBPACK_IMPORTED_MODULE_34__.isTimeSeriesQuery)(query);
        if (!isQuerySuitable) {
          return void 0;
        }
        if (options.limit) {
          return {
            refId: `${REF_ID_STARTER_LOG_SAMPLE}${query.refId}`,
            query: query.query,
            metrics: [{ type: "logs", id: "1", settings: { limit: options.limit.toString() } }]
          };
        }
        return {
          refId: `${REF_ID_STARTER_LOG_SAMPLE}${query.refId}`,
          query: query.query,
          metrics: [{ type: "logs", id: "1" }]
        };
      default:
        return void 0;
    }
  }
  /**
   * Private method used in the `getDataProvider` for DataSourceWithSupplementaryQueriesSupport, specifically for Logs volume queries.
   * @returns An Observable of DataQueryResponse or undefined if no suitable queries are found.
   */
  getLogsVolumeDataProvider(request) {
    const logsVolumeRequest = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(request);
    const targets = logsVolumeRequest.targets.map((target) => this.getSupplementaryQuery({ type: _grafana_data__WEBPACK_IMPORTED_MODULE_17__.SupplementaryQueryType.LogsVolume }, target)).filter((query) => !!query);
    if (!targets.length) {
      return void 0;
    }
    return { ...logsVolumeRequest, targets };
  }
  /**
   * Private method used in the `getDataProvider` for DataSourceWithSupplementaryQueriesSupport, specifically for Logs sample queries.
   * @returns An Observable of DataQueryResponse or undefined if no suitable queries are found.
   */
  getLogsSampleDataProvider(request) {
    const logsSampleRequest = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(request);
    const targets = logsSampleRequest.targets;
    const queries = targets.map((query) => {
      return this.getSupplementaryQuery({ type: _grafana_data__WEBPACK_IMPORTED_MODULE_17__.SupplementaryQueryType.LogsSample, limit: 100 }, query);
    });
    const elasticQueries = queries.filter((query) => !!query);
    if (!elasticQueries.length) {
      return void 0;
    }
    return { ...logsSampleRequest, targets: elasticQueries };
  }
  /**
   * Required by DataSourceApi. It executes queries based on the provided DataQueryRequest.
   * @returns An Observable of DataQueryResponse containing the query results.
   */
  query(request) {
    const start = /* @__PURE__ */ new Date();
    return super.query(request).pipe(
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)((response) => (0,_tracking__WEBPACK_IMPORTED_MODULE_32__.trackQuery)(response, request, start)),
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((response) => {
        response.data.forEach((dataFrame) => {
          enhanceDataFrameWithDataLinks(dataFrame, this.dataLinks);
        });
        return response;
      })
    );
  }
  /**
   * Filters out queries that are hidden. Used when running queries through backend.
   * It is called from DatasourceWithBackend.
   * @returns `true` if the query is not hidden.
   */
  filterQuery(query) {
    if (query.hide) {
      return false;
    }
    return true;
  }
  // Private method used in the `getFields` to check if a field is a metadata field.
  isMetadataField(fieldName) {
    return ELASTIC_META_FIELDS.includes(fieldName);
  }
  /**
   * Get the list of the fields to display in query editor or used for example in getTagKeys.
   * @todo instead of being a string, this could be a custom type representing all the elastic types
   * @fixme This doesn't seem to return actual MetricFindValues, we should either change the return type
   * or fix the implementation.
   */
  getFields(type, range) {
    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_18__.config.featureToggles.elasticsearchCrossClusterSearch) {
      return this.getFieldsCrossCluster(type, range);
    }
    const typeMap = {
      float: "number",
      double: "number",
      integer: "number",
      long: "number",
      date: "date",
      date_nanos: "date",
      string: "string",
      text: "string",
      scaled_float: "number",
      nested: "nested",
      histogram: "number"
    };
    return this.requestAllIndices(range).pipe(
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((result) => {
        const shouldAddField = (obj, key) => {
          if (this.isMetadataField(key)) {
            return false;
          }
          if (!type || type.length === 0) {
            return true;
          }
          return type.includes(obj.type) || type.includes(typeMap[obj.type]);
        };
        const fieldNameParts = [];
        const fields = {};
        function getFieldsRecursively(obj) {
          for (const key in obj) {
            const subObj = obj[key];
            if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isObject)(subObj.properties)) {
              fieldNameParts.push(key);
              getFieldsRecursively(subObj.properties);
            }
            if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isObject)(subObj.fields)) {
              fieldNameParts.push(key);
              getFieldsRecursively(subObj.fields);
            }
            if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(subObj.type)) {
              const fieldName = fieldNameParts.concat(key).join(".");
              if (shouldAddField(subObj, key)) {
                fields[fieldName] = {
                  text: fieldName,
                  type: subObj.type
                };
              }
            }
          }
          fieldNameParts.pop();
        }
        for (const indexName in result) {
          const index = result[indexName];
          if (index && index.mappings) {
            const mappings = index.mappings;
            const properties = mappings.properties;
            getFieldsRecursively(properties);
          }
        }
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(fields, (value) => {
          return value;
        });
      })
    );
  }
  getFieldsCrossCluster(type, range) {
    const typeMap = {
      float: "number",
      double: "number",
      integer: "number",
      long: "number",
      date: "date",
      date_nanos: "date",
      string: "string",
      text: "string",
      scaled_float: "number",
      nested: "nested",
      histogram: "number"
    };
    return this.requestAllIndices(range).pipe(
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((result) => {
        const shouldAddField = (obj) => {
          for (const objField in obj) {
            if (objField === "object") {
              continue;
            }
            if (obj[objField].metadata_field) {
              continue;
            }
            if (!type || type.length === 0) {
              return true;
            }
            if (type.includes(objField) || type.includes(typeMap[objField])) {
              return true;
            }
          }
          return false;
        };
        const fields = {};
        const fieldsData = result["fields"];
        for (const fieldName in fieldsData) {
          const fieldInfo = fieldsData[fieldName];
          if (shouldAddField(fieldInfo)) {
            fields[fieldName] = {
              text: fieldName,
              type: fieldInfo.type
            };
          }
        }
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(fields, (value) => {
          return value;
        });
      })
    );
  }
  /**
   * Get values for a given field.
   * Used for example in getTagValues.
   */
  getTerms(queryDef, range = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_16__.getDefaultTimeRange)(), isTagValueQuery = false) {
    const searchType = "query_then_fetch";
    const header = this.getQueryHeader(searchType, range.from, range.to);
    let esQuery = JSON.stringify(this.queryBuilder.getTermsQuery(queryDef));
    esQuery = esQuery.replace(/\$timeFrom/g, range.from.valueOf().toString());
    esQuery = esQuery.replace(/\$timeTo/g, range.to.valueOf().toString());
    esQuery = header + "\n" + esQuery + "\n";
    const url = this.getMultiSearchUrl();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.postResourceRequest(url, esQuery)).pipe(
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((res) => {
        if (!(0,_types__WEBPACK_IMPORTED_MODULE_33__.isElasticsearchResponseWithAggregations)(res)) {
          return [];
        }
        if (!res || !res.responses[0].aggregations) {
          return [];
        }
        const buckets = res.responses[0].aggregations["1"].buckets;
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(buckets, (bucket) => {
          const keyString = String(bucket.key);
          return {
            text: bucket.key_as_string || keyString,
            value: isTagValueQuery ? keyString : bucket.key
          };
        });
      })
    );
  }
  // Method used to create URL that includes correct parameters based on ES data source config.
  getMultiSearchUrl() {
    const searchParams = new URLSearchParams();
    if (this.maxConcurrentShardRequests) {
      searchParams.append("max_concurrent_shard_requests", `${this.maxConcurrentShardRequests}`);
    }
    if (this.includeFrozen) {
      searchParams.append("ignore_throttled", "false");
    }
    return ("_msearch?" + searchParams.toString()).replace(/\?$/, "");
  }
  /**
   * Implemented as part of DataSourceAPI and used for template variable queries.
   * @returns A Promise that resolves to an array of results from the metric find query.
   */
  metricFindQuery(query, options) {
    const range = options?.range;
    const parsedQuery = JSON.parse(query);
    if (query) {
      if (parsedQuery.find === "fields") {
        parsedQuery.type = this.interpolateLuceneQuery(parsedQuery.type);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.lastValueFrom)(this.getFields(parsedQuery.type, range));
      }
      if (parsedQuery.find === "terms") {
        parsedQuery.field = this.interpolateLuceneQuery(parsedQuery.field);
        parsedQuery.query = this.interpolateLuceneQuery(parsedQuery.query);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.lastValueFrom)(this.getTerms(parsedQuery, range));
      }
    }
    return Promise.resolve([]);
  }
  /**
   * Implemented as part of the DataSourceAPI. Retrieves tag keys that can be used for ad-hoc filtering.
   * @returns A Promise that resolves to an array of label names represented as MetricFindValue objects.
   */
  getTagKeys() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.lastValueFrom)(this.getFields());
  }
  /**
   * Implemented as part of the DataSourceAPI. Retrieves tag values that can be used for ad-hoc filtering.
   * @returns A Promise that resolves to an array of label values represented as MetricFindValue objects
   */
  getTagValues(options) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.lastValueFrom)(this.getTerms({ field: options.key }, options.timeRange, true));
  }
  /**
   * Implemented as part of the DataSourceAPI.
   * Used by alerting to check if query contains template variables.
   */
  targetContainsTemplate(target) {
    if (this.templateSrv.containsTemplate(target.query) || this.templateSrv.containsTemplate(target.alias)) {
      return true;
    }
    if (target.bucketAggs) {
      for (const bucketAgg of target.bucketAggs) {
        if ((0,_components_QueryEditor_BucketAggregationsEditor_aggregations__WEBPACK_IMPORTED_MODULE_26__.isBucketAggregationWithField)(bucketAgg) && this.templateSrv.containsTemplate(bucketAgg.field)) {
          return true;
        }
        if (this.objectContainsTemplate(bucketAgg.settings)) {
          return true;
        }
      }
    }
    if (target.metrics) {
      for (const metric of target.metrics) {
        if (!(0,_components_QueryEditor_MetricAggregationsEditor_aggregations__WEBPACK_IMPORTED_MODULE_28__.isMetricAggregationWithField)(metric)) {
          continue;
        }
        if (metric.field && this.templateSrv.containsTemplate(metric.field)) {
          return true;
        }
        if (metric.settings && this.objectContainsTemplate(metric.settings)) {
          return true;
        }
        if ((0,_guards__WEBPACK_IMPORTED_MODULE_30__.isMetricAggregationWithMeta)(metric) && this.objectContainsTemplate(metric.meta)) {
          return true;
        }
      }
    }
    return false;
  }
  // Private method used in the `targetContainsTemplate` to check if an object contains template variables.
  objectContainsTemplate(obj) {
    if (typeof obj === "string") {
      return this.templateSrv.containsTemplate(obj);
    }
    if (!obj || typeof obj !== "object") {
      return false;
    }
    for (const key in obj) {
      if (Array.isArray(obj[key])) {
        for (const item of obj[key]) {
          if (this.objectContainsTemplate(item)) {
            return true;
          }
        }
      } else if (this.objectContainsTemplate(obj[key])) {
        return true;
      }
    }
    return false;
  }
  /**
   * Implemented for `DataSourceWithToggleableQueryFiltersSupport`. Toggles a filter on or off based on the provided filter action.
   * It is used for example in Explore to toggle fields on and off trough log details.
   * @returns A new ES query with the filter toggled as specified.
   */
  toggleQueryFilter(query, filter) {
    let expression = query.query ?? "";
    switch (filter.type) {
      case "FILTER_FOR": {
        expression = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_31__.queryHasFilter)(expression, filter.options.key, filter.options.value) ? (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_31__.removeFilterFromQuery)(expression, filter.options.key, filter.options.value) : (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_31__.addFilterToQuery)(expression, filter.options.key, filter.options.value);
        break;
      }
      case "FILTER_OUT": {
        if ((0,_modifyQuery__WEBPACK_IMPORTED_MODULE_31__.queryHasFilter)(expression, filter.options.key, filter.options.value)) {
          expression = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_31__.removeFilterFromQuery)(expression, filter.options.key, filter.options.value);
        }
        expression = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_31__.addFilterToQuery)(expression, filter.options.key, filter.options.value, "-");
        break;
      }
    }
    return { ...query, query: expression };
  }
  /**
   * Implemented for `DataSourceWithToggleableQueryFiltersSupport`. Checks if a query expression contains a filter based on the provided filter options.
   * @returns A boolean value indicating whether the filter exists in the query expression.
   */
  queryHasFilter(query, options) {
    let expression = query.query ?? "";
    return (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_31__.queryHasFilter)(expression, options.key, options.value);
  }
  /**
   * Implemented as part of `DataSourceWithQueryModificationSupport`. Used to modify a query based on the provided action.
   * It is used, for example, in the Query Builder to apply hints such as parsers, operations, etc.
   * @returns A new ES query with the specified modification applied.
   */
  modifyQuery(query, action) {
    if (!action.options) {
      return query;
    }
    let expression = query.query ?? "";
    switch (action.type) {
      case "ADD_FILTER": {
        expression = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_31__.addFilterToQuery)(expression, action.options.key, action.options.value);
        break;
      }
      case "ADD_FILTER_OUT": {
        expression = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_31__.addFilterToQuery)(expression, action.options.key, action.options.value, "-");
        break;
      }
      case "ADD_STRING_FILTER": {
        expression = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_31__.addStringFilterToQuery)(expression, action.options.value);
        break;
      }
      case "ADD_STRING_FILTER_OUT": {
        expression = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_31__.addStringFilterToQuery)(expression, action.options.value, false);
        break;
      }
    }
    return { ...query, query: expression };
  }
  /**
   * Implemented as part of `DataSourceWithQueryModificationSupport`. Returns a list of operation
   * types that are supported by `modifyQuery()`.
   */
  getSupportedQueryModifications() {
    return ["ADD_FILTER", "ADD_FILTER_OUT", "ADD_STRING_FILTER", "ADD_STRING_FILTER_OUT"];
  }
  /**
   * Adds ad hoc filters to a query expression, handling proper escaping of filter values.
   * @returns The query expression with ad hoc filters and correctly escaped values.
   */
  addAdHocFilters(query, adhocFilters) {
    if (!adhocFilters) {
      return query;
    }
    let finalQuery = query;
    adhocFilters.forEach((filter) => {
      finalQuery = (0,_modifyQuery__WEBPACK_IMPORTED_MODULE_31__.addAddHocFilter)(finalQuery, filter, this.logLevelField);
    });
    return finalQuery;
  }
  /**
   * Applies template variables and add hoc filters to a query. Used when running queries through backend.
   * It is called from DatasourceWithBackend.
   * @returns A modified ES query with template variables and ad hoc filters applied.
   */
  applyTemplateVariables(query, scopedVars, filters) {
    const interpolateBucketAgg = (bucketAgg) => {
      if (bucketAgg.type === "filters") {
        return {
          ...bucketAgg,
          settings: {
            ...bucketAgg.settings,
            filters: bucketAgg.settings?.filters?.map((filter) => ({
              ...filter,
              query: this.interpolateLuceneQuery(filter.query, scopedVars) || "*"
            }))
          }
        };
      }
      return bucketAgg;
    };
    const expandedQuery = {
      ...query,
      datasource: this.getRef(),
      query: this.addAdHocFilters(this.interpolateLuceneQuery(query.query || "", scopedVars), filters),
      bucketAggs: query.bucketAggs?.map(interpolateBucketAgg)
    };
    const finalQuery = JSON.parse(this.templateSrv.replace(JSON.stringify(expandedQuery), scopedVars));
    return finalQuery;
  }
  // Private method used in the `getDatabaseVersion` to get the database version from the Elasticsearch API.
  getDatabaseVersionUncached() {
    const getDbVersionObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.getResourceRequest(""));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.lastValueFrom)(getDbVersionObservable).then(
      (data) => {
        const versionNumber = data?.version?.number;
        if (typeof versionNumber !== "string") {
          return null;
        }
        try {
          return new semver__WEBPACK_IMPORTED_MODULE_12__.SemVer(versionNumber);
        } catch (error) {
          console.error(error);
          return null;
        }
      },
      (error) => {
        console.error(error);
        return null;
      }
    );
  }
  /**
   * Method used to get the database version from cache or from the Elasticsearch API.
   * Elasticsearch data source supports only certain versions of Elasticsearch and we
   * want to check the version and notify the user if the version is not supported.
   * */
  async getDatabaseVersion(useCachedData = true) {
    if (useCachedData) {
      const cached = this.databaseVersion;
      if (cached != null) {
        return cached;
      }
    }
    const freshDatabaseVersion = await this.getDatabaseVersionUncached();
    this.databaseVersion = freshDatabaseVersion;
    return freshDatabaseVersion;
  }
}
function enhanceDataFrameWithDataLinks(dataFrame, dataLinks) {
  if (!dataLinks.length) {
    return;
  }
  for (const field of dataFrame.fields) {
    const linksToApply = dataLinks.filter((dataLink) => new RegExp(dataLink.field).test(field.name));
    if (linksToApply.length === 0) {
      continue;
    }
    field.config = field.config || {};
    field.config.links = [...(field.config.links || [], linksToApply.map(generateDataLink))];
  }
}
function generateDataLink(linkConfig) {
  const dataSourceSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_19__.getDataSourceSrv)();
  if (linkConfig.datasourceUid) {
    const dsSettings = dataSourceSrv.getInstanceSettings(linkConfig.datasourceUid);
    return {
      title: linkConfig.urlDisplayLabel || "",
      url: "",
      internal: {
        query: { query: linkConfig.url },
        datasourceUid: linkConfig.datasourceUid,
        datasourceName: dsSettings?.name ?? "Data source not found"
      }
    };
  } else {
    return {
      title: linkConfig.urlDisplayLabel || "",
      url: linkConfig.url
    };
  }
}
function createContextTimeRange(rowTimeEpochMs, direction, intervalPattern) {
  const offset = 7;
  if (intervalPattern) {
    const intervalInfo = _IndexPattern__WEBPACK_IMPORTED_MODULE_22__.intervalMap[intervalPattern];
    if (direction === _grafana_data__WEBPACK_IMPORTED_MODULE_17__.LogRowContextQueryDirection.Forward) {
      return {
        from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_14__.dateTime)(rowTimeEpochMs).utc(),
        to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_14__.dateTime)(rowTimeEpochMs).add(offset, intervalInfo.amount).utc().startOf(intervalInfo.startOf)
      };
    } else {
      return {
        from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_14__.dateTime)(rowTimeEpochMs).subtract(offset, intervalInfo.amount).utc().startOf(intervalInfo.startOf),
        to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_14__.dateTime)(rowTimeEpochMs).utc()
      };
    }
  } else {
    if (direction === _grafana_data__WEBPACK_IMPORTED_MODULE_17__.LogRowContextQueryDirection.Forward) {
      return {
        from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_14__.dateTime)(rowTimeEpochMs).utc(),
        to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_14__.dateTime)(rowTimeEpochMs).add(offset, "hours").utc()
      };
    } else {
      return {
        from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_14__.dateTime)(rowTimeEpochMs).subtract(offset, "hours").utc(),
        to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_14__.dateTime)(rowTimeEpochMs).utc()
      };
    }
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/guards.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isMetricAggregationWithMeta: () => (/* binding */ isMetricAggregationWithMeta)
/* harmony export */ });

function isMetricAggregationWithMeta(metric) {
  if (!metric || typeof metric !== "object") {
    return false;
  }
  return "meta" in metric;
}


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/hooks/useFields.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFields: () => (/* binding */ useFields)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var _components_QueryEditor_BucketAggregationsEditor_aggregations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/aggregations.ts");
/* harmony import */ var _components_QueryEditor_ElasticsearchQueryContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/ElasticsearchQueryContext.tsx");
/* harmony import */ var _components_QueryEditor_MetricAggregationsEditor_aggregations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/aggregations.ts");





const getFilter = (type) => {
  if ((0,_components_QueryEditor_MetricAggregationsEditor_aggregations__WEBPACK_IMPORTED_MODULE_3__.isMetricAggregationType)(type)) {
    switch (type) {
      case "cardinality":
        return [];
      case "top_metrics":
        return ["number"];
      default:
        return ["number"];
    }
  }
  if ((0,_components_QueryEditor_BucketAggregationsEditor_aggregations__WEBPACK_IMPORTED_MODULE_1__.isBucketAggregationType)(type)) {
    switch (type) {
      case "date_histogram":
        return ["date"];
      case "geohash_grid":
        return ["geo_point"];
      case "histogram":
        return ["number"];
      default:
        return [];
    }
  }
  return [];
};
const toSelectableValue = ({ text }) => ({
  label: text,
  value: text
});
const useFields = (type) => {
  const datasource = (0,_components_QueryEditor_ElasticsearchQueryContext__WEBPACK_IMPORTED_MODULE_2__.useDatasource)();
  const range = (0,_components_QueryEditor_ElasticsearchQueryContext__WEBPACK_IMPORTED_MODULE_2__.useRange)();
  const filter = Array.isArray(type) ? type : getFilter(type);
  let rawFields;
  return async (q) => {
    if (!rawFields) {
      rawFields = await (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.lastValueFrom)(datasource.getFields(filter, range));
    }
    return rawFields.filter(({ text }) => q === void 0 || text.includes(q)).map(toSelectableValue);
  };
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/hooks/useNextId.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useNextId: () => (/* binding */ useNextId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_QueryEditor_ElasticsearchQueryContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/ElasticsearchQueryContext.tsx");



const toId = (e) => e.id;
const toInt = (idString) => parseInt(idString, 10);
const useNextId = () => {
  const { metrics, bucketAggs } = (0,_components_QueryEditor_ElasticsearchQueryContext__WEBPACK_IMPORTED_MODULE_1__.useQuery)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
    () => (Math.max(...[...metrics?.map(toId) || ["0"], ...bucketAggs?.map(toId) || ["0"]].map(toInt)) + 1).toString(),
    [metrics, bucketAggs]
  );
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/hooks/useStatelessReducer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DispatchContext: () => (/* binding */ DispatchContext),
/* harmony export */   combineReducers: () => (/* binding */ combineReducers),
/* harmony export */   useDispatch: () => (/* binding */ useDispatch),
/* harmony export */   useStatelessReducer: () => (/* binding */ useStatelessReducer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const combineReducers = (reducers) => (state, action) => {
  const newState = {};
  for (const key in reducers) {
    newState[key] = reducers[key](state[key], action);
  }
  return newState;
};
const useStatelessReducer = (onChange, state, reducer) => {
  const dispatch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (action) => {
      onChange(reducer(state, action));
    },
    [onChange, state, reducer]
  );
  return dispatch;
};
const DispatchContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);
const useDispatch = () => {
  const dispatch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DispatchContext);
  if (!dispatch) {
    throw new Error("Use DispatchContext first.");
  }
  return dispatch;
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/modifyQuery.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAddHocFilter: () => (/* binding */ addAddHocFilter),
/* harmony export */   addFilterToQuery: () => (/* binding */ addFilterToQuery),
/* harmony export */   addStringFilterToQuery: () => (/* binding */ addStringFilterToQuery),
/* harmony export */   escapeFilter: () => (/* binding */ escapeFilter),
/* harmony export */   escapeFilterValue: () => (/* binding */ escapeFilterValue),
/* harmony export */   findFilterNode: () => (/* binding */ findFilterNode),
/* harmony export */   queryHasFilter: () => (/* binding */ queryHasFilter),
/* harmony export */   removeFilterFromQuery: () => (/* binding */ removeFilterFromQuery)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lucene/lib/lucene.js");



function queryHasFilter(query, key, value, modifier = "") {
  return findFilterNode(query, key, value, modifier) !== null;
}
function findFilterNode(query, key, value, modifier = "") {
  const field = `${modifier}${lucene__WEBPACK_IMPORTED_MODULE_1__.term.escape(key)}`;
  value = lucene__WEBPACK_IMPORTED_MODULE_1__.phrase.escape(value);
  let ast = parseQuery(query);
  if (!ast) {
    return null;
  }
  return findNodeInTree(ast, field, value);
}
function findNodeInTree(ast, field, value) {
  if (Object.keys(ast).length === 0) {
    return null;
  }
  if (isAST(ast.left)) {
    return findNodeInTree(ast.left, field, value);
  }
  if (isNodeTerm(ast.left) && ast.left.field === field && ast.left.term === value) {
    return ast.left;
  }
  if (isLeftOnlyAST(ast)) {
    return null;
  }
  if (isNodeTerm(ast.right) && ast.right.field === field && ast.right.term === value) {
    return ast.right;
  }
  if (isBinaryAST(ast.right)) {
    return findNodeInTree(ast.right, field, value);
  }
  return null;
}
function addFilterToQuery(query, key, value, modifier = "") {
  if (queryHasFilter(query, key, value, modifier)) {
    return query;
  }
  key = escapeFilter(key);
  value = escapeFilterValue(value);
  const filter = `${modifier}${key}:"${value}"`;
  return concatenate(query, filter);
}
function concatenate(query, filter, condition = "AND") {
  if (!filter) {
    return query;
  }
  return query.trim() === "" ? filter : `${query} ${condition} ${filter}`;
}
function addAddHocFilter(query, filter, logLevelField) {
  if (!filter.key || !filter.value) {
    return query;
  }
  filter = {
    ...filter,
    // Type is defined as string, but it can be a number.
    value: filter.value.toString()
  };
  let key = filter.key;
  if (logLevelField && key === "level") {
    key = logLevelField;
  }
  const equalityFilters = ["=", "!="];
  if (equalityFilters.includes(filter.operator)) {
    return addFilterToQuery(query, key, filter.value, filter.operator === "=" ? "" : "-");
  }
  key = escapeFilter(key);
  const value = escapeFilterValue(filter.value);
  const regexValue = escapeFilterValue(filter.value, false);
  let addHocFilter = "";
  switch (filter.operator) {
    case "=~":
      addHocFilter = `${key}:/${regexValue}/`;
      break;
    case "!~":
      addHocFilter = `-${key}:/${regexValue}/`;
      break;
    case ">":
      addHocFilter = `${key}:>${value}`;
      break;
    case "<":
      addHocFilter = `${key}:<${value}`;
      break;
  }
  return concatenate(query, addHocFilter);
}
function removeFilterFromQuery(query, key, value, modifier = "") {
  const node = findFilterNode(query, key, value, modifier);
  const ast = parseQuery(query);
  if (!node || !ast) {
    return query;
  }
  return lucene__WEBPACK_IMPORTED_MODULE_1__.toString(removeNodeFromTree(ast, node));
}
function removeNodeFromTree(ast, node) {
  if (Object.keys(ast).length === 0) {
    return ast;
  }
  if (isAST(ast.left)) {
    ast.left = removeNodeFromTree(ast.left, node);
    return ast;
  }
  if (isNodeTerm(ast.left) && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(ast.left, node)) {
    Object.assign(
      ast,
      {
        left: void 0,
        operator: void 0,
        right: void 0
      },
      "right" in ast ? ast.right : {}
    );
    return ast;
  }
  if (isLeftOnlyAST(ast)) {
    return ast;
  }
  if (isNodeTerm(ast.right) && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(ast.right, node)) {
    Object.assign(ast, {
      right: void 0,
      operator: void 0
    });
    return ast;
  }
  if (isBinaryAST(ast.right)) {
    ast.right = removeNodeFromTree(ast.right, node);
    return ast;
  }
  return ast;
}
function escapeFilter(value) {
  return lucene__WEBPACK_IMPORTED_MODULE_1__.term.escape(value);
}
function escapeFilterValue(value, escapeBackslash = true) {
  if (escapeBackslash) {
    value = value.replace(/\\/g, "\\\\");
  }
  return lucene__WEBPACK_IMPORTED_MODULE_1__.phrase.escape(value);
}
function normalizeQuery(query) {
  return query.replace(/(\w+)\s(:)/gi, "$1$2");
}
function isLeftOnlyAST(ast) {
  if (!ast || typeof ast !== "object") {
    return false;
  }
  if ("left" in ast && !("right" in ast)) {
    return true;
  }
  return false;
}
function isBinaryAST(ast) {
  if (!ast || typeof ast !== "object") {
    return false;
  }
  if ("left" in ast && "right" in ast) {
    return true;
  }
  return false;
}
function isAST(ast) {
  return isLeftOnlyAST(ast) || isBinaryAST(ast);
}
function isNodeTerm(ast) {
  if (ast && typeof ast === "object" && "term" in ast) {
    return true;
  }
  return false;
}
function parseQuery(query) {
  try {
    return lucene__WEBPACK_IMPORTED_MODULE_1__.parse(normalizeQuery(query));
  } catch (e) {
    return null;
  }
}
function addStringFilterToQuery(query, filter, contains = true) {
  const expression = `"${escapeFilterValue(filter)}"`;
  return query.trim() ? `${query} ${contains ? "AND" : "NOT"} ${expression}` : `${contains ? "" : "NOT "}${expression}`;
}


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/events/common.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/datasource.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var _components_QueryEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/index.tsx");
/* harmony import */ var _configuration_ConfigEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/configuration/ConfigEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/datasource.ts");
/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/tracking.ts");







const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_5__.ElasticDatasource).setQueryEditor(_components_QueryEditor__WEBPACK_IMPORTED_MODULE_3__.QueryEditor).setConfigEditor(_configuration_ConfigEditor__WEBPACK_IMPORTED_MODULE_4__.ConfigEditor);
(0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getAppEvents)().subscribe(_grafana_data__WEBPACK_IMPORTED_MODULE_0__.DashboardLoadedEvent, _tracking__WEBPACK_IMPORTED_MODULE_6__.onDashboardLoadedHandler);


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/plugin.json":
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"type":"datasource","name":"Elasticsearch","id":"elasticsearch","category":"logging","info":{"description":"Open source logging & analytics database","author":{"name":"Grafana Labs","url":"https://grafana.com"},"keywords":["elasticsearch","datasource","database","logs","nosql","traces"],"logos":{"small":"img/elasticsearch.svg","large":"img/elasticsearch.svg"},"links":[{"name":"Learn more","url":"https://grafana.com/docs/features/datasources/elasticsearch/"},{"name":"Raise issue","url":"https://github.com/grafana/grafana/issues/new"},{"name":"Documentation","url":"https://grafana.com/docs/grafana/latest/datasources/elasticsearch/"}]},"alerting":true,"annotations":true,"metrics":true,"logs":true,"backend":true,"queryOptions":{"minInterval":true}}');

/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/queryDef.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultBucketAgg: () => (/* binding */ defaultBucketAgg),
/* harmony export */   defaultGeoHashPrecisionString: () => (/* binding */ defaultGeoHashPrecisionString),
/* harmony export */   defaultMetricAgg: () => (/* binding */ defaultMetricAgg),
/* harmony export */   extendedStats: () => (/* binding */ extendedStats),
/* harmony export */   findMetricById: () => (/* binding */ findMetricById),
/* harmony export */   hasMetricOfType: () => (/* binding */ hasMetricOfType),
/* harmony export */   highlightTags: () => (/* binding */ highlightTags),
/* harmony export */   isPipelineAgg: () => (/* binding */ isPipelineAgg),
/* harmony export */   isPipelineAggWithMultipleBucketPaths: () => (/* binding */ isPipelineAggWithMultipleBucketPaths),
/* harmony export */   movingAvgModelOptions: () => (/* binding */ movingAvgModelOptions)
/* harmony export */ });
/* harmony import */ var _components_QueryEditor_MetricAggregationsEditor_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/utils.ts");


const extendedStats = [
  { label: "Avg", value: "avg" },
  { label: "Min", value: "min" },
  { label: "Max", value: "max" },
  { label: "Sum", value: "sum" },
  { label: "Count", value: "count" },
  { label: "Std Dev", value: "std_deviation" },
  { label: "Std Dev Upper", value: "std_deviation_bounds_upper" },
  { label: "Std Dev Lower", value: "std_deviation_bounds_lower" }
];
const movingAvgModelOptions = [
  { label: "Simple", value: "simple" },
  { label: "Linear", value: "linear" },
  { label: "Exponentially Weighted", value: "ewma" },
  { label: "Holt Linear", value: "holt" },
  { label: "Holt Winters", value: "holt_winters" }
];
const highlightTags = {
  pre: "@HIGHLIGHT@",
  post: "@/HIGHLIGHT@"
};
const defaultGeoHashPrecisionString = "3";
function defaultMetricAgg(id = "1") {
  return { type: "count", id };
}
function defaultBucketAgg(id = "1") {
  return { type: "date_histogram", id, settings: { interval: "auto" } };
}
const findMetricById = (metrics, id) => metrics.find((metric) => metric.id === id);
function hasMetricOfType(target, type) {
  return !!target?.metrics?.some((m) => m.type === type);
}
function isPipelineAgg(metricType) {
  return metricType in _components_QueryEditor_MetricAggregationsEditor_utils__WEBPACK_IMPORTED_MODULE_0__.pipelineOptions;
}
function isPipelineAggWithMultipleBucketPaths(metricType) {
  return !!_components_QueryEditor_MetricAggregationsEditor_utils__WEBPACK_IMPORTED_MODULE_0__.metricAggregationConfig[metricType].supportsMultipleBucketPaths;
}


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/tracking.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onDashboardLoadedHandler: () => (/* binding */ onDashboardLoadedHandler),
/* harmony export */   trackAnnotationQuery: () => (/* binding */ trackAnnotationQuery),
/* harmony export */   trackQuery: () => (/* binding */ trackQuery)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/app.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/datasource.ts");
/* harmony import */ var _plugin_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/plugin.json");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/utils.ts");






const onDashboardLoadedHandler = ({
  payload: { dashboardId, orgId, grafanaVersion, queries }
}) => {
  try {
    const elasticsearchQueries = queries[_plugin_json__WEBPACK_IMPORTED_MODULE_4__.id]?.filter((query) => !query.hide);
    if (!elasticsearchQueries?.length) {
      return;
    }
    const queriesWithTemplateVariables = elasticsearchQueries.filter(isQueryWithTemplateVariables);
    const queriesWithLuceneQuery = elasticsearchQueries.filter((query) => !!query.query);
    const logsQueries = elasticsearchQueries.filter((query) => getQueryType(query) === "logs");
    const metricQueries = elasticsearchQueries.filter((query) => getQueryType(query) === "metric");
    const rawDataQueries = elasticsearchQueries.filter((query) => getQueryType(query) === "raw_data");
    const rawDocumentQueries = elasticsearchQueries.filter((query) => getQueryType(query) === "raw_document");
    const queriesWithChangedLineLimit = elasticsearchQueries.filter(isQueryWithChangedLineLimit);
    const event = {
      grafana_version: grafanaVersion,
      dashboard_id: dashboardId,
      org_id: orgId,
      queries_count: elasticsearchQueries.length,
      logs_queries_count: logsQueries.length,
      metric_queries_count: metricQueries.length,
      raw_data_queries_count: rawDataQueries.length,
      raw_document_queries_count: rawDocumentQueries.length,
      queries_with_template_variables_count: queriesWithTemplateVariables.length,
      queries_with_changed_line_limit_count: queriesWithChangedLineLimit.length,
      queries_with_lucene_query_count: queriesWithLuceneQuery.length
    };
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.reportInteraction)("grafana_elasticsearch_dashboard_loaded", event);
  } catch (error) {
    console.error("error in elasticsearch tracking handler", error);
  }
};
const getQueryType = (query) => {
  if (!query.metrics || !query.metrics.length) {
    return void 0;
  }
  const nonMetricQueryTypes = ["logs", "raw_data", "raw_document"];
  if (nonMetricQueryTypes.includes(query.metrics[0].type)) {
    return query.metrics[0].type;
  }
  return "metric";
};
const getLineLimit = (query) => {
  if (query.metrics?.[0]?.type !== "logs") {
    return void 0;
  }
  const lineLimit = query.metrics?.[0].settings?.limit;
  return lineLimit ? parseInt(lineLimit, 10) : void 0;
};
const isQueryWithChangedLineLimit = (query) => {
  const lineLimit = getLineLimit(query);
  return lineLimit !== void 0 && lineLimit !== 500;
};
const isQueryWithTemplateVariables = (query) => {
  return _utils__WEBPACK_IMPORTED_MODULE_5__.variableRegex.test(query.query ?? "");
};
const shouldNotReportBasedOnRefId = (refId) => {
  if (refId.startsWith(_datasource__WEBPACK_IMPORTED_MODULE_3__.REF_ID_STARTER_LOG_VOLUME)) {
    return true;
  }
  return false;
};
function trackQuery(response, request, startTime) {
  const { targets: queries, app } = request;
  if (app === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.CoreApp.Dashboard || app === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.CoreApp.PanelViewer) {
    return;
  }
  for (const query of queries) {
    if (shouldNotReportBasedOnRefId(query.refId)) {
      return;
    }
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.reportInteraction)("grafana_elasticsearch_query_executed", {
      app,
      grafana_version: _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.buildInfo.version,
      with_lucene_query: query.query ? true : false,
      query_type: getQueryType(query),
      line_limit: getLineLimit(query),
      alias: query.alias,
      has_error: response.error !== void 0,
      has_data: response.data.some((frame) => frame.length > 0),
      simultaneously_sent_query_count: queries.length,
      time_range_from: request?.range?.from?.toISOString(),
      time_range_to: request?.range?.to?.toISOString(),
      time_taken: Date.now() - startTime.getTime()
    });
  }
}
function trackAnnotationQuery(annotation) {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.reportInteraction)("grafana_elasticsearch_annotation_query_executed", {
    grafana_version: _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.buildInfo.version,
    has_target_query: !!annotation.target?.query,
    has_query: !!annotation.query,
    has_time_field: !!annotation.timeField,
    has_time_end_field: !!annotation.timeEndField,
    has_tags_field: !!annotation.tagsField,
    has_text_field: !!annotation.textField,
    has_index: !!annotation.index
  });
}


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isElasticsearchResponseWithAggregations: () => (/* binding */ isElasticsearchResponseWithAggregations),
/* harmony export */   isElasticsearchResponseWithHits: () => (/* binding */ isElasticsearchResponseWithHits)
/* harmony export */ });

const isElasticsearchResponseWithHits = (res) => {
  return res && typeof res === "object" && "responses" in res && Array.isArray(res["responses"]) && res["responses"].find((response) => {
    return typeof response === "object" && response !== null && "hits" in response && typeof response["hits"] === "object" && response["hits"] !== null && "hits" in response["hits"] && Array.isArray(response["hits"]["hits"]);
  });
};
const isElasticsearchResponseWithAggregations = (res) => {
  return res && typeof res === "object" && "responses" in res && Array.isArray(res["responses"]) && res["responses"].find((response) => {
    return typeof response === "object" && response !== null && "aggregations" in response && typeof response["aggregations"] === "object" && response["aggregations"] !== null && Object.keys(response["aggregations"]).length > 0;
  });
};


/***/ }),

/***/ "./public/app/plugins/datasource/elasticsearch/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertOrderByToMetricId: () => (/* binding */ convertOrderByToMetricId),
/* harmony export */   describeMetric: () => (/* binding */ describeMetric),
/* harmony export */   flattenObject: () => (/* binding */ flattenObject),
/* harmony export */   getScriptValue: () => (/* binding */ getScriptValue),
/* harmony export */   isSupportedVersion: () => (/* binding */ isSupportedVersion),
/* harmony export */   isTimeSeriesQuery: () => (/* binding */ isTimeSeriesQuery),
/* harmony export */   removeEmpty: () => (/* binding */ removeEmpty),
/* harmony export */   unsupportedVersionMessage: () => (/* binding */ unsupportedVersionMessage),
/* harmony export */   variableRegex: () => (/* binding */ variableRegex)
/* harmony export */ });
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/semver/index.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_QueryEditor_MetricAggregationsEditor_aggregations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/aggregations.ts");
/* harmony import */ var _components_QueryEditor_MetricAggregationsEditor_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/utils.ts");




const describeMetric = (metric) => {
  if (!(0,_components_QueryEditor_MetricAggregationsEditor_aggregations__WEBPACK_IMPORTED_MODULE_1__.isMetricAggregationWithField)(metric)) {
    return _components_QueryEditor_MetricAggregationsEditor_utils__WEBPACK_IMPORTED_MODULE_2__.metricAggregationConfig[metric.type].label;
  }
  return `${_components_QueryEditor_MetricAggregationsEditor_utils__WEBPACK_IMPORTED_MODULE_2__.metricAggregationConfig[metric.type].label} ${metric.field}`;
};
const removeEmpty = (obj) => Object.entries(obj).reduce((acc, [key, value]) => {
  if (value == null) {
    return { ...acc };
  }
  if (Array.isArray(value) && value.length === 0) {
    return { ...acc };
  }
  if (typeof value === "string" && value.length === 0) {
    return { ...acc };
  }
  if (!Array.isArray(value) && typeof value === "object") {
    const cleanObj = removeEmpty(value);
    if (Object.keys(cleanObj).length === 0) {
      return { ...acc };
    }
    return { ...acc, [key]: cleanObj };
  }
  return {
    ...acc,
    [key]: value
  };
}, {});
const convertOrderByToMetricId = (orderBy) => {
  const metricIdMatches = orderBy.match(/^(\d+)/);
  return metricIdMatches ? metricIdMatches[1] : void 0;
};
const getScriptValue = (metric) => (typeof metric.settings?.script === "object" ? metric.settings?.script?.inline : metric.settings?.script) || "";
const isSupportedVersion = (version) => {
  if ((0,semver__WEBPACK_IMPORTED_MODULE_0__.gte)(version, "7.16.0")) {
    return true;
  }
  return false;
};
const unsupportedVersionMessage = "Support for Elasticsearch versions after their end-of-life (currently versions < 7.16) was removed. Using unsupported version of Elasticsearch may lead to unexpected and incorrect results.";
const isTimeSeriesQuery = (query) => {
  return query?.bucketAggs?.slice(-1)[0]?.type === "date_histogram";
};
const variableRegex = /\$(\w+)|\[\[(\w+?)(?::(\w+))?\]\]|\${(\w+)(?:\.([^:^\}]+))?(?::([^\}]+))?}/g;
function flattenObject(target, opts) {
  opts = opts || {};
  const delimiter = opts.delimiter || ".";
  let maxDepth = opts.maxDepth || 3;
  let currentDepth = 1;
  const output = {};
  function step(object, prev) {
    Object.keys(object).forEach((key) => {
      const value = object[key];
      const isarray = opts?.safe && Array.isArray(value);
      const type = Object.prototype.toString.call(value);
      const isobject = type === "[object Object]";
      const newKey = prev ? prev + delimiter + key : key;
      if (!opts?.maxDepth) {
        maxDepth = currentDepth + 1;
      }
      if (!isarray && isobject && value && Object.keys(value).length && currentDepth < maxDepth) {
        ++currentDepth;
        return step({ ...value }, newKey);
      }
      output[newKey] = value;
    });
  }
  step(target, null);
  return output;
}


/***/ })

}]);
//# sourceMappingURL=elasticsearchPlugin.ab0aa85d0ad1f7e88c3e.js.map