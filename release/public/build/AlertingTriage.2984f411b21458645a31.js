"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertingTriage"],{

/***/ "./node_modules/@grafana/scenes-react/dist/esm/caching/SceneObjectCache.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SceneObjectCache: () => (/* binding */ SceneObjectCache),
/* harmony export */   getObjectHash: () => (/* binding */ getObjectHash),
/* harmony export */   getSceneObjectCache: () => (/* binding */ getSceneObjectCache)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes-react/node_modules/lru-cache/dist/esm/index.js");



var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var _cache, _objectRefIds, _objectRefIdCounter;
class SceneObjectCache {
  constructor() {
    __privateAdd(this, _cache);
    __privateAdd(this, _objectRefIds, /* @__PURE__ */ new WeakMap());
    __privateAdd(this, _objectRefIdCounter, 0);
    __privateSet(this, _cache, new lru_cache__WEBPACK_IMPORTED_MODULE_1__.LRUCache({
      max: 500,
      ttl: 1e3 * 60 * 5
    }));
  }
  add(keyHash, object) {
    __privateGet(this, _cache).set(keyHash, object);
  }
  get(keyHash) {
    return __privateGet(this, _cache).get(keyHash);
  }
  getHashKey(key, type) {
    if (Array.isArray(key)) {
      return `${type.name}-${key.map((k) => this.getHashKeyElement(k)).join()}`;
    }
    return `${type.name}-${this.getHashKeyElement(key)}`;
  }
  getByRefHashKey(obj) {
    let objectRefId = __privateGet(this, _objectRefIds).get(obj);
    if (objectRefId == null) {
      objectRefId = __privateWrapper(this, _objectRefIdCounter)._++;
      __privateGet(this, _objectRefIds).set(obj, objectRefId);
    }
    return objectRefId;
  }
  getHashKeyElement(key) {
    if (typeof key === "string" || typeof key === "boolean" || typeof key === "number") {
      return key;
    }
    return getObjectHash(key);
  }
}
_cache = new WeakMap();
_objectRefIds = new WeakMap();
_objectRefIdCounter = new WeakMap();
let cache;
function getSceneObjectCache() {
  if (cache) {
    return cache;
  }
  return cache = new SceneObjectCache();
}
function getObjectHash(obj) {
  return JSON.stringify(
    obj,
    (_, val) => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(val) ? Object.keys(val).sort().reduce((result, key) => {
      result[key] = val[key];
      return result;
    }, {}) : val
  );
}


//# sourceMappingURL=SceneObjectCache.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/components/AnnotationLayer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnotationLayer: () => (/* binding */ AnnotationLayer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_hooks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/hooks/hooks.js");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/utils.js");





function AnnotationLayer({ name, query, children }) {
  const scene = (0,_hooks_hooks_js__WEBPACK_IMPORTED_MODULE_1__.useSceneContext)();
  const [annotationAdded, setAnnotationAdded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  let annotation = findAnnotationLayer(scene, name);
  if (!annotation) {
    annotation = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.dataLayers.AnnotationsDataLayer({ name, query });
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const removeFn = addAnnotationLayer(scene, annotation);
    setAnnotationAdded(true);
    return removeFn;
  }, [scene, name, annotation]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
  }, [annotationAdded]);
  if (!annotationAdded) {
    return null;
  }
  return children;
}
function findAnnotationLayer(scene, name) {
  const annotations = scene.state.$data;
  if (!annotations) {
    return;
  }
  return annotations.state.layers.find((anno) => anno.state.name === name);
}
function addAnnotationLayer(scene, layer) {
  let set = scene.state.$data;
  if (set) {
    set.setState({ layers: [...set.state.layers, layer] });
  } else {
    set = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.SceneDataLayerSet({ layers: [layer] });
    scene.setState({ $data: set });
  }
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.writeSceneLog)("SceneContext", `Adding annotation data layer: ${layer.state.name} key: ${layer.state.key}`);
  return () => {
    set.setState({ layers: set.state.layers.filter((x) => x !== layer) });
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.writeSceneLog)("SceneContext", `Removing annotation data layer: ${layer.state.name} key: ${layer.state.key}`);
  };
}


//# sourceMappingURL=AnnotationLayer.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/components/DataLayerControl.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataLayerControl: () => (/* binding */ DataLayerControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _hooks_hooks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/hooks/hooks.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");







function DataLayerControl({ name }) {
  var _a, _b, _c;
  const scene = (0,_hooks_hooks_js__WEBPACK_IMPORTED_MODULE_2__.useSceneContext)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const layerSets = _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.sceneGraph.getDataLayers(scene);
  const layer = getLayer(layerSets, name);
  const isLoading = Boolean(layer && ((_a = layer.state.data) == null ? void 0 : _a.state) === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.LoadingState.Loading);
  if (!layer) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Annotation ", name, " not found");
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.container }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.ControlsLabel,
    {
      htmlFor: `data-layer-${layer.state.key}`,
      isLoading,
      onCancel: () => {
        var _a2;
        return (_a2 = layer.cancelQuery) == null ? void 0 : _a2.call(layer);
      },
      label: layer.state.name,
      description: layer.state.description,
      error: (_c = (_b = layer.state.data) == null ? void 0 : _b.errors) == null ? void 0 : _c[0].message
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(layer.Component, { model: layer }));
}
const getStyles = () => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_4__.css)({
    display: "flex"
  })
});
function getLayer(layers, name) {
  for (let i = 0; i < layers.length; i++) {
    const layer = layers[i].state.layers.find((layer2) => layer2.state.name === name);
    if (layer) {
      return layer;
    }
  }
  return void 0;
}


//# sourceMappingURL=DataLayerControl.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/components/RefreshPicker.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RefreshPicker: () => (/* binding */ RefreshPicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_hooks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/hooks/hooks.js");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/usePrevious.js");





function RefreshPicker(props) {
  const scene = (0,_hooks_hooks_js__WEBPACK_IMPORTED_MODULE_1__.useSceneContext)();
  const key = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  const prevProps = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(props);
  let picker = scene.findByKey(key);
  if (!picker) {
    picker = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.SceneRefreshPicker({
      key,
      ...props
    });
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => scene.addToScene(picker), [picker, scene]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const stateUpdate = {};
    if (!prevProps) {
      return;
    }
    if (props.refresh !== prevProps.refresh) {
      stateUpdate.refresh = props.refresh;
    }
    if (props.withText !== prevProps.withText) {
      stateUpdate.withText = props.withText;
    }
    picker.setState(stateUpdate);
  }, [picker, props, prevProps]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(picker.Component, { model: picker });
}


//# sourceMappingURL=RefreshPicker.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/components/TimeRangePicker.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeRangePicker: () => (/* binding */ TimeRangePicker)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/components/DateTimePickers/TimeRangePicker.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_hooks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/hooks/hooks.js");




function TimeRangePicker(props) {
  const [value, sceneTimeRange] = (0,_hooks_hooks_js__WEBPACK_IMPORTED_MODULE_2__.useTimeRange)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_0__.TimeRangePicker,
    {
      isOnCanvas: true,
      value,
      onChange: sceneTimeRange.onTimeRangeChange,
      timeZone: sceneTimeRange.getTimeZone(),
      onMoveBackward: () => {
      },
      onMoveForward: () => {
      },
      onZoom: () => {
      },
      onChangeTimeZone: () => {
      },
      onChangeFiscalYearStartMonth: () => {
      }
    }
  );
}


//# sourceMappingURL=TimeRangePicker.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/components/VariableControl.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariableControl: () => (/* binding */ VariableControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _hooks_hooks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/hooks/hooks.js");




function VariableControl({ name, hideLabel, layout }) {
  const scene = (0,_hooks_hooks_js__WEBPACK_IMPORTED_MODULE_2__.useSceneContext)();
  const variable = _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.sceneGraph.lookupVariable(name, scene);
  if (!variable) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Variable ", name, " not found");
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.VariableValueSelectWrapper, { key: variable.state.key, variable, hideLabel, layout });
}


//# sourceMappingURL=VariableControl.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/components/VizGridLayout.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VizGridLayout: () => (/* binding */ VizGridLayout)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function VizGridLayout({ children, minWidth = 400, minHeight = 320 }) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.useTheme2)();
  const style = {
    display: "grid",
    flexGrow: 1,
    gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}px, 1fr))`,
    gridAutoRows: `minmax(${minHeight}px, auto)`,
    columnGap: theme.spacing(1),
    rowGap: theme.spacing(1)
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style }, children);
}


//# sourceMappingURL=VizGridLayout.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/components/VizPanel.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VizPanel: () => (/* binding */ VizPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/panel/getPanelOptionsWithDefaults.ts");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/utils.js");
/* harmony import */ var _hooks_hooks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/hooks/hooks.js");







function VizPanel(props) {
  const {
    title,
    description,
    viz,
    dataProvider,
    displayMode,
    hoverHeader,
    hoverHeaderOffset,
    headerActions,
    menu,
    titleItems,
    extendPanelContext,
    seriesLimit,
    seriesLimitShowAll,
    collapsible,
    collapsed
  } = props;
  const scene = (0,_hooks_hooks_js__WEBPACK_IMPORTED_MODULE_5__.useSceneContext)();
  const key = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  const prevProps = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(props);
  let panel = scene.findByKey(key);
  if (!panel) {
    panel = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.VizPanel({
      key,
      pluginId: viz.pluginId,
      title,
      titleItems,
      description,
      options: viz.options,
      fieldConfig: viz.fieldConfig,
      pluginVersion: viz.pluginVersion,
      $data: getDataProviderForVizPanel(dataProvider),
      displayMode,
      hoverHeader,
      hoverHeaderOffset,
      headerActions,
      menu,
      extendPanelContext,
      collapsible,
      collapsed,
      seriesLimit,
      seriesLimitShowAll
    });
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => scene.addToScene(panel), [panel, scene]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const stateUpdate = {};
    if (!prevProps) {
      return;
    }
    if (title !== prevProps.title) {
      stateUpdate.title = title;
    }
    if (description !== prevProps.description) {
      stateUpdate.description = description;
    }
    if (displayMode !== prevProps.displayMode) {
      stateUpdate.displayMode = displayMode;
    }
    if (hoverHeader !== prevProps.hoverHeader) {
      stateUpdate.hoverHeader = hoverHeader;
    }
    if (hoverHeaderOffset !== prevProps.hoverHeaderOffset) {
      stateUpdate.hoverHeaderOffset = hoverHeaderOffset;
    }
    if (menu !== prevProps.menu) {
      stateUpdate.menu = menu;
    }
    if (titleItems !== prevProps.titleItems) {
      stateUpdate.titleItems = titleItems;
    }
    if (headerActions !== prevProps.headerActions) {
      stateUpdate.headerActions = headerActions;
    }
    if (dataProvider !== prevProps.dataProvider) {
      stateUpdate.$data = getDataProviderForVizPanel(dataProvider);
    }
    if (seriesLimit !== prevProps.seriesLimit) {
      stateUpdate.seriesLimit = seriesLimit;
    }
    if (seriesLimitShowAll !== prevProps.seriesLimitShowAll) {
      stateUpdate.seriesLimitShowAll = seriesLimitShowAll;
    }
    if (collapsible !== prevProps.collapsible) {
      stateUpdate.collapsible = collapsible;
    }
    if (collapsed !== prevProps.collapsed) {
      stateUpdate.collapsed = collapsed;
    }
    if (viz !== prevProps.viz) {
      if (viz.pluginId === prevProps.viz.pluginId) {
        const plugin = panel.getPlugin();
        if (plugin) {
          const optionsWithDefaults = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getPanelOptionsWithDefaults)({
            plugin,
            currentOptions: viz.options,
            currentFieldConfig: viz.fieldConfig,
            isAfterPluginChange: false
          });
          stateUpdate.options = optionsWithDefaults.options;
          stateUpdate.fieldConfig = optionsWithDefaults.fieldConfig;
          panel.clearFieldConfigCache();
        }
      }
    }
    if (Object.keys(stateUpdate).length > 0) {
      panel.setState(stateUpdate);
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.writeSceneLog)("VizPanel", "Updating VizPanel state", stateUpdate);
    }
  }, [
    panel,
    title,
    description,
    displayMode,
    hoverHeader,
    hoverHeaderOffset,
    headerActions,
    menu,
    titleItems,
    viz,
    dataProvider,
    seriesLimit,
    seriesLimitShowAll,
    collapsible,
    collapsed,
    prevProps
  ]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(panel.Component, { model: panel });
}
function getDataProviderForVizPanel(data) {
  if (data && !(data instanceof _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.SceneDataNode)) {
    return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.DataProviderProxy({ source: data.getRef() });
  }
  return data;
}


//# sourceMappingURL=VizPanel.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/contexts/BreadcrumbContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Breadcrumb: () => (/* binding */ Breadcrumb),
/* harmony export */   BreadcrumbContext: () => (/* binding */ BreadcrumbContext),
/* harmony export */   BreadcrumbProvider: () => (/* binding */ BreadcrumbProvider)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/utils/url.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _hooks_hooks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/hooks/hooks.js");






const BreadcrumbContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({
  breadcrumbs: [],
  addBreadcrumb: () => {
  },
  removeBreadcrumb: () => {
  }
});
function BreadcrumbProvider({ children }) {
  const [breadcrumbs, setBreadcrumbs] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
    BreadcrumbContext.Provider,
    {
      value: {
        breadcrumbs,
        addBreadcrumb: (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((breadcrumb) => setBreadcrumbs((prev) => [...prev, breadcrumb]), []),
        removeBreadcrumb: (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
          (breadcrumb) => setBreadcrumbs((prev) => prev.filter((b) => b.url !== breadcrumb.url)),
          []
        )
      }
    },
    children
  );
}
function Breadcrumb({ text, path, extraKeys }) {
  const { addBreadcrumb, removeBreadcrumb } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(BreadcrumbContext);
  const buildUrl = useUrlBuilder();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const breadcrumb = {
      text,
      url: buildUrl(path, extraKeys)
    };
    addBreadcrumb(breadcrumb);
    return () => {
      removeBreadcrumb(breadcrumb);
    };
  }, [text, path, extraKeys, addBreadcrumb, buildUrl, removeBreadcrumb]);
  return null;
}
function useUrlBuilder() {
  const queryParams = useQueryParams()[0];
  const variables = (0,_hooks_hooks_js__WEBPACK_IMPORTED_MODULE_4__.useVariables)();
  const [_, timeRange] = (0,_hooks_hooks_js__WEBPACK_IMPORTED_MODULE_4__.useTimeRange)();
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (urlBase, extraKeys) => {
      const params = {};
      for (const v of variables) {
        if (v.urlSync && !v.state.skipUrlSync) {
          const state = v.urlSync.getUrlState();
          Object.assign(params, state);
        }
      }
      if (timeRange.urlSync) {
        const state = timeRange.urlSync.getUrlState();
        Object.assign(params, state);
      }
      if (extraKeys) {
        for (const extra of extraKeys) {
          if (queryParams[extra]) {
            params[extra] = queryParams[extra];
          }
        }
      }
      return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.urlUtil.renderUrl(urlBase, params);
    },
    [variables, queryParams, timeRange]
  );
}
function useQueryParams() {
  const { search } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  const queryParams = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationSearchToObject)(search || ""), [search]);
  const update = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((values, replace) => _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.partial(values, replace), []);
  return [queryParams, update];
}


//# sourceMappingURL=BreadcrumbContext.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/contexts/SceneContextObject.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SceneContextObject: () => (/* binding */ SceneContextObject)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/utils.js");



class SceneContextObject extends _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneObjectBase {
  constructor(state) {
    var _a, _b;
    super({
      ...state,
      children: (_a = state == null ? void 0 : state.children) != null ? _a : [],
      childContexts: (_b = state == null ? void 0 : state.childContexts) != null ? _b : []
    });
  }
  addToScene(obj) {
    this.publishEvent(new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.NewSceneObjectAddedEvent(obj), true);
    this.setState({ children: [...this.state.children, obj] });
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.writeSceneLog)("SceneContext", `Adding to scene: ${obj.constructor.name} key: ${obj.state.key}`);
    const deactivate = obj.activate();
    return () => {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.writeSceneLog)("SceneContext", `Removing from scene: ${obj.constructor.name} key: ${obj.state.key}`);
      this.setState({ children: this.state.children.filter((x) => x !== obj) });
      deactivate();
    };
  }
  findByKey(key) {
    return this.state.children.find((x) => x.state.key === key);
  }
  findVariable(name) {
    const variables = this.state.$variables;
    if (!variables) {
      return;
    }
    return variables.getByName(name);
  }
  addVariable(variable) {
    let set = this.state.$variables;
    this.publishEvent(new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.NewSceneObjectAddedEvent(variable), true);
    if (set) {
      set.setState({ variables: [...set.state.variables, variable] });
    } else {
      set = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneVariableSet({ variables: [variable] });
      this.setState({ $variables: set });
    }
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.writeSceneLog)("SceneContext", `Adding variable: ${variable.constructor.name} key: ${variable.state.key}`);
    return () => {
      set.setState({ variables: set.state.variables.filter((x) => x !== variable) });
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.writeSceneLog)("SceneContext", `Removing variable: ${variable.constructor.name} key: ${variable.state.key}`);
    };
  }
  addChildContext(ctx) {
    var _a;
    this.publishEvent(new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.NewSceneObjectAddedEvent(ctx), true);
    this.setState({ childContexts: [...(_a = this.state.childContexts) != null ? _a : [], ctx] });
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.writeSceneLog)("SceneContext", `Adding child context: ${ctx.constructor.name} key: ${ctx.state.key}`);
  }
  removeChildContext(ctx) {
    var _a;
    this.setState({
      childContexts: (_a = this.state.childContexts) == null ? void 0 : _a.filter((context) => ctx !== context)
    });
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.writeSceneLog)("SceneContext", `Remvoing child context: ${ctx.constructor.name} key: ${ctx.state.key}`);
  }
}


//# sourceMappingURL=SceneContextObject.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/contexts/SceneContextProvider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SceneContext: () => (/* binding */ SceneContext),
/* harmony export */   SceneContextProvider: () => (/* binding */ SceneContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _SceneContextObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/contexts/SceneContextObject.js");




const SceneContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
function SceneContextProvider({ children, timeRange, withQueryController }) {
  const parentContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SceneContext);
  const [childContext, setChildContext] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const initialTimeRange = timeRange;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const state = { children: [] };
    if (withQueryController) {
      state.$behaviors = [new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.behaviors.SceneQueryController()];
    }
    if (initialTimeRange) {
      state.$timeRange = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.SceneTimeRange(initialTimeRange);
    }
    const childContext2 = new _SceneContextObject_js__WEBPACK_IMPORTED_MODULE_2__.SceneContextObject(state);
    if (parentContext) {
      parentContext.addChildContext(childContext2);
    }
    const deactivate = childContext2.activate();
    setChildContext(childContext2);
    return () => {
      deactivate();
      if (parentContext) {
        parentContext.removeChildContext(childContext2);
      }
    };
  }, [parentContext, withQueryController]);
  if (!childContext) {
    return null;
  }
  const innerProvider = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SceneContext.Provider, { value: childContext }, children);
  if (parentContext) {
    return innerProvider;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.UrlSyncContextProvider, { scene: childContext, updateUrlOnInit: true, createBrowserHistorySteps: true }, innerProvider);
}


//# sourceMappingURL=SceneContextProvider.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/hooks/hooks.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSceneContext: () => (/* binding */ useSceneContext),
/* harmony export */   useTimeRange: () => (/* binding */ useTimeRange),
/* harmony export */   useUpdateWhenSceneChanges: () => (/* binding */ useUpdateWhenSceneChanges),
/* harmony export */   useVariableInterpolator: () => (/* binding */ useVariableInterpolator),
/* harmony export */   useVariables: () => (/* binding */ useVariables)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_SceneContextProvider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/contexts/SceneContextProvider.js");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js");





function useSceneContext() {
  const scene = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_SceneContextProvider_js__WEBPACK_IMPORTED_MODULE_1__.SceneContext);
  if (!scene) {
    throw new Error("Cannot find a SceneContext");
  }
  return scene;
}
function useTimeRange() {
  const scene = useSceneContext();
  const sceneTimeRange = _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.sceneGraph.getTimeRange(scene);
  const { value } = sceneTimeRange.useState();
  return [value, sceneTimeRange];
}
function useVariables() {
  const scene = useSceneContext();
  const variables = _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.sceneGraph.getVariables(scene);
  return variables.useState().variables;
}
function useUpdateWhenSceneChanges({ timeRange, variables = [] }) {
  const scene = useSceneContext();
  const [updateReason, setUpdateReason] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    if (variables && variables.length > 0) {
      for (const v of variables) {
        const variable = _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.sceneGraph.lookupVariable(v, scene);
        if (variable) {
          subscriptions.add(
            variable.subscribeToEvent(_grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.SceneVariableValueChangedEvent, () => {
              setUpdateReason({ variableName: variable.state.name, variableValue: variable.getValue() });
            })
          );
        }
      }
    }
    if (timeRange) {
      const tr = _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.sceneGraph.getTimeRange(scene);
      tr.subscribeToState((newState, oldState) => {
        if (newState.value !== oldState.value) {
          setUpdateReason({ timeRange: newState.value });
        }
      });
    }
    return () => subscriptions.unsubscribe();
  }, [scene, timeRange, ...variables]);
  return updateReason;
}
function useVariableInterpolator(options) {
  const scene = useSceneContext();
  useUpdateWhenSceneChanges(options);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (str) => {
      return _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.sceneGraph.interpolate(scene, str);
    },
    [scene]
  );
}


//# sourceMappingURL=hooks.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/hooks/useDataTransformer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDataTransformer: () => (/* binding */ useDataTransformer)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _hooks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/hooks/hooks.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);





function useDataTransformer(options) {
  const scene = (0,_hooks_js__WEBPACK_IMPORTED_MODULE_1__.useSceneContext)();
  const key = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  let dataTransformer = scene.findByKey(key);
  if (!dataTransformer) {
    dataTransformer = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneDataTransformer({
      key,
      $data: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.DataProviderProxy({ source: options.data.getRef() }),
      transformations: options.transformations
    });
  }
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => scene.addToScene(dataTransformer), [dataTransformer, scene]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEqual)(dataTransformer.state.transformations, options.transformations)) {
      dataTransformer.setState({ transformations: options.transformations });
      dataTransformer.reprocessTransformations();
    }
  }, [dataTransformer, options.transformations]);
  return dataTransformer;
}


//# sourceMappingURL=useDataTransformer.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/hooks/useQueryRunner.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useQueryRunner: () => (/* binding */ useQueryRunner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useSceneObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/hooks/useSceneObject.js");





function useQueryRunner(options) {
  const queryRunner = (0,_useSceneObject_js__WEBPACK_IMPORTED_MODULE_3__.useSceneObject)({
    factory: (key) => new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.SceneQueryRunner({
      key,
      queries: options.queries,
      maxDataPoints: options.maxDataPoints,
      datasource: options.datasource,
      liveStreaming: options.liveStreaming,
      maxDataPointsFromWidth: options.maxDataPointsFromWidth,
      minInterval: options.minInterval
    }),
    objectConstructor: _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.SceneQueryRunner,
    cacheKey: options.cacheKey
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual)(queryRunner.state.queries, options.queries)) {
      queryRunner.setState({ queries: options.queries });
      queryRunner.runQueries();
    }
  }, [queryRunner, options]);
  return queryRunner;
}


//# sourceMappingURL=useQueryRunner.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/hooks/useQueryVariable.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useQueryVariable: () => (/* binding */ useQueryVariable)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _hooks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/hooks/hooks.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);





function useQueryVariable(options) {
  const scene = (0,_hooks_js__WEBPACK_IMPORTED_MODULE_1__.useSceneContext)();
  let variable = _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.sceneGraph.lookupVariable(options.name, scene);
  if (!variable) {
    variable = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.QueryVariable({
      name: options.name,
      datasource: { uid: options.datasource },
      query: options.query,
      regex: options.regex
    });
  }
  if (!(variable instanceof _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.QueryVariable)) {
    variable = null;
  }
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (variable) {
      scene.addVariable(variable);
    }
  }, [variable, scene]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var _a;
    if (((_a = variable == null ? void 0 : variable.state.datasource) == null ? void 0 : _a.uid) !== options.datasource || !(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEqual)(variable == null ? void 0 : variable.state.query, options.query) || (variable == null ? void 0 : variable.state.regex) !== options.regex) {
      variable == null ? void 0 : variable.setState({ datasource: { uid: options.datasource }, query: options.query, regex: options.regex });
      variable == null ? void 0 : variable.refreshOptions();
    }
  }, [options, variable]);
  return variable;
}


//# sourceMappingURL=useQueryVariable.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/hooks/useSceneObject.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSceneObject: () => (/* binding */ useSceneObject)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _hooks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/hooks/hooks.js");
/* harmony import */ var _caching_SceneObjectCache_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/caching/SceneObjectCache.js");





function useSceneObject(options) {
  const scene = (0,_hooks_js__WEBPACK_IMPORTED_MODULE_2__.useSceneContext)();
  const key = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  const cache = (0,_caching_SceneObjectCache_js__WEBPACK_IMPORTED_MODULE_3__.getSceneObjectCache)();
  let cacheKeyHash = options.cacheKey ? cache.getHashKey(options.cacheKey, options.objectConstructor) : void 0;
  let obj = scene.findByKey(key);
  if (!obj && cacheKeyHash) {
    obj = cache.get(cacheKeyHash);
    if (obj && obj.parent !== scene) {
      if (_grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.sceneGraph.findObject(scene, (sceneObj) => sceneObj === obj)) {
        console.error("A scene object cache key matched an object that is already in the scene");
        obj = void 0;
        cacheKeyHash = void 0;
      } else {
        obj.clearParent();
      }
    }
  }
  if (!obj) {
    obj = options.factory(key);
    if (cacheKeyHash) {
      cache.add(cacheKeyHash, obj);
    }
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => scene.addToScene(obj), [obj, scene]);
  return obj;
}


//# sourceMappingURL=useSceneObject.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/hooks/useVariableValue.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useVariableValue: () => (/* binding */ useVariableValue)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _hooks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/hooks/hooks.js");



function useVariableValue(name) {
  const scene = (0,_hooks_js__WEBPACK_IMPORTED_MODULE_1__.useSceneContext)();
  const variable = _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.sceneGraph.lookupVariable(name, scene);
  if (!variable || variable instanceof _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.MultiValueVariable && variable.state.isMulti === true) {
    return [void 0, false];
  }
  variable.useState();
  const set = variable.parent;
  const isLoading = set.isVariableLoadingOrWaitingToUpdate(variable);
  let value = variable.getValue();
  if (value == null) {
    return [void 0, isLoading];
  }
  return [value, isLoading];
}


//# sourceMappingURL=useVariableValue.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/hooks/useVariableValues.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useVariableValues: () => (/* binding */ useVariableValues)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _hooks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/hooks/hooks.js");



function useVariableValues(name) {
  const scene = (0,_hooks_js__WEBPACK_IMPORTED_MODULE_1__.useSceneContext)();
  const variable = _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.sceneGraph.lookupVariable(name, scene);
  if (!variable) {
    return [void 0, false];
  }
  variable.useState();
  const set = variable.parent;
  const isLoading = set.isVariableLoadingOrWaitingToUpdate(variable);
  let value = variable.getValue();
  if (value == null) {
    return [void 0, isLoading];
  }
  if (!Array.isArray(value)) {
    value = [value];
  }
  return [value, isLoading];
}


//# sourceMappingURL=useVariableValues.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnotationLayer: () => (/* reexport safe */ _components_AnnotationLayer_js__WEBPACK_IMPORTED_MODULE_15__.AnnotationLayer),
/* harmony export */   Breadcrumb: () => (/* reexport safe */ _contexts_BreadcrumbContext_js__WEBPACK_IMPORTED_MODULE_11__.Breadcrumb),
/* harmony export */   BreadcrumbContext: () => (/* reexport safe */ _contexts_BreadcrumbContext_js__WEBPACK_IMPORTED_MODULE_11__.BreadcrumbContext),
/* harmony export */   BreadcrumbProvider: () => (/* reexport safe */ _contexts_BreadcrumbContext_js__WEBPACK_IMPORTED_MODULE_11__.BreadcrumbProvider),
/* harmony export */   CustomVariable: () => (/* reexport safe */ _variables_CustomVariable_js__WEBPACK_IMPORTED_MODULE_8__.CustomVariable),
/* harmony export */   DataLayerControl: () => (/* reexport safe */ _components_DataLayerControl_js__WEBPACK_IMPORTED_MODULE_7__.DataLayerControl),
/* harmony export */   DataSourceVariable: () => (/* reexport safe */ _variables_DataSourceVariable_js__WEBPACK_IMPORTED_MODULE_9__.DataSourceVariable),
/* harmony export */   EmbeddedSceneWithContext: () => (/* reexport safe */ _interoperability_EmbeddedSceneWithContext_js__WEBPACK_IMPORTED_MODULE_16__.EmbeddedSceneWithContext),
/* harmony export */   QueryVariable: () => (/* reexport safe */ _variables_QueryVariable_js__WEBPACK_IMPORTED_MODULE_10__.QueryVariable),
/* harmony export */   RefreshPicker: () => (/* reexport safe */ _components_RefreshPicker_js__WEBPACK_IMPORTED_MODULE_6__.RefreshPicker),
/* harmony export */   SceneContext: () => (/* reexport safe */ _contexts_SceneContextProvider_js__WEBPACK_IMPORTED_MODULE_2__.SceneContext),
/* harmony export */   SceneContextObject: () => (/* reexport safe */ _contexts_SceneContextObject_js__WEBPACK_IMPORTED_MODULE_18__.SceneContextObject),
/* harmony export */   SceneContextProvider: () => (/* reexport safe */ _contexts_SceneContextProvider_js__WEBPACK_IMPORTED_MODULE_2__.SceneContextProvider),
/* harmony export */   TimeRangePicker: () => (/* reexport safe */ _components_TimeRangePicker_js__WEBPACK_IMPORTED_MODULE_3__.TimeRangePicker),
/* harmony export */   VariableControl: () => (/* reexport safe */ _components_VariableControl_js__WEBPACK_IMPORTED_MODULE_4__.VariableControl),
/* harmony export */   VizGridLayout: () => (/* reexport safe */ _components_VizGridLayout_js__WEBPACK_IMPORTED_MODULE_17__.VizGridLayout),
/* harmony export */   VizPanel: () => (/* reexport safe */ _components_VizPanel_js__WEBPACK_IMPORTED_MODULE_5__.VizPanel),
/* harmony export */   useDataTransformer: () => (/* reexport safe */ _hooks_useDataTransformer_js__WEBPACK_IMPORTED_MODULE_1__.useDataTransformer),
/* harmony export */   useQueryRunner: () => (/* reexport safe */ _hooks_useQueryRunner_js__WEBPACK_IMPORTED_MODULE_0__.useQueryRunner),
/* harmony export */   useQueryVariable: () => (/* reexport safe */ _hooks_useQueryVariable_js__WEBPACK_IMPORTED_MODULE_13__.useQueryVariable),
/* harmony export */   useSceneContext: () => (/* reexport safe */ _hooks_hooks_js__WEBPACK_IMPORTED_MODULE_19__.useSceneContext),
/* harmony export */   useTimeRange: () => (/* reexport safe */ _hooks_hooks_js__WEBPACK_IMPORTED_MODULE_19__.useTimeRange),
/* harmony export */   useUpdateWhenSceneChanges: () => (/* reexport safe */ _hooks_hooks_js__WEBPACK_IMPORTED_MODULE_19__.useUpdateWhenSceneChanges),
/* harmony export */   useVariableInterpolator: () => (/* reexport safe */ _hooks_hooks_js__WEBPACK_IMPORTED_MODULE_19__.useVariableInterpolator),
/* harmony export */   useVariableValue: () => (/* reexport safe */ _hooks_useVariableValue_js__WEBPACK_IMPORTED_MODULE_14__.useVariableValue),
/* harmony export */   useVariableValues: () => (/* reexport safe */ _hooks_useVariableValues_js__WEBPACK_IMPORTED_MODULE_12__.useVariableValues),
/* harmony export */   useVariables: () => (/* reexport safe */ _hooks_hooks_js__WEBPACK_IMPORTED_MODULE_19__.useVariables)
/* harmony export */ });
/* harmony import */ var _hooks_useQueryRunner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/hooks/useQueryRunner.js");
/* harmony import */ var _hooks_useDataTransformer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/hooks/useDataTransformer.js");
/* harmony import */ var _contexts_SceneContextProvider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/contexts/SceneContextProvider.js");
/* harmony import */ var _components_TimeRangePicker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/components/TimeRangePicker.js");
/* harmony import */ var _components_VariableControl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/components/VariableControl.js");
/* harmony import */ var _components_VizPanel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/components/VizPanel.js");
/* harmony import */ var _components_RefreshPicker_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/components/RefreshPicker.js");
/* harmony import */ var _components_DataLayerControl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/components/DataLayerControl.js");
/* harmony import */ var _variables_CustomVariable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/variables/CustomVariable.js");
/* harmony import */ var _variables_DataSourceVariable_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/variables/DataSourceVariable.js");
/* harmony import */ var _variables_QueryVariable_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/variables/QueryVariable.js");
/* harmony import */ var _contexts_BreadcrumbContext_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/contexts/BreadcrumbContext.js");
/* harmony import */ var _hooks_useVariableValues_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/hooks/useVariableValues.js");
/* harmony import */ var _hooks_useQueryVariable_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/hooks/useQueryVariable.js");
/* harmony import */ var _hooks_useVariableValue_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/hooks/useVariableValue.js");
/* harmony import */ var _components_AnnotationLayer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/components/AnnotationLayer.js");
/* harmony import */ var _interoperability_EmbeddedSceneWithContext_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/interoperability/EmbeddedSceneWithContext.js");
/* harmony import */ var _components_VizGridLayout_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/components/VizGridLayout.js");
/* harmony import */ var _contexts_SceneContextObject_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/contexts/SceneContextObject.js");
/* harmony import */ var _hooks_hooks_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/hooks/hooks.js");




















//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/interoperability/EmbeddedSceneWithContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmbeddedSceneWithContext: () => (/* binding */ EmbeddedSceneWithContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _contexts_SceneContextProvider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/contexts/SceneContextProvider.js");
/* harmony import */ var _contexts_SceneContextObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/contexts/SceneContextObject.js");





class EmbeddedSceneWithContext extends _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.EmbeddedScene {
  constructor(state) {
    super({ ...state, context: new _contexts_SceneContextObject_js__WEBPACK_IMPORTED_MODULE_3__.SceneContextObject() });
  }
}
EmbeddedSceneWithContext.Component = ({ model }) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_contexts_SceneContextProvider_js__WEBPACK_IMPORTED_MODULE_2__.SceneContext.Provider, { value: model.state.context }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.EmbeddedScene.Component, { model }));
};


//# sourceMappingURL=EmbeddedSceneWithContext.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   writeSceneLog: () => (/* binding */ writeSceneLog)
/* harmony export */ });
function writeSceneLog(logger, message, ...rest) {
  let loggingEnabled = false;
  if (typeof window !== "undefined") {
    loggingEnabled = localStorage.getItem("grafana.debug.scenes") === "true";
  }
  if (loggingEnabled) {
    console.log(`${logger}: `, message, ...rest);
  }
}


//# sourceMappingURL=utils.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/variables/CustomVariable.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomVariable: () => (/* binding */ CustomVariable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _hooks_hooks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/hooks/hooks.js");




function CustomVariable({
  query,
  name,
  label,
  hide,
  initialValue,
  isMulti,
  includeAll,
  skipUrlSync,
  children
}) {
  const scene = (0,_hooks_hooks_js__WEBPACK_IMPORTED_MODULE_2__.useSceneContext)();
  const [variableAdded, setVariableAdded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  let variable = scene.findVariable(name);
  if (!variable) {
    variable = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.CustomVariable({
      name,
      label,
      query,
      value: initialValue,
      isMulti,
      includeAll,
      hide,
      skipUrlSync
    });
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const removeFn = scene.addVariable(variable);
    setVariableAdded(true);
    return removeFn;
  }, [variable, scene, name]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    variable == null ? void 0 : variable.setState({
      label,
      query,
      hide,
      isMulti,
      includeAll,
      skipUrlSync
    });
  }, [skipUrlSync, hide, includeAll, isMulti, label, query, variable]);
  if (!variableAdded) {
    return null;
  }
  return children;
}


//# sourceMappingURL=CustomVariable.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/variables/DataSourceVariable.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataSourceVariable: () => (/* binding */ DataSourceVariable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _hooks_hooks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/hooks/hooks.js");




function DataSourceVariable({
  pluginId,
  regex,
  name,
  label,
  hide,
  initialValue,
  isMulti,
  includeAll,
  skipUrlSync,
  children
}) {
  const scene = (0,_hooks_hooks_js__WEBPACK_IMPORTED_MODULE_2__.useSceneContext)();
  const [variableAdded, setVariableAdded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  let variable = scene.findVariable(name);
  if (!variable) {
    variable = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.DataSourceVariable({
      pluginId,
      regex,
      name,
      label,
      value: initialValue,
      isMulti,
      hide,
      includeAll,
      skipUrlSync
    });
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const removeFn = scene.addVariable(variable);
    setVariableAdded(true);
    return removeFn;
  }, [variable, scene, name]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!variableAdded) {
      return;
    }
    if (variable.state.pluginId === pluginId && variable.state.regex === regex && variable.state.label === label && variable.state.hide === hide && variable.state.includeAll === includeAll && variable.state.skipUrlSync === skipUrlSync) {
      return;
    }
    variable.setState({
      pluginId,
      regex,
      label,
      hide,
      includeAll,
      skipUrlSync
    });
    variable.refreshOptions();
  }, [skipUrlSync, hide, includeAll, label, pluginId, regex, variable, variableAdded]);
  if (!variableAdded) {
    return null;
  }
  return children;
}


//# sourceMappingURL=DataSourceVariable.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/dist/esm/variables/QueryVariable.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryVariable: () => (/* binding */ QueryVariable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _hooks_hooks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/hooks/hooks.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);





function QueryVariable({
  query,
  name,
  datasource,
  label,
  hide,
  regex,
  refresh,
  sort,
  initialValue,
  isMulti,
  includeAll,
  skipUrlSync,
  children
}) {
  const scene = (0,_hooks_hooks_js__WEBPACK_IMPORTED_MODULE_2__.useSceneContext)();
  const [variableAdded, setVariableAdded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  let variable = scene.findVariable(name);
  if (!variable) {
    variable = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.QueryVariable({
      name,
      label,
      query,
      datasource,
      refresh,
      sort,
      regex,
      value: initialValue,
      isMulti,
      hide,
      includeAll,
      skipUrlSync
    });
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const removeFn = scene.addVariable(variable);
    setVariableAdded(true);
    return removeFn;
  }, [variable, scene, name]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!variableAdded) {
      return;
    }
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEqual)(variable.state.query, query) && (0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEqual)(variable.state.datasource, datasource) && variable.state.regex === regex && variable.state.label === label && variable.state.hide === hide && variable.state.includeAll === includeAll && variable.state.refresh === refresh && variable.state.sort === sort && variable.state.skipUrlSync === skipUrlSync) {
      return;
    }
    variable.setState({
      label,
      query,
      datasource,
      refresh,
      sort,
      regex,
      hide,
      includeAll,
      skipUrlSync
    });
    variable.refreshOptions();
  }, [skipUrlSync, datasource, hide, includeAll, label, query, refresh, regex, sort, variable, variableAdded]);
  if (!variableAdded) {
    return null;
  }
  return children;
}


//# sourceMappingURL=QueryVariable.js.map


/***/ }),

/***/ "./node_modules/@grafana/scenes-react/node_modules/lru-cache/dist/esm/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LRUCache: () => (/* binding */ LRUCache)
/* harmony export */ });
/**
 * @module LRUCache
 */
const perf = typeof performance === 'object' &&
    performance &&
    typeof performance.now === 'function'
    ? performance
    : Date;
const warned = new Set();
/* c8 ignore start */
const PROCESS = (typeof process === 'object' && !!process ? process : {});
/* c8 ignore start */
const emitWarning = (msg, type, code, fn) => {
    typeof PROCESS.emitWarning === 'function'
        ? PROCESS.emitWarning(msg, type, code, fn)
        : console.error(`[${code}] ${type}: ${msg}`);
};
let AC = globalThis.AbortController;
let AS = globalThis.AbortSignal;
/* c8 ignore start */
if (typeof AC === 'undefined') {
    //@ts-ignore
    AS = class AbortSignal {
        onabort;
        _onabort = [];
        reason;
        aborted = false;
        addEventListener(_, fn) {
            this._onabort.push(fn);
        }
    };
    //@ts-ignore
    AC = class AbortController {
        constructor() {
            warnACPolyfill();
        }
        signal = new AS();
        abort(reason) {
            if (this.signal.aborted)
                return;
            //@ts-ignore
            this.signal.reason = reason;
            //@ts-ignore
            this.signal.aborted = true;
            //@ts-ignore
            for (const fn of this.signal._onabort) {
                fn(reason);
            }
            this.signal.onabort?.(reason);
        }
    };
    let printACPolyfillWarning = PROCESS.env?.LRU_CACHE_IGNORE_AC_WARNING !== '1';
    const warnACPolyfill = () => {
        if (!printACPolyfillWarning)
            return;
        printACPolyfillWarning = false;
        emitWarning('AbortController is not defined. If using lru-cache in ' +
            'node 14, load an AbortController polyfill from the ' +
            '`node-abort-controller` package. A minimal polyfill is ' +
            'provided for use by LRUCache.fetch(), but it should not be ' +
            'relied upon in other contexts (eg, passing it to other APIs that ' +
            'use AbortController/AbortSignal might have undesirable effects). ' +
            'You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.', 'NO_ABORT_CONTROLLER', 'ENOTSUP', warnACPolyfill);
    };
}
/* c8 ignore stop */
const shouldWarn = (code) => !warned.has(code);
const TYPE = Symbol('type');
const isPosInt = (n) => n && n === Math.floor(n) && n > 0 && isFinite(n);
/* c8 ignore start */
// This is a little bit ridiculous, tbh.
// The maximum array length is 2^32-1 or thereabouts on most JS impls.
// And well before that point, you're caching the entire world, I mean,
// that's ~32GB of just integers for the next/prev links, plus whatever
// else to hold that many keys and values.  Just filling the memory with
// zeroes at init time is brutal when you get that big.
// But why not be complete?
// Maybe in the future, these limits will have expanded.
const getUintArray = (max) => !isPosInt(max)
    ? null
    : max <= Math.pow(2, 8)
        ? Uint8Array
        : max <= Math.pow(2, 16)
            ? Uint16Array
            : max <= Math.pow(2, 32)
                ? Uint32Array
                : max <= Number.MAX_SAFE_INTEGER
                    ? ZeroArray
                    : null;
/* c8 ignore stop */
class ZeroArray extends Array {
    constructor(size) {
        super(size);
        this.fill(0);
    }
}
class Stack {
    heap;
    length;
    // private constructor
    static #constructing = false;
    static create(max) {
        const HeapCls = getUintArray(max);
        if (!HeapCls)
            return [];
        Stack.#constructing = true;
        const s = new Stack(max, HeapCls);
        Stack.#constructing = false;
        return s;
    }
    constructor(max, HeapCls) {
        /* c8 ignore start */
        if (!Stack.#constructing) {
            throw new TypeError('instantiate Stack using Stack.create(n)');
        }
        /* c8 ignore stop */
        this.heap = new HeapCls(max);
        this.length = 0;
    }
    push(n) {
        this.heap[this.length++] = n;
    }
    pop() {
        return this.heap[--this.length];
    }
}
/**
 * Default export, the thing you're using this module to get.
 *
 * The `K` and `V` types define the key and value types, respectively. The
 * optional `FC` type defines the type of the `context` object passed to
 * `cache.fetch()` and `cache.memo()`.
 *
 * Keys and values **must not** be `null` or `undefined`.
 *
 * All properties from the options object (with the exception of `max`,
 * `maxSize`, `fetchMethod`, `memoMethod`, `dispose` and `disposeAfter`) are
 * added as normal public members. (The listed options are read-only getters.)
 *
 * Changing any of these will alter the defaults for subsequent method calls.
 */
class LRUCache {
    // options that cannot be changed without disaster
    #max;
    #maxSize;
    #dispose;
    #disposeAfter;
    #fetchMethod;
    #memoMethod;
    /**
     * {@link LRUCache.OptionsBase.ttl}
     */
    ttl;
    /**
     * {@link LRUCache.OptionsBase.ttlResolution}
     */
    ttlResolution;
    /**
     * {@link LRUCache.OptionsBase.ttlAutopurge}
     */
    ttlAutopurge;
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnGet}
     */
    updateAgeOnGet;
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnHas}
     */
    updateAgeOnHas;
    /**
     * {@link LRUCache.OptionsBase.allowStale}
     */
    allowStale;
    /**
     * {@link LRUCache.OptionsBase.noDisposeOnSet}
     */
    noDisposeOnSet;
    /**
     * {@link LRUCache.OptionsBase.noUpdateTTL}
     */
    noUpdateTTL;
    /**
     * {@link LRUCache.OptionsBase.maxEntrySize}
     */
    maxEntrySize;
    /**
     * {@link LRUCache.OptionsBase.sizeCalculation}
     */
    sizeCalculation;
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnFetchRejection}
     */
    noDeleteOnFetchRejection;
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnStaleGet}
     */
    noDeleteOnStaleGet;
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchAbort}
     */
    allowStaleOnFetchAbort;
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchRejection}
     */
    allowStaleOnFetchRejection;
    /**
     * {@link LRUCache.OptionsBase.ignoreFetchAbort}
     */
    ignoreFetchAbort;
    // computed properties
    #size;
    #calculatedSize;
    #keyMap;
    #keyList;
    #valList;
    #next;
    #prev;
    #head;
    #tail;
    #free;
    #disposed;
    #sizes;
    #starts;
    #ttls;
    #hasDispose;
    #hasFetchMethod;
    #hasDisposeAfter;
    /**
     * Do not call this method unless you need to inspect the
     * inner workings of the cache.  If anything returned by this
     * object is modified in any way, strange breakage may occur.
     *
     * These fields are private for a reason!
     *
     * @internal
     */
    static unsafeExposeInternals(c) {
        return {
            // properties
            starts: c.#starts,
            ttls: c.#ttls,
            sizes: c.#sizes,
            keyMap: c.#keyMap,
            keyList: c.#keyList,
            valList: c.#valList,
            next: c.#next,
            prev: c.#prev,
            get head() {
                return c.#head;
            },
            get tail() {
                return c.#tail;
            },
            free: c.#free,
            // methods
            isBackgroundFetch: (p) => c.#isBackgroundFetch(p),
            backgroundFetch: (k, index, options, context) => c.#backgroundFetch(k, index, options, context),
            moveToTail: (index) => c.#moveToTail(index),
            indexes: (options) => c.#indexes(options),
            rindexes: (options) => c.#rindexes(options),
            isStale: (index) => c.#isStale(index),
        };
    }
    // Protected read-only members
    /**
     * {@link LRUCache.OptionsBase.max} (read-only)
     */
    get max() {
        return this.#max;
    }
    /**
     * {@link LRUCache.OptionsBase.maxSize} (read-only)
     */
    get maxSize() {
        return this.#maxSize;
    }
    /**
     * The total computed size of items in the cache (read-only)
     */
    get calculatedSize() {
        return this.#calculatedSize;
    }
    /**
     * The number of items stored in the cache (read-only)
     */
    get size() {
        return this.#size;
    }
    /**
     * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
     */
    get fetchMethod() {
        return this.#fetchMethod;
    }
    get memoMethod() {
        return this.#memoMethod;
    }
    /**
     * {@link LRUCache.OptionsBase.dispose} (read-only)
     */
    get dispose() {
        return this.#dispose;
    }
    /**
     * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
     */
    get disposeAfter() {
        return this.#disposeAfter;
    }
    constructor(options) {
        const { max = 0, ttl, ttlResolution = 1, ttlAutopurge, updateAgeOnGet, updateAgeOnHas, allowStale, dispose, disposeAfter, noDisposeOnSet, noUpdateTTL, maxSize = 0, maxEntrySize = 0, sizeCalculation, fetchMethod, memoMethod, noDeleteOnFetchRejection, noDeleteOnStaleGet, allowStaleOnFetchRejection, allowStaleOnFetchAbort, ignoreFetchAbort, } = options;
        if (max !== 0 && !isPosInt(max)) {
            throw new TypeError('max option must be a nonnegative integer');
        }
        const UintArray = max ? getUintArray(max) : Array;
        if (!UintArray) {
            throw new Error('invalid max value: ' + max);
        }
        this.#max = max;
        this.#maxSize = maxSize;
        this.maxEntrySize = maxEntrySize || this.#maxSize;
        this.sizeCalculation = sizeCalculation;
        if (this.sizeCalculation) {
            if (!this.#maxSize && !this.maxEntrySize) {
                throw new TypeError('cannot set sizeCalculation without setting maxSize or maxEntrySize');
            }
            if (typeof this.sizeCalculation !== 'function') {
                throw new TypeError('sizeCalculation set to non-function');
            }
        }
        if (memoMethod !== undefined &&
            typeof memoMethod !== 'function') {
            throw new TypeError('memoMethod must be a function if defined');
        }
        this.#memoMethod = memoMethod;
        if (fetchMethod !== undefined &&
            typeof fetchMethod !== 'function') {
            throw new TypeError('fetchMethod must be a function if specified');
        }
        this.#fetchMethod = fetchMethod;
        this.#hasFetchMethod = !!fetchMethod;
        this.#keyMap = new Map();
        this.#keyList = new Array(max).fill(undefined);
        this.#valList = new Array(max).fill(undefined);
        this.#next = new UintArray(max);
        this.#prev = new UintArray(max);
        this.#head = 0;
        this.#tail = 0;
        this.#free = Stack.create(max);
        this.#size = 0;
        this.#calculatedSize = 0;
        if (typeof dispose === 'function') {
            this.#dispose = dispose;
        }
        if (typeof disposeAfter === 'function') {
            this.#disposeAfter = disposeAfter;
            this.#disposed = [];
        }
        else {
            this.#disposeAfter = undefined;
            this.#disposed = undefined;
        }
        this.#hasDispose = !!this.#dispose;
        this.#hasDisposeAfter = !!this.#disposeAfter;
        this.noDisposeOnSet = !!noDisposeOnSet;
        this.noUpdateTTL = !!noUpdateTTL;
        this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection;
        this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection;
        this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort;
        this.ignoreFetchAbort = !!ignoreFetchAbort;
        // NB: maxEntrySize is set to maxSize if it's set
        if (this.maxEntrySize !== 0) {
            if (this.#maxSize !== 0) {
                if (!isPosInt(this.#maxSize)) {
                    throw new TypeError('maxSize must be a positive integer if specified');
                }
            }
            if (!isPosInt(this.maxEntrySize)) {
                throw new TypeError('maxEntrySize must be a positive integer if specified');
            }
            this.#initializeSizeTracking();
        }
        this.allowStale = !!allowStale;
        this.noDeleteOnStaleGet = !!noDeleteOnStaleGet;
        this.updateAgeOnGet = !!updateAgeOnGet;
        this.updateAgeOnHas = !!updateAgeOnHas;
        this.ttlResolution =
            isPosInt(ttlResolution) || ttlResolution === 0
                ? ttlResolution
                : 1;
        this.ttlAutopurge = !!ttlAutopurge;
        this.ttl = ttl || 0;
        if (this.ttl) {
            if (!isPosInt(this.ttl)) {
                throw new TypeError('ttl must be a positive integer if specified');
            }
            this.#initializeTTLTracking();
        }
        // do not allow completely unbounded caches
        if (this.#max === 0 && this.ttl === 0 && this.#maxSize === 0) {
            throw new TypeError('At least one of max, maxSize, or ttl is required');
        }
        if (!this.ttlAutopurge && !this.#max && !this.#maxSize) {
            const code = 'LRU_CACHE_UNBOUNDED';
            if (shouldWarn(code)) {
                warned.add(code);
                const msg = 'TTL caching without ttlAutopurge, max, or maxSize can ' +
                    'result in unbounded memory consumption.';
                emitWarning(msg, 'UnboundedCacheWarning', code, LRUCache);
            }
        }
    }
    /**
     * Return the number of ms left in the item's TTL. If item is not in cache,
     * returns `0`. Returns `Infinity` if item is in cache without a defined TTL.
     */
    getRemainingTTL(key) {
        return this.#keyMap.has(key) ? Infinity : 0;
    }
    #initializeTTLTracking() {
        const ttls = new ZeroArray(this.#max);
        const starts = new ZeroArray(this.#max);
        this.#ttls = ttls;
        this.#starts = starts;
        this.#setItemTTL = (index, ttl, start = perf.now()) => {
            starts[index] = ttl !== 0 ? start : 0;
            ttls[index] = ttl;
            if (ttl !== 0 && this.ttlAutopurge) {
                const t = setTimeout(() => {
                    if (this.#isStale(index)) {
                        this.#delete(this.#keyList[index], 'expire');
                    }
                }, ttl + 1);
                // unref() not supported on all platforms
                /* c8 ignore start */
                if (t.unref) {
                    t.unref();
                }
                /* c8 ignore stop */
            }
        };
        this.#updateItemAge = index => {
            starts[index] = ttls[index] !== 0 ? perf.now() : 0;
        };
        this.#statusTTL = (status, index) => {
            if (ttls[index]) {
                const ttl = ttls[index];
                const start = starts[index];
                /* c8 ignore next */
                if (!ttl || !start)
                    return;
                status.ttl = ttl;
                status.start = start;
                status.now = cachedNow || getNow();
                const age = status.now - start;
                status.remainingTTL = ttl - age;
            }
        };
        // debounce calls to perf.now() to 1s so we're not hitting
        // that costly call repeatedly.
        let cachedNow = 0;
        const getNow = () => {
            const n = perf.now();
            if (this.ttlResolution > 0) {
                cachedNow = n;
                const t = setTimeout(() => (cachedNow = 0), this.ttlResolution);
                // not available on all platforms
                /* c8 ignore start */
                if (t.unref) {
                    t.unref();
                }
                /* c8 ignore stop */
            }
            return n;
        };
        this.getRemainingTTL = key => {
            const index = this.#keyMap.get(key);
            if (index === undefined) {
                return 0;
            }
            const ttl = ttls[index];
            const start = starts[index];
            if (!ttl || !start) {
                return Infinity;
            }
            const age = (cachedNow || getNow()) - start;
            return ttl - age;
        };
        this.#isStale = index => {
            const s = starts[index];
            const t = ttls[index];
            return !!t && !!s && (cachedNow || getNow()) - s > t;
        };
    }
    // conditionally set private methods related to TTL
    #updateItemAge = () => { };
    #statusTTL = () => { };
    #setItemTTL = () => { };
    /* c8 ignore stop */
    #isStale = () => false;
    #initializeSizeTracking() {
        const sizes = new ZeroArray(this.#max);
        this.#calculatedSize = 0;
        this.#sizes = sizes;
        this.#removeItemSize = index => {
            this.#calculatedSize -= sizes[index];
            sizes[index] = 0;
        };
        this.#requireSize = (k, v, size, sizeCalculation) => {
            // provisionally accept background fetches.
            // actual value size will be checked when they return.
            if (this.#isBackgroundFetch(v)) {
                return 0;
            }
            if (!isPosInt(size)) {
                if (sizeCalculation) {
                    if (typeof sizeCalculation !== 'function') {
                        throw new TypeError('sizeCalculation must be a function');
                    }
                    size = sizeCalculation(v, k);
                    if (!isPosInt(size)) {
                        throw new TypeError('sizeCalculation return invalid (expect positive integer)');
                    }
                }
                else {
                    throw new TypeError('invalid size value (must be positive integer). ' +
                        'When maxSize or maxEntrySize is used, sizeCalculation ' +
                        'or size must be set.');
                }
            }
            return size;
        };
        this.#addItemSize = (index, size, status) => {
            sizes[index] = size;
            if (this.#maxSize) {
                const maxSize = this.#maxSize - sizes[index];
                while (this.#calculatedSize > maxSize) {
                    this.#evict(true);
                }
            }
            this.#calculatedSize += sizes[index];
            if (status) {
                status.entrySize = size;
                status.totalCalculatedSize = this.#calculatedSize;
            }
        };
    }
    #removeItemSize = _i => { };
    #addItemSize = (_i, _s, _st) => { };
    #requireSize = (_k, _v, size, sizeCalculation) => {
        if (size || sizeCalculation) {
            throw new TypeError('cannot set size without setting maxSize or maxEntrySize on cache');
        }
        return 0;
    };
    *#indexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
            for (let i = this.#tail; true;) {
                if (!this.#isValidIndex(i)) {
                    break;
                }
                if (allowStale || !this.#isStale(i)) {
                    yield i;
                }
                if (i === this.#head) {
                    break;
                }
                else {
                    i = this.#prev[i];
                }
            }
        }
    }
    *#rindexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
            for (let i = this.#head; true;) {
                if (!this.#isValidIndex(i)) {
                    break;
                }
                if (allowStale || !this.#isStale(i)) {
                    yield i;
                }
                if (i === this.#tail) {
                    break;
                }
                else {
                    i = this.#next[i];
                }
            }
        }
    }
    #isValidIndex(index) {
        return (index !== undefined &&
            this.#keyMap.get(this.#keyList[index]) === index);
    }
    /**
     * Return a generator yielding `[key, value]` pairs,
     * in order from most recently used to least recently used.
     */
    *entries() {
        for (const i of this.#indexes()) {
            if (this.#valList[i] !== undefined &&
                this.#keyList[i] !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield [this.#keyList[i], this.#valList[i]];
            }
        }
    }
    /**
     * Inverse order version of {@link LRUCache.entries}
     *
     * Return a generator yielding `[key, value]` pairs,
     * in order from least recently used to most recently used.
     */
    *rentries() {
        for (const i of this.#rindexes()) {
            if (this.#valList[i] !== undefined &&
                this.#keyList[i] !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield [this.#keyList[i], this.#valList[i]];
            }
        }
    }
    /**
     * Return a generator yielding the keys in the cache,
     * in order from most recently used to least recently used.
     */
    *keys() {
        for (const i of this.#indexes()) {
            const k = this.#keyList[i];
            if (k !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield k;
            }
        }
    }
    /**
     * Inverse order version of {@link LRUCache.keys}
     *
     * Return a generator yielding the keys in the cache,
     * in order from least recently used to most recently used.
     */
    *rkeys() {
        for (const i of this.#rindexes()) {
            const k = this.#keyList[i];
            if (k !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield k;
            }
        }
    }
    /**
     * Return a generator yielding the values in the cache,
     * in order from most recently used to least recently used.
     */
    *values() {
        for (const i of this.#indexes()) {
            const v = this.#valList[i];
            if (v !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield this.#valList[i];
            }
        }
    }
    /**
     * Inverse order version of {@link LRUCache.values}
     *
     * Return a generator yielding the values in the cache,
     * in order from least recently used to most recently used.
     */
    *rvalues() {
        for (const i of this.#rindexes()) {
            const v = this.#valList[i];
            if (v !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield this.#valList[i];
            }
        }
    }
    /**
     * Iterating over the cache itself yields the same results as
     * {@link LRUCache.entries}
     */
    [Symbol.iterator]() {
        return this.entries();
    }
    /**
     * A String value that is used in the creation of the default string
     * description of an object. Called by the built-in method
     * `Object.prototype.toString`.
     */
    [Symbol.toStringTag] = 'LRUCache';
    /**
     * Find a value for which the supplied fn method returns a truthy value,
     * similar to `Array.find()`. fn is called as `fn(value, key, cache)`.
     */
    find(fn, getOptions = {}) {
        for (const i of this.#indexes()) {
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v)
                ? v.__staleWhileFetching
                : v;
            if (value === undefined)
                continue;
            if (fn(value, this.#keyList[i], this)) {
                return this.get(this.#keyList[i], getOptions);
            }
        }
    }
    /**
     * Call the supplied function on each item in the cache, in order from most
     * recently used to least recently used.
     *
     * `fn` is called as `fn(value, key, cache)`.
     *
     * If `thisp` is provided, function will be called in the `this`-context of
     * the provided object, or the cache if no `thisp` object is provided.
     *
     * Does not update age or recenty of use, or iterate over stale values.
     */
    forEach(fn, thisp = this) {
        for (const i of this.#indexes()) {
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v)
                ? v.__staleWhileFetching
                : v;
            if (value === undefined)
                continue;
            fn.call(thisp, value, this.#keyList[i], this);
        }
    }
    /**
     * The same as {@link LRUCache.forEach} but items are iterated over in
     * reverse order.  (ie, less recently used items are iterated over first.)
     */
    rforEach(fn, thisp = this) {
        for (const i of this.#rindexes()) {
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v)
                ? v.__staleWhileFetching
                : v;
            if (value === undefined)
                continue;
            fn.call(thisp, value, this.#keyList[i], this);
        }
    }
    /**
     * Delete any stale entries. Returns true if anything was removed,
     * false otherwise.
     */
    purgeStale() {
        let deleted = false;
        for (const i of this.#rindexes({ allowStale: true })) {
            if (this.#isStale(i)) {
                this.#delete(this.#keyList[i], 'expire');
                deleted = true;
            }
        }
        return deleted;
    }
    /**
     * Get the extended info about a given entry, to get its value, size, and
     * TTL info simultaneously. Returns `undefined` if the key is not present.
     *
     * Unlike {@link LRUCache#dump}, which is designed to be portable and survive
     * serialization, the `start` value is always the current timestamp, and the
     * `ttl` is a calculated remaining time to live (negative if expired).
     *
     * Always returns stale values, if their info is found in the cache, so be
     * sure to check for expirations (ie, a negative {@link LRUCache.Entry#ttl})
     * if relevant.
     */
    info(key) {
        const i = this.#keyMap.get(key);
        if (i === undefined)
            return undefined;
        const v = this.#valList[i];
        const value = this.#isBackgroundFetch(v)
            ? v.__staleWhileFetching
            : v;
        if (value === undefined)
            return undefined;
        const entry = { value };
        if (this.#ttls && this.#starts) {
            const ttl = this.#ttls[i];
            const start = this.#starts[i];
            if (ttl && start) {
                const remain = ttl - (perf.now() - start);
                entry.ttl = remain;
                entry.start = Date.now();
            }
        }
        if (this.#sizes) {
            entry.size = this.#sizes[i];
        }
        return entry;
    }
    /**
     * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
     * passed to {@link LRLUCache#load}.
     *
     * The `start` fields are calculated relative to a portable `Date.now()`
     * timestamp, even if `performance.now()` is available.
     *
     * Stale entries are always included in the `dump`, even if
     * {@link LRUCache.OptionsBase.allowStale} is false.
     *
     * Note: this returns an actual array, not a generator, so it can be more
     * easily passed around.
     */
    dump() {
        const arr = [];
        for (const i of this.#indexes({ allowStale: true })) {
            const key = this.#keyList[i];
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v)
                ? v.__staleWhileFetching
                : v;
            if (value === undefined || key === undefined)
                continue;
            const entry = { value };
            if (this.#ttls && this.#starts) {
                entry.ttl = this.#ttls[i];
                // always dump the start relative to a portable timestamp
                // it's ok for this to be a bit slow, it's a rare operation.
                const age = perf.now() - this.#starts[i];
                entry.start = Math.floor(Date.now() - age);
            }
            if (this.#sizes) {
                entry.size = this.#sizes[i];
            }
            arr.unshift([key, entry]);
        }
        return arr;
    }
    /**
     * Reset the cache and load in the items in entries in the order listed.
     *
     * The shape of the resulting cache may be different if the same options are
     * not used in both caches.
     *
     * The `start` fields are assumed to be calculated relative to a portable
     * `Date.now()` timestamp, even if `performance.now()` is available.
     */
    load(arr) {
        this.clear();
        for (const [key, entry] of arr) {
            if (entry.start) {
                // entry.start is a portable timestamp, but we may be using
                // node's performance.now(), so calculate the offset, so that
                // we get the intended remaining TTL, no matter how long it's
                // been on ice.
                //
                // it's ok for this to be a bit slow, it's a rare operation.
                const age = Date.now() - entry.start;
                entry.start = perf.now() - age;
            }
            this.set(key, entry.value, entry);
        }
    }
    /**
     * Add a value to the cache.
     *
     * Note: if `undefined` is specified as a value, this is an alias for
     * {@link LRUCache#delete}
     *
     * Fields on the {@link LRUCache.SetOptions} options param will override
     * their corresponding values in the constructor options for the scope
     * of this single `set()` operation.
     *
     * If `start` is provided, then that will set the effective start
     * time for the TTL calculation. Note that this must be a previous
     * value of `performance.now()` if supported, or a previous value of
     * `Date.now()` if not.
     *
     * Options object may also include `size`, which will prevent
     * calling the `sizeCalculation` function and just use the specified
     * number if it is a positive integer, and `noDisposeOnSet` which
     * will prevent calling a `dispose` function in the case of
     * overwrites.
     *
     * If the `size` (or return value of `sizeCalculation`) for a given
     * entry is greater than `maxEntrySize`, then the item will not be
     * added to the cache.
     *
     * Will update the recency of the entry.
     *
     * If the value is `undefined`, then this is an alias for
     * `cache.delete(key)`. `undefined` is never stored in the cache.
     */
    set(k, v, setOptions = {}) {
        if (v === undefined) {
            this.delete(k);
            return this;
        }
        const { ttl = this.ttl, start, noDisposeOnSet = this.noDisposeOnSet, sizeCalculation = this.sizeCalculation, status, } = setOptions;
        let { noUpdateTTL = this.noUpdateTTL } = setOptions;
        const size = this.#requireSize(k, v, setOptions.size || 0, sizeCalculation);
        // if the item doesn't fit, don't do anything
        // NB: maxEntrySize set to maxSize by default
        if (this.maxEntrySize && size > this.maxEntrySize) {
            if (status) {
                status.set = 'miss';
                status.maxEntrySizeExceeded = true;
            }
            // have to delete, in case something is there already.
            this.#delete(k, 'set');
            return this;
        }
        let index = this.#size === 0 ? undefined : this.#keyMap.get(k);
        if (index === undefined) {
            // addition
            index = (this.#size === 0
                ? this.#tail
                : this.#free.length !== 0
                    ? this.#free.pop()
                    : this.#size === this.#max
                        ? this.#evict(false)
                        : this.#size);
            this.#keyList[index] = k;
            this.#valList[index] = v;
            this.#keyMap.set(k, index);
            this.#next[this.#tail] = index;
            this.#prev[index] = this.#tail;
            this.#tail = index;
            this.#size++;
            this.#addItemSize(index, size, status);
            if (status)
                status.set = 'add';
            noUpdateTTL = false;
        }
        else {
            // update
            this.#moveToTail(index);
            const oldVal = this.#valList[index];
            if (v !== oldVal) {
                if (this.#hasFetchMethod && this.#isBackgroundFetch(oldVal)) {
                    oldVal.__abortController.abort(new Error('replaced'));
                    const { __staleWhileFetching: s } = oldVal;
                    if (s !== undefined && !noDisposeOnSet) {
                        if (this.#hasDispose) {
                            this.#dispose?.(s, k, 'set');
                        }
                        if (this.#hasDisposeAfter) {
                            this.#disposed?.push([s, k, 'set']);
                        }
                    }
                }
                else if (!noDisposeOnSet) {
                    if (this.#hasDispose) {
                        this.#dispose?.(oldVal, k, 'set');
                    }
                    if (this.#hasDisposeAfter) {
                        this.#disposed?.push([oldVal, k, 'set']);
                    }
                }
                this.#removeItemSize(index);
                this.#addItemSize(index, size, status);
                this.#valList[index] = v;
                if (status) {
                    status.set = 'replace';
                    const oldValue = oldVal && this.#isBackgroundFetch(oldVal)
                        ? oldVal.__staleWhileFetching
                        : oldVal;
                    if (oldValue !== undefined)
                        status.oldValue = oldValue;
                }
            }
            else if (status) {
                status.set = 'update';
            }
        }
        if (ttl !== 0 && !this.#ttls) {
            this.#initializeTTLTracking();
        }
        if (this.#ttls) {
            if (!noUpdateTTL) {
                this.#setItemTTL(index, ttl, start);
            }
            if (status)
                this.#statusTTL(status, index);
        }
        if (!noDisposeOnSet && this.#hasDisposeAfter && this.#disposed) {
            const dt = this.#disposed;
            let task;
            while ((task = dt?.shift())) {
                this.#disposeAfter?.(...task);
            }
        }
        return this;
    }
    /**
     * Evict the least recently used item, returning its value or
     * `undefined` if cache is empty.
     */
    pop() {
        try {
            while (this.#size) {
                const val = this.#valList[this.#head];
                this.#evict(true);
                if (this.#isBackgroundFetch(val)) {
                    if (val.__staleWhileFetching) {
                        return val.__staleWhileFetching;
                    }
                }
                else if (val !== undefined) {
                    return val;
                }
            }
        }
        finally {
            if (this.#hasDisposeAfter && this.#disposed) {
                const dt = this.#disposed;
                let task;
                while ((task = dt?.shift())) {
                    this.#disposeAfter?.(...task);
                }
            }
        }
    }
    #evict(free) {
        const head = this.#head;
        const k = this.#keyList[head];
        const v = this.#valList[head];
        if (this.#hasFetchMethod && this.#isBackgroundFetch(v)) {
            v.__abortController.abort(new Error('evicted'));
        }
        else if (this.#hasDispose || this.#hasDisposeAfter) {
            if (this.#hasDispose) {
                this.#dispose?.(v, k, 'evict');
            }
            if (this.#hasDisposeAfter) {
                this.#disposed?.push([v, k, 'evict']);
            }
        }
        this.#removeItemSize(head);
        // if we aren't about to use the index, then null these out
        if (free) {
            this.#keyList[head] = undefined;
            this.#valList[head] = undefined;
            this.#free.push(head);
        }
        if (this.#size === 1) {
            this.#head = this.#tail = 0;
            this.#free.length = 0;
        }
        else {
            this.#head = this.#next[head];
        }
        this.#keyMap.delete(k);
        this.#size--;
        return head;
    }
    /**
     * Check if a key is in the cache, without updating the recency of use.
     * Will return false if the item is stale, even though it is technically
     * in the cache.
     *
     * Check if a key is in the cache, without updating the recency of
     * use. Age is updated if {@link LRUCache.OptionsBase.updateAgeOnHas} is set
     * to `true` in either the options or the constructor.
     *
     * Will return `false` if the item is stale, even though it is technically in
     * the cache. The difference can be determined (if it matters) by using a
     * `status` argument, and inspecting the `has` field.
     *
     * Will not update item age unless
     * {@link LRUCache.OptionsBase.updateAgeOnHas} is set.
     */
    has(k, hasOptions = {}) {
        const { updateAgeOnHas = this.updateAgeOnHas, status } = hasOptions;
        const index = this.#keyMap.get(k);
        if (index !== undefined) {
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v) &&
                v.__staleWhileFetching === undefined) {
                return false;
            }
            if (!this.#isStale(index)) {
                if (updateAgeOnHas) {
                    this.#updateItemAge(index);
                }
                if (status) {
                    status.has = 'hit';
                    this.#statusTTL(status, index);
                }
                return true;
            }
            else if (status) {
                status.has = 'stale';
                this.#statusTTL(status, index);
            }
        }
        else if (status) {
            status.has = 'miss';
        }
        return false;
    }
    /**
     * Like {@link LRUCache#get} but doesn't update recency or delete stale
     * items.
     *
     * Returns `undefined` if the item is stale, unless
     * {@link LRUCache.OptionsBase.allowStale} is set.
     */
    peek(k, peekOptions = {}) {
        const { allowStale = this.allowStale } = peekOptions;
        const index = this.#keyMap.get(k);
        if (index === undefined ||
            (!allowStale && this.#isStale(index))) {
            return;
        }
        const v = this.#valList[index];
        // either stale and allowed, or forcing a refresh of non-stale value
        return this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
    }
    #backgroundFetch(k, index, options, context) {
        const v = index === undefined ? undefined : this.#valList[index];
        if (this.#isBackgroundFetch(v)) {
            return v;
        }
        const ac = new AC();
        const { signal } = options;
        // when/if our AC signals, then stop listening to theirs.
        signal?.addEventListener('abort', () => ac.abort(signal.reason), {
            signal: ac.signal,
        });
        const fetchOpts = {
            signal: ac.signal,
            options,
            context,
        };
        const cb = (v, updateCache = false) => {
            const { aborted } = ac.signal;
            const ignoreAbort = options.ignoreFetchAbort && v !== undefined;
            if (options.status) {
                if (aborted && !updateCache) {
                    options.status.fetchAborted = true;
                    options.status.fetchError = ac.signal.reason;
                    if (ignoreAbort)
                        options.status.fetchAbortIgnored = true;
                }
                else {
                    options.status.fetchResolved = true;
                }
            }
            if (aborted && !ignoreAbort && !updateCache) {
                return fetchFail(ac.signal.reason);
            }
            // either we didn't abort, and are still here, or we did, and ignored
            const bf = p;
            if (this.#valList[index] === p) {
                if (v === undefined) {
                    if (bf.__staleWhileFetching) {
                        this.#valList[index] = bf.__staleWhileFetching;
                    }
                    else {
                        this.#delete(k, 'fetch');
                    }
                }
                else {
                    if (options.status)
                        options.status.fetchUpdated = true;
                    this.set(k, v, fetchOpts.options);
                }
            }
            return v;
        };
        const eb = (er) => {
            if (options.status) {
                options.status.fetchRejected = true;
                options.status.fetchError = er;
            }
            return fetchFail(er);
        };
        const fetchFail = (er) => {
            const { aborted } = ac.signal;
            const allowStaleAborted = aborted && options.allowStaleOnFetchAbort;
            const allowStale = allowStaleAborted || options.allowStaleOnFetchRejection;
            const noDelete = allowStale || options.noDeleteOnFetchRejection;
            const bf = p;
            if (this.#valList[index] === p) {
                // if we allow stale on fetch rejections, then we need to ensure that
                // the stale value is not removed from the cache when the fetch fails.
                const del = !noDelete || bf.__staleWhileFetching === undefined;
                if (del) {
                    this.#delete(k, 'fetch');
                }
                else if (!allowStaleAborted) {
                    // still replace the *promise* with the stale value,
                    // since we are done with the promise at this point.
                    // leave it untouched if we're still waiting for an
                    // aborted background fetch that hasn't yet returned.
                    this.#valList[index] = bf.__staleWhileFetching;
                }
            }
            if (allowStale) {
                if (options.status && bf.__staleWhileFetching !== undefined) {
                    options.status.returnedStale = true;
                }
                return bf.__staleWhileFetching;
            }
            else if (bf.__returned === bf) {
                throw er;
            }
        };
        const pcall = (res, rej) => {
            const fmp = this.#fetchMethod?.(k, v, fetchOpts);
            if (fmp && fmp instanceof Promise) {
                fmp.then(v => res(v === undefined ? undefined : v), rej);
            }
            // ignored, we go until we finish, regardless.
            // defer check until we are actually aborting,
            // so fetchMethod can override.
            ac.signal.addEventListener('abort', () => {
                if (!options.ignoreFetchAbort ||
                    options.allowStaleOnFetchAbort) {
                    res(undefined);
                    // when it eventually resolves, update the cache.
                    if (options.allowStaleOnFetchAbort) {
                        res = v => cb(v, true);
                    }
                }
            });
        };
        if (options.status)
            options.status.fetchDispatched = true;
        const p = new Promise(pcall).then(cb, eb);
        const bf = Object.assign(p, {
            __abortController: ac,
            __staleWhileFetching: v,
            __returned: undefined,
        });
        if (index === undefined) {
            // internal, don't expose status.
            this.set(k, bf, { ...fetchOpts.options, status: undefined });
            index = this.#keyMap.get(k);
        }
        else {
            this.#valList[index] = bf;
        }
        return bf;
    }
    #isBackgroundFetch(p) {
        if (!this.#hasFetchMethod)
            return false;
        const b = p;
        return (!!b &&
            b instanceof Promise &&
            b.hasOwnProperty('__staleWhileFetching') &&
            b.__abortController instanceof AC);
    }
    async fetch(k, fetchOptions = {}) {
        const { 
        // get options
        allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, 
        // set options
        ttl = this.ttl, noDisposeOnSet = this.noDisposeOnSet, size = 0, sizeCalculation = this.sizeCalculation, noUpdateTTL = this.noUpdateTTL, 
        // fetch exclusive options
        noDeleteOnFetchRejection = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection = this.allowStaleOnFetchRejection, ignoreFetchAbort = this.ignoreFetchAbort, allowStaleOnFetchAbort = this.allowStaleOnFetchAbort, context, forceRefresh = false, status, signal, } = fetchOptions;
        if (!this.#hasFetchMethod) {
            if (status)
                status.fetch = 'get';
            return this.get(k, {
                allowStale,
                updateAgeOnGet,
                noDeleteOnStaleGet,
                status,
            });
        }
        const options = {
            allowStale,
            updateAgeOnGet,
            noDeleteOnStaleGet,
            ttl,
            noDisposeOnSet,
            size,
            sizeCalculation,
            noUpdateTTL,
            noDeleteOnFetchRejection,
            allowStaleOnFetchRejection,
            allowStaleOnFetchAbort,
            ignoreFetchAbort,
            status,
            signal,
        };
        let index = this.#keyMap.get(k);
        if (index === undefined) {
            if (status)
                status.fetch = 'miss';
            const p = this.#backgroundFetch(k, index, options, context);
            return (p.__returned = p);
        }
        else {
            // in cache, maybe already fetching
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v)) {
                const stale = allowStale && v.__staleWhileFetching !== undefined;
                if (status) {
                    status.fetch = 'inflight';
                    if (stale)
                        status.returnedStale = true;
                }
                return stale ? v.__staleWhileFetching : (v.__returned = v);
            }
            // if we force a refresh, that means do NOT serve the cached value,
            // unless we are already in the process of refreshing the cache.
            const isStale = this.#isStale(index);
            if (!forceRefresh && !isStale) {
                if (status)
                    status.fetch = 'hit';
                this.#moveToTail(index);
                if (updateAgeOnGet) {
                    this.#updateItemAge(index);
                }
                if (status)
                    this.#statusTTL(status, index);
                return v;
            }
            // ok, it is stale or a forced refresh, and not already fetching.
            // refresh the cache.
            const p = this.#backgroundFetch(k, index, options, context);
            const hasStale = p.__staleWhileFetching !== undefined;
            const staleVal = hasStale && allowStale;
            if (status) {
                status.fetch = isStale ? 'stale' : 'refresh';
                if (staleVal && isStale)
                    status.returnedStale = true;
            }
            return staleVal ? p.__staleWhileFetching : (p.__returned = p);
        }
    }
    async forceFetch(k, fetchOptions = {}) {
        const v = await this.fetch(k, fetchOptions);
        if (v === undefined)
            throw new Error('fetch() returned undefined');
        return v;
    }
    memo(k, memoOptions = {}) {
        const memoMethod = this.#memoMethod;
        if (!memoMethod) {
            throw new Error('no memoMethod provided to constructor');
        }
        const { context, forceRefresh, ...options } = memoOptions;
        const v = this.get(k, options);
        if (!forceRefresh && v !== undefined)
            return v;
        const vv = memoMethod(k, v, {
            options,
            context,
        });
        this.set(k, vv, options);
        return vv;
    }
    /**
     * Return a value from the cache. Will update the recency of the cache
     * entry found.
     *
     * If the key is not found, get() will return `undefined`.
     */
    get(k, getOptions = {}) {
        const { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, status, } = getOptions;
        const index = this.#keyMap.get(k);
        if (index !== undefined) {
            const value = this.#valList[index];
            const fetching = this.#isBackgroundFetch(value);
            if (status)
                this.#statusTTL(status, index);
            if (this.#isStale(index)) {
                if (status)
                    status.get = 'stale';
                // delete only if not an in-flight background fetch
                if (!fetching) {
                    if (!noDeleteOnStaleGet) {
                        this.#delete(k, 'expire');
                    }
                    if (status && allowStale)
                        status.returnedStale = true;
                    return allowStale ? value : undefined;
                }
                else {
                    if (status &&
                        allowStale &&
                        value.__staleWhileFetching !== undefined) {
                        status.returnedStale = true;
                    }
                    return allowStale ? value.__staleWhileFetching : undefined;
                }
            }
            else {
                if (status)
                    status.get = 'hit';
                // if we're currently fetching it, we don't actually have it yet
                // it's not stale, which means this isn't a staleWhileRefetching.
                // If it's not stale, and fetching, AND has a __staleWhileFetching
                // value, then that means the user fetched with {forceRefresh:true},
                // so it's safe to return that value.
                if (fetching) {
                    return value.__staleWhileFetching;
                }
                this.#moveToTail(index);
                if (updateAgeOnGet) {
                    this.#updateItemAge(index);
                }
                return value;
            }
        }
        else if (status) {
            status.get = 'miss';
        }
    }
    #connect(p, n) {
        this.#prev[n] = p;
        this.#next[p] = n;
    }
    #moveToTail(index) {
        // if tail already, nothing to do
        // if head, move head to next[index]
        // else
        //   move next[prev[index]] to next[index] (head has no prev)
        //   move prev[next[index]] to prev[index]
        // prev[index] = tail
        // next[tail] = index
        // tail = index
        if (index !== this.#tail) {
            if (index === this.#head) {
                this.#head = this.#next[index];
            }
            else {
                this.#connect(this.#prev[index], this.#next[index]);
            }
            this.#connect(this.#tail, index);
            this.#tail = index;
        }
    }
    /**
     * Deletes a key out of the cache.
     *
     * Returns true if the key was deleted, false otherwise.
     */
    delete(k) {
        return this.#delete(k, 'delete');
    }
    #delete(k, reason) {
        let deleted = false;
        if (this.#size !== 0) {
            const index = this.#keyMap.get(k);
            if (index !== undefined) {
                deleted = true;
                if (this.#size === 1) {
                    this.#clear(reason);
                }
                else {
                    this.#removeItemSize(index);
                    const v = this.#valList[index];
                    if (this.#isBackgroundFetch(v)) {
                        v.__abortController.abort(new Error('deleted'));
                    }
                    else if (this.#hasDispose || this.#hasDisposeAfter) {
                        if (this.#hasDispose) {
                            this.#dispose?.(v, k, reason);
                        }
                        if (this.#hasDisposeAfter) {
                            this.#disposed?.push([v, k, reason]);
                        }
                    }
                    this.#keyMap.delete(k);
                    this.#keyList[index] = undefined;
                    this.#valList[index] = undefined;
                    if (index === this.#tail) {
                        this.#tail = this.#prev[index];
                    }
                    else if (index === this.#head) {
                        this.#head = this.#next[index];
                    }
                    else {
                        const pi = this.#prev[index];
                        this.#next[pi] = this.#next[index];
                        const ni = this.#next[index];
                        this.#prev[ni] = this.#prev[index];
                    }
                    this.#size--;
                    this.#free.push(index);
                }
            }
        }
        if (this.#hasDisposeAfter && this.#disposed?.length) {
            const dt = this.#disposed;
            let task;
            while ((task = dt?.shift())) {
                this.#disposeAfter?.(...task);
            }
        }
        return deleted;
    }
    /**
     * Clear the cache entirely, throwing away all values.
     */
    clear() {
        return this.#clear('delete');
    }
    #clear(reason) {
        for (const index of this.#rindexes({ allowStale: true })) {
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v)) {
                v.__abortController.abort(new Error('deleted'));
            }
            else {
                const k = this.#keyList[index];
                if (this.#hasDispose) {
                    this.#dispose?.(v, k, reason);
                }
                if (this.#hasDisposeAfter) {
                    this.#disposed?.push([v, k, reason]);
                }
            }
        }
        this.#keyMap.clear();
        this.#valList.fill(undefined);
        this.#keyList.fill(undefined);
        if (this.#ttls && this.#starts) {
            this.#ttls.fill(0);
            this.#starts.fill(0);
        }
        if (this.#sizes) {
            this.#sizes.fill(0);
        }
        this.#head = 0;
        this.#tail = 0;
        this.#free.length = 0;
        this.#calculatedSize = 0;
        this.#size = 0;
        if (this.#hasDisposeAfter && this.#disposed) {
            const dt = this.#disposed;
            let task;
            while ((task = dt?.shift())) {
                this.#disposeAfter?.(...task);
            }
        }
    }
}
//# sourceMappingURL=index.js.map

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

/***/ "./packages/grafana-data/src/transformations/transformers/nulls/nullToUndefThreshold.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nullToUndefThreshold: () => (/* binding */ nullToUndefThreshold)
/* harmony export */ });

function nullToUndefThreshold(refValues, fieldValues, maxThreshold) {
  let prevRef;
  let nullIdx;
  for (let i = 0; i < fieldValues.length; i++) {
    let fieldVal = fieldValues[i];
    if (fieldVal == null) {
      if (nullIdx == null && prevRef != null) {
        nullIdx = i;
      }
    } else {
      if (nullIdx != null && prevRef != null) {
        if (refValues[i] - prevRef < maxThreshold) {
          while (nullIdx < i) {
            fieldValues[nullIdx++] = void 0;
          }
        }
        nullIdx = null;
      }
      prevRef = refValues[i];
    }
  }
  return fieldValues;
}


/***/ }),

/***/ "./public/app/core/components/GraphNG/GraphNG.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphNG: () => (/* binding */ GraphNG)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/field/fieldOverrides.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/VizLayout/VizLayout.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/Plot.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/GraphNG/utils.ts");








function sameProps(prevProps, nextProps, propsToDiff = []) {
  for (const propName of propsToDiff) {
    if (typeof propName === "function") {
      if (!propName(prevProps, nextProps)) {
        return false;
      }
    } else if (nextProps[propName] !== prevProps[propName]) {
      return false;
    }
  }
  return true;
}
const defaultMatchers = {
  x: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.fieldMatchers.get(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldMatcherID.firstTimeField).get({}),
  y: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.fieldMatchers.get(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldMatcherID.byTypes).get(/* @__PURE__ */ new Set([_grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.number, _grafana_data__WEBPACK_IMPORTED_MODULE_5__.FieldType.enum]))
};
class GraphNG extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.getTimeRange = () => this.props.timeRange;
    let state = this.prepState(props);
    state.alignedData = state.config.prepData([state.alignedFrame]);
    this.state = state;
    this.plotInstance = react__WEBPACK_IMPORTED_MODULE_1__.createRef();
  }
  prepState(props, withConfig = true) {
    let state = null;
    const { frames, fields = defaultMatchers, preparePlotFrame, replaceVariables, dataLinkPostProcessor } = props;
    const preparePlotFrameFn = preparePlotFrame ?? _utils__WEBPACK_IMPORTED_MODULE_9__.preparePlotFrame;
    const withLinks = frames.some((frame) => frame.fields.some((field) => (field.config.links?.length ?? 0) > 0));
    const alignedFrame = preparePlotFrameFn(
      frames,
      {
        ...fields,
        // if there are data links, keep all fields during join so they're index-matched
        y: withLinks ? () => true : fields.y
      },
      props.timeRange
    );
    (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__.pluginLog)("GraphNG", false, "data aligned", alignedFrame);
    if (alignedFrame) {
      let alignedFrameFinal = alignedFrame;
      if (withLinks) {
        const timeZone = Array.isArray(this.props.timeZone) ? this.props.timeZone[0] : this.props.timeZone;
        let linkFrames = frames.map((frame, frameIdx) => ({
          ...frame,
          fields: alignedFrame.fields.filter(
            (field, fieldIdx) => fieldIdx === 0 || field.state?.origin?.frameIndex === frameIdx
          ),
          length: alignedFrame.length
        }));
        linkFrames.forEach((linkFrame, frameIndex) => {
          linkFrame.fields.forEach((field) => {
            field.getLinks = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.getLinksSupplier)(
              linkFrame,
              field,
              {
                ...field.state?.scopedVars,
                __dataContext: {
                  value: {
                    data: linkFrames,
                    field,
                    frame: linkFrame,
                    frameIndex
                  }
                }
              },
              replaceVariables,
              timeZone,
              dataLinkPostProcessor
            );
          });
        });
        alignedFrameFinal = {
          ...alignedFrame,
          fields: alignedFrame.fields.filter((field, i) => i === 0 || fields.y(field, alignedFrame, [alignedFrame]))
        };
      }
      if (props.omitHideFromViz) {
        const nonHiddenFields = alignedFrameFinal.fields.filter((field) => field.config.custom?.hideFrom?.viz !== true);
        alignedFrameFinal = {
          ...alignedFrameFinal,
          fields: nonHiddenFields,
          length: nonHiddenFields.length
        };
      }
      let config = this.state?.config;
      if (withConfig) {
        config = props.prepConfig(alignedFrameFinal, this.props.frames, this.getTimeRange);
        (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__.pluginLog)("GraphNG", false, "config prepared", config);
      }
      state = {
        alignedFrame: alignedFrameFinal,
        config
      };
      (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__.pluginLog)("GraphNG", false, "data prepared", state.alignedData);
    }
    return state;
  }
  componentDidUpdate(prevProps) {
    const { frames, structureRev, timeZone, cursorSync, propsToDiff } = this.props;
    const propsChanged = !sameProps(prevProps, this.props, propsToDiff);
    if (frames !== prevProps.frames || propsChanged || timeZone !== prevProps.timeZone || cursorSync !== prevProps.cursorSync) {
      let newState = this.prepState(this.props, false);
      if (newState) {
        const shouldReconfig = this.state.config === void 0 || timeZone !== prevProps.timeZone || cursorSync !== prevProps.cursorSync || structureRev !== prevProps.structureRev || !structureRev || propsChanged;
        if (shouldReconfig) {
          newState.config = this.props.prepConfig(newState.alignedFrame, this.props.frames, this.getTimeRange);
          (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__.pluginLog)("GraphNG", false, "config recreated", newState.config);
        }
        newState.alignedData = newState.config.prepData([newState.alignedFrame]);
        this.setState(newState);
      }
    }
  }
  render() {
    const { width, height, children, renderLegend } = this.props;
    const { config, alignedFrame, alignedData } = this.state;
    if (!config) {
      return null;
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.VizLayout, { width, height, legend: renderLegend(config), children: (vizWidth, vizHeight) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_7__.UPlotChart,
      {
        config,
        data: alignedData,
        width: vizWidth,
        height: vizHeight,
        plotRef: (u) => this.plotInstance.current = u,
        children: children ? children(config, alignedFrame) : null
      }
    ) });
  }
}


/***/ }),

/***/ "./public/app/core/components/GraphNG/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRefField: () => (/* binding */ getRefField),
/* harmony export */   preparePlotFrame: () => (/* binding */ preparePlotFrame)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/utils/numbers.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/joinDataFrames.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/nulls/nullInsertThreshold.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/nulls/nullToUndefThreshold.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");




function isVisibleBarField(f) {
  return f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.number && f.config.custom?.drawStyle === _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.GraphDrawStyle.Bars && !f.config.custom?.hideFrom?.viz;
}
function getRefField(frame, refFieldName) {
  return frame.fields.find((field) => {
    return refFieldName != null ? field.name === refFieldName : field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.time;
  });
}
function applySpanNullsThresholds(frame, refFieldName) {
  const refField = getRefField(frame, refFieldName);
  let refValues = refField?.values;
  for (let i = 0; i < frame.fields.length; i++) {
    let field = frame.fields[i];
    if (field === refField || isVisibleBarField(field)) {
      continue;
    }
    let spanNulls = field.config.custom?.spanNulls;
    if (typeof spanNulls === "number") {
      if (spanNulls !== -1 && refValues) {
        field.values = (0,_grafana_data_internal__WEBPACK_IMPORTED_MODULE_4__.nullToUndefThreshold)(refValues, field.values, spanNulls);
      }
    }
  }
  return frame;
}
function getXField(dimFields, frame, frames) {
  for (let field of frame.fields) {
    if (dimFields.x(field, frame, frames)) {
      return field;
    }
  }
  return;
}
function preparePlotFrame(frames, dimFields, timeRange) {
  frames = frames.map((frame) => {
    const xField = getXField(dimFields, frame, frames);
    if (xField != null && !xField.state?.nullThresholdApplied) {
      return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.applyNullInsertThreshold)({
        frame,
        refFieldName: xField.name,
        refFieldPseudoMin: timeRange?.from.valueOf(),
        refFieldPseudoMax: timeRange?.to.valueOf()
      });
    } else {
      return frame;
    }
  });
  let numBarSeries = frames.reduce(
    (acc, frame) => acc + frame.fields.reduce((acc2, field) => acc2 + (isVisibleBarField(field) ? 1 : 0), 0),
    0
  );
  let minXDeltaGlobal = null;
  if (numBarSeries > 1) {
    const minXDeltas = /* @__PURE__ */ new Set();
    frames.forEach((frame) => {
      if (!frame.fields.some(isVisibleBarField)) {
        return;
      }
      const xField = getXField(dimFields, frame, frames);
      if (xField == null) {
        return;
      }
      let minXDeltaFrame = Infinity;
      const xVals = xField.values;
      for (let i = 0; i < xVals.length; i++) {
        if (i > 0) {
          minXDeltaFrame = Math.min(minXDeltaFrame, xVals[i] - xVals[i - 1]);
        }
      }
      if (minXDeltaFrame !== Infinity) {
        if (!Number.isInteger(minXDeltaFrame)) {
          minXDeltaFrame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.roundDecimals)(minXDeltaFrame, 6);
        }
        minXDeltas.add(minXDeltaFrame);
      }
    });
    if (minXDeltas.size > 1) {
      minXDeltaGlobal = Math.min(...minXDeltas);
    }
  }
  let alignedFrame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.joinDataFrames)({
    frames,
    joinBy: dimFields.x,
    keep: dimFields.y,
    keepOriginIndices: true,
    // the join transformer force-deletes our state.displayName cache unless keepDisplayNames: true
    // https://github.com/grafana/grafana/pull/31121
    // https://github.com/grafana/grafana/pull/71806
    keepDisplayNames: true,
    // prevent minesweeper-expansion of nulls (gaps) when joining bars
    // since bar width is determined from the minimum distance between non-undefined values
    // (this strategy will still retain any original pre-join nulls, though)
    nullMode: (field) => {
      if (isVisibleBarField(field)) {
        return _grafana_data__WEBPACK_IMPORTED_MODULE_1__.NULL_RETAIN;
      }
      let spanNulls = field.config.custom?.spanNulls;
      return spanNulls === true ? _grafana_data__WEBPACK_IMPORTED_MODULE_1__.NULL_REMOVE : spanNulls === -1 ? _grafana_data__WEBPACK_IMPORTED_MODULE_1__.NULL_RETAIN : _grafana_data__WEBPACK_IMPORTED_MODULE_1__.NULL_EXPAND;
    }
  });
  if (alignedFrame) {
    alignedFrame = applySpanNullsThresholds(alignedFrame, alignedFrame.fields[0].name);
    if (minXDeltaGlobal != null) {
      alignedFrame.fields.forEach((f, fi) => {
        let vals = f.values;
        if (fi === 0) {
          let lastVal = vals[vals.length - 1];
          vals.push(lastVal + minXDeltaGlobal, lastVal + 2 * minXDeltaGlobal);
        } else if (isVisibleBarField(f)) {
          vals.push(null, null);
        } else {
          vals.push(void 0, void 0);
        }
      });
      alignedFrame.length += 2;
    }
    return alignedFrame;
  }
  return null;
}


/***/ }),

/***/ "./public/app/core/components/TimelineChart/TimelineChart.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimelineChart: () => (/* binding */ TimelineChart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/VizLayout/VizLayout.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/VizLegend/VizLegend.tsx");
/* harmony import */ var _GraphNG_GraphNG__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/GraphNG/GraphNG.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/components/TimelineChart/utils.ts");








const propsToDiff = ["rowHeight", "colWidth", "showValue", "mergeValues", "alignValue", "tooltip", "paginationRev"];
const TimelineChart = (props) => {
  const { frames, timeZone, rowHeight, tooltip, legend, legendItems } = props;
  const getValueColor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (frameIdx, fieldIdx, value) => {
      const field = frames[frameIdx]?.fields[fieldIdx];
      if (field?.display) {
        const disp = field.display(value);
        if (disp.color) {
          return disp.color;
        }
      }
      return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FALLBACK_COLOR;
    },
    [frames]
  );
  const prepConfig = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (alignedFrame, allFrames, getTimeRange) => {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_8__.preparePlotConfigBuilder)({
        frame: alignedFrame,
        getTimeRange,
        allFrames: frames,
        ...props,
        // Ensure timezones is passed as an array
        timeZones: Array.isArray(timeZone) ? timeZone : [timeZone],
        // When there is only one row, use the full space
        rowHeight: alignedFrame.fields.length > 2 ? rowHeight : 1,
        getValueColor,
        hoverMulti: tooltip?.mode === _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.TooltipDisplayMode.Multi
      });
    },
    [frames, props, timeZone, rowHeight, getValueColor, tooltip]
  );
  const renderLegend = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (config) => {
      if (!config || !legendItems || !legend || legend.showLegend === false) {
        return null;
      }
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.VizLayout.Legend, { placement: legend.placement, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.VizLegend, { placement: legend.placement, items: legendItems, displayMode: legend.displayMode, readonly: true }) });
    },
    [legend, legendItems]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _GraphNG_GraphNG__WEBPACK_IMPORTED_MODULE_7__.GraphNG,
    {
      ...props,
      fields: {
        x: (f) => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.time,
        y: (f) => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.number || f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.boolean || f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.string || f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.enum
      },
      prepConfig,
      propsToDiff,
      renderLegend,
      omitHideFromViz: true
    }
  );
};


/***/ }),

/***/ "./public/app/core/components/TimelineChart/timeline.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getConfig: () => (/* binding */ getConfig),
/* harmony export */   shouldDrawYValue: () => (/* binding */ shouldDrawYValue)
/* harmony export */ });
/* harmony import */ var uplot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/uplot/dist/uPlot.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/themes/colorManipulator.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/types.ts");
/* harmony import */ var app_plugins_panel_barchart_distribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/barchart/distribute.ts");
/* harmony import */ var app_plugins_panel_barchart_quadtree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/barchart/quadtree.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/TimelineChart/utils.ts");








const { round, min, ceil } = Math;
const textPadding = 2;
let pxPerChar = 6;
const laneDistr = app_plugins_panel_barchart_distribute__WEBPACK_IMPORTED_MODULE_4__.SPACE_BETWEEN;
function walk(rowHeight, yIdx, count, dim, draw) {
  (0,app_plugins_panel_barchart_distribute__WEBPACK_IMPORTED_MODULE_4__.distribute)(count, rowHeight, laneDistr, yIdx, (i, offPct, dimPct) => {
    let laneOffPx = dim * offPct;
    let laneWidPx = dim * dimPct;
    draw(i, laneOffPx, laneWidPx);
  });
}
function shouldDrawYValue(yValue, mappedNull, mappedNaN) {
  if (typeof yValue === "boolean") {
    return true;
  }
  if (typeof yValue === "string") {
    return true;
  }
  if (typeof yValue === "number" && !Number.isNaN(yValue)) {
    return true;
  }
  if (yValue === null && mappedNull) {
    return true;
  }
  if (Number.isNaN(yValue) && mappedNaN) {
    return true;
  }
  return !!yValue;
}
function getConfig(opts) {
  const {
    mode,
    numSeries,
    isDiscrete,
    hasMappedNull,
    hasMappedNaN,
    rowHeight = 0,
    colWidth = 0,
    showValue,
    mergeValues = false,
    theme,
    label,
    formatValue,
    alignValue = "left",
    getTimeRange,
    getValueColor,
    getFieldConfig,
    hoverMulti
  } = opts;
  let qt;
  let boxRectsBySeries;
  const resetBoxRectsBySeries = (count) => {
    boxRectsBySeries = Array(numSeries).fill(null).map((v) => Array(count).fill(null));
  };
  const font = `500 ${Math.round(12 * devicePixelRatio)}px ${theme.typography.fontFamily}`;
  const hovered = Array(numSeries).fill(null);
  let hoveredAtCursor = null;
  const size = [colWidth, Infinity];
  const gapFactor = 1 - size[0];
  const maxWidth = (size[1] ?? Infinity) * uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio;
  const fillPaths = /* @__PURE__ */ new Map();
  const strokePaths = /* @__PURE__ */ new Map();
  function drawBoxes(ctx) {
    fillPaths.forEach((fillPath, fillStyle) => {
      ctx.fillStyle = fillStyle;
      ctx.fill(fillPath);
    });
    strokePaths.forEach((strokePath, strokeStyle) => {
      ctx.strokeStyle = strokeStyle;
      ctx.stroke(strokePath);
    });
    fillPaths.clear();
    strokePaths.clear();
  }
  function putBox(ctx, rect, xOff, yOff, left, top, boxWidth, boxHeight, strokeWidth, seriesIdx, valueIdx, value, discrete) {
    boxWidth = Math.max(1, boxWidth);
    const valueColor = getValueColor(seriesIdx + 1, value);
    const fieldConfig = getFieldConfig(seriesIdx);
    const fillColor = getFillColor(fieldConfig, valueColor);
    boxRectsBySeries[seriesIdx][valueIdx] = {
      x: round(left - xOff),
      y: round(top - yOff),
      w: boxWidth,
      h: boxHeight,
      sidx: seriesIdx + 1,
      didx: valueIdx,
      // for computing label contrast
      fillColor
    };
    if (discrete) {
      let fillStyle = fillColor;
      let fillPath = fillPaths.get(fillStyle);
      if (fillPath == null) {
        fillPaths.set(fillStyle, fillPath = new Path2D());
      }
      rect(fillPath, left, top, boxWidth, boxHeight);
      if (strokeWidth) {
        let strokeStyle = valueColor;
        let strokePath = strokePaths.get(strokeStyle);
        if (strokePath == null) {
          strokePaths.set(strokeStyle, strokePath = new Path2D());
        }
        rect(
          strokePath,
          left + strokeWidth / 2,
          top + strokeWidth / 2,
          boxWidth - strokeWidth,
          boxHeight - strokeWidth
        );
      }
    } else {
      ctx.beginPath();
      rect(ctx, left, top, boxWidth, boxHeight);
      ctx.fillStyle = fillColor;
      ctx.fill();
      if (strokeWidth) {
        ctx.beginPath();
        rect(ctx, left + strokeWidth / 2, top + strokeWidth / 2, boxWidth - strokeWidth, boxHeight - strokeWidth);
        ctx.strokeStyle = valueColor;
        ctx.lineWidth = strokeWidth;
        ctx.stroke();
      }
    }
  }
  const drawPaths = (u, sidx, idx0, idx1) => {
    uplot__WEBPACK_IMPORTED_MODULE_0__["default"].orient(
      u,
      sidx,
      (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim, moveTo, lineTo, rect) => {
        let strokeWidth = round((series.width || 0) * uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio);
        const discrete = isDiscrete(sidx);
        const mappedNull = discrete && hasMappedNull(sidx);
        const mappedNaN = discrete && hasMappedNaN(sidx);
        u.ctx.save();
        rect(u.ctx, u.bbox.left, u.bbox.top, u.bbox.width, u.bbox.height);
        u.ctx.clip();
        walk(rowHeight, sidx - 1, numSeries, yDim, (iy, y0, height) => {
          if (mode === _utils__WEBPACK_IMPORTED_MODULE_6__.TimelineMode.Changes) {
            for (let ix = 0; ix < dataY.length; ix++) {
              let yVal = dataY[ix];
              const shouldDrawY = shouldDrawYValue(yVal, mappedNull, mappedNaN);
              if (shouldDrawY) {
                let left = Math.round(valToPosX(dataX[ix], scaleX, xDim, xOff));
                let nextIx = ix;
                while (++nextIx < dataY.length && (dataY[nextIx] === void 0 || mergeValues && dataY[nextIx] === yVal)) {
                }
                let right = nextIx === dataY.length ? xOff + xDim + strokeWidth : Math.round(valToPosX(dataX[nextIx], scaleX, xDim, xOff));
                putBox(
                  u.ctx,
                  rect,
                  xOff,
                  yOff,
                  left,
                  round(yOff + y0),
                  right - left,
                  round(height),
                  strokeWidth,
                  iy,
                  ix,
                  yVal,
                  discrete
                );
                ix = nextIx - 1;
              }
            }
          } else if (mode === _utils__WEBPACK_IMPORTED_MODULE_6__.TimelineMode.Samples) {
            let colWid = valToPosX(dataX[1], scaleX, xDim, xOff) - valToPosX(dataX[0], scaleX, xDim, xOff);
            let gapWid = colWid * gapFactor;
            let barWid = round(min(maxWidth, colWid - gapWid) - strokeWidth);
            let xShift = barWid / 2;
            for (let ix = idx0; ix <= idx1; ix++) {
              let yVal = dataY[ix];
              const shouldDrawY = shouldDrawYValue(yVal, mappedNull, mappedNaN);
              if (shouldDrawY) {
                let left = valToPosX(dataX[ix], scaleX, xDim, xOff);
                putBox(
                  u.ctx,
                  rect,
                  xOff,
                  yOff,
                  round(left - xShift),
                  round(yOff + y0),
                  barWid,
                  round(height),
                  strokeWidth,
                  iy,
                  ix,
                  yVal,
                  discrete
                );
              }
            }
          }
        });
        if (discrete) {
          u.ctx.lineWidth = strokeWidth;
          drawBoxes(u.ctx);
        }
        u.ctx.restore();
      }
    );
    return null;
  };
  const drawPoints = formatValue == null || showValue === _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.VisibilityMode.Never ? false : (u, sidx, i0, i1) => {
    u.ctx.save();
    u.ctx.rect(u.bbox.left, u.bbox.top, u.bbox.width, u.bbox.height);
    u.ctx.clip();
    u.ctx.font = font;
    u.ctx.textAlign = mode === _utils__WEBPACK_IMPORTED_MODULE_6__.TimelineMode.Changes ? alignValue : "center";
    u.ctx.textBaseline = "middle";
    uplot__WEBPACK_IMPORTED_MODULE_0__["default"].orient(
      u,
      sidx,
      (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim) => {
        let strokeWidth = round((series.width || 0) * uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio);
        let y = round(valToPosY(ySplits[sidx - 1], scaleY, yDim, yOff));
        const discrete = isDiscrete(sidx);
        const mappedNull = discrete && hasMappedNull(sidx);
        const mappedNaN = discrete && hasMappedNaN(sidx);
        for (let ix = 0; ix < dataY.length; ix++) {
          const yVal = dataY[ix];
          const shouldDrawY = shouldDrawYValue(yVal, mappedNull, mappedNaN);
          if (shouldDrawY) {
            const boxRect = boxRectsBySeries[sidx - 1][ix];
            if (!boxRect || boxRect.x >= xDim) {
              continue;
            }
            const displayedBoxWidth = boxRect.x < 0 ? boxRect?.w + boxRect.x : boxRect?.w;
            let maxChars = Math.floor(displayedBoxWidth / pxPerChar);
            if (showValue === _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.VisibilityMode.Auto && maxChars < 2) {
              continue;
            }
            let txt = formatValue(sidx, dataY[ix]);
            let x = round(boxRect.x + xOff + boxRect.w / 2);
            if (mode === _utils__WEBPACK_IMPORTED_MODULE_6__.TimelineMode.Changes) {
              if (alignValue === "left") {
                x = round(Math.max(boxRect.x, 0) + xOff + strokeWidth + textPadding);
              } else if (alignValue === "right") {
                x = round(boxRect.x + xOff + boxRect.w - strokeWidth - textPadding);
              }
            }
            u.ctx.fillStyle = theme.colors.getContrastText(boxRect.fillColor, 3);
            u.ctx.fillText(txt.slice(0, maxChars), x, y);
          }
        }
      }
    );
    u.ctx.restore();
    return false;
  };
  const init = (u) => {
    let chars = "";
    for (let i = 32; i <= 126; i++) {
      chars += String.fromCharCode(i);
    }
    pxPerChar = Math.ceil(u.ctx.measureText(chars).width / chars.length * uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio);
    pxPerChar += 2.5;
    u.root.querySelectorAll(".u-cursor-pt").forEach((el) => {
      el.style.borderRadius = "0";
    });
  };
  const drawClear = (u) => {
    qt = qt || new app_plugins_panel_barchart_quadtree__WEBPACK_IMPORTED_MODULE_5__.Quadtree(0, 0, u.bbox.width, u.bbox.height);
    qt.clear();
    resetBoxRectsBySeries(u.data[0].length);
    u.series.forEach((s) => {
      s._paths = null;
    });
  };
  function setHovered(cx, cy, viaSync = false) {
    hovered.fill(null);
    hoveredAtCursor = null;
    if (cx < 0) {
      return;
    }
    qt.get(cx, 0, uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio, 1e4, (o) => {
      if (cx >= o.x && cx <= o.x + o.w) {
        if (cy >= o.y && cy <= o.y + o.h) {
          hovered[o.sidx] = hoveredAtCursor = o;
        } else if (hoverMulti || viaSync) {
          hovered[o.sidx] = o;
        }
      }
    });
  }
  const cursor = {
    x: mode === _utils__WEBPACK_IMPORTED_MODULE_6__.TimelineMode.Changes,
    y: false,
    dataIdx: (u, seriesIdx) => {
      if (seriesIdx === 1) {
        if (qt.o.length === 0 && qt.q == null) {
          for (const seriesRects of boxRectsBySeries) {
            for (const rect of seriesRects) {
              rect && qt.add(rect);
            }
          }
        }
        let cx = u.cursor.left * uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio;
        let cy = u.cursor.top * uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio;
        setHovered(cx, cy, u.cursor.event == null);
      }
      return hovered[seriesIdx]?.didx;
    },
    focus: {
      prox: 1e3,
      dist: (u, seriesIdx) => hoveredAtCursor?.sidx === seriesIdx ? 0 : Infinity
    },
    points: {
      fill: "rgba(255,255,255,0.2)",
      bbox: (u, seriesIdx) => {
        let hRect = hovered[seriesIdx];
        let isHovered = hRect != null;
        return {
          left: isHovered ? hRect.x / uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio : -10,
          top: isHovered ? hRect.y / uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio : -10,
          width: isHovered ? hRect.w / uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio : 0,
          height: isHovered ? hRect.h / uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio : 0
        };
      }
    }
  };
  const ySplits = Array(numSeries).fill(0);
  const yRange = [0, 1];
  return {
    cursor,
    xSplits: mode === _utils__WEBPACK_IMPORTED_MODULE_6__.TimelineMode.Samples ? (u, axisIdx, scaleMin, scaleMax, foundIncr, foundSpace) => {
      let splits = [];
      let dataIncr = u.data[0][1] - u.data[0][0];
      let skipFactor = ceil(foundIncr / dataIncr);
      for (let i = 0; i < u.data[0].length; i += skipFactor) {
        let v = u.data[0][i];
        if (v >= scaleMin && v <= scaleMax) {
          splits.push(v);
        }
      }
      return splits;
    } : null,
    xRange: (u) => {
      const r = getTimeRange();
      let min2 = r.from.valueOf();
      let max = r.to.valueOf();
      if (mode === _utils__WEBPACK_IMPORTED_MODULE_6__.TimelineMode.Samples) {
        let colWid = u.data[0][1] - u.data[0][0];
        let scalePad = colWid / 2;
        if (min2 <= u.data[0][0]) {
          min2 = u.data[0][0] - scalePad;
        }
        let lastIdx = u.data[0].length - 1;
        if (max >= u.data[0][lastIdx]) {
          max = u.data[0][lastIdx] + scalePad;
        }
      }
      const result = [min2, max];
      return result;
    },
    ySplits: (u) => {
      walk(rowHeight, null, numSeries, u.bbox.height, (iy, y0, hgt) => {
        let yMid = round(y0 + hgt / 2);
        ySplits[iy] = u.posToVal(yMid / uplot__WEBPACK_IMPORTED_MODULE_0__["default"].pxRatio, _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FIXED_UNIT);
      });
      return ySplits;
    },
    yValues: (u, splits) => splits.map((v, i) => label(i + 1)),
    yRange,
    // pathbuilders
    drawPaths,
    drawPoints,
    // hooks
    init,
    drawClear
  };
}
function getFillColor(fieldConfig, color) {
  if (color[0] === "#" && color.length === 9) {
    return color;
  }
  const opacityPercent = (fieldConfig.fillOpacity ?? 100) / 100;
  return _grafana_data__WEBPACK_IMPORTED_MODULE_1__.colorManipulator.alpha(color, opacityPercent);
}


/***/ }),

/***/ "./public/app/core/components/TimelineChart/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimelineMode: () => (/* binding */ TimelineMode),
/* harmony export */   findNextStateIndex: () => (/* binding */ findNextStateIndex),
/* harmony export */   fmtDuration: () => (/* binding */ fmtDuration),
/* harmony export */   getFieldLegendItem: () => (/* binding */ getFieldLegendItem),
/* harmony export */   getThresholdItems: () => (/* binding */ getThresholdItems),
/* harmony export */   getValueMappingItems: () => (/* binding */ getValueMappingItems),
/* harmony export */   hasSpecialMappedValue: () => (/* binding */ hasSpecialMappedValue),
/* harmony export */   makeFramePerSeries: () => (/* binding */ makeFramePerSeries),
/* harmony export */   mergeThresholdValues: () => (/* binding */ mergeThresholdValues),
/* harmony export */   preparePlotConfigBuilder: () => (/* binding */ preparePlotConfigBuilder),
/* harmony export */   prepareTimelineFields: () => (/* binding */ prepareTimelineFields),
/* harmony export */   prepareTimelineLegendItems: () => (/* binding */ prepareTimelineLegendItems)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/field/thresholds.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/field/scale.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/joinDataFrames.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/nulls/nullInsertThreshold.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/nulls/nullToValue.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/types/thresholds.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-data/src/types/valueMapping.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-schema/src/raw/dashboard/x/dashboard_types.gen.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/config/UPlotConfigBuilder.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/types.ts");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/utils.ts");
/* harmony import */ var _timeline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/core/components/TimelineChart/timeline.ts");








var TimelineMode = /* @__PURE__ */ ((TimelineMode2) => {
  TimelineMode2["Changes"] = "changes";
  TimelineMode2["Samples"] = "samples";
  return TimelineMode2;
})(TimelineMode || {});
const defaultConfig = {
  lineWidth: 0,
  fillOpacity: 80
};
const hasSpecialMappedValue = (field, match) => field.config.mappings?.some(
  (mapping) => mapping.type === _grafana_schema__WEBPACK_IMPORTED_MODULE_12__.MappingType.SpecialValue && mapping.options.match === match
) || false;
const preparePlotConfigBuilder = ({
  frame,
  theme,
  timeZones,
  getTimeRange,
  mode,
  rowHeight,
  colWidth,
  showValue,
  alignValue,
  mergeValues,
  getValueColor,
  hoverMulti
}) => {
  const builder = new _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.UPlotConfigBuilder(timeZones[0]);
  const xScaleKey = "x";
  const isDiscrete = (field) => {
    const mode2 = field.config?.color?.mode;
    return !(mode2 && field.display && mode2.startsWith("continuous-"));
  };
  const getValueColorFn = (seriesIdx, value) => {
    const field = frame.fields[seriesIdx];
    if (field.state?.origin?.fieldIndex !== void 0 && field.state?.origin?.frameIndex !== void 0 && getValueColor) {
      return getValueColor(field.state?.origin?.frameIndex, field.state?.origin?.fieldIndex, value);
    }
    return _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FALLBACK_COLOR;
  };
  const opts = {
    mode,
    numSeries: frame.fields.length - 1,
    isDiscrete: (seriesIdx) => isDiscrete(frame.fields[seriesIdx]),
    hasMappedNull: (seriesIdx) => hasSpecialMappedValue(frame.fields[seriesIdx], _grafana_data__WEBPACK_IMPORTED_MODULE_9__.SpecialValueMatch.Null) || hasSpecialMappedValue(frame.fields[seriesIdx], _grafana_data__WEBPACK_IMPORTED_MODULE_9__.SpecialValueMatch.NullAndNaN),
    hasMappedNaN: (seriesIdx) => hasSpecialMappedValue(frame.fields[seriesIdx], _grafana_data__WEBPACK_IMPORTED_MODULE_9__.SpecialValueMatch.NaN) || hasSpecialMappedValue(frame.fields[seriesIdx], _grafana_data__WEBPACK_IMPORTED_MODULE_9__.SpecialValueMatch.NullAndNaN),
    mergeValues,
    rowHeight,
    colWidth,
    showValue,
    alignValue,
    theme,
    label: (seriesIdx) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getFieldDisplayName)(frame.fields[seriesIdx], frame),
    getFieldConfig: (seriesIdx) => frame.fields[seriesIdx].config.custom,
    getValueColor: getValueColorFn,
    getTimeRange,
    // hardcoded formatter for state values
    formatValue: (seriesIdx, value) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.formattedValueToString)(frame.fields[seriesIdx].display(value)),
    hoverMulti
  };
  const coreConfig = (0,_timeline__WEBPACK_IMPORTED_MODULE_17__.getConfig)(opts);
  builder.addHook("init", coreConfig.init);
  builder.addHook("drawClear", coreConfig.drawClear);
  builder.setPrepData((frames) => (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_16__.preparePlotData2)(frames[0], (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_16__.getStackingGroups)(frames[0])));
  builder.setCursor(coreConfig.cursor);
  builder.addScale({
    scaleKey: xScaleKey,
    isTime: true,
    orientation: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.ScaleOrientation.Horizontal,
    direction: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.ScaleDirection.Right,
    range: coreConfig.xRange
  });
  builder.addScale({
    scaleKey: _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.FIXED_UNIT,
    // y
    isTime: false,
    orientation: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.ScaleOrientation.Vertical,
    direction: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.ScaleDirection.Up,
    range: coreConfig.yRange
  });
  const xField = frame.fields[0];
  const xAxisHidden = xField.config.custom.axisPlacement === _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.AxisPlacement.Hidden;
  builder.addAxis({
    show: !xAxisHidden,
    scaleKey: xScaleKey,
    isTime: true,
    splits: coreConfig.xSplits,
    placement: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.AxisPlacement.Bottom,
    timeZone: timeZones[0],
    theme,
    formatValue: xField.config.unit?.startsWith("time:") ? (v, decimals) => xField.display(v, decimals).text : void 0
  });
  const yCustomConfig = frame.fields[1].config.custom;
  const yAxisWidth = yCustomConfig.axisWidth;
  const yAxisHidden = yCustomConfig.axisPlacement === _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.AxisPlacement.Hidden;
  builder.addAxis({
    scaleKey: _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.FIXED_UNIT,
    // y
    isTime: false,
    placement: _grafana_schema__WEBPACK_IMPORTED_MODULE_13__.AxisPlacement.Left,
    splits: coreConfig.ySplits,
    values: yAxisHidden ? (u, splits) => splits.map((v) => null) : coreConfig.yValues,
    grid: { show: false },
    ticks: { show: false },
    gap: yAxisHidden ? 0 : 16,
    size: yAxisHidden ? 0 : yAxisWidth,
    theme
  });
  let seriesIndex = 0;
  for (let i = 0; i < frame.fields.length; i++) {
    if (i === 0) {
      continue;
    }
    const field = frame.fields[i];
    const config = field.config;
    const customConfig = {
      ...defaultConfig,
      ...config.custom
    };
    field.state.seriesIndex = seriesIndex++;
    builder.addSeries({
      scaleKey: _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.FIXED_UNIT,
      pathBuilder: coreConfig.drawPaths,
      pointsBuilder: coreConfig.drawPoints,
      //colorMode,
      lineWidth: customConfig.lineWidth,
      fillOpacity: customConfig.fillOpacity,
      theme,
      show: !customConfig.hideFrom?.viz,
      thresholds: config.thresholds,
      // The following properties are not used in the uPlot config, but are utilized as transport for legend config
      dataFrameFieldIndex: field.state?.origin
    });
  }
  return builder;
};
function getSpanNulls(field) {
  let spanNulls = field.config.custom?.spanNulls;
  return !spanNulls ? -1 : spanNulls === true ? Infinity : spanNulls;
}
function mergeThresholdValues(field, theme) {
  const thresholds = field.config.thresholds;
  if (field.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_10__.FieldType.number || !thresholds || !thresholds.steps.length) {
    return void 0;
  }
  const items = getThresholdItems(field.config, theme);
  if (items.length !== thresholds.steps.length) {
    return void 0;
  }
  const thresholdToText = /* @__PURE__ */ new Map();
  const textToColor = /* @__PURE__ */ new Map();
  for (let i = 0; i < items.length; i++) {
    thresholdToText.set(thresholds.steps[i], items[i].label);
    textToColor.set(items[i].label, items[i].color);
  }
  let input = field.values;
  const vals = new Array(field.values.length);
  if (thresholds.mode === _grafana_data__WEBPACK_IMPORTED_MODULE_8__.ThresholdsMode.Percentage) {
    const { min, max } = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getFieldConfigWithMinMax)(field);
    const delta = max - min;
    input = input.map((v) => {
      if (v == null) {
        return v;
      }
      return (v - min) / delta * 100;
    });
  }
  for (let i = 0; i < vals.length; i++) {
    const v = input[i];
    if (v == null) {
      vals[i] = v;
    } else {
      vals[i] = thresholdToText.get((0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getActiveThreshold)(v, thresholds.steps));
    }
  }
  return {
    ...field,
    config: {
      ...field.config,
      custom: {
        ...field.config.custom,
        spanNulls: getSpanNulls(field)
      }
    },
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_10__.FieldType.string,
    values: vals,
    display: (value) => ({
      text: String(value),
      color: textToColor.get(String(value)),
      numeric: NaN
    })
  };
}
function prepareTimelineFields(series, mergeValues, timeRange, theme) {
  if (!series?.length) {
    return { warn: "" };
  }
  (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.cacheFieldDisplayNames)(series);
  let hasTimeseries = false;
  const frames = [];
  for (let frame of series) {
    let startFieldIdx = -1;
    let endFieldIdx = -1;
    for (let i = 0; i < frame.fields.length; i++) {
      let f = frame.fields[i];
      if (f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_10__.FieldType.time && typeof f.values[0] === "number") {
        if (startFieldIdx === -1) {
          startFieldIdx = i;
        } else if (endFieldIdx === -1) {
          endFieldIdx = i;
          break;
        }
      }
    }
    let isTimeseries = startFieldIdx !== -1;
    let changed = false;
    frame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.maybeSortFrame)(frame, startFieldIdx);
    if (endFieldIdx !== -1) {
      let startFrame = {
        ...frame,
        fields: frame.fields.filter((f, i) => i !== endFieldIdx)
      };
      let endFrame = {
        length: frame.length,
        fields: [frame.fields[endFieldIdx]]
      };
      frame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.joinDataFrames)({
        frames: [startFrame, endFrame],
        keepDisplayNames: true,
        nullMode: () => _grafana_data__WEBPACK_IMPORTED_MODULE_3__.NULL_RETAIN
      });
      frame.fields.forEach((f, i) => {
        if (i > 0) {
          let vals = f.values;
          for (let i2 = 0; i2 < vals.length; i2++) {
            if (vals[i2] == null) {
              vals[i2] = null;
            }
          }
        }
      });
      changed = true;
    }
    let nulledFrame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.applyNullInsertThreshold)({
      frame,
      refFieldPseudoMin: timeRange.from.valueOf(),
      refFieldPseudoMax: timeRange.to.valueOf()
    });
    if (nulledFrame !== frame) {
      changed = true;
    }
    frame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.nullToValue)(nulledFrame);
    const fields = [];
    for (let field of frame.fields) {
      switch (field.type) {
        case _grafana_data__WEBPACK_IMPORTED_MODULE_10__.FieldType.time:
          if (typeof field.values[0] === "number") {
            isTimeseries = true;
            hasTimeseries = true;
            fields.push(field);
          }
          break;
        case _grafana_data__WEBPACK_IMPORTED_MODULE_10__.FieldType.enum:
        case _grafana_data__WEBPACK_IMPORTED_MODULE_10__.FieldType.number:
          if (mergeValues && field.config.color?.mode === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldColorModeId.Thresholds) {
            const f = mergeThresholdValues(field, theme);
            if (f) {
              fields.push(f);
              changed = true;
              continue;
            }
          }
        case _grafana_data__WEBPACK_IMPORTED_MODULE_10__.FieldType.boolean:
        case _grafana_data__WEBPACK_IMPORTED_MODULE_10__.FieldType.string:
          field = {
            ...field,
            config: {
              ...field.config,
              custom: {
                ...field.config.custom,
                spanNulls: getSpanNulls(field)
              }
            }
          };
          changed = true;
          fields.push(field);
          break;
        default:
          changed = true;
      }
    }
    if (isTimeseries && fields.length > 1) {
      hasTimeseries = true;
      if (changed) {
        frames.push({
          ...frame,
          fields
        });
      } else {
        frames.push(frame);
      }
    }
  }
  if (!hasTimeseries) {
    return { warn: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_11__.t)("timeline.missing-field.time", "Data does not have a time field") };
  }
  if (!frames.length) {
    return { warn: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_11__.t)("timeline.missing-field.all", "No graphable fields") };
  }
  return { frames };
}
function makeFramePerSeries(frames) {
  const outFrames = [];
  for (let frame of frames) {
    const timeFields = frame.fields.filter((field) => field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_10__.FieldType.time);
    if (timeFields.length > 0) {
      for (let field of frame.fields) {
        if (field.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_10__.FieldType.time) {
          outFrames.push({ fields: [...timeFields, field], length: frame.length });
        }
      }
    }
  }
  return outFrames;
}
function getThresholdItems(fieldConfig, theme, thresholdItems) {
  const items = [];
  const thresholds = thresholdItems ? thresholdItems : fieldConfig.thresholds;
  if (!thresholds || !thresholds.steps.length) {
    return items;
  }
  const steps = thresholds.steps;
  const getDisplay = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.getValueFormat)(
    thresholds.mode === _grafana_data__WEBPACK_IMPORTED_MODULE_8__.ThresholdsMode.Percentage ? "percent" : fieldConfig.unit ?? ""
  );
  const format = (value) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.formattedValueToString)(getDisplay(value, fieldConfig.decimals ?? void 0));
  for (let i = 0; i < steps.length; i++) {
    let step = steps[i];
    let value = step.value;
    let pre = "";
    let suf = "";
    if (value === -Infinity && i < steps.length - 1) {
      value = steps[i + 1].value;
      pre = "< ";
    } else {
      suf = "+";
    }
    items.push({
      label: `${pre}${format(value)}${suf}`,
      color: theme.visualization.getColorByName(step.color),
      yAxis: 1
    });
  }
  return items;
}
function getValueMappingItems(mappings, theme) {
  const items = [];
  if (!mappings) {
    return items;
  }
  for (let mapping of mappings) {
    const { options, type } = mapping;
    if (type === _grafana_schema__WEBPACK_IMPORTED_MODULE_12__.MappingType.ValueToText) {
      for (let [label, value] of Object.entries(options)) {
        const color = value.color;
        items.push({
          label,
          color: theme.visualization.getColorByName(color ?? _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FALLBACK_COLOR),
          yAxis: 1
        });
      }
    }
    if (type === _grafana_schema__WEBPACK_IMPORTED_MODULE_12__.MappingType.RangeToText) {
      const { from, result, to } = options;
      const { text, color } = result;
      const label = text ? `[${from} - ${to}] ${text}` : `[${from} - ${to}]`;
      items.push({
        label,
        color: theme.visualization.getColorByName(color ?? _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FALLBACK_COLOR),
        yAxis: 1
      });
    }
    if (type === _grafana_schema__WEBPACK_IMPORTED_MODULE_12__.MappingType.RegexToText) {
      const { pattern, result } = options;
      const { text, color } = result;
      const label = `${text || pattern}`;
      items.push({
        label,
        color: theme.visualization.getColorByName(color ?? _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FALLBACK_COLOR),
        yAxis: 1
      });
    }
    if (type === _grafana_schema__WEBPACK_IMPORTED_MODULE_12__.MappingType.SpecialValue) {
      const { match, result } = options;
      const { text, color } = result;
      const label = `${text || match}`;
      items.push({
        label,
        color: theme.visualization.getColorByName(color ?? _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FALLBACK_COLOR),
        yAxis: 1
      });
    }
  }
  return items;
}
function prepareTimelineLegendItems(frames, options, theme) {
  if (!frames || options.showLegend === false) {
    return void 0;
  }
  return getFieldLegendItem(allNonTimeFields(frames), theme);
}
function getFieldLegendItem(fields, theme) {
  if (!fields.length) {
    return void 0;
  }
  const items = [];
  const fieldConfig = fields[0].config;
  const colorMode = fieldConfig.color?.mode ?? _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldColorModeId.Fixed;
  const thresholds = fieldConfig.thresholds;
  if (colorMode === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FieldColorModeId.Thresholds && thresholds?.steps && thresholds.steps.length > 1) {
    return getThresholdItems(fieldConfig, theme);
  }
  if (colorMode.startsWith("continuous")) {
    return void 0;
  }
  const stateColors = /* @__PURE__ */ new Map();
  fields.forEach((field) => {
    if (!field.config.custom?.hideFrom?.legend) {
      field.values.forEach((v) => {
        let state = field.display(v);
        if (state.color) {
          stateColors.set(state.text, state.color);
        }
      });
    }
  });
  stateColors.forEach((color, label) => {
    if (label.length > 0) {
      items.push({
        label,
        color: theme.visualization.getColorByName(color ?? _grafana_data__WEBPACK_IMPORTED_MODULE_7__.FALLBACK_COLOR),
        yAxis: 1
      });
    }
  });
  return items;
}
function allNonTimeFields(frames) {
  const fields = [];
  for (const frame of frames) {
    for (const field of frame.fields) {
      if (field.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_10__.FieldType.time) {
        fields.push(field);
      }
    }
  }
  return fields;
}
function findNextStateIndex(field, datapointIdx) {
  let end;
  let rightPointer = datapointIdx + 1;
  if (rightPointer >= field.values.length) {
    return null;
  }
  const startValue = field.values[datapointIdx];
  while (end === void 0) {
    if (rightPointer >= field.values.length) {
      return null;
    }
    const rightValue = field.values[rightPointer];
    if (rightValue === void 0 || rightValue === startValue) {
      rightPointer++;
    } else {
      end = rightPointer;
    }
  }
  return end;
}
function fmtDuration(milliSeconds) {
  if (milliSeconds < 0 || Number.isNaN(milliSeconds)) {
    return "";
  }
  let yr, mo, wk, d, h, m, s, ms;
  s = Math.floor(milliSeconds / 1e3);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  yr = Math.floor(d / 365);
  if (yr > 0) {
    d = d % 365;
  }
  mo = Math.floor(d / 30);
  if (mo > 0) {
    d = d % 30;
  }
  wk = Math.floor(d / 7);
  if (wk > 0) {
    d = d % 7;
  }
  ms = Math.round(milliSeconds % 1e3 * 1e3) / 1e3;
  return (yr > 0 ? yr + "y " + (mo > 0 ? mo + "mo " : "") + (wk > 0 ? wk + "w " : "") + (d > 0 ? d + "d " : "") : mo > 0 ? mo + "mo " + (wk > 0 ? wk + "w " : "") + (d > 0 ? d + "d " : "") : wk > 0 ? wk + "w " + (d > 0 ? d + "d " : "") : d > 0 ? d + "d " + (h > 0 ? h + "h " : "") : h > 0 ? h + "h " + (m > 0 ? m + "m " : "") : m > 0 ? m + "m " + (s > 0 ? s + "s " : "") : s > 0 ? s + "s " + (ms > 0 ? ms + "ms " : "") : ms > 0 ? ms + "ms " : "0").trim();
}


/***/ }),

/***/ "./public/app/features/alerting/unified/api/stateHistoryApi.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stateHistoryApi: () => (/* binding */ stateHistoryApi)
/* harmony export */ });
/* harmony import */ var _alertingApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/api/alertingApi.ts");


const stateHistoryApi = _alertingApi__WEBPACK_IMPORTED_MODULE_0__.alertingApi.injectEndpoints({
  endpoints: (build) => ({
    getRuleHistory: build.query({
      query: ({ ruleUid, from, to, limit = 100, labels, previous, current }) => {
        const params = {
          ruleUID: ruleUid,
          from,
          to,
          limit,
          previous,
          current
        };
        if (labels) {
          Object.entries(labels).forEach(([key, value]) => {
            params[`labels_${key}`] = value;
          });
        }
        return {
          url: "/api/v1/rules/history",
          params
        };
      }
    })
  })
});


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

/***/ "./public/app/features/alerting/unified/components/rules/central-state-history/CentralAlertHistoryScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CentralAlertHistoryScene: () => (/* binding */ CentralAlertHistoryScene),
/* harmony export */   ClearFilterButtonObjectRenderer: () => (/* binding */ ClearFilterButtonObjectRenderer),
/* harmony export */   ClearFilterButtonScenesObject: () => (/* binding */ ClearFilterButtonScenesObject),
/* harmony export */   LABELS_FILTER: () => (/* binding */ LABELS_FILTER),
/* harmony export */   STATE_FILTER_FROM: () => (/* binding */ STATE_FILTER_FROM),
/* harmony export */   STATE_FILTER_TO: () => (/* binding */ STATE_FILTER_TO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getEventsScenesFlexItem: () => (/* binding */ getEventsScenesFlexItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/templateVars.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema_dist_esm_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _CentralHistoryRuntimeDataSource__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/central-state-history/CentralHistoryRuntimeDataSource.ts");
/* harmony import */ var _EventListSceneObject__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/central-state-history/EventListSceneObject.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/central-state-history/constants.ts");













const LABELS_FILTER = "LABELS_FILTER";
const STATE_FILTER_TO = "STATE_FILTER_TO";
const STATE_FILTER_FROM = "STATE_FILTER_FROM";
const CentralAlertHistoryScene = ({
  defaultLabelsFilter,
  defaultTimeRange = {
    from: "now-1h",
    to: "now"
  },
  hideFilters,
  hideAlertRuleColumn
} = {}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    (0,_Analytics__WEBPACK_IMPORTED_MODULE_12__.logInfo)(_Analytics__WEBPACK_IMPORTED_MODULE_12__.LogMessages.loadedCentralAlertStateHistory);
  }, []);
  (0,_CentralHistoryRuntimeDataSource__WEBPACK_IMPORTED_MODULE_13__.useRegisterHistoryRuntimeDataSource)();
  const scene = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const labelsFilterVariable = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.TextBoxVariable({
      name: LABELS_FILTER,
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.central-alert-history-scene.scene.labels-filter-variable.label.labels", "Labels: "),
      ...defaultLabelsFilter && { value: defaultLabelsFilter }
    });
    const transitionsToFilterVariable = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.CustomVariable({
      name: STATE_FILTER_TO,
      value: _constants__WEBPACK_IMPORTED_MODULE_15__.StateFilterValues.all,
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "alerting.central-alert-history-scene.scene.transitions-to-filter-variable.label.end-state",
        "End state:"
      ),
      hide: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.VariableHide.dontHide,
      query: `All : ${_constants__WEBPACK_IMPORTED_MODULE_15__.StateFilterValues.all}, To Firing : ${_constants__WEBPACK_IMPORTED_MODULE_15__.StateFilterValues.firing},To Normal : ${_constants__WEBPACK_IMPORTED_MODULE_15__.StateFilterValues.normal},To Pending : ${_constants__WEBPACK_IMPORTED_MODULE_15__.StateFilterValues.pending},To Recovering : ${_constants__WEBPACK_IMPORTED_MODULE_15__.StateFilterValues.recovering}`
    });
    const transitionsFromFilterVariable = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.CustomVariable({
      name: STATE_FILTER_FROM,
      value: _constants__WEBPACK_IMPORTED_MODULE_15__.StateFilterValues.all,
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "alerting.central-alert-history-scene.scene.transitions-from-filter-variable.label.start-state",
        "Start state:"
      ),
      hide: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.VariableHide.dontHide,
      query: `All : ${_constants__WEBPACK_IMPORTED_MODULE_15__.StateFilterValues.all}, From Firing : ${_constants__WEBPACK_IMPORTED_MODULE_15__.StateFilterValues.firing},From Normal : ${_constants__WEBPACK_IMPORTED_MODULE_15__.StateFilterValues.normal},From Pending : ${_constants__WEBPACK_IMPORTED_MODULE_15__.StateFilterValues.pending},From Recovering : ${_constants__WEBPACK_IMPORTED_MODULE_15__.StateFilterValues.recovering}`
    });
    return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.EmbeddedScene({
      controls: hideFilters ? void 0 : [
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.SceneReactObject({
          component: LabelFilter
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.SceneReactObject({
          component: FilterInfo
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.VariableValueSelectors({}),
        new ClearFilterButtonScenesObject({}),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.SceneControlsSpacer(),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.SceneTimePicker({}),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.SceneRefreshPicker({})
      ],
      // use default time range as from 1 hour ago to now, as the limit of the history api is 5000 events,
      // and using a wider time range might lead to showing gaps in the events list and the chart.
      $timeRange: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.SceneTimeRange(defaultTimeRange),
      $variables: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.SceneVariableSet({
        variables: [labelsFilterVariable, transitionsFromFilterVariable, transitionsToFilterVariable]
      }),
      body: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.SceneFlexLayout({
        direction: "column",
        children: [
          getEventsScenesFlexItem(),
          new _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.SceneFlexItem({
            body: new _EventListSceneObject__WEBPACK_IMPORTED_MODULE_14__.HistoryEventsListObject({ hideAlertRuleColumn })
          })
        ]
      })
    });
  }, [defaultLabelsFilter, defaultTimeRange, hideFilters, hideAlertRuleColumn]);
  const isUrlSyncInitialized = (0,_grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.useUrlSync)(scene);
  if (!isUrlSyncInitialized) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(scene.Component, { model: scene });
};
function getQueryRunnerForAlertHistoryDataSource() {
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.SceneQueryRunner({
    datasource: _CentralHistoryRuntimeDataSource__WEBPACK_IMPORTED_MODULE_13__.alertStateHistoryDatasource,
    queries: [
      {
        refId: "A",
        labels: "${LABELS_FILTER}",
        stateFrom: "${STATE_FILTER_FROM}",
        stateTo: "${STATE_FILTER_TO}"
      }
    ]
  });
  return query;
}
function getEventsScenesFlexItem() {
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.SceneFlexItem({
    minHeight: 300,
    ySizing: "content",
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.PanelBuilders.timeseries().setTitle("Alert Events").setDescription(
      "Each alert event represents an alert instance that changed its state at a particular point in time. The history of the data is displayed over a period of time."
    ).setData(getQueryRunnerForAlertHistoryDataSource()).setColor({ mode: "continuous-BlPu" }).setCustomFieldConfig("fillOpacity", 100).setCustomFieldConfig("drawStyle", _grafana_schema_dist_esm_index__WEBPACK_IMPORTED_MODULE_6__.GraphDrawStyle.Bars).setCustomFieldConfig("lineInterpolation", _grafana_schema_dist_esm_index__WEBPACK_IMPORTED_MODULE_6__.LineInterpolation.Linear).setCustomFieldConfig("lineWidth", 1).setCustomFieldConfig("barAlignment", 0).setCustomFieldConfig("spanNulls", false).setCustomFieldConfig("insertNulls", false).setCustomFieldConfig("showPoints", _grafana_schema_dist_esm_index__WEBPACK_IMPORTED_MODULE_6__.VisibilityMode.Auto).setCustomFieldConfig("pointSize", 5).setCustomFieldConfig("stacking", { mode: _grafana_schema_dist_esm_index__WEBPACK_IMPORTED_MODULE_6__.StackingMode.None, group: "A" }).setCustomFieldConfig("gradientMode", _grafana_schema_dist_esm_index__WEBPACK_IMPORTED_MODULE_6__.GraphGradientMode.Hue).setCustomFieldConfig("scaleDistribution", { type: _grafana_schema_dist_esm_index__WEBPACK_IMPORTED_MODULE_6__.ScaleDistribution.Linear }).setOption("legend", { showLegend: false, displayMode: _grafana_schema_dist_esm_index__WEBPACK_IMPORTED_MODULE_6__.LegendDisplayMode.Hidden }).setOption("tooltip", { mode: _grafana_schema_dist_esm_index__WEBPACK_IMPORTED_MODULE_6__.TooltipDisplayMode.Single }).setNoValue("No events found").build()
  });
}
class ClearFilterButtonScenesObject extends _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.SceneObjectBase {
  constructor() {
    super(...arguments);
    this._variableDependency = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.VariableDependencyConfig(this, {
      variableNames: [LABELS_FILTER, STATE_FILTER_FROM, STATE_FILTER_TO]
    });
  }
  static {
    this.Component = ClearFilterButtonObjectRenderer;
  }
}
function ClearFilterButtonObjectRenderer({ model }) {
  model.useState();
  const labelsFilter = _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.sceneGraph.interpolate(model, "${LABELS_FILTER}");
  const stateTo = _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.sceneGraph.interpolate(model, "${STATE_FILTER_TO}");
  const stateFrom = _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.sceneGraph.interpolate(model, "${STATE_FILTER_FROM}");
  if (!labelsFilter && stateTo === _constants__WEBPACK_IMPORTED_MODULE_15__.StateFilterValues.all && stateFrom === _constants__WEBPACK_IMPORTED_MODULE_15__.StateFilterValues.all) {
    return null;
  }
  const onClearFilter = () => {
    const labelsFiltersVariable = _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.sceneGraph.lookupVariable(LABELS_FILTER, model);
    if (labelsFiltersVariable instanceof _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.TextBoxVariable) {
      labelsFiltersVariable.setValue("");
    }
    const stateToFilterVariable = _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.sceneGraph.lookupVariable(STATE_FILTER_TO, model);
    if (stateToFilterVariable instanceof _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.CustomVariable) {
      stateToFilterVariable.changeValueTo(_constants__WEBPACK_IMPORTED_MODULE_15__.StateFilterValues.all);
    }
    const stateFromFilterVariable = _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.sceneGraph.lookupVariable(STATE_FILTER_FROM, model);
    if (stateFromFilterVariable instanceof _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.CustomVariable) {
      stateFromFilterVariable.changeValueTo(_constants__WEBPACK_IMPORTED_MODULE_15__.StateFilterValues.all);
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Tooltip, { content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.clear-filter-button-object-renderer.content-clear-filter", "Clear filter"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button, { variant: "secondary", icon: "times", onClick: onClearFilter, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.central-alert-history.filter.clear", children: "Clear filters" }) }) });
}
const LabelFilter = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.filterLabelContainer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Text, { variant: "body", weight: "light", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.central-alert-history.filterBy", children: "Filter by:" }) }) });
};
const FilterInfo = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.filterInfoContainer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Tooltip,
    {
      content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.central-alert-history.filter.info.label1", children: "Filter events using label querying without spaces, ex:" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: `{severity="critical", instance=~"cluster-us-.+"}` }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.central-alert-history.filter.info.label2", children: "Invalid use of spaces:" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: `{severity= "critical"}` }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: `{severity ="critical"}` }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.central-alert-history.filter.info.label3", children: "Valid use of spaces:" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: `{severity=" critical"}` }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.central-alert-history.filter.info.label4", children: "Filter alerts using label querying without braces, ex:" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: `severity="critical", instance=~"cluster-us-.+"` })
      ] }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Icon, { name: "info-circle", size: "sm" })
    }
  ) });
};
const getStyles = (theme) => {
  return {
    filterInfoContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: "0",
      alignSelf: "center",
      marginRight: theme.spacing(-1)
    }),
    filterLabelContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: "0",
      alignSelf: "center"
    })
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CentralAlertHistoryScene);


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/central-state-history/CentralHistoryRuntimeDataSource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alertStateHistoryDatasource: () => (/* binding */ alertStateHistoryDatasource),
/* harmony export */   getHistory: () => (/* binding */ getHistory),
/* harmony export */   useRegisterHistoryRuntimeDataSource: () => (/* binding */ useRegisterHistoryRuntimeDataSource)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _api_stateHistoryApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/api/stateHistoryApi.ts");
/* harmony import */ var _EventListSceneObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/central-state-history/EventListSceneObject.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/central-state-history/utils.ts");










const historyDataSourceUid = "__history_api_ds_uid__";
const historyDataSourcePluginId = "__history_api_ds_pluginId__";
const alertStateHistoryDatasource = {
  type: historyDataSourcePluginId,
  uid: historyDataSourceUid,
  settings: void 0
};
function useRegisterHistoryRuntimeDataSource() {
  const ds = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => new HistoryAPIDatasource(historyDataSourceUid, historyDataSourcePluginId), []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    try {
      _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.sceneUtils.registerRuntimeDataSource({ dataSource: ds });
    } catch (e) {
    }
  }, [ds]);
}
class HistoryAPIDatasource extends _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.RuntimeDataSource {
  constructor(pluginId, uid) {
    super(uid, pluginId);
  }
  async query(request) {
    const from = request.range.from.unix();
    const to = request.range.to.unix();
    const query = request.targets[0];
    const templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)();
    const labels = templateSrv.replace(query.labels ?? "", request.scopedVars);
    const stateTo = templateSrv.replace(query.stateTo ?? "", request.scopedVars);
    const stateFrom = templateSrv.replace(query.stateFrom ?? "", request.scopedVars);
    const labelFilters = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.parseBackendLabelFilters)(labels);
    const historyResult = await getHistory(
      from,
      to,
      labelFilters,
      stateTo !== "all" ? stateTo : void 0,
      stateFrom !== "all" ? stateFrom : void 0
    );
    return {
      data: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.historyResultToDataFrame)(historyResult, { labels })
    };
  }
  testDatasource() {
    return Promise.resolve({
      status: "success",
      message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.history-apidatasource.message.data-source-is-working", "Data source is working"),
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.history-apidatasource.title.success", "Success")
    });
  }
}
const getHistory = (from, to, labels, current, previous) => {
  return (0,app_store_store__WEBPACK_IMPORTED_MODULE_5__.dispatch)(
    _api_stateHistoryApi__WEBPACK_IMPORTED_MODULE_6__.stateHistoryApi.endpoints.getRuleHistory.initiate(
      {
        from,
        to,
        limit: _EventListSceneObject__WEBPACK_IMPORTED_MODULE_7__.LIMIT_EVENTS,
        labels,
        current,
        previous
      },
      {
        forceRefetch: Boolean((0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_4__.getTimeSrv)().getAutoRefreshInteval().interval)
        // force refetch in case we are using the refresh option
      }
    )
  ).unwrap();
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/central-state-history/EventDetails.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventDetails: () => (/* binding */ EventDetails)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _api_stateHistoryApi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/api/stateHistoryApi.ts");
/* harmony import */ var _hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRule.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_matchers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/matchers.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _MetaText__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/MetaText.tsx");
/* harmony import */ var _rule_viewer_tabs_Details__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/tabs/Details.tsx");
/* harmony import */ var _state_history_ErrorMessageRow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/ErrorMessageRow.tsx");
/* harmony import */ var _state_history_LogTimelineViewer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/LogTimelineViewer.tsx");
/* harmony import */ var _state_history_LokiStateHistory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/LokiStateHistory.tsx");
/* harmony import */ var _state_history_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/common.ts");
/* harmony import */ var _EventListSceneObject__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/central-state-history/EventListSceneObject.tsx");
/* harmony import */ var _HistoryErrorMessage__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/central-state-history/HistoryErrorMessage.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/central-state-history/utils.ts");























function EventDetails({ record, addFilter, timeRange }) {
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    (0,_Analytics__WEBPACK_IMPORTED_MODULE_10__.trackUseCentralHistoryExpandRow)();
  }, []);
  const ruleUID = record.line?.ruleUID ?? "";
  const labelsInInstance = record.line?.labels;
  const identifier = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return (0,_utils_rule_id__WEBPACK_IMPORTED_MODULE_15__.parse)(ruleUID, true);
  }, [ruleUID]);
  const { error, loading, result: rule } = (0,_hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_12__.useCombinedRule)({ ruleIdentifier: identifier, limitAlerts: 0 });
  if (error) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.central-alert-history.details.error", children: "Error loading rule for this event." }) });
  }
  if (loading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.central-alert-history.details.loading", children: "Loading..." }) });
  }
  if (!rule) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.central-alert-history.details.not-found", children: "Rule not found for this event." }) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "column", gap: 0.5, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "row", gap: 6, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StateTransition, { record, addFilter }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ValueInTransition, { record })
    ] }),
    (0,app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_9__.mapStateWithReasonToBaseState)(record.line.current) === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_9__.GrafanaAlertState.Error && record.line.error && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_state_history_ErrorMessageRow__WEBPACK_IMPORTED_MODULE_18__.ErrorMessageRow, { message: record.line.error }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Annotations, { rule }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StateVisualization, { ruleUID, timeRange, labels: labelsInInstance ?? {} })
  ] });
}
function useRuleHistoryRecordsForTheInstance(labelsForTheInstance, stateHistory) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useTheme2)();
  return (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    const logRecords = (0,_state_history_common__WEBPACK_IMPORTED_MODULE_21__.historyDataFrameToLogRecords)(stateHistory);
    const logRecordsByInstance = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.groupBy)(logRecords, (record) => {
      return JSON.stringify(record.line.labels);
    });
    const filterMatchers = (0,_utils_matchers__WEBPACK_IMPORTED_MODULE_14__.parsePromQLStyleMatcherLooseSafe)(labelsForTheInstance);
    const filteredGroupedLines = Object.entries(logRecordsByInstance).filter(([key]) => {
      const labels = JSON.parse(key);
      return (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_13__.labelsMatchMatchers)(labels, filterMatchers);
    });
    const dataFrames = Object.values(filteredGroupedLines).map((records) => {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_24__.logRecordsToDataFrameForState)(records[1], theme);
    });
    return {
      dataFrames
    };
  }, [stateHistory, labelsForTheInstance, theme]);
}
function StateVisualization({ ruleUID, timeRange, labels }) {
  const { useGetRuleHistoryQuery } = _api_stateHistoryApi__WEBPACK_IMPORTED_MODULE_11__.stateHistoryApi;
  const {
    currentData: stateHistory,
    isLoading,
    isError,
    error
  } = useGetRuleHistoryQuery(
    {
      ruleUid: ruleUID,
      from: timeRange.from.unix(),
      to: timeRange.to.unix(),
      limit: _EventListSceneObject__WEBPACK_IMPORTED_MODULE_22__.LIMIT_EVENTS
    },
    {
      refetchOnFocus: true,
      refetchOnReconnect: true
    }
  );
  const { dataFrames } = useRuleHistoryRecordsForTheInstance(
    labels ? Object.entries(labels).map(([key, value]) => `${key}=${value}`).join(",") : "",
    stateHistory
  );
  const { frameSubset, frameTimeRange } = (0,_state_history_LokiStateHistory__WEBPACK_IMPORTED_MODULE_20__.useFrameSubset)(dataFrames);
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.central-alert-history.details.loading", children: "Loading..." }) });
  }
  if (isError) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HistoryErrorMessage__WEBPACK_IMPORTED_MODULE_23__.HistoryErrorMessage, { error });
  }
  if (!frameSubset || frameSubset.length === 0) {
    return null;
  }
  const numberOfTransitions = dataFrames[0]?.fields[0]?.values?.length - 1 || 0;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NumberTransitions, { transitions: ruleUID ? numberOfTransitions : 0 }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_state_history_LogTimelineViewer__WEBPACK_IMPORTED_MODULE_19__.LogTimelineViewer, { frames: frameSubset, timeRange: frameTimeRange })
  ] });
}
function StateTransition({ record, addFilter }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 0.5, direction: "column", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { variant: "body", weight: "light", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.central-alert-history.details.state-transitions", children: "State transition" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 0.5, direction: "row", alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_EventListSceneObject__WEBPACK_IMPORTED_MODULE_22__.EventState, { state: record.line.previous, showLabel: true, addFilter, type: "from" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "arrow-right", size: "lg" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_EventListSceneObject__WEBPACK_IMPORTED_MODULE_22__.EventState, { state: record.line.current, showLabel: true, addFilter, type: "to" })
    ] })
  ] });
}
const Annotations = ({ rule }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const annotations = rule.annotations;
  if (!annotations || Object.keys(annotations).length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.metadataWrapper, children: Object.entries(annotations).map(([name, value]) => {
    const capitalizedName = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.capitalize)(name);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_MetaText__WEBPACK_IMPORTED_MODULE_16__.MetaText, { direction: "column", children: [
      capitalizedName,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rule_viewer_tabs_Details__WEBPACK_IMPORTED_MODULE_17__.AnnotationValue, { value })
    ] }, capitalizedName);
  }) });
};
function ValueInTransition({ record }) {
  const values = record?.line?.values ? JSON.stringify(record.line.values) : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.central-alert-history.details.no-values", "No values");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 0.5, direction: "column", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { variant: "body", weight: "light", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.central-alert-history.details.value-in-transition", children: "Value in transition" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 0.5, direction: "row", alignItems: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { variant: "body", weight: "light", children: values }) })
  ] });
}
function NumberTransitions({ transitions }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.transitionsNumber, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { variant: "body", weight: "bold", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.central-alert-history.details.number-transitions", children: "State transitions for selected period:" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { variant: "body", weight: "light", children: transitions })
  ] });
}
const getStyles = (theme) => {
  return {
    metadataWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "grid",
      gridTemplateColumns: "auto auto",
      rowGap: theme.spacing(3),
      columnGap: theme.spacing(12)
    }),
    transitionsNumber: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "row",
      gap: theme.spacing(0.5),
      alignItems: "center",
      marginTop: theme.spacing(1.5)
    })
  };
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/central-state-history/EventListSceneObject.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventState: () => (/* binding */ EventState),
/* harmony export */   HistoryEventsList: () => (/* binding */ HistoryEventsList),
/* harmony export */   HistoryEventsListObject: () => (/* binding */ HistoryEventsListObject),
/* harmony export */   HistoryEventsListObjectRenderer: () => (/* binding */ HistoryEventsListObjectRenderer),
/* harmony export */   LIMIT_EVENTS: () => (/* binding */ LIMIT_EVENTS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-use/esm/useMeasure.js");
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-alerting/src/grafana/rules/components/labels/AlertLabels.tsx");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingBar/LoadingBar.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Pagination/Pagination.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/ErrorBoundary/ErrorBoundary.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _api_stateHistoryApi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/api/stateHistoryApi.ts");
/* harmony import */ var _enterprise_components_AI_AIGenTriageButton_addAITriageButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/enterprise-components/AI/AIGenTriageButton/addAITriageButton.ts");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/hooks/usePagination.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _CentralAlertHistoryScene__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/central-state-history/CentralAlertHistoryScene.tsx");
/* harmony import */ var _EventDetails__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/central-state-history/EventDetails.tsx");
/* harmony import */ var _HistoryErrorMessage__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/central-state-history/HistoryErrorMessage.tsx");
/* harmony import */ var _useRuleHistoryRecords__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/central-state-history/useRuleHistoryRecords.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/central-state-history/utils.ts");
























const LIMIT_EVENTS = 5e3;
const PAGE_SIZE = 100;
const HistoryEventsList = ({
  timeRange,
  valueInLabelFilter,
  valueInStateToFilter,
  valueInStateFromFilter,
  addFilter,
  hideAlertRuleColumn
}) => {
  const from = timeRange?.from.unix();
  const to = timeRange?.to.unix();
  const labelFilters = (0,_utils__WEBPACK_IMPORTED_MODULE_30__.parseBackendLabelFilters)(valueInLabelFilter.toString());
  const stateTo = valueInStateToFilter.toString();
  const stateFrom = valueInStateFromFilter.toString();
  const {
    data: stateHistory,
    isLoading,
    isError,
    error
  } = _api_stateHistoryApi__WEBPACK_IMPORTED_MODULE_19__.stateHistoryApi.endpoints.getRuleHistory.useQuery({
    from,
    to,
    limit: LIMIT_EVENTS,
    labels: labelFilters,
    current: stateTo !== "all" ? stateTo : void 0,
    previous: stateFrom !== "all" ? stateFrom : void 0
  });
  const { historyRecords: historyRecordsNotSorted } = (0,_useRuleHistoryRecords__WEBPACK_IMPORTED_MODULE_29__.useRuleHistoryRecords)(stateHistory, {
    labels: valueInLabelFilter.toString()
  });
  const historyRecords = historyRecordsNotSorted.sort((a, b) => b.timestamp - a.timestamp);
  if (isError) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HistoryErrorMessage__WEBPACK_IMPORTED_MODULE_28__.HistoryErrorMessage, { error });
  }
  const maximumEventsReached = !isLoading && stateHistory?.data?.values?.[0]?.length === LIMIT_EVENTS;
  if (maximumEventsReached) {
    (0,_Analytics__WEBPACK_IMPORTED_MODULE_18__.trackUseCentralHistoryMaxEventsReached)({ from, to });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { direction: "column", gap: 0.5, children: [
    maximumEventsReached && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Alert,
      {
        severity: "warning",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.central-alert-history.too-many-events.title", "Unable to display all events"),
        children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
          "alerting.central-alert-history.too-many-events.text",
          "The selected time period has too many events to display. Displaying the latest 5000 events. Try using a shorter time period."
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LoadingIndicator, { visible: isLoading }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      HistoryLogEvents,
      {
        logRecords: historyRecords,
        addFilter,
        timeRange,
        hideAlertRuleColumn
      }
    )
  ] });
};
const LoadingIndicator = ({ visible = false }) => {
  const [measureRef, { width }] = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: measureRef, children: visible && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.LoadingBar, { width, "data-testid": "loading-bar" }) });
};
function HistoryLogEvents({ logRecords, addFilter, timeRange, hideAlertRuleColumn }) {
  const { page, pageItems, numberOfPages, onPageChange } = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_21__.usePagination)(logRecords, 1, PAGE_SIZE);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { direction: "column", gap: 0, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.headerContainer, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListHeader, { hideAlertRuleColumn }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.triageButtonContainer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_enterprise_components_AI_AIGenTriageButton_addAITriageButton__WEBPACK_IMPORTED_MODULE_20__.AITriageButtonComponent, { logRecords, timeRange }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { children: pageItems.map((record) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        EventRow,
        {
          record,
          addFilter,
          timeRange,
          hideAlertRuleColumn
        },
        record.timestamp + (record.line.fingerprint ?? "")
      );
    }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Pagination, { currentPage: page, numberOfPages, onNavigate: onPageChange, hideWhenSinglePage: true })
  ] });
}
function ListHeader({ hideAlertRuleColumn }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.mainHeader, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.timeCol, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Text, { variant: "body", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.central-alert-history.details.header.timestamp", children: "Timestamp" }) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.transitionCol, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Text, { variant: "body", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.central-alert-history.details.header.state", children: "State" }) }) }),
    !hideAlertRuleColumn && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.alertNameCol, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Text, { variant: "body", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.central-alert-history.details.header.alert-rule", children: "Alert rule" }) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.labelsCol, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Text, { variant: "body", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.central-alert-history.details.header.instance", children: "Instance" }) }) })
  ] });
}
function EventRow({ record, addFilter, timeRange, hideAlertRuleColumn }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.useStyles2)(getStyles);
  const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  function onLabelClick([value, label]) {
    if (label && value) {
      addFilter(label, value, "label");
    }
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { direction: "column", gap: 0, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      "div",
      {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.header, isCollapsed ? styles.collapsedHeader : styles.notCollapsedHeader),
        "data-testid": "event-row-header",
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _CollapseToggle__WEBPACK_IMPORTED_MODULE_25__.CollapseToggle,
            {
              size: "sm",
              className: styles.collapseToggle,
              isCollapsed,
              onToggle: setIsCollapsed
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { gap: 0.5, direction: "row", alignItems: "center", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.timeCol, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Timestamp, { time: record.timestamp }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.transitionCol, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EventTransition, { previous: record.line.previous, current: record.line.current, addFilter }) }),
            !hideAlertRuleColumn && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.alertNameCol, children: record.line.labels ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertRuleName, { labels: record.line.labels, ruleUID: record.line.ruleUID }) : null }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.labelsCol, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_5__.AlertLabels, { labels: record.line.labels ?? {}, size: "xs", onClick: onLabelClick }) })
          ] })
        ]
      }
    ),
    !isCollapsed && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.expandedRow, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_EventDetails__WEBPACK_IMPORTED_MODULE_27__.EventDetails, { record, addFilter, timeRange }) })
  ] });
}
function AlertRuleName({ labels, ruleUID }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.useStyles2)(getStyles);
  const { pathname, search } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  const returnTo = `${pathname}${search}`;
  const alertRuleName = labels.alertname;
  if (!ruleUID) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Text, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.central-alert-history.details.unknown-rule", children: "Unknown" }) });
  }
  const ruleViewUrl = (0,_utils_url__WEBPACK_IMPORTED_MODULE_24__.createRelativeUrl)(`/alerting/${_utils_datasource__WEBPACK_IMPORTED_MODULE_23__.GRAFANA_RULES_SOURCE_NAME}/${ruleUID}/view`, {
    tab: "history",
    returnTo
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Tooltip, { content: alertRuleName ?? "", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: ruleViewUrl, className: styles.alertName, children: alertRuleName }) });
}
function EventTransition({ previous, current, addFilter }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { gap: 0.5, direction: "row", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EventState, { state: previous, addFilter, type: "from" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { name: "arrow-right", size: "lg" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EventState, { state: current, addFilter, type: "to" })
  ] });
}
const StateIcon = ({ iconName, iconColor, tooltipContent, labelText, showLabel }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Tooltip, { content: tooltipContent, placement: "top", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { gap: 0.5, direction: "row", alignItems: "center", children: [
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { name: iconName, size: "md", className: iconColor }),
  showLabel && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Text, { variant: "body", weight: "light", children: labelText })
] }) });
function EventState({ state, showLabel = false, addFilter, type }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.useStyles2)(getStyles);
  const toolTip = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.central-alert-history.details.no-recognized-state", "No recognized state");
  if (!(0,app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_17__.isGrafanaAlertState)(state) && !(0,app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_17__.isAlertStateWithReason)(state)) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      StateIcon,
      {
        iconName: "exclamation-triangle",
        tooltipContent: toolTip,
        labelText: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.central-alert-history.details.unknown-event-state", children: "Unknown" }),
        showLabel,
        iconColor: styles.warningColor
      }
    );
  }
  const baseState = (0,app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_17__.mapStateWithReasonToBaseState)(state);
  const reason = (0,app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_17__.mapStateWithReasonToReason)(state);
  const stateConfig = {
    Normal: {
      iconName: "check-circle",
      iconColor: Boolean(reason) ? styles.warningColor : styles.normalColor,
      tooltipContent: Boolean(reason) ? `Normal (${reason})` : "Normal",
      labelText: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.central-alert-history.details.state.normal", children: "Normal" })
    },
    Alerting: {
      iconName: "exclamation-circle",
      iconColor: styles.alertingColor,
      tooltipContent: "Alerting",
      labelText: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.central-alert-history.details.state.alerting", children: "Alerting" })
    },
    NoData: {
      iconName: "exclamation-triangle",
      iconColor: styles.warningColor,
      tooltipContent: "Insufficient data",
      labelText: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.central-alert-history.details.state.no-data", children: "No data" })
    },
    Error: {
      iconName: "exclamation-circle",
      tooltipContent: "Error",
      iconColor: styles.warningColor,
      labelText: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.central-alert-history.details.state.error", children: "Error" })
    },
    Pending: {
      iconName: "circle",
      iconColor: styles.warningColor,
      tooltipContent: Boolean(reason) ? `Pending (${reason})` : "Pending",
      labelText: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.central-alert-history.details.state.pending", children: "Pending" })
    },
    Recovering: {
      iconName: "circle",
      iconColor: styles.warningColor,
      tooltipContent: Boolean(reason) ? `Recovering (${reason})` : "Recovering",
      labelText: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.central-alert-history.details.state.recovering", children: "Recovering" })
    }
  };
  function onStateClick() {
    addFilter("state", baseState, type === "from" ? "stateFrom" : "stateTo");
  }
  const config = stateConfig[baseState] || { iconName: "exclamation-triangle", tooltipContent: "Unknown State" };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "div",
    {
      onClick: onStateClick,
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          onStateClick();
        }
      },
      className: styles.state,
      role: "button",
      tabIndex: 0,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StateIcon, { ...config, showLabel })
    }
  );
}
const Timestamp = ({ time }) => {
  const dateTime = new Date(time);
  const formattedDate = dateTime.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Text, { variant: "body", weight: "light", children: formattedDate });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.withErrorBoundary)(HistoryEventsList, { style: "page" }));
const getStyles = (theme) => {
  return {
    header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: `${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(1)} 0`,
      flexWrap: "nowrap",
      "&:hover": {
        backgroundColor: theme.components.table.rowHoverBackground
      }
    }),
    collapsedHeader: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      borderBottom: `1px solid ${theme.colors.border.weak}`
    }),
    notCollapsedHeader: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      borderBottom: "none"
    }),
    collapseToggle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      background: "none",
      border: "none",
      marginTop: `-${theme.spacing(1)}`,
      marginBottom: `-${theme.spacing(1)}`,
      svg: {
        marginBottom: 0
      }
    }),
    normalColor: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      fill: theme.colors.success.text
    }),
    warningColor: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      fill: theme.colors.warning.text
    }),
    alertingColor: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      fill: theme.colors.error.text
    }),
    timeCol: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "150px"
    }),
    transitionCol: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "80px"
    }),
    alertNameCol: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "300px"
    }),
    labelsCol: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      overflow: "hidden",
      alignItems: "center",
      paddingRight: theme.spacing(2),
      flex: 1
    }),
    alertName: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      whiteSpace: "nowrap",
      cursor: "pointer",
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "block",
      color: theme.colors.text.link
    }),
    expandedRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: theme.spacing(2),
      marginLeft: theme.spacing(2),
      borderLeft: `1px solid ${theme.colors.border.weak}`
    }),
    colorIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.primary.text,
      "&:hover": {
        opacity: 0.8
      }
    }),
    state: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      "&:hover": {
        opacity: 0.8,
        cursor: "pointer"
      }
    }),
    mainHeader: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      marginLeft: "30px",
      padding: `${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(1)} 0`,
      gap: theme.spacing(0.5)
    }),
    headerContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: `1px solid ${theme.colors.border.weak}`
    }),
    triageButtonContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: `${theme.spacing(1)} ${theme.spacing(2)}`
    })
  };
};
class HistoryEventsListObject extends _grafana_scenes__WEBPACK_IMPORTED_MODULE_7__.SceneObjectBase {
  constructor() {
    super(...arguments);
    this._variableDependency = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_7__.VariableDependencyConfig(this, {
      variableNames: [_CentralAlertHistoryScene__WEBPACK_IMPORTED_MODULE_26__.LABELS_FILTER, _CentralAlertHistoryScene__WEBPACK_IMPORTED_MODULE_26__.STATE_FILTER_FROM, _CentralAlertHistoryScene__WEBPACK_IMPORTED_MODULE_26__.STATE_FILTER_TO]
    });
  }
  static {
    this.Component = HistoryEventsListObjectRenderer;
  }
}
function HistoryEventsListObjectRenderer({ model }) {
  const { hideAlertRuleColumn } = model.useState();
  const { value: timeRange } = _grafana_scenes__WEBPACK_IMPORTED_MODULE_7__.sceneGraph.getTimeRange(model).useState();
  const labelsFiltersVariable = _grafana_scenes__WEBPACK_IMPORTED_MODULE_7__.sceneGraph.lookupVariable(_CentralAlertHistoryScene__WEBPACK_IMPORTED_MODULE_26__.LABELS_FILTER, model);
  const stateToFilterVariable = _grafana_scenes__WEBPACK_IMPORTED_MODULE_7__.sceneGraph.lookupVariable(_CentralAlertHistoryScene__WEBPACK_IMPORTED_MODULE_26__.STATE_FILTER_TO, model);
  const stateFromFilterVariable = _grafana_scenes__WEBPACK_IMPORTED_MODULE_7__.sceneGraph.lookupVariable(_CentralAlertHistoryScene__WEBPACK_IMPORTED_MODULE_26__.STATE_FILTER_FROM, model);
  const addFilter = (key, value, type) => {
    const newFilterToAdd = `${key}=${value}`;
    (0,_Analytics__WEBPACK_IMPORTED_MODULE_18__.trackUseCentralHistoryFilterByClicking)({ type, key, value });
    if (type === "stateTo" && stateToFilterVariable instanceof _grafana_scenes__WEBPACK_IMPORTED_MODULE_7__.CustomVariable) {
      stateToFilterVariable.changeValueTo(value);
    }
    if (type === "stateFrom" && stateFromFilterVariable instanceof _grafana_scenes__WEBPACK_IMPORTED_MODULE_7__.CustomVariable) {
      stateFromFilterVariable.changeValueTo(value);
    }
    if (type === "label" && labelsFiltersVariable instanceof _grafana_scenes__WEBPACK_IMPORTED_MODULE_7__.TextBoxVariable) {
      const finalFilter = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_22__.combineMatcherStrings)(labelsFiltersVariable.state.value.toString(), newFilterToAdd);
      labelsFiltersVariable.setValue(finalFilter);
    }
  };
  if (stateToFilterVariable instanceof _grafana_scenes__WEBPACK_IMPORTED_MODULE_7__.CustomVariable && stateFromFilterVariable instanceof _grafana_scenes__WEBPACK_IMPORTED_MODULE_7__.CustomVariable && labelsFiltersVariable instanceof _grafana_scenes__WEBPACK_IMPORTED_MODULE_7__.TextBoxVariable) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      HistoryEventsList,
      {
        timeRange,
        valueInLabelFilter: labelsFiltersVariable.state.value,
        addFilter,
        valueInStateToFilter: stateToFilterVariable.state.value,
        valueInStateFromFilter: stateFromFilterVariable.state.value,
        hideAlertRuleColumn
      }
    );
  } else {
    return null;
  }
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/central-state-history/HistoryErrorMessage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoryErrorMessage: () => (/* binding */ HistoryErrorMessage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var app_core_components_PageNotFound_EntityNotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/PageNotFound/EntityNotFound.tsx");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");







function HistoryErrorMessage({ error }) {
  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.isFetchError)(error) && error.status === 404) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_PageNotFound_EntityNotFound__WEBPACK_IMPORTED_MODULE_4__.EntityNotFound, { entity: "History" });
  }
  const title = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.central-alert-history.error", "Something went wrong loading the alert state history");
  const errorStr = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_5__.stringifyErrorLike)(error);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, { title, children: errorStr });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/central-state-history/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateFilterValues: () => (/* binding */ StateFilterValues)
/* harmony export */ });

const StateFilterValues = {
  all: "all",
  firing: "Alerting",
  normal: "Normal",
  pending: "Pending",
  recovering: "Recovering"
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/central-state-history/useRuleHistoryRecords.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ruleHistoryToRecords: () => (/* binding */ ruleHistoryToRecords),
/* harmony export */   useRuleHistoryRecords: () => (/* binding */ useRuleHistoryRecords)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_matchers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/matchers.ts");
/* harmony import */ var _state_history_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/common.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/central-state-history/constants.ts");







const emptyFilters = {
  labels: "",
  stateFrom: _constants__WEBPACK_IMPORTED_MODULE_5__.StateFilterValues.all,
  stateTo: _constants__WEBPACK_IMPORTED_MODULE_5__.StateFilterValues.all
};
function useRuleHistoryRecords(stateHistory, filters = emptyFilters) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ruleHistoryToRecords(stateHistory, filters), [filters, stateHistory]);
}
function ruleHistoryToRecords(stateHistory, filters = emptyFilters) {
  const { labels, stateFrom = _constants__WEBPACK_IMPORTED_MODULE_5__.StateFilterValues.all, stateTo = _constants__WEBPACK_IMPORTED_MODULE_5__.StateFilterValues.all } = filters;
  const allLogRecords = (0,_state_history_common__WEBPACK_IMPORTED_MODULE_4__.historyDataFrameToLogRecords)(stateHistory);
  if (allLogRecords.length === 0) {
    return { historyRecords: [] };
  }
  const filterMatchers = labels ? (0,_utils_matchers__WEBPACK_IMPORTED_MODULE_3__.parsePromQLStyleMatcherLooseSafe)(labels) : [];
  const filteredRecords = allLogRecords.filter(({ line }) => {
    const filterMatch = line.labels && (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_2__.labelsMatchMatchers)(line.labels, filterMatchers);
    const baseStateTo = (0,app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.mapStateWithReasonToBaseState)(line.current);
    const baseStateFrom = (0,app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_1__.mapStateWithReasonToBaseState)(line.previous);
    const stateToMatch = stateTo !== _constants__WEBPACK_IMPORTED_MODULE_5__.StateFilterValues.all ? stateTo === baseStateTo : true;
    const stateFromMatch = stateFrom !== _constants__WEBPACK_IMPORTED_MODULE_5__.StateFilterValues.all ? stateFrom === baseStateFrom : true;
    return filterMatch && stateToMatch && stateFromMatch;
  });
  return {
    historyRecords: filteredRecords
  };
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/central-state-history/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLabelsFilterInQueryParams: () => (/* binding */ getLabelsFilterInQueryParams),
/* harmony export */   getStateFilterFromInQueryParams: () => (/* binding */ getStateFilterFromInQueryParams),
/* harmony export */   getStateFilterToInQueryParams: () => (/* binding */ getStateFilterToInQueryParams),
/* harmony export */   groupDataFramesByTimeAndFilterByLabels: () => (/* binding */ groupDataFramesByTimeAndFilterByLabels),
/* harmony export */   historyResultToDataFrame: () => (/* binding */ historyResultToDataFrame),
/* harmony export */   logRecordsToDataFrameForState: () => (/* binding */ logRecordsToDataFrameForState),
/* harmony export */   parseBackendLabelFilters: () => (/* binding */ parseBackendLabelFilters)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/field/displayProcessor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/thresholds.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/valueMapping.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/field/fieldComparers.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_matchers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/matchers.ts");
/* harmony import */ var _state_history_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/common.ts");
/* harmony import */ var _CentralAlertHistoryScene__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/central-state-history/CentralAlertHistoryScene.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/central-state-history/constants.ts");









const GROUPING_INTERVAL = 10 * 1e3;
const QUERY_PARAM_PREFIX = "var-";
function parseBackendLabelFilters(labelFilter) {
  const labelMatchers = (0,_utils_matchers__WEBPACK_IMPORTED_MODULE_7__.parsePromQLStyleMatcherLooseSafe)(labelFilter);
  const labelFilters = {};
  labelMatchers.forEach((matcher) => {
    if (!matcher.isRegex && matcher.isEqual) {
      labelFilters[matcher.name] = matcher.value;
    }
  });
  return labelFilters;
}
const emptyFilters = {
  labels: ""
};
function historyResultToDataFrame(stateHistory, filters = emptyFilters) {
  const logRecords = (0,_state_history_common__WEBPACK_IMPORTED_MODULE_8__.historyDataFrameToLogRecords)(stateHistory);
  const logRecordsByInstance = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(logRecords, (record) => {
    return JSON.stringify(record.line.labels);
  });
  const dataFrames = Object.entries(logRecordsByInstance).map(([key, records]) => {
    return logRecordsToDataFrame(key, records);
  });
  return groupDataFramesByTimeAndFilterByLabels(dataFrames, filters);
}
function getLabelsFilterInQueryParams() {
  const queryParams = new URLSearchParams(window.location.search);
  return queryParams.get(`${QUERY_PARAM_PREFIX}${_CentralAlertHistoryScene__WEBPACK_IMPORTED_MODULE_9__.LABELS_FILTER}`) ?? "";
}
function getStateFilterToInQueryParams() {
  const queryParams = new URLSearchParams(window.location.search);
  return queryParams.get(`${QUERY_PARAM_PREFIX}${_CentralAlertHistoryScene__WEBPACK_IMPORTED_MODULE_9__.STATE_FILTER_TO}`) ?? _constants__WEBPACK_IMPORTED_MODULE_10__.StateFilterValues.all;
}
function getStateFilterFromInQueryParams() {
  const queryParams = new URLSearchParams(window.location.search);
  return queryParams.get(`${QUERY_PARAM_PREFIX}${_CentralAlertHistoryScene__WEBPACK_IMPORTED_MODULE_9__.STATE_FILTER_FROM}`) ?? _constants__WEBPACK_IMPORTED_MODULE_10__.StateFilterValues.all;
}
function groupDataFramesByTimeAndFilterByLabels(dataFrames, filters) {
  const labelsFilterValue = filters.labels;
  const dataframesFiltered = dataFrames.filter((frame) => {
    const labels = JSON.parse(frame.name ?? "");
    const matchers = Boolean(labelsFilterValue) ? (0,_utils_matchers__WEBPACK_IMPORTED_MODULE_7__.parsePromQLStyleMatcherLooseSafe)(labelsFilterValue) : [];
    return (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_6__.labelsMatchMatchers)(labels, matchers);
  });
  const timeFieldList = dataframesFiltered.flatMap((frame) => frame.fields.find((field) => field.name === "time"));
  const groupedTimeFields = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(
    timeFieldList?.flatMap((tf) => tf?.values),
    (time) => Math.floor(time / GROUPING_INTERVAL) * GROUPING_INTERVAL
  );
  const newTimeField = {
    name: "time",
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.time,
    values: Object.keys(groupedTimeFields).map(Number),
    config: { displayName: "Time", custom: { fillOpacity: 100 } }
  };
  const countField = {
    name: "value",
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.number,
    values: Object.values(groupedTimeFields).map((group) => group.length),
    config: {}
  };
  return [
    {
      fields: [newTimeField, countField],
      length: newTimeField.values.length
    }
  ];
}
function logRecordsToDataFrame(instanceLabels, records) {
  const timeField = {
    name: "time",
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.time,
    values: [...records.map((record) => record.timestamp)],
    config: { displayName: "Time", custom: { fillOpacity: 100 } }
  };
  const timeIndex = timeField.values.map((_, index) => index);
  timeIndex.sort((0,_grafana_data_internal__WEBPACK_IMPORTED_MODULE_5__.fieldIndexComparer)(timeField));
  const frame = {
    fields: [
      {
        ...timeField,
        values: timeField.values.map((_, i) => timeField.values[timeIndex[i]])
      },
      {
        name: instanceLabels,
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.number,
        values: timeField.values.map((record) => 1),
        config: {}
      }
    ],
    length: timeField.values.length,
    name: instanceLabels
  };
  return frame;
}
function logRecordsToDataFrameForState(records, theme) {
  const timeField = {
    name: "time",
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.time,
    values: [...records.map((record) => record.timestamp), Date.now()],
    config: { displayName: "Time", custom: { fillOpacity: 100 } }
  };
  const timeIndex = timeField.values.map((_, index) => index);
  timeIndex.sort((0,_grafana_data_internal__WEBPACK_IMPORTED_MODULE_5__.fieldIndexComparer)(timeField));
  const stateValues = [...records.map((record) => record.line.current), records.at(-1)?.line.current];
  const frame = {
    fields: [
      {
        ...timeField,
        values: timeField.values.map((_, i) => timeField.values[timeIndex[i]])
      },
      {
        name: "State",
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.string,
        values: stateValues.map((_, i) => stateValues[timeIndex[i]]),
        config: {
          displayName: "State",
          color: { mode: "thresholds" },
          custom: { fillOpacity: 100 },
          mappings: [
            {
              type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.MappingType.ValueToText,
              options: {
                Alerting: {
                  color: theme.colors.error.main
                },
                Pending: {
                  color: theme.colors.warning.main
                },
                Recovering: {
                  color: theme.colors.warning.main
                },
                Normal: {
                  color: theme.colors.success.main
                },
                NoData: {
                  color: theme.colors.info.main
                }
              }
            }
          ],
          thresholds: {
            mode: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ThresholdsMode.Absolute,
            steps: []
          }
        }
      }
    ],
    length: timeField.values.length,
    name: ""
  };
  frame.fields.forEach((field) => {
    field.display = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getDisplayProcessor)({ field, theme });
  });
  return frame;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/state-history/ErrorMessageRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorMessageRow: () => (/* binding */ ErrorMessageRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");




function ErrorMessageRow({ message }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { "data-testid": "state-history-error", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Box,
    {
      display: "block",
      backgroundColor: "secondary",
      borderStyle: "solid",
      borderColor: "weak",
      borderRadius: "default",
      paddingY: 1,
      paddingX: 2,
      marginTop: 0.5,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "row", alignItems: "center", gap: 2, wrap: false, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Box, { shrink: 0, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Text, { variant: "bodySmall", weight: "medium", element: "span", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.state-history.error-message-prefix", "Error message:") }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Box, { grow: 1, shrink: 1, minWidth: 0, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Text, { variant: "bodySmall", truncate: true, element: "p", children: message }) })
      ] })
    }
  ) });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/state-history/LogRecordViewer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogRecordViewerByInstance: () => (/* binding */ LogRecordViewerByInstance),
/* harmony export */   LogRecordViewerByTimestamp: () => (/* binding */ LogRecordViewerByTimestamp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/date-fns/formatDistanceToNowStrict.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-alerting/src/grafana/rules/components/labels/AlertLabel.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/datetime/formatter.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Tags/TagList.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _AlertStateTag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx");
/* harmony import */ var _ErrorMessageRow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/ErrorMessageRow.tsx");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/common.ts");














function groupRecordsByTimestamp(records) {
  const groupedLines = records.reduce((acc, current) => {
    const tsGroup = acc.get(current.timestamp);
    if (tsGroup) {
      tsGroup.push(current);
    } else {
      acc.set(current.timestamp, [current]);
    }
    return acc;
  }, /* @__PURE__ */ new Map());
  return new Map([...groupedLines].sort((a, b) => b[0] - a[0]));
}
const LogRecordViewerByTimestamp = (0,react__WEBPACK_IMPORTED_MODULE_4__.memo)(
  ({
    records,
    commonLabels,
    onLabelClick,
    onRecordsRendered
  }) => {
    const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
    const groupedLines = groupRecordsByTimestamp(records);
    const timestampRefs = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(/* @__PURE__ */ new Map());
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
      onRecordsRendered && onRecordsRendered(timestampRefs.current);
    }, [onRecordsRendered, records]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "ul",
      {
        className: styles.logsScrollable,
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)(
          "alerting.log-record-viewer-by-timestamp.aria-label-state-history-by-timestamp",
          "State history by timestamp"
        ),
        children: Array.from(groupedLines.entries()).map(([key, records2]) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "li",
            {
              id: key.toString(10),
              "data-testid": key,
              ref: (element) => {
                if (element) {
                  timestampRefs.current.set(key, element);
                } else {
                  timestampRefs.current.delete(key);
                }
              },
              className: styles.listItemWrapper,
              children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Timestamp, { time: key }),
                records2.map(({ line }, idx) => {
                  const id = line.fingerprint ?? `${key}-${idx}`;
                  const isErrorRow = (0,app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_12__.mapStateWithReasonToBaseState)(line.current) === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_12__.GrafanaAlertState.Error && Boolean(line.error);
                  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, { children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.logsContainer, children: [
                      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertStateTag__WEBPACK_IMPORTED_MODULE_13__.AlertStateTag, { state: line.previous, size: "sm", muted: true }),
                      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { name: "arrow-right", size: "sm" }),
                      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertStateTag__WEBPACK_IMPORTED_MODULE_13__.AlertStateTag, { state: line.current }),
                      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { children: line.values && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertInstanceValues, { record: line.values }) }),
                      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: line.labels && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.TagList,
                        {
                          tags: (0,_common__WEBPACK_IMPORTED_MODULE_15__.omitLabels)(Object.entries(line.labels), commonLabels).map(
                            ([key2, value]) => `${key2}=${value}`
                          ),
                          onClick: onLabelClick
                        }
                      ) })
                    ] }),
                    isErrorRow && line.error && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ErrorMessageRow__WEBPACK_IMPORTED_MODULE_14__.ErrorMessageRow, { message: line.error })
                  ] }, id);
                })
              ]
            },
            key
          );
        })
      }
    );
  }
);
LogRecordViewerByTimestamp.displayName = "LogRecordViewerByTimestamp";
function LogRecordViewerByInstance({ records, commonLabels }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  const groupedLines = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.groupBy)(records, (record) => {
    return JSON.stringify(record.line.labels);
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: Object.entries(groupedLines).map(([key, records2]) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "column", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.TagList,
        {
          tags: (0,_common__WEBPACK_IMPORTED_MODULE_15__.omitLabels)(Object.entries(records2[0].line.labels ?? {}), commonLabels).map(
            ([key2, value]) => `${key2}=${value}`
          )
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.logsContainer, children: records2.map(({ line, timestamp }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertStateTag__WEBPACK_IMPORTED_MODULE_13__.AlertStateTag, { state: line.previous, size: "sm", muted: true }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { name: "arrow-right", size: "sm" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertStateTag__WEBPACK_IMPORTED_MODULE_13__.AlertStateTag, { state: line.current }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { children: line.values && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertInstanceValues, { record: line.values }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.dateTimeFormat)(timestamp) })
      ] }, (0,lodash__WEBPACK_IMPORTED_MODULE_3__.uniqueId)())) })
    ] }, key);
  }) });
}
const Timestamp = ({ time }) => {
  const dateTime = new Date(time);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.timestampWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { name: "clock-nine", size: "sm" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.timestampText, children: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.dateTimeFormat)(dateTime) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.timestamp.time-ago", values: { time: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.formatDistanceToNowStrict)(dateTime) }, children: [
      "(",
      "{{time}}",
      " ago)"
    ] }) })
  ] }) });
};
const AlertInstanceValues = (0,react__WEBPACK_IMPORTED_MODULE_4__.memo)(({ record }) => {
  const values = Object.entries(record);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: values.map(([key, value]) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_5__.AlertLabel, { labelKey: key, value: String(value) }, key)) });
});
AlertInstanceValues.displayName = "AlertInstanceValues";
const getStyles = (theme) => ({
  logsContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "grid",
    gridTemplateColumns: "max-content max-content max-content auto max-content",
    gap: theme.spacing(2, 1),
    alignItems: "center"
  }),
  logsScrollable: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    height: "500px",
    overflow: "scroll",
    flex: 1
  }),
  timestampWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.secondary
  }),
  timestampText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.primary,
    fontSize: theme.typography.bodySmall.fontSize,
    fontWeight: theme.typography.fontWeightBold
  }),
  listItemWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    background: "transparent",
    outline: "1px solid transparent",
    padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
    [theme.transitions.handleMotion("no-preference", "reduce")]: {
      transition: "background 150ms, outline 150ms"
    }
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/state-history/LogTimelineViewer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogTimelineViewer: () => (/* binding */ LogTimelineViewer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_TimelineChart_TimelineChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/TimelineChart/TimelineChart.tsx");
/* harmony import */ var app_core_components_TimelineChart_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/TimelineChart/utils.ts");









const replaceVariables = (v) => v;
const LogTimelineViewer = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ frames, timeRange }) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useTheme2)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__["default"], { disableHeight: true, children: ({ width }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_TimelineChart_TimelineChart__WEBPACK_IMPORTED_MODULE_6__.TimelineChart,
    {
      frames,
      timeRange,
      timeZone: "browser",
      mode: app_core_components_TimelineChart_utils__WEBPACK_IMPORTED_MODULE_7__.TimelineMode.Changes,
      height: 18 * frames.length + 50,
      width,
      showValue: _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.VisibilityMode.Never,
      theme,
      rowHeight: 0.8,
      legend: {
        calcs: [],
        displayMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.LegendDisplayMode.List,
        placement: "bottom",
        showLegend: true
      },
      legendItems: [
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.log-timeline-viewer.label.normal", "Normal"),
          color: theme.colors.success.main,
          yAxis: 1
        },
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.log-timeline-viewer.label.pending", "Pending"),
          color: theme.colors.warning.main,
          yAxis: 1
        },
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.log-timeline-viewer.label.recovering", "Recovering"),
          color: theme.colors.warning.main,
          yAxis: 1
        },
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.log-timeline-viewer.label.firing", "Firing"),
          color: theme.colors.error.main,
          yAxis: 1
        },
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.log-timeline-viewer.label.no-data", "No Data"),
          color: theme.colors.info.main,
          yAxis: 1
        },
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.log-timeline-viewer.label.mixed", "Mixed"),
          color: theme.colors.text.secondary,
          yAxis: 1
        }
      ],
      replaceVariables
    }
  ) });
});
LogTimelineViewer.displayName = "LogTimelineViewer";


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/state-history/LokiStateHistory.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getStyles: () => (/* binding */ getStyles),
/* harmony export */   useFrameSubset: () => (/* binding */ useFrameSubset)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-alerting/src/grafana/rules/components/labels/AlertLabels.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/datetime/moment_wrapper.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _api_stateHistoryApi__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/api/stateHistoryApi.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _HoverCard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/components/HoverCard.tsx");
/* harmony import */ var _LogRecordViewer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/LogRecordViewer.tsx");
/* harmony import */ var _LogTimelineViewer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/LogTimelineViewer.tsx");
/* harmony import */ var _useRuleHistoryRecords__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/useRuleHistoryRecords.tsx");

















const STATE_HISTORY_POLLING_INTERVAL = 10 * 1e3;
const MAX_TIMELINE_SERIES = 12;
const LokiStateHistory = ({ ruleUID }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.useStyles2)(getStyles);
  const [instancesFilter, setInstancesFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const logsRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(/* @__PURE__ */ new Map());
  const { getValues, setValue, register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({ defaultValues: { query: "" } });
  const { useGetRuleHistoryQuery } = _api_stateHistoryApi__WEBPACK_IMPORTED_MODULE_18__.stateHistoryApi;
  const queryTimeRange = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => getDefaultTimeRange(), []);
  const {
    currentData: stateHistory,
    isLoading,
    isError,
    error
  } = useGetRuleHistoryQuery(
    {
      ruleUid: ruleUID,
      from: queryTimeRange.from.unix(),
      to: queryTimeRange.to.unix(),
      limit: 250
    },
    {
      refetchOnFocus: true,
      refetchOnReconnect: true,
      pollingInterval: STATE_HISTORY_POLLING_INTERVAL
    }
  );
  const { dataFrames, historyRecords, commonLabels, totalRecordsCount } = (0,_useRuleHistoryRecords__WEBPACK_IMPORTED_MODULE_23__.useRuleHistoryRecords)(
    stateHistory,
    instancesFilter
  );
  const { frameSubset, frameTimeRange } = useFrameSubset(dataFrames);
  const onLogRecordLabelClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(
    (label) => {
      const matcherString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_19__.combineMatcherStrings)(getValues("query"), label);
      setInstancesFilter(matcherString);
      setValue("query", matcherString);
    },
    [setInstancesFilter, setValue, getValues]
  );
  const onFilterCleared = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    setInstancesFilter("");
    setValue("query", "");
  }, [setInstancesFilter, setValue]);
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.loki-state-history.loading", children: "Loading..." }) });
  }
  if (isError) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)(
          "alerting.loki-state-history.title-error-fetching-the-state-history",
          "Error fetching the state history"
        ),
        severity: "error",
        children: error instanceof Error ? error.message : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("alerting.loki-state-history.error-unable-to-fetch", "Unable to fetch alert state history")
      }
    );
  }
  const hasMoreInstances = frameSubset.length < dataFrames.length;
  const emptyStateMessage = totalRecordsCount > 0 ? `No matches were found for the given filters among the ${totalRecordsCount} instances` : "No state transitions have occurred in the last 30 days";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.fullSize, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit((data) => setInstancesFilter(data.query)), children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        SearchFieldInput,
        {
          ...register("query"),
          showClearFilterSuffix: !!instancesFilter,
          onClearFilterClick: onFilterCleared
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "submit", hidden: true })
    ] }),
    !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(commonLabels) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { gap: 1, alignItems: "center", wrap: "wrap", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { gap: 0.5, alignItems: "center", minWidth: "fit-content", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Text, { variant: "bodySmall", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.loki-state-history.common-labels", children: "Common labels" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Tooltip,
          {
            content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)(
              "alerting.loki-state-history.tooltip-common-labels",
              "Common labels are the ones attached to all of the alert instances"
            ),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { name: "info-circle", size: "sm" })
          }
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_5__.AlertLabels, { labels: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.fromPairs)(commonLabels), size: "sm" })
    ] }),
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(frameSubset) ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.emptyState, children: [
      emptyStateMessage,
      totalRecordsCount > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Button, { variant: "secondary", type: "button", onClick: onFilterCleared, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.loki-state-history.clear-filters", children: "Clear filters" }) })
    ] }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.graphWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LogTimelineViewer__WEBPACK_IMPORTED_MODULE_22__.LogTimelineViewer, { frames: frameSubset, timeRange: frameTimeRange }) }),
      hasMoreInstances && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.moreInstancesWarning, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { direction: "row", alignItems: "center", gap: 1, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { name: "exclamation-triangle", size: "sm" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small", { children: `Only showing ${frameSubset.length} out of ${dataFrames.length} instances. Click on the labels to narrow down the results` })
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _LogRecordViewer__WEBPACK_IMPORTED_MODULE_21__.LogRecordViewerByTimestamp,
        {
          records: historyRecords,
          commonLabels,
          onRecordsRendered: (recordRefs) => logsRef.current = recordRefs,
          onLabelClick: onLogRecordLabelClick
        }
      )
    ] })
  ] });
};
function useFrameSubset(frames) {
  return (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    const frameSubset = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.take)(frames, MAX_TIMELINE_SERIES);
    const frameSubsetTimestamps = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.sortBy)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.uniq)(frameSubset.flatMap((frame) => frame.fields[0].values)));
    const minTs = Math.min(...frameSubsetTimestamps);
    const maxTs = Math.max(...frameSubsetTimestamps);
    const rangeStart = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.dateTime)(minTs);
    const rangeStop = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.dateTime)(maxTs);
    const frameTimeRange = {
      from: rangeStart,
      to: rangeStop,
      raw: {
        from: rangeStart,
        to: rangeStop
      }
    };
    return { frameSubset, frameSubsetTimestamps, frameTimeRange };
  }, [frames]);
}
const SearchFieldInput = react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(
  ({ showClearFilterSuffix, onClearFilterClick, ...rest }, ref) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
      {
        label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Label, { htmlFor: "instancesSearchInput", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { gap: 0.5, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.search-field-input.filter-instances", children: "Filter instances" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _HoverCard__WEBPACK_IMPORTED_MODULE_20__.PopupCard,
            {
              content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.search-field-input.filter-instances-tooltip", children: "Use label matcher expression or click on an instance label to filter instances, for example:" }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: "{foo=bar}" }) })
              ] }),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { name: "info-circle", size: "sm" })
            }
          )
        ] }) }),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Input,
          {
            id: "instancesSearchInput",
            prefix: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { name: "search" }),
            suffix: showClearFilterSuffix && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Button, { fill: "text", icon: "times", size: "sm", onClick: onClearFilterClick, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "alerting.search-field-input.clear", children: "Clear" }) }),
            placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)(
              "alerting.search-field-input.instancesSearchInput-placeholder-filter-instances",
              "Filter instances"
            ),
            ref,
            ...rest
          }
        )
      }
    );
  }
);
SearchFieldInput.displayName = "SearchFieldInput";
function getDefaultTimeRange() {
  const fromDateTime = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.dateTime)().subtract(30, "days");
  const toDateTime = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_6__.dateTime)();
  return {
    from: fromDateTime,
    to: toDateTime,
    raw: { from: fromDateTime, to: toDateTime }
  };
}
const getStyles = (theme) => ({
  fullSize: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    minWidth: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column"
  }),
  graphWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: `${theme.spacing()} 0`
  }),
  emptyState: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.secondary,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    alignItems: "center",
    margin: "auto auto"
  }),
  moreInstancesWarning: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.warning.text,
    padding: theme.spacing()
  }),
  // we need !important here to override the list item default styles
  highlightedLogRecord: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    background: `${theme.colors.primary.transparent} !important`,
    outline: `1px solid ${theme.colors.primary.shade} !important`
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LokiStateHistory);


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/state-history/common.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractCommonLabels: () => (/* binding */ extractCommonLabels),
/* harmony export */   historyDataFrameToLogRecords: () => (/* binding */ historyDataFrameToLogRecords),
/* harmony export */   isLine: () => (/* binding */ isLine),
/* harmony export */   isNumbers: () => (/* binding */ isNumbers),
/* harmony export */   omitLabels: () => (/* binding */ omitLabels)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


function omitLabels(labels, common) {
  return labels.filter((label) => {
    return !common.find((commonLabel) => JSON.stringify(commonLabel) === JSON.stringify(label));
  });
}
function extractCommonLabels(labels) {
  const flatLabels = labels.flatMap((label) => label);
  const commonLabels = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqBy)(
    flatLabels.filter((label) => {
      const count = flatLabels.filter((l) => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(label, l)).length;
      return count === Object.keys(labels).length;
    }),
    (label) => JSON.stringify(label)
  );
  return commonLabels;
}
function historyDataFrameToLogRecords(stateHistory) {
  if (!stateHistory?.data || !stateHistory.data.values || !Array.isArray(stateHistory.data.values)) {
    return [];
  }
  const [tsValues, lines] = stateHistory.data.values;
  if (!Array.isArray(tsValues) || !Array.isArray(lines) || tsValues.length !== lines.length) {
    return [];
  }
  const timestamps = isNumbers(tsValues) ? tsValues : [];
  const logRecords = timestamps.reduce((acc, timestamp, index) => {
    const line = lines[index];
    if (!isLine(line)) {
      return acc;
    }
    acc.push({ timestamp, line });
    return acc;
  }, []);
  return logRecords;
}
function isNumbers(value) {
  return value.every((v) => typeof v === "number");
}
function isLine(value) {
  return typeof value === "object" && value !== null && "current" in value && "previous" in value;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/state-history/useRuleHistoryRecords.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logRecordsToDataFrame: () => (/* binding */ logRecordsToDataFrame),
/* harmony export */   useRuleHistoryRecords: () => (/* binding */ useRuleHistoryRecords)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/field/displayProcessor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/field/fieldComparers.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-schema/src/raw/dashboard/x/dashboard_types.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_matchers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/matchers.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/common.ts");










function useRuleHistoryRecords(stateHistory, filter) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useTheme2)();
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const logRecords = (0,_common__WEBPACK_IMPORTED_MODULE_9__.historyDataFrameToLogRecords)(stateHistory);
    const logRecordsByInstance = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(logRecords, (record) => {
      return JSON.stringify(record.line.labels);
    });
    const groupLabels = Object.keys(logRecordsByInstance);
    const groupLabelsArray = groupLabels.map((label) => {
      return Object.entries(JSON.parse(label));
    });
    const commonLabels = (0,_common__WEBPACK_IMPORTED_MODULE_9__.extractCommonLabels)(groupLabelsArray);
    const filterMatchers = filter ? (0,_utils_matchers__WEBPACK_IMPORTED_MODULE_8__.parsePromQLStyleMatcherLooseSafe)(filter) : [];
    const filteredGroupedLines = Object.entries(logRecordsByInstance).filter(([key]) => {
      const labels = JSON.parse(key);
      return (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_7__.labelsMatchMatchers)(labels, filterMatchers);
    });
    const dataFrames = filteredGroupedLines.map(([key, records]) => {
      return logRecordsToDataFrame(key, records, commonLabels, theme);
    });
    return {
      historyRecords: logRecords.filter(({ line }) => line.labels && (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_7__.labelsMatchMatchers)(line.labels, filterMatchers)),
      dataFrames,
      commonLabels,
      totalRecordsCount: logRecords.length
    };
  }, [stateHistory, filter, theme]);
}
function logRecordsToDataFrame(instanceLabels, records, commonLabels, theme) {
  const parsedInstanceLabels = Object.entries(JSON.parse(instanceLabels));
  const timeField = {
    name: "time",
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.time,
    values: [...records.map((record) => record.timestamp), Date.now()],
    config: { displayName: "Time", custom: { fillOpacity: 100 } }
  };
  const timeIndex = timeField.values.map((_, index) => index);
  timeIndex.sort((0,_grafana_data_internal__WEBPACK_IMPORTED_MODULE_4__.fieldIndexComparer)(timeField));
  const stateValues = [...records.map((record) => record.line.current), records.at(-1)?.line.current];
  const frame = {
    fields: [
      {
        ...timeField,
        values: timeField.values.map((_, i) => timeField.values[timeIndex[i]])
      },
      {
        name: "State",
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.string,
        values: stateValues.map((_, i) => stateValues[timeIndex[i]]),
        config: {
          displayName: (0,_common__WEBPACK_IMPORTED_MODULE_9__.omitLabels)(parsedInstanceLabels, commonLabels).map(([key, label]) => `${key}=${label}`).join(", "),
          color: { mode: "thresholds" },
          custom: { fillOpacity: 100 },
          mappings: [
            {
              type: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.MappingType.RegexToText,
              options: {
                //  Map as a regex so we capture `Normal`, and `Normal (Updated)`
                pattern: "/^normal/i",
                result: { color: theme.colors.success.main }
              }
            },
            {
              type: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.MappingType.RegexToText,
              options: {
                pattern: "/Alerting/",
                result: { color: theme.colors.error.main }
              }
            },
            {
              type: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.MappingType.ValueToText,
              options: {
                Pending: {
                  color: theme.colors.warning.main
                },
                Recovering: {
                  color: theme.colors.warning.main
                },
                NoData: {
                  color: theme.colors.info.main
                }
              }
            }
          ],
          thresholds: {
            mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.ThresholdsMode.Absolute,
            steps: []
          }
        }
      }
    ],
    length: timeField.values.length,
    name: instanceLabels
  };
  frame.fields.forEach((field) => {
    field.display = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getDisplayProcessor)({ field, theme });
  });
  return frame;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/enterprise-components/AI/AIGenTriageButton/addAITriageButton.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AITriageButtonComponent: () => (/* binding */ AITriageButtonComponent),
/* harmony export */   addAITriageButton: () => (/* binding */ addAITriageButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/ErrorBoundary/ErrorBoundary.tsx");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");





let InternalAITriageButtonComponent = null;
const AITriageButtonComponent = (props) => {
  if (!InternalAITriageButtonComponent) {
    return null;
  }
  const WrappedComponent = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.withErrorBoundary)(InternalAITriageButtonComponent, {
    title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.ai.error-boundary.triage-button", "AI Triage Button failed to load"),
    style: "alertbox",
    errorLogger: _Analytics__WEBPACK_IMPORTED_MODULE_3__.logError
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, props);
};
function addAITriageButton(component) {
  InternalAITriageButtonComponent = component;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/home/Insights.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INSTANCE_ID: () => (/* binding */ INSTANCE_ID),
/* harmony export */   PANEL_STYLES: () => (/* binding */ PANEL_STYLES),
/* harmony export */   getInsightsScenes: () => (/* binding */ getInsightsScenes),
/* harmony export */   insightsIsAvailable: () => (/* binding */ insightsIsAvailable),
/* harmony export */   overrideToFixedColor: () => (/* binding */ overrideToFixedColor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/services/dataSourceSrv.ts");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _api_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/api/utils.ts");
/* harmony import */ var _insights_SectionFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/insights/SectionFooter.tsx");
/* harmony import */ var _insights_SectionSubheader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/insights/SectionSubheader.tsx");
/* harmony import */ var _insights_grafana_Active__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/insights/grafana/Active.tsx");
/* harmony import */ var _insights_grafana_AlertsByStateScene__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/insights/grafana/AlertsByStateScene.tsx");
/* harmony import */ var _insights_grafana_EvalSuccessVsFailuresScene__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/insights/grafana/EvalSuccessVsFailuresScene.tsx");
/* harmony import */ var _insights_grafana_InstanceStatusScene__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/insights/grafana/InstanceStatusScene.tsx");
/* harmony import */ var _insights_grafana_MissedIterationsScene__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/insights/grafana/MissedIterationsScene.tsx");
/* harmony import */ var _insights_grafana_MostFiredInstancesTable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/insights/grafana/MostFiredInstancesTable.tsx");
/* harmony import */ var _insights_grafana_Paused__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/insights/grafana/Paused.tsx");
/* harmony import */ var _insights_grafana_RulesByEvaluation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/insights/grafana/RulesByEvaluation.tsx");
/* harmony import */ var _insights_grafana_RulesByEvaluationPercentage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/insights/grafana/RulesByEvaluationPercentage.tsx");
/* harmony import */ var _insights_grafana_alertmanager_AlertsByState__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/insights/grafana/alertmanager/AlertsByState.tsx");
/* harmony import */ var _insights_grafana_alertmanager_SilencesByStateScene__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/insights/grafana/alertmanager/SilencesByStateScene.tsx");
/* harmony import */ var _insights_mimir_AlertsByState__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/AlertsByState.tsx");
/* harmony import */ var _insights_mimir_InvalidConfig__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/InvalidConfig.tsx");
/* harmony import */ var _insights_mimir_Notifications__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/Notifications.tsx");
/* harmony import */ var _insights_mimir_Silences__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/Silences.tsx");
/* harmony import */ var _insights_mimir_perGroup_RuleGroupEvaluationDurationIntervalRatioScene__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/perGroup/RuleGroupEvaluationDurationIntervalRatioScene.tsx");
/* harmony import */ var _insights_mimir_perGroup_RuleGroupEvaluationDurationScene__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/perGroup/RuleGroupEvaluationDurationScene.tsx");
/* harmony import */ var _insights_mimir_perGroup_RuleGroupEvaluationsScene__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/perGroup/RuleGroupEvaluationsScene.tsx");
/* harmony import */ var _insights_mimir_perGroup_RuleGroupIntervalScene__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/perGroup/RuleGroupIntervalScene.tsx");
/* harmony import */ var _insights_mimir_perGroup_RulesPerGroupScene__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/perGroup/RulesPerGroupScene.tsx");
/* harmony import */ var _insights_mimir_rules_EvalSuccessVsFailuresScene__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/rules/EvalSuccessVsFailuresScene.tsx");
/* harmony import */ var _insights_mimir_rules_Firing__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/rules/Firing.tsx");
/* harmony import */ var _insights_mimir_rules_InstancesByState__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/rules/InstancesByState.tsx");
/* harmony import */ var _insights_mimir_rules_InstancesPercentageByState__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/rules/InstancesPercentageByState.tsx");
/* harmony import */ var _insights_mimir_rules_MissedIterationsScene__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/rules/MissedIterationsScene.tsx");
/* harmony import */ var _insights_mimir_rules_MostFiredRules__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/rules/MostFiredRules.tsx");
/* harmony import */ var _insights_mimir_rules_Pending__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("./public/app/features/alerting/unified/insights/mimir/rules/Pending.tsx");




































const ashDs = {
  type: "loki",
  uid: "grafanacloud-alert-state-history",
  settings: void 0
};
const cloudUsageDs = {
  type: "prometheus",
  uid: "grafanacloud-usage",
  settings: void 0
};
const grafanaCloudPromDs = {
  type: "prometheus",
  uid: "grafanacloud-prom",
  settings: void 0
};
const SERIES_COLORS = {
  alerting: "red",
  firing: "red",
  active: "red",
  missed: "red",
  failed: "red",
  pending: "yellow",
  recovering: "yellow",
  nodata: "blue",
  "active evaluation": "blue",
  normal: "green",
  success: "green",
  error: "orange"
};
function overrideToFixedColor(key) {
  return {
    mode: "fixed",
    fixedColor: SERIES_COLORS[key]
  };
}
const PANEL_STYLES = { minHeight: 300 };
const THIS_WEEK_TIME_RANGE = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneTimeRange({ from: "now-1w", to: "now" });
const namespace = (0,_api_utils__WEBPACK_IMPORTED_MODULE_7__.getAPINamespace)();
const INSTANCE_ID = namespace.includes("stacks-") ? namespace.replace("stacks-", "") : void 0;
const getInsightsDataSources = () => {
  const dataSourceSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getDataSourceSrv)();
  [ashDs, cloudUsageDs, grafanaCloudPromDs].forEach((ds) => {
    ds.settings = dataSourceSrv.getInstanceSettings(ds.uid);
  });
  return [ashDs, cloudUsageDs, grafanaCloudPromDs];
};
const insightsIsAvailable = () => {
  const [_, cloudUsageDs2, __] = getInsightsDataSources();
  return cloudUsageDs2.settings;
};
function getInsightsScenes() {
  const [ashDs2, cloudUsageDs2, grafanaCloudPromDs2] = getInsightsDataSources();
  const categories = [];
  const showGrafanaManaged = ashDs2.settings && cloudUsageDs2.settings;
  const showGrafanaAlertmanager = Boolean(cloudUsageDs2.settings);
  const showMimirAlertmanager = Boolean(cloudUsageDs2.settings);
  const showMimirManaged = cloudUsageDs2.settings && grafanaCloudPromDs2.settings;
  const showMimirManagedPerGroup = Boolean(cloudUsageDs2.settings);
  if (showGrafanaManaged) {
    categories.push(
      new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexItem({
        ySizing: "content",
        body: getGrafanaManagedScenes()
      })
    );
  }
  if (showGrafanaAlertmanager) {
    categories.push(
      new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexItem({
        ySizing: "content",
        body: getGrafanaAlertmanagerScenes()
      })
    );
  }
  if (showMimirManaged) {
    categories.push(
      new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexItem({
        ySizing: "content",
        body: getMimirManagedRulesScenes()
      })
    );
  }
  if (showMimirManagedPerGroup) {
    categories.push(
      new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexItem({
        ySizing: "content",
        body: getMimirManagedRulesPerGroupScenes()
      })
    );
  }
  if (showMimirAlertmanager) {
    categories.push(
      new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexItem({
        ySizing: "content",
        body: getCloudScenes()
      })
    );
  }
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.EmbeddedScene({
    $timeRange: THIS_WEEK_TIME_RANGE,
    controls: [
      new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneReactObject({
        component: _insights_SectionSubheader__WEBPACK_IMPORTED_MODULE_9__.SectionSubheader,
        props: {
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.insights.monitor-status-of-system", children: "Monitor the status of your system" }),
            " ",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
              {
                content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.insights.monitor-status-system-tooltip", children: "Alerting insights provides pre-built dashboards to monitor your alerting data." }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.insights.monitor-status-system-tooltip-identify", children: "You can identify patterns in why things go wrong and discover trends in alerting performance within your organization." })
                ] }),
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { name: "info-circle", size: "sm" })
              }
            )
          ] })
        }
      }),
      new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneControlsSpacer(),
      new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneTimePicker({}),
      new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneRefreshPicker({})
    ],
    body: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
      direction: "column",
      children: categories
    })
  });
}
function getGrafanaManagedScenes() {
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.NestedScene({
    title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.get-grafana-managed-scenes.title.grafanamanaged-alert-rules", "Grafana-managed alert rules"),
    canCollapse: true,
    isCollapsed: false,
    body: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
      direction: "column",
      children: [
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
          direction: "column",
          children: [
            new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
              children: [
                (0,_insights_grafana_MostFiredInstancesTable__WEBPACK_IMPORTED_MODULE_15__.getMostFiredInstancesScene)(ashDs, "Top 10 firing instances"),
                (0,_insights_grafana_Active__WEBPACK_IMPORTED_MODULE_10__.getActiveGrafanaAlertsScene)(cloudUsageDs, "Active rules"),
                (0,_insights_grafana_Paused__WEBPACK_IMPORTED_MODULE_16__.getPausedGrafanaAlertsScene)(cloudUsageDs, "Paused rules")
              ]
            }),
            new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
              children: [
                (0,_insights_grafana_AlertsByStateScene__WEBPACK_IMPORTED_MODULE_11__.getGrafanaInstancesByStateScene)(cloudUsageDs, "Alert instances by state"),
                new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
                  height: "400px",
                  direction: "column",
                  children: [
                    new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
                      height: "400px",
                      children: [
                        (0,_insights_grafana_InstanceStatusScene__WEBPACK_IMPORTED_MODULE_13__.getInstanceStatByStatusScene)(
                          cloudUsageDs,
                          "Firing instances",
                          "The number of currently firing alert rule instances",
                          "alerting"
                        ),
                        (0,_insights_grafana_InstanceStatusScene__WEBPACK_IMPORTED_MODULE_13__.getInstanceStatByStatusScene)(
                          cloudUsageDs,
                          "Recovering instances",
                          "The number of currently recovering alert rule instances",
                          "recovering"
                        ),
                        (0,_insights_grafana_InstanceStatusScene__WEBPACK_IMPORTED_MODULE_13__.getInstanceStatByStatusScene)(
                          cloudUsageDs,
                          "Pending instances",
                          "The number of currently pending alert rule instances",
                          "pending"
                        )
                      ]
                    }),
                    new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
                      children: [
                        (0,_insights_grafana_InstanceStatusScene__WEBPACK_IMPORTED_MODULE_13__.getInstanceStatByStatusScene)(
                          cloudUsageDs,
                          "No data instances",
                          "The current number of alert rule instances in No data state",
                          "nodata"
                        ),
                        (0,_insights_grafana_InstanceStatusScene__WEBPACK_IMPORTED_MODULE_13__.getInstanceStatByStatusScene)(
                          cloudUsageDs,
                          "Error instances",
                          "The current number of alert rule instances in Error state",
                          "error"
                        )
                      ]
                    })
                  ]
                })
              ]
            }),
            new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
              children: [
                (0,_insights_grafana_RulesByEvaluation__WEBPACK_IMPORTED_MODULE_17__.getGrafanaRulesByEvaluationScene)(cloudUsageDs, "Alert rule evaluation"),
                (0,_insights_grafana_RulesByEvaluationPercentage__WEBPACK_IMPORTED_MODULE_18__.getGrafanaRulesByEvaluationPercentageScene)(cloudUsageDs, "% of alert rule evaluation")
              ]
            }),
            new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
              children: [
                (0,_insights_grafana_EvalSuccessVsFailuresScene__WEBPACK_IMPORTED_MODULE_12__.getGrafanaEvalSuccessVsFailuresScene)(cloudUsageDs, "Evaluation success vs failures"),
                (0,_insights_grafana_MissedIterationsScene__WEBPACK_IMPORTED_MODULE_14__.getGrafanaMissedIterationsScene)(cloudUsageDs, "Iterations missed per alert rule")
              ]
            })
          ]
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneReactObject({
          component: _insights_SectionFooter__WEBPACK_IMPORTED_MODULE_8__.SectionFooter
        })
      ]
    })
  });
}
function getGrafanaAlertmanagerScenes() {
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.NestedScene({
    title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.get-grafana-alertmanager-scenes.title.grafana-alertmanager", "Grafana Alertmanager"),
    canCollapse: true,
    isCollapsed: false,
    body: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
      direction: "column",
      children: [
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
          children: [
            (0,_insights_grafana_alertmanager_AlertsByState__WEBPACK_IMPORTED_MODULE_19__.getAlertsByStateScene)(cloudUsageDs, "Firing alerts by state"),
            // getGrafanaAlertmanagerNotificationsScene(cloudUsageDs, 'Notification delivery'),
            (0,_insights_grafana_alertmanager_SilencesByStateScene__WEBPACK_IMPORTED_MODULE_20__.getGrafanaAlertmanagerSilencesScene)(cloudUsageDs, "Silences")
          ]
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneReactObject({
          component: _insights_SectionFooter__WEBPACK_IMPORTED_MODULE_8__.SectionFooter
        })
      ]
    })
  });
}
function getCloudScenes() {
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.NestedScene({
    title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.get-cloud-scenes.title.mimir-alertmanager", "Mimir Alertmanager"),
    canCollapse: true,
    isCollapsed: false,
    body: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
      direction: "column",
      children: [
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexItem({
          body: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneReactObject({
            component: _insights_SectionSubheader__WEBPACK_IMPORTED_MODULE_9__.SectionSubheader,
            props: { datasources: [cloudUsageDs] }
          })
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
          children: [
            (0,_insights_mimir_AlertsByState__WEBPACK_IMPORTED_MODULE_21__.getAlertsByStateScene)(cloudUsageDs, "Firing alerts by state"),
            (0,_insights_mimir_Notifications__WEBPACK_IMPORTED_MODULE_23__.getNotificationsScene)(cloudUsageDs, "Notification delivery")
          ]
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
          children: [
            (0,_insights_mimir_Silences__WEBPACK_IMPORTED_MODULE_24__.getSilencesScene)(cloudUsageDs, "Silences"),
            (0,_insights_mimir_InvalidConfig__WEBPACK_IMPORTED_MODULE_22__.getInvalidConfigScene)(cloudUsageDs, "Invalid configuration")
          ]
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneReactObject({
          component: _insights_SectionFooter__WEBPACK_IMPORTED_MODULE_8__.SectionFooter
        })
      ]
    })
  });
}
function getMimirManagedRulesScenes() {
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.NestedScene({
    title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.get-mimir-managed-rules-scenes.title.mimirmanaged-alert-rules", "Mimir-managed alert rules"),
    canCollapse: true,
    isCollapsed: false,
    body: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
      direction: "column",
      children: [
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexItem({
          body: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneReactObject({
            component: _insights_SectionSubheader__WEBPACK_IMPORTED_MODULE_9__.SectionSubheader,
            props: { datasources: [grafanaCloudPromDs, cloudUsageDs] }
          })
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
          children: [
            (0,_insights_mimir_rules_MostFiredRules__WEBPACK_IMPORTED_MODULE_35__.getMostFiredRulesScene)(grafanaCloudPromDs, "Top 10 firing rules"),
            (0,_insights_mimir_rules_Firing__WEBPACK_IMPORTED_MODULE_31__.getFiringCloudAlertsScene)(grafanaCloudPromDs, "Firing instances"),
            (0,_insights_mimir_rules_Pending__WEBPACK_IMPORTED_MODULE_36__.getPendingCloudAlertsScene)(grafanaCloudPromDs, "Pending instances")
          ]
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
          children: [
            (0,_insights_mimir_rules_InstancesByState__WEBPACK_IMPORTED_MODULE_32__.getInstancesByStateScene)(grafanaCloudPromDs, "Firing and pending alert instances"),
            (0,_insights_mimir_rules_InstancesPercentageByState__WEBPACK_IMPORTED_MODULE_33__.getInstancesPercentageByStateScene)(grafanaCloudPromDs, "% of alert instances by state")
          ]
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
          children: [
            (0,_insights_mimir_rules_EvalSuccessVsFailuresScene__WEBPACK_IMPORTED_MODULE_30__.getEvalSuccessVsFailuresScene)(cloudUsageDs, "Evaluation success vs failures"),
            (0,_insights_mimir_rules_MissedIterationsScene__WEBPACK_IMPORTED_MODULE_34__.getMissedIterationsScene)(cloudUsageDs, "Missed evaluations")
          ]
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneReactObject({
          component: _insights_SectionFooter__WEBPACK_IMPORTED_MODULE_8__.SectionFooter
        })
      ]
    })
  });
}
function getMimirManagedRulesPerGroupScenes() {
  const ruleGroupHandler = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.QueryVariable({
    label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.get-mimir-managed-rules-per-group-scenes.rule-group-handler.label.rule-group", "Rule Group"),
    name: "rule_group",
    datasource: cloudUsageDs,
    query: "label_values(grafanacloud_instance_rule_group_rules,rule_group)"
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.NestedScene({
    title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
      "alerting.get-mimir-managed-rules-per-group-scenes.title.mimirmanaged-alert-rules-per-rule-group",
      "Mimir-managed alert rules - per rule group"
    ),
    canCollapse: true,
    isCollapsed: false,
    body: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
      direction: "column",
      children: [
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexItem({
          body: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneReactObject({
            component: _insights_SectionSubheader__WEBPACK_IMPORTED_MODULE_9__.SectionSubheader,
            props: { datasources: [cloudUsageDs] }
          })
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
          children: [
            (0,_insights_mimir_perGroup_RuleGroupEvaluationsScene__WEBPACK_IMPORTED_MODULE_27__.getRuleGroupEvaluationsScene)(cloudUsageDs, "Rule group evaluation"),
            (0,_insights_mimir_perGroup_RuleGroupIntervalScene__WEBPACK_IMPORTED_MODULE_28__.getRuleGroupIntervalScene)(cloudUsageDs, "Rule group interval")
          ]
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneFlexLayout({
          children: [
            (0,_insights_mimir_perGroup_RuleGroupEvaluationDurationScene__WEBPACK_IMPORTED_MODULE_26__.getRuleGroupEvaluationDurationScene)(cloudUsageDs, "Rule group evaluation duration"),
            (0,_insights_mimir_perGroup_RulesPerGroupScene__WEBPACK_IMPORTED_MODULE_29__.getRulesPerGroupScene)(cloudUsageDs, "Rules per group"),
            (0,_insights_mimir_perGroup_RuleGroupEvaluationDurationIntervalRatioScene__WEBPACK_IMPORTED_MODULE_25__.getRuleGroupEvaluationDurationIntervalRatioScene)(cloudUsageDs, "Evaluation duration / interval ratio")
          ]
        }),
        new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneReactObject({
          component: _insights_SectionFooter__WEBPACK_IMPORTED_MODULE_8__.SectionFooter
        })
      ]
    }),
    $variables: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneVariableSet({
      variables: [ruleGroupHandler]
    }),
    controls: [new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.VariableValueSelectors({})]
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/DataSourcesInfo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataSourcesInfo: () => (/* binding */ DataSourcesInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");




function DataSourcesInfo({ datasources }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const displayDs = datasources.map((ds) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    ds.settings?.meta.info.logos.small && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: styles.dsImage, src: ds.settings?.meta.info.logos.small, alt: ds.settings?.name || ds.uid }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: ds.settings?.name || ds.uid })
  ] }, ds.uid));
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.dsContainer, children: displayDs });
}
const getStyles = (theme) => ({
  dsImage: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    label: "ds-image",
    width: "16px",
    marginRight: "3px"
  }),
  dsContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    fontSize: theme.typography.bodySmall.fontSize,
    gap: "10px",
    marginBottom: "10px",
    justifyContent: "flex-end"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsightsMenuButton: () => (/* binding */ InsightsMenuButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/utils/url.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/Menu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Dropdown/Dropdown.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");









const getPrometheusExploreUrl = ({
  queries,
  range,
  variables
}) => {
  const ruleGroup = variables?.variables.find((v) => v.state.name === "rule_group")?.getValue() || null;
  if (ruleGroup !== null) {
    queries = queries?.map((query) => {
      return {
        ...query,
        expr: query.expr.replace("$rule_group", String(ruleGroup))
      };
    });
  }
  const urlState = {
    datasource: queries?.length && queries[0].datasource?.uid || null,
    queries: queries?.map(({ expr, refId }, i) => {
      return { expr, refId };
    }) || [],
    range: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.toURLRange)(range ? { from: range.from, to: range.to } : { from: "now-1h", to: "now" })
  };
  const param = encodeURIComponent((0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.serializeStateToUrlParam)(urlState));
  return `/explore?left=${param}`;
};
const InsightsMenuButtonRenderer = ({ model }) => {
  const data = _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.sceneGraph.getData(model).useState();
  const timeRange = _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.sceneGraph.getTimeRange(model).useState();
  const variables = _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.sceneGraph.getVariables(model).useState();
  const panel = model.state.panel;
  const url = getPrometheusExploreUrl({
    queries: data.data?.request?.targets,
    range: timeRange,
    variables
  });
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useStyles2)(getStyles);
  const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const onDismiss = () => {
    setShowModal(false);
  };
  const onButtonClick = (useful) => {
    (0,_Analytics__WEBPACK_IMPORTED_MODULE_13__.trackInsightsFeedback)({ useful, panel });
    onDismiss();
  };
  const modal = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Modal,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.insights-menu-button-renderer.modal.title-rate-this-panel", "Rate this panel"),
      isOpen: showModal,
      onDismiss,
      onClickBackdrop: onDismiss,
      className: styles.container,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.insights-menu-button-renderer.help-us", children: "Help us improve this page by telling us whether this panel is useful to you!" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.buttonsContainer, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button, { variant: "secondary", className: styles.buttonContainer, onClick: () => onButtonClick(false), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.button, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { name: "thumbs-up", className: styles.thumbsdown, size: "xxxl" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: `I don't like it` })
          ] }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button, { variant: "secondary", className: styles.buttonContainer, onClick: () => onButtonClick(true), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.button, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { name: "thumbs-up", size: "xxxl" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.insights-menu-button-renderer.modal.i-like-it", children: "I like it" }) })
          ] }) })
        ] })
      ] })
    }
  );
  const menu = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Menu, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Menu.Item,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.insights-menu-button-renderer.menu.label-explore", "Explore"),
        icon: "compass",
        url,
        target: "_blank"
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Menu.Item,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.insights-menu-button-renderer.menu.label-rate-this-panel", "Rate this panel"),
        icon: "comment-alt-message",
        onClick: () => setShowModal(true)
      }
    )
  ] });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Dropdown, { overlay: menu, placement: "bottom-start", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.IconButton,
      {
        name: "ellipsis-v",
        variant: "secondary",
        className: styles.menu,
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.insights-menu-button-renderer.aria-label-rate-this-panel", "Rate this panel")
      }
    ) }),
    modal
  ] });
};
class InsightsMenuButton extends _grafana_scenes__WEBPACK_IMPORTED_MODULE_5__.SceneObjectBase {
  static {
    this.Component = InsightsMenuButtonRenderer;
  }
}
const getStyles = (theme) => ({
  buttonsContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    gap: "25px"
  }),
  buttonContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    height: "150px",
    width: "150px",
    cursor: "pointer",
    justifyContent: "center"
  }),
  button: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "column"
  }),
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    maxWidth: "370px"
  }),
  menu: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    height: "25px",
    margin: "0"
  }),
  thumbsdown: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    transform: "scale(-1, -1);"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/SectionFooter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionFooter: () => (/* binding */ SectionFooter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");




function SectionFooter({ children }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.sectionFooter, children: children && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children }) });
}
const getStyles = (theme) => ({
  sectionFooter: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: theme.spacing(2)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/SectionSubheader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionSubheader: () => (/* binding */ SectionSubheader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _DataSourcesInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/DataSourcesInfo.tsx");





function SectionSubheader({
  children,
  datasources
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
    children,
    datasources && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DataSourcesInfo__WEBPACK_IMPORTED_MODULE_3__.DataSourcesInfo, { datasources })
  ] });
}
const getStyles = (theme) => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/grafana/Active.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getActiveGrafanaAlertsScene: () => (/* binding */ getActiveGrafanaAlertsScene)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/thresholds.ts");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getActiveGrafanaAlertsScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules{state="active", id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules{state="active"})`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        instant: true,
        expr
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.PanelBuilders.stat().setTitle(panelTitle).setDescription("The number of currently active alert rules").setData(query).setThresholds({
      mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ThresholdsMode.Absolute,
      steps: [
        {
          color: "green",
          value: 0
        },
        {
          color: "green",
          value: 80
        }
      ]
    }).setNoValue("0").setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/grafana/AlertsByStateScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGrafanaInstancesByStateScene: () => (/* binding */ getGrafanaInstancesByStateScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getGrafanaInstancesByStateScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by(state) (grafanacloud_grafana_instance_alerting_alerts{id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : "sum by (state) (grafanacloud_grafana_instance_alerting_alerts)";
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "{{state}}"
      }
    ]
  });
  const transformation = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneDataTransformer({
    $data: query,
    transformations: [
      {
        id: "renameByRegex",
        options: {
          regex: "alerting",
          renamePattern: "firing"
        }
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    height: "400px",
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("A breakdown of all of your alert rule instances based on state").setData(transformation).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setOverrides(
      (b) => b.matchFieldsWithName("firing").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("firing")).matchFieldsWithName("normal").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("normal")).matchFieldsWithName("pending").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("pending")).matchFieldsWithName("recovering").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("recovering")).matchFieldsWithName("error").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("error")).matchFieldsWithName("nodata").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("nodata"))
    ).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/grafana/EvalSuccessVsFailuresScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGrafanaEvalSuccessVsFailuresScene: () => (/* binding */ getGrafanaEvalSuccessVsFailuresScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getGrafanaEvalSuccessVsFailuresScene(datasource, panelTitle) {
  const exprA = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum(grafanacloud_grafana_instance_alerting_rule_evaluations_total:rate5m{id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"}) - sum(grafanacloud_grafana_instance_alerting_rule_evaluation_failures_total:rate5m{id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum(grafanacloud_grafana_instance_alerting_rule_evaluations_total:rate5m) - sum(grafanacloud_grafana_instance_alerting_rule_evaluation_failures_total:rate5m)`;
  const exprB = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum(grafanacloud_grafana_instance_alerting_rule_evaluation_failures_total:rate5m{id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum(grafanacloud_grafana_instance_alerting_rule_evaluation_failures_total:rate5m)`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr: exprA,
        range: true,
        legendFormat: "success"
      },
      {
        refId: "B",
        expr: exprB,
        range: true,
        legendFormat: "failed"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("The number of successful and failed alert rule evaluations").setData(query).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOverrides(
      (b) => b.matchFieldsWithName("success").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("success")).matchFieldsWithName("failed").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("failed"))
    ).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/grafana/InstanceStatusScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInstanceStatByStatusScene: () => (/* binding */ getInstanceStatByStatusScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");




function getInstanceStatByStatusScene(datasource, panelTitle, panelDescription, status) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_1__.INSTANCE_ID ? `sum by (state) (grafanacloud_grafana_instance_alerting_alerts{state="${status}", id="${_home_Insights__WEBPACK_IMPORTED_MODULE_1__.INSTANCE_ID}"})` : `sum by (state) (grafanacloud_grafana_instance_alerting_alerts{state="${status}"})`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        instant: true,
        expr,
        legendFormat: "{{state}}"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    height: "100%",
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.stat().setTitle(panelTitle).setDescription(panelDescription).setData(query).setOverrides((b) => b.matchFieldsWithName(status).overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_1__.overrideToFixedColor)(status))).setNoValue("0").setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_2__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/grafana/MissedIterationsScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGrafanaMissedIterationsScene: () => (/* binding */ getGrafanaMissedIterationsScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getGrafanaMissedIterationsScene(datasource, panelTitle) {
  const expr = `sum by(rule_title) (grafanacloud_grafana_instance_alerting_schedule_rule_evaluations_missed_total:rate5m{id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "{{rule_title}}"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("The number of missed iterations per alert rule").setData(query).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/grafana/MostFiredInstancesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuleLink: () => (/* binding */ RuleLink),
/* harmony export */   getMostFiredInstancesScene: () => (/* binding */ getMostFiredInstancesScene)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");









const RULE_UID_FIELD_NAME = "ruleUID";
const ALERT_NAME_FIELD_NAME = "labels_alertname";
const VALUE_FIELD_NAME = "Value #A";
function getMostFiredInstancesScene(datasource, panelTitle) {
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr: `topk(10, sum by(${ALERT_NAME_FIELD_NAME}, ${RULE_UID_FIELD_NAME}) (count_over_time({from="state-history"} | json | current = \`Alerting\` [1w])))`,
        instant: true
      }
    ]
  });
  const createRuleLink = (field) => {
    return {
      ...field,
      config: {
        custom: {
          cellOptions: {
            type: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.TableCellDisplayMode.Custom,
            cellComponent: RuleLink
          }
        }
      }
    };
  };
  const ruleLinkTransformation = () => (source) => {
    return source.pipe(
      (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
        return data.map((frame) => {
          return {
            ...frame,
            fields: frame.fields.map((field) => {
              if (field.name === ALERT_NAME_FIELD_NAME) {
                return createRuleLink(field);
              }
              return field;
            })
          };
        });
      })
    );
  };
  const transformation = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.SceneDataTransformer({
    $data: query,
    transformations: [
      ruleLinkTransformation,
      {
        id: "sortBy",
        options: {
          fields: {},
          sort: [
            {
              field: VALUE_FIELD_NAME,
              desc: true
            }
          ]
        }
      },
      {
        id: "organize",
        options: {
          excludeByName: {
            Time: true,
            [RULE_UID_FIELD_NAME]: false
          },
          indexByName: {
            [ALERT_NAME_FIELD_NAME]: 0,
            [RULE_UID_FIELD_NAME]: 1,
            [VALUE_FIELD_NAME]: 2
          },
          renameByName: {
            [ALERT_NAME_FIELD_NAME]: "Alert rule name",
            [VALUE_FIELD_NAME]: "Number of fires"
          }
        }
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_5__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.PanelBuilders.table().setTitle(panelTitle).setDescription("The alert rule instances that have fired the most").setData(transformation).setNoValue("No new alerts fired last week").setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_7__.InsightsMenuButton({ panel: panelTitle })]).setOverrides(
      (builder) => (
        // Hide the rule UID field, if we omit it in a transformation the custom cell renderer will not work
        builder.matchFieldsWithName(RULE_UID_FIELD_NAME).overrideCustomFieldConfig("hideFrom", { viz: true, legend: false, tooltip: false })
      )
    ).build()
  });
}
function RuleLink({ value, frame, rowIndex }) {
  const ruleUIDs = frame.fields.find((field) => field.name === RULE_UID_FIELD_NAME);
  const ruleUID = ruleUIDs?.values[rowIndex];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TextLink, { color: "primary", external: true, href: (0,_utils_url__WEBPACK_IMPORTED_MODULE_6__.createRelativeUrl)(`/alerting/grafana/${ruleUID}/view`), inline: false, children: String(value) });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/grafana/Paused.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPausedGrafanaAlertsScene: () => (/* binding */ getPausedGrafanaAlertsScene)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/thresholds.ts");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getPausedGrafanaAlertsScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules{state="paused", id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules{state="paused"})`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        instant: true,
        expr
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.PanelBuilders.stat().setTitle(panelTitle).setDescription("The number of current paused alert rules").setData(query).setThresholds({
      mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ThresholdsMode.Absolute,
      steps: [
        {
          color: "yellow",
          value: 0
        },
        {
          color: "red",
          value: 80
        }
      ]
    }).setNoValue("0").setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/grafana/RulesByEvaluation.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGrafanaRulesByEvaluationScene: () => (/* binding */ getGrafanaRulesByEvaluationScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getGrafanaRulesByEvaluationScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules{id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules)`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "{{state}} evaluation"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("See how many of your alert rules are paused or active").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setOverrides(
      (b) => b.matchFieldsWithName("active evaluation").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("active evaluation"))
    ).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/grafana/RulesByEvaluationPercentage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGrafanaRulesByEvaluationPercentageScene: () => (/* binding */ getGrafanaRulesByEvaluationPercentageScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getGrafanaRulesByEvaluationPercentageScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules{id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"}) / ignoring(state) group_left sum(grafanacloud_grafana_instance_alerting_rule_group_rules{id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules) / ignoring(state) group_left sum(grafanacloud_grafana_instance_alerting_rule_group_rules)`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "{{state}} evaluation"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("See what percentage of your alert rules are paused or active").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setCustomFieldConfig("fillOpacity", 45).setUnit("percentunit").setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setMax(1).setOverrides(
      (b) => b.matchFieldsWithName("active evaluation").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("active evaluation"))
    ).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/grafana/alertmanager/AlertsByState.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAlertsByStateScene: () => (/* binding */ getAlertsByStateScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getAlertsByStateScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by (state) (grafanacloud_grafana_instance_alerting_alertmanager_alerts{id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum by (state) (grafanacloud_grafana_instance_alerting_alertmanager_alerts)`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "{{state}}"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("A breakdown of all of your firing alert rule instances based on state").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setOverrides((b) => b.matchFieldsWithName("active").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("active"))).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/grafana/alertmanager/SilencesByStateScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGrafanaAlertmanagerSilencesScene: () => (/* binding */ getGrafanaAlertmanagerSilencesScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getGrafanaAlertmanagerSilencesScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by (state) (grafanacloud_grafana_instance_alerting_silences{id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum by (state) (grafanacloud_grafana_instance_alerting_silences)`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "{{state}}"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("The number of silences by state").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/AlertsByState.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAlertsByStateScene: () => (/* binding */ getAlertsByStateScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getAlertsByStateScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by (state) (grafanacloud_instance_alertmanager_alerts{stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum by (state) (grafanacloud_instance_alertmanager_alerts)`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "{{state}}"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("A breakdown of all of your firing alert rule instances based on state").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setOverrides((b) => b.matchFieldsWithName("active").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("active"))).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/InvalidConfig.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInvalidConfigScene: () => (/* binding */ getInvalidConfigScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getInvalidConfigScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by (cluster)(grafanacloud_instance_alertmanager_invalid_config{stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum by (cluster)(grafanacloud_instance_alertmanager_invalid_config)`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "{{cluster}}"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.stat().setTitle(panelTitle).setDescription("The current state of your alertmanager configuration").setData(query).setUnit("bool_yes_no").setOption("graphMode", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.BigValueGraphMode.None).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/Notifications.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNotificationsScene: () => (/* binding */ getNotificationsScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getNotificationsScene(datasource, panelTitle) {
  const exprA = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by(cluster)(grafanacloud_instance_alertmanager_notifications_per_second{stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"}) - sum by (cluster)(grafanacloud_instance_alertmanager_notifications_failed_per_second{stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum by(cluster)(grafanacloud_instance_alertmanager_notifications_per_second) - sum by (cluster)(grafanacloud_instance_alertmanager_notifications_failed_per_second)`;
  const exprB = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by(cluster)(grafanacloud_instance_alertmanager_notifications_failed_per_second{stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum by(cluster)(grafanacloud_instance_alertmanager_notifications_failed_per_second)`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr: exprA,
        range: true,
        legendFormat: "success"
      },
      {
        refId: "B",
        expr: exprB,
        range: true,
        legendFormat: "failed"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("The number of successful and failed notifications").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setOverrides(
      (b) => b.matchFieldsWithName("success").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("success")).matchFieldsWithName("failed").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("failed"))
    ).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/Silences.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSilencesScene: () => (/* binding */ getSilencesScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getSilencesScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum by (state) (grafanacloud_instance_alertmanager_silences{stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum by (state) (grafanacloud_instance_alertmanager_silences)`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "{{state}}"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("The number of silences by state").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/perGroup/RuleGroupEvaluationDurationIntervalRatioScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRuleGroupEvaluationDurationIntervalRatioScene: () => (/* binding */ getRuleGroupEvaluationDurationIntervalRatioScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/raw/dashboard/x/dashboard_types.gen.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getRuleGroupEvaluationDurationIntervalRatioScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_3__.INSTANCE_ID ? `grafanacloud_instance_rule_group_last_duration_seconds{rule_group="$rule_group", stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_3__.INSTANCE_ID}"} / grafanacloud_instance_rule_group_interval_seconds{rule_group="$rule_group", stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_3__.INSTANCE_ID}"}` : `grafanacloud_instance_rule_group_last_duration_seconds{rule_group="$rule_group"} / grafanacloud_instance_rule_group_interval_seconds{rule_group="$rule_group"}`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "duration / interval"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_3__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("The percentage of interval time spent evaluating").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.TooltipDisplayMode.Multi }).setOption("legend", { showLegend: false }).setUnit("percentunit").setThresholds({
      mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.ThresholdsMode.Percentage,
      steps: [
        {
          color: "green",
          value: 0
        },
        {
          color: "red",
          value: 80
        },
        {
          color: "yellow",
          value: 60
        }
      ]
    }).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_4__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/perGroup/RuleGroupEvaluationDurationScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRuleGroupEvaluationDurationScene: () => (/* binding */ getRuleGroupEvaluationDurationScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getRuleGroupEvaluationDurationScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `grafanacloud_instance_rule_group_last_duration_seconds{rule_group="$rule_group", stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"}` : `grafanacloud_instance_rule_group_last_duration_seconds{rule_group="$rule_group"}`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "{{rule_group}}"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("How long it took to evaluate the rule group").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setUnit("s").setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setOption("legend", { showLegend: false }).setOverrides(
      (b) => b.matchFieldsByQuery("A").overrideColor({
        mode: "fixed",
        fixedColor: "blue"
      })
    ).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/perGroup/RuleGroupEvaluationsScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRuleGroupEvaluationsScene: () => (/* binding */ getRuleGroupEvaluationsScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getRuleGroupEvaluationsScene(datasource, panelTitle) {
  const exprA = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `grafanacloud_instance_rule_evaluations_total:rate5m{rule_group="$rule_group", stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"} - grafanacloud_instance_rule_evaluation_failures_total:rate5m{rule_group=~"$rule_group", stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"}` : `grafanacloud_instance_rule_evaluations_total:rate5m{rule_group="$rule_group"} - grafanacloud_instance_rule_evaluation_failures_total:rate5m{rule_group=~"$rule_group"}`;
  const exprB = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `grafanacloud_instance_rule_evaluation_failures_total:rate5m{rule_group=~"$rule_group", stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"}` : `grafanacloud_instance_rule_evaluation_failures_total:rate5m{rule_group=~"$rule_group"}`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr: exprA,
        range: true,
        legendFormat: "success"
      },
      {
        refId: "B",
        expr: exprB,
        range: true,
        legendFormat: "failed"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("The number of successful and failed evaluations for the rule group").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setOverrides(
      (b) => b.matchFieldsWithName("success").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("success")).matchFieldsWithName("failed").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("failed"))
    ).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/perGroup/RuleGroupIntervalScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRuleGroupIntervalScene: () => (/* binding */ getRuleGroupIntervalScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getRuleGroupIntervalScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `grafanacloud_instance_rule_group_interval_seconds{rule_group="$rule_group", stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"}` : `grafanacloud_instance_rule_group_interval_seconds{rule_group="$rule_group"}`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "interval"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.stat().setTitle(panelTitle).setDescription("The current and historical rule group evaluation interval").setData(query).setUnit("s").setOption("graphMode", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.BigValueGraphMode.Area).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/perGroup/RulesPerGroupScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRulesPerGroupScene: () => (/* binding */ getRulesPerGroupScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getRulesPerGroupScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum(grafanacloud_instance_rule_group_rules{rule_group="$rule_group", stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum(grafanacloud_instance_rule_group_rules{rule_group="$rule_group"})`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "number of rules"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.stat().setTitle(panelTitle).setDescription("The current and historical number of alert rules in the rule group").setData(query).setUnit("none").setOption("graphMode", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.BigValueGraphMode.Area).setOverrides(
      (b) => b.matchFieldsByQuery("A").overrideColor({
        mode: "fixed",
        fixedColor: "blue"
      })
    ).setNoValue("0").setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/rules/EvalSuccessVsFailuresScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEvalSuccessVsFailuresScene: () => (/* binding */ getEvalSuccessVsFailuresScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getEvalSuccessVsFailuresScene(datasource, panelTitle) {
  const exprA = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum(grafanacloud_instance_rule_evaluations_total:rate5m{stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"}) - sum(grafanacloud_instance_rule_evaluation_failures_total:rate5m{stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum(grafanacloud_instance_rule_evaluations_total:rate5m) - sum(grafanacloud_instance_rule_evaluation_failures_total:rate5m)`;
  const exprB = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum(grafanacloud_instance_rule_evaluation_failures_total:rate5m{stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum(grafanacloud_instance_rule_evaluation_failures_total:rate5m)`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr: exprA,
        range: true,
        legendFormat: "success"
      },
      {
        refId: "B",
        expr: exprB,
        range: true,
        legendFormat: "failed"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("The number of successful and failed alert rule evaluations").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setOverrides((b) => b.matchFieldsWithName("failed").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("failed"))).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/rules/Firing.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFiringCloudAlertsScene: () => (/* binding */ getFiringCloudAlertsScene)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/thresholds.ts");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getFiringCloudAlertsScene(datasource, panelTitle) {
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        instant: true,
        expr: 'sum by (alertstate) (ALERTS{alertstate="firing"})'
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.PanelBuilders.stat().setTitle(panelTitle).setDescription("The number of currently firing alert rule instances").setData(query).setThresholds({
      mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ThresholdsMode.Absolute,
      steps: [
        {
          color: "red",
          value: 0
        },
        {
          color: "red",
          value: 80
        }
      ]
    }).setNoValue("0").setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/rules/InstancesByState.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInstancesByStateScene: () => (/* binding */ getInstancesByStateScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getInstancesByStateScene(datasource, panelTitle) {
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr: "sum by (alertstate) (ALERTS)",
        range: true,
        legendFormat: "{{state}}"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("The number of firing and pending alert rule instances").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setOverrides((b) => b.matchFieldsWithName("firing").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("firing"))).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/rules/InstancesPercentageByState.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInstancesPercentageByStateScene: () => (/* binding */ getInstancesPercentageByStateScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getInstancesPercentageByStateScene(datasource, panelTitle) {
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr: "sum by (alertstate) (ALERTS) / ignoring(alertstate) group_left sum(ALERTS)",
        range: true,
        legendFormat: "{{alertstate}}"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("See what percentage of your alert rules are firing versus pending").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setCustomFieldConfig("fillOpacity", 45).setUnit("percentunit").setMax(1).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setOverrides((b) => b.matchFieldsWithName("firing").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("firing"))).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/rules/MissedIterationsScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMissedIterationsScene: () => (/* binding */ getMissedIterationsScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getMissedIterationsScene(datasource, panelTitle) {
  const expr = _home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID ? `sum(grafanacloud_instance_rule_group_iterations_missed_total:rate5m{stack_id="${_home_Insights__WEBPACK_IMPORTED_MODULE_2__.INSTANCE_ID}"})` : `sum(grafanacloud_instance_rule_group_iterations_missed_total:rate5m)`;
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr,
        range: true,
        legendFormat: "missed"
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.timeseries().setTitle(panelTitle).setDescription("The number of evaluations missed").setData(query).setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.GraphDrawStyle.Line).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.TooltipDisplayMode.Multi }).setOption("legend", { showLegend: false }).setOverrides((b) => b.matchFieldsWithName("missed").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_2__.overrideToFixedColor)("missed"))).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/rules/MostFiredRules.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMostFiredRulesScene: () => (/* binding */ getMostFiredRulesScene)
/* harmony export */ });
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");




function getMostFiredRulesScene(datasource, panelTitle) {
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        expr: 'topk(10, sum by(alertname) (ALERTS{alertstate="firing"}))',
        instant: true,
        range: false,
        format: "table"
      }
    ]
  });
  const transformation = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneDataTransformer({
    $data: query,
    transformations: [
      {
        id: "organize",
        options: {
          excludeByName: {
            Time: true
          },
          indexByName: {},
          renameByName: {
            Value: "Number of fires",
            alertname: "Alert Rule Name"
          }
        }
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_1__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_0__.PanelBuilders.table().setTitle(panelTitle).setDescription("The alert rules that have fired the most").setData(transformation).setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_2__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/insights/mimir/rules/Pending.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPendingCloudAlertsScene: () => (/* binding */ getPendingCloudAlertsScene)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/thresholds.ts");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/insights/InsightsMenuButton.tsx");





function getPendingCloudAlertsScene(datasource, panelTitle) {
  const query = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.SceneQueryRunner({
    datasource,
    queries: [
      {
        refId: "A",
        instant: true,
        expr: 'sum by (alertstate) (ALERTS{alertstate="pending"})'
      }
    ]
  });
  return new _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.SceneFlexItem({
    ..._home_Insights__WEBPACK_IMPORTED_MODULE_2__.PANEL_STYLES,
    body: _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.PanelBuilders.stat().setTitle(panelTitle).setDescription("The number of currently pending alert rule instances").setData(query).setThresholds({
      mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ThresholdsMode.Absolute,
      steps: [
        {
          color: "yellow",
          value: 0
        },
        {
          color: "red",
          value: 80
        }
      ]
    }).setNoValue("0").setHeaderActions([new _InsightsMenuButton__WEBPACK_IMPORTED_MODULE_3__.InsightsMenuButton({ panel: panelTitle })]).build()
  });
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

/***/ "./public/app/features/alerting/unified/triage/Triage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TriagePage: () => (/* binding */ TriagePage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/ErrorBoundary/ErrorBoundary.tsx");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _scene_TriageScene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/triage/scene/TriageScene.tsx");







const TriagePage = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_4__.AlertingPageWrapper,
    {
      navId: "alert-alerts",
      subTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "alerting.pages.triage.subtitle",
        "See what is currently alerting and explore historical data to investigate current or past issues."
      ),
      pageNav: {
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.pages.triage.title", "Alerts")
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.UrlSyncContextProvider, { scene: _scene_TriageScene__WEBPACK_IMPORTED_MODULE_5__.triageScene, updateUrlOnInit: true, createBrowserHistorySteps: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_scene_TriageScene__WEBPACK_IMPORTED_MODULE_5__.TriageScene, {}, _scene_TriageScene__WEBPACK_IMPORTED_MODULE_5__.triageScene.state.key) })
    }
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.withErrorBoundary)(TriagePage));


/***/ }),

/***/ "./public/app/features/alerting/unified/triage/Workbench.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Workbench: () => (/* binding */ Workbench),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-use/esm/useMeasure.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/ScrollContainer/ScrollContainer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Splitter/useSplitter.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var _rule_list_LoadMoreHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/LoadMoreHelper.tsx");
/* harmony import */ var _WorkbenchContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/triage/WorkbenchContext.tsx");
/* harmony import */ var _rows_AlertRuleRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/triage/rows/AlertRuleRow.tsx");
/* harmony import */ var _rows_FolderGroupRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/triage/rows/FolderGroupRow.tsx");
/* harmony import */ var _rows_GroupRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/triage/rows/GroupRow.tsx");
/* harmony import */ var _rows_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/triage/rows/utils.ts");
/* harmony import */ var _scene_AlertRuleInstances__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/triage/scene/AlertRuleInstances.tsx");
/* harmony import */ var _scene_SummaryChart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/triage/scene/SummaryChart.tsx");
/* harmony import */ var _scene_SummaryStats__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/triage/scene/SummaryStats.tsx");

















const initialSize = 1 / 3;
function renderWorkbenchRow(row, leftColumnWidth, domain, key, enableFolderMeta, depth = 0) {
  if (row.type === "alertRule") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _rows_AlertRuleRow__WEBPACK_IMPORTED_MODULE_11__.AlertRuleRow,
      {
        row,
        leftColumnWidth,
        rowKey: key,
        depth,
        enableFolderMeta
      },
      key
    );
  } else {
    const children = row.rows.map(
      (childRow, childIndex) => renderWorkbenchRow(
        childRow,
        leftColumnWidth,
        domain,
        `${key}-${(0,_rows_utils__WEBPACK_IMPORTED_MODULE_14__.generateRowKey)(childRow, childIndex)}`,
        enableFolderMeta,
        depth + 1
      )
    );
    if (row.metadata.label === "grafana_folder") {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rows_FolderGroupRow__WEBPACK_IMPORTED_MODULE_12__.FolderGroupRow, { row, leftColumnWidth, rowKey: key, depth, children }, key);
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rows_GroupRow__WEBPACK_IMPORTED_MODULE_13__.GroupRow, { row, leftColumnWidth, rowKey: key, depth, children }, key);
  }
}
function Workbench({ domain, data, queryRunner, groupBy }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const isLoading = !queryRunner.isDataReadyToDisplay();
  const [pageIndex, setPageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
  const enableFolderMeta = !groupBy?.includes("grafana_folder");
  const splitter = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useSplitter)({
    direction: "row",
    // if Grafana Alertmanager, split 50/50, otherwise 100/0 because there is no payload editor
    initialSize,
    dragPosition: "middle"
  });
  const [leftColumnRef, leftColumnRect] = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const leftColumnWidth = leftColumnRect.width;
  const [rightColumnRef, rightColumnRect] = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const rightColumnWidth = rightColumnRect.width;
  const itemsToRender = pageIndex * app_core_constants__WEBPACK_IMPORTED_MODULE_8__.DEFAULT_PER_PAGE_PAGINATION;
  const dataSlice = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.take)(data, itemsToRender);
  const hasMore = data.length > itemsToRender;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { position: "relative", display: "flex", flexGrow: 1, width: "100%", height: "100%" }, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { ...splitter.containerProps, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ...splitter.primaryProps, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: leftColumnRef, className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.flexFull, styles.minColumnWidth) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ...splitter.splitterProps }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ...splitter.secondaryProps, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: rightColumnRef, className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.flexFull, styles.minColumnWidth) }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { "data-testid": "groups-container", className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(splitter.containerProps.className, styles.groupsContainer), children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.groupItemWrapper(leftColumnWidth), styles.summaryContainer), children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_scene_SummaryStats__WEBPACK_IMPORTED_MODULE_17__.SummaryStatsReact, {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_scene_SummaryChart__WEBPACK_IMPORTED_MODULE_16__.SummaryChartReact, {})
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.virtualizedContainer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _WorkbenchContext__WEBPACK_IMPORTED_MODULE_10__.WorkbenchProvider,
        {
          leftColumnWidth,
          rightColumnWidth,
          domain,
          queryRunner,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ScrollContainer, { height: "100%", width: "100%", scrollbarWidth: "none", showScrollIndicators: true, children: [
            isLoading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_scene_AlertRuleInstances__WEBPACK_IMPORTED_MODULE_15__.GenericRowSkeleton, { width: leftColumnWidth, depth: 0 }, "skeleton-1"),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_scene_AlertRuleInstances__WEBPACK_IMPORTED_MODULE_15__.GenericRowSkeleton, { width: leftColumnWidth, depth: 0 }, "skeleton-2"),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_scene_AlertRuleInstances__WEBPACK_IMPORTED_MODULE_15__.GenericRowSkeleton, { width: leftColumnWidth, depth: 0 }, "skeleton-3")
            ] }) : dataSlice.map((row, index) => {
              const rowKey = (0,_rows_utils__WEBPACK_IMPORTED_MODULE_14__.generateRowKey)(row, index);
              return renderWorkbenchRow(row, leftColumnWidth, domain, rowKey, enableFolderMeta);
            }),
            hasMore && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rule_list_LoadMoreHelper__WEBPACK_IMPORTED_MODULE_9__["default"], { handleLoad: () => setPageIndex((prevIndex) => prevIndex + 1) })
          ] })
        }
      ) })
    ] })
  ] });
}
const getStyles = (theme) => {
  const summaryHeight = 200;
  return {
    groupsContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      position: "absolute",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }),
    groupItemWrapper: (width) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "grid",
      gridTemplateColumns: `${width}px auto`,
      gap: theme.spacing(2)
    }),
    virtualizedContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flex: 1,
      wordBreak: "break-all",
      // make very long rule names render higher rows
      overflow: "hidden"
      // Let AutoSizer handle the overflow
    }),
    summaryContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      gridTemplateRows: summaryHeight,
      marginBottom: theme.spacing(2)
    }),
    headerContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      top: summaryHeight
    }),
    flexFull: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flex: 1
    }),
    minColumnWidth: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      minWidth: 300
    })
  };
};


/***/ }),

/***/ "./public/app/features/alerting/unified/triage/WorkbenchContext.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkbenchProvider: () => (/* binding */ WorkbenchProvider),
/* harmony export */   useWorkbenchContext: () => (/* binding */ useWorkbenchContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const WorkbenchContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(void 0);
function useWorkbenchContext() {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(WorkbenchContext);
  if (!context) {
    throw new Error("useWorkbenchContext must be used within a WorkbenchProvider");
  }
  return context;
}
function WorkbenchProvider({
  leftColumnWidth,
  rightColumnWidth,
  domain,
  queryRunner,
  children
}) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WorkbenchContext.Provider, { value: { leftColumnWidth, rightColumnWidth, domain, queryRunner }, children });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/triage/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DATASOURCE_UID: () => (/* binding */ DATASOURCE_UID),
/* harmony export */   DEFAULT_FIELDS: () => (/* binding */ DEFAULT_FIELDS),
/* harmony export */   METRIC_NAME: () => (/* binding */ METRIC_NAME),
/* harmony export */   VARIABLES: () => (/* binding */ VARIABLES)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");


const VARIABLES = {
  groupBy: "groupBy",
  filters: "filters"
};
const DATASOURCE_UID = _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.unifiedAlerting.stateHistory?.prometheusTargetDatasourceUID;
const METRIC_NAME = _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.unifiedAlerting.stateHistory?.prometheusMetricName ?? "GRAFANA_ALERTS";
const DEFAULT_FIELDS = ["alertname", "grafana_folder", "grafana_rule_uid", "alertstate"];


/***/ }),

/***/ "./public/app/features/alerting/unified/triage/instance-details/InstanceDetailsDrawer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstanceDetailsDrawer: () => (/* binding */ InstanceDetailsDrawer),
/* harmony export */   InstanceLocation: () => (/* binding */ InstanceLocation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-use/esm/useMeasure.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_scenes_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingBar/LoadingBar.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Drawer/Drawer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");
/* harmony import */ var _api_stateHistoryApi__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/api/stateHistoryApi.ts");
/* harmony import */ var _components_rule_editor_util__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/util.ts");
/* harmony import */ var _components_rules_central_state_history_EventListSceneObject__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/central-state-history/EventListSceneObject.tsx");
/* harmony import */ var _components_rules_state_history_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/state-history/common.ts");
/* harmony import */ var _rule_editor_formProcessing__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/rule-editor/formProcessing.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _WorkbenchContext__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/triage/WorkbenchContext.tsx");
/* harmony import */ var _InstanceDetailsDrawerTitle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/triage/instance-details/InstanceDetailsDrawerTitle.tsx");
/* harmony import */ var _QueryVisualization__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/alerting/unified/triage/instance-details/QueryVisualization.tsx");
/* harmony import */ var _stateHistoryUtils__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/alerting/unified/triage/instance-details/stateHistoryUtils.ts");





















const { useGetAlertRuleQuery } = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_17__.alertRuleApi;
const { useGetRuleHistoryQuery } = _api_stateHistoryApi__WEBPACK_IMPORTED_MODULE_18__.stateHistoryApi;
function calculateDrawerWidth(rightColumnWidth) {
  const calculatedWidth = rightColumnWidth + 32;
  return Math.min(calculatedWidth, 1400);
}
function InstanceDetailsDrawer({ ruleUID, instanceLabels, onClose }) {
  const [ref, { width: loadingBarWidth }] = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const [timeRange] = (0,_grafana_scenes_react__WEBPACK_IMPORTED_MODULE_7__.useTimeRange)();
  const { rightColumnWidth } = (0,_WorkbenchContext__WEBPACK_IMPORTED_MODULE_24__.useWorkbenchContext)();
  const drawerWidth = calculateDrawerWidth(rightColumnWidth);
  const { data: rule, isLoading: loading, error } = useGetAlertRuleQuery({ uid: ruleUID });
  const { dataQueries, thresholds } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    if (rule) {
      return extractQueryDetails(rule.grafana_alert);
    }
    return { dataQueries: [], thresholds: {} };
  }, [rule]);
  const {
    data: stateHistoryData,
    isFetching: stateHistoryFetching,
    isError: stateHistoryError
  } = useGetRuleHistoryQuery({
    ruleUid: ruleUID,
    labels: instanceLabels,
    from: timeRange.from.unix(),
    to: timeRange.to.unix()
  });
  const { historyRecords, annotations } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    const historyRecords2 = (0,_components_rules_state_history_common__WEBPACK_IMPORTED_MODULE_21__.historyDataFrameToLogRecords)(stateHistoryData);
    const annotations2 = (0,_stateHistoryUtils__WEBPACK_IMPORTED_MODULE_27__.convertStateHistoryToAnnotations)(historyRecords2);
    return { historyRecords: historyRecords2, annotations: annotations2 };
  }, [stateHistoryData]);
  if (error) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Drawer,
      {
        title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InstanceDetailsDrawerTitle__WEBPACK_IMPORTED_MODULE_25__.InstanceDetailsDrawerTitle, { instanceLabels }),
        onClose,
        width: drawerWidth,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ErrorContent, { error })
      }
    );
  }
  if (loading || !rule) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Drawer,
      {
        title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InstanceDetailsDrawerTitle__WEBPACK_IMPORTED_MODULE_25__.InstanceDetailsDrawerTitle, { instanceLabels }),
        onClose,
        width: drawerWidth,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.common.loading", "Loading...") })
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Drawer,
    {
      title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InstanceDetailsDrawerTitle__WEBPACK_IMPORTED_MODULE_25__.InstanceDetailsDrawerTitle, { instanceLabels, rule: rule.grafana_alert }),
      onClose,
      width: drawerWidth,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { direction: "column", gap: 3, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { justifyContent: "flex-end", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_scenes_react__WEBPACK_IMPORTED_MODULE_7__.TimeRangePicker, {}) }),
        dataQueries.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Box, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { direction: "column", gap: 2, children: dataQueries.map((query, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _QueryVisualization__WEBPACK_IMPORTED_MODULE_26__.QueryVisualization,
          {
            query,
            instanceLabels,
            thresholds,
            annotations
          },
          query.refId || `query-${index}`
        )) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Box, { ref, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Text, { variant: "h5", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.instance-details.state-history", "Recent State Changes") }),
          stateHistoryFetching && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.LoadingBar, { width: loadingBarWidth }),
          stateHistoryError && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Alert,
            {
              severity: "error",
              title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.instance-details.history-error", "Failed to load state history"),
              children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
                "alerting.instance-details.history-error-desc",
                "Unable to fetch state transition history for this instance."
              )
            }
          ),
          !stateHistoryFetching && !stateHistoryError && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { direction: "column", gap: 1, children: historyRecords.length > 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InstanceStateTransitions, { records: historyRecords }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Text, { color: "secondary", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.instance-details.no-history", "No recent state changes") }) })
        ] })
      ] })
    }
  );
}
function InstanceLocation({ folderTitle, groupName, ruleName }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { size: "xs", name: "folder" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { direction: "row", alignItems: "center", gap: 0.5, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Text, { variant: "bodySmall", children: folderTitle }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { size: "sm", name: "angle-right" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Text, { variant: "bodySmall", children: groupName }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { size: "sm", name: "angle-right" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Text, { variant: "bodySmall", children: ruleName })
    ] })
  ] });
}
function extractQueryDetails(rule) {
  const dataQueries = rule.data.filter((query) => (0,_rule_editor_formProcessing__WEBPACK_IMPORTED_MODULE_22__.isAlertQueryOfAlertData)(query));
  const allQueries = rule.data;
  const condition = rule.condition;
  const thresholds = (0,_components_rule_editor_util__WEBPACK_IMPORTED_MODULE_19__.getThresholdsForQueries)(allQueries, condition);
  return { dataQueries, thresholds };
}
const dateFormatter = new Intl.DateTimeFormat(void 0, {
  month: "short",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});
function formatTimestamp(timestamp) {
  return dateFormatter.format(new Date(timestamp));
}
function InstanceStateTransitions({ records }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.useStyles2)(stateTransitionStyles);
  const sortedRecords = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.orderBy)(records, (r) => r.timestamp, "desc");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.container, children: sortedRecords.map((record, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Text, { color: "secondary", variant: "bodySmall", children: formatTimestamp(record.timestamp) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rules_central_state_history_EventListSceneObject__WEBPACK_IMPORTED_MODULE_20__.EventState, { state: record.line.previous, showLabel: true, addFilter: () => {
    }, type: "from" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { name: "arrow-right", size: "sm" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rules_central_state_history_EventListSceneObject__WEBPACK_IMPORTED_MODULE_20__.EventState, { state: record.line.current, showLabel: true, addFilter: () => {
    }, type: "to" })
  ] }, `${record.timestamp}-${index}`)) });
}
const stateTransitionStyles = (theme) => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "grid",
    gridTemplateColumns: "max-content max-content max-content max-content",
    gap: theme.spacing(1, 2),
    alignItems: "center",
    padding: theme.spacing(1, 0)
  })
});
function ErrorContent({ error }) {
  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.isFetchError)(error) && error.status === 404) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Alert, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.triage.rule-not-found.title", "Rule not found"), severity: "error", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.triage.rule-not-found.description", "The requested rule could not be found.") });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Alert, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.triage.error-loading-rule", "Error loading rule"), severity: "error", children: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_23__.stringifyErrorLike)(error) });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/triage/instance-details/InstanceDetailsDrawerTitle.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstanceDetailsDrawerTitle: () => (/* binding */ InstanceDetailsDrawerTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-alerting/src/grafana/rules/components/labels/AlertLabels.tsx");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _hooks_useFolder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFolder.ts");
/* harmony import */ var _InstanceDetailsDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/triage/instance-details/InstanceDetailsDrawer.tsx");







function InstanceDetailsDrawerTitle({ instanceLabels, rule }) {
  const { folder } = (0,_hooks_useFolder__WEBPACK_IMPORTED_MODULE_6__.useFolder)(rule?.namespace_uid);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { variant: "h3", element: "h3", truncate: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.triage.instance-details-drawer.instance-details", children: "Instance details" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "row", gap: 2, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Box, { flex: 3, children: Object.keys(instanceLabels).length > 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_1__.AlertLabels, { labels: instanceLabels }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "secondary", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.triage.no-labels", "No labels") }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Box, { flex: 1 })
    ] }),
    folder && rule && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InstanceDetailsDrawer__WEBPACK_IMPORTED_MODULE_7__.InstanceLocation, { folderTitle: (0,_hooks_useFolder__WEBPACK_IMPORTED_MODULE_6__.stringifyFolder)(folder), groupName: rule.rule_group, ruleName: rule.title })
  ] });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/triage/instance-details/QueryVisualization.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryVisualization: () => (/* binding */ QueryVisualization)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_scenes_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");








function QueryVisualization({ query, instanceLabels, thresholds, annotations = [] }) {
  const [timeRange] = (0,_grafana_scenes_react__WEBPACK_IMPORTED_MODULE_4__.useTimeRange)();
  const visualizationQuery = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const model = { ...query.model, refId: query.refId };
    if ("instant" in model) {
      model.instant = false;
      model.range = true;
    }
    return model;
  }, [query.model, query.refId]);
  const baseDataProvider = (0,_grafana_scenes_react__WEBPACK_IMPORTED_MODULE_4__.useQueryRunner)({
    datasource: { uid: query.datasourceUid },
    queries: [visualizationQuery]
  });
  const { data } = baseDataProvider.useState();
  const filteredSeries = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!data?.series || Object.keys(instanceLabels).length === 0) {
      return data?.series || [];
    }
    return data.series.filter((frame) => frameMatchesInstanceLabels(frame, instanceLabels));
  }, [data?.series, instanceLabels]);
  const dataProvider = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneDataNode({
    data: {
      series: filteredSeries,
      state: data?.state || _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.NotStarted,
      timeRange,
      annotations
    }
  });
  const vizConfig = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const baseConfig = _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.VizConfigBuilders.timeseries().setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.GraphDrawStyle.Line).setCustomFieldConfig("showPoints", _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.VisibilityMode.Auto).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.TooltipDisplayMode.Multi }).setOption("legend", { showLegend: false, displayMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.LegendDisplayMode.Hidden });
    const queryThresholds = thresholds?.[query.refId];
    if (queryThresholds) {
      baseConfig.setThresholds(queryThresholds.config).setCustomFieldConfig("thresholdsStyle", { mode: queryThresholds.mode });
    }
    return baseConfig.build();
  }, [query.refId, thresholds]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Box, { height: 36, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_scenes_react__WEBPACK_IMPORTED_MODULE_4__.VizPanel,
    {
      title: query.refId,
      viz: vizConfig,
      dataProvider,
      displayMode: "transparent",
      collapsible: false
    }
  ) }, query.refId);
}
function frameMatchesInstanceLabels(frame, instanceLabels) {
  for (const field of frame.fields) {
    if (field.labels) {
      const allFieldLabelsMatch = Object.entries(field.labels).every(([key, value]) => instanceLabels[key] === value);
      if (allFieldLabelsMatch) {
        return true;
      }
    }
  }
  return false;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/triage/instance-details/stateHistoryUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertStateHistoryToAnnotations: () => (/* binding */ convertStateHistoryToAnnotations)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/dataframe/ArrayDataFrame.ts");


function getStateColor(state) {
  const stateStr = String(state).toLowerCase();
  if (stateStr.includes("normal")) {
    return "#73BF69";
  } else if (stateStr.includes("alerting")) {
    return "#F2495C";
  } else if (stateStr.includes("pending")) {
    return "#FF9830";
  } else if (stateStr.includes("recovering")) {
    return "#FF9830";
  } else if (stateStr.includes("nodata")) {
    return "#5794F2";
  }
  return "#8e8e8e";
}
function convertStateHistoryToAnnotations(logRecords) {
  if (!logRecords || logRecords.length === 0) {
    return [];
  }
  const annotationEvents = logRecords.map((record) => {
    const { timestamp, line } = record;
    return {
      time: timestamp,
      title: `${line.previous} \u2192 ${line.current}`,
      text: `State changed from ${line.previous} to ${line.current}`,
      tags: ["state-transition"],
      color: getStateColor(line.current)
    };
  });
  if (annotationEvents.length === 0) {
    return [];
  }
  const annotationFrame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.arrayToDataFrame)(annotationEvents);
  annotationFrame.meta = { dataTopic: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataTopic.Annotations };
  return [annotationFrame];
}


/***/ }),

/***/ "./public/app/features/alerting/unified/triage/rows/AlertRuleRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertRuleRow: () => (/* binding */ AlertRuleRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _components_MetaText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/MetaText.tsx");
/* harmony import */ var _rule_details_RuleDetailsDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/triage/rule-details/RuleDetailsDrawer.tsx");
/* harmony import */ var _scene_AlertRuleInstances__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/triage/scene/AlertRuleInstances.tsx");
/* harmony import */ var _scene_AlertRuleSummary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/triage/scene/AlertRuleSummary.tsx");
/* harmony import */ var _GenericRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/triage/rows/GenericRow.tsx");










const AlertRuleRow = ({
  row,
  leftColumnWidth,
  rowKey,
  depth = 0,
  enableFolderMeta = true
}) => {
  const { ruleUID, folder, title } = row.metadata;
  const [isDrawerOpen, setIsDrawerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _GenericRow__WEBPACK_IMPORTED_MODULE_10__.GenericRow,
      {
        width: leftColumnWidth,
        title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "body", children: title }),
        actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton,
          {
            style: { transform: "rotate(180deg)" },
            name: "web-section-alt",
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.triage.open-rule-details", "Open rule details"),
            onClick: handleDrawerOpen
          }
        ),
        metadata: enableFolderMeta ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "row", gap: 0.5, alignItems: "center", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MetaText__WEBPACK_IMPORTED_MODULE_6__.MetaText, { icon: "folder" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "bodySmall", color: "secondary", children: folder })
        ] }) : void 0,
        content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_scene_AlertRuleSummary__WEBPACK_IMPORTED_MODULE_9__.AlertRuleSummary, { ruleUID }),
        depth,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_scene_AlertRuleInstances__WEBPACK_IMPORTED_MODULE_8__.AlertRuleInstances, { ruleUID, depth: depth + 1 })
      },
      rowKey
    ),
    isDrawerOpen && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rule_details_RuleDetailsDrawer__WEBPACK_IMPORTED_MODULE_7__.RuleDetailsDrawer, { ruleUID, onClose: handleDrawerClose })
  ] });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/triage/rows/FolderGroupRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FolderGroupRow: () => (/* binding */ FolderGroupRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _components_MetaText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/MetaText.tsx");
/* harmony import */ var _GenericRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/triage/rows/GenericRow.tsx");







const FolderGroupRow = ({ row, leftColumnWidth, rowKey, depth = 0, children }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _GenericRow__WEBPACK_IMPORTED_MODULE_7__.GenericRow,
    {
      width: leftColumnWidth,
      title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "row", gap: 0.5, alignItems: "center", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MetaText__WEBPACK_IMPORTED_MODULE_6__.MetaText, { icon: "folder" }),
        (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isString)(row.metadata.value) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "primary", children: row.metadata.value })
      ] }),
      isOpenByDefault: true,
      leftColumnClassName: styles.folderGroupRow,
      rightColumnClassName: styles.folderGroupRow,
      depth,
      children
    },
    rowKey
  );
};
const getStyles = (theme) => ({
  folderGroupRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    backgroundColor: theme.colors.background.secondary
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/triage/rows/GenericRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericRow: () => (/* binding */ GenericRow),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useToggle.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _components_Spacer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/Spacer.tsx");







const GenericRow = ({
  width,
  title,
  metadata,
  actions,
  content,
  isOpenByDefault = false,
  children,
  leftColumnClassName,
  rightColumnClassName,
  depth = 0
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  const [isOpen, handleToggle] = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(isOpenByDefault);
  const hasChildren = Boolean(children);
  const showChildContent = isOpen && hasChildren;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.groupItemWrapper(width), children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.leftColumn, styles.column, leftColumnClassName), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.columnContent(depth), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        LeftCell,
        {
          title,
          metadata,
          actions,
          isOpen,
          onToggle: hasChildren ? handleToggle : void 0
        }
      ) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { minWidth: "min-content", flexGrow: 1 }, className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.column, rightColumnClassName), children: content && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.columnContent(), children: content }) })
    ] }),
    showChildContent ? children : null
  ] });
};
const LeftCell = ({ title, metadata = null, actions = null, isOpen = true, onToggle }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "row", alignItems: "center", gap: 0.5, children: [
    onToggle && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.IconButton,
      {
        name: isOpen ? "angle-down" : "angle-right",
        onClick: () => onToggle(),
        className: styles.dropdownIcon,
        variant: "secondary",
        size: "md",
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.group-wrapper.toggle", "Toggle group")
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", alignItems: "flex-start", gap: 0, flex: 1, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "row", alignItems: "center", gap: 1, width: "100%", children: [
        title,
        actions && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Spacer__WEBPACK_IMPORTED_MODULE_7__.Spacer, {}),
        actions
      ] }),
      metadata
    ] })
  ] });
};
const getStyles = (theme) => {
  return {
    dropdownIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      alignSelf: "flex-start",
      marginTop: theme.spacing(0.5)
    }),
    column: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      position: "relative",
      flexBasis: 0,
      border: `1px solid ${theme.colors.border.medium}`
    }),
    leftColumn: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      overflow: "hidden"
    }),
    columnContent: (depth) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: 5,
      width: "100%",
      addingLeft: depth ? `calc(${theme.spacing(depth)} + 5px)` : 5
    }),
    groupItemWrapper: (width) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "grid",
      gridTemplateColumns: `${width}px auto`,
      gap: theme.spacing(2)
    })
  };
};


/***/ }),

/***/ "./public/app/features/alerting/unified/triage/rows/GroupRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupRow: () => (/* binding */ GroupRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-alerting/src/grafana/rules/components/labels/AlertLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/triage/types.ts");
/* harmony import */ var _GenericRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/triage/rows/GenericRow.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/triage/rows/utils.ts");








const GroupRow = ({ row, leftColumnWidth, rowKey, depth = 0, children }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const isEmptyValue = row.metadata.value === _types__WEBPACK_IMPORTED_MODULE_4__.EmptyLabelValue;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _GenericRow__WEBPACK_IMPORTED_MODULE_5__.GenericRow,
    {
      width: leftColumnWidth,
      title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_2__.AlertLabel,
        {
          size: "sm",
          labelKey: row.metadata.label,
          value: (0,_utils__WEBPACK_IMPORTED_MODULE_6__.formatLabelValue)(row.metadata.value),
          colorBy: "key"
        }
      ),
      isOpenByDefault: !isEmptyValue,
      leftColumnClassName: styles.groupRow,
      rightColumnClassName: styles.groupRow,
      depth,
      children
    },
    rowKey
  );
};
const getStyles = (theme) => ({
  groupRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    backgroundColor: theme.colors.background.secondary
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/triage/rows/InstanceRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstanceRow: () => (/* binding */ InstanceRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-alerting/src/grafana/rules/components/labels/AlertLabels.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_scenes_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _instance_details_InstanceDetailsDrawer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/triage/instance-details/InstanceDetailsDrawer.tsx");
/* harmony import */ var _GenericRow__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/triage/rows/GenericRow.tsx");















const chartConfig = _grafana_scenes__WEBPACK_IMPORTED_MODULE_7__.VizConfigBuilders.timeseries().setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.GraphDrawStyle.Bars).setCustomFieldConfig("barWidthFactor", 1).setCustomFieldConfig("barAlignment", _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.BarAlignment.After).setCustomFieldConfig("showPoints", _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.VisibilityMode.Never).setCustomFieldConfig("fillOpacity", 60).setCustomFieldConfig("lineWidth", 0).setCustomFieldConfig("stacking", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.StackingMode.None }).setCustomFieldConfig("axisPlacement", _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.AxisPlacement.Hidden).setCustomFieldConfig("axisGridShow", false).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.TooltipDisplayMode.Multi }).setOption("legend", {
  showLegend: false,
  displayMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_9__.LegendDisplayMode.Hidden
}).setMin(0).setMax(1).setOverrides(
  (builder) => builder.matchFieldsWithName("firing").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_13__.overrideToFixedColor)("firing")).matchFieldsWithName("pending").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_13__.overrideToFixedColor)("pending"))
).build();
function InstanceRow({
  instance,
  commonLabels,
  leftColumnWidth,
  timeRange,
  ruleUID,
  depth = 0
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useStyles2)(getStyles);
  const [isDrawerOpen, setIsDrawerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const dataProvider = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(
    () => new _grafana_scenes__WEBPACK_IMPORTED_MODULE_7__.SceneDataNode({
      data: {
        series: instance.series,
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.LoadingState.Done,
        timeRange
      }
    }),
    [instance, timeRange]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _GenericRow__WEBPACK_IMPORTED_MODULE_15__.GenericRow,
      {
        width: leftColumnWidth,
        title: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(instance.labels) ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.wrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Text, { color: "secondary", variant: "bodySmall", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.triage.no-labels", children: "No labels" }) }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_4__.AlertLabels,
          {
            labels: instance.labels,
            displayCommonLabels: true,
            labelSets: [instance.labels, commonLabels],
            size: "xs",
            commonLabelsMode: "tooltip"
          }
        ),
        actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.IconButton,
          {
            style: { transform: "rotate(180deg)" },
            name: "web-section-alt",
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.triage.open-in-sidebar", "Open in sidebar"),
            onClick: handleDrawerOpen
          }
        ),
        content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_scenes_react__WEBPACK_IMPORTED_MODULE_8__.VizPanel,
          {
            title: "",
            hoverHeader: true,
            viz: chartConfig,
            dataProvider,
            displayMode: "transparent"
          }
        ),
        depth
      }
    ),
    isDrawerOpen && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_instance_details_InstanceDetailsDrawer__WEBPACK_IMPORTED_MODULE_14__.InstanceDetailsDrawer, { ruleUID, instanceLabels: instance.labels, onClose: handleDrawerClose })
  ] });
}
const getStyles = (theme) => {
  return {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      minHeight: theme.spacing(2.5),
      display: "flex",
      alignItems: "center"
    })
  };
};


/***/ }),

/***/ "./public/app/features/alerting/unified/triage/rows/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLabelValue: () => (/* binding */ formatLabelValue),
/* harmony export */   generateRowKey: () => (/* binding */ generateRowKey)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/triage/types.ts");


function generateRowKey(row, fallbackIndex) {
  if (row.type === "alertRule") {
    return `alert-${row.metadata.ruleUID}`;
  } else {
    const groupedRow = row;
    return `group-${groupedRow.metadata.label}-${formatLabelValue(groupedRow.metadata.value)}`;
  }
}
const formatLabelValue = (value) => value === _types__WEBPACK_IMPORTED_MODULE_0__.EmptyLabelValue ? "<no value>" : value;


/***/ }),

/***/ "./public/app/features/alerting/unified/triage/rule-details/RuleDetailsDrawer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuleDetailsDrawer: () => (/* binding */ RuleDetailsDrawer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabsBar.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/Tab.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabContent.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Drawer/Drawer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _components_Spacer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/Spacer.tsx");
/* harmony import */ var _components_WithReturnButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/WithReturnButton.tsx");
/* harmony import */ var _components_rule_viewer_RuleViewer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/RuleViewer.tsx");
/* harmony import */ var _components_rule_viewer_tabs_Details__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/tabs/Details.tsx");
/* harmony import */ var _components_rule_viewer_tabs_Query__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/tabs/Query.tsx");
/* harmony import */ var _hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRule.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/utils/navigation.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");















var DrawerTab = /* @__PURE__ */ ((DrawerTab2) => {
  DrawerTab2["Query"] = "query";
  DrawerTab2["Details"] = "details";
  return DrawerTab2;
})(DrawerTab || {});
function RuleDetailsDrawer({ ruleUID, onClose }) {
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("query" /* Query */);
  const ruleIdentifier = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => ({
      uid: ruleUID,
      ruleSourceName: "grafana"
    }),
    [ruleUID]
  );
  const {
    loading,
    error,
    result: rule
  } = (0,_hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_18__.useCombinedRule)({
    ruleIdentifier
  });
  if (error) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Drawer, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.triage.rule-details.title", "Rule Details"), onClose, size: "md", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ErrorContent, { error }) });
  }
  if (loading || !rule) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Drawer, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.triage.rule-details.title", "Rule Details"), onClose, size: "md", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.common.loading", "Loading...") }) });
  }
  const { rulerRule, promRule } = rule;
  const isPaused = _utils_rules__WEBPACK_IMPORTED_MODULE_21__.rulerRuleType.grafana.rule(rulerRule) && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_21__.isPausedRule)(rulerRule);
  const ruleOrigin = rulerRule ? (0,_utils_rules__WEBPACK_IMPORTED_MODULE_21__.getRulePluginOrigin)(rulerRule) : (0,_utils_rules__WEBPACK_IMPORTED_MODULE_21__.getRulePluginOrigin)(promRule);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Drawer,
    {
      onClose,
      title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { direction: "column", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { direction: "row", alignItems: "center", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _components_rule_viewer_RuleViewer__WEBPACK_IMPORTED_MODULE_15__.Title,
            {
              name: rule.name,
              paused: isPaused,
              state: _utils_rules__WEBPACK_IMPORTED_MODULE_21__.prometheusRuleType.alertingRule(promRule) ? promRule.state : void 0,
              health: promRule?.health,
              ruleType: promRule?.type,
              ruleOrigin
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Spacer__WEBPACK_IMPORTED_MODULE_13__.Spacer, {}),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Box, { marginRight: 4, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _components_WithReturnButton__WEBPACK_IMPORTED_MODULE_14__.WithReturnButton,
            {
              component: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.LinkButton,
                {
                  icon: "eye",
                  variant: "secondary",
                  href: _utils_navigation__WEBPACK_IMPORTED_MODULE_20__.rulesNav.detailsPageLink("grafana", {
                    ruleSourceName: "grafana",
                    uid: rule.uid ?? ""
                  }),
                  target: "_blank",
                  size: "sm",
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.rule-details-drawer.go-to-detail-view", children: "View alert rule" })
                }
              )
            }
          ) })
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Text, { color: "secondary", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.triage.rule-details.subtitle", "Rule details and conditions") })
      ] }),
      size: "md",
      tabs: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TabsBar, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tab,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.rule-viewer.tab.query-conditions", "Query and conditions"),
            active: activeTab === "query" /* Query */,
            onChangeTab: () => setActiveTab("query" /* Query */)
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tab,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.rule-viewer.tab.details", "Details"),
            active: activeTab === "details" /* Details */,
            onChangeTab: () => setActiveTab("details" /* Details */)
          }
        )
      ] }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TabContent, { children: [
        activeTab === "query" /* Query */ && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rule_viewer_tabs_Query__WEBPACK_IMPORTED_MODULE_17__.QueryResults, { rule }),
        activeTab === "details" /* Details */ && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rule_viewer_tabs_Details__WEBPACK_IMPORTED_MODULE_16__.Details, { rule })
      ] })
    }
  );
}
function ErrorContent({ error }) {
  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.isFetchError)(error) && error.status === 404) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Alert, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.triage.rule-not-found.title", "Rule not found"), severity: "error", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.triage.rule-not-found.description", "The requested rule could not be found.") });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Alert, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.triage.error-loading-rule", "Error loading rule"), severity: "error", children: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_19__.stringifyErrorLike)(error) });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/triage/scene/AlertRuleInstances.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertRuleInstances: () => (/* binding */ AlertRuleInstances),
/* harmony export */   GenericRowSkeleton: () => (/* binding */ GenericRowSkeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-loading-skeleton/dist/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/utils/labels.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_scenes_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _WorkbenchContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/triage/WorkbenchContext.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/triage/constants.ts");
/* harmony import */ var _rows_GenericRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/triage/rows/GenericRow.tsx");
/* harmony import */ var _rows_InstanceRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/triage/rows/InstanceRow.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/triage/scene/utils.ts");














function extractInstancesFromData(series) {
  if (!series) {
    return [];
  }
  const groups = /* @__PURE__ */ new Map();
  series.forEach((series2) => {
    const valueField = series2.fields.find((f) => f.type !== "time");
    if (!valueField) {
      return;
    }
    const keyLabels = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.omit)(valueField.labels ?? {}, "alertstate");
    const key = JSON.stringify(keyLabels);
    if (!groups.has(key)) {
      groups.set(key, { labels: keyLabels, series: [] });
    }
    groups.get(key).series.push(series2);
  });
  return Array.from(groups.values());
}
function AlertRuleInstances({ ruleUID, depth = 0 }) {
  const { leftColumnWidth } = (0,_WorkbenchContext__WEBPACK_IMPORTED_MODULE_8__.useWorkbenchContext)();
  const [timeRange] = (0,_grafana_scenes_react__WEBPACK_IMPORTED_MODULE_6__.useTimeRange)();
  const queryFilter = (0,_utils__WEBPACK_IMPORTED_MODULE_12__.useQueryFilter)();
  const filters = queryFilter ? `grafana_rule_uid="${ruleUID}",${queryFilter}` : `grafana_rule_uid="${ruleUID}"`;
  const query = (0,_utils__WEBPACK_IMPORTED_MODULE_12__.getDataQuery)(
    `count without (alertname, grafana_alertstate, grafana_folder, grafana_rule_uid) (${_constants__WEBPACK_IMPORTED_MODULE_9__.METRIC_NAME}{${filters}})`,
    { format: "timeseries", legendFormat: "{{alertstate}}" }
  );
  const queryRunner = (0,_grafana_scenes_react__WEBPACK_IMPORTED_MODULE_6__.useQueryRunner)({ queries: [query] });
  const isLoading = !queryRunner.isDataReadyToDisplay();
  const { data } = queryRunner.useState();
  const instances = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => extractInstancesFromData(data?.series), [data]);
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GenericRowSkeleton, { width: leftColumnWidth, depth });
  }
  if (!instances.length && !isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _rows_GenericRow__WEBPACK_IMPORTED_MODULE_10__.GenericRow,
      {
        width: leftColumnWidth,
        title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.triage.alert-instances", children: "Alert instances" }),
        depth,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.triage.no-instances-found", children: [
          "No alert instances found for rule: ",
          { ruleUID }
        ] }) })
      }
    );
  }
  const allSeriesLabels = instances.map((instance) => instance.labels);
  const commonLabels = allSeriesLabels.length === 1 ? {} : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.findCommonLabels)(allSeriesLabels);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: instances.map((instance) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _rows_InstanceRow__WEBPACK_IMPORTED_MODULE_11__.InstanceRow,
    {
      instance,
      commonLabels,
      leftColumnWidth,
      timeRange,
      ruleUID,
      depth
    },
    JSON.stringify(instance.labels)
  )) });
}
function GenericRowSkeleton({ width, depth }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _rows_GenericRow__WEBPACK_IMPORTED_MODULE_10__.GenericRow,
    {
      width,
      title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Box, { flex: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], { width: "100%" }) }),
      depth,
      content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], { width: "100%" })
    }
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/triage/scene/AlertRuleSummary.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertRuleSummary: () => (/* binding */ AlertRuleSummary),
/* harmony export */   alertRuleSummaryVizConfig: () => (/* binding */ alertRuleSummaryVizConfig)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_scenes_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _WorkbenchContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/triage/WorkbenchContext.tsx");







const alertRuleSummaryVizConfig = _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.VizConfigBuilders.timeseries().setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.GraphDrawStyle.Bars).setCustomFieldConfig("barWidthFactor", 1).setCustomFieldConfig("barAlignment", _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.BarAlignment.After).setCustomFieldConfig("showPoints", _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.VisibilityMode.Never).setCustomFieldConfig("fillOpacity", 60).setCustomFieldConfig("lineWidth", 0).setCustomFieldConfig("stacking", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.StackingMode.None }).setCustomFieldConfig("axisPlacement", _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.AxisPlacement.Hidden).setCustomFieldConfig("axisGridShow", false).setMin(0).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.TooltipDisplayMode.Multi }).setOption("legend", {
  showLegend: false,
  displayMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.LegendDisplayMode.Hidden
}).setOverrides(
  (builder) => builder.matchFieldsWithName("firing").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_4__.overrideToFixedColor)("firing")).matchFieldsWithName("pending").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_4__.overrideToFixedColor)("pending"))
).build();
function AlertRuleSummary({ ruleUID }) {
  const { queryRunner } = (0,_WorkbenchContext__WEBPACK_IMPORTED_MODULE_5__.useWorkbenchContext)();
  const transformedData = (0,_grafana_scenes_react__WEBPACK_IMPORTED_MODULE_2__.useDataTransformer)({
    data: queryRunner,
    transformations: [
      {
        id: "filterByValue",
        options: {
          filters: [
            {
              config: {
                id: "equal",
                options: {
                  value: ruleUID
                }
              },
              fieldName: "grafana_rule_uid"
            }
          ],
          match: "any",
          type: "include"
        }
      },
      {
        id: "partitionByValues",
        options: {
          fields: ["alertstate"],
          keepFields: false,
          naming: {
            asLabels: true
          }
        }
      }
    ]
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_scenes_react__WEBPACK_IMPORTED_MODULE_2__.VizPanel,
    {
      title: "",
      viz: alertRuleSummaryVizConfig,
      dataProvider: transformedData,
      hoverHeader: true,
      displayMode: "transparent",
      collapsible: false
    }
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/triage/scene/SummaryChart.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryChartReact: () => (/* binding */ SummaryChartReact),
/* harmony export */   SummaryChartScene: () => (/* binding */ SummaryChartScene),
/* harmony export */   summaryChartVizConfig: () => (/* binding */ summaryChartVizConfig)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_scenes_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/index.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _home_Insights__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/home/Insights.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/triage/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/triage/scene/utils.ts");









const summaryChartVizConfig = _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.VizConfigBuilders.timeseries().setCustomFieldConfig("drawStyle", _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.GraphDrawStyle.Bars).setCustomFieldConfig("barWidthFactor", 1).setCustomFieldConfig("barAlignment", _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.BarAlignment.Center).setCustomFieldConfig("fillOpacity", 60).setCustomFieldConfig("lineWidth", 0).setCustomFieldConfig("stacking", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.StackingMode.None }).setCustomFieldConfig("showPoints", _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.VisibilityMode.Never).setOption("legend", {
  showLegend: false,
  displayMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.LegendDisplayMode.Hidden
}).setOption("tooltip", { mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.TooltipDisplayMode.Multi }).setMin(0).setOverrides(
  (builder) => builder.matchFieldsWithName("firing").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_4__.overrideToFixedColor)("firing")).matchFieldsWithName("pending").overrideColor((0,_home_Insights__WEBPACK_IMPORTED_MODULE_4__.overrideToFixedColor)("pending"))
).build();
function SummaryChartReact() {
  const filter = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.useQueryFilter)();
  const dataProvider = (0,_grafana_scenes_react__WEBPACK_IMPORTED_MODULE_2__.useQueryRunner)({
    queries: [
      (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getDataQuery)(`count by (alertstate) (${_constants__WEBPACK_IMPORTED_MODULE_5__.METRIC_NAME}{${filter}})`, {
        legendFormat: "{{alertstate}}"
        // we need this so we can map states to the correct color in the vizConfig
      })
    ]
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_scenes_react__WEBPACK_IMPORTED_MODULE_2__.VizPanel, { title: "", viz: summaryChartVizConfig, dataProvider, hoverHeader: true });
}
class SummaryChartScene extends _grafana_scenes__WEBPACK_IMPORTED_MODULE_1__.SceneObjectBase {
  static {
    this.Component = SummaryChartReact;
  }
}


/***/ }),

/***/ "./public/app/features/alerting/unified/triage/scene/SummaryStats.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryStatsReact: () => (/* binding */ SummaryStatsReact),
/* harmony export */   SummaryStatsScene: () => (/* binding */ SummaryStatsScene)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/dataframe/DataFrameView.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_scenes_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _components_Spacer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/Spacer.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/triage/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/triage/scene/utils.ts");










function SummaryStatsReact() {
  const filter = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.useQueryFilter)();
  const dataProvider = (0,_grafana_scenes_react__WEBPACK_IMPORTED_MODULE_4__.useQueryRunner)({
    queries: [
      (0,_utils__WEBPACK_IMPORTED_MODULE_9__.getDataQuery)(`count by (alertstate) (${_constants__WEBPACK_IMPORTED_MODULE_8__.METRIC_NAME}{${filter}})`, {
        instant: true,
        exemplar: false,
        format: "table"
      })
    ]
  });
  const isLoading = !dataProvider.isDataReadyToDisplay;
  const data = dataProvider.useState().data;
  const firstFrame = data?.series?.at(0);
  if (isLoading || !firstFrame) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {});
  }
  const dfv = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataFrameView(firstFrame);
  if (dfv.length === 0) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {});
  }
  const firingIndex = dfv.fields.alertstate.values.findIndex((state) => state === "firing");
  const firingCount = dfv.fields.Value.values[firingIndex] ?? 0;
  const pendingIndex = dfv.fields.alertstate.values.findIndex((state) => state === "pending");
  const pendingCount = dfv.fields.Value.values[pendingIndex] ?? 0;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "column", alignItems: "flex-end", gap: 0, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Spacer__WEBPACK_IMPORTED_MODULE_7__.Spacer, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { color: "error", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.triage.firing-instances-count", children: [
      { firingCount },
      " firing instances"
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { color: "warning", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.triage.pending-instances-count", children: [
      { pendingCount },
      " pending instances"
    ] }) })
  ] });
}
class SummaryStatsScene extends _grafana_scenes__WEBPACK_IMPORTED_MODULE_3__.SceneObjectBase {
  static {
    this.Component = SummaryStatsReact;
  }
}


/***/ }),

/***/ "./public/app/features/alerting/unified/triage/scene/TriageScene.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TriageScene: () => (/* binding */ TriageScene),
/* harmony export */   triageScene: () => (/* binding */ triageScene)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/dashboard.ts");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_scenes_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/triage/constants.ts");
/* harmony import */ var _Workbench__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/triage/scene/Workbench.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/triage/scene/utils.ts");








const cursorSync = new _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.behaviors.CursorSync({ key: "triage-cursor-sync", sync: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DashboardCursorSync.Crosshair });
const triageScene = new _grafana_scenes_react__WEBPACK_IMPORTED_MODULE_3__.EmbeddedSceneWithContext({
  // this will allow us to share the cursor between all vizualizations
  $behaviors: [cursorSync],
  controls: [
    new _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.VariableValueSelectors({}),
    new _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.SceneControlsSpacer(),
    new _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.SceneTimePicker({}),
    new _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.SceneRefreshPicker({})
  ],
  $timeRange: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.SceneTimeRange(_utils__WEBPACK_IMPORTED_MODULE_6__.defaultTimeRange),
  $variables: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.SceneVariableSet({
    variables: [
      new _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.GroupByVariable({
        name: "groupBy",
        label: "Group by",
        datasource: {
          type: "prometheus",
          uid: _constants__WEBPACK_IMPORTED_MODULE_4__.DATASOURCE_UID
        },
        allowCustomValue: true,
        applyMode: "manual"
      }),
      new _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.AdHocFiltersVariable({
        name: "filters",
        label: "Filters",
        datasource: {
          type: "prometheus",
          uid: _constants__WEBPACK_IMPORTED_MODULE_4__.DATASOURCE_UID
        },
        applyMode: "manual",
        // we will construct the label matchers for the PromQL queries ourselves
        allowCustomValue: true,
        useQueriesAsFilterForOptions: true,
        supportsMultiValueOperators: true,
        filters: [],
        baseFilters: [],
        layout: "combobox"
      })
    ]
  }),
  body: new _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.SceneFlexLayout({
    direction: "column",
    children: [new _Workbench__WEBPACK_IMPORTED_MODULE_5__.WorkbenchSceneObject({})]
  })
});
const TriageScene = () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(triageScene.Component, { model: triageScene });


/***/ }),

/***/ "./public/app/features/alerting/unified/triage/scene/Workbench.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkbenchRenderer: () => (/* binding */ WorkbenchRenderer),
/* harmony export */   WorkbenchSceneObject: () => (/* binding */ WorkbenchSceneObject),
/* harmony export */   convertToWorkbenchRows: () => (/* binding */ convertToWorkbenchRows)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_scenes_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/index.js");
/* harmony import */ var _Workbench__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/triage/Workbench.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/triage/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/triage/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/triage/scene/utils.ts");









class WorkbenchSceneObject extends _grafana_scenes__WEBPACK_IMPORTED_MODULE_2__.SceneObjectBase {
  static {
    this.Component = WorkbenchRenderer;
  }
}
function WorkbenchRenderer() {
  const [timeRange] = (0,_grafana_scenes_react__WEBPACK_IMPORTED_MODULE_3__.useTimeRange)();
  const domain = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.convertTimeRangeToDomain)(timeRange);
  const [groupByKeys = []] = (0,_grafana_scenes_react__WEBPACK_IMPORTED_MODULE_3__.useVariableValues)(_constants__WEBPACK_IMPORTED_MODULE_5__.VARIABLES.groupBy);
  const countBy = [..._constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_FIELDS, ...groupByKeys].join(",");
  const queryFilter = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.useQueryFilter)();
  const runner = (0,_grafana_scenes_react__WEBPACK_IMPORTED_MODULE_3__.useQueryRunner)({
    queries: [
      (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getDataQuery)(`count by (${countBy}) (${_constants__WEBPACK_IMPORTED_MODULE_5__.METRIC_NAME}{${queryFilter}})`, {
        format: "table"
      })
    ]
  });
  const { data } = runner.useState();
  const rows = data ? convertToWorkbenchRows(data, groupByKeys) : [];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Workbench__WEBPACK_IMPORTED_MODULE_4__.Workbench, { data: rows, domain, queryRunner: runner, groupBy: groupByKeys });
}
function createAlertRuleRows(dataPoints) {
  const rules = /* @__PURE__ */ new Map();
  for (const dp of dataPoints) {
    const ruleUID = dp.grafana_rule_uid;
    if (!rules.has(ruleUID)) {
      rules.set(ruleUID, {
        alertname: dp.alertname,
        folder: dp.grafana_folder,
        ruleUID
      });
    }
  }
  const result = [];
  for (const rule of rules.values()) {
    result.push({
      type: "alertRule",
      metadata: {
        title: rule.alertname,
        folder: rule.folder,
        ruleUID: rule.ruleUID
      }
    });
  }
  return result;
}
function groupData(dataPoints, groupBy, depth) {
  if (depth >= groupBy.length) {
    return createAlertRuleRows(dataPoints);
  }
  const groupByKey = groupBy[depth];
  const grouped = /* @__PURE__ */ new Map();
  for (const dp of dataPoints) {
    const mapKey = dp[groupByKey] ?? _types__WEBPACK_IMPORTED_MODULE_6__.EmptyLabelValue;
    if (!grouped.has(mapKey)) {
      grouped.set(mapKey, []);
    }
    grouped.get(mapKey)?.push(dp);
  }
  const result = [];
  const emptyGroups = [];
  for (const [value, rows] of grouped.entries()) {
    const labelValue = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(value) ? _types__WEBPACK_IMPORTED_MODULE_6__.EmptyLabelValue : value;
    const group = {
      type: "group",
      metadata: {
        label: groupByKey,
        value: labelValue
      },
      rows: groupData(rows, groupBy, depth + 1)
    };
    if (group.metadata.value === _types__WEBPACK_IMPORTED_MODULE_6__.EmptyLabelValue) {
      emptyGroups.push(group);
    } else {
      result.push(group);
    }
  }
  return [...result, ...emptyGroups];
}
function convertToWorkbenchRows(data, groupBy = []) {
  if (!data.series.at(0)?.fields.length) {
    return [];
  }
  const frame = data.series[0];
  if (!isValidFrame(frame)) {
    return [];
  }
  const allDataPoints = Array.from({ length: frame.length }, (_, i) => {
    const dataPoint = /* @__PURE__ */ Object.create(null);
    frame.fields.forEach((field) => {
      dataPoint[field.name] = field.values[i];
    });
    return dataPoint;
  });
  return groupData(allDataPoints, groupBy, 0);
}
function isValidFrame(frame) {
  const requiredFieldNames = ["Time", ..._constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_FIELDS];
  const fieldNames = new Set(frame.fields.map((f) => f.name));
  return requiredFieldNames.every((name) => fieldNames.has(name));
}


/***/ }),

/***/ "./public/app/features/alerting/unified/triage/scene/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertTimeRangeToDomain: () => (/* binding */ convertTimeRangeToDomain),
/* harmony export */   defaultTimeRange: () => (/* binding */ defaultTimeRange),
/* harmony export */   getDataQuery: () => (/* binding */ getDataQuery),
/* harmony export */   stringifyGroupFilter: () => (/* binding */ stringifyGroupFilter),
/* harmony export */   useQueryFilter: () => (/* binding */ useQueryFilter)
/* harmony export */ });
/* harmony import */ var _grafana_scenes_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/triage/constants.ts");



function getDataQuery(expression, options) {
  const datasourceRef = {
    type: "prometheus",
    uid: _constants__WEBPACK_IMPORTED_MODULE_1__.DATASOURCE_UID
  };
  const query = {
    refId: "query",
    expr: expression,
    instant: false,
    datasource: datasourceRef,
    ...options
  };
  return query;
}
function stringifyGroupFilter(groupBy) {
  return groupBy.map((key) => `${key}!=""`).join(",");
}
const defaultTimeRange = {
  from: "now-4h",
  to: "now"
};
function convertTimeRangeToDomain(timeRange) {
  return [timeRange.from.toDate(), timeRange.to.toDate()];
}
function useQueryFilter() {
  const [filters = ""] = (0,_grafana_scenes_react__WEBPACK_IMPORTED_MODULE_0__.useVariableValue)(_constants__WEBPACK_IMPORTED_MODULE_1__.VARIABLES.filters);
  return filters;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/triage/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyLabelValue: () => (/* binding */ EmptyLabelValue)
/* harmony export */ });

const EmptyLabelValue = Symbol("empty label value");


/***/ }),

/***/ "./public/app/plugins/panel/barchart/distribute.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SPACE_AROUND: () => (/* binding */ SPACE_AROUND),
/* harmony export */   SPACE_BETWEEN: () => (/* binding */ SPACE_BETWEEN),
/* harmony export */   SPACE_EVENLY: () => (/* binding */ SPACE_EVENLY),
/* harmony export */   distribute: () => (/* binding */ distribute)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/utils/numbers.ts");


const SPACE_BETWEEN = 1;
const SPACE_AROUND = 2;
const SPACE_EVENLY = 3;
const coord = (i, offs, iwid, gap) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.roundDecimals)(offs + i * (iwid + gap), 6);
function distribute(numItems, sizeFactor, justify, onlyIdx, each) {
  let space = 1 - sizeFactor;
  let gap = justify === SPACE_BETWEEN ? space / (numItems - 1) : justify === SPACE_AROUND ? space / numItems : justify === SPACE_EVENLY ? space / (numItems + 1) : 0;
  if (isNaN(gap) || gap === Infinity) {
    gap = 0;
  }
  let offs = justify === SPACE_BETWEEN ? 0 : justify === SPACE_AROUND ? gap / 2 : justify === SPACE_EVENLY ? gap : 0;
  let iwid = sizeFactor / numItems;
  let _iwid = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.roundDecimals)(iwid, 6);
  if (onlyIdx == null) {
    for (let i = 0; i < numItems; i++) {
      each(i, coord(i, offs, iwid, gap), _iwid);
    }
  } else {
    each(onlyIdx, coord(onlyIdx, offs, iwid, gap), _iwid);
  }
}


/***/ }),

/***/ "./public/app/plugins/panel/barchart/quadtree.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Quadtree: () => (/* binding */ Quadtree),
/* harmony export */   findRects: () => (/* binding */ findRects),
/* harmony export */   intersects: () => (/* binding */ intersects),
/* harmony export */   pointWithin: () => (/* binding */ pointWithin)
/* harmony export */ });

const MAX_OBJECTS = 10;
const MAX_LEVELS = 4;
function pointWithin(px, py, rlft, rtop, rrgt, rbtm) {
  return px >= rlft && px <= rrgt && py >= rtop && py <= rbtm;
}
function findRects(qt, sidx, didx) {
  let rects = [];
  if (qt.o.length) {
    rects.push(...qt.o.filter((rect) => (sidx == null || rect.sidx === sidx) && (didx == null || rect.didx === didx)));
  }
  if (qt.q) {
    for (let i = 0; i < qt.q.length; i++) {
      rects.push(...findRects(qt.q[i], sidx, didx));
    }
  }
  return rects;
}
function intersects(r1, r2) {
  return r1.x <= r2.x + r2.w && r1.x + r1.w >= r2.x && r1.y + r1.h >= r2.y && r1.y <= r2.y + r2.h;
}
class Quadtree {
  constructor(x, y, w, h, l = 0) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.l = l;
    this.o = [];
    this.q = null;
  }
  split() {
    let t = this, x = t.x, y = t.y, w = t.w / 2, h = t.h / 2, l = t.l + 1;
    t.q = [
      // top right
      new Quadtree(x + w, y, w, h, l),
      // top left
      new Quadtree(x, y, w, h, l),
      // bottom left
      new Quadtree(x, y + h, w, h, l),
      // bottom right
      new Quadtree(x + w, y + h, w, h, l)
    ];
  }
  // invokes callback with index of each overlapping quad
  quads(x, y, w, h, cb) {
    let t = this, q = t.q, hzMid = t.x + t.w / 2, vtMid = t.y + t.h / 2, startIsNorth = y < vtMid, startIsWest = x < hzMid, endIsEast = x + w > hzMid, endIsSouth = y + h > vtMid;
    startIsNorth && endIsEast && cb(q[0]);
    startIsWest && startIsNorth && cb(q[1]);
    startIsWest && endIsSouth && cb(q[2]);
    endIsEast && endIsSouth && cb(q[3]);
  }
  add(o) {
    let t = this;
    if (t.q != null) {
      t.quads(o.x, o.y, o.w, o.h, (q) => {
        q.add(o);
      });
    } else {
      let os = t.o;
      os.push(o);
      if (os.length > MAX_OBJECTS && t.l < MAX_LEVELS) {
        t.split();
        for (let i = 0; i < os.length; i++) {
          let oi = os[i];
          t.quads(oi.x, oi.y, oi.w, oi.h, (q) => {
            q.add(oi);
          });
        }
        t.o.length = 0;
      }
    }
  }
  get(x, y, w, h, cb) {
    let t = this;
    let os = t.o;
    for (let i = 0; i < os.length; i++) {
      cb(os[i]);
    }
    if (t.q != null) {
      t.quads(x, y, w, h, (q) => {
        q.get(x, y, w, h, cb);
      });
    }
  }
  clear() {
    this.o.length = 0;
    this.q = null;
  }
}


/***/ })

}]);
//# sourceMappingURL=AlertingTriage.2984f411b21458645a31.js.map