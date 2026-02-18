"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["NotificationPoliciesPage"],{

/***/ "./node_modules/comlink/dist/esm/comlink.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEndpoint: () => (/* binding */ createEndpoint),
/* harmony export */   expose: () => (/* binding */ expose),
/* harmony export */   finalizer: () => (/* binding */ finalizer),
/* harmony export */   proxy: () => (/* binding */ proxy),
/* harmony export */   proxyMarker: () => (/* binding */ proxyMarker),
/* harmony export */   releaseProxy: () => (/* binding */ releaseProxy),
/* harmony export */   transfer: () => (/* binding */ transfer),
/* harmony export */   transferHandlers: () => (/* binding */ transferHandlers),
/* harmony export */   windowEndpoint: () => (/* binding */ windowEndpoint),
/* harmony export */   wrap: () => (/* binding */ wrap)
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const proxyMarker = Symbol("Comlink.proxy");
const createEndpoint = Symbol("Comlink.endpoint");
const releaseProxy = Symbol("Comlink.releaseProxy");
const finalizer = Symbol("Comlink.finalizer");
const throwMarker = Symbol("Comlink.thrown");
const isObject = (val) => (typeof val === "object" && val !== null) || typeof val === "function";
/**
 * Internal transfer handle to handle objects marked to proxy.
 */
const proxyTransferHandler = {
    canHandle: (val) => isObject(val) && val[proxyMarker],
    serialize(obj) {
        const { port1, port2 } = new MessageChannel();
        expose(obj, port1);
        return [port2, [port2]];
    },
    deserialize(port) {
        port.start();
        return wrap(port);
    },
};
/**
 * Internal transfer handler to handle thrown exceptions.
 */
const throwTransferHandler = {
    canHandle: (value) => isObject(value) && throwMarker in value,
    serialize({ value }) {
        let serialized;
        if (value instanceof Error) {
            serialized = {
                isError: true,
                value: {
                    message: value.message,
                    name: value.name,
                    stack: value.stack,
                },
            };
        }
        else {
            serialized = { isError: false, value };
        }
        return [serialized, []];
    },
    deserialize(serialized) {
        if (serialized.isError) {
            throw Object.assign(new Error(serialized.value.message), serialized.value);
        }
        throw serialized.value;
    },
};
/**
 * Allows customizing the serialization of certain values.
 */
const transferHandlers = new Map([
    ["proxy", proxyTransferHandler],
    ["throw", throwTransferHandler],
]);
function isAllowedOrigin(allowedOrigins, origin) {
    for (const allowedOrigin of allowedOrigins) {
        if (origin === allowedOrigin || allowedOrigin === "*") {
            return true;
        }
        if (allowedOrigin instanceof RegExp && allowedOrigin.test(origin)) {
            return true;
        }
    }
    return false;
}
function expose(obj, ep = globalThis, allowedOrigins = ["*"]) {
    ep.addEventListener("message", function callback(ev) {
        if (!ev || !ev.data) {
            return;
        }
        if (!isAllowedOrigin(allowedOrigins, ev.origin)) {
            console.warn(`Invalid origin '${ev.origin}' for comlink proxy`);
            return;
        }
        const { id, type, path } = Object.assign({ path: [] }, ev.data);
        const argumentList = (ev.data.argumentList || []).map(fromWireValue);
        let returnValue;
        try {
            const parent = path.slice(0, -1).reduce((obj, prop) => obj[prop], obj);
            const rawValue = path.reduce((obj, prop) => obj[prop], obj);
            switch (type) {
                case "GET" /* MessageType.GET */:
                    {
                        returnValue = rawValue;
                    }
                    break;
                case "SET" /* MessageType.SET */:
                    {
                        parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
                        returnValue = true;
                    }
                    break;
                case "APPLY" /* MessageType.APPLY */:
                    {
                        returnValue = rawValue.apply(parent, argumentList);
                    }
                    break;
                case "CONSTRUCT" /* MessageType.CONSTRUCT */:
                    {
                        const value = new rawValue(...argumentList);
                        returnValue = proxy(value);
                    }
                    break;
                case "ENDPOINT" /* MessageType.ENDPOINT */:
                    {
                        const { port1, port2 } = new MessageChannel();
                        expose(obj, port2);
                        returnValue = transfer(port1, [port1]);
                    }
                    break;
                case "RELEASE" /* MessageType.RELEASE */:
                    {
                        returnValue = undefined;
                    }
                    break;
                default:
                    return;
            }
        }
        catch (value) {
            returnValue = { value, [throwMarker]: 0 };
        }
        Promise.resolve(returnValue)
            .catch((value) => {
            return { value, [throwMarker]: 0 };
        })
            .then((returnValue) => {
            const [wireValue, transferables] = toWireValue(returnValue);
            ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);
            if (type === "RELEASE" /* MessageType.RELEASE */) {
                // detach and deactive after sending release response above.
                ep.removeEventListener("message", callback);
                closeEndPoint(ep);
                if (finalizer in obj && typeof obj[finalizer] === "function") {
                    obj[finalizer]();
                }
            }
        })
            .catch((error) => {
            // Send Serialization Error To Caller
            const [wireValue, transferables] = toWireValue({
                value: new TypeError("Unserializable return value"),
                [throwMarker]: 0,
            });
            ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);
        });
    });
    if (ep.start) {
        ep.start();
    }
}
function isMessagePort(endpoint) {
    return endpoint.constructor.name === "MessagePort";
}
function closeEndPoint(endpoint) {
    if (isMessagePort(endpoint))
        endpoint.close();
}
function wrap(ep, target) {
    const pendingListeners = new Map();
    ep.addEventListener("message", function handleMessage(ev) {
        const { data } = ev;
        if (!data || !data.id) {
            return;
        }
        const resolver = pendingListeners.get(data.id);
        if (!resolver) {
            return;
        }
        try {
            resolver(data);
        }
        finally {
            pendingListeners.delete(data.id);
        }
    });
    return createProxy(ep, pendingListeners, [], target);
}
function throwIfProxyReleased(isReleased) {
    if (isReleased) {
        throw new Error("Proxy has been released and is not useable");
    }
}
function releaseEndpoint(ep) {
    return requestResponseMessage(ep, new Map(), {
        type: "RELEASE" /* MessageType.RELEASE */,
    }).then(() => {
        closeEndPoint(ep);
    });
}
const proxyCounter = new WeakMap();
const proxyFinalizers = "FinalizationRegistry" in globalThis &&
    new FinalizationRegistry((ep) => {
        const newCount = (proxyCounter.get(ep) || 0) - 1;
        proxyCounter.set(ep, newCount);
        if (newCount === 0) {
            releaseEndpoint(ep);
        }
    });
function registerProxy(proxy, ep) {
    const newCount = (proxyCounter.get(ep) || 0) + 1;
    proxyCounter.set(ep, newCount);
    if (proxyFinalizers) {
        proxyFinalizers.register(proxy, ep, proxy);
    }
}
function unregisterProxy(proxy) {
    if (proxyFinalizers) {
        proxyFinalizers.unregister(proxy);
    }
}
function createProxy(ep, pendingListeners, path = [], target = function () { }) {
    let isProxyReleased = false;
    const proxy = new Proxy(target, {
        get(_target, prop) {
            throwIfProxyReleased(isProxyReleased);
            if (prop === releaseProxy) {
                return () => {
                    unregisterProxy(proxy);
                    releaseEndpoint(ep);
                    pendingListeners.clear();
                    isProxyReleased = true;
                };
            }
            if (prop === "then") {
                if (path.length === 0) {
                    return { then: () => proxy };
                }
                const r = requestResponseMessage(ep, pendingListeners, {
                    type: "GET" /* MessageType.GET */,
                    path: path.map((p) => p.toString()),
                }).then(fromWireValue);
                return r.then.bind(r);
            }
            return createProxy(ep, pendingListeners, [...path, prop]);
        },
        set(_target, prop, rawValue) {
            throwIfProxyReleased(isProxyReleased);
            // FIXME: ES6 Proxy Handler `set` methods are supposed to return a
            // boolean. To show good will, we return true asynchronously ¯\_(ツ)_/¯
            const [value, transferables] = toWireValue(rawValue);
            return requestResponseMessage(ep, pendingListeners, {
                type: "SET" /* MessageType.SET */,
                path: [...path, prop].map((p) => p.toString()),
                value,
            }, transferables).then(fromWireValue);
        },
        apply(_target, _thisArg, rawArgumentList) {
            throwIfProxyReleased(isProxyReleased);
            const last = path[path.length - 1];
            if (last === createEndpoint) {
                return requestResponseMessage(ep, pendingListeners, {
                    type: "ENDPOINT" /* MessageType.ENDPOINT */,
                }).then(fromWireValue);
            }
            // We just pretend that `bind()` didn’t happen.
            if (last === "bind") {
                return createProxy(ep, pendingListeners, path.slice(0, -1));
            }
            const [argumentList, transferables] = processArguments(rawArgumentList);
            return requestResponseMessage(ep, pendingListeners, {
                type: "APPLY" /* MessageType.APPLY */,
                path: path.map((p) => p.toString()),
                argumentList,
            }, transferables).then(fromWireValue);
        },
        construct(_target, rawArgumentList) {
            throwIfProxyReleased(isProxyReleased);
            const [argumentList, transferables] = processArguments(rawArgumentList);
            return requestResponseMessage(ep, pendingListeners, {
                type: "CONSTRUCT" /* MessageType.CONSTRUCT */,
                path: path.map((p) => p.toString()),
                argumentList,
            }, transferables).then(fromWireValue);
        },
    });
    registerProxy(proxy, ep);
    return proxy;
}
function myFlat(arr) {
    return Array.prototype.concat.apply([], arr);
}
function processArguments(argumentList) {
    const processed = argumentList.map(toWireValue);
    return [processed.map((v) => v[0]), myFlat(processed.map((v) => v[1]))];
}
const transferCache = new WeakMap();
function transfer(obj, transfers) {
    transferCache.set(obj, transfers);
    return obj;
}
function proxy(obj) {
    return Object.assign(obj, { [proxyMarker]: true });
}
function windowEndpoint(w, context = globalThis, targetOrigin = "*") {
    return {
        postMessage: (msg, transferables) => w.postMessage(msg, targetOrigin, transferables),
        addEventListener: context.addEventListener.bind(context),
        removeEventListener: context.removeEventListener.bind(context),
    };
}
function toWireValue(value) {
    for (const [name, handler] of transferHandlers) {
        if (handler.canHandle(value)) {
            const [serializedValue, transferables] = handler.serialize(value);
            return [
                {
                    type: "HANDLER" /* WireValueType.HANDLER */,
                    name,
                    value: serializedValue,
                },
                transferables,
            ];
        }
    }
    return [
        {
            type: "RAW" /* WireValueType.RAW */,
            value,
        },
        transferCache.get(value) || [],
    ];
}
function fromWireValue(value) {
    switch (value.type) {
        case "HANDLER" /* WireValueType.HANDLER */:
            return transferHandlers.get(value.name).deserialize(value.value);
        case "RAW" /* WireValueType.RAW */:
            return value.value;
    }
}
function requestResponseMessage(ep, pendingListeners, msg, transfers) {
    return new Promise((resolve) => {
        const id = generateUUID();
        pendingListeners.set(id, resolve);
        if (ep.start) {
            ep.start();
        }
        ep.postMessage(Object.assign({ id }, msg), transfers);
    });
}
function generateUUID() {
    return new Array(4)
        .fill(0)
        .map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16))
        .join("-");
}


//# sourceMappingURL=comlink.mjs.map


/***/ }),

/***/ "./packages/grafana-alerting/src/grafana/contactPoints/components/ContactPointSelector/ContactPointSelector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactPointSelector: () => (/* binding */ ContactPointSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Combobox/Combobox.tsx");
/* harmony import */ var _hooks_v0alpha1_useContactPoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-alerting/src/grafana/contactPoints/hooks/v0alpha1/useContactPoints.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-alerting/src/grafana/contactPoints/utils.ts");






const collator = new Intl.Collator("en", { sensitivity: "accent" });
function ContactPointSelector(props) {
  const { currentData: contactPoints, isLoading } = (0,_hooks_v0alpha1_useContactPoints__WEBPACK_IMPORTED_MODULE_3__.useListContactPoints)(
    {},
    { refetchOnFocus: true, refetchOnMountOrArgChange: true }
  );
  const contactPointOptions = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.chain)(contactPoints?.items).toArray().map((contactPoint) => ({
    option: {
      label: contactPoint.spec.title,
      value: contactPoint.metadata.uid ?? contactPoint.spec.title,
      description: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getContactPointDescription)(contactPoint)
    },
    contactPoint
  })).value().sort((a, b) => collator.compare(a.option.label, b.option.label));
  const options = contactPointOptions.map((item) => item.option);
  const handleChange = (selectedOption) => {
    if (selectedOption == null && props.isClearable) {
      props.onChange(null);
      return;
    }
    if (selectedOption) {
      const matchedOption = contactPointOptions.find(({ option }) => option.value === selectedOption.value);
      if (!matchedOption) {
        return;
      }
      props.onChange(matchedOption.contactPoint);
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Combobox, { ...props, loading: isLoading, options, onChange: handleChange });
}



/***/ }),

/***/ "./packages/grafana-alerting/src/grafana/contactPoints/hooks/v0alpha1/useContactPoints.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCreateContactPoint: () => (/* binding */ useCreateContactPoint),
/* harmony export */   useListContactPoints: () => (/* binding */ useListContactPoints)
/* harmony export */ });
/* harmony import */ var _api_notifications_v0alpha1_notifications_api_gen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-alerting/src/grafana/api/notifications/v0alpha1/notifications.api.gen.ts");


function useListContactPoints(queryArgs = {}, queryOptions = {}) {
  return _api_notifications_v0alpha1_notifications_api_gen__WEBPACK_IMPORTED_MODULE_0__.notificationsAPI.useListReceiverQuery(queryArgs, queryOptions);
}
function useCreateContactPoint(options) {
  const [updateFn, result] = _api_notifications_v0alpha1_notifications_api_gen__WEBPACK_IMPORTED_MODULE_0__.notificationsAPI.endpoints.createReceiver.useMutation(options);
  const typedUpdateFn = (args) => {
    const response = updateFn(args);
    return response;
  };
  return [typedUpdateFn, result];
}


/***/ }),

/***/ "./packages/grafana-alerting/src/grafana/contactPoints/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContactPointDescription: () => (/* binding */ getContactPointDescription)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


function getContactPointDescription(contactPoint) {
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(contactPoint.spec.integrations)) {
    return "<empty contact point>";
  }
  const integrationCounts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.countBy)(contactPoint.spec.integrations, (integration) => integration.type);
  const description = Object.entries(integrationCounts).map(([type, count]) => {
    return count > 1 ? `${type} (${count})` : type;
  }).join(", ");
  return description;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/NotificationPoliciesPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabsBar.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/Tab.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabContent.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var app_features_alerting_unified_components_mute_timings_useMuteTimings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/mute-timings/useMuteTimings.tsx");
/* harmony import */ var app_features_alerting_unified_components_notification_policies_NotificationPoliciesList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/NotificationPoliciesList.tsx");
/* harmony import */ var app_features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_GrafanaAlertmanagerWarning__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/GrafanaAlertmanagerWarning.tsx");
/* harmony import */ var _components_mute_timings_MuteTimingsTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/mute-timings/MuteTimingsTable.tsx");
/* harmony import */ var _state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertmanagerContext.tsx");
/* harmony import */ var _withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/withPageErrorBoundary.tsx");















var ActiveTab = /* @__PURE__ */ ((ActiveTab2) => {
  ActiveTab2["NotificationPolicies"] = "notification_policies";
  ActiveTab2["TimeIntervals"] = "time_intervals";
  return ActiveTab2;
})(ActiveTab || {});
const NotificationPoliciesTabs = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const { selectedAlertmanager = "" } = (0,_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_15__.useAlertmanager)();
  const [policiesSupported, canSeePoliciesTab] = (0,app_features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_11__.useAlertmanagerAbility)(app_features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_11__.AlertmanagerAction.ViewNotificationPolicyTree);
  const [timingsSupported, canSeeTimingsTab] = (0,app_features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_11__.useAlertmanagerAbility)(app_features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_11__.AlertmanagerAction.ViewTimeInterval);
  const availableTabs = [
    canSeePoliciesTab && "notification_policies" /* NotificationPolicies */,
    canSeeTimingsTab && "time_intervals" /* TimeIntervals */
  ].filter((tab2) => !!tab2);
  const { data: muteTimings = [] } = (0,app_features_alerting_unified_components_mute_timings_useMuteTimings__WEBPACK_IMPORTED_MODULE_9__.useMuteTimings)({
    alertmanager: selectedAlertmanager,
    skip: !canSeeTimingsTab
  });
  const [queryParams, setQueryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_8__.useQueryParams)();
  const { tab } = getActiveTabFromUrl(queryParams, availableTabs[0]);
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(tab);
  const muteTimingsTabActive = activeTab === "time_intervals" /* TimeIntervals */;
  const policyTreeTabActive = activeTab === "notification_policies" /* NotificationPolicies */;
  const numberOfMuteTimings = muteTimings.length;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_GrafanaAlertmanagerWarning__WEBPACK_IMPORTED_MODULE_13__.GrafanaAlertmanagerWarning, { currentAlertmanager: selectedAlertmanager }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TabsBar, { children: [
      policiesSupported && canSeePoliciesTab && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tab,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.notification-policies-tabs.label-notification-policies", "Notification Policies"),
          active: policyTreeTabActive,
          onChangeTab: () => {
            setActiveTab("notification_policies" /* NotificationPolicies */);
            setQueryParams({ tab: "notification_policies" /* NotificationPolicies */ });
          }
        }
      ),
      timingsSupported && canSeeTimingsTab && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tab,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.notification-policies-tabs.label-time-intervals", "Time intervals"),
          active: muteTimingsTabActive,
          counter: numberOfMuteTimings,
          onChangeTab: () => {
            setActiveTab("time_intervals" /* TimeIntervals */);
            setQueryParams({ tab: "time_intervals" /* TimeIntervals */ });
          }
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TabContent, { className: styles.tabContent, children: [
      policyTreeTabActive && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_alerting_unified_components_notification_policies_NotificationPoliciesList__WEBPACK_IMPORTED_MODULE_10__.NotificationPoliciesList, {}),
      muteTimingsTabActive && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_mute_timings_MuteTimingsTable__WEBPACK_IMPORTED_MODULE_14__.TimeIntervalsTable, {})
    ] })
  ] });
};
const getStyles = (theme) => ({
  tabContent: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: theme.spacing(2)
  })
});
function getActiveTabFromUrl(queryParams, defaultTab) {
  let tab = defaultTab;
  if (queryParams.tab === "notification_policies" /* NotificationPolicies */) {
    tab = "notification_policies" /* NotificationPolicies */;
  }
  if (queryParams.tab === "time_intervals" /* TimeIntervals */) {
    tab = "time_intervals" /* TimeIntervals */;
  }
  return {
    tab
  };
}
function NotificationPoliciesPage() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_12__.AlertmanagerPageWrapper, { navId: "am-routes", accessType: "notification", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NotificationPoliciesTabs, {}) });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_16__.withPageErrorBoundary)(NotificationPoliciesPage));


/***/ }),

/***/ "./public/app/features/alerting/unified/api/grafana.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactPointsStateDtoToModel: () => (/* binding */ contactPointsStateDtoToModel),
/* harmony export */   fetchContactPointsState: () => (/* binding */ fetchContactPointsState),
/* harmony export */   getIntegrationType: () => (/* binding */ getIntegrationType),
/* harmony export */   parseIntegrationName: () => (/* binding */ parseIntegrationName)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");




const parseIntegrationName = (integrationName) => {
  const matches = integrationName.match(/^(\w+)(\[\d+\])?$/);
  if (!matches) {
    return { type: integrationName, index: void 0 };
  }
  return {
    type: matches[1],
    index: matches[2]
  };
};
const contactPointsStateDtoToModel = (receiversStateDto) => {
  const contactPointsState = { receivers: {}, errorCount: 0 };
  receiversStateDto.forEach((cpState) => {
    contactPointsState.receivers[cpState.name] = { active: cpState.active, notifiers: {}, errorCount: 0 };
    const receiverState = contactPointsState.receivers[cpState.name];
    cpState.integrations.forEach((integrationStatusDTO) => {
      const hasError = Boolean(integrationStatusDTO?.lastNotifyAttemptError);
      if (hasError) {
        receiverState.errorCount += 1;
      }
      const integrationType = getIntegrationType(integrationStatusDTO.name);
      if (integrationType) {
        if (!receiverState.notifiers[integrationType]) {
          receiverState.notifiers[integrationType] = [];
        }
        receiverState.notifiers[integrationType].push(integrationStatusDTO);
      }
    });
  });
  const errorsCount = Object.values(contactPointsState.receivers).reduce(
    (prevCount, receiverState) => prevCount + receiverState.errorCount,
    0
  );
  return { ...contactPointsState, errorCount: errorsCount };
};
const getIntegrationType = (integrationName) => parseIntegrationName(integrationName)?.type;
async function fetchContactPointsState(alertManagerSourceName) {
  try {
    const response = await (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.lastValueFrom)(
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
        url: `/api/alertmanager/${(0,_utils_datasource__WEBPACK_IMPORTED_MODULE_2__.getDatasourceAPIUid)(alertManagerSourceName)}/config/api/v1/receivers`,
        showErrorAlert: false,
        showSuccessAlert: false
      })
    );
    return contactPointsStateDtoToModel(response.data);
  } catch (error) {
    return contactPointsStateDtoToModel([]);
  }
}


/***/ }),

/***/ "./public/app/features/alerting/unified/api/receiversApi.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   receiversApi: () => (/* binding */ receiversApi),
/* harmony export */   useGetContactPointsState: () => (/* binding */ useGetContactPointsState),
/* harmony export */   useTestIntegrationMutation: () => (/* binding */ useTestIntegrationMutation)
/* harmony export */ });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _alertingApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/api/alertingApi.ts");
/* harmony import */ var _grafana__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/api/grafana.ts");





const receiversApi = _alertingApi__WEBPACK_IMPORTED_MODULE_2__.alertingApi.injectEndpoints({
  endpoints: (build) => ({
    contactPointsState: build.query({
      queryFn: async ({ amSourceName }) => {
        try {
          const contactPointsState = await (0,_grafana__WEBPACK_IMPORTED_MODULE_3__.fetchContactPointsState)(amSourceName);
          return { data: contactPointsState };
        } catch (error) {
          return { error };
        }
      }
    }),
    testIntegration: build.mutation({
      query: ({ alertManagerSourceName, receivers, alert }) => ({
        method: "POST",
        data: {
          receivers,
          alert
        },
        url: `/api/alertmanager/${(0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.getDatasourceAPIUid)(alertManagerSourceName)}/config/api/v1/receivers/test`,
        showErrorAlert: false,
        showSuccessAlert: false
      }),
      transformResponse: (response) => {
        if (receiversResponseContainsErrors(response)) {
          throw new Error(getReceiverResultError(response));
        }
        return response;
      }
    })
  })
});
const useGetContactPointsState = (alertManagerSourceName) => {
  const contactPointsStateEmpty = { receivers: {}, errorCount: 0 };
  const { currentData: contactPointsState } = receiversApi.useContactPointsStateQuery(
    { amSourceName: alertManagerSourceName ?? "" },
    {
      skip: !alertManagerSourceName,
      pollingInterval: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.CONTACT_POINTS_STATE_INTERVAL_MS
    }
  );
  return contactPointsState ?? contactPointsStateEmpty;
};
const { useTestIntegrationMutation } = receiversApi;
function receiversResponseContainsErrors(result) {
  return result.receivers.some(
    (receiver) => receiver.grafana_managed_receiver_configs.some((config) => config.status === "failed")
  );
}
function getReceiverResultError(receiversResult) {
  return receiversResult.receivers.flatMap(
    (receiver) => receiver.grafana_managed_receiver_configs.filter((config) => config.status === "failed").map((config) => config.error ?? "Unknown error.")
  ).join("; ");
}


/***/ }),

/***/ "./public/app/features/alerting/unified/api/timeIntervalsApi.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeIntervalsApi: () => (/* binding */ timeIntervalsApi)
/* harmony export */ });
/* harmony import */ var app_features_alerting_unified_openapi_timeIntervalsApi_gen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/openapi/timeIntervalsApi.gen.ts");


const timeIntervalsApi = app_features_alerting_unified_openapi_timeIntervalsApi_gen__WEBPACK_IMPORTED_MODULE_0__.generatedTimeIntervalsApi;


/***/ }),

/***/ "./public/app/features/alerting/unified/components/CollapseToggle.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapseToggle: () => (/* binding */ CollapseToggle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");



const CollapseToggle = ({
  isCollapsed,
  onToggle,
  idControlled,
  className,
  text,
  size = "xl",
  ...restOfProps
}) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button,
    {
      type: "button",
      fill: "text",
      variant: "secondary",
      "aria-expanded": !isCollapsed,
      "aria-controls": idControlled,
      className,
      icon: isCollapsed ? "angle-right" : "angle-down",
      onClick: () => onToggle(!isCollapsed),
      ...restOfProps,
      children: text
    }
  );
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/EmptyArea.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyArea: () => (/* binding */ EmptyArea)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");




const EmptyArea = ({ children }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.container, children });
};
const getStyles = (theme) => {
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      borderRadius: theme.shape.radius.lg,
      backgroundColor: theme.colors.background.secondary,
      color: theme.colors.text.secondary,
      padding: theme.spacing(4),
      textAlign: "center"
    })
  };
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/EmptyAreaWithCTA.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyAreaWithCTA: () => (/* binding */ EmptyAreaWithCTA)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _EmptyArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/EmptyArea.tsx");





const EmptyAreaWithCTA = ({
  buttonIcon,
  buttonLabel,
  buttonSize = "lg",
  buttonVariant = "primary",
  onButtonClick,
  text,
  href,
  showButton = true
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const commonProps = {
    className: styles.button,
    icon: buttonIcon,
    size: buttonSize,
    variant: buttonVariant
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_EmptyArea__WEBPACK_IMPORTED_MODULE_4__.EmptyArea, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: styles.text, children: text }),
    showButton && (href ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, { href, type: "button", ...commonProps, children: buttonLabel }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { onClick: onButtonClick, type: "button", ...commonProps, children: buttonLabel }))
  ] }) });
};
const getStyles = (theme) => {
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      backgroundColor: theme.colors.background.secondary,
      color: theme.colors.text.secondary,
      padding: theme.spacing(4),
      textAlign: "center"
    }),
    text: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginBottom: theme.spacing(2)
    }),
    button: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      margin: theme.spacing(2, 0, 1)
    })
  };
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/AlertDetails.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertDetails: () => (/* binding */ AlertDetails)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _AnnotationDetailsField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx");
/* harmony import */ var _Authorize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");













const AlertDetails = ({ alert, alertManagerSourceName }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const isGrafanaSource = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_9__.isGrafanaRulesSource)(alertManagerSourceName);
  const isSeeSourceButtonEnabled = isGrafanaSource ? app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.AlertingRuleRead) : true;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.actionsRow, children: [
      alert.status.state === app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_6__.AlertState.Suppressed && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_12__.Authorize, { actions: [_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_8__.AlertmanagerAction.CreateSilence, _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_8__.AlertmanagerAction.UpdateSilence], children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton,
        {
          href: `${(0,_utils_misc__WEBPACK_IMPORTED_MODULE_10__.makeAMLink)(
            "/alerting/silences",
            alertManagerSourceName
          )}&silenceIds=${alert.status.silencedBy.join(",")}`,
          className: styles.button,
          icon: "bell",
          size: "sm",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.alert-details.manage-silences", children: "Manage silences" })
        }
      ) }),
      alert.status.state === app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_6__.AlertState.Active && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_12__.Authorize, { actions: [_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_8__.AlertmanagerAction.CreateSilence], children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton,
        {
          href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_10__.makeLabelBasedSilenceLink)(alertManagerSourceName, alert.labels),
          className: styles.button,
          icon: "bell-slash",
          size: "sm",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.alert-details.silence", children: "Silence" })
        }
      ) }),
      isSeeSourceButtonEnabled && alert.generatorURL && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, { className: styles.button, href: alert.generatorURL, icon: "chart-line", size: "sm", children: isGrafanaSource ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.alert-details.button-see-rule", "See alert rule") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.alert-details.button-see-source", "See source") })
    ] }),
    Object.entries(alert.annotations).map(([annotationKey, annotationValue]) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AnnotationDetailsField__WEBPACK_IMPORTED_MODULE_11__.AnnotationDetailsField, { annotationKey, value: annotationValue }, annotationKey)),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.receivers, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans,
      {
        i18nKey: "alerting.alert-details.receivers-list",
        values: {
          receivers: alert.receivers.map(({ name }) => name).filter((name) => !!name).join(", ")
        },
        children: [
          "Receivers: ",
          "{{receivers}}"
        ]
      }
    ) })
  ] });
};
const getStyles = (theme) => ({
  button: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    "& + &": {
      marginLeft: theme.spacing(1)
    }
  }),
  actionsRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: `${theme.spacing(2, 0)} !important`,
    borderBottom: `1px solid ${theme.colors.border.medium}`
  }),
  receivers: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(1, 0)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/AlertGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertGroup: () => (/* binding */ AlertGroup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-alerting/src/grafana/rules/components/labels/AlertLabels.tsx");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _MetaText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/MetaText.tsx");
/* harmony import */ var _AlertGroupAlertsTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertGroupAlertsTable.tsx");
/* harmony import */ var _AlertGroupHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertGroupHeader.tsx");












const AlertGroup = ({ alertManagerSourceName, group }) => {
  const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const receiverInGroup = group.receiver.name !== "NONE";
  const contactPoint = group.receiver.name;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.wrapper, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.header, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.group, "data-testid": "alert-group", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _CollapseToggle__WEBPACK_IMPORTED_MODULE_9__.CollapseToggle,
          {
            size: "sm",
            isCollapsed,
            onToggle: () => setIsCollapsed(!isCollapsed),
            "data-testid": "alert-group-collapse-toggle"
          }
        ),
        Object.keys(group.labels).length ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "row", alignItems: "center", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_3__.AlertLabels, { labels: group.labels, size: "sm" }),
          receiverInGroup && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MetaText__WEBPACK_IMPORTED_MODULE_10__.MetaText, { icon: "at", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.alert-group.delivered-to", values: { name: group.receiver.name }, children: [
            "Delivered to",
            " ",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TextLink,
              {
                href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.createContactPointSearchLink)(contactPoint, alertManagerSourceName),
                variant: "bodySmall",
                color: "primary",
                inline: false,
                children: "{{name}}"
              }
            )
          ] }) })
        ] }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.alert-group.no-grouping", children: "No grouping" }) })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertGroupHeader__WEBPACK_IMPORTED_MODULE_12__.AlertGroupHeader, { group })
    ] }),
    !isCollapsed && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertGroupAlertsTable__WEBPACK_IMPORTED_MODULE_11__.AlertGroupAlertsTable, { alertManagerSourceName, alerts: group.alerts })
  ] });
};
const getStyles = (theme) => ({
  wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    "& + &": {
      marginTop: theme.spacing(2)
    }
  }),
  header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: theme.shape.radius.default,
    padding: theme.spacing(1),
    backgroundColor: theme.colors.background.secondary,
    width: "100%"
  }),
  group: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/AlertGroupAlertsTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertGroupAlertsTable: () => (/* binding */ AlertGroupAlertsTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-alerting/src/grafana/rules/components/labels/AlertLabels.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/datetime/durationutil.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _DynamicTableWithGuidelines__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx");
/* harmony import */ var _silences_AmAlertStateTag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx");
/* harmony import */ var _AlertDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertDetails.tsx");











const AlertGroupAlertsTable = ({ alerts, alertManagerSourceName }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  const columns = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => [
      {
        id: "state",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.alert-group-alerts-table.columns.label.notification-state", "Notification state"),
        // eslint-disable-next-line react/display-name
        renderCell: ({ data: alert }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_silences_AmAlertStateTag__WEBPACK_IMPORTED_MODULE_8__.AmAlertStateTag, { state: alert.status.state }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.duration, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans,
            {
              i18nKey: "alerting.alert-group-alerts-table.duration",
              values: {
                time: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.intervalToAbbreviatedDurationString)({
                  start: new Date(alert.startsAt),
                  end: new Date(alert.endsAt)
                })
              },
              children: [
                "for ",
                "{{time}}"
              ]
            }
          ) })
        ] }),
        size: "220px"
      },
      {
        id: "labels",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.alert-group-alerts-table.columns.label.instance-labels", "Instance labels"),
        // eslint-disable-next-line react/display-name
        renderCell: ({ data: { labels } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_3__.AlertLabels, { labels, size: "sm" }),
        size: 1
      }
    ],
    [styles]
  );
  const items = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => alerts.map((alert) => ({
      id: alert.fingerprint,
      data: alert
    })),
    [alerts]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.tableWrapper, "data-testid": "alert-group-table", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _DynamicTableWithGuidelines__WEBPACK_IMPORTED_MODULE_7__.DynamicTableWithGuidelines,
    {
      cols: columns,
      items,
      isExpandable: true,
      renderExpandedContent: ({ data: alert }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertDetails__WEBPACK_IMPORTED_MODULE_9__.AlertDetails, { alert, alertManagerSourceName })
    }
  ) });
};
const getStyles = (theme) => ({
  tableWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(4.5)
    }
  }),
  duration: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginLeft: theme.spacing(1),
    fontSize: theme.typography.bodySmall.fontSize
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/AlertGroupHeader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertGroupHeader: () => (/* binding */ AlertGroupHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _styles_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/styles/notifications.ts");





const AlertGroupHeader = ({ group }) => {
  const textStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_styles_notifications__WEBPACK_IMPORTED_MODULE_3__.getNotificationsTextColors);
  const total = group.alerts.length;
  const countByStatus = group.alerts.reduce(
    (statusObj, alert) => {
      if (statusObj[alert.status.state]) {
        statusObj[alert.status.state] += 1;
      } else {
        statusObj[alert.status.state] = 1;
      }
      return statusObj;
    },
    {}
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    `${total} ${pluralize__WEBPACK_IMPORTED_MODULE_1___default()("alert", total)}: `,
    Object.entries(countByStatus).map(([state, count], index) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        "span",
        {
          className: textStyles[state],
          children: [
            index > 0 && ", ",
            `${count} ${state}`
          ]
        },
        `${JSON.stringify(group.labels)}-notifications-${index}`
      );
    })
  ] });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/alertmanager-entities/MuteTimingsSelector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var app_features_alerting_unified_components_mute_timings_useMuteTimings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/mute-timings/useMuteTimings.tsx");
/* harmony import */ var app_features_alerting_unified_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");






const mapTimeInterval = ({ name, time_intervals }) => ({
  value: name,
  label: name,
  description: time_intervals.map((interval) => (0,app_features_alerting_unified_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.timeIntervalToString)(interval)).join(", AND ")
});
const TimeIntervalSelector = ({
  alertmanager,
  selectProps
}) => {
  const { data } = (0,app_features_alerting_unified_components_mute_timings_useMuteTimings__WEBPACK_IMPORTED_MODULE_3__.useMuteTimings)({ alertmanager, skip: selectProps.disabled });
  const timeIntervalOptions = data?.map((value) => mapTimeInterval(value)) || [];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MultiSelect,
    {
      "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.time-intervals-selector.aria-label-time-intervals", "Time intervals"),
      options: timeIntervalOptions,
      placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.time-intervals-selector.placeholder-select-time-intervals", "Select time intervals..."),
      ...selectProps
    }
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimeIntervalSelector);


/***/ }),

/***/ "./public/app/features/alerting/unified/components/export/GrafanaMuteTimingsExporter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrafanaMuteTimingsExporter: () => (/* binding */ GrafanaMuteTimingsExporter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");
/* harmony import */ var _FileExportPreview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/export/FileExportPreview.tsx");
/* harmony import */ var _GrafanaExportDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/export/GrafanaExportDrawer.tsx");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/export/providers.ts");









const GrafanaMuteTimingsExporterPreview = ({ exportFormat, onClose }) => {
  const { currentData: muteTimingsDefinition = "", isFetching } = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_4__.alertRuleApi.useExportMuteTimingsQuery({
    format: exportFormat
  });
  const downloadFileName = `mute-timings-${(/* @__PURE__ */ new Date()).getTime()}`;
  if (isFetching) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.grafana-mute-timings-exporter-preview.text-loading", "Loading....") });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _FileExportPreview__WEBPACK_IMPORTED_MODULE_5__.FileExportPreview,
    {
      format: exportFormat,
      textDefinition: muteTimingsDefinition,
      downloadFileName,
      onClose
    }
  );
};
const GrafanaMuteTimingExporterPreview = ({
  exportFormat,
  onClose,
  muteTimingName
}) => {
  const { currentData: muteTimingsDefinition = "", isFetching } = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_4__.alertRuleApi.useExportMuteTimingQuery({
    format: exportFormat,
    muteTiming: muteTimingName
  });
  const downloadFileName = `mute-timing-${muteTimingName}-${(/* @__PURE__ */ new Date()).getTime()}`;
  if (isFetching) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.grafana-mute-timing-exporter-preview.text-loading", "Loading....") });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _FileExportPreview__WEBPACK_IMPORTED_MODULE_5__.FileExportPreview,
    {
      format: exportFormat,
      textDefinition: muteTimingsDefinition,
      downloadFileName,
      onClose
    }
  );
};
const GrafanaMuteTimingsExporter = ({ onClose, muteTimingName }) => {
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("yaml");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _GrafanaExportDrawer__WEBPACK_IMPORTED_MODULE_6__.GrafanaExportDrawer,
    {
      activeTab,
      onTabChange: setActiveTab,
      onClose,
      formatProviders: Object.values(_providers__WEBPACK_IMPORTED_MODULE_7__.allGrafanaExportProviders),
      children: muteTimingName ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GrafanaMuteTimingExporterPreview, { exportFormat: activeTab, onClose, muteTimingName }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GrafanaMuteTimingsExporterPreview, { exportFormat: activeTab, onClose })
    }
  );
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/mute-timings/MuteTimingActionsButtons.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MuteTimingActionsButtons: () => (/* binding */ MuteTimingActionsButtons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var app_features_alerting_unified_components_mute_timings_useExportMuteTimingsDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/mute-timings/useExportMuteTimingsDrawer.tsx");
/* harmony import */ var _components_Authorize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var _hooks_useAsync__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAsync.tsx");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_mute_timings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/mute-timings.ts");
/* harmony import */ var _useMuteTimings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/mute-timings/useMuteTimings.tsx");













const MuteTimingActionsButtons = ({ muteTiming, alertManagerSourceName }) => {
  const [deleteMuteTiming, deleteMuteTimingRequestState] = (0,_useMuteTimings__WEBPACK_IMPORTED_MODULE_14__.useDeleteMuteTiming)({
    alertmanager: alertManagerSourceName
  });
  const [showDeleteDrawer, setShowDeleteDrawer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [ExportDrawer, showExportDrawer] = (0,app_features_alerting_unified_components_mute_timings_useExportMuteTimingsDrawer__WEBPACK_IMPORTED_MODULE_7__.useExportMuteTimingsDrawer)();
  const [exportSupported, exportAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_9__.useAlertmanagerAbility)(_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_9__.AlertmanagerAction.ExportTimeIntervals);
  const closeDeleteModal = () => setShowDeleteDrawer(false);
  const isGrafanaDataSource = alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_11__.GRAFANA_RULES_SOURCE_NAME;
  const viewOrEditHref = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_12__.makeAMLink)(`/alerting/routes/mute-timing/edit`, alertManagerSourceName, {
    muteName: muteTiming.id
  });
  const viewOrEditButton = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton,
    {
      href: viewOrEditHref,
      variant: "secondary",
      size: "sm",
      icon: muteTiming.provisioned ? "eye" : "pen",
      disabled: (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_10__.isLoading)(deleteMuteTimingRequestState),
      children: muteTiming.provisioned ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.common.view", children: "View" }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.common.edit", children: "Edit" })
    }
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "row", alignItems: "center", justifyContent: "flex-end", wrap: "wrap", children: [
      !isGrafanaDataSource && (0,_utils_mute_timings__WEBPACK_IMPORTED_MODULE_13__.isDisabled)(muteTiming) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Badge, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.mute-timing-actions-buttons.text-disabled", "Disabled"), color: "orange" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_8__.Authorize, { actions: [_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_9__.AlertmanagerAction.UpdateTimeInterval], children: viewOrEditButton }),
      exportSupported && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton,
        {
          icon: "download-alt",
          variant: "secondary",
          size: "sm",
          "data-testid": "export",
          disabled: !exportAllowed || (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_10__.isLoading)(deleteMuteTimingRequestState),
          onClick: () => showExportDrawer(muteTiming.name),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.common.export", children: "Export" })
        }
      ),
      !muteTiming.provisioned && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_8__.Authorize, { actions: [_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_9__.AlertmanagerAction.DeleteTimeInterval], children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton,
        {
          icon: "trash-alt",
          variant: "secondary",
          size: "sm",
          onClick: () => setShowDeleteDrawer(true),
          disabled: (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_10__.isLoading)(deleteMuteTimingRequestState),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.common.delete", children: "Delete" })
        }
      ) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ConfirmModal,
      {
        isOpen: showDeleteDrawer,
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.mute-timing-actions-buttons.title-delete-mute-timing", "Delete mute timing"),
        body: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "alerting.mute-timing-actions-button.body-delete-mute-timing",
          'Are you sure you would like to delete "{{muteTiming}}"?',
          { muteTiming: muteTiming.name }
        ),
        confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.common.delete", "Delete"),
        onConfirm: async () => {
          await deleteMuteTiming.execute({
            name: muteTiming?.metadata?.name ?? muteTiming.name
          });
          closeDeleteModal();
        },
        onDismiss: closeDeleteModal
      }
    ),
    ExportDrawer
  ] });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/mute-timings/MuteTimingsTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeIntervalsTable: () => (/* binding */ TimeIntervalsTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_alerting_unified_components_mute_timings_MuteTimingActionsButtons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/mute-timings/MuteTimingActionsButtons.tsx");
/* harmony import */ var app_features_alerting_unified_components_mute_timings_useExportMuteTimingsDrawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/mute-timings/useExportMuteTimingsDrawer.tsx");
/* harmony import */ var app_features_alerting_unified_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertmanagerContext.tsx");
/* harmony import */ var app_features_alerting_unified_utils_k8s_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/k8s/constants.ts");
/* harmony import */ var _components_Authorize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var _EmptyAreaWithCTA__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/EmptyAreaWithCTA.tsx");
/* harmony import */ var _Provisioning__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/Provisioning.tsx");
/* harmony import */ var _Spacer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/components/Spacer.tsx");
/* harmony import */ var _useMuteTimings__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/components/mute-timings/useMuteTimings.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/components/mute-timings/util.tsx");



















const TimeIntervalsTable = () => {
  const { selectedAlertmanager: alertManagerSourceName = "", hasConfigurationAPI } = (0,app_features_alerting_unified_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_11__.useAlertmanager)();
  const hideActions = !hasConfigurationAPI;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const [ExportAllDrawer, showExportAllDrawer] = (0,app_features_alerting_unified_components_mute_timings_useExportMuteTimingsDrawer__WEBPACK_IMPORTED_MODULE_10__.useExportMuteTimingsDrawer)();
  const { data, isLoading, error } = (0,_useMuteTimings__WEBPACK_IMPORTED_MODULE_20__.useMuteTimings)({ alertmanager: alertManagerSourceName ?? "" });
  const items = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const muteTimings = data || [];
    return muteTimings.map((mute) => {
      return {
        id: mute.id,
        data: mute
      };
    });
  }, [data]);
  const [_, allowedToCreateMuteTiming] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_14__.useAlertmanagerAbility)(_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_14__.AlertmanagerAction.CreateTimeInterval);
  const [exportMuteTimingsSupported, exportMuteTimingsAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_14__.useAlertmanagerAbility)(
    _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_14__.AlertmanagerAction.ExportTimeIntervals
  );
  const columns = useColumns(alertManagerSourceName, hideActions);
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LoadingPlaceholder,
      {
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.time-intervals-table.text-loading-time-intervals", "Loading time intervals...")
      }
    );
  }
  if (error) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Alert, { severity: "error", title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.time-intervals.error-loading.title", "Error loading time intervals"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.time-intervals.error-loading.description", children: "Could not load time intervals. Please try again later." }) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "row", alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.time-intervals.description", children: "Enter specific time intervals when not to send notifications or freeze notifications for recurring periods of time." }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Spacer__WEBPACK_IMPORTED_MODULE_19__.Spacer, {}),
      !hideActions && items.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_13__.Authorize, { actions: [_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_14__.AlertmanagerAction.CreateTimeInterval], children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LinkButton,
        {
          className: styles.muteTimingsButtons,
          icon: "plus",
          variant: "primary",
          href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_15__.makeAMLink)("alerting/routes/mute-timing/new", alertManagerSourceName),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.time-interval.add-time-interval", children: "Add time interval" })
        }
      ) }),
      exportMuteTimingsSupported && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
          {
            icon: "download-alt",
            className: styles.muteTimingsButtons,
            variant: "secondary",
            disabled: !exportMuteTimingsAllowed,
            onClick: () => showExportAllDrawer(app_features_alerting_unified_components_mute_timings_useExportMuteTimingsDrawer__WEBPACK_IMPORTED_MODULE_10__.ALL_MUTE_TIMINGS),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.common.export-all", children: "Export all" })
          }
        ),
        ExportAllDrawer
      ] })
    ] }),
    items.length > 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_16__.DynamicTable, { items, cols: columns, pagination: { itemsPerPage: 25 } }) : null,
    items.length === 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: !hideActions ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _EmptyAreaWithCTA__WEBPACK_IMPORTED_MODULE_17__.EmptyAreaWithCTA,
      {
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "alerting.time-intervals-table.text-havent-created-time-intervals",
          "You haven't created any time intervals yet"
        ),
        buttonLabel: "Add time interval",
        buttonIcon: "plus",
        buttonSize: "lg",
        href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_15__.makeAMLink)("alerting/routes/mute-timing/new", alertManagerSourceName),
        showButton: allowedToCreateMuteTiming
      }
    ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _EmptyAreaWithCTA__WEBPACK_IMPORTED_MODULE_17__.EmptyAreaWithCTA,
      {
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "alerting.time-intervals-table.text-no-time-intervals-configured",
          "No time intervals configured"
        ),
        buttonLabel: "",
        showButton: false
      }
    ) })
  ] });
};
function useColumns(alertManagerSourceName, hideActions = false) {
  const [[_editSupported, allowedToEdit], [_deleteSupported, allowedToDelete]] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_14__.useAlertmanagerAbilities)([
    _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_14__.AlertmanagerAction.UpdateTimeInterval,
    _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_14__.AlertmanagerAction.DeleteTimeInterval
  ]);
  const showActions = !hideActions && (allowedToEdit || allowedToDelete);
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const columns = [
      {
        id: "name",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.use-columns.columns.label.name", "Name"),
        renderCell: function renderName({ data }) {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
            data.name,
            " ",
            data.provisioned && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Provisioning__WEBPACK_IMPORTED_MODULE_18__.ProvisioningBadge, { tooltip: true, provenance: data.metadata?.annotations?.[app_features_alerting_unified_utils_k8s_constants__WEBPACK_IMPORTED_MODULE_12__.PROVENANCE_ANNOTATION] })
          ] });
        },
        size: 1
      },
      {
        id: "timeRange",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.use-columns.columns.label.time-range", "Time range"),
        renderCell: ({ data }) => {
          return (0,_util__WEBPACK_IMPORTED_MODULE_21__.renderTimeIntervals)(data);
        },
        size: 5
      }
    ];
    if (showActions) {
      columns.push({
        id: "actions",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.use-columns.label.actions", "Actions"),
        alignColumn: "end",
        renderCell: ({ data }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_alerting_unified_components_mute_timings_MuteTimingActionsButtons__WEBPACK_IMPORTED_MODULE_9__.MuteTimingActionsButtons, { muteTiming: data, alertManagerSourceName }),
        size: 2
      });
    }
    return columns;
  }, [showActions, alertManagerSourceName]);
}
const getStyles = (theme) => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexFlow: "column nowrap"
  }),
  muteTimingsButtons: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: theme.spacing(2)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/mute-timings/useExportMuteTimingsDrawer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALL_MUTE_TIMINGS: () => (/* binding */ ALL_MUTE_TIMINGS),
/* harmony export */   useExportMuteTimingsDrawer: () => (/* binding */ useExportMuteTimingsDrawer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useToggle.js");
/* harmony import */ var _export_GrafanaMuteTimingsExporter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/export/GrafanaMuteTimingsExporter.tsx");





const ALL_MUTE_TIMINGS = Symbol("all mute timings");
const useExportMuteTimingsDrawer = () => {
  const [muteTimingName, setMuteTimingName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [isExportDrawerOpen, toggleShowExportDrawer] = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(false);
  const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setMuteTimingName(null);
    toggleShowExportDrawer(false);
  }, [toggleShowExportDrawer]);
  const handleOpen = (muteTimingName2) => {
    setMuteTimingName(muteTimingName2);
    toggleShowExportDrawer(true);
  };
  const drawer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!muteTimingName || !isExportDrawerOpen) {
      return null;
    }
    if (muteTimingName === ALL_MUTE_TIMINGS) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_export_GrafanaMuteTimingsExporter__WEBPACK_IMPORTED_MODULE_3__.GrafanaMuteTimingsExporter, { onClose: handleClose });
    } else {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_export_GrafanaMuteTimingsExporter__WEBPACK_IMPORTED_MODULE_3__.GrafanaMuteTimingsExporter, { muteTimingName, onClose: handleClose });
    }
  }, [isExportDrawerOpen, handleClose, muteTimingName]);
  return [drawer, handleOpen];
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/mute-timings/useMuteTimings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCreateMuteTiming: () => (/* binding */ useCreateMuteTiming),
/* harmony export */   useDeleteMuteTiming: () => (/* binding */ useDeleteMuteTiming),
/* harmony export */   useGetMuteTiming: () => (/* binding */ useGetMuteTiming),
/* harmony export */   useMuteTimings: () => (/* binding */ useMuteTimings),
/* harmony export */   useUpdateMuteTiming: () => (/* binding */ useUpdateMuteTiming),
/* harmony export */   useValidateMuteTiming: () => (/* binding */ useValidateMuteTiming)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_alerting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-alerting/src/grafana/api/util.ts");
/* harmony import */ var app_features_alerting_unified_api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/api/alertmanagerApi.ts");
/* harmony import */ var app_features_alerting_unified_api_timeIntervalsApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/api/timeIntervalsApi.ts");
/* harmony import */ var app_features_alerting_unified_components_mute_timings_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/mute-timings/util.tsx");
/* harmony import */ var app_features_alerting_unified_utils_k8s_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/k8s/constants.ts");
/* harmony import */ var app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/k8s/utils.ts");
/* harmony import */ var _api_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/api/utils.ts");
/* harmony import */ var _hooks_useAsync__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAsync.tsx");
/* harmony import */ var _hooks_useProduceNewAlertmanagerConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useProduceNewAlertmanagerConfig.ts");
/* harmony import */ var _reducers_alertmanager_muteTimings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/reducers/alertmanager/muteTimings.ts");












const { useLazyGetAlertmanagerConfigurationQuery } = app_features_alerting_unified_api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_2__.alertmanagerApi;
const {
  useLazyListNamespacedTimeIntervalQuery,
  useCreateNamespacedTimeIntervalMutation,
  useReplaceNamespacedTimeIntervalMutation,
  useDeleteNamespacedTimeIntervalMutation
} = app_features_alerting_unified_api_timeIntervalsApi__WEBPACK_IMPORTED_MODULE_3__.timeIntervalsApi;
const parseK8sTimeInterval = (item) => {
  const { metadata, spec } = item;
  return {
    ...spec,
    id: spec.name,
    metadata,
    provisioned: (0,app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_6__.isK8sEntityProvisioned)(item)
  };
};
const parseAmTimeInterval = (interval, provenance) => {
  return {
    ...interval,
    id: interval.name,
    provisioned: Boolean(provenance && provenance !== app_features_alerting_unified_utils_k8s_constants__WEBPACK_IMPORTED_MODULE_5__.PROVENANCE_NONE)
  };
};
const useAlertmanagerIntervals = () => useLazyGetAlertmanagerConfigurationQuery({
  selectFromResult: ({ data, ...rest }) => {
    if (!data) {
      return { data, ...rest };
    }
    const { alertmanager_config } = data;
    const muteTimingsProvenances = alertmanager_config.muteTimeProvenances ?? {};
    const intervals = (0,app_features_alerting_unified_components_mute_timings_util__WEBPACK_IMPORTED_MODULE_4__.mergeTimeIntervals)(alertmanager_config);
    const timeIntervals = intervals.map(
      (interval) => parseAmTimeInterval(interval, muteTimingsProvenances[interval.name])
    );
    return {
      data: timeIntervals,
      ...rest
    };
  }
});
const useGrafanaAlertmanagerIntervals = () => useLazyListNamespacedTimeIntervalQuery({
  selectFromResult: ({ data, ...rest }) => {
    return {
      data: data?.items.map((item) => parseK8sTimeInterval(item)),
      ...rest
    };
  }
});
const useMuteTimings = ({ alertmanager, skip }) => {
  const useK8sApi = (0,app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_6__.shouldUseK8sApi)(alertmanager);
  const [getGrafanaTimeIntervals, intervalsResponse] = useGrafanaAlertmanagerIntervals();
  const [getAlertmanagerTimeIntervals, configApiResponse] = useAlertmanagerIntervals();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (skip) {
      return;
    }
    if (useK8sApi) {
      const namespace = (0,_api_utils__WEBPACK_IMPORTED_MODULE_7__.getAPINamespace)();
      getGrafanaTimeIntervals({ namespace });
    } else {
      getAlertmanagerTimeIntervals(alertmanager);
    }
  }, [alertmanager, getAlertmanagerTimeIntervals, getGrafanaTimeIntervals, skip, useK8sApi]);
  return useK8sApi ? intervalsResponse : configApiResponse;
};
const useCreateMuteTiming = ({ alertmanager }) => {
  const useK8sApi = (0,app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_6__.shouldUseK8sApi)(alertmanager);
  const [createGrafanaTimeInterval] = useCreateNamespacedTimeIntervalMutation();
  const [updateConfiguration] = (0,_hooks_useProduceNewAlertmanagerConfig__WEBPACK_IMPORTED_MODULE_9__.useProduceNewAlertmanagerConfiguration)();
  const addToK8sAPI = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_8__.useAsync)(({ interval }) => {
    const namespace = (0,_api_utils__WEBPACK_IMPORTED_MODULE_7__.getAPINamespace)();
    return createGrafanaTimeInterval({
      namespace,
      comGithubGrafanaGrafanaPkgApisAlertingNotificationsV0Alpha1TimeInterval: { metadata: {}, spec: interval }
    }).unwrap();
  });
  const addToAlertmanagerConfiguration = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_8__.useAsync)(({ interval }) => {
    const action = (0,_reducers_alertmanager_muteTimings__WEBPACK_IMPORTED_MODULE_10__.addMuteTimingAction)({ interval });
    return updateConfiguration(action);
  });
  return useK8sApi ? addToK8sAPI : addToAlertmanagerConfiguration;
};
const useGetMuteTiming = ({ alertmanager, name: nameToFind }) => {
  const useK8sApi = (0,app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_6__.shouldUseK8sApi)(alertmanager);
  const [getGrafanaTimeInterval, k8sResponse] = useLazyListNamespacedTimeIntervalQuery({
    selectFromResult: ({ data, ...rest }) => {
      if (!data) {
        return { data, ...rest };
      }
      if (data.items.length === 0) {
        return { ...rest, data: void 0, isError: true };
      }
      return {
        data: parseK8sTimeInterval(data.items[0]),
        ...rest
      };
    }
  });
  const [getAlertmanagerTimeInterval, amConfigApiResponse] = useLazyGetAlertmanagerConfigurationQuery({
    selectFromResult: ({ data, ...rest }) => {
      if (!data) {
        return { data, ...rest };
      }
      const alertmanager_config = data?.alertmanager_config ?? {};
      const timeIntervals = (0,app_features_alerting_unified_components_mute_timings_util__WEBPACK_IMPORTED_MODULE_4__.mergeTimeIntervals)(alertmanager_config);
      const timing = timeIntervals.find(({ name }) => name === nameToFind);
      if (timing) {
        const muteTimingsProvenances = alertmanager_config?.muteTimeProvenances ?? {};
        return {
          data: parseAmTimeInterval(timing, muteTimingsProvenances[timing.name]),
          ...rest
        };
      }
      return { ...rest, data: void 0, isError: true };
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (useK8sApi) {
      const namespace = (0,_api_utils__WEBPACK_IMPORTED_MODULE_7__.getAPINamespace)();
      getGrafanaTimeInterval(
        { namespace, fieldSelector: (0,app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_6__.stringifyFieldSelector)([["metadata.name", (0,_grafana_alerting__WEBPACK_IMPORTED_MODULE_1__.base64UrlEncode)(nameToFind)]]) },
        true
      );
    } else {
      getAlertmanagerTimeInterval(alertmanager, true);
    }
  }, [alertmanager, getAlertmanagerTimeInterval, getGrafanaTimeInterval, nameToFind, useK8sApi]);
  return useK8sApi ? k8sResponse : amConfigApiResponse;
};
const useUpdateMuteTiming = ({ alertmanager }) => {
  const useK8sApi = (0,app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_6__.shouldUseK8sApi)(alertmanager);
  const [replaceGrafanaTimeInterval] = useReplaceNamespacedTimeIntervalMutation();
  const [updateConfiguration] = (0,_hooks_useProduceNewAlertmanagerConfig__WEBPACK_IMPORTED_MODULE_9__.useProduceNewAlertmanagerConfiguration)();
  const updateToK8sAPI = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_8__.useAsync)(
    async ({ interval, originalName }) => {
      const namespace = (0,_api_utils__WEBPACK_IMPORTED_MODULE_7__.getAPINamespace)();
      return replaceGrafanaTimeInterval({
        name: originalName,
        namespace,
        comGithubGrafanaGrafanaPkgApisAlertingNotificationsV0Alpha1TimeInterval: {
          spec: interval,
          metadata: { name: originalName }
        }
      }).unwrap();
    }
  );
  const updateToAlertmanagerConfiguration = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_8__.useAsync)(
    async ({ interval, originalName }) => {
      const action = (0,_reducers_alertmanager_muteTimings__WEBPACK_IMPORTED_MODULE_10__.updateMuteTimingAction)({ interval, originalName });
      return updateConfiguration(action);
    }
  );
  return useK8sApi ? updateToK8sAPI : updateToAlertmanagerConfiguration;
};
const useDeleteMuteTiming = ({ alertmanager }) => {
  const useK8sApi = (0,app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_6__.shouldUseK8sApi)(alertmanager);
  const [updateConfiguration, _updateConfigurationRequestState] = (0,_hooks_useProduceNewAlertmanagerConfig__WEBPACK_IMPORTED_MODULE_9__.useProduceNewAlertmanagerConfiguration)();
  const [deleteGrafanaTimeInterval] = useDeleteNamespacedTimeIntervalMutation();
  const deleteFromAlertmanagerAPI = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_8__.useAsync)(async ({ name }) => {
    const action = (0,_reducers_alertmanager_muteTimings__WEBPACK_IMPORTED_MODULE_10__.deleteMuteTimingAction)({ name });
    return updateConfiguration(action);
  });
  const deleteFromK8sAPI = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_8__.useAsync)(async ({ name }) => {
    const namespace = (0,_api_utils__WEBPACK_IMPORTED_MODULE_7__.getAPINamespace)();
    await deleteGrafanaTimeInterval({
      name,
      namespace,
      ioK8SApimachineryPkgApisMetaV1DeleteOptions: {}
    }).unwrap();
  });
  return useK8sApi ? deleteFromK8sAPI : deleteFromAlertmanagerAPI;
};
const useValidateMuteTiming = ({ alertmanager }) => {
  const useK8sApi = (0,app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_6__.shouldUseK8sApi)(alertmanager);
  const [getIntervals] = useAlertmanagerIntervals();
  if (useK8sApi) {
    return () => void 0;
  }
  return async (value, skipValidation) => {
    if (skipValidation) {
      return;
    }
    return getIntervals(alertmanager).unwrap().then((config) => {
      const intervals = (0,app_features_alerting_unified_components_mute_timings_util__WEBPACK_IMPORTED_MODULE_4__.mergeTimeIntervals)(config.alertmanager_config);
      const duplicatedInterval = Boolean(intervals?.find((interval) => interval.name === value));
      return duplicatedInterval ? `Mute timing already exists with name "${value}"` : void 0;
    });
  };
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/mute-timings/util.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidStartAndEndTime: () => (/* binding */ isValidStartAndEndTime),
/* harmony export */   isvalidTimeFormat: () => (/* binding */ isvalidTimeFormat),
/* harmony export */   mergeTimeIntervals: () => (/* binding */ mergeTimeIntervals),
/* harmony export */   renderTimeIntervals: () => (/* binding */ renderTimeIntervals)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");






const TIME_RANGE_REGEX = /^((([01][0-9])|(2[0-3])):[0-5][0-9])$|(^24:00$)/;
const isvalidTimeFormat = (timeString) => {
  return timeString ? TIME_RANGE_REGEX.test(timeString) : true;
};
const mergeTimeIntervals = (alertManagerConfig) => {
  return [...alertManagerConfig.mute_time_intervals ?? [], ...alertManagerConfig.time_intervals ?? []];
};
const isValidStartAndEndTime = (startTime, endTime) => {
  if (!startTime && !endTime) {
    return true;
  }
  if (!startTime && endTime || startTime && !endTime) {
    return false;
  }
  const timeUnit = "HH:mm";
  const startDate = moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf("day").add(startTime, timeUnit);
  const endDate = moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf("day").add(endTime, timeUnit);
  if (startTime && endTime && startDate.isBefore(endDate)) {
    return true;
  }
  if (startTime && endTime && endDate.isAfter(startDate)) {
    return true;
  }
  return false;
};
function renderTimeIntervals(muteTiming) {
  const timeIntervals = muteTiming.time_intervals;
  const intervals = timeIntervals.map((interval, index) => {
    const { times, weekdays, days_of_month, months, years, location } = interval;
    const timeString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.getTimeString)(times, location);
    const weekdayString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.getWeekdayString)(weekdays);
    const daysString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.getDaysOfMonthString)(days_of_month);
    const monthsString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.getMonthsString)(months);
    const yearsString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.getYearsString)(years);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
      `${timeString} ${weekdayString}`,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
      [daysString, monthsString, yearsString].join(" | "),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})
    ] }) }, JSON.stringify(interval) + index);
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { direction: "column", gap: 1, children: intervals });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/notification-policies/AlertGroupsSummary.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertGroupsSummary: () => (/* binding */ AlertGroupsSummary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");






const AlertGroupsSummary = ({ active = 0, suppressed = 0, unprocessed = 0 }) => {
  const statsComponents = [];
  const total = active + suppressed + unprocessed;
  if (active) {
    statsComponents.push(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Badge,
        {
          color: "red",
          text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.alert-groups-summary.text-firing", "{{count}} firing", { count: active })
        },
        "firing"
      )
    );
  }
  if (suppressed) {
    statsComponents.push(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Badge,
        {
          color: "blue",
          text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.alert-groups-summary.text-suppressed", "{{count}} suppressed", { count: suppressed })
        },
        "suppressed"
      )
    );
  }
  if (unprocessed) {
    statsComponents.push(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Badge,
        {
          color: "orange",
          text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.alert-groups-summary.text-unprocessed", "{{count}} unprocessed", { count: unprocessed })
        },
        "unprocessed"
      )
    );
  }
  if (statsComponents.length > 1) {
    statsComponents.unshift(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, { children: [
        total,
        " ",
        pluralize__WEBPACK_IMPORTED_MODULE_1___default()("instance", total)
      ] }, "total")
    );
  }
  const hasStats = Boolean(statsComponents.length);
  return hasStats ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { gap: 0.5, children: statsComponents }) : null;
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/notification-policies/ContactPointSelector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExternalAlertmanagerContactPointSelector: () => (/* binding */ ExternalAlertmanagerContactPointSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var app_features_alerting_unified_components_contact_points_ContactPoint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/ContactPoint.tsx");
/* harmony import */ var app_features_alerting_unified_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertmanagerContext.tsx");
/* harmony import */ var _contact_points_useContactPoints__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/useContactPoints.ts");








const MAX_CONTACT_POINTS_RENDERED = 500;
const ExternalAlertmanagerContactPointSelector = ({
  selectProps,
  selectedContactPointName,
  onError = () => {
  }
}) => {
  const { selectedAlertmanager } = (0,app_features_alerting_unified_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_7__.useAlertmanager)();
  const { contactPoints, isLoading, error } = (0,_contact_points_useContactPoints__WEBPACK_IMPORTED_MODULE_8__.useContactPointsWithStatus)({
    alertmanager: selectedAlertmanager
  });
  const options = contactPoints.map((contactPoint) => {
    return {
      label: contactPoint.name,
      value: contactPoint,
      component: () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "bodySmall", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_alerting_unified_components_contact_points_ContactPoint__WEBPACK_IMPORTED_MODULE_6__.ContactPointReceiverSummary, { receivers: contactPoint.grafana_managed_receiver_configs, limit: 2 }) })
    };
  });
  const matchedContactPoint = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return options.find((option) => option.value?.name === selectedContactPointName) || null;
  }, [options, selectedContactPointName]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!isLoading && selectedContactPointName && !matchedContactPoint) {
      onError(new Error(`Contact point "${selectedContactPointName}" could not be found`));
    }
  }, [isLoading, matchedContactPoint, onError, selectedContactPointName]);
  if (error) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "alerting.contact-point-selector.title-failed-to-fetch-contact-points",
          "Failed to fetch contact points"
        ),
        severity: "error"
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Select,
    {
      virtualized: options.length > MAX_CONTACT_POINTS_RENDERED,
      options,
      value: matchedContactPoint,
      ...selectProps,
      isLoading,
      disabled: isLoading
    }
  );
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/notification-policies/EditDefaultPolicyForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AmRootRouteForm: () => (/* binding */ AmRootRouteForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-alerting/src/grafana/contactPoints/components/ContactPointSelector/ContactPointSelector.tsx");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Collapse/Collapse.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Link/Link.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_alerting_unified_components_notification_policies_ContactPointSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/ContactPointSelector.tsx");
/* harmony import */ var app_features_alerting_unified_components_notification_policies_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/utils.ts");
/* harmony import */ var _state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertmanagerContext.tsx");
/* harmony import */ var _utils_amroutes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _PromDurationInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/PromDurationInput.tsx");
/* harmony import */ var _formStyles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/formStyles.ts");
/* harmony import */ var _timingOptions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/timingOptions.ts");















const AmRootRouteForm = ({ actionButtons, alertManagerSourceName, onSubmit, route }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(_formStyles__WEBPACK_IMPORTED_MODULE_16__.getFormStyles);
  const [isTimingOptionsExpanded, setIsTimingOptionsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const { isGrafanaAlertmanager } = (0,_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_12__.useAlertmanager)();
  const [groupByOptions, setGroupByOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_13__.stringsToSelectableValues)(route.group_by));
  const defaultValues = (0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_13__.amRouteToFormAmRoute)(route);
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    setValue,
    getValues
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    defaultValues: {
      ...defaultValues,
      overrideTimings: true,
      overrideGrouping: true
    }
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit(onSubmit), children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.am-root-route-form.label-default-contact-point", "Default contact point"),
        invalid: Boolean(errors.receiver) ? true : void 0,
        error: errors.receiver?.message,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, "data-testid": "am-receiver-select", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
            {
              render: ({ field: { onChange, ref, value, ...field } }) => isGrafanaAlertmanager ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_3__.ContactPointSelector,
                {
                  onChange: (contactPoint) => {
                    (0,app_features_alerting_unified_components_notification_policies_utils__WEBPACK_IMPORTED_MODULE_11__.handleContactPointSelect)(contactPoint?.spec.title, onChange);
                  },
                  isClearable: false,
                  value,
                  placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                    "alerting.notification-policies-filter.placeholder-search-by-contact-point",
                    "Choose a contact point"
                  )
                }
              ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                app_features_alerting_unified_components_notification_policies_ContactPointSelector__WEBPACK_IMPORTED_MODULE_10__.ExternalAlertmanagerContactPointSelector,
                {
                  selectProps: {
                    ...field,
                    onChange: (changeValue) => (0,app_features_alerting_unified_components_notification_policies_utils__WEBPACK_IMPORTED_MODULE_11__.handleContactPointSelect)(changeValue.value?.name, onChange)
                  },
                  selectedContactPointName: value
                }
              ),
              control,
              name: "receiver",
              rules: {
                required: { value: true, message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.am-root-route-form.message.required", "Required.") }
              }
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.am-root-route-form.or", children: "or" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Link,
            {
              className: styles.linkText,
              href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_14__.makeAMLink)("/alerting/notifications/receivers/new", alertManagerSourceName),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.am-root-route-form.create-a-contact-point", children: "Create a contact point" })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.am-root-route-form.am-group-select-label-group-by", "Group by"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "alerting.am-root-route-form.am-group-select-description-group-by",
          "Combine multiple alerts into a single notification by grouping them by the same label values."
        ),
        "data-testid": "am-group-select",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
          {
            render: ({ field: { onChange, ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.MultiSelect,
              {
                "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.am-root-route-form.aria-label-group-by", "Group by"),
                ...field,
                allowCustomValue: true,
                className: styles.input,
                onCreateOption: (opt) => {
                  setGroupByOptions((opts) => [...opts, (0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_13__.stringToSelectableValue)(opt)]);
                  setValue("groupBy", [...field.value || [], opt]);
                },
                onChange: (value) => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_13__.mapMultiSelectValueToStrings)(value)),
                options: [..._utils_amroutes__WEBPACK_IMPORTED_MODULE_13__.commonGroupByOptions, ...groupByOptions]
              }
            ),
            control,
            name: "groupBy"
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Collapse,
      {
        className: styles.collapse,
        isOpen: isTimingOptionsExpanded,
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.am-root-route-form.label-timing-options", "Timing options"),
        onToggle: setIsTimingOptionsExpanded,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.timingFormContainer, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.am-root-route-form.am-group-wait-label-group-wait", "Group wait"),
              description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                "alerting.am-root-route-form.am-group-description-label",
                "The waiting time before sending the first notification for a new group of alerts. Default 30 seconds."
              ),
              invalid: !!errors.groupWaitValue,
              error: errors.groupWaitValue?.message,
              "data-testid": "am-group-wait",
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _PromDurationInput__WEBPACK_IMPORTED_MODULE_15__.PromDurationInput,
                {
                  ...register("groupWaitValue", { validate: _utils_amroutes__WEBPACK_IMPORTED_MODULE_13__.promDurationValidator }),
                  placeholder: _timingOptions__WEBPACK_IMPORTED_MODULE_17__.TIMING_OPTIONS_DEFAULTS.group_wait,
                  className: styles.promDurationInput,
                  "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.am-root-route-form.aria-label-group-wait", "Group wait")
                }
              )
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.am-root-route-form.am-group-interval-label-group-interval", "Group interval"),
              description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                "alerting.am-root-route-form.am-group-interval-description",
                "The wait time before sending a notification about changes in the alert group after the first notification has been sent. Default is 5 minutes."
              ),
              invalid: !!errors.groupIntervalValue,
              error: errors.groupIntervalValue?.message,
              "data-testid": "am-group-interval",
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _PromDurationInput__WEBPACK_IMPORTED_MODULE_15__.PromDurationInput,
                {
                  ...register("groupIntervalValue", { validate: _utils_amroutes__WEBPACK_IMPORTED_MODULE_13__.promDurationValidator }),
                  placeholder: _timingOptions__WEBPACK_IMPORTED_MODULE_17__.TIMING_OPTIONS_DEFAULTS.group_interval,
                  className: styles.promDurationInput,
                  "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.am-root-route-form.aria-label-group-interval", "Group interval")
                }
              )
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.am-root-route-form.am-repeat-interval-label-repeat-interval", "Repeat interval"),
              description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                "alerting.am-root-route-form.am-repeat-interval-description",
                "The wait time before resending a notification that has already been sent successfully. Default is 4 hours. Should be a multiple of Group interval."
              ),
              invalid: !!errors.repeatIntervalValue,
              error: errors.repeatIntervalValue?.message,
              "data-testid": "am-repeat-interval",
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _PromDurationInput__WEBPACK_IMPORTED_MODULE_15__.PromDurationInput,
                {
                  ...register("repeatIntervalValue", {
                    validate: (value) => {
                      const groupInterval = getValues("groupIntervalValue");
                      return (0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_13__.repeatIntervalValidator)(value, groupInterval);
                    }
                  }),
                  placeholder: _timingOptions__WEBPACK_IMPORTED_MODULE_17__.TIMING_OPTIONS_DEFAULTS.repeat_interval,
                  className: styles.promDurationInput,
                  "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.am-root-route-form.aria-label-repeat-interval", "Repeat interval")
                }
              )
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.container, children: actionButtons })
  ] });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/notification-policies/EditNotificationPolicyForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AmRoutesExpandedForm: () => (/* binding */ AmRoutesExpandedForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-alerting/src/grafana/contactPoints/components/ContactPointSelector/ContactPointSelector.tsx");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldValidationMessage.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_alerting_unified_components_alertmanager_entities_MuteTimingsSelector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/alertmanager-entities/MuteTimingsSelector.tsx");
/* harmony import */ var app_features_alerting_unified_components_notification_policies_ContactPointSelector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/ContactPointSelector.tsx");
/* harmony import */ var app_features_alerting_unified_components_notification_policies_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/utils.ts");
/* harmony import */ var app_features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertmanagerContext.tsx");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_amroutes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");
/* harmony import */ var _PromDurationInput__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/PromDurationInput.tsx");
/* harmony import */ var _formStyles__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/formStyles.ts");
/* harmony import */ var _routeTimingsFields__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/routeTimingsFields.ts");



















const AmRoutesExpandedForm = ({ actionButtons, route, onSubmit, defaults }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.useStyles2)(getStyles);
  const formStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.useStyles2)(_formStyles__WEBPACK_IMPORTED_MODULE_25__.getFormStyles);
  const { selectedAlertmanager, isGrafanaAlertmanager } = (0,_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_21__.useAlertmanager)();
  const [, canSeeMuteTimings] = (0,app_features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_19__.useAlertmanagerAbility)(app_features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_19__.AlertmanagerAction.ViewTimeInterval);
  const [groupByOptions, setGroupByOptions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_23__.stringsToSelectableValues)(route?.group_by));
  const emptyMatcher = [{ name: "", operator: app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_20__.MatcherOperator.equal, value: "" }];
  const formAmRoute = {
    ...(0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_23__.amRouteToFormAmRoute)(route),
    ...defaults
  };
  const defaultValues = {
    ...formAmRoute,
    // if we're adding a new route, show at least one empty matcher
    object_matchers: route ? formAmRoute.object_matchers : emptyMatcher
  };
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    setValue,
    watch,
    getValues
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    defaultValues
  });
  const { fields, append, remove } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFieldArray)({
    control,
    name: "object_matchers"
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit(onSubmit), children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "hidden", ...register("id") }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", alignItems: "flex-start", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.am-routes-expanded-form.matching-labels", children: "Matching labels" }) }),
      fields.length === 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Badge,
        {
          color: "orange",
          className: styles.noMatchersWarning,
          icon: "exclamation-triangle",
          text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
            "alerting.am-routes-expanded-form.badge-no-matchers",
            "If no matchers are specified, this notification policy will handle all alert instances."
          )
        }
      ),
      fields.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.matchersContainer, children: fields.map((field, index) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "row", alignItems: "center", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.am-routes-expanded-form.label-label", "Label"),
              invalid: !!errors.object_matchers?.[index]?.name,
              error: errors.object_matchers?.[index]?.name?.message,
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Input,
                {
                  ...register(`object_matchers.${index}.name`, { required: "Field is required" }),
                  defaultValue: field.name,
                  placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.am-routes-expanded-form.placeholder-label", "label"),
                  autoFocus: true
                }
              )
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.am-routes-expanded-form.label-operator", "Operator"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
            {
              render: ({ field: { onChange, ref, ...field2 } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Select,
                {
                  ...field2,
                  className: styles.matchersOperator,
                  onChange: (value) => onChange(value?.value),
                  options: _utils_alertmanager__WEBPACK_IMPORTED_MODULE_22__.matcherFieldOptions,
                  "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.am-routes-expanded-form.aria-label-operator", "Operator")
                }
              ),
              defaultValue: field.operator,
              control,
              name: `object_matchers.${index}.operator`,
              rules: {
                required: {
                  value: true,
                  message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.am-routes-expanded-form.message.required", "Required.")
                }
              }
            }
          ) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.am-routes-expanded-form.label-value", "Value"),
              invalid: !!errors.object_matchers?.[index]?.value,
              error: errors.object_matchers?.[index]?.value?.message,
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Input,
                {
                  ...register(`object_matchers.${index}.value`),
                  defaultValue: field.value,
                  placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.am-routes-expanded-form.placeholder-value", "value")
                }
              )
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.IconButton,
            {
              tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.am-routes-expanded-form.tooltip-remove-matcher", "Remove matcher"),
              name: "trash-alt",
              onClick: () => remove(index),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.am-routes-expanded-form.remove", children: "Remove" })
            }
          )
        ] }, field.id);
      }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
        {
          className: styles.addMatcherBtn,
          icon: "plus",
          onClick: () => append(_utils_amroutes__WEBPACK_IMPORTED_MODULE_23__.emptyArrayFieldMatcher),
          variant: "secondary",
          type: "button",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.am-routes-expanded-form.add-matcher", children: "Add matcher" })
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.am-routes-expanded-form.label-contact-point", "Contact point"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
      {
        render: ({ field: { onChange, ref, value, ...field } }) => isGrafanaAlertmanager ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_4__.ContactPointSelector,
          {
            onChange: (contactPoint) => {
              (0,app_features_alerting_unified_components_notification_policies_utils__WEBPACK_IMPORTED_MODULE_18__.handleContactPointSelect)(contactPoint?.spec.title, onChange);
            },
            isClearable: true,
            value,
            placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
              "alerting.notification-policies-filter.placeholder-search-by-contact-point",
              "Choose a contact point"
            )
          }
        ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          app_features_alerting_unified_components_notification_policies_ContactPointSelector__WEBPACK_IMPORTED_MODULE_17__.ExternalAlertmanagerContactPointSelector,
          {
            selectProps: {
              ...field,
              className: formStyles.input,
              onChange: (value2) => (0,app_features_alerting_unified_components_notification_policies_utils__WEBPACK_IMPORTED_MODULE_18__.handleContactPointSelect)(value2.value?.name, onChange),
              isClearable: true
            },
            selectedContactPointName: value
          }
        ),
        control,
        name: "receiver"
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "alerting.am-routes-expanded-form.label-continue-matching-subsequent-sibling-nodes",
          "Continue matching subsequent sibling nodes"
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Switch, { id: "continue-toggle", ...register("continue") })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.am-routes-expanded-form.label-override-grouping", "Override grouping"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Switch, { id: "override-grouping-toggle", ...register("overrideGrouping") }) }),
    watch().overrideGrouping && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.am-routes-expanded-form.label-group-by", "Group by"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "alerting.am-routes-expanded-form.description-group-by",
          "Combine multiple alerts into a single notification by grouping them by the same label values. If empty, it is inherited from the parent policy."
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
          {
            rules: {
              validate: (value) => {
                if (!value || value.length === 0) {
                  return "At least one group by option is required.";
                }
                return true;
              }
            },
            render: ({ field: { onChange, ref, ...field }, fieldState: { error } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.MultiSelect,
                {
                  "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.am-routes-expanded-form.aria-label-group-by", "Group by"),
                  ...field,
                  invalid: Boolean(error),
                  allowCustomValue: true,
                  className: formStyles.input,
                  onCreateOption: (opt) => {
                    setGroupByOptions((opts) => [...opts, (0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_23__.stringToSelectableValue)(opt)]);
                    setValue("groupBy", [...field.value || [], opt]);
                  },
                  onChange: (value) => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_23__.mapMultiSelectValueToStrings)(value)),
                  options: [..._utils_amroutes__WEBPACK_IMPORTED_MODULE_23__.commonGroupByOptions, ...groupByOptions]
                }
              ),
              error && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.FieldValidationMessage, { children: error.message })
            ] }),
            control,
            name: "groupBy"
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.am-routes-expanded-form.label-override-general-timings", "Override general timings"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Switch, { id: "override-timings-toggle", ...register("overrideTimings") }) }),
    watch().overrideTimings && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field,
        {
          label: _routeTimingsFields__WEBPACK_IMPORTED_MODULE_26__.routeTimingsFields.groupWait.label,
          description: _routeTimingsFields__WEBPACK_IMPORTED_MODULE_26__.routeTimingsFields.groupWait.description,
          invalid: !!errors.groupWaitValue,
          error: errors.groupWaitValue?.message,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _PromDurationInput__WEBPACK_IMPORTED_MODULE_24__.PromDurationInput,
            {
              ...register("groupWaitValue", { validate: _utils_amroutes__WEBPACK_IMPORTED_MODULE_23__.promDurationValidator }),
              "aria-label": _routeTimingsFields__WEBPACK_IMPORTED_MODULE_26__.routeTimingsFields.groupWait.ariaLabel,
              className: formStyles.promDurationInput
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field,
        {
          label: _routeTimingsFields__WEBPACK_IMPORTED_MODULE_26__.routeTimingsFields.groupInterval.label,
          description: _routeTimingsFields__WEBPACK_IMPORTED_MODULE_26__.routeTimingsFields.groupInterval.description,
          invalid: !!errors.groupIntervalValue,
          error: errors.groupIntervalValue?.message,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _PromDurationInput__WEBPACK_IMPORTED_MODULE_24__.PromDurationInput,
            {
              ...register("groupIntervalValue", { validate: _utils_amroutes__WEBPACK_IMPORTED_MODULE_23__.promDurationValidator }),
              "aria-label": _routeTimingsFields__WEBPACK_IMPORTED_MODULE_26__.routeTimingsFields.groupInterval.ariaLabel,
              className: formStyles.promDurationInput
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field,
        {
          label: _routeTimingsFields__WEBPACK_IMPORTED_MODULE_26__.routeTimingsFields.repeatInterval.label,
          description: _routeTimingsFields__WEBPACK_IMPORTED_MODULE_26__.routeTimingsFields.repeatInterval.description,
          invalid: !!errors.repeatIntervalValue,
          error: errors.repeatIntervalValue?.message,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _PromDurationInput__WEBPACK_IMPORTED_MODULE_24__.PromDurationInput,
            {
              ...register("repeatIntervalValue", {
                validate: (value = "") => {
                  const groupInterval = getValues("groupIntervalValue");
                  return (0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_23__.repeatIntervalValidator)(value, groupInterval);
                }
              }),
              "aria-label": _routeTimingsFields__WEBPACK_IMPORTED_MODULE_26__.routeTimingsFields.repeatInterval.ariaLabel,
              className: formStyles.promDurationInput
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.am-routes-expanded-form.am-mute-timing-select-label-mute-timings", "Mute timings"),
        "data-testid": "am-mute-timing-select",
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "alerting.am-routes-expanded-form.am-mute-timing-select-description-add-mute-timing-to-policy",
          "Add mute timing to policy"
        ),
        invalid: !!errors.muteTimeIntervals,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
          {
            render: ({ field: { onChange, ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              app_features_alerting_unified_components_alertmanager_entities_MuteTimingsSelector__WEBPACK_IMPORTED_MODULE_16__["default"],
              {
                alertmanager: selectedAlertmanager,
                selectProps: {
                  ...field,
                  disabled: !canSeeMuteTimings,
                  onChange: (value) => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_23__.mapMultiSelectValueToStrings)(value))
                }
              }
            ),
            control,
            name: "muteTimeIntervals"
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.am-routes-expanded-form.am-active-timing-select-label-active-timings", "Active timings"),
        "data-testid": "am-active-timing-select",
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "alerting.am-routes-expanded-form.am-mute-timing-select-description-add-active-timing-to-policy",
          "Add active timing to policy"
        ),
        invalid: !!errors.activeTimeIntervals,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
          {
            render: ({ field: { onChange, ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              app_features_alerting_unified_components_alertmanager_entities_MuteTimingsSelector__WEBPACK_IMPORTED_MODULE_16__["default"],
              {
                alertmanager: selectedAlertmanager,
                selectProps: {
                  ...field,
                  disabled: !canSeeMuteTimings,
                  onChange: (value) => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_23__.mapMultiSelectValueToStrings)(value))
                }
              }
            ),
            control,
            name: "activeTimeIntervals"
          }
        )
      }
    ),
    actionButtons
  ] });
};
const getStyles = (theme) => {
  const commonSpacing = theme.spacing(3.5);
  return {
    addMatcherBtn: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginBottom: commonSpacing
    }),
    matchersContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      backgroundColor: theme.colors.background.secondary,
      padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
      paddingBottom: 0,
      width: "fit-content"
    }),
    matchersOperator: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      minWidth: "120px"
    }),
    noMatchersWarning: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
      marginBottom: theme.spacing(1)
    })
  };
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/notification-policies/Filters.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationPoliciesFilter: () => (/* binding */ NotificationPoliciesFilter),
/* harmony export */   findRoutesByMatchers: () => (/* binding */ findRoutesByMatchers),
/* harmony export */   findRoutesMatchingPredicate: () => (/* binding */ findRoutesMatchingPredicate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-alerting/src/grafana/contactPoints/components/ContactPointSelector/ContactPointSelector.tsx");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var _hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useURLSearchParams.ts");
/* harmony import */ var _state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertmanagerContext.tsx");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_matchers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/utils/matchers.ts");
/* harmony import */ var _ContactPointSelector__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/ContactPointSelector.tsx");














const NotificationPoliciesFilter = ({
  onChangeReceiver,
  onChangeMatchers,
  matchingCount
}) => {
  const [contactPointsSupported, canSeeContactPoints] = (0,app_features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_15__.useAlertmanagerAbility)(app_features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_15__.AlertmanagerAction.ViewContactPoint);
  const { isGrafanaAlertmanager } = (0,_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_17__.useAlertmanager)();
  const [searchParams, setSearchParams] = (0,_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_16__.useURLSearchParams)();
  const searchInputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const { queryString, contactPoint } = getNotificationPoliciesFilters(searchParams);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.useStyles2)(getStyles);
  const handleChangeLabels = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_2__.debounce)(onChangeMatchers, 500), [onChangeMatchers]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    onChangeReceiver(contactPoint);
  }, [contactPoint, onChangeReceiver]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const matchers = (0,_utils_matchers__WEBPACK_IMPORTED_MODULE_19__.parsePromQLStyleMatcherLooseSafe)(queryString ?? "").map(_utils_alertmanager__WEBPACK_IMPORTED_MODULE_18__.matcherToObjectMatcher);
    handleChangeLabels()(matchers);
  }, [handleChangeLabels, queryString]);
  const clearFilters = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    if (searchInputRef.current) {
      searchInputRef.current.value = "";
    }
    setSearchParams({ contactPoint: "", queryString: void 0 });
  }, [setSearchParams]);
  const hasFilters = queryString || contactPoint;
  let inputValid = Boolean(queryString && queryString.length > 3);
  try {
    if (!queryString) {
      inputValid = true;
    } else {
      (0,_utils_matchers__WEBPACK_IMPORTED_MODULE_19__.parsePromQLStyleMatcherLoose)(queryString);
    }
  } catch (err) {
    inputValid = false;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "row", alignItems: "flex-end", gap: 1, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Field,
      {
        className: styles.noBottom,
        label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Label, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { gap: 0.5, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.common.search-by-matchers", children: "Search by matchers" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tooltip,
            {
              content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.policies.filter-description", children: [
                "Filter notification policies by using a comma separated list of matchers, e.g.:",
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: "severity=critical, region=EMEA" })
              ] }),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { name: "info-circle", size: "sm" })
            }
          )
        ] }) }),
        invalid: !inputValid,
        error: !inputValid ? "Query must use valid matcher syntax" : null,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Input,
          {
            ref: searchInputRef,
            "data-testid": "search-query-input",
            placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.notification-policies-filter.search-query-input-placeholder-search", "Search"),
            width: 46,
            prefix: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { name: "search" }),
            onChange: (event) => {
              setSearchParams({ queryString: event.currentTarget.value });
            },
            defaultValue: queryString
          }
        )
      }
    ),
    contactPointsSupported && canSeeContactPoints && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.notification-policies-filter.label-search-by-contact-point", "Search by contact point"),
        style: { marginBottom: 0 },
        children: isGrafanaAlertmanager ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_4__.ContactPointSelector,
          {
            placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
              "alerting.notification-policies-filter.placeholder-search-by-contact-point",
              "Choose a contact point"
            ),
            id: "receiver",
            onChange: (contactPoint2) => {
              if (!contactPoint2) {
                setSearchParams({ contactPoint: void 0 });
              } else {
                setSearchParams({ contactPoint: contactPoint2.spec.title });
              }
            },
            width: 28,
            isClearable: true,
            value: searchParams.get("contactPoint") ?? void 0
          }
        ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _ContactPointSelector__WEBPACK_IMPORTED_MODULE_20__.ExternalAlertmanagerContactPointSelector,
          {
            selectProps: {
              id: "receiver",
              "aria-label": "Search by contact point",
              onChange: (option) => {
                setSearchParams({ contactPoint: option?.value?.name });
              },
              width: 28,
              isClearable: true,
              placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
                "alerting.notification-policies-filter.placeholder-search-by-contact-point",
                "Choose a contact point"
              )
            },
            selectedContactPointName: searchParams.get("contactPoint") ?? void 0
          }
        )
      }
    ),
    hasFilters && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button, { variant: "secondary", icon: "times", onClick: clearFilters, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.common.clear-filters", children: "Clear filters" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Text, { variant: "bodySmall", color: "secondary", children: [
        matchingCount === 0 && "No policies matching filters.",
        matchingCount === 1 && `${matchingCount} policy matches the filters.`,
        matchingCount > 1 && `${matchingCount} policies match the filters.`
      ] })
    ] })
  ] });
};
function findRoutesMatchingPredicate(routeTree, predicateFn) {
  const matchingRouteIdsWithPath = /* @__PURE__ */ new Map();
  function findMatch(route, path) {
    const newPath = [...path, route];
    if (predicateFn(route)) {
      const previousPath = matchingRouteIdsWithPath.get(route) ?? [];
      matchingRouteIdsWithPath.set(route, [...previousPath, ...newPath]);
    }
    route.routes?.forEach((route2) => findMatch(route2, newPath));
  }
  findMatch(routeTree, []);
  return matchingRouteIdsWithPath;
}
function findRoutesByMatchers(route, labelMatchersFilter) {
  const filters = labelMatchersFilter.map(unquoteMatchersIfRequired);
  const routeMatchers = (0,_utils_matchers__WEBPACK_IMPORTED_MODULE_19__.normalizeMatchers)(route).map(unquoteMatchersIfRequired);
  return filters.every((filter) => routeMatchers.some((matcher) => (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual)(filter, matcher)));
}
const unquoteMatchersIfRequired = ([key, operator, value]) => {
  return [(0,_utils_matchers__WEBPACK_IMPORTED_MODULE_19__.unquoteIfRequired)(key), operator, (0,_utils_matchers__WEBPACK_IMPORTED_MODULE_19__.unquoteIfRequired)(value)];
};
const getNotificationPoliciesFilters = (searchParams) => ({
  queryString: searchParams.get("queryString") ?? void 0,
  contactPoint: searchParams.get("contactPoint") ?? void 0
});
const getStyles = () => ({
  noBottom: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: 0
  })
});



/***/ }),

/***/ "./public/app/features/alerting/unified/components/notification-policies/Modals.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAddPolicyModal: () => (/* binding */ useAddPolicyModal),
/* harmony export */   useAlertGroupsModal: () => (/* binding */ useAlertGroupsModal),
/* harmony export */   useDeletePolicyModal: () => (/* binding */ useDeletePolicyModal),
/* harmony export */   useEditPolicyModal: () => (/* binding */ useEditPolicyModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _alert_groups_AlertGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertGroup.tsx");
/* harmony import */ var _AlertGroupsSummary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/AlertGroupsSummary.tsx");
/* harmony import */ var _EditDefaultPolicyForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/EditDefaultPolicyForm.tsx");
/* harmony import */ var _EditNotificationPolicyForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/EditNotificationPolicyForm.tsx");
/* harmony import */ var _Matchers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/Matchers.tsx");
/* harmony import */ var _PolicyUpdateErrorAlert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/PolicyUpdateErrorAlert.tsx");













const useAddPolicyModal = (handleAdd, loading) => {
  const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [insertPosition, setInsertPosition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(void 0);
  const [referenceRoute, setReferenceRoute] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const handleDismiss = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    setReferenceRoute(void 0);
    setInsertPosition(void 0);
    setError(void 0);
    setShowModal(false);
  }, []);
  const handleShow = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((referenceRoute2, position) => {
    setReferenceRoute(referenceRoute2);
    setInsertPosition(position);
    setShowModal(true);
  }, []);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(void 0);
  const modalElement = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => loading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UpdatingModal, { isOpen: showModal }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal,
      {
        isOpen: showModal,
        onDismiss: handleDismiss,
        closeOnBackdropClick: true,
        closeOnEscape: true,
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "alerting.use-add-policy-modal.modal-element.title-add-notification-policy",
          "Add notification policy"
        ),
        children: [
          error && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PolicyUpdateErrorAlert__WEBPACK_IMPORTED_MODULE_15__.NotificationPoliciesErrorAlert, { error }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _EditNotificationPolicyForm__WEBPACK_IMPORTED_MODULE_13__.AmRoutesExpandedForm,
            {
              defaults: {
                groupBy: referenceRoute?.group_by
              },
              onSubmit: (newRoute) => {
                if (referenceRoute && insertPosition) {
                  handleAdd(newRoute, referenceRoute, insertPosition).catch(setError);
                }
              },
              actionButtons: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal.ButtonRow, { children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { type: "button", variant: "secondary", onClick: handleDismiss, fill: "outline", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.common.cancel", children: "Cancel" }) }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { type: "submit", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.policies.save-policy", children: "Save policy" }) })
              ] })
            }
          )
        ]
      }
    ),
    [error, handleAdd, handleDismiss, insertPosition, loading, referenceRoute, showModal, setError]
  );
  return [modalElement, handleShow, handleDismiss];
};
const useEditPolicyModal = (alertManagerSourceName, handleUpdate, loading) => {
  const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isDefaultPolicy, setIsDefaultPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [route, setRoute] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(void 0);
  const handleDismiss = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    setRoute(void 0);
    setShowModal(false);
    setError(void 0);
  }, []);
  const handleShow = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((route2, isDefaultPolicy2) => {
    setIsDefaultPolicy(isDefaultPolicy2 ?? false);
    setRoute(route2);
    setShowModal(true);
  }, []);
  const modalElement = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => loading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UpdatingModal, { isOpen: showModal }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal,
      {
        isOpen: showModal,
        onDismiss: handleDismiss,
        closeOnBackdropClick: true,
        closeOnEscape: true,
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "alerting.use-edit-policy-modal.modal-element.title-edit-notification-policy",
          "Edit notification policy"
        ),
        children: [
          error && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PolicyUpdateErrorAlert__WEBPACK_IMPORTED_MODULE_15__.NotificationPoliciesErrorAlert, { error }),
          isDefaultPolicy && route && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _EditDefaultPolicyForm__WEBPACK_IMPORTED_MODULE_12__.AmRootRouteForm,
            {
              alertManagerSourceName,
              onSubmit: (values) => handleUpdate(values).catch(setError),
              route,
              actionButtons: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal.ButtonRow, { children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { type: "button", variant: "secondary", onClick: handleDismiss, fill: "outline", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.common.cancel", children: "Cancel" }) }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { type: "submit", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.policies.default-policy.update", children: "Update default policy" }) })
              ] })
            }
          ),
          !isDefaultPolicy && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _EditNotificationPolicyForm__WEBPACK_IMPORTED_MODULE_13__.AmRoutesExpandedForm,
            {
              route,
              onSubmit: (values) => handleUpdate(values).catch(setError),
              actionButtons: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal.ButtonRow, { children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { type: "button", variant: "secondary", onClick: handleDismiss, fill: "outline", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.common.cancel", children: "Cancel" }) }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { type: "submit", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.policies.update.update-policy", children: "Update policy" }) })
              ] })
            }
          )
        ]
      }
    ),
    [loading, showModal, handleDismiss, error, isDefaultPolicy, route, alertManagerSourceName, handleUpdate, setError]
  );
  return [modalElement, handleShow, handleDismiss];
};
const useDeletePolicyModal = (handleDelete, loading) => {
  const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [route, setRoute] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(void 0);
  const handleDismiss = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    setRoute(void 0);
    setShowModal(false);
    setError(void 0);
  }, [setRoute]);
  const handleShow = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((route2) => {
    setRoute(route2);
    setShowModal(true);
  }, []);
  const modalElement = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => loading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UpdatingModal, { isOpen: showModal }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal,
      {
        isOpen: showModal,
        onDismiss: handleDismiss,
        closeOnBackdropClick: true,
        closeOnEscape: true,
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "alerting.use-delete-policy-modal.modal-element.title-delete-notification-policy",
          "Delete notification policy"
        ),
        children: [
          error && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PolicyUpdateErrorAlert__WEBPACK_IMPORTED_MODULE_15__.NotificationPoliciesErrorAlert, { error }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.policies.delete.warning-1", children: "Deleting this notification policy will permanently remove it." }),
          " ",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.policies.delete.warning-2", children: "Are you sure you want to delete this policy?" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal.ButtonRow, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { type: "button", variant: "destructive", onClick: () => route && handleDelete(route).catch(setError), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.policies.delete.confirm", children: "Yes, delete policy" }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { type: "button", variant: "secondary", onClick: handleDismiss, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.common.cancel", children: "Cancel" }) })
          ] })
        ]
      }
    ),
    [handleDismiss, loading, showModal, error, route, handleDelete]
  );
  return [modalElement, handleShow, handleDismiss];
};
const useAlertGroupsModal = (alertManagerSourceName) => {
  const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [alertGroups, setAlertGroups] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [matchers, setMatchers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [formatter, setFormatter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("default");
  const handleDismiss = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    setShowModal(false);
    setAlertGroups([]);
    setMatchers([]);
  }, []);
  const handleShow = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (alertGroups2, matchers2, formatter2) => {
      setAlertGroups(alertGroups2);
      if (matchers2) {
        setMatchers(matchers2);
      }
      if (formatter2) {
        setFormatter(formatter2);
      }
      setShowModal(true);
    },
    []
  );
  const instancesByState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const instances = alertGroups.flatMap((group) => group.alerts);
    return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.groupBy)(instances, (instance) => instance.status.state);
  }, [alertGroups]);
  const modalElement = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal,
      {
        isOpen: showModal,
        onDismiss: handleDismiss,
        closeOnBackdropClick: true,
        closeOnEscape: true,
        ariaLabel: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.policies.matchers", "Matchers"),
        title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "row", alignItems: "center", gap: 1, wrap: "wrap", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "row", alignItems: "center", gap: 0.5, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { name: "x" }),
            " ",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.policies.matchers", children: "Matchers" })
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Matchers__WEBPACK_IMPORTED_MODULE_14__.Matchers, { matchers, formatter })
        ] }),
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _AlertGroupsSummary__WEBPACK_IMPORTED_MODULE_11__.AlertGroupsSummary,
              {
                active: instancesByState[app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_9__.AlertState.Active]?.length,
                suppressed: instancesByState[app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_9__.AlertState.Suppressed]?.length,
                unprocessed: instancesByState[app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_9__.AlertState.Unprocessed]?.length
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: alertGroups.map((group, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_alert_groups_AlertGroup__WEBPACK_IMPORTED_MODULE_10__.AlertGroup, { alertManagerSourceName, group }, index)) })
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal.ButtonRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { type: "button", variant: "secondary", onClick: handleDismiss, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.common.cancel", children: "Cancel" }) }) })
        ]
      }
    ),
    [alertGroups, handleDismiss, instancesByState, matchers, formatter, showModal, alertManagerSourceName]
  );
  return [modalElement, handleShow, handleDismiss];
};
const UpdatingModal = ({ isOpen }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal,
  {
    isOpen,
    onDismiss: () => {
    },
    closeOnBackdropClick: false,
    closeOnEscape: false,
    ariaLabel: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.policies.update.updating", "Updating..."),
    title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "row", alignItems: "center", gap: 0.5, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.policies.update.updating", children: "Updating..." }),
      " ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Spinner, { inline: true })
    ] }),
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.policies.update.please-wait", children: "Please wait while we update your notification policies." })
  }
);



/***/ }),

/***/ "./public/app/features/alerting/unified/components/notification-policies/NotificationPoliciesList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationPoliciesList: () => (/* binding */ NotificationPoliciesList),
/* harmony export */   findRoutesMatchingFilters: () => (/* binding */ findRoutesMatchingFilters)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var _grafana_alerting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-alerting/src/grafana/notificationPolicies/utils.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_features_alerting_unified_components_contact_points_useContactPoints__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/useContactPoints.ts");
/* harmony import */ var app_features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var app_features_alerting_unified_utils_amroutes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");
/* harmony import */ var app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _hooks_useAsync__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAsync.tsx");
/* harmony import */ var _state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertmanagerContext.tsx");
/* harmony import */ var _utils_k8s_errors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/k8s/errors.ts");
/* harmony import */ var _utils_routeAdapter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/utils/routeAdapter.ts");
/* harmony import */ var _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/api/alertmanagerApi.ts");
/* harmony import */ var _api_receiversApi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/api/receiversApi.ts");
/* harmony import */ var _useRouteGroupsMatcher__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/useRouteGroupsMatcher.ts");
/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/Filters.tsx");
/* harmony import */ var _Modals__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/Modals.tsx");
/* harmony import */ var _Policy__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/Policy.tsx");
/* harmony import */ var _timingOptions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/timingOptions.ts");
/* harmony import */ var _useNotificationPolicyRoute__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/useNotificationPolicyRoute.ts");


























const NotificationPoliciesList = () => {
  const appNotification = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_9__.useAppNotification)();
  const [contactPointsSupported, canSeeContactPoints] = (0,app_features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_11__.useAlertmanagerAbility)(app_features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_11__.AlertmanagerAction.ViewContactPoint);
  const [_, canSeeAlertGroups] = (0,app_features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_11__.useAlertmanagerAbility)(app_features_alerting_unified_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_11__.AlertmanagerAction.ViewAlertGroups);
  const { useGetAlertmanagerAlertGroupsQuery } = _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_19__.alertmanagerApi;
  const [contactPointFilter, setContactPointFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const [labelMatchersFilter, setLabelMatchersFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const { selectedAlertmanager, hasConfigurationAPI, isGrafanaAlertmanager } = (0,_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_16__.useAlertmanager)();
  const { getRouteGroupsMap } = (0,_useRouteGroupsMatcher__WEBPACK_IMPORTED_MODULE_21__.useRouteGroupsMatcher)();
  const shouldFetchContactPoints = contactPointsSupported && canSeeContactPoints;
  const contactPointsState = (0,_api_receiversApi__WEBPACK_IMPORTED_MODULE_20__.useGetContactPointsState)(
    // Workaround to not try and call this API when we don't have access to the policies tab
    shouldFetchContactPoints ? selectedAlertmanager ?? "" : ""
  );
  const {
    currentData,
    isLoading,
    error: fetchPoliciesError,
    refetch: refetchNotificationPolicyRoute
  } = (0,_useNotificationPolicyRoute__WEBPACK_IMPORTED_MODULE_26__.useNotificationPolicyRoute)({ alertmanager: selectedAlertmanager ?? "" });
  const [defaultPolicy] = currentData ?? [];
  const [deleteNotificationPolicy, deleteNotificationPolicyState] = (0,_useNotificationPolicyRoute__WEBPACK_IMPORTED_MODULE_26__.useDeleteNotificationPolicy)({
    alertmanager: selectedAlertmanager ?? ""
  });
  const [updateExistingNotificationPolicy, updateExistingNotificationPolicyState] = (0,_useNotificationPolicyRoute__WEBPACK_IMPORTED_MODULE_26__.useUpdateExistingNotificationPolicy)(
    {
      alertmanager: selectedAlertmanager ?? ""
    }
  );
  const [addNotificationPolicy, addNotificationPolicyState] = (0,_useNotificationPolicyRoute__WEBPACK_IMPORTED_MODULE_26__.useAddNotificationPolicy)({
    alertmanager: selectedAlertmanager ?? ""
  });
  const { currentData: alertGroups, refetch: refetchAlertGroups } = useGetAlertmanagerAlertGroupsQuery(
    { amSourceName: selectedAlertmanager ?? "" },
    { skip: !canSeeAlertGroups || !selectedAlertmanager }
  );
  const { contactPoints: receivers } = (0,app_features_alerting_unified_components_contact_points_useContactPoints__WEBPACK_IMPORTED_MODULE_10__.useContactPointsWithStatus)({
    alertmanager: selectedAlertmanager ?? "",
    fetchPolicies: false,
    fetchStatuses: true,
    skip: !shouldFetchContactPoints
  });
  const rootRoute = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (defaultPolicy) {
      return (0,app_features_alerting_unified_utils_amroutes__WEBPACK_IMPORTED_MODULE_12__.addUniqueIdentifierToRoute)(defaultPolicy);
    }
    return;
  }, [defaultPolicy]);
  const [{ value: routeAlertGroupsMap, error: instancesPreviewError }, triggerGetRouteGroupsMap] = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(
    getRouteGroupsMap,
    [getRouteGroupsMap]
  );
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (rootRoute && alertGroups) {
      triggerGetRouteGroupsMap(rootRoute, alertGroups, { unquoteMatchers: !isGrafanaAlertmanager });
    }
  }, [rootRoute, alertGroups, triggerGetRouteGroupsMap, isGrafanaAlertmanager]);
  const routesMatchingFilters = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (!rootRoute) {
      const emptyResult = {
        filtersApplied: false,
        matchedRoutesWithPath: /* @__PURE__ */ new Map()
      };
      return emptyResult;
    }
    return findRoutesMatchingFilters(rootRoute, { contactPointFilter, labelMatchersFilter });
  }, [contactPointFilter, labelMatchersFilter, rootRoute]);
  const refetchPolicies = () => {
    refetchNotificationPolicyRoute();
    updateExistingNotificationPolicy.reset();
    deleteNotificationPolicy.reset();
    addNotificationPolicy.reset();
  };
  async function handleUpdate(partialRoute) {
    await updateExistingNotificationPolicy.execute(partialRoute);
    handleActionResult({ error: updateExistingNotificationPolicyState.error });
  }
  async function handleDelete(route) {
    await deleteNotificationPolicy.execute(route.id);
    handleActionResult({ error: deleteNotificationPolicyState.error });
  }
  async function handleAdd(partialRoute, referenceRoute, insertPosition) {
    await addNotificationPolicy.execute({
      partialRoute,
      referenceRouteIdentifier: referenceRoute.id,
      insertPosition
    });
    handleActionResult({ error: addNotificationPolicyState.error });
  }
  function handleActionResult({ error }) {
    if (!error) {
      appNotification.success("Updated notification policies");
    }
    if (selectedAlertmanager) {
      refetchAlertGroups();
    }
    closeEditModal();
    closeAddModal();
    closeDeleteModal();
  }
  const updatingTree = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_15__.anyOfRequestState)(
    updateExistingNotificationPolicyState,
    deleteNotificationPolicyState,
    addNotificationPolicyState
  ).loading;
  const [addModal, openAddModal, closeAddModal] = (0,_Modals__WEBPACK_IMPORTED_MODULE_23__.useAddPolicyModal)(handleAdd, updatingTree);
  const [editModal, openEditModal, closeEditModal] = (0,_Modals__WEBPACK_IMPORTED_MODULE_23__.useEditPolicyModal)(
    selectedAlertmanager ?? "",
    handleUpdate,
    updatingTree
  );
  const [deleteModal, openDeleteModal, closeDeleteModal] = (0,_Modals__WEBPACK_IMPORTED_MODULE_23__.useDeletePolicyModal)(handleDelete, updatingTree);
  const [alertInstancesModal, showAlertGroupsModal] = (0,_Modals__WEBPACK_IMPORTED_MODULE_23__.useAlertGroupsModal)(selectedAlertmanager ?? "");
  if (!selectedAlertmanager) {
    return null;
  }
  const hasPoliciesData = rootRoute && !fetchPoliciesError && !isLoading;
  const hasPoliciesError = Boolean(fetchPoliciesError) && !isLoading;
  const hasConflictError = [
    addNotificationPolicyState,
    updateExistingNotificationPolicyState,
    deleteNotificationPolicyState
  ].some((state) => (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_15__.isError)(state) && (0,app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_13__.getErrorCode)(state.error) === _utils_k8s_errors__WEBPACK_IMPORTED_MODULE_17__.ERROR_NEWER_CONFIGURATION);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    hasPoliciesError && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert,
      {
        severity: "error",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "alerting.notification-policies-list.title-error-loading-alertmanager-config",
          "Error loading Alertmanager config"
        ),
        children: (0,app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_13__.stringifyErrorLike)(fetchPoliciesError) || "Unknown error."
      }
    ),
    hasConflictError && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert,
      {
        severity: "info",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "alerting.notification-policies-list.title-notification-policies-have-changed",
          "Notification policies have changed"
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.policies.update-errors.conflict", children: "The notification policy tree has been updated by another user." }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { onClick: refetchPolicies, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.policies.reload-policies", children: "Reload policies" }) })
        ] })
      }
    ),
    hasPoliciesData && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 1, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _Filters__WEBPACK_IMPORTED_MODULE_22__.NotificationPoliciesFilter,
        {
          onChangeMatchers: setLabelMatchersFilter,
          onChangeReceiver: setContactPointFilter,
          matchingCount: routesMatchingFilters.matchedRoutesWithPath.size
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _Policy__WEBPACK_IMPORTED_MODULE_24__.Policy,
        {
          receivers,
          currentRoute: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.defaults)(rootRoute, _timingOptions__WEBPACK_IMPORTED_MODULE_25__.TIMING_OPTIONS_DEFAULTS),
          contactPointsState: contactPointsState.receivers,
          readOnly: !hasConfigurationAPI,
          provisioned: rootRoute[app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_14__.ROUTES_META_SYMBOL]?.provisioned,
          alertManagerSourceName: selectedAlertmanager,
          onAddPolicy: openAddModal,
          onEditPolicy: openEditModal,
          onDeletePolicy: openDeleteModal,
          onShowAlertInstances: showAlertGroupsModal,
          routesMatchingFilters,
          matchingInstancesPreview: {
            groupsMap: routeAlertGroupsMap,
            enabled: Boolean(canSeeAlertGroups && !instancesPreviewError)
          },
          isAutoGenerated: false,
          isDefaultPolicy: true
        }
      )
    ] }),
    addModal,
    editModal,
    deleteModal,
    alertInstancesModal
  ] });
};
const findRoutesMatchingFilters = (rootRoute, filters) => {
  const { contactPointFilter, labelMatchersFilter = [] } = filters;
  const hasFilter = contactPointFilter || labelMatchersFilter.length > 0;
  const havebothFilters = Boolean(contactPointFilter) && labelMatchersFilter.length > 0;
  if (!hasFilter) {
    return { filtersApplied: false, matchedRoutesWithPath: /* @__PURE__ */ new Map() };
  }
  const matchedRoutes = [];
  const adaptedRootRoute = _utils_routeAdapter__WEBPACK_IMPORTED_MODULE_18__.routeAdapter.toPackage(rootRoute);
  const adaptedFullTree = (0,_grafana_alerting__WEBPACK_IMPORTED_MODULE_4__.computeInheritedTree)(adaptedRootRoute);
  const fullRoute = _utils_routeAdapter__WEBPACK_IMPORTED_MODULE_18__.routeAdapter.fromPackage(adaptedFullTree);
  const matchingRoutesForContactPoint = contactPointFilter ? (0,_Filters__WEBPACK_IMPORTED_MODULE_22__.findRoutesMatchingPredicate)(fullRoute, (route) => route.receiver === contactPointFilter) : /* @__PURE__ */ new Map();
  const routesMatchingContactPoint = Array.from(matchingRoutesForContactPoint.keys());
  if (routesMatchingContactPoint) {
    matchedRoutes.push(routesMatchingContactPoint);
  }
  const matchingRoutesForLabelMatchers = labelMatchersFilter.length ? (0,_Filters__WEBPACK_IMPORTED_MODULE_22__.findRoutesMatchingPredicate)(fullRoute, (route) => (0,_Filters__WEBPACK_IMPORTED_MODULE_22__.findRoutesByMatchers)(route, labelMatchersFilter)) : /* @__PURE__ */ new Map();
  const routesMatchingLabelFilters = Array.from(matchingRoutesForLabelMatchers.keys());
  if (matchingRoutesForLabelMatchers.size > 0) {
    matchedRoutes.push(routesMatchingLabelFilters);
  }
  const routesForAllFilterResults = havebothFilters ? findMapIntersection(matchingRoutesForLabelMatchers, matchingRoutesForContactPoint) : new Map([...matchingRoutesForLabelMatchers, ...matchingRoutesForContactPoint]);
  return {
    filtersApplied: true,
    matchedRoutesWithPath: routesForAllFilterResults
  };
};
function findMapIntersection(...matchingRoutes) {
  const result = /* @__PURE__ */ new Map();
  for (const key of matchingRoutes[0].keys()) {
    if (matchingRoutes.every((map) => map.has(key))) {
      result.set(key, matchingRoutes[0].get(key));
    }
  }
  return result;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/notification-policies/PolicyUpdateErrorAlert.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationPoliciesErrorAlert: () => (/* binding */ NotificationPoliciesErrorAlert)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");





const NotificationPoliciesErrorAlert = ({ error }) => {
  const title = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.policies.update-errors.title", "Failed to add or update notification policy");
  const errMessage = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_3__.stringifyErrorLike)(error);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, { title, severity: "error", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: errMessage }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.policies.update-errors.suffix", children: "Please refresh the page and try again." })
  ] });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/notification-policies/PromDurationDocs.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PromDurationDocs: () => (/* binding */ PromDurationDocs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _types_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/types/time.ts");






function PromDurationDocs() {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getPromDurationStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.prom-duration-docs.explanation", children: "Prometheus duration format consist of a number followed by a time unit." }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.prom-duration-docs.different-units", children: "Different units can be combined for more granularity." }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.list, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.header, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.prom-duration-docs.symbol", children: "Symbol" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.prom-duration-docs.time-unit", children: "Time unit" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.prom-duration-docs.example", children: "Example" }) })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PromDurationDocsTimeUnit, { unit: _types_time__WEBPACK_IMPORTED_MODULE_4__.TimeOptions.seconds, name: "seconds", example: "20s" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PromDurationDocsTimeUnit, { unit: _types_time__WEBPACK_IMPORTED_MODULE_4__.TimeOptions.minutes, name: "minutes", example: "10m" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PromDurationDocsTimeUnit, { unit: _types_time__WEBPACK_IMPORTED_MODULE_4__.TimeOptions.hours, name: "hours", example: "4h" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PromDurationDocsTimeUnit, { unit: _types_time__WEBPACK_IMPORTED_MODULE_4__.TimeOptions.days, name: "days", example: "3d" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PromDurationDocsTimeUnit, { unit: _types_time__WEBPACK_IMPORTED_MODULE_4__.TimeOptions.weeks, name: "weeks", example: "2w" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.examples, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.prom-duration-docs.multiple-units-combined", children: "Multiple units combined" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: "1m30s, 2h30m20s, 1w2d" })
      ] })
    ] })
  ] });
}
function PromDurationDocsTimeUnit({ unit, name, example }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getPromDurationStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.unit, children: unit }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: name }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: example })
  ] });
}
const getPromDurationStyles = (theme) => ({
  unit: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontWeight: theme.typography.fontWeightBold
  }),
  list: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "grid",
    gridTemplateColumns: "max-content 1fr 2fr",
    gap: theme.spacing(1, 3)
  }),
  header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "contents",
    fontWeight: theme.typography.fontWeightBold
  }),
  examples: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "contents",
    "& > div": {
      gridColumn: "1 / span 2"
    }
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/notification-policies/PromDurationInput.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PromDurationInput: () => (/* binding */ PromDurationInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _HoverCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/HoverCard.tsx");
/* harmony import */ var _PromDurationDocs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/PromDurationDocs.tsx");






const PromDurationInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input,
    {
      suffix: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HoverCard__WEBPACK_IMPORTED_MODULE_4__.PopupCard, { content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PromDurationDocs__WEBPACK_IMPORTED_MODULE_5__.PromDurationDocs, {}), disabled: false, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { name: "info-circle", size: "lg" }) }),
      ...props,
      ref
    }
  );
});
PromDurationInput.displayName = "PromDurationInput";


/***/ }),

/***/ "./public/app/features/alerting/unified/components/notification-policies/formStyles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFormStyles: () => (/* binding */ getFormStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");


const getFormStyles = (theme) => {
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      alignItems: "center",
      display: "flex",
      flexFlow: "row nowrap",
      "& > * + *": {
        marginLeft: theme.spacing(1)
      }
    }),
    input: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      flex: 1
    }),
    promDurationInput: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      maxWidth: theme.spacing(32)
    }),
    timingFormContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      padding: theme.spacing(1)
    }),
    linkText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      textDecoration: "underline"
    }),
    collapse: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      border: "none",
      background: "none",
      color: theme.colors.text.primary
    })
  };
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/notification-policies/routeTimingsFields.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routeTimingsFields: () => (/* binding */ routeTimingsFields)
/* harmony export */ });

const routeTimingsFields = {
  groupWait: {
    label: "Group wait",
    description: "The wait time before sending the first notification for a new group of alerts. If empty, it is inherited from the parent policy.",
    ariaLabel: "Group wait value"
  },
  groupInterval: {
    label: "Group interval",
    description: "The wait time before sending a notification about changes in the alert group after the first notification has been sent. If empty, it is inherited from the parent policy.",
    ariaLabel: "Group interval value"
  },
  repeatInterval: {
    label: "Repeat interval",
    description: "The wait time before resending a notification that has already been sent successfully.",
    ariaLabel: "Repeat interval value"
  }
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/notification-policies/timingOptions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TIMING_OPTIONS_DEFAULTS: () => (/* binding */ TIMING_OPTIONS_DEFAULTS)
/* harmony export */ });

const TIMING_OPTIONS_DEFAULTS = {
  group_wait: "30s",
  group_interval: "5m",
  repeat_interval: "4h"
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/notification-policies/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleContactPointSelect: () => (/* binding */ handleContactPointSelect)
/* harmony export */ });

const handleContactPointSelect = (name, onChange) => {
  if (name === null) {
    return onChange(null);
  }
  if (!name) {
    return onChange("");
  }
  return onChange(name);
};


/***/ }),

/***/ "./public/app/features/alerting/unified/createRouteGroupsMatcherWorker.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWorker: () => (/* binding */ createWorker)
/* harmony export */ });
/* harmony import */ var app_core_utils_CorsWorker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/utils/CorsWorker.ts");


const createWorker = () => new app_core_utils_CorsWorker__WEBPACK_IMPORTED_MODULE_0__.CorsWorker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("public_app_features_alerting_unified_routeGroupsMatcher_worker_ts"), __webpack_require__.b));


/***/ }),

/***/ "./public/app/features/alerting/unified/openapi/timeIntervalsApi.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTagTypes: () => (/* binding */ addTagTypes),
/* harmony export */   generatedTimeIntervalsApi: () => (/* binding */ injectedRtkApi)
/* harmony export */ });
/* harmony import */ var _api_alertingApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/api/alertingApi.ts");


const addTagTypes = ["TimeInterval"];
const injectedRtkApi = _api_alertingApi__WEBPACK_IMPORTED_MODULE_0__.alertingApi.enhanceEndpoints({
  addTagTypes
}).injectEndpoints({
  endpoints: (build) => ({
    listNamespacedTimeInterval: build.query({
      query: (queryArg) => ({
        url: `/apis/notifications.alerting.grafana.app/v0alpha1/namespaces/${queryArg["namespace"]}/timeintervals`,
        params: {
          pretty: queryArg.pretty,
          allowWatchBookmarks: queryArg.allowWatchBookmarks,
          continue: queryArg["continue"],
          fieldSelector: queryArg.fieldSelector,
          labelSelector: queryArg.labelSelector,
          limit: queryArg.limit,
          resourceVersion: queryArg.resourceVersion,
          resourceVersionMatch: queryArg.resourceVersionMatch,
          sendInitialEvents: queryArg.sendInitialEvents,
          timeoutSeconds: queryArg.timeoutSeconds,
          watch: queryArg.watch
        }
      }),
      providesTags: ["TimeInterval"]
    }),
    createNamespacedTimeInterval: build.mutation({
      query: (queryArg) => ({
        url: `/apis/notifications.alerting.grafana.app/v0alpha1/namespaces/${queryArg["namespace"]}/timeintervals`,
        method: "POST",
        body: queryArg.comGithubGrafanaGrafanaPkgApisAlertingNotificationsV0Alpha1TimeInterval,
        params: {
          pretty: queryArg.pretty,
          dryRun: queryArg.dryRun,
          fieldManager: queryArg.fieldManager,
          fieldValidation: queryArg.fieldValidation
        }
      }),
      invalidatesTags: ["TimeInterval"]
    }),
    replaceNamespacedTimeInterval: build.mutation({
      query: (queryArg) => ({
        url: `/apis/notifications.alerting.grafana.app/v0alpha1/namespaces/${queryArg["namespace"]}/timeintervals/${queryArg.name}`,
        method: "PUT",
        body: queryArg.comGithubGrafanaGrafanaPkgApisAlertingNotificationsV0Alpha1TimeInterval,
        params: {
          pretty: queryArg.pretty,
          dryRun: queryArg.dryRun,
          fieldManager: queryArg.fieldManager,
          fieldValidation: queryArg.fieldValidation
        }
      }),
      invalidatesTags: ["TimeInterval"]
    }),
    deleteNamespacedTimeInterval: build.mutation({
      query: (queryArg) => ({
        url: `/apis/notifications.alerting.grafana.app/v0alpha1/namespaces/${queryArg["namespace"]}/timeintervals/${queryArg.name}`,
        method: "DELETE",
        body: queryArg.ioK8SApimachineryPkgApisMetaV1DeleteOptions,
        params: {
          pretty: queryArg.pretty,
          dryRun: queryArg.dryRun,
          gracePeriodSeconds: queryArg.gracePeriodSeconds,
          orphanDependents: queryArg.orphanDependents,
          propagationPolicy: queryArg.propagationPolicy
        }
      }),
      invalidatesTags: ["TimeInterval"]
    })
  }),
  overrideExisting: false
});



/***/ }),

/***/ "./public/app/features/alerting/unified/styles/notifications.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNotificationsTextColors: () => (/* binding */ getNotificationsTextColors)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");



const getNotificationsTextColors = (theme) => ({
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__.AlertState.Active]: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    color: theme.colors.error.text
  }),
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__.AlertState.Suppressed]: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    color: theme.colors.primary.text
  }),
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__.AlertState.Unprocessed]: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    color: theme.colors.secondary.text
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/useRouteGroupsMatcher.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRouteGroupsMatcher: () => (/* binding */ useRouteGroupsMatcher)
/* harmony export */ });
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/comlink/dist/esm/comlink.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _createRouteGroupsMatcherWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/createRouteGroupsMatcherWorker.ts");





let routeMatcher;
function loadWorker() {
  let worker;
  if (routeMatcher === void 0) {
    try {
      worker = (0,_createRouteGroupsMatcherWorker__WEBPACK_IMPORTED_MODULE_3__.createWorker)();
      routeMatcher = comlink__WEBPACK_IMPORTED_MODULE_0__.wrap(worker);
    } catch (e) {
      if (e instanceof Error) {
        (0,_Analytics__WEBPACK_IMPORTED_MODULE_2__.logError)(e);
      }
    }
  }
  const disposeWorker = () => {
    if (worker && routeMatcher) {
      routeMatcher[comlink__WEBPACK_IMPORTED_MODULE_0__.releaseProxy]();
      worker.terminate();
      routeMatcher = void 0;
      worker = void 0;
    }
  };
  return { disposeWorker };
}
function validateWorker(matcher) {
  if (!routeMatcher) {
    throw new Error("Route Matcher has not been initialized");
  }
}
function useRouteGroupsMatcher() {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const { disposeWorker } = loadWorker();
    return disposeWorker;
  }, []);
  const getRouteGroupsMap = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    async (rootRoute, alertGroups, options) => {
      validateWorker(routeMatcher);
      const startTime = performance.now();
      const result = await routeMatcher.getRouteGroupsMap(rootRoute, alertGroups, options);
      const timeSpent = performance.now() - startTime;
      (0,_Analytics__WEBPACK_IMPORTED_MODULE_2__.logInfo)(`Route Groups Matched in  ${timeSpent} ms`, {
        matchingTime: timeSpent.toString(),
        alertGroupsCount: alertGroups.length.toString(),
        // Counting all nested routes might be too time-consuming, so we only count the first level
        topLevelRoutesCount: rootRoute.routes?.length.toString() ?? "0"
      });
      return result;
    },
    []
  );
  const matchInstancesToRoutes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    async (rootRoute, instances, options) => {
      validateWorker(routeMatcher);
      const startTime = performance.now();
      const result = await routeMatcher.matchInstancesToRoutes(rootRoute, instances, options);
      const timeSpent = performance.now() - startTime;
      (0,_Analytics__WEBPACK_IMPORTED_MODULE_2__.logInfo)(`Instances Matched in  ${timeSpent} ms`, {
        matchingTime: timeSpent.toString(),
        instancesToMatchCount: instances.length.toString(),
        // Counting all nested routes might be too time-consuming, so we only count the first level
        topLevelRoutesCount: rootRoute.routes?.length.toString() ?? "0"
      });
      return result;
    },
    []
  );
  return { getRouteGroupsMap, matchInstancesToRoutes };
}


/***/ }),

/***/ "./public/app/features/alerting/unified/utils/mute-timings.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DAYS_OF_THE_WEEK: () => (/* binding */ DAYS_OF_THE_WEEK),
/* harmony export */   MONTHS: () => (/* binding */ MONTHS),
/* harmony export */   createMuteTiming: () => (/* binding */ createMuteTiming),
/* harmony export */   defaultTimeInterval: () => (/* binding */ defaultTimeInterval),
/* harmony export */   isDisabled: () => (/* binding */ isDisabled),
/* harmony export */   isTimeIntervalDisabled: () => (/* binding */ isTimeIntervalDisabled),
/* harmony export */   validateArrayField: () => (/* binding */ validateArrayField)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


const DAYS_OF_THE_WEEK = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
const MONTHS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december"
];
const defaultTimeInterval = {
  times: [{ start_time: "", end_time: "" }],
  weekdays: "",
  days_of_month: "",
  months: "",
  years: "",
  location: "",
  disable: false
};
const validateArrayField = (value, validateValue, invalidText) => {
  if (value) {
    return value.split(",").map((x) => x.trim()).every((entry) => entry.split(":").every(validateValue)) || invalidText;
  } else {
    return true;
  }
};
const convertStringToArray = (str) => {
  return str ? str.split(",").map((s) => s.trim()) : void 0;
};
const createMuteTiming = (fields) => {
  const timeIntervals = fields.time_intervals.map(
    ({ times, weekdays, days_of_month, months, years, location, disable }) => {
      const interval = {
        times: convertTimesToDto(times, disable),
        weekdays: convertStringToArray(weekdays)?.map((v) => v.toLowerCase()),
        days_of_month: convertStringToArray(days_of_month),
        months: convertStringToArray(months),
        years: convertStringToArray(years),
        location: location ? location : void 0
      };
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(interval, lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined);
    }
  );
  return {
    name: fields.name,
    time_intervals: timeIntervals
  };
};
function convertTimesToDto(times, disable) {
  if (disable) {
    return [];
  }
  const timesToReturn = times?.filter(({ start_time, end_time }) => !!start_time && !!end_time);
  return timesToReturn?.length ? timesToReturn : void 0;
}
function isTimeIntervalDisabled(intervals) {
  if (intervals.times?.length === 0 || intervals.weekdays?.length === 0 || intervals.days_of_month?.length === 0 || intervals.months?.length === 0 || intervals.years?.length === 0) {
    return true;
  }
  return false;
}
function isDisabled(muteTiming) {
  return muteTiming.time_intervals.every((timeInterval) => isTimeIntervalDisabled(timeInterval));
}


/***/ })

}]);
//# sourceMappingURL=NotificationPoliciesPage.ee668af70cc8fe3c1275.js.map