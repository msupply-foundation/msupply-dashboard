"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PluginExtensionsLog"],{

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

/***/ "./public/app/features/plugins/extensions/logs/LogViewFilters.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogViewFilters: () => (/* binding */ LogViewFilters)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");






function LogViewFilters({ provider, filteredProvider, filter, onChange }) {
  const { pluginIds, extensionPointIds, severity } = useLogFilters(provider, filteredProvider, filter);
  const onChangePluginIds = (values) => {
    const update = {
      ...filter,
      pluginIds: mapToSet(values)
    };
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(filter.extensionPointIds) && (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(filter.severity)) {
      update.initial = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(values) ? void 0 : "pluginId";
    }
    onChange(update);
  };
  const onChangeExtensionPointIds = (values) => {
    const update = {
      ...filter,
      extensionPointIds: mapToSet(values)
    };
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(filter.pluginIds) && (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(filter.severity)) {
      update.initial = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(values) ? void 0 : "extensionPointId";
    }
    onChange(update);
  };
  const onChangeSeverity = (values) => {
    const update = {
      ...filter,
      severity: mapToSet(values)
    };
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(filter.pluginIds) && (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(filter.extensionPointIds)) {
      update.initial = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(values) ? void 0 : "severity";
    }
    onChange(update);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineFieldRow, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("plugins.log-view-filters.label-plugin-id", "Plugin Id"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.MultiSelect, { options: pluginIds, onChange: onChangePluginIds }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("plugins.log-view-filters.label-extension", "Extension"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.MultiSelect, { options: extensionPointIds, onChange: onChangeExtensionPointIds }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("plugins.log-view-filters.label-severity", "Severity"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.MultiSelect, { options: severity, onChange: onChangeSeverity }) })
  ] });
}
function useLogFilters(provider, filteredProvider, filter) {
  const { data } = provider.useState();
  const { data: filteredData } = filteredProvider.useState();
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (data && data?.series.length > 1) {
      console.warn("LogViewFilter does not support multiple series in query result.");
    }
    const frame = data?.series[0];
    const filteredFrame = filteredData?.series[0];
    if (!frame) {
      return {
        pluginIds: [],
        extensionPointIds: [],
        severity: []
      };
    }
    if (!filteredFrame) {
      return toFilterOptions({
        severity: frame,
        pluginId: frame,
        extensionPointId: frame
      });
    }
    switch (filter.initial) {
      case "extensionPointId":
        return toFilterOptions({
          severity: filteredFrame,
          pluginId: filteredFrame,
          extensionPointId: frame
        });
      case "severity":
        return toFilterOptions({
          severity: frame,
          pluginId: filteredFrame,
          extensionPointId: filteredFrame
        });
      case "pluginId":
        return toFilterOptions({
          severity: filteredFrame,
          pluginId: frame,
          extensionPointId: filteredFrame
        });
      default:
        return toFilterOptions({
          severity: frame,
          pluginId: frame,
          extensionPointId: frame
        });
    }
  }, [data, filteredData, filter]);
}
function mapToSet(selected) {
  if (selected.length <= 0) {
    return void 0;
  }
  return selected.reduce((set, selectable) => {
    if (selectable.value) {
      set.add(selectable.value);
    }
    return set;
  }, /* @__PURE__ */ new Set());
}
function toSelectableArray(source) {
  return Array.from(source).reduce((all, current) => {
    if (!current) {
      return all;
    }
    all.push({
      value: current,
      label: current
    });
    return all;
  }, []);
}
function toFilterOptions(sources) {
  const { severity, pluginId, extensionPointId } = sources;
  const severityIndex = severity.fields.findIndex((f) => f.name === "severity");
  const pluginIdIndex = pluginId.fields.findIndex((f) => f.name === "pluginId");
  const extensionPointIdIndex = extensionPointId.fields.findIndex((f) => f.name === "extensionPointId");
  const severities = new Set(severity.fields[severityIndex].values);
  const pluginIds = new Set(pluginId.fields[pluginIdIndex].values);
  const extensionPointIds = new Set(extensionPointId.fields[extensionPointIdIndex].values);
  return {
    severity: toSelectableArray(severities),
    pluginIds: toSelectableArray(pluginIds),
    extensionPointIds: toSelectableArray(extensionPointIds)
  };
}


/***/ }),

/***/ "./public/app/features/plugins/extensions/logs/LogViewer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogViewer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/nanoid/index.browser.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_scenes_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/scenes-react/dist/esm/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _LogViewFilters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/extensions/logs/LogViewFilters.tsx");
/* harmony import */ var _dataSource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/plugins/extensions/logs/dataSource.ts");
/* harmony import */ var _filterTransformation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/plugins/extensions/logs/filterTransformation.ts");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/plugins/extensions/logs/log.ts");












const DATASOURCE_REF = {
  uid: (0,nanoid__WEBPACK_IMPORTED_MODULE_1__.nanoid)(),
  type: "grafana-extensionslog-datasource"
};
const logsViz = _grafana_scenes__WEBPACK_IMPORTED_MODULE_4__.VizConfigBuilders.logs().setOption("wrapLogMessage", true).build();
_grafana_scenes__WEBPACK_IMPORTED_MODULE_4__.sceneUtils.registerRuntimeDataSource({
  dataSource: new _dataSource__WEBPACK_IMPORTED_MODULE_8__.ExtensionsLogDataSource(DATASOURCE_REF.type, DATASOURCE_REF.uid, _log__WEBPACK_IMPORTED_MODULE_10__.log)
});
function LogViewer() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_scenes_react__WEBPACK_IMPORTED_MODULE_5__.SceneContextProvider, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LogViewScene, {}) });
}
function LogViewScene() {
  const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
  const data = (0,_grafana_scenes_react__WEBPACK_IMPORTED_MODULE_5__.useQueryRunner)({
    datasource: DATASOURCE_REF,
    queries: [{ refId: "A" }],
    liveStreaming: true
  });
  const filteredData = (0,_grafana_scenes_react__WEBPACK_IMPORTED_MODULE_5__.useDataTransformer)({
    transformations: [(0,_filterTransformation__WEBPACK_IMPORTED_MODULE_9__.createFilterTransformation)(filter)],
    data
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__.Page,
    {
      navId: "extensions",
      actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LogViewFilters__WEBPACK_IMPORTED_MODULE_7__.LogViewFilters, { provider: data, filteredProvider: filteredData, filter, onChange: setFilter }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__["default"], { children: ({ height, width }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_scenes_react__WEBPACK_IMPORTED_MODULE_5__.VizGridLayout, { minHeight: height, minWidth: width, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_scenes_react__WEBPACK_IMPORTED_MODULE_5__.VizPanel, { title: "", viz: logsViz, dataProvider: filteredData }) }) })
    }
  );
}


/***/ }),

/***/ "./public/app/features/plugins/extensions/logs/dataSource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionsLogDataSource: () => (/* binding */ ExtensionsLogDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/scan.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/dataframe/processDataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/dataFrameTypes.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");





class ExtensionsLogDataSource extends _grafana_scenes__WEBPACK_IMPORTED_MODULE_6__.RuntimeDataSource {
  constructor(pluginId, uid, extensionsLog) {
    super(pluginId, uid);
    this.pluginId = pluginId;
    this.uid = uid;
    this.extensionsLog = extensionsLog;
  }
  query(request) {
    const [query] = request.targets;
    return this.extensionsLog.asObservable().pipe(
      (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.scan)(
        (response, item) => {
          const [existing] = response.data;
          return {
            data: [createFrame(query, item, existing)],
            key: query.key ?? query.refId,
            state: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.LoadingState.Streaming
          };
        },
        {
          data: [],
          key: query.key ?? query.refId,
          state: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.LoadingState.Streaming
        }
      )
    );
  }
  testDatasource() {
    return Promise.resolve({ status: "success", message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("plugins.extensions-log-data-source.message.ok", "OK") });
  }
}
function createFrame(query, item, existing) {
  const timestamps = existing?.fields?.[0]?.values ?? [];
  const messages = existing?.fields?.[1]?.values ?? [];
  const levels = existing?.fields?.[2]?.values ?? [];
  const ids = existing?.fields?.[3]?.values ?? [];
  const labels = existing?.fields?.[4]?.values ?? [];
  const pluginIds = existing?.fields?.[5]?.values ?? [];
  const extensionPointIds = existing?.fields?.[6]?.values ?? [];
  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.createDataFrame)({
    refId: query.refId,
    meta: { type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.DataFrameType.LogLines },
    fields: [
      {
        name: "timestamp",
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.time,
        values: [item.timestamp, ...timestamps]
      },
      {
        name: "body",
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.string,
        values: [item.message, ...messages]
      },
      {
        name: "severity",
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.string,
        values: [item.level, ...levels]
      },
      {
        name: "id",
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.string,
        values: [item.id, ...ids]
      },
      {
        name: "labels",
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.other,
        values: [item.labels, ...labels]
      },
      {
        name: "pluginId",
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.string,
        values: [item.pluginId ?? null, ...pluginIds]
      },
      {
        name: "extensionPointId",
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.string,
        values: [item.extensionPointId ?? null, ...extensionPointIds]
      }
    ]
  });
}


/***/ }),

/***/ "./public/app/features/plugins/extensions/logs/filterTransformation.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFilterTransformation: () => (/* binding */ createFilterTransformation)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/scan.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/dataframe/processDataFrame.ts");




function createFilterTransformation(filter) {
  return function cascadingFilterTransformation() {
    return function(source) {
      return source.pipe(
        (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.scan)((filtered, current) => {
          if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(filter.extensionPointIds) && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(filter.pluginIds) && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(filter.severity)) {
            return current;
          }
          for (const frame of current) {
            const pluginIdIndex = frame.fields.findIndex((f) => f.name === "pluginId");
            const extensionPointIdIndex = frame.fields.findIndex((f) => f.name === "extensionPointId");
            const severityIndex = frame.fields.findIndex((f) => f.name === "severity");
            if (pluginIdIndex === -1 && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(filter.pluginIds)) {
              continue;
            }
            if (extensionPointIdIndex === -1 && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(filter.extensionPointIds)) {
              continue;
            }
            if (severityIndex === -1 && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(filter.severity)) {
              continue;
            }
            const target = {
              ...frame,
              fields: frame.fields.map((f) => ({
                ...f,
                values: []
              }))
            };
            for (let index = 0; index < frame.length; index++) {
              const pluginId = frame.fields[pluginIdIndex].values[index];
              const extensionPointId = frame.fields[extensionPointIdIndex].values[index];
              const severity = frame.fields[severityIndex].values[index];
              if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(filter.pluginIds) && !filter.pluginIds?.has(pluginId)) {
                continue;
              }
              if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(filter.extensionPointIds) && !filter.extensionPointIds?.has(extensionPointId)) {
                continue;
              }
              if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(filter.severity) && !filter.severity?.has(severity)) {
                continue;
              }
              copyRow(frame, target, index);
            }
            filtered.push((0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.createDataFrame)(target));
          }
          return filtered;
        }, [])
      );
    };
  };
}
function copyRow(source, target, rowIndex) {
  for (let index = 0; index < source.fields.length; index++) {
    const field = source.fields[index];
    if (!target.fields[index]) {
      target.fields[index] = {
        ...field,
        values: []
      };
    }
    const value = source.fields[index].values[rowIndex];
    target.fields[index].values?.push(value);
  }
}


/***/ })

}]);
//# sourceMappingURL=PluginExtensionsLog.075bd62da54440f6dce3.js.map