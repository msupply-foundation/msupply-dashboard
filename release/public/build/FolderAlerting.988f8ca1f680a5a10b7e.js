"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["FolderAlerting"],{

/***/ "./public/app/features/alerting/unified/AlertsFolderView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertsFolderView: () => (/* binding */ AlertsFolderView),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Pagination/Pagination.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Tags/TagList.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/FilterInput/FilterInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var app_core_utils_query__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/core/utils/query.ts");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/hooks/usePagination.ts");
/* harmony import */ var _hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useURLSearchParams.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_matchers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/utils/matchers.ts");
/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/utils/navigation.ts");
















var SortOrder = /* @__PURE__ */ ((SortOrder2) => {
  SortOrder2["Ascending"] = "alpha-asc";
  SortOrder2["Descending"] = "alpha-desc";
  return SortOrder2;
})(SortOrder || {});
const sortOptions = [
  { label: "Alphabetically [A-Z]", value: "alpha-asc" /* Ascending */ },
  { label: "Alphabetically [Z-A]", value: "alpha-desc" /* Descending */ }
];
const AlertsFolderView = ({ folder, rules }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.useStyles2)(getStyles);
  const onTagClick = (tagName) => {
    const matchersString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_18__.combineMatcherStrings)(labelFilter, tagName);
    setLabelFilter(matchersString);
  };
  const { nameFilter, labelFilter, sortOrder, setNameFilter, setLabelFilter, setSortOrder } = useAlertsFolderViewParams();
  const filteredRules = filterAndSortRules(rules, nameFilter, labelFilter, sortOrder ?? "alpha-asc" /* Ascending */);
  const hasNoResults = filteredRules.length === 0;
  const { page, numberOfPages, onPageChange, pageItems } = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_16__.usePagination)(filteredRules, 1, app_core_constants__WEBPACK_IMPORTED_MODULE_14__.DEFAULT_PER_PAGE_PAGINATION);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.container, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "column", gap: 3, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.FilterInput,
      {
        value: nameFilter,
        onChange: setNameFilter,
        placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "alerting.alerts-folder-view.name-filter-placeholder-search-alert-rules-by-name",
          "Search alert rules by name"
        ),
        "data-testid": "name-filter"
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "row", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Select,
        {
          value: sortOrder,
          onChange: ({ value }) => value && setSortOrder(value),
          options: sortOptions,
          width: 25,
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.alerts-folder-view.aria-label-sort", "Sort"),
          placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.alerts-folder-view.placeholder-sort-default-az", "Sort (Default A-Z)"),
          prefix: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { name: sortOrder === "alpha-asc" /* Ascending */ ? "sort-amount-up" : "sort-amount-down" })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.FilterInput,
        {
          value: labelFilter,
          onChange: setLabelFilter,
          placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
            "alerting.alerts-folder-view.label-filter-placeholder-search-alerts-by-labels",
            "Search alerts by labels"
          ),
          className: styles.filterLabelsInput,
          "data-testid": "label-filter"
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "column", children: pageItems.map(({ grafana_alert, labels = {} }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Card,
      {
        noMargin: true,
        href: createGrafanaRuleViewLink(grafana_alert),
        className: styles.card,
        "data-testid": "alert-card-row",
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Card.Heading, { children: grafana_alert.title }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Card.Tags, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.TagList,
            {
              onClick: onTagClick,
              tags: Object.entries(labels).map(([label, value]) => `${label}=${value}`)
            }
          ) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Card.Meta, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { name: "folder" }),
            " ",
            folder.title
          ] }) })
        ]
      },
      grafana_alert.uid
    )) }),
    hasNoResults && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.noResults, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.alerts-folder-view.no-alert-rules-found", children: "No alert rules found" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.pagination, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Pagination,
      {
        currentPage: page,
        numberOfPages,
        onNavigate: onPageChange,
        hideWhenSinglePage: true
      }
    ) })
  ] }) });
};
var AlertFolderViewParams = /* @__PURE__ */ ((AlertFolderViewParams2) => {
  AlertFolderViewParams2["nameFilter"] = "nameFilter";
  AlertFolderViewParams2["labelFilter"] = "labelFilter";
  AlertFolderViewParams2["sortOrder"] = "sort";
  return AlertFolderViewParams2;
})(AlertFolderViewParams || {});
function useAlertsFolderViewParams() {
  const [searchParams, setSearchParams] = (0,_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_17__.useURLSearchParams)();
  const [nameFilter, setNameFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(searchParams.get("nameFilter" /* nameFilter */) ?? "");
  const [labelFilter, setLabelFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(searchParams.get("labelFilter" /* labelFilter */) ?? "");
  const sortParam = searchParams.get("sort" /* sortOrder */);
  const defaultSortOrder = (() => {
    if (sortParam === "alpha-asc" /* Ascending */) {
      return "alpha-asc" /* Ascending */;
    }
    if (sortParam === "alpha-desc" /* Descending */) {
      return "alpha-desc" /* Descending */;
    }
    return void 0;
  })();
  const [sortOrder, setSortOrder] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(defaultSortOrder);
  (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(
    () => setSearchParams(
      {
        ["nameFilter" /* nameFilter */]: (0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_15__.getQueryParamValue)(nameFilter),
        ["labelFilter" /* labelFilter */]: (0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_15__.getQueryParamValue)(labelFilter),
        ["sort" /* sortOrder */]: (0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_15__.getQueryParamValue)(sortOrder)
      },
      true
    ),
    400,
    [nameFilter, labelFilter, sortOrder]
  );
  return { nameFilter, labelFilter, sortOrder, setNameFilter, setLabelFilter, setSortOrder };
}
function filterAndSortRules(originalRules, nameFilter, labelFilter, sortOrder) {
  const matchers = (0,_utils_matchers__WEBPACK_IMPORTED_MODULE_20__.parsePromQLStyleMatcherLooseSafe)(labelFilter);
  const rules = originalRules.filter((rule) => {
    const nameMatch = rule.grafana_alert.title.toLowerCase().includes(nameFilter.toLowerCase());
    const labelMatch = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_18__.labelsMatchMatchers)(rule.labels ?? {}, matchers);
    return nameMatch && labelMatch;
  });
  return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.orderBy)(rules, (rule) => rule.grafana_alert.title.toLowerCase(), [
    sortOrder === "alpha-asc" /* Ascending */ ? "asc" : "desc"
  ]);
}
function createGrafanaRuleViewLink(ruleDefinition) {
  return _utils_navigation__WEBPACK_IMPORTED_MODULE_21__.rulesNav.detailsPageLink(
    _utils_datasource__WEBPACK_IMPORTED_MODULE_19__.GRAFANA_RULES_SOURCE_NAME,
    {
      uid: ruleDefinition.uid,
      ruleSourceName: _utils_datasource__WEBPACK_IMPORTED_MODULE_19__.GRAFANA_RULES_SOURCE_NAME
    },
    void 0
  );
}
const getStyles = (theme) => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(1)
  }),
  card: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    gridTemplateColumns: "auto 1fr 2fr"
  }),
  pagination: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    alignSelf: "center"
  }),
  filterLabelsInput: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    flex: 1,
    width: "auto",
    minWidth: "240px"
  }),
  noResults: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: theme.spacing(2),
    backgroundColor: theme.colors.background.secondary,
    borderRadius: theme.shape.radius.lg,
    fontStyle: "italic"
  })
});


/***/ }),

/***/ "./public/app/features/browse-dashboards/BrowseFolderAlertingPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowseFolderAlertingPage: () => (/* binding */ BrowseFolderAlertingPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var app_api_clients_folder_v1beta1_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/api/clients/folder/v1beta1/hooks.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_features_folders_state_navModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");
/* harmony import */ var _alerting_unified_AlertsFolderView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/AlertsFolderView.tsx");
/* harmony import */ var _alerting_unified_api_alertRuleApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");
/* harmony import */ var _alerting_unified_api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/api/featureDiscoveryApi.ts");
/* harmony import */ var _alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _components_FolderActionsButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/browse-dashboards/components/FolderActionsButton.tsx");















const { useRulerNamespaceQuery } = _alerting_unified_api_alertRuleApi__WEBPACK_IMPORTED_MODULE_9__.alertRuleApi;
function BrowseFolderAlertingPage() {
  const { uid: folderUID = "" } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_2__.useParams)();
  const { data: folderDTO, isLoading: isFolderLoading } = (0,app_api_clients_folder_v1beta1_hooks__WEBPACK_IMPORTED_MODULE_5__.useGetFolderQueryFacade)(folderUID);
  const {
    data: rulerNamespace = {},
    isLoading: isRulerNamespaceLoading,
    error: rulerNamespaceError
  } = useRulerNamespaceQuery({
    rulerConfig: _alerting_unified_api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_10__.GRAFANA_RULER_CONFIG,
    namespace: folderUID
  });
  const [saveFolder] = (0,app_api_clients_folder_v1beta1_hooks__WEBPACK_IMPORTED_MODULE_5__.useUpdateFolder)();
  const navModel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!folderDTO) {
      return void 0;
    }
    const model = (0,app_features_folders_state_navModel__WEBPACK_IMPORTED_MODULE_7__.buildNavModel)(folderDTO);
    const alertingTabID = (0,app_features_folders_state_navModel__WEBPACK_IMPORTED_MODULE_7__.getAlertingTabID)(folderDTO.uid);
    const alertingTab = model.children?.find((child) => child.id === alertingTabID);
    if (alertingTab) {
      alertingTab.active = true;
    }
    return model;
  }, [folderDTO]);
  const onEditTitle = folderUID ? async (newValue) => {
    if (folderDTO) {
      const result = await saveFolder({
        ...folderDTO,
        title: newValue
      });
      if ("error" in result) {
        throw result.error;
      }
    }
  } : void 0;
  const isLoading = isFolderLoading || isRulerNamespaceLoading;
  const folderRules = Object.values(rulerNamespace).flatMap((group) => group).flatMap((group) => group.rules).filter(_alerting_unified_utils_rules__WEBPACK_IMPORTED_MODULE_12__.rulerRuleType.grafana.rule);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__.Page,
    {
      navId: "dashboards/browse",
      pageNav: navModel,
      onEditTitle,
      actions: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: folderDTO && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_FolderActionsButton__WEBPACK_IMPORTED_MODULE_13__.FolderActionsButton, { folder: folderDTO }) }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__.Page.Contents, { isLoading, children: [
        !folderDTO && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert,
          {
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("browse-dashboards.browse-folder-alerting-page.title-folder-not-found", "Folder not found")
          }
        ),
        !!rulerNamespaceError && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert,
          {
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("browse-dashboards.browse-folder-alerting-page.title-ruler-namespace-error", "Cannot load rules"),
            severity: "error",
            children: (0,_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_11__.stringifyErrorLike)(rulerNamespaceError)
          }
        ),
        folderDTO && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_alerting_unified_AlertsFolderView__WEBPACK_IMPORTED_MODULE_8__.AlertsFolderView, { folder: folderDTO, rules: folderRules })
      ] })
    }
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrowseFolderAlertingPage);


/***/ }),

/***/ "./public/app/features/browse-dashboards/components/BrowseActions/DeleteModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteModal: () => (/* binding */ DeleteModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Space.tsx");
/* harmony import */ var app_api_clients_folder_v1beta1_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/api/clients/folder/v1beta1/hooks.ts");
/* harmony import */ var _DescendantCount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/browse-dashboards/components/BrowseActions/DescendantCount.tsx");








const DeleteModal = ({ onConfirm, onDismiss, selectedItems, ...props }) => {
  const { data } = (0,app_api_clients_folder_v1beta1_hooks__WEBPACK_IMPORTED_MODULE_9__.useGetAffectedItems)(selectedItems);
  const deleteIsInvalid = Boolean(data && (data.alertrules || data.library_elements));
  const [isDeleting, setIsDeleting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const onDelete = async () => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)("grafana_manage_dashboards_delete_clicked", {
      item_counts: {
        dashboard: Object.keys(selectedItems.dashboard).length,
        folder: Object.keys(selectedItems.folder).length
      },
      source: "browse_dashboards",
      restore_enabled: Boolean(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.featureToggles.restoreDashboards)
    });
    setIsDeleting(true);
    try {
      await onConfirm();
      setIsDeleting(false);
      onDismiss();
    } catch {
      setIsDeleting(false);
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ConfirmModal,
    {
      body: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.featureToggles.restoreDashboards && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { element: "p", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "browse-dashboards.action.delete-modal-restore-dashboards-text", children: "This action will delete the selected folders immediately. Deleted dashboards will be kept in the history for up to 12 months and can be restored by your organization administrator during that time. The history is limited to 1000 dashboards \u2014 older ones may be removed sooner if the limit is reached. Folders cannot be restored." }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Space, { v: 2 })
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { element: "p", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "browse-dashboards.action.delete-modal-text", children: "This action will delete the following content:" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DescendantCount__WEBPACK_IMPORTED_MODULE_10__.DescendantCount, { selectedItems }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Space, { v: 2 })
      ] }),
      description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: deleteIsInvalid ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert,
        {
          severity: "warning",
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("browse-dashboards.action.delete-modal-invalid-title", "Cannot delete folder"),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "browse-dashboards.action.delete-modal-invalid-text", children: "One or more folders contain library panels or alert rules. Delete these first in order to proceed." })
        }
      ) : null }),
      confirmationText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("browse-dashboards.action.confirmation-text", "Delete"),
      confirmText: isDeleting ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("browse-dashboards.action.deleting", "Deleting...") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("browse-dashboards.action.delete-button", "Delete"),
      onDismiss,
      onConfirm: onDelete,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("browse-dashboards.action.delete-modal-title", "Delete"),
      ...props,
      disabled: deleteIsInvalid
    }
  );
};


/***/ }),

/***/ "./public/app/features/browse-dashboards/components/BrowseActions/MoveModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoveModal: () => (/* binding */ MoveModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Space.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var app_features_provisioning_components_Shared_MoveActionAvailableTargetWarning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/provisioning/components/Shared/MoveActionAvailableTargetWarning.tsx");
/* harmony import */ var app_features_provisioning_components_Shared_ProvisioningAwareFolderPicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/provisioning/components/Shared/ProvisioningAwareFolderPicker.tsx");
/* harmony import */ var _DescendantCount__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/browse-dashboards/components/BrowseActions/DescendantCount.tsx");








const MoveModal = ({ onConfirm, onDismiss, selectedItems, ...props }) => {
  const [moveTarget, setMoveTarget] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [isMoving, setIsMoving] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const selectedFolders = Object.keys(selectedItems.folder).filter((uid) => selectedItems.folder[uid]);
  const onMove = async () => {
    if (moveTarget !== void 0) {
      setIsMoving(true);
      try {
        await onConfirm(moveTarget);
        setIsMoving(false);
        onDismiss();
      } catch {
        setIsMoving(false);
      }
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("browse-dashboards.action.move-modal-title", "Move"), onDismiss, ...props, children: [
    selectedFolders.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert,
      {
        severity: "info",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("browse-dashboards.action.move-modal-alert", "Moving this item may change its permissions.")
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_provisioning_components_Shared_MoveActionAvailableTargetWarning__WEBPACK_IMPORTED_MODULE_10__.MoveActionAvailableTargetWarning, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Box, { paddingTop: 2, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { element: "p", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "browse-dashboards.action.move-modal-text", children: "This action will move the following content:" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DescendantCount__WEBPACK_IMPORTED_MODULE_12__.DescendantCount, { selectedItems })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Space, { v: 3 }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field, { noMargin: true, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("browse-dashboards.action.move-modal-field-label", "Folder name"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      app_features_provisioning_components_Shared_ProvisioningAwareFolderPicker__WEBPACK_IMPORTED_MODULE_11__.ProvisioningAwareFolderPicker,
      {
        value: moveTarget,
        excludeUIDs: selectedFolders,
        onChange: setMoveTarget,
        repositoryName: void 0
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal.ButtonRow, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: onDismiss, variant: "secondary", fill: "outline", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "browse-dashboards.action.cancel-button", children: "Cancel" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { disabled: moveTarget === void 0 || isMoving, onClick: onMove, variant: "primary", children: isMoving ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("browse-dashboards.action.moving", "Moving...") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("browse-dashboards.action.move-button", "Move") })
    ] })
  ] });
};


/***/ }),

/***/ "./public/app/features/browse-dashboards/components/FolderActionsButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FolderActionsButton: () => (/* binding */ FolderActionsButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/legacyEvents.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/Menu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/MenuItem.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Drawer/Drawer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Dropdown/Dropdown.tsx");
/* harmony import */ var app_core_components_AccessControl_Permissions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/components/AccessControl/Permissions.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_features_provisioning_components_BulkActions_BulkMoveProvisionedResource__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/provisioning/components/BulkActions/BulkMoveProvisionedResource.tsx");
/* harmony import */ var app_features_provisioning_components_Folders_DeleteProvisionedFolderForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/provisioning/components/Folders/DeleteProvisionedFolderForm.tsx");
/* harmony import */ var app_features_provisioning_hooks_useIsProvisionedInstance__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/provisioning/hooks/useIsProvisionedInstance.ts");
/* harmony import */ var app_features_provisioning_utils_repository__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/provisioning/utils/repository.ts");
/* harmony import */ var app_types_events__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _api_clients_folder_v1beta1_hooks__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/api/clients/folder/v1beta1/hooks.ts");
/* harmony import */ var _apiserver_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/apiserver/types.ts");
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/browse-dashboards/permissions.ts");
/* harmony import */ var _BrowseActions_DeleteModal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/browse-dashboards/components/BrowseActions/DeleteModal.tsx");
/* harmony import */ var _BrowseActions_MoveModal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/browse-dashboards/components/BrowseActions/MoveModal.tsx");



















function FolderActionsButton({ folder, repoType, isReadOnlyRepo }) {
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [showPermissionsDrawer, setShowPermissionsDrawer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [showDeleteProvisionedFolderDrawer, setShowDeleteProvisionedFolderDrawer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [showMoveProvisionedFolderDrawer, setShowMoveProvisionedFolderDrawer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [moveFolder] = (0,_api_clients_folder_v1beta1_hooks__WEBPACK_IMPORTED_MODULE_20__.useMoveFolderMutationFacade)();
  const isProvisionedInstance = (0,app_features_provisioning_hooks_useIsProvisionedInstance__WEBPACK_IMPORTED_MODULE_17__.useIsProvisionedInstance)();
  const deleteFolder = (0,_api_clients_folder_v1beta1_hooks__WEBPACK_IMPORTED_MODULE_20__.useDeleteFolderMutationFacade)();
  const { canEditFolders, canDeleteFolders, canViewPermissions, canSetPermissions } = (0,_permissions__WEBPACK_IMPORTED_MODULE_22__.getFolderPermissions)(folder);
  const isProvisionedFolder = folder.managedBy === _apiserver_types__WEBPACK_IMPORTED_MODULE_21__.ManagerKind.Repo;
  const isProvisionedRootFolder = isProvisionedFolder && !isProvisionedInstance && folder.parentUid === void 0;
  const canMoveFolder = canEditFolders && !isProvisionedRootFolder;
  const onMove = async (destinationUID) => {
    await moveFolder({ folderUID: folder.uid, destinationUID });
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)("grafana_manage_dashboards_item_moved", {
      item_counts: {
        folder: 1,
        dashboard: 0
      },
      source: "folder_actions"
    });
  };
  const onDelete = async () => {
    const result = await deleteFolder(folder);
    if (result.error) {
      app_core_core__WEBPACK_IMPORTED_MODULE_14__.appEvents.publish({
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AppEvents.alertError.name,
        payload: [
          (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
            "browse-dashboards.folder-actions-button.delete-folder-error",
            "Error deleting folder. Please try again later."
          )
        ]
      });
      return;
    }
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)("grafana_manage_dashboards_item_deleted", {
      item_counts: {
        folder: 1,
        dashboard: 0
      },
      source: "folder_actions"
    });
    const { parents } = folder;
    const parentUrl = parents && parents.length ? parents[parents.length - 1].url : "/dashboards";
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.locationService.push(parentUrl);
  };
  const showMoveModal = () => {
    app_core_core__WEBPACK_IMPORTED_MODULE_14__.appEvents.publish(
      new app_types_events__WEBPACK_IMPORTED_MODULE_19__.ShowModalReactEvent({
        component: _BrowseActions_MoveModal__WEBPACK_IMPORTED_MODULE_24__.MoveModal,
        props: {
          selectedItems: {
            folder: { [folder.uid]: true },
            dashboard: {},
            panel: {},
            $all: false
          },
          onConfirm: onMove
        }
      })
    );
  };
  const showDeleteModal = () => {
    app_core_core__WEBPACK_IMPORTED_MODULE_14__.appEvents.publish(
      new app_types_events__WEBPACK_IMPORTED_MODULE_19__.ShowModalReactEvent({
        component: _BrowseActions_DeleteModal__WEBPACK_IMPORTED_MODULE_23__.DeleteModal,
        props: {
          selectedItems: {
            folder: { [folder.uid]: true },
            dashboard: {},
            panel: {},
            $all: false
          },
          onConfirm: onDelete
        }
      })
    );
  };
  const showDeleteProvisionedModal = () => {
    setShowDeleteProvisionedFolderDrawer(true);
  };
  const handleShowMoveProvisionedFolderDrawer = () => {
    setShowMoveProvisionedFolderDrawer(true);
  };
  const managePermissionsLabel = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("browse-dashboards.folder-actions-button.manage-permissions", "Manage permissions");
  const moveLabel = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("browse-dashboards.folder-actions-button.move", "Move");
  const deleteLabel = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("browse-dashboards.folder-actions-button.delete", "Delete");
  const menu = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Menu, { children: [
    canViewPermissions && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.MenuItem, { onClick: () => setShowPermissionsDrawer(true), label: managePermissionsLabel }),
    canMoveFolder && !isReadOnlyRepo && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.MenuItem,
      {
        onClick: isProvisionedFolder ? handleShowMoveProvisionedFolderDrawer : showMoveModal,
        label: moveLabel
      }
    ),
    canDeleteFolders && !isReadOnlyRepo && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.MenuItem,
      {
        destructive: true,
        onClick: isProvisionedFolder ? showDeleteProvisionedModal : showDeleteModal,
        label: deleteLabel
      }
    )
  ] });
  if (!canViewPermissions && !canMoveFolder && !canDeleteFolders) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Dropdown, { overlay: menu, onVisibleChange: setIsOpen, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button,
      {
        variant: "secondary",
        disabled: isReadOnlyRepo && !canViewPermissions,
        tooltip: isReadOnlyRepo && !canViewPermissions ? (0,app_features_provisioning_utils_repository__WEBPACK_IMPORTED_MODULE_18__.getReadOnlyTooltipText)({ isLocal: repoType === "local" }) : void 0,
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "browse-dashboards.folder-actions-button.folder-actions", children: "Folder actions" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { name: isOpen ? "angle-up" : "angle-down" })
        ]
      }
    ) }),
    showPermissionsDrawer && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Drawer,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("browse-dashboards.action.manage-permissions-button", "Manage permissions"),
        subtitle: folder.title,
        onClose: () => setShowPermissionsDrawer(false),
        size: "md",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_AccessControl_Permissions__WEBPACK_IMPORTED_MODULE_13__.Permissions, { resource: "folders", resourceId: folder.uid, canSetPermissions })
      }
    ),
    showDeleteProvisionedFolderDrawer && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Drawer,
      {
        title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Text, { variant: "h3", element: "h2", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("browse-dashboards.action.delete-provisioned-folder", "Delete provisioned folder") }),
        subtitle: folder.title,
        onClose: () => setShowDeleteProvisionedFolderDrawer(false),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          app_features_provisioning_components_Folders_DeleteProvisionedFolderForm__WEBPACK_IMPORTED_MODULE_16__.DeleteProvisionedFolderForm,
          {
            parentFolder: folder,
            onDismiss: () => setShowDeleteProvisionedFolderDrawer(false)
          }
        )
      }
    ),
    showMoveProvisionedFolderDrawer && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Drawer,
      {
        title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Text, { variant: "h3", element: "h2", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("browse-dashboards.action.move-provisioned-folder", "Move provisioned folder") }),
        subtitle: folder.title,
        onClose: () => setShowMoveProvisionedFolderDrawer(false),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          app_features_provisioning_components_BulkActions_BulkMoveProvisionedResource__WEBPACK_IMPORTED_MODULE_15__.BulkMoveProvisionedResource,
          {
            folderUid: folder.uid,
            selectedItems: { dashboard: {}, folder: { [folder.uid]: true } },
            onDismiss: () => setShowMoveProvisionedFolderDrawer(false)
          }
        )
      }
    )
  ] });
}


/***/ }),

/***/ "./public/app/features/browse-dashboards/permissions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFolderPermissions: () => (/* binding */ getFolderPermissions)
/* harmony export */ });
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/accessControl.ts");



function checkFolderPermission(action, folderDTO) {
  return folderDTO ? app_core_core__WEBPACK_IMPORTED_MODULE_0__.contextSrv.hasPermissionInMetadata(action, folderDTO) : app_core_core__WEBPACK_IMPORTED_MODULE_0__.contextSrv.hasPermission(action);
}
function checkCanCreateFolders(folderDTO) {
  return checkFolderPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_1__.AccessControlAction.FoldersCreate, folderDTO);
}
function getFolderPermissions(folderDTO) {
  const canCreateDashboards = checkFolderPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_1__.AccessControlAction.DashboardsCreate, folderDTO);
  const canCreateFolders = checkCanCreateFolders(folderDTO);
  const canDeleteFolders = checkFolderPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_1__.AccessControlAction.FoldersDelete, folderDTO);
  const canDeleteDashboards = checkFolderPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_1__.AccessControlAction.DashboardsDelete, folderDTO);
  const canEditDashboards = checkFolderPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_1__.AccessControlAction.DashboardsWrite, folderDTO);
  const canEditFolders = checkFolderPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_1__.AccessControlAction.FoldersWrite, folderDTO);
  const canSetPermissions = checkFolderPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_1__.AccessControlAction.FoldersPermissionsWrite, folderDTO);
  const canViewPermissions = checkFolderPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_1__.AccessControlAction.FoldersPermissionsRead, folderDTO);
  return {
    canCreateDashboards,
    canCreateFolders,
    canDeleteFolders,
    canEditDashboards,
    canEditFolders,
    canSetPermissions,
    canViewPermissions,
    canDeleteDashboards
  };
}


/***/ }),

/***/ "./public/app/features/provisioning/components/BulkActions/BulkMoveProvisionedResource.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BulkMoveProvisionedResource: () => (/* binding */ BulkMoveProvisionedResource)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/legacyEvents.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var app_api_clients_folder_v1beta1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/api/clients/folder/v1beta1/index.ts");
/* harmony import */ var app_features_apiserver_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/apiserver/types.ts");
/* harmony import */ var app_features_browse_dashboards_components_BrowseActions_DescendantCount__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/browse-dashboards/components/BrowseActions/DescendantCount.tsx");
/* harmony import */ var app_features_browse_dashboards_components_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/browse-dashboards/components/utils.ts");
/* harmony import */ var app_features_provisioning_Job_JobStatus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/provisioning/Job/JobStatus.tsx");
/* harmony import */ var app_features_provisioning_components_defaults__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/provisioning/components/defaults.ts");
/* harmony import */ var app_features_provisioning_hooks_useGetResourceRepositoryView__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/provisioning/hooks/useGetResourceRepositoryView.ts");
/* harmony import */ var app_features_search_constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/search/constants.ts");
/* harmony import */ var _Shared_ProvisioningAlert__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/provisioning/Shared/ProvisioningAlert.tsx");
/* harmony import */ var _hooks_useSelectionRepoValidation__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/provisioning/hooks/useSelectionRepoValidation.ts");
/* harmony import */ var _Shared_MoveActionAvailableTargetWarning__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/provisioning/components/Shared/MoveActionAvailableTargetWarning.tsx");
/* harmony import */ var _Shared_ProvisioningAwareFolderPicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/provisioning/components/Shared/ProvisioningAwareFolderPicker.tsx");
/* harmony import */ var _Shared_RepoInvalidStateBanner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/provisioning/components/Shared/RepoInvalidStateBanner.tsx");
/* harmony import */ var _Shared_ResourceEditFormSharedFields__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/provisioning/components/Shared/ResourceEditFormSharedFields.tsx");
/* harmony import */ var _utils_timestamp__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/provisioning/components/utils/timestamp.ts");
/* harmony import */ var _useBulkActionJob__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/provisioning/components/BulkActions/useBulkActionJob.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/provisioning/components/BulkActions/utils.ts");


























function FormContent({ initialValues, selectedItems, repository, workflowOptions, onDismiss }) {
  const [job, setJob] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const [jobError, setJobError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const [targetFolderUID, setTargetFolderUID] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(void 0);
  const [hasSubmitted, setHasSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const { createBulkJob, isLoading: isCreatingJob } = (0,_useBulkActionJob__WEBPACK_IMPORTED_MODULE_27__.useBulkActionJob)();
  const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({ defaultValues: initialValues });
  const {
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors }
  } = methods;
  const workflow = watch("workflow");
  const { data: targetFolder } = (0,app_api_clients_folder_v1beta1__WEBPACK_IMPORTED_MODULE_12__.useGetFolderQuery)(targetFolderUID ? { name: targetFolderUID } : _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__.skipToken);
  const setupMoveOperation = () => {
    const targetFolderPathInRepo = (0,_utils__WEBPACK_IMPORTED_MODULE_28__.getTargetFolderPathInRepo)({
      targetFolderUID,
      targetFolder,
      repoName: repository.name
    });
    const resources = (0,app_features_browse_dashboards_components_utils__WEBPACK_IMPORTED_MODULE_15__.collectSelectedItems)(selectedItems);
    return { targetFolderPathInRepo, resources };
  };
  const handleSubmitForm = async (data) => {
    setHasSubmitted(true);
    const { targetFolderPathInRepo, resources } = setupMoveOperation();
    if (!targetFolderPathInRepo) {
      setError("targetFolderUID", {
        type: "manual",
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "browse-dashboards.bulk-move-resources-form.error-no-target-folder-path",
          "Target folder path is invalid or empty, please select again."
        )
      });
      setHasSubmitted(false);
      return;
    }
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.reportInteraction)("grafana_provisioning_bulk_move_submitted", {
      workflow: data.workflow,
      repositoryName: repository.name ?? "unknown",
      repositoryType: repository.type ?? "unknown",
      resourceCount: resources.length
    });
    const jobSpec = {
      action: "move",
      move: {
        ref: data.workflow === "write" ? void 0 : data.ref,
        targetPath: targetFolderPathInRepo,
        resources
      }
    };
    const result = await createBulkJob(repository, jobSpec);
    if (result.success && result.job) {
      setJob(result.job);
    } else if (!result.success && result.error) {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.getAppEvents)().publish({
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.AppEvents.alertError.name,
        payload: [
          (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("browse-dashboards.bulk-move-resources-form.error-moving-resources", "Error moving resources"),
          result.error
        ]
      });
      setHasSubmitted(false);
    }
  };
  const onStatusChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((statusInfo) => {
    if (statusInfo.status === "error" && statusInfo.error) {
      setJobError(statusInfo.error);
    }
  }, []);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.FormProvider, { ...methods, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", { onSubmit: handleSubmit(handleSubmitForm), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "column", gap: 2, children: hasSubmitted && job ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_ProvisioningAlert__WEBPACK_IMPORTED_MODULE_20__.ProvisioningAlert, { error: jobError }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_provisioning_Job_JobStatus__WEBPACK_IMPORTED_MODULE_16__.JobStatus, { watch: job, jobType: "move", onStatusChange })
  ] }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_MoveActionAvailableTargetWarning__WEBPACK_IMPORTED_MODULE_22__.MoveActionAvailableTargetWarning, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Box, { paddingBottom: 2, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "browse-dashboards.bulk-move-resources-form.move-total", children: "In total, this will affect:" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_browse_dashboards_components_BrowseActions_DescendantCount__WEBPACK_IMPORTED_MODULE_14__.DescendantCount, { selectedItems: { ...selectedItems, panel: {}, $all: false } })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Field,
      {
        noMargin: true,
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("browse-dashboards.bulk-move-resources-form.target-folder", "Target Folder"),
        error: errors.targetFolderUID?.message,
        invalid: !!errors.targetFolderUID,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _Shared_ProvisioningAwareFolderPicker__WEBPACK_IMPORTED_MODULE_23__.ProvisioningAwareFolderPicker,
          {
            value: targetFolderUID,
            onChange: (uid) => {
              setTargetFolderUID(uid || "");
              clearErrors("targetFolderUID");
            },
            repositoryName: repository.name,
            excludeUIDs: [...Object.keys(selectedItems?.folder).map((uid) => uid)]
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _Shared_ResourceEditFormSharedFields__WEBPACK_IMPORTED_MODULE_25__.ResourceEditFormSharedFields,
      {
        resourceType: "folder",
        isNew: false,
        workflow,
        workflowOptions,
        repository,
        hidePath: true
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { gap: 2, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button, { variant: "secondary", fill: "outline", onClick: onDismiss, disabled: isCreatingJob, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "browse-dashboards.bulk-move-resources-form.button-cancel", children: "Cancel" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button,
        {
          type: "submit",
          disabled: !!job || isCreatingJob || hasSubmitted || targetFolderUID === void 0,
          children: isCreatingJob ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("browse-dashboards.bulk-move-resources-form.button-moving", "Moving...") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("browse-dashboards.bulk-move-resources-form.button-move", "Move")
        }
      )
    ] })
  ] }) }) }) });
}
function BulkMoveProvisionedResource({ folderUid, selectedItems, onDismiss }) {
  const isRootPage = !folderUid || folderUid === app_features_search_constants__WEBPACK_IMPORTED_MODULE_19__.GENERAL_FOLDER_UID;
  const { selectedItemsRepoUID } = (0,_hooks_useSelectionRepoValidation__WEBPACK_IMPORTED_MODULE_21__.useSelectionRepoValidation)(selectedItems);
  const { repository, folder, isReadOnlyRepo } = (0,app_features_provisioning_hooks_useGetResourceRepositoryView__WEBPACK_IMPORTED_MODULE_18__.useGetResourceRepositoryView)({
    folderName: isRootPage ? selectedItemsRepoUID : folderUid
  });
  const workflowOptions = (0,app_features_provisioning_components_defaults__WEBPACK_IMPORTED_MODULE_17__.getWorkflowOptions)(repository);
  const folderPath = folder?.metadata?.annotations?.[app_features_apiserver_types__WEBPACK_IMPORTED_MODULE_13__.AnnoKeySourcePath] || "";
  const timestamp = (0,_utils_timestamp__WEBPACK_IMPORTED_MODULE_26__.generateTimestamp)();
  const defaultWorkflow = (0,app_features_provisioning_components_defaults__WEBPACK_IMPORTED_MODULE_17__.getDefaultWorkflow)(repository);
  const initialValues = {
    comment: "",
    ref: defaultWorkflow === "branch" ? `bulk-move/${timestamp}` : repository?.branch ?? "",
    workflow: defaultWorkflow
  };
  if (!repository || isReadOnlyRepo) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_RepoInvalidStateBanner__WEBPACK_IMPORTED_MODULE_24__.RepoInvalidStateBanner, { noRepository: !repository, isReadOnlyRepo });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    FormContent,
    {
      selectedItems,
      onDismiss,
      initialValues,
      repository,
      workflowOptions,
      folderPath: isRootPage ? "/" : folderPath
    }
  );
}


/***/ }),

/***/ "./public/app/features/provisioning/components/Folders/DeleteProvisionedFolderForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteProvisionedFolderForm: () => (/* binding */ DeleteProvisionedFolderForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/legacyEvents.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var app_features_browse_dashboards_components_BrowseActions_DescendantCount__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/browse-dashboards/components/BrowseActions/DescendantCount.tsx");
/* harmony import */ var app_features_provisioning_Job_JobStatus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/provisioning/Job/JobStatus.tsx");
/* harmony import */ var _hooks_useProvisionedFolderFormData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/provisioning/hooks/useProvisionedFolderFormData.ts");
/* harmony import */ var _hooks_useProvisionedRequestHandler__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/provisioning/hooks/useProvisionedRequestHandler.ts");
/* harmony import */ var _utils_redirect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/provisioning/utils/redirect.ts");
/* harmony import */ var _BulkActions_useBulkActionJob__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/provisioning/components/BulkActions/useBulkActionJob.ts");
/* harmony import */ var _Shared_RepoInvalidStateBanner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/provisioning/components/Shared/RepoInvalidStateBanner.tsx");
/* harmony import */ var _Shared_ResourceEditFormSharedFields__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/provisioning/components/Shared/ResourceEditFormSharedFields.tsx");


















function FormContent({ initialValues, parentFolder, repository, workflowOptions, folder, onDismiss }) {
  const resourceId = parentFolder?.uid || "";
  const { createBulkJob, isLoading } = (0,_BulkActions_useBulkActionJob__WEBPACK_IMPORTED_MODULE_17__.useBulkActionJob)();
  const [deleteRepoFile, request] = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_11__.useDeleteRepositoryFilesWithPathMutation)();
  const navigate = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  const [job, setJob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [hasSubmitted, setHasSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({ defaultValues: initialValues });
  const { handleSubmit, watch } = methods;
  const [ref, workflow] = watch(["ref", "workflow"]);
  const showError = (error) => {
    const payload = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("browse-dashboards.delete-provisioned-folder-form.api-error", "Failed to delete folder"), error];
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.getAppEvents)().publish({
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.AppEvents.alertError.name,
      payload
    });
  };
  const handleSubmitForm = async ({ repo, path, comment }) => {
    if (!repo || !repository) {
      showError();
      return;
    }
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.reportInteraction)("grafana_provisioning_folder_delete_submitted", {
      workflow,
      repositoryName: repo,
      repositoryType: repository?.type ?? "unknown"
    });
    if (workflow === "branch") {
      const branchRef = ref;
      const commitMessage = comment || (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("browse-dashboards.delete-provisioned-folder-form.commit", "Delete folder");
      try {
        await deleteRepoFile({
          name: repo,
          path: `${path}/`,
          ref: branchRef,
          message: commitMessage
        }).unwrap();
      } catch (error) {
        showError(error);
      }
      return;
    }
    const jobSpec = {
      action: "delete",
      delete: {
        ref: void 0,
        resources: [
          {
            name: resourceId,
            group: "folder.grafana.app",
            kind: "Folder"
          }
        ]
      }
    };
    try {
      const result = await createBulkJob(repository, jobSpec);
      if (!result.success) {
        showError();
        return;
      }
      if (result.job) {
        setJob(result.job);
        setHasSubmitted(true);
      }
    } catch (error) {
      showError(error);
    }
  };
  const onBranchSuccess = ({ urls }, info) => {
    const prUrl = urls?.newPullRequestURL;
    if (prUrl) {
      const url = (0,_utils_redirect__WEBPACK_IMPORTED_MODULE_16__.buildResourceBranchRedirectUrl)({
        paramName: "new_pull_request_url",
        paramValue: prUrl,
        repoType: info.repoType
      });
      navigate(url);
    }
  };
  const handleJobStatusChange = (statusInfo) => {
    if (statusInfo.status === "success") {
      onDismiss?.();
      navigate("/dashboards");
    }
  };
  const onError = (error) => {
    showError(error);
  };
  (0,_hooks_useProvisionedRequestHandler__WEBPACK_IMPORTED_MODULE_15__.useProvisionedRequestHandler)({
    request,
    workflow,
    resourceType: "folder",
    repository,
    selectedBranch: ref,
    successMessage: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
      "browse-dashboards.delete-provisioned-folder-form.success-message",
      "Folder deleted successfully"
    ),
    handlers: {
      onDismiss,
      onBranchSuccess,
      onError
    }
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: hasSubmitted && job ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_provisioning_Job_JobStatus__WEBPACK_IMPORTED_MODULE_13__.JobStatus, { watch: job, jobType: "delete", onStatusChange: handleJobStatusChange }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, { ...methods, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", { onSubmit: handleSubmit(handleSubmitForm), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "column", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Box, { paddingBottom: 2, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "browse-dashboards.delete-provisioned-folder-form.delete-warning", children: "This will delete this folder and all its descendants. In total, this will affect:" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        app_features_browse_dashboards_components_BrowseActions_DescendantCount__WEBPACK_IMPORTED_MODULE_12__.DescendantCount,
        {
          selectedItems: {
            folder: { [resourceId]: true },
            dashboard: {},
            panel: {},
            $all: false
          }
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _Shared_ResourceEditFormSharedFields__WEBPACK_IMPORTED_MODULE_19__.ResourceEditFormSharedFields,
      {
        resourceType: "folder",
        isNew: false,
        workflow,
        workflowOptions,
        repository
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { gap: 2, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button, { variant: "secondary", fill: "outline", onClick: onDismiss, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "browse-dashboards.delete-provisioned-folder-form.button-cancel", children: "Cancel" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button, { type: "submit", disabled: isLoading || request.isLoading, variant: "destructive", children: isLoading || request.isLoading ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("browse-dashboards.delete-provisioned-folder-form.button-deleting", "Deleting...") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("browse-dashboards.delete-provisioned-folder-form.button-delete", "Delete") })
    ] })
  ] }) }) }) });
}
function DeleteProvisionedFolderForm({ parentFolder, onDismiss }) {
  const { workflowOptions, repository, folder, initialValues, isReadOnlyRepo } = (0,_hooks_useProvisionedFolderFormData__WEBPACK_IMPORTED_MODULE_14__.useProvisionedFolderFormData)({
    folderUid: parentFolder?.uid,
    title: parentFolder?.title
  });
  if (isReadOnlyRepo || !initialValues) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _Shared_RepoInvalidStateBanner__WEBPACK_IMPORTED_MODULE_18__.RepoInvalidStateBanner,
      {
        noRepository: !initialValues,
        isReadOnlyRepo,
        readOnlyMessage: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "browse-dashboards.delete-folder.read-only-message",
          "To delete this folder, please remove the folder from your repository."
        )
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    FormContent,
    {
      parentFolder,
      onDismiss,
      initialValues,
      repository,
      workflowOptions,
      folder
    }
  );
}


/***/ }),

/***/ "./public/app/features/provisioning/components/Shared/MoveActionAvailableTargetWarning.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoveActionAvailableTargetWarning: () => (/* binding */ MoveActionAvailableTargetWarning)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");




function MoveActionAvailableTargetWarning() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Box, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "browse-dashboards.bulk-move-resources-form.move-warning", children: "This will move selected folders and their descendants. Available target folders depend on the selected resources." }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip,
      {
        content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
          "browse-dashboards.bulk-move-resources-form.move-warning-tooltip",
          "You can only move provisioned resources within their provisioned folder, and local resources to local folders."
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { marginLeft: "4px" }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { name: "info-circle", size: "sm" }) })
      }
    )
  ] });
}


/***/ }),

/***/ "./public/app/features/provisioning/hooks/useProvisionedFolderFormData.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useProvisionedFolderFormData: () => (/* binding */ useProvisionedFolderFormData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_features_apiserver_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/apiserver/types.ts");
/* harmony import */ var app_features_provisioning_components_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/provisioning/components/defaults.ts");
/* harmony import */ var app_features_provisioning_hooks_useGetResourceRepositoryView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/provisioning/hooks/useGetResourceRepositoryView.ts");
/* harmony import */ var _components_utils_timestamp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/provisioning/components/utils/timestamp.ts");






function useProvisionedFolderFormData({
  folderUid,
  title
}) {
  const { repository, folder, isLoading, isReadOnlyRepo } = (0,app_features_provisioning_hooks_useGetResourceRepositoryView__WEBPACK_IMPORTED_MODULE_3__.useGetResourceRepositoryView)({ folderName: folderUid });
  const timestamp = (0,_components_utils_timestamp__WEBPACK_IMPORTED_MODULE_4__.generateTimestamp)();
  const workflowOptions = (0,app_features_provisioning_components_defaults__WEBPACK_IMPORTED_MODULE_2__.getWorkflowOptions)(repository);
  const initialValues = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!repository || isLoading) {
      return void 0;
    }
    const defaultWorkflow = (0,app_features_provisioning_components_defaults__WEBPACK_IMPORTED_MODULE_2__.getDefaultWorkflow)(repository);
    return {
      title: title || "",
      comment: "",
      ref: defaultWorkflow === "branch" ? `folder/${timestamp}` : repository?.branch ?? "",
      repo: repository.name || "",
      path: folder?.metadata?.annotations?.[app_features_apiserver_types__WEBPACK_IMPORTED_MODULE_1__.AnnoKeySourcePath] || "",
      workflow: (0,app_features_provisioning_components_defaults__WEBPACK_IMPORTED_MODULE_2__.getDefaultWorkflow)(repository)
    };
  }, [repository, isLoading, title, timestamp, folder?.metadata?.annotations]);
  return {
    repository,
    folder,
    workflowOptions,
    initialValues,
    isReadOnlyRepo
  };
}


/***/ }),

/***/ "./public/app/features/provisioning/hooks/useSelectionRepoValidation.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSelectionRepoValidation: () => (/* binding */ useSelectionRepoValidation)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var app_features_browse_dashboards_state_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/browse-dashboards/state/utils.ts");
/* harmony import */ var app_features_provisioning_hooks_useIsProvisionedInstance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/provisioning/hooks/useIsProvisionedInstance.ts");
/* harmony import */ var app_features_provisioning_utils_repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/provisioning/utils/repository.ts");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _browse_dashboards_state_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/browse-dashboards/state/hooks.ts");









function useSelectionRepoValidation(selectedItems) {
  const provisioningEnabled = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.featureToggles.provisioning;
  const childrenByParentUID = (0,_browse_dashboards_state_hooks__WEBPACK_IMPORTED_MODULE_7__.useChildrenByParentUIDState)();
  const rootItems = (0,app_types_store__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_browse_dashboards_state_hooks__WEBPACK_IMPORTED_MODULE_7__.rootItemsSelector)?.items ?? [];
  const isProvisionedInstance = (0,app_features_provisioning_hooks_useIsProvisionedInstance__WEBPACK_IMPORTED_MODULE_4__.useIsProvisionedInstance)();
  const { data: settingsData } = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_2__.useGetFrontendSettingsQuery)(!provisioningEnabled ? _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_0__.skipToken : void 0);
  const getRepositoryByUid = (repoUid) => {
    if (!settingsData?.items || repoUid === "non_provisioned") {
      return void 0;
    }
    return settingsData.items.find((repo) => repo.name === repoUid);
  };
  const getRepoUid = (uid) => {
    const item = (0,app_features_browse_dashboards_state_utils__WEBPACK_IMPORTED_MODULE_3__.findItem)(rootItems, childrenByParentUID, uid);
    return item ? (0,app_features_provisioning_utils_repository__WEBPACK_IMPORTED_MODULE_5__.getItemRepositoryUid)(item, rootItems, childrenByParentUID) : "non_provisioned";
  };
  const selectedUIDs = [
    ...Object.keys(selectedItems.folder || {}).filter((id) => selectedItems.folder[id]),
    ...Object.keys(selectedItems.dashboard || {}).filter((id) => selectedItems.dashboard[id])
  ];
  const repoUIDs = selectedUIDs.map(getRepoUid).filter((repoId) => !!repoId);
  const selectedItemsRepoUID = repoUIDs.length > 0 ? repoUIDs[0] : void 0;
  const isCrossRepo = new Set(repoUIDs).size > 1;
  const isInLockedRepo = (uid) => {
    if (isProvisionedInstance) {
      return true;
    }
    return !selectedItemsRepoUID || getRepoUid(uid) === selectedItemsRepoUID;
  };
  const isUidInReadOnlyRepo = (uid) => {
    const repo = getRepositoryByUid(getRepoUid(uid));
    return repo ? (0,app_features_provisioning_utils_repository__WEBPACK_IMPORTED_MODULE_5__.getIsReadOnlyRepo)(repo) : false;
  };
  return {
    selectedItemsRepoUID,
    isInLockedRepo,
    isCrossRepo,
    // true if items are from different repositories
    isUidInReadOnlyRepo
  };
}


/***/ })

}]);
//# sourceMappingURL=FolderAlerting.988f8ca1f680a5a10b7e.js.map