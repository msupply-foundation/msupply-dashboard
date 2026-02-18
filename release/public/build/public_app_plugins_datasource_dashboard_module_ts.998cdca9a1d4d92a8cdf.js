"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_plugins_datasource_dashboard_module_ts"],{

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorStack.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorStack: () => (/* binding */ EditorStack)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");




const EditorStack = ({ children, wrap: wrapItems = true, ...props }) => {
  var _a, _b;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Stack, { wrap: wrapItems ? "wrap" : undefined, direction: (_a = props.direction) != null ? _a : "row", gap: (_b = props.gap) != null ? _b : 2, ...props }, children);
};


//# sourceMappingURL=EditorStack.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/VisualQueryBuilder/components/OperationsEditorRow.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperationsEditorRow: () => (/* binding */ OperationsEditorRow)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var _QueryEditor_EditorStack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorStack.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js");
/* harmony import */ var sql_formatter_plus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/sql-formatter-plus/lib/sqlFormatter.js");
























function OperationsEditorRow({ children }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: styles.root }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_QueryEditor_EditorStack_js__WEBPACK_IMPORTED_MODULE_4__.EditorStack, { gap: 1 }, children));
}
const getStyles = (theme) => {
  return {
    root: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      padding: theme.spacing(1, 1, 0, 1),
      backgroundColor: theme.colors.background.secondary,
      borderRadius: theme.shape.radius.default
    })
  };
};


//# sourceMappingURL=OperationsEditorRow.js.map


/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/defer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defer: () => (/* binding */ defer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");


function defer(observableFactory) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
        (0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(observableFactory()).subscribe(subscriber);
    });
}
//# sourceMappingURL=defer.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/debounce.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/noop.js");
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");




function debounce(durationSelector) {
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)(function (source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var emit = function () {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            durationSubscriber = null;
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, function (value) {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            hasValue = true;
            lastValue = value;
            durationSubscriber = (0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, emit, _util_noop__WEBPACK_IMPORTED_MODULE_1__.noop);
            (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__.innerFrom)(durationSelector(value)).subscribe(durationSubscriber);
        }, function () {
            emit();
            subscriber.complete();
        }, undefined, function () {
            lastValue = durationSubscriber = null;
        }));
    });
}
//# sourceMappingURL=debounce.js.map

/***/ }),

/***/ "./public/app/plugins/datasource/dashboard/DashboardQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardQueryEditor: () => (/* binding */ DashboardQueryEditor),
/* harmony export */   INVALID_PANEL_DESCRIPTION: () => (/* binding */ INVALID_PANEL_DESCRIPTION)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-aria/utils/dist/useId.mjs");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/VisualQueryBuilder/components/OperationsEditorRow.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var app_features_dashboard_scene_scene_DashboardScene__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/dashboard-scene/scene/DashboardScene.tsx");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var app_features_query_components_QueryEditorRow__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/query/components/QueryEditorRow.tsx");
/* harmony import */ var _mixed_MixedDataSource__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/plugins/datasource/mixed/MixedDataSource.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/plugins/datasource/dashboard/constants.ts");

















function getQueryDisplayText(query) {
  return JSON.stringify(query);
}
function isPanelInEdit(panelId, panelInEditId) {
  let idToCompareWith = panelInEditId;
  if (window.__grafanaSceneContext && window.__grafanaSceneContext instanceof app_features_dashboard_scene_scene_DashboardScene__WEBPACK_IMPORTED_MODULE_17__.DashboardScene) {
    idToCompareWith = window.__grafanaSceneContext.state.editPanel?.getPanelId();
  }
  return panelId === idToCompareWith;
}
const topics = [
  { label: "All data", value: false },
  { label: "Annotations", value: true, description: "Include annotations as regular data" }
];
const INVALID_PANEL_DESCRIPTION = "Contains a shared dashboard query";
function DashboardQueryEditor({ data, query, onChange, onRunQuery }) {
  const { value: defaultDatasource } = (0,react_use__WEBPACK_IMPORTED_MODULE_5__["default"])(() => (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_18__.getDatasourceSrv)().get());
  const panel = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    const dashboard2 = (0,app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_16__.getDashboardSrv)().getCurrent();
    return dashboard2?.getPanelById(query.panelId ?? -124134);
  }, [query.panelId]);
  const { value: results, loading: loadingResults } = (0,react_use__WEBPACK_IMPORTED_MODULE_5__["default"])(async () => {
    if (!panel || !data) {
      return [];
    }
    const mainDS = await (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_18__.getDatasourceSrv)().get(panel.datasource);
    return Promise.all(
      panel.targets.map(async (query2) => {
        const ds = query2.datasource ? await (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_18__.getDatasourceSrv)().get(query2.datasource) : mainDS;
        const fmt = ds.getQueryDisplayText || getQueryDisplayText;
        const queryData = (0,app_features_query_components_QueryEditorRow__WEBPACK_IMPORTED_MODULE_19__.filterPanelDataToQuery)(data, query2.refId) ?? data;
        return {
          refId: query2.refId,
          query: fmt(query2),
          name: ds.name,
          img: ds.meta.info.logos.small,
          data: queryData.series,
          error: queryData.error
        };
      })
    );
  }, [data, panel]);
  const onUpdateQuery = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(
    (query2) => {
      onChange(query2);
      onRunQuery();
    },
    [onChange, onRunQuery]
  );
  const onPanelChanged = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(
    (id) => {
      onUpdateQuery({
        ...query,
        panelId: id
      });
    },
    [query, onUpdateQuery]
  );
  const onTransformToggle = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => {
    onUpdateQuery({
      ...query,
      withTransforms: !query.withTransforms
    });
  }, [query, onUpdateQuery]);
  const onTopicChanged = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(
    (t) => {
      onUpdateQuery({
        ...query,
        topic: t ? _grafana_data__WEBPACK_IMPORTED_MODULE_6__.DataTopic.Annotations : void 0
      });
    },
    [query, onUpdateQuery]
  );
  const onAdHocFiltersToggle = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => {
    onUpdateQuery({
      ...query,
      adHocFiltersEnabled: !query.adHocFiltersEnabled
    });
  }, [query, onUpdateQuery]);
  const isMixedDSWithDashboardQueries = (panel2) => {
    return panel2.datasource?.uid === _mixed_MixedDataSource__WEBPACK_IMPORTED_MODULE_20__.MIXED_DATASOURCE_NAME && panel2.targets.some((t) => t.datasource?.uid === _constants__WEBPACK_IMPORTED_MODULE_21__.SHARED_DASHBOARD_QUERY);
  };
  const getPanelDescription = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(
    (panel2) => {
      const datasource = panel2.datasource ?? defaultDatasource;
      const dsname = (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_18__.getDatasourceSrv)().getInstanceSettings(datasource)?.name;
      const queryCount = panel2.targets.length;
      return `${queryCount} ${pluralize__WEBPACK_IMPORTED_MODULE_3___default()("query", queryCount)} to ${dsname}`;
    },
    [defaultDatasource]
  );
  const dashboard = (0,app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_16__.getDashboardSrv)().getCurrent();
  const showTransforms = Boolean(query.withTransforms || panel?.transformations?.length);
  const panels = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(
    () => dashboard?.panels.filter(
      (panel2) => app_core_config__WEBPACK_IMPORTED_MODULE_15__["default"].panels[panel2.type] && panel2.targets && !isPanelInEdit(panel2.id, dashboard.panelInEdit?.id)
    ).map((panel2) => {
      let description = getPanelDescription(panel2);
      let isDisabled = false;
      if (panel2.datasource?.uid === _constants__WEBPACK_IMPORTED_MODULE_21__.SHARED_DASHBOARD_QUERY || isMixedDSWithDashboardQueries(panel2)) {
        description = INVALID_PANEL_DESCRIPTION;
        isDisabled = true;
      }
      return {
        value: panel2.id,
        label: panel2.title ?? "Panel " + panel2.id,
        imgUrl: app_core_config__WEBPACK_IMPORTED_MODULE_15__["default"].panels[panel2.type].info.logos.small,
        description,
        isDisabled
      };
    }) ?? [],
    [dashboard, getPanelDescription]
  );
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.useStyles2)(getStyles);
  const selectId = (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.useId)();
  if (!dashboard) {
    return null;
  }
  if (panels.length < 1) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: styles.noQueriesText, children: "This dashboard does not have any other panels. Add queries to other panels and try again." });
  }
  const selected = panels.find((panel2) => panel2.value === query.panelId);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_7__.OperationsEditorRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "column", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { gap: 3, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field, { label: "Source panel", description: "Use query results from another panel", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Select,
        {
          inputId: selectId,
          placeholder: "Choose panel",
          isSearchable: true,
          options: panels,
          value: selected,
          onChange: (item) => onPanelChanged(item.value)
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field, { label: "Data", description: "Use data or annotations from the panel", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.RadioButtonGroup,
        {
          options: topics,
          value: query.topic === _grafana_data__WEBPACK_IMPORTED_MODULE_6__.DataTopic.Annotations,
          onChange: onTopicChanged
        }
      ) }),
      showTransforms && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field, { label: "Transform", description: "Apply transformations from the source panel", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.InlineSwitch, { value: Boolean(query.withTransforms), onChange: onTransformToggle }) }),
      app_core_config__WEBPACK_IMPORTED_MODULE_15__["default"].featureToggles.dashboardDsAdHocFiltering && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field,
        {
          label: "AdHoc Filters",
          description: "Apply --Dashboard-- data source AdHoc filters to this panel",
          noMargin: true,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.InlineSwitch, { value: Boolean(query.adHocFiltersEnabled), onChange: onAdHocFiltersToggle })
        }
      )
    ] }),
    loadingResults ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Spinner, {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: results && Boolean(results.length) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field, { label: "Queries from panel", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "column", children: results.map((target, i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { alignItems: "center", gap: 1, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: target.refId }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: target.img, alt: target.name, title: target.name, width: 16 }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: target.query })
    ] }, i)) }) }) })
  ] }) });
}
function getStyles(theme) {
  return {
    noQueriesText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: theme.spacing(1.25)
    })
  };
}


/***/ }),

/***/ "./public/app/plugins/datasource/dashboard/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardDatasource: () => (/* binding */ DashboardDatasource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/defer.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/interval.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/debounce.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/finalize.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/first.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-schema/src/common/common.gen.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-data/src/types/datasource.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var app_features_dashboard_scene_utils_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/dashboard-scene/utils/utils.ts");
/* harmony import */ var _mixed_MixedDataSource__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/plugins/datasource/mixed/MixedDataSource.ts");







class DashboardDatasource extends _grafana_data__WEBPACK_IMPORTED_MODULE_11__.DataSourceApi {
  constructor(instanceSettings) {
    super(instanceSettings);
  }
  getCollapsedText(query) {
    return `Dashboard Reference: ${query.panelId}`;
  }
  query(options) {
    const sceneScopedVar = options.scopedVars?.__sceneObject;
    const sceneScopedVarValue = sceneScopedVar?.value.valueOf();
    const scene = sceneScopedVarValue && (0,_grafana_scenes__WEBPACK_IMPORTED_MODULE_15__.isSceneObject)(sceneScopedVarValue) ? sceneScopedVarValue : void 0;
    if (!scene) {
      throw new Error("Can only be called from a scene");
    }
    const query = options.targets[0];
    if (!query) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({ data: [] });
    }
    const panelId = query.panelId;
    if (!panelId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({ data: [] });
    }
    let sourcePanel = (0,app_features_dashboard_scene_utils_utils__WEBPACK_IMPORTED_MODULE_16__.findVizPanelByKey)(scene, (0,app_features_dashboard_scene_utils_utils__WEBPACK_IMPORTED_MODULE_16__.getVizPanelKeyForPanelId)(panelId));
    if (!sourcePanel) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({ data: [], error: { message: "Could not find source panel" } });
    }
    let sourceDataProvider = sourcePanel.state.$data;
    if (!query.withTransforms && sourceDataProvider instanceof _grafana_scenes__WEBPACK_IMPORTED_MODULE_15__.SceneDataTransformer) {
      sourceDataProvider = sourceDataProvider.state.$data;
    }
    if (!sourceDataProvider || !sourceDataProvider.getResultsStream) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({ data: [] });
    }
    const adHocFilters = options.filters || [];
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.defer)(() => {
      if (!sourceDataProvider.isActive && sourceDataProvider?.setContainerWidth) {
        sourceDataProvider?.setContainerWidth(500);
      }
      sourceDataProvider?.bypassIsInViewChanged?.(true);
      const activateCleanUp = (0,app_features_dashboard_scene_utils_utils__WEBPACK_IMPORTED_MODULE_16__.activateSceneObjectAndParentTree)(sourceDataProvider);
      return sourceDataProvider.getResultsStream().pipe(
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(50),
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)((result) => {
          return {
            data: this.getDataFramesForQueryTopic(result.data, query, adHocFilters),
            state: result.data.state,
            errors: result.data.errors,
            error: result.data.error,
            key: "source-ds-provider"
          };
        }),
        this.emitFirstLoadedDataIfMixedDS(options.requestId),
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => {
          sourceDataProvider?.bypassIsInViewChanged?.(false);
          activateCleanUp?.();
        })
      );
    });
  }
  getDataFramesForQueryTopic(data, query, filters) {
    const annotations = data.annotations ?? [];
    if (query.topic === _grafana_data__WEBPACK_IMPORTED_MODULE_8__.DataTopic.Annotations) {
      return annotations.map((frame) => ({
        ...frame,
        meta: {
          ...frame.meta,
          dataTopic: _grafana_data__WEBPACK_IMPORTED_MODULE_8__.DataTopic.Series
        }
      }));
    } else {
      const series = data.series.map((s) => {
        return {
          ...s,
          fields: s.fields.map((field) => ({
            ...field,
            config: {
              ...field.config,
              // Enable AdHoc filtering for string and numeric fields only when feature toggle and per-panel setting are enabled
              filterable: _grafana_runtime__WEBPACK_IMPORTED_MODULE_14__.config.featureToggles.dashboardDsAdHocFiltering && query.adHocFiltersEnabled ? field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_12__.FieldType.string || field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_12__.FieldType.number : field.config.filterable
            },
            state: {
              ...field.state
            }
          }))
        };
      });
      if (!_grafana_runtime__WEBPACK_IMPORTED_MODULE_14__.config.featureToggles.dashboardDsAdHocFiltering || !query.adHocFiltersEnabled || filters.length === 0) {
        return [...series, ...annotations];
      }
      const filteredSeries = series.map((frame) => this.applyAdHocFilters(frame, filters));
      return [...filteredSeries, ...annotations];
    }
  }
  /**
   * Apply AdHoc filters to a DataFrame
   * Optimized version with pre-computed field indices and value matchers for better performance
   */
  applyAdHocFilters(frame, filters) {
    if (filters.length === 0 || frame.length === 0) {
      return frame;
    }
    const applicableFilters = this.getApplicableFiltersForFrame(frame, filters);
    if (applicableFilters.length === 0) {
      return frame;
    }
    const hasImpossibleFilter = applicableFilters.some(
      ({ fieldIndex, filter }) => fieldIndex === -1 && filter.operator === "="
    );
    if (hasImpossibleFilter) {
      return this.reconstructDataFrame(frame);
    }
    const matchingRows = /* @__PURE__ */ new Set();
    for (let rowIndex = 0; rowIndex < frame.length; rowIndex++) {
      const rowMatches = applicableFilters.every(({ matcher, fieldIndex }) => {
        const field = frame.fields[fieldIndex];
        return matcher?.(rowIndex, field, frame, [frame]) ?? false;
      });
      if (rowMatches) {
        matchingRows.add(rowIndex);
      }
    }
    if (matchingRows.size === frame.length) {
      return frame;
    }
    return this.reconstructDataFrame(frame, matchingRows);
  }
  /**
   * Get applicable filters for a specific DataFrame, considering field existence and type compatibility.
   */
  getApplicableFiltersForFrame(frame, filters) {
    return filters.map((filter) => {
      const fieldIndex = frame.fields.findIndex((f) => f.name === filter.key);
      return { filter, fieldIndex, matcher: this.createValueMatcher(filter, fieldIndex, frame) };
    }).filter(({ filter, fieldIndex, matcher }) => {
      if (fieldIndex === -1) {
        return filter.operator === "=";
      }
      return matcher !== null;
    });
  }
  /**
   * Create a value matcher from an AdHoc filter.
   */
  createValueMatcher(filter, fieldIndex, frame) {
    if (fieldIndex === -1) {
      return null;
    }
    const field = frame.fields[fieldIndex];
    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_14__.config.featureToggles.dashboardDsAdHocFiltering) {
      if (field.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_12__.FieldType.string && field.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_12__.FieldType.number) {
        return null;
      }
    }
    let matcherId;
    switch (filter.operator) {
      case "=":
        matcherId = _grafana_data__WEBPACK_IMPORTED_MODULE_10__.ValueMatcherID.equal;
        break;
      case "!=":
        matcherId = _grafana_data__WEBPACK_IMPORTED_MODULE_10__.ValueMatcherID.notEqual;
        break;
      default:
        return null;
    }
    try {
      return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_9__.getValueMatcher)({
        id: matcherId,
        options: { value: filter.value }
      });
    } catch (error) {
      console.warn("Failed to create value matcher for filter:", filter, error);
      return null;
    }
  }
  /**
   * Reconstruct DataFrame with only matching rows
   * Optimized to avoid repeated array operations
   */
  reconstructDataFrame(frame, matchingRows) {
    const rows = matchingRows ?? /* @__PURE__ */ new Set();
    const fields = frame.fields.map((field) => {
      const newValues = new Array(rows.size);
      let i = 0;
      for (const rowIndex of rows) {
        newValues[i++] = field.values[rowIndex];
      }
      return {
        ...field,
        values: newValues,
        state: {}
        // Clean the state as it's being recalculated
      };
    });
    return {
      ...frame,
      fields,
      length: rows.size
    };
  }
  emitFirstLoadedDataIfMixedDS(requestId) {
    return (source) => {
      if (requestId.includes(_mixed_MixedDataSource__WEBPACK_IMPORTED_MODULE_17__.MIXED_REQUEST_PREFIX)) {
        let count = 0;
        return source.pipe(
          /*
           * We can have the following piped values scenarios:
           * Loading -> Done         - initial load
           * Done -> Loading -> Done - refresh
           * Done                    - adding another query in editor
           *
           * When we see Done as a first element this is because of ReplaySubject in SceneQueryRunner
           *
           * we use first(...) below to emit correct result which is last value with Done/Error states
           *
           * to avoid emitting first Done/Error (due to ReplaySubject) we selectively debounce only first value with such states
           */
          (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.debounce)((val) => {
            if ([_grafana_data__WEBPACK_IMPORTED_MODULE_13__.LoadingState.Done, _grafana_data__WEBPACK_IMPORTED_MODULE_13__.LoadingState.Error].includes(val.state) && count === 0) {
              count++;
              return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(400);
            }
            count++;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(0);
          }),
          (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.first)((val) => val.state === _grafana_data__WEBPACK_IMPORTED_MODULE_13__.LoadingState.Done || val.state === _grafana_data__WEBPACK_IMPORTED_MODULE_13__.LoadingState.Error)
        );
      }
      return source;
    };
  }
  testDatasource() {
    return Promise.resolve({ message: "", status: "" });
  }
  /**
   * Check which AdHoc filters are applicable based on operator and field type support
   */
  async getDrilldownsApplicability(options) {
    if (!_grafana_runtime__WEBPACK_IMPORTED_MODULE_14__.config.featureToggles.dashboardDsAdHocFiltering) {
      return [];
    }
    const hasAdHocFiltersEnabled = options?.queries?.some((query) => query.adHocFiltersEnabled);
    if (!hasAdHocFiltersEnabled) {
      return [];
    }
    const filters = options?.filters || [];
    return filters.map((filter) => {
      if (filter.operator !== "=" && filter.operator !== "!=") {
        return {
          key: filter.key,
          applicable: false,
          reason: `Operator '${filter.operator}' is not supported. Only '=' and '!=' operators are supported.`
        };
      }
      return {
        key: filter.key,
        applicable: true
      };
    });
  }
  getTagKeys() {
    return Promise.resolve([]);
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/dashboard/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/datasource.ts");
/* harmony import */ var _DashboardQueryEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/dashboard/DashboardQueryEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/dashboard/datasource.ts");




const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_2__.DashboardDatasource).setQueryEditor(_DashboardQueryEditor__WEBPACK_IMPORTED_MODULE_1__.DashboardQueryEditor);


/***/ })

}]);
//# sourceMappingURL=public_app_plugins_datasource_dashboard_module_ts.998cdca9a1d4d92a8cdf.js.map