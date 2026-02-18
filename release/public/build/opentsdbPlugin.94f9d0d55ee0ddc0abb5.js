"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["opentsdbPlugin"],{

/***/ "./public/app/plugins/datasource/opentsdb/components/AnnotationEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnotationEditor: () => (/* binding */ AnnotationEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/FormLabel/FormLabel.tsx");




const AnnotationEditor = (props) => {
  const { query, onChange } = props;
  const [target, setTarget] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(query.target ?? "");
  const [isGlobal, setIsGlobal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(query.isGlobal ?? false);
  const updateValue = (key, val) => {
    onChange({
      ...query,
      [key]: val,
      fromAnnotations: true
    });
  };
  const updateIsGlobal = (isGlobal2) => {
    isGlobal2 = !isGlobal2;
    setIsGlobal(isGlobal2);
    updateValue("isGlobal", isGlobal2);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "gf-form-group", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "gf-form", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFormLabel, { width: 12, children: "OpenTSDB metrics query" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input,
        {
          value: target,
          onChange: (e) => setTarget(e.currentTarget.value ?? ""),
          onBlur: () => updateValue("target", target),
          placeholder: "events.eventname"
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "gf-form", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFormLabel, { width: 12, children: "Show Global Annotations?" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineSwitch, { value: isGlobal, onChange: (e) => updateIsGlobal(isGlobal) })
    ] })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/opentsdb/components/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigEditor: () => (/* binding */ ConfigEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/DataSourceSettings/DataSourceHttpSettings.tsx");
/* harmony import */ var _OpenTsdbDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/opentsdb/components/OpenTsdbDetails.tsx");





const ConfigEditor = (props) => {
  const { options, onOptionsChange } = props;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.DataSourceHttpSettings,
      {
        defaultUrl: "http://localhost:4242",
        dataSourceConfig: options,
        onChange: onOptionsChange,
        secureSocksDSProxyEnabled: _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.secureSocksDSProxyEnabled
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OpenTsdbDetails__WEBPACK_IMPORTED_MODULE_3__.OpenTsdbDetails, { value: options, onChange: onOptionsChange })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/opentsdb/components/DownSample.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DownSample: () => (/* binding */ DownSample),
/* harmony export */   testIds: () => (/* binding */ testIds)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/FormLabel/FormLabel.tsx");




function DownSample({ query, onChange, onRunQuery, aggregators, fillPolicies, tsdbVersion }) {
  const aggregatorOptions = aggregators.map((value) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)(value));
  const fillPolicyOptions = fillPolicies.map((value) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)(value));
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { gap: 0.5, alignItems: "flex-start", "data-testid": testIds.section, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { gap: 0, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineFormLabel,
        {
          className: "query-keyword",
          width: 8,
          tooltip: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
            "Leave interval blank for auto or for example use ",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: "1m" })
          ] }),
          children: "Down sample"
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
        {
          width: 25,
          "data-testid": testIds.interval,
          placeholder: "interval",
          value: query.downsampleInterval ?? "",
          onChange: (e) => {
            const value = e.currentTarget.value;
            onChange({ ...query, downsampleInterval: value });
          },
          onBlur: () => onRunQuery()
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { gap: 0, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineFormLabel, { width: "auto", className: "query-keyword", children: "Aggregator" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select,
        {
          value: query.downsampleAggregator ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)(query.downsampleAggregator) : void 0,
          options: aggregatorOptions,
          onChange: ({ value }) => {
            if (value) {
              onChange({ ...query, downsampleAggregator: value });
              onRunQuery();
            }
          }
        }
      )
    ] }),
    tsdbVersion >= 2 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { gap: 0, alignItems: "flex-start", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, { className: "width-6 query-keyword", children: "Fill" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select,
        {
          inputId: "opentsdb-fillpolicy-select",
          value: query.downsampleFillPolicy ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)(query.downsampleFillPolicy) : void 0,
          options: fillPolicyOptions,
          onChange: ({ value }) => {
            if (value) {
              onChange({ ...query, downsampleFillPolicy: value });
              onRunQuery();
            }
          }
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { gap: 0, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineFormLabel, { className: "query-keyword", children: "Disable downsampling" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineSwitch,
        {
          value: query.disableDownsampling ?? false,
          onChange: () => {
            const disableDownsampling = query.disableDownsampling ?? false;
            onChange({ ...query, disableDownsampling: !disableDownsampling });
            onRunQuery();
          }
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { gap: 0, grow: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, { children: " " }) })
  ] });
}
const testIds = {
  section: "opentsdb-downsample",
  interval: "downsample-interval"
};


/***/ }),

/***/ "./public/app/plugins/datasource/opentsdb/components/FilterSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterSection: () => (/* binding */ FilterSection),
/* harmony export */   testIds: () => (/* binding */ testIds)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/debounce-promise/dist/index.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/FormLabel/FormLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");







function FilterSection({
  query,
  onChange,
  onRunQuery,
  suggestTagKeys,
  filterTypes,
  suggestTagValues
}) {
  const buttonStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useStyles2)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.clearButtonStyles);
  const [tagKeys, updTagKeys] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
  const [keyIsLoading, updKeyIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
  const [addFilterMode, updAddFilterMode] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [curFilterType, updCurFilterType] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("iliteral_or");
  const [curFilterKey, updCurFilterKey] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const [curFilterValue, updCurFilterValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const [curFilterGroupBy, updCurFilterGroupBy] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const filterTypesOptions = filterTypes.map((value) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toOption)(value));
  function changeAddFilterMode() {
    updAddFilterMode(!addFilterMode);
  }
  function addFilter() {
    if (query.tags && (0,lodash__WEBPACK_IMPORTED_MODULE_2__.size)(query.tags) > 0) {
      const err = "Please remove tags to use filters, tags and filters are mutually exclusive.";
      setErrors(err);
      return;
    }
    if (!addFilterMode) {
      updAddFilterMode(true);
      return;
    }
    const currentFilter = {
      type: curFilterType,
      tagk: curFilterKey,
      filter: curFilterValue,
      groupBy: curFilterGroupBy
    };
    query.filters = query.filters ? query.filters.concat([currentFilter]) : [currentFilter];
    updCurFilterType("literal_or");
    updCurFilterKey("");
    updCurFilterValue("");
    updCurFilterGroupBy(false);
    onChange(query);
    onRunQuery();
    changeAddFilterMode();
  }
  function removeFilter(index) {
    query.filters?.splice(index, 1);
    onChange(query);
    onRunQuery();
  }
  function editFilter(fil, idx) {
    removeFilter(idx);
    updCurFilterKey(fil.tagk);
    updCurFilterValue(fil.filter);
    updCurFilterType(fil.type);
    updCurFilterGroupBy(fil.groupBy);
    addFilter();
  }
  const splitSeparator = " ";
  const customFilterOption = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((option, searchQuery) => {
    const label = option.value ?? "";
    const searchWords = searchQuery.split(splitSeparator);
    return searchWords.reduce((acc, cur) => acc && label.toLowerCase().includes(cur.toLowerCase()), true);
  }, []);
  const tagValueSearch = debounce_promise__WEBPACK_IMPORTED_MODULE_1___default()((query2) => suggestTagValues(query2), 350);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 0, "data-testid": testIds.section, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.InlineFormLabel,
      {
        className: "query-keyword",
        width: 8,
        tooltip: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "Filters does not work with tags, either of the two will work but not both." }),
        children: "Filters"
      }
    ),
    query.filters && query.filters.map((fil, idx) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.InlineFormLabel, { width: "auto", "data-testid": testIds.list + idx, children: [
        fil.tagk,
        " = ",
        fil.type,
        "(",
        fil.filter,
        "), groupBy = ",
        "" + fil.groupBy,
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", className: buttonStyles, onClick: () => editFilter(fil, idx), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "pen" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          "button",
          {
            type: "button",
            className: buttonStyles,
            onClick: () => removeFilter(idx),
            "data-testid": testIds.remove,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "times" })
          }
        )
      ] }, idx);
    }),
    !addFilterMode && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.InlineFormLabel, { width: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", className: buttonStyles, onClick: changeAddFilterMode, "aria-label": "Add filter", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "plus" }) }) }),
    addFilterMode && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 0.5, alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 0, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Select,
        {
          inputId: "opentsdb-suggested-tagk-select",
          value: curFilterKey ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toOption)(curFilterKey) : void 0,
          placeholder: "key",
          allowCustomValue: true,
          filterOption: customFilterOption,
          onOpenMenu: async () => {
            updKeyIsLoading(true);
            const tKs = await suggestTagKeys(query);
            const tKsOptions = tKs.map((value) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toOption)(value));
            updTagKeys(tKsOptions);
            updKeyIsLoading(false);
          },
          isLoading: keyIsLoading,
          options: tagKeys,
          onChange: ({ value }) => {
            if (value) {
              updCurFilterKey(value);
            }
          }
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 0, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineLabel, { className: "width-4 query-keyword", children: "Type" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Select,
          {
            inputId: "opentsdb-aggregator-select",
            value: curFilterType ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toOption)(curFilterType) : void 0,
            options: filterTypesOptions,
            onChange: ({ value }) => {
              if (value) {
                updCurFilterType(value);
              }
            }
          }
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 0, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.AsyncSelect,
        {
          inputId: "opentsdb-suggested-tagv-select",
          value: curFilterValue ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toOption)(curFilterValue) : void 0,
          placeholder: "filter",
          allowCustomValue: true,
          loadOptions: tagValueSearch,
          defaultOptions: [],
          onChange: ({ value }) => {
            if (value) {
              updCurFilterValue(value);
            }
          }
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.InlineFormLabel, { width: 5, className: "query-keyword", children: "Group by" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.InlineSwitch,
        {
          value: curFilterGroupBy,
          onChange: () => {
            updCurFilterGroupBy(!curFilterGroupBy);
          }
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 0, children: [
        errors && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineLabel, { title: errors, "data-testid": testIds.error, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "exclamation-triangle", color: "rgb(229, 189, 28)" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.InlineFormLabel, { width: 5.5, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", className: buttonStyles, onClick: addFilter, children: "add filter" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", className: buttonStyles, onClick: changeAddFilterMode, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "times" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 0, grow: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineLabel, { children: " " }) })
  ] });
}
const testIds = {
  section: "opentsdb-filter",
  list: "opentsdb-filter-list",
  error: "opentsdb-filter-error",
  remove: "opentsdb-filter-remove"
};


/***/ }),

/***/ "./public/app/plugins/datasource/opentsdb/components/MetricSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetricSection: () => (/* binding */ MetricSection),
/* harmony export */   testIds: () => (/* binding */ testIds)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/debounce-promise/dist/index.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/FormLabel/FormLabel.tsx");





function MetricSection({ query, onChange, onRunQuery, suggestMetrics, aggregators }) {
  const aggregatorOptions = aggregators.map((value) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)(value));
  const metricSearch = debounce_promise__WEBPACK_IMPORTED_MODULE_1___default()((query2) => suggestMetrics(query2), 350);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { gap: 0.5, alignItems: "flex-start", "data-testid": testIds.section, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { gap: 0, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineFormLabel, { width: 8, className: "query-keyword", children: "Metric" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.AsyncSelect,
        {
          width: 25,
          inputId: "opentsdb-metric-select",
          value: query.metric ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)(query.metric) : void 0,
          placeholder: "Metric name",
          allowCustomValue: true,
          loadOptions: metricSearch,
          defaultOptions: [],
          onChange: ({ value }) => {
            if (value) {
              onChange({ ...query, metric: value });
              onRunQuery();
            }
          }
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { gap: 0, alignItems: "flex-start", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineFormLabel, { width: "auto", className: "query-keyword", children: "Aggregator" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Select,
        {
          inputId: "opentsdb-aggregator-select",
          value: query.aggregator ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)(query.aggregator) : void 0,
          options: aggregatorOptions,
          onChange: ({ value }) => {
            if (value) {
              onChange({ ...query, aggregator: value });
              onRunQuery();
            }
          }
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { gap: 0, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineFormLabel,
        {
          className: "query-keyword",
          width: 6,
          tooltip: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "Use patterns like $tag_tagname to replace part of the alias for a tag value" }),
          children: "Alias"
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input,
        {
          "data-testid": testIds.alias,
          placeholder: "series alias",
          value: query.alias ?? "",
          onChange: (e) => {
            const value = e.currentTarget.value;
            onChange({ ...query, alias: value });
          },
          onBlur: () => onRunQuery()
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { gap: 0, grow: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineLabel, { children: " " }) })
  ] });
}
const testIds = {
  section: "opentsdb-metricsection",
  alias: "metric-alias"
};


/***/ }),

/***/ "./public/app/plugins/datasource/opentsdb/components/OpenTsdbDetails.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpenTsdbDetails: () => (/* binding */ OpenTsdbDetails)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldSet.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");




const tsdbVersions = [
  { label: "<=2.1", value: 1 },
  { label: "==2.2", value: 2 },
  { label: "==2.3", value: 3 },
  { label: "==2.4", value: 4 }
];
const tsdbResolutions = [
  { label: "second", value: 1 },
  { label: "millisecond", value: 2 }
];
const OpenTsdbDetails = (props) => {
  const { onChange, value } = props;
  const idSuffix = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FieldSet, { label: "OpenTSDB settings", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, { htmlFor: `select-version-${idSuffix}`, label: "Version", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select,
      {
        inputId: `select-version-${idSuffix}`,
        options: tsdbVersions,
        value: tsdbVersions.find((version) => version.value === value.jsonData.tsdbVersion) ?? tsdbVersions[0],
        onChange: onSelectChangeHandler("tsdbVersion", value, onChange),
        width: 20
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, { htmlFor: `select-resolution-${idSuffix}`, label: "Resolution", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select,
      {
        inputId: `select-resolution-${idSuffix}`,
        options: tsdbResolutions,
        value: tsdbResolutions.find((resolution) => resolution.value === value.jsonData.tsdbResolution) ?? tsdbResolutions[0],
        onChange: onSelectChangeHandler("tsdbResolution", value, onChange),
        width: 20
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, { htmlFor: `lookup-input-${idSuffix}`, label: "Lookup limit", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
      {
        id: `lookup-input-${idSuffix}`,
        type: "number",
        value: value.jsonData.lookupLimit ?? 1e3,
        onChange: onInputChangeHandler("lookupLimit", value, onChange),
        width: 20
      }
    ) })
  ] }) });
};
const onSelectChangeHandler = (key, value, onChange) => (newValue) => {
  onChange({
    ...value,
    jsonData: {
      ...value.jsonData,
      [key]: newValue.value
    }
  });
};
const onInputChangeHandler = (key, value, onChange) => (event) => {
  onChange({
    ...value,
    jsonData: {
      ...value.jsonData,
      [key]: event.currentTarget.value
    }
  });
};


/***/ }),

/***/ "./public/app/plugins/datasource/opentsdb/components/OpenTsdbQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpenTsdbQueryEditor: () => (/* binding */ OpenTsdbQueryEditor),
/* harmony export */   testIds: () => (/* binding */ testIds)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/text/sanitize.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _DownSample__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/opentsdb/components/DownSample.tsx");
/* harmony import */ var _FilterSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/opentsdb/components/FilterSection.tsx");
/* harmony import */ var _MetricSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/opentsdb/components/MetricSection.tsx");
/* harmony import */ var _RateSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/opentsdb/components/RateSection.tsx");
/* harmony import */ var _TagSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/opentsdb/components/TagSection.tsx");











function OpenTsdbQueryEditor({
  datasource,
  onRunQuery,
  onChange,
  query,
  range,
  queries
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const [aggregators, setAggregators] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
    "avg",
    "sum",
    "min",
    "max",
    "dev",
    "zimsum",
    "mimmin",
    "mimmax"
  ]);
  const fillPolicies = ["none", "nan", "null", "zero"];
  const [filterTypes, setFilterTypes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
    "wildcard",
    "iliteral_or",
    "not_iliteral_or",
    "not_literal_or",
    "iwildcard",
    "literal_or",
    "regexp"
  ]);
  const tsdbVersion = datasource.tsdbVersion;
  if (!query.aggregator) {
    query.aggregator = "sum";
  }
  if (!query.downsampleAggregator) {
    query.downsampleAggregator = "avg";
  }
  if (!query.downsampleFillPolicy) {
    query.downsampleFillPolicy = "none";
  }
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    datasource.getAggregators().then((aggs) => {
      if (aggs.length !== 0) {
        setAggregators(aggs);
      }
    });
  }, [datasource]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    datasource.getFilterTypes().then((newFilterTypes) => {
      if (newFilterTypes.length !== 0) {
        setFilterTypes(newFilterTypes);
      }
    });
  }, [datasource]);
  async function suggestMetrics(value) {
    return datasource.metricFindQuery(`metrics(${value})`).then(getTextValues);
  }
  async function suggestTagValues(value) {
    return datasource.metricFindQuery(`suggest_tagv(${value})`).then(getTextValues);
  }
  async function suggestTagKeys(query2) {
    return datasource.suggestTagKeys(query2);
  }
  function getTextValues(metrics) {
    const variables = datasource.getVariables().map((value) => {
      return {
        value: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.textUtil.escapeHtml(value),
        description: value
      };
    });
    const values = metrics.map((value) => {
      return {
        value: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.textUtil.escapeHtml(value.text),
        description: value.text
      };
    });
    return variables.concat(values);
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.container, "data-testid": testIds.editor, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { gap: 0.5, direction: "column", grow: 1, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _MetricSection__WEBPACK_IMPORTED_MODULE_8__.MetricSection,
      {
        query,
        onChange,
        onRunQuery,
        suggestMetrics,
        aggregators
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _DownSample__WEBPACK_IMPORTED_MODULE_6__.DownSample,
      {
        query,
        onChange,
        onRunQuery,
        aggregators,
        fillPolicies,
        tsdbVersion
      }
    ),
    tsdbVersion >= 2 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _FilterSection__WEBPACK_IMPORTED_MODULE_7__.FilterSection,
      {
        query,
        onChange,
        onRunQuery,
        filterTypes,
        suggestTagValues,
        suggestTagKeys
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _TagSection__WEBPACK_IMPORTED_MODULE_10__.TagSection,
      {
        query,
        onChange,
        onRunQuery,
        suggestTagValues,
        suggestTagKeys,
        tsdbVersion
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RateSection__WEBPACK_IMPORTED_MODULE_9__.RateSection, { query, onChange, onRunQuery, tsdbVersion })
  ] }) });
}
function getStyles(theme) {
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex"
    }),
    toggleButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginLeft: theme.spacing(0.5)
    })
  };
}
const testIds = {
  editor: "opentsdb-editor"
};


/***/ }),

/***/ "./public/app/plugins/datasource/opentsdb/components/RateSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RateSection: () => (/* binding */ RateSection),
/* harmony export */   testIds: () => (/* binding */ testIds)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/FormLabel/FormLabel.tsx");



function RateSection({ query, onChange, onRunQuery, tsdbVersion }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Stack, { gap: 0, "data-testid": testIds.section, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineFormLabel, { className: "query-keyword", width: 8, children: "Rate" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineSwitch,
      {
        "data-testid": testIds.shouldComputeRate,
        value: query.shouldComputeRate ?? false,
        onChange: () => {
          const shouldComputeRate = query.shouldComputeRate ?? false;
          onChange({ ...query, shouldComputeRate: !shouldComputeRate });
          onRunQuery();
        }
      }
    ),
    query.shouldComputeRate && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineFormLabel, { className: "query-keyword", width: "auto", children: "Counter" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineSwitch,
        {
          "data-testid": testIds.isCounter,
          value: query.isCounter ?? false,
          onChange: () => {
            const isCounter = query.isCounter ?? false;
            onChange({ ...query, isCounter: !isCounter });
            onRunQuery();
          }
        }
      )
    ] }),
    query.shouldComputeRate && query.isCounter && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Stack, { gap: 0, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineLabel, { width: "auto", className: "query-keyword", children: "Counter max" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input,
        {
          "data-testid": testIds.counterMax,
          placeholder: "max value",
          value: query.counterMax ?? "",
          onChange: (e) => {
            const value = e.currentTarget.value;
            onChange({ ...query, counterMax: value });
          },
          onBlur: () => onRunQuery()
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineLabel, { width: "auto", className: "query-keyword", children: "Reset value" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input,
        {
          "data-testid": testIds.counterResetValue,
          placeholder: "reset value",
          value: query.counterResetValue ?? "",
          onChange: (e) => {
            const value = e.currentTarget.value;
            onChange({ ...query, counterResetValue: value });
          },
          onBlur: () => onRunQuery()
        }
      )
    ] }),
    tsdbVersion > 2 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineFormLabel, { className: "query-keyword", width: "auto", children: "Explicit tags" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineSwitch,
        {
          "data-testid": testIds.explicitTags,
          value: query.explicitTags ?? false,
          onChange: () => {
            const explicitTags = query.explicitTags ?? false;
            onChange({ ...query, explicitTags: !explicitTags });
            onRunQuery();
          }
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Stack, { gap: 0, grow: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineLabel, { children: " " }) })
  ] });
}
const testIds = {
  section: "opentsdb-rate",
  shouldComputeRate: "opentsdb-shouldComputeRate",
  isCounter: "opentsdb-is-counter",
  counterMax: "opentsdb-counter-max",
  counterResetValue: "opentsdb-counter-reset-value",
  explicitTags: "opentsdb-explicit-tags"
};


/***/ }),

/***/ "./public/app/plugins/datasource/opentsdb/components/TagSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TagSection: () => (/* binding */ TagSection),
/* harmony export */   testIds: () => (/* binding */ testIds)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/debounce-promise/dist/index.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/FormLabel/FormLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");







function TagSection({
  query,
  onChange,
  onRunQuery,
  suggestTagKeys,
  suggestTagValues,
  tsdbVersion
}) {
  const buttonStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.clearButtonStyles);
  const [tagKeys, updTagKeys] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
  const [keyIsLoading, updKeyIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
  const [addTagMode, updAddTagMode] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [curTagKey, updCurTagKey] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const [curTagValue, updCurTagValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  function changeAddTagMode() {
    updAddTagMode(!addTagMode);
  }
  function addTag() {
    if (query.filters && (0,lodash__WEBPACK_IMPORTED_MODULE_2__.size)(query.filters) > 0) {
      const err = "Please remove filters to use tags, tags and filters are mutually exclusive.";
      setErrors(err);
      return;
    }
    if (!addTagMode) {
      updAddTagMode(true);
      return;
    }
    if (query.tags && (0,lodash__WEBPACK_IMPORTED_MODULE_2__.has)(query.tags, curTagKey)) {
      const err = "Duplicate tag key '" + curTagKey + "'.";
      setErrors(err);
      return;
    }
    if (!query.tags) {
      query.tags = {};
    }
    query.tags[curTagKey] = curTagValue;
    updCurTagKey("");
    updCurTagValue("");
    onChange(query);
    onRunQuery();
    changeAddTagMode();
  }
  function removeTag(key) {
    delete query.tags[key];
    onChange(query);
    onRunQuery();
  }
  function editTag(key, value) {
    removeTag(key);
    updCurTagKey(key);
    updCurTagValue(value);
    addTag();
  }
  const tagValueSearch = debounce_promise__WEBPACK_IMPORTED_MODULE_1___default()((query2) => suggestTagValues(query2), 350);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 0, "data-testid": testIds.section, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.InlineFormLabel,
      {
        className: "query-keyword",
        width: 8,
        tooltip: tsdbVersion >= 2 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "Please use filters, tags are deprecated in opentsdb 2.2" }) : void 0,
        children: "Tags"
      }
    ),
    query.tags && Object.keys(query.tags).map((tagKey, idx) => {
      const tagValue = query.tags[tagKey];
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.InlineFormLabel, { width: "auto", "data-testid": testIds.list + idx, children: [
        tagKey,
        "=",
        tagValue,
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", className: buttonStyles, onClick: () => editTag(tagKey, tagValue), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "pen" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          "button",
          {
            type: "button",
            className: buttonStyles,
            onClick: () => removeTag(tagKey),
            "data-testid": testIds.remove,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "times" })
          }
        )
      ] }, idx);
    }),
    !addTagMode && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.InlineFormLabel, { width: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", className: buttonStyles, onClick: changeAddTagMode, "aria-label": "Add tag", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "plus" }) }) }),
    addTagMode && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 0.5, alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 0, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Select,
        {
          inputId: "opentsdb-suggested-tagk-select",
          value: curTagKey ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toOption)("" + curTagKey) : void 0,
          placeholder: "key",
          allowCustomValue: true,
          onOpenMenu: async () => {
            updKeyIsLoading(true);
            const tKs = await suggestTagKeys(query);
            const tKsOptions = tKs.map((value) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toOption)(value));
            updTagKeys(tKsOptions);
            updKeyIsLoading(false);
          },
          isLoading: keyIsLoading,
          options: tagKeys,
          onChange: ({ value }) => {
            if (value) {
              updCurTagKey(value);
            }
          }
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 0, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.AsyncSelect,
        {
          inputId: "opentsdb-suggested-tagv-select",
          value: curTagValue ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toOption)(curTagValue) : void 0,
          placeholder: "value",
          allowCustomValue: true,
          loadOptions: tagValueSearch,
          defaultOptions: [],
          onChange: ({ value }) => {
            if (value) {
              updCurTagValue(value);
            }
          }
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 0, children: [
        errors && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineLabel, { title: errors, "data-testid": testIds.error, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "exclamation-triangle", color: "rgb(229, 189, 28)" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.InlineFormLabel, { width: 5.5, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", className: buttonStyles, onClick: addTag, children: "add tag" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", className: buttonStyles, onClick: changeAddTagMode, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "times" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 0, grow: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineLabel, { children: " " }) })
  ] });
}
const testIds = {
  section: "opentsdb-tag",
  list: "opentsdb-tag-list",
  error: "opentsdb-tag-error",
  remove: "opentsdb-tag-remove"
};


/***/ }),

/***/ "./public/app/plugins/datasource/opentsdb/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OpenTsDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/dataframe/processDataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/datetime/datemath.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-data/src/types/datasource.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var _components_AnnotationEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/opentsdb/components/AnnotationEditor.tsx");
/* harmony import */ var _migrations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/opentsdb/migrations.ts");









class OpenTsDatasource extends _grafana_data__WEBPACK_IMPORTED_MODULE_9__.DataSourceApi {
  constructor(instanceSettings, templateSrv = (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_11__.getTemplateSrv)()) {
    super(instanceSettings);
    this.templateSrv = templateSrv;
    this.type = "opentsdb";
    this.url = instanceSettings.url;
    this.name = instanceSettings.name;
    this.withCredentials = instanceSettings.withCredentials;
    this.basicAuth = instanceSettings.basicAuth;
    instanceSettings.jsonData = instanceSettings.jsonData || {};
    this.tsdbVersion = instanceSettings.jsonData.tsdbVersion || 1;
    this.tsdbResolution = instanceSettings.jsonData.tsdbResolution || 1;
    this.lookupLimit = instanceSettings.jsonData.lookupLimit || 1e3;
    this.tagKeys = {};
    this.aggregatorsPromise = null;
    this.filterTypesPromise = null;
    this.annotations = {
      QueryEditor: _components_AnnotationEditor__WEBPACK_IMPORTED_MODULE_12__.AnnotationEditor,
      prepareAnnotation: _migrations__WEBPACK_IMPORTED_MODULE_13__.prepareAnnotation
    };
  }
  // Called once per panel (graph)
  query(options) {
    if (options.targets.some((target) => target.fromAnnotations)) {
      const streams = [];
      for (const annotation of options.targets) {
        if (annotation.target) {
          streams.push(
            new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((subscriber) => {
              this.annotationEvent(options, annotation).then((events) => subscriber.next({ data: [(0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.toDataFrame)(events)] })).catch((ex) => {
                return subscriber.next({ data: [(0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.toDataFrame)([])] });
              }).finally(() => subscriber.complete());
            })
          );
        }
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)(...streams);
    }
    const start = this.convertToTSDBTime(options.range.raw.from, false, options.timezone);
    const end = this.convertToTSDBTime(options.range.raw.to, true, options.timezone);
    const qs = [];
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(options.targets, (target) => {
      if (!target.metric) {
        return;
      }
      qs.push(this.convertTargetToQuery(target, options, this.tsdbVersion));
    });
    const queries = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.compact)(qs);
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(queries)) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({ data: [] });
    }
    const groupByTags = {};
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(queries, (query) => {
      if (query.filters && query.filters.length > 0) {
        (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(query.filters, (val) => {
          groupByTags[val.tagk] = true;
        });
      } else {
        (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(query.tags, (val, key) => {
          groupByTags[key] = true;
        });
      }
    });
    options.targets = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(options.targets, (query) => {
      return query.hide !== true;
    });
    return this.performTimeSeriesQuery(queries, start, end).pipe(
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => {
        throw err?.data?.error?.message || "Error performing time series query.";
      }),
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
        const metricToTargetMapping = this.mapMetricsToTargets(response.data, options, this.tsdbVersion);
        const result = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(response.data, (metricData, index) => {
          index = metricToTargetMapping[index];
          if (index === -1) {
            index = 0;
          }
          this._saveTagKeys(metricData);
          return this.transformMetricData(
            metricData,
            groupByTags,
            options.targets[index],
            options,
            this.tsdbResolution
          );
        });
        return { data: result };
      })
    );
  }
  annotationEvent(options, annotation) {
    const start = this.convertToTSDBTime(options.range.raw.from, false, options.timezone);
    const end = this.convertToTSDBTime(options.range.raw.to, true, options.timezone);
    const qs = [];
    const eventList = [];
    qs.push({ aggregator: "sum", metric: annotation.target });
    const queries = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.compact)(qs);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(
      this.performTimeSeriesQuery(queries, start, end).pipe(
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((results) => {
          if (results.data[0]) {
            let annotationObject = results.data[0].annotations;
            if (annotation.isGlobal) {
              annotationObject = results.data[0].globalAnnotations;
            }
            if (annotationObject) {
              (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(annotationObject, (ann) => {
                const event = {
                  text: ann.description,
                  time: Math.floor(ann.startTime) * 1e3,
                  annotation
                };
                eventList.push(event);
              });
            }
          }
          return eventList;
        })
      )
    );
  }
  targetContainsTemplate(target) {
    if (target.filters && target.filters.length > 0) {
      for (let i = 0; i < target.filters.length; i++) {
        if (this.templateSrv.containsTemplate(target.filters[i].filter)) {
          return true;
        }
      }
    }
    if (target.tags && Object.keys(target.tags).length > 0) {
      for (const tagKey in target.tags) {
        if (this.templateSrv.containsTemplate(target.tags[tagKey])) {
          return true;
        }
      }
    }
    return false;
  }
  performTimeSeriesQuery(queries, start, end) {
    let msResolution = false;
    if (this.tsdbResolution === 2) {
      msResolution = true;
    }
    const reqBody = {
      start,
      queries,
      msResolution,
      globalAnnotations: true
    };
    if (this.tsdbVersion === 3) {
      reqBody.showQuery = true;
    }
    if (end) {
      reqBody.end = end;
    }
    const options = {
      method: "POST",
      url: this.url + "/api/query",
      data: reqBody
    };
    this._addCredentialOptions(options);
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_10__.getBackendSrv)().fetch(options);
  }
  suggestTagKeys(query) {
    const metric = query.metric ?? "";
    return Promise.resolve(this.tagKeys[metric] || []);
  }
  _saveTagKeys(metricData) {
    const tagKeys = Object.keys(metricData.tags);
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(metricData.aggregateTags, (tag) => {
      tagKeys.push(tag);
    });
    this.tagKeys[metricData.metric] = tagKeys;
  }
  _performSuggestQuery(query, type) {
    return this._get("/api/suggest", { type, q: query, max: this.lookupLimit }).pipe(
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((result) => {
        return result.data;
      })
    );
  }
  _performMetricKeyValueLookup(metric, keys) {
    if (!metric || !keys) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
    }
    const keysArray = keys.split(",").map((key2) => {
      return key2.trim();
    });
    const key = keysArray[0];
    let keysQuery = key + "=*";
    if (keysArray.length > 1) {
      keysQuery += "," + keysArray.splice(1).join(",");
    }
    const m = metric + "{" + keysQuery + "}";
    return this._get("/api/search/lookup", { m, limit: this.lookupLimit }).pipe(
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((result) => {
        result = result.data.results;
        const tagvs = [];
        (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(result, (r) => {
          if (tagvs.indexOf(r.tags[key]) === -1) {
            tagvs.push(r.tags[key]);
          }
        });
        return tagvs;
      })
    );
  }
  _performMetricKeyLookup(metric) {
    if (!metric) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
    }
    return this._get("/api/search/lookup", { m: metric, limit: 1e3 }).pipe(
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((result) => {
        result = result.data.results;
        const tagks = [];
        (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(result, (r) => {
          (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(r.tags, (tagv, tagk) => {
            if (tagks.indexOf(tagk) === -1) {
              tagks.push(tagk);
            }
          });
        });
        return tagks;
      })
    );
  }
  _get(relativeUrl, params) {
    const options = {
      method: "GET",
      url: this.url + relativeUrl,
      params
    };
    this._addCredentialOptions(options);
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_10__.getBackendSrv)().fetch(options);
  }
  _addCredentialOptions(options) {
    if (this.basicAuth || this.withCredentials) {
      options.withCredentials = true;
    }
    if (this.basicAuth) {
      options.headers = { Authorization: this.basicAuth };
    }
  }
  metricFindQuery(query) {
    if (!query) {
      return Promise.resolve([]);
    }
    let interpolated;
    try {
      interpolated = this.templateSrv.replace(query, {}, "distributed");
    } catch (err) {
      return Promise.reject(err);
    }
    const responseTransform = (result) => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(result, (value) => {
        return { text: value };
      });
    };
    const metricsRegex = /metrics\((.*)\)/;
    const tagNamesRegex = /tag_names\((.*)\)/;
    const tagValuesRegex = /tag_values\((.*?),\s?(.*)\)/;
    const tagNamesSuggestRegex = /suggest_tagk\((.*)\)/;
    const tagValuesSuggestRegex = /suggest_tagv\((.*)\)/;
    const metricsQuery = interpolated.match(metricsRegex);
    if (metricsQuery) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(this._performSuggestQuery(metricsQuery[1], "metrics").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(responseTransform)));
    }
    const tagNamesQuery = interpolated.match(tagNamesRegex);
    if (tagNamesQuery) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(this._performMetricKeyLookup(tagNamesQuery[1]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(responseTransform)));
    }
    const tagValuesQuery = interpolated.match(tagValuesRegex);
    if (tagValuesQuery) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(
        this._performMetricKeyValueLookup(tagValuesQuery[1], tagValuesQuery[2]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(responseTransform))
      );
    }
    const tagNamesSuggestQuery = interpolated.match(tagNamesSuggestRegex);
    if (tagNamesSuggestQuery) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(this._performSuggestQuery(tagNamesSuggestQuery[1], "tagk").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(responseTransform)));
    }
    const tagValuesSuggestQuery = interpolated.match(tagValuesSuggestRegex);
    if (tagValuesSuggestQuery) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(this._performSuggestQuery(tagValuesSuggestQuery[1], "tagv").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(responseTransform)));
    }
    return Promise.resolve([]);
  }
  testDatasource() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(
      this._performSuggestQuery("cpu", "metrics").pipe(
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => {
          return { status: "success", message: "Data source is working" };
        })
      )
    );
  }
  getAggregators() {
    if (this.aggregatorsPromise) {
      return this.aggregatorsPromise;
    }
    this.aggregatorsPromise = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(
      this._get("/api/aggregators").pipe(
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((result) => {
          if (result.data && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(result.data)) {
            return result.data.sort();
          }
          return [];
        })
      )
    );
    return this.aggregatorsPromise;
  }
  getFilterTypes() {
    if (this.filterTypesPromise) {
      return this.filterTypesPromise;
    }
    this.filterTypesPromise = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(
      this._get("/api/config/filters").pipe(
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((result) => {
          if (result.data) {
            return Object.keys(result.data).sort();
          }
          return [];
        })
      )
    );
    return this.filterTypesPromise;
  }
  transformMetricData(md, groupByTags, target, options, tsdbResolution) {
    const metricLabel = this.createMetricLabel(md, target, groupByTags, options);
    const dps = [];
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(md.dps, (v, k) => {
      if (tsdbResolution === 2) {
        dps.push([v, k * 1]);
      } else {
        dps.push([v, k * 1e3]);
      }
    });
    return { target: metricLabel, datapoints: dps };
  }
  createMetricLabel(md, target, groupByTags, options) {
    if (target.alias) {
      const scopedVars = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.clone)(options.scopedVars || {});
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(md.tags, (value, key) => {
        scopedVars["tag_" + key] = { value };
      });
      return this.templateSrv.replace(target.alias, scopedVars);
    }
    let label = md.metric;
    const tagData = [];
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(md.tags)) {
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.toPairs)(md.tags), (tag) => {
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.has)(groupByTags, tag[0])) {
          tagData.push(tag[0] + "=" + tag[1]);
        }
      });
    }
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(tagData)) {
      label += "{" + tagData.join(", ") + "}";
    }
    return label;
  }
  convertTargetToQuery(target, options, tsdbVersion) {
    if (!target.metric || target.hide) {
      return null;
    }
    const query = this.interpolateVariablesInQuery(target, options.scopedVars);
    if (target.shouldComputeRate) {
      query.rate = true;
      query.rateOptions = {
        counter: !!target.isCounter
      };
      if (target.counterMax && target.counterMax.length) {
        query.rateOptions.counterMax = parseInt(target.counterMax, 10);
      }
      if (target.counterResetValue && target.counterResetValue.length) {
        query.rateOptions.resetValue = parseInt(target.counterResetValue, 10);
      }
      if (tsdbVersion >= 2) {
        query.rateOptions.dropResets = !query.rateOptions.counterMax && (!query.rateOptions.ResetValue || query.rateOptions.ResetValue === 0);
      }
    }
    if (!target.disableDownsampling) {
      let interval = this.templateSrv.replace(target.downsampleInterval || options.interval);
      if (interval.match(/\.[0-9]+s/)) {
        interval = parseFloat(interval) * 1e3 + "ms";
      }
      query.downsample = interval + "-" + target.downsampleAggregator;
      if (target.downsampleFillPolicy && target.downsampleFillPolicy !== "none") {
        query.downsample += "-" + target.downsampleFillPolicy;
      }
    }
    if (target.explicitTags) {
      query.explicitTags = true;
    }
    return query;
  }
  interpolateVariablesInFilters(query, scopedVars) {
    query.filters = query.filters?.map((filter2) => {
      filter2.tagk = this.templateSrv.replace(filter2.tagk, scopedVars, "pipe");
      filter2.filter = this.templateSrv.replace(filter2.filter, scopedVars, "pipe");
      return filter2;
    });
  }
  getVariables() {
    return this.templateSrv.getVariables().map((v) => `$${v.name}`);
  }
  mapMetricsToTargets(metrics, options, tsdbVersion) {
    let interpolatedTagValue, arrTagV;
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(metrics, (metricData) => {
      if (tsdbVersion === 3) {
        return metricData.query.index;
      } else {
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex)(options.targets, (target) => {
          if (target.filters && target.filters.length > 0) {
            return target.metric === metricData.metric;
          } else {
            return target.metric === metricData.metric && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.every)(target.tags, (tagV, tagK) => {
              interpolatedTagValue = this.templateSrv.replace(tagV, options.scopedVars, "pipe");
              arrTagV = interpolatedTagValue.split("|");
              return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(arrTagV, metricData.tags[tagK]) || interpolatedTagValue === "*";
            });
          }
        });
      }
    });
  }
  interpolateVariablesInQueries(queries, scopedVars) {
    if (!queries.length) {
      return queries;
    }
    return queries.map((query) => this.interpolateVariablesInQuery(query, scopedVars));
  }
  interpolateVariablesInQuery(target, scopedVars) {
    const query = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(target);
    query.metric = this.templateSrv.replace(target.metric, scopedVars, "pipe");
    query.aggregator = "avg";
    if (target.aggregator) {
      query.aggregator = this.templateSrv.replace(target.aggregator);
    }
    if (query.filters && query.filters.length > 0) {
      this.interpolateVariablesInFilters(query, scopedVars);
    } else {
      if (query.tags) {
        for (const tagKey in query.tags) {
          query.tags[tagKey] = this.templateSrv.replace(query.tags[tagKey], scopedVars, "pipe");
        }
      }
    }
    return query;
  }
  convertToTSDBTime(date, roundUp, timezone) {
    if (date === "now") {
      return null;
    }
    const dateTime = _grafana_data__WEBPACK_IMPORTED_MODULE_8__.parse(date, roundUp, timezone);
    return dateTime?.valueOf() ?? null;
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/opentsdb/migrations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prepareAnnotation: () => (/* binding */ prepareAnnotation)
/* harmony export */ });

const migrateLegacyAnnotation = (json) => {
  const annotation = {
    fromAnnotations: true,
    target: json.target ?? "",
    name: json.name ?? "",
    isGlobal: json.isGlobal ?? false
  };
  return annotation;
};
const prepareAnnotation = (json) => {
  const resultingTarget = json.target && typeof json.target !== "string" ? json.target : migrateLegacyAnnotation(json);
  json.target = resultingTarget;
  return json;
};


/***/ }),

/***/ "./public/app/plugins/datasource/opentsdb/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/datasource.ts");
/* harmony import */ var _components_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/opentsdb/components/ConfigEditor.tsx");
/* harmony import */ var _components_OpenTsdbQueryEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/opentsdb/components/OpenTsdbQueryEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/opentsdb/datasource.ts");





const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_3__["default"]).setQueryEditor(_components_OpenTsdbQueryEditor__WEBPACK_IMPORTED_MODULE_2__.OpenTsdbQueryEditor).setConfigEditor(_components_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__.ConfigEditor);


/***/ })

}]);
//# sourceMappingURL=opentsdbPlugin.94f9d0d55ee0ddc0abb5.js.map