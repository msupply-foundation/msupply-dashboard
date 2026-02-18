(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["DashboardPageProxy"],{

/***/ "./node_modules/react-grid-layout/css/styles.css":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   polyfill: () => (/* binding */ polyfill)
/* harmony export */ });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-resizable/css/styles.css":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-split-pane/dist/index.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pane: () => (/* binding */ Pane),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_style_proptype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-style-proptype/src/index.js");
/* harmony import */ var react_style_proptype__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_style_proptype__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");





function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var Pane = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Pane, _React$PureComponent);

  var _super = _createSuper(Pane);

  function Pane() {
    _classCallCheck(this, Pane);

    return _super.apply(this, arguments);
  }

  _createClass(Pane, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          split = _this$props.split,
          styleProps = _this$props.style,
          size = _this$props.size,
          eleRef = _this$props.eleRef;
      var classes = ['Pane', split, className];
      var style = {
        flex: 1,
        position: 'relative',
        outline: 'none'
      };

      if (size !== undefined) {
        if (split === 'vertical') {
          style.width = size;
        } else {
          style.height = size;
          style.display = 'flex';
        }

        style.flex = 'none';
      }

      style = Object.assign({}, style, styleProps || {});
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        ref: eleRef,
        className: classes.join(' '),
        style: style
      }, children);
    }
  }]);

  return Pane;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));

Pane.propTypes = {
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)]),
  split: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['vertical', 'horizontal']),
  style: (react_style_proptype__WEBPACK_IMPORTED_MODULE_2___default()),
  eleRef: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
Pane.defaultProps = {};

var RESIZER_DEFAULT_CLASSNAME = 'Resizer';

var Resizer = /*#__PURE__*/function (_React$Component) {
  _inherits(Resizer, _React$Component);

  var _super = _createSuper(Resizer);

  function Resizer() {
    _classCallCheck(this, Resizer);

    return _super.apply(this, arguments);
  }

  _createClass(Resizer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          _onClick = _this$props.onClick,
          _onDoubleClick = _this$props.onDoubleClick,
          _onMouseDown = _this$props.onMouseDown,
          _onTouchEnd = _this$props.onTouchEnd,
          _onTouchStart = _this$props.onTouchStart,
          resizerClassName = _this$props.resizerClassName,
          split = _this$props.split,
          style = _this$props.style;
      var classes = [resizerClassName, split, className];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        role: "presentation",
        className: classes.join(' '),
        style: style,
        onMouseDown: function onMouseDown(event) {
          return _onMouseDown(event);
        },
        onTouchStart: function onTouchStart(event) {
          event.preventDefault();

          _onTouchStart(event);
        },
        onTouchEnd: function onTouchEnd(event) {
          event.preventDefault();

          _onTouchEnd(event);
        },
        onClick: function onClick(event) {
          if (_onClick) {
            event.preventDefault();

            _onClick(event);
          }
        },
        onDoubleClick: function onDoubleClick(event) {
          if (_onDoubleClick) {
            event.preventDefault();

            _onDoubleClick(event);
          }
        }
      });
    }
  }]);

  return Resizer;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

Resizer.propTypes = {
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onDoubleClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onMouseDown: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onTouchStart: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onTouchEnd: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  split: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['vertical', 'horizontal']),
  style: (react_style_proptype__WEBPACK_IMPORTED_MODULE_2___default()),
  resizerClassName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
};
Resizer.defaultProps = {
  resizerClassName: RESIZER_DEFAULT_CLASSNAME
};

function unFocus(document, window) {
  if (document.selection) {
    document.selection.empty();
  } else {
    try {
      window.getSelection().removeAllRanges(); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

function getDefaultSize(defaultSize, minSize, maxSize, draggedSize) {
  if (typeof draggedSize === 'number') {
    var min = typeof minSize === 'number' ? minSize : 0;
    var max = typeof maxSize === 'number' && maxSize >= 0 ? maxSize : Infinity;
    return Math.max(min, Math.min(max, draggedSize));
  }

  if (defaultSize !== undefined) {
    return defaultSize;
  }

  return minSize;
}

function removeNullChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().Children.toArray(children).filter(function (c) {
    return c;
  });
}

var SplitPane = /*#__PURE__*/function (_React$Component) {
  _inherits(SplitPane, _React$Component);

  var _super = _createSuper(SplitPane);

  function SplitPane(props) {
    var _this;

    _classCallCheck(this, SplitPane);

    _this = _super.call(this, props);
    _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
    _this.onTouchStart = _this.onTouchStart.bind(_assertThisInitialized(_this));
    _this.onMouseMove = _this.onMouseMove.bind(_assertThisInitialized(_this));
    _this.onTouchMove = _this.onTouchMove.bind(_assertThisInitialized(_this));
    _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this)); // order of setting panel sizes.
    // 1. size
    // 2. getDefaultSize(defaultSize, minsize, maxSize)

    var size = props.size,
        defaultSize = props.defaultSize,
        minSize = props.minSize,
        maxSize = props.maxSize,
        primary = props.primary;
    var initialSize = size !== undefined ? size : getDefaultSize(defaultSize, minSize, maxSize, null);
    _this.state = {
      active: false,
      resized: false,
      pane1Size: primary === 'first' ? initialSize : undefined,
      pane2Size: primary === 'second' ? initialSize : undefined,
      // these are props that are needed in static functions. ie: gDSFP
      instanceProps: {
        size: size
      }
    };
    return _this;
  }

  _createClass(SplitPane, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mouseup', this.onMouseUp);
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('touchmove', this.onTouchMove);
      this.setState(SplitPane.getSizeUpdate(this.props, this.state));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mouseup', this.onMouseUp);
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('touchmove', this.onTouchMove);
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      var eventWithTouches = Object.assign({}, event, {
        touches: [{
          clientX: event.clientX,
          clientY: event.clientY
        }]
      });
      this.onTouchStart(eventWithTouches);
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(event) {
      var _this$props = this.props,
          allowResize = _this$props.allowResize,
          onDragStarted = _this$props.onDragStarted,
          split = _this$props.split;

      if (allowResize) {
        unFocus(document, window);
        var position = split === 'vertical' ? event.touches[0].clientX : event.touches[0].clientY;

        if (typeof onDragStarted === 'function') {
          onDragStarted();
        }

        this.setState({
          active: true,
          position: position
        });
      }
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      var eventWithTouches = Object.assign({}, event, {
        touches: [{
          clientX: event.clientX,
          clientY: event.clientY
        }]
      });
      this.onTouchMove(eventWithTouches);
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(event) {
      var _this$props2 = this.props,
          allowResize = _this$props2.allowResize,
          maxSize = _this$props2.maxSize,
          minSize = _this$props2.minSize,
          onChange = _this$props2.onChange,
          split = _this$props2.split,
          step = _this$props2.step;
      var _this$state = this.state,
          active = _this$state.active,
          position = _this$state.position;

      if (allowResize && active) {
        unFocus(document, window);
        var isPrimaryFirst = this.props.primary === 'first';
        var ref = isPrimaryFirst ? this.pane1 : this.pane2;
        var ref2 = isPrimaryFirst ? this.pane2 : this.pane1;

        if (ref) {
          var node = ref;
          var node2 = ref2;

          if (node.getBoundingClientRect) {
            var width = node.getBoundingClientRect().width;
            var height = node.getBoundingClientRect().height;
            var current = split === 'vertical' ? event.touches[0].clientX : event.touches[0].clientY;
            var size = split === 'vertical' ? width : height;
            var positionDelta = position - current;

            if (step) {
              if (Math.abs(positionDelta) < step) {
                return;
              } // Integer division
              // eslint-disable-next-line no-bitwise


              positionDelta = ~~(positionDelta / step) * step;
            }

            var sizeDelta = isPrimaryFirst ? positionDelta : -positionDelta;
            var pane1Order = parseInt(window.getComputedStyle(node).order);
            var pane2Order = parseInt(window.getComputedStyle(node2).order);

            if (pane1Order > pane2Order) {
              sizeDelta = -sizeDelta;
            }

            var newMaxSize = maxSize;

            if (maxSize !== undefined && maxSize <= 0) {
              var splitPane = this.splitPane;

              if (split === 'vertical') {
                newMaxSize = splitPane.getBoundingClientRect().width + maxSize;
              } else {
                newMaxSize = splitPane.getBoundingClientRect().height + maxSize;
              }
            }

            var newSize = size - sizeDelta;
            var newPosition = position - positionDelta;

            if (newSize < minSize) {
              newSize = minSize;
            } else if (maxSize !== undefined && newSize > newMaxSize) {
              newSize = newMaxSize;
            } else {
              this.setState({
                position: newPosition,
                resized: true
              });
            }

            if (onChange) onChange(newSize);
            this.setState(_defineProperty({
              draggedSize: newSize
            }, isPrimaryFirst ? 'pane1Size' : 'pane2Size', newSize));
          }
        }
      }
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      var _this$props3 = this.props,
          allowResize = _this$props3.allowResize,
          onDragFinished = _this$props3.onDragFinished;
      var _this$state2 = this.state,
          active = _this$state2.active,
          draggedSize = _this$state2.draggedSize;

      if (allowResize && active) {
        if (typeof onDragFinished === 'function') {
          onDragFinished(draggedSize);
        }

        this.setState({
          active: false
        });
      }
    } // we have to check values since gDSFP is called on every render and more in StrictMode

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          allowResize = _this$props4.allowResize,
          children = _this$props4.children,
          className = _this$props4.className,
          onResizerClick = _this$props4.onResizerClick,
          onResizerDoubleClick = _this$props4.onResizerDoubleClick,
          paneClassName = _this$props4.paneClassName,
          pane1ClassName = _this$props4.pane1ClassName,
          pane2ClassName = _this$props4.pane2ClassName,
          paneStyle = _this$props4.paneStyle,
          pane1StyleProps = _this$props4.pane1Style,
          pane2StyleProps = _this$props4.pane2Style,
          resizerClassName = _this$props4.resizerClassName,
          resizerStyle = _this$props4.resizerStyle,
          split = _this$props4.split,
          styleProps = _this$props4.style;
      var _this$state3 = this.state,
          pane1Size = _this$state3.pane1Size,
          pane2Size = _this$state3.pane2Size;
      var disabledClass = allowResize ? '' : 'disabled';
      var resizerClassNamesIncludingDefault = resizerClassName ? "".concat(resizerClassName, " ").concat(RESIZER_DEFAULT_CLASSNAME) : resizerClassName;
      var notNullChildren = removeNullChildren(children);

      var style = _objectSpread2({
        display: 'flex',
        flex: 1,
        height: '100%',
        position: 'absolute',
        outline: 'none',
        overflow: 'hidden',
        MozUserSelect: 'text',
        WebkitUserSelect: 'text',
        msUserSelect: 'text',
        userSelect: 'text'
      }, styleProps);

      if (split === 'vertical') {
        Object.assign(style, {
          flexDirection: 'row',
          left: 0,
          right: 0
        });
      } else {
        Object.assign(style, {
          bottom: 0,
          flexDirection: 'column',
          minHeight: '100%',
          top: 0,
          width: '100%'
        });
      }

      var classes = ['SplitPane', className, split, disabledClass];

      var pane1Style = _objectSpread2({}, paneStyle, {}, pane1StyleProps);

      var pane2Style = _objectSpread2({}, paneStyle, {}, pane2StyleProps);

      var pane1Classes = ['Pane1', paneClassName, pane1ClassName].join(' ');
      var pane2Classes = ['Pane2', paneClassName, pane2ClassName].join(' ');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: classes.join(' '),
        ref: function ref(node) {
          _this2.splitPane = node;
        },
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Pane, {
        className: pane1Classes,
        key: "pane1",
        eleRef: function eleRef(node) {
          _this2.pane1 = node;
        },
        size: pane1Size,
        split: split,
        style: pane1Style
      }, notNullChildren[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Resizer, {
        className: disabledClass,
        onClick: onResizerClick,
        onDoubleClick: onResizerDoubleClick,
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        onTouchEnd: this.onMouseUp,
        key: "resizer",
        resizerClassName: resizerClassNamesIncludingDefault,
        split: split,
        style: resizerStyle || {}
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Pane, {
        className: pane2Classes,
        key: "pane2",
        eleRef: function eleRef(node) {
          _this2.pane2 = node;
        },
        size: pane2Size,
        split: split,
        style: pane2Style
      }, notNullChildren[1]));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return SplitPane.getSizeUpdate(nextProps, prevState);
    }
  }, {
    key: "getSizeUpdate",
    value: function getSizeUpdate(props, state) {
      var newState = {};
      var instanceProps = state.instanceProps;

      if (instanceProps.size === props.size && props.size !== undefined) {
        return {};
      }

      var newSize = props.size !== undefined ? props.size : getDefaultSize(props.defaultSize, props.minSize, props.maxSize, state.draggedSize);

      if (props.size !== undefined) {
        newState.draggedSize = newSize;
      }

      var isPanel1Primary = props.primary === 'first';
      newState[isPanel1Primary ? 'pane1Size' : 'pane2Size'] = newSize;
      newState[isPanel1Primary ? 'pane2Size' : 'pane1Size'] = undefined;
      newState.instanceProps = {
        size: props.size
      };
      return newState;
    }
  }]);

  return SplitPane;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

SplitPane.propTypes = {
  allowResize: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)).isRequired,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  primary: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['first', 'second']),
  minSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)]),
  maxSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)]),
  // eslint-disable-next-line react/no-unused-prop-types
  defaultSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)]),
  split: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['vertical', 'horizontal']),
  onDragStarted: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onDragFinished: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onResizerClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onResizerDoubleClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  style: (react_style_proptype__WEBPACK_IMPORTED_MODULE_2___default()),
  resizerStyle: (react_style_proptype__WEBPACK_IMPORTED_MODULE_2___default()),
  paneClassName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  pane1ClassName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  pane2ClassName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  paneStyle: (react_style_proptype__WEBPACK_IMPORTED_MODULE_2___default()),
  pane1Style: (react_style_proptype__WEBPACK_IMPORTED_MODULE_2___default()),
  pane2Style: (react_style_proptype__WEBPACK_IMPORTED_MODULE_2___default()),
  resizerClassName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  step: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
SplitPane.defaultProps = {
  allowResize: true,
  minSize: 50,
  primary: 'first',
  split: 'vertical',
  paneClassName: '',
  pane1ClassName: '',
  pane2ClassName: ''
};
(0,react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_3__.polyfill)(SplitPane);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SplitPane);



/***/ }),

/***/ "./node_modules/react-style-proptype/src/css-properties.js":
/***/ ((module) => {

// GENERATED DO NOT EDIT
module.exports = [
  "alignContent",
  "MozAlignContent",
  "WebkitAlignContent",
  "MSAlignContent",
  "OAlignContent",
  "alignItems",
  "MozAlignItems",
  "WebkitAlignItems",
  "MSAlignItems",
  "OAlignItems",
  "alignSelf",
  "MozAlignSelf",
  "WebkitAlignSelf",
  "MSAlignSelf",
  "OAlignSelf",
  "all",
  "MozAll",
  "WebkitAll",
  "MSAll",
  "OAll",
  "animation",
  "MozAnimation",
  "WebkitAnimation",
  "MSAnimation",
  "OAnimation",
  "animationDelay",
  "MozAnimationDelay",
  "WebkitAnimationDelay",
  "MSAnimationDelay",
  "OAnimationDelay",
  "animationDirection",
  "MozAnimationDirection",
  "WebkitAnimationDirection",
  "MSAnimationDirection",
  "OAnimationDirection",
  "animationDuration",
  "MozAnimationDuration",
  "WebkitAnimationDuration",
  "MSAnimationDuration",
  "OAnimationDuration",
  "animationFillMode",
  "MozAnimationFillMode",
  "WebkitAnimationFillMode",
  "MSAnimationFillMode",
  "OAnimationFillMode",
  "animationIterationCount",
  "MozAnimationIterationCount",
  "WebkitAnimationIterationCount",
  "MSAnimationIterationCount",
  "OAnimationIterationCount",
  "animationName",
  "MozAnimationName",
  "WebkitAnimationName",
  "MSAnimationName",
  "OAnimationName",
  "animationPlayState",
  "MozAnimationPlayState",
  "WebkitAnimationPlayState",
  "MSAnimationPlayState",
  "OAnimationPlayState",
  "animationTimingFunction",
  "MozAnimationTimingFunction",
  "WebkitAnimationTimingFunction",
  "MSAnimationTimingFunction",
  "OAnimationTimingFunction",
  "backfaceVisibility",
  "MozBackfaceVisibility",
  "WebkitBackfaceVisibility",
  "MSBackfaceVisibility",
  "OBackfaceVisibility",
  "background",
  "MozBackground",
  "WebkitBackground",
  "MSBackground",
  "OBackground",
  "backgroundAttachment",
  "MozBackgroundAttachment",
  "WebkitBackgroundAttachment",
  "MSBackgroundAttachment",
  "OBackgroundAttachment",
  "backgroundBlendMode",
  "MozBackgroundBlendMode",
  "WebkitBackgroundBlendMode",
  "MSBackgroundBlendMode",
  "OBackgroundBlendMode",
  "backgroundClip",
  "MozBackgroundClip",
  "WebkitBackgroundClip",
  "MSBackgroundClip",
  "OBackgroundClip",
  "backgroundColor",
  "MozBackgroundColor",
  "WebkitBackgroundColor",
  "MSBackgroundColor",
  "OBackgroundColor",
  "backgroundImage",
  "MozBackgroundImage",
  "WebkitBackgroundImage",
  "MSBackgroundImage",
  "OBackgroundImage",
  "backgroundOrigin",
  "MozBackgroundOrigin",
  "WebkitBackgroundOrigin",
  "MSBackgroundOrigin",
  "OBackgroundOrigin",
  "backgroundPosition",
  "MozBackgroundPosition",
  "WebkitBackgroundPosition",
  "MSBackgroundPosition",
  "OBackgroundPosition",
  "backgroundRepeat",
  "MozBackgroundRepeat",
  "WebkitBackgroundRepeat",
  "MSBackgroundRepeat",
  "OBackgroundRepeat",
  "backgroundSize",
  "MozBackgroundSize",
  "WebkitBackgroundSize",
  "MSBackgroundSize",
  "OBackgroundSize",
  "blockSize",
  "MozBlockSize",
  "WebkitBlockSize",
  "MSBlockSize",
  "OBlockSize",
  "border",
  "MozBorder",
  "WebkitBorder",
  "MSBorder",
  "OBorder",
  "borderBlockEnd",
  "MozBorderBlockEnd",
  "WebkitBorderBlockEnd",
  "MSBorderBlockEnd",
  "OBorderBlockEnd",
  "borderBlockEndColor",
  "MozBorderBlockEndColor",
  "WebkitBorderBlockEndColor",
  "MSBorderBlockEndColor",
  "OBorderBlockEndColor",
  "borderBlockEndStyle",
  "MozBorderBlockEndStyle",
  "WebkitBorderBlockEndStyle",
  "MSBorderBlockEndStyle",
  "OBorderBlockEndStyle",
  "borderBlockEndWidth",
  "MozBorderBlockEndWidth",
  "WebkitBorderBlockEndWidth",
  "MSBorderBlockEndWidth",
  "OBorderBlockEndWidth",
  "borderBlockStart",
  "MozBorderBlockStart",
  "WebkitBorderBlockStart",
  "MSBorderBlockStart",
  "OBorderBlockStart",
  "borderBlockStartColor",
  "MozBorderBlockStartColor",
  "WebkitBorderBlockStartColor",
  "MSBorderBlockStartColor",
  "OBorderBlockStartColor",
  "borderBlockStartStyle",
  "MozBorderBlockStartStyle",
  "WebkitBorderBlockStartStyle",
  "MSBorderBlockStartStyle",
  "OBorderBlockStartStyle",
  "borderBlockStartWidth",
  "MozBorderBlockStartWidth",
  "WebkitBorderBlockStartWidth",
  "MSBorderBlockStartWidth",
  "OBorderBlockStartWidth",
  "borderBottom",
  "MozBorderBottom",
  "WebkitBorderBottom",
  "MSBorderBottom",
  "OBorderBottom",
  "borderBottomColor",
  "MozBorderBottomColor",
  "WebkitBorderBottomColor",
  "MSBorderBottomColor",
  "OBorderBottomColor",
  "borderBottomLeftRadius",
  "MozBorderBottomLeftRadius",
  "WebkitBorderBottomLeftRadius",
  "MSBorderBottomLeftRadius",
  "OBorderBottomLeftRadius",
  "borderBottomRightRadius",
  "MozBorderBottomRightRadius",
  "WebkitBorderBottomRightRadius",
  "MSBorderBottomRightRadius",
  "OBorderBottomRightRadius",
  "borderBottomStyle",
  "MozBorderBottomStyle",
  "WebkitBorderBottomStyle",
  "MSBorderBottomStyle",
  "OBorderBottomStyle",
  "borderBottomWidth",
  "MozBorderBottomWidth",
  "WebkitBorderBottomWidth",
  "MSBorderBottomWidth",
  "OBorderBottomWidth",
  "borderCollapse",
  "MozBorderCollapse",
  "WebkitBorderCollapse",
  "MSBorderCollapse",
  "OBorderCollapse",
  "borderColor",
  "MozBorderColor",
  "WebkitBorderColor",
  "MSBorderColor",
  "OBorderColor",
  "borderImage",
  "MozBorderImage",
  "WebkitBorderImage",
  "MSBorderImage",
  "OBorderImage",
  "borderImageOutset",
  "MozBorderImageOutset",
  "WebkitBorderImageOutset",
  "MSBorderImageOutset",
  "OBorderImageOutset",
  "borderImageRepeat",
  "MozBorderImageRepeat",
  "WebkitBorderImageRepeat",
  "MSBorderImageRepeat",
  "OBorderImageRepeat",
  "borderImageSlice",
  "MozBorderImageSlice",
  "WebkitBorderImageSlice",
  "MSBorderImageSlice",
  "OBorderImageSlice",
  "borderImageSource",
  "MozBorderImageSource",
  "WebkitBorderImageSource",
  "MSBorderImageSource",
  "OBorderImageSource",
  "borderImageWidth",
  "MozBorderImageWidth",
  "WebkitBorderImageWidth",
  "MSBorderImageWidth",
  "OBorderImageWidth",
  "borderInlineEnd",
  "MozBorderInlineEnd",
  "WebkitBorderInlineEnd",
  "MSBorderInlineEnd",
  "OBorderInlineEnd",
  "borderInlineEndColor",
  "MozBorderInlineEndColor",
  "WebkitBorderInlineEndColor",
  "MSBorderInlineEndColor",
  "OBorderInlineEndColor",
  "borderInlineEndStyle",
  "MozBorderInlineEndStyle",
  "WebkitBorderInlineEndStyle",
  "MSBorderInlineEndStyle",
  "OBorderInlineEndStyle",
  "borderInlineEndWidth",
  "MozBorderInlineEndWidth",
  "WebkitBorderInlineEndWidth",
  "MSBorderInlineEndWidth",
  "OBorderInlineEndWidth",
  "borderInlineStart",
  "MozBorderInlineStart",
  "WebkitBorderInlineStart",
  "MSBorderInlineStart",
  "OBorderInlineStart",
  "borderInlineStartColor",
  "MozBorderInlineStartColor",
  "WebkitBorderInlineStartColor",
  "MSBorderInlineStartColor",
  "OBorderInlineStartColor",
  "borderInlineStartStyle",
  "MozBorderInlineStartStyle",
  "WebkitBorderInlineStartStyle",
  "MSBorderInlineStartStyle",
  "OBorderInlineStartStyle",
  "borderInlineStartWidth",
  "MozBorderInlineStartWidth",
  "WebkitBorderInlineStartWidth",
  "MSBorderInlineStartWidth",
  "OBorderInlineStartWidth",
  "borderLeft",
  "MozBorderLeft",
  "WebkitBorderLeft",
  "MSBorderLeft",
  "OBorderLeft",
  "borderLeftColor",
  "MozBorderLeftColor",
  "WebkitBorderLeftColor",
  "MSBorderLeftColor",
  "OBorderLeftColor",
  "borderLeftStyle",
  "MozBorderLeftStyle",
  "WebkitBorderLeftStyle",
  "MSBorderLeftStyle",
  "OBorderLeftStyle",
  "borderLeftWidth",
  "MozBorderLeftWidth",
  "WebkitBorderLeftWidth",
  "MSBorderLeftWidth",
  "OBorderLeftWidth",
  "borderRadius",
  "MozBorderRadius",
  "WebkitBorderRadius",
  "MSBorderRadius",
  "OBorderRadius",
  "borderRight",
  "MozBorderRight",
  "WebkitBorderRight",
  "MSBorderRight",
  "OBorderRight",
  "borderRightColor",
  "MozBorderRightColor",
  "WebkitBorderRightColor",
  "MSBorderRightColor",
  "OBorderRightColor",
  "borderRightStyle",
  "MozBorderRightStyle",
  "WebkitBorderRightStyle",
  "MSBorderRightStyle",
  "OBorderRightStyle",
  "borderRightWidth",
  "MozBorderRightWidth",
  "WebkitBorderRightWidth",
  "MSBorderRightWidth",
  "OBorderRightWidth",
  "borderSpacing",
  "MozBorderSpacing",
  "WebkitBorderSpacing",
  "MSBorderSpacing",
  "OBorderSpacing",
  "borderStyle",
  "MozBorderStyle",
  "WebkitBorderStyle",
  "MSBorderStyle",
  "OBorderStyle",
  "borderTop",
  "MozBorderTop",
  "WebkitBorderTop",
  "MSBorderTop",
  "OBorderTop",
  "borderTopColor",
  "MozBorderTopColor",
  "WebkitBorderTopColor",
  "MSBorderTopColor",
  "OBorderTopColor",
  "borderTopLeftRadius",
  "MozBorderTopLeftRadius",
  "WebkitBorderTopLeftRadius",
  "MSBorderTopLeftRadius",
  "OBorderTopLeftRadius",
  "borderTopRightRadius",
  "MozBorderTopRightRadius",
  "WebkitBorderTopRightRadius",
  "MSBorderTopRightRadius",
  "OBorderTopRightRadius",
  "borderTopStyle",
  "MozBorderTopStyle",
  "WebkitBorderTopStyle",
  "MSBorderTopStyle",
  "OBorderTopStyle",
  "borderTopWidth",
  "MozBorderTopWidth",
  "WebkitBorderTopWidth",
  "MSBorderTopWidth",
  "OBorderTopWidth",
  "borderWidth",
  "MozBorderWidth",
  "WebkitBorderWidth",
  "MSBorderWidth",
  "OBorderWidth",
  "bottom",
  "MozBottom",
  "WebkitBottom",
  "MSBottom",
  "OBottom",
  "boxDecorationBreak",
  "MozBoxDecorationBreak",
  "WebkitBoxDecorationBreak",
  "MSBoxDecorationBreak",
  "OBoxDecorationBreak",
  "boxShadow",
  "MozBoxShadow",
  "WebkitBoxShadow",
  "MSBoxShadow",
  "OBoxShadow",
  "boxSizing",
  "MozBoxSizing",
  "WebkitBoxSizing",
  "MSBoxSizing",
  "OBoxSizing",
  "breakAfter",
  "MozBreakAfter",
  "WebkitBreakAfter",
  "MSBreakAfter",
  "OBreakAfter",
  "breakBefore",
  "MozBreakBefore",
  "WebkitBreakBefore",
  "MSBreakBefore",
  "OBreakBefore",
  "breakInside",
  "MozBreakInside",
  "WebkitBreakInside",
  "MSBreakInside",
  "OBreakInside",
  "captionSide",
  "MozCaptionSide",
  "WebkitCaptionSide",
  "MSCaptionSide",
  "OCaptionSide",
  "caretColor",
  "MozCaretColor",
  "WebkitCaretColor",
  "MSCaretColor",
  "OCaretColor",
  "ch",
  "MozCh",
  "WebkitCh",
  "MSCh",
  "OCh",
  "clear",
  "MozClear",
  "WebkitClear",
  "MSClear",
  "OClear",
  "clip",
  "MozClip",
  "WebkitClip",
  "MSClip",
  "OClip",
  "clipPath",
  "MozClipPath",
  "WebkitClipPath",
  "MSClipPath",
  "OClipPath",
  "cm",
  "MozCm",
  "WebkitCm",
  "MSCm",
  "OCm",
  "color",
  "MozColor",
  "WebkitColor",
  "MSColor",
  "OColor",
  "columnCount",
  "MozColumnCount",
  "WebkitColumnCount",
  "MSColumnCount",
  "OColumnCount",
  "columnFill",
  "MozColumnFill",
  "WebkitColumnFill",
  "MSColumnFill",
  "OColumnFill",
  "columnGap",
  "MozColumnGap",
  "WebkitColumnGap",
  "MSColumnGap",
  "OColumnGap",
  "columnRule",
  "MozColumnRule",
  "WebkitColumnRule",
  "MSColumnRule",
  "OColumnRule",
  "columnRuleColor",
  "MozColumnRuleColor",
  "WebkitColumnRuleColor",
  "MSColumnRuleColor",
  "OColumnRuleColor",
  "columnRuleStyle",
  "MozColumnRuleStyle",
  "WebkitColumnRuleStyle",
  "MSColumnRuleStyle",
  "OColumnRuleStyle",
  "columnRuleWidth",
  "MozColumnRuleWidth",
  "WebkitColumnRuleWidth",
  "MSColumnRuleWidth",
  "OColumnRuleWidth",
  "columnSpan",
  "MozColumnSpan",
  "WebkitColumnSpan",
  "MSColumnSpan",
  "OColumnSpan",
  "columnWidth",
  "MozColumnWidth",
  "WebkitColumnWidth",
  "MSColumnWidth",
  "OColumnWidth",
  "columns",
  "MozColumns",
  "WebkitColumns",
  "MSColumns",
  "OColumns",
  "content",
  "MozContent",
  "WebkitContent",
  "MSContent",
  "OContent",
  "counterIncrement",
  "MozCounterIncrement",
  "WebkitCounterIncrement",
  "MSCounterIncrement",
  "OCounterIncrement",
  "counterReset",
  "MozCounterReset",
  "WebkitCounterReset",
  "MSCounterReset",
  "OCounterReset",
  "cursor",
  "MozCursor",
  "WebkitCursor",
  "MSCursor",
  "OCursor",
  "deg",
  "MozDeg",
  "WebkitDeg",
  "MSDeg",
  "ODeg",
  "direction",
  "MozDirection",
  "WebkitDirection",
  "MSDirection",
  "ODirection",
  "display",
  "MozDisplay",
  "WebkitDisplay",
  "MSDisplay",
  "ODisplay",
  "dpcm",
  "MozDpcm",
  "WebkitDpcm",
  "MSDpcm",
  "ODpcm",
  "dpi",
  "MozDpi",
  "WebkitDpi",
  "MSDpi",
  "ODpi",
  "dppx",
  "MozDppx",
  "WebkitDppx",
  "MSDppx",
  "ODppx",
  "em",
  "MozEm",
  "WebkitEm",
  "MSEm",
  "OEm",
  "emptyCells",
  "MozEmptyCells",
  "WebkitEmptyCells",
  "MSEmptyCells",
  "OEmptyCells",
  "ex",
  "MozEx",
  "WebkitEx",
  "MSEx",
  "OEx",
  "filter",
  "MozFilter",
  "WebkitFilter",
  "MSFilter",
  "OFilter",
  "flexBasis",
  "MozFlexBasis",
  "WebkitFlexBasis",
  "MSFlexBasis",
  "OFlexBasis",
  "flexDirection",
  "MozFlexDirection",
  "WebkitFlexDirection",
  "MSFlexDirection",
  "OFlexDirection",
  "flexFlow",
  "MozFlexFlow",
  "WebkitFlexFlow",
  "MSFlexFlow",
  "OFlexFlow",
  "flexGrow",
  "MozFlexGrow",
  "WebkitFlexGrow",
  "MSFlexGrow",
  "OFlexGrow",
  "flexShrink",
  "MozFlexShrink",
  "WebkitFlexShrink",
  "MSFlexShrink",
  "OFlexShrink",
  "flexWrap",
  "MozFlexWrap",
  "WebkitFlexWrap",
  "MSFlexWrap",
  "OFlexWrap",
  "float",
  "MozFloat",
  "WebkitFloat",
  "MSFloat",
  "OFloat",
  "font",
  "MozFont",
  "WebkitFont",
  "MSFont",
  "OFont",
  "fontFamily",
  "MozFontFamily",
  "WebkitFontFamily",
  "MSFontFamily",
  "OFontFamily",
  "fontFeatureSettings",
  "MozFontFeatureSettings",
  "WebkitFontFeatureSettings",
  "MSFontFeatureSettings",
  "OFontFeatureSettings",
  "fontKerning",
  "MozFontKerning",
  "WebkitFontKerning",
  "MSFontKerning",
  "OFontKerning",
  "fontLanguageOverride",
  "MozFontLanguageOverride",
  "WebkitFontLanguageOverride",
  "MSFontLanguageOverride",
  "OFontLanguageOverride",
  "fontSize",
  "MozFontSize",
  "WebkitFontSize",
  "MSFontSize",
  "OFontSize",
  "fontSizeAdjust",
  "MozFontSizeAdjust",
  "WebkitFontSizeAdjust",
  "MSFontSizeAdjust",
  "OFontSizeAdjust",
  "fontStretch",
  "MozFontStretch",
  "WebkitFontStretch",
  "MSFontStretch",
  "OFontStretch",
  "fontStyle",
  "MozFontStyle",
  "WebkitFontStyle",
  "MSFontStyle",
  "OFontStyle",
  "fontSynthesis",
  "MozFontSynthesis",
  "WebkitFontSynthesis",
  "MSFontSynthesis",
  "OFontSynthesis",
  "fontVariant",
  "MozFontVariant",
  "WebkitFontVariant",
  "MSFontVariant",
  "OFontVariant",
  "fontVariantAlternates",
  "MozFontVariantAlternates",
  "WebkitFontVariantAlternates",
  "MSFontVariantAlternates",
  "OFontVariantAlternates",
  "fontVariantCaps",
  "MozFontVariantCaps",
  "WebkitFontVariantCaps",
  "MSFontVariantCaps",
  "OFontVariantCaps",
  "fontVariantEastAsian",
  "MozFontVariantEastAsian",
  "WebkitFontVariantEastAsian",
  "MSFontVariantEastAsian",
  "OFontVariantEastAsian",
  "fontVariantLigatures",
  "MozFontVariantLigatures",
  "WebkitFontVariantLigatures",
  "MSFontVariantLigatures",
  "OFontVariantLigatures",
  "fontVariantNumeric",
  "MozFontVariantNumeric",
  "WebkitFontVariantNumeric",
  "MSFontVariantNumeric",
  "OFontVariantNumeric",
  "fontVariantPosition",
  "MozFontVariantPosition",
  "WebkitFontVariantPosition",
  "MSFontVariantPosition",
  "OFontVariantPosition",
  "fontWeight",
  "MozFontWeight",
  "WebkitFontWeight",
  "MSFontWeight",
  "OFontWeight",
  "fr",
  "MozFr",
  "WebkitFr",
  "MSFr",
  "OFr",
  "grad",
  "MozGrad",
  "WebkitGrad",
  "MSGrad",
  "OGrad",
  "grid",
  "MozGrid",
  "WebkitGrid",
  "MSGrid",
  "OGrid",
  "gridArea",
  "MozGridArea",
  "WebkitGridArea",
  "MSGridArea",
  "OGridArea",
  "gridAutoColumns",
  "MozGridAutoColumns",
  "WebkitGridAutoColumns",
  "MSGridAutoColumns",
  "OGridAutoColumns",
  "gridAutoFlow",
  "MozGridAutoFlow",
  "WebkitGridAutoFlow",
  "MSGridAutoFlow",
  "OGridAutoFlow",
  "gridAutoRows",
  "MozGridAutoRows",
  "WebkitGridAutoRows",
  "MSGridAutoRows",
  "OGridAutoRows",
  "gridColumn",
  "MozGridColumn",
  "WebkitGridColumn",
  "MSGridColumn",
  "OGridColumn",
  "gridColumnEnd",
  "MozGridColumnEnd",
  "WebkitGridColumnEnd",
  "MSGridColumnEnd",
  "OGridColumnEnd",
  "gridColumnGap",
  "MozGridColumnGap",
  "WebkitGridColumnGap",
  "MSGridColumnGap",
  "OGridColumnGap",
  "gridColumnStart",
  "MozGridColumnStart",
  "WebkitGridColumnStart",
  "MSGridColumnStart",
  "OGridColumnStart",
  "gridGap",
  "MozGridGap",
  "WebkitGridGap",
  "MSGridGap",
  "OGridGap",
  "gridRow",
  "MozGridRow",
  "WebkitGridRow",
  "MSGridRow",
  "OGridRow",
  "gridRowEnd",
  "MozGridRowEnd",
  "WebkitGridRowEnd",
  "MSGridRowEnd",
  "OGridRowEnd",
  "gridRowGap",
  "MozGridRowGap",
  "WebkitGridRowGap",
  "MSGridRowGap",
  "OGridRowGap",
  "gridRowStart",
  "MozGridRowStart",
  "WebkitGridRowStart",
  "MSGridRowStart",
  "OGridRowStart",
  "gridTemplate",
  "MozGridTemplate",
  "WebkitGridTemplate",
  "MSGridTemplate",
  "OGridTemplate",
  "gridTemplateAreas",
  "MozGridTemplateAreas",
  "WebkitGridTemplateAreas",
  "MSGridTemplateAreas",
  "OGridTemplateAreas",
  "gridTemplateColumns",
  "MozGridTemplateColumns",
  "WebkitGridTemplateColumns",
  "MSGridTemplateColumns",
  "OGridTemplateColumns",
  "gridTemplateRows",
  "MozGridTemplateRows",
  "WebkitGridTemplateRows",
  "MSGridTemplateRows",
  "OGridTemplateRows",
  "height",
  "MozHeight",
  "WebkitHeight",
  "MSHeight",
  "OHeight",
  "hyphens",
  "MozHyphens",
  "WebkitHyphens",
  "MSHyphens",
  "OHyphens",
  "hz",
  "MozHz",
  "WebkitHz",
  "MSHz",
  "OHz",
  "imageOrientation",
  "MozImageOrientation",
  "WebkitImageOrientation",
  "MSImageOrientation",
  "OImageOrientation",
  "imageRendering",
  "MozImageRendering",
  "WebkitImageRendering",
  "MSImageRendering",
  "OImageRendering",
  "imageResolution",
  "MozImageResolution",
  "WebkitImageResolution",
  "MSImageResolution",
  "OImageResolution",
  "imeMode",
  "MozImeMode",
  "WebkitImeMode",
  "MSImeMode",
  "OImeMode",
  "in",
  "MozIn",
  "WebkitIn",
  "MSIn",
  "OIn",
  "inherit",
  "MozInherit",
  "WebkitInherit",
  "MSInherit",
  "OInherit",
  "initial",
  "MozInitial",
  "WebkitInitial",
  "MSInitial",
  "OInitial",
  "inlineSize",
  "MozInlineSize",
  "WebkitInlineSize",
  "MSInlineSize",
  "OInlineSize",
  "isolation",
  "MozIsolation",
  "WebkitIsolation",
  "MSIsolation",
  "OIsolation",
  "justifyContent",
  "MozJustifyContent",
  "WebkitJustifyContent",
  "MSJustifyContent",
  "OJustifyContent",
  "khz",
  "MozKhz",
  "WebkitKhz",
  "MSKhz",
  "OKhz",
  "left",
  "MozLeft",
  "WebkitLeft",
  "MSLeft",
  "OLeft",
  "letterSpacing",
  "MozLetterSpacing",
  "WebkitLetterSpacing",
  "MSLetterSpacing",
  "OLetterSpacing",
  "lineBreak",
  "MozLineBreak",
  "WebkitLineBreak",
  "MSLineBreak",
  "OLineBreak",
  "lineHeight",
  "MozLineHeight",
  "WebkitLineHeight",
  "MSLineHeight",
  "OLineHeight",
  "listStyle",
  "MozListStyle",
  "WebkitListStyle",
  "MSListStyle",
  "OListStyle",
  "listStyleImage",
  "MozListStyleImage",
  "WebkitListStyleImage",
  "MSListStyleImage",
  "OListStyleImage",
  "listStylePosition",
  "MozListStylePosition",
  "WebkitListStylePosition",
  "MSListStylePosition",
  "OListStylePosition",
  "listStyleType",
  "MozListStyleType",
  "WebkitListStyleType",
  "MSListStyleType",
  "OListStyleType",
  "margin",
  "MozMargin",
  "WebkitMargin",
  "MSMargin",
  "OMargin",
  "marginBlockEnd",
  "MozMarginBlockEnd",
  "WebkitMarginBlockEnd",
  "MSMarginBlockEnd",
  "OMarginBlockEnd",
  "marginBlockStart",
  "MozMarginBlockStart",
  "WebkitMarginBlockStart",
  "MSMarginBlockStart",
  "OMarginBlockStart",
  "marginBottom",
  "MozMarginBottom",
  "WebkitMarginBottom",
  "MSMarginBottom",
  "OMarginBottom",
  "marginInlineEnd",
  "MozMarginInlineEnd",
  "WebkitMarginInlineEnd",
  "MSMarginInlineEnd",
  "OMarginInlineEnd",
  "marginInlineStart",
  "MozMarginInlineStart",
  "WebkitMarginInlineStart",
  "MSMarginInlineStart",
  "OMarginInlineStart",
  "marginLeft",
  "MozMarginLeft",
  "WebkitMarginLeft",
  "MSMarginLeft",
  "OMarginLeft",
  "marginRight",
  "MozMarginRight",
  "WebkitMarginRight",
  "MSMarginRight",
  "OMarginRight",
  "marginTop",
  "MozMarginTop",
  "WebkitMarginTop",
  "MSMarginTop",
  "OMarginTop",
  "mask",
  "MozMask",
  "WebkitMask",
  "MSMask",
  "OMask",
  "maskClip",
  "MozMaskClip",
  "WebkitMaskClip",
  "MSMaskClip",
  "OMaskClip",
  "maskComposite",
  "MozMaskComposite",
  "WebkitMaskComposite",
  "MSMaskComposite",
  "OMaskComposite",
  "maskImage",
  "MozMaskImage",
  "WebkitMaskImage",
  "MSMaskImage",
  "OMaskImage",
  "maskMode",
  "MozMaskMode",
  "WebkitMaskMode",
  "MSMaskMode",
  "OMaskMode",
  "maskOrigin",
  "MozMaskOrigin",
  "WebkitMaskOrigin",
  "MSMaskOrigin",
  "OMaskOrigin",
  "maskPosition",
  "MozMaskPosition",
  "WebkitMaskPosition",
  "MSMaskPosition",
  "OMaskPosition",
  "maskRepeat",
  "MozMaskRepeat",
  "WebkitMaskRepeat",
  "MSMaskRepeat",
  "OMaskRepeat",
  "maskSize",
  "MozMaskSize",
  "WebkitMaskSize",
  "MSMaskSize",
  "OMaskSize",
  "maskType",
  "MozMaskType",
  "WebkitMaskType",
  "MSMaskType",
  "OMaskType",
  "maxHeight",
  "MozMaxHeight",
  "WebkitMaxHeight",
  "MSMaxHeight",
  "OMaxHeight",
  "maxWidth",
  "MozMaxWidth",
  "WebkitMaxWidth",
  "MSMaxWidth",
  "OMaxWidth",
  "minBlockSize",
  "MozMinBlockSize",
  "WebkitMinBlockSize",
  "MSMinBlockSize",
  "OMinBlockSize",
  "minHeight",
  "MozMinHeight",
  "WebkitMinHeight",
  "MSMinHeight",
  "OMinHeight",
  "minInlineSize",
  "MozMinInlineSize",
  "WebkitMinInlineSize",
  "MSMinInlineSize",
  "OMinInlineSize",
  "minWidth",
  "MozMinWidth",
  "WebkitMinWidth",
  "MSMinWidth",
  "OMinWidth",
  "mixBlendMode",
  "MozMixBlendMode",
  "WebkitMixBlendMode",
  "MSMixBlendMode",
  "OMixBlendMode",
  "mm",
  "MozMm",
  "WebkitMm",
  "MSMm",
  "OMm",
  "ms",
  "MozMs",
  "WebkitMs",
  "MSMs",
  "OMs",
  "objectFit",
  "MozObjectFit",
  "WebkitObjectFit",
  "MSObjectFit",
  "OObjectFit",
  "objectPosition",
  "MozObjectPosition",
  "WebkitObjectPosition",
  "MSObjectPosition",
  "OObjectPosition",
  "offsetBlockEnd",
  "MozOffsetBlockEnd",
  "WebkitOffsetBlockEnd",
  "MSOffsetBlockEnd",
  "OOffsetBlockEnd",
  "offsetBlockStart",
  "MozOffsetBlockStart",
  "WebkitOffsetBlockStart",
  "MSOffsetBlockStart",
  "OOffsetBlockStart",
  "offsetInlineEnd",
  "MozOffsetInlineEnd",
  "WebkitOffsetInlineEnd",
  "MSOffsetInlineEnd",
  "OOffsetInlineEnd",
  "offsetInlineStart",
  "MozOffsetInlineStart",
  "WebkitOffsetInlineStart",
  "MSOffsetInlineStart",
  "OOffsetInlineStart",
  "opacity",
  "MozOpacity",
  "WebkitOpacity",
  "MSOpacity",
  "OOpacity",
  "order",
  "MozOrder",
  "WebkitOrder",
  "MSOrder",
  "OOrder",
  "orphans",
  "MozOrphans",
  "WebkitOrphans",
  "MSOrphans",
  "OOrphans",
  "outline",
  "MozOutline",
  "WebkitOutline",
  "MSOutline",
  "OOutline",
  "outlineColor",
  "MozOutlineColor",
  "WebkitOutlineColor",
  "MSOutlineColor",
  "OOutlineColor",
  "outlineOffset",
  "MozOutlineOffset",
  "WebkitOutlineOffset",
  "MSOutlineOffset",
  "OOutlineOffset",
  "outlineStyle",
  "MozOutlineStyle",
  "WebkitOutlineStyle",
  "MSOutlineStyle",
  "OOutlineStyle",
  "outlineWidth",
  "MozOutlineWidth",
  "WebkitOutlineWidth",
  "MSOutlineWidth",
  "OOutlineWidth",
  "overflow",
  "MozOverflow",
  "WebkitOverflow",
  "MSOverflow",
  "OOverflow",
  "overflowWrap",
  "MozOverflowWrap",
  "WebkitOverflowWrap",
  "MSOverflowWrap",
  "OOverflowWrap",
  "overflowX",
  "MozOverflowX",
  "WebkitOverflowX",
  "MSOverflowX",
  "OOverflowX",
  "overflowY",
  "MozOverflowY",
  "WebkitOverflowY",
  "MSOverflowY",
  "OOverflowY",
  "padding",
  "MozPadding",
  "WebkitPadding",
  "MSPadding",
  "OPadding",
  "paddingBlockEnd",
  "MozPaddingBlockEnd",
  "WebkitPaddingBlockEnd",
  "MSPaddingBlockEnd",
  "OPaddingBlockEnd",
  "paddingBlockStart",
  "MozPaddingBlockStart",
  "WebkitPaddingBlockStart",
  "MSPaddingBlockStart",
  "OPaddingBlockStart",
  "paddingBottom",
  "MozPaddingBottom",
  "WebkitPaddingBottom",
  "MSPaddingBottom",
  "OPaddingBottom",
  "paddingInlineEnd",
  "MozPaddingInlineEnd",
  "WebkitPaddingInlineEnd",
  "MSPaddingInlineEnd",
  "OPaddingInlineEnd",
  "paddingInlineStart",
  "MozPaddingInlineStart",
  "WebkitPaddingInlineStart",
  "MSPaddingInlineStart",
  "OPaddingInlineStart",
  "paddingLeft",
  "MozPaddingLeft",
  "WebkitPaddingLeft",
  "MSPaddingLeft",
  "OPaddingLeft",
  "paddingRight",
  "MozPaddingRight",
  "WebkitPaddingRight",
  "MSPaddingRight",
  "OPaddingRight",
  "paddingTop",
  "MozPaddingTop",
  "WebkitPaddingTop",
  "MSPaddingTop",
  "OPaddingTop",
  "pageBreakAfter",
  "MozPageBreakAfter",
  "WebkitPageBreakAfter",
  "MSPageBreakAfter",
  "OPageBreakAfter",
  "pageBreakBefore",
  "MozPageBreakBefore",
  "WebkitPageBreakBefore",
  "MSPageBreakBefore",
  "OPageBreakBefore",
  "pageBreakInside",
  "MozPageBreakInside",
  "WebkitPageBreakInside",
  "MSPageBreakInside",
  "OPageBreakInside",
  "pc",
  "MozPc",
  "WebkitPc",
  "MSPc",
  "OPc",
  "perspective",
  "MozPerspective",
  "WebkitPerspective",
  "MSPerspective",
  "OPerspective",
  "perspectiveOrigin",
  "MozPerspectiveOrigin",
  "WebkitPerspectiveOrigin",
  "MSPerspectiveOrigin",
  "OPerspectiveOrigin",
  "pointerEvents",
  "MozPointerEvents",
  "WebkitPointerEvents",
  "MSPointerEvents",
  "OPointerEvents",
  "position",
  "MozPosition",
  "WebkitPosition",
  "MSPosition",
  "OPosition",
  "pt",
  "MozPt",
  "WebkitPt",
  "MSPt",
  "OPt",
  "px",
  "MozPx",
  "WebkitPx",
  "MSPx",
  "OPx",
  "q",
  "MozQ",
  "WebkitQ",
  "MSQ",
  "OQ",
  "quotes",
  "MozQuotes",
  "WebkitQuotes",
  "MSQuotes",
  "OQuotes",
  "rad",
  "MozRad",
  "WebkitRad",
  "MSRad",
  "ORad",
  "rem",
  "MozRem",
  "WebkitRem",
  "MSRem",
  "ORem",
  "resize",
  "MozResize",
  "WebkitResize",
  "MSResize",
  "OResize",
  "revert",
  "MozRevert",
  "WebkitRevert",
  "MSRevert",
  "ORevert",
  "right",
  "MozRight",
  "WebkitRight",
  "MSRight",
  "ORight",
  "rubyAlign",
  "MozRubyAlign",
  "WebkitRubyAlign",
  "MSRubyAlign",
  "ORubyAlign",
  "rubyMerge",
  "MozRubyMerge",
  "WebkitRubyMerge",
  "MSRubyMerge",
  "ORubyMerge",
  "rubyPosition",
  "MozRubyPosition",
  "WebkitRubyPosition",
  "MSRubyPosition",
  "ORubyPosition",
  "s",
  "MozS",
  "WebkitS",
  "MSS",
  "OS",
  "scrollBehavior",
  "MozScrollBehavior",
  "WebkitScrollBehavior",
  "MSScrollBehavior",
  "OScrollBehavior",
  "scrollSnapCoordinate",
  "MozScrollSnapCoordinate",
  "WebkitScrollSnapCoordinate",
  "MSScrollSnapCoordinate",
  "OScrollSnapCoordinate",
  "scrollSnapDestination",
  "MozScrollSnapDestination",
  "WebkitScrollSnapDestination",
  "MSScrollSnapDestination",
  "OScrollSnapDestination",
  "scrollSnapType",
  "MozScrollSnapType",
  "WebkitScrollSnapType",
  "MSScrollSnapType",
  "OScrollSnapType",
  "shapeImageThreshold",
  "MozShapeImageThreshold",
  "WebkitShapeImageThreshold",
  "MSShapeImageThreshold",
  "OShapeImageThreshold",
  "shapeMargin",
  "MozShapeMargin",
  "WebkitShapeMargin",
  "MSShapeMargin",
  "OShapeMargin",
  "shapeOutside",
  "MozShapeOutside",
  "WebkitShapeOutside",
  "MSShapeOutside",
  "OShapeOutside",
  "tabSize",
  "MozTabSize",
  "WebkitTabSize",
  "MSTabSize",
  "OTabSize",
  "tableLayout",
  "MozTableLayout",
  "WebkitTableLayout",
  "MSTableLayout",
  "OTableLayout",
  "textAlign",
  "MozTextAlign",
  "WebkitTextAlign",
  "MSTextAlign",
  "OTextAlign",
  "textAlignLast",
  "MozTextAlignLast",
  "WebkitTextAlignLast",
  "MSTextAlignLast",
  "OTextAlignLast",
  "textCombineUpright",
  "MozTextCombineUpright",
  "WebkitTextCombineUpright",
  "MSTextCombineUpright",
  "OTextCombineUpright",
  "textDecoration",
  "MozTextDecoration",
  "WebkitTextDecoration",
  "MSTextDecoration",
  "OTextDecoration",
  "textDecorationColor",
  "MozTextDecorationColor",
  "WebkitTextDecorationColor",
  "MSTextDecorationColor",
  "OTextDecorationColor",
  "textDecorationLine",
  "MozTextDecorationLine",
  "WebkitTextDecorationLine",
  "MSTextDecorationLine",
  "OTextDecorationLine",
  "textDecorationStyle",
  "MozTextDecorationStyle",
  "WebkitTextDecorationStyle",
  "MSTextDecorationStyle",
  "OTextDecorationStyle",
  "textEmphasis",
  "MozTextEmphasis",
  "WebkitTextEmphasis",
  "MSTextEmphasis",
  "OTextEmphasis",
  "textEmphasisColor",
  "MozTextEmphasisColor",
  "WebkitTextEmphasisColor",
  "MSTextEmphasisColor",
  "OTextEmphasisColor",
  "textEmphasisPosition",
  "MozTextEmphasisPosition",
  "WebkitTextEmphasisPosition",
  "MSTextEmphasisPosition",
  "OTextEmphasisPosition",
  "textEmphasisStyle",
  "MozTextEmphasisStyle",
  "WebkitTextEmphasisStyle",
  "MSTextEmphasisStyle",
  "OTextEmphasisStyle",
  "textIndent",
  "MozTextIndent",
  "WebkitTextIndent",
  "MSTextIndent",
  "OTextIndent",
  "textOrientation",
  "MozTextOrientation",
  "WebkitTextOrientation",
  "MSTextOrientation",
  "OTextOrientation",
  "textOverflow",
  "MozTextOverflow",
  "WebkitTextOverflow",
  "MSTextOverflow",
  "OTextOverflow",
  "textRendering",
  "MozTextRendering",
  "WebkitTextRendering",
  "MSTextRendering",
  "OTextRendering",
  "textShadow",
  "MozTextShadow",
  "WebkitTextShadow",
  "MSTextShadow",
  "OTextShadow",
  "textTransform",
  "MozTextTransform",
  "WebkitTextTransform",
  "MSTextTransform",
  "OTextTransform",
  "textUnderlinePosition",
  "MozTextUnderlinePosition",
  "WebkitTextUnderlinePosition",
  "MSTextUnderlinePosition",
  "OTextUnderlinePosition",
  "top",
  "MozTop",
  "WebkitTop",
  "MSTop",
  "OTop",
  "touchAction",
  "MozTouchAction",
  "WebkitTouchAction",
  "MSTouchAction",
  "OTouchAction",
  "transform",
  "MozTransform",
  "WebkitTransform",
  "msTransform",
  "OTransform",
  "transformBox",
  "MozTransformBox",
  "WebkitTransformBox",
  "MSTransformBox",
  "OTransformBox",
  "transformOrigin",
  "MozTransformOrigin",
  "WebkitTransformOrigin",
  "MSTransformOrigin",
  "OTransformOrigin",
  "transformStyle",
  "MozTransformStyle",
  "WebkitTransformStyle",
  "MSTransformStyle",
  "OTransformStyle",
  "transition",
  "MozTransition",
  "WebkitTransition",
  "MSTransition",
  "OTransition",
  "transitionDelay",
  "MozTransitionDelay",
  "WebkitTransitionDelay",
  "MSTransitionDelay",
  "OTransitionDelay",
  "transitionDuration",
  "MozTransitionDuration",
  "WebkitTransitionDuration",
  "MSTransitionDuration",
  "OTransitionDuration",
  "transitionProperty",
  "MozTransitionProperty",
  "WebkitTransitionProperty",
  "MSTransitionProperty",
  "OTransitionProperty",
  "transitionTimingFunction",
  "MozTransitionTimingFunction",
  "WebkitTransitionTimingFunction",
  "MSTransitionTimingFunction",
  "OTransitionTimingFunction",
  "turn",
  "MozTurn",
  "WebkitTurn",
  "MSTurn",
  "OTurn",
  "unicodeBidi",
  "MozUnicodeBidi",
  "WebkitUnicodeBidi",
  "MSUnicodeBidi",
  "OUnicodeBidi",
  "unset",
  "MozUnset",
  "WebkitUnset",
  "MSUnset",
  "OUnset",
  "verticalAlign",
  "MozVerticalAlign",
  "WebkitVerticalAlign",
  "MSVerticalAlign",
  "OVerticalAlign",
  "vh",
  "MozVh",
  "WebkitVh",
  "MSVh",
  "OVh",
  "visibility",
  "MozVisibility",
  "WebkitVisibility",
  "MSVisibility",
  "OVisibility",
  "vmax",
  "MozVmax",
  "WebkitVmax",
  "MSVmax",
  "OVmax",
  "vmin",
  "MozVmin",
  "WebkitVmin",
  "MSVmin",
  "OVmin",
  "vw",
  "MozVw",
  "WebkitVw",
  "MSVw",
  "OVw",
  "whiteSpace",
  "MozWhiteSpace",
  "WebkitWhiteSpace",
  "MSWhiteSpace",
  "OWhiteSpace",
  "widows",
  "MozWidows",
  "WebkitWidows",
  "MSWidows",
  "OWidows",
  "width",
  "MozWidth",
  "WebkitWidth",
  "MSWidth",
  "OWidth",
  "willChange",
  "MozWillChange",
  "WebkitWillChange",
  "MSWillChange",
  "OWillChange",
  "wordBreak",
  "MozWordBreak",
  "WebkitWordBreak",
  "MSWordBreak",
  "OWordBreak",
  "wordSpacing",
  "MozWordSpacing",
  "WebkitWordSpacing",
  "MSWordSpacing",
  "OWordSpacing",
  "wordWrap",
  "MozWordWrap",
  "WebkitWordWrap",
  "MSWordWrap",
  "OWordWrap",
  "writingMode",
  "MozWritingMode",
  "WebkitWritingMode",
  "MSWritingMode",
  "OWritingMode",
  "zIndex",
  "MozZIndex",
  "WebkitZIndex",
  "MSZIndex",
  "OZIndex",
  "fontSize",
  "MozFontSize",
  "WebkitFontSize",
  "MSFontSize",
  "OFontSize",
  "flex",
  "MozFlex",
  "WebkitFlex",
  "MSFlex",
  "OFlex",
  "fr",
  "MozFr",
  "WebkitFr",
  "MSFr",
  "OFr",
  "overflowScrolling",
  "MozOverflowScrolling",
  "WebkitOverflowScrolling",
  "MSOverflowScrolling",
  "OOverflowScrolling",
  "userSelect",
  "MozUserSelect",
  "WebkitUserSelect",
  "MSUserSelect",
  "OUserSelect"
]


/***/ }),

/***/ "./node_modules/react-style-proptype/src/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var properties = __webpack_require__("./node_modules/react-style-proptype/src/css-properties.js");
var PropTypes = __webpack_require__("./node_modules/prop-types/index.js");

module.exports = function(props, propName, componentName) {
  var styles = props[propName];
  if (!styles) {
    return;
  }

  var failures = [];
  Object.keys(styles).forEach(function(styleKey){
    if (properties.indexOf(styleKey) === -1) {
      failures.push(styleKey);
    }
  });
  if (failures.length) {
    throw new Error('Prop ' + propName + ' passed to ' + componentName + '. Has invalid keys ' + failures.join(', '));
  }
};

module.exports.isRequired = function(props, propName, componentName) {
  if (!props[propName]) {
    throw new Error('Prop ' + propName + ' passed to ' + componentName + ' is required');
  }
  return module.exports(props, propName, componentName);
};

module.exports.supportingArrays = PropTypes.oneOfType([
  PropTypes.arrayOf(module.exports),
  module.exports
]);


/***/ }),

/***/ "./public/app/core/components/Form/Form.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Form: () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");





function Form({
  defaultValues,
  onSubmit,
  validateOnMount = false,
  validateFieldsOnMount,
  children,
  validateOn = "onSubmit",
  maxWidth = 600,
  ...htmlProps
}) {
  const { handleSubmit, trigger, formState, ...rest } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    mode: validateOn,
    defaultValues
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (validateOnMount) {
      trigger(validateFieldsOnMount);
    }
  }, [trigger, validateFieldsOnMount, validateOnMount]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "form",
    {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        maxWidth: maxWidth !== "none" ? maxWidth + "px" : maxWidth,
        width: "100%"
      }),
      onSubmit: handleSubmit(onSubmit),
      ...htmlProps,
      children: children({ errors: formState.errors, formState, trigger, ...rest })
    }
  );
}


/***/ }),

/***/ "./public/app/core/components/FormPrompt/Prompt.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Prompt: () => (/* binding */ Prompt)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");



const Prompt = ({ message, when = true }) => {
  const history = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getHistory();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!when) {
      return void 0;
    }
    const unblock = history.block(message);
    return () => {
      unblock();
    };
  }, [when, message, history]);
  return null;
};


/***/ }),

/***/ "./public/app/core/components/SplitPaneWrapper/SplitPaneWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitPaneWrapper: () => (/* binding */ SplitPaneWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_split_pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-split-pane/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/DragHandle/DragHandle.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/config.ts");








class SplitPaneWrapper extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor() {
    super(...arguments);
    //requestAnimationFrame reference
    this.rafToken = (0,react__WEBPACK_IMPORTED_MODULE_2__.createRef)();
    this.updateSplitPaneSize = () => {
      if (this.rafToken.current !== void 0) {
        window.cancelAnimationFrame(this.rafToken.current);
      }
      this.rafToken.current = window.requestAnimationFrame(() => {
        this.forceUpdate();
      });
    };
    this.onDragFinished = (size) => {
      document.body.style.cursor = "auto";
      if (this.props.onDragFinished && size !== void 0) {
        this.props.onDragFinished(size);
      }
    };
    this.onDragStarted = () => {
      document.body.style.cursor = this.props.splitOrientation === "horizontal" ? "row-resize" : "col-resize";
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateSplitPaneSize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSplitPaneSize);
  }
  render() {
    const {
      children,
      paneSize,
      splitOrientation,
      maxSize,
      minSize,
      primary,
      parentStyle,
      paneStyle,
      secondaryPaneStyle,
      splitVisible = true
    } = this.props;
    let childrenArr = [];
    if (Array.isArray(children)) {
      childrenArr = children;
    } else {
      childrenArr.push(children);
    }
    const styles = getStyles(app_core_config__WEBPACK_IMPORTED_MODULE_5__.config.theme2, splitVisible);
    const dragStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.getDragStyles)(app_core_config__WEBPACK_IMPORTED_MODULE_5__.config.theme2);
    const paneSizePx = paneSize <= 1 ? paneSize * (splitOrientation === "horizontal" ? window.innerHeight : window.innerWidth) : paneSize;
    const childrenFragments = [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, { children: childrenArr[0] }, "leftPane"),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, { children: childrenArr[1] || void 0 }, "rightPane")
    ];
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_split_pane__WEBPACK_IMPORTED_MODULE_3__["default"],
      {
        split: splitOrientation,
        minSize,
        maxSize,
        size: splitVisible ? paneSizePx : 0,
        primary: splitVisible ? primary : "second",
        resizerClassName: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(
          styles.resizer,
          splitOrientation === "horizontal" ? dragStyles.dragHandleHorizontal : dragStyles.dragHandleVertical
        ),
        onDragStarted: () => this.onDragStarted(),
        onDragFinished: (size) => this.onDragFinished(size),
        style: parentStyle,
        paneStyle,
        pane2Style: secondaryPaneStyle,
        children: childrenFragments
      }
    );
  }
}
const getStyles = (theme, hasSplit) => {
  return {
    resizer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: hasSplit ? "block" : "none"
    })
  };
};


/***/ }),

/***/ "./public/app/core/log_events.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./public/app/core/navigation/kiosk.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getKioskMode: () => (/* binding */ getKioskMode)
/* harmony export */ });
/* harmony import */ var app_types_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/types/dashboard.ts");


function getKioskMode(queryParams) {
  switch (queryParams.kiosk) {
    //  legacy support
    case "1":
    case true:
      return app_types_dashboard__WEBPACK_IMPORTED_MODULE_0__.KioskMode.Full;
    default:
      return null;
  }
}


/***/ }),

/***/ "./public/app/features/alerting/unified/PanelAlertTab.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelAlertTab: () => (/* binding */ PanelAlertTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/Tab.tsx");
/* harmony import */ var _hooks_usePanelCombinedRules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/hooks/usePanelCombinedRules.ts");




const PanelAlertTab = ({ panel, dashboard, ...otherProps }) => {
  const { rules, loading } = (0,_hooks_usePanelCombinedRules__WEBPACK_IMPORTED_MODULE_2__.usePanelCombinedRules)({ panelId: panel.id, dashboardUID: dashboard.uid });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tab, { ...otherProps, counter: loading ? null : rules.length });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/PanelAlertTabContent.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelAlertTabContent: () => (/* binding */ PanelAlertTabContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/ScrollContainer/ScrollContainer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _components_panel_alerts_tab_NewRuleFromPanelButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/panel-alerts-tab/NewRuleFromPanelButton.tsx");
/* harmony import */ var _components_rules_RulesTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesTable.tsx");
/* harmony import */ var _hooks_usePanelCombinedRules__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/hooks/usePanelCombinedRules.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");













const PanelAlertTabContent = ({ dashboard, panel }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const { errors, loading, rules } = (0,_hooks_usePanelCombinedRules__WEBPACK_IMPORTED_MODULE_12__.usePanelCombinedRules)({
    dashboardUID: dashboard.uid,
    panelId: panel.id,
    poll: true
  });
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_13__.getRulesPermissions)("grafana");
  const canCreateRules = _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.unifiedAlertingEnabled && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(permissions.create);
  const alert = errors.length ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.panel-alert-tab-content.alert.title-errors-loading-rules", "Errors loading rules"),
      severity: "error",
      children: errors.map((error, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans,
        {
          i18nKey: "alerting.panel-alert-tab-content.failed-to-load-error",
          values: { error: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_14__.stringifyErrorLike)(error) },
          children: [
            "Failed to load Grafana rules state: ",
            "{{error}}"
          ]
        }
      ) }, index))
    }
  ) : null;
  if (loading && !rules.length) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.innerWrapper, children: [
      alert,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.panel-alert-tab-content.text-loading-rules", "Loading rules...") })
    ] });
  }
  if (rules.length) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.ScrollContainer, { minHeight: "100%", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.innerWrapper, children: [
      alert,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rules_RulesTable__WEBPACK_IMPORTED_MODULE_11__.RulesTable, { rules }),
      !!dashboard.meta.canSave && canCreateRules && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_panel_alerts_tab_NewRuleFromPanelButton__WEBPACK_IMPORTED_MODULE_10__.NewRuleFromPanelButton, { className: styles.newButton, panel, dashboard })
    ] }) });
  }
  const isNew = !Boolean(dashboard.uid);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.PanelAlertTabContent.content, className: styles.noRulesWrapper, children: [
    alert,
    !isNew && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "dashboard.panel-edit.alerting-tab.no-rules", children: "There are no alert rules linked to this panel." }) }),
      !!dashboard.meta.canSave && canCreateRules && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_panel_alerts_tab_NewRuleFromPanelButton__WEBPACK_IMPORTED_MODULE_10__.NewRuleFromPanelButton, { panel, dashboard })
    ] }),
    isNew && !!dashboard.meta.canSave && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert,
      {
        severity: "info",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.panel-alert-tab-content.title-dashboard-not-saved", "Dashboard not saved"),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "dashboard.panel-edit.alerting-tab.dashboard-not-saved", children: "Dashboard must be saved before alerts can be added." })
      }
    )
  ] });
};
const getStyles = (theme) => ({
  newButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: theme.spacing(3)
  }),
  innerWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(2)
  }),
  noRulesWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    margin: theme.spacing(2),
    backgroundColor: theme.colors.background.secondary,
    padding: theme.spacing(3)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/panel-alerts-tab/NewRuleFromPanelButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewRuleFromPanelButton: () => (/* binding */ NewRuleFromPanelButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/utils/url.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _utils_rule_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-form.ts");










const NewRuleFromPanelButton = ({ dashboard, panel, className }) => {
  const templating = (0,app_types_store__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state) => {
    return state.templating;
  });
  const location = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  const { loading, value: formValues } = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(
    () => (0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_9__.panelToRuleFormValues)(panel, dashboard),
    // Templating variables are required to update formValues on each variable's change. It's used implicitly by the templating engine
    [panel, dashboard, templating]
  );
  if (loading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { disabled: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.new-rule-from-panel-button.new-alert-rule", children: "New alert rule" }) });
  }
  if (!formValues) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Alert,
      {
        severity: "info",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "alerting.new-rule-from-panel-button.title-no-alerting-capable-query-found",
          "No alerting capable query found"
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.new-rule-from-panel-button.body-no-alerting-capable-query-found", children: "Cannot create alerts from this panel because no query to an alerting capable datasource is found." })
      }
    );
  }
  const ruleFormUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_3__.urlUtil.renderUrl("alerting/new", {
    defaults: JSON.stringify(formValues),
    returnTo: location.pathname + location.search
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LinkButton,
    {
      icon: "bell",
      onClick: () => (0,_Analytics__WEBPACK_IMPORTED_MODULE_8__.logInfo)(_Analytics__WEBPACK_IMPORTED_MODULE_8__.LogMessages.alertRuleFromPanel),
      href: ruleFormUrl,
      className,
      "data-testid": "create-alert-rule-button",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.new-rule-from-panel-button.new-alert-rule", children: "New alert rule" })
    }
  );
};


/***/ }),

/***/ "./public/app/features/dashboard-scene/pages/DashboardScenePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardScenePage: () => (/* binding */ DashboardScenePage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/navModel.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/PageLoader/PageLoader.tsx");
/* harmony import */ var app_features_dashboard_containers_DashboardPageError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/dashboard/containers/DashboardPageError.tsx");
/* harmony import */ var app_features_dashboard_services_DashboardProfiler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/dashboard/services/DashboardProfiler.ts");
/* harmony import */ var app_features_provisioning_components_Dashboards_DashboardPreviewBanner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/provisioning/components/Dashboards/DashboardPreviewBanner.tsx");
/* harmony import */ var app_types_dashboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/types/dashboard.ts");
/* harmony import */ var _saving_DashboardPrompt__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/dashboard-scene/saving/DashboardPrompt.tsx");
/* harmony import */ var _utils_dashboardSessionState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/dashboard-scene/utils/dashboardSessionState.ts");
/* harmony import */ var _DashboardScenePageStateManager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/dashboard-scene/pages/DashboardScenePageStateManager.ts");


















function DashboardScenePage({ route, queryParams, location }) {
  const params = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_2__.useParams)();
  const { type, slug, uid } = params;
  const path = params["*"];
  const prevMatch = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])({ params });
  const stateManager = (0,_DashboardScenePageStateManager__WEBPACK_IMPORTED_MODULE_16__.getDashboardScenePageStateManager)();
  const { dashboard, isLoading, loadError } = stateManager.useState();
  const routeReloadCounter = location.state?.routeReloadCounter;
  const prevParams = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(params);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (route.routeName === app_types_dashboard__WEBPACK_IMPORTED_MODULE_13__.DashboardRoutes.Normal && type === "snapshot") {
      stateManager.loadSnapshot(slug);
    } else {
      stateManager.loadDashboard({
        uid: (route.routeName === app_types_dashboard__WEBPACK_IMPORTED_MODULE_13__.DashboardRoutes.Provisioning ? path : uid) ?? "",
        type,
        slug,
        route: route.routeName,
        urlFolderUid: queryParams.folderUid
      });
    }
    return () => {
      (0,app_features_dashboard_services_DashboardProfiler__WEBPACK_IMPORTED_MODULE_11__.getDashboardSceneProfiler)().cancelProfile();
      (0,_utils_dashboardSessionState__WEBPACK_IMPORTED_MODULE_15__.preserveDashboardSceneStateInLocalStorage)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.locationService.getSearch(), uid);
      stateManager.clearState();
      stateManager.resetActiveManager();
    };
  }, [stateManager, uid, route.routeName, queryParams.folderUid, routeReloadCounter, type]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (route.routeName === app_types_dashboard__WEBPACK_IMPORTED_MODULE_13__.DashboardRoutes.Normal) {
      if (uid === prevParams.current.uid && prevParams.current.slug && !slug) {
        const correctedUrl = `/d/${uid}/${prevParams.current.slug}`;
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.locationService.replace({
          ..._grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.locationService.getLocation(),
          pathname: correctedUrl
        });
      }
    }
    return () => {
      prevParams.current = { uid, slug: !slug ? prevParams.current.slug : slug };
    };
  }, [route, slug, type, uid]);
  if (!dashboard) {
    let errorElement;
    if (loadError) {
      errorElement = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_dashboard_containers_DashboardPageError__WEBPACK_IMPORTED_MODULE_10__.DashboardPageError, { error: loadError, type });
    }
    return errorElement || /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_8__.Page, { navId: "dashboards/browse", layout: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.PageLayoutType.Canvas, "data-testid": "dashboard-scene-page", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Box, { paddingY: 4, display: "flex", direction: "column", alignItems: "center", children: isLoading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_9__["default"], {}) }) });
  }
  if (type !== "snapshot" && (!prevMatch || uid !== prevMatch?.params.uid)) {
    console.log("skipping rendering");
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_scenes__WEBPACK_IMPORTED_MODULE_6__.UrlSyncContextProvider, { scene: dashboard, updateUrlOnInit: true, createBrowserHistorySteps: true, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_provisioning_components_Dashboards_DashboardPreviewBanner__WEBPACK_IMPORTED_MODULE_12__.DashboardPreviewBanner, { queryParams, route: route.routeName, slug, path }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(dashboard.Component, { model: dashboard }, dashboard.state.key),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_saving_DashboardPrompt__WEBPACK_IMPORTED_MODULE_14__.DashboardPrompt, { dashboard })
  ] });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardScenePage);


/***/ }),

/***/ "./public/app/features/dashboard-scene/saving/DashboardPrompt.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardPrompt: () => (/* binding */ DashboardPrompt),
/* harmony export */   UnsavedChangesModal: () => (/* binding */ UnsavedChangesModal),
/* harmony export */   ignoreChanges: () => (/* binding */ ignoreChanges),
/* harmony export */   isEmptyDashboard: () => (/* binding */ isEmptyDashboard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/ModalsContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_FormPrompt_Prompt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/FormPrompt/Prompt.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_features_dashboard_api_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/dashboard/api/utils.ts");
/* harmony import */ var app_features_dashboard_dashgrid_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/dashboard/dashgrid/types.ts");
/* harmony import */ var _panel_edit_SaveLibraryVizPanelModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/dashboard-scene/panel-edit/SaveLibraryVizPanelModal.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/dashboard-scene/utils/utils.ts");













const DashboardPrompt = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(({ dashboard }) => {
  const originalLocation = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.locationService.getLocation(), [dashboard]);
  const originalPath = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => originalLocation.pathname, [originalLocation]);
  const { showModal, hideModal } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ModalsContext);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const handleUnload = (event) => {
      if (ignoreChanges(dashboard)) {
        return;
      }
      if (dashboard.state.isDirty) {
        event.preventDefault();
        event.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [dashboard]);
  const onHistoryBlock = (location) => {
    const panelEditor = dashboard.state.editPanel;
    const vizPanel = panelEditor?.getPanel();
    const search = new URLSearchParams(location.search);
    if (panelEditor && vizPanel && (0,_utils_utils__WEBPACK_IMPORTED_MODULE_14__.isLibraryPanel)(vizPanel) && panelEditor.state.isDirty && !search.has("editPanel")) {
      const libPanelBehavior = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_14__.getLibraryPanelBehavior)(vizPanel);
      showModal(_panel_edit_SaveLibraryVizPanelModal__WEBPACK_IMPORTED_MODULE_13__.SaveLibraryVizPanelModal, {
        dashboard,
        isUnsavedPrompt: true,
        libraryPanel: libPanelBehavior,
        onConfirm: () => {
          panelEditor.onConfirmSaveLibraryPanel();
          hideModal();
          moveToBlockedLocationAfterReactStateUpdate(location);
        },
        onDiscard: () => {
          panelEditor.onDiscard();
          hideModal();
          moveToBlockedLocationAfterReactStateUpdate(location);
        },
        onDismiss: hideModal
      });
      return false;
    }
    if (originalPath === location.pathname) {
      return true;
    }
    if (ignoreChanges(dashboard)) {
      return true;
    }
    if (!dashboard.state.isDirty) {
      return true;
    }
    showModal(UnsavedChangesModal, {
      dashboard,
      onSaveDashboardClick: () => {
        hideModal();
        dashboard.openSaveDrawer({
          onSaveSuccess: () => {
            moveToBlockedLocationAfterReactStateUpdate(location);
          }
        });
      },
      onDiscard: () => {
        dashboard.exitEditMode({ skipConfirm: true });
        hideModal();
        if (originalPath === app_features_dashboard_dashgrid_types__WEBPACK_IMPORTED_MODULE_12__.DASHBOARD_LIBRARY_ROUTES.Template) {
          moveToBlockedLocationAfterReactStateUpdate(location, true);
        } else {
          moveToBlockedLocationAfterReactStateUpdate(location);
        }
      },
      onDismiss: hideModal
    });
    return false;
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_FormPrompt_Prompt__WEBPACK_IMPORTED_MODULE_9__.Prompt, { when: true, message: onHistoryBlock });
});
DashboardPrompt.displayName = "DashboardPrompt";
function moveToBlockedLocationAfterReactStateUpdate(location, replace = false) {
  if (location) {
    setTimeout(() => replace ? _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.locationService.replace(location) : _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.locationService.push(location), 10);
  }
}
const UnsavedChangesModal = ({ onDiscard, onDismiss, onSaveDashboardClick }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal,
    {
      isOpen: true,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard-scene.unsaved-changes-modal.title-unsaved-changes", "Unsaved changes"),
      onDismiss,
      icon: "exclamation-triangle",
      className: styles.modal,
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "dashboard-scene.unsaved-changes-modal.changes", children: "Do you want to save your changes?" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal.ButtonRow, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { variant: "secondary", onClick: onDismiss, fill: "outline", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "dashboard-scene.unsaved-changes-modal.cancel", children: "Cancel" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { variant: "destructive", onClick: onDiscard, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "dashboard-scene.unsaved-changes-modal.discard", children: "Discard" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { onClick: onSaveDashboardClick, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "dashboard-scene.unsaved-changes-modal.save-dashboard", children: "Save dashboard" }) })
        ] })
      ]
    }
  );
};
const getStyles = () => ({
  modal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "500px"
  })
});
function ignoreChanges(scene) {
  const original = scene?.getInitialSaveModel();
  if (!original) {
    return true;
  }
  if (scene?.state.meta.version === 0) {
    return true;
  }
  if (!app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_10__.contextSrv.isSignedIn) {
    return true;
  }
  if (!scene) {
    return true;
  }
  const dashboard = scene.getSaveModel();
  if (isEmptyDashboard(dashboard, scene?.serializer.metadata)) {
    return true;
  }
  const { canSave, fromScript, fromFile } = scene.state.meta;
  if (!app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_10__.contextSrv.isEditor && !canSave) {
    return true;
  }
  return !canSave || fromScript || fromFile || scene.state.isEditing && !(0,_utils_utils__WEBPACK_IMPORTED_MODULE_14__.hasActualSaveChanges)(scene);
}
function isEmptyDashboard(dashboard, metadata) {
  if ((0,app_features_dashboard_api_utils__WEBPACK_IMPORTED_MODULE_11__.isDashboardV2Spec)(dashboard)) {
    const hasNoPanels2 = Object.keys(dashboard.elements).length === 0;
    const hasNoLinks2 = !dashboard.links.length;
    const hasNoTemplates2 = !dashboard.variables.length;
    const hasNoUid2 = !metadata || !("name" in metadata) || !metadata.name;
    return hasNoPanels2 && hasNoLinks2 && hasNoTemplates2 && hasNoUid2;
  }
  const hasNoPanels = !dashboard.panels?.length;
  const hasNoLinks = !dashboard.links?.length;
  const hasNoTemplates = !dashboard.templating?.list?.length;
  const hasNoUid = !dashboard.uid;
  return hasNoPanels && hasNoLinks && hasNoTemplates && hasNoUid;
}


/***/ }),

/***/ "./public/app/features/dashboard/components/AddLibraryPanelWidget/AddLibraryPanelWidget.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddLibraryPanelWidget: () => (/* binding */ AddLibraryPanelWidget)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/tinycolor2/esm/tinycolor.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _library_panels_components_LibraryPanelsSearch_LibraryPanelsSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx");







const AddLibraryPanelWidget = ({ panel, dashboard }) => {
  const onCancelAddPanel = (evt) => {
    evt.preventDefault();
    dashboard.removePanel(panel);
  };
  const onAddLibraryPanel = (panelInfo) => {
    const { gridPos } = panel;
    const newPanel = {
      ...panelInfo.model,
      gridPos,
      libraryPanel: panelInfo
    };
    dashboard.addPanel(newPanel);
    dashboard.removePanel(panel);
  };
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.wrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.callToAction, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.headerRow, "grid-drag-handle"), children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "library-panel.add-widget.title", children: "Add panel from panel library" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex-grow-1" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.IconButton,
        {
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
            "dashboard.add-library-panel-widget.aria-label-close-add-panel-widget",
            "Close 'Add Panel' widget"
          ),
          name: "times",
          onClick: onCancelAddPanel,
          tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard.add-library-panel-widget.tooltip-close-widget", "Close widget")
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_library_panels_components_LibraryPanelsSearch_LibraryPanelsSearch__WEBPACK_IMPORTED_MODULE_6__.LibraryPanelsSearch, { onClick: onAddLibraryPanel, variant: _library_panels_components_LibraryPanelsSearch_LibraryPanelsSearch__WEBPACK_IMPORTED_MODULE_6__.LibraryPanelsSearchVariant.Tight, showPanelFilter: true })
  ] }) });
};
const getStyles = (theme) => {
  const pulsate = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.keyframes)({
    "0%": {
      boxShadow: `0 0 0 2px ${theme.colors.background.canvas}, 0 0 0px 4px ${theme.colors.primary.main}`
    },
    "50%": {
      boxShadow: `0 0 0 2px ${theme.components.dashboard.background}, 0 0 0px 4px ${(0,tinycolor2__WEBPACK_IMPORTED_MODULE_2__["default"])(theme.colors.primary.main).darken(20).toHexString()}`
    },
    "100%": {
      boxShadow: `0 0 0 2px ${theme.components.dashboard.background}, 0 0 0px 4px  ${theme.colors.primary.main}`
    }
  });
  return {
    // wrapper is used to make sure box-shadow animation isn't cut off in dashboard page
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "100%",
      paddingTop: `${theme.spacing(0.5)}`
    }),
    headerRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      alignItems: "center",
      height: "38px",
      flexShrink: 0,
      width: "100%",
      fontSize: theme.typography.fontSize,
      fontWeight: theme.typography.fontWeightMedium,
      paddingLeft: `${theme.spacing(1)}`,
      [theme.transitions.handleMotion("no-preference", "reduce")]: {
        transition: "background-color 0.1s ease-in-out"
      },
      cursor: "move",
      "&:hover": {
        background: `${theme.colors.background.secondary}`
      }
    }),
    callToAction: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      backgroundColor: theme.components.panel.background,
      border: `1px solid ${theme.components.panel.borderColor}`,
      borderRadius: theme.shape.radius.default,
      display: "flex",
      flex: "1 1 0",
      flexDirection: "column",
      height: "100%",
      position: "relative",
      width: "100%",
      outline: "2px dotted transparent",
      outlineOffset: "2px",
      overflow: "hidden",
      [theme.transitions.handleMotion("no-preference", "reduce")]: {
        animation: `${pulsate} 2s ease infinite`
      }
    })
  };
};


/***/ }),

/***/ "./public/app/features/dashboard/components/AnnotationSettings/AnnotationSettingsEdit.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnotationSettingsEdit: () => (/* binding */ AnnotationSettingsEdit),
/* harmony export */   newAnnotationName: () => (/* binding */ newAnnotationName)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/services/dataSourceSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldSet.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Checkbox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_OptionsUI_color__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/core/components/OptionsUI/color.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_features_annotations_components_StandardAnnotationQueryEditor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/annotations/components/StandardAnnotationQueryEditor.tsx");
/* harmony import */ var app_features_datasources_components_picker_DataSourcePicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/datasources/components/picker/DataSourcePicker.tsx");














const newAnnotationName = "New annotation";
const AnnotationSettingsEdit = ({ editIdx, dashboard }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.useStyles2)(getStyles);
  const [annotation, setAnnotation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(dashboard.annotations.list[editIdx]);
  const panelFilter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (!annotation.filter) {
      return 0 /* AllPanels */;
    }
    return annotation.filter.exclude ? 2 /* ExcludePanels */ : 1 /* IncludePanels */;
  }, [annotation.filter]);
  const { value: ds } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.getDataSourceSrv)().get(annotation.datasource);
  }, [annotation.datasource]);
  const dsi = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.getDataSourceSrv)().getInstanceSettings(annotation.datasource);
  const onUpdate = (annotation2) => {
    const list = [...dashboard.annotations.list];
    list.splice(editIdx, 1, annotation2);
    setAnnotation(annotation2);
    dashboard.annotations.list = list;
  };
  const onNameChange = (ev) => {
    onUpdate({
      ...annotation,
      name: ev.currentTarget.value
    });
  };
  const onDataSourceChange = (ds2) => {
    const dsRef = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.getDataSourceRef)(ds2);
    if (annotation.datasource?.type !== dsRef.type) {
      onUpdate({
        datasource: dsRef,
        builtIn: annotation.builtIn,
        enable: annotation.enable,
        iconColor: annotation.iconColor,
        name: annotation.name,
        hide: annotation.hide,
        filter: annotation.filter,
        mappings: annotation.mappings,
        type: annotation.type
      });
    } else {
      onUpdate({
        ...annotation,
        datasource: dsRef
      });
    }
  };
  const onChange = (ev) => {
    const target = ev.currentTarget;
    onUpdate({
      ...annotation,
      [target.name]: target.type === "checkbox" ? target.checked : target.value
    });
  };
  const onColorChange = (color) => {
    onUpdate({
      ...annotation,
      iconColor: color
    });
  };
  const onFilterTypeChange = (v) => {
    let filter = v.value === 0 /* AllPanels */ ? void 0 : {
      exclude: v.value === 2 /* ExcludePanels */,
      ids: annotation.filter?.ids ?? []
    };
    onUpdate({ ...annotation, filter });
  };
  const onAddFilterPanelID = (selections) => {
    if (!Array.isArray(selections)) {
      return;
    }
    const filter = {
      exclude: panelFilter === 2 /* ExcludePanels */,
      ids: []
    };
    selections.forEach((selection) => selection.value && filter.ids.push(selection.value));
    onUpdate({ ...annotation, filter });
  };
  const onApply = goBackToList;
  const onPreview = () => {
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.locationService.partial({ editview: null, editIndex: null });
  };
  const onDelete = () => {
    const annotations = dashboard.annotations.list;
    dashboard.annotations.list = [...annotations.slice(0, editIdx), ...annotations.slice(editIdx + 1)];
    goBackToList();
  };
  const isNewAnnotation = annotation.name === newAnnotationName;
  const sortFn = (a, b) => {
    if (a.label && b.label) {
      return a.label.toLowerCase().localeCompare(b.label.toLowerCase());
    }
    return -1;
  };
  const panels = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => dashboard?.panels.filter((panel) => app_core_config__WEBPACK_IMPORTED_MODULE_19__["default"].panels[panel.type]).map((panel) => ({
      value: panel.id,
      label: panel.title ?? `Panel ${panel.id}`,
      description: panel.description,
      imgUrl: app_core_config__WEBPACK_IMPORTED_MODULE_19__["default"].panels[panel.type].info.logos.small
    })).sort(sortFn) ?? [],
    [dashboard]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.FieldSet, { className: styles.settingsForm, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("dashboard.annotation-settings-edit.label-name", "Name"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Input,
        {
          "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.pages.Dashboard.Settings.Annotations.Settings.name,
          name: "name",
          id: "name",
          autoFocus: isNewAnnotation,
          value: annotation.name,
          onChange: onNameChange
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Field,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("dashboard.annotation-settings-edit.label-data-source", "Data source"),
          htmlFor: "data-source-picker",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_datasources_components_picker_DataSourcePicker__WEBPACK_IMPORTED_MODULE_21__.DataSourcePicker, { annotations: true, variables: true, current: annotation.datasource, onChange: onDataSourceChange })
        }
      ),
      !ds?.meta.annotations && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Alert,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
            "dashboard.annotation-settings-edit.title-annotation-support-source",
            "No annotation support for this data source"
          ),
          severity: "error",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "errors.dashboard-settings.annotations.datasource", children: "The selected data source does not support annotations. Please select a different data source." })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Field,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("dashboard.annotation-settings-edit.label-enabled", "Enabled"),
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
            "dashboard.annotation-settings-edit.description-enabled-annotation-query-issued-every-dashboard",
            "When enabled the annotation query is issued every dashboard refresh"
          ),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Checkbox, { name: "enable", id: "enable", value: annotation.enable, onChange })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Field,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("dashboard.annotation-settings-edit.label-hidden", "Hidden"),
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
            "dashboard.annotation-settings-edit.description-hidden",
            "Annotation queries can be toggled on or off at the top of the dashboard. With this option checked this toggle will be hidden."
          ),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Checkbox, { name: "hide", id: "hide", value: annotation.hide, onChange })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Field,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("dashboard.annotation-settings-edit.label-color", "Color"),
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
            "dashboard.annotation-settings-edit.description-color-annotation-event-markers",
            "Color to use for the annotation event markers"
          ),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_OptionsUI_color__WEBPACK_IMPORTED_MODULE_18__.ColorValueEditor, { value: annotation?.iconColor, onChange: onColorChange }) })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Field,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("dashboard.annotation-settings-edit.label-show-in", "Show in"),
          "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.pages.Dashboard.Settings.Annotations.NewAnnotation.showInLabel,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Select,
              {
                options: getPanelFilters(),
                value: panelFilter,
                onChange: onFilterTypeChange,
                "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.components.Annotations.annotationsTypeInput
              }
            ),
            panelFilter !== 0 /* AllPanels */ && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.MultiSelect,
              {
                options: panels,
                value: panels.filter((panel) => annotation.filter?.ids.includes(panel.value)),
                onChange: onAddFilterPanelID,
                isClearable: true,
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("dashboard.annotation-settings-edit.placeholder-choose-panels", "Choose panels"),
                width: 100,
                closeMenuOnSelect: false,
                className: styles.select,
                "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.components.Annotations.annotationsChoosePanelInput
              }
            )
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.FieldSet, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: "page-heading", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "dashboard.annotation-settings-edit.query", children: "Query" }) }),
      ds?.annotations && dsi && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        app_features_annotations_components_StandardAnnotationQueryEditor__WEBPACK_IMPORTED_MODULE_20__["default"],
        {
          datasource: ds,
          datasourceInstanceSettings: dsi,
          annotation,
          onChange: onUpdate
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { children: [
      !annotation.builtIn && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button, { variant: "destructive", onClick: onDelete, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "dashboard.annotation-settings-edit.delete", children: "Delete" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button,
        {
          variant: "secondary",
          onClick: onPreview,
          "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.pages.Dashboard.Settings.Annotations.NewAnnotation.previewInDashboard,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "dashboard.annotation-settings-edit.preview-in-dashboard", children: "Preview in dashboard" })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button, { variant: "primary", onClick: onApply, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "dashboard.annotation-settings-edit.apply", children: "Apply" }) })
    ] })
  ] });
};
const getStyles = (theme) => {
  return {
    settingsForm: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      maxWidth: theme.spacing(60),
      marginBottom: theme.spacing(2)
    }),
    select: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginTop: "8px"
    })
  };
};
function goBackToList() {
  _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.locationService.partial({ editIndex: null });
}
var PanelFilterType = /* @__PURE__ */ ((PanelFilterType2) => {
  PanelFilterType2[PanelFilterType2["AllPanels"] = 0] = "AllPanels";
  PanelFilterType2[PanelFilterType2["IncludePanels"] = 1] = "IncludePanels";
  PanelFilterType2[PanelFilterType2["ExcludePanels"] = 2] = "ExcludePanels";
  return PanelFilterType2;
})(PanelFilterType || {});
const getPanelFilters = () => [
  {
    label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("dashboard.get-panel-filters.label.all-panels", "All panels"),
    value: 0 /* AllPanels */,
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
      "dashboard.get-panel-filters.description.annotation-panels-support-annotations",
      "Send the annotation data to all panels that support annotations"
    )
  },
  {
    label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("dashboard.get-panel-filters.label.selected-panels", "Selected panels"),
    value: 1 /* IncludePanels */,
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
      "dashboard.get-panel-filters.description.annotations-explicitly-listed-panels",
      "Send the annotations to the explicitly listed panels"
    )
  },
  {
    label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("dashboard.get-panel-filters.label.all-panels-except", "All panels except"),
    value: 2 /* ExcludePanels */,
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
      "dashboard.get-panel-filters.description.annotation-following-panels",
      "Do not send annotation data to the following panels"
    )
  }
];


/***/ }),

/***/ "./public/app/features/dashboard/components/AnnotationSettings/AnnotationSettingsList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnotationSettingsList: () => (/* binding */ AnnotationSettingsList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/utils/arrayUtils.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/services/dataSourceSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmButton/DeleteButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _DashboardSettings_ListNewButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/dashboard/components/DashboardSettings/ListNewButton.tsx");










const AnnotationSettingsList = ({ dashboard, onNew, onEdit }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.useStyles2)(getStyles);
  const [annotations, updateAnnotations] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(dashboard.annotations.list);
  const onMove = (idx, direction) => {
    dashboard.annotations.list = _grafana_data__WEBPACK_IMPORTED_MODULE_3__.moveItemImmutably(annotations, idx, idx + direction);
    updateAnnotations(dashboard.annotations.list);
  };
  const onDelete = (idx) => {
    dashboard.annotations.list = [...annotations.slice(0, idx), ...annotations.slice(idx + 1)];
    updateAnnotations(dashboard.annotations.list);
  };
  const showEmptyListCTA = annotations.length === 0 || annotations.length === 1 && annotations[0].builtIn;
  const getAnnotationName = (anno) => {
    if (anno.enable === false) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("em", { className: "muted", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "dashboard.annotation-settings-list.disabled", values: { name: anno.name }, children: [
        "(Disabled) ",
        "{{name}}"
      ] }) }) });
    }
    if (anno.builtIn) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("em", { className: "muted", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "dashboard.annotation-settings-list.built-in", values: { name: anno.name }, children: [
        "{{name}}",
        " (Built-in)"
      ] }) }) });
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: anno.name });
  };
  const dataSourceSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.getDataSourceSrv)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { direction: "column", children: [
    annotations.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.table, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { role: "grid", className: "filter-table filter-table--hover", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "dashboard.annotation-settings-list.query-name", children: "Query name" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "dashboard.annotation-settings-list.data-source", children: "Data source" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { colSpan: 3 })
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: dashboard.annotations.list.map((annotation, idx) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
        annotation.builtIn ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { role: "gridcell", style: { width: "90%" }, className: "pointer", onClick: () => onEdit(idx), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button, { size: "sm", fill: "text", variant: "secondary", children: getAnnotationName(annotation) }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { role: "gridcell", className: "pointer", onClick: () => onEdit(idx), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button, { size: "sm", fill: "text", variant: "secondary", children: getAnnotationName(annotation) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { role: "gridcell", className: "pointer", onClick: () => onEdit(idx), children: dataSourceSrv.getInstanceSettings(annotation.datasource)?.name || annotation.datasource?.uid }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { role: "gridcell", style: { width: "1%" }, children: idx !== 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.IconButton,
          {
            name: "arrow-up",
            onClick: () => onMove(idx, -1),
            tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("dashboard.annotation-settings-list.tooltip-move-up", "Move up")
          }
        ) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { role: "gridcell", style: { width: "1%" }, children: dashboard.annotations.list.length > 1 && idx !== dashboard.annotations.list.length - 1 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.IconButton,
          {
            name: "arrow-down",
            onClick: () => onMove(idx, 1),
            tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("dashboard.annotation-settings-list.tooltip-move-down", "Move down")
          }
        ) : null }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { role: "gridcell", style: { width: "1%" }, children: !annotation.builtIn && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.DeleteButton,
          {
            size: "sm",
            onConfirm: () => onDelete(idx),
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
              "dashboard.annotation-settings-list.aria-label-delete",
              'Delete query with title "{{title}}"',
              { title: annotation.name }
            )
          }
        ) })
      ] }, `${annotation.name}-${idx}`)) })
    ] }) }),
    showEmptyListCTA && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { direction: "column", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.EmptyState,
      {
        variant: "call-to-action",
        button: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button,
          {
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.CallToActionCard.buttonV2("Add annotation query"),
            icon: "comment-alt",
            onClick: onNew,
            size: "lg",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "annotations.empty-state.button-title", children: "Add annotation query" })
          }
        ),
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("annotations.empty-state.title", "There are no custom annotation queries added yet"),
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "annotations.empty-state.info-box-content", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "Annotations provide a way to integrate event data into your graphs. They are visualized as vertical lines and icons on all graph panels. When you hover over an annotation icon you can get event text & tags for the event. You can add annotation events directly from grafana by holding CTRL or CMD + click on graph (or drag region). These will be stored in Grafana's annotation database." }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "annotations.empty-state.info-box-content-2", children: [
            "Checkout the",
            " ",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.TextLink, { external: true, href: "http://docs.grafana.org/reference/annotations/", children: "Annotations documentation" }),
            " ",
            "for more information."
          ] })
        ]
      }
    ) }),
    !showEmptyListCTA && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _DashboardSettings_ListNewButton__WEBPACK_IMPORTED_MODULE_14__.ListNewButton,
      {
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.pages.Dashboard.Settings.Annotations.List.addAnnotationCTAV2,
        onClick: onNew,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "dashboard.annotation-settings-list.new-query", children: "New query" })
      }
    )
  ] });
};
const getStyles = () => ({
  table: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "100%",
    overflowX: "scroll"
  })
});


/***/ }),

/***/ "./public/app/features/dashboard/components/DashboardLoading/DashboardLoading.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardLoading: () => (/* binding */ DashboardLoading),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");






const DashboardLoading = ({ initPhase }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const cancelVariables = () => {
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.push("/");
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.dashboardLoading, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.dashboardLoadingText, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "column", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { alignItems: "center", justifyContent: "center", gap: 0.5, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Spinner, { inline: true }),
      " ",
      initPhase
    ] }),
    " ",
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { alignItems: "center", justifyContent: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { variant: "secondary", size: "md", icon: "repeat", onClick: cancelVariables, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "dashboard.dashboard-loading.cancel-loading-dashboard", children: "Cancel loading dashboard" }) }) })
  ] }) }) });
};
const getStyles = (theme) => {
  const slowStartThreshold = "0.5s";
  const invisibleToVisible = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
    0% { opacity: 0%; }
    100% { opacity: 100%; }
  `;
  return {
    dashboardLoading: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "60vh",
      display: "flex",
      opacity: "0%",
      alignItems: "center",
      justifyContent: "center",
      [theme.transitions.handleMotion("no-preference", "reduce")]: {
        animation: `${invisibleToVisible} 0s step-end ${slowStartThreshold} 1 normal forwards`
      }
    }),
    dashboardLoadingText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      fontSize: theme.typography.h4.fontSize
    })
  };
};


/***/ }),

/***/ "./public/app/features/dashboard/components/DashboardPermissions/AccessControlDashboardPermissions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessControlDashboardPermissions: () => (/* binding */ AccessControlDashboardPermissions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var app_core_components_AccessControl_Permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/AccessControl/Permissions.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/accessControl.ts");






const AccessControlDashboardPermissions = ({ dashboard, sectionNav }) => {
  const canSetPermissions = app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.DashboardsPermissionsWrite);
  const pageNav = sectionNav.node.parentItem;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__.Page, { navModel: sectionNav, pageNav, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_AccessControl_Permissions__WEBPACK_IMPORTED_MODULE_1__.Permissions, { resource: "dashboards", resourceId: dashboard.uid, canSetPermissions }) });
};


/***/ }),

/***/ "./public/app/features/dashboard/components/DashboardPrompt/DashboardPrompt.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardPrompt: () => (/* binding */ DashboardPrompt),
/* harmony export */   hasChanges: () => (/* binding */ hasChanges),
/* harmony export */   ignoreChanges: () => (/* binding */ ignoreChanges)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/ModalsContext.tsx");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_components_FormPrompt_Prompt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/FormPrompt/Prompt.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_features_library_panels_components_SaveLibraryPanelModal_SaveLibraryPanelModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/library-panels/components/SaveLibraryPanelModal/SaveLibraryPanelModal.tsx");
/* harmony import */ var app_types_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _state_DashboardModel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/dashboard/state/DashboardModel.ts");
/* harmony import */ var _PanelEditor_state_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/state/actions.ts");
/* harmony import */ var _SaveDashboard_UnsavedChangesModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/dashboard/components/SaveDashboard/UnsavedChangesModal.tsx");















const DashboardPrompt = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(({ dashboard }) => {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({ original: null });
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();
  const { original, originalPath } = state;
  const { showModal, hideModal } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ModalsContext);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const timeoutId = setTimeout(() => {
      const originalPath2 = _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.getLocation().pathname;
      const original2 = dashboard.getSaveModelCloneOld();
      setState({ originalPath: originalPath2, original: original2 });
    }, 1e3);
    const savedEventUnsub = app_core_app_events__WEBPACK_IMPORTED_MODULE_5__.appEvents.subscribe(app_types_events__WEBPACK_IMPORTED_MODULE_9__.DashboardSavedEvent, () => {
      const original2 = dashboard.getSaveModelCloneOld();
      setState({ originalPath, original: original2 });
    });
    return () => {
      clearTimeout(timeoutId);
      savedEventUnsub.unsubscribe();
    };
  }, [dashboard, originalPath]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const handleUnload = (event) => {
      if (ignoreChanges(dashboard, original)) {
        return;
      }
      if (hasChanges(dashboard, original)) {
        event.preventDefault();
        event.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [dashboard, original]);
  const onHistoryBlock = (location) => {
    const panelInEdit = dashboard.panelInEdit;
    const search = new URLSearchParams(location.search);
    if (panelInEdit && panelInEdit.libraryPanel && panelInEdit.hasChanged && !search.has("editPanel")) {
      showModal(app_features_library_panels_components_SaveLibraryPanelModal_SaveLibraryPanelModal__WEBPACK_IMPORTED_MODULE_8__.SaveLibraryPanelModal, {
        isUnsavedPrompt: true,
        panel: dashboard.panelInEdit,
        folderUid: dashboard.meta.folderUid ?? "",
        onConfirm: () => {
          hideModal();
          moveToBlockedLocationAfterReactStateUpdate(location);
        },
        onDiscard: () => {
          dispatch((0,_PanelEditor_state_actions__WEBPACK_IMPORTED_MODULE_12__.discardPanelChanges)());
          moveToBlockedLocationAfterReactStateUpdate(location);
          hideModal();
        },
        onDismiss: hideModal
      });
      return false;
    }
    if (originalPath === location.pathname || !original) {
      if (panelInEdit && !search.has("editPanel")) {
        dispatch((0,_PanelEditor_state_actions__WEBPACK_IMPORTED_MODULE_12__.exitPanelEditor)());
      }
      return true;
    }
    if (ignoreChanges(dashboard, original)) {
      return true;
    }
    if (!hasChanges(dashboard, original)) {
      return true;
    }
    showModal(_SaveDashboard_UnsavedChangesModal__WEBPACK_IMPORTED_MODULE_13__.UnsavedChangesModal, {
      dashboard,
      onSaveSuccess: () => {
        hideModal();
        moveToBlockedLocationAfterReactStateUpdate(location);
      },
      onDiscard: () => {
        setState({ ...state, original: null });
        hideModal();
        moveToBlockedLocationAfterReactStateUpdate(location);
      },
      onDismiss: hideModal
    });
    return false;
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_FormPrompt_Prompt__WEBPACK_IMPORTED_MODULE_6__.Prompt, { when: true, message: onHistoryBlock });
});
DashboardPrompt.displayName = "DashboardPrompt";
function moveToBlockedLocationAfterReactStateUpdate(location) {
  if (location) {
    setTimeout(() => _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.push(location), 10);
  }
}
function ignoreChanges(current, original) {
  if (!original) {
    return true;
  }
  if (original.version === 0) {
    return true;
  }
  if (!app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__.contextSrv.isSignedIn) {
    return true;
  }
  if (!current) {
    return true;
  }
  const { canSave, fromScript, fromFile } = current.meta;
  if (!app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__.contextSrv.isEditor && !canSave) {
    return true;
  }
  return !canSave || fromScript || fromFile;
}
function cleanDashboardFromIgnoredChanges(dashData) {
  const model = new _state_DashboardModel__WEBPACK_IMPORTED_MODULE_11__.DashboardModel(dashData);
  model.expandRows();
  const dash = model.getSaveModelClone();
  delete dash.time;
  delete dash.refresh;
  dash.schemaVersion = 0;
  delete dash.timezone;
  dash.panels = [];
  if (dash.templating?.list) {
    for (const variable of dash.templating.list) {
      delete variable.current;
      delete variable.options;
      delete variable.filters;
    }
  }
  return dash;
}
function hasChanges(current, original) {
  if (current.hasUnsavedChanges()) {
    return true;
  }
  const currentClean = cleanDashboardFromIgnoredChanges(current.getSaveModelCloneOld());
  const originalClean = cleanDashboardFromIgnoredChanges(original);
  const currentTimepicker = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(currentClean.nav, { type: "timepicker" });
  const originalTimepicker = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(originalClean.nav, { type: "timepicker" });
  if (currentTimepicker && originalTimepicker) {
    currentTimepicker.now = originalTimepicker.now;
  }
  const currentJson = JSON.stringify(currentClean, null);
  const originalJson = JSON.stringify(originalClean, null);
  return currentJson !== originalJson;
}


/***/ }),

/***/ "./public/app/features/dashboard/components/DashboardRow/DashboardRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardRow: () => (/* binding */ DashboardRow),
/* harmony export */   UnthemedDashboardRow: () => (/* binding */ UnthemedDashboardRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_features_dashboard_scene_utils_interactions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/dashboard-scene/utils/interactions.ts");
/* harmony import */ var app_plugins_datasource_dashboard_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/dashboard/constants.ts");
/* harmony import */ var img_grab_dark_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/img/grab_dark.svg");
/* harmony import */ var img_grab_light_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/img/grab_light.svg");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _RowOptions_RowOptionsButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/dashboard/components/RowOptions/RowOptionsButton.tsx");
















class UnthemedDashboardRow extends react__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor() {
    super(...arguments);
    this.onVariableUpdated = () => {
      this.forceUpdate();
    };
    this.onToggle = () => {
      this.props.dashboard.toggleRow(this.props.panel);
    };
    this.getWarning = () => {
      const panels = !!this.props.panel.panels?.length ? this.props.panel.panels : this.props.dashboard.getRowPanels((0,lodash__WEBPACK_IMPORTED_MODULE_2__.indexOf)(this.props.dashboard.panels, this.props.panel));
      const isAnyPanelUsingDashboardDS = panels.some((p) => p.datasource?.uid === app_plugins_datasource_dashboard_constants__WEBPACK_IMPORTED_MODULE_13__.SHARED_DASHBOARD_QUERY);
      if (isAnyPanelUsingDashboardDS) {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "dashboard.untheme-dashboard-row.dashboard-datasource", children: [
            "Panels in this row use the ",
            { SHARED_DASHBOARD_QUERY: app_plugins_datasource_dashboard_constants__WEBPACK_IMPORTED_MODULE_13__.SHARED_DASHBOARD_QUERY },
            " data source. These panels will reference the panel in the original row, not the ones in the repeated rows."
          ] }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.TextLink,
            {
              external: true,
              href: "https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/create-dashboard/#configure-repeating-rows",
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "dashboard.unthemed-dashboard-row.learn-more", children: "Learn more" })
            }
          )
        ] });
      }
      return void 0;
    };
    this.onUpdate = (title, repeat) => {
      this.props.panel.setProperty("title", title);
      this.props.panel.setProperty("repeat", repeat ?? void 0);
      this.props.panel.render();
      this.props.dashboard.processRepeats();
      this.forceUpdate();
    };
    this.onDelete = () => {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_11__["default"].publish(
        new _types_events__WEBPACK_IMPORTED_MODULE_16__.ShowConfirmModalEvent({
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("dashboard.unthemed-dashboard-row.title.delete-row", "Delete row"),
          text: "Are you sure you want to remove this row and all its panels?",
          altActionText: "Delete row only",
          icon: "trash-alt",
          onConfirm: () => {
            this.props.dashboard.removeRow(this.props.panel, true);
          },
          onAltAction: () => {
            this.props.dashboard.removeRow(this.props.panel, false);
          }
        })
      );
    };
  }
  componentDidMount() {
    this.sub = this.props.dashboard.events.subscribe(_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.RefreshEvent, this.onVariableUpdated);
  }
  componentWillUnmount() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
  render() {
    const title = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.getTemplateSrv)().replace(this.props.panel.title, this.props.panel.scopedVars, "text");
    const count = this.props.panel.panels ? this.props.panel.panels.length : 0;
    const panels = count === 1 ? "panel" : "panels";
    const canEdit = this.props.dashboard.meta.canEdit === true;
    const collapsed = this.props.panel.collapsed;
    const styles = getStyles(this.props.theme);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      "div",
      {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.dashboardRow, {
          [styles.dashboardRowCollapsed]: collapsed
        }),
        "data-testid": "dashboard-row-container",
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "button",
            {
              "aria-expanded": !collapsed,
              className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.title, "pointer"),
              type: "button",
              "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.DashboardRow.title(title),
              onClick: this.onToggle,
              children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { name: collapsed ? "angle-right" : "angle-down" }),
                title,
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  "span",
                  {
                    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.count, {
                      [styles.countCollapsed]: collapsed
                    }),
                    children: [
                      "(",
                      count,
                      " ",
                      panels,
                      ")"
                    ]
                  }
                )
              ]
            }
          ),
          canEdit && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.actions, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _RowOptions_RowOptionsButton__WEBPACK_IMPORTED_MODULE_17__.RowOptionsButton,
              {
                title: this.props.panel.title,
                repeat: this.props.panel.repeat,
                onUpdate: this.onUpdate,
                warning: this.getWarning()
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "button",
              {
                type: "button",
                className: "pointer",
                onClick: () => {
                  app_features_dashboard_scene_utils_interactions__WEBPACK_IMPORTED_MODULE_12__.DashboardInteractions.trackRemoveRowClick();
                  this.onDelete();
                },
                "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("dashboard.unthemed-dashboard-row.aria-label-delete-row", "Delete row"),
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Icon, { name: "trash-alt" })
              }
            )
          ] }),
          collapsed === true && /* disabling the a11y rules here as the button handles keyboard interactions */
          /* this is just to provide a better experience for mouse users */
          /* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "div",
            {
              className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)({
                [styles.toggleTargetCollapsed]: collapsed
              }),
              onClick: this.onToggle,
              children: "\xA0"
            }
          ),
          canEdit && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "div",
            {
              "data-testid": "dashboard-row-drag",
              className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.dragHandle, "grid-drag-handle", {
                [styles.dragHandleCollapsed]: collapsed
              })
            }
          )
        ]
      }
    );
  }
}
const DashboardRow = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.withTheme2)(UnthemedDashboardRow);
const getStyles = (theme) => {
  const dragHandle = theme.name === "dark" ? img_grab_dark_svg__WEBPACK_IMPORTED_MODULE_14__ : img_grab_light_svg__WEBPACK_IMPORTED_MODULE_15__;
  const actions = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.secondary,
    opacity: 0,
    [theme.transitions.handleMotion("no-preference", "reduce")]: {
      transition: "200ms opacity ease-in 200ms"
    },
    button: {
      color: theme.colors.text.secondary,
      paddingLeft: theme.spacing(2),
      background: "transparent",
      border: "none",
      "&:hover": {
        color: theme.colors.text.maxContrast
      }
    }
  });
  return {
    dashboardRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      alignItems: "center",
      height: "100%",
      "&:hover, &:focus-within": {
        [`.${actions}`]: {
          opacity: 1
        }
      }
    }),
    dashboardRowCollapsed: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      background: theme.components.panel.background
    }),
    toggleTargetCollapsed: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flex: 1,
      cursor: "pointer",
      marginRight: "15px"
    }),
    title: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flexGrow: 0,
      fontSize: theme.typography.h5.fontSize,
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.colors.text.primary,
      background: "transparent",
      border: "none",
      ".fa": {
        color: theme.colors.text.secondary,
        fontSize: theme.typography.size.xs,
        padding: theme.spacing(0, 1)
      }
    }),
    actions,
    count: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      paddingLeft: theme.spacing(2),
      color: theme.colors.text.secondary,
      fontStyle: "italic",
      fontSize: theme.typography.size.sm,
      fontWeight: "normal",
      display: "none"
    }),
    countCollapsed: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "inline-block"
    }),
    dragHandle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      cursor: "move",
      width: "16px",
      height: "100%",
      background: `url("${dragHandle}") no-repeat 50% 50%`,
      backgroundSize: "8px",
      visibility: "hidden",
      position: "absolute",
      top: 0,
      right: 0
    }),
    dragHandleCollapsed: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      visibility: "visible",
      opacity: 1
    })
  };
};


/***/ }),

/***/ "./public/app/features/dashboard/components/DashboardSettings/AnnotationsSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnotationsSettings: () => (/* binding */ AnnotationsSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/services/dataSourceSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _AnnotationSettings_AnnotationSettingsEdit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/components/AnnotationSettings/AnnotationSettingsEdit.tsx");
/* harmony import */ var _AnnotationSettings_AnnotationSettingsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/dashboard/components/AnnotationSettings/AnnotationSettingsList.tsx");







function AnnotationsSettings({ dashboard, editIndex, sectionNav }) {
  const onNew = () => {
    const newAnnotation = {
      name: _AnnotationSettings_AnnotationSettingsEdit__WEBPACK_IMPORTED_MODULE_5__.newAnnotationName,
      enable: true,
      datasource: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getDataSourceRef)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getDataSourceSrv)().getInstanceSettings(null)),
      iconColor: "red"
    };
    dashboard.annotations.list = [...dashboard.annotations.list, { ...newAnnotation }];
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.partial({ editIndex: dashboard.annotations.list.length - 1 });
  };
  const onEdit = (idx) => {
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.partial({ editIndex: idx });
  };
  const isEditing = editIndex != null && editIndex < dashboard.annotations.list.length;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__.Page, { navModel: sectionNav, pageNav: getSubPageNav(dashboard, editIndex, sectionNav.node), children: [
    !isEditing && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AnnotationSettings_AnnotationSettingsList__WEBPACK_IMPORTED_MODULE_6__.AnnotationSettingsList, { dashboard, onNew, onEdit }),
    isEditing && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AnnotationSettings_AnnotationSettingsEdit__WEBPACK_IMPORTED_MODULE_5__.AnnotationSettingsEdit, { dashboard, editIdx: editIndex })
  ] });
}
function getSubPageNav(dashboard, editIndex, node) {
  const parentItem = node.parentItem;
  if (editIndex == null) {
    return parentItem;
  }
  const editItem = dashboard.annotations.list[editIndex];
  if (editItem) {
    return {
      text: editItem.name,
      parentItem
    };
  }
  return void 0;
}


/***/ }),

/***/ "./public/app/features/dashboard/components/DashboardSettings/DashboardSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardSettings: () => (/* binding */ DashboardSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/utils/location.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/ToolbarButton/ToolbarButtonRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_core_components_AppChrome_AppChromeUpdate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/components/AppChrome/AppChromeUpdate.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var app_types_events__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _variables_editor_VariableEditorContainer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/variables/editor/VariableEditorContainer.tsx");
/* harmony import */ var _DashboardPermissions_AccessControlDashboardPermissions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/dashboard/components/DashboardPermissions/AccessControlDashboardPermissions.tsx");
/* harmony import */ var _SaveDashboard_SaveDashboardButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/dashboard/components/SaveDashboard/SaveDashboardButton.tsx");
/* harmony import */ var _AnnotationsSettings__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/dashboard/components/DashboardSettings/AnnotationsSettings.tsx");
/* harmony import */ var _GeneralSettings__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/dashboard/components/DashboardSettings/GeneralSettings.tsx");
/* harmony import */ var _JsonEditorSettings__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/dashboard/components/DashboardSettings/JsonEditorSettings.tsx");
/* harmony import */ var _LinksSettings__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/dashboard/components/DashboardSettings/LinksSettings.tsx");
/* harmony import */ var _VersionsSettings__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/dashboard/components/DashboardSettings/VersionsSettings.tsx");






















const onClose = () => _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.locationService.partial({ editview: null, editIndex: null });
function DashboardSettings({ dashboard, editview, pageNav, sectionNav }) {
  const [updateId, setUpdateId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dashboard.events.subscribe(app_types_events__WEBPACK_IMPORTED_MODULE_15__.DashboardMetaChangedEvent, () => setUpdateId((v) => v + 1));
  }, [dashboard]);
  const pages = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => getSettingsPages(dashboard), [dashboard, updateId]);
  const onPostSave = () => {
    dashboard.meta.hasUnsavedFolderChange = false;
  };
  const currentPage = pages.find((page) => page.id === editview) ?? pages[0];
  const canSaveAs = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_13__.contextSrv.hasEditPermissionInFolders;
  const canSave = dashboard.meta.canSave;
  const location = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  const editIndex = getEditIndex(location);
  const subSectionNav = getSectionNav(pageNav, sectionNav, pages, currentPage, location, dashboard.uid);
  const size = "sm";
  const actions = [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
      {
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.pages.Dashboard.Settings.Actions.close,
        variant: "secondary",
        fill: "outline",
        size,
        onClick: onClose,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "dashboard.dashboard-settings.actions.close", children: "Close" })
      },
      "close"
    ),
    canSaveAs && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _SaveDashboard_SaveDashboardButton__WEBPACK_IMPORTED_MODULE_18__.SaveDashboardAsButton,
      {
        dashboard,
        onSaveSuccess: onPostSave,
        variant: "secondary",
        size
      },
      "save as"
    ),
    canSave && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SaveDashboard_SaveDashboardButton__WEBPACK_IMPORTED_MODULE_18__.SaveDashboardButton, { dashboard, onSaveSuccess: onPostSave, size }, "Save")
  ];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_AppChrome_AppChromeUpdate__WEBPACK_IMPORTED_MODULE_11__.AppChromeUpdate, { actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.ToolbarButtonRow, { alignment: "right", children: actions }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(currentPage.component, { sectionNav: subSectionNav, dashboard, editIndex })
  ] });
}
function getSettingsPages(dashboard) {
  const pages = [];
  const generalTitle = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("dashboard-settings.general.title", "General");
  if (dashboard.meta.canEdit) {
    pages.push({
      title: generalTitle,
      id: "settings",
      icon: "sliders-v-alt",
      component: _GeneralSettings__WEBPACK_IMPORTED_MODULE_20__.GeneralSettings
    });
    pages.push({
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("dashboard-settings.annotations.title", "Annotations"),
      id: "annotations",
      icon: "comment-alt",
      component: _AnnotationsSettings__WEBPACK_IMPORTED_MODULE_19__.AnnotationsSettings,
      subTitle: "Annotation queries return events that can be visualized as event markers in graphs across the dashboard."
    });
    pages.push({
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("dashboard-settings.variables.title", "Variables"),
      id: "templating",
      icon: "calculator-alt",
      component: _variables_editor_VariableEditorContainer__WEBPACK_IMPORTED_MODULE_16__.VariableEditorContainer,
      subTitle: "Variables can make your dashboard more dynamic and act as global filters."
    });
    pages.push({
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("dashboard-settings.links.title", "Links"),
      id: "links",
      icon: "link",
      component: _LinksSettings__WEBPACK_IMPORTED_MODULE_22__.LinksSettings
    });
  }
  if (dashboard.meta.canMakeEditable) {
    pages.push({
      title: generalTitle,
      icon: "sliders-v-alt",
      id: "settings",
      component: MakeEditable
    });
  }
  if (dashboard.uid && dashboard.meta.canSave) {
    pages.push({
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("dashboard-settings.versions.title", "Versions"),
      id: "versions",
      icon: "history",
      component: _VersionsSettings__WEBPACK_IMPORTED_MODULE_23__.VersionsSettings
    });
  }
  const permissionsTitle = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("dashboard-settings.permissions.title", "Permissions");
  if (dashboard.uid && dashboard.meta.canAdmin) {
    if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_13__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_14__.AccessControlAction.DashboardsPermissionsRead)) {
      pages.push({
        title: permissionsTitle,
        id: "permissions",
        icon: "lock",
        component: _DashboardPermissions_AccessControlDashboardPermissions__WEBPACK_IMPORTED_MODULE_17__.AccessControlDashboardPermissions
      });
    }
  }
  pages.push({
    title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("dashboard-settings.json-editor.title", "JSON Model"),
    id: "dashboard_json",
    icon: "arrow",
    component: _JsonEditorSettings__WEBPACK_IMPORTED_MODULE_21__.JsonEditorSettings
  });
  return pages;
}
function applySectionAsParent(node, parent) {
  return {
    ...node,
    parentItem: node.parentItem ? applySectionAsParent(node.parentItem, parent) : parent
  };
}
function getSectionNav(pageNav, sectionNav, pages, currentPage, location, dashboardUid) {
  const main = {
    text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("dashboard-settings.settings.title", "Settings"),
    children: [],
    icon: "apps",
    hideFromBreadcrumbs: false,
    url: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.locationUtil.getUrlForPartial(location, { editview: "settings", editIndex: null })
  };
  main.children = pages.map((page) => ({
    text: page.title,
    icon: page.icon,
    id: `${dashboardUid}/${page.id}`,
    url: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.locationUtil.getUrlForPartial(location, { editview: page.id, editIndex: null }),
    active: page === currentPage,
    parentItem: main,
    subTitle: page.subTitle
  }));
  const pageNavWithSectionParent = applySectionAsParent(pageNav, sectionNav.main);
  main.parentItem = pageNavWithSectionParent;
  return {
    main,
    node: main.children.find((x) => x.active)
  };
}
function MakeEditable({ dashboard, sectionNav }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__.Page, { navModel: sectionNav, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "column", gap: 2, alignItems: "flex-start", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Text, { variant: "h3", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "dashboard.make-editable.dashboard-not-editable", children: "Dashboard not editable" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { type: "submit", onClick: () => dashboard.makeEditable(), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "dashboard.make-editable.make-editable", children: "Make editable" }) })
  ] }) });
}
function getEditIndex(location) {
  const editIndex = new URLSearchParams(location.search).get("editIndex");
  if (editIndex != null) {
    return parseInt(editIndex, 10);
  }
  return void 0;
}


/***/ }),

/***/ "./public/app/features/dashboard/components/DashboardSettings/GeneralSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralSettings: () => (/* binding */ GeneralSettings),
/* harmony export */   GeneralSettingsUnconnected: () => (/* binding */ GeneralSettingsUnconnected)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/TagsInput/TagsInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Collapse/CollapsableSection.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/TextArea/TextArea.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_Select_FolderPicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/core/components/Select/FolderPicker.tsx");
/* harmony import */ var app_features_dashboard_state_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/dashboard/state/actions.ts");
/* harmony import */ var _DeleteDashboard_DeleteDashboardButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/dashboard/components/DeleteDashboard/DeleteDashboardButton.tsx");
/* harmony import */ var _GenAI_GenAIDashDescriptionButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/dashboard/components/GenAI/GenAIDashDescriptionButton.tsx");
/* harmony import */ var _GenAI_GenAIDashTitleButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/dashboard/components/GenAI/GenAIDashTitleButton.tsx");
/* harmony import */ var _TimePickerSettings__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/dashboard/components/DashboardSettings/TimePickerSettings.tsx");














function GeneralSettingsUnconnected({
  dashboard,
  updateTimeZone,
  updateWeekStart,
  sectionNav
}) {
  const [renderCounter, setRenderCounter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [dashboardTitle, setDashboardTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(dashboard.title);
  const [dashboardDescription, setDashboardDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(dashboard.description);
  const GRAPH_TOOLTIP_OPTIONS = [
    { value: 0, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard.general-settings-unconnected.graph_tooltip_options.label.default", "Default") },
    {
      value: 1,
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
        "dashboard.general-settings-unconnected.graph_tooltip_options.label.shared-crosshair",
        "Shared crosshair"
      )
    },
    {
      value: 2,
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard.general-settings-unconnected.graph_tooltip_options.label.shared-tooltip", "Shared tooltip")
    }
  ];
  const pageNav = sectionNav.node.parentItem;
  const onFolderChange = (newUID, newTitle) => {
    dashboard.meta.folderUid = newUID;
    dashboard.meta.folderTitle = newTitle;
    dashboard.meta.hasUnsavedFolderChange = true;
    setRenderCounter(renderCounter + 1);
  };
  const onTitleChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (title) => {
      dashboard.title = title;
      setDashboardTitle(title);
    },
    [setDashboardTitle, dashboard]
  );
  const onDescriptionChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (description) => {
      dashboard.description = description;
      setDashboardDescription(description);
    },
    [setDashboardDescription, dashboard]
  );
  const onTooltipChange = (graphTooltip) => {
    dashboard.graphTooltip = graphTooltip;
    setRenderCounter(renderCounter + 1);
  };
  const onRefreshIntervalChange = (intervals) => {
    dashboard.timepicker.refresh_intervals = intervals.filter((i) => i.trim() !== "");
  };
  const onNowDelayChange = (nowDelay) => {
    dashboard.timepicker.nowDelay = nowDelay;
  };
  const onHideTimePickerChange = (hide) => {
    dashboard.timepicker.hidden = hide;
    setRenderCounter(renderCounter + 1);
  };
  const onLiveNowChange = (v) => {
    dashboard.liveNow = v;
    setRenderCounter(renderCounter + 1);
  };
  const onTimeZoneChange = (timeZone) => {
    dashboard.timezone = timeZone;
    setRenderCounter(renderCounter + 1);
    updateTimeZone(timeZone);
  };
  const onWeekStartChange = (weekStart) => {
    dashboard.weekStart = weekStart;
    setRenderCounter(renderCounter + 1);
    updateWeekStart(weekStart);
  };
  const onTagsChange = (tags) => {
    dashboard.tags = tags;
    setRenderCounter(renderCounter + 1);
  };
  const onEditableChange = (value) => {
    dashboard.editable = value;
    setRenderCounter(renderCounter + 1);
  };
  const editableOptions = [
    { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard.general-settings-unconnected.editable-options.label.editable", "Editable"), value: true },
    { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard.general-settings-unconnected.editable-options.label.readonly", "Read-only"), value: false }
  ];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_14__.Page, { navModel: sectionNav, pageNav, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { maxWidth: "600px" }, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Box, { marginBottom: 5, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field,
        {
          label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { justifyContent: "space-between", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Label, { htmlFor: "title-input", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "dashboard-settings.general.title-label", children: "Title" }) }),
            _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.featureToggles.dashgpt && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GenAI_GenAIDashTitleButton__WEBPACK_IMPORTED_MODULE_19__.GenAIDashTitleButton, { onGenerate: onTitleChange })
          ] }),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Input,
            {
              id: "title-input",
              name: "title",
              value: dashboardTitle,
              onChange: (e) => onTitleChange(e.target.value)
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field,
        {
          label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { justifyContent: "space-between", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Label, { htmlFor: "description-input", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard-settings.general.description-label", "Description") }),
            _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.featureToggles.dashgpt && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GenAI_GenAIDashDescriptionButton__WEBPACK_IMPORTED_MODULE_18__.GenAIDashDescriptionButton, { onGenerate: onDescriptionChange })
          ] }),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.TextArea,
            {
              id: "description-input",
              name: "description",
              value: dashboardDescription,
              onChange: (e) => onDescriptionChange(e.target.value)
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard-settings.general.tags-label", "Tags"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TagsInput, { id: "tags-input", tags: dashboard.tags, onChange: onTagsChange, width: 40 }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard-settings.general.folder-label", "Folder"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Select_FolderPicker__WEBPACK_IMPORTED_MODULE_15__.FolderPicker, { value: dashboard.meta.folderUid, onChange: onFolderChange }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard-settings.general.editable-label", "Editable"),
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
            "dashboard-settings.general.editable-description",
            "Set to read-only to disable all editing. Reload the dashboard for changes to take effect"
          ),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.RadioButtonGroup, { value: dashboard.editable, options: editableOptions, onChange: onEditableChange })
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _TimePickerSettings__WEBPACK_IMPORTED_MODULE_20__.TimePickerSettings,
      {
        onTimeZoneChange,
        onWeekStartChange,
        onRefreshIntervalChange,
        onNowDelayChange,
        onHideTimePickerChange,
        onLiveNowChange,
        refreshIntervals: dashboard.timepicker.refresh_intervals,
        timePickerHidden: dashboard.timepicker.hidden,
        nowDelay: dashboard.timepicker.nowDelay,
        timezone: dashboard.timezone,
        weekStart: dashboard.weekStart,
        liveNow: dashboard.liveNow
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.CollapsableSection, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard-settings.general.panel-options-label", "Panel options"), isOpen: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard-settings.general.panel-options-graph-tooltip-label", "Graph tooltip"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "dashboard-settings.general.panel-options-graph-tooltip-description",
          "Controls tooltip and hover highlight behavior across different panels. Reload the dashboard for changes to take effect"
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.RadioButtonGroup,
          {
            onChange: onTooltipChange,
            options: GRAPH_TOOLTIP_OPTIONS,
            value: dashboard.graphTooltip
          }
        )
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Box, { marginTop: 3, children: dashboard.meta.canDelete && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DeleteDashboard_DeleteDashboardButton__WEBPACK_IMPORTED_MODULE_17__.DeleteDashboardButton, {}) })
  ] }) });
}
const mapDispatchToProps = {
  updateTimeZone: app_features_dashboard_state_actions__WEBPACK_IMPORTED_MODULE_16__.updateTimeZoneDashboard,
  updateWeekStart: app_features_dashboard_state_actions__WEBPACK_IMPORTED_MODULE_16__.updateWeekStartDashboard
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(null, mapDispatchToProps);
const GeneralSettings = connector(GeneralSettingsUnconnected);


/***/ }),

/***/ "./public/app/features/dashboard/components/DashboardSettings/JsonEditorSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsonEditorSettings: () => (/* binding */ JsonEditorSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/live/dashboard/dashboardWatcher.ts");
/* harmony import */ var _services_DashboardSrv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");









function JsonEditorSettings({ dashboard, sectionNav }) {
  const dashboardSaveModel = dashboard.getSaveModelClone();
  const [dashboardJson, setDashboardJson] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(JSON.stringify(dashboardSaveModel, null, 2));
  const pageNav = sectionNav.node.parentItem;
  const onClick = async () => {
    await (0,_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_9__.getDashboardSrv)().saveJSONDashboard(dashboardJson);
    app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_8__.dashboardWatcher.reloadPage();
  };
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__.Page, { navModel: sectionNav, pageNav, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.wrapper, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "dashboard-settings.json-editor.subtitle", children: "The JSON model below is the data structure that defines the dashboard. This includes dashboard settings, panel settings, layout, queries, and so on." }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.CodeEditor,
      {
        value: dashboardJson,
        language: "json",
        showMiniMap: true,
        showLineNumbers: true,
        onBlur: setDashboardJson,
        containerStyles: styles.codeEditor
      }
    ),
    dashboard.meta.canSave && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { type: "submit", onClick, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "dashboard-settings.json-editor.save-button", children: "Save changes" }) }) })
  ] }) });
}
const getStyles = (theme) => ({
  wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    height: "100%",
    flexDirection: "column",
    gap: theme.spacing(2)
  }),
  codeEditor: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    flexGrow: 1
  })
});


/***/ }),

/***/ "./public/app/features/dashboard/components/DashboardSettings/LinksSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinksSettings: () => (/* binding */ LinksSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_features_dashboard_scene_settings_links_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard-scene/settings/links/utils.ts");
/* harmony import */ var _LinksSettings_LinkSettingsEdit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/components/LinksSettings/LinkSettingsEdit.tsx");
/* harmony import */ var _LinksSettings_LinkSettingsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/dashboard/components/LinksSettings/LinkSettingsList.tsx");








function LinksSettings({ dashboard, sectionNav, editIndex }) {
  const [isNew, setIsNew] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const onGoBack = () => {
    setIsNew(false);
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.partial({ editIndex: void 0 });
  };
  const onNew = () => {
    dashboard.links = [...dashboard.links, { ...app_features_dashboard_scene_settings_links_utils__WEBPACK_IMPORTED_MODULE_4__.NEW_LINK }];
    setIsNew(true);
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.partial({ editIndex: dashboard.links.length - 1 });
  };
  const onEdit = (idx) => {
    setIsNew(false);
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.partial({ editIndex: idx });
  };
  const isEditing = editIndex !== void 0;
  let pageNav = sectionNav.node.parentItem;
  if (isEditing) {
    const title = isNew ? "New link" : "Edit link";
    const description = isNew ? "Create a new link on your dashboard" : "Edit a specific link of your dashboard";
    pageNav = {
      text: title,
      subTitle: description,
      parentItem: sectionNav.node.parentItem
    };
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__.Page, { navModel: sectionNav, pageNav, children: [
    !isEditing && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LinksSettings_LinkSettingsList__WEBPACK_IMPORTED_MODULE_6__.LinkSettingsList, { dashboard, onNew, onEdit }),
    isEditing && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LinksSettings_LinkSettingsEdit__WEBPACK_IMPORTED_MODULE_5__.LinkSettingsEdit, { dashboard, editLinkIdx: editIndex, onGoBack })
  ] });
}


/***/ }),

/***/ "./public/app/features/dashboard/components/DashboardSettings/VersionsSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSIONS_FETCH_LIMIT: () => (/* binding */ VERSIONS_FETCH_LIMIT),
/* harmony export */   VersionsHistorySpinner: () => (/* binding */ VersionsHistorySpinner),
/* harmony export */   VersionsSettings: () => (/* binding */ VersionsSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_features_dashboard_scene_settings_version_history_HistorySrv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard-scene/settings/version-history/HistorySrv.ts");
/* harmony import */ var app_features_dashboard_scene_settings_version_history_VersionHistoryButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/dashboard-scene/settings/version-history/VersionHistoryButtons.tsx");
/* harmony import */ var app_features_dashboard_scene_settings_version_history_VersionHistoryHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard-scene/settings/version-history/VersionHistoryHeader.tsx");
/* harmony import */ var _VersionHistory_VersionHistoryComparison__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/components/VersionHistory/VersionHistoryComparison.tsx");
/* harmony import */ var _VersionHistory_VersionHistoryTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/components/VersionHistory/VersionHistoryTable.tsx");










const VERSIONS_FETCH_LIMIT = 10;
class VersionsSettings extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);
    this.getVersions = (append = false) => {
      this.setState({ isAppending: append });
      const requestOptions = this.continueToken ? { limit: this.limit, start: this.start, continueToken: this.continueToken } : { limit: this.limit, start: this.start };
      app_features_dashboard_scene_settings_version_history_HistorySrv__WEBPACK_IMPORTED_MODULE_5__.historySrv.getHistoryList(this.props.dashboard.uid, requestOptions).then((res) => {
        this.setState({
          isLoading: false,
          versions: [...this.state.versions ?? [], ...this.decorateVersions(res.versions)]
        });
        this.start += this.limit;
        this.continueToken = res.continueToken ?? "";
      }).catch((err) => console.log(err)).finally(() => this.setState({ isAppending: false }));
    };
    this.getDiff = async () => {
      const selectedVersions = this.state.versions.filter((version) => version.checked);
      const [newInfo, baseInfo] = selectedVersions;
      const isNewLatest = newInfo.version === this.props.dashboard.version;
      this.setState({
        isLoading: true
      });
      let lhs = await app_features_dashboard_scene_settings_version_history_HistorySrv__WEBPACK_IMPORTED_MODULE_5__.historySrv.getDashboardVersion(this.props.dashboard.uid, baseInfo.id);
      let rhs = await app_features_dashboard_scene_settings_version_history_HistorySrv__WEBPACK_IMPORTED_MODULE_5__.historySrv.getDashboardVersion(this.props.dashboard.uid, newInfo.id);
      this.setState({
        baseInfo,
        isLoading: false,
        isNewLatest,
        newInfo,
        viewMode: "compare",
        diffData: {
          lhs: lhs.data,
          rhs: rhs.data
        }
      });
    };
    this.decorateVersions = (versions) => versions.map((version) => ({
      ...version,
      createdDateString: this.props.dashboard.formatDate(version.created),
      ageString: this.props.dashboard.getRelativeTime(version.created),
      checked: false
    }));
    this.onCheck = (ev, versionId) => {
      this.setState({
        versions: this.state.versions.map(
          (version) => version.id === versionId ? { ...version, checked: ev.currentTarget.checked } : version
        )
      });
    };
    this.reset = () => {
      this.continueToken = "";
      this.setState({
        baseInfo: void 0,
        diffData: {
          lhs: "",
          rhs: ""
        },
        isNewLatest: false,
        newInfo: void 0,
        versions: this.state.versions.map((version) => ({ ...version, checked: false })),
        viewMode: "list"
      });
    };
    this.limit = VERSIONS_FETCH_LIMIT;
    this.start = 0;
    this.continueToken = "";
    this.state = {
      isAppending: true,
      isLoading: true,
      versions: [],
      viewMode: "list",
      isNewLatest: false,
      diffData: {
        lhs: "",
        rhs: ""
      }
    };
  }
  componentDidMount() {
    this.getVersions();
  }
  isLastPage() {
    return this.state.versions.find((rev) => rev.version === 1) || this.state.versions.length % this.limit !== 0 || this.continueToken === "";
  }
  render() {
    const { versions, viewMode, baseInfo, newInfo, isNewLatest, isLoading, diffData } = this.state;
    const canCompare = versions.filter((version) => version.checked).length === 2;
    const showButtons = versions.length > 1;
    const hasMore = versions.length >= this.limit;
    const pageNav = this.props.sectionNav.node.parentItem;
    if (viewMode === "compare") {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__.Page, { navModel: this.props.sectionNav, pageNav, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          app_features_dashboard_scene_settings_version_history_VersionHistoryHeader__WEBPACK_IMPORTED_MODULE_7__.VersionHistoryHeader,
          {
            onClick: this.reset,
            baseVersion: baseInfo?.version,
            newVersion: newInfo?.version,
            isNewLatest
          }
        ),
        isLoading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(VersionsHistorySpinner, { msg: "Fetching changes\u2026" }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _VersionHistory_VersionHistoryComparison__WEBPACK_IMPORTED_MODULE_8__.VersionHistoryComparison,
          {
            newInfo,
            baseInfo,
            isNewLatest,
            diffData
          }
        )
      ] });
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__.Page, { navModel: this.props.sectionNav, pageNav, children: [
      isLoading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(VersionsHistorySpinner, { msg: "Fetching history list\u2026" }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VersionHistory_VersionHistoryTable__WEBPACK_IMPORTED_MODULE_9__.VersionHistoryTable, { versions, onCheck: this.onCheck, canCompare }),
      this.state.isAppending && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(VersionsHistorySpinner, { msg: "Fetching more entries\u2026" }),
      showButtons && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        app_features_dashboard_scene_settings_version_history_VersionHistoryButtons__WEBPACK_IMPORTED_MODULE_6__.VersionsHistoryButtons,
        {
          hasMore,
          canCompare,
          getVersions: this.getVersions,
          getDiff: this.getDiff,
          isLastPage: !!this.isLastPage()
        }
      )
    ] });
  }
}
const VersionsHistorySpinner = ({ msg }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { children: [
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Spinner, {}),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("em", { children: msg })
] });


/***/ }),

/***/ "./public/app/features/dashboard/components/DeleteDashboard/DeleteDashboardButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteDashboardButton: () => (/* binding */ DeleteDashboardButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/ModalsContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _services_DashboardSrv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var _DeleteDashboardModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/dashboard/components/DeleteDashboard/DeleteDashboardModal.tsx");







const DeleteDashboardButton = () => {
  const dashboard = (0,_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_5__.getDashboardSrv)().getCurrent();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ModalsController, { children: ({ showModal, hideModal }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button,
    {
      variant: "destructive",
      onClick: () => {
        showModal(_DeleteDashboardModal__WEBPACK_IMPORTED_MODULE_6__.DeleteDashboardModal, {
          dashboard,
          hideModal
        });
      },
      "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.pages.Dashboard.Settings.General.deleteDashBoard,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "dashboard-settings.dashboard-delete-button", children: "Delete dashboard" })
    }
  ) });
};


/***/ }),

/***/ "./public/app/features/dashboard/components/DeleteDashboard/DeleteDashboardModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteDashboardModal: () => (/* binding */ DeleteDashboardModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_use_lib_useAsyncFn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/lib/useAsyncFn.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Space.tsx");
/* harmony import */ var app_features_dashboard_state_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/dashboard/state/actions.ts");
/* harmony import */ var _browse_dashboards_api_browseDashboardsAPI__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/browse-dashboards/api/browseDashboardsAPI.ts");
/* harmony import */ var _dashboard_scene_settings_DeleteDashboardButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/dashboard-scene/settings/DeleteDashboardButton.tsx");











const mapDispatchToProps = {
  cleanUpDashboardAndVariables: app_features_dashboard_state_actions__WEBPACK_IMPORTED_MODULE_13__.cleanUpDashboardAndVariables
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(null, mapDispatchToProps);
const DeleteDashboardModalUnconnected = ({ hideModal, cleanUpDashboardAndVariables: cleanUpDashboardAndVariables2, dashboard }) => {
  const isProvisioned = dashboard.meta.provisioned;
  const [deleteDashboards] = (0,_browse_dashboards_api_browseDashboardsAPI__WEBPACK_IMPORTED_MODULE_14__.useDeleteDashboardsMutation)();
  const [, onConfirm] = (0,react_use_lib_useAsyncFn__WEBPACK_IMPORTED_MODULE_3__["default"])(async () => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.reportInteraction)("grafana_manage_dashboards_delete_clicked", {
      item_counts: {
        dashboard: 1
      },
      source: "dashboard_settings",
      restore_enabled: Boolean(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.featureToggles.restoreDashboards)
    });
    await deleteDashboards({ dashboardUIDs: [dashboard.uid] });
    cleanUpDashboardAndVariables2();
    hideModal();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.locationService.replace("/");
  }, [hideModal]);
  if (isProvisioned) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProvisionedDeleteModal, { hideModal, provisionedId: dashboard.meta.provisionedExternalId });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dashboard_scene_settings_DeleteDashboardButton__WEBPACK_IMPORTED_MODULE_15__.DeleteDashboardModal, { onConfirm, onClose: hideModal, dashboardTitle: dashboard.title });
};
const ProvisionedDeleteModal = ({ hideModal, provisionedId }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Modal,
    {
      isOpen: true,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("dashboard-settings.provisioned-delete-modal.title", "Cannot delete provisioned dashboard"),
      icon: "trash-alt",
      onDismiss: hideModal,
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        width: "500px"
      }),
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Text, { element: "p", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "dashboard-settings.provisioned-delete-modal.text-1", children: "This dashboard is managed by Grafana provisioning and cannot be deleted. Remove the dashboard from the config file to delete it." }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Space, { v: 1 }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Text, { element: "p", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "dashboard-settings.provisioned-delete-modal.text-2", children: "See grafana documentation for more information about provisioning.\xA0" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.TextLink, { href: "https://grafana.com/docs/grafana/latest/administration/provisioning/#dashboards", external: true, children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("dashboard-settings.provisioned-delete-modal.text-link", "Go to docs page") })
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Space, { v: 2 }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Text, { element: "p", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "dashboard-settings.provisioned-delete-modal.text-3", children: [
          "File path: ",
          { provisionedId }
        ] }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Modal.ButtonRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button, { variant: "primary", onClick: hideModal, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "dashboard-settings.provisioned-delete-modal.confirm-button", children: "OK" }) }) })
      ]
    }
  );
};
const DeleteDashboardModal = connector(DeleteDashboardModalUnconnected);


/***/ }),

/***/ "./public/app/features/dashboard/components/HelpWizard/HelpWizard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelpWizard: () => (/* binding */ HelpWizard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/ClipboardButton/ClipboardButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabsBar.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/Tab.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Drawer/Drawer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _SupportSnapshotService__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/dashboard/components/HelpWizard/SupportSnapshotService.ts");











function HelpWizard({ panel, plugin, onClose }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_19__.useStyles2)(getStyles);
  const service = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => new _SupportSnapshotService__WEBPACK_IMPORTED_MODULE_22__.SupportSnapshotService(panel), [panel]);
  const {
    currentTab,
    loading,
    error,
    options,
    showMessage,
    snapshotSize,
    markdownText,
    snapshotText,
    randomize,
    panelTitle,
    scene
  } = service.useState();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    service.buildDebugDashboard();
  }, [service, plugin, randomize]);
  if (!plugin) {
    return null;
  }
  const tabs = [
    { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("dashboard.help-wizard.tabs.label.snapshot", "Snapshot"), value: _SupportSnapshotService__WEBPACK_IMPORTED_MODULE_22__.SnapshotTab.Support },
    { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("dashboard.help-wizard.tabs.label.data", "Data"), value: _SupportSnapshotService__WEBPACK_IMPORTED_MODULE_22__.SnapshotTab.Data }
  ];
  const hasSupportBundleAccess = _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.supportBundlesEnabled && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_20__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_21__.AccessControlAction.ActionSupportBundlesCreate);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Drawer,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("dashboard.help-wizard.title-get-help-with-this-panel", "Get help with this panel"),
      size: "lg",
      onClose,
      subtitle: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { direction: "column", gap: 1, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { direction: "row", gap: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.TextLink, { href: "https://grafana.com/docs/grafana/latest/troubleshooting/", external: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "dashboard.help-wizard.troubleshooting-docs", children: "Troubleshooting docs" }) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "muted", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "help-wizard.troubleshooting-help", children: "To request troubleshooting help, send a snapshot of this panel to Grafana Labs Technical Support. The snapshot contains query response data and panel settings." }) }),
        hasSupportBundleAccess && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "muted", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "help-wizard.support-bundle", children: [
          "You can also retrieve a support bundle containing information concerning your Grafana instance and configured datasources in the ",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.TextLink, { href: "/support-bundles", children: "support bundles section" }),
          "."
        ] }) })
      ] }),
      tabs: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.TabsBar, { children: tabs.map((t2, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Tab,
        {
          label: t2.label,
          active: t2.value === currentTab,
          onChangeTab: () => service.onCurrentTabChange(t2.value)
        },
        `${t2.value}-${index}`
      )) }),
      children: [
        loading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Spinner, {}),
        error && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Alert, { title: error.title, children: error.message }),
        currentTab === _SupportSnapshotService__WEBPACK_IMPORTED_MODULE_22__.SnapshotTab.Data && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.code, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.opts, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("dashboard.help-wizard.label-template", "Template"), className: styles.field, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Select, { options, value: showMessage, onChange: service.onShowMessageChange }) }),
            showMessage === _SupportSnapshotService__WEBPACK_IMPORTED_MODULE_22__.ShowMessage.GithubComment ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ClipboardButton, { icon: "copy", getText: service.onGetMarkdownForClipboard, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "dashboard.help-wizard.copy-to-clipboard", children: "Copy to clipboard" }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Button, { icon: "download-alt", onClick: service.onDownloadDashboard, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "dashboard.help-wizard.download-snapshot", children: [
              "Download (",
              { snapshotSize },
              ")"
            ] }) })
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__["default"], { disableWidth: true, children: ({ height }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.CodeEditor,
            {
              width: "100%",
              height,
              language: showMessage === _SupportSnapshotService__WEBPACK_IMPORTED_MODULE_22__.ShowMessage.GithubComment ? "markdown" : "json",
              showLineNumbers: true,
              showMiniMap: true,
              value: showMessage === _SupportSnapshotService__WEBPACK_IMPORTED_MODULE_22__.ShowMessage.GithubComment ? markdownText : snapshotText,
              readOnly: false,
              onBlur: service.onSetSnapshotText
            }
          ) })
        ] }),
        currentTab === _SupportSnapshotService__WEBPACK_IMPORTED_MODULE_22__.SnapshotTab.Support && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Field,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("dashboard.help-wizard.label-obfuscate-data", "Obfuscate data"),
              description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                "dashboard.help-wizard.description-obfuscate-data",
                "Modify the original data to hide sensitve information.  Note the lengths will stay the same, and duplicate values will be equal."
              ),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { direction: "row", gap: 1, children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_18__.InlineSwitch,
                  {
                    label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("dashboard.help-wizard.randomize-labels-label-labels", "Labels"),
                    id: "randomize-labels",
                    showLabel: true,
                    value: Boolean(randomize.labels),
                    onChange: () => service.onToggleRandomize("labels")
                  }
                ),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_18__.InlineSwitch,
                  {
                    label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("dashboard.help-wizard.randomize-field-names-label-field-names", "Field names"),
                    id: "randomize-field-names",
                    showLabel: true,
                    value: Boolean(randomize.names),
                    onChange: () => service.onToggleRandomize("names")
                  }
                ),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_18__.InlineSwitch,
                  {
                    label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("dashboard.help-wizard.randomize-string-values-label-string-values", "String values"),
                    id: "randomize-string-values",
                    showLabel: true,
                    value: Boolean(randomize.values),
                    onChange: () => service.onToggleRandomize("values")
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Field,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("dashboard.help-wizard.label-support-snapshot", "Support snapshot"),
              description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("dashboard.help-wizard.description-support-snapshot", "Panel: {{panelTitle}}", {
                panelTitle
              }),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Button, { icon: "download-alt", onClick: service.onDownloadDashboard, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "help-wizard.download-snapshot", children: [
                  "Download snapshot (",
                  { snapshotSize },
                  ")"
                ] }) }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ClipboardButton,
                  {
                    icon: "github",
                    getText: service.onGetMarkdownForClipboard,
                    title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                      "dashboard.help-wizard.title-complete-git-hub-comment-clipboard",
                      "Copy a complete GitHub comment to the clipboard"
                    ),
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "help-wizard.github-comment", children: "Copy Github comment" })
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__["default"], { disableWidth: true, children: ({ height }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { height, overflow: "auto" }, children: scene && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(scene.Component, { model: scene }) }) })
        ] })
      ]
    }
  );
}
const getStyles = (theme) => ({
  code: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    flexGrow: 1,
    height: "100%",
    overflow: "scroll"
  }),
  field: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "100%"
  }),
  opts: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    width: "100%",
    flexGrow: 0,
    alignItems: "center",
    justifyContent: "flex-end",
    button: {
      marginLeft: "8px"
    }
  })
});


/***/ }),

/***/ "./public/app/features/dashboard/components/HelpWizard/SupportSnapshotService.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShowMessage: () => (/* binding */ ShowMessage),
/* harmony export */   SnapshotTab: () => (/* binding */ SnapshotTab),
/* harmony export */   SupportSnapshotService: () => (/* binding */ SupportSnapshotService)
/* harmony export */ });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/datetime/formatter.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var app_core_services_StateManagerBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/services/StateManagerBase.ts");
/* harmony import */ var app_features_dashboard_scene_serialization_transformSaveModelToScene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard-scene/serialization/transformSaveModelToScene.ts");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var _state_DashboardModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/state/DashboardModel.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/components/HelpWizard/utils.ts");









var SnapshotTab = /* @__PURE__ */ ((SnapshotTab2) => {
  SnapshotTab2[SnapshotTab2["Support"] = 0] = "Support";
  SnapshotTab2[SnapshotTab2["Data"] = 1] = "Data";
  return SnapshotTab2;
})(SnapshotTab || {});
var ShowMessage = /* @__PURE__ */ ((ShowMessage2) => {
  ShowMessage2[ShowMessage2["PanelSnapshot"] = 0] = "PanelSnapshot";
  ShowMessage2[ShowMessage2["GithubComment"] = 1] = "GithubComment";
  return ShowMessage2;
})(ShowMessage || {});
class SupportSnapshotService extends app_core_services_StateManagerBase__WEBPACK_IMPORTED_MODULE_4__.StateManagerBase {
  constructor(panel) {
    super({
      panel,
      panelTitle: panel.replaceVariables(panel.title, void 0, "text") || "Panel",
      currentTab: 0 /* Support */,
      showMessage: 1 /* GithubComment */,
      snapshotText: "",
      markdownText: "",
      randomize: {},
      snapshotUpdate: 0,
      options: [
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard.support-snapshot-service.label.git-hub-comment", "GitHub comment"),
          description: "Copy and paste this message into a GitHub issue or comment",
          value: 1 /* GithubComment */
        },
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard.support-snapshot-service.label.panel-support-snapshot", "Panel support snapshot"),
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
            "dashboard.support-snapshot-service.description.dashboard-troubleshoot-visualization-issues",
            "Dashboard JSON used to help troubleshoot visualization issues"
          ),
          value: 0 /* PanelSnapshot */
        }
      ]
    });
    this.onCurrentTabChange = (value) => {
      this.setState({ currentTab: value });
    };
    this.onShowMessageChange = (value) => {
      this.setState({ showMessage: value.value });
    };
    this.onGetMarkdownForClipboard = () => {
      const { markdownText } = this.state;
      const maxLen = Math.pow(1024, 2) * 1.5;
      if (markdownText.length > maxLen) {
        this.setState({
          error: {
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard.support-snapshot-service.title.copy-to-clipboard-failed", "Copy to clipboard failed"),
            message: "Snapshot is too large, consider download and attaching a file instead"
          }
        });
        return "";
      }
      return markdownText;
    };
    this.onDownloadDashboard = () => {
      const { snapshotText, panelTitle } = this.state;
      const blob = new Blob([snapshotText], {
        type: "text/plain"
      });
      const fileName = `debug-${panelTitle}-${(0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTimeFormat)(/* @__PURE__ */ new Date())}.json.txt`;
      file_saver__WEBPACK_IMPORTED_MODULE_0___default()(blob, fileName);
    };
    this.onSetSnapshotText = (snapshotText) => {
      this.setState({ snapshotText });
    };
    this.onToggleRandomize = (k) => {
      const { randomize } = this.state;
      this.setState({ randomize: { ...randomize, [k]: !randomize[k] } });
    };
  }
  async buildDebugDashboard() {
    const { panel, randomize, snapshotUpdate } = this.state;
    const snapshot = await (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getDebugDashboard)(panel, randomize, (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_6__.getTimeSrv)().timeRange());
    const snapshotText = JSON.stringify(snapshot, null, 2);
    const markdownText = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getGithubMarkdown)(panel, snapshotText);
    const snapshotSize = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.formattedValueToString)((0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getValueFormat)("bytes")(snapshotText?.length ?? 0));
    let scene = void 0;
    try {
      const oldModel = new _state_DashboardModel__WEBPACK_IMPORTED_MODULE_7__.DashboardModel(snapshot, { isEmbedded: true });
      const dash = (0,app_features_dashboard_scene_serialization_transformSaveModelToScene__WEBPACK_IMPORTED_MODULE_5__.createDashboardSceneFromDashboardModel)(oldModel, snapshot);
      scene = dash.state.body;
    } catch (ex) {
      console.log("Error creating scene:", ex);
    }
    this.setState({ snapshot, snapshotText, markdownText, snapshotSize, snapshotUpdate: snapshotUpdate + 1, scene });
  }
}


/***/ }),

/***/ "./public/app/features/dashboard/components/Inspector/InspectContent.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InspectContent: () => (/* binding */ InspectContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/app.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabsBar.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/Tab.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Drawer/Drawer.tsx");
/* harmony import */ var app_features_inspector_InspectDataTab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/inspector/InspectDataTab.tsx");
/* harmony import */ var app_features_inspector_InspectErrorTab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/inspector/InspectErrorTab.tsx");
/* harmony import */ var app_features_inspector_InspectJSONTab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/inspector/InspectJSONTab.tsx");
/* harmony import */ var app_features_inspector_InspectMetadataTab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/inspector/InspectMetadataTab.tsx");
/* harmony import */ var app_features_inspector_InspectStatsTab__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/inspector/InspectStatsTab.tsx");
/* harmony import */ var app_features_inspector_QueryInspector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/inspector/QueryInspector.tsx");
/* harmony import */ var app_features_inspector_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/inspector/types.ts");















const InspectContent = ({
  panel,
  plugin,
  dashboard,
  tabs,
  data,
  isDataLoading,
  dataOptions,
  metadataDatasource,
  defaultTab,
  onDataOptionsChange,
  onClose
}) => {
  const [currentTab, setCurrentTab] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultTab ?? app_features_inspector_types__WEBPACK_IMPORTED_MODULE_17__.InspectTab.Data);
  if (!plugin) {
    return null;
  }
  let errors = getErrors(data);
  let activeTab = currentTab;
  if (!tabs.find((item) => item.value === currentTab)) {
    activeTab = app_features_inspector_types__WEBPACK_IMPORTED_MODULE_17__.InspectTab.JSON;
  }
  const panelTitle = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.getTemplateSrv)().replace(panel.title, panel.scopedVars, "text") || "Panel";
  const title = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("dashboard.inspect.title", "Inspect: {{panelTitle}}", { panelTitle });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Drawer,
    {
      title,
      subtitle: data && formatStats(data),
      onClose,
      tabs: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.TabsBar, { children: tabs.map((tab, index) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Tab,
          {
            label: tab.label,
            active: tab.value === activeTab,
            onChangeTab: () => setCurrentTab(tab.value || app_features_inspector_types__WEBPACK_IMPORTED_MODULE_17__.InspectTab.Data)
          },
          `${tab.value}-${index}`
        );
      }) }),
      children: [
        activeTab === app_features_inspector_types__WEBPACK_IMPORTED_MODULE_17__.InspectTab.Data && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          app_features_inspector_InspectDataTab__WEBPACK_IMPORTED_MODULE_11__.InspectDataTab,
          {
            dataName: panelTitle,
            panelPluginId: panel.type,
            fieldConfig: panel.fieldConfig,
            hasTransformations: Boolean(panel.transformations?.length),
            data: data && data.series,
            isLoading: isDataLoading,
            options: dataOptions,
            onOptionsChange: onDataOptionsChange,
            timeZone: dashboard.timezone,
            app: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.CoreApp.Dashboard
          }
        ),
        data && activeTab === app_features_inspector_types__WEBPACK_IMPORTED_MODULE_17__.InspectTab.Meta && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_inspector_InspectMetadataTab__WEBPACK_IMPORTED_MODULE_14__.InspectMetadataTab, { data, metadataDatasource }),
        activeTab === app_features_inspector_types__WEBPACK_IMPORTED_MODULE_17__.InspectTab.JSON && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_inspector_InspectJSONTab__WEBPACK_IMPORTED_MODULE_13__.InspectJSONTab, { panel, dashboard, data, onClose }),
        activeTab === app_features_inspector_types__WEBPACK_IMPORTED_MODULE_17__.InspectTab.Error && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_inspector_InspectErrorTab__WEBPACK_IMPORTED_MODULE_12__.InspectErrorTab, { errors }),
        data && activeTab === app_features_inspector_types__WEBPACK_IMPORTED_MODULE_17__.InspectTab.Stats && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_inspector_InspectStatsTab__WEBPACK_IMPORTED_MODULE_15__.InspectStatsTab, { data, timeZone: dashboard.getTimezone() }),
        data && activeTab === app_features_inspector_types__WEBPACK_IMPORTED_MODULE_17__.InspectTab.Query && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_inspector_QueryInspector__WEBPACK_IMPORTED_MODULE_16__.QueryInspector, { data, onRefreshQuery: () => panel.refresh() })
      ]
    }
  );
};
function getErrors(data) {
  let errors = data?.errors ?? [];
  if (data?.error && !errors.includes(data.error)) {
    errors = [data.error, ...errors];
  }
  if (!errors.length && data?.state === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.LoadingState.Error) {
    return [
      {
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("dashboard.get-errors.message.error-loading-data", "Error loading data")
      }
    ];
  }
  return errors;
}
function formatStats(data) {
  const { request } = data;
  if (!request || (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(request)) {
    return "";
  }
  const queryCount = request.targets.length;
  const requestTime = request.endTime ? request.endTime - request.startTime : 0;
  const formatted = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.formattedValueToString)((0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getValueFormat)("ms")(requestTime));
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "dashboard.inspect.subtitle", children: [
    { queryCount },
    " queries with total query time of ",
    { formatted }
  ] });
}


/***/ }),

/***/ "./public/app/features/dashboard/components/Inspector/PanelInspector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelInspector: () => (/* binding */ PanelInspector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var app_features_inspector_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/inspector/types.ts");
/* harmony import */ var app_features_panel_state_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/panel/state/selectors.ts");
/* harmony import */ var _HelpWizard_HelpWizard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/components/HelpWizard/HelpWizard.tsx");
/* harmony import */ var _PanelEditor_usePanelLatestData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/usePanelLatestData.ts");
/* harmony import */ var _InspectContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/components/Inspector/InspectContent.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/dashboard/components/Inspector/hooks.ts");












const PanelInspectorUnconnected = ({ panel, dashboard, plugin }) => {
  const location = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  const defaultTab = new URLSearchParams(location.search).get("inspectTab");
  const [dataOptions, setDataOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    withTransforms: defaultTab === app_features_inspector_types__WEBPACK_IMPORTED_MODULE_5__.InspectTab.Error,
    withFieldConfig: true
  });
  const { data, isLoading, hasError } = (0,_PanelEditor_usePanelLatestData__WEBPACK_IMPORTED_MODULE_8__.usePanelLatestData)(panel, dataOptions, false);
  const metaDs = (0,_hooks__WEBPACK_IMPORTED_MODULE_10__.useDatasourceMetadata)(data);
  const tabs = (0,_hooks__WEBPACK_IMPORTED_MODULE_10__.useInspectTabs)(panel, dashboard, plugin, hasError, metaDs);
  const onClose = () => {
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.locationService.partial({
      inspect: null,
      inspectTab: null
    });
  };
  if (!plugin) {
    return null;
  }
  if (defaultTab === app_features_inspector_types__WEBPACK_IMPORTED_MODULE_5__.InspectTab.Help) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HelpWizard_HelpWizard__WEBPACK_IMPORTED_MODULE_7__.HelpWizard, { panel, plugin, onClose });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _InspectContent__WEBPACK_IMPORTED_MODULE_9__.InspectContent,
    {
      dashboard,
      panel,
      plugin,
      defaultTab,
      tabs,
      data,
      isDataLoading: isLoading,
      dataOptions,
      onDataOptionsChange: setDataOptions,
      metadataDatasource: metaDs,
      onClose
    }
  );
};
const mapStateToProps = (state, props) => {
  const panelState = (0,app_features_panel_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getPanelStateForModel)(state, props.panel);
  if (!panelState) {
    return { plugin: null };
  }
  return {
    plugin: panelState.plugin
  };
};
const PanelInspector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(PanelInspectorUnconnected);


/***/ }),

/***/ "./public/app/features/dashboard/components/LinksSettings/LinkSettingsEdit.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkSettingsEdit: () => (/* binding */ LinkSettingsEdit)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_features_dashboard_scene_settings_links_DashboardLinkForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard-scene/settings/links/DashboardLinkForm.tsx");
/* harmony import */ var app_features_dashboard_scene_settings_links_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard-scene/settings/links/utils.ts");





const LinkSettingsEdit = ({ editLinkIdx, dashboard, onGoBack }) => {
  const [linkSettings, setLinkSettings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(editLinkIdx !== null ? dashboard.links[editLinkIdx] : app_features_dashboard_scene_settings_links_utils__WEBPACK_IMPORTED_MODULE_3__.NEW_LINK);
  const onUpdate = (link) => {
    const links = [...dashboard.links];
    links.splice(editLinkIdx, 1, link);
    dashboard.links = links;
    setLinkSettings(link);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_dashboard_scene_settings_links_DashboardLinkForm__WEBPACK_IMPORTED_MODULE_2__.DashboardLinkForm, { link: linkSettings, onUpdate, onGoBack });
};


/***/ }),

/***/ "./public/app/features/dashboard/components/LinksSettings/LinkSettingsList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkSettingsList: () => (/* binding */ LinkSettingsList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/utils/arrayUtils.ts");
/* harmony import */ var app_features_dashboard_scene_settings_links_DashboardLinkList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard-scene/settings/links/DashboardLinkList.tsx");





const LinkSettingsList = ({ dashboard, onNew, onEdit }) => {
  const [links, setLinks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(dashboard.links);
  const moveLink = (idx, direction) => {
    dashboard.links = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.moveItemImmutably(links, idx, idx + direction);
    setLinks(dashboard.links);
  };
  const duplicateLink = (link) => {
    dashboard.links = [...links, { ...link }];
    setLinks(dashboard.links);
  };
  const deleteLink = (idx) => {
    dashboard.links = [...links.slice(0, idx), ...links.slice(idx + 1)];
    setLinks(dashboard.links);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_features_dashboard_scene_settings_links_DashboardLinkList__WEBPACK_IMPORTED_MODULE_3__.DashboardLinkList,
    {
      links,
      onNew,
      onEdit,
      onDuplicate: duplicateLink,
      onDelete: deleteLink,
      onOrderChange: moveLink
    }
  );
};


/***/ }),

/***/ "./public/app/features/dashboard/components/PanelEditor/OptionsPane.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptionsPane: () => (/* binding */ OptionsPane)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _OptionsPaneOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/OptionsPaneOptions.tsx");
/* harmony import */ var _VisualizationButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/VisualizationButton.tsx");
/* harmony import */ var _VisualizationSelectPane__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/VisualizationSelectPane.tsx");
/* harmony import */ var _usePanelLatestData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/usePanelLatestData.ts");










const OptionsPane = ({
  plugin,
  panel,
  onFieldConfigsChange,
  onPanelOptionsChanged,
  onPanelConfigChange,
  dashboard,
  instanceState
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const isVizPickerOpen = (0,app_types_store__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state) => state.panelEditor.isVizPickerOpen);
  const { data } = (0,_usePanelLatestData__WEBPACK_IMPORTED_MODULE_8__.usePanelLatestData)(panel, { withTransforms: true, withFieldConfig: false }, true);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.wrapper, "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.PanelEditor.OptionsPane.content, children: [
    !isVizPickerOpen && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.vizButtonWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VisualizationButton__WEBPACK_IMPORTED_MODULE_6__.VisualizationButton, { panel }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.optionsWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _OptionsPaneOptions__WEBPACK_IMPORTED_MODULE_5__.OptionsPaneOptions,
        {
          panel,
          dashboard,
          plugin,
          instanceState,
          data,
          onFieldConfigsChange,
          onPanelOptionsChanged,
          onPanelConfigChange
        }
      ) })
    ] }),
    isVizPickerOpen && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VisualizationSelectPane__WEBPACK_IMPORTED_MODULE_7__.VisualizationSelectPane, { panel, data })
  ] });
};
const getStyles = (theme) => {
  return {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "100%",
      width: "100%",
      display: "flex",
      flex: "1 1 0",
      flexDirection: "column",
      padding: 0
    }),
    optionsWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flexGrow: 1,
      minHeight: 0
    }),
    vizButtonWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: `0 ${theme.spacing(2, 2)} 0`
    }),
    legacyOptions: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "legacy-options",
      ".panel-options-grid": {
        display: "flex",
        flexDirection: "column"
      },
      ".panel-options-group": {
        marginBottom: 0
      },
      ".panel-options-group__body": {
        padding: `${theme.spacing(2)} 0`
      },
      ".section": {
        display: "block",
        margin: `${theme.spacing(2)} 0`,
        "&:first-child": {
          marginTop: 0
        }
      }
    })
  };
};


/***/ }),

/***/ "./public/app/features/dashboard/components/PanelEditor/PanelEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelEditor: () => (/* binding */ PanelEditor),
/* harmony export */   PanelEditorUnconnected: () => (/* binding */ PanelEditorUnconnected),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/types/navModel.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/ModalsContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/ToolbarButton/ToolbarButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/ToolbarButton/ToolbarButtonRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/themes/stylesFactory.ts");
/* harmony import */ var app_core_components_AppChrome_AppChromeUpdate__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/core/components/AppChrome/AppChromeUpdate.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_SplitPaneWrapper_SplitPaneWrapper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/core/components/SplitPaneWrapper/SplitPaneWrapper.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_features_dashboard_components_SubMenu_SubMenuItems__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/dashboard/components/SubMenu/SubMenuItems.tsx");
/* harmony import */ var app_features_library_panels_components_SaveLibraryPanelModal_SaveLibraryPanelModal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/library-panels/components/SaveLibraryPanelModal/SaveLibraryPanelModal.tsx");
/* harmony import */ var app_features_panel_state_selectors__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/panel/state/selectors.ts");
/* harmony import */ var app_features_profile_state_reducers__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/profile/state/reducers.ts");
/* harmony import */ var app_types_events__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _core_actions__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var _dashboard_scene_scene_UnlinkModal__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/dashboard-scene/scene/UnlinkModal.tsx");
/* harmony import */ var _library_panels_guard__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/library-panels/guard.ts");
/* harmony import */ var _variables_state_selectors__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./public/app/features/variables/state/selectors.ts");
/* harmony import */ var _dashgrid_DashboardPanel__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./public/app/features/dashboard/dashgrid/DashboardPanel.tsx");
/* harmony import */ var _DashNav_DashNavTimeControls__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./public/app/features/dashboard/components/DashNav/DashNavTimeControls.tsx");
/* harmony import */ var _SaveDashboard_SaveDashboardDrawer__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./public/app/features/dashboard/components/SaveDashboard/SaveDashboardDrawer.tsx");
/* harmony import */ var _OptionsPane__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/OptionsPane.tsx");
/* harmony import */ var _PanelEditorTableView__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/PanelEditorTableView.tsx");
/* harmony import */ var _PanelEditorTabs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/PanelEditorTabs.tsx");
/* harmony import */ var _VisualizationButton__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/VisualizationButton.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/state/reducers.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/state/selectors.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/utils.ts");





































const mapStateToProps = (state, ownProps) => {
  const panel = state.panelEditor.getPanel();
  const panelState = (0,app_features_panel_state_selectors__WEBPACK_IMPORTED_MODULE_25__.getPanelStateForModel)(state, panel);
  return {
    panel,
    plugin: panelState?.plugin,
    instanceState: panelState?.instanceState,
    initDone: state.panelEditor.initDone,
    uiState: state.panelEditor.ui,
    tableViewEnabled: state.panelEditor.tableViewEnabled,
    variables: (0,_variables_state_selectors__WEBPACK_IMPORTED_MODULE_31__.getVariablesByKey)(ownProps.dashboard.uid, state)
  };
};
const mapDispatchToProps = {
  initPanelEditor: _state_actions__WEBPACK_IMPORTED_MODULE_39__.initPanelEditor,
  discardPanelChanges: _state_actions__WEBPACK_IMPORTED_MODULE_39__.discardPanelChanges,
  updatePanelEditorUIState: _state_actions__WEBPACK_IMPORTED_MODULE_39__.updatePanelEditorUIState,
  updateTimeZoneForSession: app_features_profile_state_reducers__WEBPACK_IMPORTED_MODULE_26__.updateTimeZoneForSession,
  toggleTableView: _state_reducers__WEBPACK_IMPORTED_MODULE_40__.toggleTableView,
  notifyApp: _core_actions__WEBPACK_IMPORTED_MODULE_28__.notifyApp
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps);
class PanelEditorUnconnected extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      showSaveLibraryPanelModal: false
    };
    this.triggerForceUpdate = () => {
      this.forceUpdate();
    };
    this.onBack = () => {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_9__.locationService.partial({
        editPanel: null,
        tab: null,
        showCategory: null
      });
    };
    this.onDiscard = () => {
      this.props.discardPanelChanges();
      this.onBack();
    };
    this.onSaveDashboard = () => {
      app_core_core__WEBPACK_IMPORTED_MODULE_22__.appEvents.publish(
        new app_types_events__WEBPACK_IMPORTED_MODULE_27__.ShowModalReactEvent({
          component: _SaveDashboard_SaveDashboardDrawer__WEBPACK_IMPORTED_MODULE_34__.SaveDashboardDrawer,
          props: { dashboard: this.props.dashboard }
        })
      );
    };
    this.onSaveLibraryPanel = async () => {
      if (!(0,_library_panels_guard__WEBPACK_IMPORTED_MODULE_30__.isPanelModelLibraryPanel)(this.props.panel)) {
        return;
      }
      this.setState({ showSaveLibraryPanelModal: true });
    };
    this.onChangeTab = (tab) => {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_9__.locationService.partial({
        tab: tab.id
      });
    };
    this.onFieldConfigChange = (config) => {
      this.props.panel.updateFieldConfig({
        ...config
      });
    };
    this.onPanelOptionsChanged = (options) => {
      this.props.panel.updateOptions(options);
    };
    this.onPanelConfigChanged = (configKey, value) => {
      this.props.panel.setProperty(configKey, value);
      this.props.panel.render();
      this.forceUpdate();
    };
    this.onDisplayModeChange = (mode) => {
      const { updatePanelEditorUIState: updatePanelEditorUIState2 } = this.props;
      if (this.props.tableViewEnabled) {
        this.props.toggleTableView();
      }
      updatePanelEditorUIState2({
        mode
      });
    };
    this.onToggleTableView = () => {
      this.props.toggleTableView();
    };
    this.onGoBackToDashboard = () => {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_9__.locationService.partial({ editPanel: null, tab: null, showCategory: null });
    };
    this.onConfirmAndDismissLibarayPanelModel = () => {
      this.setState({ showSaveLibraryPanelModal: false });
    };
  }
  componentDidMount() {
    this.props.initPanelEditor(this.props.sourcePanel, this.props.dashboard);
  }
  componentDidUpdate() {
    const { panel, initDone } = this.props;
    if (initDone && !this.eventSubs) {
      this.eventSubs = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
      this.eventSubs.add(panel.events.subscribe(app_types_events__WEBPACK_IMPORTED_MODULE_27__.PanelOptionsChangedEvent, this.triggerForceUpdate));
    }
  }
  componentWillUnmount() {
    this.eventSubs?.unsubscribe();
  }
  renderPanel(styles, isOnlyPanel) {
    const { dashboard, panel, uiState, tableViewEnabled, theme } = this.props;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.mainPaneWrapper, children: [
      this.renderPanelToolbar(styles),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.panelWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__["default"], { children: ({ width, height }) => {
        if (width < 3 || height < 3) {
          return null;
        }
        if (isOnlyPanel) {
          height -= theme.spacing.gridSize * 2;
        }
        if (tableViewEnabled) {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PanelEditorTableView__WEBPACK_IMPORTED_MODULE_36__.PanelEditorTableView, { width, height, panel, dashboard });
        }
        const panelSize = (0,_utils__WEBPACK_IMPORTED_MODULE_43__.calculatePanelSize)(uiState.mode, width, height, panel);
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.centeringContainer, style: { width, height }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: panelSize, "data-panelid": panel.id, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _dashgrid_DashboardPanel__WEBPACK_IMPORTED_MODULE_32__.DashboardPanel,
          {
            stateKey: panel.key,
            dashboard,
            panel,
            isEditing: true,
            isViewing: false,
            lazy: false,
            width: panelSize.width,
            height: panelSize.height
          },
          panel.key
        ) }) });
      } }) })
    ] }, "panel");
  }
  renderPanelAndEditor(uiState, styles) {
    const { panel, dashboard, plugin, tab } = this.props;
    const tabs = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_41__.getPanelEditorTabs)(tab, plugin);
    const isOnlyPanel = tabs.length === 0;
    const panelPane = this.renderPanel(styles, isOnlyPanel);
    if (tabs.length === 0) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.onlyPanel, children: panelPane });
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      app_core_components_SplitPaneWrapper_SplitPaneWrapper__WEBPACK_IMPORTED_MODULE_21__.SplitPaneWrapper,
      {
        splitOrientation: "horizontal",
        maxSize: -200,
        paneSize: uiState.topPaneSize,
        primary: "first",
        secondaryPaneStyle: { minHeight: 0 },
        onDragFinished: (size) => {
          if (size) {
            (0,_state_actions__WEBPACK_IMPORTED_MODULE_39__.updatePanelEditorUIState)({ topPaneSize: size / window.innerHeight });
          }
        },
        children: [
          panelPane,
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "div",
            {
              className: styles.tabsWrapper,
              "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_7__.selectors.components.PanelEditor.DataPane.content,
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _PanelEditorTabs__WEBPACK_IMPORTED_MODULE_37__.PanelEditorTabs,
                {
                  panel,
                  dashboard,
                  tabs,
                  onChangeTab: this.onChangeTab
                },
                panel.key
              )
            },
            "panel-editor-tabs"
          )
        ]
      }
    );
  }
  renderTemplateVariables(styles) {
    const { variables } = this.props;
    if (!variables.length) {
      return null;
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.variablesWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_dashboard_components_SubMenu_SubMenuItems__WEBPACK_IMPORTED_MODULE_23__.SubMenuItems, { variables }) });
  }
  renderPanelToolbar(styles) {
    const { dashboard, uiState, variables, updateTimeZoneForSession: updateTimeZoneForSession2, panel, tableViewEnabled } = this.props;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.panelToolbar, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Stack, { justifyContent: variables.length > 0 ? "space-between" : "flex-end", alignItems: "flex-start", children: [
      this.renderTemplateVariables(styles),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Stack, { gap: 1, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.InlineSwitch,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("dashboard.panel-editor-unconnected.table-view-label-table-view", "Table view"),
            showLabel: true,
            id: "table-view",
            value: tableViewEnabled,
            onClick: this.onToggleTableView,
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_7__.selectors.components.PanelEditor.toggleTableView
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.RadioButtonGroup, { value: uiState.mode, options: _types__WEBPACK_IMPORTED_MODULE_42__.displayModes, onChange: this.onDisplayModeChange }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DashNav_DashNavTimeControls__WEBPACK_IMPORTED_MODULE_33__.DashNavTimeControls, { dashboard, onChangeTimeZone: updateTimeZoneForSession2, isOnCanvas: true }),
        !uiState.isPanelOptionsVisible && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VisualizationButton__WEBPACK_IMPORTED_MODULE_38__.VisualizationButton, { panel })
      ] })
    ] }) });
  }
  renderEditorActions() {
    const size = "sm";
    let editorActions = [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Button,
        {
          onClick: this.onDiscard,
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("dashboard.panel-editor-unconnected.editor-actions.title-undo-all-changes", "Undo all changes"),
          size,
          variant: "destructive",
          fill: "outline",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.Trans, { i18nKey: "dashboard.panel-editor-unconnected.editor-actions.discard", children: "Discard" })
        },
        "discard"
      ),
      this.props.dashboard.meta.canSave && (this.props.panel.libraryPanel ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Button,
        {
          onClick: this.onSaveLibraryPanel,
          variant: "primary",
          size,
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)(
            "dashboard.panel-editor-unconnected.editor-actions.title-apply-changes-and-save-library-panel",
            "Apply changes and save library panel"
          ),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.Trans, { i18nKey: "dashboard.panel-editor-unconnected.editor-actions.save-library-panel", children: "Save library panel" })
        },
        "save-panel"
      ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Button,
        {
          onClick: this.onSaveDashboard,
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)(
            "dashboard.panel-editor-unconnected.editor-actions.title-apply-changes-and-save-dashboard",
            "Apply changes and save dashboard"
          ),
          size,
          variant: "secondary",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.Trans, { i18nKey: "dashboard.panel-editor-unconnected.editor-actions.save", children: "Save" })
        },
        "save"
      )),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Button,
        {
          onClick: this.onBack,
          variant: "primary",
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)(
            "dashboard.panel-editor-unconnected.editor-actions.title-apply-changes-dashboard",
            "Apply changes and go back to dashboard"
          ),
          "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_7__.selectors.components.PanelEditor.applyButton,
          size,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.Trans, { i18nKey: "dashboard.panel-editor-unconnected.editor-actions.apply", children: "Apply" })
        },
        "apply"
      )
    ];
    if (this.props.panel.libraryPanel) {
      editorActions.splice(
        1,
        0,
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.ModalsController, { children: ({ showModal, hideModal }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.ToolbarButton,
            {
              onClick: () => {
                showModal(_dashboard_scene_scene_UnlinkModal__WEBPACK_IMPORTED_MODULE_29__.UnlinkModal, {
                  onConfirm: () => {
                    this.props.panel.unlinkLibraryPanel();
                    this.forceUpdate();
                  },
                  onDismiss: hideModal,
                  isOpen: true
                });
              },
              title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.t)(
                "dashboard.panel-editor-unconnected.title-unlink",
                "Disconnects this panel from the library panel so that you can edit it regularly."
              ),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_8__.Trans, { i18nKey: "dashboard.panel-editor-unconnected.unlink", children: "Unlink" })
            },
            "unlink"
          );
        } }, "unlink-controller")
      );
      editorActions.pop();
    }
    return editorActions;
  }
  renderOptionsPane() {
    const { plugin, dashboard, panel, instanceState } = this.props;
    if (!plugin) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {});
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _OptionsPane__WEBPACK_IMPORTED_MODULE_35__.OptionsPane,
      {
        plugin,
        dashboard,
        panel,
        instanceState,
        onFieldConfigsChange: this.onFieldConfigChange,
        onPanelOptionsChanged: this.onPanelOptionsChanged,
        onPanelConfigChange: this.onPanelConfigChanged
      }
    );
  }
  render() {
    const { initDone, uiState, theme, sectionNav, pageNav, className, updatePanelEditorUIState: updatePanelEditorUIState2 } = this.props;
    const styles = getStyles(theme, this.props);
    if (!initDone) {
      return null;
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_20__.Page,
      {
        navModel: sectionNav,
        pageNav,
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_7__.selectors.components.PanelEditor.General.content,
        layout: _grafana_data__WEBPACK_IMPORTED_MODULE_6__.PageLayoutType.Custom,
        className,
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            app_core_components_AppChrome_AppChromeUpdate__WEBPACK_IMPORTED_MODULE_19__.AppChromeUpdate,
            {
              actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.ToolbarButtonRow, { alignment: "right", children: this.renderEditorActions() })
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.wrapper, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.verticalSplitPanesWrapper, children: !uiState.isPanelOptionsVisible ? this.renderPanelAndEditor(uiState, styles) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              app_core_components_SplitPaneWrapper_SplitPaneWrapper__WEBPACK_IMPORTED_MODULE_21__.SplitPaneWrapper,
              {
                splitOrientation: "vertical",
                maxSize: -300,
                paneSize: uiState.rightPaneSize,
                primary: "second",
                onDragFinished: (size) => {
                  if (size) {
                    updatePanelEditorUIState2({ rightPaneSize: size / window.innerWidth });
                  }
                },
                children: [
                  this.renderPanelAndEditor(uiState, styles),
                  this.renderOptionsPane()
                ]
              }
            ) }),
            this.state.showSaveLibraryPanelModal && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              app_features_library_panels_components_SaveLibraryPanelModal_SaveLibraryPanelModal__WEBPACK_IMPORTED_MODULE_24__.SaveLibraryPanelModal,
              {
                panel: this.props.panel,
                folderUid: this.props.dashboard.meta.folderUid ?? "",
                onConfirm: this.onConfirmAndDismissLibarayPanelModel,
                onDiscard: this.onDiscard,
                onDismiss: this.onConfirmAndDismissLibarayPanelModel
              }
            )
          ] })
        ]
      }
    );
  }
}
const PanelEditor = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.withTheme2)(connector(PanelEditorUnconnected));
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.stylesFactory)((theme, props) => {
  const { uiState } = props;
  const paneSpacing = theme.spacing(2);
  return {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "100%",
      flexGrow: 1,
      minHeight: 0,
      display: "flex",
      paddingTop: theme.spacing(2)
    }),
    verticalSplitPanesWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100%",
      position: "relative"
    }),
    mainPaneWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100%",
      paddingRight: `${uiState.isPanelOptionsVisible ? 0 : paneSpacing}`
    }),
    variablesWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "variablesWrapper",
      display: "flex",
      flexGrow: 1,
      flexWrap: "wrap",
      gap: theme.spacing(1, 2)
    }),
    panelWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flex: "1 1 0",
      minHeight: 0,
      width: "100%",
      paddingLeft: paneSpacing
    }),
    tabsWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "100%",
      width: "100%"
    }),
    panelToolbar: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      padding: `0 0 ${paneSpacing} ${paneSpacing}`,
      justifyContent: "space-between",
      flexWrap: "wrap"
    }),
    angularWarning: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      height: theme.spacing(4),
      alignItems: "center"
    }),
    toolbarLeft: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      paddingLeft: theme.spacing(1)
    }),
    centeringContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      flexDirection: "column"
    }),
    onlyPanel: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "100%",
      position: "absolute",
      overflow: "hidden",
      width: "100%"
    })
  };
});


/***/ }),

/***/ "./public/app/features/dashboard/components/PanelEditor/PanelEditorQueries.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelEditorQueries: () => (/* binding */ PanelEditorQueries)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var app_features_datasources_components_picker_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/datasources/components/picker/utils.ts");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var app_features_query_components_QueryGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/query/components/QueryGroup.tsx");
/* harmony import */ var _services_DashboardSrv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var _utils_dashboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/utils/dashboard.ts");










class PanelEditorQueries extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);
    // store last used datasource in local storage
    this.updateLastUsedDatasource = (datasource) => {
      (0,app_features_datasources_components_picker_utils__WEBPACK_IMPORTED_MODULE_4__.storeLastUsedDataSourceInLocalStorage)(datasource);
    };
    this.onRunQueries = () => {
      this.props.panel.refresh();
    };
    this.onOpenQueryInspector = () => {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.partial({
        inspect: this.props.panel.id,
        inspectTab: "query"
      });
    };
    this.onOptionsChange = (options) => {
      const { panel } = this.props;
      panel.updateQueries(options);
      if (options.dataSource.uid !== panel.datasource?.uid) {
        setTimeout(this.onRunQueries, 10);
      }
      this.forceUpdate();
    };
  }
  buildQueryOptions(panel) {
    const dataSource = panel.datasource ?? {
      default: true
    };
    const datasourceSettings = (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_5__.getDatasourceSrv)().getInstanceSettings(dataSource);
    this.updateLastUsedDatasource(dataSource);
    return {
      cacheTimeout: datasourceSettings?.meta.queryOptions?.cacheTimeout ? panel.cacheTimeout : void 0,
      dataSource: {
        default: datasourceSettings?.isDefault,
        ...datasourceSettings ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getDataSourceRef)(datasourceSettings) : { type: void 0, uid: void 0 }
      },
      queryCachingTTL: datasourceSettings?.cachingConfig?.enabled ? panel.queryCachingTTL : void 0,
      queries: panel.targets,
      maxDataPoints: panel.maxDataPoints,
      minInterval: panel.interval,
      timeRange: {
        from: panel.timeFrom,
        shift: panel.timeShift,
        hide: panel.hideTimeOverride
      }
    };
  }
  async componentDidMount() {
    const { panel } = this.props;
    if (!panel.datasource) {
      let ds;
      const dashboardUid = (0,_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_7__.getDashboardSrv)().getCurrent()?.uid ?? "";
      const lastUsedDatasource = (0,_utils_dashboard__WEBPACK_IMPORTED_MODULE_8__.getLastUsedDatasourceFromStorage)(dashboardUid);
      if (lastUsedDatasource?.datasourceUid !== null) {
        ds = (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_5__.getDatasourceSrv)().getInstanceSettings(lastUsedDatasource?.datasourceUid);
      }
      if (!ds) {
        ds = (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_5__.getDatasourceSrv)().getInstanceSettings(null);
      }
      panel.datasource = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getDataSourceRef)(ds);
      this.forceUpdate();
    }
  }
  render() {
    const { panel } = this.props;
    if (!panel.datasource) {
      return null;
    }
    const options = this.buildQueryOptions(panel);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      app_features_query_components_QueryGroup__WEBPACK_IMPORTED_MODULE_6__.QueryGroup,
      {
        options,
        queryRunner: panel.getQueryRunner(),
        onRunQueries: this.onRunQueries,
        onOpenQueryInspector: this.onOpenQueryInspector,
        onOptionsChange: this.onOptionsChange
      }
    );
  }
}


/***/ }),

/***/ "./public/app/features/dashboard/components/PanelEditor/PanelEditorTableView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelEditorTableView: () => (/* binding */ PanelEditorTableView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/index.ts");
/* harmony import */ var app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");
/* harmony import */ var app_features_panel_components_PanelRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/panel/components/PanelRenderer.tsx");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var _PanelHeaderCorner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/PanelHeaderCorner.tsx");
/* harmony import */ var _usePanelLatestData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/usePanelLatestData.ts");











function PanelEditorTableView({ width, height, panel, dashboard }) {
  const { data } = (0,_usePanelLatestData__WEBPACK_IMPORTED_MODULE_9__.usePanelLatestData)(panel, { withTransforms: true, withFieldConfig: false }, false);
  const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    frameIndex: 0,
    showHeader: true,
    showTypeIcons: true
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const timeSrv = (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_7__.getTimeSrv)();
    const sub = panel.events.subscribe(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.RefreshEvent, () => {
      const timeData = (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_5__.applyPanelTimeOverrides)(panel, timeSrv.timeRange());
      panel.runAllPanelQueries({
        dashboardUID: dashboard.uid,
        dashboardTimezone: dashboard.getTimezone(),
        dashboardTitle: dashboard.title,
        timeData,
        width
      });
    });
    return () => {
      sub.unsubscribe();
    };
  }, [panel, dashboard, width]);
  if (!data) {
    return null;
  }
  const errorMessage = data?.errors ? data.errors.length > 1 ? "Multiple errors found. Click for more details" : data.errors[0].message : data?.error?.message;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.PanelChrome, { width, height, padding: "none", children: (innerWidth, innerHeight) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PanelHeaderCorner__WEBPACK_IMPORTED_MODULE_8__["default"], { panel, error: errorMessage }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      app_features_panel_components_PanelRenderer__WEBPACK_IMPORTED_MODULE_6__.PanelRenderer,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashboard.panel-editor-table-view.title-raw-data", "Raw data"),
        pluginId: "table",
        width: innerWidth,
        height: innerHeight,
        data,
        options,
        onOptionsChange: setOptions
      }
    )
  ] }) });
}


/***/ }),

/***/ "./public/app/features/dashboard/components/PanelEditor/PanelEditorTabs.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelEditorTabs: () => (/* binding */ PanelEditorTabs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabsBar.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/Tab.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabContent.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-data/src/types/icon.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/utils/useForceUpdate.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_alerting_unified_PanelAlertTab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/PanelAlertTab.tsx");
/* harmony import */ var app_features_alerting_unified_PanelAlertTabContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/PanelAlertTabContent.tsx");
/* harmony import */ var app_types_events__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _TransformationsEditor_TransformationsEditor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/dashboard/components/TransformationsEditor/TransformationsEditor.tsx");
/* harmony import */ var _PanelEditorQueries__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/PanelEditorQueries.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/types.ts");













const PanelEditorTabs = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(({ panel, dashboard, tabs, onChangeTab }) => {
  const forceUpdate = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useForceUpdate)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  const instrumentedOnChangeTab = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (tab) => {
      let eventName = "panel_editor_tabs_changed";
      if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.featureToggles.transformationsRedesign) {
        eventName = "transformations_redesign_" + eventName;
      }
      if (!tab.active) {
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)(eventName, { tab_id: tab.id });
      }
      onChangeTab(tab);
    },
    [onChangeTab]
  );
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const eventSubs = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    eventSubs.add(panel.events.subscribe(app_types_events__WEBPACK_IMPORTED_MODULE_14__.PanelQueriesChangedEvent, forceUpdate));
    eventSubs.add(panel.events.subscribe(app_types_events__WEBPACK_IMPORTED_MODULE_14__.PanelTransformationsChangedEvent, forceUpdate));
    return () => eventSubs.unsubscribe();
  }, [panel, dashboard, forceUpdate]);
  const activeTab = tabs.find((item) => item.active);
  if (tabs.length === 0) {
    return null;
  }
  const alertingEnabled = _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.unifiedAlertingEnabled;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.wrapper, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TabsBar, { className: styles.tabBar, hideBorder: true, children: tabs.map((tab) => {
      if (tab.id === _types__WEBPACK_IMPORTED_MODULE_17__.PanelEditorTabId.Alert && alertingEnabled) {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          app_features_alerting_unified_PanelAlertTab__WEBPACK_IMPORTED_MODULE_12__.PanelAlertTab,
          {
            label: tab.text,
            active: tab.active,
            onChangeTab: () => onChangeTab(tab),
            icon: (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.toIconName)(tab.icon),
            panel,
            dashboard
          },
          tab.id
        );
      }
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tab,
        {
          label: tab.text,
          active: tab.active,
          onChangeTab: () => instrumentedOnChangeTab(tab),
          icon: (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.toIconName)(tab.icon),
          counter: getCounter(panel, tab)
        },
        tab.id
      );
    }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.TabContent, { className: styles.tabContent, children: [
      activeTab.id === _types__WEBPACK_IMPORTED_MODULE_17__.PanelEditorTabId.Query && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PanelEditorQueries__WEBPACK_IMPORTED_MODULE_16__.PanelEditorQueries, { panel, queries: panel.targets }),
      activeTab.id === _types__WEBPACK_IMPORTED_MODULE_17__.PanelEditorTabId.Alert && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_alerting_unified_PanelAlertTabContent__WEBPACK_IMPORTED_MODULE_13__.PanelAlertTabContent, { panel, dashboard }),
      activeTab.id === _types__WEBPACK_IMPORTED_MODULE_17__.PanelEditorTabId.Transform && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TransformationsEditor_TransformationsEditor__WEBPACK_IMPORTED_MODULE_15__.TransformationsEditor, { panel })
    ] })
  ] });
});
PanelEditorTabs.displayName = "PanelEditorTabs";
function getCounter(panel, tab) {
  switch (tab.id) {
    case _types__WEBPACK_IMPORTED_MODULE_17__.PanelEditorTabId.Query:
      return panel.targets.length;
    case _types__WEBPACK_IMPORTED_MODULE_17__.PanelEditorTabId.Alert:
      return panel.alert ? 1 : 0;
    case _types__WEBPACK_IMPORTED_MODULE_17__.PanelEditorTabId.Transform:
      const transformations = panel.getTransformations() ?? [];
      return transformations.length;
  }
  return null;
}
const getStyles = (theme) => {
  return {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }),
    tabBar: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      paddingLeft: theme.spacing(2)
    }),
    tabContent: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: 0,
      display: "flex",
      flexDirection: "column",
      flex: 1,
      minHeight: 0,
      background: theme.colors.background.primary,
      border: `1px solid ${theme.components.panel.borderColor}`,
      borderLeft: "none",
      borderBottom: "none",
      borderTopRightRadius: theme.shape.borderRadius(1.5)
    })
  };
};


/***/ }),

/***/ "./public/app/features/dashboard/components/PanelEditor/PanelHeaderCorner.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelHeaderCorner: () => (/* binding */ PanelHeaderCorner),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/text/markdown.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var app_features_inspector_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/inspector/types.ts");










var InfoMode = /* @__PURE__ */ ((InfoMode2) => {
  InfoMode2["Error"] = "Error";
  InfoMode2["Info"] = "Info";
  InfoMode2["Links"] = "Links";
  return InfoMode2;
})(InfoMode || {});
class PanelHeaderCorner extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor() {
    super(...arguments);
    this.timeSrv = (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_10__.getTimeSrv)();
    this.getInfoMode = () => {
      const { panel, error } = this.props;
      if (error) {
        return "Error" /* Error */;
      }
      if (!!panel.description) {
        return "Info" /* Info */;
      }
      if (panel.links && panel.links.length) {
        return "Links" /* Links */;
      }
      return void 0;
    };
    this.getInfoContent = () => {
      const { panel, theme } = this.props;
      const markdown = panel.description || "";
      const interpolatedMarkdown = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.getTemplateSrv)().replace(markdown, panel.scopedVars);
      const markedInterpolatedMarkdown = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.renderMarkdown)(interpolatedMarkdown);
      const links = this.props.links && this.props.links.getLinks(panel.replaceVariables);
      const styles = getContentStyles(theme);
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.content, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { dangerouslySetInnerHTML: { __html: markedInterpolatedMarkdown } }),
        links && links.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { className: styles.cornerLinks, children: links.map((link, idx) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: link.href, target: link.target, children: link.title }) }, idx);
        }) })
      ] });
    };
    /**
     * Open the Panel Inspector when we click on an error
     */
    this.onClickError = () => {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.locationService.partial({
        inspect: this.props.panel.id,
        inspectTab: app_features_inspector_types__WEBPACK_IMPORTED_MODULE_11__.InspectTab.Error
      });
    };
  }
  render() {
    const { error } = this.props;
    const infoMode = this.getInfoMode();
    if (!infoMode) {
      return null;
    }
    if (infoMode === "Error" /* Error */ && error) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PanelInfoCorner, { infoMode, content: error, onClick: this.onClickError });
    }
    if (infoMode === "Info" /* Info */ || infoMode === "Links" /* Links */) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PanelInfoCorner, { infoMode, content: this.getInfoContent });
    }
    return null;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.withTheme2)(PanelHeaderCorner));
function PanelInfoCorner({ infoMode, content, onClick }) {
  const theme = infoMode === "Error" /* Error */ ? "error" : "info";
  const ariaLabel = _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.Panels.Panel.headerCornerInfo(infoMode.toLowerCase());
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Tooltip, { content, placement: "top-start", theme, interactive: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { type: "button", className: styles.infoCorner, onClick, "aria-label": ariaLabel, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Icon,
      {
        name: iconMap[infoMode],
        size: infoMode === "Links" /* Links */ ? "sm" : "lg",
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.icon, { [styles.iconLinks]: infoMode === "Links" /* Links */ })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.inner, { [styles.error]: infoMode === "Error" /* Error */ }) })
  ] }) });
}
const iconMap = {
  ["Error" /* Error */]: "exclamation",
  ["Info" /* Info */]: "info",
  ["Links" /* Links */]: "external-link-alt"
};
const getContentStyles = (theme) => ({
  content: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    overflow: "auto",
    code: {
      whiteSpace: "normal",
      wordWrap: "break-word"
    },
    "pre > code": {
      display: "block"
    }
  }),
  cornerLinks: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    listStyle: "none",
    paddingLeft: 0
  })
});
const getStyles = (theme) => {
  return {
    icon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 2,
      fill: theme.colors.text.maxContrast
    }),
    iconLinks: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      left: theme.spacing(0.5),
      top: theme.spacing(0.25)
    }),
    inner: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: 0,
      height: 0,
      position: "absolute",
      left: 0,
      bottom: 0,
      borderBottom: `${theme.spacing(4)} solid transparent`,
      borderLeft: `${theme.spacing(4)} solid ${theme.colors.background.secondary}`
    }),
    error: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      borderLeftColor: theme.colors.error.main
    }),
    infoCorner: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      background: "none",
      border: "none",
      color: theme.colors.text.secondary,
      cursor: "pointer",
      position: "absolute",
      left: 0,
      top: 0,
      width: theme.spacing(4),
      height: theme.spacing(4),
      zIndex: 3
    })
  };
};


/***/ }),

/***/ "./public/app/features/dashboard/components/PanelEditor/VisualizationButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualizationButton: () => (/* binding */ VisualizationButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/ButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/ToolbarButton/ToolbarButton.tsx");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/state/selectors.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/state/reducers.ts");










const VisualizationButton = ({ panel }) => {
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  const plugin = (0,app_types_store__WEBPACK_IMPORTED_MODULE_6__.useSelector)((0,_state_selectors__WEBPACK_IMPORTED_MODULE_7__.getPanelPluginWithFallback)(panel.type));
  const isPanelOptionsVisible = (0,app_types_store__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state) => state.panelEditor.ui.isPanelOptionsVisible);
  const isVizPickerOpen = (0,app_types_store__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state) => state.panelEditor.isVizPickerOpen);
  const onToggleOpen = () => {
    dispatch((0,_state_reducers__WEBPACK_IMPORTED_MODULE_9__.toggleVizPicker)(!isVizPickerOpen));
  };
  const onToggleOptionsPane = () => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_8__.updatePanelEditorUIState)({ isPanelOptionsVisible: !isPanelOptionsVisible }));
  };
  if (!plugin) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.wrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ToolbarButton,
      {
        className: styles.vizButton,
        tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "dashboard.visualization-button.tooltip-click-to-change-visualization",
          "Click to change visualization"
        ),
        imgSrc: plugin.meta.info.logos.small,
        isOpen: isVizPickerOpen,
        onClick: onToggleOpen,
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.PanelEditor.toggleVizPicker,
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard.visualization-button.aria-label-change-visualization", "Change visualization"),
        variant: "canvas",
        fullWidth: true,
        children: plugin.meta.name
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ToolbarButton,
      {
        tooltip: isPanelOptionsVisible ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard.visualization-button.tooltip-close", "Close options pane") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard.visualization-button.tooltip-show", "Show options pane"),
        icon: isPanelOptionsVisible ? "angle-right" : "angle-left",
        onClick: onToggleOptionsPane,
        variant: "canvas",
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.PanelEditor.toggleVizOptions,
        "aria-label": isPanelOptionsVisible ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard.visualization-button.aria-label-close", "Close options pane") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard.visualization-button.aria-label-show", "Show options pane")
      }
    )
  ] }) });
};
VisualizationButton.displayName = "VisualizationTab";
const styles = {
  wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "column"
  }),
  vizButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    textAlign: "left"
  })
};


/***/ }),

/***/ "./public/app/features/dashboard/components/PanelEditor/VisualizationSelectPane.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualizationSelectPane: () => (/* binding */ VisualizationSelectPane)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useLocalStorage.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/ScrollContainer/ScrollContainer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/FilterInput/FilterInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var app_features_library_panels_components_PanelLibraryOptionsGroup_PanelLibraryOptionsGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/library-panels/components/PanelLibraryOptionsGroup/PanelLibraryOptionsGroup.tsx");
/* harmony import */ var app_features_panel_components_VizTypePicker_VisualizationSuggestions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/panel/components/VizTypePicker/VisualizationSuggestions.tsx");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _panel_components_VizTypePicker_VizTypePicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/panel/components/VizTypePicker/VizTypePicker.tsx");
/* harmony import */ var _panel_state_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/panel/state/actions.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/dashboard/state/selectors.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/state/reducers.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/types.ts");

















const VisualizationSelectPane = ({ panel, data }) => {
  const plugin = (0,app_types_store__WEBPACK_IMPORTED_MODULE_15__.useSelector)((0,_state_selectors__WEBPACK_IMPORTED_MODULE_18__.getPanelPluginWithFallback)(panel.type));
  const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const tabKey = app_core_constants__WEBPACK_IMPORTED_MODULE_12__.LS_VISUALIZATION_SELECT_TAB_KEY;
  const defaultTab = _types__WEBPACK_IMPORTED_MODULE_20__.VisualizationSelectPaneTab.Visualizations;
  const [listMode, setListMode] = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(tabKey, defaultTab);
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_15__.useDispatch)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  const searchRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const onVizChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (pluginChange) => {
      dispatch((0,_panel_state_actions__WEBPACK_IMPORTED_MODULE_17__.changePanelPlugin)({ panel, ...pluginChange }));
      if (!pluginChange.withModKey) {
        dispatch((0,_state_reducers__WEBPACK_IMPORTED_MODULE_19__.toggleVizPicker)(false));
      }
    },
    [dispatch, panel]
  );
  const onCloseVizPicker = () => {
    dispatch((0,_state_reducers__WEBPACK_IMPORTED_MODULE_19__.toggleVizPicker)(false));
  };
  if (!plugin) {
    return null;
  }
  const radioOptions = [
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("dashboard.visualization-select-pane.radio-options.label.visualizations", "Visualizations"),
      value: _types__WEBPACK_IMPORTED_MODULE_20__.VisualizationSelectPaneTab.Visualizations
    },
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("dashboard.visualization-select-pane.radio-options.label.suggestions", "Suggestions"),
      value: _types__WEBPACK_IMPORTED_MODULE_20__.VisualizationSelectPaneTab.Suggestions
    },
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("dashboard.visualization-select-pane.radio-options.label.library-panels", "Library panels"),
      value: _types__WEBPACK_IMPORTED_MODULE_20__.VisualizationSelectPaneTab.LibraryPanels,
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
        "dashboard.visualization-select-pane.radio-options.description.reusable-panels-share-between-multiple-dashboards",
        "Reusable panels you can share between multiple dashboards."
      )
    }
  ];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.openWrapper, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.formBox, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.searchRow, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.FilterInput,
          {
            value: searchQuery,
            onChange: setSearchQuery,
            ref: searchRef,
            autoFocus: true,
            placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("dashboard.visualization-select-pane.placeholder-search-for", "Search for...")
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
          {
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("dashboard.visualization-select-pane.title-close", "Close"),
            variant: "secondary",
            icon: "angle-up",
            className: styles.closeButton,
            "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.PanelEditor.toggleVizPicker,
            onClick: onCloseVizPicker
          }
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field, { className: styles.customFieldMargin, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.RadioButtonGroup, { options: radioOptions, value: listMode, onChange: setListMode, fullWidth: true }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.scrollWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.ScrollContainer, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.scrollContent, children: [
      listMode === _types__WEBPACK_IMPORTED_MODULE_20__.VisualizationSelectPaneTab.Visualizations && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_panel_components_VizTypePicker_VizTypePicker__WEBPACK_IMPORTED_MODULE_16__.VizTypePicker, { pluginId: plugin.meta.id, onChange: onVizChange, searchQuery }),
      listMode === _types__WEBPACK_IMPORTED_MODULE_20__.VisualizationSelectPaneTab.Suggestions && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_panel_components_VizTypePicker_VisualizationSuggestions__WEBPACK_IMPORTED_MODULE_14__.VisualizationSuggestions, { onChange: onVizChange, searchQuery, panel, data }),
      listMode === _types__WEBPACK_IMPORTED_MODULE_20__.VisualizationSelectPaneTab.LibraryPanels && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_library_panels_components_PanelLibraryOptionsGroup_PanelLibraryOptionsGroup__WEBPACK_IMPORTED_MODULE_13__.PanelLibraryOptionsGroup, { searchQuery, panel }, "Panel Library")
    ] }) }) })
  ] });
};
VisualizationSelectPane.displayName = "VisualizationSelectPane";
const getStyles = (theme) => {
  return {
    icon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.v1.palette.gray33
    }),
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "column",
      flex: "1 1 0",
      height: "100%"
    }),
    vizButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      textAlign: "left"
    }),
    scrollWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flexGrow: 1,
      minHeight: 0
    }),
    scrollContent: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: theme.spacing(1)
    }),
    openWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "column",
      flex: "1 1 100%",
      height: "100%",
      background: theme.colors.background.primary,
      border: `1px solid ${theme.colors.border.weak}`
    }),
    searchRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      marginBottom: theme.spacing(1)
    }),
    closeButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginLeft: theme.spacing(1)
    }),
    customFieldMargin: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginBottom: theme.spacing(1)
    }),
    formBox: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: theme.spacing(1),
      paddingBottom: 0
    })
  };
};


/***/ }),

/***/ "./public/app/features/dashboard/components/PanelEditor/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   discardPanelChanges: () => (/* binding */ discardPanelChanges),
/* harmony export */   exitPanelEditor: () => (/* binding */ exitPanelEditor),
/* harmony export */   initPanelEditor: () => (/* binding */ initPanelEditor),
/* harmony export */   skipPanelUpdate: () => (/* binding */ skipPanelUpdate),
/* harmony export */   updateDuplicateLibraryPanels: () => (/* binding */ updateDuplicateLibraryPanels),
/* harmony export */   updatePanelEditorUIState: () => (/* binding */ updatePanelEditorUIState)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");
/* harmony import */ var app_features_panel_state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/panel/state/actions.ts");
/* harmony import */ var app_features_panel_state_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/panel/state/reducers.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/state/reducers.ts");







function initPanelEditor(sourcePanel, dashboard) {
  return async (dispatch) => {
    const panel = dashboard.initEditPanel(sourcePanel);
    dispatch(
      (0,_reducers__WEBPACK_IMPORTED_MODULE_5__.updateEditorInitState)({
        panel,
        sourcePanel
      })
    );
  };
}
function discardPanelChanges() {
  return async (dispatch, getStore) => {
    const { getPanel } = getStore().panelEditor;
    getPanel().configRev = 0;
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_5__.setDiscardChanges)(true));
  };
}
function updateDuplicateLibraryPanels(modifiedPanel, dashboard) {
  return (dispatch) => {
    if (modifiedPanel.libraryPanel?.uid === void 0 || !dashboard) {
      return;
    }
    const modifiedSaveModel = modifiedPanel.getSaveModel();
    for (const panel of dashboard.panels) {
      if (skipPanelUpdate(modifiedPanel, panel)) {
        continue;
      }
      panel.restoreModel({
        ...modifiedSaveModel,
        ...(0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(panel, "gridPos", "id")
      });
      const pluginChanged = panel.plugin?.meta.id !== modifiedPanel.plugin?.meta.id;
      panel.plugin = modifiedPanel.plugin;
      panel.configRev++;
      if (pluginChanged) {
        panel.generateNewKey();
        dispatch((0,app_features_panel_state_reducers__WEBPACK_IMPORTED_MODULE_4__.panelModelAndPluginReady)({ key: panel.key, plugin: panel.plugin }));
      }
      setTimeout(() => {
        panel.getQueryRunner().useLastResultFrom(modifiedPanel.getQueryRunner());
      }, 20);
    }
    if (modifiedPanel.repeat) {
      setTimeout(() => dashboard.processRepeats(), 20);
    }
  };
}
function skipPanelUpdate(modifiedPanel, panelToUpdate) {
  if (panelToUpdate.libraryPanel?.uid !== modifiedPanel.libraryPanel.uid) {
    return true;
  }
  if (panelToUpdate.id && panelToUpdate.id === modifiedPanel.id) {
    return true;
  }
  if (panelToUpdate.repeatPanelId) {
    return true;
  }
  return false;
}
function exitPanelEditor() {
  return async (dispatch, getStore) => {
    const dashboard = getStore().dashboard.getModel();
    const { getPanel, getSourcePanel, shouldDiscardChanges } = getStore().panelEditor;
    const panel = getPanel();
    if (dashboard) {
      dashboard.exitPanelEditor();
    }
    const sourcePanel = getSourcePanel();
    if (hasPanelChangedInPanelEdit(panel) && !shouldDiscardChanges) {
      const modifiedSaveModel = panel.getSaveModel();
      const panelTypeChanged = sourcePanel.type !== panel.type;
      dispatch(updateDuplicateLibraryPanels(panel, dashboard));
      sourcePanel.restoreModel(modifiedSaveModel);
      sourcePanel.configRev++;
      if (panelTypeChanged) {
        sourcePanel.plugin = panel.plugin;
        sourcePanel.generateNewKey();
        await dispatch((0,app_features_panel_state_reducers__WEBPACK_IMPORTED_MODULE_4__.panelModelAndPluginReady)({ key: sourcePanel.key, plugin: panel.plugin }));
      }
      setTimeout(() => {
        sourcePanel.getQueryRunner().useLastResultFrom(panel.getQueryRunner());
        sourcePanel.render();
        if (panel.hasSavedPanelEditChange && !panel.hasChanged) {
          sourcePanel.configRev = 0;
        }
      }, 20);
    }
    if (sourcePanel.isNew) {
      if (!shouldDiscardChanges) {
        delete sourcePanel.isNew;
      } else {
        dashboard && (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__.removePanel)(dashboard, sourcePanel, true);
      }
    }
    dispatch((0,app_features_panel_state_actions__WEBPACK_IMPORTED_MODULE_3__.cleanUpPanelState)(panel.key));
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_5__.closeEditor)());
  };
}
function hasPanelChangedInPanelEdit(panel) {
  return panel.hasChanged || panel.hasSavedPanelEditChange;
}
function updatePanelEditorUIState(uiState) {
  return (dispatch, getStore) => {
    const nextState = { ...getStore().panelEditor.ui, ...uiState };
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_5__.setPanelEditorUIState)(nextState));
    try {
      app_core_store__WEBPACK_IMPORTED_MODULE_1__["default"].setObject(_reducers__WEBPACK_IMPORTED_MODULE_5__.PANEL_EDITOR_UI_STATE_STORAGE_KEY, nextState);
    } catch (error) {
      console.error(error);
    }
  };
}


/***/ }),

/***/ "./public/app/features/dashboard/components/PanelEditor/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPanelEditorTabs: () => (/* binding */ getPanelEditorTabs),
/* harmony export */   shouldShowAlertingTab: () => (/* binding */ shouldShowAlertingTab)
/* harmony export */ });
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_features_alerting_unified_utils_access_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var app_features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/types.ts");








const getPanelEditorTabs = (0,memoize_one__WEBPACK_IMPORTED_MODULE_0__["default"])((tab, plugin) => {
  const tabs = [];
  if (!plugin) {
    return tabs;
  }
  let defaultTab = _types__WEBPACK_IMPORTED_MODULE_6__.PanelEditorTabId.Visualize;
  if (plugin.meta.skipDataQuery) {
    return [];
  }
  if (!plugin.meta.skipDataQuery) {
    defaultTab = _types__WEBPACK_IMPORTED_MODULE_6__.PanelEditorTabId.Query;
    tabs.push({
      id: _types__WEBPACK_IMPORTED_MODULE_6__.PanelEditorTabId.Query,
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("dashboard.get-panel-editor-tabs.text.query", "Query"),
      icon: "database",
      active: false
    });
    tabs.push({
      id: _types__WEBPACK_IMPORTED_MODULE_6__.PanelEditorTabId.Transform,
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("dashboard.get-panel-editor-tabs.text.transform-data", "Transform data"),
      icon: "process",
      active: false
    });
  }
  if (shouldShowAlertingTab(plugin)) {
    tabs.push({
      id: _types__WEBPACK_IMPORTED_MODULE_6__.PanelEditorTabId.Alert,
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("dashboard.get-panel-editor-tabs.text.alert", "Alert"),
      icon: "bell",
      active: false
    });
  }
  const activeTab = tabs.find((item) => item.id === (tab || defaultTab)) ?? tabs[0];
  activeTab.active = true;
  return tabs;
});
function shouldShowAlertingTab(plugin) {
  const { unifiedAlertingEnabled = false } = (0,app_core_config__WEBPACK_IMPORTED_MODULE_2__.getConfig)();
  const hasRuleReadPermissions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission((0,app_features_alerting_unified_utils_access_control__WEBPACK_IMPORTED_MODULE_4__.getRulesPermissions)(app_features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.GRAFANA_RULES_SOURCE_NAME).read);
  const isAlertingAvailable = unifiedAlertingEnabled && hasRuleReadPermissions;
  if (!isAlertingAvailable) {
    return false;
  }
  const isGraph = plugin.meta.id === "graph";
  const isTimeseries = plugin.meta.id === "timeseries";
  return isGraph || isTimeseries;
}


/***/ }),

/***/ "./public/app/features/dashboard/components/PanelEditor/usePanelLatestData.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePanelLatestData: () => (/* binding */ usePanelLatestData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");



const usePanelLatestData = (panel, options, checkSchema) => {
  const querySubscription = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [latestData, setLatestData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let lastRev = -1;
    let lastUpdate = 0;
    querySubscription.current = panel.getQueryRunner().getData({ withTransforms: options.withTransforms, withFieldConfig: false }).subscribe({
      next: (data) => {
        if (checkSchema) {
          if (lastRev === data.structureRev) {
            const now = Date.now();
            const elapsed = now - lastUpdate;
            if (elapsed < 1e4) {
              return;
            }
            lastUpdate = now;
          }
          lastRev = data.structureRev ?? -1;
        }
        setLatestData(data);
      }
    });
    return () => {
      if (querySubscription.current) {
        querySubscription.current.unsubscribe();
      }
    };
  }, [panel, options.withTransforms]);
  return {
    data: latestData,
    isLoading: latestData?.state === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Loading,
    hasSeries: latestData ? !!latestData.series : false,
    hasError: Boolean(
      latestData && (latestData.error || latestData?.errors?.length || latestData.state === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Error)
    )
  };
};


/***/ }),

/***/ "./public/app/features/dashboard/components/RowOptions/RowOptionsButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RowOptionsButton: () => (/* binding */ RowOptionsButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/ModalsContext.tsx");
/* harmony import */ var _RowOptionsModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/components/RowOptions/RowOptionsModal.tsx");





const RowOptionsButton = ({ repeat, title, onUpdate, warning }) => {
  const onUpdateChange = (hideModal) => (title2, repeat2) => {
    onUpdate(title2, repeat2);
    hideModal();
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ModalsController, { children: ({ showModal, hideModal }) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "button",
      {
        type: "button",
        className: "pointer",
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("dashboard.row-options-button.aria-label-row-options", "Row options"),
        onClick: () => {
          showModal(_RowOptionsModal__WEBPACK_IMPORTED_MODULE_4__.RowOptionsModal, {
            title,
            repeat,
            onDismiss: hideModal,
            onUpdate: onUpdateChange(hideModal),
            warning
          });
        },
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { name: "cog" })
      }
    );
  } });
};
RowOptionsButton.displayName = "RowOptionsButton";


/***/ }),

/***/ "./public/app/features/dashboard/components/RowOptions/RowOptionsForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RowOptionsForm: () => (/* binding */ RowOptionsForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/Form/Form.tsx");
/* harmony import */ var _RepeatRowSelect_RepeatRowSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/dashboard/components/RepeatRowSelect/RepeatRowSelect.tsx");








const RowOptionsForm = ({ repeat, title, warning, onUpdate, onCancel }) => {
  const [newRepeat, setNewRepeat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(repeat);
  const onChangeRepeat = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((name) => setNewRepeat(name), [setNewRepeat]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_9__.Form,
    {
      defaultValues: { title },
      onSubmit: (formData) => {
        onUpdate(formData.title, newRepeat);
      },
      children: ({ register }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard.row-options-form.label-title", "Title"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input, { ...register("title"), type: "text" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard.row-options-form.label-repeat-for", "Repeat for"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RepeatRowSelect_RepeatRowSelect__WEBPACK_IMPORTED_MODULE_10__.RepeatRowSelect, { repeat: newRepeat, onChange: onChangeRepeat }) }),
        warning && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Alert,
          {
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.Dashboard.Rows.Repeated.ConfigSection.warningMessage,
            severity: "warning",
            title: "",
            topSpacing: 3,
            bottomSpacing: 0,
            children: warning
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Modal.ButtonRow, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { type: "button", variant: "secondary", onClick: onCancel, fill: "outline", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "dashboard.row-options-form.cancel", children: "Cancel" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { type: "submit", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "dashboard.row-options-form.update", children: "Update" }) })
        ] })
      ] })
    }
  );
};


/***/ }),

/***/ "./public/app/features/dashboard/components/RowOptions/RowOptionsModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RowOptionsModal: () => (/* binding */ RowOptionsModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _RowOptionsForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/components/RowOptions/RowOptionsForm.tsx");






const RowOptionsModal = ({ repeat, title, onDismiss, onUpdate, warning }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal,
    {
      isOpen: true,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashboard.row-options-modal.title-row-options", "Row options"),
      icon: "copy",
      onDismiss,
      className: styles.modal,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RowOptionsForm__WEBPACK_IMPORTED_MODULE_5__.RowOptionsForm, { repeat, title, onCancel: onDismiss, onUpdate, warning })
    }
  );
};
const getStyles = () => ({
  modal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    label: "RowOptionsModal",
    width: "500px"
  })
});


/***/ }),

/***/ "./public/app/features/dashboard/components/SaveDashboard/UnsavedChangesModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnsavedChangesModal: () => (/* binding */ UnsavedChangesModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _SaveDashboardButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/components/SaveDashboard/SaveDashboardButton.tsx");






const UnsavedChangesModal = ({ dashboard, onSaveSuccess, onDiscard, onDismiss }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal,
    {
      isOpen: true,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashboard.unsaved-changes-modal.title-unsaved-changes", "Unsaved changes"),
      onDismiss,
      icon: "exclamation-triangle",
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        width: "500px"
      }),
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "dashboard.unsaved-changes-modal.changes", children: "Do you want to save your changes?" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal.ButtonRow, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { variant: "secondary", onClick: onDismiss, fill: "outline", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "dashboard.unsaved-changes-modal.cancel", children: "Cancel" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { variant: "destructive", onClick: onDiscard, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "dashboard.unsaved-changes-modal.discard", children: "Discard" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SaveDashboardButton__WEBPACK_IMPORTED_MODULE_5__.SaveDashboardButton, { dashboard, onSaveSuccess })
        ] })
      ]
    }
  );
};


/***/ }),

/***/ "./public/app/features/dashboard/components/SubMenu/AnnotationPicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnotationPicker: () => (/* binding */ AnnotationPicker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/LoadingIndicator.tsx");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts");









const AnnotationPicker = ({ annotation, events, onEnabledChanged }) => {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const onCancel = () => (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_10__.getDashboardQueryRunner)().cancel(annotation);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const started = events.getStream(_types_events__WEBPACK_IMPORTED_MODULE_9__.AnnotationQueryStarted).subscribe({
      next: (event) => {
        if (event.payload === annotation) {
          setLoading(true);
        }
      }
    });
    const stopped = events.getStream(_types_events__WEBPACK_IMPORTED_MODULE_9__.AnnotationQueryFinished).subscribe({
      next: (event) => {
        if (event.payload === annotation) {
          setLoading(false);
        }
      }
    });
    return () => {
      started.unsubscribe();
      stopped.unsubscribe();
    };
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.annotation, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineFieldRow, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField,
      {
        label: annotation.name,
        disabled: loading,
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.Dashboard.SubMenu.Annotations.annotationLabel(annotation.name),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineSwitch,
          {
            label: annotation.name,
            value: annotation.enable,
            onChange: () => onEnabledChanged(annotation),
            disabled: loading,
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.Dashboard.SubMenu.Annotations.annotationToggle(annotation.name)
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.indicator, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__.LoadingIndicator, { loading, onCancel }) })
  ] }) }, annotation.name);
};
function getStyles(theme) {
  return {
    annotation: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "inline-block",
      marginRight: theme.spacing(1),
      ".fa-caret-down": {
        fontSize: "75%",
        paddingLeft: theme.spacing(1)
      },
      ".gf-form-inline .gf-form": {
        marginBottom: 0
      }
    }),
    indicator: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      alignSelf: "center",
      padding: `0 ${theme.spacing(0.5)}`
    })
  };
}


/***/ }),

/***/ "./public/app/features/dashboard/components/SubMenu/Annotations.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Annotations: () => (/* binding */ Annotations)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _AnnotationPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/components/SubMenu/AnnotationPicker.tsx");





const Annotations = ({ annotations, onAnnotationChanged, events }) => {
  const [visibleAnnotations, setVisibleAnnotations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setVisibleAnnotations(annotations.filter((annotation) => annotation.hide !== true));
  }, [annotations]);
  if (visibleAnnotations.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.Dashboard.SubMenu.Annotations.annotationsWrapper, children: visibleAnnotations.map((annotation) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _AnnotationPicker__WEBPACK_IMPORTED_MODULE_3__.AnnotationPicker,
    {
      events,
      annotation,
      onEnabledChanged: onAnnotationChanged
    },
    annotation.name
  )) });
};


/***/ }),

/***/ "./public/app/features/dashboard/components/SubMenu/DashboardLinks.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardLinks: () => (/* binding */ DashboardLinks)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var _grafana_data_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/text/sanitize.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/utils/useForceUpdate.ts");
/* harmony import */ var app_features_dashboard_scene_settings_links_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard-scene/settings/links/utils.ts");
/* harmony import */ var _panel_panellinks_link_srv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/panel/panellinks/link_srv.ts");
/* harmony import */ var _DashboardLinksDashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/components/SubMenu/DashboardLinksDashboard.tsx");










const DashboardLinks = ({ dashboard, links }) => {
  const forceUpdate = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useForceUpdate)();
  (0,react_use__WEBPACK_IMPORTED_MODULE_1__["default"])(() => {
    const sub = dashboard.events.subscribe(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.TimeRangeUpdatedEvent, forceUpdate);
    return () => sub.unsubscribe();
  });
  if (!links.length) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: links.map((link, index) => {
    const linkInfo = (0,_panel_panellinks_link_srv__WEBPACK_IMPORTED_MODULE_8__.getLinkSrv)().getAnchorInfo(link);
    const key = `${link.title}-$${index}`;
    if (link.type === "dashboards") {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DashboardLinksDashboard__WEBPACK_IMPORTED_MODULE_9__.DashboardLinksDashboard, { link, linkInfo, dashboardUID: dashboard.uid }, key);
    }
    const icon = app_features_dashboard_scene_settings_links_utils__WEBPACK_IMPORTED_MODULE_7__.LINK_ICON_MAP[link.icon];
    const linkElement = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _DashboardLinksDashboard__WEBPACK_IMPORTED_MODULE_9__.DashboardLinkButton,
      {
        href: (0,_grafana_data_internal__WEBPACK_IMPORTED_MODULE_2__.sanitizeUrl)(linkInfo.href),
        target: link.targetBlank ? "_blank" : void 0,
        rel: "noreferrer",
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.DashboardLinks.link,
        icon,
        children: linkInfo.title
      }
    );
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.DashboardLinks.container, children: link.tooltip ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tooltip, { content: linkInfo.tooltip, children: linkElement }) : linkElement }, key);
  }) });
};


/***/ }),

/***/ "./public/app/features/dashboard/components/SubMenu/SubMenu.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubMenu: () => (/* binding */ SubMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/stylesFactory.ts");
/* harmony import */ var _variables_state_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/variables/state/selectors.ts");
/* harmony import */ var _Annotations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/components/SubMenu/Annotations.tsx");
/* harmony import */ var _DashboardLinks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/components/SubMenu/DashboardLinks.tsx");
/* harmony import */ var _SubMenuItems__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/dashboard/components/SubMenu/SubMenuItems.tsx");











class SubMenuUnConnected extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor() {
    super(...arguments);
    this.onAnnotationStateChanged = (updatedAnnotation) => {
      for (let index = 0; index < this.props.dashboard.annotations.list.length; index++) {
        const annotation = this.props.dashboard.annotations.list[index];
        if (annotation.name === updatedAnnotation.name) {
          annotation.enable = !annotation.enable;
          break;
        }
      }
      this.props.dashboard.startRefresh();
      this.forceUpdate();
    };
    this.disableSubmitOnEnter = (e) => {
      e.preventDefault();
    };
  }
  render() {
    const { dashboard, variables, links, annotations, theme } = this.props;
    const styles = getStyles(theme);
    const readOnlyVariables = dashboard.meta.isSnapshot ?? false;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.submenu, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        "form",
        {
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("dashboard.sub-menu-un-connected.aria-label-template-variables", "Template variables"),
          className: styles.formStyles,
          onSubmit: this.disableSubmitOnEnter,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SubMenuItems__WEBPACK_IMPORTED_MODULE_10__.SubMenuItems, { variables, readOnly: readOnlyVariables })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _Annotations__WEBPACK_IMPORTED_MODULE_8__.Annotations,
        {
          annotations,
          onAnnotationChanged: this.onAnnotationStateChanged,
          events: dashboard.events
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.spacer }),
      dashboard && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DashboardLinks__WEBPACK_IMPORTED_MODULE_9__.DashboardLinks, { dashboard, links })
    ] });
  }
}
const mapStateToProps = (state, ownProps) => {
  const { uid } = ownProps.dashboard;
  const templatingState = (0,_variables_state_selectors__WEBPACK_IMPORTED_MODULE_7__.getVariablesState)(uid, state);
  return {
    variables: (0,_variables_state_selectors__WEBPACK_IMPORTED_MODULE_7__.getSubMenuVariables)(uid, templatingState.variables)
  };
};
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.stylesFactory)((theme) => {
  return {
    formStyles: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "contents",
      flexWrap: "wrap"
    }),
    submenu: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignContent: "flex-start",
      alignItems: "flex-start",
      gap: `${theme.spacing(1)} ${theme.spacing(2)}`,
      padding: `0 0 ${theme.spacing(1)} 0`
    }),
    spacer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flexGrow: 1
    })
  };
});
const SubMenu = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.withTheme2)((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps)(SubMenuUnConnected));
SubMenu.displayName = "SubMenu";


/***/ }),

/***/ "./public/app/features/dashboard/components/SubMenu/SubMenuItems.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubMenuItems: () => (/* binding */ SubMenuItems)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/templateVars.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _variables_pickers_PickerRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/variables/pickers/PickerRenderer.tsx");








const SubMenuItems = ({ variables, readOnly }) => {
  const [visibleVariables, setVisibleVariables] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setVisibleVariables(variables.filter((state) => state.hide !== _grafana_data__WEBPACK_IMPORTED_MODULE_3__.VariableHide.hideVariable));
  }, [variables]);
  if (visibleVariables.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: visibleVariables.map((variable) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "div",
    {
      className: styles.submenuItem,
      "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.pages.Dashboard.SubMenu.submenuItem,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_variables_pickers_PickerRenderer__WEBPACK_IMPORTED_MODULE_6__.PickerRenderer, { variable, readOnly })
    },
    variable.id
  )) });
};
const getStyles = (theme) => ({
  submenuItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "inline-block",
    ".fa-caret-down": {
      fontSize: "75%",
      paddingLeft: theme.spacing(1)
    },
    ".gf-form": {
      marginBottom: 0
    }
  })
});


/***/ }),

/***/ "./public/app/features/dashboard/components/VersionHistory/RevertDashboardModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RevertDashboardModal: () => (/* binding */ RevertDashboardModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _useDashboardRestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/components/VersionHistory/useDashboardRestore.tsx");






const RevertDashboardModal = ({ hideModal, id, version }) => {
  const { state, onRestoreDashboard } = (0,_useDashboardRestore__WEBPACK_IMPORTED_MODULE_4__.useDashboardRestore)(id, version);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!state.loading && state.value) {
      hideModal();
    }
  }, [state, hideModal]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ConfirmModal,
    {
      isOpen: true,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashboard.revert-dashboard-modal.title-restore-version", "Restore version"),
      icon: "history",
      onDismiss: hideModal,
      onConfirm: onRestoreDashboard,
      body: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "dashboard.revert-dashboard-modal.body-restore-version", children: [
        "Are you sure you want to restore the dashboard to version ",
        { version },
        "? All unsaved changes will be lost."
      ] }) }),
      confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "dashboard.revert-dashboard-modal.confirmText-restore-version",
        "Yes, restore to version {{version}}",
        { version }
      )
    }
  );
};


/***/ }),

/***/ "./public/app/features/dashboard/components/VersionHistory/VersionHistoryComparison.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionHistoryComparison: () => (/* binding */ VersionHistoryComparison)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/ModalsContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Collapse/CollapsableSection.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_dashboard_scene_settings_version_history_DiffGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/dashboard-scene/settings/version-history/DiffGroup.tsx");
/* harmony import */ var app_features_dashboard_scene_settings_version_history_DiffViewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/dashboard-scene/settings/version-history/DiffViewer.tsx");
/* harmony import */ var app_features_dashboard_scene_settings_version_history_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/dashboard-scene/settings/version-history/utils.ts");
/* harmony import */ var _RevertDashboardModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/dashboard/components/VersionHistory/RevertDashboardModal.tsx");









const VersionHistoryComparison = ({ baseInfo, newInfo, diffData, isNewLatest }) => {
  const diff = (0,app_features_dashboard_scene_settings_version_history_utils__WEBPACK_IMPORTED_MODULE_12__.jsonDiff)(diffData.lhs, diffData.rhs);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 1, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { justifyContent: "space-between", alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { alignItems: "center", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.versionInfo, styles.noMarginBottom), children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans,
            {
              i18nKey: "dashboard.version-history-comparison.old-updated-by",
              values: { version: baseInfo.version, editor: baseInfo.createdBy, timeAgo: baseInfo.ageString },
              children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", { children: [
                  "Version ",
                  "{{version}}"
                ] }),
                " updated by ",
                "{{editor}}",
                " ",
                "{{timeAgo}}"
              ]
            }
          ),
          baseInfo.message
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "arrow-right", size: "sm" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: styles.versionInfo, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans,
            {
              i18nKey: "dashboard.version-history-comparison.new-updated-by",
              values: { version: newInfo.version, editor: newInfo.createdBy, timeAgo: newInfo.ageString },
              children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", { children: [
                  "Version ",
                  "{{version}}"
                ] }),
                " updated by ",
                "{{editor}}",
                " ",
                "{{timeAgo}}"
              ]
            }
          ),
          newInfo.message
        ] })
      ] }),
      isNewLatest && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ModalsController, { children: ({ showModal, hideModal }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
        {
          variant: "destructive",
          icon: "history",
          onClick: () => {
            showModal(_RevertDashboardModal__WEBPACK_IMPORTED_MODULE_13__.RevertDashboardModal, {
              id: baseInfo.id,
              version: baseInfo.version,
              hideModal
            });
          },
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans,
            {
              i18nKey: "dashboard.version-history-comparison.button-restore",
              values: { version: baseInfo.version },
              children: [
                "Restore to version ",
                "{{version}}"
              ]
            }
          )
        }
      ) })
    ] }),
    Object.entries(diff).map(([key, diffs]) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_dashboard_scene_settings_version_history_DiffGroup__WEBPACK_IMPORTED_MODULE_10__.DiffGroup, { diffs, title: key }, key)),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Box, { paddingTop: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.CollapsableSection,
      {
        isOpen: false,
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashboard.version-history-comparison.label-view-json-diff", "View JSON diff"),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          app_features_dashboard_scene_settings_version_history_DiffViewer__WEBPACK_IMPORTED_MODULE_11__.DiffViewer,
          {
            oldValue: JSON.stringify(diffData.lhs, null, 2),
            newValue: JSON.stringify(diffData.rhs, null, 2)
          }
        )
      }
    ) })
  ] });
};
const getStyles = (theme) => ({
  versionInfo: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.secondary,
    fontSize: theme.typography.bodySmall.fontSize
  }),
  noMarginBottom: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: 0
  })
});


/***/ }),

/***/ "./public/app/features/dashboard/components/VersionHistory/VersionHistoryTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionHistoryTable: () => (/* binding */ VersionHistoryTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Tags/Tag.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/ModalsContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Checkbox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _RevertDashboardModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/components/VersionHistory/RevertDashboardModal.tsx");






const VersionHistoryTable = ({ versions, canCompare, onCheck }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.margin, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: "filter-table", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { className: "width-4" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { className: "width-4", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "dashboard.version-history-table.version", children: "Version" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { className: "width-14", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "dashboard.version-history-table.date", children: "Date" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { className: "width-10", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "dashboard.version-history-table.updated-by", children: "Updated by" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "dashboard.version-history-table.notes", children: "Notes" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {})
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: versions.map((version, idx) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Checkbox,
        {
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
            "dashboard.version-history-table.aria-label-toggle-selection",
            "Toggle selection of version {{version}}",
            { version: version.version }
          ),
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
            display: "inline"
          }),
          checked: version.checked,
          onChange: (ev) => onCheck(ev, version.id),
          disabled: !version.checked && canCompare
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: version.version }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: version.createdDateString }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: version.createdBy }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: version.message }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: "text-right", children: idx === 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tag, { name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashboard.version-history-table.name-latest", "Latest"), colorIndex: 17 }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ModalsController, { children: ({ showModal, hideModal }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button,
        {
          variant: "secondary",
          size: "sm",
          icon: "history",
          onClick: () => {
            showModal(_RevertDashboardModal__WEBPACK_IMPORTED_MODULE_8__.RevertDashboardModal, {
              id: version.id,
              version: version.version,
              hideModal
            });
          },
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "dashboard.version-history-table.restore", children: "Restore" })
        }
      ) }) })
    ] }, version.id)) })
  ] }) });
};
function getStyles(theme) {
  return {
    margin: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginBottom: theme.spacing(4)
    })
  };
}


/***/ }),

/***/ "./public/app/features/dashboard/components/VersionHistory/useDashboardRestore.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDashboardRestore: () => (/* binding */ useDashboardRestore)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/utils/location.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_features_dashboard_scene_settings_version_history_HistorySrv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard-scene/settings/version-history/HistorySrv.ts");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/live/dashboard/dashboardWatcher.ts");









const restoreDashboard = async (version, dashboard) => {
  _live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_7__.dashboardWatcher.ignoreNextSave();
  return await app_features_dashboard_scene_settings_version_history_HistorySrv__WEBPACK_IMPORTED_MODULE_5__.historySrv.restoreDashboard(dashboard.uid, version);
};
const useDashboardRestore = (id, version) => {
  const dashboard = (0,app_types_store__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state2) => state2.dashboard.getModel());
  const [state, onRestoreDashboard] = (0,react_use__WEBPACK_IMPORTED_MODULE_1__["default"])(async () => await restoreDashboard(id, dashboard), []);
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__.useAppNotification)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (state.value) {
      const location = _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.getLocation();
      const newUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.locationUtil.stripBaseFromUrl(state.value.url);
      const prevState = location.state?.routeReloadCounter;
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.replace({
        ...location,
        pathname: newUrl,
        state: { routeReloadCounter: prevState ? prevState + 1 : 1 }
      });
      notifyApp.success("Dashboard restored", `Restored from version ${version}`);
    }
  }, [state, version, notifyApp]);
  return { state, onRestoreDashboard };
};


/***/ }),

/***/ "./public/app/features/dashboard/containers/DashboardPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardPage: () => (/* binding */ DashboardPage),
/* harmony export */   UnthemedDashboardPage: () => (/* binding */ UnthemedDashboardPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   mapStateToProps: () => (/* binding */ mapStateToProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/utils/location.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/navModel.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_context_GrafanaContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/context/GrafanaContext.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_navigation_kiosk__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/navigation/kiosk.ts");
/* harmony import */ var app_core_reducers_navBarTree__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/core/reducers/navBarTree.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/live/dashboard/dashboardWatcher.ts");
/* harmony import */ var app_types_dashboard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/types/dashboard.ts");
/* harmony import */ var app_types_events__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _variables_state_actions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/variables/state/actions.ts");
/* harmony import */ var _variables_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var _components_DashNav_DashNav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/dashboard/components/DashNav/DashNav.tsx");
/* harmony import */ var _components_DashboardLoading_DashboardLoading__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/dashboard/components/DashboardLoading/DashboardLoading.tsx");
/* harmony import */ var _components_DashboardPrompt_DashboardPrompt__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/dashboard/components/DashboardPrompt/DashboardPrompt.tsx");
/* harmony import */ var _components_DashboardSettings_DashboardSettings__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/dashboard/components/DashboardSettings/DashboardSettings.tsx");
/* harmony import */ var _components_Inspector_PanelInspector__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/dashboard/components/Inspector/PanelInspector.tsx");
/* harmony import */ var _components_PanelEditor_PanelEditor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/PanelEditor.tsx");
/* harmony import */ var _components_ShareModal_ShareModal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/dashboard/components/ShareModal/ShareModal.tsx");
/* harmony import */ var _components_SubMenu_SubMenu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/dashboard/components/SubMenu/SubMenu.tsx");
/* harmony import */ var _dashgrid_DashboardGrid__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/dashboard/dashgrid/DashboardGrid.tsx");
/* harmony import */ var _dashgrid_liveTimer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/dashboard/dashgrid/liveTimer.ts");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./public/app/features/dashboard/state/actions.ts");
/* harmony import */ var _state_initDashboard__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./public/app/features/dashboard/state/initDashboard.ts");
/* harmony import */ var _DashboardPageError__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./public/app/features/dashboard/containers/DashboardPageError.tsx");
/* harmony import */ var react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("./node_modules/react-grid-layout/css/styles.css");
/* harmony import */ var react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("./node_modules/react-resizable/css/styles.css");





































const mapStateToProps = (state) => ({
  initPhase: state.dashboard.initPhase,
  initError: state.dashboard.initError,
  dashboard: state.dashboard.getModel(),
  navIndex: state.navIndex
});
const mapDispatchToProps = {
  initDashboard: _state_initDashboard__WEBPACK_IMPORTED_MODULE_33__.initDashboard,
  cleanUpDashboardAndVariables: _state_actions__WEBPACK_IMPORTED_MODULE_32__.cleanUpDashboardAndVariables,
  notifyApp: app_core_actions__WEBPACK_IMPORTED_MODULE_9__.notifyApp,
  cancelVariables: _variables_state_actions__WEBPACK_IMPORTED_MODULE_19__.cancelVariables,
  templateVarsChangedInUrl: _variables_state_actions__WEBPACK_IMPORTED_MODULE_19__.templateVarsChangedInUrl
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps);
const getStyles = (theme) => ({
  fullScreenPanel: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    ".react-grid-layout": {
      height: "auto !important",
      // eslint-disable-next-line @grafana/no-unreduced-motion
      transitionProperty: "none"
    },
    ".react-grid-item": {
      display: "none !important",
      // eslint-disable-next-line @grafana/no-unreduced-motion
      transitionProperty: "none !important",
      "&--fullscreen": {
        display: "block !important",
        // can't avoid type assertion here due to !important
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        position: "unset !important",
        transform: "translate(0px, 0px) !important"
      }
    },
    // Disable grid interaction indicators in fullscreen panels
    ".panel-header:hover": {
      backgroundColor: "inherit"
    },
    ".panel-title-container": {
      cursor: "pointer"
    },
    ".react-resizable-handle": {
      display: "none"
    }
  })
});
class UnthemedDashboardPage extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor() {
    super(...arguments);
    this.forceRouteReloadCounter = 0;
    this.state = this.getCleanState();
    this.updateLiveTimer = () => {
      let tr = void 0;
      if (this.props.dashboard?.liveNow) {
        tr = (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_31__.getTimeSrv)().timeRange();
      }
      _dashgrid_liveTimer__WEBPACK_IMPORTED_MODULE_30__.liveTimer.setLiveTimeRange(tr);
    };
    this.setScrollRef = (scrollElement) => {
      this.setState({ scrollElement });
    };
    this.onCloseShareModal = () => {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.locationService.partial({ shareView: null });
    };
  }
  static {
    this.contextType = app_core_context_GrafanaContext__WEBPACK_IMPORTED_MODULE_11__.GrafanaContext;
  }
  getCleanState() {
    return {
      editView: null,
      editPanel: null,
      viewPanel: null,
      showLoadingState: false,
      panelNotFound: false,
      editPanelAccessDenied: false
    };
  }
  componentDidMount() {
    this.initDashboard();
    this.forceRouteReloadCounter = this.props.location.state?.routeReloadCounter || 0;
  }
  componentWillUnmount() {
    this.closeDashboard();
  }
  closeDashboard() {
    this.props.cleanUpDashboardAndVariables();
    this.setState(this.getCleanState());
  }
  initDashboard() {
    const { dashboard, params, queryParams } = this.props;
    if (dashboard) {
      this.closeDashboard();
    }
    this.props.initDashboard({
      urlSlug: params.slug,
      urlUid: params.uid,
      urlType: params.type,
      urlFolderUid: queryParams.folderUid,
      panelType: queryParams.panelType,
      routeName: this.props.route.routeName,
      fixUrl: true,
      accessToken: params.accessToken,
      keybindingSrv: this.context.keybindings
    });
    setTimeout(this.updateLiveTimer, 250);
  }
  componentDidUpdate(prevProps, prevState) {
    const { dashboard, params, templateVarsChangedInUrl: templateVarsChangedInUrl2 } = this.props;
    const routeReloadCounter = this.props.location.state?.routeReloadCounter;
    if (!dashboard) {
      return;
    }
    if (prevProps.params.uid !== params.uid || routeReloadCounter !== void 0 && this.forceRouteReloadCounter !== routeReloadCounter) {
      this.initDashboard();
      this.forceRouteReloadCounter = routeReloadCounter;
      return;
    }
    if (prevProps.location.search !== this.props.location.search) {
      const prevUrlParams = prevProps.queryParams;
      const urlParams = this.props.queryParams;
      if (urlParams?.from !== prevUrlParams?.from || urlParams?.to !== prevUrlParams?.to) {
        (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_31__.getTimeSrv)().updateTimeRangeFromUrl();
        this.updateLiveTimer();
      }
      if (!prevUrlParams?.refresh && urlParams?.refresh) {
        (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_31__.getTimeSrv)().setAutoRefresh(urlParams.refresh);
      }
      const templateVarChanges = (0,_variables_utils__WEBPACK_IMPORTED_MODULE_20__.findTemplateVarChanges)(this.props.queryParams, prevProps.queryParams);
      if (templateVarChanges) {
        templateVarsChangedInUrl2(dashboard.uid, templateVarChanges);
      }
    }
    if (this.state.editPanel && !prevState.editPanel) {
      app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_16__.dashboardWatcher.setEditingState(true);
      this.props.dashboard?.events.publish(new app_types_events__WEBPACK_IMPORTED_MODULE_18__.PanelEditEnteredEvent(this.state.editPanel.id));
    }
    if (!this.state.editPanel && prevState.editPanel) {
      app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_16__.dashboardWatcher.setEditingState(false);
      this.props.dashboard?.events.publish(new app_types_events__WEBPACK_IMPORTED_MODULE_18__.PanelEditExitedEvent(prevState.editPanel.id));
    }
    if (this.state.editPanelAccessDenied) {
      this.props.notifyApp((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_12__.createErrorNotification)("Permission to edit panel denied"));
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.locationService.partial({ editPanel: null });
    }
    if (this.state.panelNotFound) {
      this.props.notifyApp((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_12__.createErrorNotification)(`Panel not found`));
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.locationService.partial({ editPanel: null, viewPanel: null });
    }
    if (this.state.updateScrollTop !== void 0 && this.state.updateScrollTop !== prevState.updateScrollTop) {
      this.state.scrollElement?.scrollTo(0, this.state.updateScrollTop);
    }
  }
  static getDerivedStateFromProps(props, state) {
    const { dashboard, queryParams } = props;
    const urlEditPanelId = queryParams.editPanel;
    const urlViewPanelId = queryParams.viewPanel;
    const urlEditView = queryParams.editview;
    if (!dashboard) {
      return state;
    }
    const updatedState = { ...state };
    if (!state.editView && urlEditView) {
      updatedState.editView = urlEditView;
      updatedState.rememberScrollTop = state.scrollElement?.scrollTop;
      updatedState.updateScrollTop = 0;
    } else if (state.editView && !urlEditView) {
      updatedState.updateScrollTop = state.rememberScrollTop;
      updatedState.editView = null;
    }
    if (!state.editPanel && urlEditPanelId) {
      const panel = dashboard.getPanelByUrlId(urlEditPanelId);
      if (panel) {
        if (dashboard.canEditPanel(panel)) {
          updatedState.editPanel = panel;
          updatedState.rememberScrollTop = state.scrollElement?.scrollTop;
        } else {
          updatedState.editPanelAccessDenied = true;
        }
      } else {
        updatedState.panelNotFound = true;
      }
    } else if (state.editPanel && !urlEditPanelId) {
      updatedState.editPanel = null;
      updatedState.updateScrollTop = state.rememberScrollTop;
    }
    if (!state.viewPanel && urlViewPanelId) {
      const panel = dashboard.getPanelByUrlId(urlViewPanelId);
      if (panel) {
        dashboard.initViewPanel(panel);
        updatedState.viewPanel = panel;
        updatedState.rememberScrollTop = state.scrollElement?.scrollTop;
        updatedState.updateScrollTop = 0;
      } else {
        updatedState.panelNotFound = true;
      }
    } else if (state.viewPanel && !urlViewPanelId) {
      dashboard.exitViewPanel(state.viewPanel);
      updatedState.viewPanel = null;
      updatedState.updateScrollTop = state.rememberScrollTop;
    }
    if (state.panelNotFound || state.editPanelAccessDenied && !urlEditPanelId) {
      updatedState.panelNotFound = false;
      updatedState.editPanelAccessDenied = false;
    }
    return updateStatePageNavFromProps(props, updatedState);
  }
  getInspectPanel() {
    const { dashboard, queryParams } = this.props;
    const inspectPanelId = queryParams.inspect;
    if (!dashboard || !inspectPanelId) {
      return null;
    }
    const inspectPanel = dashboard.getPanelById(parseInt(inspectPanelId, 10));
    if (!inspectPanel) {
      return null;
    }
    return inspectPanel;
  }
  render() {
    const { dashboard, initError, queryParams, theme, params } = this.props;
    const { editPanel, viewPanel, pageNav, sectionNav } = this.state;
    const kioskMode = (0,app_core_navigation_kiosk__WEBPACK_IMPORTED_MODULE_13__.getKioskMode)(this.props.queryParams);
    const styles = getStyles(theme);
    if (!dashboard || !pageNav || !sectionNav) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_DashboardLoading_DashboardLoading__WEBPACK_IMPORTED_MODULE_22__.DashboardLoading, { initPhase: this.props.initPhase });
    }
    const inspectPanel = this.getInspectPanel();
    const showSubMenu = !editPanel && !kioskMode && !this.props.queryParams.editview && dashboard.isSubMenuVisible();
    const showToolbar = kioskMode !== app_types_dashboard__WEBPACK_IMPORTED_MODULE_17__.KioskMode.Full && !queryParams.editview && !initError;
    const pageClassName = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)({
      [styles.fullScreenPanel]: Boolean(viewPanel),
      "page-hidden": Boolean(queryParams.editview || editPanel)
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_10__.Page,
        {
          navModel: sectionNav,
          pageNav,
          layout: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.PageLayoutType.Canvas,
          className: pageClassName,
          onSetScrollRef: this.setScrollRef,
          children: [
            showToolbar && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("header", { "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_6__.selectors.pages.Dashboard.DashNav.navV2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _components_DashNav_DashNav__WEBPACK_IMPORTED_MODULE_21__["default"],
              {
                dashboard,
                title: dashboard.title,
                folderTitle: dashboard.meta.folderTitle,
                isFullscreen: !!viewPanel,
                kioskMode,
                hideTimePicker: dashboard.timepicker.hidden
              }
            ) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_DashboardPrompt_DashboardPrompt__WEBPACK_IMPORTED_MODULE_23__.DashboardPrompt, { dashboard }),
            initError && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DashboardPageError__WEBPACK_IMPORTED_MODULE_34__.DashboardPageError, { error: initError.error, type: params.type }),
            showSubMenu && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", { "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_6__.selectors.pages.Dashboard.SubMenu.submenu, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SubMenu_SubMenu__WEBPACK_IMPORTED_MODULE_28__.SubMenu, { dashboard, annotations: dashboard.annotations.list, links: dashboard.links }) }),
            !initError && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _dashgrid_DashboardGrid__WEBPACK_IMPORTED_MODULE_29__.DashboardGrid,
              {
                dashboard,
                isEditable: !!dashboard.meta.canEdit,
                viewPanel,
                editPanel
              }
            ),
            inspectPanel && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Inspector_PanelInspector__WEBPACK_IMPORTED_MODULE_25__.PanelInspector, { dashboard, panel: inspectPanel }),
            queryParams.shareView && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ShareModal_ShareModal__WEBPACK_IMPORTED_MODULE_27__.ShareModal, { dashboard, onDismiss: this.onCloseShareModal, activeTab: queryParams.shareView })
          ]
        }
      ),
      editPanel && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _components_PanelEditor_PanelEditor__WEBPACK_IMPORTED_MODULE_26__.PanelEditor,
        {
          dashboard,
          sourcePanel: editPanel,
          tab: this.props.queryParams.tab,
          sectionNav,
          pageNav
        }
      ),
      queryParams.editview && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _components_DashboardSettings_DashboardSettings__WEBPACK_IMPORTED_MODULE_24__.DashboardSettings,
        {
          dashboard,
          editview: queryParams.editview,
          pageNav,
          sectionNav
        }
      )
    ] });
  }
}
function updateStatePageNavFromProps(props, state) {
  const { dashboard, navIndex } = props;
  if (!dashboard) {
    return state;
  }
  let pageNav = state.pageNav;
  let sectionNav = state.sectionNav;
  if (!pageNav || dashboard.title !== pageNav.text || dashboard.meta.folderUrl !== pageNav.parentItem?.url) {
    pageNav = {
      text: dashboard.title,
      url: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.locationUtil.getUrlForPartial(props.location, {
        editview: null,
        editPanel: null,
        viewPanel: null
      })
    };
  }
  sectionNav = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_15__.getNavModel)(props.navIndex, app_core_reducers_navBarTree__WEBPACK_IMPORTED_MODULE_14__.ID_PREFIX + dashboard.uid, (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_15__.getNavModel)(props.navIndex, "dashboards/browse"));
  const { folderUid } = dashboard.meta;
  if (folderUid && pageNav && sectionNav.main.id !== "starred") {
    const folderNavModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_15__.getNavModel)(navIndex, `folder-dashboards-${folderUid}`).main;
    if (folderNavModel.id !== "not-found") {
      pageNav = {
        ...pageNav,
        parentItem: folderNavModel
      };
    }
  }
  if (state.editPanel || state.viewPanel) {
    pageNav = {
      ...pageNav,
      text: `${state.editPanel ? "Edit" : "View"} panel`,
      parentItem: pageNav,
      url: void 0
    };
  }
  if (state.pageNav === pageNav && state.sectionNav === sectionNav) {
    return state;
  }
  return {
    ...state,
    pageNav,
    sectionNav
  };
}
const DashboardPage = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.withTheme2)(UnthemedDashboardPage);
DashboardPage.displayName = "DashboardPage";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(DashboardPage));


/***/ }),

/***/ "./public/app/features/dashboard/containers/DashboardPageError.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardPageError: () => (/* binding */ DashboardPageError)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/navModel.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_PageNotFound_EntityNotFound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/PageNotFound/EntityNotFound.tsx");
/* harmony import */ var app_core_utils_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/utils/errors.ts");








function DashboardPageError({ error, type }) {
  const status = (0,app_core_utils_errors__WEBPACK_IMPORTED_MODULE_7__.getStatusFromError)(error);
  const message = (0,app_core_utils_errors__WEBPACK_IMPORTED_MODULE_7__.getMessageFromError)(error);
  const entity = type === "snapshot" ? "Snapshot" : "Dashboard";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__.Page,
    {
      navId: "dashboards/browse",
      layout: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PageLayoutType.Canvas,
      pageNav: { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashboard.dashboard-page-error.text.not-found", "Not found") },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Box, { paddingY: 4, display: "flex", direction: "column", alignItems: "center", children: status === 404 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_PageNotFound_EntityNotFound__WEBPACK_IMPORTED_MODULE_6__.EntityNotFound, { entity }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashboard.errors.failed-to-load", "Failed to load dashboard"),
          severity: "error",
          "data-testid": "dashboard-page-error",
          children: message
        }
      ) })
    }
  );
}


/***/ }),

/***/ "./public/app/features/dashboard/containers/DashboardPageProxy.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var app_features_dashboard_scene_pages_DashboardScenePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard-scene/pages/DashboardScenePage.tsx");
/* harmony import */ var app_features_dashboard_scene_pages_DashboardScenePageStateManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard-scene/pages/DashboardScenePageStateManager.ts");
/* harmony import */ var app_types_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/types/dashboard.ts");
/* harmony import */ var _api_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/api/utils.ts");
/* harmony import */ var _DashboardPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/containers/DashboardPage.tsx");
/* harmony import */ var _DashboardPageError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/containers/DashboardPageError.tsx");











function DashboardPageProxy(props) {
  const forceScenes = props.queryParams.scenes === true;
  const forceOld = props.queryParams.scenes === false;
  const params = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__.useParams)();
  const location = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  const stateManager = (0,app_features_dashboard_scene_pages_DashboardScenePageStateManager__WEBPACK_IMPORTED_MODULE_5__.getDashboardScenePageStateManager)();
  if (forceScenes || _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.featureToggles.dashboardScene && !forceOld) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_dashboard_scene_pages_DashboardScenePage__WEBPACK_IMPORTED_MODULE_4__["default"], { ...props });
  }
  const isScenesSupportedRoute = Boolean(
    props.route.routeName === app_types_dashboard__WEBPACK_IMPORTED_MODULE_6__.DashboardRoutes.Home || props.route.routeName === app_types_dashboard__WEBPACK_IMPORTED_MODULE_6__.DashboardRoutes.Template || props.route.routeName === app_types_dashboard__WEBPACK_IMPORTED_MODULE_6__.DashboardRoutes.Normal && params.uid
  );
  const dashboard = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(async () => {
    if (params.type === "snapshot") {
      return null;
    }
    return stateManager.fetchDashboard({
      route: props.route.routeName,
      uid: params.uid ?? "",
      type: params.type,
      slug: params.slug
    });
  }, [params.uid, props.route.routeName]);
  if (dashboard.error) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DashboardPageError__WEBPACK_IMPORTED_MODULE_9__.DashboardPageError, { error: dashboard.error });
  }
  if (dashboard.loading) {
    return null;
  }
  const uid = dashboard.value && (0,_api_utils__WEBPACK_IMPORTED_MODULE_7__.isDashboardV2Resource)(dashboard.value) ? dashboard.value.metadata.name : dashboard.value?.meta.uid;
  const canEdit = dashboard.value && (0,_api_utils__WEBPACK_IMPORTED_MODULE_7__.isDashboardV2Resource)(dashboard.value) ? dashboard.value?.access.canEdit : dashboard.value?.meta?.canEdit || dashboard.value?.meta?.canMakeEditable;
  const isNew = !uid;
  if (uid !== params.uid && !isNew) {
    return null;
  }
  if (!_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.featureToggles.dashboardSceneForViewers) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DashboardPage__WEBPACK_IMPORTED_MODULE_8__["default"], { ...props, params, location });
  }
  if (!canEdit && isScenesSupportedRoute && !forceOld) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_dashboard_scene_pages_DashboardScenePage__WEBPACK_IMPORTED_MODULE_4__["default"], { ...props });
  } else {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DashboardPage__WEBPACK_IMPORTED_MODULE_8__["default"], { ...props, params, location });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardPageProxy);


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/DashboardGrid.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardGrid: () => (/* binding */ DashboardGrid),
/* harmony export */   PANEL_FILTER_VARIABLE: () => (/* binding */ PANEL_FILTER_VARIABLE)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-grid-layout/index.js");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_features_variables_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/variables/types.ts");
/* harmony import */ var app_types_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _components_AddLibraryPanelWidget_AddLibraryPanelWidget__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/dashboard/components/AddLibraryPanelWidget/AddLibraryPanelWidget.tsx");
/* harmony import */ var _components_DashboardRow_DashboardRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/dashboard/components/DashboardRow/DashboardRow.tsx");
/* harmony import */ var _DashboardEmpty_DashboardEmpty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/dashboard/dashgrid/DashboardEmpty/DashboardEmpty.tsx");
/* harmony import */ var _DashboardPanel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/dashboard/dashgrid/DashboardPanel.tsx");

















const PANEL_FILTER_VARIABLE = "systemPanelFilterVar";
class DashboardGrid extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor(props) {
    super(props);
    this.panelMap = {};
    this.eventSubs = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    this.windowHeight = 1200;
    this.windowWidth = 1920;
    this.gridWidth = 0;
    /** Used to keep track of mobile panel layout position */
    this.lastPanelBottom = 0;
    this.isLayoutInitialized = false;
    this.onLayoutChange = (newLayout) => {
      if (this.state.panelFilter) {
        return;
      }
      for (const newPos of newLayout) {
        this.panelMap[newPos.i].updateGridPos(newPos, this.isLayoutInitialized);
      }
      if (this.isLayoutInitialized) {
        this.isLayoutInitialized = true;
      }
      this.props.dashboard.sortPanelsByGridPos();
      this.forceUpdate();
    };
    this.triggerForceUpdate = () => {
      this.forceUpdate();
    };
    this.updateGridPos = (item, layout) => {
      this.panelMap[item.i].updateGridPos(item);
    };
    this.onResize = (layout, oldItem, newItem) => {
      const panel = this.panelMap[newItem.i];
      panel.updateGridPos(newItem);
    };
    this.onResizeStop = (layout, oldItem, newItem) => {
      this.updateGridPos(newItem, layout);
    };
    this.onDragStop = (layout, oldItem, newItem) => {
      this.updateGridPos(newItem, layout);
    };
    /**
     * Without this hack the move animations are triggered on initial load and all panels fly into position.
     * This can be quite distracting and make the dashboard appear to less snappy.
     */
    this.onGetWrapperDivRef = (ref) => {
      if (ref && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.user.authenticatedBy !== "render") {
        setTimeout(() => {
          ref.classList.add("react-grid-layout--enable-move-animations");
        }, 50);
      }
    };
    this.rootEl = null;
    this.onMeasureRef = (rootEl) => {
      if (!rootEl) {
        if (this.rootEl && this.resizeObserver) {
          this.resizeObserver.unobserve(this.rootEl);
        }
        return;
      }
      this.rootEl = rootEl;
      this.resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          this.setState({ width: entry.contentRect.width });
        });
      });
      this.resizeObserver.observe(rootEl);
    };
    this.state = {
      panelFilter: void 0,
      width: document.body.clientWidth
      // initial very rough estimate
    };
  }
  componentDidMount() {
    const { dashboard } = this.props;
    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.featureToggles.panelFilterVariable) {
      for (const variable of dashboard.getVariables()) {
        if (variable.id === PANEL_FILTER_VARIABLE) {
          if ("query" in variable) {
            this.setPanelFilter(variable.query);
          }
          break;
        }
      }
      this.eventSubs.add(
        app_core_app_events__WEBPACK_IMPORTED_MODULE_6__["default"].subscribe(app_features_variables_types__WEBPACK_IMPORTED_MODULE_9__.VariablesChanged, (e) => {
          if (e.payload.variable?.id === PANEL_FILTER_VARIABLE) {
            if ("current" in e.payload.variable) {
              let variable = e.payload.variable.current;
              if ("value" in variable && typeof variable.value === "string") {
                this.setPanelFilter(variable.value);
              }
            }
          }
        })
      );
    }
    this.eventSubs.add(dashboard.events.subscribe(app_types_events__WEBPACK_IMPORTED_MODULE_10__.DashboardPanelsChangedEvent, this.triggerForceUpdate));
  }
  componentWillUnmount() {
    this.eventSubs.unsubscribe();
  }
  setPanelFilter(regex) {
    let panelFilter = void 0;
    if (regex.length > 0) {
      panelFilter = new RegExp(regex, "i");
    }
    this.setState({
      panelFilter
    });
  }
  buildLayout() {
    const layout = [];
    this.panelMap = {};
    const { panelFilter } = this.state;
    let count = 0;
    for (const panel of this.props.dashboard.panels) {
      if (!panel.key) {
        panel.key = `panel-${panel.id}-${Date.now()}`;
      }
      panel.title = panel.title?.substring(0, 5e3);
      this.panelMap[panel.key] = panel;
      if (!panel.gridPos) {
        console.log("panel without gridpos");
        continue;
      }
      const panelPos = {
        i: panel.key,
        x: panel.gridPos.x,
        y: panel.gridPos.y,
        w: panel.gridPos.w,
        h: panel.gridPos.h
      };
      if (panel.type === "row") {
        panelPos.w = app_core_constants__WEBPACK_IMPORTED_MODULE_7__.GRID_COLUMN_COUNT;
        panelPos.h = 1;
        panelPos.isResizable = false;
        panelPos.isDraggable = panel.collapsed;
      }
      if (!panelFilter) {
        layout.push(panelPos);
      } else {
        if (panelFilter.test(panel.title)) {
          panelPos.isResizable = false;
          panelPos.isDraggable = false;
          panelPos.x = count % 2 * app_core_constants__WEBPACK_IMPORTED_MODULE_7__.GRID_COLUMN_COUNT;
          panelPos.y = Math.floor(count / 2);
          layout.push(panelPos);
          count++;
        }
      }
    }
    return layout;
  }
  getPanelScreenPos(panel, gridWidth) {
    let top = 0;
    if (gridWidth < _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.theme2.breakpoints.values.md) {
      top = this.lastPanelBottom + app_core_constants__WEBPACK_IMPORTED_MODULE_7__.GRID_CELL_VMARGIN;
    } else {
      top = translateGridHeightToScreenHeight(panel.gridPos.y) + app_core_constants__WEBPACK_IMPORTED_MODULE_7__.GRID_CELL_VMARGIN;
    }
    this.lastPanelBottom = top + translateGridHeightToScreenHeight(panel.gridPos.h);
    return { top, bottom: this.lastPanelBottom };
  }
  renderPanels(gridWidth, isDashboardDraggable) {
    const { panelFilter } = this.state;
    const panelElements = [];
    this.lastPanelBottom = 0;
    if (this.gridWidth !== gridWidth) {
      this.windowHeight = window.innerHeight ?? 1e3;
      this.windowWidth = window.innerWidth;
      this.gridWidth = gridWidth;
    }
    for (const panel of this.props.dashboard.panels) {
      const panelClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({ "react-grid-item--fullscreen": panel.isViewing });
      const p = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        GrafanaGridItem,
        {
          className: panelClasses,
          "data-panelid": panel.id,
          gridPos: panel.gridPos,
          gridWidth,
          windowHeight: this.windowHeight,
          windowWidth: this.windowWidth,
          isViewing: panel.isViewing,
          children: (width, height) => {
            return this.renderPanel(panel, width, height, isDashboardDraggable);
          }
        },
        panel.key
      );
      if (!panelFilter) {
        panelElements.push(p);
      } else {
        if (panelFilter.test(panel.title)) {
          panelElements.push(p);
        }
      }
    }
    return panelElements;
  }
  renderPanel(panel, width, height, isDraggable) {
    if (panel.type === "row") {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_DashboardRow_DashboardRow__WEBPACK_IMPORTED_MODULE_12__.DashboardRow, { panel, dashboard: this.props.dashboard }, panel.key);
    }
    if (panel.type === "add-library-panel") {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AddLibraryPanelWidget_AddLibraryPanelWidget__WEBPACK_IMPORTED_MODULE_11__.AddLibraryPanelWidget, { panel, dashboard: this.props.dashboard }, panel.key);
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _DashboardPanel__WEBPACK_IMPORTED_MODULE_14__.DashboardPanel,
      {
        stateKey: panel.key,
        panel,
        dashboard: this.props.dashboard,
        isEditing: panel.isEditing,
        isViewing: panel.isViewing,
        isDraggable,
        width,
        height,
        hideMenu: this.props.hidePanelMenus
      },
      panel.key
    );
  }
  render() {
    const { isEditable, dashboard } = this.props;
    const { width } = this.state;
    if (dashboard.panels.length === 0) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DashboardEmpty_DashboardEmpty__WEBPACK_IMPORTED_MODULE_13__["default"], { dashboard, canCreate: isEditable });
    }
    const draggable = width <= _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.theme2.breakpoints.values.md ? false : isEditable;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "div",
      {
        ref: this.onMeasureRef,
        style: {
          flex: "1 1 auto",
          position: "relative",
          zIndex: 1,
          display: this.props.editPanel ? "none" : void 0
        },
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width, height: "100%" }, ref: this.onGetWrapperDivRef, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          (react_grid_layout__WEBPACK_IMPORTED_MODULE_3___default()),
          {
            width,
            isDraggable: draggable,
            isResizable: isEditable,
            containerPadding: [0, 0],
            useCSSTransforms: true,
            margin: [app_core_constants__WEBPACK_IMPORTED_MODULE_7__.GRID_CELL_VMARGIN, app_core_constants__WEBPACK_IMPORTED_MODULE_7__.GRID_CELL_VMARGIN],
            cols: app_core_constants__WEBPACK_IMPORTED_MODULE_7__.GRID_COLUMN_COUNT,
            rowHeight: app_core_constants__WEBPACK_IMPORTED_MODULE_7__.GRID_CELL_HEIGHT,
            draggableHandle: ".grid-drag-handle",
            draggableCancel: ".grid-drag-cancel",
            layout: this.buildLayout(),
            onDragStop: this.onDragStop,
            onResize: this.onResize,
            onResizeStop: this.onResizeStop,
            onLayoutChange: this.onLayoutChange,
            children: this.renderPanels(width, draggable)
          }
        ) })
      }
    );
  }
}
const GrafanaGridItem = react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((props, ref) => {
  const theme = _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.theme2;
  let width = 100;
  let height = 100;
  const { gridWidth, gridPos, isViewing, windowHeight, windowWidth, ...divProps } = props;
  const style = props.style ?? {};
  if (isViewing) {
    width = gridWidth;
    height = windowHeight * 0.85;
    style.height = height;
    style.width = "100%";
  } else if (windowWidth < theme.breakpoints.values.md) {
    width = props.gridWidth;
    height = translateGridHeightToScreenHeight(gridPos.h);
    style.height = height;
    style.width = "100%";
  } else {
    if (props.style) {
      const { width: styleWidth, height: styleHeight } = props.style;
      if (styleWidth != null) {
        width = typeof styleWidth === "number" ? styleWidth : parseFloat(styleWidth);
      }
      if (styleHeight != null) {
        height = typeof styleHeight === "number" ? styleHeight : parseFloat(styleHeight);
      }
    }
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ...divProps, style: { ...divProps.style }, ref, children: [props.children[0](width, height), props.children.slice(1)] });
});
function translateGridHeightToScreenHeight(gridHeight) {
  return gridHeight * (app_core_constants__WEBPACK_IMPORTED_MODULE_7__.GRID_CELL_HEIGHT + app_core_constants__WEBPACK_IMPORTED_MODULE_7__.GRID_CELL_VMARGIN) - app_core_constants__WEBPACK_IMPORTED_MODULE_7__.GRID_CELL_VMARGIN;
}
GrafanaGridItem.displayName = "GridItemWithDimensions";


/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/DashboardPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./public/app/features/dashboard/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanUpDashboardAndVariables: () => (/* binding */ cleanUpDashboardAndVariables),
/* harmony export */   importDashboard: () => (/* binding */ importDashboard),
/* harmony export */   removeDashboard: () => (/* binding */ removeDashboard),
/* harmony export */   updateTimeZoneDashboard: () => (/* binding */ updateTimeZoneDashboard),
/* harmony export */   updateWeekStartDashboard: () => (/* binding */ updateWeekStartDashboard)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_features_dashboard_api_dashboard_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/api/dashboard_api.ts");
/* harmony import */ var app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/live/dashboard/dashboardWatcher.ts");
/* harmony import */ var app_features_panel_state_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/panel/state/reducers.ts");
/* harmony import */ var app_features_profile_state_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/profile/state/reducers.ts");
/* harmony import */ var _plugins_admin_state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/admin/state/actions.ts");
/* harmony import */ var _variables_state_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/variables/state/actions.ts");
/* harmony import */ var _services_DashboardSrv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/dashboard/state/reducers.ts");













function importDashboard(data, dashboardTitle) {
  return async (dispatch) => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post("/api/dashboards/import", data);
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createSuccessNotification)("Dashboard Imported", dashboardTitle)));
    dispatch((0,_plugins_admin_state_actions__WEBPACK_IMPORTED_MODULE_7__.loadPluginDashboards)());
  };
}
function removeDashboard(uid) {
  return async (dispatch) => {
    await (0,app_features_dashboard_api_dashboard_api__WEBPACK_IMPORTED_MODULE_3__.getDashboardAPI)().deleteDashboard(uid, false);
    dispatch((0,_plugins_admin_state_actions__WEBPACK_IMPORTED_MODULE_7__.loadPluginDashboards)());
  };
}
const cleanUpDashboardAndVariables = () => (dispatch, getStore) => {
  const store = getStore();
  const dashboard = store.dashboard.getModel();
  if (dashboard) {
    dashboard.destroy();
    dispatch((0,_variables_state_actions__WEBPACK_IMPORTED_MODULE_8__.cancelVariables)(dashboard.uid));
  }
  (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_10__.getTimeSrv)().stopAutoRefresh();
  dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.cleanUpDashboard)());
  dispatch((0,app_features_panel_state_reducers__WEBPACK_IMPORTED_MODULE_5__.removeAllPanels)());
  app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_4__.dashboardWatcher.leave();
  (0,_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_9__.getDashboardSrv)().setCurrent(void 0);
};
const updateTimeZoneDashboard = (timeZone) => (dispatch) => {
  dispatch((0,app_features_profile_state_reducers__WEBPACK_IMPORTED_MODULE_6__.updateTimeZoneForSession)(timeZone));
  (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_10__.getTimeSrv)().refreshTimeModel();
};
const updateWeekStartDashboard = (weekStart) => (dispatch) => {
  dispatch((0,app_features_profile_state_reducers__WEBPACK_IMPORTED_MODULE_6__.updateWeekStartForSession)(weekStart));
  (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_10__.getTimeSrv)().refreshTimeModel();
};


/***/ }),

/***/ "./public/app/features/dashboard/state/initDashboard.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./public/app/features/dashboard/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPanelPluginWithFallback: () => (/* binding */ getPanelPluginWithFallback)
/* harmony export */ });
/* harmony import */ var _panel_components_PanelPluginError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/panel/components/PanelPluginError.tsx");


const getPanelPluginWithFallback = (panelType) => (state) => {
  const plugin = state.plugins.panels[panelType];
  return plugin || (0,_panel_components_PanelPluginError__WEBPACK_IMPORTED_MODULE_0__.getPanelPluginNotFound)(`Panel plugin not found (${panelType})`, true);
};


/***/ }),

/***/ "./public/app/features/dashboard/utils/getPanelChromeProps.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./public/app/features/inspector/InspectErrorTab.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InspectErrorTab: () => (/* binding */ InspectErrorTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/JSONFormatter/JSONFormatter.tsx");




const parseErrorMessage = (message) => {
  try {
    const [msg, json] = message.split(/(\{.+)/);
    const jsonError = JSON.parse(json);
    return {
      msg,
      json: jsonError
    };
  } catch {
    return { msg: message };
  }
};
function renderError(error) {
  if (error.data) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { children: error.data.message }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.JSONFormatter, { json: error, open: 2 })
    ] });
  }
  if (error.message) {
    const { msg, json } = parseErrorMessage(error.message);
    if (!json) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        error.status && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "inspector.inspect-error-tab.error-status-message", values: { errorStatus: error.status }, children: [
          "Status: ",
          "{{errorStatus}}",
          ". Message:"
        ] }),
        " ",
        msg,
        error.traceId != null && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "inspector.inspect-error-tab.error-trace-message", values: { errorTrace: error.traceId }, children: [
            "(Trace ID: ",
            "{{errorTrace}}",
            ")"
          ] })
        ] })
      ] });
    } else {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        msg !== "" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: msg }),
        error.status && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "inspector.inspect-error-tab.error-status-no-message", values: { errorStatus: error.status }, children: [
          "Status: ",
          "{{errorStatus}}"
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.JSONFormatter, { json, open: 5 })
      ] });
    }
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.JSONFormatter, { json: error, open: 2 });
}
const InspectErrorTab = ({ errors }) => {
  if (!errors?.length) {
    return null;
  }
  if (errors.length === 1) {
    return renderError(errors[0]);
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: errors.map((error, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, { title: error.refId || `Error ${index + 1}`, severity: "error", children: renderError(error) }, index)) });
};


/***/ }),

/***/ "./public/app/features/inspector/InspectJSONTab.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InspectJSONTab: () => (/* binding */ InspectJSONTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/types/legacyEvents.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var _dashboard_components_HelpWizard_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/dashboard/components/HelpWizard/utils.ts");
/* harmony import */ var _inspector_styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/inspector/styles.ts");
/* harmony import */ var _search_page_reporting__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/search/page/reporting.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/inspector/types.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/inspector/utils/utils.ts");


















var ShowContent = /* @__PURE__ */ ((ShowContent2) => {
  ShowContent2["PanelJSON"] = "panel";
  ShowContent2["PanelData"] = "data";
  ShowContent2["DataFrames"] = "frames";
  return ShowContent2;
})(ShowContent || {});
function InspectJSONTab({ panel, dashboard, data, onClose }) {
  const options = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => [
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.t)("dashboard.inspect-json.panel-json-label", "Panel JSON"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.t)(
          "dashboard.inspect-json.panel-json-description",
          "The model saved in the dashboard JSON that configures how everything works."
        ),
        value: "panel" /* PanelJSON */
      },
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.t)("dashboard.inspect-json.panel-data-label", "Panel data"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.t)(
          "dashboard.inspect-json.panel-data-description",
          "The raw model passed to the panel visualization"
        ),
        value: "data" /* PanelData */
      },
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.t)("dashboard.inspect-json.dataframe-label", "DataFrame JSON (from Query)"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.t)(
          "dashboard.inspect-json.dataframe-description",
          "Raw data without transformations and field config applied. "
        ),
        value: "frames" /* DataFrames */
      }
    ],
    []
  );
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.useStyles2)(_inspector_styles__WEBPACK_IMPORTED_MODULE_18__.getPanelInspectorStyles2);
  const jsonOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (panel) {
      if (panel.plugin?.meta.skipDataQuery) {
        return [options[0]];
      }
      return options;
    }
    return options.slice(1, options.length);
  }, [options, panel]);
  const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(panel ? "panel" /* PanelJSON */ : "frames" /* DataFrames */);
  const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(async () => {
    const v = await getJSONObject(show, panel, data);
    setText((0,_utils_utils__WEBPACK_IMPORTED_MODULE_21__.getPrettyJSON)(v));
  }, [show, panel, data]);
  const onApplyPanelModel = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    if (panel && dashboard && text) {
      try {
        if (!dashboard.meta.canEdit) {
          app_core_core__WEBPACK_IMPORTED_MODULE_16__.appEvents.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_6__.AppEvents.alertError, ["Unable to apply"]);
        } else {
          const updates = JSON.parse(text);
          dashboard.shouldUpdateDashboardPanelFromJSON(updates, panel);
          (0,_search_page_reporting__WEBPACK_IMPORTED_MODULE_19__.reportPanelInspectInteraction)(_types__WEBPACK_IMPORTED_MODULE_20__.InspectTab.JSON, "apply", {
            panel_type_changed: panel.type !== updates.type,
            panel_id_changed: panel.id !== updates.id,
            panel_grid_pos_changed: !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(panel.gridPos, updates.gridPos),
            panel_targets_changed: !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(panel.targets, updates.targets)
          });
          panel.restoreModel(updates);
          panel.configRev++;
          panel.refresh();
          app_core_core__WEBPACK_IMPORTED_MODULE_16__.appEvents.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_6__.AppEvents.alertSuccess, ["Panel model updated"]);
        }
      } catch (err) {
        console.error("Error applying updates", err);
        app_core_core__WEBPACK_IMPORTED_MODULE_16__.appEvents.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_6__.AppEvents.alertError, ["Invalid JSON text"]);
      }
      onClose();
    }
  }, [panel, dashboard, onClose, text]);
  const onShowHelpWizard = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    (0,_search_page_reporting__WEBPACK_IMPORTED_MODULE_19__.reportPanelInspectInteraction)(_types__WEBPACK_IMPORTED_MODULE_20__.InspectTab.JSON, "supportWizard");
    const queryParms = _grafana_runtime__WEBPACK_IMPORTED_MODULE_10__.locationService.getSearch();
    queryParms.set("inspectTab", _types__WEBPACK_IMPORTED_MODULE_20__.InspectTab.Help.toString());
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_10__.locationService.push("?" + queryParms.toString());
  }, []);
  const isPanelJSON = show === "panel" /* PanelJSON */;
  const canEdit = dashboard && dashboard.meta.canEdit;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.wrap, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.toolbar, "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_8__.selectors.components.PanelInspector.Json.content, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.t)("dashboard.inspect-json.select-source", "Select source"), className: "flex-grow-1", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Select,
        {
          inputId: "select-source-dropdown",
          options: jsonOptions,
          value: jsonOptions.find((v) => v.value === show) ?? jsonOptions[0].value,
          onChange: (v) => setShow(v.value)
        }
      ) }),
      panel && isPanelJSON && canEdit && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Button, { className: styles.toolbarItem, onClick: onApplyPanelModel, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.Trans, { i18nKey: "inspector.inspect-jsontab.apply", children: "Apply" }) }),
      show === "frames" /* DataFrames */ && dashboard !== void 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Button, { className: styles.toolbarItem, onClick: onShowHelpWizard, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.Trans, { i18nKey: "inspector.inspect-jsontab.support", children: "Support" }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.content, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__["default"], { disableWidth: true, children: ({ height }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.CodeEditor,
      {
        width: "100%",
        height,
        language: "json",
        showLineNumbers: true,
        showMiniMap: text.length > 100,
        value: text || "",
        readOnly: !isPanelJSON,
        onBlur: setText
      }
    ) }) })
  ] });
}
async function getJSONObject(show, panel, data) {
  if (show === "data" /* PanelData */) {
    (0,_search_page_reporting__WEBPACK_IMPORTED_MODULE_19__.reportPanelInspectInteraction)(_types__WEBPACK_IMPORTED_MODULE_20__.InspectTab.JSON, "panelData");
    return data;
  }
  if (show === "frames" /* DataFrames */) {
    (0,_search_page_reporting__WEBPACK_IMPORTED_MODULE_19__.reportPanelInspectInteraction)(_types__WEBPACK_IMPORTED_MODULE_20__.InspectTab.JSON, "dataFrame");
    let d = data;
    if (panel && data?.state === _grafana_data__WEBPACK_IMPORTED_MODULE_7__.LoadingState.Done) {
      d = await (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(
        panel.getQueryRunner().getData({
          withFieldConfig: false,
          withTransforms: false
        })
      );
    }
    return (0,_dashboard_components_HelpWizard_utils__WEBPACK_IMPORTED_MODULE_17__.getPanelDataFrames)(d);
  }
  if (show === "panel" /* PanelJSON */ && panel) {
    (0,_search_page_reporting__WEBPACK_IMPORTED_MODULE_19__.reportPanelInspectInteraction)(_types__WEBPACK_IMPORTED_MODULE_20__.InspectTab.JSON, "panelJSON");
    return panel.getSaveModel();
  }
  return { note: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.t)("dashboard.inspect-json.unknown", "Unknown Object: {{show}}", { show }) };
}


/***/ }),

/***/ "./public/app/features/inspector/InspectMetadataTab.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InspectMetadataTab: () => (/* binding */ InspectMetadataTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");



const InspectMetadataTab = ({ data, metadataDatasource }) => {
  if (!metadataDatasource || !metadataDatasource.components?.MetadataInspector) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "dashboard.inspect-meta.no-inspector", children: "No Metadata Inspector" });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(metadataDatasource.components.MetadataInspector, { datasource: metadataDatasource, data: data.series });
};


/***/ }),

/***/ "./public/app/features/library-panels/components/ChangeLibraryPanelModal/ChangeLibraryPanelModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeLibraryPanelModal: () => (/* binding */ ChangeLibraryPanelModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/library-panels/guard.ts");





const ChangeLibraryPanelModal = ({ onConfirm, onDismiss, panel }) => {
  const isLibraryPanel = (0,_guard__WEBPACK_IMPORTED_MODULE_3__.isPanelModelLibraryPanel)(panel);
  const title = `${isLibraryPanel ? "Changing" : "Replace with"} library panel`;
  const body = `${isLibraryPanel ? "Changing" : "Replacing with a"} library panel will remove any changes since last save.`;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmModal,
    {
      onConfirm,
      onDismiss,
      confirmText: isLibraryPanel ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("library-panels.change-library-panel-modal.confirmText-change", "Change") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("library-panels.change-library-panel-modal.confirmText-replace", "Replace"),
      title,
      body,
      dismissText: "Cancel",
      isOpen: true
    }
  );
};


/***/ }),

/***/ "./public/app/features/library-panels/components/PanelLibraryOptionsGroup/PanelLibraryOptionsGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelLibraryOptionsGroup: () => (/* binding */ PanelLibraryOptionsGroup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var app_features_panel_state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/panel/state/actions.ts");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _core_components_PanelTypeFilter_PanelTypeFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/PanelTypeFilter/PanelTypeFilter.tsx");
/* harmony import */ var _AddLibraryPanelModal_AddLibraryPanelModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/library-panels/components/AddLibraryPanelModal/AddLibraryPanelModal.tsx");
/* harmony import */ var _ChangeLibraryPanelModal_ChangeLibraryPanelModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/library-panels/components/ChangeLibraryPanelModal/ChangeLibraryPanelModal.tsx");
/* harmony import */ var _LibraryPanelsView_LibraryPanelsView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsView/LibraryPanelsView.tsx");













const PanelLibraryOptionsGroup = ({ panel, searchQuery }) => {
  const [showingAddPanelModal, setShowingAddPanelModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [changeToPanel, setChangeToPanel] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(void 0);
  const [panelFilter, setPanelFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const onPanelFilterChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (plugins) => {
      setPanelFilter(plugins.map((p) => p.id));
    },
    [setPanelFilter]
  );
  const dashboard = (0,app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_6__.getDashboardSrv)().getCurrent();
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  const useLibraryPanel = async () => {
    if (!changeToPanel) {
      return;
    }
    setChangeToPanel(void 0);
    dispatch((0,app_features_panel_state_actions__WEBPACK_IMPORTED_MODULE_7__.changeToLibraryPanel)(panel, changeToPanel));
  };
  const onAddToPanelLibrary = () => setShowingAddPanelModal(true);
  const onDismissChangeToPanel = () => setChangeToPanel(void 0);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", gap: 2, children: [
    !panel.libraryPanel && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { alignItems: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { icon: "plus", onClick: onAddToPanelLibrary, variant: "secondary", fullWidth: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "library-panels.panel-library-options-group.create-new-library-panel", children: "Create new library panel" }) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_core_components_PanelTypeFilter_PanelTypeFilter__WEBPACK_IMPORTED_MODULE_9__.PanelTypeFilter, { onChange: onPanelFilterChange }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.libraryPanelsView, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _LibraryPanelsView_LibraryPanelsView__WEBPACK_IMPORTED_MODULE_12__.LibraryPanelsView,
      {
        currentPanelId: panel.libraryPanel?.uid,
        searchString: searchQuery,
        panelFilter,
        onClickCard: setChangeToPanel,
        showSecondaryActions: true
      }
    ) }),
    showingAddPanelModal && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _AddLibraryPanelModal_AddLibraryPanelModal__WEBPACK_IMPORTED_MODULE_10__.AddLibraryPanelModal,
      {
        panel,
        onDismiss: () => setShowingAddPanelModal(false),
        initialFolderUid: dashboard?.meta.folderUid,
        isOpen: showingAddPanelModal
      }
    ),
    changeToPanel && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ChangeLibraryPanelModal_ChangeLibraryPanelModal__WEBPACK_IMPORTED_MODULE_11__.ChangeLibraryPanelModal, { panel, onDismiss: onDismissChangeToPanel, onConfirm: useLibraryPanel })
  ] });
};
const styles = {
  libraryPanelsView: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "100%"
  })
};


/***/ }),

/***/ "./public/app/features/library-panels/components/SaveLibraryPanelModal/SaveLibraryPanelModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveLibraryPanelModal: () => (/* binding */ SaveLibraryPanelModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _state_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/library-panels/state/api.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/library-panels/styles.ts");
/* harmony import */ var _utils_usePanelSave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/library-panels/utils/usePanelSave.ts");









const SaveLibraryPanelModal = ({
  panel,
  folderUid,
  isUnsavedPrompt,
  onDismiss,
  onConfirm,
  onDiscard
}) => {
  const [searchString, setSearchString] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const dashState = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(async () => {
    const searchHits = await (0,_state_api__WEBPACK_IMPORTED_MODULE_10__.getConnectedDashboards)(panel.libraryPanel.uid);
    if (searchHits && searchHits.length > 0) {
      return searchHits.map((dash) => dash.name);
    }
    return [];
  }, [panel.libraryPanel.uid]);
  const [filteredDashboards, setFilteredDashboards] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(
    () => {
      if (!dashState.value) {
        return setFilteredDashboards([]);
      }
      return setFilteredDashboards(
        dashState.value.filter((dashName) => dashName.toLowerCase().includes(searchString.toLowerCase()))
      );
    },
    300,
    [dashState.value, searchString]
  );
  const { saveLibraryPanel } = (0,_utils_usePanelSave__WEBPACK_IMPORTED_MODULE_12__.usePanelSave)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_11__.getModalStyles);
  const discardAndClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    onDiscard();
  }, [onDiscard]);
  const title = isUnsavedPrompt ? "Unsaved library panel changes" : "Save library panel";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Modal, { title, icon: "save", onDismiss, isOpen: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { className: styles.textInfo, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans,
        {
          i18nKey: "library-panels.save-library-panel-modal.num-affected",
          count: panel.libraryPanel.meta?.connectedDashboards,
          children: [
            "This update will affect ",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", { children: [
              "{{count}}",
              " dashboards."
            ] })
          ]
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "library-panels.save-library-panel-modal.affected-dashboards", children: "The following dashboards using the panel will be affected:" })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
      {
        className: styles.dashboardSearch,
        prefix: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "search" }),
        placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "library-panels.save-library-panel-modal.placeholder-search-affected-dashboards",
          "Search affected dashboards"
        ),
        value: searchString,
        onChange: (e) => setSearchString(e.currentTarget.value)
      }
    ),
    dashState.loading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "library-panels.save-library-panel-modal.loading-connected-dashboards", children: "Loading connected dashboards..." }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: styles.myTable, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "library-panels.save-library-panel-modal.dashboard-name", children: "Dashboard name" }) }) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: filteredDashboards.map((dashName, i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: dashName }) }, `dashrow-${i}`)) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Modal.ButtonRow, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { variant: "secondary", onClick: onDismiss, fill: "outline", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "library-panels.save-library-panel-modal.cancel", children: "Cancel" }) }),
      isUnsavedPrompt && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { variant: "destructive", onClick: discardAndClose, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "library-panels.save-library-panel-modal.discard", children: "Discard" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
        {
          onClick: () => {
            saveLibraryPanel(panel, folderUid).then(() => {
              onConfirm();
            });
          },
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "library-panels.save-library-panel-modal.update-all", children: "Update all" })
        }
      )
    ] })
  ] }) });
};


/***/ }),

/***/ "./public/app/features/panel/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPanelStateForModel: () => (/* binding */ getPanelStateForModel)
/* harmony export */ });

function getPanelStateForModel(state, model) {
  return state.panels[model.key];
}


/***/ }),

/***/ "./public/app/features/provisioning/Wizard/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RepoTypeDisplay: () => (/* binding */ RepoTypeDisplay)
/* harmony export */ });

const RepoTypeDisplay = {
  github: "GitHub",
  gitlab: "GitLab",
  bitbucket: "Bitbucket",
  git: "Git",
  local: "Local"
};


/***/ }),

/***/ "./public/app/features/provisioning/components/Dashboards/DashboardPreviewBanner.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardPreviewBanner: () => (/* binding */ DashboardPreviewBanner),
/* harmony export */   commonAlertProps: () => (/* binding */ commonAlertProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var app_features_provisioning_hooks_usePullRequestParam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/provisioning/hooks/usePullRequestParam.ts");
/* harmony import */ var app_types_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/types/dashboard.ts");
/* harmony import */ var _hooks_useGetResourceRepositoryView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/provisioning/hooks/useGetResourceRepositoryView.ts");
/* harmony import */ var _Shared_PreviewBannerViewPR__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/provisioning/components/Shared/PreviewBannerViewPR.tsx");










const commonAlertProps = {
  severity: "info",
  style: { flex: 0 }
};
function DashboardPreviewBannerContent({ queryParams, slug, path }) {
  const { prURL } = (0,app_features_provisioning_hooks_usePullRequestParam__WEBPACK_IMPORTED_MODULE_5__.usePullRequestParam)();
  const file = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_4__.useGetRepositoryFilesWithPathQuery)({ name: slug, path, ref: queryParams.ref });
  const { repository } = (0,_hooks_useGetResourceRepositoryView__WEBPACK_IMPORTED_MODULE_7__.useGetResourceRepositoryView)({ name: slug });
  const targetRef = file.data?.ref;
  const repoBaseUrl = file.data?.urls?.repositoryURL;
  const branchInfo = {
    targetBranch: targetRef,
    configuredBranch: repository?.branch,
    repoBaseUrl
  };
  if (file.data?.errors) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("dashboard-scene.dashboard-preview-banner.title-error-loading-dashboard", "Error loading dashboard"),
        severity: "error",
        style: { flex: 0 },
        children: file.data.errors.map((error, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: error }, index))
      }
    );
  }
  if (prURL?.length) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_PreviewBannerViewPR__WEBPACK_IMPORTED_MODULE_8__.PreviewBannerViewPR, { prParam: prURL, branchInfo });
  }
  const prOrCompareUrl = file.data?.urls?.newPullRequestURL ?? file.data?.urls?.compareURL;
  if (prOrCompareUrl) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_PreviewBannerViewPR__WEBPACK_IMPORTED_MODULE_8__.PreviewBannerViewPR, { prParam: prOrCompareUrl, isNewPr: true, branchInfo });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert,
    {
      ...commonAlertProps,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "dashboard-scene.dashboard-preview-banner.title-dashboard-loaded-external-repository",
        "This dashboard is loaded from an external repository"
      ),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "dashboard-scene.dashboard-preview-banner.not-yet-saved", children: "The value is not saved in the Grafana database" })
    }
  );
}
function DashboardPreviewBanner({ queryParams, route, slug, path }) {
  const provisioningEnabled = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.provisioning;
  if (!provisioningEnabled || "kiosk" in queryParams || !path || route !== app_types_dashboard__WEBPACK_IMPORTED_MODULE_6__.DashboardRoutes.Provisioning || !slug) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DashboardPreviewBannerContent, { queryParams, slug, path });
}


/***/ }),

/***/ "./public/app/features/provisioning/components/Shared/PreviewBannerViewPR.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreviewBannerViewPR: () => (/* binding */ PreviewBannerViewPR),
/* harmony export */   isValidRepoType: () => (/* binding */ isValidRepoType)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/text/sanitize.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_features_provisioning_Wizard_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/provisioning/Wizard/types.ts");
/* harmony import */ var app_features_provisioning_hooks_usePullRequestParam__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/provisioning/hooks/usePullRequestParam.ts");
/* harmony import */ var _Dashboards_DashboardPreviewBanner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/provisioning/components/Dashboards/DashboardPreviewBanner.tsx");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/provisioning/components/utils/url.ts");









function PreviewBannerViewPR({ prParam, isNewPr, behindBranch, repoUrl, branchInfo }) {
  const { repoType } = (0,app_features_provisioning_hooks_usePullRequestParam__WEBPACK_IMPORTED_MODULE_9__.usePullRequestParam)();
  const { targetBranch, configuredBranch, repoBaseUrl } = branchInfo || {};
  const capitalizedRepoType = isValidRepoType(repoType) ? app_features_provisioning_Wizard_types__WEBPACK_IMPORTED_MODULE_8__.RepoTypeDisplay[repoType] : "repository";
  const titleText = isNewPr ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
    "provisioned-resource-preview-banner.title-created-branch-in-repo",
    "A new resource has been created in a branch in {{repoType}}.",
    {
      repoType: capitalizedRepoType
    }
  ) : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
    "provisioned-resource-preview-banner.title-loaded-pull-request-in-repo",
    "This resource is loaded from the branch you just created in {{repoType}} and it is only visible to you",
    {
      repoType: capitalizedRepoType
    }
  );
  if (behindBranch) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert,
      {
        ..._Dashboards_DashboardPreviewBanner__WEBPACK_IMPORTED_MODULE_10__.commonAlertProps,
        buttonContent: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { alignItems: "center", children: [
          (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioned-resource-preview-banner.preview-banner.open-in-repo-button", "Open in {{repoType}}", {
            repoType: capitalizedRepoType
          }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "external-link-alt" })
        ] }),
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "provisioned-resource-preview-banner.preview-banner.behind-branch-text",
          "This resource is behind the branch in {{repoType}}.",
          {
            repoType: capitalizedRepoType
          }
        ),
        onRemove: repoUrl ? () => window.open(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.textUtil.sanitizeUrl(repoUrl), "_blank") : void 0,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans,
          {
            i18nKey: "provisioned-resource-preview-banner.preview-banner.view-in-repo-button",
            values: { repoType: capitalizedRepoType },
            children: [
              "View it in ",
              { repoType },
              " to see the latest changes."
            ]
          }
        )
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert,
    {
      ..._Dashboards_DashboardPreviewBanner__WEBPACK_IMPORTED_MODULE_10__.commonAlertProps,
      title: titleText,
      buttonContent: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { alignItems: "center", children: [
        isNewPr ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "provisioned-resource-preview-banner.preview-banner.open-pull-request-in-repo",
          "Open pull request in {{repoType}}",
          { repoType: capitalizedRepoType }
        ) : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "provisioned-resource-preview-banner.preview-banner.view-pull-request-in-repo",
          "View pull request in {{repoType}}",
          { repoType: capitalizedRepoType }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "external-link-alt" })
      ] }),
      onRemove: prParam ? () => window.open(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.textUtil.sanitizeUrl(prParam), "_blank") : void 0,
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioned-resource-preview-banner.preview-banner.not-saved", children: "The rest of Grafana users in your organization will still see the current version saved to configured default branch until this branch is merged" }),
        showBranchInfo(repoType, branchInfo) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Box, { marginTop: 1, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioned-resource-preview-banner.preview-banner.branch-text", children: "branch: " }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TextLink, { href: (0,_utils_url__WEBPACK_IMPORTED_MODULE_11__.getBranchUrl)(repoBaseUrl, targetBranch, repoType), children: targetBranch }),
          " ",
          "\u2192",
          " ",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TextLink, { href: (0,_utils_url__WEBPACK_IMPORTED_MODULE_11__.getBranchUrl)(repoBaseUrl, configuredBranch, repoType), children: configuredBranch })
        ] })
      ]
    }
  );
}
function isValidRepoType(repoType) {
  if (typeof repoType !== "string") {
    return false;
  }
  return repoType in app_features_provisioning_Wizard_types__WEBPACK_IMPORTED_MODULE_8__.RepoTypeDisplay;
}
function showBranchInfo(repoType, branchInfo) {
  const { targetBranch, configuredBranch, repoBaseUrl } = branchInfo || {};
  return repoType !== "local" && !!targetBranch && !!configuredBranch && !!repoBaseUrl;
}


/***/ }),

/***/ "./public/app/features/provisioning/components/utils/url.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBranchUrl: () => (/* binding */ getBranchUrl)
/* harmony export */ });

const getBranchUrl = (baseUrl, branch, repoType) => {
  if (repoType === "local") {
    return "";
  }
  switch (repoType) {
    case "github":
      return `${baseUrl}/tree/${branch}`;
    case "gitlab":
      return `${baseUrl}/-/tree/${branch}`;
    case "bitbucket":
      return `${baseUrl}/src/${branch}`;
    default:
      return "";
  }
};


/***/ }),

/***/ "./public/app/features/provisioning/hooks/usePullRequestParam.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePullRequestParam: () => (/* binding */ usePullRequestParam)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/text/sanitize.ts");
/* harmony import */ var app_core_navigation_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/navigation/hooks.ts");



const usePullRequestParam = () => {
  const [params] = (0,app_core_navigation_hooks__WEBPACK_IMPORTED_MODULE_1__.useUrlParams)();
  const prParam = params.get("pull_request_url");
  const newPrParam = params.get("new_pull_request_url");
  const repoUrl = params.get("repo_url");
  const repoType = params.get("repo_type");
  return {
    prURL: prParam ? _grafana_data__WEBPACK_IMPORTED_MODULE_0__.textUtil.sanitizeUrl(prParam) : void 0,
    newPrURL: newPrParam ? _grafana_data__WEBPACK_IMPORTED_MODULE_0__.textUtil.sanitizeUrl(newPrParam) : void 0,
    repoURL: repoUrl ? _grafana_data__WEBPACK_IMPORTED_MODULE_0__.textUtil.sanitizeUrl(repoUrl) : void 0,
    repoType: repoType ? _grafana_data__WEBPACK_IMPORTED_MODULE_0__.textUtil.sanitizeUrl(repoType) : void 0
  };
};


/***/ }),

/***/ "./public/app/features/variables/editor/ConfirmDeleteModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmDeleteModal: () => (/* binding */ ConfirmDeleteModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");





function ConfirmDeleteModal({ varName, isOpen = false, onConfirm, onDismiss }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ConfirmModal,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("variables.confirm-delete-modal.title-delete-variable", "Delete variable"),
      isOpen,
      onConfirm,
      onDismiss,
      body: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "variables.confirm-delete-modal.body-delete-variable",
        'Are you sure you want to delete variable "{{variableToDelete}}"?',
        { variableToDelete: varName }
      ),
      modalClass: styles.modal,
      confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("variables.confirm-delete-modal.confirmText-delete", "Delete")
    }
  );
}
const styles = {
  modal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "max-content",
    maxWidth: "80vw"
  })
};


/***/ }),

/***/ "./public/app/features/variables/editor/VariableEditorContainer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariableEditorContainer: () => (/* binding */ VariableEditorContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/redux/dist/redux.mjs");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _inspect_VariablesUnknownTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/variables/inspect/VariablesUnknownTable.tsx");
/* harmony import */ var _state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/variables/state/keyedVariablesReducer.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/variables/state/selectors.ts");
/* harmony import */ var _state_sharedReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/variables/state/sharedReducer.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var _ConfirmDeleteModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/variables/editor/ConfirmDeleteModal.tsx");
/* harmony import */ var _VariableEditorEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/variables/editor/VariableEditorEditor.tsx");
/* harmony import */ var _VariableEditorList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/variables/editor/VariableEditorList.tsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/variables/editor/actions.ts");
















const mapStateToProps = (state, ownProps) => {
  const { uid } = ownProps.dashboard;
  const templatingState = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_8__.getVariablesState)(uid, state);
  return {
    variables: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_8__.getEditorVariables)(uid, state),
    idInEditor: templatingState.editor.id,
    usagesNetwork: templatingState.inspect.usagesNetwork,
    usages: templatingState.inspect.usages
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    ...(0,redux__WEBPACK_IMPORTED_MODULE_3__.bindActionCreators)({ createNewVariable: _actions__WEBPACK_IMPORTED_MODULE_14__.createNewVariable, initListMode: _actions__WEBPACK_IMPORTED_MODULE_14__.initListMode }, dispatch),
    changeVariableOrder: (identifier, fromIndex, toIndex) => dispatch(
      (0,_state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_7__.toKeyedAction)(
        identifier.rootStateKey,
        (0,_state_sharedReducer__WEBPACK_IMPORTED_MODULE_9__.changeVariableOrder)((0,_utils__WEBPACK_IMPORTED_MODULE_10__.toVariablePayload)(identifier, { fromIndex, toIndex }))
      )
    ),
    duplicateVariable: (identifier) => dispatch(
      (0,_state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_7__.toKeyedAction)(
        identifier.rootStateKey,
        (0,_state_sharedReducer__WEBPACK_IMPORTED_MODULE_9__.duplicateVariable)((0,_utils__WEBPACK_IMPORTED_MODULE_10__.toVariablePayload)(identifier, { newId: void 0 }))
      )
    ),
    removeVariable: (identifier) => {
      dispatch(
        (0,_state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_7__.toKeyedAction)(identifier.rootStateKey, (0,_state_sharedReducer__WEBPACK_IMPORTED_MODULE_9__.removeVariable)((0,_utils__WEBPACK_IMPORTED_MODULE_10__.toVariablePayload)(identifier, { reIndex: true })))
      );
    }
  };
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);
class VariableEditorContainerUnconnected extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      variableId: void 0
    };
    this.onEditVariable = (identifier) => {
      const index = this.props.variables.findIndex((x) => x.id === identifier.id);
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.locationService.partial({ editIndex: index });
    };
    this.onNewVariable = () => {
      this.props.createNewVariable(this.props.dashboard.uid);
    };
    this.onChangeVariableOrder = (identifier, fromIndex, toIndex) => {
      this.props.changeVariableOrder(identifier, fromIndex, toIndex);
    };
    this.onDuplicateVariable = (identifier) => {
      this.props.duplicateVariable(identifier);
    };
    this.onModalOpen = (identifier) => {
      this.setState({ variableId: identifier });
    };
    this.onModalClose = () => {
      this.setState({ variableId: void 0 });
    };
    this.onRemoveVariable = () => {
      this.props.removeVariable(this.state.variableId);
      this.onModalClose();
    };
  }
  componentDidMount() {
    this.props.initListMode(this.props.dashboard.uid);
  }
  render() {
    const { editIndex, variables, sectionNav } = this.props;
    const variableToEdit = editIndex != null ? variables[editIndex] : void 0;
    const node = sectionNav.node;
    const parentItem = node.parentItem;
    const subPageNav = variableToEdit ? { text: variableToEdit.name, parentItem } : parentItem;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__.Page, { navModel: this.props.sectionNav, pageNav: subPageNav, children: [
      !variableToEdit && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _VariableEditorList__WEBPACK_IMPORTED_MODULE_13__.VariableEditorList,
        {
          variables: this.props.variables,
          onAdd: this.onNewVariable,
          onEdit: this.onEditVariable,
          onChangeOrder: this.onChangeVariableOrder,
          onDuplicate: this.onDuplicateVariable,
          onDelete: this.onModalOpen,
          usages: this.props.usages,
          usagesNetwork: this.props.usagesNetwork
        }
      ),
      !variableToEdit && this.props.variables.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_inspect_VariablesUnknownTable__WEBPACK_IMPORTED_MODULE_6__.VariablesUnknownTable, { variables: this.props.variables, dashboard: this.props.dashboard }),
      variableToEdit && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VariableEditorEditor__WEBPACK_IMPORTED_MODULE_12__.VariableEditorEditor, { identifier: (0,_utils__WEBPACK_IMPORTED_MODULE_10__.toKeyedVariableIdentifier)(variableToEdit) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _ConfirmDeleteModal__WEBPACK_IMPORTED_MODULE_11__.ConfirmDeleteModal,
        {
          isOpen: this.state.variableId !== void 0,
          varName: this.state.variableId?.id ?? "",
          onConfirm: this.onRemoveVariable,
          onDismiss: this.onModalClose
        }
      )
    ] });
  }
}
const VariableEditorContainer = connector(VariableEditorContainerUnconnected);


/***/ }),

/***/ "./public/app/features/variables/editor/VariableEditorEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariableEditorEditor: () => (/* binding */ VariableEditorEditor),
/* harmony export */   VariableEditorEditorUnConnected: () => (/* binding */ VariableEditorEditorUnConnected)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/redux/dist/redux.mjs");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _dashboard_scene_settings_variables_components_VariableHideSelect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/dashboard-scene/settings/variables/components/VariableHideSelect.tsx");
/* harmony import */ var _dashboard_scene_settings_variables_components_VariableLegend__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/dashboard-scene/settings/variables/components/VariableLegend.tsx");
/* harmony import */ var _dashboard_scene_settings_variables_components_VariableTextAreaField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/dashboard-scene/settings/variables/components/VariableTextAreaField.tsx");
/* harmony import */ var _dashboard_scene_settings_variables_components_VariableTextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/dashboard-scene/settings/variables/components/VariableTextField.tsx");
/* harmony import */ var _dashboard_scene_settings_variables_components_VariableValuesPreview__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/dashboard-scene/settings/variables/components/VariableValuesPreview.tsx");
/* harmony import */ var _adapters__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/variables/adapters.ts");
/* harmony import */ var _guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/variables/guard.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/variables/state/actions.ts");
/* harmony import */ var _state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/variables/state/keyedVariablesReducer.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/variables/state/selectors.ts");
/* harmony import */ var _state_sharedReducer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/variables/state/sharedReducer.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var _ConfirmDeleteModal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/variables/editor/ConfirmDeleteModal.tsx");
/* harmony import */ var _VariableTypeSelect__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/variables/editor/VariableTypeSelect.tsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/variables/editor/actions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/variables/editor/types.ts");



























const mapStateToProps = (state, ownProps) => ({
  editor: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_22__.getVariablesState)(ownProps.identifier.rootStateKey, state).editor,
  variable: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_22__.getVariable)(ownProps.identifier, state)
});
const mapDispatchToProps = (dispatch) => {
  return {
    ...(0,redux__WEBPACK_IMPORTED_MODULE_4__.bindActionCreators)({ variableEditorMount: _actions__WEBPACK_IMPORTED_MODULE_27__.variableEditorMount, variableEditorUnMount: _actions__WEBPACK_IMPORTED_MODULE_27__.variableEditorUnMount, changeVariableName: _actions__WEBPACK_IMPORTED_MODULE_27__.changeVariableName, updateOptions: _state_actions__WEBPACK_IMPORTED_MODULE_20__.updateOptions }, dispatch),
    changeVariableProp: (identifier, propName, propValue) => dispatch(
      (0,_state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_21__.toKeyedAction)(
        identifier.rootStateKey,
        (0,_state_sharedReducer__WEBPACK_IMPORTED_MODULE_23__.changeVariableProp)((0,_utils__WEBPACK_IMPORTED_MODULE_24__.toVariablePayload)(identifier, { propName, propValue }))
      )
    ),
    changeVariableType: (identifier, newType) => dispatch((0,_state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_21__.toKeyedAction)(identifier.rootStateKey, (0,_state_sharedReducer__WEBPACK_IMPORTED_MODULE_23__.changeVariableType)((0,_utils__WEBPACK_IMPORTED_MODULE_24__.toVariablePayload)(identifier, { newType })))),
    removeVariable: (identifier) => {
      dispatch(
        (0,_state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_21__.toKeyedAction)(identifier.rootStateKey, (0,_state_sharedReducer__WEBPACK_IMPORTED_MODULE_23__.removeVariable)((0,_utils__WEBPACK_IMPORTED_MODULE_24__.toVariablePayload)(identifier, { reIndex: true })))
      );
    }
  };
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps);
class VariableEditorEditorUnConnected extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      showDeleteModal: false
    };
    this.onNameChange = (event) => {
      event.preventDefault();
      this.props.changeVariableName(this.props.identifier, event.currentTarget.value);
    };
    this.onTypeChange = (option) => {
      if (!option.value) {
        return;
      }
      this.props.changeVariableType(this.props.identifier, option.value);
    };
    this.onLabelChange = (event) => {
      event.preventDefault();
      this.props.changeVariableProp(this.props.identifier, "label", event.currentTarget.value);
    };
    this.onDescriptionChange = (event) => {
      this.props.changeVariableProp(this.props.identifier, "description", event.currentTarget.value);
    };
    this.onHideChange = (option) => {
      this.props.changeVariableProp(this.props.identifier, "hide", option);
    };
    this.onPropChanged = ({ propName, propValue, updateOptions: updateOptions2 = false }) => {
      this.props.changeVariableProp(this.props.identifier, propName, propValue);
      if (updateOptions2) {
        this.props.updateOptions((0,_utils__WEBPACK_IMPORTED_MODULE_24__.toKeyedVariableIdentifier)(this.props.variable));
      }
    };
    this.onHandleSubmit = async (event) => {
      event.preventDefault();
      if (!this.props.editor.isValid) {
        return;
      }
      this.props.updateOptions((0,_utils__WEBPACK_IMPORTED_MODULE_24__.toKeyedVariableIdentifier)(this.props.variable));
    };
    this.onModalOpen = () => {
      this.setState({ showDeleteModal: true });
    };
    this.onModalClose = () => {
      this.setState({ showDeleteModal: false });
    };
    this.onDelete = () => {
      this.props.removeVariable(this.props.identifier);
      this.onModalClose();
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.locationService.partial({ editIndex: null });
    };
    this.onApply = () => {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.locationService.partial({ editIndex: null });
    };
    this.getVariableOptions = () => {
      const { variable } = this.props;
      if (!(0,_guard__WEBPACK_IMPORTED_MODULE_19__.hasOptions)(variable)) {
        return [];
      }
      return variable.options.map((option) => ({ label: String(option.text), value: String(option.value) }));
    };
  }
  componentDidMount() {
    this.props.variableEditorMount(this.props.identifier);
  }
  componentWillUnmount() {
    this.props.variableEditorUnMount(this.props.identifier);
  }
  render() {
    const { theme, variable } = this.props;
    const EditorToRender = _adapters__WEBPACK_IMPORTED_MODULE_18__.variableAdapters.get(this.props.variable.type).editor;
    if (!EditorToRender) {
      return null;
    }
    const loading = variable.state === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.LoadingState.Loading;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const styles = getStyles(theme);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        "form",
        {
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)(
            "variables.variable-editor-editor-un-connected.aria-label-variable-editor-form",
            "Variable editor Form"
          ),
          onSubmit: this.onHandleSubmit,
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VariableTypeSelect__WEBPACK_IMPORTED_MODULE_26__.VariableTypeSelect, { onChange: this.onTypeChange, type: this.props.variable.type }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dashboard_scene_settings_variables_components_VariableLegend__WEBPACK_IMPORTED_MODULE_14__.VariableLegend, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "variables.variable-editor-editor-un-connected.general", children: "General" }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _dashboard_scene_settings_variables_components_VariableTextField__WEBPACK_IMPORTED_MODULE_16__.VariableTextField,
              {
                value: this.props.editor.name,
                onChange: this.onNameChange,
                name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("variables.variable-editor-editor-un-connected.name-name", "Name"),
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("variables.variable-editor-editor-un-connected.placeholder-variable-name", "Variable name"),
                description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)(
                  "variables.variable-editor-editor-un-connected.description-template-variable-characters",
                  "The name of the template variable. (Max. 50 characters)"
                ),
                invalid: !!this.props.editor.errors.name,
                error: this.props.editor.errors.name,
                testId: _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_6__.selectors.pages.Dashboard.Settings.Variables.Edit.General.generalNameInputV2,
                maxLength: _types__WEBPACK_IMPORTED_MODULE_28__.VariableNameConstraints.MaxSize,
                required: true
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _dashboard_scene_settings_variables_components_VariableTextField__WEBPACK_IMPORTED_MODULE_16__.VariableTextField,
              {
                name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("variables.variable-editor-editor-un-connected.name-label", "Label"),
                description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)(
                  "variables.variable-editor-editor-un-connected.description-optional-display-name",
                  "Optional display name"
                ),
                value: this.props.variable.label ?? "",
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("variables.variable-editor-editor-un-connected.placeholder-label-name", "Label name"),
                onChange: this.onLabelChange,
                testId: _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_6__.selectors.pages.Dashboard.Settings.Variables.Edit.General.generalLabelInputV2
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _dashboard_scene_settings_variables_components_VariableTextAreaField__WEBPACK_IMPORTED_MODULE_15__.VariableTextAreaField,
              {
                name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("variables.variable-editor-un-connected.name-description", "Description"),
                value: variable.description ?? "",
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)(
                  "variables.variable-editor-editor-un-connected.placeholder-descriptive-text",
                  "Descriptive text"
                ),
                onChange: this.onDescriptionChange,
                width: 52
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _dashboard_scene_settings_variables_components_VariableHideSelect__WEBPACK_IMPORTED_MODULE_13__.VariableHideSelect,
              {
                onChange: this.onHideChange,
                hide: this.props.variable.hide,
                type: this.props.variable.type
              }
            ),
            EditorToRender && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EditorToRender, { variable: this.props.variable, onPropChange: this.onPropChanged }),
            (0,_guard__WEBPACK_IMPORTED_MODULE_19__.hasOptions)(this.props.variable) ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dashboard_scene_settings_variables_components_VariableValuesPreview__WEBPACK_IMPORTED_MODULE_17__.VariableValuesPreview, { options: this.getVariableOptions() }) : null,
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginTop: "16px" }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { gap: 2, height: "inherit", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button, { variant: "destructive", fill: "outline", onClick: this.onModalOpen, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "variables.variable-editor-editor-un-connected.delete", children: "Delete" }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button,
                {
                  type: "submit",
                  "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_6__.selectors.pages.Dashboard.Settings.Variables.Edit.General.submitButton,
                  disabled: loading,
                  variant: "secondary",
                  children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "variables.variable-editor-editor-un-connected.run-query", children: "Run query" }),
                    loading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Icon,
                      {
                        className: styles.spin,
                        name: prefersReducedMotion ? "hourglass" : "sync",
                        size: "sm",
                        style: { marginLeft: "2px" }
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button,
                {
                  variant: "primary",
                  onClick: this.onApply,
                  "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_6__.selectors.pages.Dashboard.Settings.Variables.Edit.General.applyButton,
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "variables.variable-editor-editor-un-connected.apply", children: "Apply" })
                }
              )
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _ConfirmDeleteModal__WEBPACK_IMPORTED_MODULE_25__.ConfirmDeleteModal,
        {
          isOpen: this.state.showDeleteModal,
          varName: this.props.editor.name,
          onConfirm: this.onDelete,
          onDismiss: this.onModalClose
        }
      )
    ] });
  }
}
const VariableEditorEditor = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.withTheme2)(connector(VariableEditorEditorUnConnected));
const spin = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.keyframes)({
  "0%": {
    transform: "rotate(0deg) scaleX(-1)"
    // scaleX flips the `sync` icon so arrows point the correct way
  },
  "100%": {
    transform: "rotate(359deg) scaleX(-1)"
  }
});
const getStyles = (theme) => {
  return {
    spin: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      [theme.transitions.handleMotion("no-preference")]: {
        animation: `${spin} 3s linear infinite`
      }
    })
  };
};


/***/ }),

/***/ "./public/app/features/variables/editor/VariableEditorList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariableEditorList: () => (/* binding */ VariableEditorList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@hello-pangea/dnd/dist/dnd.esm.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _inspect_VariablesDependenciesButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/variables/inspect/VariablesDependenciesButton.tsx");
/* harmony import */ var _VariableEditorListRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/variables/editor/VariableEditorListRow.tsx");










function VariableEditorList({
  variables,
  usages,
  usagesNetwork,
  onChangeOrder,
  onAdd,
  onEdit,
  onDelete,
  onDuplicate
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useStyles2)(getStyles);
  const onDragEnd = (result) => {
    if (!result.destination || !result.source) {
      return;
    }
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)("Variable drag and drop");
    const identifier = JSON.parse(result.draggableId);
    onChangeOrder(identifier, variables[result.source.index].index, variables[result.destination.index].index);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    variables.length === 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EmptyVariablesList, { onAdd }),
    variables.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "column", gap: 4, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.tableContainer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        "table",
        {
          className: "filter-table filter-table--hover",
          "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.Dashboard.Settings.Variables.List.table,
          role: "grid",
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "variables.variable-editor-list.variable", children: "Variable" }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "variables.variable-editor-list.definition", children: "Definition" }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { colSpan: 5 })
            ] }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_2__.DragDropContext, { onDragEnd, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_2__.Droppable, { droppableId: "variables-list", direction: "vertical", children: (provided) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", { ref: provided.innerRef, ...provided.droppableProps, children: [
              variables.map((variable, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _VariableEditorListRow__WEBPACK_IMPORTED_MODULE_12__.VariableEditorListRow,
                {
                  index,
                  variable,
                  usageTree: usages,
                  usagesNetwork,
                  onDelete,
                  onDuplicate,
                  onEdit
                },
                `${variable.name}-${index}`
              )),
              provided.placeholder
            ] }) }) })
          ]
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_inspect_VariablesDependenciesButton__WEBPACK_IMPORTED_MODULE_11__.VariablesDependenciesButton, { variables }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
          {
            "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.Dashboard.Settings.Variables.List.newButton,
            onClick: onAdd,
            icon: "plus",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "variables.variable-editor-list.new-variable", children: "New variable" })
          }
        )
      ] })
    ] })
  ] }) });
}
function EmptyVariablesList({ onAdd }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "column", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.EmptyState,
    {
      variant: "call-to-action",
      button: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
        {
          "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.CallToActionCard.buttonV2("Add variable"),
          icon: "calculator-alt",
          onClick: onAdd,
          size: "lg",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "variables.empty-state.button-title", children: "Add variable" })
        }
      ),
      message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("variables.empty-state.title", "There are no variables added yet"),
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "variables.empty-state.info-box-content", children: "Variables enable more interactive and dynamic dashboards. Instead of hard-coding things like server or sensor names in your metric queries you can use variables in their place. Variables are shown as list boxes at the top of the dashboard. These drop-down lists make it easy to change the data being displayed in your dashboard." }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "variables.empty-state.info-box-content-2", children: [
          "Check out the",
          " ",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.TextLink, { external: true, href: "https://grafana.com/docs/grafana/latest/variables/", children: "Templates and variables documentation" }),
          " ",
          "for more information."
        ] })
      ]
    }
  ) });
}
const getStyles = () => ({
  tableContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    overflow: "scroll",
    width: "100%"
  })
});


/***/ }),

/***/ "./public/app/features/variables/editor/VariableEditorListRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariableEditorListRow: () => (/* binding */ VariableEditorListRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@hello-pangea/dnd/dist/dnd.esm.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/variables/guard.ts");
/* harmony import */ var _inspect_VariableUsagesButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/variables/inspect/VariableUsagesButton.tsx");
/* harmony import */ var _inspect_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/variables/inspect/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/variables/utils.ts");












function VariableEditorListRow({
  index,
  variable,
  usageTree,
  usagesNetwork,
  onEdit: propsOnEdit,
  onDuplicate: propsOnDuplicate,
  onDelete: propsOnDelete
}) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useTheme2)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  const definition = getDefinition(variable);
  const usages = (0,_inspect_utils__WEBPACK_IMPORTED_MODULE_12__.getVariableUsages)(variable.id, usageTree);
  const passed = usages > 0 || variable.type === "adhoc";
  const identifier = (0,_utils__WEBPACK_IMPORTED_MODULE_13__.toKeyedVariableIdentifier)(variable);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_2__.Draggable, { draggableId: JSON.stringify(identifier), index, children: (provided, snapshot) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    "tr",
    {
      ref: provided.innerRef,
      ...provided.draggableProps,
      style: {
        userSelect: snapshot.isDragging ? "none" : "auto",
        background: snapshot.isDragging ? theme.colors.background.secondary : void 0,
        ...provided.draggableProps.style
      },
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { role: "gridcell", className: styles.column, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button,
          {
            size: "xs",
            fill: "text",
            onClick: (event) => {
              event.preventDefault();
              propsOnEdit(identifier);
            },
            className: styles.nameLink,
            "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.Dashboard.Settings.Variables.List.tableRowNameFields(variable.name),
            children: variable.name
          }
        ) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          "td",
          {
            role: "gridcell",
            className: styles.definitionColumn,
            onClick: (event) => {
              event.preventDefault();
              propsOnEdit(identifier);
            },
            "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.Dashboard.Settings.Variables.List.tableRowDefinitionFields(variable.name),
            children: definition
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { role: "gridcell", className: styles.column, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.icons, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(VariableCheckIndicator, { passed }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_inspect_VariableUsagesButton__WEBPACK_IMPORTED_MODULE_11__.VariableUsagesButton, { id: variable.id, isAdhoc: variable.type === "adhoc", usages: usagesNetwork }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.IconButton,
            {
              onClick: (event) => {
                event.preventDefault();
                (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)("Duplicate variable");
                propsOnDuplicate(identifier);
              },
              name: "copy",
              tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("variables.variable-editor-list-row.tooltip-duplicate-variable", "Duplicate variable"),
              "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.Dashboard.Settings.Variables.List.tableRowDuplicateButtons(variable.name)
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.IconButton,
            {
              onClick: (event) => {
                event.preventDefault();
                (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)("Delete variable");
                propsOnDelete(identifier);
              },
              name: "trash-alt",
              tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("variables.variable-editor-list-row.tooltip-remove-variable", "Remove variable"),
              "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.Dashboard.Settings.Variables.List.tableRowRemoveButtons(variable.name)
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ...provided.dragHandleProps, className: styles.dragHandle, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { name: "draggabledots", size: "lg" }) })
        ] }) })
      ]
    }
  ) });
}
function getDefinition(model) {
  let definition = "";
  if (model.type === "query") {
    if (model.definition) {
      definition = model.definition;
    } else if (typeof model.query === "string") {
      definition = model.query;
    }
  } else if ((0,_guard__WEBPACK_IMPORTED_MODULE_10__.hasOptions)(model)) {
    definition = model.query;
  }
  return definition;
}
function VariableCheckIndicator({ passed }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  if (passed) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon,
      {
        name: "check",
        className: styles.iconPassed,
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "variables.variable-check-indicator.title-variable-referenced-other-variables-dashboard",
          "This variable is referenced by other variables or dashboard."
        )
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon,
    {
      name: "exclamation-triangle",
      className: styles.iconFailed,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "variables.variable-check-indicator.title-variable-referenced-dashboard",
        "This variable is not referenced by any variable or dashboard."
      )
    }
  );
}
function getStyles(theme) {
  return {
    dragHandle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      cursor: "grab",
      marginLeft: theme.spacing(1)
    }),
    column: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "1%"
    }),
    nameLink: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      cursor: "pointer",
      color: theme.colors.primary.text
    }),
    definitionColumn: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "100%",
      maxWidth: "200px",
      cursor: "pointer",
      overflow: "hidden",
      textOverflow: "ellipsis",
      OTextOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }),
    iconPassed: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.v1.palette.greenBase,
      marginRight: theme.spacing(2)
    }),
    iconFailed: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.v1.palette.orange,
      marginRight: theme.spacing(2)
    }),
    icons: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      gap: theme.spacing(2),
      alignItems: "center"
    })
  };
}


/***/ }),

/***/ "./public/app/features/variables/editor/VariableTypeSelect.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariableTypeSelect: () => (/* binding */ VariableTypeSelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _dashboard_scene_settings_variables_components_VariableSelectField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard-scene/settings/variables/components/VariableSelectField.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/variables/utils.ts");







function VariableTypeSelect({ onChange, type }) {
  const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getVariableTypes)(), []);
  const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => options.find((o) => o.value === type) ?? options[0], [options, type]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _dashboard_scene_settings_variables_components_VariableSelectField__WEBPACK_IMPORTED_MODULE_4__.VariableSelectField,
    {
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("variables.variable-type-select.name-select-variable-type", "Select variable type"),
      value,
      options,
      onChange,
      testId: _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.Dashboard.Settings.Variables.Edit.General.generalTypeSelectV2
    }
  );
}


/***/ }),

/***/ "./public/app/features/variables/editor/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeVariableName: () => (/* binding */ changeVariableName),
/* harmony export */   completeChangeVariableName: () => (/* binding */ completeChangeVariableName),
/* harmony export */   createNewVariable: () => (/* binding */ createNewVariable),
/* harmony export */   getNextAvailableId: () => (/* binding */ getNextAvailableId),
/* harmony export */   initListMode: () => (/* binding */ initListMode),
/* harmony export */   variableEditorMount: () => (/* binding */ variableEditorMount),
/* harmony export */   variableEditorUnMount: () => (/* binding */ variableEditorUnMount)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _adapters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/variables/adapters.ts");
/* harmony import */ var _inspect_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/variables/inspect/reducer.ts");
/* harmony import */ var _inspect_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/variables/inspect/utils.ts");
/* harmony import */ var _state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/variables/state/keyedVariablesReducer.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/variables/state/selectors.ts");
/* harmony import */ var _state_sharedReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/variables/state/sharedReducer.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/variables/editor/reducer.ts");











const variableEditorMount = (identifier) => {
  return async (dispatch) => {
    const { rootStateKey } = identifier;
    dispatch(
      (0,_state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_5__.toKeyedAction)(rootStateKey, (0,_reducer__WEBPACK_IMPORTED_MODULE_9__.variableEditorMounted)({ name: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getVariable)(identifier).name, id: identifier.id }))
    );
  };
};
const variableEditorUnMount = (identifier) => {
  return async (dispatch, getState) => {
    const { rootStateKey } = identifier;
    dispatch((0,_state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_5__.toKeyedAction)(rootStateKey, (0,_reducer__WEBPACK_IMPORTED_MODULE_9__.variableEditorUnMounted)((0,_utils__WEBPACK_IMPORTED_MODULE_8__.toVariablePayload)(identifier))));
  };
};
const changeVariableName = (identifier, newName) => {
  return (dispatch, getState) => {
    const { id, rootStateKey: uid } = identifier;
    let errorText = null;
    if (!newName.match(/^(?!__).*$/)) {
      errorText = "Template names cannot begin with '__', that's reserved for Grafana's global variables";
    }
    if (!newName.match(/^\w+$/)) {
      errorText = "Only word characters are allowed in variable names";
    }
    const variables = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getVariablesByKey)(uid, getState());
    const foundVariables = variables.filter((v) => v.name === newName && v.id !== id);
    if (foundVariables.length) {
      errorText = "Variable with the same name already exists";
    }
    if (errorText) {
      dispatch((0,_state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_5__.toKeyedAction)(uid, (0,_reducer__WEBPACK_IMPORTED_MODULE_9__.changeVariableNameFailed)({ newName, errorText })));
      return;
    }
    dispatch(completeChangeVariableName(identifier, newName));
  };
};
const completeChangeVariableName = (identifier, newName) => (dispatch, getState) => {
  const { rootStateKey } = identifier;
  const originalVariable = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getVariable)(identifier, getState());
  if (originalVariable.name === newName) {
    dispatch((0,_state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_5__.toKeyedAction)(rootStateKey, (0,_reducer__WEBPACK_IMPORTED_MODULE_9__.changeVariableNameSucceeded)((0,_utils__WEBPACK_IMPORTED_MODULE_8__.toVariablePayload)(identifier, { newName }))));
    return;
  }
  const model = { ...(0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(originalVariable), name: newName, id: newName };
  const global = originalVariable.global;
  const index = originalVariable.index;
  const renamedIdentifier = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.toKeyedVariableIdentifier)(model);
  dispatch((0,_state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_5__.toKeyedAction)(rootStateKey, (0,_state_sharedReducer__WEBPACK_IMPORTED_MODULE_7__.addVariable)((0,_utils__WEBPACK_IMPORTED_MODULE_8__.toVariablePayload)(renamedIdentifier, { global, index, model }))));
  dispatch(
    (0,_state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_5__.toKeyedAction)(rootStateKey, (0,_reducer__WEBPACK_IMPORTED_MODULE_9__.changeVariableNameSucceeded)((0,_utils__WEBPACK_IMPORTED_MODULE_8__.toVariablePayload)(renamedIdentifier, { newName })))
  );
  dispatch((0,_state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_5__.toKeyedAction)(rootStateKey, (0,_state_sharedReducer__WEBPACK_IMPORTED_MODULE_7__.removeVariable)((0,_utils__WEBPACK_IMPORTED_MODULE_8__.toVariablePayload)(identifier, { reIndex: false }))));
};
const createNewVariable = (key, type = "query") => (dispatch, getState) => {
  const rootStateKey = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.toStateKey)(key);
  const varsByKey = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getVariablesByKey)(rootStateKey, getState());
  const id = getNextAvailableId(type, varsByKey);
  const identifier = { type, id };
  const global = false;
  const index = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getNewVariableIndex)(rootStateKey, getState());
  const model = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(_adapters__WEBPACK_IMPORTED_MODULE_2__.variableAdapters.get(type).initialState);
  model.id = id;
  model.name = id;
  model.rootStateKey = rootStateKey;
  dispatch(
    (0,_state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_5__.toKeyedAction)(rootStateKey, (0,_state_sharedReducer__WEBPACK_IMPORTED_MODULE_7__.addVariable)((0,_utils__WEBPACK_IMPORTED_MODULE_8__.toVariablePayload)(identifier, { global, model, index })))
  );
  _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.partial({ editIndex: varsByKey.length });
};
const initListMode = (key) => (dispatch, getState) => {
  const rootStateKey = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.toStateKey)(key);
  const state = getState();
  const variables = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_6__.getEditorVariables)(rootStateKey, state);
  const dashboard = state.dashboard.getModel();
  const { usages } = (0,_inspect_utils__WEBPACK_IMPORTED_MODULE_4__.createUsagesNetwork)(variables, dashboard);
  const usagesNetwork = (0,_inspect_utils__WEBPACK_IMPORTED_MODULE_4__.transformUsagesToNetwork)(usages);
  dispatch((0,_state_keyedVariablesReducer__WEBPACK_IMPORTED_MODULE_5__.toKeyedAction)(rootStateKey, (0,_inspect_reducer__WEBPACK_IMPORTED_MODULE_3__.initInspect)({ usages, usagesNetwork })));
};
function getNextAvailableId(type, variables) {
  let counter = 0;
  let nextId = `${type}${counter}`;
  while (variables.find((variable) => variable.id === nextId)) {
    nextId = `${type}${++counter}`;
  }
  return nextId;
}


/***/ }),

/***/ "./public/app/features/variables/inspect/VariableUsagesButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariableUsagesButton: () => (/* binding */ VariableUsagesButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _NetworkGraphModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/variables/inspect/NetworkGraphModal.tsx");







const VariableUsagesButton = ({ id, usages, isAdhoc }) => {
  const network = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => usages.find((n) => n.variable.id === id), [usages, id]);
  if (usages.length === 0 || isAdhoc || !network) {
    return null;
  }
  const nodes = network.nodes.map((n) => {
    if (n.label.includes(`$${id}`)) {
      return { ...n, color: "#FB7E81" };
    }
    return n;
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _NetworkGraphModal__WEBPACK_IMPORTED_MODULE_5__.NetworkGraphModal,
    {
      show: false,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("variabels.variable-usages-button.usage-title", "Showing usages for: {{variableId}}", {
        variableId: `$${id}`
      }),
      nodes,
      edges: network.edges,
      children: ({ showModal }) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.IconButton,
          {
            onClick: () => {
              (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.reportInteraction)("Show variable usages");
              showModal();
            },
            name: "code-branch",
            tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("variables.variable-usages-button.tooltip-show-usages", "Show usages")
          }
        );
      }
    }
  );
};


/***/ }),

/***/ "./public/app/features/variables/inspect/VariablesDependenciesButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariablesDependenciesButton: () => (/* binding */ VariablesDependenciesButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _NetworkGraphModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/variables/inspect/NetworkGraphModal.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/variables/inspect/utils.ts");








const VariablesDependenciesButton = ({ variables }) => {
  const nodes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_6__.createDependencyNodes)(variables), [variables]);
  const edges = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_6__.createDependencyEdges)(variables), [variables]);
  if (!edges.length) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _NetworkGraphModal__WEBPACK_IMPORTED_MODULE_5__.NetworkGraphModal,
    {
      show: false,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("variables.variables-dependencies-button.title-dependencies", "Dependencies"),
      nodes: (0,_utils__WEBPACK_IMPORTED_MODULE_6__.filterNodesWithDependencies)(nodes, edges),
      edges,
      children: ({ showModal }) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button,
          {
            onClick: () => {
              (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.reportInteraction)("Show variable dependencies");
              showModal();
            },
            icon: "channel-add",
            variant: "secondary",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "variables.variables-dependencies-button.show-dependencies", children: "Show dependencies" })
          }
        );
      }
    }
  );
};


/***/ }),

/***/ "./public/app/features/variables/inspect/VariablesUnknownButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariablesUnknownButton: () => (/* binding */ VariablesUnknownButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _NetworkGraphModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/variables/inspect/NetworkGraphModal.tsx");






const VariablesUnknownButton = ({ id, usages }) => {
  const network = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => usages.find((n) => n.variable.id === id), [id, usages]);
  if (!network) {
    return null;
  }
  const nodes = network.nodes.map((n) => {
    if (n.label.includes(`$${id}`)) {
      return { ...n, color: "#FB7E81" };
    }
    return n;
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _NetworkGraphModal__WEBPACK_IMPORTED_MODULE_4__.NetworkGraphModal,
    {
      show: false,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("variables.variables-unknown-button.usage-title", "Showing usages for: {{variableId}}", {
        variableId: `$${id}`
      }),
      nodes,
      edges: network.edges,
      children: ({ showModal }) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton,
          {
            onClick: () => showModal(),
            name: "code-branch",
            tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("variables.variables-unknown-button.VariablesUnknownButton-tooltip-show-usages", "Show usages"),
            "data-testid": "VariablesUnknownButton"
          }
        );
      }
    }
  );
};


/***/ }),

/***/ "./public/app/features/variables/inspect/VariablesUnknownTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SLOW_VARIABLES_EXPANSION_THRESHOLD: () => (/* binding */ SLOW_VARIABLES_EXPANSION_THRESHOLD),
/* harmony export */   VariablesUnknownTable: () => (/* binding */ VariablesUnknownTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Collapse/CollapsableSection.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _VariablesUnknownButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/variables/inspect/VariablesUnknownButton.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/variables/inspect/utils.ts");










const SLOW_VARIABLES_EXPANSION_THRESHOLD = 1e3;
function VariablesUnknownTable({ variables, dashboard }) {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [changed, setChanged] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const [usages, setUsages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => setChanged((prevState) => prevState + 1), [variables, dashboard]);
  const { loading } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(async () => {
    if (open && changed > 0) {
      const start = Date.now();
      const unknownsNetwork = await (0,_utils__WEBPACK_IMPORTED_MODULE_13__.getUnknownsNetwork)(variables, dashboard);
      const stop = Date.now();
      const elapsed = stop - start;
      if (elapsed >= SLOW_VARIABLES_EXPANSION_THRESHOLD) {
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)("Slow unknown variables expansion", { elapsed });
      }
      setChanged(0);
      setUsages(unknownsNetwork);
      return unknownsNetwork;
    }
    return [];
  }, [variables, dashboard, open, changed]);
  const onToggle = (isOpen) => {
    if (isOpen) {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)("Unknown variables section expanded");
    }
    setOpen(isOpen);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: style.container, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.CollapsableSection, { label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CollapseLabel, {}), isOpen: open, onToggle, children: [
    loading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "column", justifyContent: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { justifyContent: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "variables.variables-unknown-table.loading", children: "Loading..." }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Spinner, {})
    ] }) }),
    !loading && usages && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      usages.length === 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NoUnknowns, {}),
      usages.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UnknownTable, { usages })
    ] })
  ] }) });
}
function CollapseLabel() {
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "variables.variables-unknown-table.collapse-label", children: "Renamed or missing variables" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tooltip,
      {
        content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "variables.variables-unknown-table.collapse-tooltip",
          "Click to expand a list with all variable references that have been renamed or are missing from the dashboard."
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { name: "info-circle", className: style.infoIcon })
      }
    )
  ] });
}
function NoUnknowns() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "variables.no-unknowns.no-renamed-or-missing-variables-found", children: "No renamed or missing variables found." }) });
}
function UnknownTable({ usages }) {
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: "filter-table filter-table--hover", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "variables.unknown-table.variable", children: "Variable" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { colSpan: 5 })
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: usages.map((usage) => {
      const { variable } = usage;
      const { id, name } = variable;
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: style.firstColumn, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: name }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: style.defaultColumn }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: style.defaultColumn }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: style.defaultColumn }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: style.lastColumn, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VariablesUnknownButton__WEBPACK_IMPORTED_MODULE_12__.VariablesUnknownButton, { id: variable.id, usages }) })
      ] }, id);
    }) })
  ] });
}
const getStyles = (theme) => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(4)
  }),
  infoIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginLeft: theme.spacing(1)
  }),
  defaultColumn: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "1%"
  }),
  firstColumn: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "1%",
    verticalAlign: "top",
    color: theme.colors.text.maxContrast
  }),
  lastColumn: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "100%",
    textAlign: "right"
  })
});


/***/ }),

/***/ "./public/app/features/variables/pickers/PickerRenderer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PickerRenderer: () => (/* binding */ PickerRenderer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/templateVars.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _adapters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/variables/adapters.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/variables/constants.ts");









const PickerRenderer = (props) => {
  const PickerToRender = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => _adapters__WEBPACK_IMPORTED_MODULE_7__.variableAdapters.get(props.variable.type).picker, [props.variable]);
  if (!props.variable) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "variables.picker-renderer.couldnt-load-variable", children: "Couldn't load variable" }) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { gap: 0, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PickerLabel, { variable: props.variable }),
    props.variable.hide !== _grafana_data__WEBPACK_IMPORTED_MODULE_2__.VariableHide.hideVariable && PickerToRender && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PickerToRender, { variable: props.variable, readOnly: props.readOnly ?? false })
  ] });
};
function PickerLabel({ variable }) {
  const labelOrName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => variable.label || variable.name, [variable]);
  if (variable.hide !== _grafana_data__WEBPACK_IMPORTED_MODULE_2__.VariableHide.dontHide) {
    return null;
  }
  const elementId = _constants__WEBPACK_IMPORTED_MODULE_8__.VARIABLE_PREFIX + variable.id;
  if (variable.description) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tooltip, { content: variable.description, placement: "bottom", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "label",
      {
        className: "gf-form-label gf-form-label--variable",
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.Dashboard.SubMenu.submenuItemLabels(labelOrName),
        htmlFor: elementId,
        children: labelOrName
      }
    ) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "label",
    {
      className: "gf-form-label gf-form-label--variable",
      "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.Dashboard.SubMenu.submenuItemLabels(labelOrName),
      htmlFor: elementId,
      children: labelOrName
    }
  );
}


/***/ }),

/***/ "./public/app/plugins/panel/timeseries/overrides/colorSeriesConfigFactory.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ "./public/img/grab_dark.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/img/grab_dark.4ee8d28b.svg";

/***/ }),

/***/ "./public/img/grab_light.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/img/grab_light.322c3334.svg";

/***/ })

}]);
//# sourceMappingURL=DashboardPageProxy.e4e8438ee5939e116567.js.map