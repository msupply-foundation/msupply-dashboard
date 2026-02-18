"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["radialBarPanel"],{

/***/ "./packages/grafana-ui/src/components/RadialGauge/RadialArcPath.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadialArcPath: () => (/* binding */ RadialArcPath)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/RadialGauge/utils.ts");



function RadialArcPath({
  startAngle: angle,
  dimensions,
  color,
  glowFilter,
  arcLengthDeg,
  roundedBars
}) {
  const { radius, centerX, centerY, barWidth } = dimensions;
  if (arcLengthDeg === 360) {
    arcLengthDeg = 359.99;
  }
  const startRadians = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.toRad)(angle);
  const endRadians = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.toRad)(angle + arcLengthDeg);
  let x1 = centerX + radius * Math.cos(startRadians);
  let y1 = centerY + radius * Math.sin(startRadians);
  let x2 = centerX + radius * Math.cos(endRadians);
  let y2 = centerY + radius * Math.sin(endRadians);
  const largeArc = arcLengthDeg > 180 ? 1 : 0;
  const path = ["M", x1, y1, "A", radius, radius, 0, largeArc, 1, x2, y2].join(" ");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      d: path,
      fill: "none",
      fillOpacity: "1",
      stroke: color,
      strokeOpacity: "1",
      strokeWidth: barWidth,
      filter: glowFilter,
      strokeLinecap: roundedBars ? "round" : "butt",
      className: "radial-arc-path"
    }
  );
}


/***/ }),

/***/ "./packages/grafana-ui/src/components/RadialGauge/RadialBar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadialBar: () => (/* binding */ RadialBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _themes_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _RadialArcPath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/RadialGauge/RadialArcPath.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/RadialGauge/utils.ts");





function RadialBar({
  dimensions,
  colorDefs,
  angleRange,
  angle,
  startAngle,
  roundedBars,
  spotlightStroke,
  glowFilter
}) {
  const theme = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.useTheme2)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _RadialArcPath__WEBPACK_IMPORTED_MODULE_2__.RadialArcPath,
        {
          startAngle: startAngle + angle,
          dimensions,
          arcLengthDeg: angleRange - angle,
          color: theme.colors.action.hover,
          roundedBars
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _RadialArcPath__WEBPACK_IMPORTED_MODULE_2__.RadialArcPath,
        {
          dimensions,
          startAngle,
          arcLengthDeg: angle,
          color: colorDefs.getMainBarColor(),
          roundedBars,
          glowFilter
        }
      ),
      spotlightStroke && angle > 8 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        SpotlightSquareEffect,
        {
          dimensions,
          angle: startAngle + angle,
          glowFilter,
          spotlightStroke,
          theme,
          roundedBars
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", { children: colorDefs.getDefs() })
  ] });
}
function SpotlightSquareEffect({ dimensions, angle, glowFilter, spotlightStroke, roundedBars }) {
  const { radius, centerX, centerY, barWidth } = dimensions;
  const angleRadian = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.toRad)(angle);
  const x1 = centerX + radius * Math.cos(angleRadian - 0.2);
  const y1 = centerY + radius * Math.sin(angleRadian - 0.2);
  const x2 = centerX + radius * Math.cos(angleRadian);
  const y2 = centerY + radius * Math.sin(angleRadian);
  const path = ["M", x1, y1, "A", radius, radius, 0, 0, 1, x2, y2].join(" ");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      d: path,
      fill: "none",
      strokeWidth: barWidth,
      stroke: spotlightStroke,
      strokeLinecap: roundedBars ? "round" : "butt",
      filter: glowFilter
    }
  );
}


/***/ }),

/***/ "./packages/grafana-ui/src/components/RadialGauge/RadialBarSegmented.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadialBarSegmented: () => (/* binding */ RadialBarSegmented),
/* harmony export */   getAngleBetweenSegments: () => (/* binding */ getAngleBetweenSegments)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _themes_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _RadialArcPath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/RadialGauge/RadialArcPath.tsx");




function RadialBarSegmented({
  fieldDisplay,
  dimensions,
  startAngle,
  angleRange,
  glowFilter,
  segmentCount,
  segmentSpacing,
  colorDefs
}) {
  const segments = [];
  const theme = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.useTheme2)();
  const segmentCountAdjusted = getOptimalSegmentCount(dimensions, segmentSpacing, segmentCount, angleRange);
  const min = fieldDisplay.field.min ?? 0;
  const max = fieldDisplay.field.max ?? 100;
  const value = fieldDisplay.display.numeric;
  const angleBetweenSegments = getAngleBetweenSegments(segmentSpacing, segmentCount, angleRange);
  const segmentArcLengthDeg = angleRange / segmentCountAdjusted - angleBetweenSegments;
  for (let i = 0; i < segmentCountAdjusted; i++) {
    const angleValue = min + (max - min) / segmentCountAdjusted * i;
    const angleColor = colorDefs.getSegmentColor(angleValue);
    const segmentAngle = startAngle + angleRange / segmentCountAdjusted * i + 0.01;
    const segmentColor = angleValue >= value ? theme.colors.action.hover : angleColor;
    segments.push(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _RadialArcPath__WEBPACK_IMPORTED_MODULE_2__.RadialArcPath,
        {
          startAngle: segmentAngle,
          dimensions,
          color: segmentColor,
          glowFilter,
          arcLengthDeg: segmentArcLengthDeg
        },
        i
      )
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", { children: segments }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", { children: colorDefs.getDefs() })
  ] });
}
function getAngleBetweenSegments(segmentSpacing, segmentCount, range) {
  const maxAngleBetweenSegments = Math.max(range / 1.5 / segmentCount, 2);
  return segmentSpacing * maxAngleBetweenSegments;
}
function getOptimalSegmentCount(dimensions, segmentSpacing, segmentCount, range) {
  const angleBetweenSegments = getAngleBetweenSegments(segmentSpacing, segmentCount, range);
  const innerRadius = dimensions.radius - dimensions.barWidth / 2;
  const circumference = Math.PI * innerRadius * 2 * (range / 360);
  const maxSegments = Math.floor(circumference / (angleBetweenSegments + 3));
  return Math.min(maxSegments, segmentCount);
}


/***/ }),

/***/ "./packages/grafana-ui/src/components/RadialGauge/RadialColorDefs.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadialColorDefs: () => (/* binding */ RadialColorDefs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/tinycolor2/esm/tinycolor.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/field/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");




class RadialColorDefs {
  constructor(options) {
    this.options = options;
    this.colorToIds = {};
    this.defs = [];
  }
  getSegmentColor(forValue) {
    const { displayProcessor } = this.options;
    const baseColor = displayProcessor(forValue).color ?? _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FALLBACK_COLOR;
    return this.getColor(baseColor, true);
  }
  getColor(baseColor, forSegment) {
    const { gradient, dimensions, gaugeId, fieldDisplay, shape, theme } = this.options;
    const id = `value-color-${baseColor}-${gaugeId}`;
    if (this.colorToIds[id]) {
      return this.colorToIds[id];
    }
    if (gradient === "none") {
      this.colorToIds[id] = baseColor;
      return baseColor;
    }
    const returnColor = this.colorToIds[id] = `url(#${id})`;
    const colorModeId = fieldDisplay.field.color?.mode;
    const colorMode = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getFieldColorMode)(colorModeId);
    const valuePercent = fieldDisplay.display.percent ?? 0;
    if (colorMode.isContinuous && colorMode.getColors && !forSegment) {
      const colors = colorMode.getColors(theme);
      const count = colors.length;
      this.defs.push(
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("linearGradient", { x1: "0", y1: "0", x2: 1 / valuePercent, y2: "0", id, children: colors.map((stopColor, i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: `${(i / (count - 1)).toFixed(2)}`, stopColor, stopOpacity: 1 }, i)) })
      );
      return returnColor;
    }
    if (colorMode.isByValue) {
      const color12 = (0,tinycolor2__WEBPACK_IMPORTED_MODULE_1__["default"])(baseColor).darken(5);
      this.defs.push(
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          "radialGradient",
          {
            id,
            cx: dimensions.centerX,
            cy: dimensions.centerY,
            r: dimensions.radius + dimensions.barWidth / 2,
            fr: dimensions.radius - dimensions.barWidth / 2,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "0%", stopColor: (0,tinycolor2__WEBPACK_IMPORTED_MODULE_1__["default"])(baseColor).spin(20).lighten(10).toString(), stopOpacity: 1 }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "60%", stopColor: color12.toString(), stopOpacity: 1 }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "100%", stopColor: color12.toString(), stopOpacity: 1 })
            ]
          },
          id
        )
      );
      return returnColor;
    }
    const x2 = shape === "circle" ? 0 : dimensions.centerX + dimensions.radius;
    const y2 = shape === "circle" ? dimensions.centerY + dimensions.radius : 0;
    const color1 = (0,tinycolor2__WEBPACK_IMPORTED_MODULE_1__["default"])(baseColor).spin(-20).darken(5);
    const color2 = (0,tinycolor2__WEBPACK_IMPORTED_MODULE_1__["default"])(baseColor).saturate(20).spin(20).brighten(10);
    const transform = shape === "circle" ? `rotate(${360 * valuePercent - 180} ${dimensions.centerX} ${dimensions.centerY})` : `translate(-${dimensions.radius * 2 * (1 - valuePercent)}, 0)`;
    this.defs.push(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        "linearGradient",
        {
          id,
          x1: "0",
          y1: "0",
          x2,
          y2,
          gradientUnits: "userSpaceOnUse",
          gradientTransform: transform,
          children: theme.isDark ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "0%", stopColor: color1.darken(10).toString(), stopOpacity: 1 }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "100%", stopColor: color2.lighten(10).toString(), stopOpacity: 1 })
          ] }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "0%", stopColor: color2.lighten(10).toString(), stopOpacity: 1 }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "100%", stopColor: color1.toString(), stopOpacity: 1 })
          ] })
        },
        id
      )
    );
    return returnColor;
  }
  getMainBarColor() {
    return this.getColor(this.options.fieldDisplay.display.color ?? _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FALLBACK_COLOR);
  }
  getDefs() {
    return this.defs;
  }
}


/***/ }),

/***/ "./packages/grafana-ui/src/components/RadialGauge/RadialGauge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadialGauge: () => (/* binding */ RadialGauge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/field/displayProcessor.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _themes_ThemeContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Gauge_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Gauge/utils.ts");
/* harmony import */ var _RadialBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/RadialGauge/RadialBar.tsx");
/* harmony import */ var _RadialBarSegmented__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/RadialGauge/RadialBarSegmented.tsx");
/* harmony import */ var _RadialColorDefs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/RadialGauge/RadialColorDefs.tsx");
/* harmony import */ var _RadialScaleLabels__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/RadialGauge/RadialScaleLabels.tsx");
/* harmony import */ var _RadialSparkline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/RadialGauge/RadialSparkline.tsx");
/* harmony import */ var _RadialText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/RadialGauge/RadialText.tsx");
/* harmony import */ var _ThresholdsBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/RadialGauge/ThresholdsBar.tsx");
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/RadialGauge/effects.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/RadialGauge/utils.ts");


















function RadialGauge(props) {
  const {
    width = 256,
    height = 256,
    shape = "circle",
    gradient = "none",
    barWidthFactor = 0.4,
    spotlight = false,
    glowBar = false,
    glowCenter = false,
    textMode = "auto",
    vizCount = 1,
    segmentCount = 0,
    segmentSpacing = 0.1,
    roundedBars = true,
    thresholdsBar = false,
    showScaleLabels = false,
    onClick,
    values
  } = props;
  const theme = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_6__.useTheme2)();
  const gaugeId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useId)();
  const styles = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  const startAngle = shape === "gauge" ? 250 : 0;
  const endAngle = shape === "gauge" ? 110 : 360;
  const defs = [];
  const graphics = [];
  let sparklineElement = null;
  for (let barIndex = 0; barIndex < values.length; barIndex++) {
    const displayValue = values[barIndex];
    const { angle, angleRange } = (0,_utils__WEBPACK_IMPORTED_MODULE_16__.getValueAngleForValue)(displayValue, startAngle, endAngle);
    const color = displayValue.display.color ?? "gray";
    const dimensions = (0,_utils__WEBPACK_IMPORTED_MODULE_16__.calculateDimensions)(
      width,
      height,
      endAngle,
      glowBar,
      roundedBars,
      barWidthFactor,
      barIndex,
      thresholdsBar,
      showScaleLabels
    );
    const displayProcessor = getFieldDisplayProcessor(displayValue);
    const spotlightGradientId = `spotlight-${barIndex}-${gaugeId}`;
    const glowFilterId = `glow-${gaugeId}`;
    const colorDefs = new _RadialColorDefs__WEBPACK_IMPORTED_MODULE_10__.RadialColorDefs({
      gradient,
      fieldDisplay: displayValue,
      theme,
      dimensions,
      shape,
      gaugeId,
      displayProcessor
    });
    if (spotlight) {
      defs.push(
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _effects__WEBPACK_IMPORTED_MODULE_15__.SpotlightGradient,
          {
            id: spotlightGradientId,
            angle: angle + startAngle,
            dimensions,
            roundedBars,
            theme
          },
          spotlightGradientId
        )
      );
    }
    if (segmentCount > 1) {
      graphics.push(
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _RadialBarSegmented__WEBPACK_IMPORTED_MODULE_9__.RadialBarSegmented,
          {
            dimensions,
            fieldDisplay: displayValue,
            angleRange,
            startAngle,
            glowFilter: `url(#${glowFilterId})`,
            segmentCount,
            segmentSpacing,
            colorDefs
          },
          `radial-bar-segmented-${barIndex}-${gaugeId}`
        )
      );
    } else {
      graphics.push(
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _RadialBar__WEBPACK_IMPORTED_MODULE_8__.RadialBar,
          {
            dimensions,
            colorDefs,
            angle,
            angleRange,
            startAngle,
            roundedBars,
            spotlightStroke: `url(#${spotlightGradientId})`,
            glowFilter: `url(#${glowFilterId})`
          },
          `radial-bar-${barIndex}-${gaugeId}`
        )
      );
    }
    if (barIndex === 0) {
      if (glowBar) {
        defs.push(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_effects__WEBPACK_IMPORTED_MODULE_15__.GlowGradient, { id: glowFilterId, radius: dimensions.radius }, "glow-filter"));
      }
      if (glowCenter) {
        graphics.push(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_effects__WEBPACK_IMPORTED_MODULE_15__.MiddleCircleGlow, { gaugeId, color, dimensions }, "center-glow"));
      }
      graphics.push(
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _RadialText__WEBPACK_IMPORTED_MODULE_13__.RadialText,
          {
            vizCount,
            textMode,
            displayValue: displayValue.display,
            dimensions,
            theme,
            valueManualFontSize: props.valueManualFontSize,
            nameManualFontSize: props.nameManualFontSize,
            shape
          },
          "radial-text"
        )
      );
      if (showScaleLabels || thresholdsBar) {
        const decimals = displayValue.field.decimals ?? 2;
        const thresholds = (0,_Gauge_utils__WEBPACK_IMPORTED_MODULE_7__.getFormattedThresholds)(decimals, displayValue.field, theme);
        if (showScaleLabels) {
          graphics.push(
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _RadialScaleLabels__WEBPACK_IMPORTED_MODULE_11__.RadialScaleLabels,
              {
                thresholds,
                fieldDisplay: displayValue,
                angleRange,
                theme,
                dimensions,
                startAngle,
                endAngle
              },
              "radial-scale-labels"
            )
          );
        }
        if (thresholdsBar) {
          graphics.push(
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _ThresholdsBar__WEBPACK_IMPORTED_MODULE_14__.ThresholdsBar,
              {
                thresholds,
                dimensions,
                fieldDisplay: displayValue,
                startAngle,
                endAngle,
                angleRange,
                roundedBars,
                glowFilter: `url(#${glowFilterId})`,
                colorDefs
              },
              "thresholds-bar"
            )
          );
        }
      }
      if (displayValue.sparkline) {
        sparklineElement = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _RadialSparkline__WEBPACK_IMPORTED_MODULE_12__.RadialSparkline,
          {
            sparkline: displayValue.sparkline,
            dimensions,
            theme,
            color,
            shape
          }
        );
      }
    }
  }
  const body = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { width, height, role: "img", "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("gauge.category-gauge", "Gauge"), children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", { children: defs }),
      graphics
    ] }),
    sparklineElement
  ] });
  if (onClick) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick, className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.clearButton, styles.vizWrapper), style: { width, height }, children: body });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.vizWrapper, style: { width, height }, children: body });
}
function getFieldDisplayProcessor(displayValue) {
  if (displayValue.view && (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isNumber)(displayValue.colIndex)) {
    const dp = displayValue.view.getFieldDisplayProcessor(displayValue.colIndex);
    if (dp) {
      return dp;
    }
  }
  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.getDisplayProcessor)();
}
function getStyles(theme) {
  return {
    vizWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }),
    clearButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      background: "transparent",
      color: theme.colors.text.primary,
      border: "none",
      padding: 0,
      cursor: "context-menu"
    })
  };
}


/***/ }),

/***/ "./packages/grafana-ui/src/components/RadialGauge/RadialScaleLabels.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadialScaleLabels: () => (/* binding */ RadialScaleLabels)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _utils_measureText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/utils/measureText.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/RadialGauge/utils.ts");





function RadialScaleLabels({
  fieldDisplay,
  thresholds,
  theme,
  dimensions,
  startAngle,
  endAngle,
  angleRange
}) {
  const { centerX, centerY, scaleLabelsFontSize, scaleLabelsRadius } = dimensions;
  const fieldConfig = fieldDisplay.field;
  const min = fieldConfig.min ?? 0;
  const max = fieldConfig.max ?? 100;
  const fontSize = scaleLabelsFontSize;
  const textLineHeight = scaleLabelsFontSize * 1.2;
  const radius = scaleLabelsRadius - textLineHeight;
  function getTextPosition(text, value, index) {
    const isLast = index === thresholds.length - 1;
    const isFirst = index === 0;
    let valueDeg = (value - min) / (max - min) * angleRange;
    let finalAngle = startAngle + valueDeg;
    let measure = (0,_utils_measureText__WEBPACK_IMPORTED_MODULE_2__.measureText)(text, fontSize, theme.typography.fontWeightMedium);
    let textWidthAngle = measure.width / (2 * Math.PI * radius) * angleRange;
    finalAngle -= endAngle < 180 ? textWidthAngle : textWidthAngle / 2;
    if (isFirst) {
      finalAngle += textWidthAngle;
    }
    if (isLast && endAngle === 360) {
      finalAngle -= textWidthAngle;
    }
    const position = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.toCartesian)(centerX, centerY, radius, finalAngle);
    return { ...position, transform: `rotate(${finalAngle}, ${position.x}, ${position.y})` };
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", { children: thresholds.map((threshold, index) => {
    const labelPos = getTextPosition(String(threshold.value), threshold.value, index);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "text",
      {
        x: labelPos.x,
        y: labelPos.y,
        fontSize,
        fill: theme.colors.text.primary,
        transform: labelPos.transform,
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(`gauge.threshold`, "Threshold {{value}}", { value: threshold.value }),
        children: threshold.value
      },
      index
    );
  }) });
}


/***/ }),

/***/ "./packages/grafana-ui/src/components/RadialGauge/RadialSparkline.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadialSparkline: () => (/* binding */ RadialSparkline)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _Sparkline_Sparkline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Sparkline/Sparkline.tsx");





function RadialSparkline({ sparkline, dimensions, theme, color, shape }) {
  if (!sparkline) {
    return null;
  }
  const { radius, barWidth } = dimensions;
  const height = radius / 4;
  const widthFactor = shape === "gauge" ? 1.6 : 1.4;
  const width = radius * widthFactor - barWidth;
  const topPos = shape === "gauge" ? `${dimensions.gaugeBottomY - height}px` : `calc(50% + ${radius / 2.8}px)`;
  const styles = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "absolute",
    top: topPos
  });
  const config = {
    color: {
      mode: "fixed",
      fixedColor: color ?? "blue"
    },
    custom: {
      gradientMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.GraphGradientMode.Opacity,
      fillOpacity: 40,
      lineInterpolation: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.LineInterpolation.Smooth
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Sparkline_Sparkline__WEBPACK_IMPORTED_MODULE_3__.Sparkline, { height, width, sparkline, theme, config }) });
}


/***/ }),

/***/ "./packages/grafana-ui/src/components/RadialGauge/RadialText.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadialText: () => (/* binding */ RadialText)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _themes_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _utils_measureText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/utils/measureText.ts");






function RadialText({
  displayValue,
  theme,
  dimensions,
  textMode,
  vizCount,
  shape,
  alignmentFactors,
  valueManualFontSize,
  nameManualFontSize
}) {
  const styles = (0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const { centerX, centerY, radius, barWidth } = dimensions;
  if (textMode === "none") {
    return null;
  }
  if (textMode === "auto") {
    textMode = vizCount === 1 ? "value" : "value_and_name";
  }
  const nameToAlignTo = (alignmentFactors ? alignmentFactors.title : displayValue.title) ?? "";
  const valueToAlignTo = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.formattedValueToString)(alignmentFactors ? alignmentFactors : displayValue);
  const showValue = textMode === "value" || textMode === "value_and_name";
  const showName = textMode === "name" || textMode === "value_and_name";
  const maxTextWidth = radius * 2 - barWidth - radius / 7;
  const lineHeight = 1.21;
  const valueWidthToRadiusFactor = 0.85;
  const nameToHeightFactor = 0.45;
  const largeRadiusScalingDecay = 0.86;
  let maxValueHeight = valueWidthToRadiusFactor * Math.pow(radius, largeRadiusScalingDecay);
  let maxNameHeight = radius / 4;
  if (showValue && showName) {
    maxValueHeight = valueWidthToRadiusFactor * Math.pow(radius, largeRadiusScalingDecay);
    maxNameHeight = nameToHeightFactor * Math.pow(radius, largeRadiusScalingDecay);
  }
  const valueFontSize = valueManualFontSize ?? (0,_utils_measureText__WEBPACK_IMPORTED_MODULE_4__.calculateFontSize)(
    valueToAlignTo,
    maxTextWidth,
    maxValueHeight,
    lineHeight,
    void 0,
    theme.typography.body.fontWeight
  );
  const nameFontSize = nameManualFontSize ?? (0,_utils_measureText__WEBPACK_IMPORTED_MODULE_4__.calculateFontSize)(
    nameToAlignTo,
    maxTextWidth,
    maxNameHeight,
    lineHeight,
    void 0,
    theme.typography.body.fontWeight
  );
  const unitFontSize = Math.max(valueFontSize * 0.7, 5);
  const valueHeight = valueFontSize * lineHeight;
  const nameHeight = nameFontSize * lineHeight;
  const valueY = showName ? centerY - nameHeight / 2 : centerY;
  const valueNameSpacing = valueHeight / 3.5;
  const nameY = showValue ? valueY + valueHeight / 2 + valueNameSpacing : centerY;
  const nameColor = showValue ? theme.colors.text.secondary : theme.colors.text.primary;
  const suffixShift = (valueFontSize - unitFontSize * 1.2) / 2;
  const valueDy = shape === "gauge" ? -valueFontSize * 0.3 : 0;
  const nameDy = shape === "gauge" ? -nameFontSize * 0.7 : 0;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", { children: [
    showValue && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      "text",
      {
        x: centerX,
        y: valueY,
        fontSize: valueFontSize,
        fill: theme.colors.text.primary,
        className: styles.text,
        textAnchor: "middle",
        dominantBaseline: "middle",
        dy: valueDy,
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tspan", { fontSize: unitFontSize, children: displayValue.prefix ?? "" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tspan", { children: displayValue.text }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tspan", { className: styles.text, fontSize: unitFontSize, dy: suffixShift, children: displayValue.suffix ?? "" })
        ]
      }
    ),
    showName && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "text",
      {
        fontSize: nameFontSize,
        x: centerX,
        y: nameY,
        dy: nameDy,
        textAnchor: "middle",
        dominantBaseline: "middle",
        fill: nameColor,
        children: displayValue.title
      }
    )
  ] });
}
const getStyles = (theme) => ({
  text: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    verticalAlign: "bottom"
  })
});


/***/ }),

/***/ "./packages/grafana-ui/src/components/RadialGauge/ThresholdsBar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThresholdsBar: () => (/* binding */ ThresholdsBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _RadialArcPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/RadialGauge/RadialArcPath.tsx");



function ThresholdsBar({
  dimensions,
  fieldDisplay,
  startAngle,
  angleRange,
  roundedBars,
  glowFilter,
  colorDefs,
  thresholds
}) {
  const fieldConfig = fieldDisplay.field;
  const min = fieldConfig.min ?? 0;
  const max = fieldConfig.max ?? 100;
  const thresholdDimensions = {
    ...dimensions,
    barWidth: dimensions.thresholdsBarWidth,
    radius: dimensions.thresholdsBarRadius
  };
  let currentStart = startAngle;
  let paths = [];
  for (let i = 1; i < thresholds.length; i++) {
    const threshold = thresholds[i];
    let valueDeg = (threshold.value - min) / (max - min) * angleRange;
    if (valueDeg > angleRange) {
      valueDeg = angleRange;
    } else if (valueDeg < 0) {
      valueDeg = 0;
    }
    let lengthDeg = valueDeg - currentStart + startAngle;
    paths.push(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _RadialArcPath__WEBPACK_IMPORTED_MODULE_1__.RadialArcPath,
        {
          startAngle: currentStart,
          arcLengthDeg: lengthDeg,
          dimensions: thresholdDimensions,
          roundedBars,
          glowFilter,
          color: colorDefs.getColor(threshold.color, true)
        },
        i
      )
    );
    currentStart += lengthDeg;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", { children: paths }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", { children: colorDefs.getDefs() })
  ] });
}


/***/ }),

/***/ "./packages/grafana-ui/src/components/RadialGauge/effects.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CenterGlowGradient: () => (/* binding */ CenterGlowGradient),
/* harmony export */   GlowGradient: () => (/* binding */ GlowGradient),
/* harmony export */   MiddleCircleGlow: () => (/* binding */ MiddleCircleGlow),
/* harmony export */   SpotlightGradient: () => (/* binding */ SpotlightGradient)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");


function GlowGradient({ id, radius }) {
  const glowSize = 0.03 * radius;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", { id, filterUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", { stdDeviation: glowSize }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComponentTransfer", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFuncA", { type: "linear", slope: "1" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", { in2: "SourceGraphic" })
  ] });
}
function SpotlightGradient({
  id,
  dimensions,
  roundedBars,
  angle,
  theme
}) {
  const angleRadian = (angle - 90) * Math.PI / 180;
  let x1 = dimensions.centerX + dimensions.radius * Math.cos(angleRadian - 0.2);
  let y1 = dimensions.centerY + dimensions.radius * Math.sin(angleRadian - 0.2);
  let x2 = dimensions.centerX + dimensions.radius * Math.cos(angleRadian);
  let y2 = dimensions.centerY + dimensions.radius * Math.sin(angleRadian);
  if (theme.isLight) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", { x1, y1, x2, y2, id, gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "0%", stopColor: "black", stopOpacity: 0 }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "90%", stopColor: "black", stopOpacity: 0 }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "91%", stopColor: "black", stopOpacity: 1 })
    ] });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", { x1, y1, x2, y2, id, gradientUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "0%", stopColor: "white", stopOpacity: 0 }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "95%", stopColor: "white", stopOpacity: 0.5 }),
    roundedBars && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "100%", stopColor: "white", stopOpacity: roundedBars ? 0.7 : 1 })
  ] });
}
function CenterGlowGradient({ gaugeId, color }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("radialGradient", { id: `circle-glow-${gaugeId}`, r: "50%", fr: "0%", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "0%", stopColor: color, stopOpacity: 0.2 }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "90%", stopColor: color, stopOpacity: 0 })
  ] });
}
function MiddleCircleGlow({ dimensions, gaugeId, color }) {
  const gradientId = `circle-glow-${gaugeId}`;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("radialGradient", { id: gradientId, r: "50%", fr: "0%", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "0%", stopColor: color, stopOpacity: 0.2 }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "90%", stopColor: color, stopOpacity: 0 })
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: dimensions.centerX, cy: dimensions.centerY, r: dimensions.radius, fill: `url(#${gradientId})` }) })
  ] });
}


/***/ }),

/***/ "./packages/grafana-ui/src/components/RadialGauge/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateDimensions: () => (/* binding */ calculateDimensions),
/* harmony export */   getValueAngleForValue: () => (/* binding */ getValueAngleForValue),
/* harmony export */   toCartesian: () => (/* binding */ toCartesian),
/* harmony export */   toRad: () => (/* binding */ toRad)
/* harmony export */ });

function getValueAngleForValue(fieldDisplay, startAngle, endAngle) {
  const angleRange = 360 % (startAngle === 0 ? 1 : startAngle) + endAngle;
  const min = fieldDisplay.field.min ?? 0;
  const max = fieldDisplay.field.max ?? 100;
  let angle = (fieldDisplay.display.numeric - min) / (max - min) * angleRange;
  if (angle > angleRange) {
    angle = angleRange;
  } else if (angle < 0) {
    angle = 0;
  }
  return { angleRange, angle };
}
function toRad(angle) {
  return (angle - 90) * Math.PI / 180;
}
function calculateDimensions(width, height, endAngle, glow, roundedBars, barWidthFactor, barIndex, thresholdBar, showScaleLabels) {
  const yMaxAngle = endAngle > 180 ? 180 : endAngle;
  let margin = 0;
  if (glow) {
    margin = 0.02 * Math.min(width, height);
  }
  let maxRadiusW = width / 2 - margin;
  let heightRatioV = Math.sin(toRad(yMaxAngle));
  let maxRadiusH = (height - margin * 2) / (1 + heightRatioV);
  let maxRadius = Math.min(maxRadiusW, maxRadiusH);
  let maxRadiusIsLimitedByHeight = maxRadiusH === maxRadius;
  let outerRadius = maxRadius;
  const barWidth = Math.max(barWidthFactor * (maxRadius / 3), 2);
  if (yMaxAngle < 180 && roundedBars) {
    outerRadius -= barWidth;
    maxRadiusH -= barWidth;
    maxRadiusW -= barWidth;
  }
  let scaleLabelsFontSize = 0;
  let scaleLabelsSpacing = 0;
  let scaleLabelsRadius = 0;
  if (showScaleLabels) {
    scaleLabelsRadius = outerRadius;
    const radiusToFontSizeFactor = 0.12;
    scaleLabelsFontSize = Math.max(radiusToFontSizeFactor * Math.pow(outerRadius, 0.92), 10);
    scaleLabelsSpacing = scaleLabelsFontSize / 3;
    const labelsSize = scaleLabelsFontSize * 1.2 + scaleLabelsSpacing;
    outerRadius -= labelsSize;
    maxRadiusW -= labelsSize;
    maxRadiusH -= labelsSize;
    if (maxRadiusIsLimitedByHeight && endAngle < 180) {
      const amount = outerRadius * 0.07;
      scaleLabelsRadius -= amount;
      maxRadiusH -= amount;
      maxRadiusW -= amount;
      outerRadius -= amount;
    }
  }
  const thresholdsToBarWidth = 0.2 * Math.pow(barWidth, 0.92);
  const thresholdsBarWidth = thresholdBar ? Math.min(Math.max(thresholdsToBarWidth, 4), 12) : 0;
  const thresholdsBarSpacing = Math.min(Math.max(thresholdsBarWidth / 2, 2), 12);
  let thresholdsBarRadius = 0;
  if (thresholdsBarWidth > 0) {
    thresholdsBarRadius = outerRadius - thresholdsBarWidth / 2;
    maxRadiusW -= thresholdsBarWidth + thresholdsBarSpacing;
    maxRadiusH -= thresholdsBarWidth + thresholdsBarSpacing;
    outerRadius = Math.min(maxRadiusW, maxRadiusH);
  }
  let innerRadius = outerRadius - barWidth / 2;
  const belowCenterY = maxRadius * Math.sin(toRad(yMaxAngle));
  const rest = height - belowCenterY - margin * 2 - maxRadius;
  const centerX = width / 2;
  const centerY = maxRadius + margin + rest / 2;
  if (barIndex > 0) {
    innerRadius = innerRadius - (barWidth + 4) * barIndex;
  }
  return {
    margin,
    gaugeBottomY: centerY + belowCenterY,
    radius: innerRadius,
    centerX,
    centerY,
    barWidth,
    barIndex,
    thresholdsBarWidth,
    thresholdsBarSpacing,
    thresholdsBarRadius,
    scaleLabelsFontSize,
    scaleLabelsSpacing,
    scaleLabelsRadius
  };
}
function toCartesian(centerX, centerY, radius, angleInDegrees) {
  let radian = (angleInDegrees - 90) * Math.PI / 180;
  return {
    x: centerX + radius * Math.cos(radian),
    y: centerY + radius * Math.sin(radian)
  };
}


/***/ }),

/***/ "./public/app/plugins/panel/radialbar/EffectsEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EffectsEditor: () => (/* binding */ EffectsEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");




function EffectsEditor(props) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { direction: "row", alignItems: "flex-start", gap: 1, wrap: true, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Switch,
        {
          id: "radialbar-rounded-bars",
          value: !!props.value?.rounded,
          onChange: (e) => props.onChange({ ...props.value, rounded: e.currentTarget.checked })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { htmlFor: "radialbar-rounded-bars", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("radialbar.config.effects.rounded-bars", "Rounded bars") })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Switch,
        {
          id: "radialbar-bar-glow",
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("radialbar.config.effects.bar-glow", "Bar glow"),
          value: !!props.value?.barGlow,
          onChange: (e) => props.onChange({ ...props.value, barGlow: e.currentTarget.checked })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { htmlFor: "radialbar-bar-glow", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("radialbar.config.effects.bar-glow", "Bar glow") })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Switch,
        {
          id: "radialbar-center-glow",
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("radialbar.config.effects.center-glow", "Center glow"),
          value: !!props.value?.centerGlow,
          onChange: (e) => props.onChange({ ...props.value, centerGlow: e.currentTarget.checked })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { htmlFor: "radialbar-center-glow", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("radialbar.config.effects.center-glow", "Center glow") })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Switch,
        {
          id: "radialbar-spotlight",
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("radialbar.config.effects.spotlight", "Spotlight"),
          value: !!props.value?.spotlight,
          onChange: (e) => props.onChange({ ...props.value, spotlight: e.currentTarget.checked })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { htmlFor: "radialbar-spotlight", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("radialbar.config.effects.spotlight", "Spotlight") })
    ] })
  ] });
}


/***/ }),

/***/ "./public/app/plugins/panel/radialbar/GaugeMigrations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gaugePanelChangedHandler: () => (/* binding */ gaugePanelChangedHandler),
/* harmony export */   gaugePanelMigrationHandler: () => (/* binding */ gaugePanelMigrationHandler),
/* harmony export */   shouldMigrateGauge: () => (/* binding */ shouldMigrateGauge)
/* harmony export */ });
/* harmony import */ var _grafana_schema_dist_esm_index_gen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-schema/src/raw/dashboard/x/dashboard_types.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/SingleStatShared/SingleStatBaseOptions.ts");



function gaugePanelMigrationHandler(panel) {
  const sharedOptions = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.sharedSingleStatMigrationHandler)(panel);
  const newOptions = { ...sharedOptions };
  if (shouldMigrateGauge(panel)) {
    const fieldConfig = panel.fieldConfig;
    if (newOptions.showThresholdMarkers && fieldConfig?.defaults?.color?.mode !== _grafana_schema_dist_esm_index_gen__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Thresholds) {
      newOptions.showThresholdMarkers = false;
    }
    newOptions.sparkline = false;
    newOptions.gradient = "none";
    if ("sizing" in newOptions) {
      delete newOptions.sizing;
    }
    if ("minVizHeight" in newOptions) {
      delete newOptions.minVizHeight;
    }
    if ("minVizWidth" in newOptions) {
      delete newOptions.minVizWidth;
    }
  }
  return newOptions;
}
function shouldMigrateGauge(panel) {
  if (panel.options?.shape) {
    return false;
  }
  const previousVersion = parseFloat(panel.pluginVersion ?? "8");
  return previousVersion < 13;
}
const gaugePanelChangedHandler = (panel, prevPluginId, prevOptions) => {
  const opts = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.sharedSingleStatPanelChangedHandler)(panel, prevPluginId, prevOptions);
  if (prevPluginId === "singlestat" && prevOptions.angular) {
    const gauge = prevOptions.angular.gauge;
    if (gauge) {
      opts.showThresholdMarkers = gauge.thresholdMarkers;
      opts.showThresholdLabels = gauge.thresholdLabels;
    }
  }
  return opts;
};


/***/ }),

/***/ "./public/app/plugins/panel/radialbar/RadialBarPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadialBarPanel: () => (/* binding */ RadialBarPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/field/fieldDisplay.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/VizRepeater/VizRepeater.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/DataLinks/DataLinksContextMenu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/RadialGauge/RadialGauge.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/config.ts");






function RadialBarPanel({
  height,
  width,
  data,
  renderCounter,
  options,
  replaceVariables,
  fieldConfig,
  timeZone
}) {
  function renderComponent(valueProps, menuProps) {
    const { width: width2, height: height2, value } = valueProps;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_5__.RadialGauge,
      {
        values: [value],
        width: width2,
        height: height2,
        barWidthFactor: options.barWidthFactor,
        gradient: options.gradient,
        spotlight: options.effects?.spotlight,
        glowBar: options.effects?.barGlow,
        glowCenter: options.effects?.centerGlow,
        roundedBars: options.effects?.rounded,
        vizCount: valueProps.count,
        shape: options.shape,
        segmentCount: options.segmentCount,
        segmentSpacing: options.segmentSpacing,
        thresholdsBar: options.showThresholdMarkers,
        showScaleLabels: options.showThresholdLabels,
        alignmentFactors: valueProps.alignmentFactors,
        valueManualFontSize: options.text?.valueSize,
        nameManualFontSize: options.text?.titleSize,
        onClick: menuProps.openMenu
      }
    );
  }
  function renderValue(valueProps) {
    const { value } = valueProps;
    const { getLinks, hasLinks } = value;
    if (hasLinks && getLinks) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.DataLinksContextMenu, { links: getLinks, style: { flexGrow: 1 }, children: (api) => {
        return renderComponent(valueProps, api);
      } });
    }
    return renderComponent(valueProps, {});
  }
  function getValues() {
    return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getFieldDisplayValues)({
      fieldConfig,
      reduceOptions: options.reduceOptions,
      replaceVariables,
      theme: app_core_config__WEBPACK_IMPORTED_MODULE_6__.config.theme2,
      data: data.series,
      sparkline: options.sparkline,
      timeZone
    });
  }
  const minVizHeight = 60;
  const minVizWidth = 60;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "row", justifyContent: "center", alignItems: "center", height: "100%", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.VizRepeater,
    {
      getValues,
      renderValue,
      width,
      height,
      source: data,
      autoGrid: true,
      itemSpacing: 16,
      renderCounter,
      orientation: options.orientation,
      minVizHeight,
      minVizWidth,
      getAlignmentFactors: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.getDisplayValueAlignmentFactors
    }
  ) });
}


/***/ }),

/***/ "./public/app/plugins/panel/radialbar/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/options/builder/text.tsx");
/* harmony import */ var _stat_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/stat/common.ts");
/* harmony import */ var _EffectsEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/radialbar/EffectsEditor.tsx");
/* harmony import */ var _GaugeMigrations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/radialbar/GaugeMigrations.ts");
/* harmony import */ var _RadialBarPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/radialbar/RadialBarPanel.tsx");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/radialbar/panelcfg.gen.ts");
/* harmony import */ var _suggestions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/radialbar/suggestions.ts");










const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_RadialBarPanel__WEBPACK_IMPORTED_MODULE_6__.RadialBarPanel).useFieldConfig({}).setPanelOptions((builder) => {
  const category = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("gauge.category-radial-bar", "Gauge")];
  (0,_stat_common__WEBPACK_IMPORTED_MODULE_3__.addStandardDataReduceOptions)(builder);
  (0,_stat_common__WEBPACK_IMPORTED_MODULE_3__.addOrientationOption)(builder, category);
  _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.addTextSizeOptions(builder, { withTitle: true, withValue: true });
  builder.addRadio({
    path: "shape",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("radialbar.config.shape", "Shape"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.shape,
    settings: {
      options: [
        { value: "circle", label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("radialbar.config.shape-circle", "Circle"), icon: "circle" },
        { value: "gauge", label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("radialbar.config.shape-gauge", "Gauge"), icon: "tachometer-fast" }
      ]
    }
  });
  builder.addRadio({
    path: "gradient",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("radialbar.config.gradient", "Gradient"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.gradient,
    settings: {
      options: [
        { value: "none", label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("radialbar.config.gradient-none", "None") },
        { value: "auto", label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("radialbar.config.gradient-auto", "Auto") }
      ]
    }
  });
  builder.addSliderInput({
    path: "barWidthFactor",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("radialbar.config.bar-width", "Bar width"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.barWidthFactor,
    settings: {
      min: 0.1,
      max: 1,
      step: 0.01
    }
  });
  builder.addSliderInput({
    path: "segmentCount",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("radialbar.config.segment-count", "Segments"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.segmentCount,
    settings: {
      min: 1,
      max: 100,
      step: 1
    }
  });
  builder.addSliderInput({
    path: "segmentSpacing",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("radialbar.config.segment-spacing", "Segment spacing"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.segmentSpacing,
    showIf: (options) => options.segmentCount > 1,
    settings: {
      min: 0,
      max: 1,
      step: 0.01
    }
  });
  builder.addBooleanSwitch({
    path: "sparkline",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("radialbar.config.sparkline", "Show sparkline"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.sparkline
  });
  builder.addBooleanSwitch({
    path: "showThresholdMarkers",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("radialbar.config.threshold-markers", "Show thresholds"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.showThresholdMarkers
  });
  builder.addBooleanSwitch({
    path: "showThresholdLabels",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("radialbar.config.threshold-labels", "Show threshold labels"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.showThresholdLabels
  });
  builder.addCustomEditor({
    id: "radialbar-effects",
    path: "effects",
    name: "Effects",
    category,
    editor: _EffectsEditor__WEBPACK_IMPORTED_MODULE_4__.EffectsEditor,
    settings: {},
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultGaugePanelEffects
  });
}).setSuggestionsSupplier(new _suggestions__WEBPACK_IMPORTED_MODULE_8__.GaugeSuggestionsSupplier()).setMigrationHandler(_GaugeMigrations__WEBPACK_IMPORTED_MODULE_5__.gaugePanelMigrationHandler, _GaugeMigrations__WEBPACK_IMPORTED_MODULE_5__.shouldMigrateGauge).setPanelChangeHandler(_GaugeMigrations__WEBPACK_IMPORTED_MODULE_5__.gaugePanelChangedHandler);


/***/ }),

/***/ "./public/app/plugins/panel/radialbar/panelcfg.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultGaugePanelEffects: () => (/* binding */ defaultGaugePanelEffects),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });

const defaultGaugePanelEffects = {
  barGlow: false,
  centerGlow: false,
  rounded: false,
  spotlight: false
};
const defaultOptions = {
  barWidthFactor: 0.5,
  effects: {},
  gradient: "auto",
  segmentCount: 1,
  segmentSpacing: 0.3,
  shape: "gauge",
  showThresholdLabels: false,
  showThresholdMarkers: true,
  sparkline: true
};


/***/ }),

/***/ "./public/app/plugins/panel/radialbar/suggestions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GaugeSuggestionsSupplier: () => (/* binding */ GaugeSuggestionsSupplier)
/* harmony export */ });
/* harmony import */ var _grafana_schema_dist_esm_index_gen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-schema/src/raw/dashboard/x/dashboard_types.gen.ts");
/* harmony import */ var app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/suggestions.ts");



class GaugeSuggestionsSupplier {
  getSuggestionsForData(builder) {
    const { dataSummary } = builder;
    if (!dataSummary.hasData || !dataSummary.hasNumberField) {
      return;
    }
    if (dataSummary.numberFieldCount >= 10) {
      return;
    }
    const list = builder.getListAppender({
      name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionName.Gauge,
      pluginId: "gauge",
      options: {},
      fieldConfig: {
        defaults: {},
        overrides: []
      },
      cardOptions: {
        previewModifier: (s) => {
          if (s.options.reduceOptions.values) {
            s.options.reduceOptions.limit = 2;
          }
        }
      }
    });
    if (dataSummary.hasStringField && dataSummary.frameCount === 1 && dataSummary.rowCountTotal < 10) {
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionName.Gauge,
        options: {
          reduceOptions: {
            values: true,
            calcs: []
          }
        }
      });
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionName.GaugeCircular,
        options: {
          shape: "circle",
          showThresholdMarkers: false,
          reduceOptions: {
            values: true,
            calcs: []
          }
        },
        fieldConfig: {
          defaults: {
            color: { mode: _grafana_schema_dist_esm_index_gen__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.PaletteClassic }
          },
          overrides: []
        }
      });
    } else {
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionName.Gauge,
        options: {
          reduceOptions: {
            values: false,
            calcs: ["lastNotNull"]
          }
        }
      });
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionName.GaugeCircular,
        options: {
          shape: "circle",
          showThresholdMarkers: false,
          barWidthFactor: 0.3,
          effects: {
            rounded: true,
            barGlow: true,
            centerGlow: true,
            spotlight: true
          },
          reduceOptions: {
            values: false,
            calcs: ["lastNotNull"]
          }
        },
        fieldConfig: {
          defaults: {
            color: { mode: _grafana_schema_dist_esm_index_gen__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.PaletteClassic }
          },
          overrides: []
        }
      });
    }
  }
}


/***/ }),

/***/ "./public/app/plugins/panel/stat/common.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
//# sourceMappingURL=radialBarPanel.b761dee7cd81eb148117.js.map