(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["pieChartPanel"],{

/***/ "./node_modules/@visx/bounds/esm/enhancers/withBoundingRects.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ withBoundingRects)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-dom/index.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
/* eslint react/no-did-mount-set-state: 0, react/no-find-dom-node: 0 */


var emptyRect = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};
function withBoundingRects(BaseComponent) {
  var _class;
  return _class = /*#__PURE__*/function (_React$PureComponent) {
    _inheritsLoose(WrappedComponent, _React$PureComponent);
    function WrappedComponent(props) {
      var _this;
      _this = _React$PureComponent.call(this, props) || this;
      _this.state = {
        rect: undefined,
        parentRect: undefined
      };
      _this.nodeRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
      _this.getRects = _this.getRects.bind(_assertThisInitialized(_this));
      return _this;
    }
    var _proto = WrappedComponent.prototype;
    _proto.componentDidMount = function componentDidMount() {
      var _this$nodeRef,
        _this2 = this;
      this.node = (_this$nodeRef = this.nodeRef) != null && _this$nodeRef.current ? this.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(this);
      this.setState(function () {
        return _this2.getRects();
      });
    };
    _proto.getRects = function getRects() {
      if (!this.node) return this.state;
      var node = this.node;
      var parentNode = node.parentNode;
      var rect = node.getBoundingClientRect ? node.getBoundingClientRect() : emptyRect;
      var parentRect = parentNode != null && parentNode.getBoundingClientRect ? parentNode.getBoundingClientRect() : emptyRect;
      return {
        rect: rect,
        parentRect: parentRect
      };
    };
    _proto.render = function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BaseComponent, _extends({
        nodeRef: this.nodeRef,
        getRects: this.getRects
      }, this.state, this.props));
    };
    return WrappedComponent;
  }((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent)), _class.displayName = "withBoundingRects(" + (BaseComponent.displayName || '') + ")", _class;
}

/***/ }),

/***/ "./node_modules/@visx/event/esm/getXAndYFromEvent.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getXAndYFromEvent)
/* harmony export */ });
/* harmony import */ var _typeGuards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@visx/event/esm/typeGuards.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DEFAULT_POINT = {
  x: 0,
  y: 0
};
function getXAndYFromEvent(event) {
  if (!event) return _extends({}, DEFAULT_POINT);
  if ((0,_typeGuards__WEBPACK_IMPORTED_MODULE_0__.isTouchEvent)(event)) {
    return event.changedTouches.length > 0 ? {
      x: event.changedTouches[0].clientX,
      y: event.changedTouches[0].clientY
    } : _extends({}, DEFAULT_POINT);
  }
  if ((0,_typeGuards__WEBPACK_IMPORTED_MODULE_0__.isMouseEvent)(event)) {
    return {
      x: event.clientX,
      y: event.clientY
    };
  }

  // for focus events try to extract the center position of the target element
  var target = event == null ? void 0 : event.target;
  var boundingClientRect = target && 'getBoundingClientRect' in target ? target.getBoundingClientRect() : null;
  if (!boundingClientRect) return _extends({}, DEFAULT_POINT);
  return {
    x: boundingClientRect.x + boundingClientRect.width / 2,
    y: boundingClientRect.y + boundingClientRect.height / 2
  };
}

/***/ }),

/***/ "./node_modules/@visx/event/esm/localPoint.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ localPoint)
/* harmony export */ });
/* harmony import */ var _localPointGeneric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@visx/event/esm/localPointGeneric.js");
/* harmony import */ var _typeGuards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@visx/event/esm/typeGuards.js");



/** Handles two signatures for backwards compatibility. */
function localPoint(nodeOrEvent, maybeEvent) {
  // localPoint(node, event)
  if ((0,_typeGuards__WEBPACK_IMPORTED_MODULE_1__.isElement)(nodeOrEvent) && maybeEvent) {
    return (0,_localPointGeneric__WEBPACK_IMPORTED_MODULE_0__["default"])(nodeOrEvent, maybeEvent);
  }
  // localPoint(event)
  if ((0,_typeGuards__WEBPACK_IMPORTED_MODULE_1__.isEvent)(nodeOrEvent)) {
    var event = nodeOrEvent;
    var node = event.target;
    if (node) return (0,_localPointGeneric__WEBPACK_IMPORTED_MODULE_0__["default"])(node, event);
  }
  return null;
}

/***/ }),

/***/ "./node_modules/@visx/event/esm/localPointGeneric.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ localPoint)
/* harmony export */ });
/* harmony import */ var _visx_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@visx/point/esm/Point.js");
/* harmony import */ var _typeGuards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@visx/event/esm/typeGuards.js");
/* harmony import */ var _getXAndYFromEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@visx/event/esm/getXAndYFromEvent.js");



function localPoint(node, event) {
  if (!node || !event) return null;
  var coords = (0,_getXAndYFromEvent__WEBPACK_IMPORTED_MODULE_2__["default"])(event);

  // find top-most SVG
  var svg = (0,_typeGuards__WEBPACK_IMPORTED_MODULE_1__.isSVGElement)(node) ? node.ownerSVGElement : node;
  var screenCTM = (0,_typeGuards__WEBPACK_IMPORTED_MODULE_1__.isSVGGraphicsElement)(svg) ? svg.getScreenCTM() : null;
  if ((0,_typeGuards__WEBPACK_IMPORTED_MODULE_1__.isSVGSVGElement)(svg) && screenCTM) {
    var point = svg.createSVGPoint();
    point.x = coords.x;
    point.y = coords.y;
    point = point.matrixTransform(screenCTM.inverse());
    return new _visx_point__WEBPACK_IMPORTED_MODULE_0__["default"]({
      x: point.x,
      y: point.y
    });
  }

  // fall back to bounding box
  var rect = node.getBoundingClientRect();
  return new _visx_point__WEBPACK_IMPORTED_MODULE_0__["default"]({
    x: coords.x - rect.left - node.clientLeft,
    y: coords.y - rect.top - node.clientTop
  });
}

/***/ }),

/***/ "./node_modules/@visx/event/esm/typeGuards.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isEvent: () => (/* binding */ isEvent),
/* harmony export */   isMouseEvent: () => (/* binding */ isMouseEvent),
/* harmony export */   isSVGElement: () => (/* binding */ isSVGElement),
/* harmony export */   isSVGGraphicsElement: () => (/* binding */ isSVGGraphicsElement),
/* harmony export */   isSVGSVGElement: () => (/* binding */ isSVGSVGElement),
/* harmony export */   isTouchEvent: () => (/* binding */ isTouchEvent)
/* harmony export */ });
function isElement(elem) {
  return !!elem && elem instanceof Element;
}

// functional definition of isSVGElement. Note that SVGSVGElements are HTMLElements
function isSVGElement(elem) {
  return !!elem && (elem instanceof SVGElement || 'ownerSVGElement' in elem);
}

// functional definition of SVGGElement
function isSVGSVGElement(elem) {
  return !!elem && 'createSVGPoint' in elem;
}
function isSVGGraphicsElement(elem) {
  return !!elem && 'getScreenCTM' in elem;
}

// functional definition of TouchEvent
function isTouchEvent(event) {
  return !!event && 'changedTouches' in event;
}

// functional definition of MouseEvent
function isMouseEvent(event) {
  return !!event && 'clientX' in event;
}

// functional definition of event
function isEvent(event) {
  return !!event && (event instanceof Event || 'nativeEvent' in event && event.nativeEvent instanceof Event);
}

/***/ }),

/***/ "./node_modules/@visx/gradient/esm/gradients/RadialGradient.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RadialGradient)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _excluded = ["children", "id", "from", "to", "fromOffset", "fromOpacity", "toOffset", "toOpacity", "rotate", "transform"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// passed as rest props to radialGradient

function RadialGradient(_ref) {
  var children = _ref.children,
    id = _ref.id,
    from = _ref.from,
    to = _ref.to,
    _ref$fromOffset = _ref.fromOffset,
    fromOffset = _ref$fromOffset === void 0 ? '0%' : _ref$fromOffset,
    _ref$fromOpacity = _ref.fromOpacity,
    fromOpacity = _ref$fromOpacity === void 0 ? 1 : _ref$fromOpacity,
    _ref$toOffset = _ref.toOffset,
    toOffset = _ref$toOffset === void 0 ? '100%' : _ref$toOffset,
    _ref$toOpacity = _ref.toOpacity,
    toOpacity = _ref$toOpacity === void 0 ? 1 : _ref$toOpacity,
    rotate = _ref.rotate,
    transform = _ref.transform,
    restProps = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("radialGradient", _extends({
    id: id,
    gradientTransform: rotate ? "rotate(" + rotate + ")" : transform
  }, restProps), !!children && children, !children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: fromOffset,
    stopColor: from,
    stopOpacity: fromOpacity
  }), !children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: toOffset,
    stopColor: to,
    stopOpacity: toOpacity
  })));
}

/***/ }),

/***/ "./node_modules/@visx/group/esm/Group.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Group)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var _excluded = ["top", "left", "transform", "className", "children", "innerRef"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function Group(_ref) {
  var _ref$top = _ref.top,
    top = _ref$top === void 0 ? 0 : _ref$top,
    _ref$left = _ref.left,
    left = _ref$left === void 0 ? 0 : _ref$left,
    transform = _ref.transform,
    className = _ref.className,
    children = _ref.children,
    innerRef = _ref.innerRef,
    restProps = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("g", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('visx-group', className),
    transform: transform || "translate(" + left + ", " + top + ")"
  }, restProps), children);
}
Group.propTypes = {
  top: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  left: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  transform: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)])
};

/***/ }),

/***/ "./node_modules/@visx/group/esm/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Group: () => (/* reexport safe */ _Group__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@visx/group/esm/Group.js");


/***/ }),

/***/ "./node_modules/@visx/point/esm/Point.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Point)
/* harmony export */ });
var Point = /*#__PURE__*/function () {
  function Point(_ref) {
    var _ref$x = _ref.x,
      x = _ref$x === void 0 ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === void 0 ? 0 : _ref$y;
    this.x = 0;
    this.y = 0;
    this.x = x;
    this.y = y;
  }
  var _proto = Point.prototype;
  _proto.value = function value() {
    return {
      x: this.x,
      y: this.y
    };
  };
  _proto.toArray = function toArray() {
    return [this.x, this.y];
  };
  return Point;
}();


/***/ }),

/***/ "./node_modules/@visx/shape/lib/shapes/Pie.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = Pie;
var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));
var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));
var _group = __webpack_require__("./node_modules/@visx/group/esm/index.js");
var _D3ShapeFactories = __webpack_require__("./node_modules/@visx/shape/lib/util/D3ShapeFactories.js");
var _excluded = ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children", "fill"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Pie(_ref) {
  var className = _ref.className,
    top = _ref.top,
    left = _ref.left,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? [] : _ref$data,
    centroid = _ref.centroid,
    _ref$innerRadius = _ref.innerRadius,
    innerRadius = _ref$innerRadius === void 0 ? 0 : _ref$innerRadius,
    outerRadius = _ref.outerRadius,
    cornerRadius = _ref.cornerRadius,
    startAngle = _ref.startAngle,
    endAngle = _ref.endAngle,
    padAngle = _ref.padAngle,
    padRadius = _ref.padRadius,
    pieSort = _ref.pieSort,
    pieSortValues = _ref.pieSortValues,
    pieValue = _ref.pieValue,
    children = _ref.children,
    _ref$fill = _ref.fill,
    fill = _ref$fill === void 0 ? '' : _ref$fill,
    restProps = _objectWithoutPropertiesLoose(_ref, _excluded);
  var path = (0, _D3ShapeFactories.arc)({
    innerRadius: innerRadius,
    outerRadius: outerRadius,
    cornerRadius: cornerRadius,
    padRadius: padRadius
  });
  var pie = (0, _D3ShapeFactories.pie)({
    startAngle: startAngle,
    endAngle: endAngle,
    padAngle: padAngle,
    value: pieValue,
    sort: pieSort,
    sortValues: pieSortValues
  });
  var arcs = pie(data);
  if (children) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children({
    arcs: arcs,
    path: path,
    pie: pie
  }));
  return /*#__PURE__*/_react.default.createElement(_group.Group, {
    className: "visx-pie-arcs-group",
    top: top,
    left: left
  }, arcs.map(function (arc, i) {
    return /*#__PURE__*/_react.default.createElement("g", {
      key: "pie-arc-" + i
    }, /*#__PURE__*/_react.default.createElement("path", _extends({
      className: (0, _classnames.default)('visx-pie-arc', className),
      d: path(arc) || '',
      fill: fill == null || typeof fill === 'string' ? fill : fill(arc)
    }, restProps)), centroid == null ? void 0 : centroid(path.centroid(arc), arc));
  }));
}

/***/ }),

/***/ "./node_modules/@visx/shape/lib/util/D3ShapeFactories.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.arc = arc;
exports.area = area;
exports.line = line;
exports.pie = pie;
exports.radialLine = radialLine;
exports.stack = stack;
var _d3Shape = __webpack_require__("./node_modules/d3-shape/src/index.js");
var _setNumberOrNumberAccessor = _interopRequireDefault(__webpack_require__("./node_modules/@visx/shape/lib/util/setNumberOrNumberAccessor.js"));
var _stackOrder = _interopRequireDefault(__webpack_require__("./node_modules/@visx/shape/lib/util/stackOrder.js"));
var _stackOffset = _interopRequireDefault(__webpack_require__("./node_modules/@visx/shape/lib/util/stackOffset.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function arc(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    innerRadius = _ref.innerRadius,
    outerRadius = _ref.outerRadius,
    cornerRadius = _ref.cornerRadius,
    startAngle = _ref.startAngle,
    endAngle = _ref.endAngle,
    padAngle = _ref.padAngle,
    padRadius = _ref.padRadius;
  var path = (0, _d3Shape.arc)();
  if (innerRadius != null) (0, _setNumberOrNumberAccessor.default)(path.innerRadius, innerRadius);
  if (outerRadius != null) (0, _setNumberOrNumberAccessor.default)(path.outerRadius, outerRadius);
  if (cornerRadius != null) (0, _setNumberOrNumberAccessor.default)(path.cornerRadius, cornerRadius);
  if (startAngle != null) (0, _setNumberOrNumberAccessor.default)(path.startAngle, startAngle);
  if (endAngle != null) (0, _setNumberOrNumberAccessor.default)(path.endAngle, endAngle);
  if (padAngle != null) (0, _setNumberOrNumberAccessor.default)(path.padAngle, padAngle);
  if (padRadius != null) (0, _setNumberOrNumberAccessor.default)(path.padRadius, padRadius);
  return path;
}
function area(_temp2) {
  var _ref2 = _temp2 === void 0 ? {} : _temp2,
    x = _ref2.x,
    x0 = _ref2.x0,
    x1 = _ref2.x1,
    y = _ref2.y,
    y0 = _ref2.y0,
    y1 = _ref2.y1,
    defined = _ref2.defined,
    curve = _ref2.curve;
  var path = (0, _d3Shape.area)();
  if (x) (0, _setNumberOrNumberAccessor.default)(path.x, x);
  if (x0) (0, _setNumberOrNumberAccessor.default)(path.x0, x0);
  if (x1) (0, _setNumberOrNumberAccessor.default)(path.x1, x1);
  if (y) (0, _setNumberOrNumberAccessor.default)(path.y, y);
  if (y0) (0, _setNumberOrNumberAccessor.default)(path.y0, y0);
  if (y1) (0, _setNumberOrNumberAccessor.default)(path.y1, y1);
  if (defined) path.defined(defined);
  if (curve) path.curve(curve);
  return path;
}
function line(_temp3) {
  var _ref3 = _temp3 === void 0 ? {} : _temp3,
    x = _ref3.x,
    y = _ref3.y,
    defined = _ref3.defined,
    curve = _ref3.curve;
  var path = (0, _d3Shape.line)();
  if (x) (0, _setNumberOrNumberAccessor.default)(path.x, x);
  if (y) (0, _setNumberOrNumberAccessor.default)(path.y, y);
  if (defined) path.defined(defined);
  if (curve) path.curve(curve);
  return path;
}
function pie(_temp4) {
  var _ref4 = _temp4 === void 0 ? {} : _temp4,
    startAngle = _ref4.startAngle,
    endAngle = _ref4.endAngle,
    padAngle = _ref4.padAngle,
    value = _ref4.value,
    sort = _ref4.sort,
    sortValues = _ref4.sortValues;
  var path = (0, _d3Shape.pie)();

  // ts can't distinguish between these method overloads
  if (sort === null) path.sort(sort);else if (sort != null) path.sort(sort);
  if (sortValues === null) path.sortValues(sortValues);else if (sortValues != null) path.sortValues(sortValues);
  if (value != null) path.value(value);
  if (padAngle != null) (0, _setNumberOrNumberAccessor.default)(path.padAngle, padAngle);
  if (startAngle != null) (0, _setNumberOrNumberAccessor.default)(path.startAngle, startAngle);
  if (endAngle != null) (0, _setNumberOrNumberAccessor.default)(path.endAngle, endAngle);
  return path;
}
function radialLine(_temp5) {
  var _ref5 = _temp5 === void 0 ? {} : _temp5,
    angle = _ref5.angle,
    radius = _ref5.radius,
    defined = _ref5.defined,
    curve = _ref5.curve;
  var path = (0, _d3Shape.radialLine)();
  if (angle) (0, _setNumberOrNumberAccessor.default)(path.angle, angle);
  if (radius) (0, _setNumberOrNumberAccessor.default)(path.radius, radius);
  if (defined) path.defined(defined);
  if (curve) path.curve(curve);
  return path;
}
function stack(_ref6) {
  var keys = _ref6.keys,
    value = _ref6.value,
    order = _ref6.order,
    offset = _ref6.offset;
  var path = (0, _d3Shape.stack)();
  if (keys) path.keys(keys);
  if (value) (0, _setNumberOrNumberAccessor.default)(path.value, value);
  if (order) path.order((0, _stackOrder.default)(order));
  if (offset) path.offset((0, _stackOffset.default)(offset));
  return path;
}

/***/ }),

/***/ "./node_modules/@visx/shape/lib/util/setNumberOrNumberAccessor.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = setNumberOrNumberAccessor;
/**
 * This is a workaround for TypeScript not inferring the correct
 * method overload/signature for some d3 shape methods.
 */
function setNumberOrNumberAccessor(func, value) {
  if (typeof value === 'number') func(value);else func(value);
}

/***/ }),

/***/ "./node_modules/@visx/shape/lib/util/stackOffset.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.STACK_OFFSET_NAMES = exports.STACK_OFFSETS = void 0;
exports["default"] = stackOffset;
var _d3Shape = __webpack_require__("./node_modules/d3-shape/src/index.js");
var STACK_OFFSETS = {
  expand: _d3Shape.stackOffsetExpand,
  diverging: _d3Shape.stackOffsetDiverging,
  none: _d3Shape.stackOffsetNone,
  silhouette: _d3Shape.stackOffsetSilhouette,
  wiggle: _d3Shape.stackOffsetWiggle
};
exports.STACK_OFFSETS = STACK_OFFSETS;
var STACK_OFFSET_NAMES = Object.keys(STACK_OFFSETS);
exports.STACK_OFFSET_NAMES = STACK_OFFSET_NAMES;
function stackOffset(offset) {
  return offset && STACK_OFFSETS[offset] || STACK_OFFSETS.none;
}

/***/ }),

/***/ "./node_modules/@visx/shape/lib/util/stackOrder.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.STACK_ORDER_NAMES = exports.STACK_ORDERS = void 0;
exports["default"] = stackOrder;
var _d3Shape = __webpack_require__("./node_modules/d3-shape/src/index.js");
var STACK_ORDERS = {
  ascending: _d3Shape.stackOrderAscending,
  descending: _d3Shape.stackOrderDescending,
  insideout: _d3Shape.stackOrderInsideOut,
  none: _d3Shape.stackOrderNone,
  reverse: _d3Shape.stackOrderReverse
};
exports.STACK_ORDERS = STACK_ORDERS;
var STACK_ORDER_NAMES = Object.keys(STACK_ORDERS);
exports.STACK_ORDER_NAMES = STACK_ORDER_NAMES;
function stackOrder(order) {
  return order && STACK_ORDERS[order] || STACK_ORDERS.none;
}

/***/ }),

/***/ "./node_modules/@visx/tooltip/esm/Portal.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Portal)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-dom/index.js");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/** Render within a portal using a declarative component API. */
var Portal = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(Portal, _React$PureComponent);
  function Portal() {
    return _React$PureComponent.apply(this, arguments) || this;
  }
  var _proto = Portal.prototype;
  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.node && document.body) {
      document.body.removeChild(this.node);
      delete this.node;
    }
  };
  _proto.render = function render() {
    // SSR check
    if (!this.node && typeof document !== 'undefined') {
      this.node = document.createElement('div');
      if (this.props.zIndex != null) this.node.style.zIndex = "" + this.props.zIndex;
      document.body.append(this.node);
    }
    if (!this.node) {
      return null;
    }
    return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal(this.props.children, this.node);
  };
  return Portal;
}((react__WEBPACK_IMPORTED_MODULE_1___default().PureComponent));
Portal.propTypes = {
  zIndex: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)])
};


/***/ }),

/***/ "./node_modules/@visx/tooltip/esm/context/TooltipPositionContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TooltipPositionConsumer: () => (/* binding */ TooltipPositionConsumer),
/* harmony export */   TooltipPositionProvider: () => (/* binding */ TooltipPositionProvider),
/* harmony export */   useTooltipPosition: () => (/* binding */ useTooltipPosition)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TooltipPositionContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  isFlippedVertically: false,
  isFlippedHorizontally: false
});
var TooltipPositionProvider = TooltipPositionContext.Provider;
var TooltipPositionConsumer = TooltipPositionContext.Consumer;
var useTooltipPosition = function useTooltipPosition() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TooltipPositionContext);
};

/***/ }),

/***/ "./node_modules/@visx/tooltip/esm/hooks/useTooltip.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useTooltip)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _excluded = ["tooltipOpen"];
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function useTooltip( /** Optional initial TooltipState. */
initialTooltipState) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_extends({
      tooltipOpen: false
    }, initialTooltipState)),
    tooltipState = _useState[0],
    setTooltipState = _useState[1];
  var showTooltip = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (showArgs) {
    return setTooltipState(typeof showArgs === 'function' ? function (_ref) {
      var tooltipOpen = _ref.tooltipOpen,
        show = _objectWithoutPropertiesLoose(_ref, _excluded);
      return _extends({}, showArgs(show), {
        tooltipOpen: true
      });
    } : {
      tooltipOpen: true,
      tooltipLeft: showArgs.tooltipLeft,
      tooltipTop: showArgs.tooltipTop,
      tooltipData: showArgs.tooltipData
    });
  }, [setTooltipState]);
  var hideTooltip = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return setTooltipState({
      tooltipOpen: false,
      tooltipLeft: undefined,
      tooltipTop: undefined,
      tooltipData: undefined
    });
  }, [setTooltipState]);
  return {
    tooltipOpen: tooltipState.tooltipOpen,
    tooltipLeft: tooltipState.tooltipLeft,
    tooltipTop: tooltipState.tooltipTop,
    tooltipData: tooltipState.tooltipData,
    updateTooltip: setTooltipState,
    showTooltip: showTooltip,
    hideTooltip: hideTooltip
  };
}

/***/ }),

/***/ "./node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useTooltipInPortal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use_measure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-use-measure/dist/web.js");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@visx/tooltip/esm/Portal.js");
/* harmony import */ var _tooltips_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@visx/tooltip/esm/tooltips/Tooltip.js");
/* harmony import */ var _tooltips_TooltipWithBounds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@visx/tooltip/esm/tooltips/TooltipWithBounds.js");
var _excluded = ["detectBounds", "zIndex"],
  _excluded2 = ["left", "top", "detectBounds", "zIndex"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * Hook that handles rendering of a Tooltip or TooltipWithBounds in a Portal.
 * Handles conversion of container coordinates to page coordinates using the container bounds.
 */
function useTooltipInPortal(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$detectBounds = _ref.detectBounds,
    detectBoundsOption = _ref$detectBounds === void 0 ? true : _ref$detectBounds,
    zIndexOption = _ref.zIndex,
    useMeasureOptions = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _useMeasure = (0,react_use_measure__WEBPACK_IMPORTED_MODULE_1__["default"])(useMeasureOptions),
    containerRef = _useMeasure[0],
    containerBounds = _useMeasure[1],
    forceRefreshBounds = _useMeasure[2];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    isSsr = _useState[0],
    setIsSsr = _useState[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIsSsr(false);
  }, []);
  var TooltipInPortal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return function (_ref2) {
      var _ref2$left = _ref2.left,
        containerLeft = _ref2$left === void 0 ? 0 : _ref2$left,
        _ref2$top = _ref2.top,
        containerTop = _ref2$top === void 0 ? 0 : _ref2$top,
        detectBoundsProp = _ref2.detectBounds,
        zIndexProp = _ref2.zIndex,
        tooltipProps = _objectWithoutPropertiesLoose(_ref2, _excluded2);
      var detectBounds = detectBoundsProp == null ? detectBoundsOption : detectBoundsProp;
      var zIndex = zIndexProp == null ? zIndexOption : zIndexProp;
      var TooltipComponent = detectBounds ? _tooltips_TooltipWithBounds__WEBPACK_IMPORTED_MODULE_4__["default"] : _tooltips_Tooltip__WEBPACK_IMPORTED_MODULE_3__["default"];
      // convert container coordinates to page coordinates
      var scrollX = isSsr ? 0 : window.scrollX;
      var scrollY = isSsr ? 0 : window.scrollY;
      var portalLeft = containerLeft + (containerBounds.left || 0) + scrollX;
      var portalTop = containerTop + (containerBounds.top || 0) + scrollY;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Portal__WEBPACK_IMPORTED_MODULE_2__["default"], {
        zIndex: zIndex
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TooltipComponent, _extends({
        left: portalLeft,
        top: portalTop
      }, tooltipProps)));
    };
  }, [detectBoundsOption, zIndexOption, containerBounds.left, containerBounds.top, isSsr]);
  return {
    containerRef: containerRef,
    containerBounds: containerBounds,
    forceRefreshBounds: forceRefreshBounds,
    TooltipInPortal: TooltipInPortal
  };
}

/***/ }),

/***/ "./node_modules/@visx/tooltip/esm/tooltips/Tooltip.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaultStyles: () => (/* binding */ defaultStyles)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var _excluded = ["className", "top", "left", "offsetLeft", "offsetTop", "style", "children", "unstyled", "applyPositionStyle"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var defaultStyles = {
  position: 'absolute',
  backgroundColor: 'white',
  color: '#666666',
  padding: '.3rem .5rem',
  borderRadius: '3px',
  fontSize: '14px',
  boxShadow: '0 1px 2px rgba(33,33,33,0.2)',
  lineHeight: '1em',
  pointerEvents: 'none'
};
var Tooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function (_ref, ref) {
  var className = _ref.className,
    top = _ref.top,
    left = _ref.left,
    _ref$offsetLeft = _ref.offsetLeft,
    offsetLeft = _ref$offsetLeft === void 0 ? 10 : _ref$offsetLeft,
    _ref$offsetTop = _ref.offsetTop,
    offsetTop = _ref$offsetTop === void 0 ? 10 : _ref$offsetTop,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? defaultStyles : _ref$style,
    children = _ref.children,
    _ref$unstyled = _ref.unstyled,
    unstyled = _ref$unstyled === void 0 ? false : _ref$unstyled,
    _ref$applyPositionSty = _ref.applyPositionStyle,
    applyPositionStyle = _ref$applyPositionSty === void 0 ? false : _ref$applyPositionSty,
    restProps = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", _extends({
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('visx-tooltip', className),
    style: _extends({
      top: top == null || offsetTop == null ? top : top + offsetTop,
      left: left == null || offsetLeft == null ? left : left + offsetLeft
    }, applyPositionStyle && {
      position: 'absolute'
    }, !unstyled && style)
  }, restProps), children);
});
Tooltip.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  left: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  offsetLeft: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  offsetTop: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  top: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  applyPositionStyle: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  unstyled: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool)
};
Tooltip.displayName = 'Tooltip';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);

/***/ }),

/***/ "./node_modules/@visx/tooltip/esm/tooltips/TooltipWithBounds.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _visx_bounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@visx/bounds/esm/enhancers/withBoundingRects.js");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@visx/tooltip/esm/tooltips/Tooltip.js");
/* harmony import */ var _context_TooltipPositionContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@visx/tooltip/esm/context/TooltipPositionContext.js");

var _excluded = ["children", "getRects", "left", "offsetLeft", "offsetTop", "parentRect", "rect", "style", "top", "unstyled", "nodeRef"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function TooltipWithBounds(_ref) {
  var children = _ref.children,
    getRects = _ref.getRects,
    _ref$left = _ref.left,
    initialLeft = _ref$left === void 0 ? 0 : _ref$left,
    _ref$offsetLeft = _ref.offsetLeft,
    offsetLeft = _ref$offsetLeft === void 0 ? 10 : _ref$offsetLeft,
    _ref$offsetTop = _ref.offsetTop,
    offsetTop = _ref$offsetTop === void 0 ? 10 : _ref$offsetTop,
    parentBounds = _ref.parentRect,
    ownBounds = _ref.rect,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? _Tooltip__WEBPACK_IMPORTED_MODULE_3__.defaultStyles : _ref$style,
    _ref$top = _ref.top,
    initialTop = _ref$top === void 0 ? 0 : _ref$top,
    _ref$unstyled = _ref.unstyled,
    unstyled = _ref$unstyled === void 0 ? false : _ref$unstyled,
    nodeRef = _ref.nodeRef,
    otherProps = _objectWithoutPropertiesLoose(_ref, _excluded);
  var transform;
  var placeTooltipLeft = false;
  var placeTooltipUp = false;
  if (ownBounds && parentBounds) {
    var left = initialLeft;
    var top = initialTop;
    if (parentBounds.width) {
      var rightPlacementClippedPx = left + offsetLeft + ownBounds.width - parentBounds.width;
      var leftPlacementClippedPx = ownBounds.width - left - offsetLeft;
      placeTooltipLeft = rightPlacementClippedPx > 0 && rightPlacementClippedPx > leftPlacementClippedPx;
    } else {
      var _rightPlacementClippedPx = left + offsetLeft + ownBounds.width - window.innerWidth;
      var _leftPlacementClippedPx = ownBounds.width - left - offsetLeft;
      placeTooltipLeft = _rightPlacementClippedPx > 0 && _rightPlacementClippedPx > _leftPlacementClippedPx;
    }
    if (parentBounds.height) {
      var bottomPlacementClippedPx = top + offsetTop + ownBounds.height - parentBounds.height;
      var topPlacementClippedPx = ownBounds.height - top - offsetTop;
      placeTooltipUp = bottomPlacementClippedPx > 0 && bottomPlacementClippedPx > topPlacementClippedPx;
    } else {
      placeTooltipUp = top + offsetTop + ownBounds.height > window.innerHeight;
    }
    left = placeTooltipLeft ? left - ownBounds.width - offsetLeft : left + offsetLeft;
    top = placeTooltipUp ? top - ownBounds.height - offsetTop : top + offsetTop;
    left = Math.round(left);
    top = Math.round(top);
    transform = "translate(" + left + "px, " + top + "px)";
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    ref: nodeRef,
    style: _extends({
      left: 0,
      top: 0,
      transform: transform
    }, !unstyled && style)
  }, otherProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_context_TooltipPositionContext__WEBPACK_IMPORTED_MODULE_4__.TooltipPositionProvider, {
    value: {
      isFlippedVertically: !placeTooltipUp,
      isFlippedHorizontally: !placeTooltipLeft
    }
  }, children));
}
TooltipWithBounds.propTypes = {
  nodeRef: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)])
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_visx_bounds__WEBPACK_IMPORTED_MODULE_2__["default"])(TooltipWithBounds));

/***/ }),

/***/ "./node_modules/d3-shape/node_modules/d3-path/src/path.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (path);


/***/ }),

/***/ "./node_modules/d3-shape/src/arc.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/node_modules/d3-path/src/path.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/d3-shape/src/math.js");




function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = y32 * x10 - x32 * y10;
  if (t * t < _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon) return;
  t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.sqrt)(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.sqrt)((0,_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - _math_js__WEBPACK_IMPORTED_MODULE_2__.halfPi,
        a1 = endAngle.apply(this, arguments) - _math_js__WEBPACK_IMPORTED_MODULE_2__.halfPi,
        da = (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.abs)(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = (0,d3_path__WEBPACK_IMPORTED_MODULE_0__["default"])();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon)) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > _math_js__WEBPACK_IMPORTED_MODULE_2__.tau - _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon) {
      context.moveTo(r1 * (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.cos)(a0), r1 * (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.sin)(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon) {
        context.moveTo(r0 * (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.cos)(a1), r0 * (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.sin)(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon) && (padRadius ? +padRadius.apply(this, arguments) : (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.sqrt)(r0 * r0 + r1 * r1)),
          rc = (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.min)((0,_math_js__WEBPACK_IMPORTED_MODULE_2__.abs)(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon) {
        var p0 = (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.asin)(rp / r0 * (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.sin)(ap)),
            p1 = (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.asin)(rp / r1 * (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.sin)(ap));
        if ((da0 -= p0 * 2) > _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.cos)(a01),
          y01 = r1 * (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.sin)(a01),
          x10 = r0 * (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.cos)(a10),
          y10 = r0 * (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.sin)(a10);

      // Apply rounded corners?
      if (rc > _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon) {
        var x11 = r1 * (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.cos)(a11),
            y11 = r1 * (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.sin)(a11),
            x00 = r0 * (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.cos)(a00),
            y00 = r0 * (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.sin)(a00),
            oc;

        // Restrict the corner radius according to the sector angle.
        if (da < _math_js__WEBPACK_IMPORTED_MODULE_2__.pi && (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
          var ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.sin)((0,_math_js__WEBPACK_IMPORTED_MODULE_2__.acos)((ax * bx + ay * by) / ((0,_math_js__WEBPACK_IMPORTED_MODULE_2__.sqrt)(ax * ax + ay * ay) * (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.sqrt)(bx * bx + by * by))) / 2),
              lc = (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.sqrt)(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.min)(rc, (r0 - lc) / (kc - 1));
          rc1 = (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.min)(rc, (r1 - lc) / (kc + 1));
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon)) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.atan2)(t0.y01, t0.x01), (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.atan2)(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.atan2)(t0.y01, t0.x01), (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.atan2)(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.atan2)(t0.cy + t0.y11, t0.cx + t0.x11), (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.atan2)(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.atan2)(t1.y11, t1.x11), (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.atan2)(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon) || !(da0 > _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon)) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > _math_js__WEBPACK_IMPORTED_MODULE_2__.epsilon) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.atan2)(t0.y01, t0.x01), (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.atan2)(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.atan2)(t0.y01, t0.x01), (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.atan2)(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.atan2)(t0.cy + t0.y11, t0.cx + t0.x11), (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.atan2)(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.atan2)(t1.y11, t1.x11), (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.atan2)(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - _math_js__WEBPACK_IMPORTED_MODULE_2__.pi / 2;
    return [(0,_math_js__WEBPACK_IMPORTED_MODULE_2__.cos)(a) * r, (0,_math_js__WEBPACK_IMPORTED_MODULE_2__.sin)(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
  };

  return arc;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/area.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/node_modules/d3-path/src/path.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _curve_linear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/d3-shape/src/curve/linear.js");
/* harmony import */ var _line_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/d3-shape/src/line.js");
/* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/d3-shape/src/point.js");






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var x0 = _point_js__WEBPACK_IMPORTED_MODULE_4__.x,
      x1 = null,
      y0 = (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
      y1 = _point_js__WEBPACK_IMPORTED_MODULE_4__.y,
      defined = (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(true),
      context = null,
      curve = _curve_linear_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = (0,d3_path__WEBPACK_IMPORTED_MODULE_0__["default"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return (0,_line_js__WEBPACK_IMPORTED_MODULE_3__["default"])().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/areaRadial.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _curve_radial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/curve/radial.js");
/* harmony import */ var _area_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/d3-shape/src/area.js");
/* harmony import */ var _lineRadial_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/d3-shape/src/lineRadial.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var a = (0,_area_js__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(_curve_radial_js__WEBPACK_IMPORTED_MODULE_0__.curveRadialLinear),
      c = a.curve,
      x0 = a.lineX0,
      x1 = a.lineX1,
      y0 = a.lineY0,
      y1 = a.lineY1;

  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function() { return (0,_lineRadial_js__WEBPACK_IMPORTED_MODULE_2__.lineRadial)(x0()); }, delete a.lineX0;
  a.lineEndAngle = function() { return (0,_lineRadial_js__WEBPACK_IMPORTED_MODULE_2__.lineRadial)(x1()); }, delete a.lineX1;
  a.lineInnerRadius = function() { return (0,_lineRadial_js__WEBPACK_IMPORTED_MODULE_2__.lineRadial)(y0()); }, delete a.lineY0;
  a.lineOuterRadius = function() { return (0,_lineRadial_js__WEBPACK_IMPORTED_MODULE_2__.lineRadial)(y1()); }, delete a.lineY1;

  a.curve = function(_) {
    return arguments.length ? c((0,_curve_radial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_)) : c()._curve;
  };

  return a;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/array.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   slice: () => (/* binding */ slice)
/* harmony export */ });
var slice = Array.prototype.slice;


/***/ }),

/***/ "./node_modules/d3-shape/src/constant.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return function constant() {
    return x;
  };
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basis.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basis: () => (/* binding */ Basis),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   point: () => (/* binding */ point)
/* harmony export */ });
function point(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  return new Basis(context);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basisClosed.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/d3-shape/src/curve/basis.js");



function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: (0,_basis_js__WEBPACK_IMPORTED_MODULE_1__.point)(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  return new BasisClosed(context);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basisOpen.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/curve/basis.js");


function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: (0,_basis_js__WEBPACK_IMPORTED_MODULE_0__.point)(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  return new BasisOpen(context);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/bundle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/curve/basis.js");


function Bundle(context, beta) {
  this._basis = new _basis_js__WEBPACK_IMPORTED_MODULE_0__.Basis(context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new _basis_js__WEBPACK_IMPORTED_MODULE_0__.Basis(context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinal.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cardinal: () => (/* binding */ Cardinal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   point: () => (/* binding */ point)
/* harmony export */ });
function point(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinalClosed.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardinalClosed: () => (/* binding */ CardinalClosed),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _cardinal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/d3-shape/src/curve/cardinal.js");



function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: (0,_cardinal_js__WEBPACK_IMPORTED_MODULE_1__.point)(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinalOpen.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardinalOpen: () => (/* binding */ CardinalOpen),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cardinal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/curve/cardinal.js");


function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: (0,_cardinal_js__WEBPACK_IMPORTED_MODULE_0__.point)(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRom.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   point: () => (/* binding */ point)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/math.js");
/* harmony import */ var _cardinal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/d3-shape/src/curve/cardinal.js");



function point(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > _math_js__WEBPACK_IMPORTED_MODULE_0__.epsilon) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new _cardinal_js__WEBPACK_IMPORTED_MODULE_1__.Cardinal(context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRomClosed.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cardinalClosed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/curve/cardinalClosed.js");
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _catmullRom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/d3-shape/src/curve/catmullRom.js");




function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  areaEnd: _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: (0,_catmullRom_js__WEBPACK_IMPORTED_MODULE_2__.point)(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new _cardinalClosed_js__WEBPACK_IMPORTED_MODULE_0__.CardinalClosed(context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRomOpen.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cardinalOpen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/curve/cardinalOpen.js");
/* harmony import */ var _catmullRom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/d3-shape/src/curve/catmullRom.js");



function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: (0,_catmullRom_js__WEBPACK_IMPORTED_MODULE_1__.point)(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new _cardinalOpen_js__WEBPACK_IMPORTED_MODULE_0__.CardinalOpen(context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/linear.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  return new Linear(context);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/linearClosed.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/noop.js");


function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  return new LinearClosed(context);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/monotone.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   monotoneX: () => (/* binding */ monotoneX),
/* harmony export */   monotoneY: () => (/* binding */ monotoneY)
/* harmony export */ });
function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
}

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/natural.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  return new Natural(context);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/radial.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   curveRadialLinear: () => (/* binding */ curveRadialLinear),
/* harmony export */   "default": () => (/* binding */ curveRadial)
/* harmony export */ });
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/curve/linear.js");


var curveRadialLinear = curveRadial(_linear_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/step.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   stepAfter: () => (/* binding */ stepAfter),
/* harmony export */   stepBefore: () => (/* binding */ stepBefore)
/* harmony export */ });
function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  return new Step(context, 0.5);
}

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/descending.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/identity.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(d) {
  return d;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arc: () => (/* reexport safe */ _arc_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   area: () => (/* reexport safe */ _area_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   areaRadial: () => (/* reexport safe */ _areaRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   curveBasis: () => (/* reexport safe */ _curve_basis_js__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   curveBasisClosed: () => (/* reexport safe */ _curve_basisClosed_js__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   curveBasisOpen: () => (/* reexport safe */ _curve_basisOpen_js__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   curveBundle: () => (/* reexport safe */ _curve_bundle_js__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   curveCardinal: () => (/* reexport safe */ _curve_cardinal_js__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   curveCardinalClosed: () => (/* reexport safe */ _curve_cardinalClosed_js__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   curveCardinalOpen: () => (/* reexport safe */ _curve_cardinalOpen_js__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   curveCatmullRom: () => (/* reexport safe */ _curve_catmullRom_js__WEBPACK_IMPORTED_MODULE_25__["default"]),
/* harmony export */   curveCatmullRomClosed: () => (/* reexport safe */ _curve_catmullRomClosed_js__WEBPACK_IMPORTED_MODULE_23__["default"]),
/* harmony export */   curveCatmullRomOpen: () => (/* reexport safe */ _curve_catmullRomOpen_js__WEBPACK_IMPORTED_MODULE_24__["default"]),
/* harmony export */   curveLinear: () => (/* reexport safe */ _curve_linear_js__WEBPACK_IMPORTED_MODULE_27__["default"]),
/* harmony export */   curveLinearClosed: () => (/* reexport safe */ _curve_linearClosed_js__WEBPACK_IMPORTED_MODULE_26__["default"]),
/* harmony export */   curveMonotoneX: () => (/* reexport safe */ _curve_monotone_js__WEBPACK_IMPORTED_MODULE_28__.monotoneX),
/* harmony export */   curveMonotoneY: () => (/* reexport safe */ _curve_monotone_js__WEBPACK_IMPORTED_MODULE_28__.monotoneY),
/* harmony export */   curveNatural: () => (/* reexport safe */ _curve_natural_js__WEBPACK_IMPORTED_MODULE_29__["default"]),
/* harmony export */   curveStep: () => (/* reexport safe */ _curve_step_js__WEBPACK_IMPORTED_MODULE_30__["default"]),
/* harmony export */   curveStepAfter: () => (/* reexport safe */ _curve_step_js__WEBPACK_IMPORTED_MODULE_30__.stepAfter),
/* harmony export */   curveStepBefore: () => (/* reexport safe */ _curve_step_js__WEBPACK_IMPORTED_MODULE_30__.stepBefore),
/* harmony export */   line: () => (/* reexport safe */ _line_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   lineRadial: () => (/* reexport safe */ _lineRadial_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   linkHorizontal: () => (/* reexport safe */ _link_index_js__WEBPACK_IMPORTED_MODULE_7__.linkHorizontal),
/* harmony export */   linkRadial: () => (/* reexport safe */ _link_index_js__WEBPACK_IMPORTED_MODULE_7__.linkRadial),
/* harmony export */   linkVertical: () => (/* reexport safe */ _link_index_js__WEBPACK_IMPORTED_MODULE_7__.linkVertical),
/* harmony export */   pie: () => (/* reexport safe */ _pie_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   pointRadial: () => (/* reexport safe */ _pointRadial_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   radialArea: () => (/* reexport safe */ _areaRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   radialLine: () => (/* reexport safe */ _lineRadial_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   stack: () => (/* reexport safe */ _stack_js__WEBPACK_IMPORTED_MODULE_31__["default"]),
/* harmony export */   stackOffsetDiverging: () => (/* reexport safe */ _offset_diverging_js__WEBPACK_IMPORTED_MODULE_33__["default"]),
/* harmony export */   stackOffsetExpand: () => (/* reexport safe */ _offset_expand_js__WEBPACK_IMPORTED_MODULE_32__["default"]),
/* harmony export */   stackOffsetNone: () => (/* reexport safe */ _offset_none_js__WEBPACK_IMPORTED_MODULE_34__["default"]),
/* harmony export */   stackOffsetSilhouette: () => (/* reexport safe */ _offset_silhouette_js__WEBPACK_IMPORTED_MODULE_35__["default"]),
/* harmony export */   stackOffsetWiggle: () => (/* reexport safe */ _offset_wiggle_js__WEBPACK_IMPORTED_MODULE_36__["default"]),
/* harmony export */   stackOrderAppearance: () => (/* reexport safe */ _order_appearance_js__WEBPACK_IMPORTED_MODULE_37__["default"]),
/* harmony export */   stackOrderAscending: () => (/* reexport safe */ _order_ascending_js__WEBPACK_IMPORTED_MODULE_38__["default"]),
/* harmony export */   stackOrderDescending: () => (/* reexport safe */ _order_descending_js__WEBPACK_IMPORTED_MODULE_39__["default"]),
/* harmony export */   stackOrderInsideOut: () => (/* reexport safe */ _order_insideOut_js__WEBPACK_IMPORTED_MODULE_40__["default"]),
/* harmony export */   stackOrderNone: () => (/* reexport safe */ _order_none_js__WEBPACK_IMPORTED_MODULE_41__["default"]),
/* harmony export */   stackOrderReverse: () => (/* reexport safe */ _order_reverse_js__WEBPACK_IMPORTED_MODULE_42__["default"]),
/* harmony export */   symbol: () => (/* reexport safe */ _symbol_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   symbolCircle: () => (/* reexport safe */ _symbol_circle_js__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   symbolCross: () => (/* reexport safe */ _symbol_cross_js__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   symbolDiamond: () => (/* reexport safe */ _symbol_diamond_js__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   symbolSquare: () => (/* reexport safe */ _symbol_square_js__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   symbolStar: () => (/* reexport safe */ _symbol_star_js__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   symbolTriangle: () => (/* reexport safe */ _symbol_triangle_js__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   symbolWye: () => (/* reexport safe */ _symbol_wye_js__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   symbols: () => (/* reexport safe */ _symbol_js__WEBPACK_IMPORTED_MODULE_8__.symbols)
/* harmony export */ });
/* harmony import */ var _arc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/arc.js");
/* harmony import */ var _area_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/d3-shape/src/area.js");
/* harmony import */ var _line_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/d3-shape/src/line.js");
/* harmony import */ var _pie_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/d3-shape/src/pie.js");
/* harmony import */ var _areaRadial_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/d3-shape/src/areaRadial.js");
/* harmony import */ var _lineRadial_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/d3-shape/src/lineRadial.js");
/* harmony import */ var _pointRadial_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/d3-shape/src/pointRadial.js");
/* harmony import */ var _link_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/d3-shape/src/link/index.js");
/* harmony import */ var _symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/d3-shape/src/symbol.js");
/* harmony import */ var _symbol_circle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/d3-shape/src/symbol/circle.js");
/* harmony import */ var _symbol_cross_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/d3-shape/src/symbol/cross.js");
/* harmony import */ var _symbol_diamond_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/d3-shape/src/symbol/diamond.js");
/* harmony import */ var _symbol_square_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/d3-shape/src/symbol/square.js");
/* harmony import */ var _symbol_star_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/d3-shape/src/symbol/star.js");
/* harmony import */ var _symbol_triangle_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/d3-shape/src/symbol/triangle.js");
/* harmony import */ var _symbol_wye_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/d3-shape/src/symbol/wye.js");
/* harmony import */ var _curve_basisClosed_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/d3-shape/src/curve/basisClosed.js");
/* harmony import */ var _curve_basisOpen_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/d3-shape/src/curve/basisOpen.js");
/* harmony import */ var _curve_basis_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./node_modules/d3-shape/src/curve/basis.js");
/* harmony import */ var _curve_bundle_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./node_modules/d3-shape/src/curve/bundle.js");
/* harmony import */ var _curve_cardinalClosed_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./node_modules/d3-shape/src/curve/cardinalClosed.js");
/* harmony import */ var _curve_cardinalOpen_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./node_modules/d3-shape/src/curve/cardinalOpen.js");
/* harmony import */ var _curve_cardinal_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./node_modules/d3-shape/src/curve/cardinal.js");
/* harmony import */ var _curve_catmullRomClosed_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./node_modules/d3-shape/src/curve/catmullRomClosed.js");
/* harmony import */ var _curve_catmullRomOpen_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./node_modules/d3-shape/src/curve/catmullRomOpen.js");
/* harmony import */ var _curve_catmullRom_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./node_modules/d3-shape/src/curve/catmullRom.js");
/* harmony import */ var _curve_linearClosed_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./node_modules/d3-shape/src/curve/linearClosed.js");
/* harmony import */ var _curve_linear_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./node_modules/d3-shape/src/curve/linear.js");
/* harmony import */ var _curve_monotone_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./node_modules/d3-shape/src/curve/monotone.js");
/* harmony import */ var _curve_natural_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./node_modules/d3-shape/src/curve/natural.js");
/* harmony import */ var _curve_step_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./node_modules/d3-shape/src/curve/step.js");
/* harmony import */ var _stack_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./node_modules/d3-shape/src/stack.js");
/* harmony import */ var _offset_expand_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./node_modules/d3-shape/src/offset/expand.js");
/* harmony import */ var _offset_diverging_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./node_modules/d3-shape/src/offset/diverging.js");
/* harmony import */ var _offset_none_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./node_modules/d3-shape/src/offset/none.js");
/* harmony import */ var _offset_silhouette_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("./node_modules/d3-shape/src/offset/silhouette.js");
/* harmony import */ var _offset_wiggle_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("./node_modules/d3-shape/src/offset/wiggle.js");
/* harmony import */ var _order_appearance_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("./node_modules/d3-shape/src/order/appearance.js");
/* harmony import */ var _order_ascending_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("./node_modules/d3-shape/src/order/ascending.js");
/* harmony import */ var _order_descending_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("./node_modules/d3-shape/src/order/descending.js");
/* harmony import */ var _order_insideOut_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__("./node_modules/d3-shape/src/order/insideOut.js");
/* harmony import */ var _order_none_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__("./node_modules/d3-shape/src/order/none.js");
/* harmony import */ var _order_reverse_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__("./node_modules/d3-shape/src/order/reverse.js");




 // Note: radialArea is deprecated!
 // Note: radialLine is deprecated!










































/***/ }),

/***/ "./node_modules/d3-shape/src/line.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/node_modules/d3-path/src/path.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _curve_linear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/d3-shape/src/curve/linear.js");
/* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/d3-shape/src/point.js");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var x = _point_js__WEBPACK_IMPORTED_MODULE_3__.x,
      y = _point_js__WEBPACK_IMPORTED_MODULE_3__.y,
      defined = (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(true),
      context = null,
      curve = _curve_linear_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = (0,d3_path__WEBPACK_IMPORTED_MODULE_0__["default"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/lineRadial.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   lineRadial: () => (/* binding */ lineRadial)
/* harmony export */ });
/* harmony import */ var _curve_radial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/curve/radial.js");
/* harmony import */ var _line_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/d3-shape/src/line.js");



function lineRadial(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function(_) {
    return arguments.length ? c((0,_curve_radial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_)) : c()._curve;
  };

  return l;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return lineRadial((0,_line_js__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(_curve_radial_js__WEBPACK_IMPORTED_MODULE_0__.curveRadialLinear));
}


/***/ }),

/***/ "./node_modules/d3-shape/src/link/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   linkHorizontal: () => (/* binding */ linkHorizontal),
/* harmony export */   linkRadial: () => (/* binding */ linkRadial),
/* harmony export */   linkVertical: () => (/* binding */ linkVertical)
/* harmony export */ });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/node_modules/d3-path/src/path.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/d3-shape/src/array.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/d3-shape/src/point.js");
/* harmony import */ var _pointRadial_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/d3-shape/src/pointRadial.js");






function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link(curve) {
  var source = linkSource,
      target = linkTarget,
      x = _point_js__WEBPACK_IMPORTED_MODULE_3__.x,
      y = _point_js__WEBPACK_IMPORTED_MODULE_3__.y,
      context = null;

  function link() {
    var buffer, argv = _array_js__WEBPACK_IMPORTED_MODULE_1__.slice.call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
    if (!context) context = buffer = (0,d3_path__WEBPACK_IMPORTED_MODULE_0__["default"])();
    curve(context, +x.apply(this, (argv[0] = s, argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function(_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function(_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), link) : x;
  };

  link.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), link) : y;
  };

  link.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function curveVertical(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}

function curveRadial(context, x0, y0, x1, y1) {
  var p0 = (0,_pointRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x0, y0),
      p1 = (0,_pointRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x0, y0 = (y0 + y1) / 2),
      p2 = (0,_pointRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x1, y0),
      p3 = (0,_pointRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x1, y1);
  context.moveTo(p0[0], p0[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function linkHorizontal() {
  return link(curveHorizontal);
}

function linkVertical() {
  return link(curveVertical);
}

function linkRadial() {
  var l = link(curveRadial);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/math.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   abs: () => (/* binding */ abs),
/* harmony export */   acos: () => (/* binding */ acos),
/* harmony export */   asin: () => (/* binding */ asin),
/* harmony export */   atan2: () => (/* binding */ atan2),
/* harmony export */   cos: () => (/* binding */ cos),
/* harmony export */   epsilon: () => (/* binding */ epsilon),
/* harmony export */   halfPi: () => (/* binding */ halfPi),
/* harmony export */   max: () => (/* binding */ max),
/* harmony export */   min: () => (/* binding */ min),
/* harmony export */   pi: () => (/* binding */ pi),
/* harmony export */   sin: () => (/* binding */ sin),
/* harmony export */   sqrt: () => (/* binding */ sqrt),
/* harmony export */   tau: () => (/* binding */ tau)
/* harmony export */ });
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;

var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/noop.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {}


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/diverging.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) > 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = 0, d[1] = dy;
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/expand.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  (0,_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/none.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
}


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/silhouette.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  (0,_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/wiggle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  (0,_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/order/appearance.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(series) {
  var peaks = series.map(peak);
  return (0,_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series).sort(function(a, b) { return peaks[a] - peaks[b]; });
}

function peak(series) {
  var i = -1, j = 0, n = series.length, vi, vj = -Infinity;
  while (++i < n) if ((vi = +series[i][1]) > vj) vj = vi, j = i;
  return j;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/order/ascending.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   sum: () => (/* binding */ sum)
/* harmony export */ });
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(series) {
  var sums = series.map(sum);
  return (0,_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series).sort(function(a, b) { return sums[a] - sums[b]; });
}

function sum(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/order/descending.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/order/ascending.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(series) {
  return (0,_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series).reverse();
}


/***/ }),

/***/ "./node_modules/d3-shape/src/order/insideOut.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _appearance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/order/appearance.js");
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/d3-shape/src/order/ascending.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(series) {
  var n = series.length,
      i,
      j,
      sums = series.map(_ascending_js__WEBPACK_IMPORTED_MODULE_1__.sum),
      order = (0,_appearance_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series),
      top = 0,
      bottom = 0,
      tops = [],
      bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/order/none.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/order/reverse.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(series) {
  return (0,_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series).reverse();
}


/***/ }),

/***/ "./node_modules/d3-shape/src/pie.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _descending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/d3-shape/src/descending.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/d3-shape/src/identity.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/d3-shape/src/math.js");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var value = _identity_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      sortValues = _descending_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      sort = null,
      startAngle = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0),
      endAngle = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_math_js__WEBPACK_IMPORTED_MODULE_3__.tau),
      padAngle = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0);

  function pie(data) {
    var i,
        n = data.length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(_math_js__WEBPACK_IMPORTED_MODULE_3__.tau, Math.max(-_math_js__WEBPACK_IMPORTED_MODULE_3__.tau, endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : value;
  };

  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : startAngle;
  };

  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : endAngle;
  };

  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : padAngle;
  };

  return pie;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/point.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ x),
/* harmony export */   y: () => (/* binding */ y)
/* harmony export */ });
function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}


/***/ }),

/***/ "./node_modules/d3-shape/src/pointRadial.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
}


/***/ }),

/***/ "./node_modules/d3-shape/src/stack.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/array.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _offset_none_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/d3-shape/src/offset/none.js");
/* harmony import */ var _order_none_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/d3-shape/src/order/none.js");





function stackValue(d, key) {
  return d[key];
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var keys = (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])([]),
      order = _order_none_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      offset = _offset_none_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      value = stackValue;

  function stack(data) {
    var kz = keys.apply(this, arguments),
        i,
        m = data.length,
        n = kz.length,
        sz = new Array(n),
        oz;

    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }

    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_array_js__WEBPACK_IMPORTED_MODULE_0__.slice.call(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? _order_none_js__WEBPACK_IMPORTED_MODULE_3__["default"] : typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_array_js__WEBPACK_IMPORTED_MODULE_0__.slice.call(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? _offset_none_js__WEBPACK_IMPORTED_MODULE_2__["default"] : _, stack) : offset;
  };

  return stack;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   symbols: () => (/* binding */ symbols)
/* harmony export */ });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/node_modules/d3-path/src/path.js");
/* harmony import */ var _symbol_circle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/d3-shape/src/symbol/circle.js");
/* harmony import */ var _symbol_cross_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/d3-shape/src/symbol/cross.js");
/* harmony import */ var _symbol_diamond_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/d3-shape/src/symbol/diamond.js");
/* harmony import */ var _symbol_star_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/d3-shape/src/symbol/star.js");
/* harmony import */ var _symbol_square_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/d3-shape/src/symbol/square.js");
/* harmony import */ var _symbol_triangle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/d3-shape/src/symbol/triangle.js");
/* harmony import */ var _symbol_wye_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/d3-shape/src/symbol/wye.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/d3-shape/src/constant.js");










var symbols = [
  _symbol_circle_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _symbol_cross_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  _symbol_diamond_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  _symbol_square_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  _symbol_star_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  _symbol_triangle_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  _symbol_wye_js__WEBPACK_IMPORTED_MODULE_7__["default"]
];

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var type = (0,_constant_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_symbol_circle_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
      size = (0,_constant_js__WEBPACK_IMPORTED_MODULE_8__["default"])(64),
      context = null;

  function symbol() {
    var buffer;
    if (!context) context = buffer = (0,d3_path__WEBPACK_IMPORTED_MODULE_0__["default"])();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_8__["default"])(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/circle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/math.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / _math_js__WEBPACK_IMPORTED_MODULE_0__.pi);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, _math_js__WEBPACK_IMPORTED_MODULE_0__.tau);
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/cross.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/diamond.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/square.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/star.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/d3-shape/src/math.js");


var ka = 0.89081309152928522810,
    kr = Math.sin(_math_js__WEBPACK_IMPORTED_MODULE_0__.pi / 10) / Math.sin(7 * _math_js__WEBPACK_IMPORTED_MODULE_0__.pi / 10),
    kx = Math.sin(_math_js__WEBPACK_IMPORTED_MODULE_0__.tau / 10) * kr,
    ky = -Math.cos(_math_js__WEBPACK_IMPORTED_MODULE_0__.tau / 10) * kr;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = _math_js__WEBPACK_IMPORTED_MODULE_0__.tau * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/triangle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var sqrt3 = Math.sqrt(3);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/wye.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k,
        x1 = x0,
        y1 = r * k + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/debounce/index.js":
/***/ ((module) => {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

// Adds compatibility for ES modules
debounce.debounce = debounce;

module.exports = debounce;


/***/ }),

/***/ "./node_modules/react-use-measure/dist/web.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_1__);



function useMeasure({
  debounce: debounce$1,
  scroll,
  polyfill
} = {
  debounce: 0,
  scroll: false
}) {
  const ResizeObserver = polyfill || (typeof window === 'undefined' ? class ResizeObserver {} : window.ResizeObserver);

  if (!ResizeObserver) {
    throw new Error('This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills');
  }

  const [bounds, set] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    bottom: 0,
    right: 0,
    x: 0,
    y: 0
  }); // keep all state in a ref

  const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    element: null,
    scrollContainers: null,
    resizeObserver: null,
    lastBounds: bounds
  }); // set actual debounce values early, so effects know if they should react accordingly

  const scrollDebounce = debounce$1 ? typeof debounce$1 === 'number' ? debounce$1 : debounce$1.scroll : null;
  const resizeDebounce = debounce$1 ? typeof debounce$1 === 'number' ? debounce$1 : debounce$1.resize : null; // make sure to update state only as long as the component is truly mounted

  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    mounted.current = true;
    return () => void (mounted.current = false);
  }); // memoize handlers, so event-listeners know when they should update

  const [forceRefresh, resizeChange, scrollChange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const callback = () => {
      if (!state.current.element) return;
      const {
        left,
        top,
        width,
        height,
        bottom,
        right,
        x,
        y
      } = state.current.element.getBoundingClientRect();
      const size = {
        left,
        top,
        width,
        height,
        bottom,
        right,
        x,
        y
      };
      Object.freeze(size);
      if (mounted.current && !areBoundsEqual(state.current.lastBounds, size)) set(state.current.lastBounds = size);
    };

    return [callback, resizeDebounce ? (0,debounce__WEBPACK_IMPORTED_MODULE_1__.debounce)(callback, resizeDebounce) : callback, scrollDebounce ? (0,debounce__WEBPACK_IMPORTED_MODULE_1__.debounce)(callback, scrollDebounce) : callback];
  }, [set, scrollDebounce, resizeDebounce]); // cleanup current scroll-listeners / observers

  function removeListeners() {
    if (state.current.scrollContainers) {
      state.current.scrollContainers.forEach(element => element.removeEventListener('scroll', scrollChange, true));
      state.current.scrollContainers = null;
    }

    if (state.current.resizeObserver) {
      state.current.resizeObserver.disconnect();
      state.current.resizeObserver = null;
    }
  } // add scroll-listeners / observers


  function addListeners() {
    if (!state.current.element) return;
    state.current.resizeObserver = new ResizeObserver(scrollChange);
    state.current.resizeObserver.observe(state.current.element);

    if (scroll && state.current.scrollContainers) {
      state.current.scrollContainers.forEach(scrollContainer => scrollContainer.addEventListener('scroll', scrollChange, {
        capture: true,
        passive: true
      }));
    }
  } // the ref we expose to the user


  const ref = node => {
    if (!node || node === state.current.element) return;
    removeListeners();
    state.current.element = node;
    state.current.scrollContainers = findScrollContainers(node);
    addListeners();
  }; // add general event listeners


  useOnWindowScroll(scrollChange, Boolean(scroll));
  useOnWindowResize(resizeChange); // respond to changes that are relevant for the listeners

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    removeListeners();
    addListeners();
  }, [scroll, scrollChange, resizeChange]); // remove all listeners when the components unmounts

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => removeListeners, []);
  return [ref, bounds, forceRefresh];
} // Adds native resize listener to window


function useOnWindowResize(onWindowResize) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const cb = onWindowResize;
    window.addEventListener('resize', cb);
    return () => void window.removeEventListener('resize', cb);
  }, [onWindowResize]);
}

function useOnWindowScroll(onScroll, enabled) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (enabled) {
      const cb = onScroll;
      window.addEventListener('scroll', cb, {
        capture: true,
        passive: true
      });
      return () => void window.removeEventListener('scroll', cb, true);
    }
  }, [onScroll, enabled]);
} // Returns a list of scroll offsets


function findScrollContainers(element) {
  const result = [];
  if (!element || element === document.body) return result;
  const {
    overflow,
    overflowX,
    overflowY
  } = window.getComputedStyle(element);
  if ([overflow, overflowX, overflowY].some(prop => prop === 'auto' || prop === 'scroll')) result.push(element);
  return [...result, ...findScrollContainers(element.parentElement)];
} // Checks if element boundaries are equal


const keys = ['x', 'y', 'top', 'bottom', 'left', 'right', 'width', 'height'];

const areBoundsEqual = (a, b) => keys.every(key => a[key] === b[key]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMeasure);


/***/ }),

/***/ "./packages/grafana-ui/src/utils/useComponetInstanceId.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useComponentInstanceId: () => (/* binding */ useComponentInstanceId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


let uniqueId = 0;
const getUniqueId = () => uniqueId++;
function useComponentInstanceId(prefix) {
  const idRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  if (idRef.current === null) {
    idRef.current = prefix + getUniqueId();
  }
  return idRef.current.toString();
}


/***/ }),

/***/ "./public/app/plugins/panel/piechart/PieChart.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PieChart: () => (/* binding */ PieChart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _visx_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@visx/event/esm/localPoint.js");
/* harmony import */ var _visx_gradient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@visx/gradient/esm/gradients/RadialGradient.js");
/* harmony import */ var _visx_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@visx/group/esm/Group.js");
/* harmony import */ var _visx_shape_lib_shapes_Pie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@visx/shape/lib/shapes/Pie.js");
/* harmony import */ var _visx_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@visx/tooltip/esm/hooks/useTooltip.js");
/* harmony import */ var _visx_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@visx/tooltip/esm/hooks/useTooltipInPortal.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/tinycolor2/esm/tinycolor.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-data/src/events/common.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/VizTooltip/SeriesTable.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/PanelContext.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/DataLinks/DataLinksContextMenu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/themes/mixins.ts");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./packages/grafana-ui/src/utils/useComponetInstanceId.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/plugins/panel/piechart/panelcfg.gen.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/plugins/panel/piechart/utils.ts");
















const PieChart = ({
  fieldDisplayValues,
  pieType,
  sort,
  width,
  height,
  highlightedTitle,
  displayLabels = [],
  tooltipOptions
}) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.useTheme2)();
  const componentInstanceId = (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_19__.useComponentInstanceId)("PieChart");
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.useStyles2)(getStyles);
  const tooltip = (0,_visx_tooltip__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const { containerRef, TooltipInPortal } = (0,_visx_tooltip__WEBPACK_IMPORTED_MODULE_7__["default"])({
    detectBounds: true,
    scroll: true
  });
  const filteredFieldDisplayValues = fieldDisplayValues.filter(_utils__WEBPACK_IMPORTED_MODULE_21__.filterDisplayItems);
  const getValue = (d) => d.display.numeric;
  const getGradientId = (color) => `${componentInstanceId}-${(0,tinycolor2__WEBPACK_IMPORTED_MODULE_9__["default"])(color).toHex()}`;
  const getGradientColor = (color) => {
    return `url(#${getGradientId(color)})`;
  };
  const showLabel = displayLabels.length > 0;
  const showTooltip = tooltipOptions.mode !== "none" && tooltip.tooltipOpen;
  const total = filteredFieldDisplayValues.reduce(_utils__WEBPACK_IMPORTED_MODULE_21__.sumDisplayItemsReducer, 0);
  const layout = getPieLayout(width, height, pieType);
  const colors = [
    ...new Set(
      filteredFieldDisplayValues.map((fieldDisplayValue) => fieldDisplayValue.display.color ?? _grafana_data__WEBPACK_IMPORTED_MODULE_12__.FALLBACK_COLOR)
    )
  ];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: layout.size, height: layout.size, ref: containerRef, style: { overflow: "visible" }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_visx_group__WEBPACK_IMPORTED_MODULE_4__["default"], { top: layout.position, left: layout.position, children: [
      colors.map((color) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _visx_gradient__WEBPACK_IMPORTED_MODULE_3__["default"],
          {
            id: getGradientId(color),
            from: getGradientColorFrom(color, theme),
            to: getGradientColorTo(color, theme),
            fromOffset: layout.gradientFromOffset,
            toOffset: "1",
            gradientUnits: "userSpaceOnUse",
            cx: 0,
            cy: 0,
            radius: layout.outerRadius
          },
          color
        );
      }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _visx_shape_lib_shapes_Pie__WEBPACK_IMPORTED_MODULE_5__["default"],
        {
          data: filteredFieldDisplayValues,
          pieValue: getValue,
          pieSortValues: () => 0,
          outerRadius: layout.outerRadius,
          innerRadius: layout.innerRadius,
          cornerRadius: 3,
          padAngle: 5e-3,
          children: (pie) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            pie.arcs.map((arc) => {
              const color = arc.data.display.color ?? _grafana_data__WEBPACK_IMPORTED_MODULE_12__.FALLBACK_COLOR;
              const highlightState = getHighlightState(highlightedTitle, arc);
              if (arc.data.hasLinks && arc.data.getLinks) {
                return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.DataLinksContextMenu, { links: arc.data.getLinks, children: (api) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  PieSlice,
                  {
                    tooltip,
                    highlightState,
                    arc,
                    pie,
                    fill: getGradientColor(color),
                    openMenu: api.openMenu,
                    tooltipOptions
                  }
                ) }, arc.index);
              } else {
                return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  PieSlice,
                  {
                    highlightState,
                    tooltip,
                    arc,
                    pie,
                    fill: getGradientColor(color),
                    tooltipOptions
                  },
                  arc.index
                );
              }
            }),
            showLabel && pie.arcs.map((arc) => {
              const highlightState = getHighlightState(highlightedTitle, arc);
              return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                PieLabel,
                {
                  arc,
                  highlightState,
                  outerRadius: layout.outerRadius,
                  innerRadius: layout.innerRadius,
                  displayLabels,
                  total,
                  color: theme.colors.text.primary
                },
                arc.index
              );
            })
          ] })
        }
      )
    ] }) }),
    showTooltip ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      TooltipInPortal,
      {
        top: tooltip.tooltipTop,
        className: styles.tooltipPortal,
        left: tooltip.tooltipLeft,
        unstyled: true,
        applyPositionStyle: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.SeriesTable, { series: tooltip.tooltipData })
      },
      Math.random()
    ) : null
  ] });
};
function PieSlice({ arc, pie, highlightState, openMenu, fill, tooltip, tooltipOptions }) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.useTheme2)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.useStyles2)(getStyles);
  const { eventBus } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.usePanelContext)();
  const onMouseOut = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(
    (event) => {
      eventBus?.publish({
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_10__.DataHoverClearEvent.type,
        payload: {
          raw: event,
          x: 0,
          y: 0,
          dataId: arc.data.display.title
        }
      });
      tooltip.hideTooltip();
    },
    [eventBus, arc, tooltip]
  );
  const onMouseMoveOverArc = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(
    (event) => {
      eventBus?.publish({
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_10__.DataHoverEvent.type,
        payload: {
          raw: event,
          x: 0,
          y: 0,
          dataId: arc.data.display.title
        }
      });
      const owner = event.currentTarget.ownerSVGElement;
      if (owner) {
        const coords = (0,_visx_event__WEBPACK_IMPORTED_MODULE_2__["default"])(owner, event);
        tooltip.showTooltip({
          tooltipLeft: coords.x,
          tooltipTop: coords.y,
          tooltipData: getTooltipData(pie, arc, tooltipOptions)
        });
      }
    },
    [eventBus, arc, tooltip, pie, tooltipOptions]
  );
  const pieStyle = getSvgStyle(highlightState, styles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "g",
    {
      className: pieStyle,
      onMouseMove: tooltipOptions.mode !== "none" ? onMouseMoveOverArc : void 0,
      onMouseOut,
      onClick: openMenu,
      "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_13__.selectors.components.Panels.Visualization.PieChart.svgSlice,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: pie.path({ ...arc }), fill, stroke: theme.colors.background.primary, strokeWidth: 1 })
    },
    arc.data.display.title
  );
}
function PieLabel({ arc, outerRadius, innerRadius, displayLabels, total, color, highlightState }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.useStyles2)(getStyles);
  const labelRadius = innerRadius === 0 ? outerRadius / 6 : innerRadius;
  const [labelX, labelY] = getLabelPos(arc, outerRadius, labelRadius);
  const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.3;
  if (!hasSpaceForLabel) {
    return null;
  }
  let labelFontSize = displayLabels.includes(_panelcfg_gen__WEBPACK_IMPORTED_MODULE_20__.PieChartLabels.Name) ? Math.min(Math.max(outerRadius / 150 * 14, 12), 30) : Math.min(Math.max(outerRadius / 100 * 14, 12), 36);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", { className: getSvgStyle(highlightState, styles), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    "text",
    {
      fill: color,
      x: labelX,
      y: labelY,
      dy: ".33em",
      fontSize: labelFontSize,
      fontWeight: 500,
      textAnchor: "middle",
      pointerEvents: "none",
      children: [
        displayLabels.includes(_panelcfg_gen__WEBPACK_IMPORTED_MODULE_20__.PieChartLabels.Name) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tspan", { x: labelX, dy: "1.2em", children: arc.data.display.title }),
        displayLabels.includes(_panelcfg_gen__WEBPACK_IMPORTED_MODULE_20__.PieChartLabels.Value) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tspan", { x: labelX, dy: "1.2em", children: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_11__.formattedValueToString)(arc.data.display) }),
        displayLabels.includes(_panelcfg_gen__WEBPACK_IMPORTED_MODULE_20__.PieChartLabels.Percent) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tspan", { x: labelX, dy: "1.2em", children: (arc.data.display.numeric / total * 100).toFixed(arc.data.field.decimals ?? 0) + "%" })
      ]
    }
  ) });
}
function getTooltipData(pie, arc, tooltipOptions) {
  if (tooltipOptions.mode === "multi") {
    return pie.arcs.filter((pa) => {
      if (tooltipOptions.hideZeros && pa.value === 0) {
        return false;
      }
      const customConfig = pa.data.field.custom;
      return !customConfig?.hideFrom?.tooltip;
    }).map((pieArc) => {
      return {
        color: pieArc.data.display.color ?? _grafana_data__WEBPACK_IMPORTED_MODULE_12__.FALLBACK_COLOR,
        label: pieArc.data.display.title,
        value: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_11__.formattedValueToString)(pieArc.data.display),
        isActive: pieArc.index === arc.index
      };
    });
  }
  return [
    {
      color: arc.data.display.color ?? _grafana_data__WEBPACK_IMPORTED_MODULE_12__.FALLBACK_COLOR,
      label: arc.data.display.title,
      value: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_11__.formattedValueToString)(arc.data.display)
    }
  ];
}
function getLabelPos(arc, outerRadius, innerRadius) {
  const r = (outerRadius + innerRadius) / 2;
  const a = (+arc.startAngle + +arc.endAngle) / 2 - Math.PI / 2;
  return [Math.cos(a) * r, Math.sin(a) * r];
}
function getGradientColorFrom(color, theme) {
  return (0,tinycolor2__WEBPACK_IMPORTED_MODULE_9__["default"])(color).darken(20 * (theme.isDark ? 1 : -0.7)).spin(4).toRgbString();
}
function getGradientColorTo(color, theme) {
  return (0,tinycolor2__WEBPACK_IMPORTED_MODULE_9__["default"])(color).darken(10 * (theme.isDark ? 1 : -0.7)).spin(-4).toRgbString();
}
function getPieLayout(height, width, pieType, margin = 16) {
  const size = Math.min(width, height);
  const outerRadius = (size - margin * 2) / 2;
  const donutThickness = pieType === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_20__.PieChartType.Pie ? outerRadius : Math.max(outerRadius / 3, 20);
  const innerRadius = outerRadius - donutThickness;
  const centerOffset = (size - margin * 2) / 2;
  const gradientFromOffset = 1 - (outerRadius - innerRadius) / outerRadius;
  return {
    position: centerOffset + margin,
    size,
    outerRadius,
    innerRadius,
    gradientFromOffset
  };
}
var HighLightState = /* @__PURE__ */ ((HighLightState2) => {
  HighLightState2[HighLightState2["Highlighted"] = 0] = "Highlighted";
  HighLightState2[HighLightState2["Deemphasized"] = 1] = "Deemphasized";
  HighLightState2[HighLightState2["Normal"] = 2] = "Normal";
  return HighLightState2;
})(HighLightState || {});
function getHighlightState(highlightedTitle, arc) {
  if (highlightedTitle) {
    if (highlightedTitle === arc.data.display.title) {
      return 0 /* Highlighted */;
    } else {
      return 1 /* Deemphasized */;
    }
  }
  return 2 /* Normal */;
}
function getSvgStyle(highlightState, styles) {
  switch (highlightState) {
    case 0 /* Highlighted */:
      return styles.svgArg.highlighted;
    case 1 /* Deemphasized */:
      return styles.svgArg.deemphasized;
    case 2 /* Normal */:
    default:
      return styles.svgArg.normal;
  }
}
const getStyles = (theme) => {
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }),
    svgArg: {
      normal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        [theme.transitions.handleMotion("no-preference")]: {
          transition: "all 200ms ease-in-out"
        }
      }),
      highlighted: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        [theme.transitions.handleMotion("no-preference")]: {
          transition: "all 200ms ease-in-out"
        },
        transform: "scale3d(1.03, 1.03, 1)"
      }),
      deemphasized: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        [theme.transitions.handleMotion("no-preference")]: {
          transition: "all 200ms ease-in-out"
        },
        fillOpacity: 0.5
      })
    },
    tooltipPortal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)((0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_18__.getTooltipContainerStyles)(theme))
  };
};


/***/ }),

/***/ "./public/app/plugins/panel/piechart/PieChartPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PieChartPanel: () => (/* binding */ PieChartPanel),
/* harmony export */   comparePieChartItemsByValue: () => (/* binding */ comparePieChartItemsByValue)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/events/common.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/field/fieldDisplay.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/components/PanelDataErrorView.tsx");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/PanelContext.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/VizLayout/VizLayout.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/VizLegend/types.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/VizLegend/VizLegend.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _PieChart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/panel/piechart/PieChart.tsx");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/panel/piechart/panelcfg.gen.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/panel/piechart/utils.ts");











const defaultLegendOptions = {
  displayMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.LegendDisplayMode.List,
  showLegend: true,
  placement: "right",
  calcs: [],
  values: [_panelcfg_gen__WEBPACK_IMPORTED_MODULE_15__.PieChartLegendValues.Percent]
};
function PieChartPanel(props) {
  const { data, timeZone, fieldConfig, replaceVariables, width, height, options, id } = props;
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.useTheme2)();
  const highlightedTitle = useSliceHighlightState();
  const fieldDisplayValues = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.getFieldDisplayValues)({
    fieldConfig,
    reduceOptions: options.reduceOptions,
    data: data.series,
    theme,
    replaceVariables,
    timeZone
  });
  if (!hasFrames(fieldDisplayValues)) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.PanelDataErrorView, { panelId: id, fieldConfig, data });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.VizLayout, { width, height, legend: getLegend(props, fieldDisplayValues), children: (vizWidth, vizHeight) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _PieChart__WEBPACK_IMPORTED_MODULE_14__.PieChart,
      {
        width: vizWidth,
        height: vizHeight,
        highlightedTitle,
        fieldDisplayValues,
        tooltipOptions: options.tooltip,
        pieType: options.pieType,
        sort: options.sort,
        displayLabels: options.displayLabels
      }
    );
  } });
}
function getLegend(props, displayValues) {
  const legendOptions = props.options.legend ?? defaultLegendOptions;
  if (legendOptions.showLegend === false) {
    return void 0;
  }
  const sortedDisplayValues = displayValues.sort(comparePieChartItemsByValue(props.options.sort));
  const total = displayValues.filter(_utils__WEBPACK_IMPORTED_MODULE_16__.filterDisplayItems).reduce(_utils__WEBPACK_IMPORTED_MODULE_16__.sumDisplayItemsReducer, 0);
  const legendItems = sortedDisplayValues.map((value, idx) => {
    const hideFrom = value.field.custom?.hideFrom ?? {};
    if (hideFrom.legend) {
      return void 0;
    }
    const hideFromViz = Boolean(hideFrom.viz);
    const display = value.display;
    return {
      label: display.title ?? "",
      color: display.color ?? _grafana_data__WEBPACK_IMPORTED_MODULE_6__.FALLBACK_COLOR,
      yAxis: 1,
      disabled: hideFromViz,
      getItemKey: () => (display.title ?? "") + idx,
      getDisplayValues: () => {
        const valuesToShow = legendOptions.values ?? [];
        let displayValues2 = [];
        if (valuesToShow.includes(_panelcfg_gen__WEBPACK_IMPORTED_MODULE_15__.PieChartLegendValues.Value)) {
          displayValues2.push({ numeric: display.numeric, text: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.formattedValueToString)(display), title: "Value" });
        }
        if (valuesToShow.includes(_panelcfg_gen__WEBPACK_IMPORTED_MODULE_15__.PieChartLegendValues.Percent)) {
          const fractionOfTotal = hideFromViz ? 0 : display.numeric / total;
          const percentOfTotal = fractionOfTotal * 100;
          displayValues2.push({
            numeric: fractionOfTotal,
            percent: percentOfTotal,
            text: hideFromViz || isNaN(fractionOfTotal) ? props.fieldConfig.defaults.noValue ?? "-" : percentOfTotal.toFixed(value.field.decimals ?? 0) + "%",
            title: valuesToShow.length > 1 ? "Percent" : ""
          });
        }
        return displayValues2;
      }
    };
  }).filter((i) => !!i);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.VizLayout.Legend, { placement: legendOptions.placement, width: legendOptions.width, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.VizLegend,
    {
      items: legendItems,
      seriesVisibilityChangeBehavior: _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.SeriesVisibilityChangeBehavior.Hide,
      placement: legendOptions.placement,
      displayMode: legendOptions.displayMode
    }
  ) });
}
function comparePieChartItemsByValue(sort) {
  return function(a, b) {
    if (isNaN(a.display.numeric)) {
      return 1;
    }
    if (isNaN(b.display.numeric)) {
      return -1;
    }
    if (sort === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.SortOrder.Descending) {
      return b.display.numeric - a.display.numeric;
    }
    if (sort === _grafana_schema__WEBPACK_IMPORTED_MODULE_8__.SortOrder.Ascending) {
      return a.display.numeric - b.display.numeric;
    }
    return 0;
  };
}
function hasFrames(fieldDisplayValues) {
  return fieldDisplayValues.some((fd) => fd.view?.dataFrame.length);
}
function useSliceHighlightState() {
  const [highlightedTitle, setHighlightedTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const { eventBus } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.usePanelContext)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const setHighlightedSlice = (event) => {
      setHighlightedTitle(event.payload.dataId);
    };
    const resetHighlightedSlice = (event) => {
      setHighlightedTitle(void 0);
    };
    const subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
    subs.add(eventBus.getStream(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.DataHoverEvent).subscribe({ next: setHighlightedSlice }));
    subs.add(eventBus.getStream(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.DataHoverClearEvent).subscribe({ next: resetHighlightedSlice }));
    return () => {
      subs.unsubscribe();
    };
  }, [setHighlightedTitle, eventBus]);
  return highlightedTitle;
}


/***/ }),

/***/ "./public/app/plugins/panel/piechart/migrations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PieChartPanelChangedHandler: () => (/* binding */ PieChartPanelChangedHandler)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/fieldOverrides.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/piechart/panelcfg.gen.ts");




const PieChartPanelChangedHandler = (panel, prevPluginId, prevOptions) => {
  if (prevPluginId === "grafana-piechart-panel" && prevOptions.angular) {
    const angular = prevOptions.angular;
    const overrides = [];
    let options = panel.options;
    if (angular.aliasColors) {
      for (const alias of Object.keys(angular.aliasColors)) {
        const color = angular.aliasColors[alias];
        if (color) {
          overrides.push({
            matcher: {
              id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byName,
              options: alias
            },
            properties: [
              {
                id: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldConfigProperty.Color,
                value: {
                  mode: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldColorModeId.Fixed,
                  fixedColor: color
                }
              }
            ]
          });
        }
      }
    }
    panel.fieldConfig = {
      overrides,
      defaults: {
        unit: angular.format,
        decimals: angular.decimals ? angular.decimals : 0
        // Old piechart defaults to 0 decimals while the new one defaults to 1
      }
    };
    options.legend = {
      placement: "right",
      values: [],
      displayMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.LegendDisplayMode.Table,
      showLegend: true,
      calcs: []
    };
    if (angular.valueName) {
      options.reduceOptions = { calcs: [] };
      switch (angular.valueName) {
        case "current":
          options.reduceOptions.calcs = ["lastNotNull"];
          break;
        case "min":
          options.reduceOptions.calcs = ["min"];
          break;
        case "max":
          options.reduceOptions.calcs = ["max"];
          break;
        case "avg":
          options.reduceOptions.calcs = ["mean"];
          break;
        case "total":
          options.reduceOptions.calcs = ["sum"];
          break;
      }
    }
    switch (angular.legendType) {
      case "Under graph":
        options.legend.placement = "bottom";
        break;
      case "Right side":
        options.legend.placement = "right";
        break;
    }
    switch (angular.pieType) {
      case "pie":
        options.pieType = _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.PieChartType.Pie;
        break;
      case "donut":
        options.pieType = _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.PieChartType.Donut;
        break;
    }
    if (angular.legend) {
      if (!angular.legend.show) {
        options.legend.showLegend = false;
      }
      if (angular.legend.values) {
        options.legend.values.push(_panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.PieChartLegendValues.Value);
      }
      if (angular.legend.percentage) {
        options.legend.values.push(_panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.PieChartLegendValues.Percent);
      }
    }
    if (angular.legendType === "On graph") {
      options.legend.showLegend = false;
      options.displayLabels = [_panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.PieChartLabels.Name];
      if (angular.legend.values) {
        options.displayLabels.push(_panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.PieChartLabels.Value);
      }
      if (angular.legend.percentage) {
        options.displayLabels.push(_panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.PieChartLabels.Percent);
      }
    }
    return options;
  }
  return {};
};


/***/ }),

/***/ "./public/app/plugins/panel/piechart/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/fieldOverrides.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_schema_dist_esm_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/options/builder/hideSeries.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/options/builder/tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/options/builder/legend.tsx");
/* harmony import */ var _stat_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/stat/common.ts");
/* harmony import */ var _PieChartPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/piechart/PieChartPanel.tsx");
/* harmony import */ var _migrations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/piechart/migrations.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/panel/piechart/panelcfg.gen.ts");
/* harmony import */ var _suggestions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/panel/piechart/suggestions.ts");











const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_PieChartPanel__WEBPACK_IMPORTED_MODULE_9__.PieChartPanel).setPanelChangeHandler(_migrations__WEBPACK_IMPORTED_MODULE_10__.PieChartPanelChangedHandler).useFieldConfig({
  disableStandardOptions: [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldConfigProperty.Thresholds],
  standardOptions: {
    [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldConfigProperty.Color]: {
      settings: {
        byValueSupport: false,
        bySeriesSupport: true,
        preferThresholdsMode: false
      },
      defaultValue: {
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldColorModeId.PaletteClassic
      }
    }
  },
  useCustomConfig: (builder) => {
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.addHideFrom(builder);
  }
}).setPanelOptions((builder) => {
  (0,_stat_common__WEBPACK_IMPORTED_MODULE_8__.addStandardDataReduceOptions)(builder);
  const category = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("piechart.category-pie-chart", "Pie chart")];
  const legendCategory = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("piechart.category-legend", "Legend")];
  builder.addRadio({
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("piechart.name-pie-chart-type", "Pie chart type"),
    category,
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("piechart.description-pie-chart-type", "How the pie chart should be rendered"),
    path: "pieType",
    settings: {
      options: [
        { value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_11__.PieChartType.Pie, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("piechart.pie-chart-type-options.label-pie", "Pie") },
        { value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_11__.PieChartType.Donut, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("piechart.pie-chart-type-options.label-donut", "Donut") }
      ]
    },
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_11__.PieChartType.Pie
  }).addSelect({
    name: "Slice sorting",
    description: "Select how to sort the pie slices",
    path: "sort",
    settings: {
      options: [
        { value: _grafana_schema_dist_esm_index__WEBPACK_IMPORTED_MODULE_4__.SortOrder.Descending, label: "Descending" },
        { value: _grafana_schema_dist_esm_index__WEBPACK_IMPORTED_MODULE_4__.SortOrder.Ascending, label: "Ascending" },
        { value: _grafana_schema_dist_esm_index__WEBPACK_IMPORTED_MODULE_4__.SortOrder.None, label: "None" }
      ]
    },
    defaultValue: _grafana_schema_dist_esm_index__WEBPACK_IMPORTED_MODULE_4__.SortOrder.Descending
  }).addMultiSelect({
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("piechart.name-labels", "Labels"),
    category,
    path: "displayLabels",
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("piechart.description-labels", "Select the labels to be displayed in the pie chart"),
    settings: {
      options: [
        { value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_11__.PieChartLabels.Percent, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("piechart.labels-options.label-percent", "Percent") },
        { value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_11__.PieChartLabels.Name, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("piechart.labels-options.label-name", "Name") },
        { value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_11__.PieChartLabels.Value, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("piechart.labels-options.label-value", "Value") }
      ]
    }
  });
  _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.addTooltipOptions(builder, false, false, _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.optsWithHideZeros);
  _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.addLegendOptions(builder, false);
  builder.addMultiSelect({
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("piechart.name-legend-values", "Legend values"),
    path: "legend.values",
    category: legendCategory,
    settings: {
      options: [
        { value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_11__.PieChartLegendValues.Percent, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("piechart.legend-values-options.label-percent", "Percent") },
        { value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_11__.PieChartLegendValues.Value, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("piechart.legend-values-options.label-value", "Value") }
      ]
    },
    showIf: (c) => c.legend.showLegend !== false
  });
}).setSuggestionsSupplier(new _suggestions__WEBPACK_IMPORTED_MODULE_12__.PieChartSuggestionsSupplier());


/***/ }),

/***/ "./public/app/plugins/panel/piechart/panelcfg.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PieChartLabels: () => (/* binding */ PieChartLabels),
/* harmony export */   PieChartLegendValues: () => (/* binding */ PieChartLegendValues),
/* harmony export */   PieChartType: () => (/* binding */ PieChartType),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions),
/* harmony export */   defaultPieChartLegendOptions: () => (/* binding */ defaultPieChartLegendOptions)
/* harmony export */ });

var PieChartType = /* @__PURE__ */ ((PieChartType2) => {
  PieChartType2["Donut"] = "donut";
  PieChartType2["Pie"] = "pie";
  return PieChartType2;
})(PieChartType || {});
var PieChartLabels = /* @__PURE__ */ ((PieChartLabels2) => {
  PieChartLabels2["Name"] = "name";
  PieChartLabels2["Percent"] = "percent";
  PieChartLabels2["Value"] = "value";
  return PieChartLabels2;
})(PieChartLabels || {});
var PieChartLegendValues = /* @__PURE__ */ ((PieChartLegendValues2) => {
  PieChartLegendValues2["Percent"] = "percent";
  PieChartLegendValues2["Value"] = "value";
  return PieChartLegendValues2;
})(PieChartLegendValues || {});
const defaultPieChartLegendOptions = {
  values: []
};
const defaultOptions = {
  displayLabels: []
};


/***/ }),

/***/ "./public/app/plugins/panel/piechart/suggestions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PieChartSuggestionsSupplier: () => (/* binding */ PieChartSuggestionsSupplier)
/* harmony export */ });
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/suggestions.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/piechart/panelcfg.gen.ts");




class PieChartSuggestionsSupplier {
  getSuggestionsForData(builder) {
    const list = builder.getListAppender({
      name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionName.PieChart,
      pluginId: "piechart",
      options: {
        reduceOptions: {
          values: false,
          calcs: ["lastNotNull"]
        },
        displayLabels: [_panelcfg_gen__WEBPACK_IMPORTED_MODULE_2__.PieChartLabels.Percent],
        legend: {
          calcs: [],
          displayMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.LegendDisplayMode.Hidden,
          placement: "right",
          values: [],
          showLegend: false
        }
      }
    });
    const { dataSummary } = builder;
    if (!dataSummary.hasNumberField) {
      return;
    }
    if (dataSummary.hasStringField && dataSummary.frameCount === 1) {
      if (dataSummary.rowCountTotal > 30 || dataSummary.rowCountTotal < 2) {
        return;
      }
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionName.PieChart,
        options: {
          reduceOptions: {
            values: true,
            calcs: []
          }
        }
      });
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionName.PieChartDonut,
        options: {
          reduceOptions: {
            values: true,
            calcs: []
          },
          pieType: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_2__.PieChartType.Donut
        }
      });
      return;
    }
    if (dataSummary.numberFieldCount > 30 || dataSummary.numberFieldCount < 2) {
      return;
    }
    list.append({
      name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionName.PieChart
    });
    list.append({
      name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionName.PieChartDonut,
      options: {
        pieType: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_2__.PieChartType.Donut
      }
    });
  }
}


/***/ }),

/***/ "./public/app/plugins/panel/piechart/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterDisplayItems: () => (/* binding */ filterDisplayItems),
/* harmony export */   sumDisplayItemsReducer: () => (/* binding */ sumDisplayItemsReducer)
/* harmony export */ });

function filterDisplayItems(item) {
  return !item.field.custom?.hideFrom?.viz && !isNaN(item.display.numeric);
}
function sumDisplayItemsReducer(acc, item) {
  return item.display.numeric + acc;
}


/***/ }),

/***/ "./public/app/plugins/panel/stat/common.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addOrientationOption: () => (/* binding */ addOrientationOption),
/* harmony export */   addStandardDataReduceOptions: () => (/* binding */ addStandardDataReduceOptions)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/text/string.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/field/standardFieldConfigEditorRegistry.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/transformations/fieldReducer.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");




function addStandardDataReduceOptions(builder, includeFieldMatcher = true) {
  const valueOptionsCategory = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("stat.add-standard-data-reduce-options.category-value-options", "Value options")];
  builder.addRadio({
    path: "reduceOptions.values",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("stat.add-standard-data-reduce-options.name-show", "Show"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
      "stat.add-standard-data-reduce-options.description-show",
      "Calculate a single value per column or series or show each row"
    ),
    settings: {
      options: [
        { value: false, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("stat.add-standard-data-reduce-options.show-options.label-calculate", "Calculate") },
        { value: true, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("stat.add-standard-data-reduce-options.show-options.label-all-values", "All values") }
      ]
    },
    category: valueOptionsCategory,
    defaultValue: false
  });
  builder.addNumberInput({
    path: "reduceOptions.limit",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("stat.add-standard-data-reduce-options.name-limit", "Limit"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("stat.add-standard-data-reduce-options.description-limit", "Max number of rows to display"),
    category: valueOptionsCategory,
    settings: {
      placeholder: "25",
      integer: true,
      min: 1,
      max: 5e3
    },
    showIf: (options) => options.reduceOptions.values === true
  });
  builder.addCustomEditor({
    id: "reduceOptions.calcs",
    path: "reduceOptions.calcs",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("stat.add-standard-data-reduce-options.name-calculation", "Calculation"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
      "stat.add-standard-data-reduce-options.description-calculation",
      "Choose a reducer function / calculation"
    ),
    category: valueOptionsCategory,
    editor: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.standardEditorsRegistry.get("stats-picker").editor,
    // TODO: Get ReducerID from generated schema one day?
    defaultValue: [_grafana_data__WEBPACK_IMPORTED_MODULE_3__.ReducerID.lastNotNull],
    // Hides it when all values mode is on
    showIf: (currentConfig) => currentConfig.reduceOptions.values === false
  });
  if (includeFieldMatcher) {
    builder.addSelect({
      path: "reduceOptions.fields",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("stat.add-standard-data-reduce-options.name-fields", "Fields"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "stat.add-standard-data-reduce-options.description-fields",
        "Select the fields that should be included in the panel"
      ),
      category: valueOptionsCategory,
      settings: {
        allowCustomValue: true,
        options: [],
        getOptions: async (context) => {
          const options = [
            {
              value: "",
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("stat.add-standard-data-reduce-options.fields-options.label-numeric-fields", "Numeric Fields")
            },
            {
              value: "/.*/",
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("stat.add-standard-data-reduce-options.fields-options.label-all-fields", "All Fields")
            }
          ];
          if (context && context.data) {
            for (const frame of context.data) {
              for (const field of frame.fields) {
                const name = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getFieldDisplayName)(field, frame, context.data);
                const value = `/^${(0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.escapeStringForRegex)(name)}$/`;
                options.push({ value, label: name });
              }
            }
          }
          return Promise.resolve(options);
        }
      },
      defaultValue: ""
    });
  }
}
function addOrientationOption(builder, category) {
  builder.addRadio({
    path: "orientation",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("stat.add-orientation-option.name-orientation", "Orientation"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("stat.add-orientation-option.description-orientation", "Layout orientation"),
    category,
    settings: {
      options: [
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.VizOrientation.Auto, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("stat.add-orientation-option.orientation-options.label-auto", "Auto") },
        {
          value: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.VizOrientation.Horizontal,
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("stat.add-orientation-option.orientation-options.label-horizontal", "Horizontal")
        },
        {
          value: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.VizOrientation.Vertical,
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("stat.add-orientation-option.orientation-options.label-vertical", "Vertical")
        }
      ]
    },
    defaultValue: _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.VizOrientation.Auto
  });
}


/***/ }),

/***/ "./public/app/types/suggestions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
//# sourceMappingURL=pieChartPanel.9ad276368e5fb05d9d72.js.map