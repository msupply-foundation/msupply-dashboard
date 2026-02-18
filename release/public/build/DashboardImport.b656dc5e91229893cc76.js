"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["DashboardImport"],{

/***/ "./public/app/core/components/Form/Form.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./public/app/features/dashboard-scene/v2schema/ImportDashboardFormV2.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportDashboardFormV2: () => (/* binding */ ImportDashboardFormV2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var app_core_components_Select_FolderPicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/Select/FolderPicker.tsx");
/* harmony import */ var app_features_datasources_components_picker_DataSourcePicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/datasources/components/picker/DataSourcePicker.tsx");
/* harmony import */ var app_features_manage_dashboards_utils_validation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/manage-dashboards/utils/validation.ts");











const ImportDashboardFormV2 = ({
  register,
  errors,
  control,
  inputs,
  getValues,
  uidReset,
  onUidReset,
  onCancel,
  onSubmit,
  watch
}) => {
  const [isSubmitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [selectedDataSources, setSelectedDataSources] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isSubmitted && (errors.dashboard?.title || errors.k8s?.name)) {
      const formValues = getValues();
      onSubmit({
        ...formValues,
        dashboard: {
          ...formValues.dashboard,
          title: formValues.dashboard.title
        }
      });
    }
  }, [errors, getValues, isSubmitted, onSubmit]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "manage-dashboards.import-dashboard-form.options", children: "Options" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("manage-dashboards.import-dashboard-form.label-name", "Name"),
        invalid: !!errors.dashboard?.title,
        error: errors.dashboard?.title && errors.dashboard?.title.message,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
          {
            ...register("dashboard.title", {
              required: "Name is required",
              validate: async (v) => await (0,app_features_manage_dashboards_utils_validation__WEBPACK_IMPORTED_MODULE_12__.validateTitle)(v, getValues().folderUid ?? "")
            }),
            type: "text",
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.ImportDashboardForm.name
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("dashboard-scene.import-dashboard-form-v2.label-folder", "Folder"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
      {
        render: ({ field: { ref, value, onChange, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          app_core_components_Select_FolderPicker__WEBPACK_IMPORTED_MODULE_10__.FolderPicker,
          {
            ...field,
            onChange: (uid, title) => {
              onChange(uid, title);
            },
            value
          }
        ),
        name: "folderUid",
        control
      }
    ) }),
    inputs.dataSources && inputs.dataSources.map((input) => {
      if (input.pluginId === _grafana_runtime_internal__WEBPACK_IMPORTED_MODULE_5__.ExpressionDatasourceRef.type) {
        return null;
      }
      const dataSourceOption = `datasource-${input.pluginId}`;
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field,
        {
          label: input.pluginId,
          description: input.description,
          invalid: !!errors[dataSourceOption],
          error: errors[dataSourceOption] ? "Please select a data source" : void 0,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
            {
              name: dataSourceOption,
              render: ({ field: { ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                app_features_datasources_components_picker_DataSourcePicker__WEBPACK_IMPORTED_MODULE_11__.DataSourcePicker,
                {
                  ...field,
                  noDefault: true,
                  placeholder: input.info,
                  pluginId: input.pluginId,
                  current: selectedDataSources[input.pluginId],
                  onChange: (ds) => {
                    field.onChange(ds);
                    setSelectedDataSources((prev) => ({
                      ...prev,
                      [input.pluginId]: {
                        uid: ds.uid,
                        type: ds.type,
                        name: ds.name
                      }
                    }));
                  }
                }
              ),
              control,
              rules: { required: true }
            }
          )
        },
        input.pluginId
      );
    }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
        {
          type: "submit",
          "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.ImportDashboardForm.submit,
          variant: getButtonVariant(errors),
          onClick: () => {
            setSubmitted(true);
          },
          children: getButtonText(errors)
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { type: "reset", variant: "secondary", onClick: onCancel, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "dashboard-scene.import-dashboard-form-v2.cancel", children: "Cancel" }) })
    ] })
  ] });
};
function getButtonVariant(errors) {
  return errors && (errors.dashboard?.title || errors.k8s?.name) ? "destructive" : "primary";
}
function getButtonText(errors) {
  return errors && (errors.dashboard?.title || errors.k8s?.name) ? "Import (Overwrite)" : "Import";
}


/***/ }),

/***/ "./public/app/features/dashboard-scene/v2schema/ImportDashboardOverviewV2.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportDashboardOverviewV2: () => (/* binding */ ImportDashboardOverviewV2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/utils/location.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_schema_dist_esm_schema_dashboard_v2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-schema/src/schema/dashboard/v2beta1/types.spec.gen.ts");
/* harmony import */ var app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Form/Form.tsx");
/* harmony import */ var app_features_dashboard_api_dashboard_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/api/dashboard_api.ts");
/* harmony import */ var app_features_manage_dashboards_state_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/manage-dashboards/state/actions.ts");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _ImportDashboardFormV2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/dashboard-scene/v2schema/ImportDashboardFormV2.tsx");











const IMPORT_FINISHED_EVENT_NAME = "dashboard_import_imported";
function ImportDashboardOverviewV2() {
  const [uidReset, setUidReset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
  const searchObj = _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.locationService.getSearchObject();
  const dashboard = (0,app_types_store__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state) => state.importDashboard.dashboard);
  const inputs = (0,app_types_store__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state) => state.importDashboard.inputs);
  const folder = searchObj.folderUid ? { uid: String(searchObj.folderUid) } : { uid: "" };
  function onUidReset() {
    setUidReset(true);
  }
  function onCancel() {
    dispatch((0,app_features_manage_dashboards_state_actions__WEBPACK_IMPORTED_MODULE_8__.clearLoadedDashboard)());
  }
  async function onSubmit(form) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.reportInteraction)(IMPORT_FINISHED_EVENT_NAME);
    const dashboardWithDataSources = {
      ...dashboard,
      title: form.dashboard.title,
      annotations: dashboard.annotations?.map((annotation) => {
        const dsType = annotation.spec.query?.spec.group;
        if (dsType) {
          if (form[`datasource-${dsType}`]) {
            const ds = form[`datasource-${dsType}`];
            return {
              ...annotation,
              spec: {
                ...annotation.spec,
                query: {
                  kind: "DataQuery",
                  group: dsType,
                  version: (0,_grafana_schema_dist_esm_schema_dashboard_v2__WEBPACK_IMPORTED_MODULE_5__.defaultDataQueryKind)().version,
                  datasource: { name: ds.uid },
                  spec: {
                    ...annotation.spec.query?.spec
                  }
                }
              }
            };
          }
        }
        return annotation;
      }),
      variables: dashboard.variables?.map((variable) => {
        if (variable.kind === "QueryVariable") {
          const dsType = variable.spec.query?.spec.group;
          if (dsType) {
            if (form[`datasource-${dsType}`]) {
              const ds = form[`datasource-${dsType}`];
              return {
                ...variable,
                spec: {
                  ...variable.spec,
                  query: {
                    ...variable.spec.query,
                    spec: {
                      ...variable.spec.query.spec,
                      group: ds.type,
                      datasource: {
                        name: ds.uid
                      }
                    }
                  },
                  options: [],
                  current: {
                    text: "",
                    value: ""
                  },
                  refresh: "onDashboardLoad"
                }
              };
            }
          }
        } else if (variable.kind === "DatasourceVariable") {
          const dsType = variable.spec.pluginId;
          if (dsType) {
            if (form[`datasource-${dsType}`]) {
              const ds = form[`datasource-${dsType}`];
              return {
                ...variable,
                spec: {
                  ...variable.spec,
                  current: {
                    // @ts-ignore
                    text: ds.name,
                    // @ts-ignore
                    value: ds.uid
                  }
                }
              };
            }
          }
        }
        return variable;
      }),
      elements: Object.fromEntries(
        Object.entries(dashboard.elements).map(([key, element]) => {
          if (element.kind === "Panel") {
            const panel = { ...element.spec };
            if (panel.data?.kind === "QueryGroup") {
              const newQueries = panel.data.spec.queries.map((query) => {
                if (query.kind === "PanelQuery") {
                  const queryType = query.spec.query?.kind;
                  if (queryType && form[`datasource-${queryType}`]) {
                    const ds = form[`datasource-${queryType}`];
                    return {
                      ...query,
                      spec: {
                        ...query.spec,
                        datasource: {
                          uid: ds.uid,
                          type: ds.type
                        }
                      }
                    };
                  }
                }
                return query;
              });
              panel.data = {
                ...panel.data,
                spec: {
                  ...panel.data.spec,
                  queries: newQueries
                }
              };
            }
            return [
              key,
              {
                kind: element.kind,
                spec: panel
              }
            ];
          }
          return [key, element];
        })
      )
    };
    const result = await (0,app_features_dashboard_api_dashboard_api__WEBPACK_IMPORTED_MODULE_7__.getDashboardAPI)("v2").saveDashboard({
      ...form,
      dashboard: dashboardWithDataSources
    });
    if (result.url) {
      const dashboardUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.locationUtil.stripBaseFromUrl(result.url);
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.locationService.push(dashboardUrl);
    }
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_6__.Form,
    {
      onSubmit,
      defaultValues: { dashboard, k8s: { annotations: { "grafana.app/folder": folder.uid } } },
      validateOnMount: true,
      validateOn: "onChange",
      children: ({ register, errors, control, watch, getValues }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _ImportDashboardFormV2__WEBPACK_IMPORTED_MODULE_10__.ImportDashboardFormV2,
        {
          register,
          inputs,
          errors,
          control,
          getValues,
          uidReset,
          onCancel,
          onUidReset,
          onSubmit,
          watch
        }
      )
    }
  ) });
}


/***/ }),

/***/ "./public/app/features/manage-dashboards/DashboardImportPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/legacyEvents.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/data.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/components/TextArea/TextArea.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/components/FileDropzone/FileDropzone.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./packages/grafana-ui/src/themes/stylesFactory.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/core/components/Form/Form.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _core_actions_cleanUp__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/core/actions/cleanUp.ts");
/* harmony import */ var _dashboard_scene_v2schema_ImportDashboardOverviewV2__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/dashboard-scene/v2schema/ImportDashboardOverviewV2.tsx");
/* harmony import */ var _components_ImportDashboardOverview__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/manage-dashboards/components/ImportDashboardOverview.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/manage-dashboards/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/manage-dashboards/state/reducers.ts");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/manage-dashboards/utils/validation.ts");




















const IMPORT_STARTED_EVENT_NAME = "dashboard_import_loaded";
const JSON_PLACEHOLDER = `{
    "title": "Example - Repeating Dictionary variables",
    "uid": "_0HnEoN4z",
    "panels": [...]
    ...
}
`;
const mapStateToProps = (state) => ({
  loadingState: state.importDashboard.state,
  dashboard: state.importDashboard.dashboard
});
const mapDispatchToProps = {
  fetchGcomDashboard: _state_actions__WEBPACK_IMPORTED_MODULE_28__.fetchGcomDashboard,
  importDashboardJson: _state_actions__WEBPACK_IMPORTED_MODULE_28__.importDashboardJson,
  cleanUpAction: _core_actions_cleanUp__WEBPACK_IMPORTED_MODULE_25__.cleanUpAction
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps);
class UnthemedDashboardImport extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor(props) {
    super(props);
    // Do not display upload file list
    this.fileListRenderer = (file, removeFile) => null;
    this.onFileUpload = (result) => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_9__.reportInteraction)(IMPORT_STARTED_EVENT_NAME, {
        import_source: "json_uploaded"
      });
      try {
        const json = JSON.parse(String(result));
        if (json.spec?.elements) {
          (0,app_store_store__WEBPACK_IMPORTED_MODULE_24__.dispatch)((0,_state_actions__WEBPACK_IMPORTED_MODULE_28__.importDashboardV2Json)(json.spec));
          return;
        } else if (json.elements) {
          (0,app_store_store__WEBPACK_IMPORTED_MODULE_24__.dispatch)((0,_state_actions__WEBPACK_IMPORTED_MODULE_28__.importDashboardV2Json)(json));
          return;
        }
        if (json.spec) {
          this.props.importDashboardJson(json.spec);
          return;
        }
        this.props.importDashboardJson(json);
      } catch (error) {
        if (error instanceof Error) {
          app_core_app_events__WEBPACK_IMPORTED_MODULE_21__["default"].emit(_grafana_data__WEBPACK_IMPORTED_MODULE_4__.AppEvents.alertError, ["Import failed", "JSON -> JS Serialization failed: " + error.message]);
        }
        return;
      }
    };
    this.getDashboardFromJson = (formData) => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_9__.reportInteraction)(IMPORT_STARTED_EVENT_NAME, {
        import_source: "json_pasted"
      });
      const dashboard = JSON.parse(formData.dashboardJson);
      if (dashboard.spec?.elements) {
        (0,app_store_store__WEBPACK_IMPORTED_MODULE_24__.dispatch)((0,_state_actions__WEBPACK_IMPORTED_MODULE_28__.importDashboardV2Json)(dashboard.spec));
        return;
      } else if (dashboard.elements) {
        (0,app_store_store__WEBPACK_IMPORTED_MODULE_24__.dispatch)((0,_state_actions__WEBPACK_IMPORTED_MODULE_28__.importDashboardV2Json)(dashboard));
        return;
      }
      if (dashboard.spec) {
        this.props.importDashboardJson(dashboard.spec);
        return;
      }
      this.props.importDashboardJson(dashboard);
    };
    this.getGcomDashboard = (formData) => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_9__.reportInteraction)(IMPORT_STARTED_EVENT_NAME, {
        import_source: "gcom"
      });
      let dashboardId;
      const match = /(^\d+$)|dashboards\/(\d+)/.exec(formData.gcomDashboard);
      if (match && match[1]) {
        dashboardId = match[1];
      } else if (match && match[2]) {
        dashboardId = match[2];
      }
      if (dashboardId) {
        this.props.fetchGcomDashboard(dashboardId);
      }
    };
    this.pageNav = {
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("manage-dashboards.unthemed-dashboard-import.text.import-dashboard", "Import dashboard"),
      subTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)(
        "manage-dashboards.unthemed-dashboard-import.subTitle.import-dashboard-from-file-or-grafanacom",
        "Import dashboard from file or Grafana.com"
      )
    };
    const { gcomDashboardId } = this.props.queryParams;
    if (gcomDashboardId) {
      this.getGcomDashboard({ gcomDashboard: gcomDashboardId });
      return;
    }
  }
  componentWillUnmount() {
    this.props.cleanUpAction({ cleanupAction: (state) => state.importDashboard = _state_reducers__WEBPACK_IMPORTED_MODULE_29__.initialImportDashboardState });
  }
  renderImportForm() {
    const styles = importStyles(this.props.theme);
    const GcomDashboardsLink = () => (
      // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.TextLink, { variant: "bodySmall", href: "https://grafana.com/grafana/dashboards/", external: true, children: "grafana.com/dashboards" })
    );
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.option, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_18__.FileDropzone,
        {
          options: { multiple: false, accept: [".json", ".txt"] },
          readAs: "readAsText",
          fileListRenderer: this.fileListRenderer,
          onLoad: this.onFileUpload,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_18__.FileDropzoneDefaultChildren,
            {
              primaryText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("dashboard-import.file-dropzone.primary-text", "Upload dashboard JSON file"),
              secondaryText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)(
                "dashboard-import.file-dropzone.secondary-text",
                "Drag and drop here or click to browse"
              )
            }
          )
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.option, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_22__.Form, { onSubmit: this.getGcomDashboard, defaultValues: { gcomDashboard: "" }, children: ({ register, errors }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
        {
          label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Label, { className: styles.labelWithLink, htmlFor: "url-input", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "dashboard-import.gcom-field.label", children: [
            "Find and import dashboards for common applications at ",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GcomDashboardsLink, {})
          ] }) }) }),
          invalid: !!errors.gcomDashboard,
          error: errors.gcomDashboard && errors.gcomDashboard.message,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Input,
            {
              id: "url-input",
              placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("dashboard-import.gcom-field.placeholder", "Grafana.com dashboard URL or ID"),
              type: "text",
              ...register("gcomDashboard", {
                required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)(
                  "dashboard-import.gcom-field.validation-required",
                  "A Grafana dashboard URL or ID is required"
                ),
                validate: _utils_validation__WEBPACK_IMPORTED_MODULE_30__.validateGcomDashboard
              }),
              addonAfter: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Button, { type: "submit", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "dashboard-import.gcom-field.load-button", children: "Load" }) })
            }
          )
        }
      ) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.option, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_22__.Form, { onSubmit: this.getDashboardFromJson, defaultValues: { dashboardJson: "" }, children: ({ register, errors }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("dashboard-import.json-field.label", "Import via dashboard JSON model"),
            invalid: !!errors.dashboardJson,
            error: errors.dashboardJson && errors.dashboardJson.message,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.TextArea,
              {
                ...register("dashboardJson", {
                  required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("dashboard-import.json-field.validation-required", "Need a dashboard JSON model"),
                  validate: _utils_validation__WEBPACK_IMPORTED_MODULE_30__.validateDashboardJson
                }),
                "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_6__.selectors.components.DashboardImportPage.textarea,
                id: "dashboard-json-textarea",
                rows: 10,
                placeholder: JSON_PLACEHOLDER
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Button, { type: "submit", "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_6__.selectors.components.DashboardImportPage.submit, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "dashboard-import.form-actions.load", children: "Load" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.LinkButton, { variant: "secondary", href: `${_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.config.appSubUrl}/dashboards`, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_7__.Trans, { i18nKey: "dashboard-import.form-actions.cancel", children: "Cancel" }) })
        ] })
      ] }) }) })
    ] });
  }
  getDashboardOverview() {
    const { loadingState, dashboard } = this.props;
    if (loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.LoadingState.Done) {
      if (dashboard.elements || dashboard.spec?.elements) {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dashboard_scene_v2schema_ImportDashboardOverviewV2__WEBPACK_IMPORTED_MODULE_26__.ImportDashboardOverviewV2, {});
      }
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ImportDashboardOverview__WEBPACK_IMPORTED_MODULE_27__.ImportDashboardOverview, {});
    }
    return null;
  }
  render() {
    const { loadingState } = this.props;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_23__.Page, { navId: "dashboards/browse", pageNav: this.pageNav, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_23__.Page.Contents, { children: [
      loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_5__.LoadingState.Loading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { direction: "column", justifyContent: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { justifyContent: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Spinner, { size: "xxl" }) }) }),
      [_grafana_data__WEBPACK_IMPORTED_MODULE_5__.LoadingState.Error, _grafana_data__WEBPACK_IMPORTED_MODULE_5__.LoadingState.NotStarted].includes(loadingState) && this.renderImportForm(),
      this.getDashboardOverview()
    ] }) });
  }
}
const DashboardImportUnConnected = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_19__.withTheme2)(UnthemedDashboardImport);
const DashboardImport = connector(DashboardImportUnConnected);
DashboardImport.displayName = "DashboardImport";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardImport);
const importStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_20__.stylesFactory)((theme) => {
  return {
    option: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginBottom: theme.spacing(4),
      maxWidth: "600px"
    }),
    labelWithLink: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      maxWidth: "100%"
    }),
    linkWithinLabel: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      fontSize: "inherit"
    })
  };
});


/***/ }),

/***/ "./public/app/features/manage-dashboards/components/ImportDashboardForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportDashboardForm: () => (/* binding */ ImportDashboardForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Legend.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var app_core_components_Select_FolderPicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/components/Select/FolderPicker.tsx");
/* harmony import */ var app_features_datasources_components_picker_DataSourcePicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/datasources/components/picker/DataSourcePicker.tsx");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/manage-dashboards/state/reducers.ts");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/manage-dashboards/utils/validation.ts");
/* harmony import */ var _ImportDashboardLibraryPanelsList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/manage-dashboards/components/ImportDashboardLibraryPanelsList.tsx");













const ImportDashboardForm = ({
  register,
  errors,
  control,
  getValues,
  uidReset,
  inputs,
  onUidReset,
  onCancel,
  onSubmit,
  watch
}) => {
  const [isSubmitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const watchDataSources = watch("dataSources");
  const watchFolder = watch("folder");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isSubmitted && (errors.title || errors.uid)) {
      onSubmit(getValues());
    }
  }, [errors, getValues, isSubmitted, onSubmit]);
  const newLibraryPanels = inputs?.libraryPanels?.filter((i) => i.state === _state_reducers__WEBPACK_IMPORTED_MODULE_13__.LibraryPanelInputState.New) ?? [];
  const existingLibraryPanels = inputs?.libraryPanels?.filter((i) => i.state === _state_reducers__WEBPACK_IMPORTED_MODULE_13__.LibraryPanelInputState.Exists) ?? [];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Legend, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "manage-dashboards.import-dashboard-form.options", children: "Options" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("manage-dashboards.import-dashboard-form.label-name", "Name"),
        invalid: !!errors.title,
        error: errors.title && errors.title.message,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Input,
          {
            ...register("title", {
              required: "Name is required",
              validate: async (v) => await (0,_utils_validation__WEBPACK_IMPORTED_MODULE_14__.validateTitle)(v, getValues().folder.uid)
            }),
            type: "text",
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.ImportDashboardForm.name
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("manage-dashboards.import-dashboard-form.label-folder", "Folder"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
      {
        render: ({ field: { ref, value, onChange, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Select_FolderPicker__WEBPACK_IMPORTED_MODULE_11__.FolderPicker, { ...field, onChange: (uid, title) => onChange({ uid, title }), value: value.uid }),
        name: "folder",
        control
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("manage-dashboards.import-dashboard-form.label-unique-identifier-uid", "Unique identifier (UID)"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "manage-dashboards.import-dashboard-form.description-unique-identifier-uid",
          "The unique identifier (UID) of a dashboard can be used for uniquely identify a dashboard between multiple Grafana installs. The UID allows having consistent URLs for accessing dashboards so changing the title of a dashboard will not break any bookmarked links to that dashboard."
        ),
        invalid: !!errors.uid,
        error: errors.uid && errors.uid.message,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: !uidReset ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Input,
          {
            disabled: true,
            ...register("uid", { validate: async (v) => await (0,_utils_validation__WEBPACK_IMPORTED_MODULE_14__.validateUid)(v) }),
            addonAfter: !uidReset && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { onClick: onUidReset, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "manage-dashboards.import-dashboard-form.change-uid", children: "Change uid" }) })
          }
        ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Input, { ...register("uid", { required: true, validate: async (v) => await (0,_utils_validation__WEBPACK_IMPORTED_MODULE_14__.validateUid)(v) }) }) })
      }
    ),
    inputs.dataSources && inputs.dataSources.map((input, index) => {
      if (input.pluginId === _grafana_runtime_internal__WEBPACK_IMPORTED_MODULE_5__.ExpressionDatasourceRef.type) {
        return null;
      }
      const dataSourceOption = `dataSources.${index}`;
      const current = watchDataSources ?? [];
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field,
        {
          label: input.pluginId,
          description: input.description,
          invalid: errors.dataSources && !!errors.dataSources[index],
          error: errors.dataSources && errors.dataSources[index] && "A data source is required",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
            {
              name: dataSourceOption,
              render: ({ field: { ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                app_features_datasources_components_picker_DataSourcePicker__WEBPACK_IMPORTED_MODULE_12__.DataSourcePicker,
                {
                  ...field,
                  noDefault: true,
                  placeholder: input.info,
                  pluginId: input.pluginId,
                  current: current[index]?.uid
                }
              ),
              control,
              rules: { required: true }
            }
          )
        },
        dataSourceOption
      );
    }),
    inputs.constants && inputs.constants.map((input, index) => {
      const constantIndex = `constants.${index}`;
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field,
        {
          label: input.label,
          error: errors.constants && errors.constants[index] && `${input.label} needs a value`,
          invalid: errors.constants && !!errors.constants[index],
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Input, { ...register(constantIndex, { required: true }), defaultValue: input.value })
        },
        constantIndex
      );
    }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _ImportDashboardLibraryPanelsList__WEBPACK_IMPORTED_MODULE_15__.ImportDashboardLibraryPanelsList,
      {
        inputs: newLibraryPanels,
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("manage-dashboards.import-dashboard-form.label-new-library-panels", "New library panels"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "manage-dashboards.import-dashboard-form.description-library-panels-imported",
          "List of new library panels that will get imported."
        ),
        folderName: watchFolder.title
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _ImportDashboardLibraryPanelsList__WEBPACK_IMPORTED_MODULE_15__.ImportDashboardLibraryPanelsList,
      {
        inputs: existingLibraryPanels,
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("manage-dashboards.import-dashboard-form.label-existing-library-panels", "Existing library panels"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "manage-dashbaords.import-dashboard-form.description-existing-library-panels",
          "List of existing library panels. These panels are not affected by the import."
        ),
        folderName: watchFolder.title
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
        {
          type: "submit",
          "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.ImportDashboardForm.submit,
          variant: getButtonVariant(errors),
          onClick: () => {
            setSubmitted(true);
          },
          children: getButtonText(errors)
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { type: "reset", variant: "secondary", onClick: onCancel, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "manage-dashboards.import-dashboard-form.cancel", children: "Cancel" }) })
    ] })
  ] });
};
function getButtonVariant(errors) {
  return errors && (errors.title || errors.uid) ? "destructive" : "primary";
}
function getButtonText(errors) {
  return errors && (errors.title || errors.uid) ? "Import (Overwrite)" : "Import";
}


/***/ }),

/***/ "./public/app/features/manage-dashboards/components/ImportDashboardLibraryPanelsList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportDashboardLibraryPanelsList: () => (/* binding */ ImportDashboardLibraryPanelsList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _library_panels_components_LibraryPanelCard_LibraryPanelCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelCard/LibraryPanelCard.tsx");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/manage-dashboards/state/reducers.ts");






function ImportDashboardLibraryPanelsList({
  inputs,
  label,
  description,
  folderName
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  if (!Boolean(inputs?.length)) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.spacer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, { label, description, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: inputs.map((input, index) => {
    const libraryPanelIndex = `elements[${index}]`;
    const libraryPanel = input.state === _state_reducers__WEBPACK_IMPORTED_MODULE_5__.LibraryPanelInputState.New ? { ...input.model, meta: { ...input.model.meta, folderName: folderName ?? "Dashboards" } } : { ...input.model };
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.item, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_library_panels_components_LibraryPanelCard_LibraryPanelCard__WEBPACK_IMPORTED_MODULE_4__.LibraryPanelCard, { libraryPanel, onClick: () => void 0 }) }, libraryPanelIndex);
  }) }) }) });
}
function getStyles(theme) {
  return {
    spacer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginBottom: theme.spacing(2)
    }),
    item: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginBottom: theme.spacing(1)
    })
  };
}


/***/ }),

/***/ "./public/app/features/manage-dashboards/components/ImportDashboardOverview.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportDashboardOverview: () => (/* binding */ ImportDashboardOverview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/datetime/formatter.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Legend.tsx");
/* harmony import */ var app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/Form/Form.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/manage-dashboards/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/manage-dashboards/state/reducers.ts");
/* harmony import */ var _ImportDashboardForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/manage-dashboards/components/ImportDashboardForm.tsx");












const IMPORT_FINISHED_EVENT_NAME = "dashboard_import_imported";
const mapStateToProps = (state) => {
  const searchObj = _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.locationService.getSearchObject();
  return {
    dashboard: state.importDashboard.dashboard,
    meta: state.importDashboard.meta,
    source: state.importDashboard.source,
    inputs: state.importDashboard.inputs,
    folder: searchObj.folderUid ? { uid: String(searchObj.folderUid) } : { uid: "" }
  };
};
const mapDispatchToProps = {
  clearLoadedDashboard: _state_actions__WEBPACK_IMPORTED_MODULE_11__.clearLoadedDashboard,
  importDashboard: _state_actions__WEBPACK_IMPORTED_MODULE_11__.importDashboard
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);
class ImportDashboardOverviewUnConnected extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      uidReset: false
    };
    this.onSubmit = (form) => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)(IMPORT_FINISHED_EVENT_NAME);
      this.props.importDashboard(form);
    };
    this.onCancel = () => {
      this.props.clearLoadedDashboard();
    };
    this.onUidReset = () => {
      this.setState({ uidReset: true });
    };
  }
  render() {
    const { dashboard, inputs, meta, source, folder } = this.props;
    const { uidReset } = this.state;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      source === _state_reducers__WEBPACK_IMPORTED_MODULE_12__.DashboardSource.Gcom && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Box, { marginBottom: 3, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Legend, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "manage-dashboards.import-dashboard-overview-un-connected.importing-from", children: [
          "Importing dashboard from",
          " ",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.TextLink, { href: `https://grafana.com/dashboards/${dashboard.gnetId}`, children: "Grafana.com" })
        ] }) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("table", { className: "filter-table form-inline", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "manage-dashboards.import-dashboard-overview-un-connected.published-by", children: "Published by" }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: meta.orgName })
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "manage-dashboards.import-dashboard-overview-un-connected.updated-on", children: "Updated on" }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTimeFormat)(meta.updatedAt) })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_10__.Form,
        {
          onSubmit: this.onSubmit,
          defaultValues: { ...dashboard, constants: [], dataSources: [], elements: [], folder },
          validateOnMount: true,
          validateFieldsOnMount: ["title", "uid"],
          validateOn: "onChange",
          children: ({ register, errors, control, watch, getValues }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _ImportDashboardForm__WEBPACK_IMPORTED_MODULE_13__.ImportDashboardForm,
            {
              register,
              errors,
              control,
              getValues,
              uidReset,
              inputs,
              onCancel: this.onCancel,
              onUidReset: this.onUidReset,
              onSubmit: this.onSubmit,
              watch
            }
          )
        }
      )
    ] });
  }
}
const ImportDashboardOverview = connector(ImportDashboardOverviewUnConnected);
ImportDashboardOverview.displayName = "ImportDashboardOverview";


/***/ }),

/***/ "./public/app/features/manage-dashboards/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearLoadedDashboard: () => (/* binding */ clearLoadedDashboard),
/* harmony export */   fetchGcomDashboard: () => (/* binding */ fetchGcomDashboard),
/* harmony export */   getLibraryPanelInputs: () => (/* binding */ getLibraryPanelInputs),
/* harmony export */   importDashboard: () => (/* binding */ importDashboard),
/* harmony export */   importDashboardJson: () => (/* binding */ importDashboardJson),
/* harmony export */   importDashboardV2Json: () => (/* binding */ importDashboardV2Json),
/* harmony export */   processDashboard: () => (/* binding */ processDashboard),
/* harmony export */   processV2DatasourceInput: () => (/* binding */ processV2DatasourceInput),
/* harmony export */   processV2Datasources: () => (/* binding */ processV2Datasources)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/dataSourceSrv.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_features_browse_dashboards_api_browseDashboardsAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/browse-dashboards/api/browseDashboardsAPI.ts");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var _library_panels_state_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/library-panels/state/api.ts");
/* harmony import */ var _library_panels_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/library-panels/types.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/manage-dashboards/state/reducers.ts");









function fetchGcomDashboard(id) {
  return async (dispatch) => {
    try {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_8__.fetchDashboard)());
      const dashboard = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/gnet/dashboards/${id}`);
      await dispatch(processElements(dashboard.json));
      await dispatch(processGcomDashboard(dashboard));
      dispatch(processInputs());
    } catch (error) {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_8__.fetchFailed)());
      if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.isFetchError)(error)) {
        dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_2__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__.createErrorNotification)(error.data.message || error)));
      }
    }
  };
}
function importDashboardJson(dashboard) {
  return async (dispatch) => {
    await dispatch(processElements(dashboard));
    await dispatch(processJsonDashboard(dashboard));
    dispatch(processInputs());
  };
}
function importDashboardV2Json(dashboard) {
  return async (dispatch) => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_8__.setJsonDashboard)(dashboard));
    dispatch(processV2Datasources(dashboard));
  };
}
const getNewLibraryPanelsByInput = (input, state) => {
  return input?.usage?.libraryPanels?.filter(
    (usageLibPanel) => state.inputs.libraryPanels.some(
      (libPanel) => libPanel.state !== _reducers__WEBPACK_IMPORTED_MODULE_8__.LibraryPanelInputState.Exists && libPanel.model.uid === usageLibPanel.uid
    )
  );
};
function processDashboard(dashboardJson, state) {
  let inputs = dashboardJson.__inputs;
  if (!!state.inputs.libraryPanels?.length) {
    const filteredUsedInputs = [];
    dashboardJson.__inputs?.forEach((input) => {
      if (!input?.usage?.libraryPanels) {
        filteredUsedInputs.push(input);
        return;
      }
      const newLibraryPanels = getNewLibraryPanelsByInput(input, state);
      input.usage = { libraryPanels: newLibraryPanels };
      const isInputBeingUsedByANewLibraryPanel = !!newLibraryPanels?.length;
      if (isInputBeingUsedByANewLibraryPanel) {
        filteredUsedInputs.push(input);
      }
    });
    inputs = filteredUsedInputs;
  }
  return { ...dashboardJson, __inputs: inputs };
}
function processGcomDashboard(dashboard) {
  return (dispatch, getState) => {
    const state = getState().importDashboard;
    const dashboardJson = processDashboard(dashboard.json, state);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_8__.setGcomDashboard)({ ...dashboard, json: dashboardJson }));
  };
}
function processJsonDashboard(dashboardJson) {
  return (dispatch, getState) => {
    const state = getState().importDashboard;
    const dashboard = processDashboard(dashboardJson, state);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_8__.setJsonDashboard)(dashboard));
  };
}
function processInputs() {
  return (dispatch, getState) => {
    const dashboard = getState().importDashboard.dashboard;
    if (dashboard && dashboard.__inputs) {
      const inputs = [];
      dashboard.__inputs.forEach((input) => {
        const inputModel = {
          name: input.name,
          label: input.label,
          info: input.description,
          value: input.value,
          type: input.type,
          pluginId: input.pluginId,
          options: []
        };
        inputModel.description = getDataSourceDescription(input);
        if (input.type === _reducers__WEBPACK_IMPORTED_MODULE_8__.InputType.DataSource) {
          getDataSourceOptions(input, inputModel);
        } else if (!inputModel.info) {
          inputModel.info = "Specify a string constant";
        }
        inputs.push(inputModel);
      });
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_8__.setInputs)(inputs));
    }
  };
}
function processElements(dashboardJson) {
  return async function(dispatch) {
    const libraryPanelInputs = await getLibraryPanelInputs(dashboardJson);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_8__.setLibraryPanelInputs)(libraryPanelInputs));
  };
}
function processV2Datasources(dashboard) {
  return async function(dispatch) {
    const { elements, variables, annotations } = dashboard;
    let inputs = {};
    for (const element of Object.values(elements)) {
      if (element.kind !== "Panel") {
        throw new Error("Only panels are currenlty supported in v2 dashboards");
      }
      if (element.spec.data.spec.queries.length > 0) {
        for (const query of element.spec.data.spec.queries) {
          inputs = await processV2DatasourceInput(query.spec, inputs);
        }
      }
    }
    for (const variable of variables) {
      if (variable.kind === "QueryVariable") {
        inputs = await processV2DatasourceInput(variable.spec, inputs);
      }
    }
    for (const annotation of annotations) {
      inputs = await processV2DatasourceInput(annotation.spec, inputs);
    }
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_8__.setInputs)(Object.values(inputs)));
  };
}
async function getLibraryPanelInputs(dashboardJson) {
  if (!dashboardJson || !dashboardJson.__elements) {
    return [];
  }
  const libraryPanelInputs = [];
  for (const element of Object.values(dashboardJson.__elements)) {
    if (element.kind !== _library_panels_types__WEBPACK_IMPORTED_MODULE_7__.LibraryElementKind.Panel) {
      continue;
    }
    const model = element.model;
    const { type, description } = model;
    const { uid, name } = element;
    const input = {
      model: {
        model,
        uid,
        name,
        version: 0,
        type,
        kind: _library_panels_types__WEBPACK_IMPORTED_MODULE_7__.LibraryElementKind.Panel,
        description
      },
      state: _reducers__WEBPACK_IMPORTED_MODULE_8__.LibraryPanelInputState.New
    };
    try {
      const panelInDb = await (0,_library_panels_state_api__WEBPACK_IMPORTED_MODULE_6__.getLibraryPanel)(uid, true);
      input.state = _reducers__WEBPACK_IMPORTED_MODULE_8__.LibraryPanelInputState.Exists;
      input.model = panelInDb;
    } catch (e) {
      if (e.status !== 404) {
        throw e;
      }
    }
    libraryPanelInputs.push(input);
  }
  return libraryPanelInputs;
}
function clearLoadedDashboard() {
  return (dispatch) => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_8__.clearDashboard)());
  };
}
function importDashboard(importDashboardForm) {
  return async (dispatch, getState) => {
    const dashboard = getState().importDashboard.dashboard;
    const inputs = getState().importDashboard.inputs;
    const inputsToPersist = [];
    importDashboardForm.dataSources?.forEach((dataSource, index) => {
      const input = inputs.dataSources[index];
      inputsToPersist.push({
        name: input.name,
        type: input.type,
        pluginId: input.pluginId,
        value: dataSource.uid
      });
    });
    importDashboardForm.constants?.forEach((constant, index) => {
      const input = inputs.constants[index];
      inputsToPersist.push({
        value: constant,
        name: input.name,
        type: input.type
      });
    });
    dispatch(
      app_features_browse_dashboards_api_browseDashboardsAPI__WEBPACK_IMPORTED_MODULE_4__.browseDashboardsAPI.endpoints.importDashboard.initiate({
        // uid: if user changed it, take the new uid from importDashboardForm,
        // else read it from original dashboard
        // by default the uid input is disabled, onSubmit ignores values from disabled inputs
        dashboard: { ...dashboard, title: importDashboardForm.title, uid: importDashboardForm.uid || dashboard.uid },
        overwrite: true,
        inputs: inputsToPersist,
        folderUid: importDashboardForm.folder.uid
      })
    );
  };
}
const getDataSourceOptions = (input, inputModel) => {
  const sources = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)().getList({ pluginId: input.pluginId });
  if (sources.length === 0) {
    inputModel.info = "No data sources of type " + input.pluginName + " found";
  } else if (!inputModel.info) {
    inputModel.info = "Select a " + input.pluginName + " data source";
  }
};
const getDataSourceDescription = (input) => {
  if (!input.usage) {
    return void 0;
  }
  if (input.usage.libraryPanels) {
    const libPanelNames = input.usage.libraryPanels.reduce(
      (acc, libPanel, index) => index === 0 ? libPanel.name : `${acc}, ${libPanel.name}`,
      ""
    );
    return `List of affected library panels: ${libPanelNames}`;
  }
  return void 0;
};
async function processV2DatasourceInput(spec, inputs = {}) {
  let dataSourceInput;
  const dsType = spec.query.group;
  const datasource = await (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_5__.getDatasourceSrv)().get({ type: dsType });
  if (datasource.meta?.builtIn) {
    return inputs;
  }
  if (datasource) {
    dataSourceInput = {
      name: datasource.name,
      label: datasource.name,
      info: `Select a ${datasource.type} data source`,
      value: datasource.uid,
      type: _reducers__WEBPACK_IMPORTED_MODULE_8__.InputType.DataSource,
      pluginId: datasource.meta?.id
    };
    inputs[datasource.meta?.id] = dataSourceInput;
  } else {
    dataSourceInput = {
      name: dsType,
      label: dsType,
      info: `No data sources of type ${dsType} found`,
      value: "",
      type: _reducers__WEBPACK_IMPORTED_MODULE_8__.InputType.DataSource,
      pluginId: dsType
    };
    inputs[dsType] = dataSourceInput;
  }
  return inputs;
}


/***/ }),

/***/ "./public/app/features/manage-dashboards/utils/validation.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateDashboardJson: () => (/* binding */ validateDashboardJson),
/* harmony export */   validateGcomDashboard: () => (/* binding */ validateGcomDashboard),
/* harmony export */   validateTitle: () => (/* binding */ validateTitle),
/* harmony export */   validateUid: () => (/* binding */ validateUid)
/* harmony export */ });
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var app_features_apiserver_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/apiserver/types.ts");
/* harmony import */ var app_features_dashboard_api_dashboard_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/api/dashboard_api.ts");
/* harmony import */ var app_features_dashboard_api_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/api/utils.ts");
/* harmony import */ var _services_ValidationSrv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/manage-dashboards/services/ValidationSrv.ts");






const validateDashboardJson = (json) => {
  let dashboard;
  try {
    dashboard = JSON.parse(json);
  } catch (error) {
    return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("dashboard.validation.invalid-json", "Not valid JSON");
  }
  if (dashboard && dashboard.hasOwnProperty("tags")) {
    if (Array.isArray(dashboard.tags)) {
      const hasInvalidTag = dashboard.tags.some((tag) => typeof tag !== "string");
      if (hasInvalidTag) {
        return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("dashboard.validation.tags-expected-strings", "tags expected array of strings");
      }
    } else {
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("dashboard.validation.tags-expected-array", "tags expected array");
    }
  }
  return true;
};
const validateGcomDashboard = (gcomDashboard) => {
  const match = /(^\d+$)|dashboards\/(\d+)/.exec(gcomDashboard);
  return match && (match[1] || match[2]) ? true : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("dashboard.validation.invalid-dashboard-id", "Could not find a valid Grafana.com ID");
};
const validateTitle = (newTitle, folderUid) => {
  return _services_ValidationSrv__WEBPACK_IMPORTED_MODULE_4__.validationSrv.validateNewDashboardName(folderUid, newTitle).then(() => {
    return true;
  }).catch((error) => {
    if (error.type === "EXISTING") {
      return error.message;
    }
  });
};
const validateUid = (value) => {
  return (0,app_features_dashboard_api_dashboard_api__WEBPACK_IMPORTED_MODULE_2__.getDashboardAPI)().getDashboardDTO(value).then((existingDashboard) => {
    const isV2 = (0,app_features_dashboard_api_utils__WEBPACK_IMPORTED_MODULE_3__.isDashboardV2Resource)(existingDashboard);
    const dashboard = isV2 ? existingDashboard.spec : existingDashboard.dashboard;
    const folderTitle = isV2 ? existingDashboard.metadata.annotations?.[app_features_apiserver_types__WEBPACK_IMPORTED_MODULE_1__.AnnoKeyFolderTitle] : existingDashboard.meta.folderTitle;
    return `Dashboard named '${dashboard.title}' in folder '${folderTitle}' has the same UID`;
  }).catch((error) => {
    error.isHandled = true;
    if (error.status === 403) {
      return "Dashboard with the same UID already exists";
    }
    return true;
  });
};


/***/ })

}]);
//# sourceMappingURL=DashboardImport.b656dc5e91229893cc76.js.map