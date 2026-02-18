"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_alerting_unified_components_rules_state-history_StateHistory_tsx"],{

/***/ "./public/app/features/alerting/unified/components/AlertLabel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertLabel: () => (/* binding */ AlertLabel),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





const AlertLabel = ({ labelKey, value, operator = "=", onRemoveLabel }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.wrapper, children: [
    labelKey,
    operator,
    value,
    !!onRemoveLabel && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton,
      {
        name: "times",
        size: "xs",
        onClick: onRemoveLabel,
        tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.alert-label.tooltip-remove-label", "Remove label")
      }
    )
  ] });
};
const getStyles = (theme) => ({
  wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(0.5, 1),
    borderRadius: theme.shape.radius.default,
    border: `solid 1px ${theme.colors.border.medium}`,
    fontSize: theme.typography.bodySmall.fontSize,
    backgroundColor: theme.colors.background.secondary,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.colors.text.primary,
    display: "inline-block",
    lineHeight: "1.2"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/state-history/StateHistory.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   groupStateByLabels: () => (/* binding */ groupStateByLabels),
/* harmony export */   matchKey: () => (/* binding */ matchKey)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/datetime/formatter.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _hooks_useManagedAlertStateHistory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useManagedAlertStateHistory.ts");
/* harmony import */ var _AlertLabel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabel.tsx");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var _AlertStateTag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx");












const StateHistory = ({ ruleUID }) => {
  const [textFilter, setTextFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const handleTextFilter = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((event) => {
    setTextFilter(event.currentTarget.value);
  }, []);
  const { loading, error, result = [] } = (0,_hooks_useManagedAlertStateHistory__WEBPACK_IMPORTED_MODULE_15__.useManagedAlertStateHistory)(ruleUID);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.useStyles2)(getStyles);
  if (loading && !error) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.state-history.text-loading-history", "Loading history...") });
  }
  if (error && !loading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "alerting.state-history.title-failed-to-fetch-alert-state-history",
          "Failed to fetch alert state history"
        ),
        children: error.message
      }
    );
  }
  const columns = [
    {
      id: "state",
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.state-history.columns.label.state", "State"),
      size: "max-content",
      renderCell: renderStateCell
    },
    { id: "value", label: "", size: "auto", renderCell: renderValueCell },
    {
      id: "timestamp",
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.state-history.columns.label.time", "Time"),
      size: "max-content",
      renderCell: renderTimestampCell
    }
  ];
  const tables = Object.entries(groupStateByLabels(result)).sort().filter(([groupKey]) => matchKey(groupKey, textFilter)).map(([groupKey, items]) => {
    const tableItems = items.map((historyItem) => ({
      id: historyItem.id,
      data: historyItem
    }));
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("header", { className: styles.tableGroupKey, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { className: styles.goupKeyText, "aria-label": groupKey, children: groupKey }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_17__.DynamicTable, { cols: columns, items: tableItems, pagination: { itemsPerPage: 25 } })
    ] }, groupKey);
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Field,
      {
        label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Label, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { gap: 0.5, alignItems: "center", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.state-history.filter-group", children: "Filter group" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tooltip,
            {
              content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.state-history.filter-group-tooltip", children: "Filter each state history group either by exact match or a regular expression, for example:" }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: `region=eu-west-1` }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: `/region=us-.+/` })
                ] })
              ] }),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { name: "info-circle", size: "sm" })
            }
          )
        ] }) }),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Input,
          {
            prefix: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { name: "search" }),
            onChange: handleTextFilter,
            placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.state-history.placeholder-search", "Search")
          }
        )
      }
    ) }),
    tables
  ] });
};
function groupStateByLabels(history) {
  const items = history.map((item) => {
    const LABELS_REGEX = /{.*?}/g;
    const stringifiedLabels = item.text.match(LABELS_REGEX)?.at(-1) ?? "";
    return {
      id: String(item.id),
      state: item.newState,
      // let's omit the labels for each entry since it's just added noise to each state history item
      text: item.text.replace(stringifiedLabels, ""),
      data: item.data,
      timestamp: item.updated,
      stringifiedLabels
    };
  });
  return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.groupBy)(items, (item) => item.stringifiedLabels);
}
function matchKey(groupKey, textFilter) {
  if (textFilter === "") {
    return true;
  }
  const isRegExp = textFilter.startsWith("/") && textFilter.endsWith("/");
  if (!isRegExp) {
    return groupKey.includes(textFilter);
  }
  try {
    return new RegExp(textFilter.slice(1, -1)).test(groupKey);
  } catch (err) {
    return false;
  }
}
function renderValueCell(item) {
  const matches = item.data.data?.evalMatches ?? [];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    item.data.text,
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LabelsWrapper, { children: matches.map((match) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertLabel__WEBPACK_IMPORTED_MODULE_16__.AlertLabel, { labelKey: match.metric, value: String(match.value) }, match.metric)) })
  ] });
}
function renderStateCell(item) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertStateTag__WEBPACK_IMPORTED_MODULE_18__.AlertStateTag, { state: item.data.state });
}
function renderTimestampCell(item) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: TimestampStyle, children: item.data.timestamp && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.dateTimeFormat)(item.data.timestamp) }) });
}
const LabelsWrapper = ({ children }) => {
  const { wrapper } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: wrapper, children });
};
const TimestampStyle = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  display: "flex",
  alignItems: "flex-end",
  flexDirection: "column"
});
const getStyles = (theme) => ({
  wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    "& > *": {
      marginRight: theme.spacing(1)
    }
  }),
  tableGroupKey: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }),
  goupKeyText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    overflowX: "auto",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    display: "block"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StateHistory);


/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useManagedAlertStateHistory.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useManagedAlertStateHistory: () => (/* binding */ useManagedAlertStateHistory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");





function useManagedAlertStateHistory(ruleUID) {
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const history = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__.useUnifiedAlertingSelector)(
    (state) => state.managedAlertStateHistory
  );
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_2__.fetchGrafanaAnnotationsAction)(ruleUID));
  }, [dispatch, ruleUID]);
  return history;
}


/***/ })

}]);
//# sourceMappingURL=public_app_features_alerting_unified_components_rules_state-history_StateHistory_tsx.538815ea1c74b737477e.js.map