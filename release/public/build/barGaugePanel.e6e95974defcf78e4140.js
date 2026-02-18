"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["barGaugePanel"],{

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

/***/ "./public/app/plugins/panel/bargauge/BarGaugeMigrations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   barGaugePanelMigrationHandler: () => (/* binding */ barGaugePanelMigrationHandler)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/components/SingleStatShared/SingleStatBaseOptions.ts");


const barGaugePanelMigrationHandler = (panel) => {
  return (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.sharedSingleStatMigrationHandler)(panel);
};


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

/***/ "./public/app/plugins/panel/bargauge/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/panel.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/options/builder/legend.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/options/builder/text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/SingleStatShared/SingleStatBaseOptions.ts");
/* harmony import */ var _stat_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/stat/common.ts");
/* harmony import */ var _BarGaugeMigrations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/bargauge/BarGaugeMigrations.ts");
/* harmony import */ var _BarGaugePanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/bargauge/BarGaugePanel.tsx");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/bargauge/panelcfg.gen.ts");
/* harmony import */ var _suggestions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/panel/bargauge/suggestions.ts");










const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_BarGaugePanel__WEBPACK_IMPORTED_MODULE_9__.BarGaugePanel).useFieldConfig().setPanelOptions((builder) => {
  const category = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.category-bar-gauge", "Bar gauge")];
  (0,_stat_common__WEBPACK_IMPORTED_MODULE_7__.addStandardDataReduceOptions)(builder);
  (0,_stat_common__WEBPACK_IMPORTED_MODULE_7__.addOrientationOption)(builder, category);
  _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.addLegendOptions(builder, true, false);
  _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.addTextSizeOptions(builder, { withTitle: true, withValue: true });
  builder.addRadio({
    path: "displayMode",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.name-display-mode", "Display mode"),
    category,
    settings: {
      options: [
        {
          value: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.BarGaugeDisplayMode.Gradient,
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.display-mode-options.label-gradient", "Gradient")
        },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.BarGaugeDisplayMode.Lcd, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.display-mode-options.label-retro", "Retro LCD") },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.BarGaugeDisplayMode.Basic, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.display-mode-options.label-basic", "Basic") }
      ]
    },
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_10__.defaultOptions.displayMode
  }).addRadio({
    path: "valueMode",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.name-value-display", "Value display"),
    category,
    settings: {
      options: [
        {
          value: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.BarGaugeValueMode.Color,
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.value-display-options.label-value-color", "Value color")
        },
        {
          value: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.BarGaugeValueMode.Text,
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.value-display-options.label-text-color", "Text color")
        },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.BarGaugeValueMode.Hidden, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.value-display-options.label-hidden", "Hidden") }
      ]
    },
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_10__.defaultOptions.valueMode
  }).addRadio({
    path: "namePlacement",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.name-name-placement", "Name placement"),
    category,
    settings: {
      options: [
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.BarGaugeNamePlacement.Auto, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.name-placement-options.label-auto", "Auto") },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.BarGaugeNamePlacement.Top, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.name-placement-options.label-top", "Top") },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.BarGaugeNamePlacement.Left, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.name-placement-options.label-left", "Left") },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.BarGaugeNamePlacement.Hidden, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.name-placement-options.label-hidden", "Hidden") }
      ]
    },
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_10__.defaultOptions.namePlacement,
    showIf: (options) => options.orientation !== _grafana_data__WEBPACK_IMPORTED_MODULE_1__.VizOrientation.Vertical
  }).addRadio({
    path: "namePlacement",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.name-name-placement", "Name placement"),
    category,
    settings: {
      options: [
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.BarGaugeNamePlacement.Auto, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.name-placement-options.label-auto", "Auto") },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.BarGaugeNamePlacement.Hidden, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.name-placement-options.label-hidden", "Hidden") }
      ]
    },
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_10__.defaultOptions.namePlacement,
    showIf: (options) => options.orientation === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.VizOrientation.Vertical
  }).addBooleanSwitch({
    path: "showUnfilled",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.name-show-unfilled-area", "Show unfilled area"),
    category,
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.description-show-unfilled-area", "When enabled renders the unfilled region as gray"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_10__.defaultOptions.showUnfilled,
    showIf: (options) => options.displayMode !== "lcd"
  }).addRadio({
    path: "sizing",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.name-bar-size", "Bar size"),
    category,
    settings: {
      options: [
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.BarGaugeSizing.Auto, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.bar-size-options.label-auto", "Auto") },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.BarGaugeSizing.Manual, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.bar-size-options.label-manual", "Manual") }
      ]
    },
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_10__.defaultOptions.sizing
  }).addSliderInput({
    path: "minVizWidth",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.name-min-width", "Min width"),
    category,
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.description-min-width", "Minimum column width (vertical orientation)"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_10__.defaultOptions.minVizWidth,
    settings: {
      min: 0,
      max: 300,
      step: 1
    },
    showIf: (options) => options.sizing === _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.BarGaugeSizing.Manual && (options.orientation === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.VizOrientation.Auto || options.orientation === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.VizOrientation.Vertical)
  }).addSliderInput({
    path: "minVizHeight",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.name-min-height", "Min height"),
    category,
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.description-min-height", "Minimum row height (horizontal orientation)"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_10__.defaultOptions.minVizHeight,
    settings: {
      min: 0,
      max: 300,
      step: 1
    },
    showIf: (options) => options.sizing === _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.BarGaugeSizing.Manual && (options.orientation === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.VizOrientation.Auto || options.orientation === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.VizOrientation.Horizontal)
  }).addSliderInput({
    path: "maxVizHeight",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.name-max-height", "Max height"),
    category,
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("bargauge.description-max-height", "Maximum row height (horizontal orientation)"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_10__.defaultOptions.maxVizHeight,
    settings: {
      min: 0,
      max: 300,
      step: 1
    },
    showIf: (options) => options.sizing === _grafana_schema__WEBPACK_IMPORTED_MODULE_3__.BarGaugeSizing.Manual && (options.orientation === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.VizOrientation.Auto || options.orientation === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.VizOrientation.Horizontal)
  });
}).setPanelChangeHandler(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.sharedSingleStatPanelChangedHandler).setMigrationHandler(_BarGaugeMigrations__WEBPACK_IMPORTED_MODULE_8__.barGaugePanelMigrationHandler).setSuggestionsSupplier(new _suggestions__WEBPACK_IMPORTED_MODULE_11__.BarGaugeSuggestionsSupplier());


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

/***/ "./public/app/plugins/panel/bargauge/suggestions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarGaugeSuggestionsSupplier: () => (/* binding */ BarGaugeSuggestionsSupplier)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/panel.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var app_types_suggestions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/types/suggestions.ts");




class BarGaugeSuggestionsSupplier {
  getSuggestionsForData(builder) {
    const { dataSummary } = builder;
    if (!dataSummary.hasData || !dataSummary.hasNumberField) {
      return;
    }
    const list = builder.getListAppender({
      name: "",
      pluginId: "bargauge",
      options: {},
      fieldConfig: {
        defaults: {
          custom: {}
        },
        overrides: []
      }
    });
    if (dataSummary.numberFieldCount > 50) {
      return;
    }
    if (dataSummary.hasStringField && dataSummary.frameCount === 1 && dataSummary.rowCountTotal < 30) {
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_2__.SuggestionName.BarGaugeBasic,
        options: {
          reduceOptions: {
            values: true,
            calcs: []
          },
          displayMode: _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.BarGaugeDisplayMode.Basic,
          orientation: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.VizOrientation.Horizontal
        },
        fieldConfig: {
          defaults: {
            color: {
              mode: "continuous-GrYlRd"
            }
          },
          overrides: []
        }
      });
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_2__.SuggestionName.BarGaugeLCD,
        options: {
          reduceOptions: {
            values: true,
            calcs: []
          },
          displayMode: _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.BarGaugeDisplayMode.Lcd,
          orientation: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.VizOrientation.Horizontal
        },
        fieldConfig: {
          defaults: {
            color: {
              mode: "continuous-GrYlRd"
            }
          },
          overrides: []
        }
      });
    } else {
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_2__.SuggestionName.BarGaugeBasic,
        options: {
          displayMode: _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.BarGaugeDisplayMode.Basic,
          orientation: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.VizOrientation.Horizontal,
          reduceOptions: {
            values: false,
            calcs: ["lastNotNull"]
          }
        },
        fieldConfig: {
          defaults: {
            color: {
              mode: "continuous-GrYlRd"
            }
          },
          overrides: []
        }
      });
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_2__.SuggestionName.BarGaugeLCD,
        options: {
          displayMode: _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.BarGaugeDisplayMode.Lcd,
          orientation: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.VizOrientation.Horizontal,
          reduceOptions: {
            values: false,
            calcs: ["lastNotNull"]
          }
        },
        fieldConfig: {
          defaults: {
            color: {
              mode: "continuous-GrYlRd"
            }
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
//# sourceMappingURL=barGaugePanel.e6e95974defcf78e4140.js.map