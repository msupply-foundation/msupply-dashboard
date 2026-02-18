(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_core_services_echo_backends_grafana-javascript-agent_GrafanaJavascriptAgentBackend_ts"],{

/***/ "./node_modules/@grafana/faro-core/dist/esm/api/ItemBuffer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemBuffer: () => (/* binding */ ItemBuffer)
/* harmony export */ });
/* harmony import */ var _utils_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/is.js");

class ItemBuffer {
    constructor() {
        this.buffer = [];
    }
    addItem(item) {
        this.buffer.push(item);
    }
    flushBuffer(cb) {
        if ((0,_utils_is__WEBPACK_IMPORTED_MODULE_0__.isFunction)(cb)) {
            for (const item of this.buffer) {
                cb(item);
            }
        }
        this.buffer.length = 0;
    }
    size() {
        return this.buffer.length;
    }
}
//# sourceMappingURL=ItemBuffer.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/api/const.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   USER_ACTION_CANCEL: () => (/* binding */ USER_ACTION_CANCEL),
/* harmony export */   USER_ACTION_END: () => (/* binding */ USER_ACTION_END),
/* harmony export */   USER_ACTION_HALT: () => (/* binding */ USER_ACTION_HALT),
/* harmony export */   USER_ACTION_START: () => (/* binding */ USER_ACTION_START)
/* harmony export */ });
const USER_ACTION_START = 'user-action-start';
const USER_ACTION_END = 'user-action-end';
const USER_ACTION_CANCEL = 'user-action-cancel';
const USER_ACTION_HALT = 'user-action-halt';
//# sourceMappingURL=const.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/api/events/initialize.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeEventsAPI: () => (/* binding */ initializeEventsAPI)
/* harmony export */ });
/* harmony import */ var _transports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/transports/const.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/deepEqual.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/date.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/is.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/json.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/const.js");




function initializeEventsAPI({ internalLogger, config, metas, transports, tracesApi, actionBuffer, getMessage, }) {
    let lastPayload = null;
    const pushEvent = (name, attributes, domain, { skipDedupe, spanContext, timestampOverwriteMs, customPayloadTransformer = (payload) => payload } = {}) => {
        try {
            const attrs = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.stringifyObjectValues)(attributes);
            const item = {
                meta: metas.value,
                payload: customPayloadTransformer({
                    name,
                    domain: domain !== null && domain !== void 0 ? domain : config.eventDomain,
                    attributes: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(attrs) ? undefined : attrs,
                    timestamp: timestampOverwriteMs ? (0,_utils__WEBPACK_IMPORTED_MODULE_2__.timestampToIsoString)(timestampOverwriteMs) : (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getCurrentTimestamp)(),
                    trace: spanContext
                        ? {
                            trace_id: spanContext.traceId,
                            span_id: spanContext.spanId,
                        }
                        : tracesApi.getTraceContext(),
                }),
                type: _transports__WEBPACK_IMPORTED_MODULE_0__.TransportItemType.EVENT,
            };
            const testingPayload = {
                name: item.payload.name,
                attributes: item.payload.attributes,
                domain: item.payload.domain,
            };
            if (!skipDedupe && config.dedupe && !(0,_utils__WEBPACK_IMPORTED_MODULE_3__.isNull)(lastPayload) && (0,_utils__WEBPACK_IMPORTED_MODULE_1__.deepEqual)(testingPayload, lastPayload)) {
                internalLogger.debug('Skipping event push because it is the same as the last one\n', item.payload);
                return;
            }
            lastPayload = testingPayload;
            internalLogger.debug('Pushing event\n', item);
            const msg = getMessage();
            if (msg && msg.type === _const__WEBPACK_IMPORTED_MODULE_5__.USER_ACTION_START) {
                actionBuffer.addItem(item);
            }
            else {
                transports.execute(item);
            }
        }
        catch (err) {
            internalLogger.error('Error pushing event', err);
        }
    };
    return {
        pushEvent,
    };
}
//# sourceMappingURL=initialize.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/api/exceptions/const.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultErrorArgsSerializer: () => (/* binding */ defaultErrorArgsSerializer),
/* harmony export */   defaultExceptionType: () => (/* binding */ defaultExceptionType)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/is.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/json.js");

const defaultExceptionType = 'Error';
const defaultErrorArgsSerializer = (args) => {
    return args
        .map((arg) => {
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(arg)) {
            return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.stringifyExternalJson)(arg);
        }
        return String(arg);
    })
        .join(' ');
};
//# sourceMappingURL=const.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/api/exceptions/initialize.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeExceptionsAPI: () => (/* binding */ initializeExceptionsAPI)
/* harmony export */ });
/* harmony import */ var _transports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/transports/const.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/deepEqual.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/date.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/is.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/json.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/const.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/utils.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/exceptions/const.js");






let stacktraceParser;
function initializeExceptionsAPI({ internalLogger, config, metas, transports, tracesApi, actionBuffer, getMessage, }) {
    var _a;
    internalLogger.debug('Initializing exceptions API');
    let lastPayload = null;
    stacktraceParser = (_a = config.parseStacktrace) !== null && _a !== void 0 ? _a : stacktraceParser;
    const changeStacktraceParser = (newStacktraceParser) => {
        internalLogger.debug('Changing stacktrace parser');
        stacktraceParser = newStacktraceParser !== null && newStacktraceParser !== void 0 ? newStacktraceParser : stacktraceParser;
    };
    const getStacktraceParser = () => stacktraceParser;
    const { ignoreErrors = [], preserveOriginalError } = config;
    const pushError = (error, { skipDedupe, stackFrames, type, context, spanContext, timestampOverwriteMs, originalError } = {}) => {
        if (isErrorIgnored(ignoreErrors, originalError !== null && originalError !== void 0 ? originalError : error)) {
            return;
        }
        try {
            const ctx = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.stringifyObjectValues)(Object.assign(Object.assign({}, parseCause(originalError !== null && originalError !== void 0 ? originalError : error)), (context !== null && context !== void 0 ? context : {})));
            const item = {
                meta: metas.value,
                payload: Object.assign(Object.assign({ type: type || error.name || _const__WEBPACK_IMPORTED_MODULE_7__.defaultExceptionType, value: error.message, timestamp: timestampOverwriteMs ? (0,_utils__WEBPACK_IMPORTED_MODULE_2__.timestampToIsoString)(timestampOverwriteMs) : (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getCurrentTimestamp)(), trace: spanContext
                        ? {
                            trace_id: spanContext.traceId,
                            span_id: spanContext.spanId,
                        }
                        : tracesApi.getTraceContext() }, ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(ctx) ? {} : { context: ctx })), (preserveOriginalError ? { originalError } : {})),
                type: _transports__WEBPACK_IMPORTED_MODULE_0__.TransportItemType.EXCEPTION,
            };
            stackFrames = stackFrames !== null && stackFrames !== void 0 ? stackFrames : (error.stack ? stacktraceParser === null || stacktraceParser === void 0 ? void 0 : stacktraceParser(error).frames : undefined);
            if (stackFrames === null || stackFrames === void 0 ? void 0 : stackFrames.length) {
                item.payload.stacktrace = {
                    frames: stackFrames,
                };
            }
            const testingPayload = {
                type: item.payload.type,
                value: item.payload.value,
                stackTrace: item.payload.stacktrace,
                context: item.payload.context,
            };
            if (!skipDedupe && config.dedupe && !(0,_utils__WEBPACK_IMPORTED_MODULE_3__.isNull)(lastPayload) && (0,_utils__WEBPACK_IMPORTED_MODULE_1__.deepEqual)(testingPayload, lastPayload)) {
                internalLogger.debug('Skipping error push because it is the same as the last one\n', item.payload);
                return;
            }
            lastPayload = testingPayload;
            internalLogger.debug('Pushing exception\n', item);
            const msg = getMessage();
            if (msg && msg.type === _const__WEBPACK_IMPORTED_MODULE_5__.USER_ACTION_START) {
                actionBuffer.addItem(item);
            }
            else {
                transports.execute(item);
            }
        }
        catch (err) {
            internalLogger.error('Error pushing event', err);
        }
    };
    changeStacktraceParser(config.parseStacktrace);
    return {
        changeStacktraceParser,
        getStacktraceParser,
        pushError,
    };
}
function parseCause(error) {
    let cause = error.cause;
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isError)(cause)) {
        cause = error.cause.toString();
        // typeof operator on null returns "object". This is a well-known quirk in JavaScript and is considered a bug that cannot be fixed due to backward compatibility issues.
        // MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null
    }
    else if (cause !== null && ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isObject)(error.cause) || (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isArray)(error.cause))) {
        cause = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.stringifyExternalJson)(error.cause);
    }
    else if (cause != null) {
        cause = error.cause.toString();
    }
    return cause == null ? {} : { cause };
}
function isErrorIgnored(ignoreErrors, error) {
    const { message, name, stack } = error;
    return (0,_utils__WEBPACK_IMPORTED_MODULE_6__.shouldIgnoreEvent)(ignoreErrors, message + ' ' + name + ' ' + stack);
}
//# sourceMappingURL=initialize.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/api/initialize.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiMessageBus: () => (/* binding */ apiMessageBus),
/* harmony export */   initializeAPI: () => (/* binding */ initializeAPI)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/reactive.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/events/initialize.js");
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/exceptions/initialize.js");
/* harmony import */ var _logs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/logs/initialize.js");
/* harmony import */ var _measurements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/measurements/initialize.js");
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/meta/initialize.js");
/* harmony import */ var _traces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/traces/initialize.js");
/* harmony import */ var _userActionLifecycleHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/userActionLifecycleHandler.js");








const apiMessageBus = new _utils__WEBPACK_IMPORTED_MODULE_0__.Observable();
function initializeAPI(unpatchedConsole, internalLogger, config, metas, transports) {
    internalLogger.debug('Initializing API');
    const { actionBuffer, getMessage } = (0,_userActionLifecycleHandler__WEBPACK_IMPORTED_MODULE_7__.createUserActionLifecycleHandler)({ apiMessageBus, transports, config });
    const tracesApi = (0,_traces__WEBPACK_IMPORTED_MODULE_6__.initializeTracesAPI)(unpatchedConsole, internalLogger, config, metas, transports);
    const props = {
        unpatchedConsole,
        internalLogger,
        config,
        metas,
        transports,
        tracesApi,
        actionBuffer,
        getMessage,
    };
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, tracesApi), (0,_exceptions__WEBPACK_IMPORTED_MODULE_2__.initializeExceptionsAPI)(props)), (0,_meta__WEBPACK_IMPORTED_MODULE_5__.initializeMetaAPI)(props)), (0,_logs__WEBPACK_IMPORTED_MODULE_3__.initializeLogsAPI)(props)), (0,_measurements__WEBPACK_IMPORTED_MODULE_4__.initializeMeasurementsAPI)(props)), (0,_events__WEBPACK_IMPORTED_MODULE_1__.initializeEventsAPI)(props));
}
//# sourceMappingURL=initialize.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/api/logs/const.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultLogArgsSerializer: () => (/* binding */ defaultLogArgsSerializer)
/* harmony export */ });
const defaultLogArgsSerializer = (args) => args
    .map((arg) => {
    try {
        return String(arg);
    }
    catch (err) {
        return '';
    }
})
    .join(' ');
//# sourceMappingURL=const.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/api/logs/initialize.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeLogsAPI: () => (/* binding */ initializeLogsAPI)
/* harmony export */ });
/* harmony import */ var _transports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/transports/const.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/deepEqual.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/date.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/is.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/logLevels.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/json.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/const.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/logs/const.js");





function initializeLogsAPI({ internalLogger, config, metas, transports, tracesApi, actionBuffer, getMessage, }) {
    var _a;
    internalLogger.debug('Initializing logs API');
    let lastPayload = null;
    const logArgsSerializer = (_a = config.logArgsSerializer) !== null && _a !== void 0 ? _a : _const__WEBPACK_IMPORTED_MODULE_7__.defaultLogArgsSerializer;
    const pushLog = (args, { context, level, skipDedupe, spanContext, timestampOverwriteMs } = {}) => {
        try {
            const ctx = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.stringifyObjectValues)(context);
            const item = {
                type: _transports__WEBPACK_IMPORTED_MODULE_0__.TransportItemType.LOG,
                payload: {
                    message: logArgsSerializer(args),
                    level: level !== null && level !== void 0 ? level : _utils__WEBPACK_IMPORTED_MODULE_4__.defaultLogLevel,
                    context: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(ctx) ? undefined : ctx,
                    timestamp: timestampOverwriteMs ? (0,_utils__WEBPACK_IMPORTED_MODULE_2__.timestampToIsoString)(timestampOverwriteMs) : (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getCurrentTimestamp)(),
                    trace: spanContext
                        ? {
                            trace_id: spanContext.traceId,
                            span_id: spanContext.spanId,
                        }
                        : tracesApi.getTraceContext(),
                },
                meta: metas.value,
            };
            const testingPayload = {
                message: item.payload.message,
                level: item.payload.level,
                context: item.payload.context,
            };
            if (!skipDedupe && config.dedupe && !(0,_utils__WEBPACK_IMPORTED_MODULE_3__.isNull)(lastPayload) && (0,_utils__WEBPACK_IMPORTED_MODULE_1__.deepEqual)(testingPayload, lastPayload)) {
                internalLogger.debug('Skipping log push because it is the same as the last one\n', item.payload);
                return;
            }
            lastPayload = testingPayload;
            internalLogger.debug('Pushing log\n', item);
            const msg = getMessage();
            if (msg && msg.type === _const__WEBPACK_IMPORTED_MODULE_6__.USER_ACTION_START) {
                actionBuffer.addItem(item);
            }
            else {
                transports.execute(item);
            }
        }
        catch (err) {
            internalLogger.error('Error pushing log\n', err);
        }
    };
    return {
        pushLog,
    };
}
//# sourceMappingURL=initialize.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/api/measurements/initialize.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeMeasurementsAPI: () => (/* binding */ initializeMeasurementsAPI)
/* harmony export */ });
/* harmony import */ var _transports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/transports/const.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/deepEqual.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/date.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/is.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/json.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/const.js");




function initializeMeasurementsAPI({ internalLogger, config, metas, transports, tracesApi, actionBuffer, getMessage, }) {
    internalLogger.debug('Initializing measurements API');
    let lastPayload = null;
    const pushMeasurement = (payload, { skipDedupe, context, spanContext, timestampOverwriteMs } = {}) => {
        try {
            const ctx = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.stringifyObjectValues)(context);
            const item = {
                type: _transports__WEBPACK_IMPORTED_MODULE_0__.TransportItemType.MEASUREMENT,
                payload: Object.assign(Object.assign({}, payload), { trace: spanContext
                        ? {
                            trace_id: spanContext.traceId,
                            span_id: spanContext.spanId,
                        }
                        : tracesApi.getTraceContext(), timestamp: timestampOverwriteMs ? (0,_utils__WEBPACK_IMPORTED_MODULE_2__.timestampToIsoString)(timestampOverwriteMs) : (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getCurrentTimestamp)(), context: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(ctx) ? undefined : ctx }),
                meta: metas.value,
            };
            const testingPayload = {
                type: item.payload.type,
                values: item.payload.values,
                context: item.payload.context,
            };
            if (!skipDedupe && config.dedupe && !(0,_utils__WEBPACK_IMPORTED_MODULE_3__.isNull)(lastPayload) && (0,_utils__WEBPACK_IMPORTED_MODULE_1__.deepEqual)(testingPayload, lastPayload)) {
                internalLogger.debug('Skipping measurement push because it is the same as the last one\n', item.payload);
                return;
            }
            lastPayload = testingPayload;
            internalLogger.debug('Pushing measurement\n', item);
            const msg = getMessage();
            if (msg && msg.type === _const__WEBPACK_IMPORTED_MODULE_5__.USER_ACTION_START) {
                actionBuffer.addItem(item);
            }
            else {
                transports.execute(item);
            }
        }
        catch (err) {
            internalLogger.error('Error pushing measurement\n', err);
        }
    };
    return {
        pushMeasurement,
    };
}
//# sourceMappingURL=initialize.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/api/meta/initialize.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeMetaAPI: () => (/* binding */ initializeMetaAPI)
/* harmony export */ });
/* harmony import */ var _utils_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/is.js");

function initializeMetaAPI({ internalLogger, metas, }) {
    internalLogger.debug('Initializing meta API');
    let metaSession = undefined;
    let metaUser = undefined;
    let metaView = undefined;
    let metaPage = undefined;
    const setUser = (user) => {
        if (metaUser) {
            metas.remove(metaUser);
        }
        metaUser = {
            user,
        };
        metas.add(metaUser);
    };
    const setSession = (session, options) => {
        var _a;
        const newOverrides = options === null || options === void 0 ? void 0 : options.overrides;
        const overrides = newOverrides
            ? {
                overrides: Object.assign(Object.assign({}, (_a = metaSession === null || metaSession === void 0 ? void 0 : metaSession.session) === null || _a === void 0 ? void 0 : _a.overrides), newOverrides),
            }
            : {};
        if (metaSession) {
            metas.remove(metaSession);
        }
        metaSession = {
            session: Object.assign(Object.assign({}, ((0,_utils_is__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(session) ? undefined : session)), overrides),
        };
        metas.add(metaSession);
    };
    const getSession = () => metas.value.session;
    const setView = (view, options) => {
        var _a;
        if (options === null || options === void 0 ? void 0 : options.overrides) {
            setSession(getSession(), { overrides: options.overrides });
        }
        if (((_a = metaView === null || metaView === void 0 ? void 0 : metaView.view) === null || _a === void 0 ? void 0 : _a.name) === (view === null || view === void 0 ? void 0 : view.name)) {
            return;
        }
        const previousView = metaView;
        metaView = {
            view,
        };
        metas.add(metaView);
        if (previousView) {
            metas.remove(previousView);
        }
    };
    const getView = () => metas.value.view;
    const setPage = (page) => {
        var _a;
        const pageMeta = (0,_utils_is__WEBPACK_IMPORTED_MODULE_0__.isString)(page)
            ? Object.assign(Object.assign({}, ((_a = metaPage === null || metaPage === void 0 ? void 0 : metaPage.page) !== null && _a !== void 0 ? _a : getPage())), { id: page }) : page;
        if (metaPage) {
            metas.remove(metaPage);
        }
        metaPage = {
            page: pageMeta,
        };
        metas.add(metaPage);
    };
    const getPage = () => metas.value.page;
    return {
        setUser,
        resetUser: setUser,
        setSession,
        resetSession: setSession,
        getSession,
        setView,
        getView,
        setPage,
        getPage,
    };
}
//# sourceMappingURL=initialize.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/api/traces/initialize.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeTracesAPI: () => (/* binding */ initializeTracesAPI)
/* harmony export */ });
/* harmony import */ var _transports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/transports/const.js");

function initializeTracesAPI(_unpatchedConsole, internalLogger, _config, metas, transports) {
    internalLogger.debug('Initializing traces API');
    let otel = undefined;
    const initOTEL = (trace, context) => {
        internalLogger.debug('Initializing OpenTelemetry');
        otel = {
            trace,
            context,
        };
    };
    const getTraceContext = () => {
        const ctx = otel === null || otel === void 0 ? void 0 : otel.trace.getSpanContext(otel.context.active());
        return !ctx
            ? undefined
            : {
                trace_id: ctx.traceId,
                span_id: ctx.spanId,
            };
    };
    const pushTraces = (payload) => {
        try {
            const item = {
                type: _transports__WEBPACK_IMPORTED_MODULE_0__.TransportItemType.TRACE,
                payload,
                meta: metas.value,
            };
            internalLogger.debug('Pushing trace\n', item);
            transports.execute(item);
        }
        catch (err) {
            internalLogger.error('Error pushing trace\n', err);
        }
    };
    const getOTEL = () => otel;
    const isOTELInitialized = () => !!otel;
    return {
        getOTEL,
        getTraceContext,
        initOTEL,
        isOTELInitialized,
        pushTraces,
    };
}
//# sourceMappingURL=initialize.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/api/userActionLifecycleHandler.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createUserActionLifecycleHandler: () => (/* binding */ createUserActionLifecycleHandler)
/* harmony export */ });
/* harmony import */ var _transports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/transports/const.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/const.js");
/* harmony import */ var _ItemBuffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/ItemBuffer.js");



function createUserActionLifecycleHandler({ apiMessageBus, transports, config, }) {
    const actionBuffer = new _ItemBuffer__WEBPACK_IMPORTED_MODULE_2__.ItemBuffer();
    const trackUserActionsExcludeItem = config.trackUserActionsExcludeItem;
    let message;
    apiMessageBus.subscribe((msg) => {
        if (_const__WEBPACK_IMPORTED_MODULE_1__.USER_ACTION_START === msg.type || _const__WEBPACK_IMPORTED_MODULE_1__.USER_ACTION_HALT === msg.type) {
            message = msg;
            return;
        }
        if (msg.type === _const__WEBPACK_IMPORTED_MODULE_1__.USER_ACTION_END) {
            const { id, name } = msg;
            actionBuffer.flushBuffer((item) => {
                if (isExcludeFromUserAction(item, trackUserActionsExcludeItem)) {
                    transports.execute(item);
                    return;
                }
                const userActionItem = Object.assign(Object.assign({}, item), { payload: Object.assign(Object.assign({}, item.payload), { action: {
                            parentId: id,
                            name,
                        } }) });
                transports.execute(userActionItem);
            });
            message = undefined;
            return;
        }
        if (msg.type === _const__WEBPACK_IMPORTED_MODULE_1__.USER_ACTION_CANCEL) {
            message = undefined;
            actionBuffer.flushBuffer((item) => {
                transports.execute(item);
            });
        }
    });
    const getMessage = () => message;
    return { actionBuffer, getMessage };
}
function isExcludeFromUserAction(item, trackUserActionsExcludeItem) {
    return ((trackUserActionsExcludeItem === null || trackUserActionsExcludeItem === void 0 ? void 0 : trackUserActionsExcludeItem(item)) ||
        (item.type === _transports__WEBPACK_IMPORTED_MODULE_0__.TransportItemType.MEASUREMENT && item.payload.type === 'web-vitals'));
}
//# sourceMappingURL=userActionLifecycleHandler.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/api/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shouldIgnoreEvent: () => (/* binding */ shouldIgnoreEvent)
/* harmony export */ });
/* harmony import */ var _utils_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/is.js");

function shouldIgnoreEvent(patterns, msg) {
    return patterns.some((pattern) => {
        return (0,_utils_is__WEBPACK_IMPORTED_MODULE_0__.isString)(pattern) ? msg.includes(pattern) : !!msg.match(pattern);
    });
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/config/const.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultBatchingConfig: () => (/* binding */ defaultBatchingConfig),
/* harmony export */   defaultGlobalObjectKey: () => (/* binding */ defaultGlobalObjectKey)
/* harmony export */ });
const defaultGlobalObjectKey = 'faro';
const defaultBatchingConfig = {
    enabled: true,
    sendTimeout: 250,
    itemLimit: 50,
};
//# sourceMappingURL=const.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/consts.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unknownString: () => (/* binding */ unknownString)
/* harmony export */ });
const unknownString = 'unknown';
//# sourceMappingURL=consts.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/extensions/baseExtension.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseExtension: () => (/* binding */ BaseExtension)
/* harmony export */ });
/* harmony import */ var _internalLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/internalLogger/const.js");
/* harmony import */ var _unpatchedConsole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/unpatchedConsole/const.js");


class BaseExtension {
    constructor() {
        this.unpatchedConsole = _unpatchedConsole__WEBPACK_IMPORTED_MODULE_1__.defaultUnpatchedConsole;
        this.internalLogger = _internalLogger__WEBPACK_IMPORTED_MODULE_0__.defaultInternalLogger;
        this.config = {};
        this.metas = {};
    }
    logDebug(...args) {
        this.internalLogger.debug(`${this.name}\n`, ...args);
    }
    logInfo(...args) {
        this.internalLogger.info(`${this.name}\n`, ...args);
    }
    logWarn(...args) {
        this.internalLogger.warn(`${this.name}\n`, ...args);
    }
    logError(...args) {
        this.internalLogger.error(`${this.name}\n`, ...args);
    }
}
//# sourceMappingURL=baseExtension.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/initialize.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeFaro: () => (/* binding */ initializeFaro)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/initialize.js");
/* harmony import */ var _instrumentations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/instrumentations/initialize.js");
/* harmony import */ var _instrumentations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/instrumentations/registerInitial.js");
/* harmony import */ var _internalLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/internalLogger/initialize.js");
/* harmony import */ var _metas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/metas/initialize.js");
/* harmony import */ var _metas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/metas/registerInitial.js");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/sdk/registerFaro.js");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/sdk/internalFaroGlobalObject.js");
/* harmony import */ var _transports__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/transports/initialize.js");
/* harmony import */ var _transports__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/transports/registerInitial.js");
/* harmony import */ var _unpatchedConsole__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/unpatchedConsole/initialize.js");







function initializeFaro(config) {
    const unpatchedConsole = (0,_unpatchedConsole__WEBPACK_IMPORTED_MODULE_10__.initializeUnpatchedConsole)(config);
    const internalLogger = (0,_internalLogger__WEBPACK_IMPORTED_MODULE_3__.initializeInternalLogger)(unpatchedConsole, config);
    if ((0,_sdk__WEBPACK_IMPORTED_MODULE_7__.isInternalFaroOnGlobalObject)() && !config.isolate) {
        internalLogger.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
        return undefined;
    }
    internalLogger.debug('Initializing');
    // Initializing the APIs
    const metas = (0,_metas__WEBPACK_IMPORTED_MODULE_4__.initializeMetas)(unpatchedConsole, internalLogger, config);
    const transports = (0,_transports__WEBPACK_IMPORTED_MODULE_8__.initializeTransports)(unpatchedConsole, internalLogger, config, metas);
    const api = (0,_api__WEBPACK_IMPORTED_MODULE_0__.initializeAPI)(unpatchedConsole, internalLogger, config, metas, transports);
    const instrumentations = (0,_instrumentations__WEBPACK_IMPORTED_MODULE_1__.initializeInstrumentations)(unpatchedConsole, internalLogger, config, metas, transports, api);
    const faro = (0,_sdk__WEBPACK_IMPORTED_MODULE_6__.registerFaro)(unpatchedConsole, internalLogger, config, metas, transports, api, instrumentations);
    // make sure Faro is initialized before registering default metas, instrumentations, transports etc.
    (0,_metas__WEBPACK_IMPORTED_MODULE_5__.registerInitialMetas)(faro);
    (0,_transports__WEBPACK_IMPORTED_MODULE_9__.registerInitialTransports)(faro);
    (0,_instrumentations__WEBPACK_IMPORTED_MODULE_2__.registerInitialInstrumentations)(faro);
    return faro;
}
//# sourceMappingURL=initialize.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/instrumentations/base.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseInstrumentation: () => (/* binding */ BaseInstrumentation)
/* harmony export */ });
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/extensions/baseExtension.js");

class BaseInstrumentation extends _extensions__WEBPACK_IMPORTED_MODULE_0__.BaseExtension {
    constructor() {
        super(...arguments);
        this.api = {};
        this.transports = {};
    }
}
//# sourceMappingURL=base.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/instrumentations/initialize.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeInstrumentations: () => (/* binding */ initializeInstrumentations)
/* harmony export */ });
function initializeInstrumentations(unpatchedConsole, internalLogger, config, metas, transports, api) {
    internalLogger.debug('Initializing instrumentations');
    const instrumentations = [];
    const add = (...newInstrumentations) => {
        internalLogger.debug('Adding instrumentations');
        newInstrumentations.forEach((newInstrumentation) => {
            internalLogger.debug(`Adding "${newInstrumentation.name}" instrumentation`);
            const exists = instrumentations.some((existingInstrumentation) => existingInstrumentation.name === newInstrumentation.name);
            if (exists) {
                internalLogger.warn(`Instrumentation ${newInstrumentation.name} is already added`);
                return;
            }
            newInstrumentation.unpatchedConsole = unpatchedConsole;
            newInstrumentation.internalLogger = internalLogger;
            newInstrumentation.config = config;
            newInstrumentation.metas = metas;
            newInstrumentation.transports = transports;
            newInstrumentation.api = api;
            instrumentations.push(newInstrumentation);
            newInstrumentation.initialize();
        });
    };
    const remove = (...instrumentationsToRemove) => {
        internalLogger.debug('Removing instrumentations');
        instrumentationsToRemove.forEach((instrumentationToRemove) => {
            var _a, _b;
            internalLogger.debug(`Removing "${instrumentationToRemove.name}" instrumentation`);
            const existingInstrumentationIndex = instrumentations.reduce((acc, existingInstrumentation, existingTransportIndex) => {
                if (acc === null && existingInstrumentation.name === instrumentationToRemove.name) {
                    return existingTransportIndex;
                }
                return null;
            }, null);
            if (existingInstrumentationIndex === null) {
                internalLogger.warn(`Instrumentation "${instrumentationToRemove.name}" is not added`);
                return;
            }
            (_b = (_a = instrumentations[existingInstrumentationIndex]).destroy) === null || _b === void 0 ? void 0 : _b.call(_a);
            instrumentations.splice(existingInstrumentationIndex, 1);
        });
    };
    return {
        add,
        get instrumentations() {
            return [...instrumentations];
        },
        remove,
    };
}
//# sourceMappingURL=initialize.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/instrumentations/registerInitial.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerInitialInstrumentations: () => (/* binding */ registerInitialInstrumentations)
/* harmony export */ });
function registerInitialInstrumentations(faro) {
    faro.instrumentations.add(...faro.config.instrumentations);
}
//# sourceMappingURL=registerInitial.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/internalLogger/const.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InternalLoggerLevel: () => (/* binding */ InternalLoggerLevel),
/* harmony export */   defaultInternalLogger: () => (/* binding */ defaultInternalLogger),
/* harmony export */   defaultInternalLoggerLevel: () => (/* binding */ defaultInternalLoggerLevel),
/* harmony export */   defaultInternalLoggerPrefix: () => (/* binding */ defaultInternalLoggerPrefix)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/noop.js");

var InternalLoggerLevel;
(function (InternalLoggerLevel) {
    InternalLoggerLevel[InternalLoggerLevel["OFF"] = 0] = "OFF";
    InternalLoggerLevel[InternalLoggerLevel["ERROR"] = 1] = "ERROR";
    InternalLoggerLevel[InternalLoggerLevel["WARN"] = 2] = "WARN";
    InternalLoggerLevel[InternalLoggerLevel["INFO"] = 3] = "INFO";
    InternalLoggerLevel[InternalLoggerLevel["VERBOSE"] = 4] = "VERBOSE";
})(InternalLoggerLevel || (InternalLoggerLevel = {}));
const defaultInternalLoggerPrefix = 'Faro';
const defaultInternalLogger = {
    debug: _utils__WEBPACK_IMPORTED_MODULE_0__.noop,
    error: _utils__WEBPACK_IMPORTED_MODULE_0__.noop,
    info: _utils__WEBPACK_IMPORTED_MODULE_0__.noop,
    prefix: defaultInternalLoggerPrefix,
    warn: _utils__WEBPACK_IMPORTED_MODULE_0__.noop,
};
const defaultInternalLoggerLevel = InternalLoggerLevel.ERROR;
//# sourceMappingURL=const.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/internalLogger/createInternalLogger.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInternalLogger: () => (/* binding */ createInternalLogger)
/* harmony export */ });
/* harmony import */ var _unpatchedConsole__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/unpatchedConsole/const.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/noop.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/internalLogger/const.js");



function createInternalLogger(unpatchedConsole = _unpatchedConsole__WEBPACK_IMPORTED_MODULE_0__.defaultUnpatchedConsole, internalLoggerLevel = _const__WEBPACK_IMPORTED_MODULE_2__.defaultInternalLoggerLevel) {
    const internalLogger = _const__WEBPACK_IMPORTED_MODULE_2__.defaultInternalLogger;
    if (internalLoggerLevel > _const__WEBPACK_IMPORTED_MODULE_2__.InternalLoggerLevel.OFF) {
        internalLogger.error =
            internalLoggerLevel >= _const__WEBPACK_IMPORTED_MODULE_2__.InternalLoggerLevel.ERROR
                ? function (...args) {
                    unpatchedConsole.error(`${internalLogger.prefix}\n`, ...args);
                }
                : _utils__WEBPACK_IMPORTED_MODULE_1__.noop;
        internalLogger.warn =
            internalLoggerLevel >= _const__WEBPACK_IMPORTED_MODULE_2__.InternalLoggerLevel.WARN
                ? function (...args) {
                    unpatchedConsole.warn(`${internalLogger.prefix}\n`, ...args);
                }
                : _utils__WEBPACK_IMPORTED_MODULE_1__.noop;
        internalLogger.info =
            internalLoggerLevel >= _const__WEBPACK_IMPORTED_MODULE_2__.InternalLoggerLevel.INFO
                ? function (...args) {
                    unpatchedConsole.info(`${internalLogger.prefix}\n`, ...args);
                }
                : _utils__WEBPACK_IMPORTED_MODULE_1__.noop;
        internalLogger.debug =
            internalLoggerLevel >= _const__WEBPACK_IMPORTED_MODULE_2__.InternalLoggerLevel.VERBOSE
                ? function (...args) {
                    unpatchedConsole.debug(`${internalLogger.prefix}\n`, ...args);
                }
                : _utils__WEBPACK_IMPORTED_MODULE_1__.noop;
    }
    return internalLogger;
}
//# sourceMappingURL=createInternalLogger.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/internalLogger/initialize.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeInternalLogger: () => (/* binding */ initializeInternalLogger),
/* harmony export */   internalLogger: () => (/* binding */ internalLogger)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/internalLogger/const.js");
/* harmony import */ var _createInternalLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/internalLogger/createInternalLogger.js");


let internalLogger = _const__WEBPACK_IMPORTED_MODULE_0__.defaultInternalLogger;
function initializeInternalLogger(unpatchedConsole, config) {
    internalLogger = (0,_createInternalLogger__WEBPACK_IMPORTED_MODULE_1__.createInternalLogger)(unpatchedConsole, config.internalLoggerLevel);
    return internalLogger;
}
//# sourceMappingURL=initialize.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/metas/initialize.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeMetas: () => (/* binding */ initializeMetas)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/is.js");

function initializeMetas(_unpatchedConsole, internalLogger, _config) {
    let items = [];
    let listeners = [];
    const getValue = () => items.reduce((acc, item) => Object.assign(acc, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isFunction)(item) ? item() : item), {});
    const notifyListeners = () => {
        if (listeners.length) {
            const value = getValue();
            listeners.forEach((listener) => listener(value));
        }
    };
    const add = (...newItems) => {
        internalLogger.debug('Adding metas\n', newItems);
        items.push(...newItems);
        notifyListeners();
    };
    const remove = (...itemsToRemove) => {
        internalLogger.debug('Removing metas\n', itemsToRemove);
        items = items.filter((currentItem) => !itemsToRemove.includes(currentItem));
        notifyListeners();
    };
    const addListener = (listener) => {
        internalLogger.debug('Adding metas listener\n', listener);
        listeners.push(listener);
    };
    const removeListener = (listener) => {
        internalLogger.debug('Removing metas listener\n', listener);
        listeners = listeners.filter((currentListener) => currentListener !== listener);
    };
    return {
        add,
        remove,
        addListener,
        removeListener,
        get value() {
            return getValue();
        },
    };
}
//# sourceMappingURL=initialize.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/metas/registerInitial.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerInitialMetas: () => (/* binding */ registerInitialMetas)
/* harmony export */ });
/* harmony import */ var _utils_sourceMaps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/sourceMaps.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/version.js");


function registerInitialMetas(faro) {
    var _a, _b;
    const initial = {
        sdk: {
            version: _version__WEBPACK_IMPORTED_MODULE_1__.VERSION,
        },
        app: {
            bundleId: faro.config.app.name && (0,_utils_sourceMaps__WEBPACK_IMPORTED_MODULE_0__.getBundleId)(faro.config.app.name),
        },
    };
    const session = (_a = faro.config.sessionTracking) === null || _a === void 0 ? void 0 : _a.session;
    if (session) {
        faro.api.setSession(session);
    }
    if (faro.config.app) {
        initial.app = Object.assign(Object.assign({}, faro.config.app), initial.app);
    }
    if (faro.config.user) {
        initial.user = faro.config.user;
    }
    if (faro.config.view) {
        initial.view = faro.config.view;
    }
    faro.metas.add(initial, ...((_b = faro.config.metas) !== null && _b !== void 0 ? _b : []));
}
//# sourceMappingURL=registerInitial.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/semantic.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Conventions: () => (/* binding */ Conventions),
/* harmony export */   EVENT_CLICK: () => (/* binding */ EVENT_CLICK),
/* harmony export */   EVENT_NAVIGATION: () => (/* binding */ EVENT_NAVIGATION),
/* harmony export */   EVENT_OVERRIDES_SERVICE_NAME: () => (/* binding */ EVENT_OVERRIDES_SERVICE_NAME),
/* harmony export */   EVENT_ROUTE_CHANGE: () => (/* binding */ EVENT_ROUTE_CHANGE),
/* harmony export */   EVENT_SESSION_EXTEND: () => (/* binding */ EVENT_SESSION_EXTEND),
/* harmony export */   EVENT_SESSION_RESUME: () => (/* binding */ EVENT_SESSION_RESUME),
/* harmony export */   EVENT_SESSION_START: () => (/* binding */ EVENT_SESSION_START),
/* harmony export */   EVENT_VIEW_CHANGED: () => (/* binding */ EVENT_VIEW_CHANGED)
/* harmony export */ });
/**
 * @deprecated The conventions object will be removed in a future version
 */
const Conventions = {
    /**
     * @deprecated The event names object will be removed in a future version
     */
    EventNames: {
        CLICK: 'click',
        NAVIGATION: 'navigation',
        SESSION_START: 'session_start',
        VIEW_CHANGED: 'view_changed',
    },
};
const EVENT_CLICK = 'click';
const EVENT_NAVIGATION = 'navigation';
const EVENT_VIEW_CHANGED = 'view_changed';
const EVENT_SESSION_START = 'session_start';
const EVENT_SESSION_RESUME = 'session_resume';
const EVENT_SESSION_EXTEND = 'session_extend';
const EVENT_OVERRIDES_SERVICE_NAME = 'service_name_override';
const EVENT_ROUTE_CHANGE = 'route_change';
//# sourceMappingURL=semantic.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/transports/base.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseTransport: () => (/* binding */ BaseTransport)
/* harmony export */ });
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/extensions/baseExtension.js");

class BaseTransport extends _extensions__WEBPACK_IMPORTED_MODULE_0__.BaseExtension {
    isBatched() {
        return false;
    }
    getIgnoreUrls() {
        return [];
    }
}
//# sourceMappingURL=base.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/transports/batchExecutor.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BatchExecutor: () => (/* binding */ BatchExecutor)
/* harmony export */ });
const DEFAULT_SEND_TIMEOUT_MS = 250;
const DEFAULT_BATCH_ITEM_LIMIT = 50;
class BatchExecutor {
    constructor(sendFn, options) {
        var _a, _b;
        this.signalBuffer = [];
        this.itemLimit = (_a = options === null || options === void 0 ? void 0 : options.itemLimit) !== null && _a !== void 0 ? _a : DEFAULT_BATCH_ITEM_LIMIT;
        this.sendTimeout = (_b = options === null || options === void 0 ? void 0 : options.sendTimeout) !== null && _b !== void 0 ? _b : DEFAULT_SEND_TIMEOUT_MS;
        this.paused = (options === null || options === void 0 ? void 0 : options.paused) || false;
        this.sendFn = sendFn;
        this.flushInterval = -1;
        if (!this.paused) {
            this.start();
        }
        // Send batched/buffered data when user navigates to new page, switches or closes the tab, minimizes or closes the browser.
        // If on mobile, it also sends data if user switches from the browser to a different app.
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                this.flush();
            }
        });
    }
    addItem(item) {
        if (this.paused) {
            return;
        }
        this.signalBuffer.push(item);
        if (this.signalBuffer.length >= this.itemLimit) {
            this.flush();
        }
    }
    start() {
        this.paused = false;
        if (this.sendTimeout > 0) {
            this.flushInterval = window.setInterval(() => this.flush(), this.sendTimeout);
        }
    }
    pause() {
        this.paused = true;
        clearInterval(this.flushInterval);
    }
    groupItems(items) {
        const itemMap = new Map();
        items.forEach((item) => {
            const metaKey = JSON.stringify(item.meta);
            let currentItems = itemMap.get(metaKey);
            if (currentItems === undefined) {
                currentItems = [item];
            }
            else {
                currentItems = [...currentItems, item];
            }
            itemMap.set(metaKey, currentItems);
        });
        return Array.from(itemMap.values());
    }
    flush() {
        if (this.paused || this.signalBuffer.length === 0) {
            return;
        }
        const itemGroups = this.groupItems(this.signalBuffer);
        itemGroups.forEach(this.sendFn);
        this.signalBuffer = [];
    }
}
//# sourceMappingURL=batchExecutor.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/transports/const.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransportItemType: () => (/* binding */ TransportItemType),
/* harmony export */   transportItemTypeToBodyKey: () => (/* binding */ transportItemTypeToBodyKey)
/* harmony export */ });
var TransportItemType;
(function (TransportItemType) {
    TransportItemType["EXCEPTION"] = "exception";
    TransportItemType["LOG"] = "log";
    TransportItemType["MEASUREMENT"] = "measurement";
    TransportItemType["TRACE"] = "trace";
    TransportItemType["EVENT"] = "event";
})(TransportItemType || (TransportItemType = {}));
const transportItemTypeToBodyKey = {
    [TransportItemType.EXCEPTION]: 'exceptions',
    [TransportItemType.LOG]: 'logs',
    [TransportItemType.MEASUREMENT]: 'measurements',
    [TransportItemType.TRACE]: 'traces',
    [TransportItemType.EVENT]: 'events',
};
//# sourceMappingURL=const.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/transports/initialize.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeTransports: () => (/* binding */ initializeTransports)
/* harmony export */ });
/* harmony import */ var _batchExecutor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/transports/batchExecutor.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/transports/const.js");


function initializeTransports(unpatchedConsole, internalLogger, config, metas) {
    var _a;
    internalLogger.debug('Initializing transports');
    const transports = [];
    let paused = config.paused;
    let beforeSendHooks = [];
    const add = (...newTransports) => {
        internalLogger.debug('Adding transports');
        newTransports.forEach((newTransport) => {
            internalLogger.debug(`Adding "${newTransport.name}" transport`);
            const exists = transports.some((existingTransport) => existingTransport === newTransport);
            if (exists) {
                internalLogger.warn(`Transport ${newTransport.name} is already added`);
                return;
            }
            newTransport.unpatchedConsole = unpatchedConsole;
            newTransport.internalLogger = internalLogger;
            newTransport.config = config;
            newTransport.metas = metas;
            transports.push(newTransport);
        });
    };
    const addBeforeSendHooks = (...newBeforeSendHooks) => {
        internalLogger.debug('Adding beforeSendHooks\n', beforeSendHooks);
        newBeforeSendHooks.forEach((beforeSendHook) => {
            if (beforeSendHook) {
                beforeSendHooks.push(beforeSendHook);
            }
        });
    };
    const applyBeforeSendHooks = (items) => {
        let filteredItems = items;
        for (const hook of beforeSendHooks) {
            const modified = filteredItems.map(hook).filter(Boolean);
            if (modified.length === 0) {
                return [];
            }
            filteredItems = sanitizeItems(modified, config);
        }
        return filteredItems;
    };
    const batchedSend = (items) => {
        const filteredItems = applyBeforeSendHooks(items);
        if (filteredItems.length === 0) {
            return;
        }
        for (const transport of transports) {
            internalLogger.debug(`Transporting item using ${transport.name}\n`, filteredItems);
            if (transport.isBatched()) {
                transport.send(filteredItems);
            }
        }
    };
    const instantSend = (item) => {
        var _a, _b;
        // prevent all beforeSend hooks being executed twice if batching is enabled.
        if (((_a = config.batching) === null || _a === void 0 ? void 0 : _a.enabled) && transports.every((transport) => transport.isBatched())) {
            return;
        }
        const [filteredItem] = applyBeforeSendHooks([item]);
        if (filteredItem === undefined) {
            return;
        }
        for (const transport of transports) {
            internalLogger.debug(`Transporting item using ${transport.name}\n`, filteredItem);
            if (!transport.isBatched()) {
                transport.send(filteredItem);
            }
            else if (!((_b = config.batching) === null || _b === void 0 ? void 0 : _b.enabled)) {
                transport.send([filteredItem]);
            }
        }
    };
    let batchExecutor;
    if ((_a = config.batching) === null || _a === void 0 ? void 0 : _a.enabled) {
        batchExecutor = new _batchExecutor__WEBPACK_IMPORTED_MODULE_0__.BatchExecutor(batchedSend, {
            sendTimeout: config.batching.sendTimeout,
            itemLimit: config.batching.itemLimit,
            paused,
        });
    }
    // Send a signal to the appropriate transports
    //
    // 1. If SDK is paused, early return
    // 2. If batching is not enabled send the signal to all transports
    //    instantly.
    // 3i. If batching is enabled, enqueue the signal
    // 3ii. Send the signal instantly to all un-batched transports
    const execute = (item) => {
        var _a;
        if (paused) {
            return;
        }
        if ((_a = config.batching) === null || _a === void 0 ? void 0 : _a.enabled) {
            batchExecutor === null || batchExecutor === void 0 ? void 0 : batchExecutor.addItem(item);
        }
        instantSend(item);
    };
    const getBeforeSendHooks = () => [...beforeSendHooks];
    const isPaused = () => paused;
    const pause = () => {
        internalLogger.debug('Pausing transports');
        batchExecutor === null || batchExecutor === void 0 ? void 0 : batchExecutor.pause();
        paused = true;
    };
    const remove = (...transportsToRemove) => {
        internalLogger.debug('Removing transports');
        transportsToRemove.forEach((transportToRemove) => {
            internalLogger.debug(`Removing "${transportToRemove.name}" transport`);
            const existingTransportIndex = transports.indexOf(transportToRemove);
            if (existingTransportIndex === -1) {
                internalLogger.warn(`Transport "${transportToRemove.name}" is not added`);
                return;
            }
            transports.splice(existingTransportIndex, 1);
        });
    };
    const removeBeforeSendHooks = (...beforeSendHooksToRemove) => {
        beforeSendHooks.filter((beforeSendHook) => !beforeSendHooksToRemove.includes(beforeSendHook));
    };
    const unpause = () => {
        internalLogger.debug('Unpausing transports');
        batchExecutor === null || batchExecutor === void 0 ? void 0 : batchExecutor.start();
        paused = false;
    };
    return {
        add,
        addBeforeSendHooks,
        getBeforeSendHooks,
        execute,
        isPaused,
        pause,
        remove,
        removeBeforeSendHooks,
        get transports() {
            return [...transports];
        },
        unpause,
    };
}
/**
 * Removes the `payload.originalError` property from the provided `TransportItem[]` parameter.
 */
function sanitizeItems(filteredItems, config) {
    if (config.preserveOriginalError) {
        for (const item of filteredItems) {
            if (item.type === _const__WEBPACK_IMPORTED_MODULE_1__.TransportItemType.EXCEPTION) {
                delete item.payload.originalError;
            }
        }
    }
    return filteredItems;
}
//# sourceMappingURL=initialize.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/transports/registerInitial.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerInitialTransports: () => (/* binding */ registerInitialTransports)
/* harmony export */ });
function registerInitialTransports(faro) {
    faro.transports.add(...faro.config.transports);
    faro.transports.addBeforeSendHooks(faro.config.beforeSend);
}
//# sourceMappingURL=registerInitial.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/transports/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTransportBody: () => (/* binding */ getTransportBody),
/* harmony export */   mergeResourceSpans: () => (/* binding */ mergeResourceSpans)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/transports/const.js");

function mergeResourceSpans(traces, resourceSpans) {
    var _a, _b;
    if (resourceSpans === undefined) {
        return traces;
    }
    if (traces === undefined) {
        return {
            resourceSpans,
        };
    }
    const currentResource = (_a = traces.resourceSpans) === null || _a === void 0 ? void 0 : _a[0];
    if (currentResource === undefined) {
        return traces;
    }
    const currentSpans = (currentResource === null || currentResource === void 0 ? void 0 : currentResource.scopeSpans) || [];
    const newSpans = ((_b = resourceSpans === null || resourceSpans === void 0 ? void 0 : resourceSpans[0]) === null || _b === void 0 ? void 0 : _b.scopeSpans) || [];
    return Object.assign(Object.assign({}, traces), { resourceSpans: [
            Object.assign(Object.assign({}, currentResource), { scopeSpans: [...currentSpans, ...newSpans] }),
        ] });
}
function getTransportBody(item) {
    let body = {
        meta: {},
    };
    if (item[0] !== undefined) {
        body.meta = item[0].meta;
    }
    item.forEach((currentItem) => {
        switch (currentItem.type) {
            case _const__WEBPACK_IMPORTED_MODULE_0__.TransportItemType.LOG:
            case _const__WEBPACK_IMPORTED_MODULE_0__.TransportItemType.EVENT:
            case _const__WEBPACK_IMPORTED_MODULE_0__.TransportItemType.EXCEPTION:
            case _const__WEBPACK_IMPORTED_MODULE_0__.TransportItemType.MEASUREMENT:
                const bk = _const__WEBPACK_IMPORTED_MODULE_0__.transportItemTypeToBodyKey[currentItem.type];
                const signals = body[bk];
                body = Object.assign(Object.assign({}, body), { [bk]: signals === undefined ? [currentItem.payload] : [...signals, currentItem.payload] });
                break;
            case _const__WEBPACK_IMPORTED_MODULE_0__.TransportItemType.TRACE:
                body = Object.assign(Object.assign({}, body), { traces: mergeResourceSpans(body.traces, currentItem.payload.resourceSpans) });
                break;
        }
    });
    return body;
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/unpatchedConsole/const.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultUnpatchedConsole: () => (/* binding */ defaultUnpatchedConsole)
/* harmony export */ });
const defaultUnpatchedConsole = Object.assign({}, console);
//# sourceMappingURL=const.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/unpatchedConsole/initialize.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeUnpatchedConsole: () => (/* binding */ initializeUnpatchedConsole),
/* harmony export */   unpatchedConsole: () => (/* binding */ unpatchedConsole)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/unpatchedConsole/const.js");

let unpatchedConsole = _const__WEBPACK_IMPORTED_MODULE_0__.defaultUnpatchedConsole;
function initializeUnpatchedConsole(config) {
    var _a;
    unpatchedConsole = (_a = config.unpatchedConsole) !== null && _a !== void 0 ? _a : unpatchedConsole;
    return unpatchedConsole;
}
//# sourceMappingURL=initialize.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/utils/date.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateNow: () => (/* binding */ dateNow),
/* harmony export */   getCurrentTimestamp: () => (/* binding */ getCurrentTimestamp),
/* harmony export */   timestampToIsoString: () => (/* binding */ timestampToIsoString)
/* harmony export */ });
function dateNow() {
    return Date.now();
}
function getCurrentTimestamp() {
    return new Date().toISOString();
}
function timestampToIsoString(value) {
    return new Date(value).toISOString();
}
//# sourceMappingURL=date.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/utils/deepEqual.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deepEqual: () => (/* binding */ deepEqual)
/* harmony export */ });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/is.js");

// This function was inspired by fast-deep-equal
// fast-deep-equal has issues with Rollup and also it checks for some edge cases that we don't need
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    // Using isTypeOf instead of isNumber as isNumber also checks against NaN
    if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isTypeof)(a, 'number') && isNaN(a)) {
        return (0,_is__WEBPACK_IMPORTED_MODULE_0__.isTypeof)(b, 'number') && isNaN(b);
    }
    const aIsArray = (0,_is__WEBPACK_IMPORTED_MODULE_0__.isArray)(a);
    const bIsArray = (0,_is__WEBPACK_IMPORTED_MODULE_0__.isArray)(b);
    if (aIsArray !== bIsArray) {
        return false;
    }
    if (aIsArray && bIsArray) {
        const length = a.length;
        if (length !== b.length) {
            return false;
        }
        for (let idx = length; idx-- !== 0;) {
            if (!deepEqual(a[idx], b[idx])) {
                return false;
            }
        }
        return true;
    }
    const aIsObject = (0,_is__WEBPACK_IMPORTED_MODULE_0__.isObject)(a);
    const bIsObject = (0,_is__WEBPACK_IMPORTED_MODULE_0__.isObject)(b);
    if (aIsObject !== bIsObject) {
        return false;
    }
    if (a && b && aIsObject && bIsObject) {
        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);
        const aLength = aKeys.length;
        const bLength = bKeys.length;
        if (aLength !== bLength) {
            return false;
        }
        for (let aKey of aKeys) {
            if (!bKeys.includes(aKey)) {
                return false;
            }
        }
        for (let aKey of aKeys) {
            if (!deepEqual(a[aKey], b[aKey])) {
                return false;
            }
        }
        return true;
    }
    return false;
}
//# sourceMappingURL=deepEqual.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/utils/is.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isBoolean: () => (/* binding */ isBoolean),
/* harmony export */   isDomError: () => (/* binding */ isDomError),
/* harmony export */   isDomException: () => (/* binding */ isDomException),
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isElementDefined: () => (/* binding */ isElementDefined),
/* harmony export */   isEmpty: () => (/* binding */ isEmpty),
/* harmony export */   isError: () => (/* binding */ isError),
/* harmony export */   isErrorDefined: () => (/* binding */ isErrorDefined),
/* harmony export */   isErrorEvent: () => (/* binding */ isErrorEvent),
/* harmony export */   isEvent: () => (/* binding */ isEvent),
/* harmony export */   isEventDefined: () => (/* binding */ isEventDefined),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isInstanceOf: () => (/* binding */ isInstanceOf),
/* harmony export */   isInt: () => (/* binding */ isInt),
/* harmony export */   isMap: () => (/* binding */ isMap),
/* harmony export */   isMapDefined: () => (/* binding */ isMapDefined),
/* harmony export */   isNull: () => (/* binding */ isNull),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isPrimitive: () => (/* binding */ isPrimitive),
/* harmony export */   isRegExp: () => (/* binding */ isRegExp),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isSymbol: () => (/* binding */ isSymbol),
/* harmony export */   isSyntheticEvent: () => (/* binding */ isSyntheticEvent),
/* harmony export */   isThenable: () => (/* binding */ isThenable),
/* harmony export */   isToString: () => (/* binding */ isToString),
/* harmony export */   isTypeof: () => (/* binding */ isTypeof),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined)
/* harmony export */ });
function isTypeof(value, type) {
    return typeof value === type;
}
function isToString(value, type) {
    return Object.prototype.toString.call(value) === `[object ${type}]`;
}
function isInstanceOf(value, reference) {
    try {
        return value instanceof reference;
    }
    catch (err) {
        return false;
    }
}
const isUndefined = ((value) => isTypeof(value, 'undefined'));
const isNull = ((value) => isTypeof(value, 'null'));
const isString = ((value) => isTypeof(value, 'string'));
const isNumber = ((value) => (isTypeof(value, 'number') && !isNaN(value)) || isTypeof(value, 'bigint'));
const isInt = ((value) => isNumber(value) && Number.isInteger(value));
const isBoolean = ((value) => isTypeof(value, 'boolean'));
const isSymbol = ((value) => isTypeof(value, 'symbol'));
const isObject = ((value) => !isNull(value) && isTypeof(value, 'object'));
const isFunction = ((value) => isTypeof(value, 'function'));
const isArray = ((value) => isToString(value, 'Array'));
const isRegExp = ((value) => isToString(value, 'RegExp'));
const isThenable = ((value) => isFunction(value === null || value === void 0 ? void 0 : value.then));
const isPrimitive = ((value) => !isObject(value) && !isFunction(value));
const isEventDefined = typeof Event !== 'undefined';
const isEvent = ((value) => isEventDefined && isInstanceOf(value, Event));
const isErrorDefined = typeof Error !== 'undefined';
const isError = ((value) => isErrorDefined && isInstanceOf(value, Error));
const isErrorEvent = ((value) => isToString(value, 'ErrorEvent'));
const isDomError = ((value) => isToString(value, 'DOMError'));
const isDomException = ((value) => isToString(value, 'DOMException'));
const isElementDefined = typeof Element !== 'undefined';
const isElement = ((value) => isElementDefined && isInstanceOf(value, Element));
const isMapDefined = typeof Map !== 'undefined';
const isMap = ((value) => isMapDefined && isInstanceOf(value, Map));
const isSyntheticEvent = ((value) => isObject(value) &&
    'nativeEvent' in value &&
    'preventDefault' in value &&
    'stopPropagation' in value);
function isEmpty(value) {
    if (value == null) {
        return true;
    }
    if (isArray(value) || isString(value)) {
        return value.length === 0;
    }
    if (isObject(value)) {
        return Object.keys(value).length === 0;
    }
    return false;
}
//# sourceMappingURL=is.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/utils/json.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCircularDependencyReplacer: () => (/* binding */ getCircularDependencyReplacer),
/* harmony export */   stringifyExternalJson: () => (/* binding */ stringifyExternalJson),
/* harmony export */   stringifyObjectValues: () => (/* binding */ stringifyObjectValues)
/* harmony export */ });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/is.js");

function getCircularDependencyReplacer() {
    const valueSeen = new WeakSet();
    return function (_key, value) {
        if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && value !== null) {
            if (valueSeen.has(value)) {
                return null;
            }
            valueSeen.add(value);
        }
        return value;
    };
}
function stringifyExternalJson(json = {}) {
    return JSON.stringify(json !== null && json !== void 0 ? json : {}, getCircularDependencyReplacer());
}
function stringifyObjectValues(obj = {}) {
    const o = {};
    for (const [key, value] of Object.entries(obj)) {
        o[key] = (0,_is__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && value !== null ? stringifyExternalJson(value) : String(value);
    }
    return o;
}
//# sourceMappingURL=json.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/utils/noop.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noop: () => (/* binding */ noop)
/* harmony export */ });
function noop() { }
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/utils/promiseBuffer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPromiseBuffer: () => (/* binding */ createPromiseBuffer)
/* harmony export */ });
function createPromiseBuffer(options) {
    const { size, concurrency } = options;
    const buffer = []; // pending, not-yet-started tasks
    let inProgress = 0; // counter for tasks currently in progress
    const work = () => {
        // if there's space for a task and buffer is not empty,
        // take one task from buffer and run it
        if (inProgress < concurrency && buffer.length) {
            const { producer, resolve, reject } = buffer.shift();
            inProgress++;
            producer().then((result) => {
                inProgress--;
                work();
                resolve(result);
            }, (reason) => {
                inProgress--;
                work();
                reject(reason);
            });
        }
    };
    const add = (promiseProducer) => {
        if (buffer.length + inProgress >= size) {
            throw new Error('Task buffer full');
        }
        return new Promise((resolve, reject) => {
            buffer.push({
                producer: promiseProducer,
                resolve,
                reject,
            });
            work();
        });
    };
    return {
        add,
    };
}
//# sourceMappingURL=promiseBuffer.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/utils/reactive.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Observable: () => (/* binding */ Observable)
/* harmony export */ });
class Observable {
    constructor() {
        this.subscribers = [];
    }
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
        return {
            unsubscribe: () => this.unsubscribe(subscriber),
        };
    }
    unsubscribe(subscriber) {
        this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
    }
    notify(value) {
        this.subscribers.forEach((subscriber) => subscriber(value));
    }
    first() {
        const result = new Observable();
        const internalSubscriber = (data) => {
            result.notify(data);
            subscription.unsubscribe();
        };
        const subscription = this.subscribe(internalSubscriber);
        const resultUnsubscribeFn = result.unsubscribe.bind(result);
        return this.withUnsubscribeOverride(result, resultUnsubscribeFn, internalSubscriber);
    }
    takeWhile(predicate) {
        const result = new Observable();
        const internalSubscriber = (value) => {
            if (predicate(value)) {
                result.notify(value);
            }
            else {
                result.unsubscribe(internalSubscriber);
            }
        };
        this.subscribe(internalSubscriber);
        const resultUnsubscribeFn = result.unsubscribe.bind(result);
        return this.withUnsubscribeOverride(result, resultUnsubscribeFn, internalSubscriber);
    }
    filter(predicate) {
        const result = new Observable();
        const internalSubscriber = (value) => {
            if (predicate(value)) {
                result.notify(value);
            }
        };
        this.subscribe(internalSubscriber);
        const resultUnsubscribeFn = result.unsubscribe.bind(result);
        return this.withUnsubscribeOverride(result, resultUnsubscribeFn, internalSubscriber);
    }
    merge(...observables) {
        const mergerObservable = new Observable();
        const subscriptions = [];
        observables.forEach((observable) => {
            const subscription = observable.subscribe((value) => {
                mergerObservable.notify(value);
            });
            subscriptions.push(subscription);
        });
        const originalUnsubscribeAll = mergerObservable.unsubscribeAll.bind(mergerObservable);
        mergerObservable.unsubscribe = () => {
            subscriptions.forEach((subscription) => subscription.unsubscribe());
            originalUnsubscribeAll();
        };
        return mergerObservable;
    }
    withUnsubscribeOverride(observable, resultUnsubscribeFn, internalSubscriber) {
        observable.unsubscribe = (subscriber) => {
            resultUnsubscribeFn(subscriber);
            this.unsubscribe(internalSubscriber);
        };
        return observable;
    }
    unsubscribeAll() {
        this.subscribers = [];
    }
}
//# sourceMappingURL=reactive.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/utils/shortId.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   genShortID: () => (/* binding */ genShortID)
/* harmony export */ });
const alphabet = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
function genShortID(length = 10) {
    return Array.from(Array(length))
        .map(() => alphabet[Math.floor(Math.random() * alphabet.length)])
        .join('');
}
//# sourceMappingURL=shortId.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/utils/sourceMaps.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBundleId: () => (/* binding */ getBundleId)
/* harmony export */ });
/* harmony import */ var _globalObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/globalObject/globalObject.js");

function getBundleId(appName) {
    return _globalObject__WEBPACK_IMPORTED_MODULE_0__.globalObject === null || _globalObject__WEBPACK_IMPORTED_MODULE_0__.globalObject === void 0 ? void 0 : _globalObject__WEBPACK_IMPORTED_MODULE_0__.globalObject[`__faroBundleId_${appName}`];
}
//# sourceMappingURL=sourceMaps.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-core/dist/esm/version.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
// auto-generated by bin/genVersion.ts
const VERSION = '1.19.0';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/config/getWebInstrumentations.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWebInstrumentations: () => (/* binding */ getWebInstrumentations)
/* harmony export */ });
/* harmony import */ var _instrumentations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/userActions/instrumentation.js");
/* harmony import */ var _instrumentations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/instrumentation.js");
/* harmony import */ var _instrumentations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/webVitals/instrumentation.js");
/* harmony import */ var _instrumentations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/instrumentation.js");
/* harmony import */ var _instrumentations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/view/instrumentation.js");
/* harmony import */ var _instrumentations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/performance/instrumentation.js");
/* harmony import */ var _instrumentations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/csp/instrumentation.js");
/* harmony import */ var _instrumentations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/console/instrumentation.js");

function getWebInstrumentations(options = {}) {
    const instrumentations = [
        new _instrumentations__WEBPACK_IMPORTED_MODULE_0__.UserActionInstrumentation(),
        new _instrumentations__WEBPACK_IMPORTED_MODULE_1__.ErrorsInstrumentation(),
        new _instrumentations__WEBPACK_IMPORTED_MODULE_2__.WebVitalsInstrumentation(),
        new _instrumentations__WEBPACK_IMPORTED_MODULE_3__.SessionInstrumentation(),
        new _instrumentations__WEBPACK_IMPORTED_MODULE_4__.ViewInstrumentation(),
    ];
    if (options.enablePerformanceInstrumentation !== false) {
        // unshift to ensure that initialization starts before the other instrumentations
        instrumentations.unshift(new _instrumentations__WEBPACK_IMPORTED_MODULE_5__.PerformanceInstrumentation());
    }
    if (options.enableContentSecurityPolicyInstrumentation !== false) {
        instrumentations.push(new _instrumentations__WEBPACK_IMPORTED_MODULE_6__.CSPInstrumentation());
    }
    if (options.captureConsole !== false) {
        instrumentations.push(new _instrumentations__WEBPACK_IMPORTED_MODULE_7__.ConsoleInstrumentation({
            disabledLevels: options.captureConsoleDisabledLevels,
        }));
    }
    return instrumentations;
}
//# sourceMappingURL=getWebInstrumentations.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/config/makeCoreConfig.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeCoreConfig: () => (/* binding */ makeCoreConfig)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/config/const.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/internalLogger/const.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/logs/const.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/unpatchedConsole/const.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/internalLogger/createInternalLogger.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/is.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/consts.js");
/* harmony import */ var _instrumentations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/stackFrames/parseStacktrace.js");
/* harmony import */ var _instrumentations_session__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/sessionManager/sessionConstants.js");
/* harmony import */ var _instrumentations_userActions_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/userActions/const.js");
/* harmony import */ var _metas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/metas/browser/meta.js");
/* harmony import */ var _metas_k6__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/metas/k6/meta.js");
/* harmony import */ var _metas_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/metas/page/meta.js");
/* harmony import */ var _transports__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/transports/fetch/transport.js");
/* harmony import */ var _getWebInstrumentations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/config/getWebInstrumentations.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};










function makeCoreConfig(browserConfig) {
    var _a;
    const transports = [];
    const internalLogger = (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_4__.createInternalLogger)(browserConfig.unpatchedConsole, browserConfig.internalLoggerLevel);
    if (browserConfig.transports) {
        if (browserConfig.url || browserConfig.apiKey) {
            internalLogger.error('if "transports" is defined, "url" and "apiKey" should not be defined');
        }
        transports.push(...browserConfig.transports);
    }
    else if (browserConfig.url) {
        transports.push(new _transports__WEBPACK_IMPORTED_MODULE_13__.FetchTransport({
            url: browserConfig.url,
            apiKey: browserConfig.apiKey,
        }));
    }
    else {
        internalLogger.error('either "url" or "transports" must be defined');
    }
    const { 
    // properties with default values
    dedupe = true, eventDomain = _consts__WEBPACK_IMPORTED_MODULE_6__.defaultEventDomain, globalObjectKey = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.defaultGlobalObjectKey, instrumentations = (0,_getWebInstrumentations__WEBPACK_IMPORTED_MODULE_14__.getWebInstrumentations)(), internalLoggerLevel = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.defaultInternalLoggerLevel, isolate = false, logArgsSerializer = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_2__.defaultLogArgsSerializer, metas = createDefaultMetas(browserConfig), paused = false, preventGlobalExposure = false, unpatchedConsole = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__.defaultUnpatchedConsole, trackUserActionsPreview = false, trackUserActionsDataAttributeName = _instrumentations_userActions_const__WEBPACK_IMPORTED_MODULE_9__.userActionDataAttribute, url: browserConfigUrl } = browserConfig, 
    // Properties without default values or which aren't used to create derived config
    restProperties = __rest(browserConfig, ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "trackUserActionsPreview", "trackUserActionsDataAttributeName", "url"]);
    return Object.assign(Object.assign({}, restProperties), { batching: Object.assign(Object.assign({}, _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.defaultBatchingConfig), browserConfig.batching), dedupe: dedupe, globalObjectKey, instrumentations: getFilteredInstrumentations(instrumentations, browserConfig), internalLoggerLevel,
        isolate,
        logArgsSerializer,
        metas,
        parseStacktrace: _instrumentations__WEBPACK_IMPORTED_MODULE_7__.parseStacktrace,
        paused,
        preventGlobalExposure,
        transports,
        unpatchedConsole,
        eventDomain, ignoreUrls: [
            ...((_a = browserConfig.ignoreUrls) !== null && _a !== void 0 ? _a : []),
            // ignore configured cloud collector url by default
            ...(browserConfigUrl ? [browserConfigUrl] : []),
            // Try our best to exclude collector URLs form other Faro instances. By default these are URLs ending with /collect or /collect/ followed by alphanumeric characters.
            /\/collect(?:\/[\w]*)?$/,
        ], sessionTracking: Object.assign(Object.assign(Object.assign({}, _instrumentations_session__WEBPACK_IMPORTED_MODULE_8__.defaultSessionTrackingConfig), browserConfig.sessionTracking), crateSessionMeta({
            trackGeolocation: browserConfig.trackGeolocation,
            sessionTracking: browserConfig.sessionTracking,
        })), trackUserActionsPreview,
        trackUserActionsDataAttributeName });
}
function getFilteredInstrumentations(instrumentations, { trackUserActionsPreview }) {
    return instrumentations.filter((instr) => {
        if (instr.name === '@grafana/faro-web-sdk:instrumentation-user-action' && !trackUserActionsPreview) {
            return false;
        }
        return true;
    });
}
function createDefaultMetas(browserConfig) {
    var _a, _b;
    const { page, generatePageId } = (_a = browserConfig === null || browserConfig === void 0 ? void 0 : browserConfig.pageTracking) !== null && _a !== void 0 ? _a : {};
    const initialMetas = [
        _metas__WEBPACK_IMPORTED_MODULE_10__.browserMeta,
        (0,_metas_page__WEBPACK_IMPORTED_MODULE_12__.createPageMeta)({ generatePageId, initialPageMeta: page }),
        ...((_b = browserConfig.metas) !== null && _b !== void 0 ? _b : []),
    ];
    const isK6BrowserSession = (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_5__.isObject)(window.k6);
    if (isK6BrowserSession) {
        return [...initialMetas, _metas_k6__WEBPACK_IMPORTED_MODULE_11__.k6Meta];
    }
    return initialMetas;
}
function crateSessionMeta({ trackGeolocation, sessionTracking, }) {
    var _a;
    const overrides = {};
    if ((0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_5__.isBoolean)(trackGeolocation)) {
        overrides.geoLocationTrackingEnabled = trackGeolocation;
    }
    if ((0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_5__.isEmpty)(overrides)) {
        return {};
    }
    return {
        session: Object.assign(Object.assign({}, ((_a = sessionTracking === null || sessionTracking === void 0 ? void 0 : sessionTracking.session) !== null && _a !== void 0 ? _a : {})), { overrides }),
    };
}
//# sourceMappingURL=makeCoreConfig.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/consts.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultEventDomain: () => (/* binding */ defaultEventDomain)
/* harmony export */ });
const defaultEventDomain = 'browser';
//# sourceMappingURL=consts.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/initialize.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeFaro: () => (/* binding */ initializeFaro)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/initialize.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/config/makeCoreConfig.js");


function initializeFaro(config) {
    const coreConfig = (0,_config__WEBPACK_IMPORTED_MODULE_1__.makeCoreConfig)(config);
    if (!coreConfig) {
        return undefined;
    }
    return (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.initializeFaro)(coreConfig);
}
//# sourceMappingURL=initialize.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/console/instrumentation.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsoleInstrumentation: () => (/* binding */ ConsoleInstrumentation)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/instrumentations/base.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/logs/const.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/exceptions/const.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/logLevels.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/version.js");
/* harmony import */ var _errors_getErrorDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/getErrorDetails.js");


class ConsoleInstrumentation extends _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.BaseInstrumentation {
    constructor(options = {}) {
        super();
        this.options = options;
        this.name = '@grafana/faro-web-sdk:instrumentation-console';
        this.version = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_4__.VERSION;
        this.errorSerializer = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.defaultLogArgsSerializer;
    }
    initialize() {
        var _a, _b, _c, _d;
        this.options = Object.assign(Object.assign({}, this.options), this.config.consoleInstrumentation);
        const serializeErrors = ((_a = this.options) === null || _a === void 0 ? void 0 : _a.serializeErrors) || !!((_b = this.options) === null || _b === void 0 ? void 0 : _b.errorSerializer);
        this.errorSerializer = serializeErrors
            ? ((_d = (_c = this.options) === null || _c === void 0 ? void 0 : _c.errorSerializer) !== null && _d !== void 0 ? _d : _grafana_faro_core__WEBPACK_IMPORTED_MODULE_2__.defaultErrorArgsSerializer)
            : _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.defaultLogArgsSerializer;
        _grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__.allLogLevels
            .filter((level) => { var _a, _b; return !((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.disabledLevels) !== null && _b !== void 0 ? _b : ConsoleInstrumentation.defaultDisabledLevels).includes(level); })
            .forEach((level) => {
            /* eslint-disable-next-line no-console */
            console[level] = (...args) => {
                var _a, _b;
                try {
                    if (level === _grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__.LogLevel.ERROR && !((_a = this.options) === null || _a === void 0 ? void 0 : _a.consoleErrorAsLog)) {
                        const { value, type, stackFrames } = (0,_errors_getErrorDetails__WEBPACK_IMPORTED_MODULE_5__.getDetailsFromConsoleErrorArgs)(args, this.errorSerializer);
                        if (value && !type && !stackFrames) {
                            this.api.pushError(new Error(ConsoleInstrumentation.consoleErrorPrefix + value));
                            return;
                        }
                        this.api.pushError(new Error(ConsoleInstrumentation.consoleErrorPrefix + value), { type, stackFrames });
                    }
                    else if (level === _grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__.LogLevel.ERROR && ((_b = this.options) === null || _b === void 0 ? void 0 : _b.consoleErrorAsLog)) {
                        const { value, type, stackFrames } = (0,_errors_getErrorDetails__WEBPACK_IMPORTED_MODULE_5__.getDetailsFromConsoleErrorArgs)(args, this.errorSerializer);
                        this.api.pushLog(value ? [ConsoleInstrumentation.consoleErrorPrefix + value] : args, {
                            level,
                            context: {
                                value: value !== null && value !== void 0 ? value : '',
                                type: type !== null && type !== void 0 ? type : '',
                                stackFrames: (stackFrames === null || stackFrames === void 0 ? void 0 : stackFrames.length) ? (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_2__.defaultErrorArgsSerializer)(stackFrames) : '',
                            },
                        });
                    }
                    else {
                        this.api.pushLog(args, { level });
                    }
                }
                catch (err) {
                    this.logError(err);
                }
                finally {
                    this.unpatchedConsole[level](...args);
                }
            };
        });
    }
}
ConsoleInstrumentation.defaultDisabledLevels = [_grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__.LogLevel.DEBUG, _grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__.LogLevel.TRACE, _grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__.LogLevel.LOG];
ConsoleInstrumentation.consoleErrorPrefix = 'console.error: ';
//# sourceMappingURL=instrumentation.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/csp/instrumentation.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSPInstrumentation: () => (/* binding */ CSPInstrumentation)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/instrumentations/base.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/json.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/version.js");

class CSPInstrumentation extends _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.BaseInstrumentation {
    constructor() {
        super();
        this.name = '@grafana/faro-web-sdk:instrumentation-csp';
        this.version = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_2__.VERSION;
    }
    initialize() {
        document.addEventListener('securitypolicyviolation', this.securitypolicyviolationHandler.bind(this));
    }
    destroy() {
        document.removeEventListener('securitypolicyviolation', this.securitypolicyviolationHandler);
    }
    securitypolicyviolationHandler(ev) {
        this.api.pushEvent('securitypolicyviolation', (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.stringifyObjectValues)(ev));
    }
}
//# sourceMappingURL=instrumentation.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/const.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   domErrorType: () => (/* binding */ domErrorType),
/* harmony export */   domExceptionType: () => (/* binding */ domExceptionType),
/* harmony export */   objectEventValue: () => (/* binding */ objectEventValue),
/* harmony export */   primitiveUnhandledType: () => (/* binding */ primitiveUnhandledType),
/* harmony export */   primitiveUnhandledValue: () => (/* binding */ primitiveUnhandledValue),
/* harmony export */   unknownSymbolString: () => (/* binding */ unknownSymbolString),
/* harmony export */   valueTypeRegex: () => (/* binding */ valueTypeRegex)
/* harmony export */ });
const primitiveUnhandledValue = 'Non-Error promise rejection captured with value:';
const primitiveUnhandledType = 'UnhandledRejection';
const domErrorType = 'DOMError';
const domExceptionType = 'DOMException';
const objectEventValue = 'Non-Error exception captured with keys:';
const unknownSymbolString = '?';
const valueTypeRegex = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
//# sourceMappingURL=const.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/getErrorDetails.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDetailsFromConsoleErrorArgs: () => (/* binding */ getDetailsFromConsoleErrorArgs),
/* harmony export */   getDetailsFromErrorArgs: () => (/* binding */ getDetailsFromErrorArgs),
/* harmony export */   getErrorDetails: () => (/* binding */ getErrorDetails)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/is.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/const.js");
/* harmony import */ var _getValueAndTypeFromMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/getValueAndTypeFromMessage.js");
/* harmony import */ var _stackFrames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/stackFrames/buildStackFrame.js");
/* harmony import */ var _stackFrames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/stackFrames/getStackFramesFromError.js");




function getErrorDetails(evt) {
    let value;
    let type;
    let stackFrames = [];
    let isDomErrorRes;
    let isEventRes;
    if ((0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.isErrorEvent)(evt) && evt.error) {
        value = evt.error.message;
        type = evt.error.name;
        stackFrames = (0,_stackFrames__WEBPACK_IMPORTED_MODULE_4__.getStackFramesFromError)(evt.error);
    }
    else if ((isDomErrorRes = (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.isDomError)(evt)) || (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.isDomException)(evt)) {
        const { name, message } = evt;
        type = name !== null && name !== void 0 ? name : (isDomErrorRes ? _const__WEBPACK_IMPORTED_MODULE_1__.domErrorType : _const__WEBPACK_IMPORTED_MODULE_1__.domExceptionType);
        value = message ? `${type}: ${message}` : type;
    }
    else if ((0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.isError)(evt)) {
        value = evt.message;
        stackFrames = (0,_stackFrames__WEBPACK_IMPORTED_MODULE_4__.getStackFramesFromError)(evt);
    }
    else if ((0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.isObject)(evt) || (isEventRes = (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.isEvent)(evt))) {
        type = isEventRes ? evt.constructor.name : undefined;
        value = `${_const__WEBPACK_IMPORTED_MODULE_1__.objectEventValue} ${Object.keys(evt)}`;
    }
    return [value, type, stackFrames];
}
function getDetailsFromErrorArgs(args) {
    const [evt, source, lineno, colno, error] = args;
    let value;
    let type;
    let stackFrames = [];
    const eventIsString = (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.isString)(evt);
    const initialStackFrame = (0,_stackFrames__WEBPACK_IMPORTED_MODULE_3__.buildStackFrame)(source, _const__WEBPACK_IMPORTED_MODULE_1__.unknownSymbolString, lineno, colno);
    if (error || !eventIsString) {
        [value, type, stackFrames] = getErrorDetails((error !== null && error !== void 0 ? error : evt));
        if (stackFrames.length === 0) {
            stackFrames = [initialStackFrame];
        }
    }
    else if (eventIsString) {
        [value, type] = (0,_getValueAndTypeFromMessage__WEBPACK_IMPORTED_MODULE_2__.getValueAndTypeFromMessage)(evt);
        stackFrames = [initialStackFrame];
    }
    return { value, type, stackFrames };
}
function getDetailsFromConsoleErrorArgs(args, serializer) {
    if ((0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.isError)(args[0])) {
        return getDetailsFromErrorArgs(args);
    }
    else {
        return { value: serializer(args) };
    }
}
//# sourceMappingURL=getErrorDetails.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/getValueAndTypeFromMessage.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getValueAndTypeFromMessage: () => (/* binding */ getValueAndTypeFromMessage)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/exceptions/const.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/const.js");


function getValueAndTypeFromMessage(message) {
    var _a, _b;
    const groups = message.match(_const__WEBPACK_IMPORTED_MODULE_1__.valueTypeRegex);
    const type = (_a = groups === null || groups === void 0 ? void 0 : groups[1]) !== null && _a !== void 0 ? _a : _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.defaultExceptionType;
    const value = (_b = groups === null || groups === void 0 ? void 0 : groups[2]) !== null && _b !== void 0 ? _b : message;
    return [value, type];
}
//# sourceMappingURL=getValueAndTypeFromMessage.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/instrumentation.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorsInstrumentation: () => (/* binding */ ErrorsInstrumentation)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/instrumentations/base.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/version.js");
/* harmony import */ var _registerOnerror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/registerOnerror.js");
/* harmony import */ var _registerOnunhandledrejection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/registerOnunhandledrejection.js");



class ErrorsInstrumentation extends _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.BaseInstrumentation {
    constructor() {
        super(...arguments);
        this.name = '@grafana/faro-web-sdk:instrumentation-errors';
        this.version = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.VERSION;
    }
    initialize() {
        this.logDebug('Initializing');
        (0,_registerOnerror__WEBPACK_IMPORTED_MODULE_2__.registerOnerror)(this.api);
        (0,_registerOnunhandledrejection__WEBPACK_IMPORTED_MODULE_3__.registerOnunhandledrejection)(this.api);
    }
}
//# sourceMappingURL=instrumentation.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/registerOnerror.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerOnerror: () => (/* binding */ registerOnerror)
/* harmony export */ });
/* harmony import */ var _getErrorDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/getErrorDetails.js");

function registerOnerror(api) {
    const oldOnerror = window.onerror;
    window.onerror = (...args) => {
        try {
            const { value, type, stackFrames } = (0,_getErrorDetails__WEBPACK_IMPORTED_MODULE_0__.getDetailsFromErrorArgs)(args);
            const originalError = args[4];
            if (value) {
                const options = { type, stackFrames };
                if (originalError != null) {
                    options.originalError = originalError;
                }
                api.pushError(new Error(value), options);
            }
        }
        finally {
            oldOnerror === null || oldOnerror === void 0 ? void 0 : oldOnerror.apply(window, args);
        }
    };
}
//# sourceMappingURL=registerOnerror.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/registerOnunhandledrejection.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerOnunhandledrejection: () => (/* binding */ registerOnunhandledrejection)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/is.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/const.js");
/* harmony import */ var _getErrorDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/getErrorDetails.js");



function registerOnunhandledrejection(api) {
    window.addEventListener('unhandledrejection', (evt) => {
        var _a, _b;
        let error = evt;
        if (error.reason) {
            error = evt.reason;
        }
        else if ((_a = evt.detail) === null || _a === void 0 ? void 0 : _a.reason) {
            error = (_b = evt.detail) === null || _b === void 0 ? void 0 : _b.reason;
        }
        let value;
        let type;
        let stackFrames = [];
        if ((0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.isPrimitive)(error)) {
            value = `${_const__WEBPACK_IMPORTED_MODULE_1__.primitiveUnhandledValue} ${String(error)}`;
            type = _const__WEBPACK_IMPORTED_MODULE_1__.primitiveUnhandledType;
        }
        else {
            [value, type, stackFrames] = (0,_getErrorDetails__WEBPACK_IMPORTED_MODULE_2__.getErrorDetails)(error);
        }
        if (value) {
            api.pushError(new Error(value), { type, stackFrames });
        }
    });
}
//# sourceMappingURL=registerOnunhandledrejection.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/stackFrames/buildStackFrame.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildStackFrame: () => (/* binding */ buildStackFrame)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/stackFrames/const.js");

function buildStackFrame(filename, func, lineno, colno) {
    const stackFrame = {
        filename: filename || document.location.href,
        function: func || _const__WEBPACK_IMPORTED_MODULE_0__.unknownSymbolString,
    };
    if (lineno !== undefined) {
        stackFrame.lineno = lineno;
    }
    if (colno !== undefined) {
        stackFrame.colno = colno;
    }
    return stackFrame;
}
//# sourceMappingURL=buildStackFrame.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/stackFrames/const.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   atString: () => (/* binding */ atString),
/* harmony export */   evalString: () => (/* binding */ evalString),
/* harmony export */   firefoxEvalRegex: () => (/* binding */ firefoxEvalRegex),
/* harmony export */   firefoxEvalString: () => (/* binding */ firefoxEvalString),
/* harmony export */   firefoxLineRegex: () => (/* binding */ firefoxLineRegex),
/* harmony export */   newLineString: () => (/* binding */ newLineString),
/* harmony export */   reactMinifiedRegex: () => (/* binding */ reactMinifiedRegex),
/* harmony export */   safariExtensionString: () => (/* binding */ safariExtensionString),
/* harmony export */   safariWebExtensionString: () => (/* binding */ safariWebExtensionString),
/* harmony export */   unknownSymbolString: () => (/* binding */ unknownSymbolString),
/* harmony export */   webkitAddressAtString: () => (/* binding */ webkitAddressAtString),
/* harmony export */   webkitAddressAtStringLength: () => (/* binding */ webkitAddressAtStringLength),
/* harmony export */   webkitEvalRegex: () => (/* binding */ webkitEvalRegex),
/* harmony export */   webkitEvalString: () => (/* binding */ webkitEvalString),
/* harmony export */   webkitLineRegex: () => (/* binding */ webkitLineRegex)
/* harmony export */ });
const newLineString = '\n';
const evalString = 'eval';
const unknownSymbolString = '?';
const atString = '@';
const webkitLineRegex = /^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const webkitEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const webkitEvalString = 'eval';
const webkitAddressAtString = 'address at ';
const webkitAddressAtStringLength = webkitAddressAtString.length;
const firefoxLineRegex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
const firefoxEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
const firefoxEvalString = ' > eval';
const safariExtensionString = 'safari-extension';
const safariWebExtensionString = 'safari-web-extension';
const reactMinifiedRegex = /Minified React error #\d+;/i;
//# sourceMappingURL=const.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/stackFrames/getDataFromSafariExtensions.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDataFromSafariExtensions: () => (/* binding */ getDataFromSafariExtensions)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/stackFrames/const.js");

function getDataFromSafariExtensions(func, filename) {
    const isSafariExtension = func === null || func === void 0 ? void 0 : func.includes(_const__WEBPACK_IMPORTED_MODULE_0__.safariExtensionString);
    const isSafariWebExtension = !isSafariExtension && (func === null || func === void 0 ? void 0 : func.includes(_const__WEBPACK_IMPORTED_MODULE_0__.safariWebExtensionString));
    if (!isSafariExtension && !isSafariWebExtension) {
        return [func, filename];
    }
    return [
        (func === null || func === void 0 ? void 0 : func.includes(_const__WEBPACK_IMPORTED_MODULE_0__.atString)) ? func.split(_const__WEBPACK_IMPORTED_MODULE_0__.atString)[0] : func,
        isSafariExtension ? `${_const__WEBPACK_IMPORTED_MODULE_0__.safariExtensionString}:${filename}` : `${_const__WEBPACK_IMPORTED_MODULE_0__.safariWebExtensionString}:${filename}`,
    ];
}
//# sourceMappingURL=getDataFromSafariExtensions.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/stackFrames/getStackFramesFromError.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStackFramesFromError: () => (/* binding */ getStackFramesFromError)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/is.js");
/* harmony import */ var _buildStackFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/stackFrames/buildStackFrame.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/stackFrames/const.js");
/* harmony import */ var _getDataFromSafariExtensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/stackFrames/getDataFromSafariExtensions.js");




function getStackFramesFromError(error) {
    let lines = [];
    if (error.stacktrace) {
        lines = error.stacktrace.split(_const__WEBPACK_IMPORTED_MODULE_2__.newLineString).filter((_line, idx) => idx % 2 === 0);
    }
    else if (error.stack) {
        lines = error.stack.split(_const__WEBPACK_IMPORTED_MODULE_2__.newLineString);
    }
    const stackFrames = lines.reduce((acc, line, idx) => {
        let parts;
        let func;
        let filename;
        let lineno;
        let colno;
        if ((parts = _const__WEBPACK_IMPORTED_MODULE_2__.webkitLineRegex.exec(line))) {
            func = parts[1];
            filename = parts[2];
            lineno = parts[3];
            colno = parts[4];
            if (filename === null || filename === void 0 ? void 0 : filename.startsWith(_const__WEBPACK_IMPORTED_MODULE_2__.webkitEvalString)) {
                const submatch = _const__WEBPACK_IMPORTED_MODULE_2__.webkitEvalRegex.exec(filename);
                if (submatch) {
                    filename = submatch[1];
                    lineno = submatch[2];
                    colno = submatch[3];
                }
            }
            filename = (filename === null || filename === void 0 ? void 0 : filename.startsWith(_const__WEBPACK_IMPORTED_MODULE_2__.webkitAddressAtString))
                ? filename.substring(_const__WEBPACK_IMPORTED_MODULE_2__.webkitAddressAtStringLength)
                : filename;
            [func, filename] = (0,_getDataFromSafariExtensions__WEBPACK_IMPORTED_MODULE_3__.getDataFromSafariExtensions)(func, filename);
        }
        else if ((parts = _const__WEBPACK_IMPORTED_MODULE_2__.firefoxLineRegex.exec(line))) {
            func = parts[1];
            filename = parts[3];
            lineno = parts[4];
            colno = parts[5];
            if (!!filename && filename.includes(_const__WEBPACK_IMPORTED_MODULE_2__.firefoxEvalString)) {
                const submatch = _const__WEBPACK_IMPORTED_MODULE_2__.firefoxEvalRegex.exec(filename);
                if (submatch) {
                    func = func || _const__WEBPACK_IMPORTED_MODULE_2__.evalString;
                    filename = submatch[1];
                    lineno = submatch[2];
                }
            }
            else if (idx === 0 && !colno && (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.isNumber)(error.columnNumber)) {
                colno = String(error.columnNumber + 1);
            }
            [func, filename] = (0,_getDataFromSafariExtensions__WEBPACK_IMPORTED_MODULE_3__.getDataFromSafariExtensions)(func, filename);
        }
        if (filename || func) {
            acc.push((0,_buildStackFrame__WEBPACK_IMPORTED_MODULE_1__.buildStackFrame)(filename, func, lineno ? Number(lineno) : undefined, colno ? Number(colno) : undefined));
        }
        return acc;
    }, []);
    if (_const__WEBPACK_IMPORTED_MODULE_2__.reactMinifiedRegex.test(error.message)) {
        return stackFrames.slice(1);
    }
    return stackFrames;
}
//# sourceMappingURL=getStackFramesFromError.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/stackFrames/parseStacktrace.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseStacktrace: () => (/* binding */ parseStacktrace)
/* harmony export */ });
/* harmony import */ var _getStackFramesFromError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/errors/stackFrames/getStackFramesFromError.js");

function parseStacktrace(error) {
    return {
        frames: (0,_getStackFramesFromError__WEBPACK_IMPORTED_MODULE_0__.getStackFramesFromError)(error),
    };
}
//# sourceMappingURL=parseStacktrace.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/instrumentationConstants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NAVIGATION_ID_STORAGE_KEY: () => (/* binding */ NAVIGATION_ID_STORAGE_KEY)
/* harmony export */ });
const NAVIGATION_ID_STORAGE_KEY = 'com.grafana.faro.lastNavigationId';
//# sourceMappingURL=instrumentationConstants.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/performance/instrumentation.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerformanceInstrumentation: () => (/* binding */ PerformanceInstrumentation),
/* harmony export */   performanceEntriesSubscription: () => (/* binding */ performanceEntriesSubscription)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/instrumentations/base.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/reactive.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/version.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/performance/navigation.js");
/* harmony import */ var _performanceUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/performance/performanceUtils.js");
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/performance/resource.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const performanceEntriesSubscription = new _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.Observable();
class PerformanceInstrumentation extends _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.BaseInstrumentation {
    constructor() {
        super(...arguments);
        this.name = '@grafana/faro-web-sdk:instrumentation-performance';
        this.version = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_2__.VERSION;
    }
    initialize() {
        if (!(0,_performanceUtils__WEBPACK_IMPORTED_MODULE_4__.performanceObserverSupported)()) {
            this.logDebug('performance observer not supported. Disable performance instrumentation.');
            return;
        }
        (0,_performanceUtils__WEBPACK_IMPORTED_MODULE_4__.onDocumentReady)(() => __awaiter(this, void 0, void 0, function* () {
            const pushEvent = this.api.pushEvent;
            const { faroNavigationId } = yield (0,_navigation__WEBPACK_IMPORTED_MODULE_3__.getNavigationTimings)(pushEvent);
            if (faroNavigationId != null) {
                (0,_resource__WEBPACK_IMPORTED_MODULE_5__.observeResourceTimings)(faroNavigationId, pushEvent, performanceEntriesSubscription);
            }
        }));
    }
}
//# sourceMappingURL=instrumentation.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/performance/navigation.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNavigationTimings: () => (/* binding */ getNavigationTimings)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/shortId.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/consts.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/utils/webStorage.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/utils/url.js");
/* harmony import */ var _instrumentationConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/instrumentationConstants.js");
/* harmony import */ var _performanceConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/performance/performanceConstants.js");
/* harmony import */ var _performanceUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/performance/performanceUtils.js");






function getNavigationTimings(pushEvent) {
    let faroNavigationEntryResolve;
    const faroNavigationEntryPromise = new Promise((resolve) => {
        faroNavigationEntryResolve = resolve;
    });
    const observer = new PerformanceObserver((observedEntries) => {
        var _a;
        const [navigationEntryRaw] = observedEntries.getEntries();
        if (navigationEntryRaw == null || (0,_utils_url__WEBPACK_IMPORTED_MODULE_3__.isUrlIgnored)(navigationEntryRaw.name)) {
            return;
        }
        const navEntryJson = navigationEntryRaw.toJSON();
        let spanContext = (0,_performanceUtils__WEBPACK_IMPORTED_MODULE_6__.getSpanContextFromServerTiming)(navEntryJson === null || navEntryJson === void 0 ? void 0 : navEntryJson.serverTiming);
        const faroPreviousNavigationId = (_a = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getItem)(_instrumentationConstants__WEBPACK_IMPORTED_MODULE_4__.NAVIGATION_ID_STORAGE_KEY, _utils__WEBPACK_IMPORTED_MODULE_2__.webStorageType.session)) !== null && _a !== void 0 ? _a : _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.unknownString;
        const faroNavigationEntry = Object.assign(Object.assign({}, (0,_performanceUtils__WEBPACK_IMPORTED_MODULE_6__.createFaroNavigationTiming)(navEntryJson)), { faroNavigationId: (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.genShortID)(), faroPreviousNavigationId });
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.setItem)(_instrumentationConstants__WEBPACK_IMPORTED_MODULE_4__.NAVIGATION_ID_STORAGE_KEY, faroNavigationEntry.faroNavigationId, _utils__WEBPACK_IMPORTED_MODULE_2__.webStorageType.session);
        pushEvent('faro.performance.navigation', faroNavigationEntry, undefined, {
            spanContext,
            timestampOverwriteMs: performance.timeOrigin + navEntryJson.startTime,
        });
        faroNavigationEntryResolve(faroNavigationEntry);
    });
    observer.observe({
        type: _performanceConstants__WEBPACK_IMPORTED_MODULE_5__.NAVIGATION_ENTRY,
        buffered: true,
    });
    return faroNavigationEntryPromise;
}
//# sourceMappingURL=navigation.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/performance/performanceConstants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NAVIGATION_ENTRY: () => (/* binding */ NAVIGATION_ENTRY),
/* harmony export */   RESOURCE_ENTRY: () => (/* binding */ RESOURCE_ENTRY)
/* harmony export */ });
const NAVIGATION_ENTRY = 'navigation';
const RESOURCE_ENTRY = 'resource';
//# sourceMappingURL=performanceConstants.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/performance/performanceUtils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFaroNavigationTiming: () => (/* binding */ createFaroNavigationTiming),
/* harmony export */   createFaroResourceTiming: () => (/* binding */ createFaroResourceTiming),
/* harmony export */   getSpanContextFromServerTiming: () => (/* binding */ getSpanContextFromServerTiming),
/* harmony export */   includePerformanceEntry: () => (/* binding */ includePerformanceEntry),
/* harmony export */   onDocumentReady: () => (/* binding */ onDocumentReady),
/* harmony export */   performanceObserverSupported: () => (/* binding */ performanceObserverSupported)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/is.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/consts.js");

const w3cTraceparentFormat = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;
// Extract traceparent from serverTiming, if present
function getSpanContextFromServerTiming(serverTimings = []) {
    for (const serverEntry of serverTimings) {
        if (serverEntry.name === 'traceparent') {
            if (!w3cTraceparentFormat.test(serverEntry.description)) {
                continue;
            }
            const [, traceId, spanId] = serverEntry.description.split('-');
            if (traceId != null && spanId != null) {
                return { traceId, spanId };
            }
            break;
        }
    }
    return undefined;
}
function performanceObserverSupported() {
    return 'PerformanceObserver' in window;
}
function onDocumentReady(handleReady) {
    if (document.readyState === 'complete') {
        handleReady();
    }
    else {
        const readyStateCompleteHandler = () => {
            if (document.readyState === 'complete') {
                handleReady();
                document.removeEventListener('readystatechange', readyStateCompleteHandler);
            }
        };
        document.addEventListener('readystatechange', readyStateCompleteHandler);
    }
}
function includePerformanceEntry(performanceEntryJSON, allowProps = {}) {
    for (const [allowPropKey, allowPropValue] of Object.entries(allowProps)) {
        const perfEntryPropVal = performanceEntryJSON[allowPropKey];
        if (perfEntryPropVal == null) {
            return false;
        }
        if ((0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(allowPropValue)) {
            return allowPropValue.includes(perfEntryPropVal);
        }
        return perfEntryPropVal === allowPropValue;
    }
    // empty object allows all
    return true;
}
function createFaroResourceTiming(resourceEntryRaw) {
    const { connectEnd, connectStart, decodedBodySize, domainLookupEnd, domainLookupStart, duration, encodedBodySize, fetchStart, initiatorType, name, nextHopProtocol, redirectEnd, redirectStart, 
    // @ts-expect-error the renderBlockingStatus property is not available in all browsers
    renderBlockingStatus: rbs, requestStart, responseEnd, responseStart, responseStatus, secureConnectionStart, transferSize, workerStart, } = resourceEntryRaw;
    return {
        name: name,
        duration: toFaroPerformanceTimingString(duration),
        tcpHandshakeTime: toFaroPerformanceTimingString(connectEnd - connectStart),
        dnsLookupTime: toFaroPerformanceTimingString(domainLookupEnd - domainLookupStart),
        tlsNegotiationTime: toFaroPerformanceTimingString(connectEnd - secureConnectionStart),
        responseStatus: toFaroPerformanceTimingString(responseStatus),
        redirectTime: toFaroPerformanceTimingString(redirectEnd - redirectStart),
        requestTime: toFaroPerformanceTimingString(responseStart - requestStart),
        responseTime: toFaroPerformanceTimingString(responseEnd - responseStart),
        fetchTime: toFaroPerformanceTimingString(responseEnd - fetchStart),
        serviceWorkerTime: toFaroPerformanceTimingString(fetchStart - workerStart),
        decodedBodySize: toFaroPerformanceTimingString(decodedBodySize),
        encodedBodySize: toFaroPerformanceTimingString(encodedBodySize),
        cacheHitStatus: getCacheType(),
        renderBlockingStatus: toFaroPerformanceTimingString(rbs),
        protocol: nextHopProtocol,
        initiatorType: initiatorType,
        visibilityState: document.visibilityState,
        ttfb: toFaroPerformanceTimingString(responseStart - requestStart),
        transferSize: toFaroPerformanceTimingString(transferSize),
        // TODO: add in future iteration, ideally after nested objects are supported by the collector.
        // serverTiming: resourceEntryRaw.serverTiming,
    };
    function getCacheType() {
        let cacheType = 'fullLoad';
        if (transferSize === 0) {
            if (decodedBodySize > 0) {
                cacheType = 'cache';
            }
        }
        else {
            if (responseStatus != null) {
                if (responseStatus === 304) {
                    cacheType = 'conditionalFetch';
                }
            }
            else if (encodedBodySize > 0 && transferSize < encodedBodySize) {
                cacheType = 'conditionalFetch';
            }
        }
        return cacheType;
    }
}
function createFaroNavigationTiming(navigationEntryRaw) {
    const { activationStart, domComplete, domContentLoadedEventEnd, domContentLoadedEventStart, domInteractive, fetchStart, loadEventEnd, loadEventStart, responseStart, type, } = navigationEntryRaw;
    const parserStart = getDocumentParsingTime();
    return Object.assign(Object.assign({}, createFaroResourceTiming(navigationEntryRaw)), { pageLoadTime: toFaroPerformanceTimingString(domComplete - fetchStart), documentParsingTime: toFaroPerformanceTimingString(parserStart ? domInteractive - parserStart : null), domProcessingTime: toFaroPerformanceTimingString(domComplete - domInteractive), domContentLoadHandlerTime: toFaroPerformanceTimingString(domContentLoadedEventEnd - domContentLoadedEventStart), onLoadTime: toFaroPerformanceTimingString(loadEventEnd - loadEventStart), 
        // For navigation entries we can calculate the TTFB based on activationStart. We overwrite the TTFB value coming with the resource entry.
        // For more accuracy on prerendered pages page we calculate relative top the activationStart instead of the start of the navigation.
        // clamp to 0 if activationStart occurs after first byte is received.
        ttfb: toFaroPerformanceTimingString(Math.max(responseStart - (activationStart !== null && activationStart !== void 0 ? activationStart : 0), 0)), type: type });
}
function getDocumentParsingTime() {
    var _a;
    if (((_a = performance.timing) === null || _a === void 0 ? void 0 : _a.domLoading) != null) {
        // the browser is about to start parsing the first received bytes of the HTML document.
        // This property is deprecated but there isn't a really good alternative atm.
        // For now we stick with domLoading and keep researching a better alternative.
        return performance.timing.domLoading - performance.timeOrigin;
    }
    return null;
}
function toFaroPerformanceTimingString(v) {
    if (v == null) {
        return _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.unknownString;
    }
    if (typeof v === 'number') {
        return Math.round(v > 0 ? v : 0).toString();
    }
    return v.toString();
}
//# sourceMappingURL=performanceUtils.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/performance/resource.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observeResourceTimings: () => (/* binding */ observeResourceTimings)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/sdk/registerFaro.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/shortId.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/utils/url.js");
/* harmony import */ var _performanceConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/performance/performanceConstants.js");
/* harmony import */ var _performanceUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/performance/performanceUtils.js");




const DEFAULT_TRACK_RESOURCES = { initiatorType: ['xmlhttprequest', 'fetch'] };
function observeResourceTimings(faroNavigationId, pushEvent, observable) {
    const trackResources = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.faro.config.trackResources;
    const observer = new PerformanceObserver((observedEntries) => {
        const entries = observedEntries.getEntries();
        for (const resourceEntryRaw of entries) {
            if ((0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.isUrlIgnored)(resourceEntryRaw.name)) {
                return;
            }
            const resourceEntryJson = resourceEntryRaw.toJSON();
            let spanContext = (0,_performanceUtils__WEBPACK_IMPORTED_MODULE_4__.getSpanContextFromServerTiming)(resourceEntryJson === null || resourceEntryJson === void 0 ? void 0 : resourceEntryJson.serverTiming);
            if ((trackResources == null && (0,_performanceUtils__WEBPACK_IMPORTED_MODULE_4__.includePerformanceEntry)(resourceEntryJson, DEFAULT_TRACK_RESOURCES)) ||
                trackResources) {
                const faroResourceEntry = Object.assign(Object.assign({}, (0,_performanceUtils__WEBPACK_IMPORTED_MODULE_4__.createFaroResourceTiming)(resourceEntryJson)), { faroNavigationId, faroResourceId: (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.genShortID)() });
                if (_grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.faro.config.trackUserActionsPreview) {
                    observable === null || observable === void 0 ? void 0 : observable.notify({
                        type: _performanceConstants__WEBPACK_IMPORTED_MODULE_3__.RESOURCE_ENTRY,
                    });
                }
                pushEvent('faro.performance.resource', faroResourceEntry, undefined, {
                    spanContext,
                    timestampOverwriteMs: performance.timeOrigin + resourceEntryJson.startTime,
                });
            }
        }
    });
    observer.observe({
        type: _performanceConstants__WEBPACK_IMPORTED_MODULE_3__.RESOURCE_ENTRY,
        buffered: true,
    });
}
//# sourceMappingURL=resource.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/instrumentation.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionInstrumentation: () => (/* binding */ SessionInstrumentation)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/instrumentations/base.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/semantic.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/date.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/version.js");
/* harmony import */ var _metas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/metas/session/createSession.js");
/* harmony import */ var _sessionManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/sessionManager/sampling.js");
/* harmony import */ var _sessionManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/sessionManager/getSessionManagerByConfig.js");
/* harmony import */ var _sessionManager_PersistentSessionsManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/sessionManager/PersistentSessionsManager.js");
/* harmony import */ var _sessionManager_sessionManagerUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/sessionManager/sessionManagerUtils.js");





class SessionInstrumentation extends _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.BaseInstrumentation {
    constructor() {
        super(...arguments);
        this.name = '@grafana/faro-web-sdk:instrumentation-session';
        this.version = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__.VERSION;
    }
    sendSessionStartEvent(meta) {
        var _a, _b;
        const session = meta.session;
        if (session && session.id !== ((_a = this.notifiedSession) === null || _a === void 0 ? void 0 : _a.id)) {
            if (this.notifiedSession && this.notifiedSession.id === ((_b = session.attributes) === null || _b === void 0 ? void 0 : _b['previousSession'])) {
                this.api.pushEvent(_grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.EVENT_SESSION_EXTEND, {}, undefined, { skipDedupe: true });
                this.notifiedSession = session;
                return;
            }
            this.notifiedSession = session;
            // no need to add attributes and session id, they are included as part of meta
            // automatically
            this.api.pushEvent(_grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.EVENT_SESSION_START, {}, undefined, { skipDedupe: true });
        }
    }
    createInitialSession(SessionManager, sessionsConfig) {
        var _a, _b, _c, _d, _e, _f;
        let storedUserSession = SessionManager.fetchUserSession();
        if (sessionsConfig.persistent && sessionsConfig.maxSessionPersistenceTime && storedUserSession) {
            const now = (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_2__.dateNow)();
            const shouldClearPersistentSession = storedUserSession.lastActivity < now - sessionsConfig.maxSessionPersistenceTime;
            if (shouldClearPersistentSession) {
                _sessionManager_PersistentSessionsManager__WEBPACK_IMPORTED_MODULE_7__.PersistentSessionsManager.removeUserSession();
                storedUserSession = null;
            }
        }
        let lifecycleType;
        let initialSession;
        if ((0,_sessionManager_sessionManagerUtils__WEBPACK_IMPORTED_MODULE_8__.isUserSessionValid)(storedUserSession)) {
            const sessionId = storedUserSession === null || storedUserSession === void 0 ? void 0 : storedUserSession.sessionId;
            initialSession = (0,_sessionManager_sessionManagerUtils__WEBPACK_IMPORTED_MODULE_8__.createUserSessionObject)({
                sessionId,
                isSampled: storedUserSession.isSampled || false,
                started: storedUserSession === null || storedUserSession === void 0 ? void 0 : storedUserSession.started,
            });
            const storedUserSessionMeta = storedUserSession === null || storedUserSession === void 0 ? void 0 : storedUserSession.sessionMeta;
            // For resumed sessions we want to merge the previous overrides with the configured ones.
            // If the same key is present in both, the new one will override the old one.
            const overrides = Object.assign(Object.assign({}, (_a = sessionsConfig.session) === null || _a === void 0 ? void 0 : _a.overrides), storedUserSessionMeta === null || storedUserSessionMeta === void 0 ? void 0 : storedUserSessionMeta.overrides);
            initialSession.sessionMeta = Object.assign(Object.assign({}, sessionsConfig.session), { id: sessionId, attributes: Object.assign(Object.assign(Object.assign({}, (_b = sessionsConfig.session) === null || _b === void 0 ? void 0 : _b.attributes), storedUserSessionMeta === null || storedUserSessionMeta === void 0 ? void 0 : storedUserSessionMeta.attributes), { 
                    // For valid resumed sessions we do not want to recalculate the sampling decision on each init phase.
                    isSampled: initialSession.isSampled.toString() }), overrides });
            lifecycleType = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.EVENT_SESSION_RESUME;
        }
        else {
            const sessionId = (_d = (_c = sessionsConfig.session) === null || _c === void 0 ? void 0 : _c.id) !== null && _d !== void 0 ? _d : (0,_metas__WEBPACK_IMPORTED_MODULE_4__.createSession)().id;
            initialSession = (0,_sessionManager_sessionManagerUtils__WEBPACK_IMPORTED_MODULE_8__.createUserSessionObject)({
                sessionId,
                isSampled: (0,_sessionManager__WEBPACK_IMPORTED_MODULE_5__.isSampled)(),
            });
            const overrides = (_e = sessionsConfig.session) === null || _e === void 0 ? void 0 : _e.overrides;
            initialSession.sessionMeta = Object.assign({ id: sessionId, attributes: Object.assign({ isSampled: initialSession.isSampled.toString() }, (_f = sessionsConfig.session) === null || _f === void 0 ? void 0 : _f.attributes) }, (overrides ? { overrides } : {}));
            lifecycleType = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.EVENT_SESSION_START;
        }
        return { initialSession, lifecycleType };
    }
    registerBeforeSendHook(SessionManager) {
        var _a;
        const { updateSession } = new SessionManager();
        (_a = this.transports) === null || _a === void 0 ? void 0 : _a.addBeforeSendHooks((item) => {
            var _a, _b, _c;
            updateSession();
            const attributes = (_a = item.meta.session) === null || _a === void 0 ? void 0 : _a.attributes;
            if (attributes && (attributes === null || attributes === void 0 ? void 0 : attributes['isSampled']) === 'true') {
                let newItem = JSON.parse(JSON.stringify(item));
                const newAttributes = (_b = newItem.meta.session) === null || _b === void 0 ? void 0 : _b.attributes;
                newAttributes === null || newAttributes === void 0 ? true : delete newAttributes['isSampled'];
                if (Object.keys(newAttributes !== null && newAttributes !== void 0 ? newAttributes : {}).length === 0) {
                    (_c = newItem.meta.session) === null || _c === void 0 ? true : delete _c.attributes;
                }
                return newItem;
            }
            return null;
        });
    }
    initialize() {
        this.logDebug('init session instrumentation');
        const sessionTrackingConfig = this.config.sessionTracking;
        if (sessionTrackingConfig === null || sessionTrackingConfig === void 0 ? void 0 : sessionTrackingConfig.enabled) {
            const SessionManager = (0,_sessionManager__WEBPACK_IMPORTED_MODULE_6__.getSessionManagerByConfig)(sessionTrackingConfig);
            this.registerBeforeSendHook(SessionManager);
            const { initialSession, lifecycleType } = this.createInitialSession(SessionManager, sessionTrackingConfig);
            SessionManager.storeUserSession(initialSession);
            const initialSessionMeta = initialSession.sessionMeta;
            this.notifiedSession = initialSessionMeta;
            this.api.setSession(initialSessionMeta);
            if (lifecycleType === _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.EVENT_SESSION_START) {
                this.api.pushEvent(_grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.EVENT_SESSION_START, {}, undefined, { skipDedupe: true });
            }
            if (lifecycleType === _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.EVENT_SESSION_RESUME) {
                this.api.pushEvent(_grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.EVENT_SESSION_RESUME, {}, undefined, { skipDedupe: true });
            }
        }
        this.metas.addListener(this.sendSessionStartEvent.bind(this));
    }
}
//# sourceMappingURL=instrumentation.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/sessionManager/PersistentSessionsManager.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersistentSessionsManager: () => (/* binding */ PersistentSessionsManager)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/sdk/registerFaro.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/json.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/utils/throttle.js");
/* harmony import */ var _utils_webStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/utils/webStorage.js");
/* harmony import */ var _sessionConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/sessionManager/sessionConstants.js");
/* harmony import */ var _sessionManagerUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/sessionManager/sessionManagerUtils.js");





class PersistentSessionsManager {
    constructor() {
        this.updateSession = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.throttle)(() => this.updateUserSession(), _sessionConstants__WEBPACK_IMPORTED_MODULE_4__.STORAGE_UPDATE_DELAY);
        this.updateUserSession = (0,_sessionManagerUtils__WEBPACK_IMPORTED_MODULE_5__.getUserSessionUpdater)({
            fetchUserSession: PersistentSessionsManager.fetchUserSession,
            storeUserSession: PersistentSessionsManager.storeUserSession,
        });
        this.init();
    }
    static removeUserSession() {
        (0,_utils_webStorage__WEBPACK_IMPORTED_MODULE_3__.removeItem)(_sessionConstants__WEBPACK_IMPORTED_MODULE_4__.STORAGE_KEY, PersistentSessionsManager.storageTypeLocal);
    }
    static storeUserSession(session) {
        (0,_utils_webStorage__WEBPACK_IMPORTED_MODULE_3__.setItem)(_sessionConstants__WEBPACK_IMPORTED_MODULE_4__.STORAGE_KEY, (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.stringifyExternalJson)(session), PersistentSessionsManager.storageTypeLocal);
    }
    static fetchUserSession() {
        const storedSession = (0,_utils_webStorage__WEBPACK_IMPORTED_MODULE_3__.getItem)(_sessionConstants__WEBPACK_IMPORTED_MODULE_4__.STORAGE_KEY, PersistentSessionsManager.storageTypeLocal);
        if (storedSession) {
            return JSON.parse(storedSession);
        }
        return null;
    }
    init() {
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                this.updateSession();
            }
        });
        // Users can call the setSession() method, so we need to sync this with the local storage session
        _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.faro.metas.addListener((0,_sessionManagerUtils__WEBPACK_IMPORTED_MODULE_5__.getSessionMetaUpdateHandler)({
            fetchUserSession: PersistentSessionsManager.fetchUserSession,
            storeUserSession: PersistentSessionsManager.storeUserSession,
        }));
    }
}
PersistentSessionsManager.storageTypeLocal = _utils_webStorage__WEBPACK_IMPORTED_MODULE_3__.webStorageType.local;
//# sourceMappingURL=PersistentSessionsManager.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/sessionManager/VolatileSessionManager.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VolatileSessionsManager: () => (/* binding */ VolatileSessionsManager)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/sdk/registerFaro.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/json.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/utils/throttle.js");
/* harmony import */ var _utils_webStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/utils/webStorage.js");
/* harmony import */ var _sessionConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/sessionManager/sessionConstants.js");
/* harmony import */ var _sessionManagerUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/sessionManager/sessionManagerUtils.js");





class VolatileSessionsManager {
    constructor() {
        this.updateSession = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.throttle)(() => this.updateUserSession(), _sessionConstants__WEBPACK_IMPORTED_MODULE_4__.STORAGE_UPDATE_DELAY);
        this.updateUserSession = (0,_sessionManagerUtils__WEBPACK_IMPORTED_MODULE_5__.getUserSessionUpdater)({
            fetchUserSession: VolatileSessionsManager.fetchUserSession,
            storeUserSession: VolatileSessionsManager.storeUserSession,
        });
        this.init();
    }
    static removeUserSession() {
        (0,_utils_webStorage__WEBPACK_IMPORTED_MODULE_3__.removeItem)(_sessionConstants__WEBPACK_IMPORTED_MODULE_4__.STORAGE_KEY, VolatileSessionsManager.storageTypeSession);
    }
    static storeUserSession(session) {
        (0,_utils_webStorage__WEBPACK_IMPORTED_MODULE_3__.setItem)(_sessionConstants__WEBPACK_IMPORTED_MODULE_4__.STORAGE_KEY, (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.stringifyExternalJson)(session), VolatileSessionsManager.storageTypeSession);
    }
    static fetchUserSession() {
        const storedSession = (0,_utils_webStorage__WEBPACK_IMPORTED_MODULE_3__.getItem)(_sessionConstants__WEBPACK_IMPORTED_MODULE_4__.STORAGE_KEY, VolatileSessionsManager.storageTypeSession);
        if (storedSession) {
            return JSON.parse(storedSession);
        }
        return null;
    }
    init() {
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                this.updateSession();
            }
        });
        // Users can call the setSession() method, so we need to sync this with the local storage session
        _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.faro.metas.addListener((0,_sessionManagerUtils__WEBPACK_IMPORTED_MODULE_5__.getSessionMetaUpdateHandler)({
            fetchUserSession: VolatileSessionsManager.fetchUserSession,
            storeUserSession: VolatileSessionsManager.storeUserSession,
        }));
    }
}
VolatileSessionsManager.storageTypeSession = _utils_webStorage__WEBPACK_IMPORTED_MODULE_3__.webStorageType.session;
//# sourceMappingURL=VolatileSessionManager.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/sessionManager/getSessionManagerByConfig.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSessionManagerByConfig: () => (/* binding */ getSessionManagerByConfig)
/* harmony export */ });
/* harmony import */ var _PersistentSessionsManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/sessionManager/PersistentSessionsManager.js");
/* harmony import */ var _VolatileSessionManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/sessionManager/VolatileSessionManager.js");


function getSessionManagerByConfig(sessionTrackingConfig) {
    return (sessionTrackingConfig === null || sessionTrackingConfig === void 0 ? void 0 : sessionTrackingConfig.persistent) ? _PersistentSessionsManager__WEBPACK_IMPORTED_MODULE_0__.PersistentSessionsManager : _VolatileSessionManager__WEBPACK_IMPORTED_MODULE_1__.VolatileSessionsManager;
}
//# sourceMappingURL=getSessionManagerByConfig.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/sessionManager/sampling.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSampled: () => (/* binding */ isSampled)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/sdk/registerFaro.js");

function isSampled() {
    var _a, _b, _c;
    const sendAllSignals = 1;
    const sessionTracking = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.faro.config.sessionTracking;
    let samplingRate = (_c = (_b = (_a = sessionTracking === null || sessionTracking === void 0 ? void 0 : sessionTracking.sampler) === null || _a === void 0 ? void 0 : _a.call(sessionTracking, { metas: _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.faro.metas.value })) !== null && _b !== void 0 ? _b : sessionTracking === null || sessionTracking === void 0 ? void 0 : sessionTracking.samplingRate) !== null && _c !== void 0 ? _c : sendAllSignals;
    if (typeof samplingRate !== 'number') {
        const sendNoSignals = 0;
        samplingRate = sendNoSignals;
    }
    return Math.random() < samplingRate;
}
//# sourceMappingURL=sampling.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/sessionManager/sessionConstants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAX_SESSION_PERSISTENCE_TIME: () => (/* binding */ MAX_SESSION_PERSISTENCE_TIME),
/* harmony export */   MAX_SESSION_PERSISTENCE_TIME_BUFFER: () => (/* binding */ MAX_SESSION_PERSISTENCE_TIME_BUFFER),
/* harmony export */   SESSION_EXPIRATION_TIME: () => (/* binding */ SESSION_EXPIRATION_TIME),
/* harmony export */   SESSION_INACTIVITY_TIME: () => (/* binding */ SESSION_INACTIVITY_TIME),
/* harmony export */   STORAGE_KEY: () => (/* binding */ STORAGE_KEY),
/* harmony export */   STORAGE_UPDATE_DELAY: () => (/* binding */ STORAGE_UPDATE_DELAY),
/* harmony export */   defaultSessionTrackingConfig: () => (/* binding */ defaultSessionTrackingConfig)
/* harmony export */ });
const STORAGE_KEY = 'com.grafana.faro.session';
const SESSION_EXPIRATION_TIME = 4 * 60 * 60 * 1000; // hrs
const SESSION_INACTIVITY_TIME = 15 * 60 * 1000; // minutes
const STORAGE_UPDATE_DELAY = 1 * 1000; // seconds
/**
 * @deprecated MAX_SESSION_PERSISTENCE_TIME_BUFFER is not used anymore. The constant will be removed in the future
 */
const MAX_SESSION_PERSISTENCE_TIME_BUFFER = 1 * 60 * 1000;
const MAX_SESSION_PERSISTENCE_TIME = SESSION_INACTIVITY_TIME;
const defaultSessionTrackingConfig = {
    enabled: true,
    persistent: false,
    maxSessionPersistenceTime: MAX_SESSION_PERSISTENCE_TIME,
};
//# sourceMappingURL=sessionConstants.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/sessionManager/sessionManagerUtils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSessionMetadataToNextSession: () => (/* binding */ addSessionMetadataToNextSession),
/* harmony export */   createUserSessionObject: () => (/* binding */ createUserSessionObject),
/* harmony export */   getSessionMetaUpdateHandler: () => (/* binding */ getSessionMetaUpdateHandler),
/* harmony export */   getUserSessionUpdater: () => (/* binding */ getUserSessionUpdater),
/* harmony export */   isUserSessionValid: () => (/* binding */ isUserSessionValid)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/deepEqual.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/sdk/registerFaro.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/is.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/shortId.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/date.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/semantic.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/utils/webStorage.js");
/* harmony import */ var _sampling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/sessionManager/sampling.js");
/* harmony import */ var _sessionConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/sessionManager/sessionConstants.js");




function createUserSessionObject({ sessionId, started, lastActivity, isSampled = true, } = {}) {
    var _a, _b;
    const now = (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_4__.dateNow)();
    const generateSessionId = (_b = (_a = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.faro.config) === null || _a === void 0 ? void 0 : _a.sessionTracking) === null || _b === void 0 ? void 0 : _b.generateSessionId;
    if (sessionId == null) {
        sessionId = typeof generateSessionId === 'function' ? generateSessionId() : (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__.genShortID)();
    }
    return {
        sessionId,
        lastActivity: lastActivity !== null && lastActivity !== void 0 ? lastActivity : now,
        started: started !== null && started !== void 0 ? started : now,
        isSampled: isSampled,
    };
}
function isUserSessionValid(session) {
    if (session == null) {
        return false;
    }
    const now = (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_4__.dateNow)();
    const lifetimeValid = now - session.started < _sessionConstants__WEBPACK_IMPORTED_MODULE_8__.SESSION_EXPIRATION_TIME;
    if (!lifetimeValid) {
        return false;
    }
    const inactivityPeriodValid = now - session.lastActivity < _sessionConstants__WEBPACK_IMPORTED_MODULE_8__.SESSION_INACTIVITY_TIME;
    return inactivityPeriodValid;
}
function getUserSessionUpdater({ fetchUserSession, storeUserSession, }) {
    return function updateSession({ forceSessionExtend } = { forceSessionExtend: false }) {
        var _a, _b, _c;
        if (!fetchUserSession || !storeUserSession) {
            return;
        }
        const sessionTrackingConfig = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.faro.config.sessionTracking;
        const isPersistentSessions = sessionTrackingConfig === null || sessionTrackingConfig === void 0 ? void 0 : sessionTrackingConfig.persistent;
        if ((isPersistentSessions && !_utils__WEBPACK_IMPORTED_MODULE_6__.isLocalStorageAvailable) || (!isPersistentSessions && !_utils__WEBPACK_IMPORTED_MODULE_6__.isSessionStorageAvailable)) {
            return;
        }
        const sessionFromStorage = fetchUserSession();
        if (forceSessionExtend === false && isUserSessionValid(sessionFromStorage)) {
            storeUserSession(Object.assign(Object.assign({}, sessionFromStorage), { lastActivity: (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_4__.dateNow)() }));
        }
        else {
            let newSession = addSessionMetadataToNextSession(createUserSessionObject({ isSampled: (0,_sampling__WEBPACK_IMPORTED_MODULE_7__.isSampled)() }), sessionFromStorage);
            storeUserSession(newSession);
            (_a = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.faro.api) === null || _a === void 0 ? void 0 : _a.setSession(newSession.sessionMeta);
            (_b = sessionTrackingConfig === null || sessionTrackingConfig === void 0 ? void 0 : sessionTrackingConfig.onSessionChange) === null || _b === void 0 ? void 0 : _b.call(sessionTrackingConfig, (_c = sessionFromStorage === null || sessionFromStorage === void 0 ? void 0 : sessionFromStorage.sessionMeta) !== null && _c !== void 0 ? _c : null, newSession.sessionMeta);
        }
    };
}
function addSessionMetadataToNextSession(newSession, previousSession) {
    var _a, _b, _c, _d, _e, _f, _g;
    const sessionWithMeta = Object.assign(Object.assign({}, newSession), { sessionMeta: {
            id: newSession.sessionId,
            attributes: Object.assign(Object.assign(Object.assign({}, (_b = (_a = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.faro.config.sessionTracking) === null || _a === void 0 ? void 0 : _a.session) === null || _b === void 0 ? void 0 : _b.attributes), ((_d = (_c = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.faro.metas.value.session) === null || _c === void 0 ? void 0 : _c.attributes) !== null && _d !== void 0 ? _d : {})), { isSampled: newSession.isSampled.toString() }),
        } });
    const overrides = (_f = (_e = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.faro.metas.value.session) === null || _e === void 0 ? void 0 : _e.overrides) !== null && _f !== void 0 ? _f : (_g = previousSession === null || previousSession === void 0 ? void 0 : previousSession.sessionMeta) === null || _g === void 0 ? void 0 : _g.overrides;
    if (!(0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(overrides)) {
        sessionWithMeta.sessionMeta.overrides = overrides;
    }
    const previousSessionId = previousSession === null || previousSession === void 0 ? void 0 : previousSession.sessionId;
    if (previousSessionId != null) {
        sessionWithMeta.sessionMeta.attributes['previousSession'] = previousSessionId;
    }
    return sessionWithMeta;
}
function getSessionMetaUpdateHandler({ fetchUserSession, storeUserSession, }) {
    return function syncSessionIfChangedExternally(meta) {
        const session = meta.session;
        const sessionFromSessionStorage = fetchUserSession();
        let sessionId = session === null || session === void 0 ? void 0 : session.id;
        const sessionAttributes = session === null || session === void 0 ? void 0 : session.attributes;
        const sessionOverrides = session === null || session === void 0 ? void 0 : session.overrides;
        const storedSessionMeta = sessionFromSessionStorage === null || sessionFromSessionStorage === void 0 ? void 0 : sessionFromSessionStorage.sessionMeta;
        const storedSessionMetaOverrides = storedSessionMeta === null || storedSessionMeta === void 0 ? void 0 : storedSessionMeta.overrides;
        const hasSessionOverridesChanged = !!sessionOverrides && !(0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.deepEqual)(sessionOverrides, storedSessionMetaOverrides);
        const hasAttributesChanged = !!sessionAttributes && !(0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.deepEqual)(sessionAttributes, storedSessionMeta === null || storedSessionMeta === void 0 ? void 0 : storedSessionMeta.attributes);
        const hasSessionIdChanged = !!session && sessionId !== (sessionFromSessionStorage === null || sessionFromSessionStorage === void 0 ? void 0 : sessionFromSessionStorage.sessionId);
        if (hasSessionIdChanged || hasAttributesChanged || hasSessionOverridesChanged) {
            const userSession = addSessionMetadataToNextSession(createUserSessionObject({ sessionId, isSampled: (0,_sampling__WEBPACK_IMPORTED_MODULE_7__.isSampled)() }), sessionFromSessionStorage);
            storeUserSession(userSession);
            sendOverrideEvent(hasSessionOverridesChanged, sessionOverrides, storedSessionMetaOverrides);
            _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.faro.api.setSession(userSession.sessionMeta);
        }
    };
}
function sendOverrideEvent(hasSessionOverridesChanged, sessionOverrides = {}, storedSessionOverrides = {}) {
    var _a, _b, _c;
    if (!hasSessionOverridesChanged) {
        return;
    }
    const serviceName = sessionOverrides.serviceName;
    const previousServiceName = (_c = (_a = storedSessionOverrides.serviceName) !== null && _a !== void 0 ? _a : (_b = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.faro.metas.value.app) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : '';
    if (serviceName && serviceName !== previousServiceName) {
        _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.faro.api.pushEvent(_grafana_faro_core__WEBPACK_IMPORTED_MODULE_5__.EVENT_OVERRIDES_SERVICE_NAME, {
            serviceName,
            previousServiceName,
        });
    }
}
//# sourceMappingURL=sessionManagerUtils.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/userActions/const.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MESSAGE_TYPE_DOM_MUTATION: () => (/* binding */ MESSAGE_TYPE_DOM_MUTATION),
/* harmony export */   MESSAGE_TYPE_HTTP_REQUEST_END: () => (/* binding */ MESSAGE_TYPE_HTTP_REQUEST_END),
/* harmony export */   MESSAGE_TYPE_HTTP_REQUEST_START: () => (/* binding */ MESSAGE_TYPE_HTTP_REQUEST_START),
/* harmony export */   MESSAGE_TYPE_RESOURCE_ENTRY: () => (/* binding */ MESSAGE_TYPE_RESOURCE_ENTRY),
/* harmony export */   userActionDataAttribute: () => (/* binding */ userActionDataAttribute),
/* harmony export */   userActionDataAttributeParsed: () => (/* binding */ userActionDataAttributeParsed),
/* harmony export */   userActionStartByApiCallEventName: () => (/* binding */ userActionStartByApiCallEventName)
/* harmony export */ });
const MESSAGE_TYPE_RESOURCE_ENTRY = 'resource-entry';
const MESSAGE_TYPE_HTTP_REQUEST_START = 'http-request-start';
const MESSAGE_TYPE_HTTP_REQUEST_END = 'http-request-end';
const MESSAGE_TYPE_DOM_MUTATION = 'dom-mutation';
const userActionDataAttributeParsed = 'faroUserActionName';
const userActionDataAttribute = 'data-faro-user-action-name';
const userActionStartByApiCallEventName = 'faroApiCall';
//# sourceMappingURL=const.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/userActions/domMutationMonitor.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   monitorDomMutations: () => (/* binding */ monitorDomMutations)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/reactive.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/userActions/const.js");


function monitorDomMutations() {
    const observable = new _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.Observable();
    const observer = new MutationObserver((_mutationsList, _observer) => {
        observable.notify({ type: _const__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_TYPE_DOM_MUTATION });
    });
    observer.observe(document, {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true,
    });
    return observable;
}
//# sourceMappingURL=domMutationMonitor.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/userActions/httpRequestMonitor.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   monitorHttpRequests: () => (/* binding */ monitorHttpRequests)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/shortId.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/reactive.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/utils/url.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/userActions/const.js");



const apiTypeFetch = 'fetch';
const apiTypeXhr = 'xhr';
/**
 * Monitors if any http requests are in progress.
 */
function monitorHttpRequests() {
    const observable = new _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.Observable();
    function emitStartMessage(requestProps) {
        observable.notify({
            type: _const__WEBPACK_IMPORTED_MODULE_3__.MESSAGE_TYPE_HTTP_REQUEST_START,
            request: requestProps,
        });
    }
    function emitEndMessage(requestProps) {
        observable.notify({
            type: _const__WEBPACK_IMPORTED_MODULE_3__.MESSAGE_TYPE_HTTP_REQUEST_END,
            request: requestProps,
        });
    }
    monitorFetch({
        onRequestStart: emitStartMessage,
        onRequestEnd: emitEndMessage,
    });
    monitorXhr({
        onRequestStart: emitStartMessage,
        onRequestEnd: emitEndMessage,
    });
    return observable;
}
function monitorXhr({ onRequestStart, onRequestEnd, }) {
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function () {
        const url = arguments[1];
        const isIgnoredUrl = (0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.isUrlIgnored)(url);
        const method = arguments[0];
        const requestId = (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.genShortID)();
        // request has started to load data.
        this.addEventListener('loadstart', function () {
            if (!isIgnoredUrl) {
                onRequestStart({ url, method, requestId, apiType: apiTypeXhr });
            }
        });
        // transaction completes successfully.
        this.addEventListener('load', function () {
            if (!isIgnoredUrl) {
                onRequestEnd({ url, method, requestId, apiType: apiTypeXhr });
            }
        });
        this.addEventListener('error', function () {
            if (!isIgnoredUrl) {
                onRequestEnd({ url, method, requestId, apiType: apiTypeXhr });
            }
        });
        this.addEventListener('abort', function () {
            if (!isIgnoredUrl) {
                onRequestEnd({ url, method, requestId, apiType: apiTypeXhr });
            }
        });
        originalOpen.apply(this, arguments);
    };
}
function monitorFetch({ onRequestEnd, onRequestStart, }) {
    const originalFetch = window.fetch;
    window.fetch = function () {
        var _a, _b;
        const url = (_a = (0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.getUrlFromResource)(arguments[0])) !== null && _a !== void 0 ? _a : '';
        const isIgnoredUrl = (0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.isUrlIgnored)(url);
        const method = ((_b = arguments[1]) !== null && _b !== void 0 ? _b : {}).method;
        const requestId = (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.genShortID)();
        if (!isIgnoredUrl) {
            onRequestStart({ url, method, requestId, apiType: apiTypeFetch });
        }
        return originalFetch
            .apply(this, arguments)
            .then((response) => {
            if (!isIgnoredUrl) {
                onRequestEnd({ url, method, requestId, apiType: apiTypeFetch });
            }
            return response;
        })
            .catch((error) => {
            if (!isIgnoredUrl) {
                onRequestEnd({ url, method, requestId, apiType: apiTypeFetch });
            }
            throw error;
        });
    };
}
//# sourceMappingURL=httpRequestMonitor.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/userActions/instrumentation.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserActionInstrumentation: () => (/* binding */ UserActionInstrumentation),
/* harmony export */   startUserAction: () => (/* binding */ startUserAction)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/instrumentations/base.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/sdk/registerFaro.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/version.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/userActions/const.js");
/* harmony import */ var _processUserActionEventHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/userActions/processUserActionEventHandler.js");



let processUserEventHandler;
class UserActionInstrumentation extends _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.BaseInstrumentation {
    constructor() {
        super(...arguments);
        this.name = '@grafana/faro-web-sdk:instrumentation-user-action';
        this.version = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_2__.VERSION;
    }
    initialize() {
        processUserEventHandler = (0,_processUserActionEventHandler__WEBPACK_IMPORTED_MODULE_4__.getUserEventHandler)(_grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.faro);
        window.addEventListener('pointerdown', processUserEventHandler);
        window.addEventListener('keydown', processUserEventHandler);
    }
}
function startUserAction(name, attributes) {
    processUserEventHandler === null || processUserEventHandler === void 0 ? void 0 : processUserEventHandler(createUserActionApiEvent(name, attributes));
}
function createUserActionApiEvent(name, attributes) {
    return {
        name,
        attributes,
        type: _const__WEBPACK_IMPORTED_MODULE_3__.userActionStartByApiCallEventName,
    };
}
//# sourceMappingURL=instrumentation.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/userActions/performanceEntriesMonitor.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   monitorPerformanceEntries: () => (/* binding */ monitorPerformanceEntries)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/reactive.js");
/* harmony import */ var _performance_instrumentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/performance/instrumentation.js");
/* harmony import */ var _performance_performanceConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/performance/performanceConstants.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/userActions/const.js");




function monitorPerformanceEntries() {
    const observable = new _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.Observable();
    _performance_instrumentation__WEBPACK_IMPORTED_MODULE_1__.performanceEntriesSubscription.subscribe((data) => {
        if (data.type === _performance_performanceConstants__WEBPACK_IMPORTED_MODULE_2__.RESOURCE_ENTRY) {
            observable.notify({ type: _const__WEBPACK_IMPORTED_MODULE_3__.MESSAGE_TYPE_RESOURCE_ENTRY });
        }
    });
    return observable;
}
//# sourceMappingURL=performanceEntriesMonitor.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/userActions/processUserActionEventHandler.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUserEventHandler: () => (/* binding */ getUserEventHandler)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/initialize.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/const.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/shortId.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/date.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/json.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/reactive.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/userActions/const.js");
/* harmony import */ var _domMutationMonitor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/userActions/domMutationMonitor.js");
/* harmony import */ var _httpRequestMonitor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/userActions/httpRequestMonitor.js");
/* harmony import */ var _performanceEntriesMonitor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/userActions/performanceEntriesMonitor.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/userActions/util.js");






const maxFollowUpActionTimeRange = 100;
function getUserEventHandler(faro) {
    const { api, config } = faro;
    const httpMonitor = (0,_httpRequestMonitor__WEBPACK_IMPORTED_MODULE_8__.monitorHttpRequests)();
    const domMutationsMonitor = (0,_domMutationMonitor__WEBPACK_IMPORTED_MODULE_7__.monitorDomMutations)();
    const performanceEntriesMonitor = (0,_performanceEntriesMonitor__WEBPACK_IMPORTED_MODULE_9__.monitorPerformanceEntries)();
    let timeoutId;
    let actionRunning = false;
    function processUserEvent(event) {
        var _a;
        let userActionName;
        const isApiEventDetected = isApiEvent(event);
        if (isApiEventDetected) {
            userActionName = event.name;
        }
        else {
            userActionName = getUserActionName(event.target, (_a = config.trackUserActionsDataAttributeName) !== null && _a !== void 0 ? _a : _const__WEBPACK_IMPORTED_MODULE_6__.userActionDataAttributeParsed);
        }
        if (actionRunning || userActionName == null) {
            return;
        }
        actionRunning = true;
        const startTime = (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__.dateNow)();
        let endTime;
        const actionId = (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_2__.genShortID)();
        _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.apiMessageBus.notify({
            type: _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.USER_ACTION_START,
            name: userActionName,
            startTime: startTime,
            parentId: actionId,
        });
        // Triggers if no initial action happened within the first 100ms
        timeoutId = startTimeout(timeoutId, () => {
            endTime = (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__.dateNow)();
            // Listening for follow up activities stops once action is cancelled (set to false)
            actionRunning = false;
            sendUserActionCancelMessage(userActionName, actionId);
        }, maxFollowUpActionTimeRange);
        const runningRequests = new Map();
        let isHalted = false;
        let pendingActionTimeoutId;
        const allMonitorsSub = new _grafana_faro_core__WEBPACK_IMPORTED_MODULE_5__.Observable()
            .merge(httpMonitor, domMutationsMonitor, performanceEntriesMonitor)
            .takeWhile(() => actionRunning)
            .filter((msg) => {
            // If the user action is in halt state, we only keep listening to ended http requests
            if (isHalted && !(isRequestEndMessage(msg) && runningRequests.has(msg.request.requestId))) {
                return false;
            }
            return true;
        })
            .subscribe((msg) => {
            if (isRequestStartMessage(msg)) {
                // An action is on halt if it has pending items, like pending HTTP requests.
                // In this case we start a separate timeout to wait for the requests to finish
                // If in the halt state, we stop adding Faro signals to the action's buffer (see userActionLifecycleHandler.ts)
                // But we are still subscribed to
                runningRequests.set(msg.request.requestId, msg.request);
            }
            if (isRequestEndMessage(msg)) {
                runningRequests.delete(msg.request.requestId);
            }
            // A http request, a DOM mutation or a performance entry happened so we have a follow up activity and start the timeout again
            // If timeout is triggered the user action is done and we send respective messages and events
            timeoutId = startTimeout(timeoutId, () => {
                endTime = (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__.dateNow)();
                const userActionParentEventProps = Object.assign({ api,
                    userActionName,
                    startTime, endTime: endTime, actionId,
                    event }, (isApiEventDetected ? { attributes: event.attributes } : {}));
                const hasPendingRequests = runningRequests.size > 0;
                const isAllPendingRequestsResolved = isHalted && !hasPendingRequests;
                if (isAllPendingRequestsResolved) {
                    clearTimeout(pendingActionTimeoutId);
                    isHalted = false;
                }
                if (hasPendingRequests) {
                    isHalted = true;
                    _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.apiMessageBus.notify({
                        type: _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.USER_ACTION_HALT,
                        name: userActionName,
                        parentId: actionId,
                        reason: 'pending-requests',
                        haltTime: (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__.dateNow)(),
                    });
                    pendingActionTimeoutId = startTimeout(undefined, () => {
                        unsubscribeAllMonitors(allMonitorsSub);
                        endUserAction(userActionParentEventProps);
                        actionRunning = false;
                        isHalted = false;
                    }, 1000 * 10);
                }
                else {
                    unsubscribeAllMonitors(allMonitorsSub);
                    endUserAction(userActionParentEventProps);
                    actionRunning = false;
                    isHalted = false;
                }
            }, maxFollowUpActionTimeRange);
        });
    }
    return processUserEvent;
}
/**
 * User action was successfully completed and we send the final event(s)
 */
function endUserAction(props) {
    const { api, userActionName, startTime, endTime, actionId, event, attributes } = props;
    const duration = endTime - startTime;
    const eventType = event.type;
    // order matters, first emit the user-action-end event and afterwards push the parent event
    _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.apiMessageBus.notify({
        type: _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.USER_ACTION_END,
        name: userActionName,
        id: actionId,
        startTime,
        endTime,
        duration,
        eventType,
    });
    // Send the final action parent event
    api.pushEvent(userActionName, Object.assign({ userActionStartTime: startTime.toString(), userActionEndTime: endTime.toString(), userActionDuration: duration.toString(), userActionTrigger: eventType }, (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_4__.stringifyObjectValues)(attributes)), undefined, {
        timestampOverwriteMs: startTime,
        customPayloadTransformer: (payload) => {
            payload.action = {
                id: actionId,
                name: userActionName,
            };
            return payload;
        },
    });
}
function getUserActionName(element, dataAttributeName) {
    const parsedDataAttributeName = (0,_util__WEBPACK_IMPORTED_MODULE_10__.convertDataAttributeName)(dataAttributeName);
    const dataset = element.dataset;
    for (const key in dataset) {
        if (key === parsedDataAttributeName) {
            return dataset[key];
        }
    }
    return undefined;
}
function startTimeout(timeoutId, cb, delay) {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    //@ts-expect-error for some reason vscode is using the node types
    timeoutId = setTimeout(() => {
        cb();
    }, delay);
    return timeoutId;
}
function sendUserActionCancelMessage(userActionName, actionId) {
    _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.apiMessageBus.notify({
        type: _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.USER_ACTION_CANCEL,
        name: userActionName,
        parentId: actionId,
    });
}
function unsubscribeAllMonitors(allMonitorsSub) {
    allMonitorsSub === null || allMonitorsSub === void 0 ? void 0 : allMonitorsSub.unsubscribe();
    allMonitorsSub = undefined;
}
function isRequestStartMessage(msg) {
    return msg.type === _const__WEBPACK_IMPORTED_MODULE_6__.MESSAGE_TYPE_HTTP_REQUEST_START;
}
function isRequestEndMessage(msg) {
    return msg.type === _const__WEBPACK_IMPORTED_MODULE_6__.MESSAGE_TYPE_HTTP_REQUEST_END;
}
function isApiEvent(apiEvent) {
    return apiEvent.type === _const__WEBPACK_IMPORTED_MODULE_6__.userActionStartByApiCallEventName && typeof apiEvent.name === 'string';
}
//# sourceMappingURL=processUserActionEventHandler.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/userActions/util.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertDataAttributeName: () => (/* binding */ convertDataAttributeName)
/* harmony export */ });
/**
 * Parses the action attribute name by removing the 'data-' prefix and converting
 * the remaining string to camelCase.
 *
 * This is needed because the browser will remove the 'data-' prefix and the dashes from
 * data attributes and make then camelCase.
 */
function convertDataAttributeName(userActionDataAttribute) {
    const withoutData = userActionDataAttribute.split('data-')[1];
    const withUpperCase = withoutData === null || withoutData === void 0 ? void 0 : withoutData.replace(/-(.)/g, (_, char) => char.toUpperCase());
    return withUpperCase === null || withUpperCase === void 0 ? void 0 : withUpperCase.replace(/-/g, '');
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/view/instrumentation.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewInstrumentation: () => (/* binding */ ViewInstrumentation)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/instrumentations/base.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/semantic.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/version.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/consts.js");

// all this does is send VIEW_CHANGED event
class ViewInstrumentation extends _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.BaseInstrumentation {
    constructor() {
        super(...arguments);
        this.name = '@grafana/faro-web-sdk:instrumentation-view';
        this.version = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_2__.VERSION;
    }
    sendViewChangedEvent(meta) {
        var _a, _b, _c, _d;
        const view = meta.view;
        if (view && view.name !== ((_a = this.notifiedView) === null || _a === void 0 ? void 0 : _a.name)) {
            this.api.pushEvent(_grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.EVENT_VIEW_CHANGED, {
                fromView: (_c = (_b = this.notifiedView) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : _grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__.unknownString,
                toView: (_d = view.name) !== null && _d !== void 0 ? _d : _grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__.unknownString,
            }, undefined, { skipDedupe: true });
            this.notifiedView = view;
        }
    }
    initialize() {
        this.metas.addListener(this.sendViewChangedEvent.bind(this));
    }
}
//# sourceMappingURL=instrumentation.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/webVitals/instrumentation.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebVitalsInstrumentation: () => (/* binding */ WebVitalsInstrumentation)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/instrumentations/base.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/version.js");
/* harmony import */ var _webVitalsBasic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/webVitals/webVitalsBasic.js");
/* harmony import */ var _webVitalsWithAttribution__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/webVitals/webVitalsWithAttribution.js");



class WebVitalsInstrumentation extends _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.BaseInstrumentation {
    constructor() {
        super(...arguments);
        this.name = '@grafana/faro-web-sdk:instrumentation-web-vitals';
        this.version = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.VERSION;
    }
    initialize() {
        this.logDebug('Initializing');
        const webVitals = this.intializeWebVitalsInstrumentation();
        webVitals.initialize();
    }
    intializeWebVitalsInstrumentation() {
        var _a, _b, _c;
        if (((_a = this.config) === null || _a === void 0 ? void 0 : _a.trackWebVitalsAttribution) === false ||
            ((_c = (_b = this.config) === null || _b === void 0 ? void 0 : _b.webVitalsInstrumentation) === null || _c === void 0 ? void 0 : _c.trackAttribution) === false) {
            return new _webVitalsBasic__WEBPACK_IMPORTED_MODULE_2__.WebVitalsBasic(this.api.pushMeasurement, this.config.webVitalsInstrumentation);
        }
        return new _webVitalsWithAttribution__WEBPACK_IMPORTED_MODULE_3__.WebVitalsWithAttribution(this.api.pushMeasurement, this.config.webVitalsInstrumentation);
    }
}
//# sourceMappingURL=instrumentation.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/webVitals/webVitalsBasic.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebVitalsBasic: () => (/* binding */ WebVitalsBasic)
/* harmony export */ });
/* harmony import */ var web_vitals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/web-vitals/dist/web-vitals.js");

class WebVitalsBasic {
    constructor(pushMeasurement, webVitalConfig) {
        this.pushMeasurement = pushMeasurement;
        this.webVitalConfig = webVitalConfig;
    }
    initialize() {
        Object.entries(WebVitalsBasic.mapping).forEach(([indicator, executor]) => {
            var _a;
            executor((metric) => {
                this.pushMeasurement({
                    type: 'web-vitals',
                    values: {
                        [indicator]: metric.value,
                    },
                });
            }, { reportAllChanges: (_a = this.webVitalConfig) === null || _a === void 0 ? void 0 : _a.reportAllChanges });
        });
    }
}
WebVitalsBasic.mapping = {
    cls: web_vitals__WEBPACK_IMPORTED_MODULE_0__.onCLS,
    fcp: web_vitals__WEBPACK_IMPORTED_MODULE_0__.onFCP,
    fid: web_vitals__WEBPACK_IMPORTED_MODULE_0__.onFID,
    inp: web_vitals__WEBPACK_IMPORTED_MODULE_0__.onINP,
    lcp: web_vitals__WEBPACK_IMPORTED_MODULE_0__.onLCP,
    ttfb: web_vitals__WEBPACK_IMPORTED_MODULE_0__.onTTFB,
};
//# sourceMappingURL=webVitalsBasic.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/webVitals/webVitalsWithAttribution.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebVitalsWithAttribution: () => (/* binding */ WebVitalsWithAttribution)
/* harmony export */ });
/* harmony import */ var web_vitals_attribution__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/web-vitals/dist/web-vitals.attribution.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/consts.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/utils/webStorage.js");
/* harmony import */ var _instrumentationConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/instrumentationConstants.js");




// duplicate keys saved in variables to save bundle size
// refs: https://github.com/grafana/faro-web-sdk/pull/595#discussion_r1615833968
const loadStateKey = 'load_state';
const timeToFirstByteKey = 'time_to_first_byte';
class WebVitalsWithAttribution {
    constructor(corePushMeasurement, webVitalConfig) {
        this.corePushMeasurement = corePushMeasurement;
        this.webVitalConfig = webVitalConfig;
    }
    initialize() {
        this.measureCLS();
        this.measureFCP();
        this.measureFID();
        this.measureINP();
        this.measureLCP();
        this.measureTTFB();
    }
    measureCLS() {
        var _a;
        (0,web_vitals_attribution__WEBPACK_IMPORTED_MODULE_0__.onCLS)((metric) => {
            const { loadState, largestShiftValue, largestShiftTime, largestShiftTarget } = metric.attribution;
            const values = this.buildInitialValues(metric);
            this.addIfPresent(values, 'largest_shift_value', largestShiftValue);
            this.addIfPresent(values, 'largest_shift_time', largestShiftTime);
            const context = this.buildInitialContext(metric);
            this.addIfPresent(context, loadStateKey, loadState);
            this.addIfPresent(context, 'largest_shift_target', largestShiftTarget);
            this.pushMeasurement(values, context);
        }, { reportAllChanges: (_a = this.webVitalConfig) === null || _a === void 0 ? void 0 : _a.reportAllChanges });
    }
    measureFCP() {
        var _a;
        (0,web_vitals_attribution__WEBPACK_IMPORTED_MODULE_0__.onFCP)((metric) => {
            const { firstByteToFCP, timeToFirstByte, loadState } = metric.attribution;
            const values = this.buildInitialValues(metric);
            this.addIfPresent(values, 'first_byte_to_fcp', firstByteToFCP);
            this.addIfPresent(values, timeToFirstByteKey, timeToFirstByte);
            const context = this.buildInitialContext(metric);
            this.addIfPresent(context, loadStateKey, loadState);
            this.pushMeasurement(values, context);
        }, { reportAllChanges: (_a = this.webVitalConfig) === null || _a === void 0 ? void 0 : _a.reportAllChanges });
    }
    measureFID() {
        var _a;
        (0,web_vitals_attribution__WEBPACK_IMPORTED_MODULE_0__.onFID)((metric) => {
            const { eventTime, eventTarget, eventType, loadState } = metric.attribution;
            const values = this.buildInitialValues(metric);
            this.addIfPresent(values, 'event_time', eventTime);
            const context = this.buildInitialContext(metric);
            this.addIfPresent(context, 'event_target', eventTarget);
            this.addIfPresent(context, 'event_type', eventType);
            this.addIfPresent(context, loadStateKey, loadState);
            this.pushMeasurement(values, context);
        }, { reportAllChanges: (_a = this.webVitalConfig) === null || _a === void 0 ? void 0 : _a.reportAllChanges });
    }
    measureINP() {
        var _a;
        (0,web_vitals_attribution__WEBPACK_IMPORTED_MODULE_0__.onINP)((metric) => {
            const { interactionTime, presentationDelay, inputDelay, processingDuration, nextPaintTime, loadState, interactionTarget, interactionType, } = metric.attribution;
            const values = this.buildInitialValues(metric);
            this.addIfPresent(values, 'interaction_time', interactionTime);
            this.addIfPresent(values, 'presentation_delay', presentationDelay);
            this.addIfPresent(values, 'input_delay', inputDelay);
            this.addIfPresent(values, 'processing_duration', processingDuration);
            this.addIfPresent(values, 'next_paint_time', nextPaintTime);
            const context = this.buildInitialContext(metric);
            this.addIfPresent(context, loadStateKey, loadState);
            this.addIfPresent(context, 'interaction_target', interactionTarget);
            this.addIfPresent(context, 'interaction_type', interactionType);
            this.pushMeasurement(values, context);
        }, { reportAllChanges: (_a = this.webVitalConfig) === null || _a === void 0 ? void 0 : _a.reportAllChanges });
    }
    measureLCP() {
        var _a;
        (0,web_vitals_attribution__WEBPACK_IMPORTED_MODULE_0__.onLCP)((metric) => {
            const { elementRenderDelay, resourceLoadDelay, resourceLoadDuration, timeToFirstByte, element } = metric.attribution;
            const values = this.buildInitialValues(metric);
            this.addIfPresent(values, 'element_render_delay', elementRenderDelay);
            this.addIfPresent(values, 'resource_load_delay', resourceLoadDelay);
            this.addIfPresent(values, 'resource_load_duration', resourceLoadDuration);
            this.addIfPresent(values, timeToFirstByteKey, timeToFirstByte);
            const context = this.buildInitialContext(metric);
            this.addIfPresent(context, 'element', element);
            this.pushMeasurement(values, context);
        }, { reportAllChanges: (_a = this.webVitalConfig) === null || _a === void 0 ? void 0 : _a.reportAllChanges });
    }
    measureTTFB() {
        var _a;
        (0,web_vitals_attribution__WEBPACK_IMPORTED_MODULE_0__.onTTFB)((metric) => {
            const { dnsDuration, connectionDuration, requestDuration, waitingDuration, cacheDuration } = metric.attribution;
            const values = this.buildInitialValues(metric);
            this.addIfPresent(values, 'dns_duration', dnsDuration);
            this.addIfPresent(values, 'connection_duration', connectionDuration);
            this.addIfPresent(values, 'request_duration', requestDuration);
            this.addIfPresent(values, 'waiting_duration', waitingDuration);
            this.addIfPresent(values, 'cache_duration', cacheDuration);
            const context = this.buildInitialContext(metric);
            this.pushMeasurement(values, context);
        }, { reportAllChanges: (_a = this.webVitalConfig) === null || _a === void 0 ? void 0 : _a.reportAllChanges });
    }
    buildInitialValues(metric) {
        const indicator = metric.name.toLowerCase();
        return {
            [indicator]: metric.value,
            delta: metric.delta,
        };
    }
    buildInitialContext(metric) {
        var _a;
        const navigationEntryId = (_a = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getItem)(_instrumentationConstants__WEBPACK_IMPORTED_MODULE_3__.NAVIGATION_ID_STORAGE_KEY, _utils__WEBPACK_IMPORTED_MODULE_2__.webStorageType.session)) !== null && _a !== void 0 ? _a : _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.unknownString;
        return {
            id: metric.id,
            rating: metric.rating,
            navigation_type: metric.navigationType,
            navigation_entry_id: navigationEntryId,
        };
    }
    pushMeasurement(values, context) {
        const type = 'web-vitals';
        this.corePushMeasurement({ type, values }, { context });
    }
    addIfPresent(source, key, metric) {
        if (metric) {
            source[key] = metric;
        }
    }
}
//# sourceMappingURL=webVitalsWithAttribution.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/metas/browser/meta.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   browserMeta: () => (/* binding */ browserMeta)
/* harmony export */ });
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/ua-parser-js/src/ua-parser.js");
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/consts.js");


const browserMeta = () => {
    const parser = new ua_parser_js__WEBPACK_IMPORTED_MODULE_0__.UAParser();
    const { name, version } = parser.getBrowser();
    const { name: osName, version: osVersion } = parser.getOS();
    const userAgent = parser.getUA();
    const language = navigator.language;
    const mobile = navigator.userAgent.includes('Mobi');
    const brands = getBrands();
    return {
        browser: {
            name: name !== null && name !== void 0 ? name : _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.unknownString,
            version: version !== null && version !== void 0 ? version : _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.unknownString,
            os: `${osName !== null && osName !== void 0 ? osName : _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.unknownString} ${osVersion !== null && osVersion !== void 0 ? osVersion : _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.unknownString}`,
            userAgent: userAgent !== null && userAgent !== void 0 ? userAgent : _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.unknownString,
            language: language !== null && language !== void 0 ? language : _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.unknownString,
            mobile,
            brands: brands !== null && brands !== void 0 ? brands : _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.unknownString,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`,
        },
    };
    function getBrands() {
        if (!name || !version) {
            return undefined;
        }
        if ('userAgentData' in navigator && navigator.userAgentData) {
            // userAgentData in experimental (only Chrome supports it) thus TS does not ship the respective type declarations
            return navigator.userAgentData.brands;
        }
        return undefined;
    }
};
//# sourceMappingURL=meta.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/metas/k6/meta.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k6Meta: () => (/* binding */ k6Meta)
/* harmony export */ });
const k6Meta = () => {
    const k6Properties = window.k6;
    return {
        k6: Object.assign({ 
            // we only add the k6 meta if Faro is running inside a k6 environment, so this is always true
            isK6Browser: true }, ((k6Properties === null || k6Properties === void 0 ? void 0 : k6Properties.testRunId) && { testRunId: k6Properties === null || k6Properties === void 0 ? void 0 : k6Properties.testRunId })),
    };
};
//# sourceMappingURL=meta.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/metas/page/meta.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPageMeta: () => (/* binding */ createPageMeta)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/is.js");

let currentHref;
let pageId;
function createPageMeta({ generatePageId, initialPageMeta } = {}) {
    const pageMeta = () => {
        const locationHref = location.href;
        if ((0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.isFunction)(generatePageId) && currentHref !== locationHref) {
            currentHref = locationHref;
            pageId = generatePageId(location);
        }
        return {
            page: Object.assign(Object.assign({ url: locationHref }, (pageId ? { id: pageId } : {})), initialPageMeta),
        };
    };
    return pageMeta;
}
//# sourceMappingURL=meta.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/metas/session/createSession.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSession: () => (/* binding */ createSession)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/sdk/registerFaro.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/shortId.js");

function createSession(attributes) {
    var _a, _b, _c, _d;
    return {
        id: (_d = (_c = (_b = (_a = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.faro.config) === null || _a === void 0 ? void 0 : _a.sessionTracking) === null || _b === void 0 ? void 0 : _b.generateSessionId) === null || _c === void 0 ? void 0 : _c.call(_b)) !== null && _d !== void 0 ? _d : (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.genShortID)(),
        attributes,
    };
}
//# sourceMappingURL=createSession.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/transports/fetch/transport.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FetchTransport: () => (/* binding */ FetchTransport)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/transports/base.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/transports/utils.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/noop.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/promiseBuffer.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/version.js");
/* harmony import */ var _instrumentations_session_sessionManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/sessionManager/getSessionManagerByConfig.js");
/* harmony import */ var _instrumentations_session_sessionManager_sessionManagerUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/instrumentations/session/sessionManager/sessionManagerUtils.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



const DEFAULT_BUFFER_SIZE = 30;
const DEFAULT_CONCURRENCY = 5; // chrome supports 10 total, firefox 17
const DEFAULT_RATE_LIMIT_BACKOFF_MS = 5000;
const BEACON_BODY_SIZE_LIMIT = 60000;
const TOO_MANY_REQUESTS = 429;
const ACCEPTED = 202;
class FetchTransport extends _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransport {
    constructor(options) {
        var _a, _b, _c, _d;
        super();
        this.options = options;
        this.name = '@grafana/faro-web-sdk:transport-fetch';
        this.version = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_4__.VERSION;
        this.disabledUntil = new Date();
        this.rateLimitBackoffMs = (_a = options.defaultRateLimitBackoffMs) !== null && _a !== void 0 ? _a : DEFAULT_RATE_LIMIT_BACKOFF_MS;
        this.getNow = (_b = options.getNow) !== null && _b !== void 0 ? _b : (() => Date.now());
        this.promiseBuffer = (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_3__.createPromiseBuffer)({
            size: (_c = options.bufferSize) !== null && _c !== void 0 ? _c : DEFAULT_BUFFER_SIZE,
            concurrency: (_d = options.concurrency) !== null && _d !== void 0 ? _d : DEFAULT_CONCURRENCY,
        });
    }
    send(items) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.disabledUntil > new Date(this.getNow())) {
                    this.logWarn(`Dropping transport item due to too many requests. Backoff until ${this.disabledUntil}`);
                    return Promise.resolve();
                }
                yield this.promiseBuffer.add(() => {
                    const body = JSON.stringify((0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.getTransportBody)(items));
                    const { url, requestOptions, apiKey } = this.options;
                    const _a = requestOptions !== null && requestOptions !== void 0 ? requestOptions : {}, { headers } = _a, restOfRequestOptions = __rest(_a, ["headers"]);
                    let sessionId;
                    const sessionMeta = this.metas.value.session;
                    if (sessionMeta != null) {
                        sessionId = sessionMeta.id;
                    }
                    return fetch(url, Object.assign({ method: 'POST', headers: Object.assign(Object.assign(Object.assign({ 'Content-Type': 'application/json' }, (headers !== null && headers !== void 0 ? headers : {})), (apiKey ? { 'x-api-key': apiKey } : {})), (sessionId ? { 'x-faro-session-id': sessionId } : {})), body, keepalive: body.length <= BEACON_BODY_SIZE_LIMIT }, (restOfRequestOptions !== null && restOfRequestOptions !== void 0 ? restOfRequestOptions : {})))
                        .then((response) => __awaiter(this, void 0, void 0, function* () {
                        if (response.status === ACCEPTED) {
                            const sessionExpired = response.headers.get('X-Faro-Session-Status') === 'invalid';
                            if (sessionExpired) {
                                this.extendFaroSession(this.config, this.logDebug);
                            }
                        }
                        if (response.status === TOO_MANY_REQUESTS) {
                            this.disabledUntil = this.getRetryAfterDate(response);
                            this.logWarn(`Too many requests, backing off until ${this.disabledUntil}`);
                        }
                        // read the body so the connection can be closed
                        response.text().catch(_grafana_faro_core__WEBPACK_IMPORTED_MODULE_2__.noop);
                        return response;
                    }))
                        .catch((err) => {
                        this.logError('Failed sending payload to the receiver\n', JSON.parse(body), err);
                    });
                });
            }
            catch (err) {
                this.logError(err);
            }
        });
    }
    getIgnoreUrls() {
        var _a;
        return [this.options.url].concat((_a = this.config.ignoreUrls) !== null && _a !== void 0 ? _a : []);
    }
    isBatched() {
        return true;
    }
    getRetryAfterDate(response) {
        const now = this.getNow();
        const retryAfterHeader = response.headers.get('Retry-After');
        if (retryAfterHeader) {
            const delay = Number(retryAfterHeader);
            if (!isNaN(delay)) {
                return new Date(delay * 1000 + now);
            }
            const date = Date.parse(retryAfterHeader);
            if (!isNaN(date)) {
                return new Date(date);
            }
        }
        return new Date(now + this.rateLimitBackoffMs);
    }
    extendFaroSession(config, logDebug) {
        const SessionExpiredString = `Session expired`;
        const sessionTrackingConfig = config.sessionTracking;
        if (sessionTrackingConfig === null || sessionTrackingConfig === void 0 ? void 0 : sessionTrackingConfig.enabled) {
            const { fetchUserSession, storeUserSession } = (0,_instrumentations_session_sessionManager__WEBPACK_IMPORTED_MODULE_5__.getSessionManagerByConfig)(sessionTrackingConfig);
            (0,_instrumentations_session_sessionManager_sessionManagerUtils__WEBPACK_IMPORTED_MODULE_6__.getUserSessionUpdater)({ fetchUserSession, storeUserSession })({ forceSessionExtend: true });
            logDebug(`${SessionExpiredString} created new session.`);
        }
        else {
            logDebug(`${SessionExpiredString}.`);
        }
    }
}
//# sourceMappingURL=transport.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/utils/throttle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throttle: () => (/* binding */ throttle)
/* harmony export */ });
/**
 * Tail based throttle which caches the args of the last call and updates
 */
function throttle(callback, delay) {
    let pause = false;
    let lastPending;
    const timeoutBehavior = () => {
        if (lastPending == null) {
            pause = false;
            return;
        }
        callback(...lastPending);
        lastPending = null;
        setTimeout(timeoutBehavior, delay);
    };
    return (...args) => {
        if (pause) {
            lastPending = args;
            return;
        }
        callback(...args);
        pause = true;
        setTimeout(timeoutBehavior, delay);
    };
}
//# sourceMappingURL=throttle.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/utils/url.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getIgnoreUrls: () => (/* binding */ getIgnoreUrls),
/* harmony export */   getUrlFromResource: () => (/* binding */ getUrlFromResource),
/* harmony export */   isUrlIgnored: () => (/* binding */ isUrlIgnored)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/sdk/registerFaro.js");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/is.js");

/**
 * Retrieves a list of URLs to be ignored by aggregating the ignore URLs from all transports.
 *
 * @returns {string[]} An array of URLs to be ignored.
 */
function getIgnoreUrls() {
    return _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.faro.transports.transports.flatMap((transport) => transport.getIgnoreUrls());
}
/**
 * Checks if the given URL should be ignored based on a list of ignored URLs.
 *
 * @param url - The URL to check.
 * @returns `true` if the URL is in the list of ignored URLs, `false` otherwise.
 */
function isUrlIgnored(url = '') {
    return getIgnoreUrls().some((ignoredUrl) => url && url.match(ignoredUrl) != null);
}
/**
 * Extracts a URL string from the given resource.
 *
 * @param resource - The input resource which can be a string, a URL object, or an object with a `toString` method.
 * @returns The URL as a string if the resource is a valid URL-like object, or `undefined` if the resource is not valid.
 *
 */
function getUrlFromResource(resource) {
    if ((0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.isString)(resource)) {
        return resource;
    }
    if (resource instanceof URL) {
        return resource.href;
    }
    if (!(0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(resource) && (0,_grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.isFunction)(resource === null || resource === void 0 ? void 0 : resource.toString)) {
        return resource.toString();
    }
    return undefined;
}
//# sourceMappingURL=url.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-sdk/dist/esm/utils/webStorage.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getItem: () => (/* binding */ getItem),
/* harmony export */   isLocalStorageAvailable: () => (/* binding */ isLocalStorageAvailable),
/* harmony export */   isSessionStorageAvailable: () => (/* binding */ isSessionStorageAvailable),
/* harmony export */   isWebStorageAvailable: () => (/* binding */ isWebStorageAvailable),
/* harmony export */   removeItem: () => (/* binding */ removeItem),
/* harmony export */   setItem: () => (/* binding */ setItem),
/* harmony export */   webStorageType: () => (/* binding */ webStorageType)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/sdk/registerFaro.js");

const webStorageType = {
    session: 'sessionStorage',
    local: 'localStorage',
};
/**
 * Check if selected web storage mechanism is available.
 * @param type storage mechanism to test availability for.
 * @returns
 */
function isWebStorageAvailable(type) {
    var _a;
    try {
        let storage;
        storage = window[type];
        const testItem = '__faro_storage_test__';
        storage.setItem(testItem, testItem);
        storage.removeItem(testItem);
        return true;
    }
    catch (error) {
        // the above can throw
        (_a = _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.faro.internalLogger) === null || _a === void 0 ? void 0 : _a.info(`Web storage of type ${type} is not available. Reason: ${error}`);
        return false;
    }
}
/**
 * Get item from SessionStorage or LocalStorage.
 * @param key: the item key.
 * @param webStorageMechanism: wether the item shall be received form local storage or session storage. Defaults to local storage.
 */
function getItem(key, webStorageMechanism) {
    if (isWebStorageTypeAvailable(webStorageMechanism)) {
        return window[webStorageMechanism].getItem(key);
    }
    return null;
}
/**
 * Store item in SessionStorage or LocalStorage.
 * @param key: the item key.
 * @param value: the item data.
 * @param webStorageMechanism: wether the item shall be received form local storage or session storage. Defaults to local storage.
 */
function setItem(key, value, webStorageMechanism) {
    if (isWebStorageTypeAvailable(webStorageMechanism)) {
        try {
            window[webStorageMechanism].setItem(key, value);
        }
        catch (error) {
            // do nothing
        }
    }
}
/**
 * Remove item from SessionStorage or LocalStorage.
 * @param key: the item key.
 * @param webStorageMechanism: wether the item shall be received form local storage or session storage. Defaults to local storage.
 */
function removeItem(key, webStorageMechanism) {
    if (isWebStorageTypeAvailable(webStorageMechanism)) {
        window[webStorageMechanism].removeItem(key);
    }
}
const isLocalStorageAvailable = isWebStorageAvailable(webStorageType.local);
const isSessionStorageAvailable = isWebStorageAvailable(webStorageType.session);
function isWebStorageTypeAvailable(webStorageMechanism) {
    if (webStorageMechanism === webStorageType.local) {
        return isLocalStorageAvailable;
    }
    if (webStorageMechanism === webStorageType.session) {
        return isSessionStorageAvailable;
    }
    return false;
}
//# sourceMappingURL=webStorage.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-tracing/dist/esm/faroMetaAttributesSpanProcessor.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaroMetaAttributesSpanProcessor: () => (/* binding */ FaroMetaAttributesSpanProcessor)
/* harmony export */ });
/* harmony import */ var _semconv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-web-tracing/dist/esm/semconv.js");

class FaroMetaAttributesSpanProcessor {
    constructor(processor, metas) {
        this.processor = processor;
        this.metas = metas;
    }
    forceFlush() {
        return this.processor.forceFlush();
    }
    onStart(span, parentContext) {
        var _a;
        const session = this.metas.value.session;
        if (session === null || session === void 0 ? void 0 : session.id) {
            span.attributes[_semconv__WEBPACK_IMPORTED_MODULE_0__.ATTR_SESSION_ID] = session.id;
            /**
             * @deprecated will be removed in the future and has been replaced by ATTR_SESSION_ID (session.id)
             */
            span.attributes['session_id'] = session.id;
        }
        const user = (_a = this.metas.value.user) !== null && _a !== void 0 ? _a : {};
        if (user.email) {
            span.attributes['user.email'] = user.email;
        }
        if (user.id) {
            span.attributes['user.id'] = user.id;
        }
        if (user.username) {
            span.attributes['user.name'] = user.username;
        }
        if (user.fullName) {
            span.attributes['user.full_name'] = user.fullName;
        }
        if (user.roles) {
            span.attributes['user.roles'] = user.roles.split(',').map((role) => role.trim());
        }
        if (user.hash) {
            span.attributes['user.hash'] = user.hash;
        }
        this.processor.onStart(span, parentContext);
    }
    onEnd(span) {
        this.processor.onEnd(span);
    }
    shutdown() {
        return this.processor.shutdown();
    }
}
//# sourceMappingURL=faroMetaAttributesSpanProcessor.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-tracing/dist/esm/faroTraceExporter.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaroTraceExporter: () => (/* binding */ FaroTraceExporter)
/* harmony export */ });
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/ExportResult.js");
/* harmony import */ var _opentelemetry_otlp_transformer_build_src_trace_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/otlp-transformer/build/src/trace/internal.js");
/* harmony import */ var _faroTraceExporter_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-web-tracing/dist/esm/faroTraceExporter.utils.js");



class FaroTraceExporter {
    constructor(config) {
        this.config = config;
    }
    export(spans, resultCallback) {
        const traceEvent = (0,_opentelemetry_otlp_transformer_build_src_trace_internal__WEBPACK_IMPORTED_MODULE_1__.createExportTraceServiceRequest)(spans, { useHex: true, useLongBits: false });
        this.config.api.pushTraces(traceEvent);
        (0,_faroTraceExporter_utils__WEBPACK_IMPORTED_MODULE_2__.sendFaroEvents)(traceEvent.resourceSpans);
        resultCallback({ code: _opentelemetry_core__WEBPACK_IMPORTED_MODULE_0__.ExportResultCode.SUCCESS });
    }
    shutdown() {
        return Promise.resolve(undefined);
    }
}
//# sourceMappingURL=faroTraceExporter.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-tracing/dist/esm/faroTraceExporter.utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendFaroEvents: () => (/* binding */ sendFaroEvents)
/* harmony export */ });
/* harmony import */ var _opentelemetry_otlp_transformer_build_src_trace_internal_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/otlp-transformer/build/src/trace/internal-types.js");
/* harmony import */ var _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/sdk/registerFaro.js");
/* harmony import */ var _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/consts.js");


const DURATION_NS_KEY = 'duration_ns';
function sendFaroEvents(resourceSpans = []) {
    var _a, _b;
    for (const resourceSpan of resourceSpans) {
        const { scopeSpans } = resourceSpan;
        for (const scopeSpan of scopeSpans) {
            const { scope, spans = [] } = scopeSpan;
            for (const span of spans) {
                if (span.kind !== _opentelemetry_otlp_transformer_build_src_trace_internal_types__WEBPACK_IMPORTED_MODULE_0__.ESpanKind.SPAN_KIND_CLIENT) {
                    continue;
                }
                const spanContext = {
                    traceId: span.traceId.toString(),
                    spanId: span.spanId.toString(),
                };
                const faroEventAttributes = {};
                for (const attribute of span.attributes) {
                    faroEventAttributes[attribute.key] = String(Object.values(attribute.value)[0]);
                }
                // Add span duration in nanoseconds
                if (!Number.isNaN(span.endTimeUnixNano) && !Number.isNaN(span.startTimeUnixNano)) {
                    faroEventAttributes[DURATION_NS_KEY] = String(Number(span.endTimeUnixNano) - Number(span.startTimeUnixNano));
                }
                const index = ((_a = scope === null || scope === void 0 ? void 0 : scope.name) !== null && _a !== void 0 ? _a : '').indexOf('-');
                let eventName = _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_2__.unknownString;
                if (scope === null || scope === void 0 ? void 0 : scope.name) {
                    if (index === -1) {
                        eventName = (_b = scope.name.split('/')[1]) !== null && _b !== void 0 ? _b : scope.name;
                    }
                    if (index > -1) {
                        eventName = scope === null || scope === void 0 ? void 0 : scope.name.substring(index + 1);
                    }
                }
                _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_1__.faro.api.pushEvent(`faro.tracing.${eventName}`, faroEventAttributes, undefined, {
                    spanContext,
                    // Convert nanoseconds to milliseconds
                    timestampOverwriteMs: Number(span.endTimeUnixNano) / 1000000,
                    customPayloadTransformer: (payload) => {
                        var _a, _b;
                        if (faroEventAttributes['faro.action.user.name'] != null &&
                            faroEventAttributes['faro.action.user.parentId'] != null) {
                            payload.action = {
                                name: faroEventAttributes['faro.action.user.name'],
                                parentId: faroEventAttributes['faro.action.user.parentId'],
                            };
                            (_a = payload.attributes) === null || _a === void 0 ? true : delete _a['faro.action.user.name'];
                            (_b = payload.attributes) === null || _b === void 0 ? true : delete _b['faro.action.user.parentId'];
                        }
                        return payload;
                    },
                });
            }
        }
    }
}
//# sourceMappingURL=faroTraceExporter.utils.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-tracing/dist/esm/faroUserActionSpanProcessor.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaroUserActionSpanProcessor: () => (/* binding */ FaroUserActionSpanProcessor)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/span_kind.js");
/* harmony import */ var _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/initialize.js");
/* harmony import */ var _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/api/const.js");


class FaroUserActionSpanProcessor {
    constructor(processor) {
        this.processor = processor;
        _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_1__.apiMessageBus.subscribe((msg) => {
            if (msg.type === _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_2__.USER_ACTION_START) {
                this.message = msg;
                return;
            }
            if ([_grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_2__.USER_ACTION_END, _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_2__.USER_ACTION_HALT, _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_2__.USER_ACTION_CANCEL].includes(msg.type)) {
                this.message = undefined;
            }
        });
    }
    forceFlush() {
        return this.processor.forceFlush();
    }
    onStart(span, parentContext) {
        var _a, _b;
        if (span.kind === _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.SpanKind.CLIENT) {
            // If the span is created when the message object is available it is created before the user action timeout has been reached so it belongs to the user-action.
            // In this case we can add the user action name and parentId to the span attributes.
            // If the span is created after the user action timeout span, the message object will be undefined which means the action has been cancelled or is ended.
            if (this.message) {
                span.attributes['faro.action.user.name'] = (_a = this.message) === null || _a === void 0 ? void 0 : _a.name;
                span.attributes['faro.action.user.parentId'] = (_b = this.message) === null || _b === void 0 ? void 0 : _b.parentId;
            }
        }
        this.processor.onStart(span, parentContext);
    }
    onEnd(span) {
        this.processor.onEnd(span);
    }
    shutdown() {
        return this.processor.shutdown();
    }
}
//# sourceMappingURL=faroUserActionSpanProcessor.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-tracing/dist/esm/faroXhrInstrumentation.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaroXhrInstrumentation: () => (/* binding */ FaroXhrInstrumentation)
/* harmony export */ });
/* harmony import */ var _opentelemetry_instrumentation_xml_http_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/instrumentation-xml-http-request/build/esm/xhr.js");
/* harmony import */ var _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/sdk/registerFaro.js");
/* harmony import */ var _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/utils/url.js");


class FaroXhrInstrumentation extends _opentelemetry_instrumentation_xml_http_request__WEBPACK_IMPORTED_MODULE_0__.XMLHttpRequestInstrumentation {
    constructor(config = {}) {
        super(config);
        const self = this;
        this.parentCreateSpan = self._createSpan.bind(this);
    }
    // Patching the parent's private method to handle url type string or URL
    _patchOpen() {
        return (original) => {
            const plugin = this;
            return function patchOpen(...args) {
                try {
                    const method = args[0];
                    let url = (0,_grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_2__.getUrlFromResource)(args[1]);
                    plugin.parentCreateSpan(this, url, method);
                }
                catch (error) {
                    _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_1__.faro.internalLogger.error(error);
                }
                return original.apply(this, args);
            };
        };
    }
}
//# sourceMappingURL=faroXhrInstrumentation.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-tracing/dist/esm/getDefaultOTELInstrumentations.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOTELInstrumentations: () => (/* binding */ getDefaultOTELInstrumentations)
/* harmony export */ });
/* harmony import */ var _opentelemetry_instrumentation_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/instrumentation-fetch/build/esm/fetch.js");
/* harmony import */ var _faroXhrInstrumentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-web-tracing/dist/esm/faroXhrInstrumentation.js");
/* harmony import */ var _instrumentationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-web-tracing/dist/esm/instrumentationUtils.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



function getDefaultOTELInstrumentations(options = {}) {
    const { fetchInstrumentationOptions, xhrInstrumentationOptions } = options, sharedOptions = __rest(options, ["fetchInstrumentationOptions", "xhrInstrumentationOptions"]);
    const fetchOpts = createFetchInstrumentationOptions(fetchInstrumentationOptions, sharedOptions);
    const xhrOpts = createXhrInstrumentationOptions(xhrInstrumentationOptions, sharedOptions);
    return [new _opentelemetry_instrumentation_fetch__WEBPACK_IMPORTED_MODULE_0__.FetchInstrumentation(fetchOpts), new _faroXhrInstrumentation__WEBPACK_IMPORTED_MODULE_1__.FaroXhrInstrumentation(xhrOpts)];
}
function createFetchInstrumentationOptions(fetchInstrumentationOptions, sharedOptions) {
    return Object.assign(Object.assign(Object.assign(Object.assign({}, sharedOptions), { ignoreNetworkEvents: true }), fetchInstrumentationOptions), { 
        // always keep this function
        applyCustomAttributesOnSpan: (0,_instrumentationUtils__WEBPACK_IMPORTED_MODULE_2__.fetchCustomAttributeFunctionWithDefaults)(fetchInstrumentationOptions === null || fetchInstrumentationOptions === void 0 ? void 0 : fetchInstrumentationOptions.applyCustomAttributesOnSpan) });
}
function createXhrInstrumentationOptions(xhrInstrumentationOptions, sharedOptions) {
    return Object.assign(Object.assign(Object.assign(Object.assign({}, sharedOptions), { ignoreNetworkEvents: true }), xhrInstrumentationOptions), { 
        // always keep this function
        applyCustomAttributesOnSpan: (0,_instrumentationUtils__WEBPACK_IMPORTED_MODULE_2__.xhrCustomAttributeFunctionWithDefaults)(xhrInstrumentationOptions === null || xhrInstrumentationOptions === void 0 ? void 0 : xhrInstrumentationOptions.applyCustomAttributesOnSpan) });
}
//# sourceMappingURL=getDefaultOTELInstrumentations.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-tracing/dist/esm/instrumentation.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TracingInstrumentation: () => (/* binding */ TracingInstrumentation)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/context-api.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace-api.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/trace/W3CTraceContextPropagator.js");
/* harmony import */ var _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@opentelemetry/instrumentation/build/esm/autoLoader.js");
/* harmony import */ var _opentelemetry_resources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@opentelemetry/resources/build/esm/ResourceImpl.js");
/* harmony import */ var _opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-web/build/esm/WebTracerProvider.js");
/* harmony import */ var _opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-base/build/esm/platform/browser/export/BatchSpanProcessor.js");
/* harmony import */ var _opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@opentelemetry/semantic-conventions/build/esm/resource/SemanticResourceAttributes.js");
/* harmony import */ var _opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@opentelemetry/semantic-conventions/build/esm/stable_attributes.js");
/* harmony import */ var _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/instrumentations/base.js");
/* harmony import */ var _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/utils/is.js");
/* harmony import */ var _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/version.js");
/* harmony import */ var _faroMetaAttributesSpanProcessor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@grafana/faro-web-tracing/dist/esm/faroMetaAttributesSpanProcessor.js");
/* harmony import */ var _faroTraceExporter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/@grafana/faro-web-tracing/dist/esm/faroTraceExporter.js");
/* harmony import */ var _faroUserActionSpanProcessor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/@grafana/faro-web-tracing/dist/esm/faroUserActionSpanProcessor.js");
/* harmony import */ var _getDefaultOTELInstrumentations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/@grafana/faro-web-tracing/dist/esm/getDefaultOTELInstrumentations.js");
/* harmony import */ var _sampler__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/@grafana/faro-web-tracing/dist/esm/sampler.js");
/* harmony import */ var _semconv__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/@grafana/faro-web-tracing/dist/esm/semconv.js");













// the providing of app name here is not great
// should delay initialization and provide the full Faro config,
// taking app name from it
class TracingInstrumentation extends _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_9__.BaseInstrumentation {
    constructor(options = {}) {
        super();
        this.options = options;
        this.name = '@grafana/faro-web-tracing';
        this.version = _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_11__.VERSION;
    }
    initialize() {
        var _a, _b, _c, _d, _e;
        const options = this.options;
        const attributes = {};
        if (this.config.app.name) {
            attributes[_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_8__.ATTR_SERVICE_NAME] = this.config.app.name;
        }
        if (this.config.app.namespace) {
            attributes[_semconv__WEBPACK_IMPORTED_MODULE_17__.ATTR_SERVICE_NAMESPACE] = this.config.app.namespace;
        }
        if (this.config.app.version) {
            attributes[_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_8__.ATTR_SERVICE_VERSION] = this.config.app.version;
        }
        if (this.config.app.environment) {
            attributes[_semconv__WEBPACK_IMPORTED_MODULE_17__.ATTR_DEPLOYMENT_ENVIRONMENT_NAME] = this.config.app.environment;
            /**
             * @deprecated will be removed in the future and has been replaced by ATTR_DEPLOYMENT_ENVIRONMENT_NAME (deployment.environment.name)
             */
            attributes[_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_7__.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT] = this.config.app.environment;
        }
        const browserMeta = this.metas.value.browser;
        if ((0,_grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_10__.isArray)(browserMeta === null || browserMeta === void 0 ? void 0 : browserMeta.brands)) {
            attributes[_semconv__WEBPACK_IMPORTED_MODULE_17__.ATTR_BROWSER_BRANDS] = browserMeta.brands.map((entry) => entry.brand);
        }
        if (browserMeta === null || browserMeta === void 0 ? void 0 : browserMeta.language) {
            attributes[_semconv__WEBPACK_IMPORTED_MODULE_17__.ATTR_BROWSER_LANGUAGE] = browserMeta.language;
        }
        if (typeof (browserMeta === null || browserMeta === void 0 ? void 0 : browserMeta.mobile) === 'boolean') {
            attributes[_semconv__WEBPACK_IMPORTED_MODULE_17__.ATTR_BROWSER_MOBILE] = Boolean(browserMeta.mobile);
        }
        if (browserMeta === null || browserMeta === void 0 ? void 0 : browserMeta.os) {
            attributes[_semconv__WEBPACK_IMPORTED_MODULE_17__.ATTR_BROWSER_PLATFORM] = browserMeta.os;
        }
        if (browserMeta === null || browserMeta === void 0 ? void 0 : browserMeta.userAgent) {
            attributes[_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_8__.ATTR_USER_AGENT_ORIGINAL] = browserMeta.userAgent;
        }
        attributes[_semconv__WEBPACK_IMPORTED_MODULE_17__.ATTR_PROCESS_RUNTIME_NAME] = 'browser';
        attributes[_semconv__WEBPACK_IMPORTED_MODULE_17__.ATTR_PROCESS_RUNTIME_VERSION] = (_a = this.metas.value.browser) === null || _a === void 0 ? void 0 : _a.userAgent;
        attributes[_semconv__WEBPACK_IMPORTED_MODULE_17__.ATTR_TELEMETRY_DISTRO_NAME] = 'faro-web-sdk';
        attributes[_semconv__WEBPACK_IMPORTED_MODULE_17__.ATTR_TELEMETRY_DISTRO_VERSION] = _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_11__.VERSION;
        Object.assign(attributes, options.resourceAttributes);
        const resource = (0,_opentelemetry_resources__WEBPACK_IMPORTED_MODULE_4__.defaultResource)().merge((0,_opentelemetry_resources__WEBPACK_IMPORTED_MODULE_4__.resourceFromAttributes)(attributes));
        const provider = new _opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_5__.WebTracerProvider({
            resource,
            sampler: {
                shouldSample: () => {
                    return {
                        decision: (0,_sampler__WEBPACK_IMPORTED_MODULE_16__.getSamplingDecision)(this.api.getSession()),
                    };
                },
            },
            spanProcessors: [
                (_b = options.spanProcessor) !== null && _b !== void 0 ? _b : new _faroUserActionSpanProcessor__WEBPACK_IMPORTED_MODULE_14__.FaroUserActionSpanProcessor(new _faroMetaAttributesSpanProcessor__WEBPACK_IMPORTED_MODULE_12__.FaroMetaAttributesSpanProcessor(new _opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_6__.BatchSpanProcessor(new _faroTraceExporter__WEBPACK_IMPORTED_MODULE_13__.FaroTraceExporter({ api: this.api }), {
                    scheduledDelayMillis: TracingInstrumentation.SCHEDULED_BATCH_DELAY_MS,
                    maxExportBatchSize: 30,
                }), this.metas)),
            ],
        });
        provider.register({
            propagator: (_c = options.propagator) !== null && _c !== void 0 ? _c : new _opentelemetry_core__WEBPACK_IMPORTED_MODULE_2__.W3CTraceContextPropagator(),
            contextManager: options.contextManager,
        });
        const { propagateTraceHeaderCorsUrls, fetchInstrumentationOptions, xhrInstrumentationOptions } = (_d = this.options.instrumentationOptions) !== null && _d !== void 0 ? _d : {};
        (0,_opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_3__.registerInstrumentations)({
            instrumentations: (_e = options.instrumentations) !== null && _e !== void 0 ? _e : (0,_getDefaultOTELInstrumentations__WEBPACK_IMPORTED_MODULE_15__.getDefaultOTELInstrumentations)({
                ignoreUrls: this.getIgnoreUrls(),
                propagateTraceHeaderCorsUrls,
                fetchInstrumentationOptions,
                xhrInstrumentationOptions,
            }),
        });
        this.api.initOTEL(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.trace, _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.context);
    }
    getIgnoreUrls() {
        return this.transports.transports.flatMap((transport) => transport.getIgnoreUrls());
    }
}
TracingInstrumentation.SCHEDULED_BATCH_DELAY_MS = 1000;
//# sourceMappingURL=instrumentation.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-tracing/dist/esm/instrumentationUtils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchCustomAttributeFunctionWithDefaults: () => (/* binding */ fetchCustomAttributeFunctionWithDefaults),
/* harmony export */   setSpanStatusOnFetchError: () => (/* binding */ setSpanStatusOnFetchError),
/* harmony export */   setSpanStatusOnXMLHttpRequestError: () => (/* binding */ setSpanStatusOnXMLHttpRequestError),
/* harmony export */   xhrCustomAttributeFunctionWithDefaults: () => (/* binding */ xhrCustomAttributeFunctionWithDefaults)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/status.js");

/**
 * Adds HTTP status code to every span.
 *
 * The fetch instrumentation does not always set the span status to error as defined by the spec.
 * To work around that issue we manually set the span status.
 *
 * Issue: https://github.com/open-telemetry/opentelemetry-js/issues/3564
 * Spec: https://github.com/open-telemetry/opentelemetry-specification/blob/v1.20.0/specification/trace/semantic_conventions/http.md#status
 */
function setSpanStatusOnFetchError(span, _request, result) {
    const httpStatusCode = result instanceof Error ? 0 : result.status;
    setSpanStatus(span, httpStatusCode);
}
function setSpanStatusOnXMLHttpRequestError(span, xhr) {
    setSpanStatus(span, xhr.status);
}
function setSpanStatus(span, httpStatusCode) {
    if (httpStatusCode == null) {
        return;
    }
    const isError = httpStatusCode === 0;
    const isClientOrServerError = httpStatusCode >= 400 && httpStatusCode < 600;
    if (isError || isClientOrServerError) {
        span.setStatus({ code: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.SpanStatusCode.ERROR });
    }
}
function fetchCustomAttributeFunctionWithDefaults(callback) {
    return (span, request, result) => {
        setSpanStatusOnFetchError(span, request, result);
        callback === null || callback === void 0 ? void 0 : callback(span, request, result);
    };
}
function xhrCustomAttributeFunctionWithDefaults(callback) {
    return (span, xhr) => {
        setSpanStatusOnXMLHttpRequestError(span, xhr);
        callback === null || callback === void 0 ? void 0 : callback(span, xhr);
    };
}
//# sourceMappingURL=instrumentationUtils.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-tracing/dist/esm/sampler.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSamplingDecision: () => (/* binding */ getSamplingDecision)
/* harmony export */ });
/* harmony import */ var _opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-base/build/esm/Sampler.js");

function getSamplingDecision(sessionMeta = {}) {
    var _a;
    const isSessionSampled = ((_a = sessionMeta.attributes) === null || _a === void 0 ? void 0 : _a['isSampled']) === 'true';
    const samplingDecision = isSessionSampled ? _opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_0__.SamplingDecision.RECORD_AND_SAMPLED : _opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_0__.SamplingDecision.NOT_RECORD;
    return samplingDecision;
}
//# sourceMappingURL=sampler.js.map

/***/ }),

/***/ "./node_modules/@grafana/faro-web-tracing/dist/esm/semconv.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ATTR_BROWSER_BRANDS: () => (/* binding */ ATTR_BROWSER_BRANDS),
/* harmony export */   ATTR_BROWSER_LANGUAGE: () => (/* binding */ ATTR_BROWSER_LANGUAGE),
/* harmony export */   ATTR_BROWSER_MOBILE: () => (/* binding */ ATTR_BROWSER_MOBILE),
/* harmony export */   ATTR_BROWSER_PLATFORM: () => (/* binding */ ATTR_BROWSER_PLATFORM),
/* harmony export */   ATTR_DEPLOYMENT_ENVIRONMENT_NAME: () => (/* binding */ ATTR_DEPLOYMENT_ENVIRONMENT_NAME),
/* harmony export */   ATTR_PROCESS_RUNTIME_NAME: () => (/* binding */ ATTR_PROCESS_RUNTIME_NAME),
/* harmony export */   ATTR_PROCESS_RUNTIME_VERSION: () => (/* binding */ ATTR_PROCESS_RUNTIME_VERSION),
/* harmony export */   ATTR_SERVICE_NAMESPACE: () => (/* binding */ ATTR_SERVICE_NAMESPACE),
/* harmony export */   ATTR_SESSION_ID: () => (/* binding */ ATTR_SESSION_ID),
/* harmony export */   ATTR_TELEMETRY_DISTRO_NAME: () => (/* binding */ ATTR_TELEMETRY_DISTRO_NAME),
/* harmony export */   ATTR_TELEMETRY_DISTRO_VERSION: () => (/* binding */ ATTR_TELEMETRY_DISTRO_VERSION)
/* harmony export */ });
/**
 Unstable SemConv
 Because the "incubating" entry-point may include breaking changes in minor versions,
 it is recommended that instrumentation libraries not import @opentelemetry/semantic-conventions/incubating in runtime code,
 but instead copy relevant definitions into their own code base. (This is the same recommendation as for other languages.)
 
 See: https://www.npmjs.com/package/@opentelemetry/semantic-conventions#:~:text=%7D)%3B-,Unstable%20SemConv,-Because%20the%20%22incubating
 */
const ATTR_SESSION_ID = 'session.id';
const ATTR_DEPLOYMENT_ENVIRONMENT_NAME = 'deployment.environment.name';
const ATTR_SERVICE_NAMESPACE = 'service.namespace';
// https://opentelemetry.io/docs/specs/semconv/resource/process/#javascript-runtimes
const ATTR_PROCESS_RUNTIME_NAME = 'process.runtime.name';
const ATTR_PROCESS_RUNTIME_VERSION = 'process.runtime.version';
// https://opentelemetry.io/docs/specs/semconv/attributes-registry/telemetry/#telemetry-attributes
const ATTR_TELEMETRY_DISTRO_NAME = 'telemetry.distro.name';
const ATTR_TELEMETRY_DISTRO_VERSION = 'telemetry.distro.version';
// https://opentelemetry.io/docs/specs/semconv/resource/browser/
const ATTR_BROWSER_BRANDS = 'browser.brands';
const ATTR_BROWSER_LANGUAGE = 'browser.language';
const ATTR_BROWSER_MOBILE = 'browser.mobile';
const ATTR_BROWSER_PLATFORM = 'browser.platform';
//# sourceMappingURL=semconv.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NOOP_LOGGER: () => (/* binding */ NOOP_LOGGER),
/* harmony export */   NoopLogger: () => (/* binding */ NoopLogger)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class NoopLogger {
    emit(_logRecord) { }
}
const NOOP_LOGGER = new NoopLogger();
//# sourceMappingURL=NoopLogger.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NOOP_LOGGER_PROVIDER: () => (/* binding */ NOOP_LOGGER_PROVIDER),
/* harmony export */   NoopLoggerProvider: () => (/* binding */ NoopLoggerProvider)
/* harmony export */ });
/* harmony import */ var _NoopLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class NoopLoggerProvider {
    getLogger(_name, _version, _options) {
        return new _NoopLogger__WEBPACK_IMPORTED_MODULE_0__.NoopLogger();
    }
}
const NOOP_LOGGER_PROVIDER = new NoopLoggerProvider();
//# sourceMappingURL=NoopLoggerProvider.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxyLogger: () => (/* binding */ ProxyLogger)
/* harmony export */ });
/* harmony import */ var _NoopLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class ProxyLogger {
    constructor(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */
    emit(logRecord) {
        this._getLogger().emit(logRecord);
    }
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */
    _getLogger() {
        if (this._delegate) {
            return this._delegate;
        }
        const logger = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return _NoopLogger__WEBPACK_IMPORTED_MODULE_0__.NOOP_LOGGER;
        }
        this._delegate = logger;
        return this._delegate;
    }
}
//# sourceMappingURL=ProxyLogger.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxyLoggerProvider: () => (/* binding */ ProxyLoggerProvider)
/* harmony export */ });
/* harmony import */ var _NoopLoggerProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js");
/* harmony import */ var _ProxyLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


class ProxyLoggerProvider {
    getLogger(name, version, options) {
        var _a;
        return ((_a = this.getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new _ProxyLogger__WEBPACK_IMPORTED_MODULE_1__.ProxyLogger(this, name, version, options));
    }
    getDelegate() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : _NoopLoggerProvider__WEBPACK_IMPORTED_MODULE_0__.NOOP_LOGGER_PROVIDER;
    }
    /**
     * Set the delegate logger provider
     */
    setDelegate(delegate) {
        this._delegate = delegate;
    }
    getDelegateLogger(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    }
}
//# sourceMappingURL=ProxyLoggerProvider.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api-logs/build/esm/api/logs.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogsAPI: () => (/* binding */ LogsAPI)
/* harmony export */ });
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js");
/* harmony import */ var _NoopLoggerProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js");
/* harmony import */ var _ProxyLoggerProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



class LogsAPI {
    constructor() {
        this._proxyLoggerProvider = new _ProxyLoggerProvider__WEBPACK_IMPORTED_MODULE_2__.ProxyLoggerProvider();
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    }
    setGlobalLoggerProvider(provider) {
        if (_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__._global[_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_LOGS_API_KEY]) {
            return this.getLoggerProvider();
        }
        _internal_global_utils__WEBPACK_IMPORTED_MODULE_0__._global[_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_LOGS_API_KEY] = (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.makeGetter)(_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.API_BACKWARDS_COMPATIBILITY_VERSION, provider, _NoopLoggerProvider__WEBPACK_IMPORTED_MODULE_1__.NOOP_LOGGER_PROVIDER);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
    }
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */
    getLoggerProvider() {
        var _a, _b;
        return ((_b = (_a = _internal_global_utils__WEBPACK_IMPORTED_MODULE_0__._global[_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_LOGS_API_KEY]) === null || _a === void 0 ? void 0 : _a.call(_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__._global, _internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.API_BACKWARDS_COMPATIBILITY_VERSION)) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider);
    }
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */
    getLogger(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    }
    /** Remove the global logger provider */
    disable() {
        delete _internal_global_utils__WEBPACK_IMPORTED_MODULE_0__._global[_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_LOGS_API_KEY];
        this._proxyLoggerProvider = new _ProxyLoggerProvider__WEBPACK_IMPORTED_MODULE_2__.ProxyLoggerProvider();
    }
}
//# sourceMappingURL=logs.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api-logs/build/esm/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NOOP_LOGGER: () => (/* reexport safe */ _NoopLogger__WEBPACK_IMPORTED_MODULE_1__.NOOP_LOGGER),
/* harmony export */   NOOP_LOGGER_PROVIDER: () => (/* reexport safe */ _NoopLoggerProvider__WEBPACK_IMPORTED_MODULE_2__.NOOP_LOGGER_PROVIDER),
/* harmony export */   NoopLogger: () => (/* reexport safe */ _NoopLogger__WEBPACK_IMPORTED_MODULE_1__.NoopLogger),
/* harmony export */   NoopLoggerProvider: () => (/* reexport safe */ _NoopLoggerProvider__WEBPACK_IMPORTED_MODULE_2__.NoopLoggerProvider),
/* harmony export */   ProxyLogger: () => (/* reexport safe */ _ProxyLogger__WEBPACK_IMPORTED_MODULE_3__.ProxyLogger),
/* harmony export */   ProxyLoggerProvider: () => (/* reexport safe */ _ProxyLoggerProvider__WEBPACK_IMPORTED_MODULE_4__.ProxyLoggerProvider),
/* harmony export */   SeverityNumber: () => (/* reexport safe */ _types_LogRecord__WEBPACK_IMPORTED_MODULE_0__.SeverityNumber),
/* harmony export */   logs: () => (/* binding */ logs)
/* harmony export */ });
/* harmony import */ var _types_LogRecord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api-logs/build/esm/types/LogRecord.js");
/* harmony import */ var _NoopLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js");
/* harmony import */ var _NoopLoggerProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js");
/* harmony import */ var _ProxyLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js");
/* harmony import */ var _ProxyLoggerProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js");
/* harmony import */ var _api_logs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@opentelemetry/api-logs/build/esm/api/logs.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






const logs = _api_logs__WEBPACK_IMPORTED_MODULE_5__.LogsAPI.getInstance();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_BACKWARDS_COMPATIBILITY_VERSION: () => (/* binding */ API_BACKWARDS_COMPATIBILITY_VERSION),
/* harmony export */   GLOBAL_LOGS_API_KEY: () => (/* binding */ GLOBAL_LOGS_API_KEY),
/* harmony export */   _global: () => (/* binding */ _global),
/* harmony export */   makeGetter: () => (/* binding */ makeGetter)
/* harmony export */ });
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api-logs/build/esm/platform/browser/globalThis.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
const _global = _platform__WEBPACK_IMPORTED_MODULE_0__._globalThis;
/**
 * Make a function which accepts a version integer and returns the instance of an API if the version
 * is compatible, or a fallback version (usually NOOP) if it is not.
 *
 * @param requiredVersion Backwards compatibility version which is required to return the instance
 * @param instance Instance which should be returned if the required version is compatible
 * @param fallback Fallback instance, usually NOOP, which will be returned if the required version is not compatible
 */
function makeGetter(requiredVersion, instance, fallback) {
    return (version) => version === requiredVersion ? instance : fallback;
}
/**
 * A number which should be incremented each time a backwards incompatible
 * change is made to the API. This number is used when an API package
 * attempts to access the global API to ensure it is getting a compatible
 * version. If the global API is not compatible with the API package
 * attempting to get it, a NOOP API implementation will be returned.
 */
const API_BACKWARDS_COMPATIBILITY_VERSION = 1;
//# sourceMappingURL=global-utils.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api-logs/build/esm/platform/browser/globalThis.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _globalThis: () => (/* binding */ _globalThis)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Updates to this file should also be replicated to @opentelemetry/api and
// @opentelemetry/core too.
/**
 * - globalThis (New standard)
 * - self (Will return the current window instance for supported browsers)
 * - window (fallback for older browser implementations)
 * - global (NodeJS implementation)
 * - <object> (When all else fails)
 */
/** only globals that common to node and browsers are allowed */
// eslint-disable-next-line node/no-unsupported-features/es-builtins, no-undef
const _globalThis = typeof globalThis === 'object'
    ? globalThis
    : typeof self === 'object'
        ? self
        : typeof window === 'object'
            ? window
            : typeof __webpack_require__.g === 'object'
                ? __webpack_require__.g
                : {};
//# sourceMappingURL=globalThis.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api-logs/build/esm/types/LogRecord.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeverityNumber: () => (/* binding */ SeverityNumber)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SeverityNumber;
(function (SeverityNumber) {
    SeverityNumber[SeverityNumber["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    SeverityNumber[SeverityNumber["TRACE"] = 1] = "TRACE";
    SeverityNumber[SeverityNumber["TRACE2"] = 2] = "TRACE2";
    SeverityNumber[SeverityNumber["TRACE3"] = 3] = "TRACE3";
    SeverityNumber[SeverityNumber["TRACE4"] = 4] = "TRACE4";
    SeverityNumber[SeverityNumber["DEBUG"] = 5] = "DEBUG";
    SeverityNumber[SeverityNumber["DEBUG2"] = 6] = "DEBUG2";
    SeverityNumber[SeverityNumber["DEBUG3"] = 7] = "DEBUG3";
    SeverityNumber[SeverityNumber["DEBUG4"] = 8] = "DEBUG4";
    SeverityNumber[SeverityNumber["INFO"] = 9] = "INFO";
    SeverityNumber[SeverityNumber["INFO2"] = 10] = "INFO2";
    SeverityNumber[SeverityNumber["INFO3"] = 11] = "INFO3";
    SeverityNumber[SeverityNumber["INFO4"] = 12] = "INFO4";
    SeverityNumber[SeverityNumber["WARN"] = 13] = "WARN";
    SeverityNumber[SeverityNumber["WARN2"] = 14] = "WARN2";
    SeverityNumber[SeverityNumber["WARN3"] = 15] = "WARN3";
    SeverityNumber[SeverityNumber["WARN4"] = 16] = "WARN4";
    SeverityNumber[SeverityNumber["ERROR"] = 17] = "ERROR";
    SeverityNumber[SeverityNumber["ERROR2"] = 18] = "ERROR2";
    SeverityNumber[SeverityNumber["ERROR3"] = 19] = "ERROR3";
    SeverityNumber[SeverityNumber["ERROR4"] = 20] = "ERROR4";
    SeverityNumber[SeverityNumber["FATAL"] = 21] = "FATAL";
    SeverityNumber[SeverityNumber["FATAL2"] = 22] = "FATAL2";
    SeverityNumber[SeverityNumber["FATAL3"] = 23] = "FATAL3";
    SeverityNumber[SeverityNumber["FATAL4"] = 24] = "FATAL4";
})(SeverityNumber || (SeverityNumber = {}));
//# sourceMappingURL=LogRecord.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/api/context.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextAPI: () => (/* binding */ ContextAPI)
/* harmony export */ });
/* harmony import */ var _context_NoopContextManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js");
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/* harmony import */ var _diag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/api/diag.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



var API_NAME = 'context';
var NOOP_CONTEXT_MANAGER = new _context_NoopContextManager__WEBPACK_IMPORTED_MODULE_0__.NoopContextManager();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Context API
 */
var ContextAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function ContextAPI() {
    }
    /** Get the singleton instance of the Context API */
    ContextAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new ContextAPI();
        }
        return this._instance;
    };
    /**
     * Set the current context manager.
     *
     * @returns true if the context manager was successfully registered, else false
     */
    ContextAPI.prototype.setGlobalContextManager = function (contextManager) {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_1__.registerGlobal)(API_NAME, contextManager, _diag__WEBPACK_IMPORTED_MODULE_2__.DiagAPI.instance());
    };
    /**
     * Get the currently active context
     */
    ContextAPI.prototype.active = function () {
        return this._getContextManager().active();
    };
    /**
     * Execute a function with an active context
     *
     * @param context context to be active during function execution
     * @param fn function to execute in a context
     * @param thisArg optional receiver to be used for calling fn
     * @param args optional arguments forwarded to fn
     */
    ContextAPI.prototype.with = function (context, fn, thisArg) {
        var _a;
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        return (_a = this._getContextManager()).with.apply(_a, __spreadArray([context, fn, thisArg], __read(args), false));
    };
    /**
     * Bind a context to a target function or event emitter
     *
     * @param context context to bind to the event emitter or function. Defaults to the currently active context
     * @param target function or event emitter to bind
     */
    ContextAPI.prototype.bind = function (context, target) {
        return this._getContextManager().bind(context, target);
    };
    ContextAPI.prototype._getContextManager = function () {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_1__.getGlobal)(API_NAME) || NOOP_CONTEXT_MANAGER;
    };
    /** Disable and remove the global context manager */
    ContextAPI.prototype.disable = function () {
        this._getContextManager().disable();
        (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_1__.unregisterGlobal)(API_NAME, _diag__WEBPACK_IMPORTED_MODULE_2__.DiagAPI.instance());
    };
    return ContextAPI;
}());

//# sourceMappingURL=context.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/api/diag.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiagAPI: () => (/* binding */ DiagAPI)
/* harmony export */ });
/* harmony import */ var _diag_ComponentLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js");
/* harmony import */ var _diag_internal_logLevelLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js");
/* harmony import */ var _diag_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/diag/types.js");
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




var API_NAME = 'diag';
/**
 * Singleton object which represents the entry point to the OpenTelemetry internal
 * diagnostic API
 */
var DiagAPI = /** @class */ (function () {
    /**
     * Private internal constructor
     * @private
     */
    function DiagAPI() {
        function _logProxy(funcName) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var logger = (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_3__.getGlobal)('diag');
                // shortcut if logger not set
                if (!logger)
                    return;
                return logger[funcName].apply(logger, __spreadArray([], __read(args), false));
            };
        }
        // Using self local variable for minification purposes as 'this' cannot be minified
        var self = this;
        // DiagAPI specific functions
        var setLogger = function (logger, optionsOrLogLevel) {
            var _a, _b, _c;
            if (optionsOrLogLevel === void 0) { optionsOrLogLevel = { logLevel: _diag_types__WEBPACK_IMPORTED_MODULE_2__.DiagLogLevel.INFO }; }
            if (logger === self) {
                // There isn't much we can do here.
                // Logging to the console might break the user application.
                // Try to log to self. If a logger was previously registered it will receive the log.
                var err = new Error('Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation');
                self.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
                return false;
            }
            if (typeof optionsOrLogLevel === 'number') {
                optionsOrLogLevel = {
                    logLevel: optionsOrLogLevel,
                };
            }
            var oldLogger = (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_3__.getGlobal)('diag');
            var newLogger = (0,_diag_internal_logLevelLogger__WEBPACK_IMPORTED_MODULE_1__.createLogLevelDiagLogger)((_b = optionsOrLogLevel.logLevel) !== null && _b !== void 0 ? _b : _diag_types__WEBPACK_IMPORTED_MODULE_2__.DiagLogLevel.INFO, logger);
            // There already is an logger registered. We'll let it know before overwriting it.
            if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
                var stack = (_c = new Error().stack) !== null && _c !== void 0 ? _c : '<failed to generate stacktrace>';
                oldLogger.warn("Current logger will be overwritten from " + stack);
                newLogger.warn("Current logger will overwrite one already registered from " + stack);
            }
            return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_3__.registerGlobal)('diag', newLogger, self, true);
        };
        self.setLogger = setLogger;
        self.disable = function () {
            (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_3__.unregisterGlobal)(API_NAME, self);
        };
        self.createComponentLogger = function (options) {
            return new _diag_ComponentLogger__WEBPACK_IMPORTED_MODULE_0__.DiagComponentLogger(options);
        };
        self.verbose = _logProxy('verbose');
        self.debug = _logProxy('debug');
        self.info = _logProxy('info');
        self.warn = _logProxy('warn');
        self.error = _logProxy('error');
    }
    /** Get the singleton instance of the DiagAPI API */
    DiagAPI.instance = function () {
        if (!this._instance) {
            this._instance = new DiagAPI();
        }
        return this._instance;
    };
    return DiagAPI;
}());

//# sourceMappingURL=diag.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/api/metrics.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetricsAPI: () => (/* binding */ MetricsAPI)
/* harmony export */ });
/* harmony import */ var _metrics_NoopMeterProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/metrics/NoopMeterProvider.js");
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/* harmony import */ var _diag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/api/diag.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var API_NAME = 'metrics';
/**
 * Singleton object which represents the entry point to the OpenTelemetry Metrics API
 */
var MetricsAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function MetricsAPI() {
    }
    /** Get the singleton instance of the Metrics API */
    MetricsAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new MetricsAPI();
        }
        return this._instance;
    };
    /**
     * Set the current global meter provider.
     * Returns true if the meter provider was successfully registered, else false.
     */
    MetricsAPI.prototype.setGlobalMeterProvider = function (provider) {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_1__.registerGlobal)(API_NAME, provider, _diag__WEBPACK_IMPORTED_MODULE_2__.DiagAPI.instance());
    };
    /**
     * Returns the global meter provider.
     */
    MetricsAPI.prototype.getMeterProvider = function () {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_1__.getGlobal)(API_NAME) || _metrics_NoopMeterProvider__WEBPACK_IMPORTED_MODULE_0__.NOOP_METER_PROVIDER;
    };
    /**
     * Returns a meter from the global meter provider.
     */
    MetricsAPI.prototype.getMeter = function (name, version, options) {
        return this.getMeterProvider().getMeter(name, version, options);
    };
    /** Remove the global meter provider */
    MetricsAPI.prototype.disable = function () {
        (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_1__.unregisterGlobal)(API_NAME, _diag__WEBPACK_IMPORTED_MODULE_2__.DiagAPI.instance());
    };
    return MetricsAPI;
}());

//# sourceMappingURL=metrics.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/api/propagation.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropagationAPI: () => (/* binding */ PropagationAPI)
/* harmony export */ });
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/* harmony import */ var _propagation_NoopTextMapPropagator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/propagation/NoopTextMapPropagator.js");
/* harmony import */ var _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js");
/* harmony import */ var _baggage_context_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/baggage/context-helpers.js");
/* harmony import */ var _baggage_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/baggage/utils.js");
/* harmony import */ var _diag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/api/diag.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






var API_NAME = 'propagation';
var NOOP_TEXT_MAP_PROPAGATOR = new _propagation_NoopTextMapPropagator__WEBPACK_IMPORTED_MODULE_1__.NoopTextMapPropagator();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Propagation API
 */
var PropagationAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function PropagationAPI() {
        this.createBaggage = _baggage_utils__WEBPACK_IMPORTED_MODULE_4__.createBaggage;
        this.getBaggage = _baggage_context_helpers__WEBPACK_IMPORTED_MODULE_3__.getBaggage;
        this.getActiveBaggage = _baggage_context_helpers__WEBPACK_IMPORTED_MODULE_3__.getActiveBaggage;
        this.setBaggage = _baggage_context_helpers__WEBPACK_IMPORTED_MODULE_3__.setBaggage;
        this.deleteBaggage = _baggage_context_helpers__WEBPACK_IMPORTED_MODULE_3__.deleteBaggage;
    }
    /** Get the singleton instance of the Propagator API */
    PropagationAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new PropagationAPI();
        }
        return this._instance;
    };
    /**
     * Set the current propagator.
     *
     * @returns true if the propagator was successfully registered, else false
     */
    PropagationAPI.prototype.setGlobalPropagator = function (propagator) {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.registerGlobal)(API_NAME, propagator, _diag__WEBPACK_IMPORTED_MODULE_5__.DiagAPI.instance());
    };
    /**
     * Inject context into a carrier to be propagated inter-process
     *
     * @param context Context carrying tracing data to inject
     * @param carrier carrier to inject context into
     * @param setter Function used to set values on the carrier
     */
    PropagationAPI.prototype.inject = function (context, carrier, setter) {
        if (setter === void 0) { setter = _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_2__.defaultTextMapSetter; }
        return this._getGlobalPropagator().inject(context, carrier, setter);
    };
    /**
     * Extract context from a carrier
     *
     * @param context Context which the newly created context will inherit from
     * @param carrier Carrier to extract context from
     * @param getter Function used to extract keys from a carrier
     */
    PropagationAPI.prototype.extract = function (context, carrier, getter) {
        if (getter === void 0) { getter = _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_2__.defaultTextMapGetter; }
        return this._getGlobalPropagator().extract(context, carrier, getter);
    };
    /**
     * Return a list of all fields which may be used by the propagator.
     */
    PropagationAPI.prototype.fields = function () {
        return this._getGlobalPropagator().fields();
    };
    /** Remove the global propagator */
    PropagationAPI.prototype.disable = function () {
        (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.unregisterGlobal)(API_NAME, _diag__WEBPACK_IMPORTED_MODULE_5__.DiagAPI.instance());
    };
    PropagationAPI.prototype._getGlobalPropagator = function () {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobal)(API_NAME) || NOOP_TEXT_MAP_PROPAGATOR;
    };
    return PropagationAPI;
}());

//# sourceMappingURL=propagation.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/api/trace.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TraceAPI: () => (/* binding */ TraceAPI)
/* harmony export */ });
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/* harmony import */ var _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js");
/* harmony import */ var _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js");
/* harmony import */ var _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/context-utils.js");
/* harmony import */ var _diag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/api/diag.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var API_NAME = 'trace';
/**
 * Singleton object which represents the entry point to the OpenTelemetry Tracing API
 */
var TraceAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function TraceAPI() {
        this._proxyTracerProvider = new _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_1__.ProxyTracerProvider();
        this.wrapSpanContext = _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_2__.wrapSpanContext;
        this.isSpanContextValid = _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_2__.isSpanContextValid;
        this.deleteSpan = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.deleteSpan;
        this.getSpan = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.getSpan;
        this.getActiveSpan = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.getActiveSpan;
        this.getSpanContext = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.getSpanContext;
        this.setSpan = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.setSpan;
        this.setSpanContext = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.setSpanContext;
    }
    /** Get the singleton instance of the Trace API */
    TraceAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new TraceAPI();
        }
        return this._instance;
    };
    /**
     * Set the current global tracer.
     *
     * @returns true if the tracer provider was successfully registered, else false
     */
    TraceAPI.prototype.setGlobalTracerProvider = function (provider) {
        var success = (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.registerGlobal)(API_NAME, this._proxyTracerProvider, _diag__WEBPACK_IMPORTED_MODULE_4__.DiagAPI.instance());
        if (success) {
            this._proxyTracerProvider.setDelegate(provider);
        }
        return success;
    };
    /**
     * Returns the global tracer provider.
     */
    TraceAPI.prototype.getTracerProvider = function () {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobal)(API_NAME) || this._proxyTracerProvider;
    };
    /**
     * Returns a tracer from the global tracer provider.
     */
    TraceAPI.prototype.getTracer = function (name, version) {
        return this.getTracerProvider().getTracer(name, version);
    };
    /** Remove the global tracer provider */
    TraceAPI.prototype.disable = function () {
        (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.unregisterGlobal)(API_NAME, _diag__WEBPACK_IMPORTED_MODULE_4__.DiagAPI.instance());
        this._proxyTracerProvider = new _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_1__.ProxyTracerProvider();
    };
    return TraceAPI;
}());

//# sourceMappingURL=trace.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/baggage/context-helpers.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteBaggage: () => (/* binding */ deleteBaggage),
/* harmony export */   getActiveBaggage: () => (/* binding */ getActiveBaggage),
/* harmony export */   getBaggage: () => (/* binding */ getBaggage),
/* harmony export */   setBaggage: () => (/* binding */ setBaggage)
/* harmony export */ });
/* harmony import */ var _api_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/api/context.js");
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/context/context.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * Baggage key
 */
var BAGGAGE_KEY = (0,_context_context__WEBPACK_IMPORTED_MODULE_1__.createContextKey)('OpenTelemetry Baggage Key');
/**
 * Retrieve the current baggage from the given context
 *
 * @param {Context} Context that manage all context values
 * @returns {Baggage} Extracted baggage from the context
 */
function getBaggage(context) {
    return context.getValue(BAGGAGE_KEY) || undefined;
}
/**
 * Retrieve the current baggage from the active/current context
 *
 * @returns {Baggage} Extracted baggage from the context
 */
function getActiveBaggage() {
    return getBaggage(_api_context__WEBPACK_IMPORTED_MODULE_0__.ContextAPI.getInstance().active());
}
/**
 * Store a baggage in the given context
 *
 * @param {Context} Context that manage all context values
 * @param {Baggage} baggage that will be set in the actual context
 */
function setBaggage(context, baggage) {
    return context.setValue(BAGGAGE_KEY, baggage);
}
/**
 * Delete the baggage stored in the given context
 *
 * @param {Context} Context that manage all context values
 */
function deleteBaggage(context) {
    return context.deleteValue(BAGGAGE_KEY);
}
//# sourceMappingURL=context-helpers.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/baggage/internal/baggage-impl.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaggageImpl: () => (/* binding */ BaggageImpl)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var BaggageImpl = /** @class */ (function () {
    function BaggageImpl(entries) {
        this._entries = entries ? new Map(entries) : new Map();
    }
    BaggageImpl.prototype.getEntry = function (key) {
        var entry = this._entries.get(key);
        if (!entry) {
            return undefined;
        }
        return Object.assign({}, entry);
    };
    BaggageImpl.prototype.getAllEntries = function () {
        return Array.from(this._entries.entries()).map(function (_a) {
            var _b = __read(_a, 2), k = _b[0], v = _b[1];
            return [k, v];
        });
    };
    BaggageImpl.prototype.setEntry = function (key, entry) {
        var newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.set(key, entry);
        return newBaggage;
    };
    BaggageImpl.prototype.removeEntry = function (key) {
        var newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.delete(key);
        return newBaggage;
    };
    BaggageImpl.prototype.removeEntries = function () {
        var e_1, _a;
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        var newBaggage = new BaggageImpl(this._entries);
        try {
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var key = keys_1_1.value;
                newBaggage._entries.delete(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return newBaggage;
    };
    BaggageImpl.prototype.clear = function () {
        return new BaggageImpl();
    };
    return BaggageImpl;
}());

//# sourceMappingURL=baggage-impl.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/baggage/internal/symbol.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   baggageEntryMetadataSymbol: () => (/* binding */ baggageEntryMetadataSymbol)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Symbol used to make BaggageEntryMetadata an opaque type
 */
var baggageEntryMetadataSymbol = Symbol('BaggageEntryMetadata');
//# sourceMappingURL=symbol.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/baggage/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   baggageEntryMetadataFromString: () => (/* binding */ baggageEntryMetadataFromString),
/* harmony export */   createBaggage: () => (/* binding */ createBaggage)
/* harmony export */ });
/* harmony import */ var _api_diag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/api/diag.js");
/* harmony import */ var _internal_baggage_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/baggage/internal/baggage-impl.js");
/* harmony import */ var _internal_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/baggage/internal/symbol.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var diag = _api_diag__WEBPACK_IMPORTED_MODULE_0__.DiagAPI.instance();
/**
 * Create a new Baggage with optional entries
 *
 * @param entries An array of baggage entries the new baggage should contain
 */
function createBaggage(entries) {
    if (entries === void 0) { entries = {}; }
    return new _internal_baggage_impl__WEBPACK_IMPORTED_MODULE_1__.BaggageImpl(new Map(Object.entries(entries)));
}
/**
 * Create a serializable BaggageEntryMetadata object from a string.
 *
 * @param str string metadata. Format is currently not defined by the spec and has no special meaning.
 *
 */
function baggageEntryMetadataFromString(str) {
    if (typeof str !== 'string') {
        diag.error("Cannot create baggage metadata from unknown type: " + typeof str);
        str = '';
    }
    return {
        __TYPE__: _internal_symbol__WEBPACK_IMPORTED_MODULE_2__.baggageEntryMetadataSymbol,
        toString: function () {
            return str;
        },
    };
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/context-api.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   context: () => (/* binding */ context)
/* harmony export */ });
/* harmony import */ var _api_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/api/context.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.

/** Entrypoint for context API */
var context = _api_context__WEBPACK_IMPORTED_MODULE_0__.ContextAPI.getInstance();
//# sourceMappingURL=context-api.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoopContextManager: () => (/* binding */ NoopContextManager)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/context/context.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var NoopContextManager = /** @class */ (function () {
    function NoopContextManager() {
    }
    NoopContextManager.prototype.active = function () {
        return _context__WEBPACK_IMPORTED_MODULE_0__.ROOT_CONTEXT;
    };
    NoopContextManager.prototype.with = function (_context, fn, thisArg) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        return fn.call.apply(fn, __spreadArray([thisArg], __read(args), false));
    };
    NoopContextManager.prototype.bind = function (_context, target) {
        return target;
    };
    NoopContextManager.prototype.enable = function () {
        return this;
    };
    NoopContextManager.prototype.disable = function () {
        return this;
    };
    return NoopContextManager;
}());

//# sourceMappingURL=NoopContextManager.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/context/context.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROOT_CONTEXT: () => (/* binding */ ROOT_CONTEXT),
/* harmony export */   createContextKey: () => (/* binding */ createContextKey)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Get a key to uniquely identify a context value */
function createContextKey(description) {
    // The specification states that for the same input, multiple calls should
    // return different keys. Due to the nature of the JS dependency management
    // system, this creates problems where multiple versions of some package
    // could hold different keys for the same property.
    //
    // Therefore, we use Symbol.for which returns the same key for the same input.
    return Symbol.for(description);
}
var BaseContext = /** @class */ (function () {
    /**
     * Construct a new context which inherits values from an optional parent context.
     *
     * @param parentContext a context from which to inherit values
     */
    function BaseContext(parentContext) {
        // for minification
        var self = this;
        self._currentContext = parentContext ? new Map(parentContext) : new Map();
        self.getValue = function (key) { return self._currentContext.get(key); };
        self.setValue = function (key, value) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.set(key, value);
            return context;
        };
        self.deleteValue = function (key) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.delete(key);
            return context;
        };
    }
    return BaseContext;
}());
/** The root context is used as the default parent context when there is no active context */
var ROOT_CONTEXT = new BaseContext();
//# sourceMappingURL=context.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/diag-api.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   diag: () => (/* binding */ diag)
/* harmony export */ });
/* harmony import */ var _api_diag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/api/diag.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.

/**
 * Entrypoint for Diag API.
 * Defines Diagnostic handler used for internal diagnostic logging operations.
 * The default provides a Noop DiagLogger implementation which may be changed via the
 * diag.setLogger(logger: DiagLogger) function.
 */
var diag = _api_diag__WEBPACK_IMPORTED_MODULE_0__.DiagAPI.instance();
//# sourceMappingURL=diag-api.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiagComponentLogger: () => (/* binding */ DiagComponentLogger)
/* harmony export */ });
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

/**
 * Component Logger which is meant to be used as part of any component which
 * will add automatically additional namespace in front of the log message.
 * It will then forward all message to global diag logger
 * @example
 * const cLogger = diag.createComponentLogger({ namespace: '@opentelemetry/instrumentation-http' });
 * cLogger.debug('test');
 * // @opentelemetry/instrumentation-http test
 */
var DiagComponentLogger = /** @class */ (function () {
    function DiagComponentLogger(props) {
        this._namespace = props.namespace || 'DiagComponentLogger';
    }
    DiagComponentLogger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('debug', this._namespace, args);
    };
    DiagComponentLogger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('error', this._namespace, args);
    };
    DiagComponentLogger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('info', this._namespace, args);
    };
    DiagComponentLogger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('warn', this._namespace, args);
    };
    DiagComponentLogger.prototype.verbose = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('verbose', this._namespace, args);
    };
    return DiagComponentLogger;
}());

function logProxy(funcName, namespace, args) {
    var logger = (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobal)('diag');
    // shortcut if logger not set
    if (!logger) {
        return;
    }
    args.unshift(namespace);
    return logger[funcName].apply(logger, __spreadArray([], __read(args), false));
}
//# sourceMappingURL=ComponentLogger.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLogLevelDiagLogger: () => (/* binding */ createLogLevelDiagLogger)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/diag/types.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function createLogLevelDiagLogger(maxLevel, logger) {
    if (maxLevel < _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.NONE) {
        maxLevel = _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.NONE;
    }
    else if (maxLevel > _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.ALL) {
        maxLevel = _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.ALL;
    }
    // In case the logger is null or undefined
    logger = logger || {};
    function _filterFunc(funcName, theLevel) {
        var theFunc = logger[funcName];
        if (typeof theFunc === 'function' && maxLevel >= theLevel) {
            return theFunc.bind(logger);
        }
        return function () { };
    }
    return {
        error: _filterFunc('error', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.ERROR),
        warn: _filterFunc('warn', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.WARN),
        info: _filterFunc('info', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.INFO),
        debug: _filterFunc('debug', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.DEBUG),
        verbose: _filterFunc('verbose', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.VERBOSE),
    };
}
//# sourceMappingURL=logLevelLogger.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/diag/types.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiagLogLevel: () => (/* binding */ DiagLogLevel)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Defines the available internal logging levels for the diagnostic logger, the numeric values
 * of the levels are defined to match the original values from the initial LogLevel to avoid
 * compatibility/migration issues for any implementation that assume the numeric ordering.
 */
var DiagLogLevel;
(function (DiagLogLevel) {
    /** Diagnostic Logging level setting to disable all logging (except and forced logs) */
    DiagLogLevel[DiagLogLevel["NONE"] = 0] = "NONE";
    /** Identifies an error scenario */
    DiagLogLevel[DiagLogLevel["ERROR"] = 30] = "ERROR";
    /** Identifies a warning scenario */
    DiagLogLevel[DiagLogLevel["WARN"] = 50] = "WARN";
    /** General informational log message */
    DiagLogLevel[DiagLogLevel["INFO"] = 60] = "INFO";
    /** General debug log message */
    DiagLogLevel[DiagLogLevel["DEBUG"] = 70] = "DEBUG";
    /**
     * Detailed trace level logging should only be used for development, should only be set
     * in a development environment.
     */
    DiagLogLevel[DiagLogLevel["VERBOSE"] = 80] = "VERBOSE";
    /** Used to set the logging level to include all logging */
    DiagLogLevel[DiagLogLevel["ALL"] = 9999] = "ALL";
})(DiagLogLevel || (DiagLogLevel = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/internal/global-utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGlobal: () => (/* binding */ getGlobal),
/* harmony export */   registerGlobal: () => (/* binding */ registerGlobal),
/* harmony export */   unregisterGlobal: () => (/* binding */ unregisterGlobal)
/* harmony export */ });
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/platform/browser/globalThis.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/version.js");
/* harmony import */ var _semver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/internal/semver.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var major = _version__WEBPACK_IMPORTED_MODULE_1__.VERSION.split('.')[0];
var GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for("opentelemetry.js.api." + major);
var _global = _platform__WEBPACK_IMPORTED_MODULE_0__._globalThis;
function registerGlobal(type, instance, diag, allowOverride) {
    var _a;
    if (allowOverride === void 0) { allowOverride = false; }
    var api = (_global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : {
        version: _version__WEBPACK_IMPORTED_MODULE_1__.VERSION,
    });
    if (!allowOverride && api[type]) {
        // already registered an API of this type
        var err = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + type);
        diag.error(err.stack || err.message);
        return false;
    }
    if (api.version !== _version__WEBPACK_IMPORTED_MODULE_1__.VERSION) {
        // All registered APIs must be of the same version exactly
        var err = new Error("@opentelemetry/api: Registration of version v" + api.version + " for " + type + " does not match previously registered API v" + _version__WEBPACK_IMPORTED_MODULE_1__.VERSION);
        diag.error(err.stack || err.message);
        return false;
    }
    api[type] = instance;
    diag.debug("@opentelemetry/api: Registered a global for " + type + " v" + _version__WEBPACK_IMPORTED_MODULE_1__.VERSION + ".");
    return true;
}
function getGlobal(type) {
    var _a, _b;
    var globalVersion = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
    if (!globalVersion || !(0,_semver__WEBPACK_IMPORTED_MODULE_2__.isCompatible)(globalVersion)) {
        return;
    }
    return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
}
function unregisterGlobal(type, diag) {
    diag.debug("@opentelemetry/api: Unregistering a global for " + type + " v" + _version__WEBPACK_IMPORTED_MODULE_1__.VERSION + ".");
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
    if (api) {
        delete api[type];
    }
}
//# sourceMappingURL=global-utils.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/internal/semver.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _makeCompatibilityCheck: () => (/* binding */ _makeCompatibilityCheck),
/* harmony export */   isCompatible: () => (/* binding */ isCompatible)
/* harmony export */ });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/version.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
/**
 * Create a function to test an API version to see if it is compatible with the provided ownVersion.
 *
 * The returned function has the following semantics:
 * - Exact match is always compatible
 * - Major versions must match exactly
 *    - 1.x package cannot use global 2.x package
 *    - 2.x package cannot use global 1.x package
 * - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
 *    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
 *    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
 * - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
 * - Patch and build tag differences are not considered at this time
 *
 * @param ownVersion version which should be checked against
 */
function _makeCompatibilityCheck(ownVersion) {
    var acceptedVersions = new Set([ownVersion]);
    var rejectedVersions = new Set();
    var myVersionMatch = ownVersion.match(re);
    if (!myVersionMatch) {
        // we cannot guarantee compatibility so we always return noop
        return function () { return false; };
    }
    var ownVersionParsed = {
        major: +myVersionMatch[1],
        minor: +myVersionMatch[2],
        patch: +myVersionMatch[3],
        prerelease: myVersionMatch[4],
    };
    // if ownVersion has a prerelease tag, versions must match exactly
    if (ownVersionParsed.prerelease != null) {
        return function isExactmatch(globalVersion) {
            return globalVersion === ownVersion;
        };
    }
    function _reject(v) {
        rejectedVersions.add(v);
        return false;
    }
    function _accept(v) {
        acceptedVersions.add(v);
        return true;
    }
    return function isCompatible(globalVersion) {
        if (acceptedVersions.has(globalVersion)) {
            return true;
        }
        if (rejectedVersions.has(globalVersion)) {
            return false;
        }
        var globalVersionMatch = globalVersion.match(re);
        if (!globalVersionMatch) {
            // cannot parse other version
            // we cannot guarantee compatibility so we always noop
            return _reject(globalVersion);
        }
        var globalVersionParsed = {
            major: +globalVersionMatch[1],
            minor: +globalVersionMatch[2],
            patch: +globalVersionMatch[3],
            prerelease: globalVersionMatch[4],
        };
        // if globalVersion has a prerelease tag, versions must match exactly
        if (globalVersionParsed.prerelease != null) {
            return _reject(globalVersion);
        }
        // major versions must match
        if (ownVersionParsed.major !== globalVersionParsed.major) {
            return _reject(globalVersion);
        }
        if (ownVersionParsed.major === 0) {
            if (ownVersionParsed.minor === globalVersionParsed.minor &&
                ownVersionParsed.patch <= globalVersionParsed.patch) {
                return _accept(globalVersion);
            }
            return _reject(globalVersion);
        }
        if (ownVersionParsed.minor <= globalVersionParsed.minor) {
            return _accept(globalVersion);
        }
        return _reject(globalVersion);
    };
}
/**
 * Test an API version to see if it is compatible with this API.
 *
 * - Exact match is always compatible
 * - Major versions must match exactly
 *    - 1.x package cannot use global 2.x package
 *    - 2.x package cannot use global 1.x package
 * - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
 *    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
 *    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
 * - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
 * - Patch and build tag differences are not considered at this time
 *
 * @param version version of the API requesting an instance of the global API
 */
var isCompatible = _makeCompatibilityCheck(_version__WEBPACK_IMPORTED_MODULE_0__.VERSION);
//# sourceMappingURL=semver.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/metrics-api.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   metrics: () => (/* binding */ metrics)
/* harmony export */ });
/* harmony import */ var _api_metrics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/api/metrics.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.

/** Entrypoint for metrics API */
var metrics = _api_metrics__WEBPACK_IMPORTED_MODULE_0__.MetricsAPI.getInstance();
//# sourceMappingURL=metrics-api.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/metrics/NoopMeter.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NOOP_COUNTER_METRIC: () => (/* binding */ NOOP_COUNTER_METRIC),
/* harmony export */   NOOP_GAUGE_METRIC: () => (/* binding */ NOOP_GAUGE_METRIC),
/* harmony export */   NOOP_HISTOGRAM_METRIC: () => (/* binding */ NOOP_HISTOGRAM_METRIC),
/* harmony export */   NOOP_METER: () => (/* binding */ NOOP_METER),
/* harmony export */   NOOP_OBSERVABLE_COUNTER_METRIC: () => (/* binding */ NOOP_OBSERVABLE_COUNTER_METRIC),
/* harmony export */   NOOP_OBSERVABLE_GAUGE_METRIC: () => (/* binding */ NOOP_OBSERVABLE_GAUGE_METRIC),
/* harmony export */   NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC: () => (/* binding */ NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC),
/* harmony export */   NOOP_UP_DOWN_COUNTER_METRIC: () => (/* binding */ NOOP_UP_DOWN_COUNTER_METRIC),
/* harmony export */   NoopCounterMetric: () => (/* binding */ NoopCounterMetric),
/* harmony export */   NoopGaugeMetric: () => (/* binding */ NoopGaugeMetric),
/* harmony export */   NoopHistogramMetric: () => (/* binding */ NoopHistogramMetric),
/* harmony export */   NoopMeter: () => (/* binding */ NoopMeter),
/* harmony export */   NoopMetric: () => (/* binding */ NoopMetric),
/* harmony export */   NoopObservableCounterMetric: () => (/* binding */ NoopObservableCounterMetric),
/* harmony export */   NoopObservableGaugeMetric: () => (/* binding */ NoopObservableGaugeMetric),
/* harmony export */   NoopObservableMetric: () => (/* binding */ NoopObservableMetric),
/* harmony export */   NoopObservableUpDownCounterMetric: () => (/* binding */ NoopObservableUpDownCounterMetric),
/* harmony export */   NoopUpDownCounterMetric: () => (/* binding */ NoopUpDownCounterMetric),
/* harmony export */   createNoopMeter: () => (/* binding */ createNoopMeter)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * NoopMeter is a noop implementation of the {@link Meter} interface. It reuses
 * constant NoopMetrics for all of its methods.
 */
var NoopMeter = /** @class */ (function () {
    function NoopMeter() {
    }
    /**
     * @see {@link Meter.createGauge}
     */
    NoopMeter.prototype.createGauge = function (_name, _options) {
        return NOOP_GAUGE_METRIC;
    };
    /**
     * @see {@link Meter.createHistogram}
     */
    NoopMeter.prototype.createHistogram = function (_name, _options) {
        return NOOP_HISTOGRAM_METRIC;
    };
    /**
     * @see {@link Meter.createCounter}
     */
    NoopMeter.prototype.createCounter = function (_name, _options) {
        return NOOP_COUNTER_METRIC;
    };
    /**
     * @see {@link Meter.createUpDownCounter}
     */
    NoopMeter.prototype.createUpDownCounter = function (_name, _options) {
        return NOOP_UP_DOWN_COUNTER_METRIC;
    };
    /**
     * @see {@link Meter.createObservableGauge}
     */
    NoopMeter.prototype.createObservableGauge = function (_name, _options) {
        return NOOP_OBSERVABLE_GAUGE_METRIC;
    };
    /**
     * @see {@link Meter.createObservableCounter}
     */
    NoopMeter.prototype.createObservableCounter = function (_name, _options) {
        return NOOP_OBSERVABLE_COUNTER_METRIC;
    };
    /**
     * @see {@link Meter.createObservableUpDownCounter}
     */
    NoopMeter.prototype.createObservableUpDownCounter = function (_name, _options) {
        return NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
    };
    /**
     * @see {@link Meter.addBatchObservableCallback}
     */
    NoopMeter.prototype.addBatchObservableCallback = function (_callback, _observables) { };
    /**
     * @see {@link Meter.removeBatchObservableCallback}
     */
    NoopMeter.prototype.removeBatchObservableCallback = function (_callback) { };
    return NoopMeter;
}());

var NoopMetric = /** @class */ (function () {
    function NoopMetric() {
    }
    return NoopMetric;
}());

var NoopCounterMetric = /** @class */ (function (_super) {
    __extends(NoopCounterMetric, _super);
    function NoopCounterMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopCounterMetric.prototype.add = function (_value, _attributes) { };
    return NoopCounterMetric;
}(NoopMetric));

var NoopUpDownCounterMetric = /** @class */ (function (_super) {
    __extends(NoopUpDownCounterMetric, _super);
    function NoopUpDownCounterMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopUpDownCounterMetric.prototype.add = function (_value, _attributes) { };
    return NoopUpDownCounterMetric;
}(NoopMetric));

var NoopGaugeMetric = /** @class */ (function (_super) {
    __extends(NoopGaugeMetric, _super);
    function NoopGaugeMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopGaugeMetric.prototype.record = function (_value, _attributes) { };
    return NoopGaugeMetric;
}(NoopMetric));

var NoopHistogramMetric = /** @class */ (function (_super) {
    __extends(NoopHistogramMetric, _super);
    function NoopHistogramMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopHistogramMetric.prototype.record = function (_value, _attributes) { };
    return NoopHistogramMetric;
}(NoopMetric));

var NoopObservableMetric = /** @class */ (function () {
    function NoopObservableMetric() {
    }
    NoopObservableMetric.prototype.addCallback = function (_callback) { };
    NoopObservableMetric.prototype.removeCallback = function (_callback) { };
    return NoopObservableMetric;
}());

var NoopObservableCounterMetric = /** @class */ (function (_super) {
    __extends(NoopObservableCounterMetric, _super);
    function NoopObservableCounterMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopObservableCounterMetric;
}(NoopObservableMetric));

var NoopObservableGaugeMetric = /** @class */ (function (_super) {
    __extends(NoopObservableGaugeMetric, _super);
    function NoopObservableGaugeMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopObservableGaugeMetric;
}(NoopObservableMetric));

var NoopObservableUpDownCounterMetric = /** @class */ (function (_super) {
    __extends(NoopObservableUpDownCounterMetric, _super);
    function NoopObservableUpDownCounterMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopObservableUpDownCounterMetric;
}(NoopObservableMetric));

var NOOP_METER = new NoopMeter();
// Synchronous instruments
var NOOP_COUNTER_METRIC = new NoopCounterMetric();
var NOOP_GAUGE_METRIC = new NoopGaugeMetric();
var NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric();
var NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric();
// Asynchronous instruments
var NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric();
var NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric();
var NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric();
/**
 * Create a no-op Meter
 */
function createNoopMeter() {
    return NOOP_METER;
}
//# sourceMappingURL=NoopMeter.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/metrics/NoopMeterProvider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NOOP_METER_PROVIDER: () => (/* binding */ NOOP_METER_PROVIDER),
/* harmony export */   NoopMeterProvider: () => (/* binding */ NoopMeterProvider)
/* harmony export */ });
/* harmony import */ var _NoopMeter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/metrics/NoopMeter.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An implementation of the {@link MeterProvider} which returns an impotent Meter
 * for all calls to `getMeter`
 */
var NoopMeterProvider = /** @class */ (function () {
    function NoopMeterProvider() {
    }
    NoopMeterProvider.prototype.getMeter = function (_name, _version, _options) {
        return _NoopMeter__WEBPACK_IMPORTED_MODULE_0__.NOOP_METER;
    };
    return NoopMeterProvider;
}());

var NOOP_METER_PROVIDER = new NoopMeterProvider();
//# sourceMappingURL=NoopMeterProvider.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/platform/browser/globalThis.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _globalThis: () => (/* binding */ _globalThis)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Updates to this file should also be replicated to @opentelemetry/core too.
/**
 * - globalThis (New standard)
 * - self (Will return the current window instance for supported browsers)
 * - window (fallback for older browser implementations)
 * - global (NodeJS implementation)
 * - <object> (When all else fails)
 */
/** only globals that common to node and browsers are allowed */
// eslint-disable-next-line node/no-unsupported-features/es-builtins, no-undef
var _globalThis = typeof globalThis === 'object'
    ? globalThis
    : typeof self === 'object'
        ? self
        : typeof window === 'object'
            ? window
            : typeof __webpack_require__.g === 'object'
                ? __webpack_require__.g
                : {};
//# sourceMappingURL=globalThis.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/propagation-api.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   propagation: () => (/* binding */ propagation)
/* harmony export */ });
/* harmony import */ var _api_propagation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/api/propagation.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.

/** Entrypoint for propagation API */
var propagation = _api_propagation__WEBPACK_IMPORTED_MODULE_0__.PropagationAPI.getInstance();
//# sourceMappingURL=propagation-api.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/propagation/NoopTextMapPropagator.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoopTextMapPropagator: () => (/* binding */ NoopTextMapPropagator)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * No-op implementations of {@link TextMapPropagator}.
 */
var NoopTextMapPropagator = /** @class */ (function () {
    function NoopTextMapPropagator() {
    }
    /** Noop inject function does nothing */
    NoopTextMapPropagator.prototype.inject = function (_context, _carrier) { };
    /** Noop extract function does nothing and returns the input context */
    NoopTextMapPropagator.prototype.extract = function (context, _carrier) {
        return context;
    };
    NoopTextMapPropagator.prototype.fields = function () {
        return [];
    };
    return NoopTextMapPropagator;
}());

//# sourceMappingURL=NoopTextMapPropagator.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultTextMapGetter: () => (/* binding */ defaultTextMapGetter),
/* harmony export */   defaultTextMapSetter: () => (/* binding */ defaultTextMapSetter)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var defaultTextMapGetter = {
    get: function (carrier, key) {
        if (carrier == null) {
            return undefined;
        }
        return carrier[key];
    },
    keys: function (carrier) {
        if (carrier == null) {
            return [];
        }
        return Object.keys(carrier);
    },
};
var defaultTextMapSetter = {
    set: function (carrier, key, value) {
        if (carrier == null) {
            return;
        }
        carrier[key] = value;
    },
};
//# sourceMappingURL=TextMapPropagator.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace-api.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   trace: () => (/* binding */ trace)
/* harmony export */ });
/* harmony import */ var _api_trace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/api/trace.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.

/** Entrypoint for trace API */
var trace = _api_trace__WEBPACK_IMPORTED_MODULE_0__.TraceAPI.getInstance();
//# sourceMappingURL=trace-api.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NonRecordingSpan: () => (/* binding */ NonRecordingSpan)
/* harmony export */ });
/* harmony import */ var _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The NonRecordingSpan is the default {@link Span} that is used when no Span
 * implementation is available. All operations are no-op including context
 * propagation.
 */
var NonRecordingSpan = /** @class */ (function () {
    function NonRecordingSpan(_spanContext) {
        if (_spanContext === void 0) { _spanContext = _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__.INVALID_SPAN_CONTEXT; }
        this._spanContext = _spanContext;
    }
    // Returns a SpanContext.
    NonRecordingSpan.prototype.spanContext = function () {
        return this._spanContext;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setAttribute = function (_key, _value) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setAttributes = function (_attributes) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.addEvent = function (_name, _attributes) {
        return this;
    };
    NonRecordingSpan.prototype.addLink = function (_link) {
        return this;
    };
    NonRecordingSpan.prototype.addLinks = function (_links) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setStatus = function (_status) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.updateName = function (_name) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.end = function (_endTime) { };
    // isRecording always returns false for NonRecordingSpan.
    NonRecordingSpan.prototype.isRecording = function () {
        return false;
    };
    // By default does nothing
    NonRecordingSpan.prototype.recordException = function (_exception, _time) { };
    return NonRecordingSpan;
}());

//# sourceMappingURL=NonRecordingSpan.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoopTracer: () => (/* binding */ NoopTracer)
/* harmony export */ });
/* harmony import */ var _api_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/api/context.js");
/* harmony import */ var _trace_context_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/context-utils.js");
/* harmony import */ var _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js");
/* harmony import */ var _spancontext_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var contextApi = _api_context__WEBPACK_IMPORTED_MODULE_0__.ContextAPI.getInstance();
/**
 * No-op implementations of {@link Tracer}.
 */
var NoopTracer = /** @class */ (function () {
    function NoopTracer() {
    }
    // startSpan starts a noop span.
    NoopTracer.prototype.startSpan = function (name, options, context) {
        if (context === void 0) { context = contextApi.active(); }
        var root = Boolean(options === null || options === void 0 ? void 0 : options.root);
        if (root) {
            return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_2__.NonRecordingSpan();
        }
        var parentFromContext = context && (0,_trace_context_utils__WEBPACK_IMPORTED_MODULE_1__.getSpanContext)(context);
        if (isSpanContext(parentFromContext) &&
            (0,_spancontext_utils__WEBPACK_IMPORTED_MODULE_3__.isSpanContextValid)(parentFromContext)) {
            return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_2__.NonRecordingSpan(parentFromContext);
        }
        else {
            return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_2__.NonRecordingSpan();
        }
    };
    NoopTracer.prototype.startActiveSpan = function (name, arg2, arg3, arg4) {
        var opts;
        var ctx;
        var fn;
        if (arguments.length < 2) {
            return;
        }
        else if (arguments.length === 2) {
            fn = arg2;
        }
        else if (arguments.length === 3) {
            opts = arg2;
            fn = arg3;
        }
        else {
            opts = arg2;
            ctx = arg3;
            fn = arg4;
        }
        var parentContext = ctx !== null && ctx !== void 0 ? ctx : contextApi.active();
        var span = this.startSpan(name, opts, parentContext);
        var contextWithSpanSet = (0,_trace_context_utils__WEBPACK_IMPORTED_MODULE_1__.setSpan)(parentContext, span);
        return contextApi.with(contextWithSpanSet, fn, undefined, span);
    };
    return NoopTracer;
}());

function isSpanContext(spanContext) {
    return (typeof spanContext === 'object' &&
        typeof spanContext['spanId'] === 'string' &&
        typeof spanContext['traceId'] === 'string' &&
        typeof spanContext['traceFlags'] === 'number');
}
//# sourceMappingURL=NoopTracer.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoopTracerProvider: () => (/* binding */ NoopTracerProvider)
/* harmony export */ });
/* harmony import */ var _NoopTracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An implementation of the {@link TracerProvider} which returns an impotent
 * Tracer for all calls to `getTracer`.
 *
 * All operations are no-op.
 */
var NoopTracerProvider = /** @class */ (function () {
    function NoopTracerProvider() {
    }
    NoopTracerProvider.prototype.getTracer = function (_name, _version, _options) {
        return new _NoopTracer__WEBPACK_IMPORTED_MODULE_0__.NoopTracer();
    };
    return NoopTracerProvider;
}());

//# sourceMappingURL=NoopTracerProvider.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxyTracer: () => (/* binding */ ProxyTracer)
/* harmony export */ });
/* harmony import */ var _NoopTracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var NOOP_TRACER = new _NoopTracer__WEBPACK_IMPORTED_MODULE_0__.NoopTracer();
/**
 * Proxy tracer provided by the proxy tracer provider
 */
var ProxyTracer = /** @class */ (function () {
    function ProxyTracer(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    ProxyTracer.prototype.startSpan = function (name, options, context) {
        return this._getTracer().startSpan(name, options, context);
    };
    ProxyTracer.prototype.startActiveSpan = function (_name, _options, _context, _fn) {
        var tracer = this._getTracer();
        return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
    };
    /**
     * Try to get a tracer from the proxy tracer provider.
     * If the proxy tracer provider has no delegate, return a noop tracer.
     */
    ProxyTracer.prototype._getTracer = function () {
        if (this._delegate) {
            return this._delegate;
        }
        var tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
        if (!tracer) {
            return NOOP_TRACER;
        }
        this._delegate = tracer;
        return this._delegate;
    };
    return ProxyTracer;
}());

//# sourceMappingURL=ProxyTracer.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxyTracerProvider: () => (/* binding */ ProxyTracerProvider)
/* harmony export */ });
/* harmony import */ var _ProxyTracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js");
/* harmony import */ var _NoopTracerProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var NOOP_TRACER_PROVIDER = new _NoopTracerProvider__WEBPACK_IMPORTED_MODULE_1__.NoopTracerProvider();
/**
 * Tracer provider which provides {@link ProxyTracer}s.
 *
 * Before a delegate is set, tracers provided are NoOp.
 *   When a delegate is set, traces are provided from the delegate.
 *   When a delegate is set after tracers have already been provided,
 *   all tracers already provided will use the provided delegate implementation.
 */
var ProxyTracerProvider = /** @class */ (function () {
    function ProxyTracerProvider() {
    }
    /**
     * Get a {@link ProxyTracer}
     */
    ProxyTracerProvider.prototype.getTracer = function (name, version, options) {
        var _a;
        return ((_a = this.getDelegateTracer(name, version, options)) !== null && _a !== void 0 ? _a : new _ProxyTracer__WEBPACK_IMPORTED_MODULE_0__.ProxyTracer(this, name, version, options));
    };
    ProxyTracerProvider.prototype.getDelegate = function () {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_TRACER_PROVIDER;
    };
    /**
     * Set the delegate tracer provider
     */
    ProxyTracerProvider.prototype.setDelegate = function (delegate) {
        this._delegate = delegate;
    };
    ProxyTracerProvider.prototype.getDelegateTracer = function (name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name, version, options);
    };
    return ProxyTracerProvider;
}());

//# sourceMappingURL=ProxyTracerProvider.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/SamplingResult.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SamplingDecision: () => (/* binding */ SamplingDecision)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @deprecated use the one declared in @opentelemetry/sdk-trace-base instead.
 * A sampling decision that determines how a {@link Span} will be recorded
 * and collected.
 */
var SamplingDecision;
(function (SamplingDecision) {
    /**
     * `Span.isRecording() === false`, span will not be recorded and all events
     * and attributes will be dropped.
     */
    SamplingDecision[SamplingDecision["NOT_RECORD"] = 0] = "NOT_RECORD";
    /**
     * `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
     * MUST NOT be set.
     */
    SamplingDecision[SamplingDecision["RECORD"] = 1] = "RECORD";
    /**
     * `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
     * MUST be set.
     */
    SamplingDecision[SamplingDecision["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision || (SamplingDecision = {}));
//# sourceMappingURL=SamplingResult.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/context-utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteSpan: () => (/* binding */ deleteSpan),
/* harmony export */   getActiveSpan: () => (/* binding */ getActiveSpan),
/* harmony export */   getSpan: () => (/* binding */ getSpan),
/* harmony export */   getSpanContext: () => (/* binding */ getSpanContext),
/* harmony export */   setSpan: () => (/* binding */ setSpan),
/* harmony export */   setSpanContext: () => (/* binding */ setSpanContext)
/* harmony export */ });
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/context/context.js");
/* harmony import */ var _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js");
/* harmony import */ var _api_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/api/context.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * span key
 */
var SPAN_KEY = (0,_context_context__WEBPACK_IMPORTED_MODULE_0__.createContextKey)('OpenTelemetry Context Key SPAN');
/**
 * Return the span if one exists
 *
 * @param context context to get span from
 */
function getSpan(context) {
    return context.getValue(SPAN_KEY) || undefined;
}
/**
 * Gets the span from the current context, if one exists.
 */
function getActiveSpan() {
    return getSpan(_api_context__WEBPACK_IMPORTED_MODULE_2__.ContextAPI.getInstance().active());
}
/**
 * Set the span on a context
 *
 * @param context context to use as parent
 * @param span span to set active
 */
function setSpan(context, span) {
    return context.setValue(SPAN_KEY, span);
}
/**
 * Remove current span stored in the context
 *
 * @param context context to delete span from
 */
function deleteSpan(context) {
    return context.deleteValue(SPAN_KEY);
}
/**
 * Wrap span context in a NoopSpan and set as span in a new
 * context
 *
 * @param context context to set active span on
 * @param spanContext span context to be wrapped
 */
function setSpanContext(context, spanContext) {
    return setSpan(context, new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__.NonRecordingSpan(spanContext));
}
/**
 * Get the span context of the span if it exists.
 *
 * @param context context to get values from
 */
function getSpanContext(context) {
    var _a;
    return (_a = getSpan(context)) === null || _a === void 0 ? void 0 : _a.spanContext();
}
//# sourceMappingURL=context-utils.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INVALID_SPANID: () => (/* binding */ INVALID_SPANID),
/* harmony export */   INVALID_SPAN_CONTEXT: () => (/* binding */ INVALID_SPAN_CONTEXT),
/* harmony export */   INVALID_TRACEID: () => (/* binding */ INVALID_TRACEID)
/* harmony export */ });
/* harmony import */ var _trace_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var INVALID_SPANID = '0000000000000000';
var INVALID_TRACEID = '00000000000000000000000000000000';
var INVALID_SPAN_CONTEXT = {
    traceId: INVALID_TRACEID,
    spanId: INVALID_SPANID,
    traceFlags: _trace_flags__WEBPACK_IMPORTED_MODULE_0__.TraceFlags.NONE,
};
//# sourceMappingURL=invalid-span-constants.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/span_kind.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpanKind: () => (/* binding */ SpanKind)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SpanKind;
(function (SpanKind) {
    /** Default value. Indicates that the span is used internally. */
    SpanKind[SpanKind["INTERNAL"] = 0] = "INTERNAL";
    /**
     * Indicates that the span covers server-side handling of an RPC or other
     * remote request.
     */
    SpanKind[SpanKind["SERVER"] = 1] = "SERVER";
    /**
     * Indicates that the span covers the client-side wrapper around an RPC or
     * other remote request.
     */
    SpanKind[SpanKind["CLIENT"] = 2] = "CLIENT";
    /**
     * Indicates that the span describes producer sending a message to a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */
    SpanKind[SpanKind["PRODUCER"] = 3] = "PRODUCER";
    /**
     * Indicates that the span describes consumer receiving a message from a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */
    SpanKind[SpanKind["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind || (SpanKind = {}));
//# sourceMappingURL=span_kind.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSpanContextValid: () => (/* binding */ isSpanContextValid),
/* harmony export */   isValidSpanId: () => (/* binding */ isValidSpanId),
/* harmony export */   isValidTraceId: () => (/* binding */ isValidTraceId),
/* harmony export */   wrapSpanContext: () => (/* binding */ wrapSpanContext)
/* harmony export */ });
/* harmony import */ var _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js");
/* harmony import */ var _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var VALID_TRACEID_REGEX = /^([0-9a-f]{32})$/i;
var VALID_SPANID_REGEX = /^[0-9a-f]{16}$/i;
function isValidTraceId(traceId) {
    return VALID_TRACEID_REGEX.test(traceId) && traceId !== _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__.INVALID_TRACEID;
}
function isValidSpanId(spanId) {
    return VALID_SPANID_REGEX.test(spanId) && spanId !== _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__.INVALID_SPANID;
}
/**
 * Returns true if this {@link SpanContext} is valid.
 * @return true if this {@link SpanContext} is valid.
 */
function isSpanContextValid(spanContext) {
    return (isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId));
}
/**
 * Wrap the given {@link SpanContext} in a new non-recording {@link Span}
 *
 * @param spanContext span context to be wrapped
 * @returns a new non-recording {@link Span} with the provided context
 */
function wrapSpanContext(spanContext) {
    return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__.NonRecordingSpan(spanContext);
}
//# sourceMappingURL=spancontext-utils.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/status.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpanStatusCode: () => (/* binding */ SpanStatusCode)
/* harmony export */ });
/**
 * An enumeration of status codes.
 */
var SpanStatusCode;
(function (SpanStatusCode) {
    /**
     * The default status.
     */
    SpanStatusCode[SpanStatusCode["UNSET"] = 0] = "UNSET";
    /**
     * The operation has been validated by an Application developer or
     * Operator to have completed successfully.
     */
    SpanStatusCode[SpanStatusCode["OK"] = 1] = "OK";
    /**
     * The operation contains an error.
     */
    SpanStatusCode[SpanStatusCode["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {}));
//# sourceMappingURL=status.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TraceFlags: () => (/* binding */ TraceFlags)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TraceFlags;
(function (TraceFlags) {
    /** Represents no flag set. */
    TraceFlags[TraceFlags["NONE"] = 0] = "NONE";
    /** Bit to represent whether trace is sampled in trace flags. */
    TraceFlags[TraceFlags["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags || (TraceFlags = {}));
//# sourceMappingURL=trace_flags.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/version.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// this is autogenerated file, see scripts/version-update.js
var VERSION = '1.9.0';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/ExportResult.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExportResultCode: () => (/* binding */ ExportResultCode)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ExportResultCode;
(function (ExportResultCode) {
    ExportResultCode[ExportResultCode["SUCCESS"] = 0] = "SUCCESS";
    ExportResultCode[ExportResultCode["FAILED"] = 1] = "FAILED";
})(ExportResultCode || (ExportResultCode = {}));
//# sourceMappingURL=ExportResult.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/baggage/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BAGGAGE_HEADER: () => (/* binding */ BAGGAGE_HEADER),
/* harmony export */   BAGGAGE_ITEMS_SEPARATOR: () => (/* binding */ BAGGAGE_ITEMS_SEPARATOR),
/* harmony export */   BAGGAGE_KEY_PAIR_SEPARATOR: () => (/* binding */ BAGGAGE_KEY_PAIR_SEPARATOR),
/* harmony export */   BAGGAGE_MAX_NAME_VALUE_PAIRS: () => (/* binding */ BAGGAGE_MAX_NAME_VALUE_PAIRS),
/* harmony export */   BAGGAGE_MAX_PER_NAME_VALUE_PAIRS: () => (/* binding */ BAGGAGE_MAX_PER_NAME_VALUE_PAIRS),
/* harmony export */   BAGGAGE_MAX_TOTAL_LENGTH: () => (/* binding */ BAGGAGE_MAX_TOTAL_LENGTH),
/* harmony export */   BAGGAGE_PROPERTIES_SEPARATOR: () => (/* binding */ BAGGAGE_PROPERTIES_SEPARATOR)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const BAGGAGE_KEY_PAIR_SEPARATOR = '=';
const BAGGAGE_PROPERTIES_SEPARATOR = ';';
const BAGGAGE_ITEMS_SEPARATOR = ',';
// Name of the http header used to propagate the baggage
const BAGGAGE_HEADER = 'baggage';
// Maximum number of name-value pairs allowed by w3c spec
const BAGGAGE_MAX_NAME_VALUE_PAIRS = 180;
// Maximum number of bytes per a single name-value pair allowed by w3c spec
const BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096;
// Maximum total length of all name-value pairs allowed by w3c spec
const BAGGAGE_MAX_TOTAL_LENGTH = 8192;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/baggage/propagation/W3CBaggagePropagator.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W3CBaggagePropagator: () => (/* binding */ W3CBaggagePropagator)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/propagation-api.js");
/* harmony import */ var _trace_suppress_tracing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/baggage/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/baggage/utils.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




/**
 * Propagates {@link Baggage} through Context format propagation.
 *
 * Based on the Baggage specification:
 * https://w3c.github.io/baggage/
 */
class W3CBaggagePropagator {
    inject(context, carrier, setter) {
        const baggage = _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.propagation.getBaggage(context);
        if (!baggage || (0,_trace_suppress_tracing__WEBPACK_IMPORTED_MODULE_1__.isTracingSuppressed)(context))
            return;
        const keyPairs = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getKeyPairs)(baggage)
            .filter((pair) => {
            return pair.length <= _constants__WEBPACK_IMPORTED_MODULE_2__.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS;
        })
            .slice(0, _constants__WEBPACK_IMPORTED_MODULE_2__.BAGGAGE_MAX_NAME_VALUE_PAIRS);
        const headerValue = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.serializeKeyPairs)(keyPairs);
        if (headerValue.length > 0) {
            setter.set(carrier, _constants__WEBPACK_IMPORTED_MODULE_2__.BAGGAGE_HEADER, headerValue);
        }
    }
    extract(context, carrier, getter) {
        const headerValue = getter.get(carrier, _constants__WEBPACK_IMPORTED_MODULE_2__.BAGGAGE_HEADER);
        const baggageString = Array.isArray(headerValue)
            ? headerValue.join(_constants__WEBPACK_IMPORTED_MODULE_2__.BAGGAGE_ITEMS_SEPARATOR)
            : headerValue;
        if (!baggageString)
            return context;
        const baggage = {};
        if (baggageString.length === 0) {
            return context;
        }
        const pairs = baggageString.split(_constants__WEBPACK_IMPORTED_MODULE_2__.BAGGAGE_ITEMS_SEPARATOR);
        pairs.forEach(entry => {
            const keyPair = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.parsePairKeyValue)(entry);
            if (keyPair) {
                const baggageEntry = { value: keyPair.value };
                if (keyPair.metadata) {
                    baggageEntry.metadata = keyPair.metadata;
                }
                baggage[keyPair.key] = baggageEntry;
            }
        });
        if (Object.entries(baggage).length === 0) {
            return context;
        }
        return _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.propagation.setBaggage(context, _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.propagation.createBaggage(baggage));
    }
    fields() {
        return [_constants__WEBPACK_IMPORTED_MODULE_2__.BAGGAGE_HEADER];
    }
}
//# sourceMappingURL=W3CBaggagePropagator.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/baggage/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getKeyPairs: () => (/* binding */ getKeyPairs),
/* harmony export */   parseKeyPairsIntoRecord: () => (/* binding */ parseKeyPairsIntoRecord),
/* harmony export */   parsePairKeyValue: () => (/* binding */ parsePairKeyValue),
/* harmony export */   serializeKeyPairs: () => (/* binding */ serializeKeyPairs)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/baggage/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/baggage/constants.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function serializeKeyPairs(keyPairs) {
    return keyPairs.reduce((hValue, current) => {
        const value = `${hValue}${hValue !== '' ? _constants__WEBPACK_IMPORTED_MODULE_1__.BAGGAGE_ITEMS_SEPARATOR : ''}${current}`;
        return value.length > _constants__WEBPACK_IMPORTED_MODULE_1__.BAGGAGE_MAX_TOTAL_LENGTH ? hValue : value;
    }, '');
}
function getKeyPairs(baggage) {
    return baggage.getAllEntries().map(([key, value]) => {
        let entry = `${encodeURIComponent(key)}=${encodeURIComponent(value.value)}`;
        // include opaque metadata if provided
        // NOTE: we intentionally don't URI-encode the metadata - that responsibility falls on the metadata implementation
        if (value.metadata !== undefined) {
            entry += _constants__WEBPACK_IMPORTED_MODULE_1__.BAGGAGE_PROPERTIES_SEPARATOR + value.metadata.toString();
        }
        return entry;
    });
}
function parsePairKeyValue(entry) {
    const valueProps = entry.split(_constants__WEBPACK_IMPORTED_MODULE_1__.BAGGAGE_PROPERTIES_SEPARATOR);
    if (valueProps.length <= 0)
        return;
    const keyPairPart = valueProps.shift();
    if (!keyPairPart)
        return;
    const separatorIndex = keyPairPart.indexOf(_constants__WEBPACK_IMPORTED_MODULE_1__.BAGGAGE_KEY_PAIR_SEPARATOR);
    if (separatorIndex <= 0)
        return;
    const key = decodeURIComponent(keyPairPart.substring(0, separatorIndex).trim());
    const value = decodeURIComponent(keyPairPart.substring(separatorIndex + 1).trim());
    let metadata;
    if (valueProps.length > 0) {
        metadata = (0,_opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.baggageEntryMetadataFromString)(valueProps.join(_constants__WEBPACK_IMPORTED_MODULE_1__.BAGGAGE_PROPERTIES_SEPARATOR));
    }
    return { key, value, metadata };
}
/**
 * Parse a string serialized in the baggage HTTP Format (without metadata):
 * https://github.com/w3c/baggage/blob/master/baggage/HTTP_HEADER_FORMAT.md
 */
function parseKeyPairsIntoRecord(value) {
    const result = {};
    if (typeof value === 'string' && value.length > 0) {
        value.split(_constants__WEBPACK_IMPORTED_MODULE_1__.BAGGAGE_ITEMS_SEPARATOR).forEach(entry => {
            const keyPair = parsePairKeyValue(entry);
            if (keyPair !== undefined && keyPair.value.length > 0) {
                result[keyPair.key] = keyPair.value;
            }
        });
    }
    return result;
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/common/anchored-clock.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnchoredClock: () => (/* binding */ AnchoredClock)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A utility for returning wall times anchored to a given point in time. Wall time measurements will
 * not be taken from the system, but instead are computed by adding a monotonic clock time
 * to the anchor point.
 *
 * This is needed because the system time can change and result in unexpected situations like
 * spans ending before they are started. Creating an anchored clock for each local root span
 * ensures that span timings and durations are accurate while preventing span times from drifting
 * too far from the system clock.
 *
 * Only creating an anchored clock once per local trace ensures span times are correct relative
 * to each other. For example, a child span will never have a start time before its parent even
 * if the system clock is corrected during the local trace.
 *
 * Heavily inspired by the OTel Java anchored clock
 * https://github.com/open-telemetry/opentelemetry-java/blob/main/sdk/trace/src/main/java/io/opentelemetry/sdk/trace/AnchoredClock.java
 */
class AnchoredClock {
    _monotonicClock;
    _epochMillis;
    _performanceMillis;
    /**
     * Create a new AnchoredClock anchored to the current time returned by systemClock.
     *
     * @param systemClock should be a clock that returns the number of milliseconds since January 1 1970 such as Date
     * @param monotonicClock should be a clock that counts milliseconds monotonically such as window.performance or perf_hooks.performance
     */
    constructor(systemClock, monotonicClock) {
        this._monotonicClock = monotonicClock;
        this._epochMillis = systemClock.now();
        this._performanceMillis = monotonicClock.now();
    }
    /**
     * Returns the current time by adding the number of milliseconds since the
     * AnchoredClock was created to the creation epoch time
     */
    now() {
        const delta = this._monotonicClock.now() - this._performanceMillis;
        return this._epochMillis + delta;
    }
}
//# sourceMappingURL=anchored-clock.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/common/attributes.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAttributeKey: () => (/* binding */ isAttributeKey),
/* harmony export */   isAttributeValue: () => (/* binding */ isAttributeValue),
/* harmony export */   sanitizeAttributes: () => (/* binding */ sanitizeAttributes)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/diag-api.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function sanitizeAttributes(attributes) {
    const out = {};
    if (typeof attributes !== 'object' || attributes == null) {
        return out;
    }
    for (const [key, val] of Object.entries(attributes)) {
        if (!isAttributeKey(key)) {
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.diag.warn(`Invalid attribute key: ${key}`);
            continue;
        }
        if (!isAttributeValue(val)) {
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.diag.warn(`Invalid attribute value set for key: ${key}`);
            continue;
        }
        if (Array.isArray(val)) {
            out[key] = val.slice();
        }
        else {
            out[key] = val;
        }
    }
    return out;
}
function isAttributeKey(key) {
    return typeof key === 'string' && key.length > 0;
}
function isAttributeValue(val) {
    if (val == null) {
        return true;
    }
    if (Array.isArray(val)) {
        return isHomogeneousAttributeValueArray(val);
    }
    return isValidPrimitiveAttributeValue(val);
}
function isHomogeneousAttributeValueArray(arr) {
    let type;
    for (const element of arr) {
        // null/undefined elements are allowed
        if (element == null)
            continue;
        if (!type) {
            if (isValidPrimitiveAttributeValue(element)) {
                type = typeof element;
                continue;
            }
            // encountered an invalid primitive
            return false;
        }
        if (typeof element === type) {
            continue;
        }
        return false;
    }
    return true;
}
function isValidPrimitiveAttributeValue(val) {
    switch (typeof val) {
        case 'number':
        case 'boolean':
        case 'string':
            return true;
    }
    return false;
}
//# sourceMappingURL=attributes.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/common/global-error-handler.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   globalErrorHandler: () => (/* binding */ globalErrorHandler),
/* harmony export */   setGlobalErrorHandler: () => (/* binding */ setGlobalErrorHandler)
/* harmony export */ });
/* harmony import */ var _logging_error_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/common/logging-error-handler.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** The global error handler delegate */
let delegateHandler = (0,_logging_error_handler__WEBPACK_IMPORTED_MODULE_0__.loggingErrorHandler)();
/**
 * Set the global error handler
 * @param {ErrorHandler} handler
 */
function setGlobalErrorHandler(handler) {
    delegateHandler = handler;
}
/**
 * Return the global error handler
 * @param {Exception} ex
 */
function globalErrorHandler(ex) {
    try {
        delegateHandler(ex);
    }
    catch { } // eslint-disable-line no-empty
}
//# sourceMappingURL=global-error-handler.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/common/logging-error-handler.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loggingErrorHandler: () => (/* binding */ loggingErrorHandler)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/diag-api.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns a function that logs an error using the provided logger, or a
 * console logger if one was not provided.
 */
function loggingErrorHandler() {
    return (ex) => {
        _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.diag.error(stringifyException(ex));
    };
}
/**
 * Converts an exception into a string representation
 * @param {Exception} ex
 */
function stringifyException(ex) {
    if (typeof ex === 'string') {
        return ex;
    }
    else {
        return JSON.stringify(flattenException(ex));
    }
}
/**
 * Flattens an exception into key-value pairs by traversing the prototype chain
 * and coercing values to strings. Duplicate properties will not be overwritten;
 * the first insert wins.
 */
function flattenException(ex) {
    const result = {};
    let current = ex;
    while (current !== null) {
        Object.getOwnPropertyNames(current).forEach(propertyName => {
            if (result[propertyName])
                return;
            const value = current[propertyName];
            if (value) {
                result[propertyName] = String(value);
            }
        });
        current = Object.getPrototypeOf(current);
    }
    return result;
}
//# sourceMappingURL=logging-error-handler.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/common/time.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addHrTimes: () => (/* binding */ addHrTimes),
/* harmony export */   getTimeOrigin: () => (/* binding */ getTimeOrigin),
/* harmony export */   hrTime: () => (/* binding */ hrTime),
/* harmony export */   hrTimeDuration: () => (/* binding */ hrTimeDuration),
/* harmony export */   hrTimeToMicroseconds: () => (/* binding */ hrTimeToMicroseconds),
/* harmony export */   hrTimeToMilliseconds: () => (/* binding */ hrTimeToMilliseconds),
/* harmony export */   hrTimeToNanoseconds: () => (/* binding */ hrTimeToNanoseconds),
/* harmony export */   hrTimeToTimeStamp: () => (/* binding */ hrTimeToTimeStamp),
/* harmony export */   isTimeInput: () => (/* binding */ isTimeInput),
/* harmony export */   isTimeInputHrTime: () => (/* binding */ isTimeInputHrTime),
/* harmony export */   millisToHrTime: () => (/* binding */ millisToHrTime),
/* harmony export */   timeInputToHrTime: () => (/* binding */ timeInputToHrTime)
/* harmony export */ });
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/platform/browser/performance.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const NANOSECOND_DIGITS = 9;
const NANOSECOND_DIGITS_IN_MILLIS = 6;
const MILLISECONDS_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS_IN_MILLIS);
const SECOND_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS);
/**
 * Converts a number of milliseconds from epoch to HrTime([seconds, remainder in nanoseconds]).
 * @param epochMillis
 */
function millisToHrTime(epochMillis) {
    const epochSeconds = epochMillis / 1000;
    // Decimals only.
    const seconds = Math.trunc(epochSeconds);
    // Round sub-nanosecond accuracy to nanosecond.
    const nanos = Math.round((epochMillis % 1000) * MILLISECONDS_TO_NANOSECONDS);
    return [seconds, nanos];
}
function getTimeOrigin() {
    let timeOrigin = _platform__WEBPACK_IMPORTED_MODULE_0__.otperformance.timeOrigin;
    if (typeof timeOrigin !== 'number') {
        const perf = _platform__WEBPACK_IMPORTED_MODULE_0__.otperformance;
        timeOrigin = perf.timing && perf.timing.fetchStart;
    }
    return timeOrigin;
}
/**
 * Returns an hrtime calculated via performance component.
 * @param performanceNow
 */
function hrTime(performanceNow) {
    const timeOrigin = millisToHrTime(getTimeOrigin());
    const now = millisToHrTime(typeof performanceNow === 'number' ? performanceNow : _platform__WEBPACK_IMPORTED_MODULE_0__.otperformance.now());
    return addHrTimes(timeOrigin, now);
}
/**
 *
 * Converts a TimeInput to an HrTime, defaults to _hrtime().
 * @param time
 */
function timeInputToHrTime(time) {
    // process.hrtime
    if (isTimeInputHrTime(time)) {
        return time;
    }
    else if (typeof time === 'number') {
        // Must be a performance.now() if it's smaller than process start time.
        if (time < getTimeOrigin()) {
            return hrTime(time);
        }
        else {
            // epoch milliseconds or performance.timeOrigin
            return millisToHrTime(time);
        }
    }
    else if (time instanceof Date) {
        return millisToHrTime(time.getTime());
    }
    else {
        throw TypeError('Invalid input type');
    }
}
/**
 * Returns a duration of two hrTime.
 * @param startTime
 * @param endTime
 */
function hrTimeDuration(startTime, endTime) {
    let seconds = endTime[0] - startTime[0];
    let nanos = endTime[1] - startTime[1];
    // overflow
    if (nanos < 0) {
        seconds -= 1;
        // negate
        nanos += SECOND_TO_NANOSECONDS;
    }
    return [seconds, nanos];
}
/**
 * Convert hrTime to timestamp, for example "2019-05-14T17:00:00.000123456Z"
 * @param time
 */
function hrTimeToTimeStamp(time) {
    const precision = NANOSECOND_DIGITS;
    const tmp = `${'0'.repeat(precision)}${time[1]}Z`;
    const nanoString = tmp.substring(tmp.length - precision - 1);
    const date = new Date(time[0] * 1000).toISOString();
    return date.replace('000Z', nanoString);
}
/**
 * Convert hrTime to nanoseconds.
 * @param time
 */
function hrTimeToNanoseconds(time) {
    return time[0] * SECOND_TO_NANOSECONDS + time[1];
}
/**
 * Convert hrTime to milliseconds.
 * @param time
 */
function hrTimeToMilliseconds(time) {
    return time[0] * 1e3 + time[1] / 1e6;
}
/**
 * Convert hrTime to microseconds.
 * @param time
 */
function hrTimeToMicroseconds(time) {
    return time[0] * 1e6 + time[1] / 1e3;
}
/**
 * check if time is HrTime
 * @param value
 */
function isTimeInputHrTime(value) {
    return (Array.isArray(value) &&
        value.length === 2 &&
        typeof value[0] === 'number' &&
        typeof value[1] === 'number');
}
/**
 * check if input value is a correct types.TimeInput
 * @param value
 */
function isTimeInput(value) {
    return (isTimeInputHrTime(value) ||
        typeof value === 'number' ||
        value instanceof Date);
}
/**
 * Given 2 HrTime formatted times, return their sum as an HrTime.
 */
function addHrTimes(time1, time2) {
    const out = [time1[0] + time2[0], time1[1] + time2[1]];
    // Nanoseconds
    if (out[1] >= SECOND_TO_NANOSECONDS) {
        out[1] -= SECOND_TO_NANOSECONDS;
        out[0] += 1;
    }
    return out;
}
//# sourceMappingURL=time.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnchoredClock: () => (/* reexport safe */ _common_anchored_clock__WEBPACK_IMPORTED_MODULE_1__.AnchoredClock),
/* harmony export */   BindOnceFuture: () => (/* reexport safe */ _utils_callback__WEBPACK_IMPORTED_MODULE_21__.BindOnceFuture),
/* harmony export */   CompositePropagator: () => (/* reexport safe */ _propagation_composite__WEBPACK_IMPORTED_MODULE_13__.CompositePropagator),
/* harmony export */   ExportResultCode: () => (/* reexport safe */ _ExportResult__WEBPACK_IMPORTED_MODULE_6__.ExportResultCode),
/* harmony export */   RPCType: () => (/* reexport safe */ _trace_rpc_metadata__WEBPACK_IMPORTED_MODULE_15__.RPCType),
/* harmony export */   SDK_INFO: () => (/* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_11__.SDK_INFO),
/* harmony export */   TRACE_PARENT_HEADER: () => (/* reexport safe */ _trace_W3CTraceContextPropagator__WEBPACK_IMPORTED_MODULE_14__.TRACE_PARENT_HEADER),
/* harmony export */   TRACE_STATE_HEADER: () => (/* reexport safe */ _trace_W3CTraceContextPropagator__WEBPACK_IMPORTED_MODULE_14__.TRACE_STATE_HEADER),
/* harmony export */   TimeoutError: () => (/* reexport safe */ _utils_timeout__WEBPACK_IMPORTED_MODULE_19__.TimeoutError),
/* harmony export */   TraceState: () => (/* reexport safe */ _trace_TraceState__WEBPACK_IMPORTED_MODULE_17__.TraceState),
/* harmony export */   W3CBaggagePropagator: () => (/* reexport safe */ _baggage_propagation_W3CBaggagePropagator__WEBPACK_IMPORTED_MODULE_0__.W3CBaggagePropagator),
/* harmony export */   W3CTraceContextPropagator: () => (/* reexport safe */ _trace_W3CTraceContextPropagator__WEBPACK_IMPORTED_MODULE_14__.W3CTraceContextPropagator),
/* harmony export */   _globalThis: () => (/* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_9__._globalThis),
/* harmony export */   addHrTimes: () => (/* reexport safe */ _common_time__WEBPACK_IMPORTED_MODULE_5__.addHrTimes),
/* harmony export */   callWithTimeout: () => (/* reexport safe */ _utils_timeout__WEBPACK_IMPORTED_MODULE_19__.callWithTimeout),
/* harmony export */   deleteRPCMetadata: () => (/* reexport safe */ _trace_rpc_metadata__WEBPACK_IMPORTED_MODULE_15__.deleteRPCMetadata),
/* harmony export */   diagLogLevelFromString: () => (/* reexport safe */ _utils_configuration__WEBPACK_IMPORTED_MODULE_22__.diagLogLevelFromString),
/* harmony export */   getBooleanFromEnv: () => (/* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_8__.getBooleanFromEnv),
/* harmony export */   getNumberFromEnv: () => (/* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_8__.getNumberFromEnv),
/* harmony export */   getRPCMetadata: () => (/* reexport safe */ _trace_rpc_metadata__WEBPACK_IMPORTED_MODULE_15__.getRPCMetadata),
/* harmony export */   getStringFromEnv: () => (/* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_8__.getStringFromEnv),
/* harmony export */   getStringListFromEnv: () => (/* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_8__.getStringListFromEnv),
/* harmony export */   getTimeOrigin: () => (/* reexport safe */ _common_time__WEBPACK_IMPORTED_MODULE_5__.getTimeOrigin),
/* harmony export */   globalErrorHandler: () => (/* reexport safe */ _common_global_error_handler__WEBPACK_IMPORTED_MODULE_3__.globalErrorHandler),
/* harmony export */   hrTime: () => (/* reexport safe */ _common_time__WEBPACK_IMPORTED_MODULE_5__.hrTime),
/* harmony export */   hrTimeDuration: () => (/* reexport safe */ _common_time__WEBPACK_IMPORTED_MODULE_5__.hrTimeDuration),
/* harmony export */   hrTimeToMicroseconds: () => (/* reexport safe */ _common_time__WEBPACK_IMPORTED_MODULE_5__.hrTimeToMicroseconds),
/* harmony export */   hrTimeToMilliseconds: () => (/* reexport safe */ _common_time__WEBPACK_IMPORTED_MODULE_5__.hrTimeToMilliseconds),
/* harmony export */   hrTimeToNanoseconds: () => (/* reexport safe */ _common_time__WEBPACK_IMPORTED_MODULE_5__.hrTimeToNanoseconds),
/* harmony export */   hrTimeToTimeStamp: () => (/* reexport safe */ _common_time__WEBPACK_IMPORTED_MODULE_5__.hrTimeToTimeStamp),
/* harmony export */   internal: () => (/* binding */ internal),
/* harmony export */   isAttributeValue: () => (/* reexport safe */ _common_attributes__WEBPACK_IMPORTED_MODULE_2__.isAttributeValue),
/* harmony export */   isTimeInput: () => (/* reexport safe */ _common_time__WEBPACK_IMPORTED_MODULE_5__.isTimeInput),
/* harmony export */   isTimeInputHrTime: () => (/* reexport safe */ _common_time__WEBPACK_IMPORTED_MODULE_5__.isTimeInputHrTime),
/* harmony export */   isTracingSuppressed: () => (/* reexport safe */ _trace_suppress_tracing__WEBPACK_IMPORTED_MODULE_16__.isTracingSuppressed),
/* harmony export */   isUrlIgnored: () => (/* reexport safe */ _utils_url__WEBPACK_IMPORTED_MODULE_20__.isUrlIgnored),
/* harmony export */   loggingErrorHandler: () => (/* reexport safe */ _common_logging_error_handler__WEBPACK_IMPORTED_MODULE_4__.loggingErrorHandler),
/* harmony export */   merge: () => (/* reexport safe */ _utils_merge__WEBPACK_IMPORTED_MODULE_18__.merge),
/* harmony export */   millisToHrTime: () => (/* reexport safe */ _common_time__WEBPACK_IMPORTED_MODULE_5__.millisToHrTime),
/* harmony export */   otperformance: () => (/* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_10__.otperformance),
/* harmony export */   parseKeyPairsIntoRecord: () => (/* reexport safe */ _baggage_utils__WEBPACK_IMPORTED_MODULE_7__.parseKeyPairsIntoRecord),
/* harmony export */   parseTraceParent: () => (/* reexport safe */ _trace_W3CTraceContextPropagator__WEBPACK_IMPORTED_MODULE_14__.parseTraceParent),
/* harmony export */   sanitizeAttributes: () => (/* reexport safe */ _common_attributes__WEBPACK_IMPORTED_MODULE_2__.sanitizeAttributes),
/* harmony export */   setGlobalErrorHandler: () => (/* reexport safe */ _common_global_error_handler__WEBPACK_IMPORTED_MODULE_3__.setGlobalErrorHandler),
/* harmony export */   setRPCMetadata: () => (/* reexport safe */ _trace_rpc_metadata__WEBPACK_IMPORTED_MODULE_15__.setRPCMetadata),
/* harmony export */   suppressTracing: () => (/* reexport safe */ _trace_suppress_tracing__WEBPACK_IMPORTED_MODULE_16__.suppressTracing),
/* harmony export */   timeInputToHrTime: () => (/* reexport safe */ _common_time__WEBPACK_IMPORTED_MODULE_5__.timeInputToHrTime),
/* harmony export */   unrefTimer: () => (/* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_12__.unrefTimer),
/* harmony export */   unsuppressTracing: () => (/* reexport safe */ _trace_suppress_tracing__WEBPACK_IMPORTED_MODULE_16__.unsuppressTracing),
/* harmony export */   urlMatches: () => (/* reexport safe */ _utils_url__WEBPACK_IMPORTED_MODULE_20__.urlMatches)
/* harmony export */ });
/* harmony import */ var _baggage_propagation_W3CBaggagePropagator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/baggage/propagation/W3CBaggagePropagator.js");
/* harmony import */ var _common_anchored_clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/common/anchored-clock.js");
/* harmony import */ var _common_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/common/attributes.js");
/* harmony import */ var _common_global_error_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/common/global-error-handler.js");
/* harmony import */ var _common_logging_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/common/logging-error-handler.js");
/* harmony import */ var _common_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/common/time.js");
/* harmony import */ var _ExportResult__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/ExportResult.js");
/* harmony import */ var _baggage_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/baggage/utils.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/platform/browser/environment.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/platform/browser/globalThis.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/platform/browser/performance.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/platform/browser/sdk-info.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/platform/browser/timer-util.js");
/* harmony import */ var _propagation_composite__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/propagation/composite.js");
/* harmony import */ var _trace_W3CTraceContextPropagator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/trace/W3CTraceContextPropagator.js");
/* harmony import */ var _trace_rpc_metadata__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/trace/rpc-metadata.js");
/* harmony import */ var _trace_suppress_tracing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js");
/* harmony import */ var _trace_TraceState__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/trace/TraceState.js");
/* harmony import */ var _utils_merge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/utils/merge.js");
/* harmony import */ var _utils_timeout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/utils/timeout.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/utils/url.js");
/* harmony import */ var _utils_callback__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/utils/callback.js");
/* harmony import */ var _utils_configuration__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/utils/configuration.js");
/* harmony import */ var _internal_exporter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/internal/exporter.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




















const internal = {
    _export: _internal_exporter__WEBPACK_IMPORTED_MODULE_23__._export,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/internal/exporter.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _export: () => (/* binding */ _export)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/context-api.js");
/* harmony import */ var _trace_suppress_tracing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * @internal
 * Shared functionality used by Exporters while exporting data, including suppression of Traces.
 */
function _export(exporter, arg) {
    return new Promise(resolve => {
        // prevent downstream exporter calls from generating spans
        _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.context.with((0,_trace_suppress_tracing__WEBPACK_IMPORTED_MODULE_1__.suppressTracing)(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.context.active()), () => {
            exporter.export(arg, (result) => {
                resolve(result);
            });
        });
    });
}
//# sourceMappingURL=exporter.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/internal/validators.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateKey: () => (/* binding */ validateKey),
/* harmony export */   validateValue: () => (/* binding */ validateValue)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const VALID_KEY_CHAR_RANGE = '[_0-9a-z-*/]';
const VALID_KEY = `[a-z]${VALID_KEY_CHAR_RANGE}{0,255}`;
const VALID_VENDOR_KEY = `[a-z0-9]${VALID_KEY_CHAR_RANGE}{0,240}@[a-z]${VALID_KEY_CHAR_RANGE}{0,13}`;
const VALID_KEY_REGEX = new RegExp(`^(?:${VALID_KEY}|${VALID_VENDOR_KEY})$`);
const VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
const INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
/**
 * Key is opaque string up to 256 characters printable. It MUST begin with a
 * lowercase letter, and can only contain lowercase letters a-z, digits 0-9,
 * underscores _, dashes -, asterisks *, and forward slashes /.
 * For multi-tenant vendor scenarios, an at sign (@) can be used to prefix the
 * vendor name. Vendors SHOULD set the tenant ID at the beginning of the key.
 * see https://www.w3.org/TR/trace-context/#key
 */
function validateKey(key) {
    return VALID_KEY_REGEX.test(key);
}
/**
 * Value is opaque string up to 256 characters printable ASCII RFC0020
 * characters (i.e., the range 0x20 to 0x7E) except comma , and =.
 */
function validateValue(value) {
    return (VALID_VALUE_BASE_REGEX.test(value) &&
        !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value));
}
//# sourceMappingURL=validators.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/platform/browser/environment.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBooleanFromEnv: () => (/* binding */ getBooleanFromEnv),
/* harmony export */   getNumberFromEnv: () => (/* binding */ getNumberFromEnv),
/* harmony export */   getStringFromEnv: () => (/* binding */ getStringFromEnv),
/* harmony export */   getStringListFromEnv: () => (/* binding */ getStringListFromEnv)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getStringFromEnv(_) {
    return undefined;
}
function getBooleanFromEnv(_) {
    return undefined;
}
function getNumberFromEnv(_) {
    return undefined;
}
function getStringListFromEnv(_) {
    return undefined;
}
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/platform/browser/globalThis.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _globalThis: () => (/* binding */ _globalThis)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Updates to this file should also be replicated to @opentelemetry/api too.
/**
 * - globalThis (New standard)
 * - self (Will return the current window instance for supported browsers)
 * - window (fallback for older browser implementations)
 * - global (NodeJS implementation)
 * - <object> (When all else fails)
 */
/** only globals that common to node and browsers are allowed */
// eslint-disable-next-line node/no-unsupported-features/es-builtins, no-undef
const _globalThis = typeof globalThis === 'object'
    ? globalThis
    : typeof self === 'object'
        ? self
        : typeof window === 'object'
            ? window
            : typeof __webpack_require__.g === 'object'
                ? __webpack_require__.g
                : {};
//# sourceMappingURL=globalThis.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/platform/browser/performance.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   otperformance: () => (/* binding */ otperformance)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const otperformance = performance;
//# sourceMappingURL=performance.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/platform/browser/sdk-info.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SDK_INFO: () => (/* binding */ SDK_INFO)
/* harmony export */ });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/version.js");
/* harmony import */ var _opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/semantic-conventions/build/esm/stable_attributes.js");
/* harmony import */ var _semconv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/semconv.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/** Constants describing the SDK in use */
const SDK_INFO = {
    [_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_1__.ATTR_TELEMETRY_SDK_NAME]: 'opentelemetry',
    [_semconv__WEBPACK_IMPORTED_MODULE_2__.ATTR_PROCESS_RUNTIME_NAME]: 'browser',
    [_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_1__.ATTR_TELEMETRY_SDK_LANGUAGE]: _opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_1__.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS,
    [_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_1__.ATTR_TELEMETRY_SDK_VERSION]: _version__WEBPACK_IMPORTED_MODULE_0__.VERSION,
};
//# sourceMappingURL=sdk-info.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/platform/browser/timer-util.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unrefTimer: () => (/* binding */ unrefTimer)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function unrefTimer(_timer) { }
//# sourceMappingURL=timer-util.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/propagation/composite.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompositePropagator: () => (/* binding */ CompositePropagator)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/diag-api.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Combines multiple propagators into a single propagator. */
class CompositePropagator {
    _propagators;
    _fields;
    /**
     * Construct a composite propagator from a list of propagators.
     *
     * @param [config] Configuration object for composite propagator
     */
    constructor(config = {}) {
        this._propagators = config.propagators ?? [];
        this._fields = Array.from(new Set(this._propagators
            // older propagators may not have fields function, null check to be sure
            .map(p => (typeof p.fields === 'function' ? p.fields() : []))
            .reduce((x, y) => x.concat(y), [])));
    }
    /**
     * Run each of the configured propagators with the given context and carrier.
     * Propagators are run in the order they are configured, so if multiple
     * propagators write the same carrier key, the propagator later in the list
     * will "win".
     *
     * @param context Context to inject
     * @param carrier Carrier into which context will be injected
     */
    inject(context, carrier, setter) {
        for (const propagator of this._propagators) {
            try {
                propagator.inject(context, carrier, setter);
            }
            catch (err) {
                _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.diag.warn(`Failed to inject with ${propagator.constructor.name}. Err: ${err.message}`);
            }
        }
    }
    /**
     * Run each of the configured propagators with the given context and carrier.
     * Propagators are run in the order they are configured, so if multiple
     * propagators write the same context key, the propagator later in the list
     * will "win".
     *
     * @param context Context to add values to
     * @param carrier Carrier from which to extract context
     */
    extract(context, carrier, getter) {
        return this._propagators.reduce((ctx, propagator) => {
            try {
                return propagator.extract(ctx, carrier, getter);
            }
            catch (err) {
                _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.diag.warn(`Failed to extract with ${propagator.constructor.name}. Err: ${err.message}`);
            }
            return ctx;
        }, context);
    }
    fields() {
        // return a new array so our fields cannot be modified
        return this._fields.slice();
    }
}
//# sourceMappingURL=composite.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/semconv.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ATTR_PROCESS_RUNTIME_NAME: () => (/* binding */ ATTR_PROCESS_RUNTIME_NAME)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*
 * This file contains a copy of unstable semantic convention definitions
 * used by this package.
 * @see https://github.com/open-telemetry/opentelemetry-js/tree/main/semantic-conventions#unstable-semconv
 */
/**
 * The name of the runtime of this process.
 *
 * @example OpenJDK Runtime Environment
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
const ATTR_PROCESS_RUNTIME_NAME = 'process.runtime.name';
//# sourceMappingURL=semconv.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/trace/TraceState.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TraceState: () => (/* binding */ TraceState)
/* harmony export */ });
/* harmony import */ var _internal_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/internal/validators.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const MAX_TRACE_STATE_ITEMS = 32;
const MAX_TRACE_STATE_LEN = 512;
const LIST_MEMBERS_SEPARATOR = ',';
const LIST_MEMBER_KEY_VALUE_SPLITTER = '=';
/**
 * TraceState must be a class and not a simple object type because of the spec
 * requirement (https://www.w3.org/TR/trace-context/#tracestate-field).
 *
 * Here is the list of allowed mutations:
 * - New key-value pair should be added into the beginning of the list
 * - The value of any key can be updated. Modified keys MUST be moved to the
 * beginning of the list.
 */
class TraceState {
    _internalState = new Map();
    constructor(rawTraceState) {
        if (rawTraceState)
            this._parse(rawTraceState);
    }
    set(key, value) {
        // TODO: Benchmark the different approaches(map vs list) and
        // use the faster one.
        const traceState = this._clone();
        if (traceState._internalState.has(key)) {
            traceState._internalState.delete(key);
        }
        traceState._internalState.set(key, value);
        return traceState;
    }
    unset(key) {
        const traceState = this._clone();
        traceState._internalState.delete(key);
        return traceState;
    }
    get(key) {
        return this._internalState.get(key);
    }
    serialize() {
        return this._keys()
            .reduce((agg, key) => {
            agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + this.get(key));
            return agg;
        }, [])
            .join(LIST_MEMBERS_SEPARATOR);
    }
    _parse(rawTraceState) {
        if (rawTraceState.length > MAX_TRACE_STATE_LEN)
            return;
        this._internalState = rawTraceState
            .split(LIST_MEMBERS_SEPARATOR)
            .reverse() // Store in reverse so new keys (.set(...)) will be placed at the beginning
            .reduce((agg, part) => {
            const listMember = part.trim(); // Optional Whitespace (OWS) handling
            const i = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
            if (i !== -1) {
                const key = listMember.slice(0, i);
                const value = listMember.slice(i + 1, part.length);
                if ((0,_internal_validators__WEBPACK_IMPORTED_MODULE_0__.validateKey)(key) && (0,_internal_validators__WEBPACK_IMPORTED_MODULE_0__.validateValue)(value)) {
                    agg.set(key, value);
                }
                else {
                    // TODO: Consider to add warning log
                }
            }
            return agg;
        }, new Map());
        // Because of the reverse() requirement, trunc must be done after map is created
        if (this._internalState.size > MAX_TRACE_STATE_ITEMS) {
            this._internalState = new Map(Array.from(this._internalState.entries())
                .reverse() // Use reverse same as original tracestate parse chain
                .slice(0, MAX_TRACE_STATE_ITEMS));
        }
    }
    _keys() {
        return Array.from(this._internalState.keys()).reverse();
    }
    _clone() {
        const traceState = new TraceState();
        traceState._internalState = new Map(this._internalState);
        return traceState;
    }
}
//# sourceMappingURL=TraceState.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/trace/W3CTraceContextPropagator.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TRACE_PARENT_HEADER: () => (/* binding */ TRACE_PARENT_HEADER),
/* harmony export */   TRACE_STATE_HEADER: () => (/* binding */ TRACE_STATE_HEADER),
/* harmony export */   W3CTraceContextPropagator: () => (/* binding */ W3CTraceContextPropagator),
/* harmony export */   parseTraceParent: () => (/* binding */ parseTraceParent)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace-api.js");
/* harmony import */ var _suppress_tracing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js");
/* harmony import */ var _TraceState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/trace/TraceState.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



const TRACE_PARENT_HEADER = 'traceparent';
const TRACE_STATE_HEADER = 'tracestate';
const VERSION = '00';
const VERSION_PART = '(?!ff)[\\da-f]{2}';
const TRACE_ID_PART = '(?![0]{32})[\\da-f]{32}';
const PARENT_ID_PART = '(?![0]{16})[\\da-f]{16}';
const FLAGS_PART = '[\\da-f]{2}';
const TRACE_PARENT_REGEX = new RegExp(`^\\s?(${VERSION_PART})-(${TRACE_ID_PART})-(${PARENT_ID_PART})-(${FLAGS_PART})(-.*)?\\s?$`);
/**
 * Parses information from the [traceparent] span tag and converts it into {@link SpanContext}
 * @param traceParent - A meta property that comes from server.
 *     It should be dynamically generated server side to have the server's request trace Id,
 *     a parent span Id that was set on the server's request span,
 *     and the trace flags to indicate the server's sampling decision
 *     (01 = sampled, 00 = not sampled).
 *     for example: '{version}-{traceId}-{spanId}-{sampleDecision}'
 *     For more information see {@link https://www.w3.org/TR/trace-context/}
 */
function parseTraceParent(traceParent) {
    const match = TRACE_PARENT_REGEX.exec(traceParent);
    if (!match)
        return null;
    // According to the specification the implementation should be compatible
    // with future versions. If there are more parts, we only reject it if it's using version 00
    // See https://www.w3.org/TR/trace-context/#versioning-of-traceparent
    if (match[1] === '00' && match[5])
        return null;
    return {
        traceId: match[2],
        spanId: match[3],
        traceFlags: parseInt(match[4], 16),
    };
}
/**
 * Propagates {@link SpanContext} through Trace Context format propagation.
 *
 * Based on the Trace Context specification:
 * https://www.w3.org/TR/trace-context/
 */
class W3CTraceContextPropagator {
    inject(context, carrier, setter) {
        const spanContext = _opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.trace.getSpanContext(context);
        if (!spanContext ||
            (0,_suppress_tracing__WEBPACK_IMPORTED_MODULE_3__.isTracingSuppressed)(context) ||
            !(0,_opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.isSpanContextValid)(spanContext))
            return;
        const traceParent = `${VERSION}-${spanContext.traceId}-${spanContext.spanId}-0${Number(spanContext.traceFlags || _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.TraceFlags.NONE).toString(16)}`;
        setter.set(carrier, TRACE_PARENT_HEADER, traceParent);
        if (spanContext.traceState) {
            setter.set(carrier, TRACE_STATE_HEADER, spanContext.traceState.serialize());
        }
    }
    extract(context, carrier, getter) {
        const traceParentHeader = getter.get(carrier, TRACE_PARENT_HEADER);
        if (!traceParentHeader)
            return context;
        const traceParent = Array.isArray(traceParentHeader)
            ? traceParentHeader[0]
            : traceParentHeader;
        if (typeof traceParent !== 'string')
            return context;
        const spanContext = parseTraceParent(traceParent);
        if (!spanContext)
            return context;
        spanContext.isRemote = true;
        const traceStateHeader = getter.get(carrier, TRACE_STATE_HEADER);
        if (traceStateHeader) {
            // If more than one `tracestate` header is found, we merge them into a
            // single header.
            const state = Array.isArray(traceStateHeader)
                ? traceStateHeader.join(',')
                : traceStateHeader;
            spanContext.traceState = new _TraceState__WEBPACK_IMPORTED_MODULE_4__.TraceState(typeof state === 'string' ? state : undefined);
        }
        return _opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.trace.setSpanContext(context, spanContext);
    }
    fields() {
        return [TRACE_PARENT_HEADER, TRACE_STATE_HEADER];
    }
}
//# sourceMappingURL=W3CTraceContextPropagator.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/trace/rpc-metadata.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RPCType: () => (/* binding */ RPCType),
/* harmony export */   deleteRPCMetadata: () => (/* binding */ deleteRPCMetadata),
/* harmony export */   getRPCMetadata: () => (/* binding */ getRPCMetadata),
/* harmony export */   setRPCMetadata: () => (/* binding */ setRPCMetadata)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/context/context.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const RPC_METADATA_KEY = (0,_opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.createContextKey)('OpenTelemetry SDK Context Key RPC_METADATA');
var RPCType;
(function (RPCType) {
    RPCType["HTTP"] = "http";
})(RPCType || (RPCType = {}));
function setRPCMetadata(context, meta) {
    return context.setValue(RPC_METADATA_KEY, meta);
}
function deleteRPCMetadata(context) {
    return context.deleteValue(RPC_METADATA_KEY);
}
function getRPCMetadata(context) {
    return context.getValue(RPC_METADATA_KEY);
}
//# sourceMappingURL=rpc-metadata.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isTracingSuppressed: () => (/* binding */ isTracingSuppressed),
/* harmony export */   suppressTracing: () => (/* binding */ suppressTracing),
/* harmony export */   unsuppressTracing: () => (/* binding */ unsuppressTracing)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/context/context.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const SUPPRESS_TRACING_KEY = (0,_opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.createContextKey)('OpenTelemetry SDK Context Key SUPPRESS_TRACING');
function suppressTracing(context) {
    return context.setValue(SUPPRESS_TRACING_KEY, true);
}
function unsuppressTracing(context) {
    return context.deleteValue(SUPPRESS_TRACING_KEY);
}
function isTracingSuppressed(context) {
    return context.getValue(SUPPRESS_TRACING_KEY) === true;
}
//# sourceMappingURL=suppress-tracing.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/utils/callback.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BindOnceFuture: () => (/* binding */ BindOnceFuture)
/* harmony export */ });
/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/utils/promise.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Bind the callback and only invoke the callback once regardless how many times `BindOnceFuture.call` is invoked.
 */
class BindOnceFuture {
    _callback;
    _that;
    _isCalled = false;
    _deferred = new _promise__WEBPACK_IMPORTED_MODULE_0__.Deferred();
    constructor(_callback, _that) {
        this._callback = _callback;
        this._that = _that;
    }
    get isCalled() {
        return this._isCalled;
    }
    get promise() {
        return this._deferred.promise;
    }
    call(...args) {
        if (!this._isCalled) {
            this._isCalled = true;
            try {
                Promise.resolve(this._callback.call(this._that, ...args)).then(val => this._deferred.resolve(val), err => this._deferred.reject(err));
            }
            catch (err) {
                this._deferred.reject(err);
            }
        }
        return this._deferred.promise;
    }
}
//# sourceMappingURL=callback.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/utils/configuration.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   diagLogLevelFromString: () => (/* binding */ diagLogLevelFromString)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/diag/types.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/diag-api.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const logLevelMap = {
    ALL: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.ALL,
    VERBOSE: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.VERBOSE,
    DEBUG: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.DEBUG,
    INFO: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.INFO,
    WARN: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.WARN,
    ERROR: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.ERROR,
    NONE: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.NONE,
};
/**
 * Convert a string to a {@link DiagLogLevel}, defaults to {@link DiagLogLevel} if the log level does not exist or undefined if the input is undefined.
 * @param value
 */
function diagLogLevelFromString(value) {
    if (value == null) {
        // don't fall back to default - no value set has different semantics for ús than an incorrect value (do not set vs. fall back to default)
        return undefined;
    }
    const resolvedLogLevel = logLevelMap[value.toUpperCase()];
    if (resolvedLogLevel == null) {
        _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.diag.warn(`Unknown log level "${value}", expected one of ${Object.keys(logLevelMap)}, using default`);
        return _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.INFO;
    }
    return resolvedLogLevel;
}
//# sourceMappingURL=configuration.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/utils/lodash.merge.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * based on lodash in order to support esm builds without esModuleInterop.
 * lodash is using MIT License.
 **/
const objectTag = '[object Object]';
const nullTag = '[object Null]';
const undefinedTag = '[object Undefined]';
const funcProto = Function.prototype;
const funcToString = funcProto.toString;
const objectCtorString = funcToString.call(Object);
const getPrototypeOf = Object.getPrototypeOf;
const objectProto = Object.prototype;
const hasOwnProperty = objectProto.hasOwnProperty;
const symToStringTag = Symbol ? Symbol.toStringTag : undefined;
const nativeObjectToString = objectProto.toString;
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) !== objectTag) {
        return false;
    }
    const proto = getPrototypeOf(value);
    if (proto === null) {
        return true;
    }
    const Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return (typeof Ctor == 'function' &&
        Ctor instanceof Ctor &&
        funcToString.call(Ctor) === objectCtorString);
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value)
        ? getRawTag(value)
        : objectToString(value);
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
    const isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    let unmasked = false;
    try {
        value[symToStringTag] = undefined;
        unmasked = true;
    }
    catch (e) {
        // silence
    }
    const result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag] = tag;
        }
        else {
            delete value[symToStringTag];
        }
    }
    return result;
}
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
    return nativeObjectToString.call(value);
}
//# sourceMappingURL=lodash.merge.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/utils/merge.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   merge: () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/utils/lodash.merge.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */

const MAX_LEVEL = 20;
/**
 * Merges objects together
 * @param args - objects / values to be merged
 */
function merge(...args) {
    let result = args.shift();
    const objects = new WeakMap();
    while (args.length > 0) {
        result = mergeTwoObjects(result, args.shift(), 0, objects);
    }
    return result;
}
function takeValue(value) {
    if (isArray(value)) {
        return value.slice();
    }
    return value;
}
/**
 * Merges two objects
 * @param one - first object
 * @param two - second object
 * @param level - current deep level
 * @param objects - objects holder that has been already referenced - to prevent
 * cyclic dependency
 */
function mergeTwoObjects(one, two, level = 0, objects) {
    let result;
    if (level > MAX_LEVEL) {
        return undefined;
    }
    level++;
    if (isPrimitive(one) || isPrimitive(two) || isFunction(two)) {
        result = takeValue(two);
    }
    else if (isArray(one)) {
        result = one.slice();
        if (isArray(two)) {
            for (let i = 0, j = two.length; i < j; i++) {
                result.push(takeValue(two[i]));
            }
        }
        else if (isObject(two)) {
            const keys = Object.keys(two);
            for (let i = 0, j = keys.length; i < j; i++) {
                const key = keys[i];
                result[key] = takeValue(two[key]);
            }
        }
    }
    else if (isObject(one)) {
        if (isObject(two)) {
            if (!shouldMerge(one, two)) {
                return two;
            }
            result = Object.assign({}, one);
            const keys = Object.keys(two);
            for (let i = 0, j = keys.length; i < j; i++) {
                const key = keys[i];
                const twoValue = two[key];
                if (isPrimitive(twoValue)) {
                    if (typeof twoValue === 'undefined') {
                        delete result[key];
                    }
                    else {
                        // result[key] = takeValue(twoValue);
                        result[key] = twoValue;
                    }
                }
                else {
                    const obj1 = result[key];
                    const obj2 = twoValue;
                    if (wasObjectReferenced(one, key, objects) ||
                        wasObjectReferenced(two, key, objects)) {
                        delete result[key];
                    }
                    else {
                        if (isObject(obj1) && isObject(obj2)) {
                            const arr1 = objects.get(obj1) || [];
                            const arr2 = objects.get(obj2) || [];
                            arr1.push({ obj: one, key });
                            arr2.push({ obj: two, key });
                            objects.set(obj1, arr1);
                            objects.set(obj2, arr2);
                        }
                        result[key] = mergeTwoObjects(result[key], twoValue, level, objects);
                    }
                }
            }
        }
        else {
            result = two;
        }
    }
    return result;
}
/**
 * Function to check if object has been already reference
 * @param obj
 * @param key
 * @param objects
 */
function wasObjectReferenced(obj, key, objects) {
    const arr = objects.get(obj[key]) || [];
    for (let i = 0, j = arr.length; i < j; i++) {
        const info = arr[i];
        if (info.key === key && info.obj === obj) {
            return true;
        }
    }
    return false;
}
function isArray(value) {
    return Array.isArray(value);
}
function isFunction(value) {
    return typeof value === 'function';
}
function isObject(value) {
    return (!isPrimitive(value) &&
        !isArray(value) &&
        !isFunction(value) &&
        typeof value === 'object');
}
function isPrimitive(value) {
    return (typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean' ||
        typeof value === 'undefined' ||
        value instanceof Date ||
        value instanceof RegExp ||
        value === null);
}
function shouldMerge(one, two) {
    if (!(0,_lodash_merge__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(one) || !(0,_lodash_merge__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(two)) {
        return false;
    }
    return true;
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/utils/promise.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deferred: () => (/* binding */ Deferred)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Deferred {
    _promise;
    _resolve;
    _reject;
    constructor() {
        this._promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
    }
    get promise() {
        return this._promise;
    }
    resolve(val) {
        this._resolve(val);
    }
    reject(err) {
        this._reject(err);
    }
}
//# sourceMappingURL=promise.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/utils/timeout.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeoutError: () => (/* binding */ TimeoutError),
/* harmony export */   callWithTimeout: () => (/* binding */ callWithTimeout)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Error that is thrown on timeouts.
 */
class TimeoutError extends Error {
    constructor(message) {
        super(message);
        // manually adjust prototype to retain `instanceof` functionality when targeting ES5, see:
        // https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, TimeoutError.prototype);
    }
}
/**
 * Adds a timeout to a promise and rejects if the specified timeout has elapsed. Also rejects if the specified promise
 * rejects, and resolves if the specified promise resolves.
 *
 * <p> NOTE: this operation will continue even after it throws a {@link TimeoutError}.
 *
 * @param promise promise to use with timeout.
 * @param timeout the timeout in milliseconds until the returned promise is rejected.
 */
function callWithTimeout(promise, timeout) {
    let timeoutHandle;
    const timeoutPromise = new Promise(function timeoutFunction(_resolve, reject) {
        timeoutHandle = setTimeout(function timeoutHandler() {
            reject(new TimeoutError('Operation timed out.'));
        }, timeout);
    });
    return Promise.race([promise, timeoutPromise]).then(result => {
        clearTimeout(timeoutHandle);
        return result;
    }, reason => {
        clearTimeout(timeoutHandle);
        throw reason;
    });
}
//# sourceMappingURL=timeout.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/utils/url.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isUrlIgnored: () => (/* binding */ isUrlIgnored),
/* harmony export */   urlMatches: () => (/* binding */ urlMatches)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function urlMatches(url, urlToMatch) {
    if (typeof urlToMatch === 'string') {
        return url === urlToMatch;
    }
    else {
        return !!url.match(urlToMatch);
    }
}
/**
 * Check if {@param url} should be ignored when comparing against {@param ignoredUrls}
 * @param url
 * @param ignoredUrls
 */
function isUrlIgnored(url, ignoredUrls) {
    if (!ignoredUrls) {
        return false;
    }
    for (const ignoreUrl of ignoredUrls) {
        if (urlMatches(url, ignoreUrl)) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=url.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/core/build/esm/version.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// this is autogenerated file, see scripts/version-update.js
const VERSION = '2.0.1';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/instrumentation-fetch/build/esm/enums/AttributeNames.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttributeNames: () => (/* binding */ AttributeNames)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/trace/semantic_conventions/http.md
 */
var AttributeNames;
(function (AttributeNames) {
    AttributeNames["COMPONENT"] = "component";
    AttributeNames["HTTP_STATUS_TEXT"] = "http.status_text";
})(AttributeNames || (AttributeNames = {}));
//# sourceMappingURL=AttributeNames.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/instrumentation-fetch/build/esm/fetch.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FetchInstrumentation: () => (/* binding */ FetchInstrumentation)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/span_kind.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/status.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/context-api.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/propagation-api.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace-api.js");
/* harmony import */ var _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@opentelemetry/instrumentation/build/esm/platform/browser/instrumentation.js");
/* harmony import */ var _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@opentelemetry/instrumentation/build/esm/utils.js");
/* harmony import */ var _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@opentelemetry/instrumentation/build/esm/semconvStability.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/common/time.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/utils/url.js");
/* harmony import */ var _opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-web/build/esm/enums/PerformanceTimingNames.js");
/* harmony import */ var _opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-web/build/esm/utils.js");
/* harmony import */ var _enums_AttributeNames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@opentelemetry/instrumentation-fetch/build/esm/enums/AttributeNames.js");
/* harmony import */ var _src_semconv__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/@opentelemetry/instrumentation-fetch/build/src/semconv.js");
/* harmony import */ var _opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/@opentelemetry/semantic-conventions/build/esm/stable_attributes.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/@opentelemetry/instrumentation-fetch/build/esm/utils.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/@opentelemetry/instrumentation-fetch/build/esm/version.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/platform/browser/globalThis.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */










// how long to wait for observer to collect information about resources
// this is needed as event "load" is called before observer
// hard to say how long it should really wait, seems like 300ms is
// safe enough
const OBSERVER_WAIT_TIME_MS = 300;
const isNode = typeof process === 'object' && process.release?.name === 'node';
/**
 * This class represents a fetch plugin for auto instrumentation
 */
class FetchInstrumentation extends _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_5__.InstrumentationBase {
    component = 'fetch';
    version = _version__WEBPACK_IMPORTED_MODULE_16__.VERSION;
    moduleName = this.component;
    _usedResources = new WeakSet();
    _tasksCount = 0;
    _semconvStability;
    constructor(config = {}) {
        super('@opentelemetry/instrumentation-fetch', _version__WEBPACK_IMPORTED_MODULE_16__.VERSION, config);
        this._semconvStability = (0,_opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_7__.semconvStabilityFromStr)('http', config?.semconvStabilityOptIn);
    }
    init() { }
    /**
     * Add cors pre flight child span
     * @param span
     * @param corsPreFlightRequest
     */
    _addChildSpan(span, corsPreFlightRequest) {
        const childSpan = this.tracer.startSpan('CORS Preflight', {
            startTime: corsPreFlightRequest[_opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_10__.PerformanceTimingNames.FETCH_START],
        }, _opentelemetry_api__WEBPACK_IMPORTED_MODULE_4__.trace.setSpan(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.context.active(), span));
        const skipOldSemconvContentLengthAttrs = !(this._semconvStability & _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_7__.SemconvStability.OLD);
        _opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_11__.addSpanNetworkEvents(childSpan, corsPreFlightRequest, this.getConfig().ignoreNetworkEvents, undefined, skipOldSemconvContentLengthAttrs);
        childSpan.end(corsPreFlightRequest[_opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_10__.PerformanceTimingNames.RESPONSE_END]);
    }
    /**
     * Adds more attributes to span just before ending it
     * @param span
     * @param response
     */
    _addFinalSpanAttributes(span, response) {
        const parsedUrl = _opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_11__.parseUrl(response.url);
        if (this._semconvStability & _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_7__.SemconvStability.OLD) {
            span.setAttribute(_src_semconv__WEBPACK_IMPORTED_MODULE_13__.ATTR_HTTP_STATUS_CODE, response.status);
            if (response.statusText != null) {
                span.setAttribute(_enums_AttributeNames__WEBPACK_IMPORTED_MODULE_12__.AttributeNames.HTTP_STATUS_TEXT, response.statusText);
            }
            span.setAttribute(_src_semconv__WEBPACK_IMPORTED_MODULE_13__.ATTR_HTTP_HOST, parsedUrl.host);
            span.setAttribute(_src_semconv__WEBPACK_IMPORTED_MODULE_13__.ATTR_HTTP_SCHEME, parsedUrl.protocol.replace(':', ''));
            if (typeof navigator !== 'undefined') {
                span.setAttribute(_src_semconv__WEBPACK_IMPORTED_MODULE_13__.ATTR_HTTP_USER_AGENT, navigator.userAgent);
            }
        }
        if (this._semconvStability & _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_7__.SemconvStability.STABLE) {
            span.setAttribute(_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_14__.ATTR_HTTP_RESPONSE_STATUS_CODE, response.status);
            // TODO: Set server.{address,port} at span creation for sampling decisions
            // (a "SHOULD" requirement in semconv).
            span.setAttribute(_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_14__.ATTR_SERVER_ADDRESS, parsedUrl.hostname);
            const serverPort = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.serverPortFromUrl)(parsedUrl);
            if (serverPort) {
                span.setAttribute(_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_14__.ATTR_SERVER_PORT, serverPort);
            }
        }
    }
    /**
     * Add headers
     * @param options
     * @param spanUrl
     */
    _addHeaders(options, spanUrl) {
        if (!_opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_11__.shouldPropagateTraceHeaders(spanUrl, this.getConfig().propagateTraceHeaderCorsUrls)) {
            const headers = {};
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_3__.propagation.inject(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.context.active(), headers);
            if (Object.keys(headers).length > 0) {
                this._diag.debug('headers inject skipped due to CORS policy');
            }
            return;
        }
        if (options instanceof Request) {
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_3__.propagation.inject(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.context.active(), options.headers, {
                set: (h, k, v) => h.set(k, typeof v === 'string' ? v : String(v)),
            });
        }
        else if (options.headers instanceof Headers) {
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_3__.propagation.inject(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.context.active(), options.headers, {
                set: (h, k, v) => h.set(k, typeof v === 'string' ? v : String(v)),
            });
        }
        else if (options.headers instanceof Map) {
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_3__.propagation.inject(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.context.active(), options.headers, {
                set: (h, k, v) => h.set(k, typeof v === 'string' ? v : String(v)),
            });
        }
        else {
            const headers = {};
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_3__.propagation.inject(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.context.active(), headers);
            options.headers = Object.assign({}, headers, options.headers || {});
        }
    }
    /**
     * Clears the resource timings and all resources assigned with spans
     *     when {@link FetchPluginConfig.clearTimingResources} is
     *     set to true (default false)
     * @private
     */
    _clearResources() {
        if (this._tasksCount === 0 && this.getConfig().clearTimingResources) {
            performance.clearResourceTimings();
            this._usedResources = new WeakSet();
        }
    }
    /**
     * Creates a new span
     * @param url
     * @param options
     */
    _createSpan(url, options = {}) {
        if (_opentelemetry_core__WEBPACK_IMPORTED_MODULE_9__.isUrlIgnored(url, this.getConfig().ignoreUrls)) {
            this._diag.debug('ignoring span as url matches ignored url');
            return;
        }
        let name = '';
        const attributes = {};
        if (this._semconvStability & _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_7__.SemconvStability.OLD) {
            const method = (options.method || 'GET').toUpperCase();
            name = `HTTP ${method}`;
            attributes[_enums_AttributeNames__WEBPACK_IMPORTED_MODULE_12__.AttributeNames.COMPONENT] = this.moduleName;
            attributes[_src_semconv__WEBPACK_IMPORTED_MODULE_13__.ATTR_HTTP_METHOD] = method;
            attributes[_src_semconv__WEBPACK_IMPORTED_MODULE_13__.ATTR_HTTP_URL] = url;
        }
        if (this._semconvStability & _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_7__.SemconvStability.STABLE) {
            const origMethod = options.method;
            const normMethod = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.normalizeHttpRequestMethod)(options.method || 'GET');
            if (!name) {
                // The "old" span name wins if emitting both old and stable semconv
                // ('http/dup').
                name = normMethod;
            }
            attributes[_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_14__.ATTR_HTTP_REQUEST_METHOD] = normMethod;
            if (normMethod !== origMethod) {
                attributes[_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_14__.ATTR_HTTP_REQUEST_METHOD_ORIGINAL] = origMethod;
            }
            attributes[_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_14__.ATTR_URL_FULL] = url;
        }
        return this.tracer.startSpan(name, {
            kind: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.SpanKind.CLIENT,
            attributes,
        });
    }
    /**
     * Finds appropriate resource and add network events to the span
     * @param span
     * @param resourcesObserver
     * @param endTime
     */
    _findResourceAndAddNetworkEvents(span, resourcesObserver, endTime) {
        let resources = resourcesObserver.entries;
        if (!resources.length) {
            if (!performance.getEntriesByType) {
                return;
            }
            // fallback - either Observer is not available or it took longer
            // then OBSERVER_WAIT_TIME_MS and observer didn't collect enough
            // information
            resources = performance.getEntriesByType('resource');
        }
        const resource = _opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_11__.getResource(resourcesObserver.spanUrl, resourcesObserver.startTime, endTime, resources, this._usedResources, 'fetch');
        if (resource.mainRequest) {
            const mainRequest = resource.mainRequest;
            this._markResourceAsUsed(mainRequest);
            const corsPreFlightRequest = resource.corsPreFlightRequest;
            if (corsPreFlightRequest) {
                this._addChildSpan(span, corsPreFlightRequest);
                this._markResourceAsUsed(corsPreFlightRequest);
            }
            const skipOldSemconvContentLengthAttrs = !(this._semconvStability & _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_7__.SemconvStability.OLD);
            _opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_11__.addSpanNetworkEvents(span, mainRequest, this.getConfig().ignoreNetworkEvents, undefined, skipOldSemconvContentLengthAttrs);
        }
    }
    /**
     * Marks certain [resource]{@link PerformanceResourceTiming} when information
     * from this is used to add events to span.
     * This is done to avoid reusing the same resource again for next span
     * @param resource
     */
    _markResourceAsUsed(resource) {
        this._usedResources.add(resource);
    }
    /**
     * Finish span, add attributes, network events etc.
     * @param span
     * @param spanData
     * @param response
     */
    _endSpan(span, spanData, response) {
        const endTime = _opentelemetry_core__WEBPACK_IMPORTED_MODULE_8__.millisToHrTime(Date.now());
        const performanceEndTime = _opentelemetry_core__WEBPACK_IMPORTED_MODULE_8__.hrTime();
        this._addFinalSpanAttributes(span, response);
        if (this._semconvStability & _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_7__.SemconvStability.STABLE) {
            // https://github.com/open-telemetry/semantic-conventions/blob/main/docs/http/http-spans.md#status
            if (response.status >= 400) {
                span.setStatus({ code: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.SpanStatusCode.ERROR });
                span.setAttribute(_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_14__.ATTR_ERROR_TYPE, String(response.status));
            }
        }
        setTimeout(() => {
            spanData.observer?.disconnect();
            this._findResourceAndAddNetworkEvents(span, spanData, performanceEndTime);
            this._tasksCount--;
            this._clearResources();
            span.end(endTime);
        }, OBSERVER_WAIT_TIME_MS);
    }
    /**
     * Patches the constructor of fetch
     */
    _patchConstructor() {
        return original => {
            const plugin = this;
            return function patchConstructor(...args) {
                const self = this;
                const url = _opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_11__.parseUrl(args[0] instanceof Request ? args[0].url : String(args[0])).href;
                const options = args[0] instanceof Request ? args[0] : args[1] || {};
                const createdSpan = plugin._createSpan(url, options);
                if (!createdSpan) {
                    return original.apply(this, args);
                }
                const spanData = plugin._prepareSpanData(url);
                if (plugin.getConfig().measureRequestSize) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getFetchBodyLength)(...args)
                        .then(bodyLength => {
                        if (!bodyLength)
                            return;
                        if (plugin._semconvStability & _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_7__.SemconvStability.OLD) {
                            createdSpan.setAttribute(_src_semconv__WEBPACK_IMPORTED_MODULE_13__.ATTR_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED, bodyLength);
                        }
                        if (plugin._semconvStability & _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_7__.SemconvStability.STABLE) {
                            createdSpan.setAttribute(_src_semconv__WEBPACK_IMPORTED_MODULE_13__.ATTR_HTTP_REQUEST_BODY_SIZE, bodyLength);
                        }
                    })
                        .catch(error => {
                        plugin._diag.warn('getFetchBodyLength', error);
                    });
                }
                function endSpanOnError(span, error) {
                    plugin._applyAttributesAfterFetch(span, options, error);
                    plugin._endSpan(span, spanData, {
                        status: error.status || 0,
                        statusText: error.message,
                        url,
                    });
                }
                function endSpanOnSuccess(span, response) {
                    plugin._applyAttributesAfterFetch(span, options, response);
                    if (response.status >= 200 && response.status < 400) {
                        plugin._endSpan(span, spanData, response);
                    }
                    else {
                        plugin._endSpan(span, spanData, {
                            status: response.status,
                            statusText: response.statusText,
                            url,
                        });
                    }
                }
                function onSuccess(span, resolve, response) {
                    try {
                        const resClone = response.clone();
                        const body = resClone.body;
                        if (body) {
                            const reader = body.getReader();
                            const read = () => {
                                reader.read().then(({ done }) => {
                                    if (done) {
                                        endSpanOnSuccess(span, response);
                                    }
                                    else {
                                        read();
                                    }
                                }, error => {
                                    endSpanOnError(span, error);
                                });
                            };
                            read();
                        }
                        else {
                            // some older browsers don't have .body implemented
                            endSpanOnSuccess(span, response);
                        }
                    }
                    finally {
                        resolve(response);
                    }
                }
                function onError(span, reject, error) {
                    try {
                        endSpanOnError(span, error);
                    }
                    finally {
                        reject(error);
                    }
                }
                return new Promise((resolve, reject) => {
                    return _opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.context.with(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_4__.trace.setSpan(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.context.active(), createdSpan), () => {
                        plugin._addHeaders(options, url);
                        // Important to execute "_callRequestHook" after "_addHeaders", allowing the consumer code to override the request headers.
                        plugin._callRequestHook(createdSpan, options);
                        plugin._tasksCount++;
                        // TypeScript complains about arrow function captured a this typed as globalThis
                        // ts(7041)
                        return original
                            .apply(self, options instanceof Request ? [options] : [url, options])
                            .then(onSuccess.bind(self, createdSpan, resolve), onError.bind(self, createdSpan, reject));
                    });
                });
            };
        };
    }
    _applyAttributesAfterFetch(span, request, result) {
        const applyCustomAttributesOnSpan = this.getConfig().applyCustomAttributesOnSpan;
        if (applyCustomAttributesOnSpan) {
            (0,_opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_6__.safeExecuteInTheMiddle)(() => applyCustomAttributesOnSpan(span, request, result), error => {
                if (!error) {
                    return;
                }
                this._diag.error('applyCustomAttributesOnSpan', error);
            }, true);
        }
    }
    _callRequestHook(span, request) {
        const requestHook = this.getConfig().requestHook;
        if (requestHook) {
            (0,_opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_6__.safeExecuteInTheMiddle)(() => requestHook(span, request), error => {
                if (!error) {
                    return;
                }
                this._diag.error('requestHook', error);
            }, true);
        }
    }
    /**
     * Prepares a span data - needed later for matching appropriate network
     *     resources
     * @param spanUrl
     */
    _prepareSpanData(spanUrl) {
        const startTime = _opentelemetry_core__WEBPACK_IMPORTED_MODULE_8__.hrTime();
        const entries = [];
        if (typeof PerformanceObserver !== 'function') {
            return { entries, startTime, spanUrl };
        }
        const observer = new PerformanceObserver(list => {
            const perfObsEntries = list.getEntries();
            perfObsEntries.forEach(entry => {
                if (entry.initiatorType === 'fetch' && entry.name === spanUrl) {
                    entries.push(entry);
                }
            });
        });
        observer.observe({
            entryTypes: ['resource'],
        });
        return { entries, observer, startTime, spanUrl };
    }
    /**
     * implements enable function
     */
    enable() {
        if (isNode) {
            // Node.js v18+ *does* have a global `fetch()`, but this package does not
            // support instrumenting it.
            this._diag.warn("this instrumentation is intended for web usage only, it does not instrument Node.js's fetch()");
            return;
        }
        if ((0,_opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_6__.isWrapped)(fetch)) {
            this._unwrap(_opentelemetry_core__WEBPACK_IMPORTED_MODULE_17__._globalThis, 'fetch');
            this._diag.debug('removing previous patch for constructor');
        }
        this._wrap(_opentelemetry_core__WEBPACK_IMPORTED_MODULE_17__._globalThis, 'fetch', this._patchConstructor());
    }
    /**
     * implements unpatch function
     */
    disable() {
        if (isNode) {
            return;
        }
        this._unwrap(_opentelemetry_core__WEBPACK_IMPORTED_MODULE_17__._globalThis, 'fetch');
        this._usedResources = new WeakSet();
    }
}
//# sourceMappingURL=fetch.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/instrumentation-fetch/build/esm/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFetchBodyLength: () => (/* binding */ getFetchBodyLength),
/* harmony export */   getXHRBodyLength: () => (/* binding */ getXHRBodyLength),
/* harmony export */   normalizeHttpRequestMethod: () => (/* binding */ normalizeHttpRequestMethod),
/* harmony export */   serverPortFromUrl: () => (/* binding */ serverPortFromUrl)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/diag-api.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/platform/browser/environment.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Much of the logic here overlaps with the same utils file in opentelemetry-instrumentation-xml-http-request
// These may be unified in the future.


const DIAG_LOGGER = _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.diag.createComponentLogger({
    namespace: '@opentelemetry/opentelemetry-instrumentation-fetch/utils',
});
/**
 * Helper function to determine payload content length for fetch requests
 *
 * The fetch API is kinda messy: there are a couple of ways the body can be passed in.
 *
 * In all cases, the body param can be some variation of ReadableStream,
 * and ReadableStreams can only be read once! We want to avoid consuming the body here,
 * because that would mean that the body never gets sent with the actual fetch request.
 *
 * Either the first arg is a Request object, which can be cloned
 *   so we can clone that object and read the body of the clone
 *   without disturbing the original argument
 *   However, reading the body here can only be done async; the body() method returns a promise
 *   this means this entire function has to return a promise
 *
 * OR the first arg is a url/string
 *   in which case the second arg has type RequestInit
 *   RequestInit is NOT cloneable, but RequestInit.body is writable
 *   so we can chain it into ReadableStream.pipeThrough()
 *
 *   ReadableStream.pipeThrough() lets us process a stream and returns a new stream
 *   So we can measure the body length as it passes through the pie, but need to attach
 *   the new stream to the original request
 *   so that the browser still has access to the body.
 *
 * @param body
 * @returns promise that resolves to the content length of the body
 */
function getFetchBodyLength(...args) {
    if (args[0] instanceof URL || typeof args[0] === 'string') {
        const requestInit = args[1];
        if (!requestInit?.body) {
            return Promise.resolve();
        }
        if (requestInit.body instanceof ReadableStream) {
            const { body, length } = _getBodyNonDestructively(requestInit.body);
            requestInit.body = body;
            return length;
        }
        else {
            return Promise.resolve(getXHRBodyLength(requestInit.body));
        }
    }
    else {
        const info = args[0];
        if (!info?.body) {
            return Promise.resolve();
        }
        return info
            .clone()
            .text()
            .then(t => getByteLength(t));
    }
}
function _getBodyNonDestructively(body) {
    // can't read a ReadableStream without destroying it
    // but we CAN pipe it through and return a new ReadableStream
    // some (older) platforms don't expose the pipeThrough method and in that scenario, we're out of luck;
    //   there's no way to read the stream without consuming it.
    if (!body.pipeThrough) {
        DIAG_LOGGER.warn('Platform has ReadableStream but not pipeThrough!');
        return {
            body,
            length: Promise.resolve(undefined),
        };
    }
    let length = 0;
    let resolveLength;
    const lengthPromise = new Promise(resolve => {
        resolveLength = resolve;
    });
    const transform = new TransformStream({
        start() { },
        async transform(chunk, controller) {
            const bytearray = (await chunk);
            length += bytearray.byteLength;
            controller.enqueue(chunk);
        },
        flush() {
            resolveLength(length);
        },
    });
    return {
        body: body.pipeThrough(transform),
        length: lengthPromise,
    };
}
function isDocument(value) {
    return typeof Document !== 'undefined' && value instanceof Document;
}
/**
 * Helper function to determine payload content length for XHR requests
 * @param body
 * @returns content length
 */
function getXHRBodyLength(body) {
    if (isDocument(body)) {
        return new XMLSerializer().serializeToString(document).length;
    }
    // XMLHttpRequestBodyInit expands to the following:
    if (typeof body === 'string') {
        return getByteLength(body);
    }
    if (body instanceof Blob) {
        return body.size;
    }
    if (body instanceof FormData) {
        return getFormDataSize(body);
    }
    if (body instanceof URLSearchParams) {
        return getByteLength(body.toString());
    }
    // ArrayBuffer | ArrayBufferView
    if (body.byteLength !== undefined) {
        return body.byteLength;
    }
    DIAG_LOGGER.warn('unknown body type');
    return undefined;
}
const TEXT_ENCODER = new TextEncoder();
function getByteLength(s) {
    return TEXT_ENCODER.encode(s).byteLength;
}
function getFormDataSize(formData) {
    let size = 0;
    for (const [key, value] of formData.entries()) {
        size += key.length;
        if (value instanceof Blob) {
            size += value.size;
        }
        else {
            size += value.length;
        }
    }
    return size;
}
/**
 * Normalize an HTTP request method string per `http.request.method` spec
 * https://github.com/open-telemetry/semantic-conventions/blob/main/docs/http/http-spans.md#http-client-span
 */
function normalizeHttpRequestMethod(method) {
    const knownMethods = getKnownMethods();
    const methUpper = method.toUpperCase();
    if (methUpper in knownMethods) {
        return methUpper;
    }
    else {
        return '_OTHER';
    }
}
const DEFAULT_KNOWN_METHODS = {
    CONNECT: true,
    DELETE: true,
    GET: true,
    HEAD: true,
    OPTIONS: true,
    PATCH: true,
    POST: true,
    PUT: true,
    TRACE: true,
};
let knownMethods;
function getKnownMethods() {
    if (knownMethods === undefined) {
        const cfgMethods = (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.getStringListFromEnv)('OTEL_INSTRUMENTATION_HTTP_KNOWN_METHODS');
        if (cfgMethods && cfgMethods.length > 0) {
            knownMethods = {};
            cfgMethods.forEach(m => {
                knownMethods[m] = true;
            });
        }
        else {
            knownMethods = DEFAULT_KNOWN_METHODS;
        }
    }
    return knownMethods;
}
const HTTP_PORT_FROM_PROTOCOL = {
    'https:': '443',
    'http:': '80',
};
function serverPortFromUrl(url) {
    const serverPort = Number(url.port || HTTP_PORT_FROM_PROTOCOL[url.protocol]);
    // Guard with `if (serverPort)` because `Number('') === 0`.
    if (serverPort && !isNaN(serverPort)) {
        return serverPort;
    }
    else {
        return undefined;
    }
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/instrumentation-fetch/build/esm/version.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// this is autogenerated file, see scripts/version-update.js
const VERSION = '0.202.0';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/instrumentation-fetch/build/src/semconv.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ATTR_HTTP_USER_AGENT = exports.ATTR_HTTP_URL = exports.ATTR_HTTP_STATUS_CODE = exports.ATTR_HTTP_SCHEME = exports.ATTR_HTTP_RESPONSE_CONTENT_LENGTH = exports.ATTR_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = exports.ATTR_HTTP_REQUEST_BODY_SIZE = exports.ATTR_HTTP_METHOD = exports.ATTR_HTTP_HOST = void 0;
/*
 * This file contains a copy of unstable semantic convention definitions
 * used by this package.
 * @see https://github.com/open-telemetry/opentelemetry-js/tree/main/semantic-conventions#unstable-semconv
 */
/**
 * Deprecated, use one of `server.address`, `client.address` or `http.request.header.host` instead, depending on the usage.
 *
 * @example www.example.org
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by one of `server.address`, `client.address` or `http.request.header.host`, depending on the usage.
 */
exports.ATTR_HTTP_HOST = 'http.host';
/**
 * Deprecated, use `http.request.method` instead.
 *
 * @example GET
 * @example POST
 * @example HEAD
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by `http.request.method`.
 */
exports.ATTR_HTTP_METHOD = 'http.method';
/**
 * The size of the request payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the [Content-Length](https://www.rfc-editor.org/rfc/rfc9110.html#field.content-length) header. For requests using transport encoding, this should be the compressed size.
 *
 * @example 3495
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
exports.ATTR_HTTP_REQUEST_BODY_SIZE = 'http.request.body.size';
/**
 * Deprecated, use `http.request.body.size` instead.
 *
 * @example 5493
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by `http.request.body.size`.
 */
exports.ATTR_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = 'http.request_content_length_uncompressed';
/**
 * Deprecated, use `http.response.header.<key>` instead.
 *
 * @example 3495
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by `http.response.header.<key>`.
 */
exports.ATTR_HTTP_RESPONSE_CONTENT_LENGTH = 'http.response_content_length';
/**
 * Deprecated, use `url.scheme` instead.
 *
 * @example http
 * @example https
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by `url.scheme` instead.
 */
exports.ATTR_HTTP_SCHEME = 'http.scheme';
/**
 * Deprecated, use `http.response.status_code` instead.
 *
 * @example 200
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by `http.response.status_code`.
 */
exports.ATTR_HTTP_STATUS_CODE = 'http.status_code';
/**
 * Deprecated, use `url.full` instead.
 *
 * @example https://www.foo.bar/search?q=OpenTelemetry#SemConv
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by `url.full`.
 */
exports.ATTR_HTTP_URL = 'http.url';
/**
 * Deprecated, use `user_agent.original` instead.
 *
 * @example CERN-LineMode/2.15 libwww/2.17b3
 * @example Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by `user_agent.original`.
 */
exports.ATTR_HTTP_USER_AGENT = 'http.user_agent';
//# sourceMappingURL=semconv.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/instrumentation-xml-http-request/build/esm/enums/AttributeNames.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttributeNames: () => (/* binding */ AttributeNames)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/trace/semantic_conventions/http.md
 */
var AttributeNames;
(function (AttributeNames) {
    AttributeNames["HTTP_STATUS_TEXT"] = "http.status_text";
})(AttributeNames || (AttributeNames = {}));
//# sourceMappingURL=AttributeNames.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/instrumentation-xml-http-request/build/esm/enums/EventNames.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventNames: () => (/* binding */ EventNames)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var EventNames;
(function (EventNames) {
    EventNames["METHOD_OPEN"] = "open";
    EventNames["METHOD_SEND"] = "send";
    EventNames["EVENT_ABORT"] = "abort";
    EventNames["EVENT_ERROR"] = "error";
    EventNames["EVENT_LOAD"] = "loaded";
    EventNames["EVENT_TIMEOUT"] = "timeout";
})(EventNames || (EventNames = {}));
//# sourceMappingURL=EventNames.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/instrumentation-xml-http-request/build/esm/semconv.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ATTR_HTTP_HOST: () => (/* binding */ ATTR_HTTP_HOST),
/* harmony export */   ATTR_HTTP_METHOD: () => (/* binding */ ATTR_HTTP_METHOD),
/* harmony export */   ATTR_HTTP_REQUEST_BODY_SIZE: () => (/* binding */ ATTR_HTTP_REQUEST_BODY_SIZE),
/* harmony export */   ATTR_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED: () => (/* binding */ ATTR_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED),
/* harmony export */   ATTR_HTTP_RESPONSE_CONTENT_LENGTH: () => (/* binding */ ATTR_HTTP_RESPONSE_CONTENT_LENGTH),
/* harmony export */   ATTR_HTTP_SCHEME: () => (/* binding */ ATTR_HTTP_SCHEME),
/* harmony export */   ATTR_HTTP_STATUS_CODE: () => (/* binding */ ATTR_HTTP_STATUS_CODE),
/* harmony export */   ATTR_HTTP_URL: () => (/* binding */ ATTR_HTTP_URL),
/* harmony export */   ATTR_HTTP_USER_AGENT: () => (/* binding */ ATTR_HTTP_USER_AGENT)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*
 * This file contains a copy of unstable semantic convention definitions
 * used by this package.
 * @see https://github.com/open-telemetry/opentelemetry-js/tree/main/semantic-conventions#unstable-semconv
 */
/**
 * Deprecated, use one of `server.address`, `client.address` or `http.request.header.host` instead, depending on the usage.
 *
 * @example www.example.org
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by one of `server.address`, `client.address` or `http.request.header.host`, depending on the usage.
 */
const ATTR_HTTP_HOST = 'http.host';
/**
 * Deprecated, use `http.request.method` instead.
 *
 * @example GET
 * @example POST
 * @example HEAD
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by `http.request.method`.
 */
const ATTR_HTTP_METHOD = 'http.method';
/**
 * The size of the request payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the [Content-Length](https://www.rfc-editor.org/rfc/rfc9110.html#field.content-length) header. For requests using transport encoding, this should be the compressed size.
 *
 * @example 3495
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
const ATTR_HTTP_REQUEST_BODY_SIZE = 'http.request.body.size';
/**
 * Deprecated, use `http.request.body.size` instead.
 *
 * @example 5493
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by `http.request.body.size`.
 */
const ATTR_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = 'http.request_content_length_uncompressed';
/**
 * Deprecated, use `http.response.header.<key>` instead.
 *
 * @example 3495
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by `http.response.header.<key>`.
 */
const ATTR_HTTP_RESPONSE_CONTENT_LENGTH = 'http.response_content_length';
/**
 * Deprecated, use `url.scheme` instead.
 *
 * @example http
 * @example https
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by `url.scheme` instead.
 */
const ATTR_HTTP_SCHEME = 'http.scheme';
/**
 * Deprecated, use `http.response.status_code` instead.
 *
 * @example 200
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by `http.response.status_code`.
 */
const ATTR_HTTP_STATUS_CODE = 'http.status_code';
/**
 * Deprecated, use `url.full` instead.
 *
 * @example https://www.foo.bar/search?q=OpenTelemetry#SemConv
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by `url.full`.
 */
const ATTR_HTTP_URL = 'http.url';
/**
 * Deprecated, use `user_agent.original` instead.
 *
 * @example CERN-LineMode/2.15 libwww/2.17b3
 * @example Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by `user_agent.original`.
 */
const ATTR_HTTP_USER_AGENT = 'http.user_agent';
//# sourceMappingURL=semconv.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/instrumentation-xml-http-request/build/esm/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getXHRBodyLength: () => (/* binding */ getXHRBodyLength),
/* harmony export */   normalizeHttpRequestMethod: () => (/* binding */ normalizeHttpRequestMethod),
/* harmony export */   serverPortFromUrl: () => (/* binding */ serverPortFromUrl)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/diag-api.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/platform/browser/environment.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Much of the logic here overlaps with the same utils file in opentelemetry-instrumentation-fetch
// These may be unified in the future.


const DIAG_LOGGER = _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.diag.createComponentLogger({
    namespace: '@opentelemetry/opentelemetry-instrumentation-xml-http-request/utils',
});
function isDocument(value) {
    return typeof Document !== 'undefined' && value instanceof Document;
}
/**
 * Helper function to determine payload content length for XHR requests
 * @param body
 * @returns content length
 */
function getXHRBodyLength(body) {
    if (isDocument(body)) {
        return new XMLSerializer().serializeToString(document).length;
    }
    // XMLHttpRequestBodyInit expands to the following:
    if (typeof body === 'string') {
        return getByteLength(body);
    }
    if (body instanceof Blob) {
        return body.size;
    }
    if (body instanceof FormData) {
        return getFormDataSize(body);
    }
    if (body instanceof URLSearchParams) {
        return getByteLength(body.toString());
    }
    // ArrayBuffer | ArrayBufferView
    if (body.byteLength !== undefined) {
        return body.byteLength;
    }
    DIAG_LOGGER.warn('unknown body type');
    return undefined;
}
const TEXT_ENCODER = new TextEncoder();
function getByteLength(s) {
    return TEXT_ENCODER.encode(s).byteLength;
}
function getFormDataSize(formData) {
    let size = 0;
    for (const [key, value] of formData.entries()) {
        size += key.length;
        if (value instanceof Blob) {
            size += value.size;
        }
        else {
            size += value.length;
        }
    }
    return size;
}
/**
 * Normalize an HTTP request method string per `http.request.method` spec
 * https://github.com/open-telemetry/semantic-conventions/blob/main/docs/http/http-spans.md#http-client-span
 */
function normalizeHttpRequestMethod(method) {
    const knownMethods = getKnownMethods();
    const methUpper = method.toUpperCase();
    if (methUpper in knownMethods) {
        return methUpper;
    }
    else {
        return '_OTHER';
    }
}
const DEFAULT_KNOWN_METHODS = {
    CONNECT: true,
    DELETE: true,
    GET: true,
    HEAD: true,
    OPTIONS: true,
    PATCH: true,
    POST: true,
    PUT: true,
    TRACE: true,
};
let knownMethods;
function getKnownMethods() {
    if (knownMethods === undefined) {
        const cfgMethods = (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.getStringListFromEnv)('OTEL_INSTRUMENTATION_HTTP_KNOWN_METHODS');
        if (cfgMethods && cfgMethods.length > 0) {
            knownMethods = {};
            cfgMethods.forEach(m => {
                knownMethods[m] = true;
            });
        }
        else {
            knownMethods = DEFAULT_KNOWN_METHODS;
        }
    }
    return knownMethods;
}
const HTTP_PORT_FROM_PROTOCOL = {
    'https:': '443',
    'http:': '80',
};
function serverPortFromUrl(url) {
    const serverPort = Number(url.port || HTTP_PORT_FROM_PROTOCOL[url.protocol]);
    // Guard with `if (serverPort)` because `Number('') === 0`.
    if (serverPort && !isNaN(serverPort)) {
        return serverPort;
    }
    else {
        return undefined;
    }
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/instrumentation-xml-http-request/build/esm/version.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// this is autogenerated file, see scripts/version-update.js
const VERSION = '0.202.0';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/instrumentation-xml-http-request/build/esm/xhr.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XMLHttpRequestInstrumentation: () => (/* binding */ XMLHttpRequestInstrumentation)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/span_kind.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/status.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/context-api.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/propagation-api.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace-api.js");
/* harmony import */ var _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@opentelemetry/instrumentation/build/esm/platform/browser/instrumentation.js");
/* harmony import */ var _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@opentelemetry/instrumentation/build/esm/utils.js");
/* harmony import */ var _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@opentelemetry/instrumentation/build/esm/semconvStability.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/platform/browser/performance.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/common/time.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/utils/url.js");
/* harmony import */ var _opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-web/build/esm/enums/PerformanceTimingNames.js");
/* harmony import */ var _opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-web/build/esm/utils.js");
/* harmony import */ var _opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/@opentelemetry/semantic-conventions/build/esm/stable_attributes.js");
/* harmony import */ var _semconv__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/@opentelemetry/instrumentation-xml-http-request/build/esm/semconv.js");
/* harmony import */ var _enums_EventNames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/@opentelemetry/instrumentation-xml-http-request/build/esm/enums/EventNames.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/@opentelemetry/instrumentation-xml-http-request/build/esm/utils.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/@opentelemetry/instrumentation-xml-http-request/build/esm/version.js");
/* harmony import */ var _enums_AttributeNames__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./node_modules/@opentelemetry/instrumentation-xml-http-request/build/esm/enums/AttributeNames.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */










// how long to wait for observer to collect information about resources
// this is needed as event "load" is called before observer
// hard to say how long it should really wait, seems like 300ms is
// safe enough
const OBSERVER_WAIT_TIME_MS = 300;
/**
 * This class represents a XMLHttpRequest plugin for auto instrumentation
 */
class XMLHttpRequestInstrumentation extends _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_5__.InstrumentationBase {
    component = 'xml-http-request';
    version = _version__WEBPACK_IMPORTED_MODULE_17__.VERSION;
    moduleName = this.component;
    _tasksCount = 0;
    _xhrMem = new WeakMap();
    _usedResources = new WeakSet();
    _semconvStability;
    constructor(config = {}) {
        super('@opentelemetry/instrumentation-xml-http-request', _version__WEBPACK_IMPORTED_MODULE_17__.VERSION, config);
        this._semconvStability = (0,_opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_7__.semconvStabilityFromStr)('http', config?.semconvStabilityOptIn);
    }
    init() { }
    /**
     * Adds custom headers to XMLHttpRequest
     * @param xhr
     * @param spanUrl
     * @private
     */
    _addHeaders(xhr, spanUrl) {
        const url = (0,_opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_12__.parseUrl)(spanUrl).href;
        if (!(0,_opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_12__.shouldPropagateTraceHeaders)(url, this.getConfig().propagateTraceHeaderCorsUrls)) {
            const headers = {};
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_3__.propagation.inject(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.context.active(), headers);
            if (Object.keys(headers).length > 0) {
                this._diag.debug('headers inject skipped due to CORS policy');
            }
            return;
        }
        const headers = {};
        _opentelemetry_api__WEBPACK_IMPORTED_MODULE_3__.propagation.inject(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.context.active(), headers);
        Object.keys(headers).forEach(key => {
            xhr.setRequestHeader(key, String(headers[key]));
        });
    }
    /**
     * Add cors pre flight child span
     * @param span
     * @param corsPreFlightRequest
     * @private
     */
    _addChildSpan(span, corsPreFlightRequest) {
        _opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.context.with(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_4__.trace.setSpan(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.context.active(), span), () => {
            const childSpan = this.tracer.startSpan('CORS Preflight', {
                startTime: corsPreFlightRequest[_opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_11__.PerformanceTimingNames.FETCH_START],
            });
            const skipOldSemconvContentLengthAttrs = !(this._semconvStability & _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_7__.SemconvStability.OLD);
            (0,_opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_12__.addSpanNetworkEvents)(childSpan, corsPreFlightRequest, this.getConfig().ignoreNetworkEvents, undefined, skipOldSemconvContentLengthAttrs);
            childSpan.end(corsPreFlightRequest[_opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_11__.PerformanceTimingNames.RESPONSE_END]);
        });
    }
    /**
     * Add attributes when span is going to end
     * @param span
     * @param xhr
     * @param spanUrl
     * @private
     */
    _addFinalSpanAttributes(span, xhrMem, spanUrl) {
        if (this._semconvStability & _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_7__.SemconvStability.OLD) {
            if (xhrMem.status !== undefined) {
                span.setAttribute(_semconv__WEBPACK_IMPORTED_MODULE_14__.ATTR_HTTP_STATUS_CODE, xhrMem.status);
            }
            if (xhrMem.statusText !== undefined) {
                span.setAttribute(_enums_AttributeNames__WEBPACK_IMPORTED_MODULE_18__.AttributeNames.HTTP_STATUS_TEXT, xhrMem.statusText);
            }
            if (typeof spanUrl === 'string') {
                const parsedUrl = (0,_opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_12__.parseUrl)(spanUrl);
                span.setAttribute(_semconv__WEBPACK_IMPORTED_MODULE_14__.ATTR_HTTP_HOST, parsedUrl.host);
                span.setAttribute(_semconv__WEBPACK_IMPORTED_MODULE_14__.ATTR_HTTP_SCHEME, parsedUrl.protocol.replace(':', ''));
            }
            // @TODO do we want to collect this or it will be collected earlier once only or
            //    maybe when parent span is not available ?
            span.setAttribute(_semconv__WEBPACK_IMPORTED_MODULE_14__.ATTR_HTTP_USER_AGENT, navigator.userAgent);
        }
        if (this._semconvStability & _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_7__.SemconvStability.STABLE) {
            if (xhrMem.status) {
                // Intentionally exclude status=0, because XHR uses 0 for before a
                // response is received and semconv says to only add the attribute if
                // received a response.
                span.setAttribute(_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_13__.ATTR_HTTP_RESPONSE_STATUS_CODE, xhrMem.status);
            }
        }
    }
    _applyAttributesAfterXHR(span, xhr) {
        const applyCustomAttributesOnSpan = this.getConfig().applyCustomAttributesOnSpan;
        if (typeof applyCustomAttributesOnSpan === 'function') {
            (0,_opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_6__.safeExecuteInTheMiddle)(() => applyCustomAttributesOnSpan(span, xhr), error => {
                if (!error) {
                    return;
                }
                this._diag.error('applyCustomAttributesOnSpan', error);
            }, true);
        }
    }
    /**
     * will collect information about all resources created
     * between "send" and "end" with additional waiting for main resource
     * @param xhr
     * @param spanUrl
     * @private
     */
    _addResourceObserver(xhr, spanUrl) {
        const xhrMem = this._xhrMem.get(xhr);
        if (!xhrMem ||
            typeof PerformanceObserver !== 'function' ||
            typeof PerformanceResourceTiming !== 'function') {
            return;
        }
        xhrMem.createdResources = {
            observer: new PerformanceObserver(list => {
                const entries = list.getEntries();
                const parsedUrl = (0,_opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_12__.parseUrl)(spanUrl);
                entries.forEach(entry => {
                    if (entry.initiatorType === 'xmlhttprequest' &&
                        entry.name === parsedUrl.href) {
                        if (xhrMem.createdResources) {
                            xhrMem.createdResources.entries.push(entry);
                        }
                    }
                });
            }),
            entries: [],
        };
        xhrMem.createdResources.observer.observe({
            entryTypes: ['resource'],
        });
    }
    /**
     * Clears the resource timings and all resources assigned with spans
     *     when {@link XMLHttpRequestInstrumentationConfig.clearTimingResources} is
     *     set to true (default false)
     * @private
     */
    _clearResources() {
        if (this._tasksCount === 0 && this.getConfig().clearTimingResources) {
            _opentelemetry_core__WEBPACK_IMPORTED_MODULE_8__.otperformance.clearResourceTimings();
            this._xhrMem = new WeakMap();
            this._usedResources = new WeakSet();
        }
    }
    /**
     * Finds appropriate resource and add network events to the span
     * @param span
     */
    _findResourceAndAddNetworkEvents(xhrMem, span, spanUrl, startTime, endTime) {
        if (!spanUrl || !startTime || !endTime || !xhrMem.createdResources) {
            return;
        }
        let resources = xhrMem.createdResources.entries;
        if (!resources || !resources.length) {
            // fallback - either Observer is not available or it took longer
            // then OBSERVER_WAIT_TIME_MS and observer didn't collect enough
            // information
            // ts thinks this is the perf_hooks module, but it is the browser performance api
            resources = _opentelemetry_core__WEBPACK_IMPORTED_MODULE_8__.otperformance.getEntriesByType('resource');
        }
        const resource = (0,_opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_12__.getResource)((0,_opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_12__.parseUrl)(spanUrl).href, startTime, endTime, resources, this._usedResources);
        if (resource.mainRequest) {
            const mainRequest = resource.mainRequest;
            this._markResourceAsUsed(mainRequest);
            const corsPreFlightRequest = resource.corsPreFlightRequest;
            if (corsPreFlightRequest) {
                this._addChildSpan(span, corsPreFlightRequest);
                this._markResourceAsUsed(corsPreFlightRequest);
            }
            const skipOldSemconvContentLengthAttrs = !(this._semconvStability & _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_7__.SemconvStability.OLD);
            (0,_opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_12__.addSpanNetworkEvents)(span, mainRequest, this.getConfig().ignoreNetworkEvents, undefined, skipOldSemconvContentLengthAttrs);
        }
    }
    /**
     * Removes the previous information about span.
     * This might happened when the same xhr is used again.
     * @param xhr
     * @private
     */
    _cleanPreviousSpanInformation(xhr) {
        const xhrMem = this._xhrMem.get(xhr);
        if (xhrMem) {
            const callbackToRemoveEvents = xhrMem.callbackToRemoveEvents;
            if (callbackToRemoveEvents) {
                callbackToRemoveEvents();
            }
            this._xhrMem.delete(xhr);
        }
    }
    /**
     * Creates a new span when method "open" is called
     * @param xhr
     * @param url
     * @param method
     * @private
     */
    _createSpan(xhr, url, method) {
        if ((0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_10__.isUrlIgnored)(url, this.getConfig().ignoreUrls)) {
            this._diag.debug('ignoring span as url matches ignored url');
            return;
        }
        let name = '';
        const parsedUrl = (0,_opentelemetry_sdk_trace_web__WEBPACK_IMPORTED_MODULE_12__.parseUrl)(url);
        const attributes = {};
        if (this._semconvStability & _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_7__.SemconvStability.OLD) {
            name = method.toUpperCase();
            attributes[_semconv__WEBPACK_IMPORTED_MODULE_14__.ATTR_HTTP_METHOD] = method;
            attributes[_semconv__WEBPACK_IMPORTED_MODULE_14__.ATTR_HTTP_URL] = parsedUrl.toString();
        }
        if (this._semconvStability & _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_7__.SemconvStability.STABLE) {
            const origMethod = method;
            const normMethod = (0,_utils__WEBPACK_IMPORTED_MODULE_16__.normalizeHttpRequestMethod)(method);
            if (!name) {
                // The "old" span name wins if emitting both old and stable semconv
                // ('http/dup').
                name = normMethod;
            }
            attributes[_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_13__.ATTR_HTTP_REQUEST_METHOD] = normMethod;
            if (normMethod !== origMethod) {
                attributes[_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_13__.ATTR_HTTP_REQUEST_METHOD_ORIGINAL] = origMethod;
            }
            attributes[_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_13__.ATTR_URL_FULL] = parsedUrl.toString();
            attributes[_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_13__.ATTR_SERVER_ADDRESS] = parsedUrl.hostname;
            const serverPort = (0,_utils__WEBPACK_IMPORTED_MODULE_16__.serverPortFromUrl)(parsedUrl);
            if (serverPort) {
                attributes[_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_13__.ATTR_SERVER_PORT] = serverPort;
            }
        }
        const currentSpan = this.tracer.startSpan(name, {
            kind: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.SpanKind.CLIENT,
            attributes,
        });
        currentSpan.addEvent(_enums_EventNames__WEBPACK_IMPORTED_MODULE_15__.EventNames.METHOD_OPEN);
        this._cleanPreviousSpanInformation(xhr);
        this._xhrMem.set(xhr, {
            span: currentSpan,
            spanUrl: url,
        });
        return currentSpan;
    }
    /**
     * Marks certain [resource]{@link PerformanceResourceTiming} when information
     * from this is used to add events to span.
     * This is done to avoid reusing the same resource again for next span
     * @param resource
     * @private
     */
    _markResourceAsUsed(resource) {
        this._usedResources.add(resource);
    }
    /**
     * Patches the method open
     * @private
     */
    _patchOpen() {
        return (original) => {
            const plugin = this;
            return function patchOpen(...args) {
                const method = args[0];
                const url = args[1];
                plugin._createSpan(this, url, method);
                return original.apply(this, args);
            };
        };
    }
    /**
     * Patches the method send
     * @private
     */
    _patchSend() {
        const plugin = this;
        function endSpanTimeout(eventName, xhrMem, performanceEndTime, endTime) {
            const callbackToRemoveEvents = xhrMem.callbackToRemoveEvents;
            if (typeof callbackToRemoveEvents === 'function') {
                callbackToRemoveEvents();
            }
            const { span, spanUrl, sendStartTime } = xhrMem;
            if (span) {
                plugin._findResourceAndAddNetworkEvents(xhrMem, span, spanUrl, sendStartTime, performanceEndTime);
                span.addEvent(eventName, endTime);
                plugin._addFinalSpanAttributes(span, xhrMem, spanUrl);
                span.end(endTime);
                plugin._tasksCount--;
            }
            plugin._clearResources();
        }
        function endSpan(eventName, xhr, isError, errorType) {
            const xhrMem = plugin._xhrMem.get(xhr);
            if (!xhrMem) {
                return;
            }
            xhrMem.status = xhr.status;
            xhrMem.statusText = xhr.statusText;
            plugin._xhrMem.delete(xhr);
            if (xhrMem.span) {
                const span = xhrMem.span;
                plugin._applyAttributesAfterXHR(span, xhr);
                if (plugin._semconvStability & _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_7__.SemconvStability.STABLE) {
                    if (isError) {
                        if (errorType) {
                            span.setStatus({
                                code: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.SpanStatusCode.ERROR,
                                message: errorType,
                            });
                            span.setAttribute(_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_13__.ATTR_ERROR_TYPE, errorType);
                        }
                    }
                    else if (xhrMem.status && xhrMem.status >= 400) {
                        span.setStatus({ code: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.SpanStatusCode.ERROR });
                        span.setAttribute(_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_13__.ATTR_ERROR_TYPE, String(xhrMem.status));
                    }
                }
            }
            const performanceEndTime = (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_9__.hrTime)();
            const endTime = Date.now();
            // the timeout is needed as observer doesn't have yet information
            // when event "load" is called. Also the time may differ depends on
            // browser and speed of computer
            setTimeout(() => {
                endSpanTimeout(eventName, xhrMem, performanceEndTime, endTime);
            }, OBSERVER_WAIT_TIME_MS);
        }
        function onError() {
            endSpan(_enums_EventNames__WEBPACK_IMPORTED_MODULE_15__.EventNames.EVENT_ERROR, this, true, 'error');
        }
        function onAbort() {
            endSpan(_enums_EventNames__WEBPACK_IMPORTED_MODULE_15__.EventNames.EVENT_ABORT, this, false);
        }
        function onTimeout() {
            endSpan(_enums_EventNames__WEBPACK_IMPORTED_MODULE_15__.EventNames.EVENT_TIMEOUT, this, true, 'timeout');
        }
        function onLoad() {
            if (this.status < 299) {
                endSpan(_enums_EventNames__WEBPACK_IMPORTED_MODULE_15__.EventNames.EVENT_LOAD, this, false);
            }
            else {
                endSpan(_enums_EventNames__WEBPACK_IMPORTED_MODULE_15__.EventNames.EVENT_ERROR, this, false);
            }
        }
        function unregister(xhr) {
            xhr.removeEventListener('abort', onAbort);
            xhr.removeEventListener('error', onError);
            xhr.removeEventListener('load', onLoad);
            xhr.removeEventListener('timeout', onTimeout);
            const xhrMem = plugin._xhrMem.get(xhr);
            if (xhrMem) {
                xhrMem.callbackToRemoveEvents = undefined;
            }
        }
        return (original) => {
            return function patchSend(...args) {
                const xhrMem = plugin._xhrMem.get(this);
                if (!xhrMem) {
                    return original.apply(this, args);
                }
                const currentSpan = xhrMem.span;
                const spanUrl = xhrMem.spanUrl;
                if (currentSpan && spanUrl) {
                    if (plugin.getConfig().measureRequestSize && args?.[0]) {
                        const body = args[0];
                        const bodyLength = (0,_utils__WEBPACK_IMPORTED_MODULE_16__.getXHRBodyLength)(body);
                        if (bodyLength !== undefined) {
                            if (plugin._semconvStability & _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_7__.SemconvStability.OLD) {
                                currentSpan.setAttribute(_semconv__WEBPACK_IMPORTED_MODULE_14__.ATTR_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED, bodyLength);
                            }
                            if (plugin._semconvStability & _opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_7__.SemconvStability.STABLE) {
                                currentSpan.setAttribute(_semconv__WEBPACK_IMPORTED_MODULE_14__.ATTR_HTTP_REQUEST_BODY_SIZE, bodyLength);
                            }
                        }
                    }
                    _opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.context.with(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_4__.trace.setSpan(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.context.active(), currentSpan), () => {
                        plugin._tasksCount++;
                        xhrMem.sendStartTime = (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_9__.hrTime)();
                        currentSpan.addEvent(_enums_EventNames__WEBPACK_IMPORTED_MODULE_15__.EventNames.METHOD_SEND);
                        this.addEventListener('abort', onAbort);
                        this.addEventListener('error', onError);
                        this.addEventListener('load', onLoad);
                        this.addEventListener('timeout', onTimeout);
                        xhrMem.callbackToRemoveEvents = () => {
                            unregister(this);
                            if (xhrMem.createdResources) {
                                xhrMem.createdResources.observer.disconnect();
                            }
                        };
                        plugin._addHeaders(this, spanUrl);
                        plugin._addResourceObserver(this, spanUrl);
                    });
                }
                return original.apply(this, args);
            };
        };
    }
    /**
     * implements enable function
     */
    enable() {
        this._diag.debug('applying patch to', this.moduleName, this.version);
        if ((0,_opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_6__.isWrapped)(XMLHttpRequest.prototype.open)) {
            this._unwrap(XMLHttpRequest.prototype, 'open');
            this._diag.debug('removing previous patch from method open');
        }
        if ((0,_opentelemetry_instrumentation__WEBPACK_IMPORTED_MODULE_6__.isWrapped)(XMLHttpRequest.prototype.send)) {
            this._unwrap(XMLHttpRequest.prototype, 'send');
            this._diag.debug('removing previous patch from method send');
        }
        this._wrap(XMLHttpRequest.prototype, 'open', this._patchOpen());
        this._wrap(XMLHttpRequest.prototype, 'send', this._patchSend());
    }
    /**
     * implements disable function
     */
    disable() {
        this._diag.debug('removing patch from', this.moduleName, this.version);
        this._unwrap(XMLHttpRequest.prototype, 'open');
        this._unwrap(XMLHttpRequest.prototype, 'send');
        this._tasksCount = 0;
        this._xhrMem = new WeakMap();
        this._usedResources = new WeakSet();
    }
}
//# sourceMappingURL=xhr.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/instrumentation/build/esm/autoLoader.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerInstrumentations: () => (/* binding */ registerInstrumentations)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/metrics-api.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace-api.js");
/* harmony import */ var _opentelemetry_api_logs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/api-logs/build/esm/index.js");
/* harmony import */ var _autoLoaderUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@opentelemetry/instrumentation/build/esm/autoLoaderUtils.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * It will register instrumentations and plugins
 * @param options
 * @return returns function to unload instrumentation and plugins that were
 *   registered
 */
function registerInstrumentations(options) {
    const tracerProvider = options.tracerProvider || _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.trace.getTracerProvider();
    const meterProvider = options.meterProvider || _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.metrics.getMeterProvider();
    const loggerProvider = options.loggerProvider || _opentelemetry_api_logs__WEBPACK_IMPORTED_MODULE_2__.logs.getLoggerProvider();
    const instrumentations = options.instrumentations?.flat() ?? [];
    (0,_autoLoaderUtils__WEBPACK_IMPORTED_MODULE_3__.enableInstrumentations)(instrumentations, tracerProvider, meterProvider, loggerProvider);
    return () => {
        (0,_autoLoaderUtils__WEBPACK_IMPORTED_MODULE_3__.disableInstrumentations)(instrumentations);
    };
}
//# sourceMappingURL=autoLoader.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/instrumentation/build/esm/autoLoaderUtils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableInstrumentations: () => (/* binding */ disableInstrumentations),
/* harmony export */   enableInstrumentations: () => (/* binding */ enableInstrumentations)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Enable instrumentations
 * @param instrumentations
 * @param tracerProvider
 * @param meterProvider
 */
function enableInstrumentations(instrumentations, tracerProvider, meterProvider, loggerProvider) {
    for (let i = 0, j = instrumentations.length; i < j; i++) {
        const instrumentation = instrumentations[i];
        if (tracerProvider) {
            instrumentation.setTracerProvider(tracerProvider);
        }
        if (meterProvider) {
            instrumentation.setMeterProvider(meterProvider);
        }
        if (loggerProvider && instrumentation.setLoggerProvider) {
            instrumentation.setLoggerProvider(loggerProvider);
        }
        // instrumentations have been already enabled during creation
        // so enable only if user prevented that by setting enabled to false
        // this is to prevent double enabling but when calling register all
        // instrumentations should be now enabled
        if (!instrumentation.getConfig().enabled) {
            instrumentation.enable();
        }
    }
}
/**
 * Disable instrumentations
 * @param instrumentations
 */
function disableInstrumentations(instrumentations) {
    instrumentations.forEach(instrumentation => instrumentation.disable());
}
//# sourceMappingURL=autoLoaderUtils.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/instrumentation/build/esm/instrumentation.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstrumentationAbstract: () => (/* binding */ InstrumentationAbstract)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/diag-api.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/metrics-api.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace-api.js");
/* harmony import */ var _opentelemetry_api_logs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@opentelemetry/api-logs/build/esm/index.js");
/* harmony import */ var _shimmer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@opentelemetry/instrumentation/build/esm/shimmer.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * Base abstract internal class for instrumenting node and web plugins
 */
class InstrumentationAbstract {
    instrumentationName;
    instrumentationVersion;
    _config = {};
    _tracer;
    _meter;
    _logger;
    _diag;
    constructor(instrumentationName, instrumentationVersion, config) {
        this.instrumentationName = instrumentationName;
        this.instrumentationVersion = instrumentationVersion;
        this.setConfig(config);
        this._diag = _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.diag.createComponentLogger({
            namespace: instrumentationName,
        });
        this._tracer = _opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.trace.getTracer(instrumentationName, instrumentationVersion);
        this._meter = _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.metrics.getMeter(instrumentationName, instrumentationVersion);
        this._logger = _opentelemetry_api_logs__WEBPACK_IMPORTED_MODULE_3__.logs.getLogger(instrumentationName, instrumentationVersion);
        this._updateMetricInstruments();
    }
    /* Api to wrap instrumented method */
    _wrap = _shimmer__WEBPACK_IMPORTED_MODULE_4__.wrap;
    /* Api to unwrap instrumented methods */
    _unwrap = _shimmer__WEBPACK_IMPORTED_MODULE_4__.unwrap;
    /* Api to mass wrap instrumented method */
    _massWrap = _shimmer__WEBPACK_IMPORTED_MODULE_4__.massWrap;
    /* Api to mass unwrap instrumented methods */
    _massUnwrap = _shimmer__WEBPACK_IMPORTED_MODULE_4__.massUnwrap;
    /* Returns meter */
    get meter() {
        return this._meter;
    }
    /**
     * Sets MeterProvider to this plugin
     * @param meterProvider
     */
    setMeterProvider(meterProvider) {
        this._meter = meterProvider.getMeter(this.instrumentationName, this.instrumentationVersion);
        this._updateMetricInstruments();
    }
    /* Returns logger */
    get logger() {
        return this._logger;
    }
    /**
     * Sets LoggerProvider to this plugin
     * @param loggerProvider
     */
    setLoggerProvider(loggerProvider) {
        this._logger = loggerProvider.getLogger(this.instrumentationName, this.instrumentationVersion);
    }
    /**
     * @experimental
     *
     * Get module definitions defined by {@link init}.
     * This can be used for experimental compile-time instrumentation.
     *
     * @returns an array of {@link InstrumentationModuleDefinition}
     */
    getModuleDefinitions() {
        const initResult = this.init() ?? [];
        if (!Array.isArray(initResult)) {
            return [initResult];
        }
        return initResult;
    }
    /**
     * Sets the new metric instruments with the current Meter.
     */
    _updateMetricInstruments() {
        return;
    }
    /* Returns InstrumentationConfig */
    getConfig() {
        return this._config;
    }
    /**
     * Sets InstrumentationConfig to this plugin
     * @param config
     */
    setConfig(config) {
        // copy config first level properties to ensure they are immutable.
        // nested properties are not copied, thus are mutable from the outside.
        this._config = {
            enabled: true,
            ...config,
        };
    }
    /**
     * Sets TraceProvider to this plugin
     * @param tracerProvider
     */
    setTracerProvider(tracerProvider) {
        this._tracer = tracerProvider.getTracer(this.instrumentationName, this.instrumentationVersion);
    }
    /* Returns tracer */
    get tracer() {
        return this._tracer;
    }
    /**
     * Execute span customization hook, if configured, and log any errors.
     * Any semantics of the trigger and info are defined by the specific instrumentation.
     * @param hookHandler The optional hook handler which the user has configured via instrumentation config
     * @param triggerName The name of the trigger for executing the hook for logging purposes
     * @param span The span to which the hook should be applied
     * @param info The info object to be passed to the hook, with useful data the hook may use
     */
    _runSpanCustomizationHook(hookHandler, triggerName, span, info) {
        if (!hookHandler) {
            return;
        }
        try {
            hookHandler(span, info);
        }
        catch (e) {
            this._diag.error(`Error running span customization hook due to exception in handler`, { triggerName }, e);
        }
    }
}
//# sourceMappingURL=instrumentation.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/instrumentation/build/esm/platform/browser/instrumentation.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstrumentationBase: () => (/* binding */ InstrumentationBase)
/* harmony export */ });
/* harmony import */ var _instrumentation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/instrumentation/build/esm/instrumentation.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Base abstract class for instrumenting web plugins
 */
class InstrumentationBase extends _instrumentation__WEBPACK_IMPORTED_MODULE_0__.InstrumentationAbstract {
    constructor(instrumentationName, instrumentationVersion, config) {
        super(instrumentationName, instrumentationVersion, config);
        if (this._config.enabled) {
            this.enable();
        }
    }
}
//# sourceMappingURL=instrumentation.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/instrumentation/build/esm/semconvStability.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SemconvStability: () => (/* binding */ SemconvStability),
/* harmony export */   semconvStabilityFromStr: () => (/* binding */ semconvStabilityFromStr)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SemconvStability;
(function (SemconvStability) {
    /** Emit only stable semantic conventions. */
    SemconvStability[SemconvStability["STABLE"] = 1] = "STABLE";
    /** Emit only old semantic conventions. */
    SemconvStability[SemconvStability["OLD"] = 2] = "OLD";
    /** Emit both stable and old semantic conventions. */
    SemconvStability[SemconvStability["DUPLICATE"] = 3] = "DUPLICATE";
})(SemconvStability || (SemconvStability = {}));
/**
 * Determine the appropriate semconv stability for the given namespace.
 *
 * This will parse the given string of comma-separated values (often
 * `process.env.OTEL_SEMCONV_STABILITY_OPT_IN`) looking for the `${namespace}`
 * or `${namespace}/dup` tokens. This is a pattern defined by a number of
 * non-normative semconv documents.
 *
 * For example:
 * - namespace 'http': https://opentelemetry.io/docs/specs/semconv/non-normative/http-migration/
 * - namespace 'database': https://opentelemetry.io/docs/specs/semconv/non-normative/database-migration/
 * - namespace 'k8s': https://opentelemetry.io/docs/specs/semconv/non-normative/k8s-migration/
 *
 * Usage:
 *
 *  import {SemconvStability, semconvStabilityFromStr} from '@opentelemetry/instrumentation';
 *
 *  export class FooInstrumentation extends InstrumentationBase<FooInstrumentationConfig> {
 *    private _semconvStability: SemconvStability;
 *    constructor(config: FooInstrumentationConfig = {}) {
 *      super('@opentelemetry/instrumentation-foo', VERSION, config);
 *
 *      // When supporting the OTEL_SEMCONV_STABILITY_OPT_IN envvar
 *      this._semconvStability = semconvStabilityFromStr(
 *        'http',
 *        process.env.OTEL_SEMCONV_STABILITY_OPT_IN
 *      );
 *
 *      // or when supporting a `semconvStabilityOptIn` config option (e.g. for
 *      // the web where there are no envvars).
 *      this._semconvStability = semconvStabilityFromStr(
 *        'http',
 *        config?.semconvStabilityOptIn
 *      );
 *    }
 *  }
 *
 *  // Then, to apply semconv, use the following or similar:
 *  if (this._semconvStability & SemconvStability.OLD) {
 *    // ...
 *  }
 *  if (this._semconvStability & SemconvStability.STABLE) {
 *    // ...
 *  }
 *
 */
function semconvStabilityFromStr(namespace, str) {
    let semconvStability = SemconvStability.OLD;
    // The same parsing of `str` as `getStringListFromEnv` from the core pkg.
    const entries = str
        ?.split(',')
        .map(v => v.trim())
        .filter(s => s !== '');
    for (const entry of entries ?? []) {
        if (entry.toLowerCase() === namespace + '/dup') {
            // DUPLICATE takes highest precedence.
            semconvStability = SemconvStability.DUPLICATE;
            break;
        }
        else if (entry.toLowerCase() === namespace) {
            semconvStability = SemconvStability.STABLE;
        }
    }
    return semconvStability;
}
//# sourceMappingURL=semconvStability.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/instrumentation/build/esm/shimmer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shimmer),
/* harmony export */   massUnwrap: () => (/* binding */ massUnwrap),
/* harmony export */   massWrap: () => (/* binding */ massWrap),
/* harmony export */   unwrap: () => (/* binding */ unwrap),
/* harmony export */   wrap: () => (/* binding */ wrap)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Default to complaining loudly when things don't go according to plan.
// eslint-disable-next-line no-console
let logger = console.error.bind(console);
// Sets a property on an object, preserving its enumerability.
// This function assumes that the property is already writable.
function defineProperty(obj, name, value) {
    const enumerable = !!obj[name] &&
        Object.prototype.propertyIsEnumerable.call(obj, name);
    Object.defineProperty(obj, name, {
        configurable: true,
        enumerable,
        writable: true,
        value,
    });
}
const wrap = (nodule, name, wrapper) => {
    if (!nodule || !nodule[name]) {
        logger('no original function ' + String(name) + ' to wrap');
        return;
    }
    if (!wrapper) {
        logger('no wrapper function');
        logger(new Error().stack);
        return;
    }
    const original = nodule[name];
    if (typeof original !== 'function' || typeof wrapper !== 'function') {
        logger('original object and wrapper must be functions');
        return;
    }
    const wrapped = wrapper(original, name);
    defineProperty(wrapped, '__original', original);
    defineProperty(wrapped, '__unwrap', () => {
        if (nodule[name] === wrapped) {
            defineProperty(nodule, name, original);
        }
    });
    defineProperty(wrapped, '__wrapped', true);
    defineProperty(nodule, name, wrapped);
    return wrapped;
};
const massWrap = (nodules, names, wrapper) => {
    if (!nodules) {
        logger('must provide one or more modules to patch');
        logger(new Error().stack);
        return;
    }
    else if (!Array.isArray(nodules)) {
        nodules = [nodules];
    }
    if (!(names && Array.isArray(names))) {
        logger('must provide one or more functions to wrap on modules');
        return;
    }
    nodules.forEach(nodule => {
        names.forEach(name => {
            wrap(nodule, name, wrapper);
        });
    });
};
const unwrap = (nodule, name) => {
    if (!nodule || !nodule[name]) {
        logger('no function to unwrap.');
        logger(new Error().stack);
        return;
    }
    const wrapped = nodule[name];
    if (!wrapped.__unwrap) {
        logger('no original to unwrap to -- has ' +
            String(name) +
            ' already been unwrapped?');
    }
    else {
        wrapped.__unwrap();
        return;
    }
};
const massUnwrap = (nodules, names) => {
    if (!nodules) {
        logger('must provide one or more modules to patch');
        logger(new Error().stack);
        return;
    }
    else if (!Array.isArray(nodules)) {
        nodules = [nodules];
    }
    if (!(names && Array.isArray(names))) {
        logger('must provide one or more functions to unwrap on modules');
        return;
    }
    nodules.forEach(nodule => {
        names.forEach(name => {
            unwrap(nodule, name);
        });
    });
};
function shimmer(options) {
    if (options && options.logger) {
        if (typeof options.logger !== 'function') {
            logger("new logger isn't a function, not replacing");
        }
        else {
            logger = options.logger;
        }
    }
}
shimmer.wrap = wrap;
shimmer.massWrap = massWrap;
shimmer.unwrap = unwrap;
shimmer.massUnwrap = massUnwrap;
//# sourceMappingURL=shimmer.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/instrumentation/build/esm/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isWrapped: () => (/* binding */ isWrapped),
/* harmony export */   safeExecuteInTheMiddle: () => (/* binding */ safeExecuteInTheMiddle),
/* harmony export */   safeExecuteInTheMiddleAsync: () => (/* binding */ safeExecuteInTheMiddleAsync)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * function to execute patched function and being able to catch errors
 * @param execute - function to be executed
 * @param onFinish - callback to run when execute finishes
 */
function safeExecuteInTheMiddle(execute, onFinish, preventThrowingError) {
    let error;
    let result;
    try {
        result = execute();
    }
    catch (e) {
        error = e;
    }
    finally {
        onFinish(error, result);
        if (error && !preventThrowingError) {
            // eslint-disable-next-line no-unsafe-finally
            throw error;
        }
        // eslint-disable-next-line no-unsafe-finally
        return result;
    }
}
/**
 * Async function to execute patched function and being able to catch errors
 * @param execute - function to be executed
 * @param onFinish - callback to run when execute finishes
 */
async function safeExecuteInTheMiddleAsync(execute, onFinish, preventThrowingError) {
    let error;
    let result;
    try {
        result = await execute();
    }
    catch (e) {
        error = e;
    }
    finally {
        onFinish(error, result);
        if (error && !preventThrowingError) {
            // eslint-disable-next-line no-unsafe-finally
            throw error;
        }
        // eslint-disable-next-line no-unsafe-finally
        return result;
    }
}
/**
 * Checks if certain function has been already wrapped
 * @param func
 */
function isWrapped(func) {
    return (typeof func === 'function' &&
        typeof func.__original === 'function' &&
        typeof func.__unwrap === 'function' &&
        func.__wrapped === true);
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/otlp-transformer/build/src/common/hex-to-binary.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hexToBinary = void 0;
function intValue(charCode) {
    // 0-9
    if (charCode >= 48 && charCode <= 57) {
        return charCode - 48;
    }
    // a-f
    if (charCode >= 97 && charCode <= 102) {
        return charCode - 87;
    }
    // A-F
    return charCode - 55;
}
function hexToBinary(hexStr) {
    const buf = new Uint8Array(hexStr.length / 2);
    let offset = 0;
    for (let i = 0; i < hexStr.length; i += 2) {
        const hi = intValue(hexStr.charCodeAt(i));
        const lo = intValue(hexStr.charCodeAt(i + 1));
        buf[offset++] = (hi << 4) | lo;
    }
    return buf;
}
exports.hexToBinary = hexToBinary;
//# sourceMappingURL=hex-to-binary.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/otlp-transformer/build/src/common/internal.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toAnyValue = exports.toKeyValue = exports.toAttributes = exports.createInstrumentationScope = exports.createResource = void 0;
function createResource(resource) {
    return {
        attributes: toAttributes(resource.attributes),
        droppedAttributesCount: 0,
    };
}
exports.createResource = createResource;
function createInstrumentationScope(scope) {
    return {
        name: scope.name,
        version: scope.version,
    };
}
exports.createInstrumentationScope = createInstrumentationScope;
function toAttributes(attributes) {
    return Object.keys(attributes).map(key => toKeyValue(key, attributes[key]));
}
exports.toAttributes = toAttributes;
function toKeyValue(key, value) {
    return {
        key: key,
        value: toAnyValue(value),
    };
}
exports.toKeyValue = toKeyValue;
function toAnyValue(value) {
    const t = typeof value;
    if (t === 'string')
        return { stringValue: value };
    if (t === 'number') {
        if (!Number.isInteger(value))
            return { doubleValue: value };
        return { intValue: value };
    }
    if (t === 'boolean')
        return { boolValue: value };
    if (value instanceof Uint8Array)
        return { bytesValue: value };
    if (Array.isArray(value))
        return { arrayValue: { values: value.map(toAnyValue) } };
    if (t === 'object' && value != null)
        return {
            kvlistValue: {
                values: Object.entries(value).map(([k, v]) => toKeyValue(k, v)),
            },
        };
    return {};
}
exports.toAnyValue = toAnyValue;
//# sourceMappingURL=internal.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/otlp-transformer/build/src/common/utils.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getOtlpEncoder = exports.encodeAsString = exports.encodeAsLongBits = exports.toLongBits = exports.hrTimeToNanos = void 0;
const core_1 = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/index.js");
const hex_to_binary_1 = __webpack_require__("./node_modules/@opentelemetry/otlp-transformer/build/src/common/hex-to-binary.js");
function hrTimeToNanos(hrTime) {
    const NANOSECONDS = BigInt(1000000000);
    return BigInt(hrTime[0]) * NANOSECONDS + BigInt(hrTime[1]);
}
exports.hrTimeToNanos = hrTimeToNanos;
function toLongBits(value) {
    const low = Number(BigInt.asUintN(32, value));
    const high = Number(BigInt.asUintN(32, value >> BigInt(32)));
    return { low, high };
}
exports.toLongBits = toLongBits;
function encodeAsLongBits(hrTime) {
    const nanos = hrTimeToNanos(hrTime);
    return toLongBits(nanos);
}
exports.encodeAsLongBits = encodeAsLongBits;
function encodeAsString(hrTime) {
    const nanos = hrTimeToNanos(hrTime);
    return nanos.toString();
}
exports.encodeAsString = encodeAsString;
const encodeTimestamp = typeof BigInt !== 'undefined' ? encodeAsString : core_1.hrTimeToNanoseconds;
function identity(value) {
    return value;
}
function optionalHexToBinary(str) {
    if (str === undefined)
        return undefined;
    return (0, hex_to_binary_1.hexToBinary)(str);
}
const DEFAULT_ENCODER = {
    encodeHrTime: encodeAsLongBits,
    encodeSpanContext: hex_to_binary_1.hexToBinary,
    encodeOptionalSpanContext: optionalHexToBinary,
};
function getOtlpEncoder(options) {
    if (options === undefined) {
        return DEFAULT_ENCODER;
    }
    const useLongBits = options.useLongBits ?? true;
    const useHex = options.useHex ?? false;
    return {
        encodeHrTime: useLongBits ? encodeAsLongBits : encodeTimestamp,
        encodeSpanContext: useHex ? identity : hex_to_binary_1.hexToBinary,
        encodeOptionalSpanContext: useHex ? identity : optionalHexToBinary,
    };
}
exports.getOtlpEncoder = getOtlpEncoder;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/otlp-transformer/build/src/trace/internal-types.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EStatusCode = exports.ESpanKind = void 0;
/**
 * SpanKind is the type of span. Can be used to specify additional relationships between spans
 * in addition to a parent/child relationship.
 */
var ESpanKind;
(function (ESpanKind) {
    /** Unspecified. Do NOT use as default. Implementations MAY assume SpanKind to be INTERNAL when receiving UNSPECIFIED. */
    ESpanKind[ESpanKind["SPAN_KIND_UNSPECIFIED"] = 0] = "SPAN_KIND_UNSPECIFIED";
    /** Indicates that the span represents an internal operation within an application,
     * as opposed to an operation happening at the boundaries. Default value.
     */
    ESpanKind[ESpanKind["SPAN_KIND_INTERNAL"] = 1] = "SPAN_KIND_INTERNAL";
    /** Indicates that the span covers server-side handling of an RPC or other
     * remote network request.
     */
    ESpanKind[ESpanKind["SPAN_KIND_SERVER"] = 2] = "SPAN_KIND_SERVER";
    /** Indicates that the span describes a request to some remote service.
     */
    ESpanKind[ESpanKind["SPAN_KIND_CLIENT"] = 3] = "SPAN_KIND_CLIENT";
    /** Indicates that the span describes a producer sending a message to a broker.
     * Unlike CLIENT and SERVER, there is often no direct critical path latency relationship
     * between producer and consumer spans. A PRODUCER span ends when the message was accepted
     * by the broker while the logical processing of the message might span a much longer time.
     */
    ESpanKind[ESpanKind["SPAN_KIND_PRODUCER"] = 4] = "SPAN_KIND_PRODUCER";
    /** Indicates that the span describes consumer receiving a message from a broker.
     * Like the PRODUCER kind, there is often no direct critical path latency relationship
     * between producer and consumer spans.
     */
    ESpanKind[ESpanKind["SPAN_KIND_CONSUMER"] = 5] = "SPAN_KIND_CONSUMER";
})(ESpanKind = exports.ESpanKind || (exports.ESpanKind = {}));
/** StatusCode enum. */
var EStatusCode;
(function (EStatusCode) {
    /** The default status. */
    EStatusCode[EStatusCode["STATUS_CODE_UNSET"] = 0] = "STATUS_CODE_UNSET";
    /** The Span has been evaluated by an Application developers or Operator to have completed successfully. */
    EStatusCode[EStatusCode["STATUS_CODE_OK"] = 1] = "STATUS_CODE_OK";
    /** The Span contains an error. */
    EStatusCode[EStatusCode["STATUS_CODE_ERROR"] = 2] = "STATUS_CODE_ERROR";
})(EStatusCode = exports.EStatusCode || (exports.EStatusCode = {}));
//# sourceMappingURL=internal-types.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/otlp-transformer/build/src/trace/internal.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createExportTraceServiceRequest = exports.toOtlpSpanEvent = exports.toOtlpLink = exports.sdkSpanToOtlpSpan = void 0;
const internal_1 = __webpack_require__("./node_modules/@opentelemetry/otlp-transformer/build/src/common/internal.js");
const utils_1 = __webpack_require__("./node_modules/@opentelemetry/otlp-transformer/build/src/common/utils.js");
function sdkSpanToOtlpSpan(span, encoder) {
    const ctx = span.spanContext();
    const status = span.status;
    const parentSpanId = span.parentSpanContext?.spanId
        ? encoder.encodeSpanContext(span.parentSpanContext?.spanId)
        : undefined;
    return {
        traceId: encoder.encodeSpanContext(ctx.traceId),
        spanId: encoder.encodeSpanContext(ctx.spanId),
        parentSpanId: parentSpanId,
        traceState: ctx.traceState?.serialize(),
        name: span.name,
        // Span kind is offset by 1 because the API does not define a value for unset
        kind: span.kind == null ? 0 : span.kind + 1,
        startTimeUnixNano: encoder.encodeHrTime(span.startTime),
        endTimeUnixNano: encoder.encodeHrTime(span.endTime),
        attributes: (0, internal_1.toAttributes)(span.attributes),
        droppedAttributesCount: span.droppedAttributesCount,
        events: span.events.map(event => toOtlpSpanEvent(event, encoder)),
        droppedEventsCount: span.droppedEventsCount,
        status: {
            // API and proto enums share the same values
            code: status.code,
            message: status.message,
        },
        links: span.links.map(link => toOtlpLink(link, encoder)),
        droppedLinksCount: span.droppedLinksCount,
    };
}
exports.sdkSpanToOtlpSpan = sdkSpanToOtlpSpan;
function toOtlpLink(link, encoder) {
    return {
        attributes: link.attributes ? (0, internal_1.toAttributes)(link.attributes) : [],
        spanId: encoder.encodeSpanContext(link.context.spanId),
        traceId: encoder.encodeSpanContext(link.context.traceId),
        traceState: link.context.traceState?.serialize(),
        droppedAttributesCount: link.droppedAttributesCount || 0,
    };
}
exports.toOtlpLink = toOtlpLink;
function toOtlpSpanEvent(timedEvent, encoder) {
    return {
        attributes: timedEvent.attributes
            ? (0, internal_1.toAttributes)(timedEvent.attributes)
            : [],
        name: timedEvent.name,
        timeUnixNano: encoder.encodeHrTime(timedEvent.time),
        droppedAttributesCount: timedEvent.droppedAttributesCount || 0,
    };
}
exports.toOtlpSpanEvent = toOtlpSpanEvent;
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createExportTraceServiceRequest(spans, options) {
    const encoder = (0, utils_1.getOtlpEncoder)(options);
    return {
        resourceSpans: spanRecordsToResourceSpans(spans, encoder),
    };
}
exports.createExportTraceServiceRequest = createExportTraceServiceRequest;
function createResourceMap(readableSpans) {
    const resourceMap = new Map();
    for (const record of readableSpans) {
        let ilsMap = resourceMap.get(record.resource);
        if (!ilsMap) {
            ilsMap = new Map();
            resourceMap.set(record.resource, ilsMap);
        }
        // TODO this is duplicated in basic tracer. Consolidate on a common helper in core
        const instrumentationScopeKey = `${record.instrumentationScope.name}@${record.instrumentationScope.version || ''}:${record.instrumentationScope.schemaUrl || ''}`;
        let records = ilsMap.get(instrumentationScopeKey);
        if (!records) {
            records = [];
            ilsMap.set(instrumentationScopeKey, records);
        }
        records.push(record);
    }
    return resourceMap;
}
function spanRecordsToResourceSpans(readableSpans, encoder) {
    const resourceMap = createResourceMap(readableSpans);
    const out = [];
    const entryIterator = resourceMap.entries();
    let entry = entryIterator.next();
    while (!entry.done) {
        const [resource, ilmMap] = entry.value;
        const scopeResourceSpans = [];
        const ilmIterator = ilmMap.values();
        let ilmEntry = ilmIterator.next();
        while (!ilmEntry.done) {
            const scopeSpans = ilmEntry.value;
            if (scopeSpans.length > 0) {
                const spans = scopeSpans.map(readableSpan => sdkSpanToOtlpSpan(readableSpan, encoder));
                scopeResourceSpans.push({
                    scope: (0, internal_1.createInstrumentationScope)(scopeSpans[0].instrumentationScope),
                    spans: spans,
                    schemaUrl: scopeSpans[0].instrumentationScope.schemaUrl,
                });
            }
            ilmEntry = ilmIterator.next();
        }
        // TODO SDK types don't provide resource schema URL at this time
        const transformedSpans = {
            resource: (0, internal_1.createResource)(resource),
            scopeSpans: scopeResourceSpans,
            schemaUrl: undefined,
        };
        out.push(transformedSpans);
        entry = entryIterator.next();
    }
    return out;
}
//# sourceMappingURL=internal.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/resources/build/esm/ResourceImpl.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultResource: () => (/* binding */ defaultResource),
/* harmony export */   emptyResource: () => (/* binding */ emptyResource),
/* harmony export */   resourceFromAttributes: () => (/* binding */ resourceFromAttributes),
/* harmony export */   resourceFromDetectedResource: () => (/* binding */ resourceFromDetectedResource)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/diag-api.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/platform/browser/sdk-info.js");
/* harmony import */ var _opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/semantic-conventions/build/esm/stable_attributes.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@opentelemetry/resources/build/esm/platform/browser/default-service-name.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@opentelemetry/resources/build/esm/utils.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





class ResourceImpl {
    _rawAttributes;
    _asyncAttributesPending = false;
    _memoizedAttributes;
    static FromAttributeList(attributes) {
        const res = new ResourceImpl({});
        res._rawAttributes = guardedRawAttributes(attributes);
        res._asyncAttributesPending =
            attributes.filter(([_, val]) => (0,_utils__WEBPACK_IMPORTED_MODULE_4__.isPromiseLike)(val)).length > 0;
        return res;
    }
    constructor(
    /**
     * A dictionary of attributes with string keys and values that provide
     * information about the entity as numbers, strings or booleans
     * TODO: Consider to add check/validation on attributes.
     */
    resource) {
        const attributes = resource.attributes ?? {};
        this._rawAttributes = Object.entries(attributes).map(([k, v]) => {
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.isPromiseLike)(v)) {
                // side-effect
                this._asyncAttributesPending = true;
            }
            return [k, v];
        });
        this._rawAttributes = guardedRawAttributes(this._rawAttributes);
    }
    get asyncAttributesPending() {
        return this._asyncAttributesPending;
    }
    async waitForAsyncAttributes() {
        if (!this.asyncAttributesPending) {
            return;
        }
        for (let i = 0; i < this._rawAttributes.length; i++) {
            const [k, v] = this._rawAttributes[i];
            this._rawAttributes[i] = [k, (0,_utils__WEBPACK_IMPORTED_MODULE_4__.isPromiseLike)(v) ? await v : v];
        }
        this._asyncAttributesPending = false;
    }
    get attributes() {
        if (this.asyncAttributesPending) {
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.diag.error('Accessing resource attributes before async attributes settled');
        }
        if (this._memoizedAttributes) {
            return this._memoizedAttributes;
        }
        const attrs = {};
        for (const [k, v] of this._rawAttributes) {
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.isPromiseLike)(v)) {
                _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.diag.debug(`Unsettled resource attribute ${k} skipped`);
                continue;
            }
            if (v != null) {
                attrs[k] ??= v;
            }
        }
        // only memoize output if all attributes are settled
        if (!this._asyncAttributesPending) {
            this._memoizedAttributes = attrs;
        }
        return attrs;
    }
    getRawAttributes() {
        return this._rawAttributes;
    }
    merge(resource) {
        if (resource == null)
            return this;
        // Order is important
        // Spec states incoming attributes override existing attributes
        return ResourceImpl.FromAttributeList([
            ...resource.getRawAttributes(),
            ...this.getRawAttributes(),
        ]);
    }
}
function resourceFromAttributes(attributes) {
    return ResourceImpl.FromAttributeList(Object.entries(attributes));
}
function resourceFromDetectedResource(detectedResource) {
    return new ResourceImpl(detectedResource);
}
function emptyResource() {
    return resourceFromAttributes({});
}
function defaultResource() {
    return resourceFromAttributes({
        [_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_2__.ATTR_SERVICE_NAME]: (0,_platform__WEBPACK_IMPORTED_MODULE_3__.defaultServiceName)(),
        [_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_2__.ATTR_TELEMETRY_SDK_LANGUAGE]: _opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.SDK_INFO[_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_2__.ATTR_TELEMETRY_SDK_LANGUAGE],
        [_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_2__.ATTR_TELEMETRY_SDK_NAME]: _opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.SDK_INFO[_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_2__.ATTR_TELEMETRY_SDK_NAME],
        [_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_2__.ATTR_TELEMETRY_SDK_VERSION]: _opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.SDK_INFO[_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_2__.ATTR_TELEMETRY_SDK_VERSION],
    });
}
function guardedRawAttributes(attributes) {
    return attributes.map(([k, v]) => {
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.isPromiseLike)(v)) {
            return [
                k,
                v.catch(err => {
                    _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.diag.debug('promise rejection for resource attribute: %s - %s', k, err);
                    return undefined;
                }),
            ];
        }
        return [k, v];
    });
}
//# sourceMappingURL=ResourceImpl.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/resources/build/esm/platform/browser/default-service-name.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultServiceName: () => (/* binding */ defaultServiceName)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function defaultServiceName() {
    return 'unknown_service';
}
//# sourceMappingURL=default-service-name.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/resources/build/esm/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   isPromiseLike: () => (/* binding */ isPromiseLike)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const isPromiseLike = (val) => {
    return (val !== null &&
        typeof val === 'object' &&
        typeof val.then === 'function');
};
function identity(_) {
    return _;
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/sdk-trace-base/build/esm/BasicTracerProvider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BasicTracerProvider: () => (/* binding */ BasicTracerProvider),
/* harmony export */   ForceFlushState: () => (/* binding */ ForceFlushState)
/* harmony export */ });
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/utils/merge.js");
/* harmony import */ var _opentelemetry_resources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/resources/build/esm/ResourceImpl.js");
/* harmony import */ var _Tracer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-base/build/esm/Tracer.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-base/build/esm/config.js");
/* harmony import */ var _MultiSpanProcessor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-base/build/esm/MultiSpanProcessor.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-base/build/esm/utility.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






var ForceFlushState;
(function (ForceFlushState) {
    ForceFlushState[ForceFlushState["resolved"] = 0] = "resolved";
    ForceFlushState[ForceFlushState["timeout"] = 1] = "timeout";
    ForceFlushState[ForceFlushState["error"] = 2] = "error";
    ForceFlushState[ForceFlushState["unresolved"] = 3] = "unresolved";
})(ForceFlushState || (ForceFlushState = {}));
/**
 * This class represents a basic tracer provider which platform libraries can extend
 */
class BasicTracerProvider {
    _config;
    _tracers = new Map();
    _resource;
    _activeSpanProcessor;
    constructor(config = {}) {
        const mergedConfig = (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_0__.merge)({}, (0,_config__WEBPACK_IMPORTED_MODULE_3__.loadDefaultConfig)(), (0,_utility__WEBPACK_IMPORTED_MODULE_5__.reconfigureLimits)(config));
        this._resource = mergedConfig.resource ?? (0,_opentelemetry_resources__WEBPACK_IMPORTED_MODULE_1__.defaultResource)();
        this._config = Object.assign({}, mergedConfig, {
            resource: this._resource,
        });
        const spanProcessors = [];
        if (config.spanProcessors?.length) {
            spanProcessors.push(...config.spanProcessors);
        }
        this._activeSpanProcessor = new _MultiSpanProcessor__WEBPACK_IMPORTED_MODULE_4__.MultiSpanProcessor(spanProcessors);
    }
    getTracer(name, version, options) {
        const key = `${name}@${version || ''}:${options?.schemaUrl || ''}`;
        if (!this._tracers.has(key)) {
            this._tracers.set(key, new _Tracer__WEBPACK_IMPORTED_MODULE_2__.Tracer({ name, version, schemaUrl: options?.schemaUrl }, this._config, this._resource, this._activeSpanProcessor));
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this._tracers.get(key);
    }
    forceFlush() {
        const timeout = this._config.forceFlushTimeoutMillis;
        const promises = this._activeSpanProcessor['_spanProcessors'].map((spanProcessor) => {
            return new Promise(resolve => {
                let state;
                const timeoutInterval = setTimeout(() => {
                    resolve(new Error(`Span processor did not completed within timeout period of ${timeout} ms`));
                    state = ForceFlushState.timeout;
                }, timeout);
                spanProcessor
                    .forceFlush()
                    .then(() => {
                    clearTimeout(timeoutInterval);
                    if (state !== ForceFlushState.timeout) {
                        state = ForceFlushState.resolved;
                        resolve(state);
                    }
                })
                    .catch(error => {
                    clearTimeout(timeoutInterval);
                    state = ForceFlushState.error;
                    resolve(error);
                });
            });
        });
        return new Promise((resolve, reject) => {
            Promise.all(promises)
                .then(results => {
                const errors = results.filter(result => result !== ForceFlushState.resolved);
                if (errors.length > 0) {
                    reject(errors);
                }
                else {
                    resolve();
                }
            })
                .catch(error => reject([error]));
        });
    }
    shutdown() {
        return this._activeSpanProcessor.shutdown();
    }
}
//# sourceMappingURL=BasicTracerProvider.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/sdk-trace-base/build/esm/MultiSpanProcessor.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiSpanProcessor: () => (/* binding */ MultiSpanProcessor)
/* harmony export */ });
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/common/global-error-handler.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Implementation of the {@link SpanProcessor} that simply forwards all
 * received events to a list of {@link SpanProcessor}s.
 */
class MultiSpanProcessor {
    _spanProcessors;
    constructor(_spanProcessors) {
        this._spanProcessors = _spanProcessors;
    }
    forceFlush() {
        const promises = [];
        for (const spanProcessor of this._spanProcessors) {
            promises.push(spanProcessor.forceFlush());
        }
        return new Promise(resolve => {
            Promise.all(promises)
                .then(() => {
                resolve();
            })
                .catch(error => {
                (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_0__.globalErrorHandler)(error || new Error('MultiSpanProcessor: forceFlush failed'));
                resolve();
            });
        });
    }
    onStart(span, context) {
        for (const spanProcessor of this._spanProcessors) {
            spanProcessor.onStart(span, context);
        }
    }
    onEnd(span) {
        for (const spanProcessor of this._spanProcessors) {
            spanProcessor.onEnd(span);
        }
    }
    shutdown() {
        const promises = [];
        for (const spanProcessor of this._spanProcessors) {
            promises.push(spanProcessor.shutdown());
        }
        return new Promise((resolve, reject) => {
            Promise.all(promises).then(() => {
                resolve();
            }, reject);
        });
    }
}
//# sourceMappingURL=MultiSpanProcessor.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/sdk-trace-base/build/esm/Sampler.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SamplingDecision: () => (/* binding */ SamplingDecision)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A sampling decision that determines how a {@link Span} will be recorded
 * and collected.
 */
var SamplingDecision;
(function (SamplingDecision) {
    /**
     * `Span.isRecording() === false`, span will not be recorded and all events
     * and attributes will be dropped.
     */
    SamplingDecision[SamplingDecision["NOT_RECORD"] = 0] = "NOT_RECORD";
    /**
     * `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
     * MUST NOT be set.
     */
    SamplingDecision[SamplingDecision["RECORD"] = 1] = "RECORD";
    /**
     * `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
     * MUST be set.
     */
    SamplingDecision[SamplingDecision["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision || (SamplingDecision = {}));
//# sourceMappingURL=Sampler.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/sdk-trace-base/build/esm/Span.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpanImpl: () => (/* binding */ SpanImpl)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/status.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/diag-api.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/platform/browser/performance.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/common/attributes.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/common/time.js");
/* harmony import */ var _opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@opentelemetry/semantic-conventions/build/esm/stable_attributes.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-base/build/esm/enums.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




/**
 * This class represents a span.
 */
class SpanImpl {
    // Below properties are included to implement ReadableSpan for export
    // purposes but are not intended to be written-to directly.
    _spanContext;
    kind;
    parentSpanContext;
    attributes = {};
    links = [];
    events = [];
    startTime;
    resource;
    instrumentationScope;
    _droppedAttributesCount = 0;
    _droppedEventsCount = 0;
    _droppedLinksCount = 0;
    name;
    status = {
        code: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.SpanStatusCode.UNSET,
    };
    endTime = [0, 0];
    _ended = false;
    _duration = [-1, -1];
    _spanProcessor;
    _spanLimits;
    _attributeValueLengthLimit;
    _performanceStartTime;
    _performanceOffset;
    _startTimeProvided;
    /**
     * Constructs a new SpanImpl instance.
     */
    constructor(opts) {
        const now = Date.now();
        this._spanContext = opts.spanContext;
        this._performanceStartTime = _opentelemetry_core__WEBPACK_IMPORTED_MODULE_2__.otperformance.now();
        this._performanceOffset =
            now - (this._performanceStartTime + (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_4__.getTimeOrigin)());
        this._startTimeProvided = opts.startTime != null;
        this._spanLimits = opts.spanLimits;
        this._attributeValueLengthLimit =
            this._spanLimits.attributeValueLengthLimit || 0;
        this._spanProcessor = opts.spanProcessor;
        this.name = opts.name;
        this.parentSpanContext = opts.parentSpanContext;
        this.kind = opts.kind;
        this.links = opts.links || [];
        this.startTime = this._getTime(opts.startTime ?? now);
        this.resource = opts.resource;
        this.instrumentationScope = opts.scope;
        if (opts.attributes != null) {
            this.setAttributes(opts.attributes);
        }
        this._spanProcessor.onStart(this, opts.context);
    }
    spanContext() {
        return this._spanContext;
    }
    setAttribute(key, value) {
        if (value == null || this._isSpanEnded())
            return this;
        if (key.length === 0) {
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.diag.warn(`Invalid attribute key: ${key}`);
            return this;
        }
        if (!(0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_3__.isAttributeValue)(value)) {
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.diag.warn(`Invalid attribute value set for key: ${key}`);
            return this;
        }
        const { attributeCountLimit } = this._spanLimits;
        if (attributeCountLimit !== undefined &&
            Object.keys(this.attributes).length >= attributeCountLimit &&
            !Object.prototype.hasOwnProperty.call(this.attributes, key)) {
            this._droppedAttributesCount++;
            return this;
        }
        this.attributes[key] = this._truncateToSize(value);
        return this;
    }
    setAttributes(attributes) {
        for (const [k, v] of Object.entries(attributes)) {
            this.setAttribute(k, v);
        }
        return this;
    }
    /**
     *
     * @param name Span Name
     * @param [attributesOrStartTime] Span attributes or start time
     *     if type is {@type TimeInput} and 3rd param is undefined
     * @param [timeStamp] Specified time stamp for the event
     */
    addEvent(name, attributesOrStartTime, timeStamp) {
        if (this._isSpanEnded())
            return this;
        const { eventCountLimit } = this._spanLimits;
        if (eventCountLimit === 0) {
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.diag.warn('No events allowed.');
            this._droppedEventsCount++;
            return this;
        }
        if (eventCountLimit !== undefined &&
            this.events.length >= eventCountLimit) {
            if (this._droppedEventsCount === 0) {
                _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.diag.debug('Dropping extra events.');
            }
            this.events.shift();
            this._droppedEventsCount++;
        }
        if ((0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_4__.isTimeInput)(attributesOrStartTime)) {
            if (!(0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_4__.isTimeInput)(timeStamp)) {
                timeStamp = attributesOrStartTime;
            }
            attributesOrStartTime = undefined;
        }
        const attributes = (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_3__.sanitizeAttributes)(attributesOrStartTime);
        this.events.push({
            name,
            attributes,
            time: this._getTime(timeStamp),
            droppedAttributesCount: 0,
        });
        return this;
    }
    addLink(link) {
        this.links.push(link);
        return this;
    }
    addLinks(links) {
        this.links.push(...links);
        return this;
    }
    setStatus(status) {
        if (this._isSpanEnded())
            return this;
        this.status = { ...status };
        // When using try-catch, the caught "error" is of type `any`. When then assigning `any` to `status.message`,
        // TypeScript will not error. While this can happen during use of any API, it is more common on Span#setStatus()
        // as it's likely used in a catch-block. Therefore, we validate if `status.message` is actually a string, null, or
        // undefined to avoid an incorrect type causing issues downstream.
        if (this.status.message != null && typeof status.message !== 'string') {
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.diag.warn(`Dropping invalid status.message of type '${typeof status.message}', expected 'string'`);
            delete this.status.message;
        }
        return this;
    }
    updateName(name) {
        if (this._isSpanEnded())
            return this;
        this.name = name;
        return this;
    }
    end(endTime) {
        if (this._isSpanEnded()) {
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.diag.error(`${this.name} ${this._spanContext.traceId}-${this._spanContext.spanId} - You can only call end() on a span once.`);
            return;
        }
        this._ended = true;
        this.endTime = this._getTime(endTime);
        this._duration = (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_4__.hrTimeDuration)(this.startTime, this.endTime);
        if (this._duration[0] < 0) {
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.diag.warn('Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.', this.startTime, this.endTime);
            this.endTime = this.startTime.slice();
            this._duration = [0, 0];
        }
        if (this._droppedEventsCount > 0) {
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.diag.warn(`Dropped ${this._droppedEventsCount} events because eventCountLimit reached`);
        }
        this._spanProcessor.onEnd(this);
    }
    _getTime(inp) {
        if (typeof inp === 'number' && inp <= _opentelemetry_core__WEBPACK_IMPORTED_MODULE_2__.otperformance.now()) {
            // must be a performance timestamp
            // apply correction and convert to hrtime
            return (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_4__.hrTime)(inp + this._performanceOffset);
        }
        if (typeof inp === 'number') {
            return (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_4__.millisToHrTime)(inp);
        }
        if (inp instanceof Date) {
            return (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_4__.millisToHrTime)(inp.getTime());
        }
        if ((0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_4__.isTimeInputHrTime)(inp)) {
            return inp;
        }
        if (this._startTimeProvided) {
            // if user provided a time for the start manually
            // we can't use duration to calculate event/end times
            return (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_4__.millisToHrTime)(Date.now());
        }
        const msDuration = _opentelemetry_core__WEBPACK_IMPORTED_MODULE_2__.otperformance.now() - this._performanceStartTime;
        return (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_4__.addHrTimes)(this.startTime, (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_4__.millisToHrTime)(msDuration));
    }
    isRecording() {
        return this._ended === false;
    }
    recordException(exception, time) {
        const attributes = {};
        if (typeof exception === 'string') {
            attributes[_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_5__.ATTR_EXCEPTION_MESSAGE] = exception;
        }
        else if (exception) {
            if (exception.code) {
                attributes[_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_5__.ATTR_EXCEPTION_TYPE] = exception.code.toString();
            }
            else if (exception.name) {
                attributes[_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_5__.ATTR_EXCEPTION_TYPE] = exception.name;
            }
            if (exception.message) {
                attributes[_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_5__.ATTR_EXCEPTION_MESSAGE] = exception.message;
            }
            if (exception.stack) {
                attributes[_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_5__.ATTR_EXCEPTION_STACKTRACE] = exception.stack;
            }
        }
        // these are minimum requirements from spec
        if (attributes[_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_5__.ATTR_EXCEPTION_TYPE] || attributes[_opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_5__.ATTR_EXCEPTION_MESSAGE]) {
            this.addEvent(_enums__WEBPACK_IMPORTED_MODULE_6__.ExceptionEventName, attributes, time);
        }
        else {
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.diag.warn(`Failed to record an exception ${exception}`);
        }
    }
    get duration() {
        return this._duration;
    }
    get ended() {
        return this._ended;
    }
    get droppedAttributesCount() {
        return this._droppedAttributesCount;
    }
    get droppedEventsCount() {
        return this._droppedEventsCount;
    }
    get droppedLinksCount() {
        return this._droppedLinksCount;
    }
    _isSpanEnded() {
        if (this._ended) {
            const error = new Error(`Operation attempted on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`);
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.diag.warn(`Cannot execute the operation on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`, error);
        }
        return this._ended;
    }
    // Utility function to truncate given value within size
    // for value type of string, will truncate to given limit
    // for type of non-string, will return same value
    _truncateToLimitUtil(value, limit) {
        if (value.length <= limit) {
            return value;
        }
        return value.substring(0, limit);
    }
    /**
     * If the given attribute value is of type string and has more characters than given {@code attributeValueLengthLimit} then
     * return string with truncated to {@code attributeValueLengthLimit} characters
     *
     * If the given attribute value is array of strings then
     * return new array of strings with each element truncated to {@code attributeValueLengthLimit} characters
     *
     * Otherwise return same Attribute {@code value}
     *
     * @param value Attribute value
     * @returns truncated attribute value if required, otherwise same value
     */
    _truncateToSize(value) {
        const limit = this._attributeValueLengthLimit;
        // Check limit
        if (limit <= 0) {
            // Negative values are invalid, so do not truncate
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.diag.warn(`Attribute value limit must be positive, got ${limit}`);
            return value;
        }
        // String
        if (typeof value === 'string') {
            return this._truncateToLimitUtil(value, limit);
        }
        // Array of strings
        if (Array.isArray(value)) {
            return value.map(val => typeof val === 'string' ? this._truncateToLimitUtil(val, limit) : val);
        }
        // Other types, no need to apply value length limit
        return value;
    }
}
//# sourceMappingURL=Span.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/sdk-trace-base/build/esm/Tracer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tracer: () => (/* binding */ Tracer)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/SamplingResult.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/span_kind.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/context-api.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/diag-api.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace-api.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/common/attributes.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js");
/* harmony import */ var _Span__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-base/build/esm/Span.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-base/build/esm/utility.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-base/build/esm/platform/browser/RandomIdGenerator.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/**
 * This class represents a basic tracer.
 */
class Tracer {
    _sampler;
    _generalLimits;
    _spanLimits;
    _idGenerator;
    instrumentationScope;
    _resource;
    _spanProcessor;
    /**
     * Constructs a new Tracer instance.
     */
    constructor(instrumentationScope, config, resource, spanProcessor) {
        const localConfig = (0,_utility__WEBPACK_IMPORTED_MODULE_10__.mergeConfig)(config);
        this._sampler = localConfig.sampler;
        this._generalLimits = localConfig.generalLimits;
        this._spanLimits = localConfig.spanLimits;
        this._idGenerator = config.idGenerator || new _platform__WEBPACK_IMPORTED_MODULE_11__.RandomIdGenerator();
        this._resource = resource;
        this._spanProcessor = spanProcessor;
        this.instrumentationScope = instrumentationScope;
    }
    /**
     * Starts a new Span or returns the default NoopSpan based on the sampling
     * decision.
     */
    startSpan(name, options = {}, context = _opentelemetry_api__WEBPACK_IMPORTED_MODULE_4__.context.active()) {
        // remove span from context in case a root span is requested via options
        if (options.root) {
            context = _opentelemetry_api__WEBPACK_IMPORTED_MODULE_6__.trace.deleteSpan(context);
        }
        const parentSpan = _opentelemetry_api__WEBPACK_IMPORTED_MODULE_6__.trace.getSpan(context);
        if ((0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_8__.isTracingSuppressed)(context)) {
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_5__.diag.debug('Instrumentation suppressed, returning Noop Span');
            const nonRecordingSpan = _opentelemetry_api__WEBPACK_IMPORTED_MODULE_6__.trace.wrapSpanContext(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_3__.INVALID_SPAN_CONTEXT);
            return nonRecordingSpan;
        }
        const parentSpanContext = parentSpan?.spanContext();
        const spanId = this._idGenerator.generateSpanId();
        let validParentSpanContext;
        let traceId;
        let traceState;
        if (!parentSpanContext ||
            !_opentelemetry_api__WEBPACK_IMPORTED_MODULE_6__.trace.isSpanContextValid(parentSpanContext)) {
            // New root span.
            traceId = this._idGenerator.generateTraceId();
        }
        else {
            // New child span.
            traceId = parentSpanContext.traceId;
            traceState = parentSpanContext.traceState;
            validParentSpanContext = parentSpanContext;
        }
        const spanKind = options.kind ?? _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.SpanKind.INTERNAL;
        const links = (options.links ?? []).map(link => {
            return {
                context: link.context,
                attributes: (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_7__.sanitizeAttributes)(link.attributes),
            };
        });
        const attributes = (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_7__.sanitizeAttributes)(options.attributes);
        // make sampling decision
        const samplingResult = this._sampler.shouldSample(context, traceId, name, spanKind, attributes, links);
        traceState = samplingResult.traceState ?? traceState;
        const traceFlags = samplingResult.decision === _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.SamplingDecision.RECORD_AND_SAMPLED
            ? _opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.TraceFlags.SAMPLED
            : _opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.TraceFlags.NONE;
        const spanContext = { traceId, spanId, traceFlags, traceState };
        if (samplingResult.decision === _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.SamplingDecision.NOT_RECORD) {
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_5__.diag.debug('Recording is off, propagating context in a non-recording span');
            const nonRecordingSpan = _opentelemetry_api__WEBPACK_IMPORTED_MODULE_6__.trace.wrapSpanContext(spanContext);
            return nonRecordingSpan;
        }
        // Set initial span attributes. The attributes object may have been mutated
        // by the sampler, so we sanitize the merged attributes before setting them.
        const initAttributes = (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_7__.sanitizeAttributes)(Object.assign(attributes, samplingResult.attributes));
        const span = new _Span__WEBPACK_IMPORTED_MODULE_9__.SpanImpl({
            resource: this._resource,
            scope: this.instrumentationScope,
            context,
            spanContext,
            name,
            kind: spanKind,
            links,
            parentSpanContext: validParentSpanContext,
            attributes: initAttributes,
            startTime: options.startTime,
            spanProcessor: this._spanProcessor,
            spanLimits: this._spanLimits,
        });
        return span;
    }
    startActiveSpan(name, arg2, arg3, arg4) {
        let opts;
        let ctx;
        let fn;
        if (arguments.length < 2) {
            return;
        }
        else if (arguments.length === 2) {
            fn = arg2;
        }
        else if (arguments.length === 3) {
            opts = arg2;
            fn = arg3;
        }
        else {
            opts = arg2;
            ctx = arg3;
            fn = arg4;
        }
        const parentContext = ctx ?? _opentelemetry_api__WEBPACK_IMPORTED_MODULE_4__.context.active();
        const span = this.startSpan(name, opts, parentContext);
        const contextWithSpanSet = _opentelemetry_api__WEBPACK_IMPORTED_MODULE_6__.trace.setSpan(parentContext, span);
        return _opentelemetry_api__WEBPACK_IMPORTED_MODULE_4__.context.with(contextWithSpanSet, fn, undefined, span);
    }
    /** Returns the active {@link GeneralLimits}. */
    getGeneralLimits() {
        return this._generalLimits;
    }
    /** Returns the active {@link SpanLimits}. */
    getSpanLimits() {
        return this._spanLimits;
    }
}
//# sourceMappingURL=Tracer.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/sdk-trace-base/build/esm/config.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildSamplerFromEnv: () => (/* binding */ buildSamplerFromEnv),
/* harmony export */   loadDefaultConfig: () => (/* binding */ loadDefaultConfig)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/diag-api.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/platform/browser/environment.js");
/* harmony import */ var _sampler_AlwaysOffSampler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/AlwaysOffSampler.js");
/* harmony import */ var _sampler_AlwaysOnSampler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/AlwaysOnSampler.js");
/* harmony import */ var _sampler_ParentBasedSampler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/ParentBasedSampler.js");
/* harmony import */ var _sampler_TraceIdRatioBasedSampler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/TraceIdRatioBasedSampler.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






const DEFAULT_RATIO = 1;
/**
 * Load default configuration. For fields with primitive values, any user-provided
 * value will override the corresponding default value. For fields with
 * non-primitive values (like `spanLimits`), the user-provided value will be
 * used to extend the default value.
 */
// object needs to be wrapped in this function and called when needed otherwise
// envs are parsed before tests are ran - causes tests using these envs to fail
function loadDefaultConfig() {
    return {
        sampler: buildSamplerFromEnv(),
        forceFlushTimeoutMillis: 30000,
        generalLimits: {
            attributeValueLengthLimit: (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.getNumberFromEnv)('OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT') ?? Infinity,
            attributeCountLimit: (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.getNumberFromEnv)('OTEL_ATTRIBUTE_COUNT_LIMIT') ?? 128,
        },
        spanLimits: {
            attributeValueLengthLimit: (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.getNumberFromEnv)('OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT') ?? Infinity,
            attributeCountLimit: (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.getNumberFromEnv)('OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT') ?? 128,
            linkCountLimit: (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.getNumberFromEnv)('OTEL_SPAN_LINK_COUNT_LIMIT') ?? 128,
            eventCountLimit: (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.getNumberFromEnv)('OTEL_SPAN_EVENT_COUNT_LIMIT') ?? 128,
            attributePerEventCountLimit: (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.getNumberFromEnv)('OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT') ?? 128,
            attributePerLinkCountLimit: (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.getNumberFromEnv)('OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT') ?? 128,
        },
    };
}
/**
 * Based on environment, builds a sampler, complies with specification.
 */
function buildSamplerFromEnv() {
    const sampler = (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.getStringFromEnv)('OTEL_TRACES_SAMPLER') ??
        "parentbased_always_on" /* TracesSamplerValues.ParentBasedAlwaysOn */;
    switch (sampler) {
        case "always_on" /* TracesSamplerValues.AlwaysOn */:
            return new _sampler_AlwaysOnSampler__WEBPACK_IMPORTED_MODULE_3__.AlwaysOnSampler();
        case "always_off" /* TracesSamplerValues.AlwaysOff */:
            return new _sampler_AlwaysOffSampler__WEBPACK_IMPORTED_MODULE_2__.AlwaysOffSampler();
        case "parentbased_always_on" /* TracesSamplerValues.ParentBasedAlwaysOn */:
            return new _sampler_ParentBasedSampler__WEBPACK_IMPORTED_MODULE_4__.ParentBasedSampler({
                root: new _sampler_AlwaysOnSampler__WEBPACK_IMPORTED_MODULE_3__.AlwaysOnSampler(),
            });
        case "parentbased_always_off" /* TracesSamplerValues.ParentBasedAlwaysOff */:
            return new _sampler_ParentBasedSampler__WEBPACK_IMPORTED_MODULE_4__.ParentBasedSampler({
                root: new _sampler_AlwaysOffSampler__WEBPACK_IMPORTED_MODULE_2__.AlwaysOffSampler(),
            });
        case "traceidratio" /* TracesSamplerValues.TraceIdRatio */:
            return new _sampler_TraceIdRatioBasedSampler__WEBPACK_IMPORTED_MODULE_5__.TraceIdRatioBasedSampler(getSamplerProbabilityFromEnv());
        case "parentbased_traceidratio" /* TracesSamplerValues.ParentBasedTraceIdRatio */:
            return new _sampler_ParentBasedSampler__WEBPACK_IMPORTED_MODULE_4__.ParentBasedSampler({
                root: new _sampler_TraceIdRatioBasedSampler__WEBPACK_IMPORTED_MODULE_5__.TraceIdRatioBasedSampler(getSamplerProbabilityFromEnv()),
            });
        default:
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.diag.error(`OTEL_TRACES_SAMPLER value "${sampler}" invalid, defaulting to "${"parentbased_always_on" /* TracesSamplerValues.ParentBasedAlwaysOn */}".`);
            return new _sampler_ParentBasedSampler__WEBPACK_IMPORTED_MODULE_4__.ParentBasedSampler({
                root: new _sampler_AlwaysOnSampler__WEBPACK_IMPORTED_MODULE_3__.AlwaysOnSampler(),
            });
    }
}
function getSamplerProbabilityFromEnv() {
    const probability = (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.getNumberFromEnv)('OTEL_TRACES_SAMPLER_ARG');
    if (probability == null) {
        _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.diag.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${DEFAULT_RATIO}.`);
        return DEFAULT_RATIO;
    }
    if (probability < 0 || probability > 1) {
        _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.diag.error(`OTEL_TRACES_SAMPLER_ARG=${probability} was given, but it is out of range ([0..1]), defaulting to ${DEFAULT_RATIO}.`);
        return DEFAULT_RATIO;
    }
    return probability;
}
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/sdk-trace-base/build/esm/enums.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExceptionEventName: () => (/* binding */ ExceptionEventName)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Event name definitions
const ExceptionEventName = 'exception';
//# sourceMappingURL=enums.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/sdk-trace-base/build/esm/export/BatchSpanProcessorBase.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BatchSpanProcessorBase: () => (/* binding */ BatchSpanProcessorBase)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/context-api.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/diag-api.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/platform/browser/environment.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/common/global-error-handler.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/platform/browser/timer-util.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/ExportResult.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/utils/callback.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * Implementation of the {@link SpanProcessor} that batches spans exported by
 * the SDK then pushes them to the exporter pipeline.
 */
class BatchSpanProcessorBase {
    _exporter;
    _maxExportBatchSize;
    _maxQueueSize;
    _scheduledDelayMillis;
    _exportTimeoutMillis;
    _isExporting = false;
    _finishedSpans = [];
    _timer;
    _shutdownOnce;
    _droppedSpansCount = 0;
    constructor(_exporter, config) {
        this._exporter = _exporter;
        this._maxExportBatchSize =
            typeof config?.maxExportBatchSize === 'number'
                ? config.maxExportBatchSize
                : ((0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_3__.getNumberFromEnv)('OTEL_BSP_MAX_EXPORT_BATCH_SIZE') ?? 512);
        this._maxQueueSize =
            typeof config?.maxQueueSize === 'number'
                ? config.maxQueueSize
                : ((0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_3__.getNumberFromEnv)('OTEL_BSP_MAX_QUEUE_SIZE') ?? 2048);
        this._scheduledDelayMillis =
            typeof config?.scheduledDelayMillis === 'number'
                ? config.scheduledDelayMillis
                : ((0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_3__.getNumberFromEnv)('OTEL_BSP_SCHEDULE_DELAY') ?? 5000);
        this._exportTimeoutMillis =
            typeof config?.exportTimeoutMillis === 'number'
                ? config.exportTimeoutMillis
                : ((0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_3__.getNumberFromEnv)('OTEL_BSP_EXPORT_TIMEOUT') ?? 30000);
        this._shutdownOnce = new _opentelemetry_core__WEBPACK_IMPORTED_MODULE_8__.BindOnceFuture(this._shutdown, this);
        if (this._maxExportBatchSize > this._maxQueueSize) {
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.diag.warn('BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize');
            this._maxExportBatchSize = this._maxQueueSize;
        }
    }
    forceFlush() {
        if (this._shutdownOnce.isCalled) {
            return this._shutdownOnce.promise;
        }
        return this._flushAll();
    }
    // does nothing.
    onStart(_span, _parentContext) { }
    onEnd(span) {
        if (this._shutdownOnce.isCalled) {
            return;
        }
        if ((span.spanContext().traceFlags & _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.TraceFlags.SAMPLED) === 0) {
            return;
        }
        this._addToBuffer(span);
    }
    shutdown() {
        return this._shutdownOnce.call();
    }
    _shutdown() {
        return Promise.resolve()
            .then(() => {
            return this.onShutdown();
        })
            .then(() => {
            return this._flushAll();
        })
            .then(() => {
            return this._exporter.shutdown();
        });
    }
    /** Add a span in the buffer. */
    _addToBuffer(span) {
        if (this._finishedSpans.length >= this._maxQueueSize) {
            // limit reached, drop span
            if (this._droppedSpansCount === 0) {
                _opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.diag.debug('maxQueueSize reached, dropping spans');
            }
            this._droppedSpansCount++;
            return;
        }
        if (this._droppedSpansCount > 0) {
            // some spans were dropped, log once with count of spans dropped
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.diag.warn(`Dropped ${this._droppedSpansCount} spans because maxQueueSize reached`);
            this._droppedSpansCount = 0;
        }
        this._finishedSpans.push(span);
        this._maybeStartTimer();
    }
    /**
     * Send all spans to the exporter respecting the batch size limit
     * This function is used only on forceFlush or shutdown,
     * for all other cases _flush should be used
     * */
    _flushAll() {
        return new Promise((resolve, reject) => {
            const promises = [];
            // calculate number of batches
            const count = Math.ceil(this._finishedSpans.length / this._maxExportBatchSize);
            for (let i = 0, j = count; i < j; i++) {
                promises.push(this._flushOneBatch());
            }
            Promise.all(promises)
                .then(() => {
                resolve();
            })
                .catch(reject);
        });
    }
    _flushOneBatch() {
        this._clearTimer();
        if (this._finishedSpans.length === 0) {
            return Promise.resolve();
        }
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                // don't wait anymore for export, this way the next batch can start
                reject(new Error('Timeout'));
            }, this._exportTimeoutMillis);
            // prevent downstream exporter calls from generating spans
            _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.context.with((0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_7__.suppressTracing)(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.context.active()), () => {
                // Reset the finished spans buffer here because the next invocations of the _flush method
                // could pass the same finished spans to the exporter if the buffer is cleared
                // outside the execution of this callback.
                let spans;
                if (this._finishedSpans.length <= this._maxExportBatchSize) {
                    spans = this._finishedSpans;
                    this._finishedSpans = [];
                }
                else {
                    spans = this._finishedSpans.splice(0, this._maxExportBatchSize);
                }
                const doExport = () => this._exporter.export(spans, result => {
                    clearTimeout(timer);
                    if (result.code === _opentelemetry_core__WEBPACK_IMPORTED_MODULE_6__.ExportResultCode.SUCCESS) {
                        resolve();
                    }
                    else {
                        reject(result.error ??
                            new Error('BatchSpanProcessor: span export failed'));
                    }
                });
                let pendingResources = null;
                for (let i = 0, len = spans.length; i < len; i++) {
                    const span = spans[i];
                    if (span.resource.asyncAttributesPending &&
                        span.resource.waitForAsyncAttributes) {
                        pendingResources ??= [];
                        pendingResources.push(span.resource.waitForAsyncAttributes());
                    }
                }
                // Avoid scheduling a promise to make the behavior more predictable and easier to test
                if (pendingResources === null) {
                    doExport();
                }
                else {
                    Promise.all(pendingResources).then(doExport, err => {
                        (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_4__.globalErrorHandler)(err);
                        reject(err);
                    });
                }
            });
        });
    }
    _maybeStartTimer() {
        if (this._isExporting)
            return;
        const flush = () => {
            this._isExporting = true;
            this._flushOneBatch()
                .finally(() => {
                this._isExporting = false;
                if (this._finishedSpans.length > 0) {
                    this._clearTimer();
                    this._maybeStartTimer();
                }
            })
                .catch(e => {
                this._isExporting = false;
                (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_4__.globalErrorHandler)(e);
            });
        };
        // we only wait if the queue doesn't have enough elements yet
        if (this._finishedSpans.length >= this._maxExportBatchSize) {
            return flush();
        }
        if (this._timer !== undefined)
            return;
        this._timer = setTimeout(() => flush(), this._scheduledDelayMillis);
        (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_5__.unrefTimer)(this._timer);
    }
    _clearTimer() {
        if (this._timer !== undefined) {
            clearTimeout(this._timer);
            this._timer = undefined;
        }
    }
}
//# sourceMappingURL=BatchSpanProcessorBase.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/sdk-trace-base/build/esm/platform/browser/RandomIdGenerator.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RandomIdGenerator: () => (/* binding */ RandomIdGenerator)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const SPAN_ID_BYTES = 8;
const TRACE_ID_BYTES = 16;
class RandomIdGenerator {
    /**
     * Returns a random 16-byte trace ID formatted/encoded as a 32 lowercase hex
     * characters corresponding to 128 bits.
     */
    generateTraceId = getIdGenerator(TRACE_ID_BYTES);
    /**
     * Returns a random 8-byte span ID formatted/encoded as a 16 lowercase hex
     * characters corresponding to 64 bits.
     */
    generateSpanId = getIdGenerator(SPAN_ID_BYTES);
}
const SHARED_CHAR_CODES_ARRAY = Array(32);
function getIdGenerator(bytes) {
    return function generateId() {
        for (let i = 0; i < bytes * 2; i++) {
            SHARED_CHAR_CODES_ARRAY[i] = Math.floor(Math.random() * 16) + 48;
            // valid hex characters in the range 48-57 and 97-102
            if (SHARED_CHAR_CODES_ARRAY[i] >= 58) {
                SHARED_CHAR_CODES_ARRAY[i] += 39;
            }
        }
        return String.fromCharCode.apply(null, SHARED_CHAR_CODES_ARRAY.slice(0, bytes * 2));
    };
}
//# sourceMappingURL=RandomIdGenerator.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/sdk-trace-base/build/esm/platform/browser/export/BatchSpanProcessor.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BatchSpanProcessor: () => (/* binding */ BatchSpanProcessor)
/* harmony export */ });
/* harmony import */ var _export_BatchSpanProcessorBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-base/build/esm/export/BatchSpanProcessorBase.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/common/global-error-handler.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


class BatchSpanProcessor extends _export_BatchSpanProcessorBase__WEBPACK_IMPORTED_MODULE_0__.BatchSpanProcessorBase {
    _visibilityChangeListener;
    _pageHideListener;
    constructor(_exporter, config) {
        super(_exporter, config);
        this.onInit(config);
    }
    onInit(config) {
        if (config?.disableAutoFlushOnDocumentHide !== true &&
            typeof document !== 'undefined') {
            this._visibilityChangeListener = () => {
                if (document.visibilityState === 'hidden') {
                    this.forceFlush().catch(error => {
                        (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.globalErrorHandler)(error);
                    });
                }
            };
            this._pageHideListener = () => {
                this.forceFlush().catch(error => {
                    (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.globalErrorHandler)(error);
                });
            };
            document.addEventListener('visibilitychange', this._visibilityChangeListener);
            // use 'pagehide' event as a fallback for Safari; see https://bugs.webkit.org/show_bug.cgi?id=116769
            document.addEventListener('pagehide', this._pageHideListener);
        }
    }
    onShutdown() {
        if (typeof document !== 'undefined') {
            if (this._visibilityChangeListener) {
                document.removeEventListener('visibilitychange', this._visibilityChangeListener);
            }
            if (this._pageHideListener) {
                document.removeEventListener('pagehide', this._pageHideListener);
            }
        }
    }
}
//# sourceMappingURL=BatchSpanProcessor.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/AlwaysOffSampler.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlwaysOffSampler: () => (/* binding */ AlwaysOffSampler)
/* harmony export */ });
/* harmony import */ var _Sampler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-base/build/esm/Sampler.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Sampler that samples no traces. */
class AlwaysOffSampler {
    shouldSample() {
        return {
            decision: _Sampler__WEBPACK_IMPORTED_MODULE_0__.SamplingDecision.NOT_RECORD,
        };
    }
    toString() {
        return 'AlwaysOffSampler';
    }
}
//# sourceMappingURL=AlwaysOffSampler.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/AlwaysOnSampler.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlwaysOnSampler: () => (/* binding */ AlwaysOnSampler)
/* harmony export */ });
/* harmony import */ var _Sampler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-base/build/esm/Sampler.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Sampler that samples all traces. */
class AlwaysOnSampler {
    shouldSample() {
        return {
            decision: _Sampler__WEBPACK_IMPORTED_MODULE_0__.SamplingDecision.RECORD_AND_SAMPLED,
        };
    }
    toString() {
        return 'AlwaysOnSampler';
    }
}
//# sourceMappingURL=AlwaysOnSampler.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/ParentBasedSampler.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParentBasedSampler: () => (/* binding */ ParentBasedSampler)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace-api.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/common/global-error-handler.js");
/* harmony import */ var _AlwaysOffSampler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/AlwaysOffSampler.js");
/* harmony import */ var _AlwaysOnSampler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/AlwaysOnSampler.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




/**
 * A composite sampler that either respects the parent span's sampling decision
 * or delegates to `delegateSampler` for root spans.
 */
class ParentBasedSampler {
    _root;
    _remoteParentSampled;
    _remoteParentNotSampled;
    _localParentSampled;
    _localParentNotSampled;
    constructor(config) {
        this._root = config.root;
        if (!this._root) {
            (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_3__.globalErrorHandler)(new Error('ParentBasedSampler must have a root sampler configured'));
            this._root = new _AlwaysOnSampler__WEBPACK_IMPORTED_MODULE_5__.AlwaysOnSampler();
        }
        this._remoteParentSampled =
            config.remoteParentSampled ?? new _AlwaysOnSampler__WEBPACK_IMPORTED_MODULE_5__.AlwaysOnSampler();
        this._remoteParentNotSampled =
            config.remoteParentNotSampled ?? new _AlwaysOffSampler__WEBPACK_IMPORTED_MODULE_4__.AlwaysOffSampler();
        this._localParentSampled =
            config.localParentSampled ?? new _AlwaysOnSampler__WEBPACK_IMPORTED_MODULE_5__.AlwaysOnSampler();
        this._localParentNotSampled =
            config.localParentNotSampled ?? new _AlwaysOffSampler__WEBPACK_IMPORTED_MODULE_4__.AlwaysOffSampler();
    }
    shouldSample(context, traceId, spanName, spanKind, attributes, links) {
        const parentContext = _opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.trace.getSpanContext(context);
        if (!parentContext || !(0,_opentelemetry_api__WEBPACK_IMPORTED_MODULE_1__.isSpanContextValid)(parentContext)) {
            return this._root.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        }
        if (parentContext.isRemote) {
            if (parentContext.traceFlags & _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.TraceFlags.SAMPLED) {
                return this._remoteParentSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
            }
            return this._remoteParentNotSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        }
        if (parentContext.traceFlags & _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.TraceFlags.SAMPLED) {
            return this._localParentSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        }
        return this._localParentNotSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
    }
    toString() {
        return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
    }
}
//# sourceMappingURL=ParentBasedSampler.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/TraceIdRatioBasedSampler.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TraceIdRatioBasedSampler: () => (/* binding */ TraceIdRatioBasedSampler)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js");
/* harmony import */ var _Sampler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-base/build/esm/Sampler.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/** Sampler that samples a given fraction of traces based of trace id deterministically. */
class TraceIdRatioBasedSampler {
    _ratio;
    _upperBound;
    constructor(_ratio = 0) {
        this._ratio = _ratio;
        this._ratio = this._normalize(_ratio);
        this._upperBound = Math.floor(this._ratio * 0xffffffff);
    }
    shouldSample(context, traceId) {
        return {
            decision: (0,_opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.isValidTraceId)(traceId) && this._accumulate(traceId) < this._upperBound
                ? _Sampler__WEBPACK_IMPORTED_MODULE_1__.SamplingDecision.RECORD_AND_SAMPLED
                : _Sampler__WEBPACK_IMPORTED_MODULE_1__.SamplingDecision.NOT_RECORD,
        };
    }
    toString() {
        return `TraceIdRatioBased{${this._ratio}}`;
    }
    _normalize(ratio) {
        if (typeof ratio !== 'number' || isNaN(ratio))
            return 0;
        return ratio >= 1 ? 1 : ratio <= 0 ? 0 : ratio;
    }
    _accumulate(traceId) {
        let accumulation = 0;
        for (let i = 0; i < traceId.length / 8; i++) {
            const pos = i * 8;
            const part = parseInt(traceId.slice(pos, pos + 8), 16);
            accumulation = (accumulation ^ part) >>> 0;
        }
        return accumulation;
    }
}
//# sourceMappingURL=TraceIdRatioBasedSampler.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/sdk-trace-base/build/esm/utility.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_ATTRIBUTE_COUNT_LIMIT: () => (/* binding */ DEFAULT_ATTRIBUTE_COUNT_LIMIT),
/* harmony export */   DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT: () => (/* binding */ DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT),
/* harmony export */   mergeConfig: () => (/* binding */ mergeConfig),
/* harmony export */   reconfigureLimits: () => (/* binding */ reconfigureLimits)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-base/build/esm/config.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/platform/browser/environment.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const DEFAULT_ATTRIBUTE_COUNT_LIMIT = 128;
const DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT = Infinity;
/**
 * Function to merge Default configuration (as specified in './config') with
 * user provided configurations.
 */
function mergeConfig(userConfig) {
    const perInstanceDefaults = {
        sampler: (0,_config__WEBPACK_IMPORTED_MODULE_0__.buildSamplerFromEnv)(),
    };
    const DEFAULT_CONFIG = (0,_config__WEBPACK_IMPORTED_MODULE_0__.loadDefaultConfig)();
    const target = Object.assign({}, DEFAULT_CONFIG, perInstanceDefaults, userConfig);
    target.generalLimits = Object.assign({}, DEFAULT_CONFIG.generalLimits, userConfig.generalLimits || {});
    target.spanLimits = Object.assign({}, DEFAULT_CONFIG.spanLimits, userConfig.spanLimits || {});
    return target;
}
/**
 * When general limits are provided and model specific limits are not,
 * configures the model specific limits by using the values from the general ones.
 * @param userConfig User provided tracer configuration
 */
function reconfigureLimits(userConfig) {
    const spanLimits = Object.assign({}, userConfig.spanLimits);
    /**
     * Reassign span attribute count limit to use first non null value defined by user or use default value
     */
    spanLimits.attributeCountLimit =
        userConfig.spanLimits?.attributeCountLimit ??
            userConfig.generalLimits?.attributeCountLimit ??
            (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.getNumberFromEnv)('OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT') ??
            (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.getNumberFromEnv)('OTEL_ATTRIBUTE_COUNT_LIMIT') ??
            DEFAULT_ATTRIBUTE_COUNT_LIMIT;
    /**
     * Reassign span attribute value length limit to use first non null value defined by user or use default value
     */
    spanLimits.attributeValueLengthLimit =
        userConfig.spanLimits?.attributeValueLengthLimit ??
            userConfig.generalLimits?.attributeValueLengthLimit ??
            (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.getNumberFromEnv)('OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT') ??
            (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.getNumberFromEnv)('OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT') ??
            DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT;
    return Object.assign({}, userConfig, { spanLimits });
}
//# sourceMappingURL=utility.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/sdk-trace-web/build/esm/StackContextManager.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StackContextManager: () => (/* binding */ StackContextManager)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/context/context.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Stack Context Manager for managing the state in web
 * it doesn't fully support the async calls though
 */
class StackContextManager {
    /**
     * whether the context manager is enabled or not
     */
    _enabled = false;
    /**
     * Keeps the reference to current context
     */
    _currentContext = _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.ROOT_CONTEXT;
    /**
     *
     * @param context
     * @param target Function to be executed within the context
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    _bindFunction(context = _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.ROOT_CONTEXT, target) {
        const manager = this;
        const contextWrapper = function (...args) {
            return manager.with(context, () => target.apply(this, args));
        };
        Object.defineProperty(contextWrapper, 'length', {
            enumerable: false,
            configurable: true,
            writable: false,
            value: target.length,
        });
        return contextWrapper;
    }
    /**
     * Returns the active context
     */
    active() {
        return this._currentContext;
    }
    /**
     * Binds a the certain context or the active one to the target function and then returns the target
     * @param context A context (span) to be bind to target
     * @param target a function or event emitter. When target or one of its callbacks is called,
     *  the provided context will be used as the active context for the duration of the call.
     */
    bind(context, target) {
        // if no specific context to propagate is given, we use the current one
        if (context === undefined) {
            context = this.active();
        }
        if (typeof target === 'function') {
            return this._bindFunction(context, target);
        }
        return target;
    }
    /**
     * Disable the context manager (clears the current context)
     */
    disable() {
        this._currentContext = _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.ROOT_CONTEXT;
        this._enabled = false;
        return this;
    }
    /**
     * Enables the context manager and creates a default(root) context
     */
    enable() {
        if (this._enabled) {
            return this;
        }
        this._enabled = true;
        this._currentContext = _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.ROOT_CONTEXT;
        return this;
    }
    /**
     * Calls the callback function [fn] with the provided [context]. If [context] is undefined then it will use the window.
     * The context will be set as active
     * @param context
     * @param fn Callback function
     * @param thisArg optional receiver to be used for calling fn
     * @param args optional arguments forwarded to fn
     */
    with(context, fn, thisArg, ...args) {
        const previousContext = this._currentContext;
        this._currentContext = context || _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.ROOT_CONTEXT;
        try {
            return fn.call(thisArg, ...args);
        }
        finally {
            this._currentContext = previousContext;
        }
    }
}
//# sourceMappingURL=StackContextManager.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/sdk-trace-web/build/esm/WebTracerProvider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebTracerProvider: () => (/* binding */ WebTracerProvider)
/* harmony export */ });
/* harmony import */ var _opentelemetry_sdk_trace_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-base/build/esm/BasicTracerProvider.js");
/* harmony import */ var _StackContextManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-web/build/esm/StackContextManager.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/context-api.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/propagation-api.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@opentelemetry/api/build/esm/trace-api.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/baggage/propagation/W3CBaggagePropagator.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/propagation/composite.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/trace/W3CTraceContextPropagator.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




function setupContextManager(contextManager) {
    // null means 'do not register'
    if (contextManager === null) {
        return;
    }
    // undefined means 'register default'
    if (contextManager === undefined) {
        const defaultContextManager = new _StackContextManager__WEBPACK_IMPORTED_MODULE_1__.StackContextManager();
        defaultContextManager.enable();
        _opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.context.setGlobalContextManager(defaultContextManager);
        return;
    }
    contextManager.enable();
    _opentelemetry_api__WEBPACK_IMPORTED_MODULE_2__.context.setGlobalContextManager(contextManager);
}
function setupPropagator(propagator) {
    // null means 'do not register'
    if (propagator === null) {
        return;
    }
    // undefined means 'register default'
    if (propagator === undefined) {
        _opentelemetry_api__WEBPACK_IMPORTED_MODULE_3__.propagation.setGlobalPropagator(new _opentelemetry_core__WEBPACK_IMPORTED_MODULE_6__.CompositePropagator({
            propagators: [
                new _opentelemetry_core__WEBPACK_IMPORTED_MODULE_7__.W3CTraceContextPropagator(),
                new _opentelemetry_core__WEBPACK_IMPORTED_MODULE_5__.W3CBaggagePropagator(),
            ],
        }));
        return;
    }
    _opentelemetry_api__WEBPACK_IMPORTED_MODULE_3__.propagation.setGlobalPropagator(propagator);
}
/**
 * This class represents a web tracer with {@link StackContextManager}
 */
class WebTracerProvider extends _opentelemetry_sdk_trace_base__WEBPACK_IMPORTED_MODULE_0__.BasicTracerProvider {
    /**
     * Constructs a new Tracer instance.
     * @param config Web Tracer config
     */
    constructor(config = {}) {
        super(config);
    }
    /**
     * Register this TracerProvider for use with the OpenTelemetry API.
     * Undefined values may be replaced with defaults, and
     * null values will be skipped.
     *
     * @param config Configuration object for SDK registration
     */
    register(config = {}) {
        _opentelemetry_api__WEBPACK_IMPORTED_MODULE_4__.trace.setGlobalTracerProvider(this);
        setupPropagator(config.propagator);
        setupContextManager(config.contextManager);
    }
}
//# sourceMappingURL=WebTracerProvider.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/sdk-trace-web/build/esm/enums/PerformanceTimingNames.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerformanceTimingNames: () => (/* binding */ PerformanceTimingNames)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PerformanceTimingNames;
(function (PerformanceTimingNames) {
    PerformanceTimingNames["CONNECT_END"] = "connectEnd";
    PerformanceTimingNames["CONNECT_START"] = "connectStart";
    PerformanceTimingNames["DECODED_BODY_SIZE"] = "decodedBodySize";
    PerformanceTimingNames["DOM_COMPLETE"] = "domComplete";
    PerformanceTimingNames["DOM_CONTENT_LOADED_EVENT_END"] = "domContentLoadedEventEnd";
    PerformanceTimingNames["DOM_CONTENT_LOADED_EVENT_START"] = "domContentLoadedEventStart";
    PerformanceTimingNames["DOM_INTERACTIVE"] = "domInteractive";
    PerformanceTimingNames["DOMAIN_LOOKUP_END"] = "domainLookupEnd";
    PerformanceTimingNames["DOMAIN_LOOKUP_START"] = "domainLookupStart";
    PerformanceTimingNames["ENCODED_BODY_SIZE"] = "encodedBodySize";
    PerformanceTimingNames["FETCH_START"] = "fetchStart";
    PerformanceTimingNames["LOAD_EVENT_END"] = "loadEventEnd";
    PerformanceTimingNames["LOAD_EVENT_START"] = "loadEventStart";
    PerformanceTimingNames["NAVIGATION_START"] = "navigationStart";
    PerformanceTimingNames["REDIRECT_END"] = "redirectEnd";
    PerformanceTimingNames["REDIRECT_START"] = "redirectStart";
    PerformanceTimingNames["REQUEST_START"] = "requestStart";
    PerformanceTimingNames["RESPONSE_END"] = "responseEnd";
    PerformanceTimingNames["RESPONSE_START"] = "responseStart";
    PerformanceTimingNames["SECURE_CONNECTION_START"] = "secureConnectionStart";
    PerformanceTimingNames["START_TIME"] = "startTime";
    PerformanceTimingNames["UNLOAD_EVENT_END"] = "unloadEventEnd";
    PerformanceTimingNames["UNLOAD_EVENT_START"] = "unloadEventStart";
})(PerformanceTimingNames || (PerformanceTimingNames = {}));
//# sourceMappingURL=PerformanceTimingNames.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/sdk-trace-web/build/esm/semconv.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ATTR_HTTP_RESPONSE_CONTENT_LENGTH: () => (/* binding */ ATTR_HTTP_RESPONSE_CONTENT_LENGTH),
/* harmony export */   ATTR_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED: () => (/* binding */ ATTR_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*
 * This file contains a copy of unstable semantic convention definitions
 * used by this package.
 * @see https://github.com/open-telemetry/opentelemetry-js/tree/main/semantic-conventions#unstable-semconv
 */
/**
 * Deprecated, use `http.response.header.<key>` instead.
 *
 * @example 3495
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by `http.response.header.<key>`.
 */
const ATTR_HTTP_RESPONSE_CONTENT_LENGTH = 'http.response_content_length';
/**
 * Deprecated, use `http.response.body.size` instead.
 *
 * @example 5493
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replace by `http.response.body.size`.
 */
const ATTR_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = 'http.response_content_length_uncompressed';
//# sourceMappingURL=semconv.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/sdk-trace-web/build/esm/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSpanNetworkEvent: () => (/* binding */ addSpanNetworkEvent),
/* harmony export */   addSpanNetworkEvents: () => (/* binding */ addSpanNetworkEvents),
/* harmony export */   getElementXPath: () => (/* binding */ getElementXPath),
/* harmony export */   getResource: () => (/* binding */ getResource),
/* harmony export */   hasKey: () => (/* binding */ hasKey),
/* harmony export */   normalizeUrl: () => (/* binding */ normalizeUrl),
/* harmony export */   parseUrl: () => (/* binding */ parseUrl),
/* harmony export */   shouldPropagateTraceHeaders: () => (/* binding */ shouldPropagateTraceHeaders),
/* harmony export */   sortResources: () => (/* binding */ sortResources)
/* harmony export */ });
/* harmony import */ var _enums_PerformanceTimingNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-web/build/esm/enums/PerformanceTimingNames.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/common/time.js");
/* harmony import */ var _opentelemetry_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@opentelemetry/core/build/esm/utils/url.js");
/* harmony import */ var _semconv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@opentelemetry/sdk-trace-web/build/esm/semconv.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



// Used to normalize relative URLs
let urlNormalizingAnchor;
function getUrlNormalizingAnchor() {
    if (!urlNormalizingAnchor) {
        urlNormalizingAnchor = document.createElement('a');
    }
    return urlNormalizingAnchor;
}
/**
 * Helper function to be able to use enum as typed key in type and in interface when using forEach
 * @param obj
 * @param key
 */
function hasKey(obj, key) {
    return key in obj;
}
/**
 * Helper function for starting an event on span based on {@link PerformanceEntries}
 * @param span
 * @param performanceName name of performance entry for time start
 * @param entries
 * @param ignoreZeros
 */
function addSpanNetworkEvent(span, performanceName, entries, ignoreZeros = true) {
    if (hasKey(entries, performanceName) &&
        typeof entries[performanceName] === 'number' &&
        !(ignoreZeros && entries[performanceName] === 0)) {
        return span.addEvent(performanceName, entries[performanceName]);
    }
    return undefined;
}
/**
 * Helper function for adding network events and content length attributes.
 */
function addSpanNetworkEvents(span, resource, ignoreNetworkEvents = false, ignoreZeros, skipOldSemconvContentLengthAttrs) {
    if (ignoreZeros === undefined) {
        ignoreZeros = resource[_enums_PerformanceTimingNames__WEBPACK_IMPORTED_MODULE_0__.PerformanceTimingNames.START_TIME] !== 0;
    }
    if (!ignoreNetworkEvents) {
        addSpanNetworkEvent(span, _enums_PerformanceTimingNames__WEBPACK_IMPORTED_MODULE_0__.PerformanceTimingNames.FETCH_START, resource, ignoreZeros);
        addSpanNetworkEvent(span, _enums_PerformanceTimingNames__WEBPACK_IMPORTED_MODULE_0__.PerformanceTimingNames.DOMAIN_LOOKUP_START, resource, ignoreZeros);
        addSpanNetworkEvent(span, _enums_PerformanceTimingNames__WEBPACK_IMPORTED_MODULE_0__.PerformanceTimingNames.DOMAIN_LOOKUP_END, resource, ignoreZeros);
        addSpanNetworkEvent(span, _enums_PerformanceTimingNames__WEBPACK_IMPORTED_MODULE_0__.PerformanceTimingNames.CONNECT_START, resource, ignoreZeros);
        addSpanNetworkEvent(span, _enums_PerformanceTimingNames__WEBPACK_IMPORTED_MODULE_0__.PerformanceTimingNames.SECURE_CONNECTION_START, resource, ignoreZeros);
        addSpanNetworkEvent(span, _enums_PerformanceTimingNames__WEBPACK_IMPORTED_MODULE_0__.PerformanceTimingNames.CONNECT_END, resource, ignoreZeros);
        addSpanNetworkEvent(span, _enums_PerformanceTimingNames__WEBPACK_IMPORTED_MODULE_0__.PerformanceTimingNames.REQUEST_START, resource, ignoreZeros);
        addSpanNetworkEvent(span, _enums_PerformanceTimingNames__WEBPACK_IMPORTED_MODULE_0__.PerformanceTimingNames.RESPONSE_START, resource, ignoreZeros);
        addSpanNetworkEvent(span, _enums_PerformanceTimingNames__WEBPACK_IMPORTED_MODULE_0__.PerformanceTimingNames.RESPONSE_END, resource, ignoreZeros);
    }
    if (!skipOldSemconvContentLengthAttrs) {
        // This block adds content-length-related span attributes using the
        // *old* HTTP semconv (v1.7.0).
        const encodedLength = resource[_enums_PerformanceTimingNames__WEBPACK_IMPORTED_MODULE_0__.PerformanceTimingNames.ENCODED_BODY_SIZE];
        if (encodedLength !== undefined) {
            span.setAttribute(_semconv__WEBPACK_IMPORTED_MODULE_3__.ATTR_HTTP_RESPONSE_CONTENT_LENGTH, encodedLength);
        }
        const decodedLength = resource[_enums_PerformanceTimingNames__WEBPACK_IMPORTED_MODULE_0__.PerformanceTimingNames.DECODED_BODY_SIZE];
        // Spec: Not set if transport encoding not used (in which case encoded and decoded sizes match)
        if (decodedLength !== undefined && encodedLength !== decodedLength) {
            span.setAttribute(_semconv__WEBPACK_IMPORTED_MODULE_3__.ATTR_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED, decodedLength);
        }
    }
}
/**
 * sort resources by startTime
 * @param filteredResources
 */
function sortResources(filteredResources) {
    return filteredResources.slice().sort((a, b) => {
        const valueA = a[_enums_PerformanceTimingNames__WEBPACK_IMPORTED_MODULE_0__.PerformanceTimingNames.FETCH_START];
        const valueB = b[_enums_PerformanceTimingNames__WEBPACK_IMPORTED_MODULE_0__.PerformanceTimingNames.FETCH_START];
        if (valueA > valueB) {
            return 1;
        }
        else if (valueA < valueB) {
            return -1;
        }
        return 0;
    });
}
/** Returns the origin if present (if in browser context). */
function getOrigin() {
    return typeof location !== 'undefined' ? location.origin : undefined;
}
/**
 * Get closest performance resource ignoring the resources that have been
 * already used.
 * @param spanUrl
 * @param startTimeHR
 * @param endTimeHR
 * @param resources
 * @param ignoredResources
 * @param initiatorType
 */
function getResource(spanUrl, startTimeHR, endTimeHR, resources, ignoredResources = new WeakSet(), initiatorType) {
    // de-relativize the URL before usage (does no harm to absolute URLs)
    const parsedSpanUrl = parseUrl(spanUrl);
    spanUrl = parsedSpanUrl.toString();
    const filteredResources = filterResourcesForSpan(spanUrl, startTimeHR, endTimeHR, resources, ignoredResources, initiatorType);
    if (filteredResources.length === 0) {
        return {
            mainRequest: undefined,
        };
    }
    if (filteredResources.length === 1) {
        return {
            mainRequest: filteredResources[0],
        };
    }
    const sorted = sortResources(filteredResources);
    if (parsedSpanUrl.origin !== getOrigin() && sorted.length > 1) {
        let corsPreFlightRequest = sorted[0];
        let mainRequest = findMainRequest(sorted, corsPreFlightRequest[_enums_PerformanceTimingNames__WEBPACK_IMPORTED_MODULE_0__.PerformanceTimingNames.RESPONSE_END], endTimeHR);
        const responseEnd = corsPreFlightRequest[_enums_PerformanceTimingNames__WEBPACK_IMPORTED_MODULE_0__.PerformanceTimingNames.RESPONSE_END];
        const fetchStart = mainRequest[_enums_PerformanceTimingNames__WEBPACK_IMPORTED_MODULE_0__.PerformanceTimingNames.FETCH_START];
        // no corsPreFlightRequest
        if (fetchStart < responseEnd) {
            mainRequest = corsPreFlightRequest;
            corsPreFlightRequest = undefined;
        }
        return {
            corsPreFlightRequest,
            mainRequest,
        };
    }
    else {
        return {
            mainRequest: filteredResources[0],
        };
    }
}
/**
 * Will find the main request skipping the cors pre flight requests
 * @param resources
 * @param corsPreFlightRequestEndTime
 * @param spanEndTimeHR
 */
function findMainRequest(resources, corsPreFlightRequestEndTime, spanEndTimeHR) {
    const spanEndTime = (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.hrTimeToNanoseconds)(spanEndTimeHR);
    const minTime = (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.hrTimeToNanoseconds)((0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.timeInputToHrTime)(corsPreFlightRequestEndTime));
    let mainRequest = resources[1];
    let bestGap;
    const length = resources.length;
    for (let i = 1; i < length; i++) {
        const resource = resources[i];
        const resourceStartTime = (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.hrTimeToNanoseconds)((0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.timeInputToHrTime)(resource[_enums_PerformanceTimingNames__WEBPACK_IMPORTED_MODULE_0__.PerformanceTimingNames.FETCH_START]));
        const resourceEndTime = (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.hrTimeToNanoseconds)((0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.timeInputToHrTime)(resource[_enums_PerformanceTimingNames__WEBPACK_IMPORTED_MODULE_0__.PerformanceTimingNames.RESPONSE_END]));
        const currentGap = spanEndTime - resourceEndTime;
        if (resourceStartTime >= minTime && (!bestGap || currentGap < bestGap)) {
            bestGap = currentGap;
            mainRequest = resource;
        }
    }
    return mainRequest;
}
/**
 * Filter all resources that has started and finished according to span start time and end time.
 *     It will return the closest resource to a start time
 * @param spanUrl
 * @param startTimeHR
 * @param endTimeHR
 * @param resources
 * @param ignoredResources
 */
function filterResourcesForSpan(spanUrl, startTimeHR, endTimeHR, resources, ignoredResources, initiatorType) {
    const startTime = (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.hrTimeToNanoseconds)(startTimeHR);
    const endTime = (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.hrTimeToNanoseconds)(endTimeHR);
    let filteredResources = resources.filter(resource => {
        const resourceStartTime = (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.hrTimeToNanoseconds)((0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.timeInputToHrTime)(resource[_enums_PerformanceTimingNames__WEBPACK_IMPORTED_MODULE_0__.PerformanceTimingNames.FETCH_START]));
        const resourceEndTime = (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.hrTimeToNanoseconds)((0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_1__.timeInputToHrTime)(resource[_enums_PerformanceTimingNames__WEBPACK_IMPORTED_MODULE_0__.PerformanceTimingNames.RESPONSE_END]));
        return (resource.initiatorType.toLowerCase() ===
            (initiatorType || 'xmlhttprequest') &&
            resource.name === spanUrl &&
            resourceStartTime >= startTime &&
            resourceEndTime <= endTime);
    });
    if (filteredResources.length > 0) {
        filteredResources = filteredResources.filter(resource => {
            return !ignoredResources.has(resource);
        });
    }
    return filteredResources;
}
/**
 * Parses url using URL constructor or fallback to anchor element.
 * @param url
 */
function parseUrl(url) {
    if (typeof URL === 'function') {
        return new URL(url, typeof document !== 'undefined'
            ? document.baseURI
            : typeof location !== 'undefined' // Some JS runtimes (e.g. Deno) don't define this
                ? location.href
                : undefined);
    }
    const element = getUrlNormalizingAnchor();
    element.href = url;
    return element;
}
/**
 * Parses url using URL constructor or fallback to anchor element and serialize
 * it to a string.
 *
 * Performs the steps described in https://html.spec.whatwg.org/multipage/urls-and-fetching.html#parse-a-url
 *
 * @param url
 */
function normalizeUrl(url) {
    const urlLike = parseUrl(url);
    return urlLike.href;
}
/**
 * Get element XPath
 * @param target - target element
 * @param optimised - when id attribute of element is present the xpath can be
 * simplified to contain id
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function getElementXPath(target, optimised) {
    if (target.nodeType === Node.DOCUMENT_NODE) {
        return '/';
    }
    const targetValue = getNodeValue(target, optimised);
    if (optimised && targetValue.indexOf('@id') > 0) {
        return targetValue;
    }
    let xpath = '';
    if (target.parentNode) {
        xpath += getElementXPath(target.parentNode, false);
    }
    xpath += targetValue;
    return xpath;
}
/**
 * get node index within the siblings
 * @param target
 */
function getNodeIndex(target) {
    if (!target.parentNode) {
        return 0;
    }
    const allowedTypes = [target.nodeType];
    if (target.nodeType === Node.CDATA_SECTION_NODE) {
        allowedTypes.push(Node.TEXT_NODE);
    }
    let elements = Array.from(target.parentNode.childNodes);
    elements = elements.filter((element) => {
        const localName = element.localName;
        return (allowedTypes.indexOf(element.nodeType) >= 0 &&
            localName === target.localName);
    });
    if (elements.length >= 1) {
        return elements.indexOf(target) + 1; // xpath starts from 1
    }
    // if there are no other similar child xpath doesn't need index
    return 0;
}
/**
 * get node value for xpath
 * @param target
 * @param optimised
 */
function getNodeValue(target, optimised) {
    const nodeType = target.nodeType;
    const index = getNodeIndex(target);
    let nodeValue = '';
    if (nodeType === Node.ELEMENT_NODE) {
        const id = target.getAttribute('id');
        if (optimised && id) {
            return `//*[@id="${id}"]`;
        }
        nodeValue = target.localName;
    }
    else if (nodeType === Node.TEXT_NODE ||
        nodeType === Node.CDATA_SECTION_NODE) {
        nodeValue = 'text()';
    }
    else if (nodeType === Node.COMMENT_NODE) {
        nodeValue = 'comment()';
    }
    else {
        return '';
    }
    // if index is 1 it can be omitted in xpath
    if (nodeValue && index > 1) {
        return `/${nodeValue}[${index}]`;
    }
    return `/${nodeValue}`;
}
/**
 * Checks if trace headers should be propagated
 * @param spanUrl
 * @private
 */
function shouldPropagateTraceHeaders(spanUrl, propagateTraceHeaderCorsUrls) {
    let propagateTraceHeaderUrls = propagateTraceHeaderCorsUrls || [];
    if (typeof propagateTraceHeaderUrls === 'string' ||
        propagateTraceHeaderUrls instanceof RegExp) {
        propagateTraceHeaderUrls = [propagateTraceHeaderUrls];
    }
    const parsedSpanUrl = parseUrl(spanUrl);
    if (parsedSpanUrl.origin === getOrigin()) {
        return true;
    }
    else {
        return propagateTraceHeaderUrls.some(propagateTraceHeaderUrl => (0,_opentelemetry_core__WEBPACK_IMPORTED_MODULE_2__.urlMatches)(spanUrl, propagateTraceHeaderUrl));
    }
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/semantic-conventions/build/esm/stable_attributes.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED: () => (/* binding */ ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED),
/* harmony export */   ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED: () => (/* binding */ ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED),
/* harmony export */   ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED: () => (/* binding */ ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED),
/* harmony export */   ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED: () => (/* binding */ ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED),
/* harmony export */   ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED: () => (/* binding */ ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED),
/* harmony export */   ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER: () => (/* binding */ ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER),
/* harmony export */   ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER: () => (/* binding */ ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER),
/* harmony export */   ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED: () => (/* binding */ ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED),
/* harmony export */   ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE: () => (/* binding */ ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE),
/* harmony export */   ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS: () => (/* binding */ ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS),
/* harmony export */   ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT: () => (/* binding */ ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT),
/* harmony export */   ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE: () => (/* binding */ ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE),
/* harmony export */   ATTR_ASPNETCORE_RATE_LIMITING_POLICY: () => (/* binding */ ATTR_ASPNETCORE_RATE_LIMITING_POLICY),
/* harmony export */   ATTR_ASPNETCORE_RATE_LIMITING_RESULT: () => (/* binding */ ATTR_ASPNETCORE_RATE_LIMITING_RESULT),
/* harmony export */   ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED: () => (/* binding */ ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED),
/* harmony export */   ATTR_ASPNETCORE_ROUTING_IS_FALLBACK: () => (/* binding */ ATTR_ASPNETCORE_ROUTING_IS_FALLBACK),
/* harmony export */   ATTR_ASPNETCORE_ROUTING_MATCH_STATUS: () => (/* binding */ ATTR_ASPNETCORE_ROUTING_MATCH_STATUS),
/* harmony export */   ATTR_ASPNETCORE_USER_IS_AUTHENTICATED: () => (/* binding */ ATTR_ASPNETCORE_USER_IS_AUTHENTICATED),
/* harmony export */   ATTR_CLIENT_ADDRESS: () => (/* binding */ ATTR_CLIENT_ADDRESS),
/* harmony export */   ATTR_CLIENT_PORT: () => (/* binding */ ATTR_CLIENT_PORT),
/* harmony export */   ATTR_CODE_COLUMN_NUMBER: () => (/* binding */ ATTR_CODE_COLUMN_NUMBER),
/* harmony export */   ATTR_CODE_FILE_PATH: () => (/* binding */ ATTR_CODE_FILE_PATH),
/* harmony export */   ATTR_CODE_FUNCTION_NAME: () => (/* binding */ ATTR_CODE_FUNCTION_NAME),
/* harmony export */   ATTR_CODE_LINE_NUMBER: () => (/* binding */ ATTR_CODE_LINE_NUMBER),
/* harmony export */   ATTR_CODE_STACKTRACE: () => (/* binding */ ATTR_CODE_STACKTRACE),
/* harmony export */   ATTR_DB_COLLECTION_NAME: () => (/* binding */ ATTR_DB_COLLECTION_NAME),
/* harmony export */   ATTR_DB_NAMESPACE: () => (/* binding */ ATTR_DB_NAMESPACE),
/* harmony export */   ATTR_DB_OPERATION_BATCH_SIZE: () => (/* binding */ ATTR_DB_OPERATION_BATCH_SIZE),
/* harmony export */   ATTR_DB_OPERATION_NAME: () => (/* binding */ ATTR_DB_OPERATION_NAME),
/* harmony export */   ATTR_DB_QUERY_SUMMARY: () => (/* binding */ ATTR_DB_QUERY_SUMMARY),
/* harmony export */   ATTR_DB_QUERY_TEXT: () => (/* binding */ ATTR_DB_QUERY_TEXT),
/* harmony export */   ATTR_DB_RESPONSE_STATUS_CODE: () => (/* binding */ ATTR_DB_RESPONSE_STATUS_CODE),
/* harmony export */   ATTR_DB_STORED_PROCEDURE_NAME: () => (/* binding */ ATTR_DB_STORED_PROCEDURE_NAME),
/* harmony export */   ATTR_DB_SYSTEM_NAME: () => (/* binding */ ATTR_DB_SYSTEM_NAME),
/* harmony export */   ATTR_DOTNET_GC_HEAP_GENERATION: () => (/* binding */ ATTR_DOTNET_GC_HEAP_GENERATION),
/* harmony export */   ATTR_ERROR_TYPE: () => (/* binding */ ATTR_ERROR_TYPE),
/* harmony export */   ATTR_EXCEPTION_ESCAPED: () => (/* binding */ ATTR_EXCEPTION_ESCAPED),
/* harmony export */   ATTR_EXCEPTION_MESSAGE: () => (/* binding */ ATTR_EXCEPTION_MESSAGE),
/* harmony export */   ATTR_EXCEPTION_STACKTRACE: () => (/* binding */ ATTR_EXCEPTION_STACKTRACE),
/* harmony export */   ATTR_EXCEPTION_TYPE: () => (/* binding */ ATTR_EXCEPTION_TYPE),
/* harmony export */   ATTR_HTTP_REQUEST_HEADER: () => (/* binding */ ATTR_HTTP_REQUEST_HEADER),
/* harmony export */   ATTR_HTTP_REQUEST_METHOD: () => (/* binding */ ATTR_HTTP_REQUEST_METHOD),
/* harmony export */   ATTR_HTTP_REQUEST_METHOD_ORIGINAL: () => (/* binding */ ATTR_HTTP_REQUEST_METHOD_ORIGINAL),
/* harmony export */   ATTR_HTTP_REQUEST_RESEND_COUNT: () => (/* binding */ ATTR_HTTP_REQUEST_RESEND_COUNT),
/* harmony export */   ATTR_HTTP_RESPONSE_HEADER: () => (/* binding */ ATTR_HTTP_RESPONSE_HEADER),
/* harmony export */   ATTR_HTTP_RESPONSE_STATUS_CODE: () => (/* binding */ ATTR_HTTP_RESPONSE_STATUS_CODE),
/* harmony export */   ATTR_HTTP_ROUTE: () => (/* binding */ ATTR_HTTP_ROUTE),
/* harmony export */   ATTR_JVM_GC_ACTION: () => (/* binding */ ATTR_JVM_GC_ACTION),
/* harmony export */   ATTR_JVM_GC_NAME: () => (/* binding */ ATTR_JVM_GC_NAME),
/* harmony export */   ATTR_JVM_MEMORY_POOL_NAME: () => (/* binding */ ATTR_JVM_MEMORY_POOL_NAME),
/* harmony export */   ATTR_JVM_MEMORY_TYPE: () => (/* binding */ ATTR_JVM_MEMORY_TYPE),
/* harmony export */   ATTR_JVM_THREAD_DAEMON: () => (/* binding */ ATTR_JVM_THREAD_DAEMON),
/* harmony export */   ATTR_JVM_THREAD_STATE: () => (/* binding */ ATTR_JVM_THREAD_STATE),
/* harmony export */   ATTR_NETWORK_LOCAL_ADDRESS: () => (/* binding */ ATTR_NETWORK_LOCAL_ADDRESS),
/* harmony export */   ATTR_NETWORK_LOCAL_PORT: () => (/* binding */ ATTR_NETWORK_LOCAL_PORT),
/* harmony export */   ATTR_NETWORK_PEER_ADDRESS: () => (/* binding */ ATTR_NETWORK_PEER_ADDRESS),
/* harmony export */   ATTR_NETWORK_PEER_PORT: () => (/* binding */ ATTR_NETWORK_PEER_PORT),
/* harmony export */   ATTR_NETWORK_PROTOCOL_NAME: () => (/* binding */ ATTR_NETWORK_PROTOCOL_NAME),
/* harmony export */   ATTR_NETWORK_PROTOCOL_VERSION: () => (/* binding */ ATTR_NETWORK_PROTOCOL_VERSION),
/* harmony export */   ATTR_NETWORK_TRANSPORT: () => (/* binding */ ATTR_NETWORK_TRANSPORT),
/* harmony export */   ATTR_NETWORK_TYPE: () => (/* binding */ ATTR_NETWORK_TYPE),
/* harmony export */   ATTR_OTEL_SCOPE_NAME: () => (/* binding */ ATTR_OTEL_SCOPE_NAME),
/* harmony export */   ATTR_OTEL_SCOPE_VERSION: () => (/* binding */ ATTR_OTEL_SCOPE_VERSION),
/* harmony export */   ATTR_OTEL_STATUS_CODE: () => (/* binding */ ATTR_OTEL_STATUS_CODE),
/* harmony export */   ATTR_OTEL_STATUS_DESCRIPTION: () => (/* binding */ ATTR_OTEL_STATUS_DESCRIPTION),
/* harmony export */   ATTR_SERVER_ADDRESS: () => (/* binding */ ATTR_SERVER_ADDRESS),
/* harmony export */   ATTR_SERVER_PORT: () => (/* binding */ ATTR_SERVER_PORT),
/* harmony export */   ATTR_SERVICE_NAME: () => (/* binding */ ATTR_SERVICE_NAME),
/* harmony export */   ATTR_SERVICE_VERSION: () => (/* binding */ ATTR_SERVICE_VERSION),
/* harmony export */   ATTR_SIGNALR_CONNECTION_STATUS: () => (/* binding */ ATTR_SIGNALR_CONNECTION_STATUS),
/* harmony export */   ATTR_SIGNALR_TRANSPORT: () => (/* binding */ ATTR_SIGNALR_TRANSPORT),
/* harmony export */   ATTR_TELEMETRY_SDK_LANGUAGE: () => (/* binding */ ATTR_TELEMETRY_SDK_LANGUAGE),
/* harmony export */   ATTR_TELEMETRY_SDK_NAME: () => (/* binding */ ATTR_TELEMETRY_SDK_NAME),
/* harmony export */   ATTR_TELEMETRY_SDK_VERSION: () => (/* binding */ ATTR_TELEMETRY_SDK_VERSION),
/* harmony export */   ATTR_URL_FRAGMENT: () => (/* binding */ ATTR_URL_FRAGMENT),
/* harmony export */   ATTR_URL_FULL: () => (/* binding */ ATTR_URL_FULL),
/* harmony export */   ATTR_URL_PATH: () => (/* binding */ ATTR_URL_PATH),
/* harmony export */   ATTR_URL_QUERY: () => (/* binding */ ATTR_URL_QUERY),
/* harmony export */   ATTR_URL_SCHEME: () => (/* binding */ ATTR_URL_SCHEME),
/* harmony export */   ATTR_USER_AGENT_ORIGINAL: () => (/* binding */ ATTR_USER_AGENT_ORIGINAL),
/* harmony export */   DB_SYSTEM_NAME_VALUE_MARIADB: () => (/* binding */ DB_SYSTEM_NAME_VALUE_MARIADB),
/* harmony export */   DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER: () => (/* binding */ DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER),
/* harmony export */   DB_SYSTEM_NAME_VALUE_MYSQL: () => (/* binding */ DB_SYSTEM_NAME_VALUE_MYSQL),
/* harmony export */   DB_SYSTEM_NAME_VALUE_POSTGRESQL: () => (/* binding */ DB_SYSTEM_NAME_VALUE_POSTGRESQL),
/* harmony export */   DOTNET_GC_HEAP_GENERATION_VALUE_GEN0: () => (/* binding */ DOTNET_GC_HEAP_GENERATION_VALUE_GEN0),
/* harmony export */   DOTNET_GC_HEAP_GENERATION_VALUE_GEN1: () => (/* binding */ DOTNET_GC_HEAP_GENERATION_VALUE_GEN1),
/* harmony export */   DOTNET_GC_HEAP_GENERATION_VALUE_GEN2: () => (/* binding */ DOTNET_GC_HEAP_GENERATION_VALUE_GEN2),
/* harmony export */   DOTNET_GC_HEAP_GENERATION_VALUE_LOH: () => (/* binding */ DOTNET_GC_HEAP_GENERATION_VALUE_LOH),
/* harmony export */   DOTNET_GC_HEAP_GENERATION_VALUE_POH: () => (/* binding */ DOTNET_GC_HEAP_GENERATION_VALUE_POH),
/* harmony export */   ERROR_TYPE_VALUE_OTHER: () => (/* binding */ ERROR_TYPE_VALUE_OTHER),
/* harmony export */   HTTP_REQUEST_METHOD_VALUE_CONNECT: () => (/* binding */ HTTP_REQUEST_METHOD_VALUE_CONNECT),
/* harmony export */   HTTP_REQUEST_METHOD_VALUE_DELETE: () => (/* binding */ HTTP_REQUEST_METHOD_VALUE_DELETE),
/* harmony export */   HTTP_REQUEST_METHOD_VALUE_GET: () => (/* binding */ HTTP_REQUEST_METHOD_VALUE_GET),
/* harmony export */   HTTP_REQUEST_METHOD_VALUE_HEAD: () => (/* binding */ HTTP_REQUEST_METHOD_VALUE_HEAD),
/* harmony export */   HTTP_REQUEST_METHOD_VALUE_OPTIONS: () => (/* binding */ HTTP_REQUEST_METHOD_VALUE_OPTIONS),
/* harmony export */   HTTP_REQUEST_METHOD_VALUE_OTHER: () => (/* binding */ HTTP_REQUEST_METHOD_VALUE_OTHER),
/* harmony export */   HTTP_REQUEST_METHOD_VALUE_PATCH: () => (/* binding */ HTTP_REQUEST_METHOD_VALUE_PATCH),
/* harmony export */   HTTP_REQUEST_METHOD_VALUE_POST: () => (/* binding */ HTTP_REQUEST_METHOD_VALUE_POST),
/* harmony export */   HTTP_REQUEST_METHOD_VALUE_PUT: () => (/* binding */ HTTP_REQUEST_METHOD_VALUE_PUT),
/* harmony export */   HTTP_REQUEST_METHOD_VALUE_TRACE: () => (/* binding */ HTTP_REQUEST_METHOD_VALUE_TRACE),
/* harmony export */   JVM_MEMORY_TYPE_VALUE_HEAP: () => (/* binding */ JVM_MEMORY_TYPE_VALUE_HEAP),
/* harmony export */   JVM_MEMORY_TYPE_VALUE_NON_HEAP: () => (/* binding */ JVM_MEMORY_TYPE_VALUE_NON_HEAP),
/* harmony export */   JVM_THREAD_STATE_VALUE_BLOCKED: () => (/* binding */ JVM_THREAD_STATE_VALUE_BLOCKED),
/* harmony export */   JVM_THREAD_STATE_VALUE_NEW: () => (/* binding */ JVM_THREAD_STATE_VALUE_NEW),
/* harmony export */   JVM_THREAD_STATE_VALUE_RUNNABLE: () => (/* binding */ JVM_THREAD_STATE_VALUE_RUNNABLE),
/* harmony export */   JVM_THREAD_STATE_VALUE_TERMINATED: () => (/* binding */ JVM_THREAD_STATE_VALUE_TERMINATED),
/* harmony export */   JVM_THREAD_STATE_VALUE_TIMED_WAITING: () => (/* binding */ JVM_THREAD_STATE_VALUE_TIMED_WAITING),
/* harmony export */   JVM_THREAD_STATE_VALUE_WAITING: () => (/* binding */ JVM_THREAD_STATE_VALUE_WAITING),
/* harmony export */   NETWORK_TRANSPORT_VALUE_PIPE: () => (/* binding */ NETWORK_TRANSPORT_VALUE_PIPE),
/* harmony export */   NETWORK_TRANSPORT_VALUE_QUIC: () => (/* binding */ NETWORK_TRANSPORT_VALUE_QUIC),
/* harmony export */   NETWORK_TRANSPORT_VALUE_TCP: () => (/* binding */ NETWORK_TRANSPORT_VALUE_TCP),
/* harmony export */   NETWORK_TRANSPORT_VALUE_UDP: () => (/* binding */ NETWORK_TRANSPORT_VALUE_UDP),
/* harmony export */   NETWORK_TRANSPORT_VALUE_UNIX: () => (/* binding */ NETWORK_TRANSPORT_VALUE_UNIX),
/* harmony export */   NETWORK_TYPE_VALUE_IPV4: () => (/* binding */ NETWORK_TYPE_VALUE_IPV4),
/* harmony export */   NETWORK_TYPE_VALUE_IPV6: () => (/* binding */ NETWORK_TYPE_VALUE_IPV6),
/* harmony export */   OTEL_STATUS_CODE_VALUE_ERROR: () => (/* binding */ OTEL_STATUS_CODE_VALUE_ERROR),
/* harmony export */   OTEL_STATUS_CODE_VALUE_OK: () => (/* binding */ OTEL_STATUS_CODE_VALUE_OK),
/* harmony export */   SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN: () => (/* binding */ SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN),
/* harmony export */   SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE: () => (/* binding */ SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE),
/* harmony export */   SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT: () => (/* binding */ SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT),
/* harmony export */   SIGNALR_TRANSPORT_VALUE_LONG_POLLING: () => (/* binding */ SIGNALR_TRANSPORT_VALUE_LONG_POLLING),
/* harmony export */   SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS: () => (/* binding */ SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS),
/* harmony export */   SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS: () => (/* binding */ SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS),
/* harmony export */   TELEMETRY_SDK_LANGUAGE_VALUE_CPP: () => (/* binding */ TELEMETRY_SDK_LANGUAGE_VALUE_CPP),
/* harmony export */   TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET: () => (/* binding */ TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET),
/* harmony export */   TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG: () => (/* binding */ TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG),
/* harmony export */   TELEMETRY_SDK_LANGUAGE_VALUE_GO: () => (/* binding */ TELEMETRY_SDK_LANGUAGE_VALUE_GO),
/* harmony export */   TELEMETRY_SDK_LANGUAGE_VALUE_JAVA: () => (/* binding */ TELEMETRY_SDK_LANGUAGE_VALUE_JAVA),
/* harmony export */   TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS: () => (/* binding */ TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS),
/* harmony export */   TELEMETRY_SDK_LANGUAGE_VALUE_PHP: () => (/* binding */ TELEMETRY_SDK_LANGUAGE_VALUE_PHP),
/* harmony export */   TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON: () => (/* binding */ TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON),
/* harmony export */   TELEMETRY_SDK_LANGUAGE_VALUE_RUBY: () => (/* binding */ TELEMETRY_SDK_LANGUAGE_VALUE_RUBY),
/* harmony export */   TELEMETRY_SDK_LANGUAGE_VALUE_RUST: () => (/* binding */ TELEMETRY_SDK_LANGUAGE_VALUE_RUST),
/* harmony export */   TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT: () => (/* binding */ TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT),
/* harmony export */   TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS: () => (/* binding */ TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//----------------------------------------------------------------------------------------------------------
// DO NOT EDIT, this is an Auto-generated file from scripts/semconv/templates/registry/stable/attributes.ts.j2
//----------------------------------------------------------------------------------------------------------
/**
 * ASP.NET Core exception middleware handling result.
 *
 * @example handled
 * @example unhandled
 */
const ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT = 'aspnetcore.diagnostics.exception.result';
/**
 * Enum value "aborted" for attribute {@link ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT}.
 *
 * Exception handling didn't run because the request was aborted.
 */
const ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED = "aborted";
/**
 * Enum value "handled" for attribute {@link ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT}.
 *
 * Exception was handled by the exception handling middleware.
 */
const ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED = "handled";
/**
 * Enum value "skipped" for attribute {@link ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT}.
 *
 * Exception handling was skipped because the response had started.
 */
const ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED = "skipped";
/**
 * Enum value "unhandled" for attribute {@link ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT}.
 *
 * Exception was not handled by the exception handling middleware.
 */
const ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED = "unhandled";
/**
 * Full type name of the [`IExceptionHandler`](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.diagnostics.iexceptionhandler) implementation that handled the exception.
 *
 * @example Contoso.MyHandler
 */
const ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE = 'aspnetcore.diagnostics.handler.type';
/**
 * Rate limiting policy name.
 *
 * @example fixed
 * @example sliding
 * @example token
 */
const ATTR_ASPNETCORE_RATE_LIMITING_POLICY = 'aspnetcore.rate_limiting.policy';
/**
 * Rate-limiting result, shows whether the lease was acquired or contains a rejection reason
 *
 * @example acquired
 * @example request_canceled
 */
const ATTR_ASPNETCORE_RATE_LIMITING_RESULT = 'aspnetcore.rate_limiting.result';
/**
 * Enum value "acquired" for attribute {@link ATTR_ASPNETCORE_RATE_LIMITING_RESULT}.
 *
 * Lease was acquired
 */
const ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED = "acquired";
/**
 * Enum value "endpoint_limiter" for attribute {@link ATTR_ASPNETCORE_RATE_LIMITING_RESULT}.
 *
 * Lease request was rejected by the endpoint limiter
 */
const ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER = "endpoint_limiter";
/**
 * Enum value "global_limiter" for attribute {@link ATTR_ASPNETCORE_RATE_LIMITING_RESULT}.
 *
 * Lease request was rejected by the global limiter
 */
const ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER = "global_limiter";
/**
 * Enum value "request_canceled" for attribute {@link ATTR_ASPNETCORE_RATE_LIMITING_RESULT}.
 *
 * Lease request was canceled
 */
const ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED = "request_canceled";
/**
 * Flag indicating if request was handled by the application pipeline.
 *
 * @example true
 */
const ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED = 'aspnetcore.request.is_unhandled';
/**
 * A value that indicates whether the matched route is a fallback route.
 *
 * @example true
 */
const ATTR_ASPNETCORE_ROUTING_IS_FALLBACK = 'aspnetcore.routing.is_fallback';
/**
 * Match result - success or failure
 *
 * @example success
 * @example failure
 */
const ATTR_ASPNETCORE_ROUTING_MATCH_STATUS = 'aspnetcore.routing.match_status';
/**
 * Enum value "failure" for attribute {@link ATTR_ASPNETCORE_ROUTING_MATCH_STATUS}.
 *
 * Match failed
 */
const ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE = "failure";
/**
 * Enum value "success" for attribute {@link ATTR_ASPNETCORE_ROUTING_MATCH_STATUS}.
 *
 * Match succeeded
 */
const ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS = "success";
/**
 * A value that indicates whether the user is authenticated.
 *
 * @example true
 */
const ATTR_ASPNETCORE_USER_IS_AUTHENTICATED = 'aspnetcore.user.is_authenticated';
/**
 * Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
 *
 * @example client.example.com
 * @example 10.1.2.80
 * @example /tmp/my.sock
 *
 * @note When observed from the server side, and when communicating through an intermediary, `client.address` **SHOULD** represent the client address behind any intermediaries,  for example proxies, if it's available.
 */
const ATTR_CLIENT_ADDRESS = 'client.address';
/**
 * Client port number.
 *
 * @example 65123
 *
 * @note When observed from the server side, and when communicating through an intermediary, `client.port` **SHOULD** represent the client port behind any intermediaries,  for example proxies, if it's available.
 */
const ATTR_CLIENT_PORT = 'client.port';
/**
 * The column number in `code.file.path` best representing the operation. It **SHOULD** point within the code unit named in `code.function.name`. This attribute **MUST NOT** be used on the Profile signal since the data is already captured in 'message Line'. This constraint is imposed to prevent redundancy and maintain data integrity.
 *
 * @example 16
 */
const ATTR_CODE_COLUMN_NUMBER = 'code.column.number';
/**
 * The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path). This attribute **MUST NOT** be used on the Profile signal since the data is already captured in 'message Function'. This constraint is imposed to prevent redundancy and maintain data integrity.
 *
 * @example "/usr/local/MyApplication/content_root/app/index.php"
 */
const ATTR_CODE_FILE_PATH = 'code.file.path';
/**
 * The method or function fully-qualified name without arguments. The value should fit the natural representation of the language runtime, which is also likely the same used within `code.stacktrace` attribute value. This attribute **MUST NOT** be used on the Profile signal since the data is already captured in 'message Function'. This constraint is imposed to prevent redundancy and maintain data integrity.
 *
 * @example com.example.MyHttpService.serveRequest
 * @example GuzzleHttp\\Client::transfer
 * @example fopen
 *
 * @note Values and format depends on each language runtime, thus it is impossible to provide an exhaustive list of examples.
 * The values are usually the same (or prefixes of) the ones found in native stack trace representation stored in
 * `code.stacktrace` without information on arguments.
 *
 * Examples:
 *
 *   - Java method: `com.example.MyHttpService.serveRequest`
 *   - Java anonymous class method: `com.mycompany.Main$1.myMethod`
 *   - Java lambda method: `com.mycompany.Main$$Lambda/0x0000748ae4149c00.myMethod`
 *   - PHP function: `GuzzleHttp\Client::transfer`
 *   - Go function: `github.com/my/repo/pkg.foo.func5`
 *   - Elixir: `OpenTelemetry.Ctx.new`
 *   - Erlang: `opentelemetry_ctx:new`
 *   - Rust: `playground::my_module::my_cool_func`
 *   - C function: `fopen`
 */
const ATTR_CODE_FUNCTION_NAME = 'code.function.name';
/**
 * The line number in `code.file.path` best representing the operation. It **SHOULD** point within the code unit named in `code.function.name`. This attribute **MUST NOT** be used on the Profile signal since the data is already captured in 'message Line'. This constraint is imposed to prevent redundancy and maintain data integrity.
 *
 * @example 42
 */
const ATTR_CODE_LINE_NUMBER = 'code.line.number';
/**
 * A stacktrace as a string in the natural representation for the language runtime. The representation is identical to [`exception.stacktrace`](/docs/exceptions/exceptions-spans.md#stacktrace-representation). This attribute **MUST NOT** be used on the Profile signal since the data is already captured in 'message Location'. This constraint is imposed to prevent redundancy and maintain data integrity.
 *
 * @example "at com.example.GenerateTrace.methodB(GenerateTrace.java:13)\\n at com.example.GenerateTrace.methodA(GenerateTrace.java:9)\\n at com.example.GenerateTrace.main(GenerateTrace.java:5)\\n"
 */
const ATTR_CODE_STACKTRACE = 'code.stacktrace';
/**
 * The name of a collection (table, container) within the database.
 *
 * @example public.users
 * @example customers
 *
 * @note It is **RECOMMENDED** to capture the value as provided by the application
 * without attempting to do any case normalization.
 *
 * The collection name **SHOULD NOT** be extracted from `db.query.text`,
 * when the database system supports query text with multiple collections
 * in non-batch operations.
 *
 * For batch operations, if the individual operations are known to have the same
 * collection name then that collection name **SHOULD** be used.
 */
const ATTR_DB_COLLECTION_NAME = 'db.collection.name';
/**
 * The name of the database, fully qualified within the server address and port.
 *
 * @example customers
 * @example test.users
 *
 * @note If a database system has multiple namespace components, they **SHOULD** be concatenated from the most general to the most specific namespace component, using `|` as a separator between the components. Any missing components (and their associated separators) **SHOULD** be omitted.
 * Semantic conventions for individual database systems **SHOULD** document what `db.namespace` means in the context of that system.
 * It is **RECOMMENDED** to capture the value as provided by the application without attempting to do any case normalization.
 */
const ATTR_DB_NAMESPACE = 'db.namespace';
/**
 * The number of queries included in a batch operation.
 *
 * @example 2
 * @example 3
 * @example 4
 *
 * @note Operations are only considered batches when they contain two or more operations, and so `db.operation.batch.size` **SHOULD** never be `1`.
 */
const ATTR_DB_OPERATION_BATCH_SIZE = 'db.operation.batch.size';
/**
 * The name of the operation or command being executed.
 *
 * @example findAndModify
 * @example HMSET
 * @example SELECT
 *
 * @note It is **RECOMMENDED** to capture the value as provided by the application
 * without attempting to do any case normalization.
 *
 * The operation name **SHOULD NOT** be extracted from `db.query.text`,
 * when the database system supports query text with multiple operations
 * in non-batch operations.
 *
 * If spaces can occur in the operation name, multiple consecutive spaces
 * **SHOULD** be normalized to a single space.
 *
 * For batch operations, if the individual operations are known to have the same operation name
 * then that operation name **SHOULD** be used prepended by `BATCH `,
 * otherwise `db.operation.name` **SHOULD** be `BATCH` or some other database
 * system specific term if more applicable.
 */
const ATTR_DB_OPERATION_NAME = 'db.operation.name';
/**
 * Low cardinality summary of a database query.
 *
 * @example SELECT wuser_table
 * @example INSERT shipping_details SELECT orders
 * @example get user by id
 *
 * @note The query summary describes a class of database queries and is useful
 * as a grouping key, especially when analyzing telemetry for database
 * calls involving complex queries.
 *
 * Summary may be available to the instrumentation through
 * instrumentation hooks or other means. If it is not available, instrumentations
 * that support query parsing **SHOULD** generate a summary following
 * [Generating query summary](/docs/database/database-spans.md#generating-a-summary-of-the-query)
 * section.
 */
const ATTR_DB_QUERY_SUMMARY = 'db.query.summary';
/**
 * The database query being executed.
 *
 * @example SELECT * FROM wuser_table where username = ?
 * @example SET mykey ?
 *
 * @note For sanitization see [Sanitization of `db.query.text`](/docs/database/database-spans.md#sanitization-of-dbquerytext).
 * For batch operations, if the individual operations are known to have the same query text then that query text **SHOULD** be used, otherwise all of the individual query texts **SHOULD** be concatenated with separator `; ` or some other database system specific separator if more applicable.
 * Parameterized query text **SHOULD NOT** be sanitized. Even though parameterized query text can potentially have sensitive data, by using a parameterized query the user is giving a strong signal that any sensitive data will be passed as parameter values, and the benefit to observability of capturing the static part of the query text by default outweighs the risk.
 */
const ATTR_DB_QUERY_TEXT = 'db.query.text';
/**
 * Database response status code.
 *
 * @example 102
 * @example ORA-17002
 * @example 08P01
 * @example 404
 *
 * @note The status code returned by the database. Usually it represents an error code, but may also represent partial success, warning, or differentiate between various types of successful outcomes.
 * Semantic conventions for individual database systems **SHOULD** document what `db.response.status_code` means in the context of that system.
 */
const ATTR_DB_RESPONSE_STATUS_CODE = 'db.response.status_code';
/**
 * The name of a stored procedure within the database.
 *
 * @example GetCustomer
 *
 * @note It is **RECOMMENDED** to capture the value as provided by the application
 * without attempting to do any case normalization.
 *
 * For batch operations, if the individual operations are known to have the same
 * stored procedure name then that stored procedure name **SHOULD** be used.
 */
const ATTR_DB_STORED_PROCEDURE_NAME = 'db.stored_procedure.name';
/**
 * The database management system (DBMS) product as identified by the client instrumentation.
 *
 * @note The actual DBMS may differ from the one identified by the client. For example, when using PostgreSQL client libraries to connect to a CockroachDB, the `db.system.name` is set to `postgresql` based on the instrumentation's best knowledge.
 */
const ATTR_DB_SYSTEM_NAME = 'db.system.name';
/**
 * Enum value "mariadb" for attribute {@link ATTR_DB_SYSTEM_NAME}.
 *
 * [MariaDB](https://mariadb.org/)
 */
const DB_SYSTEM_NAME_VALUE_MARIADB = "mariadb";
/**
 * Enum value "microsoft.sql_server" for attribute {@link ATTR_DB_SYSTEM_NAME}.
 *
 * [Microsoft SQL Server](https://www.microsoft.com/sql-server)
 */
const DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER = "microsoft.sql_server";
/**
 * Enum value "mysql" for attribute {@link ATTR_DB_SYSTEM_NAME}.
 *
 * [MySQL](https://www.mysql.com/)
 */
const DB_SYSTEM_NAME_VALUE_MYSQL = "mysql";
/**
 * Enum value "postgresql" for attribute {@link ATTR_DB_SYSTEM_NAME}.
 *
 * [PostgreSQL](https://www.postgresql.org/)
 */
const DB_SYSTEM_NAME_VALUE_POSTGRESQL = "postgresql";
/**
 * Name of the garbage collector managed heap generation.
 *
 * @example gen0
 * @example gen1
 * @example gen2
 */
const ATTR_DOTNET_GC_HEAP_GENERATION = 'dotnet.gc.heap.generation';
/**
 * Enum value "gen0" for attribute {@link ATTR_DOTNET_GC_HEAP_GENERATION}.
 *
 * Generation 0
 */
const DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 = "gen0";
/**
 * Enum value "gen1" for attribute {@link ATTR_DOTNET_GC_HEAP_GENERATION}.
 *
 * Generation 1
 */
const DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 = "gen1";
/**
 * Enum value "gen2" for attribute {@link ATTR_DOTNET_GC_HEAP_GENERATION}.
 *
 * Generation 2
 */
const DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 = "gen2";
/**
 * Enum value "loh" for attribute {@link ATTR_DOTNET_GC_HEAP_GENERATION}.
 *
 * Large Object Heap
 */
const DOTNET_GC_HEAP_GENERATION_VALUE_LOH = "loh";
/**
 * Enum value "poh" for attribute {@link ATTR_DOTNET_GC_HEAP_GENERATION}.
 *
 * Pinned Object Heap
 */
const DOTNET_GC_HEAP_GENERATION_VALUE_POH = "poh";
/**
 * Describes a class of error the operation ended with.
 *
 * @example timeout
 * @example java.net.UnknownHostException
 * @example server_certificate_invalid
 * @example 500
 *
 * @note The `error.type` **SHOULD** be predictable, and **SHOULD** have low cardinality.
 *
 * When `error.type` is set to a type (e.g., an exception type), its
 * canonical class name identifying the type within the artifact **SHOULD** be used.
 *
 * Instrumentations **SHOULD** document the list of errors they report.
 *
 * The cardinality of `error.type` within one instrumentation library **SHOULD** be low.
 * Telemetry consumers that aggregate data from multiple instrumentation libraries and applications
 * should be prepared for `error.type` to have high cardinality at query time when no
 * additional filters are applied.
 *
 * If the operation has completed successfully, instrumentations **SHOULD NOT** set `error.type`.
 *
 * If a specific domain defines its own set of error identifiers (such as HTTP or gRPC status codes),
 * it's **RECOMMENDED** to:
 *
 *   - Use a domain-specific attribute
 *   - Set `error.type` to capture all errors, regardless of whether they are defined within the domain-specific set or not.
 */
const ATTR_ERROR_TYPE = 'error.type';
/**
 * Enum value "_OTHER" for attribute {@link ATTR_ERROR_TYPE}.
 *
 * A fallback error value to be used when the instrumentation doesn't define a custom value.
 */
const ERROR_TYPE_VALUE_OTHER = "_OTHER";
/**
 * Indicates that the exception is escaping the scope of the span.
 *
 * @deprecated It's no longer recommended to record exceptions that are handled and do not escape the scope of a span.
 */
const ATTR_EXCEPTION_ESCAPED = 'exception.escaped';
/**
 * The exception message.
 *
 * @example Division by zero
 * @example Can't convert 'int' object to str implicitly
 */
const ATTR_EXCEPTION_MESSAGE = 'exception.message';
/**
 * A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.
 *
 * @example "Exception in thread "main" java.lang.RuntimeException: Test exception\\n at com.example.GenerateTrace.methodB(GenerateTrace.java:13)\\n at com.example.GenerateTrace.methodA(GenerateTrace.java:9)\\n at com.example.GenerateTrace.main(GenerateTrace.java:5)\\n"
 */
const ATTR_EXCEPTION_STACKTRACE = 'exception.stacktrace';
/**
 * The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.
 *
 * @example java.net.ConnectException
 * @example OSError
 */
const ATTR_EXCEPTION_TYPE = 'exception.type';
/**
 * HTTP request headers, `<key>` being the normalized HTTP Header name (lowercase), the value being the header values.
 *
 * @example ["application/json"]
 * @example ["1.2.3.4", "1.2.3.5"]
 *
 * @note Instrumentations **SHOULD** require an explicit configuration of which headers are to be captured.
 * Including all request headers can be a security risk - explicit configuration helps avoid leaking sensitive information.
 *
 * The `User-Agent` header is already captured in the `user_agent.original` attribute.
 * Users **MAY** explicitly configure instrumentations to capture them even though it is not recommended.
 *
 * The attribute value **MUST** consist of either multiple header values as an array of strings
 * or a single-item array containing a possibly comma-concatenated string, depending on the way
 * the HTTP library provides access to headers.
 *
 * Examples:
 *
 *   - A header `Content-Type: application/json` **SHOULD** be recorded as the `http.request.header.content-type`
 *     attribute with value `["application/json"]`.
 *   - A header `X-Forwarded-For: 1.2.3.4, 1.2.3.5` **SHOULD** be recorded as the `http.request.header.x-forwarded-for`
 *     attribute with value `["1.2.3.4", "1.2.3.5"]` or `["1.2.3.4, 1.2.3.5"]` depending on the HTTP library.
 */
const ATTR_HTTP_REQUEST_HEADER = (key) => `http.request.header.${key}`;
/**
 * HTTP request method.
 *
 * @example GET
 * @example POST
 * @example HEAD
 *
 * @note HTTP request method value **SHOULD** be "known" to the instrumentation.
 * By default, this convention defines "known" methods as the ones listed in [RFC9110](https://www.rfc-editor.org/rfc/rfc9110.html#name-methods)
 * and the PATCH method defined in [RFC5789](https://www.rfc-editor.org/rfc/rfc5789.html).
 *
 * If the HTTP request method is not known to instrumentation, it **MUST** set the `http.request.method` attribute to `_OTHER`.
 *
 * If the HTTP instrumentation could end up converting valid HTTP request methods to `_OTHER`, then it **MUST** provide a way to override
 * the list of known HTTP methods. If this override is done via environment variable, then the environment variable **MUST** be named
 * OTEL_INSTRUMENTATION_HTTP_KNOWN_METHODS and support a comma-separated list of case-sensitive known HTTP methods
 * (this list **MUST** be a full override of the default known method, it is not a list of known methods in addition to the defaults).
 *
 * HTTP method names are case-sensitive and `http.request.method` attribute value **MUST** match a known HTTP method name exactly.
 * Instrumentations for specific web frameworks that consider HTTP methods to be case insensitive, **SHOULD** populate a canonical equivalent.
 * Tracing instrumentations that do so, **MUST** also set `http.request.method_original` to the original value.
 */
const ATTR_HTTP_REQUEST_METHOD = 'http.request.method';
/**
 * Enum value "_OTHER" for attribute {@link ATTR_HTTP_REQUEST_METHOD}.
 *
 * Any HTTP method that the instrumentation has no prior knowledge of.
 */
const HTTP_REQUEST_METHOD_VALUE_OTHER = "_OTHER";
/**
 * Enum value "CONNECT" for attribute {@link ATTR_HTTP_REQUEST_METHOD}.
 *
 * CONNECT method.
 */
const HTTP_REQUEST_METHOD_VALUE_CONNECT = "CONNECT";
/**
 * Enum value "DELETE" for attribute {@link ATTR_HTTP_REQUEST_METHOD}.
 *
 * DELETE method.
 */
const HTTP_REQUEST_METHOD_VALUE_DELETE = "DELETE";
/**
 * Enum value "GET" for attribute {@link ATTR_HTTP_REQUEST_METHOD}.
 *
 * GET method.
 */
const HTTP_REQUEST_METHOD_VALUE_GET = "GET";
/**
 * Enum value "HEAD" for attribute {@link ATTR_HTTP_REQUEST_METHOD}.
 *
 * HEAD method.
 */
const HTTP_REQUEST_METHOD_VALUE_HEAD = "HEAD";
/**
 * Enum value "OPTIONS" for attribute {@link ATTR_HTTP_REQUEST_METHOD}.
 *
 * OPTIONS method.
 */
const HTTP_REQUEST_METHOD_VALUE_OPTIONS = "OPTIONS";
/**
 * Enum value "PATCH" for attribute {@link ATTR_HTTP_REQUEST_METHOD}.
 *
 * PATCH method.
 */
const HTTP_REQUEST_METHOD_VALUE_PATCH = "PATCH";
/**
 * Enum value "POST" for attribute {@link ATTR_HTTP_REQUEST_METHOD}.
 *
 * POST method.
 */
const HTTP_REQUEST_METHOD_VALUE_POST = "POST";
/**
 * Enum value "PUT" for attribute {@link ATTR_HTTP_REQUEST_METHOD}.
 *
 * PUT method.
 */
const HTTP_REQUEST_METHOD_VALUE_PUT = "PUT";
/**
 * Enum value "TRACE" for attribute {@link ATTR_HTTP_REQUEST_METHOD}.
 *
 * TRACE method.
 */
const HTTP_REQUEST_METHOD_VALUE_TRACE = "TRACE";
/**
 * Original HTTP method sent by the client in the request line.
 *
 * @example GeT
 * @example ACL
 * @example foo
 */
const ATTR_HTTP_REQUEST_METHOD_ORIGINAL = 'http.request.method_original';
/**
 * The ordinal number of request resending attempt (for any reason, including redirects).
 *
 * @example 3
 *
 * @note The resend count **SHOULD** be updated each time an HTTP request gets resent by the client, regardless of what was the cause of the resending (e.g. redirection, authorization failure, 503 Server Unavailable, network issues, or any other).
 */
const ATTR_HTTP_REQUEST_RESEND_COUNT = 'http.request.resend_count';
/**
 * HTTP response headers, `<key>` being the normalized HTTP Header name (lowercase), the value being the header values.
 *
 * @example ["application/json"]
 * @example ["abc", "def"]
 *
 * @note Instrumentations **SHOULD** require an explicit configuration of which headers are to be captured.
 * Including all response headers can be a security risk - explicit configuration helps avoid leaking sensitive information.
 *
 * Users **MAY** explicitly configure instrumentations to capture them even though it is not recommended.
 *
 * The attribute value **MUST** consist of either multiple header values as an array of strings
 * or a single-item array containing a possibly comma-concatenated string, depending on the way
 * the HTTP library provides access to headers.
 *
 * Examples:
 *
 *   - A header `Content-Type: application/json` header **SHOULD** be recorded as the `http.request.response.content-type`
 *     attribute with value `["application/json"]`.
 *   - A header `My-custom-header: abc, def` header **SHOULD** be recorded as the `http.response.header.my-custom-header`
 *     attribute with value `["abc", "def"]` or `["abc, def"]` depending on the HTTP library.
 */
const ATTR_HTTP_RESPONSE_HEADER = (key) => `http.response.header.${key}`;
/**
 * [HTTP response status code](https://tools.ietf.org/html/rfc7231#section-6).
 *
 * @example 200
 */
const ATTR_HTTP_RESPONSE_STATUS_CODE = 'http.response.status_code';
/**
 * The matched route, that is, the path template in the format used by the respective server framework.
 *
 * @example /users/:userID?
 * @example {controller}/{action}/{id?}
 *
 * @note **MUST NOT** be populated when this is not supported by the HTTP server framework as the route attribute should have low-cardinality and the URI path can NOT substitute it.
 * **SHOULD** include the [application root](/docs/http/http-spans.md#http-server-definitions) if there is one.
 */
const ATTR_HTTP_ROUTE = 'http.route';
/**
 * Name of the garbage collector action.
 *
 * @example end of minor GC
 * @example end of major GC
 *
 * @note Garbage collector action is generally obtained via [GarbageCollectionNotificationInfo#getGcAction()](https://docs.oracle.com/en/java/javase/11/docs/api/jdk.management/com/sun/management/GarbageCollectionNotificationInfo.html#getGcAction()).
 */
const ATTR_JVM_GC_ACTION = 'jvm.gc.action';
/**
 * Name of the garbage collector.
 *
 * @example G1 Young Generation
 * @example G1 Old Generation
 *
 * @note Garbage collector name is generally obtained via [GarbageCollectionNotificationInfo#getGcName()](https://docs.oracle.com/en/java/javase/11/docs/api/jdk.management/com/sun/management/GarbageCollectionNotificationInfo.html#getGcName()).
 */
const ATTR_JVM_GC_NAME = 'jvm.gc.name';
/**
 * Name of the memory pool.
 *
 * @example G1 Old Gen
 * @example G1 Eden space
 * @example G1 Survivor Space
 *
 * @note Pool names are generally obtained via [MemoryPoolMXBean#getName()](https://docs.oracle.com/en/java/javase/11/docs/api/java.management/java/lang/management/MemoryPoolMXBean.html#getName()).
 */
const ATTR_JVM_MEMORY_POOL_NAME = 'jvm.memory.pool.name';
/**
 * The type of memory.
 *
 * @example heap
 * @example non_heap
 */
const ATTR_JVM_MEMORY_TYPE = 'jvm.memory.type';
/**
 * Enum value "heap" for attribute {@link ATTR_JVM_MEMORY_TYPE}.
 *
 * Heap memory.
 */
const JVM_MEMORY_TYPE_VALUE_HEAP = "heap";
/**
 * Enum value "non_heap" for attribute {@link ATTR_JVM_MEMORY_TYPE}.
 *
 * Non-heap memory
 */
const JVM_MEMORY_TYPE_VALUE_NON_HEAP = "non_heap";
/**
 * Whether the thread is daemon or not.
 */
const ATTR_JVM_THREAD_DAEMON = 'jvm.thread.daemon';
/**
 * State of the thread.
 *
 * @example runnable
 * @example blocked
 */
const ATTR_JVM_THREAD_STATE = 'jvm.thread.state';
/**
 * Enum value "blocked" for attribute {@link ATTR_JVM_THREAD_STATE}.
 *
 * A thread that is blocked waiting for a monitor lock is in this state.
 */
const JVM_THREAD_STATE_VALUE_BLOCKED = "blocked";
/**
 * Enum value "new" for attribute {@link ATTR_JVM_THREAD_STATE}.
 *
 * A thread that has not yet started is in this state.
 */
const JVM_THREAD_STATE_VALUE_NEW = "new";
/**
 * Enum value "runnable" for attribute {@link ATTR_JVM_THREAD_STATE}.
 *
 * A thread executing in the Java virtual machine is in this state.
 */
const JVM_THREAD_STATE_VALUE_RUNNABLE = "runnable";
/**
 * Enum value "terminated" for attribute {@link ATTR_JVM_THREAD_STATE}.
 *
 * A thread that has exited is in this state.
 */
const JVM_THREAD_STATE_VALUE_TERMINATED = "terminated";
/**
 * Enum value "timed_waiting" for attribute {@link ATTR_JVM_THREAD_STATE}.
 *
 * A thread that is waiting for another thread to perform an action for up to a specified waiting time is in this state.
 */
const JVM_THREAD_STATE_VALUE_TIMED_WAITING = "timed_waiting";
/**
 * Enum value "waiting" for attribute {@link ATTR_JVM_THREAD_STATE}.
 *
 * A thread that is waiting indefinitely for another thread to perform a particular action is in this state.
 */
const JVM_THREAD_STATE_VALUE_WAITING = "waiting";
/**
 * Local address of the network connection - IP address or Unix domain socket name.
 *
 * @example 10.1.2.80
 * @example /tmp/my.sock
 */
const ATTR_NETWORK_LOCAL_ADDRESS = 'network.local.address';
/**
 * Local port number of the network connection.
 *
 * @example 65123
 */
const ATTR_NETWORK_LOCAL_PORT = 'network.local.port';
/**
 * Peer address of the network connection - IP address or Unix domain socket name.
 *
 * @example 10.1.2.80
 * @example /tmp/my.sock
 */
const ATTR_NETWORK_PEER_ADDRESS = 'network.peer.address';
/**
 * Peer port number of the network connection.
 *
 * @example 65123
 */
const ATTR_NETWORK_PEER_PORT = 'network.peer.port';
/**
 * [OSI application layer](https://wikipedia.org/wiki/Application_layer) or non-OSI equivalent.
 *
 * @example amqp
 * @example http
 * @example mqtt
 *
 * @note The value **SHOULD** be normalized to lowercase.
 */
const ATTR_NETWORK_PROTOCOL_NAME = 'network.protocol.name';
/**
 * The actual version of the protocol used for network communication.
 *
 * @example 1.1
 * @example 2
 *
 * @note If protocol version is subject to negotiation (for example using [ALPN](https://www.rfc-editor.org/rfc/rfc7301.html)), this attribute **SHOULD** be set to the negotiated version. If the actual protocol version is not known, this attribute **SHOULD NOT** be set.
 */
const ATTR_NETWORK_PROTOCOL_VERSION = 'network.protocol.version';
/**
 * [OSI transport layer](https://wikipedia.org/wiki/Transport_layer) or [inter-process communication method](https://wikipedia.org/wiki/Inter-process_communication).
 *
 * @example tcp
 * @example udp
 *
 * @note The value **SHOULD** be normalized to lowercase.
 *
 * Consider always setting the transport when setting a port number, since
 * a port number is ambiguous without knowing the transport. For example
 * different processes could be listening on TCP port 12345 and UDP port 12345.
 */
const ATTR_NETWORK_TRANSPORT = 'network.transport';
/**
 * Enum value "pipe" for attribute {@link ATTR_NETWORK_TRANSPORT}.
 *
 * Named or anonymous pipe.
 */
const NETWORK_TRANSPORT_VALUE_PIPE = "pipe";
/**
 * Enum value "quic" for attribute {@link ATTR_NETWORK_TRANSPORT}.
 *
 * QUIC
 */
const NETWORK_TRANSPORT_VALUE_QUIC = "quic";
/**
 * Enum value "tcp" for attribute {@link ATTR_NETWORK_TRANSPORT}.
 *
 * TCP
 */
const NETWORK_TRANSPORT_VALUE_TCP = "tcp";
/**
 * Enum value "udp" for attribute {@link ATTR_NETWORK_TRANSPORT}.
 *
 * UDP
 */
const NETWORK_TRANSPORT_VALUE_UDP = "udp";
/**
 * Enum value "unix" for attribute {@link ATTR_NETWORK_TRANSPORT}.
 *
 * Unix domain socket
 */
const NETWORK_TRANSPORT_VALUE_UNIX = "unix";
/**
 * [OSI network layer](https://wikipedia.org/wiki/Network_layer) or non-OSI equivalent.
 *
 * @example ipv4
 * @example ipv6
 *
 * @note The value **SHOULD** be normalized to lowercase.
 */
const ATTR_NETWORK_TYPE = 'network.type';
/**
 * Enum value "ipv4" for attribute {@link ATTR_NETWORK_TYPE}.
 *
 * IPv4
 */
const NETWORK_TYPE_VALUE_IPV4 = "ipv4";
/**
 * Enum value "ipv6" for attribute {@link ATTR_NETWORK_TYPE}.
 *
 * IPv6
 */
const NETWORK_TYPE_VALUE_IPV6 = "ipv6";
/**
 * The name of the instrumentation scope - (`InstrumentationScope.Name` in OTLP).
 *
 * @example io.opentelemetry.contrib.mongodb
 */
const ATTR_OTEL_SCOPE_NAME = 'otel.scope.name';
/**
 * The version of the instrumentation scope - (`InstrumentationScope.Version` in OTLP).
 *
 * @example 1.0.0
 */
const ATTR_OTEL_SCOPE_VERSION = 'otel.scope.version';
/**
 * Name of the code, either "OK" or "ERROR". **MUST NOT** be set if the status code is UNSET.
 */
const ATTR_OTEL_STATUS_CODE = 'otel.status_code';
/**
 * Enum value "ERROR" for attribute {@link ATTR_OTEL_STATUS_CODE}.
 *
 * The operation contains an error.
 */
const OTEL_STATUS_CODE_VALUE_ERROR = "ERROR";
/**
 * Enum value "OK" for attribute {@link ATTR_OTEL_STATUS_CODE}.
 *
 * The operation has been validated by an Application developer or Operator to have completed successfully.
 */
const OTEL_STATUS_CODE_VALUE_OK = "OK";
/**
 * Description of the Status if it has a value, otherwise not set.
 *
 * @example resource not found
 */
const ATTR_OTEL_STATUS_DESCRIPTION = 'otel.status_description';
/**
 * Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
 *
 * @example example.com
 * @example 10.1.2.80
 * @example /tmp/my.sock
 *
 * @note When observed from the client side, and when communicating through an intermediary, `server.address` **SHOULD** represent the server address behind any intermediaries, for example proxies, if it's available.
 */
const ATTR_SERVER_ADDRESS = 'server.address';
/**
 * Server port number.
 *
 * @example 80
 * @example 8080
 * @example 443
 *
 * @note When observed from the client side, and when communicating through an intermediary, `server.port` **SHOULD** represent the server port behind any intermediaries, for example proxies, if it's available.
 */
const ATTR_SERVER_PORT = 'server.port';
/**
 * Logical name of the service.
 *
 * @example shoppingcart
 *
 * @note **MUST** be the same for all instances of horizontally scaled services. If the value was not specified, SDKs **MUST** fallback to `unknown_service:` concatenated with [`process.executable.name`](process.md), e.g. `unknown_service:bash`. If `process.executable.name` is not available, the value **MUST** be set to `unknown_service`.
 */
const ATTR_SERVICE_NAME = 'service.name';
/**
 * The version string of the service API or implementation. The format is not defined by these conventions.
 *
 * @example 2.0.0
 * @example a01dbef8a
 */
const ATTR_SERVICE_VERSION = 'service.version';
/**
 * SignalR HTTP connection closure status.
 *
 * @example app_shutdown
 * @example timeout
 */
const ATTR_SIGNALR_CONNECTION_STATUS = 'signalr.connection.status';
/**
 * Enum value "app_shutdown" for attribute {@link ATTR_SIGNALR_CONNECTION_STATUS}.
 *
 * The connection was closed because the app is shutting down.
 */
const SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN = "app_shutdown";
/**
 * Enum value "normal_closure" for attribute {@link ATTR_SIGNALR_CONNECTION_STATUS}.
 *
 * The connection was closed normally.
 */
const SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE = "normal_closure";
/**
 * Enum value "timeout" for attribute {@link ATTR_SIGNALR_CONNECTION_STATUS}.
 *
 * The connection was closed due to a timeout.
 */
const SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT = "timeout";
/**
 * [SignalR transport type](https://github.com/dotnet/aspnetcore/blob/main/src/SignalR/docs/specs/TransportProtocols.md)
 *
 * @example web_sockets
 * @example long_polling
 */
const ATTR_SIGNALR_TRANSPORT = 'signalr.transport';
/**
 * Enum value "long_polling" for attribute {@link ATTR_SIGNALR_TRANSPORT}.
 *
 * LongPolling protocol
 */
const SIGNALR_TRANSPORT_VALUE_LONG_POLLING = "long_polling";
/**
 * Enum value "server_sent_events" for attribute {@link ATTR_SIGNALR_TRANSPORT}.
 *
 * ServerSentEvents protocol
 */
const SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS = "server_sent_events";
/**
 * Enum value "web_sockets" for attribute {@link ATTR_SIGNALR_TRANSPORT}.
 *
 * WebSockets protocol
 */
const SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS = "web_sockets";
/**
 * The language of the telemetry SDK.
 */
const ATTR_TELEMETRY_SDK_LANGUAGE = 'telemetry.sdk.language';
/**
 * Enum value "cpp" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
const TELEMETRY_SDK_LANGUAGE_VALUE_CPP = "cpp";
/**
 * Enum value "dotnet" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
const TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET = "dotnet";
/**
 * Enum value "erlang" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
const TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG = "erlang";
/**
 * Enum value "go" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
const TELEMETRY_SDK_LANGUAGE_VALUE_GO = "go";
/**
 * Enum value "java" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
const TELEMETRY_SDK_LANGUAGE_VALUE_JAVA = "java";
/**
 * Enum value "nodejs" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
const TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = "nodejs";
/**
 * Enum value "php" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
const TELEMETRY_SDK_LANGUAGE_VALUE_PHP = "php";
/**
 * Enum value "python" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
const TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON = "python";
/**
 * Enum value "ruby" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
const TELEMETRY_SDK_LANGUAGE_VALUE_RUBY = "ruby";
/**
 * Enum value "rust" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
const TELEMETRY_SDK_LANGUAGE_VALUE_RUST = "rust";
/**
 * Enum value "swift" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
const TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT = "swift";
/**
 * Enum value "webjs" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
 */
const TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = "webjs";
/**
 * The name of the telemetry SDK as defined above.
 *
 * @example opentelemetry
 *
 * @note The OpenTelemetry SDK **MUST** set the `telemetry.sdk.name` attribute to `opentelemetry`.
 * If another SDK, like a fork or a vendor-provided implementation, is used, this SDK **MUST** set the
 * `telemetry.sdk.name` attribute to the fully-qualified class or module name of this SDK's main entry point
 * or another suitable identifier depending on the language.
 * The identifier `opentelemetry` is reserved and **MUST NOT** be used in this case.
 * All custom identifiers **SHOULD** be stable across different versions of an implementation.
 */
const ATTR_TELEMETRY_SDK_NAME = 'telemetry.sdk.name';
/**
 * The version string of the telemetry SDK.
 *
 * @example 1.2.3
 */
const ATTR_TELEMETRY_SDK_VERSION = 'telemetry.sdk.version';
/**
 * The [URI fragment](https://www.rfc-editor.org/rfc/rfc3986#section-3.5) component
 *
 * @example SemConv
 */
const ATTR_URL_FRAGMENT = 'url.fragment';
/**
 * Absolute URL describing a network resource according to [RFC3986](https://www.rfc-editor.org/rfc/rfc3986)
 *
 * @example https://www.foo.bar/search?q=OpenTelemetry#SemConv
 * @example //localhost
 *
 * @note For network calls, URL usually has `scheme://host[:port][path][?query][#fragment]` format, where the fragment
 * is not transmitted over HTTP, but if it is known, it **SHOULD** be included nevertheless.
 *
 * `url.full` **MUST NOT** contain credentials passed via URL in form of `https://username:password@www.example.com/`.
 * In such case username and password **SHOULD** be redacted and attribute's value **SHOULD** be `https://REDACTED:REDACTED@www.example.com/`.
 *
 * `url.full` **SHOULD** capture the absolute URL when it is available (or can be reconstructed).
 *
 * Sensitive content provided in `url.full` **SHOULD** be scrubbed when instrumentations can identify it.
 *
 *
 * Query string values for the following keys **SHOULD** be redacted by default and replaced by the
 * value `REDACTED`:
 *
 *   - [`AWSAccessKeyId`](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RESTAuthentication.html#RESTAuthenticationQueryStringAuth)
 *   - [`Signature`](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RESTAuthentication.html#RESTAuthenticationQueryStringAuth)
 *   - [`sig`](https://learn.microsoft.com/azure/storage/common/storage-sas-overview#sas-token)
 *   - [`X-Goog-Signature`](https://cloud.google.com/storage/docs/access-control/signed-urls)
 *
 * This list is subject to change over time.
 *
 * When a query string value is redacted, the query string key **SHOULD** still be preserved, e.g.
 * `https://www.example.com/path?color=blue&sig=REDACTED`.
 */
const ATTR_URL_FULL = 'url.full';
/**
 * The [URI path](https://www.rfc-editor.org/rfc/rfc3986#section-3.3) component
 *
 * @example /search
 *
 * @note Sensitive content provided in `url.path` **SHOULD** be scrubbed when instrumentations can identify it.
 */
const ATTR_URL_PATH = 'url.path';
/**
 * The [URI query](https://www.rfc-editor.org/rfc/rfc3986#section-3.4) component
 *
 * @example q=OpenTelemetry
 *
 * @note Sensitive content provided in `url.query` **SHOULD** be scrubbed when instrumentations can identify it.
 *
 *
 * Query string values for the following keys **SHOULD** be redacted by default and replaced by the value `REDACTED`:
 *
 *   - [`AWSAccessKeyId`](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RESTAuthentication.html#RESTAuthenticationQueryStringAuth)
 *   - [`Signature`](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RESTAuthentication.html#RESTAuthenticationQueryStringAuth)
 *   - [`sig`](https://learn.microsoft.com/azure/storage/common/storage-sas-overview#sas-token)
 *   - [`X-Goog-Signature`](https://cloud.google.com/storage/docs/access-control/signed-urls)
 *
 * This list is subject to change over time.
 *
 * When a query string value is redacted, the query string key **SHOULD** still be preserved, e.g.
 * `q=OpenTelemetry&sig=REDACTED`.
 */
const ATTR_URL_QUERY = 'url.query';
/**
 * The [URI scheme](https://www.rfc-editor.org/rfc/rfc3986#section-3.1) component identifying the used protocol.
 *
 * @example https
 * @example ftp
 * @example telnet
 */
const ATTR_URL_SCHEME = 'url.scheme';
/**
 * Value of the [HTTP User-Agent](https://www.rfc-editor.org/rfc/rfc9110.html#field.user-agent) header sent by the client.
 *
 * @example CERN-LineMode/2.15 libwww/2.17b3
 * @example Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1
 * @example YourApp/1.0.0 grpc-java-okhttp/1.27.2
 */
const ATTR_USER_AGENT_ORIGINAL = 'user_agent.original';
//# sourceMappingURL=stable_attributes.js.map

/***/ }),

/***/ "./node_modules/ua-parser-js/src/ua-parser.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/////////////////////////////////////////////////////////////////////////////////
/* UAParser.js v1.0.33
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License *//*
   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
   Supports browser & node.js environment. 
   Demo   : https://faisalman.github.io/ua-parser-js
   Source : https://github.com/faisalman/ua-parser-js */
/////////////////////////////////////////////////////////////////////////////////

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '1.0.33',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major',
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded',
        UA_MAX_LENGTH = 350;

    var AMAZON  = 'Amazon',
        APPLE   = 'Apple',
        ASUS    = 'ASUS',
        BLACKBERRY = 'BlackBerry',
        BROWSER = 'Browser',
        CHROME  = 'Chrome',
        EDGE    = 'Edge',
        FIREFOX = 'Firefox',
        GOOGLE  = 'Google',
        HUAWEI  = 'Huawei',
        LG      = 'LG',
        MICROSOFT = 'Microsoft',
        MOTOROLA  = 'Motorola',
        OPERA   = 'Opera',
        SAMSUNG = 'Samsung',
        SHARP   = 'Sharp',
        SONY    = 'Sony',
        XIAOMI  = 'Xiaomi',
        ZEBRA   = 'Zebra',
        FACEBOOK   = 'Facebook';

    ///////////
    // Helper
    //////////

    var extend = function (regexes, extensions) {
            var mergedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    mergedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    mergedRegexes[i] = regexes[i];
                }
            }
            return mergedRegexes;
        },
        enumerize = function (arr) {
            var enums = {};
            for (var i=0; i<arr.length; i++) {
                enums[arr[i].toUpperCase()] = arr[i];
            }
            return enums;
        },
        has = function (str1, str2) {
            return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
        },
        lowerize = function (str) {
            return str.toLowerCase();
        },
        majorize = function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split('.')[0] : undefined;
        },
        trim = function (str, len) {
            if (typeof(str) === STR_TYPE) {
                str = str.replace(/^\s\s*/, EMPTY);
                return typeof(len) === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
            }
    };

    ///////////////
    // Map helper
    //////////////

    var rgxMapper = function (ua, arrays) {

            var i = 0, j, k, p, q, matches, match;

            // loop through all regexes maps
            while (i < arrays.length && !matches) {

                var regex = arrays[i],       // even sequence (0,2,4,..)
                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {

                    matches = regex[j++].exec(ua);

                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length === 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this[q[0]] = q[1];
                                    }
                                } else if (q.length === 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length === 4) {
                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                this[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
        },

        strMapper = function (str, map) {

            for (var i in map) {
                // check if current value is array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
    };

    ///////////////
    // String map
    //////////////

    // Safari < 3.0
    var oldSafariMap = {
            '1.0'   : '/8',
            '1.2'   : '/1',
            '1.3'   : '/3',
            '2.0'   : '/412',
            '2.0.2' : '/416',
            '2.0.3' : '/417',
            '2.0.4' : '/419',
            '?'     : '/'
        },
        windowsVersionMap = {
            'ME'        : '4.90',
            'NT 3.11'   : 'NT3.51',
            'NT 4.0'    : 'NT4.0',
            '2000'      : 'NT 5.0',
            'XP'        : ['NT 5.1', 'NT 5.2'],
            'Vista'     : 'NT 6.0',
            '7'         : 'NT 6.1',
            '8'         : 'NT 6.2',
            '8.1'       : 'NT 6.3',
            '10'        : ['NT 6.4', 'NT 10.0'],
            'RT'        : 'ARM'
    };

    //////////////
    // Regex map
    /////////////

    var regexes = {

        browser : [[

            /\b(?:crmo|crios)\/([\w\.]+)/i                                      // Chrome for Android/iOS
            ], [VERSION, [NAME, 'Chrome']], [
            /edg(?:e|ios|a)?\/([\w\.]+)/i                                       // Microsoft Edge
            ], [VERSION, [NAME, 'Edge']], [

            // Presto based
            /(opera mini)\/([-\w\.]+)/i,                                        // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,                 // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i                           // Opera
            ], [NAME, VERSION], [
            /opios[\/ ]+([\w\.]+)/i                                             // Opera mini on iphone >= 8.0
            ], [VERSION, [NAME, OPERA+' Mini']], [
            /\bopr\/([\w\.]+)/i                                                 // Opera Webkit
            ], [VERSION, [NAME, OPERA]], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,      // Lunascape/Maxthon/Netfront/Jasmine/Blazer
            // Trident based
            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,               // Avant/IEMobile/SlimBrowser
            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,                                  // Baidu Browser
            /(?:ms|\()(ie) ([\w\.]+)/i,                                         // Internet Explorer

            // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                                                                                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
            /(weibo)__([\d\.]+)/i                                               // Weibo
            ], [NAME, VERSION], [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i                 // UCBrowser
            ], [VERSION, [NAME, 'UC'+BROWSER]], [
            /microm.+\bqbcore\/([\w\.]+)/i,                                     // WeChat Desktop for Windows Built-in Browser
            /\bqbcore\/([\w\.]+).+microm/i
            ], [VERSION, [NAME, 'WeChat(Win) Desktop']], [
            /micromessenger\/([\w\.]+)/i                                        // WeChat
            ], [VERSION, [NAME, 'WeChat']], [
            /konqueror\/([\w\.]+)/i                                             // Konqueror
            ], [VERSION, [NAME, 'Konqueror']], [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i                       // IE11
            ], [VERSION, [NAME, 'IE']], [
            /yabrowser\/([\w\.]+)/i                                             // Yandex
            ], [VERSION, [NAME, 'Yandex']], [
            /(avast|avg)\/([\w\.]+)/i                                           // Avast/AVG Secure Browser
            ], [[NAME, /(.+)/, '$1 Secure '+BROWSER], VERSION], [
            /\bfocus\/([\w\.]+)/i                                               // Firefox Focus
            ], [VERSION, [NAME, FIREFOX+' Focus']], [
            /\bopt\/([\w\.]+)/i                                                 // Opera Touch
            ], [VERSION, [NAME, OPERA+' Touch']], [
            /coc_coc\w+\/([\w\.]+)/i                                            // Coc Coc Browser
            ], [VERSION, [NAME, 'Coc Coc']], [
            /dolfin\/([\w\.]+)/i                                                // Dolphin
            ], [VERSION, [NAME, 'Dolphin']], [
            /coast\/([\w\.]+)/i                                                 // Opera Coast
            ], [VERSION, [NAME, OPERA+' Coast']], [
            /miuibrowser\/([\w\.]+)/i                                           // MIUI Browser
            ], [VERSION, [NAME, 'MIUI '+BROWSER]], [
            /fxios\/([-\w\.]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, FIREFOX]], [
            /\bqihu|(qi?ho?o?|360)browser/i                                     // 360
            ], [[NAME, '360 '+BROWSER]], [
            /(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i
            ], [[NAME, /(.+)/, '$1 '+BROWSER], VERSION], [                      // Oculus/Samsung/Sailfish/Huawei Browser
            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [
            /(electron)\/([\w\.]+) safari/i,                                    // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,                   // Tesla
            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i            // QQBrowser/Baidu App/2345 Browser
            ], [NAME, VERSION], [
            /(metasr)[\/ ]?([\w\.]+)/i,                                         // SouGouBrowser
            /(lbbrowser)/i,                                                     // LieBao Browser
            /\[(linkedin)app\]/i                                                // LinkedIn App for iOS & Android
            ], [NAME], [

            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i       // Facebook App for iOS & Android
            ], [[NAME, FACEBOOK], VERSION], [
            /safari (line)\/([\w\.]+)/i,                                        // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i,                                        // Line App for Android
            /(chromium|instagram)[\/ ]([-\w\.]+)/i                              // Chromium/Instagram
            ], [NAME, VERSION], [
            /\bgsa\/([\w\.]+) .*safari\//i                                      // Google Search Appliance on iOS
            ], [VERSION, [NAME, 'GSA']], [

            /headlesschrome(?:\/([\w\.]+)| )/i                                  // Chrome Headless
            ], [VERSION, [NAME, CHROME+' Headless']], [

            / wv\).+(chrome)\/([\w\.]+)/i                                       // Chrome WebView
            ], [[NAME, CHROME+' WebView'], VERSION], [

            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i           // Android Browser
            ], [VERSION, [NAME, 'Android '+BROWSER]], [

            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i       // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i                      // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [
            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i                // Safari & Safari Mobile
            ], [VERSION, NAME], [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i                      // Safari < 3.0
            ], [NAME, [VERSION, strMapper, oldSafariMap]], [

            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i                              // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /mobile vr; rv:([\w\.]+)\).+firefox/i                               // Firefox Reality
            ], [VERSION, [NAME, FIREFOX+' Reality']], [
            /ekiohf.+(flow)\/([\w\.]+)/i,                                       // Flow
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)/i,                                            // Other Firefox-based
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,                         // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
            /(links) \(([\w\.]+)/i                                              // Links
            ], [NAME, VERSION], [
            
            /(cobalt)\/([\w\.]+)/i                                              // Cobalt
            ], [NAME, [VERSION, /master.|lts./, ""]]
        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i                     // AMD64 (x64)
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32 (x86)
            ], [[ARCHITECTURE, 'ia32']], [

            /\b(aarch64|arm(v?8e?l?|_?64))\b/i                                 // ARM64
            ], [[ARCHITECTURE, 'arm64']], [

            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i                                   // ARMHF
            ], [[ARCHITECTURE, 'armhf']], [

            // PocketPC mistakenly identified as PowerPC
            /windows (ce|mobile); ppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i                            // PowerPC
            ], [[ARCHITECTURE, /ower/, EMPTY, lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, lowerize]]
        ],

        device : [[

            //////////////////////////
            // MOBILES & TABLETS
            // Ordered by popularity
            /////////////////////////

            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]], [
            /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
            /samsung[- ]([-\w]+)/i,
            /sec-(sgh\w+)/i
            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]], [

            // Apple
            /\((ip(?:hone|od)[\w ]*);/i                                         // iPod/iPhone
            ], [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]], [
            /\((ipad);[-\w\),; ]+apple/i,                                       // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ], [MODEL, [VENDOR, APPLE], [TYPE, TABLET]], [
            /(macintosh);/i
            ], [MODEL, [VENDOR, APPLE]], [

            // Huawei
            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
            ], [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]], [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
            ], [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]], [

            // Xiaomi
            /\b(poco[\w ]+)(?: bui|\))/i,                                       // Xiaomi POCO
            /\b; (\w+) build\/hm\1/i,                                           // Xiaomi Hongmi 'numeric' models
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,                             // Xiaomi Hongmi
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,                   // Xiaomi Redmi
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i // Xiaomi Mi
            ], [[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, MOBILE]], [
            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i                        // Mi Pad tablets
            ],[[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, TABLET]], [

            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [

            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
            ], [MODEL, [VENDOR, 'Vivo'], [TYPE, MOBILE]], [

            // Realme
            /\b(rmx[12]\d{3})(?: bui|;|\))/i
            ], [MODEL, [VENDOR, 'Realme'], [TYPE, MOBILE]], [

            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]], [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]], [

            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
            ], [MODEL, [VENDOR, LG], [TYPE, TABLET]], [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i
            ], [MODEL, [VENDOR, LG], [TYPE, MOBILE]], [

            // Lenovo
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            // Nokia
            /(?:maemo|nokia).*(n900|lumia \d+)/i,
            /nokia[-_ ]?([-\w\.]*)/i
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Nokia'], [TYPE, MOBILE]], [

            // Google
            /(pixel c)\b/i                                                      // Google Pixel C
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]], [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i                         // Google Pixel
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]], [

            // Sony
            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ], [MODEL, [VENDOR, SONY], [TYPE, MOBILE]], [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
            ], [[MODEL, 'Xperia Tablet'], [VENDOR, SONY], [TYPE, TABLET]], [

            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi)( bui|\))/i,                                         // Kindle Fire without Silk
            /(kf[a-z]+)( bui|\)).+silk\//i                                      // Kindle Fire HD
            ], [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]], [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i                     // Fire Phone
            ], [[MODEL, /(.+)/g, 'Fire Phone $1'], [VENDOR, AMAZON], [TYPE, MOBILE]], [

            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i                                      // BlackBerry PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i                                                    // BlackBerry 10
            ], [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]], [

            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
            ], [MODEL, [VENDOR, ASUS], [TYPE, TABLET]], [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
            ], [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]], [

            // HTC
            /(nexus 9)/i                                                        // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,                         // HTC

            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i         // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [

            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
            ], [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]], [

            // MIXED
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                                                                                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp) ([\w ]+\w)/i,                                                 // HP iPAQ
            /(asus)-?(\w+)/i,                                                   // Asus
            /(microsoft); (lumia[\w ]+)/i,                                      // Microsoft Lumia
            /(lenovo)[-_ ]?([-\w]+)/i,                                          // Lenovo
            /(jolla)/i,                                                         // Jolla
            /(oppo) ?([\w ]+) bui/i                                             // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /(archos) (gamepad2?)/i,                                            // Archos
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,                             // HP TouchPad
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(nook)[\w ]+build\/(\w+)/i,                                        // Nook
            /(dell) (strea[kpr\d ]*[\dko])/i,                                   // Dell Streak
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,                                  // Le Pan Tablets
            /(trinity)[- ]*(t\d{3}) bui/i,                                      // Trinity Tablets
            /(gigaset)[- ]+(q\w{1,9}) bui/i,                                    // Gigaset Tablets
            /(vodafone) ([\w ]+)(?:\)| bui)/i                                   // Vodafone
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(surface duo)/i                                                    // Surface Duo
            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]], [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i                                 // Fairphone
            ], [MODEL, [VENDOR, 'Fairphone'], [TYPE, MOBILE]], [
            /(u304aa)/i                                                         // AT&T
            ], [MODEL, [VENDOR, 'AT&T'], [TYPE, MOBILE]], [
            /\bsie-(\w*)/i                                                      // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [
            /\b(rct\w+) b/i                                                     // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [
            /\b(venue[\d ]{2,7}) b/i                                            // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [
            /\b(q(?:mv|ta)\w+) b/i                                              // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i                       // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'Barnes & Noble'], [TYPE, TABLET]], [
            /\b(tm\d{3}\w+) b/i
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [
            /\b(k88) b/i                                                        // ZTE K Series Tablet
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [
            /\b(nx\d{3}j) b/i                                                   // ZTE Nubia
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
            /\b(gen\d{3}) b.+49h/i                                              // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [
            /\b(zur\d{3}) b/i                                                   // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [
            /\b((zeki)?tb.*\b) b/i                                              // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i                                // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [
            /\b(ns-?\w{0,9}) b/i                                                // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [
            /\b((nxa|next)-?\w{0,9}) b/i                                        // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i                  // Voice Xtreme Phones
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [
            /\b(lvtel\-)?(v1[12]) b/i                                           // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [
            /\b(ph-1) /i                                                        // Essential PH-1
            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [
            /\b(v(100md|700na|7011|917g).*\b) b/i                               // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [
            /\b(trio[-\w\. ]+) b/i                                              // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [
            /\btu_(1491) b/i                                                    // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [
            /(shield[\w ]+) b/i                                                 // Nvidia Shield Tablets
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, TABLET]], [
            /(sprint) (\w+)/i                                                   // Sprint Phones
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, MICROSOFT], [TYPE, MOBILE]], [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i             // Zebra
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]], [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]], [

            ///////////////////
            // CONSOLES
            ///////////////////

            /(ouya)/i,                                                          // Ouya
            /(nintendo) ([wids3utch]+)/i                                        // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [
            /droid.+; (shield) bui/i                                            // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [
            /(playstation [345portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]], [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i                                // Microsoft Xbox
            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]], [

            ///////////////////
            // SMARTTVS
            ///////////////////

            /smart-tv.+(samsung)/i                                              // Samsung
            ], [VENDOR, [TYPE, SMARTTV]], [
            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, SAMSUNG], [TYPE, SMARTTV]], [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i        // LG SmartTV
            ], [[VENDOR, LG], [TYPE, SMARTTV]], [
            /(apple) ?tv/i                                                      // Apple TV
            ], [VENDOR, [MODEL, APPLE+' TV'], [TYPE, SMARTTV]], [
            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, CHROME+'cast'], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [
            /droid.+aft(\w)( bui|\))/i                                          // Fire TV
            ], [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]], [
            /\(dtv[\);].+(aquos)/i,
            /(aquos-tv[\w ]+)\)/i                                               // Sharp
            ], [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],[
            /(bravia[\w ]+)( bui|\))/i                                              // Sony
            ], [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]], [
            /(mitv-\w{5}) bui/i                                                 // Xiaomi
            ], [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]], [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,                          // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i               // HbbTV devices
            ], [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]], [
            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i                   // SmartTV from Unidentified Vendors
            ], [[TYPE, SMARTTV]], [

            ///////////////////
            // WEARABLES
            ///////////////////

            /((pebble))app/i                                                    // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [
            /droid.+; (glass) \d/i                                              // Google Glass
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]], [
            /droid.+; (wt63?0{2,3})\)/i
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]], [
            /(quest( 2)?)/i                                                     // Oculus Quest
            ], [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]], [

            ///////////////////
            // EMBEDDED
            ///////////////////

            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i                              // Tesla
            ], [VENDOR, [TYPE, EMBEDDED]], [

            ////////////////////
            // MIXED (GENERIC)
            ///////////////////

            /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i           // Android Phones from Unidentified Vendors
            ], [MODEL, [TYPE, MOBILE]], [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i       // Android Tablets from Unidentified Vendors
            ], [MODEL, [TYPE, TABLET]], [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i                      // Unidentifiable Tablet
            ], [[TYPE, TABLET]], [
            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i    // Unidentifiable Mobile
            ], [[TYPE, MOBILE]], [
            /(android[-\w\. ]{0,9});.+buil/i                                    // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']]
        ],

        engine : [[

            /windows.+ edge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, EDGE+'HTML']], [

            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
            ], [VERSION, [NAME, 'Blink']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /ekioh(flow)\/([\w\.]+)/i,                                          // Flow
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,                           // KHTML/Tasman/Links
            /(icab)[\/ ]([23]\.[\d\.]+)/i                                       // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]{1,9})\b.+(gecko)/i                                     // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows
            /microsoft (windows) (vista|xp)/i                                   // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows) nt 6\.2; (arm)/i,                                        // Windows RT
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,            // Windows Phone
            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
            ], [NAME, [VERSION, strMapper, windowsVersionMap]], [
            /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, strMapper, windowsVersionMap]], [

            // iOS/macOS
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,              // iOS
            /cfnetwork\/.+darwin/i
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i                             // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i                    // Android-x86/HarmonyOS
            ], [VERSION, NAME], [                                               // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,                                      // Blackberry
            /(tizen|kaios)[\/ ]([\w\.]+)/i,                                     // Tizen/KaiOS
            /\((series40);/i                                                    // Series 40
            ], [NAME, VERSION], [
            /\(bb(10);/i                                                        // BlackBerry 10
            ], [VERSION, [NAME, BLACKBERRY]], [
            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i         // Symbian
            ], [VERSION, [NAME, 'Symbian']], [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
            ], [VERSION, [NAME, FIREFOX+' OS']], [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i                              // WebOS
            ], [VERSION, [NAME, 'webOS']], [

            // Google Chromecast
            /crkey\/([\d\.]+)/i                                                 // Google Chromecast
            ], [VERSION, [NAME, CHROME+'cast']], [
            /(cros) [\w]+ ([\w\.]+\w)/i                                         // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Console
            /(nintendo|playstation) ([wids345portablevuch]+)/i,                 // Nintendo/Playstation
            /(xbox); +xbox ([^\);]+)/i,                                         // Microsoft Xbox (360, One, X, S, Series X, Series S)

            // Other
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,                            // Joli/Palm
            /(mint)[\/\(\) ]?(\w*)/i,                                           // Mint
            /(mageia|vectorlinux)[; ]/i,                                        // Mageia/VectorLinux
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                                                                                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
            /(hurd|linux) ?([\w\.]*)/i,                                         // Hurd/Linux
            /(gnu) ?([\w\.]*)/i,                                                // GNU
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
            /(haiku) (\w+)/i                                                    // Haiku
            ], [NAME, VERSION], [
            /(sunos) ?([\w\.\d]*)/i                                             // Solaris
            ], [[NAME, 'Solaris'], VERSION], [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,                              // Solaris
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,                                  // AIX
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,            // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX
            /(unix) ?([\w\.]*)/i                                                // UNIX
            ], [NAME, VERSION]
        ]
    };

    /////////////////
    // Constructor
    ////////////////

    var UAParser = function (ua, extensions) {

        if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined;
        }

        if (!(this instanceof UAParser)) {
            return new UAParser(ua, extensions).getResult();
        }

        var _ua = ua || ((typeof window !== UNDEF_TYPE && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;

        this.getBrowser = function () {
            var _browser = {};
            _browser[NAME] = undefined;
            _browser[VERSION] = undefined;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser.major = majorize(_browser.version);
            return _browser;
        };
        this.getCPU = function () {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
        };
        this.getDevice = function () {
            var _device = {};
            _device[VENDOR] = undefined;
            _device[MODEL] = undefined;
            _device[TYPE] = undefined;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            return _device;
        };
        this.getEngine = function () {
            var _engine = {};
            _engine[NAME] = undefined;
            _engine[VERSION] = undefined;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine;
        };
        this.getOS = function () {
            var _os = {};
            _os[NAME] = undefined;
            _os[VERSION] = undefined;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            return _os;
        };
        this.getResult = function () {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return _ua;
        };
        this.setUA = function (ua) {
            _ua = (typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH) ? trim(ua, UA_MAX_LENGTH) : ua;
            return this;
        };
        this.setUA(_ua);
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER =  enumerize([NAME, VERSION, MAJOR]);
    UAParser.CPU = enumerize([ARCHITECTURE]);
    UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
    UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);

    ///////////
    // Export
    //////////

    // check js environment
    if (typeof(exports) !== UNDEF_TYPE) {
        // nodejs env
        if ("object" !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if ("function" === FUNC_TYPE && __webpack_require__.amdO) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
                return UAParser;
            }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof window !== UNDEF_TYPE) {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = typeof window !== UNDEF_TYPE && (window.jQuery || window.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : this);


/***/ }),

/***/ "./node_modules/web-vitals/dist/web-vitals.attribution.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLSThresholds: () => (/* binding */ D),
/* harmony export */   FCPThresholds: () => (/* binding */ C),
/* harmony export */   FIDThresholds: () => (/* binding */ ht),
/* harmony export */   INPThresholds: () => (/* binding */ z),
/* harmony export */   LCPThresholds: () => (/* binding */ it),
/* harmony export */   TTFBThresholds: () => (/* binding */ ct),
/* harmony export */   onCLS: () => (/* binding */ w),
/* harmony export */   onFCP: () => (/* binding */ x),
/* harmony export */   onFID: () => (/* binding */ yt),
/* harmony export */   onINP: () => (/* binding */ rt),
/* harmony export */   onLCP: () => (/* binding */ ot),
/* harmony export */   onTTFB: () => (/* binding */ ft)
/* harmony export */ });
var t,e,n,r=function(){var t=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(t&&t.responseStart>0&&t.responseStart<performance.now())return t},i=function(t){if("loading"===document.readyState)return"loading";var e=r();if(e){if(t<e.domInteractive)return"loading";if(0===e.domContentLoadedEventStart||t<e.domContentLoadedEventStart)return"dom-interactive";if(0===e.domComplete||t<e.domComplete)return"dom-content-loaded"}return"complete"},a=function(t){var e=t.nodeName;return 1===t.nodeType?e.toLowerCase():e.toUpperCase().replace(/^#/,"")},o=function(t,e){var n="";try{for(;t&&9!==t.nodeType;){var r=t,i=r.id?"#"+r.id:a(r)+(r.classList&&r.classList.value&&r.classList.value.trim()&&r.classList.value.trim().length?"."+r.classList.value.trim().replace(/\s+/g,"."):"");if(n.length+i.length>(e||100)-1)return n||i;if(n=n?i+">"+n:i,r.id)break;t=r.parentNode}}catch(t){}return n},c=-1,u=function(){return c},s=function(t){addEventListener("pageshow",(function(e){e.persisted&&(c=e.timeStamp,t(e))}),!0)},f=function(){var t=r();return t&&t.activationStart||0},d=function(t,e){var n=r(),i="navigate";u()>=0?i="back-forward-cache":n&&(document.prerendering||f()>0?i="prerender":document.wasDiscarded?i="restore":n.type&&(i=n.type.replace(/_/g,"-")));return{name:t,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:i}},l=function(t,e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var r=new PerformanceObserver((function(t){Promise.resolve().then((function(){e(t.getEntries())}))}));return r.observe(Object.assign({type:t,buffered:!0},n||{})),r}}catch(t){}},m=function(t,e,n,r){var i,a;return function(o){e.value>=0&&(o||r)&&((a=e.value-(i||0))||void 0===i)&&(i=e.value,e.delta=a,e.rating=function(t,e){return t>e[1]?"poor":t>e[0]?"needs-improvement":"good"}(e.value,n),t(e))}},v=function(t){requestAnimationFrame((function(){return requestAnimationFrame((function(){return t()}))}))},p=function(t){document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&t()}))},g=function(t){var e=!1;return function(){e||(t(),e=!0)}},h=-1,T=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},y=function(t){"hidden"===document.visibilityState&&h>-1&&(h="visibilitychange"===t.type?t.timeStamp:0,S())},E=function(){addEventListener("visibilitychange",y,!0),addEventListener("prerenderingchange",y,!0)},S=function(){removeEventListener("visibilitychange",y,!0),removeEventListener("prerenderingchange",y,!0)},b=function(){return h<0&&(h=T(),E(),s((function(){setTimeout((function(){h=T(),E()}),0)}))),{get firstHiddenTime(){return h}}},L=function(t){document.prerendering?addEventListener("prerenderingchange",(function(){return t()}),!0):t()},C=[1800,3e3],M=function(t,e){e=e||{},L((function(){var n,r=b(),i=d("FCP"),a=l("paint",(function(t){t.forEach((function(t){"first-contentful-paint"===t.name&&(a.disconnect(),t.startTime<r.firstHiddenTime&&(i.value=Math.max(t.startTime-f(),0),i.entries.push(t),n(!0)))}))}));a&&(n=m(t,i,C,e.reportAllChanges),s((function(r){i=d("FCP"),n=m(t,i,C,e.reportAllChanges),v((function(){i.value=performance.now()-r.timeStamp,n(!0)}))})))}))},D=[.1,.25],w=function(t,e){!function(t,e){e=e||{},M(g((function(){var n,r=d("CLS",0),i=0,a=[],o=function(t){t.forEach((function(t){if(!t.hadRecentInput){var e=a[0],n=a[a.length-1];i&&t.startTime-n.startTime<1e3&&t.startTime-e.startTime<5e3?(i+=t.value,a.push(t)):(i=t.value,a=[t])}})),i>r.value&&(r.value=i,r.entries=a,n())},c=l("layout-shift",o);c&&(n=m(t,r,D,e.reportAllChanges),p((function(){o(c.takeRecords()),n(!0)})),s((function(){i=0,r=d("CLS",0),n=m(t,r,D,e.reportAllChanges),v((function(){return n()}))})),setTimeout(n,0))})))}((function(e){var n=function(t){var e,n={};if(t.entries.length){var r=t.entries.reduce((function(t,e){return t&&t.value>e.value?t:e}));if(r&&r.sources&&r.sources.length){var a=(e=r.sources).find((function(t){return t.node&&1===t.node.nodeType}))||e[0];a&&(n={largestShiftTarget:o(a.node),largestShiftTime:r.startTime,largestShiftValue:r.value,largestShiftSource:a,largestShiftEntry:r,loadState:i(r.startTime)})}}return Object.assign(t,{attribution:n})}(e);t(n)}),e)},x=function(t,e){M((function(e){var n=function(t){var e={timeToFirstByte:0,firstByteToFCP:t.value,loadState:i(u())};if(t.entries.length){var n=r(),a=t.entries[t.entries.length-1];if(n){var o=n.activationStart||0,c=Math.max(0,n.responseStart-o);e={timeToFirstByte:c,firstByteToFCP:t.value-c,loadState:i(t.entries[0].startTime),navigationEntry:n,fcpEntry:a}}}return Object.assign(t,{attribution:e})}(e);t(n)}),e)},I=0,k=1/0,A=0,F=function(t){t.forEach((function(t){t.interactionId&&(k=Math.min(k,t.interactionId),A=Math.max(A,t.interactionId),I=A?(A-k)/7+1:0)}))},P=function(){return t?I:performance.interactionCount||0},B=function(){"interactionCount"in performance||t||(t=l("event",F,{type:"event",buffered:!0,durationThreshold:0}))},O=[],R=new Map,j=0,q=function(){var t=Math.min(O.length-1,Math.floor((P()-j)/50));return O[t]},H=[],N=function(t){if(H.forEach((function(e){return e(t)})),t.interactionId||"first-input"===t.entryType){var e=O[O.length-1],n=R.get(t.interactionId);if(n||O.length<10||t.duration>e.latency){if(n)t.duration>n.latency?(n.entries=[t],n.latency=t.duration):t.duration===n.latency&&t.startTime===n.entries[0].startTime&&n.entries.push(t);else{var r={id:t.interactionId,latency:t.duration,entries:[t]};R.set(r.id,r),O.push(r)}O.sort((function(t,e){return e.latency-t.latency})),O.length>10&&O.splice(10).forEach((function(t){return R.delete(t.id)}))}}},W=function(t){var e=self.requestIdleCallback||self.setTimeout,n=-1;return t=g(t),"hidden"===document.visibilityState?t():(n=e(t),p(t)),n},z=[200,500],U=function(t,e){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(e=e||{},L((function(){var n;B();var r,i=d("INP"),a=function(t){W((function(){t.forEach(N);var e=q();e&&e.latency!==i.value&&(i.value=e.latency,i.entries=e.entries,r())}))},o=l("event",a,{durationThreshold:null!==(n=e.durationThreshold)&&void 0!==n?n:40});r=m(t,i,z,e.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),p((function(){a(o.takeRecords()),r(!0)})),s((function(){j=P(),O.length=0,R.clear(),i=d("INP"),r=m(t,i,z,e.reportAllChanges)})))})))},V=[],_=[],G=new WeakMap,J=new Map,K=-1,Q=function(t){V=V.concat(t),X()},X=function(){K<0&&(K=W(Y))},Y=function(){J.size>10&&J.forEach((function(t,e){R.has(e)||J.delete(e)}));var t=O.map((function(t){return G.get(t.entries[0])})),e=_.length-50;_=_.filter((function(n,r){return r>=e||t.includes(n)}));for(var r=new Set,i=0;i<_.length;i++){var a=_[i];nt(a.startTime,a.processingEnd).forEach((function(t){r.add(t)}))}for(var o=0;o<50;o++){var c=V[V.length-1-o];if(!c||c.startTime<n)break;r.add(c)}V=Array.from(r),K=-1};H.push((function(t){t.interactionId&&t.target&&!J.has(t.interactionId)&&J.set(t.interactionId,t.target)}),(function(t){var e,r=t.startTime+t.duration;n=Math.max(n,t.processingEnd);for(var i=_.length-1;i>=0;i--){var a=_[i];if(Math.abs(r-a.renderTime)<=8){(e=a).startTime=Math.min(t.startTime,e.startTime),e.processingStart=Math.min(t.processingStart,e.processingStart),e.processingEnd=Math.max(t.processingEnd,e.processingEnd),e.entries.push(t);break}}e||(e={startTime:t.startTime,processingStart:t.processingStart,processingEnd:t.processingEnd,renderTime:r,entries:[t]},_.push(e)),(t.interactionId||"first-input"===t.entryType)&&G.set(t,e),X()}));var Z,$,tt,et,nt=function(t,e){for(var n,r=[],i=0;n=V[i];i++)if(!(n.startTime+n.duration<t)){if(n.startTime>e)break;r.push(n)}return r},rt=function(t,n){e||(e=l("long-animation-frame",Q)),U((function(e){var n=function(t){var e=t.entries[0],n=G.get(e),r=e.processingStart,a=n.processingEnd,c=n.entries.sort((function(t,e){return t.processingStart-e.processingStart})),u=nt(e.startTime,a),s=t.entries.find((function(t){return t.target})),f=s&&s.target||J.get(e.interactionId),d=[e.startTime+e.duration,a].concat(u.map((function(t){return t.startTime+t.duration}))),l=Math.max.apply(Math,d),m={interactionTarget:o(f),interactionTargetElement:f,interactionType:e.name.startsWith("key")?"keyboard":"pointer",interactionTime:e.startTime,nextPaintTime:l,processedEventEntries:c,longAnimationFrameEntries:u,inputDelay:r-e.startTime,processingDuration:a-r,presentationDelay:Math.max(l-a,0),loadState:i(e.startTime)};return Object.assign(t,{attribution:m})}(e);t(n)}),n)},it=[2500,4e3],at={},ot=function(t,e){!function(t,e){e=e||{},L((function(){var n,r=b(),i=d("LCP"),a=function(t){e.reportAllChanges||(t=t.slice(-1)),t.forEach((function(t){t.startTime<r.firstHiddenTime&&(i.value=Math.max(t.startTime-f(),0),i.entries=[t],n())}))},o=l("largest-contentful-paint",a);if(o){n=m(t,i,it,e.reportAllChanges);var c=g((function(){at[i.id]||(a(o.takeRecords()),o.disconnect(),at[i.id]=!0,n(!0))}));["keydown","click"].forEach((function(t){addEventListener(t,(function(){return W(c)}),!0)})),p(c),s((function(r){i=d("LCP"),n=m(t,i,it,e.reportAllChanges),v((function(){i.value=performance.now()-r.timeStamp,at[i.id]=!0,n(!0)}))}))}}))}((function(e){var n=function(t){var e={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadDuration:0,elementRenderDelay:t.value};if(t.entries.length){var n=r();if(n){var i=n.activationStart||0,a=t.entries[t.entries.length-1],c=a.url&&performance.getEntriesByType("resource").filter((function(t){return t.name===a.url}))[0],u=Math.max(0,n.responseStart-i),s=Math.max(u,c?(c.requestStart||c.startTime)-i:0),f=Math.max(s,c?c.responseEnd-i:0),d=Math.max(f,a.startTime-i);e={element:o(a.element),timeToFirstByte:u,resourceLoadDelay:s-u,resourceLoadDuration:f-s,elementRenderDelay:d-f,navigationEntry:n,lcpEntry:a},a.url&&(e.url=a.url),c&&(e.lcpResourceEntry=c)}}return Object.assign(t,{attribution:e})}(e);t(n)}),e)},ct=[800,1800],ut=function t(e){document.prerendering?L((function(){return t(e)})):"complete"!==document.readyState?addEventListener("load",(function(){return t(e)}),!0):setTimeout(e,0)},st=function(t,e){e=e||{};var n=d("TTFB"),i=m(t,n,ct,e.reportAllChanges);ut((function(){var a=r();a&&(n.value=Math.max(a.responseStart-f(),0),n.entries=[a],i(!0),s((function(){n=d("TTFB",0),(i=m(t,n,ct,e.reportAllChanges))(!0)})))}))},ft=function(t,e){st((function(e){var n=function(t){var e={waitingDuration:0,cacheDuration:0,dnsDuration:0,connectionDuration:0,requestDuration:0};if(t.entries.length){var n=t.entries[0],r=n.activationStart||0,i=Math.max((n.workerStart||n.fetchStart)-r,0),a=Math.max(n.domainLookupStart-r,0),o=Math.max(n.connectStart-r,0),c=Math.max(n.connectEnd-r,0);e={waitingDuration:i,cacheDuration:a-i,dnsDuration:o-a,connectionDuration:c-o,requestDuration:t.value-c,navigationEntry:n}}return Object.assign(t,{attribution:e})}(e);t(n)}),e)},dt={passive:!0,capture:!0},lt=new Date,mt=function(t,e){Z||(Z=e,$=t,tt=new Date,gt(removeEventListener),vt())},vt=function(){if($>=0&&$<tt-lt){var t={entryType:"first-input",name:Z.type,target:Z.target,cancelable:Z.cancelable,startTime:Z.timeStamp,processingStart:Z.timeStamp+$};et.forEach((function(e){e(t)})),et=[]}},pt=function(t){if(t.cancelable){var e=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;"pointerdown"==t.type?function(t,e){var n=function(){mt(t,e),i()},r=function(){i()},i=function(){removeEventListener("pointerup",n,dt),removeEventListener("pointercancel",r,dt)};addEventListener("pointerup",n,dt),addEventListener("pointercancel",r,dt)}(e,t):mt(e,t)}},gt=function(t){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return t(e,pt,dt)}))},ht=[100,300],Tt=function(t,e){e=e||{},L((function(){var n,r=b(),i=d("FID"),a=function(t){t.startTime<r.firstHiddenTime&&(i.value=t.processingStart-t.startTime,i.entries.push(t),n(!0))},o=function(t){t.forEach(a)},c=l("first-input",o);n=m(t,i,ht,e.reportAllChanges),c&&(p(g((function(){o(c.takeRecords()),c.disconnect()}))),s((function(){var r;i=d("FID"),n=m(t,i,ht,e.reportAllChanges),et=[],$=-1,Z=null,gt(addEventListener),r=a,et.push(r),vt()})))}))},yt=function(t,e){Tt((function(e){var n=function(t){var e=t.entries[0],n={eventTarget:o(e.target),eventType:e.name,eventTime:e.startTime,eventEntry:e,loadState:i(e.startTime)};return Object.assign(t,{attribution:n})}(e);t(n)}),e)};


/***/ }),

/***/ "./node_modules/web-vitals/dist/web-vitals.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLSThresholds: () => (/* binding */ L),
/* harmony export */   FCPThresholds: () => (/* binding */ b),
/* harmony export */   FIDThresholds: () => (/* binding */ $),
/* harmony export */   INPThresholds: () => (/* binding */ N),
/* harmony export */   LCPThresholds: () => (/* binding */ _),
/* harmony export */   TTFBThresholds: () => (/* binding */ J),
/* harmony export */   onCLS: () => (/* binding */ w),
/* harmony export */   onFCP: () => (/* binding */ S),
/* harmony export */   onFID: () => (/* binding */ ee),
/* harmony export */   onINP: () => (/* binding */ j),
/* harmony export */   onLCP: () => (/* binding */ G),
/* harmony export */   onTTFB: () => (/* binding */ Q)
/* harmony export */ });
var e,n,t,r,i,o=-1,a=function(e){addEventListener("pageshow",(function(n){n.persisted&&(o=n.timeStamp,e(n))}),!0)},c=function(){var e=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(e&&e.responseStart>0&&e.responseStart<performance.now())return e},u=function(){var e=c();return e&&e.activationStart||0},f=function(e,n){var t=c(),r="navigate";o>=0?r="back-forward-cache":t&&(document.prerendering||u()>0?r="prerender":document.wasDiscarded?r="restore":t.type&&(r=t.type.replace(/_/g,"-")));return{name:e,value:void 0===n?-1:n,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},s=function(e,n,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){n(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},t||{})),r}}catch(e){}},d=function(e,n,t,r){var i,o;return function(a){n.value>=0&&(a||r)&&((o=n.value-(i||0))||void 0===i)&&(i=n.value,n.delta=o,n.rating=function(e,n){return e>n[1]?"poor":e>n[0]?"needs-improvement":"good"}(n.value,t),e(n))}},l=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},p=function(e){document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&e()}))},v=function(e){var n=!1;return function(){n||(e(),n=!0)}},m=-1,h=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},g=function(e){"hidden"===document.visibilityState&&m>-1&&(m="visibilitychange"===e.type?e.timeStamp:0,T())},y=function(){addEventListener("visibilitychange",g,!0),addEventListener("prerenderingchange",g,!0)},T=function(){removeEventListener("visibilitychange",g,!0),removeEventListener("prerenderingchange",g,!0)},E=function(){return m<0&&(m=h(),y(),a((function(){setTimeout((function(){m=h(),y()}),0)}))),{get firstHiddenTime(){return m}}},C=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},b=[1800,3e3],S=function(e,n){n=n||{},C((function(){var t,r=E(),i=f("FCP"),o=s("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(o.disconnect(),e.startTime<r.firstHiddenTime&&(i.value=Math.max(e.startTime-u(),0),i.entries.push(e),t(!0)))}))}));o&&(t=d(e,i,b,n.reportAllChanges),a((function(r){i=f("FCP"),t=d(e,i,b,n.reportAllChanges),l((function(){i.value=performance.now()-r.timeStamp,t(!0)}))})))}))},L=[.1,.25],w=function(e,n){n=n||{},S(v((function(){var t,r=f("CLS",0),i=0,o=[],c=function(e){e.forEach((function(e){if(!e.hadRecentInput){var n=o[0],t=o[o.length-1];i&&e.startTime-t.startTime<1e3&&e.startTime-n.startTime<5e3?(i+=e.value,o.push(e)):(i=e.value,o=[e])}})),i>r.value&&(r.value=i,r.entries=o,t())},u=s("layout-shift",c);u&&(t=d(e,r,L,n.reportAllChanges),p((function(){c(u.takeRecords()),t(!0)})),a((function(){i=0,r=f("CLS",0),t=d(e,r,L,n.reportAllChanges),l((function(){return t()}))})),setTimeout(t,0))})))},A=0,I=1/0,P=0,M=function(e){e.forEach((function(e){e.interactionId&&(I=Math.min(I,e.interactionId),P=Math.max(P,e.interactionId),A=P?(P-I)/7+1:0)}))},k=function(){return e?A:performance.interactionCount||0},F=function(){"interactionCount"in performance||e||(e=s("event",M,{type:"event",buffered:!0,durationThreshold:0}))},D=[],x=new Map,R=0,B=function(){var e=Math.min(D.length-1,Math.floor((k()-R)/50));return D[e]},H=[],q=function(e){if(H.forEach((function(n){return n(e)})),e.interactionId||"first-input"===e.entryType){var n=D[D.length-1],t=x.get(e.interactionId);if(t||D.length<10||e.duration>n.latency){if(t)e.duration>t.latency?(t.entries=[e],t.latency=e.duration):e.duration===t.latency&&e.startTime===t.entries[0].startTime&&t.entries.push(e);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};x.set(r.id,r),D.push(r)}D.sort((function(e,n){return n.latency-e.latency})),D.length>10&&D.splice(10).forEach((function(e){return x.delete(e.id)}))}}},O=function(e){var n=self.requestIdleCallback||self.setTimeout,t=-1;return e=v(e),"hidden"===document.visibilityState?e():(t=n(e),p(e)),t},N=[200,500],j=function(e,n){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(n=n||{},C((function(){var t;F();var r,i=f("INP"),o=function(e){O((function(){e.forEach(q);var n=B();n&&n.latency!==i.value&&(i.value=n.latency,i.entries=n.entries,r())}))},c=s("event",o,{durationThreshold:null!==(t=n.durationThreshold)&&void 0!==t?t:40});r=d(e,i,N,n.reportAllChanges),c&&(c.observe({type:"first-input",buffered:!0}),p((function(){o(c.takeRecords()),r(!0)})),a((function(){R=k(),D.length=0,x.clear(),i=f("INP"),r=d(e,i,N,n.reportAllChanges)})))})))},_=[2500,4e3],z={},G=function(e,n){n=n||{},C((function(){var t,r=E(),i=f("LCP"),o=function(e){n.reportAllChanges||(e=e.slice(-1)),e.forEach((function(e){e.startTime<r.firstHiddenTime&&(i.value=Math.max(e.startTime-u(),0),i.entries=[e],t())}))},c=s("largest-contentful-paint",o);if(c){t=d(e,i,_,n.reportAllChanges);var m=v((function(){z[i.id]||(o(c.takeRecords()),c.disconnect(),z[i.id]=!0,t(!0))}));["keydown","click"].forEach((function(e){addEventListener(e,(function(){return O(m)}),!0)})),p(m),a((function(r){i=f("LCP"),t=d(e,i,_,n.reportAllChanges),l((function(){i.value=performance.now()-r.timeStamp,z[i.id]=!0,t(!0)}))}))}}))},J=[800,1800],K=function e(n){document.prerendering?C((function(){return e(n)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(n)}),!0):setTimeout(n,0)},Q=function(e,n){n=n||{};var t=f("TTFB"),r=d(e,t,J,n.reportAllChanges);K((function(){var i=c();i&&(t.value=Math.max(i.responseStart-u(),0),t.entries=[i],r(!0),a((function(){t=f("TTFB",0),(r=d(e,t,J,n.reportAllChanges))(!0)})))}))},U={passive:!0,capture:!0},V=new Date,W=function(e,i){n||(n=i,t=e,r=new Date,Z(removeEventListener),X())},X=function(){if(t>=0&&t<r-V){var e={entryType:"first-input",name:n.type,target:n.target,cancelable:n.cancelable,startTime:n.timeStamp,processingStart:n.timeStamp+t};i.forEach((function(n){n(e)})),i=[]}},Y=function(e){if(e.cancelable){var n=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,n){var t=function(){W(e,n),i()},r=function(){i()},i=function(){removeEventListener("pointerup",t,U),removeEventListener("pointercancel",r,U)};addEventListener("pointerup",t,U),addEventListener("pointercancel",r,U)}(n,e):W(n,e)}},Z=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(n){return e(n,Y,U)}))},$=[100,300],ee=function(e,r){r=r||{},C((function(){var o,c=E(),u=f("FID"),l=function(e){e.startTime<c.firstHiddenTime&&(u.value=e.processingStart-e.startTime,u.entries.push(e),o(!0))},m=function(e){e.forEach(l)},h=s("first-input",m);o=d(e,u,$,r.reportAllChanges),h&&(p(v((function(){m(h.takeRecords()),h.disconnect()}))),a((function(){var a;u=f("FID"),o=d(e,u,$,r.reportAllChanges),i=[],t=-1,n=null,Z(addEventListener),a=l,i.push(a),X()})))}))};


/***/ }),

/***/ "./public/app/core/services/echo/backends/grafana-javascript-agent/EchoSrvTransport.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EchoSrvTransport: () => (/* binding */ EchoSrvTransport)
/* harmony export */ });
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/transports/base.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/services/EchoSrv.ts");



class EchoSrvTransport extends _grafana_faro_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransport {
  constructor(options) {
    super();
    this.name = "EchoSrvTransport";
    this.version = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.buildInfo.version;
    this.ignoreUrls = [];
    this.ignoreUrls = options?.ignoreUrls ?? [];
  }
  send(items) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getEchoSrv)().addEvent({
      type: _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.EchoEventType.GrafanaJavascriptAgent,
      payload: items
    });
  }
  isBatched() {
    return true;
  }
  getIgnoreUrls() {
    return this.ignoreUrls;
  }
}


/***/ }),

/***/ "./public/app/core/services/echo/backends/grafana-javascript-agent/GrafanaJavascriptAgentBackend.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrafanaJavascriptAgentBackend: () => (/* binding */ GrafanaJavascriptAgentBackend),
/* harmony export */   TRACKING_URLS: () => (/* binding */ TRACKING_URLS)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/text/string.ts");
/* harmony import */ var _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/internalLogger/const.js");
/* harmony import */ var _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/config/getWebInstrumentations.js");
/* harmony import */ var _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/transports/fetch/transport.js");
/* harmony import */ var _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/faro-web-sdk/dist/esm/initialize.js");
/* harmony import */ var _grafana_faro_web_tracing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/faro-web-tracing/dist/esm/instrumentation.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/services/EchoSrv.ts");
/* harmony import */ var _EchoSrvTransport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/services/echo/backends/grafana-javascript-agent/EchoSrvTransport.ts");
/* harmony import */ var _beforeSendHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/services/echo/backends/grafana-javascript-agent/beforeSendHandler.ts");








function isCrossOriginIframe() {
  try {
    return document.location.hostname !== window.parent.location.hostname;
  } catch (e) {
    return true;
  }
}
const TRACKING_URLS = [
  /\.(google-analytics|googletagmanager)\.com/,
  /frontend-metrics/,
  /\/collect(?:\/[\w]*)?$/
];
class GrafanaJavascriptAgentBackend {
  constructor(options) {
    this.options = options;
    this.supportedEvents = [_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.EchoEventType.GrafanaJavascriptAgent];
    // noop because the EchoSrvTransport registered in Faro will already broadcast all signals emitted by the Faro API
    this.addEvent = (e) => {
    };
    // backend will log events to stdout, and at least in case of hosted grafana they will be
    // ingested into Loki. Due to Loki limitations logs cannot be backdated,
    // so not using buffering for this backend to make sure that events are logged as close
    // to their context as possible
    this.flush = () => {
    };
    const instrumentations = [
      ...(0,_grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_2__.getWebInstrumentations)({
        captureConsole: options.consoleInstrumentalizationEnabled,
        enablePerformanceInstrumentation: options.performanceInstrumentalizationEnabled,
        enableContentSecurityPolicyInstrumentation: options.cspInstrumentalizationEnabled
      })
    ];
    if (options.tracingInstrumentalizationEnabled) {
      instrumentations.push(new _grafana_faro_web_tracing__WEBPACK_IMPORTED_MODULE_5__.TracingInstrumentation());
    }
    const ignoreUrls = [...TRACKING_URLS, ...options.ignoreUrls];
    if (options.customEndpoint) {
      ignoreUrls.unshift(new RegExp(`.*${(0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.escapeRegex)(options.customEndpoint)}.*`));
    }
    const transports = [new _EchoSrvTransport__WEBPACK_IMPORTED_MODULE_7__.EchoSrvTransport({ ignoreUrls })];
    if (options.customEndpoint && !isCrossOriginIframe()) {
      transports.push(new _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_3__.FetchTransport({ url: options.customEndpoint, apiKey: options.apiKey }));
    }
    const grafanaJavaScriptAgentOptions = {
      app: {
        name: "grafana-frontend",
        version: options.buildInfo.version,
        environment: options.buildInfo.env
      },
      user: {
        id: options.userIdentifier
      },
      instrumentations,
      transports,
      consoleInstrumentation: {
        serializeErrors: true
      },
      trackWebVitalsAttribution: options.webVitalsAttribution,
      ignoreErrors: [
        "ResizeObserver loop limit exceeded",
        "ResizeObserver loop completed",
        "Non-Error exception captured with keys",
        "Failed sending payload to the receiver"
      ],
      ignoreUrls,
      sessionTracking: {
        persistent: true
      },
      batching: {
        sendTimeout: 1e3
      },
      beforeSend: (item) => (0,_beforeSendHandler__WEBPACK_IMPORTED_MODULE_8__.beforeSendHandler)(options.botFilterEnabled, item),
      internalLoggerLevel: options.internalLoggerLevel ?? _grafana_faro_core__WEBPACK_IMPORTED_MODULE_1__.defaultInternalLoggerLevel
    };
    (0,_grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_4__.initializeFaro)(grafanaJavaScriptAgentOptions);
  }
}


/***/ }),

/***/ "./public/app/core/services/echo/backends/grafana-javascript-agent/beforeSendHandler.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   beforeSendHandler: () => (/* binding */ beforeSendHandler)
/* harmony export */ });

const bots = "(googlebot|googlebot-mobile|googlebot-image|google favicon|mediapartners-google|bingbot|slurp|commons-httpclient|python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|fast-webcrawler|fast enterprise crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|gingercrawler|webmon |httrack|webcrawler|grub.org|usinenouvellecrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|aisearchbot|ioi|ips-agent|tagoobot|mj12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|linguee bot|voyager|cyberpatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|adidxbot|blekkobot|ezooms|mail.ru_bot|discobot|heritrix|findthatfile|europarchive.org|nerdbynature.bot|sistrix crawler|ahrefsbot|aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|retrevopageanalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|duckduckbot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|wesee:search|niki-bot|crystalsemanticsbot|rogerbot|360spider|psbot|interfaxscanbot|lipperhey seo service|cc metadata scraper|g00g1e.net|grapeshotcrawler|urlappendbot|brainobot|fr-crawler|binlar|simplecrawler|livelapbot|twitterbot|cxensebot|smtbot|bnf.fr_bot|a6-indexer|admantx|facebot|orangebot|memorybot|advbot|megaindex|semanticscholarbot|ltx71|nerdybot|xovibot|bubing|qwantify|archive.org_bot|applebot|tweetmemebot|crawler4j|findxbot|semrushbot|yoozbot|lipperhey|y!j-asr|domain re-animator bot|addthis|bytespider)";
const botsRegex = new RegExp(bots);
function beforeSendHandler(botFilterEnabled, item) {
  if (!botFilterEnabled) {
    return item;
  }
  if (typeof item.meta.browser?.userAgent !== "string") {
    return null;
  }
  const userAgent = item.meta.browser?.userAgent?.trim().toLowerCase();
  if (!userAgent) {
    return null;
  }
  if (userAgent.length > 512) {
    return null;
  }
  try {
    const isBot = botsRegex.test(userAgent);
    return isBot ? null : item;
  } catch (error) {
    return null;
  }
}


/***/ })

}]);
//# sourceMappingURL=public_app_core_services_echo_backends_grafana-javascript-agent_GrafanaJavascriptAgentBackend_ts.28565130e42e75819eb7.js.map