"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_alerting_unified_components_rule-editor_notificaton-preview_NotificationP-f23dab"],{

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

/***/ "./public/app/features/alerting/unified/components/rule-editor/notificaton-preview/ConnectionLine.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionLine: () => (/* binding */ ConnectionLine)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");




function ConnectionLine() {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Box, { display: "flex", justifyContent: "center", alignItems: "center", height: 4, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.line }) });
}
const getStyles = (theme) => ({
  line: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "1px",
    height: "100%",
    background: theme.colors.border.medium
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/notificaton-preview/ContactPointGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactPointGroup: () => (/* binding */ ContactPointGroup),
/* harmony export */   ExternalContactPointGroup: () => (/* binding */ ExternalContactPointGroup),
/* harmony export */   GrafanaContactPointGroup: () => (/* binding */ GrafanaContactPointGroup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-loading-skeleton/dist/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useToggle.js");
/* harmony import */ var _grafana_alerting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-alerting/src/grafana/api/util.ts");
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-alerting/src/grafana/contactPoints/utils.ts");
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-alerting/src/grafana/api/notifications/v0alpha1/notifications.api.gen.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _utils_k8s_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/k8s/utils.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _MetaText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/MetaText.tsx");
/* harmony import */ var _rule_viewer_ContactPointLink__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/ContactPointLink.tsx");
/* harmony import */ var _UnknownContactPointDetails__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/notificaton-preview/UnknownContactPointDetails.tsx");















function GrafanaContactPointGroup({ name, matchedInstancesCount, children }) {
  const encodedName = (0,_grafana_alerting__WEBPACK_IMPORTED_MODULE_4__.base64UrlEncode)(name);
  const { data, isLoading } = _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_6__.notificationsAPI.endpoints.listReceiver.useQuery({
    fieldSelector: (0,_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_12__.stringifyFieldSelector)([["metadata.name", encodedName]])
  });
  const contactPoint = data?.items.at(0);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    ContactPointGroup,
    {
      isLoading,
      matchedInstancesCount,
      name: contactPoint ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rule_viewer_ContactPointLink__WEBPACK_IMPORTED_MODULE_16__.ContactPointLink, { name, external: true, color: "primary", variant: "bodySmall" }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UnknownContactPointDetails__WEBPACK_IMPORTED_MODULE_17__["default"], { receiverName: name ?? "unknown" }),
      description: contactPoint ? (0,_grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_5__.getContactPointDescription)(contactPoint) : null,
      children
    }
  );
}
function ExternalContactPointGroup({
  name,
  alertmanagerSourceName,
  matchedInstancesCount,
  children
}) {
  const link = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.TextLink,
    {
      color: "primary",
      variant: "bodySmall",
      external: true,
      inline: false,
      href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_13__.createContactPointLink)(name, alertmanagerSourceName),
      children: name
    }
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContactPointGroup, { name: link, matchedInstancesCount, children });
}
function ContactPointGroup({
  name,
  description,
  matchedInstancesCount,
  isLoading = false,
  children
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  const [isExpanded, toggleExpanded] = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(false);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "column", role: "list", "data-testid": "matched-contactpoint-group", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.contactPointRow, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "row", alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _CollapseToggle__WEBPACK_IMPORTED_MODULE_14__.CollapseToggle,
        {
          isCollapsed: !isExpanded,
          onToggle: () => toggleExpanded(),
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("alerting.notification-route-header.aria-label-expand-policy-route", "Expand policy route")
        }
      ),
      isLoading && loader,
      !isLoading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        name && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_MetaText__WEBPACK_IMPORTED_MODULE_15__.MetaText, { icon: "at", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.notification-route-header.delivered-to", children: "Delivered to" }),
            " ",
            name
          ] }),
          description && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Text, { variant: "bodySmall", color: "secondary", children: [
            "\u22C5 ",
            description
          ] })
        ] }),
        matchedInstancesCount && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Text, { color: "secondary", variant: "bodySmall", children: "|" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_MetaText__WEBPACK_IMPORTED_MODULE_15__.MetaText, { icon: "layers-alt", children: [
            matchedInstancesCount,
            " ",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.notification-route-header.instances", children: "instances" })
          ] })
        ] })
      ] })
    ] }) }),
    isExpanded && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.notificationPolicies, children })
  ] });
}
const loader = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "row", gap: 1, children: [
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], { height: 16, width: 128 }),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], { height: 16, width: 64 })
] });
const getStyles = (theme) => ({
  contactPointRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(0.5),
    ":hover": {
      background: theme.components.table.rowHoverBackground
    }
  }),
  notificationPolicies: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginLeft: theme.spacing(2),
    borderLeftStyle: "solid",
    borderLeftWidth: 1,
    borderLeftColor: theme.colors.border.weak
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/notificaton-preview/JourneyPolicyCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JourneyPolicyCard: () => (/* binding */ JourneyPolicyCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _utils_routeAdapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/routeAdapter.ts");
/* harmony import */ var _notification_policies_Matchers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/Matchers.tsx");
/* harmony import */ var _notification_policies_Policy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/Policy.tsx");








function JourneyPolicyCard({ route, isRoot = false, isFinalRoute = false }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const matchers = route.matchers?.map(_utils_routeAdapter__WEBPACK_IMPORTED_MODULE_8__.labelMatcherToObjectMatcher) ?? [];
  const hasMatchers = matchers.length > 0;
  const continueMatching = route.continue ?? false;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", { className: styles.policyWrapper(isFinalRoute), "aria-current": isFinalRoute ? "true" : "false", children: [
    continueMatching && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContinueMatchingIndicator, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "column", gap: 0.5, children: [
      isRoot && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_notification_policies_Policy__WEBPACK_IMPORTED_MODULE_10__.DefaultPolicyIndicator, {}),
      hasMatchers ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_notification_policies_Matchers__WEBPACK_IMPORTED_MODULE_9__.Matchers, { matchers, formatter: void 0 }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { variant: "bodySmall", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.policies.no-matchers", children: "No matchers" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "row", alignItems: "center", gap: 1, children: [
        route.receiver && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { variant: "bodySmall", color: "secondary", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "at", size: "xs" }),
          " ",
          route.receiver
        ] }),
        route.group_by && route.group_by.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { variant: "bodySmall", color: "secondary", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "layer-group", size: "xs" }),
          " ",
          route.group_by.join(", ")
        ] })
      ] })
    ] })
  ] });
}
const ContinueMatchingIndicator = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip,
    {
      placement: "top",
      content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.continue-matching-indicator.content-route-continue-matching-other-policies", children: "This route will continue matching other policies" }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.gutterIcon, "data-testid": "continue-matching", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "arrow-down" }) })
    }
  );
};
const getStyles = (theme) => ({
  policyWrapper: (hasFocus = false) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "relative",
    background: theme.colors.background.secondary,
    borderRadius: theme.shape.radius.default,
    border: `solid 1px ${theme.colors.border.weak}`,
    ...hasFocus && {
      borderColor: theme.colors.primary.border,
      background: theme.colors.primary.transparent
    },
    padding: theme.spacing(1)
  }),
  gutterIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "absolute",
    left: `-${theme.spacing(3.5)}`,
    top: theme.spacing(2.25),
    color: theme.colors.text.secondary,
    background: theme.colors.background.primary,
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `solid 1px ${theme.colors.border.weak}`,
    borderRadius: theme.shape.radius.default
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/notificaton-preview/MatchDetails.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatchDetails: () => (/* binding */ MatchDetails)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-alerting/src/grafana/rules/components/labels/AlertLabel.tsx");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _utils_routeAdapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/routeAdapter.ts");
/* harmony import */ var _notification_policies_Matchers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/Matchers.tsx");








function MatchDetails({ matchDetails, labels }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  const matchingLabels = matchDetails.filter((detail) => detail.match);
  const noMatchingLabels = matchingLabels.length === 0;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.container, children: noMatchingLabels ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "bodySmall", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.match-details.no-matchers-matched", children: "Policy matches all labels" }) }) : matchingLabels.map((detail) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Box, { display: "flex", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_2__.AlertLabel, { labelKey: labels[detail.labelIndex][0], value: labels[detail.labelIndex][1] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "bodySmall", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.match-details.matched", children: "matched" }) }),
    detail.matcher && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_notification_policies_Matchers__WEBPACK_IMPORTED_MODULE_8__.MatcherBadge, { matcher: (0,_utils_routeAdapter__WEBPACK_IMPORTED_MODULE_7__.labelMatcherToObjectMatcher)(detail.matcher) })
  ] }, detail.labelIndex)) });
}
const getStyles = (theme) => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    background: theme.colors.background.secondary,
    borderRadius: theme.shape.radius.pill,
    border: `solid 1px ${theme.colors.border.weak}`,
    width: "fit-content",
    alignSelf: "center"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/notificaton-preview/NotificationPolicyDrawer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationPolicyDrawer: () => (/* binding */ NotificationPolicyDrawer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_alerting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-alerting/src/grafana/rules/components/labels/AlertLabel.tsx");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Drawer/Drawer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _plugins_datasource_parca_QueryEditor_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/parca/QueryEditor/Stack.tsx");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");
/* harmony import */ var _ConnectionLine__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/notificaton-preview/ConnectionLine.tsx");
/* harmony import */ var _JourneyPolicyCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/notificaton-preview/JourneyPolicyCard.tsx");
/* harmony import */ var _MatchDetails__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/notificaton-preview/MatchDetails.tsx");











function NotificationPolicyDrawer({
  policyName,
  matchedRootRoute,
  journey,
  labels
}) {
  const [isDrawerOpen, setIsDrawerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  const finalRouteMatchInfo = journey.at(-1);
  const nonMatchingLabels = finalRouteMatchInfo?.matchDetails.filter((detail) => !detail.match) ?? [];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { fill: "outline", variant: "secondary", size: "sm", onClick: handleOpenDrawer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.instance-match.notification-policy", children: "View route" }) }),
    isDrawerOpen && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Drawer,
      {
        size: "md",
        title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.notification-route.notification-policy", children: "Notification policy" }),
          policyName && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { color: "secondary", variant: "bodySmall", children: [
            " ",
            "\u22C5 ",
            policyName
          ] })
        ] }),
        onClose: handleCloseDrawer,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_plugins_datasource_parca_QueryEditor_Stack__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 2, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_plugins_datasource_parca_QueryEditor_Stack__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 2, alignItems: "center", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_plugins_datasource_parca_QueryEditor_Stack__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 0, children: journey.map((routeInfo, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: [
              index > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ConnectionLine__WEBPACK_IMPORTED_MODULE_10__.ConnectionLine, {}),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MatchDetails__WEBPACK_IMPORTED_MODULE_12__.MatchDetails, { matchDetails: routeInfo.matchDetails, labels }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ConnectionLine__WEBPACK_IMPORTED_MODULE_10__.ConnectionLine, {})
              ] }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _JourneyPolicyCard__WEBPACK_IMPORTED_MODULE_11__.JourneyPolicyCard,
                {
                  route: routeInfo.route,
                  isRoot: index === 0,
                  isFinalRoute: index === journey.length - 1
                }
              )
            ] }, index)) }),
            nonMatchingLabels.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_plugins_datasource_parca_QueryEditor_Stack__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { variant: "body", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.instance-match.non-matching-labels", children: "Non-matching labels" }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_plugins_datasource_parca_QueryEditor_Stack__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "row", gap: 0.5, children: nonMatchingLabels.map((detail) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { color: "secondary", variant: "bodySmall", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_alerting__WEBPACK_IMPORTED_MODULE_2__.AlertLabel, { labelKey: labels[detail.labelIndex][0], value: labels[detail.labelIndex][1] }) }, detail.labelIndex)) })
            ] })
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TextLink, { href: (0,_utils_url__WEBPACK_IMPORTED_MODULE_9__.createRelativeUrl)("/alerting/routes"), external: true, inline: false, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.notification-policy-drawer.view-notification-policy-tree", children: "View notification policy tree" }) })
        ] })
      }
    )
  ] });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/notificaton-preview/NotificationPreviewGrafanaManaged.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/ErrorBoundary/ErrorBoundary.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _plugins_datasource_parca_QueryEditor_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/parca/QueryEditor/Stack.tsx");
/* harmony import */ var _ContactPointGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/notificaton-preview/ContactPointGroup.tsx");
/* harmony import */ var _NotificationRoute__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/notificaton-preview/NotificationRoute.tsx");
/* harmony import */ var _useAlertmanagerNotificationRoutingPreview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/notificaton-preview/useAlertmanagerNotificationRoutingPreview.ts");










const UNKNOWN_RECEIVER = "unknown";
function NotificationPreviewGrafanaManaged({
  alertManagerSource,
  instances
}) {
  const { treeMatchingResults, isLoading, error } = (0,_useAlertmanagerNotificationRoutingPreview__WEBPACK_IMPORTED_MODULE_11__.useAlertmanagerNotificationRoutingPreview)(
    alertManagerSource.name,
    instances
  );
  if (error) {
    const title = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.notification-preview.error", "Could not load routing preview for {{alertmanager}}", {
      alertmanager: alertManagerSource.name
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, { title, severity: "error", children: (0,app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_7__.stringifyErrorLike)(error) });
  }
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder,
      {
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "alerting.notification-preview-by-alert-manager.text-loading-routing-preview",
          "Loading routing preview..."
        )
      }
    );
  }
  const matchingPoliciesFound = treeMatchingResults.some((result) => result.matchedRoutes.length > 0);
  const flattenedResults = treeMatchingResults.flatMap(({ labels, matchedRoutes }) => {
    return Array.from(matchedRoutes).map(({ route, routeTree, matchDetails }) => ({
      labels,
      receiver: route.receiver || UNKNOWN_RECEIVER,
      routeTree,
      matchDetails
    }));
  });
  const contactPointGroups = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.groupBy)(flattenedResults, "receiver");
  return matchingPoliciesFound ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Box, { display: "flex", direction: "column", gap: 1, width: "100%", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_plugins_datasource_parca_QueryEditor_Stack__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 0, children: Object.entries(contactPointGroups).map(([receiver, resultsForReceiver]) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ContactPointGroup__WEBPACK_IMPORTED_MODULE_9__.GrafanaContactPointGroup, { name: receiver, matchedInstancesCount: resultsForReceiver.length, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_plugins_datasource_parca_QueryEditor_Stack__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 0, children: resultsForReceiver.map(({ routeTree, matchDetails }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _NotificationRoute__WEBPACK_IMPORTED_MODULE_10__.InstanceMatch,
    {
      matchedInstance: matchDetails,
      policyTreeSpec: routeTree.expandedSpec,
      policyTreeMetadata: routeTree.metadata
    },
    matchDetails.labels.join(",")
  )) }) }, receiver)) }) }) : null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.withErrorBoundary)(NotificationPreviewGrafanaManaged));


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/notificaton-preview/NotificationRoute.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstanceMatch: () => (/* binding */ InstanceMatch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_alerting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-alerting/src/grafana/rules/components/labels/AlertLabels.tsx");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _plugins_datasource_parca_QueryEditor_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/parca/QueryEditor/Stack.tsx");
/* harmony import */ var _utils_labels__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/labels.ts");
/* harmony import */ var _Spacer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/Spacer.tsx");
/* harmony import */ var _NotificationPolicyDrawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/notificaton-preview/NotificationPolicyDrawer.tsx");










function InstanceMatch({ matchedInstance, policyTreeSpec, policyTreeMetadata }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const { labels, matchingJourney, route } = matchedInstance;
  const finalRouteMatchInfo = matchingJourney.at(-1);
  const routeMatchLabels = (0,_utils_labels__WEBPACK_IMPORTED_MODULE_7__.arrayLabelsToObject)(
    finalRouteMatchInfo?.matchDetails.map((detail) => labels[detail.labelIndex]) ?? []
  );
  const matchedRootRoute = route.id === policyTreeSpec.id;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.instanceListItem, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_plugins_datasource_parca_QueryEditor_Stack__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "row", gap: 2, alignItems: "center", children: [
    labels.length > 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_alerting__WEBPACK_IMPORTED_MODULE_2__.AlertLabels, { size: "sm", labels: routeMatchLabels }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.notification-route.no-labels", children: "No labels" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Spacer__WEBPACK_IMPORTED_MODULE_8__.Spacer, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _NotificationPolicyDrawer__WEBPACK_IMPORTED_MODULE_9__.NotificationPolicyDrawer,
      {
        labels,
        policyName: policyTreeMetadata.name,
        matchedRootRoute,
        journey: matchingJourney
      }
    )
  ] }) });
}
const getStyles = (theme) => ({
  instanceListItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(1, 2),
    "&:hover": {
      backgroundColor: theme.components.table.rowHoverBackground
    }
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/notificaton-preview/UnknownContactPointDetails.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");




const UnknownContactPointDetails = ({ receiverName }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { cursor: "help" }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip,
    {
      content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "alerting.unknown-contact-point-details.unknown-contact-point-tooltip",
        "Details could not be found. This may be because you do not have access to the contact point"
      ),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: receiverName ? receiverName : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.unknown-contact-point-details.unknown-contact-point", children: "Unknown contact point" }) })
    }
  ) });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnknownContactPointDetails);


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/notificaton-preview/useAlertmanagerNotificationRoutingPreview.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAlertmanagerNotificationRoutingPreview: () => (/* binding */ useAlertmanagerNotificationRoutingPreview)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var app_features_alerting_unified_components_notification_policies_useNotificationPolicyRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/notification-policies/useNotificationPolicyRoute.ts");
/* harmony import */ var _useRouteGroupsMatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/useRouteGroupsMatcher.ts");
/* harmony import */ var _utils_amroutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_notification_policies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/notification-policies.ts");








const useAlertmanagerNotificationRoutingPreview = (alertmanager, instances) => {
  const {
    data: currentData,
    isLoading: isPoliciesLoading,
    error: policiesError
  } = (0,app_features_alerting_unified_components_notification_policies_useNotificationPolicyRoute__WEBPACK_IMPORTED_MODULE_2__.useNotificationPolicyRoute)({ alertmanager });
  const { matchInstancesToRoutes } = (0,_useRouteGroupsMatcher__WEBPACK_IMPORTED_MODULE_3__.useRouteGroupsMatcher)();
  const [defaultPolicy] = currentData ?? [];
  const rootRoute = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!defaultPolicy) {
      return;
    }
    return (0,_utils_notification_policies__WEBPACK_IMPORTED_MODULE_6__.normalizeRoute)((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_4__.addUniqueIdentifierToRoute)(defaultPolicy));
  }, [defaultPolicy]);
  const {
    value: treeMatchingResults = [],
    loading: matchingLoading,
    error: matchingError
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_1__["default"])(async () => {
    if (!rootRoute) {
      return;
    }
    return await matchInstancesToRoutes(rootRoute, instances, {
      unquoteMatchers: alertmanager !== _utils_datasource__WEBPACK_IMPORTED_MODULE_5__.GRAFANA_RULES_SOURCE_NAME
    });
  }, [rootRoute, instances]);
  return {
    treeMatchingResults,
    isLoading: isPoliciesLoading || matchingLoading,
    error: policiesError ?? matchingError
  };
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

/***/ "./public/app/plugins/datasource/parca/QueryEditor/Stack.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Stack: () => (/* binding */ Stack)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");




function Stack(props) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles, props);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.root, children: props.children });
}
const getStyles = (theme, props) => ({
  root: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: props.direction ?? "row",
    flexWrap: props.wrap ?? true ? "wrap" : void 0,
    alignItems: props.alignItems,
    gap: theme.spacing(props.gap ?? 2),
    flexGrow: props.flexGrow
  })
});


/***/ })

}]);
//# sourceMappingURL=public_app_features_alerting_unified_components_rule-editor_notificaton-preview_NotificationP-f23dab.b3098d854d57faf5defd.js.map