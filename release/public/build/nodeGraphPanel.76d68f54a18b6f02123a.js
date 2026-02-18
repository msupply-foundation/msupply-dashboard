"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["nodeGraphPanel"],{

/***/ "./node_modules/react-use/lib/misc/util.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isNavigator = exports.isBrowser = exports.off = exports.on = exports.noop = void 0;
var noop = function () { };
exports.noop = noop;
function on(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.addEventListener) {
        obj.addEventListener.apply(obj, args);
    }
}
exports.on = on;
function off(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.removeEventListener) {
        obj.removeEventListener.apply(obj, args);
    }
}
exports.off = off;
exports.isBrowser = typeof window !== 'undefined';
exports.isNavigator = typeof navigator !== 'undefined';


/***/ }),

/***/ "./node_modules/react-use/lib/useIsomorphicLayoutEffect.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__("./node_modules/react/index.js");
var util_1 = __webpack_require__("./node_modules/react-use/lib/misc/util.js");
var useIsomorphicLayoutEffect = util_1.isBrowser ? react_1.useLayoutEffect : react_1.useEffect;
exports["default"] = useIsomorphicLayoutEffect;


/***/ }),

/***/ "./node_modules/react-use/lib/useMeasure.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
var react_1 = __webpack_require__("./node_modules/react/index.js");
var useIsomorphicLayoutEffect_1 = tslib_1.__importDefault(__webpack_require__("./node_modules/react-use/lib/useIsomorphicLayoutEffect.js"));
var util_1 = __webpack_require__("./node_modules/react-use/lib/misc/util.js");
var defaultState = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
};
function useMeasure() {
    var _a = react_1.useState(null), element = _a[0], ref = _a[1];
    var _b = react_1.useState(defaultState), rect = _b[0], setRect = _b[1];
    var observer = react_1.useMemo(function () {
        return new window.ResizeObserver(function (entries) {
            if (entries[0]) {
                var _a = entries[0].contentRect, x = _a.x, y = _a.y, width = _a.width, height = _a.height, top_1 = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
                setRect({ x: x, y: y, width: width, height: height, top: top_1, left: left, bottom: bottom, right: right });
            }
        });
    }, []);
    useIsomorphicLayoutEffect_1.default(function () {
        if (!element)
            return;
        observer.observe(element);
        return function () {
            observer.disconnect();
        };
    }, [element]);
    return [ref, rect];
}
exports["default"] = util_1.isBrowser && typeof window.ResizeObserver !== 'undefined'
    ? useMeasure
    : (function () { return [util_1.noop, defaultState]; });


/***/ }),

/***/ "./node_modules/react-use/lib/usePrevious.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__("./node_modules/react/index.js");
function usePrevious(state) {
    var ref = react_1.useRef();
    react_1.useEffect(function () {
        ref.current = state;
    });
    return ref.current;
}
exports["default"] = usePrevious;


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/Edge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Edge: () => (/* binding */ Edge),
/* harmony export */   defaultEdgeColor: () => (/* binding */ defaultEdgeColor),
/* harmony export */   defaultHighlightedEdgeColor: () => (/* binding */ defaultHighlightedEdgeColor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _EdgeArrowMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/EdgeArrowMarker.tsx");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/Node.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/utils.ts");







const defaultHighlightedEdgeColor = "#a00";
const defaultEdgeColor = "#999";
const Edge = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function Edge2(props) {
  const { edge, onClick, onMouseEnter, onMouseLeave, hovering, svgIdNamespace } = props;
  const { source, target, sourceNodeRadius, targetNodeRadius } = edge;
  const arrowHeadHeight = 10 + edge.thickness * 2;
  const line = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.shortenLine)(
    {
      x1: source.x,
      y1: source.y,
      x2: target.x,
      y2: target.y
    },
    sourceNodeRadius + (0,_Node__WEBPACK_IMPORTED_MODULE_4__.computeNodeCircumferenceStrokeWidth)(sourceNodeRadius) / 2 || _Node__WEBPACK_IMPORTED_MODULE_4__.nodeR,
    targetNodeRadius + (0,_Node__WEBPACK_IMPORTED_MODULE_4__.computeNodeCircumferenceStrokeWidth)(targetNodeRadius) / 2 || _Node__WEBPACK_IMPORTED_MODULE_4__.nodeR,
    arrowHeadHeight
  );
  const edgeColor = edge.color || defaultEdgeColor;
  const highlightedEdgeColor = edge.color || defaultHighlightedEdgeColor;
  const markerId = `triangle-${svgIdNamespace}-${edge.id}`;
  const coloredMarkerId = `triangle-colored-${svgIdNamespace}-${edge.id}`;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_EdgeArrowMarker__WEBPACK_IMPORTED_MODULE_3__.EdgeArrowMarker, { id: markerId, fill: edgeColor, headHeight: arrowHeadHeight }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_EdgeArrowMarker__WEBPACK_IMPORTED_MODULE_3__.EdgeArrowMarker, { id: coloredMarkerId, fill: highlightedEdgeColor, headHeight: arrowHeadHeight }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      "g",
      {
        onClick: (event) => onClick(event, edge),
        style: { cursor: "pointer" },
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("nodeGraph.edge.aria-label-from-to", "Edge from: {{from}} to: {{to}}", {
          from: source.id,
          to: target.id
        }),
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "line",
            {
              strokeWidth: (hovering ? 1 : 0) + (edge.highlighted ? 1 : 0) + edge.thickness,
              stroke: edge.highlighted ? highlightedEdgeColor : edgeColor,
              x1: line.x1,
              y1: line.y1,
              x2: line.x2,
              y2: line.y2,
              strokeDasharray: edge.strokeDasharray,
              markerEnd: `url(#${edge.highlighted ? coloredMarkerId : markerId})`
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "line",
            {
              stroke: "transparent",
              x1: line.x1,
              y1: line.y1,
              x2: line.x2,
              y2: line.y2,
              strokeWidth: 20,
              onMouseEnter: () => {
                onMouseEnter(edge.id);
              },
              onMouseLeave: () => {
                onMouseLeave(edge.id);
              }
            }
          )
        ]
      }
    )
  ] });
});


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/EdgeArrowMarker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EdgeArrowMarker: () => (/* binding */ EdgeArrowMarker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Edge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/Edge.tsx");



function EdgeArrowMarker({
  id = "triangle",
  fill = _Edge__WEBPACK_IMPORTED_MODULE_1__.defaultEdgeColor,
  headHeight = 10
}) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "marker",
    {
      id,
      viewBox: "0 0 10 10",
      refX: "1",
      refY: "5",
      markerUnits: "userSpaceOnUse",
      markerWidth: headHeight,
      markerHeight: headHeight,
      orient: "auto",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M 0 0 L 10 5 L 0 10 z", fill })
    }
  ) });
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/EdgeLabel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EdgeLabel: () => (/* binding */ EdgeLabel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/Node.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/utils.ts");







const getStyles = (theme) => {
  return {
    mainGroup: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      pointerEvents: "none",
      fontSize: "8px"
    }),
    background: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      fill: theme.components.tooltip.background
    }),
    text: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      fill: theme.components.tooltip.text
    })
  };
};
const EdgeLabel = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function EdgeLabel2(props) {
  const { edge } = props;
  const { source, target, sourceNodeRadius, targetNodeRadius } = edge;
  const line = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.shortenLine)(
    {
      x1: source.x,
      y1: source.y,
      x2: target.x,
      y2: target.y
    },
    sourceNodeRadius || _Node__WEBPACK_IMPORTED_MODULE_4__.nodeR,
    targetNodeRadius || _Node__WEBPACK_IMPORTED_MODULE_4__.nodeR
  );
  const middle = {
    x: line.x1 + (line.x2 - line.x1) / 2,
    y: line.y1 + (line.y2 - line.y1) / 2
  };
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const stats = [edge.mainStat, edge.secondaryStat].filter((x) => x);
  const height = stats.length > 1 ? "30" : "15";
  const middleOffset = stats.length > 1 ? 15 : 7.5;
  let offset = stats.length > 1 ? -5 : 2.5;
  const contents = [];
  stats.forEach((stat, index) => {
    contents.push(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", { className: styles.text, x: middle.x, y: middle.y + offset, textAnchor: "middle", children: stat }, index)
    );
    offset += 15;
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", { className: styles.mainGroup, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "rect",
      {
        className: styles.background,
        x: middle.x - 40,
        y: middle.y - middleOffset,
        width: "80",
        height,
        rx: "5"
      }
    ),
    contents
  ] });
});


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/Legend.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Legend: () => (/* binding */ Legend)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/VizLegend/VizLegend.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/VizLegend/VizLegendListItem.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");







function getStyles() {
  return {
    item: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "LegendItem",
      flexGrow: 0
    }),
    legend: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "Legend",
      pointerEvents: "all"
    })
  };
}
const Legend = function Legend2(props) {
  const { nodes, onSort, sort, sortable } = props;
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useTheme2)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const colorItems = getColorLegendItems(nodes, theme);
  const onClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (item) => {
      onSort({
        field: item.data.field,
        ascending: item.data.field === sort?.field ? !sort?.ascending : false
      });
    },
    [sort, onSort]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.VizLegend,
    {
      className: styles.legend,
      displayMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.LegendDisplayMode.List,
      placement: "bottom",
      items: colorItems,
      itemRenderer: (item) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.VizLegendListItem, { item, className: styles.item, onLabelClick: sortable ? onClick : void 0 }),
          sortable && (sort?.field === item.data.field ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: sort.ascending ? "arrow-up" : "arrow-down" }) : "")
        ] });
      }
    }
  );
};
function getColorLegendItems(nodes, theme) {
  if (!nodes.length) {
    return [];
  }
  const fields = [nodes[0].mainStat, nodes[0].secondaryStat].filter(
    (item) => Boolean(item)
  );
  const node = nodes.find((n) => n.arcSections.length > 0);
  if (node) {
    if (node.arcSections[0].config?.color?.mode === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldColorModeId.Fixed) {
      fields.push(...new Set(nodes.map((n) => n.arcSections).flat()));
    }
  }
  if (nodes[0].color) {
    fields.push(nodes[0].color);
  }
  return fields.map((f) => {
    const item = {
      label: f.config.displayName || f.name,
      yAxis: 0,
      data: { field: f }
    };
    if (f.config.color?.mode === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldColorModeId.Fixed && f.config.color?.fixedColor) {
      item.color = theme.visualization.getColorByName(f.config.color?.fixedColor || "");
    } else if (f.config.color?.mode) {
      item.gradient = f.config.color?.mode;
    }
    if (!(item.color || item.gradient)) {
      item.color = theme.visualization.getColorByName("");
    }
    return item;
  });
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/Marker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Marker: () => (/* binding */ Marker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");






const nodeR = 40;
const getStyles = (theme) => ({
  mainGroup: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    cursor: "pointer",
    fontSize: "10px"
  }),
  mainCircle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fill: theme.components.panel.background,
    stroke: theme.colors.border.strong
  }),
  text: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "50px",
    height: "50px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  })
});
const Marker = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function Marker2(props) {
  const { marker, onClick } = props;
  const { node } = marker;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  if (!(node.x !== void 0 && node.y !== void 0)) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    "g",
    {
      "data-node-id": node.id,
      className: styles.mainGroup,
      onClick: (event) => {
        onClick?.(event, marker);
      },
      "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("nodeGraph.marker.aria-label-hidden-marker", "Hidden nodes marker: {{marker}}", {
        marker: node.id
      }),
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { className: styles.mainCircle, r: nodeR, cx: node.x, cy: node.y }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("foreignObject", { x: node.x - 25, y: node.y - 25, width: "50", height: "50", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.text, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: marker.count > 100 ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("nodeGraph.marker.100-node-count", ">100 nodes") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("nodeGraph.marker.node-count", "{{count}} nodes", { count: marker.count }) }) }) }) })
      ]
    }
  );
});


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/Node.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node),
/* harmony export */   computeNodeCircumferenceStrokeWidth: () => (/* binding */ computeNodeCircumferenceStrokeWidth),
/* harmony export */   highlightedNodeColor: () => (/* binding */ highlightedNodeColor),
/* harmony export */   nodeR: () => (/* binding */ nodeR)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/tinycolor2/esm/tinycolor.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/field/fieldColor.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/utils.ts");










const nodeR = 40;
const highlightedNodeColor = "#a00";
const getStyles = (theme, hovering) => ({
  mainGroup: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    cursor: "pointer",
    fontSize: "10px",
    [theme.transitions.handleMotion("no-preference", "reduce")]: {
      transition: "opacity 300ms"
    },
    opacity: hovering === "inactive" ? 0.5 : 1
  }),
  mainCircle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fill: theme.components.panel.background
  }),
  filledCircle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fill: highlightedNodeColor
  }),
  hoverCircle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    opacity: 0.5,
    fill: "transparent",
    stroke: theme.colors.primary.text
  }),
  text: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fill: theme.colors.text.primary,
    pointerEvents: "none"
  }),
  titleText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    textAlign: "center",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    backgroundColor: (0,tinycolor2__WEBPACK_IMPORTED_MODULE_4__["default"])(theme.colors.background.primary).setAlpha(0.6).toHex8String(),
    width: "140px"
  }),
  statsText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    textAlign: "center",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: "70px"
  }),
  textHovering: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "200px",
    "& span": {
      backgroundColor: (0,tinycolor2__WEBPACK_IMPORTED_MODULE_4__["default"])(theme.colors.background.primary).setAlpha(0.8).toHex8String()
    }
  }),
  clickTarget: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fill: "none",
    stroke: "none",
    pointerEvents: "fill"
  })
});
const computeNodeCircumferenceStrokeWidth = (nodeRadius) => Math.ceil(nodeRadius * 0.075);
const Node = (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(function Node2(props) {
  const { node, onMouseEnter, onMouseLeave, onClick, hovering } = props;
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useTheme2)();
  const styles = getStyles(theme, hovering);
  const isHovered = hovering === "active";
  const nodeRadius = node.nodeRadius?.values[node.dataFrameRowIndex] || nodeR;
  const strokeWidth = computeNodeCircumferenceStrokeWidth(nodeRadius);
  if (!(node.x !== void 0 && node.y !== void 0)) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    "g",
    {
      "data-node-id": node.id,
      className: styles.mainGroup,
      "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("nodeGraph.node.aria-label-node-title", "Node: {{nodeName}}", { nodeName: node.title }),
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          "circle",
          {
            "data-testid": `node-circle-${node.id}`,
            className: node.highlighted ? styles.filledCircle : styles.mainCircle,
            r: nodeRadius,
            cx: node.x,
            cy: node.y
          }
        ),
        isHovered && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { className: styles.hoverCircle, r: nodeRadius - 3, cx: node.x, cy: node.y, strokeWidth }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ColorCircle, { node }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", { className: styles.text, style: { pointerEvents: "none" }, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NodeContents, { node, hovering }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "foreignObject",
            {
              x: node.x - (isHovered ? 100 : 70),
              y: node.y + nodeRadius + 5,
              width: isHovered ? "200" : "140",
              height: "40",
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(styles.titleText, isHovered && styles.textHovering), children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: node.title }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: node.subTitle })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          "rect",
          {
            "data-testid": `node-click-rect-${node.id}`,
            onMouseEnter: () => {
              onMouseEnter(node.id);
            },
            onMouseLeave: () => {
              onMouseLeave(node.id);
            },
            onClick: (event) => {
              onClick(event, node);
            },
            className: styles.clickTarget,
            x: node.x - nodeRadius - 5,
            y: node.y - nodeRadius - 5,
            width: nodeRadius * 2 + 10,
            height: nodeRadius * 2 + 50
          }
        )
      ]
    }
  );
});
function NodeContents({ node, hovering }) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useTheme2)();
  const styles = getStyles(theme, hovering);
  const isHovered = hovering === "active";
  if (!(node.x !== void 0 && node.y !== void 0)) {
    return null;
  }
  return node.icon ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("foreignObject", { x: node.x - 35, y: node.y - 20, width: "70", height: "40", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: 70, overflow: "hidden", display: "flex", justifyContent: "center", marginTop: -4 }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Icon, { "data-testid": `node-icon-${node.icon}`, name: node.icon, size: "xxxl" }) }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("foreignObject", { x: node.x - (isHovered ? 100 : 35), y: node.y - 15, width: isHovered ? "200" : "70", height: "40", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(styles.statsText, isHovered && styles.textHovering), children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: node.mainStat && (0,_utils__WEBPACK_IMPORTED_MODULE_9__.statToString)(node.mainStat.config, node.mainStat.values[node.dataFrameRowIndex]) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: node.secondaryStat && (0,_utils__WEBPACK_IMPORTED_MODULE_9__.statToString)(node.secondaryStat.config, node.secondaryStat.values[node.dataFrameRowIndex]) })
  ] }) });
}
function ColorCircle(props) {
  const { node } = props;
  const fullStat = node.arcSections.find((s) => s.values[node.dataFrameRowIndex] >= 1);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useTheme2)();
  const nodeRadius = node.nodeRadius?.values[node.dataFrameRowIndex] || nodeR;
  const strokeWidth = computeNodeCircumferenceStrokeWidth(nodeRadius);
  if (fullStat) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "circle",
      {
        fill: "none",
        stroke: theme.visualization.getColorByName(fullStat.config.color?.fixedColor || ""),
        strokeWidth,
        r: nodeRadius,
        cx: node.x,
        cy: node.y
      }
    );
  }
  const nonZero = node.arcSections.filter((s) => s.values[node.dataFrameRowIndex] !== 0);
  if (nonZero.length === 0) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "circle",
      {
        fill: "none",
        stroke: node.color ? getColor(node.color, node.dataFrameRowIndex, theme) : "gray",
        strokeWidth,
        r: nodeRadius,
        cx: node.x,
        cy: node.y
      }
    );
  }
  const { elements } = nonZero.reduce(
    (acc, section, index) => {
      const color = section.config.color?.fixedColor || "";
      const value = section.values[node.dataFrameRowIndex];
      const el = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        ArcSection,
        {
          r: nodeRadius,
          x: node.x,
          y: node.y,
          startPercent: acc.percent,
          percent: value + acc.percent > 1 ? (
            // If the values aren't correct and add up to more than 100% lets still render correctly the amounts we
            // already have and cap it at 100%
            1 - acc.percent
          ) : value,
          color: theme.visualization.getColorByName(color),
          strokeWidth
        },
        index
      );
      acc.elements.push(el);
      acc.percent = acc.percent + value;
      return acc;
    },
    { elements: [], percent: 0 }
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: elements });
}
function ArcSection({
  r,
  x,
  y,
  startPercent,
  percent,
  color,
  strokeWidth = 2
}) {
  const endPercent = startPercent + percent;
  const startXPos = x + Math.sin(2 * Math.PI * startPercent) * r;
  const startYPos = y - Math.cos(2 * Math.PI * startPercent) * r;
  const endXPos = x + Math.sin(2 * Math.PI * endPercent) * r;
  const endYPos = y - Math.cos(2 * Math.PI * endPercent) * r;
  const largeArc = percent > 0.5 ? "1" : "0";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      fill: "none",
      d: `M ${startXPos} ${startYPos} A ${r} ${r} 0 ${largeArc} 1 ${endXPos} ${endYPos}`,
      stroke: color,
      strokeWidth
    }
  );
}
function getColor(field, index, theme) {
  if (!field.config.color) {
    return field.values[index];
  }
  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.getFieldColorModeForField)(field).getCalculator(field, theme)(0, field.values[index]);
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/NodeGraph.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeGraph: () => (/* binding */ NodeGraph),
/* harmony export */   layeredLayoutThreshold: () => (/* binding */ layeredLayoutThreshold)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_use_lib_useMeasure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-use/lib/useMeasure.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Edge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/Edge.tsx");
/* harmony import */ var _EdgeLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/EdgeLabel.tsx");
/* harmony import */ var _Legend__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/Legend.tsx");
/* harmony import */ var _Marker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/Marker.tsx");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/Node.tsx");
/* harmony import */ var _ViewControls__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/ViewControls.tsx");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/layout.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/panelcfg.gen.ts");
/* harmony import */ var _useCategorizeFrames__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/useCategorizeFrames.ts");
/* harmony import */ var _useContextMenu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/useContextMenu.tsx");
/* harmony import */ var _useFocusPositionOnLayout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/useFocusPositionOnLayout.ts");
/* harmony import */ var _useHighlight__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/useHighlight.ts");
/* harmony import */ var _usePanning__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/usePanning.ts");
/* harmony import */ var _useZoom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/useZoom.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/utils.ts");























const getStyles = (theme) => ({
  wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    label: "wrapper",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    position: "relative"
  }),
  svg: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    label: "svg",
    height: "100%",
    width: "100%",
    overflow: "visible",
    fontSize: "10px",
    cursor: "move"
  }),
  svgPanning: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    label: "svgPanning",
    userSelect: "none"
  }),
  noDataMsg: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    height: "100%",
    width: "100%",
    display: "grid",
    placeItems: "center",
    fontSize: theme.typography.h4.fontSize,
    color: theme.colors.text.secondary
  }),
  mainGroup: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    label: "mainGroup",
    willChange: "transform"
  }),
  viewControls: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    label: "viewControls",
    position: "absolute",
    left: "2px",
    bottom: "3px",
    right: 0,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    pointerEvents: "none"
  }),
  layoutAlgorithm: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    label: "layoutAlgorithm",
    pointerEvents: "all",
    position: "absolute",
    top: "8px",
    right: "8px",
    zIndex: 1
  }),
  legend: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    label: "legend",
    background: theme.colors.background.secondary,
    boxShadow: theme.shadows.z1,
    paddingBottom: "5px",
    marginRight: "10px"
  }),
  viewControlsWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginLeft: "auto"
  }),
  alert: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    label: "alert",
    padding: "5px 8px",
    fontSize: "10px",
    textShadow: "0 1px 0 rgba(0, 0, 0, 0.2)",
    borderRadius: theme.shape.radius.default,
    alignItems: "center",
    position: "absolute",
    right: 0,
    background: theme.colors.warning.main,
    color: theme.colors.warning.contrastText
  }),
  loadingWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    label: "loadingWrapper",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  })
});
const defaultNodeCountLimit = 200;
const layeredLayoutThreshold = 500;
function NodeGraph({ getLinks, dataFrames, nodeLimit, panelId, zoomMode, layoutAlgorithm }) {
  const nodeCountLimit = nodeLimit || defaultNodeCountLimit;
  const { edges: edgesDataFrames, nodes: nodesDataFrames } = (0,_useCategorizeFrames__WEBPACK_IMPORTED_MODULE_18__.useCategorizeFrames)(dataFrames);
  const [measureRef, { width, height }] = (0,react_use_lib_useMeasure__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const [config, setConfig] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_layout__WEBPACK_IMPORTED_MODULE_16__.defaultConfig);
  const layoutCacheRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)({});
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (layoutAlgorithm) {
      setConfig((prevConfig) => {
        return {
          ...prevConfig,
          gridLayout: layoutAlgorithm === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_17__.LayoutAlgorithm.Grid,
          layoutAlgorithm
        };
      });
    }
  }, [layoutAlgorithm]);
  const firstNodesDataFrame = nodesDataFrames[0];
  const firstEdgesDataFrame = edgesDataFrames[0];
  const svgIdNamespace = panelId || "nodegraphpanel";
  const processed = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(
    () => (0,_utils__WEBPACK_IMPORTED_MODULE_24__.processNodes)(firstNodesDataFrame, firstEdgesDataFrame),
    [firstEdgesDataFrame, firstNodesDataFrame]
  );
  const { nodeHover, setNodeHover, clearNodeHover, edgeHover, setEdgeHover, clearEdgeHover } = useHover();
  const [hoveringIds, setHoveringIds] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    let linked = [];
    if (nodeHover) {
      linked = (0,_utils__WEBPACK_IMPORTED_MODULE_24__.findConnectedNodesForNode)(processed.nodes, processed.edges, nodeHover);
    } else if (edgeHover) {
      linked = (0,_utils__WEBPACK_IMPORTED_MODULE_24__.findConnectedNodesForEdge)(processed.nodes, processed.edges, edgeHover);
    }
    setHoveringIds(linked);
  }, [nodeHover, edgeHover, processed]);
  const [focusedNodeId, setFocusedNodeId] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
  const setFocused = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((e, m) => setFocusedNodeId(m.node.id), [setFocusedNodeId]);
  const { nodes, edges, markers, bounds, hiddenNodesCount, loading } = (0,_layout__WEBPACK_IMPORTED_MODULE_16__.useLayout)(
    processed.nodes,
    processed.edges,
    config,
    nodeCountLimit,
    width,
    focusedNodeId,
    processed.hasFixedPositions,
    layoutCacheRef.current
  );
  const focusPosition = (0,_useFocusPositionOnLayout__WEBPACK_IMPORTED_MODULE_20__.useFocusPositionOnLayout)(config, nodes, focusedNodeId);
  const { panRef, zoomRef, onStepUp, onStepDown, isPanning, position, scale, isMaxZoom, isMinZoom } = usePanAndZoom(
    bounds,
    focusPosition,
    zoomMode
  );
  const { onEdgeOpen, onNodeOpen, MenuComponent } = (0,_useContextMenu__WEBPACK_IMPORTED_MODULE_19__.useContextMenu)(
    getLinks,
    firstNodesDataFrame,
    firstEdgesDataFrame,
    config,
    setConfig,
    setFocusedNodeId
  );
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  const topLevelRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(
    (r) => {
      measureRef(r);
      zoomRef.current = r;
    },
    [measureRef, zoomRef]
  );
  const highlightId = (0,_useHighlight__WEBPACK_IMPORTED_MODULE_21__.useHighlight)(focusedNodeId);
  const handleLayoutChange = (cfg) => {
    if (cfg.layoutAlgorithm !== config.layoutAlgorithm) {
      setFocusedNodeId(void 0);
    }
    setConfig(cfg);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    layoutCacheRef.current = {};
  }, [firstNodesDataFrame, firstEdgesDataFrame]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { ref: topLevelRef, className: styles.wrapper, children: [
    loading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.loadingWrapper, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "nodeGraph.node-graph.computing-layout", children: "Computing layout" }),
      "\xA0",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Spinner, {})
    ] }) : null,
    !panelId && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.layoutAlgorithm, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.RadioButtonGroup,
      {
        size: "sm",
        options: [
          { label: "Layered", value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_17__.LayoutAlgorithm.Layered },
          { label: "Force", value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_17__.LayoutAlgorithm.Force },
          { label: "Grid", value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_17__.LayoutAlgorithm.Grid }
        ],
        value: config.gridLayout ? _panelcfg_gen__WEBPACK_IMPORTED_MODULE_17__.LayoutAlgorithm.Grid : config.layoutAlgorithm,
        onChange: (value) => {
          handleLayoutChange({
            ...config,
            gridLayout: value === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_17__.LayoutAlgorithm.Grid,
            layoutAlgorithm: value
          });
        }
      }
    ) }),
    dataFrames.length && processed.nodes.length ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "svg",
      {
        ref: panRef,
        viewBox: `${-(width / 2)} ${-(height / 2)} ${width} ${height}`,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(styles.svg, isPanning && styles.svgPanning),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          "g",
          {
            className: styles.mainGroup,
            style: { transform: `scale(${scale}) translate(${Math.floor(position.x)}px, ${Math.floor(position.y)}px)` },
            children: [
              !config.gridLayout && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                Edges,
                {
                  edges,
                  nodeHoveringId: nodeHover,
                  edgeHoveringId: edgeHover,
                  onClick: onEdgeOpen,
                  onMouseEnter: setEdgeHover,
                  onMouseLeave: clearEdgeHover,
                  svgIdNamespace,
                  processedNodesLength: processed.nodes.length,
                  processedEdgesLength: processed.edges.length
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                Nodes,
                {
                  nodes,
                  onMouseEnter: setNodeHover,
                  onMouseLeave: clearNodeHover,
                  onClick: onNodeOpen,
                  hoveringIds: hoveringIds || [highlightId]
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Markers, { markers: markers || [], onClick: setFocused }),
              !config.gridLayout && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EdgeLabels, { edges, nodeHoveringId: nodeHover, edgeHoveringId: edgeHover })
            ]
          }
        )
      }
    ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.noDataMsg, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "nodeGraph.node-graph.no-data", children: "No data" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.viewControls, children: [
      nodes.length ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.legend, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _Legend__WEBPACK_IMPORTED_MODULE_12__.Legend,
        {
          sortable: config.gridLayout,
          nodes,
          sort: config.sort,
          onSort: (sort) => {
            setConfig({
              ...config,
              sort
            });
          }
        }
      ) }) : null,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.viewControlsWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _ViewControls__WEBPACK_IMPORTED_MODULE_15__.ViewControls,
        {
          config,
          onConfigChange: handleLayoutChange,
          onMinus: onStepDown,
          onPlus: onStepUp,
          scale,
          disableZoomIn: isMaxZoom,
          disableZoomOut: isMinZoom
        }
      ) })
    ] }),
    hiddenNodesCount > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "div",
      {
        className: styles.alert,
        style: { top: panelId ? "0px" : "40px" },
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("nodeGraph.node-graph.aria-label-nodes-hidden-warning", "Nodes hidden warning"),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "nodeGraph.node-graph.hidden-nodes", count: hiddenNodesCount, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { size: "sm", name: "info-circle" }),
          " ",
          "{{count}}",
          " nodes are hidden for performance reasons."
        ] })
      }
    ),
    config.layoutAlgorithm === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_17__.LayoutAlgorithm.Layered && processed.nodes.length > layeredLayoutThreshold && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "div",
      {
        className: styles.alert,
        style: { top: panelId ? "30px" : "70px" },
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "nodeGraph.node-graph.aria-label-layered-layout-performance-warning",
          "Layered layout performance warning"
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "nodeGraph.node-graph.processed-nodes", count: processed.nodes.length, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { size: "sm", name: "exclamation-triangle" }),
          " Layered layout may be slow with ",
          "{{count}}",
          " nodes."
        ] })
      }
    ),
    MenuComponent
  ] });
}
const Nodes = (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(function Nodes2(props) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: props.nodes.map((n) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _Node__WEBPACK_IMPORTED_MODULE_14__.Node,
    {
      node: n,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      onClick: props.onClick,
      hovering: !props.hoveringIds || props.hoveringIds.length === 0 ? "default" : props.hoveringIds?.includes(n.id) ? "active" : "inactive"
    },
    n.id
  )) });
});
const Markers = (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(function Nodes3(props) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: props.markers.map((m) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Marker__WEBPACK_IMPORTED_MODULE_13__.Marker, { marker: m, onClick: props.onClick }, "marker-" + m.node.id)) });
});
const Edges = (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(function Edges2(props) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: props.edges.map((e, index) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _Edge__WEBPACK_IMPORTED_MODULE_10__.Edge,
      {
        edge: e,
        hovering: e.source.id === props.nodeHoveringId || e.target.id === props.nodeHoveringId || props.edgeHoveringId === e.id,
        onClick: props.onClick,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        svgIdNamespace: props.svgIdNamespace
      },
      `${e.id}-${e.source.y ?? ""}-${props.processedNodesLength}-${props.processedEdgesLength}-${index}`
    );
  }) });
});
const EdgeLabels = (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(function EdgeLabels2(props) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: props.edges.map((e) => {
    const shouldShow = e.source.id === props.nodeHoveringId || e.target.id === props.nodeHoveringId || props.edgeHoveringId === e.id;
    const hasStats = e.mainStat || e.secondaryStat;
    return shouldShow && hasStats && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_EdgeLabel__WEBPACK_IMPORTED_MODULE_11__.EdgeLabel, { edge: e }, e.id);
  }) });
});
function usePanAndZoom(bounds, focus, zoomMode) {
  const { scale, onStepDown, onStepUp, ref, isMax, isMin } = (0,_useZoom__WEBPACK_IMPORTED_MODULE_23__.useZoom)({ zoomMode });
  const { state: panningState, ref: panRef } = (0,_usePanning__WEBPACK_IMPORTED_MODULE_22__.usePanning)({
    scale,
    bounds,
    focus
  });
  const { position, isPanning } = panningState;
  return { zoomRef: ref, panRef, position, isPanning, scale, onStepDown, onStepUp, isMaxZoom: isMax, isMinZoom: isMin };
}
function useHover() {
  const [nodeHover, setNodeHover] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(void 0);
  const clearNodeHover = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => setNodeHover(void 0), [setNodeHover]);
  const [edgeHover, setEdgeHover] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(void 0);
  const clearEdgeHover = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => setEdgeHover(void 0), [setEdgeHover]);
  return { nodeHover, setNodeHover, clearNodeHover, edgeHover, setEdgeHover, clearEdgeHover };
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/NodeGraphPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeGraphPanel: () => (/* binding */ NodeGraphPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _features_explore_utils_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/explore/utils/links.ts");
/* harmony import */ var _NodeGraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/NodeGraph.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/utils.ts");








const NodeGraphPanel = ({ width, height, data, options }) => {
  const getLinks = (0,_features_explore_utils_links__WEBPACK_IMPORTED_MODULE_4__.useLinks)(data.timeRange);
  const panelId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  if (!data || !data.series.length) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "panel-empty", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "nodeGraph.node-graph-panel.no-data-found-in-response", children: "No data found in response" }) }) });
  }
  const memoizedGetNodeGraphDataFrames = (0,memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(_utils__WEBPACK_IMPORTED_MODULE_6__.getNodeGraphDataFrames);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width, height }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _NodeGraph__WEBPACK_IMPORTED_MODULE_5__.NodeGraph,
    {
      dataFrames: memoizedGetNodeGraphDataFrames(data.series, options),
      getLinks,
      panelId,
      zoomMode: options.zoomMode,
      layoutAlgorithm: options.layoutAlgorithm
    }
  ) });
};


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/ViewControls.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewControls: () => (/* binding */ ViewControls)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");






function getStyles() {
  return {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "wrapper",
      pointerEvents: "all"
    })
  };
}
function ViewControls(props) {
  const { config, onConfigChange, onPlus, onMinus, disableZoomOut, disableZoomIn } = props;
  const [showConfig, setShowConfig] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const allowConfiguration = false;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.wrapper, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", gap: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { gap: 0.5, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button,
        {
          icon: "plus-circle",
          onClick: onPlus,
          size: "md",
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("nodeGraph.view-controls.title-zoom-in", "Zoom in"),
          variant: "secondary",
          disabled: disableZoomIn
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button,
        {
          icon: "minus-circle",
          onClick: onMinus,
          size: "md",
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("nodeGraph.view-controls.title-zoom-out", "Zoom out"),
          variant: "secondary",
          disabled: disableZoomOut
        }
      )
    ] }) }),
    allowConfiguration && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { size: "xs", fill: "text", onClick: () => setShowConfig((showConfig2) => !showConfig2), children: showConfig ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("nodeGraph.view-controls.hide-config", "Hide config") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("nodeGraph.view-controls.show-config", "Show config") }),
    allowConfiguration && showConfig && Object.keys(config).filter((k) => k !== "show").map((k) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
      k,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        "input",
        {
          style: { width: 50 },
          type: "number",
          value: config[k],
          onChange: (e) => {
            onConfigChange({ ...config, [k]: parseFloat(e.target.value) });
          }
        }
      )
    ] }, k))
  ] });
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/createLayoutWorker.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMsaglWorker: () => (/* binding */ createMsaglWorker),
/* harmony export */   createWorker: () => (/* binding */ createWorker)
/* harmony export */ });
/* harmony import */ var app_core_utils_CorsWorker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/utils/CorsWorker.ts");


const createWorker = () => new app_core_utils_CorsWorker__WEBPACK_IMPORTED_MODULE_0__.CorsWorker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("public_app_plugins_panel_nodeGraph_layout_worker_js"), __webpack_require__.b));
const createMsaglWorker = () => new app_core_utils_CorsWorker__WEBPACK_IMPORTED_MODULE_0__.CorsWorker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("public_app_plugins_panel_nodeGraph_layeredLayout_worker_js"), __webpack_require__.b));


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/editor/ArcOptionsEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArcOptionsEditor: () => (/* binding */ ArcOptionsEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/ColorPicker/ColorPicker.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/MatchersUI/FieldNamePicker.tsx");






const ArcOptionsEditor = ({ value, onChange, context }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const addArc = () => {
    const newArc = { field: "", color: "" };
    onChange(value ? [...value, newArc] : [newArc]);
  };
  const removeArc = (idx) => {
    const copy = value?.slice();
    copy.splice(idx, 1);
    onChange(copy);
  };
  const updateField = (idx, field, newValue) => {
    let arcs = value?.slice() ?? [];
    arcs[idx][field] = newValue;
    onChange(arcs);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    value?.map((arc, i) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.section, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_6__.FieldNamePicker,
          {
            context,
            value: arc.field ?? "",
            onChange: (val) => {
              updateField(i, "field", val);
            },
            item: {
              settings: {
                filter: (field) => field.name.includes("arc__")
              },
              id: `arc-field-${i}`,
              name: `arc-field-${i}`
            }
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ColorPicker,
          {
            color: arc.color || "#808080",
            onChange: (val) => {
              updateField(i, "color", val);
            }
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button,
          {
            size: "sm",
            icon: "minus",
            variant: "secondary",
            onClick: () => removeArc(i),
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("nodeGraph.arc-options-editor.title-remove-arc", "Remove arc")
          }
        )
      ] }, i);
    }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { size: "sm", icon: "plus", onClick: addArc, variant: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "nodeGraph.arc-options-editor.add-arc", children: "Add arc" }) })
  ] });
};
const getStyles = (theme) => {
  return {
    section: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: `0 ${theme.spacing(1)}`,
      marginBottom: theme.spacing(1)
    })
  };
};


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/layout.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultConfig: () => (/* binding */ defaultConfig),
/* harmony export */   useLayout: () => (/* binding */ useLayout)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useUnmount.js");
/* harmony import */ var react_use_lib_useMountedState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/lib/useMountedState.js");
/* harmony import */ var _createLayoutWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/createLayoutWorker.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/panelcfg.gen.ts");
/* harmony import */ var _useNodeLimit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/useNodeLimit.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/utils.ts");









const defaultConfig = {
  layoutAlgorithm: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__.LayoutAlgorithm.Layered,
  linkDistance: 150,
  linkStrength: 0.5,
  forceX: 2e3,
  forceXStrength: 0.02,
  forceCollide: 100,
  tick: 300,
  gridLayout: false
};
function useLayout(rawNodes, rawEdges, config = defaultConfig, nodeCountLimit, width, rootNodeId, hasFixedPositions, layoutCache) {
  const [nodesGraph, setNodesGraph] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [edgesGraph, setEdgesGraph] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const dataSignatureRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)("");
  const currentSignature = createDataSignature(rawNodes, rawEdges);
  const isMounted = (0,react_use_lib_useMountedState__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const layoutWorkerCancelRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(() => {
    if (layoutWorkerCancelRef.current) {
      layoutWorkerCancelRef.current();
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (rawNodes.length === 0) {
      setNodesGraph([]);
      setEdgesGraph([]);
      setLoading(false);
      return;
    }
    if (hasFixedPositions) {
      setNodesGraph(rawNodes);
      const nodesMap = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.fromPairs)(rawNodes.map((node) => [node.id, node]));
      setEdgesGraph(
        rawEdges.map(
          (e) => ({
            ...e,
            source: nodesMap[e.source],
            target: nodesMap[e.target]
          })
        )
      );
      setLoading(false);
      return;
    }
    let layoutType = "force";
    let algorithmType = _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__.LayoutAlgorithm.Force;
    if (config.layoutAlgorithm === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__.LayoutAlgorithm.Layered) {
      layoutType = "layered";
      algorithmType = _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__.LayoutAlgorithm.Layered;
    }
    const hasDataChanged = dataSignatureRef.current !== currentSignature;
    if (hasDataChanged) {
      dataSignatureRef.current = currentSignature;
      if (layoutCache) {
        delete layoutCache[_panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__.LayoutAlgorithm.Force];
        delete layoutCache[_panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__.LayoutAlgorithm.Layered];
      }
    }
    if (layoutCache && layoutCache[algorithmType]) {
      setNodesGraph(layoutCache[algorithmType]?.nodes ?? []);
      setEdgesGraph(layoutCache[algorithmType]?.edges ?? []);
      setLoading(false);
      return;
    }
    setLoading(true);
    const cancel = layout(rawNodes, rawEdges, layoutType, ({ nodes, edges }) => {
      if (isMounted()) {
        setNodesGraph(nodes);
        setEdgesGraph(edges);
        setLoading(false);
        if (layoutCache) {
          layoutCache[algorithmType] = { nodes, edges };
        }
      }
    });
    layoutWorkerCancelRef.current = cancel;
    return cancel;
  }, [hasFixedPositions, rawNodes, rawEdges, isMounted, config.layoutAlgorithm, layoutCache, currentSignature]);
  const [nodesGrid, edgesGrid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (rawNodes.length === 0) {
      return [[], []];
    }
    const rawNodesCopy = rawNodes.map((n) => ({ ...n }));
    const rawEdgesCopy = rawEdges.map((e) => ({ ...e }));
    gridLayout(rawNodesCopy, width, config.sort);
    return [rawNodesCopy, rawEdgesCopy];
  }, [config.sort, rawNodes, rawEdges, width]);
  const {
    nodes: nodesWithLimit,
    edges: edgesWithLimit,
    markers
  } = (0,_useNodeLimit__WEBPACK_IMPORTED_MODULE_6__.useNodeLimit)(
    config.gridLayout ? nodesGrid : nodesGraph,
    config.gridLayout ? edgesGrid : edgesGraph,
    nodeCountLimit,
    config,
    rootNodeId
  );
  const bounds = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => (0,_utils__WEBPACK_IMPORTED_MODULE_7__.graphBounds)([...nodesWithLimit, ...(markers || []).map((m) => m.node)]),
    [nodesWithLimit, markers]
  );
  return {
    nodes: nodesWithLimit,
    edges: edgesWithLimit,
    markers,
    bounds,
    hiddenNodesCount: rawNodes.length - nodesWithLimit.length,
    loading
  };
}
function layout(nodes, edges, engine, done) {
  const worker = engine === "force" ? (0,_createLayoutWorker__WEBPACK_IMPORTED_MODULE_4__.createWorker)() : (0,_createLayoutWorker__WEBPACK_IMPORTED_MODULE_4__.createMsaglWorker)();
  worker.onmessage = (event) => {
    const nodesMap = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.fromPairs)(nodes.map((node) => [node.id, node]));
    event.data.nodes = event.data.nodes.map((node) => {
      return {
        ...nodesMap[node.id],
        ...node
      };
    });
    done(event.data);
  };
  worker.postMessage({
    nodes: nodes.map((n) => ({
      id: n.id,
      incoming: n.incoming
    })),
    edges,
    config: defaultConfig
  });
  return () => {
    worker.terminate();
  };
}
function gridLayout(nodes, width, sort) {
  const spacingVertical = 140;
  const spacingHorizontal = 120;
  const padding = spacingHorizontal / 2;
  const perRow = Math.min(Math.floor((width - padding * 2) / spacingVertical), nodes.length);
  const midPoint = Math.floor((perRow - 1) * spacingHorizontal / 2);
  if (sort) {
    nodes.sort((node1, node2) => {
      const val1 = sort.field.values[node1.dataFrameRowIndex];
      const val2 = sort.field.values[node2.dataFrameRowIndex];
      return sort.ascending ? val1 - val2 : val2 - val1;
    });
  }
  for (const [index, node] of nodes.entries()) {
    const row = Math.floor(index / perRow);
    const column = index % perRow;
    node.x = column * spacingHorizontal - midPoint;
    node.y = -60 + row * spacingVertical;
  }
}
function createDataSignature(nodes, edges) {
  const signature = [`n:${nodes.length}`, `e:${edges.length}`];
  if (nodes.length > 0) {
    const firstNode = nodes[0].id ?? "";
    signature.push(`f:${firstNode}`);
    if (nodes.length >= 3) {
      const middleIndex = Math.floor(nodes.length / 2);
      const middleNode = nodes[middleIndex].id ?? "";
      signature.push(`m:${middleNode}`);
    }
    const lastNode = nodes[nodes.length - 1].id ?? "";
    signature.push(`l:${lastNode}`);
    let connectedNodesCount = 0;
    let maxConnections = 0;
    for (const node of nodes) {
      const connections = node.incoming || 0;
      if (connections > 0) {
        connectedNodesCount++;
      }
      maxConnections = Math.max(maxConnections, connections);
    }
    signature.push(`cn:${connectedNodesCount}`);
    signature.push(`mc:${maxConnections}`);
  }
  return signature.join("_");
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/fieldOverrides.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _NodeGraphPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/NodeGraphPanel.tsx");
/* harmony import */ var _editor_ArcOptionsEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/editor/ArcOptionsEditor.tsx");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/panelcfg.gen.ts");
/* harmony import */ var _suggestions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/suggestions.ts");







const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_NodeGraphPanel__WEBPACK_IMPORTED_MODULE_3__.NodeGraphPanel).useFieldConfig({
  disableStandardOptions: Object.values(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldConfigProperty).filter((v) => v !== _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldConfigProperty.Links)
}).setPanelOptions((builder, context) => {
  const category = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("node-graph.category-node-graph", "Node graph")];
  builder.addSelect({
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("node-graph.name-zoom-mode", "Zoom mode"),
    category,
    path: "zoomMode",
    defaultValue: "cooperative",
    settings: {
      options: [
        {
          value: "cooperative",
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("node-graph.zoom-mode-options.label-cooperative", "Cooperative"),
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("node-graph.zoom-mode-options.description-cooperative", "Lets you scroll the page normally")
        },
        {
          value: "greedy",
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("node-graph.zoom-mode-options.label-greedy", "Greedy"),
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("node-graph.zoom-mode-options.description-greedy", "Reacts to all zoom gestures")
        }
      ]
    }
  });
  builder.addSelect({
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("node-graph.name-layout-algorithm", "Layout algorithm"),
    category,
    path: "layoutAlgorithm",
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__.LayoutAlgorithm.Layered,
    settings: {
      options: [
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("node-graph.layout-algorithm-options.label-layered", "Layered"),
          value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__.LayoutAlgorithm.Layered,
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("node-graph.layout-algorithm-options.description-layered", "Use a layered layout")
        },
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("node-graph.layout-algorithm-options.label-force", "Force"),
          value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__.LayoutAlgorithm.Force,
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("node-graph.layout-algorithm-options.description-force", "Use a force-directed layout")
        },
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("node-graph.layout-algorithm-options.label-grid", "Grid"),
          value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__.LayoutAlgorithm.Grid,
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("node-graph.layout-algorithm-options.description-grid", "Use a grid layout")
        }
      ]
    }
  });
  builder.addNestedOptions({
    category: [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("node-graph.category-nodes", "Nodes")],
    path: "nodes",
    build: (builder2) => {
      builder2.addUnitPicker({
        name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("node-graph.name-main-stat-unit", "Main stat unit"),
        path: "mainStatUnit"
      });
      builder2.addUnitPicker({
        name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("node-graph.name-secondary-stat-unit", "Secondary stat unit"),
        path: "secondaryStatUnit"
      });
      builder2.addCustomEditor({
        name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("node-graph.name-arc-sections", "Arc sections"),
        path: "arcs",
        id: "arcs",
        editor: _editor_ArcOptionsEditor__WEBPACK_IMPORTED_MODULE_4__.ArcOptionsEditor
      });
    }
  });
  builder.addNestedOptions({
    category: [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("node-graph.category-edges", "Edges")],
    path: "edges",
    build: (builder2) => {
      builder2.addUnitPicker({
        name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("node-graph.name-main-stat-unit", "Main stat unit"),
        path: "mainStatUnit"
      });
      builder2.addUnitPicker({
        name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("node-graph.name-secondary-stat-unit", "Secondary stat unit"),
        path: "secondaryStatUnit"
      });
    }
  });
}).setSuggestionsSupplier(new _suggestions__WEBPACK_IMPORTED_MODULE_6__.NodeGraphSuggestionsSupplier());


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/panelcfg.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutAlgorithm: () => (/* binding */ LayoutAlgorithm),
/* harmony export */   ZoomMode: () => (/* binding */ ZoomMode)
/* harmony export */ });

var ZoomMode = /* @__PURE__ */ ((ZoomMode2) => {
  ZoomMode2["Cooperative"] = "cooperative";
  ZoomMode2["Greedy"] = "greedy";
  return ZoomMode2;
})(ZoomMode || {});
var LayoutAlgorithm = /* @__PURE__ */ ((LayoutAlgorithm2) => {
  LayoutAlgorithm2["Force"] = "force";
  LayoutAlgorithm2["Grid"] = "grid";
  LayoutAlgorithm2["Layered"] = "layered";
  return LayoutAlgorithm2;
})(LayoutAlgorithm || {});


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/suggestions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeGraphSuggestionsSupplier: () => (/* binding */ NodeGraphSuggestionsSupplier)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/panel.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var app_types_suggestions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/types/suggestions.ts");



class NodeGraphSuggestionsSupplier {
  getListWithDefaults(builder) {
    return builder.getListAppender({
      name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_2__.SuggestionName.NodeGraph,
      pluginId: "nodeGraph"
    });
  }
  hasCorrectFields(frames) {
    let hasNodesFrame = false;
    let hasEdgesFrame = false;
    const nodeFields = [
      ["id", _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string],
      ["title", _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string],
      ["mainstat", _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number]
    ];
    const edgeFields = [
      ["id", _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string],
      ["source", _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string],
      ["target", _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string]
    ];
    for (const frame of frames) {
      if (this.checkFields(nodeFields, frame)) {
        hasNodesFrame = true;
      }
      if (this.checkFields(edgeFields, frame)) {
        hasEdgesFrame = true;
      }
    }
    return hasNodesFrame && hasEdgesFrame;
  }
  checkFields(fields, frame) {
    let hasCorrectFields = true;
    for (const field of fields) {
      const [name, type] = field;
      const frameField = frame.fields.find((f) => f.name === name);
      if (!frameField || type !== frameField.type) {
        hasCorrectFields = false;
        break;
      }
    }
    return hasCorrectFields;
  }
  getSuggestionsForData(builder) {
    if (!builder.data) {
      return;
    }
    const hasCorrectFields = this.hasCorrectFields(builder.data.series);
    const nodeGraphFrames = builder.data.series.filter(
      (df) => df.meta && df.meta.preferredVisualisationType === "nodeGraph"
    );
    if (hasCorrectFields || nodeGraphFrames.length === 2) {
      this.getListWithDefaults(builder).append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_2__.SuggestionName.NodeGraph,
        score: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.VisualizationSuggestionScore.Best
      });
    }
  }
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/useCategorizeFrames.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCategorizeFrames: () => (/* binding */ useCategorizeFrames)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/utils.ts");



function useCategorizeFrames(series) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getGraphFrame)(series);
  }, [series]);
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/useContextMenu.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLabelStyles: () => (/* binding */ getLabelStyles),
/* harmony export */   useContextMenu: () => (/* binding */ useContextMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/ContextMenu/ContextMenu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/MenuGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/MenuItem.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/utils.ts");







function useContextMenu(getLinks, nodes, edges, config, setConfig, setFocusedNodeId) {
  const [menu, setMenu] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(void 0);
  const onNodeOpen = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (event, node) => {
      const [label, showGridLayout] = config.gridLayout ? ["Show in Graph layout", false] : ["Show in Grid layout", true];
      const extraNodeItem = [
        {
          label,
          onClick: (node2) => {
            setFocusedNodeId(node2.id);
            setConfig({ ...config, gridLayout: showGridLayout });
            setMenu(void 0);
          }
        }
      ];
      const links = nodes ? getLinks(nodes, node.dataFrameRowIndex) : [];
      const renderer = getItemsRenderer(links, node, extraNodeItem);
      setMenu(makeContextMenu(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NodeHeader, { node, nodes }), event, setMenu, renderer));
    },
    [config, nodes, getLinks, setMenu, setConfig, setFocusedNodeId]
  );
  const onEdgeOpen = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (event, edge) => {
      if (!edges) {
        return;
      }
      const links = getLinks(edges, edge.dataFrameRowIndex);
      const renderer = getItemsRenderer(links, edge);
      setMenu(makeContextMenu(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EdgeHeader, { edge, edges }), event, setMenu, renderer));
    },
    [edges, getLinks, setMenu]
  );
  return { onEdgeOpen, onNodeOpen, MenuComponent: menu };
}
function makeContextMenu(header, event, setMenu, renderer) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ContextMenu,
    {
      renderHeader: () => header,
      renderMenuItems: renderer,
      onClose: () => setMenu(void 0),
      x: event.pageX,
      y: event.pageY - window.scrollY
    }
  );
}
function getItemsRenderer(links, item, extraItems) {
  if (!(links.length || extraItems?.length)) {
    return void 0;
  }
  const items = getItems(links);
  return () => {
    let groups = items?.map((group, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.MenuGroup, { label: group.label, children: (group.items || []).map(mapMenuItem(item)) }, `${group.label}${index}`));
    if (extraItems) {
      groups = [...extraItems.map(mapMenuItem(item)), ...groups];
    }
    return groups;
  };
}
function mapMenuItem(item) {
  return function NodeGraphMenuItem(link) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.MenuItem,
      {
        url: link.url,
        label: link.label,
        ariaLabel: link.ariaLabel,
        onClick: link.onClick ? (event) => {
          if (!(event?.ctrlKey || event?.metaKey || event?.shiftKey)) {
            event?.preventDefault();
            event?.stopPropagation();
            link.onClick?.(item);
          }
        } : void 0,
        target: link.target || "_self"
      },
      link.label
    );
  };
}
function getItems(links) {
  const defaultGroup = "Open in Explore";
  const groups = links.reduce((acc, l) => {
    let group;
    let title;
    if (l.title.indexOf("/") !== -1) {
      group = l.title.split("/")[0];
      title = l.title.split("/")[1];
      acc[group] = acc[group] || [];
      acc[group].push({ l, newTitle: title });
    } else {
      acc[defaultGroup] = acc[defaultGroup] || [];
      acc[defaultGroup].push({ l });
    }
    return acc;
  }, {});
  return Object.keys(groups).map((key) => {
    return {
      label: key,
      ariaLabel: key,
      items: groups[key].map((link) => ({
        label: link.newTitle || link.l.title,
        ariaLabel: link.newTitle || link.l.title,
        url: link.l.href,
        onClick: link.l.onClick,
        target: link.l.target
      }))
    };
  });
}
function FieldRow({ field, index }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    HeaderRow,
    {
      label: field.config?.displayName || field.name,
      value: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.statToString)(field.config, field.values[index] || "")
    }
  );
}
function HeaderRow({ label, value }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getLabelStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { className: styles.label, children: [
      label,
      ": "
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: styles.value, children: value })
  ] });
}
function NodeHeader({ node, nodes }) {
  const rows = [];
  if (nodes) {
    const fields = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getNodeFields)(nodes);
    for (const f of [fields.title, fields.subTitle, fields.mainStat, fields.secondaryStat, ...fields.details]) {
      if (f && f.values[node.dataFrameRowIndex]) {
        rows.push(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FieldRow, { field: f, index: node.dataFrameRowIndex }, f.name));
      }
    }
  } else {
    if (node.title) {
      rows.push(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeaderRow, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("nodeGraph.node-header.label-title", "Title"), value: node.title }, "title"));
    }
    if (node.subTitle) {
      rows.push(
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeaderRow, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("nodeGraph.node-header.label-subtitle", "Subtitle"), value: node.subTitle }, "subtitle")
      );
    }
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("table", { style: { width: "100%" }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: rows }) });
}
function EdgeHeader(props) {
  const index = props.edge.dataFrameRowIndex;
  const fields = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getEdgeFields)(props.edges);
  const valueSource = fields.source?.values[index] || "";
  const valueTarget = fields.target?.values[index] || "";
  const rows = [];
  if (valueSource && valueTarget) {
    rows.push(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        HeaderRow,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("nodeGraph.edge-header.label-source-target", "Source \u2192 Target"),
          value: `${valueSource} \u2192 ${valueTarget}`
        },
        "header-row"
      )
    );
  }
  for (const f of [fields.mainStat, fields.secondaryStat, ...fields.details]) {
    if (f && f.values[index]) {
      rows.push(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FieldRow, { field: f, index }, `field-row-${index}`));
    }
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("table", { style: { width: "100%" }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: rows }) });
}
const getLabelStyles = (theme) => {
  return {
    label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "Label",
      lineHeight: 1.25,
      color: theme.colors.text.disabled,
      fontSize: theme.typography.size.sm,
      fontWeight: theme.typography.fontWeightMedium,
      paddingRight: theme.spacing(1)
    }),
    value: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "Value",
      fontSize: theme.typography.size.sm,
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.colors.text.primary
    })
  };
};


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/useFocusPositionOnLayout.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFocusPositionOnLayout: () => (/* binding */ useFocusPositionOnLayout)
/* harmony export */ });
/* harmony import */ var react_use_lib_usePrevious__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-use/lib/usePrevious.js");


function useFocusPositionOnLayout(config, nodes, focusedNodeId) {
  const prevLayoutGrid = (0,react_use_lib_usePrevious__WEBPACK_IMPORTED_MODULE_0__["default"])(config.gridLayout);
  let focusPosition;
  if (prevLayoutGrid === true && !config.gridLayout && focusedNodeId) {
    const node = nodes.find((n) => n.id === focusedNodeId);
    if (node) {
      focusPosition = {
        x: -node.x,
        y: -node.y
      };
    }
  }
  return focusPosition;
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/useHighlight.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useHighlight: () => (/* binding */ useHighlight)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use_lib_useMountedState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-use/lib/useMountedState.js");



function useHighlight(focusedNodeId) {
  const [highlightId, setHighlightId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const mounted = (0,react_use_lib_useMountedState__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (focusedNodeId) {
      setHighlightId(focusedNodeId);
      setTimeout(() => {
        if (mounted()) {
          setHighlightId(void 0);
        }
      }, 500);
    }
  }, [focusedNodeId, mounted]);
  return highlightId;
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/useNodeLimit.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   limitGraphLayout: () => (/* binding */ limitGraphLayout),
/* harmony export */   limitGridLayout: () => (/* binding */ limitGridLayout),
/* harmony export */   useNodeLimit: () => (/* binding */ useNodeLimit)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function useNodeLimit(nodes, edges, limit, config, rootId) {
  const [edgesMap, nodesMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!(nodes.length && edges.length)) {
      return [{}, {}];
    }
    const edgesMap2 = edges.reduce((acc, e) => {
      acc[e.source.id] = [...acc[e.source.id] ?? [], e];
      acc[e.target.id] = [...acc[e.target.id] ?? [], e];
      return acc;
    }, {});
    const nodesMap2 = nodes.reduce((acc, node) => {
      acc[node.id] = node;
      return acc;
    }, {});
    return [edgesMap2, nodesMap2];
  }, [edges, nodes]);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (nodes.length <= limit) {
      return { nodes, edges };
    }
    if (config.gridLayout) {
      return limitGridLayout(nodes, limit, rootId);
    }
    return limitGraphLayout(nodes, edges, nodesMap, edgesMap, limit, rootId);
  }, [edges, edgesMap, limit, nodes, nodesMap, rootId, config.gridLayout]);
}
function limitGraphLayout(nodes, edges, nodesMap, edgesMap, limit, rootId) {
  let roots;
  if (rootId) {
    roots = [nodesMap[rootId]];
  } else {
    roots = nodes.filter((n) => n.incoming === 0);
    if (!roots.length) {
      roots = [nodes[0]];
    }
  }
  const { visibleNodes, markers } = collectVisibleNodes(limit, roots, nodesMap, edgesMap);
  const markersWithStats = collectMarkerStats(markers, visibleNodes, nodesMap, edgesMap);
  const markersMap = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.fromPairs)(markersWithStats.map((m) => [m.node.id, m]));
  for (const marker of markersWithStats) {
    if (marker.count === 1) {
      delete markersMap[marker.node.id];
      visibleNodes[marker.node.id] = marker.node;
    }
  }
  const visibleEdges = edges.filter(
    (e) => (visibleNodes[e.source.id] || markersMap[e.source.id]) && (visibleNodes[e.target.id] || markersMap[e.target.id])
  );
  return {
    nodes: Object.values(visibleNodes),
    edges: visibleEdges,
    markers: Object.values(markersMap)
  };
}
function limitGridLayout(nodes, limit, rootId) {
  let start = 0;
  let stop = limit;
  let markers = [];
  if (rootId) {
    const index = nodes.findIndex((node) => node.id === rootId);
    const prevLimit = Math.floor(limit / 2);
    let afterLimit = prevLimit;
    start = index - prevLimit;
    if (start < 0) {
      afterLimit += Math.abs(start);
      start = 0;
    }
    stop = index + afterLimit + 1;
    if (stop > nodes.length) {
      if (start > 0) {
        start = Math.max(0, start - (stop - nodes.length));
      }
      stop = nodes.length;
    }
    if (start > 1) {
      markers.push({ node: nodes[start - 1], count: start });
    }
    if (nodes.length - stop > 1) {
      markers.push({ node: nodes[stop], count: nodes.length - stop });
    }
  } else {
    if (nodes.length - limit > 1) {
      markers = [{ node: nodes[limit], count: nodes.length - limit }];
    }
  }
  return {
    nodes: nodes.slice(start, stop),
    edges: [],
    markers
  };
}
function collectVisibleNodes(limit, roots, nodesMap, edgesMap) {
  const visibleNodes = {};
  let stack = [...roots];
  while (Object.keys(visibleNodes).length < limit && stack.length > 0) {
    let current = stack.shift();
    if (visibleNodes[current.id]) {
      continue;
    }
    visibleNodes[current.id] = current;
    const edges = edgesMap[current.id] || [];
    const connectedNodes = edges.map((e) => {
      const id = e.source.id === current.id ? e.target.id : e.source.id;
      return nodesMap[id];
    });
    stack = stack.concat(connectedNodes);
  }
  const markers = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniq)(stack.filter((n) => !visibleNodes[n.id]));
  return { visibleNodes, markers };
}
function collectMarkerStats(markers, visibleNodes, nodesMap, edgesMap) {
  return markers.map((marker) => {
    const nodesToCount = {};
    let count = 0;
    let stack = [marker];
    while (stack.length > 0 && count <= 101) {
      let current = stack.shift();
      if (visibleNodes[current.id] || nodesToCount[current.id]) {
        continue;
      }
      if (!nodesToCount[current.id]) {
        count++;
      }
      nodesToCount[current.id] = current;
      const edges = edgesMap[current.id] || [];
      const connectedNodes = edges.map((e) => {
        const id = e.source.id === current.id ? e.target.id : e.source.id;
        return nodesMap[id];
      });
      stack = stack.concat(connectedNodes);
    }
    return {
      node: marker,
      count
    };
  });
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/usePanning.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePanning: () => (/* binding */ usePanning)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use_lib_useMountedState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-use/lib/useMountedState.js");
/* harmony import */ var react_use_lib_usePrevious__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/lib/usePrevious.js");




function usePanning({ scale = 1, bounds, focus } = {}) {
  const isMounted = (0,react_use_lib_useMountedState__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const isPanning = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const frame = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const panRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const initial = { x: 0, y: 0 };
  const viewBounds = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
    () => ({
      right: bounds ? -bounds.left : Infinity,
      left: bounds ? -bounds.right : -Infinity,
      bottom: bounds ? -bounds.top : -Infinity,
      top: bounds ? -bounds.bottom : Infinity
    }),
    [bounds]
  );
  const startMousePosition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initial);
  const prevPosition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initial);
  const currentPosition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initial);
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    isPanning: false,
    position: initial
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const startPanning = (event) => {
      if (!isPanning.current && isMounted()) {
        isPanning.current = true;
        startMousePosition.current = getEventXY(event);
        prevPosition.current = { ...currentPosition.current };
        setState((state2) => ({ ...state2, isPanning: true }));
        bindEvents();
      }
    };
    const stopPanning = () => {
      if (isPanning.current && isMounted()) {
        isPanning.current = false;
        setState((state2) => ({ ...state2, isPanning: false }));
        unbindEvents();
      }
    };
    const onPanStart = (event) => {
      startPanning(event);
      onPan(event);
    };
    const bindEvents = () => {
      document.addEventListener("mousemove", onPan);
      document.addEventListener("mouseup", stopPanning);
      document.addEventListener("touchmove", onPan);
      document.addEventListener("touchend", stopPanning);
    };
    const unbindEvents = () => {
      document.removeEventListener("mousemove", onPan);
      document.removeEventListener("mouseup", stopPanning);
      document.removeEventListener("touchmove", onPan);
      document.removeEventListener("touchend", stopPanning);
    };
    const onPan = (event) => {
      cancelAnimationFrame(frame.current);
      const pos = getEventXY(event);
      frame.current = requestAnimationFrame(() => {
        if (isMounted() && panRef.current) {
          let xDiff = pos.x - startMousePosition.current.x;
          let yDiff = pos.y - startMousePosition.current.y;
          currentPosition.current = {
            x: inBounds(prevPosition.current.x + xDiff / scale, viewBounds.left, viewBounds.right),
            y: inBounds(prevPosition.current.y + yDiff / scale, viewBounds.top, viewBounds.bottom)
          };
          setState((state2) => ({
            ...state2,
            position: {
              ...currentPosition.current
            }
          }));
        }
      });
    };
    const ref = panRef.current;
    if (ref) {
      ref.addEventListener("mousedown", onPanStart);
      ref.addEventListener("touchstart", onPanStart);
    }
    return () => {
      if (ref) {
        ref.removeEventListener("mousedown", onPanStart);
        ref.removeEventListener("touchstart", onPanStart);
      }
    };
  }, [scale, viewBounds, isMounted]);
  const previousFocus = (0,react_use_lib_usePrevious__WEBPACK_IMPORTED_MODULE_2__["default"])(focus);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (focus && previousFocus?.x !== focus.x && previousFocus?.y !== focus.y) {
      const position2 = {
        x: inBounds(focus.x, viewBounds.left, viewBounds.right),
        y: inBounds(focus.y, viewBounds.top, viewBounds.bottom)
      };
      setState({
        position: position2,
        isPanning: false
      });
      currentPosition.current = position2;
      prevPosition.current = position2;
    }
  }, [focus, previousFocus, viewBounds, currentPosition, prevPosition]);
  let position = state.position;
  if (focus && previousFocus?.x !== focus.x && previousFocus?.y !== focus.y) {
    position = focus;
  }
  return {
    state: {
      ...state,
      position: {
        x: inBounds(position.x, viewBounds.left, viewBounds.right),
        y: inBounds(position.y, viewBounds.top, viewBounds.bottom)
      }
    },
    ref: panRef
  };
}
function inBounds(value, min, max) {
  return Math.min(Math.max(value, min ?? -Infinity), max ?? Infinity);
}
function getEventXY(event) {
  if ("changedTouches" in event && event instanceof TouchEvent) {
    return { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY };
  } else if (event instanceof MouseEvent) {
    return { x: event.clientX, y: event.clientY };
  }
  return { x: 0, y: 0 };
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/useZoom.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useZoom: () => (/* binding */ useZoom)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/panelcfg.gen.ts");



const defaultOptions = {
  stepUp: (s) => s * 1.5,
  stepDown: (s) => s / 1.5,
  min: 0.13,
  max: 2.25,
  zoomMode: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__.ZoomMode.Cooperative
};
function useZoom(options = defaultOptions) {
  const { min, max, zoomMode } = { ...defaultOptions, ...options };
  const stepUp = options.stepUp ?? defaultOptions.stepUp;
  const stepDown = options.stepDown ?? defaultOptions.stepDown;
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [scale, setScale] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const onStepUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (scale < (max ?? Infinity)) {
      setScale(stepUp(scale));
    }
  }, [scale, stepUp, max]);
  const onStepDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (scale > (min ?? -Infinity)) {
      setScale(stepDown(scale));
    }
  }, [scale, stepDown, min]);
  const onWheel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    function(wheelEvent) {
      if (wheelEvent.ctrlKey || wheelEvent.metaKey || zoomMode === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_1__.ZoomMode.Greedy) {
        wheelEvent.preventDefault();
        setScale(Math.min(Math.max(min ?? -Infinity, scale + Math.min(wheelEvent.deltaY, 2) * -0.01), max ?? Infinity));
        if (wheelEvent.deltaY < 0) {
          const newScale = scale + Math.max(wheelEvent.deltaY, -4) * -0.015;
          setScale(Math.max(min ?? -Infinity, newScale));
        } else if (wheelEvent.deltaY > 0) {
          const newScale = scale + Math.min(wheelEvent.deltaY, 4) * -0.015;
          setScale(Math.min(max ?? Infinity, newScale));
        }
      }
    },
    [min, max, scale, zoomMode]
  );
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!ref.current) {
      return;
    }
    const zoomRef = ref.current;
    zoomRef.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      if (zoomRef) {
        zoomRef.removeEventListener("wheel", onWheel);
      }
    };
  }, [onWheel]);
  return {
    onStepUp,
    onStepDown,
    scale: Math.max(Math.min(scale, max ?? Infinity), min ?? -Infinity),
    isMax: scale >= (max ?? Infinity),
    isMin: scale <= (min ?? -Infinity),
    ref
  };
}


/***/ }),

/***/ "./public/app/plugins/panel/nodeGraph/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyOptionsToFrames: () => (/* binding */ applyOptionsToFrames),
/* harmony export */   findConnectedNodesForEdge: () => (/* binding */ findConnectedNodesForEdge),
/* harmony export */   findConnectedNodesForNode: () => (/* binding */ findConnectedNodesForNode),
/* harmony export */   getEdgeFields: () => (/* binding */ getEdgeFields),
/* harmony export */   getGraphFrame: () => (/* binding */ getGraphFrame),
/* harmony export */   getNodeFields: () => (/* binding */ getNodeFields),
/* harmony export */   getNodeGraphDataFrames: () => (/* binding */ getNodeGraphDataFrames),
/* harmony export */   graphBounds: () => (/* binding */ graphBounds),
/* harmony export */   makeEdgesDataFrame: () => (/* binding */ makeEdgesDataFrame),
/* harmony export */   makeNodesDataFrame: () => (/* binding */ makeNodesDataFrame),
/* harmony export */   processNodes: () => (/* binding */ processNodes),
/* harmony export */   shortenLine: () => (/* binding */ shortenLine),
/* harmony export */   statToString: () => (/* binding */ statToString)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/dataframe/FieldCache.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/dataframe/MutableDataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/utils/nodeGraph.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/nodeGraph/Node.tsx");



function shortenLine(line, sourceNodeRadius, targetNodeRadius, arrowHeadHeight = 1) {
  const vx = line.x2 - line.x1;
  const vy = line.y2 - line.y1;
  const mag = Math.sqrt(vx * vx + vy * vy);
  const cosine = (line.x2 - line.x1) / mag;
  const sine = (line.y2 - line.y1) / mag;
  const scaledThickness = arrowHeadHeight - arrowHeadHeight / 10;
  return {
    x1: line.x1 + cosine * (sourceNodeRadius + 5),
    y1: line.y1 + sine * (sourceNodeRadius + 5),
    x2: line.x2 - cosine * (targetNodeRadius + 3 + scaledThickness),
    y2: line.y2 - sine * (targetNodeRadius + 3 + scaledThickness)
  };
}
function getNodeFields(nodes) {
  const normalizedFrames = {
    ...nodes,
    fields: nodes.fields.map((field) => ({ ...field, name: field.name.toLowerCase() }))
  };
  const fieldsCache = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldCache(normalizedFrames);
  return {
    id: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.id.toLowerCase()),
    title: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.title.toLowerCase()),
    subTitle: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.subTitle.toLowerCase()),
    mainStat: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.mainStat.toLowerCase()),
    secondaryStat: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.secondaryStat.toLowerCase()),
    arc: findFieldsByPrefix(nodes, _grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.arc),
    details: findFieldsByPrefix(nodes, _grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.detail),
    color: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.color),
    icon: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.icon),
    nodeRadius: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.nodeRadius.toLowerCase()),
    highlighted: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.highlighted.toLowerCase()),
    fixedX: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.fixedX.toLowerCase()),
    fixedY: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.fixedY.toLowerCase()),
    isInstrumented: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.isInstrumented.toLowerCase())
  };
}
function getEdgeFields(edges) {
  const normalizedFrames = {
    ...edges,
    fields: edges.fields.map((field) => ({ ...field, name: field.name.toLowerCase() }))
  };
  const fieldsCache = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldCache(normalizedFrames);
  return {
    id: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.id.toLowerCase()),
    source: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.source.toLowerCase()),
    target: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.target.toLowerCase()),
    mainStat: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.mainStat.toLowerCase()),
    secondaryStat: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.secondaryStat.toLowerCase()),
    details: findFieldsByPrefix(edges, _grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.detail.toLowerCase()),
    // @deprecated -- for edges use color instead
    highlighted: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.highlighted.toLowerCase()),
    thickness: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.thickness.toLowerCase()),
    color: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.color.toLowerCase()),
    strokeDasharray: fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.strokeDasharray.toLowerCase())
  };
}
function findFieldsByPrefix(frame, prefix) {
  return frame.fields.filter((f) => f.name.match(new RegExp("^" + prefix)));
}
function processNodes(nodes, edges) {
  if (!(edges || nodes)) {
    return { nodes: [], edges: [] };
  }
  if (nodes) {
    const nodeFields = getNodeFields(nodes);
    if (!nodeFields.id) {
      throw new Error("id field is required for nodes data frame.");
    }
    const hasFixedPositions = nodeFields.fixedX && nodeFields.fixedX.values.every((v) => Number.isFinite(v)) && nodeFields.fixedY && nodeFields.fixedY.values.every((v) => Number.isFinite(v));
    if (!hasFixedPositions) {
      const somePosFilled = nodeFields.fixedX && nodeFields.fixedX.values.some((v) => Number.isFinite(v)) || nodeFields.fixedY && nodeFields.fixedY.values.some((v) => Number.isFinite(v));
      if (somePosFilled) {
        throw new Error("If fixedX and fixedY fields are present, the values have to be all filled and valid");
      }
    }
    const nodesMap = {};
    for (let i = 0; i < nodeFields.id.values.length; i++) {
      const id = nodeFields.id.values[i];
      nodesMap[id] = makeNodeDatum(id, nodeFields, i);
    }
    let edgeDatums = edges ? processEdges(edges, getEdgeFields(edges), nodesMap) : [];
    for (const e of edgeDatums) {
      nodesMap[e.target].incoming++;
    }
    return {
      nodes: Object.values(nodesMap),
      edges: edgeDatums,
      hasFixedPositions,
      legend: nodeFields.arc.map((f) => {
        return {
          color: f.config.color?.fixedColor ?? "",
          name: f.config.displayName || f.name
        };
      })
    };
  } else {
    edges = edges;
    const nodesMap = {};
    const edgeFields = getEdgeFields(edges);
    for (let i = 0; i < edges.length; i++) {
      const { source, target } = makeNodeDatumsFromEdge(edgeFields, i);
      nodesMap[target.id] = nodesMap[target.id] || target;
      nodesMap[source.id] = nodesMap[source.id] || source;
      if (computableField(edgeFields.mainStat)) {
        nodesMap[target.id].mainStatNumeric = (nodesMap[target.id].mainStatNumeric ?? 0) + edgeFields.mainStat.values[i];
      }
      if (computableField(edgeFields.secondaryStat)) {
        nodesMap[target.id].secondaryStatNumeric = (nodesMap[target.id].secondaryStatNumeric ?? 0) + edgeFields.secondaryStat.values[i];
      }
      nodesMap[target.id].incoming++;
    }
    let edgeDatums = processEdges(edges, edgeFields, nodesMap);
    const nodes2 = normalizeStatsForNodes(nodesMap, edgeFields);
    return {
      nodes: nodes2,
      edges: edgeDatums,
      // Edge-only datasets never have fixedX/fixedY
      hasFixedPositions: false
    };
  }
}
function processEdges(edges, edgeFields, nodesMap) {
  if (!edgeFields.id) {
    throw new Error("id field is required for edges data frame.");
  }
  return edgeFields.id.values.map((id, index) => {
    const target = edgeFields.target?.values[index];
    const source = edgeFields.source?.values[index];
    const sourceNode = nodesMap[source];
    const targetNode = nodesMap[target];
    return {
      id,
      dataFrameRowIndex: index,
      source,
      target,
      sourceNodeRadius: !sourceNode.nodeRadius ? _Node__WEBPACK_IMPORTED_MODULE_5__.nodeR : sourceNode.nodeRadius.values[sourceNode.dataFrameRowIndex],
      targetNodeRadius: !targetNode.nodeRadius ? _Node__WEBPACK_IMPORTED_MODULE_5__.nodeR : targetNode.nodeRadius.values[targetNode.dataFrameRowIndex],
      mainStat: edgeFields.mainStat ? statToString(edgeFields.mainStat.config, edgeFields.mainStat.values[index]) : "",
      secondaryStat: edgeFields.secondaryStat ? statToString(edgeFields.secondaryStat.config, edgeFields.secondaryStat.values[index]) : "",
      // @deprecated -- for edges use color instead
      highlighted: edgeFields.highlighted?.values[index] || false,
      thickness: edgeFields.thickness?.values[index] || 1,
      color: edgeFields.color?.values[index],
      strokeDasharray: edgeFields.strokeDasharray?.values[index]
    };
  });
}
function computableField(field) {
  return field && field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.number;
}
function normalizeStatsForNodes(nodesMap, edgeFields) {
  const secondaryStatValues = [];
  const mainStatValues = [];
  const secondaryStatField = computableField(edgeFields.secondaryStat) ? {
    ...edgeFields.secondaryStat,
    values: secondaryStatValues
  } : void 0;
  const mainStatField = computableField(edgeFields.mainStat) ? {
    ...edgeFields.mainStat,
    values: mainStatValues
  } : void 0;
  return Object.values(nodesMap).map((node, index) => {
    if (mainStatField || secondaryStatField) {
      const newNode = {
        ...node
      };
      if (mainStatField) {
        newNode.mainStat = mainStatField;
        mainStatValues.push(node.mainStatNumeric);
        newNode.dataFrameRowIndex = index;
      }
      if (secondaryStatField) {
        newNode.secondaryStat = secondaryStatField;
        secondaryStatValues.push(node.secondaryStatNumeric);
        newNode.dataFrameRowIndex = index;
      }
      return newNode;
    }
    return node;
  });
}
function makeNodeDatumsFromEdge(edgeFields, index) {
  const targetId = edgeFields.target?.values[index];
  const sourceId = edgeFields.source?.values[index];
  return {
    target: makeSimpleNodeDatum(targetId, index),
    source: makeSimpleNodeDatum(sourceId, index)
  };
}
function makeSimpleNodeDatum(name, index) {
  return {
    id: name,
    title: name,
    subTitle: "",
    dataFrameRowIndex: index,
    incoming: 0,
    arcSections: [],
    highlighted: false
  };
}
function makeNodeDatum(id, nodeFields, index) {
  return {
    id,
    title: nodeFields.title?.values[index] || "",
    subTitle: nodeFields.subTitle?.values[index] || "",
    dataFrameRowIndex: index,
    incoming: 0,
    mainStat: nodeFields.mainStat,
    secondaryStat: nodeFields.secondaryStat,
    arcSections: nodeFields.arc,
    color: nodeFields.color,
    icon: nodeFields.icon?.values[index] || "",
    nodeRadius: nodeFields.nodeRadius,
    highlighted: nodeFields.highlighted?.values[index] || false,
    x: nodeFields.fixedX?.values[index] ?? void 0,
    y: nodeFields.fixedY?.values[index] ?? void 0,
    isInstrumented: nodeFields.isInstrumented?.values[index] ?? true
  };
}
function statToString(config, value) {
  if (typeof value === "string") {
    return value;
  } else {
    const decimals = config.decimals || 2;
    if (Number.isFinite(value)) {
      return value.toFixed(decimals) + (config.unit ? " " + config.unit : "");
    } else {
      return "";
    }
  }
}
function makeNodesDataFrame(count, partialNodes = []) {
  const frame = nodesFrame();
  for (let i = 0; i < count; i++) {
    frame.add(makeNode(i, partialNodes[i]));
  }
  return frame;
}
function makeNode(index, partialNode = {}) {
  return {
    id: index.toString(),
    title: `service:${index}`,
    subtitle: "service",
    arc__success: 0.5,
    arc__errors: 0.5,
    mainstat: 0.1,
    secondarystat: 2,
    color: 0.5,
    icon: "database",
    noderadius: 40,
    isinstrumented: true,
    ...partialNode
  };
}
function nodesFrame() {
  const fields = {
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.id]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.title]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.subTitle]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.mainStat]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.number
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.secondaryStat]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.number
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.arc + "success"]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.number,
      config: { color: { mode: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldColorModeId.Fixed, fixedColor: "green" } }
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.arc + "errors"]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.number,
      config: { color: { mode: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldColorModeId.Fixed, fixedColor: "red" } }
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.color]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.number,
      config: { color: { mode: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldColorModeId.ContinuousGrYlRd } }
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.icon]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.nodeRadius]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.number
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.isInstrumented]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.boolean
    }
  };
  return new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.MutableDataFrame({
    name: "nodes",
    fields: Object.entries(fields).map(([key, value]) => ({
      ...value,
      name: key
    }))
  });
}
function makeEdgesDataFrame(edges) {
  const frame = edgesFrame();
  for (const edge of edges) {
    frame.add({
      id: edge.source + "--" + edge.target,
      ...edge
    });
  }
  return frame;
}
function edgesFrame() {
  const fields = {
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.id]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.source]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.target]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.mainStat]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.number
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.secondaryStat]: {
      values: [],
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.number
    }
  };
  return new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.MutableDataFrame({
    name: "edges",
    fields: Object.entries(fields).map(([key, value]) => ({
      ...value,
      name: key
    }))
  });
}
function graphBounds(nodes) {
  if (nodes.length === 0) {
    return { top: 0, right: 0, bottom: 0, left: 0, center: { x: 0, y: 0 } };
  }
  const bounds = nodes.reduce(
    (acc, node) => {
      if (node.x > acc.right) {
        acc.right = node.x;
      }
      if (node.x < acc.left) {
        acc.left = node.x;
      }
      if (node.y > acc.bottom) {
        acc.bottom = node.y;
      }
      if (node.y < acc.top) {
        acc.top = node.y;
      }
      return acc;
    },
    { top: Infinity, right: -Infinity, bottom: -Infinity, left: Infinity }
  );
  const y = bounds.top + (bounds.bottom - bounds.top) / 2;
  const x = bounds.left + (bounds.right - bounds.left) / 2;
  return {
    ...bounds,
    center: {
      x,
      y
    }
  };
}
function getNodeGraphDataFrames(frames, options) {
  let nodeGraphFrames = frames.filter((frame) => {
    if (frame.meta?.preferredVisualisationType === "nodeGraph") {
      return true;
    }
    if (frame.name === "nodes" || frame.name === "edges" || frame.refId === "nodes" || frame.refId === "edges") {
      return true;
    }
    const fieldsCache = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldCache(frame);
    if (fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.id)) {
      return true;
    }
    return false;
  });
  if (options) {
    nodeGraphFrames = applyOptionsToFrames(nodeGraphFrames, options);
  }
  return nodeGraphFrames;
}
const applyOptionsToFrames = (frames, options) => {
  return frames.map((frame) => {
    const fieldsCache = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldCache(frame);
    if (fieldsCache.getFieldByName(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.source.toLowerCase())) {
      if (options?.edges?.mainStatUnit) {
        const field = frame.fields.find((field2) => field2.name.toLowerCase() === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.mainStat);
        if (field) {
          field.config = { ...field.config, unit: options.edges.mainStatUnit };
        }
      }
      if (options?.edges?.secondaryStatUnit) {
        const field = frame.fields.find(
          (field2) => field2.name.toLowerCase() === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.secondaryStat
        );
        if (field) {
          field.config = { ...field.config, unit: options.edges.secondaryStatUnit };
        }
      }
    } else {
      if (options?.nodes?.mainStatUnit) {
        const field = frame.fields.find((field2) => field2.name.toLowerCase() === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.mainStat);
        if (field) {
          field.config = { ...field.config, unit: options.nodes.mainStatUnit };
        }
      }
      if (options?.nodes?.secondaryStatUnit) {
        const field = frame.fields.find(
          (field2) => field2.name.toLowerCase() === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.NodeGraphDataFrameFieldNames.secondaryStat
        );
        if (field) {
          field.config = { ...field.config, unit: options.nodes.secondaryStatUnit };
        }
      }
      if (options?.nodes?.arcs?.length) {
        for (const arc of options.nodes.arcs) {
          const field = frame.fields.find((field2) => field2.name.toLowerCase() === arc.field?.toLowerCase());
          if (field && arc.color) {
            field.config = { ...field.config, color: { fixedColor: arc.color, mode: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldColorModeId.Fixed } };
          }
        }
      }
    }
    return frame;
  });
};
const findConnectedNodesForEdge = (nodes, edges, edgeId) => {
  const edge = edges.find((edge2) => edge2.id === edgeId);
  if (edge) {
    return [
      ...new Set(nodes.filter((node) => edge.source === node.id || edge.target === node.id).map((node) => node.id))
    ];
  }
  return [];
};
const findConnectedNodesForNode = (nodes, edges, nodeId) => {
  const node = nodes.find((node2) => node2.id === nodeId);
  if (node) {
    const linkedEdges = edges.filter((edge) => edge.source === node.id || edge.target === node.id);
    return [
      ...new Set(
        linkedEdges.flatMap(
          (edge) => nodes.filter((n) => edge.source === n.id || edge.target === n.id).map((n) => n.id)
        )
      )
    ];
  }
  return [];
};
const getGraphFrame = (frames) => {
  return frames.reduce(
    (acc, frame) => {
      const sourceField = frame.fields.filter((f) => f.name === "source");
      if (frame.name === "edges" || sourceField.length) {
        acc.edges.push(frame);
      } else {
        acc.nodes.push(frame);
      }
      return acc;
    },
    { edges: [], nodes: [] }
  );
};


/***/ }),

/***/ "./public/app/types/suggestions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuggestionName: () => (/* binding */ SuggestionName)
/* harmony export */ });

var SuggestionName = /* @__PURE__ */ ((SuggestionName2) => {
  SuggestionName2["LineChart"] = "Line chart";
  SuggestionName2["LineChartSmooth"] = "Line chart smooth";
  SuggestionName2["LineChartGradientColorScheme"] = "Line chart with gradient color scheme";
  SuggestionName2["AreaChart"] = "Area chart";
  SuggestionName2["AreaChartStacked"] = "Area chart stacked";
  SuggestionName2["AreaChartStackedPercent"] = "Area chart 100% stacked";
  SuggestionName2["BarChart"] = "Bar chart";
  SuggestionName2["BarChartGradientColorScheme"] = "Bar chart with gradient color scheme";
  SuggestionName2["BarChartStacked"] = "Bar chart stacked";
  SuggestionName2["BarChartStackedPercent"] = "Bar chart 100% stacked";
  SuggestionName2["BarChartHorizontal"] = "Bar chart horizontal";
  SuggestionName2["BarChartHorizontalStacked"] = "Bar chart horizontal stacked";
  SuggestionName2["BarChartHorizontalStackedPercent"] = "Bar chart horizontal 100% stacked";
  SuggestionName2["Candlestick"] = "Candlestick";
  SuggestionName2["PieChart"] = "Pie chart";
  SuggestionName2["PieChartDonut"] = "Pie chart donut";
  SuggestionName2["Stat"] = "Stat";
  SuggestionName2["StatColoredBackground"] = "Stat colored background";
  SuggestionName2["Gauge"] = "Gauge";
  SuggestionName2["GaugeCircular"] = "Circular gauge";
  SuggestionName2["GaugeNoThresholds"] = "Gauge no thresholds";
  SuggestionName2["BarGaugeBasic"] = "Bar gauge basic";
  SuggestionName2["BarGaugeLCD"] = "Bar gauge LCD";
  SuggestionName2["Table"] = "Table";
  SuggestionName2["StateTimeline"] = "State timeline";
  SuggestionName2["StatusHistory"] = "Status history";
  SuggestionName2["TextPanel"] = "Text";
  SuggestionName2["DashboardList"] = "Dashboard list";
  SuggestionName2["Logs"] = "Logs";
  SuggestionName2["FlameGraph"] = "Flame graph";
  SuggestionName2["Trace"] = "Trace";
  SuggestionName2["NodeGraph"] = "Node graph";
  return SuggestionName2;
})(SuggestionName || {});


/***/ })

}]);
//# sourceMappingURL=nodeGraphPanel.76d68f54a18b6f02123a.js.map