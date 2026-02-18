"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SilencesTablePage"],{

/***/ "./public/app/features/alerting/unified/components/CollapseToggle.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapseToggle: () => (/* binding */ CollapseToggle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");



const CollapseToggle = ({
  isCollapsed,
  onToggle,
  idControlled,
  className,
  text,
  size = "xl",
  ...restOfProps
}) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button,
    {
      type: "button",
      fill: "text",
      variant: "secondary",
      "aria-expanded": !isCollapsed,
      "aria-controls": idControlled,
      className,
      icon: isCollapsed ? "angle-right" : "angle-down",
      onClick: () => onToggle(!isCollapsed),
      ...restOfProps,
      children: text
    }
  );
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/Matchers.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Matchers: () => (/* binding */ Matchers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Tags/TagList.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");





const Matchers = ({ matchers }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TagList,
    {
      className: styles.tags,
      tags: matchers.map((matcher) => `${matcher.name}${(0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.matcherToOperator)(matcher)}${matcher.value}`)
    }
  ) });
};
const getStyles = () => ({
  tags: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    justifyContent: "flex-start"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/NoSilencesCTA.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoSilencesSplash: () => (/* binding */ NoSilencesSplash)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/CallToActionCard/CallToActionCard.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");







const NoSilencesSplash = ({ alertManagerSourceName }) => {
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_6__.getInstancesPermissions)(alertManagerSourceName);
  if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasPermission(permissions.create)) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.EmptyState,
      {
        variant: "call-to-action",
        button: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, { href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_7__.makeAMLink)("alerting/silence/new", alertManagerSourceName), icon: "bell-slash", size: "lg", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "silences.empty-state.button-title", children: "Create silence" }) }),
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("silences.empty-state.title", "You haven't created any silences yet")
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CallToActionCard, { callToActionElement: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {}), message: "No silences found." });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/SilenceDetails.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SilenceDetails: () => (/* binding */ SilenceDetails)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/datetime/datemath.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/datetime/durationutil.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _SilencedAlertsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilencedAlertsTable.tsx");







const SilenceDetails = ({ silence }) => {
  const { startsAt, endsAt, comment, createdBy, silencedAlerts } = silence;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const dateDisplayFormat = "YYYY-MM-DD HH:mm";
  const startsAtDate = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.parse(startsAt);
  const endsAtDate = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.parse(endsAt);
  const duration = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.intervalToAbbreviatedDurationString)({ start: new Date(startsAt), end: new Date(endsAt) });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.title, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.silence-details.comment", children: "Comment" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: comment }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.title, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.silence-details.schedule", children: "Schedule" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: `${startsAtDate?.format(dateDisplayFormat)} - ${endsAtDate?.format(dateDisplayFormat)}` }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.title, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.silence-details.duration", children: "Duration" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: duration }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.title, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.silence-details.created-by", children: "Created by" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: createdBy }),
    Array.isArray(silencedAlerts) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.title, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.silence-details.affected-alerts", children: "Affected alerts" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SilencedAlertsTable__WEBPACK_IMPORTED_MODULE_6__["default"], { silencedAlerts })
    ] })
  ] });
};
const getStyles = (theme) => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "grid",
    gridTemplateColumns: "1fr 9fr",
    gridRowGap: "1rem",
    paddingBottom: theme.spacing(2)
  }),
  title: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.primary
  }),
  row: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    margin: theme.spacing(1, 0)
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/SilenceStateTag.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SilenceStateTag: () => (/* binding */ SilenceStateTag)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _StateTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/StateTag.tsx");




const silenceStateToState = {
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__.SilenceState.Active]: "good",
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__.SilenceState.Expired]: "neutral",
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__.SilenceState.Pending]: "neutral"
};
const SilenceStateTag = ({ state }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StateTag__WEBPACK_IMPORTED_MODULE_2__.StateTag, { state: silenceStateToState[state], children: state });


/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/SilencedAlertsTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _styles_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/styles/table.ts");
/* harmony import */ var _SilencedAlertsTableRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilencedAlertsTableRow.tsx");







const SilencedAlertsTable = ({ silencedAlerts }) => {
  const tableStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(_styles_table__WEBPACK_IMPORTED_MODULE_4__.getAlertTableStyles);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  if (!!silencedAlerts.length) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(tableStyles.table, styles.tableMargin), children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("colgroup", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("col", { className: tableStyles.colExpand }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("col", { className: styles.colState }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("col", {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("col", { className: styles.colName })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "silences-table.header.state", children: "State" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "silences-table.header.alert-name", children: "Alert name" }) })
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: silencedAlerts.map((alert, index) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _SilencedAlertsTableRow__WEBPACK_IMPORTED_MODULE_5__.SilencedAlertsTableRow,
          {
            alert,
            className: index % 2 === 0 ? tableStyles.evenRow : ""
          },
          alert.fingerprint
        );
      }) })
    ] });
  } else {
    return null;
  }
};
const getStyles = (theme) => ({
  tableMargin: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: theme.spacing(1)
  }),
  colState: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "110px"
  }),
  colName: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "65%"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SilencedAlertsTable);


/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/SilencedAlertsTableRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SilencedAlertsTableRow: () => (/* binding */ SilencedAlertsTableRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-alerting/src/grafana/rules/components/labels/AlertLabels.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/datetime/durationutil.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _AmAlertStateTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx");








const SilencedAlertsTableRow = ({ alert, className }) => {
  const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const duration = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.intervalToAbbreviatedDurationString)({
    start: new Date(alert.startsAt),
    end: new Date(alert.endsAt)
  });
  const alertName = Object.entries(alert.labels).reduce((name, [labelKey, labelValue]) => {
    if (labelKey === "alertname" || labelKey === "__alert_rule_title__") {
      name = labelValue;
    }
    return name;
  }, "");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { className, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CollapseToggle__WEBPACK_IMPORTED_MODULE_5__.CollapseToggle, { isCollapsed, onToggle: (collapsed) => setIsCollapsed(collapsed) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AmAlertStateTag__WEBPACK_IMPORTED_MODULE_6__.AmAlertStateTag, { state: alert.status.state }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.silenced-alerts-table-row.silenced-for", children: [
        "for ",
        { duration }
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: alertName })
    ] }),
    !isCollapsed && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { className, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { colSpan: 5, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_2__.AlertLabels, { labels: alert.labels, size: "sm" }) })
    ] })
  ] });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/SilencesFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SilencesFilter: () => (/* binding */ SilencesFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var _utils_matchers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/matchers.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");










const getQueryStringKey = () => (0,lodash__WEBPACK_IMPORTED_MODULE_2__.uniqueId)("query-string-");
const SilencesFilter = () => {
  const [queryStringKey, setQueryStringKey] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(getQueryStringKey());
  const [queryParams, setQueryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_13__.useQueryParams)();
  const { queryString } = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_15__.getSilenceFiltersFromUrlParams)(queryParams);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useStyles2)(getStyles);
  const handleQueryStringChange = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.debounce)((e) => {
    const target = e.target;
    setQueryParams({ queryString: target.value || null });
  }, 400);
  const clearFilters = () => {
    setQueryParams({
      queryString: null,
      silenceState: null
    });
    setTimeout(() => setQueryStringKey(getQueryStringKey()));
  };
  let inputValid = queryString && queryString.length > 3;
  try {
    if (!queryString) {
      inputValid = true;
    } else {
      (0,_utils_matchers__WEBPACK_IMPORTED_MODULE_14__.parsePromQLStyleMatcherLoose)(queryString);
    }
  } catch (err) {
    inputValid = false;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.flexRow, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field,
      {
        className: styles.rowChild,
        label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Label, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { gap: 0.5, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.common.search-by-matchers", children: "Search by matchers" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Tooltip,
            {
              content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.silences-filter.search-by-matchers-tooltip", children: "Filter silences by using a comma separated list of matchers, e.g." }) }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: "severity=critical, env=production" })
              ] }),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "info-circle", size: "sm" })
            }
          )
        ] }) }),
        invalid: !inputValid,
        error: !inputValid ? "Query must use valid matcher syntax" : null,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Input,
          {
            className: styles.searchInput,
            prefix: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "search" }),
            onChange: handleQueryStringChange,
            defaultValue: queryString ?? "",
            placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.silences-filter.search-query-input-placeholder-search", "Search"),
            "data-testid": "search-query-input"
          },
          queryStringKey
        )
      }
    ),
    queryString && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.rowChild, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { variant: "secondary", icon: "times", onClick: clearFilters, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.common.clear-filters", children: "Clear filters" }) }) })
  ] });
};
const getStyles = (theme) => ({
  searchInput: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "360px"
  }),
  flexRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: theme.spacing(3),
    borderBottom: `1px solid ${theme.colors.border.medium}`
  }),
  rowChild: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginRight: theme.spacing(1),
    marginBottom: 0,
    maxHeight: "52px"
  }),
  fieldLabel: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontSize: "12px",
    fontWeight: 500
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/SilencesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/datetime/datemath.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Collapse/CollapsableSection.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Link/Link.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Divider/Divider.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var app_features_alerting_unified_api_alertSilencesApi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/api/alertSilencesApi.ts");
/* harmony import */ var app_features_alerting_unified_api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/api/featureDiscoveryApi.ts");
/* harmony import */ var app_features_alerting_unified_utils_constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var app_features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/api/alertmanagerApi.ts");
/* harmony import */ var _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var _state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertmanagerContext.tsx");
/* harmony import */ var _utils_matchers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/utils/matchers.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/withPageErrorBoundary.tsx");
/* harmony import */ var _AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _Authorize__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var _GrafanaAlertmanagerWarning__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/alerting/unified/components/GrafanaAlertmanagerWarning.tsx");
/* harmony import */ var _Matchers__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/Matchers.tsx");
/* harmony import */ var _NoSilencesCTA__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/NoSilencesCTA.tsx");
/* harmony import */ var _SilenceDetails__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilenceDetails.tsx");
/* harmony import */ var _SilenceStateTag__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilenceStateTag.tsx");
/* harmony import */ var _SilencesFilter__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilencesFilter.tsx");




























const API_QUERY_OPTIONS = { pollingInterval: app_features_alerting_unified_utils_constants__WEBPACK_IMPORTED_MODULE_17__.SILENCES_POLL_INTERVAL_MS, refetchOnFocus: true };
const SilencesTable = () => {
  const { selectedAlertmanager: alertManagerSourceName = "" } = (0,_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_22__.useAlertmanager)();
  const [previewAlertsSupported, previewAlertsAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_21__.useAlertmanagerAbility)(
    _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_21__.AlertmanagerAction.PreviewSilencedInstances
  );
  const canPreview = previewAlertsSupported && previewAlertsAllowed;
  const { data: alertManagerAlerts = [], isLoading: amAlertsIsLoading } = _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_20__.alertmanagerApi.endpoints.getAlertmanagerAlerts.useQuery(
    { amSourceName: alertManagerSourceName, filter: { silenced: true, active: true, inhibited: true } },
    { ...API_QUERY_OPTIONS, skip: !canPreview }
  );
  const {
    data: silences = [],
    isLoading,
    error
  } = app_features_alerting_unified_api_alertSilencesApi__WEBPACK_IMPORTED_MODULE_15__.alertSilencesApi.endpoints.getSilences.useQuery(
    { datasourceUid: (0,app_features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_18__.getDatasourceAPIUid)(alertManagerSourceName), ruleMetadata: true, accessControl: true },
    API_QUERY_OPTIONS
  );
  const { currentData: amFeatures } = app_features_alerting_unified_api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_16__.featureDiscoveryApi.useDiscoverAmFeaturesQuery(
    { amSourceName: alertManagerSourceName ?? "" },
    { skip: !alertManagerSourceName }
  );
  const mimirLazyInitError = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_24__.stringifyErrorLike)(error).includes("the Alertmanager is not configured") && amFeatures?.lazyConfigInit;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.useStyles2)(getStyles);
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_14__.useQueryParams)();
  const filteredSilencesNotExpired = useFilteredSilences(silences, false);
  const filteredSilencesExpired = useFilteredSilences(silences, true);
  const { silenceState: silenceStateInParams } = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_24__.getSilenceFiltersFromUrlParams)(queryParams);
  const showExpiredFromUrl = silenceStateInParams === app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_19__.SilenceState.Expired;
  const itemsNotExpired = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const findSilencedAlerts = (id) => {
      return alertManagerAlerts.filter((alert) => alert.status.silencedBy.includes(id));
    };
    return filteredSilencesNotExpired.map((silence) => {
      const silencedAlerts = canPreview ? findSilencedAlerts(silence.id) : void 0;
      return {
        id: silence.id,
        data: { ...silence, silencedAlerts }
      };
    });
  }, [filteredSilencesNotExpired, alertManagerAlerts, canPreview]);
  const itemsExpired = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const findSilencedAlerts = (id) => {
      return alertManagerAlerts.filter((alert) => alert.status.silencedBy.includes(id));
    };
    return filteredSilencesExpired.map((silence) => {
      const silencedAlerts = canPreview ? findSilencedAlerts(silence.id) : void 0;
      return {
        id: silence.id,
        data: { ...silence, silencedAlerts }
      };
    });
  }, [filteredSilencesExpired, alertManagerAlerts, canPreview]);
  if (isLoading || amAlertsIsLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.silences-table.text-loading-silences", "Loading silences...") });
  }
  if (mimirLazyInitError) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "alerting.silences-table.title-the-selected-alertmanager-has-no-configuration",
          "The selected Alertmanager has no configuration"
        ),
        severity: "warning",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "silences.table.noConfig", children: "Create a new contact point to create a configuration using the default values or contact your administrator to set up the Alertmanager." })
      }
    );
  }
  if (error) {
    const errMessage = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_24__.stringifyErrorLike)(error) || "Unknown error.";
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Alert,
      {
        severity: "error",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.silences-table.title-error-loading-silences", "Error loading silences"),
        children: errMessage
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { "data-testid": "silences-table", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GrafanaAlertmanagerWarning__WEBPACK_IMPORTED_MODULE_29__.GrafanaAlertmanagerWarning, { currentAlertmanager: alertManagerSourceName }),
    !!silences.length && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { direction: "column", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SilencesFilter__WEBPACK_IMPORTED_MODULE_34__.SilencesFilter, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_27__.Authorize, { actions: [_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_21__.AlertmanagerAction.CreateSilence], children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { justifyContent: "end", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.LinkButton, { href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_24__.makeAMLink)("/alerting/silence/new", alertManagerSourceName), icon: "plus", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "silences.table.add-silence-button", children: "Add Silence" }) }) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        SilenceList,
        {
          items: itemsNotExpired,
          alertManagerSourceName,
          dataTestId: "not-expired-table"
        }
      ),
      itemsExpired.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.CollapsableSection,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.silences-table.label-section-expired", "Expired silences ({{numExpired}})", {
            numExpired: itemsExpired.length
          }),
          isOpen: showExpiredFromUrl,
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.callout, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { className: styles.calloutIcon, name: "info-circle" }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "silences.table.expired-silences", children: "Expired silences are automatically deleted after 5 days." }) })
            ] }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              SilenceList,
              {
                items: itemsExpired,
                alertManagerSourceName,
                dataTestId: "expired-table"
              }
            )
          ]
        }
      )
    ] }),
    !silences.length && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NoSilencesCTA__WEBPACK_IMPORTED_MODULE_31__.NoSilencesSplash, { alertManagerSourceName })
  ] });
};
function SilenceList({
  items,
  alertManagerSourceName,
  dataTestId
}) {
  const columns = useColumns(alertManagerSourceName);
  if (!!items.length) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _DynamicTable__WEBPACK_IMPORTED_MODULE_28__.DynamicTable,
      {
        pagination: { itemsPerPage: 25 },
        items,
        cols: columns,
        isExpandable: true,
        dataTestId,
        renderExpandedContent: ({ data }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Divider, {}),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SilenceDetails__WEBPACK_IMPORTED_MODULE_32__.SilenceDetails, { silence: data })
          ] });
        }
      }
    );
  } else {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "silences.table.no-matching-silences", children: "No matching silences found;" });
  }
}
const useFilteredSilences = (silences, expired = false) => {
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_14__.useQueryParams)();
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const { queryString } = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_24__.getSilenceFiltersFromUrlParams)(queryParams);
    const silenceIdsString = queryParams?.silenceIds;
    return silences.filter((silence) => {
      if (typeof silenceIdsString === "string") {
        const idsIncluded = silenceIdsString.split(",").includes(silence.id);
        if (!idsIncluded) {
          return false;
        }
      }
      if (queryString) {
        const matchers = (0,_utils_matchers__WEBPACK_IMPORTED_MODULE_23__.parsePromQLStyleMatcherLooseSafe)(queryString);
        const matchersMatch = matchers.every(
          (matcher) => silence.matchers?.some(
            ({ name, value, isEqual, isRegex }) => matcher.name === name && matcher.value === value && matcher.isEqual === isEqual && matcher.isRegex === isRegex
          )
        );
        if (!matchersMatch) {
          return false;
        }
      }
      if (expired) {
        return silence.status.state === app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_19__.SilenceState.Expired;
      } else {
        return silence.status.state !== app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_19__.SilenceState.Expired;
      }
    });
  }, [queryParams, silences, expired]);
};
const getStyles = (theme) => ({
  callout: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    backgroundColor: theme.colors.background.secondary,
    borderTop: `3px solid ${theme.colors.info.border}`,
    borderRadius: theme.shape.radius.default,
    height: "62px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& > *": {
      marginLeft: theme.spacing(1)
    }
  }),
  calloutIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.info.text
  })
});
function useColumns(alertManagerSourceName) {
  const [updateSupported, updateAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_21__.useAlertmanagerAbility)(_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_21__.AlertmanagerAction.UpdateSilence);
  const [expireSilence] = app_features_alerting_unified_api_alertSilencesApi__WEBPACK_IMPORTED_MODULE_15__.alertSilencesApi.endpoints.expireSilence.useMutation();
  const isGrafanaFlavoredAlertmanager = alertManagerSourceName === app_features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_18__.GRAFANA_RULES_SOURCE_NAME;
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const handleExpireSilenceClick = (silenceId) => {
      expireSilence({ datasourceUid: (0,app_features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_18__.getDatasourceAPIUid)(alertManagerSourceName), silenceId });
    };
    const columns = [
      {
        id: "state",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.use-columns.columns.label.state", "State"),
        renderCell: function renderStateTag({ data: { status } }) {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SilenceStateTag__WEBPACK_IMPORTED_MODULE_33__.SilenceStateTag, { state: status.state });
        },
        size: 3
      },
      {
        id: "alert-rule",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.use-columns.columns.label.alert-rule-targeted", "Alert rule targeted"),
        renderCell: function renderAlertRuleLink({ data: { metadata } }) {
          return metadata?.rule_title ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Link,
            {
              href: `/alerting/grafana/${metadata?.rule_uid}/view?returnTo=${encodeURIComponent("/alerting/silences")}`,
              children: metadata.rule_title
            }
          ) : "None";
        },
        size: 8
      },
      {
        id: "matchers",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.use-columns.columns.label.matching-labels", "Matching labels"),
        renderCell: function renderMatchers({ data: { matchers } }) {
          const filteredMatchers = matchers?.filter((matcher) => matcher.name !== app_features_alerting_unified_utils_constants__WEBPACK_IMPORTED_MODULE_17__.MATCHER_ALERT_RULE_UID) || [];
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Matchers__WEBPACK_IMPORTED_MODULE_30__.Matchers, { matchers: filteredMatchers });
        },
        size: 7
      },
      {
        id: "alerts",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.use-columns.columns.label.alerts-silenced", "Alerts silenced"),
        renderCell: function renderSilencedAlerts({ data: { silencedAlerts } }) {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { "data-testid": "alerts", children: Array.isArray(silencedAlerts) ? silencedAlerts.length : (
            // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
            "-"
          ) });
        },
        size: 2
      },
      {
        id: "schedule",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.use-columns.columns.label.schedule", "Schedule"),
        renderCell: function renderSchedule({ data: { startsAt, endsAt } }) {
          const startsAtDate = _grafana_data__WEBPACK_IMPORTED_MODULE_3__.parse(startsAt);
          const endsAtDate = _grafana_data__WEBPACK_IMPORTED_MODULE_3__.parse(endsAt);
          const dateDisplayFormat = "YYYY-MM-DD HH:mm";
          return `${startsAtDate?.format(dateDisplayFormat)} - ${endsAtDate?.format(dateDisplayFormat)}`;
        },
        size: 7
      }
    ];
    if (updateSupported) {
      columns.push({
        id: "actions",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.use-columns.label.actions", "Actions"),
        renderCell: function renderActions({ data: silence }) {
          const isExpired = silence.status.state === app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_19__.SilenceState.Expired;
          const canCreate = silence?.accessControl?.create;
          const canWrite = silence?.accessControl?.write;
          const canRecreate = isExpired && (isGrafanaFlavoredAlertmanager ? canCreate : updateAllowed);
          const canEdit = !isExpired && (isGrafanaFlavoredAlertmanager ? canWrite : updateAllowed);
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { gap: 0.5, wrap: "wrap", children: [
            canRecreate && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.LinkButton,
              {
                title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.use-columns.title-recreate", "Recreate"),
                size: "sm",
                variant: "secondary",
                icon: "sync",
                href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_24__.makeAMLink)(`/alerting/silence/${silence.id}/edit`, alertManagerSourceName),
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "silences.table.recreate-button", children: "Recreate" })
              }
            ),
            canEdit && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.LinkButton,
                {
                  title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.use-columns.title-unsilence", "Unsilence"),
                  size: "sm",
                  variant: "secondary",
                  icon: "bell",
                  onClick: () => handleExpireSilenceClick(silence.id),
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "silences.table.unsilence-button", children: "Unsilence" })
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.LinkButton,
                {
                  title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.use-columns.title-edit", "Edit"),
                  size: "sm",
                  variant: "secondary",
                  icon: "pen",
                  href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_24__.makeAMLink)(`/alerting/silence/${silence.id}/edit`, alertManagerSourceName),
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "silences.table.edit-button", children: "Edit" })
                }
              )
            ] })
          ] });
        },
        size: 5
      });
    }
    return columns;
  }, [alertManagerSourceName, expireSilence, isGrafanaFlavoredAlertmanager, updateAllowed, updateSupported]);
}
function SilencesTablePage() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_26__.AlertmanagerPageWrapper, { navId: "silences", accessType: "instance", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SilencesTable, {}) });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_25__.withPageErrorBoundary)(SilencesTablePage));


/***/ }),

/***/ "./public/app/features/alerting/unified/styles/table.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAlertTableStyles: () => (/* binding */ getAlertTableStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");


const getAlertTableStyles = (theme) => ({
  table: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    width: "100%",
    borderRadius: theme.shape.radius.default,
    border: `solid 1px ${theme.colors.border.weak}`,
    backgroundColor: theme.colors.background.secondary,
    overflow: "hidden",
    th: {
      padding: theme.spacing(1)
    },
    td: {
      padding: `0 ${theme.spacing(1)}`
    },
    tr: {
      height: "38px"
    }
  }),
  evenRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    backgroundColor: theme.colors.background.primary
  }),
  colExpand: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    width: "36px"
  }),
  nameCell: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    gap: theme.spacing(1)
  }),
  actionsCell: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    textAlign: "right",
    width: "1%",
    whiteSpace: "nowrap",
    "& > * + *": {
      marginLeft: theme.spacing(0.5)
    }
  })
});


/***/ })

}]);
//# sourceMappingURL=SilencesTablePage.c0c08664300405f07d1e.js.map