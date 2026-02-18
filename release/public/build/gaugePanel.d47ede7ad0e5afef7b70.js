"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["gaugePanel"],{

/***/ "./public/app/plugins/panel/bargauge/BarGaugeLegend.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarGaugeLegend: () => (/* binding */ BarGaugeLegend)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/field/fieldColor.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/VizLayout/VizLayout.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/VizLegend/VizLegend.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/uPlot/utils.ts");







const BarGaugeLegend = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(
  ({ data, placement, calcs, displayMode, ...vizLayoutLegendProps }) => {
    const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useTheme2)();
    let legendItems = [];
    (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.cacheFieldDisplayNames)(data);
    data.forEach((series, frameIndex) => {
      series.fields.forEach((field, i) => {
        const fieldIndex = i + 1;
        if (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.time || field.config.custom?.hideFrom?.legend) {
          return;
        }
        const label = field.state?.displayName ?? field.name;
        const color = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getFieldSeriesColor)(field, theme).color;
        const item = {
          label: label.toString(),
          color,
          yAxis: field.config.custom?.axisPlacement === _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.AxisPlacement.Right ? 2 : 1,
          disabled: field.state?.hideFrom?.viz,
          getDisplayValues: () => (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_9__.getDisplayValuesForCalcs)(calcs, field, theme),
          getItemKey: () => `${label}-${frameIndex}-${fieldIndex}`
        };
        legendItems.push(item);
      });
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.VizLayout.Legend, { placement, ...vizLayoutLegendProps, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.VizLegend,
      {
        placement,
        items: legendItems,
        displayMode,
        sortBy: vizLayoutLegendProps.sortBy,
        sortDesc: vizLayoutLegendProps.sortDesc,
        isSortable: true
      }
    ) });
  }
);
BarGaugeLegend.displayName = "BarGaugeLegend";


/***/ }),

/***/ "./public/app/plugins/panel/bargauge/BarGaugePanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarGaugePanel: () => (/* binding */ BarGaugePanel),
/* harmony export */   clearNameForSingleSeries: () => (/* binding */ clearNameForSingleSeries)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/field/fieldDisplay.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/panel.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/BarGauge/BarGauge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/VizRepeater/VizRepeater.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/VizLayout/VizLayout.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/DataLinks/DataLinksContextMenu.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _BarGaugeLegend__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/panel/bargauge/BarGaugeLegend.tsx");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/panel/bargauge/panelcfg.gen.ts");










class BarGaugePanel extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor() {
    super(...arguments);
    this.renderComponent = (valueProps, menuProps) => {
      const { options, fieldConfig } = this.props;
      const { value, alignmentFactors, orientation, width, height, count } = valueProps;
      const { field, display, view, colIndex } = value;
      const { openMenu, targetClassName } = menuProps;
      const spacing = this.getItemSpacing();
      const isOverflow = (height + spacing) * count - spacing > this.props.height;
      let processor = void 0;
      if (view && (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isNumber)(colIndex)) {
        processor = view.getFieldDisplayProcessor(colIndex);
      }
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.BarGauge,
        {
          value: clearNameForSingleSeries(count, fieldConfig.defaults, display),
          width,
          height,
          orientation,
          field,
          text: options.text,
          display: processor,
          theme: app_core_config__WEBPACK_IMPORTED_MODULE_10__.config.theme2,
          itemSpacing: spacing,
          displayMode: options.displayMode,
          onClick: openMenu,
          className: targetClassName,
          alignmentFactors: count > 1 ? alignmentFactors : void 0,
          showUnfilled: options.showUnfilled,
          valueDisplayMode: options.valueMode,
          namePlacement: options.namePlacement,
          isOverflow
        }
      );
    };
    this.renderValue = (valueProps) => {
      const { value, orientation } = valueProps;
      const { hasLinks, getLinks } = value;
      if (hasLinks && getLinks) {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: "100%", display: orientation === _grafana_data__WEBPACK_IMPORTED_MODULE_4__.VizOrientation.Vertical ? "flex" : "initial" }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.DataLinksContextMenu, { style: { height: "100%" }, links: getLinks, children: (api) => this.renderComponent(valueProps, api) }) });
      }
      return this.renderComponent(valueProps, {});
    };
    this.getValues = () => {
      const { data, options, replaceVariables, fieldConfig, timeZone } = this.props;
      return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getFieldDisplayValues)({
        fieldConfig,
        reduceOptions: options.reduceOptions,
        replaceVariables,
        theme: app_core_config__WEBPACK_IMPORTED_MODULE_10__.config.theme2,
        data: data.series,
        timeZone
      });
    };
  }
  getItemSpacing() {
    if (this.props.options.displayMode === "lcd") {
      return 2;
    }
    return 10;
  }
  getOrientation() {
    const { options, width, height } = this.props;
    const { orientation } = options;
    if (orientation === _grafana_data__WEBPACK_IMPORTED_MODULE_4__.VizOrientation.Auto) {
      if (width > height) {
        return _grafana_data__WEBPACK_IMPORTED_MODULE_4__.VizOrientation.Vertical;
      } else {
        return _grafana_data__WEBPACK_IMPORTED_MODULE_4__.VizOrientation.Horizontal;
      }
    }
    return orientation;
  }
  calcBarSize() {
    const { options } = this.props;
    const orientation = this.getOrientation();
    const isManualSizing = options.sizing === _grafana_schema__WEBPACK_IMPORTED_MODULE_5__.BarGaugeSizing.Manual;
    const isVertical = orientation === _grafana_data__WEBPACK_IMPORTED_MODULE_4__.VizOrientation.Vertical;
    const isHorizontal = orientation === _grafana_data__WEBPACK_IMPORTED_MODULE_4__.VizOrientation.Horizontal;
    const minVizWidth = isManualSizing && isVertical ? options.minVizWidth : _panelcfg_gen__WEBPACK_IMPORTED_MODULE_12__.defaultOptions.minVizWidth;
    const minVizHeight = isManualSizing && isHorizontal ? options.minVizHeight : _panelcfg_gen__WEBPACK_IMPORTED_MODULE_12__.defaultOptions.minVizHeight;
    const maxVizHeight = isManualSizing && isHorizontal ? options.maxVizHeight : _panelcfg_gen__WEBPACK_IMPORTED_MODULE_12__.defaultOptions.maxVizHeight;
    return { minVizWidth, minVizHeight, maxVizHeight };
  }
  getLegend() {
    const { options, data } = this.props;
    const { legend } = options;
    if (legend.showLegend && data && data.series.length > 0) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_BarGaugeLegend__WEBPACK_IMPORTED_MODULE_11__.BarGaugeLegend, { data: data.series, ...legend });
    }
    return null;
  }
  render() {
    const { height, width, options, data, renderCounter } = this.props;
    const { minVizWidth, minVizHeight, maxVizHeight } = this.calcBarSize();
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.VizLayout, { width, height, legend: this.getLegend(), children: (vizWidth, vizHeight) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.VizRepeater,
        {
          source: data,
          getAlignmentFactors: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.getDisplayValueAlignmentFactors,
          getValues: this.getValues,
          renderValue: this.renderValue,
          renderCounter,
          width: vizWidth,
          height: vizHeight,
          maxVizHeight,
          minVizWidth,
          minVizHeight,
          itemSpacing: this.getItemSpacing(),
          orientation: options.orientation
        }
      );
    } });
  }
}
function clearNameForSingleSeries(count, field, display) {
  if (count === 1 && !field.displayName) {
    return {
      ...display,
      title: void 0
    };
  }
  return display;
}


/***/ }),

/***/ "./public/app/plugins/panel/bargauge/panelcfg.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");


const defaultOptions = {
  displayMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.BarGaugeDisplayMode.Gradient,
  maxVizHeight: 300,
  minVizHeight: 16,
  minVizWidth: 8,
  namePlacement: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.BarGaugeNamePlacement.Auto,
  showUnfilled: true,
  sizing: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.BarGaugeSizing.Auto,
  valueMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.BarGaugeValueMode.Color
};


/***/ }),

/***/ "./public/app/plugins/panel/gauge/GaugeMigrations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gaugePanelChangedHandler: () => (/* binding */ gaugePanelChangedHandler),
/* harmony export */   gaugePanelMigrationHandler: () => (/* binding */ gaugePanelMigrationHandler)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/components/SingleStatShared/SingleStatBaseOptions.ts");


const gaugePanelMigrationHandler = (panel) => {
  return (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.sharedSingleStatMigrationHandler)(panel);
};
const gaugePanelChangedHandler = (panel, prevPluginId, prevOptions) => {
  const opts = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.sharedSingleStatPanelChangedHandler)(panel, prevPluginId, prevOptions);
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

/***/ "./public/app/plugins/panel/gauge/GaugePanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GaugePanel: () => (/* binding */ GaugePanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/field/fieldDisplay.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/field/displayProcessor.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Gauge/Gauge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/VizRepeater/VizRepeater.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/DataLinks/DataLinksContextMenu.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _bargauge_BarGaugePanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/bargauge/BarGaugePanel.tsx");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/gauge/panelcfg.gen.ts");









class GaugePanel extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    this.renderComponent = (valueProps, menuProps) => {
      const { options, fieldConfig } = this.props;
      const { width, height, count, value } = valueProps;
      const { field, display } = value;
      const { openMenu, targetClassName } = menuProps;
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Gauge,
        {
          value: (0,_bargauge_BarGaugePanel__WEBPACK_IMPORTED_MODULE_9__.clearNameForSingleSeries)(count, fieldConfig.defaults, display),
          width,
          height,
          field,
          text: options.text,
          showThresholdLabels: options.showThresholdLabels,
          showThresholdMarkers: options.showThresholdMarkers,
          theme: app_core_config__WEBPACK_IMPORTED_MODULE_8__.config.theme2,
          onClick: openMenu,
          className: targetClassName,
          orientation: options.orientation
        }
      );
    };
    this.renderValue = (valueProps) => {
      const { value } = valueProps;
      const { getLinks, hasLinks } = value;
      if (hasLinks && getLinks) {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.DataLinksContextMenu, { links: getLinks, style: { flexGrow: 1 }, children: (api) => {
          return this.renderComponent(valueProps, api);
        } });
      }
      return this.renderComponent(valueProps, {});
    };
    this.getValues = () => {
      const { data, options, replaceVariables, fieldConfig, timeZone } = this.props;
      for (let frame of data.series) {
        for (let field of frame.fields) {
          if (field.config.unit === "percent" || field.config.unit === "percentunit") {
            const min = field.config.min ?? 0;
            const max = field.config.max ?? (field.config.unit === "percent" ? 100 : 1);
            field.state = field.state ?? {};
            field.state.range = { min, max, delta: max - min };
            field.display = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getDisplayProcessor)({ field, theme: app_core_config__WEBPACK_IMPORTED_MODULE_8__.config.theme2 });
          }
        }
      }
      return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getFieldDisplayValues)({
        fieldConfig,
        reduceOptions: options.reduceOptions,
        replaceVariables,
        theme: app_core_config__WEBPACK_IMPORTED_MODULE_8__.config.theme2,
        data: data.series,
        timeZone
      });
    };
    this.calculateGaugeSize = () => {
      const { options } = this.props;
      const orientation = options.orientation;
      const isManualSizing = options.sizing === _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.BarGaugeSizing.Manual;
      const isVerticalOrientation = orientation === _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.VizOrientation.Vertical;
      const isHorizontalOrientation = orientation === _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.VizOrientation.Horizontal;
      const minVizWidth = isManualSizing && isVerticalOrientation ? options.minVizWidth : _panelcfg_gen__WEBPACK_IMPORTED_MODULE_10__.defaultOptions.minVizWidth;
      const minVizHeight = isManualSizing && isHorizontalOrientation ? options.minVizHeight : _panelcfg_gen__WEBPACK_IMPORTED_MODULE_10__.defaultOptions.minVizHeight;
      return { minVizWidth, minVizHeight };
    };
  }
  render() {
    const { height, width, data, renderCounter, options } = this.props;
    const { minVizHeight, minVizWidth } = this.calculateGaugeSize();
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.VizRepeater,
      {
        getValues: this.getValues,
        renderValue: this.renderValue,
        width,
        height,
        source: data,
        autoGrid: true,
        renderCounter,
        orientation: options.orientation,
        minVizHeight,
        minVizWidth
      }
    );
  }
}


/***/ }),

/***/ "./public/app/plugins/panel/gauge/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/options/builder/text.tsx");
/* harmony import */ var _stat_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/stat/common.ts");
/* harmony import */ var _GaugeMigrations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/gauge/GaugeMigrations.ts");
/* harmony import */ var _GaugePanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/gauge/GaugePanel.tsx");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/gauge/panelcfg.gen.ts");
/* harmony import */ var _suggestions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/gauge/suggestions.ts");










const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_GaugePanel__WEBPACK_IMPORTED_MODULE_6__.GaugePanel).useFieldConfig({
  useCustomConfig: (builder) => {
    builder.addNumberInput({
      path: "neutral",
      name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("gauge.name-neutral", "Neutral"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("gauge.description-neutral", "Leave empty to use Min as neutral point"),
      category: [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("gauge.category-gauge", "Gauge")],
      settings: {
        placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("gauge.placeholder-neutral", "auto")
      }
    });
  }
}).setPanelOptions((builder) => {
  const category = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("gauge.category-gauge", "Gauge")];
  (0,_stat_common__WEBPACK_IMPORTED_MODULE_4__.addStandardDataReduceOptions)(builder);
  (0,_stat_common__WEBPACK_IMPORTED_MODULE_4__.addOrientationOption)(builder, category);
  builder.addBooleanSwitch({
    path: "showThresholdLabels",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("gauge.name-show-threshold-labels", "Show threshold labels"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("gauge.description-show-threshold-labels", "Render the threshold values around the gauge bar"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.showThresholdLabels
  }).addBooleanSwitch({
    path: "showThresholdMarkers",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("gauge.name-show-threshold-markers", "Show threshold markers"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("gauge.description-show-threshold-markers", "Renders the thresholds as an outer bar"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.showThresholdMarkers
  }).addRadio({
    path: "sizing",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("gauge.name-gauge-size", "Gauge size"),
    settings: {
      options: [
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BarGaugeSizing.Auto, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("gauge.gauge-size-options.label-auto", "Auto") },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BarGaugeSizing.Manual, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("gauge.gauge-size-options.label-manual", "Manual") }
      ]
    },
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.sizing,
    showIf: (options) => options.orientation !== _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.VizOrientation.Auto
  }).addSliderInput({
    path: "minVizWidth",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("gauge.name-min-width", "Min width"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("gauge.description-min-width", "Minimum column width (vertical orientation)"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.minVizWidth,
    settings: {
      min: 0,
      max: 600,
      step: 1
    },
    category,
    showIf: (options) => options.sizing === _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BarGaugeSizing.Manual && options.orientation === _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.VizOrientation.Vertical
  }).addSliderInput({
    path: "minVizHeight",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("gauge.name-min-height", "Min height"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("gauge.description-min-height", "Minimum row height (horizontal orientation)"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.minVizHeight,
    category,
    settings: {
      min: 0,
      max: 600,
      step: 1
    },
    showIf: (options) => options.sizing === _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BarGaugeSizing.Manual && options.orientation === _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.VizOrientation.Horizontal
  });
  _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.addTextSizeOptions(builder, { withTitle: true, withValue: true });
}).setPanelChangeHandler(_GaugeMigrations__WEBPACK_IMPORTED_MODULE_5__.gaugePanelChangedHandler).setSuggestionsSupplier(new _suggestions__WEBPACK_IMPORTED_MODULE_8__.GaugeSuggestionsSupplier()).setMigrationHandler(_GaugeMigrations__WEBPACK_IMPORTED_MODULE_5__.gaugePanelMigrationHandler);


/***/ }),

/***/ "./public/app/plugins/panel/gauge/panelcfg.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");


const defaultOptions = {
  minVizHeight: 75,
  minVizWidth: 75,
  showThresholdLabels: false,
  showThresholdMarkers: true,
  sizing: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.BarGaugeSizing.Auto
};


/***/ }),

/***/ "./public/app/plugins/panel/gauge/suggestions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GaugeSuggestionsSupplier: () => (/* binding */ GaugeSuggestionsSupplier)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/thresholds.ts");
/* harmony import */ var app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/suggestions.ts");



class GaugeSuggestionsSupplier {
  getSuggestionsForData(builder) {
    const { dataSummary } = builder;
    if (!dataSummary.hasData || !dataSummary.hasNumberField) {
      return;
    }
    if (dataSummary.numberFieldCount >= 50) {
      return;
    }
    const list = builder.getListAppender({
      name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionName.Gauge,
      pluginId: "gauge",
      options: {},
      fieldConfig: {
        defaults: {
          thresholds: {
            steps: [
              { value: -Infinity, color: "green" },
              { value: 70, color: "orange" },
              { value: 85, color: "red" }
            ],
            mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ThresholdsMode.Percentage
          },
          custom: {}
        },
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
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionName.GaugeNoThresholds,
        options: {
          reduceOptions: {
            values: true,
            calcs: []
          },
          showThresholdMarkers: false
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
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionName.GaugeNoThresholds,
        options: {
          reduceOptions: {
            values: false,
            calcs: ["lastNotNull"]
          },
          showThresholdMarkers: false
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
//# sourceMappingURL=gaugePanel.d47ede7ad0e5afef7b70.js.map