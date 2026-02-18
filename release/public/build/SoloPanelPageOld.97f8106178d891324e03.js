"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SoloPanelPageOld"],{

/***/ "./public/app/core/log_events.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FIELD_CONFIG_CUSTOM_KEY: () => (/* binding */ FIELD_CONFIG_CUSTOM_KEY),
/* harmony export */   FIELD_CONFIG_OVERRIDES_KEY: () => (/* binding */ FIELD_CONFIG_OVERRIDES_KEY),
/* harmony export */   PanelLogEvents: () => (/* binding */ PanelLogEvents)
/* harmony export */ });

var PanelLogEvents = /* @__PURE__ */ ((PanelLogEvents2) => {
  PanelLogEvents2["FIELD_CONFIG_OVERRIDES_CHANGED_EVENT"] = "field config overrides changed";
  PanelLogEvents2["NEW_PANEL_OPTION_EVENT"] = "new panel option";
  PanelLogEvents2["PANEL_OPTION_CHANGED_EVENT"] = "panel option changed";
  PanelLogEvents2["NEW_DEFAULT_FIELD_CONFIG_EVENT"] = "new default field config";
  PanelLogEvents2["DEFAULT_FIELD_CONFIG_CHANGED_EVENT"] = "default field config changed";
  PanelLogEvents2["NEW_CUSTOM_FIELD_CONFIG_EVENT"] = "new custom field config";
  PanelLogEvents2["CUSTOM_FIELD_CONFIG_CHANGED_EVENT"] = "custom field config changed";
  PanelLogEvents2["MEASURE_PANEL_LOAD_TIME_EVENT"] = "measure panel load time";
  PanelLogEvents2["THRESHOLDS_COUNT_CHANGED_EVENT"] = "thresholds count changed";
  PanelLogEvents2["THRESHOLDS_MODE_CHANGED_EVENT"] = "thresholds mode changed";
  PanelLogEvents2["MAPPINGS_COUNT_CHANGED_EVENT"] = "mappings count changed";
  PanelLogEvents2["LINKS_COUNT_CHANGED_EVENT"] = "links count changed";
  PanelLogEvents2["PANEL_ERROR"] = "panel error";
  return PanelLogEvents2;
})(PanelLogEvents || {});
const FIELD_CONFIG_OVERRIDES_KEY = "overrides";
const FIELD_CONFIG_CUSTOM_KEY = "custom";


/***/ }),

/***/ "./public/app/features/dashboard/containers/SoloPanelPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SoloPanel: () => (/* binding */ SoloPanel),
/* harmony export */   SoloPanelPage: () => (/* binding */ SoloPanelPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _core_context_GrafanaContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/context/GrafanaContext.ts");
/* harmony import */ var _dashgrid_DashboardPanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/dashboard/dashgrid/DashboardPanel.tsx");
/* harmony import */ var _state_initDashboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/dashboard/state/initDashboard.ts");












const mapStateToProps = (state) => ({
  dashboard: state.dashboard.getModel()
});
const mapDispatchToProps = {
  initDashboard: _state_initDashboard__WEBPACK_IMPORTED_MODULE_11__.initDashboard
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps);
const SoloPanelPage = ({ route, queryParams, dashboard, initDashboard: initDashboard2 }) => {
  const [panel, setPanel] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [notFound, setNotFound] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const { keybindings } = (0,_core_context_GrafanaContext__WEBPACK_IMPORTED_MODULE_9__.useGrafana)();
  const { slug, uid, type } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_4__.useParams)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    initDashboard2({
      urlSlug: slug,
      urlUid: uid,
      urlType: type,
      routeName: route.routeName,
      fixUrl: false,
      keybindingSrv: keybindings
    });
  }, [slug, uid, type, route.routeName, initDashboard2, keybindings]);
  const getPanelId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    return parseInt(queryParams.panelId ?? "0", 10);
  }, [queryParams.panelId]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (dashboard) {
      const panel2 = dashboard.getPanelByUrlId(queryParams.panelId);
      if (!panel2) {
        setNotFound(true);
        return;
      }
      if (panel2) {
        dashboard.exitViewPanel(panel2);
      }
      setPanel(panel2);
      dashboard.initViewPanel(panel2);
    }
  }, [dashboard, queryParams.panelId]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    SoloPanel,
    {
      dashboard,
      notFound,
      panel,
      panelId: getPanelId(),
      timezone: queryParams.timezone
    }
  );
};
const SoloPanel = ({ dashboard, notFound, panel, panelId, timezone }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  if (notFound) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Alert,
      {
        severity: "error",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("dashboard.solo-panel.title-not-found", "Panel with id {{panelId}} not found", { panelId })
      }
    );
  }
  if (!panel || !dashboard) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "dashboard.solo-panel.loading-initializing-dashboard", children: "Loading & initializing dashboard" }) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.container, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_5__["default"], { children: ({ width, height }) => {
    if (width === 0) {
      return null;
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _dashgrid_DashboardPanel__WEBPACK_IMPORTED_MODULE_10__.DashboardPanel,
      {
        stateKey: panel.key,
        width,
        height,
        dashboard,
        panel,
        isEditing: false,
        isViewing: true,
        lazy: false,
        timezone,
        hideMenu: true
      }
    );
  } }) });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(SoloPanelPage));
const getStyles = (theme) => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "fixed",
    bottom: 0,
    right: 0,
    margin: 0,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%"
  })
});


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/DashboardPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardPanel: () => (/* binding */ DashboardPanel),
/* harmony export */   DashboardPanelUnconnected: () => (/* binding */ DashboardPanelUnconnected)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _panel_state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/panel/state/actions.ts");
/* harmony import */ var _panel_state_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/panel/state/reducers.ts");
/* harmony import */ var _LazyLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/dashgrid/LazyLoader.tsx");
/* harmony import */ var _PanelStateWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelStateWrapper.tsx");








const mapStateToProps = (state, props) => {
  const panelState = state.panels[props.stateKey];
  if (!panelState) {
    return { plugin: void 0 };
  }
  return {
    plugin: panelState.plugin,
    instanceState: panelState.instanceState
  };
};
const mapDispatchToProps = {
  initPanelState: _panel_state_actions__WEBPACK_IMPORTED_MODULE_3__.initPanelState,
  setPanelInstanceState: _panel_state_reducers__WEBPACK_IMPORTED_MODULE_4__.setPanelInstanceState
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);
class DashboardPanelUnconnected extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    this.onInstanceStateChange = (value) => {
      this.props.setPanelInstanceState({ key: this.props.stateKey, value });
    };
    this.onVisibilityChange = (v) => {
      this.props.panel.isInView = v;
    };
    this.onPanelLoad = () => {
      if (!this.props.plugin) {
        this.props.initPanelState(this.props.panel);
      }
    };
    this.renderPanel = ({ isInView }) => {
      const {
        dashboard,
        panel,
        isViewing,
        isEditing,
        width,
        height,
        plugin,
        timezone,
        hideMenu,
        isDraggable = true
      } = this.props;
      if (!plugin) {
        return null;
      }
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _PanelStateWrapper__WEBPACK_IMPORTED_MODULE_6__.PanelStateWrapper,
        {
          plugin,
          panel,
          dashboard,
          isViewing,
          isEditing,
          isInView,
          isDraggable,
          width,
          height,
          onInstanceStateChange: this.onInstanceStateChange,
          timezone,
          hideMenu
        }
      );
    };
  }
  static {
    this.defaultProps = {
      lazy: true
    };
  }
  componentDidMount() {
    this.props.panel.isInView = !this.props.lazy;
    if (!this.props.lazy) {
      this.onPanelLoad();
    }
  }
  render() {
    const { width, height, lazy } = this.props;
    return lazy ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LazyLoader__WEBPACK_IMPORTED_MODULE_5__.LazyLoader, { width, height, onChange: this.onVisibilityChange, onLoad: this.onPanelLoad, children: this.renderPanel }) : this.renderPanel({ isInView: true });
  }
}
const DashboardPanel = connector(DashboardPanelUnconnected);


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/LazyLoader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyLoader: () => (/* binding */ LazyLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useEffectOnce.js");




function LazyLoader({ children, width, height, onLoad, onChange }) {
  const id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
  const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isInView, setIsInView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(() => {
    LazyLoader.addCallback(id, (entry) => {
      if (!loaded && entry.isIntersecting) {
        setLoaded(true);
        onLoad?.();
      }
      setIsInView(entry.isIntersecting);
      onChange?.(entry.isIntersecting);
    });
    const wrapperEl = wrapperRef.current;
    if (wrapperEl) {
      LazyLoader.observer.observe(wrapperEl);
    }
    return () => {
      delete LazyLoader.callbacks[id];
      wrapperEl && LazyLoader.observer.unobserve(wrapperEl);
      if (Object.keys(LazyLoader.callbacks).length === 0) {
        LazyLoader.observer.disconnect();
      }
    };
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id, ref: wrapperRef, style: { width, height }, children: loaded && (typeof children === "function" ? children({ isInView }) : children) });
}
const callbacks = {};
LazyLoader.callbacks = callbacks;
LazyLoader.addCallback = (id, c) => LazyLoader.callbacks[id] = c;
LazyLoader.observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (LazyLoader.callbacks[entry.target.id]) {
        LazyLoader.callbacks[entry.target.id](entry);
      }
    }
  },
  { rootMargin: "100px" }
);


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenu.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelHeaderMenu: () => (/* binding */ PanelHeaderMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/Menu.tsx");




function PanelHeaderMenu({ items }) {
  const renderItems = (items2) => {
    return items2.map((item) => {
      switch (item.type) {
        case "divider":
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Menu.Divider, {}, item.text);
        case "group":
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Menu.Group, { label: item.text, children: item.subMenu ? renderItems(item.subMenu) : void 0 }, item.text);
        default:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Menu.Item,
            {
              label: item.text,
              icon: item.iconClassName,
              childItems: item.subMenu ? renderItems(item.subMenu) : void 0,
              url: item.href,
              onClick: item.onClick,
              shortcut: item.shortcut,
              testId: _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.components.Panels.Panel.menuItems(item.text)
            },
            item.text
          );
      }
    });
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Menu, { children: renderItems(items) });
}


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuProvider.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelHeaderMenuProvider: () => (/* binding */ PanelHeaderMenuProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/datetime/common.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/pluginExtensions.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/pluginExtensions/usePluginLinks.ts");
/* harmony import */ var _utils_getPanelMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/utils/getPanelMenu.ts");





function PanelHeaderMenuProvider({ panel, dashboard, loadingState, children }) {
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => createExtensionContext(panel, dashboard), [panel, dashboard]);
  const { links } = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.usePluginLinks)({
    extensionPointId: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginExtensionPoints.DashboardPanelMenu,
    context,
    limitPerPlugin: 3
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setItems((0,_utils_getPanelMenu__WEBPACK_IMPORTED_MODULE_4__.getPanelMenu)(dashboard, panel, links));
  }, [dashboard, panel, loadingState, setItems, links]);
  return children({ items });
}
function createExtensionContext(panel, dashboard) {
  return {
    id: panel.id,
    pluginId: panel.type,
    title: panel.title,
    timeRange: dashboard.time,
    timeZone: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getTimeZone)({
      timeZone: dashboard.timezone
    }),
    dashboard: {
      uid: dashboard.uid,
      title: dashboard.title,
      tags: Array.from(dashboard.tags)
    },
    targets: panel.targets,
    scopedVars: panel.scopedVars,
    data: panel.getQueryRunner().getLastResult()
  };
}


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelHeaderMenuWrapper: () => (/* binding */ PanelHeaderMenuWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _PanelHeaderMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenu.tsx");
/* harmony import */ var _PanelHeaderMenuProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuProvider.tsx");




function PanelHeaderMenuWrapper({ style, panel, dashboard, loadingState }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PanelHeaderMenuProvider__WEBPACK_IMPORTED_MODULE_2__.PanelHeaderMenuProvider, { panel, dashboard, loadingState, children: ({ items }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PanelHeaderMenu__WEBPACK_IMPORTED_MODULE_1__.PanelHeaderMenu, { style, items }) });
}


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderTitleItems.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelHeaderTitleItems: () => (/* binding */ PanelHeaderTitleItems)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/alerts.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/DateTimePickers/TimeRangePicker.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _PanelLinks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelLinks.tsx");
/* harmony import */ var _PanelHeaderNotices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderNotices.tsx");







function PanelHeaderTitleItems(props) {
  const { alertState, data, panelId, onShowPanelLinks, panelLinks } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const alertStateItem = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip, { content: alertState ?? "unknown", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.PanelChrome.TitleItem,
    {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)({
        [styles.ok]: alertState === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AlertState.OK,
        [styles.pending]: alertState === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AlertState.Pending || alertState === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AlertState.Recovering,
        [styles.alerting]: alertState === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AlertState.Alerting
      }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: alertState === "alerting" ? "heart-break" : "heart", size: "md" })
    }
  ) });
  const timeshift = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: data.request && data.request.timeInfo && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip, { content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TimePickerTooltip, { timeRange: data.request?.range, timeZone: data.request?.timezone }), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.PanelChrome.TitleItem, { className: styles.timeshift, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "clock-nine", size: "md" }),
    " ",
    data.request?.timeInfo
  ] }) }) });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    panelLinks && panelLinks.length > 0 && onShowPanelLinks && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PanelLinks__WEBPACK_IMPORTED_MODULE_8__.PanelLinks, { onShowPanelLinks, panelLinks }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PanelHeaderNotices__WEBPACK_IMPORTED_MODULE_9__.PanelHeaderNotices, { panelId, frames: data.series }),
    timeshift,
    alertState && alertStateItem
  ] });
}
const getStyles = (theme) => {
  return {
    ok: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.success.text,
      "&:hover": {
        color: theme.colors.emphasize(theme.colors.success.text, 0.03)
      }
    }),
    pending: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.warning.text,
      "&:hover": {
        color: theme.colors.emphasize(theme.colors.warning.text, 0.03)
      }
    }),
    alerting: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.error.text,
      "&:hover": {
        color: theme.colors.emphasize(theme.colors.error.text, 0.03)
      }
    }),
    timeshift: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.text.link,
      gap: theme.spacing(0.5),
      whiteSpace: "nowrap",
      "&:hover": {
        color: theme.colors.emphasize(theme.colors.text.link, 0.03)
      }
    }),
    angularNotice: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.warning.text
    })
  };
};


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelLinks.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelLinks: () => (/* binding */ PanelLinks)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/Menu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/ToolbarButton/ToolbarButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Dropdown/Dropdown.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





function PanelLinks({ panelLinks, onShowPanelLinks }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const getLinksContent = () => {
    const interpolatedLinks = onShowPanelLinks();
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Menu, { children: interpolatedLinks?.map((link, idx) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, { label: link.title, url: link.href, target: link.target, onClick: link.onClick }, idx);
    }) });
  };
  if (panelLinks.length === 1) {
    const linkModel = onShowPanelLinks()[0];
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.PanelChrome.TitleItem,
      {
        href: linkModel.href,
        onClick: linkModel.onClick,
        target: linkModel.target,
        title: linkModel.title,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "external-link-alt", size: "md" })
      }
    );
  } else {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Dropdown, { overlay: getLinksContent, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton,
      {
        icon: "external-link-alt",
        iconSize: "md",
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashboard.panel-links.aria-label-panel-links", "Panel links"),
        className: styles.menuTrigger
      }
    ) });
  }
}
const getStyles = (theme) => {
  return {
    menuTrigger: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "100%",
      background: "inherit",
      border: "none",
      borderRadius: `${theme.shape.radius.default}`,
      cursor: "context-menu"
    })
  };
};


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelLoadTimeMonitor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelLoadTimeMonitor: () => (/* binding */ PanelLoadTimeMonitor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/sdk/registerFaro.js");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_log_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/log_events.ts");





const PanelLoadTimeMonitor = (props) => {
  const startLoadTime = performance.now();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!app_core_config__WEBPACK_IMPORTED_MODULE_2__.config.grafanaJavascriptAgent.enabled) {
      return;
    }
    requestAnimationFrame(() => {
      setTimeout(() => {
        _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_1__.faro.api.pushMeasurement(
          {
            type: app_core_log_events__WEBPACK_IMPORTED_MODULE_3__.PanelLogEvents.MEASURE_PANEL_LOAD_TIME_EVENT,
            values: {
              start_loading_time_ms: startLoadTime,
              load_time_ms: performance.now() - startLoadTime
            }
          },
          {
            context: {
              panel_type: props.panelType,
              panel_id: String(props.panelId),
              panel_title: props.panelTitle
            }
          }
        );
      }, 0);
    });
    return;
  }, []);
  return null;
};


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelStateWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelStateWrapper: () => (/* binding */ PanelStateWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/dataframe/processDataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/events/common.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/datetime/moment_wrapper.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/context/plugins/PluginContextProvider.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-data/src/types/app.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-data/src/types/time.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-data/src/types/dashboard.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/PanelContext.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/ErrorBoundary/ErrorBoundary.tsx");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_profiler__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/core/profiler.ts");
/* harmony import */ var app_features_annotations_api__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/annotations/api.ts");
/* harmony import */ var app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var app_features_variables_adhoc_actions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/variables/adhoc/actions.ts");
/* harmony import */ var app_plugins_datasource_grafana_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/plugins/datasource/grafana/utils.ts");
/* harmony import */ var app_plugins_panel_timeseries_overrides_colorSeriesConfigFactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/plugins/panel/timeseries/overrides/colorSeriesConfigFactory.ts");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var app_types_events__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var _utils_getPanelChromeProps__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/dashboard/utils/getPanelChromeProps.tsx");
/* harmony import */ var _utils_loadSnapshotData__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./public/app/features/dashboard/utils/loadSnapshotData.ts");
/* harmony import */ var _PanelHeader_PanelHeaderMenuWrapper__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuWrapper.tsx");
/* harmony import */ var _PanelLoadTimeMonitor__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelLoadTimeMonitor.tsx");
/* harmony import */ var _SeriesVisibilityConfigFactory__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./public/app/features/dashboard/dashgrid/SeriesVisibilityConfigFactory.ts");
/* harmony import */ var _liveTimer__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("./public/app/features/dashboard/dashgrid/liveTimer.ts");
/* harmony import */ var _panelOptionsLogger__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("./public/app/features/dashboard/dashgrid/panelOptionsLogger.ts");




























const DEFAULT_PLUGIN_ERROR = "Error in plugin";
class PanelStateWrapper extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor(props) {
    super(props);
    this.timeSrv = (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_29__.getTimeSrv)();
    this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    this.eventFilter = { onlyLocal: true };
    this.panelOptionsLogger = void 0;
    // Due to a mutable panel model we get the sync settings via function that proactively reads from the model
    this.getSync = () => this.props.isEditing ? _grafana_data__WEBPACK_IMPORTED_MODULE_11__.DashboardCursorSync.Off : this.props.dashboard.graphTooltip;
    this.onInstanceStateChange = (value) => {
      this.props.onInstanceStateChange(value);
      this.setState({
        context: {
          ...this.state.context,
          instanceState: value
        }
      });
    };
    this.onUpdateData = (frames) => {
      return (0,app_plugins_datasource_grafana_utils__WEBPACK_IMPORTED_MODULE_24__.onUpdatePanelSnapshotData)(this.props.panel, frames);
    };
    this.onSeriesColorChange = (label, color) => {
      this.onFieldConfigChange((0,app_plugins_panel_timeseries_overrides_colorSeriesConfigFactory__WEBPACK_IMPORTED_MODULE_25__.changeSeriesColorConfigFactory)(label, color, this.props.panel.fieldConfig));
    };
    this.onSeriesVisibilityChange = (label, mode) => {
      this.onFieldConfigChange(
        (0,_SeriesVisibilityConfigFactory__WEBPACK_IMPORTED_MODULE_34__.seriesVisibilityConfigFactory)(label, mode, this.props.panel.fieldConfig, this.state.data.series)
      );
    };
    this.onToggleLegendSort = (sortKey) => {
      const legendOptions = this.props.panel.options.legend;
      if (!legendOptions) {
        return;
      }
      let sortDesc = legendOptions.sortDesc;
      let sortBy = legendOptions.sortBy;
      if (sortKey !== sortBy) {
        sortDesc = void 0;
      }
      if (sortDesc === false) {
        sortBy = void 0;
        sortDesc = void 0;
      } else {
        sortDesc = !sortDesc;
        sortBy = sortKey;
      }
      this.onOptionsChange({
        ...this.props.panel.options,
        legend: { ...legendOptions, sortBy, sortDesc }
      });
    };
    this.onRefresh = () => {
      const { dashboard, panel, isInView, width } = this.props;
      if (!dashboard.snapshot && !isInView) {
        panel.refreshWhenInView = true;
        return;
      }
      const timeData = (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_21__.applyPanelTimeOverrides)(panel, this.timeSrv.timeRange());
      if (this.wantsQueryExecution) {
        if (width < 0) {
          return;
        }
        panel.refreshWhenInView = false;
        panel.runAllPanelQueries({
          dashboardUID: dashboard.uid,
          dashboardTimezone: dashboard.getTimezone(),
          dashboardTitle: dashboard.title,
          timeData,
          width
        });
      } else {
        this.setState({
          data: { ...this.state.data, timeRange: this.timeSrv.timeRange() },
          renderCounter: this.state.renderCounter + 1,
          liveTime: void 0
        });
      }
    };
    this.onRender = () => {
      const stateUpdate = { renderCounter: this.state.renderCounter + 1 };
      this.setState(stateUpdate);
    };
    this.onOptionsChange = (options) => {
      this.props.panel.updateOptions(options);
    };
    this.onFieldConfigChange = (config2) => {
      this.props.panel.updateFieldConfig(config2);
    };
    this.onPanelError = (error) => {
      if (app_core_config__WEBPACK_IMPORTED_MODULE_18__["default"].featureToggles.panelMonitoring && this.getPanelContextApp() === _grafana_data__WEBPACK_IMPORTED_MODULE_9__.CoreApp.PanelEditor) {
        this.logPanelChangesOnError();
      }
      const errorMessage = error.message || DEFAULT_PLUGIN_ERROR;
      if (this.state.errorMessage !== errorMessage) {
        this.setState({ errorMessage });
      }
    };
    this.onPanelErrorRecover = () => {
      this.setState({ errorMessage: void 0 });
    };
    this.onAnnotationCreate = async (event) => {
      const isRegion = event.from !== event.to;
      const anno = {
        dashboardUID: this.props.dashboard.uid,
        panelId: this.props.panel.id,
        isRegion,
        time: event.from,
        timeEnd: isRegion ? event.to : 0,
        tags: event.tags,
        text: event.description
      };
      await (0,app_features_annotations_api__WEBPACK_IMPORTED_MODULE_20__.annotationServer)().save(anno);
      (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_28__.getDashboardQueryRunner)().run({ dashboard: this.props.dashboard, range: this.timeSrv.timeRange() });
      this.state.context.eventBus.publish(new _grafana_data__WEBPACK_IMPORTED_MODULE_5__.AnnotationChangeEvent(anno));
    };
    this.onAnnotationDelete = async (id) => {
      await (0,app_features_annotations_api__WEBPACK_IMPORTED_MODULE_20__.annotationServer)().delete({ id });
      (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_28__.getDashboardQueryRunner)().run({ dashboard: this.props.dashboard, range: this.timeSrv.timeRange() });
      this.state.context.eventBus.publish(new _grafana_data__WEBPACK_IMPORTED_MODULE_5__.AnnotationChangeEvent({ id }));
    };
    this.onAnnotationUpdate = async (event) => {
      const isRegion = event.from !== event.to;
      const anno = {
        id: event.id,
        dashboardUID: this.props.dashboard.uid,
        panelId: this.props.panel.id,
        isRegion,
        time: event.from,
        timeEnd: isRegion ? event.to : 0,
        tags: event.tags,
        text: event.description
      };
      await (0,app_features_annotations_api__WEBPACK_IMPORTED_MODULE_20__.annotationServer)().update(anno);
      (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_28__.getDashboardQueryRunner)().run({ dashboard: this.props.dashboard, range: this.timeSrv.timeRange() });
      this.state.context.eventBus.publish(new _grafana_data__WEBPACK_IMPORTED_MODULE_5__.AnnotationChangeEvent(anno));
    };
    this.onChangeTimeRange = (timeRange) => {
      this.timeSrv.setTime({
        from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.toUtc)(timeRange.from),
        to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.toUtc)(timeRange.to)
      });
    };
    this.onAddAdHocFilter = (filter) => {
      const { key, value, operator } = filter;
      const datasourceInstance = (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_22__.getDatasourceSrv)().getInstanceSettings(this.props.panel.datasource);
      const datasourceRef = datasourceInstance && (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.getDataSourceRef)(datasourceInstance);
      if (!datasourceRef) {
        return;
      }
      (0,app_store_store__WEBPACK_IMPORTED_MODULE_26__.dispatch)((0,app_features_variables_adhoc_actions__WEBPACK_IMPORTED_MODULE_23__.applyFilterFromTable)({ datasource: datasourceRef, key, operator, value }));
    };
    const eventBus = props.dashboard.events.newScopedBus(`panel:${props.panel.id}`, this.eventFilter);
    this.debouncedSetPanelAttention = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(this.setPanelAttention.bind(this), 100);
    this.state = {
      isFirstLoad: true,
      renderCounter: 0,
      context: {
        eventsScope: "__global_",
        eventBus,
        app: this.getPanelContextApp(),
        sync: this.getSync,
        onSeriesColorChange: this.onSeriesColorChange,
        onToggleSeriesVisibility: this.onSeriesVisibilityChange,
        onAnnotationCreate: this.onAnnotationCreate,
        onAnnotationUpdate: this.onAnnotationUpdate,
        onAnnotationDelete: this.onAnnotationDelete,
        onInstanceStateChange: this.onInstanceStateChange,
        onToggleLegendSort: this.onToggleLegendSort,
        canAddAnnotations: props.dashboard.canAddAnnotations.bind(props.dashboard),
        canEditAnnotations: props.dashboard.canEditAnnotations.bind(props.dashboard),
        canDeleteAnnotations: props.dashboard.canDeleteAnnotations.bind(props.dashboard),
        canExecuteActions: props.dashboard.canExecuteActions.bind(props.dashboard),
        onAddAdHocFilter: this.onAddAdHocFilter,
        onUpdateData: this.onUpdateData
      },
      data: this.getInitialPanelDataState()
    };
    if (app_core_config__WEBPACK_IMPORTED_MODULE_18__["default"].featureToggles.panelMonitoring && this.getPanelContextApp() === _grafana_data__WEBPACK_IMPORTED_MODULE_9__.CoreApp.PanelEditor) {
      const panelInfo = {
        panelId: String(props.panel.id),
        panelType: props.panel.type,
        panelTitle: props.panel.title
      };
      this.panelOptionsLogger = new _panelOptionsLogger__WEBPACK_IMPORTED_MODULE_36__.PanelOptionsLogger(props.panel.getOptions(), props.panel.fieldConfig, panelInfo);
    }
  }
  getPanelContextApp() {
    if (this.props.isEditing) {
      return _grafana_data__WEBPACK_IMPORTED_MODULE_9__.CoreApp.PanelEditor;
    }
    if (this.props.isViewing) {
      return _grafana_data__WEBPACK_IMPORTED_MODULE_9__.CoreApp.PanelViewer;
    }
    return _grafana_data__WEBPACK_IMPORTED_MODULE_9__.CoreApp.Dashboard;
  }
  getInitialPanelDataState() {
    return {
      state: _grafana_data__WEBPACK_IMPORTED_MODULE_12__.LoadingState.NotStarted,
      series: [],
      timeRange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_10__.getDefaultTimeRange)()
    };
  }
  componentDidMount() {
    const { panel, dashboard } = this.props;
    this.subs.add(panel.events.subscribe(_grafana_runtime__WEBPACK_IMPORTED_MODULE_13__.RefreshEvent, this.onRefresh));
    this.subs.add(panel.events.subscribe(app_types_events__WEBPACK_IMPORTED_MODULE_27__.RenderEvent, this.onRender));
    dashboard.panelInitialized(this.props.panel);
    if (this.hasPanelSnapshot) {
      this.setState({
        data: (0,_utils_loadSnapshotData__WEBPACK_IMPORTED_MODULE_31__.loadSnapshotData)(panel, dashboard),
        isFirstLoad: false
      });
      return;
    }
    if (!this.wantsQueryExecution) {
      this.setState({ isFirstLoad: false });
    }
    this.subs.add(
      panel.getQueryRunner().getData({ withTransforms: true, withFieldConfig: true }).subscribe({
        next: (data) => this.onDataUpdate(data)
      })
    );
    _liveTimer__WEBPACK_IMPORTED_MODULE_35__.liveTimer.listen(this);
  }
  componentWillUnmount() {
    this.subs.unsubscribe();
    _liveTimer__WEBPACK_IMPORTED_MODULE_35__.liveTimer.remove(this);
  }
  liveTimeChanged(liveTime) {
    const { data } = this.state;
    if (data.timeRange) {
      const delta = liveTime.to.valueOf() - data.timeRange.to.valueOf();
      if (delta < 100) {
        console.log("Skip tick render", this.props.panel.title, delta);
        return;
      }
    }
    this.setState({ liveTime });
  }
  componentDidUpdate(prevProps) {
    const { isInView, width, panel } = this.props;
    const { context } = this.state;
    const app = this.getPanelContextApp();
    if (context.app !== app) {
      this.setState({
        context: {
          ...context,
          app
        }
      });
    }
    if (isInView !== prevProps.isInView) {
      if (isInView) {
        if (panel.refreshWhenInView) {
          this.onRefresh();
        }
      }
    }
    if (width !== prevProps.width) {
      _liveTimer__WEBPACK_IMPORTED_MODULE_35__.liveTimer.updateInterval(this);
    }
  }
  // Updates the response with information from the stream
  // The next is outside a react synthetic event so setState is not batched
  // So in this context we can only do a single call to setState
  onDataUpdate(data) {
    const { dashboard, panel, plugin } = this.props;
    if (plugin.meta.skipDataQuery) {
      this.setState({ data: this.getInitialPanelDataState() });
      return;
    }
    let { isFirstLoad } = this.state;
    let errorMessage;
    switch (data.state) {
      case _grafana_data__WEBPACK_IMPORTED_MODULE_12__.LoadingState.Loading:
        if (this.state.data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_12__.LoadingState.Loading) {
          return;
        }
        break;
      case _grafana_data__WEBPACK_IMPORTED_MODULE_12__.LoadingState.Error:
        const { error, errors } = data;
        if (errors?.length) {
          if (errors.length === 1) {
            errorMessage = errors[0].message;
          } else {
            errorMessage = "Multiple errors found. Click for more details";
          }
        } else if (error) {
          if (errorMessage !== error.message) {
            errorMessage = error.message;
          }
        }
        break;
      case _grafana_data__WEBPACK_IMPORTED_MODULE_12__.LoadingState.Done:
        if (dashboard.snapshot) {
          panel.snapshotData = data.series.map((frame) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toDataFrameDTO)(frame));
        }
        if (isFirstLoad) {
          isFirstLoad = false;
        }
        break;
    }
    this.setState({ isFirstLoad, errorMessage, data, liveTime: void 0 });
  }
  logPanelChangesOnError() {
    this.panelOptionsLogger.logChanges(this.props.panel.getOptions(), this.props.panel.fieldConfig);
  }
  get hasPanelSnapshot() {
    const { panel } = this.props;
    return panel.snapshotData && panel.snapshotData.length;
  }
  get wantsQueryExecution() {
    return !(this.props.plugin.meta.skipDataQuery || this.hasPanelSnapshot);
  }
  shouldSignalRenderingCompleted(loadingState, pluginMeta) {
    return loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_12__.LoadingState.Done || loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_12__.LoadingState.Streaming || loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_12__.LoadingState.Error || pluginMeta.skipDataQuery;
  }
  skipFirstRender(loadingState) {
    const { isFirstLoad } = this.state;
    return this.wantsQueryExecution && isFirstLoad && (loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_12__.LoadingState.Loading || loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_12__.LoadingState.NotStarted);
  }
  renderPanelContent(innerWidth, innerHeight) {
    const { panel, plugin, dashboard } = this.props;
    const { renderCounter, data } = this.state;
    const { state: loadingState } = data;
    if (this.skipFirstRender(loadingState)) {
      return null;
    }
    if (this.shouldSignalRenderingCompleted(loadingState, plugin.meta)) {
      app_core_profiler__WEBPACK_IMPORTED_MODULE_19__.profiler.renderingCompleted();
    }
    const PanelComponent = plugin.panel;
    const timeRange = this.state.liveTime ?? data.timeRange ?? this.timeSrv.timeRange();
    const panelOptions = panel.getOptions();
    this.eventFilter.onlyLocal = dashboard.graphTooltip === 0;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.PanelContextProvider, { value: this.state.context, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_data__WEBPACK_IMPORTED_MODULE_8__.PluginContextProvider, { meta: plugin.meta, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        PanelComponent,
        {
          id: panel.id,
          data,
          title: panel.title,
          timeRange,
          timeZone: this.props.dashboard.getTimezone(),
          options: panelOptions,
          fieldConfig: panel.fieldConfig,
          transparent: panel.transparent,
          width: innerWidth,
          height: innerHeight,
          renderCounter,
          replaceVariables: panel.replaceVariables,
          onOptionsChange: this.onOptionsChange,
          onFieldConfigChange: this.onFieldConfigChange,
          onChangeTimeRange: this.onChangeTimeRange,
          eventBus: dashboard.events
        }
      ),
      app_core_config__WEBPACK_IMPORTED_MODULE_18__["default"].featureToggles.panelMonitoring && this.state.errorMessage === void 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PanelLoadTimeMonitor__WEBPACK_IMPORTED_MODULE_33__.PanelLoadTimeMonitor, { panelType: plugin.meta.id, panelId: panel.id, panelTitle: panel.title })
    ] }) }) });
  }
  setPanelAttention() {
    app_core_app_events__WEBPACK_IMPORTED_MODULE_17__["default"].publish(new _grafana_data__WEBPACK_IMPORTED_MODULE_5__.SetPanelAttentionEvent({ panelId: this.props.panel.id }));
  }
  debouncedSetPanelAttention() {
  }
  render() {
    const { dashboard, panel, width, height, plugin } = this.props;
    const { errorMessage, data } = this.state;
    const { transparent } = panel;
    const panelChromeProps = (0,_utils_getPanelChromeProps__WEBPACK_IMPORTED_MODULE_30__.getPanelChromeProps)({ ...this.props, data });
    const hoverHeaderOffset = (panel.gridPos?.y ?? 0) === 0 ? -16 : void 0;
    const menu = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { "data-testid": "panel-dropdown", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PanelHeader_PanelHeaderMenuWrapper__WEBPACK_IMPORTED_MODULE_32__.PanelHeaderMenuWrapper, { panel, dashboard, loadingState: data.state }) });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.PanelChrome,
      {
        width,
        height,
        title: panelChromeProps.title,
        loadingState: data.state,
        statusMessage: errorMessage,
        statusMessageOnClick: panelChromeProps.onOpenErrorInspect,
        description: panelChromeProps.description,
        titleItems: panelChromeProps.titleItems,
        menu: this.props.hideMenu ? void 0 : menu,
        dragClass: panelChromeProps.dragClass,
        dragClassCancel: "grid-drag-cancel",
        padding: panelChromeProps.padding,
        hoverHeaderOffset,
        hoverHeader: panelChromeProps.hasOverlayHeader(),
        displayMode: transparent ? "transparent" : "default",
        onCancelQuery: panelChromeProps.onCancelQuery,
        onFocus: () => this.setPanelAttention(),
        onMouseEnter: () => this.setPanelAttention(),
        onMouseMove: () => this.debouncedSetPanelAttention(),
        children: (innerWidth, innerHeight) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.ErrorBoundary,
          {
            boundaryName: "panel-state-wrapper",
            dependencies: [data, plugin, panel.getOptions()],
            onError: this.onPanelError,
            onRecover: this.onPanelErrorRecover,
            children: ({ error }) => {
              if (error) {
                return null;
              }
              return this.renderPanelContent(innerWidth, innerHeight);
            }
          }
        ) })
      }
    );
  }
}


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/panelOptionsLogger.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelOptionsLogger: () => (/* binding */ PanelOptionsLogger)
/* harmony export */ });
/* harmony import */ var _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/faro-core/dist/esm/sdk/registerFaro.js");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_log_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/log_events.ts");




class PanelOptionsLogger {
  constructor(initialPanelOptions, initialFieldConfig, panelLogInfo) {
    this.logChanges = (latestPanelOptions, latestFieldConfig) => {
      this.logPanelOptionChanges(latestPanelOptions, this.initialPanelOptions);
      this.logFieldConfigChanges(latestFieldConfig, this.initialFieldConfig);
      this.initialPanelOptions = latestPanelOptions;
      this.initialFieldConfig = latestFieldConfig;
    };
    this.logPanelEvent = (eventName, newKey, newVal, oldVal) => {
      if (!app_core_config__WEBPACK_IMPORTED_MODULE_1__.config.grafanaJavascriptAgent.enabled) {
        return;
      }
      const logObj = {
        key: newKey,
        newValue: newVal,
        oldValue: oldVal ?? "",
        panelTitle: this.panelLogInfo.panelTitle,
        panelId: this.panelLogInfo.panelId,
        panelType: this.panelLogInfo.panelType
      };
      _grafana_faro_web_sdk__WEBPACK_IMPORTED_MODULE_0__.faro.api.pushEvent(eventName, logObj);
    };
    this.logPanelOptionChanges = (panelOptions, oldPanelOptions) => {
      if (typeof panelOptions !== "object" || panelOptions === null) {
        return;
      }
      if (typeof oldPanelOptions !== "object" || oldPanelOptions === null) {
        return;
      }
      const oldPanelOptionsUnknown = { ...oldPanelOptions };
      for (const [key, value] of Object.entries(panelOptions)) {
        const newValue = typeof value !== "string" ? JSON.stringify(value) : value;
        const oldValue = typeof value !== "string" ? JSON.stringify(oldPanelOptionsUnknown[key]) : String(oldPanelOptionsUnknown[key]);
        if (oldPanelOptionsUnknown[key] === void 0) {
          this.logPanelEvent(app_core_log_events__WEBPACK_IMPORTED_MODULE_2__.PanelLogEvents.NEW_PANEL_OPTION_EVENT, key, newValue);
        } else if (oldValue !== newValue) {
          this.logPanelEvent(app_core_log_events__WEBPACK_IMPORTED_MODULE_2__.PanelLogEvents.PANEL_OPTION_CHANGED_EVENT, key, newValue, oldValue);
        }
      }
    };
    this.logFieldConfigChanges = (fieldConfig, oldFieldConfig) => {
      const oldOverridesStr = JSON.stringify(oldFieldConfig.overrides);
      const newOverridesStr = JSON.stringify(fieldConfig.overrides);
      if (oldOverridesStr !== newOverridesStr) {
        this.logPanelEvent(
          app_core_log_events__WEBPACK_IMPORTED_MODULE_2__.PanelLogEvents.FIELD_CONFIG_OVERRIDES_CHANGED_EVENT,
          app_core_log_events__WEBPACK_IMPORTED_MODULE_2__.FIELD_CONFIG_OVERRIDES_KEY,
          newOverridesStr,
          oldOverridesStr
        );
      }
      const oldDefaults = { ...oldFieldConfig.defaults };
      for (const [key, value] of Object.entries(fieldConfig.defaults)) {
        if (key === app_core_log_events__WEBPACK_IMPORTED_MODULE_2__.FIELD_CONFIG_CUSTOM_KEY) {
          continue;
        }
        const newValue = typeof value !== "string" ? JSON.stringify(value) : value;
        const oldValue = typeof value !== "string" ? JSON.stringify(oldDefaults[key]) : String(oldDefaults[key]);
        if (oldDefaults[key] === void 0) {
          this.logPanelEvent(app_core_log_events__WEBPACK_IMPORTED_MODULE_2__.PanelLogEvents.NEW_DEFAULT_FIELD_CONFIG_EVENT, key, newValue);
        } else if (oldValue !== newValue) {
          this.logPanelEvent(app_core_log_events__WEBPACK_IMPORTED_MODULE_2__.PanelLogEvents.DEFAULT_FIELD_CONFIG_CHANGED_EVENT, key, newValue, oldValue);
        }
      }
      if (!fieldConfig.defaults.custom || oldDefaults.custom === void 0) {
        return;
      }
      const oldCustom = { ...oldDefaults.custom };
      for (const [key, value] of Object.entries(fieldConfig.defaults.custom)) {
        if (oldDefaults.custom === null || oldCustom[key] === null) {
          continue;
        }
        const newValue = typeof value !== "string" ? JSON.stringify(value) : value;
        const oldValue = typeof value !== "string" ? JSON.stringify(oldCustom[key]) : String(oldCustom[key]);
        if (oldCustom[key] === void 0) {
          this.logPanelEvent(app_core_log_events__WEBPACK_IMPORTED_MODULE_2__.PanelLogEvents.NEW_CUSTOM_FIELD_CONFIG_EVENT, key, newValue);
        } else if (oldValue !== newValue) {
          this.logPanelEvent(app_core_log_events__WEBPACK_IMPORTED_MODULE_2__.PanelLogEvents.CUSTOM_FIELD_CONFIG_CHANGED_EVENT, key, newValue, oldValue);
        }
      }
    };
    this.initialPanelOptions = initialPanelOptions;
    this.initialFieldConfig = initialFieldConfig;
    this.panelLogInfo = panelLogInfo;
  }
}


/***/ }),

/***/ "./public/app/features/dashboard/state/initDashboard.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initDashboard: () => (/* binding */ initDashboard)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/events/common.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/utils/location.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/datetime/moment_wrapper.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var app_core_utils_metrics__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/utils/metrics.ts");
/* harmony import */ var app_features_dashboard_services_DashboardLoaderSrv__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/dashboard/services/DashboardLoaderSrv.ts");
/* harmony import */ var app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var app_features_dashboard_scene_pages_DashboardScenePageStateManager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/dashboard-scene/pages/DashboardScenePageStateManager.ts");
/* harmony import */ var app_features_dashboard_scene_serialization_buildNewDashboardSaveModel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/dashboard-scene/serialization/buildNewDashboardSaveModel.ts");
/* harmony import */ var app_features_folders_state_actions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
/* harmony import */ var app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/live/dashboard/dashboardWatcher.ts");
/* harmony import */ var app_features_playlist_PlaylistSrv__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/playlist/PlaylistSrv.ts");
/* harmony import */ var app_features_variables_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var app_types_dashboard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/types/dashboard.ts");
/* harmony import */ var _core_services_context_srv__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts");
/* harmony import */ var _variables_state_actions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/variables/state/actions.ts");
/* harmony import */ var _variables_state_selectors__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/variables/state/selectors.ts");
/* harmony import */ var _utils_tracking__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/dashboard/utils/tracking.ts");
/* harmony import */ var _DashboardModel__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/dashboard/state/DashboardModel.ts");
/* harmony import */ var _analyticsProcessor__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/dashboard/state/analyticsProcessor.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/dashboard/state/reducers.ts");




























const INIT_DASHBOARD_MEASUREMENT = "initDashboard";
async function fetchDashboard(args, dispatch, getState) {
  try {
    switch (args.routeName) {
      case app_types_dashboard__WEBPACK_IMPORTED_MODULE_22__.DashboardRoutes.Home: {
        const stateManager = (0,app_features_dashboard_scene_pages_DashboardScenePageStateManager__WEBPACK_IMPORTED_MODULE_16__.getDashboardScenePageStateManager)("v1");
        const cachedDashboard = stateManager.getDashboardFromCache(app_features_dashboard_scene_pages_DashboardScenePageStateManager__WEBPACK_IMPORTED_MODULE_16__.HOME_DASHBOARD_CACHE_KEY);
        if (cachedDashboard) {
          return cachedDashboard;
        }
        const dashDTO = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_10__.backendSrv.get("/api/dashboards/home");
        if ((0,app_types_dashboard__WEBPACK_IMPORTED_MODULE_22__.isRedirectResponse)(dashDTO)) {
          const newUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.locationUtil.stripBaseFromUrl(dashDTO.redirectUri);
          _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.locationService.replace(newUrl);
          return null;
        }
        dashDTO.meta.canSave = false;
        dashDTO.meta.canShare = false;
        dashDTO.meta.canStar = false;
        return dashDTO;
      }
      case app_types_dashboard__WEBPACK_IMPORTED_MODULE_22__.DashboardRoutes.Public: {
        return await app_features_dashboard_services_DashboardLoaderSrv__WEBPACK_IMPORTED_MODULE_13__.dashboardLoaderSrv.loadDashboard("public", args.urlSlug, args.accessToken);
      }
      case app_types_dashboard__WEBPACK_IMPORTED_MODULE_22__.DashboardRoutes.Normal: {
        const dashDTO = await app_features_dashboard_services_DashboardLoaderSrv__WEBPACK_IMPORTED_MODULE_13__.dashboardLoaderSrv.loadDashboard(args.urlType, args.urlSlug, args.urlUid);
        if (dashDTO.meta.folderUid) {
          try {
            await dispatch((0,app_features_folders_state_actions__WEBPACK_IMPORTED_MODULE_18__.getFolderByUid)(dashDTO.meta.folderUid));
          } catch (err) {
            console.warn("Error fetching parent folder", dashDTO.meta.folderUid, "for dashboard", err);
          }
        }
        if (args.fixUrl && dashDTO.meta.url && !app_features_playlist_PlaylistSrv__WEBPACK_IMPORTED_MODULE_20__.playlistSrv.state.isPlaying) {
          const dashboardUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.locationUtil.stripBaseFromUrl(dashDTO.meta.url);
          const currentPath = _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.locationService.getLocation().pathname;
          if (dashboardUrl !== currentPath) {
            _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.locationService.replace({
              ..._grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.locationService.getLocation(),
              pathname: dashboardUrl
            });
            console.log("not correct url correcting", dashboardUrl, currentPath);
          }
        }
        return dashDTO;
      }
      case app_types_dashboard__WEBPACK_IMPORTED_MODULE_22__.DashboardRoutes.New: {
        if (args.urlFolderUid) {
          await dispatch((0,app_features_folders_state_actions__WEBPACK_IMPORTED_MODULE_18__.getFolderByUid)(args.urlFolderUid));
        }
        return await (0,app_features_dashboard_scene_serialization_buildNewDashboardSaveModel__WEBPACK_IMPORTED_MODULE_17__.buildNewDashboardSaveModel)(args.urlFolderUid);
      }
      default:
        throw { message: "Unknown route " + args.routeName };
    }
  } catch (err) {
    if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.isFetchError)(err) && err.cancelled) {
      return null;
    }
    dispatch(
      (0,_reducers__WEBPACK_IMPORTED_MODULE_30__.dashboardInitFailed)({
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard.fetch-dashboard.message.failed-to-fetch-dashboard", "Failed to fetch dashboard"),
        error: err
      })
    );
    console.error(err);
    return null;
  }
}
const getQueriesByDatasource = (panels, queries = {}) => {
  panels.forEach((panel) => {
    if (panel.panels) {
      getQueriesByDatasource(panel.panels, queries);
    } else if (panel.targets) {
      panel.targets.forEach((target) => {
        if (target.datasource?.type) {
          if (queries[target.datasource.type]) {
            queries[target.datasource.type].push(target);
          } else {
            queries[target.datasource.type] = [target];
          }
        }
      });
    }
  });
  return queries;
};
function initDashboard(args) {
  return async (dispatch, getState) => {
    (0,app_core_utils_metrics__WEBPACK_IMPORTED_MODULE_12__.startMeasure)(INIT_DASHBOARD_MEASUREMENT);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_30__.dashboardInitFetching)());
    const dashDTO = await fetchDashboard(args, dispatch, getState);
    const versionBeforeMigration = dashDTO?.dashboard?.version;
    if (!dashDTO) {
      return;
    }
    addPanelsFromLocalStorage(dashDTO);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_30__.dashboardInitServices)());
    let dashboard;
    try {
      dashboard = new _DashboardModel__WEBPACK_IMPORTED_MODULE_28__.DashboardModel(dashDTO.dashboard, dashDTO.meta);
    } catch (err) {
      dispatch(
        (0,_reducers__WEBPACK_IMPORTED_MODULE_30__.dashboardInitFailed)({
          message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard.init-dashboard.message.failed-create-dashboard-model", "Failed create dashboard model"),
          error: err
        })
      );
      console.error(err);
      return;
    }
    const storeState = getState();
    const queryParams = _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.locationService.getSearchObject();
    if (!queryParams.orgId) {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.locationService.partial({ orgId: storeState.user.orgId }, true);
    }
    const timeSrv = (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_15__.getTimeSrv)();
    const dashboardSrv = (0,app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_14__.getDashboardSrv)();
    dashboardSrv.setCurrent(dashboard);
    timeSrv.init(dashboard);
    const dashboardUid = (0,app_features_variables_utils__WEBPACK_IMPORTED_MODULE_21__.toStateKey)(args.urlUid ?? dashboard.uid);
    await dispatch((0,_variables_state_actions__WEBPACK_IMPORTED_MODULE_25__.initVariablesTransaction)(dashboardUid, dashboard));
    const runner = (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_24__.createDashboardQueryRunner)({ dashboard, timeSrv });
    runner.run({ dashboard, range: timeSrv.timeRange() });
    if ((0,_variables_state_selectors__WEBPACK_IMPORTED_MODULE_26__.getIfExistsLastKey)(getState()) !== dashboardUid) {
      return;
    }
    if (getState().dashboard.initPhase !== app_types_dashboard__WEBPACK_IMPORTED_MODULE_22__.DashboardInitPhase.Services) {
      return;
    }
    try {
      dashboard.processRepeats();
      if (queryParams.autofitpanels) {
        dashboard.autoFitPanels(window.innerHeight, queryParams.kiosk);
      }
      if (!_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.publicDashboardAccessToken) {
        args.keybindingSrv.setupDashboardBindings(dashboard);
      }
    } catch (err) {
      if (err instanceof Error) {
        dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_7__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_9__.createErrorNotification)("Dashboard init failed", err)));
      }
      console.error(err);
    }
    if (args.routeName !== app_types_dashboard__WEBPACK_IMPORTED_MODULE_22__.DashboardRoutes.New) {
      (0,_analyticsProcessor__WEBPACK_IMPORTED_MODULE_29__.emitDashboardViewEvent)(dashboard);
      app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_19__.dashboardWatcher.watch(dashboard.uid);
    } else {
      app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_19__.dashboardWatcher.leave();
    }
    if (dashboard.weekStart !== "" && dashboard.weekStart !== void 0) {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.setWeekStart)(dashboard.weekStart);
    } else {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.setWeekStart)(_core_services_context_srv__WEBPACK_IMPORTED_MODULE_23__.contextSrv.user.weekStart);
    }
    app_core_app_events__WEBPACK_IMPORTED_MODULE_8__["default"].publish(
      new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DashboardLoadedEvent({
        dashboardId: dashboard.uid,
        orgId: storeState.user.orgId,
        userId: storeState.user.user?.id,
        grafanaVersion: _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.buildInfo.version,
        queries: getQueriesByDatasource(dashboard.panels)
      })
    );
    const measure = (0,app_core_utils_metrics__WEBPACK_IMPORTED_MODULE_12__.stopMeasure)(INIT_DASHBOARD_MEASUREMENT);
    (0,_utils_tracking__WEBPACK_IMPORTED_MODULE_27__.trackDashboardLoaded)(dashboard, measure?.duration, versionBeforeMigration);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_30__.dashboardInitCompleted)(dashboard));
  };
}
function addPanelsFromLocalStorage(model) {
  const fromLS = app_core_store__WEBPACK_IMPORTED_MODULE_11__["default"].getObject(app_types_dashboard__WEBPACK_IMPORTED_MODULE_22__.DASHBOARD_FROM_LS_KEY);
  if (fromLS) {
    if (fromLS.dashboard.panels) {
      model.dashboard.panels = fromLS.dashboard.panels.concat(model.dashboard.panels);
    }
    if (fromLS.dashboard.time) {
      model.dashboard.time = fromLS.dashboard.time;
    }
    app_core_store__WEBPACK_IMPORTED_MODULE_11__["default"].delete(app_types_dashboard__WEBPACK_IMPORTED_MODULE_22__.DASHBOARD_FROM_LS_KEY);
  }
}


/***/ }),

/***/ "./public/app/features/dashboard/utils/getPanelChromeProps.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPanelChromeProps: () => (/* binding */ getPanelChromeProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/text/markdown.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var app_features_dashboard_scene_utils_interactions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard-scene/utils/interactions.ts");
/* harmony import */ var app_features_inspector_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/inspector/types.ts");
/* harmony import */ var app_features_panel_panellinks_linkSuppliers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/panel/panellinks/linkSuppliers.ts");
/* harmony import */ var _dashgrid_PanelHeader_PanelHeaderTitleItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderTitleItems.tsx");








function getPanelChromeProps(props) {
  function hasOverlayHeader() {
    if (props.data.request && props.data.request.timeInfo) {
      return false;
    }
    return !props.panel.hasTitle();
  }
  const onShowPanelDescription = () => {
    const descriptionMarkdown = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)().replace(props.panel.description, props.panel.scopedVars);
    const interpolatedDescription = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.renderMarkdown)(descriptionMarkdown);
    return interpolatedDescription;
  };
  const onShowPanelLinks = () => {
    const linkSupplier = (0,app_features_panel_panellinks_linkSuppliers__WEBPACK_IMPORTED_MODULE_6__.getPanelLinksSupplier)(props.panel);
    if (!linkSupplier) {
      return [];
    }
    const panelLinks = linkSupplier && linkSupplier.getLinks(props.panel.replaceVariables);
    return panelLinks.map((panelLink) => ({
      ...panelLink,
      onClick: (...args) => {
        app_features_dashboard_scene_utils_interactions__WEBPACK_IMPORTED_MODULE_4__.DashboardInteractions.panelLinkClicked({ has_multiple_links: panelLinks.length > 1 });
        panelLink.onClick?.(...args);
      }
    }));
  };
  const onOpenInspector = (e, tab) => {
    e.stopPropagation();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.partial({ inspect: props.panel.id, inspectTab: tab });
  };
  const onOpenErrorInspect = (e) => {
    e.stopPropagation();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.partial({ inspect: props.panel.id, inspectTab: app_features_inspector_types__WEBPACK_IMPORTED_MODULE_5__.InspectTab.Error });
    app_features_dashboard_scene_utils_interactions__WEBPACK_IMPORTED_MODULE_4__.DashboardInteractions.panelStatusMessageClicked();
  };
  const onCancelQuery = () => {
    props.panel.getQueryRunner().cancelQuery();
    app_features_dashboard_scene_utils_interactions__WEBPACK_IMPORTED_MODULE_4__.DashboardInteractions.panelCancelQueryClicked({ data_state: props.data.state });
  };
  const padding = props.plugin.noPadding ? "none" : "md";
  const alertState = props.data.alertState?.state;
  const showTitleItems = props.panel.links && props.panel.links.length > 0 && onShowPanelLinks || props.data.series.length > 0 && props.data.series.some((v) => (v.meta?.notices?.length ?? 0) > 0) || props.data.request && props.data.request.timeInfo || alertState;
  const titleItems = showTitleItems && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _dashgrid_PanelHeader_PanelHeaderTitleItems__WEBPACK_IMPORTED_MODULE_7__.PanelHeaderTitleItems,
    {
      alertState,
      data: props.data,
      panelId: props.panel.id,
      panelLinks: props.panel.links,
      onShowPanelLinks
    }
  );
  const description = props.panel.description ? onShowPanelDescription : void 0;
  const dragClass = !(props.isViewing || props.isEditing) && Boolean(props.isDraggable ?? true) ? "grid-drag-handle" : "";
  const title = props.panel.getDisplayTitle();
  return {
    hasOverlayHeader,
    onShowPanelDescription,
    onShowPanelLinks,
    onOpenInspector,
    onOpenErrorInspect,
    onCancelQuery,
    padding,
    description,
    dragClass,
    title,
    titleItems
  };
}


/***/ }),

/***/ "./public/app/features/dashboard/utils/getPanelMenu.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPanelMenu: () => (/* binding */ getPanelMenu)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/utils/url.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/reducers/appNotification.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_core_utils_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/utils/errors.ts");
/* harmony import */ var app_core_utils_explore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/utils/explore.ts");
/* harmony import */ var app_features_alerting_unified_utils_rule_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-form.ts");
/* harmony import */ var app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");
/* harmony import */ var app_features_inspector_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/inspector/types.ts");
/* harmony import */ var app_features_library_panels_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/library-panels/guard.ts");
/* harmony import */ var app_features_plugins_extensions_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/plugins/extensions/utils.tsx");
/* harmony import */ var app_plugins_datasource_dashboard_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/dashboard/constants.ts");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _alerting_unified_utils_access_control__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _explore_state_main__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/explore/state/main.ts");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");



















function getPanelMenu(dashboard, panel, extensions) {
  const onViewPanel = (event) => {
    event.preventDefault();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.partial({
      viewPanel: panel.id
    });
  };
  const onEditPanel = (event) => {
    event.preventDefault();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.partial({
      editPanel: panel.id
    });
  };
  const onSharePanel = (event) => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_9__.sharePanel)(dashboard, panel);
  };
  const onAddLibraryPanel = (event) => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_9__.addLibraryPanel)(dashboard, panel);
  };
  const onUnlinkLibraryPanel = (event) => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_9__.unlinkLibraryPanel)(panel);
  };
  const onInspectPanel = (tab) => {
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.partial({
      inspect: panel.id,
      inspectTab: tab
    });
  };
  const onDuplicatePanel = (event) => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_9__.duplicatePanel)(dashboard, panel);
  };
  const onCopyPanel = (event) => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_9__.copyPanel)(panel);
  };
  const onRemovePanel = (event) => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_9__.removePanel)(dashboard, panel, true);
  };
  const onNavigateToExplore = (event) => {
    event.preventDefault();
    const openInNewWindow = event.ctrlKey || event.metaKey ? (url) => window.open(url) : void 0;
    app_store_store__WEBPACK_IMPORTED_MODULE_14__.store.dispatch(
      (0,_explore_state_main__WEBPACK_IMPORTED_MODULE_16__.navigateToExplore)(panel, {
        timeRange: (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_17__.getTimeSrv)().timeRange(),
        getExploreUrl: app_core_utils_explore__WEBPACK_IMPORTED_MODULE_7__.getExploreUrl,
        openInNewWindow
      })
    );
  };
  const onToggleLegend = (event) => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_9__.toggleLegend)(panel);
  };
  const menu = [];
  if (!panel.isEditing) {
    menu.push({
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.view", `View`),
      iconClassName: "eye",
      onClick: onViewPanel,
      shortcut: "v"
    });
  }
  if (dashboard.canEditPanel(panel) && !panel.isEditing) {
    menu.push({
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.edit", `Edit`),
      iconClassName: "edit",
      onClick: onEditPanel,
      shortcut: "e"
    });
  }
  menu.push({
    text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.share", `Share`),
    iconClassName: "share-alt",
    onClick: onSharePanel,
    shortcut: "p s"
  });
  if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasAccessToExplore() && !(panel.plugin && panel.plugin.meta.skipDataQuery) && panel.datasource?.uid !== app_plugins_datasource_dashboard_constants__WEBPACK_IMPORTED_MODULE_13__.SHARED_DASHBOARD_QUERY) {
    menu.push({
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.explore", `Explore`),
      iconClassName: "compass",
      onClick: onNavigateToExplore,
      shortcut: "p x"
    });
  }
  const inspectMenu = [];
  if (panel.plugin && !panel.plugin.meta.skipDataQuery) {
    inspectMenu.push({
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.inspect-data", `Data`),
      onClick: (e) => onInspectPanel(app_features_inspector_types__WEBPACK_IMPORTED_MODULE_10__.InspectTab.Data)
    });
    if (dashboard.meta.canEdit) {
      inspectMenu.push({
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.query", `Query`),
        onClick: (e) => onInspectPanel(app_features_inspector_types__WEBPACK_IMPORTED_MODULE_10__.InspectTab.Query)
      });
    }
  }
  inspectMenu.push({
    text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.inspect-json", `Panel JSON`),
    onClick: (e) => onInspectPanel(app_features_inspector_types__WEBPACK_IMPORTED_MODULE_10__.InspectTab.JSON)
  });
  menu.push({
    type: "submenu",
    text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.inspect", `Inspect`),
    iconClassName: "info-circle",
    shortcut: "i",
    subMenu: inspectMenu
  });
  const createAlert = async () => {
    let formValues;
    try {
      formValues = await (0,app_features_alerting_unified_utils_rule_form__WEBPACK_IMPORTED_MODULE_8__.panelToRuleFormValues)(panel, dashboard);
    } catch (err) {
      const message = `Error getting rule values from the panel: ${(0,app_core_utils_errors__WEBPACK_IMPORTED_MODULE_6__.getMessageFromError)(err)}`;
      (0,app_store_store__WEBPACK_IMPORTED_MODULE_14__.dispatch)((0,app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_4__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__.createErrorNotification)(message)));
      return;
    }
    const ruleFormUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.urlUtil.renderUrl("/alerting/new", {
      defaults: JSON.stringify(formValues),
      returnTo: window.location.pathname + window.location.search
    });
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.push(ruleFormUrl);
  };
  const onCreateAlert = (event) => {
    event.preventDefault();
    createAlert();
  };
  const subMenu = [];
  const canEdit = dashboard.canEditPanel(panel);
  const isCreateAlertMenuOptionAvailable = (0,_alerting_unified_utils_access_control__WEBPACK_IMPORTED_MODULE_15__.getCreateAlertInMenuAvailability)();
  if (!(panel.isViewing || panel.isEditing)) {
    if (canEdit) {
      subMenu.push({
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.duplicate", `Duplicate`),
        onClick: onDuplicatePanel,
        shortcut: "p d"
      });
      subMenu.push({
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.copy", `Copy`),
        onClick: onCopyPanel
      });
      if ((0,app_features_library_panels_guard__WEBPACK_IMPORTED_MODULE_11__.isPanelModelLibraryPanel)(panel)) {
        subMenu.push({
          text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.unlink-library-panel", `Unlink library panel`),
          onClick: onUnlinkLibraryPanel
        });
      } else {
        subMenu.push({
          text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.create-library-panel", `Create library panel`),
          onClick: onAddLibraryPanel
        });
      }
    } else if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.isEditor) {
      subMenu.push({
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.copy", `Copy`),
        onClick: onCopyPanel
      });
    }
  }
  if (isCreateAlertMenuOptionAvailable) {
    subMenu.push({
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.new-alert-rule", `New alert rule`),
      onClick: onCreateAlert
    });
  }
  if (panel.options.legend) {
    subMenu.push({
      text: panel.options.legend.showLegend ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.hide-legend", "Hide legend") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.show-legend", "Show legend"),
      onClick: onToggleLegend,
      shortcut: "p l"
    });
  }
  if (panel.isEditing) {
    subMenu.length = 0;
    if (isCreateAlertMenuOptionAvailable) {
      subMenu.push({
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.new-alert-rule", `New alert rule`),
        onClick: onCreateAlert
      });
    }
  }
  if (canEdit && panel.plugin && !panel.plugin.meta.skipDataQuery) {
    subMenu.push({
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.get-help", "Get help"),
      onClick: (e) => onInspectPanel(app_features_inspector_types__WEBPACK_IMPORTED_MODULE_10__.InspectTab.Help)
    });
  }
  if (extensions.length > 0 && !panel.isEditing) {
    menu.push({
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("dashboard.get-panel-menu.text.extensions", "Extensions"),
      iconClassName: "plug",
      type: "submenu",
      subMenu: (0,app_features_plugins_extensions_utils__WEBPACK_IMPORTED_MODULE_12__.createExtensionSubMenu)(extensions)
    });
  }
  if (subMenu.length) {
    menu.push({
      type: "submenu",
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.more", `More...`),
      iconClassName: "cube",
      subMenu
    });
  }
  if (dashboard.canEditPanel(panel) && !panel.isEditing && !panel.isViewing) {
    menu.push({ type: "divider", text: "" });
    menu.push({
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("panel.header-menu.remove", `Remove`),
      iconClassName: "trash-alt",
      onClick: onRemovePanel,
      shortcut: "p r"
    });
  }
  return menu;
}


/***/ }),

/***/ "./public/app/features/dashboard/utils/loadSnapshotData.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadSnapshotData: () => (/* binding */ loadSnapshotData)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/dataframe/processDataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/dataframe/ArrayDataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/field/fieldOverrides.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/time.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _query_state_DashboardQueryRunner_SnapshotWorker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/SnapshotWorker.ts");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");






function loadSnapshotData(panel, dashboard) {
  const data = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getProcessedDataFrames)(panel.snapshotData);
  const worker = new _query_state_DashboardQueryRunner_SnapshotWorker__WEBPACK_IMPORTED_MODULE_6__.SnapshotWorker();
  const options = { dashboard, range: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getDefaultTimeRange)() };
  const annotationEvents = worker.canWork(options) ? worker.getAnnotationsInSnapshot(dashboard, panel.id) : [];
  const annotations = [(0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.arrayToDataFrame)(annotationEvents)];
  const timeData = (0,_panel__WEBPACK_IMPORTED_MODULE_8__.applyPanelTimeOverrides)(panel, (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_7__.getTimeSrv)().timeRange());
  return {
    timeRange: timeData.timeRange,
    state: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.LoadingState.Done,
    series: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.applyFieldOverrides)({
      data,
      fieldConfig: {
        defaults: {},
        overrides: []
      },
      replaceVariables: panel.replaceVariables,
      fieldConfigRegistry: panel.plugin.fieldConfigRegistry,
      theme: app_core_config__WEBPACK_IMPORTED_MODULE_5__.config.theme2,
      timeZone: dashboard.getTimezone()
    }),
    structureRev: 1,
    annotations
  };
}


/***/ }),

/***/ "./public/app/features/folders/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFolderByUid: () => (/* binding */ getFolderByUid)
/* harmony export */ });
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var _navModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/folders/state/reducers.ts");





function getFolderByUid(uid) {
  return async (dispatch) => {
    const folder = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_1__.backendSrv.getFolderByUid(uid);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.loadFolder)(folder));
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_0__.updateNavIndex)((0,_navModel__WEBPACK_IMPORTED_MODULE_2__.buildNavModel)(folder)));
    return folder;
  };
}


/***/ }),

/***/ "./public/app/plugins/panel/timeseries/overrides/colorSeriesConfigFactory.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeSeriesColorConfigFactory: () => (/* binding */ changeSeriesColorConfigFactory)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");


const changeSeriesColorConfigFactory = (label, color, fieldConfig) => {
  const { overrides } = fieldConfig;
  const currentIndex = fieldConfig.overrides.findIndex((override) => {
    return override.matcher.id === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byName && override.matcher.options === label;
  });
  if (currentIndex < 0) {
    return {
      ...fieldConfig,
      overrides: [...fieldConfig.overrides, createOverride(label, color)]
    };
  }
  const overridesCopy = Array.from(overrides);
  const existing = overridesCopy[currentIndex];
  const propertyIndex = existing.properties.findIndex((p) => p.id === "color");
  if (propertyIndex < 0) {
    overridesCopy[currentIndex] = {
      ...existing,
      properties: [...existing.properties, createProperty(color)]
    };
    return {
      ...fieldConfig,
      overrides: overridesCopy
    };
  }
  const propertiesCopy = Array.from(existing.properties);
  propertiesCopy[propertyIndex] = createProperty(color);
  overridesCopy[currentIndex] = {
    ...existing,
    properties: propertiesCopy
  };
  return {
    ...fieldConfig,
    overrides: overridesCopy
  };
};
const createOverride = (label, color) => {
  return {
    matcher: {
      id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byName,
      options: label
    },
    properties: [createProperty(color)]
  };
};
const createProperty = (color) => {
  return {
    id: "color",
    value: {
      mode: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldColorModeId.Fixed,
      fixedColor: color
    }
  };
};


/***/ })

}]);
//# sourceMappingURL=SoloPanelPageOld.97f8106178d891324e03.js.map