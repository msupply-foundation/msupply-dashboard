"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["statPanel"],{

/***/ "./public/app/plugins/panel/stat/StatMigrations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   statPanelChangedHandler: () => (/* binding */ statPanelChangedHandler)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/fieldColor.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/SingleStatShared/SingleStatBaseOptions.ts");




const statPanelChangedHandler = (panel, prevPluginId, prevOptions) => {
  const options = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.sharedSingleStatPanelChangedHandler)(panel, prevPluginId, prevOptions);
  if (prevOptions.angular && (prevPluginId === "singlestat" || prevPluginId === "grafana-singlestat-panel")) {
    const oldOptions = prevOptions.angular;
    options.graphMode = _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.BigValueGraphMode.None;
    if (oldOptions.sparkline && oldOptions.sparkline.show) {
      options.graphMode = _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.BigValueGraphMode.Area;
    }
    if (oldOptions.colorBackground) {
      options.colorMode = _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.BigValueColorMode.Background;
    } else if (oldOptions.colorValue) {
      options.colorMode = _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.BigValueColorMode.Value;
    } else {
      options.colorMode = _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.BigValueColorMode.None;
      if (oldOptions.sparkline?.lineColor && options.graphMode === _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.BigValueGraphMode.Area) {
        const cfg = panel.fieldConfig ?? {};
        cfg.defaults.color = {
          mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed,
          fixedColor: oldOptions.sparkline.lineColor
        };
        panel.fieldConfig = cfg;
      }
    }
    if (oldOptions.valueName === "name") {
      options.textMode = _grafana_schema__WEBPACK_IMPORTED_MODULE_1__.BigValueTextMode.Name;
    }
  }
  return options;
};


/***/ }),

/***/ "./public/app/plugins/panel/stat/StatPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatPanel: () => (/* binding */ StatPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/field/fieldDisplay.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/field/fieldOverrides.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/BigValue/BigValue.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/VizRepeater/VizRepeater.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/DataLinks/DataLinksContextMenu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");








const StatPanel = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(
  ({
    timeRange,
    options,
    fieldConfig,
    title,
    data,
    replaceVariables,
    timeZone,
    height,
    width,
    renderCounter
  }) => {
    const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useTheme2)();
    const getTextMode = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
      if (options.textMode === _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.BigValueTextMode.Auto && (fieldConfig.defaults.displayName || !title)) {
        return _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.BigValueTextMode.ValueAndName;
      }
      return options.textMode;
    }, [options.textMode, fieldConfig.defaults.displayName, title]);
    const renderComponent = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
      (valueProps, menuProps) => {
        const { value, alignmentFactors, width: width2, height: height2, count } = valueProps;
        const { openMenu, targetClassName } = menuProps;
        let sparkline = value.sparkline;
        if (sparkline) {
          sparkline.timeRange = timeRange;
        }
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.BigValue,
          {
            value: value.display,
            count,
            sparkline,
            colorMode: options.colorMode,
            graphMode: options.graphMode,
            justifyMode: options.justifyMode,
            textMode: getTextMode(),
            alignmentFactors,
            text: options.text,
            width: width2,
            height: height2,
            theme,
            onClick: openMenu,
            className: targetClassName,
            disableWideLayout: !options.wideLayout,
            percentChangeColorMode: options.percentChangeColorMode
          }
        );
      },
      [theme, timeRange, options, getTextMode]
    );
    const renderValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
      (valueProps) => {
        const { value } = valueProps;
        const { getLinks, hasLinks } = value;
        if (hasLinks && getLinks) {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.DataLinksContextMenu, { links: getLinks, children: (api) => {
            return renderComponent(valueProps, api);
          } });
        }
        return renderComponent(valueProps, {});
      },
      [renderComponent]
    );
    const getValues = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
      let globalRange = void 0;
      for (let frame of data.series) {
        for (let field of frame.fields) {
          let { config } = field;
          if (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_4__.FieldType.number) {
            if (field.state?.range) {
              continue;
            }
            if (!globalRange && (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isNumber)(config.min) || !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isNumber)(config.max))) {
              globalRange = (0,_grafana_data_internal__WEBPACK_IMPORTED_MODULE_5__.findNumericFieldMinMax)(data.series);
            }
            const min = config.min ?? globalRange.min;
            const max = config.max ?? globalRange.max;
            field.state = field.state ?? {};
            field.state.range = { min, max, delta: max - min };
          }
        }
      }
      return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getFieldDisplayValues)({
        fieldConfig,
        reduceOptions: options.reduceOptions,
        replaceVariables,
        theme,
        data: data.series,
        sparkline: options.graphMode !== _grafana_schema__WEBPACK_IMPORTED_MODULE_6__.BigValueGraphMode.None,
        percentChange: options.showPercentChange,
        timeZone
      });
    }, [data, fieldConfig, theme, options, replaceVariables, timeZone]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.VizRepeater,
      {
        getValues,
        getAlignmentFactors: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.getDisplayValueAlignmentFactors,
        renderValue,
        width,
        height,
        source: data,
        itemSpacing: 3,
        renderCounter,
        autoGrid: true,
        orientation: options.orientation
      }
    );
  }
);
StatPanel.displayName = "StatPanel";


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

/***/ "./public/app/plugins/panel/stat/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/options/builder/text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/SingleStatShared/SingleStatBaseOptions.ts");
/* harmony import */ var _StatMigrations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/stat/StatMigrations.ts");
/* harmony import */ var _StatPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/stat/StatPanel.tsx");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/stat/common.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/stat/panelcfg.gen.ts");
/* harmony import */ var _suggestions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/stat/suggestions.ts");










const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_StatPanel__WEBPACK_IMPORTED_MODULE_6__.StatPanel).useFieldConfig().setPanelOptions((builder) => {
  const mainCategory = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.category-stat-styles", "Stat styles")];
  (0,_common__WEBPACK_IMPORTED_MODULE_7__.addStandardDataReduceOptions)(builder);
  (0,_common__WEBPACK_IMPORTED_MODULE_7__.addOrientationOption)(builder, mainCategory);
  _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.addTextSizeOptions(builder, { withTitle: true, withValue: true, withPercentChange: true });
  builder.addSelect({
    path: "textMode",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.name-text-mode", "Text mode"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.description-text-mode", "Control if name and value is displayed or just name"),
    category: mainCategory,
    settings: {
      options: [
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BigValueTextMode.Auto, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.text-mode-options.label-auto", "Auto") },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BigValueTextMode.Value, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.text-mode-options.label-value", "Value") },
        {
          value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BigValueTextMode.ValueAndName,
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.text-mode-options.label-value-and-name", "Value and name")
        },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BigValueTextMode.Name, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.text-mode-options.label-name", "Name") },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BigValueTextMode.None, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.text-mode-options.label-none", "None") }
      ]
    },
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.defaultOptions.textMode
  }).addRadio({
    path: "wideLayout",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.name-wide-layout", "Wide layout"),
    category: mainCategory,
    settings: {
      options: [
        { value: true, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.wide-layout-options.label-on", "On") },
        { value: false, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.wide-layout-options.label-off", "Off") }
      ]
    },
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.defaultOptions.wideLayout,
    showIf: (config) => config.textMode === _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BigValueTextMode.ValueAndName
  });
  builder.addSelect({
    path: "colorMode",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.name-color-modcolor-mode-options.label", "Color mode"),
    defaultValue: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BigValueColorMode.Value,
    category: mainCategory,
    settings: {
      options: [
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BigValueColorMode.None, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.color-mode-options.label-none", "None") },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BigValueColorMode.Value, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.color-mode-options.label-value", "Value") },
        {
          value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BigValueColorMode.Background,
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.color-mode-options.label-background-gradient", "Background Gradient")
        },
        {
          value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BigValueColorMode.BackgroundSolid,
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.color-mode-options.label-background-solid", "Background Solid")
        }
      ]
    }
  }).addRadio({
    path: "graphMode",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.name-graph-mode", "Graph mode"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.description-graph-mode", "Stat panel graph / sparkline mode"),
    category: mainCategory,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.defaultOptions.graphMode,
    settings: {
      options: [
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BigValueGraphMode.None, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.graph-mode.options.label-none", "None") },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BigValueGraphMode.Area, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.graph-mode.options.label-area", "Area") }
      ]
    }
  }).addRadio({
    path: "justifyMode",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.name-text-alignment", "Text alignment"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.defaultOptions.justifyMode,
    category: mainCategory,
    settings: {
      options: [
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BigValueJustifyMode.Auto, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.text-alignment-options.label-auto", "Auto") },
        { value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.BigValueJustifyMode.Center, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.text-alignment-options.label-center", "Center") }
      ]
    }
  }).addBooleanSwitch({
    path: "showPercentChange",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.name-show-percent-change", "Show percent change"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.defaultOptions.showPercentChange,
    category: mainCategory,
    showIf: (config) => !config.reduceOptions.values
  }).addSelect({
    path: "percentChangeColorMode",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.percent-change-color-mode", "Percent change color mode"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_8__.defaultOptions.percentChangeColorMode,
    category: mainCategory,
    settings: {
      options: [
        {
          value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.PercentChangeColorMode.Standard,
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.percent-change-color-mode-options.label-standard", "Standard")
        },
        {
          value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.PercentChangeColorMode.Inverted,
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.percent-change-color-mode-options.label-inverted", "Inverted")
        },
        {
          value: _grafana_schema__WEBPACK_IMPORTED_MODULE_2__.PercentChangeColorMode.SameAsValue,
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("stat.percent-change-color-mode-options.label-same-as-value", "Same as Value")
        }
      ]
    },
    showIf: (config) => config.showPercentChange
  });
}).setNoPadding().setPanelChangeHandler(_StatMigrations__WEBPACK_IMPORTED_MODULE_5__.statPanelChangedHandler).setSuggestionsSupplier(new _suggestions__WEBPACK_IMPORTED_MODULE_9__.StatSuggestionsSupplier()).setMigrationHandler(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.sharedSingleStatMigrationHandler);


/***/ }),

/***/ "./public/app/plugins/panel/stat/panelcfg.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");


const defaultOptions = {
  colorMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.BigValueColorMode.Value,
  graphMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.BigValueGraphMode.Area,
  justifyMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.BigValueJustifyMode.Auto,
  percentChangeColorMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.PercentChangeColorMode.Standard,
  showPercentChange: false,
  textMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.BigValueTextMode.Auto,
  wideLayout: true
};


/***/ }),

/***/ "./public/app/plugins/panel/stat/suggestions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatSuggestionsSupplier: () => (/* binding */ StatSuggestionsSupplier)
/* harmony export */ });
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/suggestions.ts");



class StatSuggestionsSupplier {
  getSuggestionsForData(builder) {
    const { dataSummary: ds } = builder;
    if (!ds.hasData) {
      return;
    }
    const list = builder.getListAppender({
      name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionName.Stat,
      pluginId: "stat",
      options: {},
      fieldConfig: {
        defaults: {
          unit: "short",
          custom: {}
        },
        overrides: []
      },
      cardOptions: {
        previewModifier: (s) => {
          if (s.options.reduceOptions.values) {
            s.options.reduceOptions.limit = 1;
          }
        }
      }
    });
    if (ds.hasStringField && ds.hasNumberField && ds.frameCount === 1 && ds.rowCountTotal < 10) {
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionName.Stat,
        options: {
          reduceOptions: {
            values: true,
            calcs: [],
            fields: "/.*/"
          }
        }
      });
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionName.StatColoredBackground,
        options: {
          reduceOptions: {
            values: true,
            calcs: [],
            fields: "/.*/"
          },
          colorMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.BigValueColorMode.Background
        }
      });
    }
    if (ds.stringFieldCount === 1 && ds.frameCount === 1 && ds.rowCountTotal < 10 && ds.fieldCount === 1) {
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionName.Stat,
        options: {
          reduceOptions: {
            values: true,
            calcs: [],
            fields: "/.*/"
          },
          colorMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.BigValueColorMode.None
        }
      });
    }
    if (ds.hasNumberField && ds.hasTimeField) {
      list.append({
        options: {
          reduceOptions: {
            values: false,
            calcs: ["lastNotNull"]
          }
        }
      });
      list.append({
        name: app_types_suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionName.StatColoredBackground,
        options: {
          reduceOptions: {
            values: false,
            calcs: ["lastNotNull"]
          },
          graphMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.BigValueGraphMode.None,
          colorMode: _grafana_schema__WEBPACK_IMPORTED_MODULE_0__.BigValueColorMode.Background
        }
      });
    }
  }
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
//# sourceMappingURL=statPanel.62590ba8fb10f6dca73e.js.map