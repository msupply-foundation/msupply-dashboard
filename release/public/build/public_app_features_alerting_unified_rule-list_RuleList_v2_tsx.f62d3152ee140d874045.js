"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_alerting_unified_rule-list_RuleList_v2_tsx"],{

/***/ "./node_modules/ix/aborterror.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbortError: () => (/* binding */ AbortError),
/* harmony export */   throwIfAborted: () => (/* binding */ throwIfAborted)
/* harmony export */ });
/* harmony import */ var _util_isiterable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/ix/util/isiterable.mjs");

/** @ignore */
class AbortError extends Error {
    constructor(message = 'The operation has been aborted') {
        super(message);
        Object.setPrototypeOf(this, AbortError.prototype);
        Error.captureStackTrace(this, this.constructor);
        this.name = 'AbortError';
    }
    get [Symbol.toStringTag]() {
        return 'AbortError';
    }
}
function throwIfAborted(signal) {
    if (signal && signal.aborted) {
        throw new AbortError();
    }
}
Object.defineProperty(AbortError, Symbol.hasInstance, {
    writable: true,
    configurable: true,
    value(x) {
        return ((0,_util_isiterable_mjs__WEBPACK_IMPORTED_MODULE_0__.isObject)(x) && (x.constructor.name === 'AbortError' || x[Symbol.toStringTag] === 'AbortError'));
    },
});

//# sourceMappingURL=aborterror.mjs.map


/***/ }),

/***/ "./node_modules/ix/asynciterable/_sleep.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sleep: () => (/* binding */ sleep)
/* harmony export */ });
/* harmony import */ var _aborterror_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/ix/aborterror.mjs");

function sleep(dueTime, signal) {
    return new Promise((resolve, reject) => {
        if (signal && signal.aborted) {
            reject(new _aborterror_mjs__WEBPACK_IMPORTED_MODULE_0__.AbortError());
        }
        const id = setTimeout(() => {
            if (signal) {
                signal.removeEventListener('abort', onAbort);
                if (signal.aborted) {
                    onAbort();
                    return;
                }
            }
            resolve();
        }, dueTime);
        if (signal) {
            signal.addEventListener('abort', onAbort, { once: true });
        }
        function onAbort() {
            clearTimeout(id);
            reject(new _aborterror_mjs__WEBPACK_IMPORTED_MODULE_0__.AbortError());
        }
    });
}

//# sourceMappingURL=_sleep.mjs.map


/***/ }),

/***/ "./node_modules/ix/asynciterable/asynciterablex.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncIterableX: () => (/* binding */ AsyncIterableX),
/* harmony export */   AsyncSink: () => (/* binding */ AsyncSink),
/* harmony export */   FromArrayIterable: () => (/* binding */ FromArrayIterable),
/* harmony export */   FromAsyncIterable: () => (/* binding */ FromAsyncIterable),
/* harmony export */   FromObservableAsyncIterable: () => (/* binding */ FromObservableAsyncIterable),
/* harmony export */   FromPromiseIterable: () => (/* binding */ FromPromiseIterable),
/* harmony export */   as: () => (/* binding */ as),
/* harmony export */   from: () => (/* binding */ from)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _util_bindcallback_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/ix/util/bindcallback.mjs");
/* harmony import */ var _util_identity_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/ix/util/identity.mjs");
/* harmony import */ var _util_isiterable_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/ix/util/isiterable.mjs");
/* harmony import */ var _util_tolength_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/ix/util/tolength.mjs");
/* harmony import */ var _aborterror_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/ix/aborterror.mjs");






/**
 * This class serves as the base for all operations which support [Symbol.asyncIterator].
 */
class AsyncIterableX {
    /** @nocollapse */
    forEach(projection, thisArg, signal) {
        var _a, e_1, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const source = signal ? new WithAbortAsyncIterable(this, signal) : this;
            let i = 0;
            try {
                for (var _d = true, source_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncValues)(source), source_1_1; source_1_1 = yield source_1.next(), _a = source_1_1.done, !_a; _d = true) {
                    _c = source_1_1.value;
                    _d = false;
                    const item = _c;
                    yield projection.call(thisArg, item, i++, signal);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = source_1.return)) yield _b.call(source_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    }
    pipe(...args) {
        let i = -1;
        const n = args.length;
        let acc = this;
        while (++i < n) {
            acc = args[i](AsyncIterableX.as(acc));
        }
        return acc;
    }
    /** @nocollapse */
    static from(source, selector = _util_identity_mjs__WEBPACK_IMPORTED_MODULE_2__.identityAsync, thisArg) {
        const fn = (0,_util_bindcallback_mjs__WEBPACK_IMPORTED_MODULE_1__.bindCallback)(selector, thisArg, 2);
        if ((0,_util_isiterable_mjs__WEBPACK_IMPORTED_MODULE_3__.isIterable)(source) || (0,_util_isiterable_mjs__WEBPACK_IMPORTED_MODULE_3__.isAsyncIterable)(source)) {
            return new FromAsyncIterable(source, fn);
        }
        if ((0,_util_isiterable_mjs__WEBPACK_IMPORTED_MODULE_3__.isPromise)(source)) {
            return new FromPromiseIterable(source, fn);
        }
        if ((0,_util_isiterable_mjs__WEBPACK_IMPORTED_MODULE_3__.isObservable)(source)) {
            return new FromObservableAsyncIterable(source, fn);
        }
        if ((0,_util_isiterable_mjs__WEBPACK_IMPORTED_MODULE_3__.isArrayLike)(source)) {
            return new FromArrayIterable(source, fn);
        }
        if ((0,_util_isiterable_mjs__WEBPACK_IMPORTED_MODULE_3__.isIterator)(source)) {
            return new FromAsyncIterable({ [Symbol.asyncIterator]: () => source }, fn);
        }
        throw new TypeError('Input type not supported');
    }
    /**
     * Converts the input into an async-iterable sequence.
     *
     * @param {*} source The source to convert to an async-iterable sequence.
     * @returns {AsyncIterableX<*>} An async-iterable containing the input.
     */
    /** @nocollapse */
    static as(source) {
        if (source instanceof AsyncIterableX) {
            return source;
        }
        if (typeof source === 'string') {
            return new FromArrayIterable([source], _util_identity_mjs__WEBPACK_IMPORTED_MODULE_2__.identityAsync);
        }
        if ((0,_util_isiterable_mjs__WEBPACK_IMPORTED_MODULE_3__.isIterable)(source) || (0,_util_isiterable_mjs__WEBPACK_IMPORTED_MODULE_3__.isAsyncIterable)(source)) {
            return new FromAsyncIterable(source, _util_identity_mjs__WEBPACK_IMPORTED_MODULE_2__.identityAsync);
        }
        if ((0,_util_isiterable_mjs__WEBPACK_IMPORTED_MODULE_3__.isPromise)(source)) {
            return new FromPromiseIterable(source, _util_identity_mjs__WEBPACK_IMPORTED_MODULE_2__.identityAsync);
        }
        if ((0,_util_isiterable_mjs__WEBPACK_IMPORTED_MODULE_3__.isObservable)(source)) {
            return new FromObservableAsyncIterable(source, _util_identity_mjs__WEBPACK_IMPORTED_MODULE_2__.identityAsync);
        }
        if ((0,_util_isiterable_mjs__WEBPACK_IMPORTED_MODULE_3__.isArrayLike)(source)) {
            return new FromArrayIterable(source, _util_identity_mjs__WEBPACK_IMPORTED_MODULE_2__.identityAsync);
        }
        return new FromArrayIterable([source], _util_identity_mjs__WEBPACK_IMPORTED_MODULE_2__.identityAsync);
    }
}
AsyncIterableX.prototype[Symbol.toStringTag] = 'AsyncIterableX';
Object.defineProperty(AsyncIterableX, Symbol.hasInstance, {
    writable: true,
    configurable: true,
    value(inst) {
        return !!(inst && inst[Symbol.toStringTag] === 'AsyncIterableX');
    },
});
const ARRAY_VALUE = 'value';
const ARRAY_ERROR = 'error';
/** @ignore */
/** @ignore */
class AsyncSink {
    constructor() {
        this._ended = false;
        this._values = [];
        this._resolvers = [];
    }
    [Symbol.asyncIterator]() {
        return this;
    }
    write(value) {
        this._push({ type: ARRAY_VALUE, value });
    }
    error(error) {
        this._push({ type: ARRAY_ERROR, error });
    }
    _push(item) {
        if (this._ended) {
            throw new Error('AsyncSink already ended');
        }
        if (this._resolvers.length > 0) {
            const { resolve, reject } = this._resolvers.shift();
            if (item.type === ARRAY_ERROR) {
                reject(item.error);
            }
            else {
                resolve({ done: false, value: item.value });
            }
        }
        else {
            this._values.push(item);
        }
    }
    next() {
        if (this._values.length > 0) {
            const { type, value, error } = this._values.shift();
            if (type === ARRAY_ERROR) {
                return Promise.reject(error);
            }
            else {
                return Promise.resolve({ done: false, value });
            }
        }
        if (this._ended) {
            return Promise.resolve({ done: true });
        }
        return new Promise((resolve, reject) => {
            this._resolvers.push({ resolve, reject });
        });
    }
    end() {
        while (this._resolvers.length > 0) {
            this._resolvers.shift().resolve({ done: true });
        }
        this._ended = true;
    }
}
/** @ignore */
class FromArrayIterable extends AsyncIterableX {
    constructor(source, selector) {
        super();
        this._source = source;
        this._selector = selector;
    }
    [Symbol.asyncIterator]() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* _a() {
            let i = 0;
            const length = (0,_util_tolength_mjs__WEBPACK_IMPORTED_MODULE_4__.toLength)(this._source.length);
            while (i < length) {
                yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(this._selector(this._source[i], i++)));
            }
        });
    }
}
/** @ignore */
class FromAsyncIterable extends AsyncIterableX {
    constructor(source, selector) {
        super();
        this._source = source;
        this._selector = selector;
    }
    [Symbol.asyncIterator](signal) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* _a() {
            var _b, e_2, _c, _d, _e, e_3, _f, _g;
            let i = 0;
            if (signal && this._source instanceof AsyncIterableX) {
                try {
                    for (var _h = true, _j = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncValues)(new WithAbortAsyncIterable(this._source, signal)), _k; _k = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(_j.next()), _b = _k.done, !_b; _h = true) {
                        _d = _k.value;
                        _h = false;
                        const item = _d;
                        yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(this._selector(item, i++)));
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (!_h && !_b && (_c = _j.return)) yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(_c.call(_j));
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            else {
                (0,_aborterror_mjs__WEBPACK_IMPORTED_MODULE_5__.throwIfAborted)(signal);
                try {
                    for (var _l = true, _m = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncValues)(this._source), _o; _o = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(_m.next()), _e = _o.done, !_e; _l = true) {
                        _g = _o.value;
                        _l = false;
                        const item = _g;
                        (0,_aborterror_mjs__WEBPACK_IMPORTED_MODULE_5__.throwIfAborted)(signal);
                        const value = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(this._selector(item, i++));
                        (0,_aborterror_mjs__WEBPACK_IMPORTED_MODULE_5__.throwIfAborted)(signal);
                        yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(value);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (!_l && !_e && (_f = _m.return)) yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(_f.call(_m));
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        });
    }
}
/** @ignore */
class FromPromiseIterable extends AsyncIterableX {
    constructor(source, selector) {
        super();
        this._source = source;
        this._selector = selector;
    }
    [Symbol.asyncIterator]() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* _a() {
            const item = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(this._source);
            yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(this._selector(item, 0)));
        });
    }
}
/** @ignore */
class FromObservableAsyncIterable extends AsyncIterableX {
    constructor(observable, selector) {
        super();
        this._observable = observable;
        this._selector = selector;
    }
    [Symbol.asyncIterator](signal) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* _a() {
            (0,_aborterror_mjs__WEBPACK_IMPORTED_MODULE_5__.throwIfAborted)(signal);
            const sink = new AsyncSink();
            const subscription = this._observable.subscribe({
                next(value) {
                    sink.write(value);
                },
                error(err) {
                    sink.error(err);
                },
                complete() {
                    sink.end();
                },
            });
            function onAbort() {
                sink.error(new _aborterror_mjs__WEBPACK_IMPORTED_MODULE_5__.AbortError());
            }
            if (signal) {
                signal.addEventListener('abort', onAbort);
            }
            let i = 0;
            try {
                for (let next; !(next = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(sink.next())).done;) {
                    (0,_aborterror_mjs__WEBPACK_IMPORTED_MODULE_5__.throwIfAborted)(signal);
                    yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(this._selector(next.value, i++)));
                }
            }
            finally {
                if (signal) {
                    signal.removeEventListener('abort', onAbort);
                }
                subscription.unsubscribe();
            }
        });
    }
}
class WithAbortAsyncIterable {
    constructor(source, signal) {
        this._source = source;
        this._signal = signal;
    }
    [Symbol.asyncIterator]() {
        // @ts-ignore
        return this._source[Symbol.asyncIterator](this._signal);
    }
}
try {
    ((isBrowser) => {
        if (isBrowser) {
            return;
        }
        AsyncIterableX.prototype['pipe'] = nodePipe;
        const readableOpts = (x, opts = x._writableState || { objectMode: true }) => opts;
        function nodePipe(...args) {
            let i = -1;
            let end;
            const n = args.length;
            let prev = this;
            let next;
            while (++i < n) {
                next = args[i];
                if (typeof next === 'function') {
                    prev = next(AsyncIterableX.as(prev));
                }
                else if ((0,_util_isiterable_mjs__WEBPACK_IMPORTED_MODULE_3__.isWritableNodeStream)(next)) {
                    ({ end = true } = args[i + 1] || {});
                    // prettier-ignore
                    return (0,_util_isiterable_mjs__WEBPACK_IMPORTED_MODULE_3__.isReadableNodeStream)(prev) ? prev.pipe(next, { end }) :
                        AsyncIterableX.as(prev).toNodeStream(readableOpts(next)).pipe(next, { end });
                }
            }
            return prev;
        }
    })(typeof window === 'object' && typeof document === 'object' && document.nodeType === 9);
}
catch (e) {
    /* */
}
const as = AsyncIterableX.as;
const from = AsyncIterableX.from;

//# sourceMappingURL=asynciterablex.mjs.map


/***/ }),

/***/ "./node_modules/ix/asynciterable/concat.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConcatAsyncIterable: () => (/* binding */ ConcatAsyncIterable),
/* harmony export */   _concatAll: () => (/* binding */ _concatAll),
/* harmony export */   concat: () => (/* binding */ concat)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _asynciterablex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/ix/asynciterable/asynciterablex.mjs");
/* harmony import */ var _operators_withabort_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/ix/asynciterable/operators/withabort.mjs");
/* harmony import */ var _aborterror_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/ix/aborterror.mjs");




/** @ignore */
class ConcatAsyncIterable extends _asynciterablex_mjs__WEBPACK_IMPORTED_MODULE_1__.AsyncIterableX {
    constructor(source) {
        super();
        this._source = source;
    }
    [Symbol.asyncIterator](signal) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* _a() {
            var _b, e_1, _c, _d;
            (0,_aborterror_mjs__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(signal);
            for (const outer of this._source) {
                try {
                    for (var _e = true, _f = (e_1 = void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncValues)((0,_operators_withabort_mjs__WEBPACK_IMPORTED_MODULE_2__.wrapWithAbort)(outer, signal))), _g; _g = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(_f.next()), _b = _g.done, !_b; _e = true) {
                        _d = _g.value;
                        _e = false;
                        const item = _d;
                        yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(item);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (!_e && !_b && (_c = _f.return)) yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(_c.call(_f));
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    }
}
function _concatAll(source) {
    return new ConcatAsyncIterable(source);
}
/**
 * Concatenates all async-iterable sequences in the given sequences, as long as the previous async-iterable
 * sequence terminated successfully.
 *
 * @template T The type of the elements in the sequences.
 * @param {...AsyncIterable<T>[]} args The async-iterable sources.
 * @returns {AsyncIterableX<T>} An async-iterable sequence that contains the elements of each given sequence, in sequential order.
 */
function concat(...args) {
    return new ConcatAsyncIterable(args);
}

//# sourceMappingURL=concat.mjs.map


/***/ }),

/***/ "./node_modules/ix/asynciterable/empty.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   empty: () => (/* binding */ empty)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _asynciterablex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/ix/asynciterable/asynciterablex.mjs");
/* harmony import */ var _aborterror_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/ix/aborterror.mjs");



class EmptyAsyncIterable extends _asynciterablex_mjs__WEBPACK_IMPORTED_MODULE_1__.AsyncIterableX {
    [Symbol.asyncIterator](signal) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* _a() {
            (0,_aborterror_mjs__WEBPACK_IMPORTED_MODULE_2__.throwIfAborted)(signal);
        });
    }
}
/**
 * Returns an empty async-iterable sequence.
 *
 * @template TSource The type used for the async-iterable type parameter of the resulting sequence.
 * @returns {AsyncIterableX<never>} An async-iterable sequence with no elements.
 */
function empty() {
    return new EmptyAsyncIterable();
}

//# sourceMappingURL=empty.mjs.map


/***/ }),

/***/ "./node_modules/ix/asynciterable/interval.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interval: () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _asynciterablex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/ix/asynciterable/asynciterablex.mjs");
/* harmony import */ var _sleep_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/ix/asynciterable/_sleep.mjs");
/* harmony import */ var _aborterror_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/ix/aborterror.mjs");




class IntervalAsyncIterable extends _asynciterablex_mjs__WEBPACK_IMPORTED_MODULE_1__.AsyncIterableX {
    constructor(dueTime) {
        super();
        this._dueTime = dueTime;
    }
    [Symbol.asyncIterator](signal) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* _a() {
            (0,_aborterror_mjs__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(signal);
            let i = 0;
            while (1) {
                yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)((0,_sleep_mjs__WEBPACK_IMPORTED_MODULE_2__.sleep)(this._dueTime, signal));
                yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(i++);
            }
        });
    }
}
/**
 * Produces a new item in an async-iterable at the given interval cycle time.
 *
 * @param {number} dueTime The due time in milliseconds to spawn a new item.
 * @returns {AsyncIterableX<number>} An async-iterable producing values at the specified interval.
 */
function interval(dueTime) {
    return new IntervalAsyncIterable(dueTime);
}

//# sourceMappingURL=interval.mjs.map


/***/ }),

/***/ "./node_modules/ix/asynciterable/merge.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MergeAsyncIterable: () => (/* binding */ MergeAsyncIterable),
/* harmony export */   merge: () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _asynciterablex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/ix/asynciterable/asynciterablex.mjs");
/* harmony import */ var _operators_withabort_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/ix/asynciterable/operators/withabort.mjs");
/* harmony import */ var _aborterror_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/ix/aborterror.mjs");
/* harmony import */ var _util_safeRace_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/ix/util/safeRace.mjs");





// eslint-disable-next-line @typescript-eslint/no-empty-function
const NEVER_PROMISE = new Promise(() => { });
function wrapPromiseWithIndex(promise, index) {
    return promise
        .then(({ value, done }) => ({ value, done, index }))
        .catch((error) => ({ error, index }));
}
/** @ignore */
class MergeAsyncIterable extends _asynciterablex_mjs__WEBPACK_IMPORTED_MODULE_1__.AsyncIterableX {
    constructor(source) {
        super();
        this._source = source;
    }
    [Symbol.asyncIterator](signal) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* _a() {
            (0,_aborterror_mjs__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(signal);
            const length = this._source.length;
            const iterators = new Array(length);
            const nexts = new Array(length);
            let active = length;
            for (let i = 0; i < length; i++) {
                const iterator = (0,_operators_withabort_mjs__WEBPACK_IMPORTED_MODULE_2__.wrapWithAbort)(this._source[i], signal)[Symbol.asyncIterator]();
                iterators[i] = iterator;
                nexts[i] = wrapPromiseWithIndex(iterator.next(), i);
            }
            while (active > 0) {
                const next = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)((0,_util_safeRace_mjs__WEBPACK_IMPORTED_MODULE_4__.safeRace)(nexts));
                if (next.hasOwnProperty('error')) {
                    throw next.error;
                }
                else if (next.done) {
                    nexts[next.index] = NEVER_PROMISE;
                    active--;
                }
                else {
                    const iterator$ = iterators[next.index];
                    nexts[next.index] = wrapPromiseWithIndex(iterator$.next(), next.index);
                    yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(next.value);
                }
            }
        });
    }
}
function merge(source, ...args) {
    return new MergeAsyncIterable([source, ...args]);
}

//# sourceMappingURL=merge.mjs.map


/***/ }),

/***/ "./node_modules/ix/asynciterable/of.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OfAsyncIterable: () => (/* binding */ OfAsyncIterable),
/* harmony export */   of: () => (/* binding */ of)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _asynciterablex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/ix/asynciterable/asynciterablex.mjs");
/* harmony import */ var _aborterror_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/ix/aborterror.mjs");



/** @ignore */
class OfAsyncIterable extends _asynciterablex_mjs__WEBPACK_IMPORTED_MODULE_1__.AsyncIterableX {
    constructor(args) {
        super();
        this._args = args;
    }
    [Symbol.asyncIterator](signal) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* _a() {
            (0,_aborterror_mjs__WEBPACK_IMPORTED_MODULE_2__.throwIfAborted)(signal);
            for (const item of this._args) {
                yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(item);
            }
        });
    }
}
/**
 * Creates an async-iterable from the specified elements.
 *
 * @template TSource The type of the elements to create an async-iterable sequence.
 * @param {...TSource[]} args The elements to turn into an async-iterable sequence.
 * @returns {AsyncIterableX<TSource>} The async-iterable sequence created from the elements.
 */
function of(...args) {
    return new OfAsyncIterable(args);
}

//# sourceMappingURL=of.mjs.map


/***/ }),

/***/ "./node_modules/ix/asynciterable/operators/buffercountortime.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bufferCountOrTime: () => (/* binding */ bufferCountOrTime)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/ix/asynciterable/asynciterablex.mjs");
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/ix/asynciterable/concat.mjs");
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/ix/asynciterable/interval.mjs");
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/ix/asynciterable/of.mjs");
/* harmony import */ var _map_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/ix/asynciterable/operators/map.mjs");
/* harmony import */ var _merge_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/ix/asynciterable/merge.mjs");
/* harmony import */ var _withabort_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/ix/asynciterable/operators/withabort.mjs");





const timerEvent = {};
const ended = {};
class BufferCountOrTime extends _index_mjs__WEBPACK_IMPORTED_MODULE_1__.AsyncIterableX {
    constructor(source, bufferSize, maxWaitTime) {
        super();
        this.source = source;
        this.bufferSize = bufferSize;
        this.maxWaitTime = maxWaitTime;
    }
    [Symbol.asyncIterator](signal) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* _a() {
            var _b, e_1, _c, _d;
            const buffer = [];
            const timer = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_3__.interval)(this.maxWaitTime).pipe((0,_map_mjs__WEBPACK_IMPORTED_MODULE_5__.map)(() => timerEvent));
            const source = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.concat)(this.source, (0,_index_mjs__WEBPACK_IMPORTED_MODULE_4__.of)(ended));
            const merged = (0,_merge_mjs__WEBPACK_IMPORTED_MODULE_6__.merge)(source, timer);
            try {
                for (var _e = true, _f = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncValues)((0,_withabort_mjs__WEBPACK_IMPORTED_MODULE_7__.wrapWithAbort)(merged, signal)), _g; _g = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(_f.next()), _b = _g.done, !_b; _e = true) {
                    _d = _g.value;
                    _e = false;
                    const item = _d;
                    if (item === ended) {
                        break;
                    }
                    if (item !== timerEvent) {
                        buffer.push(item);
                    }
                    if (buffer.length >= this.bufferSize || (buffer.length && item === timerEvent)) {
                        yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(buffer.slice());
                        buffer.length = 0;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_e && !_b && (_c = _f.return)) yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(_c.call(_f));
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (buffer.length) {
                yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(buffer);
            }
        });
    }
}
/**
 * Projects each element of an async-iterable sequence into consecutive buffers
 * which are emitted when either the threshold count or time is met.
 *
 * @template TSource The type of elements in the source sequence.
 * @param {number} count The size of the buffer.
 * @param {number} time The threshold number of milliseconds to wait before flushing a non-full buffer
 * @returns {OperatorAsyncFunction<TSource, TSource[]>} An operator which returns an async-iterable sequence
 * of buffers
 */
function bufferCountOrTime(count, time) {
    return function bufferOperatorFunction(source) {
        return new BufferCountOrTime(source, count, time);
    };
}

//# sourceMappingURL=buffercountortime.mjs.map


/***/ }),

/***/ "./node_modules/ix/asynciterable/operators/catcherror.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatchWithAsyncIterable: () => (/* binding */ CatchWithAsyncIterable),
/* harmony export */   catchError: () => (/* binding */ catchError)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _asynciterablex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/ix/asynciterable/asynciterablex.mjs");
/* harmony import */ var _util_returniterator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/ix/util/returniterator.mjs");
/* harmony import */ var _withabort_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/ix/asynciterable/operators/withabort.mjs");
/* harmony import */ var _aborterror_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/ix/aborterror.mjs");





/** @ignore */
class CatchWithAsyncIterable extends _asynciterablex_mjs__WEBPACK_IMPORTED_MODULE_1__.AsyncIterableX {
    constructor(source, handler) {
        super();
        this._source = source;
        this._handler = handler;
    }
    [Symbol.asyncIterator](signal) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* _a() {
            var _b, e_1, _c, _d;
            (0,_aborterror_mjs__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(signal);
            let err;
            let hasError = false;
            const source = (0,_withabort_mjs__WEBPACK_IMPORTED_MODULE_3__.wrapWithAbort)(this._source, signal);
            const it = source[Symbol.asyncIterator]();
            while (1) {
                let c = {};
                try {
                    c = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(it.next());
                    if (c.done) {
                        yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)((0,_util_returniterator_mjs__WEBPACK_IMPORTED_MODULE_2__.returnAsyncIterator)(it));
                        break;
                    }
                }
                catch (e) {
                    err = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(this._handler(e, signal));
                    hasError = true;
                    yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)((0,_util_returniterator_mjs__WEBPACK_IMPORTED_MODULE_2__.returnAsyncIterator)(it));
                    break;
                }
                yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(c.value);
            }
            if (hasError) {
                try {
                    for (var _e = true, _f = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncValues)((0,_withabort_mjs__WEBPACK_IMPORTED_MODULE_3__.wrapWithAbort)(err, signal)), _g; _g = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(_f.next()), _b = _g.done, !_b; _e = true) {
                        _d = _g.value;
                        _e = false;
                        const item = _d;
                        yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(item);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (!_e && !_b && (_c = _f.return)) yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(_c.call(_f));
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    }
}
/**
 * Continues an async-iterable sequence that is terminated by an exception with the
 * async-iterable sequence produced by the handler.
 *
 * @template TSource The type of the elements in the source sequence.
 * @template TResult The type of elements from the handler function.
 * @param {((
 *     error: any,
 *     signal?: AbortSignal
 *   ) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>)} handler Error handler function, producing another async-iterable sequence.
 * @returns {(OperatorAsyncFunction<TSource, TSource | TResult>)} An operator which continues an async-iterable sequence that is terminated by
 * an exception with the specified handler.
 */
function catchError(handler) {
    return function catchWithOperatorFunction(source) {
        return new CatchWithAsyncIterable(source, handler);
    };
}

//# sourceMappingURL=catcherror.mjs.map


/***/ }),

/***/ "./node_modules/ix/asynciterable/operators/concatmap.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   concatMap: () => (/* binding */ concatMap)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _asynciterablex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/ix/asynciterable/asynciterablex.mjs");
/* harmony import */ var _withabort_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/ix/asynciterable/operators/withabort.mjs");
/* harmony import */ var _aborterror_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/ix/aborterror.mjs");
/* harmony import */ var _util_isiterable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/ix/util/isiterable.mjs");





class ConcatMapAsyncIterable extends _asynciterablex_mjs__WEBPACK_IMPORTED_MODULE_1__.AsyncIterableX {
    constructor(_source, _selector, _thisArg) {
        super();
        this._source = _source;
        this._selector = _selector;
        this._thisArg = _thisArg;
    }
    [Symbol.asyncIterator](signal) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* _a() {
            var _b, e_1, _c, _d, _e, e_2, _f, _g;
            (0,_aborterror_mjs__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(signal);
            let outerIndex = 0;
            const { _thisArg: thisArg, _selector: selector } = this;
            try {
                for (var _h = true, _j = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncValues)((0,_withabort_mjs__WEBPACK_IMPORTED_MODULE_2__.wrapWithAbort)(this._source, signal)), _k; _k = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(_j.next()), _b = _k.done, !_b; _h = true) {
                    _d = _k.value;
                    _h = false;
                    const outer = _d;
                    const result = selector.call(thisArg, outer, outerIndex++, signal);
                    const values = ((0,_util_isiterable_mjs__WEBPACK_IMPORTED_MODULE_4__.isPromise)(result) ? yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(result) : result);
                    try {
                        for (var _l = true, _m = (e_2 = void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncValues)((0,_withabort_mjs__WEBPACK_IMPORTED_MODULE_2__.wrapWithAbort)(_asynciterablex_mjs__WEBPACK_IMPORTED_MODULE_1__.AsyncIterableX.as(values), signal))), _o; _o = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(_m.next()), _e = _o.done, !_e; _l = true) {
                            _g = _o.value;
                            _l = false;
                            const inner = _g;
                            yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(inner);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (!_l && !_e && (_f = _m.return)) yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(_f.call(_m));
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_h && !_b && (_c = _j.return)) yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(_c.call(_j));
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    }
}
/**
 * Projects each element of an async-iterable sequence to an async-iterable sequence and merges
 * the resulting async-iterable sequences into one async-iterable sequence.
 *
 * @template TSource The type of the elements in the source sequence.
 * @template TResult The type of the elements in the projected inner sequences and the elements in the merged result sequence.
 * @param {((
 *     value: TSource,
 *     index: number,
 *     signal?: AbortSignal
 *   ) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>)} selector A transform function to apply to each element.
 * @param {*} [thisArg] Option this for binding to the selector.
 * @returns {OperatorAsyncFunction<TSource, TResult>} An operator that creates an async-iterable sequence whose
 * elements are the result of invoking the one-to-many transform function on each element of the input sequence.
 */
function concatMap(selector, thisArg) {
    return function concatMapOperatorFunction(source) {
        return new ConcatMapAsyncIterable(source, selector, thisArg);
    };
}

//# sourceMappingURL=concatmap.mjs.map


/***/ }),

/***/ "./node_modules/ix/asynciterable/operators/map.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapAsyncIterable: () => (/* binding */ MapAsyncIterable),
/* harmony export */   map: () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _asynciterablex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/ix/asynciterable/asynciterablex.mjs");
/* harmony import */ var _withabort_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/ix/asynciterable/operators/withabort.mjs");
/* harmony import */ var _aborterror_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/ix/aborterror.mjs");




/** @ignore */
class MapAsyncIterable extends _asynciterablex_mjs__WEBPACK_IMPORTED_MODULE_1__.AsyncIterableX {
    constructor(source, selector, thisArg) {
        super();
        this._source = source;
        this._selector = selector;
        this._thisArg = thisArg;
    }
    [Symbol.asyncIterator](signal) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* _a() {
            var _b, e_1, _c, _d;
            (0,_aborterror_mjs__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(signal);
            let i = 0;
            try {
                for (var _e = true, _f = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncValues)((0,_withabort_mjs__WEBPACK_IMPORTED_MODULE_2__.wrapWithAbort)(this._source, signal)), _g; _g = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(_f.next()), _b = _g.done, !_b; _e = true) {
                    _d = _g.value;
                    _e = false;
                    const item = _d;
                    const result = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(this._selector.call(this._thisArg, item, i++, signal));
                    yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(result);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_e && !_b && (_c = _f.return)) yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(_c.call(_f));
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    }
}
/**
 * Projects each element of an async-enumerable sequence into a new form.
 *
 * @template TSource The type of the elements in the source sequence.
 * @template TResult The type of the elements in the result sequence, obtained by running the selector
 * function for each element in the source sequence.
 * @param {((value: TSource, index: number, signal?: AbortSignal) => Promise<TResult> | TResult)} selector A transform function
 * to apply to each source element.
 * @param {*} [thisArg] Optional this for binding to the selector.
 * @returns {OperatorAsyncFunction<TSource, TResult>} An async-iterable sequence whose elements are the result of invoking the transform
 * function on each element of source.
 */
function map(selector, thisArg) {
    return function mapOperatorFunction(source) {
        return new MapAsyncIterable(source, selector, thisArg);
    };
}

//# sourceMappingURL=map.mjs.map


/***/ }),

/***/ "./node_modules/ix/asynciterable/operators/tap.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TapAsyncIterable: () => (/* binding */ TapAsyncIterable),
/* harmony export */   tap: () => (/* binding */ tap)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _asynciterablex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/ix/asynciterable/asynciterablex.mjs");
/* harmony import */ var _util_toobserver_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/ix/util/toobserver.mjs");
/* harmony import */ var _aborterror_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/ix/aborterror.mjs");
/* harmony import */ var _util_returniterator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/ix/util/returniterator.mjs");





/** @ignore */
class TapAsyncIterable extends _asynciterablex_mjs__WEBPACK_IMPORTED_MODULE_1__.AsyncIterableX {
    constructor(source, observer) {
        super();
        this._source = source;
        this._observer = observer;
    }
    [Symbol.asyncIterator](signal) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* _a() {
            (0,_aborterror_mjs__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(signal);
            const obs = this._observer;
            const it = this._source[Symbol.asyncIterator](signal);
            try {
                for (let res; !(res = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(it.next())).done;) {
                    if (obs.next) {
                        yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(obs.next(res.value));
                    }
                    yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(res.value);
                }
                if (obs.complete) {
                    yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(obs.complete());
                }
            }
            catch (e) {
                if (!(e instanceof _aborterror_mjs__WEBPACK_IMPORTED_MODULE_3__.AbortError) && obs.error) {
                    yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(obs.error(e));
                }
                throw e;
            }
            finally {
                yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)((0,_util_returniterator_mjs__WEBPACK_IMPORTED_MODULE_4__.returnAsyncIterator)(it));
            }
        });
    }
}
/**
 * Invokes an action for each element in the async-iterable sequence, and propagates all observer
 * messages through the result sequence. This method can be used for debugging, logging, etc. by
 * intercepting the message stream to run arbitrary actions for messages on the pipeline.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {(PartialAsyncObserver<TSource> | ((value: TSource) => any) | null)} [observerOrNext] Observer whose methods to invoke as
 * part of the source sequence's observation or a function to invoke for each element in the async-iterable sequence.
 * @param {(((err: any) => any) | null)} [error] Function to invoke upon exceptional termination of the async-iterable sequence.
 * @param {((() => any) | null)} [complete] Function to invoke upon graceful termination of the async-iterable sequence.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} The source sequence with the side-effecting behavior applied.
 */
function tap(observerOrNext, error, complete) {
    return function tapOperatorFunction(source) {
        return new TapAsyncIterable(source, (0,_util_toobserver_mjs__WEBPACK_IMPORTED_MODULE_2__.toObserver)(observerOrNext, error, complete));
    };
}

//# sourceMappingURL=tap.mjs.map


/***/ }),

/***/ "./node_modules/ix/asynciterable/operators/withabort.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WithAbortAsyncIterable: () => (/* binding */ WithAbortAsyncIterable),
/* harmony export */   withAbort: () => (/* binding */ withAbort),
/* harmony export */   wrapWithAbort: () => (/* binding */ wrapWithAbort)
/* harmony export */ });
/* harmony import */ var _asynciterablex_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/ix/asynciterable/asynciterablex.mjs");

/** @ignore */
class WithAbortAsyncIterable extends _asynciterablex_mjs__WEBPACK_IMPORTED_MODULE_0__.AsyncIterableX {
    constructor(source, signal) {
        super();
        this._source = source;
        this._signal = signal;
    }
    withAbort(signal) {
        return new WithAbortAsyncIterable(this._source, signal);
    }
    [Symbol.asyncIterator]() {
        // @ts-ignore
        return this._source[Symbol.asyncIterator](this._signal);
    }
}
/**
 * Wraps the existing async-iterable sequence with an abort signal for cancellation.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {AbortSignal} signal The abort signal used for cancellation.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An async-iterable that can be cancelled by the abort signal.
 */
function withAbort(signal) {
    return function withAbortOperatorFunction(source) {
        return new WithAbortAsyncIterable(source, signal);
    };
}
/**
 * Wraps an existing async-iterable with a new async-iterable which support cancellation.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {AsyncIterable<TSource>} source The source sequence to wrap with the abort signal.
 * @param {AbortSignal} [signal] The abort signal used for cancellation.
 * @returns {AsyncIterable<TSource>} The source sequence wrapped with an abort signal for cancellation.
 */
function wrapWithAbort(source, signal) {
    return signal ? new WithAbortAsyncIterable(source, signal) : source;
}

//# sourceMappingURL=withabort.mjs.map


/***/ }),

/***/ "./node_modules/ix/util/bindcallback.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindCallback: () => (/* binding */ bindCallback)
/* harmony export */ });
/**
 * @ignore
 */
function bindCallback(func, thisArg, argCount) {
    if (typeof thisArg === 'undefined') {
        return func;
    }
    switch (argCount) {
        case 0:
            return function () {
                return func.call(thisArg);
            };
        case 1:
            return function (arg) {
                return func.call(thisArg, arg);
            };
        case 2:
            return function (value, index) {
                return func.call(thisArg, value, index);
            };
        case 3:
            return function (value, index, collection) {
                return func.call(thisArg, value, index, collection);
            };
        default:
            return function () {
                return func.apply(thisArg, arguments);
            };
    }
}

//# sourceMappingURL=bindcallback.mjs.map


/***/ }),

/***/ "./node_modules/ix/util/identity.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   identityAsync: () => (/* binding */ identityAsync)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");

/**
 * @ignore
 */
function identity(x) {
    return x;
}
/**
 * @ignore
 */
function identityAsync(x) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
        return x;
    });
}

//# sourceMappingURL=identity.mjs.map


/***/ }),

/***/ "./node_modules/ix/util/isiterable.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArrayLike: () => (/* binding */ isArrayLike),
/* harmony export */   isAsyncIterable: () => (/* binding */ isAsyncIterable),
/* harmony export */   isFetchResponse: () => (/* binding */ isFetchResponse),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isIterable: () => (/* binding */ isIterable),
/* harmony export */   isIterator: () => (/* binding */ isIterator),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isObservable: () => (/* binding */ isObservable),
/* harmony export */   isPromise: () => (/* binding */ isPromise),
/* harmony export */   isReadableDOMStream: () => (/* binding */ isReadableDOMStream),
/* harmony export */   isReadableNodeStream: () => (/* binding */ isReadableNodeStream),
/* harmony export */   isWritableDOMStream: () => (/* binding */ isWritableDOMStream),
/* harmony export */   isWritableNodeStream: () => (/* binding */ isWritableNodeStream)
/* harmony export */ });
/* eslint-disable @typescript-eslint/ban-types */
/** @ignore */
const isNumber = (x) => typeof x === 'number';
/** @ignore */
const isBoolean = (x) => typeof x === 'boolean';
/** @ignore */
const isFunction = (x) => typeof x === 'function';
/** @ignore */
const isObject = (x) => x != null && Object(x) === x;
/** @ignore */
const isPromise = (x) => {
    return isObject(x) && isFunction(x.then);
};
/** @ignore */
function isArrayLike(x) {
    return isObject(x) && isNumber(x['length']);
}
/** @ignore */
function isIterable(x) {
    return x != null && isFunction(x[Symbol.iterator]);
}
/** @ignore */
function isIterator(x) {
    return isObject(x) && !isFunction(x[Symbol.iterator]) && isFunction(x['next']);
}
/** @ignore */
function isAsyncIterable(x) {
    return isObject(x) && isFunction(x[Symbol.asyncIterator]);
}
/** @ignore */
function isObservable(x) {
    return x != null && Object(x) === x && typeof x['subscribe'] === 'function';
}
/** @ignore */
const isReadableNodeStream = (x) => {
    return (isObject(x) &&
        isFunction(x['pipe']) &&
        isFunction(x['_read']) &&
        isBoolean(x['readable']) &&
        isObject(x['_readableState']));
};
/** @ignore */
const isWritableNodeStream = (x) => {
    return (isObject(x) &&
        isFunction(x['end']) &&
        isFunction(x['_write']) &&
        isBoolean(x['writable']) &&
        isObject(x['_writableState']));
};
/** @ignore */
const isReadableDOMStream = (x) => {
    return isObject(x) && isFunction(x['cancel']) && isFunction(x['getReader']);
};
/** @ignore */
const isWritableDOMStream = (x) => {
    return isObject(x) && isFunction(x['abort']) && isFunction(x['getWriter']);
};
/** @ignore */
const isFetchResponse = (x) => {
    return isObject(x) && isReadableDOMStream(x['body']);
};

//# sourceMappingURL=isiterable.mjs.map


/***/ }),

/***/ "./node_modules/ix/util/returniterator.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   returnAsyncIterator: () => (/* binding */ returnAsyncIterator),
/* harmony export */   returnIterator: () => (/* binding */ returnIterator)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");

/**
 * @ignore
 */
function returnIterator(it) {
    if (typeof (it === null || it === void 0 ? void 0 : it.return) === 'function') {
        it.return();
    }
}
/**
 * @ignore
 */
function returnAsyncIterator(it) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
        if (typeof (it === null || it === void 0 ? void 0 : it.return) === 'function') {
            yield it.return();
        }
    });
}

//# sourceMappingURL=returniterator.mjs.map


/***/ }),

/***/ "./node_modules/ix/util/safeRace.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   safeRace: () => (/* binding */ safeRace)
/* harmony export */ });
/*
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
*/
// see: https://github.com/nodejs/node/issues/17469#issuecomment-685216777
// see: https://github.com/ReactiveX/IxJS/pull/323
function isPrimitive(value) {
    return value === null || (typeof value !== 'object' && typeof value !== 'function');
}
// Keys are the values passed to race, values are a record of data containing a
// set of deferreds and whether the value has settled.
const wm = new WeakMap();
function safeRace(contenders) {
    let deferred;
    const result = new Promise((resolve, reject) => {
        deferred = { resolve, reject };
        for (const contender of contenders) {
            if (isPrimitive(contender)) {
                // If the contender is a primitive, attempting to use it as a key in the
                // weakmap would throw an error. Luckily, it is safe to call
                // `Promise.resolve(contender).then` on a primitive value multiple times
                // because the promise fulfills immediately.
                Promise.resolve(contender).then(resolve, reject);
                continue;
            }
            let record = wm.get(contender);
            if (record === undefined) {
                record = { deferreds: new Set([deferred]), settled: false };
                wm.set(contender, record);
                // This call to `then` happens once for the lifetime of the value.
                Promise.resolve(contender).then((value) => {
                    // eslint-disable-next-line no-shadow
                    for (const { resolve } of record.deferreds) {
                        resolve(value);
                    }
                    record.deferreds.clear();
                    record.settled = true;
                }, (err) => {
                    // eslint-disable-next-line no-shadow
                    for (const { reject } of record.deferreds) {
                        reject(err);
                    }
                    record.deferreds.clear();
                    record.settled = true;
                });
            }
            else if (record.settled) {
                // If the value has settled, it is safe to call
                // `Promise.resolve(contender).then` on it.
                Promise.resolve(contender).then(resolve, reject);
            }
            else {
                record.deferreds.add(deferred);
            }
        }
    });
    // The finally callback executes when any value settles, preventing any of
    // the unresolved values from retaining a reference to the resolved value.
    return result.finally(() => {
        for (const contender of contenders) {
            if (!isPrimitive(contender)) {
                const record = wm.get(contender);
                record.deferreds.delete(deferred);
            }
        }
    });
}

//# sourceMappingURL=safeRace.mjs.map


/***/ }),

/***/ "./node_modules/ix/util/tointeger.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toInteger: () => (/* binding */ toInteger)
/* harmony export */ });
/**
 * @ignore
 */
function toInteger(value) {
    const number = Number(value);
    if (isNaN(number)) {
        return 0;
    }
    if (number === 0 || !isFinite(number)) {
        return number;
    }
    return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
}

//# sourceMappingURL=tointeger.mjs.map


/***/ }),

/***/ "./node_modules/ix/util/tolength.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toLength: () => (/* binding */ toLength)
/* harmony export */ });
/* harmony import */ var _tointeger_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/ix/util/tointeger.mjs");

const maxSafeInteger = Math.pow(2, 53) - 1;
/**
 * @ignore
 */
function toLength(value) {
    const len = (0,_tointeger_mjs__WEBPACK_IMPORTED_MODULE_0__.toInteger)(value);
    return Math.min(Math.max(len, 0), maxSafeInteger);
}

//# sourceMappingURL=tolength.mjs.map


/***/ }),

/***/ "./node_modules/ix/util/toobserver.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toObserver: () => (/* binding */ toObserver)
/* harmony export */ });
/* harmony import */ var _isiterable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/ix/util/isiterable.mjs");

const noop = (_) => {
    /**/
};
// eslint-disable-next-line complexity
function toObserver(next, error, complete) {
    const observer = next;
    if (observer && typeof observer === 'object') {
        return {
            next: (0,_isiterable_mjs__WEBPACK_IMPORTED_MODULE_0__.isFunction)(observer.next) ? (x) => observer.next(x) : noop,
            error: (0,_isiterable_mjs__WEBPACK_IMPORTED_MODULE_0__.isFunction)(observer.error) ? (e) => observer.error(e) : noop,
            complete: (0,_isiterable_mjs__WEBPACK_IMPORTED_MODULE_0__.isFunction)(observer.complete) ? () => observer.complete() : noop,
        };
    }
    return {
        next: (0,_isiterable_mjs__WEBPACK_IMPORTED_MODULE_0__.isFunction)(next) ? next : noop,
        error: (0,_isiterable_mjs__WEBPACK_IMPORTED_MODULE_0__.isFunction)(error) ? error : noop,
        complete: (0,_isiterable_mjs__WEBPACK_IMPORTED_MODULE_0__.isFunction)(complete) ? complete : noop,
    };
}

//# sourceMappingURL=toobserver.mjs.map


/***/ }),

/***/ "./node_modules/react-use/esm/useIntersection.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useIntersection = function (ref, options) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), intersectionObserverEntry = _a[0], setIntersectionObserverEntry = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (ref.current && typeof IntersectionObserver === 'function') {
            var handler = function (entries) {
                setIntersectionObserverEntry(entries[0]);
            };
            var observer_1 = new IntersectionObserver(handler, options);
            observer_1.observe(ref.current);
            return function () {
                setIntersectionObserverEntry(null);
                observer_1.disconnect();
            };
        }
        return function () { };
    }, [ref.current, options.threshold, options.root, options.rootMargin]);
    return intersectionObserverEntry;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIntersection);


/***/ }),

/***/ "./public/app/features/alerting/unified/api/prometheusApi.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prometheusApi: () => (/* binding */ prometheusApi),
/* harmony export */   usePopulateGrafanaPrometheusApiCache: () => (/* binding */ usePopulateGrafanaPrometheusApiCache)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _alertingApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/api/alertingApi.ts");
/* harmony import */ var _prometheus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/api/prometheus.ts");






const prometheusApi = _alertingApi__WEBPACK_IMPORTED_MODULE_3__.alertingApi.injectEndpoints({
  endpoints: (build) => ({
    getGroups: build.query({
      query: ({
        ruleSource,
        namespace,
        groupName,
        ruleName,
        groupLimit,
        excludeAlerts,
        groupNextToken,
        notificationOptions
      }) => {
        if (ruleSource.uid === _utils_datasource__WEBPACK_IMPORTED_MODULE_2__.GRAFANA_RULES_SOURCE_NAME) {
          throw new Error("Please use getGrafanaGroups endpoint for grafana rules");
        }
        return {
          url: `api/prometheus/${ruleSource.uid}/api/v1/rules`,
          params: {
            file: namespace,
            // Mimir
            "file[]": namespace,
            // Prometheus
            rule_group: groupName,
            // Mimir
            "rule_group[]": groupName,
            // Prometheus
            rule_name: ruleName,
            // Mimir
            "rule_name[]": ruleName,
            // Prometheus
            exclude_alerts: excludeAlerts?.toString(),
            group_limit: groupLimit?.toFixed(0),
            group_next_token: groupNextToken
          },
          notificationOptions
        };
      },
      transformResponse: (response) => {
        return { ...response, data: { ...response.data, groups: response.data.groups.map(_prometheus__WEBPACK_IMPORTED_MODULE_4__.normalizeRuleGroup) } };
      }
    }),
    getGrafanaGroups: build.query({
      query: ({
        folderUid,
        groupName,
        ruleName,
        contactPoint,
        health,
        state,
        groupLimit,
        limitAlerts,
        groupNextToken
      }) => ({
        url: `api/prometheus/grafana/api/v1/rules`,
        params: {
          folder_uid: folderUid,
          rule_group: groupName,
          rule_name: ruleName,
          receiver_name: contactPoint,
          health,
          state,
          limit_alerts: limitAlerts,
          group_limit: groupLimit?.toFixed(0),
          group_next_token: groupNextToken
        }
      }),
      providesTags: (_result, _error, { folderUid, groupName, ruleName }) => {
        const folderKey = folderUid ?? "__any__";
        const groupKey = groupName ?? "__any__";
        const ruleKey = ruleName ?? "__any__";
        return [{ type: "GrafanaPrometheusGroups", id: `grafana/${folderKey}/${groupKey}/${ruleKey}` }];
      }
    })
  })
});
function usePopulateGrafanaPrometheusApiCache() {
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const populateGroupsResponseCache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (groups) => {
      dispatch(
        prometheusApi.util.upsertQueryEntries(
          groups.map((group) => ({
            endpointName: "getGrafanaGroups",
            arg: { folderUid: group.folderUid, groupName: group.name, limitAlerts: 0 },
            value: { data: { groups: [group] }, status: "success" }
          }))
        )
      );
    },
    [dispatch]
  );
  return { populateGroupsResponseCache };
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/DataSourceGroupLoader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataSourceGroupLoader: () => (/* binding */ DataSourceGroupLoader),
/* harmony export */   RulerBasedGroupRules: () => (/* binding */ RulerBasedGroupRules)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");
/* harmony import */ var _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/api/featureDiscoveryApi.ts");
/* harmony import */ var _api_prometheusApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/api/prometheusApi.ts");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/hooks/usePagination.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _DataSourceRuleListItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/DataSourceRuleListItem.tsx");
/* harmony import */ var _components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/AlertRuleListItem.tsx");
/* harmony import */ var _components_AlertRuleListItemLoader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/AlertRuleListItemLoader.tsx");
/* harmony import */ var _components_LoadMoreButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/LoadMoreButton.tsx");
/* harmony import */ var _components_RuleActionsButtons_V2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/RuleActionsButtons.V2.tsx");
/* harmony import */ var _ruleMatching__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/ruleMatching.ts");





















const { useDiscoverDsFeaturesQuery } = _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_9__.featureDiscoveryApi;
const { useGetGroupsQuery } = _api_prometheusApi__WEBPACK_IMPORTED_MODULE_10__.prometheusApi;
const { useGetRuleGroupForNamespaceQuery } = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_8__.alertRuleApi;
function DataSourceGroupLoader({ groupIdentifier, expectedRulesCount = 3 }) {
  const { namespace, groupName } = groupIdentifier;
  const namespaceName = namespace.name;
  const {
    data: promResponse,
    isLoading: isPromResponseLoading,
    isError: isPromResponseError
  } = useGetGroupsQuery(
    {
      ruleSource: { uid: groupIdentifier.rulesSource.uid },
      namespace: namespaceName,
      groupName
    },
    { pollingInterval: _utils_constants__WEBPACK_IMPORTED_MODULE_12__.RULE_LIST_POLL_INTERVAL_MS }
  );
  const {
    data: dsFeatures,
    isLoading: isDsFeaturesLoading,
    isError: isDsFeaturesError
  } = useDiscoverDsFeaturesQuery({
    uid: groupIdentifier.rulesSource.uid
  });
  const {
    data: rulerGroup,
    error: rulerGroupError,
    isFetching: isRulerGroupFetching,
    isError: isRulerGroupError
  } = useGetRuleGroupForNamespaceQuery(
    dsFeatures?.rulerConfig ? {
      rulerConfig: dsFeatures?.rulerConfig,
      namespace: namespaceName,
      group: groupName
    } : _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_2__.skipToken
  );
  const isLoading = isPromResponseLoading || isDsFeaturesLoading || isRulerGroupFetching;
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: Array.from({ length: expectedRulesCount }).map((_, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertRuleListItemLoader__WEBPACK_IMPORTED_MODULE_17__.AlertRuleListItemSkeleton, {}, index)) });
  }
  const isError = isPromResponseError || isDsFeaturesError || isRulerGroupError;
  if (isError) {
    if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.isFetchError)(rulerGroupError) && rulerGroupError.status === 404) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert, { severity: "warning", title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.ds-group-loader.group-deleting", "The group is being deleted") });
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "alerting.ds-group-loader.group-load-failed",
          "Failed to load rules from group {{ groupName }} in {{ namespaceName }}",
          { groupName, namespaceName }
        ),
        severity: "error"
      }
    );
  }
  const promGroup = promResponse?.data.groups.find((g) => g.file === namespaceName && g.name === groupName);
  if (dsFeatures?.rulerConfig && rulerGroup && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_14__.isCloudRulerGroup)(rulerGroup) && promGroup) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      RulerBasedGroupRules,
      {
        groupIdentifier,
        promGroup,
        rulerGroup,
        application: dsFeatures.application
      }
    );
  }
  if (promGroup) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: promGroup.rules.map((rule) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _DataSourceRuleListItem__WEBPACK_IMPORTED_MODULE_15__.DataSourceRuleListItem,
      {
        rule,
        groupIdentifier,
        application: dsFeatures?.application,
        showLocation: false
      },
      (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_13__.hashRule)(rule)
    )) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "alerting.ds-group-loader.group-load-failed",
        "Failed to load rules from group {{ groupName }} in {{ namespaceName }}",
        { groupName, namespaceName }
      ),
      severity: "warning"
    }
  );
}
function RulerBasedGroupRules({
  groupIdentifier,
  application,
  promGroup,
  rulerGroup
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const { namespace, groupName } = groupIdentifier;
  const { matches, promOnlyRules } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return (0,_ruleMatching__WEBPACK_IMPORTED_MODULE_20__.matchRulesGroup)(rulerGroup, promGroup);
  }, [promGroup, rulerGroup]);
  const { pageItems, hasMore, loadMore } = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_11__.useContinuousPagination)(
    rulerGroup.rules,
    _utils_constants__WEBPACK_IMPORTED_MODULE_12__.DEFAULT_PER_PAGE_PAGINATION_RULES_PER_GROUP
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    pageItems.map((rulerRule, index) => {
      const promRule = matches.get(rulerRule);
      if (promRule) {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _DataSourceRuleListItem__WEBPACK_IMPORTED_MODULE_15__.DataSourceRuleListItem,
          {
            rule: promRule,
            rulerRule,
            groupIdentifier,
            application,
            actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_RuleActionsButtons_V2__WEBPACK_IMPORTED_MODULE_19__.RuleActionsButtons, { rule: rulerRule, promRule, groupIdentifier, compact: true }),
            showLocation: false
          },
          `${(0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_13__.hashRule)(promRule)}-${index}`
        );
      }
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_16__.RuleOperationListItem,
        {
          name: (0,_utils_rules__WEBPACK_IMPORTED_MODULE_14__.getRuleName)(rulerRule),
          namespace: namespace.name,
          group: groupName,
          rulesSource: groupIdentifier.rulesSource,
          application,
          operation: "creating",
          showLocation: false
        },
        `${(0,_utils_rules__WEBPACK_IMPORTED_MODULE_14__.getRuleName)(rulerRule)}-${index}`
      );
    }),
    promOnlyRules.map((rule, index) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_16__.RuleOperationListItem,
        {
          name: rule.name,
          namespace: namespace.name,
          group: groupName,
          rulesSource: groupIdentifier.rulesSource,
          application,
          operation: "deleting",
          showLocation: false
        },
        `${rule.name}-${index}`
      );
    }),
    hasMore && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { "aria-selected": "false", role: "treeitem", className: styles.loadMoreWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_LoadMoreButton__WEBPACK_IMPORTED_MODULE_18__.LoadMoreButton, { onClick: loadMore }) })
  ] });
}
const getStyles = (theme) => ({
  loadMoreWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    listStyle: "none",
    paddingTop: theme.spacing(1)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/DataSourceRuleListItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataSourceRuleListItem: () => (/* binding */ DataSourceRuleListItem),
/* harmony export */   createViewLinkFromIdentifier: () => (/* binding */ createViewLinkFromIdentifier)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _hooks_useReturnTo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useReturnTo.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/navigation.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");
/* harmony import */ var _components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/AlertRuleListItem.tsx");










function DataSourceRuleListItem({
  rule,
  rulerRule,
  groupIdentifier,
  application,
  actions,
  showLocation = true
}) {
  const returnTo = (0,_hooks_useReturnTo__WEBPACK_IMPORTED_MODULE_2__.createReturnTo)();
  const { rulesSource, namespace, groupName } = groupIdentifier;
  const ruleIdentifier = rulerRule ? (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_5__.fromRulerRule)(rulesSource.name, namespace.name, groupName, rulerRule) : (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_5__.fromRule)(rulesSource.name, namespace.name, groupName, rule);
  const href = createViewLinkFromIdentifier(ruleIdentifier, returnTo);
  const originMeta = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_6__.getRulePluginOrigin)(rule);
  const ruleName = rulerRule ? (0,_utils_rules__WEBPACK_IMPORTED_MODULE_6__.getRuleName)(rulerRule) : rule.name;
  const labels = rulerRule ? rulerRule.labels : rule.labels;
  const groupUrl = _utils_navigation__WEBPACK_IMPORTED_MODULE_4__.groups.detailsPageLink(rulesSource.uid, namespace.name, groupName);
  const commonProps = {
    name: ruleName,
    rulesSource,
    application,
    group: groupName,
    groupUrl,
    namespace: namespace.name,
    href,
    health: rule.health,
    error: rule.lastError,
    labels,
    actions,
    origin: originMeta,
    showLocation
  };
  switch (rule.type) {
    case app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.PromRuleType.Alerting:
      const annotations = (_utils_rules__WEBPACK_IMPORTED_MODULE_6__.rulerRuleType.any.alertingRule(rulerRule) ? rulerRule.annotations : rule.annotations) ?? {};
      const summary = annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_3__.Annotation.summary];
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_8__.AlertRuleListItem, { ...commonProps, summary, state: rule.state, instancesCount: rule.alerts?.length });
    case app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.PromRuleType.Recording:
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_8__.RecordingRuleListItem, { ...commonProps });
    default:
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_8__.UnknownRuleListItem, { ruleName, groupIdentifier, ruleDefinition: rule });
  }
}
function createViewLinkFromIdentifier(identifier, returnTo) {
  const paramId = encodeURIComponent((0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_5__.stringifyIdentifier)(identifier));
  const paramSource = encodeURIComponent(identifier.ruleSourceName);
  return (0,_utils_url__WEBPACK_IMPORTED_MODULE_7__.createRelativeUrl)(`/alerting/${paramSource}/${paramId}/view`, returnTo ? { returnTo } : {});
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/DataSourceRuleLoader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataSourceRuleLoader: () => (/* binding */ DataSourceRuleLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");
/* harmony import */ var _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/api/featureDiscoveryApi.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _DataSourceRuleListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/DataSourceRuleListItem.tsx");
/* harmony import */ var _components_RuleActionsButtons_V2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/RuleActionsButtons.V2.tsx");
/* harmony import */ var _components_RuleActionsSkeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/RuleActionsSkeleton.tsx");
/* harmony import */ var _ruleMatching__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/ruleMatching.ts");











const { useDiscoverDsFeaturesQuery } = _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_4__.featureDiscoveryApi;
const { useGetRuleGroupForNamespaceQuery } = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_3__.alertRuleApi;
const DataSourceRuleLoader = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function DataSourceRuleLoader2({ ruleWithOrigin }) {
  const { rule, groupIdentifier } = ruleWithOrigin;
  const { rulesSource, namespace, groupName } = groupIdentifier;
  const { data: dsFeatures } = useDiscoverDsFeaturesQuery({ uid: rulesSource.uid });
  const { isLoading, data: rulerRuleGroup } = useGetRuleGroupForNamespaceQuery(
    dsFeatures?.rulerConfig ? { namespace: namespace.name, group: groupName, rulerConfig: dsFeatures?.rulerConfig } : _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__.skipToken
  );
  const rulerRule = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (!rulerRuleGroup) {
      return;
    }
    if (!(0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__.isCloudRulerGroup)(rulerRuleGroup)) {
      return;
    }
    return (0,_ruleMatching__WEBPACK_IMPORTED_MODULE_9__.getMatchingRulerRule)(rulerRuleGroup, ruleWithOrigin);
  }, [rulerRuleGroup, ruleWithOrigin]);
  const actions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (isLoading) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_RuleActionsSkeleton__WEBPACK_IMPORTED_MODULE_8__.RuleActionsSkeleton, {});
    }
    if (rulerRule) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_RuleActionsButtons_V2__WEBPACK_IMPORTED_MODULE_7__.RuleActionsButtons, { rule: rulerRule, promRule: rule, groupIdentifier, compact: true });
    }
    return null;
  }, [groupIdentifier, isLoading, rule, rulerRule]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _DataSourceRuleListItem__WEBPACK_IMPORTED_MODULE_6__.DataSourceRuleListItem,
    {
      rule,
      rulerRule,
      groupIdentifier,
      application: dsFeatures?.application,
      actions
    }
  );
});


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/FilterView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterView: () => (/* binding */ FilterView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var ix_asynciterable_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/ix/asynciterable/operators/buffercountortime.mjs");
/* harmony import */ var ix_asynciterable_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/ix/asynciterable/operators/tap.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-use/esm/useUnmount.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _hooks_useAsync__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAsync.tsx");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _DataSourceRuleLoader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/DataSourceRuleLoader.tsx");
/* harmony import */ var _FilterViewStatus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/FilterViewStatus.tsx");
/* harmony import */ var _GrafanaRuleListItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/GrafanaRuleListItem.tsx");
/* harmony import */ var _LoadMoreHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/LoadMoreHelper.tsx");
/* harmony import */ var _components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/AlertRuleListItem.tsx");
/* harmony import */ var _components_AlertRuleListItemLoader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/AlertRuleListItemLoader.tsx");
/* harmony import */ var _hooks_useFilteredRulesIterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/hooks/useFilteredRulesIterator.ts");
/* harmony import */ var _paginationLimits__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/paginationLimits.ts");


















function FilterView({ filterState }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FilterViewResults, { filterState }, JSON.stringify(filterState));
}
function FilterViewResults({ filterState }) {
  const [transitionPending, startTransition] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useTransition)();
  const getFilteredRulesIterator = (0,_hooks_useFilteredRulesIterator__WEBPACK_IMPORTED_MODULE_17__.useFilteredRulesIteratorProvider)();
  const iteration = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const [rules, setRules] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const [doneSearching, setDoneSearching] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const getRulesBatchIterator = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    if (!iteration.current) {
      const { iterable, abortController } = getFilteredRulesIterator(filterState, (0,_paginationLimits__WEBPACK_IMPORTED_MODULE_18__.getApiGroupPageSize)(true));
      const rulesBatchIterator = iterable.pipe(
        (0,ix_asynciterable_operators__WEBPACK_IMPORTED_MODULE_1__.bufferCountOrTime)(_paginationLimits__WEBPACK_IMPORTED_MODULE_18__.FRONTEND_LIST_PAGE_SIZE, 1e3),
        onFinished(() => setDoneSearching(true))
      )[Symbol.asyncIterator]();
      iteration.current = { rulesBatchIterator, abortController };
    }
    return iteration.current.rulesBatchIterator;
  }, [filterState, getFilteredRulesIterator]);
  const [{ execute: loadResultPage }, state] = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_9__.useAsync)(
    (0,_Analytics__WEBPACK_IMPORTED_MODULE_8__.withPerformanceLogging)(async () => {
      const rulesIterator = getRulesBatchIterator();
      let loadedRulesCount = 0;
      while (loadedRulesCount < _paginationLimits__WEBPACK_IMPORTED_MODULE_18__.FRONTEND_LIST_PAGE_SIZE) {
        const nextRulesBatch = await rulesIterator.next();
        if (nextRulesBatch.done) {
          return;
        }
        if (nextRulesBatch.value) {
          startTransition(() => {
            setRules((rules2) => rules2.concat(nextRulesBatch.value.map((rule) => ({ key: getRuleKey(rule), ...rule }))));
          });
        }
        loadedRulesCount += nextRulesBatch.value.length;
      }
    }, "alerting.rule-list.filter-view.load-result-page")
  );
  const loading = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_9__.isLoading)(state) || transitionPending;
  const numberOfRules = rules.length;
  const noRulesFound = numberOfRules === 0 && !loading;
  const loadingAborted = iteration.current?.abortController.signal.aborted;
  const cancelSearch = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    iteration.current?.abortController.abort();
  }, []);
  (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    cancelSearch();
  });
  const filterProgressState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    if (loadingAborted) {
      return "aborted";
    } else if (doneSearching) {
      return "done";
    }
    return "searching";
  }, [doneSearching, loadingAborted]);
  if (noRulesFound && doneSearching) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.EmptyState, { variant: "not-found", message: "No matching rules found", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.rule-list.filter-view.no-rules-found", children: "No alert or recording rules matched your current set of filters." }) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "column", gap: 0, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", { "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.filter-view-results.aria-label-filteredrulelist", "filtered-rule-list"), children: [
      rules.map((ruleWithOrigin) => {
        const { key, rule, groupIdentifier, origin } = ruleWithOrigin;
        switch (origin) {
          case "grafana":
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _GrafanaRuleListItem__WEBPACK_IMPORTED_MODULE_13__.GrafanaRuleListItem,
              {
                rule,
                groupIdentifier,
                namespaceName: ruleWithOrigin.namespaceName,
                showLocation: true
              }
            );
          case "datasource":
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DataSourceRuleLoader__WEBPACK_IMPORTED_MODULE_11__.DataSourceRuleLoader, { ruleWithOrigin }, key);
          default:
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_15__.UnknownRuleListItem,
              {
                ruleName: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rule-list.unknown-rule-type", "Unknown rule type"),
                groupIdentifier,
                ruleDefinition: rule
              },
              key
            );
        }
      }),
      loading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertRuleListItemLoader__WEBPACK_IMPORTED_MODULE_16__.AlertRuleListItemSkeleton, {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertRuleListItemLoader__WEBPACK_IMPORTED_MODULE_16__.AlertRuleListItemSkeleton, {})
      ] })
    ] }),
    !noRulesFound && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FilterViewStatus__WEBPACK_IMPORTED_MODULE_12__.FilterStatus, { state: filterProgressState, numberOfRules, onCancel: cancelSearch }),
    !doneSearching && !loading && !loadingAborted && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LoadMoreHelper__WEBPACK_IMPORTED_MODULE_14__["default"], { handleLoad: loadResultPage })
  ] });
}
function onFinished(fn) {
  return (0,ix_asynciterable_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(void 0, void 0, fn);
}
function getRuleKey(ruleWithOrigin) {
  if (ruleWithOrigin.origin === "grafana") {
    return getGrafanaRuleKey(ruleWithOrigin);
  }
  return getDataSourceRuleKey(ruleWithOrigin);
}
function getGrafanaRuleKey(ruleWithOrigin) {
  const {
    groupIdentifier: { namespace, groupName },
    rule
  } = ruleWithOrigin;
  return `grafana-${namespace.uid}-${groupName}-${rule.uid}}`;
}
function getDataSourceRuleKey(ruleWithOrigin) {
  const {
    rule,
    rulePositionHash,
    groupIdentifier: { rulesSource, namespace, groupName }
  } = ruleWithOrigin;
  return `${rulesSource.name}-${namespace.name}-${groupName}-${rule.name}-${rule.type}-${(0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_10__.hashRule)(rule)}-${rulePositionHash}`;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/FilterViewStatus.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterStatus: () => (/* binding */ FilterStatus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");




function FilterStatus({ state, numberOfRules, onCancel }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card, { noMargin: true, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "secondary", children: [
      state === "done" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.rule-list.filter-view.no-more-results", children: [
        "No more results \u2013 found ",
        { numberOfRules },
        " rules"
      ] }),
      state === "aborted" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.rule-list.filter-view.results-with-cancellation", children: [
        "Search cancelled \u2013 found ",
        { numberOfRules },
        " rules"
      ] }),
      state === "searching" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.rule-list.filter-view.results-loading", children: [
        "Searching \u2013 found ",
        { numberOfRules },
        " rules"
      ] })
    ] }),
    state === "searching" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { variant: "secondary", size: "sm", onClick: () => onCancel(), children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.rule-list.filter-view.cancel-search", "Cancel search") })
  ] });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/GrafanaGroupLoader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrafanaGroupLoader: () => (/* binding */ GrafanaGroupLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _api_prometheusApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/api/prometheusApi.ts");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/hooks/usePagination.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _GrafanaRuleListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/GrafanaRuleListItem.tsx");
/* harmony import */ var _components_AlertRuleListItemLoader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/AlertRuleListItemLoader.tsx");
/* harmony import */ var _components_LoadMoreButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/LoadMoreButton.tsx");












const { useGetGrafanaGroupsQuery } = _api_prometheusApi__WEBPACK_IMPORTED_MODULE_7__.prometheusApi;
function GrafanaGroupLoader({
  groupIdentifier,
  namespaceName,
  expectedRulesCount = 3
  // 3 is a random number. Usually we get the number of rules from Prometheus response
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  const { data: promResponse, isLoading: isPromResponseLoading } = useGetGrafanaGroupsQuery(
    {
      folderUid: groupIdentifier.namespace.uid,
      groupName: groupIdentifier.groupName,
      limitAlerts: 0
    },
    { pollingInterval: _utils_constants__WEBPACK_IMPORTED_MODULE_9__.RULE_LIST_POLL_INTERVAL_MS }
  );
  const rules = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return promResponse?.data.groups.at(0)?.rules ?? [];
  }, [promResponse]);
  const { pageItems, hasMore, loadMore } = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_8__.useContinuousPagination)(rules, _utils_constants__WEBPACK_IMPORTED_MODULE_9__.DEFAULT_PER_PAGE_PAGINATION_RULES_PER_GROUP);
  if (isPromResponseLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: Array.from({ length: expectedRulesCount }).map((_, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertRuleListItemLoader__WEBPACK_IMPORTED_MODULE_11__.AlertRuleListItemSkeleton, {}, index)) });
  }
  if (!promResponse) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "alerting.group-loader.group-load-failed",
          "Failed to load rules from group {{ groupName }} in {{ namespaceName }}",
          { groupName: groupIdentifier.groupName, namespaceName }
        ),
        severity: "error"
      }
    );
  }
  if (rules.length === 0) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.group-loader.no-rules", "No rules found in this group"), severity: "info" });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", gap: 0, children: [
    pageItems.map((promRule) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _GrafanaRuleListItem__WEBPACK_IMPORTED_MODULE_10__.GrafanaRuleListItem,
        {
          rule: promRule,
          groupIdentifier,
          namespaceName,
          showLocation: false
        },
        promRule.uid
      );
    }),
    hasMore && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { "aria-selected": "false", role: "treeitem", className: styles.loadMoreWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_LoadMoreButton__WEBPACK_IMPORTED_MODULE_12__.LoadMoreButton, { onClick: loadMore }) })
  ] });
}
const getStyles = (theme) => ({
  loadMoreWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    listStyle: "none",
    paddingTop: theme.spacing(1)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/GrafanaRuleListItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrafanaRuleListItem: () => (/* binding */ GrafanaRuleListItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/navigation.ts");
/* harmony import */ var _utils_ruleStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/ruleStats.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");
/* harmony import */ var _components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/AlertRuleListItem.tsx");
/* harmony import */ var _components_RuleActionsButtons_V2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/RuleActionsButtons.V2.tsx");










function GrafanaRuleListItem({
  rule,
  groupIdentifier,
  namespaceName,
  operation,
  showLocation = true
}) {
  const { name, uid, labels, provenance } = rule;
  const groupUrl = _utils_navigation__WEBPACK_IMPORTED_MODULE_3__.groups.detailsPageLink(
    _utils_datasource__WEBPACK_IMPORTED_MODULE_2__.GRAFANA_RULES_SOURCE_NAME,
    groupIdentifier.namespace.uid,
    groupIdentifier.groupName
  );
  const commonProps = {
    name,
    rulesSource: _utils_datasource__WEBPACK_IMPORTED_MODULE_2__.GrafanaRulesSource,
    group: groupIdentifier.groupName,
    groupUrl,
    namespace: namespaceName,
    href: (0,_utils_url__WEBPACK_IMPORTED_MODULE_6__.createRelativeUrl)(`/alerting/grafana/${uid}/view`),
    health: rule?.health,
    error: rule?.lastError,
    labels,
    isProvisioned: Boolean(provenance),
    isPaused: rule?.isPaused,
    application: "grafana",
    actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_RuleActionsButtons_V2__WEBPACK_IMPORTED_MODULE_8__.RuleActionsButtons, { promRule: rule, groupIdentifier, compact: true }),
    querySourceUIDs: rule?.queriedDatasourceUIDs
  };
  if (_utils_rules__WEBPACK_IMPORTED_MODULE_5__.prometheusRuleType.grafana.alertingRule(rule)) {
    const promAlertingRule = rule && rule.type === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.PromRuleType.Alerting ? rule : void 0;
    const instancesCount = (0,_utils_ruleStats__WEBPACK_IMPORTED_MODULE_4__.totalFromStats)(promAlertingRule?.totals ?? {});
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_7__.AlertRuleListItem,
      {
        ...commonProps,
        summary: rule.annotations?.summary,
        state: promAlertingRule?.state,
        instancesCount,
        operation,
        showLocation
      }
    );
  }
  if (_utils_rules__WEBPACK_IMPORTED_MODULE_5__.prometheusRuleType.grafana.recordingRule(rule)) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_7__.RecordingRuleListItem, { ...commonProps, showLocation });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertRuleListItem__WEBPACK_IMPORTED_MODULE_7__.UnknownRuleListItem, { ruleName: name, groupIdentifier, ruleDefinition: rule });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/GroupedView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrafanaDataSourceLoader: () => (/* binding */ GrafanaDataSourceLoader),
/* harmony export */   GroupedView: () => (/* binding */ GroupedView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-loading-skeleton/dist/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/api/featureDiscoveryApi.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _PaginatedDataSourceLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/PaginatedDataSourceLoader.tsx");
/* harmony import */ var _PaginatedGrafanaLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/PaginatedGrafanaLoader.tsx");
/* harmony import */ var _components_DataSourceErrorBoundary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/DataSourceErrorBoundary.tsx");
/* harmony import */ var _components_DataSourceSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/DataSourceSection.tsx");











const { useDiscoverDsFeaturesQuery } = _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_4__.featureDiscoveryApi;
function GroupedView({ groupFilter, namespaceFilter }) {
  const externalRuleSources = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.getExternalRulesSources)(), []);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { direction: "column", gap: 1, role: "list", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_DataSourceErrorBoundary__WEBPACK_IMPORTED_MODULE_8__.DataSourceErrorBoundary, { rulesSourceIdentifier: _utils_datasource__WEBPACK_IMPORTED_MODULE_5__.GrafanaRulesSource, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _PaginatedGrafanaLoader__WEBPACK_IMPORTED_MODULE_7__.PaginatedGrafanaLoader,
      {
        groupFilter,
        namespaceFilter
      },
      `${groupFilter}-${namespaceFilter}`
    ) }),
    externalRuleSources.map((ruleSource) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        DataSourceLoader,
        {
          rulesSourceIdentifier: ruleSource,
          groupFilter,
          namespaceFilter
        },
        ruleSource.uid
      );
    })
  ] });
}
function GrafanaDataSourceLoader() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_DataSourceSection__WEBPACK_IMPORTED_MODULE_9__.DataSourceSection, { name: "Grafana", application: "grafana", uid: "grafana", isLoading: true });
}
function DataSourceLoader({ rulesSourceIdentifier, groupFilter, namespaceFilter }) {
  const { data: dataSourceInfo, isLoading, error } = useDiscoverDsFeaturesQuery({ uid: rulesSourceIdentifier.uid });
  const { uid, name } = rulesSourceIdentifier;
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_DataSourceSection__WEBPACK_IMPORTED_MODULE_9__.DataSourceSection, { loader: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], { width: 250, height: 16 }), uid, name });
  }
  if (error) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_DataSourceSection__WEBPACK_IMPORTED_MODULE_9__.DataSourceSection, { error, uid, name });
  }
  if (dataSourceInfo) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_DataSourceErrorBoundary__WEBPACK_IMPORTED_MODULE_8__.DataSourceErrorBoundary, { rulesSourceIdentifier, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _PaginatedDataSourceLoader__WEBPACK_IMPORTED_MODULE_6__.PaginatedDataSourceLoader,
      {
        rulesSourceIdentifier,
        application: dataSourceInfo.application,
        groupFilter,
        namespaceFilter
      }
    ) });
  }
  return null;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/LoadMoreHelper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useIntersection.js");




function LoadMoreHelper({ handleLoad }) {
  const intersectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const intersection = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(intersectionRef, {
    root: null,
    threshold: 1
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const completelyInView = intersection && intersection.intersectionRatio > 0;
    if (completelyInView) {
      handleLoad();
    }
  }, [intersection, handleLoad]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: intersectionRef, "data-testid": "load-more-helper" });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadMoreHelper);


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/PaginatedDataSourceLoader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginatedDataSourceLoader: () => (/* binding */ PaginatedDataSourceLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/navigation.ts");
/* harmony import */ var _DataSourceGroupLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/DataSourceGroupLoader.tsx");
/* harmony import */ var _components_DataSourceSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/DataSourceSection.tsx");
/* harmony import */ var _components_GroupIntervalMetadata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/GroupIntervalMetadata.tsx");
/* harmony import */ var _components_ListGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/ListGroup.tsx");
/* harmony import */ var _components_ListSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/ListSection.tsx");
/* harmony import */ var _components_LoadMoreButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/LoadMoreButton.tsx");
/* harmony import */ var _components_NoRulesFound__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/NoRulesFound.tsx");
/* harmony import */ var _hooks_filters__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/hooks/filters.ts");
/* harmony import */ var _hooks_prometheusGroupsGenerator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/hooks/prometheusGroupsGenerator.ts");
/* harmony import */ var _hooks_useLazyLoadPrometheusGroups__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/hooks/useLazyLoadPrometheusGroups.tsx");
/* harmony import */ var _paginationLimits__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/paginationLimits.ts");

















function PaginatedDataSourceLoader({
  rulesSourceIdentifier,
  application,
  groupFilter,
  namespaceFilter
}) {
  const key = `${rulesSourceIdentifier.uid}-${groupFilter}-${namespaceFilter}`;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    PaginatedGroupsLoader,
    {
      rulesSourceIdentifier,
      application,
      groupFilter,
      namespaceFilter
    },
    key
  );
}
function PaginatedGroupsLoader({ rulesSourceIdentifier, application, groupFilter, namespaceFilter }) {
  const hasFilters = Boolean(groupFilter || namespaceFilter);
  const { uid, name } = rulesSourceIdentifier;
  const prometheusGroupsGenerator = (0,_hooks_prometheusGroupsGenerator__WEBPACK_IMPORTED_MODULE_15__.usePrometheusGroupsGenerator)();
  const apiGroupPageSize = (0,_paginationLimits__WEBPACK_IMPORTED_MODULE_17__.getApiGroupPageSize)(hasFilters);
  const groupsGenerator = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(
    (0,_hooks_prometheusGroupsGenerator__WEBPACK_IMPORTED_MODULE_15__.toIndividualRuleGroups)(prometheusGroupsGenerator(rulesSourceIdentifier, apiGroupPageSize))
  );
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const currentGenerator = groupsGenerator.current;
    return () => {
      currentGenerator.return();
    };
  }, []);
  const filterFn = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => (group) => (0,_hooks_filters__WEBPACK_IMPORTED_MODULE_14__.groupFilter)(group, {
      namespace: namespaceFilter,
      groupName: groupFilter
    }),
    [namespaceFilter, groupFilter]
  );
  const { isLoading, groups: groups2, hasMoreGroups, fetchMoreGroups, error } = (0,_hooks_useLazyLoadPrometheusGroups__WEBPACK_IMPORTED_MODULE_16__.useLazyLoadPrometheusGroups)(
    groupsGenerator.current,
    _paginationLimits__WEBPACK_IMPORTED_MODULE_17__.FRONTED_GROUPED_PAGE_SIZE,
    filterFn
  );
  const hasNoRules = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(groups2) && !isLoading;
  const groupsByNamespace = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.groupBy)(groups2, "file"), [groups2]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_DataSourceSection__WEBPACK_IMPORTED_MODULE_8__.DataSourceSection, { name, application, uid, isLoading, error, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", gap: 0, children: [
    Object.entries(groupsByNamespace).map(([namespace, groups3]) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _components_ListSection__WEBPACK_IMPORTED_MODULE_11__.ListSection,
      {
        title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "row", gap: 1, alignItems: "center", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "folder" }),
          " ",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "body", element: "h3", children: namespace })
        ] }),
        children: groups3.map((group) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          RuleGroupListItem,
          {
            group,
            rulesSourceIdentifier,
            namespaceName: namespace
          },
          `${rulesSourceIdentifier.uid}-${namespace}-${group.name}`
        ))
      },
      namespace
    )),
    hasMoreGroups && !hasNoRules && // this div will make the button not stretch
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_LoadMoreButton__WEBPACK_IMPORTED_MODULE_12__.LoadMoreButton, { loading: isLoading, onClick: fetchMoreGroups }) }),
    hasNoRules && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NoRulesFound__WEBPACK_IMPORTED_MODULE_13__.NoRulesFound, {})
  ] }) });
}
function RuleGroupListItem({ rulesSourceIdentifier, group, namespaceName }) {
  const groupIdentifier = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => ({
      rulesSource: rulesSourceIdentifier,
      namespace: { name: namespaceName },
      groupName: group.name,
      groupOrigin: "datasource"
    }),
    [rulesSourceIdentifier, namespaceName, group.name]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _components_ListGroup__WEBPACK_IMPORTED_MODULE_10__.ListGroup,
    {
      name: group.name,
      href: _utils_navigation__WEBPACK_IMPORTED_MODULE_6__.groups.detailsPageLink(rulesSourceIdentifier.uid, namespaceName, group.name),
      isOpen: false,
      metaRight: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_GroupIntervalMetadata__WEBPACK_IMPORTED_MODULE_9__.GroupIntervalIndicator, { seconds: group.interval }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DataSourceGroupLoader__WEBPACK_IMPORTED_MODULE_7__.DataSourceGroupLoader, { groupIdentifier, expectedRulesCount: group.rules.length })
    },
    group.name
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/PaginatedGrafanaLoader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrafanaRuleGroupListItem: () => (/* binding */ GrafanaRuleGroupListItem),
/* harmony export */   PaginatedGrafanaLoader: () => (/* binding */ PaginatedGrafanaLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_types_unified_alerting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/types/unified-alerting.ts");
/* harmony import */ var _components_folder_actions_FolderActionsButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/folder-actions/FolderActionsButton.tsx");
/* harmony import */ var _components_rules_NoRulesCTA__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/NoRulesCTA.tsx");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/navigation.ts");
/* harmony import */ var _GrafanaGroupLoader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/GrafanaGroupLoader.tsx");
/* harmony import */ var _components_DataSourceSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/DataSourceSection.tsx");
/* harmony import */ var _components_GroupIntervalMetadata__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/GroupIntervalMetadata.tsx");
/* harmony import */ var _components_ListGroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/ListGroup.tsx");
/* harmony import */ var _components_ListSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/ListSection.tsx");
/* harmony import */ var _components_LoadMoreButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/LoadMoreButton.tsx");
/* harmony import */ var _components_NoRulesFound__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/NoRulesFound.tsx");
/* harmony import */ var _hooks_filters__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/hooks/filters.ts");
/* harmony import */ var _hooks_prometheusGroupsGenerator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/hooks/prometheusGroupsGenerator.ts");
/* harmony import */ var _hooks_useLazyLoadPrometheusGroups__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/hooks/useLazyLoadPrometheusGroups.tsx");
/* harmony import */ var _paginationLimits__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/paginationLimits.ts");





















function PaginatedGrafanaLoader({ groupFilter, namespaceFilter }) {
  const key = `${groupFilter}-${namespaceFilter}`;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PaginatedGroupsLoader, { groupFilter, namespaceFilter }, key);
}
function PaginatedGroupsLoader({ groupFilter, namespaceFilter }) {
  const hasFilters = Boolean(groupFilter || namespaceFilter);
  const grafanaGroupsGenerator = (0,_hooks_prometheusGroupsGenerator__WEBPACK_IMPORTED_MODULE_19__.useGrafanaGroupsGenerator)({
    populateCache: hasFilters ? false : true,
    limitAlerts: 0
  });
  const apiGroupPageSize = (0,_paginationLimits__WEBPACK_IMPORTED_MODULE_21__.getApiGroupPageSize)(hasFilters);
  const groupsGenerator = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)((0,_hooks_prometheusGroupsGenerator__WEBPACK_IMPORTED_MODULE_19__.toIndividualRuleGroups)(grafanaGroupsGenerator(apiGroupPageSize)));
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const currentGenerator = groupsGenerator.current;
    return () => {
      currentGenerator.return();
    };
  }, []);
  const filterFn = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => (group) => (0,_hooks_filters__WEBPACK_IMPORTED_MODULE_18__.groupFilter)(group, {
      namespace: namespaceFilter,
      groupName: groupFilter
    }),
    [namespaceFilter, groupFilter]
  );
  const { isLoading, groups: groups2, hasMoreGroups, fetchMoreGroups, error } = (0,_hooks_useLazyLoadPrometheusGroups__WEBPACK_IMPORTED_MODULE_20__.useLazyLoadPrometheusGroups)(
    groupsGenerator.current,
    _paginationLimits__WEBPACK_IMPORTED_MODULE_21__.FRONTED_GROUPED_PAGE_SIZE,
    filterFn
  );
  const groupsByFolder = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.groupBy)(groups2, "folderUid"), [groups2]);
  const hasNoRules = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(groups2) && !isLoading;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _components_DataSourceSection__WEBPACK_IMPORTED_MODULE_12__.DataSourceSection,
    {
      name: "Grafana-managed",
      application: "grafana",
      uid: app_types_unified_alerting__WEBPACK_IMPORTED_MODULE_6__.GrafanaRulesSourceSymbol,
      isLoading,
      error,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", gap: 0, children: [
        Object.entries(groupsByFolder).map(([folderUid, groups3]) => {
          const folderName = groups3[0].file;
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _components_ListSection__WEBPACK_IMPORTED_MODULE_15__.ListSection,
            {
              title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "row", gap: 1, alignItems: "center", children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "folder" }),
                " ",
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "body", element: "h3", children: folderName })
              ] }),
              actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_folder_actions_FolderActionsButton__WEBPACK_IMPORTED_MODULE_7__.FolderActionsButton, { folderUID: folderUid }),
              children: groups3.map((group) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                GrafanaRuleGroupListItem,
                {
                  group,
                  namespaceName: folderName
                },
                `grafana-ns-${folderUid}-${group.name}`
              ))
            },
            folderUid
          );
        }),
        hasNoRules && !hasFilters && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rules_NoRulesCTA__WEBPACK_IMPORTED_MODULE_8__.GrafanaNoRulesCTA, {}),
        hasNoRules && hasFilters && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NoRulesFound__WEBPACK_IMPORTED_MODULE_17__.NoRulesFound, {}),
        hasMoreGroups && // this div will make the button not stretch
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_LoadMoreButton__WEBPACK_IMPORTED_MODULE_16__.LoadMoreButton, { loading: isLoading, onClick: fetchMoreGroups }) })
      ] })
    }
  );
}
function GrafanaRuleGroupListItem({ group, namespaceName }) {
  const groupIdentifier = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => ({
      groupName: group.name,
      namespace: {
        uid: group.folderUid
      },
      groupOrigin: "grafana"
    }),
    [group.name, group.folderUid]
  );
  const detailsLink = _utils_navigation__WEBPACK_IMPORTED_MODULE_10__.groups.detailsPageLink(_utils_datasource__WEBPACK_IMPORTED_MODULE_9__.GRAFANA_RULES_SOURCE_NAME, group.folderUid, group.name);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _components_ListGroup__WEBPACK_IMPORTED_MODULE_14__.ListGroup,
    {
      name: group.name,
      metaRight: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_GroupIntervalMetadata__WEBPACK_IMPORTED_MODULE_13__.GroupIntervalIndicator, { seconds: group.interval }),
      href: detailsLink,
      isOpen: false,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GrafanaGroupLoader__WEBPACK_IMPORTED_MODULE_11__.GrafanaGroupLoader, { groupIdentifier, namespaceName })
    },
    group.name
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/RuleList.v2.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuleListActions: () => (/* binding */ RuleListActions),
/* harmony export */   "default": () => (/* binding */ RuleListPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useToggle.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/Menu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Dropdown/Dropdown.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_export_GrafanaRulesExporter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/export/GrafanaRulesExporter.tsx");
/* harmony import */ var _components_rules_Filter_RulesViewModeSelector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/Filter/RulesViewModeSelector.tsx");
/* harmony import */ var _enterprise_components_AI_AIGenAlertRuleButton_addAIAlertRuleButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/enterprise-components/AI/AIGenAlertRuleButton/addAIAlertRuleButton.ts");
/* harmony import */ var _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var _hooks_useFilteredRules__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFilteredRules.ts");
/* harmony import */ var _FilterView__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/FilterView.tsx");
/* harmony import */ var _GroupedView__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/GroupedView.tsx");
/* harmony import */ var _RuleListPageTitle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/RuleListPageTitle.tsx");
/* harmony import */ var _filter_RulesFilter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/filter/RulesFilter.tsx");



















function RuleList() {
  const { filterState } = (0,_hooks_useFilteredRules__WEBPACK_IMPORTED_MODULE_17__.useRulesFilter)();
  const { viewMode, handleViewChange } = (0,_components_rules_Filter_RulesViewModeSelector__WEBPACK_IMPORTED_MODULE_14__.useListViewMode)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_filter_RulesFilter__WEBPACK_IMPORTED_MODULE_21__["default"], { viewMode, onViewModeChange: handleViewChange }),
    viewMode === "list" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FilterView__WEBPACK_IMPORTED_MODULE_18__.FilterView, { filterState }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GroupedView__WEBPACK_IMPORTED_MODULE_19__.GroupedView, { groupFilter: filterState.groupName, namespaceFilter: filterState.namespace })
  ] });
}
function RuleListActions() {
  const [createGrafanaRuleSupported, createGrafanaRuleAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_16__.useAlertingAbility)(_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_16__.AlertingAction.CreateAlertRule);
  const [createCloudRuleSupported, createCloudRuleAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_16__.useAlertingAbility)(_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_16__.AlertingAction.CreateExternalAlertRule);
  const [exportRulesSupported, exportRulesAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_16__.useAlertingAbility)(_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_16__.AlertingAction.ExportGrafanaManagedRules);
  const canCreateGrafanaRules = createGrafanaRuleSupported && createGrafanaRuleAllowed;
  const canCreateCloudRules = createCloudRuleSupported && createCloudRuleAllowed;
  const canExportRules = exportRulesSupported && exportRulesAllowed;
  const canCreateRules = canCreateGrafanaRules || canCreateCloudRules;
  const canImportRulesToGMA = _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.featureToggles.alertingMigrationUI && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_10__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_11__.AccessControlAction.AlertingRuleCreate) && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_10__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_11__.AccessControlAction.AlertingProvisioningSetStatus);
  const [showExportDrawer, toggleShowExportDrawer] = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(false);
  const moreActionsMenu = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Menu, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Menu.Group, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Menu.Item,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.rule-list.new-rule-for-export", "New alert rule for export"),
            icon: "file-export",
            url: "/alerting/export-new-rule"
          }
        ),
        canExportRules && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Menu.Item,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.rule-list.export-all-grafana-rules", "Export all Grafana rules"),
            icon: "download-alt",
            onClick: toggleShowExportDrawer
          }
        ),
        canImportRulesToGMA && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Menu.Item,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.rule-list-v2.import-to-gma", "Import alert rules"),
            icon: "upload",
            url: "/alerting/import-datasource-managed-rules"
          }
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Menu.Group, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.rule-list.recording-rules", "Recording rules"), children: [
        canCreateGrafanaRules && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Menu.Item,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.rule-list.new-grafana-recording-rule", "New Grafana recording rule"),
            icon: "grafana",
            url: "/alerting/new/grafana-recording"
          }
        ),
        canCreateCloudRules && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Menu.Item,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.rule-list.new-datasource-recording-rule", "New Data source recording rule"),
            icon: "gf-prometheus",
            url: "/alerting/new/recording"
          }
        )
      ] })
    ] }),
    [canCreateGrafanaRules, canCreateCloudRules, canImportRulesToGMA, canExportRules, toggleShowExportDrawer]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "row", gap: 1, children: [
    canCreateRules && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.LinkButton, { variant: "primary", icon: "plus", href: "/alerting/new/alerting", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.rule-list.new-alert-rule", children: "New alert rule" }) }),
    canCreateGrafanaRules && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_enterprise_components_AI_AIGenAlertRuleButton_addAIAlertRuleButton__WEBPACK_IMPORTED_MODULE_15__.AIAlertRuleButtonComponent, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Dropdown, { overlay: moreActionsMenu, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { variant: "secondary", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.rule-list.more", children: "More" }),
      " ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "angle-down" })
    ] }) }),
    canExportRules && showExportDrawer && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_export_GrafanaRulesExporter__WEBPACK_IMPORTED_MODULE_13__.GrafanaRulesExporter, { onClose: toggleShowExportDrawer })
  ] });
}
function RuleListPage() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_12__.AlertingPageWrapper,
    {
      navId: "alert-list",
      renderTitle: (title) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RuleListPageTitle__WEBPACK_IMPORTED_MODULE_20__.RuleListPageTitle, { title }),
      isLoading: false,
      actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RuleListActions, {}),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RuleList, {})
    }
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/components/AlertRuleListItemLoader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertRuleListItemSkeleton: () => (/* binding */ AlertRuleListItemSkeleton),
/* harmony export */   RulerRuleLoadingError: () => (/* binding */ RulerRuleLoadingError)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-loading-skeleton/dist/index.js");
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-alerting/src/grafana/rules/components/state/StateIcon.tsx");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/ListItem.tsx");
/* harmony import */ var _RuleActionsSkeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/RuleActionsSkeleton.tsx");








function AlertRuleListItemSkeleton() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _ListItem__WEBPACK_IMPORTED_MODULE_5__.ListItem,
    {
      title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], { width: 64 }),
      icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_2__.StateIcon, { isPaused: false }),
      description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], { width: 256 }),
      actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RuleActionsSkeleton__WEBPACK_IMPORTED_MODULE_6__.RuleActionsSkeleton, {}),
      "data-testid": "alert-rule-list-item-loader",
      "aria-disabled": true
    }
  );
}
function RulerRuleLoadingError({
  ruleIdentifier,
  error
}) {
  const errorMessage = error ? (0,_utils_misc__WEBPACK_IMPORTED_MODULE_4__.stringifyErrorLike)(error) : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.rule-list.rulerrule-loading-error", "Failed to load the rule");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ListItem__WEBPACK_IMPORTED_MODULE_5__.ListItem, { title: ruleIdentifier.uid, description: errorMessage, "data-testid": "ruler-rule-loading-error" });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/components/DataSourceErrorBoundary.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataSourceErrorBoundary: () => (/* binding */ DataSourceErrorBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/ErrorBoundary/ErrorBoundary.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/ErrorBoundary/ErrorWithStack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _DataSourceSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/DataSourceSection.tsx");





function DataSourceErrorBoundary({
  children,
  rulesSourceIdentifier
}) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ErrorBoundary, { children: ({ error, errorInfo }) => {
    if (error || errorInfo) {
      const { uid, name } = rulesSourceIdentifier;
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DataSourceSection__WEBPACK_IMPORTED_MODULE_6__.DataSourceSection, { uid, name, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.rule-list.ds-error-boundary.title", "Unable to load rules from this data source"),
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.rule-list.ds-error-boundary.description", children: "Check the data source configuration. Does the data source support Prometheus API?" }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ErrorWithStack,
              {
                error,
                errorInfo,
                title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.rule-list.ds-error-boundary.title", "Unable to load rules from this data source")
              }
            )
          ]
        }
      ) });
    }
    return children;
  } });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/components/DataSourceSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataSourceSection: () => (/* binding */ DataSourceSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useToggle.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Toggletip/Toggletip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_types_unified_alerting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/unified-alerting.ts");
/* harmony import */ var _components_Spacer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/Spacer.tsx");
/* harmony import */ var _components_WithReturnButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/WithReturnButton.tsx");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _DataSourceIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/DataSourceIcon.tsx");
/* harmony import */ var _RuleGroup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/RuleGroup.tsx");












const DataSourceSection = ({
  uid,
  name,
  application,
  children,
  loader,
  error,
  isLoading = false,
  description = null
}) => {
  const [isCollapsed, toggleCollapsed] = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(false);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)((theme) => getStyles(theme, isCollapsed));
  const configureLink = (() => {
    if (uid === app_types_unified_alerting__WEBPACK_IMPORTED_MODULE_10__.GrafanaRulesSourceSymbol) {
      const userIsAdmin = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_13__.isAdmin)();
      if (!userIsAdmin) {
        return;
      }
      return "/alerting/admin";
    }
    return `/connections/datasources/edit/${String(uid)}`;
  })();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", { "aria-labelledby": `datasource-${String(uid)}-heading`, role: "listitem", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 0, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 0, children: [
      isLoading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RuleGroup__WEBPACK_IMPORTED_MODULE_15__.LoadingIndicator, { datasourceUid: String(uid) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.dataSourceSectionTitle, children: loader ?? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { alignItems: "center", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.IconButton,
          {
            name: isCollapsed ? "angle-right" : "angle-down",
            onClick: toggleCollapsed,
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("common.collapse", "Collapse"),
            disabled: Boolean(error)
          }
        ),
        application && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DataSourceIcon__WEBPACK_IMPORTED_MODULE_14__.DataSourceIcon, { application }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { variant: "body", weight: "bold", element: "h2", id: `datasource-${String(uid)}-heading`, children: name }),
        description && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { color: "secondary", children: [
          "\xB7",
          " ",
          description
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Spacer__WEBPACK_IMPORTED_MODULE_11__.Spacer, {}),
        Boolean(error) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Toggletip,
          {
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.rule-list.ds-error.title", "Cannot load rules for this datasource"),
            content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { color: "error", children: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_13__.stringifyErrorLike)(error) }),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { variant: "destructive", fill: "text", size: "sm", icon: "exclamation-circle", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.rule-list.error-button", children: "Error" }) })
          }
        ),
        configureLink && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _components_WithReturnButton__WEBPACK_IMPORTED_MODULE_12__.WithReturnButton,
          {
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.rule-list.return-button.title", "Alert rules"),
            component: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LinkButton, { variant: "secondary", fill: "text", size: "sm", href: configureLink, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.rule-list.configure-datasource", children: "Configure" }) })
          }
        )
      ] }) })
    ] }),
    !isCollapsed && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.itemsWrapper, children })
  ] }) });
};
const getStyles = (theme, isCollapsed = false) => ({
  itemsWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "relative"
  }),
  dataSourceSectionTitle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    background: theme.colors.background.secondary,
    padding: theme.spacing(1, 1.5)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/components/EvaluationGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EvaluationGroup: () => (/* binding */ EvaluationGroup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/Menu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Dropdown/Dropdown.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _components_MetaText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/MetaText.tsx");
/* harmony import */ var _components_MoreButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/MoreButton.tsx");
/* harmony import */ var _components_Spacer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/Spacer.tsx");








const EvaluationGroup = ({
  name,
  provenance,
  interval,
  onToggle,
  isOpen = false,
  children
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useStyles2)(getStyles);
  const isProvisioned = Boolean(provenance);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "column", role: "treeitem", "aria-expanded": isOpen, "aria-selected": "false", gap: 0, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.headerWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "row", alignItems: "center", gap: 1, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.hiddenButton, styles.largerClickTarget), type: "button", onClick: onToggle, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { alignItems: "center", gap: 0.5, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: isOpen ? "angle-down" : "angle-right" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { truncate: true, variant: "body", children: name })
      ] }) }),
      isProvisioned && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Badge, { color: "purple", text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.evaluation-group.text-provisioned", "Provisioned") }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Spacer__WEBPACK_IMPORTED_MODULE_13__.Spacer, {}),
      interval && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MetaText__WEBPACK_IMPORTED_MODULE_11__.MetaText, { icon: "history", children: interval }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { size: "sm", icon: "pen", variant: "secondary", disabled: isProvisioned, "data-testid": "edit-group-action", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "common.edit", children: "Edit" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Dropdown,
        {
          overlay: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Menu, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Menu.Item,
              {
                label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.evaluation-group.label-reorder-rules", "Re-order rules"),
                icon: "flip",
                disabled: isProvisioned
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Menu.Divider, {}),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.evaluation-group.label-export", "Export"), icon: "download-alt" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Menu.Item,
              {
                label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.evaluation-group.label-delete", "Delete"),
                icon: "trash-alt",
                destructive: true,
                disabled: isProvisioned
              }
            )
          ] }),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MoreButton__WEBPACK_IMPORTED_MODULE_12__["default"], { size: "sm" })
        }
      )
    ] }) }),
    isOpen && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { role: "group", children })
  ] });
};
const getStyles = (theme) => ({
  headerWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: `${theme.spacing(1)} ${theme.spacing(1)}`,
    background: theme.colors.background.secondary,
    border: "none",
    borderBottom: `solid 1px ${theme.colors.border.weak}`,
    borderTopLeftRadius: theme.shape.radius.default,
    borderTopRightRadius: theme.shape.radius.default
  }),
  hiddenButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    border: "none",
    background: "transparent"
  }),
  largerClickTarget: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(0.5),
    margin: `-${theme.spacing(0.5)}`
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/components/GroupIntervalMetadata.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupIntervalIndicator: () => (/* binding */ GroupIntervalIndicator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");




const GroupIntervalIndicator = ({ seconds }) => {
  const durationString = (0,_utils_time__WEBPACK_IMPORTED_MODULE_4__.formatPrometheusDuration)(seconds * 1e3);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Text, { variant: "bodySmall", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { direction: "row", alignItems: "center", gap: 0.5, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { name: "clock-nine", size: "xs" }),
    " ",
    durationString
  ] }) });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/components/ListGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListGroup: () => (/* binding */ ListGroup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useToggle.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _components_Spacer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/Spacer.tsx");







const ListGroup = ({
  name,
  description,
  isOpen = true,
  metaRight = null,
  actions = null,
  href,
  children
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const [open, toggle] = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(isOpen);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.groupWrapper, role: "treeitem", "aria-expanded": open, "aria-selected": "false", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      GroupHeader,
      {
        onToggle: () => toggle(),
        isOpen: open,
        description,
        name,
        metaRight,
        actions,
        href
      }
    ),
    open && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { role: "group", className: styles.childrenWrapper, children })
  ] });
};
const GroupHeader = (props) => {
  const { name, description, metaRight = null, actions = null, isOpen = false, onToggle, href } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.headerWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { alignItems: "center", gap: 0.5, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.IconButton,
        {
          name: isOpen ? "angle-down" : "angle-right",
          onClick: onToggle,
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("common.collapse", "Collapse")
        }
      ),
      href ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TextLink, { href, color: "primary", inline: false, children: name }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { truncate: true, variant: "body", element: "h4", children: name })
    ] }),
    description,
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Spacer__WEBPACK_IMPORTED_MODULE_9__.Spacer, {}),
    metaRight,
    actions
  ] }) });
};
const getStyles = (theme) => ({
  groupWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      marginLeft: theme.spacing(2.5),
      borderLeft: `solid 1px ${theme.colors.border.weak}`
    }
  }),
  headerWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    position: "relative",
    "&:hover": {
      background: theme.colors.action.hover
    }
  }),
  childrenWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "relative"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/components/LoadMoreButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadMoreButton: () => (/* binding */ LoadMoreButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");




function LoadMoreButton({ onClick, loading = false }) {
  const label = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.rule-list.pagination.next-page", "Show more\u2026");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button,
    {
      "data-testid": "load-more-rule-groups",
      "aria-label": label,
      fill: "text",
      size: "sm",
      variant: "secondary",
      onClick,
      disabled: loading,
      children: loading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.rule-list.loading-more-groups", children: "Loading more groups\u2026" }) : label
    }
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/components/NoRulesFound.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoRulesFound: () => (/* binding */ NoRulesFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





const NoRulesFound = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.noRules, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.rule-list.empty-data-source", children: "No rules found" }) }) });
};
const getStyles = (theme) => ({
  noRules: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    margin: theme.spacing(1.5, 0, 0.5, 4)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/components/RuleActionsButtons.V2.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuleActionsButtons: () => (/* binding */ RuleActionsButtons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_features_alerting_unified_components_rule_list_extensions_EnrichmentDrawerExtension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-list/extensions/EnrichmentDrawerExtension.tsx");
/* harmony import */ var app_features_alerting_unified_components_rule_viewer_AlertRuleMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/AlertRuleMenu.tsx");
/* harmony import */ var app_features_alerting_unified_components_rule_viewer_DeleteModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/DeleteModal.tsx");
/* harmony import */ var app_features_alerting_unified_components_rules_CloneRule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/CloneRule.tsx");
/* harmony import */ var app_features_alerting_unified_components_silences_SilenceGrafanaRuleDrawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilenceGrafanaRuleDrawer.tsx");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");
















function RuleActionsButtons({ compact, rule, promRule, groupIdentifier }) {
  const redirectToListView = compact ? false : true;
  const [deleteModal, showDeleteModal] = (0,app_features_alerting_unified_components_rule_viewer_DeleteModal__WEBPACK_IMPORTED_MODULE_8__.useDeleteModal)(redirectToListView);
  const [showSilenceDrawer, setShowSilenceDrawer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [showEnrichmentDrawer, setShowEnrichmentDrawer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [redirectToClone, setRedirectToClone] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(void 0);
  const isProvisioned = getIsProvisioned(rule, promRule);
  const [editRuleSupported, editRuleAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__.useRulerRuleAbility)(rule, groupIdentifier, _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__.AlertRuleAction.Update);
  const [grafanaEditRuleSupported, grafanaEditRuleAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__.useGrafanaPromRuleAbility)(
    _utils_rules__WEBPACK_IMPORTED_MODULE_14__.prometheusRuleType.grafana.rule(promRule) ? promRule : _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__.skipToken,
    _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__.AlertRuleAction.Update
  );
  const canEditRule = editRuleSupported && editRuleAllowed || grafanaEditRuleSupported && grafanaEditRuleAllowed;
  const buttons = [];
  const buttonSize = compact ? "sm" : "md";
  const identifier = getEditableIdentifier(groupIdentifier, rule, promRule);
  if (!identifier) {
    return null;
  }
  const ruleUid = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_14__.getRuleUID)(rule ?? promRule);
  const silenceableRule = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isString)(ruleUid) && (_utils_rules__WEBPACK_IMPORTED_MODULE_14__.rulerRuleType.grafana.alertingRule(rule) || _utils_rules__WEBPACK_IMPORTED_MODULE_14__.prometheusRuleType.grafana.alertingRule(promRule));
  if (canEditRule) {
    const editURL = (0,_utils_url__WEBPACK_IMPORTED_MODULE_15__.createRelativeUrl)(`/alerting/${encodeURIComponent(_utils_rule_id__WEBPACK_IMPORTED_MODULE_13__.stringifyIdentifier(identifier))}/edit`);
    buttons.push(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.rule-actions-buttons.title-edit", "Edit"),
          size: buttonSize,
          variant: "secondary",
          fill: "text",
          href: editURL,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "common.edit", children: "Edit" })
        },
        "edit"
      )
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { gap: 0, alignItems: "center", wrap: "nowrap", children: [
    buttons,
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      app_features_alerting_unified_components_rule_viewer_AlertRuleMenu__WEBPACK_IMPORTED_MODULE_7__["default"],
      {
        buttonSize,
        fill: "text",
        rulerRule: rule,
        promRule,
        groupIdentifier,
        identifier,
        handleDelete: (identifier2, groupIdentifier2) => showDeleteModal(identifier2, groupIdentifier2),
        handleSilence: () => setShowSilenceDrawer(true),
        handleManageEnrichments: () => setShowEnrichmentDrawer(true),
        handleDuplicateRule: () => setRedirectToClone({ identifier, isProvisioned })
      }
    ),
    deleteModal,
    silenceableRule && showSilenceDrawer && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_alerting_unified_components_silences_SilenceGrafanaRuleDrawer__WEBPACK_IMPORTED_MODULE_10__["default"], { ruleUid, onClose: () => setShowSilenceDrawer(false) }),
    ruleUid && showEnrichmentDrawer && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_alerting_unified_components_rule_list_extensions_EnrichmentDrawerExtension__WEBPACK_IMPORTED_MODULE_6__.EnrichmentDrawerExtension, { ruleUid, onClose: () => setShowEnrichmentDrawer(false) }),
    redirectToClone?.identifier && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      app_features_alerting_unified_components_rules_CloneRule__WEBPACK_IMPORTED_MODULE_9__.RedirectToCloneRule,
      {
        identifier: redirectToClone.identifier,
        isProvisioned: redirectToClone.isProvisioned,
        onDismiss: () => setRedirectToClone(void 0)
      }
    )
  ] });
}
function getIsProvisioned(rule, promRule) {
  if (rule) {
    return (0,_utils_rules__WEBPACK_IMPORTED_MODULE_14__.isProvisionedRule)(rule);
  }
  if (promRule) {
    return (0,_utils_rules__WEBPACK_IMPORTED_MODULE_14__.isProvisionedPromRule)(promRule);
  }
  return false;
}
function getEditableIdentifier(groupIdentifier, rule, promRule) {
  if (rule) {
    return _utils_rule_id__WEBPACK_IMPORTED_MODULE_13__.fromRulerRuleAndGroupIdentifierV2(groupIdentifier, rule);
  }
  if (_utils_rules__WEBPACK_IMPORTED_MODULE_14__.prometheusRuleType.grafana.rule(promRule)) {
    return {
      ruleSourceName: "grafana",
      uid: promRule.uid
    };
  }
  (0,_Analytics__WEBPACK_IMPORTED_MODULE_11__.logWarning)("Unable to construct an editable rule identifier");
  return void 0;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/components/RuleActionsSkeleton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuleActionsSkeleton: () => (/* binding */ RuleActionsSkeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-loading-skeleton/dist/index.js");



function RuleActionsSkeleton() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], { width: 50, height: 16 });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/components/RuleGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EvaluationGroupLoader: () => (/* binding */ EvaluationGroupLoader),
/* harmony export */   LoadingIndicator: () => (/* binding */ LoadingIndicator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useToggle.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useMeasure.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingBar/LoadingBar.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Pagination/Pagination.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/hooks/usePagination.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _AlertRuleListItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/AlertRuleListItem.tsx");
/* harmony import */ var _EvaluationGroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/EvaluationGroup.tsx");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/ListItem.tsx");














const ALERT_RULE_PAGE_SIZE = 15;
const EvaluationGroupLoader = ({
  name,
  provenance,
  interval,
  namespace,
  rulerConfig
}) => {
  const [isOpen, toggle] = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(false);
  const [fetchRulerRuleGroup, { currentData: promNamespace, isLoading, error }] = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_9__.alertRuleApi.endpoints.prometheusRuleNamespaces.useLazyQuery();
  const promRules = promNamespace?.flatMap((namespace2) => namespace2.groups).flatMap((groups) => groups.rules);
  const { page, pageItems, onPageChange, numberOfPages } = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_10__.usePagination)(promRules ?? [], 1, ALERT_RULE_PAGE_SIZE);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isOpen && rulerConfig) {
      fetchRulerRuleGroup({
        namespace,
        groupName: name,
        ruleSourceName: rulerConfig.dataSourceName
      });
    }
  }, [fetchRulerRuleGroup, isOpen, name, namespace, rulerConfig]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_EvaluationGroup__WEBPACK_IMPORTED_MODULE_14__.EvaluationGroup, { name, interval, provenance, isOpen, onToggle: toggle, children: error ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Alert,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "alerting.evaluation-group-loader.title-something-wrong-trying-fetch-group-details",
        "Something went wrong when trying to fetch group details"
      ),
      children: String(error)
    }
  ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    isLoading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GroupLoadingIndicator, {}) : pageItems.map((rule, index) => {
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _AlertRuleListItem__WEBPACK_IMPORTED_MODULE_13__.AlertRuleListItem,
        {
          state: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_8__.PromAlertingRuleState.Inactive,
          name: rule.name,
          href: "/",
          summary: _utils_rules__WEBPACK_IMPORTED_MODULE_12__.prometheusRuleType.alertingRule(rule) ? rule.annotations?.[_utils_constants__WEBPACK_IMPORTED_MODULE_11__.Annotation.summary] : void 0
        },
        index
      );
      return null;
    }),
    numberOfPages > 1 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Pagination, { currentPage: page, numberOfPages, onNavigate: onPageChange })
  ] }) });
};
const LoadingIndicator = ({ datasourceUid }) => {
  const [ref, { width }] = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref, "data-testid": `ds-loading-indicator-${datasourceUid}`, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LoadingBar, { width }) });
};
const GroupLoadingIndicator = () => {
  const [ref, { width }] = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { ref, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LoadingBar, { width }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ListItem__WEBPACK_IMPORTED_MODULE_15__.SkeletonListItem, {})
  ] });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/filter/RulesFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _components_rules_Filter_RulesFilter_v1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/Filter/RulesFilter.v1.tsx");





const RulesFilterV2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/* import() */ "public_app_features_alerting_unified_rule-list_filter_RulesFilter_v2_tsx").then(__webpack_require__.bind(__webpack_require__, "./public/app/features/alerting/unified/rule-list/filter/RulesFilter.v2.tsx")));
const RulesFilter = (props) => {
  const newView = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.alertingFilterV2;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, { children: newView ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RulesFilterV2, { ...props }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rules_Filter_RulesFilter_v1__WEBPACK_IMPORTED_MODULE_3__["default"], { ...props }) });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RulesFilter);


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/hooks/filters.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   groupFilter: () => (/* binding */ groupFilter),
/* harmony export */   ruleFilter: () => (/* binding */ ruleFilter)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var micro_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/micro-memoize/dist/micro-memoize.js");
/* harmony import */ var micro_memoize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(micro_memoize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_fuzzySearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/fuzzySearch.ts");
/* harmony import */ var _utils_matchers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/matchers.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _components_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/components/util.ts");










function groupFilter(group, filterState) {
  const { name, file } = group;
  const { namespace, groupName } = filterState;
  if (namespace && !(0,_utils_fuzzySearch__WEBPACK_IMPORTED_MODULE_5__.fuzzyMatches)(file, namespace)) {
    return false;
  }
  if (groupName && !(0,_utils_fuzzySearch__WEBPACK_IMPORTED_MODULE_5__.fuzzyMatches)(name, groupName)) {
    return false;
  }
  return true;
}
function ruleFilter(rule, filterState) {
  const { name, labels = {}, health, type } = rule;
  if (filterState.freeFormWords.length > 0) {
    const nameMatches = (0,_utils_fuzzySearch__WEBPACK_IMPORTED_MODULE_5__.fuzzyMatches)(name, filterState.freeFormWords.join(" "));
    if (!nameMatches) {
      return false;
    }
  }
  if (filterState.ruleName && !(0,_utils_fuzzySearch__WEBPACK_IMPORTED_MODULE_5__.fuzzyMatches)(name, filterState.ruleName)) {
    return false;
  }
  if (filterState.labels.length > 0) {
    const matchers = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.compact)(filterState.labels.map(looseParseMatcher));
    const doRuleLabelsMatchQuery = matchers.length > 0 && (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_2__.labelsMatchMatchers)(labels, matchers);
    const doAlertsContainMatchingLabels = matchers.length > 0 && _utils_rules__WEBPACK_IMPORTED_MODULE_7__.prometheusRuleType.alertingRule(rule) && rule.alerts && rule.alerts.some((alert) => (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_2__.labelsMatchMatchers)(alert.labels || {}, matchers));
    if (!doRuleLabelsMatchQuery && !doAlertsContainMatchingLabels) {
      return false;
    }
  }
  if (filterState.ruleType && type !== filterState.ruleType) {
    return false;
  }
  if (filterState.ruleState) {
    if (!_utils_rules__WEBPACK_IMPORTED_MODULE_7__.prometheusRuleType.alertingRule(rule)) {
      return false;
    }
    if (rule.state !== filterState.ruleState) {
      return false;
    }
  }
  if (filterState.ruleHealth && (0,_components_util__WEBPACK_IMPORTED_MODULE_8__.normalizeHealth)(health) !== filterState.ruleHealth) {
    return false;
  }
  if (filterState.contactPoint) {
    if (!_utils_rules__WEBPACK_IMPORTED_MODULE_7__.prometheusRuleType.grafana.alertingRule(rule)) {
      return false;
    }
    if (!rule.notificationSettings) {
      return false;
    }
    if (filterState.contactPoint !== rule.notificationSettings.receiver) {
      return false;
    }
  }
  if (filterState.dashboardUid) {
    if (!_utils_rules__WEBPACK_IMPORTED_MODULE_7__.prometheusRuleType.alertingRule(rule)) {
      return false;
    }
    const dashboardAnnotation = rule.annotations?.[_utils_constants__WEBPACK_IMPORTED_MODULE_3__.Annotation.dashboardUID];
    if (dashboardAnnotation !== filterState.dashboardUid) {
      return false;
    }
  }
  if (filterState.plugins === "hide" && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_7__.isPluginProvidedRule)(rule)) {
    return false;
  }
  if (filterState.dataSourceNames.length > 0) {
    const isGrafanaRule = _utils_rules__WEBPACK_IMPORTED_MODULE_7__.prometheusRuleType.grafana.rule(rule);
    if (isGrafanaRule) {
      try {
        const filterDatasourceUids = mapDataSourceNamesToUids(filterState.dataSourceNames);
        const queriedDatasourceUids = rule.queriedDatasourceUIDs || [];
        const queryIncludesDataSource = queriedDatasourceUids.some((uid) => filterDatasourceUids.includes(uid));
        if (!queryIncludesDataSource) {
          return false;
        }
      } catch (error) {
        return false;
      }
    }
  }
  return true;
}
function looseParseMatcher(matcherQuery) {
  try {
    return (0,_utils_matchers__WEBPACK_IMPORTED_MODULE_6__.parseMatcher)(matcherQuery);
  } catch {
    return { name: matcherQuery, value: "", isRegex: true, isEqual: true };
  }
}
const mapDataSourceNamesToUids = micro_memoize__WEBPACK_IMPORTED_MODULE_1___default()(
  (names) => {
    return names.map((name) => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.attempt)(_utils_datasource__WEBPACK_IMPORTED_MODULE_4__.getDatasourceAPIUid, name)).filter(lodash__WEBPACK_IMPORTED_MODULE_0__.isString);
  },
  { maxSize: 1 }
);


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/hooks/prometheusGroupsGenerator.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toIndividualRuleGroups: () => (/* binding */ toIndividualRuleGroups),
/* harmony export */   useGrafanaGroupsGenerator: () => (/* binding */ useGrafanaGroupsGenerator),
/* harmony export */   usePrometheusGroupsGenerator: () => (/* binding */ usePrometheusGroupsGenerator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_prometheusApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/api/prometheusApi.ts");



const { useLazyGetGroupsQuery, useLazyGetGrafanaGroupsQuery } = _api_prometheusApi__WEBPACK_IMPORTED_MODULE_1__.prometheusApi;
function usePrometheusGroupsGenerator() {
  const [getGroups] = useLazyGetGroupsQuery();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    async function* (ruleSource, groupLimit) {
      const getRuleSourceGroupsWithCache = async (fetchOptions) => {
        const response = await getGroups({
          ruleSource: { uid: ruleSource.uid },
          notificationOptions: { showErrorAlert: false },
          ...fetchOptions
        }).unwrap();
        return response;
      };
      yield* genericGroupsGenerator(getRuleSourceGroupsWithCache, groupLimit);
    },
    [getGroups]
  );
}
function useGrafanaGroupsGenerator(hookOptions = {}) {
  const [getGrafanaGroups] = useLazyGetGrafanaGroupsQuery();
  const { populateGroupsResponseCache } = (0,_api_prometheusApi__WEBPACK_IMPORTED_MODULE_1__.usePopulateGrafanaPrometheusApiCache)();
  const getGroupsAndProvideCache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    async (fetchOptions) => {
      const response = await getGrafanaGroups({
        ...fetchOptions,
        limitAlerts: hookOptions.limitAlerts,
        ...fetchOptions.filter
      }).unwrap();
      if (hookOptions.populateCache) {
        populateGroupsResponseCache(response.data.groups);
      }
      return response;
    },
    [getGrafanaGroups, hookOptions.limitAlerts, hookOptions.populateCache, populateGroupsResponseCache]
  );
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    async function* (groupLimit, filter) {
      yield* genericGroupsGenerator(
        (fetchOptions) => getGroupsAndProvideCache({ ...fetchOptions, filter }),
        groupLimit
      );
    },
    [getGroupsAndProvideCache]
  );
}
function toIndividualRuleGroups(generator) {
  return async function* () {
    for await (const batch of generator) {
      for (const item of batch) {
        yield item;
      }
    }
  }();
}
async function* genericGroupsGenerator(fetchGroups, groupLimit) {
  let response = await fetchGroups({ groupLimit });
  yield response.data.groups;
  let lastToken = response.data?.groupNextToken;
  while (lastToken) {
    response = await fetchGroups({ groupNextToken: lastToken, groupLimit });
    yield response.data.groups;
    lastToken = response.data?.groupNextToken;
  }
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/hooks/useFilteredRulesIterator.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFilteredRulesIteratorProvider: () => (/* binding */ useFilteredRulesIteratorProvider)
/* harmony export */ });
/* harmony import */ var ix_asynciterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/ix/asynciterable/asynciterablex.mjs");
/* harmony import */ var ix_asynciterable_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/ix/asynciterable/empty.mjs");
/* harmony import */ var ix_asynciterable_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/ix/asynciterable/merge.mjs");
/* harmony import */ var ix_asynciterable_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/ix/asynciterable/operators/catcherror.mjs");
/* harmony import */ var ix_asynciterable_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/ix/asynciterable/operators/concatmap.mjs");
/* harmony import */ var ix_asynciterable_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/ix/asynciterable/operators/withabort.mjs");
/* harmony import */ var _search_rulesSearchParser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/search/rulesSearchParser.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _rulePositionHash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/rulePositionHash.ts");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/hooks/filters.ts");
/* harmony import */ var _prometheusGroupsGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/hooks/prometheusGroupsGenerator.ts");










function useFilteredRulesIteratorProvider() {
  const allExternalRulesSources = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_7__.getExternalRulesSources)();
  const prometheusGroupsGenerator = (0,_prometheusGroupsGenerator__WEBPACK_IMPORTED_MODULE_10__.usePrometheusGroupsGenerator)();
  const grafanaGroupsGenerator = (0,_prometheusGroupsGenerator__WEBPACK_IMPORTED_MODULE_10__.useGrafanaGroupsGenerator)({ limitAlerts: 0 });
  const getFilteredRulesIterable = (filterState, groupLimit) => {
    const abortController = new AbortController();
    const normalizedFilterState = normalizeFilterState(filterState);
    const hasDataSourceFilterActive = Boolean(filterState.dataSourceNames.length);
    const grafanaRulesGenerator = (0,ix_asynciterable__WEBPACK_IMPORTED_MODULE_0__.from)(
      grafanaGroupsGenerator(groupLimit, {
        contactPoint: filterState.contactPoint ?? void 0,
        health: filterState.ruleHealth ? [filterState.ruleHealth] : [],
        state: filterState.ruleState ? [filterState.ruleState] : []
      })
    ).pipe(
      (0,ix_asynciterable_operators__WEBPACK_IMPORTED_MODULE_5__.withAbort)(abortController.signal),
      (0,ix_asynciterable_operators__WEBPACK_IMPORTED_MODULE_4__.concatMap)(
        (groups) => groups.filter((group) => (0,_filters__WEBPACK_IMPORTED_MODULE_9__.groupFilter)(group, normalizedFilterState)).flatMap((group) => group.rules.map((rule) => ({ group, rule }))).filter(({ rule }) => (0,_filters__WEBPACK_IMPORTED_MODULE_9__.ruleFilter)(rule, normalizedFilterState)).map(({ group, rule }) => mapGrafanaRuleToRuleWithOrigin(group, rule))
      ),
      (0,ix_asynciterable_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,ix_asynciterable_empty__WEBPACK_IMPORTED_MODULE_1__.empty)())
    );
    const externalRulesSourcesToFetchFrom = hasDataSourceFilterActive ? getRulesSourcesFromFilter(filterState) : allExternalRulesSources;
    if (filterState.ruleSource === _search_rulesSearchParser__WEBPACK_IMPORTED_MODULE_6__.RuleSource.Grafana) {
      return { iterable: grafanaRulesGenerator, abortController };
    }
    const dataSourceGenerators = externalRulesSourcesToFetchFrom.map(
      (dataSourceIdentifier) => {
        const promGroupsGenerator = (0,ix_asynciterable__WEBPACK_IMPORTED_MODULE_0__.from)(
          prometheusGroupsGenerator(dataSourceIdentifier, groupLimit)
        ).pipe(
          (0,ix_asynciterable_operators__WEBPACK_IMPORTED_MODULE_5__.withAbort)(abortController.signal),
          (0,ix_asynciterable_operators__WEBPACK_IMPORTED_MODULE_4__.concatMap)(
            (groups) => groups.filter((group) => (0,_filters__WEBPACK_IMPORTED_MODULE_9__.groupFilter)(group, normalizedFilterState)).flatMap((group) => group.rules.map((rule, index) => ({ group, rule, index }))).filter(({ rule }) => (0,_filters__WEBPACK_IMPORTED_MODULE_9__.ruleFilter)(rule, normalizedFilterState)).map(({ group, rule, index }) => mapRuleToRuleWithOrigin(dataSourceIdentifier, group, rule, index))
          ),
          (0,ix_asynciterable_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,ix_asynciterable_empty__WEBPACK_IMPORTED_MODULE_1__.empty)())
        );
        return promGroupsGenerator;
      }
    );
    const iterablesToMerge = [];
    const includeGrafana = filterState.ruleSource !== "datasource";
    const includeExternal = true;
    if (includeGrafana) {
      iterablesToMerge.push(grafanaRulesGenerator);
    }
    if (includeExternal) {
      iterablesToMerge.push(...dataSourceGenerators);
    }
    const iterable = mergeIterables(iterablesToMerge);
    return { iterable, abortController };
  };
  return getFilteredRulesIterable;
}
function mergeIterables(iterables) {
  if (iterables.length === 0) {
    return (0,ix_asynciterable_empty__WEBPACK_IMPORTED_MODULE_1__.empty)();
  }
  const [firstIterable, ...rest] = iterables;
  return (0,ix_asynciterable_merge__WEBPACK_IMPORTED_MODULE_2__.merge)(firstIterable, ...rest);
}
function getRulesSourcesFromFilter(filter) {
  return filter.dataSourceNames.reduce((acc, dataSourceName) => {
    try {
      const uid = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_7__.getDatasourceAPIUid)(dataSourceName);
      const type = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_7__.getDataSourceByUid)(uid)?.type;
      if (type === void 0 || (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_7__.isSupportedExternalRulesSourceType)(type) === false) {
        return acc;
      }
      acc.push({
        name: dataSourceName,
        uid,
        ruleSourceType: "datasource"
      });
    } catch {
    }
    return acc;
  }, []);
}
function mapRuleToRuleWithOrigin(rulesSource, group, rule, ruleIndex) {
  return {
    rule,
    groupIdentifier: {
      rulesSource,
      namespace: { name: group.file },
      groupName: group.name,
      groupOrigin: "datasource"
    },
    origin: "datasource",
    rulePositionHash: (0,_rulePositionHash__WEBPACK_IMPORTED_MODULE_8__.createRulePositionHash)(ruleIndex, group.rules.length)
  };
}
function mapGrafanaRuleToRuleWithOrigin(group, rule) {
  return {
    rule,
    groupIdentifier: {
      namespace: { uid: group.folderUid },
      groupName: group.name,
      groupOrigin: "grafana"
    },
    namespaceName: group.file,
    origin: "grafana"
  };
}
function normalizeFilterState(filterState) {
  return {
    ...filterState,
    freeFormWords: filterState.freeFormWords.map((word) => word.toLowerCase()),
    ruleName: filterState.ruleName?.toLowerCase(),
    groupName: filterState.groupName?.toLowerCase(),
    namespace: filterState.namespace?.toLowerCase()
  };
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/hooks/useLazyLoadPrometheusGroups.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLazyLoadPrometheusGroups: () => (/* binding */ useLazyLoadPrometheusGroups)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var _hooks_useAsync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAsync.tsx");




function useLazyLoadPrometheusGroups(groupsGenerator, pageSize, filter) {
  const [groups, setGroups] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [hasMoreGroups, setHasMoreGroups] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [{ execute: fetchMoreGroups }, groupsRequestState] = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_2__.useAsync)(async () => {
    let done = false;
    const currentGroups = [];
    while (currentGroups.length < pageSize) {
      const generatorResult = await groupsGenerator.next();
      if (generatorResult.done) {
        done = true;
        break;
      }
      const group = generatorResult.value;
      if (filter && !filter(group)) {
        continue;
      }
      currentGroups.push(group);
    }
    if (done) {
      setHasMoreGroups(false);
    }
    setGroups((groups2) => groups2.concat(currentGroups));
  });
  (0,react_use__WEBPACK_IMPORTED_MODULE_1__["default"])(() => {
    fetchMoreGroups();
  });
  const isLoading = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_2__.isLoading)(groupsRequestState);
  return {
    isLoading,
    error: groupsRequestState.error,
    groups,
    hasMoreGroups,
    fetchMoreGroups
  };
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/paginationLimits.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_GROUPS_API_PAGE_SIZE: () => (/* binding */ DEFAULT_GROUPS_API_PAGE_SIZE),
/* harmony export */   FILTERED_GROUPS_API_PAGE_SIZE: () => (/* binding */ FILTERED_GROUPS_API_PAGE_SIZE),
/* harmony export */   FRONTED_GROUPED_PAGE_SIZE: () => (/* binding */ FRONTED_GROUPED_PAGE_SIZE),
/* harmony export */   FRONTEND_LIST_PAGE_SIZE: () => (/* binding */ FRONTEND_LIST_PAGE_SIZE),
/* harmony export */   getApiGroupPageSize: () => (/* binding */ getApiGroupPageSize)
/* harmony export */ });

const FRONTEND_LIST_PAGE_SIZE = 100;
const FILTERED_GROUPS_API_PAGE_SIZE = 2e3;
const DEFAULT_GROUPS_API_PAGE_SIZE = 40;
const FRONTED_GROUPED_PAGE_SIZE = DEFAULT_GROUPS_API_PAGE_SIZE;
function getApiGroupPageSize(hasFilters) {
  return hasFilters ? FILTERED_GROUPS_API_PAGE_SIZE : DEFAULT_GROUPS_API_PAGE_SIZE;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/ruleMatching.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMatchingPromRule: () => (/* binding */ getMatchingPromRule),
/* harmony export */   getMatchingRulerRule: () => (/* binding */ getMatchingRulerRule),
/* harmony export */   matchRulesGroup: () => (/* binding */ matchRulesGroup)
/* harmony export */ });
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _rulePositionHash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/rulePositionHash.ts");




function getMatchingRulerRule(rulerRuleGroup, promRuleWithOrigin) {
  const { rule, rulePositionHash } = promRuleWithOrigin;
  const rulesByName = rulerRuleGroup.rules.filter((r) => (0,_utils_rules__WEBPACK_IMPORTED_MODULE_1__.getRuleName)(r) === rule.name);
  if (rulesByName.length === 1) {
    return rulesByName[0];
  }
  const rulesByLabelsAndAnnotations = rulesByName.filter((r) => {
    return (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_0__.getRulerRuleFingerprint)(r, false).join("-") === (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_0__.getPromRuleFingerprint)(rule, false).join("-");
  });
  if (rulesByLabelsAndAnnotations.length === 1) {
    return rulesByLabelsAndAnnotations[0];
  }
  const rulesByLabelsAndAnnotationsAndQuery = rulesByName.filter((r) => {
    return (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_0__.getRulerRuleFingerprint)(r, true).join("-") === (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_0__.getPromRuleFingerprint)(rule, true).join("-");
  });
  if (rulesByLabelsAndAnnotationsAndQuery.length === 1) {
    return rulesByLabelsAndAnnotationsAndQuery[0];
  }
  if (rulesByLabelsAndAnnotationsAndQuery.length > 1 && rulePositionHash) {
    for (const candidateRule of rulesByLabelsAndAnnotationsAndQuery) {
      const rulerRuleIndex = rulerRuleGroup.rules.indexOf(candidateRule);
      const rulerPositionHash = (0,_rulePositionHash__WEBPACK_IMPORTED_MODULE_2__.createRulePositionHash)(rulerRuleIndex, rulerRuleGroup.rules.length);
      if (rulerPositionHash === rulePositionHash) {
        return candidateRule;
      }
    }
  }
  return void 0;
}
function getMatchingPromRule(promRuleGroup, rulerRuleWithPosition) {
  const { rulePositionHash, ...rule } = rulerRuleWithPosition;
  const rulesByName = promRuleGroup.rules.filter((r) => r.name === (0,_utils_rules__WEBPACK_IMPORTED_MODULE_1__.getRuleName)(rule));
  if (rulesByName.length === 1) {
    return rulesByName[0];
  }
  const rulesByLabelsAndAnnotations = rulesByName.filter((r) => {
    return (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_0__.getPromRuleFingerprint)(r, false).join("-") === (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_0__.getRulerRuleFingerprint)(rule, false).join("-");
  });
  if (rulesByLabelsAndAnnotations.length === 1) {
    return rulesByLabelsAndAnnotations[0];
  }
  const rulesByLabelsAndAnnotationsAndQuery = rulesByName.filter((r) => {
    return (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_0__.getPromRuleFingerprint)(r, true).join("-") === (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_0__.getRulerRuleFingerprint)(rule, true).join("-");
  });
  if (rulesByLabelsAndAnnotationsAndQuery.length === 1) {
    return rulesByLabelsAndAnnotationsAndQuery[0];
  }
  if (rulesByLabelsAndAnnotationsAndQuery.length > 1 && rulePositionHash) {
    for (const candidateRule of rulesByLabelsAndAnnotationsAndQuery) {
      const promRuleIndex = promRuleGroup.rules.indexOf(candidateRule);
      const promPositionHash = (0,_rulePositionHash__WEBPACK_IMPORTED_MODULE_2__.createRulePositionHash)(promRuleIndex, promRuleGroup.rules.length);
      if (promPositionHash === rulePositionHash) {
        return candidateRule;
      }
    }
  }
  return void 0;
}
function matchRulesGroup(rulerGroup, promGroup) {
  const matchingResult = rulerGroup.rules.reduce(
    (acc, rulerRule, index) => {
      const { matches, unmatchedPromRules } = acc;
      const rulerRuleWithPosition = {
        ...rulerRule,
        rulePositionHash: (0,_rulePositionHash__WEBPACK_IMPORTED_MODULE_2__.createRulePositionHash)(index, rulerGroup.rules.length)
      };
      const promRule = getMatchingPromRule(promGroup, rulerRuleWithPosition);
      if (promRule) {
        matches.set(rulerRule, promRule);
        unmatchedPromRules.delete(promRule);
      }
      return acc;
    },
    { matches: /* @__PURE__ */ new Map(), unmatchedPromRules: new Set(promGroup.rules) }
  );
  return { matches: matchingResult.matches, promOnlyRules: Array.from(matchingResult.unmatchedPromRules) };
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/rulePositionHash.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRulePositionHash: () => (/* binding */ createRulePositionHash)
/* harmony export */ });

function createRulePositionHash(ruleIndex, totalRules) {
  return `${ruleIndex}:${totalRules}`;
}


/***/ })

}]);
//# sourceMappingURL=public_app_features_alerting_unified_rule-list_RuleList_v2_tsx.f62d3152ee140d874045.js.map