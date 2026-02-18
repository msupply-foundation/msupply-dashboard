"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["CorrelationsPage"],{

/***/ "./public/app/features/correlations/CorrelationsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CorrelationsPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmButton/DeleteButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/InteractiveTable/InteractiveTable.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Pagination/Pagination.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/core/hooks/useNavModel.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _Forms_AddCorrelationForm__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/correlations/Forms/AddCorrelationForm.tsx");
/* harmony import */ var _Forms_EditCorrelationForm__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/correlations/Forms/EditCorrelationForm.tsx");
/* harmony import */ var _components_EmptyCorrelationsCTA__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/correlations/components/EmptyCorrelationsCTA.tsx");
/* harmony import */ var _useCorrelations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/correlations/useCorrelations.ts");
















const sortDatasource = (a, b, column) => a.values[column].name.localeCompare(b.values[column].name);
const isCorrelationsReadOnly = (correlation) => correlation.provisioned;
const loaderWrapper = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  display: "flex",
  justifyContent: "center"
});
function CorrelationsPage() {
  const navModel = (0,app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_18__.useNavModel)("correlations");
  const [isAdding, setIsAddingValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const page = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(1);
  const setIsAdding = (value) => {
    setIsAddingValue(value);
    if (value) {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.reportInteraction)("grafana_correlations_adding_started");
    }
  };
  const {
    remove,
    get: { execute: fetchCorrelations, ...get }
  } = (0,_useCorrelations__WEBPACK_IMPORTED_MODULE_23__.useCorrelations)();
  const canWriteCorrelations = app_core_core__WEBPACK_IMPORTED_MODULE_17__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_19__.AccessControlAction.DataSourcesWrite);
  const handleAdded = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.reportInteraction)("grafana_correlations_added");
    fetchCorrelations({ page: page.current });
    setIsAdding(false);
  }, [fetchCorrelations]);
  const handleUpdated = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.reportInteraction)("grafana_correlations_edited");
    fetchCorrelations({ page: page.current });
  }, [fetchCorrelations]);
  const handleDelete = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(
    async (params, isLastRow) => {
      await remove.execute(params);
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.reportInteraction)("grafana_correlations_deleted");
      if (isLastRow) {
        page.current--;
      }
      fetchCorrelations({ page: page.current });
    },
    [remove, fetchCorrelations]
  );
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    fetchCorrelations({ page: page.current });
  }, [fetchCorrelations]);
  const RowActions = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(
    ({
      row: {
        index,
        original: {
          source: { uid: sourceUID },
          provisioned,
          uid
        }
      }
    }) => {
      return !provisioned && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.DeleteButton,
        {
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("correlations.list.delete", "delete correlation"),
          onConfirm: () => handleDelete({ sourceUID, uid }, page.current > 1 && index === 0 && data?.correlations.length === 1),
          closeOnConfirm: true
        }
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [handleDelete]
  );
  const columns = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(
    () => [
      {
        id: "info",
        cell: InfoCell,
        disableGrow: true,
        visible: (data2) => data2.some(isCorrelationsReadOnly)
      },
      {
        id: "source",
        header: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("correlations.list.source", "Source"),
        cell: DataSourceCell,
        sortType: sortDatasource
      },
      {
        id: "target",
        header: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("correlations.list.target", "Target"),
        cell: DataSourceCell,
        sortType: sortDatasource
      },
      { id: "label", header: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("correlations.list.label", "Label"), sortType: "alphanumeric" },
      {
        id: "actions",
        cell: RowActions,
        disableGrow: true,
        visible: (data2) => canWriteCorrelations && data2.some((0,lodash__WEBPACK_IMPORTED_MODULE_2__.negate)(isCorrelationsReadOnly))
      }
    ],
    [RowActions, canWriteCorrelations]
  );
  const data = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => get.value, [get.value]);
  const showEmptyListCTA = data?.correlations.length === 0 && !isAdding && !get.error;
  const addButton = canWriteCorrelations && data?.correlations?.length !== 0 && data !== void 0 && !isAdding && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Button, { icon: "plus", onClick: () => setIsAdding(true), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "correlations.add-new", children: "Add new" }) });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_16__.Page,
    {
      navModel,
      subTitle: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "correlations.sub-title", children: [
        "Define how data living in different data sources relates to each other. Read more in the",
        " ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.TextLink, { href: "https://grafana.com/docs/grafana/next/administration/correlations/", external: true, children: "documentation" })
      ] }) }),
      actions: addButton,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_16__.Page.Contents, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
        !data && get.loading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: loaderWrapper, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("correlations.list.loading", "loading...") }) }),
        showEmptyListCTA && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_EmptyCorrelationsCTA__WEBPACK_IMPORTED_MODULE_22__.EmptyCorrelationsCTA, { canWriteCorrelations, onClick: () => setIsAdding(true) }),
        // This error is not actionable, it'd be nice to have a recovery button
        get.error && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Alert,
          {
            severity: "error",
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("correlations.alert.title", "Error fetching correlation data"),
            topSpacing: 2,
            children: (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.isFetchError)(get.error) && get.error.data?.message || (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
              "correlations.alert.error-message",
              "An unknown error occurred while fetching correlation data. Please try again."
            )
          }
        ),
        isAdding && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_AddCorrelationForm__WEBPACK_IMPORTED_MODULE_20__.AddCorrelationForm, { onClose: () => setIsAdding(false), onCreated: handleAdded }),
        data && data.correlations.length >= 1 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.InteractiveTable,
            {
              renderExpandedRow: (correlation) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                ExpendedRow,
                {
                  correlation,
                  onUpdated: handleUpdated,
                  readOnly: isCorrelationsReadOnly(correlation) || !canWriteCorrelations
                }
              ),
              columns,
              data: data.correlations,
              getRowId: (correlation) => `${correlation.source.uid}-${correlation.uid}`
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Pagination,
            {
              currentPage: page.current,
              numberOfPages: Math.ceil(data.totalCount / data.limit),
              onNavigate: (toPage) => {
                fetchCorrelations({ page: page.current = toPage });
              }
            }
          )
        ] })
      ] }) })
    }
  );
}
function ExpendedRow({ correlation: { source, ...correlation }, readOnly, onUpdated }) {
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(
    () => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.reportInteraction)("grafana_correlations_details_expanded"),
    // we only want to fire this on first render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  let corr = correlation.type === "query" ? { ...correlation, type: "query", sourceUID: source.uid, targetUID: correlation.target.uid } : { ...correlation, type: "external", sourceUID: source.uid };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_EditCorrelationForm__WEBPACK_IMPORTED_MODULE_21__.EditCorrelationForm, { correlation: corr, onUpdated, readOnly });
}
const getDatasourceCellStyles = (theme) => ({
  root: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    alignItems: "center"
  }),
  dsLogo: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginRight: theme.spacing(),
    height: "16px",
    width: "16px"
  })
});
const DataSourceCell = (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(
  function DataSourceCell2({ cell: { value } }) {
    const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.useStyles2)(getDatasourceCellStyles);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.root, children: value?.name !== void 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: value.meta.info.logos.small, alt: "", className: styles.dsLogo }),
      value.name
    ] }) });
  },
  ({ cell: { value } }, { cell: { value: prevValue } }) => {
    return value?.type === prevValue?.type && value?.name === prevValue?.name;
  }
);
const noWrap = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  whiteSpace: "nowrap"
});
const InfoCell = (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(
  function InfoCell2({ ...props }) {
    const readOnly = props.row.original.provisioned;
    if (readOnly) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Badge, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("correlations.list.read-only", "Read only"), color: "purple", className: noWrap });
    } else {
      return null;
    }
  },
  (props, prevProps) => props.row.original.source.readOnly === prevProps.row.original.source.readOnly
);


/***/ }),

/***/ "./public/app/features/correlations/Forms/AddCorrelationForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddCorrelationForm: () => (/* binding */ AddCorrelationForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/PanelContainer/PanelContainer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/CloseButton/CloseButton.tsx");
/* harmony import */ var _components_Wizard_Wizard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/correlations/components/Wizard/Wizard.tsx");
/* harmony import */ var _useCorrelations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/correlations/useCorrelations.ts");
/* harmony import */ var _ConfigureCorrelationBasicInfoForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/correlations/Forms/ConfigureCorrelationBasicInfoForm.tsx");
/* harmony import */ var _ConfigureCorrelationSourceForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/correlations/Forms/ConfigureCorrelationSourceForm.tsx");
/* harmony import */ var _ConfigureCorrelationTargetForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/correlations/Forms/ConfigureCorrelationTargetForm.tsx");
/* harmony import */ var _CorrelationFormNavigation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/correlations/Forms/CorrelationFormNavigation.tsx");
/* harmony import */ var _correlationsFormContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/correlations/Forms/correlationsFormContext.tsx");













const getStyles = (theme) => ({
  panelContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "relative",
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2)
  }),
  infoBox: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: "20px"
    // give space for close button
  })
});
const AddCorrelationForm = ({ onClose, onCreated }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const {
    create: { execute, loading, error, value }
  } = (0,_useCorrelations__WEBPACK_IMPORTED_MODULE_7__.useCorrelations)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!error && !loading && value) {
      onCreated();
    }
  }, [error, loading, value, onCreated]);
  const defaultValues = { type: "query", config: { target: {}, field: "" } };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.PanelContainer, { className: styles.panelContainer, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_5__.CloseButton, { onClick: onClose }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_correlationsFormContext__WEBPACK_IMPORTED_MODULE_12__.CorrelationsFormContextProvider, { data: { loading, readOnly: false, correlation: void 0 }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _components_Wizard_Wizard__WEBPACK_IMPORTED_MODULE_6__.Wizard,
      {
        defaultValues,
        pages: [_ConfigureCorrelationBasicInfoForm__WEBPACK_IMPORTED_MODULE_8__.ConfigureCorrelationBasicInfoForm, _ConfigureCorrelationTargetForm__WEBPACK_IMPORTED_MODULE_10__.ConfigureCorrelationTargetForm, _ConfigureCorrelationSourceForm__WEBPACK_IMPORTED_MODULE_9__.ConfigureCorrelationSourceForm],
        navigation: _CorrelationFormNavigation__WEBPACK_IMPORTED_MODULE_11__.CorrelationFormNavigation,
        onSubmit: execute
      }
    ) })
  ] });
};


/***/ }),

/***/ "./public/app/features/correlations/Forms/ConfigureCorrelationBasicInfoForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigureCorrelationBasicInfoForm: () => (/* binding */ ConfigureCorrelationBasicInfoForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldSet.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/TextArea/TextArea.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _correlationsFormContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/correlations/Forms/correlationsFormContext.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/correlations/Forms/utils.ts");








const getStyles = (theme) => ({
  label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    maxWidth: theme.spacing(80)
  }),
  description: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    maxWidth: theme.spacing(80)
  })
});
const ConfigureCorrelationBasicInfoForm = () => {
  const { register, formState } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const { correlation, readOnly } = (0,_correlationsFormContext__WEBPACK_IMPORTED_MODULE_9__.useCorrelationsFormContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.FieldSet, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("correlations.basic-info-form.title", "Define correlation label (Step 1 of 3)"), children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "correlations.basic-info-form.sub-text", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "Define text that will describe the correlation." }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "hidden", ...register("type") }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("correlations.basic-info-form.label-label", "Label"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "correlations.basic-info-form.label-description",
          "This name will be used as the label for the correlation. This will show as button text, a menu item, or hover text on a link."
        ),
        className: styles.label,
        invalid: !!formState.errors.label,
        error: formState.errors.label?.message,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input,
          {
            id: (0,_utils__WEBPACK_IMPORTED_MODULE_10__.getInputId)("label", correlation),
            ...register("label", {
              required: {
                value: true,
                message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("correlations.basic-info-form.label-required", "This field is required.")
              }
            }),
            readOnly,
            placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("correlations.basic-info-form.label-placeholder", "e.g. Tempo traces")
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("correlations.basic-info-form.description-label", "Description"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "correlations.basic-info-form.description-description",
          "Optional description with more information about the link"
        ),
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.description),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.TextArea, { id: (0,_utils__WEBPACK_IMPORTED_MODULE_10__.getInputId)("description", correlation), ...register("description"), readOnly })
      }
    )
  ] }) });
};


/***/ }),

/***/ "./public/app/features/correlations/Forms/ConfigureCorrelationSourceForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigureCorrelationSourceForm: () => (/* binding */ ConfigureCorrelationSourceForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldSet.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_datasources_components_picker_DataSourcePicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/datasources/components/picker/DataSourcePicker.tsx");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var _explore_utils_links__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/explore/utils/links.ts");
/* harmony import */ var _TransformationsEditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/correlations/Forms/TransformationsEditor.tsx");
/* harmony import */ var _correlationsFormContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/correlations/Forms/correlationsFormContext.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/correlations/Forms/utils.ts");












const getStyles = (theme) => ({
  label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    maxWidth: theme.spacing(80)
  }),
  variable: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontFamily: theme.typography.fontFamilyMonospace,
    fontWeight: theme.typography.fontWeightMedium
  })
});
const getFormText = (queryType, dataSourceName) => {
  if (queryType === "query") {
    return {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
        "correlations.source-form.query-title",
        "Configure the data source that will link to {{dataSourceName}} (Step 3 of 3)",
        { dataSourceName }
      ),
      descriptionPre: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
        "correlations.source-form.description-query-pre",
        "You have used following variables in the target query:"
      ),
      heading: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("correlations.source-form.heading-query", "Variables used in the target query")
    };
  } else {
    return {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
        "correlations.source-form.external-title",
        "Configure the data source that will use the URL (Step 3 of 3)"
      ),
      descriptionPre: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
        "correlations.source-form.description-external-pre",
        "You have used following variables in the target URL:"
      ),
      heading: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("correlations.source-form.heading-external", "Variables used in the target URL")
    };
  }
};
const ConfigureCorrelationSourceForm = () => {
  const { control, formState, register, getValues } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  const withDsUID = (fn) => (ds) => fn(ds.uid);
  const { correlation, readOnly } = (0,_correlationsFormContext__WEBPACK_IMPORTED_MODULE_14__.useCorrelationsFormContext)();
  const currentTargetQuery = getValues("config.target");
  const currentType = getValues("type");
  const variables = (0,_explore_utils_links__WEBPACK_IMPORTED_MODULE_12__.getVariableUsageInfo)(currentTargetQuery, {}).variables.map(
    (variable) => variable.variableName + (variable.fieldPath ? `.${variable.fieldPath}` : "")
  );
  const dataSourceName = (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_11__.getDatasourceSrv)().getInstanceSettings(getValues("targetUID"))?.name;
  const formText = getFormText(currentType, dataSourceName);
  function VariableList() {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: variables.map((name, i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: styles.variable, children: [
      name,
      i < variables.length - 1 ? (
        // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
        ", "
      ) : ""
    ] }, i)) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.FieldSet, { label: formText.title, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "correlations.source-form.sub-text", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "Define what data source will display the correlation, and what data will replace previously defined variables." }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "column", gap: 2, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
        {
          control,
          name: "sourceUID",
          rules: {
            required: {
              value: true,
              message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("correlations.source-form.control-required", "This field is required.")
            }
          },
          render: ({ field: { onChange, value } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field,
            {
              noMargin: true,
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("correlations.source-form.source-label", "Source"),
              description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
                "correlations.source-form.source-description",
                "Results from selected source data source have links displayed in the panel"
              ),
              htmlFor: "source",
              invalid: !!formState.errors.sourceUID,
              error: formState.errors.sourceUID?.message,
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                app_features_datasources_components_picker_DataSourcePicker__WEBPACK_IMPORTED_MODULE_10__.DataSourcePicker,
                {
                  onChange: withDsUID(onChange),
                  noDefault: true,
                  current: value,
                  inputId: "source",
                  width: 32,
                  disabled: correlation !== void 0
                }
              )
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field,
        {
          noMargin: true,
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("correlations.source-form.results-label", "Results field"),
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
            "correlations.source-form.results-description",
            "The link will be shown next to the value of this field"
          ),
          className: styles.label,
          invalid: !!formState.errors?.config?.field,
          error: formState.errors?.config?.field?.message,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Input,
            {
              id: (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getInputId)("field", correlation),
              ...register("config.field", {
                required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("correlations.source-form.results-required", "This field is required.")
              }),
              readOnly
            }
          )
        }
      ),
      variables.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Card, { noMargin: true, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Card.Heading, { children: formText.heading }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Card.Description, { children: [
          formText.descriptionPre,
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(VariableList, {}),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "correlations.source-form.description", children: [
            "A data point needs to provide values to all variables as fields or as transformations output to make the correlation button appear in the visualization.",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
            "Note: Not every variable needs to be explicitly defined below. A transformation such as",
            " ",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.variable, children: "logfmt" }),
            " will create variables for every key/value pair."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TransformationsEditor__WEBPACK_IMPORTED_MODULE_13__.TransformationsEditor, { readOnly })
    ] })
  ] }) });
};


/***/ }),

/***/ "./public/app/features/correlations/Forms/ConfigureCorrelationTargetForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CORR_TYPES_SELECT: () => (/* binding */ CORR_TYPES_SELECT),
/* harmony export */   ConfigureCorrelationTargetForm: () => (/* binding */ ConfigureCorrelationTargetForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldSet.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_datasources_components_picker_DataSourcePicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/datasources/components/picker/DataSourcePicker.tsx");
/* harmony import */ var _QueryEditorField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/correlations/Forms/QueryEditorField.tsx");
/* harmony import */ var _correlationsFormContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/correlations/Forms/correlationsFormContext.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/correlations/Forms/types.ts");










const CORR_TYPES_SELECT = {
  query: {
    value: "query",
    label: "Query",
    description: "Open a query"
  },
  external: {
    value: "external",
    label: "External",
    description: "Open an external URL"
  }
};
const getStyles = (theme) => ({
  typeSelect: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    maxWidth: theme.spacing(40)
  })
});
const ConfigureCorrelationTargetForm = () => {
  const {
    control,
    formState: { errors }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const withDsUID = (fn) => (ds) => fn(ds.uid);
  const { correlation } = (0,_correlationsFormContext__WEBPACK_IMPORTED_MODULE_11__.useCorrelationsFormContext)();
  const targetUIDFromCorrelation = correlation && "targetUID" in correlation ? correlation.targetUID : void 0;
  const targetUID = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useWatch)({ name: "targetUID" }) || targetUIDFromCorrelation;
  const correlationType = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useWatch)({ name: "type" }) || correlation?.type;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.FieldSet, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("correlations.target-form.title", "Setup the target for the correlation (Step 2 of 3)"), children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "correlations.target-form.sub-text", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "Define what the correlation will link to. With the query type, a query will run when the correlation is clicked. With the external type, clicking the correlation will open a URL." }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
      {
        control,
        name: "type",
        rules: {
          required: { value: true, message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("correlations.target-form.control-rules", "This field is required.") }
        },
        render: ({ field: { onChange, value, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("correlations.target-form.type-label", "Type"),
            description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("correlations.target-form.target-type-description", "Specify the type of correlation"),
            htmlFor: "corrType",
            invalid: !!errors.type,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Select,
              {
                className: styles.typeSelect,
                value: correlationType,
                onChange: (value2) => onChange(value2.value),
                options: Object.values(CORR_TYPES_SELECT),
                "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
                  "correlations.configure-correlation-target-form.aria-label-correlation-type",
                  "Correlation type"
                )
              }
            )
          }
        )
      }
    ),
    correlationType === "query" && (() => {
      (0,_types__WEBPACK_IMPORTED_MODULE_12__.assertIsQueryTypeError)(errors);
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
          {
            control,
            name: "targetUID",
            rules: {
              required: {
                value: true,
                message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("correlations.target-form.control-rules", "This field is required.")
              }
            },
            render: ({ field: { onChange, value } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field,
              {
                label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("correlations.target-form.target-label", "Target"),
                description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
                  "correlations.target-form.target-description-query",
                  "Specify which data source is queried when the link is clicked"
                ),
                htmlFor: "target",
                invalid: !!errors.targetUID,
                error: errors.targetUID?.message,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  app_features_datasources_components_picker_DataSourcePicker__WEBPACK_IMPORTED_MODULE_9__.DataSourcePicker,
                  {
                    onChange: withDsUID(onChange),
                    noDefault: true,
                    current: value,
                    inputId: "target",
                    width: 32,
                    disabled: correlation !== void 0
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _QueryEditorField__WEBPACK_IMPORTED_MODULE_10__.QueryEditorField,
          {
            name: "config.target",
            dsUid: targetUID,
            invalid: !!errors?.config?.target,
            error: errors?.config?.target && "message" in errors?.config?.target ? (errors?.config?.target).message : "Error"
          }
        )
      ] });
    })(),
    correlationType === "external" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
      {
        control,
        name: "config.target",
        rules: {
          required: {
            value: true,
            message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("correlations.target-form.control-rules", "This field is required.")
          }
        },
        render: ({ field: { onChange, value } }) => {
          const castVal = value;
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("correlations.target-form.target-label", "Target"),
              description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
                "correlations.target-form.target-description-external",
                "Specify the URL that will open when the link is clicked"
              ),
              htmlFor: "target",
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Input,
                {
                  value: castVal.url || "",
                  onChange: (e) => {
                    onChange({ url: e.currentTarget.value });
                  }
                }
              )
            }
          );
        }
      }
    ) })
  ] }) });
};


/***/ }),

/***/ "./public/app/features/correlations/Forms/CorrelationFormNavigation.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CorrelationFormNavigation: () => (/* binding */ CorrelationFormNavigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _components_Wizard_wizardContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/correlations/components/Wizard/wizardContext.tsx");
/* harmony import */ var _correlationsFormContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/correlations/Forms/correlationsFormContext.tsx");






const CorrelationFormNavigation = () => {
  const { currentPage, prevPage, isLastPage } = (0,_components_Wizard_wizardContext__WEBPACK_IMPORTED_MODULE_4__.useWizardContext)();
  const { readOnly, loading, correlation } = (0,_correlationsFormContext__WEBPACK_IMPORTED_MODULE_5__.useCorrelationsFormContext)();
  const LastPageNext = !readOnly && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { variant: "primary", icon: loading ? "spinner" : "save", type: "submit", disabled: loading, children: correlation === void 0 ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("correlations.navigation-form.add-button", "Add") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("correlations.navigation-form.save-button", "Save") });
  const NextPage = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { variant: "primary", type: "submit", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "correlations.navigation-form.next-button", children: "Next" }) });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { justifyContent: "flex-start", children: [
    currentPage > 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { variant: "secondary", onClick: prevPage, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "correlations.navigation-form.back-button", children: "Back" }) }) : void 0,
    isLastPage ? LastPageNext : NextPage
  ] });
};


/***/ }),

/***/ "./public/app/features/correlations/Forms/EditCorrelationForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditCorrelationForm: () => (/* binding */ EditCorrelationForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Wizard_Wizard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/correlations/components/Wizard/Wizard.tsx");
/* harmony import */ var _useCorrelations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/correlations/useCorrelations.ts");
/* harmony import */ var _ConfigureCorrelationBasicInfoForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/correlations/Forms/ConfigureCorrelationBasicInfoForm.tsx");
/* harmony import */ var _ConfigureCorrelationSourceForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/correlations/Forms/ConfigureCorrelationSourceForm.tsx");
/* harmony import */ var _ConfigureCorrelationTargetForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/correlations/Forms/ConfigureCorrelationTargetForm.tsx");
/* harmony import */ var _CorrelationFormNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/correlations/Forms/CorrelationFormNavigation.tsx");
/* harmony import */ var _correlationsFormContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/correlations/Forms/correlationsFormContext.tsx");










const EditCorrelationForm = ({ onUpdated, correlation, readOnly = false }) => {
  const {
    update: { execute, loading, error, value }
  } = (0,_useCorrelations__WEBPACK_IMPORTED_MODULE_3__.useCorrelations)();
  const onSubmit = (data) => {
    return execute({ ...data, sourceUID: correlation.sourceUID, uid: correlation.uid });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!error && !loading && value) {
      onUpdated();
    }
  }, [error, loading, value, onUpdated]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_correlationsFormContext__WEBPACK_IMPORTED_MODULE_8__.CorrelationsFormContextProvider, { data: { loading, readOnly, correlation }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _components_Wizard_Wizard__WEBPACK_IMPORTED_MODULE_2__.Wizard,
    {
      defaultValues: correlation,
      pages: [_ConfigureCorrelationBasicInfoForm__WEBPACK_IMPORTED_MODULE_4__.ConfigureCorrelationBasicInfoForm, _ConfigureCorrelationTargetForm__WEBPACK_IMPORTED_MODULE_6__.ConfigureCorrelationTargetForm, _ConfigureCorrelationSourceForm__WEBPACK_IMPORTED_MODULE_5__.ConfigureCorrelationSourceForm],
      onSubmit: readOnly ? (e) => () => {
      } : onSubmit,
      navigation: _CorrelationFormNavigation__WEBPACK_IMPORTED_MODULE_7__.CorrelationFormNavigation
    }
  ) });
};


/***/ }),

/***/ "./public/app/features/correlations/Forms/QueryEditorField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryEditorField: () => (/* binding */ QueryEditorField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/app.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/services/dataSourceSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");








const QueryEditorField = ({ dsUid, invalid, error, name }) => {
  const {
    value: datasource,
    loading: dsLoading,
    error: dsError
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(async () => {
    if (!dsUid) {
      return;
    }
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.getDataSourceSrv)().get(dsUid);
  }, [dsUid]);
  const QueryEditor = datasource?.components?.QueryEditor;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field,
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("correlations.query-editor.query-label", "Query"),
      description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "correlations.query-editor.query-description", children: [
        "Define the query that is run when the link is clicked. You can use",
        " ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.TextLink,
          {
            href: "https://grafana.com/docs/grafana/latest/panels-visualizations/configure-data-links/",
            external: true,
            children: "variables"
          }
        ),
        " ",
        "to access specific field values."
      ] }) }),
      invalid,
      error,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        react_hook_form__WEBPACK_IMPORTED_MODULE_1__.Controller,
        {
          name,
          rules: {
            validate: {
              hasQueryEditor: (_, formVals) => {
                return formVals.type === "query" && QueryEditor === void 0 ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                  "correlations.query-editor.control-rules",
                  "The selected target data source must export a query editor."
                ) : true;
              }
            }
          },
          render: ({ field: { value, onChange } }) => {
            if (dsLoading) {
              return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("correlations.query-editor.loading", "Loading query editor...") });
            }
            if (dsError) {
              return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Alert, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("correlations.query-editor.error-title", "Error loading data source"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "correlations.query-editor.error-text", children: "The selected data source could not be loaded." }) });
            }
            if (!datasource) {
              return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Alert,
                {
                  title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("correlations.query-editor.data-source-title", "No data source selected"),
                  severity: "info",
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "correlations.query-editor.data-source-text", children: "Please select a target data source first." })
                }
              );
            }
            if (!QueryEditor) {
              return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Alert,
                {
                  title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("correlations.query-editor.query-editor-title", "Data source does not export a query editor.")
                }
              );
            }
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              QueryEditor,
              {
                onRunQuery: () => {
                },
                app: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.CoreApp.Correlations,
                onChange: (value2) => {
                  onChange(value2);
                },
                datasource,
                query: value
              }
            ) });
          }
        }
      )
    }
  );
};


/***/ }),

/***/ "./public/app/features/correlations/Forms/TransformationEditorRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/correlations/Forms/types.ts");








const getStyles = () => ({
  // set fixed position from the top instead of centring as the container
  // may get bigger when the for is invalid
  removeButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: "25px"
  })
});
const TransformationEditorRow = (props) => {
  const { index, value: defaultValue, readOnly, remove } = props;
  const { control, formState, register, setValue, watch, getValues } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const [keptVals, setKeptVals] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
  register(`config.transformations.${index}.type`, {
    required: {
      value: true,
      message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("correlations.transform-row.transform-required", "Please select a transformation type")
    }
  });
  const typeValue = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useWatch)({ name: `config.transformations.${index}.type`, control });
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.useStyles2)(getStyles);
  const transformOptions = (0,_types__WEBPACK_IMPORTED_MODULE_14__.getTransformOptions)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "row", alignItems: "flex-start", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field,
      {
        label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { gap: 0.5, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Label, { htmlFor: `config.transformations.${defaultValue.id}-${index}.type`, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "correlations.transform-row.type-label", children: "Type" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tooltip,
            {
              content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "correlations.transform-row.type-tooltip", children: "The type of transformation that will be applied to the source data." }) }) }),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "info-circle", size: "sm" })
            }
          )
        ] }),
        invalid: !!formState.errors?.config?.transformations?.[index]?.type,
        error: formState.errors?.config?.transformations?.[index]?.message,
        validationMessageHorizontalOverflow: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Select,
          {
            value: typeValue,
            onChange: (value) => {
              if (!readOnly) {
                const currentValues = getValues()?.config?.transformations?.[index];
                if (currentValues) {
                  setKeptVals({
                    expression: currentValues.expression,
                    mapValue: currentValues.mapValue
                  });
                }
                if (value.value) {
                  const newValueDetails = (0,_types__WEBPACK_IMPORTED_MODULE_14__.getSupportedTransTypeDetails)(value.value);
                  if (newValueDetails.expressionDetails.show) {
                    setValue(`config.transformations.${index}.expression`, keptVals?.expression || "");
                  } else {
                    setValue(`config.transformations.${index}.expression`, "");
                  }
                  if (newValueDetails.mapValueDetails.show) {
                    setValue(`config.transformations.${index}.mapValue`, keptVals?.mapValue || "");
                  } else {
                    setValue(`config.transformations.${index}.mapValue`, "");
                  }
                  setValue(`config.transformations.${index}.type`, value.value);
                }
              }
            },
            options: transformOptions,
            width: 25,
            inputId: `config.transformations.${defaultValue.id}-${index}.type`
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field,
      {
        label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { gap: 0.5, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Label, { htmlFor: `config.transformations.${defaultValue.id}.field`, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "correlations.transform-row.field-label", children: "Field" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tooltip,
            {
              content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "correlations.transform-row.field-tooltip", children: "Optional. The field to transform. If not specified, the transformation will be applied to the results field." }) }) }),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "info-circle", size: "sm" })
            }
          )
        ] }),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Input,
          {
            ...register(`config.transformations.${index}.field`),
            readOnly,
            defaultValue: defaultValue.field,
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("correlations.transform-row.field-input", "field"),
            id: `config.transformations.${defaultValue.id}.field`
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field,
      {
        label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { gap: 0.5, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Label, { htmlFor: `config.transformations.${defaultValue.id}.expression`, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "correlations.transform-row.expression-label", children: "Expression" }),
            (0,_types__WEBPACK_IMPORTED_MODULE_14__.getSupportedTransTypeDetails)(watch(`config.transformations.${index}.type`)).expressionDetails.required ? (
              // eslint-disable-next-line @grafana/i18n/no-untranslated-strings
              " *"
            ) : ""
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tooltip,
            {
              content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "correlations.transform-row.expression-tooltip", children: "Required for regular expression. The expression the transformation will use. Logfmt does not use further specifications." }) }) }),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "info-circle", size: "sm" })
            }
          )
        ] }),
        invalid: !!formState.errors?.config?.transformations?.[index]?.expression,
        error: formState.errors?.config?.transformations?.[index]?.expression?.message,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Input,
          {
            ...register(`config.transformations.${index}.expression`, {
              required: (0,_types__WEBPACK_IMPORTED_MODULE_14__.getSupportedTransTypeDetails)(watch(`config.transformations.${index}.type`)).expressionDetails.required ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("correlations.transform-row.expression-required", "Please define an expression") : void 0
            }),
            defaultValue: defaultValue.expression,
            readOnly,
            disabled: !(0,_types__WEBPACK_IMPORTED_MODULE_14__.getSupportedTransTypeDetails)(watch(`config.transformations.${index}.type`)).expressionDetails.show,
            id: `config.transformations.${defaultValue.id}.expression`
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field,
      {
        label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { gap: 0.5, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Label, { htmlFor: `config.transformations.${defaultValue.id}.mapValue`, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "correlations.transform-row.map-value-label", children: "Map value" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tooltip,
            {
              content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "correlations.transform-row.map-value-tooltip", children: "Optional. Defines the name of the variable. This is currently only valid for regular expressions with a single, unnamed capture group." }) }) }),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "info-circle", size: "sm" })
            }
          )
        ] }),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Input,
          {
            ...register(`config.transformations.${index}.mapValue`),
            defaultValue: defaultValue.mapValue,
            readOnly,
            disabled: !(0,_types__WEBPACK_IMPORTED_MODULE_14__.getSupportedTransTypeDetails)(watch(`config.transformations.${index}.type`)).mapValueDetails.show,
            id: `config.transformations.${defaultValue.id}.mapValue`
          }
        )
      }
    ),
    !readOnly && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.removeButton, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.IconButton,
      {
        tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("correlations.transform-row.remove-tooltip", "Remove transformation"),
        name: "trash-alt",
        onClick: () => {
          remove(index);
        },
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "correlations.transform-row.remove-button", children: "Remove" })
      }
    ) })
  ] }, defaultValue.id);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransformationEditorRow);


/***/ }),

/***/ "./public/app/features/correlations/Forms/TransformationsEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransformationsEditor: () => (/* binding */ TransformationsEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _TransformationEditorRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/correlations/Forms/TransformationEditorRow.tsx");






const TransformationsEditor = (props) => {
  const { control, register } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  const { fields, append, remove } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFieldArray)({ control, name: "config.transformations" });
  const { readOnly } = props;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "hidden", ...register("id") }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", alignItems: "flex-start", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "h5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "correlations.transform.heading", children: "Transformations" }) }),
      fields.length === 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "correlations.transform.no-transform", children: "No transformations defined." }) }),
      fields.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: fields.map((fieldVal, index) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _TransformationEditorRow__WEBPACK_IMPORTED_MODULE_6__["default"],
          {
            value: fieldVal,
            index,
            readOnly,
            remove
          },
          index
        );
      }) }),
      !readOnly && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button,
        {
          icon: "plus",
          onClick: () => append({ type: void 0 }, { shouldFocus: false }),
          variant: "secondary",
          type: "button",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "correlations.transform.add-button", children: "Add transformation" })
        }
      )
    ] })
  ] });
};


/***/ }),

/***/ "./public/app/features/correlations/Forms/correlationsFormContext.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CorrelationsFormContext: () => (/* binding */ CorrelationsFormContext),
/* harmony export */   CorrelationsFormContextProvider: () => (/* binding */ CorrelationsFormContextProvider),
/* harmony export */   useCorrelationsFormContext: () => (/* binding */ useCorrelationsFormContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const CorrelationsFormContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
  loading: false,
  correlation: void 0,
  readOnly: false
});
const CorrelationsFormContextProvider = (props) => {
  const { data, children } = props;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CorrelationsFormContext.Provider, { value: data, children });
};
const useCorrelationsFormContext = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CorrelationsFormContext);
};


/***/ }),

/***/ "./public/app/features/correlations/Forms/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertIsQueryTypeError: () => (/* binding */ assertIsQueryTypeError),
/* harmony export */   getSupportedTransTypeDetails: () => (/* binding */ getSupportedTransTypeDetails),
/* harmony export */   getTransformOptions: () => (/* binding */ getTransformOptions)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/dataLink.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");



function assertIsQueryTypeError(errors) {
}
function getSupportedTransTypeDetails(transType) {
  switch (transType) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_0__.SupportedTransformationType.Logfmt:
      return {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("correlations.trans-details.logfmt-label", "Logfmt"),
        value: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.SupportedTransformationType.Logfmt,
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
          "correlations.trans-details.logfmt-description",
          "Parse provided field with logfmt to get variables"
        ),
        expressionDetails: { show: false },
        mapValueDetails: { show: false }
      };
    case _grafana_data__WEBPACK_IMPORTED_MODULE_0__.SupportedTransformationType.Regex:
      return {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("correlations.trans-details.regex-label", "Regular expression"),
        value: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.SupportedTransformationType.Regex,
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
          "correlations.trans-details.regex-description",
          "Field will be parsed with regex. Use named capture groups to return multiple variables, or a single unnamed capture group to add variable to named map value. Regex is case insensitive."
        ),
        expressionDetails: {
          show: true,
          required: true,
          helpText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
            "correlations.trans-details.regex-expression",
            "Use capture groups to extract a portion of the field."
          )
        },
        mapValueDetails: {
          show: true,
          required: false,
          helpText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
            "correlations.trans-details.regex-map-values",
            "Defines the name of the variable if the capture group is not named."
          )
        }
      };
    default:
      return {
        label: transType,
        value: transType,
        expressionDetails: { show: false },
        mapValueDetails: { show: false }
      };
  }
}
const getTransformOptions = () => {
  return Object.values(_grafana_data__WEBPACK_IMPORTED_MODULE_0__.SupportedTransformationType).map((transformationType) => {
    const transType = getSupportedTransTypeDetails(transformationType);
    return {
      label: transType.label,
      value: transType.value,
      description: transType.description
    };
  });
};


/***/ }),

/***/ "./public/app/features/correlations/Forms/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInputId: () => (/* binding */ getInputId)
/* harmony export */ });

const getInputId = (inputName, correlation) => {
  if (!correlation) {
    return inputName;
  }
  return `${inputName}_${correlation.sourceUID}-${correlation.uid}`;
};


/***/ }),

/***/ "./public/app/features/correlations/components/EmptyCorrelationsCTA.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyCorrelationsCTA: () => (/* binding */ EmptyCorrelationsCTA)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");




const EmptyCorrelationsCTA = ({ onClick, canWriteCorrelations }) => {
  return canWriteCorrelations ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.EmptyState,
    {
      variant: "call-to-action",
      button: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { icon: "gf-glue", onClick, size: "lg", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "correlations.empty-state.button-title", children: "Add correlation" }) }),
      message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("correlations.empty-state.title", "You haven't defined any correlations yet"),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "correlations.empty-state.pro-tip", children: "You can also define correlations via datasource provisioning" })
    }
  ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card, { noMargin: true, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Heading, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "correlations.empty-correlations-cta.there-are-no-correlations-configured-yet", children: "There are no correlations configured yet." }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Description, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "correlations.empty-correlations-cta.please-contact-administrator-create-correlations", children: "Please contact your administrator to create new correlations." }) })
  ] });
};


/***/ }),

/***/ "./public/app/features/correlations/components/Wizard/Wizard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Wizard: () => (/* binding */ Wizard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _WizardContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/correlations/components/Wizard/WizardContent.tsx");
/* harmony import */ var _wizardContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/correlations/components/Wizard/wizardContext.tsx");





function Wizard(props) {
  const { defaultValues, pages, onSubmit, navigation } = props;
  const formMethods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({ defaultValues });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_1__.FormProvider, { ...formMethods, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wizardContext__WEBPACK_IMPORTED_MODULE_3__.WizardContextProvider, { pages, onSubmit, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WizardContent__WEBPACK_IMPORTED_MODULE_2__.WizardContent, { navigation }) }) });
}


/***/ }),

/***/ "./public/app/features/correlations/components/Wizard/WizardContent.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WizardContent: () => (/* binding */ WizardContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _wizardContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/correlations/components/Wizard/wizardContext.tsx");




function WizardContent(props) {
  const { navigation } = props;
  const { handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  const { CurrentPageComponent, isLastPage, nextPage, onSubmit } = (0,_wizardContext__WEBPACK_IMPORTED_MODULE_2__.useWizardContext)();
  const NavigationComponent = navigation;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    "form",
    {
      onSubmit: handleSubmit((data) => {
        if (isLastPage) {
          onSubmit(data);
        } else {
          nextPage();
        }
      }),
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CurrentPageComponent, {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NavigationComponent, {})
      ]
    }
  );
}


/***/ }),

/***/ "./public/app/features/correlations/components/Wizard/wizardContext.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WizardContext: () => (/* binding */ WizardContext),
/* harmony export */   WizardContextProvider: () => (/* binding */ WizardContextProvider),
/* harmony export */   useWizardContext: () => (/* binding */ useWizardContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const WizardContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(void 0);
function WizardContextProvider(props) {
  const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const { pages, onSubmit, children } = props;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    WizardContext.Provider,
    {
      value: {
        currentPage,
        CurrentPageComponent: pages[currentPage],
        isLastPage: currentPage === pages.length - 1,
        nextPage: () => setCurrentPage(currentPage + 1),
        prevPage: () => setCurrentPage(currentPage - 1),
        // @ts-expect-error
        onSubmit
      },
      children
    }
  );
}
const useWizardContext = () => {
  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(WizardContext);
  if (!ctx) {
    throw new Error("useWizardContext must be used within a WizardContextProvider");
  }
  return ctx;
};


/***/ })

}]);
//# sourceMappingURL=CorrelationsPage.66fa9cc6d0f2fc744174.js.map